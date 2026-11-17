/* SPDX-License-Identifier: Apache-2.0 */
/**
 * gltf-import.js — a scene from gltf-read.js into ModelCraft (0.7 XF.1, session `interchange`). DOM-free.
 *
 *   importGltfScene(model, scene, name) → { def, report }   — call inside model.change(); `def` is a group, NOT placed
 *
 * - **Axes:** glTF is Y up, ModelCraft Z up: points go through C (x, y, z) → (x, −z, y) and node matrices become C·M·C⁻¹, so
 *   every definition is in Z-up coordinates and placements stay as the file has them.
 * - **Meshes** become mesh definitions (0.7 MD.1, docs/apps/modelcraft-mesh.md): one per glTF mesh, every primitive's
 *   triangles in one Mesh, vertices welded where they sit at the same point, the file's per-corner data kept as layers —
 *   NORMAL → `normal` (edges where the normals break are marked sharp; without NORMAL, edges between faces that bend more
 *   than half a degree), TEXCOORD_0 → `uv`, TEXCOORD_n → `uv.n` (v turned to run up, as ModelCraft's uv does), COLOR_0 →
 *   `color` (linear RGBA), JOINTS_0 / WEIGHTS_0 → `joints` / `weights` (vertex, 4; joint numbers are the skin's own
 *   order). A mesh several nodes use is one definition placed several times; EXT_mesh_gpu_instancing places it once
 *   per instance. Points and lines are counted, not imported (a mesh holds faces).
 * - **Nodes** become groups (a node with only a mesh is the mesh's placement, named after the node).
 * - **Materials:** each primitive's material becomes the faces' paint — its base colour texture as an imported image
 *   (`img:` paint; the `uv` layer carries that texture's coordinates with KHR_texture_transform applied), else its base
 *   colour. The rest of the material (metal/roughness, normal maps, transmission, clearcoat, sheen, …) is read and listed in
 *   report.materials but not kept on the model yet: ModelCraft's material model arrives with RN.2 (OpenPBR).
 * - **Skins:** the mesh comes in posed as the file rests (joints' world matrices × inverse bind matrices, then the
 *   weights), placed at the scene's origin as glTF asks; bones and animations are counted until Animate (AN.2) has them.
 *   Morph targets: the default weights are applied; the targets themselves are counted (shape keys are AN.4).
 * - **Lights** (KHR_lights_punctual): point and spot lamps become ModelCraft lamps (candela × 4π = lumens; a spot's
 *   angle = 2 × its outer cone); directional lights are counted (ModelCraft's sun lights the model). **Cameras** become
 *   scenes (perspective: vertical field of view; orthographic: the view's height).
 */
import { mmul, apply, applyDir, ident, norm, cross, sub, len } from '../vec.js';
import { Mesh, FL_SHARP } from '../mesh.js';
import { cleanScene, imagePaint, toBase64 } from '../model.js';
import { trs } from './gltf-read.js';
import { gltfToOpenPBR } from './pbr.js';
import { t } from '../i18n.js';

/** Y up → Z up, and back. */
const C = [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1];
const CI = [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1];
const conj = (m) => mmul(C, mmul(m, CI));
const linToSrgb = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);
export const linearToHex = (rgb) => '#' + rgb.slice(0, 3).map((c) => Math.round(Math.min(1, Math.max(0, linToSrgb(c))) * 255).toString(16).padStart(2, '0')).join('');
const cleanName = (s, d) => String(s || d || 'Import').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 120) || d || 'Import';
const MAX_DEPTH = 64;

export function importGltfScene(model, scene, name) {
  const report = {
    meshes: 0, faces: 0, vertices: 0, triangles: 0, components: 0, groups: 0, lights: 0, cameras: 0, textures: 0,
    skins: scene.skins.length, animations: scene.animations.length, morphs: 0, instances: 0, materials: [], skipped: {},
    generator: scene.asset.generator,
  };
  const skip = (k, n = 1) => { if (n) report.skipped[k] = (report.skipped[k] || 0) + n; };
  for (const [k, n] of Object.entries(scene.notes || {})) skip(k, n);

  // ---- paints, one per material
  const imageIds = new Map();
  const imageId = (ii, avg) => {
    if (imageIds.has(ii)) return imageIds.get(ii);
    const im = scene.images[ii];
    let id = null;
    if (im && model.addImage) {
      try { id = model.addImage({ name: im.name, mime: im.mime, data: toBase64(im.bytes), avg }); report.textures++; } catch { id = null; }
    }
    imageIds.set(ii, id);
    return id;
  };
  const paintOf = scene.materials.map((m) => {
    const white = m.baseColor.slice(0, 3).every((v) => Math.abs(v - 1) < 1e-6);
    const hex = linearToHex(m.baseColor);
    const tx = m.baseColorTex ? scene.textures[m.baseColorTex.texture] : null;
    const img = tx && tx.image !== null ? imageId(tx.image, white ? null : hex) : null;
    report.materials.push({ ...summary(m), openpbr: gltfToOpenPBR(m) });   // RN.2's parameters, for `materials` to store
    if (m.baseColorTex && img === null) skip(t('gltf.note.texture_colour'));
    return img ? imagePaint(img, [1, 0, 0, 0], [0, 1, 0, 0], white ? null : hex) : hex;
  });

  // ---- world matrices (glTF space) of every node in the scene, for skins, lights and cameras
  const world = new Array(scene.nodes.length).fill(null);
  const roots = scene.scenes[scene.scene]?.nodes ?? [];
  const walkWorld = (ni, pm, depth) => {
    if (depth > MAX_DEPTH) return;
    const n = scene.nodes[ni];
    world[ni] = mmul(pm, n.matrix);
    for (const c of n.children) walkWorld(c, world[ni], depth + 1);
  };
  for (const r of roots) walkWorld(r, ident(), 0);

  // ---- meshes: one definition per glTF mesh (per mesh + skin + morph weights for skinned or morphed ones)
  const meshDefs = new Map();
  const uses = new Map();
  const meshDefFor = (ni) => {
    const n = scene.nodes[ni];
    const gm = scene.meshes[n.mesh];
    const weights = n.weights ?? gm.weights;
    const morphed = weights.some((w) => w) && gm.primitives.some((p) => p.targets.length);
    const skin = n.skin !== null && gm.primitives.some((p) => p.joints.length) ? scene.skins[n.skin] : null;
    const key = n.mesh + (skin ? '|s' + n.skin : '') + (morphed ? '|w' + weights.join(',') : '');
    if (meshDefs.has(key)) return meshDefs.get(key);
    const mesh = buildMesh(gm, { paintOf, materials: scene.materials, weights: morphed ? weights : null, skin: skin ? { skin, world } : null, skip, report });
    const def = mesh ? model.newMeshDef(mesh, cleanName(gm.name, t('gltf.mesh'))) : null;
    if (def) { report.meshes++; report.faces += mesh.faceCount; report.vertices += mesh.vertexCount; }
    meshDefs.set(key, def);
    return def;
  };
  const place = (parent, def, m, nm) => {
    const iid = model.place(parent, def.id, m);
    if (nm) parent.insts.get(iid).name = cleanName(nm);
    uses.set(def.id, (uses.get(def.id) || 0) + 1);
    return iid;
  };

  const top = model.newDef('group', cleanName(name, 'glTF import'));
  let nodesSeen = 0;
  const build = (ni, parent, depth) => {
    if (depth > MAX_DEPTH || ++nodesSeen > 200000) return;
    const n = scene.nodes[ni];
    const local = conj(n.matrix);
    const md = n.mesh !== null ? meshDefFor(ni) : null;
    const skinned = md && n.skin !== null && scene.meshes[n.mesh].primitives.some((p) => p.joints.length);
    if (n.camera !== null) addCamera(model, scene, ni, world, report, skip);
    if (n.light !== null) addLight(model, scene, ni, world, report, skip);
    if (skinned) place(top, md, ident(), n.name);   // glTF: a skinned mesh's own node transform is not used
    const plain = md && !skinned;
    const kids = n.children;
    if (plain && !kids.length && !n.instances) { place(parent, md, local, n.name); return; }
    if (!kids.length && !n.instances && !plain) return;   // an empty node (a joint, a camera, a light): nothing to hold
    const g = model.newDef('group', cleanName(n.name, t('gltf.node', { n: ni })));
    report.groups++;
    model.place(parent, g.id, local);
    if (plain && n.instances) {
      const I = n.instances;
      for (let k = 0; k < I.count; k++) {
        const T = I.t ? [I.t[k * 3], I.t[k * 3 + 1], I.t[k * 3 + 2]] : [0, 0, 0];
        const R = I.r ? [I.r[k * 4], I.r[k * 4 + 1], I.r[k * 4 + 2], I.r[k * 4 + 3]] : [0, 0, 0, 1];
        const S = I.s ? [I.s[k * 3], I.s[k * 3 + 1], I.s[k * 3 + 2]] : [1, 1, 1];
        place(g, md, conj(trs(T, R, S)), null);
        report.instances++;
      }
    } else if (plain) place(g, md, ident(), null);
    for (const c of kids) build(c, g, depth + 1);
  };
  for (const r of roots) build(r, top, 0);
  for (const [, n] of uses) if (n > 1) report.components++;
  report.triangles = report.faces;
  return { def: top, report };
}

/** What a material was (report.materials: for tests and the log, never shown as is). */
// i18n-ignore-start
function summary(m) {
  const parts = [];
  if (m.metallic > 0.01) parts.push('metal ' + m.metallic.toFixed(2));
  parts.push('rough ' + m.roughness.toFixed(2));
  if (m.transmission) parts.push('transmission');
  if (m.volume) parts.push('volume');
  if (m.clearcoat) parts.push('clearcoat');
  if (m.sheen) parts.push('sheen');
  if (m.specular) parts.push('specular');
  if (m.iridescence) parts.push('iridescence');
  if (m.anisotropy) parts.push('anisotropy');
  if (m.emissive.some((v) => v > 0)) parts.push('emissive');
  if (m.normalTex) parts.push('normal map');
  if (m.alphaMode !== 'OPAQUE') parts.push(m.alphaMode.toLowerCase());
  if (m.unlit) parts.push('unlit');
  const extra = parts.length > 1 || m.roughness < 0.99;   // more than a base colour: kept for the renderer's material model (RN.2)
  return { name: m.name, kept: m.baseColorTex ? 'texture' : 'colour', also: parts, extra };
}
// i18n-ignore-end

// ---------------------------------------------------------------------------------------------------- one mesh

function buildMesh(gm, { paintOf, materials, weights, skin, skip, report }) {
  // corners of every triangle, primitive by primitive (vertex numbers local to the primitive)
  const prims = [];
  let corners = 0;
  for (const p of gm.primitives) {
    if (p.mode < 4) { skip(p.mode === 0 ? t('gltf.note.points') : t('gltf.note.lines')); continue; }
    const ix = p.indices ?? Uint32Array.from({ length: p.count }, (_, i) => i);
    let tri;
    if (p.mode === 4) tri = ix.length - (ix.length % 3) === ix.length ? ix : ix.subarray(0, ix.length - (ix.length % 3));
    else {
      const out = [];
      if (p.mode === 5) for (let i = 0; i + 2 < ix.length; i++) out.push(...(i % 2 ? [ix[i + 1], ix[i], ix[i + 2]] : [ix[i], ix[i + 1], ix[i + 2]]));
      else for (let i = 1; i + 1 < ix.length; i++) out.push(ix[0], ix[i], ix[i + 1]);
      tri = Uint32Array.from(out);
    }
    if (p.targets.length) report.morphs += p.targets.length;
    const { P, N } = posed(p, weights, skin);
    const mat = p.material !== null ? materials[p.material] : null;
    prims.push({ p, tri, pos: P, nrm: N, texRef: mat ? mat.baseColorTex : null });
    corners += tri.length;
  }
  if (!corners) return null;

  // weld: one mesh vertex per distinct point (and skin data, when there is any). Without skin data the points go through a
  // hash table of numbers (0.10 PERF.7: a string key per vertex was 0.25 to 0.5 s at 500k faces); same rule as the string
  // key it replaces: equal coordinates weld, 0 and −0 count as one, as does every NaN.
  const skinned = prims.some((pr) => pr.p.joints[0]);
  const keyOf = skinned ? new Map() : null;
  const table = skinned ? null : new Int32Array(tableSize(corners)).fill(-1);
  const vp = [];
  const vSrc = [];   // [prim index, vertex] that made each mesh vertex
  const cornerV = new Int32Array(corners);
  const cornerSrc = new Int32Array(corners * 2);
  let c = 0;
  prims.forEach((pr, pi) => {
    const P = pr.pos;
    const J = pr.p.joints[0];
    const W = pr.p.weights[0];
    const ids = new Int32Array(pr.p.count).fill(-1);
    for (const i of pr.tri) {
      if (ids[i] < 0) {
        const x = P[i * 3]; const y = P[i * 3 + 1]; const z = P[i * 3 + 2];
        let v;
        if (table) {
          const mask = table.length - 1;
          let at = hash3(x, y, z) & mask;
          for (;;) {
            const w = table[at];
            if (w < 0) { v = vp.length / 3; table[at] = v; vp.push(x, -z, y); vSrc.push(pi, i); break; }
            if (sameKey(vp[w * 3], x) && sameKey(vp[w * 3 + 2], y) && sameKey(-vp[w * 3 + 1], z)) { v = w; break; }
            at = (at + 1) & mask;
          }
        } else {
          let k = x + ',' + y + ',' + z;
          if (J) k += '|' + J[i * 4] + ',' + J[i * 4 + 1] + ',' + J[i * 4 + 2] + ',' + J[i * 4 + 3] + '|' + W[i * 4] + ',' + W[i * 4 + 1] + ',' + W[i * 4 + 2] + ',' + W[i * 4 + 3];
          v = keyOf.get(k);
          if (v === undefined) { v = vp.length / 3; keyOf.set(k, v); vp.push(x, -z, y); vSrc.push(pi, i); }
        }
        ids[i] = v;
      }
      cornerV[c] = ids[i];
      cornerSrc[c * 2] = pi;
      cornerSrc[c * 2 + 1] = i;
      c++;
    }
  });
  // drop triangles with a repeated vertex or no area
  const nv = vp.length / 3;
  const keepTri = new Uint8Array(corners / 3);
  let nf = 0;
  for (let f = 0; f < corners / 3; f++) {
    const a = cornerV[f * 3]; const b = cornerV[f * 3 + 1]; const d = cornerV[f * 3 + 2];
    if (a === b || b === d || a === d) continue;
    const A = [vp[a * 3], vp[a * 3 + 1], vp[a * 3 + 2]];
    const n = cross(sub([vp[b * 3], vp[b * 3 + 1], vp[b * 3 + 2]], A), sub([vp[d * 3], vp[d * 3 + 1], vp[d * 3 + 2]], A));
    if (!(len(n) > 1e-18)) continue;
    keepTri[f] = 1;
    nf++;
  }
  const lost = corners / 3 - nf;
  if (lost) skip(t('gltf.note.degenerate'), lost);
  if (!nf) return null;
  const fc = new Int32Array(nf).fill(3);
  const fi = new Int32Array(nf * 3);
  const keptCorner = new Int32Array(nf * 3);   // index into the corner arrays above
  for (let f = 0, o = 0; f < corners / 3; f++) {
    if (!keepTri[f]) continue;
    for (let k = 0; k < 3; k++) { fi[o] = cornerV[f * 3 + k]; keptCorner[o] = f * 3 + k; o++; }
  }
  const mesh = new Mesh();
  const { faceOf, cornerOf, vertFrom, dropped } = mesh._bulk(Float64Array.from(vp), nv, fc, fi);
  if (dropped) skip(t('gltf.note.degenerate'), dropped);
  const vOrig = (v) => (v < nv ? v : vertFrom[v - nv]);   // split fans copy a vertex: its data come from the original

  // paints, per face from its primitive's material
  for (let f = 0; f < nf; f++) {
    const mf = faceOf[f];
    if (mf < 0) continue;
    const pr = prims[cornerSrc[keptCorner[f * 3] * 2]].p;
    const paint = pr.material !== null ? paintOf[pr.material] : null;
    if (paint) mesh.fMat[mf] = mesh.paintIndex(paint);
  }
  // corner layers. A fresh mesh outside any model has no journal, so the arrays are written directly.
  const anyOf = (f) => prims.some((pr) => f(pr.p));
  const layer = (name, domain, size, type = 'f32') => { mesh.addAttr(name, domain, size, type); return mesh.attrArray(name); };
  const N = anyOf((p) => p.normals) ? layer('normal', 'corner', 3) : null;
  const uvCount = Math.max(0, ...prims.map((pr) => pr.p.uvs.length));
  const UV = uvCount ? layer('uv', 'corner', 2) : null;
  const UVn = [];
  for (let k = 1; k < uvCount; k++) UVn.push(layer('uv.' + k, 'corner', 2));
  const COL = anyOf((p) => p.colors.length) ? layer('color', 'corner', 4) : null;
  for (let o = 0; o < nf * 3; o++) {
    const h = cornerOf[o];
    if (h < 0) continue;
    const kc = keptCorner[o];
    const pr = prims[cornerSrc[kc * 2]];
    const i = cornerSrc[kc * 2 + 1];
    const p = pr.p;
    if (N && pr.nrm) { N[h * 3] = pr.nrm[i * 3]; N[h * 3 + 1] = pr.nrm[i * 3 + 1]; N[h * 3 + 2] = pr.nrm[i * 3 + 2]; }
    if (UV) {
      // 'uv' = the coordinates the material's base colour texture reads (its texCoord, its transform), else TEXCOORD_0
      const ref = p.material !== null ? pr.texRef : null;
      const set = p.uvs[ref ? ref.texCoord : 0];
      if (set) {
        let u = set[i * 2]; let v = set[i * 2 + 1];
        if (ref && ref.transform) [u, v] = uvTransform(ref.transform, u, v);
        UV[h * 2] = u; UV[h * 2 + 1] = 1 - v;
      }
    }
    for (let k = 1; k < uvCount; k++) { const set = p.uvs[k]; if (set) { UVn[k - 1][h * 2] = set[i * 2]; UVn[k - 1][h * 2 + 1] = 1 - set[i * 2 + 1]; } }
    if (COL) { const s = p.colors[0]; if (s) for (let k = 0; k < 4; k++) COL[h * 4 + k] = s[i * 4 + k]; else for (let k = 0; k < 4; k++) COL[h * 4 + k] = 1; }
  }
  if (anyOf((p) => p.joints.length)) {
    const JA = layer('joints', 'vertex', 4, 'i32');
    const WA = layer('weights', 'vertex', 4);
    for (let v = 0; v < mesh.nv; v++) {
      const o = vOrig(v);
      const pr = prims[vSrc[o * 2]].p;
      const i = vSrc[o * 2 + 1];
      if (!pr.joints[0]) continue;
      for (let k = 0; k < 4; k++) { JA[v * 4 + k] = pr.joints[0][i * 4 + k]; WA[v * 4 + k] = pr.weights[0][i * 4 + k]; }
    }
  }
  // sharp edges: where the file's normals break across an edge (or, with no normals, where faces bend)
  const hTw = mesh.hTw; const hNx = mesh.hNx; const hFl = mesh.hFl; const hF = mesh.hF;
  const fnorm = new Float64Array(mesh.nf * 3);
  for (let f = 0; f < mesh.nf; f++) { const n = mesh.faceNormal(f); fnorm[f * 3] = n[0]; fnorm[f * 3 + 1] = n[1]; fnorm[f * 3 + 2] = n[2]; }
  const has = (a) => N && (N[a * 3] !== 0 || N[a * 3 + 1] !== 0 || N[a * 3 + 2] !== 0);
  const same = (a, b) => N[a * 3] * N[b * 3] + N[a * 3 + 1] * N[b * 3 + 1] + N[a * 3 + 2] * N[b * 3 + 2] > 0.9995;
  for (let h = 0; h < mesh.nh; h++) {
    const g = hTw[h];
    if (g < 0 || g < h) continue;
    let sharp;
    const fa = hF[h]; const fb = hF[g];
    // h starts at vertex a in one face; the twin's next starts at a in the other (and the same for b)
    if (has(h) && has(g) && has(hNx[h]) && has(hNx[g])) sharp = !same(h, hNx[g]) || !same(hNx[h], g);
    else sharp = fnorm[fa * 3] * fnorm[fb * 3] + fnorm[fa * 3 + 1] * fnorm[fb * 3 + 1] + fnorm[fa * 3 + 2] * fnorm[fb * 3 + 2] < 0.99996;
    if (sharp) { hFl[h] |= FL_SHARP; hFl[g] |= FL_SHARP; }
  }
  return mesh;
}

/** The weld's hash table: a power of two at least twice the corners (every corner may be its own point). */
const tableSize = (n) => { let s = 16; while (s < n * 2) s *= 2; return s; };
const F64 = new Float64Array(1), U32 = new Uint32Array(F64.buffer);
/** One number's bits, with 0 = −0 and one NaN (as String(x) would make them, the key the weld used before). */
function bits(x) { F64[0] = x === 0 ? 0 : x !== x ? NaN : x; return Math.imul(U32[0] ^ Math.imul(U32[1], 0x9e3779b1), 0x85ebca6b); }
const hash3 = (x, y, z) => (Math.imul(bits(x) ^ Math.imul(bits(y), 0xc2b2ae35), 0x27d4eb2f) ^ bits(z)) >>> 0;
/** Equal as the old string key saw them: === (so 0 and −0 too), and NaN with NaN. */
const sameKey = (a, b) => a === b || (a !== a && b !== b);

/** KHR_texture_transform: offset · rotation · scale, applied to [u, v]. */
function uvTransform({ offset, rotation, scale }, u, v) {
  const su = u * scale[0];
  const sv = v * scale[1];
  const c = Math.cos(rotation);
  const s = Math.sin(rotation);
  return [c * su + s * sv + offset[0], -s * su + c * sv + offset[1]];
}

/** A primitive's positions (and normals) as the scene shows them: morph weights, then the skin; in glTF space. */
function posed(p, weights, skin) {
  let P = p.positions;
  let Nm = p.normals;
  if (weights && p.targets.length) {
    P = P.slice();
    Nm = Nm ? Nm.slice() : null;
    p.targets.forEach((tg, k) => {
      const w = weights[k] || 0;
      if (!w) return;
      if (tg.positions) for (let i = 0; i < P.length; i++) P[i] += w * tg.positions[i];
      if (tg.normals && Nm) for (let i = 0; i < Nm.length; i++) Nm[i] += w * tg.normals[i];
    });
  }
  if (skin && p.joints.length) {
    const { skin: s, world } = skin;
    const mats = s.joints.map((j, k) => {
      const ibm = s.ibm ? Array.from(s.ibm.subarray(k * 16, k * 16 + 16)) : ident();
      return mmul(world[j] ?? ident(), ibm);
    });
    const J = p.joints[0]; const W = p.weights[0];
    const out = new Float32Array(P.length);
    const outN = Nm ? new Float32Array(Nm.length) : null;
    for (let i = 0; i < P.length / 3; i++) {
      let x = 0; let y = 0; let z = 0; let nx = 0; let ny = 0; let nz = 0; let ws = 0;
      for (let k = 0; k < 4; k++) {
        const w = W[i * 4 + k];
        const m = mats[J[i * 4 + k]];
        if (!w || !m) continue;
        const q = apply(m, [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]]);
        x += w * q[0]; y += w * q[1]; z += w * q[2]; ws += w;
        if (Nm) { const d = applyDir(m, [Nm[i * 3], Nm[i * 3 + 1], Nm[i * 3 + 2]]); nx += w * d[0]; ny += w * d[1]; nz += w * d[2]; }
      }
      if (ws > 1e-9) { out[i * 3] = x / ws; out[i * 3 + 1] = y / ws; out[i * 3 + 2] = z / ws; } else { out[i * 3] = P[i * 3]; out[i * 3 + 1] = P[i * 3 + 1]; out[i * 3 + 2] = P[i * 3 + 2]; }
      if (outN) { const l = Math.hypot(nx, ny, nz) || 1; outN[i * 3] = nx / l; outN[i * 3 + 1] = ny / l; outN[i * 3 + 2] = nz / l; }
    }
    P = out;
    Nm = outN ?? Nm;
  }
  // normals into Z up, unit length (the mesh layer is the source of shading)
  let N = null;
  if (Nm) {
    N = new Float32Array(Nm.length);
    for (let i = 0; i < Nm.length / 3; i++) {
      const x = Nm[i * 3]; const y = Nm[i * 3 + 1]; const z = Nm[i * 3 + 2];
      const l = Math.hypot(x, y, z) || 1;
      N[i * 3] = x / l; N[i * 3 + 1] = -z / l; N[i * 3 + 2] = y / l;
    }
  }
  return { P, N };
}

// ---------------------------------------------------------------------------------------------------- lamps, cameras

function worldOf(world, ni) { return conj(world[ni] ?? ident()); }

function addLight(model, scene, ni, world, report, skip) {
  const L = scene.lights[scene.nodes[ni].light];
  if (L.type === 'directional') { skip(t('gltf.note.directional')); return; }
  if (!model.addLight) return;
  const m = worldOf(world, ni);
  const p = apply(m, [0, 0, 0]);
  const d = norm(applyDir(m, applyDir(C, [0, 0, -1])));   // the light shines along its own −Z
  model.addLight({
    kind: L.type === 'spot' ? 'spot' : 'point', p, dir: len(d) ? d : [0, 0, -1], color: linearToHex(L.color),
    lumens: L.intensity * 4 * Math.PI, angle: L.type === 'spot' ? (2 * L.outer * 180) / Math.PI : 60, name: L.name,
  });
  report.lights++;
}

function addCamera(model, scene, ni, world, report) {
  const cam = scene.cameras[scene.nodes[ni].camera];
  if (!Array.isArray(model.scenes)) return;
  const m = worldOf(world, ni);
  const eye = apply(m, [0, 0, 0]);
  const fwd = norm(applyDir(m, applyDir(C, [0, 0, -1])));
  if (!len(fwd)) return;
  const dist = 10;
  const target = [eye[0] + fwd[0] * dist, eye[1] + fwd[1] * dist, eye[2] + fwd[2] * dist];
  const s = cleanScene({
    name: cam.name, cam: cam.type === 'orthographic'
      ? { eye, target, fov: 35, persp: false, height: 2 * Math.abs(cam.ymag) || 10 }
      : { eye, target, fov: (cam.yfov * 180) / Math.PI, persp: true },
  });
  if (s) { model.scenes.push(s); report.cameras++; }
}

