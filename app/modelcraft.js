/* SPDX-License-Identifier: Apache-2.0 */
/**
 * modelcraft.js — the ModelCraft page: wires ui.inc to the model (model.js), the tools (tools.js),
 * the camera (camera.js) and the three.js view (view3d.js). Files open and save on this computer
 * (io.js does the formats); nothing is uploaded.
 *
 * Mouse: the active tool gets the left button; middle-drag orbits, Shift + middle-drag or
 * right-drag pans (Shift pressed or let go during the drag switches), the wheel zooms at the cursor. Orbit turns about
 * the point under the cursor and pan keeps it under the cursor (0.7.1; settings orbitAt, orbitSpeed, panSpeed). Touch: one finger uses the tool, two fingers
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
 *   orbitAt  'cursor' (default: orbit turns about the model point under the cursor, the view centre when there is none) | 'centre'
 *   orbitSpeed, panSpeed  0.25–3 (default 1): cam.orbitSpeed / cam.panSpeed for every orbit and pan (mouse, trackpad, touch, keys)
 * `window.modelcraft` = {model, cam, tools, view, host, ui, settings, clip()} for tests and the console.
 */
import { createViewports } from './viewports-mc.js';
import { Model, connected, eraseSel, unhideAll, hiddenCount, isStacked } from './model.js';
import { Camera, VIEWS } from './camera.js';
import { sceneOf, warmScene, setDimTextSize } from './infer.js';
import { Tools, TOOL_NAMES } from './tools.js';
import { View3D } from './view3d.js';
import './viewimage.js';
import { formatLength, formatVolume, localeUnits, UNIT_LABELS, setLengthPrecision } from './units.js';
import { defaultUnit } from './unit-prefs.js';   // 0.7 UNITS: Settings › General › Units
import './io.js';
import './io/obj.js';      // 0.7 XF.3: OBJ + MTL with textures (io/; io.js's OBJ stays for the m3d copies)
import './io/stl.js';
import './io/ply.js';
import './io/gltf-write.js';   // 0.7 XF.1: glTF with mesh UVs, textures, lamps and cameras (io/; io.js's exportGLB stays for the m3d copies)
import { installSceneHost } from './plc-scene-mc.js';   // 0.8 XE.13: the soft PLC's 3D scene binding (Engines panel)
import { mountUndoHook } from './undo-hook.js';   // 0.8 EG.77: tells Studio each finished step
import { dynamicSummary } from './dwg-dynamic.js';   // 0.5 DB.11 (a byte-identical copy of BimCraft's)
import './sun.js';
import { ident } from './vec.js';
import { el } from './ui-util.js';
import { mountViewCube, mountAxisIcon } from './viewcube.js';
import * as i18n from "./i18n.js";
import { cameraCubeOptions } from './viewcube-camera.js';
import { getHost } from "./host.js";
import { installAgents } from './agents.js';
import { cleanSay } from './scene-say.js';
import { Autosave } from "./app-autosave.js";
import { modelJournal, recoverModelText } from "./autosave-journal.js";   // 0.10 PERF.24: autosave that writes what changed
import './file-text.js';
import './ids-mc.js';   // 0.11 DC.27: each session's ids from its own block   // 0.10 PERF.38: the file text (and the exports) in the page's worker pool
import { handoffParam, takeHandoff } from './handoff.js';
import './render/materials.js';
import './decals-mc.js';   // 0.7 MT.6   // 0.5 RC.7: the material library
import './render/three-mats.js';
import './timeline.js';   // 0.6 LC.10: the animation timeline (render/anim.js)
import './xr-mc.js';   // 0.6 LC.19: review in a headset (xr/), the Issues list
import './input-mouse.js';
import { mountMachineCard, benchParam, openBench } from './compute-mc.js';   // 0.7 CU.1: Settings › Rendering › Your machine; CU.8: ?bench=render
import { guideFacts } from './firstmodel.js';   // 0.6 LC.21: the guided first model   // 0.5 IP.3: the menu style's buttons and wheel (input-modelcraft.js)
import { getWorkspace, MODEL_GROUPS } from './workspaces.js';   // 0.7: Model · Mesh · …
import './mesh/edit-tool.js';   // 0.7 MD.2: the meshedit tool (registers itself into tools.js)
import './ws-mesh.js';   // 0.7 MD.2: the Mesh workspace (registers itself)
import './ws-uv.js';   // 0.7 MD.5: the UV workspace (registers itself)
import './mesh/curve-tool.js';   // 0.7 MD.6: the curve edit tool (registers itself)
import './mesh/sculpt-tool.js';   // 0.7 MD.7: the sculpt tool (registers itself)
import './ws-sculpt.js';   // 0.7 MD.7: the Sculpt workspace (registers itself)
import { materials as fileMaterials, attachShading, makeMaterialFromPhoto } from './ws-shading.js';   // 0.7 MT.1: the Shading workspace (registers itself) and the file's node materials
import { toMesh as curveToMesh } from './ws-curve.js';   // 0.7 MD.6: the Curve workspace (registers itself)
import './ws-render.js';   // 0.7 RN.11: the Render workspace (registers itself)
import { DocData } from './doc-data.js';
import { mountModelShell } from './shell-mount.js';   // 0.8 round 3: the shell's seven modules (calc, reasons, totals, lessons, Suggest, activity, Ask)
import './problems-modelcraft.js';   // 0.8 P.6: the print check as shared Problems
import { readTemplate, writeTemplate, templateOf } from './model-info.js';   // 0.7.1 71.13: Model info (file `info`) + Preferences › New models
import './site-context.js';   // 0.8 EG.63: the site kept in the file
import { curvePanel } from './mesh/curve-panel.js';
import { ModEval, cleanMods, cleanLattice, cleanCurve, VIEW_FACES } from './mesh/mod-eval.js';   // 0.7 MD.3: what a mesh with modifiers shows
import { modPanel } from './mesh/mod-panel.js';
import { cleanGroup } from './group-mods.js';   // 0.8 GH.2: the stack on a group or component
import { setMeshHooks, meshDef } from './model.js';
import './mesh.js';
import './textin.js';
import { mountInfo } from './info-ui.js';
import { mountImport } from './import-ui.js';
import { mountFileOpen } from './file-open-ui.js';
import { mountGuide } from './guide-ui.js';
import { mountPrintCheck } from './print-check-ui.js';
import { mountExport } from './export-ui.js';
import { mountFileSave } from './file-save-ui.js';
import { mountTree } from './tree-ui.js';
import { mountScenes } from './scenes-ui.js';
import { mountViewMenu } from './view-menu-ui.js';
import { mountActions } from './actions-ui.js';
import { mountContextMenu } from './context-menu-ui.js';
import { mountPointer } from './pointer-ui.js';
import { mountPaintLights } from './paint-lights-ui.js';
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
// root plus any toolbar torn off into its own window (app-toolbar-tear.js), so pressed states reach the bar there too (0.9 fix 2026-11-02)
const tearAll = (s) => (window.ccToolbarTear?.all ? window.ccToolbarTear.all(root, s) : [...root.querySelectorAll(s)]);
if (root) init(root);

function init(root) {
  // PERF.71 round two (perf-finish-11 code): the closure's mutable state in one object (tools/perf/main-state.mjs); was one `let` each
  const ST = { fileName: undefined, shell: undefined, selKey: undefined, printSrc: undefined, printAnchors: undefined, printRep: undefined, printChoice: undefined, printAt: undefined, sayState: undefined, renderSettings: undefined, modelFormat: undefined, modelSite: undefined, bimLink: undefined, bimLinksRaw: undefined, modelInfo: undefined, scatterSets: undefined, presentation: undefined, hideRest: undefined, showHidden: undefined, sceneIndex: undefined, timeline: undefined, videoSettings: undefined, xrmc: undefined, playing: undefined, wsId: undefined, wsHost: undefined, sc: undefined, warmJob: undefined, layouts: undefined, selLight: undefined, lightsSeen: undefined, camDrag: undefined, ctxPress: undefined, pinch: undefined, tap: undefined, penBack: undefined, padUntil: undefined, padPivot: undefined, devPivot: undefined, ctxMenu: undefined, solidsMod: undefined, clip: undefined, faceModeBefore: undefined, modeByPointer: undefined, anim: undefined, recording: undefined, infoTimer: undefined, scenesSeen: undefined, treeFilter: undefined, treeDrag: undefined, treeClickEat: undefined, tagsDrawn: undefined, saveTarget: undefined, usedRecord: undefined, jobPool: undefined, usdOpenNote: undefined, surfaces: undefined, surfacesLoading: undefined, nodesEd: undefined, nodesLoading: undefined, liveView: undefined, printReady: undefined, printTools: undefined, beginner: undefined, guideOn: undefined, guideAt: undefined, guideVer: undefined, siteCtx: undefined, dragDepth: undefined, leaving: undefined, seenVersion: undefined, copyPending: undefined };
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
  mountUndoHook({ model });   // 0.8 EG.77
  installSceneHost({ model });
  const cam = new Camera();
  // 0.7 MT.1: the file's node materials (ws-shading.js): pictures from model.images; an edit is an unsaved change (outside undo, like images)
  attachShading({ model, onEdit: () => { model.dirty = true; model.bumpSafe(); } });
  // 0.7 MD.3: modifier stacks are evaluated here (small ones at once, big ones in compute's pool, booleans with manifold-3d)
  const modEval = new ModEval(model, {
    onReady: () => { view.builtFor = null; view.invalidate(); scheduleInfo(); },
    pool: () => import('./compute/runtime.js').then((r) => r.pagePool()),
    manifold: () => import('./solids.js').then((L) => L.manifold()),
    jobUrl: new URL('./mesh/mod-job.js', import.meta.url).href,
  });
  modEval.onNote = (n) => print(t('app.mod.note.' + n));
  // MD.4: the view's subdivision budget follows the machine's tier (Settings › Rendering › Your machine)
  import('./compute-mc.js').then((c) => c.machine()).then(({ info }) => import('./compute/probe.js').then((P) => modEval.setBudget(VIEW_FACES[P.TIER_DEFAULTS[info.tier]?.realtime] || 0))).catch(() => {});
  setMeshHooks({ clean: cleanMods, cleanGroup, cleanLattice, cleanCurve, shown: (d) => modEval.shown(d), rendered: (d) => modEval.rendered(d), lines: (d) => modEval.lines(d) });
  ST.fileName = t('app.file.untitled');
  ST.shell = null;   // 0.8 round 3: shell-mount.js (mounted at the end of init)
  const selListeners = new Set();   // the shell's design reasons listen for the selection
  ST.selKey = '';
  ST.printSrc = null; ST.printAnchors = new Map(); ST.printRep = null; ST.printChoice = null; ST.printAt = -1;   // 0.8 P.6: the print check in Problems (below print3d)
  ST.sayState = null;   // 0.8 EG.61: the words of the scene (scene-say.js cleanSay): time, weather, season, wet colours
  ST.renderSettings = null;   // 0.5 RC.11: the Render dialog's settings (render/looks.js cleanSettings shape), kept in the file's view
  // 0.8 model-08: add-on data in the file (`addons.<id>`, passed through untouched); the door for an add-on is window.ccDocData(id) = {data, setData, keys, onOpen}
  const docData = new DocData(() => { model.dirty = true; scheduleInfo(); });   // outside undo, like images (the toolbar's New/Save follow)
  window.ccDocData = (id) => docData.forAddon(id);
  ST.modelFormat = null;      // 0.8 D8.6: Model info › Precision and text ({precision, dimSize, textHeight}, model-info.js cleanFormat), the file's `format`
  /** Hand the file's format to the kernel (length precision, dimension text size) and redraw. */
  function applyFormat() { setLengthPrecision(ST.modelFormat?.precision ?? null); setDimTextSize(ST.modelFormat?.dimSize ?? 12); showUnits(); view.invalidate(); }
  ST.modelSite = null;        // 0.8 EG.63: the site this model sits in (address, sources + day + licence, outlines), kept from an accepted .ccsite.json; the file's `site` (optional key, site-context.js cleanSite)
  ST.bimLink = null; ST.bimLinksRaw = null;   // 0.11 SU.1814 (su-finish-11): part-link-mc.js, mounted at the end; the file's `bimLinks` until it is
  ST.modelInfo = null;        // 0.7.1 71.13: Model info › About ({author, org, description}, model-info.js cleanInfo), the file's `info`
  ST.scatterSets = [];        // 0.7 RT.5 (session realtime): the live view's scatter sets (rt/rt-scatter.js), kept in the file's view
  ST.presentation = false;   // 0.4 M28: only the model on screen (no axes, guides, marks or selection)
  ST.hideRest = false; ST.showHidden = false;   // 0.7.1 MC-KEYS-COMMANDS: Views › Hide rest of model, Hidden objects (not in the file)
  ST.sceneIndex = -1;
  ST.timeline = null; ST.videoSettings = null; ST.xrmc = null;   // 0.6 LC.10: the animation timeline (mounted below) and the Render video dialog's choices
  ST.playing = null;
  ST.wsId = 'model'; ST.wsHost = null;   // 0.7: the open workspace (workspaces.js) and what it is given
  // a new model's unit comes from the browser's locale (feet and inches in the US, Liberia and
  // Myanmar, millimeters elsewhere); the picker changes it for this model and the file keeps it
  // (0.7 UNITS: or the length unit starred in Settings › General › Units, when ModelCraft has it)
  const MC_UNITS = Object.keys(UNIT_LABELS);   // the model units ModelCraft has (ids as in the shared table)
  // (0.7.1 71.13: Preferences › New models first, when it keeps a start)
  const newUnits = () => readTemplate(MC_UNITS)?.units || defaultUnit('length', { offer: MC_UNITS, fallback: localeUnits((navigator.languages && navigator.languages[0]) || navigator.language || '') });
  model.units = newUnits();

  // ---- host for the tools ----
  ST.sc = null;
  // snapping's trees for what is on screen and the model's undo copy, made in idle time after a change (a big model's first
  // hover and first undo step then have them)
  ST.warmJob = 0;
  const idle = window.requestIdleCallback ? (f) => requestIdleCallback(f, { timeout: 2000 }) : (f) => setTimeout(() => f({ timeRemaining: () => 8 }), 50);
  function warmPicking() {
    if (ST.warmJob) return;
    ST.warmJob = idle(function step(dl) {
      ST.warmJob = 0;
      const more = () => dl.timeRemaining() > 2;
      if (!warmScene(model, more) || !model.warmSnap(more)) ST.warmJob = idle(step);
    });
  }
  // 0.8 SC.5 (part-model_PART_4): a pick is announced to the page (SuperCad Studio hears `cc-pick` and keeps one selection across its panels);
  // a pick from another panel comes back through window.ccPickApply(refs). Both are inert outside Super.
  function announcePick() {
    try { window.dispatchEvent(new CustomEvent('cc-pick', { detail: { app: 'modelcraft', ids: host.sel.filter((x) => x.t === 'i').map((x) => String(x.id)) } })); } catch { /* no window */ }
  }
  const pickApply = (refs) => {
    const def = model.context(host.path)?.def; if (!def) return false;
    const sel = (refs || []).map((r) => Number(r.id)).filter((id) => def.insts.has(id)).map((id) => ({ t: 'i', id }));
    if (!sel.length) return false;
    host.setSel(sel); return true;
  };
  window.ccPickApply = pickApply;
  // SC.5 (sc-r5-select): the same adapter by app name, with a clear (the pick another panel showed here is taken away when that panel lets go)
  (window.ccPickers = window.ccPickers || {}).modelcraft = { apply: pickApply, get: () => ({ ids: host.sel.filter((x) => x.t === 'i').map((x) => String(x.id)) }), clear: () => { if (host.sel.length) host.setSel([]); return true; } };
  const host = {
    model, cam, path: [], sel: [], overlayState: null, mouse: null,
    get units() { return model.units; },
    scene() { if (!ST.sc || ST.sc.version !== model.version) ST.sc = sceneOf(model); return ST.sc; },
    setSel(s) { host.sel = s.filter(Boolean); scheduleInfo(); view.invalidate(); announcePick(); },
    toolSet(name) {
      for (const b of tearAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === name));
      ui.over.classList.toggle('is-select', name === 'select' || name === 'erase');
      ui.over.classList.toggle('is-orbit', name === 'orbit' || name === 'pan');
    },
    overlay(o) { host.overlayState = o; view.invalidate(); },
    tip(t) { ui.tip.textContent = t || ''; },
    vcb(label, text) { ui.vcbLabel.textContent = label || t('ui.vcb'); if (document.activeElement !== ui.vcb) ui.vcb.value = text || ''; },
    print,
    changed() { scheduleInfo(); view.invalidate(); warmPicking(); stalePrint(); ST.shell?.changed(); },
    openContext(path) {
      if (!model.context(path)) return;
      if (isStacked(model.context(path).def)) { print(t('m3d.model.mods_bake_first')); return; }   // 0.8 GH.2: Edit source or Bake first
      if (model.context(path).def.curve) { ST.wsHost.meshPath = path; setWorkspace('curve'); return; }   // 0.7 MD.6: a curve object opens in the Curve workspace
      if (model.context(path).def.mesh) { ST.wsHost.meshPath = path; setWorkspace('mesh'); return; }   // 0.7 MD.2: a mesh opens in the Mesh workspace
      host.path = path; host.sel = []; tools.set(tools.name === 'place' ? 'select' : tools.name);
      print(t('app.ctx.editing', { name: model.context(path).def.name }));
      scheduleInfo(); view.invalidate();
    },
    meshEdit(state) { view.setMeshEdit(state); },   // 0.7 MD.2: what the mesh edit tool draws
    curveEdit(state) { view.setCurveEdit(state); },   // 0.7 MD.6: what the curve edit tool draws
    settle() { view.settle(); },
    closeContext() {
      if (!host.path.length) return;
      const leaving = host.path[host.path.length - 1];
      host.path = host.path.slice(0, -1);
      host.sel = [{ t: 'i', id: leaving }];
      // 0.8 GH.2: Edit source goes in through the generated definition; closing steps over that read-only level
      if (isStacked(model.context(host.path)?.def)) { const result = host.path.pop(); host.sel = [{ t: 'i', id: result }]; }
      scheduleInfo(); view.invalidate();
    },
  };
  const view = new View3D(ui.gl, ui.over, {
    model, cam,
    ui: () => ({ path: host.path, sel: host.sel, overlay: host.overlayState, mouse: host.mouse, present: ST.presentation, hideRest: ST.hideRest, showHidden: ST.showHidden }),
  });
  if (/[?&]import=page(&|$)/.test(location.search)) view.slices = false;   // 0.11 PERF.7: ?import=page = the import as before it (tests' "before")
  const tools = new Tools(host);
  // 0.8 round 3: things drawn over the view that follow the camera (Problems markers, the Surfaces panel's zebra) run after each draw
  const afterDraw = new Set();
  { const draw0 = view.draw.bind(view); view.draw = (...a) => { const r = draw0(...a); for (const fn of afterDraw) fn(); return r; }; }
  // ---- corner indicator (Settings › ModelCraft › Corner indicator): view cube | axis icon | none ----
  const cubeOpts = cameraCubeOptions(cam, { invalidate: () => view.invalidate(), home: () => stdView('iso') });
  const viewCube = mountViewCube(ui.stage, { ...cubeOpts, i18n: { t: i18n.t, has: i18n.has } });
  const axisIcon = mountAxisIcon(ui.stage, { getView: cubeOpts.getView, i18n: { t: i18n.t, has: i18n.has } });
  { const draw0 = view.draw.bind(view); view.draw = () => { draw0(); viewCube.update(); axisIcon.update(); }; }
  // 0.9 RH.1: four views at once (Top, Perspective, Front, Right); the Rhino layout turns it on, Camera › Four views does too
  const viewports = createViewports({ stage: ui.stage, gl: ui.gl, over: ui.over, view, cam, bbox: () => model.bbox(), t: i18n.t,
    onCamera: () => { root.querySelector('[data-persp]')?.setAttribute('aria-checked', String(cam.persp)); view.invalidate(); } });
  window.modelcraft = { viewports, docData: () => docData, file: () => JSON.parse(modelText()), model, cam, tools, view, host, ui, viewCube, axisIcon, cubeView: cubeOpts.getView, presenting: () => ST.presentation,
    afterHistory, print, get timeline() { return ST.timeline; }, get xrmc() { return ST.xrmc; },
    setWorkspace, get workspace() { return ST.wsId; },   // 0.7: workspaces (tests, the console)
    get fileName() { return ST.fileName; }, get sceneIndex() { return ST.sceneIndex; }, goScene: (i) => goScene(i),
    // 0.8 EG.41 (round 3): what the person is looking at, in plan (live.js here(): "Give it what I'm looking at" in Studio Live)
    here: () => {
      const pts = [], z0 = cam.target[2], far = 1e5;
      for (const [x, y] of [[0, 0], [cam.w, 0], [0, cam.h], [cam.w, cam.h]]) {
        const r = cam.ray(x, y);
        if (Math.abs(r.d[2]) < 1e-6) continue;
        const k = (z0 - r.o[2]) / r.d[2];
        if (k > 0 && k < far) pts.push([r.o[0] + r.d[0] * k, r.o[1] + r.d[1] * k]);
      }
      if (pts.length < 4) { const h = cam.pixelSize(cam.target) * Math.max(cam.w, cam.h) / 2; pts.push([cam.target[0] - h, cam.target[1] - h], [cam.target[0] + h, cam.target[1] + h]); }
      return { sheet: '', area: [Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1])), Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))] };
    } };   // 0.7 WS.9: the layouts' adapter (workspace-modelcraft.js)
  ST.layouts = null;   // 0.7 WS.9: the shell's workspace layouts, once mounted (bottom of init)   // Studio Live (0.5 LV.22, live.js): redraw after others' edits, its messages
  // ---- AI assistants and scripts (0.4 part 2 X.7, session agents; agents.js on host.js's control channel): off until Settings › Assistants ----
  installAgents({ model, changed: () => host.changed(),
    // 0.8 EG.61 (session model_PART_2): say the scene — the model's sun, the Render dialog's settings and the scene's words
    look: { sun: () => ({ ...view.style.sun }), setSun: (sun) => { view.style = { ...view.style, shadows: true, sun: { ...view.style.sun, ...sun } }; styleToUi(); view.invalidate(); host.changed(); },
      settings: () => ST.renderSettings, saveSettings: (s) => { ST.renderSettings = s; host.changed(); }, state: () => ST.sayState, saveState: (s) => { ST.sayState = cleanSay(s); },
      flatColors: async () => { const { mcFlatColors } = await import('./render-mc.js'); return mcFlatColors(model); } },
    // 0.8 EG.62: a material from a photo — the Shading panel's button and the assistant's material_make end in the same function
    photo: { pictures: () => [...model.images].map(([id, im]) => ({ id, name: im.name || '', mime: im.mime, kb: Math.round((im.data.length * 3) / 4 / 1024) })),
      picture: (id) => { const im = model.images.get(String(id).replace(/^img:/, '')); if (!im) return null; const bin = atob(im.data), bytes = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i); return { mime: im.mime, bytes }; },
      make: makeMaterialFromPhoto, has: (id) => fileMaterials.has(id), remove: (id) => { fileMaterials.remove(id); model.dirty = true; model.bumpSafe(); host.changed(); } }, canvas: () => view.renderer?.domElement || null, draw: () => view.draw(),
    // 0.7 AS.5 (session assistants): scenes as the Scenes panel saves and shows them
    scene: () => ({ cam: cam.toJSON(), style: view.style, vis: model.captureVis() }), goScene: (i) => goScene(i, false, { quiet: true }), scenesChanged: renderScenes,
    file: () => JSON.parse(modelText()), base,   // 0.7 AS.6: usd_export
    say: print, frame: zoomExtents,   // 0.9 SU.810b: a live link's update in the status bar; the first one comes into view
    // 0.7 AS.6 (assistants-gaps): render_still / render_queue get the Render dialog's own hooks (as kind === 'render' opens it)
    render: async () => { const { mcScene } = await import('./render-mc.js'); return { scene: (s) => mcScene(model, cam, view.style, s), viewSize: () => ({ w: ui.gl.clientWidth, h: ui.gl.clientHeight }), settings: () => ST.renderSettings, fileBase: base, download: (blob, name) => download(blob, name, blob.type || 'application/octet-stream'), appName: 'ModelCraft' }; } });

  // ---- settings (Settings › ModelCraft; per viewer conveniences only) ----
  const SET_DEFAULTS = { keys: 'sketchup', scroll: 'auto', touch2: 'pan', snap: true, collide: true, corner: 'cube', bed: '', orbitAt: 'cursor', orbitSpeed: 1, panSpeed: 1 };
  const SPEED = (x) => Number.isFinite(x) && x >= 0.25 && x <= 3;   // 0.7.1 MC-ORBIT-CURSOR: the speed sliders' range
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
      if (['', '180', '220', '256', '300'].includes(v.bed)) out.bed = v.bed;   // 0.6 LC.21: printprep.js BEDS
      if (v.orbitAt === 'cursor' || v.orbitAt === 'centre') out.orbitAt = v.orbitAt;
      if (SPEED(v.orbitSpeed)) out.orbitSpeed = v.orbitSpeed;
      if (SPEED(v.panSpeed)) out.panSpeed = v.panSpeed;
    } catch { /* private window: defaults */ }
    return out;
  })();
  const persist = () => { try { localStorage.setItem('modelcraft.settings', JSON.stringify(settings)); } catch { /* fine */ } };
  window.modelcraft.settings = settings;
  const settingsDlg = document.querySelector('[data-app-settings]');
  mountMachineCard(settingsDlg);
  if (benchParam()) openBench();   // 0.7 CU.8: the render bench (/lab/modelcraft?bench=render)
  const blender = () => settings.keys === 'blender';
  function applySettings() {
    tools.snapping = settings.snap;
    tools.collide = settings.collide;
    cam.orbitSpeed = settings.orbitSpeed;
    cam.panSpeed = settings.panSpeed;
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
      settingsDlg.querySelectorAll('input[name="mcBed"]').forEach((r) => { r.checked = r.value === settings.bed; });
      const oa = settingsDlg.querySelector('input[name="mcOrbitAt"]');
      if (oa) oa.checked = settings.orbitAt === 'cursor';
      for (const [n, k] of [['mcOrbitSpeed', 'orbitSpeed'], ['mcPanSpeed', 'panSpeed']]) {
        const r = settingsDlg.querySelector(`input[name="${n}"]`), o = settingsDlg.querySelector(`[data-mc-out="${k}"]`);
        if (r) r.value = String(settings[k]);
        if (o) o.textContent = t('set.nav.speed.value', { n: settings[k].toFixed(2) });
      }
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
      else if (t.name === 'mcBed') setSetting('bed', t.value);
      else if (t.name === 'mcOrbitAt') setSetting('orbitAt', t.checked ? 'cursor' : 'centre');
    });
    // 0.7.1: the orbit and pan speed sliders act while they move
    settingsDlg.addEventListener('input', (e) => {
      const k = { mcOrbitSpeed: 'orbitSpeed', mcPanSpeed: 'panSpeed' }[e.target.name];
      const v = k && Number(e.target.value);
      if (SPEED(v)) setSetting(k, v);
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
  const BLENDER_TITLES = Object.fromEntries(['select', 'line', 'rect', 'circle', 'polygon', 'push', 'move', 'rotate', 'scale', 'erase', 'tape', 'dim', 'orbit', 'pan', 'zoom', 'extents', 'component', 'group', 'divide'].map((k) => [k, t('app.btitle.' + k)]));

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
    // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
    for (const b of tearAll('[data-tool], [data-act]')) {
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
    // 0.7: Model's tools work in the Model workspace (the others bring their own)
    if (ST.wsId !== 'model' && name !== 'select') { print(t('app.ws.model_tool', { ws: t(getWorkspace(ST.wsId).labelKey) })); return; }
    tools.set(name, arg);
    ST.shell?.tool(name);   // 0.8 EG.23: lessons hear which tool ran
    for (const b of tearAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === name));
    ui.over.classList.toggle('is-select', name === 'select' || name === 'erase');
    ui.over.classList.toggle('is-orbit', name === 'orbit' || name === 'pan');
    if (name !== 'select') hideHint();
    ST.layouts?.refresh();
  };
  root.querySelectorAll('[data-tool]').forEach((b) => b.addEventListener('click', () => { setTool(b.dataset.tool); ui.over.focus({ preventScroll: true }); }));
  setTool('select');

  const { flip, choosePaint, texMats, renderLights } = mountPaintLights({
    ST, ui, model, cam, host, view, tools, print, setTool, scheduleInfo, root,
    get t() { return t; },
    get colorLabel() { return colorLabel; }, set colorLabel(v) { colorLabel = v; },
  });



  const { hideHint, cursorEv, cancelStep, arrowStep } = mountPointer({
    ST, ui, cam, host, view, tools, settings, blender, toggle, print, setTool, unhideEverything, eraseSelection, closeMenus, scheduleInfo, focusView, root,
    get openCtxMenu() { return openCtxMenu; },
    get act() { return act; },
    get selectAll() { return selectAll; },
    get stdView() { return stdView; },
    get setPresentation() { return setPresentation; },
    get sayLock() { return sayLock; },
    get finishTransform() { return finishTransform; },
    get frameSelection() { return frameSelection; },
    get perspBtn() { return perspBtn; },
    get stepScene() { return stepScene; },
    get isolateSelection() { return isolateSelection; },
    get hideSelection() { return hideSelection; },
    get syncTool() { return syncTool; },
    get stopPlay() { return stopPlay; },
    get t() { return t; },
  });



  const { openCtxMenu, sayLock, finishTransform, syncTool, toolbarEl, wsSelect, placeMesh, curveObjectFrom, curveCtx, groupModCtx, modCtx } = mountContextMenu({
    ST, ui, model, cam, modEval, host, view, tools, print, hideHint, afterHistory, ctxDef, scheduleInfo, focusView, root,
    get act() { return act; },
    get frameSelection() { return frameSelection; },
    get t() { return t; },
    get tearAll() { return tearAll; },
  });



  const { problemList, renderInfo, askText, printView, placeStarter, terrainFromSelection, terrainGridDialog, storeysDialog, scaleByDialog, text3dDialog } = mountInfo({
    ui, model, cam, host, view, tools, print, setTool, syncTool, curveObjectFrom, groupModCtx, afterHistory, ctxDef, unhideEverything, eraseSelection, makeGroup, meshInfo, convertToMesh, divideAsk, explodeSel, syncSectionMenu, closeMenus, scheduleInfo, tagSelection, focusView, root, setInfoTitle,
    get wsId() { return ST.wsId; },
    get wsHost() { return ST.wsHost; },
    get modelFormat() { return ST.modelFormat; },
    get solidsLib() { return solidsLib; },
    get t() { return t; },
    get unitWords() { return unitWords; },
    get colorLabel() { return colorLabel; },
  });
  const { act, stalePrint, solidsLib, selectAll, hideSelection, isolateSelection, stdView, frameSelection } = mountActions({
    ST, ui, model, cam, host, view, tools, settings, setKeys, print, setTool, flip, choosePaint, hideHint, cursorEv, cancelStep, arrowStep, syncTool, wsSelect, placeMesh, curveCtx, modCtx, askText, text3dDialog, scaleByDialog, storeysDialog, terrainFromSelection, terrainGridDialog, setWorkspace, afterHistory, ctxDef, unhideEverything, eraseSelection, makeGroup, explodeSel, zoomExtents, closeMenus, scheduleInfo, download, base, focusView, ask, openModelInfoDialog, openPreferences, confirmDiscard, root,
    get newModel() { return newModel; },
    get fileHost() { return fileHost; },
    get OPEN_TYPES() { return OPEN_TYPES; },
    get openFromHost() { return openFromHost; },
    get saveModel() { return saveModel; },
    get saveAs() { return saveAs; },
    get importSketchPhoto() { return importSketchPhoto; },
    get furnishSelected() { return furnishSelected; },
    get IMPORT_TYPES() { return IMPORT_TYPES; },
    get importFile() { return importFile; },
    get t() { return t; },
  });
  /** Open workspace `id` (Model's own groups hide in the others; the workspace's show). → false when it refused. */
  function setWorkspace(id) {
    const to = getWorkspace(id);
    if (!to || id === ST.wsId) { wsSelect.value = ST.wsId; return !!to && id === ST.wsId; }
    if (tools.tool.busy) tools.escape();
    getWorkspace(ST.wsId)?.exit?.(ST.wsHost);
    ST.wsId = id;
    root.dataset.activeWorkspace = id;
    for (const g of toolbarEl.querySelectorAll(':scope > .mc-tool-group')) {
      if (g.dataset.workspaceGroup) g.hidden = g.dataset.workspaceGroup !== id;
      else if (MODEL_GROUPS.includes(g.getAttribute('aria-label'))) g.hidden = id !== 'model';
    }
    wsSelect.value = id;
    if (to.enter && to.enter(ST.wsHost) === false) { ST.wsId = 'model'; return setWorkspace('model') && false; }
    if (id === 'model') { tools.set('select'); for (const b of tearAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === 'select')); }
    scheduleInfo(); view.invalidate(); ST.layouts?.refresh();
    return true;
  }
  function afterHistory() {
    stalePrint();
    ST.bimLink?.sync();   // 0.11 SU.1814: the surroundings follow the linked groups (an undo takes one away)
    if (!model.context(host.path)) host.path = [];
    while (isStacked(model.context(host.path)?.def)) host.path.pop();   // 0.8 GH.2: undo or a Bake can leave you inside a level that is read-only
    const def = model.context(host.path).def;
    host.sel = host.sel.filter((s) => (s.t === 'e' ? def.edges.has(s.id) : s.t === 'f' ? def.faces.has(s.id) : s.t === 'i' ? def.insts.has(s.id) : s.t === 'd' ? model.dims.has(s.id) : s.t === 's' ? model.sections.has(s.id) : model.guides.has(s.id)));
    ST.sceneIndex = Math.min(ST.sceneIndex, model.scenes.length - 1);
    if (typeof syncSectionMenu === 'function') syncSectionMenu();
    scheduleInfo(); view.invalidate();
  }
  function ctxDef() { return model.context(host.path).def; }
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
  // ---- meshes (0.7 MD.1) ----
  /** Entity info for a mesh placement: its counts and size, Convert to geometry, Explode, Make unique. */
  function meshInfo(d, inst, iid, counts, { row, btn, notes, u }) {
    const src = d.curve ? d.shown : d.mesh, I = src.info();   // a curve object (MD.6): what it makes
    row(t('app.info.mesh.faces'), String(I.faces));
    row(t('app.info.mesh.verts'), String(I.verts));
    row(t('app.info.mesh.edges'), String(I.edges));
    row(t('app.info.solid'), I.closed ? t('app.yes') : t('app.no'));
    const m = inst.m, k = Math.cbrt(Math.abs(m[0] * (m[5] * m[10] - m[9] * m[6]) - m[4] * (m[1] * m[10] - m[9] * m[2]) + m[8] * (m[1] * m[6] - m[5] * m[2])));
    if (I.closed) row(t('app.info.volume'), formatVolume(I.volume * k * k * k, u));
    const bb = src.bounds();
    const sc = [0, 1, 2].map((q) => Math.hypot(m[q * 4], m[q * 4 + 1], m[q * 4 + 2]));
    if (bb) [t('app.info.width'), t('app.info.depth'), t('app.info.height')].forEach((lb, q) => row(lb, formatLength((bb.max[q] - bb.min[q]) * sc[q], u)));
    if (!I.closed && I.boundary) notes.push(el('p', { className: 'mc-note' }, t('app.info.mesh.open', { n: I.boundary })));
    if (d.curve) {
      btn(t('app.info.curve.edit'), () => { ST.wsHost.meshPath = [...host.path, iid]; setWorkspace('curve'); });
      btn(t('app.info.curve.to_mesh'), () => { curveToMesh(ST.wsHost, d.id); scheduleInfo(); view.invalidate(); });
    }
    btn(t('app.info.mesh.to_geometry'), () => {
      const id = model.change(t('app.undo.mesh_to_geometry'), (mm) => mm.fromMesh(d.id));
      print(t('app.mesh.to_geometry.done', { name: model.def(id)?.name || '' }));
      scheduleInfo(); view.invalidate();
    });
    btn(t('app.info.explode'), explodeSel);
    if ((counts.get(d.id) || 0) > 1) btn(t('app.info.make_unique'), () => { model.change(t('app.info.make_unique'), (mm) => mm.makeUnique(mm.context(host.path).def, iid), [model.context(host.path).def.id]); scheduleInfo(); });
    if (d.curve) notes.push(curvePanel(curveCtx(d.id)));   // 0.7 MD.6
    if (!d.lattice) notes.push(modPanel(modCtx(d.id)));   // 0.7 MD.3
  }
  /** Turn the selected group or component into a mesh (every placement of it), one undo step. */
  function convertToMesh(iid) {
    let r;
    try { r = model.change(t('app.undo.to_mesh'), (mm) => mm.toMesh(mm.context(host.path).def, iid)); } catch (e) { print(e.message); return; }
    const I = model.def(r.def).mesh.info();
    print(t('app.mesh.convert.done', { faces: I.faces, verts: I.verts }) + (r.loose ? ' ' + t('app.mesh.convert.loose', { n: r.loose }) : ''));
    scheduleInfo(); view.invalidate();
  }

  /** Entity info › Divide… (0.7 MC-DIVIDE): ask how many parts (works with no keyboard shortcut, on a tablet too). */
  async function divideAsk() {
    const txt = await askText(t('app.divide.h'), t('app.divide.label'), '2');
    if (txt === null || txt === undefined) return;
    const n = Number(String(txt).trim().replace(/^\//, '').replace(/s$/i, ''));
    if (!Number.isInteger(n) || n < 2 || n > 1000) { print(t('m3d.model.divide_count', { max: 1000 })); return; }
    tools.divideSel(n);
    scheduleInfo(); view.invalidate();
  }

  function explodeSel() {
    const insts = host.sel.filter((s) => s.t === 'i');
    if (!insts.length) { print(t('app.explode.none')); return; }
    if (insts.some((s) => isStacked(model.def(ctxDef().insts.get(s.id)?.def)))) { print(t('m3d.model.mods_bake_first')); return; }   // 0.8 GH.2
    const out = model.change(t('app.undo.explode'), (m) => {
      const def = m.context(host.path).def;
      const all = [];
      for (const s of insts) all.push(...m.explode(def, s.id));
      return all;
    }, [model.context(host.path).def.id]);
    host.setSel(out || []);
  }
  function zoomExtents() {
    const bb = model.bbox();
    cam.fit(bb);
    viewports.fitOthers();   // 0.9 RH.1: every view of a four-view window
    view.invalidate();
  }

  const { perspBtn, setPresentation, secPlanesBtn, secCutsBtn, startStyle, styleToUi } = mountViewMenu({
    ST, $, ui, model, cam, MC_UNITS, host, view, viewports, print, afterHistory, syncSectionMenu, closeMenus, renderScenes, root,
    get stepScene() { return stepScene; },
    get t() { return t; },
  });
  function syncSectionMenu() { secPlanesBtn.setAttribute('aria-checked', String(model.sectionView.planes)); secCutsBtn.setAttribute('aria-checked', String(model.sectionView.cuts)); }
  function closeMenus() { for (const d of root.querySelectorAll('details.mc-menu[open]')) d.open = false; }


  const { stopPlay, stepScene, goScene, openVideo, updateScene, lockScene, renameScene, deleteScene } = mountScenes({
    ST, $, ui, model, cam, host, view, tools, print, askText, perspBtn, setPresentation, syncSectionMenu, closeMenus, styleToUi, renderScenes, scheduleInfo, download, base, root,
    get t() { return t; },
  });
  function renderScenes() {
    ui.scenes.replaceChildren();
    model.scenes.forEach((s, i) => {
      const li = el('li', { className: i === ST.sceneIndex ? 'is-cur' : '' },
        el('button', { type: 'button', className: 'mc-scene-go', title: t('app.scene.go.title'), onclick: () => goScene(i) }, s.name),
        el('span', { className: 'mc-scene-acts' },
          el('button', { type: 'button', className: 'mc-icon', title: t('app.scene.update.title', { name: s.name }), 'aria-label': t('app.scene.update.aria', { name: s.name }), onclick: () => updateScene(i) }, el('i', { className: 'bi bi-arrow-repeat', 'aria-hidden': 'true' })),
          el('button', { type: 'button', className: 'mc-icon', 'data-scene-lock': '', 'aria-pressed': String(!!s.lock), title: t(s.lock ? 'app.scene.unlock.title' : 'app.scene.lock.title'), 'aria-label': t('app.scene.lock.aria', { name: s.name }), onclick: () => lockScene(i, !s.lock) }, el('i', { className: s.lock ? 'bi bi-lock-fill' : 'bi bi-unlock', 'aria-hidden': 'true' })),
          el('button', { type: 'button', className: 'mc-icon', title: t('app.scene.rename'), 'aria-label': t('app.scene.rename.aria', { name: s.name }), onclick: () => renameScene(i) }, el('i', { className: 'bi bi-pencil', 'aria-hidden': 'true' })),
          el('button', { type: 'button', className: 'mc-icon', title: t('app.scene.delete'), 'aria-label': t('app.scene.delete.aria', { name: s.name }), onclick: () => deleteScene(i) }, el('i', { className: 'bi bi-trash', 'aria-hidden': 'true' }))));
      ui.scenes.append(li);
    });
    ui.scenesEmpty.hidden = model.scenes.length > 0;
    ui.sceneNav.hidden = model.scenes.length === 0;
    ui.scenebar.hidden = model.scenes.length === 0;
    ui.scenebar.replaceChildren(...model.scenes.map((s, i) => el('button', { type: 'button', 'aria-current': String(i === ST.sceneIndex), title: s.lock ? t('app.scene.locked.tab') : null, onclick: () => goScene(i) }, s.name, s.lock ? el('i', { className: 'bi bi-lock-fill mc-scene-lockmark', 'aria-hidden': 'true' }) : null)));
  }

  const { renderToolbar, fireSel, renderScenesIfChanged, renderTree, renderComps, renderTags, showUnits } = mountTree({
    ST, ui, model, selListeners, host, view, tools, print, setTool, afterHistory, ctxDef, renderScenes, scheduleInfo, root,
    get t() { return t; },
    get unitWords() { return unitWords; },
  });
  // the panels wait while a tool previews (a drag): they show the model once it is put down, not on every frame
  function scheduleInfo() { if (!ST.infoTimer) ST.infoTimer = requestAnimationFrame(() => { ST.infoTimer = 0; if (model.previewing) return; renderToolbar(); renderInfo(); renderTree(); renderComps(); renderTags(); renderScenesIfChanged(); renderLights(); ST.layouts?.refresh(); fireSel(); }); }



  /** Give the selected groups and components tag `name` ('' = untagged). */
  function tagSelection(name) {
    const iids = host.sel.filter((s) => s.t === 'i').map((s) => s.id);
    if (!iids.length) return;
    model.change(t('app.undo.tag_set'), (m) => m.setTag(m.context(host.path).def, iids, name || null), [model.context(host.path).def.id]);
    if (name && model.tag(name)?.hidden) { host.setSel(host.sel.filter((s) => s.t !== 'i')); print(t('app.tag.set_hidden', { name })); }
    else print(name ? t('app.tag.set', { name, n: iids.length }) : t('app.tag.unset', { n: iids.length }));
    ST.tagsDrawn = ''; afterHistory();
  }



  const { newModel, fileHost, OPEN_TYPES, IMPORT_TYPES, offerAddons, modelData, modelText, modelTextAsync, baseTextChecked, exportInWorker, saveAs, saveModel } = mountFileSave({
    ST, ui, model, cam, docData, applyFormat, newUnits, host, view, tools, print, setTool, startStyle, styleToUi, renderScenes, scheduleInfo, showUnits, base, ask,
    get adoc() { return adoc; },
    get t() { return t; },
  });
  function download(bytes, name, type) { return fileHost.download(bytes instanceof Blob || typeof bytes === 'string' ? bytes : new Blob([bytes], { type }), name, type); }
  function base() { return ST.fileName.replace(/\.(modelcraft|json|usd|usda|usdc|usdz)$/i, '') || t('app.file.untitled'); }
  // ---- 0.8 SU.747b (round 3, model_PART_3): NURBS curves and surfaces — the shared Surfaces panel (nurbs-ui/) over cc-nurbs (nurbs/),
  // ModelCraft's adapter surfaces-mc.js. Loaded on first use, or at once when an opened file carries a patch set (addons.nurbs). ----
  ST.surfaces = null; ST.surfacesLoading = null;
  const surfBox = root.querySelector('[data-nurbs]');
  function openSurfaces() {
    ST.surfacesLoading ??= Promise.all([import('./surfaces-mc.js'), import('./print-mc.js')]).then(([{ mountSurfacesMc }, PM]) => {
      ST.surfaces = mountSurfacesMc({ box: surfBox, model, view, cam, tools, docData, t, print, base, afterDraw, over: ui.over, bake: bakeNodeMeshes,   // 0.9 DC.54: solids → model groups
        scan: () => { const tr = PM.printTriangles(model, { path: host.path, sel: host.sel }).tris; return tr.length ? { positions: Float64Array.from(tr.flatMap((q) => q.p.flat())), indices: Uint32Array.from({ length: tr.length * 3 }, (_, i) => i) } : null; },   // 0.9 SU.1082: the selection (or everything shown) is the scan, in mm
        cage: () => PM.cageQuads(model, { path: host.path, sel: host.sel }),   // 0.9 D9.8: the selected mesh's quads, for SubD cage to exact surfaces
        save: (name, text, type) => download(new Blob([text], { type }), name, type),
        open: async (exts) => { const [f] = await fileHost.openFile({ types: [{ description: t('nurbs.ui.title'), extensions: exts }] }).catch(() => []); return f ? { name: f.name, text: await f.text() } : null; } });
      window.modelcraft.surfaces = ST.surfaces;
      return ST.surfaces;
    });
    return ST.surfacesLoading;
  }
  root.querySelector('[data-nurbs-open]')?.addEventListener('click', () => openSurfaces());
  window.modelcraft.openSurfaces = openSurfaces;   // 0.9 DC.54: SuperCad Studio's Surfaces panel sends its patch set into this session (surfaces.session.importDoc: one undo step there)
  { const nd = docData.forAddon('nurbs'); nd.onOpen(() => { if (!ST.surfaces && nd.data('doc')) openSurfaces(); }); }
  // ---- 0.8 DC.54 (round 3, nodes_PART_3): the node editor — wire numbers into points, curves and surfaces; every node is also a line of script.
  // The shared window (assets/js/app-nodes.js) over cc-nodes (nodes/), ModelCraft's adapter nodes-mc.js. Loaded on first use, or at once when an
  // opened file carries a graph (addons.nodes). ----
  ST.nodesEd = null; ST.nodesLoading = null;
  /** Bake to model (the node window's button): each mesh (mm, Z up) becomes a mesh group in the open context, all in ONE undo step. */
  function bakeNodeMeshes(meshes) {
    const ctxId = model.context(host.path).def.id;
    return model.change(t('nodes.bake.undo'), (m) => {
      const made = [];
      for (const me of meshes) {
        const P = me.positions, polys = [];
        for (let i = 0; i + 2 < me.indices.length; i += 3) polys.push([0, 1, 2].map((k) => { const v = me.indices[i + k] * 3; return [P[v] / 1000, P[v + 1] / 1000, P[v + 2] / 1000]; }));
        const def = meshDef(m, polys, me.name);
        m.place(m.context(host.path).def, def.id, ident());
        made.push(def);
      }
      return made;
    }, [ctxId]);
  }
  function openNodes() {
    ST.nodesLoading ??= import('./nodes-mc.js').then(({ mountNodesMc }) => mountNodesMc({ parent: root, view, docData, t, bake: bakeNodeMeshes, status: print })).then((n) => { ST.nodesEd = n; window.modelcraft.nodes = n; return n; });
    return ST.nodesLoading.then((n) => { n.show(); return n; });
  }
  root.querySelector('[data-nodes-open]')?.addEventListener('click', () => openNodes());
  { const nd = docData.forAddon('nodes'); nd.onOpen(() => { if (!ST.nodesEd && nd.data('graph')) openNodes().then((n) => n.hide()); }); }
  // spikes (0.5): menu items that show only with ?spike=<name> in the address (lab experiments, never on by default)
  { const sp = new URLSearchParams(location.search).get('spike'); root.querySelectorAll('[data-spike]').forEach((b) => { b.hidden = b.dataset.spike !== sp; }); }
  mountExport({
    ST, ui, model, cam, host, view, tools, print, printView, closeMenus, openVideo, download, base, modelText, exportInWorker, saveAs, root,
    get print3d() { return print3d; },
    get t() { return t; },
    get unitWords() { return unitWords; },
  });

  const { openPrintTool, print3d } = mountPrintCheck({
    ST, ui, model, cam, host, view, afterDraw, settings, print, setTool, problemList, act, afterHistory, download, base, focusView, ask, root,
    get guideBox() { return guideBox; },
    get closeGuide() { return closeGuide; },
    get syncGuide() { return syncGuide; },
    get t() { return t; },
  });

  const { guideBox, syncGuide, closeGuide } = mountGuide({
    ST, ui, model, host, blender, kb, print, setTool, hideHint, closeMenus, openPrintTool, print3d, focusView, confirmDiscard, root,
    get openFile() { return openFile; },
    get t() { return t; },
    get lx() { return lx; },
  });

  const { bytesOf, openFromHost, firstOf, openFile } = mountFileOpen({
    ST, ui, model, cam, docData, applyFormat, host, view, tools, print, setTool, texMats, hideHint, afterHistory, zoomExtents, perspBtn, styleToUi, renderScenes, scheduleInfo, showUnits, fileHost, offerAddons, confirmDiscard,
    get importFile() { return importFile; },
    get adoc() { return adoc; },
    get t() { return t; },
  });

  const { furnishSelected, importSketchPhoto, importFile } = mountImport({
    model, host, tools, print, dynamicNote, hideHint, afterHistory, ctxDef, zoomExtents, fileHost, bytesOf, ask,
    get tagsDrawn() { return ST.tagsDrawn; }, set tagsDrawn(v) { ST.tagsDrawn = v; },
    get skipped() { return skipped; },
    get t() { return t; },
  });
  // ---- 0.8 DC.117 (session `cabinetcraft_hosts`): the model host add-ons reach through api.model (assets/js/addons.js, API 1.4): read the model, put display bodies in it (one undo
  // step, a tagged group of real faces: addon-bodies-mc.js), and the room the selected floor face makes (furnish-mc.js roomOfFace / openingsNear, as Furnish a room uses them).
  {
    window.ccAddonModel = {
      current: () => ({ name: ST.fileName }),
      read: (fn) => fn(model),
      async addBodies(owner, group, bodies, opts = {}) {
        const AB = await import('./addon-bodies-mc.js');
        const r = AB.placeBodies(model, { owner, ownerName: opts.ownerName, group, bodies, name: opts.name, label: opts.label || (opts.ownerName || owner), at: opts.at || [0, 0, 0] });
        ST.tagsDrawn = ''; afterHistory();
        return r.count;
      },
      async removeBodies(owner, group, opts = {}) {
        const AB = await import('./addon-bodies-mc.js');
        const was = AB.removeBodies(model, { ownerName: opts.ownerName, group, label: opts.label || (opts.ownerName || owner) });
        if (was) { ST.tagsDrawn = ''; afterHistory(); }
        return was;
      },
      bodies: (owner) => { const AB = addonBodiesLoaded; return AB ? AB.listBodies(model, owner, window.ccAddons?.list?.().find((a) => (a.manifest && a.manifest.id) === owner)?.manifest?.name) : []; },
      async rooms() {
        const s = host.sel.length === 1 && host.sel[0].t === 'f' ? host.sel[0] : null;
        const F = await import('./furnish-mc.js');
        const room = s && F.roomOfFace(model, host.path, s.id);
        if (!room) return [];
        const open = F.openingsNear(model, room);
        return [{ name: ST.fileName, poly: room.poly, holes: room.holes, z: Math.round(room.z * 1000), area: room.area * 1e6, doors: open.doors, windows: open.windows }];
      },
    };
    let addonBodiesLoaded = null;
    import('./addon-bodies-mc.js').then((m) => { addonBodiesLoaded = m; }).catch(() => {});
  }
  const skipped = (rep) => {
    const s = rep && rep.skipped ? Object.entries(rep.skipped).filter(([, n]) => n) : [];
    return s.length ? ' ' + t('app.import.skipped', { list: s.map(([k, n]) => n + ' ' + k).join(', ') }) : '';
  };

  // drop
  ST.dragDepth = 0;
  ui.stage.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types?.includes('Files')) { ST.dragDepth++; ui.drop.hidden = false; e.preventDefault(); } });
  ui.stage.addEventListener('dragover', (e) => { if (e.dataTransfer?.types?.includes('Files')) e.preventDefault(); });
  ui.stage.addEventListener('dragleave', () => { if (--ST.dragDepth <= 0) { ST.dragDepth = 0; ui.drop.hidden = true; } });
  ui.stage.addEventListener('drop', async (e) => {
    e.preventDefault();
    ST.dragDepth = 0; ui.drop.hidden = true;
    const files = await fileHost.fromDrop(e.dataTransfer);
    await openFromHost(firstOf(files), { others: files });
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
    // 0.8 LD.1: the shared plant list (about 420 species) — search by any name; the first 48 matches are buttons
    const plantGrid = el('div', { className: 'mc-starter-grid', dataset: { plants: '' } }), plantQ = el('input', { type: 'search', className: 'mc-input', dataset: { plantSearch: '' }, 'aria-label': t('app.starter.plants.search'), placeholder: t('app.starter.plants.search') });
    form.insertBefore(el('section', { className: 'mc-starter' }, el('h3', { className: 'mc-h' }, t('app.starter.cat.plants')), el('p', { className: 'mc-note' }, t('app.starter.plants.note')), plantQ, plantGrid), form.lastElementChild);
    import('./starter.js').then(async ({ plantList }) => {
      const [{ search, displayName }, all] = [await import('./plants/plants.js'), await plantList()];
      const draw = () => plantGrid.replaceChildren(...search(all, plantQ.value).slice(0, 48).map((sp) => el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'plant:' + sp.key, dataset: { starter: 'plant:' + sp.key }, title: sp.botanical }, displayName(sp, i18n.locale()))));
      plantQ.addEventListener('input', draw); draw();
    }).catch(() => plantGrid.append(el('p', { className: 'mc-note' }, t('app.starter.plants.err'))));
    const dlg = el('dialog', { className: 'mc-dialog mc-dialog-wide', 'aria-labelledby': 'mc-sl-h' }, form);
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', () => { const id = dlg.returnValue; dlg.remove(); focusView(); if (id && id !== 'cancel') placeStarter(id); });
    root.append(dlg);
    dlg.showModal();
  });
  // ---- 0.7.1 71.13: Model info… (per model, in the file) and Preferences… (this browser: Settings › ModelCraft) ----
  async function openModelInfoDialog() {
    closeMenus(); tools.escape();
    const { openModelInfo } = await import('./model-info-ui.js');
    openModelInfo({ root, t, model, ui, view, getInfo: () => ST.modelInfo,
      getFormat: () => ST.modelFormat,
      setFormat: (v) => { if (JSON.stringify(v) === JSON.stringify(ST.modelFormat)) return; ST.modelFormat = v; applyFormat(); model.dirty = true; },   // outside undo, like info
      setInfo: (v) => { if (JSON.stringify(v) === JSON.stringify(ST.modelInfo)) return; ST.modelInfo = v; model.dirty = true; },   // outside undo, like images
      fileName: () => ST.fileName, fileText: modelText, renderSettings: () => ST.renderSettings, materials: () => fileMaterials.mats.size,
      openRender: () => root.querySelector('[data-export="render"]')?.click(), focusView });
  }
  /** Preferences = the Settings dialog on ModelCraft's tab (app-wide settings live there; nothing kept twice). */
  function openPreferences() {
    closeMenus();
    document.querySelector('[data-settings-open]')?.click();
    settingsDlg?.querySelector('[data-settings-tab="app"]')?.click();
    templateState();
  }
  /** Settings › ModelCraft › New models: what the stored start holds, in words. */
  function templateState() {
    const out = settingsDlg?.querySelector('[data-mc-template-state]');
    if (!out) return;
    const tpl = readTemplate(MC_UNITS);
    out.textContent = tpl ? t('mi.tpl.state', { unit: unitWords(tpl.units || model.units), mode: t('ui.style.mode.' + (tpl.style?.mode || 'shaded')), lat: tpl.sun?.lat ?? '—', lon: tpl.sun?.lon ?? '—' }) : t('mi.tpl.none');
    const clr = settingsDlg.querySelector('[data-mc-template-clear]');
    if (clr) clr.disabled = !tpl;
  }
  if (settingsDlg) {
    settingsDlg.addEventListener('click', (e) => {
      if (e.target.closest('[data-mc-template-save]')) { writeTemplate(templateOf(model.units, view.style)); templateState(); print(t('mi.tpl.saved')); }
      else if (e.target.closest('[data-mc-template-clear]')) { writeTemplate(null); templateState(); print(t('mi.tpl.cleared')); }
      else if (e.target.closest('[data-settings-tab="app"]')) templateState();
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { writeTemplate(null); templateState(); });
    document.querySelector('[data-settings-open]')?.addEventListener('click', () => templateState());
  }
  window.modelcraft.fileText = () => modelText();   // tests: what Save writes
  window.modelcraft.fileTextAsync = () => modelTextAsync();   // 0.10 PERF.38: the same text from the worker pool (Save in place, autosave)
  window.modelcraft.exportAsync = async (kind) => { const w = await exportInWorker(kind); return w && (w.bytes || w.text); };   // tests and perf-010.mjs: an export from the pool (null: none)

  async function confirmDiscard() {
    if (!model.dirty) return true;
    const c = await ask({ title: t('app.unsaved.h'), text: t('app.unsaved.text'), buttons: [['cancel', t('app.btn.cancel'), 'btn-line'], ['discard', t('app.unsaved.discard'), 'btn-line'], ['save', t('app.unsaved.save'), 'btn-plot']] });
    if (c === 'save') return saveModel();
    return c === 'discard';
  }
  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  ST.leaving = false;
  window.addEventListener('beforeunload', (e) => { if (model.dirty && !ST.leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !model.dirty || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmDiscard())) return;
    ST.leaving = true;
    setTimeout(() => location.assign(url.href), model.dirty ? 0 : 800);
  });

  // ---- autosave and crash recovery (0.4 item 1.2; the shell's app-autosave.js) ----
  // The open model is one document. Every edit goes through model.change / commit / undo / redo, which set model.dirty and
  // move model.version; a watcher marks the copy changed and drops it once the model is saved, opened or new again.
  const autosave = new Autosave({ app: 'modelcraft' });
  // 0.10 PERF.24: the first copy is the whole text (written in the worker pool, PERF.38), then only what each edit changed (autosave-journal.js)
  const journal = modelJournal({ model, baseText: baseTextChecked, head: () => modelData({ raw: true, noDefs: true }), meta: () => ({ name: base() + '.modelcraft' }) });
  const adoc = autosave.doc({ id: 'open', name: base(), journal });
  ST.seenVersion = model.version; ST.copyPending = false;
  setInterval(() => {
    if (model.version === ST.seenVersion) return;
    ST.seenVersion = model.version;
    if (model.dirty) { adoc.rename(base()); adoc.changed(); ST.copyPending = true; } else if (ST.copyPending) { adoc.clean(); ST.copyPending = false; }
  }, 500);
  // automated browsers (tests that leave pages with edits open) see the dialog only when they ask: ?autosave=offer
  if (!navigator.webdriver || new URLSearchParams(location.search).get('autosave') === 'offer') autosave.offer({
    onRecover: async (rec) => {
      const copy = typeof rec.data === 'string' ? rec.data : (rec.data && rec.data.kind === 'm3d' ? recoverModelText(rec) : null);   // 0.10: the old whole text, or a base and its changes
      if (typeof copy !== 'string') throw new Error('This copy is empty.');   // i18n-ignore: shown by the shell's dialog for a damaged copy
      const name = String(rec.meta?.name || rec.name || 'Recovered.modelcraft');
      const ok = await openFile({ name: /\.modelcraft$/i.test(name) ? name : name + '.modelcraft', size: copy.length, text: async () => copy }, { recovered: true });
      if (!ok) throw new Error('This copy could not be read.');   // i18n-ignore: shown by the shell's dialog
      ST.seenVersion = -1;
    },
  });

  // ---- start ----
  applySettings();
  cam.setSize(view.w, view.h);
  renderScenes();
  scheduleInfo();
  view.invalidate();
  print(t('app.units.start', { unit: unitWords(model.units) }));
  // 0.7 WS.9: the shell's workspace layouts (Settings › Global › Layout) for builds whose manifest lists them (app-shell.inc writes
  // #cc-workspace and maps cc-workspace then); workspace-modelcraft.js fills the engine's blocks. A failed start shows the page.
  if (document.getElementById('cc-workspace')) {
    const show = () => document.documentElement.removeAttribute('data-cc-ws-boot');
    import('./workspace-modelcraft.js').then((m) => m.mountModelcraftLayouts({ root, t, mc: window.modelcraft, frame: frameSelection }))
      .then((api) => { ST.layouts = api; if (!api) show(); }, (err) => { show(); console.warn(err); });
  }
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
  // 0.11 SU.1814 (su-finish-11): ?partlink=<id>: BimCraft's Part links › Send to ModelCraft left an element for this tab (part-link-mc.js)
  Promise.all([import('./part-link-mc.js'), import('three')]).then(([PLM, THREE]) => {
    ST.bimLink = PLM.mountBimLink({ t, print, model, view, THREE, afterHistory, frame: zoomExtents, selection: () => host.sel });
    ST.bimLink.load(ST.bimLinksRaw);
    window.modelcraftBimLink = ST.bimLink;
    return ST.bimLink.receive();
  }).catch((err) => console.warn('part link:', err));   // i18n-ignore: a developer message
  // 0.8 EG.78 (studio_PART_2): a mesh dragged here from another app (PartCraft's part as an OBJ, in metres) through Studio's drag
  // module (window.cadcraftStudio.drag, hub/drag.js): it comes in as a group at the model's origin, one undo step, like a dropped file
  window.cadcraftStudio?.drag?.accept({ mesh: async ({ file, name }) => { await importFile(file); return t('app.drop.mesh', { name }); } });
  // 0.8 round 3 (model_PART_3): the shell's calc sheets, design reasons, running totals, lessons, Suggest, activity log and Ask box
  // (docs/apps/shell-modules.md § Mounting; shell-mount.js). They ride on host.control (agents.js) and keep nothing of their own in the model.
  function describeSel(s) {
    if (s.t === 'i') { const inst = model.context(host.path)?.def.insts.get(s.id), d = inst && model.defs.get(inst.def); return inst?.name || d?.name || t('mc.shell.sel.group'); }
    return t('mc.shell.sel.' + ({ f: 'face', e: 'edge', d: 'dimension', s: 'section', g: 'guide' }[s.t] || 'item'), { id: s.id });
  }
  ST.shell = mountModelShell({
    model, control: getHost({ app: 'modelcraft' }).control,
    selection: () => host.sel, setSel: (s) => host.setSel(s), name: () => ST.fileName, path: () => ST.saveTarget?.path || '',
    changed: () => { afterHistory(); },
    onSelection: (fn) => { selListeners.add(fn); return () => selListeners.delete(fn); },
    describe: describeSel,
    guideFacts: () => guideFacts(model, { ready: ST.printReady === model.version }),
  });
  // ---- drafting without sight (0.8 round 3, EG.52; assets/js/app-access.js): the groups and components of the open context in order, each said with its name and size; D counts what is there ----
  {
    const ctxDef2 = () => model.context(host.path)?.def;
    const label = (iid, inst) => { const d = model.defs.get(inst.def); return t('mc.access.inst', { name: inst.name || d?.name || t('mc.shell.sel.group'), faces: d ? d.faces.size : 0 }); };
    const goAccess = () => window.ccAccess.mount({
      stage: ui.over, label: () => t('mc.access.stage'),
      walk: () => { const d = ctxDef2(); return d ? [...d.insts].filter(([, i]) => !i.hidden).map(([id, i]) => ({ id, label: label(id, i) })) : []; },
      describe: () => { const d = ctxDef2(); if (!d) return t('mc.access.empty'); const n = [...d.insts].filter(([, i]) => !i.hidden).length; return d.faces.size + n + d.edges.size === 0 ? t('mc.access.empty') : t('mc.access.context', { name: d.name || ST.fileName || '', faces: d.faces.size, edges: d.edges.size, n, sel: host.sel.length }); },
      selection: () => host.sel.length ? t('mc.access.selected', { n: host.sel.length, what: host.sel.slice(0, 5).map((s) => describeSel(s)).join('; ') }) : t('mc.access.nosel'),
      pick: (p, item) => { if (item) { host.setSel([{ t: 'i', id: item.id }]); window.ccAccess.say(t('mc.access.selected', { n: 1, what: item.label })); } else window.ccAccess.say(t('mc.access.nosel')); },
    });
    const goStatus = () => { window.ccAccess.follow(ui.msg, { max: 240 }); window.ccAccess.follow(ui.tip, { max: 160 }); };
    for (const f of [goAccess, goStatus]) { if (window.ccAccess) f(); else document.addEventListener('cc-access-ready', f, { once: true }); }
  }
  window.modelcraft.shell = ST.shell;
}

export { TOOL_NAMES, VIEWS, connected };

/** 2026-11-09: the Model panel's heading text, written to its text node only, so the Auto-focus lock button inside the heading stays. */
function setInfoTitle(txt) { const h = document.querySelector('[data-info-h]'); if (!h) return; const tn = [...h.childNodes].find((x) => x.nodeType === 3); if (tn) tn.textContent = txt; else h.prepend(txt); }
