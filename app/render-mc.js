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
 *                                                               moving placements at their poses (render/anim.js)
 *
 * Z is up, meters, north +Y. One geometry per (definition, placement paint, colour) is built for this render only (the
 * view's own cache stays as it is) and placed by every placement's world matrix; hidden faces, placements and tags are
 * left out as on screen; the active section cut clips the render too.
 */
import * as THREE from 'three';
import { faceTris, faceNormal, smoothNormals, isMaterialPaint, isImagePaint, imageId, imageUV } from './model.js';
import { Camera } from './camera.js';
import { sunPosition } from './sun.js';
import { invert, dot, mmul, IDENT } from './vec.js';
import { colorKey } from './render/looks.js';
import { material, planarUV } from './render/materials.js';
import { cameraAt, posesAt } from './render/anim.js';

export const DEFAULT_FACE = '#e6e3dc';   // unpainted faces in a render: a warm light grey, whatever the page theme

/** A face's look: its own paint, else its placement's — a colour '#rrggbb', a library material 'mat:<id>' (0.5 RC.7) or 'default'. */
function keyOf(f, paint) {
  const p = f.color || paint;
  if (isMaterialPaint(p)) return material(p.slice(4)) ? p : 'default';
  if (isImagePaint(p)) return 'img:' + imageId(p);   // an imported texture (0.5 RC.11 (b))
  return colorKey(p) || 'default';
}

/** One definition, one placement paint → [{look, geometry}] per colour, plus its edges. */
function buildDef(def, paint) {
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
  const items = [], visitOf = [];
  let visit = 0;
  walkPosed(model, anim ? new Map(posesAt(anim, 0).map((p) => [p.key, p.m])) : null, (def, m, path, paint) => {
    const k = def.id + '|' + (paint || '');
    let b = built.get(k);
    if (!b) {
      b = buildDef(def, paint);
      built.set(k, b);
      for (const x of b.meshes) geos.push(x.geometry);
      if (b.edges) geos.push(b.edges);
    }
    for (const x of b.meshes) { items.push({ geometry: x.geometry, matrix: m, look: x.look }); visitOf.push(visit); }
    if (b.edges) { items.push({ geometry: b.edges, matrix: m, lines: true }); visitOf.push(visit); }
    visit++;
  });
  const bb = model.bbox();
  const cut = model.activeCut ? model.activeCut() : null;
  const state = cam.toJSON();
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
      if (anim && anim.objects.length) {
        const ms = [];
        walkPosed(model, new Map(posesAt(anim, t).map((p) => [p.key, p.m])), (def, m) => { ms.push(m); });
        out.matrices = visitOf.map((v) => ms[v] || null);
      }
      return out;
    },
    sun: mcSun(style, settings),
    clip: cut ? [{ n: cut.n, d: dot(cut.n, cut.p) }] : [],
    images: Object.fromEntries([...model.images].map(([id, im]) => [id, { mime: im.mime, data: im.data }])),
    lights: [...model.lights.values()].filter((L) => L.on).map((L) => ({ ...L, p: L.p.slice(), dir: L.dir.slice(), size: L.size.slice() })),   // RC.11 (d), world = Z up
    dispose() { for (const g of geos) g.dispose(); },
  };
}
