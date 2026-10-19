/* SPDX-License-Identifier: Apache-2.0 */
/**
 * input-modelcraft.js — ModelCraft's command registry for the shell's input engine (0.5 track IP.3; engine
 * assets/js/app-input.js + app-input-ui.js, map docs/apps/app-input.md; manifest "input": "input-modelcraft.js").
 * DOM-free data, plus hooks() which runs only on the page.
 *
 * COMMANDS: every toolbar command (ui.inc $__tools and the Export, Solids, Edit › More and Views menus) and the status
 * bar's Snap and Collide. Each clicks the app's own button (one code path for every style). defKeys = the keys ModelCraft
 * gives with its push-pull key set (modelcraft.js's keydown handler, settings.keys 'sketchup'). Labels: `input.cmd.<id>`.
 *
 * STYLES (named for a way of working, never a product):
 *   ModelCraft  today's toolbar and keys (the push-pull key set)
 *   Push-pull   a menu bar (File, Edit, View, Camera, Draw, Tools, Window) and a row of the main tools, with the push-pull keys
 *   Modeler     a header menu bar (File, Edit, View, Select, Add, Object, Mesh) and the modeler key set: W select, G / R / S
 *               grab, rotate and scale at once, E push/pull, B rectangle, X delete, A select all, Shift+D duplicate, Ctrl+G group
 * These fold in ModelCraft's older "Keys" setting (Settings › ModelCraft, the status bar's Keys select, Edit › More): one
 * source of truth, the menu style. A style built on Modeler makes ModelCraft read keys the modeler way (settings.keys
 * 'blender'); every other style the push-pull way ('sketchup'); choosing a key set in the old places picks the matching
 * style (modelcraft.js syncKeyStyle). The keys a key set gives ModelCraft itself (KEYSETS) are left to the app, so its
 * own context keys (G grabs at once, X/Y/Z lock an axis while moving, Tab opens a group) keep working.
 * Mouse: the 3D view's middle and right buttons follow the style (orbit / pan / zoom / none; Shift swaps orbit and pan);
 * the wheel's direction and speed. Settings › ModelCraft › Scrolling (mouse / trackpad / automatic) stays the app's.
 */

import { setMouse } from './input-mouse.js';

const C = (id, group, icon, sel, more = {}) => ({ id, group, icon, sel, label: 'input.cmd.' + id, defKeys: [], ...more });
const A = (act) => `.mc-tools [data-act="${act}"]`;
const TL = (tool) => `.mc-tools [data-tool="${tool}"]`;
const X = (fmt) => `.mc-tools [data-export="${fmt}"]`;

export const COMMANDS = [
  C('file.new', 'file', 'bi-file-earmark-plus', A('new')),
  C('file.open', 'file', 'bi-folder2-open', A('open'), { defKeys: ['Ctrl+O'] }),
  C('file.save', 'file', 'bi-download', A('save'), { defKeys: ['Ctrl+S'] }),
  C('file.import', 'file', 'bi-box-arrow-in-down', A('import')),
  C('export.glb', 'export', 'bi-box-arrow-up-right', X('glb')),
  C('export.dae', 'export', 'bi-box-arrow-up-right', X('dae')),
  C('export.obj', 'export', 'bi-box-arrow-up-right', X('obj')),
  C('export.stl', 'export', 'bi-box-arrow-up-right', X('stl')),
  C('export.print3d', 'export', 'bi-printer', X('print3d')),
  C('export.ifc', 'export', 'bi-building', X('ifc')),
  C('export.storeys', 'export', 'bi-layers', A('storeys')),
  C('export.dwg', 'export', 'bi-file-earmark-ruled', X('dwg')),
  C('export.dxf', 'export', 'bi-file-earmark-ruled', X('dxf')),
  C('export.png', 'export', 'bi-image', X('png')),
  C('export.png2', 'export', 'bi-images', X('png2')),
  C('export.pdf', 'export', 'bi-file-earmark-pdf', X('pdf')),
  C('export.print', 'export', 'bi-printer', X('print')),
  C('export.render', 'export', 'bi-camera', X('render')),
  C('export.video', 'export', 'bi-camera-reels', X('video')),   // 0.6 LC.10 (session lc-model)

  C('draw.line', 'draw', 'bi-slash-lg', TL('line'), { defKeys: ['L'] }),
  C('draw.rect', 'draw', 'bi-square', TL('rect'), { defKeys: ['R'] }),
  C('draw.circle', 'draw', 'bi-circle', TL('circle'), { defKeys: ['C'] }),
  C('draw.polygon', 'draw', 'bi-hexagon', TL('polygon'), { defKeys: ['N'] }),
  C('draw.arc', 'draw', 'bi-bezier2', TL('arc'), { defKeys: ['A'] }),
  C('draw.arcc', 'draw', 'bi-pie-chart', TL('arcc')),
  C('draw.curve', 'draw', 'bi-bezier', TL('curve')),
  C('draw.text3d', 'draw', 'bi-fonts', A('text3d')),

  C('modify.select', 'modify', 'bi-cursor', TL('select')),
  C('modify.push', 'modify', 'bi-box-arrow-up', TL('push'), { defKeys: ['P'] }),
  C('modify.follow', 'modify', 'bi-arrow-90deg-up', TL('follow')),
  C('modify.paint', 'modify', 'bi-paint-bucket', TL('paint'), { defKeys: ['B'] }),
  C('modify.offset', 'modify', 'bi-bounding-box', TL('offset'), { defKeys: ['F'] }),
  C('modify.move', 'modify', 'bi-arrows-move', TL('move'), { defKeys: ['M'] }),
  C('modify.rotate', 'modify', 'bi-arrow-repeat', TL('rotate'), { defKeys: ['Q'] }),
  C('modify.scale', 'modify', 'bi-arrows-angle-expand', TL('scale'), { defKeys: ['S'] }),
  C('modify.erase', 'modify', 'bi-eraser', TL('erase'), { defKeys: ['E'] }),
  C('modify.tape', 'modify', 'bi-rulers', TL('tape'), { defKeys: ['T'] }),
  C('modify.protractor', 'modify', 'bi-compass', TL('protractor')),
  C('modify.dim', 'modify', 'bi-arrow-left-right', TL('dim'), { defKeys: ['D'] }),

  C('organize.component', 'organize', 'bi-boxes', A('component'), { defKeys: ['G'] }),
  C('organize.group', 'organize', 'bi-collection', A('group'), { defKeys: ['Shift+G'] }),
  C('organize.explode', 'organize', 'bi-grid-3x3-gap', A('explode')),
  C('organize.union', 'organize', 'bi-union', A('solid-union')),
  C('organize.subtract', 'organize', 'bi-subtract', A('solid-subtract')),
  C('organize.intersect', 'organize', 'bi-intersect', A('solid-intersect')),

  C('edit.undo', 'edit', 'bi-arrow-counterclockwise', A('undo'), { defKeys: ['Ctrl+Z'] }),
  C('edit.redo', 'edit', 'bi-arrow-clockwise', A('redo'), { defKeys: ['Ctrl+Y', 'Ctrl+Shift+Z'] }),
  C('edit.copy', 'edit', 'bi-copy', A('copy'), { defKeys: ['Ctrl+C'] }),
  C('edit.paste', 'edit', 'bi-clipboard-plus', A('paste'), { defKeys: ['Ctrl+V'] }),
  C('edit.cut', 'edit', 'bi-scissors', A('cut'), { defKeys: ['Ctrl+X'] }),
  C('edit.paste-in-place', 'edit', 'bi-clipboard-check', A('paste-in-place'), { defKeys: ['Ctrl+Shift+V'] }),
  C('edit.duplicate', 'edit', 'bi-files', A('duplicate'), { defKeys: ['Ctrl+D'] }),
  C('edit.delete', 'edit', 'bi-trash', A('delete'), { defKeys: ['Delete'], fixed: true }),
  C('edit.hide', 'edit', 'bi-eye-slash', A('hide')),
  C('edit.isolate', 'edit', 'bi-bullseye', A('isolate')),
  C('edit.unhide-all', 'edit', 'bi-eye', A('unhide-all')),
  C('edit.flip-x', 'edit', 'bi-symmetry-vertical', A('flip-x')),
  C('edit.flip-y', 'edit', 'bi-symmetry-vertical', A('flip-y')),
  C('edit.flip-z', 'edit', 'bi-symmetry-horizontal', A('flip-z')),
  C('edit.flipcopy-x', 'edit', 'bi-symmetry-vertical', A('flipcopy-x')),
  C('edit.flipcopy-y', 'edit', 'bi-symmetry-vertical', A('flipcopy-y')),
  C('edit.flipcopy-z', 'edit', 'bi-symmetry-horizontal', A('flipcopy-z')),
  C('edit.intersect-model', 'edit', 'bi-intersect', A('intersect-model')),
  C('edit.intersect-sel', 'edit', 'bi-intersect', A('intersect-sel')),
  C('edit.terrain-contours', 'edit', 'bi-globe', A('terrain-contours')),
  C('edit.terrain-grid', 'edit', 'bi-grid-3x3', A('terrain-grid')),
  C('edit.sculpt', 'edit', 'bi-brush', A('sculpt')),
  C('edit.axes-place', 'edit', 'bi-plus-lg', A('axes-place')),
  C('edit.axes-face', 'edit', 'bi-bounding-box-circles', A('axes-face')),
  C('edit.axes-reset', 'edit', 'bi-arrow-counterclockwise', A('axes-reset')),
  C('edit.select-all', 'edit', 'bi-check2-all', A('select-all'), { defKeys: ['Ctrl+A'] }),
  C('edit.select-none', 'edit', 'bi-x-square', A('select-none'), { defKeys: ['Escape'], fixed: true }),
  C('edit.keys-pushpull', 'edit', 'bi-keyboard', A('keys-sketchup')),
  C('edit.keys-modeler', 'edit', 'bi-keyboard', A('keys-blender')),

  C('camera.orbit', 'camera', 'bi-arrow-clockwise', TL('orbit'), { defKeys: ['O'] }),
  C('camera.pan', 'camera', 'bi-arrows-move', TL('pan'), { defKeys: ['H'] }),
  C('camera.zoom', 'camera', 'bi-zoom-in', TL('zoom'), { defKeys: ['Z'] }),
  C('camera.extents', 'camera', 'bi-arrows-fullscreen', A('extents'), { defKeys: ['Shift+Z'] }),
  C('camera.section', 'camera', 'bi-scissors', TL('section')),
  C('camera.iso', 'camera', 'bi-badge-3d', '.mc-tools [data-view="iso"]'),
  C('camera.top', 'camera', 'bi-square', '.mc-tools [data-view="top"]'),
  C('camera.front', 'camera', 'bi-layout-sidebar-inset', '.mc-tools [data-view="front"]'),
  C('camera.right', 'camera', 'bi-layout-sidebar-inset-reverse', '.mc-tools [data-view="right"]'),
  C('camera.back', 'camera', 'bi-layout-sidebar', '.mc-tools [data-view="back"]'),
  C('camera.left', 'camera', 'bi-layout-sidebar', '.mc-tools [data-view="left"]'),
  C('camera.bottom', 'camera', 'bi-square', '.mc-tools [data-view="bottom"]'),
  C('camera.persp', 'camera', 'bi-camera', '.mc-tools [data-persp]'),
  C('camera.present', 'camera', 'bi-easel', '.mc-tools [data-present]', { defKeys: ['Shift+P'] }),
  C('camera.sec-planes', 'camera', 'bi-slash-square', '.mc-tools [data-sec-planes]'),
  C('camera.sec-cuts', 'camera', 'bi-scissors', '.mc-tools [data-sec-cuts]'),
  C('camera.timeline', 'camera', 'bi-film', '.mc-tools [data-timeline-toggle]'),   // 0.6 LC.10
  C('camera.vr', 'camera', 'bi-headset-vr', '.mc-tools [data-xr-enter]'),   // 0.6 LC.19
  C('camera.guide', 'camera', 'bi-signpost-2', '.mc-tools [data-guide-open]'),   // 0.6 LC.21

  C('aids.snap', 'aids', 'bi-magnet', '[data-mc-toggle="snap"]'),
  C('aids.collide', 'aids', 'bi-bricks', '[data-mc-toggle="collide"]'),

  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
];
export const GROUPS = ['file', 'export', 'draw', 'modify', 'organize', 'edit', 'camera', 'aids', 'app'];

// ModelCraft's own keys = the registry's (the push-pull key set; what the app does with no profile at all)
const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));
const CTRL_KEYS = Object.fromEntries(Object.entries(DEFAULT_KEYS).filter(([, k]) => k.every((x) => /^(Ctrl|F\d)/.test(x))));
// the modeler key set (modelcraft.js, settings.keys 'blender')
const MODELER_KEYS = {
  ...CTRL_KEYS,
  'modify.select': ['W'], 'draw.line': ['L'], 'draw.rect': ['B'], 'draw.circle': ['C'], 'draw.polygon': ['N'], 'modify.push': ['E'],
  'modify.tape': ['T'], 'modify.dim': ['D'], 'modify.move': ['G'], 'modify.rotate': ['R'], 'modify.scale': ['S'],
  'camera.extents': ['Shift+C'], 'edit.select-all': ['A', 'Ctrl+A'], 'edit.hide': ['H'], 'edit.isolate': ['Shift+H'], 'edit.unhide-all': ['Alt+H'],
  'edit.duplicate': ['Shift+D', 'Ctrl+D'], 'organize.group': ['Ctrl+G'], 'organize.component': ['Ctrl+Shift+G'], 'camera.present': ['Shift+P'],
};
/**
 * What each key set makes ModelCraft do by itself (modelcraft.js keydown): combo → command id, or '*' for a key the app
 * handles in its own way that no single command stands for (X deletes, Alt+A selects nothing, Home frames everything).
 * hooks().keepKey leaves these to the app while the style in use gives that key the same command.
 */
const keyset = (keys, extra = {}) => {
  const m = new Map(Object.entries(extra));
  for (const [id, ks] of Object.entries(keys)) for (const k of ks) if (!m.has(k)) m.set(k, id);
  return m;
};
export const KEYSETS = {
  sketchup: keyset(DEFAULT_KEYS),
  blender: keyset(MODELER_KEYS, { X: '*', 'Alt+A': '*', Home: '*' }),
};

const m = (label, items) => ({ label: 'input.m.' + label, items });
const EXPORTS = ['export.glb', 'export.dae', 'export.obj', 'export.stl', 'export.ifc', 'export.storeys', 'export.dwg', 'export.dxf'];
const IMAGES = ['export.png', 'export.png2', 'export.pdf', 'export.print', 'export.print3d', 'export.render', 'export.video'];
const FLIPS = ['edit.flip-x', 'edit.flip-y', 'edit.flip-z', 'edit.flipcopy-x', 'edit.flipcopy-y', 'edit.flipcopy-z'];
const VIEWS = ['camera.iso', 'camera.top', 'camera.front', 'camera.right', 'camera.back', 'camera.left', 'camera.bottom'];
const APP = ['app.settings', 'app.palette', 'app.help'];

export const STYLES = {
  modelcraft: {
    format: 'cadcraft-input', version: 1, id: 'modelcraft', name: 'input.style.modelcraft', builtin: true, layout: 'toolbar',
    keys: DEFAULT_KEYS,
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },   // null: middle orbits, right (or Shift + middle) pans
  },
  pushpull: {
    format: 'cadcraft-input', version: 1, id: 'pushpull', name: 'input.style.pushpull', builtin: true, layout: 'menubar',
    menus: [
      m('file', ['file.new', 'file.open', 'file.save', '-', 'file.import', '-', ...EXPORTS, '-', ...IMAGES, '-', ...APP]),
      m('edit', ['edit.undo', 'edit.redo', '-', 'edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', 'edit.duplicate', 'edit.delete', '-', 'edit.select-all', 'edit.select-none', '-', 'edit.hide', 'edit.isolate', 'edit.unhide-all', '-', 'organize.component', 'organize.group', 'organize.explode', '-', 'edit.intersect-model', 'edit.intersect-sel']),
      m('view', ['camera.present', '-', 'camera.sec-planes', 'camera.sec-cuts', '-', 'camera.timeline', 'camera.vr', 'camera.guide']),
      m('camera', ['camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents', '-', ...VIEWS, '-', 'camera.persp']),
      m('draw', ['draw.line', 'draw.arc', 'draw.arcc', 'draw.curve', '-', 'draw.rect', 'draw.circle', 'draw.polygon']),
      m('tools', ['modify.select', 'modify.erase', 'modify.paint', '-', 'modify.move', 'modify.push', 'modify.rotate', 'modify.follow', 'modify.scale', 'modify.offset', '-', 'organize.union', 'organize.subtract', 'organize.intersect', '-', ...FLIPS, '-', 'modify.tape', 'modify.dim', 'modify.protractor', 'draw.text3d', 'edit.axes-place', 'edit.axes-face', 'edit.axes-reset', '-', 'camera.section', '-', 'edit.terrain-contours', 'edit.terrain-grid', 'edit.sculpt']),
      m('window', ['aids.snap', 'aids.collide', '-', 'edit.keys-pushpull', 'edit.keys-modeler']),
    ],
    bar: ['modify.select', 'modify.erase', 'modify.paint', '-', 'draw.line', 'draw.arc', 'draw.rect', 'draw.circle', '-', 'modify.push', 'modify.move', 'modify.rotate', 'modify.scale', 'modify.offset', '-', 'modify.tape', 'modify.dim', '-', 'camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents', '-', 'edit.undo', 'edit.redo'],
    keys: { ...DEFAULT_KEYS },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: { left: 'none', middle: 'orbit', right: 'pan' } },
  },
  modeler: {
    format: 'cadcraft-input', version: 1, id: 'modeler', name: 'input.style.modeler', builtin: true, layout: 'menubar',
    menus: [
      m('file', ['file.new', 'file.open', 'file.save', '-', 'file.import', '-', ...EXPORTS, '-', ...IMAGES, '-', ...APP]),
      m('edit', ['edit.undo', 'edit.redo', '-', 'edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', '-', 'aids.snap', 'aids.collide', '-', 'edit.keys-pushpull', 'edit.keys-modeler']),
      m('view', ['camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents', '-', ...VIEWS, '-', 'camera.persp', 'camera.present', '-', 'camera.sec-planes', 'camera.sec-cuts', '-', 'camera.timeline', 'camera.vr', 'camera.guide']),
      m('select', ['modify.select', 'edit.select-all', 'edit.select-none', '-', 'edit.hide', 'edit.isolate', 'edit.unhide-all']),
      m('add', ['draw.line', 'draw.arc', 'draw.arcc', 'draw.curve', 'draw.rect', 'draw.circle', 'draw.polygon', 'draw.text3d', '-', 'modify.tape', 'modify.protractor', 'modify.dim', 'camera.section']),
      m('object', ['modify.move', 'modify.rotate', 'modify.scale', '-', 'edit.duplicate', 'edit.delete', '-', ...FLIPS, '-', 'organize.group', 'organize.component', 'organize.explode', '-', 'organize.union', 'organize.subtract', 'organize.intersect', '-', 'edit.axes-place', 'edit.axes-face', 'edit.axes-reset']),
      m('mesh', ['modify.push', 'modify.follow', 'modify.offset', 'modify.erase', 'modify.paint', '-', 'edit.intersect-model', 'edit.intersect-sel', '-', 'edit.terrain-contours', 'edit.terrain-grid', 'edit.sculpt']),
    ],
    bar: ['modify.select', 'modify.move', 'modify.rotate', 'modify.scale', '-', 'modify.push', 'draw.line', 'draw.rect', 'draw.circle', '-', 'modify.tape', 'modify.dim', '-', 'camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents', '-', 'edit.undo', 'edit.redo'],
    labels: { 'modify.move': 'input.lbl.modeler.move', 'modify.push': 'input.lbl.modeler.push' },
    keys: MODELER_KEYS,
    // the middle button orbits (Shift + middle pans, Ctrl + middle zooms); the right button belongs to the tool (it cancels)
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle'], orbit3d: { left: 'none', middle: 'orbit', right: 'none' } },
  },
};
export const STYLE_ORDER = ['modelcraft', 'pushpull', 'modeler'];

/** IP.4: each style's family. Push-pull is the menu-bar member; Modeler has no counterpart in the other apps (no family:
 *  "Use this style in every app" is off for it). */
export const FAMILY = { modelcraft: 'own', pushpull: 'menus' };
export const STORE = 'modelcraft.input';

/** The key set (settings.keys) a style stands for: Modeler and the person's styles built on it → 'blender'. */
export function keySetOf(profile) {
  if (!profile) return 'sketchup';
  return (profile.builtin ? profile.id : profile.base) === 'modeler' ? 'blender' : 'sketchup';
}

/**
 * The page side the shell asks for (app-input-ui.js). modelcraft.js sets window.ccInputHooks = { status, busy } and
 * window.modelcraft.syncKeyStyle (the old Keys setting follows the style in use).
 */
export function hooks() {
  const norm = (k) => String(k);
  return {
    toolbar: () => document.querySelector('body > main > .mc-tools'),
    // a key the app's own key set handles, given the same command by the style in use: the app does it (its context
    // keys included); anything else goes through the style
    keepKey(combo) {
      const p = window.ccInput?.current();
      if (!p) return false;
      const set = KEYSETS[keySetOf(p)];
      const id = set.get(norm(combo));
      if (!id) return false;
      if (id === '*') return true;
      return (p.keys?.[id] || []).includes(combo);
    },
    mouse(mm) {
      setMouse(mm);
      queueMicrotask(() => window.modelcraft?.syncKeyStyle?.());   // the style in use decides the key set
    },
  };
}
