---
title: Opna, vista, flytja inn og út
summary: ModelCraft-skráin, hvað þú getur flutt inn og sent út, hvar skrár eru vistaðar og hvað breytist án nettengingar og á milli vafra.
keywords: opna, vista, flytja inn, flytja út, skrá, 3dm, skp, endurheimta, sjálfvirk vistun, nýlegar, skjáborð, opna í 3D, afhending, sækja, modelcraft-skrá, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, snið, án nettengingar, vista sem
from: 0b4896d1
---

ModelCraft les og skrifar skrár á tölvuna þína. Ekkert er hlaðið upp: skrá sem þú opnar er lesin innan vafrans þíns, og skrá sem þú vistar er niðurhal. Sjá [Hvar skrárnar þínar fara](common:your-files).

## Snið í hnotskurn

| Snið | Opna | Flytja inn | Flytja út | Til hvers það er |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | já | nei | {{ui:Vista}} | Vinnuskráin þín. Geymir allt. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | já | já | {{ui:Vista sem}}, {{ui:Flytja út}} | Forrit fyrir myndgerð og samsetningu sena. USD-skrá ModelCraft geymir allt. Sjá [Vista, opna og flytja út USD](topic:usd). |
| SketchUp (`.skp`) | nei | já | nei | Til að flytja inn líkön úr SketchUp. Geymir hópa, einingar, liti, áferðir á fletum, merki og mjúkar brúnir. Sjá [Flytja inn SKP-líkan](topic:import-sketchup-files). |
| Collada (`.dae`) | nei | já | já | Til að skiptast á líkönum við önnur þrívíddarmótunarforrit. Geymir hópa, einingar og liti. |
| OBJ (`.obj`) | nei | já | já | Forrit fyrir myndgerð og myndræna framsetningu. |
| glTF (`.glb`, `.gltf`) | nei | já | aðeins `.glb` | Vefskoðarar, leikjavélar, AR. |
| STL (`.stl`) | nei | já | já | Þrívíddarprentun (í millimetrum). |
| PLY (`.ply`) | nei | já | já | Möskvar með litum: skannanir, litaprentun. |
| FBX (`.fbx`) | nei | já | nei | Líkön úr hreyfimynda- og leikjaforritum (FBX 2011 og nýrri). |
| Alembic (`.abc`) | nei | já | nei | Rúmfræðiforðar, við fyrsta sýnishorn. |
| STEP (`.step`, `.stp`) | nei | já | nei | Hlutar úr hlutateikniforritum og frá birgjum, sem lokaðir möskvar í réttri stærð. Sjá [Skráarsnið](topic:formats). |
| `.3dm` | nei | já | nei | NURBS-líkön: fjölyfirborð, möskvar, ferlar, blokkir og lög, sem möskvar, brúnir, einingar og merki. Sjá [Flytja inn .3dm-líkan](topic:import-3dm-files). |
| 3MF (`.3mf`) | nei | nei | já | Þrívíddarprentun, með litum (í millimetrum). Úr {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}: sjá [Undirbúðu líkan fyrir þrívíddarprentun](topic:print-3d). |
| IFC (`.ifc`) | nei | nei | já | BIM-forrit og BimCraft. |
| DWG (`.dwg`) | nei | já | já | Lóðarmynd eða grunnmynd til að móta eftir; senda líkanið í CAD-forrit. |
| DXF (`.dxf`) | nei | já | já | Það sama, fyrir öll CAD-forrit. |

[Skráarsnið í smáatriðum](topic:formats) listar nákvæmlega hvað hvert snið geymir og sleppir.

## ModelCraft-skráin

`.modelcraft`-skrá geymir allt líkanið: rúmfræði, hópa, einingar, leiðbeiningarlínur, senur, mælieiningarnar, og myndavélina og stílinn sem þú notaðir þegar þú vistaðir. Hún geymir ekki afturköllunarferilinn.

### Opna líkan

1. Smelltu á {{ui:Opna}} í {{ui:Skrá}}-flokknum, eða ýttu á {{key:Mod+O}}.
2. Ef líkanið á skjánum hefur óvistaðar breytingar spyr ModelCraft: „Þetta líkan hefur breytingar sem eru ekki vistaðar. Vista afrit fyrst?“ Veldu {{ui:Vista afrit}}, {{ui:Henda breytingum}} eða {{ui:Hætta við}}.
3. Veldu `.modelcraft`-skrána.

Líkanið opnast í þeim mælieiningum sem það var vistað í, með myndavélinni sem það var vistað með. Þú getur líka dregið `.modelcraft`-skrá á þrívíddarsýnina, eða smellt á eina í listanum yfir nýlegar skrár á upphafsspjaldinu (vafrar sem geta opnað skrá aftur, og skjáborðsforritið).

:::desktop
Í skjáborðsforritinu opnar tvísmellur á `.modelcraft`-skrá hana í ModelCraft, og það gerir **Opna með** einnig fyrir Collada-, OBJ-, glTF-, DWG- eða DXF-skrá (hún er flutt inn í nýtt líkan).
:::

### Vista líkan

Smelltu á {{ui:Vista}} eða ýttu á {{key:Mod+S}}. Vafrinn sækir `<name>.modelcraft`, þar sem nafnið er skráin sem þú opnaðir, eða „Untitled“ fyrir nýtt líkan.

:::desktop
Í skjáborðsforritinu skrifar {{ui:Vista}} yfir skrána sem þú opnaðir á sama stað. Nýtt líkan spyr hvar eigi að vista það.
:::

- {{ui:Vista sem}} ({{key:Mod+Shift+S}}) vistar afrit sem `.modelcraft`-skrá eða sem [USD](topic:usd); þar sem vafrinn getur, spyr hann um nafn og stað. Annars endurnefndu sótta skrána: næsta vistun eftir að þú opnar endurnefndu skrána notar nýja nafnið.
- Hver vistun er nýtt niðurhal. Eftir stillingum vafrans fer það beint í niðurhalsmöppuna þína eða spyr hvar eigi að vista. Ef skrá með því nafni er þegar til staðar bætir flestir vafrar við tölu, til dæmis `Untitled (1).modelcraft`.

:::chromium
Til að velja möppu í hvert skipti, opnaðu stillingar vafrans, leitaðu að „niðurhal“ og kveiktu á valkostinum um að spyrja hvar eigi að vista hverja skrá áður en hún er sótt.
:::

:::firefox
Til að velja möppu í hvert skipti, opnaðu **Stillingar**, síðan **Almennt**, og undir „Niðurhal“ veldu „Always ask you where to save files“.
:::

:::safari
Til að breyta því hvert niðurhal fer, opnaðu **Safari**, síðan **Stillingar**, síðan **Almennt**, og stilltu „File download location“.
:::

### Byrja nýtt líkan

Smelltu á {{ui:Nýtt}}. Ef óvistaðar breytingar eru til spyr ModelCraft fyrst. Nýtt líkan byrjar tómt, í mælieiningu staðarins þíns (fet og tommur í Bandaríkjunum, millimetrar annars staðar), án sena.

### Ef vafrinn lokast áður en þú vistar

ModelCraft geymir afrit af óvistaðri vinnu í vafranum þínum nokkrum sekúndum eftir hverja breytingu. Ef flipinn eða vafrinn lokast áður en þú vistar, spyr ModelCraft næst þegar þú opnar það: „Endurheimta vinnuna þína?“ Endurheimt opnar líkanið eins og það var, en ekki enn vistað í skrá: vistaðu það til að halda því. Sjá [Endurheimta vinnuna þína](common:recover).

### Úr CadCraft: Opna í ModelCraft

Í CadCraft teikniforritinu afhendir **Sýn**, síðan **Meira**, síðan **Opna í ModelCraft** opna teikninguna til ModelCraft í nýjum flipa, sem DWG. Hún kemur eins og innflutt DWG: línur á jörðinni, í hópi, tilbúnar til að móta á. Ekkert er hlaðið upp; skráin fer í gegnum eigin geymslu vafrans þíns.

## Innflutningur

Innflutningur bætir skrá við líkanið sem þú hefur opið; hann kemur ekki í staðinn fyrir það.

1. Smelltu á {{ui:Flytja inn}} í {{ui:Skrá}}-flokknum, eða dragðu skrána á þrívíddarsýnina.
2. Veldu SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- eða DXF-skrá.

   Skráin kemur sem **einn hópur**, valinn, og sýnin stækkar til að sýna hana. Stöðustikan segir hvað kom inn og listar allt sem ekki var hægt að flytja inn, til dæmis „Ekki flutt inn: 2 áferðir“.

3. Til að vinna beint í rúmfræði hennar, tvísmelltu á hópinn til að breyta innan hans, eða smelltu á {{ui:Sundurliða}}.

Nokkur atriði sem gott er að vita:

- **Stærð og upp-stefna:** Collada-skrár segja til um mælieiningu sína og hvaða ás snýr upp, og ModelCraft breytir þeim. glTF er alltaf í metrum. OBJ-skrár bera enga mælieiningu: ModelCraft les þær sem metra, með Y upp. Ef OBJ kemur inn 1000 sinnum of stór eða of lítil, notaðu [Mælikvarða](topic:rotate-scale) með stuðli eins og `0.001` eða `1000`.
- **DWG og DXF** koma inn sem línur (brúnir) á jörðinni, ekki sem fletir. Ef teikningin segir ekki til um mælieiningu spyr gluggi sem heitir „Mælieiningar teikningar“ hver ein teikningareining sé. Sjá [Móta á lóðarmynd](topic:site-plan).
- **Takmörk:** skrám yfir 300 MB er hafnað við innflutning, og yfir 200 MB við opnun. Skrám með fleiri en 2 milljónir hornpunkta eða flata er hafnað sem of stórum.

## Útflutningur

1. Smelltu á {{ui:Flytja út}} í {{ui:Skrá}}-flokknum.
2. Veldu snið: {{ui:glTF tvíundarskrá (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL fyrir prentun (.stl, millimetrar)}}, {{ui:PLY með litum (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC fyrir BimCraft (.ifc)}}, {{ui:DWG fyrir CAD (.dwg, 2004)}} eða {{ui:DXF fyrir CAD (.dxf, R12)}}.

Vafrinn sækir skrána, nefnda eins og líkanið. Allt líkanið er flutt út, ekki bara valið. Tómt líkan er ekki flutt út: „Líkanið er tómt: teiknaðu eitthvað fyrst.“ Sjá [Flytja líkan út í önnur forrit](topic:export-model).

## Á netinu og án nettengingar

Allt í ModelCraft keyrir á tölvunni þinni, svo mótun, opnun, vistun, innflutningur og útflutningur virka öll án tengingar þegar forritið er hlaðið.

Til að opna ModelCraft án nokkurrar tengingar, vistaðu það til notkunar án nettengingar meðan þú ert á netinu:

1. Smelltu á {{ui:Vista til notkunar án nettengingar}} í forritastikunni efst.
2. Hnappurinn telur upp („Vistar 40 af 212“) meðan hann vistar. ModelCraft vistar sínar eigin skrár (þar á meðal DWG-lesarann sinn), þessa hjálp og þrívíddarsafnið, svo það getur tekið smá stund.
3. Þegar hnappurinn sýnir {{ui:Tilbúið án nettengingar}}, opnast ModelCraft af sömu vefslóð án tengingar, og innflutningur DWG virkar líka án nettengingar.

Smelltu síðar á {{ui:Tilbúið án nettengingar}} fyrir {{ui:Vista aftur (sækja nýjustu útgáfu)}} eða {{ui:Fjarlægja afritið án nettengingar}}. Ef hnappurinn sýnir {{ui:Ekki tókst að vista}} þá sóttust sumar skrár ekki: athugaðu tenginguna og smelltu á hann til að reyna aftur. {{ui:Notkun án nettengingar er ekki í boði}} þýðir að þessi vafragluggi getur ekki geymt afrit (einkagluggar og sumar stýrðar tölvur). Sjá [Vinna án nettengingar](common:offline).

Skýjavistun er ekki í boði ennþá. Hvert líkan er þar sem þú vistar það.

:::offline
Þú ert án nettengingar. Þú getur haldið áfram að móta og vista. Nema forritastikan sýni {{ui:Tilbúið án nettengingar}}, endurhladdu ekki þessum flipa fyrr en þú ert aftur á netinu.
:::

## Skjáborðsforritið

:::desktop
Þú notar ModelCraft í CadCraft Studio, skjáborðsforritinu með öllum átta forritunum. Skrár opnast og vistast þar sem þú velur.
:::

:::web
ModelCraft keyrir í vafranum á Mac, Windows og Linux, og í CadCraft Studio, skjáborðsforritinu með öllum átta forritunum í einni uppsetningu, af getcadcraft.com/download.
:::
