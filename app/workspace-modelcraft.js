/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workspace-modelcraft.js — ModelCraft's adapter for the shell's workspace layout engine (assets/js/app-workspace.js; 0.7 WS.9, session
 * ws-modelcraft; maps docs/apps/app-workspace.md and docs/apps/modelcraft.md § Workspace layouts). The engine builds the blocks a layout
 * file names (Ribbon and project browser, Toolbox and info box, anyone's .ccworkspace.json); this file fills them with ModelCraft's own
 * things. It starts from the shell's fromInput() (the input registry: every tool clicks the app's own button) and adds:
 *
 *   ribbon      ModelCraft's ribbon menu style (input-modelcraft.js), plus a Workspaces tab (Model, Mesh, UV, … : the toolbar's own
 *               Workspace select) and, while a workspace other than Model is open, a context tab with that workspace's toolbar groups
 *   toolbox     the toolbar's own groups and their row buttons (not the Export / More / Views menus' items), named as the toolbar
 *               shows them (the group's label, never its English key)
 *   slots       level / detail = the Faces style, document = the value box, layout = Snap and Collide, units, scale = Perspective,
 *               range = Section planes, fit = Zoom extents
 *   palettes    properties = Entity info, browser = Scenes, Components and Tags, panel = the left panel's own content (the Outliner)
 *   views       the 3D view (the free camera, kept while a scene is open) and one view per scene
 *
 *   mountModelcraftLayouts({ root, t, mc }) → { engine, refresh(), scene(i) } | null     mc = window.modelcraft
 * modelcraft.js calls refresh() when its UI changes (scheduleInfo, setTool, setWorkspace) and scene(i) when a scene opens.
 */
import { mountWorkspaces } from 'cc-workspace';
import { getWorkspace, listWorkspaces } from './workspaces.js';

// the well-known actions a layout names (title bar, File, options bar, view bar) → ModelCraft's registry commands
const MAP = { open: 'file.open', save: 'file.save', undo: 'edit.undo', redo: 'edit.redo', select: 'modify.select', clear: 'edit.select-none', fit: 'camera.extents' };

export async function mountModelcraftLayouts({ root, t, mc }) {
  // fromInput sits beside the engine (an edition may serve the shell from another folder)
  const { fromInput } = await import(new URL('./app-workspace-input.js', import.meta.resolve('cc-workspace')).href);
  const $ = (s) => root.querySelector(s);
  const stage = $('[data-stage]'), toolbar = $('.mc-tools'), statusEl = $('.mc-status');
  const base = await fromInput({ app: 'modelcraft', root, stage, panels: { left: $('.mc-left'), right: $('.mc-right') }, status: statusEl, say: (m) => mc.print(m), map: MAP });
  if (!base) return null;
  const I = window.ccInput;
  const byId = new Map(I.commands.map((c) => [c.id, c]));
  const target = (id) => { const c = byId.get(MAP[id] || id); return c?.sel ? root.querySelector(c.sel) || document.querySelector(c.sel) : null; };
  const wsName = (id) => { const w = getWorkspace(id); return w ? t(w.labelKey) : id; };
  const wsNow = () => mc.workspace || 'model';
  const cmdBtn = (id) => toolbar.querySelector('[data-cmd="' + CSS.escape(id.slice(4)) + '"]');
  const spanText = (b) => (b?.querySelector('span')?.textContent || '').trim();
  let engine = null, ctx = null;

  // ---- the ribbon: the menu style's tabs, the Workspaces tab, the open workspace's context tab ----
  // 0.7.1: the menu style's tab of workspace tools (Beginner › Workspaces) is left out: the context tabs below are those tools
  const onlyWsTools = (tb) => tb.groups.every((g) => [...g.large, ...g.stacks.flat()].every((id) => { const grp = byId.get(id)?.group; return !!grp && grp !== 'model' && !!getWorkspace(grp); }));
  const wsTab = () => ({ tab: 'mc-ws', label: t('app.lay.tab.ws'), groups: [{ id: 'mc-ws', label: t('app.ws.group'), large: listWorkspaces().map((w) => 'ws:' + w.id), stacks: [] }] });
  const contextTabs = () => listWorkspaces().filter((w) => !w.builtin && w.groups.length).map((w) => ({
    tab: 'ws-' + w.id, label: wsName(w.id), context: true,
    groups: w.groups.map((g, i) => {
      const ids = g.items.map((it) => 'cmd:' + it.cmd);
      return ids.length <= 4 ? { id: 'ws-' + w.id + '-' + i, label: t(g.labelKey), large: ids, stacks: [] }
        : { id: 'ws-' + w.id + '-' + i, label: t(g.labelKey), large: [], stacks: ids.reduce((a, id, k) => { if (k % 3 === 0) a.push([]); a.at(-1).push(id); return a; }, []) };
    }),
  }));

  // ---- the toolbox: the toolbar's groups as the toolbar names them; each button matched to the registry command that clicks it ----
  function toolbox() {
    const owner = new Map();
    for (const c of I.commands) { const b = c.sel ? root.querySelector(c.sel) : null; if (b && !owner.has(b)) owner.set(b, c.id); }
    // a workspace's own groups are its context tab's (0.7.1: their buttons are registry commands now, so leave them out here)
    return [...toolbar.querySelectorAll(':scope > [role="group"]:not([data-workspace-group])')].map((g, i) => ({ id: 'g' + i, label: g.querySelector('.mc-tool-label')?.textContent.trim() || '',
      tools: [...g.querySelectorAll('.mc-tool-row > button')].map((b) => owner.get(b)).filter(Boolean) })).filter((g) => g.tools.length);   // the row's own buttons, not its menus' items
  }

  // ---- the palettes and the browser ----
  const infoTitle = document.createElement('span');
  const infoBody = $('[data-info]'), infoSec = $('[data-info-h]')?.closest('section');
  const browserBox = document.createElement('div');
  browserBox.className = 'mc-lay-browser';
  const browserSecs = () => [$('[data-scenes]'), $('[data-comps]'), $('[data-tags]')].map((n) => n?.closest('section')).filter(Boolean);
  const LOWER_KEY = 'modelcraft.layout.lower';   // a per-viewer convenience: which lower palette tab shows (Browser | Outliner)
  const lsGet = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  document.addEventListener('click', (e) => { const b = e.target.closest?.('.ws-palettes [data-ws-lower]'); if (b) try { localStorage.setItem(LOWER_KEY, b.dataset.wsLower); } catch { /* private window */ } });
  const homes = [];
  function moveIn(node, parent) { const h = document.createComment('modelcraft layout: home'); node.before(h); homes.push([node, h]); parent.append(node); }   // i18n-ignore: a comment node
  function moveHome() { while (homes.length) { const [n, h] = homes.pop(); if (h.parentNode) { h.after(n); h.remove(); } } }

  // ---- views: the 3D view (the free camera) and one per scene ----
  let lastView = '3d', freeCam = null, fromApp = false, seenScene = mc.sceneIndex;
  const views = () => [{ id: '3d', kind: '3d', name: t('app.lay.view3d'), icon: 'bi-box' },
    ...mc.model.scenes.map((s, i) => ({ id: 'scene:' + i, kind: 'scene', name: s.name, icon: 'bi-camera' }))];
  function go(id) {
    if (fromApp) { lastView = id; return; }   // the app opened the scene itself
    if (lastView === '3d' && id !== '3d') freeCam = mc.cam.toJSON();
    lastView = id;
    if (id === '3d') { if (freeCam) { mc.cam.set(freeCam); mc.view.invalidate(); } return; }
    const i = Number(id.slice(6));
    if (mc.model.scenes[i]) mc.goScene(i);
  }

  const adapter = {
    ...base,
    hide: ['[data-scenebar]'],   // the view tabs are the scenes' tabs in a layout
    fill: '.mc-canvas', flow: ':is(.mc-hint, .mc-guide, .mc-drop, .mc-touchbar, .cc-vc, .cc-axes)',   // i18n-ignore: selectors
    toolbar: () => toolbar,
    state() {
      const tl = mc.tools, name = tl.name || 'select';
      const b = root.querySelector('.mc-tools [data-tool="' + CSS.escape(name) + '"]');
      return { document: true, name: mc.fileName, dirty: !!mc.model.dirty, busy: !!tl.tool?.busy, selection: mc.host.sel || [], other: false,
        tool: name, toolLabel: name === 'select' ? '' : spanText(b) || wsName(wsNow()) };
    },
    endTool() { if ((mc.tools.name || 'select') !== 'select') root.querySelector('.mc-tools [data-tool="select"]')?.click(); },
    ribbon: () => [...(base.ribbon ? base.ribbon() : []).filter((tb) => !onlyWsTools(tb)), wsTab(), ...contextTabs()],
    contextTab: () => (wsNow() !== 'model' ? 'ws-' + wsNow() : null),
    toolbox,
    tool(id, block) {
      if (id.startsWith('ws:')) { const w = getWorkspace(id.slice(3)); return { label: wsName(id.slice(3)), icon: 'bi-' + (w?.icon || 'grid'), built: !!w }; }
      if (id.startsWith('cmd:')) { const b = cmdBtn(id); return { label: spanText(b) || id.slice(4), icon: b?.querySelector('i.bi')?.className.replace(/^bi\s+/, '') || 'bi-square', built: !!b }; }
      return base.tool(id, block);
    },
    can(id, block, s) {
      if (id.startsWith('ws:')) return id.slice(3) === wsNow() ? { enabled: false, reason: t('app.lay.why.open', { ws: wsName(wsNow()) }) } : { enabled: true, reason: '' };
      if (id.startsWith('cmd:')) {
        const b = cmdBtn(id);
        if (!b) return { enabled: false, reason: base.can('-').reason };
        const g = b.closest('.mc-tool-group');
        if (g?.hidden) return { enabled: false, reason: t('app.lay.why.ws', { ws: wsName(g.dataset.workspaceGroup) }) };
        if (b.disabled || b.getAttribute('aria-disabled') === 'true') return { enabled: false, reason: b.title || t('app.lay.why.off') };
        return { enabled: true, reason: '' };
      }
      const b = target(id);   // the Beginner style's hidden [data-input-only] buttons: the registry's why() (base.can) runs them
      // Model's own tools while another workspace is open (classic hides their groups; setTool refuses them)
      if (b?.closest('.mc-tool-group[hidden]') && !b.closest('[data-workspace-group]')) return { enabled: false, reason: t('app.ws.model_tool', { ws: wsName(wsNow()) }) };
      return base.can(id, block, s);
    },
    run(id, block, button) {
      if (id.startsWith('ws:')) {   // the toolbar's own Workspace select
        const sel = toolbar.querySelector('[data-workspace]');
        if (sel) { sel.value = id.slice(3); sel.dispatchEvent(new Event('change', { bubbles: true })); }
        return;
      }
      if (id.startsWith('cmd:')) { cmdBtn(id)?.click(); return; }
      return base.run(id, block, button);
    },
    pressed: (id, block) => (id.startsWith('cmd:') ? cmdBtn(id)?.getAttribute('aria-pressed') === 'true' : base.pressed(id, block)),
    options(s) {
      const b = root.querySelector('.mc-tools [data-tool="' + CSS.escape(s.tool || 'select') + '"]');
      return { title: s.tool && s.tool !== 'select' ? s.toolLabel : spanText(b) || t('ui.tool.select'), text: b?.title || '' };
    },
    showProperties() { const h = $('[data-info-h]'); h?.scrollIntoView({ block: 'nearest' }); h?.closest('section')?.querySelector('input, select, button')?.focus({ preventScroll: true }); },
    slots: {
      level: { label: t('ui.style'), nodes: () => [$('[data-style-mode]')].filter(Boolean) },
      detail: { label: t('ui.style'), nodes: () => [$('[data-style-mode]')].filter(Boolean) },
      document: { label: t('app.lay.vcb'), nodes: () => [$('[data-vcb-form]')].filter(Boolean) },
      layout: { label: '', nodes: () => [...root.querySelectorAll('[data-mc-toggle]')] },
      units: { label: t('ui.units'), nodes: () => [$('[data-units]')].filter(Boolean) },
      scale: { label: t('ui.views.persp'), nodes: (c) => [c.tool('camera.persp', 'viewbar', true)] },
      range: { label: base.tool('camera.sec-planes').label, nodes: (c) => [c.tool('camera.sec-planes', 'viewbar', true)] },
      fit: { label: base.tool('fit').label, nodes: (c) => [c.tool('fit', 'viewbar', true)] },
    },
    palettes: {
      properties: { label: t('ui.info'), title: infoTitle, body: () => infoBody },
      browser: { label: t('app.lay.browser'), hint: t('app.lay.browser.hint'), body: () => browserBox },
      panel: { label: t('ui.outliner') },
    },
    views: {
      list: views, token: () => mc.fileName, initial: () => '3d',
      current: () => lastView,
      go: (id) => go(id),
      empty: (c) => { const b = c.el('button', { type: 'button', className: 'btn-line btn-sm-cc' }, t('app.lay.empty.open')); b.addEventListener('click', () => c.open('3d')); return b; },
    },
    entered(c) {
      ctx = c; lastView = '3d'; freeCam = null; seenScene = mc.sceneIndex;   // the layout starts on the 3D view (views.initial)
      if (c.has('palettes')) {
        infoSec?.classList.add('ws-hide');   // its content is the Properties palette now (the engine clears .ws-hide on the way back)
        for (const sec of browserSecs()) moveIn(sec, browserBox);
        const tab = lsGet(LOWER_KEY);   // the lower palette tab picked last time (Browser or the Outliner)
        if (tab && document.querySelector('[data-ws-lower="' + CSS.escape(tab) + '"]')) c.palette(tab);
      }
    },
    leaving(c) { if (c.has('palettes')) moveHome(); },
    left() { ctx = null; },
    resized() { mc.view.resize?.(); },
    refresh() {
      infoTitle.textContent = $('[data-info-h]')?.textContent || t('ui.info');
      // a scene made from this camera (Add scene) is the current scene without opening it: a tab for every view marks it, the opened
      // tabs stay as they are (the 3D view is that camera still)
      if (mc.sceneIndex !== seenScene) { seenScene = mc.sceneIndex; if (seenScene >= 0 && ctx?.block('viewtabs')?.mode === 'all') lastView = 'scene:' + seenScene; }
    },
  };

  /** A scene opened by the app (the Scenes list, the scene bar, Page Up/Down, a script): its view tab follows. */
  function scene(i) {
    if (lastView === '3d') freeCam = mc.cam.toJSON();
    if (!ctx || !ctx.has('viewtabs')) { lastView = 'scene:' + i; return; }
    fromApp = true;
    try { ctx.open('scene:' + i); } finally { fromApp = false; }
  }

  engine = mountWorkspaces(adapter);
  window.modelcraftLayouts = Object.freeze({ engine, inspect: () => ({ layout: engine.layout, view: lastView, blocks: engine.inspect().blocks }) });   // tests and the console
  return { engine, refresh: () => engine.refresh(), scene: (i) => { seenScene = i; scene(i); } };
}
