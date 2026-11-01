/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person. */
/**
 * agents.js — ModelCraft for AI assistants and scripts (0.4 part 2 X.7, session agents; docs/AGENTS-SPEC.md §5.2): basic
 * modeling. The apps contain no AI: this gives the person's own assistant tools; Settings › Assistants (host.js) decides which.
 *
 * DOM-free kernel side (Node-testable): describeModel(model), boxPolys(w, d, h), cylinderPolys(r, h, sides), addSolid(model, polys,
 * name, at), moveInstance(model, iid, by), eraseInstances(model, ids). Each edit runs inside model.change('Assistant: …') = one
 * undo step. Solids come in as groups, so they never merge with what the person drew.
 * 0.7 AS.5 (session assistants): facesOf(model, instance), pushPullFace, paintWith, makeGroupOf, paintOf (colour / palette name /
 * material id → a paint), the library MATERIALS (render/materials.js); live: faces_list, materials_list, push_pull, paint,
 * group_make, scene_add, scene_show. 0.7 AS.6 over `mesh`'s MD.2 / MD.3 (both done, mesh stopped): addMeshPrimitive, the modifier
 * stack (def.mods, cleaned by mesh/modifiers.js cleanMods); live: mesh_add, modifiers_list, modifier_add, modifier_set,
 * modifier_remove. 0.7 AS.6 over `render`'s Render dialog (session assistants-gaps): render_still, render_queue (render-tools.js,
 * shared with BimCraft) when the page hands `render`.
 * The page (modelcraft.js) calls installAgents({...}) once.
 */
import { meshDef, solidInfo, pushPull, paintFaces, paintInstance, faceNormal, faceArea, isPaint, PALETTE, cleanScene } from './model.js';
import { MATERIALS, material, documentMaterials } from './render/materials.js';
import { makePrimitive, PRIMITIVES } from './mesh/primitives.js';
import { MODS, MOD_TYPES, cleanMods, newMod } from './mesh/modifiers.js';
import { parseLength, formatLength } from './units.js';
import { getHost, toolResult, stackRollback, peekUndo } from "./host.js";
import { renderTools } from './render-tools.js';
import { lookTools } from './look-tools.js';
import { photoTools } from './photo-tools.js';

const r6 = (v) => Math.round(v * 1e6) / 1e6;

/** A length the assistant typed: a number in the model's display unit, or text the value box takes ("10'", "3.2m"). → meters. */
export function lengthOf(v, unit) {
  const m = typeof v === 'number' ? parseLength(String(v), unit) : parseLength(String(v ?? ''), unit);
  if (m === null || m === undefined || !Number.isFinite(m)) throw new Error('"' + v + '" is not a length.');
  return m;
}

/** The six faces of a w × d × h box from its lowest corner at the origin, outward. */
export function boxPolys(w, d, h) {
  return [
    [[0, 0, 0], [0, d, 0], [w, d, 0], [w, 0, 0]],
    [[0, 0, h], [w, 0, h], [w, d, h], [0, d, h]],
    [[0, 0, 0], [w, 0, 0], [w, 0, h], [0, 0, h]],
    [[w, d, 0], [0, d, 0], [0, d, h], [w, d, h]],
    [[0, d, 0], [0, 0, 0], [0, 0, h], [0, d, h]],
    [[w, 0, 0], [w, d, 0], [w, d, h], [w, 0, h]],
  ];
}

/** A cylinder of radius r and height h standing on the origin (its centre), `sides` facets. */
export function cylinderPolys(r, h, sides = 24) {
  const ring = (z) => Array.from({ length: sides }, (_, i) => { const a = (2 * Math.PI * i) / sides; return [r * Math.cos(a), r * Math.sin(a), z]; });
  const lo = ring(0), hi = ring(h);
  const polys = [lo.slice().reverse(), hi];
  for (let i = 0; i < sides; i++) { const j = (i + 1) % sides; polys.push([lo[i], lo[j], hi[j], hi[i]]); }
  return polys;
}

const translate = (p) => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, p[0], p[1], p[2], 1];

/** A solid as a new group placed in the model at `at` (meters). → {instance, def, volume}. Call inside model.change. */
export function addSolid(model, polys, name, at) {
  const d = meshDef(model, polys, name, 'group');
  const info = solidInfo(d);
  const iid = model.place(model.root, d.id, translate(at));
  return { instance: iid, def: d.id, closed: info.closed, volume: info.volume };
}

export function moveInstance(model, iid, by) {
  const inst = model.root.insts.get(iid);
  if (!inst) throw new Error('There is no group or component ' + iid + ' in the model (model_describe lists them).');
  const m = inst.m.slice();
  m[12] += by[0]; m[13] += by[1]; m[14] += by[2];
  model.root.insts.set(iid, { ...inst, m });
}

export function eraseInstances(model, ids) {
  const bad = ids.filter((id) => !model.root.insts.has(id));
  if (bad.length) throw new Error('No groups or components ' + bad.join(', ') + ' in the model.');
  for (const id of ids) model.root.insts.delete(id);
}

// ---------------------------------------------------------------- 0.7 AS.5: faces, push/pull, paint, groups

/** The geometry an instance id names (its definition: a component's edits show in every copy), or the loose geometry. */
export function defOf(model, instance) {
  if (instance === undefined || instance === null) return { def: model.root, where: 'the loose geometry' };
  const inst = model.root.insts.get(instance);
  if (!inst) throw new Error('There is no group or component ' + instance + ' in the model (model_describe lists them).');
  const def = model.defs.get(inst.def);
  if (!def) throw new Error('Group ' + instance + ' has no geometry.');
  return { def, inst, where: (def.kind === 'component' ? 'component ' : 'group ') + (inst.name || def.name || instance) };
}
const flatOnly = (d) => { if (d.def.mesh) throw new Error(d.where + ' is a mesh (Edit mode works on meshes); these tools work on faces of groups and the loose geometry.'); return d; };

/** Faces of the loose geometry or of a group: id, normal, area, centre (its own axes, meters), paint. */
export function facesOf(model, instance, { offset = 0, limit = 200 } = {}) {
  const { def, inst, where } = flatOnly(defOf(model, instance));
  const rows = [];
  for (const [id, f] of def.faces) {
    if (f.hidden) continue;
    const pts = f.loops[0].map((v) => def.verts.get(v));
    const c = pts.reduce((a, p) => [a[0] + p[0] / pts.length, a[1] + p[1] / pts.length, a[2] + p[2] / pts.length], [0, 0, 0]);
    const n = faceNormal(def, f), l = Math.hypot(...n) || 1;
    rows.push({ id, normal: n.map((x) => r6(x / l)), area: r6(Math.abs(faceArea(def, f))), centre: c.map(r6), ...(f.color ? { paint: f.color } : {}) });
  }
  return { where, ...(inst ? { at: [inst.m[12], inst.m[13], inst.m[14]].map(r6) } : {}), total: rows.length, offset, faces: rows.slice(offset, offset + limit) };
}

/** A paint the assistant named: '#rrggbb', a palette colour name, a library material id or 'mat:<id>', or null (the default). */
export function paintOf(v) {
  if (v === null || v === '' || v === 'default') return null;
  const s = String(v).trim();
  if (/^#[0-9a-f]{6}$/i.test(s)) return s.toLowerCase();
  const pal = PALETTE.find(([n]) => n.toLowerCase() === s.toLowerCase());
  if (pal) return pal[1];
  const id = s.replace(/^mat:/i, '').toLowerCase();
  if (material(id)) return 'mat:' + id;   // the library's, then the open file's own (0.8 EG.62: a material made from a photo)
  throw new Error('"' + s + '" is not a colour (#rrggbb), a palette colour (' + PALETTE.map(([n]) => n).join(', ') + ') or a material (materials_list).');
}

/** Push or pull a face by `distance` (meters, + = out of its front). Call inside model.change. → pushPull's result. */
export function pushPullFace(model, instance, face, distance) {
  const { def, where } = flatOnly(defOf(model, instance));
  if (!def.faces.has(face)) throw new Error('There is no face ' + face + ' in ' + where + ' (faces_list lists them).');
  const r = pushPull(def, face, distance);
  if (!r.ok) throw new Error('Face ' + face + ' cannot be pushed or pulled by that distance.');
  return r;
}

/** Paint faces of the loose geometry or of a group, or a whole group (its faces without their own paint). Inside model.change. */
export function paintWith(model, { instance = null, faces = null, paint }) {
  if (faces && faces.length) {
    const { def, where } = flatOnly(defOf(model, instance));
    const bad = faces.filter((f) => !def.faces.has(f));
    if (bad.length) throw new Error('No faces ' + bad.slice(0, 10).join(', ') + ' in ' + where + '.');
    paintFaces(def, faces, paint);
    return { painted: faces.length, where };
  }
  if (instance === null || instance === undefined) throw new Error('Say what to paint: faces (of the loose geometry or a group) or a group.');
  defOf(model, instance);
  paintInstance(model.root, instance, paint);
  return { painted: 'group ' + instance };
}

/** A group (or component) of loose faces and placed groups. Inside model.change. → the new instance id. */
export function makeGroupOf(model, { faces = [], instances = [], component = false, name }) {
  const bad = [...faces.filter((f) => !model.root.faces.has(f)).map((f) => 'face ' + f), ...instances.filter((i) => !model.root.insts.has(i)).map((i) => 'group ' + i)];
  if (bad.length) throw new Error('Not in the loose geometry: ' + bad.slice(0, 10).join(', ') + '.');
  const iid = model.makeGroup(model.root, [...faces.map((id) => ({ t: 'f', id })), ...instances.map((id) => ({ t: 'i', id }))], component ? 'component' : 'group', name);
  if (iid === null || iid === undefined) throw new Error('Nothing to group.');
  return iid;
}

// ---------------------------------------------------------------- 0.7 AS.6: meshes and their modifiers (mesh's MD.2, MD.3)

/** A primitive mesh (mesh/primitives.js, as the Mesh workspace's Add makes it) placed at `at` (meters). Inside model.change. */
export function addMeshPrimitive(model, prim, opts, name, at) {
  if (!PRIMITIVES.includes(prim)) throw new Error('Primitives: ' + PRIMITIVES.join(', ') + '.');
  const d = model.newMeshDef(makePrimitive(prim, opts), name);
  return { instance: model.place(model.root, d.id, translate(at)), def: d.id };
}
/** The mesh definition behind an instance id (a mesh object), else an error that says what it is. */
export function meshDefOf(model, instance) {
  const { def, where } = defOf(model, instance);
  if (!def.mesh) throw new Error(where + ' is not a mesh: modifiers work on mesh objects (mesh_add, or the Mesh workspace).');
  return def;
}
/** The stack as the assistant sees it: index from 1, type, on, shown in the view / in renders, settings. */
export const modifierRows = (def) => (def.mods || []).map((m, i) => ({ index: i + 1, type: m.type, name: m.name || null, on: m.on, view: m.view, render: m.render, settings: m.params }));
/** Change a mesh's stack (fn edits a copy; the result is cleaned as a file's would be). Inside model.change. */
export function editMods(model, instance, fn) {
  const def = meshDefOf(model, instance);
  const next = structuredClone(def.mods || []);
  fn(next);
  def.mods = cleanMods(next);
  return modifierRows(def);
}

export function describeModel(model) {
  const unit = model.units || 'm';
  const L = (m) => formatLength(m, unit);
  const bb = model.bbox();
  const root = solidInfo(model.root);
  const counts = new Map();
  for (const inst of model.root.insts.values()) counts.set(inst.def, (counts.get(inst.def) || 0) + 1);
  return {
    units: unit,
    extents: bb ? { min: bb.min.map(r6), max: bb.max.map(r6), size: [L(bb.max[0] - bb.min[0]), L(bb.max[1] - bb.min[1]), L(bb.max[2] - bb.min[2])] } : null,
    loose: { faces: root.faces, edges: root.edges },
    instances: [...model.root.insts.entries()].slice(0, 1000).map(([id, inst]) => {
      const d = model.defs.get(inst.def);
      const si = d ? solidInfo(d) : null;
      return { id, kind: d ? d.kind : null, name: inst.name || (d && d.name) || '', def: inst.def, at: [inst.m[12], inst.m[13], inst.m[14]].map(r6), faces: si ? si.faces : 0, solid: !!(si && si.closed), volumeM3: si && si.volume !== null ? r6(si.volume) : null };
    }),
    components: [...model.defs.values()].filter((d) => d.kind === 'component').map((d) => ({ def: d.id, name: d.name, copies: counts.get(d.id) || 0 })),
    scenes: (model.scenes || []).map((s) => s.name),
  };
}

/**
 * The live tools. `app` = {model, changed() (redraw + panels), canvas() → the 3D view's canvas, draw(), and for scenes
 * (0.7 AS.5) scene() → {cam, style, vis} of the view now, goScene(i), scenesChanged(); for USD (0.7 AS.6) file() → what
 * Save writes (parsed) and base() → the file name without its extension; for renders (0.7 AS.6) render() → Promise of the Render
 * dialog's hooks (render-tools.js)}.
 */
export function installAgents(app) {
  const { model } = app;
  const H = getHost({ app: 'modelcraft' }), C = H.control;
  const PREFIX = 'Assistant: ';
  const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
  const len = { anyOf: [{ type: 'number', exclusiveMinimum: 0 }, { type: 'string', minLength: 1, maxLength: 40 }] };
  const lenAny = { anyOf: [{ type: 'number' }, { type: 'string', minLength: 1, maxLength: 40 }] };
  const pt = { type: 'array', items: lenAny, minItems: 2, maxItems: 3 };
  const unit = () => model.units || 'm';
  const P = (p) => [lengthOf(p[0], unit()), lengthOf(p[1], unit()), p.length > 2 ? lengthOf(p[2], unit()) : 0];
  const edit = (label, fn) => { const r = model.change(PREFIX + label, fn); app.changed(); return r; };
  C.configure({ title: 'ModelCraft', rollback: stackRollback(() => model), info: () => ({ units: unit(), groups: model.root.insts.size }) });
  C.tool({ name: 'app_info', group: 'read', title: 'About this window', description: 'ModelCraft\'s window: the model\'s display unit, how many groups and components it has, unsaved changes, and the permissions the person allowed.',
    run: async () => ({ app: 'modelcraft', title: 'ModelCraft', allowed: C.groups, units: unit(), instances: model.root.insts.size, unsaved: !!model.dirty }) });
  C.tool({ name: 'model_describe', group: 'read', untrusted: true, title: 'Describe the model', description: 'The model: display unit, extents (meters, Z up) and size, loose faces and edges, every group and component placed (id, name, where, whether it is a closed solid, volume in m³), components and scenes.',
    run: async () => describeModel(model) });
  C.tool({ name: 'view_screenshot', group: 'read', title: 'Picture of the view', description: 'A PNG of the 3D view as shown (up to 1600 px on the long side).',
    inputSchema: obj({ maxSize: { description: 'Longest side of the picture in pixels (200 to 1600; default 1200).', type: 'integer', minimum: 200, maximum: 1600, default: 1200 } }),
    run: async (a) => {
      const c = app.canvas && app.canvas();
      if (!c || typeof document === 'undefined') throw new Error('No view to take a picture of.');
      if (app.draw) app.draw();
      const k = Math.min(1, a.maxSize / Math.max(c.width, c.height));
      const out = document.createElement('canvas');
      out.width = Math.max(1, Math.round(c.width * k)); out.height = Math.max(1, Math.round(c.height * k));
      out.getContext('2d').drawImage(c, 0, 0, out.width, out.height);
      return toolResult([{ type: 'image', data: out.toDataURL('image/png').replace(/^data:image\/png;base64,/, ''), mimeType: 'image/png' }], { width: out.width, height: out.height });
    } });
  C.tool({ name: 'box_add', group: 'edit', rollbackPreview: true, title: 'Add a box', description: 'A box as a new group: its lowest corner at `at` [x, y] or [x, y, z] and its size [width (x), depth (y), height (z)]. Numbers are in the model\'s display unit; text such as "10\'", "3.2m" or "600mm" works too. One undo step.',
    inputSchema: obj({ at: { ...pt, description: 'The box\'s lowest corner [x, y] or [x, y, z], in the display unit (numbers or text such as \'3ft\').' }, size: { description: 'Size [width (x), depth (y), height (z)] in the display unit.', type: 'array', items: len, minItems: 3, maxItems: 3 }, name: { description: 'Name of the new group.', type: 'string', maxLength: 80 } }, ['size']),
    run: async (a) => {
      const [w, d, h] = a.size.map((v) => lengthOf(v, unit()));
      if (!(w > 0 && d > 0 && h > 0)) throw new Error('A box needs a width, depth and height above zero.');
      const at = a.at ? P(a.at) : [0, 0, 0];
      const r = edit('box', (m) => addSolid(m, boxPolys(w, d, h), a.name || 'Box', at));
      return { ...r, undo: PREFIX + 'box' };
    } });
  C.tool({ name: 'cylinder_add', group: 'edit', rollbackPreview: true, title: 'Add a cylinder', description: 'A cylinder as a new group standing on `center` [x, y] or [x, y, z], with a radius and a height (display unit, or text with a unit), 24 sides unless given. One undo step.',
    inputSchema: obj({ center: { ...pt, description: 'The cylinder\'s base centre [x, y] or [x, y, z] in the display unit.' }, radius: { description: 'Radius in the display unit.', ...len, description: 'Radius in the display unit.' }, height: { description: 'Height in the display unit.', ...len, description: 'Height in the display unit.' }, sides: { description: 'Number of sides of the polygon (3 to 96; default 24).', type: 'integer', minimum: 3, maximum: 96, default: 24 }, name: { description: 'Name of the new group.', type: 'string', maxLength: 80 } }, ['radius', 'height']),
    run: async (a) => {
      const r = lengthOf(a.radius, unit()), h = lengthOf(a.height, unit());
      if (!(r > 0 && h > 0)) throw new Error('A cylinder needs a radius and height above zero.');
      const at = a.center ? P(a.center) : [0, 0, 0];
      const res = edit('cylinder', (m) => addSolid(m, cylinderPolys(r, h, a.sides), a.name || 'Cylinder', at));
      return { ...res, undo: PREFIX + 'cylinder' };
    } });
  C.tool({ name: 'instance_move', group: 'edit', rollbackPreview: true, title: 'Move a group', description: 'Move a group or component (id from model_describe) by [dx, dy] or [dx, dy, dz]. One undo step.',
    inputSchema: obj({ id: { description: 'The group or component\'s id, from model_describe.', type: 'integer', minimum: 1 }, by: { ...pt, description: 'Movement [dx, dy] or [dx, dy, dz] in the display unit.' } }, ['id', 'by']),
    run: async (a) => { const by = [lengthOf(a.by[0], unit()), lengthOf(a.by[1], unit()), a.by.length > 2 ? lengthOf(a.by[2], unit()) : 0]; edit('move', (m) => moveInstance(m, a.id, by)); return { moved: a.id, undo: PREFIX + 'move' }; } });
  C.tool({ name: 'instances_erase', group: 'edit', rollbackPreview: true, title: 'Erase groups', description: 'Erase groups or components placed in the model (ids from model_describe). One undo step.',
    inputSchema: obj({ ids: { description: 'Ids of the groups or components to erase, from model_describe.', type: 'array', items: { type: 'integer', minimum: 1 }, minItems: 1, maxItems: 1000 } }, ['ids']),
    run: async (a) => { edit('erase', (m) => eraseInstances(m, a.ids)); return { erased: a.ids.length, undo: PREFIX + 'erase' }; } });
  // ---- 0.7 AS.5
  const INST = { type: 'integer', minimum: 1, description: 'A group or component id (model_describe); leave it out for the loose geometry.' };
  C.tool({ name: 'faces_list', group: 'read', title: 'List faces', description: 'Faces of the loose geometry or of a group or component (in its own axes): id, outward normal, area (m²), centre (meters), paint. Push/pull and paint take these ids.',
    inputSchema: obj({ instance: INST, offset: { description: 'How many results to skip, for paging (default 0).', type: 'integer', minimum: 0, default: 0 }, limit: { description: 'Most results to return in one call (use offset for the next page).', type: 'integer', minimum: 1, maximum: 2000, default: 200 } }),
    run: async (a) => facesOf(model, a.instance, a) });
  C.tool({ name: 'materials_list', group: 'read', untrusted: true, title: 'List materials', description: 'The materials paint takes (by id), by category, with the colour each shows in the view; the open file\'s own materials (fileMaterials: names come from the file); also the palette colours by name.',
    run: async () => ({ materials: MATERIALS.map((m) => ({ id: m.id, category: m.cat, color: m.color })), fileMaterials: documentMaterials().map((m) => ({ id: m.id, name: m.name || '', color: m.color })), palette: PALETTE.map(([name, hex]) => ({ name, hex })) }) });
  C.tool({ name: 'push_pull', group: 'edit', rollbackPreview: true, title: 'Push/pull a face', description: 'Push or pull a face (id from faces_list) of the loose geometry or a group by a distance (display unit, or text with a unit; positive = out of its front), as the Push/Pull tool does: a face on a solid moves, a lone face becomes a solid. In a component every copy follows. One undo step.',
    inputSchema: obj({ instance: INST, face: { description: 'Face id, from faces_list.', type: 'integer', minimum: 0 }, distance: { description: 'How far to push (negative) or pull (positive), in the display unit.', ...lenAny, description: 'How far to push (negative) or pull (positive), in the display unit.' } }, ['face', 'distance']),
    run: async (a) => {
      const d = lengthOf(a.distance, unit());
      const r = edit('push/pull', (m) => pushPullFace(m, a.instance, a.face, d));
      return { mode: r.mode, distance: r6(r.distance), face: r.face, undo: PREFIX + 'push/pull' };
    } });
  C.tool({ name: 'paint', group: 'edit', rollbackPreview: true, title: 'Paint', description: 'Paint faces (ids from faces_list, of the loose geometry or a group) or a whole group or component (its faces without their own paint) with a colour (#rrggbb or a palette name) or a material from materials_list; null = the default. One undo step.',
    inputSchema: obj({ instance: INST, faces: { description: 'Face ids to paint, from faces_list.', type: 'array', items: { type: 'integer', minimum: 0 }, maxItems: 100000 }, paint: { description: 'Name of a paint or material (PALETTE or a material key); null clears the paint.', type: ['string', 'null'], maxLength: 60 } }, ['paint']),
    run: async (a) => { const p = paintOf(a.paint); const r = edit('paint', (m) => paintWith(m, { instance: a.instance ?? null, faces: a.faces, paint: p })); return { ...r, paint: p, undo: PREFIX + 'paint' }; } });
  C.tool({ name: 'group_make', group: 'edit', rollbackPreview: true, title: 'Make a group', description: 'Make a group (or a component, whose copies all change together) of loose faces (ids from faces_list) and placed groups (ids from model_describe). One undo step. → the new group\'s id.',
    inputSchema: obj({ faces: { description: 'Face ids of the loose geometry to make into the group, from faces_list.', type: 'array', items: { type: 'integer', minimum: 0 }, maxItems: 100000 }, instances: { description: 'Ids of existing groups or components to put into the new one.', type: 'array', items: { type: 'integer', minimum: 1 }, maxItems: 10000 }, component: { description: 'true makes a component (copies change together); default false makes a group.', type: 'boolean', default: false }, name: { description: 'Name of the new group or component.', type: 'string', maxLength: 80 } }),
    run: async (a) => { const id = edit(a.component ? 'make component' : 'make group', (m) => makeGroupOf(m, { faces: a.faces || [], instances: a.instances || [], component: a.component, name: a.name })); return { instance: id, undo: PREFIX + (a.component ? 'make component' : 'make group') }; } });
  // ---- 0.7 AS.6: meshes and modifiers (mesh's MD.2 / MD.3)
  const SIZES = { size: true, r: true, h: true, R: true };
  C.tool({ name: 'mesh_add', group: 'edit', rollbackPreview: true, title: 'Add a mesh', description: 'A mesh object, as the Mesh workspace\'s Add makes it: ' + PRIMITIVES.join(', ') + '; sizes (size, r, h, R: display unit or text with a unit) and counts (segs, rings, subdiv, x, y, ring). It stands on `at` [x, y] or [x, y, z]. One undo step. Edit mode and modifiers then work on it.',
    inputSchema: obj({ primitive: { description: 'plane, grid, cube, circle, cylinder, cone, uvsphere, icosphere or torus.', type: 'string', enum: PRIMITIVES }, at: { ...pt, description: 'Where to put it [x, y] or [x, y, z] in the display unit.' }, name: { description: 'Name of the new mesh object.', type: 'string', maxLength: 80 }, options: { description: 'The primitive\'s settings (size, segments, radius …), as the Mesh workspace\'s Add panel has them.', type: 'object', additionalProperties: { anyOf: [{ type: 'number' }, { type: 'string', maxLength: 40 }, { type: 'boolean' }] } } }, ['primitive']),
    run: async (a) => {
      const o = {};
      for (const [k, v] of Object.entries(a.options || {})) o[k] = SIZES[k] ? lengthOf(v, unit()) : v;
      const at = a.at ? P(a.at) : [0, 0, 0];
      const r = edit('add ' + a.primitive, (m) => addMeshPrimitive(m, a.primitive, o, a.name || a.primitive, at));
      return { ...r, undo: PREFIX + 'add ' + a.primitive };
    } });
  C.tool({ name: 'modifiers_list', group: 'read', untrusted: true, title: 'List modifiers', description: 'A mesh object\'s modifier stack in order (index from 1, type, on, shown in the view and in renders, settings), and the modifier types there are with their default settings.',
    inputSchema: obj({ instance: { description: 'The mesh object\'s id, from model_describe.', type: 'integer', minimum: 1 } }, ['instance']),
    run: async (a) => ({ modifiers: modifierRows(meshDefOf(model, a.instance)), types: Object.fromEntries(MOD_TYPES.map((k) => [k, MODS[k].defaults])) }) });
  C.tool({ name: 'modifier_add', group: 'edit', rollbackPreview: true, title: 'Add a modifier', description: 'Add a modifier to the end of a mesh object\'s stack: ' + MOD_TYPES.join(', ') + ', with settings (the rest keep their defaults; boolean / shrinkwrap targets, array curves and lattice cages name another object\'s def from model_describe). Nothing is applied for good: the mesh stays as drawn. One undo step.',
    inputSchema: obj({ instance: { description: 'The mesh object\'s id, from model_describe.', type: 'integer', minimum: 1 }, type: { description: 'Modifier type: scale, mirror, array, subsurf, bevel, solidify, boolean, displace, weld …', type: 'string', enum: MOD_TYPES }, settings: { description: 'The modifier\'s settings, as modifiers_list shows them for that type.', type: 'object' }, name: { description: 'Name for the modifier (default: its type).', type: 'string', maxLength: 60 } }, ['instance', 'type']),
    run: async (a) => { const rows = edit('add ' + a.type, (m) => editMods(m, a.instance, (L) => { if (L.length >= 32) throw new Error('A stack holds 32 modifiers at most.'); const x = newMod(a.type); L.push({ ...x, name: a.name || '', params: { ...x.params, ...(a.settings || {}) } }); })); return { modifiers: rows, undo: PREFIX + 'add ' + a.type }; } });
  C.tool({ name: 'modifier_set', group: 'edit', rollbackPreview: true, title: 'Change a modifier', description: 'Change one modifier of a mesh object\'s stack (index from modifiers_list): settings, on, shown in the view or in renders, or move it to another index. One undo step.',
    inputSchema: obj({ instance: { description: 'The mesh object\'s id, from model_describe.', type: 'integer', minimum: 1 }, index: { description: 'Which modifier, numbered from 1 (see modifiers_list).', type: 'integer', minimum: 1, maximum: 32 }, settings: { description: 'Settings to change (the others stay).', type: 'object' }, on: { description: 'true turns the modifier on, false off.', type: 'boolean' }, view: { description: 'true shows it in the 3D view.', type: 'boolean' }, render: { description: 'true applies it when rendering.', type: 'boolean' }, moveTo: { description: 'Move the modifier to this position in the stack (from 1).', type: 'integer', minimum: 1, maximum: 32 } }, ['instance', 'index']),
    run: async (a) => {
      const rows = edit('change modifier', (m) => editMods(m, a.instance, (L) => {
        const x = L[a.index - 1];
        if (!x) throw new Error('There is no modifier ' + a.index + ' (the stack has ' + L.length + ').');
        if (a.settings) x.params = { ...x.params, ...a.settings };
        for (const k of ['on', 'view', 'render']) if (typeof a[k] === 'boolean') x[k] = a[k];
        if (a.moveTo) { L.splice(a.index - 1, 1); L.splice(Math.min(a.moveTo, L.length + 1) - 1, 0, x); }
      }));
      return { modifiers: rows, undo: PREFIX + 'change modifier' };
    } });
  C.tool({ name: 'modifier_remove', group: 'edit', rollbackPreview: true, title: 'Remove a modifier', description: 'Remove one modifier (index from modifiers_list) from a mesh object\'s stack. One undo step.',
    inputSchema: obj({ instance: { description: 'The mesh object\'s id, from model_describe.', type: 'integer', minimum: 1 }, index: { description: 'Which modifier to remove, numbered from 1 (see modifiers_list).', type: 'integer', minimum: 1, maximum: 32 } }, ['instance', 'index']),
    run: async (a) => { const rows = edit('remove modifier', (m) => editMods(m, a.instance, (L) => { if (!L[a.index - 1]) throw new Error('There is no modifier ' + a.index + '.'); L.splice(a.index - 1, 1); })); return { modifiers: rows, undo: PREFIX + 'remove modifier' }; } });
  if (app.scene && app.goScene) {
    C.tool({ name: 'scene_add', group: 'edit', rollbackPreview: true, title: 'Save a scene', description: 'Save the view as it is now (camera, style, what is shown) as a scene with this name, as the Scenes panel\'s Add does. One undo step.',
      inputSchema: obj({ name: { description: 'Name for the scene.', type: 'string', minLength: 1, maxLength: 80 } }, ['name']),
      run: async (a) => { const s = cleanScene({ name: a.name, ...app.scene() }); edit('add scene', (m) => { m.scenes = [...m.scenes, s]; }); app.scenesChanged?.(); return { scene: s.name, scenes: model.scenes.length, undo: PREFIX + 'add scene' }; } });
    C.tool({ name: 'scene_show', group: 'edit', dryRun: true, title: 'Show a scene', description: 'Go to a saved scene (by name, or its number from 1): its camera, style and what it shows. Changes the view only (no undo step).',
      inputSchema: obj({ scene: { description: 'A scene name, or its number from 1.', description: 'A scene name, or its number from 1.', anyOf: [{ type: 'string', minLength: 1, maxLength: 80 }, { type: 'integer', minimum: 1 }] } }, ['scene']),
      run: async (a, ctx) => {
        const i = typeof a.scene === 'number' ? a.scene - 1 : model.scenes.findIndex((s) => s.name.toLowerCase() === String(a.scene).toLowerCase());
        if (!(i >= 0 && i < model.scenes.length)) throw new Error('No scene ' + JSON.stringify(a.scene) + '. Scenes: ' + (model.scenes.map((s) => s.name).join(', ') || 'none') + '.');
        if (!ctx.preview) await app.goScene(i);
        return { scene: model.scenes[i].name };
      } });
  }
  C.tool({ name: 'undo', group: 'edit', title: 'Undo', description: 'Undo the assistant\'s last steps (only steps labelled "Assistant:" unless any is true).',
    inputSchema: obj({ steps: { description: 'How many steps to undo (default 1).', type: 'integer', minimum: 1, maximum: 100, default: 1 }, any: { description: 'true also undoes steps the person made, not only the assistant\'s (default false).', type: 'boolean', default: false } }),
    preview: (a) => ({ wouldUndo: peekUndo(model.undoStack, a.steps, a.any, PREFIX) }),
    run: async (a) => {
      const undone = [];
      for (let i = 0; i < a.steps; i++) {
        const top = model.undoStack[model.undoStack.length - 1];
        if (!top || (!a.any && !String(top.label).startsWith(PREFIX))) break;
        undone.push(model.undo());
      }
      app.changed();
      return { undone };
    } });
  if (app.file) C.tool({ name: 'usd_export', group: 'export', title: 'Export USD', description: 'The model as OpenUSD (groups and components as prims, materials, scenes as cameras), .usda (default), .usdc or .usdz, as File › Save as USD writes it. With a path (Studio) it is written there, else it downloads.',
    inputSchema: obj({ format: { description: 'usda (text, default), usdc (binary) or usdz (packed with its textures).', type: 'string', enum: ['usda', 'usdc', 'usdz'] }, path: { type: 'string', minLength: 1, maxLength: 4096, description: 'Studio: a file inside the folders the person allowed (Settings › Assistants › Folders); without it the file downloads.' }, overwrite: { description: 'true replaces an existing file at the path (default false: an existing file is never overwritten).', type: 'boolean', default: false } }),
    run: async (a) => {
      const fmt = a.format || (a.path && /\.(usd[acz])$/i.exec(a.path)?.[1].toLowerCase()) || 'usda';
      if (a.path && !new RegExp('\\.' + fmt + '$', 'i').test(a.path)) throw new Error('A .' + fmt + ' file ends in .' + fmt + '.');
      const { saveUsd } = await import('./usd-modelcraft.js');
      const r = saveUsd(app.file(), model, { format: fmt, name: app.base() + '.modelcraft' });
      const bytes = typeof r.data === 'string' ? new TextEncoder().encode(r.data) : r.data;
      if (a.path) { if (!C.files.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).'); return { format: fmt, bytes: bytes.length, report: r.report, path: await C.files.write(a.path, bytes, { overwrite: a.overwrite }) }; }
      H.download(new Blob([bytes]), app.base() + '.' + fmt, fmt === 'usda' ? 'model/vnd.usda' : fmt === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream');
      return { format: fmt, bytes: bytes.length, report: r.report, downloaded: app.base() + '.' + fmt };
    } });
  // ---- 0.7 AS.6 (assistants-gaps): the Render dialog's pictures and queue (render-tools.js); saved scenes by name or number
  if (app.render) {
    const prepare = async () => ({ ...(await app.render()), scenes: () => (model.scenes || []).map((s) => s.name), ...(app.goScene ? { goScene: (i) => app.goScene(i) } : {}) });
    for (const d of renderTools(C, prepare, { toolResult })) C.tool(d);
  }
  // ---- 0.8 EG.61 (session model_PART_2): say the scene — time, weather, season, trees, people (look-tools.js)
  if (app.look) for (const d of lookTools({ app, model, edit, PREFIX })) C.tool(d);
  // ---- 0.8 EG.62: a material from a photo (photo-tools.js)
  if (app.photo) for (const d of photoTools({ app, C })) C.tool(d);
  return C;
}
