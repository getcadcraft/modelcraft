/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the 3D Print add-on (roadmap PS.1, PS.15; docs/0.9-PRINT-STAGE.md) on the shared add-on API 1.0: a Print stage button in the toolbar and ?printstage=<uuid>&item_v=<n>
 * from a Library item's page. Everything loads on first use. ModelCraft's own code is not changed; print-host.js is its side, lib/printstage's copy in printstage/ everything else.
 * CadCraft basic comes with it. Every other slicer is an add-on of its own, off until someone wants it (owner, 2026-11-04); the card offers them through MORE.
 */
const MORE = [{ addon: 'slicer-kiri', engine: 'kiri', name: 'Kiri:Moto' }, { addon: 'slicer-prusaslicer', engine: 'prusaslicer', name: 'PrusaSlicer' }, { addon: 'slicer-orcaslicer', engine: 'orcaslicer', name: 'OrcaSlicer' }];
const tag = (name, props = {}, ...kids) => {
  const node = document.createElement(name);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'dataset') Object.assign(node.dataset, v);
    else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else if (k in node && k !== 'list') node[k] = v;
    else node.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids.flat()) if (c != null && c !== false) node.append(c);
  return node;
};

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  let stage = null;
  async function open() {
    const mc = window.modelcraft;
    if (!mc) return null;
    if (!stage) {
      const { mountPrintStage } = await import('./print-host.js');
      stage = mountPrintStage({
        anchor: document.querySelector('[data-guide]'), model: mc.model, view: mc.view, cam: mc.cam, host: mc.host, t, el: tag, print: mc.print, fileName: () => mc.fileName,
        load: (k) => api.storage.get(k), save: (k, v) => api.storage.set(k, v),
        moreLinks: () => {
          const reg = window.ccAddons?.loader;
          return reg?.setEnabled && !(window.ccPrintLinks || []).some((l) => l.id === 'bambu-p2s') ? [{ addon: 'printer-bambu', name: 'Bambu Lab P2S', add: () => reg.setEnabled('printer-bambu', true) }] : [];
        },
        moreSlicers: () => {
          const reg = window.ccAddons?.loader, on = new Set((window.ccPrintSlicers || []).map((d) => d.id));
          return reg?.setEnabled ? MORE.filter((m) => !on.has(m.engine)).map((m) => ({ ...m, add: () => reg.setEnabled(m.addon, true) })) : [];
        },
      });
    }
    stage.open();
    return stage;
  }
  api.ui.toolbarGroup({ id: 'print3d', label: t('ps.title'), tools: [{ id: 'stage', label: t('ui.printstage'), icon: 'bi-printer', title: t('ui.printstage.title'), run: () => open() }] });
  const q = new URLSearchParams(location.search), uuid = q.get('printstage');
  if (uuid !== null) {
    const go = () => open().then((s) => { if (s && /^[0-9a-f-]{36}$/i.test(uuid)) s.addItem(uuid, Number(q.get('item_v')) || 1); });
    if (window.modelcraft) go(); else addEventListener('load', go, { once: true });
  }
  api.onDeactivate(() => { stage?.dispose(); stage = null; });
}
