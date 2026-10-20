/* SPDX-License-Identifier: Apache-2.0 */
/**
 * Ordered, local-space Scale and linear Array recipes on derived definitions.
 * Results contain placements of the source, so source edits show through without
 * reevaluation. Call modifierDef/setModifiers inside one model.change.
 */
import { ident, mmul, translation } from './vec.js';
import { t } from './i18n.js';

export const MAX_MODIFIER_COPIES = 1000;
export const MAX_MODIFIERS = 32;
const number = x => Number.isFinite(x) && Math.abs(x) < 1e7;
const triple = v => Array.isArray(v) && v.length === 3 && v.every(number);
const bad = () => { throw new Error(t('app.mods.bad')); };

/** Validate and copy the small persisted recipe; never keep a caller's mutable arrays. */
export function cleanModifiers(mods) {
  if (!mods || typeof mods.src !== 'string' || !/^d\d{1,9}$/.test(mods.src) ||
      !Array.isArray(mods.ops) || mods.ops.length > MAX_MODIFIERS) bad();
  const ops = mods.ops.map(op => {
    if (!op || (op.enabled !== undefined && typeof op.enabled !== 'boolean')) bad();
    const enabled = op.enabled !== false;
    if (op.type === 'scale' && triple(op.factors) && op.factors.every(x => x > 0))
      return { type: 'scale', factors: op.factors.slice(), enabled };
    if (op.type === 'array' && triple(op.offset) && Number.isInteger(op.count) && op.count >= 1 && op.count <= MAX_MODIFIER_COPIES)
      return { type: 'array', count: op.count, offset: op.offset.slice(), enabled };
    bad();
  });
  const result = { src: mods.src, ops };
  modifierMatrices(ops);   // reject excessive expansion/overflow before changing any geometry
  return result;
}

/** Each operation acts on the previous result: Array then Scale scales the spacing too. */
function modifierMatrices(ops) {
  let ms = [ident()];
  for (const op of ops) {
    if (!op.enabled) continue;
    if (op.type === 'scale') {
      const s = ident(); [s[0], s[5], s[10]] = op.factors;
      ms = ms.map(m => mmul(s, m));
    } else {
      if (ms.length * op.count > MAX_MODIFIER_COPIES) bad();
      const next = [];
      for (let i = 0; i < op.count; i++) {
        const offset = translation(op.offset.map(x => x * i));
        for (const m of ms) next.push(mmul(offset, m));
      }
      ms = next;
    }
    if (ms.some(m => !m.every(number) || m[0] * m[5] * m[10] < 1e-12)) bad();
  }
  return ms;
}

export function canModify(src) {
  return !!src && src.kind !== 'root' && !src.mods && !src.dyn && !src.insts.size && !!src.verts.size;
}

export function modifierDef(model, src, ops) {
  if (!canModify(src)) throw new Error(t('app.mods.source_only'));
  const mods = cleanModifiers({ src: src.id, ops });
  const out = model.newDef('component', model.uniqueName(src.name.replace(/#\d+$/, '')));
  out.mods = mods;
  setModifiers(model, out, mods.ops);
  return out;
}

export function setModifiers(model, def, ops) {
  if (!def?.mods || def.dyn) throw new Error(t('app.mods.source_only'));
  const mods = cleanModifiers({ src: def.mods.src, ops });
  const src = model.def(mods.src);
  if (!src || src === def || src.mods || src.dyn) throw new Error(t('app.mods.source_only'));
  const matrices = modifierMatrices(mods.ops);
  def.insts.clear();
  // Stable ids for unchanged slots (selection/scenes refer to instance paths).
  def.next = 1;
  for (const m of matrices) model.place(def, src.id, m);
  def.mods = mods;
}
