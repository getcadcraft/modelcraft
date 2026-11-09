/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the panel's words are lib/factory's (words.js) through api.t; this file only wires the host. */
/**
 * main.js — the Factory floor add-on for ModelCraft (0.9 D8.13, session factory-floor-09), on the shared add-on API 1.0: one right-panel
 * section. A thin adapter over lib/factory (synced into ../../factory/ by tools/factory/sync.mjs; nobody edits that copy): it hands the
 * shared panel the Material flow layout (stations = machines), the 3D view's overlay and camera for the operator screen, lib/live's tag
 * store, and — inside CadCraft Studio only — Studio's Send to a machine (EG.40) and its device bridge.
 *
 * Kept where: the machine/cell settings and the job queue go in the .modelcraft file (window.ccDocData('factory'), key 'setup'), so they
 * travel with the layout; the recorded history (states, counts, alarms) stays in this browser (add-on storage 'history'), so reading a
 * machine never marks the model unsaved.
 */
import { mountFactory, CSS } from '../../factory/ui.js';
import { LiveStore } from '../../live/store.js';
import { addressPolicy } from '../../live/policy.js';

export function activate(api) {
  const id = (api.addon && api.addon.id) || 'factory';
  const docApi = typeof window.ccDocData === 'function' ? window.ccDocData(id) : null;
  const flowDoc = typeof window.ccDocData === 'function' ? window.ccDocData('flow') : null;
  const style = document.createElement('style'); style.setAttribute('data-addon', id); style.textContent = CSS; document.head.append(style);

  // the flow layout: the flow add-on's live copy when it is on, else what the model file holds (read only, never written here)
  let cache = null, cacheAt = 0;
  const layout = () => {
    const t = performance.now(); if (cache && t - cacheAt < 500) return cache;
    cacheAt = t;
    cache = (window.ccFlow && typeof window.ccFlow.layout === 'function' && window.ccFlow.layout()) || (flowDoc ? flowDoc.data('layout') : null);
    return cache;
  };
  let lastSetup = '';
  const load = () => {
    const setup = docApi ? docApi.data('setup') : api.storage.get('setup');
    lastSetup = JSON.stringify(setup || null);
    return { ...(setup || {}), history: api.storage.get('history') };
  };
  const save = (s) => {
    const setup = { config: s.config, jobs: s.jobs, seed: s.seed, pollS: s.pollS, overlay: s.overlay };
    const j = JSON.stringify(setup);
    if (j !== lastSetup) { lastSetup = j; if (docApi) docApi.setData('setup', setup); else api.storage.set('setup', setup); }
    api.storage.set('history', s.history);
  };
  const mc = () => window.modelcraft;
  // the labels go in the element that holds the 3D view's canvases (ui.over is a canvas itself), placed by the camera's projection
  const overCanvas = () => (mc() && mc().ui && mc().ui.over) || null;
  const overlay = {
    root: () => { const o = overCanvas(); return (o && o.parentElement) || null; },
    project: (at) => {
      const m = mc(), o = overCanvas(); if (!m || !m.cam || !m.cam.project || !o || !o.parentElement) return null;
      const p = m.cam.project(at); if (!p) return null;
      const a = o.getBoundingClientRect(), b = o.parentElement.getBoundingClientRect();
      if (p[0] < 0 || p[1] < 0 || p[0] > a.width || p[1] > a.height) return null;
      return { x: p[0] + a.left - b.left, y: p[1] + a.top - b.top };
    },
  };
  const studioSend = () => (typeof window.ccSendToMachine === 'function' && window.cadcraftDesktop && window.cadcraftDesktop.machines ? window.ccSendToMachine : null);
  function download(name, text, type) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name;
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  }
  function pickFile(accept) {
    return new Promise((resolve) => {
      const inp = document.createElement('input'); inp.type = 'file'; inp.accept = accept;
      inp.addEventListener('change', async () => { const f = inp.files && inp.files[0]; if (!f || f.size > 32e6) { resolve(null); return; } resolve({ name: f.name, text: await f.text() }); });
      inp.click();
    });
  }
  let storage = null; try { storage = window.localStorage; } catch { storage = null; }
  const layoutFns = new Set();
  if (flowDoc) flowDoc.onOpen(() => { cache = null; for (const f of layoutFns) f(); });

  let ui = null, el0 = null;
  const host = {
    t: (k, v) => api.t(k, v), load, save, layout, onLayout: (f) => layoutFns.add(f), overlay,
    get send() { return studioSend(); },
    fetch: typeof window.fetch === 'function' ? (u) => window.fetch(u, { mode: 'cors', credentials: 'omit', cache: 'no-store' }) : null,
    bridge: () => globalThis.ccStudioBridge || null, policy: addressPolicy, Store: LiveStore,
    download, pickFile, storage, confirm: (q) => window.confirm(q),
  };
  if (docApi) docApi.onOpen(() => { if (ui) ui.load(load()); });
  api.ui.panelSection({ id, title: api.t('factory.title'), side: 'right', render(el) {
    if (ui && el0 === el) { ui.refresh(); return; }
    if (ui) ui.destroy();
    el0 = el; ui = mountFactory(el, host);
  } });
  // a flow layout edited while the panel is open: pick the stations up again now and then (cheap: a cached read)
  const watch = setInterval(() => { if (!ui) return; const before = JSON.stringify((cache && cache.items || []).filter((i) => i.kind === 'station').map((i) => [i.id, i.x, i.y])); cache = null; const after = JSON.stringify(((layout() || {}).items || []).filter((i) => i.kind === 'station').map((i) => [i.id, i.x, i.y])); if (before !== after) ui.refresh(); }, 3000);
  window.ccFactory = { ui: () => ui, host };
  api.onDeactivate(() => { clearInterval(watch); if (ui) ui.destroy(); ui = null; style.remove(); delete window.ccFactory; });
}
