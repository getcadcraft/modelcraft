/* SPDX-License-Identifier: Apache-2.0 */
/**
 * massing-mc-ui.js: the "Massing to BimCraft" dialog (0.10 BK.44; massing-mc.js has the rule). Export menu > Massing to BimCraft…
 * Lists the solids that would go (the selected top-level groups and components, else all of them) with their floors, footprint,
 * gross floor area and volume at the floor height typed, says which are simplified and why, then sends the IFC to BimCraft in a
 * new tab (handoff.js, when BimCraft is open in this area and takes a mass) or saves it as a file.
 *   openMassing({ root, t, model, sel () -> [iid], units, base () -> name, download(text, name, type), print, bimUrl, bimApp, focusView })
 */
import { el } from './ui-util.js';
import { formatLength, parseLength, formatArea, formatVolume } from './units.js';
import { massingFile, DEFAULT_FLOOR_HEIGHT } from './massing-mc.js';
import { sendHandoff } from './handoff.js';

let lastHeight = DEFAULT_FLOOR_HEIGHT;

export function openMassing(ctx) {
  const { root, t, model } = ctx, u = ctx.units();
  const iids = ctx.sel();
  const setIn = el('input', { type: 'text', className: 'mc-input', value: ctx.base(), maxLength: 80, 'data-ms-set': '', 'aria-label': t('massing.set') });
  const fhIn = el('input', { type: 'text', className: 'mc-input', value: formatLength(lastHeight, u), autocomplete: 'off', 'data-ms-height': '', 'aria-label': t('massing.height') });
  const list = el('div', { className: 'mc-massing-list', 'data-ms-list': '' }), err = el('p', { className: 'mc-note', role: 'alert', 'data-ms-err': '' });
  let made = null;
  const build = () => {
    const fh = parseLength(fhIn.value, u);
    made = null; err.textContent = '';
    if (fh === null || !(fh >= 1) || fh > 20) { err.textContent = t('massing.err.height'); list.replaceChildren(); return null; }
    lastHeight = fh;
    made = massingFile(model, { iids, floorHeight: fh, set: setIn.value, name: ctx.base() });
    const rows = made.report.map((m) => el('tr', { 'data-ms-row': '' },
      el('td', {}, m.name || t('massing.unnamed')),
      ...(m.failed ? [el('td', { colSpan: 5 }, t('massing.failed'))] : [
        el('td', { 'data-ms-floors': '' }, String(m.floors)), el('td', { 'data-ms-foot': '' }, formatArea(m.footprint, u)), el('td', { 'data-ms-gross': '' }, formatArea(m.gross, u)), el('td', {}, formatVolume(m.volume, u)),
        el('td', { 'data-ms-note': '' }, m.simplified ? t('massing.simplified') + ' ' + m.notes.map((n) => t('massing.note.' + n)).join(' ') : t('massing.exact'))])));
    const head = el('tr', {}, ...['name', 'floors', 'foot', 'gross', 'volume', 'shape'].map((k) => el('th', { scope: 'col' }, t('massing.col.' + k))));
    list.replaceChildren(made.report.length ? el('table', { className: 'mc-massing-table' }, el('thead', {}, head), el('tbody', {}, rows)) : el('p', { className: 'mc-note' }, t('massing.none')));
    return made.text ? made : null;
  };
  fhIn.addEventListener('change', build); setIn.addEventListener('change', build);
  const save = () => { const m = build(); if (!m) return; ctx.download(m.text, m.fileName, 'application/x-step'); ctx.print(t('massing.saved', { file: m.fileName, n: m.counts.masses })); dlg.close(); };
  const send = async () => {
    const m = build();
    if (!m) return;
    try {
      await sendHandoff(ctx.bimUrl, new File([m.text], m.fileName, { type: 'application/x-step' }), 'modelcraft', { kind: 'mass', n: m.counts.masses });
      ctx.print(t('massing.sent', { app: ctx.bimApp, n: m.counts.masses })); dlg.close();
    } catch (e) { err.textContent = t(e.code === 'blocked' ? 'massing.err.blocked' : 'massing.err.send'); }
  };
  const form = el('form', { method: 'dialog' },
    el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-ms-h' }, t('massing.h'))),
    el('p', { className: 'mc-note' }, t(iids.length ? 'massing.intro.sel' : 'massing.intro.all')),
    el('label', { className: 'mc-field' }, el('span', {}, t('massing.set')), setIn),
    el('label', { className: 'mc-field' }, el('span', {}, t('massing.height')), fhIn),
    list, err,
    el('p', { className: 'mc-note' }, t('massing.rule')),
    el('div', { className: 'mc-dialog-foot' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' }, onclick: () => dlg.close() }, t('app.btn.cancel')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ms-save': '', onclick: save }, t('massing.save')),
      ...(ctx.bimUrl ? [el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-ms-send': '', onclick: send }, t('massing.send', { app: ctx.bimApp }))] : [])));
  const dlg = el('dialog', { className: 'mc-dialog mc-massing', 'aria-labelledby': 'mc-ms-h', 'data-ms-dialog': '' }, form);
  form.addEventListener('submit', (e) => { e.preventDefault(); build(); });
  dlg.addEventListener('close', () => { dlg.remove(); ctx.focusView?.(); });
  root.append(dlg);
  dlg.showModal();
  build();
  return { dlg, build, get made() { return made; } };
}
