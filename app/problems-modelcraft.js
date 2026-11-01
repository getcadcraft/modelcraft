/* SPDX-License-Identifier: Apache-2.0 */
/**
 * problems-modelcraft.js — ModelCraft's 3D-print check (print3d.js printCheck, printprep.js) as shared Problems (0.8 P.6; spec
 * docs/0.8-PROBLEMS-SPEC.md § 10). No DOM: bin/test-problems.mjs runs it in Node; modelcraft.js hands the result to the shell's
 * window.ccProblems each time the print check runs (the check is the person's own action and can be heavy, so it is pushed with
 * `src.set`, never re-run on every edit; the result is cleared when the model changes).
 *
 *   printProblems(rep, { t, bed }) → { problems, anchors }
 *     rep      print3d.js printCheck report (rep.problems = cannot be printed as it is → error; rep.warnings → warning; the checker's
 *              own "could not look everywhere" / "degenerate triangles" → note)
 *     anchors  Map(problem id → [x, y, z] in mm): the first place the check found the problem (the marker's anchor, in the model's
 *              own coordinates; the app's adapter maps it into its scene)
 *   Ids are 'modelcraft.print:<kind>' (one problem per kind of problem, about the print job as a whole): stable across runs and languages.
 *   t(key, vars) = ModelCraft's t; the words are the print dialog's own keys (app.print3d.p.<kind>, app.print3d.w.<kind>).
 *   Fix: 'repair' (the dialog's "Fix what can be fixed", printprep.js fixParts) on the kinds it can repair: open, flipped, inverted.
 */
const REPAIRABLE = new Set(['open', 'flipped', 'inverted']);
const NOTES = new Set(['degenerate', 'unchecked']);

const mm = (v) => Math.round(v * 10) / 10;

export function printProblems(rep, { t = (k) => k, bed = null } = {}) {
  const problems = [], anchors = new Map();
  if (!rep) return { problems, anchors };
  const one = (r, level) => {
    const id = 'modelcraft.print:' + r.kind;
    const msg = { key: (level === 'fix' ? 'app.print3d.p.' : 'app.print3d.w.') + r.kind, vars: { n: r.n || 0, share: Math.max(1, Math.round((r.share || 0) * 100)), angle: r.angle || 45 } };
    const p = {
      id, code: 'print.' + r.kind, severity: level === 'fix' ? 'error' : NOTES.has(r.kind) ? 'note' : 'warning',
      msg, text: t(msg.key, msg.vars), about: [{ kind: 'print', id: 'job', label: t('problems.print.job') }], source: { name: 'modelcraft.print' },
    };
    if (r.kind === 'overhang' && Number.isFinite(r.share)) { p.req = { op: '<=', value: 1, unit: 'pct' }; p.found = { value: Math.round(r.share * 1000) / 10, unit: 'pct' }; }
    if (r.kind === 'bed' && Array.isArray(r.size) && Array.isArray(r.bed)) {
      p.req = { op: '<=', value: mm(Math.max(...r.bed)), unit: 'mm' }; p.found = { value: mm(Math.max(...r.size)), unit: 'mm' };
    }
    if (level === 'fix' && REPAIRABLE.has(r.kind)) p.fixes = [{ id: 'repair', action: 'repair', text: t('app.prep.fixall') }];
    const at = Array.isArray(r.at) && Array.isArray(r.at[0]) && r.at[0].length === 3 && r.at[0].every(Number.isFinite) ? r.at[0] : null;
    if (at) anchors.set(id, at);
    problems.push(p);
  };
  for (const r of rep.problems || []) one(r, 'fix');
  for (const r of rep.warnings || []) one(r, 'look');
  return { problems, anchors };
}
