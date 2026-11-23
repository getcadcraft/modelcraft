/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tree-ui.js: modelcraft.js's 17 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountTree(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { getWorkspace, workspaceOfCmd } from './workspaces.js';
import { el } from './ui-util.js';
import { hideSel, isStacked } from './model.js';
import { limitSelect, onUnitsChange } from './unit-prefs.js';

export function mountTree(ctx) {
  const { ST, ui, model, selListeners, host, view, tools, print, setTool, afterHistory, ctxDef, renderScenes, scheduleInfo, root } = ctx;

  // ---- panels: outliner, components, entity info ----
  ST.infoTimer = 0;
  // Toolbar and menu availability: a button that cannot do anything right now is greyed out
  const NEEDS_SEL = new Set(['copy', 'cut', 'duplicate', 'delete', 'hide', 'isolate', 'group', 'component', 'select-none', 'intersect-sel', 'terrain-contours',
    'flip-x', 'flip-y', 'flip-z', 'flipcopy-x', 'flipcopy-y', 'flipcopy-z', 'solid-union', 'solid-intersect']);   // Subtract picks its two pieces in turn: no selection needed
  function renderToolbar() {
    const def = model.root, empty = !(def.edges.size || def.faces.size || def.insts.size || model.dims.size || model.guides.size);
    const sel = host.sel, has = (...ts) => sel.some((x) => ts.includes(x.t));
    for (const b of root.querySelectorAll('[data-act]')) {
      const a = b.dataset.act;
      if (a === 'new') b.disabled = empty && !model.dirty;
      else if (a === 'save') b.disabled = empty && !model.dirty;
      else if (a === 'undo') b.disabled = !model.canUndo();
      else if (a === 'redo') b.disabled = !model.canRedo();
      else if (a === 'paste' || a === 'paste-in-place') b.disabled = !window.modelcraft.clip();
      else if (a === 'extents' || a === 'select-all' || a === 'intersect-model' || a === 'storeys') b.disabled = empty;
      else if (a === 'explode') b.disabled = !has('i');
      else if (a === 'del-guides') b.disabled = !model.guides.size;   // 0.7.1
      else if (a === 'axes-face') b.disabled = !(sel.length === 1 && sel[0].t === 'f');
      else if (NEEDS_SEL.has(a)) b.disabled = !sel.length;
    }
    // 0.7: a workspace's own buttons, off with the reason in their title
    for (const b of root.querySelectorAll('[data-cmd]')) {
      const w = getWorkspace(workspaceOfCmd(b.dataset.cmd));
      if (!w || w.id !== ST.wsId || !ST.wsHost) continue;
      const st = w.toolState?.(b.dataset.cmd, ST.wsHost) || { ok: true };
      b.disabled = !st.ok;
      b.dataset.why = st.ok ? '' : st.why || '';
      if (st.pressed !== undefined) b.setAttribute('aria-pressed', String(!!st.pressed)); else b.removeAttribute('aria-pressed');
      // 0.9 FX.31: a button may show another icon and word while it is on (Play shows Pause while playing); back when it is off
      const ic = b.querySelector('i'), sp = b.querySelector('span');
      if (ic && sp) {
        if (b.dataset.idleIcon === undefined) { b.dataset.idleIcon = ic.className; b.dataset.idleLabel = sp.textContent; b.dataset.idleTitle = b.title; }
        if (st.icon) { ic.className = 'bi bi-' + st.icon; sp.textContent = st.label || sp.textContent; if (st.title) b.title = st.title; }
        else if (b.dataset.idleIcon !== ic.className) { ic.className = b.dataset.idleIcon; sp.textContent = b.dataset.idleLabel; b.title = b.dataset.idleTitle; }
      }
    }
  }
  window.addEventListener('storage', (e) => { if (e.key === 'modelcraft.clipboard') scheduleInfo(); });

  function fireSel() { const k = host.sel.map((x) => x.t + x.id).join(','); if (k === ST.selKey) return; ST.selKey = k; for (const fn of [...selListeners]) { try { fn(); } catch (e) { console.warn(e); } } }
  ST.scenesSeen = '';
  function renderScenesIfChanged() { const k = JSON.stringify(model.scenes.map((s) => [s.name, !!s.lock])) + ST.sceneIndex; if (k !== ST.scenesSeen) { ST.scenesSeen = k; renderScenes(); } }

  // Outliner (0.4 M22): search by name, an eye per row (hide/show, M17), F2 renames in place. Drag a row (0.6.1): onto the
  // middle of a group's row = inside it, onto a row's top or bottom edge = just before / after it (the order), onto the
  // Outliner heading = the top level, last; each drop one undo step, keeping where it is in the world. Pointer events, not
  // HTML drag and drop: a desktop web view's own file-drop handling (Studio on macOS) swallows HTML drops (FIX-061-OUTLINER).
  ST.treeFilter = ''; ST.treeDrag = null; ST.treeClickEat = false;
  ui.treeSearch.addEventListener('input', () => { ST.treeFilter = ui.treeSearch.value.trim().toLowerCase(); renderTree(); });
  ui.treeSearch.addEventListener('keydown', (e) => { if (e.key === 'Escape') { ui.treeSearch.value = ''; ST.treeFilter = ''; renderTree(); } });
  /** Move the placement f {parent, iid} into the group open at `to`, before/after `ref` (null: last) — one undo step. */
  function moveRow(f, to, ref = null, where = 'before') {
    if (!f) return false;
    const same = f.parent.join() === to.join();
    let nid2;
    try { nid2 = model.change(ctx.t(same ? 'app.undo.tree_order' : 'app.undo.tree_move'), (m) => m.moveTo(f.parent, f.iid, to, ref, where), [model.context(f.parent).def.id, model.context(to).def.id]); }
    catch (err) { print(err.message); return false; }
    host.path = to.slice(); host.setSel([{ t: 'i', id: nid2 }]);
    const name = model.def(model.context(to).def.insts.get(nid2).def).name;
    print(same ? ctx.t('app.tree.reordered', { name }) : to.length ? ctx.t('app.tree.moved_in', { name, group: model.context(to).def.name }) : ctx.t('app.tree.moved_top', { name }));
    afterHistory();
    return true;
  }
  /** Where a drag at (x, y) would drop: {to, ref, where, el, cls} or null (not over the Outliner, or onto itself / inside itself). */
  function treeTarget(x, y, f = ST.treeDrag?.from) {
    const hitEl = document.elementFromPoint(x, y);
    if (!f || !hitEl) return null;
    if (ui.treeTop.contains(hitEl)) return { to: [], ref: null, where: 'before', el: ui.treeTop, cls: 'is-drop' };
    const row = hitEl.closest('.mc-node');
    if (!row || !ui.tree.contains(row)) return ui.tree.contains(hitEl) || hitEl === ui.tree ? { to: [], ref: null, where: 'before', el: ui.treeTop, cls: 'is-drop' } : null;
    const p = row.dataset.path.split('.').map(Number), iid = p[p.length - 1], parent = p.slice(0, -1);
    const mine = [...f.parent, f.iid];
    if (mine.every((v, i) => p[i] === v) && p.length > mine.length) return null;   // a row inside the dragged one
    const b = row.getBoundingClientRect(), rel = (y - b.top) / Math.max(1, b.height);
    const isSelf = p.length === mine.length && mine.every((v, i) => p[i] === v);
    if (rel < 0.3 || rel > 0.7 || isSelf) {
      if (isSelf) return null;
      return { to: parent, ref: iid, where: rel < 0.5 ? 'before' : 'after', el: row, cls: rel < 0.5 ? 'is-drop-before' : 'is-drop-after' };
    }
    return { to: p, ref: null, where: 'before', el: row, cls: 'is-drop' };
  }
  function treeMark(tg) {
    for (const x of root.querySelectorAll('.is-drop, .is-drop-before, .is-drop-after')) x.classList.remove('is-drop', 'is-drop-before', 'is-drop-after');
    if (tg) tg.el.classList.add(tg.cls);
  }
  function treeDragEnd(commit, e) {
    const d = ST.treeDrag;
    ST.treeDrag = null;
    if (!d) return;
    clearTimeout(d.timer);
    root.classList.remove('mc-tree-dragging');
    if (!d.on) return;
    const tg = commit && e ? treeTarget(e.clientX, e.clientY, d.from) : null;
    treeMark(null);
    ST.treeClickEat = true; setTimeout(() => { ST.treeClickEat = false; }, 0);   // the click after a drag is not a select
    if (tg) moveRow(d.from, tg.to, tg.ref, tg.where);
  }
  function treeDragStart(e, from) {
    if (e.button !== 0 || ST.treeFilter) return;   // a filtered list hides rows: no drops between what can't be seen
    const touch = e.pointerType === 'touch';
    ST.treeDrag = { from, id: e.pointerId, x: e.clientX, y: e.clientY, on: false, touch, el: e.currentTarget, timer: 0 };
    // a finger scrolls the list: a drag starts after holding still for a moment
    if (touch) ST.treeDrag.timer = setTimeout(() => { if (ST.treeDrag && !ST.treeDrag.on) { ST.treeDrag.on = true; root.classList.add('mc-tree-dragging'); try { navigator.vibrate?.(15); } catch { /* none */ } } }, 450);
  }
  window.addEventListener('pointermove', (e) => {
    const d = ST.treeDrag;
    if (!d || e.pointerId !== d.id) return;
    if (!d.on) {
      if (Math.hypot(e.clientX - d.x, e.clientY - d.y) < 5) return;
      if (d.touch) { ST.treeDrag = null; clearTimeout(d.timer); return; }   // moved before the hold: it was a scroll
      d.on = true; root.classList.add('mc-tree-dragging');
      try { d.el.setPointerCapture(e.pointerId); } catch { /* gone */ }
    }
    e.preventDefault();
    treeMark(treeTarget(e.clientX, e.clientY));
  }, true);
  window.addEventListener('pointerup', (e) => { if (ST.treeDrag && e.pointerId === ST.treeDrag.id) treeDragEnd(true, e); }, true);
  window.addEventListener('pointercancel', (e) => { if (ST.treeDrag && e.pointerId === ST.treeDrag.id) treeDragEnd(false); }, true);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && ST.treeDrag?.on) { e.preventDefault(); e.stopPropagation(); treeDragEnd(false); } }, true);
  // while a finger drags a row, the list must not scroll under it
  ui.tree.addEventListener('touchmove', (e) => { if (ST.treeDrag?.on) e.preventDefault(); }, { passive: false });
  ui.tree.addEventListener('contextmenu', (e) => { if (ST.treeDrag) e.preventDefault(); });
  ui.tree.addEventListener('click', (e) => { if (ST.treeClickEat) { e.stopPropagation(); e.preventDefault(); } }, true);
  function renameRow(btn, d) {
    const nm = btn.querySelector('.nm');
    const inp = el('input', { type: 'text', className: 'mc-input mc-tree-name', value: d.name, maxLength: 120, 'aria-label': ctx.t('app.info.name') });
    let done = false;
    const finish = (keep) => {
      if (done) return; done = true;
      const v = inp.value.trim().slice(0, 120);
      inp.blur();
      if (keep && v && v !== d.name) { model.change(ctx.t('app.scene.rename'), (m) => { m.def(d.id).name = v; }, [d.id]); print(ctx.t('app.tree.renamed', { name: v })); }
      afterHistory(); renderTree();
    };
    inp.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') finish(true); else if (e.key === 'Escape') finish(false); });
    inp.addEventListener('blur', () => finish(true));
    nm.replaceWith(inp);
    inp.focus(); inp.select();
  }
  function renderTree() {
    // not while a row is being renamed (a redraw would take the box away); finishing the rename redraws
    if (document.activeElement?.classList?.contains('mc-tree-name') && ui.tree.contains(document.activeElement)) return;
    const offTags = model.hiddenTags();
    ui.tree.replaceChildren();
    const counts = model.instanceCounts();
    const selIds = new Set(host.sel.filter((s) => s.t === 'i').map((s) => s.id));
    ui.treeSearch.hidden = model.root.insts.size < 2 && !ST.treeFilter;
    // with a search: a row shows when its name matches, or something inside it does
    const matches = new Map();
    const hit = (def, depth = 0) => {
      if (depth > 12) return false;
      if (matches.has(def.id)) return matches.get(def.id);
      let any = false;
      for (const inst of def.insts.values()) { const d = model.def(inst.def); if (d && (d.name.toLowerCase().includes(ST.treeFilter) || hit(d, depth + 1))) any = true; }
      matches.set(def.id, any);
      return any;
    };
    const walk = (def, path, ul, depth) => {
      if (depth > 12) return;
      for (const [iid, inst] of def.insts) {
        const d = model.def(inst.def);
        if (!d) continue;
        const own = !ST.treeFilter || d.name.toLowerCase().includes(ST.treeFilter);
        if (ST.treeFilter && !own && !hit(d)) continue;
        const p = [...path, iid];
        const open = host.path.length >= p.length && p.every((x, i) => host.path[i] === x);
        const isSel = selIds.has(iid) && path.length === host.path.length && path.every((x, i) => host.path[i] === x);
        const off = inst.hidden || (inst.tag && offTags.has(inst.tag));   // hidden itself (M17), or by its tag (M6)
        const btn = el('button', {
          type: 'button', className: 'mc-node' + (isSel ? ' is-sel' : '') + (open ? ' is-open' : '') + (off ? ' is-hidden' : '') + (ST.treeFilter && own ? ' is-match' : ''),
          title: ctx.t('app.tree.title'), dataset: { path: p.join('.') },
          onclick: () => { host.path = path; host.setSel([{ t: 'i', id: iid }]); },
          ondblclick: () => host.openContext(p),
        }, el('i', { className: 'bi bi-' + (d.kind === 'component' ? 'boxes' : 'collection'), 'aria-hidden': 'true' }),   // i18n-ignore: an icon class
        el('span', { className: 'nm' }, d.name + (d.kind === 'component' && counts.get(d.id) > 1 ? ' (' + counts.get(d.id) + ')' : '')),
        off && !inst.hidden ? el('span', { className: 'mc-hidden-tag', title: ctx.t('app.tree.hidden_tag', { name: inst.tag }) }, el('i', { className: 'bi bi-tag', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, ' ' + ctx.t('app.tree.hidden_tag', { name: inst.tag }))) : null);
        btn.addEventListener('keydown', (e) => { if (e.key === 'F2') { e.preventDefault(); e.stopPropagation(); renameRow(btn, d); } });
        btn.addEventListener('pointerdown', (e) => treeDragStart(e, { parent: path.slice(), iid }));
        // the eye: hide or show this placement (Edit › More › Hide does the same)
        const eye = el('button', { type: 'button', className: 'mc-eye', 'aria-pressed': String(!inst.hidden), title: ctx.t(inst.hidden ? 'app.tree.show' : 'app.tree.hide', { name: d.name }), 'aria-label': ctx.t(inst.hidden ? 'app.tree.show' : 'app.tree.hide', { name: d.name }),
          onclick: () => { model.change(ctx.t(inst.hidden ? 'app.undo.unhide' : 'app.undo.hide'), (m) => hideSel(m.context(path).def, [{ t: 'i', id: iid }], !inst.hidden), [model.context(path).def.id]); host.setSel(host.sel.filter((s) => s.id !== iid)); afterHistory(); } },
          el('i', { className: inst.hidden ? 'bi bi-eye-slash' : 'bi bi-eye', 'aria-hidden': 'true' }));
        const li = el('li', { dataset: { iid: String(iid) } }, el('div', { className: 'mc-node-row' }, btn, eye));
        if (d.insts.size && !isStacked(d)) { const sub = el('ul'); walk(d, p, sub, depth + 1); if (sub.children.length) li.append(sub); }
        ul.append(li);
      }
    };
    walk(model.root, [], ui.tree, 0);
    ui.treeEmpty.hidden = model.root.insts.size > 0;
    ui.closeCtx.hidden = !host.path.length;
    const names = [];
    let d = model.root;
    for (const iid of host.path) { const inst = d.insts.get(iid); if (!inst) break; d = model.def(inst.def); names.push(d.name); }
    ui.crumbs.textContent = names.length ? ctx.t('app.tree.crumbs', { path: names.join(' › ') }) : '';
  }
  ui.closeCtx.addEventListener('click', () => { while (host.path.length) host.closeContext(); });
  ui.tagAdd.addEventListener('click', addTagRow);

  function renderComps() {
    const counts = model.instanceCounts();
    const comps = [...model.defs.values()].filter((d) => d.kind === 'component');
    ui.comps.replaceChildren(...comps.map((d) => el('li', {},
      el('span', { className: 'nm', title: d.name }, d.name),
      el('span', { className: 'n' }, String(counts.get(d.id) || 0) + '×'),
      el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { setTool('place', d.id); print(ctx.t('app.comp.place.where', { name: d.name })); } }, ctx.t('app.comp.place')))));
    ui.compsEmpty.hidden = comps.length > 0;
  }

  // ---- Tags (0.4 M6): named switches that show and hide groups and components; kept in the file ----
  ST.tagsDrawn = '';
  function renderTags() {
    const counts = model.tagCounts();
    const sig = JSON.stringify([model.tags, [...counts]]);
    // not while a name is being typed (a redraw would take the box away); the next change redraws
    if (sig === ST.tagsDrawn || ui.tags.contains(document.activeElement) && document.activeElement.tagName === 'INPUT') return;
    ST.tagsDrawn = sig;
    const rows = [el('li', {}, el('span', { className: 'mc-eye', 'aria-hidden': 'true' }, el('i', { className: 'bi bi-eye' })),
      el('span', { className: 'nm' }, ctx.t('app.tag.untagged')), el('span', { className: 'n' }, String(counts.get('') || 0)), el('span', {}))];
    for (const g of model.tags) {
      const name = g.name, on = !g.hidden;
      const inp = el('input', { type: 'text', className: 'mc-input', value: name, maxLength: 80, spellcheck: false, autocomplete: 'off', 'aria-label': ctx.t('app.tag.name') });
      inp.addEventListener('change', () => {
        const v = inp.value.trim();
        if (!v || v === name) { inp.value = name; return; }
        try { model.change(ctx.t('app.undo.tag_rename'), (m) => m.renameTag(name, v), model.holding(model.tag(name)?.name ?? name)); print(ctx.t('app.tag.renamed', { old: name, name: model.tag(v).name })); }
        catch (err) { print(err.message); inp.value = name; }
        ST.tagsDrawn = ''; afterHistory();
      });
      inp.addEventListener('keydown', (e) => { if (e.key === 'Escape') { inp.value = name; inp.blur(); } else if (e.key === 'Enter') inp.blur(); });
      rows.push(el('li', { className: on ? '' : 'is-off', dataset: { tag: name } },
        el('button', { type: 'button', className: 'mc-eye', 'aria-pressed': String(on), title: ctx.t(on ? 'app.tag.hide' : 'app.tag.show', { name }), 'aria-label': ctx.t(on ? 'app.tag.hide' : 'app.tag.show', { name }), onclick: () => showTag(name, !on) },
          el('i', { className: on ? 'bi bi-eye' : 'bi bi-eye-slash', 'aria-hidden': 'true' })),
        inp,
        el('span', { className: 'n' }, String(counts.get(name) || 0)),
        el('button', { type: 'button', className: 'mc-del', title: ctx.t('app.tag.delete', { name }), 'aria-label': ctx.t('app.tag.delete', { name }), onclick: () => deleteTagNamed(name) },
          el('i', { className: 'bi bi-trash3', 'aria-hidden': 'true' }))));
    }
    ui.tags.replaceChildren(...rows);
  }
  function showTag(name, on) {
    tools.escape();
    model.change(ctx.t(on ? 'app.undo.tag_show' : 'app.undo.tag_hide'), (m) => m.setTagHidden(name, !on), []);
    if (!on) {
      // what now hides cannot stay selected, and a group being edited inside closes above the first hidden one
      let def = model.root, k = 0;
      for (; k < host.path.length; k++) { const i = def.insts.get(host.path[k]); if (!i || i.tag === name) break; def = model.def(i.def); }
      if (k < host.path.length) { while (host.path.length > k) host.closeContext(); }
      const d = ctxDef();
      host.setSel(host.sel.filter((s) => !(s.t === 'i' && d.insts.get(s.id)?.tag === name)));
    }
    print(ctx.t(on ? 'app.tag.shown' : 'app.tag.hidden', { name }));
    ST.tagsDrawn = ''; afterHistory();
  }
  function addTagRow() {
    const nm = model.change(ctx.t('app.undo.tag_add'), (m) => m.addTag(), []);
    ST.tagsDrawn = ''; renderTags(); scheduleInfo();
    const inp = ui.tags.querySelector(`li[data-tag="${CSS.escape(nm)}"] input`);
    if (inp) { inp.focus(); inp.select(); }
    print(ctx.t('app.tag.added', { name: nm }));
  }
  function deleteTagNamed(name) {
    const n = model.change(ctx.t('app.undo.tag_delete'), (m) => m.deleteTag(name), model.holding(model.tag(name)?.name ?? name));
    print(ctx.t('app.tag.deleted', { name, n }));
    ST.tagsDrawn = ''; afterHistory();
  }

  // ---- units ----
  // the picker lists the units turned on in Settings › General › Units, and always the model's own (0.7 UNITS)
  function showUnits() { limitSelect(ui.units, 'length', { keep: [model.units] }); ui.units.value = model.units; }
  showUnits();
  onUnitsChange(showUnits);
  ui.units.addEventListener('change', () => {
    model.units = ui.units.value;
    print(ctx.t(model.units === 'ft-in' ? 'app.units.set.ftin' : 'app.units.set', { unit: ctx.unitWords(model.units) }));
    scheduleInfo();
    view.invalidate();
    if (tools.tool.lastEv) tools.tool.hover?.(tools.tool.lastEv);
  });

  return { renderToolbar, fireSel, renderScenesIfChanged, renderTree, renderComps, renderTags, showUnits };
}
