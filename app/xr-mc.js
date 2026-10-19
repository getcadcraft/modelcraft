/* SPDX-License-Identifier: Apache-2.0 */
/**
 * xr-mc.js — ModelCraft's side of design review in a headset (0.6 LC.19; the shared session is xr/xr-session.js): the Views
 * menu's "Review in VR", the start and the way back, and the Issues list (issues placed in VR — or added here from the view —
 * with a picture, kept in the .modelcraft file under `issues` and saved as BCF 2.1 through bcf.js, a byte-identical copy of
 * BimCraft's).
 *
 *   mountXrMc({root, model, cam, view, host, t, print, settings() → render settings, download(blob, name, type), base(),
 *              perspChanged()}) → {toJSON() → issues | null, load(issues), reset(), issues, enter(), support}
 *   cleanIssues(untrusted) → issues · bcfTopics(issues) → BCF topics for bcf.js writeBcf
 *
 * BCF in ModelCraft: the model's own coordinates are the file's (metres, Z up), so a camera goes in as it is; ModelCraft has
 * no element GUIDs, so issues carry no selection.
 */
import { t as tt } from './i18n.js';
import { el } from './ui-util.js';
import { writeBcf, newGuid } from './bcf.js';

const MAX_ISSUES = 500, MAX_SNAP = 3 * 1024 * 1024;
const now = () => new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
const fin = (x) => typeof x === 'number' && Number.isFinite(x);
const isV = (v) => Array.isArray(v) && v.length === 3 && v.every((x) => fin(x) && Math.abs(x) < 1e9);
const clean = (s, n) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, n);
const b64 = (u8) => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode(...u8.subarray(i, i + 0x8000)); return btoa(s); };
const unb64 = (s) => { const b = atob(s); return Uint8Array.from(b, (c) => c.charCodeAt(0)); };

/** The file's issues (untrusted): checked, capped; pictures must be PNG. */
export function cleanIssues(list) {
  if (!Array.isArray(list)) return [];
  const out = [], seen = new Set();
  for (const x of list.slice(0, MAX_ISSUES)) {
    if (!x || typeof x !== 'object') continue;
    const guid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(x.guid) && !seen.has(x.guid) ? x.guid : newGuid();
    seen.add(guid);
    const c = x.camera;
    const camera = c && isV(c.viewPoint) && isV(c.direction) && isV(c.up) ? { kind: 'perspective', viewPoint: c.viewPoint.slice(), direction: c.direction.slice(), up: c.up.slice(), fov: fin(c.fov) ? Math.min(60, Math.max(45, c.fov)) : 60 } : null;   // BCF 2.1: 45–60°
    let snapshot = null;
    if (typeof x.snapshot === 'string' && x.snapshot.length < MAX_SNAP * 1.4) {
      try { const b = unb64(x.snapshot); if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) snapshot = b; } catch { snapshot = null; }
    }
    out.push({
      guid, title: clean(x.title, 200) || tt('xr.issue.untitled'), status: ['Open', 'In progress', 'Closed'].includes(x.status) ? x.status : 'Open',   // i18n-ignore: BCF status values
      author: clean(x.author, 120), created: /^\d{4}-\d\d-\d\dT[\d:]+Z$/.test(x.created) ? x.created : now(), description: clean(x.description, 4000),
      camera, point: isV(x.point) ? x.point.slice() : null, snapshot, vr: x.vr === true,
    });
  }
  return out;
}

/** The issues as BCF topics (bcf.js writeBcf's shape): one viewpoint each with its camera and picture, no selection. */
export function bcfTopics(issues) {
  return issues.map((x) => {
    const vp = { guid: newGuid(), camera: x.camera, selection: [], visibility: { defaultVisible: true, exceptions: [] }, clipping: [], snapshot: x.snapshot };
    return { guid: x.guid, title: x.title, status: x.status, type: 'Issue', author: x.author || 'ModelCraft', created: x.created, description: x.description, comments: [], viewpoints: x.camera ? [vp] : [] };   // i18n-ignore: BCF values
  });
}

export function mountXrMc(o) {
  const { root, model, cam, view, t = tt, print } = o;
  const btn = root.querySelector('[data-xr-enter]');
  const box = root.querySelector('[data-issues]');
  let issues = [], support = { vr: false, reason: 'none' }, running = null;
  const urls = new Map();

  // checked here, so the headset's code loads only when someone enters VR
  (navigator.xr ? navigator.xr.isSessionSupported('immersive-vr').catch(() => false) : Promise.resolve(false)).then((yes) => {
    const s = { vr: !!yes, reason: yes ? null : navigator.xr ? 'unsupported' : window.isSecureContext === false ? 'insecure' : 'none' };
    support = s;
    btn.setAttribute('aria-disabled', String(!s.vr));
    btn.title = s.vr ? t('xr.enter.title') : t('xr.why.' + s.reason);
  }).catch(() => {});

  function render() {
    for (const u of urls.values()) URL.revokeObjectURL(u);
    urls.clear();
    const list = issues.map((x, i) => {
      if (x.snapshot) urls.set(x.guid, URL.createObjectURL(new Blob([x.snapshot], { type: 'image/png' })));
      return el('li', { className: 'mc-issue', dataset: { issue: x.guid } },
        urls.get(x.guid) ? el('img', { src: urls.get(x.guid), alt: '' }) : el('span', { className: 'mc-issue-noimg', 'aria-hidden': 'true' }),
        el('span', { className: 'mc-issue-text' }, el('strong', {}, x.title), el('small', {}, x.description)),
        el('span', { className: 'mc-scene-acts' },
          el('button', { type: 'button', className: 'mc-icon', title: t('xr.issue.show'), 'aria-label': t('xr.issue.show.aria', { title: x.title }), dataset: { issueShow: x.guid }, onclick: () => show(x) }, el('i', { className: 'bi bi-eye', 'aria-hidden': 'true' })),
          el('button', { type: 'button', className: 'mc-icon', title: t('xr.issue.delete'), 'aria-label': t('xr.issue.delete.aria', { title: x.title }), dataset: { issueDelete: x.guid }, onclick: () => { issues.splice(i, 1); model.dirty = true; model.bumpSafe(); render(); print(t('xr.issue.deleted', { title: x.title })); } }, el('i', { className: 'bi bi-trash', 'aria-hidden': 'true' }))));
    });
    box.querySelector('[data-issues-list]').replaceChildren(...list);
    box.querySelector('[data-issues-empty]').hidden = issues.length > 0;
    const save = box.querySelector('[data-issues-bcf]');
    save.disabled = !issues.length;
    save.textContent = t('xr.issues.bcf', { n: issues.length });
  }
  function show(x) {
    if (!x.camera) return;
    const c = x.camera, d = 5;
    cam.set({ eye: c.viewPoint.slice(), target: c.viewPoint.map((v, i) => v + c.direction[i] * d), fov: Math.min(90, c.fov || 60), persp: true });
    o.perspChanged?.();
    view.invalidate();
    print(t('xr.issue.shown', { title: x.title }));
  }
  function add(issue, { vr = true } = {}) {
    issues.push({ guid: newGuid(), title: issue.title, status: 'Open', author: '', created: now(), description: issue.description || '', camera: issue.camera, point: issue.point || null, snapshot: issue.snapshot || null, vr });
    model.dirty = true; model.bumpSafe();   // the autosave copy and "unsaved changes" follow
    render();
  }
  async function saveBcf() {
    if (!issues.length) return;
    const bytes = await writeBcf({ topics: bcfTopics(issues), file: { name: o.base() + '.modelcraft' } });
    const name = o.base() + ' issues.bcf';   // i18n-ignore: a file name ending
    o.download(new Blob([bytes], { type: 'application/octet-stream' }), name, 'application/octet-stream');
    print(t('xr.issues.saved', { file: name, n: issues.length }));
  }
  box.querySelector('[data-issues-bcf]').addEventListener('click', () => saveBcf().catch((e) => print(t('xr.failed', { error: String(e?.message || e) }))));

  // what the headset rebuilds on: an edit in place (unsafeVersion: change(), others' edits in a live session) or definitions
  // swapped for new objects (undo, redo) — not the version bumps that only tell autosave (the Issues list, the timeline)
  const defIds = new WeakMap();
  let nextDef = 1;
  const xrVersion = () => {
    let h = model.unsafeVersion % 1000003;
    for (const d of model.defs.values()) { let k = defIds.get(d); if (!k) { k = nextDef++; defIds.set(d, k); } h = (h * 31 + k) % 2147483629; }
    return h;
  };
  async function enter() {
    if (running) return;
    if (!support.vr) { print(t('xr.why.' + support.reason)); return; }
    if (!model.root.faces.size && !model.root.insts.size) { print(t('app.export.empty')); return; }
    const [X, R, L, U] = await Promise.all([import('./xr/xr-session.js'), import('./render-mc.js'), import('./render/looks.js'), import('./units.js')]);
    const live = window.modelcraft && window.modelcraft.live;
    const settings = L.cleanSettings(o.settings());
    try {
      running = await X.startXR({
        scene: () => R.mcScene(model, cam, view.style, settings),
        version: xrVersion,
        appCamera: () => cam.toJSON(),
        format: (m) => U.formatLength(m, model.units),
        settings,
        addIssue: (x) => add(x),
        presence: live ? { send: (p) => live.setPresence(p), peers: () => live.peers(), nameOf: (c) => live.nameOf(c) } : null,
        onExit: (pose) => {
          running = null;
          if (pose) { cam.set({ eye: pose.eye, target: pose.target, fov: cam.fov, persp: true }); o.perspChanged?.(); view.invalidate(); }
          print(t('xr.ended'));
        },
      });
      window.modelcraft.xr = running;
      print(t('xr.started'));
    } catch (e) {
      running = null;
      print(t('xr.failed', { error: String(e?.message || e) }));
    }
  }
  btn.addEventListener('click', () => { o.closeMenus?.(); enter(); });
  render();
  return {
    enter, get issues() { return issues; }, get support() { return support; }, get session() { return running; },
    add: (x) => add(x, { vr: false }),
    toJSON: () => (issues.length ? issues.map((x) => ({ ...x, snapshot: x.snapshot ? b64(x.snapshot) : null })) : null),
    load(list) { issues = cleanIssues(list); render(); },
    reset() { issues = []; render(); },
  };
}
