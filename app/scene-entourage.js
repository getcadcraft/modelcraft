/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — messages here go to the person's assistant program (agents.js), not onto the screen. */
/**
 * scene-entourage.js — the model side of "say the scene" (0.8 round 2, EG.61, session `model_PART_2`): where trees and people can
 * stand, planting them, and turning the trees to a season. DOM-free. Every function that changes the model is called inside
 * model.change (agents.js does that, so each tool is one undo step).
 *
 * Everything this file makes is a placement in the model's top level on a tag of its own ("Scene trees", "Scene people"), so the
 * person can hide them with the tag switch, select and move them like anything else, and `clearScene` takes them away without
 * touching what the person drew. A season change swaps each scene tree's component for the same tree in the season's colours.
 *
 *   SCENE_TAGS
 *   placesOf(model, {limit}) → {places: [{instance | face, name, kind, bbox, topZ, height, areaM2}], total}
 *   regionFor(model, where) → {region, z, avoid, label}      where = {instance | face | rect | line, z?}
 *   plantTrees(model, {kind, count, where, season, seed, minDist}) → {placed: [ids], short, kind, season, z}
 *   plantPeople(model, {count, where, mix, umbrellas, seed}) → {placed, umbrellas, short}
 *   setTreeSeason(model, season) → {changed, trees}
 *   sceneCounts(model) → {trees, people, umbrellas}
 *   clearScene(model, what) → {removed}
 */
import { faceNormal, faceArea, fPts } from './model.js';
import { buildEntourage, buildUmbrella } from './starter.js';
import { ToolError } from './host.js';
import { placement, spread, variantsFor, habitOf, rng, CLOTHES, UMBRELLAS, PERSON_KINDS, TREE_KINDS } from './scene-say.js';

export const SCENE_TAGS = Object.freeze({ tree: 'Scene trees', person: 'Scene people' });
const r3 = (v) => Math.round(v * 1000) / 1000;
const MAX_PLACED = 400;

/** The scene's own placements, by kind: instance id → kind ('tree' | 'person' | 'umbrella') from the component's `starter` mark. */
function sceneKind(model, inst) {
  const d = model.defs.get(inst.def), s = d && typeof d.starter === 'string' ? d.starter : '';
  if (!s.startsWith('scene:')) return null;
  const slug = s.split(':')[1];
  if (slug === 'umbrella') return 'umbrella';
  return PERSON_KINDS.includes(slug) ? 'person' : habitOf(slug) ? 'tree' : null;
}
export function sceneCounts(model) {
  const c = { trees: 0, people: 0, umbrellas: 0 };
  for (const inst of model.root.insts.values()) { const k = sceneKind(model, inst); if (k === 'tree') c.trees++; else if (k === 'person') c.people++; else if (k === 'umbrella') c.umbrellas++; }
  return c;
}

const boxOf = (model, inst) => { const d = model.defs.get(inst.def); return d ? model.bbox(d, inst.m) : null; };

// ------------------------------------------------------------------ where things can stand
/** Placements and big flat faces of the model's top level that something can stand on or in: the assistant picks one by its id. */
export function placesOf(model, { limit = 50 } = {}) {
  const out = [];
  for (const [id, inst] of model.root.insts) {
    if (sceneKind(model, inst)) continue;
    const bb = boxOf(model, inst); if (!bb) continue;
    const d = model.defs.get(inst.def), height = bb.max[2] - bb.min[2], dx = bb.max[0] - bb.min[0], dy = bb.max[1] - bb.min[1];
    out.push({ instance: id, name: inst.name || (d && d.name) || '', kind: height <= 0.6 ? 'flat' : 'standing', bbox: { min: bb.min.map(r3), max: bb.max.map(r3) }, topZ: r3(bb.max[2]), height: r3(height), areaM2: r3(dx * dy), _a: dx * dy });
  }
  for (const [id, f] of model.root.faces) {
    if (f.hidden) continue;
    const n = faceNormal(model.root, f);
    if (Math.abs(n[2]) < 0.98) continue;
    const area = faceArea(model.root, f); if (area < 4) continue;
    const pts = fPts(model.root, f)[0], xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const z = pts[0][2];
    out.push({ face: id, name: '', kind: 'flat', bbox: { min: [Math.min(...xs), Math.min(...ys), z].map(r3), max: [Math.max(...xs), Math.max(...ys), z].map(r3) }, topZ: r3(z), height: 0, areaM2: r3(area), _a: area });
  }
  out.sort((a, b) => b._a - a._a);
  return { total: out.length, places: out.slice(0, limit).map(({ _a, ...p }) => p) };
}

function inPolygon(poly, x, y) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > y) !== (b[1] > y) && x < ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}

/** The ground a request names: a region for spread(), the height things stand at, and the boxes to keep clear. */
export function regionFor(model, w = {}) {
  const need = ['instance', 'face', 'rect', 'line'].filter((k) => w[k] !== undefined && w[k] !== null);
  if (need.length !== 1) throw new ToolError('invalid_argument', 'Name where with exactly one of instance, face, rect or line.', { next: ['Call places_list for the ids of places that fit.', 'Or give rect [x0, y0, x1, y1] or line [[x, y], [x, y]] in metres.'] });
  const standing = (skipId) => {
    const keep = [];
    for (const [id, inst] of model.root.insts) {
      if (id === skipId || sceneKind(model, inst)) continue;
      const bb = boxOf(model, inst); if (bb && bb.max[2] - bb.min[2] > 0.6) keep.push(bb);
    }
    return keep;
  };
  const clear = (boxes, z) => boxes.filter((b) => b.max[2] > z + 0.3 && b.min[2] < z + 2.5).map((b) => [b.min[0], b.min[1], b.max[0], b.max[1]]);
  if (need[0] === 'instance') {
    const inst = model.root.insts.get(w.instance);
    if (!inst || sceneKind(model, inst)) throw new ToolError('not_found', 'There is no placement ' + w.instance + ' to stand things on.', { next: ['Call places_list for the ids.'] });
    const bb = boxOf(model, inst);
    if (!bb) throw new ToolError('not_found', 'That placement has no geometry.', { next: ['Call places_list for the ids.'] });
    const z = typeof w.z === 'number' ? w.z : bb.max[2];
    const d = model.defs.get(inst.def);
    return { region: { rect: [bb.min[0], bb.min[1], bb.max[0], bb.max[1]] }, z, avoid: clear(standing(w.instance), z), label: inst.name || (d && d.name) || 'placement ' + w.instance, tall: bb.max[2] - bb.min[2] > 3 };
  }
  if (need[0] === 'face') {
    const f = model.root.faces.get(w.face);
    if (!f) throw new ToolError('not_found', 'There is no loose face ' + w.face + ' at the top level.', { next: ['Call places_list for ids of flat faces.'] });
    const pts = fPts(model.root, f)[0], xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const poly = pts.map((p) => [p[0], p[1]]);
    const z = typeof w.z === 'number' ? w.z : pts[0][2];
    return { region: { rect: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)], inside: (x, y) => inPolygon(poly, x, y) }, z, avoid: clear(standing(null), z), label: 'face ' + w.face };
  }
  const z = typeof w.z === 'number' ? w.z : 0;
  if (need[0] === 'rect') {
    const [x0, y0, x1, y1] = w.rect;
    return { region: { rect: [Math.min(x0, x1), Math.min(y0, y1), Math.max(x0, x1), Math.max(y0, y1)] }, z, avoid: clear(standing(null), z), label: 'the rectangle' };
  }
  return { region: { line: w.line }, z, avoid: clear(standing(null), z), label: 'the line' };
}

// ------------------------------------------------------------------ the component for a look, built once
/** The scene component for slug + variant: the one built before (found by its `starter` mark) or a new one. */
function treeDef(model, slug, v) {
  const mark = 'scene:' + slug + ':' + v.key;
  const found = [...model.defs.values()].find((d) => d.kind === 'component' && d.starter === mark);
  if (found) return found.id;
  return buildEntourage(model, slug, 'Scene ' + slug.replace(/^(tree|shrub|hedge)-/, '$1 ') + ' ' + v.key, { recolor: v.recolor, omit: v.omit, key: v.key }).id;
}
function personDef(model, slug, clothes) {
  const mark = 'scene:' + slug + ':' + clothes.slice(1);
  const found = [...model.defs.values()].find((d) => d.kind === 'component' && d.starter === mark);
  if (found) return found.id;
  return buildEntourage(model, slug, 'Scene ' + slug.replace(/-/g, ' ') + ' ' + clothes.slice(1), { recolor: { clothes }, key: clothes.slice(1) }).id;
}
function umbrellaDef(model, color) {
  const mark = 'scene:umbrella:' + color.slice(1);
  const found = [...model.defs.values()].find((d) => d.kind === 'component' && d.starter === mark);
  return found ? found.id : buildUmbrella(model, color, 'Scene umbrella ' + color.slice(1)).id;
}
function ensureTag(model, name) {
  if (!model.tag(name)) model.tags.push({ name });
  return name;
}
function put(model, defId, m, tag, name) {
  const iid = model.place(model.root, defId, m);
  const inst = model.root.insts.get(iid);
  inst.tag = tag;
  if (name) inst.name = name;
  return iid;
}

/** A seed that differs from one call to the next on the same model but not between runs: what is already there. */
const seedOf = (model, n) => 1000 + n * 7919 + model.root.insts.size;

// ------------------------------------------------------------------ trees
export function plantTrees(model, { kind = 'tree-deciduous-6m', count = 5, where, season = 'summer', seed, minDist, jitter } = {}) {
  if (!TREE_KINDS.includes(kind)) throw new ToolError('invalid_argument', 'Unknown tree kind "' + kind + '".', { next: ['Use one of: ' + TREE_KINDS.join(', ') + '.'] });
  if (sceneCounts(model).trees + count > MAX_PLACED) throw new ToolError('too_large', 'The scene holds at most ' + MAX_PLACED + ' trees.', { next: ['Call entourage_delete to clear some first.'] });
  const R = regionFor(model, where);
  const variants = variantsFor(kind, season);
  const crown = { 'tree-deciduous-6m': 4.7, 'tree-deciduous-10m': 7.8, 'tree-ornamental-4m': 3.1, 'tree-conifer-8m': 3.2, 'tree-columnar-7m': 1.6, 'tree-birch-9m': 4.6, 'tree-palm-8m': 5.6, 'shrub-round-1200': 1.2, 'shrub-small-600': 0.6, 'hedge-2000': 2 }[kind];
  const sd = Number.isFinite(seed) ? seed : seedOf(model, count);
  const sp = spread(R.region, count, { minDist: Math.max(0.5, minDist ?? crown * 0.9), seed: sd, avoid: R.avoid, keep: [], jitter: jitter ?? 0.3, margin: Math.min(crown / 2, 1.5) });
  const rnd = rng(sd ^ 0x9e3779b9), tag = ensureTag(model, SCENE_TAGS.tree), placed = [];
  for (const p of sp.points) {
    const v = variants[Math.floor(rnd() * variants.length)];
    placed.push(put(model, treeDef(model, kind, v), placement(p.x, p.y, R.z, rnd() * Math.PI * 2, 0.9 + rnd() * 0.2), tag, 'Scene ' + kind));
  }
  return { placed, short: sp.short, kind, season, z: r3(R.z), where: R.label, ...(R.tall ? { warning: 'That placement is taller than a person; the trees stand on its top.' } : {}) };
}

// ------------------------------------------------------------------ people
export function plantPeople(model, { count = 6, where, mix = ['person-standing', 'person-walking', 'person-standing-2', 'child-standing'], umbrellas = false, seed } = {}) {
  const kinds = (mix && mix.length ? mix : PERSON_KINDS).filter((k) => PERSON_KINDS.includes(k));
  if (!kinds.length) throw new ToolError('invalid_argument', 'mix names no known figure.', { next: ['Use any of: ' + PERSON_KINDS.join(', ') + '.'] });
  if (sceneCounts(model).people + count > MAX_PLACED) throw new ToolError('too_large', 'The scene holds at most ' + MAX_PLACED + ' people.', { next: ['Call entourage_delete to clear some first.'] });
  const R = regionFor(model, where);
  const sd = Number.isFinite(seed) ? seed : seedOf(model, count + 31);
  const sp = spread(R.region, count, { minDist: umbrellas ? 1.4 : 0.9, seed: sd, avoid: R.avoid, margin: 0.4, jitter: 0.5 });
  const rnd = rng(sd ^ 0x85ebca6b), tag = ensureTag(model, SCENE_TAGS.person), placed = [], um = [];
  const line = R.region.line ? { h: Math.atan2(R.region.line[1][1] - R.region.line[0][1], R.region.line[1][0] - R.region.line[0][0]) } : null;
  for (const p of sp.points) {
    const kind = kinds[Math.floor(rnd() * kinds.length)], clothes = CLOTHES[Math.floor(rnd() * CLOTHES.length)];
    // 0.8 round 3 (model_PART_3): a crowd along a path walks along it, half each way (the figures' front is −Y: yaw = heading + 90°);
    // elsewhere each one faces where it likes, as before (same numbers from the same seed)
    const yaw = line ? line.h + Math.PI / 2 + (rnd() < 0.5 ? Math.PI : 0) + (rnd() - 0.5) * 0.3 : rnd() * Math.PI * 2, m = placement(p.x, p.y, R.z, yaw, 0.97 + rnd() * 0.06);
    placed.push(put(model, personDef(model, kind, clothes), m, tag, 'Scene ' + kind));
    if (umbrellas && kind !== 'child-standing') um.push(put(model, umbrellaDef(model, UMBRELLAS[Math.floor(rnd() * UMBRELLAS.length)]), m, tag, 'Scene umbrella'));
  }
  return { placed, umbrellas: um, short: sp.short, z: r3(R.z), where: R.label };
}

// ------------------------------------------------------------------ seasons and clearing
/** Every scene tree takes the same kind in the season's colours (a variant chosen by its place, so a row does not all match). */
export function setTreeSeason(model, season) {
  let changed = 0, trees = 0;
  for (const [id, inst] of model.root.insts) {
    if (sceneKind(model, inst) !== 'tree') continue;
    trees++;
    const slug = model.defs.get(inst.def).starter.split(':')[1];
    const vs = variantsFor(slug, season);
    const v = vs[Math.abs(Math.round(inst.m[12] * 7 + inst.m[13] * 13)) % vs.length];
    const next = treeDef(model, slug, v);
    if (next !== inst.def) { model.root.insts.set(id, { ...inst, def: next }); changed++; }
  }
  return { changed, trees };
}

export function clearScene(model, what = 'all') {
  const kinds = what === 'trees' ? ['tree'] : what === 'people' ? ['person', 'umbrella'] : ['tree', 'person', 'umbrella'];
  const ids = [...model.root.insts].filter(([, inst]) => kinds.includes(sceneKind(model, inst))).map(([id]) => id);
  for (const id of ids) model.root.insts.delete(id);
  return { removed: ids.length };
}
