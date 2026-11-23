/* SPDX-License-Identifier: Apache-2.0 */
/**
 * obj.js — Wavefront OBJ + MTL with textures, both ways (0.7 XF.3, session `interchange`), from the published OBJ / MTL
 * descriptions (Wavefront's "Object Files (.obj)" and "MTL Material Format" appendices). DOM-free. Supersedes io.js's OBJ
 * in the app (io.js keeps importOBJ / exportOBJ / exportMTL for the m3d copies).
 *
 *   const obj = await readObj(text, { resolve })      resolve: async (name) → Uint8Array | null (the .mtl files and the
 *                                                      textures, found among the files dropped with the .obj)
 *   importObj(model, obj, name) → { def, report }      inside model.change(); `def` is a group, not placed
 *   exportObj(model, { base }) → { obj, mtl | null, mtlName, images: [{ name, bytes }], report }   (base: file name without
 *                                extension; mtl null when nothing is painted — no materials file, as io.js did)
 *
 * - Axes: OBJ is read as metres with Y up, written the same way (x, y, z) ↔ (x, −z, y) — as io.js always did.
 * - Import: each `o` (else `g`) becomes a mesh definition (MD.1) placed in the group, faces kept as they are (n-gons),
 *   `vt` → the `uv` layer, `vn` → the `normal` layer, per-vertex colours (`v x y z r g b`) → the `color` layer. A material
 *   with `map_Kd` whose picture was given becomes an image paint placed by the `uv` layer (its -o / -s options applied),
 *   else its Kd colour (read as sRGB, as io.js's MTL writer writes it). Edges where the file's normals break are sharp;
 *   with no `vn`, edges between different smoothing groups (or `s off` faces) are sharp. Points and lines are counted.
 * - Export: world coordinates, one `o` per placement (as io.js), meshes as their own n-gons with `vt` (uv layer) and `vn`
 *   (corner normals); push/pull faces as before plus `vt` for image paints. MTL: one material per paint (Kd in sRGB), an
 *   imported texture as `map_Kd textures/<name>` with its picture in `images`; the caller zips them with the .obj.
 * Untrusted: every index checked, ≤ 2 M vertices / faces, ≤ 64 MB of text; GltfError-like errors as plain Error(t(…)).
 */
import { Mesh, FL_SHARP } from '../mesh.js';
import { faceTris, faceNormal, smoothNormals, paintHex, isImagePaint, isMaterialPaint, imageId, imageUV, imagePaint, toBase64 } from '../model.js';
import { apply, applyDir, det3, norm, len } from '../vec.js';
import { sniffImage } from './gltf-read.js';
import { tgaToPng } from './tga.js';
import { t } from '../i18n.js';
import { decodeParts, linesOf, isParts, lengthOf } from '../textin.js';   // 0.10 PERF.20: the text is read a line at a time, never as one string
import { TextChunks } from '../chunks.js';   // 0.11 PERF.26: the export is written in ~1 MB parts (lib/textout), never one array of lines + one join

const MAX = 2000000;
const MAX_TEXT = 64 * 1048576;
const cleanName = (s, d) => String(s || d || 'OBJ import').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 120) || d || 'OBJ import';   // i18n-ignore: a fallback for a file with no name
const fail = (why) => new Error(t('obj.bad', { why }));

// ------------------------------------------------------------------------------------------------- reading

/** MTL text → { name: material } */
export function readMtl(text, notes = {}) {
  const mats = {};
  let cur = null;
  const num = (x, d) => { const v = parseFloat(x); return Number.isFinite(v) ? v : d; };
  for (let line of String(text).split(/\r\n|\n|\r/)) {
    line = line.trim();
    if (!line || line[0] === '#') continue;
    const sp = line.search(/\s/);
    const key = (sp < 0 ? line : line.slice(0, sp)).toLowerCase();
    const rest = sp < 0 ? '' : line.slice(sp + 1).trim();
    if (key === 'newmtl') { cur = { name: rest.slice(0, 120), Kd: null, d: 1, Ks: null, Ns: null, Ke: null, map: null }; mats[cur.name] = cur; continue; }
    if (!cur) continue;
    const v = rest.split(/\s+/);
    if (key === 'kd') cur.Kd = [num(v[0], 0.8), num(v[1], num(v[0], 0.8)), num(v[2], num(v[0], 0.8))].map((x) => Math.min(1, Math.max(0, x)));
    else if (key === 'ks') cur.Ks = [num(v[0], 0), num(v[1], 0), num(v[2], 0)];
    else if (key === 'ke') cur.Ke = [num(v[0], 0), num(v[1], 0), num(v[2], 0)];
    else if (key === 'ns') cur.Ns = num(v[0], null);
    else if (key === 'd') cur.d = Math.min(1, Math.max(0, num(v[0], 1)));
    else if (key === 'tr') cur.d = 1 - Math.min(1, Math.max(0, num(v[0], 0)));
    else if (key === 'map_kd') cur.map = mapOption(rest);
    else if (/^(map_|bump|norm|disp|decal|refl)/.test(key)) notes[t('obj.note.maps')] = (notes[t('obj.note.maps')] || 0) + 1;
  }
  return mats;
}

/** "map_Kd -s 2 2 -o 0.5 0 bricks.png" → { file, scale [2], offset [2] } */
function mapOption(rest) {
  const tok = rest.split(/\s+/);
  const out = { file: '', scale: [1, 1], offset: [0, 0] };
  const takes = { '-blendu': 1, '-blendv': 1, '-cc': 1, '-clamp': 1, '-mm': 2, '-o': 3, '-s': 3, '-t': 3, '-texres': 1, '-bm': 1, '-boost': 1, '-imfchan': 1, '-type': 1 };
  let i = 0;
  while (i < tok.length && tok[i][0] === '-' && takes[tok[i].toLowerCase()] !== undefined) {
    const k = tok[i].toLowerCase();
    let n = takes[k];
    const vals = [];
    i++;
    while (n-- > 0 && i < tok.length && /^[-+]?(\d|\.\d)/.test(tok[i])) vals.push(parseFloat(tok[i++]));
    if (k === '-s' && vals.length >= 2) out.scale = [vals[0], vals[1]];
    if (k === '-o' && vals.length >= 2) out.offset = [vals[0], vals[1]];
  }
  out.file = tok.slice(i).join(' ');
  return out;
}

export async function readObj(input, { resolve = null } = {}) {
  // 0.10 PERF.7: a file's bytes are checked before they are decoded (a 177 MB OBJ took 1.1 s and 0.5 GB to be refused); OBJ is
  // ASCII, so bytes and characters are the same count
  if (typeof input !== 'string' && input.byteLength > MAX_TEXT) throw new Error(t('obj.too_big'));
  // 0.10 PERF.20: bytes are decoded in parts and read a line at a time; a string or the parts of a text are read the same way
  const textLen = typeof input === 'string' ? input.length : isParts(input) ? lengthOf(input) : 0;
  if (textLen > MAX_TEXT) throw new Error(t('obj.too_big'));
  const lines = linesOf(typeof input === 'string' || isParts(input) ? input : decodeParts(input), { crlf: false })[Symbol.iterator]();
  const P = [];
  const C = [];
  let colours = false;
  const T = [];
  const N = [];
  const objects = [];
  let cur = null;
  let mtl = null;
  let smooth = 0;
  const mtllibs = [];
  const notes = {};
  const note = (k, n = 1) => { notes[k] = (notes[k] || 0) + n; };
  const start = (name) => { cur = { name, faces: [] }; objects.push(cur); };
  let faces = 0;
  let lineNo = 0;
  let ahead = null;   // one line read ahead (a trailing backslash joins the next line only when text follows it)
  const pull = () => { if (ahead) { const a = ahead; ahead = null; return a; } return lines.next(); };
  for (let step = pull(); !step.done; step = pull()) {
    let line = step.value;
    lineNo++;
    while (line.endsWith('\\')) {
      const more = pull();
      if (more.done) break;
      if (more.value === '') { const after = pull(); if (after.done) break; ahead = after; }   // the empty piece after the file's last newline is not text
      line = line.slice(0, -1) + ' ' + more.value;
    }
    const s = line.trim();
    if (!s || s[0] === '#') continue;
    const parts = s.split(/\s+/);
    const tag = parts[0];
    if (tag === 'v') {
      const x = +parts[1]; const y = +parts[2]; const z = +parts[3];
      if (![x, y, z].every((q) => Number.isFinite(q) && Math.abs(q) < 1e7)) throw fail(t('obj.why.vertex', { line: lineNo }));
      P.push(x, y, z);
      if (parts.length >= 7) { const r = +parts[4]; const g = +parts[5]; const b = +parts[6]; if ([r, g, b].every(Number.isFinite)) { C.push(r, g, b); colours = true; } else C.push(1, 1, 1); }
      else C.push(1, 1, 1);
      if (P.length / 3 > MAX) throw new Error(t('obj.too_big'));
    } else if (tag === 'vt') {
      T.push(+parts[1] || 0, +parts[2] || 0);
    } else if (tag === 'vn') {
      N.push(+parts[1] || 0, +parts[2] || 0, +parts[3] || 0);
    } else if (tag === 'f') {
      if (!cur) start('');
      const nv = P.length / 3; const nt = T.length / 2; const nn = N.length / 3;
      const f = { v: [], t: [], n: [], mtl, smooth };
      let bad = false;
      for (const tok of parts.slice(1)) {
        const [a, b, c] = tok.split('/');
        let i = parseInt(a, 10);
        if (!Number.isInteger(i) || i === 0) { bad = true; break; }
        if (i < 0) i = nv + 1 + i;
        if (i < 1 || i > nv) { bad = true; break; }
        f.v.push(i - 1);
        if (b) { let j = parseInt(b, 10); if (j < 0) j = nt + 1 + j; f.t.push(j >= 1 && j <= nt ? j - 1 : -1); } else f.t.push(-1);
        if (c) { let k = parseInt(c, 10); if (k < 0) k = nn + 1 + k; f.n.push(k >= 1 && k <= nn ? k - 1 : -1); } else f.n.push(-1);
      }
      if (bad || f.v.length < 3) { note(t('obj.note.bad_face')); continue; }
      cur.faces.push(f);
      if (++faces > MAX) throw new Error(t('obj.too_big'));
    } else if (tag === 'o') start(parts.slice(1).join(' '));
    else if (tag === 'g') { if (!cur || cur.faces.length || !cur.named) { start(parts.slice(1).join(' ')); cur.fromG = true; } }
    else if (tag === 'usemtl') mtl = parts.slice(1).join(' ');
    else if (tag === 'mtllib') mtllibs.push(...s.slice(6).trim().split(/\s+(?=\S+\.mtl\b)/i));
    else if (tag === 's') smooth = parts[1] === 'off' || parts[1] === '0' ? 0 : (parseInt(parts[1], 10) || 1);
    else if (tag === 'l') note(t('obj.note.lines'));
    else if (tag === 'p') note(t('obj.note.points'));
    else if (tag === 'curv' || tag === 'surf' || tag === 'cstype') note(t('obj.note.curves'));
  }
  // materials and their pictures
  const materials = {};
  for (const lib of mtllibs) {
    const bytes = resolve ? await resolve(lib) : null;
    if (!bytes) { note(t('obj.note.no_mtl', { file: lib.slice(0, 80) })); continue; }
    Object.assign(materials, readMtl(new TextDecoder().decode(bytes), notes));
  }
  for (const m of Object.values(materials)) {
    if (!m.map) continue;
    let bytes = resolve ? await resolve(m.map.file) : null;
    if (bytes && !sniffImage(bytes) && /\.tga$/i.test(m.map.file)) bytes = tgaToPng(bytes);   // TGA kept as PNG
    const mime = sniffImage(bytes);
    if (bytes && mime && mime !== 'image/ktx2') m.map.image = { name: m.map.file.split(/[\\/]/).pop().replace(/\.tga$/i, '.png').slice(0, 120), mime, bytes };
    else note(t('obj.note.no_texture'));
  }
  return { positions: P, colors: colours ? C : null, uvs: T, normals: N, objects: objects.filter((o) => o.faces.length), materials, notes };
}

// ------------------------------------------------------------------------------------------------- import

export function importObj(model, obj, name) {
  const report = { objects: 0, faces: 0, vertices: 0, textures: 0, materials: Object.keys(obj.materials).length, skipped: { ...obj.notes } };
  const skip = (k, n = 1) => { if (n) report.skipped[k] = (report.skipped[k] || 0) + n; };
  const imgIds = new Map();
  const paintOf = (mname) => {
    const m = obj.materials[mname];
    if (!m) return null;
    const hex = m.Kd ? '#' + m.Kd.map((c) => Math.round(c * 255).toString(16).padStart(2, '0')).join('') : null;
    if (m.map?.image && model.addImage) {
      if (!imgIds.has(m.map.file)) {
        let id = null;
        try { id = model.addImage({ name: m.map.image.name, mime: m.map.image.mime, data: toBase64(m.map.image.bytes), avg: hex }); report.textures++; } catch { id = null; }
        imgIds.set(m.map.file, id);
      }
      const id = imgIds.get(m.map.file);
      if (id) return imagePaint(id, [1, 0, 0, 0], [0, 1, 0, 0], hex);
    }
    return hex;
  };
  const paints = new Map();
  const paint = (m) => { if (!paints.has(m)) paints.set(m, m == null ? null : paintOf(m)); return paints.get(m); };
  const top = model.newDef('group', cleanName(name));
  const I = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  obj.objects.forEach((o, oi) => {
    // the object's own vertices, in Z up
    const local = new Map();
    const pts = [];
    const fc = [];
    const fi = [];
    for (const f of o.faces) {
      fc.push(f.v.length);
      for (const v of f.v) {
        let k = local.get(v);
        if (k === undefined) { k = pts.length / 3; local.set(v, k); pts.push(obj.positions[v * 3], -obj.positions[v * 3 + 2], obj.positions[v * 3 + 1]); }
        fi.push(k);
      }
    }
    const mesh = new Mesh();
    const nv = pts.length / 3;
    const { faceOf, cornerOf, dropped } = mesh._bulk(Float64Array.from(pts), nv, Int32Array.from(fc), Int32Array.from(fi));
    if (dropped) skip(t('obj.note.bad_face'), dropped);
    if (!mesh.faceCount) return;
    const hasT = o.faces.some((f) => f.t.some((x) => x >= 0));
    const hasN = o.faces.some((f) => f.n.some((x) => x >= 0));
    const UV = hasT ? (mesh.addAttr('uv', 'corner', 2), mesh.attrArray('uv')) : null;
    const NR = hasN ? (mesh.addAttr('normal', 'corner', 3), mesh.attrArray('normal')) : null;
    const CO = obj.colors ? (mesh.addAttr('color', 'corner', 4), mesh.attrArray('color')) : null;
    const smoothOf = new Int32Array(mesh.nf).fill(0);
    let c = 0;
    o.faces.forEach((f, k) => {
      const mf = faceOf[k];
      const m = obj.materials[f.mtl];
      const sc = m?.map ? m.map.scale : [1, 1];
      const of = m?.map ? m.map.offset : [0, 0];
      if (mf >= 0) { const p = paint(f.mtl); if (p) mesh.fMat[mf] = mesh.paintIndex(p); smoothOf[mf] = f.smooth; }
      for (let q = 0; q < f.v.length; q++, c++) {
        const h = cornerOf[c];
        if (h < 0) continue;
        if (UV && f.t[q] >= 0) { UV[h * 2] = obj.uvs[f.t[q] * 2] * sc[0] + of[0]; UV[h * 2 + 1] = obj.uvs[f.t[q] * 2 + 1] * sc[1] + of[1]; }
        if (NR && f.n[q] >= 0) {
          const x = obj.normals[f.n[q] * 3]; const y = obj.normals[f.n[q] * 3 + 1]; const z = obj.normals[f.n[q] * 3 + 2];
          const l = Math.hypot(x, y, z) || 1;
          NR[h * 3] = x / l; NR[h * 3 + 1] = -z / l; NR[h * 3 + 2] = y / l;
        }
        if (CO) { const v = f.v[q]; CO[h * 4] = obj.colors[v * 3]; CO[h * 4 + 1] = obj.colors[v * 3 + 1]; CO[h * 4 + 2] = obj.colors[v * 3 + 2]; CO[h * 4 + 3] = 1; }
      }
    });
    markSharp(mesh, NR, smoothOf);
    const def = model.newMeshDef(mesh, cleanName(o.name, t('obj.object', { n: oi + 1 })));
    model.place(top, def.id, I);
    report.objects++;
    report.faces += mesh.faceCount;
    report.vertices += mesh.vertexCount;
  });
  return { def: top, report };
}

/** Sharp where the corner normals break across an edge; with no normals, between smoothing groups (0 = off: all sharp). */
export function markSharp(mesh, N, smoothOf = null) {
  const { hTw, hNx, hFl, hF } = mesh;
  const has = (a) => N && (N[a * 3] !== 0 || N[a * 3 + 1] !== 0 || N[a * 3 + 2] !== 0);
  const same = (a, b) => N[a * 3] * N[b * 3] + N[a * 3 + 1] * N[b * 3 + 1] + N[a * 3 + 2] * N[b * 3 + 2] > 0.9995;
  for (let h = 0; h < mesh.nh; h++) {
    const g = hTw[h];
    if (g < 0 || g < h) continue;
    let sharp;
    if (has(h) && has(g) && has(hNx[h]) && has(hNx[g])) sharp = !same(h, hNx[g]) || !same(hNx[h], g);
    else if (smoothOf) { const a = smoothOf[hF[h]]; const b = smoothOf[hF[g]]; sharp = !a || !b || a !== b; }
    else { const na = mesh.faceNormal(hF[h]); const nb = mesh.faceNormal(hF[g]); sharp = na[0] * nb[0] + na[1] * nb[1] + na[2] * nb[2] < 0.99996; }
    if (sharp) { hFl[h] |= FL_SHARP; hFl[g] |= FL_SHARP; }
  }
}

// ------------------------------------------------------------------------------------------------- export

const f6 = (x) => { const v = +x.toFixed(6); return Object.is(v, -0) ? '0' : String(v); };
const zy = (p) => [p[0], p[2], -p[1]];
const extOf = (mime) => ({ 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp' }[mime] || 'png');
const safe = (s) => String(s).replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 60) || 'texture';

/** Does any face exportObj writes carry a paint (its own or its placement's)? With none it writes no .mtl, no mtllib and no usemtl. */
function anyPainted(model) {
  let found = false;
  const cs = [];
  model.walk((d, wm, path, pc) => {
    if (found) return;
    if (d.mesh) {
      const M = d.mesh;
      for (let f = 0; f < M.nf && !found; f++) { if (M.fFl[f] & 1) continue; cs.length = 0; M.faceCorners(f, cs); if (cs.length >= 3 && (M.facePaint(f) || pc)) found = true; }
    } else for (const f of d.faces.values()) if ((f.color || pc) && len(faceNormal(d, f))) { found = true; break; }
  });
  return found;
}

/**
 * The OBJ text; 0.11 PERF.26: `obj` is out.output() of a TextChunks: the same string as before up to 300 M characters, a Blob
 * past that (the host's download takes either). The lines are exactly those of 0.10's join (tools/modelcraft-test/test-writers-11.mjs).
 */
export function exportObj(model, { base = 'model' } = {}) {
  const painted = anyPainted(model);
  const lines = new TextChunks('\n');
  lines.add('# ModelCraft OBJ export — meters, Y up (converted from the model\'s Z up)');   // i18n-ignore: written into the file
  if (painted) lines.add('mtllib ' + safe(base) + '.mtl');
  const report = { objects: 0, faces: 0, textures: 0 };
  const matNames = new Map();
  const images = [];
  const imageFile = new Map();
  const matName = (paint) => {
    const k = paint || '';
    if (!matNames.has(k)) {
      let nm = !paint ? 'Default' : isImagePaint(paint) ? 'Texture_' + safe(model.images?.get(imageId(paint))?.name || imageId(paint)).replace(/\.[a-z]+$/i, '') : isMaterialPaint(paint) ? 'Material_' + paint.slice(4) : 'Colour_' + paint.slice(1).toLowerCase();
      while ([...matNames.values()].includes(nm)) nm += '_';
      matNames.set(k, nm);
      if (paint && isImagePaint(paint) && !imageFile.has(imageId(paint))) {
        const im = model.images?.get(imageId(paint));
        if (im) {
          const file = 'textures/' + safe(im.name || imageId(paint)).replace(/\.[a-z]+$/i, '') + '.' + extOf(im.mime);
          imageFile.set(imageId(paint), file);
          images.push({ name: file, bytes: unb64(im.data) });
          report.textures++;
        }
      }
    }
    return matNames.get(k);
  };
  let vBase = 1;
  let tBase = 1;
  let nBase = 1;
  let curMat = null;
  model.walk((d, wm, path, pc) => {
    const mirror = det3(wm) < 0;
    const name = (path.length ? d.name + ' ' + path.join('.') : d.name || 'Model').replace(/\s+/g, '_');
    const vs = []; const ts = []; const ns = []; const fl = [];
    const tIx = new Map(); const nIx = new Map();
    const T = (uv) => { const k = f6(uv[0]) + ' ' + f6(uv[1]); if (!tIx.has(k)) { tIx.set(k, tBase + ts.length); ts.push(k); } return tIx.get(k); };
    const Nn = (n) => { const k = n.map(f6).join(' '); if (!nIx.has(k)) { nIx.set(k, nBase + ns.length); ns.push(k); } return nIx.get(k); };
    if (d.mesh) {
      const M = d.mesh;
      const NC = M.cornerNormals();
      const UV = M.attrArray('uv');
      const vmap = new Map();
      const V = (v) => { if (!vmap.has(v)) { vmap.set(v, vBase + vs.length); vs.push(zy(apply(wm, [M.P[v * 3], M.P[v * 3 + 1], M.P[v * 3 + 2]]))); } return vmap.get(v); };
      const corners = [];
      for (let f = 0; f < M.nf; f++) {
        if (M.fFl[f] & 1) continue;   // a dead face slot
        corners.length = 0;
        M.faceCorners(f, corners);
        if (corners.length < 3) continue;
        const paint = M.facePaint(f) || pc || null;
        const img = paint && isImagePaint(paint);
        const seq = mirror ? corners.slice().reverse() : corners.slice();
        const ref = seq.map((h) => {
          const v = M.hV[h];
          const p = [M.P[v * 3], M.P[v * 3 + 1], M.P[v * 3 + 2]];
          const uv = UV ? [UV[h * 2], UV[h * 2 + 1]] : img ? imageUV(paint, p) : null;
          const n = norm(applyDir(wm, [NC[h * 3], NC[h * 3 + 1], NC[h * 3 + 2]]));
          return V(v) + '/' + (uv ? T(uv) : '') + '/' + Nn(zy(n));
        });
        fl.push({ mat: matName(paint), text: 'f ' + ref.join(' ') });
      }
    } else {
      const vmap = new Map();
      const V = (id) => { if (!vmap.has(id)) { vmap.set(id, vBase + vs.length); vs.push(zy(apply(wm, d.verts.get(id)))); } return vmap.get(id); };
      const smooth = smoothNormals(d);
      for (const [fid, f] of d.faces) {
        const n0 = faceNormal(d, f);
        if (!len(n0)) continue;
        const paint = f.color || pc || null;
        const img = paint && isImagePaint(paint);
        const pieces = f.loops.length === 1 ? [f.loops[0]] : faceTris(d, f);
        for (let loop of pieces) {
          if (mirror) loop = loop.slice().reverse();
          const ref = loop.map((v) => {
            const p = d.verts.get(v);
            const n = norm(applyDir(wm, smooth.get(fid + '|' + v) || n0));
            return V(v) + '/' + (img ? T(imageUV(paint, p)) : '') + '/' + Nn(zy(n));
          });
          fl.push({ mat: matName(paint), text: 'f ' + ref.join(' ') });
        }
      }
    }
    if (!fl.length) return;
    lines.push('o ' + name);
    for (const p of vs) lines.push('v ' + p.map(f6).join(' '));
    for (const k of ts) lines.push('vt ' + k);
    for (const k of ns) lines.push('vn ' + k);
    for (const f of fl) {
      if (f.mat !== curMat) { if (painted) lines.push('usemtl ' + f.mat); curMat = f.mat; }
      lines.push(f.text);
    }
    vBase += vs.length; tBase += ts.length; nBase += ns.length;
    report.objects++;
    report.faces += fl.length;
  });
  const mtl = ['# ModelCraft materials'];   // i18n-ignore: written into the file
  for (const [paint, nm] of matNames) {
    const h = paint ? paintHex(paint) : null;
    const rgb = h ? [1, 3, 5].map((o) => (parseInt(h.slice(o, o + 2), 16) / 255).toFixed(6)) : ['0.800000', '0.800000', '0.800000'];
    mtl.push('', 'newmtl ' + nm, 'Kd ' + rgb.join(' '), 'Ka 0 0 0', 'Ks 0 0 0', 'd 1', 'illum 1');
    if (paint && isImagePaint(paint) && imageFile.has(imageId(paint))) mtl.push('map_Kd ' + imageFile.get(imageId(paint)));
  }
  // nothing painted: no materials file at all (as io.js did)
  if (!painted) return { obj: lines.finish(true).output('text/plain'), mtl: null, mtlName: null, images, report };
  return { obj: lines.finish(true).output('text/plain'), mtl: mtl.join('\n') + '\n', mtlName: safe(base) + '.mtl', images, report };
}

function unb64(s) {
  if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(s, 'base64'));
  const b = atob(s);
  const u = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
  return u;
}
