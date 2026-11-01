/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh/mod-panel.js — the Modifiers section of a mesh's panel (0.7 MD.3): the stack in order, each with on / show in view /
 * show in renders, up, down, Apply and Remove, and its settings; a list to add one. Markup through `el` (ui-util.js), words
 * through `t`; every change is one undo step through `ctx.change(label, fn(def))` (the definition's `mods`), Apply through
 * `ctx.apply(index)`. Shown in the Mesh workspace's panel and in Model's Entity info for a mesh.
 *
 *   modPanel(ctx) → element      ctx = {def, model, el, t, units, formatLength, parseLength, change(label, fn), apply(i), addLattice(i), print}
 *
 * The same panel serves a group's or component's stack (0.8 GH.2, group-mods.js): ctx.group = {types (what can be added), list(def)
 * (the items), write(def, next) (put them back), apply() (Bake), actions [elements] (Edit source, Bake)}. There the per-item
 * view / render / Apply buttons are left out (the stack is one thing, not a mesh with passes), and the add list is `types`.
 */
import { MOD_TYPES, newMod } from './modifiers.js';

// 0.8 GH.2 scale: a factor for each axis, written like the other vectors
const SCALE = [['factors', 'vec']];

/**
 * Renders read a mesh's `rendered` (render levels, the limit surface, modifiers shown only in renders) once `render`'s
 * adapter (render-mc.js) takes it instead of the view's faces — asked 2026-10-22. Until then the render-only controls are
 * left out, so the panel promises nothing renders do not do. Turn on with that change.
 */
export const RENDER_READS_MODS = true;   // render-mc.js reads def.rendered since 2026-10-23 (`materials`, owner's grant)

// each type's settings: [param, kind, extra]; kinds: bool, int [min, max], num [min, max], len, select [options], vec, lenvec, object, curve, lattice
const FIELDS = {
  scale: SCALE,
  mirror: [['x', 'bool'], ['y', 'bool'], ['z', 'bool'], ['merge', 'bool'], ['dist', 'len']],
  array: [['mode', 'select', ['linear', 'radial', 'curve']], ['count', 'int', [1, 1000]], ['rel', 'vec'], ['abs', 'lenvec'], ['axis', 'select', ['x', 'y', 'z']], ['angle', 'num', [-3600, 3600]], ['curve', 'curve'], ['merge', 'bool'], ['dist', 'len']],
  subsurf: [['levels', 'int', [0, 6]], ['renderLevels', 'int', [0, 6]], ['adaptive', 'bool'], ['limit', 'bool']],
  bevel: [['width', 'len'], ['segments', 'int', [1, 32]], ['profile', 'num', [0, 1]], ['angle', 'num', [0, 180]]],
  solidify: [['thickness', 'len'], ['offset', 'num', [-1, 1]], ['rim', 'bool']],
  boolean: [['op', 'select', ['difference', 'union', 'intersect']], ['target', 'object']],
  displace: [['strength', 'len'], ['scale', 'len'], ['seed', 'int', [0, 1e6]], ['dir', 'select', ['normal', 'x', 'y', 'z']]],
  weld: [['dist', 'len']],
  decimate: [['ratio', 'num', [0.001, 1]]],
  smooth: [['factor', 'num', [-2, 2]], ['repeat', 'int', [1, 200]]],
  lattice: [['cage', 'lattice']],
  curve: [['curve', 'curve'], ['axis', 'select', ['x', 'y', 'z']]],
  shrinkwrap: [['target', 'object'], ['offset', 'len']],
};
/** Which settings matter for an array in its mode. */
const SHOWS = { array: (p, k) => (p.mode === 'radial' ? ['mode', 'count', 'axis', 'angle', 'merge', 'dist'] : p.mode === 'curve' ? ['mode', 'count', 'rel', 'abs', 'curve', 'merge', 'dist'] : ['mode', 'count', 'rel', 'abs', 'merge', 'dist']).includes(k) };

/** Things a modifier can refer to: placed definitions other than def (objects), curves in them, lattice cages. */
function candidates(model, def, t) {
  const placed = new Set();
  model.walk((d) => { placed.add(d.id); });
  const objects = [], curves = [], lattices = [];
  for (const d of model.defs.values()) {
    if (d.id === 'root' || d === def || !placed.has(d.id)) continue;
    if (d.lattice) { lattices.push([d.id, d.name]); continue; }
    objects.push([d.id, d.name]);
    if (!d.mesh) {
      const seen = new Set();
      for (const e of d.edges.values()) if (e.curve && !seen.has(e.curve)) { seen.add(e.curve); curves.push([d.id + '/' + e.curve, d.name + ' › ' + t('app.mod.curve.' + e.curve.split(':')[0]) + ' ' + e.curve.split(':')[1]]); }
    }
  }
  // curves drawn loose in the model itself
  const seen = new Set();
  for (const e of model.root.edges.values()) if (e.curve && !seen.has(e.curve)) { seen.add(e.curve); curves.push(['root/' + e.curve, t('app.mod.curve.model') + ' › ' + t('app.mod.curve.' + e.curve.split(':')[0]) + ' ' + e.curve.split(':')[1]]); }
  return { objects, curves, lattices };
}

export function modPanel(ctx) {
  const { def, el, t } = ctx;
  const G = ctx.group || null;
  const mods = G ? G.list(def) : def.mods;
  const box = el('section', { className: 'mc-mods', dataset: { mods: def.id } }, el('h3', { className: 'mc-h' }, t('app.mod.h')));
  const set = (label, fn) => ctx.change(label, (d) => { const next = structuredClone(G ? G.list(d) : d.mods); fn(next); if (G) G.write(d, next); else d.mods = next; });
  const cand = candidates(ctx.model, def, t);
  mods.forEach((m, i) => {
    const id = 'mc-mod-' + i;
    const head = el('div', { className: 'mc-mod-head' },
      el('input', { type: 'checkbox', id: id + '-on', checked: m.on, title: t('app.mod.on'), onchange: (e) => set(t('app.mod.undo.toggle'), (L) => { L[i].on = e.target.checked; }) }),
      el('label', { for: id + '-on', className: 'mc-mod-name' }, m.name || t('app.mod.type.' + m.type)),
      G ? null : el('button', { type: 'button', className: 'mc-linkbtn', title: t('app.mod.view'), 'aria-pressed': String(m.view), onclick: () => set(t('app.mod.undo.toggle'), (L) => { L[i].view = !L[i].view; }) }, el('i', { className: 'bi bi-display', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('app.mod.view'))),
      RENDER_READS_MODS && !G ? el('button', { type: 'button', className: 'mc-linkbtn', title: t('app.mod.render'), 'aria-pressed': String(m.render), onclick: () => set(t('app.mod.undo.toggle'), (L) => { L[i].render = !L[i].render; }) }, el('i', { className: 'bi bi-camera', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('app.mod.render'))) : null,
      el('button', { type: 'button', className: 'mc-linkbtn', title: t('app.mod.up'), disabled: i === 0, onclick: () => set(t('app.mod.undo.move'), (L) => { [L[i - 1], L[i]] = [L[i], L[i - 1]]; }) }, el('i', { className: 'bi bi-arrow-up', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('app.mod.up'))),
      el('button', { type: 'button', className: 'mc-linkbtn', title: t('app.mod.down'), disabled: i === mods.length - 1, onclick: () => set(t('app.mod.undo.move'), (L) => { [L[i + 1], L[i]] = [L[i], L[i + 1]]; }) }, el('i', { className: 'bi bi-arrow-down', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('app.mod.down'))),
      G ? null : el('button', { type: 'button', className: 'mc-linkbtn', dataset: { modApply: String(i) }, title: t('app.mod.apply.title'), onclick: () => ctx.apply(i) }, t('app.mod.apply')),
      el('button', { type: 'button', className: 'mc-linkbtn', dataset: { modRemove: String(i) }, title: t('app.mod.remove'), onclick: () => set(t('app.mod.undo.remove'), (L) => { L.splice(i, 1); }) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('app.mod.remove'))));
    const props = el('div', { className: 'mc-props mc-mod-props' });
    for (const [k, kind, extra] of FIELDS[m.type]) {
      if (SHOWS[m.type] && !SHOWS[m.type](m.params, k)) continue;
      if (!RENDER_READS_MODS && (k === 'renderLevels' || k === 'limit')) continue;
      const fid = id + '-' + k, label = el('label', { for: fid, className: 'k' }, t('app.mod.p.' + k.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())));
      const put = (v) => set(t('app.mod.undo.change'), (L) => { L[i].params[k] = v; });
      let input;
      const v = m.params[k];
      if (kind === 'bool') input = el('input', { type: 'checkbox', id: fid, checked: !!v, onchange: (e) => put(e.target.checked) });
      else if (kind === 'select' || kind === 'object' || kind === 'curve' || kind === 'lattice') {
        const opts = kind === 'select' ? extra.map((o) => [o, t('app.mod.o.' + o)]) : [['', t('app.mod.o.none')], ...(kind === 'object' ? cand.objects : kind === 'curve' ? cand.curves : cand.lattices)];
        input = el('select', { id: fid, className: 'mc-select', onchange: (e) => put(e.target.value) }, ...opts.map(([val, lab]) => el('option', { value: val }, lab)));
        input.value = v ?? '';
      } else if (kind === 'vec' || kind === 'lenvec') {
        input = el('input', { type: 'text', id: fid, className: 'mc-input', value: v.map((x) => (kind === 'lenvec' ? ctx.formatLength(x, ctx.units) : String(x))).join(', '), spellcheck: false });
        input.addEventListener('change', () => {
          const parts = input.value.split(/[,;]/).map((x) => (kind === 'lenvec' ? ctx.parseLength(x.trim(), ctx.units) : Number(x)));
          if (parts.length !== 3 || parts.some((x) => x === null || !Number.isFinite(x))) { ctx.print(t('app.mod.bad.vec')); return; }
          put(parts);
        });
      } else {
        input = el('input', { type: 'text', id: fid, className: 'mc-input', value: kind === 'len' ? ctx.formatLength(v, ctx.units) : String(v), spellcheck: false });
        input.addEventListener('change', () => {
          let x = kind === 'len' ? ctx.parseLength(input.value, ctx.units) : Number(input.value);
          if (kind === 'int') x = Math.round(x);
          if (x === null || !Number.isFinite(x) || (extra && (x < extra[0] || x > extra[1]))) { ctx.print(extra ? t('app.mod.bad.range', { min: extra[0], max: extra[1] }) : t('app.mod.bad.num')); return; }
          put(x);
        });
      }
      props.append(label, el('span', { className: 'v' }, input));
    }
    const lowered = ctx.info?.[i]?.level;
    if (lowered !== undefined) props.append(el('p', { className: 'mc-note', dataset: { modLevel: String(lowered) } }, t('app.mod.info.level', { n: lowered, of: m.params.levels })));
    const extraRow = m.type === 'lattice' ? el('button', { type: 'button', className: 'mc-linkbtn', dataset: { modLattice: String(i) }, onclick: () => ctx.addLattice(i) }, t('app.mod.lattice.add')) : null;
    box.append(el('div', { className: 'mc-mod', dataset: { modType: m.type } }, head, props, extraRow));
  });
  const add = el('select', { className: 'mc-select', id: 'mc-mod-add', dataset: { modAdd: '' }, 'aria-label': t('app.mod.add') },
    el('option', { value: '' }, t('app.mod.add')), ...(G ? G.types : MOD_TYPES).map((k) => el('option', { value: k }, t('app.mod.type.' + k))));
  add.addEventListener('change', () => { const k = add.value; if (!k) return; set(t('app.mod.undo.add'), (L) => { L.push(newMod(k)); }); });
  if (mods.length >= 32) add.disabled = true;
  box.append(add);
  if (G?.actions?.length) box.append(el('div', { className: 'mc-actions' }, ...G.actions));
  if (!mods.length) box.append(el('p', { className: 'mc-note' }, t('app.mod.none')));
  else if (G) box.append(el('p', { className: 'mc-note' }, t('app.gmod.note')));
  return box;
}
