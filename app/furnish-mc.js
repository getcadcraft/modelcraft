/* SPDX-License-Identifier: Apache-2.0 */
/**
 * furnish-mc.js — EG.60's ModelCraft side (0.8 round 3, model_PART_3): furnish a room for renderings. The layout is the shared rule-based
 * planner (./furnish.js, a byte copy of lib/furnish, which BimCraft runs too): pieces against the walls from the longest wall round, door
 * swings and windows kept free, nothing overlapping, no randomness, what does not fit said. ModelCraft's part is only what a room is here
 * and what the pieces are:
 *   - a room = a level face looking up (the floor), its outer loop and its holes, in the open group's axes;
 *   - doors and windows = the starter library's doors and windows placed in the model whose middles are near the room's edge;
 *   - pieces = the starter library's own furniture (starter.js), one component per kind, each copy placed on the planner's footprint
 *     (stretched to the planned width and depth when they differ, height kept), all in one group "Furniture: <kind>" on the tag
 *     "Furniture", so the whole set goes in one step (Undo, or delete the group). DOM-free: tools/modelcraft-test/furnish08.mjs runs it.
 *
 *   roomOfFace(model, path, fid) → { poly, holes (mm, plan), z (m), area (m²), m (the context's matrix) } | null (not a floor face)
 *   openingsNear(model, room) → { doors: [{x, y, w}], windows: [{x, y, w, sill}] } (mm)
 *   guessKind(areaM2) → 'bath' | 'office' | 'bedroom' | 'living' (only a guess: the result says so)
 *   planRoom(model, { path, fid, kind }) → { room, kind, guessed, plan: { placements, skipped }, doors, windows } | { error }
 *   furnishRoom(model, planned, { names: { group, tag, kind }, buildStarter, starterName }) → { def, placed }   (inside model.change)
 */
import { planFurnish, KINDS } from './furnish.js';
import { fPts, faceNormal } from './model.js';
import { apply, applyDir, mmul, norm, ident } from './vec.js';

export { KINDS };
const MM = 1000;
/** Planner piece → the starter thing that draws it. */
export const STARTER_OF = {
  'fam-bed': 'bed_double', 'fam-sofa': 'sofa', 'fam-wardrobe': 'wardrobe', 'fam-desk': 'desk', 'fam-chair': 'chair', 'fam-bathtub': 'bathtub',
  'fam-shelf': 'bookshelf', 'fam-cabinet': 'base_cabinet', 'fam-table': 'table', 'fam-kitchensink': 'sink', 'fam-wc': 'toilet',
  'fam-lavatory': 'washbasin', 'fam-shower': 'shower',
};
const DOORS = new Set(['door', 'garage']), WINDOWS = new Set(['window', 'window_wide']);

export function guessKind(areaM2) { return areaM2 < 6 ? 'bath' : areaM2 < 10 ? 'office' : areaM2 < 20 ? 'bedroom' : 'living'; }

const area2 = (poly) => { let s = 0; for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length]; s += a[0] * b[1] - b[0] * a[1]; } return s / 2; };

export function roomOfFace(model, path, fid) {
  const ctx = model.context(path || []);
  if (!ctx) return null;
  const f = ctx.def.faces.get(fid);
  if (!f) return null;
  const m = ctx.m || ident();
  const n = norm(applyDir(m, faceNormal(ctx.def, f)));
  if (!(n[2] > 0.999)) return null;   // a floor: level and looking up
  const loops = fPts(ctx.def, f).map((l) => l.map((p) => apply(m, p)));
  const z = loops[0][0][2];
  const plan = (l) => { const q = l.map((p) => [p[0] * MM, p[1] * MM]); return area2(q) < 0 ? q.reverse() : q; };   // anticlockwise, as the planner wants
  const poly = plan(loops[0]), holes = loops.slice(1).map(plan);
  const a = (area2(poly) - holes.reduce((s, h) => s + area2(h), 0)) / 1e6;
  return { poly, holes, z, area: a, m };
}

/** The starter doors and windows in the model whose middle is within 0.4 m of the room's outline (plan), at the room's height or above. */
export function openingsNear(model, room) {
  const doors = [], windows = [];
  const segDist = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1, t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L)); return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t); };
  const near = (p) => { const P = room.poly; let d = Infinity; for (let i = 0; i < P.length; i++) d = Math.min(d, segDist(p, P[i], P[(i + 1) % P.length])); return d <= 400; };
  model.walk((d, wm) => {
    for (const inst of d.insts.values()) {
      const def = model.defs.get(inst.def);
      if (!def || !(DOORS.has(def.starter) || WINDOWS.has(def.starter))) continue;
      const bb = model.bbox(def, mmul(wm, inst.m));
      if (!bb || bb.max[2] < room.z - 0.05) continue;
      const mid = [((bb.min[0] + bb.max[0]) / 2) * MM, ((bb.min[1] + bb.max[1]) / 2) * MM];
      if (!near(mid)) continue;
      const w = Math.max(bb.max[0] - bb.min[0], bb.max[1] - bb.min[1]) * MM;
      if (DOORS.has(def.starter)) doors.push({ x: mid[0], y: mid[1], w });
      else windows.push({ x: mid[0], y: mid[1], w, sill: Math.max(0, (bb.min[2] - room.z) * MM) });
    }
    return true;
  });
  return { doors, windows };
}

export function planRoom(model, { path = [], fid, kind = null } = {}) {
  const room = roomOfFace(model, path, fid);
  if (!room) return { error: 'not_floor' };
  const guessed = !kind;
  const k = kind && KINDS.includes(kind) ? kind : guessKind(room.area);
  const { doors, windows } = openingsNear(model, room);
  const plan = planFurnish({ poly: room.poly, holes: room.holes }, { kind: k, doors, windows });
  return { room, kind: k, guessed, plan, doors, windows };
}

/** The placement matrix that lays a starter piece (built front at y = min, x from min) on a planner footprint, in the room's plan. */
function matrixFor(fp, bb, z) {
  const W = bb.max[0] - bb.min[0], D = bb.max[1] - bb.min[1];
  const o = [fp[0][0] / MM, fp[0][1] / MM], ex = [(fp[1][0] - fp[0][0]) / MM, (fp[1][1] - fp[0][1]) / MM], ey = [(fp[3][0] - fp[0][0]) / MM, (fp[3][1] - fp[0][1]) / MM];
  const sx = [ex[0] / W, ex[1] / W], sy = [ey[0] / D, ey[1] / D];
  // column-major 4×4: x axis, y axis, z axis, then the origin shifted so the piece's own min corner lands on fp[0]
  return [sx[0], sx[1], 0, 0, sy[0], sy[1], 0, 0, 0, 0, 1, 0,
    o[0] - sx[0] * bb.min[0] - sy[0] * bb.min[1], o[1] - sx[1] * bb.min[0] - sy[1] * bb.min[1], z - bb.min[2], 1];
}

/** Put the planned pieces in the model (call inside model.change): one group in the room's context, a copy of a starter component per piece. */
export function furnishRoom(model, planned, { path = [], names = {}, buildStarter, starterName = (id) => id, footprint }) {
  const ctx = model.context(path);
  const group = model.newDef('group', names.group || 'Furniture');
  const defs = new Map(), placed = [];
  for (const p of planned.plan.placements) {
    const sid = STARTER_OF[p.family];
    if (!sid) continue;
    let def = defs.get(sid) || [...model.defs.values()].find((d) => d.kind === 'component' && d.starter === sid);
    if (!def) { def = buildStarter(model, sid, starterName(sid)); if (!def) continue; def.starter = sid; }
    defs.set(sid, def);
    const bb = model.bbox(def);
    if (!bb) continue;
    // the planner's footprint is in the room's plan (world mm); the group sits in the context, so world → context
    const iid = model.place(group, def.id, mmul(ctx.inv, matrixFor(footprint(p), bb, planned.room.z)));
    placed.push({ family: p.family, starter: sid, instance: iid });
  }
  const gid = model.place(ctx.def, group.id, ident());
  const tag = names.tag ? (model.tag(names.tag) ? model.tag(names.tag).name : model.addTag(names.tag)) : null;
  if (tag) ctx.def.insts.get(gid).tag = tag;
  return { def: group, instance: gid, placed, tag };
}
