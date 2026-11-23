/* SPDX-License-Identifier: Apache-2.0 */
/**
 * info-sections-ui.js: info-ui.js's 10 bindings for this topic, moved out of mountInfo() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountInfoSections(ctx) is called once by mountInfo(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountInfo() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { hiddenCount, setCurveRadius, faceArea, reverseFaces, solidInfo, isStacked } from './model.js';
import { formatLength, formatArea, formatVolume, parseLength } from './units.js';
import { el } from './ui-util.js';
import { dist, dot, add, mul } from './vec.js';
import { canModify } from './group-mods.js';
import { modPanel } from './mesh/mod-panel.js';
import { angleLayout, formatDeg } from './infer.js';

export function mountInfoSections(ctx) {
  const { setInfoTitle, model, unhideEverything, host, tools, syncTool, ui, divideAsk, curveObjectFrom, scheduleInfo, meshInfo, explodeSel, groupModCtx, convertToMesh, cam, eraseSelection, syncSectionMenu, afterHistory, print, makeGroup, solidCheck, softenRow, tagPicker, partRules, stretchDialog, mnt } = ctx;

  // ---- the Info panel, one section per selection kind (PERF.78, perf-finish-11 r2: was one 200-line if / else-if chain in renderInfo;
  // each body below is that branch unchanged). P = the panel renderInfo builds: units, the open definition, the selection, the rows and buttons. ----
  /** Nothing selected: the whole model. */
  function infoModel(P) {
    const { u, row, btn } = P;
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
  }
  /** One whole arc, circle, polygon or curve (0.4 M3). */
  function infoCurve(P, cid, ci) {
    const { u, def, row, btn, lenBox, notes } = P;
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
  }
  /** One face. */
  function infoFace(P) {
    const { u, def, sel, row, btn } = P;
    const f = def.faces.get(sel[0].id);
    setInfoTitle(mnt.t('app.info.face'));
    if (f) { row(mnt.t('app.info.area'), formatArea(faceArea(def, f), u)); row(mnt.t('app.info.holes'), String(f.loops.length - 1)); row(mnt.t('app.info.color'), mnt.colorLabel(f.color)); }
    btn(mnt.t('app.info.reverse'), () => { model.change(mnt.t('app.info.reverse'), (m) => reverseFaces(m.context(host.path).def, [sel[0].id]), [model.context(host.path).def.id]); });
  }
  /** One edge. */
  function infoEdge(P) {
    const { def, sel, btn, lenBox, notes } = P;
    const e = def.edges.get(sel[0].id);
    setInfoTitle(mnt.t('app.info.edge'));
    if (e) lenBox(mnt.t('app.info.length'), 'mc-edgelen', dist(def.verts.get(e.a), def.verts.get(e.b)), (L) => model.change(mnt.t('app.undo.edge_length'), (m) => m.setEdgeLength(host.path, sel[0].id, L), [model.context(host.path).def.id]));
    if (e) notes.push(el('p', { className: 'mc-note' }, mnt.t('app.info.edge.note')));
    if (e) btn(mnt.t('app.info.divide'), divideAsk);   // 0.7 MC-DIVIDE
  }
  /** One group, component or mesh placement. */
  function infoPlacement(P) {
    const { u, def, sel, props, row, btn, lenBox, notes } = P;
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
  }
  /** One dimension. */
  function infoDim(P) {
    const { u, sel, props, row, btn, lenBox, notes } = P;
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
  }
  /** One section plane. */
  function infoSection(P) {
    const { u, sel, props, btn, notes } = P;
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
  }
  /** One guide line or point. */
  function infoGuide(P) {
    const { sel, btn } = P;
    const g = model.guides.get(sel[0].id);
    setInfoTitle(g?.kind === 'point' ? mnt.t('app.info.guide_point') : mnt.t('app.info.guide_line'));
    btn(mnt.t('app.info.delete'), eraseSelection);
  }
  /** Several things, or one of a kind with no section of its own. */
  function infoMany(P, { nF, nE, nI, nG, nD }) {
    const { u, def, sel, props, row, btn } = P;
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
  /** One selected thing of this kind (host.sel[0].t) -> its section. */
  const INFO_ONE = { f: infoFace, e: infoEdge, i: infoPlacement, d: infoDim, s: infoSection, g: infoGuide };

  return { infoModel, infoCurve, infoMany, INFO_ONE };
}
