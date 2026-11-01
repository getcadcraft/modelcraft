/* SPDX-License-Identifier: Apache-2.0 */
/**
 * group-mods.js — the modifier stack of a group or component (0.8 GH.2, session model-08; GitHub modelcraft#4, draft PR #5 by its
 * author, whose design — a recipe on a derived definition that holds placements of the source — this follows). DOM-free.
 *
 * ONE stack: the items are the mesh stack's (mesh/modifiers.js: {type, on, view, render, name, params}, the same MODS registry,
 * cleaner and panel). A mesh evaluates them into a new mesh; a group evaluates them into placements of its source:
 *   scale  {factors: [x, y, z]}                          about the source's origin, in its own red, green, blue axes
 *   array  {count, mode 'linear', rel, abs}              copy i at i × (rel × the result's size so far + abs)
 * Each item acts on the result of the ones above it, so Array then Scale spaces the copies by the scaled step, and Scale then
 * Array by the unscaled one. A group takes these two for now; the other types need real geometry (bend and taper in the
 * follow-ups) or mirrored placements.
 *
 * The data (kernel: model.js isStacked): `def.mods = {src: 'dNN', ops: [item…]}` on a derived component definition; its insts
 * are the source placed by the enabled items. Source edits therefore show with no re-evaluation. Only a change to the stack
 * (here) re-places, inside the caller's model.change, so it is one undo step. Save, undo, copy, paste and Make unique carry the
 * stack (the kernel); Purge keeps the source; stretching and the stack cannot share a definition yet.
 *
 *   GROUP_TYPES, MAX_COPIES, MAX_ITEMS
 *   cleanGroupOps(list) → items kept (untrusted; other types and radial/curve arrays dropped)
 *   cleanGroup({src, ops}) → {src, ops} | null        the model's hook (MESH_HOOKS.cleanGroup): null when the stack would make too many copies
 *   groupMatrices(ops, box) → [matrix …]               the placements (box = {min, max} of the source, any), throws a plain Error
 *   canModify(def) · stackBox(model, srcDef)
 *   modifierDef(model, src, ops) → the new derived definition       call inside model.change; then point the placement at it
 *   setModifiers(model, def, ops)                                    call inside model.change
 */
import { cleanMods, newMod } from './mesh/modifiers.js';
import { ident, mmul, translation, apply } from './vec.js';
import { isStacked } from './model.js';
import { t } from './i18n.js';

export const GROUP_TYPES = ['scale', 'array'];
export const MAX_COPIES = 1000;
export const MAX_ITEMS = 32;
const ok = (x) => Number.isFinite(x) && Math.abs(x) < 1e7;
const bad = (key = 'app.gmod.bad') => { throw new Error(t(key)); };

/** Items from anything: only scale and linear array, each as the mesh stack cleans it. */
export function cleanGroupOps(list) {
  const items = (Array.isArray(list) ? list : []).filter((m) => m && GROUP_TYPES.includes(m.type) && !(m.type === 'array' && m.params && m.params.mode && m.params.mode !== 'linear'));
  return cleanMods(items.slice(0, MAX_ITEMS)).map((m) => (m.type === 'array' ? { ...m, params: { ...m.params, mode: 'linear', merge: false, curve: '' } } : m));
}

/** How many copies the enabled items make (1 = just the source). */
export const copyCount = (ops) => ops.reduce((n, m) => (m.on && m.type === 'array' ? n * m.params.count : n), 1);

/** The model's hook for a file or clipboard stack: null (the stack is dropped, the placements stay) when it is not sound. */
export function cleanGroup(m) {
  if (!m || typeof m.src !== 'string' || !Array.isArray(m.ops)) return null;
  const ops = cleanGroupOps(m.ops);
  if (ops.length !== m.ops.length || copyCount(ops) > MAX_COPIES) return null;
  return { src: m.src, ops };
}

const cornersOf = (b) => [0, 1].flatMap((i) => [0, 1].flatMap((j) => [0, 1].map((k) => [i ? b.max[0] : b.min[0], j ? b.max[1] : b.min[1], k ? b.max[2] : b.min[2]])));

/** The placements of the source for these items: matrices (column-major 4×4), first = the original. */
export function groupMatrices(ops, box) {
  let ms = [ident()];
  for (const op of ops) {
    if (!op.on) continue;
    const p = op.params;
    if (op.type === 'scale') {
      const S = ident(); [S[0], S[5], S[10]] = p.factors;
      ms = ms.map((m) => mmul(S, m));
    } else if (op.type === 'array') {
      if (ms.length * p.count > MAX_COPIES) bad();
      // the step is a fraction of the size of everything so far (the mesh stack's rule), plus the extra step
      let lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
      if (box) for (const m of ms) for (const c of cornersOf(box)) { const q = apply(m, c); for (let i = 0; i < 3; i++) { lo[i] = Math.min(lo[i], q[i]); hi[i] = Math.max(hi[i], q[i]); } }
      else { lo = [0, 0, 0]; hi = [0, 0, 0]; }
      const step = [0, 1, 2].map((i) => (hi[i] - lo[i]) * p.rel[i] + p.abs[i]);
      const next = [];
      for (let i = 0; i < p.count; i++) for (const m of ms) next.push(mmul(translation(step.map((x) => x * i)), m));
      ms = next;
    } else bad();
    if (ms.some((m) => !m.every(ok) || m[0] * m[5] * m[10] < 1e-12)) bad();
  }
  return ms;
}

/** A plain group or component that can start a stack: not the model, a mesh object, a stack or a stretched copy. */
export function canModify(def) {
  return !!def && def.kind !== 'root' && def.kind !== 'mesh' && !def.mesh && !isStacked(def) && !def.dyn && !(Array.isArray(def.mods) && def.mods.length);
}

/** The box of the source in its own axes, or null when it is empty. */
export function stackBox(model, srcDef) {
  const b = model.bbox(srcDef, ident());
  return b || null;
}

function checked(ops) {
  const clean = cleanGroupOps(ops);
  if (clean.length !== (ops || []).length) bad();
  if (copyCount(clean) > MAX_COPIES) bad();
  return clean;
}

export function setModifiers(model, def, ops) {
  if (!isStacked(def) || def.dyn) bad('m3d.model.mods_source_only');
  const src = model.def(def.mods.src);
  if (!src || src === def || isStacked(src) || src.dyn || src.mesh) bad('m3d.model.mods_source_only');
  const items = checked(ops);
  const matrices = groupMatrices(items, stackBox(model, src));   // throws before anything changes
  def.insts.clear();
  def.next = 1;
  for (const m of matrices) model.place(def, src.id, m);
  def.mods = { src: src.id, ops: items };
}

export function modifierDef(model, src, ops) {
  if (!canModify(src)) bad('m3d.model.mods_source_only');
  const out = model.newDef('component', model.uniqueName(src.name.replace(/#\d+$/, '')));
  out.mods = { src: src.id, ops: [] };
  setModifiers(model, out, ops);
  return out;
}

export { newMod };
