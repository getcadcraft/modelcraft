---
title: Filformater i detaljer
summary: Præcis hvad hvert format, ModelCraft åbner, importerer og eksporterer, beholder, konverterer og udelader.
keywords: formater, filtyper, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, enheder, akser, y op, z op, millimeter, grænser
from: c47d2d28
---

Modellen i ModelCraft er i meter med Z (blå) opad. Hvert format nedenfor konverteres til eller fra den.

## ModelCraft (.modelcraft)

| Hvad | Detaljer |
|---|---|
| Åbn | {{ui:Åbn}} ({{key:Mod+O}}) eller slip på visningen. Filer, der slutter på `.json`, accepteres også |
| Gem | {{ui:Gem}} ({{key:Mod+S}}), som en download |
| Beholder | Alt: geometri, flader og deres farver, materialer og importerede teksturer, lamper, bløde kanter, grupper, komponenter, navne, hjælpelinjer, scener, enhederne og det sidste kamera og stil |
| Udelader | Fortryd-historikken |
| Grænse | 200 MB |

En fil gemt af en nyere ModelCraft end din afvises: »Denne model er gemt af en nyere ModelCraft (filversion …). Opdatér ModelCraft for at åbne den.« En fil, der ikke er en ModelCraft-model, siger »Denne fil er ikke en ModelCraft-model (den er ikke JSON).« eller »Dette er ikke en ModelCraft-fil, vi kan åbne: …«.

## USD (.usd, .usda, .usdc, .usdz)

Åbn, importér og {{ui:Gem som}} eller {{ui:Eksportér}} › {{ui:USD (.usda, .usdc, .usdz)…}}. En USD-fil, som ModelCraft har gemt, åbner igen uden noget tabt; andre programmers USD-filer åbnes som net, grupper, komponenter, lamper og kameraer. Se [Gem, åbn og eksportér USD](topic:usd).

## Collada (.dae)

Import og eksport. Det bedste format til at udveksle modeller med andre 3D-modellerere.

- **Eksport:** Collada 1.4.1, Z op, meter. Én geometri pr. gruppe eller komponentdefinition; komponenter skrives én gang og placeres ved reference, så de forbliver delte. Flader med huller eller konkave omrids deles i trekanter. Farver bliver til materialer. Løse kanter skrives som linjer. Navne, der ikke er gyldige i formatet, justeres, og det præcise navn beholdes ved siden af.
- **Import:** trekanter, polygoner (med huller), trekantsvifter og strimler bliver til flader; linjer bliver til kanter. Knudetransformationer, filens op-akse og dens enhed anvendes. En knude placeret flere steder, eller en geometri brugt af flere knuder, kommer ind som en komponent; andre knuder kommer ind som grupper. Materialefarver (diffus) bliver til fladefarver.
- **Ikke importeret:** teksturer, skind og morfer, kameraer, lys, nogle transformationstyper (look-at og skew) og referencer til andre filer. Statuslinjen tæller dem.
- **Tabt ved eksport:** hvilke kanter der er bløde. **Ved import** forbliver trianguleret overflader trekanter, med diagonalerne blødgjort, så flade områder stadig fremstår som én overflade.

## OBJ (.obj, .mtl)

Import og eksport.

- **Import:** slip `.obj`-filen sammen med dens `.mtl` og teksturbilleder (eller importér `.obj` alene: den kommer ind uden materialer, og statuslinjen navngiver den `.mtl`, den ville have). Læses som meter med Y op. Hvert objekt (`o`, ellers `g`) bliver til et [net](topic:meshes), og dets flader beholdes, som de er (firkanter forbliver firkanter). Teksturkoordinater, normaler og farver pr. hjørnepunkt beholdes. Et materiales farvebillede (`map_Kd`, PNG, JPEG eller WebP) kommer ind som en tekstur med dens skala- og forskydningsindstillinger; ellers dens farve (`Kd`). Kanter, hvor filens normaler brydes, er hårde; uden normaler bestemmer filens udjævningsgrupper. Andre kort (bump, normal), punkter, linjer og kurver tælles og udelades. OBJ har ingen enhed, så en model lavet i millimeter eller tommer kommer ind i den forkerte størrelse: skaler den efter import (se [Roter og skalér](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksport:** meter, Y op, verdenskoordinater. Ét objekt pr. gruppeplacering; komponenter skrives ud fuldt ud ved hver placering. Net beholder deres egne flader, teksturkoordinater og normaler; flader forbundet af [bløde kanter](topic:soften) får en normal pr. hjørne. Når modellen har farver, downloades en `.mtl` ved siden af `.obj`. Når den har importerede teksturer, downloades `.obj`, `.mtl` og billederne sammen som én `.zip`.
- **Grænse:** 2 millioner hjørnepunkter eller flader; 64 MB tekst.

## glTF (.glb, .gltf)

Import og eksport, glTF 2.0.

- **Import:** en `.glb`, eller en `.gltf` sammen med dens `.bin`- og teksturfiler: slip dem på visningen alle på én gang (eller vælg `.glb`). En `.gltf` givet alene navngiver den fil, den har brug for: »Denne .gltf-fil kræver »…«: åbn .glb-versionen, eller slip .gltf sammen med dens filer.«
  - **Net** kommer ind som [net](topic:meshes), ét pr. net i filen, med filens normaler, teksturkoordinater og farver pr. hjørnepunkt beholdt. Kanter, hvor filens normaler brydes, er hårde; resten er bløde. Et net brugt flere steder forbliver delt.
  - **Knuder** bliver til grupper, navngivet som i filen. Instancerede net (EXT_mesh_gpu_instancing) kommer ind som ét net placeret mange gange.
  - **Materialer:** en grundfarvetekstur (PNG, JPEG eller WebP) kommer ind som en tekstur, placeret efter filens teksturkoordinater (med eventuel teksturtransformation), og beholdes ved gem; ellers grundfarven. Metal, ruhed, normalkort, glas, clear coat, sheen og de andre materialeudvidelser læses, men beholdes ikke endnu: statuslinjen siger det.
  - **Lys** (KHR_lights_punctual): punkt- og spotlys bliver til [lamper](topic:lights). Retningslys tælles: solen lyser modellen.
  - **Kameraer** bliver til [scener](topic:scenes).
  - **Skinnede figurer** kommer ind stående, som filen lader dem hvile; deres knogler og animationer samt morph-mål tælles og beholdes ikke endnu.
  - **Komprimerede filer** (Draco, meshopt) og kvantiseret data læses. Dekoderne indlæses kun for en fil, der har brug for dem.
  - Punkter og linjer tælles og udelades (et net indeholder flader). KTX2-teksturer udelades; fladerne beholder deres farve.
- **Eksport** (`.glb`): glTF 2.0 binær, meter, Y op. Ét net pr. definition, så komponenter forbliver delte. Net beholder deres normaler, teksturkoordinater og farver pr. hjørnepunkt; flader forbundet af [bløde kanter](topic:soften) bærer glatte normaler. Farver og materialer bliver til materialer (et materiale som sin farve); importerede teksturer skrives som teksturer. Lamper, der er tændt, bliver til punkt- og spotlys (arealslamper har ingen glTF-ækvivalent og udelades); scener bliver til kameraer. Løse kanter udelades.
- **Grænse:** filer op til 300 MB; cirka 130 millioner tal i geometrien.

## STL (.stl)

Import og eksport.

- **Import:** binær eller ASCII. STL har ingen enhed: den læses som **millimeter**, sådan som printere og ModelCraft's egen eksport skriver den. Hjørner på samme punkt forbindes, så en lukket del kommer ind som et lukket [net](topic:meshes). Farver i filen (VisCAM / SolidView- og Materialise-konventionerne) maler fladerne.
- **Eksport,** til 3D-print: binær STL, **millimeter**, Z op. Kun trekanter: grupper og løse kanter udelades. Malede flader bærer deres farve i VisCAM / SolidView-konventionen, som andre programmer ignorerer, hvis de ikke læser den. Eksportér lukkede massive legemer for en ren udskrift.

## STEP (.step, .stp)

Kun import. STEP er det, delmodellerere og leverandører sender: AP203-, AP214- og AP242-filer.

- **Import:** ModelCraft læser filen selv, i siden, og omdanner hvert massivt legeme til et lukket [net](topic:meshes) af trekanter: flade flader forbliver flade, buede flader (cylindre, kegler, kugler, tori, B-spline-overflader) bliver til mange små flade, med kanterne inden i én buet flade bløde og kanterne mellem to flader skarpe. STEP-filer siger deres enhed; modellen kommer ind i sin sande størrelse. En samling kommer ind med hver del der, hvor filen placerer den, hver del sit eget net i en gruppe navngivet efter filen. Farver, delnavne i samlingstræet og tolerancer (PMI) læses ikke.
- **Meddelelser:** det, der blev sprunget over eller tegnet grovere, føjes til statuslinjen (»Noter: …«); en fil uden massivt legeme, en beskadiget fil eller en fil ud over grænserne siger hvorfor og tilføjer intet.
- **Grænse:** filer op til 300 MB; 400 000 flader og 8 millioner trekanter.

## .3dm

Kun import. `.3dm`-filer indeholder NURBS-modeller: polyflader, overflader, net, kurver og blokke.

- **Import:** ModelCraft læser filen selv, i siden. Net kommer ind, som de er; hver flade i en polyflade eller ekstrusion kommer fra renderingsnettet gemt med den i filen, ellers opdeles den i trekanter af ModelCraft (planer, NURBS-overflader, rotationsoverflader, ekstruderede kurver og ekstruderinger; beskåret af deres kanter, lukkede polyflader som lukkede net). Kurver bliver til kanter, blokke bliver til komponenter (blokke i blokke beholdes), lag bliver til tags (skjult, når de er slukket), og objektets farve (dens egen, dens lags eller dens materiales) maler dens flader. Filen siger sin enhed; modellen kommer ind i sin sande størrelse. Trin for trin: [Importér en .3dm-model](topic:import-3dm-files).
- **Meddelelser:** statuslinjen siger, hvor mange flader der kom fra gemte net, og hvor mange der blev opdelt i trekanter, og navngiver det, der blev udeladt: punkter, punktskyer, tekst, mål, skraveringer, lys, SubD-objekter, flader på overfladetyper, der ikke læses endnu, og forbundne blokke.
- **Grænse:** filer op til 300 MB.

## PLY (.ply)

Import og eksport, til net med farver (scanninger, 3D-print i farver, andre modellerere).

- **Import:** ASCII og binær. Flader bliver til et [net](topic:meshes) med deres normaler, teksturkoordinater og farver pr. hjørnepunkt beholdt; hver flade males med den nærmeste af 4,096 farver, så du ser farverne nu. PLY har ingen enhed eller akse-konvention: koordinater kommer ind, som de er (meter, Z op). En PLY med kun punkter er en punktsky: åbn den i BimCraft eller CivilCraft.
- **Eksport:** binær PLY med positioner, normaler og farver (og teksturkoordinater, når modellen har dem), i meter, Z op.

## FBX (.fbx)

Kun import. FBX 7-filer (fra 2011 og frem), binære eller ASCII, læst af ModelCraft's egen læser.

- Net kommer ind som [net](topic:meshes) med deres normaler, teksturkoordinater (alle UV-sæt) og farver pr. hjørnepunkt; et net, som flere objekter bruger, forbliver delt. Objekter bliver til grupper med deres transformationer (pivoter, forskydninger og forudrotationer medregnet).
- Materialer: den diffuse tekstur — indlejret i filen, eller et billede sluppet sammen med `.fbx` — kommer ind som en tekstur (TGA-billeder beholdes som PNG); ellers den diffuse farve. Andre materialeindstillinger venter på den nye materialemodel.
- Filens op-akse og enhed anvendes: alt kommer ind med Z op, i meter.
- Punkt- og spotlys bliver til [lamper](topic:lights) (en FBX-intensitet på 100 er ModelCraft's standardlampe, 800 lumen: FBX-intensiteter har ingen enhed). Kameraer bliver til [scener](topic:scenes).
- Skinnede figurer kommer ind i hvile; knogler og animationer tælles og beholdes ikke endnu. Retnings- og arealslys samt geometri, der ikke er net (NURBS, kurver), tælles og udelades.
- FBX 6 og ældre filer afvises: gem dem igen som FBX 2011 eller nyere.

## Alembic (.abc)

Kun import: geometricaches fra animations- og effektprogrammer.

- Net (polygon- og underopdelingsnet) kommer ind som [net](topic:meshes) med deres teksturkoordinater og normaler; transformationer bliver til grupper. Alembic er Y op og drejes til Z op; meter.
- En cache med mange prøver (en animation) kommer ind ved sin første prøve; statuslinjen siger, hvor mange den har.
- Punkter, kurver, NURBS-overflader, kameraer og lys tælles og udelades. Filer i det gamle HDF5-layout afvises: gem dem igen som en Ogawa Alembic-fil.

{{ui:Kontrollér til 3D-print (STL eller 3MF)…}} kontrollerer formen først og skriver markeringen eller alt, der vises. Se [Gør en model klar til 3D-print](topic:print-3d).

## 3MF (.3mf)

Kun eksport, fra {{ui:Kontrollér til 3D-print (STL eller 3MF)…}}. 3MF-kerne: ét net i **millimeter**, Z op, med dets farver som materialer. De fleste slicere læser det, og i modsætning til STL angiver det sin enhed. Skjulte ting udelades. Se [Gør en model klar til 3D-print](topic:print-3d).

## DWG- og DXF-eksport (.dwg, .dxf)

Til CAD-programmer. Modellen skrives i sin egen enhed: tommer for modeller i fod og tommer, ellers millimeter, centimeter eller meter (statuslinjen navngiver den).

- **Flader** bliver til 3D-flader (trekanter). Linjer inde i en flade og bløde kanter skrives usynlige, så fladerne ser ud, som de gør i ModelCraft.
- **Løse kanter** bliver til linjer.
- **Grupper og komponenter** bliver til blokke: en komponent skrives én gang og placeres, så ofte den bruges, drejede og spejlede kopier medregnet. En gruppe, der blev strakt, efter den var drejet (så den er skrå), skrives i stedet ud på stedet.
- **Farver:** DWG beholder hver flades farve præcist; DXF bruger den nærmeste af de 255 standard CAD-farver.
- **Versioner:** DWG skrives som AutoCAD 2004 (AC1018), som CAD-programmer fra 2004 og frem åbner. DXF er R12 (AC1009), den version alle CAD-programmer læser; R12 har intet enhedsfelt, så fortæl CAD-programmet, hvilken enhed der skal bruges.
- **Ikke skrevet:** hjælpelinjer, mål, scener og kameraet.

## IFC (.ifc)

Kun eksport, til BimCraft og andre BIM-programmer. IFC4 med et projekt, en grund, en bygning og dens etager. Hver gruppe eller komponent på øverste niveau bliver til ét bygningselement-proxy med sit navn; lukkede skrives som massive former (facetterede breps), åbne som overfladebaserede modeller; huller i flader beholdes. Løs geometri på øverste niveau bliver til ét element kaldet »Løs geometri«. Ingen typer, egenskaber eller materialer.

**Etager:** {{ui:Eksportér}} › {{ui:IFC-etager…}} viser dem, hver med et navn og en kote ({{ui:Tilføj etage}}, eller {{ui:Gæt ud fra modellen}}, som laver én etage for hver højde, dine grupper på øverste niveau står på). Ved eksport går hver gruppe eller komponent på den etage, der ligger ved eller under dets laveste punkt, og beholder sin plads. Uden etager går alt på én etage, »Niveau 1«, ved 0. Etagerne gemmes i ModelCraft-filen.

## DWG (.dwg) og DXF (.dxf)

Import som linjer på jorden (skraveringer og 3D-flader som flader); eksport som beskrevet ovenfor. Se [Model på en situationsplan](topic:site-plan).

- **Læst:** linjer, polylinjer (med buer), 3D-polylinjer, cirkler, buer og blokreferencer, inklusive arrays, fra modelrum. Usynlige objekter (såsom de skjulte tilstande i en dynamisk blok) udelades. Kurver bliver til 48 rette stykker pr. hel omgang.
- **Læst siden 0.4:** splines og ellipser (som kanter), tekst, flerlinjet tekst og attributværdier (som kanter i en enkeltstregsskrift), skraveringer (flader med huller), 3D-flader og massive fyld (flader) og mål (tegnet ud fra tegningens egne målblokke).
- **Læst siden 0.7:** 3D-massive legemer, regioner og legemer (deres ACIS-data, DWG og DXF i alle versioner), hver som sin egen gruppe, lukkede som massive legemer. Flader på andre overflader end planer, cylindre, kegler, kugler, tori og enkle spline-overflader udelades og angives.
- **Ikke læst:** punkter, tabeller, flere henvisningslinjer, billeder og alt på papirrum.
- **Enheder:** taget fra tegningen, når den angiver det. Ellers spørger ModelCraft.
- **DXF** skal være ASCII. Binær DXF afvises.
- **DWG**-filer fra AutoCAD R13 op til det aktuelle format (AutoCAD 2018 og nyere; AC1012 til AC1032) læses af ModelCraft's egen DWG-læser, i siden; den er en del af ModelCraft, så den virker offline, når ModelCraft gør. Ældre versioner (R12 og tidligere) og stærkt beskadigede filer kan ikke læses; gem dem som DXF.
- **Grænser:** koordinater mere end 10,000 km fra origo, eller mere end 2 millioner linjestykker, afvises.

## SKP-filer

{{ui:Importér}} (eller slip filen på visningen) læser SketchUp-filer med ModelCraft's egen læser, i siden: intet uploades, og det virker offline, når ModelCraft gør. Testet med filer fra SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 og 2026; andre versioner burde også åbne, men er endnu ikke afprøvet. Modellen kommer ind som én gruppe navngivet efter filen. Ét {{key:Mod+Z}} fjerner den igen. Trin for trin: [Importér en SKP-model](topic:import-sketchup-files).

- **Beholdt:** flader med deres huller, grupper (som grupper) og komponenter (som komponenter, delte), deres navne og placeringer, farver, tags på grupper og komponenter, kanter, der ikke er en del af en flade, og bløde og glatte kanter, så buede overflader forbliver glatte.
- **Farver:** en flades eget materiale giver dens farve. Et materiale malet på en gruppe eller komponent bliver til den placerings maling, så flader indeni uden egen farve tager den, som i SketchUp; en komponent malet i to farver forbliver én komponent.
- **Tags** på grupper og komponenter bliver til ModelCraft-tags, vist eller skjult, som de var. Tags på løse flader og kanter beholdes ikke (ModelCraft tagger kun grupper og komponenter); statuslinjen tæller dem.
- **Skjulte ting kommer ind skjult** (flader, kanter, grupper, komponenter, og flader og kanter på et skjult tag), så du ser, hvad SketchUp viste; {{ui:Vis alle}} viser dem.
- **Teksturer:** en flade malet med et teksturmateriale beholder sin tekstur, placeret som i filen, og ModelCraft-filen beholder billedet. En tekstur på en hel gruppe eller komponent, en tekstur, der mangler i filen, eller et billede, browsere ikke kan vise (såsom en Photoshop-fil), beholder kun materialets farve.
- **Udeladt, og talt i statuslinjen:** billeder placeret i modellen. Tekst, mål, hjælpelinjer, snitplaner, scener og stile læses ikke.
- **Enheder:** SketchUp-filer er i tommer indvendigt; ModelCraft konverterer dem, så størrelserne bliver rigtige i enhver enhed.
- **Gem `.skp`** er ikke lavet endnu. For at tage en model tilbage til SketchUp eksporterer du Collada (`.dae`).

## Ikke understøttet

ModelCraft kan ikke åbne 3DS- eller IFC-filer, og kan ikke gemme 3DS-, FBX-, STEP-, `.3dm`- eller SketchUp-filer (`.skp`).
