/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ws-render.js — the Render workspace (0.7 RN.11): the path tracer runs in the view (render/ipr.js) while you orbit, edit and
 * light the model; draw a region to render only that part; click to pick the focus distance. Registered with workspaces.js
 * (session `render`); the full Render a picture… dialog stays on Export.
 *
 * Render settings: the host's `renderSettings` / `saveRenderSettings` when modelcraft.js gives them (shared with the dialog),
 * else this workspace's own (in memory).
 *
 * The panel's notes are plain `mc-note` paragraphs in the side panel (0.7.1 71.1: they were `mc-hint`, the stage's floating
 * hint, so they floated over the toolbar and let clicks through). The long note can be put away (localStorage
 * `modelcraft.renderHint` = 'off'; "What is this?" brings it back); a status change rewrites only the status line.
 */
import { registerWorkspace } from './workspaces.js';
import { Camera } from './camera.js';
import { invert } from './vec.js';

const G = (cmd, icon) => ({ cmd: 'render-' + cmd, icon, labelKey: 'render.ws.cmd.' + cmd, titleKey: 'render.ws.cmd.' + cmd + '.title' });
const SCALES = [0.25, 0.5, 0.75, 1];
let ipr = null, own = null, statusText = '', statusEl = null;
const HINT_KEY = 'modelcraft.renderHint';
const hintOff = () => { try { return localStorage.getItem(HINT_KEY) === 'off'; } catch { return false; } };
const setHintOff = (off) => { try { if (off) localStorage.setItem(HINT_KEY, 'off'); else localStorage.removeItem(HINT_KEY); } catch { /* this page only */ } };

function camSpec(host, aspect) {
  const c = new Camera();
  c.set(host.cam.toJSON());
  c.setSize(1000 * aspect, 1000);
  c.clip(host.cam.sceneRadius);
  return { world: invert(c.view()), proj: c.proj() };
}
const settingsOf = (host) => host.renderSettings || own || {};
const saveSettings = (host, s) => { if (host.saveRenderSettings) host.saveRenderSettings(s); else own = s; };

function enter(host) {
  if (!host.model.root.faces.size && !host.model.root.insts.size) { host.print(host.t('app.export.empty')); return false; }
  statusText = host.t('render.ipr.preparing');
  start(host);
  return true;
}
async function start(host) {
  const [{ createIpr }, { mcScene }] = await Promise.all([import('./render/ipr.js'), import('./render-mc.js')]);
  ipr = createIpr({
    stage: host.stage,
    scene: (s) => mcScene(host.model, host.cam, host.view.style, s),
    camera: (aspect) => camSpec(host, aspect),
    version: () => host.model.version,
    cameraKey: () => JSON.stringify(host.cam.toJSON()),
    settings: () => settingsOf(host),
    save: (s) => saveSettings(host, s),
    t: host.t,
    // only the status line changes (the Detail list stays open while samples come in); the whole panel when it is not shown
    onStatus: (s) => { statusText = s; if (statusEl?.isConnected) statusEl.textContent = s; else host.renderPanel(); },
  });
  ipr.start();
  host.renderPanel();
}
async function leave() { const x = ipr; ipr = null; statusText = ''; statusEl = null; await x?.dispose(); }

function command(name, host) {
  if (!ipr) return false;
  if (name === 'pause') { if (ipr.state.running) ipr.stop(); else ipr.start(); }
  else if (name === 'region') ipr.mode = ipr.mode === 'region' ? 'view' : 'region';
  else if (name === 'region-clear') ipr.clearRegion();
  else if (name === 'focus') ipr.mode = ipr.mode === 'focus' ? 'view' : 'focus';
  else return false;
  host.renderPanel();
  return true;
}

function panel(host, box) {
  const { el, t } = host;
  const s = ipr ? ipr.state : { running: false };
  const scaleSel = el('select', { className: 'mc-select', dataset: { iprScale: '' }, 'aria-label': t('render.ws.scale') },
    ...SCALES.map((k) => el('option', { value: String(k), selected: ipr && ipr.scale === k }, t('render.ws.scale.n', { n: Math.round(k * 100) }))));
  scaleSel.addEventListener('change', () => { if (ipr) ipr.scale = Number(scaleSel.value); });
  statusEl = el('p', { className: 'mc-note', dataset: { iprStatus: '' }, role: 'status' }, statusText || t('render.ipr.preparing'));
  const mode = ipr && ipr.mode !== 'view' ? ipr.mode : '';
  // the mode's instruction while region or focus is on; else the long note, unless it was put away
  let note;
  if (mode) note = el('p', { className: 'mc-note', dataset: { iprModeHint: mode } }, t(mode === 'region' ? 'render.ws.hint.region' : 'render.ws.hint.focus'));
  else if (!hintOff()) {
    note = el('div', { className: 'mc-ipr-hint', dataset: { iprHint: '' } },
      el('p', { className: 'mc-note' }, t('render.ws.hint')),
      el('button', { type: 'button', className: 'mc-linkbtn', dataset: { iprHintClose: '' }, onclick: () => { setHintOff(true); host.renderPanel(); } }, t('render.ws.hint.close')));
  } else note = el('button', { type: 'button', className: 'mc-linkbtn mc-ipr-hint-show', dataset: { iprHintShow: '' }, onclick: () => { setHintOff(false); host.renderPanel(); } }, t('render.ws.hint.show'));
  // 71.2: append() prints null as "null" — only what there is
  box.append(...[
    statusEl,
    el('label', {}, t('render.ws.scale'), scaleSel),
    note,
    s.region ? el('p', { className: 'mc-note' }, t('render.ws.region.on', { w: s.region[2] - s.region[0], h: s.region[3] - s.region[1] })) : null,
  ].filter(Boolean));
  return t('render.ws.heading');
}

export const RENDER_WS = registerWorkspace({
  id: 'render', labelKey: 'render.ws.name', icon: 'camera',
  groups: [{ labelKey: 'render.ws.group', items: [G('pause', 'pause-circle'), G('region', 'bounding-box'), G('region-clear', 'x-square'), G('focus', 'bullseye')] }],
  enter,
  exit() { leave(); },
  command(cmd, host) { return command(cmd.slice(7), host); },
  renderPanel(host, box) { return panel(host, box); },
  toolState(cmd) {
    const name = cmd.slice(7);
    if (!ipr) return { ok: false, why: '' };
    if (name === 'pause') return { ok: true, pressed: !ipr.state.running };
    if (name === 'region') return { ok: true, pressed: ipr.mode === 'region' };
    if (name === 'focus') return { ok: true, pressed: ipr.mode === 'focus' };
    if (name === 'region-clear') return ipr.state.region ? { ok: true } : { ok: false, why: '' };
    return { ok: true };
  },
});
