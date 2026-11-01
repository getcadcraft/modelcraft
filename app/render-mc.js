/* SPDX-License-Identifier: Apache-2.0 */
/**
 * render-mc.js — ModelCraft's adapter for the shared renderer (0.5 RC.11; render/render-core.js). ModelCraft's own file:
 * it turns what the view shows into the renderer's plain scene. DOM-free apart from three.js geometry objects.
 *
 *   mcScene(model, cam, style, settings) → scene (see render-core.js) + dispose()
 *   mcColors(model) → [{key: '#rrggbb' | 'default', faces}]   the colours on screen, most used first (the dialog's looks;
 *                                                               library materials are left out: they carry their own look)
 *   mcSun(style, settings) → [x, y, z] | null                    the sun for this render: the model's place and date
 *                                                               (Style › sun), with the render's own date/time if set
 *   mcScene(…, {anim}) adds frameAt(t) → {camera(aspect), matrices}   (0.6 LC.10) the animation at t seconds: its camera
 *                                                               (else the view's) and every item's world matrix with the
 *                                                               moving placements at their poses (render/anim.js; 0.7
 *                                                               AN.1: matrix keys, transform curves and clips alike).
 *                                                               0.7 AN.4 (session `anim`, owner's grant 2026-10-23): a mesh
 *                                                               with shape keys gets its points at t — the page's deformer
 *                                                               (anim/deform.js) is set to the frame's values and the item's
 *                                                               geometry rewritten in place; dispose() puts the values back
 *
 * Z is up, meters, north +Y. One geometry per (definition, placement paint, colour) is built for this render only (the
 * view's own cache stays as it is) and placed by every placement's world matrix; hidden faces, placements and tags are
 * left out as on screen; the active section cut clips the render too.
 *
 * Meshes (0.7, session `materials` under the owner's grant 2026-10-23): a mesh definition renders `def.rendered` (its modifiers
 * with their render settings: Subdivision's render levels, render-only modifiers — MD.3's ask), with the mesh's corner normals
 * and, where a face wears a material, its `uv` layer × the material's tile size (RENDER-SPEC § 6.6: one UV unit = one tile).
 * A node material with a displacement input moves a mesh's vertices along their normals by its baked height × the output's
 * displacement scale (MT.1); push/pull faces are not displaced. Decals (MT.6, decals-mc.js) are items of their own on their placement,
 * wearing their material.
 */
import * as THREE from 'three';
import { faceTris, faceNormal, faceArea, smoothNormals, isMaterialPaint, isImagePaint, imageId, imageUV } from './model.js';
import { Camera } from './camera.js';
import { sunPosition } from './sun.js';
import { invert, dot, mmul, IDENT } from './vec.js';
import { colorKey } from './render/looks.js';
import { material, planarUV } from './render/materials.js';
import { MAPPING } from './render/pt-spec.js';
import { cameraAt, propsAt } from './render/anim.js';
import { deformerOf, modelReadVar, animateDeformer } from './anim/deform.js';
import { objectPoses, rigCtx } from './anim/cns-model.js';
import { decalItems } from './decals-mc.js';

export const DEFAULT_FACE = '#e6e3dc';   // unpainted faces in a render: a warm light grey, whatever the page theme

/** A face's look: its own paint, else its placement's — a colour '#rrggbb', a library material 'mat:<id>' (0.5 RC.7) or 'default'. */
function keyOf(f, paint) {
  const p = f.color || paint;
  if (isMaterialPaint(p)) return material(p.slice(4)) ? p : 'default';
  if (isImagePaint(p)) return 'img:' + imageId(p);   // an imported texture (0.5 RC.11 (b))
  return colorKey(p) || 'default';
}

/** A material's tile size in metres (node materials: their output's; library: the texture's), [1, 1] otherwise. */
function tileOf(key) {
  const m = key.startsWith('mat:') ? material(key.slice(4)) : null;
  if (!m) return [1, 1];
  if (m.node) { const s = m.size; return Array.isArray(s) ? s : [1, 1]; }
  return (m.tex && m.tex.size) || [1, 1];
}
/** A node material's displacement: {h (Float32 size²), size, scale, mapping, tile} | null. */
function displacementOf(key) {
  const m = key.startsWith('mat:') ? material(key.slice(4)) : null;
  if (!m || !m.node) return null;
  const b = m.bake(512);
  if (!b.height || !(b.displacementScale > 0)) return null;
  return { h: b.height, n: 512, scale: b.displacementScale, mapping: b.mapping, tile: b.size };
}
function heightAt(D, u, v) {   // bilinear, wrapping, texel centres (as the kernels read layers)
  const fx = (u - Math.floor(u)) * D.n - 0.5, fy = (v - Math.floor(v)) * D.n - 0.5, x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0;
  let s = 0;
  for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) s += (i ? tx : 1 - tx) * (j ? ty : 1 - ty) * D.h[(((y0 + j) % D.n + D.n) % D.n) * D.n + (((x0 + i) % D.n + D.n) % D.n)];
  return s;
}

/** A mesh definition (0.7): def.rendered → [{look, geometry}] per paint, plus its sharp and open edges. */
function buildMeshDef(def, paint) {
  const R = def.rendered, T = R.triangulate(), N = R.cornerNormals(), P = R.P, hV = R.hV, uvA = R.attrArray('uv');
  const by = new Map(), fn = [0, 0, 0];
  // per-vertex normals (corner normals averaged) for displacement, so a vertex shared by faces moves once
  let vn = null;
  const disp = new Map();
  for (let i = 0; i < T.n; i++) {
    const f = T.face[i], fp = R.facePaint(f) || paint, k = isMaterialPaint(fp) ? (material(fp.slice(4)) ? fp : 'default') : isImagePaint(fp) ? 'img:' + imageId(fp) : colorKey(fp) || 'default';
    let b = by.get(k);
    if (!b) {
      b = { pos: [], nor: [], uv: k.startsWith('mat:') || k.startsWith('img:') ? [] : null, tile: tileOf(k), own: k.startsWith('img:') ? fp : null };
      if (!disp.has(k)) disp.set(k, displacementOf(k));
      by.set(k, b);
    }
    R.faceNormal(f, fn);
    const D = disp.get(k);
    if (D && !vn) {
      vn = new Float64Array(R.nv * 3);
      for (let h = 0; h < R.nh; h++) { if (R.hF[h] < 0) continue; const v = hV[h] * 3; vn[v] += N[h * 3]; vn[v + 1] += N[h * 3 + 1]; vn[v + 2] += N[h * 3 + 2]; }
    }
    for (let q = 0; q < 3; q++) {
      const h = T.tri[i * 3 + q], v = hV[h] * 3;
      let p = [P[v], P[v + 1], P[v + 2]];
      let w = null;
      if (b.uv) w = uvA ? [uvA[h * 2] * (b.own ? 1 : b.tile[0]), uvA[h * 2 + 1] * (b.own ? 1 : b.tile[1])] : b.own ? imageUV(b.own, p) : planarUV(p, fn);
      if (D) {
        const l = Math.hypot(vn[v], vn[v + 1], vn[v + 2]) || 1, n = [vn[v] / l, vn[v + 1] / l, vn[v + 2] / l];
        let tu, tv;
        if (D.mapping === MAPPING.UV) { tu = w[0] / D.tile[0]; tv = w[1] / D.tile[1]; }
        else {
          // box: the vertex normal's main axis (Z is up, RENDER-SPEC § 6.6)
          const ax = Math.abs(n[1]) > Math.abs(n[0]) ? (Math.abs(n[2]) > Math.abs(n[1]) ? 2 : 1) : Math.abs(n[2]) > Math.abs(n[0]) ? 2 : 0;
          const [iu, iv] = ax === 2 ? [0, 1] : [3 - ax - 2, 2];
          tu = p[iu] / D.tile[0]; tv = p[iv] / D.tile[1];
        }
        const d = heightAt(D, tu, tv) * D.scale;
        p = [p[0] + n[0] * d, p[1] + n[1] * d, p[2] + n[2] * d];
      }
      b.pos.push(p[0], p[1], p[2]); b.nor.push(N[h * 3], N[h * 3 + 1], N[h * 3 + 2]);
      if (b.uv) b.uv.push(w[0], w[1]);
    }
  }
  const meshes = [];
  for (const [look, b] of by) {
    if (!b.pos.length) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(b.nor, 3));
    if (b.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(b.uv, 2));
    meshes.push({ look, geometry: g });
  }
  const ep = [];
  for (const e of def.edges.values()) {
    if (e.soft || e.hidden) continue;
    const a = def.verts.get(e.a), c = def.verts.get(e.b);
    ep.push(a[0], a[1], a[2], c[0], c[1], c[2]);
  }
  let edges = null;
  if (ep.length) { edges = new THREE.BufferGeometry(); edges.setAttribute('position', new THREE.Float32BufferAttribute(ep, 3)); }
  return { meshes, edges };
}

/** One definition, one placement paint → [{look, geometry}] per colour, plus its edges. */
function buildDef(def, paint) {
  if (def.mesh) return buildMeshDef(def, paint);
  const by = new Map();
  const smooth = smoothNormals(def);
  for (const [fid, f] of def.faces) {
    if (f.hidden) continue;
    const n = faceNormal(def, f), k = keyOf(f, paint);
    let b = by.get(k);
    if (!b) { b = { pos: [], nor: [], uv: k.startsWith('mat:') || k.startsWith('img:') ? [] : null }; by.set(k, b); }
    const own = k.startsWith('img:') ? (f.color || paint) : null;   // the image's placement rides in the paint
    for (const tri of faceTris(def, f)) for (const v of tri) {
      const p = def.verts.get(v), q = smooth.get(fid + '|' + v) || n;
      b.pos.push(p[0], p[1], p[2]); b.nor.push(q[0], q[1], q[2]);
      if (b.uv) { const w = own ? imageUV(own, p) : planarUV(p, n); b.uv.push(w[0], w[1]); }   // image: its own placement; material: metres along the face
    }
  }
  const meshes = [];
  for (const [look, b] of by) {
    if (!b.pos.length) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(b.nor, 3));
    if (b.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(b.uv, 2));
    meshes.push({ look, geometry: g });
  }
  const ep = [];
  for (const e of def.edges.values()) {
    if (e.soft || e.hidden) continue;
    const a = def.verts.get(e.a), c = def.verts.get(e.b);
    ep.push(a[0], a[1], a[2], c[0], c[1], c[2]);
  }
  let edges = null;
  if (ep.length) { edges = new THREE.BufferGeometry(); edges.setAttribute('position', new THREE.Float32BufferAttribute(ep, 3)); }
  return { meshes, edges };
}

export function mcSun(style, settings) {
  const base = (style && style.sun) || { month: 6, day: 21, hour: 15, lat: 40, lon: -105, tz: -7 };
  const s = sunPosition(settings && settings.sun ? { ...base, ...settings.sun } : base);
  return s.up ? s.dir : null;
}

export function mcColors(model) {
  const n = new Map();
  model.walkShown((def, m, path, paint) => {
    for (const f of def.faces.values()) if (!f.hidden) { const k = keyOf(f, paint); if (!k.startsWith('mat:') && !k.startsWith('img:')) n.set(k, (n.get(k) || 0) + 1); }   // materials and textures bring their own look
  });
  return [...n].sort((a, b) => b[1] - a[1]).map(([key, faces]) => ({ key, faces }));
}

/**
 * The colours of the flat, upward-facing faces on screen (floors, paving, flat roofs, the ground) with their area in m², largest
 * first, as the looks table keys them (0.8 EG.61: rain makes these shine). Library materials and pictures carry their own look and are left out.
 */
export function mcFlatColors(model, { minArea = 1 } = {}) {
  const n = new Map();
  model.walkShown((def, m, path, paint) => {
    if (path.length && /^Scene /.test(model.root.insts.get(path[0])?.tag || '')) return false;   // the scene's own trees and people are not ground
    for (const f of def.faces.values()) {
      if (f.hidden) continue;
      const nn = faceNormal(def, f);
      const nz = m[2] * nn[0] + m[6] * nn[1] + m[10] * nn[2];   // the normal's z after the placement (rotation and uniform scale)
      const len = Math.hypot(m[2] * nn[0] + m[6] * nn[1] + m[10] * nn[2], m[0] * nn[0] + m[4] * nn[1] + m[8] * nn[2], m[1] * nn[0] + m[5] * nn[1] + m[9] * nn[2]) || 1;
      if (nz / len < 0.98) continue;
      const k = keyOf(f, paint);
      if (k.startsWith('mat:') || k.startsWith('img:')) continue;
      const s = Math.cbrt(Math.abs(m[0] * (m[5] * m[10] - m[6] * m[9])));   // a uniform scale, enough for an area
      const a = faceArea(def, f) * s * s;
      n.set(k, (n.get(k) || 0) + a);
    }
  });
  return [...n].filter(([, a]) => a >= minArea).sort((a, b) => b[1] - a[1]).map(([key, area]) => ({ key, area: Math.round(area * 100) / 100 }));
}

/** walkShown with some placements at other matrices (0.6 LC.10): poses = Map('id/id/…' → the placement's own matrix). */
function walkPosed(model, poses, cb) {
  const off = model.hiddenTags();
  const go = (def, m, path, color, depth) => {
    if (depth > 32) return;
    cb(def, m, path, color);
    for (const [iid, inst] of def.insts) {
      if (inst.hidden || (inst.tag && off.has(inst.tag))) continue;
      const d = model.defs.get(inst.def);
      if (!d) continue;
      const p = [...path, iid];
      go(d, mmul(m, (poses && poses.get(p.join('/'))) || inst.m), p, inst.color || color, depth + 1);
    }
  };
  go(model.root, IDENT, [], null, 0);
}

/** A camera spec for the renderer from a saved camera (the view's own state, or an animation's). */
function camSpec(state, radius, aspect) {
  const c = new Camera();
  c.set(state);
  c.setSize(1000 * aspect, 1000);
  c.clip(radius);
  return { world: invert(c.view()), proj: c.proj() };
}

export function mcScene(model, cam, style, settings, { anim = null } = {}) {
  const built = new Map(), geos = [];
  const items = [], visitOf = [], defOf = [];
  let visit = 0;
  walkPosed(model, anim ? new Map(objectPoses(model, anim, 0, propsAt(anim, 0, null, modelReadVar(model))).map((p) => [p.key, p.m])) : null, (def, m, path, paint) => {
    const k = def.id + '|' + (paint || '');
    let b = built.get(k);
    if (!b) {
      b = buildDef(def, paint);
      built.set(k, b);
      for (const x of b.meshes) geos.push(x.geometry);
      if (b.edges) geos.push(b.edges);
    }
    for (const x of b.meshes) { items.push({ geometry: x.geometry, matrix: m, look: x.look }); visitOf.push(visit); defOf.push(def.id); }
    if (b.edges) { items.push({ geometry: b.edges, matrix: m, lines: true }); visitOf.push(visit); defOf.push(def.id); }
    for (const x of decalItems(model, def, path, m)) { geos.push(x.geometry); items.push(x); visitOf.push(visit); defOf.push(null); }
    visit++;
  });
  const bb = model.bbox();
  const cut = model.activeCut ? model.activeCut() : null;
  const state = cam.toJSON();
  // AN.4: meshes whose shape keys change over the animation, rebuilt per frame into their own geometry objects
  const deformed = anim ? new Set([...(anim.shapes || []).map((sh) => sh.def), ...(anim.rigs || []).filter((r) => r.bones.length).map((r) => r.def)]) : new Set();
  const deformer = deformed.size ? deformerOf(model) : null, keep = deformer ? deformer.snapshot() : null;
  const readVar = modelReadVar(model);
  function shapesAt(t) {
    const vals = propsAt(anim, t, null, readVar);
    animateDeformer(deformer, anim, vals, (rg) => rigCtx(model, anim, rg, vals));
    for (const [k, b] of built) {
      const def = model.defs.get(k.slice(0, k.indexOf('|')));
      if (!def || !def.mesh || !deformed.has(def.id)) continue;
      const nb = buildMeshDef(def, k.slice(k.indexOf('|') + 1) || null);
      // the same mesh, other points: the same triangles in the same order, so copy into the geometry the renderer holds
      nb.meshes.forEach((x, j) => {
        const g = b.meshes[j]?.geometry;
        if (g && b.meshes[j].look === x.look && g.attributes.position.count === x.geometry.attributes.position.count) {
          g.attributes.position.array.set(x.geometry.attributes.position.array); g.attributes.position.needsUpdate = true;
          g.attributes.normal.array.set(x.geometry.attributes.normal.array); g.attributes.normal.needsUpdate = true;
          g.computeBoundingSphere();
        }
        x.geometry.dispose();
      });
      nb.edges?.dispose();
    }
  }
  return {
    items,
    defaultColor: DEFAULT_FACE,
    up: [0, 0, 1],
    bounds: bb,
    groundAt: bb ? Math.min(0, bb.min[2]) : 0,   // ModelCraft's ground is z = 0
    camera(aspect) { return camSpec(state, cam.sceneRadius, aspect); },
    /** The animation at t seconds (0.6 LC.10). */
    frameAt(t) {
      const c = anim && cameraAt(anim, t);
      const out = { camera: (aspect) => camSpec(c || state, cam.sceneRadius, aspect) };
      const poses = anim ? objectPoses(model, anim, t, propsAt(anim, t, null, readVar)) : [];   // AN.3: constraints too
      if (poses.length) {
        const ms = [];
        walkPosed(model, new Map(poses.map((p) => [p.key, p.m])), (def, m) => { ms.push(m); });
        out.matrices = visitOf.map((v) => ms[v] || null);
      }
      if (deformer) {
        shapesAt(t);
        // its items change from frame to frame: say so (the render queue packs such frames one by one)
        out.matrices = out.matrices || items.map(() => null);
        items.forEach((it, i) => { if (deformed.has(defOf[i]) && !out.matrices[i]) out.matrices[i] = it.matrix || IDENT; });
      }
      return out;
    },
    sun: mcSun(style, settings),
    clip: cut ? [{ n: cut.n, d: dot(cut.n, cut.p) }] : [],
    images: Object.fromEntries([...model.images].map(([id, im]) => [id, { mime: im.mime, data: im.data }])),
    lights: [...model.lights.values()].filter((L) => L.on).map((L) => ({ ...L, p: L.p.slice(), dir: L.dir.slice(), size: L.size.slice() })),   // RC.11 (d), world = Z up
    dispose() {
      for (const g of geos) g.dispose();
      if (deformer) { deformer.restore(keep); }   // as before the render
    },
  };
}
