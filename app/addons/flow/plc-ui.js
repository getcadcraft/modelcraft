/* SPDX-License-Identifier: Apache-2.0 */
/**
 * plc-ui.js — the "PLC mode" panel of the Material flow add-on (0.9 SU.858; owner 2026-11-06: choose REAL or SOFT in the panel). Its own panel section, like the robot cell.
 * SOFT: the Digital twin's soft PLC (lib/twin, over lib/plc) on the model: a program box, a fast repeatable run, and an "attach to the live run" button.
 * REAL: Modbus TCP to a real PLC through CadCraft Studio (lib/plc-transport.js); an address map editor (tag, type, table, address, scale); disabled in a browser tab with the reason.
 * Kept in the model file (`ccDocData('flow')` key `plc`): mode, unit, cycle, soft program, address map. The PLC's host and port are per computer (add-on storage), never in the file,
 * and nothing here has a password field. The logic is lib/plc-mode.js (DOM-free, tested in Node).
 */
import { cleanSetup, defaultMap, checkMap, TagBridge, RealLink, SoftLive, runSoft, loadEngines, TABLES, TYPES } from './lib/plc-mode.js';
import { pickTransport } from './lib/plc-transport.js';
import { Sim } from '../../flow/sim.js';

const el = (tag, attrs = {}, ...kids) => {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) e.append(c instanceof Node ? c : document.createTextNode(String(c)));
  return e;
};
const CSS = `
.flow-plcmode{display:flex;flex-direction:column;gap:.5rem;font-size:.85rem}
.flow-plcmode .row{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center}
.flow-plcmode label{display:flex;justify-content:space-between;gap:.4rem;align-items:center}
.flow-plcmode label>span{flex:1;color:var(--ink-2,#555)}
.flow-plcmode input[type=text],.flow-plcmode input[type=number],.flow-plcmode select{font:inherit;padding:.1rem .25rem;min-width:0}
.flow-plcmode input[type=text],.flow-plcmode input[type=number]{width:7.5rem;max-width:60%}
.flow-plcmode textarea{width:100%;min-height:9rem;font:.78rem/1.3 ui-monospace,monospace;box-sizing:border-box}
.flow-plcmode button{width:auto;flex:0 0 auto;font:inherit;padding:.15rem .5rem;border:1px solid var(--line,#99a);background:transparent;color:inherit;border-radius:2px;cursor:pointer}
.flow-plcmode button.primary{border-width:2px;font-weight:600}
.flow-plcmode .msg{color:var(--ink-2,#555);margin:0}.flow-plcmode .bad{color:#b3122e;margin:0}
.flow-plcmode .safety{border:2px solid #b3122e;padding:.35rem .5rem;margin:0}
.flow-plcmode table{width:100%;border-collapse:collapse}.flow-plcmode td{padding:.1rem .15rem;border-bottom:1px solid var(--line,#dde)}
.flow-plcmode td select,.flow-plcmode td input{width:100%;max-width:100%}
.flow-plcmode .modes{display:flex;gap:1rem}
`;

export function mountPlcUi({ api, t, getGraph, getLive, docApi, download }) {
  let setup = cleanSetup(null), engines = null, engineErr = '', root = null, msg = '', bad = false, softResult = null, link = null, soft = null, ack = false, timer = 0;
  const transport = pickTransport();
  const load = () => { setup = cleanSetup(docApi ? docApi.data('plc') : api.storage.get('plc')); };
  let lastSaved = JSON.stringify(setup);
  const save = () => { setup = cleanSetup(setup); const j = JSON.stringify(setup); if (j === lastSaved) return; lastSaved = j; if (docApi) docApi.setData('plc', setup); else api.storage.set('plc', setup); };
  load(); lastSaved = JSON.stringify(setup);
  if (docApi) docApi.onOpen(() => { detach(); load(); lastSaved = JSON.stringify(setup); render(); });
  // connection settings: this computer only (never in the model file)
  const conn = () => { const c = api.storage.get('plc-conn') || {}; return { host: String(c.host || ''), port: Math.round(Number(c.port)) || 502 }; };
  const setConn = (k, v) => { api.storage.set('plc-conn', { ...conn(), [k]: v }); };

  const style = el('style', { 'data-addon': 'flow-plcmode', text: CSS });
  document.head.append(style);
  api.onDeactivate(() => { detach(); clearInterval(timer); style.remove(); });

  const say = (m, isBad = false) => { msg = m; bad = isBad; };
  const io = () => (engines ? engines.commission.ioList(getGraph()) : null);
  const map = () => setup.map || (io() ? defaultMap(io()) : []);

  function detach() {
    if (link) { link.stop(); link = null; }
    soft = null;
  }
  // a live run that ends takes the controller with it; the soft PLC scans with the model's clock
  timer = setInterval(() => {
    const live = getLive();
    if ((link || soft) && (!live || (link && link.bridge.sim !== live.sim) || (soft && soft.sim !== live.sim))) {
      const wasReal = !!link; detach(); say(t(wasReal ? 'plcmode.real.ended' : 'plcmode.soft.ended')); render(); return;
    }
    if (link && link.state === 'lost') { const why = link.lastError; detach(); say(t('plcmode.real.lost', { why }), true); render(); return; }
    if (soft && live) soft.tick();
  }, 50);

  async function runFast() {
    if (!engines) return;
    const prog = setup.program.trim() || engines.commission.starterProgram(getGraph());
    softResult = runSoft({ engines, Sim, graph: getGraph(), program: prog, seconds: 600, seed: 1, cycleMs: setup.cycleMs });
    say(softResult.ok ? t('plcmode.soft.ran') : t('plcmode.soft.bad'), !softResult.ok);
    render();
  }
  function attachSoft() {
    const live = getLive();
    if (!live) { say(t('plcmode.needLive'), true); render(); return; }
    detach();
    const prog = setup.program.trim() || engines.commission.starterProgram(getGraph());
    const s = new SoftLive({ engines, sim: live.sim, io: io(), program: prog, cycleMs: setup.cycleMs });
    if (!s.ok) { say(t('plcmode.soft.bad') + ' ' + s.problems.map((p) => p.text || p.message || '').slice(0, 2).join(' '), true); render(); return; }
    soft = s; say(t('plcmode.soft.attached')); render();
  }
  async function connectReal() {
    const live = getLive();
    if (!live) { say(t('plcmode.needLive'), true); render(); return; }
    if (!ack) { say(t('plcmode.needAck'), true); render(); return; }
    detach();
    const c = conn();
    const l = new RealLink({ transport, bridge: new TagBridge({ sim: live.sim, io: io() }), map: map(), io: io(), unit: setup.unit, wordSwap: setup.wordSwap, host: c.host, port: c.port, cycleMs: setup.cycleMs });
    try { await l.connect(); } catch (e) { say(t('plcmode.real.refused', { why: String((e && e.message) || e).slice(0, 160) }), true); render(); return; }
    link = l; l.start(); say(t('plcmode.real.on', { host: c.host, port: c.port })); render();
  }

  function mapEditor(rows, probs) {
    const bad = new Set(probs.map((p) => p.tag));
    const set = (r, k, v) => { r[k] = v; setup.map = rows; save(); render(); };
    const tbl = el('table', {}, el('tr', {}, ['tag', 'type', 'table', 'address', 'scale'].map((k) => el('th', { text: t('plcmode.col.' + k) }))),
      rows.map((r) => el('tr', { class: bad.has(r.tag) ? 'bad' : '' },
        el('td', { text: r.tag + (r.dir === 'from-plc' ? ' ←' : ' →') }),
        el('td', {}, el('select', { 'aria-label': t('plcmode.col.type') + ' ' + r.tag, onchange: (e) => set(r, 'type', e.target.value) }, TYPES.map((x) => el('option', { value: x, selected: x === r.type, text: x })))),
        el('td', {}, el('select', { 'aria-label': t('plcmode.col.table') + ' ' + r.tag, onchange: (e) => set(r, 'table', e.target.value) }, TABLES.map((x) => el('option', { value: x, selected: x === r.table, text: t('plcmode.table.' + x) })))),
        el('td', {}, el('input', { type: 'number', min: 0, max: 65535, step: 1, value: r.address, 'aria-label': t('plcmode.col.address') + ' ' + r.tag, onchange: (e) => set(r, 'address', Math.round(Number(e.target.value)) || 0) })),
        el('td', {}, el('input', { type: 'number', step: 'any', value: r.scale, 'aria-label': t('plcmode.col.scale') + ' ' + r.tag, onchange: (e) => set(r, 'scale', Number(e.target.value) || 1) })))));
    return tbl;
  }

  function render() {
    if (!root) return;
    root.textContent = '';
    const p = el('div', { class: 'flow-plcmode' });
    // the safety line is always there, in both modes
    p.append(el('p', { class: 'safety', role: 'note' }, el('strong', { text: t('plcmode.safety.title') + ' ' }), t('plcmode.safety')));
    p.append(el('div', { class: 'modes', role: 'radiogroup', 'aria-label': t('plcmode.title') },
      ['soft', 'real'].map((m) => el('label', {}, el('input', { type: 'radio', name: 'plcmode', value: m, checked: setup.mode === m, onchange: () => { detach(); setup.mode = m; save(); say(''); render(); } }), el('span', { text: t('plcmode.mode.' + m) })))));
    if (!engines) {
      p.append(el('p', { class: engineErr ? 'bad' : 'msg', text: engineErr ? t('plcmode.noengine') : t('plcmode.loading') }));
      root.append(p);
      if (!engineErr) loadEngines().then((e) => { engines = e; render(); }, (e) => { engineErr = String(e && e.message || e); render(); });
      return;
    }
    const tags = io();
    const gates = tags.outputs.length;
    p.append(el('p', { class: 'msg', text: t('plcmode.tags', { inputs: tags.inputs.length, outputs: gates }) }));
    if (!gates) p.append(el('p', { class: 'msg', text: t('plcmode.nogate') }));
    const live = getLive();

    if (setup.mode === 'soft') {
      p.append(el('p', { class: 'msg', text: t('plcmode.soft.intro') }));
      p.append(el('textarea', { 'aria-label': t('plcmode.soft.program'), spellcheck: 'false', placeholder: t('plcmode.soft.placeholder'), onchange: (e) => { setup.program = e.target.value; save(); } }, setup.program));
      p.append(el('div', { class: 'row' },
        el('button', { type: 'button', text: t('plcmode.soft.starter'), onclick: () => { setup.program = engines.commission.starterProgram(getGraph()); save(); render(); } }),
        el('button', { type: 'button', class: 'primary', text: t('plcmode.soft.run'), title: t('plcmode.soft.run.hint'), disabled: !getGraph().elements.length, onclick: runFast }),
        soft ? el('button', { type: 'button', text: t('plcmode.soft.detach'), onclick: () => { detach(); say(''); render(); } })
          : el('button', { type: 'button', text: t('plcmode.soft.attach'), title: t('plcmode.soft.attach.hint'), disabled: !live || !gates, onclick: attachSoft })));
      if (softResult) {
        if (softResult.ok) {
          const s = softResult.summary;
          p.append(el('table', {}, [['plcmode.res.done', s.done], ['plcmode.res.hour', s.perHour], ['plcmode.res.scans', s.scans], ['plcmode.res.unbound', s.unbound.length ? s.unbound.join(', ') : t('plcmode.res.none')]].map(([k, v]) => el('tr', {}, el('td', { text: t(k) }), el('td', { text: String(v) })))));
        } else p.append(el('ul', { class: 'bad' }, softResult.problems.slice(0, 5).map((x) => el('li', { text: x.text || x.message || String(x.code || x) }))));
      }
    } else {
      p.append(el('p', { class: 'msg', text: t('plcmode.real.intro') }));
      if (!transport.available) {
        p.append(el('p', { class: 'bad', role: 'status', text: t(transport.kind === 'studio-old' ? 'plcmode.real.oldStudio' : 'plcmode.real.browser') }));
      }
      const c = conn();
      const rows = map(), probs = checkMap(rows, tags);
      const off = !transport.available;
      p.append(el('label', {}, el('span', { text: t('plcmode.host') }), el('input', { type: 'text', value: c.host, placeholder: '192.168.1.20', autocomplete: 'off', disabled: off, 'aria-label': t('plcmode.host'), onchange: (e) => setConn('host', e.target.value.trim()) })));
      p.append(el('label', {}, el('span', { text: t('plcmode.port') }), el('input', { type: 'number', min: 1, max: 65535, step: 1, value: c.port, disabled: off, onchange: (e) => setConn('port', Math.max(1, Math.min(65535, Math.round(Number(e.target.value)) || 502))) })));
      p.append(el('label', {}, el('span', { text: t('plcmode.unit') }), el('input', { type: 'number', min: 0, max: 247, step: 1, value: setup.unit, disabled: off, onchange: (e) => { setup.unit = Number(e.target.value); save(); } })));
      p.append(el('label', {}, el('span', { text: t('plcmode.cycle') }), el('input', { type: 'number', min: 20, max: 1000, step: 10, value: setup.cycleMs, disabled: off, onchange: (e) => { setup.cycleMs = Number(e.target.value); save(); } })));
      p.append(el('p', { class: 'msg', text: t('plcmode.hostNote') }));
      p.append(el('details', {}, el('summary', { text: t('plcmode.map', { n: rows.length }) }), mapEditor(rows, probs),
        el('div', { class: 'row' },
          el('button', { type: 'button', text: t('plcmode.map.reset'), onclick: () => { setup.map = null; save(); render(); } }),
          el('button', { type: 'button', text: t('plcmode.map.csv'), onclick: () => download('flow-plc-map.csv', ['tag,direction,type,table,address,scale', ...rows.map((r) => [r.tag, r.dir, r.type, r.table, r.address, r.scale].join(','))].join('\r\n') + '\r\n', 'text/csv') }))));
      if (probs.length) p.append(el('ul', { class: 'bad' }, probs.slice(0, 5).map((x) => el('li', { text: t('plcmode.problem.' + x.code, { tag: x.tag }) }))));
      p.append(el('label', {}, el('input', { type: 'checkbox', checked: ack, disabled: off, onchange: (e) => { ack = e.target.checked; render(); } }), el('span', { text: t('plcmode.ack') })));
      p.append(el('div', { class: 'row' }, link
        ? el('button', { type: 'button', class: 'primary', text: t('plcmode.real.disconnect'), onclick: () => { detach(); say(t('plcmode.real.off')); render(); } })
        : el('button', { type: 'button', class: 'primary', text: t('plcmode.real.connect'), title: t('plcmode.real.connect.hint'), disabled: off || !live || !gates || probs.length > 0 || !ack, onclick: connectReal })));
      if (link) {
        const s = link.stats;
        p.append(el('p', { class: 'msg', role: 'status', 'data-plcstats': '1', text: t('plcmode.real.stats', { cycles: s.cycles, errors: s.errors, last: link.lastError || t('plcmode.res.none') }) }));
      }
    }
    if (msg) p.append(el('p', { class: bad ? 'bad' : 'msg', role: 'status', text: msg }));
    p.append(el('p', { class: 'msg', text: t('plcmode.note') }));
    root.append(p);
  }
  api.ui.panelSection({ id: 'flow-plcmode', title: t('plcmode.title'), side: 'right', render(e) { root = e; render(); } });
  // the status line of a running link follows the stats a few times a second
  const poll = setInterval(() => { if (link && root && root.isConnected) { const m = root.querySelector('[data-plcstats]'); if (m && link) { const s = link.stats; m.textContent = t('plcmode.real.stats', { cycles: s.cycles, errors: s.errors, last: link.lastError || t('plcmode.res.none') }); } } }, 500);
  api.onDeactivate(() => clearInterval(poll));
  return {
    refresh: render,
    state: () => ({ mode: setup.mode, real: !!link, soft: !!soft, available: transport.available }),
    setup: () => cleanSetup(setup),
  };
}
