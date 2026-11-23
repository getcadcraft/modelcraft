/* SPDX-License-Identifier: Apache-2.0 */
/**
 * context-menu-ui.js: modelcraft.js's 13 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountContextMenu(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { hiddenCount, isStacked } from './model.js';
import { el } from './ui-util.js';
import { switcher as wsSwitcher, listWorkspaces, toolbarGroups, getWorkspace, workspaceOfCmd } from './workspaces.js';
import { dist } from './vec.js';
import { Mesh } from './mesh.js';
import { formatLength, parseLength } from './units.js';
import { textCurve } from './ws-curve.js';
import { GROUP_TYPES, setModifiers, modifierDef } from './group-mods.js';
import { worldOf, makeLattice } from './mesh/mod-eval.js';

export function mountContextMenu(mnt) {
  const { ST, ui, model, cam, modEval, host, view, tools, print, hideHint, afterHistory, ctxDef, scheduleInfo, focusView, root } = mnt;

  // ---- 0.7.1 MC-RIGHTCLICK-MENU: the context menu for what is under the pointer (a right click; the menu key, Shift+F10) ----
  // A right click picks as a plain left click would (unless the thing is already selected), then lists what can be done
  // with the selection; every item runs the same function as its menu or key. Looks like the shell's toolbar menu (.shell-ctx).
  ST.ctxMenu = null;
  function ctxItems() {
    const sel = host.sel, has = (...ts) => sel.some((x) => ts.includes(x.t)), one = sel.length === 1 ? sel[0] : null;
    const out = [];
    const it = (k, icon, label, run, off = false) => out.push({ k, icon, label, run, off });
    const sep = () => { if (out.length && out[out.length - 1] !== '-') out.push('-'); };
    if (tools.tool.busy) {
      if (tools.tool.finish) it('done', 'bi-check-lg', mnt.t('ui.touch.done'), () => { if (!tools.tool.finish?.()) tools.escape(); });
      it('cancel', 'bi-x-lg', mnt.t('ui.touch.cancel'), () => tools.escape());
      sep();
    }
    if (one && one.t === 'i') it('edit', 'bi-box-arrow-in-down-right', mnt.t('app.ctx.edit'), () => host.openContext([...host.path, one.id]));
    if (has('i')) it('explode', 'bi-grid-3x3-gap', mnt.t('input.cmd.organize.explode'), () => mnt.act('explode'));
    if (has('e', 'f')) { it('group', 'bi-collection', mnt.t('input.cmd.organize.group'), () => mnt.act('group')); it('component', 'bi-boxes', mnt.t('input.cmd.organize.component'), () => mnt.act('component')); }
    if (sel.length) {
      sep();
      it('cut', 'bi-scissors', mnt.t('input.cmd.edit.cut'), () => mnt.act('cut'));
      it('copy', 'bi-copy', mnt.t('input.cmd.edit.copy'), () => mnt.act('copy'));
      it('duplicate', 'bi-files', mnt.t('input.cmd.edit.duplicate'), () => mnt.act('duplicate'));
      it('delete', 'bi-trash', mnt.t('input.cmd.edit.delete'), () => mnt.act('delete'));
      sep();
      if (has('e', 'f', 'i')) { it('hide', 'bi-eye-slash', mnt.t('input.cmd.edit.hide'), () => mnt.act('hide')); it('isolate', 'bi-bullseye', mnt.t('input.cmd.edit.isolate'), () => mnt.act('isolate')); }
      it('zoom', 'bi-zoom-in', mnt.t('app.ctx.zoom_sel'), () => mnt.frameSelection());
    }
    sep();
    it('paste', 'bi-clipboard-plus', mnt.t('input.cmd.edit.paste'), () => mnt.act('paste'), !window.modelcraft.clip());
    if (hiddenCount(model)) it('unhide', 'bi-eye', mnt.t('input.cmd.edit.unhide-all'), () => mnt.act('unhide-all'));
    if (!sel.length) { it('all', 'bi-check2-all', mnt.t('input.cmd.edit.select-all'), () => mnt.act('select-all')); it('extents', 'bi-arrows-fullscreen', mnt.t('input.cmd.camera.extents'), () => mnt.act('extents')); }
    if (host.path.length) { sep(); it('close', 'bi-box-arrow-up-left', mnt.t('ui.outliner.close'), () => host.closeContext()); }
    if (out[out.length - 1] === '-') out.pop();
    return out;
  }
  function closeCtxMenu(refocus) {
    if (!ST.ctxMenu || ST.ctxMenu.hidden) return;
    ST.ctxMenu.hidden = true;
    if (refocus) ui.over.focus({ preventScroll: true });
  }
  /** p: a point in the view (canvas pixels). pick: a right click (pick what is under it first). */
  function openCtxMenu(p, pick) {
    hideHint();
    if (pick && !tools.tool.busy) {
      const s = tools.pickAt({ x: p.x, y: p.y });
      if (s && !host.sel.some((x) => x.t === s.t && x.id === s.id)) host.setSel([s]);
      scheduleInfo(); view.invalidate();
    }
    if (!ST.ctxMenu) {
      ST.ctxMenu = el('div', { className: 'shell-ctx mc-ctx', role: 'menu', 'aria-label': mnt.t('app.ctx.aria'), dataset: { mcCtx: '' }, hidden: true });
      ST.ctxMenu.addEventListener('click', (e) => {
        const b = e.target.closest('[role="menuitem"]');
        if (!b || b.getAttribute('aria-disabled') === 'true') return;
        closeCtxMenu(true);
        b.__run?.();
        scheduleInfo(); view.invalidate();
      });
      ST.ctxMenu.addEventListener('keydown', (e) => {
        e.stopPropagation();   // the view takes arrows, letters and Esc on the document
        const items = [...ST.ctxMenu.querySelectorAll('[role="menuitem"]')], i = items.indexOf(document.activeElement);
        if (e.key === 'Escape') { e.preventDefault(); closeCtxMenu(true); }
        else if (e.key === 'Tab') closeCtxMenu(false);
        else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length]?.focus(); }
        else if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); items[e.key === 'Home' ? 0 : items.length - 1]?.focus(); }
      });
      document.addEventListener('pointerdown', (e) => { if (ST.ctxMenu && !ST.ctxMenu.hidden && !ST.ctxMenu.contains(e.target)) closeCtxMenu(false); }, true);
      window.addEventListener('blur', () => closeCtxMenu(false));
      window.addEventListener('resize', () => closeCtxMenu(false));
      ui.over.addEventListener('wheel', () => closeCtxMenu(false), { passive: true });
      document.body.append(ST.ctxMenu);
    }
    ST.ctxMenu.replaceChildren(...ctxItems().map((x) => {
      if (x === '-') return el('hr');
      const b = el('button', { type: 'button', role: 'menuitem', tabIndex: -1, dataset: { ctx: x.k } }, el('i', { className: 'bi ' + x.icon, 'aria-hidden': 'true' }), el('span', {}, x.label));
      if (x.off) b.setAttribute('aria-disabled', 'true');
      b.__run = x.run;
      return b;
    }));
    ST.ctxMenu.hidden = false;
    const r = ui.over.getBoundingClientRect(), m = ST.ctxMenu.getBoundingClientRect();
    ST.ctxMenu.style.left = Math.max(4, Math.min(r.left + p.x, innerWidth - m.width - 4)) + 'px';
    ST.ctxMenu.style.top = Math.max(4, Math.min(r.top + p.y, innerHeight - m.height - 4)) + 'px';
    (ST.ctxMenu.querySelector('[role="menuitem"]:not([aria-disabled="true"])') || ST.ctxMenu.querySelector('[role="menuitem"]'))?.focus();
  }
  function sayLock() {
    const own = tools.tool.lockText?.();   // 0.7.1: the Rectangle tool locks a plane, not a line
    if (own) { print(own); return; }
    print(tools.lock ? mnt.t('app.lock.' + ({ 'axis-x': 'red', 'axis-y': 'green', 'axis-z': 'blue', parallel: 'edge' }[tools.lock.kind] || 'edge')) : mnt.t('app.lock.off'));
  }
  function finishTransform() {
    const tl = tools.tool;
    if (tools.name === 'move' && tl.p0) tl.finish();
    else if ((tools.name === 'rotate' || tools.name === 'scale') && tl.stage === 2) tl.finish();
    else if (tools.name === 'push' && tl.fid !== null) tl.finish();
    scheduleInfo();
  }
  /** The tool buttons show what tools.grab/turn/resize switched to. */
  function syncTool() {
    for (const b of mnt.tearAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === tools.name));
    ui.over.classList.toggle('is-select', tools.name === 'select' || tools.name === 'erase');
    ui.over.classList.remove('is-orbit');
  }
  document.addEventListener('keyup', (e) => { if (e.key === 'Shift') tools.keyUp('Shift'); });

  ui.vcbForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = ui.vcb.value.trim();
    if (text) {
      try {
        if (tools.value(text)) { ui.vcb.value = ''; print(''); }
      } catch (err) { print(mnt.t('app.failed', { error: err.message })); }
    }
    ui.vcb.blur();
    ui.over.focus({ preventScroll: true });
    scheduleInfo();
  });

  // ---- actions ----
  root.querySelectorAll('[data-act]').forEach((b) => b.addEventListener('click', () => mnt.act(b.dataset.act)));

  // ---- workspaces (0.7: Model · Mesh · …; workspaces.js, each ws-<id>.js registers itself) ----
  const toolbarEl = root.querySelector('.mc-tools');
  toolbarEl.prepend(wsSwitcher(el, mnt.t, 'model'));
  const wsSelect = toolbarEl.querySelector('[data-workspace]');
  {
    const editG = [...toolbarEl.querySelectorAll(':scope > .mc-tool-group')].find((g) => g.getAttribute('aria-label') === 'Edit');   // i18n-ignore: ui.inc's group key
    for (const w of listWorkspaces()) if (!w.builtin) for (const g of toolbarGroups(w, el, mnt.t)) toolbarEl.insertBefore(g, editG || null);
  }
  toolbarEl.querySelectorAll('[data-cmd]').forEach((b) => b.addEventListener('click', () => {
    const w = getWorkspace(workspaceOfCmd(b.dataset.cmd));
    if (w && w.id === ST.wsId) { w.command?.(b.dataset.cmd, ST.wsHost); scheduleInfo(); view.invalidate(); }
    focusView();
  }));
  /** Put a mesh in the open group (in front of the view, on the ground there), one undo step. → its placement's path. */
  function placeMesh(mesh, name, { curve = null, label = null } = {}) {   // MD.6: a curve object carries `curve`
    const base = ST.wsHost.parentPath && model.context(ST.wsHost.parentPath) ? ST.wsHost.parentPath : host.path.filter(() => true);
    const ctx = model.context(base) || model.context([]);
    const at = cam.target ? [cam.target[0], cam.target[1], 0] : [0, 0, 0];
    const local = [ctx.inv[0] * at[0] + ctx.inv[4] * at[1] + ctx.inv[8] * at[2] + ctx.inv[12], ctx.inv[1] * at[0] + ctx.inv[5] * at[1] + ctx.inv[9] * at[2] + ctx.inv[13], ctx.inv[2] * at[0] + ctx.inv[6] * at[1] + ctx.inv[10] * at[2] + ctx.inv[14]];
    const iid = model.change(label || mnt.t('app.mesh.undo.add'), (m) => { const d = m.newMeshDef(mesh, name); if (curve) d.curve = curve; return m.place(m.context(base).def, d.id, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, local[0], local[1], local[2], 1]); });
    return [...base, iid];
  }
  /**
   * A curve object from a drawn arc, circle, polygon or curve (MD.6): its control points (a drawn curve's own, else the
   * points along it) as a Bézier (a polygon: straight), placed where it is; the drawn lines stay. One undo step.
   */
  function curveObjectFrom(cid, ci) {
    const def = model.context(host.path).def;
    const sp = ci.kind === 'curve' && def.splines.has(cid) ? def.splines.get(cid) : null;
    let pts = (sp ? sp.pts : ci.verts.map((v) => def.verts.get(v))).map((p) => p.slice());
    const closed = sp ? !!sp.closed : ci.closed;
    if (closed && !sp && pts.length > 2 && dist(pts[0], pts[pts.length - 1]) < 1e-9) pts = pts.slice(0, -1);
    // flat on the ground plane: a flat curve, its plane at z = 0 of its own placement
    const z0 = pts[0][2], flat = pts.every((p) => Math.abs(p[2] - z0) < 1e-9);
    if (flat) pts = pts.map((p) => [p[0], p[1], 0]);
    const spline = { type: ci.kind === 'polygon' ? 'poly' : 'bezier', cyclic: closed, resolution: 12, order: 4, points: pts.map((p) => ({ p, hl: p.slice(), hr: p.slice(), h: 'auto', w: 1, radius: 1, tilt: 0 })) };
    const curve = { dim: flat ? '2d' : '3d', fill: false, extrude: 0, bevel: { depth: Math.max(1e-4, ci.length / 100), resolution: 4 }, caps: true, taper: [1], splines: [spline] };
    const name = mnt.t('app.curve.kind.' + (closed && ci.round ? 'bezier-circle' : 'bezier'));
    model.change(mnt.t('app.curve.undo.add'), (m) => {
      const d = m.newMeshDef(new Mesh(), name);
      d.curve = curve;
      m.place(m.context(host.path).def, d.id, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, flat ? z0 : 0, 1]);
    });
    print(mnt.t('app.curve.made_from', { n: pts.length }));
    scheduleInfo(); view.invalidate();
  }
  /** What a curve object's settings work through (mesh/curve-panel.js); `selPoints` from the Curve workspace's tool. */
  function curveCtx(id, selPoints = []) {
    const redraw = () => { view.builtFor = null; if (tools.name === 'curveedit') tools.tool.show(); scheduleInfo(); view.invalidate(); };
    const change = (label, fn) => { model.change(label, (m) => { const d = m.def(id), next = structuredClone(d.curve); fn(next); d.curve = next; }, [id]); redraw(); };
    return {
      def: model.def(id), el, t: mnt.t, units: model.units, formatLength, parseLength, print, selPoints, change,
      async text(str) {
        const c = model.def(id)?.curve;
        if (!c?.text || !str) return;
        const made = await textCurve(ST.wsHost, str, c.text.height, c.text.weight);
        if (made) change(mnt.t('app.curve.undo.text'), (cv) => { cv.splines = made.splines; cv.text = made.text; });
      },
    };
  }
  /**
   * 0.8 GH.2: what the Modifiers section works through for a group or component (group-mods.js). `id` is the definition shown
   * (the source before a stack exists, the derived one after), `iid` the placement in the open group. The first item turns the
   * placement into a derived component of the source, in the same undo step; later changes re-place it.
   */
  function groupModCtx(id, iid) {
    const def = model.def(id), parentId = ctxDef().id;
    const redraw = () => { view.builtFor = null; afterHistory(); };
    const bake = () => { model.change(mnt.t('app.gmod.bake'), (m) => m.bakeModifiers(id)); redraw(); print(mnt.t('app.gmod.baked')); };
    const actions = isStacked(def) ? [
      el('button', { type: 'button', className: 'mc-linkbtn', dataset: { modEditSource: '' }, onclick: () => {
        const first = model.def(id).insts.keys().next().value;
        if (first === undefined) return;
        const inner = [...host.path, iid, first];
        host.path = inner; host.sel = [];
        print(mnt.t('app.ctx.editing', { name: model.def(model.def(id).mods.src).name }));
        scheduleInfo(); view.invalidate();
      } }, mnt.t('app.gmod.edit_source')),
      el('button', { type: 'button', className: 'mc-linkbtn', dataset: { modBake: '' }, title: mnt.t('app.gmod.bake.title'), onclick: bake }, mnt.t('app.gmod.bake')),
    ] : [];
    return {
      def, model, el, t: mnt.t, units: model.units, formatLength, parseLength, print,
      group: { types: GROUP_TYPES, list: (d) => d._ops ?? (isStacked(d) ? d.mods.ops : []), write: (d, next) => { d._ops = next; }, actions },
      change(label, fn) {
        try {
          model.change(label, (m) => {
            const cur = m.def(id), proxy = { _ops: undefined };
            proxy._ops = isStacked(cur) ? structuredClone(cur.mods.ops) : [];
            fn(proxy);
            if (isStacked(cur)) setModifiers(m, cur, proxy._ops);
            else m.def(parentId).insts.get(iid).def = modifierDef(m, cur, proxy._ops).id;
          });
          redraw();
        } catch (err) { print(err.message); }
      },
    };
  }
  /** What the Modifiers section of a mesh's panel works through (mesh/mod-panel.js), for definition id. */
  function modCtx(id) {
    const def = model.def(id);
    const redraw = () => { view.builtFor = null; scheduleInfo(); view.invalidate(); };
    return {
      def, model, el, t: mnt.t, units: model.units, formatLength, parseLength, print, info: modEval.infoOf(def),
      change(label, fn) { model.change(label, (m) => fn(m.def(id)), [id]); redraw(); },
      apply(i) {
        const d = model.def(id), r = modEval.now(d, { upTo: i });
        try {
          model.meshEdit(id, mnt.t('app.mod.undo.apply'), (me, dd) => {
            const all = [];
            for (let f = 0; f < me.nf; f++) if (!me.faceDead(f)) all.push(f);
            if (all.length) me.removeFaces(all);
            me.appendMesh(r.mesh);
            dd.mods = dd.mods.slice(i + 1);
            dd.curve = null;   // a curve object (MD.6) becomes the mesh it made
          });
        } catch (e) { print(e.message); return; }
        print(mnt.t('app.mod.applied'));
        redraw();
      },
      addLattice(i) {
        const d = model.def(id), W = worldOf(model, id);
        if (!W) return;
        const { mesh: cage, lattice } = makeLattice(d.mesh, [3, 3, 3]);
        model.change(mnt.t('app.mod.undo.lattice'), (m) => {
          const c = m.newMeshDef(cage, mnt.t('app.mod.lattice.name'));
          c.lattice = lattice;
          m.place(m.root, c.id, W);
          const dd = m.def(id), next = structuredClone(dd.mods);
          next[i].params.cage = c.id;
          dd.mods = next;
        });
        print(mnt.t('app.mod.lattice.made'));
        redraw();
      },
    };
  }

  return { openCtxMenu, sayLock, finishTransform, syncTool, toolbarEl, wsSelect, placeMesh, curveObjectFrom, curveCtx, groupModCtx, modCtx };
}
