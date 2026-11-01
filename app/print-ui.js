/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-ui.js — the 3D-print tools' card over ModelCraft's view (0.7 LC.21, session print-07): Supports preview, Wall
 * thickness, Hollow and Repair. Loaded by modelcraft.js on first use (from Check for 3D printing); one card at a time, in
 * the place of the guided first model's card. The work is in DOM-free modules: print-supports.js, print-walls.js,
 * print-hollow.js, print-repair.js; the marks in the view are print-view.js.
 *
 *   mountPrintTools(ctx) → {open(name), close(), current()}
 *   ctx: {root, anchor (the element the card goes after), model, view, cam, host ({path, sel, setSel, openContext}), t, el,
 *         print(msg), settings, change(label, fn) — ModelCraft's undo step, afterHistory(), ask(…)}
 *
 * What it works on is what prints (print-mc.js: the selection, else everything shown), read again whenever the model
 * or the selection changes while the card is open.
 */
import { meshFromTriangles, weld } from './print3d.js';
import { printTriangles } from './print-mc.js';
import { bedSize } from './printprep.js';
import { triMesh } from './print-geom.js';
import { supportPreview } from './print-supports.js';
import { wallThickness } from './print-walls.js';
import { hollowMesh, drainHole } from './print-hollow.js';
import { repairMesh, joinOverlaps } from './print-repair.js';
import { printCheck, meshFromTriangles as meshOf } from './print3d.js';
import { booleanTris, replaceWithPart } from './print-solid.js';
import { manifold } from './solids.js';
import { rayNearest } from './print-geom.js';
import { apply } from './vec.js';
import { PrintOverlay } from './print-view.js';
import { splitTool } from './print-split-ui.js';   // 0.8 SU.929 sx-split

const MM = 1000;

export function mountPrintTools(ctx) {
  const { el, t, model, view } = ctx;
  const overlay = new PrintOverlay(view);
  const card = el('section', { className: 'mc-guide mc-ptool', hidden: true, 'aria-labelledby': 'mc-ptool-h', 'aria-live': 'polite', dataset: { ptool: '' } });
  ctx.anchor.after(card);
  const loc = () => { const l = document.documentElement.lang || 'en'; return l === 'en-XA' ? 'en' : l; };
  const n1 = (v) => (Math.round(v * 10) / 10).toLocaleString(loc());
  const cm2 = (mm2) => n1(mm2 / 100), cm3 = (mm3) => n1(mm3 / 1000);
  let tool = null, sig = '', timer = 0, state = {};

  const choiceSig = () => model.version + '|' + ctx.host.path.join('/') + '|' + ctx.host.sel.map((s) => s.t + s.id).join(',');
  function source() {
    const { tris, what } = printTriangles(model, { path: ctx.host.path, sel: ctx.host.sel });
    const mesh = weld(meshFromTriangles(tris), 1e-4);
    return { mesh, what, T: mesh.indices.length ? triMesh(mesh) : null };
  }
  const toM = (a) => { const f = new Float32Array(a.length); for (let i = 0; i < a.length; i++) f[i] = a[i] / MM; return f; };
  const trisOf = (mesh, list) => {
    const P = mesh.positions, I = mesh.indices, out = new Float32Array(list.length * 9);
    let o = 0;
    for (const t of list) for (let k = 0; k < 3; k++) { const v = I[t * 3 + k] * 3; out[o++] = P[v] / MM; out[o++] = P[v + 1] / MM; out[o++] = P[v + 2] / MM; }
    return out;
  };
  /** The bed from Settings › 3D printer, centred under the model, at its lowest point. */
  function bedLines(T, z) {
    const b = bedSize(ctx.settings.bed);
    if (!b || !T) return null;
    const cx = (T.lo[0] + T.hi[0]) / 2, cy = (T.lo[1] + T.hi[1]) / 2, x0 = cx - b[0] / 2, x1 = cx + b[0] / 2, y0 = cy - b[1] / 2, y1 = cy + b[1] / 2;
    return toM([x0, y0, z, x1, y0, z, x1, y0, z, x1, y1, z, x1, y1, z, x0, y1, z, x0, y1, z, x0, y0, z]);
  }

  // ---- the card ----
  function head(name) {
    return [
      el('div', { className: 'mc-guide-top' },
        el('p', { className: 'mc-guide-step' }, t('app.ptool.eyebrow')),
        el('button', { type: 'button', className: 'mc-linkbtn', dataset: { ptoolClose: '' }, title: t('app.ptool.close'), 'aria-label': t('app.ptool.close'), onclick: () => close() }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
      el('h2', { className: 'mc-guide-h', id: 'mc-ptool-h' }, t('app.ptool.' + name + '.h')),
    ];
  }
  const radio = (name, value, label, on, fn) => el('label', { className: 'mc-ptool-opt' },
    el('input', { type: 'radio', name: 'mcPtool-' + name, value, checked: on, onchange: fn }), ' ', label);
  const number = (name, label, value, min, max, step, fn) => el('label', { className: 'mc-ptool-num' }, label, ' ',
    el('input', { type: 'number', className: 'mc-input', name: 'mcPtool-' + name, value: String(value), min: String(min), max: String(max), step: String(step), dataset: { ptoolInput: name },
      onchange: (e) => { const v = Number(e.target.value); if (Number.isFinite(v) && v >= min && v <= max) fn(v); else e.target.value = String(value); } }));

  // Supports preview (item 1)
  state.supports = { angle: 45, style: 'columns' };
  function runSupports() {
    const s = state.supports, src = source();
    if (!src.T) { overlay.clear(); return { empty: true }; }
    const r = supportPreview(src.mesh, { angle: s.angle, style: s.style, T: src.T });
    overlay.set('overhang', r.overhang.length ? { tris: trisOf(src.mesh, r.overhang), color: overlay.token('--layer-red', '#b3122e'), opacity: 0.55 } : null);
    overlay.set('supports', r.segs.length ? { lines: toM(r.segs), color: overlay.token('--layer-ochre', '#a8641a') } : null);
    overlay.set('bed', bedLines(src.T, r.bedZ) ? { lines: bedLines(src.T, r.bedZ), color: overlay.token('--ink-2', '#34404e'), dashed: true } : null);
    return { r, what: src.what };
  }
  function drawSupports(res) {
    const s = state.supports;
    const body = res.empty ? [el('p', { dataset: { ptoolResult: 'empty' } }, t('app.ptool.empty'))] : [
      el('p', { dataset: { ptoolResult: res.r.overhang.length ? 'needs' : 'none' } }, res.r.overhang.length
        ? t('app.ptool.supports.result', { area: cm2(res.r.overhangArea), n: res.r.points, v: cm3(res.r.volume) })
        : t('app.ptool.supports.none', { angle: s.angle })),
      res.r.toModel ? el('p', { className: 'mc-note' }, t('app.ptool.supports.on_model', { n: res.r.toModel })) : null,
      res.r.spacing > 3 + 1e-9 ? el('p', { className: 'mc-note' }, t('app.ptool.supports.wide', { s: n1(res.r.spacing) })) : null,
      el('p', { className: 'mc-note' }, t(res.what === 'selection' ? 'app.print3d.what.sel' : 'app.print3d.what.all')),
    ];
    card.replaceChildren(...[...head('supports'),
      el('div', { className: 'mc-ptool-row' }, number('angle', t('app.ptool.supports.angle'), s.angle, 10, 80, 5, (v) => { s.angle = v; soon(); })),
      el('fieldset', { className: 'mc-ptool-row' }, el('legend', {}, t('app.ptool.supports.style')),
        radio('style', 'columns', t('app.ptool.supports.columns'), s.style === 'columns', () => { s.style = 'columns'; soon(); }),
        radio('style', 'tree', t('app.ptool.supports.tree'), s.style === 'tree', () => { s.style = 'tree'; soon(); })),
      ...body,
      el('p', { className: 'mc-note' }, t(s.style === 'tree' ? 'app.ptool.supports.est.tree' : 'app.ptool.supports.est.columns')),
      el('p', { className: 'mc-note' }, t('app.ptool.supports.slicer'))].filter(Boolean));
  }

  // Wall thickness (item 3)
  state.walls = { min: 0.8 };
  function runWalls() {
    const s = state.walls, src = source();
    if (!src.T) { overlay.clear(); return { empty: true }; }
    const r = wallThickness(src.mesh, { min: s.min, T: src.T });
    const near = [];
    for (let i = 0; i < r.values.length; i++) if (r.values[i] >= s.min && r.values[i] < s.min * 1.5) near.push(i);
    overlay.set('thin', r.thin.length ? { tris: trisOf(src.mesh, r.thin), color: overlay.token('--layer-red', '#b3122e'), opacity: 0.7 } : null);
    overlay.set('near', near.length ? { tris: trisOf(src.mesh, near), color: overlay.token('--layer-ochre', '#a8641a'), opacity: 0.45 } : null);
    return { r, what: src.what, near: near.length };
  }
  function drawWalls(res) {
    const s = state.walls, r = res.r;
    const show = (g) => {
      const pad = Math.max(...g.hi.map((v, k) => v - g.lo[k]), 2) * 1.5;
      ctx.cam.fit({ min: g.lo.map((v) => (v - pad) / MM), max: g.hi.map((v) => (v + pad) / MM) });
      view.invalidate();
    };
    const body = res.empty ? [el('p', { dataset: { ptoolResult: 'empty' } }, t('app.ptool.empty'))] : [
      el('p', { dataset: { ptoolResult: r.thin.length ? 'thin' : 'fine' } }, r.thin.length
        ? t('app.ptool.walls.thin', { n: r.regions.length, w: n1(r.thinnest), area: cm2(r.thinArea) })
        : Number.isFinite(r.thinnest) ? t('app.ptool.walls.fine', { min: n1(s.min), w: n1(r.thinnest) }) : t('app.ptool.walls.none')),
      r.regions.length ? el('ol', { className: 'mc-ptool-list', dataset: { ptoolRegions: '' } }, ...r.regions.slice(0, 8).map((g) => el('li', {},
        t('app.ptool.walls.region', { w: n1(g.thinnest), area: n1(g.area) }), ' ',
        el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => show(g) }, t('app.prep.show'))))) : null,
      r.regions.length > 8 ? el('p', { className: 'mc-note' }, t('app.ptool.walls.more', { n: r.regions.length - 8 })) : null,
      res.near ? el('p', { className: 'mc-note' }, t('app.ptool.walls.near', { max: n1(s.min * 1.5) })) : null,
      r.decimated ? el('p', { className: 'mc-note' }, t('app.ptool.walls.decimated', { n: r.rays, all: r.values.length })) : null,
      el('p', { className: 'mc-note' }, t(res.what === 'selection' ? 'app.print3d.what.sel' : 'app.print3d.what.all')),
    ];
    card.replaceChildren(...[...head('walls'),
      el('div', { className: 'mc-ptool-row' }, number('min', t('app.ptool.walls.min'), s.min, 0.2, 10, 0.1, (v) => { s.min = v; soon(); })),
      ...body,
      el('p', { className: 'mc-note' }, t('app.ptool.walls.how'))].filter(Boolean));
  }

  // Hollow (item 4): one closed placement, a wall, drain holes placed by clicking the outside
  state.hollow = { wall: 2, d: 3, holes: [], placing: false, preview: null, sig: '' };
  const selectedOne = () => {
    const c = model.context(ctx.host.path) || model.context([]);
    const ii = ctx.host.sel.filter((x) => x.t === 'i' && c.def.insts.has(x.id));
    return ii.length === 1 ? ii[0].id : null;
  };
  function runHollow() {
    const s = state.hollow, iid = selectedOne();
    if (!iid) { overlay.clear(); s.holes = []; s.preview = null; return { none: true }; }
    const { tris } = printTriangles(model, { path: ctx.host.path, sel: [{ t: 'i', id: iid }] });
    const mesh = weld(meshFromTriangles(tris), 1e-4), T = mesh.indices.length ? triMesh(mesh) : null;
    const chk = T ? printCheck(mesh) : null;
    const key = sig.replace(/\|[^|]*$/, '') + '|' + iid;   // a different model or part: its holes and preview go
    if (key !== s.sig) { s.sig = key; s.holes = []; s.preview = null; }
    s.src = { iid, mesh, T, ok: !!chk?.ok, volume: chk?.volume || 0 };
    markHoles();
    return { s };
  }
  function markHoles() {
    const s = state.hollow, L = [];
    for (const h of s.holes) {
      const n = h.n, a = Math.abs(n[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0];
      let u = [n[1] * a[2] - n[2] * a[1], n[2] * a[0] - n[0] * a[2], n[0] * a[1] - n[1] * a[0]];
      const l = Math.hypot(...u); u = u.map((x) => x / l);
      const w = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]], r = s.d / 2;
      const pt = (an) => h.p.map((x, k) => x + n[k] * 0.05 + r * (Math.cos(an) * u[k] + Math.sin(an) * w[k]));
      for (let i = 0; i < 24; i++) L.push(...pt(2 * Math.PI * i / 24), ...pt(2 * Math.PI * (i + 1) / 24));
    }
    overlay.set('holes', L.length ? { lines: toM(L), color: overlay.token('--layer-blue', '#1e48c8') } : null);
  }
  // picking a drain hole's place: the next click on the model's outside (the tools never see it)
  const pickHole = (e) => {
    const s = state.hollow;
    if (!s.placing || tool !== 'hollow' || e.target !== ctx.over) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (e.type !== 'pointerdown') return;
    const r = ctx.over.getBoundingClientRect(), ray = ctx.cam.ray(e.clientX - r.left, e.clientY - r.top), T = s.src?.T;
    s.placing = false;
    const hit = { tri: -1, back: 0 };
    const d = T ? rayNearest(T, ray.o[0] * MM, ray.o[1] * MM, ray.o[2] * MM, ray.d[0], ray.d[1], ray.d[2], 0, Infinity, -1, hit) : -1;
    if (d < 0 || hit.back) { ctx.print(t('app.ptool.hollow.miss')); soon(); return; }
    const p = [0, 1, 2].map((k) => ray.o[k] * MM + ray.d[k] * d);
    s.holes.push({ tri: hit.tri, p, n: [T.N[hit.tri * 3], T.N[hit.tri * 3 + 1], T.N[hit.tri * 3 + 2]] });
    s.preview = null;
    ctx.print(t('app.ptool.hollow.placed', { n: s.holes.length }));
    soon();
  };
  for (const type of ['pointerdown', 'pointerup', 'click']) window.addEventListener(type, pickHole, true);
  async function doHollow(applyIt) {
    const s = state.hollow, src = s.src;
    if (!src?.ok) return;
    ctx.print(t('app.ptool.hollow.working'));
    await new Promise((res) => setTimeout(res, 30));
    const r = hollowMesh(src.mesh, { wall: s.wall, T: src.T });
    s.preview = { method: r.method, why: r.why, cell: r.cell, cavity: r.cavityVolume, volume: r.volume };
    if (!applyIt || !r.cavity) { ctx.print(r.cavity ? t('app.ptool.hollow.previewed') : t('app.ptool.hollow.nothing', { wall: n1(s.wall) })); soon(); return; }
    // the drain holes, cut through the wall into the hollow
    let tris = [];
    for (let t3 = 0; t3 < r.indices.length; t3 += 3) tris.push([0, 1, 2].map((k) => { const v = r.indices[t3 + k] * 3; return [r.positions[v], r.positions[v + 1], r.positions[v + 2]]; }));
    if (s.holes.length) {
      const Th = triMesh({ positions: r.positions, indices: r.indices });
      const cyl = [];
      for (const h of s.holes) { const c = drainHole(Th, h, { d: s.d, wall: s.wall }); if (c) cyl.push(c); }
      try { tris = booleanTris(await manifold(), [tris], cyl, 'subtract'); }
      catch (err) { ctx.print(t('app.ptool.hollow.failed', { error: err.message })); return; }
    }
    // never put back a body the 3D-print check would refuse
    const chk = printCheck(meshOf(tris.map((p) => ({ p }))));
    if (!chk.ok) { ctx.print(t('app.ptool.hollow.refused', { list: chk.problems.map((q) => q.kind).join(', ') })); return; }
    putBack(src.iid, tris, t('app.ptool.hollow.undo'), t('app.ptool.hollow.done', { v: cm3(r.cavityVolume), n: s.holes.length }));
    s.holes = []; s.preview = null;
    soon();
  }
  function drawHollow(res) {
    const s = state.hollow;
    const body = [];
    if (res.none) body.push(el('p', { dataset: { ptoolResult: 'none' } }, t('app.ptool.hollow.pick')));
    else if (!s.src.ok) body.push(el('p', { dataset: { ptoolResult: 'open' } }, t('app.ptool.hollow.notclosed')));
    else {
      body.push(el('div', { className: 'mc-ptool-row' }, number('wall', t('app.ptool.hollow.wall'), s.wall, 0.4, 20, 0.1, (v) => { s.wall = v; s.preview = null; soon(); }),
        number('d', t('app.ptool.hollow.d'), s.d, 1, 20, 0.5, (v) => { s.d = v; markHoles(); soon(); })));
      body.push(el('p', { dataset: { ptoolResult: s.preview ? 'preview' : 'ready' } }, s.preview
        ? (s.preview.cavity ? t('app.ptool.hollow.result', { v: cm3(s.preview.cavity), of: cm3(s.preview.volume), pct: Math.round(100 * s.preview.cavity / s.preview.volume) }) : t('app.ptool.hollow.nothing', { wall: n1(s.wall) }))
        : t('app.ptool.hollow.ready', { of: cm3(s.src.volume) })));
      if (s.preview?.cavity) body.push(el('p', { className: 'mc-note' }, s.preview.method === 'offset' ? t('app.ptool.hollow.exact') : t('app.ptool.hollow.field', { cell: n1(s.preview.cell) })));
      body.push(el('p', {}, s.holes.length ? t('app.ptool.hollow.holes', { n: s.holes.length }) : t('app.ptool.hollow.noholes')));
      if (s.holes.length) body.push(el('ol', { className: 'mc-ptool-list', dataset: { ptoolHoles: '' } }, ...s.holes.map((h, i) => el('li', {}, t('app.ptool.hollow.hole', { x: n1(h.p[0]), y: n1(h.p[1]), z: n1(h.p[2]) }), ' ',
        el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { s.holes.splice(i, 1); markHoles(); soon(); } }, t('app.ptool.hollow.remove'))))));
      body.push(el('div', { className: 'mc-actions' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { ptoolAct: 'hole' }, 'aria-pressed': String(s.placing), onclick: () => { s.placing = !s.placing; ctx.print(s.placing ? t('app.ptool.hollow.click') : ''); soon(); } }, t(s.placing ? 'app.ptool.hollow.placing' : 'app.ptool.hollow.place')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { ptoolAct: 'preview' }, onclick: () => doHollow(false) }, t('app.ptool.hollow.preview')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { ptoolAct: 'apply' }, onclick: () => doHollow(true) }, t('app.ptool.hollow.apply'))));
      body.push(el('p', { className: 'mc-note' }, t('app.ptool.hollow.how')));
    }
    card.replaceChildren(...[...head('hollow'), ...body].filter(Boolean));
  }

  // Repair (item 5): the safe fixes made and listed, the rest listed with where
  const putBack = (iid, tris, label, msg) => {
    const c = model.context(ctx.host.path) || model.context([]), inst = c.def.insts.get(iid), d0 = model.def(inst.def);
    const local = tris.map((tri) => tri.map((p) => apply(c.inv, p.map((x) => x / MM))));
    const paint = inst.color || [...(d0?.faces?.values?.() || [])].find((f) => f.color)?.color || null;
    // a solid group of faces when the kernel holds it closed, else a mesh (print-solid.js replaceWithPart)
    const r = replaceWithPart(model, ctx.host.path, [iid], local, { label, name: model.uniqueName((d0?.name || '').replace(/\s*#\d+$/, '') || t('app.ptool.repair.h')), color: paint, tag: inst.tag });
    ctx.afterHistory();
    ctx.host.setSel([{ t: 'i', id: r.iid }]);
    ctx.print(msg + ' ' + t(r.solid ? 'app.ptool.result.solid' : r.why === 'size' ? 'app.ptool.result.mesh_size' : 'app.ptool.result.mesh_open'));
  };
  function runRepair() {
    const iid = selectedOne();
    if (!iid) { overlay.clear(); return { none: true }; }
    const { tris } = printTriangles(model, { path: ctx.host.path, sel: [{ t: 'i', id: iid }] });
    const mesh = weld(meshFromTriangles(tris), 1e-4);
    if (!mesh.indices.length) { overlay.clear(); return { none: true }; }
    const r = repairMesh(mesh);
    // where the problems left are: a small cross each
    const L = [], k = Math.max(0.5, Math.max(...triMesh(mesh).size) / 60);
    for (const l of r.left) for (const p of l.at || []) L.push(p[0] - k, p[1], p[2], p[0] + k, p[1], p[2], p[0], p[1] - k, p[2], p[0], p[1] + k, p[2], p[0], p[1], p[2] - k, p[0], p[1], p[2] + k);
    overlay.set('left', L.length ? { lines: toM(L), color: overlay.token('--layer-magenta', '#a3237a') } : null);
    return { iid, r };
  }
  function drawRepair(res) {
    const body = [];
    if (res.none) body.push(el('p', { dataset: { ptoolResult: 'none' } }, t('app.ptool.repair.pick')));
    else {
      const r = res.r;
      body.push(el('p', { dataset: { ptoolResult: r.fixed.length ? 'fixable' : r.left.length ? 'left' : 'clean' } }, t(r.fixed.length ? 'app.ptool.repair.fixable' : r.left.length ? 'app.ptool.repair.onlyleft' : 'app.ptool.repair.clean')));
      if (r.fixed.length) body.push(el('ul', { className: 'mc-ptool-list', dataset: { ptoolFixes: '' } }, ...r.fixed.map((f) => el('li', { dataset: { kind: f.kind } }, t('app.ptool.repair.fix.' + f.kind, { n: f.n })))));
      if (r.left.length) {
        body.push(el('p', {}, t('app.ptool.repair.left_h')));
        body.push(el('ul', { className: 'mc-ptool-list', dataset: { ptoolLeft: '' } }, ...r.left.map((l) => el('li', { dataset: { kind: l.kind } }, t('app.ptool.repair.left.' + l.kind, { n: l.n }), ' ',
          l.at?.length ? el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => {
            const lo = [0, 1, 2].map((q) => Math.min(...l.at.map((p) => p[q]))), hi = [0, 1, 2].map((q) => Math.max(...l.at.map((p) => p[q]))), pad = Math.max(5, ...hi.map((v, q) => v - lo[q]));
            ctx.cam.fit({ min: lo.map((v) => (v - pad) / MM), max: hi.map((v) => (v + pad) / MM) }); view.invalidate();
          } }, t('app.prep.show')) : null))));
      }
      const acts = [];
      if (r.fixed.length) acts.push(el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { ptoolAct: 'fix' }, onclick: () => {
        const tris = [];
        for (let q = 0; q < r.indices.length; q += 3) tris.push([0, 1, 2].map((k) => { const v = r.indices[q + k] * 3; return [r.positions[v], r.positions[v + 1], r.positions[v + 2]]; }));
        putBack(res.iid, tris, t('app.ptool.repair.undo'), t('app.ptool.repair.done', { list: r.fixed.map((f) => t('app.ptool.repair.fix.' + f.kind, { n: f.n })).join(' ') }));
        soon();
      } }, t('app.ptool.repair.fixit')));
      if (r.left.some((l) => l.kind === 'overlap') && !r.left.some((l) => l.kind !== 'overlap')) acts.push(el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { ptoolAct: 'join' }, onclick: async () => {
        try { putBack(res.iid, joinOverlaps(await manifold(), r), t('app.ptool.repair.undo_join'), t('app.ptool.repair.joined')); }
        catch (err) { ctx.print(t('app.ptool.repair.join_failed', { error: err.message })); }
        soon();
      } }, t('app.ptool.repair.join')));
      if (acts.length) body.push(el('div', { className: 'mc-actions' }, ...acts));
      body.push(el('p', { className: 'mc-note' }, t('app.ptool.repair.how')));
    }
    card.replaceChildren(...[...head('repair'), ...body].filter(Boolean));
  }

  const TOOLS = { supports: { run: runSupports, draw: drawSupports }, walls: { run: runWalls, draw: drawWalls }, hollow: { run: runHollow, draw: drawHollow }, repair: { run: runRepair, draw: drawRepair } };
  TOOLS.split = splitTool({ ctx, card, overlay, el, t, number, radio, soon: () => soon(), close: () => close(), toM, active: () => tool === 'split' });   // 0.8 SU.929 sx-split

  // a field's change redraws the card after the event (removing the field inside its own change/blur event throws)
  let soonT = 0;
  const soon = () => { clearTimeout(soonT); soonT = setTimeout(() => refresh(true), 0); };
  function refresh(force) {
    if (!tool) return;
    const now = choiceSig();
    if (!force && now === sig) return;
    sig = now;
    const res = TOOLS[tool].run();
    const had = card.contains(document.activeElement) ? document.activeElement.getAttribute('name') : null;
    TOOLS[tool].draw(res);
    if (had) card.querySelector('[name="' + had + '"]')?.focus({ preventScroll: true });   // a redraw keeps the field being used
  }
  function open(name) {
    if (!TOOLS[name]) return;
    if (tool !== name) overlay.clear();
    ctx.closeGuide?.();
    tool = name; card.hidden = false; card.dataset.ptool = name;
    refresh(true);
    clearInterval(timer);
    timer = setInterval(() => refresh(false), 500);
    card.querySelector('input,button')?.focus({ preventScroll: true });
  }
  function close() {
    state.hollow.placing = false;
    tool = null; card.hidden = true; clearInterval(timer); timer = 0; sig = '';
    overlay.clear();
    ctx.focusView?.();
  }
  return { open, close, current: () => tool, overlay };
}
