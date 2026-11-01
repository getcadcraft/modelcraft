/* SPDX-License-Identifier: Apache-2.0 */
/**
 * doc-data.js — add-on data kept in the .modelcraft file (0.8 model-08; asked for by the Material flow add-on, sx-flow § Next
 * step 1). DOM-free.
 *
 *   file `addons` (optional top-level key, like `info` and `images`): { "<addon id>": { "<key>": <JSON> } }
 *
 * An add-on keeps its own data there with `docData(id)` → {data(key), setData(key, value), keys(), onOpen(fn)}; `data` returns a
 * copy (null when unset), `setData(key, null)` removes the key, `onOpen(fn)` runs after a file opens or New starts a fresh
 * model (read `data()` again then). A change marks the model unsaved, and is outside undo (the add-on owns its own undo).
 *
 * Pass-through: whatever the file holds is kept and written back as it came, for an add-on that is switched off, not installed
 * or not yet loaded (the same rule as CadCraft's add-on data), so opening and saving a model on a machine without the add-on
 * loses nothing. Untrusted on open: ids and keys are short plain strings, values must be JSON, one add-on is cut off at
 * MAX_ADDON_BYTES (it is dropped whole and `dropped` says which, rather than kept half).
 */
export const MAX_ADDON_BYTES = 8 * 1024 * 1024;
export const MAX_ADDONS = 64;
const SAFE = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
const KEY = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,63}$/;

const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const size = (v) => { try { return JSON.stringify(v).length; } catch { return Infinity; } };

export class DocData {
  /** @param {() => void} dirty called when an add-on changes its data (the app marks the model unsaved) */
  constructor(dirty = () => {}) {
    this.dirty = dirty;
    this.map = new Map();        // addon id -> {key: json}
    this.open = new Map();       // addon id -> Set<fn>
    this.dropped = [];           // ids left out of the last load, with the reason
  }

  /** A fresh model: no data. Open listeners hear it. */
  clear() { this.map.clear(); this.dropped = []; this.fire(); }

  /** A file's `addons` (untrusted). Open listeners hear it. */
  load(raw) {
    this.map.clear();
    this.dropped = [];
    if (isObj(raw)) {
      for (const [id, v] of Object.entries(raw)) {
        if (this.map.size >= MAX_ADDONS) { this.dropped.push({ id, why: 'count' }); continue; }
        if (!SAFE.test(id) || !isObj(v)) { this.dropped.push({ id, why: 'shape' }); continue; }
        const out = {};
        for (const [k, x] of Object.entries(v)) if (KEY.test(k) && x !== undefined) out[k] = x;
        if (size(out) > MAX_ADDON_BYTES) { this.dropped.push({ id, why: 'size' }); continue; }
        if (Object.keys(out).length) this.map.set(id, out);
      }
    }
    this.fire();
  }

  /** What the file keeps (null when nothing: the key is not written). */
  toJSON() {
    if (!this.map.size) return null;
    const out = {};
    for (const [id, v] of this.map) out[id] = v;
    return out;
  }

  fire() { for (const set of this.open.values()) for (const fn of [...set]) { try { fn(); } catch (e) { try { console.warn('add-on onOpen:', e); } catch { /* no console */ } } } }

  /** The data door for one add-on (what api.doc is). */
  forAddon(id) {
    if (!SAFE.test(String(id))) throw new Error('doc data: bad add-on id');   // i18n-ignore: a programming error in an add-on
    const self = this;
    return {
      data(key) { const v = self.map.get(id)?.[key]; return v === undefined ? null : JSON.parse(JSON.stringify(v)); },
      keys() { return Object.keys(self.map.get(id) || {}); },
      setData(key, value) {
        if (!KEY.test(String(key))) return false;
        const cur = self.map.get(id) || {};
        const next = { ...cur };
        if (value === null || value === undefined) delete next[key];
        else {
          let copy;
          try { copy = JSON.parse(JSON.stringify(value)); } catch { return false; }
          if (copy === undefined) return false;
          next[key] = copy;
        }
        if (size(next) > MAX_ADDON_BYTES) return false;
        if (JSON.stringify(cur) === JSON.stringify(next)) return true;
        if (Object.keys(next).length) {
          if (!self.map.has(id) && self.map.size >= MAX_ADDONS) return false;
          self.map.set(id, next);
        } else self.map.delete(id);
        self.dirty();
        return true;
      },
      onOpen(fn) {
        if (typeof fn !== 'function') return () => {};
        if (!self.open.has(id)) self.open.set(id, new Set());
        self.open.get(id).add(fn);
        return () => self.open.get(id)?.delete(fn);
      },
    };
  }
}
