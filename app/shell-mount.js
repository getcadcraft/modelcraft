/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shell-mount.js — ModelCraft attaches the shell's seven modules (0.8 round 3, model_PART_3; docs/apps/shell-modules.md § Mounting): calc
 * sheets (EG.18), design reasons (EG.34), running totals (EG.30), lessons (EG.23), Suggest (AC.12), the activity log (AC.13) and the Ask
 * box (AC.8). The block in mountShellModules is the doc's, unchanged; modelHost() is what ModelCraft hands over as `host`.
 *
 *   mountModelShell(mc) — mc = { model, control, selection() → host.sel, setSel(sel), describe(s) → label, name(), path(), changed(),
 *                                onSelection(fn) → off, guideFacts() → { face, solid, group, print }, onFile(fn): the page tells of open / new }
 *     → { host, opened(), save(file) (adds `calcs` / `reasons` to the file object), load(file), tool(name) }
 * Calc sheets and reasons are kept in the .modelcraft file under `calcs` and `reasons` (optional keys, no new file version), outside the
 * model's undo like `info` and `format`: a sheet or a reason is never taken back by Ctrl+Z on the geometry. The edits they drive go
 * through model.change (one undo step). ModelCraft has no named parameters, no cost, carbon, weight or time it can stand behind yet:
 * `params` and `totals` are not handed over (the modules say so in their panels).
 */
import * as UNITS from './unit-table.js';
import { assistantPrefs, ASSIST_KEY, getHost } from './host.js';
import { faceTris } from './model.js';
import { t as tr } from './i18n.js';
import { mountShellModules as mountCore } from './shell-mount-core.js';   // the doc's block, shared (0.11 PERF.74)

/** The doc's block, now the shared shell-mount-core.js (0.11 PERF.74), with this app's words for "a file was opened". */
export function mountShellModules(host) { return mountCore(host, { opened: () => tr('shellmount.file.opened') }); }

const KIND = { i: 'group', f: 'face', e: 'edge', d: 'dimension', s: 'section', g: 'guide' };

/** The first lesson: the guided first model's four steps (firstmodel.js), each a question the model answers. */
function lessonsOf(mc) {
  const f = () => mc.guideFacts();
  return {
    lessons: [{
      id: 'modelcraft.first-model', title: tr('mc.lesson.first.title'), intro: tr('mc.lesson.first.intro'), level: 'beginner',
      steps: [
        { id: 'face', text: tr('mc.lesson.first.face'), hints: [tr('mc.lesson.first.face.h1')], done: { probe: 'mc-face' } },
        { id: 'solid', text: tr('mc.lesson.first.solid'), hints: [tr('mc.lesson.first.solid.h1')], done: { probe: 'mc-solid' } },
        { id: 'group', text: tr('mc.lesson.first.group'), hints: [tr('mc.lesson.first.group.h1')], done: { probe: 'mc-group' } },
        { id: 'print', text: tr('mc.lesson.first.print'), hints: [tr('mc.lesson.first.print.h1')], done: { probe: 'mc-print' } },
      ],
      badge: { title: tr('mc.lesson.first.badge') },
    }],
    probes: { 'mc-face': () => f().face, 'mc-solid': () => f().solid, 'mc-group': () => f().group, 'mc-print': () => f().print },
  };
}

/** DI.1: what ModelCraft counts. The model is in metres. Triangles are counted from the shown geometry once per change, only while there is some. */
function docInfoOf(mc) {
  const model = mc.model;
  let memo = { v: -1, n: 0 };
  return {
    read: () => {
      let groups = 0;
      for (const d of model.defs.values()) groups += d.insts.size;
      if (memo.v !== model.version) {
        let n = 0;
        model.walk((def) => { if (def.mesh) { n += (def.shown?.triangulate?.().tri.length || 0) / 3; return; } for (const f of def.faces.values()) n += faceTris(def, f).length; });
        memo = { v: model.version, n: Math.floor(n) };
      }
      const bb = model.bbox(), counts = { groups };
      if (memo.n) counts.triangles = memo.n;
      return { units: 'm', path: mc.path() || mc.name(), extents: bb ? { min: bb.min, max: bb.max } : null, counts };
    },
  };
}

/** What ModelCraft hands over (the doc's table, § 3). */
export function modelHost(mc, keep) {
  const model = mc.model;
  const ASSIST = () => assistantPrefs(getHost({ app: 'modelcraft' }));
  let packText = '';   // ModelCraft's skill pack (AC.5) once there is one: the Ask box sends it with each question
  import('../../../js/skill-packs.js').then((m) => { packText = (m.PACKS || []).filter((x) => x.app === 'modelcraft').map((x) => x.skill).join('\n\n'); }, () => {});
  const host = {
    control: mc.control,
    units: UNITS,
    step: (label, fn) => { const r = model.change(label, () => fn()); mc.changed(); return r; },
    file: { set: (key, json) => keep(key, json) },
    docinfo: docInfoOf(mc),
    selection: () => {
      const s = mc.selection()[0];
      if (!s) return null;
      return { kind: KIND[s.t] || 'item', id: s.t + ':' + s.id, label: String(mc.describe(s) || '').replace(/\.$/, '').slice(0, 80) };
    },
    onSelection: (fn) => mc.onSelection(fn),
    select: (el) => {
      const m = el && typeof el.id === 'string' && /^([ifedsg]):(.+)$/.exec(el.id);
      if (m) mc.setSel([{ t: m[1], id: /^\d+$/.test(m[2]) ? +m[2] : m[2] }]);
    },
    ...lessonsOf(mc),
    rev: () => model.version,
    document: () => ({ docId: mc.name(), path: mc.path() || '', name: mc.name() }),
    dirty: () => !!mc.model.dirty,   // 2026-11-09: the tab title's unsaved mark (assets/js/app-doc-title.js)
    perms: {
      get: () => ASSIST(),
      set: (rec) => { try { localStorage.setItem(ASSIST_KEY + 'modelcraft', JSON.stringify(rec)); } catch { /* private mode */ } },
    },
    undoTo: (i) => { let n = 0; while (model.undoStack.length > i && model.canUndo() && n++ < 200) model.undo(); mc.changed(); },
    version: () => String(model.version),
    askContext: () => ({ file: mc.name(), selection: host.selection() }),
    skillPack: () => packText,
  };
  return host;
}

/** Mounts everything; the page calls opened() after a file opens or New, save(file) / load(file) in its two file places, tool(name) on a command. */
export function mountModelShell(mc) {
  const kept = { calcs: null, reasons: null, docinfo: null };
  const keep = (key, json) => { if (!(key in kept)) return; kept[key] = json || null; mc.model.dirty = true; mc.changed(); };
  const host = modelHost(mc, keep);
  mountShellModules(host);
  const reload = () => {
    if (window.ccCalc) ccCalc.load(kept.calcs);
    if (window.ccReasons) ccReasons.load(kept.reasons);
    if (window.ccDocInfo) ccDocInfo.load(kept.docinfo);
  };
  document.addEventListener('cc-calc-ready', reload, { once: true });
  document.addEventListener('cc-reasons-ready', reload, { once: true });
  document.addEventListener('cc-docinfo-ready', reload, { once: true });
  return {
    host,
    /** A file was read: its sheets and reasons (untrusted: the modules clean them). */
    load(file) { kept.calcs = file && typeof file.calcs === 'object' ? file.calcs : null; kept.reasons = file && typeof file.reasons === 'object' ? file.reasons : null; kept.docinfo = file && file.docinfo && typeof file.docinfo === 'object' ? file.docinfo : null; reload(); },
    /** A new file or another one opened: Suggest drops what it had pending, lessons look again. */
    opened() { if (host.fileOpened) host.fileOpened(tr('mc.shell.opened')); if (window.ccLessons) ccLessons.emit('model', {}); },
    /** The page writes the file object: the sheets and reasons go in (null = the key is not written, so an old file stays as it was). */
    save(file) {
      const c = window.ccCalc ? ccCalc.save() : kept.calcs, r = window.ccReasons ? ccReasons.save() : kept.reasons;
      if (c) file.calcs = c;
      if (r) file.reasons = r;
      // DI.1: the drawing details, with this save's time; a file whose details were never written is left as it was
      const di = window.ccDocInfo ? (ccDocInfo.state().written ? ccDocInfo.save() : null) : kept.docinfo;
      if (di) file.docinfo = di;
      return file;
    },
    changed() { if (window.ccLessons) ccLessons.emit('model', {}); if (window.ccTotals) ccTotals.invalidate?.(); },
    tool(name) { host.emit?.('tool', { name }); },
  };
}
