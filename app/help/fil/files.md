---
title: Buksan, i-save, i-import at i-export
summary: Ang file ng ModelCraft, ang maaari mong i-import at i-export, kung saan napupunta ang mga file, at ang nagbabago offline at sa pagitan ng mga browser.
keywords: buksan, open, save, i-save, import, i-import, export, i-export, file, 3dm, skp, ibalik, autosave, kamakailan, desktop, buksan sa 3D, ilipat, download, modelcraft file, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, format, offline, i-save bilang
from: 0b4896d1
---

Binabasa at isinusulat ng ModelCraft ang mga file sa iyong computer. Walang ina-upload: ang file na bubuksan mo ay binabasa sa loob ng iyong browser, at ang file na sine-save mo ay isang download. Tingnan ang [Saan napupunta ang iyong mga file](common:your-files).

## Mga format sa isang tingin

| Format | Buksan | I-import | I-export | Para saan ito |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | oo | hindi | {{ui:I-save}} | Ang iyong working file. Nag-iingat ng lahat. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | oo | oo | {{ui:I-save bilang}}, {{ui:I-export}} | Para sa mga program ng rendering at pag-assemble ng scene. Nag-iingat ng lahat ang sariling USD ng ModelCraft. Tingnan ang [I-save, buksan at i-export ang USD](topic:usd). |
| SketchUp (`.skp`) | hindi | oo | hindi | Pag-import ng mga model mula sa SketchUp. Nag-iingat ng mga group, component, kulay, texture sa mga face, tag at soft edge. Tingnan ang [Mag-import ng SKP model](topic:import-sketchup-files). |
| Collada (`.dae`) | hindi | oo | oo | Pagpapalitan ng mga model sa ibang 3D modeler. Nag-iingat ng mga group, component at kulay. |
| OBJ (`.obj`) | hindi | oo | oo | Mga program ng rendering at visualization. |
| glTF (`.glb`, `.gltf`) | hindi | oo | `.glb` lang | Web viewer, game engine, AR. |
| STL (`.stl`) | hindi | oo | oo | 3D printing (sa millimeters). |
| PLY (`.ply`) | hindi | oo | oo | Mesh na may kulay: scan, color printing. |
| FBX (`.fbx`) | hindi | oo | hindi | Mga model mula sa animation at game program (FBX 2011 pataas). |
| Alembic (`.abc`) | hindi | oo | hindi | Geometry cache, sa unang sample nito. |
| STEP (`.step`, `.stp`) | hindi | oo | hindi | Mga piyesa mula sa part modeler at supplier, bilang saradong mesh sa tunay nilang laki. Tingnan ang [Mga file format](topic:formats). |
| `.3dm` | hindi | oo | hindi | Mga NURBS model: polysurface, mesh, curve, block at layer, bilang mesh, edge, component at tag. Tingnan ang [Mag-import ng .3dm model](topic:import-3dm-files). |
| 3MF (`.3mf`) | hindi | hindi | oo | 3D printing, may kulay (sa millimeters). Mula sa {{ui:Suriin para sa 3D printing (STL o 3MF)…}}: tingnan ang [Ihanda ang model para sa 3D printing](topic:print-3d). |
| IFC (`.ifc`) | hindi | hindi | oo | Mga BIM program, at BimCraft. |
| DWG (`.dwg`) | hindi | oo | oo | Site plan o floor plan na pagmomodelan; pagpapadala ng model sa CAD program. |
| DXF (`.dxf`) | hindi | oo | oo | Pareho, para sa anumang CAD program. |

Nakalista sa [Mga file format nang detalyado](topic:formats) kung ano mismo ang iniingatan at iniiwan ng bawat format.

## Ang file ng ModelCraft

Iniingatan ng file na `.modelcraft` ang buong model: geometry, group, component, guide, scene, ang mga unit, at ang camera at istilong ginagamit mo noong i-save mo. Hindi nito iniingatan ang undo history.

### Buksan ang model

1. I-click ang {{ui:Buksan}} sa group na {{ui:File}}, o pindutin ang {{key:Mod+O}}.
2. Kung may hindi pa nai-save na pagbabago ang model sa screen, magtatanong ang ModelCraft: "May mga pagbabago sa model na ito na hindi pa naii-save. I-save muna ang kopya?" Piliin ang {{ui:I-save ang kopya}}, {{ui:Itapon ang mga pagbabago}} o {{ui:Kanselahin}}.
3. Piliin ang file na `.modelcraft`.

Bubukas ang model sa mga unit na ginamit noong i-save ito, kasama ang camera na naka-save dito. Maaari mo ring i-drop ang file na `.modelcraft` sa 3D view, o i-click ang isa sa listahan ng mga kamakailang file sa start card (mga browser na kayang buksang muli ang file, at ang desktop app).

:::desktop
Sa desktop app, ang pag-double-click sa file na `.modelcraft` ay binubuksan ito sa ModelCraft, at gayon din ang **Open with** sa file na Collada, OBJ, glTF, DWG o DXF (ini-import ito sa bagong model).
:::

### I-save ang model

I-click ang {{ui:I-save}} o pindutin ang {{key:Mod+S}}. Dina-download ng browser ang `<name>.modelcraft`, kung saan ang pangalan ay ang file na binuksan mo, o "Untitled" para sa bagong model.

:::desktop
Sa desktop app, isinusulat ng {{ui:I-save}} ang file na binuksan mo sa mismong lugar nito. Ang bagong model ay nagtatanong kung saan ito ise-save.
:::

- {{ui:I-save bilang}} ({{key:Mod+Shift+S}}) ay nagse-save ng kopya bilang file na `.modelcraft` o bilang [USD](topic:usd); kung kaya ng browser, nagtatanong ito ng pangalan at lugar. Kung hindi, palitan ng pangalan ang na-download na file: ang susunod na save pagkatapos mong buksan ang pinalitan ng pangalan na file ay gagamit ng bagong pangalan.
- Bawat save ay bagong download. Depende sa setting ng browser, diretso ito sa iyong downloads folder o nagtatanong kung saan ise-save. Kung may file na may ganoong pangalan na, karamihan sa browser ay nagdaragdag ng numero, gaya ng `Untitled (1).modelcraft`.

:::chromium
Para pumili ng folder sa bawat pagkakataon, buksan ang settings ng browser, hanapin ang "downloads" at i-on ang "Ask where to save each file before downloading".
:::

:::firefox
Para pumili ng folder sa bawat pagkakataon, buksan ang **Settings**, saka ang **General**, at sa ilalim ng "Downloads" piliin ang "Always ask you where to save files".
:::

:::safari
Para baguhin kung saan napupunta ang mga download, buksan ang **Safari**, saka ang **Settings**, saka ang **General**, at itakda ang "File download location".
:::

### Magsimula ng bagong model

I-click ang {{ui:Bago}}. Kung may hindi pa nai-save na pagbabago, magtatanong muna ang ModelCraft. Nagsisimulang walang laman ang bagong model, sa unit ng iyong locale (feet at inches sa United States, millimeters sa iba pang lugar), at walang scene.

### Kung magsara ang browser bago ka mag-save

Nag-iingat ang ModelCraft ng kopya ng hindi pa nai-save na gawa sa iyong browser ilang segundo pagkatapos ng bawat pagbabago. Kung magsara ang tab o ang browser bago ka mag-save, sa susunod mong pagbukas ng ModelCraft ay magtatanong ito ng "Ibalik ang iyong gawa?". Ang pagbawi ay magbubukas ng model gaya ng dati, hindi pa naka-save sa file: i-save ito para mapanatili. Tingnan ang [Ibalik ang iyong gawa](common:recover).

### Mula sa CadCraft: Buksan sa ModelCraft

Sa CadCraft drafting app, ang **View**, saka ang **More**, saka ang **Open in ModelCraft** ay ipinapasa ang bukas na drawing sa ModelCraft sa bagong tab, bilang DWG. Dumarating ito gaya ng isang na-import na DWG: mga linya sa lupa, nasa isang group, handa nang pagmodelan. Walang ina-upload; dumadaan ang file sa sariling storage ng browser mo.

## I-import

Idinadagdag ng pag-import ang file sa model na bukas mo; hindi nito pinapalitan ito.

1. I-click ang {{ui:I-import}} sa group na {{ui:File}}, o i-drop ang file sa 3D view.
2. Piliin ang file na SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF.

   Dumarating ang file bilang **isang group**, napili, at nag-zo-zoom ang view para ipakita ito. Sinasabi ng status bar kung ano ang pumasok, at inililista ang anumang hindi ma-import, gaya ng "Hindi na-import: 2 texture".

3. Para direktang gawin ang geometry nito, i-double-click ang group para i-edit sa loob nito, o i-click ang {{ui:Explode}}.

Ilang bagay na dapat malaman:

- **Laki at direksyon pataas:** Sinasabi ng mga file na Collada ang kanilang unit at kung aling axis ang pataas, at kino-convert ito ng ModelCraft. Laging nasa meters ang glTF. Walang dalang unit ang mga file na OBJ: binabasa ito ng ModelCraft bilang meters, na may Y pataas. Kung 1000 beses na mas malaki o mas maliit ang OBJ kaysa dapat, gamitin ang [Scale](topic:rotate-scale) na may factor na gaya ng `0.001` o `1000`.
- **DWG at DXF** ay pumapasok bilang mga linya (edge) sa lupa, hindi bilang face. Kung hindi sinasabi ng drawing ang unit nito, magtatanong ang dialog na may pamagat na "Drawing units" kung ano ang isang unit ng drawing. Tingnan ang [Mag-model sa site plan](topic:site-plan).
- **Limitasyon:** tinatanggihan sa pag-import ang mga file na lampas 300 MB, at sa pagbubukas ang lampas 200 MB. Tinatanggihan bilang sobrang laki ang mga file na may higit sa 2 milyong vertex o face.

## I-export

1. I-click ang {{ui:I-export}} sa group na {{ui:File}}.
2. Pumili ng format: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para sa pag-print (.stl, millimeters)}}, {{ui:PLY na may kulay (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para sa BimCraft (.ifc)}}, {{ui:DWG para sa CAD (.dwg, 2004)}} o {{ui:DXF para sa CAD (.dxf, R12)}}.

Dina-download ng browser ang file, na pinangalanan gaya ng model. Ang buong model ang ie-export, hindi lang ang pinili. Hindi ie-export ang walang lamang model: "Walang laman ang model: gumuhit muna ng isang bagay." Tingnan ang [I-export ang model para sa ibang program](topic:export-model).

## Online at offline

Lahat ng nasa ModelCraft ay tumatakbo sa iyong computer, kaya gumagana nang walang koneksyon ang pagmomodelo, pagbubukas, pag-save, pag-import at pag-export kapag na-load na ang app.

Para buksan ang ModelCraft nang walang koneksyon, i-save ito para sa offline na paggamit habang online ka:

1. I-click ang {{ui:I-save para sa offline}} sa app bar sa itaas.
2. Bumibilang paitaas ang button ("Saving 40 of 212") habang nagse-save ito. Sine-save ng ModelCraft ang sarili nitong mga file (kasama ang DWG reader nito), ang help na ito at ang 3D library, kaya maaari itong tumagal.
3. Kapag nakasulat na {{ui:Handa offline}} ang button, bubukas ang ModelCraft mula sa parehong address nang walang koneksyon, at gumagana rin offline ang pag-import ng DWG.

I-click ang {{ui:Handa offline}} mamaya para sa {{ui:I-save ulit (kunin ang pinakabagong bersyon)}} o {{ui:Alisin ang offline copy}}. Kung nakasulat na {{ui:Hindi na-save}} ang button, may ilang file na hindi na-download: suriin ang koneksyon at i-click ito para subukang muli. Ang {{ui:Hindi available ang offline}} ay nangangahulugang hindi kayang magtago ng kopya ng browser window na ito (mga private window at ilang managed computer). Tingnan ang [Pagtatrabaho offline](common:offline).

Hindi pa available ang cloud saving. Nasa lugar kung saan mo ito i-save ang bawat model.

:::offline
Offline ka. Maaari mong ipagpatuloy ang pagmomodelo at pag-save. Maliban kung nakasulat sa app bar ang {{ui:Handa offline}}, huwag i-reload ang tab na ito hangga't hindi ka online ulit.
:::

## Desktop app

:::desktop
Ginagamit mo ang ModelCraft sa CadCraft Studio, ang desktop app na may lahat ng walong app. Nagbubukas at nagse-save ang mga file kung saan mo piliin.
:::

:::web
Tumatakbo ang ModelCraft sa browser sa Mac, Windows at Linux, at sa CadCraft Studio, ang desktop app na may lahat ng walong app sa iisang install, mula sa getcadcraft.com/download.
:::
