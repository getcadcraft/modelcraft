/* SPDX-License-Identifier: Apache-2.0 */
/**
 * file-save-ui.js: modelcraft.js's 18 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFileSave(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { materials as fileMaterials } from './ws-shading.js';
import { getHost } from "./host.js";
import { fileIds, olderCopy } from './ids-mc.js';
import { prettyJson } from './file-text.js';
import { RAW_B64 } from './mesh.js';
import * as i18n from "./i18n.js";

export function mountFileSave(ctx) {
  const { ST, ui, model, cam, docData, applyFormat, newUnits, host, view, tools, print, setTool, startStyle, styleToUi, renderScenes, scheduleInfo, showUnits, base, ask } = ctx;

  // ---- files ----
  function newModel() {
    tools.escape();
    model.reset();
    model.units = newUnits();
    showUnits();
    host.path = []; host.sel = [];
    ST.fileName = ctx.t('app.file.untitled');
    ST.saveTarget = null;
    ctx.adoc.clean();
    ST.sceneIndex = -1;
    startStyle();
    ST.sayState = null;
    ST.renderSettings = null;
    ST.modelInfo = null;   // 0.7.1 71.13
    ST.modelSite = null;   // 0.8 EG.63
    ST.bimLinksRaw = null; ST.bimLink?.load(null);   // 0.11 SU.1814
    ST.modelFormat = null; applyFormat();   // 0.8 D8.6
    docData.clear();   // 0.8: add-on data
    ST.shell?.load(null); ST.shell?.opened();   // 0.8 round 3
    ST.scatterSets = [];
    ST.videoSettings = null;
    ST.timeline.reset();
    ST.xrmc.reset();
    model.images.clear();
    fileMaterials.load(null);   // 0.7 MT.1
    styleToUi();
    cam.eye = [9, -12, 8]; cam.target = [0, 0, 1];
    setTool('select');
    renderScenes(); scheduleInfo(); view.invalidate();
    print(ctx.t('app.new'));
  }
  // Files go through the shell's host adapter (host.js, 0.4 W.2): the browser's picker and downloads, or the desktop
  // app's own dialogs, where Save writes the opened file in place. Exports are always a copy.
  const fileHost = getHost({ app: 'modelcraft' });
  ST.saveTarget = null;   // the HostFile the open model came from, when Save can write it in place
  const MODEL_TYPES = [{ description: ctx.t('app.file.type.model'), extensions: ['.modelcraft'] }];
  // 0.7 XF.9: USD opens as the model too (Open) and is a choice in Save as — never the default (owner, 2026-10-20)
  const OPEN_TYPES = [...MODEL_TYPES, { description: ctx.t('usd.file.type'), extensions: ['.usd', '.usda', '.usdc', '.usdz'] }];
  const IMPORT_TYPES = [{ description: ctx.t('app.file.type.import'), extensions: ['.skp', '.dae', '.obj', '.glb', '.gltf', '.dwg', '.dxf', '.ccbundle', '.ply', '.stl', '.abc', '.fbx', '.usd', '.usda', '.usdc', '.usdz', '.step', '.stp', '.3dm'] }];

  // 0.8 AL.6 "This file uses …": before a save the shell records which add-ons the file's data came from ({ id: version } under `usesAddons`);
  // after an open it offers the ones this computer lacks, in a bar above the stage. The file's `addons` stay each add-on's own data.
  ST.usedRecord = null;
  function stampAddons(data) {
    const f = window.ccAddonsFile;
    const tmp = { addons: { ...(ST.usedRecord || {}) } };
    try {
      const known = new Set([...(window.ccAddons?.list?.() || []).map((a) => (a.manifest && a.manifest.id) || a.id), ...((window.ccAddonsAccount?.items) || []).map((i) => i.id)]);
      f?.stamp(tmp, Object.keys(data || {}).filter((id) => known.has(id)));
    } catch (e) { console.warn('add-on record not stamped', e); }
    return Object.keys(tmp.addons).length ? tmp.addons : null;
  }
  function offerAddons(raw) {
    ST.usedRecord = raw && typeof raw === 'object' && !Array.isArray(raw) ? Object.fromEntries(Object.entries(raw).slice(0, 200).filter(([k]) => /^[A-Za-z0-9][A-Za-z0-9._-]{0,79}$/.test(k)).map(([k, v]) => [k, String(v ?? '').replace(/[^\x20-\x7e]/g, '').slice(0, 40)])) : null;
    let el = document.querySelector('[data-addons-banner]');
    if (!el) { el = document.createElement('div'); el.dataset.addonsBanner = ''; el.className = 'mc-note'; el.hidden = true; ui.stage.parentElement?.insertBefore(el, ui.stage); }
    el.hidden = true; el.textContent = '';
    try { window.ccAddonsFile?.offer({ addons: ST.usedRecord || {} }, el); el.hidden = !el.childNodes.length; } catch (e) { console.warn('add-on offer failed', e); }
  }
  /** The file as data; `raw`: meshes' arrays not yet base64 (Mesh.toJSON raw), for the worker that writes the text. */
  const modelData = ({ raw = false, noDefs = false } = {}) => {   // noDefs: the file's other parts only (the autosave journal's head)
    // the file keeps the current camera and style for next time, outside the undo history
    const j = model.toJSON(noDefs, { raw });
    fileIds(model, j);   // 0.11 DC.27: formatVersion, and the counters this session did not use as the file had them
    j.view = { cam: cam.toJSON(), style: view.style };
    const imgs = model.imagesJSON();
    for (const id of fileMaterials.pictureIds()) if (model.images.has(id) && !imgs.some((x) => x.id === id)) imgs.push({ id, ...model.images.get(id) });   // 0.7 MT.1: pictures a material reads
    if (imgs.length) j.images = imgs;   // 0.5 RC.11 (b): imported textures, beside the model (outside undo)
    const mats = fileMaterials.toJSON();
    if (mats) j.materials = mats;   // 0.7 MT.1: the file's node materials, beside the model (outside undo, like images)
    if (ST.sayState) j.view.say = ST.sayState;   // 0.8 EG.61 (an optional key: no new file version)
    if (ST.renderSettings) j.view.render = ST.renderSettings;   // 0.5 RC.11: the Render dialog's settings and looks
    { const ad = docData.toJSON(); if (ad) j.addons = ad; }   // 0.8: add-on data, whether or not the add-on is loaded
    if (ST.modelFormat) j.numberFormat = ST.modelFormat;   // 0.8 D8.6: precision + text sizes (an optional key, outside undo)
    { const u = stampAddons(docData.toJSON()); if (u) j.usesAddons = u; }   // 0.8 AL.6 "This file uses …": which add-ons the file's data came from (an optional key)
    if (ST.modelSite) j.site = ST.modelSite;   // 0.8 EG.63 (an optional key with its own v: no new file version)
    { const bl = ST.bimLink ? ST.bimLink.toJSON() : ST.bimLinksRaw; if (bl) j.bimLinks = bl; }   // 0.11 SU.1814: the BimCraft links (an optional key, part-link-mc.js)
    if (ST.modelInfo) j.info = ST.modelInfo;   // 0.7.1 71.13: Model info › About (an optional key: no new file version)
    ST.shell?.save(j);   // 0.8 round 3: calc sheets + design reasons (`calcs`, `reasons`: optional keys, outside undo)
    if (ST.scatterSets.length) j.view.scatter = ST.scatterSets;   // 0.7 RT.5: scatter sets (cleaned by rt/rt-scatter.js cleanScatter on use)
    if (ST.videoSettings) j.view.video = ST.videoSettings;   // 0.6 LC.10: the Render video dialog's choices
    const an = ST.timeline && ST.timeline.toJSON();
    if (an) j.anim = an;   // 0.6 LC.10: the animation (render/anim.js; checked again on open)
    const iss = ST.xrmc && ST.xrmc.toJSON();
    if (iss) j.issues = iss;   // 0.6 LC.19: issues (placed in VR), pictures as base64 PNG; checked again on open
    const arA = ST.xrmc && ST.xrmc.arJSON();
    if (arA) j.arAlignment = arA;   // 0.8 EG.21: where the model sits on the site (an optional key: no new file version)
    const { view: lastView, ...restOfFile } = j;   // 0.8 DC.27 H3: the camera changes on every save, so it goes last
    return { ...restOfFile, view: lastView };
  };
  function modelText() { return prettyJson(modelData()); }
  /**
   * 0.10 PERF.38: the same text written in the page's worker pool (file-text.js), so Save and the autosave copy do not hold
   * the page (2.5 s at 500k faces). The page only gathers the data; without workers (or if the pool fails) it is written here.
   */
  const FILE_JOBS = new URL('./file-text.js', import.meta.url).href;
  ST.jobPool = null;
  const pool = async () => (ST.jobPool || (ST.jobPool = import('./compute/runtime.js').then((r) => r.pagePool()).catch(() => null)));
  async function inWorker(fn, args, transfer = undefined) {
    const p = await pool();
    if (!p) return null;
    try { return await p.run(FILE_JOBS, fn, args, { priority: 5, transfer }); } catch (e) { console.warn('worker job failed, doing it here', e); return null; }
  }
  /** 0.11 PERF.7: the raw meshes' arrays of a freshly gathered file object (Mesh.toJSON raw makes new ones): moved to the worker, not copied. */
  const rawBuffers = (j) => {
    const out = [];
    const walk = (v, depth) => {
      if (!v || typeof v !== 'object' || depth > 8 || ArrayBuffer.isView(v)) return;
      const a = v[RAW_B64];
      if (ArrayBuffer.isView(a)) { if (a.buffer instanceof ArrayBuffer && !out.includes(a.buffer)) out.push(a.buffer); return; }
      if (Array.isArray(v)) { for (const x of v) walk(x, depth + 1); return; }
      for (const k in v) walk(v[k], depth + 1);
    };
    walk(j.defs, 0);
    return out;
  };
  async function modelTextAsync() {
    const j = modelData({ raw: true });
    const text = await inWorker('fileText', { j }, rawBuffers(j));
    return typeof text === 'string' ? text : modelText();
  }
  /** 0.11 PERF.24: the autosave's first copy: the text and how each mesh reads back from it (file-text.js fileTextChecked). */
  async function baseTextChecked() {
    const j = modelData({ raw: true });
    const r = await inWorker('fileTextChecked', { j }, rawBuffers(j));
    return r && typeof r.text === 'string' ? r : { text: modelText(), slots: {} };
  }
  /** An export (glb | obj | dae) written in the worker pool; null = do it on the page (no workers, or the job failed). */
  async function exportInWorker(kind) {
    const j = model.toJSON(false, { raw: true, shown: kind === 'dae' });   // DAE writes meshes as they show; glTF and OBJ their own mesh
    j.images = [...model.images].map(([id, im]) => ({ id, ...im }));
    return inWorker('exportFile', { j, kind, name: base(), lang: i18n.catalog() });
  }
  ST.usdOpenNote = '';
  /** Save as (0.7 XF.9): .modelcraft (what Save writes), or USD as text, binary or a package — nothing lost either way. */
  async function saveAs(usdOnly = false) {
    tools.escape();
    const choices = [['usda', ctx.t('usd.dialog.format.usda'), 'btn-line'], ['usdc', ctx.t('usd.dialog.format.usdc'), 'btn-line'], ['usdz', ctx.t('usd.dialog.format.usdz'), 'btn-line']];
    if (!usdOnly) choices.unshift(['modelcraft', ctx.t('usd.format.modelcraft'), 'btn-plot'], ['modelcraft-older', ctx.t('file.older.choice'), 'btn-line']);   // 0.11 DC.27: the copy for 0.10 and older is a choice, never the default
    const c = await ask({ title: usdOnly ? ctx.t('usd.dialog.title') : ctx.t('usd.save_as.h'), text: ctx.t('usd.save_as.text'), buttons: [['cancel', ctx.t('app.btn.cancel'), 'btn-line'], ...choices] });
    if (!c || c === 'cancel') return false;
    if (c === 'modelcraft-older') {   // 0.11 DC.27: new ids numbered again into the range 0.10 and older read (ids-mc.js olderCopy); not this model's file
      let data;
      try { data = prettyJson(olderCopy(modelData())); } catch { print(ctx.t('file.older.full')); return false; }
      const name = base() + ' (0.10).modelcraft';   // i18n-ignore: a file name
      const r = await fileHost.save({ target: null, data, name, types: MODEL_TYPES });
      if (!r.ok) { if (!r.cancelled) print(ctx.t('app.save.failed', { error: String(r.error?.message || r.error || '') })); return false; }
      print(ctx.t('file.older.saved', { file: r.path || r.name || name }));
      return true;
    }
    if (c === 'modelcraft') {
      const name = base() + '.modelcraft';
      const r = await fileHost.save({ target: null, data: modelText(), name, types: MODEL_TYPES });
      if (!r.ok) { if (!r.cancelled) print(ctx.t('app.save.failed', { error: String(r.error?.message || r.error || '') })); return false; }
      if (r.target?.writable) ST.saveTarget = r.target;
      model.dirty = false; ctx.adoc.clean();
      print(r.how === 'written' ? ctx.t('app.save.written', { file: r.path || r.name || name }) : ctx.t('app.save.downloaded', { file: name }));
      return true;
    }
    try {
      const { saveUsd } = await import('./usd-modelcraft.js');
      const out = saveUsd(JSON.parse(modelText()), model, { format: c, name: base() + '.modelcraft' });
      const name = base() + '.' + c;
      const type = c === 'usda' ? 'model/vnd.usda' : c === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream';
      const r = await fileHost.save({ target: null, data: typeof out.data === 'string' ? out.data : new Blob([out.data], { type }), name, types: [{ description: ctx.t('usd.file.type'), extensions: ['.' + c] }] });
      if (!r.ok) { if (!r.cancelled) print(ctx.t('app.save.failed', { error: String(r.error?.message || r.error || '') })); return false; }
      print(ctx.t('usd.done', { name: r.path || r.name || name, n: out.report.objects }));
      return true;
    } catch (err) { print(ctx.t('app.save.failed', { error: String(err?.message || err) })); return false; }
  }
  async function saveModel() {
    tools.escape();
    const name = base() + '.modelcraft';
    // writing the opened file in place: the text comes from the worker pool; a save that may open the browser's dialog keeps
    // the click's activation, so its text is written here first (0.10 PERF.38)
    const data = ST.saveTarget?.writable ? await modelTextAsync() : modelText();
    const r = await fileHost.save({ target: ST.saveTarget, data, name, types: MODEL_TYPES });
    if (!r.ok) { if (!r.cancelled) print(ctx.t('app.save.failed', { error: String(r.error?.message || r.error || '') })); return false; }
    if (r.target?.writable) ST.saveTarget = r.target;
    model.dirty = false;
    ctx.adoc.clean();
    print(r.how === 'written' ? ctx.t('app.save.written', { file: r.path || r.name || name }) : ctx.t('app.save.downloaded', { file: name }));
    return true;
  }

  return { newModel, fileHost, OPEN_TYPES, IMPORT_TYPES, offerAddons, modelData, modelText, modelTextAsync, baseTextChecked, exportInWorker, saveAs, saveModel };
}
