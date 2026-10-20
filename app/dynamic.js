/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dynamic.js — components that stretch or repeat their parts (0.4 M26, SketchUp Dynamic Components). DOM-free:
 * bin/test-modelcraft.mjs runs it.
 *
 * A component made of parts (groups or components inside it) can be given a new width, depth and height for one
 * placement. Each part follows a rule per axis (red x, green y, blue z), kept on the part's placement as
 * `inst.rule = {x, y, z, sx, sy, sz}`:
 *   'stretch'  its size grows with the component, its distances to both sides stay (a table top)
 *   'start'    keeps its size and its distance to the start side (a leg at the left end)
 *   'end'      keeps its size and its distance to the end side (a leg at the right end)
 *   'move'     keeps its size; its middle moves in proportion (a handle in the middle of a door, shelves)
 *   'scale'    its place and its size both in proportion, as a plain scale would (the steps of a stair)
 *   'repeat'   copies of it every `s` (sx, sy or sz; default twice its own size), from where it starts to the far
 *              side of the new size: posts of a railing, cabinet fronts
 *   'auto' or none: 'stretch' when it spans the component along that axis, 'move' when it sits about in the
 *              middle, else 'start' or 'end', the side it is nearer to
 *
 *   partsOf(model, def) → [{iid, inst, box}] the parts and their boxes in the component's coordinates
 *   ruleOf(part, k, box) → the rule actually used along axis k (auto worked out)
 *   stretchDef(model, src, size, name) → a new component definition: src's parts placed again for `size` [x, y, z]
 *        (the parts' own definitions stay shared); it remembers `dyn = {src: src.id, size}`, so it can be stretched
 *        again from the original. Call inside model.change.
 */
import { t } from './i18n.js';
import { mmul, translation } from './vec.js';
import { copyOwnGeometry } from './model.js';

const AX = ['x', 'y', 'z'];
const EPS = 1e-6;

export function partsOf(model, def) {
  const out = [];
  for (const [iid, inst] of def.insts) {
    const d = model.def(inst.def);
    const box = d && model.bbox(d, inst.m);
    if (box) out.push({ iid, inst, box });
  }
  return out;
}

/** The component's own box: its parts and its loose geometry. */
function compBox(model, def) {
  return model.bbox(def);
}

export function ruleOf(part, k, B) {
  const r = part.inst.rule?.[AX[k]];
  if (r && r !== 'auto') return r;
  const L = B.max[k] - B.min[k], p0 = part.box.min[k], p1 = part.box.max[k];
  if (L < EPS) return 'start';
  const dS = p0 - B.min[k], dE = B.max[k] - p1;
  if (dS < L * 0.02 + EPS && dE < L * 0.02 + EPS) return 'stretch';   // it spans the component
  if (Math.abs(dS - dE) < L * 0.1) return 'move';                    // about in the middle
  return dS < dE ? 'start' : 'end';                                   // nearer one side
}

/** Scale about point o along axis k by f. */
const scaleAxis = (k, f, o) => {
  const s = [1, 1, 1]; s[k] = f;
  return mmul(translation(o), mmul([s[0], 0, 0, 0, 0, s[1], 0, 0, 0, 0, s[2], 0, 0, 0, 0, 1], translation([-o[0], -o[1], -o[2]])));
};

export function stretchDef(model, src, size, name) {
  if (src.mods) throw new Error(t('app.mods.no_stretch'));
  const B = compBox(model, src);
  if (!B) throw new Error('empty');   // i18n-ignore: callers check first
  const L = [0, 1, 2].map((k) => B.max[k] - B.min[k]);
  const S = size.map((v, k) => (L[k] < EPS ? L[k] : Math.max(v, EPS)));
  const out = model.newDef('component', name);
  // its own loose geometry is kept as it is (draw parts as groups to have them follow)
  copyOwnGeometry(src, out);
  delete out.starter;
  out.dyn = { src: src.id, size: S.slice() };
  for (const part of partsOf(model, src)) {
    // per axis: a transform (scale and/or shift) and, for repeat, the list of offsets
    let m = part.inst.m;
    const offsets = [[0, 0, 0]];
    for (let k = 0; k < 3; k++) {
      if (L[k] < EPS || Math.abs(S[k] - L[k]) < EPS) continue;
      const r = ruleOf(part, k, B), p0 = part.box.min[k], p1 = part.box.max[k], w = p1 - p0, d = S[k] - L[k];
      const shift = (v) => { const t = [0, 0, 0]; t[k] = v; return t; };
      if (r === 'stretch') {
        // its distances to both sides stay: it grows by the whole change
        const f = w > EPS ? (w + d) / w : 1;
        const o = [0, 0, 0]; o[k] = p0;
        m = mmul(scaleAxis(k, Math.max(f, EPS), o), m);
      } else if (r === 'end') m = mmul(translation(shift(d)), m);
      else if (r === 'move') m = mmul(translation(shift(((p0 + p1) / 2 - B.min[k]) * (S[k] / L[k] - 1))), m);
      else if (r === 'scale') { const o = [0, 0, 0]; o[k] = B.min[k]; m = mmul(scaleAxis(k, S[k] / L[k], o), m); }
      else if (r === 'repeat') {
        const step = part.inst.rule?.['s' + AX[k]] > EPS ? part.inst.rule['s' + AX[k]] : Math.max(w * 2, EPS);
        // as many as fit from where it starts to the far side
        const room = S[k] - (p0 - B.min[k]) - w;
        const n = Math.max(1, Math.floor(room / step + 1e-9) + 1);
        const more = [];
        for (const o of offsets) for (let i = 0; i < n; i++) { const q = o.slice(); q[k] += i * step; more.push(q); }
        offsets.splice(0, offsets.length, ...more);
      }
      // 'start': nothing moves
    }
    for (const o of offsets) {
      const iid = model.place(out, part.inst.def, mmul(translation(o), m));
      const ni = out.insts.get(iid);
      for (const key of ['name', 'color', 'hidden', 'tag', 'rule']) if (part.inst[key] !== undefined) ni[key] = JSON.parse(JSON.stringify(part.inst[key]));
    }
  }
  return out;
}
