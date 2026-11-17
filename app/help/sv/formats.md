---
title: Filformat i detalj
summary: Exakt vad som behålls, konverteras och utelämnas för varje format som ModelCraft öppnar, importerar och exporterar.
keywords: format, filtyper, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, enheter, axlar, y uppåt, z uppåt, millimeter, gränser
from: c47d2d28
---

ModelCraft-modellen är i meter med Z (blå) uppåt. Varje format nedan konverteras till eller från den.

## ModelCraft (.modelcraft)

| Vad | Detaljer |
|---|---|
| Öppna | {{ui:Öppna}} ({{key:Mod+O}}) eller släpp den på vyn. Filer som slutar på `.json` accepteras också |
| Spara | {{ui:Spara}} ({{key:Mod+S}}), som en nedladdning |
| Behåller | Allt: geometri, ytor och deras färger, material och importerade texturer, lampor, mjuka kanter, grupper, komponenter, namn, hjälplinjer, scener, enheterna och den senaste kameran och stilen |
| Utelämnar | Ångerhistoriken |
| Gräns | 200 MB |

En fil som sparats av en nyare ModelCraft än din vägras: ”Den här modellen sparades av en nyare ModelCraft (filversion …). Uppdatera ModelCraft för att öppna den.” En fil som inte är en ModelCraft-modell säger ”Den här filen är inte en ModelCraft-modell (den är inte JSON).” eller ”Det här är inte en ModelCraft-fil som vi kan öppna: …”.

## USD (.usd, .usda, .usdc, .usdz)

Öppna, importera, och {{ui:Spara som}} eller {{ui:Exportera}} › {{ui:USD (.usda, .usdc, .usdz)…}}. En USD-fil som ModelCraft sparat öppnas igen utan att något går förlorat; andra programs USD-filer öppnas som nät, grupper, komponenter, lampor och kameror. Se [Spara, öppna och exportera USD](topic:usd).

## Collada (.dae)

Import och export. Det bästa formatet för att utbyta modeller med andra 3D-modellerare.

- **Export:** Collada 1.4.1, Z uppåt, meter. En geometri per grupp eller komponentdefinition; komponenter skrivs en gång och placeras med referens, så de förblir delade. Ytor med hål eller konkava konturer delas i trianglar. Färger blir material. Lösa kanter skrivs som linjer. Namn som inte är giltiga i formatet justeras, och det exakta namnet behålls bredvid.
- **Import:** trianglar, polygoner (med hål), triangelvifter och triangelband blir ytor; linjer blir kanter. Nodtransformationer, filens uppåtaxel och dess enhet tillämpas. En nod placerad på flera ställen, eller en geometri som används av flera noder, kommer in som en komponent; andra noder kommer in som grupper. Materialfärger (diffus) blir ytfärger.
- **Importeras inte:** texturer, skinn och morfer, kameror, ljus, vissa transformationstyper (look-at och skew) och referenser till andra filer. Statusfältet räknar dem.
- **Förloras vid export:** vilka kanter som är mjuka. **Vid import** förblir triangulerade ytor trianglar, med diagonalerna mjukade, så att platta områden fortfarande uppfattas som en yta.

## OBJ (.obj, .mtl)

Import och export.

- **Import:** släpp `.obj` tillsammans med sin `.mtl` och texturbilder (eller importera `.obj` ensam: den kommer in utan material, och statusfältet anger vilken `.mtl` den ville ha). Läses som meter med Y uppåt. Varje objekt (`o`, annars `g`) blir ett [nät](topic:meshes), med sina ytor kvar som de är (fyrhörningar förblir fyrhörningar). Texturkoordinater, normaler och färger per hörn behålls. Ett materials färgbild (`map_Kd`, PNG, JPEG eller WebP) kommer in som en textur, med sina skal- och förskjutningsalternativ; annars dess färg (`Kd`). Kanter där filens normaler bryts är hårda; utan normaler avgör filens utjämningsgrupper. Andra kartor (bump, normal), punkter, linjer och kurvor räknas och utelämnas. OBJ har ingen enhet, så en modell gjord i millimeter eller tum kommer in i fel storlek: skala den efter importen (se [Rotera och skala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Export:** meter, Y uppåt, världskoordinater. Ett objekt per grupplacering; komponenter skrivs ut fullt vid varje placering. Nät behåller sina egna ytor, texturkoordinater och normaler; ytor sammanfogade med [mjuka kanter](topic:soften) får en normal per hörn. När modellen har färger laddas en `.mtl` ner bredvid `.obj`. När den har importerade texturer laddas `.obj`, `.mtl` och bilderna ner tillsammans som en `.zip`.
- **Gräns:** 2 miljoner hörn eller ytor; 64 MB text.

## glTF (.glb, .gltf)

Import och export, glTF 2.0.

- **Import:** en `.glb`, eller en `.gltf` tillsammans med dess `.bin` och texturfiler: släpp dem på vyn alla på en gång (eller välj `.glb`). En `.gltf` ensam anger vilken fil den behöver: ”Den här .gltf-filen behöver ”…”: öppna .glb-versionen, eller släpp .gltf tillsammans med dess filer.”
  - **Nät** kommer in som [nät](topic:meshes), ett per nät i filen, med filens normaler, texturkoordinater och hörnfärger kvar på dem. Kanter där filens normaler bryts är hårda; resten är mjuka. Ett nät som används på flera ställen förblir delat.
  - **Noder** blir grupper, namngivna som i filen. Instansierade nät (EXT_mesh_gpu_instancing) kommer in som ett nät placerat många gånger.
  - **Material:** en basfärgstextur (PNG, JPEG eller WebP) kommer in som en textur, placerad efter filens texturkoordinater (med eventuell texturtransformation), och behålls när du sparar; annars basfärgen. Metall, grovhet, normalkartor, glas, klarlack, skimmer och de andra materialtilläggen läses men behålls inte ännu: statusfältet säger det.
  - **Ljus** (KHR_lights_punctual): punkt- och spotljus blir [lampor](topic:lights). Riktade ljus räknas: solen belyser modellen.
  - **Kameror** blir [scener](topic:scenes).
  - **Skinnade figurer** kommer in i den vila som filen anger; deras ben, animeringar och morfmål räknas och behålls inte ännu.
  - **Komprimerade filer** (Draco, meshopt) och kvantiserad data läses. Avkodarna laddas bara för en fil som behöver dem.
  - Punkter och linjer räknas och utelämnas (ett nät innehåller ytor). KTX2-texturer utelämnas; ytorna behåller sin färg.
- **Export** (`.glb`): glTF 2.0 binärt, meter, Y uppåt. Ett nät per definition, så komponenter förblir delade. Nät behåller sina normaler, texturkoordinater och hörnfärger; ytor sammanfogade med [mjuka kanter](topic:soften) bär släta normaler. Färger och material blir material (ett material som sin färg); importerade texturer skrivs som texturer. Lampor som är på blir punkt- och spotljus (arealampor har ingen glTF-motsvarighet och utelämnas); scener blir kameror. Lösa kanter utelämnas.
- **Gräns:** filer upp till 300 MB; cirka 130 miljoner tal för geometri.

## STL (.stl)

Import och export.

- **Import:** binär eller ASCII. STL har ingen enhet: den läses som **millimeter**, på samma sätt som skrivare och ModelCraft:s egen export skriver den. Hörn på samma punkt sammanfogas, så en sluten del kommer in som ett slutet [nät](topic:meshes). Färger i filen (VisCAM / SolidView- och Materialise-konventionerna) målar ytorna.
- **Export,** för 3D-utskrift: binär STL, **millimeter**, Z uppåt. Endast trianglar: grupper och lösa kanter utelämnas. Målade ytor bär sin färg i VisCAM / SolidView-konventionen, som andra program ignorerar om de inte läser den. Exportera slutna solider för en ren utskrift.

## STEP (.step, .stp)

Endast import. STEP är det delmodellerare och leverantörer skickar: AP203-, AP214- och AP242-filer.

- **Import:** ModelCraft läser filen själv, på sidan, och gör varje solid till ett slutet [nät](topic:meshes) av trianglar: plana ytor förblir plana, krökta ytor (cylindrar, koner, sfärer, torus, B-spline-ytor) blir många små plana, med kanterna inuti en krökt yta mjuka och kanterna mellan två ytor skarpa. STEP-filer anger sin enhet; modellen kommer in i sin verkliga storlek. En sammansättning kommer in med varje del där filen placerar den, och varje del som ett eget nät i en grupp med namn efter filen. Färger, delnamn i sammansättningens träd och toleranser (PMI) läses inte.
- **Meddelanden:** det som hoppades över eller ritades grövre läggs till i statusraden ("Noteringar: …"); en fil utan solid, en skadad fil eller en fil över gränserna säger varför och lägger inte till något.
- **Gräns:** filer upp till 300 MB; 400 000 ytor och 8 miljoner trianglar.

## .3dm

Endast import. `.3dm`-filer innehåller NURBS-modeller: polyytor, ytor, nät, kurvor och block.

- **Import:** ModelCraft läser filen själv, på sidan. Nät kommer in som de är; varje yta i en polyyta eller extrudering kommer från renderingsnätet som sparats med den i filen, annars tesselerar ModelCraft den (plan, NURBS-ytor, rotationsytor, extruderade kurvor och extruderingar; trimmade av sina kanter, slutna polyytor som slutna nät). Kurvor blir kanter, block blir komponenter (block i block behålls), lager blir taggar (dolda när de är av), och objektets färg (dess egen, dess lagers eller dess materials) målar dess ytor. Filen anger sin enhet; modellen kommer in i sin verkliga storlek. Steg för steg: [Importera en .3dm-modell](topic:import-3dm-files).
- **Meddelanden:** statusraden anger hur många ytor som kom från sparade nät och hur många som tesselerades, och namnger vad som lämnades ut: punkter, punktmoln, text, mått, skraffering, lampor, SubD-objekt, ytor av typer som ännu inte läses och länkade block.
- **Gräns:** filer upp till 300 MB.

## PLY (.ply)

Import och export, för nät med färger (skanningar, färgad 3D-utskrift, andra modellerare).

- **Import:** ASCII och binär. Ytor blir ett [nät](topic:meshes) med sina normaler, texturkoordinater och hörnfärger kvar; varje yta målas i den närmaste av 4 096 färger, så att du ser färgerna direkt. PLY har ingen enhet eller axelkonvention: koordinaterna kommer in som de är (meter, Z uppåt). En PLY med bara punkter är ett punktmoln: öppna den i BimCraft eller CivilCraft.
- **Export:** binär PLY med positioner, normaler och färger (och texturkoordinater när modellen har dem), i meter, Z uppåt.

## FBX (.fbx)

Endast import. FBX 7-filer (från 2011 och senare), binära eller ASCII, lästa av ModelCraft:s egen läsare.

- Nät kommer in som [nät](topic:meshes) med sina normaler, texturkoordinater (varje UV-uppsättning) och hörnfärger; ett nät som flera objekt använder förblir delat. Objekt blir grupper med sina transformationer (pivåer, förskjutningar och förrotationer inräknade).
- Material: den diffusa texturen, antingen inbäddad i filen eller en bild som släpps tillsammans med `.fbx`, kommer in som en textur (TGA-bilder behålls som PNG); annars den diffusa färgen. Andra materialinställningar väntar på den nya materialmodellen.
- Filens uppåtaxel och enhet tillämpas: allt kommer in Z uppåt, i meter.
- Punkt- och spotljus blir [lampor](topic:lights) (en FBX-intensitet på 100 är ModelCraft:s standardlampa, 800 lumen: FBX-intensiteter har ingen enhet). Kameror blir [scener](topic:scenes).
- Skinnade figurer kommer in i vila; ben och animeringar räknas och behålls inte ännu. Riktade ljus och areaslampor, och geometri som inte är nät (NURBS, kurvor), räknas och utelämnas.
- FBX 6 och äldre filer vägras: spara dem igen som FBX 2011 eller nyare.

## Alembic (.abc)

Endast import: geometricacher från animerings- och effektprogram.

- Nät (polygon- och subdivisionsnät) kommer in som [nät](topic:meshes), med sina texturkoordinater och normaler; transformationer blir grupper. Alembic är Y uppåt och vrids till Z uppåt; meter.
- En cache med många samplingar (en animering) kommer in vid sitt första sampel; statusfältet anger hur många den har.
- Punkter, kurvor, NURBS-ytor, kameror och lampor räknas och utelämnas. Filer i det gamla HDF5-formatet vägras: spara dem igen som en Ogawa Alembic-fil.

{{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}} kontrollerar formen först och skriver sedan markeringen, eller allt som visas. Se [Förbered en modell för 3D-utskrift](topic:print-3d).

## 3MF (.3mf)

Endast export, från {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}. 3MF-kärna: ett nät i **millimeter**, Z uppåt, med sina färger som material. De flesta slicers läser det, och till skillnad från STL anger det sin enhet. Dolda saker utelämnas. Se [Förbered en modell för 3D-utskrift](topic:print-3d).

## DWG- och DXF-export (.dwg, .dxf)

För CAD-program. Modellen skrivs i sin egen enhet: tum för modeller i fot och tum, annars millimeter, centimeter eller meter (statusfältet anger vilken).

- **Ytor** blir 3D-ytor (trianglar). Linjer inuti en yta och mjuka kanter skrivs som osynliga, så att ytorna ser ut som i ModelCraft.
- **Lösa kanter** blir linjer.
- **Grupper och komponenter** blir block: en komponent skrivs en gång och placeras så ofta den används, inklusive vridna och spegelvända kopior. En grupp som sträcktes efter att den vridits (så att den lutar) skrivs ut på plats i stället.
- **Färger:** DWG behåller varje ytas färg exakt; DXF använder den närmaste av de 255 standardfärgerna i CAD.
- **Versioner:** DWG skrivs som AutoCAD 2004 (AC1018), som CAD-program från 2004 och senare öppnar. DXF är R12 (AC1009), den version alla CAD-program läser; R12 har inget enhetsfält, så tala om för CAD-programmet vilken enhet som ska användas.
- **Skrivs inte:** hjälplinjer, mått, scener och kameran.

## IFC (.ifc)

Endast export, för BimCraft och andra BIM-program. IFC4 med ett projekt, en tomt, en byggnad och dess våningar. Varje grupp eller komponent på översta nivån blir ett byggnadselementproxy med sitt namn; slutna skrivs som solida former (facetterade breps), öppna som ytmodeller; hål i ytor behålls. Lös geometri på översta nivån blir ett element som heter "Loose geometry". Inga typer, egenskaper eller material.

**Våningar:** {{ui:Exportera}} › {{ui:IFC-våningsplan…}} listar dem, var och en med ett namn och en höjd ({{ui:Lägg till våningsplan}}, eller {{ui:Gissa utifrån modellen}}, som gör en våning för varje höjd som dina grupper på översta nivån står på). Vid export hamnar varje grupp eller komponent på den våning som ligger vid eller under dess lägsta punkt, och behåller sin plats. Utan våningar hamnar allt på en våning, "Level 1", vid 0. Våningarna sparas i ModelCraft-filen.

## DWG (.dwg) och DXF (.dxf)

Import som linjer på marken (skraffering och 3D-ytor som ytor); export som beskrivet ovan. Se [Modell på en situationsplan](topic:site-plan).

- **Läses:** linjer, polylinjer (med bågar), 3D-polylinjer, cirklar, bågar och blockreferenser inklusive matriser, från modellrummet. Osynliga objekt (till exempel de dolda lägena i ett dynamiskt block) utelämnas. Kurvor blir 48 raka bitar per helt varv.
- **Läses sedan 0.4:** splines och ellipser (som kanter), text, flerradig text och attributvärden (som kanter i en enkellinjig skrift), skraffering (ytor med hål), 3D-ytor och heltäckande fyllningar (ytor), och mått (ritade från ritningens egna måttblock).
- **Läses sedan 0.7:** 3D-solider, regioner och kroppar (deras ACIS-data, DWG och DXF från alla versioner), var och en som en egen grupp, slutna som solider. Ytor på andra ytor än plan, cylindrar, koner, sfärer, torus och enkla spline-ytor utelämnas och listas.
- **Läses inte:** punkter, tabeller, flerhänvisningar, bilder och allt i pappersrummet.
- **Enheter:** tas från ritningen när den anger dem. Annars frågar ModelCraft.
- **DXF** måste vara ASCII. Binär DXF vägras.
- **DWG-filer** från AutoCAD R13 till det aktuella formatet (AutoCAD 2018 och senare; AC1012 till AC1032) läses av ModelCraft:s egen DWG-läsare, på sidan. Den är en del av ModelCraft, så den fungerar offline när ModelCraft gör det. Äldre versioner (R12 och tidigare) och kraftigt skadade filer kan inte läsas; spara dem som DXF.
- **Gränser:** koordinater mer än 10 000 km från origo, eller fler än 2 miljoner linjebitar, vägras.

## SKP-filer

{{ui:Importera}} (eller släpp filen på vyn) läser SketchUp-filer med ModelCraft:s egen läsare, på sidan: inget laddas upp, och det fungerar offline när ModelCraft gör det. Testad med filer från SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 och 2026; andra versioner bör också öppnas men har inte prövats ännu. Modellen kommer in som en grupp med filens namn. Ett {{key:Mod+Z}} tar bort den igen. Steg för steg: [Importera en SKP-modell](topic:import-sketchup-files).

- **Behållet:** ytor med sina hål, grupper (som grupper) och komponenter (som komponenter, delade), deras namn och placeringar, färger, taggar på grupper och komponenter, kanter som inte ingår i en yta, samt mjuka och släta kanter, så att krökta ytor förblir släta.
- **Färger:** en ytas egna material ger dess färg. Ett material målat på en grupp eller komponent blir den placeringens färg, så att ytor inuti utan egen färg tar den, som i SketchUp; en komponent målad i två färger förblir en komponent.
- **Taggar** på grupper och komponenter blir ModelCraft-taggar, visade eller dolda som de var. Taggar på lösa ytor och kanter behålls inte (ModelCraft taggar bara grupper och komponenter); statusfältet räknar dem.
- **Dolda saker kommer in dolda** (ytor, kanter, grupper, komponenter, och ytor och kanter på en dold tagg), så att du ser vad SketchUp visade; {{ui:Visa allt}} visar dem.
- **Texturer:** en yta målad med ett texturerat material behåller sin textur, placerad som i filen, och ModelCraft-filen behåller bilden. En textur på en hel grupp eller komponent, en textur som saknas i filen, eller en bild som webbläsare inte kan visa (till exempel en Photoshop-fil) behåller bara materialets färg.
- **Utelämnas, och räknas i statusfältet:** bilder placerade i modellen. Text, mått, hjälplinjer, snittplan, scener och stilar läses inte.
- **Enheter:** SketchUp-filer är i tum inuti; ModelCraft konverterar dem, så att storlekarna blir rätt i vilken enhet som helst.
- **Spara `.skp`** är inte byggt. För att ta tillbaka en modell till SketchUp, exportera Collada (`.dae`).

## Stöds inte

ModelCraft kan inte öppna 3DS- eller IFC-filer, och kan inte spara 3DS-, FBX-, STEP-, `.3dm`- eller SketchUp-filer (`.skp`).
