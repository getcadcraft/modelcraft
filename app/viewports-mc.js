/* SPDX-License-Identifier: Apache-2.0 */
/**
 * viewports-mc.js — several views of the model at once (0.9 RH.1, 2026-11-09: a first-time visitor asked for "the top, right, front,
 * perspective view" as an option; the Rhino layout turns it on). Map: docs/apps/app-workspace.md § Rhino.
 *
 * Four panes in a 2 × 2 grid: Top and Perspective over Front and Right. ONE of them is active and is the app's real view: the usual two
 * canvases (the 3-D one and the overlay with the pointer) are moved over it, so picking, tools, snapping, the view cube and every key work
 * exactly as in a single view — nothing in the tools knows. The other three show the model from their own camera in plain canvases drawn by the
 * same renderer (View3D.renderPaneTo, called from View3D.draw before the active pane): no axes, guides or selection there; a click makes a pane
 * the active one. Each pane keeps its own camera; Top, Front and Right start parallel and fitted to the model.
 *
 *   createViewports({ stage, gl, over, view, cam, bbox, t, onCamera })
 *     .set('four' | 'single')   the layout's way in and out: leaving gives back the perspective camera that was there before
 *     .toggle()                 the Maximize command: four ↔ the active view alone (the active pane's camera stays)
 *     .activate(i)              0 Top · 1 Perspective · 2 Front · 3 Right
 *     .layout / .active / .names
 *   onCamera() runs after the active camera was swapped (the app updates its Perspective toggle).
 */
import { Camera } from './camera.js';

export const PANES = ['top', 'persp', 'front', 'right'];
const GAP = 4;

export function createViewports({ stage, gl, over, view, cam, bbox, t = (k) => k, onCamera = () => {} }) {
  const name = (k) => t('ui.vp.' + k);
  let layout = 'single', active = 1, home = null;   // home: the camera the single view had when 'four' began
  const saved = new Array(4).fill(null);   // each pane's camera JSON (the active pane's lives in `cam`)
  let panes = [];   // [{ i, box, canvas, ctx, label }] for the inactive ones; the active pane has only a frame
  let frame = null, labels = [], ro = null, stageObs = null;

  const fitted = (k) => {
    const c = new Camera(); c.setSize(cam.w, cam.h);
    c.persp = false; c.standard(k, bbox() || { min: [-5, -5, 0], max: [5, 5, 3] });
    c.persp = false;
    return c.toJSON();
  };
  const withPersp = (j, persp) => ({ ...j, persp });

  /** The drawing area inside the stage: a layout reserves space for its tool strip, tabs and bars (--ws-sl, --ws-st + --ws-vt …); no layout = all of it. */
  function area() {
    const cs = getComputedStyle(stage), px = (n) => parseFloat(cs.getPropertyValue(n)) || 0;
    const l = px('--ws-sl'), r = px('--ws-sr'), tp = px('--ws-st') + px('--ws-vt'), b = px('--ws-sb') + px('--ws-vb');
    return { x: l, y: tp, w: Math.max(1, (stage.clientWidth || 1) - l - r), h: Math.max(1, (stage.clientHeight || 1) - tp - b) };
  }
  function rects() {
    const A = area(), w = Math.max(1, Math.floor((A.w - GAP) / 2)), h = Math.max(1, Math.floor((A.h - GAP) / 2));
    return PANES.map((_, i) => ({ x: A.x + (i % 2) * (w + GAP), y: A.y + Math.floor(i / 2) * (h + GAP), w, h }));
  }
  // !important: a layout pins the canvases with !important too (.ws-stage > .ws-fill)
  const place = (n, r) => { n.style.setProperty('inset', 'auto', 'important'); for (const [k, v] of [['left', r.x], ['top', r.y], ['width', r.w], ['height', r.h]]) n.style.setProperty(k, v + 'px', 'important'); };   // the shorthand first: it resets left and top

  function layoutAll() {
    if (layout !== 'four') return;
    const R = rects();
    place(gl, R[active]); place(over, R[active]);
    for (const p of panes) place(p.box, R[p.i]);
    place(frame, R[active]);
    labels.forEach((l, i) => { l.style.left = R[i].x + 8 + 'px'; l.style.top = R[i].y + 6 + 'px'; });
  }

  function build() {
    teardown();
    frame = document.createElement('div'); frame.className = 'mc-pane-frame'; stage.append(frame);
    for (let i = 0; i < 4; i++) {
      const l = document.createElement('div'); l.className = 'mc-pane-label'; l.textContent = name(PANES[i]); l.dataset.pane = PANES[i]; stage.append(l); labels.push(l);
    }
    panes = [];
    for (let i = 0; i < 4; i++) {
      const box = document.createElement('div'); box.className = 'mc-pane'; box.dataset.pane = PANES[i]; box.setAttribute('role', 'button'); box.tabIndex = 0;
      box.setAttribute('aria-label', t('ui.vp.activate', { view: name(PANES[i]) }));
      const canvas = document.createElement('canvas'); box.append(canvas);
      box.addEventListener('pointerdown', (e) => { e.preventDefault(); activate(i); });
      box.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(i); } });
      stage.append(box);
      panes.push({ i, box, canvas, ctx: canvas.getContext('2d') });
    }
    syncActive();
  }
  function teardown() {
    for (const p of panes) p.box.remove();
    for (const l of labels) l.remove();
    frame?.remove(); frame = null; panes = []; labels = [];
  }
  function syncActive() {
    for (const p of panes) p.box.hidden = p.i === active;
    labels.forEach((l, i) => l.classList.toggle('is-active', i === active));
    layoutAll();
  }

  function activate(i) {
    if (layout !== 'four' || i === active || i < 0 || i > 3) return;
    saved[active] = cam.toJSON();
    active = i;
    cam.set(saved[i]);
    onCamera();
    syncActive();
    view.resize(); view.invalidate();
  }

  function set(next) {
    if (next === layout) return;
    if (next === 'four') {
      home = cam.toJSON();
      saved[1] = home;
      for (const i of [0, 2, 3]) saved[i] = fitted(PANES[i]);
      active = 1; layout = 'four';
      stage.classList.add('mc-four');
      build();
      ro = new ResizeObserver(layoutAll); ro.observe(stage); stageObs = new MutationObserver(layoutAll); stageObs.observe(stage, { attributes: true, attributeFilter: ['style', 'class'] });
      view.panes = { drawOthers };
    } else {
      // leaving the layout: the perspective camera that was there before comes back
      if (active !== 1 && home) { cam.set(home); onCamera(); }
      end();
    }
    view.resize(); view.invalidate();
  }
  function end() {
    layout = 'single'; active = 1;
    ro?.disconnect(); ro = null; stageObs?.disconnect(); stageObs = null; view.panes = null;
    teardown();
    stage.classList.remove('mc-four');
    for (const n of [gl, over]) for (const k of ['left', 'top', 'width', 'height', 'right', 'bottom', 'inset']) n.style.removeProperty(k);
  }
  /** Maximize: four views ↔ the active view alone (its camera stays). */
  function toggle() {
    if (layout === 'four') { end(); onCamera(); view.resize(); view.invalidate(); return 'single'; }
    set('four'); return 'four';
  }

  /** Zoom extents in a four-view window: the other views refit to the model too (the active one is the caller's). */
  function fitOthers() {
    if (layout !== 'four') return;
    const bb = bbox() || { min: [-5, -5, 0], max: [5, 5, 3] };
    for (let i = 0; i < 4; i++) {
      if (i === active) continue;
      if (i === 1) { const c = new Camera(); c.setSize(cam.w, cam.h); c.set(saved[1]); c.fit(bb); saved[1] = c.toJSON(); } else saved[i] = fitted(PANES[i]);
    }
    view.invalidate();
  }

  function drawOthers() {
    if (layout !== 'four') return;
    for (const p of panes) {
      if (p.i === active || !saved[p.i]) continue;
      view.renderPaneTo(saved[p.i], p.ctx);
    }
  }

  return { set, toggle, activate, drawOthers, fitOthers, get layout() { return layout; }, get active() { return active; }, names: PANES, camerasOf: () => saved.map((j, i) => (i === active ? cam.toJSON() : j)) };
}
