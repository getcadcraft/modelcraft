/* SPDX-License-Identifier: Apache-2.0 */
/**
 * firstmodel.js — the guided first model (0.6 LC.21): four steps from an empty view to a model ready for a 3D printer.
 * DOM-free; modelcraft.js draws the card. Every step is read from the model, never from which buttons were clicked, so
 * any way of doing it counts (tools, typed sizes, the starter library) and Undo steps the guide back.
 *
 *   GUIDE_STEPS = ['face', 'solid', 'group', 'print']
 *   shells(def)                    → [{faces: [fid], closed, volume (m³, signed; null when open)}]: pieces joined by edges.
 *                                    A mesh definition (MD.1) is read from its mesh (meshShells: face numbers of the mesh
 *                                    shown), never through the push/pull copy its `faces` getter would build (0.10 PERF.38:
 *                                    1 to 1.5 s and most of the import's memory at 500k faces)
 *   meshShells(mesh)               → the same from a Mesh: pieces joined through shared edges (half-edge twins), closed when
 *                                    no edge of the piece is open; kept per mesh state, so the card's polling costs nothing
 *   guideFacts(model, {ready})     → {face, solid, group, print}: booleans. face = a face anywhere shown; solid = a closed
 *                                    piece with volume; group = a shown group or component holding one; print = `ready`
 *                                    (the caller's last check of this model version said "Ready to print")
 *   guideStep(model, {ready})      → the index of the first step not done (4 = all done)
 */

import { edgeFaces, faceTris } from './model.js';
import { dot, cross } from './vec.js';

export const GUIDE_STEPS = ['face', 'solid', 'group', 'print'];

const VOL_EPS = 1e-12;   // m³ (a 0.1 mm cube): anything smaller is a flat leftover, not a solid

const segs = (f) => {
  const out = [];
  for (const loop of f.loops) for (let i = 0; i < loop.length; i++) out.push([loop[i], loop[(i + 1) % loop.length]]);
  return out;
};
const ekey = (a, b) => (a < b ? a + '|' + b : b + '|' + a);

export function shells(def) {
  if (def.mesh) return meshShells(def.shown);
  const ef = edgeFaces(def), seen = new Set(), out = [];
  for (const start of def.faces.keys()) {
    if (seen.has(start)) continue;
    seen.add(start);
    const faces = [start], stack = [start];
    let closed = true;
    while (stack.length) {
      const fid = stack.pop();
      for (const [a, b] of segs(def.faces.get(fid))) {
        const fs = ef.get(ekey(a, b)) || [];
        if (fs.length !== 2) closed = false;
        for (const g of fs) if (!seen.has(g)) { seen.add(g); faces.push(g); stack.push(g); }
      }
    }
    let volume = null;
    if (closed) {
      volume = 0;
      for (const fid of faces) for (const [a, b, c] of faceTris(def, def.faces.get(fid))) volume += dot(def.verts.get(a), cross(def.verts.get(b), def.verts.get(c))) / 6;
    }
    out.push({ faces, closed, volume });
  }
  return out;
}

const meshFacts = new WeakMap();   // Mesh → {v (its state), shells}
export function meshShells(mesh) {
  const kept = meshFacts.get(mesh);
  if (kept && kept.v === mesh.v && !mesh.recording) return kept.shells;
  const piece = new Int32Array(mesh.nf).fill(-1), out = [], stack = [], cs = [], hTw = mesh.hTw, hF = mesh.hF;
  for (let f0 = 0; f0 < mesh.nf; f0++) {
    if (mesh.faceDead(f0) || piece[f0] >= 0) continue;
    const k = out.length, faces = [f0];
    let closed = true;
    piece[f0] = k; stack.push(f0);
    while (stack.length) {
      for (const h of mesh.faceCorners(stack.pop(), cs)) {
        const g = hTw[h];
        if (g < 0) { closed = false; continue; }
        const f = hF[g];
        if (piece[f] < 0) { piece[f] = k; faces.push(f); stack.push(f); }
      }
    }
    out.push({ faces, closed, volume: closed ? 0 : null });
  }
  if (out.some((s) => s.closed)) {
    const T = mesh.triangulate({ hidden: true }), P = mesh.P, hV = mesh.hV;
    for (let i = 0; i < T.n; i++) {
      const s = out[piece[T.face[i]]];
      if (!s.closed) continue;
      const a = hV[T.tri[i * 3]] * 3, b = hV[T.tri[i * 3 + 1]] * 3, c = hV[T.tri[i * 3 + 2]] * 3;
      s.volume += (P[a] * (P[b + 1] * P[c + 2] - P[b + 2] * P[c + 1]) - P[a + 1] * (P[b] * P[c + 2] - P[b + 2] * P[c]) + P[a + 2] * (P[b] * P[c + 1] - P[b + 1] * P[c])) / 6;
    }
  }
  meshFacts.set(mesh, { v: mesh.v, shells: out });
  return out;
}

const hasSolid = (def) => shells(def).some((s) => s.closed && Math.abs(s.volume) > VOL_EPS);
const hasFace = (def) => (def.mesh ? def.shown.faceCount > 0 : def.faces.size > 0);

export function guideFacts(model, { ready = false } = {}) {
  let face = false, solid = false, group = false;
  model.walkShown((def, m, path) => {
    if (hasFace(def)) face = true;
    if (hasSolid(def)) { solid = true; if (path.length) group = true; }
  });
  return { face, solid, group, print: !!ready && group };
}

export function guideStep(model, opts = {}) {
  const f = guideFacts(model, opts);
  const i = GUIDE_STEPS.findIndex((k) => !f[k]);
  return i < 0 ? GUIDE_STEPS.length : i;
}
