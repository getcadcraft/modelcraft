/* SPDX-License-Identifier: Apache-2.0 */
/**
 * robot-ui.js — the "Robot cell" panel of the Material flow add-on (0.9 SU.1128, session flow-robots-09). One robot per cell: pick
 * a kind, place it, see which stations it can reach, write or generate a program, run it for the cycle time, export the
 * neutral text program (CCROBOT 1) or the path list (CSV), and copy the cycle time into a station's process time.
 * 0.9 (owner 2026-11-06, "allow the user to select robot formats"): a robot model picker with an editable joint table, and a
 * format picker (checkboxes: path list always, ROS URDF, joint trajectory, and the vendor languages two public sources confirm)
 * whose choice is saved with the document and remembered as the person's default (api.storage 'robotFormats').
 * The maths is lib/robot.js (DOM-free). The cell is kept in the model file next to the layout (`ccDocData('flow')` key `robot`).
 */
import { makeRobot, reachReport, envelopeRadii, parseProgram, runProgram, pathCsv, formatProgram } from './lib/robot.js';
import { LIBRARY, libraryById, robotFromLibrary } from './lib/robot-library.js';
import { FORMATS, cleanSelection, exportOne } from './lib/robot-formats.js';
import { FORMAT_SOURCES, LEFT_OUT, SOURCES_DATE } from './lib/robot-sources.js';
import { footprint } from '../../flow/catalog.js';

const TARGET_KINDS = ['station', 'buffer', 'source', 'sink', 'agv-pick', 'agv-drop'];
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
const r3 = (v) => Math.round(v * 1000) / 1000;

/** Station-like items of a layout as reach targets: the tool point is the middle of the top of the item. */
export function layoutTargets(layout) {
  return (layout.items || []).filter((i) => TARGET_KINDS.includes(i.kind)).map((i) => {
    const fp = footprint(i.kind, i.params || {});
    return { name: i.id, p: [i.x, i.y, (i.z || 0) + fp.h] };
  });
}
/** A first program that picks at the first target and places at the second. */
export function sampleProgram(robot, targets) {
  const a = targets[0], b = targets[1] || targets[0];
  if (!a) return 'CCROBOT 1\nrobot ' + robot.id + '\nhome\nwait 1\nhome\n';
  return formatProgram({ robot: robot.id, points: {}, ops: [{ op: 'speed', v: 100 }, { op: 'home' }, { op: 'pick', to: a.name }, { op: 'place', to: b.name }, { op: 'home' }] });
}

export function mountRobotUi({ api, t, getLayout, docApi, download, useCycle }) {
  let cell = null, text = '', run = null, parse = null, msg = '', root = null, libId = 'generic-scara', gripOut = 1, exportMsgs = [];
  let sel = cleanSelection((api.storage.get('robotFormats') || {}).sel);
  const load = () => {
    const raw = docApi ? docApi.data('robot') : api.storage.get('robot');
    if (raw && typeof raw === 'object') {
      cell = makeRobot(raw.type, raw.robot); text = typeof raw.program === 'string' ? raw.program.slice(0, 20000) : '';
      if (typeof raw.lib === 'string' && libraryById(raw.lib)) libId = raw.lib; else libId = (LIBRARY.find((e) => e.type === cell.type) || LIBRARY[0]).id;
      if (Array.isArray(raw.formats)) sel = cleanSelection(raw.formats);
      if (Number.isInteger(raw.gripOut) && raw.gripOut >= 0 && raw.gripOut <= 99) gripOut = raw.gripOut;
    } else { cell = null; text = ''; }
    run = null; parse = null; exportMsgs = [];
  };
  const save = () => {
    const v = cell ? { type: cell.type, robot: cell, program: text, lib: libId, formats: sel, gripOut } : null;
    if (docApi) docApi.setData('robot', v); else api.storage.set('robot', v);
    try { api.storage.set('robotFormats', { sel }); } catch (e) { /* the per-document choice still holds */ }
  };
  load();
  if (docApi) docApi.onOpen(() => { load(); render(); });

  const issueText = (i) => t((i.code === 'io-syntax' ? 'robotx.issue.' : 'robot.issue.') + i.code, { line: i.line, target: i.target || '', at: i.at ?? '', why: i.why ? t('robot.why.' + i.why) : '', word: i.word || '' });
  const field = (label, value, onset, attrs = {}) => el('label', {}, el('span', { text: label }), el('input', { type: 'number', step: 'any', value, ...attrs, onchange: (e) => { const v = Number(e.target.value); if (Number.isFinite(v)) onset(v); } }));

  function targetMap() {
    const m = {};
    for (const x of layoutTargets(getLayout())) m[x.name] = x.p;
    return m;
  }
  function doRun() {
    parse = parseProgram(text); run = null; msg = '';
    if (!parse.ok) return render();
    const targets = targetMap();
    run = runProgram({ robot: cell, targets, gripOut }, parse.prog);
    render();
  }
  /** The robot as the raw spec makeRobot reads (SCARA and Cartesian keep their ranges in arrays). */
  function rawOf(c) {
    if (c.type === 'scara') return { ...c, q1min: c.q1[0], q1max: c.q1[1], q2min: c.q2[0], q2max: c.q2[1] };
    if (c.type === 'cartesian') return { ...c, xmin: c.rx[0], xmax: c.rx[1], ymin: c.ry[0], ymax: c.ry[1], zmin: c.rz[0], zmax: c.rz[1] };
    return { ...c };
  }
  const PARAMS = {
    scara: [['l1', 'm'], ['l2', 'm'], ['zmin', 'm'], ['zmax', 'm'], ['q1min', '°'], ['q1max', '°'], ['q2min', '°'], ['q2max', '°']],
    delta: [['f', 'm'], ['e', 'm'], ['rf', 'm'], ['re', 'm'], ['zmin', 'm'], ['zmax', 'm']],
    cartesian: [['xmin', 'm'], ['xmax', 'm'], ['ymin', 'm'], ['ymax', 'm'], ['zmin', 'm'], ['zmax', 'm']],
  };
  const COLS = [['a', 'm'], ['alpha', '°'], ['d', 'm'], ['offset', '°'], ['min', '°'], ['max', '°'], ['vmax', '°/s'], ['amax', '°/s²']];
  /** The joint table of the robot, editable: Denavit-Hartenberg rows for arms, lengths and ranges for the others. */
  function modelEditor() {
    const raw = rawOf(cell);
    const box = el('details', { class: 'flow-robot-model' }, el('summary', { text: t('robotx.table') }));
    if (cell.type === 'arm') {
      const edit = (i, k, v) => { const joints = cell.joints.map((j) => ({ ...j })); joints[i][k] = v; cell = makeRobot('arm', { ...raw, joints }); run = null; save(); render(); };
      box.append(el('p', { class: 'msg', text: t('robotx.table.dh') }));
      box.append(el('table', {}, el('tr', {}, el('th', { text: '#' }), COLS.map(([k, u]) => el('th', { text: t('robotx.col.' + k) + ' (' + u + ')' })), el('th', {})),
        cell.joints.map((j, i) => el('tr', {}, el('td', { text: String(i + 1) }),
          COLS.map(([k]) => el('td', {}, el('input', { type: 'number', step: 'any', value: r3(j[k]), 'aria-label': t('robotx.col.' + k) + ' ' + (i + 1), style: 'width:5.5em',
            onchange: (e) => { const v = Number(e.target.value); if (Number.isFinite(v)) edit(i, k, v); } }))),
          el('td', {}, cell.joints.length > 3 ? el('button', { type: 'button', text: '×', 'aria-label': t('robotx.removeJoint', { n: i + 1 }), onclick: () => { const joints = cell.joints.filter((_, x) => x !== i); cell = makeRobot('arm', { ...raw, joints, home: undefined }); run = null; save(); render(); } }) : null)))));
      if (cell.joints.length < 8) box.append(el('button', { type: 'button', text: t('robotx.addJoint'), onclick: () => { const joints = [...cell.joints.map((j) => ({ ...j })), { a: 0.1, alpha: 0, d: 0 }]; cell = makeRobot('arm', { ...raw, joints, home: undefined }); run = null; save(); render(); } }));
    } else {
      box.append(el('p', { class: 'msg', text: t('robotx.table.' + cell.type) }));
      box.append(el('div', { class: 'row' }, PARAMS[cell.type].map(([k, u]) => field(t('robotx.param.' + k) + ' (' + u + ')', r3(raw[k]), (v) => set(k, v)))));
    }
    return box;
  }
  const typeNames = { arm: 'robotx.kind.arm', scara: 'robotx.kind.scara', delta: 'robotx.kind.delta', cartesian: 'robotx.kind.cartesian' };
  void typeNames;
  /** Saves the chosen files: runs the program when it has not been run, then one file per ticked format; refusals are listed. */
  function doExport() {
    parse = parseProgram(text); exportMsgs = [];
    if (!parse.ok) { run = null; return render(); }
    run = runProgram({ robot: cell, targets: targetMap(), gripOut }, parse.prog);
    if (!run.ok) { exportMsgs.push({ bad: true, text: t('robot.stopped', { s: r3(run.cycle) }) }); return render(); }
    for (const id of sel) {
      const f = FORMATS.find((x) => x.id === id), res = exportOne(id, run, { robot: cell, gripOut });
      if (!res.ok) { exportMsgs.push({ bad: true, text: t('robotx.fmt.refused', { name: f.name, why: t('robotx.refused.' + res.refused.code, { ...res.refused, type: t('robotx.kind.' + cell.type) }) }) }); continue; }
      download(res.file.name, res.file.text, res.file.mime);
      exportMsgs.push({ text: t('robotx.fmt.saved', { name: res.file.name }) + (res.omitted.length ? ' ' + t('robotx.fmt.omitted', { what: res.omitted.map((w) => t('robotx.omit.' + w)).join(', ') }) : '') });
    }
    render();
  }
  function formatPicker() {
    const box = el('fieldset', { class: 'flow-robot-formats' }, el('legend', { text: t('robotx.fmt.title') }), el('p', { class: 'msg', text: t('robotx.fmt.hint') }));
    for (const g of ['neutral', 'open', 'vendor']) {
      const list = FORMATS.filter((f) => f.group === g);
      if (!list.length) continue;
      box.append(el('div', { class: 'row', role: 'group', 'aria-label': t('robotx.fmt.group.' + g) }, el('strong', { text: t('robotx.fmt.group.' + g) }),
        list.map((f) => {
          const supported = f.types.includes(cell.type), on = sel.includes(f.id);
          return el('label', { title: supported ? '' : t('robotx.fmt.unsupported', { type: t('robotx.kind.' + cell.type) }) },
            el('input', { type: 'checkbox', 'data-format': f.id, checked: on || f.always, disabled: !!f.always || !supported,
              onchange: (e) => { sel = cleanSelection(e.target.checked ? [...sel, f.id] : sel.filter((x) => x !== f.id)); exportMsgs = []; save(); render(); } }),
            ' ', f.name, f.always ? ' ' + t('robotx.fmt.always') : '', supported ? '' : ' ' + t('robotx.fmt.unsupportedShort'));
        })));
    }
    box.append(el('div', { class: 'row' },
      field(t('robotx.fmt.gripOut'), gripOut, (v) => { gripOut = Math.max(0, Math.min(99, Math.round(v))); run = null; save(); render(); }, { min: 0, max: 99, step: 1 }),
      el('button', { type: 'button', class: 'primary', 'data-action': 'save-formats', text: t('robotx.fmt.save'), onclick: doExport })));
    if (exportMsgs.length) box.append(el('ul', { role: 'status' }, exportMsgs.map((m) => el('li', { class: m.bad ? 'bad' : '', text: m.text }))));
    box.append(el('p', { class: 'msg', text: t('robotx.fmt.unverified') }));
    const src = el('details', {}, el('summary', { text: t('robotx.src.title') }), el('p', { class: 'msg', text: t('robotx.src.read', { date: SOURCES_DATE }) }));
    for (const f of FORMATS) {
      const S = FORMAT_SOURCES[f.id]; if (!S) continue;
      src.append(el('h4', { text: f.name }), el('ul', {}, S.urls.map((u) => el('li', { text: u }))), S.note ? el('p', { class: 'msg', text: S.note }) : null);
    }
    src.append(el('h4', { text: t('robotx.src.leftOut') }), el('ul', {}, LEFT_OUT.map((x) => el('li', { text: x.name + ': ' + x.why }))));
    box.append(src);
    return box;
  }

  function render() {
    if (!root) return;
    root.textContent = '';
    const p = el('div', { class: 'flow-robot' });
    // choose a model from the library and place it
    p.append(el('div', { class: 'row' },
      el('label', {}, el('span', { text: t('robotx.model.pick') }), el('select', { 'aria-label': t('robotx.model.pick'), onchange: (e) => { libId = e.target.value; } },
        LIBRARY.map((m) => el('option', { value: m.id, selected: m.id === libId, text: m.name })))),
      el('button', { type: 'button', class: 'primary', text: cell ? t('robotx.model.use') : t('robot.add'), onclick: () => {
        const old = cell;
        cell = robotFromLibrary(libId, old);
        const tg = layoutTargets(getLayout()); text = sampleProgram(cell, tg); run = null; parse = null; exportMsgs = []; save(); render();
      } }),
      cell ? el('button', { type: 'button', text: t('robot.remove'), onclick: () => { cell = null; text = ''; run = null; parse = null; exportMsgs = []; save(); render(); } }) : null));
    if (!cell) { p.append(el('p', { class: 'msg', text: t('robot.none') })); p.append(el('p', { class: 'msg', text: t('robot.note') })); root.append(p); return; }
    const lib = libraryById(libId);
    if (lib && lib.sources && cell.name === lib.spec.name) p.append(el('p', { class: 'msg', text: lib.note }), el('details', {}, el('summary', { text: t('robotx.src.model') }), el('ul', {}, lib.sources.map((u) => el('li', { text: u })))));
    const set = (k, v) => { cell = makeRobot(cell.type, { ...rawOf(cell), [k]: v }); run = null; save(); render(); };
    p.append(el('fieldset', {}, el('legend', { text: t('robot.cell', { name: cell.name || t('robotx.kind.' + cell.type) }) }),
      field(t('pos.x') + ' (m)', r3(cell.x), (v) => set('x', v)), field(t('pos.y') + ' (m)', r3(cell.y), (v) => set('y', v)),
      field(t('pos.z') + ' (m)', r3(cell.z), (v) => set('z', v)), field(t('pos.rot') + ' (°)', r3(cell.rot), (v) => set('rot', v)),
      cell.type !== 'delta' ? field(t('robot.tool') + ' (m)', cell.tool, (v) => set('tool', v)) : null,
      field(t('robot.tcpV') + ' (m/s)', cell.tcpV, (v) => set('tcpV', v)), field(t('robot.tcpA') + ' (m/s²)', cell.tcpA, (v) => set('tcpA', v))));
    p.append(modelEditor());
    // reach
    const rows = reachReport(cell, layoutTargets(getLayout()), 0.1);
    const env = cell.type === 'delta' ? envelopeRadii(cell, (cell.z + (cell.zmin + cell.zmax) / 2)) : envelopeRadii(cell, cell.z + (cell.type === 'scara' ? (cell.zmin + cell.zmax) / 2 : 0.2));
    p.append(el('fieldset', {}, el('legend', { text: t('robot.reach') }),
      el('p', { class: 'msg', text: env ? t('robot.envelope', { min: env.min, max: env.max }) : t('robot.envelopeNone') }),
      rows.length ? el('table', {}, rows.map((r) => el('tr', {}, el('td', { text: r.name }), el('td', { text: r.ok ? t('robot.reach.ok') : t('robot.reach.no', { why: t('robot.why.' + r.why.replace('approach-', '')) }) }), el('td', { text: r3(r.dist) + ' m' }))))
        : el('p', { class: 'msg', text: t('robot.reach.empty' ) })));
    // program
    p.append(el('fieldset', {}, el('legend', { text: t('robot.program') }),
      el('textarea', { rows: 9, spellcheck: 'false', 'aria-label': t('robot.program'), style: 'width:100%;font-family:monospace', oninput: (e) => { text = e.target.value; run = null; parse = null; save(); } }, text),
      el('div', { class: 'row' },
        el('button', { type: 'button', class: 'primary', text: t('robot.run'), onclick: doRun }),
        el('button', { type: 'button', text: t('robot.sample'), onclick: () => { text = sampleProgram(cell, layoutTargets(getLayout())); run = null; parse = null; save(); render(); } }),
        el('button', { type: 'button', text: t('robot.exportProgram'), onclick: () => download('robot-program.ccrobot.txt', text, 'text/plain') }))));
    if (parse && !parse.ok) {
      p.append(el('p', { class: 'msg bad', role: 'status', text: t('robot.syntax') }));
      p.append(el('ul', {}, parse.errors.slice(0, 10).map((e) => el('li', { text: t((e.code === 'io-syntax' ? 'robotx.issue.' : 'robot.issue.') + e.code, { line: e.line, word: e.word || '' }) }))));
    }
    if (run) {
      const res = el('fieldset', {}, el('legend', { text: t('robot.result') }),
        el('p', { class: run.ok ? 'msg' : 'msg bad', role: 'status', text: run.ok ? t('robot.cycle', { s: r3(run.cycle) }) : t('robot.stopped', { s: r3(run.cycle) }) }),
        run.issues.length ? el('ul', {}, run.issues.map((i) => el('li', { text: issueText(i) }))) : null,
        el('table', {}, run.steps.map((s) => el('tr', {}, el('td', { text: String(s.line) }), el('td', { text: t((s.op === 'out' || s.op === 'waitin' ? 'robotx.op.' : 'robot.op.') + s.op) }), el('td', { text: s.target }), el('td', { text: r3(s.t) + ' s' }), el('td', { text: r3(s.tcum) + ' s' })))));
      if (run.ok) {
        const stations = (getLayout().items || []).filter((i) => i.kind === 'station');
        const pick = el('select', { 'aria-label': t('robot.useCycle') }, stations.map((i) => el('option', { value: i.id, text: i.id })));
        res.append(el('div', { class: 'row' },
          el('button', { type: 'button', text: t('robot.exportCsv'), onclick: () => download('robot-path.csv', pathCsv(run), 'text/csv') }),
          stations.length ? [pick, el('button', { type: 'button', text: t('robot.useCycle'), onclick: () => { useCycle(pick.value, run.cycle); msg = t('robot.used', { id: pick.value, s: r3(run.cycle) }); render(); } })] : null));
      }
      p.append(res);
    }
    p.append(formatPicker());
    if (msg) p.append(el('p', { class: 'msg', role: 'status', text: msg }));
    p.append(el('p', { class: 'msg', text: t('robot.note') }));
    root.append(p);
  }
  api.ui.panelSection({ id: 'flow-robots', title: t('robot.title'), side: 'right', render(e) { root = e; render(); } });
  return { refresh: render };
}
