/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nodes-mc.js — ModelCraft's thin adapter for the node editor (0.8 round 3, nodes_PART_3; DC.54). The graph engine is cc-nodes (./nodes/, byte copies
 * of lib/nodes via `node tools/nodes/sync.mjs modelcraft`) over cc-nurbs (./nurbs/); the editor window is the shell's assets/js/app-nodes.js.
 * What is ModelCraft's here, and only here:
 *   - the graph is kept in the .modelcraft file through the doc-data hook (`addons.nodes` = { graph }), outside the model's undo like the
 *     Surfaces patch set; the editor has its own Undo / Redo (one step per edit);
 *   - the model is in metres and cc-nodes in millimetres (display scale 0.001);
 *   - node errors go to the shell's Problems (source 'modelcraft.nodes').
 *
 *   - Bake to model (0.8, oltl2-c_PART_3): `bake(meshes)` (modelcraft.js, one undo step) makes ModelCraft groups from the surfaces and meshes that are shown
 *     (cc-nodes bake.js: surfaces tessellated, millimetres); points and curves are counted, not baked.
 *
 *   mountNodesMc({ parent, view, docData, t, bake, status }) → { window, graph(), show(), hide(), toggle() }      window.modelcraft.nodes = that object once mounted.
 */
import * as THREE from 'three';
import * as N from './nurbs/index.js';
import * as E from './nodes/index.js';

export async function mountNodesMc({ parent, view, docData, t, bake = null, status = () => {} }) {
  const { openNodesWindow } = await import('/assets/js/app-nodes.js');
  const store = docData.forAddon('nodes');
  // the solid nodes (0.9 SU.747c) run the Booleans on ModelCraft's own manifold-3d, handed over once; a failed load leaves them saying the engine is missing
  try { N.nodesSolid.setEngine(await import('./solids.js').then((L) => L.manifold())); } catch { /* i18n-ignore: no engine, the nodes say so */ }
  const w = openNodesWindow({
    parent, E, N, THREE, scene: view.scene, scale: 0.001, t, problemsId: 'modelcraft.nodes',
    store: { get: () => store.data('graph'), set: (json) => store.setData('graph', json.nodes.length ? json : null) },
    redraw: () => view.invalidate(),
    status,
    onBake: bake ? (shown) => {
      const r = E.bakeMeshes(N, shown);
      if (!r.meshes.length) return t('nodes.bake.none');
      bake(r.meshes);
      return t('nodes.baked', { n: r.meshes.length, tri: r.triangles, pts: r.skipped.points, crv: r.skipped.curves });
    } : null,
  });
  store.onOpen(() => w.reload());   // another file opened: its graph (or none)
  return { window: w, graph: () => w.panel.graph, show: () => w.show(), hide: () => w.hide(), toggle: () => w.toggle() };
}
