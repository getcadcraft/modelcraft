/* SPDX-License-Identifier: Apache-2.0 */
/**
 * export-ui.js: modelcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountExport(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as i18n from "./i18n.js";
import { pngName } from './viewimage.js';
import { exportGltf } from './io/gltf-write.js';
import { exportDAE, exportIFC, exportDXF, toDwgModel } from './io.js';
import { exportObj } from './io/obj.js';
import { exportStl } from './io/stl.js';
import { exportPly } from './io/ply.js';

export function mountExport(ctx) {
  const { ST, ui, model, cam, host, view, tools, print, printView, closeMenus, openVideo, download, base, modelText, exportInWorker, saveAs, root } = ctx;

  ST.liveView = null;   // 0.7 RT.3 (session realtime): the live view, one at a time
  root.querySelectorAll('[data-export]').forEach((b) => b.addEventListener('click', async () => {
    closeMenus();
    tools.escape();
    const kind = b.dataset.export;
    try {
      if (kind === 'live' || kind === 'live-window') {
        // the model in the real-time look beside the view, following edits (rt/rt-view.js; ModelCraft's adapter rt/rt-mc.js)
        const [{ openLiveView }, { mcLive }, { pagePool }] = await Promise.all([import('./rt/rt-view.js'), import('./rt/rt-mc.js'), import('./compute/runtime.js')]);
        ST.liveView?.close();
        const scatter = { get: () => ST.scatterSets, set: (list) => { ST.scatterSets = list; model.dirty = true; } };   // RT.5: saved with the file
        // RT.4: Share needs saving, the file's name and the animation path (the timeline, else the scenes made into one)
        const animation = () => { if (!ST.timeline.has() && model.scenes.length >= 2) ST.timeline.fromScenes(); return ST.timeline.has() ? ST.timeline.anim : null; };
        ST.liveView = await openLiveView(mcLive({ model, cam, view, host, settings: () => ST.renderSettings || {}, scatter, download: (blob, name) => download(blob, name, blob.type || 'application/octet-stream'), fileBase: base, animation }), { t: ctx.t, parent: root, pool: await pagePool({}), window: kind === 'live-window' });
        return;
      }
      if (kind === 'usd') { await saveAs(true); return; }   // 0.7 XF.9
      if (kind === 'print3d') { await ctx.print3d(); return; }
      if (kind === 'video') { await openVideo(); return; }   // 0.6 LC.10
      if (kind === 'render') {
        // a rendered picture of the view (0.5 RC.11): the shared renderer in render/, ModelCraft's adapter render-mc.js
        if (!model.root.faces.size && !model.root.insts.size) { print(ctx.t('app.export.empty')); return; }
        const [{ openRenderDialog }, { mcScene, mcColors }] = await Promise.all([import('./render/render-ui.js'), import('./render-mc.js')]);
        openRenderDialog({
          scene: (s) => mcScene(model, cam, view.style, s),
          viewSize: () => ({ w: ui.gl.clientWidth, h: ui.gl.clientHeight }),
          colors: () => mcColors(model),
          modelSun: () => { const s = view.style.sun || {}; return { month: s.month || 6, day: s.day || 21, hour: s.hour ?? 15 }; },
          settings: ST.renderSettings,
          save: (s) => { ST.renderSettings = s; },
          download: (blob, name) => download(blob, name, blob.type || 'application/octet-stream'),   // 0.7 RN.9: PNG, 16-bit PNG, JPEG, WebP, EXR, .ccrender
          appName: 'ModelCraft',
          fileBase: base,
          // 0.8 RE.2/RE.6 (engines' hand-over, mounted by model_PART_3): the package another engine renders (USD, + glTF for "Open in …")
          handoff: async (s, z) => { const { mcHandoff } = await import('./handoff-mc.js'); return mcHandoff({ model, cam, style: view.style, file: JSON.parse(modelText()), name: base() })(s, z); },
          onClose: () => { view.invalidate(); ui.over.focus({ preventScroll: true }); },
          parent: root,
        });
        return;
      }
      if (kind === 'pdf' || kind === 'print') {
        // the view on a page (0.4 M13): twice its screen size, with what it shows (dimensions too), and a caption
        const blob = await view.png(2, kind === 'pdf' ? 'image/jpeg' : 'image/png', 0.92);   // i18n-ignore: media types
        const bmp = await createImageBitmap(blob), w = bmp.width, h = bmp.height;
        bmp.close?.();
        const caption = ctx.t('app.print.caption', { file: base(), date: new Date().toLocaleDateString(i18n.locale() === 'en-XA' ? 'en' : i18n.locale(), { dateStyle: 'medium' }), unit: ctx.unitWords(model.units) });
        const paper = model.units === 'ft-in' || model.units === 'in' ? 'letter' : 'a4';   // i18n-ignore: paper keys
        if (kind === 'pdf') {
          const { viewPdf } = await import('./viewpdf.js');
          const pdf = viewPdf({ jpeg: new Uint8Array(await blob.arrayBuffer()), width: w, height: h, caption, paper });
          download(pdf, base() + '.pdf', 'application/pdf');
          print(ctx.t('app.export.pdf', { file: base() + '.pdf', paper: ctx.t(paper === 'a4' ? 'app.print.a4' : 'app.print.letter') }));
        } else printView(blob, caption, paper);
        return;
      }
      if (kind === 'png' || kind === 'png2') {
        // the view as an image (0.4 1.7): what is on screen; presentation view (Shift+P) for a clean one
        const scale = kind === 'png2' ? 2 : 1, blob = await view.png(scale), name = pngName(base(), scale);
        download(blob, name, 'image/png');
        print(ctx.t(ST.presentation ? 'app.export.png' : 'app.export.png.tip', { file: name, w: Math.round(ui.gl.clientWidth * view.renderer.getPixelRatio() * scale), h: Math.round(ui.gl.clientHeight * view.renderer.getPixelRatio() * scale) }));
        return;
      }
      if (!model.root.faces.size && !model.root.insts.size && !model.root.edges.size) { print(ctx.t('app.export.empty')); return; }
      // 0.10 PERF.38: glTF, DAE and OBJ are written in the worker pool (file-text.js exportFile); without one, here
      const w = kind === 'glb' || kind === 'dae' || kind === 'obj' ? await exportInWorker(kind) : null;
      if (kind === 'glb') download(w ? w.bytes : exportGltf(model).bytes, base() + '.glb', 'model/gltf-binary');
      else if (kind === 'dae') download(w ? w.text : exportDAE(model, { name: base() }), base() + '.dae', 'model/vnd.collada+xml');
      else if (kind === 'obj') {
        // 0.7 XF.3 (io/obj.js): meshes with their UVs and normals; colours as a .mtl beside it (M8); with imported textures,
        // the .obj, the .mtl and the pictures go out together as one .zip
        const r = w ? { obj: w.text, ...w.extra } : exportObj(model, { base: base() });
        if (!r.mtl) download(r.obj, base() + '.obj', 'text/plain');
        else if (!r.images.length) { download(r.obj, base() + '.obj', 'text/plain'); setTimeout(() => download(r.mtl, r.mtlName, 'text/plain'), 400); }
        else {
          const { zip } = await import('./bcf.js');
          const te = new TextEncoder();
          const objBytes = typeof r.obj === 'string' ? te.encode(r.obj) : new Uint8Array(await r.obj.arrayBuffer());   // 0.11 PERF.26: a Blob past 300 M characters
          download(zip([{ name: r.mtlName.replace(/\.mtl$/, '.obj'), data: objBytes }, { name: r.mtlName, data: te.encode(r.mtl) }, ...r.images.map((i) => ({ name: i.name, data: i.bytes }))]), base() + '.zip', 'application/zip');
          print(ctx.t('io.export.obj.zip', { file: base() + '.zip', n: r.images.length }));
        }
      }
      else if (kind === 'stl') download(exportStl(model).bytes, base() + '.stl', 'model/stl');   // 0.7 XF.3: with VisCAM colours when painted
      else if (kind === 'ply') { const r = exportPly(model); download(r.bytes, base() + '.ply', 'application/octet-stream'); print(ctx.t('io.export.ply', { file: base() + '.ply', faces: r.report.faces })); }
      else if (kind === 'ifc') download(exportIFC(model, { name: base() }), base() + '.ifc', 'application/x-step');
      else if (kind === 'dxf' || kind === 'dwg') {
        // CAD programs: 3D faces, lines, groups and components as blocks, in the model's unit (0.4 M2)
        let r, data;
        if (kind === 'dxf') { r = exportDXF(model); data = r.text; } else {
          let W = null;
          // the page's import map lists every file of this build: no DWG writer there = not in this build (no 404 fetch)
          const map = (() => { try { return JSON.parse(document.querySelector('script[type="importmap"]')?.textContent || 'null')?.imports || null; } catch { return null; } })();
          const wurl = new URL('./dwg/write.js', import.meta.url);
          const listed = !map || Object.keys(map).some((k) => { try { return new URL(k, location.href).pathname === wurl.pathname; } catch { return false; } });
          if (listed) W = await import('./dwg/write.js').catch(() => null);
          if (!W) { print(ctx.t('app.export.dwg.none')); return; }
          r = toDwgModel(model, { created: new Date() });
          data = W.writeDwg(r.dwg, { version: 'AC1018' }).bytes;
        }
        download(data, base() + '.' + kind, kind === 'dxf' ? 'image/vnd.dxf' : 'image/vnd.dwg');
        const R = r.report;
        print(ctx.t('app.export.cad', { file: base() + '.' + kind, unit: ctx.unitWords(model.units === 'ft-in' ? 'in' : model.units), faces: R.triangles, lines: R.lines, blocks: R.blocks, inserts: R.inserts }) + (R.flattened ? ' ' + ctx.t('app.export.cad.flat', { n: R.flattened }) : ''));
        return;
      }
      print(ctx.t(kind === 'ifc' && model.storeys.length ? 'app.export.done.ifc_storeys' : ['stl', 'ifc', 'dae'].includes(kind) ? 'app.export.done.' + kind : 'app.export.done', { file: base() + '.' + kind, n: model.storeys.length }));
    } catch (err) { print(ctx.t('app.export.failed', { error: err.message })); }
  }));
}
