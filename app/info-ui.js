/* SPDX-License-Identifier: Apache-2.0 */
/**
 * info-ui.js: modelcraft.js's 21 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountInfo(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { solidProblems, fixSolid, softenEdges, curveInfo, cleanStoreys } from './model.js';
import { el } from './ui-util.js';
import { getWorkspace } from './workspaces.js';
import { formatLength, parseLength } from './units.js';
import { ident } from './vec.js';
import './group-mods.js';
import './mesh/mod-panel.js';
import './infer.js';
import * as i18n from "./i18n.js";
import { mountInfoSections } from './info-sections-ui.js';

export function mountInfo(mnt) {
  const { ui, model, cam, host, view, tools, print, setTool, syncTool, curveObjectFrom, groupModCtx, afterHistory, ctxDef, unhideEverything, eraseSelection, makeGroup, meshInfo, convertToMesh, divideAsk, explodeSel, syncSectionMenu, closeMenus, scheduleInfo, tagSelection, focusView, root, setInfoTitle } = mnt;

  // ---- Solid checker (0.4 M21): why a group or component is not a solid; Show problems; Fix the simple cases ----
  const problemList = (p) => [p.holes.length && mnt.t('app.check.holes', { n: p.holes.length }), p.extra.length && mnt.t('app.check.extra', { n: p.extra.length }),
    p.inner.length && mnt.t('app.check.inner', { n: p.inner.length }), p.stray.length && mnt.t('app.check.stray', { n: p.stray.length }),
    p.flipped.length && mnt.t('app.check.flipped', { n: p.flipped.length })].filter(Boolean).join(' · ');
  function solidCheck(d, iid, notes) {
    const p = solidProblems(d), list = problemList(p);
    const why = !d.faces.size ? mnt.t('app.check.empty') : list ? mnt.t('app.check.why', { list }) : d.insts.size ? mnt.t('app.check.nested') : '';
    if (!why) return;
    const box = el('div', { className: 'mc-check-box', dataset: { solidCheck: '' } }, el('p', { className: 'mc-note' }, why));
    if (list) box.append(el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => {
        // open it and select what is wrong, so it shows highlighted
        host.openContext([...host.path, iid]);
        host.setSel([...[...p.holes, ...p.extra, ...p.stray].map((id) => ({ t: 'e', id })), ...[...p.inner, ...p.flipped].map((id) => ({ t: 'f', id }))]);
        print(mnt.t('app.check.showing', { list }));
      } }, mnt.t('app.check.show')),
      el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => {
        const r = model.change(mnt.t('app.undo.fix_solid'), (m) => fixSolid(m.def(d.id)), [d.id]);
        const done = [r.stray && mnt.t('app.check.fixed.stray', { n: r.stray }), r.inner && mnt.t('app.check.fixed.inner', { n: r.inner }), r.flipped && mnt.t('app.check.fixed.flipped', { n: r.flipped }), r.holes && mnt.t('app.check.fixed.holes', { n: r.holes })].filter(Boolean).join(' · ');
        const left = problemList(solidProblems(model.def(d.id)));
        print(!done ? mnt.t('app.check.nothing', { left }) : left ? mnt.t('app.check.fixed_left', { done, left }) : mnt.t('app.check.fixed', { done }));
        afterHistory();
      } }, mnt.t('app.check.fix'))));
    notes.push(box);
  }
  // ---- Soften by angle (0.4 M18): an angle box with Soften and Harden; edges of the selection or of a whole definition ----
  let softenDeg = 20;
  function softenRow(props, target) {
    props.append(el('label', { for: 'mc-soften' }, mnt.t('app.info.soften')));
    const inp = el('input', { type: 'number', id: 'mc-soften', className: 'mc-input', min: 0, max: 180, step: 1, value: softenDeg });
    const go = (deg) => {
      const tg = target();
      const n = model.change(mnt.t(deg > 0 ? 'app.undo.soften' : 'app.undo.harden'), (m) => softenEdges(tg.defId ? m.def(tg.defId) : m.context(tg.path).def, tg.eids, deg), [tg.defId || model.context(tg.path).def.id]);
      print(deg > 0 ? mnt.t('app.soften.done', { deg, n }) : mnt.t('app.harden.done', { n }));
      afterHistory();
    };
    const apply = el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { const v = Number(inp.value); if (!(v >= 0 && v <= 180)) { print(mnt.t('app.soften.bad')); return; } softenDeg = v; go(v); } }, mnt.t('app.info.soften.go'));
    const hard = el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => go(0) }, mnt.t('app.info.harden'));
    props.append(el('span', { className: 'mc-inline' }, inp, ' ° ', apply, ' ', hard));
  }
  /** The Tag picker in Entity info for the selected placements (several with different tags: a blank first choice). */
  function tagPicker(props, insts) {
    const tags = new Set(insts.map((i) => i.tag || ''));
    props.append(el('label', { for: 'mc-tag' }, mnt.t('app.info.tag')));
    const sel = el('select', { id: 'mc-tag', className: 'mc-select' },
      ...(tags.size > 1 ? [el('option', { value: '\u0000', disabled: true }, mnt.t('app.info.tag.mixed'))] : []),
      el('option', { value: '' }, mnt.t('app.tag.untagged')),
      ...model.tags.map((g) => el('option', { value: g.name }, g.hidden ? mnt.t('app.info.tag.hidden', { name: g.name }) : g.name)),
      el('option', { value: '\u0001' }, mnt.t('app.info.tag.new')));
    sel.value = tags.size > 1 ? '\u0000' : [...tags][0];
    sel.addEventListener('change', () => {
      if (sel.value === '\u0001') { const nm = model.change(mnt.t('app.undo.tag_add'), (m) => m.addTag(), []); tagSelection(nm); return; }
      tagSelection(sel.value);
    });
    props.append(sel);
  }

  const { infoModel, infoCurve, infoMany, INFO_ONE } = mountInfoSections({
    setInfoTitle, model, unhideEverything, host, tools, syncTool, ui, divideAsk, curveObjectFrom, scheduleInfo, meshInfo, explodeSel, groupModCtx, convertToMesh, cam, eraseSelection, syncSectionMenu, afterHistory, print, makeGroup, solidCheck, softenRow, tagPicker, partRules, stretchDialog, mnt,
  });

  function renderInfo() {
    // 0.7: another workspace draws its own panel here
    if (mnt.wsId !== 'model' && mnt.wsHost) {
      const w = getWorkspace(mnt.wsId);
      w.changed?.(mnt.wsHost);
      if (mnt.wsId !== 'model' && w.renderPanel) {
        const box = el('div', { className: 'mc-ws-panel', dataset: { wsPanel: w.id } });
        const h = w.renderPanel(mnt.wsHost, box);
        setInfoTitle(h || mnt.t(w.labelKey));
        ui.info.replaceChildren(box);
        return;
      }
    }
    const u = model.units;
    const ctx = model.context(host.path) || model.context([]);
    const def = ctx.def, sel = host.sel;
    const rows = [];
    const props = el('div', { className: 'mc-props' });
    const row = (k, v) => props.append(el('span', { className: 'k' }, k), el('span', { className: 'v' }, v));
    const actions = el('div', { className: 'mc-actions' }), notes = [];
    const btn = (label, fn) => actions.append(el('button', { type: 'button', className: 'mc-linkbtn', onclick: fn }, label));
    // a length you can retype: Enter (or leaving the box) resizes the model through fn(meters)
    const lenBox = (label, id, meters, fn) => {
      props.append(el('label', { for: id }, label));
      const inp = el('input', { type: 'text', id, className: 'mc-input', value: formatLength(meters, u), spellcheck: false, autocomplete: 'off', inputMode: 'text' });
      inp.dataset.mcLen = id;
      inp.addEventListener('change', () => {
        const L = parseLength(inp.value, u);
        if (L === null || !(L > 0)) { print(mnt.t('app.len.bad')); inp.value = formatLength(meters, u); return; }
        try { fn(L); print(mnt.t('app.len.set', { what: label, len: formatLength(L, u) })); ui.over.focus({ preventScroll: true }); } catch (err) { print(mnt.t('app.failed', { error: err.message })); inp.value = formatLength(meters, u); }
        afterHistory();
      });
      inp.addEventListener('keydown', (e) => { if (e.key === 'Escape') { inp.value = formatLength(meters, u); inp.blur(); ui.over.focus({ preventScroll: true }); } });
      props.append(inp);
    };
    const P = { u, def, sel, props, row, btn, lenBox, notes };
    if (!sel.length) {
      infoModel(P);
      ui.info.replaceChildren(props, actions, el('p', { className: 'mc-note' }, mnt.t('app.info.note', { unit: mnt.unitWords(u) })));
      return;
    }
    const nF = sel.filter((s) => s.t === 'f').length, nE = sel.filter((s) => s.t === 'e').length, nI = sel.filter((s) => s.t === 'i').length, nG = sel.filter((s) => s.t === 'g').length, nD = sel.filter((s) => s.t === 'd').length, nS = sel.filter((s) => s.t === 's').length;
    // one whole arc, circle or polygon (0.4 M3)
    const cid = nE === sel.length ? def.edges.get(sel[0].id)?.curve : null;
    const ci = cid && sel.every((s) => def.edges.get(s.id)?.curve === cid) ? curveInfo(def, cid) : null;
    if (ci && ci.edges.length === sel.length) {
      infoCurve(P, cid, ci);
      ui.info.replaceChildren(props, ...notes, actions);
      return;
    }
    const one = sel.length === 1 && Object.hasOwn(INFO_ONE, sel[0].t) ? INFO_ONE[sel[0].t] : null;
    if (one) one(P); else infoMany(P, { nF, nE, nI, nG, nD });
    void rows;
    ui.info.replaceChildren(props, ...notes, actions);
  }

  function askText(title, label, value) {
    return new Promise((done) => {
      const inp = el('input', { type: 'text', className: 'mc-input', value, maxLength: 80, id: 'mc-ask-input' });
      const form = el('form', { method: 'dialog' },
        el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-ask-h' }, title)),
        el('div', { className: 'mc-dialog-text' }, el('label', { for: 'mc-ask-input', className: 'mc-note' }, label), inp),
        el('div', { className: 'mc-dialog-foot' },
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, mnt.t('app.btn.cancel')),
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, mnt.t('app.btn.save'))));
      const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-ask-h' }, form);
      let result = null;
      form.addEventListener('submit', () => { result = inp.value.trim() || null; });
      dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
      dlg.addEventListener('close', () => { dlg.remove(); focusView(); done(result); });
      root.append(dlg);
      dlg.showModal();
      inp.focus(); inp.select();
    });
  }
  /** Print the view (0.4 M13): a page with the image and its caption in a hidden frame, then the browser's print dialog (where "Save as PDF" is a choice too). */
  function printView(blob, caption, paper) {
    const url = URL.createObjectURL(blob);
    const frame = el('iframe', { className: 'visually-hidden', title: mnt.t('app.print.frame'), 'aria-hidden': 'true' });
    frame.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>@page{size:${paper === 'a4' ? 'A4' : 'letter'} landscape;margin:12mm}html,body{margin:0}img{display:block;max-width:100%;max-height:calc(100vh - 2.5em);margin:0 auto}p{font:9pt system-ui,sans-serif;margin:.5em 0 0}</style></head><body><img alt=""><p></p></body></html>`;   // i18n-ignore: the print page
    frame.addEventListener('load', () => {
      const d = frame.contentDocument, img = d.querySelector('img');
      d.querySelector('p').textContent = caption;
      const go = () => { frame.contentWindow.focus(); frame.contentWindow.print(); setTimeout(() => { frame.remove(); URL.revokeObjectURL(url); }, 60000); };
      img.addEventListener('load', go, { once: true });
      img.src = url;
    }, { once: true });
    document.body.append(frame);
    print(mnt.t('app.print.opening'));
  }
  // ---- Components that stretch (0.4 M26) ----
  const dynLib = () => import('./dynamic.js');
  const RULES = ['auto', 'stretch', 'start', 'end', 'move', 'scale', 'repeat'];   // i18n-ignore: rule keys
  async function partRules(props, comp, iid) {
    const D = await dynLib(), inst = comp.insts.get(iid);
    if (!inst) return;
    const B = model.bbox(comp), part = D.partsOf(model, comp).find((p) => p.iid === iid);
    if (!B || !part) return;
    const box = el('div', { className: 'mc-props mc-rules' }, el('span', { className: 'k mc-rules-h' }, mnt.t('app.dyn.rules')));
    ['x', 'y', 'z'].forEach((ax, k) => {
      const id = 'mc-rule-' + ax;
      const sel = el('select', { id, className: 'mc-select' }, ...RULES.map((r) => el('option', { value: r }, r === 'auto' ? mnt.t('app.dyn.rule.auto', { rule: mnt.t('app.dyn.rule.' + D.ruleOf({ inst: { rule: {} }, box: part.box }, k, B)) }) : mnt.t('app.dyn.rule.' + r))));
      sel.value = inst.rule?.[ax] || 'auto';
      sel.addEventListener('change', () => { model.change(mnt.t('app.undo.rule'), (m) => { const i = m.def(comp.id).insts.get(iid); i.rule = { ...(i.rule || {}), [ax]: sel.value }; if (sel.value === 'auto') delete i.rule[ax]; if (!Object.keys(i.rule).length) delete i.rule; }, [comp.id]); scheduleInfo(); });
      box.append(el('label', { for: id }, mnt.t('app.dyn.axis.' + ax)), sel);
      if (inst.rule?.[ax] === 'repeat') {
        const sp = el('input', { type: 'text', className: 'mc-input', value: formatLength(inst.rule['s' + ax] || (part.box.max[k] - part.box.min[k]) * 2, model.units), 'aria-label': mnt.t('app.dyn.spacing') });
        sp.addEventListener('change', () => { const v = parseLength(sp.value, model.units); if (!(v > 0)) { print(mnt.t('app.len.bad')); return; } model.change(mnt.t('app.undo.rule'), (m) => { m.def(comp.id).insts.get(iid).rule['s' + ax] = v; }, [comp.id]); });
        box.append(el('label', {}, mnt.t('app.dyn.spacing')), sp);
      }
    });
    props.after(box);
  }
  async function stretchDialog(iid) {
    const D = await dynLib(), def0 = ctxDef(), inst = def0.insts.get(iid);
    if (!inst) return;
    const cur = model.def(inst.def), src = (cur.dyn && model.def(cur.dyn.src)) || cur, bb = model.bbox(cur), u = model.units;
    const f = (id, v) => el('input', { type: 'text', id, className: 'mc-input', value: formatLength(v, u), autocomplete: 'off' });
    const W = f('mc-dy-w', bb.max[0] - bb.min[0]), Dp = f('mc-dy-d', bb.max[1] - bb.min[1]), H = f('mc-dy-h', bb.max[2] - bb.min[2]);
    const err = el('p', { className: 'mc-note', role: 'alert' });
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-dy-h2' }, mnt.t('app.dyn.h', { name: src.name }))),
      el('div', { className: 'mc-dialog-text mc-props' }, el('label', { for: 'mc-dy-w' }, mnt.t('app.info.width')), W, el('label', { for: 'mc-dy-d' }, mnt.t('app.info.depth')), Dp, el('label', { for: 'mc-dy-h' }, mnt.t('app.info.height')), H),
      el('p', { className: 'mc-note' }, mnt.t('app.dyn.note')), err,
      el('div', { className: 'mc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, mnt.t('app.btn.cancel')),
        el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, mnt.t('app.dyn.go'))));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-dy-h2' }, form);
    let size = null;
    form.addEventListener('submit', (e) => {
      const s = [W, Dp, H].map((x) => parseLength(x.value, u));
      if (s.some((v) => v === null || !(v >= 0))) { e.preventDefault(); err.textContent = mnt.t('app.dyn.bad'); return; }
      size = s;
    });
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', () => {
      dlg.remove(); focusView();
      if (!size) return;
      model.change(mnt.t('app.undo.stretch'), (m) => {
        const d = m.context(host.path).def, i = d.insts.get(iid);
        const nd = D.stretchDef(m, m.def(src.id), size, m.uniqueName(src.name.replace(/#\d+$/, '')));
        i.def = nd.id;
        m.purge();
      }, [model.context(host.path).def.id]);
      print(mnt.t('app.dyn.done', { name: src.name, size: size.map((v) => formatLength(v, u)).join(' × ') }));
      afterHistory();
    });
    root.append(dlg);
    dlg.showModal();
    W.focus(); W.select();
  }

  async function placeStarter(id) {
    const { STARTER, buildStarter, buildPlant, plantList } = await import('./starter.js');
    let plant = null;
    if (id.startsWith('plant:')) { plant = (await plantList()).find((s) => 'plant:' + s.key === id); if (!plant) return; }
    const it = plant ? { id } : STARTER.find((s) => s.id === id);
    if (!it) return;
    const name = plant ? (await import('./plants/plants.js')).displayName(plant, i18n.locale()) : mnt.t('app.starter.' + id);
    // one definition per starter thing: picking it again places another copy of the same component
    let def = [...model.defs.values()].find((d) => d.kind === 'component' && d.starter === id);
    if (!def) def = model.change(mnt.t('app.undo.starter'), (m) => { const d = plant ? buildPlant(m, plant, name) : buildStarter(m, id, name); d.starter = id; return d; }, []);
    afterHistory();
    const hint = () => mnt.t(it.wall ? 'app.starter.where_wall' : 'app.starter.where', { name });
    setTool('place', { defId: def.id, align: true, hint });
    print(hint());
  }
  // ---- Terrain (0.4 M24): from contour lines, or a grid to sculpt ----
  const terrainLib = () => import('./terrain.js');
  async function terrainFromSelection() {
    const def = ctxDef(), eids = host.sel.filter((s) => s.t === 'e').map((s) => s.id);
    const pts = new Set(); for (const id of eids) { const e = def.edges.get(id); if (e) { pts.add(e.a); pts.add(e.b); } }
    if (pts.size < 3) { print(mnt.t('app.terrain.need')); return; }
    const L = await terrainLib();
    let iid = null;
    model.change(mnt.t('app.undo.terrain'), (m) => {
      const d = L.terrainFromContours(m, m.context(host.path).def, eids, { name: mnt.t('app.terrain.name') });
      if (d) iid = m.place(m.context(host.path).def, d.id, ident());
    }, [model.context(host.path).def.id]);
    if (iid === null) { print(mnt.t('app.terrain.flat')); return; }
    host.setSel([{ t: 'i', id: iid }]);
    const d = model.def(ctxDef().insts.get(iid).def);
    print(mnt.t('app.terrain.made', { n: d.faces.size }));
    afterHistory();
  }
  function terrainGridDialog() {
    const u = model.units, metric = !(u === 'ft-in' || u === 'in');
    const fld = (id, v) => el('input', { type: 'text', id, className: 'mc-input', value: formatLength(v, u), autocomplete: 'off' });
    const w = fld('mc-tg-w', metric ? 20 : 6.096 * 3), dp = fld('mc-tg-d', metric ? 20 : 6.096 * 3), sp = fld('mc-tg-s', metric ? 1 : 0.6096);
    const err = el('p', { className: 'mc-note', role: 'alert' });
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-tg-h' }, mnt.t('app.terrain.grid.h'))),
      el('div', { className: 'mc-dialog-text mc-props' }, el('label', { for: 'mc-tg-w' }, mnt.t('app.terrain.grid.w')), w, el('label', { for: 'mc-tg-d' }, mnt.t('app.terrain.grid.d')), dp, el('label', { for: 'mc-tg-s' }, mnt.t('app.terrain.grid.s')), sp),
      el('p', { className: 'mc-note' }, mnt.t('app.terrain.grid.note')), err,
      el('div', { className: 'mc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, mnt.t('app.btn.cancel')),
        el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, mnt.t('app.text3d.place'))));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-tg-h' }, form);
    let go = null;
    form.addEventListener('submit', (e) => {
      const W = parseLength(w.value, u), D = parseLength(dp.value, u), S = parseLength(sp.value, u);
      if (!(W > 0 && D > 0 && S > 0)) { e.preventDefault(); err.textContent = mnt.t('app.terrain.grid.bad'); return; }
      go = { width: W, depth: D, spacing: S };
    });
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', async () => {
      dlg.remove(); focusView();
      if (!go) return;
      const L = await terrainLib();
      const defId = model.change(mnt.t('app.undo.terrain'), (m) => L.terrainGrid(m, { ...go, name: mnt.t('app.terrain.name') }).id, []);
      afterHistory();
      setTool('place', { defId, hint: () => mnt.t('app.terrain.grid.where') });
      print(mnt.t('app.terrain.grid.where'));
    });
    root.append(dlg);
    dlg.showModal();
    w.focus(); w.select();
  }
  // ---- IFC storeys (0.4 M12): a name and an elevation each; IFC export puts every top-level group on the storey at or below it ----
  function storeysDialog() {
    const u = model.units;
    const list = el('div', { className: 'mc-storeys' });
    const row = (s) => {
      const nm = el('input', { type: 'text', className: 'mc-input', value: s.name, maxLength: 80, 'aria-label': mnt.t('app.storeys.name') });
      const ev = el('input', { type: 'text', className: 'mc-input', value: formatLength(s.elevation, u), autocomplete: 'off', 'aria-label': mnt.t('app.storeys.elevation') });
      const r = el('div', { className: 'mc-storey' }, nm, ev, el('button', { type: 'button', className: 'mc-icon', title: mnt.t('app.storeys.remove'), 'aria-label': mnt.t('app.storeys.remove'), onclick: () => r.remove() }, el('i', { className: 'bi bi-trash3', 'aria-hidden': 'true' })));
      list.append(r);
      return nm;
    };
    for (const s of model.storeys) row(s);
    const guess = () => {
      // the different heights the top-level groups and components stand on (to the centimeter)
      const zs = new Set();
      for (const inst of model.root.insts.values()) { const d = model.def(inst.def), bb = d && model.bbox(d, inst.m); if (bb) zs.add(Math.round(bb.min[2] * 100) / 100); }
      if (!zs.size) zs.add(0);
      list.replaceChildren();
      [...zs].sort((a, b) => a - b).forEach((z, k) => row({ name: mnt.t('app.storeys.level', { n: k + 1 }), elevation: z }));
    };
    const err = el('p', { className: 'mc-note', role: 'alert' });
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-st-h' }, mnt.t('app.storeys.h'))),
      el('p', { className: 'mc-note' }, mnt.t('app.storeys.note')),
      el('div', { className: 'mc-storey mc-storey-head', 'aria-hidden': 'true' }, el('span', {}, mnt.t('app.storeys.name')), el('span', {}, mnt.t('app.storeys.elevation')), el('span', {})),
      list, err,
      el('div', { className: 'mc-actions' },
        el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { const last = [...list.children].pop(); const z = last ? parseLength(last.children[1].value, u) : null; row({ name: mnt.t('app.storeys.level', { n: list.children.length + 1 }), elevation: z === null ? 0 : z + 3 }).focus(); } }, mnt.t('app.storeys.add')),
        el('button', { type: 'button', className: 'mc-linkbtn', onclick: guess }, mnt.t('app.storeys.guess'))),
      el('div', { className: 'mc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, mnt.t('app.btn.cancel')),
        el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, mnt.t('app.btn.save'))));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-st-h' }, form);
    let next = null;
    form.addEventListener('submit', (e) => {
      const rows = [...list.children].map((r) => ({ name: r.children[0].value.trim(), elevation: parseLength(r.children[1].value, u) }));
      const bad = rows.find((r) => !r.name || r.elevation === null);
      if (bad) { e.preventDefault(); err.textContent = mnt.t('app.storeys.bad'); return; }
      const clean = cleanStoreys(rows);
      if (clean.length !== rows.length) { e.preventDefault(); err.textContent = mnt.t('app.storeys.same'); return; }
      next = clean;
    });
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', () => {
      dlg.remove(); focusView();
      if (!next) return;
      model.change(mnt.t('app.undo.storeys'), (m) => { m.storeys = next; }, []);
      print(next.length ? mnt.t('app.storeys.saved', { n: next.length }) : mnt.t('app.storeys.none'));
    });
    root.append(dlg);
    dlg.showModal();
  }
  // ---- 0.8 SU.934: Scale by factors… (scale-nu.js, scale-dialog.js) ----
  async function scaleByDialog() {
    closeMenus(); tools.escape();
    const sel = host.sel.filter((s) => s.t === 'e' || s.t === 'f' || s.t === 'i');
    if (!sel.length) { print(mnt.t('sx.scale.none')); return; }
    const { openScaleDialog } = await import('./scale-dialog.js');
    openScaleDialog({ root, t: mnt.t, model, path: host.path, sel, formatLength, label: mnt.t('sx.scale.undo'), say: print,
      done: (r) => { focusView(); if (r) { host.setSel(sel); scheduleInfo(); view.invalidate(); print(mnt.t('sx.scale.done', { n: r.n })); } } });
  }
  // ---- 3D text (0.4 M11): a dialog, then the text as a component that lies on the face you click ----
  let textLast = { text: '', height: null, depth: 0 };
  function text3dDialog() {
    const u = model.units;
    const field = (id, label, inp) => [el('label', { for: id }, label), inp];
    const txt = el('textarea', { id: 'mc-t3-text', className: 'mc-input', rows: 3, maxLength: 400, spellcheck: false }, textLast.text);
    const h = el('input', { type: 'text', id: 'mc-t3-h', className: 'mc-input', value: formatLength(textLast.height ?? mnt.modelFormat?.textHeight ?? (u === 'ft-in' || u === 'in' ? 0.3048 : 0.3), u), autocomplete: 'off' });
    const dpt = el('input', { type: 'text', id: 'mc-t3-d', className: 'mc-input', value: formatLength(textLast.depth, u), autocomplete: 'off' });
    const err = el('p', { className: 'mc-note', role: 'alert' });
    const form = el('form', { method: 'dialog' },
      el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-t3-h2' }, mnt.t('app.text3d.h'))),
      el('div', { className: 'mc-dialog-text mc-props' }, ...field('mc-t3-text', mnt.t('app.text3d.text'), txt), ...field('mc-t3-h', mnt.t('app.text3d.height'), h), ...field('mc-t3-d', mnt.t('app.text3d.depth'), dpt)),
      el('p', { className: 'mc-note' }, mnt.t('app.text3d.note')), err,
      el('div', { className: 'mc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, mnt.t('app.btn.cancel')),
        el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, mnt.t('app.text3d.place'))));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-t3-h2' }, form);
    let go = null;
    form.addEventListener('submit', (e) => {
      const text = txt.value.replace(/\s+$/, ''), H = parseLength(h.value, u), D = dpt.value.trim() === '' ? 0 : parseLength(dpt.value, u);
      if (!text.trim()) { e.preventDefault(); err.textContent = mnt.t('app.text3d.empty'); txt.focus(); return; }
      if (!(H > 0)) { e.preventDefault(); err.textContent = mnt.t('app.text3d.badh'); h.focus(); return; }
      if (D === null || !(D >= 0)) { e.preventDefault(); err.textContent = mnt.t('app.text3d.badd'); dpt.focus(); return; }
      go = { text, height: H, depth: D };
    });
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
    dlg.addEventListener('close', () => { dlg.remove(); focusView(); if (go) placeText(go); });
    root.append(dlg);
    dlg.showModal();
    txt.focus();
  }
  async function placeText(o) {
    textLast = o;
    let M, T3;
    try { print(mnt.t('app.text3d.loading')); [T3, M] = await Promise.all([import('./text3d.js'), mnt.solidsLib().then((L) => L.manifold())]); }
    catch { print(mnt.t('app.solid.noload')); return; }
    let defId;
    try { defId = model.change(mnt.t('app.undo.text3d'), (m) => T3.textDef(M, m, o.text, { height: o.height, depth: o.depth }).id, []); }
    catch (err) { print(err.message); return; }
    afterHistory();
    setTool('place', { defId, align: true, hint: () => mnt.t('app.text3d.where') });
    print(mnt.t('app.text3d.where'));
  }

  return { problemList, renderInfo, askText, printView, placeStarter, terrainFromSelection, terrainGridDialog, storeysDialog, scaleByDialog, text3dDialog };
}
