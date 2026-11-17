/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: error text for developers only */
/**
 * autosave-journal.js — ModelCraft's autosave that writes what changed (0.10 PERF.24, session `history-10`). The shell's Autosave.doc({ journal }) takes
 * { base(), delta(), epoch() }:
 *
 *   base()   the whole file text, written once by the page's worker pool as before (PERF.38: no long task on the page), then again only
 *            when the changes written since add up to half of it.
 *   delta()  only what changed since the last write: the definitions whose content changed (a mesh only when its state `v` moved), the
 *            ids and order of all definitions, the camera (always, small), and the file's other parts (images, materials, add-on data,
 *            …) when their JSON changed. Meshes go as the typed arrays the model holds (structured clone), not as base64 text.
 *
 * recoverModelText(rec) folds a base and its changes back into the .modelcraft text the app opens like any file.
 * DOM-free: the app passes what it knows (model, the text writer, the file's data without definitions).
 */
import { defToJSON } from './model.js';
import { encodeRaw, prettyJson } from './file-text.js';

let epochs = 0;

/** What a copy holds of each definition: the object, its rev, the time stamp and (a mesh) the mesh state. */
const entry = (model, d) => ({ d, rev: d.rev, v: model._v, mv: d.mesh ? d.mesh.v : 0, str: model.defString(d) });   // defString: the kept JSON of a definition (a mesh: only its {ref, v} and head)
const stamp = (model) => { const m = new Map(); for (const d of model.defs.values()) m.set(d.id, entry(model, d)); return m; };
/** Nothing touched it since the stamp: the same object, the same rev, no unscoped edit since (a mesh: the same state). */
const untouched = (model, d, e) => !!e && e.d === d && e.rev === d.rev && e.v >= model.unsafeVersion && (!d.mesh || e.mv === d.mesh.v);

const split = (j) => {
  const { view, images, ...rest } = j;
  return { view, images, rest, restStr: JSON.stringify(encodeRaw(structuredCloneLite(rest))), imagesStr: images ? JSON.stringify(images) : '' };
};
// the head's own parts are plain JSON (no typed arrays): a JSON round trip is its copy
const structuredCloneLite = (o) => JSON.parse(JSON.stringify(o));

/**
 * @param {object} o
 * @param {object} o.model         the Model
 * @param {Function} o.baseText    async () => the .modelcraft text (worker pool); it must gather its data before its first await
 * @param {Function} o.head        () => the file's data with `defs: 0` (modelData({ raw: true, noDefs: true }))
 * @param {Function} [o.meta]      () => small data kept with the copy
 */
export function modelJournal({ model, baseText, head, meta = null }) {
  const id = ++epochs;
  let memo = null, headMemo = null, resets = 0;
  return {
    epoch: () => id + ':' + resets,
    /** The next write starts from a new base (a file opened, a model replaced). */
    reset() { resets++; memo = null; headMemo = null; },
    async base() {
      const m = stamp(model), h = split(head());   // taken in the same tick the text's data is gathered
      const text = await baseText();
      return { data: { kind: 'm3d', v: 1, text }, size: text.length, meta: meta ? meta() : undefined, commit: () => { memo = m; headMemo = h; } };
    },
    async delta() {
      if (!memo) return null;
      const defs = [], order = [], next = new Map();
      for (const d of model.defs.values()) {
        order.push(d.id);
        const e = memo.get(d.id);
        if (untouched(model, d, e)) { next.set(d.id, e); continue; }
        const fresh = entry(model, d);
        next.set(d.id, fresh);
        if (e && e.str === fresh.str) continue;   // looked at again: the same content
        defs.push(defToJSON(d, true));
      }
      const del = [...memo.keys()].filter((k) => !next.has(k));
      const h = split(head());
      const out = { kind: 'm3d-delta', v: 1, order, defs, del, view: h.view };
      if (h.restStr !== headMemo.restStr) out.rest = JSON.parse(h.restStr);
      if (h.imagesStr !== headMemo.imagesStr) out.images = h.images || null;
      const camOnly = !defs.length && !del.length && out.rest === undefined && out.images === undefined;
      if (camOnly && JSON.stringify(h.view) === JSON.stringify(headMemo.view)) return null;
      let bytes = (out.rest ? h.restStr.length : 0) + (out.images ? h.imagesStr.length : 0) + 2000;
      for (const j of defs) bytes += j.mesh ? meshBytes(j.mesh) : JSON.stringify(j).length;
      return { data: out, size: bytes, meta: meta ? meta() : undefined, commit: () => { memo = next; headMemo = { ...h, view: h.view }; } };
    },
  };
}

const meshBytes = (v) => { let n = 0; const walk = (x) => { if (!x || typeof x !== 'object') return; if (ArrayBuffer.isView(x)) { n += x.byteLength; return; } for (const k of Object.keys(x)) { if (k === '\u0000b64' && ArrayBuffer.isView(x[k])) n += x[k].byteLength; else walk(x[k]); } }; walk(v); return n || 1000; };

/** The text of the model a copy holds: the base, with each change put on it in order. */
export function recoverModelText(rec) {
  const d = rec.data;
  if (!d || d.kind !== 'm3d' || typeof d.text !== 'string') throw new Error('Not a model copy.');
  const segs = rec.segments || [];
  if (!segs.length) return d.text;
  const j = JSON.parse(d.text);
  const byId = new Map((j.defs || []).map((x) => [x.id, x]));
  let order = (j.defs || []).map((x) => x.id);
  for (const s of segs) {
    if (!s || s.kind !== 'm3d-delta') throw new Error('Not a model change.');
    for (const x of s.defs) byId.set(x.id, encodeRaw(x));
    for (const k of s.del) byId.delete(k);
    order = s.order;
    if (s.rest) { for (const k of Object.keys(j)) if (k !== 'defs' && k !== 'view' && k !== 'images') delete j[k]; Object.assign(j, s.rest); }
    if (s.images !== undefined) { if (s.images === null) delete j.images; else j.images = s.images; }
    if (s.view) j.view = s.view;
  }
  j.defs = order.map((id) => byId.get(id)).filter(Boolean);
  const { view, ...rest } = j;
  return prettyJson({ ...rest, ...(view ? { view } : {}) });
}
