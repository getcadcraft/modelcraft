---
title: Ava stseen teises programmis
summary: Salvesta stseen USD-failina või glTF-failina mis tahes programmile, mis neid loeb, või ava see Studiost arvutis olevas programmis.
keywords: ava programmis, usd, gltf, glb, eksport, renderdusprogramm, archviz, studio, usdview, saada, üleandmine, pakk, unreal kaust
from: 812329d5
---

Vali {{ui:Renderda pilt…}} mootorite loendist kirje **Ava programmis …**, et viia stseen teise programmi. Midagi ei tule mudelisse tagasi.

## Fail mis tahes programmile

- **USD-fail** salvestab stseeni `.usdc`-na (või `.usdz`-na, kui mudel sisaldab pilte): [sama fail, mis USD-na salvestamine](topic:usd), koos materjalide, lampide ja kaameratega. See säilitab eksemplarikasutuse ja täpsed materjali väärtused. Enamik renderdajaid, mängumootoreid ja vaatajaid loevad USD-d.
- **glTF-fail (.glb)** salvestab kergema glTF 2.0 faili materjalide, tekstuuride ja lampidega; vaata [Mudeli eksportimine teistele programmidele](topic:export-model) formaatide kohta, mida ModelCraft kirjutab.

- **Unreali projekti kaust (.zip)** salvestab kausta, mille [Saada stseen mängumootorisse](topic:render-unreal) kirjutab, mis tahes arvutis asuvale projektile.

Kõik kolm töötavad brauseris ja Studios.

## Studios: ava see programmis

Studio loetleb programmid, mis leiab sellest arvutist ja mis oskavad stseeni avada: usdview, kui see on su otsingutee peal, ja arvuti oma programm selle failitüübi jaoks. Vali üks, vali USD või glTF seal, kus mõlemat loeb, ja klõpsa {{ui:Renderda}}. Studio kirjutab paketi uude kausta dokumentide alla (`CadCraft hand-off`; midagi ei kirjutata üle, iga saatmine saab oma kausta) ja käivitab programmi sellel, seejärel ütleb, kus failid on.

| Programm | Loeb kõige paremini |
|---|---|
| usdview | USD |
| Arvuti enda programm | Mida arvutil selle failitüübi jaoks on |

Studio käivitab ainult programme sellest kindlast loendist; ta ei käivita midagi, mida leht nimepidi küsib, ning ei käivita kunagi programmi GNU GPL litsentsi all (vaata [Joonista pilt teise programmiga](topic:render-other-program#programs-cadcraft-never-runs)). Iga programm, mis loeb USD-d või glTF-i, avab faili jaotisest **Fail mis tahes programmile** ülal.

:::note
Twinmotion, Enscape ja muud visualiseerimisprogrammid ei ole loendis: CadCraft pole nendega kontrollitud ega esita nende kohta väiteid. Siit tulev glTF- või USD-fail on sinna sisenemise tee.
:::
