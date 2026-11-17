---
title: Buksan, i-save, i-import at i-export
summary: Ang file ng ModelCraft, ang maaari mong dalhin at ipadala, kung saan pupunta ang mga file, at kung ano ang nagbabago offline at sa pagitan ng mga browser.
keywords: buksan, i-save, i-import, i-export, file, 3dm, skp, i-recover, autosave, kamakailan, desktop, buksan sa 3d, ipasa, i-download, modelcraft file, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formats, offline, i-save bilang
from: 3f09ab72
---

Nagbabasa at nagsusulat ang ModelCraft ng mga file sa iyong computer. Walang ina-upload: ang file na binubuksan mo ay binabasa sa loob ng iyong browser, at ang file na sine-save mo ay isang download. Tingnan ang [Saan pupunta ang iyong mga file](common:your-files).

## Mga format sa isang sulyap

| Format | Buksan | I-import | I-export | Para saan |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | Oo | Hindi | {{ui:I-save}} | Ang iyong working file. Iniingatan ang lahat. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | Oo | Oo | {{ui:I-save bilang}}, {{ui:I-export}} | Mga program para sa rendering at pag-assemble ng eksena. Iniingatan ng sariling USD ng ModelCraft ang lahat. Tingnan ang [I-save, buksan at i-export ang USD](topic:usd). |
| SketchUp (`.skp`) | Hindi | Oo | Hindi | Pagdadala ng mga model mula sa SketchUp. Iniingatan ang mga group, component, kulay, texture sa mga face, tag at soft edge. Tingnan ang [Mag-import ng SKP model](topic:import-sketchup-files). |
| Collada (`.dae`) | Hindi | Oo | Oo | Pagpapalitan ng model sa ibang 3D modeler. Iniingatan ang mga group, component at kulay. |
| OBJ (`.obj`) | Hindi | Oo | Oo | Mga program para sa rendering at visualization. |
| glTF (`.glb`, `.gltf`) | Hindi | Oo | `.glb` lang | Web viewer, game engine, AR. |
| STL (`.stl`) | Hindi | Oo | Oo | 3D printing (sa millimeters). |
| PLY (`.ply`) | Hindi | Oo | Oo | Mga mesh na may kulay: scan, color printing. |
| FBX (`.fbx`) | Hindi | Oo | Hindi | Mga model mula sa animation at game program (FBX 2011 pataas). |
| Alembic (`.abc`) | Hindi | Oo | Hindi | Mga geometry cache, sa unang sample nito. |
| STEP (`.step`, `.stp`) | Hindi | Oo | Hindi | Mga part mula sa part modeler at supplier, bilang closed mesh sa tunay nilang laki. Tingnan ang [Mga format ng file](topic:formats). |
| `.3dm` | Hindi | Oo | Hindi | Mga NURBS model: polysurface, mesh, curve, block at layer, bilang mesh, edge, component at tag. Tingnan ang [Mag-import ng .3dm model](topic:import-3dm-files). |
| 3MF (`.3mf`) | Hindi | Hindi | Oo | 3D printing, may kulay (sa millimeters). Mula sa {{ui:Suriin para sa 3D printing (STL o 3MF)…}}: tingnan ang [Ihanda ang model para sa 3D printing](topic:print-3d). |
| IFC (`.ifc`) | Hindi | Hindi | Oo | Mga BIM program, at BimCraft. |
| DWG (`.dwg`) | Hindi | Oo | Oo | Site plan o floor plan na pagmomodelohan; pagpapadala ng model sa CAD program. |
| DXF (`.dxf`) | Hindi | Oo | Oo | Pareho, para sa anumang CAD program. |

[Mga format ng file nang detalyado](topic:formats) ay naglilista nang eksakto kung ano ang iniingatan at iniiiwan ng bawat format.

## Ang ModelCraft file

Ang `.modelcraft` file ay nag-iingat ng buong model: geometry, group, component, guide, scene, ang units, at ang camera at style na ginagamit mo noong i-save mo. Hindi nito iniingatan ang undo history.

### Magbukas ng model

1. I-click ang {{ui:Buksan}} sa grupong {{ui:File}}, o pindutin ang {{key:Mod+O}}.
2. Kung may hindi pa na-save na pagbabago ang model sa screen, magtatanong ang ModelCraft: "May mga pagbabago ang model na ito na hindi pa na-save. I-save muna ang kopya?" Piliin ang {{ui:I-save ang kopya}}, {{ui:Itapon ang mga pagbabago}} o {{ui:Kanselahin}}.
3. Piliin ang `.modelcraft` file.

Bubuksan ang model sa units na na-save nito, kasama ang camera na na-save nito. Maaari mo ring i-drop ang `.modelcraft` file sa 3D view, o i-click ito sa listahan ng mga kamakailang file sa start card (mga browser na kayang magbukas muli ng file, at ang desktop app).

:::desktop
Sa desktop app, ang pag-double-click sa `.modelcraft` file ay bubuksan ito sa ModelCraft, at gayundin ang **Buksan gamit ang** sa Collada, OBJ, glTF, DWG o DXF file (ii-import ito sa bagong model).
:::

### I-save ang model

I-click ang {{ui:I-save}} o pindutin ang {{key:Mod+S}}. Dina-download ng browser ang `<name>.modelcraft`, kung saan ang pangalan ay ang file na binuksan mo, o "Untitled" para sa bagong model.

:::desktop
Sa desktop app, isinusulat ng {{ui:I-save}} ang file na binuksan mo sa lugar nito. Ang bagong model ay nagtatanong kung saan ito ise-save.
:::

- {{ui:I-save bilang}} ({{key:Mod+Shift+S}}) ay nagsa-save ng kopya bilang `.modelcraft` file o bilang [USD](topic:usd); kung kaya ng browser, nagtatanong ito ng pangalan at lugar. Kung hindi, palitan ang pangalan ng na-download na file: ang susunod na save pagkatapos mong buksan ang pinalitang file ay gagamit ng bagong pangalan.
- Bawat save ay bagong download. Depende sa setting ng browser, dederetso ito sa iyong downloads folder o magtatanong kung saan i-save. Kung may file na may ganoong pangalan na roon, karamihan ng browser ay magdadagdag ng numero, gaya ng `Untitled (1).modelcraft`.

:::chromium
Para piliin ang folder sa bawat pagkakataon, buksan ang settings ng browser, hanapin ang "downloads" at i-on ang "Ask where to save each file before downloading".
:::

:::firefox
Para piliin ang folder sa bawat pagkakataon, buksan ang **Mga setting**, pagkatapos **General**, at sa ilalim ng "Downloads" piliin ang "Always ask you where to save files".
:::

:::safari
Para baguhin kung saan pupunta ang mga download, buksan ang **Safari**, pagkatapos **Mga setting**, pagkatapos **General**, at itakda ang "File download location".
:::

### Magsimula ng bagong model

I-click ang {{ui:Bago}}. Kung may hindi pa na-save na pagbabago, magtatanong muna ang ModelCraft. Magsisimula ang bagong model na walang laman, sa unit ng iyong locale (feet at inches sa United States, millimeters sa ibang lugar), na walang scene.

### Kung magsara ang browser bago ka mag-save

Nag-iingat ang ModelCraft ng kopya ng hindi pa na-save na gawa mo sa iyong browser ilang segundo pagkatapos ng bawat pagbabago. Isinusulat ang kopya sa background, kaya hindi ka napipigilan ng malaking model habang iniingatan ito. Kung magsara ang tab o browser bago ka mag-save, sa susunod na buksan mo ang ModelCraft ay magtatanong ito ng "I-recover ang iyong gawa?". Ang pag-recover ay magbubukas ng model gaya ng dati, hindi pa na-save sa file: i-save ito para mapanatili. Tingnan ang [I-recover ang iyong gawa](common:recover).

### Mula sa CadCraft: Buksan sa ModelCraft

Sa CadCraft drafting app, **View**, pagkatapos **Iba pa**, pagkatapos **Buksan sa ModelCraft**, ibinibigay ang bukas na drawing sa ModelCraft sa bagong tab, bilang DWG. Dumarating ito na gaya ng na-import na DWG: mga linya sa lupa, nasa group, handang pagmodelohan. Walang ina-upload; dumadaan ang file sa sariling storage ng browser.

## Import

Ang pag-import ay nagdadagdag ng file sa model na bukas mo; hindi nito pinapalitan ang model.

1. I-click ang {{ui:I-import}} sa grupong {{ui:File}}, o i-drop ang file sa 3D view.
2. Pumili ng SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF file.

   Dumarating ang file bilang **isang group**, napili, at nag-zoom ang view para ipakita ito. Sinasabi ng status bar kung ano ang pumasok, at inililista ang anumang hindi na-import, gaya ng "Hindi na-import: 2 texture".

3. Para gumana nang direkta sa geometry nito, i-double-click ang group para mag-edit sa loob nito, o i-click ang {{ui:Explode}}.

Ilang bagay na dapat malaman:

- **Laki at pataas na direksyon:** Sinasabi ng Collada file ang unit nito at aling axis ang pataas, at kino-convert ito ng ModelCraft. Palaging nasa meters ang glTF. Walang unit ang OBJ file: binabasa ito ng ModelCraft bilang meters, na may Y pataas. Kung 1000 beses na mas malaki o mas maliit ang pumasok na OBJ, gamitin ang [Scale](topic:rotate-scale) na may factor gaya ng `0.001` o `1000`.
- **DWG at DXF** ay pumapasok bilang mga linya (edge) sa lupa, hindi bilang face. Kung hindi sinasabi ng drawing ang unit nito, magtatanong ang dialog na pinamagatang "Drawing units" kung ano ang isang drawing unit. Tingnan ang [Mag-model sa site plan](topic:site-plan).
- **Mga limitasyon:** tinatanggihan ang mga file na higit sa 300 MB para sa import, at higit sa 200 MB para sa pagbubukas. Tinatanggihan bilang sobrang laki ang mga file na may higit sa 2 milyong vertex o face. Tinatanggihan ang OBJ na higit sa 64 MB bago pa ito mabasa. Binabasa nang isang piraso sa bawat pagkakataon ang mga text file (Collada, OBJ, ASCII STL, USD text), mga 4 MB, kaya walang iisang bloke ng text ang humahawak sa buong file; ang 16 MB na OBJ ay gumamit ng mga 0.5 GB ng memory habang nagbubukas sa aming test.

## Export

1. I-click ang {{ui:I-export}} sa grupong {{ui:File}}.
2. Pumili ng format: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para sa pag-print (.stl, millimeters)}}, {{ui:PLY na may kulay (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para sa BimCraft (.ifc)}}, {{ui:DWG para sa CAD (.dwg, 2004)}} o {{ui:DXF para sa CAD (.dxf, R12)}}.

Dina-download ng browser ang file, pinangalanan ayon sa model. Ang buong model ang ini-export, hindi lang ang napili. Isinusulat sa background ang glTF, Collada at OBJ na file, kaya patuloy na gumagana ang ModelCraft habang nag-e-export ng malaking model; magsisimula ang download kapag handa na ang file. Hindi na-export ang walang lamang model: "Walang laman ang model: gumuhit muna ng isang bagay." Tingnan ang [I-export ang model para sa ibang program](topic:export-model).

## Online at offline

Ang lahat sa ModelCraft ay tumatakbo sa iyong computer, kaya gumagana ang pagmomodelo, pagbubukas, pag-save, pag-import at pag-export nang walang koneksyon kapag na-load na ang app.

Para mabuksan ang ModelCraft nang walang anumang koneksyon, i-save ito para magamit offline habang online ka:

1. I-click ang {{ui:I-save para sa offline}} sa app bar sa itaas.
2. Binibilang ng button ang progreso ("Sine-save 40 sa 212") habang nagse-save. Sine-save ng ModelCraft ang sarili nitong mga file (kasama ang DWG reader nito), ang help na ito at ang 3D library, kaya maaaring magtagal ito.
3. Kapag nagbabasa na ang button ng {{ui:Handa offline}}, magbubukas ang ModelCraft mula sa parehong address nang walang koneksyon, at gumagana rin ang DWG import offline.

I-click ang {{ui:Handa offline}} mamaya para sa {{ui:I-save ulit (kunin ang pinakabagong bersyon)}} o {{ui:Alisin ang offline copy}}. Kung nagbabasa ang button ng {{ui:Hindi na-save}}, may ilang file na hindi na-download: suriin ang koneksyon at i-click ito para subukan muli. Ang {{ui:Hindi available ang offline}} ay nangangahulugang hindi kayang magtago ng kopya ng window ng browser na ito (mga private window at ilang managed computer). Tingnan ang [Pagtatrabaho offline](common:offline).

Hindi pa available ang cloud saving. Nasa lugar kung saan mo ito i-save ang bawat model.

:::offline
Offline ka. Maaari kang magpatuloy sa pagmomodelo at pag-save. Maliban kung nagpapakita ang app bar ng {{ui:Handa offline}}, huwag i-reload ang tab na ito hanggang makakonekta ka ulit.
:::

## Desktop app

:::desktop
Ginagamit mo ang ModelCraft sa CadCraft Studio, ang desktop app na may lahat ng walong app. Nagbubukas at nagse-save ang mga file kung saan mo piliin.
:::

:::web
Tumatakbo ang ModelCraft sa browser sa Mac, Windows at Linux, at sa CadCraft Studio, ang desktop app na may lahat ng walong app sa iisang install, mula sa getcadcraft.com/download.
:::
