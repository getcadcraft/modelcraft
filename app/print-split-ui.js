/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-split-ui.js — Split for printing, the card (0.8 SU.929, session sx-split). One more tool in print-ui.js's card
 * (Check for 3D printing › Print tools › Split for printing); the work is in print-split.js (DOM-free) and
 * print-split-mc.js (the pieces into the model, one undo step).
 *
 *   splitTool(h) → {run, draw}: print-ui.js's tool shape. h = {ctx, card, overlay, el, t, number, radio, soon, close, toM, active}
 *
 * Connectors by hand (0.8 SU.929 rest, model-08): after a preview, Move / Add / Remove / Automatic under the result. A click in
 * the view (captured here, like print-ui.js's drain holes) picks the nearest connector ring, or finds where the ray crosses the
 * cut plane between two pieces; the places go to the core's `opts.place` ('a-b' → [[x, y, z] …], world mm), which checks every
 * one again and reports a spot that doesn't fit (a note) instead of making it. Places are kept until the model, the selection
 * or the cuts change.
 *
 * run() is cheap (what prints, its size, the grid it would need); the split itself runs on Preview, Download or Split the
 * model, and a preview is kept until the model, the selection or a setting changes. Download works on whatever prints;
 * Split the model needs the groups or components to split selected.
 */
import { meshFromTriangles, weld, printCheck } from './print3d.js';
import { printTriangles } from './print-mc.js';
import { bedSize } from './printprep.js';
import { manifold } from './solids.js';
import { apply } from './vec.js';
import { SPLIT_DEFAULTS, CONNECTORS, gridForBed, splitForPrint, splitFiles, assemblySheet } from './print-split.js';
import { zipStored } from './print3d.js';
import { placePieces } from './print-split-mc.js';

const MM = 1000;
/** The normal of a cut across `axis`, slanted `deg` degrees by turning it about the axis `about` (0 = straight across). */
export function slantNormal(axis, about, deg) {
  const n = [0, 0, 0]; n[axis] = 1;
  if (!deg || about === axis) return n;
  const e = [0, 0, 0]; e[about] = 1;
  const x = [e[1] * n[2] - e[2] * n[1], e[2] * n[0] - e[0] * n[2], e[0] * n[1] - e[1] * n[0]], r = (deg * Math.PI) / 180;   // about × axis
  return n.map((v, i) => v * Math.cos(r) + x[i] * Math.sin(r));
}
const SIZES = {   // the fields each connector shows: [option, label key, min, max, step]
  peg: [['pegD', 'd', 2, 30, 0.5], ['pegL', 'len', 2, 40, 0.5]],
  key: [['keyW', 'w', 2, 30, 0.5], ['keyL', 'len', 2, 40, 0.5]],
  dovetail: [['dovetailW', 'w', 2, 40, 0.5], ['dovetailH', 'depth', 1, 20, 0.5]],
  dowel: [['dowelD', 'd', 2, 20, 0.5], ['dowelL', 'len', 4, 80, 1]],
  magnet: [['magnetD', 'd', 2, 40, 0.5], ['magnetH', 'thick', 0.5, 20, 0.5]],
  none: [],
};

export function splitTool(h) {
  const { ctx, card, overlay, el, t, number, radio, soon, close, toM, active = () => true } = h;
  const { model, view } = ctx;
  const loc = () => { const l = document.documentElement.lang || 'en'; return l === 'en-XA' ? 'en' : l; };
  const n1 = (v) => (Math.round(v * 10) / 10).toLocaleString(loc());
  const s = { mode: 'bed', bed: null, axis: 0, at: '', tilt: 0, tiltAbout: 1, format: 'stl', ...structuredClone(SPLIT_DEFAULTS), place: null, placeFor: '', hand: null, picked: null, busy: false, result: null, key: '', src: null };

  const choiceSig = () => model.version + '|' + ctx.host.path.join('/') + '|' + ctx.host.sel.map((x) => x.t + x.id).join(',');
  const optsKey = () => JSON.stringify([s.mode, s.bed, s.axis, s.at, s.tilt, s.tiltAbout, s.connector, s.clearance, s.wall, s.numbers, s.place, ...Object.values(SIZES).flat().map(([k]) => s[k])]);
  const bed = () => s.bed || bedSize(ctx.settings.bed) || [220, 220, 250];

  /** The cut places for "At places I give": numbers in mm from the low end, inside the model. 0.8 round 3 (model_PART_3, SU.929): a cut may
   *  slant — turned `tilt` degrees about another axis (`tiltAbout`), through the model's middle line at that place; the core takes any plane. */
  function planesFromText(lo, hi) {
    const max = hi[s.axis] - lo[s.axis];
    const vals = String(s.at).split(/[,;\s]+/).filter(Boolean).map((x) => Number(x.replace(',', '.')));
    if (!vals.length || vals.some((v) => !Number.isFinite(v) || v <= 0 || v >= max)) return { bad: true, max };
    const n = slantNormal(s.axis, s.tiltAbout, s.tilt), mid = [0, 1, 2].map((k) => (lo[k] + hi[k]) / 2);
    return { planes: [...new Set(vals)].sort((a, b) => a - b).map((v) => { const p = mid.slice(); p[s.axis] = lo[s.axis] + v; return { n, d: n[0] * p[0] + n[1] * p[1] + n[2] * p[2] }; }) };
  }

  function run() {
    const { tris, what } = printTriangles(model, { path: ctx.host.path, sel: ctx.host.sel });
    if (!tris.length) { overlay.clear(); s.src = null; return { empty: true }; }
    const mesh = weld(meshFromTriangles(tris), 1e-4), chk = printCheck(mesh);
    s.src = { tris, what, ok: chk.ok, lo: chk.min, hi: chk.max, size: chk.size, sig: choiceSig() };
    const cutKey = choiceSig() + JSON.stringify([s.mode, s.bed, s.axis, s.at, s.tilt, s.tiltAbout]);
    if (cutKey !== s.placeFor) { s.placeFor = cutKey; s.place = null; s.picked = null; }   // other cuts: the hand-placed spots mean nothing
    const grid = s.mode === 'bed' ? gridForBed(chk.size, bed(), { extra: s.connector === 'peg' ? s.pegL : s.connector === 'key' ? s.keyL : s.connector === 'dovetail' ? s.dovetailH : 0 }) : null;
    const pl = s.mode === 'planes' ? planesFromText(chk.min, chk.max) : null;
    markPlanes(chk.min, chk.max, grid, pl);
    return { what, ok: chk.ok, size: chk.size, grid, pl };
  }

  /** The cut planes as dashed rectangles round the model; after a preview, a ring at each connector and number. */
  function markPlanes(lo, hi, grid, pl) {
    const planes = grid ? gridPlanesOf(lo, hi, grid.counts) : pl?.planes || [];
    const L = [];
    const pad = 2;
    for (const p of planes) {
      const k = p.n.indexOf(1), a = (k + 1) % 3, b = (k + 2) % 3;
      if (k >= 0) {
        const c = (u, v) => { const q = [0, 0, 0]; q[k] = p.d; q[a] = u; q[b] = v; return q; };
        const A = c(lo[a] - pad, lo[b] - pad), B = c(hi[a] + pad, lo[b] - pad), C = c(hi[a] + pad, hi[b] + pad), D = c(lo[a] - pad, hi[b] + pad);
        L.push(...A, ...B, ...B, ...C, ...C, ...D, ...D, ...A);
        continue;
      }
      // a slanting cut: a square in its plane round the model's middle, as wide as the model's diagonal
      const mid = [0, 1, 2].map((i) => (lo[i] + hi[i]) / 2), off = p.n[0] * mid[0] + p.n[1] * mid[1] + p.n[2] * mid[2] - p.d;
      const c0 = mid.map((v, i) => v - p.n[i] * off), r = Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]) / 2 + pad;
      const ref = Math.abs(p.n[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0];
      const cr = (x, y) => [x[1] * y[2] - x[2] * y[1], x[2] * y[0] - x[0] * y[2], x[0] * y[1] - x[1] * y[0]];
      let u = cr(p.n, ref); const ul = Math.hypot(...u); u = u.map((v) => v / ul); const w = cr(p.n, u);
      const q = (su, sw) => c0.map((v, i) => v + (u[i] * su + w[i] * sw) * r);
      const A = q(-1, -1), B = q(1, -1), C = q(1, 1), D = q(-1, 1);
      L.push(...A, ...B, ...B, ...C, ...C, ...D, ...D, ...A);
    }
    overlay.set('cuts', L.length ? { lines: toM(L), color: overlay.token('--layer-blue', '#1e48c8'), dashed: true } : null);
    const R = [];
    const res = s.result && s.key === choiceSig() + optsKey() ? s.result : null;
    if (res) for (const j of res.joints) {
      for (const c of j.connectors) ring(R, c.at, c.n, 3);
      for (const l of j.labels) ring(R, l.at, j.connectors[0]?.n || res.planes[j.plane].n, 1.5);
    }
    overlay.set('conn', R.length ? { lines: toM(R), color: overlay.token('--layer-red', '#b3122e') } : null);
    const P = [];
    const pc = res && s.picked && res.joints.find((j) => j.label === s.picked.label)?.connectors[s.picked.i];
    if (pc) { ring(P, pc.at, pc.n, 4.5); ring(P, pc.at, pc.n, 5.5); }
    overlay.set('connpick', P.length ? { lines: toM(P), color: overlay.token('--layer-green', '#1b8a3a') } : null);
  }
  function ring(L, p, n, r) {
    const a = Math.abs(n[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0];
    let u = [n[1] * a[2] - n[2] * a[1], n[2] * a[0] - n[0] * a[2], n[0] * a[1] - n[1] * a[0]];
    const l = Math.hypot(...u); u = u.map((x) => x / l);
    const w = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]];
    const pt = (an) => p.map((x, k) => x + r * (Math.cos(an) * u[k] + Math.sin(an) * w[k]));
    for (let i = 0; i < 20; i++) L.push(...pt(2 * Math.PI * i / 20), ...pt(2 * Math.PI * (i + 1) / 20));
  }
  const gridPlanesOf = (lo, hi, counts) => {
    const out = [];
    for (let k = 0; k < 3; k++) for (let i = 1; i < counts[k]; i++) { const n = [0, 0, 0]; n[k] = 1; out.push({ n, d: lo[k] + (hi[k] - lo[k]) * i / counts[k] }); }
    return out;
  };

  /** Runs the split for what prints now (or hands back the preview when nothing changed). */
  async function compute() {
    const key = choiceSig() + optsKey();
    if (s.result && s.key === key) return s.result;
    const src = s.src;
    if (!src || !src.ok) return null;
    const opts = { connector: s.connector, clearance: s.clearance, wall: s.wall, numbers: s.numbers };
    for (const [k] of Object.values(SIZES).flat()) opts[k] = s[k];
    if (s.place) opts.place = s.place;
    if (s.mode === 'bed') opts.bed = bed();
    else { const pl = planesFromText(src.lo, src.hi); if (pl.bad) return null; opts.planes = pl.planes; }
    ctx.print(t('sx.split.working'));
    await new Promise((r) => setTimeout(r, 30));
    const res = await splitForPrint(await manifold(), src.tris, opts);
    s.result = res; s.key = key;
    return res;
  }
  // ---- connectors by hand: clicks in the view while Move / Add / Remove is on ----
  const current = () => (s.result && s.key === choiceSig() + optsKey() ? s.result : null);
  /** The connector ring nearest the click (within 16 px): {label, i, at, plane} or null. */
  function connectorAt(res, x, y) {
    const vp = ctx.cam.viewProj();
    let best = null;
    for (const j of res.joints) j.connectors.forEach((c, i) => {
      const q = ctx.cam.project(c.at.map((v) => v / MM), vp);
      const d = q ? Math.hypot(q[0] - x, q[1] - y) : Infinity;
      if (d <= 16 && (!best || d < best.d)) best = { d, label: j.label, i, at: c.at, plane: j.plane };
    });
    return best;
  }
  /** Where the click's ray crosses a cut plane inside the touching pieces: {label, plane, p (mm)} for the nearest, or null.
   *  `only` = a joint label to stay on (moving a connector keeps it on its own joint). */
  function cutPointAt(res, x, y, only = null) {
    const ray = ctx.cam.ray(x, y), o = ray.o.map((v) => v * MM);
    let best = null;
    for (const j of res.joints) {
      if (only && j.label !== only) continue;
      const pl = res.planes[j.plane], den = ray.d[0] * pl.n[0] + ray.d[1] * pl.n[1] + ray.d[2] * pl.n[2];
      if (Math.abs(den) < 1e-9) continue;
      const tt = (pl.d - (o[0] * pl.n[0] + o[1] * pl.n[1] + o[2] * pl.n[2])) / den;
      if (!(tt > 0)) continue;
      const p = [0, 1, 2].map((k) => o[k] + ray.d[k] * tt);
      const A = res.pieces.find((q) => q.number === j.a), B = res.pieces.find((q) => q.number === j.b);
      if (!A || !B) continue;
      const inside = (q) => [0, 1, 2].every((k) => k === pl.n.indexOf(1) || (p[k] >= q.lo[k] - 0.5 && p[k] <= q.hi[k] + 0.5));
      if (inside(A) && inside(B) && (!best || tt < best.tt)) best = { tt, label: j.label, plane: j.plane, p };
    }
    return best;
  }
  /** The spots a joint has now (hand-placed, else what the automatic placing made), to edit. */
  const spotsOf = (res, label) => (s.place?.[label] ? s.place[label].map((p) => p.slice()) : (res.joints.find((j) => j.label === label)?.connectors || []).map((c) => c.at.slice()));
  const setSpots = (label, list) => { s.place = { ...(s.place || {}), [label]: list }; s.picked = null; };
  const onView = (e) => {
    if (!s.hand || !active() || e.target !== ctx.over) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (e.type !== 'pointerdown' || s.busy) return;
    const res = current();
    if (!res) { ctx.print(t('sx.split.hand.preview')); return; }
    const r = ctx.over.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    if (s.hand === 'add') {
      const hit = cutPointAt(res, x, y);
      if (!hit) { ctx.print(t('sx.split.hand.miss')); return; }
      setSpots(hit.label, [...spotsOf(res, hit.label), hit.p]);
    } else if (s.hand === 'move' && s.picked) {
      const hit = cutPointAt(res, x, y, s.picked.label);
      if (!hit) { ctx.print(t('sx.split.hand.miss')); return; }
      const list = spotsOf(res, s.picked.label);
      list[s.picked.i] = hit.p;
      setSpots(s.picked.label, list);
    } else {
      const c = connectorAt(res, x, y);
      if (!c) { ctx.print(t('sx.split.hand.none')); return; }
      if (s.hand === 'remove') { const list = spotsOf(res, c.label); list.splice(c.i, 1); setSpots(c.label, list); }
      else { s.picked = { label: c.label, i: c.i }; ctx.print(t('sx.split.hand.picked', { label: c.label })); soon(); return; }
    }
    ctx.print(t('sx.split.hand.working'));
    soon();
    act('preview');
  };
  for (const type of ['pointerdown', 'pointerup', 'click']) window.addEventListener(type, onView, true);

  async function act(what) {
    if (s.busy) return;
    s.busy = true; soon();
    try {
      const res = await compute();
      if (!res) return;
      if (what === 'download') await download(res);
      else if (what === 'apply') applyIt(res);
      else ctx.print(t('sx.split.result', { n: res.pieces.length, j: res.joints.length, c: res.joints.reduce((a, j) => a + j.connectors.length, 0) }));
    } catch (err) {
      ctx.print(t('sx.split.failed', { error: err.code ? t('sx.split.err.' + err.code) : err.message }));
    } finally { s.busy = false; soon(); }
  }

  const baseName = () => {
    const c = model.context(ctx.host.path) || model.context([]);
    const i = ctx.host.sel.find((x) => x.t === 'i' && c.def.insts.has(x.id));
    return (i && model.def(c.def.insts.get(i.id).def)?.name?.replace(/\s*#\d+$/, '')) || 'model';
  };
  async function download(res) {
    const name = baseName();
    const extra = [];
    const png = await sheetPng(assemblySheet(res)).catch(() => null);
    if (png) extra.push({ name: 'assembly.png', data: png });
    const zip = zipStored(splitFiles(res, { format: s.format, name, bed: s.mode === 'bed' ? bed() : bedSize(ctx.settings.bed), extra }));
    const file = name.replace(/[^\p{L}\p{N}._ -]+/gu, '_') + '-pieces.zip';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([zip], { type: 'application/zip' }));
    a.download = file;
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    ctx.print(t('sx.split.saved', { file }));
  }
  /** The assembly sheet as a PNG (the browser draws the SVG once); null when it can't. */
  function sheetPng(svg) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const cv = document.createElement('canvas');
        cv.width = img.naturalWidth || 960; cv.height = img.naturalHeight || 960;
        cv.getContext('2d').drawImage(img, 0, 0);
        cv.toBlob((b) => (b ? b.arrayBuffer().then((ab) => resolve(new Uint8Array(ab)), reject) : resolve(null)), 'image/png');
      };
      img.onerror = () => resolve(null);
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
  }
  const selected = () => {
    const c = model.context(ctx.host.path) || model.context([]);
    return ctx.host.sel.filter((x) => x.t === 'i' && c.def.insts.has(x.id)).map((x) => x.id);
  };
  function applyIt(res) {
    const iids = selected();
    if (!iids.length) { ctx.print(t('sx.split.apply.pick')); return; }
    const c = model.context(ctx.host.path) || model.context([]);
    const first = c.def.insts.get(iids[0]), d0 = first && model.def(first.def);
    const paint = first?.color || [...(d0?.faces?.values?.() || [])].find((f) => f.color)?.color || null;   // as print-ui.js putBack
    const placed = placePieces(model, ctx.host.path, iids, res.pieces, {
      label: t('sx.split.undo'), name: baseName(), color: paint, tag: first?.tag,
      toLocal: (p) => apply(c.inv, p.map((x) => x / MM)),
    });
    ctx.afterHistory();
    ctx.host.setSel(placed.map((p) => ({ t: 'i', id: p.iid })));
    s.result = null;
    ctx.print(t('sx.split.done', { n: placed.length }));
  }

  function head() {
    return [
      el('div', { className: 'mc-guide-top' },
        el('p', { className: 'mc-guide-step' }, t('app.ptool.eyebrow')),
        el('button', { type: 'button', className: 'mc-linkbtn', dataset: { ptoolClose: '' }, title: t('app.ptool.close'), 'aria-label': t('app.ptool.close'), onclick: () => close() }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
      el('h2', { className: 'mc-guide-h', id: 'mc-ptool-h' }, t('sx.split.h')),
    ];
  }
  const changed = () => { soon(); };

  function draw(res) {
    const body = [];
    if (res.empty) body.push(el('p', { dataset: { ptoolResult: 'empty' } }, t('app.ptool.empty')));
    else if (!res.ok) body.push(el('p', { dataset: { ptoolResult: 'open' } }, t('sx.split.notclosed')));
    else {
      body.push(el('p', {}, t('sx.split.size', { x: n1(res.size[0]), y: n1(res.size[1]), z: n1(res.size[2]) })));
      body.push(el('fieldset', { className: 'mc-ptool-row' }, el('legend', {}, t('sx.split.how')),
        radio('split-mode', 'bed', t('sx.split.how.bed'), s.mode === 'bed', () => { s.mode = 'bed'; changed(); }),
        radio('split-mode', 'planes', t('sx.split.how.planes'), s.mode === 'planes', () => { s.mode = 'planes'; changed(); })));
      if (s.mode === 'bed') {
        const b = bed();
        body.push(el('fieldset', { className: 'mc-ptool-row' }, el('legend', {}, t('sx.split.bed')),
          ...[0, 1, 2].map((k) => number('split-bed' + k, t('sx.split.bed.' + 'xyz'[k]), b[k], 20, 2000, 1, (v) => { const nb = bed().slice(); nb[k] = v; s.bed = nb; changed(); }))));
        body.push(el('p', { className: 'mc-note' }, t('sx.split.bed.from')));
        const g = res.grid;
        body.push(el('p', { dataset: { ptoolResult: g ? 'grid' : 'nofit' } }, g
          ? t('sx.split.grid', { n: g.pieces, nx: g.counts[0], ny: g.counts[1], nz: g.counts[2], cx: n1(g.cell[0]), cy: n1(g.cell[1]), cz: n1(g.cell[2]) })
          : t('sx.split.nofit')));
      } else {
        body.push(el('fieldset', { className: 'mc-ptool-row' }, el('legend', {}, t('sx.split.axis')),
          ...[0, 1, 2].map((k) => radio('split-axis', String(k), t('sx.split.axis.' + k), s.axis === k, () => { s.axis = k; changed(); }))));
        body.push(el('label', { className: 'mc-ptool-num' }, t('sx.split.at'), ' ',
          el('input', { type: 'text', className: 'mc-input', name: 'mcPtool-split-at', value: s.at, inputMode: 'decimal', dataset: { ptoolInput: 'split-at' }, onchange: (e) => { s.at = e.target.value; changed(); } })));
        if (res.pl?.bad && s.at) body.push(el('p', { className: 'mc-note', dataset: { ptoolResult: 'badat' } }, t('sx.split.at.bad', { max: n1(res.pl.max) })));
        // 0.8 round 3 (SU.929): slanting cuts — turned about one of the two other axes
        const others = [0, 1, 2].filter((k) => k !== s.axis);
        if (!others.includes(s.tiltAbout)) s.tiltAbout = others[0];
        body.push(el('div', { className: 'mc-ptool-row' },
          number('split-tilt', t('sx.split.tilt'), s.tilt, -60, 60, 1, (v) => { s.tilt = v; changed(); }),
          el('fieldset', { className: 'mc-ptool-row' }, el('legend', {}, t('sx.split.tilt.about')),
            ...others.map((k) => radio('split-tilt-about', String(k), t('sx.split.axis.' + k), s.tiltAbout === k, () => { s.tiltAbout = k; changed(); })))));
        if (s.tilt) body.push(el('p', { className: 'mc-note' }, t('sx.split.tilt.note')));
      }
      body.push(el('fieldset', { className: 'mc-ptool-row' }, el('legend', {}, t('sx.split.conn')),
        ...CONNECTORS.map((c) => radio('split-conn', c, t('sx.split.conn.' + c), s.connector === c, () => { s.connector = c; changed(); }))));
      const sizes = SIZES[s.connector].map(([k, lab, min, max, step]) => number('split-' + k, t('sx.split.' + lab), s[k], min, max, step, (v) => { s[k] = v; changed(); }));
      body.push(el('div', { className: 'mc-ptool-row' }, ...sizes,
        number('split-clear', t('sx.split.clear'), s.clearance, 0, 2, 0.05, (v) => { s.clearance = v; changed(); }),
        number('split-wall', t('sx.split.wall'), s.wall, 0.8, 10, 0.1, (v) => { s.wall = v; changed(); })));
      body.push(el('label', { className: 'mc-ptool-opt' }, el('input', { type: 'checkbox', name: 'mcPtool-split-numbers', checked: s.numbers, onchange: (e) => { s.numbers = e.target.checked; changed(); } }), ' ', t('sx.split.numbers')));
      body.push(el('fieldset', { className: 'mc-ptool-row' }, el('legend', {}, t('sx.split.format')),
        radio('split-format', 'stl', 'STL', s.format === 'stl', () => { s.format = 'stl'; }),
        radio('split-format', '3mf', '3MF', s.format === '3mf', () => { s.format = '3mf'; })));
      // the preview, while it still matches
      const r = s.result && s.key === choiceSig() + optsKey() ? s.result : null;
      if (s.result && !r) body.push(el('p', { className: 'mc-note', dataset: { ptoolResult: 'stale' } }, t('sx.split.stale')));
      if (r) {
        const bad = r.pieces.filter((p) => !p.check.ok).map((p) => p.number), off = r.pieces.filter((p) => !p.fits).map((p) => p.number);
        body.push(el('p', { dataset: { ptoolResult: 'split' } }, t('sx.split.result', { n: r.pieces.length, j: r.joints.length, c: r.joints.reduce((a, j) => a + j.connectors.length, 0) })));
        body.push(el('p', { dataset: { ptoolResult: bad.length ? 'ko' : 'ok' } }, bad.length ? t('sx.split.someko', { list: bad.join(', ') }) : t('sx.split.allok')));
        if (r.opts.bed) body.push(el('p', {}, off.length ? t('sx.split.notfit', { list: off.join(', ') }) : t('sx.split.allfit')));
        body.push(el('ol', { className: 'mc-ptool-list', dataset: { ptoolPieces: '' } }, ...r.pieces.slice(0, 12).map((p) => el('li', {}, t('sx.split.piece', { n: p.number, x: n1(p.size[0]), y: n1(p.size[1]), z: n1(p.size[2]) })))));
        body.push(el('fieldset', { className: 'mc-ptool-row', dataset: { splitHand: '' } }, el('legend', {}, t('sx.split.hand')),
          ...['move', 'add', 'remove'].map((k) => radio('split-hand', k, t('sx.split.hand.' + k), s.hand === k, () => { s.hand = k; s.picked = null; changed(); })),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { splitHandOff: '' }, disabled: !s.hand, onclick: () => { s.hand = null; s.picked = null; changed(); } }, t('sx.split.hand.off')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { splitHandAuto: '' }, disabled: !s.place, onclick: () => { s.place = null; s.picked = null; changed(); act('preview'); } }, t('sx.split.hand.auto'))));
        if (s.hand) body.push(el('p', { className: 'mc-note' }, t('sx.split.hand.how.' + s.hand)));
        const notes = [];
        for (const j of r.joints) for (const nt of new Set(j.notes)) notes.push(t({ small: 'sx.split.note.small', 'no-label': 'sx.split.note.nolabel', 'placed-misfit': 'sx.split.note.misfit' }[nt], { label: j.label }));
        if (r.notes.includes('dovetail-directions')) notes.push(t('sx.split.note.dovetail'));
        for (const nt of notes.slice(0, 8)) body.push(el('p', { className: 'mc-note' }, nt));
      }
      body.push(el('div', { className: 'mc-actions' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { ptoolAct: 'split-preview' }, disabled: s.busy, onclick: () => act('preview') }, t(s.busy ? 'sx.split.working' : 'sx.split.preview')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { ptoolAct: 'split-download' }, disabled: s.busy, onclick: () => act('download') }, t('sx.split.download')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { ptoolAct: 'split-apply' }, disabled: s.busy || !selected().length, title: selected().length ? '' : t('sx.split.apply.pick'), onclick: () => act('apply') }, t('sx.split.apply'))));
      if (!selected().length) body.push(el('p', { className: 'mc-note' }, t('sx.split.apply.pick')));
      body.push(el('p', { className: 'mc-note' }, t(res.what === 'selection' ? 'app.print3d.what.sel' : 'app.print3d.what.all')));
      body.push(el('p', { className: 'mc-note' }, t('sx.split.how_note')));
    }
    card.replaceChildren(...[...head(), ...body].filter(Boolean));
  }

  if (typeof window !== 'undefined' && window.modelcraft) window.modelcraft.splitState = () => s;   // tests: the card's state (result, hand-placed spots)
  return { run, draw };
}
