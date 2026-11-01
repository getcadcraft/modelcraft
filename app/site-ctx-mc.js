/* SPDX-License-Identifier: Apache-2.0 */
/**
 * site-ctx-mc.js — CivilCraft's "Address to site" file taken as SUGGESTIONS in ModelCraft (0.8 EG.63, session part-model_PART_4; civil_PART_4's reader is
 * site-context.js, byte-identical across apps). A `.ccsite.json` handed over (?handoff=…) or opened/dropped lists the buildings and the parcel round the
 * address, a checkbox each, the height typed for buildings whose height the source did not give; flood, zoning and soil are information. Nothing is added
 * until "Add the ticked ones": every ticked building becomes an extruded mass (one component, one placement), the parcel becomes a site line, ALL in one undo step.
 * Coordinates arrive in metres east/north of the address point; the model is in metres, so the address point sits at the origin.
 *
 *   isSiteFile(file) → boolean
 *   buildSite(model, kept, { defaultHeight, names }) → { masses, parcel }      call inside model.change; DOM-free
 *   mountSiteContext({ model, t, print, afterHistory, keepSite?, host? }) → { receive(file) → Promise<boolean> }   true = a site file, handled here
 */
import { readContext, proposals, pick, buildSite as buildSiteRecord } from './site-context.js';
import { addPolygon, addEdge, pushPull } from './model.js';
import { ident } from './vec.js';

export const isSiteFile = (file) => /\.ccsite\.json$/i.test(file?.name || '');

const area = (P) => { let s = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; };
const ccw = (P) => (area(P) < 0 ? P.slice().reverse() : P);

/** Build the accepted proposals into the model. Returns the placed instances. Call inside model.change. */
export function buildSite(model, kept, { defaultHeight = 6, names = {} } = {}) {
  const ctx = model.context([]).def;
  const out = { masses: 0, parcel: 0, ids: [] };
  const buildings = kept.filter((p) => p.kind === 'building' && p.ring && p.ring.length >= 3);
  if (buildings.length) {
    const c = model.newDef('component', model.uniqueName(names.buildings || 'site'));
    for (const p of buildings) {
      const ring = ccw(p.ring).map((q) => [q[0], q[1], 0]);
      const had = new Set(c.faces.keys());
      addPolygon(c, ring);
      const fid = [...c.faces.keys()].filter((k) => !had.has(k)).pop();   // the face just drawn
      if (fid === undefined) continue;
      pushPull(c, fid, p.height > 0 ? p.height : defaultHeight);
      out.masses++;
    }
    c.starter = 'site:buildings';
    out.ids.push(model.place(ctx, c.id, ident()));
  }
  const parcel = kept.find((p) => p.kind === 'parcel' && p.ring && p.ring.length >= 3);
  if (parcel) {
    const d = model.newDef('component', model.uniqueName(names.parcel || 'site'));
    const ring = ccw(parcel.ring).map((q) => [q[0], q[1], 0]);
    for (let i = 0; i < ring.length; i++) addEdge(d, ring[i], ring[(i + 1) % ring.length], { faces: false });
    d.starter = 'site:parcel';
    out.ids.push(model.place(ctx, d.id, ident()));
    out.parcel = 1;
  }
  return out;
}

export function mountSiteContext({ model, t, print, afterHistory = () => {}, units = () => 'm', keepSite = () => {} }) {
  async function receive(file) {
    if (!isSiteFile(file)) return false;
    const r = readContext(await file.text());
    if (!r.ok) { print(t('model.sitectx.bad.' + r.why)); return true; }
    show(r.ctx);
    return true;
  }
  function show(ctx) {
    document.querySelector('[data-sitectx-dialog]')?.remove();
    const doc = document, dlg = doc.createElement('dialog');
    dlg.className = 'mc-dialog'; dlg.dataset.sitectxDialog = ''; dlg.setAttribute('aria-label', t('model.sitectx.title'));
    dlg.style.cssText = 'max-width:34rem;width:calc(100vw - 2rem);max-height:80vh;overflow:auto';
    const add = (tag, text, cls) => { const n = doc.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; dlg.append(n); return n; };
    add('h2', t('model.sitectx.title'), 'mc-h');
    add('p', t('model.sitectx.lead', { lat: ctx.origin.lat.toFixed(5), lon: ctx.origin.lon.toFixed(5), n: ctx.items.length }), 'mc-note');
    const hl = doc.createElement('label'); hl.append(t('model.sitectx.height') + ' ');
    const hin = doc.createElement('input'); hin.type = 'text'; hin.className = 'mc-input'; hin.value = '6'; hin.dataset.sitectxHeight = ''; hl.append(hin); dlg.append(hl);
    const list = doc.createElement('div'); dlg.append(list);
    let props = proposals(ctx);
    const boxes = [];
    const fmt = (m) => (Math.round(m * 10) / 10) + ' m';
    const draw = () => {
      const h = parseFloat(String(hin.value).replace(',', '.'));
      props = proposals(ctx, { defaultHeight: Number.isFinite(h) && h > 0 ? h : 6 });
      list.replaceChildren(); boxes.length = 0;
      for (const p of props) {
        if (!p.adds) { const li = doc.createElement('p'); li.className = 'mc-note'; li.textContent = t('model.sitectx.info.' + p.kind, { label: p.label || p.name || p.id }); list.append(li); continue; }
        const lab = doc.createElement('label'); lab.style.display = 'block';
        const cb = doc.createElement('input'); cb.type = 'checkbox'; cb.checked = true; cb.value = p.id; cb.dataset.sitectxItem = p.id;
        const sp = doc.createElement('span');
        sp.textContent = p.kind === 'parcel' ? t('model.sitectx.item.parcel', { name: p.name || p.id }) : t('model.sitectx.item.building', { name: p.name || p.id, h: fmt(p.height) }) + (p.assumed ? ' ' + t('model.sitectx.assumed.' + p.assumed) : '');
        lab.append(cb, ' ', sp); list.append(lab); boxes.push(cb);
      }
    };
    hin.addEventListener('change', draw); draw();
    add('p', t('model.sitectx.attr', { a: ctx.attribution.join('; ') }), 'mc-note');
    const row = doc.createElement('div'), ok = doc.createElement('button'), no = doc.createElement('button');
    ok.type = no.type = 'button'; ok.className = 'btn-plot btn-sm-cc'; no.className = 'btn-line btn-sm-cc';
    ok.dataset.sitectxAdd = ''; ok.textContent = t('model.sitectx.add'); no.textContent = t('model.sitectx.cancel');
    ok.addEventListener('click', () => {
      const kept = pick(props, boxes.filter((b) => b.checked).map((b) => b.value));
      if (!kept.length) { print(t('model.sitectx.none')); return; }
      let res = null;
      model.change(t('model.sitectx.undo'), (m) => { res = buildSite(m, kept, { defaultHeight: props.find((p) => p.assumed === 'default')?.height || 6, names: { buildings: t('model.sitectx.name.buildings'), parcel: t('model.sitectx.name.parcel') } }); });
      afterHistory();
      // 0.8 EG.63: the model remembers the site it was placed in (address, sources with day + licence, outlines), saved with the file
      keepSite(buildSiteRecord({ address: ctx.address || '', origin: ctx.origin, radius: ctx.radius, items: ctx.items, attribution: ctx.attribution, sources: ctx.sources || [], info: ctx.info || [], now: ctx.made ? new Date(ctx.made + 'T12:00:00Z') : new Date() }));
      dlg.close(); dlg.remove();
      print(t('model.sitectx.done', { b: res?.masses || 0, p: res?.parcel || 0 }));
    });
    no.addEventListener('click', () => { dlg.close(); dlg.remove(); });
    row.append(ok, ' ', no); dlg.append(row);
    doc.body.append(dlg); dlg.showModal();
  }
  const api = { receive, show };
  if (typeof window !== 'undefined') window.modelcraftSiteContext = api;   // for tests
  return api;
}
