---
title: Opna, vista, flytja inn og flytja út
summary: Skráin í ModelCraft, hvað þú getur flutt inn og út, hvert skrárnar fara og hvað breytist án nettengingar og á milli vafra.
keywords: opna, vista, flytja inn, flytja út, skrá, 3dm, skp, endurheimta, sjálfvirk vistun, nýlegar, skjáborð, opna í 3D, afhending, niðurhal, modelcraft-skrá, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, skráarsnið, án nettengingar, vista sem
from: 3f09ab72
---

ModelCraft les og skrifar skrár á tölvunni þinni. Ekkert er hlaðið upp: skrá sem þú opnar er lesin inni í vafranum þínum, og skrá sem þú vistar er niðurhal. Sjá [Hvert skrárnar þínar fara](common:your-files).

## Skráarsnið í hnotskurn

| Snið | Opna | Flytja inn | Flytja út | Til hvers það er |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | já | nei | {{ui:Vista}} | Vinnuskráin þín. Geymir allt. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | já | já | {{ui:Vista sem}}, {{ui:Flytja út}} | Myndgerðarforrit og forrit sem setja saman senur. USD-skrá ModelCraft geymir allt. Sjá [Vista, opna og flytja út USD](topic:usd). |
| SketchUp (`.skp`) | nei | já | nei | Til að flytja inn líkön úr SketchUp. Geymir hópa, íhluti, liti, áferðir á flötum, merki og mjúkar brúnir. Sjá [Flytja inn SKP-líkan](topic:import-sketchup-files). |
| Collada (`.dae`) | nei | já | já | Skipti á líkönum við önnur þrívíddarforrit. Geymir hópa, íhluti og liti. |
| OBJ (`.obj`) | nei | já | já | Myndgerðar- og myndræn forrit. |
| glTF (`.glb`, `.gltf`) | nei | já | aðeins `.glb` | Vefskoðarar, leikjavélar, AR. |
| STL (`.stl`) | nei | já | já | Þrívíddarprentun (í millimetrum). |
| PLY (`.ply`) | nei | já | já | Net með litum: skannanir, litaprentun. |
| FBX (`.fbx`) | nei | já | nei | Líkön úr hreyfimynda- og leikjaforritum (FBX 2011 og nýrri). |
| Alembic (`.abc`) | nei | já | nei | Rúmfræðiskyndiminni, við fyrsta sýnishorn. |
| STEP (`.step`, `.stp`) | nei | já | nei | Hlutir úr hlutateiknunarforritum og frá birgjum, sem lokuð net í réttri stærð. Sjá [Skráarsnið](topic:formats). |
| `.3dm` | nei | já | nei | NURBS-líkön: fjölflatar, net, feril, blokkir og lög, sem net, brúnir, íhlutir og merki. Sjá [Flytja inn .3dm-líkan](topic:import-3dm-files). |
| 3MF (`.3mf`) | nei | nei | já | Þrívíddarprentun, með litum (í millimetrum). Frá {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}: sjá [Gera líkan tilbúið fyrir þrívíddarprentun](topic:print-3d). |
| IFC (`.ifc`) | nei | nei | já | BIM-forrit og BimCraft. |
| DWG (`.dwg`) | nei | já | já | Lóðarmynd eða gólfgrunnmynd til að móta á; senda líkanið í CAD-forrit. |
| DXF (`.dxf`) | nei | já | já | Það sama, fyrir öll CAD-forrit. |

[Skráarsnið í smáatriðum](topic:formats) sýnir nákvæmlega hvað hvert snið geymir og sleppir.

## ModelCraft-skráin

`.modelcraft`-skrá geymir allt líkanið: rúmfræði, hópa, íhluti, leiðbeiningar, senur, einingarnar, og myndavélina og stílinn sem þú notaðir þegar þú vistaðir. Hún geymir ekki afturköllunarsöguna.

### Opna líkan

1. Smelltu á {{ui:Opna}} í hópnum {{ui:Skrá}}, eða ýttu á {{key:Mod+O}}.
2. Ef líkanið á skjánum hefur óvistaðar breytingar spyr ModelCraft: "Þetta líkan hefur breytingar sem eru ekki vistaðar. Vista afrit fyrst?" Veldu {{ui:Vista afrit}}, {{ui:Henda breytingum}} eða {{ui:Hætta við}}.
3. Veldu `.modelcraft`-skrána.

Líkanið opnast í þeim einingum sem það var vistað í, með myndavélinni sem það var vistað með. Þú getur líka dregið `.modelcraft`-skrá yfir 3D-skjáinn, eða smellt á hana í listanum yfir nýlegar skrár á upphafsspjaldinu (vafrar sem geta opnað skrá aftur, og skjáborðsforritið).

:::desktop
Í skjáborðsforritinu opnast `.modelcraft`-skrá í ModelCraft ef þú tvísmellir á hana, og það gildir líka um **Opna með** á Collada-, OBJ-, glTF-, DWG- eða DXF-skrá (hún er flutt inn í nýtt líkan).
:::

### Vista líkan

Smelltu á {{ui:Vista}} eða ýttu á {{key:Mod+S}}. Vafrinn sækir `<name>.modelcraft`, þar sem nafnið er skráin sem þú opnaðir, eða "Untitled" fyrir nýtt líkan.

:::desktop
Í skjáborðsforritinu skrifar {{ui:Vista}} í skrána sem þú opnaðir, á sama stað. Nýtt líkan spyr hvar það á að vistast.
:::

- {{ui:Vista sem}} ({{key:Mod+Shift+S}}) vistar afrit sem `.modelcraft`-skrá eða sem [USD](topic:usd); þar sem vafrinn getur, spyr hann um nafn og stað. Annars endurnefndu niðurhalaða skrána: næsta vistun eftir að þú opnar endurnefndu skrána notar nýja nafnið.
- Hver vistun er nýtt niðurhal. Eftir stillingum vafrans fer það beint í niðurhalsmöppuna þína eða spyr hvar á að vista. Ef skrá með því nafni er þegar þar, bætir flest vafrar við tölu, til dæmis `Untitled (1).modelcraft`.

:::chromium
Til að velja möppu í hvert skipti skaltu opna stillingar vafrans, leita að „niðurhal“ og kveikja á valkostinum um að spyrja hvar eigi að vista hverja skrá áður en hún er sótt.
:::

:::firefox
Til að velja möppu í hvert skipti skaltu opna **Stillingar**, þá **Almennt**, og undir „Niðurhal“ velja valkostinn um að spyrja alltaf hvar skrár eigi að vistast.
:::

:::safari
Til að breyta hvar niðurhal fer skaltu opna **Safari**, þá **Stillingar**, þá **Almennt**, og stilla „Staðsetning niðurhals skráa“.
:::

### Byrja nýtt líkan

Smelltu á {{ui:Nýtt}}. Ef það eru óvistaðar breytingar spyr ModelCraft fyrst. Nýtt líkan byrjar tómt, í einingu staðarins þíns (fet og tommur í Bandaríkjunum, millimetrar annars staðar), án sena.

### Ef vafrinn lokast áður en þú vistar

ModelCraft geymir afrit af óvistaðri vinnu í vafranum þínum nokkrum sekúndum eftir hverja breytingu. Afritið er skrifað í bakgrunni, þannig að stórt líkan tefur þig ekki meðan það er geymt. Ef flipinn eða vafrinn lokast áður en þú vistar, spyr ModelCraft næst þegar þú opnar ModelCraft: "Endurheimta vinnuna þína?" Endurheimt opnar líkanið eins og það var, en ekki enn vistað í skrá: vistaðu það til að geyma það. Sjá [Endurheimta vinnuna þína](common:recover).

### Frá CadCraft: Opna í ModelCraft

Í CadCraft-teiknforritinu, **Sýn**, þá **Meira**, þá **Opna í ModelCraft** afhendir opna teikningu til ModelCraft í nýjum flipa, sem DWG. Hún kemur eins og innflutt DWG: línur á jörðinni, í hópi, tilbúnar til að móta á. Ekkert er hlaðið upp; skráin fer í gegnum eigin geymslu vafrans þíns.

## Innflutningur

Innflutningur bætir skrá við líkanið sem þú hefur opið; hann kemur ekki í staðinn fyrir það.

1. Smelltu á {{ui:Flytja inn}} í hópnum {{ui:Skrá}}, eða dragðu skrána á 3D-skjáinn.
2. Veldu SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- eða DXF-skrá.

   Skráin kemur sem **einn hópur**, valinn, og skjárinn þysjar að honum. Stöðustikan segir hvað kom inn og listar allt sem ekki var hægt að flytja inn, eins og "Ekki flutt inn: 2 áferð".

3. Til að vinna beint með rúmfræði hans, tvísmelltu á hópinn til að breyta inni í honum, eða smelltu á {{ui:Sundurliða}}.

Nokkur atriði sem gott er að vita:

- **Stærð og upp-átt:** Collada-skrár segja hvaða eining er notuð og hvaða ás snýr upp, og ModelCraft breytir þeim. glTF er alltaf í metrum. OBJ-skrár bera enga einingu: ModelCraft les þær sem metra, með Y upp. Ef OBJ kemur 1000 sinnum of stór eða lítil, notaðu [Mælikvarða](topic:rotate-scale) með stuðli eins og `0.001` eða `1000`.
- **DWG og DXF** koma inn sem línur (brúnir) á jörðinni, ekki sem fletir. Ef teikningin segir ekki hvaða einingu hún notar, spyr glugginn sem heitir "Teikningareiningar" hvað ein teikningareining er. Sjá [Móta á lóðarmynd](topic:site-plan).
- **Takmarkanir:** skrár yfir 300 MB eru ekki fluttar inn og skrár yfir 200 MB ekki opnaðar. Skrár með fleiri en 2 milljónir hnita eða fleta eru hafnaðar sem of stórar. OBJ yfir 64 MB er hafnað áður en hún er lesin. Textaskrár (Collada, OBJ, ASCII STL, USD-texti) eru lesnar í bitum, um 4 MB í einu, þannig að engin einn textablokk geymir alla skrána; 16 MB OBJ notaði um 0.5 GB minni meðan hún opnaðist í prófun okkar.

## Útflutningur

1. Smelltu á {{ui:Flytja út}} í hópnum {{ui:Skrá}}.
2. Veldu snið: {{ui:glTF tvíundarskrá (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL fyrir prentun (.stl, millimetrar)}}, {{ui:PLY með litum (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC fyrir BimCraft (.ifc)}}, {{ui:DWG fyrir CAD (.dwg, 2004)}} eða {{ui:DXF fyrir CAD (.dxf, R12)}}.

Vafrinn sækir skrána, nefnda eins og líkanið. Allt líkanið er flutt út, ekki bara valið. glTF-, Collada- og OBJ-skrár eru skrifaðar í bakgrunni, þannig að ModelCraft heldur áfram að virka meðan stórt líkan flyst út; niðurhalið byrjar þegar skráin er tilbúin. Tómt líkan er ekki flutt út: "Líkanið er tómt: teiknaðu eitthvað fyrst." Sjá [Flytja út líkan fyrir önnur forrit](topic:export-model).

## Á netinu og án nettengingar

Allt í ModelCraft keyrir á tölvunni þinni, þannig að líkanagerð, opnun, vistun, innflutningur og útflutningur virka öll án tengingar þegar forritið er hlaðið.

Til að opna ModelCraft án nokkurrar tengingar, vistaðu það til notkunar án nettengingar meðan þú ert á netinu:

1. Smelltu á {{ui:Vista til notkunar án nettengingar}} í forritastikunni efst.
2. Hnappurinn telur upp ("Vistar 40 af 212") meðan hann vistar. ModelCraft vistar sínar eigin skrár (þar á meðal DWG-lesarann sinn), þessa hjálp og 3D-safnið, þannig að það getur tekið dálitla stund.
3. Þegar hnappurinn sýnir {{ui:Tilbúið án nettengingar}}, opnast ModelCraft af sömu vefslóð án tengingar, og DWG-innflutningur virkar líka án nettengingar.

Smelltu á {{ui:Tilbúið án nettengingar}} síðar fyrir {{ui:Vista aftur (sækja nýjustu útgáfu)}} eða {{ui:Fjarlægja afritið án nettengingar}}. Ef hnappurinn sýnir {{ui:Ekki tókst að vista}}, sumar skrár sóttust ekki: athugaðu tenginguna og smelltu á hann til að reyna aftur. {{ui:Notkun án nettengingar er ekki í boði}} þýðir að þessi vafragluggi getur ekki geymt afrit (einkagluggar og sumar stýrðar tölvur). Sjá [Vinna án nettengingar](common:offline).

Skýgeymsla er ekki í boði enn. Hvert líkan er þar sem þú vistar það.

:::offline
Þú ert án nettengingar. Þú getur haldið áfram að móta og vista. Nema forritastikan sýni {{ui:Tilbúið án nettengingar}}, endurhladdu ekki þennan flipa fyrr en þú ert aftur á netinu.
:::

## Skjáborðsforritið

:::desktop
Þú notar ModelCraft í CadCraft Studio, skjáborðsforritinu með öllum átta forritunum. Skrár opnast og vistast þar sem þú velur.
:::

:::web
ModelCraft keyrir í vafranum á Mac, Windows og Linux, og í CadCraft Studio, skjáborðsforritinu með öllum átta forritunum í einni uppsetningu, frá getcadcraft.com/download.
:::
