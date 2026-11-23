/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ids-mc.js — ModelCraft's ids from session tags (0.11 DC.27; history/ids.js has the scheme, log docs/0.11-sessions/dc27-ids-11.md).
 * Page side on purpose: model.js is the m3d kernel CadCraft carries a copy of (tools/modelcraft-test/m3d-sync.mjs); the kernel only
 * reads ids up to 2^53 and rolls to a new tag past the end of one (rollId).
 *
 * ModelCraft has a counter for the model (`nextId`: definitions d<n>, guides, dimensions, lights, sections) and one in each definition
 * (`next`: its vertices, edges, faces, placements, curves). When a file opens, each counter draws its own random tag, not one the
 * numbers it hands out already use.
 *
 *   takeIdBlock(model)    after model.load(file): every counter moves to its tag (not an undo step)
 *   fileIds(model, j)     on the file's JSON (model.toJSON()): formatVersion, and each counter this session did not use written as the file had it
 *   olderCopy(j)          Save for an older version: a copy of that JSON with every id above 999,999,999 numbered again (0.10 and older
 *                         read 9-digit ids), every reference rewritten, the counters after the highest ids, no formatVersion
 */
import { openBlock, savedCounter, dropBlocks, narrowIds, idNumber, maxOf, FILE_IDS, OLD_LIMIT_9 } from './history/ids.js';

const innerIds = (d) => [...d.verts.keys(), ...d.edges.keys(), ...d.faces.keys(), ...d.insts.keys(), ...[...(d.splines?.keys() || [])].map(idNumber)];
const modelIds = (m) => [...[...m.defs.keys()].map(idNumber), ...m.guides.keys(), ...(m.dims?.keys() || []), ...(m.lights?.keys() || []), ...(m.sections?.keys() || [])];

export function takeIdBlock(model) {
  dropBlocks(model);
  model.nextId = openBlock(model, model.nextId || 1, modelIds(model));
  for (const d of model.defs.values()) {
    if (d.mesh) continue;   // a mesh definition's numbers are its mesh's own
    d.next = openBlock(model, d.next || 1, innerIds(d), { key: d.id });
    d.rev++;                // its kept JSON (undo snapshots) is made again with the new counter
  }
  return model.nextId;
}

export function fileIds(model, j) {
  j.formatVersion = FILE_IDS;   // ids from session tags; older builds ignore the key
  if (Number.isInteger(j.nextId)) j.nextId = savedCounter(model, j.nextId);
  if (Array.isArray(j.defs)) for (const d of j.defs) if (d && Number.isInteger(d.next)) d.next = savedCounter(model, d.next, d.id);
  return j;
}

/** Every id number of a .modelcraft file's JSON, with the inner ids of each definition: [model-level numbers, Map def id → inner numbers]. */
function fileNumbers(j) {
  const top = [], inner = new Map();
  for (const d of Array.isArray(j.defs) ? j.defs : []) {
    if (!d || typeof d.id !== 'string') continue;
    if (d.id !== 'root') top.push(idNumber(d.id));
    const own = [];
    for (const v of d.verts || []) if (Array.isArray(v)) own.push(v[0]);
    for (const e of d.edges || []) if (Array.isArray(e)) own.push(e[0]);
    for (const f of d.faces || []) if (f) own.push(f.id);
    for (const i of d.insts || []) if (i) own.push(i.id);
    for (const s of d.splines || []) if (s) own.push(idNumber(s.id));
    inner.set(d.id, own.filter(Number.isSafeInteger));
  }
  for (const k of ['guides', 'dims', 'lights', 'sections']) for (const g of Array.isArray(j[k]) ? j[k] : []) if (g && Number.isSafeInteger(g.id)) top.push(g.id);
  return [top, inner];
}

export function olderCopy(j) {
  const [top, inner] = fileNumbers(j);
  const { obj } = narrowIds(j, { ids: [...top, ...[...inner.values()].flat()], limit: OLD_LIMIT_9, numeric: true });
  delete obj.formatVersion;
  const [top2, inner2] = fileNumbers(obj);
  obj.nextId = Math.max(Number.isInteger(j.nextId) && j.nextId <= OLD_LIMIT_9 ? j.nextId : 1, maxOf(top2) + 1);
  (obj.defs || []).forEach((d, i) => {   // the same order as the file's (narrowIds keeps it)
    if (!d || !Number.isInteger(d.next)) return;
    const was = j.defs[i]?.next;
    d.next = Math.max(Number.isInteger(was) && was <= OLD_LIMIT_9 ? was : 1, maxOf(inner2.get(d.id) || []) + 1);
  });
  return obj;
}
