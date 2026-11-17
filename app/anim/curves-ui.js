/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anim/curves-ui.js — the graph editor (0.7 AN.1, session `anim`): the timeline's Curves view. Every number a property track
 * holds is one curve; tick the curves to show on the left, drag keys and their Bézier handles on the canvas. The sums are
 * anim/graph.js; the edits are render/anim.js (each drag is one step of the timeline's own undo).
 *
 *   mountCurves({t, anim() → anim, commit(next, msg?), time() → s, setTime(s), label(track, comp) → text, onPick(sel)})
 *     → {el, refresh(), resize(), frameAll(), picked() → [{track, t}]}
 *
 * Canvas keys: Home frames every shown curve, Delete removes the chosen keys, the arrows move them (Shift: ten times
 * further), +/− zoom. Mouse: drag a key or a handle; drag on empty space to choose the keys in a box (Shift adds); drag with
 * the middle button, or Alt, to pan; the wheel zooms (Ctrl: values only, Shift: time only).
 */
import { channels, sampleChannel, setEase, setHandleMode, setCycle, removeKey, moveKeys, EASES, HANDLE_MODES, CYCLES } from '../render/anim.js';
import { toPx, fromPx, frame, zoom, pan, points, hit, inBox, ticks, dragKey, dragHandle } from './graph.js';
import { el } from '../ui-util.js';
import { PadDetector } from '../wheel-pad.js';   // D7.56: a trackpad's two-finger swipe pans

const COMP_VARS = ['--layer-red', '--layer-green', '--layer-blue', '--layer-violet'];

export function mountCurves(o) {
  const { t } = o;
  let view = null, shown = null;           // shown: Set of 'p<i>:<comp>' (null = every curve)
  let pick = [];                            // chosen keys: [{track, comp, i}]
  let drag = null;

  const list = el('div', { className: 'mc-an-chans', role: 'group', 'aria-label': t('app.an.curves.list') });
  const easeSel = el('select', { className: 'mc-select', dataset: { anEase: '' }, 'aria-label': t('app.tl.ease') }, EASES.map((e) => el('option', { value: e }, t('app.tl.ease.' + e))));
  const hmSel = el('select', { className: 'mc-select', dataset: { anHandles: '' }, 'aria-label': t('app.an.handles') }, HANDLE_MODES.map((m) => el('option', { value: m }, t('app.an.handles.' + m))));
  const beforeSel = el('select', { className: 'mc-select', dataset: { anBefore: '' } }, CYCLES.map((c) => el('option', { value: c }, t('app.an.cycle.' + c))));
  const afterSel = el('select', { className: 'mc-select', dataset: { anAfter: '' } }, CYCLES.map((c) => el('option', { value: c }, t('app.an.cycle.' + c))));
  const frameBtn = el('button', { type: 'button', className: 'mc-tool mc-tl-btn', dataset: { anFrame: '' }, title: t('app.an.frame.title') }, el('i', { className: 'bi bi-arrows-fullscreen', 'aria-hidden': 'true' }), el('span', {}, t('app.an.frame')));   // i18n-ignore: an icon class
  const bar = el('div', { className: 'mc-an-graphbar' },
    el('label', {}, el('span', {}, t('app.an.interp')), easeSel),
    el('label', {}, el('span', {}, t('app.an.handles')), hmSel),
    el('label', {}, el('span', {}, t('app.an.cycle.before')), beforeSel),
    el('label', {}, el('span', {}, t('app.an.cycle.after')), afterSel),
    frameBtn);
  const canvas = el('canvas', { className: 'mc-an-canvas', tabIndex: 0, dataset: { anCanvas: '' }, role: 'img', 'aria-label': t('app.an.canvas') });
  const empty = el('p', { className: 'mc-an-empty', dataset: { anEmpty: '' } }, t('app.an.curves.empty'));
  const graph = el('div', { className: 'mc-an-graph' }, bar, canvas, empty);
  const root = el('div', { className: 'mc-an-curves', dataset: { anCurves: '' }, hidden: true }, list, graph);

  const chans = () => channels(o.anim()).filter((c) => !shown || shown.has(c.track + ':' + c.comp));
  const pts = () => points(o.anim(), chans());
  const picked = () => pick.map((p) => { const tr = o.anim().props?.[+p.track.slice(1)]; const k = tr && tr.keys[p.i]; return k ? { ...p, t: k.t } : null; }).filter(Boolean);
  const pickedTracks = () => [...new Set(picked().map((p) => p.track))];
  const isPicked = (p) => pick.some((q) => q.track === p.track && q.comp === p.comp && q.i === p.i);

  function size() {
    const r = canvas.getBoundingClientRect();
    return { w: Math.max(40, r.width || 400), h: Math.max(40, r.height || 192) };
  }
  function frameAll() { const s = size(); view = frame(o.anim(), chans(), s); draw(); }
  function resize() { if (!view) return frameAll(); const s = size(); view = { ...view, ...s }; draw(); }

  function color(c) { const cs = getComputedStyle(root); return (cs.getPropertyValue(COMP_VARS[c] || '--ink') || '').trim() || '#c00'; }
  function draw() {
    if (root.hidden) return;
    const a = o.anim(), cs = chans(), has = cs.length > 0;
    canvas.hidden = !has; empty.hidden = has;
    if (!has) return;
    if (!view) { frameAll(); return; }
    const dpr = window.devicePixelRatio || 1, { w, h } = view;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    const g = canvas.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const css = getComputedStyle(root), ink = css.getPropertyValue('--ink').trim() || '#222', ink2 = css.getPropertyValue('--ink-2').trim() || '#666',
      grid = css.getPropertyValue('--grid').trim() || '#ddd', action = css.getPropertyValue('--action').trim() || '#06c', red = css.getPropertyValue('--layer-red').trim() || '#c00';
    g.clearRect(0, 0, w, h);
    g.font = '11px system-ui, sans-serif';
    g.lineWidth = 1;
    // grid and labels
    g.strokeStyle = grid; g.fillStyle = ink2;
    for (const tv of ticks(view.t0, view.t1, Math.max(3, w / 90))) { const [x] = toPx(view, tv, 0); g.beginPath(); g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, h); g.stroke(); g.fillText(String(tv), x + 3, h - 3); }
    for (const vv of ticks(view.v0, view.v1, Math.max(3, h / 40))) { const [, y] = toPx(view, 0, vv); g.beginPath(); g.moveTo(0, y + 0.5); g.lineTo(w, y + 0.5); g.stroke(); g.fillText(String(vv), 3, y - 2); }
    // the animation's length
    g.strokeStyle = ink2; g.setLineDash([4, 4]);
    for (const tv of [0, a.length]) { const [x] = toPx(view, tv, 0); g.beginPath(); g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, h); g.stroke(); }
    g.setLineDash([]);
    // curves
    const n = Math.max(32, Math.round(w / 2));
    for (const c of cs) {
      const tr = a.props[+c.track.slice(1)], vals = sampleChannel(tr, c.comp, view.t0, view.t1, n);
      g.strokeStyle = cs.length > 1 && tr.keys[0].v.length > 1 ? color(c.comp) : ink;
      g.lineWidth = pickedTracks().includes(c.track) ? 2 : 1.25;
      g.beginPath();
      for (let i = 0; i < n; i++) { const tt = view.t0 + ((view.t1 - view.t0) * i) / (n - 1), [x, y] = toPx(view, tt, vals[i]); if (i) g.lineTo(x, y); else g.moveTo(x, y); }
      g.stroke();
    }
    g.lineWidth = 1;
    // keys and the chosen keys' handles
    for (const p of pts()) {
      const [x, y] = toPx(view, p.t, p.v), sel = isPicked(p);
      if (sel && (p.ease === 'bezier' || prevBezier(p))) {
        g.strokeStyle = ink2; g.fillStyle = ink2;
        for (const [side, hp] of [['l', p.l], ['r', p.r]]) {
          if ((side === 'l' && p.first) || (side === 'r' && p.last)) continue;
          const [hx, hy] = toPx(view, hp[0], hp[1]);
          g.beginPath(); g.moveTo(x, y); g.lineTo(hx, hy); g.stroke();
          g.beginPath(); g.arc(hx, hy, 3.5, 0, Math.PI * 2); g.fill();
        }
      }
      g.fillStyle = sel ? action : '#fff'; g.strokeStyle = sel ? action : ink;
      g.beginPath(); g.rect(x - 4, y - 4, 8, 8); g.fill(); g.stroke();
    }
    // the playhead
    const [px] = toPx(view, o.time(), 0);
    g.strokeStyle = red; g.lineWidth = 2; g.beginPath(); g.moveTo(px, 0); g.lineTo(px, h); g.stroke(); g.lineWidth = 1;
    if (drag && drag.kind === 'box') { g.strokeStyle = action; g.setLineDash([3, 3]); g.strokeRect(Math.min(drag.x0, drag.x1) + 0.5, Math.min(drag.y0, drag.y1) + 0.5, Math.abs(drag.x1 - drag.x0), Math.abs(drag.y1 - drag.y0)); g.setLineDash([]); }
  }
  const prevBezier = (p) => p.i > 0 && o.anim().props[+p.track.slice(1)].keys[p.i - 1].ease === 'bezier';

  function refreshList() {
    const a = o.anim(), cs = channels(a);
    if (shown) for (const k of [...shown]) if (!cs.some((c) => c.track + ':' + c.comp === k)) shown.delete(k);
    pick = pick.filter((p) => a.props && a.props[+p.track.slice(1)] && a.props[+p.track.slice(1)].keys[p.i]);
    list.replaceChildren(...cs.map((c) => {
      const id = c.track + ':' + c.comp, box = el('input', { type: 'checkbox', checked: !shown || shown.has(id), dataset: { anChan: id } });
      box.addEventListener('change', () => {
        if (!shown) shown = new Set(cs.map((x) => x.track + ':' + x.comp));
        if (box.checked) shown.add(id); else shown.delete(id);
        if (shown.size === cs.length) shown = null;
        draw();
      });
      const sw = el('span', { className: 'mc-an-swatch', style: 'background:var(' + (a.props[+c.track.slice(1)].keys[0].v.length > 1 ? COMP_VARS[c.comp] : '--ink') + ')' });   // i18n-ignore: CSS
      return el('label', { title: o.label(c.track, c.comp) }, box, sw, el('span', {}, o.label(c.track, c.comp)));
    }));
    syncBar();
  }
  function syncBar() {
    const a = o.anim(), ps = picked();
    const keys = ps.map((p) => a.props[+p.track.slice(1)].keys[p.i]);
    const same = (f) => (keys.length && keys.every((k) => f(k) === f(keys[0])) ? f(keys[0]) : '');
    easeSel.disabled = hmSel.disabled = !keys.length;
    easeSel.value = same((k) => k.ease) || 'bezier';
    hmSel.value = same((k) => k.hm || 'auto') || 'auto';
    const trs = pickedTracks().map((x) => a.props[+x.slice(1)]);
    beforeSel.disabled = afterSel.disabled = !trs.length;
    beforeSel.value = trs.length && trs.every((x) => (x.cycle?.before || 'hold') === (trs[0].cycle?.before || 'hold')) ? trs[0].cycle?.before || 'hold' : 'hold';
    afterSel.value = trs.length && trs.every((x) => (x.cycle?.after || 'hold') === (trs[0].cycle?.after || 'hold')) ? trs[0].cycle?.after || 'hold' : 'hold';
  }
  function setPick(next) { pick = next; syncBar(); draw(); o.onPick?.(picked()); }

  easeSel.addEventListener('change', () => { let a = o.anim(); for (const p of picked()) a = setEase(a, p.track, p.t, easeSel.value); o.commit(a); });
  hmSel.addEventListener('change', () => { let a = o.anim(); for (const p of picked()) a = setHandleMode(a, p.track, p.t, hmSel.value); o.commit(a); });
  const cyc = () => { let a = o.anim(); for (const tr of pickedTracks()) a = setCycle(a, tr, beforeSel.value, afterSel.value); o.commit(a); };
  beforeSel.addEventListener('change', cyc); afterSel.addEventListener('change', cyc);
  frameBtn.addEventListener('click', frameAll);

  // ---- the canvas ----
  const local = (e) => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  canvas.addEventListener('pointerdown', (e) => {
    if (!view) return;
    canvas.focus({ preventScroll: true });
    const [x, y] = local(e);
    canvas.setPointerCapture(e.pointerId);
    if (e.button === 1 || e.altKey) { drag = { kind: 'pan', x, y }; return; }
    if (e.button !== 0) return;
    const all = pts(), h = hit(view, all, x, y, { handles: all.filter(isPicked) });
    if (h && h.kind !== 'key') { drag = { kind: h.kind, p: h.p, start: o.anim() }; return; }
    if (h) {
      if (e.shiftKey || e.ctrlKey || e.metaKey) setPick(isPicked(h.p) ? pick.filter((q) => !(q.track === h.p.track && q.comp === h.p.comp && q.i === h.p.i)) : [...pick, { track: h.p.track, comp: h.p.comp, i: h.p.i }]);
      else if (!isPicked(h.p)) setPick([{ track: h.p.track, comp: h.p.comp, i: h.p.i }]);
      drag = { kind: 'key', p: h.p, x, y, start: o.anim(), moved: false };
      return;
    }
    drag = { kind: 'box', x0: x, y0: y, x1: x, y1: y, add: e.shiftKey };
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const [x, y] = local(e);
    if (drag.kind === 'pan') { view = pan(view, x - drag.x, y - drag.y); drag.x = x; drag.y = y; draw(); return; }
    if (drag.kind === 'box') { drag.x1 = x; drag.y1 = y; draw(); return; }
    const [tt, vv] = fromPx(view, x, y);
    if (drag.kind === 'key') {
      if (!drag.moved && Math.hypot(x - drag.x, y - drag.y) < 3) return;
      drag.moved = true;
      // one key: time and value; several: time only, all together
      const fps = drag.start.fps, snap = (s) => Math.round(s * fps) / fps;
      if (pick.length <= 1) { drag.to = Math.max(0, snap(tt)); drag.next = dragKey(drag.start, drag.p, drag.to, vv); }
      else { drag.dt = snap(tt) - drag.p.t; drag.next = moveKeys(drag.start, pickedFrom(drag.start), drag.dt); }
    } else drag.next = dragHandle(drag.start, drag.p, drag.kind, tt, vv);
    o.preview?.(drag.next);
    draw();
  });
  const pickedFrom = (a) => pick.map((p) => { const k = a.props[+p.track.slice(1)]?.keys[p.i]; return k ? { track: p.track, t: k.t } : null; }).filter(Boolean);
  const up = () => {
    if (!drag) return;
    const d = drag; drag = null;
    if (d.kind === 'box') {
      const inside = inBox(view, pts(), d);
      if (Math.abs(d.x1 - d.x0) < 3 && Math.abs(d.y1 - d.y0) < 3) { if (!d.add) setPick([]); o.setTime(Math.max(0, fromPx(view, d.x0, d.y0)[0])); return; }
      const add = inside.map((p) => ({ track: p.track, comp: p.comp, i: p.i }));
      setPick(d.add ? [...pick, ...add.filter((p) => !isPicked(p))] : add);
      return;
    }
    if (d.kind === 'key' && !d.moved) { o.setTime(d.p.t); return; }
    if (d.next && d.next !== d.start) {
      const after = d.next;
      o.preview?.(null);
      if (d.kind === 'key') {
        // the same keys stay chosen where they went
        const r3 = (x) => Math.round(x * 1000) / 1000;
        pick = pick.map((p) => {
          const was = d.start.props[+p.track.slice(1)]?.keys[p.i], tr = after.props?.[+p.track.slice(1)];
          if (!was || !tr) return null;
          const to = r3(pick.length <= 1 ? d.to : Math.max(0, was.t + d.dt));
          const i = tr.keys.findIndex((k) => Math.abs(k.t - to) < 1e-9);
          return i >= 0 ? { ...p, i } : null;
        }).filter(Boolean);
      }
      o.commit(after, d.kind === 'key' ? t('app.an.key.moved') : t('app.an.handle.moved'));
    } else o.preview?.(null);
    syncBar(); draw();
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', () => { drag = null; o.preview?.(null); draw(); });
  const pad = new PadDetector();
  canvas.addEventListener('wheel', (e) => {
    if (!view) return;
    e.preventDefault();
    if (!e.shiftKey && !e.metaKey && pad.isSwipe(e)) { view = pan(view, -e.deltaX, -e.deltaY); draw(); return; }   // D7.56: two fingers pan; a pinch and a mouse wheel zoom (Shift / Ctrl keep their one-axis zoom)
    const [x, y] = local(e), f = (e.ctrlKey && e.deltaMode === 0 ? Math.exp(Math.max(-30, Math.min(30, e.deltaY)) * 0.01) : e.deltaY > 0 ? 1.15 : 1 / 1.15);   // a pinch zooms by its size
    view = zoom(view, x, y, f, e.ctrlKey || e.metaKey ? 'v' : e.shiftKey ? 't' : 'both');
    draw();
  }, { passive: false });
  canvas.addEventListener('keydown', (e) => {
    if (e.key === 'Home') { e.preventDefault(); frameAll(); return; }
    if (e.key === '+' || e.key === '=' || e.key === '-') { e.preventDefault(); view = zoom(view, view.w / 2, view.h / 2, e.key === '-' ? 1.25 : 0.8); draw(); return; }
    const ps = picked();
    if (!ps.length) return;
    if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      let a = o.anim();
      // the highest track and key numbers first, so the numbers of the rest stay right (one key once, whatever its curves)
      for (const p of [...new Map(ps.map((q) => [q.track + '@' + q.t, q])).values()].sort((x, y) => +y.track.slice(1) - +x.track.slice(1) || y.i - x.i)) a = removeKey(a, p.track, p.t);
      pick = [];
      o.commit(a, t('app.tl.deleted'));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const step = (e.shiftKey ? 10 : 1) / o.anim().fps;
      o.commit(moveKeys(o.anim(), ps.map((p) => ({ track: p.track, t: p.t })), e.key === 'ArrowLeft' ? -step : step));
    }
  });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => resize()).observe(canvas);

  return {
    el: root,
    refresh() { refreshList(); draw(); },
    draw, resize, frameAll, picked,
    get view() { return view; },   // for tests: where things are on the canvas (anim/graph.js toPx)
    show() { root.hidden = false; refreshList(); requestAnimationFrame(() => { if (!view) frameAll(); else resize(); }); },
    hide() { root.hidden = true; },
    /** Choose keys from outside (the dope sheet's choice when switching views): [{track, t}] for property tracks. */
    pickKeys(sel) {
      const a = o.anim(), out = [];
      for (const s of sel) { if (!/^p\d+$/.test(String(s.track))) continue; const tr = a.props?.[+s.track.slice(1)]; const i = tr ? tr.keys.findIndex((k) => k.t === s.t) : -1; if (i >= 0) for (let c = 0; c < tr.keys[0].v.length; c++) out.push({ track: s.track, comp: c, i }); }
      pick = out; syncBar(); draw();
    },
  };
}
