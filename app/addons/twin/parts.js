/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — no words here. */
/**
 * parts.js — the twin add-on's view of ModelCraft's parts for behaviours (0.9 TW.13). A "part" is a mesh definition placed in the model; its faces are the regions of the mesh
 * that the importer left smooth (an imported STEP face is one region: the edges inside it are soft, the edges between two faces are sharp). DOM-free.
 *
 *   regionsOf(mesh) → { soup: { positions (m, the mesh's own frame), tris, group }, faceOfRegion: Map(region id → [mesh face ids]), regionOfFace: Int32Array }
 *   partsOf(model)  → [{ key (definition id), name, M (first placement's world matrix), mesh }]
 *   pickRegion(picker, cam, x, y) → { part, region } | null           (the mesh kernel's own picker, mode 'face')
 */
import { FL_SHARP } from '../../mesh.js';

export function regionsOf(mesh) {
  const nf = mesh.nf, region = new Int32Array(nf).fill(-1), hF = mesh.hF, hTw = mesh.hTw, hFl = mesh.hFl, corners = [];
  let next = 0;
  for (let f0 = 0; f0 < nf; f0++) {
    if (region[f0] >= 0 || mesh.faceDead(f0)) continue;
    const id = next++, stack = [f0]; region[f0] = id;
    while (stack.length) {
      const f = stack.pop();
      mesh.faceCorners(f, corners);
      for (const h of corners.slice()) {
        const t = hTw[h]; if (t < 0 || (hFl[h] & FL_SHARP) || (hFl[t] & FL_SHARP)) continue;
        const g = hF[t]; if (region[g] < 0 && !mesh.faceDead(g)) { region[g] = id; stack.push(g); }
      }
    }
  }
  const T = mesh.triangulate({ hidden: true }), P = mesh.P, hV = mesh.hV, vid = new Map(), pos = [], tris = new Uint32Array(T.n * 3), group = new Int32Array(T.n);
  for (let i = 0; i < T.n * 3; i++) {
    const v = hV[T.tri[i]]; let k = vid.get(v);
    if (k === undefined) { k = pos.length / 3; vid.set(v, k); pos.push(P[v * 3], P[v * 3 + 1], P[v * 3 + 2]); }
    tris[i] = k;
  }
  for (let i = 0; i < T.n; i++) group[i] = region[T.face[i]];
  const faceOfRegion = new Map();
  for (let f = 0; f < nf; f++) if (region[f] >= 0) { let a = faceOfRegion.get(region[f]); if (!a) faceOfRegion.set(region[f], a = []); a.push(f); }
  return { soup: { positions: Float64Array.from(pos), tris, group }, faceOfRegion, regionOfFace: region };
}

export function partsOf(model) {
  const out = [], seen = new Set();
  model.walk((def, M) => {
    if (def.mesh && !seen.has(def.id)) { seen.add(def.id); out.push({ key: def.id, name: def.name, M: M.slice(), mesh: def.mesh }); }
  });
  return out;
}

export function pickRegion(part, regions, picker, cam, x, y) {
  const r = picker.at(cam, x, y, 'face');
  if (!r || r.kind !== 'face') return null;
  const region = regions.regionOfFace[r.el];
  return region >= 0 ? { part: part.key, region } : null;
}
