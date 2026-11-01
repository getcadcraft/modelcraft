/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-info-ui.js — the Model info… dialog (0.7.1 71.13; data in model-info.js). One <dialog> with a list of sections
 * on the left (role=tablist, arrow keys) and the section on the right:
 *
 *   Units       the model's length unit — the status bar's picker (ui.units) set through its own change handler
 *   Precision and text (0.8 D8.6)  length precision, dimension text size and the 3D text tool's starting height: the file's `format`
 *   Location    latitude, longitude, time zone — the Style panel's sun fields (ui.sunLat…), so the sun, shadows and renders
 *   Display     faces, edges, shadows — the Style panel's (ui.mode, ui.edges, ui.shadows)
 *   Rendering   whether the file keeps its own render settings; opens Render a picture…
 *   About       author, organization, description: the file's `info` (cleanInfo), an unsaved change, outside undo
 *   Components  each component definition and how many times it is placed
 *   Statistics  modelStats()
 *   File        name, the file version Save writes, the size Save would write, saved or not
 *
 * Every setting is the one the page already has: the dialog writes the page's own control and fires its change event,
 * so nothing is kept twice. ctx = {root, t, model, ui, view, getInfo, setInfo, fileName, fileText, renderSettings,
 * openRender, materials, focusView}.
 */
import { el, bytes } from './ui-util.js';
import { formatLength, parseLength } from './units.js';
import { cleanInfo, cleanFormat, INFO_LIMITS, modelStats, componentList, saveVersion } from './model-info.js';

const SECTIONS = ['units', 'format', 'location', 'display', 'rendering', 'about', 'components', 'stats', 'file'];
const STATS = ['faces', 'edges', 'curves', 'meshes', 'meshFaces', 'groups', 'components', 'placements', 'dims', 'guides', 'lights', 'sections', 'scenes', 'tags', 'storeys', 'materials', 'images'];
let lastTab = 'units';

export function openModelInfo(ctx) {
  const { root, t, model, ui, view } = ctx;
  const n = (x) => Number(x).toLocaleString();
  /** Set one of the page's own controls and let its handlers run. */
  const drive = (ctl, value, ev = 'change') => {
    if (!ctl) return;
    if (ctl.type === 'checkbox') ctl.checked = !!value; else ctl.value = String(value);
    ctl.dispatchEvent(new Event(ev, { bubbles: true }));
  };
  const copySelect = (src, data) => {
    const s = el('select', { className: 'mc-select', dataset: { [data]: '' } });
    for (const o of src.options) s.append(el('option', { value: o.value }, o.textContent));
    s.value = src.value;
    return s;
  };
  const field = (id, label, input, hint) => [el('label', { for: id }, label), Object.assign(input, { id }), hint ? el('p', { className: 'mc-note mc-mi-wide' }, hint) : null];

  const pane = {};
  // Units
  const units = copySelect(ui.units, 'miUnits');
  units.addEventListener('change', () => { drive(ui.units, units.value); });
  pane.units = [el('div', { className: 'mc-props' }, ...field('mc-mi-units', t('mi.units.length'), units)), el('p', { className: 'mc-note' }, t('mi.units.hint'))];
  const numIn = (data, min, max, step, value) => el('input', { type: 'number', className: 'mc-input', min, max, step, value: String(value), dataset: { [data]: '' } });
  // Precision and text (0.8 D8.6): the file's `format`, outside undo. Blank = the app's own (1/16", 1 mm decimal …).
  const fmt = ctx.getFormat() || {};
  const imperial = model.units === 'ft-in' || model.units === 'in';
  const precSel = el('select', { className: 'mc-select', dataset: { miPrec: '' } });
  precSel.append(el('option', { value: '' }, t('mi.fmt.default')));
  for (const v of imperial ? [1, 2, 4, 8, 16, 32, 64] : [0, 1, 2, 3, 4, 5, 6]) precSel.append(el('option', { value: String(v) }, imperial ? t('mi.fmt.frac', { d: v }) : t('mi.fmt.places', { n: v })));
  precSel.value = fmt.precision !== undefined && [...precSel.options].some((o) => o.value === String(fmt.precision)) ? String(fmt.precision) : '';
  const dimSize = numIn('miDimSize', 8, 32, 1, fmt.dimSize ?? 12);
  const txtH = el('input', { type: 'text', className: 'mc-input', value: fmt.textHeight ? formatLength(fmt.textHeight, model.units) : '', placeholder: t('mi.fmt.default'), autocomplete: 'off', dataset: { miTextH: '' } });
  const saveFormat = () => {
    const precision = precSel.value === '' ? undefined : Number(precSel.value);
    const size = Number(dimSize.value);
    const h = txtH.value.trim() === '' ? undefined : parseLength(txtH.value, model.units);
    ctx.setFormat(cleanFormat({ precision, dimSize: Number.isInteger(size) && size !== 12 ? size : undefined, textHeight: h ?? undefined }));
    const f = ctx.getFormat() || {};
    dimSize.value = String(f.dimSize ?? 12); txtH.value = f.textHeight ? formatLength(f.textHeight, model.units) : '';
  };
  for (const x of [precSel, dimSize, txtH]) x.addEventListener('change', saveFormat);
  pane.format = [el('div', { className: 'mc-props' }, ...field('mc-mi-prec', t('mi.fmt.precision'), precSel), ...field('mc-mi-dimsize', t('mi.fmt.dimsize'), dimSize), ...field('mc-mi-texth', t('mi.fmt.texth'), txtH)),
    el('p', { className: 'mc-note' }, t('mi.fmt.hint'))];
  // Location
  const sun = view.style.sun || {};
  const lat = numIn('miLat', -90, 90, 0.01, sun.lat), lon = numIn('miLon', -180, 180, 0.01, sun.lon), tz = numIn('miTz', -14, 14, 0.5, sun.tz);
  const place = () => {
    ui.sunLat.value = lat.value; ui.sunLon.value = lon.value;
    drive(ui.sunTz, tz.value);
    const s = view.style.sun;   // read back what the page kept (it clamps)
    lat.value = String(s.lat); lon.value = String(s.lon); tz.value = String(s.tz);
  };
  for (const x of [lat, lon, tz]) x.addEventListener('change', place);
  pane.location = [el('div', { className: 'mc-props' }, ...field('mc-mi-lat', t('mi.loc.lat'), lat), ...field('mc-mi-lon', t('mi.loc.lon'), lon), ...field('mc-mi-tz', t('mi.loc.tz'), tz)),
    el('p', { className: 'mc-note' }, t('mi.loc.hint'))];
  // Display
  const mode = copySelect(ui.mode, 'miMode');
  mode.addEventListener('change', () => drive(ui.mode, mode.value));
  const check = (src, data, label) => { const c = el('input', { type: 'checkbox', dataset: { [data]: '' } }); c.checked = src.checked; c.addEventListener('change', () => drive(src, c.checked)); return el('label', { className: 'mc-check' }, c, ' ', label); };
  pane.display = [el('div', { className: 'mc-props' }, ...field('mc-mi-mode', t('ui.style.faces'), mode),   // the Style panel's own words
    el('span', { className: 'k' }, t('ui.style.edges')), check(ui.edges, 'miEdges', t('ui.style.edges.show')),
    el('span', { className: 'k' }, t('ui.style.shadows')), check(ui.shadows, 'miShadows', t('ui.style.shadows.sun'))),
  el('p', { className: 'mc-note' }, t('mi.display.hint'))];
  // Rendering
  pane.rendering = [el('p', { className: 'mc-note', dataset: { miRenderState: ctx.renderSettings() ? 'own' : 'default' } }, t(ctx.renderSettings() ? 'mi.render.own' : 'mi.render.default')),
    el('p', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { miRender: '' }, onclick: () => { dlg.close(); ctx.openRender(); } }, t('mi.render.open')))];
  // About
  const info = ctx.getInfo() || {};
  const aboutIn = (k, data, tag = 'input') => el(tag, { className: tag === 'input' ? 'mc-input' : 'mc-input mc-mi-text', maxLength: INFO_LIMITS[k], value: info[k] || '', dataset: { [data]: '' }, ...(tag === 'textarea' ? { rows: 5 } : { type: 'text' }) });
  const author = aboutIn('author', 'miAuthor'), org = aboutIn('org', 'miOrg'), desc = aboutIn('description', 'miDesc', 'textarea');
  desc.value = info.description || '';   // a textarea's text is its value, not an attribute
  const saveAbout = () => ctx.setInfo(cleanInfo({ author: author.value, org: org.value, description: desc.value }));
  for (const x of [author, org, desc]) x.addEventListener('change', saveAbout);
  pane.about = [el('div', { className: 'mc-props mc-mi-about' }, ...field('mc-mi-author', t('mi.about.author'), author), ...field('mc-mi-org', t('mi.about.org'), org),
    el('label', { for: 'mc-mi-desc', className: 'mc-mi-wide' }, t('mi.about.desc')), Object.assign(desc, { id: 'mc-mi-desc' })), el('p', { className: 'mc-note' }, t('mi.about.hint'))];
  // Components
  const comps = componentList(model);
  pane.components = comps.length
    ? [el('p', { className: 'mc-note' }, t('mi.comps.count', { n: comps.length })),
      el('table', { className: 'mc-mi-table' }, el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, t('mi.comps.name')), el('th', { scope: 'col' }, t('mi.comps.placed')))),
        el('tbody', {}, ...comps.slice(0, 500).map((c) => el('tr', { dataset: { miComp: c.id } }, el('td', {}, c.name || c.id), el('td', { className: 'tabular' }, n(c.n)))))),
      comps.length > 500 ? el('p', { className: 'mc-note' }, t('mi.comps.more', { n: comps.length - 500 })) : null]
    : [el('p', { className: 'mc-note' }, t('mi.comps.none'))];
  // Statistics
  const st = modelStats(model, { materials: ctx.materials() });
  pane.stats = [el('dl', { className: 'mc-mi-dl' }, ...STATS.flatMap((k) => [el('dt', {}, t(k === 'meshFaces' ? 'mi.stats.mesh_faces' : 'mi.stats.' + k)), el('dd', { className: 'tabular', dataset: { miStat: k } }, n(st[k]))])),
    st.unused ? el('p', { className: 'mc-note' }, t('mi.stats.unused', { n: st.unused })) : null, el('p', { className: 'mc-note' }, t('mi.stats.hint'))];
  // File (the size is measured when the section opens: a big model takes a moment to write)
  const size = el('dd', { className: 'tabular', dataset: { miFileSize: '' } }, '…');
  pane.file = [el('dl', { className: 'mc-mi-dl' },
    el('dt', {}, t('mi.file.name')), el('dd', {}, ctx.fileName()),
    el('dt', {}, t('mi.file.version')), el('dd', { className: 'tabular', dataset: { miFileVersion: '' } }, String(saveVersion(model))),
    el('dt', {}, t('mi.file.size')), size,
    el('dt', {}, t('mi.file.state')), el('dd', {}, t(model.dirty ? 'mi.file.unsaved' : 'mi.file.saved'))),
  el('p', { className: 'mc-note' }, t('mi.file.hint'))];
  const measure = () => { try { size.textContent = bytes(new Blob([ctx.fileText()]).size); } catch { size.textContent = '—'; } };

  // the dialog: section list + section
  const tabs = SECTIONS.map((k) => el('button', { type: 'button', role: 'tab', id: 'mc-mi-tab-' + k, 'aria-controls': 'mc-mi-pane-' + k, className: 'mc-mi-tab', dataset: { miTab: k } }, t('mi.tab.' + k)));
  const panes = SECTIONS.map((k) => el('section', { role: 'tabpanel', id: 'mc-mi-pane-' + k, 'aria-labelledby': 'mc-mi-tab-' + k, className: 'mc-mi-pane', dataset: { miPane: k } },
    el('h3', { className: 'mc-mi-h' }, t('mi.tab.' + k)), ...pane[k]));
  const show = (k, focus) => {
    lastTab = k;
    tabs.forEach((b) => { const on = b.dataset.miTab === k; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
    panes.forEach((p) => { p.hidden = p.dataset.miPane !== k; });
    if (k === 'file') measure();
  };
  const list = el('div', { className: 'mc-mi-tabs', role: 'tablist', 'aria-orientation': 'vertical', 'aria-label': t('mi.title') }, ...tabs);
  list.addEventListener('click', (e) => { const b = e.target.closest('[data-mi-tab]'); if (b) show(b.dataset.miTab); });
  list.addEventListener('keydown', (e) => {
    const i = SECTIONS.indexOf(lastTab);
    const j = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (i + 1) % SECTIONS.length : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? (i + SECTIONS.length - 1) % SECTIONS.length
      : e.key === 'Home' ? 0 : e.key === 'End' ? SECTIONS.length - 1 : -1;
    if (j < 0) return;
    e.preventDefault();
    show(SECTIONS[j], true);
  });
  const dlg = el('dialog', { className: 'mc-dialog mc-mi', 'aria-labelledby': 'mc-mi-h', dataset: { modelInfo: '', dialog: 'model-info' } },
    el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-mi-h' }, t('mi.title'))),
    el('div', { className: 'mc-mi-body' }, list, el('div', { className: 'mc-mi-panes' }, ...panes)),
    el('div', { className: 'mc-dialog-foot' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { miClose: '' }, onclick: () => dlg.close() }, t('mi.close'))));
  dlg.addEventListener('close', () => { dlg.remove(); ctx.focusView(); });
  root.append(dlg);
  show(SECTIONS.includes(lastTab) ? lastTab : 'units');
  dlg.showModal();
  tabs[SECTIONS.indexOf(lastTab)].focus();
  return dlg;
}
