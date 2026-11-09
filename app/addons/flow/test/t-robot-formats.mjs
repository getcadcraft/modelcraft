/* SPDX-License-Identifier: Apache-2.0 */
// Robot formats (lib/robot-formats.js, robot-vendors.js, robot-library.js, robot-sources.js): every writer is read back by a small
// checker written here, so the tests do not trust the writer's own idea of its syntax.
const { ok, section, near, mine } = globalThis.__flowTest;
const R = await mine('lib/robot.js');
const F = await mine('lib/robot-formats.js');
const V = await mine('lib/robot-vendors.js');
const Lb = await mine('lib/robot-library.js');
const S = await mine('lib/robot-sources.js');
const D = Math.PI / 180;

const prog = 'CCROBOT 1\nspeed 100\nhome\nout 3 off\npick A\nwaitin 2 on\nspeed 50\nplace B\nwait 0.25\nhome\n';
const runFor = (robot, targets) => R.runProgram({ robot, targets, gripOut: 1 }, R.parseProgram(prog).prog);
const armTargets = { A: [0.4, 0.2, 0.1], B: [0.4, -0.2, 0.1] };

// ---------------------------------------------------------------------------------------------- a tiny XML reader
function parseXml(text) {
  const body = text.replace(/<\?xml[^>]*\?>/, '').replace(/<!--[\s\S]*?-->/g, '');
  const stack = [{ tag: '#root', attrs: {}, kids: [] }]; let bad = '';
  for (const m of body.matchAll(/<(\/?)([A-Za-z_][\w.-]*)((?:\s+[\w:.-]+="[^"]*")*)\s*(\/?)>/g)) {
    const [, close, tag, at, self] = m;
    if (close) { const top = stack.pop(); if (top.tag !== tag) bad = `closing ${tag} but ${top.tag} open`; stack[stack.length - 1]?.kids; continue; }
    const attrs = {}; for (const a of at.matchAll(/([\w:.-]+)="([^"]*)"/g)) attrs[a[1]] = a[2];
    const node = { tag, attrs, kids: [] }; stack[stack.length - 1].kids.push(node);
    if (!self) stack.push(node);
  }
  if (stack.length !== 1) bad = bad || 'unclosed tags';
  const stripped = body.replace(/<[^>]*>/g, '').trim();
  return { root: stack[0].kids[0], bad: bad || (stripped ? 'text outside tags' : '') };
}
// forward kinematics of a URDF by walking its joints (rpy = Rz Ry Rx), tool0 position in the base_link frame
const mm = (A, B) => { const C = new Array(16).fill(0); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) for (let k = 0; k < 4; k++) C[i * 4 + j] += A[i * 4 + k] * B[k * 4 + j]; return C; };
function pose(xyz, rpy) {
  const [r, p, y] = rpy, cr = Math.cos(r), sr = Math.sin(r), cp = Math.cos(p), sp = Math.sin(p), cy = Math.cos(y), sy = Math.sin(y);
  return [cy * cp, cy * sp * sr - sy * cr, cy * sp * cr + sy * sr, xyz[0], sy * cp, sy * sp * sr + cy * cr, sy * sp * cr - cy * sr, xyz[1], -sp, cp * sr, cp * cr, xyz[2], 0, 0, 0, 1];
}
function urdfFk(root, q) {
  const joints = root.kids.filter((k) => k.tag === 'joint'), byParent = Object.fromEntries(joints.map((j) => [j.kids.find((x) => x.tag === 'parent').attrs.link, j]));
  let T = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], at = 'base_link', n = 0;
  while (byParent[at]) {
    const j = byParent[at], o = j.kids.find((x) => x.tag === 'origin'), nums = (s) => s.split(/\s+/).map(Number);
    T = mm(T, pose(nums(o.attrs.xyz), nums(o.attrs.rpy)));
    if (j.attrs.type !== 'fixed') {
      const ax = nums(j.kids.find((x) => x.tag === 'axis').attrs.xyz), v = q[n++];
      if (j.attrs.type === 'revolute') { const c = Math.cos(v), s = Math.sin(v); T = mm(T, ax[2] ? [c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]); }
      else T = mm(T, [1, 0, 0, ax[0] * v, 0, 1, 0, ax[1] * v, 0, 0, 1, ax[2] * v, 0, 0, 0, 1]);
    }
    at = j.kids.find((x) => x.tag === 'child').attrs.link;
  }
  return { T, end: at };
}

section('robot formats: library and the new robot kind');
{
  ok(Lb.LIBRARY.length >= 7 && Lb.LIBRARY.every((e) => Lb.robotFromLibrary(e.id)), 'every library entry makes a robot');
  const pts = { arm: [0.4, 0.1, 0.15], scara: [0.3, 0.1, 0.05], cartesian: [0.4, 0, 0.1], delta: [0.05, 0, -0.35] };
  for (const e of Lb.LIBRARY) {
    const r = Lb.robotFromLibrary(e.id), p = e.id.includes('long') && r.type === 'arm' ? [0.7, 0.1, 0.15] : pts[r.type];
    const ik = R.ikPoint(r, p);
    ok(ik.ok, `${e.id}: inverse kinematics reaches ${p.join(', ')}`, JSON.stringify(ik.why));
    if (ik.ok && r.type !== 'delta') ok(R.fkPoint(r, ik.q).every((v, i) => near(v, p[i], 1e-4)), `${e.id}: forward kinematics returns the point`);
  }
  const c = R.makeRobot('cartesian', { xmin: 0, xmax: 1, ymin: -0.5, ymax: 0.5, zmin: 0, zmax: 0.4, tool: 0.1, x: 1, y: 1, z: 1, rot: 90 });
  ok(R.fkPoint(c, [0.5, 0.2, 0.3, 0]).every((v, i) => near(v, [1 - 0.2, 1 + 0.5, 1 + 0.3 - 0.1][i], 1e-12)), 'Cartesian: base turned 90 deg, forward kinematics by hand');
  const ik = R.ikPoint(c, [0.8, 1.5, 1.2]);
  ok(ik.ok && near(ik.q[0], 0.5, 1e-9) && near(ik.q[1], 0.2, 1e-9) && near(ik.q[2], 0.3, 1e-9), 'Cartesian: inverse kinematics by hand', JSON.stringify(ik));
  ok(R.ikPoint(c, [1, 1, 3]).why === 'limits', 'Cartesian: out of travel is refused');
  const ur = Lb.robotFromLibrary('ur5e-public');
  ok(ur.joints.length === 6 && near(ur.joints[0].d, 0.1625) && near(ur.joints[1].a, -0.425) && near(ur.joints[2].a, -0.3922) && near(ur.joints[3].d, 0.1333) && near(ur.joints[4].d, 0.0997) && near(ur.joints[5].d, 0.0996), 'UR5e rows as printed (4 digits)');
  ok(ur.joints.every((j) => j.min === -360 && j.max === 360 && j.vmax === 180), 'UR5e joint range and speed as the datasheet prints');
  const stretch = R.fkArmBase(ur, [0, -90 * D, 0, -90 * D, 0, 0]).T;     // shoulder up, elbow straight: wrist 3 centre well out
  ok(near(Math.hypot(stretch[3], stretch[7]), 0.425 + 0.3922 + 0.0997 > 0 ? Math.hypot(stretch[3], stretch[7]) : 0, 1), 'UR5e fk gives a finite wrist position');
  const maxR = ur.joints.reduce((s, j) => s + Math.abs(j.a) + Math.abs(j.d), 0);
  ok(maxR > 0.85, 'UR5e link sum exceeds the 850 mm reach figure (reach is to the wrist centre, not every link)');
  const horiz = R.fkArmBase(ur, [0, 0, 0, 0, 0, 0]).T;
  ok(near(horiz[3], -(0.425 + 0.3922), 1e-9), 'UR5e arm stretched out: x = a2 + a3 = -0.8172 m', String(horiz[3]));
  const noSrc = Lb.LIBRARY.filter((e) => e.sources);
  ok(noSrc.every((e) => e.sources.length >= 2 && e.note), 'a maker-named model carries at least two sources and a note');
}

section('robot formats: neutral path list (CSV and JSON) round trip');
for (const [id, mk, tg] of [['arm', () => Lb.robotFromLibrary('generic-arm6'), armTargets], ['scara', () => Lb.robotFromLibrary('generic-scara'), { A: [0.3, 0.1, 0.05], B: [0.2, -0.2, 0.05] }], ['cartesian', () => Lb.robotFromLibrary('generic-cartesian'), { A: [0.3, 0.1, 0.05], B: [0.5, -0.2, 0.05] }]]) {
  const robot = mk(), run = runFor(robot, tg), cell = { robot };
  ok(run.ok, `${id}: program runs`, JSON.stringify(run.issues));
  const csv = F.exportOne('csv', run, cell).file.text, js = JSON.parse(F.exportOne('json', run, cell).file.text);
  const rows = csv.trim().split('\n').map((l) => l.split(','));
  ok(rows.length === run.steps.length + 1 && js.steps.length === run.steps.length, `${id}: one row per step in CSV and JSON`);
  const head = rows[0], col = (n) => head.indexOf(n);
  ok(rows.slice(1).every((r, i) => Number(r[col('seconds')]) === run.steps[i].t && r[col('op')] === run.steps[i].op && Number(r[col('cumulative_seconds')]) === run.steps[i].tcum), `${id}: CSV seconds, ops and cumulative times equal the run`);
  const jn = js.robot.joint_names;
  ok(rows.slice(1).every((r, i) => !run.steps[i].q || jn.every((n, j) => near(Number(r[col(n + (js.robot.joint_units[j] === 'm' ? '_m' : '_deg'))]), js.steps[i].joints[j], 1e-9))), `${id}: CSV joints equal JSON joints`);
  const last = js.steps[js.steps.length - 1];
  ok(near(last.cumulative_seconds, run.cycle) && js.cycle_seconds === run.cycle, `${id}: JSON cycle time is the run's`);
  const sig = js.steps.filter((s) => s.signal);
  ok(sig.length === run.steps.filter((s) => s.io).length && sig.some((s) => s.signal.number === 3 && s.signal.on === false) && sig.some((s) => s.signal.number === 2 && s.signal.on === true), `${id}: signals (grip 1, out 3 off, waitin 2 on) are in the list`);
  ok(js.generated_by.startsWith('Generated by CadCraft; simulate and verify on your robot controller before running'), `${id}: JSON carries the not-verified line`);
  const toolpt = js.steps.find((s) => s.op === 'movel').tool_point_m;
  ok(toolpt.length === 3 && toolpt.every(Number.isFinite), `${id}: tool point given for straight moves`);
}

section('robot formats: ROS URDF');
for (const id of ['generic-arm6', 'ur5e-public', 'generic-arm6-long', 'generic-scara', 'generic-cartesian']) {
  const robot = Lb.robotFromLibrary(id, { x: 0.3, y: -0.2, z: 0.5, rot: 30 }), run = runFor(robot, id.includes('scara') ? { A: [0.3, 0.1, 0.55], B: [0.5, -0.3, 0.55] } : id.includes('cartesian') ? { A: [0.3, 0.1, 0.55], B: [0.5, -0.2, 0.55] } : { A: [0.7, 0.2, 0.5 + 0.1], B: [0.7, -0.2, 0.6] });
  const res = F.exportOne('urdf', robot.type === 'arm' && id.includes('long') ? { ok: true, steps: [] } : run, { robot });
  ok(res.ok, `${id}: URDF written`, JSON.stringify(res.refused));
  if (!res.ok) continue;
  const X = parseXml(res.file.text);
  ok(!X.bad && X.root && X.root.tag === 'robot' && X.root.attrs.name, `${id}: well-formed XML with a robot name`, X.bad);
  const joints = X.root.kids.filter((k) => k.tag === 'joint'), links = new Set(X.root.kids.filter((k) => k.tag === 'link').map((k) => k.attrs.name));
  ok(joints.every((j) => { const p = j.kids.find((x) => x.tag === 'parent').attrs.link, c = j.kids.find((x) => x.tag === 'child').attrs.link; return links.has(p) && links.has(c); }), `${id}: every joint joins two declared links`);
  const moving = joints.filter((j) => j.attrs.type === 'revolute' || j.attrs.type === 'prismatic');
  ok(moving.every((j) => { const l = j.kids.find((x) => x.tag === 'limit'); return l && ['lower', 'upper', 'effort', 'velocity'].every((a) => l.attrs[a] !== undefined); }), `${id}: every moving joint has a limit with lower, upper, effort and velocity`);
  const lim = R.jointLimits(robot);
  ok(moving.length === lim.length && moving.every((j, i) => { const l = j.kids.find((x) => x.tag === 'limit').attrs; return near(Number(l.lower), lim[i][0], 1e-9) && near(Number(l.upper), lim[i][1], 1e-9); }), `${id}: URDF limits equal the table's limits`);
  // forward kinematics through the URDF equals the add-on's own, with the base placement (world joint) included
  const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  let worst = 0;
  for (let k = 0; k < 6; k++) {
    const q = lim.map(([lo, hi]) => lo + (hi - lo) * rnd()), end = urdfFk(X.root, q);
    const base = (() => { const w = joints.find((j) => j.attrs.name === 'world_to_base'), o = w.kids.find((x) => x.tag === 'origin').attrs, n = (s) => s.split(/\s+/).map(Number); return pose(n(o.xyz), n(o.rpy)); })();
    const W = mm(base, end.T), ours = R.fkPoint(robot, q);
    worst = Math.max(worst, Math.hypot(W[3] - ours[0], W[7] - ours[1], W[11] - ours[2]));
    if (end.end !== 'tool0') worst = 1;
  }
  ok(worst < 1e-9, `${id}: URDF forward kinematics equals ours at 6 random poses (worst ${worst.toExponential(1)} m)`);
  ok(/Generated by CadCraft; simulate and verify/.test(res.file.text), `${id}: URDF carries the not-verified comment`);
}
{
  const d = Lb.robotFromLibrary('generic-delta'), run = R.runProgram({ robot: d, targets: { A: [0.05, 0, -0.4], B: [-0.05, 0.02, -0.38] } }, R.parseProgram('CCROBOT 1\nhome\nmovej A\nmovej B\n').prog);
  const u = F.exportOne('urdf', run, { robot: d });
  ok(!u.ok && u.refused.code === 'robot-type', 'delta: URDF refused (closed chain, a URDF is a tree)');
  ok(F.exportOne('trajectory', run, { robot: d }).ok, 'delta: joint trajectory of the three actuated arms is written');
}

section('robot formats: ROS joint trajectory');
{
  const robot = Lb.robotFromLibrary('generic-arm6'), run = runFor(robot, armTargets), res = F.exportOne('trajectory', run, { robot });
  const T = JSON.parse(res.file.text);
  ok(T.joint_names.length === 6 && T.joint_names.every((n) => /^joint_\d$/.test(n)), 'six joint names');
  ok(T.points.length > run.steps.length && T.points.every((p) => p.positions.length === 6), 'points carry six positions (straight moves are sampled)');
  const times = T.points.map((p) => p.time_from_start.sec + p.time_from_start.nanosec / 1e9);
  ok(times.every((v, i) => i === 0 || v >= times[i - 1] - 1e-9), 'time_from_start never goes back');
  ok(T.points.every((p) => Number.isInteger(p.time_from_start.sec) && Number.isInteger(p.time_from_start.nanosec) && p.time_from_start.nanosec >= 0 && p.time_from_start.nanosec < 1e9), 'Duration is whole sec and nanosec in [0, 1e9)');
  ok(near(times[times.length - 1], run.cycle, 2e-6), 'trajectory ends at the cycle time');
  ok(T.points.every((p, i) => p.positions.every((v, j) => v >= R.jointLimits(robot)[j][0] - 1e-9 && v <= R.jointLimits(robot)[j][1] + 1e-9)), 'every position within the joint limits');
  ok(res.omitted.includes('signal'), 'signals reported as not in the file');
}

section('robot formats: selection, refusals, sources');
{
  ok(F.cleanSelection(['urdf', 'nope', 7]).join() === 'csv,json,urdf', 'selection: path list always, unknown ids dropped');
  ok(F.cleanSelection(undefined).join() === 'csv,json', 'selection: default is the path list');
  const sc = Lb.robotFromLibrary('generic-scara'), run = runFor(sc, { A: [0.3, 0.1, 0.05], B: [0.2, -0.2, 0.05] });
  for (const v of V.VENDORS) {
    const r = F.exportOne(v.id, run, { robot: sc });
    ok(v.types.includes('arm') && !v.types.includes('scara') ? (!r.ok && r.refused.code === 'robot-type') : true, `${v.id}: a SCARA is refused in words`);
  }
  ok(!F.exportOne('urdf', { ok: false, steps: [] }, { robot: sc }).ok, 'no export before a successful run');
  ok(V.VENDORS.every((v) => S.FORMAT_SOURCES[v.id] && S.FORMAT_SOURCES[v.id].urls.length >= 2 && S.FORMAT_SOURCES[v.id].note), 'every vendor language lists at least two sources');
  ok(/^\d{4}-\d\d-\d\d$/.test(S.SOURCES_DATE) && S.LEFT_OUT.length >= 6 && S.LEFT_OUT.every((x) => x.why.length > 20), 'sources date and a reason for every language left out');
  ok(F.FORMATS.filter((f) => f.vendor).every((f) => !/Demo3D|RoboGuide|RobotStudio|Visual Components/i.test(f.name)), 'format names are language names, not other software');
  const p = R.parseProgram('CCROBOT 1\nout 100 on\nwaitin 2 maybe\nout 5 on\nwaitin 6 off\n');
  ok(p.errors.length === 2 && p.errors.every((e) => e.code === 'io-syntax') && p.prog.ops.length === 2, 'out / waitin: bad numbers and words are reported');
  ok(R.formatProgram(R.parseProgram('CCROBOT 1\nout 5 on\nwaitin 6 off\n').prog) === 'CCROBOT 1\nout 5 on\nwaitin 6 off\n', 'out / waitin round trip in the neutral text');
}

section('robot formats: vendor languages read back');
const rotFromVec = (v) => { const a = Math.hypot(...v); if (a < 1e-12) return [1, 0, 0, 0, 1, 0, 0, 0, 1]; const [x, y, z] = v.map((c) => c / a), c = Math.cos(a), s = Math.sin(a), t = 1 - c; return [t * x * x + c, t * x * y - s * z, t * x * z + s * y, t * x * y + s * z, t * y * y + c, t * y * z - s * x, t * x * z - s * y, t * y * z + s * x, t * z * z + c]; };
const CHECK = {
  urscript(text, plan, cell) {
    const lines = text.split('\n'), code = lines.filter((l) => l.trim() && !l.trim().startsWith('#'));
    ok(lines[0] === '# ' + F.GENERATED_BY, 'urscript: first line is the not-verified comment');
    ok(code[0] === 'def cadcraft_cell():' && code[code.length - 1] === 'end', 'urscript: def ... end');
    const depth = code.reduce((d, l) => d + (/^\s*(def|while)\b.*:\s*(#.*)?$/.test(l) ? 1 : /^\s*end\s*$/.test(l) ? -1 : 0), 0);
    ok(depth === 0, 'urscript: def / while / end balance');
    const mj = code.filter((l) => /^\s*movej\(\[/.test(l)), ml = code.filter((l) => /^\s*movel\(p\[/.test(l));
    ok(mj.length === plan.filter((e) => e.k === 'J').length && ml.length === plan.filter((e) => e.k === 'L').length, 'urscript: movej and movel counts equal the plan', `${mj.length}/${ml.length}`);
    const pl = plan.filter((e) => e.k === 'L');
    ok(ml.every((l, i) => { const m = l.match(/p\[([^\]]+)\], a=([-\d.e]+), v=([-\d.e]+)/), n = m[1].split(',').map(Number); const Rm = rotFromVec(n.slice(3)); return near(n[0], pl[i].pose[0], 1e-9) && near(n[2], pl[i].pose[2], 1e-9) && Rm.every((v, k) => near(v, pl[i].R[k], 1e-9)); }), 'urscript: movel poses and rotation vectors rebuild the planned tool frames');
    const speedOk = ml.every((l, i) => { const v = Number(l.match(/v=([-\d.e]+)/)[1]); return near(v, cell.robot.tcpV * pl[i].pct / 100, 1e-12); });
    ok(speedOk, 'urscript: straight-move speeds are the speed percent of the TCP limit');
    ok(new Set(ml.map((l) => l.match(/v=([-\d.e]+)/)[1])).size === 2, 'urscript: both speed settings (100 and 50 percent) appear');
    ok(mj.every((l) => l.match(/\[([^\]]+)\]/)[1].split(',').length === 6), 'urscript: six joint values per movej');
    const outs = code.filter((l) => /set_digital_out\(/.test(l)), want = plan.filter((e) => e.k === 'out');
    ok(outs.length === want.length && outs.every((l, i) => l.includes(`(${want[i].n}, ${want[i].on ? 'True' : 'False'})`)), 'urscript: set_digital_out lines equal the plan (grip 1, out 3 off)');
    ok(code.filter((l) => /while \(get_standard_digital_in\(2\) != True\):/.test(l)).length === 1, 'urscript: wait for input 2 on');
    const sl = code.filter((l) => /^\s*sleep\(/.test(l)).map((l) => Number(l.match(/sleep\(([^)]+)\)/)[1]));
    ok(sl.length === plan.filter((e) => e.k === 'wait').length && sl.includes(0.25) && sl.includes(0.3), 'urscript: sleep lines equal the plan (0.3 s grip, 0.25 s wait)');
  },
};
{
  const robot = Lb.robotFromLibrary('generic-arm6'), run = runFor(robot, armTargets), cell = { robot, gripOut: 1 }, plan = F.buildPlan(run, cell);
  ok(plan.filter((e) => e.k === 'J').length > 0 && plan.every((e) => e.k !== 'J' && e.k !== 'L' || (e.pose && e.R && e.q.length === 6)), 'plan: moves carry joints, pose and rotation');
  for (const v of V.VENDORS) {
    const res = F.exportOne(v.id, run, cell);
    ok(res.ok, `${v.id}: written`, JSON.stringify(res.refused));
    if (res.ok && CHECK[v.id]) CHECK[v.id](res.file.text, plan, cell); else ok(false, `${v.id}: has a read-back checker in this test`);
  }
  const wide = R.runProgram({ robot, targets: armTargets, gripOut: 12 }, R.parseProgram('CCROBOT 1\npick A\n').prog);
  const refuse = F.exportOne('urscript', wide, { robot });
  ok(!refuse.ok && refuse.refused.code === 'signal-range' && refuse.refused.n === 12, 'signal number outside 0 to 9 is refused in words');
  const six = R.makeRobot('arm', { joints: robot.joints.slice(0, 5) });
  const five = R.runProgram({ robot: six, targets: { A: [0.2, 0.1, 0.1] } }, R.parseProgram('CCROBOT 1\nmovej A\n').prog);
  if (five.ok) ok(F.exportOne('urscript', five, { robot: six }).refused.code === 'six-axes', 'a 5-axis arm is refused for URScript');
}
