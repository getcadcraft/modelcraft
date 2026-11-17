---
title: Maak oop, stoor, voer in en voer uit
summary: Die ModelCraft-lêer, wat jy kan invoer en uitstuur, waar lêers gaan, en wat verander vanlyn en tussen blaaiers.
keywords: maak oop, stoor, voer in, voer uit, lêer, 3dm, skp, herstel, outostoor, onlangse, desktop, maak oop in 3D, oordrag, aflaai, modelcraft-lêer, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formate, vanlyn, stoor as
from: 3f09ab72
---

ModelCraft lees en skryf lêers op jou rekenaar. Niks word opgelaai nie: 'n lêer wat jy oopmaak, word binne jou blaaier gelees, en 'n lêer wat jy stoor, is 'n aflaai. Sien [Waar jou lêers gaan](common:your-files).

## Formate in oogopslag

| Formaat | Maak oop | Voer in | Voer uit | Waarvoor dit is |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nee | {{ui:Stoor}} | Jou werklêer. Hou alles. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Stoor as}}, {{ui:Voer uit}} | Weergawe- en toneelsamestellingsprogramme. ModelCraft se eie USD hou alles. Sien [Stoor, maak oop en voer USD uit](topic:usd). |
| SketchUp (`.skp`) | nee | ja | nee | Om modelle van SketchUp in te voer. Hou groepe, komponente, kleure, teksture op vlakke, etikette en sagte rande. Sien [Voer 'n SKP-model in](topic:import-sketchup-files). |
| Collada (`.dae`) | nee | ja | ja | Ruil modelle met ander 3D-modelleerders. Hou groepe, komponente en kleure. |
| OBJ (`.obj`) | nee | ja | ja | Weergawe- en visualiseringsprogramme. |
| glTF (`.glb`, `.gltf`) | nee | ja | slegs `.glb` | Webkykers, speelmotors, AR. |
| STL (`.stl`) | nee | ja | ja | 3D-druk (in millimeter). |
| PLY (`.ply`) | nee | ja | ja | Nette met kleure: skanderings, kleurdruk. |
| FBX (`.fbx`) | nee | ja | nee | Modelle uit animasie- en spelprogramme (FBX 2011 en nuwer). |
| Alembic (`.abc`) | nee | ja | nee | Meetkundekas, by hul eerste monster. |
| STEP (`.step`, `.stp`) | nee | ja | nee | Onderdele van onderdeelmodelleerders en verskaffers, as geslote nette op hul ware grootte. Sien [Lêerformate](topic:formats). |
| `.3dm` | nee | ja | nee | NURBS-modelle: poliopvlakke, nette, kurwes, blokke en lae, as nette, rande, komponente en etikette. Sien [Voer 'n .3dm-model in](topic:import-3dm-files). |
| 3MF (`.3mf`) | nee | nee | ja | 3D-druk, met kleure (in millimeter). Vanaf {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}}: sien [Maak 'n model gereed vir 3D-druk](topic:print-3d). |
| IFC (`.ifc`) | nee | nee | ja | BIM-programme, en BimCraft. |
| DWG (`.dwg`) | nee | ja | ja | 'n Terreinplan of vloerplan om op te modelleer; stuur die model na 'n CAD-program. |
| DXF (`.dxf`) | nee | ja | ja | Dieselfde, vir enige CAD-program. |

[Lêerformate in detail](topic:formats) lys presies wat elke formaat hou en weglaat.

## Die ModelCraft-lêer

'n `.modelcraft`-lêer hou die hele model: meetkunde, groepe, komponente, riglyne, tonele, die eenhede, en die kamera en styl wat jy gebruik het toe jy gestoor het. Dit hou nie die ontdoen-geskiedenis nie.

### Maak 'n model oop

1. Klik op {{ui:Maak oop}} in die {{ui:Lêer}}-groep, of druk {{key:Mod+O}}.
2. As die model op die skerm veranderinge het wat nie gestoor is nie, vra ModelCraft: "Hierdie model het veranderinge wat nie gestoor is nie. Stoor eers 'n kopie?" Kies {{ui:Stoor 'n kopie}}, {{ui:Gooi veranderinge weg}} of {{ui:Kanselleer}}.
3. Kies die `.modelcraft`-lêer.

Die model maak oop in die eenhede waarin dit gestoor is, met die kamera waarmee dit gestoor is. Jy kan ook 'n `.modelcraft`-lêer op die 3D-aansig laat val, of op een klik in die lys van onlangse lêers op die beginkaart (blaaiers wat 'n lêer weer kan oopmaak, en die desktop-app).

:::desktop
In die desktop-app maak 'n dubbelklik op 'n `.modelcraft`-lêer dit oop in ModelCraft, en so ook **Maak oop met** op 'n Collada-, OBJ-, glTF-, DWG- of DXF-lêer (dit word in 'n nuwe model ingevoer).
:::

### Stoor 'n model

Klik op {{ui:Stoor}} of druk {{key:Mod+S}}. Die blaaier laai `<naam>.modelcraft` af, waar die naam die lêer is wat jy oopgemaak het, of "Untitled" vir 'n nuwe model.

:::desktop
In die desktop-app skryf {{ui:Stoor}} die lêer wat jy oopgemaak het op dieselfde plek. 'n Nuwe model vra waar om dit te stoor.
:::

- {{ui:Stoor as}} ({{key:Mod+Shift+S}}) stoor 'n kopie as 'n `.modelcraft`-lêer of as [USD](topic:usd); waar die blaaier dit kan doen, vra dit vir die naam en die plek. Anders hernoem die afgelaaide lêer: die volgende stoor nadat jy die hernoemde lêer oopmaak, gebruik die nuwe naam.
- Elke stoor is 'n nuwe aflaai. Afhangend van die blaaier se instellings gaan dit reguit na jou aflaaie-vouer of vra waar om te stoor. As 'n lêer met daardie naam al daar is, voeg die meeste blaaiers 'n nommer by, soos `Untitled (1).modelcraft`.

:::chromium
Om elke keer die vouer te kies, maak die blaaier se instellings oop, soek na "downloads" en skakel "Vra waar elke lêer gestoor moet word voor aflaai" aan.
:::

:::firefox
Om elke keer die vouer te kies, maak **Instellings** oop, dan **Algemeen**, en kies onder "Downloads" "Vra altyd waar lêers gestoor moet word".
:::

:::safari
Om te verander waar aflaaie gaan, maak **Safari** oop, dan **Instellings**, dan **Algemeen**, en stel "Lêeraflaai-ligging".
:::

### Begin 'n nuwe model

Klik op {{ui:Nuut}}. As daar veranderinge is wat nie gestoor is nie, vra ModelCraft eers. 'n Nuwe model begin leeg, in jou streek se eenheid (voet en duim in die Verenigde State, millimeter elders), sonder tonele.

### As die blaaier sluit voordat jy stoor

ModelCraft hou 'n kopie van ongestoorde werk in jou blaaier 'n paar sekondes na elke verandering. Die kopie word op die agtergrond geskryf, so 'n groot model hou jou nie op nie. As die oortjie of die blaaier sluit voordat jy stoor, vra ModelCraft die volgende keer wanneer jy dit oopmaak: "Herstel jou werk?". Herstel maak die model oop soos dit was, nog nie as 'n lêer gestoor nie: stoor dit om dit te behou. Sien [Herstel jou werk](common:recover).

### Vanaf CadCraft: Maak oop in ModelCraft

In die CadCraft-tekenprogram gee **Aansig**, dan **Meer**, dan **Maak oop in ModelCraft** die oop tekening aan ModelCraft in 'n nuwe oortjie, as 'n DWG. Dit kom aan soos 'n ingevoerde DWG aankom: lyne op die grond, in 'n groep, gereed om op te modelleer. Niks word opgelaai nie; die lêer gaan deur jou blaaier se eie berging.

## Voer in

Invoer voeg 'n lêer by die model wat jy oopgemaak het; dit vervang dit nie.

1. Klik op {{ui:Voer in}} in die {{ui:Lêer}}-groep, of laat die lêer op die 3D-aansig val.
2. Kies 'n SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- of DXF-lêer.

   Die lêer kom aan as **een groep**, gekies, en die aansig zoem in om dit te wys. Die statusbalk sê wat ingekom het, en lys enigiets wat nie ingevoer kon word nie, soos "Nie ingevoer nie: 2 tekstuur".

3. Om direk aan sy meetkunde te werk, dubbelklik op die groep om binne-in te wysig, of klik op {{ui:Ontbind}}.

Dinge om te weet:

- **Grootte en opwaartse rigting:** Collada-lêers sê watter eenheid hulle gebruik en watter as bo is, en ModelCraft skakel hulle om. glTF is altyd in meters. OBJ-lêers dra geen eenheid nie: ModelCraft lees hulle as meters, met Y op. As 'n OBJ 1000 keer te groot of te klein inkom, gebruik [Skaal](topic:rotate-scale) met 'n faktor soos `0.001` of `1000`.
- **DWG en DXF** kom in as lyne (rande) op die grond, nie as vlakke nie. As die tekening sy eenheid nie sê nie, vra 'n dialoog met die titel "Tekeeneenhede" wat een tekeneenheid is. Sien [Model op 'n terreinplan](topic:site-plan).
- **Perke:** lêers van meer as 300 MB word vir invoer geweier, en meer as 200 MB vir oopmaak. Lêers met meer as 2 miljoen hoekpunte of vlakke word as te groot geweier. 'n OBJ van meer as 64 MB word geweier voordat dit gelees word. Tekslêers (Collada, OBJ, ASCII STL, USD-teks) word een stuk op 'n slag gelees, ongeveer 4 MB, so geen enkele blok teks hou 'n hele lêer nie; 'n 16 MB OBJ het ongeveer 0.5 GB geheue gebruik terwyl dit in ons toets oopgemaak is.

## Voer uit

1. Klik op {{ui:Voer uit}} in die {{ui:Lêer}}-groep.
2. Kies 'n formaat: {{ui:glTF binêr (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL vir druk (.stl, millimeter)}}, {{ui:PLY met kleure (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC vir BimCraft (.ifc)}}, {{ui:DWG vir CAD (.dwg, 2004)}} of {{ui:DXF vir CAD (.dxf, R12)}}.

Die blaaier laai die lêer af, genoem soos die model. Die hele model word uitgevoer, nie net die keuse nie. glTF-, Collada- en OBJ-lêers word op die agtergrond geskryf, so ModelCraft hou aan werk terwyl 'n groot model uitvoer; die aflaai begin wanneer die lêer gereed is. 'n Leë model word nie uitgevoer nie: "Die model is leeg: teken eers iets." Sien [Voer 'n model uit vir ander programme](topic:export-model).

## Aanlyn en vanlyn

Alles in ModelCraft loop op jou rekenaar, so modelleer, oopmaak, stoor, invoer en uitvoer werk almal sonder 'n verbinding sodra die program gelaai is.

Om ModelCraft met geen verbinding heeltemal oop te maak nie, stoor dit vir gebruik vanlyn terwyl jy aanlyn is:

1. Klik op {{ui:Stoor vir vanlyn}} in die programbalk bo.
2. Die knoppie tel op ("Stoor 40 van 212") terwyl dit stoor. ModelCraft stoor sy eie lêers (sy DWG-leser onder hulle), hierdie hulp en die 3D-biblioteek, so dit kan 'n rukkie neem.
3. Wanneer die knoppie {{ui:Vanlyn gereed}} sê, open ModelCraft vanaf dieselfde adres sonder 'n verbinding, en DWG-invoer werk ook vanlyn.

Klik later op {{ui:Vanlyn gereed}} vir {{ui:Stoor weer (kry die nuutste weergawe)}} of {{ui:Verwyder die vanlyn-kopie}}. As die knoppie {{ui:Kon nie stoor nie}} sê, het sommige lêers nie afgelaai nie: kontroleer die verbinding en klik dit om weer te probeer. {{ui:Vanlyn nie beskikbaar nie}} beteken hierdie blaaiervenster kan nie 'n kopie hou nie (privaatvensters en sommige bestuurde rekenaars). Sien [Werk vanlyn](common:offline).

Wolkberging is nog nie beskikbaar nie. Elke model lê waar jy dit stoor.

:::offline
Jy is vanlyn. Jy kan aanhou modelleer en stoor. Tensy die programbalk {{ui:Vanlyn gereed}} wys, moenie hierdie oortjie herlaai voordat jy weer aanlyn is nie.
:::

## Desktop-app

:::desktop
Jy gebruik ModelCraft in CadCraft Studio, die desktop-app met al agt die programme. Lêers maak oop en stoor waar jy kies.
:::

:::web
ModelCraft loop in die blaaier op Mac, Windows en Linux, en in CadCraft Studio, die desktop-app met al agt die programme in een installasie, vanaf getcadcraft.com/download.
:::
