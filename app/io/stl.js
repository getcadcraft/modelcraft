/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stl.js — STL with colour, both ways (0.7 XF.3, session `interchange`). Binary STL: 80-byte header, a count, then
 * 50 bytes a triangle (normal, three corners, a 16-bit "attribute byte count"); ASCII: solid … facet normal … vertex …
 * endsolid. Two published colour conventions ride in the attribute word:
 *   - VisCAM / SolidView: bit 15 set = the colour is valid; red bits 10–14, green 5–9, blue 0–4.
 *   - Materialise Magics: the header holds "COLOR=" + 4 bytes RGBA (the part's colour); bit 15 CLEAR = this triangle has its
 *     own colour, with red in bits 0–4 and blue in 10–14.
 * The header decides which: "COLOR=" in it = Materialise, else VisCAM. DOM-free; untrusted input (sizes checked, caps).
 *
 *   readStl(bytes) → { ascii, name, triangles, positions: Float32Array (9 per triangle), colors: Float32Array RGB (linear,
 *                      per triangle) | null, convention: 'viscam' | 'magics' | null }
 *   importStl(model, stl, name, { unit = 'mm' }) → { def, report }   one welded mesh definition in a group; STL has no unit:
 *                                                                     millimetres unless told (ModelCraft writes millimetres)
 *   exportStl(model, { color = true }) → { bytes, report }           binary, millimetres, Z up; VisCAM colours when faces are painted
 */
import { Mesh } from '../mesh.js';
import { markSharp } from './obj.js';
import { worldFaces, paintFromLinear, srgbToLin } from './ply.js';
import { t } from '../i18n.js';
import { decodeParts, partsOf, isParts } from '../textin.js';   // 0.10 PERF.20: ASCII STL is read a part at a time

const MAX_TRIS = 20000000;
const UNIT = { mm: 0.001, cm: 0.01, m: 1, in: 0.0254, ft: 0.3048 };

export function readStl(input, opts = {}) {
  const b = input instanceof Uint8Array ? input : new Uint8Array(input);
  if (b.length < 15) throw new Error(t('stl.bad', { why: t('stl.why.short') }));
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const n = b.length >= 84 ? dv.getUint32(80, true) : -1;
  const startsSolid = String.fromCharCode(...b.subarray(0, 5)).toLowerCase() === 'solid';
  // binary when the size matches the count exactly (many binary files start with "solid" in the header too)
  if (n >= 0 && 84 + n * 50 === b.length) return readBinary(b, dv, n);
  if (startsSolid) return readAscii(b, opts);
  if (n >= 0 && 84 + n * 50 > b.length) throw new Error(t('stl.bad', { why: t('stl.why.short') }));
  if (n >= 0) return readBinary(b, dv, n);
  throw new Error(t('stl.not_stl'));
}

function readBinary(b, dv, n) {
  if (n > MAX_TRIS) throw new Error(t('stl.too_big'));
  let head = '';
  for (let i = 0; i < 80; i++) head += String.fromCharCode(b[i]);
  const ci = head.indexOf('COLOR=');
  const magics = ci >= 0 && ci + 10 <= 80;
  const part = magics ? [b[ci + 6], b[ci + 7], b[ci + 8]].map((v) => srgbToLin(v / 255)) : null;
  const positions = new Float32Array(n * 9);
  const colors = new Float32Array(n * 3);
  let any = false;
  for (let i = 0; i < n; i++) {
    const o = 84 + i * 50;
    for (let k = 0; k < 9; k++) {
      const v = dv.getFloat32(o + 12 + k * 4, true);
      if (!(Math.abs(v) < 1e9)) throw new Error(t('stl.bad', { why: t('stl.why.number') }));
      positions[i * 9 + k] = v;
    }
    const a = dv.getUint16(o + 48, true);
    let rgb = null;
    if (magics) {
      if (!(a & 0x8000)) rgb = [a & 31, (a >> 5) & 31, (a >> 10) & 31];
    } else if (a & 0x8000) rgb = [(a >> 10) & 31, (a >> 5) & 31, a & 31];
    if (rgb) { any = true; for (let k = 0; k < 3; k++) colors[i * 3 + k] = srgbToLin(rgb[k] / 31); }
    else if (part) { any = true; for (let k = 0; k < 3; k++) colors[i * 3 + k] = part[k]; }
    else colors.fill(-1, i * 3, i * 3 + 3);
  }
  const name = head.replace(/\0.*$/s, '').replace(/^solid\s*/i, '').replace(/COLOR=.{4}/s, '').replace(/MATERIAL=.{12}/s, '').trim().slice(0, 80);
  return { ascii: false, name, triangles: n, positions, colors: any ? colors : null, convention: any ? (magics ? 'magics' : 'viscam') : null };
}

function readAscii(b, opts = {}) {
  // 0.10 PERF.20: the text is read in parts of about 4 MB (a part ends at a line end); the corners go straight into a growing
  // Float32Array, not a JS array of doubles. A "vertex" statement split over lines at a part's end is carried to the next part.
  const parts = partsOf(isParts(b) ? b : decodeParts(b, { partBytes: opts.partBytes }));
  const first = parts[0] || '';
  const name = (first.match(/^solid[ \t]*([^\r\n]*)/i)?.[1] || '').trim().slice(0, 80);
  let pos = new Float32Array(1 << 16), n = 0;
  const re = /vertex\s+(\S+)\s+(\S+)\s+(\S+)/gi;
  let carry = '';
  for (let pi = 0; pi < parts.length; pi++) {
    const buf = carry ? carry + parts[pi] : parts[pi];
    re.lastIndex = 0;
    let m, end = 0;
    while ((m = re.exec(buf))) {
      const x = +m[1]; const y = +m[2]; const z = +m[3];
      if (![x, y, z].every((v) => Math.abs(v) < 1e9)) throw new Error(t('stl.bad', { why: t('stl.why.number') }));
      if (n + 3 > pos.length) { const g = new Float32Array(pos.length * 2); g.set(pos); pos = g; }
      pos[n++] = x; pos[n++] = y; pos[n++] = z;
      if (n > MAX_TRIS * 9) throw new Error(t('stl.too_big'));
      end = re.lastIndex;
    }
    const rest = buf.slice(end);
    const k = rest.toLowerCase().lastIndexOf('vertex');
    carry = k >= 0 ? rest.slice(k) : '';
  }
  if (!n || n % 9) throw new Error(t('stl.bad', { why: t('stl.why.short') }));
  return { ascii: true, name, triangles: n / 9, positions: pos.slice(0, n), colors: null, convention: null };
}

export function importStl(model, stl, name, { unit = 'mm' } = {}) {
  const s = UNIT[unit] ?? 0.001;
  const report = { faces: 0, vertices: 0, colours: 0, unit, skipped: {} };
  const keyOf = new Map();
  const pts = [];
  const fi = new Int32Array(stl.triangles * 3);
  const P = stl.positions;
  for (let c = 0; c < stl.triangles * 3; c++) {
    const k = P[c * 3] + ',' + P[c * 3 + 1] + ',' + P[c * 3 + 2];
    let v = keyOf.get(k);
    if (v === undefined) { v = pts.length / 3; keyOf.set(k, v); pts.push(P[c * 3] * s, P[c * 3 + 1] * s, P[c * 3 + 2] * s); }
    fi[c] = v;
  }
  // triangles with a repeated corner or no area go
  const keep = [];
  for (let f = 0; f < stl.triangles; f++) {
    const a = fi[f * 3]; const b = fi[f * 3 + 1]; const c = fi[f * 3 + 2];
    if (a === b || b === c || a === c) continue;
    const ux = pts[b * 3] - pts[a * 3]; const uy = pts[b * 3 + 1] - pts[a * 3 + 1]; const uz = pts[b * 3 + 2] - pts[a * 3 + 2];
    const vx = pts[c * 3] - pts[a * 3]; const vy = pts[c * 3 + 1] - pts[a * 3 + 1]; const vz = pts[c * 3 + 2] - pts[a * 3 + 2];
    if (Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) < 1e-18) continue;
    keep.push(f);
  }
  if (keep.length < stl.triangles) report.skipped[t('stl.note.degenerate')] = stl.triangles - keep.length;
  const fc = new Int32Array(keep.length).fill(3);
  const fik = new Int32Array(keep.length * 3);
  keep.forEach((f, k) => { fik[k * 3] = fi[f * 3]; fik[k * 3 + 1] = fi[f * 3 + 1]; fik[k * 3 + 2] = fi[f * 3 + 2]; });
  const top = model.newDef('group', String(name || stl.name || 'STL import').slice(0, 120));   // i18n-ignore: a fallback for a file with no name
  if (!keep.length) return { def: top, report };
  const mesh = new Mesh();
  const { faceOf, dropped } = mesh._bulk(Float64Array.from(pts), pts.length / 3, fc, fik);
  if (dropped) report.skipped[t('stl.note.degenerate')] = (report.skipped[t('stl.note.degenerate')] || 0) + dropped;
  if (stl.colors) {
    const seen = new Set();
    keep.forEach((f, k) => {
      const mf = faceOf[k];
      const c = stl.colors;
      if (mf < 0 || c[f * 3] < 0) return;
      const p = paintFromLinear(c[f * 3], c[f * 3 + 1], c[f * 3 + 2]);
      seen.add(p);
      mesh.fMat[mf] = mesh.paintIndex(p);
    });
    report.colours = seen.size;
  }
  markSharp(mesh, null, null);
  const def = model.newMeshDef(mesh, String(name || stl.name || 'STL').slice(0, 120));
  model.place(top, def.id, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  report.faces = mesh.faceCount;
  report.vertices = mesh.vertexCount;
  return { def: top, report };
}

export function exportStl(model, { color = true } = {}) {
  const tris = [];
  let painted = false;
  worldFaces(model, (cs) => { tris.push(cs); }, { triangles: true });
  const out = new Uint8Array(84 + tris.length * 50);
  const head = 'ModelCraft STL, millimeters';   // i18n-ignore: the STL header
  for (let i = 0; i < head.length; i++) out[i] = head.charCodeAt(i);
  const dv = new DataView(out.buffer);
  dv.setUint32(80, tris.length, true);
  let o = 84;
  for (const tr of tris) {
    const [a, b, c] = tr.map((x) => x.pos);
    const ux = b[0] - a[0]; const uy = b[1] - a[1]; const uz = b[2] - a[2];
    const vx = c[0] - a[0]; const vy = c[1] - a[1]; const vz = c[2] - a[2];
    let n = [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx];
    const l = Math.hypot(...n) || 1;
    n = n.map((x) => x / l);
    for (const v of [n, a.map((x) => x * 1000), b.map((x) => x * 1000), c.map((x) => x * 1000)]) { dv.setFloat32(o, v[0], true); dv.setFloat32(o + 4, v[1], true); dv.setFloat32(o + 8, v[2], true); o += 12; }
    const col = tr[0].col;
    if (color && col) {
      painted = true;
      dv.setUint16(o, 0x8000 | (Math.round(col[0] / 255 * 31) << 10) | (Math.round(col[1] / 255 * 31) << 5) | Math.round(col[2] / 255 * 31), true);
    }
    o += 2;
  }
  return { bytes: out, report: { triangles: tris.length, colours: painted } };
}

