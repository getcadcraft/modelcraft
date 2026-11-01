/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scale-dialog.js — Scale by factors… (0.8 SU.934; maths in scale-nu.js). One <dialog>: a factor for each axis (1.015, 101.5 %,
 * +1.5 %; "keep proportions" copies the first to the other two), the point that stays put, and the shrinkage allowance: a percent
 * per axis for a cast part, which fills the factors (pattern = size + that percent, or the exact 1 / (1 − s)). The line under the
 * fields shows the selection's size now and after. ctx = {root, t, model, path, sel, units, formatLength, label, done}.
 */
import { el } from './ui-util.js';
import { parseFactor, parseFactors, shrinkFactor, selectionBox, anchorPoint, scaleSelection } from './scale-nu.js';

const KEEP = 'modelcraft.shrink';
const readKeep = () => { try { const v = JSON.parse(globalThis.localStorage?.getItem(KEEP) || 'null'); return v && typeof v === 'object' ? v : {}; } catch { return {}; } };
const writeKeep = (v) => { try { globalThis.localStorage?.setItem(KEEP, JSON.stringify(v)); } catch { /* blocked: a convenience only */ } };

export function openScaleDialog(ctx) {
  const { root, t, model, path, sel, formatLength } = ctx;
  const box = selectionBox(model, path, sel);
  if (!box) return null;
  const keep = readKeep();
  const input = (data, value, extra = {}) => el('input', { type: 'text', className: 'mc-input', value, autocomplete: 'off', inputMode: 'decimal', dataset: { [data]: '' }, ...extra });
  const fx = ['x', 'y', 'z'].map((a) => input('sf' + a.toUpperCase(), '1', { 'aria-label': t('sx.scale.axis.' + a) }));
  const sp = ['x', 'y', 'z'].map((a, i) => input('ss' + a.toUpperCase(), String(Array.isArray(keep.pct) && Number.isFinite(keep.pct[i]) ? keep.pct[i] : 1.5), { 'aria-label': t('sx.scale.axis.' + a) }));
  const same = el('input', { type: 'checkbox', dataset: { sUniform: '' } }); same.checked = true;
  const sameS = el('input', { type: 'checkbox', dataset: { sShrinkSame: '' } }); sameS.checked = keep.same !== false;
  const anchor = el('select', { className: 'mc-select', dataset: { sAnchor: '' } },
    ...['center', 'min', 'base', 'origin'].map((k) => el('option', { value: k }, t('sx.scale.anchor.' + k))));
  const mode = el('select', { className: 'mc-select', dataset: { sMode: '' } }, ...['add', 'exact'].map((k) => el('option', { value: k }, t('sx.scale.mode.' + k))));
  mode.value = keep.mode === 'exact' ? 'exact' : 'add';
  const sizeNow = [0, 1, 2].map((i) => box.max[i] - box.min[i]);
  const line = el('p', { className: 'mc-note', role: 'status', dataset: { sLine: '' } });
  const err = el('p', { className: 'mc-note', role: 'alert', dataset: { sErr: '' } });
  const sizes = (a) => a.map((v) => formatLength(v, model.units)).join(' × ');
  const refresh = () => {
    const fs = fx.map((i) => parseFactor(i.value));
    line.textContent = fs.every((f) => f !== null) ? t('sx.scale.size', { from: sizes(sizeNow), to: sizes(sizeNow.map((v, i) => v * fs[i])) }) : '';
  };
  fx[0].addEventListener('input', () => { if (same.checked) { fx[1].value = fx[2].value = fx[0].value; } refresh(); });
  for (const i of [fx[1], fx[2]]) i.addEventListener('input', () => { if (same.checked) same.checked = false; refresh(); });
  same.addEventListener('change', () => { if (same.checked) { fx[1].value = fx[2].value = fx[0].value; refresh(); } });
  sp[0].addEventListener('input', () => { if (sameS.checked) sp[1].value = sp[2].value = sp[0].value; });
  const fill = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { sFill: '' } }, t('sx.scale.shrink.use'));
  fill.addEventListener('click', () => {
    const pcts = sp.map((i) => Number(String(i.value).replace(',', '.')));
    const fs = pcts.map((p) => (Number.isFinite(p) ? shrinkFactor(p, mode.value) : null));
    if (fs.some((f) => f === null)) { err.textContent = t('sx.scale.shrink.bad'); return; }
    err.textContent = '';
    fx.forEach((i, k) => { i.value = String(+fs[k].toFixed(6)); });
    same.checked = fs[0] === fs[1] && fs[1] === fs[2];
    writeKeep({ pct: pcts, same: sameS.checked, mode: mode.value });
    refresh();
  });
  const field = (label, ...kids) => el('div', { className: 'mc-row' }, el('span', { className: 'k' }, label), ...kids);
  const form = el('form', { method: 'dialog' },
    el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'mc-sf-h' }, t('sx.scale.h'))),
    el('div', { className: 'mc-dialog-text mc-props' },
      field(t('sx.scale.factors'), ...fx),
      el('label', { className: 'mc-check' }, same, ' ', t('sx.scale.uniform')),
      field(t('sx.scale.about'), anchor),
      el('fieldset', { className: 'mc-fieldset' }, el('legend', {}, t('sx.scale.shrink')),
        el('p', { className: 'mc-note' }, t('sx.scale.shrink.note')),
        field(t('sx.scale.shrink.pct'), ...sp),
        el('label', { className: 'mc-check' }, sameS, ' ', t('sx.scale.uniform')),
        field(t('sx.scale.mode'), mode), fill),
      line, err),
    el('div', { className: 'mc-dialog-foot' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('app.btn.cancel')),
      el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', dataset: { sApply: '' } }, t('sx.scale.apply'))));
  const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-sf-h', dataset: { dialog: 'scale-by' } }, form);
  let go = null;
  form.addEventListener('submit', (e) => {
    const fs = parseFactors(fx.map((i) => i.value.trim()).join(';'));
    if (!fs) { e.preventDefault(); err.textContent = t('sx.scale.bad'); fx[0].focus(); return; }
    go = fs;
  });
  dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key="cancel"]')) dlg.close(); });
  dlg.addEventListener('close', () => {
    dlg.remove();
    let n = 0;
    if (go) {
      try { n = scaleSelection(model, path, sel, go, anchorPoint(box, anchor.value), ctx.label); } catch (e) { ctx.say?.(e.message); }
    }
    ctx.done(go ? { n, factors: go } : null);
  });
  refresh();
  root.append(dlg);
  dlg.showModal();
  fx[0].focus(); fx[0].select();
  return dlg;
}
