/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scale-factors.js — typed scale factors and the shrinkage allowance (0.8 SU.934, session model-08). Pure text and numbers, no
 * imports, so PartCraft carries a byte-identical copy (tools/modelcraft-test/print-split-sync.mjs). scale-nu.js uses it on a
 * model; PartCraft's print-features.js on a body.
 *
 *   parseFactor(text)             "1.015" · "101.5%" · "+1.5%" · "-2%" → a factor above 0, or null
 *   parseFactors(text)            one factor (all three axes) or "x; y; z" → [fx, fy, fz] or null
 *   shrinkFactor(pct, mode)       a casting that shrinks s % in cooling needs a pattern bigger by s %.
 *                                 mode 'add' (the default, what a shrink rule marks): 1 + s/100; 'exact': 1 / (1 − s/100)
 */
export const SHRINK_MODES = ['add', 'exact'];

/** A factor from text: a plain number, "101.5%" (of the size), or "+1.5%" / "-2%" (change). */
export function parseFactor(text) {
  const s = String(text ?? '').trim().replace(',', '.').replace(/\s+/g, '');
  if (!s) return null;
  const m = /^([+-]?)(\d*\.?\d+(?:e[+-]?\d+)?)(%?)$/i.exec(s);
  if (!m) return null;
  const n = Number(m[2]);
  if (!Number.isFinite(n)) return null;
  let f;
  if (m[3]) f = m[1] ? 1 + (m[1] === '-' ? -n : n) / 100 : n / 100;
  else f = m[1] === '-' ? -n : n;
  return f > 1e-6 && f < 1e6 ? f : null;
}

/** One factor for all three axes, or three separated by ";" (a decimal comma is allowed with ";") or by "," when there are three. */
export function parseFactors(text) {
  const t = String(text ?? '').trim();
  const parts = t.includes(';') ? t.split(';') : t.split(/,(?=\s*[+-]?\d)/).length === 3 ? t.split(',') : [t];
  const fs = parts.map(parseFactor);
  if (fs.some((f) => f === null)) return null;
  if (fs.length === 1) return [fs[0], fs[0], fs[0]];
  return fs.length === 3 ? fs : null;
}

/** The pattern factor for a shrinkage of pct percent (0 ≤ pct < 50). */
export function shrinkFactor(pct, mode = 'add') {
  if (!(pct >= 0 && pct < 50)) return null;
  return mode === 'exact' ? 1 / (1 - pct / 100) : 1 + pct / 100;
}
