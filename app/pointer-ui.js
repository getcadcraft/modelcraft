/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pointer-ui.js: modelcraft.js's 21 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountPointer(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { add, mul } from './vec.js';
import { action3d, wheelFactor } from './input-mouse.js';
import { getWorkspace } from './workspaces.js';
import { TOOL_KEYS } from './tools.js';

export function mountPointer(ctx) {
  const { ST, ui, cam, host, view, tools, settings, blender, toggle, print, setTool, unhideEverything, eraseSelection, closeMenus, scheduleInfo, focusView, root } = ctx;

  function hideHint() { ui.hint.hidden = true; }
  ui.hint.querySelector('[data-hint-close]')?.addEventListener('click', () => { hideHint(); focusView?.(); });   // the start card's X, as CadCraft's

  // ---- pointer input ----
  const pos = (e) => { const r = ui.over.getBoundingClientRect(); return e.pointerType === 'pen' ? { x: e.clientX - r.left, y: e.clientY - r.top, pen: true, pressure: e.pressure } : { x: e.clientX - r.left, y: e.clientY - r.top }; };   // a pen's pressure: MD.7 sculpting
  const mods = (e) => ({ shift: e.shiftKey, ctrl: e.ctrlKey || e.metaKey, alt: e.altKey, button: e.button, time: e.timeStamp });
  ST.camDrag = null;
  ST.ctxPress = null;   // 0.7.1 MC-RIGHTCLICK-MENU: the menu button is down ({x, y, b}); released in place = the context menu
  /**
   * 0.7.1 MC-ORBIT-CURSOR: what a camera drag turns about — the point of the model under (x, y) (the nearest face, as the
   * wheel zooms toward it), or null = the view centre (nothing there, or Settings › ModelCraft › Orbit about the view centre).
   */
  const camPivot = (x, y) => {
    if (settings.orbitAt !== 'cursor') return null;
    const r = cam.ray(x, y), t0 = host.scene().hit(r)?.t;
    return Number.isFinite(t0) ? add(r.o, mul(r.d, t0)) : null;
  };
  host.camPivot = camPivot;   // the Orbit and Pan tools (tools.js CamTool) ask for it too
  /** 0.7.1 FIX-071-ORBIT-SHIFT-PAN: a camera drag pans when its button pans, or Shift is down now on a button where Shift swaps. */
  const dragPans = (d, e) => (d.base === 'pan') !== (d.flip && e.shiftKey);
  const touches = new Map();
  ST.pinch = null;
  // S.8 touch: one finger is the tool — a quick tap is a click, a drag is a press–drag; holding still for half a second
  // finishes what the tool is doing (as Enter), or, with nothing going on, turns that finger into orbit until it lifts.
  // Two fingers pan and pinch-zoom, three orbit (Settings › ModelCraft › Two fingers swaps them: settings.touch2).
  // While a drawing finger is down, a loupe above it shows what is under it (the snaps a finger hides).
  ST.tap = null;            // the first finger, held back until it moves, lifts or is held
  const LONG_MS = 500, MOVE_PX = 8;
  const loupe = (() => {
    const c = document.createElement('canvas');
    c.className = 'mc-loupe';
    c.hidden = true;
    c.setAttribute('aria-hidden', 'true');
    ui.stage.append(c);
    const R = 64, ZOOM = 2;   // screen px: the loupe's size is set here, its place follows the finger
    c.style.width = c.style.height = R * 2 + 'px';
    let at = null, raf = 0;
    const paint = () => {
      raf = 0;
      if (!at) return;
      const dpr = window.devicePixelRatio || 1, W = Math.round(R * 2 * dpr);
      if (c.width !== W) { c.width = W; c.height = W; }
      // above the finger, or below it near the top edge
      const top = at.y - R * 2 - 36 >= 0 ? at.y - R * 2 - 36 : at.y + 36;
      c.style.left = Math.max(0, Math.min(ui.stage.clientWidth - R * 2, at.x - R)) + 'px';
      c.style.top = top + 'px';
      const g = c.getContext('2d');
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, W, W);
      g.save();
      g.beginPath(); g.arc(W / 2, W / 2, W / 2, 0, Math.PI * 2); g.clip();
      g.fillStyle = getComputedStyle(ui.stage).backgroundColor;
      g.fillRect(0, 0, W, W);
      // the same spot of the 3D canvas and of the overlay (snaps, guides), both in device pixels
      const s = (R / ZOOM) * dpr, sx = at.x * dpr - s, sy = at.y * dpr - s;
      for (const src of [ui.gl, ui.over]) { try { g.drawImage(src, sx, sy, s * 2, s * 2, 0, 0, W, W); } catch { /* not drawn yet */ } }
      g.strokeStyle = getComputedStyle(root).getPropertyValue('--action') || '#06c';
      g.lineWidth = dpr;
      g.beginPath(); g.moveTo(W / 2 - 8 * dpr, W / 2); g.lineTo(W / 2 + 8 * dpr, W / 2); g.moveTo(W / 2, W / 2 - 8 * dpr); g.lineTo(W / 2, W / 2 + 8 * dpr); g.stroke();
      g.restore();
      c.hidden = false;
    };
    return {
      // after the view's own frame (tools.move asked for it first), so the loupe copies what was just drawn
      show(p) { if (tools.name === 'select' || tools.name === 'orbit' || tools.name === 'pan') { this.hide(); return; } at = p; if (!raf) raf = requestAnimationFrame(() => requestAnimationFrame(paint)); },
      hide() { at = null; c.hidden = true; },
    };
  })();
  const markTouch = () => {
    if (tools.touch) return;
    tools.touch = true;
    root.classList.add('is-touch');
    const bar = root.querySelector('[data-touchbar]');
    if (bar) bar.hidden = false;
    // the value field opens the number keyboard (Warren, 2026-10-15: lengths are numbers in the status bar's units);
    // "abc" switches to letters for unit marks (5'6", 2m) — remembered on this device
    const kbd = root.querySelector('[data-vcb-kbd]');
    let letters = false;
    try { letters = localStorage.getItem('mc-vcb-kbd') === 'letters'; } catch (e) { /* private mode */ }
    const setKbd = () => { ui.vcb.inputMode = letters ? 'text' : 'decimal'; if (kbd) kbd.setAttribute('aria-pressed', String(letters)); };
    setKbd();
    if (kbd) {
      kbd.hidden = false;
      kbd.addEventListener('pointerdown', (e) => e.preventDefault());   // keep the field's focus (and its keyboard) open
      kbd.addEventListener('click', () => {
        letters = !letters; setKbd();
        try { localStorage.setItem('mc-vcb-kbd', letters ? 'letters' : 'numbers'); } catch (e) { /* private mode */ }
        if (document.activeElement === ui.vcb) { ui.vcb.blur(); ui.vcb.focus(); }   // the keyboard changes on the next focus
      });
    }
  };
  if (matchMedia?.('(pointer: coarse)').matches) markTouch();   // i18n-ignore: a media query
  const longPress = () => {
    if (!ST.tap || ST.tap.started) return;
    ST.tap.done = true;
    hideHint();
    loupe.hide();
    navigator.vibrate?.(15);
    if (tools.tool.busy) { if (!tools.tool.finish?.()) tools.escape(); print(ctx.t('app.touch.done')); view.invalidate(); }
    else { ST.tap.orbit = { x: ST.tap.x, y: ST.tap.y }; print(ctx.t('app.touch.orbit')); }
  };
  ui.over.addEventListener('contextmenu', (e) => e.preventDefault());
  ST.penBack = null;   // the tool to go back to when the pen's tip comes down after its eraser end
  const penEraser = (e) => e.pointerType === 'pen' && (e.button === 5 || (e.buttons & 32) !== 0);
  ui.over.addEventListener('pointerdown', (e) => {
    ui.over.focus({ preventScroll: true });
    closeMenus();
    const p = pos(e);
    if (e.pointerType === 'touch') {
      markTouch();
      touches.set(e.pointerId, p);
      if (touches.size >= 2) {
        // more fingers: forget the first finger's tap (and anything it began), then orbit / zoom / pan
        if (ST.tap) { clearTimeout(ST.tap.timer); if (ST.tap.started) tools.escape(); ST.tap = null; }
        loupe.hide();
        const pts = [...touches.values()];
        const c = { x: pts.reduce((a, q) => a + q.x, 0) / pts.length, y: pts.reduce((a, q) => a + q.y, 0) / pts.length };
        if (ST.pinch?.raf) cancelAnimationFrame(ST.pinch.raf);
        ST.pinch = { n: pts.length, c, d: pts.length === 2 ? Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) : 0, raf: 0, pivot: camPivot(c.x, c.y) };
        return;
      }
      ui.over.setPointerCapture(e.pointerId);
      host.mouse = p;
      tools.move({ ...p });
      ST.tap = { id: e.pointerId, x: p.x, y: p.y, started: false, done: false, orbit: null, timer: setTimeout(longPress, LONG_MS) };
      loupe.show(p);
      return;
    }
    ui.over.setPointerCapture(e.pointerId);
    // a pen's eraser end (Pointer Events: button 5, buttons 32) is the Eraser while it touches; the tip brings back the tool
    // you had (Warren, 2026-10-15: "its eraser end doesn't switch to the ModelCraft Eraser tool")
    if (e.pointerType === 'pen') {
      if (penEraser(e)) {
        if (tools.name !== 'erase') { if (tools.tool.busy) tools.escape(); ST.penBack = tools.name; setTool('erase'); }
        hideHint();
        host.mouse = p;
        tools.down({ ...p, ...mods(e) });
        return;
      }
      if (ST.penBack && e.button === 0) { const back = ST.penBack; ST.penBack = null; if (tools.name === 'erase') setTool(back); }
    }
    // Blender style: right-click cancels what a tool is doing; Alt + left-drag orbits (Alt+Shift pans) for
    // trackpads and mice without a middle button; Ctrl + middle-drag zooms
    if (blender() && e.button === 2 && tools.tool.busy) { tools.escape(); e.preventDefault(); return; }
    const altCam = blender() && e.button === 0 && e.altKey && e.pointerType !== 'touch';
    // 0.5 IP.3: what the middle and right buttons do comes from the menu style (null = ModelCraft's own); Shift swaps orbit and pan
    const styled = (e.button === 1 || e.button === 2) && !altCam ? action3d(e.button) : null;
    // 0.7.1 MC-RIGHTCLICK-MENU: 'menu' (and the right button in ModelCraft's own buttons) opens the context menu on release
    // without a drag; Shift + middle and the Pan tool pan
    if (styled === 'menu' || (styled === null && e.button === 2 && !altCam)) { ST.ctxPress = { x: p.x, y: p.y, b: e.button }; e.preventDefault(); return; }
    if (styled === 'none') { e.preventDefault(); return; }
    if (styled) {
      ST.camDrag = { x: p.x, y: p.y, x0: p.x, y0: p.y, base: styled === 'pan' ? 'pan' : 'orbit', flip: true, pivot: camPivot(p.x, p.y), zoom: styled === 'zoom' || (blender() && e.button === 1 && (e.ctrlKey || e.metaKey)) };
      e.preventDefault();
      return;
    }
    if (e.button === 1 || e.button === 2 || altCam) {
      ST.camDrag = { x: p.x, y: p.y, x0: p.x, y0: p.y, base: e.button === 2 ? 'pan' : 'orbit', flip: e.button !== 2, pivot: camPivot(p.x, p.y), zoom: blender() && e.button === 1 && (e.ctrlKey || e.metaKey) };
      e.preventDefault();
      return;
    }
    if (e.button !== 0) return;
    hideHint();
    host.mouse = p;
    tools.down({ ...p, ...mods(e) });
  });
  ui.over.addEventListener('pointermove', (e) => {
    const p = pos(e);
    if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
      touches.set(e.pointerId, p);
      if (ST.pinch && touches.size >= 2) {
        // fingers report one at a time: take them together once per frame, so a steady two-finger drag is a pure orbit
        if (!ST.pinch.raf) ST.pinch.raf = requestAnimationFrame(() => {
          if (!ST.pinch) return;
          ST.pinch.raf = 0;
          const pts = [...touches.values()];
          if (pts.length < 2) return;
          const c = { x: pts.reduce((a, q) => a + q.x, 0) / pts.length, y: pts.reduce((a, q) => a + q.y, 0) / pts.length };
          const d = pts.length === 2 ? Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) : 0;
          if (pts.length !== ST.pinch.n) { ST.pinch.n = pts.length; ST.pinch.c = c; ST.pinch.d = d; return; }
          // two fingers pan (or orbit, settings.touch2) and pinch; three do the other
          const move = (pts.length >= 3) === (settings.touch2 === 'orbit') ? 'pan' : 'orbit';
          if (c.x !== ST.pinch.c.x || c.y !== ST.pinch.c.y) cam[move](c.x - ST.pinch.c.x, c.y - ST.pinch.c.y, ST.pinch.pivot);
          if (pts.length === 2 && d > 10 && ST.pinch.d > 10 && Math.abs(d - ST.pinch.d) > 0.5) cam.zoomAt(ST.pinch.d / d, c.x, c.y);
          ST.pinch.c = c; ST.pinch.d = d;
          view.invalidate();
        });
        return;
      }
      if (ST.pinch) return;
      if (ST.tap && e.pointerId === ST.tap.id && ST.tap.orbit) {
        // held still on nothing, then moved: one-finger orbit
        cam.orbit(p.x - ST.tap.orbit.x, p.y - ST.tap.orbit.y);
        ST.tap.orbit = { x: p.x, y: p.y };
        view.invalidate();
        return;
      }
      if (ST.tap && e.pointerId === ST.tap.id && !ST.tap.done) {
        host.mouse = p;
        if (!ST.tap.started) {
          if (Math.hypot(p.x - ST.tap.x, p.y - ST.tap.y) < MOVE_PX) { tools.move({ ...p }); loupe.show(p); return; }
          // it moves: a press–drag from where the finger went down
          clearTimeout(ST.tap.timer); ST.tap.started = true;
          hideHint();
          tools.down({ x: ST.tap.x, y: ST.tap.y });
        }
        tools.move({ ...p });
        loupe.show(p);
        return;
      }
      if (ST.tap?.done) return;
    }
    host.mouse = p;
    if (ST.ctxPress) return;   // 0.7.1: a right button held for the context menu
    if (ST.camDrag) {
      const dx = p.x - ST.camDrag.x, dy = p.y - ST.camDrag.y;
      ST.camDrag.x = p.x; ST.camDrag.y = p.y;
      if (ST.camDrag.zoom) cam.zoomAt(Math.exp(dy * 0.01), ST.camDrag.x0, ST.camDrag.y0);
      else if (dragPans(ST.camDrag, e)) { ST.camDrag.orbiting = false; cam.pan(dx, dy, ST.camDrag.pivot); } else { ST.camDrag.orbiting = true; cam.orbit(dx, dy, ST.camDrag.pivot); }   // Shift can change it mid-drag
      view.invalidate();
      return;
    }
    tools.move({ ...p, ...mods(e) });
  });
  const endPointer = (e) => {
    const p = pos(e);
    if (e.pointerType === 'touch') {
      touches.delete(e.pointerId);
      loupe.hide();
      if (ST.pinch) { if (!touches.size) ST.pinch = null; return; }
      if (ST.tap && e.pointerId === ST.tap.id) {
        const t = ST.tap;
        clearTimeout(t.timer); ST.tap = null;
        if (t.done) return;   // a long press already did its job
        if (!t.started) { hideHint(); tools.down({ x: t.x, y: t.y }); tools.up({ x: t.x, y: t.y }); return; }   // a tap = a click
        tools.up({ ...p });
        return;
      }
      return;
    }
    if (ST.ctxPress && e.button === ST.ctxPress.b) {   // 0.7.1: a click (no drag) of the menu button opens the context menu
      const c = ST.ctxPress;
      ST.ctxPress = null;
      if (e.type === 'pointerup' && Math.hypot(p.x - c.x, p.y - c.y) < 6) ctx.openCtxMenu(p, true);
      return;
    }
    if (ST.camDrag) { const was = ST.camDrag.orbiting; ST.camDrag = null; if (was) view.invalidate(); return; }   // the pivot marker goes
    if (e.button !== 0 && !(e.pointerType === 'pen' && e.button === 5) && e.type === 'pointerup') return;
    tools.up({ ...p, ...mods(e) });
  };
  ui.over.addEventListener('pointerup', endPointer);
  ui.over.addEventListener('pointercancel', (e) => { touches.delete(e.pointerId); ST.pinch = null; loupe.hide(); ST.camDrag = null; ST.ctxPress = null; if (ST.tap && ST.tap.id === e.pointerId) { clearTimeout(ST.tap.timer); ST.tap = null; } });
  // the touch bar (S.8): what the keyboard's Enter, Esc and Ctrl+Z do
  root.querySelector('[data-touchbar]')?.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-touch]');
    if (!b) return;
    const k = b.dataset.touch;
    if (k === 'done') { if (!tools.tool.finish?.()) tools.escape(); }
    else if (k === 'cancel') { if (!tools.escape()) { if (tools.name !== 'select') setTool('select'); else host.setSel([]); } }
    else if (k === 'undo') ctx.act('undo');
    view.invalidate();
  });
  ui.over.addEventListener('pointerleave', () => { if (!ST.camDrag) { host.mouse = null; view.invalidate(); } });
  // Trackpads: a two-finger swipe orbits (Shift pans) in trackpad mode — or in "auto" when the scrolling looks like a
  // trackpad's (sideways, or fine-grained); a pinch arrives as a wheel event with ctrlKey and always zooms.
  ST.padUntil = 0; ST.padPivot = null;
  const looksLikePad = (e) => {
    if (settings.scroll === 'trackpad') return true;
    if (settings.scroll === 'mouse' || e.deltaMode !== 0) return false;
    if (e.deltaX !== 0 || (e.deltaY % 1 !== 0 && Math.abs(e.deltaY) < 50)) ST.padUntil = e.timeStamp + 400;
    return e.timeStamp < ST.padUntil;
  };
  ui.over.addEventListener('wheel', (e) => {
    e.preventDefault();
    // 0.7 MD.2: an operation that counts (bevel segments, loop cuts, spin steps) takes the wheel while it runs
    if (tools.tool.op?.wheel && !e.ctrlKey && Math.abs(e.deltaY) > 0 && tools.tool.op.wheel(e.deltaY < 0 ? 1 : -1)) return;
    if (!e.ctrlKey && looksLikePad(e)) {
      const k = e.deltaMode === 1 ? 16 : 1;
      // one swipe keeps the point it started on (a new one after a pause)
      if (!ST.padPivot || e.timeStamp - ST.padPivot.at > 300) { const q = pos(e); ST.padPivot = { p: camPivot(q.x, q.y) }; }
      ST.padPivot.at = e.timeStamp;
      if (e.shiftKey) cam.pan(-e.deltaX * k, -e.deltaY * k, ST.padPivot.p);
      else cam.orbit(-e.deltaX * k * 0.6, -e.deltaY * k * 0.6, ST.padPivot.p);
      view.invalidate();
      return;
    }
    const p = pos(e);
    const r = cam.ray(p.x, p.y);
    // zoom toward what is under the cursor (a face), else the target plane
    let pivot = null;
    const s = host.scene();
    const best = s.hit(r)?.t ?? Infinity;
    if (best < Infinity) pivot = [r.o[0] + r.d[0] * best, r.o[1] + r.d[1] * best, r.o[2] + r.d[2] * best];
    // a pinch sends small deltas: zoom it faster than a wheel notch
    const k = Math.exp((e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY) * (e.ctrlKey ? 0.01 : 0.0015 * wheelFactor()));   // IP.3: the style's wheel (a pinch stays as it is)
    cam.zoomAt(k, p.x, p.y, pivot);
    view.invalidate();
  }, { passive: false });
  // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js)
  // the same camera moves as the mouse: orbit/pan keep one turning point per burst (as a trackpad swipe does: the point under the
  // pointer, else the view centre; Settings › Orbit about the view centre still wins), zoom goes toward the face under (x, y) as the wheel
  ST.devPivot = null;
  const devTurnAt = () => {
    const now = performance.now();
    if (!ST.devPivot || now - ST.devPivot.at > 300) { const q = host.mouse || { x: view.w / 2, y: view.h / 2 }; ST.devPivot = { p: camPivot(q.x, q.y) }; }
    ST.devPivot.at = now;
    return ST.devPivot.p;
  };
  (window.ccViews ||= []).push({
    el: ui.over, kind: '3d',
    pan(dx, dy) { cam.pan(dx, dy, devTurnAt()); view.invalidate(); },
    orbit(dx, dy) { cam.orbit(dx, dy, devTurnAt()); view.invalidate(); },
    zoom(f, x = view.w / 2, y = view.h / 2) {
      if (!(f > 0)) return;
      const r = cam.ray(x, y), t0 = host.scene().hit(r)?.t;
      cam.zoomAt(1 / f, x, y, Number.isFinite(t0) ? add(r.o, mul(r.d, t0)) : null);
      view.invalidate();
    },
    fit() { ctx.act('extents'); },
  });

  // ---- keyboard ----
  const VCB_START = /^[0-9.,\-'"[<*/(]$/;   // ( starts a calculation too (0.7 MC-CALC)
  const typing = (t) => t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
  const busyTransform = () => tools.tool.busy && ['move', 'rotate', 'scale', 'push'].includes(tools.name);
  function cursorEv() { return { ...(host.mouse || { x: view.w / 2, y: view.h / 2 }), shift: false, ctrl: false, alt: false }; }
  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return;
    if (document.querySelector('dialog[open]')) return;   // the app's dialogs and the shell's (Settings: Esc must reach it, IP.3)
    if (e.key === 'Escape' && ST.recording) { ST.recording.stop = true; e.preventDefault(); return; }   // stop an animation being recorded (M23)
    const tgt = e.target;
    if (tgt === ui.vcb) {
      if (e.key === 'Escape') { ui.vcb.value = ''; ui.vcb.blur(); ui.over.focus({ preventScroll: true }); e.preventDefault(); }
      return;
    }
    if (typing(tgt) && tgt !== ui.over) return;
    const ctrl = e.ctrlKey || e.metaKey;
    const k = e.key, l = k.length === 1 ? k.toLowerCase() : k;
    const B = blender();
    // 0.7: the open workspace's own keys come first (the Mesh workspace: 1/2/3, G/R/S, E, Ctrl+B …)
    if (ST.wsId !== 'model') { const w = getWorkspace(ST.wsId); if (w?.keydown?.(e, ST.wsHost)) { e.preventDefault(); scheduleInfo(); view.invalidate(); return; } }
    // 0.9 FX.31: Space plays and pauses the animation while the timeline is open (not when a button has the focus: Space presses it;
    // not while a tool runs: it is the tool's). With the timeline closed Space is Select, as before.
    if (k === ' ' && !ctrl && !e.altKey && !e.shiftKey && ST.timeline?.isOpen && !tools.tool.busy && !(tgt?.closest && tgt.closest('button, a, select, summary, [role="button"]'))) {
      e.preventDefault(); ST.timeline.togglePlay(); scheduleInfo(); return;
    }
    if (ctrl) {
      if (l === 'z' && !e.shiftKey) { e.preventDefault(); ctx.act('undo'); return; }
      if (l === 'y' || (l === 'z' && e.shiftKey)) { e.preventDefault(); ctx.act('redo'); return; }
      if (l === 's') { e.preventDefault(); ctx.act(e.shiftKey ? 'saveas' : 'save'); return; }
      if (l === 'o') { e.preventDefault(); ctx.act('open'); return; }
      if (l === 'a') { e.preventDefault(); ctx.selectAll(); return; }
      if (l === 'c') { e.preventDefault(); ctx.act('copy'); return; }
      if (l === 'x') { e.preventDefault(); ctx.act('cut'); return; }
      if (l === 'v') { e.preventDefault(); ctx.act(e.shiftKey ? 'paste-in-place' : 'paste'); return; }
      if (l === 'd') { e.preventDefault(); ctx.act('duplicate'); return; }
      if (B && l === 'g') { e.preventDefault(); ctx.act(e.shiftKey ? 'component' : 'group'); return; }
      if (B && e.code && e.code.startsWith('Numpad') && /^Numpad[137]$/.test(e.code)) { e.preventDefault(); ctx.stdView({ Numpad1: 'back', Numpad3: 'left', Numpad7: 'bottom' }[e.code]); return; }
      if (k === 'Control' || k === 'Meta') { if (tools.key('Control', e)) e.preventDefault(); }
      return;
    }
    if (B && e.altKey && l === 'a') { e.preventDefault(); host.setSel([]); return; }
    if (B && e.altKey && l === 'h') { e.preventDefault(); unhideEverything(); return; }   // Blender: Alt+H unhide all
    if (k === 'Alt') { if (tools.key('Alt', e)) e.preventDefault(); return; }
    if (e.shiftKey && l === 'p' && !e.altKey) { e.preventDefault(); ctx.setPresentation(!ST.presentation); return; }   // presentation view (both key styles)
    if (k === 'Shift') { tools.key('Shift', e); return; }
    if (k === 'Escape') { e.preventDefault(); cancelStep(); return; }
    if (k.startsWith('Arrow')) { e.preventDefault(); arrowStep(k, e.shiftKey, e); return; }
    // 0.7.1 MC-RIGHTCLICK-MENU: the menu key and Shift+F10 open the context menu for the selection (at the pointer, else the middle)
    if (k === 'ContextMenu' || (k === 'F10' && e.shiftKey && !e.altKey)) { e.preventDefault(); ctx.openCtxMenu(host.mouse || { x: view.w / 2, y: view.h / 2 }, false); return; }
    if (B) {
      // X/Y/Z lock an axis while something is moving, turning or being drawn (as the arrow keys do)
      if (tools.tool.busy && (l === 'x' || l === 'y' || l === 'z') && !e.shiftKey) {
        e.preventDefault();
        if (tools.tool.lockable && tools.key({ x: 'ArrowRight', y: 'ArrowLeft', z: 'ArrowUp' }[l], e)) ctx.sayLock();
        return;
      }
      if (k === 'Enter' && busyTransform()) { e.preventDefault(); ctx.finishTransform(); return; }
      if (e.code && /^Numpad[0-9]$|^NumpadDecimal$/.test(e.code) && !tools.tool.busy) {
        e.preventDefault();
        if (e.code === 'NumpadDecimal') ctx.frameSelection();
        else if (e.code === 'Numpad5') ctx.perspBtn.click();
        else if ({ Numpad1: 1, Numpad3: 1, Numpad7: 1 }[e.code]) ctx.stdView({ Numpad1: 'front', Numpad3: 'right', Numpad7: 'top' }[e.code]);
        return;
      }
      if (k === 'Tab') {
        e.preventDefault();
        if (e.shiftKey) { toggle('snap'); return; }
        const inst = host.sel.length === 1 && host.sel[0].t === 'i' ? host.sel[0] : null;
        if (inst) host.openContext([...host.path, inst.id]);
        else if (host.path.length) host.closeContext();
        else print(ctx.t('app.tab.none'));
        return;
      }
      if (k === 'Home') { e.preventDefault(); ctx.act('extents'); return; }
    }
    if (k === 'Backspace' && tools.tool.back?.()) { e.preventDefault(); return; }   // Curve: the last point back
    if (k === 'Delete' || k === 'Backspace') { e.preventDefault(); eraseSelection(); return; }
    if (k === 'PageDown') { e.preventDefault(); ctx.stepScene(1); return; }
    if (k === 'PageUp') { e.preventDefault(); ctx.stepScene(-1); return; }
    if (k === 'Enter') { if (tools.tool.busy) { e.preventDefault(); tools.tool.finish?.(); } return; }
    if (VCB_START.test(k)) {
      e.preventDefault();
      ui.vcb.value = k;
      ui.vcb.focus();
      return;
    }
    if (e.altKey) return;
    if (B) {
      if (l === 'd' && e.shiftKey) { e.preventDefault(); ctx.act('duplicate'); return; }
      if (l === 'c' && e.shiftKey) { e.preventDefault(); ctx.act('extents'); return; }
      if (l === 'h') { e.preventDefault(); if (e.shiftKey) ctx.isolateSelection(); else ctx.hideSelection(); return; }   // Blender: H hide, Shift+H hide the rest
      if (e.shiftKey) return;
      if (l === 'g') { e.preventDefault(); hideHint(); tools.grab(cursorEv()); ctx.syncTool(); return; }
      if (l === 'r') { e.preventDefault(); hideHint(); tools.turn(cursorEv()); ctx.syncTool(); return; }
      if (l === 's') { e.preventDefault(); hideHint(); tools.resize(cursorEv()); ctx.syncTool(); return; }
      if (l === 'x') { e.preventDefault(); eraseSelection(); return; }
      if (l === 'a') { e.preventDefault(); ctx.selectAll(); return; }
      const BK = { ' ': 'select', w: 'select', l: 'line', b: 'rect', c: 'circle', n: 'polygon', e: 'push', t: 'tape', d: 'dim' };
      if (BK[l]) { e.preventDefault(); setTool(BK[l]); }
      return;
    }
    if (l === 'z' && e.shiftKey) { e.preventDefault(); ctx.act('extents'); return; }
    if (l === 'g') { e.preventDefault(); ctx.act(e.shiftKey ? 'group' : 'component'); return; }   // as in SketchUp: G component, Shift+G group
    if (TOOL_KEYS[l] && !e.shiftKey) { e.preventDefault(); setTool(TOOL_KEYS[l]); }
  });
  /** Esc (0.7.1: also the command edit.cancel, which a style may give another key): one step back — the recording, the
   *  tool's own step, back to Select, select nothing, then close the open group. */
  function cancelStep() {
    if (ST.recording) { ST.recording.stop = true; return; }
    ctx.stopPlay();
    if (tools.escape()) return;
    if (tools.name !== 'select') { setTool('select'); return; }
    if (host.sel.length) { host.setSel([]); return; }
    if (host.path.length) host.closeContext();
  }
  /** An arrow key (0.7.1: also the commands aids.lock-* / camera.nudge-*): while a tool runs, lock its axis (→ red, ← green,
   *  ↑ blue, ↓ the edge's direction); else orbit that way, or pan with Shift. */
  function arrowStep(k, pan, ev = {}, orbitOnly = false) {
    // an arrow key locks with or without Shift, as before; the Pan commands only pan
    if (!orbitOnly && (!pan || ev.key) && tools.tool.lockable && tools.tool.busy && tools.key(k, ev)) { ctx.sayLock(); return; }
    const s = 18;
    if (pan) cam.pan(k === 'ArrowLeft' ? s : k === 'ArrowRight' ? -s : 0, k === 'ArrowUp' ? s : k === 'ArrowDown' ? -s : 0);
    else cam.orbit(k === 'ArrowLeft' ? -s : k === 'ArrowRight' ? s : 0, k === 'ArrowUp' ? -s : k === 'ArrowDown' ? s : 0);
    view.invalidate();
  }

  return { hideHint, cursorEv, cancelStep, arrowStep };
}
