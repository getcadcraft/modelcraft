/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ws-shading.js — the Shading workspace (0.7 MT.1, session `materials`): the file's own materials as node graphs. The 3D view
 * keeps the top of the stage and shows every edit at once (render/three-mats.js refreshes the material in place); the node
 * editor (shading/editor.js) takes the bottom. The panel lists the file's materials (new, duplicate, rename, delete, paint),
 * makes an editable copy of a library material, and says which inputs the path tracer can only average. Follows PartCraft's
 * workspace pattern through workspaces.js.
 *
 *   materials       the open file's MaterialTable (shading/doc.js): modelcraft.js saves it beside the model and loads it
 *   attachShading({model, onEdit})   the pictures a graph reads come from model.images; onEdit after every material change
 *   libraryGraph(id, t) → graph      a library material as an editable node graph (its texture through a Library node)
 *   useLibraryMaterial(host, entry) → id   (MT.3) a LibraryCraft material into the file: its pictures (checked against their sha256)
 *                                    join the model's pictures, its graph becomes a material of the file with its credit (source);
 *                                    the same item version used again is the same material
 *   importTextureSet(host, files, name) → id | null   (MT.3) pictures (and zips of pictures) → a material, maps found by name
 *   exportMaterialX(host, id, flavor) / importMaterialX(host, files)   (MT.4) the material as MaterialX (.mtlx, zipped with its PNGs
 *                                    when it has textures), and MaterialX files (with their pictures, a zip, or a folder) as materials
 *
 *   placeDecal(host, file) / decal tool 'shadingdecal'   (MT.6) a picture → a material of its own (Picture → base colour + cut-out)
 *                                    and a decal placed where the next click lands (decals: shading/decal.js, kept in the table)
 *   texture painting, tool 'shadingpaint'   (MT.6) a round brush on the faces wearing one of the file's materials: it paints the
 *                                    picture behind the material's base colour (a material with none gets a new 512 × 512 one), on
 *                                    the face's UVs (meshes) or its own metres (push/pull faces); one stroke = one "Undo stroke"
 *
 *   bakeSelection(host, opts) → {map: picture key}   (MT.5) bakes the selected mesh's AO, curvature, normals (from a second selected
 *                                    object, the high-detail one) and lighting into pictures along its UVs (shading/texbake.js through
 *                                    the compute pool); the open material's Dirt and edge wear node gets the AO and curvature
 *
 * The panel's Material library (MT.3) lists LibraryCraft's materials (rendered previews); click one to use it (and paint the
 * selection), or drag it onto a face or a group in the view. Import a texture set takes pictures, a zip, or a folder.
 *
 * Keys: those of the node editor while it has the focus (Delete, Mod+Z, Shift+A, F, arrows; see shading/editor.js).
 */
import { registerWorkspace } from './workspaces.js';
import { NodeEditor } from './shading/editor.js';
import { NODE_TYPES, CATEGORIES, defaultValues, defaultParams } from './shading/nodes.js';
import { MaterialTable } from './shading/doc.js';
import { newGraph, outputNode } from './shading/graph.js';
import { decodeImage } from './shading/images.js';
import { gpuBaker } from './shading/bake-gpu.js';
import { MATERIALS, CATEGORIES as MAT_CATS, material as libMat, planarUV } from './render/materials.js';
import { swatchPixels } from './render/three-mats.js';
import { isMaterialPaint, toBase64 } from './model.js';
import { listMaterials, loadMaterial, graphFor, sourceOf } from './shading/library.js';
import { pickMaps, textureSetGraph } from './shading/texset.js';
import { fromPhoto, decodePhoto } from './photo-material.js';   // 0.8 EG.62
import { openZip } from './skp/zip.js';
import { readMaterialX, writeMaterialX, ident } from './shading/mtlx.js';
import { zipStored } from './render/webm.js';
import { Tool, registerTool } from './tools.js';
import { makeDecal, decalGraph } from './shading/decal.js';
import { blankPicture, stamp, strokeDabs, pictureRgb, snapshot, restore } from './shading/paint.js';
import { pngBytes } from './render/pt-output.js';
import { IMG_SIZE, resample } from './shading/images.js';
import { bakeTextures } from './shading/texbake.js';
import { defTriangles } from './decals-mc.js';
import { sunPosition } from './sun.js';
import { apply, applyDir, invert, sub, cross, norm } from './vec.js';

export const materials = new MaterialTable();
let model = null, onEdit = () => {};
export function attachShading(o) {
  model = o.model;
  onEdit = o.onEdit || onEdit;
  materials.resolveImage = async (key) => {
    if (!key.startsWith('img:') || !model) return null;
    const im = model.images.get(key.slice(4));
    return im ? decodeImage(im.mime, im.data) : null;
  };
}

const G = (cmd, icon) => ({ cmd: 'shading-' + cmd, icon, labelKey: 'shading.cmd.' + cmd, titleKey: 'shading.cmd.' + cmd + '.title' });
const st = { box: null, editor: null, id: null, host: null, gpu: null, gpuTimer: 0, empty: null, lib: { state: 'idle', items: [], open: false }, drop: null };
const DRAG_TYPE = 'application/x-cadcraft-material';
const NEEDS_MAT = new Set(['duplicate', 'delete', 'paint', 'add', 'frame']);
st.brush = { radius: 12, color: '#3a6ea5', strength: 0.8, hardness: 0.5 };
st.decal = { width: 0.5 };
st.strokes = [];
st.photo = { size: 1, rough: 0.65 };   // 0.8 EG.62: the tile size in metres and the base roughness the panel's "From a photo" uses
st.bake = { maps: { ao: true, curvature: true, normal: false, light: false }, size: 512, rays: 32, dist: 0, width: 1, cage: 2, busy: null };   // texture painting's undo: [{key, snap}], newest last

export const SHADING_WS = registerWorkspace({
  id: 'shading', labelKey: 'app.ws.shading', icon: 'palette2',
  groups: [
    { labelKey: 'shading.group.material', items: [G('new', 'plus-square'), G('duplicate', 'copy'), G('delete', 'trash'), G('paint', 'paint-bucket')] },
    { labelKey: 'shading.group.nodes', items: [G('add', 'node-plus'), G('frame', 'fullscreen')] },
    { labelKey: 'shading.group.surface', items: [G('decal', 'sticky'), G('texpaint', 'brush')] },
    { labelKey: 'shading.group.done', items: [G('done', 'box-arrow-left')] },
  ],
  enter(host) { return enter(host); },
  exit(host) { exit(host); },
  command(cmd, host) { return command(cmd.slice(8), host); },
  renderPanel(host, box) { return panel(host, box); },
  toolState(cmd, host) {
    const name = cmd.slice(8);
    if (NEEDS_MAT.has(name) && !materials.has(st.id)) return { ok: false, why: host.t('shading.why.no_material') };
    if (name === 'texpaint') return { ok: true, pressed: host.tools?.name === 'shadingpaint' };
    if (name === 'decal') return { ok: true, pressed: host.tools?.name === 'shadingdecal' };
    return { ok: true };
  },
  changed(host) { if (st.id && !materials.has(st.id)) open(host, materials.list()[0]?.id || null); },
  keydown(ev, host) {
    // MT.6: Mod+Z while painting takes back the last stroke (the model's own undo does not hold pictures)
    if (host.tools?.name === 'shadingpaint' && (ev.ctrlKey || ev.metaKey) && !ev.shiftKey && ev.key.toLowerCase() === 'z') return undoStroke(host);
    return false;
  },
});

const words = (t) => ({
  node: (x) => t('shading.node.' + x), input: (x) => t('shading.in.' + x), output: (x) => t('shading.out.' + x),
  param: (x) => t('shading.param.' + x), option: (x) => t('shading.opt.' + x), cat: (x) => t('shading.cat.' + x),
});

function enter(host) {
  st.host = host;
  host.stage.classList.add('mc-stage-shading');
  st.box = host.el('div', { className: 'mc-shading', dataset: { shadingEditor: '' } });
  host.stage.append(st.box);
  st.editor = new NodeEditor(st.box, {
    el: host.el, t: host.t, types: NODE_TYPES, categories: CATEGORIES, words: words(host.t),
    onChange: (g) => edited(host, g),
    choices: {
      image: () => (model ? [...model.images].map(([id, im]) => ({ key: 'img:' + id, name: im.name || id })) : []),
      library: () => MATERIALS.filter((m) => m.tex).map((m) => ({ id: m.id, name: host.t('render.mat.' + m.id) })),
    },
  });
  st.empty = host.el('div', { className: 'mc-shading-empty', dataset: { shadingEmpty: '' } },
    host.el('p', {}, host.t('shading.empty')),
    host.el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: () => command('new', host) }, host.t('shading.cmd.new')));
  st.box.append(st.empty);
  // the material of the selection, when it wears one of the file's
  let pick = st.id && materials.has(st.id) ? st.id : null;
  const def = host.model.context(host.path)?.def;
  for (const s of host.sel) {
    const c = s.t === 'f' ? def?.faces.get(s.id)?.color : s.t === 'i' ? def?.insts.get(s.id)?.color : null;
    if (isMaterialPaint(c) && materials.has(c.slice(4))) { pick = c.slice(4); break; }
  }
  open(host, pick || materials.list()[0]?.id || null);
  // MT.3: a library material dragged from the panel onto the view paints what is under the pointer
  const over = host.viewEl;
  if (over) {
    const dragover = (e) => { if (e.dataTransfer && [...e.dataTransfer.types].includes(DRAG_TYPE)) { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; } };
    const drop = async (e) => {
      const uuid = e.dataTransfer?.getData(DRAG_TYPE);
      const entry = uuid && st.lib.items.find((x) => x.uuid === uuid);
      if (!entry) return;
      e.preventDefault();
      const x = e.clientX, y = e.clientY;
      const id = await useLibraryMaterial(host, entry);
      if (id && !host.paintAt?.(x, y, 'mat:' + id, materials.get(id).graph.name)) host.print(host.t('shading.lib.drop_miss'));
    };
    over.addEventListener('dragover', dragover); over.addEventListener('drop', drop);
    st.drop = () => { over.removeEventListener('dragover', dragover); over.removeEventListener('drop', drop); };
  }
  if ('gpu' in navigator) navigator.gpu.requestAdapter().then((a) => a?.requestDevice()).then((d) => { if (d && st.box) { st.gpu = gpuBaker(d); st.gpuDevice = d; } }).catch(() => {});
  host.tip(host.t('shading.hint'));
  return true;
}
function exit(host) {
  clearTimeout(st.gpuTimer);
  st.drop?.(); st.drop = null;
  st.editor?.destroy(); st.editor = null;
  st.box?.remove(); st.box = null;
  st.gpu?.destroy(); st.gpu = null; st.gpuDevice?.destroy?.(); st.gpuDevice = null;
  host.stage.classList.remove('mc-stage-shading');
  if (host.tools && (host.tools.name === 'shadingpaint' || host.tools.name === 'shadingdecal')) host.tools.set('select');
  host.view.invalidate();
}
/** Show material `id` in the editor (null: the empty state). */
function open(host, id) {
  st.id = id && materials.has(id) ? id : null;
  if (st.empty) st.empty.hidden = !!st.id;
  if (st.editor) { st.editor.root.hidden = !st.id; if (st.id) st.editor.setGraph(materials.get(st.id).graph); }
  if (st.id) materials.prepare(st.id).then((n) => { if (n) { host.view.invalidate(); host.renderPanel(); } }).catch(() => {});
  host.renderPanel();
}
function edited(host, g) {
  if (!st.id) return;
  materials.setGraph(st.id, g);
  onEdit();
  materials.prepare(st.id).catch(() => {});
  host.view.invalidate();
  host.renderPanel();
  // the renderer's full-size bake on the graphics card, when there is one (the view's comes from the JS bake at its own size)
  clearTimeout(st.gpuTimer);
  const id = st.id;
  st.gpuTimer = setTimeout(async () => {
    const m = materials.get(id);
    if (!st.gpu || !m) return;
    try { materials.adopt(id, 512, await st.gpu.bake(m.graph, { size: 512, images: materials.imageMap(m.graph) })); } catch (e) { host.print(host.t('shading.gpu_failed')); }
  }, 400);
}

/** A picture's bytes into the model's pictures (kept with the file) and the bake's: → its key 'img:<id>'. */
async function addPictureBytes(name, mime, bytes) {
  const data = toBase64(bytes);
  const im = await decodeImage(mime, data);
  let r = 0, g = 0, b = 0;
  const n = im.w * im.h;
  for (let i = 0; i < n; i++) { r += im.data[i * 4]; g += im.data[i * 4 + 1]; b += im.data[i * 4 + 2]; }
  const hx = (x) => Math.round(x / n).toString(16).padStart(2, '0');
  const id = model.addImage({ name, mime, data, avg: '#' + hx(r) + hx(g) + hx(b) });
  materials.images.set('img:' + id, im);
  return 'img:' + id;
}

/** MT.3: a LibraryCraft material into the file (once per item version) → its id | null (the reason printed). */
export async function useLibraryMaterial(host, entry) {
  const { t } = host;
  try {
    const known = materials.findSource(entry.uuid, entry.version);
    if (known) { open(host, known); return known; }
    host.print(t('shading.lib.loading', { name: entry.name }));
    const { item, pictures } = await loadMaterial(entry);
    const keys = {};
    for (const [role, p] of Object.entries(pictures)) keys[role] = await addPictureBytes(p.file, p.media, p.bytes);
    const id = materials.create(item.name, graphFor(item, (role) => keys[role] || ''), sourceOf(item, entry));
    onEdit(); open(host, id);
    host.print(t('shading.lib.used', { name: item.name, credit: materials.get(id).source?.attribution || '' }));
    return id;
  } catch (e) {
    host.print(t('shading.lib.failed', { name: entry.name, why: t('shading.lib.why.' + (['sha256', 'too_big', 'not_material', 'bad_graph'].includes(e.code) ? e.code : 'fetch')) }));
    return null;
  }
}

/** A made picture (a map from photo-material.js) into the model's pictures and the bake's → its key 'img:<id>'. */
function addMadePicture(name, im, avg) {
  const data = toBase64(pngBytes(im.w, im.h, pictureRgb(im)));
  const id = model.addImage({ name, mime: 'image/png', data, avg });
  materials.images.set('img:' + id, im);
  return 'img:' + id;
}
/**
 * 0.8 EG.62: one photo (raw pixels from photo-material.js decodePhoto) → a tiling material: colour, roughness and a normal map worked
 * out from it, as a node material of the file (the Shading panel's button and the assistant's material_make both end here).
 * opts: name, size (metres the photo shows across = the tile), crop, flatten, seamless, roughness, bump (photo-material.js).
 * preview: true makes the maps and reports, adding nothing. → {id, name, paint ('mat:<id>'), size, maps, ...stats, notes}
 */
export function makeMaterialFromPhoto(photo, { name = '', size = 1, preview = false, ...opts } = {}) {
  if (!model) throw new Error('No model is open.');
  const tile = Math.min(100, Math.max(0.01, Number.isFinite(size) ? size : 1));
  const r = fromPhoto(photo, opts);
  const title = String(name || 'Photo material').slice(0, 80);
  if (preview) return { id: null, name: title, paint: null, size: tile, maps: ['color', 'roughness', 'normal'], ...r.stats, notes: r.notes };
  const keys = {
    color: addMadePicture(title + ' (color)', r.color, r.stats.meanColor),
    roughness: addMadePicture(title + ' (roughness)', r.roughness, '#808080'),
    normal: addMadePicture(title + ' (normal)', r.normal, '#8080ff'),
  };
  const graph = textureSetGraph({ color: 1, roughness: 1, normal: 1 }, { name: title, size: [tile, tile], convention: 'opengl', key: (role) => keys[role] });
  const id = materials.create(title, graph);
  onEdit();
  return { id, name: title, paint: 'mat:' + id, size: tile, maps: ['color', 'roughness', 'normal'], ...r.stats, notes: r.notes };
}
/** The Shading panel's "From a photo": a picture file → the material, opened. */
async function materialFromPhotoFile(host, file) {
  const { t } = host;
  if (!/^image\/(png|jpeg|webp)$/.test(file.type) || file.size > 32 * 1048576) { host.print(t('shading.photo.bad')); return null; }
  try {
    const photo = await decodePhoto(file.type, new Uint8Array(await file.arrayBuffer()));
    const name = file.name.replace(/\.[a-z0-9]+$/i, '').replace(/[_\-.]+/g, ' ').trim() || t('shading.photo.default_name');
    const r = makeMaterialFromPhoto(photo, { name, size: st.photo.size, roughness: st.photo.rough });
    open(host, r.id);
    host.print(t('shading.photo.done', { name: r.name, size: r.size, before: r.seam.before, after: r.seam.after }));
    return r.id;
  } catch (e) { host.print(t('shading.photo.bad')); return null; }
}

const PIC_MIME = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };
/** MT.3: pictures (and zips of pictures) → a material, the maps found by their names → its id | null. */
export async function importTextureSet(host, files, setName = '') {
  const { t } = host;
  const all = [];   // {name, bytes}
  for (const f of files) {
    const nm = String(f.webkitRelativePath || f.name || '');
    if (/\.zip$/i.test(nm)) {
      if (f.size > 256 * 1048576) { host.print(t('shading.import.too_big', { name: f.name })); continue; }
      try {
        const zip = openZip(new Uint8Array(await f.arrayBuffer()), 0), budget = { used: 0 };
        for (const e of zip.names) if (/\.(png|jpe?g|webp)$/i.test(e) && !/(^|\/)__MACOSX\//.test(e)) all.push({ name: e, bytes: await zip.read(e, budget) });
        setName = setName || nm.replace(/^.*\//, '').replace(/\.zip$/i, '');
      } catch (e) { host.print(t('shading.import.bad_zip', { name: f.name })); }
    } else if (/\.(png|jpe?g|webp)$/i.test(nm)) {
      if (f.size > 32 * 1048576) { host.print(t('shading.import.too_big', { name: f.name })); continue; }
      all.push({ name: nm, bytes: new Uint8Array(await f.arrayBuffer()) });
    }
  }
  const { maps, skipped, convention } = pickMaps(all.map((x) => x.name));
  if (!maps.color && !maps.roughness && !maps.normal && !maps.metalness && !maps.height) { host.print(t('shading.import.none')); return null; }
  if (!setName) {
    // the set's name: the words its files share before the map word (Brick_Wall_Color.png, Brick_Wall_Rough.png → Brick Wall)
    const bases = Object.values(maps).map((n) => n.split('/').pop().replace(/\.[a-z0-9]+$/i, ''));
    let pre = bases[0] || '';
    for (const b of bases) while (pre && !b.startsWith(pre)) pre = pre.slice(0, -1);
    setName = pre.replace(/[_\-. ]+$/, '').replace(/[_\-.]+/g, ' ').trim() || t('shading.import.default_name');
  }
  try {
    const keys = {};
    for (const [role, n] of Object.entries(maps)) {
      const x = all.find((y) => y.name === n), ext = n.split('.').pop().toLowerCase();
      keys[role] = await addPictureBytes(n.split('/').pop(), PIC_MIME[ext], x.bytes);
    }
    const graph = textureSetGraph(maps, { name: setName, size: [1, 1], convention, key: (role) => keys[role] });
    const id = materials.create(setName, graph);
    onEdit(); open(host, id);
    host.print(t('shading.import.done', { name: setName, maps: Object.keys(maps).map((r) => t('shading.map.' + r)).join(', '), n: skipped.length }));
    return id;
  } catch (e) { host.print(t('shading.picture.bad')); return null; }
}

/** Files → [{name (path), bytes}] with zips opened (their pictures and .mtlx files). */
async function expandFiles(host, files, keep) {
  const all = [];
  for (const f of files) {
    const nm = String(f.webkitRelativePath || f.name || '');
    if (/\.zip$/i.test(nm)) {
      if (f.size > 256 * 1048576) { host.print(host.t('shading.import.too_big', { name: f.name })); continue; }
      try {
        const zip = openZip(new Uint8Array(await f.arrayBuffer()), 0), budget = { used: 0 };
        for (const e of zip.names) if (keep.test(e) && !/(^|\/)__MACOSX\//.test(e)) all.push({ name: e, bytes: await zip.read(e, budget) });
      } catch (e) { host.print(host.t('shading.import.bad_zip', { name: f.name })); }
    } else if (keep.test(nm)) {
      if (f.size > 32 * 1048576) { host.print(host.t('shading.import.too_big', { name: f.name })); continue; }
      all.push({ name: nm, bytes: new Uint8Array(await f.arrayBuffer()) });
    }
  }
  return all;
}

/** MT.4: the material `id` as MaterialX: a .mtlx, or a zip of it and its PNG textures. */
export function exportMaterialX(host, id, flavor = 'open_pbr') {
  const m = materials.get(id);
  if (!m) return false;
  const { xml, files, notes } = writeMaterialX([{ name: m.graph.name || id, bake: materials.bake(id, 512) }], { flavor });
  const base = ident(m.graph.name || id), te = new TextEncoder();
  if (!files.length) host.download(te.encode(xml), base + '.mtlx', 'application/xml');
  else host.download(zipStored([{ name: base + '.mtlx', data: te.encode(xml) }, ...files]), base + '.zip', 'application/zip');
  host.print(host.t('shading.mx.exported', { file: base + (files.length ? '.zip' : '.mtlx'), n: files.length }) + (notes.some((x) => x.startsWith('mapping:')) ? ' ' + host.t('shading.mx.mapping_note') : ''));
  return true;
}

/** MT.4: MaterialX files (with their pictures, a zip, or a folder) → materials of the file; pictures found by path, name or stem. */
export async function importMaterialX(host, files) {
  const { t } = host;
  const all = await expandFiles(host, files, /\.(mtlx|png|jpe?g|webp)$/i);
  const docs = all.filter((x) => /\.mtlx$/i.test(x.name));
  if (!docs.length) { host.print(t('shading.mx.no_file')); return []; }
  const pics = all.filter((x) => /\.(png|jpe?g|webp)$/i.test(x.name));
  const norm = (p) => String(p).replace(/\\/g, '/').replace(/^(\.\/)+/, '').toLowerCase();
  const stem = (p) => norm(p).split('/').pop().replace(/\.[a-z0-9]+$/i, '');
  const rank = (n) => (/\.png$/i.test(n) ? 0 : /\.jpe?g$/i.test(n) ? 1 : 2);
  const made = [];
  for (const doc of docs) {
    const dir = norm(doc.name).replace(/[^/]*$/, '');
    const want = [];
    let r;
    try {
      r = readMaterialX(new TextDecoder().decode(doc.bytes), {
        resolve: (file) => {
          const p = norm(file), full = norm(dir + p);
          const hit = pics.find((x) => norm(x.name) === full) || pics.find((x) => norm(x.name) === p) || pics.find((x) => norm(x.name).split('/').pop() === p.split('/').pop())
            || pics.filter((x) => stem(x.name) === stem(p)).sort((a, b) => rank(a.name) - rank(b.name))[0];
          if (!hit) return null;
          let k = want.indexOf(hit);
          if (k < 0) { want.push(hit); k = want.length - 1; }
          return 'mx:' + k;
        },
      });
    } catch (e) { host.print(t('shading.mx.bad', { file: doc.name.split('/').pop() })); continue; }
    if (!r.materials.length) { host.print(t('shading.mx.none', { file: doc.name.split('/').pop() })); continue; }
    try {
      const keys = [];
      for (const w of want) { const ext = w.name.split('.').pop().toLowerCase(); keys.push(await addPictureBytes(w.name.split('/').pop(), PIC_MIME[ext], w.bytes)); }
      for (const m of r.materials) {
        for (const n of m.graph.nodes) for (const k of ['image', 'curvature', 'occlusion']) if (typeof n.params[k] === 'string' && n.params[k].startsWith('mx:')) n.params[k] = keys[Number(n.params[k].slice(3))] || '';
        made.push(materials.create(m.name, m.graph));
        const left = m.notes.map((x) => { const [k, v] = [x.slice(0, x.indexOf(':')), x.slice(x.indexOf(':') + 1)]; return t('shading.mx.note.' + (['file', 'node', 'approx'].includes(k) ? k : 'other'), { what: v }); });
        if (left.length) host.print(t('shading.mx.left_out', { name: m.name, what: left.join(', ') }));
      }
    } catch (e) { host.print(t('shading.picture.bad')); }
    host.print(t('shading.mx.imported', { n: r.materials.length, file: doc.name.split('/').pop() }));
  }
  if (made.length) { onEdit(); open(host, made[0]); }
  return made;
}

/** The library section of the panel: LibraryCraft's materials, loaded the first time it is opened. */
function libraryPanel(host, box) {
  const { t, el } = host;
  const grid = el('div', { className: 'mc-libmats', dataset: { shadingLibGrid: '' } });
  const det = el('details', { className: 'mc-shading-lib', dataset: { shadingLibrary: '' } }, el('summary', {}, t('shading.lib.h')), grid);
  det.open = st.lib.open;
  const fill = () => {
    grid.replaceChildren();
    if (st.lib.state === 'loading') grid.append(el('p', { className: 'mc-note' }, t('shading.lib.loading_list')));
    else if (st.lib.state === 'error') grid.append(el('p', { className: 'mc-note' }, t('shading.lib.unreachable')));
    else if (!st.lib.items.length) grid.append(el('p', { className: 'mc-note' }, t('shading.lib.empty')));
    for (const it of st.lib.items) {
      const b = el('button', { type: 'button', className: 'mc-libmat', draggable: 'true', title: t('shading.lib.card', { name: it.name }), dataset: { shadingLibItem: it.uuid } },
        it.preview_url ? el('img', { src: it.preview_url, alt: '', width: '64', height: '64', loading: 'lazy' }) : el('span', { className: 'mc-libmat-none', 'aria-hidden': 'true' }),
        el('span', {}, it.name));
      b.addEventListener('click', async () => { const id = await useLibraryMaterial(host, it); if (id && host.sel.some((x) => x.t === 'f' || x.t === 'i')) host.choosePaint?.('mat:' + id, materials.get(id).graph.name); });
      b.addEventListener('dragstart', (e) => { e.dataTransfer.setData(DRAG_TYPE, it.uuid); e.dataTransfer.setData('text/plain', it.name); e.dataTransfer.effectAllowed = 'copy'; });
      grid.append(b);
    }
  };
  det.addEventListener('toggle', () => {
    st.lib.open = det.open;
    if (det.open && st.lib.state === 'idle') {
      st.lib.state = 'loading'; fill();
      listMaterials().then((items) => { st.lib.items = items; st.lib.state = 'ready'; fill(); }).catch(() => { st.lib.state = 'error'; fill(); });
    }
  });
  fill();
  box.append(det);
  // import a texture set: pictures or a zip, or a folder
  const files = el('input', { type: 'file', multiple: true, accept: 'image/png,image/jpeg,image/webp,.zip,application/zip', hidden: true, dataset: { shadingImportFiles: '' } });
  const folder = el('input', { type: 'file', multiple: true, webkitdirectory: '', hidden: true, dataset: { shadingImportFolder: '' } });
  files.addEventListener('change', () => { const fs = [...(files.files || [])]; files.value = ''; if (fs.length) importTextureSet(host, fs); });
  folder.addEventListener('change', () => { const fs = [...(folder.files || [])]; folder.value = ''; if (fs.length) importTextureSet(host, fs, (fs[0].webkitRelativePath || '').split('/')[0] || ''); });
  box.append(el('h3', { className: 'mc-h' }, t('shading.import.h')),
    el('div', { className: 'mc-shading-acts' }, files, folder,
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingImport: '' }, onclick: () => files.click() }, t('shading.import.files')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingImportDir: '' }, onclick: () => folder.click() }, t('shading.import.folder'))),
    el('p', { className: 'mc-note' }, t('shading.import.how')));
  // 0.8 EG.62: a material from one photo
  const photoFile = el('input', { type: 'file', accept: 'image/png,image/jpeg,image/webp', hidden: true, dataset: { shadingPhotoFile: '' } });
  photoFile.addEventListener('change', () => { const f = photoFile.files && photoFile.files[0]; photoFile.value = ''; if (f) materialFromPhotoFile(host, f); });
  const photoSize = el('input', { type: 'number', className: 'mc-input', id: 'mc-shading-photo-size', min: '0.01', max: '100', step: 'any', value: String(st.photo.size), dataset: { shadingPhotoSize: '' } });
  photoSize.addEventListener('change', () => { const v = parseFloat(photoSize.value); st.photo.size = Number.isFinite(v) && v > 0 ? Math.min(100, v) : 1; photoSize.value = String(st.photo.size); });
  const photoRough = el('input', { type: 'range', min: '0', max: '1', step: '0.05', value: String(st.photo.rough), id: 'mc-shading-photo-rough', dataset: { shadingPhotoRough: '' } });
  photoRough.addEventListener('input', () => { st.photo.rough = parseFloat(photoRough.value); });
  box.append(el('h3', { className: 'mc-h' }, t('shading.photo.h')),
    el('label', { for: 'mc-shading-photo-size' }, t('shading.photo.size')), photoSize,
    el('label', { for: 'mc-shading-photo-rough' }, t('shading.photo.rough')), photoRough,
    el('div', { className: 'mc-shading-acts' }, photoFile,
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingPhoto: '' }, onclick: () => photoFile.click() }, t('shading.photo.pick'))),
    el('p', { className: 'mc-note' }, t('shading.photo.how')));
  // MT.4: MaterialX
  const mxFiles = el('input', { type: 'file', multiple: true, accept: '.mtlx,.zip,image/png,image/jpeg,image/webp,application/zip', hidden: true, dataset: { shadingMxFiles: '' } });
  const mxFolder = el('input', { type: 'file', multiple: true, webkitdirectory: '', hidden: true, dataset: { shadingMxFolder: '' } });
  mxFiles.addEventListener('change', () => { const fs = [...(mxFiles.files || [])]; mxFiles.value = ''; if (fs.length) importMaterialX(host, fs); });
  mxFolder.addEventListener('change', () => { const fs = [...(mxFolder.files || [])]; mxFolder.value = ''; if (fs.length) importMaterialX(host, fs); });
  const flavor = el('select', { className: 'mc-select', id: 'mc-shading-mx-flavor', dataset: { shadingMxFlavor: '' } },
    el('option', { value: 'open_pbr' }, t('shading.mx.open_pbr')), el('option', { value: 'standard_surface' }, t('shading.mx.standard_surface')));
  flavor.value = st.mxFlavor || 'open_pbr';
  flavor.addEventListener('change', () => { st.mxFlavor = flavor.value; });
  box.append(el('h3', { className: 'mc-h' }, t('shading.mx.h')),
    el('label', { for: 'mc-shading-mx-flavor' }, t('shading.mx.flavor')), flavor,
    el('div', { className: 'mc-shading-acts' }, mxFiles, mxFolder,
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', disabled: !st.id, dataset: { shadingMxExport: '' }, onclick: () => exportMaterialX(host, st.id, flavor.value) }, t('shading.mx.export')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingMxImport: '' }, onclick: () => mxFiles.click() }, t('shading.mx.import')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingMxImportDir: '' }, onclick: () => mxFolder.click() }, t('shading.mx.import_folder'))),
    el('p', { className: 'mc-note' }, t('shading.mx.how')));
}

/** A picture from the computer into the model's pictures (kept with the file) and a new Picture node that reads it. */
async function addPicture(host, file) {
  const { t } = host;
  if (!/^image\/(png|jpeg|webp)$/.test(file.type) || file.size > 16 * 1048576) { host.print(t('shading.picture.bad')); return; }
  try {
    const data = toBase64(new Uint8Array(await file.arrayBuffer()));
    const im = await decodeImage(file.type, data);
    let r = 0, g = 0, b = 0;
    const n = im.w * im.h;
    for (let i = 0; i < n; i++) { r += im.data[i * 4]; g += im.data[i * 4 + 1]; b += im.data[i * 4 + 2]; }
    const hx = (x) => Math.round(x / n).toString(16).padStart(2, '0');
    const id = model.addImage({ name: file.name, mime: file.type, data, avg: '#' + hx(r) + hx(g) + hx(b) });
    materials.images.set('img:' + id, im);
    st.editor?.addNode('image', null, { image: 'img:' + id });
    host.print(t('shading.picture.added', { name: file.name }));
  } catch (e) { host.print(t('shading.picture.bad')); }
}

/** A library material as a node graph: its texture through a Library node, its look's numbers on the output. */
export function libraryGraph(id, t) {
  const m = libMat(id), g = newGraph(t('render.mat.' + id));
  const out = outputNode(g);
  Object.assign(out.values, { base_color: m.color, specular_roughness: m.rough, base_metalness: m.metal, transmission_weight: m.glass || 0 });
  if (m.glass > 0) { out.values.transmission_color = m.color; out.params.thin_walled = true; }
  if (m.tex) {
    out.params.width = m.tex.size?.[0] || 1; out.params.height = m.tex.size?.[1] || 1;
    out.x = 560;
    g.nodes.push({ id: 2, type: 'library', x: 40, y: 40, values: defaultValues('library'), params: { ...defaultParams('library'), material: id } });
    g.nodes.push({ id: 3, type: 'bump', x: 300, y: 260, values: defaultValues('bump'), params: { ...defaultParams('bump'), distance: 0.004 * (m.bump || 0.6) } });
    g.links.push({ from: [2, 'color'], to: [1, 'base_color'] }, { from: [2, 'roughness'], to: [1, 'specular_roughness'] }, { from: [2, 'height'], to: [3, 'height'] }, { from: [3, 'normal'], to: [1, 'normal'] });
  }
  return g;
}

async function command(name, host) {
  const { t } = host;
  switch (name) {
    case 'done': host.setWorkspace('model'); return true;
    case 'new': {
      const id = materials.create(t('shading.new_name', { n: materials.size + 1 }));
      onEdit(); open(host, id); host.print(t('shading.made', { name: materials.get(id).graph.name }));
      return true;
    }
    case 'duplicate': {
      if (!st.id) return false;
      const id = materials.duplicate(st.id);
      materials.rename(id, t('shading.copy_name', { name: materials.get(st.id).graph.name }));
      onEdit(); open(host, id);
      return true;
    }
    case 'delete': {
      if (!st.id) return false;
      const name = materials.get(st.id).graph.name;
      const k = await host.ask({ title: t('shading.delete.h'), text: t('shading.delete.text', { name }), buttons: [['cancel', t('app.btn.cancel'), 'btn-line'], ['delete', t('shading.delete.ok'), 'btn-plot']] });
      if (k !== 'delete') return false;
      materials.remove(st.id);
      onEdit(); open(host, materials.list()[0]?.id || null);
      host.print(t('shading.deleted', { name }));
      return true;
    }
    case 'paint': {
      if (!st.id) return false;
      host.choosePaint?.('mat:' + st.id, materials.get(st.id).graph.name);
      return true;
    }
    case 'add': st.editor?.add.focus(); st.editor?.add.showPicker?.(); return true;
    case 'decal': {
      if (host.tools.name === 'shadingdecal') { host.tools.set('select'); host.renderPanel(); return true; }
      st.decalInput?.click();
      return true;
    }
    case 'texpaint': {
      host.tools.set(host.tools.name === 'shadingpaint' ? 'select' : 'shadingpaint');
      host.renderPanel();
      return true;
    }
    case 'frame': st.editor?.frame(); return true;
    default: return false;
  }
}

/** The panel: the file's materials, the one being edited, a copy of a library material, what the path tracer averages. */
function panel(host, box) {
  const { t, el } = host;
  const list = el('div', { className: 'mc-shading-list', role: 'radiogroup', 'aria-label': t('shading.panel.mine'), dataset: { shadingList: '' } });
  for (const m of materials.list()) {
    const sw = el('span', { className: 'mc-swatch is-mat', 'aria-hidden': 'true' });
    const e = libMat(m.id);
    if (e) {
      sw.style.background = e.color;
      const px = swatchPixels(m.id, 24);
      if (px) { const c = document.createElement('canvas'); c.width = px.w; c.height = px.h; c.getContext('2d').putImageData(new ImageData(px.data, px.w, px.h), 0, 0); sw.style.backgroundImage = 'url(' + c.toDataURL() + ')'; }
    }
    list.append(el('button', { type: 'button', role: 'radio', 'aria-checked': String(m.id === st.id), className: 'mc-shading-item' + (m.id === st.id ? ' is-on' : ''), dataset: { shadingMat: m.id }, onclick: () => open(host, m.id) }, sw, el('span', {}, m.graph.name || m.id)));
  }
  box.append(el('h3', { className: 'mc-h' }, t('shading.panel.mine')), materials.size ? list : el('p', { className: 'mc-note' }, t('shading.panel.none')));
  if (st.id) {
    const m = materials.get(st.id);
    const nm = el('input', { type: 'text', className: 'mc-input', id: 'mc-shading-name', value: m.graph.name, maxlength: '80', spellcheck: false, dataset: { shadingName: '' } });
    nm.addEventListener('change', () => { const v = nm.value.trim(); if (!v) { nm.value = m.graph.name; return; } materials.rename(st.id, v); onEdit(); host.renderPanel(); });
    box.append(el('label', { for: 'mc-shading-name' }, t('shading.panel.name')), nm);
    const pic = el('input', { type: 'file', accept: 'image/png,image/jpeg,image/webp', hidden: true, dataset: { shadingPictureFile: '' } });
    pic.addEventListener('change', () => { const f = pic.files && pic.files[0]; pic.value = ''; if (f) addPicture(host, f); });
    box.append(el('div', { className: 'mc-shading-acts' }, pic, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingPicture: '' }, onclick: () => pic.click() }, t('shading.panel.picture'))));
    const b = materials.bake(st.id, 64);
    if (b.notes.length) box.append(el('p', { className: 'mc-note', dataset: { shadingAveraged: '' } }, t('shading.panel.averaged', { inputs: b.notes.map((x) => t('shading.in.' + x)).join(', ') })));
    if (b.height) box.append(el('p', { className: 'mc-note' }, t('shading.panel.displacement')));
    if (m.source) box.append(el('p', { className: 'mc-note', dataset: { shadingCredit: '' } }, t('shading.panel.credit', { credit: m.source.attribution || m.source.license })));
    box.append(el('p', { className: 'mc-note' }, t('shading.panel.tile', { w: String(b.size[0]), h: String(b.size[1]), mapping: t('shading.opt.' + ['uv', 'box', 'triplanar'][b.mapping]) })));
  }
  // an editable copy of a library material
  const sel = el('select', { className: 'mc-select', id: 'mc-shading-lib', dataset: { shadingLib: '' } }, el('option', { value: '' }, t('shading.panel.copy_choose')));
  for (const c of MAT_CATS) {
    const ms = MATERIALS.filter((m) => m.cat === c);
    if (ms.length) sel.append(el('optgroup', { label: t('render.matcat.' + c) }, ms.map((m) => el('option', { value: m.id }, t('render.mat.' + m.id)))));
  }
  sel.addEventListener('change', () => {
    if (!sel.value) return;
    const id = materials.create(t('render.mat.' + sel.value), libraryGraph(sel.value, t));
    onEdit(); open(host, id); host.print(t('shading.copied', { name: t('render.mat.' + sel.value) }));
  });
  box.append(el('label', { for: 'mc-shading-lib' }, t('shading.panel.copy')), sel);
  libraryPanel(host, box);
  decalPanel(host, box);
  paintPanel(host, box);
  bakePanel(host, box);
  box.append(el('p', { className: 'mc-note' }, t('shading.panel.how')));
  return t('app.ws.shading');
}

// ---------------------------------------------------------------------------------------------------------------------------
// MT.6: decals and texture painting

/** What lies under screen point ev: the face, its placement path, the point and normal in its definition's coordinates, its paint,
 *  and where on its material's tile it is (tile units: a mesh's UVs, else metres along the face ÷ the tile) | null. */
export function surfaceAt(h, ev) {
  const hit = h.scene().hit(h.cam.ray(ev.x, ev.y));
  if (!hit) return null;
  const path = hit.f.path, ctx = h.model.context(path);
  if (!ctx) return null;
  const def = ctx.def, inv = invert(ctx.m), pL = apply(inv, hit.p);
  const [a, b, c] = hit.f.tris[0].map((q) => apply(inv, q)), nL = norm(cross(sub(b, a), sub(c, a)));
  // the placement's paint: the innermost placement that has one (as the renderers walk them)
  let paint = null, d = h.model.root;
  for (const iid of path) { const inst = d.insts.get(iid); if (!inst) break; if (inst.color) paint = inst.color; d = h.model.def(inst.def); }
  let face = null, uv = null;
  if (def.mesh) {
    // the shown mesh's triangle holding the point: its corners' UVs, weighted
    const M = def.shown || def.mesh, T = M.triangulate(), P = M.P, hV = M.hV, uvA = M.attrArray('uv');
    let best = null;
    for (let i = 0; i < T.n; i++) {
      const q = [0, 1, 2].map((k) => { const v = hV[T.tri[i * 3 + k]] * 3; return [P[v], P[v + 1], P[v + 2]]; });
      const w = bary(pL, q[0], q[1], q[2]);
      if (!w || w.dist > (best ? best.dist : 1e-3) || Math.min(w.a, w.b, w.c) < -1e-4) continue;
      best = { i, ...w };
    }
    if (best) {
      face = M.facePaint(T.face[best.i]);
      if (uvA) { const hs = [0, 1, 2].map((k) => T.tri[best.i * 3 + k]); uv = [0, 1].map((j) => best.a * uvA[hs[0] * 2 + j] + best.b * uvA[hs[1] * 2 + j] + best.c * uvA[hs[2] * 2 + j]); }
    }
  } else {
    face = def.faces.get(hit.f.id)?.color || null;
  }
  const p = face || paint, mid = isMaterialPaint(p) ? p.slice(4) : null;
  const m = mid && materials.has(mid) ? libMat(mid) : null;
  let tuv = null;
  if (m) {
    if (def.mesh) tuv = uv;
    else { const w = planarUV(pL, nL); tuv = [w[0] / m.size[0], w[1] / m.size[1]]; }
  }
  return { hit, path, def, pL, nL, paint: p, material: m ? mid : null, tuv };
}
function bary(p, a, b, c) {
  const ab = sub(b, a), ac = sub(c, a), n = cross(ab, ac), nn = n[0] * n[0] + n[1] * n[1] + n[2] * n[2];
  if (!(nn > 1e-20)) return null;
  const ap = sub(p, a), dist = Math.abs(ap[0] * n[0] + ap[1] * n[1] + ap[2] * n[2]) / Math.sqrt(nn);
  const cb = cross(ap, ac), cc = cross(ab, ap);
  const bw = (cb[0] * n[0] + cb[1] * n[1] + cb[2] * n[2]) / nn, cw = (cc[0] * n[0] + cc[1] * n[1] + cc[2] * n[2]) / nn;
  return { a: 1 - bw - cw, b: bw, c: cw, dist };
}

/** A blank picture's bytes into the model's pictures: a new picture each time (the kernel keeps one copy of equal pictures). */
async function addBlankPicture(name, hex) {
  const im = blankPicture(hex);
  for (let k = 0; k < 64; k++) {
    const data = toBase64(pngBytes(IMG_SIZE, IMG_SIZE, pictureRgb(im)));
    if (![...model.images.values()].some((x) => x.data === data)) {
      const id = model.addImage({ name, mime: 'image/png', data, avg: hex });
      materials.images.set('img:' + id, im);
      return 'img:' + id;
    }
    im.data[0] = (im.data[0] + 1) % 256;   // an identical blank picture is already in the file: one corner texel differs
  }
  return null;
}

/** The picture texture painting paints for material `id`: the Picture node feeding its base colour; one is made (blank, in the
 *  material's colour) when the base colour is a plain value. → {key} | {why} */
async function paintTarget(host, id) {
  const m = materials.get(id), g = m.graph, out = outputNode(g);
  if ((out.params.mapping || 'uv') !== 'uv') return { why: 'mapping' };
  const link = g.links.find((l) => l.to[0] === out.id && l.to[1] === 'base_color');
  if (link) {
    const n = g.nodes.find((x) => x.id === link.from[0]);
    if (n && n.type === 'image' && String(n.params.image).startsWith('img:')) return { key: n.params.image };
    return { why: 'nodes' };
  }
  const v = out.values.base_color, hex = typeof v === 'string' ? v : '#ffffff';
  const key = await addBlankPicture(host.t('shading.tp.picture_name', { name: g.name || id }), hex);
  if (!key) return { why: 'nodes' };
  const ng = JSON.parse(JSON.stringify(g)), nid = ng.nodes.reduce((a, x) => Math.max(a, x.id), 0) + 1, o = outputNode(ng);
  ng.nodes.push({ id: nid, type: 'image', x: o.x - 280, y: o.y, values: defaultValues('image'), params: { ...defaultParams('image'), image: key } });
  ng.links.push({ from: [nid, 'color'], to: [o.id, 'base_color'] });
  materials.setGraph(id, ng);
  if (st.id === id && st.editor) st.editor.setGraph(materials.get(id).graph);
  onEdit();
  host.print(host.t('shading.tp.made_picture', { name: g.name || id }));
  return { key };
}

/** A painted picture back into the model's pictures (PNG), so the file keeps it. */
function savePicture(key) {
  const im = materials.images.get(key), rec = model?.images.get(key.slice(4));
  if (!im || !rec) return;
  let r = 0, g = 0, b = 0;
  const n = im.w * im.h;
  for (let i = 0; i < n; i++) { r += im.data[i * 4]; g += im.data[i * 4 + 1]; b += im.data[i * 4 + 2]; }
  const hx = (x) => Math.round(x / n).toString(16).padStart(2, '0');
  rec.data = toBase64(pngBytes(im.w, im.h, pictureRgb(im)));
  rec.mime = 'image/png';
  rec.avg = '#' + hx(r) + hx(g) + hx(b);
  onEdit();
}

function undoStroke(host) {
  const s = st.strokes.pop();
  if (!s) { host.print(host.t('shading.tp.nothing_to_undo')); return true; }
  const im = materials.images.get(s.key);
  if (im) { restore(im, s.snap); materials.touchImage(s.key); savePicture(s.key); }
  host.print(host.t('shading.tp.undone'));
  host.view.invalidate(); host.renderPanel();
  return true;
}

class TexturePaintTool extends Tool {
  get hint() { return st.host ? st.host.t('shading.tp.hint') : ''; }
  down(ev) {
    this.pressed = true;
    const s = surfaceAt(this.h, ev);
    if (!s) return;
    this.begin(s);
  }
  async begin(s) {
    const host = st.host, t = host.t;
    if (!s.material) { host.print(t(isMaterialPaint(s.paint) ? 'shading.tp.why.library' : 'shading.tp.why.no_material')); this.pressed = false; return; }
    if (!s.tuv) { host.print(t('shading.tp.why.no_uv')); this.pressed = false; return; }
    this.starting = true;
    const r = await paintTarget(host, s.material);
    this.starting = false;
    if (!r.key) { host.print(t('shading.tp.why.' + r.why)); this.pressed = false; return; }
    if (!materials.images.get(r.key)) await materials.prepare(s.material);
    const im = materials.images.get(r.key);
    if (!im) { host.print(t('shading.picture.bad')); this.pressed = false; return; }
    st.strokes.push({ key: r.key, snap: snapshot(im) });
    if (st.strokes.length > 20) st.strokes.shift();
    this.stroke = { key: r.key, im, material: s.material, last: s.tuv };
    stamp(im, s.tuv[0], s.tuv[1], st.brush);
    this.refresh(false);
    if (!this.pressed) this.end();
  }
  move(ev) {
    this.h.overlay({ brush: { x: ev.x, y: ev.y, r: 10, off: false, invert: false } });
    if (!this.stroke || this.starting) return;
    const s = surfaceAt(this.h, ev);
    if (!s || s.material !== this.stroke.material || !s.tuv) return;
    for (const q of strokeDabs(this.stroke.last, s.tuv, (st.brush.radius / IMG_SIZE) * 0.35)) stamp(this.stroke.im, q[0], q[1], st.brush);
    this.stroke.last = s.tuv;
    this.refresh(false);
  }
  up() { this.pressed = false; if (this.stroke) this.end(); }
  end() { const k = this.stroke.key; this.stroke = null; this.refresh(true); savePicture(k); st.host?.renderPanel(); }
  /** What reads the picture bakes again — at most every 120 ms while the stroke goes on. */
  refresh(now) {
    const key = this.stroke?.key || this.lastKey;
    this.lastKey = key;
    clearTimeout(this.timer);
    const go = () => { this.timer = 0; this.lastRefresh = Date.now(); if (materials.touchImage(key)) st.host?.view.invalidate(); };
    if (now || !this.lastRefresh || Date.now() - this.lastRefresh > 120) go(); else this.timer = setTimeout(go, 120);
  }
  cancel() { if (this.stroke) this.end(); this.h.overlay(null); }
}
registerTool('shadingpaint', TexturePaintTool);

class DecalTool extends Tool {
  constructor(T, name, arg = {}) { super(T, name); this.arg = arg; }
  get hint() { return st.host ? st.host.t('shading.decal.hint') : ''; }
  down(ev) {
    const host = st.host, t = host.t, s = surfaceAt(this.h, ev);
    if (!s) { host.print(t('shading.decal.miss')); return; }
    const a = this.arg, id = materials.addDecal(makeDecal({ p: s.pL, n: s.nL, size: a.size, path: s.path, material: a.material, name: a.name }));
    if (!id) { host.print(t('shading.decal.full')); return; }
    onEdit();
    host.print(t('shading.decal.placed', { name: a.name }));
    this.T.set('select');
    host.renderPanel();
  }
}
registerTool('shadingdecal', DecalTool);

/** MT.6: a picture → its own decal material, then the decal tool places it where the next click lands. */
export async function placeDecal(host, file) {
  const { t } = host;
  if (!/^image\/(png|jpeg|webp)$/.test(file.type) || file.size > 16 * 1048576) { host.print(t('shading.picture.bad')); return null; }
  try {
    const bytes = new Uint8Array(await file.arrayBuffer());
    let aspect = 1;
    try { const bmp = await createImageBitmap(new Blob([bytes], { type: file.type })); aspect = bmp.height / bmp.width || 1; bmp.close?.(); } catch (e) { /* square */ }
    const key = await addPictureBytes(file.name, file.type, bytes);
    const name = file.name.replace(/\.[a-z0-9]+$/i, '').slice(0, 60) || t('shading.decal.default_name');
    const size = [st.decal.width, Math.round(st.decal.width * aspect * 1000) / 1000];
    const id = materials.create(t('shading.decal.material_name', { name }), decalGraph(name, key, size));
    onEdit();
    host.tools.set('shadingdecal', { material: id, size, name });
    host.tip(t('shading.decal.hint'));
    host.print(t('shading.decal.click', { name }));
    host.renderPanel();
    return id;
  } catch (e) { host.print(t('shading.picture.bad')); return null; }
}

/** Turn a decal a quarter turn about its normal; resize it (its material's tile follows). */
function turnDecal(id) {
  const d = materials.decal(id);
  if (!d) return;
  materials.updateDecal(id, { u: cross(d.n, d.u), size: [d.size[1], d.size[0]] });
  syncDecalTile(id);
}
function resizeDecal(id, w) {
  const d = materials.decal(id);
  if (!d || !(w > 0)) return;
  const h = Math.round((w * d.size[1]) / d.size[0] * 1000) / 1000;
  materials.updateDecal(id, { size: [w, h], depth: Math.max(0.01, Math.min(w, h) / 2) });
  syncDecalTile(id);
}
function syncDecalTile(id) {
  const d = materials.decal(id), m = d && materials.get(d.material);
  if (!m) return;
  const g = JSON.parse(JSON.stringify(m.graph)), o = outputNode(g);
  o.params.width = d.size[0]; o.params.height = d.size[1];
  materials.setGraph(d.material, g);
  onEdit();
}

function decalPanel(host, box) {
  const { t, el } = host;
  const file = el('input', { type: 'file', accept: 'image/png,image/jpeg,image/webp', hidden: true, dataset: { shadingDecalFile: '' } });
  file.addEventListener('change', () => { const f = file.files && file.files[0]; file.value = ''; if (f) placeDecal(host, f); });
  st.decalInput = file;
  const w = el('input', { type: 'number', className: 'mc-input', id: 'mc-shading-decal-w', min: '0.01', max: '100', step: '0.05', value: String(st.decal.width), dataset: { shadingDecalWidth: '' } });
  w.addEventListener('change', () => { const v = Number(w.value); if (v > 0 && v <= 100) st.decal.width = v; else w.value = String(st.decal.width); });
  box.append(el('h3', { className: 'mc-h' }, t('shading.decal.h')),
    el('label', { for: 'mc-shading-decal-w' }, t('shading.decal.width')), w,
    el('div', { className: 'mc-shading-acts' }, file, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingDecalPlace: '' }, onclick: () => file.click() }, t('shading.decal.place'))));
  const list = materials.decalList();
  if (!list.length) { box.append(el('p', { className: 'mc-note' }, t('shading.decal.none'))); return; }
  for (const d of list) {
    const sz = el('input', { type: 'number', className: 'mc-input mc-decal-w', min: '0.01', max: '100', step: '0.05', value: String(d.size[0]), 'aria-label': t('shading.decal.width_of', { name: d.name }), dataset: { shadingDecalSize: d.id } });
    sz.addEventListener('change', () => { const v = Number(sz.value); if (v > 0 && v <= 100) { resizeDecal(d.id, v); host.renderPanel(); } else sz.value = String(d.size[0]); });
    box.append(el('div', { className: 'mc-decal', dataset: { shadingDecal: d.id } },
      el('span', { className: 'mc-decal-name' }, d.name || d.id), sz,
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('shading.decal.turn'), dataset: { shadingDecalTurn: d.id }, onclick: () => { turnDecal(d.id); host.renderPanel(); } }, t('shading.decal.turn_short')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingDecalEdit: d.id }, onclick: () => open(host, d.material) }, t('shading.decal.edit')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingDecalDelete: d.id }, onclick: () => { materials.removeDecal(d.id); onEdit(); host.print(t('shading.decal.deleted', { name: d.name })); host.renderPanel(); } }, t('shading.decal.delete'))));
  }
}

function paintPanel(host, box) {
  const { t, el } = host;
  const on = host.tools?.name === 'shadingpaint';
  const field = (id, key, input) => [el('label', { for: id }, t(key)), input];
  const col = el('input', { type: 'color', id: 'mc-shading-tp-color', value: st.brush.color, dataset: { shadingTpColor: '' } });
  col.addEventListener('input', () => { st.brush.color = col.value.toLowerCase(); });
  const range = (id, k, min, max, step) => {
    const r = el('input', { type: 'range', id, min: String(min), max: String(max), step: String(step), value: String(st.brush[k]), dataset: { shadingTp: k } });
    r.addEventListener('input', () => { st.brush[k] = Number(r.value); });
    return r;
  };
  box.append(el('h3', { className: 'mc-h' }, t('shading.tp.h')),
    el('div', { className: 'mc-shading-acts' },
      el('button', { type: 'button', className: on ? 'btn-plot btn-sm-cc' : 'btn-line btn-sm-cc', 'aria-pressed': String(on), dataset: { shadingTpToggle: '' }, onclick: () => command('texpaint', host) }, t(on ? 'shading.tp.stop' : 'shading.tp.start')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', disabled: !st.strokes.length, dataset: { shadingTpUndo: '' }, onclick: () => undoStroke(host) }, t('shading.tp.undo'))),
    ...field('mc-shading-tp-color', 'shading.tp.color', col),
    ...field('mc-shading-tp-radius', 'shading.tp.radius', range('mc-shading-tp-radius', 'radius', 1, 64, 1)),
    ...field('mc-shading-tp-strength', 'shading.tp.strength', range('mc-shading-tp-strength', 'strength', 0.05, 1, 0.05)),
    ...field('mc-shading-tp-hardness', 'shading.tp.hardness', range('mc-shading-tp-hardness', 'hardness', 0, 1, 0.05)),
    el('p', { className: 'mc-note' }, t('shading.tp.how')));
}

// ---------------------------------------------------------------------------------------------------------------------------
// MT.5: texture baking

/** A placement's surface in world coordinates: {pos, nrm, uv (null without UVs), tris} — a mesh renders `def.rendered`. */
export function surfaceOf(mdl, path) {
  const ctx = mdl.context(path);
  if (!ctx) return null;
  const def = ctx.def, m = ctx.m, pos = [], nrm = [], uv = [];
  if (def.mesh) {
    const R = def.rendered, T = R.triangulate(), P = R.P, hV = R.hV, CN = R.cornerNormals(), U = R.attrArray('uv');
    for (let i = 0; i < T.n; i++) for (let q = 0; q < 3; q++) {
      const h = T.tri[i * 3 + q], v = hV[h] * 3, w = apply(m, [P[v], P[v + 1], P[v + 2]]), n = norm(applyDir(m, [CN[h * 3], CN[h * 3 + 1], CN[h * 3 + 2]]));
      pos.push(...w); nrm.push(...n);
      if (U) uv.push(U[h * 2], U[h * 2 + 1]);
    }
    return { pos: new Float64Array(pos), nrm: new Float64Array(nrm), uv: U ? new Float64Array(uv) : null, mesh: true };
  }
  const t = defTriangles(def);
  for (let i = 0; i < t.length; i += 9) {
    const a = apply(m, [t[i], t[i + 1], t[i + 2]]), b = apply(m, [t[i + 3], t[i + 4], t[i + 5]]), c = apply(m, [t[i + 6], t[i + 7], t[i + 8]]), n = norm(cross(sub(b, a), sub(c, a)));
    pos.push(...a, ...b, ...c); nrm.push(...n, ...n, ...n);
  }
  return { pos: new Float64Array(pos), nrm: new Float64Array(nrm), uv: null, mesh: false };
}
/** Everything shown, in world coordinates (what darkens AO and casts shadows). */
function sceneTriangles(mdl) {
  const parts = [];
  let n = 0;
  mdl.walkShown((def, m) => { const t = defTriangles(def), w = new Float64Array(t.length); for (let i = 0; i < t.length; i += 3) { const p = apply(m, [t[i], t[i + 1], t[i + 2]]); w[i] = p[0]; w[i + 1] = p[1]; w[i + 2] = p[2]; } parts.push(w); n += w.length; });
  const out = new Float64Array(n);
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}
/** The selection for a bake: the low object (a mesh with UVs) and, when two are selected, the high one (more triangles). */
function bakeTargets(host) {
  const paths = host.sel.filter((x) => x.t === 'i').map((x) => [...host.path, x.id]);
  if (!paths.length || paths.length > 2) return { why: 'select' };
  const S = paths.map((p) => ({ path: p, s: surfaceOf(host.model, p), name: host.model.context(p)?.def.name || '' }));
  if (S.some((x) => !x.s)) return { why: 'select' };
  S.sort((a, b) => a.s.pos.length - b.s.pos.length);
  const low = S[0];
  if (!low.s.mesh) return { why: 'not_mesh' };
  if (!low.s.uv) return { why: 'no_uv' };
  return { low, high: S[1] || null };
}

/** The sun of the model's place and date (Style › sun), when it is up (as render-mc.js mcSun). */
function bakeSun(style) { const p = sunPosition((style && style.sun) || { month: 6, day: 21, hour: 15, lat: 40, lon: -105, tz: -7 }); return p.up ? p.dir : null; }

export async function bakeSelection(host, o = st.bake) {
  const { t } = host;
  const tg = bakeTargets(host);
  if (tg.why) { host.print(t('shading.bake.why.' + tg.why)); return null; }
  const maps = Object.keys(o.maps).filter((k) => o.maps[k] && (k !== 'normal' || tg.high));
  if (o.maps.normal && !tg.high) host.print(t('shading.bake.why.no_high'));
  if (!maps.length) return null;
  const bb = host.model.bbox(), diag = bb ? Math.hypot(bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]) : 1;
  const ctrl = new AbortController();
  st.bake.busy = { ctrl, done: 0 };
  host.renderPanel();
  let pool = null;
  try { pool = await (await import('./compute/runtime.js')).pagePool(); } catch (e) { pool = null; }   // no workers: in the page
  const t0 = performance.now();
  try {
    const r = await bakeTextures({
      low: tg.low.s, maps, size: o.size, occluders: maps.some((k) => k === 'ao' || k === 'light') ? sceneTriangles(host.model) : null,
      high: tg.high ? tg.high.s : null,
      opts: { rays: o.rays, dist: o.dist > 0 ? o.dist : diag * 0.25, width: o.width / 100, cage: o.cage / 100, sun: bakeSun(host.view.style), sunPower: 1, seed: 1 },
    }, { pool, signal: ctrl.signal, onProgress: (f) => { st.bake.busy.done = f; const p = document.querySelector('[data-shading-bake-progress]'); if (p) p.value = f; } });
    const keys = {}, base = tg.low.name || t('shading.bake.object');
    for (const k of maps) {
      const im = r[k], data = toBase64(pngBytes(im.w, im.h, pictureRgb(im)));
      const id = model.addImage({ name: t('shading.bake.picture_name', { name: base, map: t('shading.bake.map.' + k) }), mime: 'image/png', data });
      materials.images.set('img:' + id, resample(im));
      keys[k] = 'img:' + id;
    }
    // the open material's Dirt and edge wear nodes read the new AO and curvature
    let wear = 0;
    const m = st.id && materials.get(st.id);
    if (m && (keys.ao || keys.curvature) && m.graph.nodes.some((n) => n.type === 'wear')) {
      const g = JSON.parse(JSON.stringify(m.graph));
      for (const n of g.nodes) if (n.type === 'wear') { if (keys.curvature) n.params.curvature = keys.curvature; if (keys.ao) n.params.occlusion = keys.ao; wear++; }
      materials.setGraph(st.id, g);
      st.editor?.setGraph(materials.get(st.id).graph);
    }
    onEdit();
    host.print(t('shading.bake.done', { maps: maps.map((k) => t('shading.bake.map.' + k)).join(', '), size: String(o.size), s: ((performance.now() - t0) / 1000).toFixed(1) }) + (wear ? ' ' + t('shading.bake.wear') : ''));
    return keys;
  } catch (e) {
    host.print(t(e.code === 'cancelled' ? 'shading.bake.cancelled' : 'shading.bake.failed'));
    return null;
  } finally { st.bake.busy = null; host.renderPanel(); host.view.invalidate(); }
}

function bakePanel(host, box) {
  const { t, el } = host;
  const B = st.bake;
  box.append(el('h3', { className: 'mc-h' }, t('shading.bake.h')));
  const checks = el('div', { className: 'mc-bake-maps' }, MAPS_UI.map((k) => {
    const c = el('input', { type: 'checkbox', id: 'mc-bake-' + k, checked: !!B.maps[k], dataset: { shadingBakeMap: k } });
    c.addEventListener('change', () => { B.maps[k] = c.checked; });
    return el('label', { for: 'mc-bake-' + k, className: 'mc-check' }, c, ' ', t('shading.bake.map.' + k));
  }));
  const size = el('select', { className: 'mc-select', id: 'mc-bake-size', dataset: { shadingBakeSize: '' } }, [256, 512, 1024, 2048].map((n) => el('option', { value: String(n) }, n + ' × ' + n)));
  size.value = String(B.size);
  size.addEventListener('change', () => { B.size = Number(size.value); });
  const num = (id, k, min, max, step) => { const i = el('input', { type: 'number', className: 'mc-input', id, min: String(min), max: String(max), step: String(step), value: String(B[k]), dataset: { shadingBakeOpt: k } }); i.addEventListener('change', () => { const v = Number(i.value); if (v >= min && v <= max) B[k] = v; else i.value = String(B[k]); }); return i; };
  box.append(checks, el('label', { for: 'mc-bake-size' }, t('shading.bake.size')), size,
    el('label', { for: 'mc-bake-rays' }, t('shading.bake.rays')), num('mc-bake-rays', 'rays', 1, 1024, 1),
    el('label', { for: 'mc-bake-dist' }, t('shading.bake.dist')), num('mc-bake-dist', 'dist', 0, 1000, 0.1),
    el('label', { for: 'mc-bake-width' }, t('shading.bake.width')), num('mc-bake-width', 'width', 0.01, 100, 0.1),
    el('label', { for: 'mc-bake-cage' }, t('shading.bake.cage')), num('mc-bake-cage', 'cage', 0.01, 1000, 0.5));
  if (B.busy) box.append(el('progress', { max: '1', value: String(B.busy.done), dataset: { shadingBakeProgress: '' } }), el('div', { className: 'mc-shading-acts' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { shadingBakeCancel: '' }, onclick: () => B.busy?.ctrl.abort() }, t('shading.bake.cancel'))));
  else box.append(el('div', { className: 'mc-shading-acts' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { shadingBake: '' }, onclick: () => bakeSelection(host) }, t('shading.bake.go'))));
  box.append(el('p', { className: 'mc-note' }, t('shading.bake.how')));
}
const MAPS_UI = ['ao', 'curvature', 'normal', 'light'];
