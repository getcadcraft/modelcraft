/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view.js — the Material flow layout and its playback in ModelCraft's 3D view (0.8 SU.858 steps 2 and 4, session sx-flow).
 * Its own three.js group beside view3d.js's (as print-view.js does; ModelCraft's code is not changed): belts as flat strips
 * along their paths, stations and the other boxes, AGV paths as arrowed lines, photo-eyes as posts, free ports as small
 * markers; loads and vehicles as instanced boxes placed from playback.js frames. World metres, Z up.
 *
 *   const fv = new FlowView(mcView)       mcView = window.modelcraft.view (scene, invalidate)
 *   fv.drawLayout(layout, built, selectedId)
 *   fv.pick(ray) → {id} | {port: {id, name}} | null   the nearest of this add-on's marks under a pick ray {o, d} (world, d unit)
 *   fv.translate(ids, dx, dy)             slide the marks of those items without redrawing (a drag in progress)
 *   fv.drawFrame(frame)                   {loads, vehicles} from playback.js; null clears them
 *   fv.bounds(layout, built) → {min, max} | null
 *   fv.dispose()
 */
import * as THREE from 'three';
import { footprint, CONVEYOR_KINDS } from '../../flow/catalog.js';
import { freePorts } from '../../flow/layout.js';

const COL = {
  belt: 0x5d6b7a, beltSel: 0xd17a22, box: { process: 0x3f7cac, conveyors: 0x6c8a3a, agv: 0x8a5a9c }, sel: 0xd17a22,
  path: 0x8a5a9c, port: 0xb3122e, vehicle: 0xe0b12e, loads: [0xc0632b, 0x2e86ab, 0x6aa84f, 0x8e44ad, 0xd4a017, 0x16a085],
};

export class FlowView {
  constructor(view) {
    this.view = view;
    this.group = new THREE.Group(); this.group.name = 'flow-layout';
    this.dyn = new THREE.Group(); this.dyn.name = 'flow-playback';
    view.scene.add(this.group, this.dyn);
    this.mats = new Map();
    this.unit = new THREE.BoxGeometry(1, 1, 1);
    this.typeIdx = new Map();
    this.loadMesh = null; this.vehMesh = null;
    this.curId = null;
    this.ray = new THREE.Raycaster();
  }
  mat(color, opts = {}) {
    const k = color + JSON.stringify(opts);
    if (!this.mats.has(k)) this.mats.set(k, new THREE.MeshLambertMaterial({ color, ...opts }));
    return this.mats.get(k);
  }
  clearGroup(g) {
    for (const o of [...g.children]) { g.remove(o); if (o.geometry && o.geometry !== this.unit) o.geometry.dispose(); }
  }
  box(cx, cy, cz, l, w, h, rotDeg, color, pitchRad = 0) {
    const m = new THREE.Mesh(this.unit, this.mat(color));
    m.scale.set(l, w, h);
    m.position.set(cx, cy, cz);
    m.rotation.set(0, -pitchRad, (rotDeg * Math.PI) / 180, 'ZYX');
    if (this.curId) m.userData.id = this.curId;   // the item this mark belongs to (picking, dragging)
    this.group.add(m);
    return m;
  }
  drawLayout(layout, built, selected = null) {
    this.clearGroup(this.group);
    for (const it of layout.items) {
      this.curId = it.id;
      const g = built.geom[it.id], sel = it.id === selected;
      if (CONVEYOR_KINDS.includes(it.kind) && g.path) {
        const n = it.kind === 'curve' ? Math.max(4, Math.ceil(Math.abs(it.params.angle) / 10)) : 1;
        const w = it.params.width;
        for (let i = 0; i < n; i++) {
          const a = g.path.at((g.path.length * i) / n), b = g.path.at((g.path.length * (i + 1)) / n);
          const dx = b.p[0] - a.p[0], dy = b.p[1] - a.p[1], dz = b.p[2] - a.p[2], run = Math.hypot(dx, dy), len = Math.hypot(run, dz);
          this.box((a.p[0] + b.p[0]) / 2, (a.p[1] + b.p[1]) / 2, (a.p[2] + b.p[2]) / 2 - 0.03, len + (n > 1 ? 0.02 : 0), w, 0.06, (Math.atan2(dy, dx) * 180) / Math.PI, sel ? COL.beltSel : COL.belt, Math.atan2(dz, run));
        }
        if (it.kind === 'zone') {
          for (let z = 1; z < it.params.zones; z++) { const p = g.path.at(z * it.params.zoneLength); this.box(p.p[0], p.p[1], p.p[2] + 0.005, 0.02, w, 0.01, p.h, 0xffffff); }
        }
        // legs to the floor at both ends
        for (const s of [0.1, g.path.length - 0.1]) { const p = g.path.at(s); if (p.p[2] > 0.1) this.box(p.p[0], p.p[1], p.p[2] / 2 - 0.03, 0.05, 0.05, p.p[2] - 0.06, p.h, 0x7a7a7a); }
      } else if (it.kind === 'agv-path') {
        const a = g.ports.a.p, b = g.ports.b.p;
        const pts = [new THREE.Vector3(...a), new THREE.Vector3(...b)];
        const r = (g.rot * Math.PI) / 180, back = 0.35, side = 0.18;
        const tip = b, l = [b[0] - back * Math.cos(r) + side * Math.sin(r), b[1] - back * Math.sin(r) - side * Math.cos(r), b[2]], rr = [b[0] - back * Math.cos(r) - side * Math.sin(r), b[1] - back * Math.sin(r) + side * Math.cos(r), b[2]];
        pts.push(new THREE.Vector3(...l), new THREE.Vector3(...tip), new THREE.Vector3(...rr), new THREE.Vector3(...tip));
        if (it.params.twoWay) {   // a second arrow at the start: both ways
          const a0 = g.ports.a.p, fr = r + Math.PI;
          pts.push(new THREE.Vector3(a0[0] - back * Math.cos(fr) + side * Math.sin(fr), a0[1] - back * Math.sin(fr) - side * Math.cos(fr), a0[2]), new THREE.Vector3(...a0),
            new THREE.Vector3(a0[0] - back * Math.cos(fr) - side * Math.sin(fr), a0[1] - back * Math.sin(fr) + side * Math.cos(fr), a0[2]), new THREE.Vector3(...a0));
        }
        const line = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: sel ? COL.sel : COL.path }));
        line.userData.id = it.id;
        this.group.add(line);
        // a faint strip to take clicks on (a line is hard to hit)
        const run = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
        const strip = this.box((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2, run, 0.3, 0.02, g.rot, sel ? COL.sel : COL.path);
        strip.material = this.mat(sel ? COL.sel : COL.path, { transparent: true, opacity: 0.25 });
      } else if (it.kind === 'sensor') {
        const c = built.geom[g.on];
        const p = c && c.path ? c.path.at(it.params.at) : { p: [it.x, it.y, it.z], h: it.rot };
        const off = ((c && layout.items.find((x) => x.id === g.on)?.params.width) || 0.6) / 2 + 0.05;
        const r = ((p.h + 90) * Math.PI) / 180;
        this.box(p.p[0] + off * Math.cos(r), p.p[1] + off * Math.sin(r), p.p[2] + 0.1, 0.05, 0.05, 0.3, p.h, sel ? COL.sel : COL.port);
      } else {
        const f = footprint(it.kind, it.params);
        const grp = it.kind === 'merge' || it.kind === 'divert' || it.kind === 'gate' || it.kind === 'transfer' ? 'conveyors' : it.kind.startsWith('agv') ? 'agv' : 'process';
        const zc = it.kind === 'station' || it.kind === 'source' || it.kind === 'sink' || it.kind.startsWith('agv') ? it.z - f.h / 2 : it.z - f.h / 2 + 0.02;
        this.box(it.x, it.y, zc + (it.kind === 'gate' ? f.h / 2 : 0), f.l, f.w, f.h, it.rot, sel ? COL.sel : COL.box[grp]);
      }
    }
    // free ports: where the next item can go
    this.curId = null;
    for (const p of freePorts(layout)) this.box(p.p[0], p.p[1], p.p[2] + 0.02, 0.06, 0.06, 0.06, p.h, COL.port).userData.port = { id: p.id, name: p.name };
    this.view.invalidate();
  }
  /** The nearest of this add-on's layout marks under a pick ray; an item's mark wins over a free-port marker within 5 cm of it. */
  pick(ray) {
    if (!ray || !ray.o || !ray.d) return null;
    this.group.updateMatrixWorld(true);
    this.ray.set(new THREE.Vector3(...ray.o), new THREE.Vector3(...ray.d));
    this.ray.near = 0; this.ray.far = 1e5;
    const hits = this.ray.intersectObjects(this.group.children, false);
    const item = hits.find((h) => h.object.userData.id);
    if (item) return { id: item.object.userData.id };
    const port = hits.find((h) => h.object.userData.port);
    return port ? { port: port.object.userData.port } : null;
  }
  /** Slide the marks of items (a drag in progress: no redraw; the layout is rebuilt when it ends). */
  translate(ids, dx, dy) {
    const set = new Set(ids);
    for (const o of this.group.children) {
      const id = o.userData.id || (o.userData.port && o.userData.port.id);
      if (id && set.has(id)) { o.position.x += dx; o.position.y += dy; }
    }
    this.view.invalidate();
  }
  ensure(kind, n) {
    const cur = kind === 'load' ? this.loadMesh : this.vehMesh;
    if (cur && cur.instanceMatrix.count >= n) return cur;
    if (cur) { this.dyn.remove(cur); cur.dispose(); }
    const cap = Math.max(64, 2 ** Math.ceil(Math.log2(n + 1)));
    const m = new THREE.InstancedMesh(this.unit, new THREE.MeshLambertMaterial({ color: 0xffffff }), cap);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.count = 0; m.frustumCulled = false;
    this.dyn.add(m);
    if (kind === 'load') this.loadMesh = m; else this.vehMesh = m;
    return m;
  }
  drawFrame(f) {
    const loads = f ? f.loads : [], vehicles = f ? f.vehicles : [];
    const o = new THREE.Object3D(), c = new THREE.Color();
    const lm = this.ensure('load', loads.length);
    loads.forEach((l, i) => {
      o.position.set(l.p[0], l.p[1], l.p[2] + 0.13);
      o.rotation.set(0, 0, (l.h * Math.PI) / 180);
      o.scale.set(Math.max(0.05, l.L - 0.02), 0.34, 0.24);
      o.updateMatrix(); lm.setMatrixAt(i, o.matrix);
      if (!this.typeIdx.has(l.type)) this.typeIdx.set(l.type, this.typeIdx.size);
      lm.setColorAt(i, c.setHex(COL.loads[this.typeIdx.get(l.type) % COL.loads.length]));
    });
    lm.count = loads.length; lm.instanceMatrix.needsUpdate = true; if (lm.instanceColor) lm.instanceColor.needsUpdate = true;
    const vm = this.ensure('veh', vehicles.length);
    vehicles.forEach((v, i) => {
      o.position.set(v.p[0], v.p[1], v.p[2] + 0.1);
      o.rotation.set(0, 0, (v.h * Math.PI) / 180);
      o.scale.set(1.0, 0.7, 0.2);
      o.updateMatrix(); vm.setMatrixAt(i, o.matrix);
      vm.setColorAt(i, c.setHex(COL.vehicle));
    });
    vm.count = vehicles.length; vm.instanceMatrix.needsUpdate = true; if (vm.instanceColor) vm.instanceColor.needsUpdate = true;
    this.view.invalidate();
  }
  bounds(layout, built) {
    if (!layout.items.length) return null;
    const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
    const add = (p) => { for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], p[k]); max[k] = Math.max(max[k], p[k]); } };
    for (const it of layout.items) {
      add([it.x, it.y, 0]); add([it.x, it.y, it.z + 0.5]);
      for (const p of Object.values(built.geom[it.id].ports)) add(p.p);
    }
    return { min: min.map((v) => v - 1), max: max.map((v) => v + 1) };
  }
  dispose() {
    this.clearGroup(this.group); this.clearGroup(this.dyn);
    this.view.scene.remove(this.group, this.dyn);
    for (const m of this.mats.values()) m.dispose();
    this.unit.dispose();
    this.view.invalidate();
  }
}
