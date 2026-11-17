---
title: A jelenet megnyitása másik programban
summary: Mentse a jelenetet USD-fájlként vagy glTF-fájlként bármely olyan programhoz, amely ezeket olvassa, vagy nyissa meg a Studióból egy programban ezen a számítógépen.
keywords: megnyitás másik programban, usd, gltf, glb, export, renderelő program, archviz, studio, usdview, küldés, átadás, csomag, unreal-mappa
from: 812329d5
---

A {{ui:Kép renderelése…}} Motor listájában válasszon egy **Megnyitás másik programban …** bejegyzést, ha a jelenetet át szeretné vinni egy másik programba. Semmi nem jön vissza a modellbe.

## Fájl bármely programhoz

- Az **USD-fájl** a jelenetet `.usdc`-ként menti (vagy `.usdz`-ként, ha a modell képeket tartalmaz): ugyanazt a fájlt, mint a [Mentés USD-ként](topic:usd), anyagokkal, lámpákkal és kamerákkal. Megtartja a példányosítást és a pontos anyagértékeket. A legtöbb renderelő, játékmotor és megjelenítő USD-t olvas.
- A **glTF-fájl (.glb)** a könnyebb glTF 2.0 fájlt menti anyagokkal, textúrákkal és lámpákkal; a ModelCraft által írt formátumokhoz lásd: [Modell exportálása más programokhoz](topic:export-model).

- Az **Unreal-projektmappa (.zip)** azt a mappát menti, amelyet a [Jelenet küldése játékmotorba](topic:render-unreal) ír, bármely számítógépen lévő projekthez.

Mindhárom működik a böngészőben és a Studióban.

## A Studióban: megnyitás programban

A Studio felsorolja a számítógépen talált programokat, amelyek meg tudják nyitni a jelenetet: a usdview-t, ha a keresési útvonalon van, és a számítógép saját programját a fájltípushoz. Válasszon egyet, válassza az USD-t vagy a glTF-et ott, ahol mindkettőt olvassa, majd kattintson a {{ui:Renderelés}} gombra. A Studio a csomagot új mappába írja a Dokumentumok alá (`CadCraft hand-off`; semmi sem íródik felül, minden küldés saját mappát kap), elindítja rajta a programot, majd megmondja, hol vannak a fájlok.

| Program | Legjobban olvassa |
|---|---|
| usdview | USD |
| A számítógép saját programja | Amit a számítógép a fájltípushoz tartalmaz |

A Studio csak ebből a rögzített listából indít programokat; nem futtat semmit, amit az oldal név szerint kér, és soha nem indít GNU GPL licenc alatt álló programot (lásd: [Kép készítése másik programmal](topic:render-other-program#programs-cadcraft-never-runs)). Bármely USD-t vagy glTF-et olvasó program megnyitja a fájlt a fenti **Fájl bármely programhoz** részből.

:::note
A Twinmotion, az Enscape és más megjelenítő programok nincsenek a listában: a CadCraft ezekkel nincs ellenőrizve, és nem tesz róluk állítást. Ebből a helyről származó glTF- vagy USD-fájl vezet hozzájuk.
:::
