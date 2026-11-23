/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: error codes only; the words are the page's */
/**
 * file-text.js — the .modelcraft text and the exports, written where the page's thread does not wait (0.10 PERF.38,
 * session `model-part-10`). DOM-free: the page imports prettyJson, the page's worker pool (compute/runtime.js) runs the jobs.
 * At 500k faces the text took 2.5 s and the glTF / OBJ / DAE exports 3 to 12 s as one task each; the page now only gathers
 * the model as plain data with its meshes' typed arrays not yet base64 (Model.toJSON raw), and a worker writes the rest.
 *
 *   prettyJson(obj) → text            one property per line (indent 1), lists of plain numbers on one line (0.8 DC.27 H1)
 *   encodeRaw(obj) → obj              every { [RAW_B64]: typed array } (Mesh.toJSON raw) replaced by its base64, in place
 *   fileTextChecked({ j }) → { text, slots }   job: the same text + each mesh's slotHash as the text reads back (PERF.24)
 *   fileText({ j }) → text            job: what modelText() writes, from the same object with raw meshes: the same characters
 *   exportFile({ j, kind, name, lang }) → { bytes | text, extra }   job: glb (io/gltf-write.js exportGltf), obj (io/obj.js
 *                                     exportObj: { obj, mtl, mtlName, images }), dae (io.js exportDAE) of the model `j`
 *                                     (Model.toJSON raw; `images` = every image the page's model holds, [{id, …}], the page's
 *                                     own data so taken as they are; for dae its meshes as shown)
 *
 * The page keeps the thread-bound way (modelText(), the writers) for when no worker can start; both give the same bytes
 * (tools/modelcraft-test/test-perf-010.mjs compares them).
 */
import { RAW_B64, b64 } from './mesh.js';

/** 0.8 DC.27 H1: one property per line (indent 1), lists of plain numbers kept on one line, so a version-control diff and merge read the file. Same JSON. */
export const prettyJson = (obj) => JSON.stringify(obj, null, 1).replace(/\[\n\s*(-?\d[^,\[\]{}"\n]*(?:,\n\s*-?\d[^,\[\]{}"\n]*)*)\n\s*\]/g, (m, body) => '[' + body.replace(/,\n\s*/g, ', ') + ']');

/** Base64 for each typed array a raw Mesh.toJSON left, in place (objects and arrays walked; anything else kept). */
export function encodeRaw(v) {
  if (!v || typeof v !== 'object' || ArrayBuffer.isView(v)) return v;
  if (Array.isArray(v)) { for (let i = 0; i < v.length; i++) v[i] = encodeRaw(v[i]); return v; }
  if (ArrayBuffer.isView(v[RAW_B64])) return b64(v[RAW_B64]);
  for (const k of Object.keys(v)) v[k] = encodeRaw(v[k]);
  return v;
}

export function fileText({ j }) {
  return prettyJson(encodeRaw(j));
}

/**
 * 0.11 PERF.24: fileText for the autosave's first copy, plus, for each mesh definition, Mesh.slotHash() of the mesh that text
 * reads back as (Mesh.fromJSON, as a recovery does): { text, slots: {defId: hash} }. The page compares them with its live meshes'
 * own; where they agree the autosave writes that mesh's later edits instead of the whole mesh.
 */
export async function fileTextChecked({ j }) {
  const { Mesh } = await import('./mesh.js');
  const slots = {};
  for (const d of Array.isArray(j.defs) ? j.defs : []) {
    if (d && d.kind === 'mesh' && d.mesh && typeof d.id === 'string') { try { slots[d.id] = Mesh.fromJSON(d.mesh).slotHash(); } catch { /* not read back: written whole later */ } }
  }
  return { text: prettyJson(encodeRaw(j)), slots };
}

let langKey = '';
async function useLang(lang) {
  if (!lang) return;
  const key = lang.locale + '|' + Object.keys(lang.strings || {}).length;
  if (key === langKey) return;
  (await import('./i18n.js')).init({ locale: lang.locale, chain: lang.chain, strings: lang.strings });
  langKey = key;
}

export async function exportFile({ j, kind, name, lang, date = new Date() }) {
  await useLang(lang);
  const { Model } = await import('./model.js');
  const model = new Model();
  model.load(j);
  for (const { id, ...im } of Array.isArray(j.images) ? j.images : []) model.images.set(id, im);
  if (kind === 'glb') { const { exportGltf } = await import('./io/gltf-write.js'); return { bytes: exportGltf(model).bytes }; }
  if (kind === 'obj') { const { exportObj } = await import('./io/obj.js'); const r = exportObj(model, { base: name }); return { text: r.obj, extra: { mtl: r.mtl, mtlName: r.mtlName, images: r.images } }; }
  if (kind === 'dae') { const { exportDAE } = await import('./io.js'); return { text: exportDAE(model, { name, date }) }; }
  throw Object.assign(new Error('unknown export ' + kind), { code: 'bad_kind' });
}
