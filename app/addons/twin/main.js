/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the panel's words are lib/twin's (words.js) through api.t; this file only wires the host. */
/**
 * main.js — the Digital twin add-on for ModelCraft (0.9 TW), on the shared add-on API: a thin adapter over lib/twin (synced into ../../twin/ by tools/twin/sync.mjs; nobody edits that copy). It hands the
 * shared panel the Material flow code and layout, the 3D view, the model's bodies and timeline, and the video encoder. Settings go in the .modelcraft file (window.ccDocData('twin'), key 'setup').
 * The flow code is imported from the flow add-on's folder: it works whether or not that add-on is switched on, but laying a layout out by hand needs it on.
 */
import * as THREE from 'three';
import { mountTwin, CSS } from '../../twin/ui.js';
import { faceTable } from '../../twin/behaviours.js';
import { MeshPicker } from '../../mesh/pick.js';
import { partsOf, regionsOf } from './parts.js';
import { TwinView } from '../../twin/view3d.js';
import { Sim, simulate } from '../../flow/sim.js';
import { buildGraph, cleanLayout, newLayout, addAfter } from '../../flow/layout.js';
import { defaults } from '../../flow/catalog.js';
import { makePlayer } from '../../flow/playback.js';
import * as ANIM from '../../render/anim.js';
import { videoSupport, createVideoSink } from '../../render/video.js';

export function activate(api) {
  const id = (api.addon && api.addon.id) || 'twin';
  const docApi = typeof window.ccDocData === 'function' ? window.ccDocData(id) : null;
  const flowDoc = typeof window.ccDocData === 'function' ? window.ccDocData('flow') : null;
  const style = document.createElement('style'); style.setAttribute('data-addon', id); style.textContent = CSS; document.head.append(style);
  const mc = () => window.modelcraft;

  let own = null;   // a layout loaded while Material flow is off: it stays in the model file so switching flow on finds it
  const layout = () => {
    if (window.ccFlow && typeof window.ccFlow.layout === 'function') return window.ccFlow.layout();
    if (own) return own;
    const raw = flowDoc ? flowDoc.data('layout') : null;
    return raw ? cleanLayout(raw).layout : null;
  };
  const listeners = new Set();
  let seen = '';
  const sig = () => { const l = layout(); return l ? JSON.stringify(l.items) : ''; };
  const setLayout = (L) => {
    if (window.ccFlow && typeof window.ccFlow.load === 'function') window.ccFlow.load(L);
    else { own = cleanLayout(L).layout; if (flowDoc) flowDoc.setData('layout', own); }
    seen = sig();   // our own change: the panel knows, and the watch below must not throw away a run made right after it
  };
  if (flowDoc) flowDoc.onOpen(() => { own = null; for (const f of listeners) f(); });

  const hideFlow = (hide) => {
    const s = mc()?.view?.scene; if (!s) return;
    for (const name of ['flow-layout', 'flow-playback']) { const g = s.getObjectByName(name); if (g) g.visible = !hide; }
    mc().view.invalidate();
  };
  const view = {
    make: () => { const v = mc()?.view; return v && v.scene ? new TwinView(THREE, v.scene, () => v.invalidate()) : null; },
    hideFlow, redraw: () => { const v = mc()?.view; if (v && typeof v.draw === 'function') v.draw(); }, canvas: () => mc()?.ui?.gl || null,
  };
  const model = api.model && typeof api.model.addBodies === 'function' ? {
    addBodies: (g, b, o) => api.model.addBodies(g, b, o), removeBodies: (g, o) => api.model.removeBodies(g, o),
    /** name of each sub-group → its placement's path in the model (what the timeline keys on). */
    paths(group) {
      const out = new Map(), m = mc().model, tag = (api.addon?.manifest?.name || 'Digital twin') + ' / ' + group;
      for (const [iid, inst] of m.root.insts) {
        if (inst.tag !== tag) continue;
        const d = m.defs.get(inst.def);
        for (const [sid, sub] of d.insts) { const sd = m.defs.get(sub.def); if (sd) out.set(sd.name, [iid, sid]); }
      }
      return out;
    },
  } : null;
  const timeline = { lib: ANIM, anim: () => mc()?.timeline?.anim || null, load: (a) => { const tl = mc()?.timeline; if (tl) tl.load(a); } };
  const download = (name, data, type) => {
    const blob = data instanceof Blob ? data : new Blob([data], { type });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  };
  const pickFile = (accept) => new Promise((resolve) => {
    const inp = document.createElement('input'); inp.type = 'file'; inp.accept = accept;
    inp.addEventListener('change', async () => { const f = inp.files && inp.files[0]; if (!f || f.size > 8e6) { resolve(null); return; } resolve({ name: f.name, text: await f.text() }); });
    inp.click();
  });
  let lastSetup = '';
  const load = () => { const s = docApi ? docApi.data('setup') : api.storage.get('setup'); lastSetup = JSON.stringify(s || null); return s; };
  const save = (s) => { const j = JSON.stringify(s); if (j === lastSetup) return; lastSetup = j; if (docApi) docApi.setData('setup', s); else api.storage.set('setup', s); };


  // ---- behaviours on imported parts (TW.13): the parts are the model's mesh definitions; a face is a smooth region of the mesh (an imported STEP face is one) ----
  const cache = new Map();   // part key → { v, topo, regions, faces } (rebuilt when the mesh changes)
  const pickers = new Map();
  const partList = () => { const m = mc()?.model; return m ? partsOf(m) : []; };
  const regionsFor = (part) => {
    const c = cache.get(part.key);
    if (c && c.mesh === part.mesh && c.v === part.mesh.v && c.topo === part.mesh.topo) return c;
    const regions = regionsOf(part.mesh), faces = faceTable(regions.soup);
    const n = { mesh: part.mesh, v: part.mesh.v, topo: part.mesh.topo, regions, faces }; cache.set(part.key, n); return n;
  };
  const pickerFor = (part) => {
    let pk = pickers.get(part.key);
    if (!pk || pk.mesh !== part.mesh || !pk.fresh() || pk.m.some((x, i) => x !== part.M[i])) { pk = new MeshPicker(part.mesh, part.M); pickers.set(part.key, pk); }
    return pk;
  };
  /** The nearest face of any part under a world ray: { part, face (the table's id) } | null. */
  const hitRay = (ray) => {
    let best = null;
    for (const part of partList()) {
      const h = pickerFor(part).hit(ray); if (!h) continue;
      const R = regionsFor(part), id = R.regions.regionOfFace[h.f];
      if (id >= 0 && (!best || h.t < best.t)) best = { part: part.key, face: id, t: h.t };
    }
    return best;
  };
  let pickOff = null;
  const stopPick = () => { if (pickOff) { pickOff(); pickOff = null; } };
  const behaviours = {
    parts: () => partList().map((p) => ({ key: p.key, name: p.name })),
    faces: (key) => { const p = partList().find((q) => q.key === key); return p ? regionsFor(p).faces : []; },
    matrix: (key) => { const p = partList().find((q) => q.key === key); return p ? p.M : null; },
    stopPick,
    pick(cb) {
      stopPick();
      const cv = mc()?.ui?.gl, cam = mc()?.cam; if (!cv || !cam) { cb(null); return; }
      const done = (hit) => { stopPick(); cb(hit); };
      const down = (e) => {
        e.preventDefault(); e.stopPropagation();
        const r = cv.getBoundingClientRect(), hit = hitRay(cam.ray(e.clientX - r.left, e.clientY - r.top));
        done(hit ? { part: hit.part, face: hit.face } : null);
      };
      const key = (e) => { if (e.key === 'Escape') done(null); };
      const host2 = cv.parentElement || cv;   // whatever sits over the canvas (overlays) is under this one: it sees the press first
      host2.addEventListener('pointerdown', down, true); window.addEventListener('keydown', key, true);
      pickOff = () => { host2.removeEventListener('pointerdown', down, true); window.removeEventListener('keydown', key, true); };
    },
  };

  let ui = null, el0 = null;
  const host = {
    t: (k, v) => api.t(k, v), flow: { Sim, simulate, buildGraph, cleanLayout, newLayout, addAfter, defaults, makePlayer },
    layout, setLayout, onLayout: (f) => listeners.add(f), flowOn: () => !!window.ccFlow, load, save, view, model, timeline,
    video: { support: videoSupport, sink: createVideoSink }, behaviours, download, pickFile, confirm: (q) => window.confirm(q),
  };
  if (docApi) docApi.onOpen(() => { if (ui) ui.load(load()); });
  api.ui.panelSection({ id, title: api.t('twin.title'), side: 'right', render(el) {
    if (ui && el0 === el) { ui.refresh(); return; }
    if (ui) ui.destroy();
    el0 = el; ui = mountTwin(el, host);
  } });
  // an edit made in Material flow while the panel is open: pick it up now and then (cheap: a string of the items)
  let partSig = '';
  const watch = setInterval(() => {
    const ps = partList().map((p) => p.key + ':' + p.mesh.v + ':' + p.mesh.topo).join('|');
    if (ps !== partSig) { const first = partSig === ''; partSig = ps; if (!first && ui) { ui.bhRecheck(); ui.refresh(); } }
    const s = sig(); if (s !== seen) { const first = seen === ''; seen = s; if (!first) for (const f of listeners) f(); } }, 1000);
  seen = sig();
  window.ccTwin = { ui: () => ui, host, hitRay };
  api.onDeactivate(() => { stopPick(); clearInterval(watch); if (ui) ui.destroy(); ui = null; hideFlow(false); style.remove(); delete window.ccTwin; });
}
