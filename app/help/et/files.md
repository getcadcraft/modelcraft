---
title: Faili avamine, salvestamine, importimine ja eksportimine
summary: ModelCraft'i fail, mida saad sisse ja välja tuua, kuhu failid lähevad ning mis muutub võrguta töötamisel ja brauserite vahel.
keywords: ava, salvesta, impordi, ekspordi, fail, 3dm, skp, taasta, automaatsalvestus, hiljutised, töölaud, ava 3D-vaates, üleandmine, laadi alla, modelcraft-fail, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, vormingud, võrguta, salvesta kui
from: 3f09ab72
---

ModelCraft loeb ja kirjutab faile sinu arvutis. Midagi ei laadita üles: avatud faili loetakse sinu brauseris ning salvestatud fail on allalaadimine. Vaata [Kuhu sinu failid lähevad](common:your-files).

## Vormingud ülevaates

| Vorming | Ava | Impordi | Ekspordi | Milleks see on |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | jah | ei | {{ui:Save}} | Sinu töö fail. Hoiab kõike. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | jah | jah | {{ui:Save as}}, {{ui:Export}} | Renderdamise ja stseenide kokkupanemise programmid. ModelCraft'i enda USD hoiab kõike. Vaata [USD salvestamine, avamine ja eksport](topic:usd). |
| SketchUp (`.skp`) | ei | jah | ei | Modelite toomine SketchUpist. Hoiab grupid, komponendid, värvid, tahkude tekstuurid, sildid ja pehmed servad. Vaata [SKP-mudeli importimine](topic:import-sketchup-files). |
| Collada (`.dae`) | ei | jah | jah | Mudelite vahetamine teiste 3D-modelerite vahel. Hoiab grupid, komponendid ja värvid. |
| OBJ (`.obj`) | ei | jah | jah | Renderdamise ja visualiseerimise programmid. |
| glTF (`.glb`, `.gltf`) | ei | jah | ainult `.glb` | Veebivaatajad, mängumootorid, AR. |
| STL (`.stl`) | ei | jah | jah | 3D-printimine (millimeetrites). |
| PLY (`.ply`) | ei | jah | jah | Värvidega võrgud: skannid, värviline printimine. |
| FBX (`.fbx`) | ei | jah | ei | Mudelid animatsiooni- ja mängu programmidest (FBX 2011 ja uuem). |
| Alembic (`.abc`) | ei | jah | ei | Geomeetria vahemälud esimese valimi järgi. |
| STEP (`.step`, `.stp`) | ei | jah | ei | Detailid detailimodelleerijatelt ja tarnijatelt, suletud võrkudena tegelikus suuruses. Vaata [Failivormingud](topic:formats). |
| `.3dm` | ei | jah | ei | NURBS-mudelid: polüpinnad, võrgud, kõverad, plokid ja kihid, võrkudena, servadena, komponentidena ja siltidena. Vaata [.3dm-mudeli importimine](topic:import-3dm-files). |
| 3MF (`.3mf`) | ei | ei | jah | 3D-printimine värvidega (millimeetrites). {{ui:Check for 3D printing (STL or 3MF)…}} kaudu: vaata [Mudeli ettevalmistamine 3D-printimiseks](topic:print-3d). |
| IFC (`.ifc`) | ei | ei | jah | BIM-programmid ja BimCraft. |
| DWG (`.dwg`) | ei | jah | jah | Situatsiooniplaan või korrusplaan, millele modelleerida; mudeli saatmine CAD-programmi. |
| DXF (`.dxf`) | ei | jah | jah | Sama mis DWG, mis tahes CAD-programmile. |

[Failivormingud üksikasjalikult](topic:formats) loetleb täpselt, mida iga vorming hoiab ja mida ei hoia.

## ModelCraft'i fail

`.modelcraft` fail hoiab kogu mudeli: geomeetria, grupid, komponendid, juhikud, stseenid, ühikud ning kaamera ja stiili, mida kasutasid salvestamise ajal. Tagasivõtmise ajalugu see ei hoia.

### Mudeli avamine

1. Klõpsa rühmas {{ui:File}} nuppu {{ui:Open}} või vajuta {{key:Mod+O}}.
2. Kui ekraanil olev mudel sisaldab salvestamata muudatusi, küsib ModelCraft: „Sellel mudelil on salvestamata muudatusi. Kas kõigepealt salvestada koopia?“ Vali {{ui:Save a copy}}, {{ui:Discard changes}} või {{ui:Cancel}}.
3. Vali `.modelcraft` fail.

Mudel avaneb ühikutes, milles see salvestati, ja kaameraga, millega see salvestati. Võid ka lohistada `.modelcraft` faili 3D-vaatesse või klõpsata ühel failil alguskaardi hiljutiste failide loendis (brauserid, mis suudavad faili uuesti avada, ja töölauarakendus).

:::desktop
Töölauarakenduses avab `.modelcraft` faili topeltklõps ModelCraftis ning sama teeb **Ava rakendusega** Collada, OBJ, glTF, DWG või DXF faili puhul (fail imporditakse uude mudelisse).
:::

### Mudeli salvestamine

Klõpsa {{ui:Save}} või vajuta {{key:Mod+S}}. Brauser laadib alla faili `<name>.modelcraft`, kus nimi on avatud faili nimi või „Nimetu“ uue mudeli puhul.

:::desktop
Töölauarakenduses kirjutab {{ui:Save}} avatud faili samasse kohta. Uus mudel küsib, kuhu see salvestada.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) salvestab koopia `.modelcraft` failina või [USD-na](topic:usd); kus brauser seda võimaldab, küsib nime ja asukohta. Muidu nimeta allalaaditud fail ümber: järgmine salvestamine pärast ümbernimetatud faili avamist kasutab uut nime.
- Iga salvestamine on uus allalaadimine. Olenevalt brauseri seadistusest läheb see otse allalaadimiste kausta või küsib, kuhu salvestada. Kui selle nimega fail on juba seal, lisavad enamik brausereid numbri, näiteks `Untitled (1).modelcraft`.

:::chromium
Et valida kaust iga kord, ava brauseri seaded, otsi „allalaadimised“ ja lülita sisse „Küsi enne allalaadimist, kuhu iga fail salvestada“.
:::

:::firefox
Et valida kaust iga kord, ava **Seaded**, seejärel **Üldine**, ja jaotises „Allalaadimised“ vali „Küsi alati, kuhu failid salvestada“.
:::

:::safari
Et muuta allalaadimiste asukohta, ava **Safari**, seejärel **Seaded**, seejärel **Üldine**, ja määra „Failide allalaadimise asukoht“.
:::

### Uue mudeli alustamine

Klõpsa {{ui:New}}. Kui on salvestamata muudatusi, küsib ModelCraft enne. Uus mudel algab tühjana, sinu keele ühikus (Ameerika Ühendriikides jalad ja tollid, mujal millimeetrid), ilma stseenideta.

### Kui brauser sulgub enne salvestamist

ModelCraft hoiab salvestamata töö koopiat brauseris paar sekundit pärast iga muudatust. Koopia kirjutatakse taustal, nii et suur mudel sind ei peata. Kui vahekaart või brauser sulgub enne salvestamist, küsib ModelCraft järgmisel avamisel „Taastada sinu töö?“. Taastamine avab mudeli sellisena, nagu see oli, kuid veel failina salvestamata: salvesta see, et seda alles hoida. Vaata [Töö taastamine](common:recover).

### CadCraftist: Ava ModelCraftis

CadCraft'i joonistusrakenduses **Vaade**, seejärel **Rohkem**, seejärel **Ava ModelCraftis** annab avatud joonise ModelCraftile uuel vahekaardil DWG-na. See saabub nagu imporditud DWG: jooned maapinnal, grupis, valmis modelleerimiseks. Midagi ei laadita üles; fail liigub läbi sinu brauseri enda salvestusruumi.

## Import

Importimine lisab faili avatud mudelile; see ei asenda seda.

1. Klõpsa rühmas {{ui:File}} nuppu {{ui:Import}} või lohista fail 3D-vaatesse.
2. Vali SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG või DXF fail.

   Fail saabub **ühe grupina**, valituna, ja vaade suumib seda näitama. Olekuriba ütleb, mis saabus, ja loetleb kõik, mida ei õnnestunud importida, näiteks „Ei imporditud: 2 tekstuuri“.

3. Et töödelda selle geomeetriat otse, tee grupil topeltklõps, et redigeerida selle sees, või klõpsa {{ui:Explode}}.

Mõned asjad, mida teada:

- **Suurus ja üles-suund:** Collada failid ütlevad oma ühiku ja selle, milline telg on üleval, ning ModelCraft teisendab need. glTF on alati meetrites. OBJ failidel ühikut pole: ModelCraft loeb neid meetrites, Y-telg üleval. Kui OBJ tuleb 1000 korda liiga suurena või väikesena, kasuta [Mõõtkava](topic:rotate-scale) teguriga nagu `0.001` või `1000`.
- **DWG ja DXF** tulevad sisse joontena (servadena) maapinnal, mitte tahkudena. Kui joonis ei ütle oma ühikut, küsib dialoog pealkirjaga „Joonise ühikud“, mis on üks joonise ühik. Vaata [Modelleerimine situatsiooniplaanil](topic:site-plan).
- **Piirangud:** üle 300 MB faile importimiseks ei võeta vastu ja üle 200 MB faile avamiseks. Üle 2 miljoni tipu või tahuga faile peetakse liiga suurteks ja need keeldutakse. OBJ, mis on üle 64 MB, keeldutakse enne lugemist. Tekstifaile (Collada, OBJ, ASCII STL, USD tekst) loetakse tükkhaaval, umbes 4 MB kaupa, nii et ükski tekstiplokk ei hoia kogu faili; 16 MB OBJ kasutas meie testis avamisel umbes 0.5 GB mälu.

## Eksport

1. Klõpsa rühmas {{ui:File}} nuppu {{ui:Export}}.
2. Vali vorming: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL printimiseks (.stl, millimeetrites)}}, {{ui:PLY värvidega (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC BimCraftile (.ifc)}}, {{ui:DWG CAD-ile (.dwg, 2004)}} või {{ui:DXF CAD-ile (.dxf, R12)}}.

Brauser laadib faili alla ja nimetab selle mudeli järgi. Eksporditakse kogu mudel, mitte ainult valik. glTF-, Collada- ja OBJ-failid kirjutatakse taustal, nii et ModelCraft töötab edasi suure mudeli eksportimise ajal; allalaadimine algab, kui fail on valmis. Tühja mudelit ei eksportita: „Mudel on tühi: joonista kõigepealt midagi.“ Vaata [Mudeli eksportimine teistele programmidele](topic:export-model).

## Võrgus ja võrguta

ModelCraft töötab kogu sinu arvutis, nii et modelleerimine, avamine, salvestamine, importimine ja eksportimine toimivad ilma ühenduseta, kui rakendus on laaditud.

Et avada ModelCraft täiesti ilma ühenduseta, salvesta see võrguta kasutamiseks, kui oled võrgus:

1. Klõpsa rakenduse ülaosas olevat riba nuppu {{ui:Save for offline}}.
2. Nupp loeb salvestamise ajal („Salvestatakse 40 / 212“). ModelCraft salvestab oma failid (nende hulgas DWG-lugeja), selle abi ja 3D-teegi, nii et see võib veidi aega võtta.
3. Kui nupul on {{ui:Offline ready}}, avaneb ModelCraft samalt aadressilt ilma ühenduseta ning DWG-import töötab võrguta samuti.

Klõpsa hiljem nuppu {{ui:Offline ready}}, et valida {{ui:Save again (get the newest version)}} või {{ui:Remove the offline copy}}. Kui nupul on {{ui:Could not save}}, ei laadinud mõned failid alla: kontrolli ühendust ja klõpsa uuesti. {{ui:Offline not available}} tähendab, et see brauseriaken ei suuda koopiat hoida (privaatsed aknad ja mõned hallatud arvutid). Vaata [Töötamine võrguta](common:offline).

Pilvesalvestus pole veel saadaval. Iga mudel asub seal, kuhu sa salvestad.

:::offline
Oled võrguta. Võid jätkata modelleerimist ja salvestamist. Kui rakenduse ülaosas ei ole nähtav {{ui:Offline ready}}, ära laadi seda vahekaarti uuesti enne, kui oled jälle võrgus.
:::

## Töölauarakendus

:::desktop
Kasutad ModelCraftit CadCraft Studios, töölauarakenduses, kus on kõik kaheksa rakendust. Failid avanevad ja salvestuvad sinu valitud kohta.
:::

:::web
ModelCraft töötab brauseris Macil, Windowsis ja Linuxis ning CadCraft Studios, töölauarakenduses, kus on kõik kaheksa rakendust ühes installis, aadressilt getcadcraft.com/download.
:::
