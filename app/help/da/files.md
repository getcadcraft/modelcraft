---
title: Åbn, gem, importér og eksportér
summary: ModelCraft-filen, hvad du kan hente ind og sende ud, hvor filer havner, og hvad der ændrer sig offline og mellem browsere.
keywords: åbn, gem, importér, eksportér, fil, 3dm, skp, gendan, automatisk gem, seneste, desktop, åbn i 3d, overdragelse, download, modelcraft-fil, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formater, offline, gem som
from: 0b4896d1
---

ModelCraft læser og skriver filer på din computer. Der uploades ikke noget: en fil, du åbner, læses inde i din browser, og en fil, du gemmer, er en download. Se [Hvor dine filer havner](common:your-files).

## Formater i overblik

| Format | Åbn | Importér | Eksportér | Hvad det bruges til |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nej | {{ui:Gem}} | Din arbejdsfil. Beholder alt. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Gem som}}, {{ui:Eksportér}} | Render- og scenesamlingsprogrammer. ModelCrafts egen USD beholder alt. Se [Gem, åbn og eksportér USD](topic:usd). |
| SketchUp (`.skp`) | nej | ja | nej | At hente modeller ind fra SketchUp. Beholder grupper, komponenter, farver, teksturer på flader, tags og blødgjorte kanter. Se [Hent en SKP-model ind](topic:import-sketchup-files). |
| Collada (`.dae`) | nej | ja | ja | Udveksling af modeller med andre 3D-modellører. Beholder grupper, komponenter og farver. |
| OBJ (`.obj`) | nej | ja | ja | Render- og visualiseringsprogrammer. |
| glTF (`.glb`, `.gltf`) | nej | ja | kun `.glb` | Webviewere, spilmotorer, AR. |
| STL (`.stl`) | nej | ja | ja | 3D-print (i millimeter). |
| PLY (`.ply`) | nej | ja | ja | Net med farver: scanninger, farveprint. |
| FBX (`.fbx`) | nej | ja | nej | Modeller fra animations- og spilprogrammer (FBX 2011 og nyere). |
| Alembic (`.abc`) | nej | ja | nej | Geometri-caches, ved deres første sample. |
| STEP (`.step`, `.stp`) | nej | ja | nej | Dele fra delmodellører og leverandører, som lukkede net i deres sande størrelse. Se [Filformater](topic:formats). |
| `.3dm` | nej | ja | nej | NURBS-modeller: polyoverflader, net, kurver, blokke og lag, som net, kanter, komponenter og tags. Se [Hent en .3dm-model ind](topic:import-3dm-files). |
| 3MF (`.3mf`) | nej | nej | ja | 3D-print, med farver (i millimeter). Fra {{ui:Kontrollér til 3D-print (STL eller 3MF)…}}: se [Gør en model klar til 3D-print](topic:print-3d). |
| IFC (`.ifc`) | nej | nej | ja | BIM-programmer og BimCraft. |
| DWG (`.dwg`) | nej | ja | ja | En situationsplan eller etageplan at modellere på; at sende modellen til et CAD-program. |
| DXF (`.dxf`) | nej | ja | ja | Det samme, til ethvert CAD-program. |

[Filformater i detaljer](topic:formats) viser præcis, hvad hvert format beholder, og hvad det udelader.

## ModelCraft-filen

En `.modelcraft`-fil beholder hele modellen: geometri, grupper, komponenter, hjælpelinjer, scener, enhederne samt det kamera og den stil, du brugte, da du gemte. Den beholder ikke fortrydelseshistorikken.

### Åbn en model

1. Klik på {{ui:Åbn}} i gruppen {{ui:Fil}}, eller tryk {{key:Mod+O}}.
2. Hvis modellen på skærmen har ikke-gemte ændringer, spørger ModelCraft: »Denne model har ændringer, der ikke er gemt. Gem først en kopi?« Vælg {{ui:Gem en kopi}}, {{ui:Kassér ændringer}} eller {{ui:Annuller}}.
3. Vælg `.modelcraft`-filen.

Modellen åbnes i de enheder, den blev gemt i, med det kamera, den blev gemt med. Du kan også slippe en `.modelcraft`-fil på 3D-visningen eller klikke på en i listen over seneste filer på startkortet (browsere, der kan genåbne en fil, og desktopappen).

:::desktop
I desktopappen åbner et dobbeltklik på en `.modelcraft`-fil den i ModelCraft, og det gør **Åbn med** på en Collada-, OBJ-, glTF-, DWG- eller DXF-fil også (den importeres i en ny model).
:::

### Gem en model

Klik på {{ui:Gem}} eller tryk {{key:Mod+S}}. Browseren downloader `<name>.modelcraft`, hvor navnet er den fil, du åbnede, eller »Untitled« for en ny model.

:::desktop
I desktopappen skriver {{ui:Gem}} den fil, du åbnede, på stedet. En ny model spørger, hvor den skal gemmes.
:::

- {{ui:Gem som}} ({{key:Mod+Shift+S}}) gemmer en kopi som en `.modelcraft`-fil eller som [USD](topic:usd); hvor browseren kan, spørger den om navn og sted. Ellers omdøber du den downloadede fil: den næste gemning, efter du har åbnet den omdøbte fil, bruger det nye navn.
- Hver gemning er en ny download. Afhængigt af browserens indstillinger går den direkte til din downloadmappe eller spørger, hvor den skal gemmes. Hvis en fil med det navn allerede er der, tilføjer de fleste browsere et tal, som `Untitled (1).modelcraft`.

:::chromium
For at vælge mappen hver gang åbner du browserens indstillinger, søger efter »downloads« og slår »Spørg, hvor hver fil skal gemmes, før download« til.
:::

:::firefox
For at vælge mappen hver gang åbner du **Indstillinger**, derefter **Generelt**, og under »Filer og programmer« vælger du »Spørg altid, hvor filer skal gemmes«.
:::

:::safari
For at ændre, hvor downloads havner, åbner du **Safari**, derefter **Indstillinger**, derefter **Generelt**, og angiver »Placering af filhentninger«.
:::

### Start en ny model

Klik på {{ui:Ny}}. Hvis der er ikke-gemte ændringer, spørger ModelCraft først. En ny model starter tom, i din landestandards enhed (fod og tommer i USA, millimeter andre steder), uden scener.

### Hvis browseren lukker, før du gemmer

ModelCraft beholder en kopi af ikke-gemt arbejde i din browser et par sekunder efter hver ændring. Hvis fanen eller browseren lukker, før du gemmer, spørger ModelCraft næste gang, du åbner det: »Gendan dit arbejde?«. Når du gendanner, åbnes modellen, som den var, endnu ikke gemt i en fil: gem den for at beholde den. Se [Gendan dit arbejde](common:recover).

### Fra CadCraft: Åbn i ModelCraft

I tegneappen CadCraft afleverer **Visning**, derefter **Mere**, derefter **Åbn i ModelCraft** den åbne tegning til ModelCraft i en ny fane, som en DWG. Den ankommer, som en importeret DWG gør: linjer på jorden, i en gruppe, klar til at modellere på. Der uploades ikke noget; filen går gennem din browsers eget lager.

## Importér

At importere tilføjer en fil til den model, du har åben; det erstatter den ikke.

1. Klik på {{ui:Importér}} i gruppen {{ui:Fil}}, eller slip filen på 3D-visningen.
2. Vælg en SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- eller DXF-fil.

   Filen ankommer som **én gruppe**, valgt, og visningen zoomer ind på den. Statuslinjen siger, hvad der kom ind, og viser alt, den ikke kunne importere, som »Ikke importeret: 2 tekstur«.

3. For at arbejde direkte på dens geometri dobbeltklikker du på gruppen for at redigere inde i den, eller klikker på {{ui:Eksplodér}}.

Nogle ting at vide:

- **Størrelse og opretning:** Collada-filer angiver deres enhed og hvilken akse der peger op, og ModelCraft konverterer dem. glTF er altid i meter. OBJ-filer har ingen enhed: ModelCraft læser dem som meter, med Y op. Hvis en OBJ kommer ind 1000 gange for stor eller for lille, så brug [Skalér](topic:rotate-scale) med en faktor som `0.001` eller `1000`.
- **DWG og DXF** kommer ind som linjer (kanter) på jorden, ikke som flader. Hvis tegningen ikke angiver sin enhed, spørger en dialogboks med titlen »Tegneenheder«, hvad én tegneenhed er. Se [Model på en situationsplan](topic:site-plan).
- **Grænser:** filer over 300 MB afvises ved import og over 200 MB ved åbning. Filer med mere end 2 millioner hjørnepunkter eller flader afvises som for store.

## Eksportér

1. Klik på {{ui:Eksportér}} i gruppen {{ui:Fil}}.
2. Vælg et format: {{ui:glTF binær (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL til udskrivning (.stl, millimeter)}}, {{ui:PLY med farver (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC til BimCraft (.ifc)}}, {{ui:DWG til CAD (.dwg, 2004)}} eller {{ui:DXF til CAD (.dxf, R12)}}.

Browseren downloader filen, opkaldt efter modellen. Hele modellen eksporteres, ikke kun valget. En tom model eksporteres ikke: »Modellen er tom: tegn først noget.« Se [Eksportér en model til andre programmer](topic:export-model).

## Online og offline

Alt i ModelCraft kører på din computer, så modellering, åbning, gemning, import og eksport virker alt sammen uden forbindelse, når først appen er indlæst.

For at åbne ModelCraft helt uden forbindelse gemmer du det til offline brug, mens du er online:

1. Klik på {{ui:Gem til offline brug}} i applinjen øverst.
2. Knappen tæller op (»Gemmer 40 af 212«), mens den gemmer. ModelCraft gemmer sine egne filer (blandt dem sin DWG-læser), denne hjælp og 3D-biblioteket, så det kan tage et stykke tid.
3. Når knappen siger {{ui:Klar offline}}, åbner ModelCraft fra samme adresse uden forbindelse, og DWG-import virker også offline.

Klik senere på {{ui:Klar offline}} for {{ui:Gem igen (hent den nyeste version)}} eller {{ui:Fjern offlinekopien}}. Hvis knappen siger {{ui:Kunne ikke gemme}}, blev nogle filer ikke downloadet: kontrollér forbindelsen og klik på den for at prøve igen. {{ui:Offline er ikke tilgængelig}} betyder, at dette browservindue ikke kan beholde en kopi (private vinduer og nogle administrerede computere). Se [Arbejd offline](common:offline).

Skygemning findes ikke endnu. Hver model ligger, hvor du gemmer den.

:::offline
Du er offline. Du kan blive ved med at modellere og gemme. Medmindre applinjen viser {{ui:Klar offline}}, så genindlæs ikke denne fane, før du er online igen.
:::

## Desktopapp

:::desktop
Du bruger ModelCraft i CadCraft Studio, desktopappen med alle otte apps. Filer åbnes og gemmes, hvor du vælger.
:::

:::web
ModelCraft kører i browseren på Mac, Windows og Linux og i CadCraft Studio, desktopappen med alle otte apps i én installation, fra getcadcraft.com/download.
:::
