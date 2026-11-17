/* SPDX-License-Identifier: Apache-2.0 */
/**
 * massing-mc.js: ModelCraft's push / pull massing handed to an IFC model (0.10 BK.44, session bk-r3-stages-10). No DOM:
 * tools/modelcraft-test/massing-test.mjs runs it in Node. The rule and the file are lib/massing's (./massing/solid.js,
 * ./massing/mass-ifc.js: the one mass IFC writer, CivilCraft's too); this file only gathers the solids.
 *
 * THE MAPPING, said once: every top-level group or component (the selected ones, else all) is ONE massing option. It becomes
 * an IfcBuildingElementProxy "Building mass" (the outline of its section just above its base, extruded to its height) with the
 * property set CadCraft_SiteMass, and one IfcSpace per floor carrying that floor's gross area = the area of the solid's own
 * horizontal section at the floor's level. Floors = height / the floor height you give, rounded (at least 1). All options sit
 * in one IfcBuilding whose storeys are the tallest option's. A solid that is not closed, or whose floors are not all its
 * footprint (a stepped or sloped shape), is still handed over: its proxy is marked Simplified, its floor areas and volume
 * are the solid's own, and the report says so. BimCraft opens the file with the options listed (mass-options.js).
 *
 *   massingSolids(model, iids?) -> [{ iid, name, tris }]            top-level placements with faces (model units: metres)
 *   massingFile(model, { iids, floorHeight, set, name, now }) -> { text, fileName, counts, report [{ name, floors, footprint, gross, volume, closed, prism, simplified, notes, failed? }] }
 */
import { placementTris } from './print-solid.js';
import { ifcGuid } from './io.js';
import { optionMasses } from './massing/solid.js';
import { writeMassingIfc } from './massing/mass-ifc.js';

export const DEFAULT_FLOOR_HEIGHT = 3;   // metres: the dialog's first value, for the person to change

export function massingSolids(model, iids = null) {
  const root = model.root, out = [];
  const want = iids && iids.length ? iids.filter((id) => root.insts.has(id)) : [...root.insts.keys()];
  for (const iid of want) {
    const inst = root.insts.get(iid), d = model.def(inst.def);
    if (!d) continue;
    const tris = placementTris(model, root, iid);
    if (tris.length) out.push({ iid, name: inst.name || d.name || '', tris });
  }
  return out;
}

export function massingFile(model, { iids = null, floorHeight = DEFAULT_FLOOR_HEIGHT, set = '', name = 'ModelCraft model', now = new Date() } = {}) {
  const solids = massingSolids(model, iids);
  const setName = String(set || name).trim().slice(0, 80) || 'Massing';   // i18n-ignore: IFC file data
  const r = optionMasses(solids.map((s, i) => ({ name: s.name || 'Option ' + (i + 1), tris: s.tris })), { floorHeight, set: setName, source: 'ModelCraft' });   // i18n-ignore: IFC file data
  if (!r.masses.length) return { text: '', fileName: '', counts: { masses: 0, storeys: 0, spaces: 0 }, report: r.report };
  // the file's zero is the model's own (0, 0), so the options stand where they were modelled
  const f = writeMassingIfc({ name: setName, units: 'm', origin: { x: 0, y: 0, z: r.shared.z0 }, masses: r.masses, shared: r.shared },
    { seed: name + '|massing', now, guid: ifcGuid, app: 'ModelCraft', about: 'ModelCraft massing options', fileName: name + '-massing.ifc' });   // i18n-ignore: IFC file header data
  return { text: f.text, fileName: name + '-massing.ifc', counts: f.counts, report: r.report };
}
