/* SPDX-License-Identifier: Apache-2.0 */
/**
 * info-ui.js: modelcraft.js's 21 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountInfo(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { solidProblems, fixSolid, softenEdges, hiddenCount, curveInfo, setCurveRadius, faceArea, reverseFaces, solidInfo, isStacked, cleanStoreys } from './model.js';
import { el } from './ui-util.js';
import { getWorkspace } from './workspaces.js';
import { formatLength, parseLength, formatArea, formatVolume } from './units.js';
import { dist, dot, add, mul, ident } from './vec.js';
import { canModify } from './group-mods.js';
import { modPanel } from './mesh/mod-panel.js';
import { angleLayout, formatDeg } from './infer.js';
import * as i18n from "./i18n.js";

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
    if (!sel.length) {
      setInfoTitle(mnt.t('app.info.model'));
      let faces = 0, edges = 0;
      model.walk((d) => { faces += d.faces.size; edges += [...d.edges.values()].filter((e) => !e.soft).length; });
      const counts = model.instanceCounts();
      row(mnt.t('app.info.faces'), String(faces));
      row(mnt.t('app.info.edges'), String(edges));
      row(mnt.t('app.info.groups'), String([...model.defs.values()].filter((d) => d.kind === 'group').length));
      row(mnt.t('app.info.components'), mnt.t('app.info.components.n', { n: [...model.defs.values()].filter((d) => d.kind === 'component').length, placed: [...model.defs.values()].filter((d) => d.kind === 'component').reduce((n, d) => n + (counts.get(d.id) || 0), 0) }));
      row(mnt.t('app.info.guides'), String(model.guides.size));
      if (model.dims.size) row(mnt.t('app.info.dims'), String(model.dims.size));
      const nh = hiddenCount(model);
      if (nh) { row(mnt.t('app.info.hidden'), String(nh)); btn(mnt.t('ui.editmenu.unhide_all'), unhideEverything); }
      const bb = model.bbox();
      if (bb) row(mnt.t('app.info.size'), [0, 1, 2].map((k) => formatLength(bb.max[k] - bb.min[k], u)).join(' × '));
      if (model.guides.size) btn(mnt.t('app.info.del_guides'), () => { model.change(mnt.t('app.undo.del_guides'), (m) => { m.guides = new Map(); }, []); host.setSel([]); });
      if (model.dims.size) btn(mnt.t('app.info.del_dims'), () => { model.change(mnt.t('app.undo.del_dims'), (m) => { m.dims = new Map(); }, []); host.setSel([]); });
      ui.info.replaceChildren(props, actions, el('p', { className: 'mc-note' }, mnt.t('app.info.note', { unit: mnt.unitWords(u) })));
      return;
    }
    const nF = sel.filter((s) => s.t === 'f').length, nE = sel.filter((s) => s.t === 'e').length, nI = sel.filter((s) => s.t === 'i').length, nG = sel.filter((s) => s.t === 'g').length, nD = sel.filter((s) => s.t === 'd').length, nS = sel.filter((s) => s.t === 's').length;
    // one whole arc, circle or polygon (0.4 M3)
    const cid = nE === sel.length ? def.edges.get(sel[0].id)?.curve : null;
    const ci = cid && sel.every((s) => def.edges.get(s.id)?.curve === cid) ? curveInfo(def, cid) : null;
    if (ci && ci.edges.length === sel.length) {
      setInfoTitle(mnt.t('app.info.curve.' + (['arc', 'circle', 'polygon'].includes(ci.kind) ? ci.kind : 'curve')));
      if (ci.round && ci.flat) lenBox(mnt.t('app.info.radius'), 'mc-radius', ci.radius, (L) => model.change(mnt.t('app.info.radius'), (m) => setCurveRadius(m.context(host.path).def, cid, L), [model.context(host.path).def.id]));
      else if (ci.round) row(mnt.t('app.info.radius'), formatLength(ci.radius, u));
      row(ci.kind === 'polygon' ? mnt.t('app.info.sides') : mnt.t('app.info.segments'), String(ci.segs));
      if (ci.kind === 'arc' && ci.round) row(mnt.t('app.info.angle'), (Math.round((ci.sweep * 180) / Math.PI * 100) / 100) + '°');
      row(mnt.t('app.info.length'), formatLength(ci.length, u));
      if (ci.kind === 'curve' && def.splines.has(cid)) { row(mnt.t('app.info.points'), String(def.splines.get(cid).pts.length)); btn(mnt.t('app.info.edit_points'), () => { tools.set('curve', { edit: cid }); syncTool(); ui.over.focus({ preventScroll: true }); }); }
      if (ci.round && !ci.flat) notes.push(el('p', { className: 'mc-note' }, mnt.t('app.info.radius.fixed')));
      btn(mnt.t('app.info.divide'), divideAsk);   // 0.7 MC-DIVIDE
      btn(mnt.t('app.info.curve.object'), () => curveObjectFrom(cid, ci));   // 0.7 MD.6
      ui.info.replaceChildren(props, ...notes, actions);
      return;
    }
    if (sel.length === 1 && nF === 1) {
      const f = def.faces.get(sel[0].id);
      setInfoTitle(mnt.t('app.info.face'));
      if (f) { row(mnt.t('app.info.area'), formatArea(faceArea(def, f), u)); row(mnt.t('app.info.holes'), String(f.loops.length - 1)); row(mnt.t('app.info.color'), mnt.colorLabel(f.color)); }
      btn(mnt.t('app.info.reverse'), () => { model.change(mnt.t('app.info.reverse'), (m) => reverseFaces(m.context(host.path).def, [sel[0].id]), [model.context(host.path).def.id]); });
    } else if (sel.length === 1 && nE === 1) {
      const e = def.edges.get(sel[0].id);
      setInfoTitle(mnt.t('app.info.edge'));
      if (e) lenBox(mnt.t('app.info.length'), 'mc-edgelen', dist(def.verts.get(e.a), def.verts.get(e.b)), (L) => model.change(mnt.t('app.undo.edge_length'), (m) => m.setEdgeLength(host.path, sel[0].id, L), [model.context(host.path).def.id]));
      if (e) notes.push(el('p', { className: 'mc-note' }, mnt.t('app.info.edge.note')));
      if (e) btn(mnt.t('app.info.divide'), divideAsk);   // 0.7 MC-DIVIDE
    } else if (sel.length === 1 && nI === 1) {
      const inst = def.insts.get(sel[0].id), d = inst && model.def(inst.def);
      if (d) {
        const counts = model.instanceCounts();
        setInfoTitle(d.mesh ? mnt.t('app.info.mesh') : d.kind === 'component' ? mnt.t('app.info.component') : mnt.t('app.info.group'));
        // a part inside an open component: how it follows when the component is stretched (0.4 M26)
        if (host.path.length && def.kind === 'component') partRules(props, def, sel[0].id);
        row(mnt.t('app.info.color'), mnt.colorLabel(inst.color));
        tagPicker(props, [inst]);
        props.append(el('label', { for: 'mc-defname' }, mnt.t('app.info.name')));
        const inp = el('input', { type: 'text', id: 'mc-defname', className: 'mc-input', value: d.name, maxLength: 120 });
        inp.addEventListener('change', () => { const v = inp.value.trim().slice(0, 120); if (v && v !== d.name) model.change(mnt.t('app.scene.rename'), (m) => { m.def(d.id).name = v; }, [d.id]); scheduleInfo(); });
        props.append(inp);
        if (d.kind === 'component' || (d.mesh && (counts.get(d.id) || 0) > 1)) row(mnt.t('app.info.placed'), mnt.t('app.info.placed.n', { n: counts.get(d.id) || 0 }));
        if (d.mesh) meshInfo(d, inst, sel[0].id, counts, { row, btn, notes, u });
        else {
        const s = solidInfo(d);
        row(mnt.t('app.info.solid'), s.closed && !d.insts.size ? mnt.t('app.yes') : mnt.t('app.no'));
        if (s.closed && !d.insts.size) {
          const k = Math.cbrt(Math.abs(inst.m[0] * (inst.m[5] * inst.m[10] - inst.m[9] * inst.m[6]) - inst.m[4] * (inst.m[1] * inst.m[10] - inst.m[9] * inst.m[2]) + inst.m[8] * (inst.m[1] * inst.m[6] - inst.m[5] * inst.m[2])));
          row(mnt.t('app.info.volume'), formatVolume(s.volume * k * k * k, u));
        }
        const bb = model.bbox(d);
        // the size as placed: the definition's own size times this placement's scale along each of its axes
        const sc = [0, 1, 2].map((q) => Math.hypot(inst.m[q * 4], inst.m[q * 4 + 1], inst.m[q * 4 + 2]));
        if (bb) [mnt.t('app.info.width'), mnt.t('app.info.depth'), mnt.t('app.info.height')].forEach((lb, q) => {
          const own = bb.max[q] - bb.min[q], placed = own * sc[q];
          if (isStacked(d)) row(lb, formatLength(placed, u));   // 0.8 GH.2: the stack decides the size (change a factor)
          else if (placed > 1e-6) lenBox(lb, 'mc-size' + q, placed, (L) => model.change(mnt.t(d.kind === 'component' ? 'app.undo.resize_component' : 'app.undo.resize_group'), (m) => m.setDefSize(d.id, q, L / sc[q]), [d.id]));
          else row(lb, formatLength(0, u));
        });
        const stacked = isStacked(d);   // 0.8 GH.2
        if (!stacked && !(s.closed && !d.insts.size)) solidCheck(d, sel[0].id, notes);
        if (!stacked) softenRow(props, () => ({ defId: d.id, eids: [...d.edges.keys()] }));
        // 0.4 M26: a component made of parts stretches its parts by their rules, for this copy only
        if (!stacked && d.kind === 'component' && (d.insts.size || d.dyn)) btn(mnt.t('app.dyn.stretch'), () => stretchDialog(sel[0].id));
        if (d.dyn) notes.push(el('p', { className: 'mc-note' }, mnt.t('app.dyn.is', { name: model.def(d.dyn.src)?.name || '' })));
        if (!stacked) { btn(mnt.t('app.info.edit'), () => host.openContext([...host.path, sel[0].id])); btn(mnt.t('app.info.explode'), explodeSel); }
        if (stacked || canModify(d)) notes.push(modPanel(groupModCtx(d.id, sel[0].id)));   // 0.8 GH.2
        if (d.kind === 'component' && (counts.get(d.id) || 0) > 1) btn(mnt.t('app.info.make_unique'), () => { model.change(mnt.t('app.info.make_unique'), (m) => m.makeUnique(m.context(host.path).def, sel[0].id), [model.context(host.path).def.id]); scheduleInfo(); });
        if (d.kind === 'group' && !stacked) btn(mnt.t('app.undo.make_component'), () => { model.change(mnt.t('app.undo.make_component'), (m) => { const dd = m.def(d.id); dd.kind = 'component'; dd.name = m.uniqueName(mnt.t('app.info.component')); }, [d.id]); scheduleInfo(); });
        if (!stacked) btn(mnt.t('app.info.mesh.convert'), () => convertToMesh(sel[0].id));
        }
      }
    } else if (sel.length === 1 && nD === 1) {
      const dm = model.dims.get(sel[0].id), id = sel[0].id;
      setInfoTitle(mnt.t({ rad: 'app.info.dim.rad', dia: 'app.info.dim.dia', ang: 'app.info.dim.ang' }[dm?.kind] || 'app.info.dim'));
      if (dm && (dm.kind === 'rad' || dm.kind === 'dia')) {
        // 0.4 M5: a radius or diameter; retyping it gives the curve a new size about its centre
        const g = model.radialAt(dm.c), dia = dm.kind === 'dia';
        if (g?.live && g.flat) lenBox(mnt.t(dia ? 'app.info.diameter' : 'app.info.radius'), 'mc-dimlen', dia ? 2 * g.r : g.r, (L) => model.change(mnt.t('app.undo.dim_length'), (m) => m.setDimLength(id, L), model.dimScope(id)));
        else if (g) row(mnt.t(dia ? 'app.info.diameter' : 'app.info.radius'), formatLength(dia ? 2 * g.r : g.r, u));
        props.append(el('label', { for: 'mc-dimkind' }, mnt.t('app.info.dim.show')));
        const ks = el('select', { id: 'mc-dimkind', className: 'mc-select' }, el('option', { value: 'rad' }, mnt.t('app.info.radius')), el('option', { value: 'dia' }, mnt.t('app.info.diameter')));
        ks.value = dm.kind;
        ks.addEventListener('change', () => { model.change(mnt.t('app.undo.dim_kind'), (m) => { m.dims.get(id).kind = ks.value; }, []); scheduleInfo(); });
        props.append(ks);
        notes.push(el('p', { className: 'mc-note' }, mnt.t(!g?.live ? 'app.info.dim.rad_gone' : g.flat ? 'app.info.dim.rad_note' : 'app.info.dim.rad_fixed')));
      } else if (dm?.kind === 'ang') {
        const l = angleLayout(model.dimEnds(dm), dm.off, cam);
        row(mnt.t('app.info.angle'), mnt.t('m3d.dim.angle', { deg: formatDeg((l.L * 180) / Math.PI) }));
        notes.push(el('p', { className: 'mc-note' }, mnt.t('m3d.model.dim_angle_only')));
      } else if (dm) {
        const [pa, pb] = model.dimEnds(dm), attached = !!(dm.a.path && dm.b.path);
        lenBox(mnt.t('app.info.length'), 'mc-dimlen', dist(pa, pb), (L) => model.change(mnt.t('app.undo.dim_length'), (m) => m.setDimLength(id, L), model.dimScope(id)));
        props.append(el('label', { for: 'mc-dimmove' }, mnt.t('app.info.dim.moves')));
        const mv = el('select', { id: 'mc-dimmove', className: 'mc-select' },
          el('option', { value: 'b' }, mnt.t('app.info.dim.b')), el('option', { value: 'a' }, mnt.t('app.info.dim.a')), el('option', { value: 'both' }, mnt.t('app.info.dim.both')));
        mv.value = dm.move;
        mv.addEventListener('change', () => { model.change(mnt.t('app.undo.dim_end'), (m) => { m.dims.get(id).move = mv.value; }, []); scheduleInfo(); });
        props.append(mv);
        notes.push(el('p', { className: 'mc-note' }, attached
          ? mnt.t('app.info.dim.note')
          : mnt.t('app.info.dim.free')));
      }
      btn(mnt.t('app.info.delete'), eraseSelection);
    } else if (sel.length === 1 && nS === 1) {
      // a section plane (0.4 M7): active or not, its name, where it sits along its arrows, reverse, delete
      const id = sel[0].id, sp = model.sections.get(id);
      setInfoTitle(mnt.t('app.info.section'));
      if (sp) {
        props.append(el('label', { for: 'mc-secname' }, mnt.t('app.info.name')));
        const nm = el('input', { type: 'text', id: 'mc-secname', className: 'mc-input', value: sp.name, maxLength: 80 });
        nm.addEventListener('change', () => { const v = nm.value.trim().slice(0, 80); if (v && v !== sp.name) model.change(mnt.t('app.scene.rename'), (m) => { m.sections.get(id).name = v; }, []); scheduleInfo(); });
        props.append(nm);
        props.append(el('span', { className: 'k' }, mnt.t('app.info.section.cut')));
        const act = el('input', { type: 'checkbox', id: 'mc-secact', checked: model.activeSection === id });
        act.addEventListener('change', () => { model.change(mnt.t('app.undo.sec_active'), (m) => { m.activeSection = act.checked ? id : null; if (act.checked) m.sectionView.cuts = true; }, []); syncSectionMenu(); afterHistory(); });
        props.append(el('label', { className: 'mc-check' }, act, ' ' + mnt.t('app.info.section.active')));
        // its place along the arrows, from the model's origin: retype to slide it through the model
        const at = dot(sp.p, sp.n);
        props.append(el('label', { for: 'mc-secat' }, mnt.t('app.info.section.at')));
        const inp = el('input', { type: 'text', id: 'mc-secat', className: 'mc-input', value: formatLength(at, u), spellcheck: false, autocomplete: 'off' });
        inp.addEventListener('change', () => {
          // a length, which may be below zero (the far side of the origin)
          const neg = /^\s*-/.test(inp.value), L0 = parseLength(inp.value.replace(/^\s*-/, ''), u), L = L0 === null ? null : neg ? -L0 : L0;
          if (L === null || !Number.isFinite(L)) { print(mnt.t('app.len.bad')); inp.value = formatLength(at, u); return; }
          model.change(mnt.t('app.undo.sec_move'), (m) => { const s = m.sections.get(id); s.p = add(s.p, mul(s.n, L - dot(s.p, s.n))); }, []);
          print(mnt.t('app.sec.moved', { name: sp.name, len: formatLength(L, u) }));
          afterHistory();
        });
        props.append(inp);
        notes.push(el('p', { className: 'mc-note' }, mnt.t('app.info.section.note')));
        btn(mnt.t('app.info.section.reverse'), () => { model.change(mnt.t('app.undo.sec_reverse'), (m) => { const s = m.sections.get(id); s.n = mul(s.n, -1); }, []); afterHistory(); });
      }
      btn(mnt.t('app.info.delete'), eraseSelection);
    } else if (sel.length === 1 && nG === 1) {
      const g = model.guides.get(sel[0].id);
      setInfoTitle(g?.kind === 'point' ? mnt.t('app.info.guide_point') : mnt.t('app.info.guide_line'));
      btn(mnt.t('app.info.delete'), eraseSelection);
    } else {
      setInfoTitle(mnt.t('app.info.selected', { n: sel.length }));
      if (nF) row(mnt.t('app.info.faces'), String(nF));
      if (nE) row(mnt.t('app.info.edges'), String(nE));
      if (nI) row(mnt.t('app.info.groups_components'), String(nI));
      if (nI) tagPicker(props, sel.filter((x) => x.t === 'i').map((x) => def.insts.get(x.id)).filter(Boolean));
      if (nG) row(mnt.t('app.info.guides'), String(nG));
      if (nD) row(mnt.t('app.info.dims'), String(nD));
      if (nF) { let a = 0; for (const s of sel) if (s.t === 'f') { const f = def.faces.get(s.id); if (f) a += faceArea(def, f); } row(mnt.t('app.info.total_area'), formatArea(a, u)); }
      if (nF || nE) softenRow(props, () => {
        // the selected edges, and every edge of the selected faces
        const ids = new Set(sel.filter((x) => x.t === 'e').map((x) => x.id));
        const want = new Set();
        for (const s of sel) if (s.t === 'f') { const f = def.faces.get(s.id); if (f) for (const l of f.loops) for (let i = 0; i < l.length; i++) want.add([l[i], l[(i + 1) % l.length]].sort().join('|')); }
        if (want.size) for (const [eid, e] of def.edges) if (want.has([e.a, e.b].sort().join('|'))) ids.add(eid);
        return { path: host.path.slice(), eids: [...ids] };
      });
      btn(mnt.t('app.info.make_component_key'), () => makeGroup('component'));
      btn(mnt.t('app.info.make_group_key'), () => makeGroup('group'));
    }
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
