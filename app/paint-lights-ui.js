/* SPDX-License-Identifier: Apache-2.0 */
/**
 * paint-lights-ui.js: modelcraft.js's 27 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountPaintLights(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { flipSel, isColor, PALETTE, paintFaces, paintInstance, isMaterialPaint, isImagePaint, setMaterialColors, setImageColors } from './model.js';
import { el } from './ui-util.js';
import { material as libMat, planarUV, onMaterialsChanged, CATEGORIES, MATERIALS } from './render/materials.js';
import { imageMaterial as imgMaterial, imageTexture, libMaterial, swatchPixels } from './render/three-mats.js';
import { decalMeshes } from './decals-mc.js';
import { materials as fileMaterials } from './ws-shading.js';
import { formatLength, parseLength } from './units.js';
import { norm, cross, add, mul } from './vec.js';

export function mountPaintLights(mnt) {
  const { ST, ui, model, cam, host, view, tools, print, setTool, scheduleInfo, root } = mnt;

  // ---- Flip (0.4 M15): mirror the selection through the middle of its box, square to red, green or blue ----
  function flip(axis, copy) {
    const sel = host.sel.filter((x) => x.t === 'e' || x.t === 'f' || x.t === 'i');
    if (!sel.length) { print(mnt.t('app.flip.none')); return; }
    tools.escape();
    const ctx = model.context(host.path), c = tools.selCenter();
    const local = (p) => { const q = ctx.inv; return [q[0] * p[0] + q[4] * p[1] + q[8] * p[2] + q[12], q[1] * p[0] + q[5] * p[1] + q[9] * p[2] + q[13], q[2] * p[0] + q[6] * p[1] + q[10] * p[2] + q[14]]; };
    const n = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] }[axis];   // the open group's own red, green, blue
    let at = c;
    if (copy) {
      // a flipped copy lands beside the original: mirrored across the far side of the selection's box
      const bb = tools.selBox(), a = tools.axes()[axis];
      let far = 0;
      for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) far = Math.max(far, (x - c[0]) * a[0] + (y - c[1]) * a[1] + (z - c[2]) * a[2]);
      at = [c[0] + a[0] * far, c[1] + a[1] * far, c[2] + a[2] * far];
    }
    const out = model.change(copy ? mnt.t('app.undo.flipcopy') : mnt.t('app.undo.flip'), (m) => flipSel(m.context(host.path).def, sel, local(at), n, copy), [model.context(host.path).def.id]);
    host.setSel(out);
    print(mnt.t(copy ? 'app.flip.copy.' + axis : 'app.flip.done.' + axis));
  }

  // ---- Colors (0.4 M8): the Paint tool's colour; with a selection, a click on a swatch paints it ----
  const palette = root.querySelector('[data-palette]');
  const swatches = [];
  const markPaint = (c) => { for (const sw of swatches) sw.el.setAttribute('aria-checked', String((sw.c || null) === (c || null) || (sw.custom && isColor(c) && !PALETTE.some(([, h]) => h === c)))); };
  host.paintChanged = (c) => { markPaint(c); if (isColor(c) && !PALETTE.some(([, h]) => h === c)) { customIn.value = c; customSw.style.background = c; } };
  function choosePaint(c, name) {
    tools.paintColor = c;
    markPaint(c);
    const sel = host.sel.filter((x) => x.t === 'f' || x.t === 'i');
    if (sel.length && tools.name !== 'paint') {
      const def = model.context(host.path).def;
      model.change(mnt.t('app.undo.paint'), () => { paintFaces(def, sel.filter((x) => x.t === 'f').map((x) => x.id), c); for (const x of sel) if (x.t === 'i') paintInstance(def, x.id, c); }, [def.id]);
      print(mnt.t('app.paint.sel', { color: name }));
      scheduleInfo(); view.invalidate();
    } else { setTool('paint'); print(mnt.t('app.paint.start', { color: name })); }
  }
  const swatch = (c, name, cls = '') => {
    const b = el('button', { type: 'button', role: 'radio', className: 'mc-swatch ' + cls, title: name, 'aria-label': name, 'aria-checked': 'false', dataset: { paint: c || 'default' } });
    if (c) b.style.background = c;
    b.addEventListener('click', () => choosePaint(c, name));
    swatches.push({ el: b, c });
    return b;
  };
  const colorName = (name) => mnt.t('app.color.' + name.toLowerCase().replace(/\s+/g, '_'));
  mnt.colorLabel = (c) => { if (isMaterialPaint(c)) { const m = libMat(c.slice(4)); return m ? (m.node ? m.name || c.slice(4) : mnt.t('render.mat.' + c.slice(4))) : c.slice(4); } if (isImagePaint(c)) { const im = model.images.get(c.slice(4, c.indexOf('|'))); return mnt.t('app.color.image', { name: im?.name || '?' }); } const p = c && PALETTE.find(([, h]) => h === c); return !c ? mnt.t('app.color.default') : p ? colorName(p[0]) : c; };
  palette.append(swatch(null, mnt.t('app.color.default'), 'is-default'), ...PALETTE.map(([name, c]) => swatch(c, colorName(name))));
  const customIn = el('input', { type: 'color', value: '#5a8f6a', 'aria-label': mnt.t('app.color.other'), dataset: { paintCustom: '' } });
  const customSw = el('span', { className: 'mc-swatch is-custom', role: 'radio', 'aria-checked': 'false', title: mnt.t('app.color.other') }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), customIn);
  swatches.push({ el: customSw, c: undefined, custom: true });
  customIn.addEventListener('change', () => { const c = customIn.value.toLowerCase(); if (!isColor(c)) return; customSw.style.background = c; choosePaint(c, c); });
  palette.append(customSw);
  // ---- Materials (0.5 RC.7, session render): library materials paint like colours ('mat:<id>' in the same field). The
  // views draw their textures (view.textures); exports, CadCraft's 3D tab and 3D printing get the material's colour. ----
  setMaterialColors((id) => libMat(id)?.color || null);
  host.paintName = (c) => mnt.colorLabel(c);   // the Paint tool's messages name a material, not its 'mat:' id
  const texMats = new Map();
  // imported images (0.5 RC.11 (b)): one texture per image, drawn once the browser has decoded it
  const imageMaterial = (id) => imgMaterial(imageTexture(model.images.get(id), () => view.invalidate()), { lambert: true, front: true, clipping: view.clip });
  setImageColors((id) => model.images.get(id)?.avg || null);
  view.textures = {
    material: (key) => {
      if (texMats.has(key)) return texMats.get(key);
      let m = null;
      if (key.startsWith('mat:') && libMat(key.slice(4))) m = libMaterial(key.slice(4), { lambert: true, front: true, clipping: view.clip });
      else if (key.startsWith('img:') && model.images.has(key.slice(4))) m = imageMaterial(key.slice(4));
      texMats.set(key, m);
      return m;
    },
    uv: planarUV,
    tile: (key) => { const m = key.startsWith('mat:') && libMat(key.slice(4)); return m ? (m.node ? m.size : m.tex?.size) || null : null; },   // 0.7 MT.1: mesh UVs × the tile
  };
  view.decals = (def, path) => decalMeshes(model, def, path, view.textures.material);   // 0.7 MT.6: decals (session `materials`)
  const matlib = root.querySelector('[data-matlib]');
  // 0.7 MT.1: the file's own node materials (Shading workspace) first, then the library; they repaint as their graphs change
  const mineRow = el('div', { className: 'mc-palette mc-matrow', dataset: { matlibMine: '' } }), mineHead = el('p', { className: 'mc-matcat' }, mnt.t('shading.palette.mine'));
  matlib.prepend(mineHead, mineRow);
  const fillMine = () => {
    swatches.splice(0, swatches.length, ...swatches.filter((sw) => !sw.mine));
    mineRow.replaceChildren(...fileMaterials.list().map((m) => {
      const b = swatch('mat:' + m.id, m.graph.name || m.id, 'is-mat'), e = libMat(m.id);
      swatches[swatches.length - 1].mine = true;
      if (e) {
        b.style.background = e.color;
        const px = swatchPixels(m.id, 40);
        if (px) { const c = document.createElement('canvas'); c.width = px.w; c.height = px.h; c.getContext('2d').putImageData(new ImageData(px.data, px.w, px.h), 0, 0); b.style.backgroundImage = 'url(' + c.toDataURL() + ')'; }
      }
      return b;
    }));
    mineHead.hidden = mineRow.hidden = !fileMaterials.size;
    markPaint(tools.paintColor);
  };
  onMaterialsChanged(() => {
    for (const [k, v] of [...texMats]) if (!v && k.startsWith('mat:')) texMats.delete(k);   // a material that did not exist yet when asked
    view.builtFor = null; view.invalidate();
    clearTimeout(fillMine.t); fillMine.t = setTimeout(fillMine, 150);
  });
  fillMine();
  const pending = [];
  for (const cat of CATEGORIES) {
    const list = MATERIALS.filter((m) => m.cat === cat);
    if (!list.length) continue;
    matlib.append(el('p', { className: 'mc-matcat' }, mnt.t('render.matcat.' + cat)),
      el('div', { className: 'mc-palette mc-matrow' }, list.map((m) => { const b = swatch('mat:' + m.id, mnt.t('render.mat.' + m.id), 'is-mat'); b.style.background = m.color; pending.push([b, m.id]); return b; })));
  }
  // the textures' swatches are drawn when the page is idle, a few at a time (each is a small texture drawn by code), and only
  // while the material list shows (0.10 PERF.57: 0.26 s of start-up for a list most people never open). The list is laid out
  // open until the shell folds the panel's sections (app-settings.js ccAutoFocus auto(): at window load + a task), so the watch
  // starts after that, and each slice looks again: with the list hidden, drawing waits for it to show.
  const listShown = () => matlib.getClientRects().length > 0;
  const whenIdle = (f) => (window.requestIdleCallback || ((g) => setTimeout(g, 200)))(f);
  const seen = typeof IntersectionObserver === 'function' ? new IntersectionObserver((es) => { if (es[es.length - 1].isIntersecting && listShown()) { seen.disconnect(); whenIdle(drawSwatches); } }) : null;
  const drawSwatches = (deadline) => {
    if (seen && !listShown()) { seen.observe(matlib); return; }   // folded away (or never shown yet): go on when it shows
    let n = 0;   // at most three per slice (~9 ms each): 50 ms slices were long tasks that held up the first clicks
    while (pending.length && n++ < 3 && (!deadline || deadline.timeRemaining() > 4)) {
      const [b, id] = pending.shift(), px = swatchPixels(id, 40);
      if (!px || !libMat(id).tex) continue;
      const c = document.createElement('canvas'); c.width = px.w; c.height = px.h;
      c.getContext('2d').putImageData(new ImageData(px.data, px.w, px.h), 0, 0);
      b.style.backgroundImage = 'url(' + c.toDataURL() + ')';
    }
    if (pending.length) setTimeout(() => whenIdle(drawSwatches), 30);
  };
  const watchSwatches = () => setTimeout(() => requestAnimationFrame(() => requestAnimationFrame(() => (seen ? seen.observe(matlib) : whenIdle(drawSwatches)))), 0);
  if (document.readyState === 'complete') watchSwatches(); else window.addEventListener('load', watchSwatches, { once: true });
  markPaint(tools.paintColor);

  // ---- Lights (0.5 RC.11 (d), session render): lamps for rendered pictures. The Light tool (tools.js) places one; the list
  // and the editor change it (one undo step each); a click on a lamp's mark in the view selects it. World coordinates. ----
  const lightsUl = root.querySelector('[data-lights]'), lightEdit = root.querySelector('[data-light-edit]'), lightsSec = root.querySelector('[data-lights-sec]');
  ST.selLight = null; ST.lightsSeen = '';
  const lightName = (id, L) => L.name || mnt.t('app.light.name.' + L.kind, { n: [...model.lights].filter(([, x]) => x.kind === L.kind).findIndex(([k]) => k === id) + 1 });
  root.querySelectorAll('[data-light-add]').forEach((b) => b.addEventListener('click', () => { setTool('light', { kind: b.dataset.lightAdd }); }));
  host.lightPlaced = (id) => { ST.selLight = id; renderLights(true); print(mnt.t('app.light.added', { name: lightName(id, model.lights.get(id)) })); };
  const changeLight = (patch) => {
    if (ST.selLight === null || !model.lights.has(ST.selLight)) return;
    try { model.change(mnt.t('app.undo.light'), (m) => m.setLight(ST.selLight, patch), []); host.changed(); renderLights(true); } catch (e) { print(e.message); }
  };
  function renderLights(force = false) {
    const key = model.version + '|' + ST.selLight + '|' + model.units;
    if (!force && key === ST.lightsSeen) return;
    ST.lightsSeen = key;
    if (ST.selLight !== null && !model.lights.has(ST.selLight)) ST.selLight = null;
    lightsUl.replaceChildren(...[...model.lights].map(([id, L]) => {
      const on = el('input', { type: 'checkbox', checked: L.on, 'aria-label': mnt.t('app.light.on'), dataset: { lightOn: String(id) } });
      on.addEventListener('change', () => { ST.selLight = id; changeLight({ on: on.checked }); });
      const name = el('button', { type: 'button', className: 'mc-linkbtn', 'aria-pressed': String(id === ST.selLight), dataset: { lightPick: String(id) } }, lightName(id, L));
      name.addEventListener('click', () => { ST.selLight = id === ST.selLight ? null : id; renderLights(true); view.invalidate(); });
      return el('li', { className: id === ST.selLight ? 'is-sel' : '' }, on, ' ', name);
    }));
    lightEdit.hidden = ST.selLight === null;
    if (ST.selLight === null) { lightEdit.replaceChildren(); return; }
    const L = model.lights.get(ST.selLight), u = model.units;
    const row = (label, input) => [el('label', { for: input.id }, label), input];
    const len = (id, meters, apply) => {
      const inp = el('input', { type: 'text', id, className: 'mc-input', value: formatLength(meters, u), spellcheck: false, autocomplete: 'off' });
      inp.addEventListener('change', () => { const v = parseLength(inp.value, u); if (v === null || !Number.isFinite(v)) { print(mnt.t('app.len.bad')); inp.value = formatLength(meters, u); return; } apply(v); });
      return inp;
    };
    if (window.ccPropGrid) {   // 0.8 PANEL-COMPACT: the lamp's fields in the shared property grid (the form below stays where the shell has no grid)
      const L1 = mnt.t('app.light.cat.light'), P1 = mnt.t('app.light.cat.position');
      const lenRow = (id, cat, label, meters) => ({ id, category: cat, label, type: 'text', value: formatLength(meters, u), maxLength: 40 });
      const rows2 = [{ id: 'lumens', category: L1, label: mnt.t('app.light.lumens'), type: 'number', value: L.lumens, min: 1, max: 200000, step: 50 },
        { id: 'color', category: L1, label: mnt.t('app.light.color'), type: 'color', value: L.color }];
      if (L.kind === 'spot') rows2.push({ id: 'angle', category: L1, label: mnt.t('app.light.angle'), type: 'number', value: L.angle, min: 5, max: 170, step: 5 });
      if (L.kind === 'area') rows2.push(lenRow('w', L1, mnt.t('app.light.width'), L.size[0]), lenRow('d', L1, mnt.t('app.light.depth'), L.size[1]));
      else rows2.push(lenRow('b', L1, mnt.t('app.light.bulb'), L.size[0]));
      rows2.push(lenRow('x', P1, mnt.t('app.light.x'), L.p[0]), lenRow('y', P1, mnt.t('app.light.y'), L.p[1]), lenRow('z', P1, mnt.t('app.light.height'), L.p[2]));
      const host2 = el('div', { className: 'mc-grid' });
      ccPropGrid.create(host2, { label: lightName(ST.selLight, L), key: 'light', rows: rows2, onChange: (id, v) => {
        if (id === 'lumens') return changeLight({ lumens: Number(v) });
        if (id === 'color') return changeLight({ color: v });
        if (id === 'angle') return changeLight({ angle: Number(v) });
        const m = parseLength(String(v), u);
        if (m === null || !Number.isFinite(m)) { print(mnt.t('app.len.bad')); renderLights(true); return; }
        if (id === 'w') changeLight({ size: [m, L.size[1]] });
        else if (id === 'd') changeLight({ size: [L.size[0], m] });
        else if (id === 'b') changeLight({ size: [m, m] });
        else if (id === 'x') changeLight({ p: [m, L.p[1], L.p[2]] });
        else if (id === 'y') changeLight({ p: [L.p[0], m, L.p[2]] });
        else if (id === 'z') changeLight({ p: [L.p[0], L.p[1], m] });
      } });
      const presets2 = el('span', { className: 'mc-light-presets' }, [['warm', '#ffd2a1'], ['neutral', '#fff1dc'], ['cool', '#eef3ff']].map(([k, c]) => {
        const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: mnt.t('app.light.' + k) }, mnt.t('app.light.' + k));
        b.addEventListener('click', () => changeLight({ color: c }));
        return b;
      }));
      const del2 = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { lightDelete: '' } }, mnt.t('app.light.delete'));
      del2.addEventListener('click', () => {
        const id = ST.selLight, nm = lightName(id, model.lights.get(id));
        model.change(mnt.t('app.undo.light.delete'), (m) => m.deleteLight(id), []);
        ST.selLight = null; host.changed(); renderLights(true); print(mnt.t('app.light.deleted', { name: nm }));
      });
      lightEdit.replaceChildren(host2, el('div', { className: 'mc-row mc-grid-actions' }, presets2, del2));
      return;
    }
    const lum = el('input', { type: 'number', id: 'mc-light-lm', className: 'mc-input', min: '1', max: '200000', step: '50', value: String(L.lumens), dataset: { lightLumens: '' } });
    lum.addEventListener('change', () => changeLight({ lumens: Number(lum.value) }));
    const col = el('input', { type: 'color', id: 'mc-light-col', value: L.color, dataset: { lightColor: '' } });
    col.addEventListener('change', () => changeLight({ color: col.value }));
    const presets = el('span', { className: 'mc-light-presets' }, [['warm', '#ffd2a1'], ['neutral', '#fff1dc'], ['cool', '#eef3ff']].map(([k, c]) => {
      const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: mnt.t('app.light.' + k) }, mnt.t('app.light.' + k));
      b.addEventListener('click', () => changeLight({ color: c }));
      return b;
    }));
    const rows = [...row(mnt.t('app.light.lumens'), lum), ...row(mnt.t('app.light.color'), col), el('span'), presets];
    if (L.kind === 'spot') {
      const ang = el('input', { type: 'number', id: 'mc-light-ang', className: 'mc-input', min: '5', max: '170', step: '5', value: String(L.angle), dataset: { lightAngle: '' } });
      ang.addEventListener('change', () => changeLight({ angle: Number(ang.value) }));
      rows.push(...row(mnt.t('app.light.angle'), ang));
    }
    if (L.kind === 'area') rows.push(...row(mnt.t('app.light.width'), len('mc-light-w', L.size[0], (v) => changeLight({ size: [v, L.size[1]] }))), ...row(mnt.t('app.light.depth'), len('mc-light-d', L.size[1], (v) => changeLight({ size: [L.size[0], v] }))));
    else rows.push(...row(mnt.t('app.light.bulb'), len('mc-light-b', L.size[0], (v) => changeLight({ size: [v, v] }))));
    rows.push(...row(mnt.t('app.light.x'), len('mc-light-x', L.p[0], (v) => changeLight({ p: [v, L.p[1], L.p[2]] }))),
      ...row(mnt.t('app.light.y'), len('mc-light-y', L.p[1], (v) => changeLight({ p: [L.p[0], v, L.p[2]] }))),
      ...row(mnt.t('app.light.height'), len('mc-light-z', L.p[2], (v) => changeLight({ p: [L.p[0], L.p[1], v] }))));
    const del = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { lightDelete: '' } }, mnt.t('app.light.delete'));
    del.addEventListener('click', () => {
      const id = ST.selLight, nm = lightName(id, model.lights.get(id));
      model.change(mnt.t('app.undo.light.delete'), (m) => m.deleteLight(id), []);
      ST.selLight = null; host.changed(); renderLights(true); print(mnt.t('app.light.deleted', { name: nm }));
    });
    lightEdit.replaceChildren(...rows, el('span'), del);
  }
  // the lamps' marks: a disc in the lamp's colour (a spot with its aim, a panel as its outline); dashed when off
  view.drawExtra = (g, project, c) => {
    for (const [id, L] of model.lights) {
      const s = project(L.p);
      if (!s) continue;
      const sel = id === ST.selLight;
      g.setLineDash(L.on ? [] : [3, 3]); g.lineWidth = sel ? 2.5 : 1.5; g.strokeStyle = sel ? c.sel : c.ink; g.fillStyle = L.color;
      if (L.kind === 'area') {
        const ax = Math.abs(L.dir[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0], e1 = norm(cross(L.dir, ax)), e2 = cross(L.dir, e1), w = L.size[0] / 2, h = L.size[1] / 2;
        const q = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => project(add(L.p, add(mul(e1, a * w), mul(e2, b * h)))));
        if (q.every(Boolean)) { g.beginPath(); q.forEach((v, i) => (i ? g.lineTo(v[0], v[1]) : g.moveTo(v[0], v[1]))); g.closePath(); g.globalAlpha = 0.45; g.fill(); g.globalAlpha = 1; g.stroke(); }
      }
      if (L.kind === 'spot') { const a = project(add(L.p, mul(L.dir, 0.6))); if (a) { g.beginPath(); g.moveTo(s[0], s[1]); g.lineTo(a[0], a[1]); g.stroke(); } }
      g.beginPath(); g.arc(s[0], s[1], 6, 0, Math.PI * 2); g.fill(); g.stroke();
      for (let k = 0; k < 8; k++) { const an = (k * Math.PI) / 4; g.beginPath(); g.moveTo(s[0] + Math.cos(an) * 8, s[1] + Math.sin(an) * 8); g.lineTo(s[0] + Math.cos(an) * 11, s[1] + Math.sin(an) * 11); g.stroke(); }
    }
    g.setLineDash([]);
  };
  // 0.8 D8.5 rest (round 3, model_PART_3): while a drag orbits, a small marker shows the point it turns about (the model point picked at
  // the start, or the view's centre over empty space)
  { const extra0 = view.drawExtra;
    view.drawExtra = (g, project, c) => {
      extra0(g, project, c);
      if (!ST.camDrag || !ST.camDrag.orbiting || ST.presentation) return;
      const s = project(ST.camDrag.pivot || cam.target);
      if (!s) return;
      g.save(); g.setLineDash([]); g.lineWidth = 1.5; g.strokeStyle = c.sel || c.ink;
      g.beginPath(); g.arc(s[0], s[1], 6, 0, Math.PI * 2); g.stroke();
      g.beginPath(); g.moveTo(s[0] - 10, s[1]); g.lineTo(s[0] - 3, s[1]); g.moveTo(s[0] + 3, s[1]); g.lineTo(s[0] + 10, s[1]);
      g.moveTo(s[0], s[1] - 10); g.lineTo(s[0], s[1] - 3); g.moveTo(s[0], s[1] + 3); g.lineTo(s[0], s[1] + 10); g.stroke();
      g.restore();
      view.pivotShown = [s[0], s[1]];   // tests read where it was drawn
    };
  }
  // a click on a lamp's mark (Select) picks the lamp before the tools see it
  ui.over.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || tools.name !== 'select' || !model.lights.size) return;
    const r = ui.over.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, vp = cam.viewProj();
    let best = null, bd = 11;
    for (const [id, L] of model.lights) { const s2 = cam.project(L.p, vp); if (s2) { const d = Math.hypot(s2[0] - x, s2[1] - y); if (d < bd) { bd = d; best = id; } } }
    if (best === null) return;
    e.stopImmediatePropagation(); e.preventDefault();
    ST.selLight = best; renderLights(true); view.invalidate();
    lightsSec.scrollIntoView({ block: 'nearest' });
    print(mnt.t('app.light.picked', { name: lightName(best, model.lights.get(best)) }));
  }, true);

  return { flip, choosePaint, texMats, renderLights };
}
