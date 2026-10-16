/* SPDX-License-Identifier: Apache-2.0 */
/**
 * modelcraft.js — the ModelCraft page: wires ui.inc to the model (model.js), the tools (tools.js),
 * the camera (camera.js) and the three.js view (view3d.js). Files open and save on this computer
 * (io.js does the formats); nothing is uploaded.
 *
 * Mouse: the active tool gets the left button; middle-drag orbits, Shift + middle-drag or
 * right-drag pans, the wheel zooms at the cursor. Touch: one finger uses the tool, two fingers
 * pan and pinch-zoom, three orbit (settings.touch2 swaps them), hold still then drag = orbit. Keys: tool letters (L R C N P M Q S E T D O H Z, Space), numbers and units go
 * to the value box (Enter applies), arrows lock red/green/blue while drawing (orbit otherwise,
 * Shift pans), Esc, Delete, G make component / Shift+G make group, Ctrl+Z/Y/S/O/A, Page Up/Down for scenes, Shift+Z extents.
 * Edit group (Undo, Redo, Copy, Paste, More ▾ with cut, paste in place, duplicate, delete, select all/none, key style) and a
 * status-bar key-style select. Clipboard (both styles): Ctrl+C / Ctrl+X / Ctrl+V (the copy follows the cursor) / Ctrl+Shift+V (in place) / Ctrl+D
 * (duplicate and move). The clipboard is kept in memory and in localStorage "modelcraft.clipboard" (another tab can paste).
 *
 * Settings › ModelCraft (settings.inc; localStorage "modelcraft.settings"):
 *   keys     'sketchup' (above) | 'blender': W select, L line, B rectangle, C circle, N polygon, E push/pull, T tape, D dimension;
 *            G / R / S move / rotate / scale the selection at once from the cursor (X/Y/Z lock an axis, click or
 *            Enter puts it down, Esc or right-click cancels, typed values work), Shift+D duplicate, X/Delete
 *            delete, A select all, Alt+A none, Tab opens/closes the selected group, Ctrl+G group,
 *            Ctrl+Shift+G component, numpad 1/3/7 (Ctrl: opposite) views, 5 perspective, . frame the selection,
 *            Home extents; Ctrl + middle-drag zooms; Alt + drag orbits, Alt+Shift + drag pans (no middle button).
 *   scroll   'auto' | 'mouse' | 'trackpad': a trackpad's two-finger swipe orbits (Shift pans); a pinch (ctrlKey
 *            wheel) always zooms. 'auto' treats sideways or fractional scrolling as a trackpad.
 *   snap     tools.snapping (also the status bar's Snap button; Shift+Tab in Blender style)
 *   touch2   'pan' (default: two fingers pan + pinch, three orbit) | 'orbit' (two fingers orbit + pinch, three pan)
 *   collide  tools.collide (also the Collide button): Move and Push/pull stop where solids touch (collide.js)
 *   corner   'cube' (default; the view cube top right, viewcube.js + viewcube-camera.js) | 'axes' (X/Y/Z triad bottom left) | 'none'
 * `window.modelcraft` = {model, cam, tools, view, host, ui, settings, clip()} for tests and the console.
 */
import { Model, connected, eraseSel, reverseFaces, solidInfo, faceArea, cleanScene, curveInfo, setCurveRadius, PALETTE, paintFaces, paintInstance, isColor, isMaterialPaint, setMaterialColors, setImageColors, isImagePaint, flipSel, hideSel, isolateSel, unhideAll, hiddenCount, softenEdges, intersectFaces, solidProblems, fixSolid, faceNormal, cleanStoreys } from './model.js';
import { Camera, VIEWS, lerpCam } from './camera.js';
import { sceneOf, warmScene, angleLayout, formatDeg } from './infer.js';
import { Tools, TOOL_NAMES, TOOL_KEYS } from './tools.js';
import { View3D } from './view3d.js';
import { pngName } from './viewimage.js';
import { formatLength, formatArea, formatVolume, parseLength, localeUnits } from './units.js';
import { exportGLB, exportOBJ, exportMTL, exportSTL, exportIFC, exportDAE, exportDXF, toDwgModel, importOBJ, importGLTF, importDXF, importDWG, importDAE } from './io.js';
import { dynamicSummary } from './dwg-dynamic.js';   // 0.5 DB.11 (a byte-identical copy of BimCraft's)
import { sunPosition } from './sun.js';
import { ident, dist, add, sub, mul, dot, cross, norm } from './vec.js';
import { el } from './ui-util.js';
import { mountViewCube, mountAxisIcon } from './viewcube.js';
import * as i18n from "./i18n.js";
import { cameraCubeOptions } from './viewcube-camera.js';
import { getHost } from "./host.js";
import { installAgents } from './agents.js';
import { Autosave } from "./app-autosave.js";
import { handoffParam, takeHandoff } from './handoff.js';
import { MATERIALS, CATEGORIES, material as libMat, planarUV } from './render/materials.js';   // 0.5 RC.7: the material library
import { libMaterial, swatchPixels, imageTexture, imageMaterial as imgMaterial } from './render/three-mats.js';
import { action3d, wheelFactor } from './input-mouse.js';   // 0.5 IP.3: the menu style's buttons and wheel (input-modelcraft.js)
const { t } = i18n;
/** The display unit in words, lower case ("feet and inches", "millimeters"). */
const unitWords = (u) => t('app.unit.' + String(u).replace('-', '_'));
let colorLabel = (c) => c || '';   // a colour's name in the Colors panel's words (set once the palette is built)
/** t() text with element fills (<kbd>…): lx('key', {k: node}) → [text, node, text…] for el() / append(). */
const lx = (key, nodes) => {
  const names = Object.keys(nodes), mark = {};
  names.forEach((k, i) => { mark[k] = '\uE000' + i + '\uE001'; });
  return t(key, mark).split(/\uE000(\d+)\uE001/).map((x, i) => (i % 2 ? nodes[names[+x]] : x)).filter((x) => x !== '');
};

const root = document.querySelector('[data-modelcraft]');
if (root) init(root);

function init(root) {
  const $ = (s) => root.querySelector(s);
  const ui = {
    gl: $('[data-gl]'), over: $('[data-over]'), stage: $('[data-stage]'), hint: $('[data-hint]'), drop: $('[data-drop]'),
    tip: $('[data-tip]'), msg: $('[data-msg]'), vcb: $('[data-vcb]'), vcbLabel: $('[data-vcb-label]'), vcbForm: $('[data-vcb-form]'),
    units: $('[data-units]'), info: $('[data-info]'), infoH: $('[data-info-h]'), tree: $('[data-tree]'), treeEmpty: $('[data-tree-empty]'), treeSearch: $('[data-tree-search]'), treeTop: $('[data-tree-top]'),
    crumbs: $('[data-crumbs]'), closeCtx: $('[data-close-ctx]'), comps: $('[data-comps]'), compsEmpty: $('[data-comps-empty]'), tags: $('[data-tags]'), tagAdd: $('[data-tag-add]'),
    scenes: $('[data-scenes]'), scenesEmpty: $('[data-scenes-empty]'), sceneNav: $('[data-scene-nav]'), scenebar: $('[data-scenebar]'),
    fileOpen: $('[data-file-open]'), fileImport: $('[data-file-import]'),
    mode: $('[data-style-mode]'), edges: $('[data-style-edges]'), shadows: $('[data-style-shadows]'), sun: $('[data-sun]'),
    sunMonth: $('[data-sun-month]'), sunDay: $('[data-sun-day]'), sunHour: $('[data-sun-hour]'), sunHourOut: $('[data-sun-hour-out]'),
    sunLat: $('[data-sun-lat]'), sunLon: $('[data-sun-lon]'), sunTz: $('[data-sun-tz]'), sunInfo: $('[data-sun-info]'),
  };

  const model = new Model();
  const cam = new Camera();
  let fileName = t('app.file.untitled');
  let renderSettings = null;   // 0.5 RC.11: the Render dialog's settings (render/looks.js cleanSettings shape), kept in the file's view
  let presentation = false;   // 0.4 M28: only the model on screen (no axes, guides, marks or selection)
  let sceneIndex = -1;
  let playing = null;
  // a new model's unit comes from the browser's locale (feet and inches in the US, Liberia and
  // Myanmar, millimeters elsewhere); the picker changes it for this model and the file keeps it
  const newUnits = () => localeUnits((navigator.languages && navigator.languages[0]) || navigator.language || '');
  model.units = newUnits();

  // ---- host for the tools ----
  let sc = null;
  // snapping's trees for what is on screen and the model's undo copy, made in idle time after a change (a big model's first
  // hover and first undo step then have them)
  let warmJob = 0;
  const idle = window.requestIdleCallback ? (f) => requestIdleCallback(f, { timeout: 2000 }) : (f) => setTimeout(() => f({ timeRemaining: () => 8 }), 50);
  function warmPicking() {
    if (warmJob) return;
    warmJob = idle(function step(dl) {
      warmJob = 0;
      const more = () => dl.timeRemaining() > 2;
      if (!warmScene(model, more) || !model.warmSnap(more)) warmJob = idle(step);
    });
  }
  const host = {
    model, cam, path: [], sel: [], overlayState: null, mouse: null,
    get units() { return model.units; },
    scene() { if (!sc || sc.version !== model.version) sc = sceneOf(model); return sc; },
    setSel(s) { host.sel = s.filter(Boolean); scheduleInfo(); view.invalidate(); },
    toolSet(name) {
      for (const b of root.querySelectorAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === name));
      ui.over.classList.toggle('is-select', name === 'select' || name === 'erase');
      ui.over.classList.toggle('is-orbit', name === 'orbit' || name === 'pan');
    },
    overlay(o) { host.overlayState = o; view.invalidate(); },
    tip(t) { ui.tip.textContent = t || ''; },
    vcb(label, text) { ui.vcbLabel.textContent = label || t('ui.vcb'); if (document.activeElement !== ui.vcb) ui.vcb.value = text || ''; },
    print,
    changed() { scheduleInfo(); view.invalidate(); warmPicking(); },
    openContext(path) {
      if (!model.context(path)) return;
      host.path = path; host.sel = []; tools.set(tools.name === 'place' ? 'select' : tools.name);
      print(t('app.ctx.editing', { name: model.context(path).def.name }));
      scheduleInfo(); view.invalidate();
    },
    closeContext() {
      if (!host.path.length) return;
      const leaving = host.path[host.path.length - 1];
      host.path = host.path.slice(0, -1);
      host.sel = [{ t: 'i', id: leaving }];
      scheduleInfo(); view.invalidate();
    },
  };
  const view = new View3D(ui.gl, ui.over, {
    model, cam,
    ui: () => ({ path: host.path, sel: host.sel, overlay: host.overlayState, mouse: host.mouse, present: presentation }),
  });
  const tools = new Tools(host);
  // ---- corner indicator (Settings › ModelCraft › Corner indicator): view cube | axis icon | none ----
  const cubeOpts = cameraCubeOptions(cam, { invalidate: () => view.invalidate(), home: () => stdView('iso') });
  const viewCube = mountViewCube(ui.stage, { ...cubeOpts, i18n: { t: i18n.t, has: i18n.has } });
  const axisIcon = mountAxisIcon(ui.stage, { getView: cubeOpts.getView, i18n: { t: i18n.t, has: i18n.has } });
  { const draw0 = view.draw.bind(view); view.draw = () => { draw0(); viewCube.update(); axisIcon.update(); }; }
  window.modelcraft = { model, cam, tools, view, host, ui, viewCube, axisIcon, cubeView: cubeOpts.getView, presenting: () => presentation,
    afterHistory: () => afterHistory(), print: (m) => print(m) };   // Studio Live (0.5 LV.22, live.js): redraw after others' edits, its messages
  // ---- AI assistants and scripts (0.4 part 2 X.7, session agents; agents.js on host.js's control channel): off until Settings › Assistants ----
  installAgents({ model, changed: () => host.changed(), canvas: () => view.renderer?.domElement || null, draw: () => view.draw() });

  // ---- settings (Settings › ModelCraft; per viewer conveniences only) ----
  const SET_DEFAULTS = { keys: 'sketchup', scroll: 'auto', touch2: 'pan', snap: true, collide: true, corner: 'cube' };
  const settings = (() => {
    const out = { ...SET_DEFAULTS };
    try {
      const v = JSON.parse(localStorage.getItem('modelcraft.settings') || '{}');
      if (v.keys === 'blender' || v.keys === 'sketchup') out.keys = v.keys;
      if (['auto', 'mouse', 'trackpad'].includes(v.scroll)) out.scroll = v.scroll;
      if (['pan', 'orbit'].includes(v.touch2)) out.touch2 = v.touch2;
      if (typeof v.snap === 'boolean') out.snap = v.snap;
      if (typeof v.collide === 'boolean') out.collide = v.collide;
      if (['cube', 'axes', 'none'].includes(v.corner)) out.corner = v.corner;
    } catch { /* private window: defaults */ }
    return out;
  })();
  const persist = () => { try { localStorage.setItem('modelcraft.settings', JSON.stringify(settings)); } catch { /* fine */ } };
  window.modelcraft.settings = settings;
  const settingsDlg = document.querySelector('[data-app-settings]');
  const blender = () => settings.keys === 'blender';
  function applySettings() {
    tools.snapping = settings.snap;
    tools.collide = settings.collide;
    viewCube.setVisible(settings.corner === 'cube');
    axisIcon.setVisible(settings.corner === 'axes');
    for (const b of root.querySelectorAll('[data-mc-toggle]')) b.setAttribute('aria-pressed', String(!!settings[b.dataset.mcToggle]));
    const ks = root.querySelector('[data-mc-keys]');
    if (ks) ks.value = settings.keys;
    for (const b of root.querySelectorAll('[data-act^="keys-"]')) b.setAttribute('aria-checked', String(b.dataset.act === 'keys-' + settings.keys));
    if (settingsDlg) {
      settingsDlg.querySelectorAll('input[name="mcKeys"]').forEach((r) => { r.checked = r.value === settings.keys; });
      settingsDlg.querySelectorAll('input[name="mcScroll"]').forEach((r) => { r.checked = r.value === settings.scroll; });
      settingsDlg.querySelectorAll('input[name="mcTouch2"]').forEach((r) => { r.checked = r.value === settings.touch2; });
      const sn = settingsDlg.querySelector('input[name="mcSnap"]'), co = settingsDlg.querySelector('input[name="mcCollide"]');
      if (sn) sn.checked = settings.snap;
      if (co) co.checked = settings.collide;
      settingsDlg.querySelectorAll('input[name="mcCorner"]').forEach((r) => { r.checked = r.value === settings.corner; });
      const kh = settingsDlg.querySelector('[data-mc-keys-hint]');
      if (kh) kh.textContent = blender()
        ? t('app.keys.hint.blender')
        : t('app.keys.hint.sketchup');
    }
    keyTexts();
  }
  function setSetting(k, v, say) {
    settings[k] = v;
    persist();
    applySettings();
    if (say) print(say);
  }
  if (settingsDlg) {
    settingsDlg.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name === 'mcKeys') setKeys(t.value);
      else if (t.name === 'mcScroll') setSetting('scroll', t.value);
      else if (t.name === 'mcTouch2') setSetting('touch2', t.value);
      else if (t.name === 'mcSnap') setSetting('snap', t.checked);
      else if (t.name === 'mcCollide') setSetting('collide', t.checked);
      else if (t.name === 'mcCorner') setSetting('corner', t.value);
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { Object.assign(settings, SET_DEFAULTS); persist(); applySettings();
      // the push-pull keys again: a Modeler style goes back to ModelCraft's own (IP.3: the style and the keys stay one)
      const p = window.ccInput?.current();
      if (p && (p.builtin ? p.id : p.base) === 'modeler') window.ccInput.setStyle('modelcraft');
    });
  }
  root.querySelectorAll('[data-mc-toggle]').forEach((b) => b.addEventListener('click', () => toggle(b.dataset.mcToggle)));
  function setKeys(v) {
    setSetting('keys', v, v === 'blender' ? t('app.keys.set.blender') : t('app.keys.set.sketchup'));
    // 0.5 IP.3: the menu style is the one source of truth — picking a key set here picks the matching style
    const ci = window.ccInput, p = ci?.current();
    if (!p) return;
    const base = p.builtin ? p.id : p.base;
    if (v === 'blender' && base !== 'modeler') ci.setStyle('modeler');
    else if (v === 'sketchup' && base === 'modeler') ci.setStyle('modelcraft');
  }
  /**
   * 0.5 IP.3 (input-modelcraft.js): the style in use decides how ModelCraft reads keys — Modeler (and styles built on it)
   * the modeler way ('blender'), every other style the push-pull way. The first time menu styles run, someone who had chosen
   * the modeler keys gets the Modeler style (once; localStorage modelcraft.keys.carried).
   */
  window.modelcraft.syncKeyStyle = () => {
    const ci = window.ccInput, p = ci?.current();
    if (!p) return;
    let carried = true;
    try { carried = !!localStorage.getItem('modelcraft.keys.carried'); if (!carried) localStorage.setItem('modelcraft.keys.carried', '1'); } catch { /* private window */ }
    if (!carried && settings.keys === 'blender' && p.id === 'modelcraft') { ci.setStyle('modeler'); return; }
    const base = p.builtin ? p.id : p.base;
    const want = base === 'modeler' ? 'blender' : 'sketchup';
    if (settings.keys !== want) setSetting('keys', want);
  };
  window.addEventListener('cc-input-ready', () => window.modelcraft.syncKeyStyle());
  queueMicrotask(() => window.modelcraft.syncKeyStyle());
  // the menu styles' messages go to the status line; while a tool is busy its letters stay its own (X/Y/Z lock an axis …)
  window.ccInputHooks = { status: (text) => print(text || ''), busy: () => !!tools.tool.busy };
  root.querySelector('[data-mc-keys]')?.addEventListener('change', (e) => { setKeys(e.target.value); ui.over.focus({ preventScroll: true }); });
  function toggle(k) {
    setSetting(k, !settings[k], k === 'snap'
      ? (settings.snap ? t('app.snap.off') : t('app.snap.on'))
      : (settings.collide ? t('app.collide.off') : t('app.collide.on')));
    if (tools.tool.lastEv) tools.tool.hover?.(tools.tool.lastEv);
    ui.over.focus({ preventScroll: true });
  }

  // tooltips and hints follow the key style
  // tool titles in Blender style (app.btitle.<tool>); the SketchUp ones are ui.inc's
  const BLENDER_TITLES = Object.fromEntries(['select', 'line', 'rect', 'circle', 'polygon', 'push', 'move', 'rotate', 'scale', 'erase', 'tape', 'dim', 'orbit', 'pan', 'zoom', 'extents', 'component', 'group'].map((k) => [k, t('app.btitle.' + k)]));

  const kb = (t) => el('kbd', {}, t);
  const HINTS = {
    sketchup: () => [
      el('li', {}, ...lx('app.hint.su.rect', { key: kb('R'), eg: kb('4m,3m'), enter: kb('Enter') })),
      el('li', {}, ...lx('app.hint.su.push', { key: kb('P') })),
      el('li', {}, ...lx('app.hint.su.tools', { l: kb('L'), c: kb('C'), m: kb('M'), ctrl: kb('Ctrl'), t: kb('T') })),
      el('li', {}, ...lx('app.hint.su.group', { comp: kb('G'), shift: kb('Shift'), g: kb('G'), ctrl: kb('Ctrl'), c: kb('C'), v: kb('V') })),
      el('li', {}, ...lx('app.hint.su.camera', { shift: kb('Shift'), ctrl: kb('Ctrl'), comma: kb(',') })),
      el('li', {}, t('ui.hint.local')),
    ],
    blender: () => [
      el('li', {}, ...lx('app.hint.su.rect', { key: kb('B'), eg: kb('4m,3m'), enter: kb('Enter') })),
      el('li', {}, ...lx('app.hint.bl.push', { key: kb('E') })),
      el('li', {}, ...lx('app.hint.bl.grab', { g: kb('G'), r: kb('R'), s: kb('S'), x: kb('X'), y: kb('Y'), z: kb('Z'), enter: kb('Enter'), esc: kb('Esc') })),
      el('li', {}, ...lx('app.hint.bl.keys', { shift: kb('Shift'), d: kb('D'), x: kb('X'), a: kb('A'), tab: kb('Tab'), ctrl: kb('Ctrl'), g: kb('G') })),
      el('li', {}, ...lx('app.hint.bl.camera', { shift: kb('Shift'), ctrl: kb('Ctrl'), alt: kb('Alt'), n1: kb('1'), n3: kb('3'), n7: kb('7') })),
      el('li', {}, t('ui.hint.local')),
    ],
  };
  const NOTES = {
    sketchup: { tree: () => lx('ui.outliner.empty', { comp: kb('G'), group: el('span', {}, kb('Shift'), '+', kb('G')) }), comps: () => lx('ui.comps.empty', { key: kb('G') }) },
    blender: { tree: () => lx('app.outliner.empty.bl', { group: el('span', {}, kb('Ctrl'), '+', kb('G')), comp: el('span', {}, kb('Ctrl'), '+', kb('Shift'), '+', kb('G')) }), comps: () => lx('ui.comps.empty', { key: el('span', {}, kb('Ctrl'), '+', kb('Shift'), '+', kb('G')) }) },
  };
  function keyTexts() {
    const style = blender() ? 'blender' : 'sketchup';
    for (const b of root.querySelectorAll('[data-tool], [data-act]')) {
      const k = b.dataset.tool || b.dataset.act;
      if (b.dataset.titleSketchup === undefined) b.dataset.titleSketchup = b.title;
      b.title = style === 'blender' && BLENDER_TITLES[k] ? BLENDER_TITLES[k] : b.dataset.titleSketchup;
    }
    const KBD = { sketchup: { duplicate: 'Ctrl+D', delete: 'Delete', all: 'Ctrl+A', none: 'Esc', hide: '', isolate: '', unhide: '' }, blender: { duplicate: 'Shift+D', delete: 'X', all: 'A', none: 'Alt+A', hide: 'H', isolate: 'Shift+H', unhide: 'Alt+H' } };
    for (const k of root.querySelectorAll('[data-keys-kbd]')) { k.textContent = KBD[style][k.dataset.keysKbd] || ''; k.hidden = !k.textContent; }
    const hl = root.querySelector('[data-keys-hint]');
    if (hl) hl.replaceChildren(...HINTS[style]());
    keyTexts.notes ||= [...root.querySelectorAll('[data-keys-note]')];   // kept: the outliner may move to the panels window
    for (const n of keyTexts.notes) n.replaceChildren(...NOTES[style][n.dataset.keysNote]());
  }

  // ---- messages ----
  function print(m) { ui.msg.textContent = m || ''; }
  /**
   * 0.5 DB.11 (dwg-dynamic.js, BimCraft's, copied): a DWG's dynamic blocks come in as their file shows them (the other
   * visibility states' objects are invisible there and left out); the import status names each, the states shown and the
   * others it has.
   */
  function dynamicNote(dwg) {
    if (!dwg) return '';
    const list = dynamicSummary(dwg).filter((d) => d.states.length);
    if (!list.length) return '';
    const one = (d) => t('app.import.dyn.one', { name: d.name, shown: d.shown.filter(([k]) => k).map(([k, n]) => k + ' ×' + n).join(', ') || '—', states: d.states.join(', ') });
    return ' ' + t('app.import.dyn', { list: list.slice(0, 6).map(one).join('; ') + (list.length > 6 ? '; …' : '') });
  }

  // ---- tools: buttons and pressed state ----
  const setTool = (name, arg) => {
    tools.set(name, arg);
    for (const b of root.querySelectorAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === name));
    ui.over.classList.toggle('is-select', name === 'select' || name === 'erase');
    ui.over.classList.toggle('is-orbit', name === 'orbit' || name === 'pan');
    if (name !== 'select') hideHint();
  };
  root.querySelectorAll('[data-tool]').forEach((b) => b.addEventListener('click', () => { setTool(b.dataset.tool); ui.over.focus({ preventScroll: true }); }));
  setTool('select');

  // ---- Flip (0.4 M15): mirror the selection through the middle of its box, square to red, green or blue ----
  function flip(axis, copy) {
    const sel = host.sel.filter((x) => x.t === 'e' || x.t === 'f' || x.t === 'i');
    if (!sel.length) { print(t('app.flip.none')); return; }
    tools.escape();
    const ctx = model.context(host.path), c = tools.selCenter();
    const local = (p) => { const q = ctx.inv; return [q[0] * p[0] + q[4] * p[1] + q[8] * p[2] + q[12], q[1] * p[0] + q[5] * p[1] + q[9] * p[2] + q[13], q[2] * p[0] + q[6] * p[1] + q[10] * p[2] + q[14]]; };
    const n = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] }[axis];   // the open group's own red, green, blue
    let at = c;
    if (copy) {
      // a flipped copy lands beside the original: mirrored across the far side of the selection's box
      const bb = tools.selBox(), a = tools.axes()[axis];
      let far = 0;
      for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) far = Math.max(far, (x - c[0]) * a[0] + (y - c[1]) * a[1] + (z - c[2]) * a[2]);
      at = [c[0] + a[0] * far, c[1] + a[1] * far, c[2] + a[2] * far];
    }
    const out = model.change(copy ? t('app.undo.flipcopy') : t('app.undo.flip'), (m) => flipSel(m.context(host.path).def, sel, local(at), n, copy), [model.context(host.path).def.id]);
    host.setSel(out);
    print(t(copy ? 'app.flip.copy.' + axis : 'app.flip.done.' + axis));
  }

  // ---- Colors (0.4 M8): the Paint tool's colour; with a selection, a click on a swatch paints it ----
  const palette = root.querySelector('[data-palette]');
  const swatches = [];
  const markPaint = (c) => { for (const sw of swatches) sw.el.setAttribute('aria-checked', String((sw.c || null) === (c || null) || (sw.custom && isColor(c) && !PALETTE.some(([, h]) => h === c)))); };
  host.paintChanged = (c) => { markPaint(c); if (isColor(c) && !PALETTE.some(([, h]) => h === c)) { customIn.value = c; customSw.style.background = c; } };
  const choosePaint = (c, name) => {
    tools.paintColor = c;
    markPaint(c);
    const sel = host.sel.filter((x) => x.t === 'f' || x.t === 'i');
    if (sel.length && tools.name !== 'paint') {
      const def = model.context(host.path).def;
      model.change(t('app.undo.paint'), () => { paintFaces(def, sel.filter((x) => x.t === 'f').map((x) => x.id), c); for (const x of sel) if (x.t === 'i') paintInstance(def, x.id, c); }, [def.id]);
      print(t('app.paint.sel', { color: name }));
      scheduleInfo(); view.invalidate();
    } else { setTool('paint'); print(t('app.paint.start', { color: name })); }
  };
  const swatch = (c, name, cls = '') => {
    const b = el('button', { type: 'button', role: 'radio', className: 'mc-swatch ' + cls, title: name, 'aria-label': name, 'aria-checked': 'false', dataset: { paint: c || 'default' } });
    if (c) b.style.background = c;
    b.addEventListener('click', () => choosePaint(c, name));
    swatches.push({ el: b, c });
    return b;
  };
  const colorName = (name) => t('app.color.' + name.toLowerCase().replace(/\s+/g, '_'));
  colorLabel = (c) => { if (isMaterialPaint(c)) return libMat(c.slice(4)) ? t('render.mat.' + c.slice(4)) : c.slice(4); if (isImagePaint(c)) { const im = model.images.get(c.slice(4, c.indexOf('|'))); return t('app.color.image', { name: im?.name || '?' }); } const p = c && PALETTE.find(([, h]) => h === c); return !c ? t('app.color.default') : p ? colorName(p[0]) : c; };
  palette.append(swatch(null, t('app.color.default'), 'is-default'), ...PALETTE.map(([name, c]) => swatch(c, colorName(name))));
  const customIn = el('input', { type: 'color', value: '#5a8f6a', 'aria-label': t('app.color.other'), dataset: { paintCustom: '' } });
  const customSw = el('span', { className: 'mc-swatch is-custom', role: 'radio', 'aria-checked': 'false', title: t('app.color.other') }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), customIn);
  swatches.push({ el: customSw, c: undefined, custom: true });
  customIn.addEventListener('change', () => { const c = customIn.value.toLowerCase(); if (!isColor(c)) return; customSw.style.background = c; choosePaint(c, c); });
  palette.append(customSw);
  // ---- Materials (0.5 RC.7, session render): library materials paint like colours ('mat:<id>' in the same field). The
  // views draw their textures (view.textures); exports, CadCraft's 3D tab and 3D printing get the material's colour. ----
  setMaterialColors((id) => libMat(id)?.color || null);
  host.paintName = (c) => colorLabel(c);   // the Paint tool's messages name a material, not its 'mat:' id
  const texMats = new Map();
  // imported images (0.5 RC.11 (b)): one texture per image, drawn once the browser has decoded it
  const imageMaterial = (id) => imgMaterial(imageTexture(model.images.get(id), () => view.invalidate()), { lambert: true, front: true, clipping: view.clip });
  setImageColors((id) => model.images.get(id)?.avg || null);
  view.textures = {
    material: (key) => {
      if (texMats.has(key)) return texMats.get(key);
      let m = null;
      if (key.startsWith('mat:') && libMat(key.slice(4))) m = libMaterial(key.slice(4), { lambert: true, front: true, clipping: view.clip });
      else if (key.startsWith('img:') && model.images.has(key.slice(4))) m = imageMaterial(key.slice(4));
      texMats.set(key, m);
      return m;
    },
    uv: planarUV,
  };
  const matlib = root.querySelector('[data-matlib]');
  const pending = [];
  for (const cat of CATEGORIES) {
    const list = MATERIALS.filter((m) => m.cat === cat);
    if (!list.length) continue;
    matlib.append(el('p', { className: 'mc-matcat' }, t('render.matcat.' + cat)),
      el('div', { className: 'mc-palette mc-matrow' }, list.map((m) => { const b = swatch('mat:' + m.id, t('render.mat.' + m.id), 'is-mat'); b.style.background = m.color; pending.push([b, m.id]); return b; })));
  }
  // the textures' swatches are drawn when the page is idle, a few at a time (each is a small texture drawn by code)
  const drawSwatches = (deadline) => {
    while (pending.length && (!deadline || deadline.timeRemaining() > 4)) {
      const [b, id] = pending.shift(), px = swatchPixels(id, 40);
      if (!px || !libMat(id).tex) continue;
      const c = document.createElement('canvas'); c.width = px.w; c.height = px.h;
      c.getContext('2d').putImageData(new ImageData(px.data, px.w, px.h), 0, 0);
      b.style.backgroundImage = 'url(' + c.toDataURL() + ')';
    }
    if (pending.length) (window.requestIdleCallback || ((f) => setTimeout(f, 50)))(drawSwatches);
  };
  (window.requestIdleCallback || ((f) => setTimeout(f, 200)))(drawSwatches);
  markPaint(tools.paintColor);

  // ---- Lights (0.5 RC.11 (d), session render): lamps for rendered pictures. The Light tool (tools.js) places one; the list
  // and the editor change it (one undo step each); a click on a lamp's mark in the view selects it. World coordinates. ----
  const lightsUl = root.querySelector('[data-lights]'), lightEdit = root.querySelector('[data-light-edit]'), lightsSec = root.querySelector('[data-lights-sec]');
  let selLight = null, lightsSeen = '';
  const lightName = (id, L) => L.name || t('app.light.name.' + L.kind, { n: [...model.lights].filter(([, x]) => x.kind === L.kind).findIndex(([k]) => k === id) + 1 });
  root.querySelectorAll('[data-light-add]').forEach((b) => b.addEventListener('click', () => { setTool('light', { kind: b.dataset.lightAdd }); }));
  host.lightPlaced = (id) => { selLight = id; renderLights(true); print(t('app.light.added', { name: lightName(id, model.lights.get(id)) })); };
  const changeLight = (patch) => {
    if (selLight === null || !model.lights.has(selLight)) return;
    try { model.change(t('app.undo.light'), (m) => m.setLight(selLight, patch), []); host.changed(); renderLights(true); } catch (e) { print(e.message); }
  };
  function renderLights(force = false) {
    const key = model.version + '|' + selLight + '|' + model.units;
    if (!force && key === lightsSeen) return;
    lightsSeen = key;
    if (selLight !== null && !model.lights.has(selLight)) selLight = null;
    lightsUl.replaceChildren(...[...model.lights].map(([id, L]) => {
      const on = el('input', { type: 'checkbox', checked: L.on, 'aria-label': t('app.light.on'), dataset: { lightOn: String(id) } });
      on.addEventListener('change', () => { selLight = id; changeLight({ on: on.checked }); });
      const name = el('button', { type: 'button', className: 'mc-linkbtn', 'aria-pressed': String(id === selLight), dataset: { lightPick: String(id) } }, lightName(id, L));
      name.addEventListener('click', () => { selLight = id === selLight ? null : id; renderLights(true); view.invalidate(); });
      return el('li', { className: id === selLight ? 'is-sel' : '' }, on, ' ', name);
    }));
    lightEdit.hidden = selLight === null;
    if (selLight === null) { lightEdit.replaceChildren(); return; }
    const L = model.lights.get(selLight), u = model.units;
    const row = (label, input) => [el('label', { for: input.id }, label), input];
    const len = (id, meters, apply) => {
      const inp = el('input', { type: 'text', id, className: 'mc-input', value: formatLength(meters, u), spellcheck: false, autocomplete: 'off' });
      inp.addEventListener('change', () => { const v = parseLength(inp.value, u); if (v === null || !Number.isFinite(v)) { print(t('app.len.bad')); inp.value = formatLength(meters, u); return; } apply(v); });
      return inp;
    };
    const lum = el('input', { type: 'number', id: 'mc-light-lm', className: 'mc-input', min: '1', max: '200000', step: '50', value: String(L.lumens), dataset: { lightLumens: '' } });
    lum.addEventListener('change', () => changeLight({ lumens: Number(lum.value) }));
    const col = el('input', { type: 'color', id: 'mc-light-col', value: L.color, dataset: { lightColor: '' } });
    col.addEventListener('change', () => changeLight({ color: col.value }));
    const presets = el('span', { className: 'mc-light-presets' }, [['warm', '#ffd2a1'], ['neutral', '#fff1dc'], ['cool', '#eef3ff']].map(([k, c]) => {
      const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('app.light.' + k) }, t('app.light.' + k));
      b.addEventListener('click', () => changeLight({ color: c }));
      return b;
    }));
    const rows = [...row(t('app.light.lumens'), lum), ...row(t('app.light.color'), col), el('span'), presets];
    if (L.kind === 'spot') {
      const ang = el('input', { type: 'number', id: 'mc-light-ang', className: 'mc-input', min: '5', max: '170', step: '5', value: String(L.angle), dataset: { lightAngle: '' } });
      ang.addEventListener('change', () => changeLight({ angle: Number(ang.value) }));
      rows.push(...row(t('app.light.angle'), ang));
    }
    if (L.kind === 'area') rows.push(...row(t('app.light.width'), len('mc-light-w', L.size[0], (v) => changeLight({ size: [v, L.size[1]] }))), ...row(t('app.light.depth'), len('mc-light-d', L.size[1], (v) => changeLight({ size: [L.size[0], v] }))));
    else rows.push(...row(t('app.light.bulb'), len('mc-light-b', L.size[0], (v) => changeLight({ size: [v, v] }))));
    rows.push(...row(t('app.light.x'), len('mc-light-x', L.p[0], (v) => changeLight({ p: [v, L.p[1], L.p[2]] }))),
      ...row(t('app.light.y'), len('mc-light-y', L.p[1], (v) => changeLight({ p: [L.p[0], v, L.p[2]] }))),
      ...row(t('app.light.height'), len('mc-light-z', L.p[2], (v) => changeLight({ p: [L.p[0], L.p[1], v] }))));
    const del = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { lightDelete: '' } }, t('app.light.delete'));
    del.addEventListener('click', () => {
      const id = selLight, nm = lightName(id, model.lights.get(id));
      model.change(t('app.undo.light.delete'), (m) => m.deleteLight(id), []);
      selLight = null; host.changed(); renderLights(true); print(t('app.light.deleted', { name: nm }));
    });
    lightEdit.replaceChildren(...rows, el('span'), del);
  }
  // the lamps' marks: a disc in the lamp's colour (a spot with its aim, a panel as its outline); dashed when off
  view.drawExtra = (g, project, c) => {
    for (const [id, L] of model.lights) {
      const s = project(L.p);
      if (!s) continue;
      const sel = id === selLight;
      g.setLineDash(L.on ? [] : [3, 3]); g.lineWidth = sel ? 2.5 : 1.5; g.strokeStyle = sel ? c.sel : c.ink; g.fillStyle = L.color;
      if (L.kind === 'area') {
        const ax = Math.abs(L.dir[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0], e1 = norm(cross(L.dir, ax)), e2 = cross(L.dir, e1), w = L.size[0] / 2, h = L.size[1] / 2;
        const q = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => project(add(L.p, add(mul(e1, a * w), mul(e2, b * h)))));
        if (q.every(Boolean)) { g.beginPath(); q.forEach((v, i) => (i ? g.lineTo(v[0], v[1]) : g.moveTo(v[0], v[1]))); g.closePath(); g.globalAlpha = 0.45; g.fill(); g.globalAlpha = 1; g.stroke(); }
      }
      if (L.kind === 'spot') { const a = project(add(L.p, mul(L.dir, 0.6))); if (a) { g.beginPath(); g.moveTo(s[0], s[1]); g.lineTo(a[0], a[1]); g.stroke(); } }
      g.beginPath(); g.arc(s[0], s[1], 6, 0, Math.PI * 2); g.fill(); g.stroke();
      for (let k = 0; k < 8; k++) { const an = (k * Math.PI) / 4; g.beginPath(); g.moveTo(s[0] + Math.cos(an) * 8, s[1] + Math.sin(an) * 8); g.lineTo(s[0] + Math.cos(an) * 11, s[1] + Math.sin(an) * 11); g.stroke(); }
    }
    g.setLineDash([]);
  };
  // a click on a lamp's mark (Select) picks the lamp before the tools see it
  ui.over.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || tools.name !== 'select' || !model.lights.size) return;
    const r = ui.over.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, vp = cam.viewProj();
    let best = null, bd = 11;
    for (const [id, L] of model.lights) { const s2 = cam.project(L.p, vp); if (s2) { const d = Math.hypot(s2[0] - x, s2[1] - y); if (d < bd) { bd = d; best = id; } } }
    if (best === null) return;
    e.stopImmediatePropagation(); e.preventDefault();
    selLight = best; renderLights(true); view.invalidate();
    lightsSec.scrollIntoView({ block: 'nearest' });
    print(t('app.light.picked', { name: lightName(best, model.lights.get(best)) }));
  }, true);

  function hideHint() { ui.hint.hidden = true; }

  // ---- pointer input ----
  const pos = (e) => { const r = ui.over.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const mods = (e) => ({ shift: e.shiftKey, ctrl: e.ctrlKey || e.metaKey, alt: e.altKey, button: e.button, time: e.timeStamp });
  let camDrag = null;
  const touches = new Map();
  let pinch = null;
  // S.8 touch: one finger is the tool — a quick tap is a click, a drag is a press–drag; holding still for half a second
  // finishes what the tool is doing (as Enter), or, with nothing going on, turns that finger into orbit until it lifts.
  // Two fingers pan and pinch-zoom, three orbit (Settings › ModelCraft › Two fingers swaps them: settings.touch2).
  // While a drawing finger is down, a loupe above it shows what is under it (the snaps a finger hides).
  let tap = null;            // the first finger, held back until it moves, lifts or is held
  const LONG_MS = 500, MOVE_PX = 8;
  const loupe = (() => {
    const c = document.createElement('canvas');
    c.className = 'mc-loupe';
    c.hidden = true;
    c.setAttribute('aria-hidden', 'true');
    ui.stage.append(c);
    const R = 64, ZOOM = 2;   // screen px: the loupe's size is set here, its place follows the finger
    c.style.width = c.style.height = R * 2 + 'px';
    let at = null, raf = 0;
    const paint = () => {
      raf = 0;
      if (!at) return;
      const dpr = window.devicePixelRatio || 1, W = Math.round(R * 2 * dpr);
      if (c.width !== W) { c.width = W; c.height = W; }
      // above the finger, or below it near the top edge
      const top = at.y - R * 2 - 36 >= 0 ? at.y - R * 2 - 36 : at.y + 36;
      c.style.left = Math.max(0, Math.min(ui.stage.clientWidth - R * 2, at.x - R)) + 'px';
      c.style.top = top + 'px';
      const g = c.getContext('2d');
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, W, W);
      g.save();
      g.beginPath(); g.arc(W / 2, W / 2, W / 2, 0, Math.PI * 2); g.clip();
      g.fillStyle = getComputedStyle(ui.stage).backgroundColor;
      g.fillRect(0, 0, W, W);
      // the same spot of the 3D canvas and of the overlay (snaps, guides), both in device pixels
      const s = (R / ZOOM) * dpr, sx = at.x * dpr - s, sy = at.y * dpr - s;
      for (const src of [ui.gl, ui.over]) { try { g.drawImage(src, sx, sy, s * 2, s * 2, 0, 0, W, W); } catch { /* not drawn yet */ } }
      g.strokeStyle = getComputedStyle(root).getPropertyValue('--action') || '#06c';
      g.lineWidth = dpr;
      g.beginPath(); g.moveTo(W / 2 - 8 * dpr, W / 2); g.lineTo(W / 2 + 8 * dpr, W / 2); g.moveTo(W / 2, W / 2 - 8 * dpr); g.lineTo(W / 2, W / 2 + 8 * dpr); g.stroke();
      g.restore();
      c.hidden = false;
    };
    return {
      // after the view's own frame (tools.move asked for it first), so the loupe copies what was just drawn
      show(p) { if (tools.name === 'select' || tools.name === 'orbit' || tools.name === 'pan') { this.hide(); return; } at = p; if (!raf) raf = requestAnimationFrame(() => requestAnimationFrame(paint)); },
      hide() { at = null; c.hidden = true; },
    };
  })();
  const markTouch = () => {
    if (tools.touch) return;
    tools.touch = true;
    root.classList.add('is-touch');
    const bar = root.querySelector('[data-touchbar]');
    if (bar) bar.hidden = false;
    // the value field opens the number keyboard (Warren, 2026-10-15: lengths are numbers in the status bar's units);
    // "abc" switches to letters for unit marks (5'6", 2m) — remembered on this device
    const kbd = root.querySelector('[data-vcb-kbd]');
    let letters = false;
    try { letters = localStorage.getItem('mc-vcb-kbd') === 'letters'; } catch (e) { /* private mode */ }
    const setKbd = () => { ui.vcb.inputMode = letters ? 'text' : 'decimal'; if (kbd) kbd.setAttribute('aria-pressed', String(letters)); };
    setKbd();
    if (kbd) {
      kbd.hidden = false;
      kbd.addEventListener('pointerdown', (e) => e.preventDefault());   // keep the field's focus (and its keyboard) open
      kbd.addEventListener('click', () => {
        letters = !letters; setKbd();
        try { localStorage.setItem('mc-vcb-kbd', letters ? 'letters' : 'numbers'); } catch (e) { /* private mode */ }
        if (document.activeElement === ui.vcb) { ui.vcb.blur(); ui.vcb.focus(); }   // the keyboard changes on the next focus
      });
    }
  };
  if (matchMedia?.('(pointer: coarse)').matches) markTouch();   // i18n-ignore: a media query
  const longPress = () => {
    if (!tap || tap.started) return;
    tap.done = true;
    hideHint();
    loupe.hide();
    navigator.vibrate?.(15);
    if (tools.tool.busy) { if (!tools.tool.finish?.()) tools.escape(); print(t('app.touch.done')); view.invalidate(); }
    else { tap.orbit = { x: tap.x, y: tap.y }; print(t('app.touch.orbit')); }
  };
  ui.over.addEventListener('contextmenu', (e) => e.preventDefault());
  let penBack = null;   // the tool to go back to when the pen's tip comes down after its eraser end
  const penEraser = (e) => e.pointerType === 'pen' && (e.button === 5 || (e.buttons & 32) !== 0);
  ui.over.addEventListener('pointerdown', (e) => {
    ui.over.focus({ preventScroll: true });
    closeMenus();
    const p = pos(e);
    if (e.pointerType === 'touch') {
      markTouch();
      touches.set(e.pointerId, p);
      if (touches.size >= 2) {
        // more fingers: forget the first finger's tap (and anything it began), then orbit / zoom / pan
        if (tap) { clearTimeout(tap.timer); if (tap.started) tools.escape(); tap = null; }
        loupe.hide();
        const pts = [...touches.values()];
        const c = { x: pts.reduce((a, q) => a + q.x, 0) / pts.length, y: pts.reduce((a, q) => a + q.y, 0) / pts.length };
        if (pinch?.raf) cancelAnimationFrame(pinch.raf);
        pinch = { n: pts.length, c, d: pts.length === 2 ? Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) : 0, raf: 0 };
        return;
      }
      ui.over.setPointerCapture(e.pointerId);
      host.mouse = p;
      tools.move({ ...p });
      tap = { id: e.pointerId, x: p.x, y: p.y, started: false, done: false, orbit: null, timer: setTimeout(longPress, LONG_MS) };
      loupe.show(p);
      return;
    }
    ui.over.setPointerCapture(e.pointerId);
    // a pen's eraser end (Pointer Events: button 5, buttons 32) is the Eraser while it touches; the tip brings back the tool
    // you had (Warren, 2026-10-15: "its eraser end doesn't switch to the ModelCraft Eraser tool")
    if (e.pointerType === 'pen') {
      if (penEraser(e)) {
        if (tools.name !== 'erase') { if (tools.tool.busy) tools.escape(); penBack = tools.name; setTool('erase'); }
        hideHint();
        host.mouse = p;
        tools.down({ ...p, ...mods(e) });
        return;
      }
      if (penBack && e.button === 0) { const back = penBack; penBack = null; if (tools.name === 'erase') setTool(back); }
    }
    // Blender style: right-click cancels what a tool is doing; Alt + left-drag orbits (Alt+Shift pans) for
    // trackpads and mice without a middle button; Ctrl + middle-drag zooms
    if (blender() && e.button === 2 && tools.tool.busy) { tools.escape(); e.preventDefault(); return; }
    const altCam = blender() && e.button === 0 && e.altKey && e.pointerType !== 'touch';
    // 0.5 IP.3: what the middle and right buttons do comes from the menu style (null = ModelCraft's own); Shift swaps orbit and pan
    const styled = (e.button === 1 || e.button === 2) && !altCam ? action3d(e.button) : null;
    if (styled === 'none') { e.preventDefault(); return; }
    if (styled) {
      camDrag = { x: p.x, y: p.y, x0: p.x, y0: p.y, pan: styled === 'pan' ? !e.shiftKey : styled === 'orbit' && e.shiftKey, zoom: styled === 'zoom' || (blender() && e.button === 1 && (e.ctrlKey || e.metaKey)) };
      e.preventDefault();
      return;
    }
    if (e.button === 1 || e.button === 2 || altCam) {
      camDrag = { x: p.x, y: p.y, x0: p.x, y0: p.y, pan: e.button === 2 || e.shiftKey, zoom: blender() && e.button === 1 && (e.ctrlKey || e.metaKey) };
      e.preventDefault();
      return;
    }
    if (e.button !== 0) return;
    hideHint();
    host.mouse = p;
    tools.down({ ...p, ...mods(e) });
  });
  ui.over.addEventListener('pointermove', (e) => {
    const p = pos(e);
    if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
      touches.set(e.pointerId, p);
      if (pinch && touches.size >= 2) {
        // fingers report one at a time: take them together once per frame, so a steady two-finger drag is a pure orbit
        if (!pinch.raf) pinch.raf = requestAnimationFrame(() => {
          if (!pinch) return;
          pinch.raf = 0;
          const pts = [...touches.values()];
          if (pts.length < 2) return;
          const c = { x: pts.reduce((a, q) => a + q.x, 0) / pts.length, y: pts.reduce((a, q) => a + q.y, 0) / pts.length };
          const d = pts.length === 2 ? Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) : 0;
          if (pts.length !== pinch.n) { pinch.n = pts.length; pinch.c = c; pinch.d = d; return; }
          // two fingers pan (or orbit, settings.touch2) and pinch; three do the other
          const move = (pts.length >= 3) === (settings.touch2 === 'orbit') ? 'pan' : 'orbit';
          if (c.x !== pinch.c.x || c.y !== pinch.c.y) cam[move](c.x - pinch.c.x, c.y - pinch.c.y);
          if (pts.length === 2 && d > 10 && pinch.d > 10 && Math.abs(d - pinch.d) > 0.5) cam.zoomAt(pinch.d / d, c.x, c.y);
          pinch.c = c; pinch.d = d;
          view.invalidate();
        });
        return;
      }
      if (pinch) return;
      if (tap && e.pointerId === tap.id && tap.orbit) {
        // held still on nothing, then moved: one-finger orbit
        cam.orbit(p.x - tap.orbit.x, p.y - tap.orbit.y);
        tap.orbit = { x: p.x, y: p.y };
        view.invalidate();
        return;
      }
      if (tap && e.pointerId === tap.id && !tap.done) {
        host.mouse = p;
        if (!tap.started) {
          if (Math.hypot(p.x - tap.x, p.y - tap.y) < MOVE_PX) { tools.move({ ...p }); loupe.show(p); return; }
          // it moves: a press–drag from where the finger went down
          clearTimeout(tap.timer); tap.started = true;
          hideHint();
          tools.down({ x: tap.x, y: tap.y });
        }
        tools.move({ ...p });
        loupe.show(p);
        return;
      }
      if (tap?.done) return;
    }
    host.mouse = p;
    if (camDrag) {
      const dx = p.x - camDrag.x, dy = p.y - camDrag.y;
      camDrag.x = p.x; camDrag.y = p.y;
      if (camDrag.zoom) cam.zoomAt(Math.exp(dy * 0.01), camDrag.x0, camDrag.y0);
      else if (camDrag.pan) cam.pan(dx, dy); else cam.orbit(dx, dy);
      view.invalidate();
      return;
    }
    tools.move({ ...p, ...mods(e) });
  });
  const endPointer = (e) => {
    const p = pos(e);
    if (e.pointerType === 'touch') {
      touches.delete(e.pointerId);
      loupe.hide();
      if (pinch) { if (!touches.size) pinch = null; return; }
      if (tap && e.pointerId === tap.id) {
        const t = tap;
        clearTimeout(t.timer); tap = null;
        if (t.done) return;   // a long press already did its job
        if (!t.started) { hideHint(); tools.down({ x: t.x, y: t.y }); tools.up({ x: t.x, y: t.y }); return; }   // a tap = a click
        tools.up({ ...p });
        return;
      }
      return;
    }
    if (camDrag) { camDrag = null; return; }
    if (e.button !== 0 && !(e.pointerType === 'pen' && e.button === 5) && e.type === 'pointerup') return;
    tools.up({ ...p, ...mods(e) });
  };
  ui.over.addEventListener('pointerup', endPointer);
  ui.over.addEventListener('pointercancel', (e) => { touches.delete(e.pointerId); pinch = null; loupe.hide(); camDrag = null; if (tap && tap.id === e.pointerId) { clearTimeout(tap.timer); tap = null; } });
  // the touch bar (S.8): what the keyboard's Enter, Esc and Ctrl+Z do
  root.querySelector('[data-touchbar]')?.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-touch]');
    if (!b) return;
    const k = b.dataset.touch;
    if (k === 'done') { if (!tools.tool.finish?.()) tools.escape(); }
    else if (k === 'cancel') { if (!tools.escape()) { if (tools.name !== 'select') setTool('select'); else host.setSel([]); } }
    else if (k === 'undo') act('undo');
    view.invalidate();
  });
  ui.over.addEventListener('pointerleave', () => { if (!camDrag) { host.mouse = null; view.invalidate(); } });
  // Trackpads: a two-finger swipe orbits (Shift pans) in trackpad mode — or in "auto" when the scrolling looks like a
  // trackpad's (sideways, or fine-grained); a pinch arrives as a wheel event with ctrlKey and always zooms.
  let padUntil = 0;
  const looksLikePad = (e) => {
    if (settings.scroll === 'trackpad') return true;
    if (settings.scroll === 'mouse' || e.deltaMode !== 0) return false;
    if (e.deltaX !== 0 || (e.deltaY % 1 !== 0 && Math.abs(e.deltaY) < 50)) padUntil = e.timeStamp + 400;
    return e.timeStamp < padUntil;
  };
  ui.over.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (!e.ctrlKey && looksLikePad(e)) {
      const k = e.deltaMode === 1 ? 16 : 1;
      if (e.shiftKey) cam.pan(-e.deltaX * k, -e.deltaY * k);
      else cam.orbit(-e.deltaX * k * 0.6, -e.deltaY * k * 0.6);
      view.invalidate();
      return;
    }
    const p = pos(e);
    const r = cam.ray(p.x, p.y);
    // zoom toward what is under the cursor (a face), else the target plane
    let pivot = null;
    const s = host.scene();
    const best = s.hit(r)?.t ?? Infinity;
    if (best < Infinity) pivot = [r.o[0] + r.d[0] * best, r.o[1] + r.d[1] * best, r.o[2] + r.d[2] * best];
    // a pinch sends small deltas: zoom it faster than a wheel notch
    const k = Math.exp((e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY) * (e.ctrlKey ? 0.01 : 0.0015 * wheelFactor()));   // IP.3: the style's wheel (a pinch stays as it is)
    cam.zoomAt(k, p.x, p.y, pivot);
    view.invalidate();
  }, { passive: false });

  // ---- keyboard ----
  const VCB_START = /^[0-9.,\-'"[<*/]$/;
  const typing = (t) => t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
  const busyTransform = () => tools.tool.busy && ['move', 'rotate', 'scale', 'push'].includes(tools.name);
  const cursorEv = () => ({ ...(host.mouse || { x: view.w / 2, y: view.h / 2 }), shift: false, ctrl: false, alt: false });
  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return;
    if (document.querySelector('dialog[open]')) return;   // the app's dialogs and the shell's (Settings: Esc must reach it, IP.3)
    if (e.key === 'Escape' && recording) { recording.stop = true; e.preventDefault(); return; }   // stop an animation being recorded (M23)
    const tgt = e.target;
    if (tgt === ui.vcb) {
      if (e.key === 'Escape') { ui.vcb.value = ''; ui.vcb.blur(); ui.over.focus({ preventScroll: true }); e.preventDefault(); }
      return;
    }
    if (typing(tgt) && tgt !== ui.over) return;
    const ctrl = e.ctrlKey || e.metaKey;
    const k = e.key, l = k.length === 1 ? k.toLowerCase() : k;
    const B = blender();
    if (ctrl) {
      if (l === 'z' && !e.shiftKey) { e.preventDefault(); act('undo'); return; }
      if (l === 'y' || (l === 'z' && e.shiftKey)) { e.preventDefault(); act('redo'); return; }
      if (l === 's') { e.preventDefault(); act('save'); return; }
      if (l === 'o') { e.preventDefault(); act('open'); return; }
      if (l === 'a') { e.preventDefault(); selectAll(); return; }
      if (l === 'c') { e.preventDefault(); act('copy'); return; }
      if (l === 'x') { e.preventDefault(); act('cut'); return; }
      if (l === 'v') { e.preventDefault(); act(e.shiftKey ? 'paste-in-place' : 'paste'); return; }
      if (l === 'd') { e.preventDefault(); act('duplicate'); return; }
      if (B && l === 'g') { e.preventDefault(); act(e.shiftKey ? 'component' : 'group'); return; }
      if (B && e.code && e.code.startsWith('Numpad') && /^Numpad[137]$/.test(e.code)) { e.preventDefault(); stdView({ Numpad1: 'back', Numpad3: 'left', Numpad7: 'bottom' }[e.code]); return; }
      if (k === 'Control' || k === 'Meta') { if (tools.key('Control', e)) e.preventDefault(); }
      return;
    }
    if (B && e.altKey && l === 'a') { e.preventDefault(); host.setSel([]); return; }
    if (B && e.altKey && l === 'h') { e.preventDefault(); unhideEverything(); return; }   // Blender: Alt+H unhide all
    if (k === 'Alt') { if (tools.key('Alt', e)) e.preventDefault(); return; }
    if (e.shiftKey && l === 'p' && !e.altKey) { e.preventDefault(); setPresentation(!presentation); return; }   // presentation view (both key styles)
    if (k === 'Shift') { tools.key('Shift', e); return; }
    if (k === 'Escape') {
      e.preventDefault();
      stopPlay();
      if (tools.escape()) return;
      if (tools.name !== 'select') { setTool('select'); return; }
      if (host.sel.length) { host.setSel([]); return; }
      if (host.path.length) host.closeContext();
      return;
    }
    if (k.startsWith('Arrow')) {
      if (tools.tool.lockable && tools.tool.busy && tools.key(k, e)) {
        e.preventDefault();
        sayLock();
        return;
      }
      e.preventDefault();
      const s = 18;
      if (e.shiftKey) cam.pan(k === 'ArrowLeft' ? s : k === 'ArrowRight' ? -s : 0, k === 'ArrowUp' ? s : k === 'ArrowDown' ? -s : 0);
      else cam.orbit(k === 'ArrowLeft' ? -s : k === 'ArrowRight' ? s : 0, k === 'ArrowUp' ? -s : k === 'ArrowDown' ? s : 0);
      view.invalidate();
      return;
    }
    if (B) {
      // X/Y/Z lock an axis while something is moving, turning or being drawn (as the arrow keys do)
      if (tools.tool.busy && (l === 'x' || l === 'y' || l === 'z') && !e.shiftKey) {
        e.preventDefault();
        if (tools.tool.lockable && tools.key({ x: 'ArrowRight', y: 'ArrowLeft', z: 'ArrowUp' }[l], e)) sayLock();
        return;
      }
      if (k === 'Enter' && busyTransform()) { e.preventDefault(); finishTransform(); return; }
      if (e.code && /^Numpad[0-9]$|^NumpadDecimal$/.test(e.code) && !tools.tool.busy) {
        e.preventDefault();
        if (e.code === 'NumpadDecimal') frameSelection();
        else if (e.code === 'Numpad5') perspBtn.click();
        else if ({ Numpad1: 1, Numpad3: 1, Numpad7: 1 }[e.code]) stdView({ Numpad1: 'front', Numpad3: 'right', Numpad7: 'top' }[e.code]);
        return;
      }
      if (k === 'Tab') {
        e.preventDefault();
        if (e.shiftKey) { toggle('snap'); return; }
        const inst = host.sel.length === 1 && host.sel[0].t === 'i' ? host.sel[0] : null;
        if (inst) host.openContext([...host.path, inst.id]);
        else if (host.path.length) host.closeContext();
        else print(t('app.tab.none'));
        return;
      }
      if (k === 'Home') { e.preventDefault(); act('extents'); return; }
    }
    if (k === 'Backspace' && tools.tool.back?.()) { e.preventDefault(); return; }   // Curve: the last point back
    if (k === 'Delete' || k === 'Backspace') { e.preventDefault(); eraseSelection(); return; }
    if (k === 'PageDown') { e.preventDefault(); stepScene(1); return; }
    if (k === 'PageUp') { e.preventDefault(); stepScene(-1); return; }
    if (k === 'Enter') { if (tools.tool.busy) { e.preventDefault(); tools.tool.finish?.(); } return; }
    if (VCB_START.test(k)) {
      e.preventDefault();
      ui.vcb.value = k;
      ui.vcb.focus();
      return;
    }
    if (e.altKey) return;
    if (B) {
      if (l === 'd' && e.shiftKey) { e.preventDefault(); act('duplicate'); return; }
      if (l === 'c' && e.shiftKey) { e.preventDefault(); act('extents'); return; }
      if (l === 'h') { e.preventDefault(); if (e.shiftKey) isolateSelection(); else hideSelection(); return; }   // Blender: H hide, Shift+H hide the rest
      if (e.shiftKey) return;
      if (l === 'g') { e.preventDefault(); hideHint(); tools.grab(cursorEv()); syncTool(); return; }
      if (l === 'r') { e.preventDefault(); hideHint(); tools.turn(cursorEv()); syncTool(); return; }
      if (l === 's') { e.preventDefault(); hideHint(); tools.resize(cursorEv()); syncTool(); return; }
      if (l === 'x') { e.preventDefault(); eraseSelection(); return; }
      if (l === 'a') { e.preventDefault(); selectAll(); return; }
      const BK = { ' ': 'select', w: 'select', l: 'line', b: 'rect', c: 'circle', n: 'polygon', e: 'push', t: 'tape', d: 'dim' };
      if (BK[l]) { e.preventDefault(); setTool(BK[l]); }
      return;
    }
    if (l === 'z' && e.shiftKey) { e.preventDefault(); act('extents'); return; }
    if (l === 'g') { e.preventDefault(); act(e.shiftKey ? 'group' : 'component'); return; }   // as in SketchUp: G component, Shift+G group
    if (TOOL_KEYS[l] && !e.shiftKey) { e.preventDefault(); setTool(TOOL_KEYS[l]); }
  });
  function sayLock() {
    print(tools.lock ? t('app.lock.' + ({ 'axis-x': 'red', 'axis-y': 'green', 'axis-z': 'blue', parallel: 'edge' }[tools.lock.kind] || 'edge')) : t('app.lock.off'));
  }
  function finishTransform() {
    const tl = tools.tool;
    if (tools.name === 'move' && tl.p0) tl.finish();
    else if ((tools.name === 'rotate' || tools.name === 'scale') && tl.stage === 2) tl.finish();
    else if (tools.name === 'push' && tl.fid !== null) tl.finish();
    scheduleInfo();
  }
  /** The tool buttons show what tools.grab/turn/resize switched to. */
  function syncTool() {
    for (const b of root.querySelectorAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === tools.name));
    ui.over.classList.toggle('is-select', tools.name === 'select' || tools.name === 'erase');
    ui.over.classList.remove('is-orbit');
  }
  document.addEventListener('keyup', (e) => { if (e.key === 'Shift') tools.keyUp('Shift'); });

  ui.vcbForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = ui.vcb.value.trim();
    if (text) {
      try {
        if (tools.value(text)) { ui.vcb.value = ''; print(''); }
      } catch (err) { print(t('app.failed', { error: err.message })); }
    }
    ui.vcb.blur();
    ui.over.focus({ preventScroll: true });
    scheduleInfo();
  });

  // ---- actions ----
  root.querySelectorAll('[data-act]').forEach((b) => b.addEventListener('click', () => act(b.dataset.act)));
  async function act(name) {
    closeMenus();
    switch (name) {
      case 'new': if (await confirmDiscard()) newModel(); break;
      case 'open': if (await confirmDiscard()) { const [f] = await fileHost.openFile({ types: MODEL_TYPES }).catch((err) => { print(t('app.open.failed', { error: err.message })); return []; }); await openFromHost(f, { asked: true }); } break;
      case 'save': saveModel(); break;
      case 'import': { const [f] = await fileHost.openFile({ types: IMPORT_TYPES }).catch((err) => { print(t('app.open.failed', { error: err.message })); return []; }); if (f) await importFile(f); break; }
      case 'undo': tools.escape(); { const l = model.undo(); print(l ? t('app.undid', { what: l }) : t('app.undo.nothing')); } afterHistory(); break;
      case 'redo': tools.escape(); { const l = model.redo(); print(l ? t('app.redid', { what: l }) : t('app.redo.nothing')); } afterHistory(); break;
      case 'group': makeGroup('group'); break;
      case 'text3d': text3dDialog(); break;
      case 'storeys': closeMenus(); storeysDialog(); break;
      case 'component': makeGroup('component'); break;
      case 'explode': explodeSel(); break;
      case 'extents': zoomExtents(); break;
      case 'copy': copySelection(); break;
      case 'cut': if (copySelection()) { eraseSelection(); print(t('app.cut')); } break;
      case 'paste': startPaste(false); break;
      case 'paste-in-place': startPaste(true); break;
      case 'duplicate': duplicate(); break;
      case 'hide': hideSelection(); break;
      case 'isolate': isolateSelection(); break;
      case 'unhide-all': unhideEverything(); break;
      case 'flip-x': case 'flip-y': case 'flip-z': case 'flipcopy-x': case 'flipcopy-y': case 'flipcopy-z': flip(name.slice(-1), name.startsWith('flipcopy')); break;
      case 'delete': eraseSelection(); break;
      case 'select-all': selectAll(); break;
      case 'axes-place': closeMenus(); setTool('axes'); break;
      case 'terrain-contours': closeMenus(); terrainFromSelection(); break;
      case 'terrain-grid': closeMenus(); terrainGridDialog(); break;
      case 'sculpt': closeMenus(); setTool('sculpt'); break;
      case 'axes-face': axesToFace(); break;
      case 'axes-reset': closeMenus(); if (!model.axesM) { print(t('app.axes.already')); break; } model.change(t('m3d.undo.axes'), (m) => m.resetAxes(), []); print(t('app.axes.reset')); afterHistory(); break;
      case 'intersect-model': intersectSel('model'); break;
      case 'intersect-sel': intersectSel('selection'); break;
      case 'solid-union': solidTool('union'); break;
      case 'solid-subtract': solidTool('subtract'); break;
      case 'solid-intersect': solidTool('intersect'); break;
      case 'select-none': host.setSel([]); break;
      case 'keys-sketchup': setKeys('sketchup'); break;
      case 'keys-blender': setKeys('blender'); break;
      default: break;
    }
  }
  function afterHistory() {
    if (!model.context(host.path)) host.path = [];
    const def = model.context(host.path).def;
    host.sel = host.sel.filter((s) => (s.t === 'e' ? def.edges.has(s.id) : s.t === 'f' ? def.faces.has(s.id) : s.t === 'i' ? def.insts.has(s.id) : s.t === 'd' ? model.dims.has(s.id) : s.t === 's' ? model.sections.has(s.id) : model.guides.has(s.id)));
    sceneIndex = Math.min(sceneIndex, model.scenes.length - 1);
    if (typeof syncSectionMenu === 'function') syncSectionMenu();
    scheduleInfo(); view.invalidate();
  }
  function ctxDef() { return model.context(host.path).def; }
  // ---- Drawing axes (0.4 M20): align them to a selected face — blue out of it, red along its longest edge ----
  function axesToFace() {
    closeMenus();
    if (host.path.length) { print(t('app.axes.in_group')); return; }
    const s = host.sel.length === 1 && host.sel[0].t === 'f' ? host.sel[0] : null;
    const f = s && ctxDef().faces.get(s.id);
    if (!f) { print(t('app.axes.need_face')); return; }
    const def = ctxDef(), loop = f.loops[0].map((v) => def.verts.get(v));
    let best = 0;
    for (let i = 1; i < loop.length; i++) if (dist(loop[i], loop[(i + 1) % loop.length]) > dist(loop[best], loop[(best + 1) % loop.length])) best = i;
    const o = loop[best], x = sub(loop[(best + 1) % loop.length], o), n = faceNormal(def, f);
    model.change(t('m3d.undo.axes'), (m) => m.setAxes(o, x, cross(n, x)), []);
    print(t('app.axes.face'));
    afterHistory();
  }
  // ---- Intersect faces (0.4 M19): the lines where the selection cuts through faces, drawn in the open context ----
  function intersectSel(others) {
    closeMenus();
    const sel = host.sel.filter((s) => s.t === 'f' || s.t === 'i');
    if (!sel.length || (others === 'selection' && sel.length < 2 && !sel.some((s) => s.t === 'i'))) { print(t(others === 'model' ? 'app.intersect.none' : 'app.intersect.none_sel')); return; }
    tools.escape();
    const n = model.change(t(others === 'model' ? 'ui.editmenu.intersect_model' : 'ui.editmenu.intersect_sel'), (m) => intersectFaces(m, host.path, sel, others), [model.context(host.path).def.id]);
    if (!n) { print(t('app.intersect.nothing')); return; }   // nothing changed, so no undo step was made
    print(t('app.intersect.done', { n }));
    afterHistory();
  }
  // ---- Solid tools (0.4 M9): Union, Subtract, Intersect on closed groups and components (manifold-3d, loaded on first use) ----
  function solidTool(op) {
    closeMenus();
    const picked = host.sel.filter((s) => s.t === 'i').map((s) => s.id);
    if (op !== 'subtract') {
      if (picked.length < 2) { print(t('app.solid.need.two.sel', { op: t('ui.solids.' + op) })); return; }
      runSolid(op, picked, []);
      return;
    }
    // Subtract: the piece to take away, then the piece to cut (SketchUp's order)
    let cutter = null;
    host.setSel([]);
    setTool('pick', {
      hint: () => t(cutter === null ? 'app.solid.sub.hint1' : 'app.solid.sub.hint2'),
      picked: () => (cutter === null ? [] : [{ t: 'i', id: cutter }]),
      pick: (s) => {
        if (cutter === null) { cutter = s.id; return false; }
        if (s.id === cutter) return false;
        runSolid('subtract', [s.id], [cutter]);
        return true;
      },
    });
  }
  async function runSolid(op, keep, cut) {
    let M;
    try { print(t('app.solid.loading')); M = await solidsLib().then((L) => L.manifold().then((m) => ({ L, m }))); }
    catch { print(t('app.solid.noload')); return; }
    try {
      const r = M.L.solidOp(M.m, model, host.path, op, keep, cut);
      host.setSel([{ t: 'i', id: r.iid }]);
      print(t('app.solid.done.' + op, { volume: formatVolume(r.volume, model.units) }));
    } catch (err) { print(err.message); }
    afterHistory();
  }
  let solidsMod = null;
  const solidsLib = () => (solidsMod ??= import('./solids.js'));
  function selectAll() {
    const def = ctxDef();
    host.setSel([...[...def.faces].filter(([, f]) => !f.hidden).map(([id]) => ({ t: 'f', id })), ...[...def.edges].filter(([, e]) => !e.soft && !e.hidden).map(([id]) => ({ t: 'e', id })), ...[...def.insts].filter(([, i]) => !i.hidden).map(([id]) => ({ t: 'i', id }))]);
  }
  // ---- Hide, isolate, unhide all (0.4 M17): kept in the file; hidden things are not drawn, snapped to or picked ----
  function hideSelection() {
    const sel = host.sel.filter((x) => x.t === 'e' || x.t === 'f' || x.t === 'i');
    if (!sel.length) { print(t('app.hide.none')); return; }
    tools.escape();
    model.change(t('app.undo.hide'), (m) => hideSel(m.context(host.path).def, sel, true), [model.context(host.path).def.id]);
    host.setSel([]);
    print(t('app.hide.done', { n: sel.length }));
  }
  function isolateSelection() {
    const sel = host.sel.filter((x) => x.t === 'e' || x.t === 'f' || x.t === 'i');
    if (!sel.length) { print(t('app.isolate.none')); return; }
    tools.escape();
    const n = model.change(t('app.undo.isolate'), (m) => isolateSel(m.context(host.path).def, sel), [model.context(host.path).def.id]);
    print(t(host.path.length ? 'app.isolate.done.group' : 'app.isolate.done', { n }));
    scheduleInfo(); view.invalidate();
  }
  function unhideEverything() {
    if (!hiddenCount(model)) { print(t('app.unhide.none')); return; }
    const n = model.change(t('ui.editmenu.unhide_all'), (m) => unhideAll(m), model.holding(null));
    print(t('app.unhide.done', { n }));
    scheduleInfo(); view.invalidate();
  }
  function eraseSelection() {
    if (!host.sel.length) return;
    const sel = host.sel;
    model.change(t('app.undo.erase'), (m) => {
      const def = m.context(host.path).def;
      eraseSel(def, sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's'));
      for (const s of sel) if (s.t === 'g') m.guides.delete(s.id);
      for (const s of sel) if (s.t === 'd') m.dims.delete(s.id);
      for (const s of sel) if (s.t === 's') m.deleteSection(s.id);
      m.purge();
    }, [model.context(host.path).def.id]);
    host.setSel([]);
    view.invalidate();
  }
  function makeGroup(kind) {
    const sel = host.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's');
    if (!sel.length) { print(t('app.group.none')); return; }
    // a selected face brings its edges; a lone edge selection brings everything connected to it? No: exactly what is selected.
    const iid = model.change(kind === 'group' ? t('app.undo.make_group') : t('app.undo.make_component'), (m) => m.makeGroup(m.context(host.path).def, sel, kind), [model.context(host.path).def.id]);
    if (iid) {
      host.setSel([{ t: 'i', id: iid }]);
      const d = model.def(ctxDef().insts.get(iid).def);
      print(t(kind === 'group' ? 'app.group.done' : 'app.component.done', { name: d.name }));
    }
  }
  function explodeSel() {
    const insts = host.sel.filter((s) => s.t === 'i');
    if (!insts.length) { print(t('app.explode.none')); return; }
    const out = model.change(t('app.undo.explode'), (m) => {
      const def = m.context(host.path).def;
      const all = [];
      for (const s of insts) all.push(...m.explode(def, s.id));
      return all;
    }, [model.context(host.path).def.id]);
    host.setSel(out || []);
  }
  // ---- clipboard ----
  let clip = null;
  window.modelcraft.clip = () => clip || readClip();
  function readClip() {
    try { const c = JSON.parse(localStorage.getItem('modelcraft.clipboard') || 'null'); return c && c.format === 'modelcraft-clip' ? c : null; } catch { return null; }
  }
  function copySelection() {
    tools.escape();
    const sel = host.sel.filter((x) => x.t !== 'g' && x.t !== 'd' && x.t !== 's');
    if (!sel.length) { print(t('app.copy.none')); return false; }
    const c = model.copyClip(host.path, sel);
    if (!c) { print(t('app.copy.empty')); return false; }
    clip = c;
    try { localStorage.setItem('modelcraft.clipboard', JSON.stringify(c)); } catch { /* too big or private window: this tab still has it */ }
    print(t('app.copy.done', { n: sel.length }));
    return true;
  }
  function startPaste(inPlace) {
    tools.escape();
    // another tab may have copied since: the newest of this tab's and the shared one
    const shared = readClip();
    const c = shared && (!clip || shared.source !== clip.source || JSON.stringify(shared) !== JSON.stringify(clip)) ? shared : clip;
    if (!c) { print(t('app.paste.none')); return; }
    hideHint();
    if (inPlace) {
      let made;
      try { made = model.change(t('ui.editmenu.paste_in_place'), (m) => m.pasteClip(host.path, c, c.m), [model.context(host.path).def.id]); } catch (err) { print(t('app.paste.failed', { error: err.message })); return; }
      setTool('select');
      host.setSel(made || []);
      print(t('app.paste.inplace'));
      return;
    }
    setTool('paste', c);
    print(t('app.paste.where'));
  }
  function duplicate() {
    tools.escape();
    if (!host.sel.some((x) => x.t !== 'g' && x.t !== 'd' && x.t !== 's')) { print(t('app.dup.none')); return; }
    hideHint();
    tools.grab(cursorEv(), { copy: true });
    syncTool();
    print(t('app.dup.done'));
  }
  function stdView(name) {
    cam.standard(name, model.bbox() || { min: [-5, -5, 0], max: [5, 5, 3] });
    view.invalidate();
    print(t('app.view.done', { view: t('ui.views.' + name) }));
  }
  function frameSelection() {
    const bb = tools.selBox();
    if (!bb) { zoomExtents(); return; }
    const pad = 0.05;
    cam.fit({ min: bb.min.map((v) => v - pad), max: bb.max.map((v) => v + pad) });
    view.invalidate();
  }
  function zoomExtents() {
    const bb = model.bbox();
    cam.fit(bb);
    view.invalidate();
  }

  // ---- views ----
  root.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => {
    closeMenus();
    cam.standard(b.dataset.view, model.bbox() || { min: [-5, -5, 0], max: [5, 5, 3] });
    view.invalidate();
    print(t('app.view.done', { view: b.textContent }));
  }));
  const perspBtn = $('[data-persp]');
  perspBtn.addEventListener('click', () => {
    cam.persp = !cam.persp;
    perspBtn.setAttribute('aria-checked', String(cam.persp));
    print(cam.persp ? t('app.persp.on') : t('app.persp.off'));
    view.invalidate();
  });
  const presentBtn = $('[data-present]');
  function setPresentation(on) {
    presentation = !!on;
    presentBtn.setAttribute('aria-checked', String(presentation));
    root.classList.toggle('is-presenting', presentation);
    print(presentation ? t('app.present.on') : t('app.present.off'));
    view.invalidate();
  }
  presentBtn.addEventListener('click', () => { closeMenus(); setPresentation(!presentation); });
  // section planes and cuts on or off (0.4 M7): kept in the file, one undo step each
  const secPlanesBtn = $('[data-sec-planes]'), secCutsBtn = $('[data-sec-cuts]');
  function syncSectionMenu() { secPlanesBtn.setAttribute('aria-checked', String(model.sectionView.planes)); secCutsBtn.setAttribute('aria-checked', String(model.sectionView.cuts)); }
  function setSectionView(key, on) {
    model.change(t(on ? 'app.undo.sec_show' : 'app.undo.sec_hide'), (m) => { m.sectionView[key] = on; }, []);
    if (key === 'planes' && !on) host.setSel(host.sel.filter((s) => s.t !== 's'));
    print(t('app.sec.' + key + (on ? '.on' : '.off')));
    syncSectionMenu(); afterHistory();
  }
  secPlanesBtn.addEventListener('click', () => { closeMenus(); setSectionView('planes', !model.sectionView.planes); });
  secCutsBtn.addEventListener('click', () => { closeMenus(); setSectionView('cuts', !model.sectionView.cuts); });
  function closeMenus() { for (const d of root.querySelectorAll('details.mc-menu[open]')) d.open = false; }
  document.addEventListener('click', (e) => { for (const d of root.querySelectorAll('details.mc-menu[open]')) if (!d.contains(e.target)) d.open = false; });

  // ---- style ----
  function styleToUi() {
    const st = view.style;
    ui.mode.value = st.mode; ui.edges.checked = st.edges; ui.shadows.checked = st.shadows;
    ui.sun.disabled = !st.shadows;
    ui.sunMonth.value = String(st.sun.month); ui.sunDay.value = String(st.sun.day); ui.sunHour.value = String(st.sun.hour);
    ui.sunLat.value = String(st.sun.lat); ui.sunLon.value = String(st.sun.lon); ui.sunTz.value = String(st.sun.tz);
    sunText();
  }
  function sunText() {
    const st = view.style.sun, h = Math.floor(st.hour), mi = Math.round((st.hour - h) * 60);
    // the time in the page's language (12 or 24 hours as that language writes it)
    try { ui.sunHourOut.textContent = new Intl.DateTimeFormat(i18n.locale() === 'en-XA' ? 'en' : i18n.locale(), { hour: 'numeric', minute: '2-digit' }).format(new Date(2000, 0, 1, h, mi)); }
    catch { ui.sunHourOut.textContent = `${h}:${String(mi).padStart(2, '0')}`; }
    const s = sunPosition(st);
    ui.sunInfo.textContent = s.up ? t('app.sun.info', { alt: s.altitude.toFixed(0), az: s.azimuth.toFixed(0) }) : t('app.sun.down');
  }
  function uiToStyle() {
    const n = (x, lo, hi, d) => { const v = parseFloat(x); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
    const st = view.style;
    view.style = {
      mode: ui.mode.value, edges: ui.edges.checked, shadows: ui.shadows.checked,
      sun: {
        month: n(ui.sunMonth.value, 1, 12, st.sun.month) | 0, day: n(ui.sunDay.value, 1, 31, st.sun.day) | 0, hour: n(ui.sunHour.value, 0, 23.99, st.sun.hour),
        lat: n(ui.sunLat.value, -90, 90, st.sun.lat), lon: n(ui.sunLon.value, -180, 180, st.sun.lon), tz: n(ui.sunTz.value, -14, 14, st.sun.tz),
      },
    };
    ui.sun.disabled = !view.style.shadows;
    sunText();
    view.invalidate();
  }
  for (const c of [ui.mode, ui.edges, ui.shadows, ui.sunMonth, ui.sunDay, ui.sunHour, ui.sunLat, ui.sunLon, ui.sunTz]) {
    c.addEventListener('input', uiToStyle);
    c.addEventListener('change', uiToStyle);
  }
  styleToUi();

  // ---- scenes ----
  $('[data-scene-add]').addEventListener('click', () => {
    const name = t('app.scene.default', { n: model.scenes.length + 1 });
    const s = cleanScene({ name, cam: cam.toJSON(), style: view.style, vis: model.captureVis() });
    model.change(t('ui.scenes.add'), (m) => { m.scenes = [...m.scenes, s]; }, []);
    sceneIndex = model.scenes.length - 1;
    renderScenes();
    print(t('app.scene.saved', { name }));
  });
  $('[data-scene-prev]').addEventListener('click', () => stepScene(-1));
  $('[data-scene-next]').addEventListener('click', () => stepScene(1));
  const playBtn = $('[data-scene-play]');
  playBtn.addEventListener('click', () => (playing ? stopPlay() : startPlay()));
  function startPlay() {
    if (model.scenes.length < 2) { print(t('app.scene.play.few')); return; }
    playBtn.setAttribute('aria-pressed', 'true');
    playBtn.lastChild.textContent = ' ' + t('app.scene.stop');
    const tick = () => { stepScene(1); playing = setTimeout(tick, 3200); };
    tick();
  }
  function stopPlay() {
    if (!playing) return;
    clearTimeout(playing); playing = null;
    playBtn.setAttribute('aria-pressed', 'false');
    playBtn.lastChild.textContent = ' ' + t('ui.scenes.play');
  }
  function stepScene(d) {
    if (!model.scenes.length) return;
    const n = model.scenes.length;
    goScene(((sceneIndex < 0 ? (d > 0 ? -1 : 0) : sceneIndex) + d + n) % n);
  }
  let anim = null;
  /** Go to scene i: its style, what it shows (0.4 M23) and its camera, moving there over `ms`. Resolves when there. */
  function goScene(i, animate = true, { ms = 650, quiet = false, force = false } = {}) {
    const s = model.scenes[i];
    if (!s) return Promise.resolve();
    sceneIndex = i;
    view.style = JSON.parse(JSON.stringify(s.style));
    styleToUi();
    if (s.vis) { model.applyVis(s.vis); host.setSel(host.sel.filter((x) => x.t !== 'i')); syncSectionMenu(); tagsDrawn = ''; scheduleInfo(); }
    const from = cam.toJSON(), to = s.cam;
    if (anim) cancelAnimationFrame(anim);
    let arrive;
    const there = new Promise((r) => { arrive = r; });
    if (!animate || (!force && matchMedia('(prefers-reduced-motion: reduce)').matches)) { cam.set(to); view.invalidate(); arrive(); }   // i18n-ignore: a media query
    else {
      const t0 = performance.now();
      const step = (tm) => {
        const k = Math.min(1, (tm - t0) / ms);
        cam.set(lerpCam(from, to, k));
        view.invalidate();
        if (k < 1) anim = requestAnimationFrame(step); else { anim = null; cam.set(to); arrive(); }
      };
      anim = requestAnimationFrame(step);
    }
    perspBtn.setAttribute('aria-checked', String(to.persp !== false));
    renderScenes();
    if (!quiet) print(t('app.scene.go', { name: s.name }));
    return there;
  }
  // ---- the scenes as a WebM animation (0.4 M23): played from the first to the last, the 3D view and its marks drawn
  // into one canvas each frame, recorded with MediaRecorder; presentation view while it records; Esc or the button stops
  const recBtn = $('[data-scene-record]');
  let recording = null;
  recBtn.addEventListener('click', () => (recording ? (recording.stop = true) : recordScenes()));
  async function recordScenes() {
    const n = model.scenes.length;
    if (n < 2) { print(t('app.scene.rec.few')); return; }
    const mime = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find((m) => window.MediaRecorder?.isTypeSupported?.(m));   // i18n-ignore: media types
    if (!mime || !HTMLCanvasElement.prototype.captureStream) { print(t('app.scene.rec.none')); return; }
    stopPlay();
    tools.escape();
    const wasPresent = presentation, keepSel = host.sel;
    host.setSel([]);
    if (!wasPresent) setPresentation(true);
    const out = document.createElement('canvas');
    out.width = Math.max(2, ui.gl.width & ~1); out.height = Math.max(2, ui.gl.height & ~1);
    const g = out.getContext('2d');
    const rec = new MediaRecorder(out.captureStream(30), { mimeType: mime, videoBitsPerSecond: 8e6 });
    const chunks = [];
    rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
    const stopped = new Promise((r) => { rec.onstop = r; });
    recording = { stop: false };
    recBtn.setAttribute('aria-pressed', 'true');
    let live = true;
    const paint = () => { if (!live) return; g.drawImage(ui.gl, 0, 0, out.width, out.height); g.drawImage(ui.over, 0, 0, out.width, out.height); requestAnimationFrame(paint); };
    const hold = (ms) => new Promise((r) => setTimeout(r, ms));
    const t0 = performance.now();
    try {
      await goScene(0, false, { quiet: true });
      await hold(100);
      paint();
      rec.start(500);
      print(t('app.scene.rec.progress', { i: 1, n }));
      await hold(1500);
      for (let i = 1; i < n && !recording.stop; i++) {
        print(t('app.scene.rec.progress', { i: i + 1, n }));
        await goScene(i, true, { ms: 2000, quiet: true, force: true });
        await hold(1500);
      }
    } finally {
      if (rec.state !== 'inactive') rec.stop();
      await stopped;
      live = false;
      const cancelled = recording.stop;
      recording = null;
      recBtn.setAttribute('aria-pressed', 'false');
      if (!wasPresent) setPresentation(false);
      host.setSel(keepSel);
      if (cancelled) print(t('app.scene.rec.stopped'));
      else {
        const name = base() + '.webm';
        download(new Blob(chunks, { type: 'video/webm' }), name, 'video/webm');
        print(t('app.scene.rec.done', { file: name, s: Math.round((performance.now() - t0) / 1000) }));
      }
    }
  }
  function renderScenes() {
    ui.scenes.replaceChildren();
    model.scenes.forEach((s, i) => {
      const li = el('li', { className: i === sceneIndex ? 'is-cur' : '' },
        el('button', { type: 'button', className: 'mc-scene-go', title: t('app.scene.go.title'), onclick: () => goScene(i) }, s.name),
        el('span', { className: 'mc-scene-acts' },
          el('button', { type: 'button', className: 'mc-icon', title: t('app.scene.update.title', { name: s.name }), 'aria-label': t('app.scene.update.aria', { name: s.name }), onclick: () => updateScene(i) }, el('i', { className: 'bi bi-arrow-repeat', 'aria-hidden': 'true' })),
          el('button', { type: 'button', className: 'mc-icon', title: t('app.scene.rename'), 'aria-label': t('app.scene.rename.aria', { name: s.name }), onclick: () => renameScene(i) }, el('i', { className: 'bi bi-pencil', 'aria-hidden': 'true' })),
          el('button', { type: 'button', className: 'mc-icon', title: t('app.scene.delete'), 'aria-label': t('app.scene.delete.aria', { name: s.name }), onclick: () => deleteScene(i) }, el('i', { className: 'bi bi-trash', 'aria-hidden': 'true' }))));
      ui.scenes.append(li);
    });
    ui.scenesEmpty.hidden = model.scenes.length > 0;
    ui.sceneNav.hidden = model.scenes.length === 0;
    ui.scenebar.hidden = model.scenes.length === 0;
    ui.scenebar.replaceChildren(...model.scenes.map((s, i) => el('button', { type: 'button', 'aria-current': String(i === sceneIndex), onclick: () => goScene(i) }, s.name)));
  }
  function updateScene(i) {
    const s = cleanScene({ name: model.scenes[i].name, cam: cam.toJSON(), style: view.style, vis: model.captureVis() });
    model.change(t('app.undo.scene_update'), (m) => { m.scenes = m.scenes.map((x, k) => (k === i ? s : x)); }, []);
    sceneIndex = i;
    renderScenes();
    print(t('app.scene.updated', { name: s.name }));
  }
  async function renameScene(i) {
    const name = await askText(t('app.scene.rename.h'), t('app.scene.rename.label'), model.scenes[i].name);
    if (!name) return;
    model.change(t('app.scene.rename.h'), (m) => { m.scenes = m.scenes.map((x, k) => (k === i ? { ...x, name: name.slice(0, 80) } : x)); }, []);
    renderScenes();
  }
  function deleteScene(i) {
    const nm = model.scenes[i].name;
    model.change(t('app.undo.scene_delete'), (m) => { m.scenes = m.scenes.filter((_, k) => k !== i); }, []);
    if (sceneIndex >= model.scenes.length) sceneIndex = model.scenes.length - 1;
    renderScenes();
    print(t('app.scene.deleted', { name: nm }));
  }

  // ---- panels: outliner, components, entity info ----
  let infoTimer = 0;
  // the panels wait while a tool previews (a drag): they show the model once it is put down, not on every frame
  function scheduleInfo() { if (!infoTimer) infoTimer = requestAnimationFrame(() => { infoTimer = 0; if (model.previewing) return; renderInfo(); renderTree(); renderComps(); renderTags(); renderScenesIfChanged(); renderLights(); }); }
  let scenesSeen = '';
  function renderScenesIfChanged() { const k = JSON.stringify(model.scenes.map((s) => s.name)) + sceneIndex; if (k !== scenesSeen) { scenesSeen = k; renderScenes(); } }

  // Outliner (0.4 M22): search by name, an eye per row (hide/show, M17), F2 renames in place, drag a row onto a group to
  // move it inside (onto the Outliner heading: to the top level), keeping where it is in the world
  let treeFilter = '', dragFrom = null;
  ui.treeSearch.addEventListener('input', () => { treeFilter = ui.treeSearch.value.trim().toLowerCase(); renderTree(); });
  ui.treeSearch.addEventListener('keydown', (e) => { if (e.key === 'Escape') { ui.treeSearch.value = ''; treeFilter = ''; renderTree(); } });
  function moveRow(to) {
    const f = dragFrom;
    dragFrom = null;
    if (!f) return;
    let nid2;
    try { nid2 = model.change(t('app.undo.tree_move'), (m) => m.moveInto(f.parent, f.iid, to), [model.context(f.parent).def.id, model.context(to).def.id]); }
    catch (err) { print(err.message); return; }
    if (nid2 === f.iid && f.parent.join() === to.join()) return;
    host.path = to.slice(); host.setSel([{ t: 'i', id: nid2 }]);
    print(to.length ? t('app.tree.moved_in', { name: model.def(model.context(to).def.insts.get(nid2).def).name, group: model.context(to).def.name }) : t('app.tree.moved_top', { name: model.def(model.root.insts.get(nid2).def).name }));
    afterHistory();
  }
  ui.treeTop.addEventListener('dragover', (e) => { if (dragFrom) { e.preventDefault(); ui.treeTop.classList.add('is-drop'); } });
  ui.treeTop.addEventListener('dragleave', () => ui.treeTop.classList.remove('is-drop'));
  ui.treeTop.addEventListener('drop', (e) => { e.preventDefault(); ui.treeTop.classList.remove('is-drop'); moveRow([]); });
  function renameRow(btn, d) {
    const nm = btn.querySelector('.nm');
    const inp = el('input', { type: 'text', className: 'mc-input mc-tree-name', value: d.name, maxLength: 120, 'aria-label': t('app.info.name') });
    let done = false;
    const finish = (keep) => {
      if (done) return; done = true;
      const v = inp.value.trim().slice(0, 120);
      inp.blur();
      if (keep && v && v !== d.name) { model.change(t('app.scene.rename'), (m) => { m.def(d.id).name = v; }, [d.id]); print(t('app.tree.renamed', { name: v })); }
      afterHistory(); renderTree();
    };
    inp.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') finish(true); else if (e.key === 'Escape') finish(false); });
    inp.addEventListener('blur', () => finish(true));
    nm.replaceWith(inp);
    inp.focus(); inp.select();
  }
  function renderTree() {
    // not while a row is being renamed (a redraw would take the box away); finishing the rename redraws
    if (document.activeElement?.classList?.contains('mc-tree-name') && ui.tree.contains(document.activeElement)) return;
    const offTags = model.hiddenTags();
    ui.tree.replaceChildren();
    const counts = model.instanceCounts();
    const selIds = new Set(host.sel.filter((s) => s.t === 'i').map((s) => s.id));
    ui.treeSearch.hidden = model.root.insts.size < 2 && !treeFilter;
    // with a search: a row shows when its name matches, or something inside it does
    const matches = new Map();
    const hit = (def, depth = 0) => {
      if (depth > 12) return false;
      if (matches.has(def.id)) return matches.get(def.id);
      let any = false;
      for (const inst of def.insts.values()) { const d = model.def(inst.def); if (d && (d.name.toLowerCase().includes(treeFilter) || hit(d, depth + 1))) any = true; }
      matches.set(def.id, any);
      return any;
    };
    const walk = (def, path, ul, depth) => {
      if (depth > 12) return;
      for (const [iid, inst] of def.insts) {
        const d = model.def(inst.def);
        if (!d) continue;
        const own = !treeFilter || d.name.toLowerCase().includes(treeFilter);
        if (treeFilter && !own && !hit(d)) continue;
        const p = [...path, iid];
        const open = host.path.length >= p.length && p.every((x, i) => host.path[i] === x);
        const isSel = selIds.has(iid) && path.length === host.path.length && path.every((x, i) => host.path[i] === x);
        const off = inst.hidden || (inst.tag && offTags.has(inst.tag));   // hidden itself (M17), or by its tag (M6)
        const btn = el('button', {
          type: 'button', className: 'mc-node' + (isSel ? ' is-sel' : '') + (open ? ' is-open' : '') + (off ? ' is-hidden' : '') + (treeFilter && own ? ' is-match' : ''),
          title: t('app.tree.title'), draggable: true,
          onclick: () => { host.path = path; host.setSel([{ t: 'i', id: iid }]); },
          ondblclick: () => host.openContext(p),
        }, el('i', { className: 'bi bi-' + (d.kind === 'component' ? 'boxes' : 'collection'), 'aria-hidden': 'true' }),   // i18n-ignore: an icon class
        el('span', { className: 'nm' }, d.name + (d.kind === 'component' && counts.get(d.id) > 1 ? ' (' + counts.get(d.id) + ')' : '')),
        off && !inst.hidden ? el('span', { className: 'mc-hidden-tag', title: t('app.tree.hidden_tag', { name: inst.tag }) }, el('i', { className: 'bi bi-tag', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, ' ' + t('app.tree.hidden_tag', { name: inst.tag }))) : null);
        btn.addEventListener('keydown', (e) => { if (e.key === 'F2') { e.preventDefault(); e.stopPropagation(); renameRow(btn, d); } });
        btn.addEventListener('dragstart', (e) => { dragFrom = { parent: path.slice(), iid }; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', d.name); });
        btn.addEventListener('dragend', () => { dragFrom = null; for (const x of root.querySelectorAll('.is-drop')) x.classList.remove('is-drop'); });
        btn.addEventListener('dragover', (e) => { if (dragFrom && !(dragFrom.iid === iid && dragFrom.parent.join() === path.join())) { e.preventDefault(); btn.classList.add('is-drop'); } });
        btn.addEventListener('dragleave', () => btn.classList.remove('is-drop'));
        btn.addEventListener('drop', (e) => { e.preventDefault(); btn.classList.remove('is-drop'); moveRow(p); });
        // the eye: hide or show this placement (Edit › More › Hide does the same)
        const eye = el('button', { type: 'button', className: 'mc-eye', 'aria-pressed': String(!inst.hidden), title: t(inst.hidden ? 'app.tree.show' : 'app.tree.hide', { name: d.name }), 'aria-label': t(inst.hidden ? 'app.tree.show' : 'app.tree.hide', { name: d.name }),
          onclick: () => { model.change(t(inst.hidden ? 'app.undo.unhide' : 'app.undo.hide'), (m) => hideSel(m.context(path).def, [{ t: 'i', id: iid }], !inst.hidden), [model.context(path).def.id]); host.setSel(host.sel.filter((s) => s.id !== iid)); afterHistory(); } },
          el('i', { className: inst.hidden ? 'bi bi-eye-slash' : 'bi bi-eye', 'aria-hidden': 'true' }));
        const li = el('li', { dataset: { iid: String(iid) } }, el('div', { className: 'mc-node-row' }, btn, eye));
        if (d.insts.size) { const sub = el('ul'); walk(d, p, sub, depth + 1); if (sub.children.length) li.append(sub); }
        ul.append(li);
      }
    };
    walk(model.root, [], ui.tree, 0);
    ui.treeEmpty.hidden = model.root.insts.size > 0;
    ui.closeCtx.hidden = !host.path.length;
    const names = [];
    let d = model.root;
    for (const iid of host.path) { const inst = d.insts.get(iid); if (!inst) break; d = model.def(inst.def); names.push(d.name); }
    ui.crumbs.textContent = names.length ? t('app.tree.crumbs', { path: names.join(' › ') }) : '';
  }
  ui.closeCtx.addEventListener('click', () => { while (host.path.length) host.closeContext(); });
  ui.tagAdd.addEventListener('click', addTagRow);

  function renderComps() {
    const counts = model.instanceCounts();
    const comps = [...model.defs.values()].filter((d) => d.kind === 'component');
    ui.comps.replaceChildren(...comps.map((d) => el('li', {},
      el('span', { className: 'nm', title: d.name }, d.name),
      el('span', { className: 'n' }, String(counts.get(d.id) || 0) + '×'),
      el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { setTool('place', d.id); print(t('app.comp.place.where', { name: d.name })); } }, t('app.comp.place')))));
    ui.compsEmpty.hidden = comps.length > 0;
  }

  // ---- Tags (0.4 M6): named switches that show and hide groups and components; kept in the file ----
  let tagsDrawn = '';
  function renderTags() {
    const counts = model.tagCounts();
    const sig = JSON.stringify([model.tags, [...counts]]);
    // not while a name is being typed (a redraw would take the box away); the next change redraws
    if (sig === tagsDrawn || ui.tags.contains(document.activeElement) && document.activeElement.tagName === 'INPUT') return;
    tagsDrawn = sig;
    const rows = [el('li', {}, el('span', { className: 'mc-eye', 'aria-hidden': 'true' }, el('i', { className: 'bi bi-eye' })),
      el('span', { className: 'nm' }, t('app.tag.untagged')), el('span', { className: 'n' }, String(counts.get('') || 0)), el('span', {}))];
    for (const g of model.tags) {
      const name = g.name, on = !g.hidden;
      const inp = el('input', { type: 'text', className: 'mc-input', value: name, maxLength: 80, spellcheck: false, autocomplete: 'off', 'aria-label': t('app.tag.name') });
      inp.addEventListener('change', () => {
        const v = inp.value.trim();
        if (!v || v === name) { inp.value = name; return; }
        try { model.change(t('app.undo.tag_rename'), (m) => m.renameTag(name, v), model.holding(model.tag(name)?.name ?? name)); print(t('app.tag.renamed', { old: name, name: model.tag(v).name })); }
        catch (err) { print(err.message); inp.value = name; }
        tagsDrawn = ''; afterHistory();
      });
      inp.addEventListener('keydown', (e) => { if (e.key === 'Escape') { inp.value = name; inp.blur(); } else if (e.key === 'Enter') inp.blur(); });
      rows.push(el('li', { className: on ? '' : 'is-off', dataset: { tag: name } },
        el('button', { type: 'button', className: 'mc-eye', 'aria-pressed': String(on), title: t(on ? 'app.tag.hide' : 'app.tag.show', { name }), 'aria-label': t(on ? 'app.tag.hide' : 'app.tag.show', { name }), onclick: () => showTag(name, !on) },
          el('i', { className: on ? 'bi bi-eye' : 'bi bi-eye-slash', 'aria-hidden': 'true' })),
        inp,
        el('span', { className: 'n' }, String(counts.get(name) || 0)),
        el('button', { type: 'button', className: 'mc-del', title: t('app.tag.delete', { name }), 'aria-label': t('app.tag.delete', { name }), onclick: () => deleteTagNamed(name) },
          el('i', { className: 'bi bi-trash3', 'aria-hidden': 'true' }))));
    }
    ui.tags.replaceChildren(...rows);
  }
  function showTag(name, on) {
    tools.escape();
    model.change(t(on ? 'app.undo.tag_show' : 'app.undo.tag_hide'), (m) => m.setTagHidden(name, !on), []);
    if (!on) {
      // what now hides cannot stay selected, and a group being edited inside closes above the first hidden one
      let def = model.root, k = 0;
      for (; k < host.path.length; k++) { const i = def.insts.get(host.path[k]); if (!i || i.tag === name) break; def = model.def(i.def); }
      if (k < host.path.length) { while (host.path.length > k) host.closeContext(); }
      const d = ctxDef();
      host.setSel(host.sel.filter((s) => !(s.t === 'i' && d.insts.get(s.id)?.tag === name)));
    }
    print(t(on ? 'app.tag.shown' : 'app.tag.hidden', { name }));
    tagsDrawn = ''; afterHistory();
  }
  function addTagRow() {
    const nm = model.change(t('app.undo.tag_add'), (m) => m.addTag(), []);
    tagsDrawn = ''; renderTags(); scheduleInfo();
    const inp = ui.tags.querySelector(`li[data-tag="${CSS.escape(nm)}"] input`);
    if (inp) { inp.focus(); inp.select(); }
    print(t('app.tag.added', { name: nm }));
  }
  function deleteTagNamed(name) {
    const n = model.change(t('app.undo.tag_delete'), (m) => m.deleteTag(name), model.holding(model.tag(name)?.name ?? name));
    print(t('app.tag.deleted', { name, n }));
    tagsDrawn = ''; afterHistory();
  }
  /** Give the selected groups and components tag `name` ('' = untagged). */
  function tagSelection(name) {
    const iids = host.sel.filter((s) => s.t === 'i').map((s) => s.id);
    if (!iids.length) return;
    model.change(t('app.undo.tag_set'), (m) => m.setTag(m.context(host.path).def, iids, name || null), [model.context(host.path).def.id]);
    if (name && model.tag(name)?.hidden) { host.setSel(host.sel.filter((s) => s.t !== 'i')); print(t('app.tag.set_hidden', { name })); }
    else print(name ? t('app.tag.set', { name, n: iids.length }) : t('app.tag.unset', { n: iids.length }));
    tagsDrawn = ''; afterHistory();
  }
  // ---- Solid checker (0.4 M21): why a group or component is not a solid; Show problems; Fix the simple cases ----
  const problemList = (p) => [p.holes.length && t('app.check.holes', { n: p.holes.length }), p.extra.length && t('app.check.extra', { n: p.extra.length }),
    p.inner.length && t('app.check.inner', { n: p.inner.length }), p.stray.length && t('app.check.stray', { n: p.stray.length }),
    p.flipped.length && t('app.check.flipped', { n: p.flipped.length })].filter(Boolean).join(' · ');
  function solidCheck(d, iid, notes) {
    const p = solidProblems(d), list = problemList(p);
    const why = !d.faces.size ? t('app.check.empty') : list ? t('app.check.why', { list }) : d.insts.size ? t('app.check.nested') : '';
    if (!why) return;
    const box = el('div', { className: 'mc-check-box', dataset: { solidCheck: '' } }, el('p', { className: 'mc-note' }, why));
    if (list) box.append(el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => {
        // open it and select what is wrong, so it shows highlighted
        host.openContext([...host.path, iid]);
        host.setSel([...[...p.holes, ...p.extra, ...p.stray].map((id) => ({ t: 'e', id })), ...[...p.inner, ...p.flipped].map((id) => ({ t: 'f', id }))]);
        print(t('app.check.showing', { list }));
      } }, t('app.check.show')),
      el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => {
        const r = model.change(t('app.undo.fix_solid'), (m) => fixSolid(m.def(d.id)), [d.id]);
        const done = [r.stray && t('app.check.fixed.stray', { n: r.stray }), r.inner && t('app.check.fixed.inner', { n: r.inner }), r.flipped && t('app.check.fixed.flipped', { n: r.flipped }), r.holes && t('app.check.fixed.holes', { n: r.holes })].filter(Boolean).join(' · ');
        const left = problemList(solidProblems(model.def(d.id)));
        print(!done ? t('app.check.nothing', { left }) : left ? t('app.check.fixed_left', { done, left }) : t('app.check.fixed', { done }));
        afterHistory();
      } }, t('app.check.fix'))));
    notes.push(box);
  }
  // ---- Soften by angle (0.4 M18): an angle box with Soften and Harden; edges of the selection or of a whole definition ----
  let softenDeg = 20;
  function softenRow(props, target) {
    props.append(el('label', { for: 'mc-soften' }, t('app.info.soften')));
    const inp = el('input', { type: 'number', id: 'mc-soften', className: 'mc-input', min: 0, max: 180, step: 1, value: softenDeg });
    const go = (deg) => {
      const tg = target();
      const n = model.change(t(deg > 0 ? 'app.undo.soften' : 'app.undo.harden'), (m) => softenEdges(tg.defId ? m.def(tg.defId) : m.context(tg.path).def, tg.eids, deg), [tg.defId || model.context(tg.path).def.id]);
      print(deg > 0 ? t('app.soften.done', { deg, n }) : t('app.harden.done', { n }));
      afterHistory();
    };
    const apply = el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { const v = Number(inp.value); if (!(v >= 0 && v <= 180)) { print(t('app.soften.bad')); return; } softenDeg = v; go(v); } }, t('app.info.soften.go'));
    const hard = el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => go(0) }, t('app.info.harden'));
    props.append(el('span', { className: 'mc-inline' }, inp, ' ° ', apply, ' ', hard));
  }
  /** The Tag picker in Entity info for the selected placements (several with different tags: a blank first choice). */
  function tagPicker(props, insts) {
    const tags = new Set(insts.map((i) => i.tag || ''));
    props.append(el('label', { for: 'mc-tag' }, t('app.info.tag')));
    const sel = el('select', { id: 'mc-tag', className: 'mc-select' },
      ...(tags.size > 1 ? [el('option', { value: '\u0000', disabled: true }, t('app.info.tag.mixed'))] : []),
      el('option', { value: '' }, t('app.tag.untagged')),
      ...model.tags.map((g) => el('option', { value: g.name }, g.hidden ? t('app.info.tag.hidden', { name: g.name }) : g.name)),
      el('option', { value: '\u0001' }, t('app.info.tag.new')));
    sel.value = tags.size > 1 ? '\u0000' : [...tags][0];
    sel.addEventListener('change', () => {
      if (sel.value === '\u0001') { const nm = model.change(t('app.undo.tag_add'), (m) => m.addTag(), []); tagSelection(nm); return; }
      tagSelection(sel.value);
    });
    props.append(sel);
  }

  function renderInfo() {
    const u = model.units;
    const ctx = model.context(host.path) || model.context([]);
    const def = ctx.def, sel = host.sel;
    const rows = [];
    const props = el('div', { className: 'mc-props' });
    const row = (k, v) => props.append(el('span', { className: 'k' }, k), el('span', { className: 'v' }, v));
    const actions = el('div', { className: 'mc-actions' }), notes = [];
    const btn = (label, fn) => actions.append(el('button', { type: 'button', className: 'mc-linkbtn', onclick: fn }, label));
    // a length you can retype: Enter (or leaving the box) resizes the model through fn(meters)
    const lenBox = (label, id, meters, fn) => {
      props.append(el('label', { for: id }, label));
      const inp = el('input', { type: 'text', id, className: 'mc-input', value: formatLength(meters, u), spellcheck: false, autocomplete: 'off', inputMode: 'text' });
      inp.dataset.mcLen = id;
      inp.addEventListener('change', () => {
        const L = parseLength(inp.value, u);
        if (L === null || !(L > 0)) { print(t('app.len.bad')); inp.value = formatLength(meters, u); return; }
        try { fn(L); print(t('app.len.set', { what: label, len: formatLength(L, u) })); ui.over.focus({ preventScroll: true }); } catch (err) { print(t('app.failed', { error: err.message })); inp.value = formatLength(meters, u); }
        afterHistory();
      });
      inp.addEventListener('keydown', (e) => { if (e.key === 'Escape') { inp.value = formatLength(meters, u); inp.blur(); ui.over.focus({ preventScroll: true }); } });
      props.append(inp);
    };
    if (!sel.length) {
      ui.infoH.textContent = t('app.info.model');
      let faces = 0, edges = 0;
      model.walk((d) => { faces += d.faces.size; edges += [...d.edges.values()].filter((e) => !e.soft).length; });
      const counts = model.instanceCounts();
      row(t('app.info.faces'), String(faces));
      row(t('app.info.edges'), String(edges));
      row(t('app.info.groups'), String([...model.defs.values()].filter((d) => d.kind === 'group').length));
      row(t('app.info.components'), t('app.info.components.n', { n: [...model.defs.values()].filter((d) => d.kind === 'component').length, placed: [...model.defs.values()].filter((d) => d.kind === 'component').reduce((n, d) => n + (counts.get(d.id) || 0), 0) }));
      row(t('app.info.guides'), String(model.guides.size));
      if (model.dims.size) row(t('app.info.dims'), String(model.dims.size));
      const nh = hiddenCount(model);
      if (nh) { row(t('app.info.hidden'), String(nh)); btn(t('ui.editmenu.unhide_all'), unhideEverything); }
      const bb = model.bbox();
      if (bb) row(t('app.info.size'), [0, 1, 2].map((k) => formatLength(bb.max[k] - bb.min[k], u)).join(' × '));
      if (model.guides.size) btn(t('app.info.del_guides'), () => { model.change(t('app.undo.del_guides'), (m) => { m.guides = new Map(); }, []); host.setSel([]); });
      if (model.dims.size) btn(t('app.info.del_dims'), () => { model.change(t('app.undo.del_dims'), (m) => { m.dims = new Map(); }, []); host.setSel([]); });
      ui.info.replaceChildren(props, actions, el('p', { className: 'mc-note' }, t('app.info.note', { unit: unitWords(u) })));
      return;
    }
    const nF = sel.filter((s) => s.t === 'f').length, nE = sel.filter((s) => s.t === 'e').length, nI = sel.filter((s) => s.t === 'i').length, nG = sel.filter((s) => s.t === 'g').length, nD = sel.filter((s) => s.t === 'd').length, nS = sel.filter((s) => s.t === 's').length;
    // one whole arc, circle or polygon (0.4 M3)
    const cid = nE === sel.length ? def.edges.get(sel[0].id)?.curve : null;
    const ci = cid && sel.every((s) => def.edges.get(s.id)?.curve === cid) ? curveInfo(def, cid) : null;
    if (ci && ci.edges.length === sel.length) {
      ui.infoH.textContent = t('app.info.curve.' + (['arc', 'circle', 'polygon'].includes(ci.kind) ? ci.kind : 'curve'));
      if (ci.round && ci.flat) lenBox(t('app.info.radius'), 'mc-radius', ci.radius, (L) => model.change(t('app.info.radius'), (m) => setCurveRadius(m.context(host.path).def, cid, L), [model.context(host.path).def.id]));
      else if (ci.round) row(t('app.info.radius'), formatLength(ci.radius, u));
      row(ci.kind === 'polygon' ? t('app.info.sides') : t('app.info.segments'), String(ci.segs));
      if (ci.kind === 'arc' && ci.round) row(t('app.info.angle'), (Math.round((ci.sweep * 180) / Math.PI * 100) / 100) + '°');
      row(t('app.info.length'), formatLength(ci.length, u));
      if (ci.kind === 'curve' && def.splines.has(cid)) { row(t('app.info.points'), String(def.splines.get(cid).pts.length)); btn(t('app.info.edit_points'), () => { tools.set('curve', { edit: cid }); syncTool(); ui.over.focus({ preventScroll: true }); }); }
      if (ci.round && !ci.flat) notes.push(el('p', { className: 'mc-note' }, t('app.info.radius.fixed')));
      ui.info.replaceChildren(props, ...notes, actions);
      return;
    }
    if (sel.length === 1 && nF === 1) {
      const f = def.faces.get(sel[0].id);
      ui.infoH.textContent = t('app.info.face');
      if (f) { row(t('app.info.area'), formatArea(faceArea(def, f), u)); row(t('app.info.holes'), String(f.loops.length - 1)); row(t('app.info.color'), colorLabel(f.color)); }
      btn(t('app.info.reverse'), () => { model.change(t('app.info.reverse'), (m) => reverseFaces(m.context(host.path).def, [sel[0].id]), [model.context(host.path).def.id]); });
    } else if (sel.length === 1 && nE === 1) {
      const e = def.edges.get(sel[0].id);
      ui.infoH.textContent = t('app.info.edge');
      if (e) lenBox(t('app.info.length'), 'mc-edgelen', dist(def.verts.get(e.a), def.verts.get(e.b)), (L) => model.change(t('app.undo.edge_length'), (m) => m.setEdgeLength(host.path, sel[0].id, L), [model.context(host.path).def.id]));
      if (e) notes.push(el('p', { className: 'mc-note' }, t('app.info.edge.note')));
    } else if (sel.length === 1 && nI === 1) {
      const inst = def.insts.get(sel[0].id), d = inst && model.def(inst.def);
      if (d) {
        const counts = model.instanceCounts();
        ui.infoH.textContent = d.kind === 'component' ? t('app.info.component') : t('app.info.group');
        // a part inside an open component: how it follows when the component is stretched (0.4 M26)
        if (host.path.length && def.kind === 'component') partRules(props, def, sel[0].id);
        row(t('app.info.color'), colorLabel(inst.color));
        tagPicker(props, [inst]);
        props.append(el('label', { for: 'mc-defname' }, t('app.info.name')));
        const inp = el('input', { type: 'text', id: 'mc-defname', className: 'mc-input', value: d.name, maxLength: 120 });
        inp.addEventListener('change', () => { const v = inp.value.trim().slice(0, 120); if (v && v !== d.name) model.change(t('app.scene.rename'), (m) => { m.def(d.id).name = v; }, [d.id]); scheduleInfo(); });
        props.append(inp);
        if (d.kind === 'component') row(t('app.info.placed'), t('app.info.placed.n', { n: counts.get(d.id) || 0 }));
        const s = solidInfo(d);
        row(t('app.info.solid'), s.closed && !d.insts.size ? t('app.yes') : t('app.no'));
        if (s.closed && !d.insts.size) {
          const k = Math.cbrt(Math.abs(inst.m[0] * (inst.m[5] * inst.m[10] - inst.m[9] * inst.m[6]) - inst.m[4] * (inst.m[1] * inst.m[10] - inst.m[9] * inst.m[2]) + inst.m[8] * (inst.m[1] * inst.m[6] - inst.m[5] * inst.m[2])));
          row(t('app.info.volume'), formatVolume(s.volume * k * k * k, u));
        }
        const bb = model.bbox(d);
        // the size as placed: the definition's own size times this placement's scale along each of its axes
        const sc = [0, 1, 2].map((q) => Math.hypot(inst.m[q * 4], inst.m[q * 4 + 1], inst.m[q * 4 + 2]));
        if (bb) [t('app.info.width'), t('app.info.depth'), t('app.info.height')].forEach((lb, q) => {
          const own = bb.max[q] - bb.min[q], placed = own * sc[q];
          if (placed > 1e-6) lenBox(lb, 'mc-size' + q, placed, (L) => model.change(t(d.kind === 'component' ? 'app.undo.resize_component' : 'app.undo.resize_group'), (m) => m.setDefSize(d.id, q, L / sc[q]), [d.id]));
          else row(lb, formatLength(0, u));
        });
        if (!(s.closed && !d.insts.size)) solidCheck(d, sel[0].id, notes);
        softenRow(props, () => ({ defId: d.id, eids: [...d.edges.keys()] }));
        // 0.4 M26: a component made of parts stretches its parts by their rules, for this copy only
        if (d.kind === 'component' && (d.insts.size || d.dyn)) btn(t('app.dyn.stretch'), () => stretchDialog(sel[0].id));
        if (d.dyn) notes.push(el('p', { className: 'mc-note' }, t('app.dyn.is', { name: model.def(d.dyn.src)?.name || '' })));
        btn(t('app.info.edit'), () => host.openContext([...host.path, sel[0].id]));
        btn(t('app.info.explode'), explodeSel);
        if (d.kind === 'component' && (counts.get(d.id) || 0) > 1) btn(t('app.info.make_unique'), () => { model.change(t('app.info.make_unique'), (m) => m.makeUnique(m.context(host.path).def, sel[0].id), [model.context(host.path).def.id]); scheduleInfo(); });
        if (d.kind === 'group') btn(t('app.undo.make_component'), () => { model.change(t('app.undo.make_component'), (m) => { const dd = m.def(d.id); dd.kind = 'component'; dd.name = m.uniqueName(t('app.info.component')); }, [d.id]); scheduleInfo(); });
      }
    } else if (sel.length === 1 && nD === 1) {
      const dm = model.dims.get(sel[0].id), id = sel[0].id;
      ui.infoH.textContent = t({ rad: 'app.info.dim.rad', dia: 'app.info.dim.dia', ang: 'app.info.dim.ang' }[dm?.kind] || 'app.info.dim');
      if (dm && (dm.kind === 'rad' || dm.kind === 'dia')) {
        // 0.4 M5: a radius or diameter; retyping it gives the curve a new size about its centre
        const g = model.radialAt(dm.c), dia = dm.kind === 'dia';
        if (g?.live && g.flat) lenBox(t(dia ? 'app.info.diameter' : 'app.info.radius'), 'mc-dimlen', dia ? 2 * g.r : g.r, (L) => model.change(t('app.undo.dim_length'), (m) => m.setDimLength(id, L), model.dimScope(id)));
        else if (g) row(t(dia ? 'app.info.diameter' : 'app.info.radius'), formatLength(dia ? 2 * g.r : g.r, u));
        props.append(el('label', { for: 'mc-dimkind' }, t('app.info.dim.show')));
        const ks = el('select', { id: 'mc-dimkind', className: 'mc-select' }, el('option', { value: 'rad' }, t('app.info.radius')), el('option', { value: 'dia' }, t('app.info.diameter')));
        ks.value = dm.kind;
        ks.addEventListener('change', () => { model.change(t('app.undo.dim_kind'), (m) => { m.dims.get(id).kind = ks.value; }, []); scheduleInfo(); });
        props.append(ks);
        notes.push(el('p', { className: 'mc-note' }, t(!g?.live ? 'app.info.dim.rad_gone' : g.flat ? 'app.info.dim.rad_note' : 'app.info.dim.rad_fixed')));
      } else if (dm?.kind === 'ang') {
        const l = angleLayout(model.dimEnds(dm), dm.off, cam);
        row(t('app.info.angle'), t('m3d.dim.angle', { deg: formatDeg((l.L * 180) / Math.PI) }));
        notes.push(el('p', { className: 'mc-note' }, t('m3d.model.dim_angle_only')));
      } else if (dm) {
        const [pa, pb] = model.dimEnds(dm), attached = !!(dm.a.path && dm.b.path);
        lenBox(t('app.info.length'), 'mc-dimlen', dist(pa, pb), (L) => model.change(t('app.undo.dim_length'), (m) => m.setDimLength(id, L), model.dimScope(id)));
        props.append(el('label', { for: 'mc-dimmove' }, t('app.info.dim.moves')));
        const mv = el('select', { id: 'mc-dimmove', className: 'mc-select' },
          el('option', { value: 'b' }, t('app.info.dim.b')), el('option', { value: 'a' }, t('app.info.dim.a')), el('option', { value: 'both' }, t('app.info.dim.both')));
        mv.value = dm.move;
        mv.addEventListener('change', () => { model.change(t('app.undo.dim_end'), (m) => { m.dims.get(id).move = mv.value; }, []); scheduleInfo(); });
        props.append(mv);
        notes.push(el('p', { className: 'mc-note' }, attached
          ? t('app.info.dim.note')
          : t('app.info.dim.free')));
      }
      btn(t('app.info.delete'), eraseSelection);
    } else if (sel.length === 1 && nS === 1) {
      // a section plane (0.4 M7): active or not, its name, where it sits along its arrows, reverse, delete
      const id = sel[0].id, sp = model.sections.get(id);
      ui.infoH.textContent = t('app.info.section');
      if (sp) {
        props.append(el('label', { for: 'mc-secname' }, t('app.info.name')));
        const nm = el('input', { type: 'text', id: 'mc-secname', className: 'mc-input', value: sp.name, maxLength: 80 });
        nm.addEventListener('change', () => { const v = nm.value.trim().slice(0, 80); if (v && v !== sp.name) model.change(t('app.scene.rename'), (m) => { m.sections.get(id).name = v; }, []); scheduleInfo(); });
        props.append(nm);
        props.append(el('span', { className: 'k' }, t('app.info.section.cut')));
        const act = el('input', { type: 'checkbox', id: 'mc-secact', checked: model.activeSection === id });
        act.addEventListener('change', () => { model.change(t('app.undo.sec_active'), (m) => { m.activeSection = act.checked ? id : null; if (act.checked) m.sectionView.cuts = true; }, []); syncSectionMenu(); afterHistory(); });
        props.append(el('label', { className: 'mc-check' }, act, ' ' + t('app.info.section.active')));
        // its place along the arrows, from the model's origin: retype to slide it through the model
        const at = dot(sp.p, sp.n);
        props.append(el('label', { for: 'mc-secat' }, t('app.info.section.at')));
        const inp = el('input', { type: 'text', id: 'mc-secat', className: 'mc-input', value: formatLength(at, u), spellcheck: false, autocomplete: 'off' });
        inp.addEventListener('change', () => {
          // a length, which may be below zero (the far side of the origin)
          const neg = /^\s*-/.test(inp.value), L0 = parseLength(inp.value.replace(/^\s*-/, ''), u), L = L0 === null ? null : neg ? -L0 : L0;
          if (L === null || !Number.isFinite(L)) { print(t('app.len.bad')); inp.value = formatLength(at, u); return; }
          model.change(t('app.undo.sec_move'), (m) => { const s = m.sections.get(id); s.p = add(s.p, mul(s.n, L - dot(s.p, s.n))); }, []);
          print(t('app.sec.moved', { name: sp.name, len: formatLength(L, u) }));
          afterHistory();
        });
        props.append(inp);
        notes.push(el('p', { className: 'mc-note' }, t('app.info.section.note')));
        btn(t('app.info.section.reverse'), () => { model.change(t('app.undo.sec_reverse'), (m) => { const s = m.sections.get(id); s.n = mul(s.n, -1); }, []); afterHistory(); });
      }
      btn(t('app.info.delete'), eraseSelection);
    } else if (sel.length === 1 && nG === 1) {
      const g = model.guides.get(sel[0].id);
      ui.infoH.textContent = g?.kind === 'point' ? t('app.info.guide_point') : t('app.info.guide_line');
      btn(t('app.info.delete'), eraseSelection);
    } else {
      ui.infoH.textContent = t('app.info.selected', { n: sel.length });
      if (nF) row(t('app.info.faces'), String(nF));
      if (nE) row(t('app.info.edges'), String(nE));
      if (nI) row(t('app.info.groups_components'), String(nI));
      if (nI) tagPicker(props, sel.filter((x) => x.t === 'i').map((x) => def.insts.get(x.id)).filter(Boolean));
      if (nG) row(t('app.info.guides'), String(nG));
      if (nD) row(t('app.info.dims'), String(nD));
      if (nF) { let a = 0; for (const s of sel) if (s.t === 'f') { const f = def.faces.get(s.id); if (f) a += faceArea(def, f); } row(t('app.info.total_area'), formatArea(a, u)); }
      if (nF || nE) softenRow(props, () => {
        // the selected edges, and every edge of the selected faces
        const ids = new Set(sel.filter((x) => x.t === 'e').map((x) => x.id));
        const want = new Set();
        for (const s of sel) if (s.t === 'f') { const f = def.faces.get(s.id); if (f) for (const l of f.loops) for (let i = 0; i < l.length; i++) want.add([l[i], l[(i + 1) % l.length]].sort().join('|')); }
        if (want.size) for (const [eid, e] of def.edges) if (want.has([e.a, e.b].sort().join('|'))) ids.add(eid);
        return { path: host.path.slice(), eids: [...ids] };
      });
      btn(t('app.info.make_component_key'), () => makeGroup('component'));
      btn(t('app.info.make_group_key'), () => makeGroup('group'));
    }
    void rows;
    ui.info.replaceChildren(props, ...notes, actions);
  }

  // ---- units ----
  ui.units.value = model.units;
  ui.units.addEventListener('change', () => {
    model.units = ui.units.value;
    print(t(model.units === 'ft-in' ? 'app.units.set.ftin' : 'app.units.set', { unit: unitWords(model.units) }));
    scheduleInfo();
    view.invalidate();
    if (tools.tool.lastEv) tools.tool.hover?.(tools.tool.lastEv);
  });

  // ---- files ----
  function newModel() {
    tools.escape();
    model.reset();
    model.units = newUnits();
    ui.units.value = model.units;
    host.path = []; host.sel = [];
    fileName = t('app.file.untitled');
    saveTarget = null;
    adoc.clean();
    sceneIndex = -1;
    view.style = { ...view.style, mode: 'shaded', edges: true, shadows: false };
    renderSettings = null;
    model.images.clear();
    styleToUi();
    cam.eye = [9, -12, 8]; cam.target = [0, 0, 1];
    setTool('select');
    renderScenes(); scheduleInfo(); view.invalidate();
    print(t('app.new'));
  }
  // Files go through the shell's host adapter (host.js, 0.4 W.2): the browser's picker and downloads, or the desktop
  // app's own dialogs, where Save writes the opened file in place. Exports are always a copy.
  const fileHost = getHost({ app: 'modelcraft' });
  let saveTarget = null;   // the HostFile the open model came from, when Save can write it in place
  const MODEL_TYPES = [{ description: t('app.file.type.model'), extensions: ['.modelcraft'] }];
  const IMPORT_TYPES = [{ description: t('app.file.type.import'), extensions: ['.skp', '.dae', '.obj', '.glb', '.gltf', '.dwg', '.dxf'] }];
  const download = (bytes, name, type) => fileHost.download(bytes instanceof Blob || typeof bytes === 'string' ? bytes : new Blob([bytes], { type }), name, type);
  const base = () => fileName.replace(/\.(modelcraft|json)$/i, '') || t('app.file.untitled');
  const modelText = () => {
    // the file keeps the current camera and style for next time, outside the undo history
    const j = model.toJSON();
    j.view = { cam: cam.toJSON(), style: view.style };
    const imgs = model.imagesJSON();
    if (imgs.length) j.images = imgs;   // 0.5 RC.11 (b): imported textures, beside the model (outside undo)
    if (renderSettings) j.view.render = renderSettings;   // 0.5 RC.11: the Render dialog's settings and looks
    return JSON.stringify(j);
  };
  async function saveModel() {
    tools.escape();
    const name = base() + '.modelcraft';
    const r = await fileHost.save({ target: saveTarget, data: modelText(), name, types: MODEL_TYPES });
    if (!r.ok) { if (!r.cancelled) print(t('app.save.failed', { error: String(r.error?.message || r.error || '') })); return false; }
    if (r.target?.writable) saveTarget = r.target;
    model.dirty = false;
    adoc.clean();
    print(r.how === 'written' ? t('app.save.written', { file: r.path || r.name || name }) : t('app.save.downloaded', { file: name }));
    return true;
  }
  // spikes (0.5): menu items that show only with ?spike=<name> in the address (lab experiments, never on by default)
  { const sp = new URLSearchParams(location.search).get('spike'); root.querySelectorAll('[data-spike]').forEach((b) => { b.hidden = b.dataset.spike !== sp; }); }
  root.querySelectorAll('[data-export]').forEach((b) => b.addEventListener('click', async () => {
    closeMenus();
    tools.escape();
    const kind = b.dataset.export;
    try {
      if (kind === 'print3d') { await print3d(); return; }
      if (kind === 'render') {
        // a rendered picture of the view (0.5 RC.11): the shared renderer in render/, ModelCraft's adapter render-mc.js
        if (!model.root.faces.size && !model.root.insts.size) { print(t('app.export.empty')); return; }
        const [{ openRenderDialog }, { mcScene, mcColors }] = await Promise.all([import('./render/render-ui.js'), import('./render-mc.js')]);
        openRenderDialog({
          scene: (s) => mcScene(model, cam, view.style, s),
          viewSize: () => ({ w: ui.gl.clientWidth, h: ui.gl.clientHeight }),
          colors: () => mcColors(model),
          modelSun: () => { const s = view.style.sun || {}; return { month: s.month || 6, day: s.day || 21, hour: s.hour ?? 15 }; },
          settings: renderSettings,
          save: (s) => { renderSettings = s; },
          download: (blob, name) => download(blob, name, 'image/png'),
          fileBase: base,
          onClose: () => { view.invalidate(); ui.over.focus({ preventScroll: true }); },
          parent: root,
        });
        return;
      }
      if (kind === 'pdf' || kind === 'print') {
        // the view on a page (0.4 M13): twice its screen size, with what it shows (dimensions too), and a caption
        const blob = await view.png(2, kind === 'pdf' ? 'image/jpeg' : 'image/png', 0.92);   // i18n-ignore: media types
        const bmp = await createImageBitmap(blob), w = bmp.width, h = bmp.height;
        bmp.close?.();
        const caption = t('app.print.caption', { file: base(), date: new Date().toLocaleDateString(i18n.locale() === 'en-XA' ? 'en' : i18n.locale(), { dateStyle: 'medium' }), unit: unitWords(model.units) });
        const paper = model.units === 'ft-in' || model.units === 'in' ? 'letter' : 'a4';   // i18n-ignore: paper keys
        if (kind === 'pdf') {
          const { viewPdf } = await import('./viewpdf.js');
          const pdf = viewPdf({ jpeg: new Uint8Array(await blob.arrayBuffer()), width: w, height: h, caption, paper });
          download(pdf, base() + '.pdf', 'application/pdf');
          print(t('app.export.pdf', { file: base() + '.pdf', paper: t(paper === 'a4' ? 'app.print.a4' : 'app.print.letter') }));
        } else printView(blob, caption, paper);
        return;
      }
      if (kind === 'png' || kind === 'png2') {
        // the view as an image (0.4 1.7): what is on screen; presentation view (Shift+P) for a clean one
        const scale = kind === 'png2' ? 2 : 1, blob = await view.png(scale), name = pngName(base(), scale);
        download(blob, name, 'image/png');
        print(t(presentation ? 'app.export.png' : 'app.export.png.tip', { file: name, w: Math.round(ui.gl.clientWidth * view.renderer.getPixelRatio() * scale), h: Math.round(ui.gl.clientHeight * view.renderer.getPixelRatio() * scale) }));
        return;
      }
      if (!model.root.faces.size && !model.root.insts.size && !model.root.edges.size) { print(t('app.export.empty')); return; }
      if (kind === 'glb') download(exportGLB(model), base() + '.glb', 'model/gltf-binary');
      else if (kind === 'dae') download(exportDAE(model, { name: base() }), base() + '.dae', 'model/vnd.collada+xml');
      else if (kind === 'obj') {
        // colours (M8): the .obj names a .mtl with one material per colour, downloaded beside it
        let colored = false;
        model.walk((d, wm, path, pc) => { if (pc || [...d.faces.values()].some((f) => f.color)) colored = true; });
        if (colored) { download(exportOBJ(model, { mtl: base() + '.mtl' }), base() + '.obj', 'text/plain'); setTimeout(() => download(exportMTL(model), base() + '.mtl', 'text/plain'), 400); }
        else download(exportOBJ(model), base() + '.obj', 'text/plain');
      }
      else if (kind === 'stl') download(exportSTL(model), base() + '.stl', 'model/stl');
      else if (kind === 'ifc') download(exportIFC(model, { name: base() }), base() + '.ifc', 'application/x-step');
      else if (kind === 'dxf' || kind === 'dwg') {
        // CAD programs: 3D faces, lines, groups and components as blocks, in the model's unit (0.4 M2)
        let r, data;
        if (kind === 'dxf') { r = exportDXF(model); data = r.text; } else {
          let W = null;
          // the page's import map lists every file of this build: no DWG writer there = not in this build (no 404 fetch)
          const map = (() => { try { return JSON.parse(document.querySelector('script[type="importmap"]')?.textContent || 'null')?.imports || null; } catch { return null; } })();
          const wurl = new URL('./dwg/write.js', import.meta.url);
          const listed = !map || Object.keys(map).some((k) => { try { return new URL(k, location.href).pathname === wurl.pathname; } catch { return false; } });
          if (listed) W = await import('./dwg/write.js').catch(() => null);
          if (!W) { print(t('app.export.dwg.none')); return; }
          r = toDwgModel(model, { created: new Date() });
          data = W.writeDwg(r.dwg, { version: 'AC1018' }).bytes;
        }
        download(data, base() + '.' + kind, kind === 'dxf' ? 'image/vnd.dxf' : 'image/vnd.dwg');
        const R = r.report;
        print(t('app.export.cad', { file: base() + '.' + kind, unit: unitWords(model.units === 'ft-in' ? 'in' : model.units), faces: R.triangles, lines: R.lines, blocks: R.blocks, inserts: R.inserts }) + (R.flattened ? ' ' + t('app.export.cad.flat', { n: R.flattened }) : ''));
        return;
      }
      print(t(kind === 'ifc' && model.storeys.length ? 'app.export.done.ifc_storeys' : ['stl', 'ifc', 'dae'].includes(kind) ? 'app.export.done.' + kind : 'app.export.done', { file: base() + '.' + kind, n: model.storeys.length }));
    } catch (err) { print(t('app.export.failed', { error: err.message })); }
  }));

  /**
   * Check for 3D printing (0.5 SG.4, #531): the selection, or everything shown, as a printer mesh (mm, Z up) through
   * print3d.js — closed, faces the right way, not passing through itself; size, volume, base, overhangs — then STL or
   * 3MF of exactly that mesh. Both modules load on first use.
   */
  async function print3d() {
    const [P, { printTriangles }] = await Promise.all([import('./print3d.js'), import('./print-mc.js')]);
    const { tris, what } = printTriangles(model, { path: host.path, sel: host.sel });
    print(t('app.print3d.checking'));
    await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
    const rep = P.printCheck(P.meshFromTriangles(tris));
    const mm = (v) => (Math.round(v * 10) / 10).toLocaleString(i18n.locale() === 'en-XA' ? 'en' : i18n.locale());
    const facts = el('ul', { className: 'mc-print-facts' },
      el('li', {}, t(what === 'selection' ? 'app.print3d.what.sel' : 'app.print3d.what.all')),
      rep.size ? el('li', {}, t('app.print3d.size', { w: mm(rep.size[0]), d: mm(rep.size[1]), h: mm(rep.size[2]) })) : null,
      rep.volume != null ? el('li', {}, t('app.print3d.volume', { v: mm(rep.volume / 1000) })) : null,
      el('li', {}, t('app.print3d.tris', { n: rep.triangles })));
    const line = (k, x) => el('li', {}, t(k, x));
    const problems = rep.problems.map((p) => line('app.print3d.p.' + p.kind, { n: p.n }));
    const warnings = rep.warnings.map((w) => line('app.print3d.w.' + w.kind, { n: w.n || 0, share: Math.max(1, Math.round((w.share || 0) * 100)), angle: w.angle || 45 }));
    const body = el('div', { className: 'mc-print' },
      el('p', { className: 'mc-print-verdict', dataset: { printOk: rep.ok ? '1' : '0' } }, t(rep.ok ? 'app.print3d.ready' : 'app.print3d.notready')),
      problems.length ? el('ul', { className: 'mc-print-problems', dataset: { printProblems: '' } }, ...problems) : null,
      warnings.length ? el('ul', { className: 'mc-print-warnings', dataset: { printWarnings: '' } }, ...warnings) : null,
      facts,
      problems.length && rep.problems[0].kind !== 'empty' ? el('p', { className: 'mc-note' }, t('app.print3d.fixhint')) : null);
    print(t(rep.ok ? 'app.print3d.ready' : 'app.print3d.notready'));
    if (!rep.triangles) { await ask({ title: t('app.print3d.title'), body, buttons: [['cancel', t('app.btn.close'), 'btn-plot']] }); return; }
    const key = await ask({ title: t('app.print3d.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'btn-line'], ['stl', t('app.print3d.stl'), 'btn-line'], ['3mf', t('app.print3d.3mf'), 'btn-plot']] });
    if (key !== 'stl' && key !== '3mf') return;
    const file = base() + '.' + key;
    if (key === 'stl') download(P.stlBinary(rep.mesh, 'ModelCraft ' + base()), file, 'model/stl');   // i18n-ignore: the STL header
    else download(P.threeMF(rep.mesh, { name: base(), app: 'ModelCraft' }), file, 'model/3mf');   // i18n-ignore: an app name in the file
    print(t('app.print3d.done', { file, n: rep.mesh.indices.length / 3 }));
  }

  // the hidden inputs stay for browsers without the host picker's handles (and for tests: setInputFiles)
  ui.fileOpen.addEventListener('change', () => { const f = ui.fileOpen.files[0]; ui.fileOpen.value = ''; if (f) openFile(f); });
  ui.fileImport.addEventListener('change', () => { const f = ui.fileImport.files[0]; ui.fileImport.value = ''; if (f) importFile(f); });
  const isModelFile = (f) => /\.(modelcraft|json)$/i.test(f.name);
  const bytesOf = async (f) => (typeof f.bytes === 'function' ? new Uint8Array(await f.bytes()) : new Uint8Array(await f.arrayBuffer()));
  /** A file from the host (picker, double-click, recent list, drop): a model opens, anything else is imported. */
  async function openFromHost(hf, { asked = false } = {}) {
    if (!hf) return;
    if (!isModelFile(hf)) { await importFile(hf); return; }
    if (!asked && !(await confirmDiscard())) return;
    if (await openFile(hf)) saveTarget = hf.writable ? hf : null;
  }
  fileHost.onOpenFiles(async (files) => { for (const f of files.slice(0, 1)) await openFromHost(f); });

  async function openFile(file, { recovered = false } = {}) {
    if (!isModelFile(file)) { importFile(file); return false; }
    try {
      if ((file.size || 0) > 200 * 1048576) throw new Error(t('app.open.toobig'));
      const j = JSON.parse(await file.text());
      tools.escape();
      model.setImages(j.images);   // 0.5 RC.11 (b): the file's imported textures (untrusted: checked)
      for (const k of [...texMats.keys()]) if (k.startsWith('img:')) texMats.delete(k);
      model.load(j);
      host.path = []; host.sel = [];
      saveTarget = null;
      fileName = file.name;
      sceneIndex = -1;
      const v = j.view && cleanScene({ name: 'v', cam: j.view.cam, style: j.view.style });
      if (v) { cam.set(v.cam); view.style = v.style; perspBtn.setAttribute('aria-checked', String(cam.persp)); } else zoomExtents();
      renderSettings = j.view && j.view.render && typeof j.view.render === 'object' ? j.view.render : null;   // cleaned when the dialog opens
      ui.units.value = model.units;
      styleToUi(); renderScenes(); setTool('select'); hideHint();
      scheduleInfo(); view.invalidate();
      if (recovered) { model.dirty = true; print(t('app.open.recovered', { file: file.name })); }
      else { adoc.clean(); print(t('app.open.done', { file: file.name })); }
      return true;
    } catch (err) {
      print(err instanceof SyntaxError ? t('app.open.notjson') : err.message);
      return false;
    }
  }
  async function importFile(file) {
    const ext = (file.name.match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();
    const name = file.name.replace(/\.[^.]+$/, '').slice(0, 80) || t('app.import.default');
    if (!['skp', 'dae', 'obj', 'glb', 'gltf', 'dwg', 'dxf'].includes(ext)) { print(t('app.import.kind', { file: file.name })); return; }
    try {
      if ((file.size || 0) > 300 * 1048576) throw new Error(t('app.import.toobig'));
      tools.escape();
      let r;
      if (ext === 'dxf' || ext === 'dwg') {
        // site plans: lines, polylines with bulges, circles, arcs and blocks → edges on the ground
        let read, dwgModel = null;   // dwgModel: 0.5 DB.11 (its dynamic blocks are listed after the import)
        if (ext === 'dxf') {
          const text = await file.text();
          read = (m, opts) => importDXF(m, text, name, opts);
        } else {
          const bytes = await bytesOf(file);
          print(t('app.import.reading', { file: file.name }));
          const { readDWG } = await import('./dwg-reader.js');
          await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));   // let the status paint: reading takes a moment on big files
          const dwg = await readDWG(bytes);
          dwgModel = dwg;
          read = (m, opts) => importDWG(m, dwg, name, opts);
        }
        let unit = null;
        if (!read(new Model(), {}).units) {
          unit = await ask({ title: t('app.import.units.h'), text: t('app.import.units.text', { kind: ext.toUpperCase() }), buttons: [['cancel', t('app.btn.cancel'), 'btn-line'], ['in', t('app.import.units.in'), 'btn-line'], ['ft', t('app.import.units.ft'), 'btn-line'], ['mm', t('app.import.units.mm'), 'btn-line'], ['m', t('app.import.units.m'), 'btn-plot']] });
          if (unit === 'cancel') return;
        }
        r = model.change(t('app.undo.import_site'), (m) => { const x = read(m, { unit: unit || undefined }); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        const R = r.report;
        if (!r.def.edges.size) print(t('app.import.site.empty', { file: file.name }) + skipped(R));
        else print(t('app.import.site', { file: file.name, edges: r.def.edges.size }) + (r.def.faces.size ? ' ' + t('app.import.site.faces', { n: r.def.faces.size }) : '') + (R.texts ? ' ' + t('app.import.site.texts', { n: R.texts }) : '') + ' ' + t('app.import.site.group') + skipped(R) + dynamicNote(dwgModel));
      } else if (ext === 'skp') {
        // SketchUp: our own reader (cc-skp, ./skp/), loaded on the first .skp
        const bytes = await bytesOf(file);
        print(t('app.import.skp.reading', { file: file.name }));
        const [{ readSkp }, { importSKP }] = await Promise.all([import('./skp/read.js'), import('./skp-import.js')]);
        await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
        const skp = await readSkp(bytes);
        r = model.change(t('app.undo.import_skp'), (m) => { const x = importSKP(m, skp, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        const rep = r.report;
        print(t('app.import.skp.done', { file: file.name, version: rep.version, faces: rep.faces, n: rep.components })
          + (rep.tags ? ' ' + t('app.import.skp.tags', { n: rep.tags }) : '')
          + (rep.hidden ? ' ' + t('app.import.skp.hidden', { n: rep.hidden }) : '')
          + (rep.untagged ? ' ' + t('app.import.skp.untagged', { n: rep.untagged }) : '')
          + (rep.texturedKept ? ' ' + t('app.import.skp.textures_kept', { n: rep.texturedKept }) : '')
          + (rep.textured > (rep.texturedKept || 0) ? ' ' + t('app.import.skp.textures', { n: rep.textured - (rep.texturedKept || 0) }) : '') + skipped(rep));
      } else if (ext === 'dae') {
        const text = await file.text();
        r = model.change(t('app.undo.import_dae'), (m) => { const x = importDAE(m, text, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        const rep = r.report;
        const conv = [rep.up !== 'Z_UP' && t('app.import.dae.up', { axis: rep.up === 'Y_UP' ? 'Y' : 'X' }), rep.meter !== 1 && t('app.import.dae.unit', { m: rep.meter })].filter(Boolean);
        print((rep.components ? t('app.import.dae.comps', { file: file.name, faces: rep.faces, n: rep.components }) : t('app.import.dae', { file: file.name, n: rep.faces }))
          + (conv.length ? ' ' + t('app.import.dae.converted', { how: conv.join(', ') }) : '') + skipped(rep));
      } else if (ext === 'obj') {
        const text = await file.text();
        r = model.change(t('app.undo.import_obj'), (m) => { const x = importOBJ(m, text, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        print(t('app.import.dae', { file: file.name, n: r.def.faces.size }) + skipped(r.report));
      } else {
        const bytes = await bytesOf(file);
        r = model.change(t('app.undo.import_gltf'), (m) => { const x = importGLTF(m, bytes, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        print(t('app.import.dae', { file: file.name, n: r.def.faces.size }) + skipped(r.report));
      }
      const iid = [...ctxDef().insts.keys()].pop();
      host.setSel([{ t: 'i', id: iid }]);
      hideHint();
      zoomExtents();
    } catch (err) { print(t('app.import.failed', { file: file.name, error: err.message })); }
  }
  const skipped = (rep) => {
    const s = rep && rep.skipped ? Object.entries(rep.skipped).filter(([, n]) => n) : [];
    return s.length ? ' ' + t('app.import.skipped', { list: s.map(([k, n]) => n + ' ' + k).join(', ') }) : '';
  };

  // drop
  let dragDepth = 0;
  ui.stage.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types?.includes('Files')) { dragDepth++; ui.drop.hidden = false; e.preventDefault(); } });
  ui.stage.addEventListener('dragover', (e) => { if (e.dataTransfer?.types?.includes('Files')) e.preventDefault(); });
  ui.stage.addEventListener('dragleave', () => { if (--dragDepth <= 0) { dragDepth = 0; ui.drop.hidden = true; } });
  ui.stage.addEventListener('drop', async (e) => {
    e.preventDefault();
    dragDepth = 0; ui.drop.hidden = true;
    const [f] = await fileHost.fromDrop(e.dataTransfer);
    await openFromHost(f);
  });

  // ---- dialogs ----
  function focusView() { if (document.activeElement === ui.over) ui.over.blur(); ui.over.focus({ preventScroll: true }); }
  function ask({ title, text, body, buttons }) {
    return new Promise((done) => {
      const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-ask-h' },
        el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-ask-h' }, title)),
        body ? el('div', { className: 'mc-dialog-text' }, body) : el('p', { className: 'mc-dialog-text' }, text),
        el('div', { className: 'mc-dialog-foot' }, ...buttons.map(([key, label, cls]) => el('button', { type: 'button', className: cls + ' btn-sm-cc', dataset: { key } }, label))));
      let result = 'cancel';
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (b) { result = b.dataset.key; dlg.close(); } });
      dlg.addEventListener('close', () => { dlg.remove(); focusView(); done(result); });
      root.append(dlg);
      dlg.showModal();
      dlg.querySelector('button[data-key="cancel"]')?.focus();
    });
  }
  function askText(title, label, value) {
    return new Promise((done) => {
      const inp = el('input', { type: 'text', className: 'mc-input', value, maxLength: 80, id: 'mc-ask-input' });
      const form = el('form', { method: 'dialog' },
        el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-ask-h' }, title)),
        el('div', { className: 'mc-dialog-text' }, el('label', { for: 'mc-ask-input', className: 'mc-note' }, label), inp),
        el('div', { className: 'mc-dialog-foot' },
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('app.btn.cancel')),
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, t('app.btn.save'))));
      const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-ask-h' }, form);
      let result = null;
      form.addEventListener('submit', () => { result = inp.value.trim() || null; });
      dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
      dlg.addEventListener('close', () => { dlg.remove(); focusView(); done(result); });
      root.append(dlg);
      dlg.showModal();
      inp.focus(); inp.select();
    });
  }
  /** Print the view (0.4 M13): a page with the image and its caption in a hidden frame, then the browser's print dialog (where "Save as PDF" is a choice too). */
  function printView(blob, caption, paper) {
    const url = URL.createObjectURL(blob);
    const frame = el('iframe', { className: 'visually-hidden', title: t('app.print.frame'), 'aria-hidden': 'true' });
    frame.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>@page{size:${paper === 'a4' ? 'A4' : 'letter'} landscape;margin:12mm}html,body{margin:0}img{display:block;max-width:100%;max-height:calc(100vh - 2.5em);margin:0 auto}p{font:9pt system-ui,sans-serif;margin:.5em 0 0}</style></head><body><img alt=""><p></p></body></html>`;   // i18n-ignore: the print page
    frame.addEventListener('load', () => {
      const d = frame.contentDocument, img = d.querySelector('img');
      d.querySelector('p').textContent = caption;
      const go = () => { frame.contentWindow.focus(); frame.contentWindow.print(); setTimeout(() => { frame.remove(); URL.revokeObjectURL(url); }, 60000); };
      img.addEventListener('load', go, { once: true });
      img.src = url;
    }, { once: true });
    document.body.append(frame);
    print(t('app.print.opening'));
  }
  // ---- Components that stretch (0.4 M26) ----
  const dynLib = () => import('./dynamic.js');
  const RULES = ['auto', 'stretch', 'start', 'end', 'move', 'scale', 'repeat'];   // i18n-ignore: rule keys
  async function partRules(props, comp, iid) {
    const D = await dynLib(), inst = comp.insts.get(iid);
    if (!inst) return;
    const B = model.bbox(comp), part = D.partsOf(model, comp).find((p) => p.iid === iid);
    if (!B || !part) return;
    const box = el('div', { className: 'mc-props mc-rules' }, el('span', { className: 'k mc-rules-h' }, t('app.dyn.rules')));
    ['x', 'y', 'z'].forEach((ax, k) => {
      const id = 'mc-rule-' + ax;
      const sel = el('select', { id, className: 'mc-select' }, ...RULES.map((r) => el('option', { value: r }, r === 'auto' ? t('app.dyn.rule.auto', { rule: t('app.dyn.rule.' + D.ruleOf({ inst: { rule: {} }, box: part.box }, k, B)) }) : t('app.dyn.rule.' + r))));
      sel.value = inst.rule?.[ax] || 'auto';
      sel.addEventListener('change', () => { model.change(t('app.undo.rule'), (m) => { const i = m.def(comp.id).insts.get(iid); i.rule = { ...(i.rule || {}), [ax]: sel.value }; if (sel.value === 'auto') delete i.rule[ax]; if (!Object.keys(i.rule).length) delete i.rule; }, [comp.id]); scheduleInfo(); });
      box.append(el('label', { for: id }, t('app.dyn.axis.' + ax)), sel);
      if (inst.rule?.[ax] === 'repeat') {
        const sp = el('input', { type: 'text', className: 'mc-input', value: formatLength(inst.rule['s' + ax] || (part.box.max[k] - part.box.min[k]) * 2, model.units), 'aria-label': t('app.dyn.spacing') });
        sp.addEventListener('change', () => { const v = parseLength(sp.value, model.units); if (!(v > 0)) { print(t('app.len.bad')); return; } model.change(t('app.undo.rule'), (m) => { m.def(comp.id).insts.get(iid).rule['s' + ax] = v; }, [comp.id]); });
        box.append(el('label', {}, t('app.dyn.spacing')), sp);
      }
    });
    props.after(box);
  }
  async function stretchDialog(iid) {
    const D = await dynLib(), def0 = ctxDef(), inst = def0.insts.get(iid);
    if (!inst) return;
    const cur = model.def(inst.def), src = (cur.dyn && model.def(cur.dyn.src)) || cur, bb = model.bbox(cur), u = model.units;
    const f = (id, v) => el('input', { type: 'text', id, className: 'mc-input', value: formatLength(v, u), autocomplete: 'off' });
    const W = f('mc-dy-w', bb.max[0] - bb.min[0]), Dp = f('mc-dy-d', bb.max[1] - bb.min[1]), H = f('mc-dy-h', bb.max[2] - bb.min[2]);
    const err = el('p', { className: 'mc-note', role: 'alert' });
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-dy-h2' }, t('app.dyn.h', { name: src.name }))),
      el('div', { className: 'mc-dialog-text mc-props' }, el('label', { for: 'mc-dy-w' }, t('app.info.width')), W, el('label', { for: 'mc-dy-d' }, t('app.info.depth')), Dp, el('label', { for: 'mc-dy-h' }, t('app.info.height')), H),
      el('p', { className: 'mc-note' }, t('app.dyn.note')), err,
      el('div', { className: 'mc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('app.btn.cancel')),
        el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, t('app.dyn.go'))));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-dy-h2' }, form);
    let size = null;
    form.addEventListener('submit', (e) => {
      const s = [W, Dp, H].map((x) => parseLength(x.value, u));
      if (s.some((v) => v === null || !(v >= 0))) { e.preventDefault(); err.textContent = t('app.dyn.bad'); return; }
      size = s;
    });
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', () => {
      dlg.remove(); focusView();
      if (!size) return;
      model.change(t('app.undo.stretch'), (m) => {
        const d = m.context(host.path).def, i = d.insts.get(iid);
        const nd = D.stretchDef(m, m.def(src.id), size, m.uniqueName(src.name.replace(/#\d+$/, '')));
        i.def = nd.id;
        m.purge();
      }, [model.context(host.path).def.id]);
      print(t('app.dyn.done', { name: src.name, size: size.map((v) => formatLength(v, u)).join(' × ') }));
      afterHistory();
    });
    root.append(dlg);
    dlg.showModal();
    W.focus(); W.select();
  }
  // ---- Starter library (0.4 M25): about thirty everyday things, built when picked, then placed on the face you click ----
  $('[data-starter]').addEventListener('click', async () => {
    const { STARTER } = await import('./starter.js');
    const cats = [...new Set(STARTER.map((s) => s.cat))];
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-sl-h' }, t('app.starter.h'))),
      el('p', { className: 'mc-note' }, t('app.starter.note')),
      ...cats.map((c) => el('section', { className: 'mc-starter' }, el('h3', { className: 'mc-h' }, t('app.starter.cat.' + c)),
        el('div', { className: 'mc-starter-grid' }, ...STARTER.filter((s) => s.cat === c).map((s) => el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: s.id, dataset: { starter: s.id } }, t('app.starter.' + s.id)))))),
      el('div', { className: 'mc-dialog-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('app.btn.cancel'))));
    const dlg = el('dialog', { className: 'mc-dialog mc-dialog-wide', 'aria-labelledby': 'mc-sl-h' }, form);
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', () => { const id = dlg.returnValue; dlg.remove(); focusView(); if (id && id !== 'cancel') placeStarter(id); });
    root.append(dlg);
    dlg.showModal();
  });
  async function placeStarter(id) {
    const { STARTER, buildStarter } = await import('./starter.js');
    const it = STARTER.find((s) => s.id === id);
    if (!it) return;
    const name = t('app.starter.' + id);
    // one definition per starter thing: picking it again places another copy of the same component
    let def = [...model.defs.values()].find((d) => d.kind === 'component' && d.starter === id);
    if (!def) def = model.change(t('app.undo.starter'), (m) => { const d = buildStarter(m, id, name); d.starter = id; return d; }, []);
    afterHistory();
    const hint = () => t(it.wall ? 'app.starter.where_wall' : 'app.starter.where', { name });
    setTool('place', { defId: def.id, align: true, hint });
    print(hint());
  }
  // ---- Terrain (0.4 M24): from contour lines, or a grid to sculpt ----
  const terrainLib = () => import('./terrain.js');
  async function terrainFromSelection() {
    const def = ctxDef(), eids = host.sel.filter((s) => s.t === 'e').map((s) => s.id);
    const pts = new Set(); for (const id of eids) { const e = def.edges.get(id); if (e) { pts.add(e.a); pts.add(e.b); } }
    if (pts.size < 3) { print(t('app.terrain.need')); return; }
    const L = await terrainLib();
    let iid = null;
    model.change(t('app.undo.terrain'), (m) => {
      const d = L.terrainFromContours(m, m.context(host.path).def, eids, { name: t('app.terrain.name') });
      if (d) iid = m.place(m.context(host.path).def, d.id, ident());
    }, [model.context(host.path).def.id]);
    if (iid === null) { print(t('app.terrain.flat')); return; }
    host.setSel([{ t: 'i', id: iid }]);
    const d = model.def(ctxDef().insts.get(iid).def);
    print(t('app.terrain.made', { n: d.faces.size }));
    afterHistory();
  }
  function terrainGridDialog() {
    const u = model.units, metric = !(u === 'ft-in' || u === 'in');
    const fld = (id, v) => el('input', { type: 'text', id, className: 'mc-input', value: formatLength(v, u), autocomplete: 'off' });
    const w = fld('mc-tg-w', metric ? 20 : 6.096 * 3), dp = fld('mc-tg-d', metric ? 20 : 6.096 * 3), sp = fld('mc-tg-s', metric ? 1 : 0.6096);
    const err = el('p', { className: 'mc-note', role: 'alert' });
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-tg-h' }, t('app.terrain.grid.h'))),
      el('div', { className: 'mc-dialog-text mc-props' }, el('label', { for: 'mc-tg-w' }, t('app.terrain.grid.w')), w, el('label', { for: 'mc-tg-d' }, t('app.terrain.grid.d')), dp, el('label', { for: 'mc-tg-s' }, t('app.terrain.grid.s')), sp),
      el('p', { className: 'mc-note' }, t('app.terrain.grid.note')), err,
      el('div', { className: 'mc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('app.btn.cancel')),
        el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, t('app.text3d.place'))));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-tg-h' }, form);
    let go = null;
    form.addEventListener('submit', (e) => {
      const W = parseLength(w.value, u), D = parseLength(dp.value, u), S = parseLength(sp.value, u);
      if (!(W > 0 && D > 0 && S > 0)) { e.preventDefault(); err.textContent = t('app.terrain.grid.bad'); return; }
      go = { width: W, depth: D, spacing: S };
    });
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', async () => {
      dlg.remove(); focusView();
      if (!go) return;
      const L = await terrainLib();
      const defId = model.change(t('app.undo.terrain'), (m) => L.terrainGrid(m, { ...go, name: t('app.terrain.name') }).id, []);
      afterHistory();
      setTool('place', { defId, hint: () => t('app.terrain.grid.where') });
      print(t('app.terrain.grid.where'));
    });
    root.append(dlg);
    dlg.showModal();
    w.focus(); w.select();
  }
  // ---- IFC storeys (0.4 M12): a name and an elevation each; IFC export puts every top-level group on the storey at or below it ----
  function storeysDialog() {
    const u = model.units;
    const list = el('div', { className: 'mc-storeys' });
    const row = (s) => {
      const nm = el('input', { type: 'text', className: 'mc-input', value: s.name, maxLength: 80, 'aria-label': t('app.storeys.name') });
      const ev = el('input', { type: 'text', className: 'mc-input', value: formatLength(s.elevation, u), autocomplete: 'off', 'aria-label': t('app.storeys.elevation') });
      const r = el('div', { className: 'mc-storey' }, nm, ev, el('button', { type: 'button', className: 'mc-icon', title: t('app.storeys.remove'), 'aria-label': t('app.storeys.remove'), onclick: () => r.remove() }, el('i', { className: 'bi bi-trash3', 'aria-hidden': 'true' })));
      list.append(r);
      return nm;
    };
    for (const s of model.storeys) row(s);
    const guess = () => {
      // the different heights the top-level groups and components stand on (to the centimeter)
      const zs = new Set();
      for (const inst of model.root.insts.values()) { const d = model.def(inst.def), bb = d && model.bbox(d, inst.m); if (bb) zs.add(Math.round(bb.min[2] * 100) / 100); }
      if (!zs.size) zs.add(0);
      list.replaceChildren();
      [...zs].sort((a, b) => a - b).forEach((z, k) => row({ name: t('app.storeys.level', { n: k + 1 }), elevation: z }));
    };
    const err = el('p', { className: 'mc-note', role: 'alert' });
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-st-h' }, t('app.storeys.h'))),
      el('p', { className: 'mc-note' }, t('app.storeys.note')),
      el('div', { className: 'mc-storey mc-storey-head', 'aria-hidden': 'true' }, el('span', {}, t('app.storeys.name')), el('span', {}, t('app.storeys.elevation')), el('span', {})),
      list, err,
      el('div', { className: 'mc-actions' },
        el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { const last = [...list.children].pop(); const z = last ? parseLength(last.children[1].value, u) : null; row({ name: t('app.storeys.level', { n: list.children.length + 1 }), elevation: z === null ? 0 : z + 3 }).focus(); } }, t('app.storeys.add')),
        el('button', { type: 'button', className: 'mc-linkbtn', onclick: guess }, t('app.storeys.guess'))),
      el('div', { className: 'mc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('app.btn.cancel')),
        el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, t('app.btn.save'))));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-st-h' }, form);
    let next = null;
    form.addEventListener('submit', (e) => {
      const rows = [...list.children].map((r) => ({ name: r.children[0].value.trim(), elevation: parseLength(r.children[1].value, u) }));
      const bad = rows.find((r) => !r.name || r.elevation === null);
      if (bad) { e.preventDefault(); err.textContent = t('app.storeys.bad'); return; }
      const clean = cleanStoreys(rows);
      if (clean.length !== rows.length) { e.preventDefault(); err.textContent = t('app.storeys.same'); return; }
      next = clean;
    });
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', () => {
      dlg.remove(); focusView();
      if (!next) return;
      model.change(t('app.undo.storeys'), (m) => { m.storeys = next; }, []);
      print(next.length ? t('app.storeys.saved', { n: next.length }) : t('app.storeys.none'));
    });
    root.append(dlg);
    dlg.showModal();
  }
  // ---- 3D text (0.4 M11): a dialog, then the text as a component that lies on the face you click ----
  let textLast = { text: '', height: null, depth: 0 };
  function text3dDialog() {
    const u = model.units;
    const field = (id, label, inp) => [el('label', { for: id }, label), inp];
    const txt = el('textarea', { id: 'mc-t3-text', className: 'mc-input', rows: 3, maxLength: 400, spellcheck: false }, textLast.text);
    const h = el('input', { type: 'text', id: 'mc-t3-h', className: 'mc-input', value: formatLength(textLast.height ?? (u === 'ft-in' || u === 'in' ? 0.3048 : 0.3), u), autocomplete: 'off' });
    const dpt = el('input', { type: 'text', id: 'mc-t3-d', className: 'mc-input', value: formatLength(textLast.depth, u), autocomplete: 'off' });
    const err = el('p', { className: 'mc-note', role: 'alert' });
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-t3-h2' }, t('app.text3d.h'))),
      el('div', { className: 'mc-dialog-text mc-props' }, ...field('mc-t3-text', t('app.text3d.text'), txt), ...field('mc-t3-h', t('app.text3d.height'), h), ...field('mc-t3-d', t('app.text3d.depth'), dpt)),
      el('p', { className: 'mc-note' }, t('app.text3d.note')), err,
      el('div', { className: 'mc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('app.btn.cancel')),
        el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, t('app.text3d.place'))));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-t3-h2' }, form);
    let go = null;
    form.addEventListener('submit', (e) => {
      const text = txt.value.replace(/\s+$/, ''), H = parseLength(h.value, u), D = dpt.value.trim() === '' ? 0 : parseLength(dpt.value, u);
      if (!text.trim()) { e.preventDefault(); err.textContent = t('app.text3d.empty'); txt.focus(); return; }
      if (!(H > 0)) { e.preventDefault(); err.textContent = t('app.text3d.badh'); h.focus(); return; }
      if (D === null || !(D >= 0)) { e.preventDefault(); err.textContent = t('app.text3d.badd'); dpt.focus(); return; }
      go = { text, height: H, depth: D };
    });
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', () => { dlg.remove(); focusView(); if (go) placeText(go); });
    root.append(dlg);
    dlg.showModal();
    txt.focus();
  }
  async function placeText(o) {
    textLast = o;
    let M, T3;
    try { print(t('app.text3d.loading')); [T3, M] = await Promise.all([import('./text3d.js'), solidsLib().then((L) => L.manifold())]); }
    catch { print(t('app.solid.noload')); return; }
    let defId;
    try { defId = model.change(t('app.undo.text3d'), (m) => T3.textDef(M, m, o.text, { height: o.height, depth: o.depth }).id, []); }
    catch (err) { print(err.message); return; }
    afterHistory();
    setTool('place', { defId, align: true, hint: () => t('app.text3d.where') });
    print(t('app.text3d.where'));
  }
  async function confirmDiscard() {
    if (!model.dirty) return true;
    const c = await ask({ title: t('app.unsaved.h'), text: t('app.unsaved.text'), buttons: [['cancel', t('app.btn.cancel'), 'btn-line'], ['discard', t('app.unsaved.discard'), 'btn-line'], ['save', t('app.unsaved.save'), 'btn-plot']] });
    if (c === 'save') return saveModel();
    return c === 'discard';
  }
  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  let leaving = false;
  window.addEventListener('beforeunload', (e) => { if (model.dirty && !leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !model.dirty || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmDiscard())) return;
    leaving = true;
    setTimeout(() => location.assign(url.href), model.dirty ? 0 : 800);
  });

  // ---- autosave and crash recovery (0.4 item 1.2; the shell's app-autosave.js) ----
  // The open model is one document. Every edit goes through model.change / commit / undo / redo, which set model.dirty and
  // move model.version; a watcher marks the copy changed and drops it once the model is saved, opened or new again.
  const autosave = new Autosave({ app: 'modelcraft' });
  const adoc = autosave.doc({ id: 'open', name: base(), snapshot: async () => ({ data: modelText(), meta: { name: base() + '.modelcraft' } }) });
  let seenVersion = model.version, copyPending = false;
  setInterval(() => {
    if (model.version === seenVersion) return;
    seenVersion = model.version;
    if (model.dirty) { adoc.rename(base()); adoc.changed(); copyPending = true; } else if (copyPending) { adoc.clean(); copyPending = false; }
  }, 500);
  // automated browsers (tests that leave pages with edits open) see the dialog only when they ask: ?autosave=offer
  if (!navigator.webdriver || new URLSearchParams(location.search).get('autosave') === 'offer') autosave.offer({
    onRecover: async (rec) => {
      if (typeof rec.data !== 'string') throw new Error('This copy is empty.');   // i18n-ignore: shown by the shell's dialog for a damaged copy
      const name = String(rec.meta?.name || rec.name || 'Recovered.modelcraft');
      const ok = await openFile({ name: /\.modelcraft$/i.test(name) ? name : name + '.modelcraft', size: rec.data.length, text: async () => rec.data }, { recovered: true });
      if (!ok) throw new Error('This copy could not be read.');   // i18n-ignore: shown by the shell's dialog
      seenVersion = -1;
    },
  });

  // ---- start ----
  applySettings();
  cam.setSize(view.w, view.h);
  renderScenes();
  scheduleInfo();
  view.invalidate();
  print(t('app.units.start', { unit: unitWords(model.units) }));
  // desktop: the file the app was started with (double-click, "Open with")
  fileHost.launchFiles().then((files) => openFromHost(files[0], { asked: true })).catch(() => {});
  // Studio Live from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the model comes from the host
  if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.modelcraft, fileHost), (err) => print(err.message));
  // ?handoff=<id>: another app ("Open in ModelCraft" in CadCraft) left a file for this tab (handoff.js); it comes in
  // as if dropped here — a DWG or DXF lands as a site plan in a group.
  const handoff = handoffParam(location.search);
  if (handoff) {
    const u = new URL(location.href);
    u.searchParams.delete('handoff');
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    takeHandoff(handoff).then(
      (got) => { if (got?.file) { print(t('app.handoff.opening', { file: got.file.name })); return openFromHost(got.file, { asked: true }); } print(t('app.handoff.gone')); },
      () => print(t('app.handoff.failed')),
    );
  }
}

export { TOOL_NAMES, VIEWS, connected };
