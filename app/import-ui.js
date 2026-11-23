/* SPDX-License-Identifier: Apache-2.0 */
/**
 * import-ui.js: modelcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountImport(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { importDXF, importDWG, importDAE } from './io.js';
import { Model } from './model.js';
import { ident } from './vec.js';
import { decodePartsAsync } from './textin.js';
import * as i18n from './i18n.js';

export function mountImport(ctx) {
  const { model, host, tools, print, dynamicNote, hideHint, afterHistory, ctxDef, zoomExtents, fileHost, bytesOf, ask } = ctx;

  /**
   * 0.11 PERF.7: a glTF or OBJ is read, welded and built into meshes in the page's worker pool (import-job.js), and only grafted
   * into the model here: the page thread no longer holds for seconds on a big file. null = do it on the page as before (no
   * workers, a Draco file, a job that failed for another reason than the file, or ?import=page, which tests use for "before").
   */
  async function importInWorker(kind, file, companions, name, label) {
    if (/[?&]import=page(&|$)/.test(location.search) || typeof Worker !== 'function') return null;
    let pool;
    try { pool = await (await import('./compute/runtime.js')).pagePool({ sceneBytes: file.size || 0 }); } catch { return null; }
    let meshoptUrl = null;
    try { meshoptUrl = import.meta.resolve('meshopt-decoder'); } catch { /* no import map entry: meshopt files are refused, as on the page without one */ }
    const bytes = (await bytesOf(file)).buffer;
    const comp = [];
    for (const f of companions) comp.push({ name: f.name, bytes: (await bytesOf(f)).buffer });
    let pkg;
    try {
      pkg = await pool.run(new URL('./import-job.js', import.meta.url).href, 'importJob', { kind, bytes, companions: comp, name, lang: i18n.catalog(), meshoptUrl },
        { priority: 5, transfer: [bytes, ...comp.map((c) => c.bytes)] });
    } catch (e) { console.warn('import in the worker failed, importing on the page', e); return null; }
    if (!pkg || pkg.pageOnly) return null;
    if (pkg.fail) throw new Error(pkg.fail);
    const { graftImport } = await import('./import-job.js');
    return model.change(label, (m) => { const x = graftImport(m, pkg); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
  }

  /** 0.8 EG.60 (round 3): Organize › Furnish a room… — the selected floor face furnished by the shared planner (furnish-mc.js over lib/furnish)
   *  with the starter library's furniture, one group on the Furniture tag, one undo step; what did not fit goes to Problems as notes. */
  let furnishSrc = null;
  async function furnishSelected() {
    const s = host.sel.length === 1 && host.sel[0].t === 'f' ? host.sel[0] : null;
    const F = await import('./furnish-mc.js');
    const room = s && F.roomOfFace(model, host.path, s.id);
    if (!room) { print(ctx.t('eg60.mc.pick')); return; }
    const open = F.openingsNear(model, room);
    const kind = el('select', { className: 'select-cc', dataset: { furnishKind: '' } }, el('option', { value: '' }, ctx.t('eg60.kind.guess')), ...F.KINDS.map((k) => el('option', { value: k }, ctx.t('eg60.kind.' + k))));
    const body = el('div', { className: 'mc-props' },
      el('p', { className: 'mc-note span' }, ctx.t('eg60.intro')),
      el('p', { className: 'mc-note span', dataset: { furnishRoom: '' } }, ctx.t('eg60.mc.room', { area: (Math.round(room.area * 10) / 10).toLocaleString(), doors: open.doors.length, windows: open.windows.length })),
      el('label', {}, ctx.t('eg60.kind')), kind);
    if (await ask({ title: ctx.t('eg60.title'), body, buttons: [['cancel', ctx.t('app.btn.cancel'), 'btn-line'], ['go', ctx.t('eg60.go'), 'btn-plot']] }) !== 'go') return;
    const planned = F.planRoom(model, { path: host.path, fid: s.id, kind: kind.value || null });
    const kindWord = ctx.t('eg60.kind.' + planned.kind);
    if (!planned.plan.placements.length) { print(ctx.t('eg60.mc.none', { kind: kindWord })); return; }
    const [{ buildStarter }, { footprint }] = await Promise.all([import('./starter.js'), import('./furnish.js')]);
    tools.escape();
    const group = ctx.t('eg60.mc.group', { kind: kindWord });
    const out = model.change(ctx.t('eg60.mc.undo'), (m) => F.furnishRoom(m, planned, { path: host.path, names: { group, tag: ctx.t('eg60.mc.tag') }, buildStarter, starterName: (id) => ctx.t('app.starter.' + id), footprint }));
    host.setSel([{ t: 'i', id: out.instance }]);
    ctx.tagsDrawn = ''; afterHistory();
    const skipped = planned.plan.skipped.map((x) => ctx.t('app.starter.' + (F.STARTER_OF[x.family] || 'table')));
    print(ctx.t('eg60.mc.done', { kind: kindWord, n: out.placed.length, group }) + (planned.guessed ? ' ' + ctx.t('eg60.guessed') : '') + (skipped.length ? ' ' + ctx.t('eg60.skipped', { list: skipped.join(', ') }) : ''));
    // what did not fit: shared Problems notes (rule 29), about this room's group
    const P = window.ccProblems;
    if (P && document.getElementById('cc-problems')) {
      furnishSrc ??= P.source({ id: 'modelcraft.furnish', kind: 'check', label: ctx.t('problems.src.furnish') });
      const { furnishProblems } = await import('./furnish.js');
      furnishSrc.set(furnishProblems({}, planned.plan, { id: 'i:' + out.instance, label: group, t: ctx.t }).map((p) => ({ ...p, source: { name: 'modelcraft.furnish' }, text: ctx.t(p.msg.key, { ...p.msg.vars, piece: ctx.t('app.starter.' + (F.STARTER_OF[p.msg.vars.piece] || 'table')) }) })));
    }
  }

  /** 0.8 EG.36 (round 3): File › Import a sketch photo… — a photo of a hand sketch becomes edges on the ground (sketch-photo-mc.js over the
   *  shared cc-photosketch): the paper is found and straightened, each pen colour is a group with its own tag, one undo step. */
  async function importSketchPhoto() {
    const [f] = await fileHost.openFile({ types: [{ description: ctx.t('mc.sketch.file'), extensions: ['.jpg', '.jpeg', '.png', '.tif', '.tiff'] }] }).catch((err) => { print(ctx.t('app.open.failed', { error: err.message })); return []; });
    if (!f) return;
    const SK = await import('./sketch-photo-mc.js');
    const paper = el('select', { className: 'select-cc', dataset: { sketchPaper: '' } }, el('option', { value: 'auto' }, ctx.t('mc.sketch.paper.auto')), ...SK.PAPERS.map((p) => el('option', { value: p.key }, ctx.t('mc.sketch.paper.' + p.key))));
    const scale = el('input', { className: 'mc-input mc-num', type: 'number', min: '1', max: '100000', step: '1', value: String(model.units === 'ft-in' || model.units === 'in' ? 48 : 100), dataset: { sketchScale: '' } });
    const colours = el('input', { type: 'checkbox', checked: true, dataset: { sketchColours: '' } });
    const body = el('div', { className: 'mc-props' },
      el('label', {}, ctx.t('mc.sketch.paper')), paper,
      el('label', {}, ctx.t('mc.sketch.scale')), el('span', { className: 'mc-inline' }, '1 : ', scale),
      el('label', {}, ctx.t('mc.sketch.colours')), colours,
      el('p', { className: 'mc-note span' }, ctx.t('mc.sketch.note')));
    if (await ask({ title: ctx.t('mc.sketch.h', { file: f.name }), body, buttons: [['cancel', ctx.t('app.btn.cancel'), 'btn-line'], ['go', ctx.t('mc.sketch.go'), 'btn-plot']] }) !== 'go') return;
    const n = Math.round(Number(scale.value));
    if (!(n >= 1 && n <= 100000)) { print(ctx.t('mc.sketch.bad_scale')); return; }
    print(ctx.t('mc.sketch.reading', { file: f.name }));
    await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
    let res;
    try {
      res = await SK.sketchPhoto(await bytesOf(f), { paper: paper.value, scale: n, colours: colours.checked, decodeJpeg: async (b) => {
        const bmp = await createImageBitmap(new Blob([b])), c = new OffscreenCanvas(bmp.width, bmp.height), g = c.getContext('2d');
        g.drawImage(bmp, 0, 0); const rgba = g.getImageData(0, 0, bmp.width, bmp.height).data, data = new Uint8Array(bmp.width * bmp.height * 3);
        for (let i = 0, j = 0; i < rgba.length; i += 4, j += 3) { data[j] = rgba[i]; data[j + 1] = rgba[i + 1]; data[j + 2] = rgba[i + 2]; }
        return { w: bmp.width, h: bmp.height, channels: 3, data };
      } });
    } catch (err) { print(ctx.t('mc.sketch.failed', { error: String(err?.message || err) })); return; }
    if (!res.entities.length) { print(ctx.t('mc.sketch.empty', { file: f.name })); return; }
    tools.escape();
    const names = Object.fromEntries(['black', 'red', 'blue', 'green'].map((k) => [k, ctx.t('mc.sketch.tag.' + k)]));
    const out = model.change(ctx.t('mc.sketch.undo'), (m) => SK.addSketch(m, res, { name: ctx.t('mc.sketch.group', { file: f.name.replace(/\.[^.]+$/, '').slice(0, 60) }), into: m.context(host.path).def, names }));
    ctx.tagsDrawn = ''; afterHistory();   // the Tags panel lists the new colour tags
    print(ctx.t('mc.sketch.done', { edges: out.edges, n: out.groups.length, scale: n }) + ' ' + ctx.t(res.found ? 'mc.sketch.found' : 'mc.sketch.whole'));
  }
  async function importFile(file, companions = []) {
    if (/\.ccbundle$|ccbundle\.zip$/i.test(file.name)) {   // 0.8 BIM-BUNDLE-OPEN: a project bundle imports its first drawing (no IFC reader here; shared reader and plan, ./bundle/plan.js)
      const r = await (await import('./bundle/plan.js')).expandBundles([file], 'modelcraft', { prefer: ['dwg'], limit: 1 });
      const n = r.notes[0];
      if (!n || n.code === 'failed') { print(ctx.t('bundle.failed', { file: file.name, why: n ? n.why : '' })); return; }
      if (n.code === 'empty' || !r.files.length) { print(ctx.t('bundle.nodrawing', { file: file.name })); return; }
      print(ctx.t('bundle.drawing', { file: file.name }));
      return importFile(r.files[0], companions);
    }
    const ext = (file.name.match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();
    const name = file.name.replace(/\.[^.]+$/, '').slice(0, 80) || ctx.t('app.import.default');
    if (!['skp', 'dae', 'obj', 'glb', 'gltf', 'dwg', 'dxf', 'ccbundle', 'ply', 'stl', 'abc', 'fbx', 'usd', 'usda', 'usdc', 'usdz', 'step', 'stp', '3dm'].includes(ext)) { print(ctx.t('app.import.kind', { file: file.name })); return; }
    try {
      if ((file.size || 0) > 300 * 1048576) throw new Error(ctx.t('app.import.toobig'));
      tools.escape();
      let r;
      if (ext === 'dxf' || ext === 'dwg') {
        // site plans: lines, polylines with bulges, circles, arcs and blocks → edges on the ground
        let read, dwgModel = null;   // dwgModel: 0.5 DB.11 (its dynamic blocks are listed after the import)
        if (ext === 'dxf') {
          const text = await file.text();
          read = (m, opts) => importDXF(m, text, name, opts);
        } else {
          const bytes = await bytesOf(file);
          print(ctx.t('app.import.reading', { file: file.name }));
          const { readDWG } = await import('./dwg-reader.js');
          await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));   // let the status paint: reading takes a moment on big files
          const dwg = await readDWG(bytes);
          dwgModel = dwg;
          read = (m, opts) => importDWG(m, dwg, name, opts);
        }
        let unit = null;
        if (!read(new Model(), {}).units) {
          unit = await ask({ title: ctx.t('app.import.units.h'), text: ctx.t('app.import.units.text', { kind: ext.toUpperCase() }), buttons: [['cancel', ctx.t('app.btn.cancel'), 'btn-line'], ['in', ctx.t('app.import.units.in'), 'btn-line'], ['ft', ctx.t('app.import.units.ft'), 'btn-line'], ['mm', ctx.t('app.import.units.mm'), 'btn-line'], ['m', ctx.t('app.import.units.m'), 'btn-plot']] });
          if (unit === 'cancel') return;
        }
        // other programs' 3D solids (ACIS, 0.7 D7.25): cc-acis loads with the drawing, the first read only asks for units
        const acis = await import('./acis/index.js');
        r = model.change(ctx.t('app.undo.import_site'), (m) => { const x = read(m, { unit: unit || undefined, acis }); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        const R = r.report;
        const solidsNote = (R.solids ? ' ' + ctx.t('ccacis.app.import', { n: R.solids, closed: R.solidsClosed }) : '') + (R.acisNotDrawn?.length ? ' ' + ctx.t('ccacis.not_drawn', { list: acis.notDrawnText(acis.addNotDrawn(new Map(), R.acisNotDrawn)) }) : '');
        if (!r.def.edges.size && R.solids) print(solidsNote.trim() + ctx.skipped(R));
        else if (!r.def.edges.size) print(ctx.t('app.import.site.empty', { file: file.name }) + ctx.skipped(R) + solidsNote);
        else print(ctx.t('app.import.site', { file: file.name, edges: r.def.edges.size }) + (r.def.faces.size ? ' ' + ctx.t('app.import.site.faces', { n: r.def.faces.size }) : '') + (R.texts ? ' ' + ctx.t('app.import.site.texts', { n: R.texts }) : '') + ' ' + ctx.t('app.import.site.group') + ctx.skipped(R) + solidsNote + dynamicNote(dwgModel));
      } else if (ext === 'skp') {
        // SketchUp: our own reader (cc-skp, ./skp/), loaded on the first .skp
        const bytes = await bytesOf(file);
        print(ctx.t('app.import.skp.reading', { file: file.name }));
        const [{ readSkp }, { importSKP }] = await Promise.all([import('./skp/read.js'), import('./skp-import.js')]);
        await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
        const skp = await readSkp(bytes);
        r = model.change(ctx.t('app.undo.import_skp'), (m) => { const x = importSKP(m, skp, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        const rep = r.report;
        print(ctx.t('app.import.skp.done', { file: file.name, version: rep.version, faces: rep.faces, n: rep.components })
          + (rep.tags ? ' ' + ctx.t('app.import.skp.tags', { n: rep.tags }) : '')
          + (rep.hidden ? ' ' + ctx.t('app.import.skp.hidden', { n: rep.hidden }) : '')
          + (rep.untagged ? ' ' + ctx.t('app.import.skp.untagged', { n: rep.untagged }) : '')
          + (rep.texturedKept ? ' ' + ctx.t('app.import.skp.textures_kept', { n: rep.texturedKept }) : '')
          + (rep.textured > (rep.texturedKept || 0) ? ' ' + ctx.t('app.import.skp.textures', { n: rep.textured - (rep.texturedKept || 0) }) : '') + ctx.skipped(rep));
      } else if (ext === 'dae') {
        const text = file.size > 32 * 1048576 ? await decodePartsAsync(file) : await file.text();   // 0.10 PERF.20: a big Collada file is read in parts
        r = model.change(ctx.t('app.undo.import_dae'), (m) => { const x = importDAE(m, text, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        const rep = r.report;
        const conv = [rep.up !== 'Z_UP' && ctx.t('app.import.dae.up', { axis: rep.up === 'Y_UP' ? 'Y' : 'X' }), rep.meter !== 1 && ctx.t('app.import.dae.unit', { m: rep.meter })].filter(Boolean);
        print((rep.components ? ctx.t('app.import.dae.comps', { file: file.name, faces: rep.faces, n: rep.components }) : ctx.t('app.import.dae', { file: file.name, n: rep.faces }))
          + (conv.length ? ' ' + ctx.t('app.import.dae.converted', { how: conv.join(', ') }) : '') + ctx.skipped(rep));
      } else if (ext === 'usd' || ext === 'usda' || ext === 'usdc' || ext === 'usdz') {
        // 0.7 XF.2 (usd-modelcraft.js on cc-usd): any USD scene in as groups, meshes, components, lamps and cameras;
        // layers it refers to come from the files dropped with it
        const bytes = await bytesOf(file);
        const { importUsd } = await import('./usd-modelcraft.js');
        const byName = new Map();
        for (const f of companions) byName.set(f.name.toLowerCase(), await bytesOf(f));
        const read = (n) => byName.get(String(n).split(/[\\/]/).pop().toLowerCase()) || null;
        r = model.change(ctx.t('usd.undo.import'), (m) => { const x = importUsd(m, bytes, name, { read, fileName: file.name }); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        print(ctx.t('usd.imported', { name: file.name, meshes: r.report.meshes, materials: r.report.materials }) + (r.report.notes.length ? ' ' + ctx.t('usd.note.notes', { notes: r.report.notes.slice(0, 3).join(' ') }) : ''));
      } else if (ext === 'step' || ext === 'stp') {
        // 0.7 D7.26 (session part-08): STEP through cc-step (io/step/), every solid as triangles where the file places it
        const bytes = await bytesOf(file);
        print(ctx.t('app.import.reading', { file: file.name }));
        const { readStepFile, importStep } = await import('./io/step-import.js');
        await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
        let read;
        try { read = readStepFile(bytes); } catch (err) { throw err && err.code ? new Error(ctx.t(err.code, err.vars)) : err; }
        r = model.change(ctx.t('app.undo.import_step'), (m) => { const x = importStep(m, read, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        const R = r.report;
        print(ctx.t('io.import.step', { file: file.name, schema: R.schema, n: R.solids, faces: R.faces }) + (R.notes.length ? ' ' + ctx.t('io.import.step_notes', { notes: R.notes.slice(0, 3).join(' ') }) : '') + ctx.skipped(R));
      } else if (ext === '3dm') {
        // 0.7 SU.810 (session 3dm): cc-3dm (io/3dm/) — meshes, polysurfaces (saved render meshes, else tessellated), curves, blocks, layers
        const bytes = await bytesOf(file);
        print(ctx.t('ccdm.app.reading', { file: file.name }));
        const { read3dmFile, import3dm, importMessage } = await import('./io/3dm-import.js');
        await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
        const scene = read3dmFile(bytes);
        r = model.change(ctx.t('ccdm.app.undo'), (m) => { const x = import3dm(m, scene, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        print(importMessage(file.name, r.report) + ctx.skipped(r.report));
      } else if (ext === 'obj' || ext === 'ply' || ext === 'stl' || ext === 'abc' || ext === 'fbx') {
        // 0.7 XF.3 (io/): OBJ + MTL with textures (found among the files dropped with it), PLY and STL with colour, Alembic caches
        const bytes = ext === 'obj' ? null : await bytesOf(file);   // an OBJ is read by the worker (PERF.7), or below when it cannot
        const ctxId = model.context(host.path).def.id;
        const into = (label, build) => model.change(label, (m) => { const x = build(m); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [ctxId]);
        if (ext === 'obj') {
          r = await importInWorker('obj', file, companions, name, ctx.t('app.undo.import_obj'));
          if (!r) {
            const { readObj, importObj } = await import('./io/obj.js');
            const byName = new Map(companions.map((f) => [f.name.toLowerCase(), f]));
            const resolve = async (u) => { const f = byName.get(String(u).split(/[\\/]/).pop().toLowerCase()); return f ? bytesOf(f) : null; };
            const obj = await readObj(await bytesOf(file), { resolve });
            r = into(ctx.t('app.undo.import_obj'), (m) => importObj(m, obj, name));
          }
          print(ctx.t('io.import.obj', { file: file.name, faces: r.report.faces, n: r.report.objects }) + (r.report.textures ? ' ' + ctx.t('io.import.textures', { n: r.report.textures }) : '') + ctx.skipped(r.report));
        } else if (ext === 'ply') {
          const { readPly, importPly } = await import('./io/ply.js');
          const ply = readPly(bytes);
          r = into(ctx.t('app.undo.import_ply'), (m) => importPly(m, ply, name));
          print((r.report.faces ? ctx.t('io.import.ply', { file: file.name, faces: r.report.faces }) : ctx.t('io.import.none', { file: file.name })) + (r.report.colours ? ' ' + ctx.t('io.import.colours', { n: r.report.colours }) : '') + ctx.skipped(r.report));
        } else if (ext === 'stl') {
          const { readStl, importStl } = await import('./io/stl.js');
          const stl = readStl(bytes);
          r = into(ctx.t('app.undo.import_stl'), (m) => importStl(m, stl, name, { unit: 'mm' }));
          print(ctx.t('io.import.stl', { file: file.name, faces: r.report.faces, unit: ctx.t('app.import.units.mm') }) + (r.report.colours ? ' ' + ctx.t('io.import.colours', { n: r.report.colours }) : '') + ctx.skipped(r.report));
        } else if (ext === 'fbx') {
          // 0.7 XF.6: our own clean-room FBX reader (docs/spikes/fbx-reader.md); textures it names come from the files dropped with it
          const [{ parseFbx }, { readFbxScene, importFbx }] = await Promise.all([import('./io/fbx-parse.js'), import('./io/fbx-import.js')]);
          const byName = new Map(companions.map((f) => [f.name.toLowerCase(), f]));
          const scene = await readFbxScene(parseFbx(bytes), { resolve: async (u) => { const f = byName.get(String(u).toLowerCase()); return f ? bytesOf(f) : null; } });
          r = into(ctx.t('app.undo.import_fbx'), (m) => importFbx(m, scene, name));
          const R = r.report;
          print(ctx.t('io.import.fbx', { file: file.name, faces: R.faces, n: R.meshes }) + (R.textures ? ' ' + ctx.t('io.import.textures', { n: R.textures }) : '')
            + (R.lights ? ' ' + ctx.t('io.import.lights', { n: R.lights }) : '') + (R.cameras ? ' ' + ctx.t('io.import.cameras', { n: R.cameras }) : '')
            + (R.bones || R.animations ? ' ' + ctx.t('io.import.fbx.animation', { bones: R.bones, animations: R.animations }) : '') + ctx.skipped(R));
        } else {
          const { readAbc, importAbc } = await import('./io/abc.js');
          const abc = readAbc(bytes);
          r = into(ctx.t('app.undo.import_abc'), (m) => importAbc(m, abc, name));
          print(ctx.t('io.import.abc', { file: file.name, faces: r.report.faces, n: r.report.meshes }) + (abc.samples > 1 ? ' ' + ctx.t('io.import.abc.frames', { n: abc.samples }) : '') + ctx.skipped(r.report));
        }
      } else {
        // glTF 2.0 (0.7 XF.1, io/gltf.js): read with its decoders (Draco, meshopt) loaded only when the file uses them,
        // a .gltf's own .bin and textures taken from the files dropped or picked with it
        const { readGltfFile, importGltfScene, importMessage } = await import('./io/gltf.js');
        r = await importInWorker('gltf', file, companions, name, ctx.t('app.undo.import_gltf'));
        if (!r) {
          const bytes = await bytesOf(file);
          const scene = await readGltfFile(bytes, { companions });
          r = model.change(ctx.t('app.undo.import_gltf'), (m) => { const x = importGltfScene(m, scene, name); m.place(m.context(host.path).def, x.def.id, ident()); return x; }, [model.context(host.path).def.id]);
        }
        print(importMessage(file.name, r.report) + ctx.skipped(r.report));
      }
      const iid = [...ctxDef().insts.keys()].pop();
      host.setSel([{ t: 'i', id: iid }]);
      hideHint();
      zoomExtents();
    } catch (err) { print(ctx.t('app.import.failed', { file: file.name, error: err.message })); }
  }

  return { furnishSelected, importSketchPhoto, importFile };
}
