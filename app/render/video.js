/* SPDX-License-Identifier: Apache-2.0 */
/**
 * video.js — frames to a video file in the browser (0.6 LC.10), with the browser's own encoder: WebCodecs `VideoEncoder`
 * (VP9, else VP8) → webm.js (ours) → a .webm file. No encoder (an older browser) → the frames as numbered PNG pictures in a
 * ZIP, which any video editor turns into a video. Nothing leaves the computer. Shared by ModelCraft and BimCraft: canonical
 * in modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs).
 *
 *   videoSupport(w, h, fps) → Promise<{webm: {codec, id} | null}>   what this browser can encode at that size
 *   createVideoSink({kind 'webm' | 'png', w, h, fps}) → Promise<{add(canvas, i), finish() → {blob, ext, mime}, abort()}>
 *     add() takes the finished frame's canvas (any size: it is drawn at w × h) and waits when the encoder is busy.
 *
 * w and h are made even (VP8/VP9 4:2:0 need it); key frames every 2 seconds (a cluster each, so players seek).
 */
import { WebmWriter, zipStored } from './webm.js';

const CODECS = [
  { codec: 'vp09.00.10.08', id: 'V_VP9' },   // i18n-ignore: codec strings
  { codec: 'vp8', id: 'V_VP8' },   // i18n-ignore: codec strings
];

export const even = (n) => Math.max(2, Math.round(n / 2) * 2);
const bitrate = (w, h, fps) => Math.round(Math.min(40e6, Math.max(1e6, w * h * fps * 0.12)));

export async function videoSupport(w, h, fps) {
  const VE = globalThis.VideoEncoder;
  if (!VE || !globalThis.VideoFrame) return { webm: null };
  for (const c of CODECS) {
    try {
      const r = await VE.isConfigSupported({ codec: c.codec, width: even(w), height: even(h), bitrate: bitrate(w, h, fps), framerate: fps });
      if (r && r.supported) return { webm: c };
    } catch { /* this codec string is not known here */ }
  }
  return { webm: null };
}

/** A canvas of exactly w × h holding the frame (the renderer's canvas is the right size already; this copes when not). */
function frameCanvas(src, w, h, keep) {
  if (src.width === w && src.height === h) return src;
  const c = keep.c || (keep.c = Object.assign(document.createElement('canvas'), { width: w, height: h }));
  c.getContext('2d').drawImage(src, 0, 0, w, h);
  return c;
}

export async function createVideoSink({ kind = 'webm', w, h, fps = 30, app = 'CadCraft' } = {}) {
  w = even(w); h = even(h);
  const keep = {};
  if (kind === 'webm') {
    const sup = await videoSupport(w, h, fps);
    if (!sup.webm) throw new Error('no-encoder');
    const writer = new WebmWriter({ codec: sup.webm.id, width: w, height: h, fps, app });
    let failed = null;
    const enc = new VideoEncoder({
      output(chunk) {
        const b = new Uint8Array(chunk.byteLength);
        chunk.copyTo(b);
        try { writer.add(b, chunk.timestamp / 1000, chunk.type === 'key'); } catch (e) { failed = e; }
      },
      error(e) { failed = e; },
    });
    enc.configure({ codec: sup.webm.codec, width: w, height: h, bitrate: bitrate(w, h, fps), framerate: fps, latencyMode: 'quality' });
    return {
      kind, w, h, codec: sup.webm.id,
      async add(canvas, i) {
        if (failed) throw failed;
        while (enc.encodeQueueSize > 3) await new Promise((r) => setTimeout(r, 10));
        const vf = new VideoFrame(frameCanvas(canvas, w, h, keep), { timestamp: Math.round((i * 1e6) / fps), duration: Math.round(1e6 / fps) });
        try { enc.encode(vf, { keyFrame: i % Math.max(1, Math.round(fps * 2)) === 0 }); } finally { vf.close(); }
      },
      async finish() {
        await enc.flush();
        enc.close();
        if (failed) throw failed;
        return { blob: new Blob([writer.finish()], { type: 'video/webm' }), ext: 'webm', mime: 'video/webm' };   // i18n-ignore: media types
      },
      abort() { try { enc.close(); } catch { /* already closed */ } },
    };
  }
  // pictures: numbered PNG files in a ZIP
  const files = [];
  return {
    kind: 'png', w, h,
    async add(canvas, i) {
      const c = frameCanvas(canvas, w, h, keep);
      const blob = await new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('no image'))), 'image/png'));   // i18n-ignore: a media type
      files.push({ name: 'frame-' + String(i + 1).padStart(5, '0') + '.png', data: new Uint8Array(await blob.arrayBuffer()) });   // i18n-ignore: file names
    },
    async finish() { return { blob: new Blob([zipStored(files)], { type: 'application/zip' }), ext: 'zip', mime: 'application/zip' }; },   // i18n-ignore: media types
    abort() { files.length = 0; },
  };
}
