/* SPDX-License-Identifier: Apache-2.0 */
/**
 * live.js — ModelCraft's Studio Live adapter (0.5 LV.22, session live-apps; spec docs/STUDIO-LIVE-SPEC.md § 4, keys and
 * `touched` rules docs/LIVE-PROTOCOL.md § 6). DOM-free: tools/live-apps-test/test-state-apps-live.mjs drives it in Node
 * with ModelCraft's own Model (model.js) against the real session server.
 *
 *   const live = createLive(model)   → the adapter (spec § 4);  live.bind(client) / live.unbind()
 *   createLiveAdapter({ host })      → Studio's entry point, for window.modelcraft
 *
 * The model is ModelCraft's native JSON (model.toJSON(): groups and components as `defs`, each with its own vertices,
 * edges, faces and placements). Every edit is already one step with a copy before and after (model.change / commit); the
 * ops are their difference, through the state core below:
 *   - a group's (or component's) **geometry** — vertices, edges, faces, curves — is one structural op: sticky geometry only
 *     makes sense whole, so when two people reshape the same group at once the second is refused and taken back. Different
 *     groups merge freely: that is how a team works on one model (each in their own group);
 *   - **placements** (a group placed in another: where, name, colour, hidden, tag), names of groups, guides, dimensions and
 *     section planes merge per item and field: two people moving two placed groups both keep theirs;
 *   - scenes, tags, storeys, units, the drawing axes travel whole (the later one wins).
 * Ids: each person's new definitions, guides and placed things number from their own range (client c: c × 1e6 + n);
 * `nextId` and each definition's `next` are personal. The m3d kernel's own (CadCraft's 3D tab) model travels with the
 * CadCraft drawing instead (cadcraft/dev/live.js, op m3d).
 */

import { pack, unpack } from './live-client.js';
import { t } from './i18n.js';

export const SCHEMA = 1;
export const ID_BLOCK = 1e6;
// ---- the state-diff core (the same in ModelCraft's, CivilCraft's and DetailCraft's live.js; session live-apps) -----------
/**
 * stateCore(cfg) → { diff(a, b), apply(root, ops), invert(root, ops), touched(ops, root), keyOf(path) }
 * A document is plain JSON. cfg:
 *   lists    { 'defs': 'id', 'defs/*\/insts': 'id', … }  arrays of objects merged per item (path pattern → id field; * = an item)
 *   atomic   { 'defs/*': { geo: ['verts', 'edges', 'faces'] } }  fields that only make sense together: one structural op
 *   personal ['nextId', 'defs/*\/next']                       never sent (each window's own counters)
 *   depth    how deep plain objects outside lists are merged field by field (default 3)
 * Ops (paths are arrays; an item in a list is '#<id>'):
 *   {o:'add', path, id, v, at}  an item created at its place      key e:<path>/#<id> (c)
 *   {o:'del', path, id}         an item removed                     (d)
 *   {o:'put', path, v | x:1}    one value (x: removed)              in an item: e:<item> field <rest> (p); else meta:<path> (p)
 *   {o:'atom', path, v}         an atomic group of an item          e:<item> (s)
 *   {o:'ord', path, v:[ids]}    a list's order                      meta:<path>.order (p)
 */
function stateCore(cfg) {
  const lists = cfg.lists || {}, atomic = cfg.atomic || {}, personal = new Set(cfg.personal || []), depth = cfg.depth ?? 3;
  const clone = (v) => (v === undefined || v === null || typeof v !== 'object' ? v : JSON.parse(JSON.stringify(v)));
  const same = (a, b) => a === b || JSON.stringify(a) === JSON.stringify(b);
  const plain = (v) => v && typeof v === 'object' && !Array.isArray(v);
  const pat = (path) => path.map((s) => (s[0] === '#' ? '*' : s)).join('/');
  const listId = (path) => lists[pat(path)];
  const isPersonal = (path) => personal.has(pat(path));
  const idOf = (x, f) => (x && typeof x === 'object' ? x[f] : undefined);
  const uniqueIds = (arr, f) => { const s = new Set(); for (const x of arr) { const k = idOf(x, f); if (k === undefined || k === null || s.has(k)) return false; s.add(k); } return true; };
  /** An item's value without its personal fields. */
  function strip(path, v) {
    if (!plain(v)) return clone(v);
    const o = {};
    for (const [k, x] of Object.entries(v)) if (!isPersonal([...path, k])) o[k] = plain(x) || Array.isArray(x) ? strip([...path, k], x) : x;
    return o;
  }

  function diff(a, b, path = [], out = { mid: [], post: [] }, lvl = 0) {
    const f = listId(path);
    if (f && Array.isArray(a) && Array.isArray(b) && uniqueIds(a, f) && uniqueIds(b, f)) {
      const A = new Map(a.map((x) => [x[f], x])), B = new Map(b.map((x) => [x[f], x]));
      // removals first, then additions at their final places (ascending): that rebuilds b exactly
      for (const [id] of A) if (!B.has(id)) out.mid.push({ o: 'del', path, id });
      b.forEach((x, at) => { if (!A.has(x[f])) out.mid.push({ o: 'add', path, id: x[f], v: strip([...path, '#' + x[f]], x), at }); });
      for (const x of b) if (A.has(x[f])) item([...path, '#' + x[f]], A.get(x[f]), x, out);
      const was = a.map((x) => x[f]).filter((id) => B.has(id)), now = b.map((x) => x[f]).filter((id) => A.has(id));
      if (was.join('\u0000') !== now.join('\u0000')) out.post.push({ o: 'ord', path, v: b.map((x) => x[f]) });
      return out;
    }
    if (plain(a) && plain(b) && lvl < depth) {
      for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
        const p = [...path, k];
        if (isPersonal(p) || same(a[k], b[k])) continue;
        if (b[k] === undefined) out.mid.push({ o: 'put', path: p, x: 1 });
        else if (a[k] === undefined) out.mid.push({ o: 'put', path: p, v: strip(p, b[k]) });
        else diff(a[k], b[k], p, out, lvl + 1);
      }
      return out;
    }
    if (!same(a, b)) out.mid.push(b === undefined ? { o: 'put', path, x: 1 } : { o: 'put', path, v: strip(path, b) });
    return out;
  }
  /** One item of a list, both sides: its atomic groups, then its fields (lists inside it merge per item too). */
  function item(path, a, b, out) {
    const groups = atomic[pat(path)] || {};
    const inGroup = new Set(Object.values(groups).flat());
    for (const [name, fields] of Object.entries(groups)) {
      if (fields.some((k) => !same(a[k], b[k]))) out.mid.push({ o: 'atom', path: [...path, name], v: Object.fromEntries(fields.filter((k) => b[k] !== undefined).map((k) => [k, clone(b[k])])) });
    }
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      const p = [...path, k];
      if (inGroup.has(k) || isPersonal(p) || same(a[k], b[k])) continue;
      if (listId(p)) diff(a[k] || [], b[k] || [], p, out, 0);
      else out.mid.push(b[k] === undefined ? { o: 'put', path: p, x: 1 } : { o: 'put', path: p, v: strip(p, b[k]) });
    }
  }
  const flat = (o) => o.mid.concat(o.post);

  // ---- paths in a document -------------------------------------------------------------------------------------------
  /** The container a path ends in (and its last segment), or null when part of it is gone. */
  function at(root, path) {
    let cur = root;
    for (let i = 0; i < path.length - 1; i++) {
      const s = path[i];
      if (s[0] === '#') { const f = listId(path.slice(0, i)); cur = Array.isArray(cur) ? cur.find((x) => String(idOf(x, f)) === s.slice(1)) : undefined; }
      else cur = cur ? cur[s] : undefined;
      if (cur === undefined || cur === null) return null;
    }
    return { box: cur, last: path[path.length - 1] };
  }
  const get = (root, path) => { if (!path.length) return root; const r = at(root, path); if (!r) return undefined; const s = r.last; if (s[0] === '#') { const f = listId(path.slice(0, -1)); return Array.isArray(r.box) ? r.box.find((x) => String(idOf(x, f)) === s.slice(1)) : undefined; } return r.box[s]; };
  const list = (root, path) => { const v = get(root, path); return Array.isArray(v) ? v : null; };
  /** A list's ids, typed as stored (numbers stay numbers). */
  const idsOf = (root, path) => { const l = list(root, path), f = listId(path); return l ? l.map((x) => idOf(x, f)) : []; };

  function applyOne(root, op) {
    switch (op.o) {
      case 'add': {
        let l = list(root, op.path);
        if (!l) { const r = at(root, op.path); if (!r || r.last[0] === '#') return; r.box[r.last] = l = []; }
        const f = listId(op.path), i = l.findIndex((x) => idOf(x, f) === op.id);
        if (i >= 0) l[i] = clone(op.v); else l.splice(Number.isInteger(op.at) ? Math.min(op.at, l.length) : l.length, 0, clone(op.v));
        return;
      }
      case 'del': { const l = list(root, op.path); if (!l) return; const f = listId(op.path), i = l.findIndex((x) => idOf(x, f) === op.id); if (i >= 0) l.splice(i, 1); return; }
      case 'put': { const r = at(root, op.path); if (!r || r.last[0] === '#') return; if (op.x) delete r.box[r.last]; else r.box[r.last] = clone(op.v); return; }
      case 'atom': {
        const it = get(root, op.path.slice(0, -1)); if (!it) return;
        const fields = (atomic[pat(op.path.slice(0, -1))] || {})[op.path[op.path.length - 1]] || [];
        for (const k of fields) { if (op.v[k] === undefined) delete it[k]; else it[k] = clone(op.v[k]); }
        return;
      }
      case 'ord': {
        const l = list(root, op.path); if (!l) return;
        const f = listId(op.path), by = new Map(l.map((x) => [idOf(x, f), x]));
        const next = op.v.map((id) => by.get(id)).filter(Boolean);
        for (const x of l) if (!next.includes(x)) next.push(x);
        l.splice(0, l.length, ...next);
        return;
      }
      default: return;
    }
  }
  function apply(root, ops) { for (const op of ops) applyOne(root, op); return root; }

  /** The inverse of ops on `root` as it is now; positions follow the ops one by one (a list's ids walked along). */
  function invert(root, ops) {
    const lists2 = new Map();
    const ids = (path) => { const k = path.join('\u0000'); if (!lists2.has(k)) lists2.set(k, idsOf(root, path)); return lists2.get(k); };
    const out = [];
    for (const op of ops) {
      let inv = null;
      if (op.o === 'g') inv = op;
      else if (op.o === 'add' || op.o === 'del') {
        const l = ids(op.path), i = l.indexOf(op.id), x = i >= 0 ? get(root, [...op.path, '#' + op.id]) : undefined;
        inv = x !== undefined ? { o: 'add', path: op.path, id: op.id, v: strip([...op.path, '#' + op.id], x), at: i } : { o: 'del', path: op.path, id: op.id };
        if (op.o === 'add') { if (i < 0) l.splice(Number.isInteger(op.at) ? Math.min(op.at, l.length) : l.length, 0, op.id); }
        else if (i >= 0) l.splice(i, 1);
      } else if (op.o === 'put') { const v = get(root, op.path); inv = v === undefined ? { o: 'put', path: op.path, x: 1 } : { o: 'put', path: op.path, v: clone(v) }; }
      else if (op.o === 'atom') {
        const it = get(root, op.path.slice(0, -1));
        const fields = (atomic[pat(op.path.slice(0, -1))] || {})[op.path[op.path.length - 1]] || [];
        inv = it ? { o: 'atom', path: op.path, v: Object.fromEntries(fields.filter((k) => it[k] !== undefined).map((k) => [k, clone(it[k])])) } : null;
      } else if (op.o === 'ord') {
        const l = ids(op.path);
        inv = { o: 'ord', path: op.path, v: l.slice() };
        const next = op.v.filter((id) => l.includes(id)); for (const id of l) if (!next.includes(id)) next.push(id); l.splice(0, l.length, ...next);
      }
      out.push(inv);
    }
    const r = out.reverse().filter(Boolean);
    const gi = r.findIndex((o) => o.o === 'g'); if (gi > 0) r.unshift(r.splice(gi, 1)[0]);
    return r;
  }

  /** Where an op lands: the innermost list item on its path (key e:…) and the field below it, else a meta key. */
  function keyOf(path) {
    let last = -1;
    for (let i = 0; i < path.length; i++) if (path[i][0] === '#') last = i;
    if (last < 0) return { k: 'meta:' + path.join('/') };
    return { k: 'e:' + path.slice(0, last + 1).join('/'), f: path.slice(last + 1).join('/') };
  }
  /** Every item key an op depends on: the items it sits inside, and items of other lists its value names (cfg.refs). */
  function reads(op) {
    const out = [];
    for (let i = 0; i < op.path.length; i++) if (op.path[i][0] === '#' && i < op.path.length - (op.o === 'add' || op.o === 'del' ? 0 : 1)) out.push('e:' + op.path.slice(0, i + 1).join('/'));
    if (cfg.refs && op.v !== undefined) for (const k of cfg.refs(op)) out.push(k);
    return out;
  }
  function touched(ops) {
    const out = [], seen = new Set();
    const add = (x) => { const k = x.k + '\u0000' + x.m + '\u0000' + (x.f || ''); if (!seen.has(k)) { seen.add(k); out.push(x); } };
    for (const op of ops) {
      if (op.o === 'g') continue;
      if (op.o === 'add' || op.o === 'del') add({ k: 'e:' + [...op.path, '#' + op.id].join('/'), m: op.o === 'add' ? 'c' : 'd' });
      else if (op.o === 'ord') add({ k: 'meta:' + op.path.join('/') + '.order', m: 'p', f: 'v' });
      else if (op.o === 'atom') add({ k: keyOf(op.path.slice(0, -1)).k, m: 's' });
      else if (op.o === 'put') { const { k, f } = keyOf(op.path); add(f ? { k, m: 'p', f } : { k, m: 'p', f: 'v' }); }
      for (const k of reads(op)) if (!out.some((x) => x.k === k && x.m !== 'r')) add({ k, m: 'r' });
    }
    return out;
  }
  return { diff: (a, b) => flat(diff(a, b)), apply, invert, touched, get, idsOf, keyOf, strip };
}

const CORE = stateCore({
  lists: { defs: 'id', 'defs/*/insts': 'id', guides: 'id', dims: 'id', sections: 'id' },
  atomic: { 'defs/*': { geo: ['verts', 'edges', 'faces', 'splines'] } },
  personal: ['nextId', 'defs/*/next'],
  depth: 1,
  // a placement names the definition it places: that one must still be there
  refs: (op) => (op.path[0] === 'defs' && op.v && typeof op.v === 'object' && typeof op.v.def === 'string' ? ['e:defs/#' + op.v.def] : op.path[op.path.length - 1] === 'def' && typeof op.v === 'string' ? ['e:defs/#' + op.v] : []),
});

export function createLive(model, opts = {}) {
  let client = null, g = 0, queued = false;
  const json = () => model.toJSON();
  const num = (s) => +String(s).replace(/^\D+/, '');
  /** New ids from this client's range: the model's nextId and every definition's next. */
  function claimIds() {
    if (!client || !client.c) return;
    const lo = client.c * ID_BLOCK, hi = lo + ID_BLOCK, inR = (n) => n > lo && n < hi;
    let top = lo + 1;
    for (const d of model.defs.values()) {
      if (inR(num(d.id))) top = Math.max(top, num(d.id) + 1);
      let nx = lo + 1;
      for (const m of [d.verts, d.edges, d.faces, d.insts, d.splines]) if (m) for (const k of m.keys()) if (inR(+k)) nx = Math.max(nx, +k + 1);
      d.next = Math.max(nx, inR(d.next) ? d.next : 0);
    }
    for (const m of [model.guides, model.dims, model.sections]) for (const k of m.keys()) if (inR(+k)) top = Math.max(top, +k + 1);
    model.nextId = Math.max(top, inR(model.nextId) ? model.nextId : 0);
  }
  /** After the session: numbering goes on above every id in the model (as opening a file does). */
  function releaseIds() {
    let top = model.nextId;
    for (const d of model.defs.values()) {
      top = Math.max(top, num(d.id) + 1 || 0);
      let nx = d.next;
      for (const m of [d.verts, d.edges, d.faces, d.insts, d.splines]) if (m) for (const k of m.keys()) nx = Math.max(nx, +k + 1);
      d.next = nx;
    }
    for (const m of [model.guides, model.dims, model.sections]) for (const k of m.keys()) top = Math.max(top, +k + 1);
    model.nextId = top;
  }
  function put(j) {
    const keepNext = new Map([...model.defs].map(([id, d]) => [id, d.next]));
    const nextId = model.nextId;
    model.restore(JSON.stringify(j));
    model.nextId = nextId;
    for (const [id, d] of model.defs) if (keepNext.has(id)) d.next = keepNext.get(id);
    claimIds();
    model.version++; model.dirty = true;
  }
  const live = {
    app: 'modelcraft', schema: SCHEMA, model, onApplied: null,
    get client() { return client; },
    onLocalChange(cb) { live.report = cb; },
    // presence (0.6 LC.19, session lc-model): only design review in a headset (xr/xr-session.js) sends any — heads, hands and
    // pointers of the people in VR; the client keeps the newest of each peer and hands them here
    others: new Map(),
    drawPresence(peers) { live.others = new Map(peers); },
    setPresence(p) { client?.setPresence(p); },
    peers() { return live.others; },
    nameOf(c) { const p = client && client.peers && client.peers.get(c); return (p && p.name) || t('live.someone'); },
    apply(ops) {
      // a tool previewing (push / pull, move: begin → preview… → commit) redraws from its starting copy on every frame:
      // others' edits go into that copy too, so neither the preview nor its step loses them
      const base = model._base;
      if (base !== null && base !== undefined) { const b = JSON.parse(base); CORE.apply(b, ops); model._base = JSON.stringify(b); }
      const keep = model._base;
      const j = json();
      CORE.apply(j, ops);
      put(j);
      model._base = keep;
      if (!queued) { queued = true; Promise.resolve().then(() => { queued = false; live.onApplied?.(); }); }
    },
    invert(ops) { return CORE.invert(json(), ops); },
    touched: (ops) => CORE.touched(ops),
    /** The host's checks: no placement of a definition that is gone, and no group placed inside itself. */
    validate(ops) {
      const j = CORE.apply(json(), ops);
      const ids = new Set(j.defs.map((d) => d.id));
      if (!ids.has('root')) return 'invalid';
      const kids = new Map(j.defs.map((d) => [d.id, (d.insts || []).map((i) => i.def)]));
      for (const [, list] of kids) for (const d of list) if (!ids.has(d)) return 'invalid';
      const state = new Map();
      const visit = (id) => { if (state.get(id) === 1) return false; if (state.get(id) === 2) return true; state.set(id, 1); for (const k of kids.get(id) || []) if (!visit(k)) return false; state.set(id, 2); return true; };
      for (const id of ids) if (!visit(id)) return 'invalid';
      return null;
    },
    snapshot() { return pack({ v: SCHEMA, model: model.snapshot() }); },
    load(bytes) {
      const s = unpack(bytes);
      if (!s || s.v !== SCHEMA || typeof s.model !== 'string') throw new Error('live snapshot: unknown format');   // i18n-ignore (protocol)
      model.restore(s.model);
      model.undoStack = []; model.redoStack = [];
      claimIds();
      model.version++;
      live.onApplied?.('load');
    },
    hash() { const j = json(); delete j.nextId; for (const d of j.defs) delete d.next; return canonical(j); },
    /** One finished step of the model (its copies before and after). */
    step(label, before, after) {
      if (!client || before === after) return;
      const a = JSON.parse(before), b = JSON.parse(after);
      const ops = CORE.diff(a, b);
      if (!ops.length) return;
      const mark = { o: 'g', g: 's' + (++g) };
      client.localChange({ label: label || '', ops: [mark, ...ops], inverse: [mark, ...CORE.diff(b, a)] });
    },
    bind(c) {
      client = c;
      model.undoStack = []; model.redoStack = [];
      claimIds();
      c.on('welcome', () => claimIds());
      // every step of the model goes out: change() and commit() leave it on top of the undo stack
      const orig = { change: model.change, commit: model.commit, undo: model.undo, redo: model.redo, canUndo: model.canUndo, canRedo: model.canRedo };
      const sendTop = () => { const top = model.undoStack[model.undoStack.length - 1]; if (top && !top.live) { top.live = true; live.step(top.label, top.before, top.after); } };
      model.change = function (label, fn, scope) { const r = orig.change.call(model, label, fn, scope); sendTop(); return r; };
      model.commit = function (label) { const r = orig.commit.call(model, label); sendTop(); return r; };
      const topLabel = (st) => (st.length ? st[st.length - 1].label || '' : '');
      model.undo = () => { const l = topLabel(client.undoStack); return client.undo() ? l : null; };
      model.redo = () => { const l = topLabel(client.redoStack); return client.redo() ? l : null; };
      model.canUndo = () => !!client && (client.canUndo() || client.pending.some((p) => p.kind === 'do'));
      model.canRedo = () => !!client && client.canRedo();
      live.restore = () => { for (const k of Object.keys(orig)) delete model[k]; };
      return live;
    },
    unbind() { live.restore?.(); releaseIds(); model.undoStack = []; model.redoStack = []; client = null; },
    afterApply() { if (!queued) { queued = true; Promise.resolve().then(() => { queued = false; live.onApplied?.(); }); } },
  };
  return live;
}

/** Studio's entry point: the adapter for the model open in this window (window.modelcraft), or null. */
export function createLiveAdapter({ host } = {}) {
  const app = globalThis.modelcraft;
  if (!app || !app.model) return null;
  const a = createLive(app.model);
  a.onApplied = () => { try { app.afterHistory?.(); app.view?.invalidate?.(); } catch (e) { console.error(e); } };
  const lv = host && host.live;
  if (lv && lv.on) {
    let offs = [];
    const say = (m) => { try { app.print ? app.print(m) : null; } catch { /* no message line */ } };
    const off = lv.on((c) => {
      if (c && c.adapter === a) { a.bind(c); offs = messages(c, say); app.live = a; }
      else if (!c && a.client) { offs.forEach((f) => f()); a.unbind(); app.live = null; off(); }
    });
  }
  return a;
}

/** A browser opening a link with #live=<code> (a page a host serves on the LAN) or ?live=<ROOM>#<secret> joins. */
export async function joinFromPage(app, fileHost, w = globalThis) {
  const lv = fileHost && fileHost.live;
  if (!lv || !app) return false;
  let code = null, link = null, url;
  try { code = lv.pageCode(); } catch { code = null; }
  if (!code && w.location) {
    const q = new URLSearchParams(w.location.search), room = (q.get('live') || '').toUpperCase(), secret = (w.location.hash || '').slice(1);
    if (/^[0-9A-Z]{8}$/.test(room) && /^[A-Za-z0-9_-]{22,43}$/.test(secret)) {
      link = { room, secret };
      url = (w.location.protocol === 'https:' ? 'wss://' : 'ws://') + w.location.host + '/live/relay/join/' + room;
      q.delete('live');
      try { w.history.replaceState(w.history.state, '', w.location.pathname + (q.toString() ? '?' + q : '')); } catch { /* no history */ }
    }
  }
  if (!code && !link) return false;
  const adapter = createLiveAdapter({ host: fileHost });
  if (!adapter) return false;
  await lv.join({ adapter, name: t('live.guest'), code: code || undefined, link: link || undefined, url });
  return true;
}

/** The session's messages, in the app's words, to its status line (`say`). Returns the functions that stop them. */
function messages(c, say) {
  return [
    c.on('refused', (r) => say(t(r.reason === 'locked' ? 'live.refused.locked' : r.reason === 'role' ? 'live.refused.role' : 'live.refused', { what: r.label || '', name: r.byName || t('live.someone') }))),
    c.on('undo-skipped', (r) => say(t('live.undo_skipped', { what: r.label || '', name: r.byName || t('live.someone') }))),
    c.on('ended', () => say(t('live.ended'))),
    c.on('status', ({ status, first }) => {
      // a drop that heals within a moment (or the socket closing as the host ends) is not worth a message
      if (status === 'live') { if (first !== false || c.toldDrop) say(t('live.status.live')); c.toldDrop = false; }
      else if (status === 'reconnecting') setTimeout(() => { if (c.status === 'reconnecting') { c.toldDrop = true; say(t('live.status.reconnecting')); } }, 1500);
      else if (status === 'waiting') say(t('live.status.waiting'));
    }),
  ];
}

/** Stable text for a document (object keys sorted): what the convergence tests compare. */
function canonical(v) {
  const walk = (x) => (Array.isArray(x) ? x.map(walk) : x && typeof x === 'object' ? Object.fromEntries(Object.keys(x).sort().map((k) => [k, walk(x[k])])) : x);
  return JSON.stringify(walk(v));
}
