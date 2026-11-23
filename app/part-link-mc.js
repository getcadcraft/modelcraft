/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: errors carry a `code`; mountBimLink words everything through the app's t() */
/**
 * part-link-mc.js — ModelCraft's side of the link to BimCraft (0.11 SU.1814, session su-finish-11; PartCraft's side is partcraft/dev/part-link-pc.js,
 * the package and the update are cc-partlink's, ./partlink/, a copy of lib/partlink/ written only by tools/partlink/sync.mjs).
 * BimCraft's Part links > Send to ModelCraft opens ModelCraft at `?partlink=<id>`; the package waits in the shared store (IndexedDB, same origin).
 * The element comes in as ONE group at the origin, in the element's own frame (metres, Z up, as ModelCraft is), one undo step; its placement is
 * tagged `link: 'bim:<id>'` and the file keeps the link (`bimLinks`, readRef'd). The building around it is drawn grey and read-only (three.js
 * objects beside the model, never in it: nothing there can be picked, snapped to, changed or saved). File > Export > Save back to BimCraft sends
 * the group's shape as BimCraft sees it (world, mm) home as an update, which BimCraft shows as changed until the person accepts it there.
 * DOM-free apart from mountBimLink's use of the page's store and channel; tools/partlink-test/mc-test.mjs runs the rest in Node.
 *
 *   TAG = 'bim:'                                         the prefix of a linked placement's `link`
 *   placePackage(model, pkg, { maxFaces }) → { iid, def, kind: 'faces' | 'mesh' }   call inside model.change: the group, in the root
 *   linkedPlacements(model) → [{ link, iid, inst }]       the root placements a link brought
 *   meshOfPlacement(model, iid) → { positions (mm), indices }   welded, the element's frame (= the model's world, mm)
 *   updateFromModel(model, ref, iid, now?) → update       from.app 'ModelCraft'
 *   contextObject(THREE, pkg) → THREE.Group               the neighbours, metres, read-only
 *   mountBimLink(h) → { receive(), sync(), saveBack(), toJSON(), load(list), refs }
 *     h: { t, print, model, view (scene, invalidate), THREE, afterHistory(), frame(), selection() → host.sel, store?, channel?, search? }
 */
import * as PL from './partlink/index.js';
import { Mesh } from './mesh.js';
import { geometryFromMesh, mergeCoplanar } from './model.js';
import { worldFaces } from './io/ply.js';

export const TAG = 'bim:';
const I = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
/** Up to this many triangles the element becomes push/pull faces (flat faces merged: a box is six faces you can push); above, a mesh. */
export const MAX_FACES = 5000;

/** The package's element as one group in the root (metres): push/pull faces when small enough, else a mesh definition. Inside model.change. */
export function placePackage(model, pkg, { maxFaces = MAX_FACES } = {}) {
  const P = pkg.mesh.positions, nI = pkg.mesh.indices.length / 3;
  const pts = new Float64Array(P.length);
  for (let i = 0; i < P.length; i++) pts[i] = P[i] / 1000;
  const fc = new Int32Array(nI).fill(3), fi = Int32Array.from(pkg.mesh.indices);
  const mesh = new Mesh();
  mesh._bulk(pts, pts.length / 3, fc, fi);
  const name = String(pkg.source.name || pkg.source.ifcClass || 'Element').replace(/[\u0000-\u001f]/g, ' ').slice(0, 120);   // i18n-ignore: a fallback name
  let def, kind;
  if (nI <= maxFaces) {
    def = model.newDef('group', name);
    geometryFromMesh(mesh, def);
    mergeCoplanar(def, [...def.edges.keys()]);   // the triangles of one flat side become one face
    kind = 'faces';
  } else {
    const md = model.newMeshDef(mesh, name);
    def = model.newDef('group', name);
    model.place(def, md.id, I);
    kind = 'mesh';
  }
  const iid = model.place(model.root, def.id, I);
  model.root.insts.get(iid).link = TAG + pkg.link;
  return { iid, def, kind };
}

export function linkedPlacements(model) {
  const out = [];
  for (const [iid, inst] of model.root.insts) if (typeof inst.link === 'string' && inst.link.startsWith(TAG)) out.push({ link: inst.link.slice(TAG.length), iid, inst });
  return out;
}

/** The placed group's triangles as BimCraft will read them: the model's world, millimetres, welded. */
export function meshOfPlacement(model, iid) {
  const inst = model.root.insts.get(iid);
  const d = inst && model.defs.get(inst.def);
  if (!d) throw new PL.PartLinkError('partlink.mc.gone');
  const tris = [];
  const one = { walk: (cb) => model.walk(cb, d, inst.m) };
  worldFaces(one, (cs) => { if (cs.length === 3) for (const c of cs) tris.push(c.pos[0] * 1000, c.pos[1] * 1000, c.pos[2] * 1000); }, { triangles: true });
  return PL.localMesh(tris);
}

export function updateFromModel(model, ref, iid, now) {
  if (!ref) throw new PL.PartLinkError('partlink.mc.nolink');
  const mesh = meshOfPlacement(model, iid);
  if (!mesh.indices.length) throw new PL.PartLinkError('partlink.err.empty');
  return PL.makeUpdate({ link: ref.link, rev: ref.rev + 1, mesh, from: { app: 'ModelCraft', part: ref.name }, baseHash: ref.hash, now });
}

/** The neighbours as one translucent group (element frame mm → metres, Z up as ModelCraft); never picked: the model does not hold it. */
export function contextObject(THREE, pkg) {
  const g = new THREE.Group();
  g.name = 'bim-context'; g.userData.readOnly = true;
  const mat = new THREE.MeshStandardMaterial({ color: 0x9aa4ad, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide });
  const lineMat = new THREE.LineBasicMaterial({ color: 0x6b7680, transparent: true, opacity: 0.6 });
  for (const c of pkg.context) {
    const p = new Float32Array(c.mesh.positions.length);
    for (let i = 0; i < p.length; i++) p[i] = c.mesh.positions[i] / 1000;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
    geo.setIndex(new THREE.BufferAttribute(Uint32Array.from(c.mesh.indices), 1));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, mat); m.name = c.name || c.cls; m.userData.readOnly = true; m.raycast = () => {};
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), lineMat); e.raycast = () => {};
    g.add(m, e);
  }
  return g;
}

export function mountBimLink(h) {
  const { t, print, model } = h;
  const store = h.store || PL.idbStore(globalThis.indexedDB);
  const channel = h.channel || PL.openChannel();
  const refs = new Map();   // link id → readRef'd ref (kept in the file)
  let shown = null, shownKey = '';
  const words = (e) => (e && e.code ? t(e.code, e.vars) : String((e && e.message) || e));

  /** Open the package named in the address (`?partlink=<id>`): the element as a group, one undo step. → true when it did. */
  async function receive(search = h.search ?? globalThis.location?.search ?? '') {
    const id = new URLSearchParams(search).get(PL.QUERY);
    if (!id) return false;
    try { const u = new URLSearchParams(globalThis.location.search); u.delete(PL.QUERY); globalThis.history?.replaceState(null, '', globalThis.location.pathname + (u.toString() ? '?' + u : '') + (globalThis.location.hash || '')); } catch { /* an odd page */ }
    if (!PL.isLinkId(id)) { print(t('partlink.err.link')); return false; }
    let pkg;
    try {
      const raw = await store.get('package', id);
      if (!raw) throw new PL.PartLinkError('partlink.mc.gone_pkg');
      pkg = PL.readPackage(raw);
      const had = linkedPlacements(model).find((x) => x.link === pkg.link);
      model.change(t('partlink.mc.undo_open', { name: pkg.source.name }), (m) => {
        if (had) m.root.insts.delete(had.iid);   // sent again: the new copy takes the old one's place
        placePackage(m, pkg);
      });
      refs.set(pkg.link, PL.readRef(PL.refFromPackage(pkg)));
      model.dirty = true;
    } catch (e) { print(t('partlink.mc.failed', { error: words(e) })); return false; }
    h.afterHistory?.();
    await sync(pkg);
    h.frame?.();
    print(t('partlink.mc.opened', { name: pkg.source.name, n: pkg.context.length, app: pkg.source.app }));
    return true;
  }

  /** Draw the context of the links the model holds (from the store, while it is there). */
  async function sync(pkg = null) {
    const live = linkedPlacements(model).filter((x) => refs.has(x.link));
    const key = live.map((x) => x.link).join(',');
    if (key === shownKey && !pkg) return;
    shownKey = key;
    if (shown) { h.view.scene.remove(shown); shown.traverse?.((o) => o.geometry?.dispose?.()); shown = null; }
    if (!live.length) { h.view.invalidate?.(); return; }
    const g = new h.THREE.Group(); g.name = 'bim-context-all'; g.userData.readOnly = true;
    for (const x of live) {
      try { const p = pkg && pkg.link === x.link ? pkg : PL.readPackage(await store.get('package', x.link)); g.add(contextObject(h.THREE, p)); } catch { /* the package is gone from this browser: the element stays, its surroundings do not show */ }
    }
    shown = g; h.view.scene.add(g); h.view.invalidate?.();
  }

  /** Which linked placement Save back means: the picked one, else the only one. */
  function target() {
    const live = linkedPlacements(model).filter((x) => refs.has(x.link));
    const picked = (h.selection?.() || []).filter((s) => s.t === 'i').map((s) => s.id);
    return live.find((x) => picked.includes(x.iid)) || (live.length === 1 ? live[0] : null);
  }

  /** File › Export › Save back to BimCraft. */
  async function saveBack() {
    const live = linkedPlacements(model).filter((x) => refs.has(x.link));
    if (!live.length) { print(t('partlink.mc.nolink')); return false; }
    const x = target();
    if (!x) { print(t('partlink.mc.pick')); return false; }
    const ref = refs.get(x.link);
    try {
      const up = updateFromModel(model, ref, x.iid);
      await store.put('update', ref.link, up);
      refs.set(ref.link, { ...ref, rev: up.rev, hash: up.geometry.hash });
      model.dirty = true;
      channel.post({ kind: 'update', link: ref.link });
      print(t('partlink.mc.saved', { name: ref.name, rev: up.rev }));
      return true;
    } catch (e) { print(t('partlink.mc.save_failed', { error: words(e) })); return false; }
  }

  /** The file's `bimLinks` (only links a placement still carries). */
  function toJSON() {
    const keep = new Set(linkedPlacements(model).map((x) => x.link));
    const list = [...refs.values()].filter((r) => keep.has(r.link));
    return list.length ? list : null;
  }
  /** From a file (untrusted): each entry readRef'd, at most 256. */
  function load(list) {
    refs.clear(); shownKey = '';
    for (const r of Array.isArray(list) ? list.slice(0, 256) : []) { const ref = PL.readRef(r); if (ref) refs.set(ref.link, ref); }
    sync().catch(() => {});
  }
  return { receive, sync: () => sync(), saveBack, toJSON, load, refs, target };
}
