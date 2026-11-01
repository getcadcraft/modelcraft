/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scale-nu.js — scale by typed factors per axis, and the shrinkage allowance (0.8 SU.934, session model-08). DOM-free; the
 * dialog is scale-dialog.js. The Scale tool's grips already stretch one or two axes by dragging; this is the typed form:
 * a factor for the open group's red, green and blue axis (1.015, 101.5 %, +1.5 %), about a point you choose, on a
 * selection of edges, faces, groups and components — one undo step.
 *
 *   (parseFactor, parseFactors, shrinkFactor live in scale-factors.js, re-exported here)
 *   selectionBox(model, path, sel) the box of what is selected, in the open group's own axes
 *   anchorPoint(box, kind)        'center' · 'min' (the lowest corner) · 'base' (middle of the bottom) · 'origin'
 *   scaleSelection(model, path, sel, fs, anchor, label) → the number of things scaled (0 = nothing selected)
 *
 * A group or component that is turned is scaled along the open group's axes, so it can come out sheared, as in any 4×4
 * transform; its own contents are not touched (a component's other copies stay as they are).
 */
import { mmul, translation } from './vec.js';
import { transformSel } from './model.js';
export { parseFactor, parseFactors, shrinkFactor, SHRINK_MODES } from './scale-factors.js';

const live = (sel) => sel.filter((s) => s.t === 'e' || s.t === 'f' || s.t === 'i');

/** {min, max} of the selected edges, faces and placements in the open group's own axes, or null. */
export function selectionBox(model, path, sel) {
  const ctx = model.context(path);
  if (!ctx) return null;
  const def = ctx.def;
  let bb = null;
  const put = (p) => { if (!bb) bb = { min: p.slice(), max: p.slice() }; for (let i = 0; i < 3; i++) { bb.min[i] = Math.min(bb.min[i], p[i]); bb.max[i] = Math.max(bb.max[i], p[i]); } };
  for (const s of live(sel)) {
    if (s.t === 'e') { const e = def.edges.get(s.id); if (e) { put(def.verts.get(e.a)); put(def.verts.get(e.b)); } }
    else if (s.t === 'f') { const f = def.faces.get(s.id); if (f) for (const l of f.loops) for (const v of l) put(def.verts.get(v)); }
    else { const inst = def.insts.get(s.id), d = inst && model.def(inst.def), ib = d && model.bbox(d, inst.m); if (ib) { put(ib.min); put(ib.max); } }
  }
  return bb;
}

export function anchorPoint(box, kind = 'center') {
  if (kind === 'origin') return [0, 0, 0];
  if (kind === 'min') return box.min.slice();
  if (kind === 'base') return [(box.min[0] + box.max[0]) / 2, (box.min[1] + box.max[1]) / 2, box.min[2]];
  return [0, 1, 2].map((i) => (box.min[i] + box.max[i]) / 2);
}

/** Scale the selection by fs = [fx, fy, fz] about `anchor` (the open group's coordinates): one undo step. */
export function scaleSelection(model, path, sel, fs, anchor, label) {
  const todo = live(sel);
  if (!todo.length) return 0;
  if (!fs.every((f) => f > 0 && Number.isFinite(f))) throw new Error('scale factors must be above 0');   // i18n-ignore: callers check first
  const a = anchor;
  const S = [fs[0], 0, 0, 0, 0, fs[1], 0, 0, 0, 0, fs[2], 0, 0, 0, 0, 1];
  const m4 = mmul(translation(a), mmul(S, translation([-a[0], -a[1], -a[2]])));
  const ctx = model.context(path);
  model.change(label, (m) => transformSel(m.context(path).def, todo, m4), [ctx.def.id]);
  return todo.length;
}
