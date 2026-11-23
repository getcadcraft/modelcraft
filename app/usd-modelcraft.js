/* SPDX-License-Identifier: Apache-2.0 */
/**
 * usd-modelcraft.js — ModelCraft ↔ OpenUSD (0.7 XF.9 + XF.2, session `usd`; conventions docs/USD-CONVENTIONS.md § 9).
 * DOM-free. The library is cc-usd (./usd/, a copy of lib/usd written by tools/usd/sync.mjs).
 *
 *   saveUsd(file, model, { format: 'usda' | 'usdc' | 'usdz', name, appVersion }) → { data: string | Uint8Array (| Blob: a .usda past 300 M characters), report }
 *        `file` = the .modelcraft file's JSON (what Save writes: model.toJSON() + view, images, render, anim, issues)
 *   openUsd(bytes, { name, read }) → { file, report }          the .modelcraft JSON again: open it as a .modelcraft is opened
 *   importUsd(model, bytes, name, { read }) → { def, report }    any USD scene into the open model (call inside change())
 *
 * **Nothing lost (XF.9):** every definition is written natively (a push/pull definition as a Mesh of its faces — holes
 * triangulated so other programs draw them — and its loose edges as BasisCurves; an MD.1 mesh with its corner normals, UV
 * sets and colours as primvars), placements as Xforms (a definition placed more than once, or a component, as a prototype
 * under the `/Prototypes` class with instanceable references), paints as materials (OpenPBR + UsdPreviewSurface), lamps as
 * UsdLux lights and scenes as cameras. What USD has no word for goes in `cadcraft:` attributes on the prim it belongs to:
 * `cadcraft:def` (the definition's exact JSON: vertex ids and double-precision points, edges with soft / hidden / curve
 * flags, faces as loops with holes, splines, placements) and `cadcraft:model` on /World (the rest of the file: guides,
 * dimensions, sections, tags, storeys, scenes' styles, images, view, animation, issues). Positions are written twice for
 * that reason: as floats for every viewer, as doubles for the exact round trip.
 * **Opening our own file:** the `cadcraft:` data are used where the native geometry still matches them; a definition whose
 * points another program changed opens from its native mesh (said in the report), a placement moved elsewhere keeps the new
 * place, one deleted elsewhere is gone.
 * **Any other USD file** opens (or imports) as groups, MD.1 meshes (UVs, normals, colours, per-face materials as paints),
 * shared prototypes as components, lamps and cameras — in metres, Z up, whatever the file's units and up axis.
 */
import { UsdBuilder, openStage, sceneOf, sniffUsd, hexToLinear, linearToHex, mul, invert, valueAt, localMatrix, UsdError, writeUsdaTo } from './usd/index.js';
import { TextChunks } from './chunks.js';   // 0.11 PERF.26 (lib/textout)
import { writeM3d } from './usd/m3d.js';
import { Model, faceTris, edgeFaces, cleanScene, isColor, isMaterialPaint, isImagePaint } from './model.js';
import { Mesh } from './mesh.js';
import { material as libMaterial } from './render/materials.js';
import { t } from './i18n.js';
import { unit3 as norm3 } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const fromB64 = (s) => { const bin = atob(s); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; };

// ====================================================================== save

export function saveUsd(file, model, { format = 'usda', name = '', appVersion = '' } = {}) {
  const b = new UsdBuilder({ app: 'ModelCraft', appVersion, source: name, doc: t('usd.doc', { name: name || 'model' }) });
  const report = { objects: 0, defs: 0, prototypes: 0, notes: [] };
  const L = b.layer;
  const S = (p, n, v) => b.attr(p, n, 'string', v, { custom: true, uniform: true });
  // the rest of the file, beside the definitions (their order kept: defs → ids)
  S(b.root, 'cadcraft:model', JSON.stringify({ ...file, defs: file.defs.map((d) => d.id) }));
  S(b.root, 'cadcraft:id', 'root');

  const defJ = new Map(file.defs.map((d) => [d.id, d]));
  // how often each definition is placed: a group placed once is written in place; anything else is a prototype
  const uses = new Map();
  for (const d of file.defs) for (const i of d.insts || []) uses.set(i.def, (uses.get(i.def) || 0) + 1);
  const isProto = (id) => (uses.get(id) || 0) > 1 || defJ.get(id)?.kind === 'component';

  // materials: one per paint
  const images = new Map((file.images || []).map((im) => [im.id, im]));
  const textures = [];
  const matOf = (paint) => {
    if (!paint) return null;
    if (isColor(paint)) return b.colorMaterial(paint);
    if (isMaterialPaint(paint)) {
      const m = libMaterial(paint.slice(4));
      const p = { base_color: hexToLinear(m ? m.color : '#b4b4b4'), specular_roughness: m ? m.rough : 0.6, base_metalness: m ? m.metal || 0 : 0 };
      if (m && m.glass) Object.assign(p, { transmission_weight: m.glass, specular_roughness: 0.02, geometry_thin_walled: true });
      return b.material('mat_' + paint.slice(4).replace(/-/g, '_'), p, { displayName: paint.slice(4) });
    }
    if (isImagePaint(paint)) {
      const id = paint.slice(4, paint.indexOf('|'));
      const avg = /#[0-9a-f]{6}$/i.exec(paint);
      const im = images.get(id);
      const key = 'img_' + id + (avg ? '_' + avg[0].slice(1) : '');
      let tex = null;
      if (format === 'usdz' && im) {
        const ext = im.mime === 'image/jpeg' ? 'jpg' : im.mime === 'image/webp' ? 'png' : 'png';
        const fn = 'textures/' + id + '.' + ext;
        if (!textures.some((x) => x.name === fn) && im.mime !== 'image/webp') textures.push({ name: fn, bytes: fromB64(im.data) });
        if (im.mime !== 'image/webp') tex = { file: fn };
      }
      return b.material(key, { base_color: hexToLinear(avg ? avg[0] : im?.avg || '#b4b4b4'), specular_roughness: 0.7 }, { texture: tex, displayName: im?.name || id });
    }
    return null;
  };

  const r = writeM3d(b, model, {
    faceTris, edgeFaces, matOf, proto: isProto, allDefs: true,   // nothing lost: unplaced definitions too
    onDef: (p, id) => { if (defJ.has(id)) S(p, 'cadcraft:def', JSON.stringify(defJ.get(id))); },
    onInst: (p, inst, iid) => S(p, 'cadcraft:id', 'i' + iid),
    onGeometry: (g, id) => S(g, 'cadcraft:geometry', id),
  });
  Object.assign(report, r);

  // lamps and scenes, natively (their exact values are in cadcraft:model)
  if (file.lights && file.lights.length) {
    const lp = b.group(b.root, 'Lights', { type: 'Scope' });
    for (const lt of file.lights) S(b.lamp(lp, lt.name || 'Lamp', lt), 'cadcraft:id', 'l' + lt.id);
  }
  if (file.scenes && file.scenes.length) {
    const cp = b.group(b.root, 'Cameras', { type: 'Scope' });
    file.scenes.forEach((s, k) => S(b.camera(cp, s.name || 'Scene', s.cam), 'cadcraft:id', 's' + k));
  }
  // 0.11 PERF.26: .usda written a prim at a time into a TextChunks: the same string as b.write('usda') up to 300 M characters, a Blob past it
  const data = format === 'usdz' ? b.usdz(textures) : format === 'usda' ? writeUsdaTo(b.layer, new TextChunks('\n')).finish().output('model/vnd.usda') : b.write(format);
  return { data, report };
}

// ====================================================================== open

/** Read bytes (and the files they name) into a composed stage. */
function stageOf(bytes, { name = 'model.usd', read = null } = {}) {
  const kind = sniffUsd(bytes);
  if (!kind) throw new UsdError('not_usd', t('ccusd.not_usd'));
  const files = new Map([[name, bytes]]);
  return openStage(name, { read: (n) => files.get(n) || (read ? read(n) : null) });
}

export function openUsd(bytes, opts = {}) {
  const stage = stageOf(bytes, opts);
  const world = stage.prim('/' + (stage.meta.defaultPrim || 'World')) || stage.root.children[0];
  const own = world && strAttr(world, 'cadcraft:model');
  const report = { foreign: !own, edited: 0, moved: 0, removed: 0, notes: stage.notes.slice() };
  if (!own) {
    // someone else's scene: a new model with it imported
    const m = new Model();
    m.change('USD', () => {
      const r = importScene(m, sceneOf(stage), opts.name || 'USD');
      m.place(m.defs.get('root'), r.def.id, IDENT.slice());
      Object.assign(report, r.report, { foreign: true });
    });
    m.units = 'm';
    const file = m.toJSON();
    const imgs = m.imagesJSON();
    if (imgs.length) file.images = imgs;
    return { file, report };
  }
  let file;
  try { file = JSON.parse(own); } catch { throw new UsdError('damaged', t('ccusd.damaged', { reason: 'cadcraft:model' })); }
  if (!file || typeof file !== 'object' || !Array.isArray(file.defs)) throw new UsdError('damaged', t('ccusd.damaged', { reason: 'cadcraft:model' }));
  // every definition, once (a prototype shows up under each of its instances)
  const defs = new Map();
  const defPrims = new Map();
  const walk = (prim) => {
    const dj = strAttr(prim, 'cadcraft:def');
    if (dj) {
      let d = null;
      try { d = JSON.parse(dj); } catch { d = null; }
      if (d && typeof d.id === 'string' && !defs.has(d.id)) { defs.set(d.id, d); defPrims.set(d.id, prim); }
    }
    for (const c of prim.children) walk(c);
  };
  for (const c of stage.root.children) walk(c);
  let nextFree = Number.isInteger(file.nextId) ? file.nextId : 1;
  for (const id of defs.keys()) if (/^d\d+$/.test(id)) nextFree = Math.max(nextFree, +id.slice(1) + 1);
  const extra = [];
  for (const [id, dj] of defs) {
    const prim = defPrims.get(id);
    // geometry another program changed → read from the native mesh
    const g = prim.children.find((c) => strAttr(c, 'cadcraft:geometry') === id);
    if (g && geometryChanged(g, dj)) {
      const mesh = meshFromPrim(g);
      if (mesh) {
        report.edited++;
        if (dj.kind === 'mesh') dj.mesh = mesh.toJSON();
        else {
          const mid = 'd' + nextFree++;
          extra.push({ id: mid, kind: 'mesh', name: (dj.name || 'Mesh') + ' (USD)', next: 1, verts: [], edges: [], faces: [], insts: [], mesh: mesh.toJSON() });
          dj.verts = []; dj.edges = []; dj.faces = []; delete dj.splines;
          let iid = Number.isInteger(dj.next) ? dj.next : 1;
          for (const i of dj.insts || []) iid = Math.max(iid, (i.id | 0) + 1);
          dj.insts = [...(dj.insts || []), { id: iid, def: mid, m: IDENT.slice() }];
          dj.next = iid + 1;
        }
      }
    }
    // placements: moved or deleted elsewhere
    const seen = new Map();
    for (const c of prim.children) {
      const cid = strAttr(c, 'cadcraft:id');
      if (cid && /^i\d+$/.test(cid)) seen.set(+cid.slice(1), c);
    }
    if (Array.isArray(dj.insts)) {
      const before = dj.insts.length;
      dj.insts = dj.insts.filter((i) => seen.has(i.id) || i.def.startsWith('d') && extra.some((x) => x.id === i.def));
      report.removed += before - dj.insts.length;
      for (const i of dj.insts) {
        const c = seen.get(i.id);
        if (!c) continue;
        const m = localMatrix(c).m;
        if (!Array.isArray(i.m) || m.some((x, k) => Math.abs(x - i.m[k]) > 1e-7 * Math.max(1, Math.abs(i.m[k])))) { i.m = m; report.moved++; }
        const hidden = valueAt(c.props.get('visibility'))?.v === 'invisible';
        if (hidden !== !!i.hidden) { if (hidden) i.hidden = true; else delete i.hidden; }
      }
    }
  }
  const order = file.defs.filter((id) => defs.has(id));
  for (const id of defs.keys()) if (!order.includes(id)) order.push(id);
  file.defs = [...order.map((id) => defs.get(id)), ...extra];
  if (extra.length) file.nextId = Math.max(file.nextId || 1, nextFree);
  if (report.edited) report.notes.push(t('usd.note.edited', { n: report.edited }));
  return { file, report };
}
const strAttr = (prim, n) => { const v = valueAt(prim.props.get(n)); return v && typeof v.v === 'string' ? v.v : null; };

/** The native points no longer the definition's own (as floats)? */
function geometryChanged(g, dj) {
  const pv = valueAt(g.props.get('points'));
  if (!pv) return true;
  const pts = pv.v;
  let mine;
  if (dj.kind === 'mesh' && dj.mesh) {
    try { mine = Mesh.fromJSON(dj.mesh).toArrays().p; } catch { return true; }
  } else {
    mine = [];
    for (const v of dj.verts || []) mine.push(v[1], v[2], v[3]);
  }
  if (mine.length !== pts.length) return true;
  for (let i = 0; i < pts.length; i++) if (Math.fround(mine[i]) !== pts[i]) return true;
  return false;
}
function meshFromPrim(g) {
  const pv = valueAt(g.props.get('points')), c = valueAt(g.props.get('faceVertexCounts')), x = valueAt(g.props.get('faceVertexIndices'));
  if (!pv || !c || !x) return null;
  const p = pv.v, n = p.length / 3;
  for (const k of x.v) if (k < 0 || k >= n) return null;
  let s = 0;
  for (const k of c.v) s += k;
  if (s !== x.v.length) return null;
  const m = new Mesh();
  m._bulk(Float64Array.from(p), n, Int32Array.from(c.v), Int32Array.from(x.v));
  return m;
}

// ====================================================================== import any USD scene

export function importUsd(model, bytes, name, opts = {}) {
  const stage = stageOf(bytes, { ...opts, name: opts.fileName || name || 'import.usd' });
  return importScene(model, sceneOf(stage), name);
}

/**
 * A plain scene (lib/usd scene.js) into the model, inside the caller's change(): → { def (an unplaced group), report }.
 * Geometry is taken into metres, Z up: points through the stage's frame F, placements as F·M·F⁻¹.
 */
export function importScene(model, scene, name) {
  const F = scene.frame, FI = invert(F);
  const conj = (m) => mul(F, mul(m, FI));
  const report = { meshes: 0, faces: 0, groups: 0, components: 0, materials: scene.materials.size, lights: 0, cameras: 0, notes: scene.notes.slice() };
  const paintOf = new Map();
  const paint = (path) => {
    if (!path) return null;
    if (paintOf.has(path)) return paintOf.get(path);
    const m = scene.materials.get(path);
    const bc = m && Array.isArray(m.openpbr.base_color) ? m.openpbr.base_color : [0.8, 0.8, 0.8];
    const hex = linearToHex(bc);
    paintOf.set(path, hex);
    return hex;
  };
  const meshDef = (node) => {
    const mesh = buildMesh(node.mesh, F, paint);
    if (!mesh) return null;
    report.meshes++; report.faces += mesh.faceCount ?? 0;
    return model.newMeshDef(mesh, clean(node.displayName) || t('m3d.mesh.name'));
  };
  const protoDefs = new Map();
  const protoDef = (key) => {
    if (protoDefs.has(key)) return protoDefs.get(key);
    const proto = scene.protos.get(key);
    const d = model.newDef('component', clean(proto?.displayName) || 'Component');
    protoDefs.set(key, d);
    report.components++;
    if (proto) fill(d, proto, true);
    return d;
  };
  const fill = (def, node, isProto) => {
    if (node.mesh) { const md = meshDef(node); if (md) model.place(def, md.id, IDENT.slice()); }
    for (const c of node.children) add(def, c);
    void isProto;
  };
  const add = (parent, node) => {
    const m = conj(node.matrix);
    if (node.proto) {
      const pd = protoDef(node.proto);
      const iid = model.place(parent, pd.id, m);
      setInst(parent, iid, node);
      return;
    }
    if (node.mesh && !node.children.length) {
      const md = meshDef(node);
      if (md) setInst(parent, model.place(parent, md.id, m), node);
      return;
    }
    if (!node.mesh && !node.children.length) return;
    const g = model.newDef('group', clean(node.displayName) || 'Group');
    report.groups++;
    setInst(parent, model.place(parent, g.id, m), node);
    fill(g, node, false);
  };
  const setInst = (parent, iid, node) => {
    const i = parent.insts.get(iid);
    if (!node.visible) i.hidden = true;
  };
  const top = model.newDef('group', clean(name) || 'USD');
  for (const c of scene.root.children) add(top, c);
  // lamps (lumens kept exactly when we wrote them) and cameras
  for (const lt of scene.lights) {
    if (!model.addLight || lt.kind === 'distant' || lt.kind === 'dome') continue;
    const W = lt.matrix;
    const p = [W[12], W[13], W[14]];
    const d = norm3([-W[8], -W[9], -W[10]]);
    const scale = Math.hypot(W[0], W[1], W[2]) || 1;
    const area = lt.kind === 'area' ? lt.width * lt.height * scale * scale : 4 * Math.PI * (lt.radius * scale) ** 2;
    const lumens = Number.isFinite(lt.data['cadcraft:lumens']) ? lt.data['cadcraft:lumens'] : lt.intensity * 2 ** lt.exposure * 683 * Math.max(area, 1e-6) * Math.PI;
    try {
      model.addLight({
        kind: lt.kind, p, dir: d, color: linearToHex(lt.color), lumens, angle: lt.kind === 'spot' ? lt.angle : 60,
        size: lt.kind === 'area' ? [lt.width * scale, lt.height * scale] : [Math.max(0.02, 2 * lt.radius * scale), Math.max(0.02, 2 * lt.radius * scale)],
        on: lt.on, name: lt.name,
      });
      report.lights++;
    } catch { /* a lamp the kernel refuses is left out */ }
  }
  for (const c of scene.cameras) {
    const W = c.matrix;
    const eye = [W[12], W[13], W[14]], fwd = norm3([-W[8], -W[9], -W[10]]);
    const s = cleanScene({ name: c.name, cam: { eye, target: [eye[0] + fwd[0] * 10, eye[1] + fwd[1] * 10, eye[2] + fwd[2] * 10], fov: c.fov, persp: c.persp, height: c.height } });
    if (s && Array.isArray(model.scenes)) { model.scenes.push(s); report.cameras++; }
  }
  return { def: top, report };
}

const clean = (s) => String(s || '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 120);   // eslint-disable-line no-control-regex

/** A scene mesh → an MD.1 Mesh in metres, Z up, with its layers and per-face paints. */
function buildMesh(src, F, paintOfPath) {
  const P = src.points, n = P.length / 3;
  const p = new Float64Array(P.length);
  for (let i = 0; i < n; i++) {
    const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
    p[i * 3] = F[0] * x + F[4] * y + F[8] * z + F[12];
    p[i * 3 + 1] = F[1] * x + F[5] * y + F[9] * z + F[13];
    p[i * 3 + 2] = F[2] * x + F[6] * y + F[10] * z + F[14];
  }
  const holes = new Set(src.holes || []);
  const fcIn = src.counts, fiIn = src.indices;
  const fc = [], fi = [], srcFace = [], srcCorner = [];
  let at = 0;
  for (let f = 0; f < fcIn.length; f++) {
    const c = fcIn[f];
    if (!holes.has(f) && c >= 3) {
      fc.push(c);
      srcFace.push(f);
      const idx = [];
      for (let k = 0; k < c; k++) idx.push(at + k);
      if (src.leftHanded) idx.reverse();
      for (const k of idx) { fi.push(fiIn[k]); srcCorner.push(k); }
    }
    at += c;
  }
  if (!fc.length) return null;
  const mesh = new Mesh();
  const { faceOf, cornerOf } = mesh._bulk(p, n, Int32Array.from(fc), Int32Array.from(fi));
  // paints per face
  const mats = src.materials || [];
  for (let f = 0; f < fc.length; f++) {
    const mf = faceOf[f];
    if (mf < 0) continue;
    const k = src.faceMaterials ? src.faceMaterials[srcFace[f]] : mats.length ? 0 : -1;
    const hex = k >= 0 ? paintOfPath(mats[k]) : null;
    if (hex) mesh.fMat[mf] = mesh.paintIndex(hex);
  }
  // corner layers from primvars (any interpolation, indexed or not)
  /** A primvar per mesh corner (any interpolation) into the layer `name` (size values each) — or, name null, a plain array. */
  const corner = (pv, size, outSize = size, fill = 0) => {
    const vals = pv.values, ix = pv.indices;
    const get = (e) => { const j = ix ? ix[e] : e; return j * size; };
    let A;
    if (pv._name) { mesh.addAttr(pv._name, 'corner', outSize); A = mesh.attrArray(pv._name); } else A = new Float32Array(mesh.nh * outSize);
    if (fill) A.fill(fill);
    let cornerIndex = 0;
    for (let f = 0; f < fc.length; f++) {
      for (let k = 0; k < fc[f]; k++, cornerIndex++) {
        const h = cornerOf[cornerIndex];
        if (h < 0) continue;
        const sc = srcCorner[cornerIndex];
        const e = pv.interp === 'faceVarying' ? sc : pv.interp === 'vertex' || pv.interp === 'varying' ? fiIn[sc] : pv.interp === 'uniform' ? srcFace[f] : 0;
        const o = get(e);
        if (o + size > vals.length || o < 0) continue;
        for (let s = 0; s < size; s++) A[h * outSize + s] = vals[o + s];
      }
    }
    return A;
  };
  const pv = src.primvars || new Map();
  let uvName = null;
  for (const [nm, v] of pv) if (v.n === 2 && /texCoord2|float2/.test(v.type) && (nm === 'st' || !uvName)) uvName = nm;
  if (uvName) corner({ ...pv.get(uvName), _name: 'uv' }, 2);
  const nrm = pv.get('normals');
  if (nrm && nrm.n === 3) {
    const A = corner({ ...nrm, _name: 'normal' }, 3);
    // normals turn with the frame (its rotation part; the uniform scale is normalised away)
    for (let i = 0; i < A.length; i += 3) {
      const x = A[i], y = A[i + 1], z = A[i + 2];
      const v = norm3([F[0] * x + F[4] * y + F[8] * z, F[1] * x + F[5] * y + F[9] * z, F[2] * x + F[6] * y + F[10] * z]);
      if (src.leftHanded) { A[i] = -v[0]; A[i + 1] = -v[1]; A[i + 2] = -v[2]; } else { A[i] = v[0]; A[i + 1] = v[1]; A[i + 2] = v[2]; }
    }
  }
  const col = pv.get('displayColor');
  if (col && col.n === 3 && col.interp !== 'constant' && col.interp !== 'uniform') {
    // RGB into the RGBA 'color' layer, opaque
    corner({ ...col, _name: 'color' }, 3, 4, 1);
  } else if (col && col.n === 3 && !mats.length) {
    // a constant or per-face display colour paints the faces
    for (let f = 0; f < fc.length; f++) {
      const mf = faceOf[f];
      if (mf < 0) continue;
      const e = col.interp === 'uniform' ? srcFace[f] : 0;
      const j = (col.indices ? col.indices[e] : e) * 3;
      if (j + 3 <= col.values.length) mesh.fMat[mf] = mesh.paintIndex(linearToHex([col.values[j], col.values[j + 1], col.values[j + 2]]));
    }
  }
  return mesh;
}
