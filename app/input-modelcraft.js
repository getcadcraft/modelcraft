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
 *   Beginner    (0.7 LC.21, session print-07) a ribbon whose first tab is a few big buttons: shapes to drop, holes, move /
 *               turn / size, align, Group (holes cut into the shapes), Check for 3D printing; every other tool on the next
 *               tabs, small. Its own commands (group `beginner`, ui.inc's hidden [data-beginner] buttons, beginner-mc.js) are
 *               `optional`, so no other style has to place them: every other style is unchanged. The right button orbits,
 *               the middle pans.
 * These fold in ModelCraft's older "Keys" setting (Settings › ModelCraft, the status bar's Keys select, Edit › More): one
 * source of truth, the menu style. A style built on Modeler makes ModelCraft read keys the modeler way (settings.keys
 * 'blender'); every other style the push-pull way ('sketchup'); choosing a key set in the old places picks the matching
 * style (modelcraft.js syncKeyStyle). The keys a key set gives ModelCraft itself (KEYSETS) are left to the app, so its
 * own context keys (G grabs at once, X/Y/Z lock an axis while moving, Tab opens a group) keep working.
 * Mouse: the 3D view's middle and right buttons follow the style (orbit / pan / zoom / none / menu; Shift swaps orbit and
 * pan); the wheel's direction and speed. Settings › ModelCraft › Scrolling (mouse / trackpad / automatic) stays the app's.
 * 0.7.1 (session 071-keys; docs/0.7.1.md 71.14–71.16):
 *   - Esc and the arrow keys are commands (edit.cancel, aids.lock-*, camera.nudge-*): `keep` (a style saved before keeps
 *     them; a key moves them only once the command has another), `whileBusy` (they reach a running tool); cancel is
 *     `essential` (Customize warns when no key cancels and offers Esc back). Select none lost its fixed Esc (cancel does it).
 *   - Bindable view commands: Delete guides, Hide rest of model (while a group is open), Show hidden objects, X-ray.
 *   - MOUSE_MENU: the right button's default is the context menu for what is under the pointer (ModelCraft, Push-pull,
 *     Modeler); Shift + middle (and the Pan tool) pan. Beginner keeps its right-drag orbit. The Mouse tab still offers pan.
 *   - The workspaces' toolbar buttons (Mesh, Curve, UV, Sculpt, Shading, Animate, Render; WS_TOOLS) are commands too, a group
 *     per workspace: a menu each in Push-pull and Modeler, a Workspaces tab in Beginner. No keys (the workspaces keep their own).
 */

import { setMouse } from './input-mouse.js';

const C = (id, group, icon, sel, more = {}) => ({ id, group, icon, sel, label: 'input.cmd.' + id, defKeys: [], ...more });
const A = (act) => `.mc-tools [data-act="${act}"]`;
const TL = (tool) => `.mc-tools [data-tool="${tool}"]`;
const X = (fmt) => `.mc-tools [data-export="${fmt}"]`;
/**
 * 0.7.1: the workspaces' own toolbar groups (workspaces.js toolbarGroups; ws-<id>.js), in the page from the start and hidden
 * until that workspace opens; a button only acts in its own workspace (hidden = off, as the toolbar shows it). Command
 * `<workspace>.<name>` clicks `[data-cmd="<workspace>-<name>"]`, group = the workspace. [workspace, [[toolbar group, [[name,
 * icon], …]], …]] in the toolbar's order; keep it in step with each ws-<id>.js's groups (browser-input-apps.mjs checks).
 */
const WS_TOOLS = [
  ['mesh', [
    ['select', [['mode-vert', 'dot'], ['mode-edge', 'slash-lg'], ['mode-face', 'square-fill'], ['select-all', 'check2-all'], ['select-linked', 'diagram-2'], ['select-loop', 'arrow-repeat'], ['select-ring', 'circle'], ['select-more', 'plus-circle'], ['select-less', 'dash-circle']]],
    ['transform', [['grab', 'arrows-move'], ['rotate', 'arrow-clockwise'], ['scale', 'arrows-angle-expand'], ['edge-slide', 'arrow-left-right'], ['prop-toggle', 'bullseye']]],
    ['shape', [['extrude', 'box-arrow-up'], ['inset', 'bounding-box-circles'], ['bevel', 'bezier'], ['loopcut', 'distribute-vertical'], ['knife', 'scissors'], ['bisect', 'slash-square'], ['spin', 'arrow-counterclockwise'], ['subdivide', 'grid-3x3'], ['crease', 'vector-pen']]],
    ['join', [['merge', 'intersect'], ['dissolve', 'eraser'], ['fill', 'square'], ['grid-fill', 'grid'], ['bridge', 'bezier2'], ['flip', 'arrow-down-up'], ['smooth', 'droplet'], ['delete', 'trash']]],
    ['mesh', [['add', 'plus-square'], ['remesh', 'grid-3x3-gap'], ['done', 'box-arrow-left']]],
  ]],
  ['curve', [
    ['points', [['select-all', 'check2-all'], ['extrude', 'plus-circle'], ['subdivide', 'three-dots'], ['delete', 'trash'], ['grab', 'arrows-move'], ['rotate', 'arrow-clockwise'], ['scale', 'arrows-angle-expand']]],
    ['spline', [['cyclic', 'arrow-repeat'], ['reverse', 'arrow-left-right'], ['handles-auto', 'bezier'], ['handles-vector', 'slash-lg'], ['handles-free', 'vector-pen']]],
    ['type', [['type-bezier', 'bezier2'], ['type-nurbs', 'activity'], ['type-poly', 'graph-up']]],
    ['curve', [['add', 'plus-square'], ['to-mesh', 'box'], ['done', 'box-arrow-left']]],
  ]],
  ['uv', [
    ['select', [['mode-edge', 'slash-lg'], ['mode-face', 'square-fill'], ['select-all', 'check2-all'], ['select-linked', 'diagram-2']]],
    ['seams', [['seam-mark', 'scissors'], ['seam-clear', 'eraser'], ['seam-sharp', 'bezier2'], ['seam-islands', 'bounding-box']]],
    ['unwrap', [['unwrap', 'map'], ['unwrap-conformal', 'map-fill'], ['project-box', 'box'], ['project-cylinder', 'cup'], ['project-sphere', 'globe'], ['project-view', 'camera']]],
    ['arrange', [['pack', 'grid-1x2'], ['rotate90', 'arrow-clockwise'], ['flip-u', 'symmetry-vertical']]],
    ['show', [['checker', 'grid-3x3'], ['stretch', 'thermometer-half'], ['done', 'box-arrow-left']]],
  ]],
  ['sculpt', [
    ['brush', [['draw', 'brush'], ['clay', 'layers'], ['smooth', 'droplet'], ['grab', 'hand-index'], ['inflate', 'circle'], ['crease', 'slash-lg'], ['pinch', 'arrows-angle-contract'], ['flatten', 'dash-lg'], ['mask', 'mask']]],
    ['options', [['invert', 'dash-circle'], ['symmetry', 'symmetry-vertical'], ['detail', 'triangle'], ['mask-clear', 'eraser'], ['mask-invert', 'circle-half'], ['done', 'box-arrow-left']]],
  ]],
  ['shading', [
    ['material', [['new', 'plus-square'], ['duplicate', 'copy'], ['delete', 'trash'], ['paint', 'paint-bucket']]],
    ['nodes', [['add', 'node-plus'], ['frame', 'fullscreen']]],
    ['surface', [['decal', 'sticky'], ['texpaint', 'brush']]],
    ['done', [['done', 'box-arrow-left']]],
  ]],
  ['animate', [
    ['keys', [['keytransform', 'arrows-move'], ['keycam', 'camera-video'], ['auto', 'record-circle'], ['delete', 'trash']]],
    ['play', [['prev', 'skip-start-fill'], ['play', 'play-fill'], ['stop', 'pause-fill'], ['next', 'skip-end-fill']]],
    ['views', [['keys', 'list-ul'], ['curves', 'bezier'], ['clips', 'collection']]],
    ['rig', [['addbone', 'plus-lg'], ['pose', 'person-arms-up'], ['paint', 'brush'], ['autoweights', 'magic']]],
    ['physics', [['bake', 'lightning-charge']]],
  ]],
  ['render', [
    ['render', [['pause', 'pause-circle'], ['region', 'bounding-box'], ['region-clear', 'x-square'], ['focus', 'bullseye']]],
  ]],
];
const WS_IDS = WS_TOOLS.map(([ws]) => ws);
/** A workspace's command ids, a list per toolbar group. */
const wsGroups = (ws) => WS_TOOLS.find(([w]) => w === ws)[1].map(([, items]) => items.map(([n]) => ws + '.' + n));

export const COMMANDS = [
  C('file.new', 'file', 'bi-file-earmark-plus', A('new')),
  C('file.open', 'file', 'bi-folder2-open', A('open'), { defKeys: ['Ctrl+O'] }),
  C('file.save', 'file', 'bi-download', A('save'), { defKeys: ['Ctrl+S'] }),
  C('file.import', 'file', 'bi-box-arrow-in-down', A('import')),
  C('file.import-sketch', 'file', 'bi-camera', A('import-sketch')),   // 0.8 EG.36 (round 3): a sketch photo onto the ground (sketch-photo-mc.js)
  C('file.saveas', 'file', 'bi-file-earmark-arrow-down', A('saveas'), { defKeys: ['Ctrl+Shift+S'] }),   // 0.7 XF.9 (session usd)
  C('file.model-info', 'file', 'bi-info-circle', A('model-info')),   // 0.7.1 71.13 (File › Model)
  C('file.preferences', 'file', 'bi-gear', A('preferences')),
  C('export.glb', 'export', 'bi-box-arrow-up-right', X('glb')),
  C('export.dae', 'export', 'bi-box-arrow-up-right', X('dae')),
  C('export.obj', 'export', 'bi-box-arrow-up-right', X('obj')),
  C('export.stl', 'export', 'bi-box-arrow-up-right', X('stl')),
  C('export.ply', 'export', 'bi-box-arrow-up-right', X('ply')),   // 0.7 XF.3's PLY (session interchange; registered by session usd)
  C('export.usd', 'export', 'bi-box-arrow-up-right', X('usd')),   // 0.7 XF.8 (session usd)
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
  C('export.live', 'export', 'bi-play-btn', X('live'), { label: 'rt.menu' }),   // 0.7 RT.3 (session realtime): the live view
  C('export.live-window', 'export', 'bi-window-stack', X('live-window'), { label: 'rt.menu.window' }),
  C('export.video', 'export', 'bi-camera-reels', X('video')),   // 0.6 LC.10 (session lc-model)

  C('draw.line', 'draw', 'bi-slash-lg', TL('line'), { defKeys: ['L'] }),
  C('draw.rect', 'draw', 'bi-square', TL('rect'), { defKeys: ['R'] }),
  C('draw.circle', 'draw', 'bi-circle', TL('circle'), { defKeys: ['C'] }),
  C('draw.polygon', 'draw', 'bi-hexagon', TL('polygon'), { defKeys: ['N'] }),
  C('draw.arc', 'draw', 'bi-bezier2', TL('arc'), { defKeys: ['A'] }),
  C('draw.arcc', 'draw', 'bi-pie-chart', TL('arcc')),
  // 0.9 FX.137: the ten arc methods (lib/arcs), each its own tool, chosen from the Draw group's Arc methods menu
  C('draw.arc-3p', 'draw', 'bi-bezier2', TL('arc3p')),
  C('draw.arc-sce', 'draw', 'bi-bezier2', TL('arcsce')),
  C('draw.arc-sca', 'draw', 'bi-bezier2', TL('arcsca')),
  C('draw.arc-scl', 'draw', 'bi-bezier2', TL('arcscl')),
  C('draw.arc-sea', 'draw', 'bi-bezier2', TL('arcsea')),
  C('draw.arc-sed', 'draw', 'bi-bezier2', TL('arcsed')),
  C('draw.arc-ser', 'draw', 'bi-bezier2', TL('arcser')),
  C('draw.arc-cse', 'draw', 'bi-bezier2', TL('arccse')),
  C('draw.arc-csa', 'draw', 'bi-bezier2', TL('arccsa')),
  C('draw.arc-csl', 'draw', 'bi-bezier2', TL('arccsl')),
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
  C('modify.scale-by', 'modify', 'bi-aspect-ratio', A('scale-by')),   // 0.8 SU.934: factors per axis, shrinkage allowance
  C('modify.erase', 'modify', 'bi-eraser', TL('erase'), { defKeys: ['E'] }),
  C('modify.tape', 'modify', 'bi-rulers', TL('tape'), { defKeys: ['T'] }),
  C('modify.protractor', 'modify', 'bi-compass', TL('protractor')),
  C('modify.divide', 'modify', 'bi-distribute-horizontal', TL('divide')),   // 0.7 MC-DIVIDE
  C('modify.dim', 'modify', 'bi-arrow-left-right', TL('dim'), { defKeys: ['D'] }),

  C('organize.component', 'organize', 'bi-boxes', A('component'), { defKeys: ['G'] }),
  C('organize.group', 'organize', 'bi-collection', A('group'), { defKeys: ['Shift+G'] }),
  C('organize.furnish', 'organize', 'bi-lamp', A('furnish')),   // 0.8 EG.60 (round 3): furnish-mc.js
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
  C('edit.select-none', 'edit', 'bi-x-square', A('select-none')),   // 0.7.1: Esc belongs to edit.cancel (it deselects too)
  C('edit.cancel', 'edit', 'bi-x-circle', A('cancel'), { defKeys: ['Escape'], essential: true, whileBusy: true, keyOnly: true }),   // 0.7.1 MC-KEYS-META
  C('edit.delete-guides', 'edit', 'bi-eraser', A('del-guides')),   // 0.7.1 MC-KEYS-COMMANDS
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
  C('camera.ar', 'camera', 'bi-phone', '[data-ar-enter]'),   // 0.8 EG.21: the model at full size on site, through a phone   // i18n-ignore (a selector)
  C('camera.guide', 'camera', 'bi-signpost-2', '.mc-tools [data-guide-open]'),   // 0.6 LC.21
  // 0.9 FX.31: play or pause the animation (the timeline's own button); Space does it by itself while the timeline is open
  C('camera.play', 'camera', 'bi-play-fill', '[data-tl-play]', { keyOnly: true }),
  // 0.7.1 MC-KEYS-COMMANDS: view toggles (the Views menu)
  C('camera.xray', 'camera', 'bi-transparency', '.mc-tools [data-xray]'),
  C('camera.hide-rest', 'camera', 'bi-box', '.mc-tools [data-hide-rest]'),
  C('camera.hidden-objects', 'camera', 'bi-eye', '.mc-tools [data-show-hidden]'),
  // 0.7.1 MC-KEYS-META: what the arrow keys do (hidden buttons, ui.inc); Shift + an arrow pans
  ...[['left', 'ArrowLeft'], ['right', 'ArrowRight'], ['up', 'ArrowUp'], ['down', 'ArrowDown']].map(([d, k]) =>
    C('camera.nudge-' + d, 'camera', 'bi-arrow-' + d, A('nudge-' + d), { defKeys: ['Shift+' + k], keep: true, whileBusy: true, keyOnly: true })),

  // 0.8 D8.4: orbit on its own, so a style can put the axis locks and the orbit on different keys (the arrows are still the
  // defaults of aids.lock-*, which orbit when no tool is running); no default keys, never locks
  ...['left', 'right', 'up', 'down'].map((d) => C('camera.orbit-' + d, 'camera', 'bi-arrow-' + d + '-circle', A('orbit-' + d), { keep: true, whileBusy: true, keyOnly: true })),

  // 0.7 LC.21 (session print-07): the Beginner style's own commands (hidden buttons in ui.inc; beginner-mc.js does the work)
  ...[['box', 'bi-box'], ['cylinder', 'bi-database'], ['sphere', 'bi-circle-fill'], ['cone', 'bi-triangle'], ['roof', 'bi-house'],
    ['hole-box', 'bi-square-half'], ['hole-cylinder', 'bi-circle-half'], ['hole', 'bi-dash-square-dotted'], ['solid', 'bi-square-fill'],
    ['group', 'bi-collection'], ['align-left', 'bi-align-start'], ['align-centerx', 'bi-align-center'], ['align-right', 'bi-align-end'],
    ['align-front', 'bi-align-top'], ['align-centery', 'bi-align-middle'], ['align-back', 'bi-align-bottom'],
    ['align-bottom', 'bi-arrow-bar-down'], ['align-centerz', 'bi-distribute-vertical'], ['align-top', 'bi-arrow-bar-up'], ['drop', 'bi-download']]
    .map(([id, icon]) => C('beginner.' + id, 'beginner', icon, `.mc-tools [data-beginner="${id}"]`, { optional: true })),

  C('aids.snap', 'aids', 'bi-magnet', '[data-mc-toggle="snap"]'),
  C('aids.collide', 'aids', 'bi-bricks', '[data-mc-toggle="collide"]'),
  // 0.7.1 MC-KEYS-META: an arrow key locks an axis while a tool runs, else orbits that way (hidden buttons, ui.inc)
  ...[['red', 'ArrowRight', 'bi-arrow-right'], ['green', 'ArrowLeft', 'bi-arrow-left'], ['blue', 'ArrowUp', 'bi-arrow-up'], ['edge', 'ArrowDown', 'bi-arrow-down']].map(([a, k, icon]) =>
    C('aids.lock-' + a, 'aids', icon, A('lock-' + a), { defKeys: [k], keep: true, whileBusy: true, keyOnly: true })),

  // 0.7.1: the Mesh, Curve, UV, Sculpt, Shading, Animate and Render workspaces' toolbar buttons (WS_TOOLS); no keys of their own
  // here (each workspace keeps its own keys while it is open: ws-<id>.js keydown)
  ...WS_TOOLS.flatMap(([ws, groups]) => groups.flatMap(([, items]) => items.map(([n, icon]) => C(ws + '.' + n, ws, 'bi-' + icon, `.mc-tools [data-cmd="${ws}-${n}"]`)))),

  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
];
export const GROUPS = ['file', 'export', 'draw', 'modify', 'organize', 'edit', 'camera', 'aids', 'app', 'beginner', ...WS_IDS];

// ModelCraft's own keys = the registry's (the push-pull key set; what the app does with no profile at all)
const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));
const CTRL_KEYS = Object.fromEntries(Object.entries(DEFAULT_KEYS).filter(([, k]) => k.every((x) => /^(Ctrl|F\d)/.test(x))));
// 0.7.1: Esc and the arrows, the same in every key set
const NAV_KEYS = Object.fromEntries(COMMANDS.filter((c) => (c.keep || c.essential) && c.defKeys.length).map((c) => [c.id, c.defKeys.slice()]));
// the modeler key set (modelcraft.js, settings.keys 'blender')
const MODELER_KEYS = {
  ...CTRL_KEYS, ...NAV_KEYS,
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
const EXPORTS = ['export.glb', 'export.dae', 'export.obj', 'export.stl', 'export.ply', 'export.usd', 'export.ifc', 'export.storeys', 'export.dwg', 'export.dxf'];
const IMAGES = ['export.png', 'export.png2', 'export.pdf', 'export.print', 'export.print3d', 'export.render', 'export.video'];
const FLIPS = ['edit.flip-x', 'edit.flip-y', 'edit.flip-z', 'edit.flipcopy-x', 'edit.flipcopy-y', 'edit.flipcopy-z'];
const VIEWS = ['camera.iso', 'camera.top', 'camera.front', 'camera.right', 'camera.back', 'camera.left', 'camera.bottom'];
const APP = ['app.settings', 'app.palette', 'app.help'];
// 0.7.1: a menu per workspace (its toolbar groups between separators), for the menu-bar styles
const WS_MENUS = WS_IDS.map((ws) => m('ws-' + ws, wsGroups(ws).flatMap((ids, i) => (i ? ['-', ...ids] : ids))));
// the Beginner style (0.7 LC.21): a ribbon tab of big buttons, then every other tool, small, by group
const rtab = (label, panels) => ({ label: 'input.m.' + label, panels: panels.map(([l, items, more]) => ({ label: 'input.m.' + l, items, ...(more ? { more } : {}) })) });
const B = (id) => 'beginner.' + id;
const BEGINNER_MAKE = [
  ['b-shapes', [B('box'), B('cylinder'), B('sphere'), B('cone'), B('roof')]],
  ['b-holes', [{ id: B('hole-box'), size: 'lg' }, { id: B('hole-cylinder'), size: 'lg' }, { id: B('hole'), size: 'sm' }, { id: B('solid'), size: 'sm' }]],
  ['b-arrange', [{ id: 'modify.select', size: 'lg' }, { id: 'modify.move', size: 'lg' }, { id: 'modify.rotate', size: 'lg' }, { id: 'modify.scale', size: 'lg' },
    { split: [B('align-left'), B('align-centerx'), B('align-right')], size: 'sm' }, { split: [B('align-front'), B('align-centery'), B('align-back')], size: 'sm' },
    { split: [B('align-bottom'), B('align-centerz'), B('align-top')], size: 'sm' }, { id: B('drop'), size: 'sm' }]],
  ['b-group', [{ id: B('group'), size: 'lg' }, { id: 'organize.explode', size: 'sm' }, { id: 'edit.delete', size: 'sm' }]],
  ['b-check', ['export.print3d']],
];
// 0.7.1: the workspaces' tools on their own tab: a group per workspace, the first tool of each toolbar group shown, the rest
// under the group's arrow
const BEGINNER_WS = WS_IDS.map((ws) => { const gs = wsGroups(ws); return ['ws-' + ws, gs.map((ids) => ({ id: ids[0], size: 'sm' })), gs.flatMap((ids) => ids.slice(1))]; });
const BEGINNER_FILE = ['file.new', 'file.open', 'file.save', 'file.saveas', '-', 'file.import', 'file.import-sketch', '-', ...EXPORTS, '-', ...IMAGES, '-', 'file.model-info', 'file.preferences', '-', ...APP];
const BEGINNER_VIEW = [['b-camera', ['camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents']], ['b-views', [...VIEWS, 'camera.persp'].map((id) => ({ id, size: 'sm' }))]];
function beginnerRest() {
  const placed = new Set([...BEGINNER_FILE, ...[...BEGINNER_MAKE, ...BEGINNER_VIEW].flatMap(([, items]) => items.flatMap((it) => (typeof it === 'string' ? [it] : it.split || [it.id])))]);
  const rest = COMMANDS.filter((c) => !c.keyOnly && !c.optional && !placed.has(c.id));
  return ['draw', 'modify', 'organize', 'edit', 'camera', 'aids', 'export'].map((g) => ['b-' + g, rest.filter((c) => c.group === g).map((c) => ({ id: c.id, size: 'sm' }))]).filter(([, items]) => items.length);
}

export const STYLES = {
  modelcraft: {
    format: 'cadcraft-input', version: 1, id: 'modelcraft', name: 'input.style.modelcraft', builtin: true, layout: 'toolbar',
    keys: DEFAULT_KEYS,
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },   // null: middle orbits, Shift + middle pans, right = the context menu (0.7.1)
  },
  pushpull: {
    format: 'cadcraft-input', version: 1, id: 'pushpull', name: 'input.style.pushpull', builtin: true, layout: 'menubar',
    menus: [
      m('file', ['file.new', 'file.open', 'file.save', 'file.saveas', '-', 'file.import', 'file.import-sketch', '-', ...EXPORTS, '-', ...IMAGES, '-', 'file.model-info', 'file.preferences', '-', ...APP]),
      m('edit', ['edit.undo', 'edit.redo', '-', 'edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', 'edit.duplicate', 'edit.delete', '-', 'edit.select-all', 'edit.select-none', '-', 'edit.hide', 'edit.isolate', 'edit.unhide-all', 'edit.delete-guides', '-', 'organize.component', 'organize.group', 'organize.explode', 'organize.furnish', '-', 'edit.intersect-model', 'edit.intersect-sel']),
      m('view', ['camera.present', '-', 'camera.xray', 'camera.hide-rest', 'camera.hidden-objects', '-', 'camera.sec-planes', 'camera.sec-cuts', '-', 'camera.timeline', 'camera.vr', 'camera.ar', 'camera.guide', '-', 'export.live', 'export.live-window']),
      m('camera', ['camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents', '-', ...VIEWS, '-', 'camera.persp']),
      m('draw', ['draw.line', 'draw.arc', 'draw.arcc', 'draw.arc-3p', 'draw.arc-sce', 'draw.arc-sca', 'draw.arc-scl', 'draw.arc-sea', 'draw.arc-sed', 'draw.arc-ser', 'draw.arc-cse', 'draw.arc-csa', 'draw.arc-csl', 'draw.curve', '-', 'draw.rect', 'draw.circle', 'draw.polygon']),
      m('tools', ['modify.select', 'modify.erase', 'modify.paint', '-', 'modify.move', 'modify.push', 'modify.rotate', 'modify.follow', 'modify.scale', 'modify.scale-by', 'modify.offset', 'modify.divide', '-', 'organize.union', 'organize.subtract', 'organize.intersect', '-', ...FLIPS, '-', 'modify.tape', 'modify.dim', 'modify.protractor', 'draw.text3d', 'edit.axes-place', 'edit.axes-face', 'edit.axes-reset', '-', 'camera.section', '-', 'edit.terrain-contours', 'edit.terrain-grid', 'edit.sculpt']),
      ...WS_MENUS,   // 0.7.1
      m('window', ['aids.snap', 'aids.collide', '-', 'edit.keys-pushpull', 'edit.keys-modeler']),
    ],
    bar: ['modify.select', 'modify.erase', 'modify.paint', '-', 'draw.line', 'draw.arc', 'draw.rect', 'draw.circle', '-', 'modify.push', 'modify.move', 'modify.rotate', 'modify.scale', 'modify.offset', '-', 'modify.tape', 'modify.dim', '-', 'camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents', '-', 'edit.undo', 'edit.redo'],
    keys: { ...DEFAULT_KEYS },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: { left: 'none', middle: 'orbit', right: 'menu' } },   // 0.7.1: right was pan
  },
  modeler: {
    format: 'cadcraft-input', version: 1, id: 'modeler', name: 'input.style.modeler', builtin: true, layout: 'menubar',
    menus: [
      m('file', ['file.new', 'file.open', 'file.save', 'file.saveas', '-', 'file.import', 'file.import-sketch', '-', ...EXPORTS, '-', ...IMAGES, '-', 'file.model-info', 'file.preferences', '-', ...APP]),
      m('edit', ['edit.undo', 'edit.redo', '-', 'edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', '-', 'aids.snap', 'aids.collide', '-', 'edit.keys-pushpull', 'edit.keys-modeler']),
      m('view', ['camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents', '-', ...VIEWS, '-', 'camera.persp', 'camera.present', '-', 'camera.xray', 'camera.hide-rest', 'camera.hidden-objects', '-', 'camera.sec-planes', 'camera.sec-cuts', '-', 'camera.timeline', 'camera.vr', 'camera.ar', 'camera.guide', '-', 'export.live', 'export.live-window']),
      m('select', ['modify.select', 'edit.select-all', 'edit.select-none', '-', 'edit.hide', 'edit.isolate', 'edit.unhide-all', '-', 'edit.delete-guides']),
      m('add', ['draw.line', 'draw.arc', 'draw.arcc', 'draw.arc-3p', 'draw.arc-sce', 'draw.arc-sca', 'draw.arc-scl', 'draw.arc-sea', 'draw.arc-sed', 'draw.arc-ser', 'draw.arc-cse', 'draw.arc-csa', 'draw.arc-csl', 'draw.curve', 'draw.rect', 'draw.circle', 'draw.polygon', 'draw.text3d', '-', 'modify.tape', 'modify.protractor', 'modify.dim', 'camera.section']),
      m('object', ['modify.move', 'modify.rotate', 'modify.scale', 'modify.scale-by', '-', 'edit.duplicate', 'edit.delete', '-', ...FLIPS, '-', 'organize.group', 'organize.component', 'organize.explode', 'organize.furnish', '-', 'organize.union', 'organize.subtract', 'organize.intersect', '-', 'edit.axes-place', 'edit.axes-face', 'edit.axes-reset']),
      m('mesh', ['modify.push', 'modify.follow', 'modify.offset', 'modify.divide', 'modify.erase', 'modify.paint', '-', 'edit.intersect-model', 'edit.intersect-sel', '-', 'edit.terrain-contours', 'edit.terrain-grid', 'edit.sculpt']),
      ...WS_MENUS,   // 0.7.1
    ],
    bar: ['modify.select', 'modify.move', 'modify.rotate', 'modify.scale', '-', 'modify.push', 'draw.line', 'draw.rect', 'draw.circle', '-', 'modify.tape', 'modify.dim', '-', 'camera.orbit', 'camera.pan', 'camera.zoom', 'camera.extents', '-', 'edit.undo', 'edit.redo'],
    labels: { 'modify.move': 'input.lbl.modeler.move', 'modify.push': 'input.lbl.modeler.push', 'modify.divide': 'input.lbl.modeler.divide' },
    keys: MODELER_KEYS,
    // the middle button orbits (Shift + middle pans, Ctrl + middle zooms); the right button cancels a running tool, else
    // opens the context menu (0.7.1; it did nothing)
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle'], orbit3d: { left: 'none', middle: 'orbit', right: 'menu' } },
  },
  beginner: {
    format: 'cadcraft-input', version: 1, id: 'beginner', name: 'input.style.beginner', builtin: true, layout: 'ribbon',
    menus: [m('file', BEGINNER_FILE)],
    quick: ['file.new', 'file.open', 'file.save', 'edit.undo', 'edit.redo'],
    tabs: [rtab('b-make', BEGINNER_MAKE), rtab('b-view', BEGINNER_VIEW), rtab('b-more', beginnerRest()), rtab('b-workspaces', BEGINNER_WS)],
    keys: { ...DEFAULT_KEYS },
    // the right button orbits and the middle pans, as most beginner 3D tools do; the wheel zooms
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: { left: 'none', middle: 'pan', right: 'orbit' } },
  },
};
export const STYLE_ORDER = ['modelcraft', 'pushpull', 'modeler', 'beginner'];

/** IP.4: each style's family. Push-pull is the menu-bar member; Modeler has no counterpart in the other apps (no family:
 *  "Use this style in every app" is off for it). */
export const FAMILY = { modelcraft: 'own', pushpull: 'menus' };   // Beginner (0.7 LC.21) has no counterpart in the other apps either
export const STORE = 'modelcraft.input';
/** 0.7.1 MC-RIGHTCLICK-MENU: the 3D view has a context menu, so 'menu' is a mouse action here. */
export const MOUSE_MENU = true;

/** The key set (settings.keys) a style stands for: Modeler and the person's styles built on it → 'blender'. */
export function keySetOf(profile) {
  if (!profile) return 'sketchup';
  return (profile.builtin ? profile.id : profile.base) === 'modeler' ? 'blender' : 'sketchup';
}

/**
 * The page side the shell asks for (app-input-ui.js). modelcraft.js sets window.ccInputHooks = { status, busy } and
 * window.modelcraft.syncKeyStyle (the old Keys setting follows the style in use).
 */
export function hooks({ t } = {}) {
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
    // 0.7 LC.21: the Beginner style's own commands are hidden buttons (data-input-only): hidden is not "off" for them
    why(cmd, b, generic) {
      if (b && b.hasAttribute('data-input-only') && !b.disabled && b.getAttribute('aria-disabled') !== 'true') return '';
      // 0.7.1: a workspace's tool while that workspace is closed: say which one to open
      const g = b?.closest('[data-workspace-group]');
      if (g?.hidden && t) return t('input.why.ws', { ws: t('input.grp.' + g.dataset.workspaceGroup) });
      return generic(cmd, b);
    },
    mouse(mm) {
      setMouse(mm);
      queueMicrotask(() => window.modelcraft?.syncKeyStyle?.());   // the style in use decides the key set
    },
  };
}
