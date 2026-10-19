/* SPDX-License-Identifier: Apache-2.0 */
/**
 * webm.js — writing a WebM video file from encoded frames (0.6 LC.10), our own, from the Matroska / EBML specifications
 * (IETF RFC 8794 EBML, RFC 9559 Matroska; WebM = the Matroska subset the WebM project names). Shared by ModelCraft and
 * BimCraft: canonical in modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs).
 * DOM-free and import-free: the page's encoder (the browser's own WebCodecs VideoEncoder, video.js) hands it frames, and the
 * Node test writes files that ffprobe reads back.
 *
 *   const w = new WebmWriter({codec: 'V_VP9' | 'V_VP8', width, height, fps, app})
 *   w.add(bytes: Uint8Array, timeMs, key: boolean)   frames in order; a key frame may start a new cluster
 *   w.finish() → Uint8Array                          EBML header + one Segment (SeekHead, Info with the duration, Tracks,
 *                                                    Clusters, Cues) with every size known: the file seeks in players
 *   zipStored([{name, data: Uint8Array}]) → Uint8Array   a plain ZIP (stored, CRC-32) — the picture-sequence fallback
 *   crc32(bytes)
 *
 * Timestamps are milliseconds (TimestampScale 1 000 000 ns). A cluster starts at every key frame and before a block's time
 * would pass 30 s from the cluster's start (block times are 16-bit signed).
 */

const enc = new TextEncoder();

/** An EBML variable-size integer (the element data size), shortest form; 8 bytes when `len8`. */
function vsize(n, len8 = false) {
  if (!len8) for (let len = 1; len <= 8; len++) {
    if (n < 2 ** (7 * len) - 1) {
      const b = new Uint8Array(len);
      let v = n;
      for (let i = len - 1; i >= 0; i--) { b[i] = v % 256; v = Math.floor(v / 256); }
      b[0] |= 1 << (8 - len);
      return b;
    }
  }
  const b = new Uint8Array(8);
  let v = n;
  for (let i = 7; i >= 1; i--) { b[i] = v % 256; v = Math.floor(v / 256); }
  b[0] = 0x01;
  return b;
}
/** An element ID as its bytes (IDs are written with their marker bits, as the specification lists them). */
function idBytes(id) {
  const out = [];
  let v = id;
  while (v > 0) { out.unshift(v & 0xff); v = Math.floor(v / 256); }
  return Uint8Array.from(out);
}
function cat(parts) {
  let n = 0;
  for (const p of parts) n += p.length;
  const out = new Uint8Array(n);
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}
function uintBytes(v, fixed = 0) {
  const out = [];
  let x = v;
  do { out.unshift(x % 256); x = Math.floor(x / 256); } while (x > 0);
  while (out.length < fixed) out.unshift(0);
  return Uint8Array.from(out);
}
const el = (id, data) => cat([idBytes(id), vsize(data.length), data]);
const elU = (id, v, fixed) => el(id, uintBytes(v, fixed));
const elS = (id, s) => el(id, enc.encode(s));
function elF(id, v) { const b = new Uint8Array(8); new DataView(b.buffer).setFloat64(0, v); return el(id, b); }
const elM = (id, kids) => el(id, cat(kids));

const ID = {
  EBML: 0x1a45dfa3, EBMLVersion: 0x4286, EBMLReadVersion: 0x42f7, EBMLMaxIDLength: 0x42f2, EBMLMaxSizeLength: 0x42f3,
  DocType: 0x4282, DocTypeVersion: 0x4287, DocTypeReadVersion: 0x4285,
  Segment: 0x18538067, SeekHead: 0x114d9b74, Seek: 0x4dbb, SeekID: 0x53ab, SeekPosition: 0x53ac,
  Info: 0x1549a966, TimestampScale: 0x2ad7b1, Duration: 0x4489, MuxingApp: 0x4d80, WritingApp: 0x5741,
  Tracks: 0x1654ae6b, TrackEntry: 0xae, TrackNumber: 0xd7, TrackUID: 0x73c5, TrackType: 0x83, FlagLacing: 0x9c,
  CodecID: 0x86, DefaultDuration: 0x23e383, Video: 0xe0, PixelWidth: 0xb0, PixelHeight: 0xba,
  Cluster: 0x1f43b675, Timestamp: 0xe7, SimpleBlock: 0xa3,
  Cues: 0x1c53bb6b, CuePoint: 0xbb, CueTime: 0xb3, CueTrackPositions: 0xb7, CueTrack: 0xf7, CueClusterPosition: 0xf1,
};

export class WebmWriter {
  constructor({ codec = 'V_VP9', width, height, fps = 30, app = 'CadCraft' } = {}) {
    if (!['V_VP9', 'V_VP8', 'V_AV1'].includes(codec)) throw new Error('codec');
    if (!(width > 0 && height > 0)) throw new Error('size');
    this.codec = codec; this.width = width | 0; this.height = height | 0; this.fps = fps; this.app = String(app);
    this.clusters = [];   // [{time, blocks: [Uint8Array]}]
    this.last = -1; this.end = 0;
  }
  add(bytes, timeMs, key) {
    const t = Math.max(0, Math.round(timeMs));
    if (t < this.last) throw new Error('frames out of order');   // i18n-ignore: a programming error, never shown
    if (!this.clusters.length && !key) throw new Error('the first frame must be a key frame');   // i18n-ignore: a programming error, never shown
    let c = this.clusters[this.clusters.length - 1];
    if (!c || key || t - c.time > 30000) { c = { time: t, key: !!key, blocks: [] }; this.clusters.push(c); }
    const head = new Uint8Array(4);
    head[0] = 0x81;   // track 1 as a variable-size integer
    new DataView(head.buffer).setInt16(1, t - c.time);
    head[3] = key ? 0x80 : 0x00;
    c.blocks.push(el(ID.SimpleBlock, cat([head, bytes])));
    this.last = t;
    this.end = Math.max(this.end, timeMs + 1000 / this.fps);
  }
  finish() {
    if (!this.clusters.length) throw new Error('no frames');   // i18n-ignore: a programming error, never shown
    const header = elM(ID.EBML, [
      elU(ID.EBMLVersion, 1), elU(ID.EBMLReadVersion, 1), elU(ID.EBMLMaxIDLength, 4), elU(ID.EBMLMaxSizeLength, 8),
      elS(ID.DocType, 'webm'), elU(ID.DocTypeVersion, 4), elU(ID.DocTypeReadVersion, 2),
    ]);
    const info = elM(ID.Info, [elU(ID.TimestampScale, 1000000), elF(ID.Duration, this.end), elS(ID.MuxingApp, this.app), elS(ID.WritingApp, this.app)]);
    const tracks = elM(ID.Tracks, [elM(ID.TrackEntry, [
      elU(ID.TrackNumber, 1), elU(ID.TrackUID, 1), elU(ID.TrackType, 1), elU(ID.FlagLacing, 0), elS(ID.CodecID, this.codec),
      elU(ID.DefaultDuration, Math.round(1e9 / this.fps)),
      elM(ID.Video, [elU(ID.PixelWidth, this.width), elU(ID.PixelHeight, this.height)]),
    ])]);
    const clusters = this.clusters.map((c) => elM(ID.Cluster, [elU(ID.Timestamp, c.time), ...c.blocks]));
    // the SeekHead's size must not depend on the positions it holds: every position is written in 8 bytes
    const seekHead = (pos) => elM(ID.SeekHead, [ID.Info, ID.Tracks, ID.Cues].map((id) =>
      elM(ID.Seek, [el(ID.SeekID, idBytes(id)), elU(ID.SeekPosition, pos[id], 8)])));
    const shLen = seekHead({ [ID.Info]: 0, [ID.Tracks]: 0, [ID.Cues]: 0 }).length;
    let at = shLen + info.length + tracks.length;
    const clusterAt = clusters.map((c) => { const p = at; at += c.length; return p; });
    const cues = elM(ID.Cues, this.clusters.map((c, i) => c.key ? elM(ID.CuePoint, [
      elU(ID.CueTime, c.time),
      elM(ID.CueTrackPositions, [elU(ID.CueTrack, 1), elU(ID.CueClusterPosition, clusterAt[i])]),
    ]) : null).filter(Boolean));
    const sh = seekHead({ [ID.Info]: shLen, [ID.Tracks]: shLen + info.length, [ID.Cues]: at });
    const body = cat([sh, info, tracks, ...clusters, cues]);
    return cat([header, idBytes(ID.Segment), vsize(body.length, true), body]);
  }
}

// ---- a stored ZIP (the picture-sequence fallback when the browser has no video encoder) ----
let crcTable = null;
export function crc32(b) {
  if (!crcTable) {
    crcTable = new Uint32Array(256);
    for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crcTable[n] = c >>> 0; }
  }
  let c = 0xffffffff;
  for (let i = 0; i < b.length; i++) c = crcTable[(c ^ b[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
export function zipStored(files) {
  const parts = [], central = [];
  let off = 0;
  for (const f of files) {
    const name = enc.encode(f.name), data = f.data, crc = crc32(data);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
    lh.setUint16(10, 0, true); lh.setUint16(12, 0x21, true); lh.setUint32(14, crc, true); lh.setUint32(18, data.length, true);
    lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true); lh.setUint16(28, 0, true);
    parts.push(new Uint8Array(lh.buffer), name, data);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true);
    ch.setUint16(10, 0, true); ch.setUint16(12, 0, true); ch.setUint16(14, 0x21, true); ch.setUint32(16, crc, true);
    ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, name.length, true);
    ch.setUint32(42, off, true);
    central.push(new Uint8Array(ch.buffer), name);
    off += 30 + name.length + data.length;
  }
  const cd = cat(central);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
  end.setUint32(12, cd.length, true); end.setUint32(16, off, true);
  return cat([...parts, cd, new Uint8Array(end.buffer)]);
}
