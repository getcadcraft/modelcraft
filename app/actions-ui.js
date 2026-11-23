/* SPDX-License-Identifier: Apache-2.0 */
/**
 * actions-ui.js: modelcraft.js's 17 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountActions(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { modPanel } from './mesh/mod-panel.js';
import { curvePanel } from './mesh/curve-panel.js';
import { paintFaces, paintInstance, faceNormal, intersectFaces, hideSel, isolateSel } from './model.js';
import { dist, sub, cross } from './vec.js';
import { formatVolume } from './units.js';

export function mountActions(ctx) {
  const { ST, ui, model, cam, host, view, tools, settings, setKeys, print, setTool, flip, choosePaint, hideHint, cursorEv, cancelStep, arrowStep, syncTool, wsSelect, placeMesh, curveCtx, modCtx, askText, text3dDialog, scaleByDialog, storeysDialog, terrainFromSelection, terrainGridDialog, setWorkspace, afterHistory, ctxDef, unhideEverything, eraseSelection, makeGroup, explodeSel, zoomExtents, closeMenus, scheduleInfo, download, base, focusView, ask, openModelInfoDialog, openPreferences, confirmDiscard, root } = ctx;

  ST.wsHost = {
    model, cam, view, el, t: ctx.t, print, settings, ask, askText, placeMesh, meshPath: null, parentPath: null, modPanel: (id) => modPanel(modCtx(id)),
    curvePanel: (id, selPoints) => curvePanel(curveCtx(id, selPoints)),
    get tools() { return tools; }, get path() { return host.path; }, get sel() { return host.sel; }, get units() { return model.units; },
    setPath(p) { host.path = p.slice(); host.sel = []; scheduleInfo(); view.invalidate(); },
    selectPlacement(p) { if (!p.length) return; host.path = p.slice(0, -1); host.setSel(model.context(p) ? [{ t: 'i', id: p[p.length - 1] }] : []); },
    setWorkspace,
    get renderSettings() { return ST.renderSettings; }, saveRenderSettings: (s) => { ST.renderSettings = s; },   // 0.7 RN.11: shared with the Render dialog
    renderPanel: scheduleInfo,
    cursor: cursorEv,
    tip: (s) => host.tip?.(s), changed: () => host.changed(), get stage() { return view.gl.parentElement; },   // 0.7 MD.5: the UV editor
    choosePaint,   // 0.7 MT.1: the Shading workspace's Paint with it
    // 0.7 MT.3: a library material dropped on the view paints the face or group under the pointer (as a Paint click), one undo step
    paintAt(cx, cy, c, name) {
      const r = ui.over.getBoundingClientRect(), s = tools.pickAt({ x: cx - r.left, y: cy - r.top, shift: false, ctrl: false, alt: false });
      if (!s || (s.t !== 'f' && s.t !== 'i')) return false;
      const def = model.context(host.path).def;
      model.change(ctx.t('app.undo.paint'), () => { if (s.t === 'f') paintFaces(def, [s.id], c); else paintInstance(def, s.id, c); }, [def.id]);
      host.changed(); print(ctx.t('shading.lib.dropped', { name })); view.invalidate();
      return true;
    },
    get viewEl() { return ui.over; },
    download,   // 0.7 MT.4: MaterialX export
  };

  wsSelect.addEventListener('change', () => { setWorkspace(wsSelect.value); focusView(); });
  /** The menus' and keys' commands (the [data-act] items, ctxItems, the command palette): command name -> what it does. Table-driven
   *  (PERF.78, perf-finish-11 r2): was one 60-case switch in act(); each entry is that case's body, unchanged. */
  const ACTIONS = {
    'new': async () => { if (await confirmDiscard()) ctx.newModel(); },
    'open': async () => { if (await confirmDiscard()) { const [f] = await ctx.fileHost.openFile({ types: ctx.OPEN_TYPES }).catch((err) => { print(ctx.t('app.open.failed', { error: err.message })); return []; }); await ctx.openFromHost(f, { asked: true }); } },
    'save': () => { ctx.saveModel(); },
    'saveas': () => { ctx.saveAs(); },   // 0.7 XF.9: .modelcraft or USD
    'import-sketch': async () => { await ctx.importSketchPhoto(); },   // 0.8 EG.36
    'furnish': async () => { await ctx.furnishSelected(); },   // 0.8 EG.60
    'import': async () => { const [f] = await ctx.fileHost.openFile({ types: ctx.IMPORT_TYPES }).catch((err) => { print(ctx.t('app.open.failed', { error: err.message })); return []; }); if (f) await ctx.importFile(f); },
    'undo': () => { tools.escape(); { const l = model.undo(); print(l ? ctx.t('app.undid', { what: l }) : ctx.t('app.undo.nothing')); } afterHistory(); },
    'redo': () => { tools.escape(); { const l = model.redo(); print(l ? ctx.t('app.redid', { what: l }) : ctx.t('app.redo.nothing')); } afterHistory(); },
    'group': () => { makeGroup('group'); },
    'text3d': () => { text3dDialog(); },
    'scale-by': () => { scaleByDialog(); },   // 0.8 SU.934
    'storeys': () => { closeMenus(); storeysDialog(); },
    'massing': () => { closeMenus(); tools.escape(); import('./massing-mc-ui.js').then((m) => m.openMassing({ root, t: ctx.t, model, sel: () => (host.path.length ? [] : host.sel.filter((s) => s.t === 'i').map((s) => s.id)), units: () => model.units, base, download, print, bimUrl: root.dataset.bimUrl || '', bimApp: root.dataset.bimApp || 'BimCraft', focusView })); },   // 0.10 BK.44
    'link-save-back': () => { ST.bimLink?.saveBack(); },   // 0.11 SU.1814: File › Export › Save back to BimCraft
    'model-info': () => { openModelInfoDialog(); },   // 0.7.1 71.13
    'preferences': () => { openPreferences(); },
    'component': () => { makeGroup('component'); },
    'explode': () => { explodeSel(); },
    'extents': () => { zoomExtents(); },
    'copy': () => { copySelection(); },
    'cut': () => { if (copySelection()) { eraseSelection(); print(ctx.t('app.cut')); } },
    'paste': () => { startPaste(false); },
    'paste-in-place': () => { startPaste(true); },
    'duplicate': () => { duplicate(); },
    'hide': () => { hideSelection(); },
    'isolate': () => { isolateSelection(); },
    'unhide-all': () => { unhideEverything(); },
    ...Object.fromEntries(['flip-x', 'flip-y', 'flip-z', 'flipcopy-x', 'flipcopy-y', 'flipcopy-z'].map((k) => [k, (name) => { flip(name.slice(-1), name.startsWith('flipcopy')); }])),
    'delete': () => { eraseSelection(); },
    'select-all': () => { selectAll(); },
    'axes-place': () => { closeMenus(); setTool('axes'); },
    'terrain-contours': () => { closeMenus(); terrainFromSelection(); },
    'terrain-grid': () => { closeMenus(); terrainGridDialog(); },
    'sculpt': () => { closeMenus(); setTool('sculpt'); },
    'axes-face': () => { axesToFace(); },
    'axes-reset': () => { closeMenus(); if (!model.axesM) { print(ctx.t('app.axes.already')); return; } model.change(ctx.t('m3d.undo.axes'), (m) => m.resetAxes(), []); print(ctx.t('app.axes.reset')); afterHistory(); },
    'intersect-model': () => { intersectSel('model'); },
    'intersect-sel': () => { intersectSel('selection'); },
    'solid-union': () => { solidTool('union'); },
    'solid-subtract': () => { solidTool('subtract'); },
    'solid-intersect': () => { solidTool('intersect'); },
    'select-none': () => { host.setSel([]); },
    // 0.7.1 MC-KEYS-META / MC-KEYS-COMMANDS: Esc and the arrow keys as commands, and Delete guides
    'cancel': () => { cancelStep(); },
    'lock-red': () => { arrowStep('ArrowRight', false); },
    'lock-green': () => { arrowStep('ArrowLeft', false); },
    'lock-blue': () => { arrowStep('ArrowUp', false); },
    'lock-edge': () => { arrowStep('ArrowDown', false); },
    // 0.8 D8.4: orbit that never locks
    'orbit-left': () => { arrowStep('ArrowLeft', false, {}, true); },
    'orbit-right': () => { arrowStep('ArrowRight', false, {}, true); },
    'orbit-up': () => { arrowStep('ArrowUp', false, {}, true); },
    'orbit-down': () => { arrowStep('ArrowDown', false, {}, true); },
    'nudge-left': () => { arrowStep('ArrowLeft', true); },
    'nudge-right': () => { arrowStep('ArrowRight', true); },
    'nudge-up': () => { arrowStep('ArrowUp', true); },
    'nudge-down': () => { arrowStep('ArrowDown', true); },
    'del-guides': () => { deleteGuides(); },
    'keys-sketchup': () => { setKeys('sketchup'); },
    'keys-blender': () => { setKeys('blender'); },
  };
  async function act(name) {
    closeMenus();
    const fn = Object.hasOwn(ACTIONS, name) ? ACTIONS[name] : null;
    if (fn) { const r = fn(name); if (r) await r; }   // only the commands that awaited in the switch wait here, so the rest end in the same tick as before
    scheduleInfo();
  }
  /** 0.8 P.6: a print check of an older model is no longer true: take it out of Problems. */
  function stalePrint() { if (ST.printSrc && ST.printAt >= 0 && ST.printAt !== model.version) { ST.printSrc.clear(); ST.printAt = -1; } }

  // ---- Drawing axes (0.4 M20): align them to a selected face — blue out of it, red along its longest edge ----
  function axesToFace() {
    closeMenus();
    if (host.path.length) { print(ctx.t('app.axes.in_group')); return; }
    const s = host.sel.length === 1 && host.sel[0].t === 'f' ? host.sel[0] : null;
    const f = s && ctxDef().faces.get(s.id);
    if (!f) { print(ctx.t('app.axes.need_face')); return; }
    const def = ctxDef(), loop = f.loops[0].map((v) => def.verts.get(v));
    let best = 0;
    for (let i = 1; i < loop.length; i++) if (dist(loop[i], loop[(i + 1) % loop.length]) > dist(loop[best], loop[(best + 1) % loop.length])) best = i;
    const o = loop[best], x = sub(loop[(best + 1) % loop.length], o), n = faceNormal(def, f);
    model.change(ctx.t('m3d.undo.axes'), (m) => m.setAxes(o, x, cross(n, x)), []);
    print(ctx.t('app.axes.face'));
    afterHistory();
  }
  // ---- Intersect faces (0.4 M19): the lines where the selection cuts through faces, drawn in the open context ----
  function intersectSel(others) {
    closeMenus();
    const sel = host.sel.filter((s) => s.t === 'f' || s.t === 'i');
    if (!sel.length || (others === 'selection' && sel.length < 2 && !sel.some((s) => s.t === 'i'))) { print(ctx.t(others === 'model' ? 'app.intersect.none' : 'app.intersect.none_sel')); return; }
    tools.escape();
    const n = model.change(ctx.t(others === 'model' ? 'ui.editmenu.intersect_model' : 'ui.editmenu.intersect_sel'), (m) => intersectFaces(m, host.path, sel, others), [model.context(host.path).def.id]);
    if (!n) { print(ctx.t('app.intersect.nothing')); return; }   // nothing changed, so no undo step was made
    print(ctx.t('app.intersect.done', { n }));
    afterHistory();
  }
  // ---- Solid tools (0.4 M9): Union, Subtract, Intersect on closed groups and components (manifold-3d, loaded on first use) ----
  function solidTool(op) {
    closeMenus();
    const picked = host.sel.filter((s) => s.t === 'i').map((s) => s.id);
    if (op !== 'subtract') {
      if (picked.length < 2) { print(ctx.t('app.solid.need.two.sel', { op: ctx.t('ui.solids.' + op) })); return; }
      runSolid(op, picked, []);
      return;
    }
    // Subtract: the piece to take away, then the piece to cut (SketchUp's order)
    let cutter = null;
    host.setSel([]);
    setTool('pick', {
      hint: () => ctx.t(cutter === null ? 'app.solid.sub.hint1' : 'app.solid.sub.hint2'),
      picked: () => (cutter === null ? [] : [{ t: 'i', id: cutter }]),
      pick: (s) => {
        if (cutter === null) { cutter = s.id; return false; }
        if (s.id === cutter) return false;
        runSolid('subtract', [s.id], [cutter]);
        return true;
      },
    });
  }
  async function runSolid(op, keep, cut) {
    let M;
    try { print(ctx.t('app.solid.loading')); M = await solidsLib().then((L) => L.manifold().then((m) => ({ L, m }))); }
    catch { print(ctx.t('app.solid.noload')); return; }
    try {
      const r = M.L.solidOp(M.m, model, host.path, op, keep, cut);
      host.setSel([{ t: 'i', id: r.iid }]);
      print(ctx.t('app.solid.done.' + op, { volume: formatVolume(r.volume, model.units) }));
    } catch (err) { print(err.message); }
    afterHistory();
  }
  ST.solidsMod = null;
  const solidsLib = () => (ST.solidsMod ??= import('./solids.js'));
  function selectAll() {
    const def = ctxDef();
    host.setSel([...[...def.faces].filter(([, f]) => !f.hidden).map(([id]) => ({ t: 'f', id })), ...[...def.edges].filter(([, e]) => !e.soft && !e.hidden).map(([id]) => ({ t: 'e', id })), ...[...def.insts].filter(([, i]) => !i.hidden).map(([id]) => ({ t: 'i', id }))]);
  }
  // ---- Hide, isolate, unhide all (0.4 M17): kept in the file; hidden things are not drawn, snapped to or picked ----
  function hideSelection() {
    const sel = host.sel.filter((x) => x.t === 'e' || x.t === 'f' || x.t === 'i');
    if (!sel.length) { print(ctx.t('app.hide.none')); return; }
    tools.escape();
    model.change(ctx.t('app.undo.hide'), (m) => hideSel(m.context(host.path).def, sel, true), [model.context(host.path).def.id]);
    host.setSel([]);
    print(ctx.t('app.hide.done', { n: sel.length }));
  }
  function isolateSelection() {
    const sel = host.sel.filter((x) => x.t === 'e' || x.t === 'f' || x.t === 'i');
    if (!sel.length) { print(ctx.t('app.isolate.none')); return; }
    tools.escape();
    const n = model.change(ctx.t('app.undo.isolate'), (m) => isolateSel(m.context(host.path).def, sel), [model.context(host.path).def.id]);
    print(ctx.t(host.path.length ? 'app.isolate.done.group' : 'app.isolate.done', { n }));
    scheduleInfo(); view.invalidate();
  }
  /** 0.7.1 MC-KEYS-COMMANDS: every guide line and point goes, one undo step (Entity info's "Delete all guides" too). */
  function deleteGuides() {
    const n = model.guides.size;
    if (!n) { print(ctx.t('app.guides.none')); return; }
    model.change(ctx.t('app.undo.del_guides'), (m) => { m.guides = new Map(); }, []);
    host.setSel(host.sel.filter((s) => s.t !== 'g'));
    print(ctx.t('app.guides.deleted', { n }));
    scheduleInfo(); view.invalidate();
  }

  // ---- clipboard ----
  ST.clip = null;
  window.modelcraft.clip = () => ST.clip || readClip();
  function readClip() {
    try { const c = JSON.parse(localStorage.getItem('modelcraft.clipboard') || 'null'); return c && c.format === 'modelcraft-clip' ? c : null; } catch { return null; }
  }
  function copySelection() {
    tools.escape();
    const sel = host.sel.filter((x) => x.t !== 'g' && x.t !== 'd' && x.t !== 's');
    if (!sel.length) { print(ctx.t('app.copy.none')); return false; }
    const c = model.copyClip(host.path, sel);
    if (!c) { print(ctx.t('app.copy.empty')); return false; }
    ST.clip = c;
    try { localStorage.setItem('modelcraft.clipboard', JSON.stringify(c)); } catch { /* too big or private window: this tab still has it */ }
    print(ctx.t('app.copy.done', { n: sel.length }));
    return true;
  }
  function startPaste(inPlace) {
    tools.escape();
    // another tab may have copied since: the newest of this tab's and the shared one
    const shared = readClip();
    const c = shared && (!ST.clip || shared.source !== ST.clip.source || JSON.stringify(shared) !== JSON.stringify(ST.clip)) ? shared : ST.clip;
    if (!c) { print(ctx.t('app.paste.none')); return; }
    hideHint();
    if (inPlace) {
      let made;
      try { made = model.change(ctx.t('ui.editmenu.paste_in_place'), (m) => m.pasteClip(host.path, c, c.m), [model.context(host.path).def.id]); } catch (err) { print(ctx.t('app.paste.failed', { error: err.message })); return; }
      setTool('select');
      host.setSel(made || []);
      print(ctx.t('app.paste.inplace'));
      return;
    }
    setTool('paste', c);
    print(ctx.t('app.paste.where'));
  }
  function duplicate() {
    tools.escape();
    if (!host.sel.some((x) => x.t !== 'g' && x.t !== 'd' && x.t !== 's')) { print(ctx.t('app.dup.none')); return; }
    hideHint();
    tools.grab(cursorEv(), { copy: true });
    syncTool();
    print(ctx.t('app.dup.done'));
  }
  function stdView(name) {
    cam.standard(name, model.bbox() || { min: [-5, -5, 0], max: [5, 5, 3] });
    view.invalidate();
    print(ctx.t('app.view.done', { view: ctx.t('ui.views.' + name) }));
  }
  function frameSelection() {
    const bb = tools.selBox();
    if (!bb) { zoomExtents(); return; }
    const pad = 0.05;
    cam.fit({ min: bb.min.map((v) => v - pad), max: bb.max.map((v) => v + pad) });
    view.invalidate();
  }

  return { act, stalePrint, solidsLib, selectAll, hideSelection, isolateSelection, stdView, frameSelection };
}
