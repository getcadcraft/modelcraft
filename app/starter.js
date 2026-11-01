/* SPDX-License-Identifier: Apache-2.0 */
/**
 * starter.js — the starter component library (0.4 M25): about thirty everyday things, built from simple solids by the
 * kernel when you pick one (no model files to download, nothing to license). DOM-free: bin/test-modelcraft.mjs builds
 * every item and checks it.
 *
 *   STARTER = [{id, cat, wall?}]            id → the name key `app.starter.<id>`; cat → `app.starter.cat.<cat>`;
 *                                           wall: built lying in red–green with its front toward blue, so that placed
 *                                           on a wall (Place lays it on the face) it stands in the wall
 *   buildStarter(model, id, name) → the new component definition (call inside model.change). Each part is a group of
 *                                           its own inside it (parts may touch or overlap without merging faces), in
 *                                           meters, standing on z = 0 (or lying on it, for wall things).
 */
import { addPolygon, pushPull, rectPts, ngonPts, paintFaces, meshDef, softenEdges } from './model.js';
import { entourage } from './entourage.js';   // 0.5 RC.11 (e): a byte-identical copy of lib/entourage/entourage.js
import { ident } from './vec.js';
import { t } from './i18n.js';
import { modelOf } from './plants/plants.js';   // 0.8 LD.1: the shared plant list

const WOOD = '#b98552', WHITE = '#f4f4f1', LIGHT = '#c9c9c5', GRAY = '#8a8a86', DARK = '#3b3b3b', GLASS = '#7fb8e6';
const FABRIC = '#2b5fbd', GREEN = '#2e9d57', BROWN = '#7a5236', SAND = '#d8c8a2', RED = '#c0392b', LEAF = '#17703a';

/** A part's name in the page's language (Leg, Frame, Glass…: they show in the Outliner). */
const part = (n) => t('app.starter.part.' + n.toLowerCase());
/** A prism from a polygon at its base, pushed up by h, in a part of its own. */
function prism(m, comp, name, pts, h, color) {
  const d = m.newDef('group', part(name));
  addPolygon(d, pts);
  pushPull(d, [...d.faces.keys()][0], h);
  if (color) paintFaces(d, [...d.faces.keys()], color);
  m.place(comp, d.id, ident());
  return d;
}
const box = (m, c, n, [x, y, z], [w, dd, h], color) => prism(m, c, n, rectPts([x, y, z], [1, 0, 0], [0, 1, 0], w, dd), h, color);
const cyl = (m, c, n, [x, y, z], r, h, color, sides = 16) => prism(m, c, n, ngonPts([x, y, z], [0, 0, 1], [1, 0, 0], r, sides), h, color);
/** A cone (or pyramid) from a base circle at z to an apex at z + h. */
function cone(m, comp, name, [x, y, z], r, h, color, sides = 12) {
  const base = ngonPts([x, y, z], [0, 0, 1], [1, 0, 0], r, sides), apex = [x, y, z + h];
  const polys = [{ loops: [base.slice().reverse()], color }];
  for (let i = 0; i < sides; i++) polys.push({ loops: [[base[i], base[(i + 1) % sides], apex]], color });
  const d = meshDef(m, polys, part(name), 'group');
  m.place(comp, d.id, ident());
  return d;
}
/** How the parts named `name` follow when the component is stretched (0.4 M26). */
const ruleFor = (m, c, name, rule) => { for (const i of c.insts.values()) if (m.def(i.def)?.name === part(name)) i.rule = { ...rule }; };
const legs = (m, c, x0, y0, w, dd, h, s, color) => { for (const [x, y] of [[x0, y0], [x0 + w - s, y0], [x0, y0 + dd - s], [x0 + w - s, y0 + dd - s]]) box(m, c, 'Leg', [x, y, 0], [s, s, h], color); };

// each maker draws into the component c, in meters
const MAKE = {
  // ---- doors and windows: lying in red–green, front toward blue (stand in a wall when placed on it) ----
  door: (m, c) => { box(m, c, 'Frame', [0, 0, 0], [0.06, 2.1, 0.12], WHITE); box(m, c, 'Frame', [0.84, 0, 0], [0.06, 2.1, 0.12], WHITE); box(m, c, 'Frame', [0.06, 2.04, 0], [0.78, 0.06, 0.12], WHITE); box(m, c, 'Leaf', [0.06, 0, 0.04], [0.78, 2.04, 0.04], WOOD); box(m, c, 'Handle', [0.72, 1.0, 0.08], [0.08, 0.02, 0.05], DARK); },
  door2: (m, c) => { box(m, c, 'Frame', [0, 0, 0], [0.06, 2.1, 0.12], WHITE); box(m, c, 'Frame', [1.54, 0, 0], [0.06, 2.1, 0.12], WHITE); box(m, c, 'Frame', [0.06, 2.04, 0], [1.48, 0.06, 0.12], WHITE); box(m, c, 'Leaf', [0.06, 0, 0.04], [0.735, 2.04, 0.04], WOOD); box(m, c, 'Leaf', [0.805, 0, 0.04], [0.735, 2.04, 0.04], WOOD); },
  window: (m, c) => { box(m, c, 'Frame', [0, 0, 0], [1.2, 0.06, 0.1], WHITE); box(m, c, 'Frame', [0, 1.14, 0], [1.2, 0.06, 0.1], WHITE); box(m, c, 'Frame', [0, 0.06, 0], [0.06, 1.08, 0.1], WHITE); box(m, c, 'Frame', [1.14, 0.06, 0], [0.06, 1.08, 0.1], WHITE); box(m, c, 'Glass', [0.06, 0.06, 0.045], [1.08, 1.08, 0.01], GLASS); },
  window_wide: (m, c) => { box(m, c, 'Frame', [0, 0, 0], [2.4, 0.06, 0.1], WHITE); box(m, c, 'Frame', [0, 1.14, 0], [2.4, 0.06, 0.1], WHITE); for (const x of [0, 1.17, 2.34]) box(m, c, 'Frame', [x, 0.06, 0], [0.06, 1.08, 0.1], WHITE); box(m, c, 'Glass', [0.06, 0.06, 0.045], [1.11, 1.08, 0.01], GLASS); box(m, c, 'Glass', [1.23, 0.06, 0.045], [1.11, 1.08, 0.01], GLASS); },
  garage: (m, c) => { box(m, c, 'Frame', [0, 0, 0], [0.1, 2.2, 0.15], WHITE); box(m, c, 'Frame', [2.6, 0, 0], [0.1, 2.2, 0.15], WHITE); box(m, c, 'Frame', [0.1, 2.1, 0], [2.5, 0.1, 0.15], WHITE); for (let k = 0; k < 4; k++) box(m, c, 'Panel', [0.1, k * 0.525, 0.05], [2.5, 0.5, 0.05], LIGHT); },
  // ---- furniture (standing on z = 0) ----
  table: (m, c) => { box(m, c, 'Top', [0, 0, 0.72], [1.6, 0.9, 0.04], WOOD); legs(m, c, 0.05, 0.05, 1.5, 0.8, 0.72, 0.06, WOOD); },
  round_table: (m, c) => { cyl(m, c, 'Top', [0.5, 0.5, 0.72], 0.5, 0.04, WOOD, 24); cyl(m, c, 'Stem', [0.5, 0.5, 0.05], 0.05, 0.67, DARK); cyl(m, c, 'Foot', [0.5, 0.5, 0], 0.3, 0.05, DARK, 20); },
  chair: (m, c) => { box(m, c, 'Seat', [0, 0, 0.43], [0.45, 0.45, 0.04], WOOD); legs(m, c, 0, 0, 0.45, 0.45, 0.43, 0.04, WOOD); box(m, c, 'Back', [0, 0.41, 0.47], [0.45, 0.04, 0.42], WOOD); },
  stool: (m, c) => { cyl(m, c, 'Seat', [0.18, 0.18, 0.62], 0.18, 0.04, WOOD, 16); legs(m, c, 0.04, 0.04, 0.28, 0.28, 0.62, 0.03, DARK); },
  sofa: (m, c) => { box(m, c, 'Base', [0, 0, 0.1], [2.0, 0.9, 0.32], FABRIC); box(m, c, 'Back', [0, 0.7, 0.42], [2.0, 0.2, 0.4], FABRIC); box(m, c, 'Arm', [0, 0, 0.42], [0.18, 0.7, 0.2], FABRIC); box(m, c, 'Arm', [1.82, 0, 0.42], [0.18, 0.7, 0.2], FABRIC); legs(m, c, 0.05, 0.05, 1.9, 0.8, 0.1, 0.05, DARK); },
  armchair: (m, c) => { box(m, c, 'Base', [0, 0, 0.1], [0.85, 0.85, 0.32], FABRIC); box(m, c, 'Back', [0, 0.65, 0.42], [0.85, 0.2, 0.4], FABRIC); box(m, c, 'Arm', [0, 0, 0.42], [0.16, 0.65, 0.2], FABRIC); box(m, c, 'Arm', [0.69, 0, 0.42], [0.16, 0.65, 0.2], FABRIC); legs(m, c, 0.05, 0.05, 0.75, 0.75, 0.1, 0.05, DARK); },
  bed_double: (m, c) => { box(m, c, 'Frame', [0, 0, 0.1], [1.6, 2.0, 0.25], WOOD); box(m, c, 'Mattress', [0.03, 0.03, 0.35], [1.54, 1.94, 0.2], WHITE); box(m, c, 'Headboard', [0, 1.95, 0.35], [1.6, 0.05, 0.6], WOOD); legs(m, c, 0, 0, 1.6, 2.0, 0.1, 0.06, DARK); },
  bed_single: (m, c) => { box(m, c, 'Frame', [0, 0, 0.1], [0.9, 2.0, 0.25], WOOD); box(m, c, 'Mattress', [0.03, 0.03, 0.35], [0.84, 1.94, 0.2], WHITE); box(m, c, 'Headboard', [0, 1.95, 0.35], [0.9, 0.05, 0.6], WOOD); legs(m, c, 0, 0, 0.9, 2.0, 0.1, 0.06, DARK); },
  desk: (m, c) => { box(m, c, 'Top', [0, 0, 0.72], [1.4, 0.7, 0.03], WHITE); box(m, c, 'Drawers', [1.0, 0, 0], [0.4, 0.7, 0.72], WHITE); box(m, c, 'Side', [0, 0, 0], [0.03, 0.7, 0.72], WHITE); },
  bookshelf: (m, c) => { box(m, c, 'Side', [0, 0, 0], [0.02, 0.3, 2.0], WOOD); box(m, c, 'Side', [0.78, 0, 0], [0.02, 0.3, 2.0], WOOD); for (let k = 0; k < 6; k++) box(m, c, 'Shelf', [0.02, 0, k * 0.39], [0.76, 0.3, 0.02], WOOD); ruleFor(m, c, 'Shelf', { z: 'move' }); },
  wardrobe: (m, c) => { box(m, c, 'Body', [0, 0, 0], [1.2, 0.6, 2.2], WHITE); box(m, c, 'Handle', [0.56, -0.02, 1.0], [0.02, 0.02, 0.2], DARK); box(m, c, 'Handle', [0.62, -0.02, 1.0], [0.02, 0.02, 0.2], DARK); },
  // ---- kitchen and bath ----
  base_cabinet: (m, c) => { box(m, c, 'Plinth', [0.05, 0.05, 0], [0.5, 0.5, 0.1], DARK); box(m, c, 'Body', [0, 0, 0.1], [0.6, 0.58, 0.76], WHITE); box(m, c, 'Worktop', [0, 0, 0.86], [0.6, 0.6, 0.04], DARK); },
  wall_cabinet: (m, c) => { box(m, c, 'Body', [0, 0, 1.45], [0.6, 0.35, 0.7], WHITE); },
  counter: (m, c) => { box(m, c, 'Plinth', [0.05, 0.05, 0], [2.3, 0.5, 0.1], DARK); box(m, c, 'Body', [0, 0, 0.1], [2.4, 0.58, 0.76], WHITE); box(m, c, 'Worktop', [0, 0, 0.86], [2.4, 0.6, 0.04], DARK); },
  fridge: (m, c) => { box(m, c, 'Body', [0, 0, 0], [0.6, 0.65, 1.85], WHITE); box(m, c, 'Handle', [0.52, -0.03, 1.1], [0.03, 0.03, 0.4], GRAY); },
  stove: (m, c) => { box(m, c, 'Body', [0, 0, 0], [0.6, 0.6, 0.86], LIGHT); box(m, c, 'Hob', [0, 0, 0.86], [0.6, 0.6, 0.04], DARK); for (const [x, y] of [[0.15, 0.15], [0.45, 0.15], [0.15, 0.45], [0.45, 0.45]]) cyl(m, c, 'Burner', [x, y, 0.9], 0.08, 0.01, GRAY, 12); },
  sink: (m, c) => { box(m, c, 'Body', [0, 0, 0], [0.8, 0.58, 0.86], WHITE); box(m, c, 'Worktop', [0, 0, 0.86], [0.8, 0.6, 0.04], DARK); box(m, c, 'Basin', [0.15, 0.1, 0.9], [0.5, 0.4, 0.01], GRAY); },
  toilet: (m, c) => { box(m, c, 'Base', [0.1, 0, 0], [0.2, 0.45, 0.4], WHITE); cyl(m, c, 'Bowl', [0.2, 0.2, 0.3], 0.2, 0.12, WHITE, 16); box(m, c, 'Cistern', [0, 0.45, 0.4], [0.4, 0.18, 0.4], WHITE); },
  bathtub: (m, c) => { box(m, c, 'Side', [0, 0, 0], [1.7, 0.06, 0.55], WHITE); box(m, c, 'Side', [0, 0.69, 0], [1.7, 0.06, 0.55], WHITE); box(m, c, 'End', [0, 0.06, 0], [0.06, 0.63, 0.55], WHITE); box(m, c, 'End', [1.64, 0.06, 0], [0.06, 0.63, 0.55], WHITE); box(m, c, 'Bottom', [0.06, 0.06, 0], [1.58, 0.63, 0.08], WHITE); },
  shower: (m, c) => { box(m, c, 'Tray', [0, 0, 0], [0.9, 0.9, 0.05], WHITE); box(m, c, 'Glass', [0, 0, 0.05], [0.9, 0.01, 1.95], GLASS); box(m, c, 'Glass', [0.89, 0.01, 0.05], [0.01, 0.89, 1.95], GLASS); },
  washbasin: (m, c) => { box(m, c, 'Basin', [0, 0, 0.8], [0.6, 0.45, 0.06], WHITE); cyl(m, c, 'Pedestal', [0.3, 0.3, 0], 0.08, 0.8, WHITE, 12); },
  // ---- building ----
  stair: (m, c) => { for (let k = 0; k < 15; k++) box(m, c, 'Step', [0, k * 0.27, 0], [1.0, 0.27, 0.18 * (k + 1)], LIGHT); ruleFor(m, c, 'Step', { y: 'scale', z: 'scale' }); },
  column_round: (m, c) => { cyl(m, c, 'Column', [0.15, 0.15, 0], 0.15, 3.0, LIGHT, 20); },
  column_square: (m, c) => { box(m, c, 'Column', [0, 0, 0], [0.3, 0.3, 3.0], LIGHT); },
  beam: (m, c) => { box(m, c, 'Beam', [0, 0, 0], [4.0, 0.2, 0.4], LIGHT); },
  // ---- site and people ----
  tree: (m, c) => { cyl(m, c, 'Trunk', [0, 0, 0], 0.12, 2.0, BROWN, 10); cone(m, c, 'Crown', [0, 0, 1.6], 1.4, 4.0, LEAF, 14); },
  shrub: (m, c) => { cone(m, c, 'Shrub', [0, 0, 0], 0.6, 1.0, GREEN, 10); },
  person: (m, c) => { box(m, c, 'Leg', [0.05, 0.05, 0], [0.13, 0.15, 0.85], DARK); box(m, c, 'Leg', [0.22, 0.05, 0], [0.13, 0.15, 0.85], DARK); box(m, c, 'Body', [0, 0, 0.85], [0.4, 0.25, 0.65], RED); cyl(m, c, 'Head', [0.2, 0.125, 1.53], 0.1, 0.22, SAND, 12); },
  car: (m, c) => { box(m, c, 'Body', [0, 0, 0.3], [4.3, 1.8, 0.6], GRAY); box(m, c, 'Cabin', [1.1, 0.1, 0.9], [2.2, 1.6, 0.55], GLASS); for (const [x, y] of [[0.8, -0.01], [3.5, -0.01], [0.8, 1.61], [3.5, 1.61]]) { const d = m.newDef('group', part('Wheel')); addPolygon(d, ngonPts([0, 0, 0], [0, 1, 0], [1, 0, 0], 0.33, 16)); pushPull(d, [...d.faces.keys()][0], 0.2); paintFaces(d, [...d.faces.keys()], DARK); m.place(c, d.id, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, 0.33, 1]); } },
};

// ---- entourage (0.5 RC.11 (e)): trees, shrubs, people and cars from lib/entourage (CC0), each part a group in its own
// colour (a car's see-through glass painted with the library's tinted glass), organic parts softened so they read as
// surfaces, not wireframes. Millimetres in the generator → meters here. ----
const ENTOURAGE = entourage();
/** One entourage item's parts into component c; `recolor` {part name: '#rrggbb'} and `omit` [part names] are how a scene changes the season (0.8 EG.61). */
function entourageParts(m, c, e, recolor = {}, omit = [], scale = null) {
  for (const p of e.parts) {
    if (omit.includes(p.name)) continue;
    const polys = [], color = p.alpha < 1 ? 'mat:glass-tinted' : (recolor[p.name] || p.color);
    for (let i = 0; i < p.I.length; i += 3) {
      const v = (k) => [p.P[p.I[i + k] * 3] / 1000, p.P[p.I[i + k] * 3 + 1] / 1000, p.P[p.I[i + k] * 3 + 2] / 1000];
      polys.push({ loops: [[v(0), v(1), v(2)]], color });
    }
    const d = meshDef(m, polys, part(p.name), 'group');
    softenEdges(d, [...d.edges.keys()], e.cat === 'site/vehicles' ? 25 : 75);
    m.place(c, d.id, scale ? [scale[0], 0, 0, 0, 0, scale[1], 0, 0, 0, 0, scale[2], 0, 0, 0, 0, 1] : ident());
  }
}
for (const e of ENTOURAGE) MAKE['ent-' + e.slug] = (m, c) => entourageParts(m, c, e);

/**
 * An entourage item (slug from entourage.js) as a new component, in other colours or without some parts (call inside model.change).
 * `key` goes in the component's `starter` field ('scene:<slug>:<key>'), so a scene finds the one it built before.
 */
export function buildEntourage(model, slug, name, { recolor = {}, omit = [], key = '' } = {}) {
  const e = ENTOURAGE.find((x) => x.slug === slug);
  if (!e) return null;
  const c = model.newDef('component', model.uniqueName(name || slug));
  entourageParts(model, c, e, recolor, omit);
  c.starter = 'scene:' + slug + ':' + key;
  return c;
}
/** A person's umbrella, standing to the side of a 1.75 m figure at the origin: a shaft and a shallow dome (0.8 EG.61, in the rain). */
export function buildUmbrella(model, color, name = 'Umbrella') {
  const c = model.newDef('component', model.uniqueName(name));
  cyl(model, c, 'Stem', [0.14, 0, 1.2], 0.012, 0.95, DARK, 6);
  cone(model, c, 'Top', [0.14, 0, 1.95], 0.5, 0.2, color, 12);
  c.starter = 'scene:umbrella:' + color.slice(1);
  return c;
}

/**
 * A plant of the shared plant list (plants/plants.js, 0.8 LD.1) as a new component: the entourage model nearest its form
 * (`modelOf`), scaled to the species' size at maturity (or at planting with which 'plant'); turf is a thin green slab.
 * Call inside model.change. `starter` = 'plant:<key>' so picking the same plant again places another copy.
 */
export function buildPlant(model, sp, name, { which = 'mature' } = {}) {
  const sz = (which === 'plant' && sp.size.plant) || sp.size.mature;
  const c = model.newDef('component', model.uniqueName(name || sp.botanical));
  const e = ENTOURAGE.find((x) => 'entourage:' + x.slug === modelOf(sp));
  if (e) {
    // the parts' own extent (e.size is the nominal one), so the plant ends up the size the list says
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, z1 = 0;
    for (const p of e.parts) for (let i = 0; i < p.P.length; i += 3) { x0 = Math.min(x0, p.P[i]); x1 = Math.max(x1, p.P[i]); y0 = Math.min(y0, p.P[i + 1]); y1 = Math.max(y1, p.P[i + 1]); z1 = Math.max(z1, p.P[i + 2]); }
    const sxy = (sz.s * 1000) / Math.max(x1 - x0, y1 - y0, 1);
    entourageParts(model, c, e, {}, [], [sxy, sxy, (sz.h * 1000) / Math.max(z1, 1)]);
  } else {
    const d = model.newDef('group', part('Turf'));
    addPolygon(d, rectPts([-sz.s / 2, -sz.s / 2, 0], [1, 0, 0], [0, 1, 0], sz.s, sz.s));
    pushPull(d, [...d.faces.keys()][0], Math.max(0.02, sz.h));
    paintFaces(d, [...d.faces.keys()], GREEN);
    model.place(c, d.id, ident());
  }
  c.starter = 'plant:' + sp.key;
  return c;
}
/** The shared plant list (bundled seed, CC0) → the species array; cached. */
let PLANT_LIST = null;
export async function plantList() {
  if (PLANT_LIST) return PLANT_LIST;
  const P = await import('./plants/plants.js');
  const raw = await (await fetch(new URL('./plants/plants-seed.json', import.meta.url))).json();
  const bundled = P.readPlants(raw).library.species;
  // 0.8 LD.1: the Library's plants when reachable, the bundled list on any failure
  try { const { loadPlants } = await import('./plants/plants-live.js'); PLANT_LIST = (await loadPlants({ seed: bundled })).species; }
  catch { PLANT_LIST = bundled; }
  return PLANT_LIST;
}

export const STARTER = [
  ['door', 'openings', true], ['door2', 'openings', true], ['window', 'openings', true], ['window_wide', 'openings', true], ['garage', 'openings', true],
  ['table', 'furniture'], ['round_table', 'furniture'], ['chair', 'furniture'], ['stool', 'furniture'], ['sofa', 'furniture'], ['armchair', 'furniture'],
  ['bed_double', 'furniture'], ['bed_single', 'furniture'], ['desk', 'furniture'], ['bookshelf', 'furniture'], ['wardrobe', 'furniture'],
  ['base_cabinet', 'kitchen'], ['wall_cabinet', 'kitchen'], ['counter', 'kitchen'], ['fridge', 'kitchen'], ['stove', 'kitchen'], ['sink', 'kitchen'],
  ['toilet', 'kitchen'], ['bathtub', 'kitchen'], ['shower', 'kitchen'], ['washbasin', 'kitchen'],
  ['stair', 'building'], ['column_round', 'building'], ['column_square', 'building'], ['beam', 'building'],
  ['tree', 'site'], ['shrub', 'site'], ['person', 'site'], ['car', 'site'],
  ...ENTOURAGE.map((e) => ['ent-' + e.slug, 'entourage']),
].map(([id, cat, wall]) => ({ id, cat, ...(wall ? { wall: true } : {}) }));

export function buildStarter(model, id, name) {
  const make = MAKE[id];
  if (!make) return null;
  const c = model.newDef('component', model.uniqueName(name || id));
  make(model, c);
  return c;
}
