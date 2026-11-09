/* SPDX-License-Identifier: Apache-2.0 */
/**
 * timeline.js — the animation timeline (0.6 LC.10; 0.7 AN.1 session `anim`): a bar along the bottom of the 3D view with a
 * camera track, a track per group or component that moves, and a track per animated property (a lamp's brightness, the
 * lens, a placement's place / turn / size as curves). Three views: Keys (the dope sheet: choose keys on any rows, move,
 * stretch, copy and paste them), Curves (the graph editor, anim/curves-ui.js) and Clips (saved actions on the timeline,
 * anim/clips-ui.js). The maths and the file form are render/anim.js (shared with BimCraft); this is ModelCraft's panel.
 * Rendering to video is the shared Render video dialog (render/video-ui.js), opened by modelcraft.js.
 *
 *   mountTimeline({root, model, cam, view, host, t, print, selected() → [{path, name}], perspChanged(), busy() → bool,
 *                  openVideo(), askText?}) → {open(), close(), toggle(), isOpen, anim, toJSON(), load(json), reset(), time,
 *                  setTime(t), play(), stop(), keyCamera(), keySelected(), fromScenes(), undo(), redo(), mode, setMode(m),
 *                  picked, commit(next, msg), keyTransform(list), keyProp(target, prop, v, name, {rest}), propLabel(track), apply()}
 *   activeTimeline() → the mounted timeline (the Animate workspace, ws-animate.js, works through it)
 *
 * Moving placements: the model's own placement matrices are set to their pose at the playhead (model.setPoses: no undo
 * step), so what shows is what Move and the other tools act on. A placement moved by hand at the playhead keeps its new
 * place only with a key: Set key, or Auto key (any selected group or component moved while it is on is keyed there; one
 * with no keys yet also gets a key at the start with where it was). Animated lamps are set the same way (model.setLight,
 * no undo step). Closing the timeline puts every moving placement and lamp back as it is at the start. The animation is
 * saved in the .modelcraft file (key `anim`, outside the model's undo history: the timeline has its own Undo and Redo).
 */
import { emptyAnim, cleanAnim, setCameraKey, setObjectKey, setPropKey, removeKey, moveKey, moveKeys, scaleKeys, copyKeys, pasteKeys,
  setEase, removeTrack, cameraAt, posesAt, propsAt, toPropTracks, matrixToTRS, findProp, keyTimes, nextKey, fromScenes as scenesToKeys,
  pathKey, shapeKeys, EASES, FPS, LIMITS } from './render/anim.js';
import { setMeshHooks } from './model.js';
import { createDeformer, animateDeformer } from './anim/deform.js';
import { objectPoses, rigCtx } from './anim/cns-model.js';
import { el } from './ui-util.js';
import { injectAnimCss } from './anim/anim-css.js';
import { mountCurves } from './anim/curves-ui.js';
import { mountClips } from './anim/clips-ui.js';
import './ws-animate.js';   // 0.7 AN.1: the Animate workspace (registers itself; it works through activeTimeline())

const same = (a, b) => a && b && a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) < 1e-9);
const r3 = (x) => Math.round(x * 1000) / 1000;
const MODES = ['keys', 'curves', 'clips'];
const TRS = ['location', 'rotation', 'scale'];
const CLIP_KEY = 'modelcraft.anim.keys';   // copied keys, so another tab can paste them
let active = null;
/** The mounted timeline, or null before the page has one. */
export const activeTimeline = () => active;

/** '#rrggbb' ↔ [r, g, b] in 0…1 (a lamp's colour track). */
export const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
export const rgbToHex = (c) => '#' + c.map((x) => Math.round(Math.min(1, Math.max(0, x)) * 255).toString(16).padStart(2, '0')).join('');
/** The lamp properties a track may animate, and how they are set on model.setLight. */
export const LIGHT_PROPS = {
  lumens: { get: (L) => [L.lumens], set: (v) => ({ lumens: Math.max(1, Math.min(200000, v[0])) }) },
  angle: { get: (L) => [L.angle], set: (v) => ({ angle: Math.max(5, Math.min(170, v[0])) }) },
  color: { get: (L) => hexToRgb(L.color), set: (v) => ({ color: rgbToHex(v) }) },
};

export function mountTimeline(o) {
  const { model, cam, view, host, t, print } = o;
  injectAnimCss();
  const box = o.root.querySelector('[data-timeline]');
  let anim = emptyAnim();
  let time = 0, playing = 0, autoKey = false, isOpen = false, mode = 'keys';
  let past = [], future = [];
  let picked = [];                 // the chosen keys: [{track: 'camera' | index | 'p<i>', t}]
  let preview = null;              // the graph editor's drag, shown before it is committed
  const applied = new Map();      // path key → the matrix this panel last set (to see a placement moved by hand)
  const seen = new Map();         // path key → a selected placement's matrix when last looked at (Auto key)
  let ourVersion = -1, warned = new Set();
  let clipboard = null;
  // 0.7 AN.4/AN.2: meshes moved by shape keys and skins (model.js MESH_HOOKS.deform, anim/deform.js)
  const deformer = createDeformer(model);
  setMeshHooks(deformer.hooks);

  // ---- the panel ----
  const btn = (key, icon, data, extra = {}) => el('button', { type: 'button', className: 'mc-tool mc-tl-btn', title: t(key + '.title'), dataset: data, ...extra },
    el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }), el('span', {}, t(key)));   // i18n-ignore: an icon class
  const playBtn = btn('app.tl.play', 'play-fill', { tlPlay: '' }, { 'aria-pressed': 'false' });
  const prevBtn = btn('app.tl.prev', 'skip-start-fill', { tlPrev: '' });
  const nextBtn = btn('app.tl.next', 'skip-end-fill', { tlNext: '' });
  const timeOut = el('output', { className: 'mc-tl-time', dataset: { tlTimeOut: '' }, 'aria-live': 'off' }, '');
  const lenIn = el('input', { type: 'number', min: '0.5', max: String(LIMITS.length), step: '0.5', className: 'mc-input mc-num', dataset: { tlLength: '' }, 'aria-label': t('app.tl.length') });
  const fpsSel = el('select', { className: 'mc-select', dataset: { tlFps: '' }, 'aria-label': t('app.tl.fps') }, FPS.map((f) => el('option', { value: String(f) }, t('app.tl.fps.n', { n: f }))));
  const camBtn = btn('app.tl.keycam', 'camera-video', { tlKeyCam: '' });
  const objBtn = btn('app.tl.keysel', 'box', { tlKeySel: '' });
  const autoBtn = el('button', { type: 'button', className: 'mc-toggle', dataset: { tlAuto: '' }, 'aria-pressed': 'false', title: t('app.tl.auto.title') }, t('app.tl.auto'));
  const easeSel = el('select', { className: 'mc-select', dataset: { tlEase: '' }, 'aria-label': t('app.tl.ease'), disabled: true }, EASES.map((e) => el('option', { value: e }, t('app.tl.ease.' + e))));
  const delBtn = btn('app.tl.delete', 'trash', { tlDelete: '' });
  const stretchIn = el('input', { type: 'number', min: '0.05', max: '20', step: '0.1', value: '2', className: 'mc-input mc-num mc-tl-stretch', dataset: { tlStretchBy: '' }, 'aria-label': t('app.an.stretch.by') });
  const stretchBtn = btn('app.an.stretch', 'arrows-expand-vertical', { tlStretch: '' });
  const scenesBtn = btn('app.tl.scenes', 'film', { tlScenes: '' });
  const undoBtn = btn('app.tl.undo', 'arrow-counterclockwise', { tlUndo: '' });
  const redoBtn = btn('app.tl.redo', 'arrow-clockwise', { tlRedo: '' });
  const videoBtn = btn('app.tl.video', 'camera-reels', { tlVideo: '' });
  const closeBtn = el('button', { type: 'button', className: 'mc-icon', dataset: { tlClose: '' }, title: t('app.tl.close'), 'aria-label': t('app.tl.close') }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
  const modeBtns = MODES.map((m) => el('button', { type: 'button', className: 'mc-tl-mode', 'aria-pressed': String(m === mode), dataset: { tlMode: m }, title: t('app.an.view.' + m + '.title') }, t('app.an.view.' + m)));
  const views = el('div', { className: 'mc-tl-views', role: 'group', 'aria-label': t('app.an.view') }, modeBtns);
  const scrub = el('input', { type: 'range', className: 'mc-tl-scrub', min: '0', max: '10', step: 'any', value: '0', dataset: { tlTime: '' }, 'aria-label': t('app.tl.time') });
  const rows = el('div', { className: 'mc-tl-rows', dataset: { tlRows: '' } });
  const head = el('div', { className: 'mc-tl-head', role: 'toolbar', 'aria-label': t('app.tl.aria') },
    playBtn, prevBtn, nextBtn, timeOut,
    el('label', { className: 'mc-tl-field' }, el('span', {}, t('app.tl.length')), lenIn),
    fpsSel, el('span', { className: 'mc-tl-sep' }), views, el('span', { className: 'mc-tl-sep' }),
    camBtn, objBtn, autoBtn, easeSel, delBtn, stretchIn, stretchBtn, el('span', { className: 'mc-tl-sep' }),
    scenesBtn, undoBtn, redoBtn, videoBtn, closeBtn);
  const ruler = el('div', { className: 'mc-tl-ruler' }, el('span', { className: 'mc-tl-name' }, ''), el('div', { className: 'mc-tl-scrubwrap' }, scrub, el('div', { className: 'mc-tl-ticks', dataset: { tlTicks: '' } })));
  const lanes = el('div', { className: 'mc-tl-lanes' }, ruler, rows, el('div', { className: 'mc-tl-playhead', dataset: { tlPlayhead: '' }, 'aria-hidden': 'true' }));
  const curves = mountCurves({
    t, anim: () => preview || anim, commit: (next, msg) => commit(next, msg), time: () => time, setTime: (s) => setTime(s),
    label: (track, comp) => chanLabel(track, comp), preview: (p) => { preview = p; apply({ camera: true }); },
    onPick: (sel) => { picked = sel.map((p) => ({ track: p.track, t: p.t })); markCurrent(); },
  });
  const clips = mountClips({ t, anim: () => anim, commit: (next, msg) => commit(next, msg), time: () => time, setTime: (s) => setTime(s),
    askName: async (def) => (o.askText ? o.askText(t('app.an.clip.name.h'), t('app.an.clip.name'), def) : def) });
  box.replaceChildren(head, lanes, curves.el, clips.el);
  box.dataset.tlMode = mode;

  // ---- history (the timeline's own) ----
  function commit(next, msg) {
    if (next === anim) return false;
    past.push(anim); if (past.length > 200) past.shift();
    future = [];
    anim = next;
    preview = null;
    if (msg) print(msg);
    model.dirty = true;
    o.changed?.();
    refresh(); apply();
    return true;
  }
  function undo() { if (!past.length) return; future.push(anim); anim = past.pop(); picked = []; refresh(); apply(); print(t('app.tl.undone')); }
  function redo() { if (!future.length) return; past.push(anim); anim = future.pop(); picked = []; refresh(); apply(); print(t('app.tl.redone')); }

  // ---- showing the animation at the playhead ----
  const fmt = (s) => t('app.tl.secs', { s: (Math.round(s * 100) / 100).toFixed(2) });
  const lightBase = new Map();     // light id → its values before the timeline set them (a clip at part influence blends from them)
  function baseOf(key) {
    const [target, prop] = key.split('|');
    if (target.startsWith('light:') && LIGHT_PROPS[prop]) { const id = +target.slice(6), b = lightBase.get(id); if (b) return LIGHT_PROPS[prop].get(b); }
    if (target === 'camera' && prop === 'fov') return [cam.fov ?? 35];
    return null;
  }
  /** What a driver reads that the animation doesn't set: a placement's place / turn / size, a lamp, the lens. */
  function readVar(target, prop) {
    if (target.startsWith('obj:')) { const p = model.placementAt(target.slice(4).split('/').map(Number)); return p ? matrixToTRS(p.inst.m)[prop] || null : null; }
    if (target.startsWith('light:') && LIGHT_PROPS[prop]) { const L = lightBase.get(+target.slice(6)) || model.lights.get(+target.slice(6)); return L ? LIGHT_PROPS[prop].get(L) : null; }
    if (target === 'camera' && prop === 'fov') return [cam.fov ?? 35];
    return null;
  }
  /** Shape-key values (sliders, tracks, drivers) and rigs' poses → the deformer, for every mesh that has them. */
  const applyShapes = (a, vals) => animateDeformer(deformer, a, vals, (rg) => rigCtx(model, a, rg, vals));
  let lastVals = new Map();   // what applyProps worked out last (the bones' poses for drawing them: anim/rig-view.js)
  function applyProps(a, at) {
    const vals = propsAt(a, at, baseOf, readVar);
    lastVals = vals;
    applyShapes(a, vals);
    const lit = new Set();   // the lamps the animation set
    for (const [key, v] of vals) {
      const [target, prop] = key.split('|');
      if (target.startsWith('light:') && LIGHT_PROPS[prop]) {
        const id = +target.slice(6), L = model.lights.get(id);
        if (!L) continue;
        if (!lightBase.has(id)) lightBase.set(id, { ...L });
        try { if (model.setLight(id, LIGHT_PROPS[prop].set(v))) lit.add(id); } catch { /* a value the lamp refuses: left as it was */ }
      } else if (target === 'camera' && prop === 'fov' && !a.camera.length) {
        const c = cam.toJSON();
        if (Math.abs((c.fov ?? 0) - v[0]) > 1e-9) { cam.set({ ...c, fov: Math.max(10, Math.min(120, v[0])) }); o.perspChanged?.(); }
      }
    }
    return lit;
  }
  /** With the timeline closed, meshes show their shape keys as at 0 s (sliders, and tracks there). */
  function applyClosed() { const a = preview || anim; lastVals = propsAt(a, 0, baseOf, readVar); applyShapes(a, lastVals); o.applied?.(a, 0); view.invalidate(); }
  function apply({ camera = true } = {}) {
    if (!isOpen) { if (!model._pv) applyClosed(); return; }
    if (model._pv || o.busy()) return;
    const a = preview || anim;
    const c = camera && cameraAt(a, time);
    if (c) { cam.set(c); o.perspChanged?.(); }
    const poses = objectPoses(model, a, time, propsAt(a, time, baseOf, readVar)).filter((p) => model.placementAt(p.path));   // AN.3: constraints too
    if (poses.length) model.setPoses(poses);
    for (const p of poses) applied.set(p.key, p.m);
    applyProps(a, time);
    o.applied?.(a, time);   // the Animate workspace's own (shape keys, rigs): anim/*.js
    ourVersion = model.version;
    view.invalidate();
    if (mode === 'curves') curves.draw();
  }
  function setTime(v, opts) {
    time = Math.max(0, Math.min(anim.length, Number(v) || 0));
    scrub.value = String(time);
    timeOut.textContent = fmt(time) + ' / ' + fmt(anim.length);
    placePlayhead();
    markCurrent();
    apply(opts);
    o.timeChanged?.(time);
  }
  function placePlayhead() {
    lanes.style.setProperty('--tl-at', String(anim.length ? time / anim.length : 0));
  }

  // ---- watching for placements moved by hand (Auto key) ----
  const trsTrack = (k) => TRS.some((p) => findProp(anim, 'obj:' + k, p) >= 0);
  function keyTRS(next, path, name, at, m, rest) {
    const k = pathKey(path), j = findProp(next, 'obj:' + k, 'rotation');
    const near = j >= 0 ? next.props[j].keys.reduce((b, x) => (Math.abs(x.t - at) < Math.abs(b.t - at) ? x : b)).v : null;
    const trs = matrixToTRS(m, near);
    for (const p of TRS) next = setPropKey(next, 'obj:' + k, p, at, trs[p], undefined, { name, rest: rest || m });
    return next;
  }
  function watch() {
    if (!isOpen || playing || model._pv || o.busy() || model.version === ourVersion || preview) return;
    ourVersion = model.version;
    let next = anim, keyed = 0;
    const moving = new Map(posesAt(anim, time).map((p) => [p.key, p]));   // keyed ones only: a constrained placement isn't keyed by moving it
    for (const [k, pose] of moving) {
      const p = model.placementAt(pose.path);
      if (!p) continue;
      const was = applied.get(k);
      if (!was || same(was, p.inst.m)) continue;
      const ti = anim.objects.findIndex((x) => pathKey(x.path) === k), tr = anim.objects[ti];
      const name = tr ? tr.name : anim.props?.find((x) => x.target === 'obj:' + k)?.name || '';
      if (autoKey) {
        next = trsTrack(k) ? keyTRS(next, pose.path, name, time, p.inst.m) : setObjectKey(next, pose.path, name, time, p.inst.m);
        keyed++; applied.set(k, p.inst.m.slice());
      } else if (!warned.has(k)) { warned.add(k); print(t('app.tl.moved', { name: name || t('app.tl.object'), time: fmt(time) })); }
    }
    if (autoKey) for (const s of o.selected()) {
      const k = pathKey(s.path);
      if (moving.has(k)) continue;
      const p = model.placementAt(s.path), before = seen.get(k);
      if (p && before && !same(before, p.inst.m)) {
        if (time > 0) next = setObjectKey(next, s.path, s.name, 0, before);
        next = setObjectKey(next, s.path, s.name, time, p.inst.m);
        applied.set(k, p.inst.m.slice());
        keyed++;
      }
    }
    seen.clear();
    for (const s of o.selected()) { const p = model.placementAt(s.path); if (p) seen.set(pathKey(s.path), p.inst.m.slice()); }
    if (keyed) commit(next, t('app.tl.autokeyed', { n: keyed, time: fmt(time) }));
  }
  const watcher = setInterval(watch, 250);

  // ---- tracks and keys ----
  function placementName(path, fallback) {
    const p = model.placementAt(path);
    if (!p) return t('app.tl.missing', { name: fallback || t('app.tl.object') });
    return p.inst.name || model.defs.get(p.inst.def)?.name || fallback || t('app.tl.object');
  }
  function trackName(tr) { return placementName(tr.path, tr.name); }
  const propWord = (prop) => { const k = 'app.an.prop.' + prop, w = t(k); return w === k ? prop : w; };
  /** What a property track animates, in words: "Lamp 2 · Brightness". */
  function propLabel(tr) {
    const tg = tr.target;
    let what;
    if (tg === 'camera') what = t('app.tl.camera');
    else if (tg === 'render') what = t('app.an.target.render');
    else if (tg.startsWith('light:')) what = model.lights.get(+tg.slice(6))?.name || tr.name || t('app.an.target.light');
    else if (tg.startsWith('obj:')) what = placementName(tg.slice(4).split('/').map(Number), tr.name);
    else if (tg.startsWith('shape:')) what = model.defs.get(tg.slice(6))?.name || tr.name || t('app.an.target.shape');   // the mesh
    else if (tg.startsWith('bone:')) { const [r, b] = tg.slice(5).split('/'); what = (anim.rigs || []).find((x) => x.id === r)?.bones.find((x) => x.id === b)?.name || b; }
    else what = tr.name || tg.slice(tg.indexOf(':') + 1);
    const w = tg.startsWith('shape:') ? (shapeKeys(anim, tg.slice(6)).find((k) => k.id === tr.prop)?.name || tr.prop) : propWord(tr.prop);
    return t('app.an.track', { what, prop: w });
  }
  const COMP = ['x', 'y', 'z', 'w'], RGB = ['r', 'g', 'b'];
  function chanLabel(track, comp) {
    const tr = anim.props?.[+String(track).slice(1)];
    if (!tr) return '';
    const n = tr.keys[0].v.length;
    if (n === 1) return propLabel(tr);
    return propLabel(tr) + ' ' + (tr.prop === 'color' ? RGB[comp] : COMP[comp]).toUpperCase();
  }
  const isPicked = (track, kt) => picked.some((p) => String(p.track) === String(track) && p.t === kt);
  function diamond(track, k, label) {
    const d = el('button', {
      type: 'button', className: 'mc-tl-key' + (k.ease === 'hold' ? ' is-hold' : '') + (isPicked(track, k.t) ? ' is-picked' : ''), style: '--k:' + (anim.length ? k.t / anim.length : 0),
      dataset: { tlKey: String(track), t: String(k.t) }, 'aria-label': t('app.tl.key.aria', { track: label, time: fmt(k.t) }), 'aria-pressed': String(isPicked(track, k.t)), title: fmt(k.t) + ' · ' + t('app.tl.ease.' + k.ease),   // i18n-ignore: a separator
    });
    d.addEventListener('pointerdown', (e) => startKeyDrag(e, track, k.t, d));
    d.addEventListener('keydown', (e) => {
      const step = (e.shiftKey ? 10 : 1) / anim.fps;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault(); e.stopPropagation();
        if (!isPicked(track, k.t)) picked = [{ track, t: k.t }];
        const dt = e.key === 'ArrowLeft' ? -Math.min(step, Math.min(...picked.map((p) => p.t))) : step;
        const sel = picked.slice();
        picked = picked.map((p) => ({ track: p.track, t: r3(Math.max(0, p.t + dt)) }));
        commit(moveKeys(anim, sel, dt)); focusSel(track, r3(Math.max(0, k.t + dt)));
      } else if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); e.stopPropagation(); if (!isPicked(track, k.t)) picked = [{ track, t: k.t }]; deleteKeys(); }
    });
    d.addEventListener('focus', () => { if (!picked.length) { picked = [{ track, t: k.t }]; markCurrent(); } });
    return d;
  }
  function focusSel(track, kt) { const b = rows.querySelector(`[data-tl-key="${track}"][data-t="${kt}"]`); b?.focus({ preventScroll: true }); }
  function row(track, name, icon, keys, label, extra = [], cls = '') {
    return el('div', { className: 'mc-tl-row' + cls, dataset: { tlRow: String(track) } },
      el('span', { className: 'mc-tl-name', title: name }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }), ' ', name, ...extra),   // i18n-ignore: an icon class
      el('div', { className: 'mc-tl-lane' }, keys.map((k) => diamond(track, k, label))));
  }
  function refresh() {
    lenIn.value = String(anim.length);
    fpsSel.value = String(anim.fps);
    scrub.max = String(anim.length);
    scrub.step = String(1 / anim.fps);
    // keep only chosen keys that are still there
    const keysOf = (tr) => (tr === 'camera' ? anim.camera : /^p\d+$/.test(String(tr)) ? anim.props?.[+String(tr).slice(1)]?.keys : anim.objects[tr]?.keys) || [];
    picked = picked.filter((p) => keysOf(p.track).some((k) => k.t === p.t));
    const camLabel = t('app.tl.camera');
    const list = [row('camera', camLabel, 'camera-video', anim.camera, camLabel)];
    anim.objects.forEach((tr, i) => {
      const name = trackName(tr), gone = !model.placementAt(tr.path);
      const rm = el('button', { type: 'button', className: 'mc-icon', title: t('app.tl.track.remove', { name }), 'aria-label': t('app.tl.track.remove', { name }), dataset: { tlTrackRemove: String(i) } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }));
      rm.addEventListener('click', () => { picked = []; commit(removeTrack(anim, i), t('app.tl.track.removed', { name })); });
      const cv = el('button', { type: 'button', className: 'mc-icon', title: t('app.an.tocurves', { name }), 'aria-label': t('app.an.tocurves', { name }), dataset: { tlToCurves: String(i) } }, el('i', { className: 'bi bi-bezier2', 'aria-hidden': 'true' }));
      cv.addEventListener('click', () => { picked = []; commit(toPropTracks(anim, i), t('app.an.tocurves.done', { name })); });
      list.push(row(i, name, 'box', tr.keys, name, [cv, rm], gone ? ' is-gone' : ''));
    });
    (anim.props || []).forEach((tr, i) => {
      const name = propLabel(tr), id = 'p' + i;
      const rm = el('button', { type: 'button', className: 'mc-icon', title: t('app.tl.track.remove', { name }), 'aria-label': t('app.tl.track.remove', { name }), dataset: { tlTrackRemove: id } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }));
      rm.addEventListener('click', () => { picked = []; commit(removeTrack(anim, id), t('app.tl.track.removed', { name })); });
      list.push(row(id, name, tr.target.startsWith('light:') ? 'lightbulb' : tr.target === 'camera' ? 'camera' : tr.target.startsWith('shape:') ? 'emoji-smile' : tr.target.startsWith('bone:') ? 'diagram-3' : 'sliders', tr.keys, name, [rm], ' is-prop'));
    });
    rows.replaceChildren(...list);
    // ticks: about 8 labels whatever the length
    const L = anim.length, step = [0.1, 0.25, 0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600].find((s) => L / s <= 10) || 600;
    const ticks = [];
    for (let s = 0; s <= L + 1e-9; s += step) ticks.push(el('span', { style: '--k:' + s / L }, String(Math.round(s * 100) / 100)));
    box.querySelector('[data-tl-ticks]').replaceChildren(...ticks);
    undoBtn.disabled = !past.length; redoBtn.disabled = !future.length;
    timeOut.textContent = fmt(time) + ' / ' + fmt(anim.length);
    placePlayhead(); markCurrent();
    if (mode === 'curves') curves.refresh();
    if (mode === 'clips') clips.refresh();
    o.refreshed?.();
  }
  function keyOf(p) {
    const ks = p.track === 'camera' ? anim.camera : /^p\d+$/.test(String(p.track)) ? anim.props?.[+String(p.track).slice(1)]?.keys : anim.objects[p.track]?.keys;
    return ks && ks.find((x) => x.t === p.t);
  }
  function markCurrent() {
    for (const b of rows.querySelectorAll('[data-tl-key]')) {
      const on = isPicked(b.dataset.tlKey === 'camera' || b.dataset.tlKey.startsWith('p') ? b.dataset.tlKey : Number(b.dataset.tlKey), Number(b.dataset.t));
      b.classList.toggle('is-sel', on); b.classList.toggle('is-picked', on); b.setAttribute('aria-pressed', String(on));
    }
    const ks = picked.map(keyOf).filter(Boolean);
    easeSel.disabled = !ks.length;
    if (ks.length) easeSel.value = ks.every((k) => k.ease === ks[0].ease) ? ks[0].ease : ks[0].ease;
    delBtn.disabled = !ks.length && !keyTimes(anim).some((x) => Math.abs(x - time) < 0.5 / anim.fps);
    stretchBtn.disabled = stretchIn.disabled = ks.length < 2;
  }
  const trackArg = (s) => (s === 'camera' || String(s).startsWith('p') ? s : Number(s));

  // dragging a key along its lane (a click without moving just picks it and goes to its time); Shift / Ctrl add to the choice
  function startKeyDrag(e, track, t0, d) {
    if (e.button !== 0) return;
    e.preventDefault(); e.stopPropagation();
    const toggle = e.shiftKey || e.ctrlKey || e.metaKey;
    if (toggle) {
      picked = isPicked(track, t0) ? picked.filter((p) => !(String(p.track) === String(track) && p.t === t0)) : [...picked, { track, t: t0 }];
      markCurrent(); d.focus({ preventScroll: true });
      return;
    }
    if (!isPicked(track, t0)) picked = [{ track, t: t0 }];
    const lane = d.parentElement.getBoundingClientRect();
    let moved = false, to = t0;
    d.setPointerCapture(e.pointerId);
    const many = picked.length > 1;
    const others = many ? [...rows.querySelectorAll('[data-tl-key].is-picked')] : [d];
    const move = (ev) => {
      const f = Math.max(0, Math.min(1, (ev.clientX - lane.left) / lane.width));
      to = Math.round(f * anim.length * anim.fps) / anim.fps;
      if (Math.abs(ev.clientX - e.clientX) > 3) moved = true;
      if (moved) for (const b of others) b.style.setProperty('--k', String(Math.max(0, Number(b.dataset.t) + to - t0) / anim.length));
    };
    const up = () => {
      d.removeEventListener('pointermove', move); d.removeEventListener('pointerup', up); d.removeEventListener('pointercancel', up);
      if (moved && Math.abs(to - t0) > 1e-6) {
        const dt = Math.max(to - t0, -Math.min(...picked.map((p) => p.t)));
        const sel = picked.slice();
        picked = picked.map((p) => ({ track: p.track, t: r3(p.t + dt) }));
        commit(many ? moveKeys(anim, sel, dt) : moveKey(anim, track, t0, to), t('app.tl.moved.key', { time: fmt(r3(t0 + dt)) }));
        focusSel(track, r3(t0 + dt));
      } else { setTime(t0); focusSel(track, t0); }
    };
    d.addEventListener('pointermove', move); d.addEventListener('pointerup', up); d.addEventListener('pointercancel', up);
  }
  // a click or drag on a lane's empty part moves the playhead; with Shift it draws a box that chooses the keys in it
  rows.addEventListener('pointerdown', (e) => {
    const lane = e.target.closest('.mc-tl-lane');
    if (!lane || e.target.closest('[data-tl-key]') || e.button !== 0) return;
    if (e.shiftKey) { startBox(e); return; }
    const r = lane.getBoundingClientRect();
    const at = (ev) => setTime(Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width)) * anim.length);
    at(e);
    lane.setPointerCapture(e.pointerId);
    const move = (ev) => at(ev);
    const up = () => { lane.removeEventListener('pointermove', move); lane.removeEventListener('pointerup', up); };
    lane.addEventListener('pointermove', move); lane.addEventListener('pointerup', up);
  });
  function startBox(e) {
    const host0 = lanes.getBoundingClientRect(), x0 = e.clientX, y0 = e.clientY;
    const mark = el('div', { className: 'mc-tl-box' });
    lanes.append(mark);
    const place = (x, y) => Object.assign(mark.style, { left: Math.min(x, x0) - host0.left + 'px', top: Math.min(y, y0) - host0.top + lanes.scrollTop + 'px', width: Math.abs(x - x0) + 'px', height: Math.abs(y - y0) + 'px' });
    place(x0, y0);
    const move = (ev) => place(ev.clientX, ev.clientY);
    const up = (ev) => {
      window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up);
      mark.remove();
      const bx = [Math.min(ev.clientX, x0), Math.max(ev.clientX, x0)], by = [Math.min(ev.clientY, y0), Math.max(ev.clientY, y0)];
      const hits = [...rows.querySelectorAll('[data-tl-key]')].filter((b) => { const r = b.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2; return cx >= bx[0] && cx <= bx[1] && cy >= by[0] && cy <= by[1]; });
      for (const b of hits) { const tr = trackArg(b.dataset.tlKey), kt = Number(b.dataset.t); if (!isPicked(tr, kt)) picked.push({ track: tr, t: kt }); }
      markCurrent();
    };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
  }
  scrub.addEventListener('input', () => { stop(); setTime(Number(scrub.value)); });

  // ---- playing ----
  function play() {
    if (playing) return;
    if (!keyTimes(anim).length && !(anim.clips || []).length) { print(t('app.tl.nokeys')); return; }
    if (time >= anim.length - 1e-6) setTime(0);
    let last = performance.now();
    playBtn.setAttribute('aria-pressed', 'true');
    playBtn.querySelector('i').className = 'bi bi-pause-fill';
    playBtn.querySelector('span').textContent = t('app.tl.pause');
    o.playState?.(true);
    const step = (now) => {
      if (!playing) return;
      if (o.busy() || model._pv) { stop(); return; }
      const nt = time + (now - last) / 1000;
      last = now;
      if (nt >= anim.length) { setTime(anim.length); stop(); return; }
      setTime(nt);
      playing = requestAnimationFrame(step);
    };
    playing = requestAnimationFrame(step);
  }
  function stop() {
    if (!playing) return;
    cancelAnimationFrame(playing); playing = 0;
    playBtn.setAttribute('aria-pressed', 'false');
    playBtn.querySelector('i').className = 'bi bi-play-fill';
    playBtn.querySelector('span').textContent = t('app.tl.play');
    o.playState?.(false);
  }

  // ---- actions ----
  function keyCamera() {
    stop();
    commit(setCameraKey(anim, time, cam.toJSON()), t('app.tl.keyed.cam', { time: fmt(time) }));
    picked = [{ track: 'camera', t: r3(time) }]; markCurrent();
  }
  function keySelected() {
    stop();
    const list = o.selected();
    if (!list.length) { print(t('app.tl.keysel.none')); return; }
    let next = anim;
    for (const s of list) {
      const p = model.placementAt(s.path);
      if (!p) continue;
      const k = pathKey(s.path);
      next = trsTrack(k) ? keyTRS(next, s.path, s.name, time, p.inst.m) : setObjectKey(next, s.path, s.name, time, p.inst.m);
      applied.set(k, p.inst.m.slice());
      warned.delete(k);
    }
    commit(next, t('app.tl.keyed.sel', { n: list.length, time: fmt(time) }));
  }
  /** Key the place, turn and size of each placement as curves (the Animate workspace's Key transform; graph-editable). */
  function keyTransform(list) {
    stop();
    if (!list.length) { print(t('app.tl.keysel.none')); return false; }
    let next = anim;
    for (const s of list) {
      const p = model.placementAt(s.path);
      if (!p) continue;
      const k = pathKey(s.path), ti = next.objects.findIndex((x) => pathKey(x.path) === k);
      if (ti >= 0) next = toPropTracks(next, ti);   // its matrix keys join the curves
      const rest = (next.rests || []).find((r) => pathKey(r.path) === k)?.m || p.inst.m;
      next = keyTRS(next, s.path, s.name, time, p.inst.m, rest);
      applied.set(k, p.inst.m.slice());
      warned.delete(k);
    }
    return commit(next, t('app.an.keyed.transform', { n: list.length, time: fmt(time) }));
  }
  /** Key one property at the playhead (the Animate workspace's property list). */
  function keyProp(target, prop, v, name, { rest } = {}) {
    stop();
    const next = setPropKey(anim, target, prop, time, v, undefined, { name, rest });
    if (next === anim) return false;
    const i = findProp(next, target, prop);
    commit(next, t('app.an.keyed.prop', { what: propLabel(next.props[i]), time: fmt(time) }));
    picked = [{ track: 'p' + i, t: r3(time) }]; markCurrent();
    return true;
  }
  function deleteKeys() {
    stop();
    if (picked.length) {
      // the highest track numbers first: a track whose last key goes is removed, which moves the numbers of the ones after it
      const rank = (tr) => (tr === 'camera' ? -1 : String(tr).startsWith('p') ? +String(tr).slice(1) : +tr);
      let next = anim;
      const sel = picked; picked = [];
      for (const p of [...sel].sort((a, b) => rank(b.track) - rank(a.track))) next = removeKey(next, p.track, p.t);
      commit(next, t('app.tl.deleted'));
      return;
    }
    let next = anim;
    const near = (ks) => ks.filter((k) => Math.abs(k.t - time) < 0.5 / anim.fps).map((k) => k.t);
    for (const k of near(anim.camera)) next = removeKey(next, 'camera', k);
    for (let i = (next.props || []).length - 1; i >= 0; i--) for (const k of near(next.props[i].keys)) next = removeKey(next, 'p' + i, k);
    for (let i = next.objects.length - 1; i >= 0; i--) for (const k of near(next.objects[i].keys)) next = removeKey(next, i, k);
    if (next !== anim) commit(next, t('app.tl.deleted'));
  }
  function stretch() {
    const f = Number(stretchIn.value);
    if (!(f > 0) || picked.length < 2) return;
    const sel = picked.slice();
    picked = picked.map((p) => ({ track: p.track, t: r3(Math.max(0, time + (p.t - time) * f)) }));
    commit(scaleKeys(anim, sel, time, f), t('app.an.stretched', { f: Math.round(f * 100) / 100 }));
  }
  function copySel() {
    if (!picked.length) return false;
    clipboard = copyKeys(anim, picked);
    try { localStorage.setItem(CLIP_KEY, JSON.stringify(clipboard)); } catch { /* storage off: this tab only */ }
    print(t('app.an.copied', { n: picked.length }));
    return true;
  }
  function pasteSel() {
    let c = clipboard;
    try { const s = localStorage.getItem(CLIP_KEY); if (s) c = JSON.parse(s); } catch { /* use this tab's */ }
    const next = pasteKeys(anim, c, time);
    if (next !== anim) commit(next, t('app.an.pasted', { time: fmt(time) }));
  }
  function fromScenes() {
    stop();
    if (model.scenes.length < 2) { print(t('app.tl.scenes.few')); return false; }
    const { keys, length } = scenesToKeys(model.scenes);
    // the scenes' length, or longer if a moving object's keys go on after it
    const lastObj = Math.max(0, ...anim.objects.flatMap((x) => x.keys.map((k) => k.t)), ...(anim.props || []).flatMap((x) => x.keys.map((k) => k.t)));
    const next = { ...anim, camera: keys, length: Math.max(length, lastObj) };
    commit(next, t('app.tl.scenes.done', { n: model.scenes.length, s: fmt(length) }));
    setTime(0);
    return true;
  }
  function setMode(m) {
    if (!MODES.includes(m)) return;
    mode = m;
    box.dataset.tlMode = m;
    for (const b of modeBtns) b.setAttribute('aria-pressed', String(b.dataset.tlMode === m));
    if (m === 'curves') { curves.show(); curves.pickKeys(picked); } else curves.hide();
    if (m === 'clips') clips.show(); else clips.hide();
    o.modeChanged?.(m);
  }
  for (const b of modeBtns) b.addEventListener('click', () => setMode(b.dataset.tlMode));
  playBtn.addEventListener('click', () => (playing ? stop() : play()));
  prevBtn.addEventListener('click', () => { stop(); const k = nextKey(anim, time, -1); setTime(k ?? 0); });
  nextBtn.addEventListener('click', () => { stop(); const k = nextKey(anim, time, 1); setTime(k ?? anim.length); });
  camBtn.addEventListener('click', keyCamera);
  objBtn.addEventListener('click', keySelected);
  autoBtn.addEventListener('click', () => setAuto(!autoKey));
  function setAuto(on) { autoKey = !!on; autoBtn.setAttribute('aria-pressed', String(autoKey)); seen.clear(); print(t(autoKey ? 'app.tl.auto.on' : 'app.tl.auto.off')); o.refreshed?.(); }
  easeSel.addEventListener('change', () => { let next = anim; for (const p of picked) next = setEase(next, p.track, p.t, easeSel.value); commit(next); });
  delBtn.addEventListener('click', deleteKeys);
  stretchBtn.addEventListener('click', stretch);
  scenesBtn.addEventListener('click', fromScenes);
  undoBtn.addEventListener('click', undo);
  redoBtn.addEventListener('click', redo);
  videoBtn.addEventListener('click', () => { stop(); o.openVideo(); });
  closeBtn.addEventListener('click', () => close());
  lenIn.addEventListener('change', () => {
    const v = Number(lenIn.value), last = keyTimes(anim).pop() || 0;
    if (!Number.isFinite(v) || v < 0.5) { lenIn.value = String(anim.length); return; }
    if (v < last - 1e-6) { print(t('app.tl.length.short', { time: fmt(last) })); lenIn.value = String(anim.length); return; }
    commit({ ...anim, length: Math.min(LIMITS.length, Math.round(v * 1000) / 1000) }, t('app.tl.length.set', { s: fmt(Math.min(LIMITS.length, v)) }));
    setTime(Math.min(time, anim.length));
  });
  fpsSel.addEventListener('change', () => commit({ ...anim, fps: Number(fpsSel.value) }));
  // keys typed in the panel stay in the panel (the view's keys would start tools). In it, Ctrl+C / Ctrl+V copy and paste keys
  // and Ctrl+Z / Ctrl+Y (Ctrl+Shift+Z) are the timeline's own Undo and Redo; the app's other Ctrl keys (Save, Open…) still work
  box.addEventListener('keydown', (e) => {
    const typing = e.target.matches('input, select, textarea');
    if ((e.ctrlKey || e.metaKey) && !e.altKey) {
      const k = e.key.toLowerCase();
      const mine = (f) => { e.preventDefault(); e.stopPropagation(); f(); };
      if (!typing && !e.shiftKey && k === 'c') { if (picked.length) mine(copySel); else e.stopPropagation(); return; }
      if (!typing && !e.shiftKey && k === 'v') return mine(pasteSel);
      if (!typing && k === 'z') return mine(e.shiftKey ? redo : undo);
      if (!typing && k === 'y') return mine(redo);
      return;   // to the app
    }
    if (e.key !== 'Escape' && e.key !== 'Tab') e.stopPropagation();
  });

  // ---- open / close ----
  function open() {
    if (isOpen) return;
    isOpen = true; box.hidden = false;
    o.root.classList.add('has-timeline');
    refresh(); setTime(time, { camera: anim.camera.length > 0 });
    if (mode === 'curves') curves.show();
    o.onToggle?.(true);
    view.resize?.();
  }
  function restStart() {
    // moving placements and lamps back as they are at the start
    const poses = objectPoses(model, anim, 0, propsAt(anim, 0, baseOf, readVar)).filter((p) => model.placementAt(p.path));
    if (poses.length) { model.setPoses(poses); view.invalidate(); }
    const lit = applyProps(anim, 0);
    // a lamp no longer animated at all (its track deleted) goes back as it was before the timeline set it
    for (const [id, L] of lightBase) if (model.lights.has(id) && !lit.has(id)) { try { model.setLight(id, L); } catch { /* gone */ } }
    lightBase.clear();
    o.applied?.(anim, 0);
  }
  function close() {
    if (!isOpen) return;
    stop();
    restStart();
    isOpen = false; box.hidden = true;
    o.root.classList.remove('has-timeline');
    o.onToggle?.(false);
    view.resize?.();
  }

  active = {
    open, close, toggle: () => (isOpen ? close() : open()),
    get isOpen() { return isOpen; },
    /** 0.9 FX.31: is the animation playing; play-or-pause is what Space, the command camera.play and the Animate toolbar's Play do. */
    get playing() { return !!playing; },
    togglePlay() { if (playing) stop(); else play(); },
    get anim() { return anim; },
    set anim(a) { anim = a || emptyAnim(); refresh(); },
    get time() { return time; },
    get autoKey() { return autoKey; },
    setAuto,
    get mode() { return mode; },
    get picked() { return picked.slice(); },
    set picked(p) { picked = (p || []).map((x) => ({ track: x.track, t: x.t })); markCurrent(); },
    setMode, commit, keyTransform, keyProp, propLabel, chanLabel, apply, refresh,
    get curves() { return curves; }, get clips() { return clips; }, get deformer() { return deformer; }, readVar,
    get values() { return lastVals; },
    /** Show `a` without committing it (a drag in progress), or null to show the animation again. */
    preview(a) { preview = a || null; apply(); },
    /** The animation as shown now (a drag's preview, else the animation). */
    get shown() { return preview || anim; },
    setTime, play, stop, keyCamera, keySelected, fromScenes, undo, redo, deleteKeys, copyKeys: copySel, pasteKeys: pasteSel, stretch,
    has: () => keyTimes(anim).length > 0 || (anim.clips || []).length > 0,
    toJSON: () => (keyTimes(anim).length || (anim.clips || []).length ? anim : null),
    /** A file's animation (untrusted: checked). */
    load(json) {
      stop();
      anim = cleanAnim(json) || emptyAnim();
      past = []; future = []; picked = []; applied.clear(); warned.clear(); lightBase.clear(); time = 0;
      refresh();
      if (isOpen) setTime(0); else applyClosed();
      o.loaded?.(anim);
    },
    reset() { this.load(null); },
    dispose() { clearInterval(watcher); stop(); if (active === api) active = null; },
    /** Hooks the Animate workspace sets (anim/*.js): what to apply at a time, names of shape keys. */
    hooks(h) { Object.assign(o, h); },
  };
  const api = active;
  return api;
}
