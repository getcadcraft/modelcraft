---
title: Ava, salvesta, impordi ja ekspordi
summary: ModelCraft'i fail, mida saab sisse tuua ja välja saata, kuhu failid lähevad ning mis muutub võrguta ja eri brauserite vahel.
keywords: ava, salvesta, impordi, ekspordi, fail, 3dm, skp, taasta, automaatsalvestus, hiljutised, töölaud, ava 3D-s, üleandmine, laadi alla, modelcraft fail, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, vormingud, võrguta, salvesta nimega
from: 0b4896d1
---

ModelCraft loeb ja kirjutab faile sinu arvutis. Midagi ei laadita üles: avatud fail loetakse sinu brauseris ning salvestatud fail on allalaadimine. Vaata [Kuhu su failid lähevad](common:your-files).

## Vormingud ühel pilgul

| Vorming | Ava | Impordi | Ekspordi | Milleks see on |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | jah | ei | {{ui:Salvesta}} | Sinu töö fail. Hoiab kõike. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | jah | jah | {{ui:Salvesta kui}}, {{ui:Ekspordi}} | Renderdus- ja stseenikokkupanemise programmid. ModelCraft'i enda USD hoiab kõike. Vaata [USD salvestamine, avamine ja eksport](topic:usd). |
| SketchUp (`.skp`) | ei | jah | ei | Mudelite toomine SketchUp'ist. Hoiab gruppe, komponente, värve, tahkudel olevaid tekstuure, silte ja pehmeid servi. Vaata [SKP-mudeli sisse toomine](topic:import-sketchup-files). |
| Collada (`.dae`) | ei | jah | jah | Mudelite vahetamine teiste 3D-modelleerijatega. Hoiab gruppe, komponente ja värve. |
| OBJ (`.obj`) | ei | jah | jah | Renderdus- ja visualiseerimisprogrammid. |
| glTF (`.glb`, `.gltf`) | ei | jah | ainult `.glb` | Veebivaatajad, mängumootorid, AR. |
| STL (`.stl`) | ei | jah | jah | 3D-printimine (millimeetrites). |
| PLY (`.ply`) | ei | jah | jah | Värvidega võrgud: skannid, värviline printimine. |
| FBX (`.fbx`) | ei | jah | ei | Mudelid animatsiooni- ja mänguprogrammidest (FBX 2011 ja uuem). |
| Alembic (`.abc`) | ei | jah | ei | Geomeetriavahemälud, nende esimese kaadri järgi. |
| STEP (`.step`, `.stp`) | ei | jah | ei | Detailid detailimodelleerijatest ja tarnijatelt, suletud võrkudena õiges suuruses. Vaata [Failivormingud](topic:formats). |
| `.3dm` | ei | jah | ei | NURBS-mudelid: polypinnad, võrgud, kõverad, plokid ja kihid, võrkudena, servadena, komponentidena ja siltidena. Vaata [.3dm-mudeli sisse toomine](topic:import-3dm-files). |
| 3MF (`.3mf`) | ei | ei | jah | 3D-printimine, värvidega (millimeetrites). Käsust {{ui:Kontrolli 3D-printimist (STL või 3MF)…}}: vaata [Valmista mudel 3D-printimiseks](topic:print-3d). |
| IFC (`.ifc`) | ei | ei | jah | BIM-programmid ja BimCraft. |
| DWG (`.dwg`) | ei | jah | jah | Situatsiooniplaan või korrusplaan, millele modelleerida; mudeli saatmine CAD-programmi. |
| DXF (`.dxf`) | ei | jah | jah | Sama, mis mis tahes CAD-programmile. |

[Failivormingud üksikasjalikult](topic:formats) loetleb täpselt, mida iga vorming hoiab ja mida ei hoia.

## ModelCraft'i fail

Fail `.modelcraft` hoiab kogu mudeli: geomeetria, grupid, komponendid, abijooned, stseenid, ühikud ning kaamera ja stiili, mis olid salvestamise hetkel kasutusel. Tagasivõtmise ajalugu ei hoia.

### Mudeli avamine

1. Klõpsa grupis {{ui:Fail}} nuppu {{ui:Ava}} või vajuta {{key:Mod+O}}.
2. Kui ekraanil olev mudel sisaldab salvestamata muudatusi, küsib ModelCraft: „Sellel mudelil on salvestamata muudatusi. Kas salvestada kõigepealt koopia?“ Vali {{ui:Salvesta koopia}}, {{ui:Loobu muudatustest}} või {{ui:Loobu}}.
3. Vali fail `.modelcraft`.

Mudel avaneb ühikutes, milles see salvestati, ja kaameraga, millega see salvestati. Võid lohistada faili `.modelcraft` ka 3D-vaatele või klõpsata ühte hiljutiste failide loendis alguskaardil (brauserid, mis oskavad faili uuesti avada, ja töölauarakendus).

:::desktop
Töölauarakenduses avab faili `.modelcraft` topeltklõps ModelCraft'is ning samamoodi avab {{ui:Ava rakendusega}} Collada-, OBJ-, glTF-, DWG- või DXF-faili (see imporditakse uude mudelisse).
:::

### Mudeli salvestamine

Klõpsa {{ui:Salvesta}} või vajuta {{key:Mod+S}}. Brauser laadib alla faili `<nimi>.modelcraft`, kus nimi on avatud faili nimi või „Untitled“ uue mudeli puhul.

:::desktop
Töölauarakenduses kirjutab {{ui:Salvesta}} avatud faili kohe sellesse kohta. Uus mudel küsib, kuhu see salvestada.
:::

- {{ui:Salvesta kui}} ({{key:Mod+Shift+S}}) salvestab koopia failina `.modelcraft` või [USD-na](topic:usd); kus brauser seda võimaldab, küsib see nime ja asukohta. Muidu nimeta allalaaditud fail ümber: järgmine salvestus pärast ümbernimetatud faili avamist kasutab uut nime.
- Iga salvestus on uus allalaadimine. Sõltuvalt brauseri seadistusest läheb see otse allalaadimiste kausta või küsib, kuhu salvestada. Kui sellise nimega fail on juba seal, lisavad enamik brausereid numbri, näiteks `Untitled (1).modelcraft`.

:::chromium
Kausta valimiseks iga kord ava brauseri seaded, otsi „downloads“ ja lülita sisse „Ask where to save each file before downloading“.
:::

:::firefox
Kausta valimiseks iga kord ava **Sätted**, seejärel **Üldine**, ja jaotises „Downloads“ vali „Always ask you where to save files“.
:::

:::safari
Allalaadimiste asukoha muutmiseks ava **Safari**, seejärel **Sätted**, seejärel **Üldine**, ja määra „File download location“.
:::

### Uue mudeli alustamine

Klõpsa {{ui:Uus}}. Kui on salvestamata muudatusi, küsib ModelCraft enne. Uus mudel algab tühjana, sinu keele ühikutes (Ameerika Ühendriikides jalad ja tollid, mujal millimeetrid), ilma stseenideta.

### Kui brauser sulgub enne salvestamist

ModelCraft hoiab salvestamata töö koopiat brauseris paar sekundit pärast iga muudatust. Kui vahekaart või brauser suletakse enne salvestamist, küsib ModelCraft järgmisel avamisel „Kas taastada sinu töö?“. Taastamine avab mudeli sellisena, nagu see oli, kuid veel failina salvestamata: salvesta see, et seda alles hoida. Vaata [Töö taastamine](common:recover).

### CadCraft'ist: Ava ModelCraftis

CadCraft'i joonistusrakenduses avab **Vaade**, seejärel **Veel**, seejärel **Ava ModelCraftis** avatud joonise ModelCraft'ile uuel vahekaardil DWG-failina. See saabub nii, nagu imporditud DWG: jooned maapinnal, grupis, valmis modelleerimiseks. Midagi ei laadita üles; fail liigub läbi sinu brauseri enda salvestusruumi.

## Import

Import lisab faili avatud mudelile; see ei asenda mudelit.

1. Klõpsa grupis {{ui:Fail}} nuppu {{ui:Impordi}} või lohista fail 3D-vaatele.
2. Vali SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- või DXF-fail.

   Fail saabub **ühe grupina**, valituna, ning vaade suumib selle peale. Olekuriba ütleb, mis tuli sisse, ja loetleb asjad, mida ei saanud importida, näiteks „Not imported: 2 texture“.

3. Et selle geomeetriaga otse töötada, topeltklõpsa gruppi, et sees muuta, või klõpsa {{ui:Lahuta}}.

Mõned asjad, mida tasub teada:

- **Suurus ja üles suund:** Collada-failid ütlevad, millises ühikus need on ja mis telg on üles, ning ModelCraft teisendab need. glTF on alati meetrites. OBJ-failid ei kanna ühikut: ModelCraft loeb neid meetrites, Y-telg üleval. Kui OBJ tuleb 1000 korda liiga suur või väike, kasuta [Mõõtkava](topic:rotate-scale) teguriga nagu `0.001` või `1000`.
- **DWG ja DXF** tulevad sisse joontena (servadena) maapinnal, mitte tahkudena. Kui joonis ei ütle oma ühikut, küsib dialoog pealkirjaga „Drawing units“, mis on üks joonise ühik. Vaata [Mudeli koostamine situatsiooniplaanil](topic:site-plan).
- **Piirangud:** üle 300 MB faile ei imporditi ning üle 200 MB faile ei avata. Üle 2 miljoni tipu või tahu sisaldavaid faile ei võeta, kuna need on liiga suured.

## Eksport

1. Klõpsa grupis {{ui:Fail}} nuppu {{ui:Ekspordi}}.
2. Vali vorming: {{ui:glTF binaarne (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL printimiseks (.stl, millimeetrites)}}, {{ui:PLY värvidega (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC BimCraftile (.ifc)}}, {{ui:DWG CAD-ile (.dwg, 2004)}} või {{ui:DXF CAD-ile (.dxf, R12)}}.

Brauser laadib faili alla, nimetatuna nagu mudel. Eksporditakse kogu mudel, mitte ainult valik. Tühja mudelit ei eksporditakse: „The model is empty: draw something first.“ Vaata [Mudeli eksportimine teistele programmidele](topic:export-model).

## Võrgus ja võrguta

Kõik ModelCraft'is töötab sinu arvutis, nii et modelleerimine, avamine, salvestamine, importimine ja eksportimine töötavad ilma ühenduseta, kui rakendus on laaditud.

Et avada ModelCraft täiesti ilma ühenduseta, salvesta see võrguta kasutamiseks, kui oled võrgus:

1. Klõpsa ülal rakenduse ribal {{ui:Salvesta võrguks}}.
2. Nupp loeb üles („Saving 40 of 212“), kui salvestab. ModelCraft salvestab oma failid (sealhulgas DWG-lugeja), selle abi ja 3D-teegi, seega võib see võtta aega.
3. Kui nupp näitab {{ui:Valmis ka võrguta}}, avaneb ModelCraft samalt aadressilt ilma ühenduseta ning DWG-import töötab ka võrguta.

Hiljem klõpsa {{ui:Valmis ka võrguta}}, et valida {{ui:Salvesta uuesti (võta uusim versioon)}} või {{ui:Eemalda võrguvälise koopia}}. Kui nupp näitab {{ui:Salvestamine ebaõnnestus}}, ei laadinud mõned failid alla: kontrolli ühendust ja klõpsa uuesti. {{ui:Võrguta kasutamine pole saadaval}} tähendab, et see brauseriaken ei saa koopiat hoida (privaatsed aknad ja mõned hallatud arvutid). Vaata [Töö võrguta](common:offline).

Pilvesalvestus veel ei ole saadaval. Iga mudel asub seal, kuhu sa selle salvestad.

:::offline
Oled võrguta. Võid jätkata modelleerimist ja salvestamist. Kui rakenduse ribal ei ole näha {{ui:Valmis ka võrguta}}, ära laadi seda vahekaarti uuesti enne, kui oled jälle võrgus.
:::

## Töölauarakendus

:::desktop
Kasutad ModelCraft'i rakenduses CadCraft Studio, töölauarakenduses kõigi kaheksa rakendusega. Failid avatakse ja salvestatakse sinu valitud kohta.
:::

:::web
ModelCraft töötab brauseris Macis, Windowsis ja Linuxis ning rakenduses CadCraft Studio, töölauarakenduses, kus on kõik kaheksa rakendust ühes paketis, aadressilt getcadcraft.com/download.
:::
