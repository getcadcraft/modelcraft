/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ws-animate.js — the Animate workspace (0.7 AN.1–AN.5, session `anim`): the timeline opens under the view (timeline.js:
 * Keys, Curves, Clips), the toolbar keys and plays, and the panel keys any property at the playhead — the chosen object's
 * place, turn and size, each lamp's brightness, spread and colour, the lens — and holds the workspace's other parts
 * (anim/*-ui.js: shape keys, rigs, constraints, physics), each a section of the panel.
 *
 * Registered with workspaces.js. Imported by timeline.js (session `anim`'s own file, which modelcraft.js already imports),
 * so the workspace exists without a line in modelcraft.js; it works through timeline.js activeTimeline().
 *
 *   PANEL_PARTS: [{id, render(host, box, tl) , command?(name, host, tl) → bool, keydown?(ev, host, tl) → bool,
 *     toolState?(name, host, tl) → {ok, why, pressed}}]   added to by the anim/ modules (addPart)
 */
import { registerWorkspace } from './workspaces.js';
import { activeTimeline, LIGHT_PROPS, rgbToHex, hexToRgb } from './timeline.js';
import { matrixToTRS, findProp, valueAt, pathKey } from './render/anim.js';
import { shapesPart } from './anim/shapes-ui.js';   // AN.4
import { rigPart, leaveRig } from './anim/rig-ui.js';   // AN.2
import { cnsPart } from './anim/cns-ui.js';   // AN.3
import { physicsPart } from './anim/physics-ui.js';   // AN.5
import './anim/rig-view.js';   // AN.2: the pose and weight tools (register themselves)

const G = (cmd, icon) => ({ cmd: 'animate-' + cmd, icon, labelKey: 'app.an.cmd.' + cmd, titleKey: 'app.an.cmd.' + cmd + '.title' });
const PARTS = [];
/** A section of the Animate panel (and its commands), from another anim/ module. */
export function addPart(p) { if (!PARTS.some((x) => x.id === p.id)) PARTS.push(p); }
addPart(rigPart);
addPart(cnsPart);
addPart(shapesPart);
addPart(physicsPart);

/** The chosen placements, as timeline paths: [{path, name}]. */
export function selectedPlacements(host) {
  return (host.sel || []).filter((x) => x.t === 'i').map((x) => {
    const path = [...host.path, x.id], pl = host.model.placementAt(path);
    return pl ? { path, name: pl.inst.name || host.model.defs.get(pl.inst.def)?.name || '' } : null;
  }).filter(Boolean);
}
const fmtN = (x, d = 3) => String(Math.round(x * 10 ** d) / 10 ** d);

function enter(host) {
  const tl = activeTimeline();
  if (!tl) return false;
  tl.open();
  // the panel shows values at the playhead: redrawn a few times a second at most (playing moves the playhead every frame)
  let timer = 0;
  const later = () => { if (!timer) timer = setTimeout(() => { timer = 0; host.renderPanel(); }, 200); };
  tl.hooks({ timeChanged: later, refreshed: later });
  return true;
}
function exit(host) {
  const tl = activeTimeline();
  if (tl) { leaveRig(host, tl); tl.hooks({ timeChanged: null, refreshed: null }); }
}

function command(name, host) {
  const tl = activeTimeline();
  if (!tl) return false;
  if (name === 'keycam') tl.keyCamera();
  else if (name === 'keytransform') tl.keyTransform(selectedPlacements(host));
  else if (name === 'auto') tl.setAuto(!tl.autoKey);
  else if (name === 'delete') tl.deleteKeys();
  else if (name === 'play') { if (!tl.isOpen) tl.open(); tl.togglePlay(); }   // 0.9 FX.31: Play, and Pause while it plays
  else if (name === 'stop') tl.stop();
  else if (name === 'prev' || name === 'next') document.querySelector(name === 'prev' ? '[data-tl-prev]' : '[data-tl-next]')?.click();
  else if (name === 'keys' || name === 'curves' || name === 'clips') { if (!tl.isOpen) tl.open(); tl.setMode(name); }
  else {
    for (const p of PARTS) if (p.command?.(name, host, tl)) { host.renderPanel(); return true; }
    return false;
  }
  host.renderPanel();
  return true;
}
function toolState(cmd, host) {
  const tl = activeTimeline(), name = cmd.slice('animate-'.length);
  if (!tl) return { ok: false, why: host.t('app.an.why.notl') };
  if (name === 'auto') return { ok: true, pressed: tl.autoKey };
  if (name === 'play') return tl.playing ? { ok: true, pressed: true, icon: 'pause-fill', label: host.t('app.tl.pause'), title: host.t('app.tl.pause.title') } : { ok: true, pressed: false };
  if (name === 'keys' || name === 'curves' || name === 'clips') return { ok: true, pressed: tl.isOpen && tl.mode === name };
  if (name === 'keytransform' && !selectedPlacements(host).length) return { ok: false, why: host.t('app.tl.keysel.none') };
  for (const p of PARTS) { const s = p.toolState?.(name, host, tl); if (s) return s; }
  return { ok: true };
}
function keydown(e, host) {
  const tl = activeTimeline();
  if (!tl || e.ctrlKey || e.metaKey || e.altKey) return false;
  for (const p of PARTS) if (p.keydown?.(e, host, tl)) return true;
  const k = e.key.toLowerCase();
  if (k === 'i' && !e.shiftKey) return command('keytransform', host);
  if (k === 'k' && !e.shiftKey) return command('keycam', host);
  return false;
}

// ---- the panel ----
function vecInputs(el, v, id, step, onChange, labels) {
  const ins = v.map((x, j) => el('input', { type: 'number', step: String(step), className: 'mc-input', value: fmtN(x), 'aria-label': labels[j], dataset: { anIn: id + '.' + j } }));
  for (const i of ins) i.addEventListener('change', () => { const out = ins.map((x) => Number(x.value)); if (out.every(Number.isFinite)) onChange(out); });
  return el('span', { className: 'mc-an-vec' }, ins);
}
function keyBtn(host, id, title, on, keyed) {
  const b = host.el('button', { type: 'button', className: 'mc-icon', title, 'aria-label': title, 'aria-pressed': String(!!keyed), dataset: { anKey: id } }, host.el('i', { className: keyed ? 'bi bi-diamond-fill' : 'bi bi-diamond', 'aria-hidden': 'true' }));   // i18n-ignore: an icon class
  b.addEventListener('click', on);
  return b;
}
function panel(host, box) {
  const { t, el, model } = host;
  const tl = activeTimeline();
  if (!tl) { box.append(el('p', { className: 'mc-note' }, t('app.an.why.notl'))); return t('app.ws.animate'); }
  const anim = tl.anim, at = tl.time;
  const fmtT = (s) => t('app.tl.secs', { s: (Math.round(s * 100) / 100).toFixed(2) });
  const wrap = el('div', { className: 'mc-an-panel', dataset: { anPanel: '' } });
  wrap.append(el('p', { className: 'mc-an-note' }, t('app.an.panel.at', { time: fmtT(at) })));
  const keyedAt = (target, prop) => { const i = findProp(anim, target, prop); return i >= 0 && anim.props[i].keys.some((k) => Math.abs(k.t - at) < 0.5 / anim.fps); };

  // the chosen object's transform
  const sel = selectedPlacements(host);
  wrap.append(el('h4', {}, t('app.an.panel.transform')));
  if (sel.length === 1) {
    const s = sel[0], p = model.placementAt(s.path), target = 'obj:' + pathKey(s.path);
    const ri = findProp(anim, target, 'rotation');
    const trs = matrixToTRS(p.inst.m, ri >= 0 ? valueAt(anim.props[ri], at) : null);
    const grid = el('div', { className: 'mc-an-props' });
    const axes = ['X', 'Y', 'Z'];   // i18n-ignore: axis letters
    for (const prop of ['location', 'rotation', 'scale']) {
      const keyIt = (v) => tl.keyProp(target, prop, v, s.name, { rest: p.inst.m });
      grid.append(el('span', {}, t('app.an.prop.' + prop)), vecInputs(el, trs[prop], prop, prop === 'rotation' ? 5 : 0.1, keyIt, axes.map((a) => t('app.an.prop.' + prop) + ' ' + a)),
        keyBtn(host, prop, t('app.an.key.this', { what: t('app.an.prop.' + prop) }), () => keyIt(trs[prop]), keyedAt(target, prop)));
    }
    wrap.append(grid);
    const all = el('button', { type: 'button', className: 'mc-btn', dataset: { anKeyTransform: '' } }, t('app.an.cmd.keytransform'));
    all.addEventListener('click', () => command('keytransform', host));
    wrap.append(all, el('p', { className: 'mc-an-note' }, t('app.an.panel.transform.note')));
  } else wrap.append(el('p', { className: 'mc-an-note' }, t(sel.length ? 'app.an.panel.one' : 'app.an.panel.pick')));

  // lamps
  wrap.append(el('h4', {}, t('app.an.panel.lamps')));
  if (!model.lights.size) wrap.append(el('p', { className: 'mc-an-note' }, t('app.an.panel.nolamps')));
  for (const [id, L] of model.lights) {
    const target = 'light:' + id, name = L.name || t('app.an.target.light');
    const grid = el('div', { className: 'mc-an-props', dataset: { anLight: String(id) } });
    grid.append(el('strong', { style: 'grid-column: 1 / -1' }, name));   // i18n-ignore: CSS
    const num = (prop, step, min, max) => {
      const v = LIGHT_PROPS[prop].get(L)[0];
      const i = el('input', { type: 'number', className: 'mc-input', step: String(step), min: String(min), max: String(max), value: fmtN(v, 0), 'aria-label': name + ' ' + t('app.an.prop.' + prop), dataset: { anIn: target + '.' + prop } });
      const keyIt = (x) => tl.keyProp(target, prop, [x], name);
      i.addEventListener('change', () => { const x = Number(i.value); if (Number.isFinite(x)) keyIt(Math.min(max, Math.max(min, x))); });
      grid.append(el('span', {}, t('app.an.prop.' + prop)), i, keyBtn(host, target + '.' + prop, t('app.an.key.this', { what: t('app.an.prop.' + prop) }), () => keyIt(v), keyedAt(target, prop)));
    };
    num('lumens', 50, 1, 200000);
    if (L.kind === 'spot') num('angle', 1, 5, 170);
    const col = el('input', { type: 'color', className: 'mc-input', value: L.color, 'aria-label': name + ' ' + t('app.an.prop.color'), dataset: { anIn: target + '.color' } });
    col.addEventListener('change', () => tl.keyProp(target, 'color', hexToRgb(col.value), name));
    grid.append(el('span', {}, t('app.an.prop.color')), col, keyBtn(host, target + '.color', t('app.an.key.this', { what: t('app.an.prop.color') }), () => tl.keyProp(target, 'color', hexToRgb(rgbToHex(hexToRgb(L.color))), name), keyedAt(target, 'color')));
    wrap.append(grid);
  }

  // the lens
  wrap.append(el('h4', {}, t('app.an.panel.camera')));
  {
    const grid = el('div', { className: 'mc-an-props' });
    const fov = host.cam.toJSON().fov ?? 35;
    const i = el('input', { type: 'number', className: 'mc-input', step: '1', min: '10', max: '120', value: fmtN(fov, 1), 'aria-label': t('app.an.prop.fov'), dataset: { anIn: 'camera.fov' } });
    const keyIt = (x) => tl.keyProp('camera', 'fov', [x], '');
    i.addEventListener('change', () => { const x = Number(i.value); if (Number.isFinite(x)) keyIt(Math.min(120, Math.max(10, x))); });
    grid.append(el('span', {}, t('app.an.prop.fov')), i, keyBtn(host, 'camera.fov', t('app.an.key.this', { what: t('app.an.prop.fov') }), () => keyIt(fov), keyedAt('camera', 'fov')));
    wrap.append(grid, el('p', { className: 'mc-an-note' }, t('app.an.panel.camera.note')));
  }
  box.append(wrap);
  for (const p of PARTS) p.render?.(host, box, tl);
  return t('app.ws.animate');
}

export const ANIMATE_WS = registerWorkspace({
  id: 'animate', labelKey: 'app.ws.animate', icon: 'film', blurbKey: 'app.an.ws.blurb',
  groups: [
    { labelKey: 'app.an.group.keys', items: [G('keytransform', 'arrows-move'), G('keycam', 'camera-video'), G('auto', 'record-circle'), G('delete', 'trash')] },
    { labelKey: 'app.an.group.play', items: [G('prev', 'skip-start-fill'), G('play', 'play-fill'), G('stop', 'pause-fill'), G('next', 'skip-end-fill')] },
    { labelKey: 'app.an.group.views', items: [G('keys', 'list-ul'), G('curves', 'bezier'), G('clips', 'collection')] },
    { labelKey: 'app.an.group.rig', items: [G('addbone', 'plus-lg'), G('pose', 'person-arms-up'), G('paint', 'brush'), G('autoweights', 'magic')] },
    { labelKey: 'app.an.group.physics', items: [G('bake', 'lightning-charge')] },
  ],
  // no `changed` hook: modelcraft.js calls it while drawing the panel, and the panel already reads everything afresh
  enter, exit, command: (cmd, host) => command(cmd.slice('animate-'.length), host), renderPanel: panel, keydown, toolState,
});
