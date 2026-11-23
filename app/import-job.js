/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: codes only; the words a person reads come from the importers' own t() calls (the page's language, sent with the job) */
/**
 * import-job.js — a glTF or OBJ import read, welded and built into meshes in the page's worker pool, then grafted into the
 * page's model in one cheap step (0.11 PERF.7, session `perf-finish-11`, lane `model`). DOM-free.
 *
 * On the page thread a 10.7 MB glTF took 2 to 4 s of long tasks (the read, the weld, the Mesh build, the view's triangles and
 * normals). Now a worker runs the app's own importers (io/gltf-read.js + io/gltf-import.js, io/obj.js) on a scratch Model, works
 * out each new mesh's triangles and corner normals for the view (and its shells for the guide card), and hands everything back as transferred arrays (Mesh.toState:
 * no copy). The page then replays what the importer made, in the order it made it, so the ids, names, placements, lamps, scenes
 * and images are exactly those of an import on the page (tools/modelcraft-test/test-import-job.mjs compares the two).
 *
 *   importJob({ kind: 'gltf' | 'obj', bytes (ArrayBuffer), companions [{name, bytes}], name, lang, meshoptUrl }) → package
 *       (worker job) | { fail: message } for a file the importer refused | { pageOnly: why } for what needs the page (Draco)
 *   graftImport(model, pkg) → { def, report }   inside model.change(), like importGltfScene / importObj (`def` not placed)
 */
import { Mesh } from './mesh.js';
import { meshShells, keepShells } from './firstmodel.js';

let langKey = '';
async function useLang(lang) {
  if (!lang) return;
  const key = lang.locale + '|' + Object.keys(lang.strings || {}).length;
  if (key === langKey) return;
  (await import('./i18n.js')).init({ locale: lang.locale, chain: lang.chain, strings: lang.strings });
  langKey = key;
}

export async function importJob({ kind, bytes, companions = [], name, lang, meshoptUrl = null }) {
  await useLang(lang);
  const u8 = new Uint8Array(bytes);
  const { Model } = await import('./model.js');
  const w = new Model();
  let r;
  try {
    if (kind === 'gltf') {
      const { readGltf, parseContainer } = await import('./io/gltf-read.js');
      const { json } = parseContainer(u8);
      const ext = [...(Array.isArray(json.extensionsUsed) ? json.extensionsUsed : []), ...(Array.isArray(json.extensionsRequired) ? json.extensionsRequired : [])];
      if (ext.includes('KHR_draco_mesh_compression')) return { pageOnly: 'draco' };   // its decoder is a classic script the page loads
      const byName = new Map(companions.map((f) => [String(f.name).toLowerCase(), f.bytes]));
      const resolve = async (uri) => { const b = byName.get(String(uri).split('/').pop().toLowerCase()); return b ? new Uint8Array(b) : null; };
      const scene = await readGltf(u8, { resolve, meshopt: meshoptUrl ? async () => (await import(meshoptUrl)).MeshoptDecoder : undefined });
      const { importGltfScene } = await import('./io/gltf-import.js');
      r = importGltfScene(w, scene, name);
    } else if (kind === 'obj') {
      const { readObj, importObj } = await import('./io/obj.js');
      const byName = new Map(companions.map((f) => [String(f.name).toLowerCase(), f.bytes]));
      const resolve = async (u) => { const b = byName.get(String(u).split(/[\\/]/).pop().toLowerCase()); return b ? new Uint8Array(b) : null; };
      const obj = await readObj(u8, { resolve });
      r = importObj(w, obj, name);
    } else return { pageOnly: 'kind' };
  } catch (e) { return { fail: String((e && e.message) || e) }; }
  return pack(w, r);
}

/** What the scratch model holds besides its root, in the order its counter made it (definitions d<n> and lamps <n>). */
function pack(w, r) {
  const items = [];
  for (const d of w.defs.values()) if (d.id !== 'root') items.push({ n: Number(d.id.slice(1)), d });
  for (const [id, L] of w.lights) items.push({ n: Number(id), L });
  items.sort((a, b) => a.n - b.n);
  const buffers = [];
  const keep = (a) => { if (a && a.buffer instanceof ArrayBuffer && !buffers.includes(a.buffer)) buffers.push(a.buffer); return a; };
  const out = [];
  for (const { d, L } of items) {
    if (L) { out.push({ light: L }); continue; }
    if (d.mesh) {
      if (d.mods?.length || d.lattice || d.curve) return { pageOnly: 'mods' };
      const m = d.mesh;
      const T = m.triangulate(), N = m.cornerNormals();   // what the view's meshGeometry would ask for first
      const shells = meshShells(m).map((x) => ({ faces: keep(Int32Array.from(x.faces)), closed: x.closed, volume: x.volume }));   // the guide card's
      const state = m.toState();
      state.cols.forEach(keep); state.attrs.forEach((a) => keep(a.a));
      keep(T.tri); keep(T.face); keep(N);
      out.push({ id: d.id, kind: 'mesh', name: d.name, state, view: { tri: T.tri, face: T.face, n: T.n, N }, shells });
      continue;
    }
    if (d.verts.size || d.edges.size || d.faces.size || d.splines.size || d.dyn || d.mods || d.starter) return { pageOnly: 'geometry' };
    out.push({ id: d.id, kind: d.kind, name: d.name, next: d.next, insts: [...d.insts] });
  }
  // the scratch model's images: the same bytes give the same id on the page, unless the page holds another image under it
  const chunks = [];
  for (let i = 0; i < buffers.length; i += 200) chunks.push(buffers.slice(i, i + 200));   // pool.js moves what it finds within 256 per array
  return { top: r.def.id, report: r.report, items: out, images: [...w.images], scenes: w.scenes.slice(), buffers: chunks };
}

const IMG = /^img:([a-z0-9]{1,24})/;

/** The package into the page's model (call inside model.change). Same definitions, in the same order, as the importer on the page. */
export function graftImport(model, pkg) {
  const imgMap = new Map();
  for (const [wid, im] of pkg.images) { const id = model.addImage(im); if (id !== wid) imgMap.set(wid, id); }
  const fix = (p) => (typeof p === 'string' && imgMap.size ? p.replace(IMG, (all, id) => (imgMap.has(id) ? 'img:' + imgMap.get(id) : all)) : p);
  const ids = new Map();
  for (const it of pkg.items) {
    if (it.light) { model.addLight(it.light); continue; }
    if (it.kind === 'mesh') {
      const mesh = Mesh.fromState(it.state);
      if (imgMap.size) mesh.paints = mesh.paints.map(fix);
      if (it.view) mesh._viewPre = { v: mesh.v, topo: mesh.topo, T: { tri: it.view.tri, face: it.view.face, n: it.view.n }, N: it.view.N };
      if (it.shells) keepShells(mesh, it.shells);
      ids.set(it.id, model.newMeshDef(mesh, it.name).id);
    } else ids.set(it.id, model.newDef(it.kind, it.name).id);
  }
  for (const it of pkg.items) {
    if (!it.insts) continue;
    const d = model.def(ids.get(it.id));
    for (const [iid, i] of it.insts) d.insts.set(iid, { ...i, def: ids.get(i.def) ?? i.def, ...(i.color ? { color: fix(i.color) } : {}) });
    d.next = it.next;
  }
  for (const s of pkg.scenes) model.scenes.push(s);
  return { def: model.def(ids.get(pkg.top)), report: pkg.report };
}
