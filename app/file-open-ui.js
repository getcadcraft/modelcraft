/* SPDX-License-Identifier: Apache-2.0 */
/**
 * file-open-ui.js: modelcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFileOpen(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { readJsonFile } from './textin.js';
import { takeIdBlock } from './ids-mc.js';
import { materials as fileMaterials } from './ws-shading.js';
import { cleanScene } from './model.js';
import { cleanSay } from './scene-say.js';
import { cleanInfo, cleanFormat } from './model-info.js';
import { cleanSite } from './site-context.js';

export function mountFileOpen(mnt) {
  const { ST, ui, model, cam, docData, applyFormat, host, view, tools, print, setTool, texMats, hideHint, afterHistory, zoomExtents, perspBtn, styleToUi, renderScenes, scheduleInfo, showUnits, fileHost, offerAddons, confirmDiscard } = mnt;

  // the hidden inputs stay for browsers without the host picker's handles (and for tests: setInputFiles)
  ui.fileOpen.addEventListener('change', () => { const f = ui.fileOpen.files[0]; ui.fileOpen.value = ''; if (f) openFile(f); });
  ui.fileImport.addEventListener('change', () => { const f = ui.fileImport.files[0]; ui.fileImport.value = ''; if (f) mnt.importFile(f); });
  const isModelFile = (f) => /\.(modelcraft|json|usd|usda|usdc|usdz)$/i.test(f.name);
  const isUsdFile = (f) => /\.(usd|usda|usdc|usdz)$/i.test(f.name);
  const bytesOf = async (f) => (typeof f.bytes === 'function' ? new Uint8Array(await f.bytes()) : new Uint8Array(await f.arrayBuffer()));
  /** A file from the host (picker, double-click, recent list, drop): a model opens, anything else is imported. */
  ST.siteCtx = null;
  async function openFromHost(hf, { asked = false, others = [] } = {}) {
    if (!hf) return;
    // 0.8 EG.63: CivilCraft's address-to-site file is taken as suggestions, never opened as a model
    if (/\.ccsite\.json$/i.test(hf.name || '')) {
      const { mountSiteContext } = await import('./site-ctx-mc.js');
      ST.siteCtx = ST.siteCtx || mountSiteContext({ model, t: mnt.t, print, afterHistory, keepSite: (site) => { ST.modelSite = site; model.dirty = true; } });
      if (await ST.siteCtx.receive({ name: hf.name, text: async () => new TextDecoder().decode(await bytesOf(hf)) })) return;
    }
    if (!isModelFile(hf)) { await mnt.importFile(hf, others); return; }
    if (!asked && !(await confirmDiscard())) return;
    if (await openFile(hf)) ST.saveTarget = hf.writable ? hf : null;
  }
  // a .gltf comes with its .bin and textures: given together, it opens first and finds them among the others
  const firstOf = (files) => files.find((f) => /\.(gltf|obj|fbx)$/i.test(f?.name || '')) || files[0];
  fileHost.onOpenFiles(async (files) => { const f = firstOf(files); if (f) await openFromHost(f, { others: files }); });

  async function openFile(file, { recovered = false } = {}) {
    if (!isModelFile(file)) { mnt.importFile(file); return false; }
    try {
      if ((file.size || 0) > 200 * 1048576) throw new Error(mnt.t('app.open.toobig'));
      let j;
      if (isUsdFile(file)) {
        // 0.7 XF.9: our own USD opens exactly as it was saved; anyone else's as groups and meshes (usd-modelcraft.js)
        const { openUsd } = await import('./usd-modelcraft.js');
        const r = openUsd(await bytesOf(file), { name: file.name });
        j = r.file;
        ST.usdOpenNote = r.report.foreign ? mnt.t('usd.note.foreign') : r.report.notes.join(' ');
      } else j = await readJsonFile(file);   // 0.10 PERF.20: a project over 32 MB is read in parts (textin.js), never one string
      tools.escape();
      model.setImages(j.images);   // 0.5 RC.11 (b): the file's imported textures (untrusted: checked)
      for (const k of [...texMats.keys()]) if (k.startsWith('img:')) texMats.delete(k);
      model.load(j);
      takeIdBlock(model);   // 0.11 DC.27: this session's new ids come from blocks of its own
      fileMaterials.images.clear();
      fileMaterials.load(j.materials || null);   // 0.7 MT.1: the file's node materials (untrusted: every graph cleaned)
      fileMaterials.prepare().catch(() => {});
      host.path = []; host.sel = [];
      ST.saveTarget = null;
      ST.fileName = file.name;
      ST.sceneIndex = -1;
      const v = j.view && cleanScene({ name: 'v', cam: j.view.cam, style: j.view.style });
      if (v) { cam.set(v.cam); view.style = v.style; perspBtn.setAttribute('aria-checked', String(cam.persp)); } else zoomExtents();
      ST.sayState = cleanSay(j.view && j.view.say);   // 0.8 EG.61 (untrusted: checked)
      ST.renderSettings = j.view && j.view.render && typeof j.view.render === 'object' ? j.view.render : null;   // cleaned when the dialog opens
      ST.modelInfo = cleanInfo(j.info);   // 0.7.1 71.13 (untrusted: checked)
      { const r = j.site === undefined ? null : cleanSite(j.site); ST.modelSite = r?.ok ? r.site : null; if (r && !r.ok) print(mnt.t(r.why === 'newer' ? 'model.sitectx.filenewer' : 'model.sitectx.filebad')); }   // 0.8 EG.63 (untrusted; a newer site block is left out, said so)
      ST.bimLinksRaw = Array.isArray(j.bimLinks) ? j.bimLinks : null; ST.bimLink?.load(ST.bimLinksRaw);   // 0.11 SU.1814 (untrusted: readRef'd there)
      ST.modelFormat = cleanFormat(j.numberFormat); applyFormat();   // 0.8 D8.6 (untrusted: checked)
      ST.scatterSets = j.view && Array.isArray(j.view.scatter) ? j.view.scatter.slice(0, 64) : [];   // 0.7 RT.5: cleaned on use
      ST.videoSettings = j.view && j.view.video && typeof j.view.video === 'object' ? j.view.video : null;   // 0.6 LC.10, cleaned when the dialog opens
      ST.timeline.load(j.anim);   // 0.6 LC.10 (untrusted: checked)
      ST.xrmc.load(j.issues);   // 0.6 LC.19 (untrusted: checked)
      ST.xrmc.loadAr(j.arAlignment);   // 0.8 EG.21 (untrusted: checked)
      docData.load(j.addons);   // 0.8 (untrusted: checked; add-ons hear onOpen)
      offerAddons(j.usesAddons);   // 0.8 AL.6: offer the add-ons this file used that this computer lacks
      ST.shell?.load(j); ST.shell?.opened();   // 0.8 round 3: the file's calc sheets and reasons; Suggest drops what was pending
      showUnits();
      styleToUi(); renderScenes(); setTool('select'); hideHint();
      scheduleInfo(); view.invalidate();
      if (recovered) { model.dirty = true; print(mnt.t('app.open.recovered', { file: file.name })); }
      else { mnt.adoc.clean(); print(mnt.t('app.open.done', { file: file.name }) + (ST.usdOpenNote ? ' ' + ST.usdOpenNote : '')); }
      ST.usdOpenNote = '';
      return true;
    } catch (err) {
      print(err instanceof SyntaxError ? mnt.t('app.open.notjson') : err.message);
      return false;
    }
  }

  return { bytesOf, openFromHost, firstOf, openFile };
}
