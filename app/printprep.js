/* SPDX-License-Identifier: Apache-2.0 */
/**
 * printprep.js — print prep on top of the 3D-print check (0.6 LC.21). DOM-free; ModelCraft's alone (print3d.js stays the
 * shared check, unchanged). modelcraft.js draws the dialog.
 *
 *   BEDS                           {key: [x, y, z] mm} — printer bed sizes for Settings › ModelCraft › 3D printer (sizes only)
 *   bedSize(key)                   → [x, y, z] | null ('' or unknown = no bed: the size is not checked)
 *   plainReport(rep)               print3d.js report → {verdict: 'empty' | 'ready' | 'fix' | 'look', fix, look, rows:
 *                                  [{kind, level: 'fix' | 'look', n}]}: what stops a print first ('fix'), then what to look
 *                                  at ('look'); the dialog words each row as what is wrong · why it matters · what to do
 *   partsToFix(model, {path, sel}, rep)
 *                                  → [{path, defId, name, holes, extra, stray, inner, flipped, fixable}]: the definitions
 *                                  in what prints (the same choice as print-mc.js) whose own geometry has something wrong,
 *                                  once each (a component placed twice is one row, at its first placement). Turned faces
 *                                  count only when the check found faces facing the wrong way (a hollow inside a part is
 *                                  meant to face in). `rep` = the print3d.js report of the same choice.
 *   fixParts(model, parts, label)  → {stray, inner, flipped, holes}: fixSolid on each one, as ONE undo step
 */

import { solidProblems, fixSolid } from './model.js';

export const BEDS = { 180: [180, 180, 180], 220: [220, 220, 250], 256: [256, 256, 256], 300: [300, 300, 400] };
export const bedSize = (key) => (Object.hasOwn(BEDS, key) ? BEDS[key].slice() : null);

// most serious first
const FIX_ORDER = ['empty', 'open', 'nonmanifold', 'flipped', 'inverted', 'selfintersect'];
const LOOK_ORDER = ['tiny', 'bed', 'nobase', 'overhang', 'overlap', 'touch', 'degenerate', 'unchecked'];

export function plainReport(rep) {
  const by = (order) => (a, b) => order.indexOf(a.kind) - order.indexOf(b.kind);
  const fix = rep.problems.map((p) => ({ kind: p.kind, level: 'fix', n: p.n || 0 })).sort(by(FIX_ORDER));
  const look = rep.warnings.map((w) => ({ kind: w.kind, level: 'look', n: w.n || 0, share: w.share, angle: w.angle })).sort(by(LOOK_ORDER));
  const empty = fix.some((r) => r.kind === 'empty');
  return {
    verdict: empty ? 'empty' : fix.length ? 'fix' : look.length ? 'look' : 'ready',
    fix: empty ? 0 : fix.length, look: look.length,
    rows: empty ? fix : [...fix, ...look],
  };
}

/** The definitions what prints is made of, as [{def, path}] (first placement of each), following print-mc.js's choice. */
function printedDefs(model, { path = [], sel = [] } = {}) {
  const ctx = model.context(path) || model.context([]);
  const out = new Map();
  const visit = (def, p) => model.walkShown((d, m, sub) => { if (!out.has(d.id)) out.set(d.id, { def: d, path: [...p, ...sub] }); }, def);
  const insts = sel.filter((s) => s && s.t === 'i' && ctx.def.insts.has(s.id));
  const faces = sel.some((s) => s && s.t === 'f' && ctx.def.faces.has(s.id));
  if (insts.length || faces) {
    const off = model.hiddenTags(), base = model.context(path) ? path : [];
    for (const s of insts) {
      const inst = ctx.def.insts.get(s.id), d = model.defs.get(inst.def);
      if (d && !inst.hidden && !(inst.tag && off.has(inst.tag))) visit(d, [...base, s.id]);
    }
    if (faces && !out.has(ctx.def.id)) out.set(ctx.def.id, { def: ctx.def, path: base });
  } else visit(model.root, []);
  return [...out.values()];
}

export function partsToFix(model, choice = {}, rep = null) {
  const turned = !rep || rep.problems.some((p) => p.kind === 'flipped' || p.kind === 'inverted');
  const parts = [];
  for (const { def, path } of printedDefs(model, choice)) {
    if (!def.faces.size) continue;
    const p = solidProblems(def);
    const row = { path, defId: def.id, name: def.kind === 'root' ? null : def.name || null,
      holes: p.holes.length, extra: p.extra.length, stray: p.stray.length, inner: p.inner.length, flipped: turned ? p.flipped.length : 0 };
    // stray edges alone don't spoil a print (print3d.js only sees faces); they are cleaned up with the rest
    row.fixable = row.holes + row.inner + row.flipped + row.stray > 0;
    if (row.holes + row.extra + row.inner + row.flipped) parts.push(row);
  }
  return parts;
}

export function fixParts(model, parts, label) {
  const sum = { stray: 0, inner: 0, flipped: 0, holes: 0 };
  const ids = [...new Set(parts.map((p) => p.defId))];
  if (!ids.length) return sum;
  model.change(label, (m) => {
    for (const id of ids) {
      const d = m.def(id);
      if (!d) continue;
      const r = fixSolid(d);
      for (const k of Object.keys(sum)) sum[k] += r[k];
    }
  }, ids);
  return sum;
}
