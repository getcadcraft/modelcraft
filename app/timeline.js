/* SPDX-License-Identifier: Apache-2.0 */
/**
 * timeline.js — the animation timeline (0.6 LC.10): a bar along the bottom of the 3D view with a camera track and a track
 * per group or component that moves. The maths and the file form are render/anim.js (shared with BimCraft); this is
 * ModelCraft's panel. Rendering to video is the shared Render video dialog (render/video-ui.js), opened by modelcraft.js.
 *
 *   mountTimeline({root, model, cam, view, host, t, print, selected() → [{path, name}], perspChanged(), busy() → bool,
 *                  openVideo()}) → {open(), close(), toggle(), isOpen, anim, toJSON(), load(json), reset(), time, setTime(t),
 *                  play(), stop(), keyCamera(), keySelected(), fromScenes(), undo(), redo()}
 *
 * Moving placements: the model's own placement matrices are set to their pose at the playhead (model.setPoses: no undo
 * step), so what shows is what Move and the other tools act on. A placement moved by hand at the playhead keeps its new
 * place only with a key: Set key, or Auto key (any selected group or component moved while it is on is keyed there; one
 * with no keys yet also gets a key at the start with where it was). Closing the timeline puts every moving placement back
 * at its start pose. The animation is saved in the .modelcraft file (key `anim`, outside the model's undo history: the
 * timeline has its own Undo and Redo).
 */
import { emptyAnim, cleanAnim, setCameraKey, setObjectKey, removeKey, moveKey, setEase, removeTrack, cameraAt, posesAt,
  keyTimes, nextKey, fromScenes as scenesToKeys, pathKey, EASES, FPS, LIMITS } from './render/anim.js';
import { el } from './ui-util.js';

const same = (a, b) => a && b && a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) < 1e-9);

export function mountTimeline(o) {
  const { model, cam, view, host, t, print } = o;
  const box = o.root.querySelector('[data-timeline]');
  let anim = emptyAnim();
  let time = 0, playing = 0, autoKey = false, isOpen = false;
  let past = [], future = [];
  let sel = null;                 // the chosen key: {track: 'camera' | index, t}
  const applied = new Map();      // path key → the matrix this panel last set (to see a placement moved by hand)
  const seen = new Map();         // path key → a selected placement's matrix when last looked at (Auto key)
  let ourVersion = -1, warned = new Set();

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
  const scenesBtn = btn('app.tl.scenes', 'film', { tlScenes: '' });
  const undoBtn = btn('app.tl.undo', 'arrow-counterclockwise', { tlUndo: '' });
  const redoBtn = btn('app.tl.redo', 'arrow-clockwise', { tlRedo: '' });
  const videoBtn = btn('app.tl.video', 'camera-reels', { tlVideo: '' });
  const closeBtn = el('button', { type: 'button', className: 'mc-icon', dataset: { tlClose: '' }, title: t('app.tl.close'), 'aria-label': t('app.tl.close') }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
  const scrub = el('input', { type: 'range', className: 'mc-tl-scrub', min: '0', max: '10', step: 'any', value: '0', dataset: { tlTime: '' }, 'aria-label': t('app.tl.time') });
  const rows = el('div', { className: 'mc-tl-rows', dataset: { tlRows: '' } });
  const head = el('div', { className: 'mc-tl-head', role: 'toolbar', 'aria-label': t('app.tl.aria') },
    playBtn, prevBtn, nextBtn, timeOut,
    el('label', { className: 'mc-tl-field' }, el('span', {}, t('app.tl.length')), lenIn),
    fpsSel, el('span', { className: 'mc-tl-sep' }),
    camBtn, objBtn, autoBtn, easeSel, delBtn, el('span', { className: 'mc-tl-sep' }),
    scenesBtn, undoBtn, redoBtn, videoBtn, closeBtn);
  const ruler = el('div', { className: 'mc-tl-ruler' }, el('span', { className: 'mc-tl-name' }, ''), el('div', { className: 'mc-tl-scrubwrap' }, scrub, el('div', { className: 'mc-tl-ticks', dataset: { tlTicks: '' } })));
  const lanes = el('div', { className: 'mc-tl-lanes' }, ruler, rows, el('div', { className: 'mc-tl-playhead', dataset: { tlPlayhead: '' }, 'aria-hidden': 'true' }));
  box.replaceChildren(head, lanes);

  // ---- history (the timeline's own) ----
  function commit(next, msg) {
    if (next === anim) return false;
    past.push(anim); if (past.length > 200) past.shift();
    future = [];
    anim = next;
    if (msg) print(msg);
    model.dirty = true;
    o.changed?.();
    refresh(); apply();
    return true;
  }
  function undo() { if (!past.length) return; future.push(anim); anim = past.pop(); sel = null; refresh(); apply(); print(t('app.tl.undone')); }
  function redo() { if (!future.length) return; past.push(anim); anim = future.pop(); sel = null; refresh(); apply(); print(t('app.tl.redone')); }

  // ---- showing the animation at the playhead ----
  const fmt = (s) => t('app.tl.secs', { s: (Math.round(s * 100) / 100).toFixed(2) });
  function apply({ camera = true } = {}) {
    if (!isOpen || model._pv || o.busy()) return;
    const c = camera && cameraAt(anim, time);
    if (c) { cam.set(c); o.perspChanged?.(); }
    const poses = posesAt(anim, time).filter((p) => model.placementAt(p.path));
    if (poses.length) model.setPoses(poses);
    for (const p of poses) applied.set(p.key, p.m);
    ourVersion = model.version;
    view.invalidate();
  }
  function setTime(v, opts) {
    time = Math.max(0, Math.min(anim.length, Number(v) || 0));
    scrub.value = String(time);
    timeOut.textContent = fmt(time) + ' / ' + fmt(anim.length);
    placePlayhead();
    markCurrent();
    apply(opts);
  }
  function placePlayhead() {
    lanes.style.setProperty('--tl-at', String(anim.length ? time / anim.length : 0));
  }

  // ---- watching for placements moved by hand (Auto key) ----
  function watch() {
    if (!isOpen || playing || model._pv || o.busy() || model.version === ourVersion) return;
    ourVersion = model.version;
    let next = anim, keyed = 0;
    anim.objects.forEach((tr) => {
      const p = model.placementAt(tr.path);
      if (!p) return;
      const was = applied.get(pathKey(tr.path));
      if (was && !same(was, p.inst.m)) {
        if (autoKey) { next = setObjectKey(next, tr.path, tr.name, time, p.inst.m); keyed++; applied.set(pathKey(tr.path), p.inst.m.slice()); }
        else if (!warned.has(pathKey(tr.path))) { warned.add(pathKey(tr.path)); print(t('app.tl.moved', { name: tr.name || t('app.tl.object'), time: fmt(time) })); }
      }
    });
    if (autoKey) for (const s of o.selected()) {
      const k = pathKey(s.path);
      if (anim.objects.some((x) => pathKey(x.path) === k)) continue;
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
  function trackName(tr) {
    const p = model.placementAt(tr.path);
    if (!p) return t('app.tl.missing', { name: tr.name || t('app.tl.object') });
    return p.inst.name || model.defs.get(p.inst.def)?.name || tr.name || t('app.tl.object');
  }
  function diamond(track, k, label) {
    const d = el('button', {
      type: 'button', className: 'mc-tl-key' + (k.ease === 'hold' ? ' is-hold' : ''), style: '--k:' + (anim.length ? k.t / anim.length : 0),
      dataset: { tlKey: String(track), t: String(k.t) }, 'aria-label': t('app.tl.key.aria', { track: label, time: fmt(k.t) }), title: fmt(k.t) + ' · ' + t('app.tl.ease.' + k.ease),   // i18n-ignore: a separator
    });
    d.addEventListener('pointerdown', (e) => startKeyDrag(e, track, k.t, d));
    d.addEventListener('keydown', (e) => {
      const step = (e.shiftKey ? 10 : 1) / anim.fps;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); const to = Math.max(0, k.t + (e.key === 'ArrowLeft' ? -step : step)); sel = { track, t: Math.round(to * 1000) / 1000 }; commit(moveKey(anim, track, k.t, to)); focusSel(); }
      else if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); e.stopPropagation(); sel = null; commit(removeKey(anim, track, k.t), t('app.tl.deleted')); }
    });
    d.addEventListener('focus', () => { sel = { track, t: k.t }; markCurrent(); });
    return d;
  }
  function focusSel() { if (!sel) return; const b = rows.querySelector(`[data-tl-key="${sel.track}"][data-t="${sel.t}"]`); b?.focus({ preventScroll: true }); }
  function refresh() {
    lenIn.value = String(anim.length);
    fpsSel.value = String(anim.fps);
    scrub.max = String(anim.length);
    scrub.step = String(1 / anim.fps);
    const camLabel = t('app.tl.camera');
    const list = [el('div', { className: 'mc-tl-row', dataset: { tlRow: 'camera' } }, el('span', { className: 'mc-tl-name' }, el('i', { className: 'bi bi-camera-video', 'aria-hidden': 'true' }), ' ', camLabel),
      el('div', { className: 'mc-tl-lane' }, anim.camera.map((k) => diamond('camera', k, camLabel))))];
    anim.objects.forEach((tr, i) => {
      const name = trackName(tr), gone = !model.placementAt(tr.path);
      const rm = el('button', { type: 'button', className: 'mc-icon', title: t('app.tl.track.remove', { name }), 'aria-label': t('app.tl.track.remove', { name }), dataset: { tlTrackRemove: String(i) } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }));
      rm.addEventListener('click', () => { sel = null; commit(removeTrack(anim, i), t('app.tl.track.removed', { name })); });
      list.push(el('div', { className: 'mc-tl-row' + (gone ? ' is-gone' : ''), dataset: { tlRow: String(i) } },
        el('span', { className: 'mc-tl-name', title: name }, el('i', { className: 'bi bi-box', 'aria-hidden': 'true' }), ' ', name, rm),
        el('div', { className: 'mc-tl-lane' }, tr.keys.map((k) => diamond(i, k, name)))));
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
  }
  function keyAt(track) {
    const ks = track === 'camera' ? anim.camera : anim.objects[track]?.keys;
    return ks && ks.find((k) => Math.abs(k.t - time) < 0.5 / anim.fps);
  }
  function markCurrent() {
    if (sel && !keyAt(sel.track) && !(sel && (sel.track === 'camera' ? anim.camera : anim.objects[sel.track]?.keys || []).some((k) => k.t === sel.t))) sel = null;
    for (const b of rows.querySelectorAll('[data-tl-key]')) b.classList.toggle('is-sel', !!sel && b.dataset.tlKey === String(sel.track) && Number(b.dataset.t) === sel.t);
    const k = sel && (sel.track === 'camera' ? anim.camera : anim.objects[sel.track]?.keys || []).find((x) => x.t === sel.t);
    easeSel.disabled = !k;
    if (k) easeSel.value = k.ease;
    delBtn.disabled = !k && !keyTimes(anim).some((x) => Math.abs(x - time) < 0.5 / anim.fps);
  }

  // dragging a key along its lane (a click without moving just picks it and goes to its time)
  function startKeyDrag(e, track, t0, d) {
    if (e.button !== 0) return;
    e.preventDefault(); e.stopPropagation();
    sel = { track, t: t0 };
    const lane = d.parentElement.getBoundingClientRect();
    let moved = false, to = t0;
    d.setPointerCapture(e.pointerId);
    const move = (ev) => {
      const f = Math.max(0, Math.min(1, (ev.clientX - lane.left) / lane.width));
      to = Math.round(f * anim.length * anim.fps) / anim.fps;
      if (Math.abs(ev.clientX - e.clientX) > 3) moved = true;
      if (moved) d.style.setProperty('--k', String(to / anim.length));
    };
    const up = () => {
      d.removeEventListener('pointermove', move); d.removeEventListener('pointerup', up); d.removeEventListener('pointercancel', up);
      if (moved && Math.abs(to - t0) > 1e-6) { sel = { track, t: Math.round(to * 1000) / 1000 }; commit(moveKey(anim, track, t0, to), t('app.tl.moved.key', { time: fmt(to) })); }
      else setTime(t0);
      focusSel();
    };
    d.addEventListener('pointermove', move); d.addEventListener('pointerup', up); d.addEventListener('pointercancel', up);
  }
  // a click or drag on a lane's empty part moves the playhead
  rows.addEventListener('pointerdown', (e) => {
    const lane = e.target.closest('.mc-tl-lane');
    if (!lane || e.target.closest('[data-tl-key]') || e.button !== 0) return;
    const r = lane.getBoundingClientRect();
    const at = (ev) => setTime(Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width)) * anim.length);
    at(e);
    lane.setPointerCapture(e.pointerId);
    const move = (ev) => at(ev);
    const up = () => { lane.removeEventListener('pointermove', move); lane.removeEventListener('pointerup', up); };
    lane.addEventListener('pointermove', move); lane.addEventListener('pointerup', up);
  });
  scrub.addEventListener('input', () => { stop(); setTime(Number(scrub.value)); });

  // ---- playing ----
  function play() {
    if (playing) return;
    if (!keyTimes(anim).length) { print(t('app.tl.nokeys')); return; }
    if (time >= anim.length - 1e-6) setTime(0);
    let last = performance.now();
    playBtn.setAttribute('aria-pressed', 'true');
    playBtn.querySelector('i').className = 'bi bi-pause-fill';
    playBtn.querySelector('span').textContent = t('app.tl.pause');
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
  }

  // ---- actions ----
  function keyCamera() {
    stop();
    commit(setCameraKey(anim, time, cam.toJSON()), t('app.tl.keyed.cam', { time: fmt(time) }));
    sel = { track: 'camera', t: Math.round(time * 1000) / 1000 }; markCurrent();
  }
  function keySelected() {
    stop();
    const list = o.selected();
    if (!list.length) { print(t('app.tl.keysel.none')); return; }
    let next = anim;
    for (const s of list) {
      const p = model.placementAt(s.path);
      if (!p) continue;
      next = setObjectKey(next, s.path, s.name, time, p.inst.m);
      applied.set(pathKey(s.path), p.inst.m.slice());
      warned.delete(pathKey(s.path));
    }
    commit(next, t('app.tl.keyed.sel', { n: list.length, time: fmt(time) }));
  }
  function deleteKeys() {
    stop();
    if (sel) { const s = sel; sel = null; commit(removeKey(anim, s.track, s.t), t('app.tl.deleted')); return; }
    let next = anim;
    const near = (ks) => ks.filter((k) => Math.abs(k.t - time) < 0.5 / anim.fps).map((k) => k.t);
    for (const k of near(anim.camera)) next = removeKey(next, 'camera', k);
    for (let i = next.objects.length - 1; i >= 0; i--) for (const k of near(next.objects[i].keys)) next = removeKey(next, i, k);
    if (next !== anim) commit(next, t('app.tl.deleted'));
  }
  function fromScenes() {
    stop();
    if (model.scenes.length < 2) { print(t('app.tl.scenes.few')); return false; }
    const { keys, length } = scenesToKeys(model.scenes);
    // the scenes' length, or longer if a moving object's keys go on after it
    const lastObj = Math.max(0, ...anim.objects.flatMap((x) => x.keys.map((k) => k.t)));
    const next = { ...anim, camera: keys, length: Math.max(length, lastObj), objects: anim.objects };
    commit(next, t('app.tl.scenes.done', { n: model.scenes.length, s: fmt(length) }));
    setTime(0);
    return true;
  }
  playBtn.addEventListener('click', () => (playing ? stop() : play()));
  prevBtn.addEventListener('click', () => { stop(); const k = nextKey(anim, time, -1); setTime(k ?? 0); });
  nextBtn.addEventListener('click', () => { stop(); const k = nextKey(anim, time, 1); setTime(k ?? anim.length); });
  camBtn.addEventListener('click', keyCamera);
  objBtn.addEventListener('click', keySelected);
  autoBtn.addEventListener('click', () => { autoKey = !autoKey; autoBtn.setAttribute('aria-pressed', String(autoKey)); seen.clear(); print(t(autoKey ? 'app.tl.auto.on' : 'app.tl.auto.off')); });
  easeSel.addEventListener('change', () => { if (sel) commit(setEase(anim, sel.track, sel.t, easeSel.value)); });
  delBtn.addEventListener('click', deleteKeys);
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
  // keys typed in the panel stay in the panel (the view's keys would start tools)
  box.addEventListener('keydown', (e) => { if (e.key !== 'Escape' && e.key !== 'Tab') e.stopPropagation(); });

  // ---- open / close ----
  function open() {
    if (isOpen) return;
    isOpen = true; box.hidden = false;
    o.root.classList.add('has-timeline');
    refresh(); setTime(time, { camera: anim.camera.length > 0 });
    o.onToggle?.(true);
    view.resize?.();
  }
  function close() {
    if (!isOpen) return;
    stop();
    // moving placements back at their start pose
    const poses = posesAt(anim, 0).filter((p) => model.placementAt(p.path));
    if (poses.length) { model.setPoses(poses); view.invalidate(); }
    isOpen = false; box.hidden = true;
    o.root.classList.remove('has-timeline');
    o.onToggle?.(false);
    view.resize?.();
  }

  return {
    open, close, toggle: () => (isOpen ? close() : open()),
    get isOpen() { return isOpen; },
    get anim() { return anim; },
    set anim(a) { anim = a || emptyAnim(); refresh(); },
    get time() { return time; },
    get autoKey() { return autoKey; },
    setTime, play, stop, keyCamera, keySelected, fromScenes, undo, redo, deleteKeys,
    has: () => keyTimes(anim).length > 0,
    toJSON: () => (keyTimes(anim).length ? anim : null),
    /** A file's animation (untrusted: checked). */
    load(json) {
      stop();
      anim = cleanAnim(json) || emptyAnim();
      past = []; future = []; sel = null; applied.clear(); warned.clear(); time = 0;
      refresh();
      if (isOpen) setTime(0);
    },
    reset() { this.load(null); },
    dispose() { clearInterval(watcher); stop(); },
  };
}
