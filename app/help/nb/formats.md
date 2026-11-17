---
title: Filformater i detalj
summary: Nøyaktig hva hvert format ModelCraft åpner, importerer og eksporterer, beholder, konverterer og utelater.
keywords: formater, filtyper, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, enheter, akser, y opp, z opp, millimeter, grenser
from: c47d2d28
---

Modellen i ModelCraft er i meter med Z (blå) opp. Hvert format under konverteres til eller fra den.

## ModelCraft (.modelcraft)

| Hva | Detaljer |
|---|---|
| Åpne | {{ui:Åpne}} ({{key:Mod+O}}) eller slipp den på visningen. Filer som slutter på `.json` godtas også |
| Lagre | {{ui:Lagre}} ({{key:Mod+S}}), som nedlasting |
| Beholder | Alt: geometri, flater og deres farger, materialer og importerte teksturer, lamper, myke kanter, grupper, komponenter, navn, hjelpelinjer, scener, enhetene, og siste kamera og stil |
| Utelater | Angrehistorikken |
| Grense | 200 MB |

En fil lagret av en nyere ModelCraft enn din avvises: «Denne modellen ble lagret med en nyere ModelCraft (filversjon …). Oppdater ModelCraft for å åpne den.» En fil som ikke er en ModelCraft-modell, sier «Dette er ikke en ModelCraft-modell (den er ikke JSON).» eller «Dette er ikke en ModelCraft-fil vi kan åpne: …».

## USD (.usd, .usda, .usdc, .usdz)

Åpne, importer, og {{ui:Lagre som}} eller {{ui:Eksporter}} › {{ui:USD (.usda, .usdc, .usdz)…}}. En USD-fil ModelCraft har lagret, åpnes igjen uten tap; andre programmers USD-filer åpnes som nett, grupper, komponenter, lamper og kameraer. Se [Lagre, åpne og eksporter USD](topic:usd).

## Collada (.dae)

Import og eksport. Det beste formatet for å utveksle modeller med andre 3D-modelleringsprogrammer.

- **Eksport:** Collada 1.4.1, Z opp, meter. Ett geometriobjekt per gruppe eller komponentdefinisjon; komponenter skrives én gang og plasseres med referanse, så de forblir delte. Flater med hull eller konkave omriss deles i trekanter. Farger blir til materialer. Løse kanter skrives som linjer. Navn som ikke er gyldige i formatet, justeres, og det nøyaktige navnet beholdes ved siden av.
- **Import:** trekanter, polygoner (med hull), trekantvifter og -striper blir til flater; linjer blir til kanter. Nodetransformasjoner, filens opp-akse og dens enhet brukes. En node plassert flere steder, eller en geometri brukt av flere noder, kommer inn som en komponent; andre noder kommer inn som grupper. Materialfarger (diffus) blir til flatefarger.
- **Ikke importert:** teksturer, skinn og morphs, kameraer, lys, noen transformasjonstyper (look-at og skew), og referanser til andre filer. Statuslinjen teller dem.
- **Tapt ved eksport:** hvilke kanter som er myke. **Ved import** beholder trianglede flater trekantene sine, med diagonalene myknet slik at flate områder fortsatt leses som én flate.

## OBJ (.obj, .mtl)

Import og eksport.

- **Import:** slipp `.obj`-filen sammen med sin `.mtl` og teksturbilder (eller importer `.obj` alene: den kommer inn uten materialer, og statuslinjen nevner `.mtl`-filen den ønsket). Leses som meter med Y opp. Hvert objekt (`o`, ellers `g`) blir et [nett](topic:meshes), med flatene beholdt slik de er (firkanter forblir firkanter). Teksturkoordinater, normaler og farger per hjørnepunkt beholdes. Et materials fargebilde (`map_Kd`, PNG, JPEG eller WebP) kommer inn som en tekstur, med sine skala- og forskyvningsvalg; ellers dens farge (`Kd`). Kanter der filens normaler bryter, er harde; uten normaler avgjør filens glattegrupper. Andre kart (bump, normal), punkter, linjer og kurver telles og utelates. OBJ har ingen enhet, så en modell laget i millimeter eller tommer kommer inn i feil størrelse: skaler den etter importen (se [Roter og skaler](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksport:** meter, Y opp, verdenskoordinater. Ett objekt per gruppeplassering; komponenter skrives ut fullt ut på hver plassering. Nett beholder sine egne flater, teksturkoordinater og normaler; flater koblet med [myke kanter](topic:soften) får en normal per hjørne. Når modellen har farger, lastes en `.mtl` ned ved siden av `.obj`. Når den har importerte teksturer, lastes `.obj`, `.mtl` og bildene ned sammen som én `.zip`.
- **Grense:** 2 millioner hjørnepunkter eller flater; 64 MB tekst.

## glTF (.glb, .gltf)

Import og eksport, glTF 2.0.

- **Import:** en `.glb`, eller en `.gltf` sammen med sine `.bin`- og teksturfiler: slipp dem på visningen samtidig (eller velg `.glb`). En `.gltf` gitt alene nevner filen den trenger: «Denne .gltf-filen trenger "…": åpne .glb-versjonen, eller slipp .gltf sammen med filene sine.»
  - **Nett** kommer inn som [nett](topic:meshes), ett per nett i filen, med filens normaler, teksturkoordinater og fargene per hjørnepunkt beholdt. Kanter der filens normaler bryter, er harde; resten er myke. Et nett brukt flere steder forblir delt.
  - **Noder** blir til grupper, med navn som i filen. Instansierte nett (EXT_mesh_gpu_instancing) kommer inn som ett nett plassert mange ganger.
  - **Materialer:** en grunnfargetekstur (PNG, JPEG eller WebP) kommer inn som en tekstur, plassert etter filens teksturkoordinater (med eventuell teksturtransformasjon), og beholdes når du lagrer; ellers grunnfargen. Metall, ruhet, normalkart, glass, klarlakk, sheen og de andre materialutvidelsene leses, men beholdes ikke ennå: statuslinjen sier det.
  - **Lys** (KHR_lights_punctual): punkt- og spotlys blir til [lamper](topic:lights). Retningslys telles: solen lyser opp modellen.
  - **Kameraer** blir til [scener](topic:scenes).
  - **Skinnede figurer** kommer inn stående slik filen hviler dem; deres bein og animasjoner, og morph targets, telles og beholdes ikke ennå.
  - **Komprimerte filer** (Draco, meshopt) og kvantisert data leses. Dekoderne lastes bare for en fil som trenger dem.
  - Punkter og linjer telles og utelates (et nett består av flater). KTX2-teksturer utelates; flatene beholder sin farge.
- **Eksport** (`.glb`): glTF 2.0 binær, meter, Y opp. Ett nett per definisjon, så komponenter forblir delte. Nett beholder normalene, teksturkoordinatene og fargene per hjørnepunkt sine; flater koblet med [myke kanter](topic:soften) har glatte normaler. Farger og materialer blir til materialer (et materiale som sin farge); importerte teksturer skrives som teksturer. Lamper som er på, blir til punkt- og spotlys (arealslys finnes ikke i glTF og utelates); scener blir til kameraer. Løse kanter utelates.
- **Grense:** filer opptil 300 MB; omtrent 130 millioner tall i geometri.

## STL (.stl)

Import og eksport.

- **Import:** binær eller ASCII. STL har ingen enhet: den leses som **millimeter**, slik skrivere og ModelCraft's egen eksport skriver den. Hjørner på samme punkt blir sammenkoblet, så en lukket del kommer inn som et lukket [nett](topic:meshes). Farger i filen (VisCAM / SolidView- og Materialise-konvensjonene) maler flatene.
- **Eksport,** for 3D-utskrift: binær STL, **millimeter**, Z opp. Kun trekanter: grupper og løse kanter utelates. Malte flater bærer sin farge i VisCAM / SolidView-konvensjonen, som andre programmer ignorerer hvis de ikke leser den. Eksporter lukkede volumlegemer for en ren utskrift.

## STEP (.step, .stp)

Kun import. STEP er det delmodellerere og leverandører sender: AP203-, AP214- og AP242-filer.

- **Import:** ModelCraft leser filen selv, i siden, og gjør hvert volumlegeme om til et lukket [nett](topic:meshes) av trekanter: flate flater forblir flate, buede flater (sylindere, kjegler, kuler, torusser, B-spline-flater) blir til mange små flate, med kantene inne i én buet flate myke og kantene mellom to flater skarpe. STEP-filer sier hvilken enhet de bruker; modellen kommer inn i sin virkelige størrelse. En sammenstilling kommer inn med hver del der filen plasserer den, hver del i sitt eget nett i en gruppe oppkalt etter filen. Farger, delnavn i sammenstillingstreet og toleranser (PMI) leses ikke.
- **Meldinger:** det som ble hoppet over eller tegnet grovere, legges til statuslinjen («Merknader: …»); en fil uten volumlegeme, en skadet fil eller en over grensene sier hvorfor og legger ikke til noe.
- **Grense:** filer opptil 300 MB; 400 000 flater og 8 millioner trekanter.

## .3dm

Kun import. `.3dm`-filer inneholder NURBS-modeller: polyflater, flater, nett, kurver og blokker.

- **Import:** ModelCraft leser filen selv, i siden. Nett kommer inn som de er; hver flate i en polyflate eller ekstrudering kommer fra gjengivelsesnettet som er lagret med den i filen, ellers tesselerer ModelCraft den (plan, NURBS-flater, rotasjonsflater, ekstruderte kurver og ekstruderinger, trimmet etter kantene, lukkede polyflater som lukkede nett). Kurver blir til kanter, blokker blir til komponenter (blokker i blokker beholdes), layers blir til etiketter (skjult når de er av), og objektets farge (sin egen, layerens eller materialets) maler flatene. Filen sier hvilken enhet den bruker; modellen kommer inn i sin virkelige størrelse. Steg for steg: [Ta inn en .3dm-modell](topic:import-3dm-files).
- **Meldinger:** statuslinjen sier hvor mange flater som kom fra lagrede nett, og hvor mange som ble tesselert, og nevner det som ble utelatt: punkter, punktskyer, tekst, måltilsettinger, skravurer, lys, SubD-objekter, flater på flatetyper som ikke er lest ennå, og koblede blokker.
- **Grense:** filer opptil 300 MB.

## PLY (.ply)

Import og eksport, for nett med farger (skanninger, fargeutskrift i 3D, andre modelleringsprogrammer).

- **Import:** ASCII og binær. Flater blir til et [nett](topic:meshes) med sine normaler, teksturkoordinater og fargene per hjørnepunkt beholdt; hver flate males i den nærmeste av 4,096 farger, slik at du ser fargene nå. PLY har ingen enhet eller aksekonvensjon: koordinatene kommer inn som de er (meter, Z opp). En PLY med bare punkter er en punktsky: åpne den i BimCraft eller CivilCraft.
- **Eksport:** binær PLY med posisjoner, normaler og farger (og teksturkoordinater når modellen har dem), i meter, Z opp.

## FBX (.fbx)

Kun import. FBX 7-filer (fra 2011 og nyere), binære eller ASCII, lest av ModelCraft's egen leser.

- Nett kommer inn som [nett](topic:meshes) med sine normaler, teksturkoordinater (hvert UV-sett) og fargene per hjørnepunkt; et nett som flere objekter bruker, forblir delt. Objekter blir til grupper med sine transformasjoner (pivoter, forskyvninger og forhåndsrotasjoner inkludert).
- Materialer: den diffuse teksturen, innebygd i filen eller et bilde sluppet sammen med `.fbx`, kommer inn som en tekstur (TGA-bilder beholdes som PNG); ellers den diffuse fargen. Andre materialinnstillinger venter på den nye materialmodellen.
- Filens opp-akse og enhet brukes: alt kommer inn med Z opp, i meter.
- Punkt- og spotlys blir til [lamper](topic:lights) (en FBX-intensitet på 100 er ModelCraft's standardlampe, 800 lumen: FBX-intensiteter har ingen enhet). Kameraer blir til [scener](topic:scenes).
- Skinnede figurer kommer inn i hvile; bein og animasjoner telles og beholdes ikke ennå. Retnings- og arealslys, og geometri som ikke er nett (NURBS, kurver), telles og utelates.
- FBX 6 og eldre filer avvises: lagre dem på nytt som FBX 2011 eller nyere.

## Alembic (.abc)

Kun import: geometricaches fra animasjons- og effektprogrammer.

- Nett (polygon- og subdivisjonsnett) kommer inn som [nett](topic:meshes), med sine teksturkoordinater og normaler; transformasjoner blir til grupper. Alembic er Y opp og dreies til Z opp; meter.
- En cache med mange prøver (en animasjon) kommer inn ved sin første prøve; statuslinjen sier hvor mange den har.
- Punkter, kurver, NURBS-flater, kameraer og lys telles og utelates. Filer i det gamle HDF5-oppsettet avvises: lagre dem på nytt som en Ogawa Alembic-fil.

{{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}} sjekker formen først og skriver valget, eller alt som vises. Se [Gjør en modell klar til 3D-utskrift](topic:print-3d).

## 3MF (.3mf)

Kun eksport, fra {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}. 3MF-kjerne: ett nett i **millimeter**, Z opp, med sine farger som materialer. De fleste skjæreprogrammer leser den, og i motsetning til STL sier den hvilken enhet den bruker. Skjulte ting utelates. Se [Gjør en modell klar til 3D-utskrift](topic:print-3d).

## DWG- og DXF-eksport (.dwg, .dxf)

For CAD-programmer. Modellen skrives i sin egen enhet: tommer for modeller i fot og tommer, ellers millimeter, centimeter eller meter (statuslinjen sier hvilken).

- **Flater** blir til 3D-flater (trekanter). Linjer inne i en flate, og myke kanter, skrives som usynlige, slik at flatene ser ut som i ModelCraft.
- **Løse kanter** blir til linjer.
- **Grupper og komponenter** blir til blokker: en komponent skrives én gang og plasseres så ofte den brukes, også dreide og speilede kopier. En gruppe som ble strukket etter at den ble dreid (så den er skrå), skrives i stedet ut der den står.
- **Farger:** DWG beholder hver flates farge nøyaktig; DXF bruker den nærmeste av de 255 standard CAD-fargene.
- **Versjoner:** DWG skrives som AutoCAD 2004 (AC1018), som CAD-programmer fra 2004 og nyere åpner. DXF er R12 (AC1009), versjonen alle CAD-programmer leser; R12 har ikke noe enhetsfelt, så fortell CAD-programmet hvilken enhet det skal bruke.
- **Ikke skrevet:** hjelpelinjer, måltilsettinger, scener og kameraet.

## IFC (.ifc)

Kun eksport, for BimCraft og andre BIM-programmer. IFC4 med et prosjekt, en tomt, en bygning og dens etasjer. Hver gruppe eller komponent på toppnivå blir ett bygningselementproxy med sitt navn; lukkede skrives som faste former (fasetterte breps), åpne som overflatemodeller; hull i flater beholdes. Løs geometri på toppnivå blir ett element kalt «Løs geometri». Ingen typer, egenskaper eller materialer.

**Etasjer:** {{ui:Eksporter}} › {{ui:IFC-etasjer…}} lister dem, hver med et navn og en høyde ({{ui:Legg til etasje}}, eller {{ui:Gjett ut fra modellen}}, som lager én etasje for hver høyde dine grupper på toppnivå står på). Ved eksport går hver gruppe eller komponent på etasjen på eller under sitt laveste punkt, og beholder sin plass. Uten etasjer havner alt på én etasje, «Level 1», på 0. Etasjene lagres i ModelCraft-filen.

## DWG (.dwg) og DXF (.dxf)

Import som linjer på bakken (skravurer og 3D-flater som flater); eksport som beskrevet over. Se [Modeller på en områdeplan](topic:site-plan).

- **Leser:** linjer, polylinjer (med buer), 3D-polylinjer, sirkler, buer og blokkreferanser, inkludert matriser, fra modellrom. Usynlige objekter (som skjulte tilstander i en dynamisk blokk) utelates. Kurver blir til 48 rette stykker per hel omdreining.
- **Leser fra 0.4:** splines og ellipser (som kanter), tekst, flerlinjetekst og attributtverdier (som kanter i en enkeltstrøks skrift), skravurer (flater med hull), 3D-flater og heldekkende fyll (flater), og måltilsettinger (tegnet fra tegningens egne måltilsettingsblokker).
- **Leser fra 0.7:** 3D-volumlegemer, regioner og legemer (deres ACIS-data, DWG og DXF av alle versjoner), hver som sin egen gruppe, lukkede som volumlegemer. Flater på andre overflater enn plan, sylindre, kjegler, kuler, torusser og enkle spline-flater utelates og listes.
- **Leses ikke:** punkter, tabeller, flerpekere, bilder og alt i papirrom.
- **Enheter:** hentes fra tegningen når den sier det. Ellers spør ModelCraft.
- **DXF** må være ASCII. Binær DXF avvises.
- **DWG**-filer fra AutoCAD R13 til gjeldende format (AutoCAD 2018 og nyere; AC1012 til AC1032) leses av ModelCraft's egen DWG-leser, i siden; den er en del av ModelCraft, så den fungerer frakoblet når ModelCraft gjør det. Eldre versjoner (R12 og tidligere) og sterkt skadede filer kan ikke leses; lagre dem som DXF.
- **Grenser:** koordinater mer enn 10 000 km fra origo, eller mer enn 2 millioner linjestykker, avvises.

## SKP-filer

{{ui:Importer}} (eller slipp filen på visningen) leser SketchUp-filer med ModelCraft's egen leser, i siden: ingenting lastes opp, og det fungerer frakoblet når ModelCraft gjør det. Testet med filer fra SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 og 2026; andre versjoner bør også åpnes, men er ikke prøvd ennå. Modellen kommer inn som én gruppe oppkalt etter filen. Ett {{key:Mod+Z}} tar den bort igjen. Steg for steg: [Ta inn en SKP-modell](topic:import-sketchup-files).

- **Beholdt:** flater med hull, grupper (som grupper) og komponenter (som komponenter, delte), deres navn og plasseringer, farger, etiketter på grupper og komponenter, kanter som ikke er en del av en flate, og myke og glatte kanter, slik at buede overflater forblir glatte.
- **Farger:** en flates eget materiale gir sin farge. Et materiale malt på en gruppe eller komponent blir til den plasseringens maling, slik at flater inni uten egen farge tar den, som i SketchUp; en komponent malt i to farger forblir én komponent.
- **Etiketter** på grupper og komponenter blir til ModelCraft-etiketter, vist eller skjult som de var. Etiketter på løse flater og kanter beholdes ikke (ModelCraft merker bare grupper og komponenter); statuslinjen teller dem.
- **Skjulte ting kommer inn skjult** (flater, kanter, grupper, komponenter, og flater og kanter på en skjult etikett), så du ser det SketchUp viste; {{ui:Vis alle}} viser dem.
- **Teksturer:** en flate malt med et teksturert materiale beholder sin tekstur, plassert som i filen, og ModelCraft-filen beholder bildet. En tekstur på en hel gruppe eller komponent, en tekstur som mangler i filen, eller et bilde nettlesere ikke kan vise (som en Photoshop-fil), beholder bare materialets farge.
- **Utelatt, og telt i statuslinjen:** bilder plassert i modellen. Tekst, måltilsettinger, hjelpelinjer, snittplan, scener og stiler leses ikke.
- **Enheter:** SketchUp-filer er i tommer innvendig; ModelCraft konverterer dem, så størrelsene blir riktige i alle enheter.
- **Lagre `.skp`** er ikke bygget ennå. For å ta en modell tilbake til SketchUp, eksporter Collada (`.dae`).

## Ikke støttet

ModelCraft kan ikke åpne 3DS- eller IFC-filer, og kan ikke lagre 3DS-, FBX-, STEP-, `.3dm`- eller SketchUp-filer (`.skp`).
