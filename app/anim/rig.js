/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anim/rig.js — armatures and skinning (0.7 AN.2, session `anim`): the sums, DOM-free and three-free, so Node tests, the
 * page and exports use the same ones. The rig's data lives in the animation (render/anim.js `rigs`); the weights live on
 * the mesh as one vertex layer per bone, 'weight.<bone id>' (a "vertex group"; anim/weights.js paints and works them out).
 *
 * Bones: {id, name, parent ('' = none), head [x, y, z], tail, roll (degrees), deform}, in the mesh's own coordinates. A bone's
 * frame: its Y axis runs head → tail, its Z axis is the mesh's +Z made square to Y (+Y when the bone is upright), turned
 * by `roll` about Y; X completes it. A bone's pose = location, rotation (XYZ degrees), scale in that frame, from its rest.
 *
 *   restMatrices(rig) → Map(id → m16)                         bone frame → mesh, at rest
 *   order(rig) → bones with every parent before its children
 *   poseMatrices(rig, poseOf(id) → {location, rotation, scale}) → {world: Map(id → m16), skin: Map(id → m16)}
 *     world: the posed bone frame → mesh; skin: rest mesh → posed mesh (world × rest⁻¹), what the skin applies
 *   packWeights(mesh, rig, max = 4) → {joints: Int32Array, weights: Float32Array, n}   the strongest `max` bones per vertex,
 *     normalised (joints index rig.bones; −1 = none); kept per mesh state
 *   skinPoints(mesh, packed, skinMats (Float64Array 16 × bones), mode 'lbs' | 'dqs', P (in: points at rest, out: posed))
 *   skinMatrixArray(rig, skin Map) → Float64Array(16 × bones), in rig.bones order (identity for a bone with no matrix)
 *   bonePoints(rig, world Map) → [{id, head, tail}] posed, mesh coordinates (drawing bones)
 */
import { eulerToQuat, compose, decompose } from '../render/anim.js';
import { cross3 as cross, dot3 as dot, sub3 as sub, unit3 as norm } from '../geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

/** Column-major 4×4 product a × b. */
export function mul(a, b) {
  const o = new Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
  return o;
}
/** Inverse of a rigid (rotation + translation) or rotation-scale-translation matrix, the general way. */
export function inv(m) {
  const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = m;
  const b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11;
  const b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30;
  const b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
  let d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!d) return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  d = 1 / d;
  return [
    (a11 * b11 - a12 * b10 + a13 * b09) * d, (a02 * b10 - a01 * b11 - a03 * b09) * d, (a31 * b05 - a32 * b04 + a33 * b03) * d, (a22 * b04 - a21 * b05 - a23 * b03) * d,
    (a12 * b08 - a10 * b11 - a13 * b07) * d, (a00 * b11 - a02 * b08 + a03 * b07) * d, (a32 * b02 - a30 * b05 - a33 * b01) * d, (a20 * b05 - a22 * b02 + a23 * b01) * d,
    (a10 * b10 - a11 * b08 + a13 * b06) * d, (a01 * b08 - a00 * b10 - a03 * b06) * d, (a30 * b04 - a31 * b02 + a33 * b00) * d, (a21 * b02 - a20 * b04 - a23 * b00) * d,
    (a11 * b07 - a10 * b09 - a12 * b06) * d, (a00 * b09 - a01 * b07 + a02 * b06) * d, (a31 * b01 - a30 * b03 - a32 * b00) * d, (a20 * b03 - a21 * b01 + a22 * b00) * d,
  ];
}
export const point = (m, p) => [m[0] * p[0] + m[4] * p[1] + m[8] * p[2] + m[12], m[1] * p[0] + m[5] * p[1] + m[9] * p[2] + m[13], m[2] * p[0] + m[6] * p[1] + m[10] * p[2] + m[14]];
export const IDENT = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

/** A bone's rest frame → mesh (see the header). */
export function boneRest(b) {
  const y = norm(sub(b.tail, b.head));
  const up = Math.abs(y[2]) < 0.999 ? [0, 0, 1] : [0, 1, 0];
  let z = norm(sub(up, y.map((v) => v * dot(up, y))));
  let x = cross(y, z);
  if (b.roll) {
    // turn X and Z about Y
    const r = (b.roll * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r);
    const x2 = [x[0] * c - z[0] * s, x[1] * c - z[1] * s, x[2] * c - z[2] * s], z2 = [x[0] * s + z[0] * c, x[1] * s + z[1] * c, x[2] * s + z[2] * c];
    x = x2; z = z2;
  }
  return [x[0], x[1], x[2], 0, y[0], y[1], y[2], 0, z[0], z[1], z[2], 0, b.head[0], b.head[1], b.head[2], 1];
}
export function order(rig) {
  const by = new Map(rig.bones.map((b) => [b.id, b])), out = [], seen = new Set();
  const visit = (b, depth = 0) => {
    if (seen.has(b.id) || depth > 256) return;
    if (b.parent && by.has(b.parent)) visit(by.get(b.parent), depth + 1);
    seen.add(b.id); out.push(b);
  };
  for (const b of rig.bones) visit(b);
  return out;
}
export function restMatrices(rig) { return new Map(rig.bones.map((b) => [b.id, boneRest(b)])); }

const REST_POSE = { location: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] };
export function poseMatrices(rig, poseOf = () => REST_POSE) {
  const rest = restMatrices(rig), world = new Map(), skin = new Map();
  for (const b of order(rig)) {
    const p = poseOf(b.id) || REST_POSE;
    const local = compose({ t: p.location || [0, 0, 0], q: eulerToQuat(p.rotation || [0, 0, 0]), s: p.scale || [1, 1, 1] });
    const R = rest.get(b.id);
    let W;
    if (b.parent && world.has(b.parent)) W = mul(mul(world.get(b.parent), mul(inv(rest.get(b.parent)), R)), local);
    else W = mul(R, local);
    world.set(b.id, W);
    skin.set(b.id, mul(W, inv(R)));
  }
  return { world, skin, rest };
}
export function skinMatrixArray(rig, skin) {
  const out = new Float64Array(16 * rig.bones.length);
  rig.bones.forEach((b, i) => out.set(skin.get(b.id) || IDENT, i * 16));
  return out;
}
export function bonePoints(rig, world) {
  return rig.bones.map((b) => {
    const W = world.get(b.id), L = Math.hypot(...sub(b.tail, b.head));
    return { id: b.id, head: point(W, [0, 0, 0]), tail: point(W, [0, L, 0]) };
  });
}

// ---- weights → the strongest bones per vertex ----
const packCache = new WeakMap();   // mesh → {key, packed}
export function packWeights(mesh, rig, max = 4) {
  const key = mesh.v + ':' + mesh.live + ':' + mesh.nv + ':' + rig.bones.map((b) => b.id + (b.deform === false ? '!' : '')).join(',');
  const c = packCache.get(mesh);
  if (c && c.key === key && c.max === max) return c.packed;
  const n = mesh.nv, joints = new Int32Array(n * max).fill(-1), weights = new Float32Array(n * max);
  const layers = rig.bones.map((b, i) => (b.deform === false ? null : [i, mesh.attrArray('weight.' + b.id)])).filter((x) => x && x[1]);
  const bi = new Int32Array(max), bw = new Float32Array(max);
  for (let v = 0; v < n; v++) {
    let k = 0;
    bi.fill(-1); bw.fill(0);
    for (const [i, A] of layers) {
      const w = A[v];
      if (!(w > 0)) continue;
      // keep the `max` largest (insertion into a short sorted list)
      if (k < max) { bi[k] = i; bw[k] = w; k++; }
      else if (w > bw[max - 1]) { bi[max - 1] = i; bw[max - 1] = w; }
      else continue;
      for (let q = Math.min(k, max) - 1; q > 0 && bw[q] > bw[q - 1]; q--) { const tw = bw[q]; bw[q] = bw[q - 1]; bw[q - 1] = tw; const ti = bi[q]; bi[q] = bi[q - 1]; bi[q - 1] = ti; }
    }
    let s = 0;
    for (let q = 0; q < max; q++) s += bw[q];
    if (s > 0) for (let q = 0; q < max; q++) { joints[v * max + q] = bi[q]; weights[v * max + q] = bw[q] / s; }
  }
  const packed = { joints, weights, n, max };
  packCache.set(mesh, { key, max, packed });
  return packed;
}

/** The skin: every vertex with weights moves by its bones' matrices, blended linearly ('lbs') or as dual quaternions ('dqs'). */
export function skinPoints(mesh, packed, M, mode, P) {
  const { joints, weights, max } = packed, n = Math.min(packed.n, mesh.nv);
  if (mode === 'dqs') return skinDQS(n, joints, weights, max, M, P);
  for (let v = 0; v < n; v++) {
    const j0 = joints[v * max];
    if (j0 < 0) continue;   // no weights: stays at rest
    const x = P[v * 3], y = P[v * 3 + 1], z = P[v * 3 + 2];
    let ox = 0, oy = 0, oz = 0;
    for (let q = 0; q < max; q++) {
      const j = joints[v * max + q];
      if (j < 0) break;
      const w = weights[v * max + q], o = j * 16;
      ox += w * (M[o] * x + M[o + 4] * y + M[o + 8] * z + M[o + 12]);
      oy += w * (M[o + 1] * x + M[o + 5] * y + M[o + 9] * z + M[o + 13]);
      oz += w * (M[o + 2] * x + M[o + 6] * y + M[o + 10] * z + M[o + 14]);
    }
    P[v * 3] = ox; P[v * 3 + 1] = oy; P[v * 3 + 2] = oz;
  }
  return P;
}
/** Each bone's skin matrix as a unit dual quaternion [qx, qy, qz, qw, dx, dy, dz, dw] (its turn and move; its size is left out). */
export function dualQuats(M, nb) {
  const out = new Float64Array(nb * 8);
  for (let b = 0; b < nb; b++) {
    const m = Array.from(M.subarray(b * 16, b * 16 + 16)), d = decompose(m), q = d.q, t = d.t;
    // dual part = ½ · (t, 0) · q
    const dx = 0.5 * (t[0] * q[3] + t[1] * q[2] - t[2] * q[1]), dy = 0.5 * (-t[0] * q[2] + t[1] * q[3] + t[2] * q[0]);
    const dz = 0.5 * (t[0] * q[1] - t[1] * q[0] + t[2] * q[3]), dw = -0.5 * (t[0] * q[0] + t[1] * q[1] + t[2] * q[2]);
    out.set([q[0], q[1], q[2], q[3], dx, dy, dz, dw], b * 8);
  }
  return out;
}
function skinDQS(n, joints, weights, max, M, P) {
  const nb = M.length / 16, DQ = dualQuats(M, nb);
  for (let v = 0; v < n; v++) {
    const j0 = joints[v * max];
    if (j0 < 0) continue;
    let r0 = 0, r1 = 0, r2 = 0, r3 = 0, d0 = 0, d1 = 0, d2 = 0, d3 = 0;
    const a = j0 * 8;
    for (let q = 0; q < max; q++) {
      const j = joints[v * max + q];
      if (j < 0) break;
      let w = weights[v * max + q];
      const o = j * 8;
      // the short way round: blend each turn on the same side as the first
      if (DQ[o] * DQ[a] + DQ[o + 1] * DQ[a + 1] + DQ[o + 2] * DQ[a + 2] + DQ[o + 3] * DQ[a + 3] < 0) w = -w;
      r0 += w * DQ[o]; r1 += w * DQ[o + 1]; r2 += w * DQ[o + 2]; r3 += w * DQ[o + 3];
      d0 += w * DQ[o + 4]; d1 += w * DQ[o + 5]; d2 += w * DQ[o + 6]; d3 += w * DQ[o + 7];
    }
    const l = Math.hypot(r0, r1, r2, r3) || 1;
    r0 /= l; r1 /= l; r2 /= l; r3 /= l; d0 /= l; d1 /= l; d2 /= l; d3 /= l;
    // translation = 2 · d · conj(r)
    const tx = 2 * (-d3 * r0 + d0 * r3 - d1 * r2 + d2 * r1), ty = 2 * (-d3 * r1 + d1 * r3 - d2 * r0 + d0 * r2), tz = 2 * (-d3 * r2 + d2 * r3 - d0 * r1 + d1 * r0);
    const x = P[v * 3], y = P[v * 3 + 1], z = P[v * 3 + 2];
    // rotate (x, y, z) by r: v + 2 r × (r × v + w v)
    const cx = r1 * z - r2 * y + r3 * x, cy = r2 * x - r0 * z + r3 * y, cz = r0 * y - r1 * x + r3 * z;
    P[v * 3] = x + 2 * (r1 * cz - r2 * cy) + tx;
    P[v * 3 + 1] = y + 2 * (r2 * cx - r0 * cz) + ty;
    P[v * 3 + 2] = z + 2 * (r0 * cy - r1 * cx) + tz;
  }
  return P;
}
