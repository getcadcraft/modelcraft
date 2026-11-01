/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketch-photo-mc.js — EG.36's ModelCraft half (0.8 round 3, model_PART_3): a photo of a hand sketch on paper becomes edges on the ground,
 * at the scale the person says, one group with a group (and a tag) per pen colour. The engine is the shared cc-photosketch
 * (./photosketch/, byte copies of lib/photosketch, which CadCraft's PHOTOSKETCH uses too) over cc-raster (./raster/): it finds the paper,
 * straightens it, splits the ink by colour and traces it. Classic image processing on this computer: no trained model, no network
 * (rule 35). DOM-free: readScan reads the JPEG / PNG / TIFF bytes; a phone's progressive JPEG is handed to the page's own decoder (decodeJpeg).
 *
 *   await sketchPhoto(bytes, { paper: 'auto' | PAPERS key, scale: n of 1:n, colours: true, corners?, decodeJpeg? }) → the engine's result, metres on the ground
 *   addSketch(model, result, { name, into: def, names: { black, red, blue, green } (the tags' words) }) → { def, groups, edges }   inside model.change
 *   ARC_SEGS = 48 segments in a whole turn (an arc of a quarter gets 12)
 */
import { readScan } from './raster/index.js';
import { sketchFromPhoto, LAYERS } from './photosketch/photosketch.js';
import { edgesDef } from './model.js';
import { ident } from './vec.js';

export const ARC_SEGS = 48;
export { PAPERS } from './photosketch/paper.js';

/** The photo's bytes → the drawing, in metres (paper millimetres × scale). */
export async function sketchPhoto(bytes, { paper = 'auto', scale = 100, colours = true, corners = null, decodeJpeg = null } = {}) {
  const img = await readScan(bytes, 0, { decodeJpeg });
  return sketchFromPhoto(img, { paper, scale, units: 'meters', colours, corners: corners || undefined });
}

/** Ground segments [[x, y, 0], [x, y, 0]] for one traced entity (lines; arcs and circles as short straight runs). */
export function segmentsOf(e) {
  if (e.type === 'line') return [[[e.x1, e.y1, 0], [e.x2, e.y2, 0]]];
  const full = e.type === 'circle', a0 = full ? 0 : e.a0;
  let sweep = full ? Math.PI * 2 : e.a1 - e.a0;
  if (sweep <= 0) sweep += Math.PI * 2;
  const n = Math.max(2, Math.ceil(sweep / (Math.PI * 2 / ARC_SEGS)));
  const pt = (k) => { const a = a0 + (sweep * k) / n; return [e.cx + e.r * Math.cos(a), e.cy + e.r * Math.sin(a), 0]; };
  const out = [];
  for (let k = 0; k < n; k++) out.push([pt(k), pt(k + 1)]);
  return out;
}

/** The traced drawing into the model: call inside model.change (one undo step). Each pen colour is a group tagged with its colour's name. */
export function addSketch(model, result, { name = 'Sketch', into = model.root, names = {} } = {}) {
  const outer = model.newDef('group', name);
  const groups = [];
  let edges = 0;
  const byLayer = new Map();
  for (const e of result.entities) { if (!byLayer.has(e.layer)) byLayer.set(e.layer, []); byLayer.get(e.layer).push(e); }
  for (const [key, L] of Object.entries(LAYERS)) {
    const list = byLayer.get(L.name);
    if (!list || !list.length) continue;
    const segs = list.flatMap(segmentsOf);
    const word = names[key] || key;
    const d = edgesDef(model, segs, word);
    const iid = model.place(outer, d.id, ident());
    const tag = model.tag(word) ? word : model.addTag(word);
    outer.insts.get(iid).tag = tag;
    groups.push({ key, def: d, tag, edges: d.edges.size });
    edges += d.edges.size;
  }
  model.place(into, outer.id, ident());
  return { def: outer, groups, edges };
}
