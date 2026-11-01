/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — protocol only. */
/**
 * undo-hook.js — ModelCraft's end of the project-level undo (0.8 round 4, EG.77; docs/spikes/EG.77_PART_4.md, part-model_PART_4). The reporter is undo-report.js
 * (byte-identical copy of public_html/assets/js/undo-report.js). Each finished step is told to the window it runs in:
 *
 *   window event 'cc-undo-report' { detail: { type: 'edit.done', data: { step, label, depth, kind } } }   (Studio's host forwards it to the channel)
 *   window.ccUndoReporter.onMessage('undo.probe' | 'undo.run', data) → the reply Studio's journal waits for   (null = not ours)
 *
 * A step is "done" when model.change, model.commit (a finished live preview) or model.amendLast leaves the undo stack deeper than before. The model's own
 * undo and redo are told too. A stack swapped under the reporter (opening a file) makes the probe say "moved" and Studio skips this window, never forces it.
 */
import { makeUndoReporter } from './undo-report.js';

export function mountUndoHook({ model, win = typeof window !== 'undefined' ? window : null }) {
  const depth = () => model.undoStack.length;
  const post = (type, data) => { try { win?.dispatchEvent(new CustomEvent('cc-undo-report', { detail: { type, data } })); } catch { /* no window */ } };
  let running = false;
  const rep = makeUndoReporter({ depth, post, undoOne: () => { running = true; try { model.undo(); } finally { running = false; } }, label: () => model.undoStack.at(-1)?.label || '' });
  let last = depth();
  const settle = () => {
    const d = depth();
    if (d > last && !running) rep.stepDone(model.undoStack.at(-1)?.label || '');
    last = d;
  };
  for (const name of ['change', 'commit']) {
    const f = model[name].bind(model);
    model[name] = (...a) => { const r = f(...a); settle(); return r; };
  }
  const undo0 = model.undo.bind(model), redo0 = model.redo.bind(model);
  model.undo = (...a) => { const r = undo0(...a); last = depth(); if (r !== null && !running) rep.undone(); return r; };
  model.redo = (...a) => { const r = redo0(...a); last = depth(); if (r !== null) rep.redone(); return r; };
  if (win) win.ccUndoReporter = rep;
  return rep;
}
