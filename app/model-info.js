/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-info.js — what Model info… and Preferences › New models read and keep (0.7.1 71.13, DOM-free; the dialog is
 * model-info-ui.js). Nothing here is a second copy of a setting: units are the model's (`model.units`), location and
 * display are the file's view style (`view.style`, the Style panel's), rendering is the file's `view.render`. What is
 * new is kept beside them:
 *
 *   file `info` (optional top-level key of the .modelcraft file, like `images`, `materials`, `anim`): {author, org,
 *   description}, outside undo (an edit is an unsaved change). It needs no new file version: the kernel writes version 1
 *   (2 with meshes) as before, an older ModelCraft ignores the key, and a file without it opens with none. Untrusted on
 *   open: `cleanInfo` keeps strings only, trimmed, cut to INFO_LIMITS; nothing left → null (the key is not written).
 *
 *   new-model start (Preferences › New models; localStorage `modelcraft.template`, this browser only, never a file):
 *   {v: 1, units, style: {mode, edges, shadows}, sun: {lat, lon, tz}} from the open model (`templateOf`), checked on
 *   read (`cleanTemplate`) and applied by New and on page load.
 *
 *   file `format` (0.8 D8.6, optional like `info`, outside undo): {precision, dimSize, textHeight}. `precision` = a fraction of an
 *   inch (1…64) for feet and inches / inches, decimal places (0…6) for the other units; `dimSize` = the dimension text in
 *   pixels (8…32); `textHeight` = the 3D text tool's starting height in meters. Each missing = the app's own. `cleanFormat`
 *   checks it on open; the kernel's units.js (setLengthPrecision) and infer.js (setDimTextSize) read it.
 *
 *   modelStats(model, extra) → counts for Statistics; saveVersion(model) → the file version Save writes.
 */
import { MESH_FILE_VERSION } from './model.js';
import { FRACTIONS } from './units.js';

export const INFO_KEYS = ['author', 'org', 'description'];
export const INFO_LIMITS = { author: 200, org: 200, description: 4000 };
export const TEMPLATE_KEY = 'modelcraft.template';
export const STYLE_MODES = ['shaded', 'hidden', 'wire', 'xray'];

/** A file's `info`, checked: {author?, org?, description?} or null when there is nothing. */
export function cleanInfo(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return null;
  const out = {};
  for (const k of INFO_KEYS) {
    if (typeof v[k] !== 'string') continue;
    const s = v[k].replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '').trim().slice(0, INFO_LIMITS[k]);
    if (s) out[k] = s;
  }
  return Object.keys(out).length ? out : null;
}

/** A file's `format`, checked: {precision?, dimSize?, textHeight?} or null. */
export function cleanFormat(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return null;
  const out = {};
  if (Number.isInteger(v.precision) && v.precision >= 0 && v.precision <= 64 && (v.precision <= 6 || FRACTIONS.includes(v.precision))) out.precision = v.precision;
  if (Number.isInteger(v.dimSize) && v.dimSize >= 8 && v.dimSize <= 32) out.dimSize = v.dimSize;
  if (typeof v.textHeight === 'number' && Number.isFinite(v.textHeight) && v.textHeight > 0 && v.textHeight <= 1000) out.textHeight = v.textHeight;
  return Object.keys(out).length ? out : null;
}

const num = (x, lo, hi) => (typeof x === 'number' && Number.isFinite(x) && x >= lo && x <= hi ? x : null);

/** The new-model start from a stored value (untrusted): {v, units, style, sun} or null. `units` = the ids the app has. */
export function cleanTemplate(v, units = []) {
  if (!v || typeof v !== 'object' || v.v !== 1) return null;
  const out = { v: 1 };
  if (units.includes(v.units)) out.units = v.units;
  const st = v.style;
  if (st && typeof st === 'object' && STYLE_MODES.includes(st.mode)) out.style = { mode: st.mode, edges: st.edges !== false, shadows: st.shadows === true };
  const s = v.sun;
  if (s && typeof s === 'object') {
    const lat = num(s.lat, -90, 90), lon = num(s.lon, -180, 180), tz = num(s.tz, -14, 14);
    if (lat !== null && lon !== null && tz !== null) out.sun = { lat, lon, tz };
  }
  return out.units || out.style || out.sun ? out : null;
}
/** The new-model start from the open model: its units, display style and location. */
export function templateOf(units, style) {
  const sun = style.sun || {};
  return cleanTemplate({ v: 1, units, style: { mode: style.mode, edges: style.edges, shadows: style.shadows }, sun: { lat: sun.lat, lon: sun.lon, tz: sun.tz } }, [units]);
}
/** The stored start (null: none, or a private window). */
export function readTemplate(units) {
  try { return cleanTemplate(JSON.parse(globalThis.localStorage?.getItem(TEMPLATE_KEY) || 'null'), units); } catch { return null; }
}
/** Keep `tpl` as the start (null forgets it). → false when the browser would not keep it. */
export function writeTemplate(tpl) {
  try {
    const ls = globalThis.localStorage;
    if (!ls) return false;
    if (tpl) ls.setItem(TEMPLATE_KEY, JSON.stringify(tpl)); else ls.removeItem(TEMPLATE_KEY);
    return true;
  } catch { return false; }
}

/** The file version Save writes (model.toJSON's rule: 2 when a definition is a mesh, else 1). */
export const saveVersion = (model) => ([...model.defs.values()].some((d) => d.mesh) ? MESH_FILE_VERSION : 1);

/**
 * Counts for Model info › Statistics. Faces and edges are counted once per definition (as stored: a component placed ten
 * times counts once), meshes by their own faces and edges. `extra` = {materials, images} counts the page knows.
 */
export function modelStats(model, extra = {}) {
  const s = { faces: 0, edges: 0, curves: 0, meshes: 0, meshFaces: 0, groups: 0, components: 0, placements: 0, unused: 0,
    dims: model.dims.size, guides: model.guides.size, lights: model.lights.size, sections: model.sections.size,
    scenes: model.scenes.length, tags: model.tags.length, storeys: model.storeys.length,
    materials: extra.materials || 0, images: extra.images ?? model.images?.size ?? 0 };
  const used = model.instanceCounts();
  for (const d of model.defs.values()) {
    s.placements += d.insts.size;
    if (d.kind !== 'root') {
      if (d.kind === 'component') s.components++; else if (d.kind === 'group') s.groups++;
      if (!used.get(d.id)) s.unused++;
    }
    if (d.mesh) { s.meshes++; s.meshFaces += d.mesh.faceCount; continue; }
    s.faces += d.faces.size;
    s.edges += d.edges.size;
    s.curves += d.splines?.size || 0;
  }
  return s;
}
/** Each component definition with how many placements it has, most used first (name order on ties). */
export function componentList(model) {
  const used = model.instanceCounts();
  return [...model.defs.values()].filter((d) => d.kind === 'component').map((d) => ({ id: d.id, name: d.name, n: used.get(d.id) || 0 }))
    .sort((a, b) => b.n - a.n || String(a.name).localeCompare(String(b.name)));
}
