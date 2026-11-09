/* SPDX-License-Identifier: Apache-2.0 */
// Robot cells (lib/robot.js): kinematics against hand-worked values, reach, times, the neutral program.
const { ok, section, near, mine } = globalThis.__flowTest;
const R = await mine('lib/robot.js');
const D = Math.PI / 180;
const p3 = (a, b, tol = 1e-9) => a.every((v, i) => near(v, b[i], tol));

section('robot: forward kinematics by hand');
{
  // planar two-link arm, links 1 m and 1 m, revolute about z (alpha 0), no tool
  const planar = R.makeRobot('arm', { joints: [{ a: 1, min: -180, max: 180 }, { a: 1, min: -180, max: 180 }, { a: 0, min: -180, max: 180 }], tool: 0 });
  ok(p3(R.fkArm(planar, [0, 0, 0]), [2, 0, 0]), 'straight out: (2, 0, 0)');
  ok(p3(R.fkArm(planar, [90 * D, 0, 0]), [0, 2, 0]), 'q1 90 deg: (0, 2, 0)');
  ok(p3(R.fkArm(planar, [0, 90 * D, 0]), [1, 1, 0]), 'q2 90 deg: (1, 1, 0)');
  ok(p3(R.fkArm(planar, [90 * D, -90 * D, 0]), [1, 1, 0]), 'q1 90, q2 -90: (1, 1, 0)');
  const based = R.makeRobot('arm', { x: 1, y: 2, z: 3, rot: 90, joints: planar.joints, tool: 0 });
  ok(p3(R.fkArm(based, [0, 0, 0]), [1, 4, 3]), 'base at (1,2,3) turned 90 deg: reach point (1, 4, 3)');
  const sc = R.makeRobot('scara', { l1: 0.3, l2: 0.2 });
  ok(p3(R.fkScara(sc, [0, 0, 0.1, 0]).p, [0.5, 0, 0.1]), 'SCARA straight: (0.5, 0, 0.1)');
  ok(p3(R.fkScara(sc, [90 * D, 90 * D, 0.05, 0]).p, [-0.2, 0.3, 0.05]), 'SCARA q1 90 q2 90: (-0.2, 0.3, 0.05)');
}
section('robot: inverse kinematics');
{
  const sc = R.makeRobot('scara', { l1: 0.3, l2: 0.2 });
  const a = R.ikPoint(sc, [0.5, 0, 0.1]);
  ok(a.ok && near(a.q[0], 0, 1e-6) && near(a.q[1], 0, 1e-6), 'SCARA full stretch: q1 = q2 = 0');
  const b = R.ikPoint(sc, [-0.2, 0.3, 0.05], { seed: [90 * D, 90 * D, 0, 0] });
  ok(b.ok && near(b.q[0], 90 * D, 1e-9) && near(b.q[1], 90 * D, 1e-9), 'SCARA (-0.2, 0.3): q1 = q2 = 90 deg (seeded elbow)');
  ok(p3(R.fkScara(sc, b.q).p, [-0.2, 0.3, 0.05], 1e-9), 'SCARA round trip');
  ok(R.ikPoint(sc, [0.6, 0, 0.1]).why === 'radius', 'SCARA 0.6 m is beyond 0.5 m: radius');
  ok(R.ikPoint(sc, [0.3, 0, 0.5]).why === 'limits', 'SCARA too high: limits');
  ok(R.ikPoint(sc, [0.0, 0.0, 0.1]).why === 'radius', 'SCARA inside the dead zone (|l1 - l2| = 0.1): radius');
  const arm = R.makeRobot('arm', {});
  const target = [0.45, 0.2, 0.15];
  const r = R.ikPoint(arm, target);
  ok(r.ok, '6-axis reaches (0.45, 0.2, 0.15) tool down', JSON.stringify(r.why));
  if (r.ok) {
    ok(p3(R.fkArm(arm, r.q), target, 1e-4), '6-axis round trip within 0.1 mm');
    const f = R.fkArmBase(arm, r.q);
    ok(near(f.zAxis[2], -1, 1e-3), 'tool z points down');
    ok(r.q.every((v, i) => v >= arm.joints[i].min * D - 1e-9 && v <= arm.joints[i].max * D + 1e-9), 'joint limits kept');
  }
  ok(R.ikPoint(arm, [3, 0, 0]).why === 'radius', '6-axis 3 m away: radius');
  // the arm's full stretch is the sum of its links; just beyond it nothing is found
  const rh = R.fkArm(arm, arm.home);
  ok(rh.every(Number.isFinite), 'home pose has a tool point');
}
section('robot: delta');
{
  const d = R.makeRobot('delta', {});
  const z = -0.35, q = R.deltaIk(d, 0, 0, z);
  ok(q && near(q[0], q[1], 1e-9) && near(q[1], q[2], 1e-9), 'centre: three equal angles');
  // independent geometry: the rod from each elbow to the platform joint must be re ( = 0.45 ) long
  const t30 = Math.tan(30 * D);
  const rodLens = (px, py, pz, ang) => [0, 120, 240].map((deg, k) => {
    const a = deg * D, c = Math.cos(a), s = Math.sin(a);
    // work in arm k's frame (arm 0 sits on -y): rotate the target by -deg
    const x = px * c + py * s, y = -px * s + py * c;
    const elbowY = -(d.f * t30 / 2 + d.rf * Math.cos(ang[k])), elbowZ = -d.rf * Math.sin(ang[k]);
    const jy = y - d.e * t30 / 2;      // platform joint of this arm sits e*tan30/2 toward arm side
    return Math.hypot(x, jy - elbowY, pz - elbowZ);
  });
  ok(rodLens(0, 0, z, q).every((l) => near(l, d.re, 1e-9)), 'rods are 0.45 m long at the centre');
  const off = R.deltaIk(d, 0.08, -0.05, -0.33);
  ok(off && rodLens(0.08, -0.05, -0.33, off).every((l) => near(l, d.re, 1e-9)), 'rods are 0.45 m long off centre');
  ok(R.ikPoint(d, [1.5, 0, -0.3]).ok === false, 'delta far out of reach');
  ok(R.ikPoint(d, [0, 0, -0.35]).ok, 'delta centre via ikPoint');
  ok(R.ikPoint(d, [0, 0, -0.2]).ok === false, 'delta above the work height: refused');
}
section('robot: times by hand');
{
  ok(near(R.trapezoid(1, 1, 1), 2), 'trapezoid: 1 rad, v 1, a 1 = 1 + 1 = 2 s');
  ok(near(R.trapezoid(0.25, 1, 1), 1), 'triangle: 0.25, v 1, a 1 = 2 sqrt(0.25) = 1 s');
  ok(R.trapezoid(0, 1, 1) === 0, 'no distance, no time');
  const sc = R.makeRobot('scara', {});
  // joint 1 limit 300 deg/s, 1500 deg/s2: 60 deg = 1.0472 rad, v=5.236, a=26.18: v^2/a = 1.0472 so exactly at the corner: d/v + v/a = 0.2 + 0.2
  const t = R.moveTime(sc, [0, 0, 0, 0], [60 * D, 0, 0, 0], 100);
  ok(near(t, 0.4, 1e-9), 'SCARA joint 1 by 60 deg at its limits: 0.4 s', String(t));
  ok(R.moveTime(sc, [0, 0, 0, 0], [60 * D, 0, 0, 0], 50) > t, 'half speed takes longer');
  ok(near(R.moveTime(sc, [0, 0, 0, 0], [60 * D, 30 * D, 0, 0], 100), t, 1e-9), 'synchronized: the slowest joint decides');
}
section('robot: reach against stations');
{
  const sc = R.makeRobot('scara', { x: 1, y: 1, z: 0 });
  const rows = R.reachReport(sc, [{ name: 'near', p: [1.3, 1, 0.1] }, { name: 'far', p: [2, 1, 0] }], 0.02);
  ok(rows[0].ok && !rows[1].ok && rows[1].why === 'radius', 'near is in reach, far is not (radius)');
  ok(near(rows[1].dist, 1, 1e-9), 'distance from the base is 1.0 m');
  const env = R.envelopeRadii(sc, 0.1);
  ok(env && near(env.min, 0.178, 0.021) && near(env.max, 0.5, 0.021), 'SCARA envelope 0.18 to 0.5 m (q2 limit 145 deg)', JSON.stringify(env));
}
section('robot: the neutral program');
{
  const sc = R.makeRobot('scara', {});
  const txt = 'CCROBOT 1\nrobot R1\npoint A 0.3 0.1 0.05\npoint B -0.2 0.3 0.05\nspeed 100\npick A grip 0.3\nplace B\nwait 0.5\nhome\n';
  const pr = R.parseProgram(txt);
  ok(pr.ok && pr.prog.ops.length === 5, 'parses', JSON.stringify(pr.errors));
  ok(R.formatProgram(pr.prog) === txt.replace('pick A grip 0.3', 'pick A grip 0.3'), 'format round-trips the text');
  const run = R.runProgram({ robot: sc }, pr.prog);
  ok(run.ok, 'runs', JSON.stringify(run.issues));
  ok(run.steps.filter((s) => s.op === 'grip').length === 1 && run.steps.filter((s) => s.op === 'release').length === 1, 'one grip and one release');
  ok(run.cycle > 1 && near(run.steps[run.steps.length - 1].tcum, run.cycle), 'cycle is the last cumulative time');
  const grip = run.steps.find((s) => s.op === 'grip');
  ok(near(grip.t, 0.3), 'grip step takes the 0.3 s asked for');
  ok(run.steps.find((s) => s.op === 'wait').t === 0.5, 'wait 0.5 s');
  ok(R.pathCsv(run).split('\n')[0] === 'step,line,op,target,x,y,z,seconds,cumulative_seconds', 'path list header');
  const slow = R.runProgram({ robot: sc }, R.parseProgram(txt.replace('speed 100', 'speed 40')).prog);
  ok(slow.cycle > run.cycle, 'speed 40 percent is slower');
  const bad = R.runProgram({ robot: sc }, R.parseProgram('CCROBOT 1\npoint F 2 0 0\nmovej F\n').prog);
  ok(!bad.ok && bad.issues[0].code === 'unreachable' && bad.issues[0].line === 3, 'unreachable point is named with its line');
  ok(R.parseProgram('movej A\n').errors[0].code === 'header', 'missing header is reported');
  ok(R.parseProgram('CCROBOT 1\nspeed 500\n').errors[0].code === 'speed-range', 'speed out of range');
  ok(R.parseProgram('CCROBOT 1\nfoo bar\n').errors[0].code === 'unknown', 'unknown word');
  ok(R.runProgram({ robot: sc }, R.parseProgram('CCROBOT 1\nmovej NOPE\n').prog).issues[0].code === 'no-target', 'unknown target');
  // a straight move of 0.2 m between two reachable SCARA points: the TCP limit 1 m/s, 5 m/s2 → 0.2/1 + 1/5 = 0.4 s at least
  const ln = R.runProgram({ robot: sc }, R.parseProgram('CCROBOT 1\npoint A 0.3 0 0.05\npoint B 0.3 0.2 0.05\nmovej A\nmovel B\n').prog);
  ok(ln.ok && ln.steps[1].t >= 0.4 - 1e-9, 'movel 0.2 m is at least the TCP trapezoid (0.4 s)', JSON.stringify(ln.steps[1]));
  const arm = R.makeRobot('arm', {});
  const ra = R.runProgram({ robot: arm, targets: { S1: [0.4, 0.2, 0.1], S2: [0.4, -0.2, 0.1] } }, R.parseProgram('CCROBOT 1\nhome\npick S1\nplace S2\nhome\n').prog);
  ok(ra.ok && ra.cycle > 2, '6-axis pick and place between two stations', JSON.stringify(ra.issues));
}
