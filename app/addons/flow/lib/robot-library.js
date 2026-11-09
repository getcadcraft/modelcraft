/* SPDX-License-Identifier: Apache-2.0 */
/**
 * robot-library.js — the robot models a person can pick in the Robot cell panel (0.9 SU.1128, owner 2026-11-06). DOM-free.
 * Generic robots first: invented sizes, nothing taken from a maker; their joint tables (Denavit-Hartenberg rows for arms,
 * lengths and ranges for SCARA, delta and Cartesian robots) can be edited in the panel and are saved with the model file.
 * A maker's model is listed only when two public sources print the numbers (rule of lib/frame/loads-sources.js), and then only the
 * published kinematic and datasheet figures: no CAD, no meshes, no dynamics. Each entry names its sources and the date read.
 *
 *   LIBRARY                       entries { id, name, type, spec, sources? }
 *   robotFromLibrary(id, keep)    a clean robot spec from an entry, keeping the placement (x, y, z, rot) of the old robot
 */
import { PRESETS, makeRobot } from './robot.js';

export const LIBRARY_DATE_READ = '2026-11-06';
const D = Math.PI / 180;
const U = {
  urDh: 'https://www.universal-robots.com/articles/ur/application-installation/dh-parameters-for-calculations-of-kinematics-and-dynamics/',
  corkeUr5e: 'https://github.com/petercorke/robotics-toolbox-python/pull/482/files',
  urSheet5e: 'https://www.universal-robots.com/manuals/latest/en/datasheets/ur5e/',
  wevolver5e: 'https://www.wevolver.com/specs/universal-robots-ur5e',
};
const gen = (id, base, extra) => ({ id, type: base.type, name: extra.name, spec: { ...base, ...extra } });

export const LIBRARY = [
  gen('generic-arm6', PRESETS.arm6, {}),
  gen('generic-arm6-long', PRESETS.arm6, { name: 'Generic 6-axis, long reach (about 1.3 m)', joints: [
    { a: 0, alpha: 90, d: 0.27 }, { a: -0.65, alpha: 0, d: 0 }, { a: -0.6, alpha: 0, d: 0 },
    { a: 0, alpha: 90, d: 0.17 }, { a: 0, alpha: -90, d: 0.12 }, { a: 0, alpha: 0, d: 0.1 }], tool: 0.15 }),
  gen('generic-scara', PRESETS.scara, {}),
  gen('generic-scara-long', PRESETS.scara, { name: 'Generic SCARA (0.8 m)', l1: 0.45, l2: 0.35, zmin: 0, zmax: 0.2 }),
  gen('generic-delta', PRESETS.delta, {}),
  gen('generic-cartesian', PRESETS.cartesian, {}),
  {
    id: 'ur5e-public', type: 'arm', name: '6-axis, UR5e published kinematics (public figures)',
    spec: {
      type: 'arm', name: '6-axis, UR5e published kinematics', tool: 0.1,
      // standard DH rows as printed by the maker (a, d in m, alpha in degrees); joint ranges and speed from the datasheet;
      // acceleration limits are NOT published in these sources: 600 deg/s2 is our planning figure
      joints: [
        { a: 0, alpha: 90, d: 0.1625, min: -360, max: 360, vmax: 180, amax: 600 },
        { a: -0.425, alpha: 0, d: 0, min: -360, max: 360, vmax: 180, amax: 600 },
        { a: -0.3922, alpha: 0, d: 0, min: -360, max: 360, vmax: 180, amax: 600 },
        { a: 0, alpha: 90, d: 0.1333, min: -360, max: 360, vmax: 180, amax: 600 },
        { a: 0, alpha: -90, d: 0.0997, min: -360, max: 360, vmax: 180, amax: 600 },
        { a: 0, alpha: 0, d: 0.0996, min: -360, max: 360, vmax: 180, amax: 600 }],
      home: [0, -90 * D, -90 * D, -90 * D, 90 * D, 0],
    },
    figures: { reachMm: 850, payloadKg: 5, jointRangeDeg: 360, jointSpeedDegS: 180 },
    sources: [U.urDh, U.corkeUr5e, U.urSheet5e, U.wevolver5e],
    note: 'DH rows: the maker\'s kinematics article and an independent robotics toolbox agree to 4 digits (a3 is -0.3922 in one and -0.39225 in the other). Reach 850 mm, payload 5 kg, joint range plus or minus 360 deg and speed 180 deg/s: the maker\'s datasheet and a second page agree. Nominal values; a real robot\'s calibration differs.',
  },
];
export const libraryById = (id) => LIBRARY.find((e) => e.id === id) || null;
export function robotFromLibrary(id, keep = null) {
  const e = libraryById(id); if (!e) return null;
  const k = keep || {};
  return makeRobot(e.type, { ...e.spec, id: 'R1', x: k.x || 0, y: k.y || 0, z: k.z || 0, rot: k.rot || 0 });
}
