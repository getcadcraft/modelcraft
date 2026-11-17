---
title: Åbn, gem, importér og eksportér
summary: ModelCraft-filen, hvad du kan hente ind og sende ud, hvor filerne ender, og hvad der ændrer sig offline og mellem browsere.
keywords: åbn, gem, importér, eksportér, fil, 3dm, skp, gendan, automatisk gem, seneste, desktop, åbn i 3D, overdragelse, download, ModelCraft-fil, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formater, offline, gem som
from: 3f09ab72
---

ModelCraft læser og skriver filer på din computer. Intet uploades: en fil du åbner, læses i din browser, og en fil du gemmer, er en download. Se [Hvor dine filer ender](common:your-files).

## Formater i overblik

| Format | Åbn | Importér | Eksportér | Hvad det er til |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nej | {{ui:Gem}} | Din arbejdsfil. Gemmer alt. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Gem som}}, {{ui:Eksportér}} | Renderings- og scenesamlingsprogrammer. ModelCrafts egen USD gemmer alt. Se [Gem, åbn og eksportér USD](topic:usd). |
| SketchUp (`.skp`) | nej | ja | nej | Til at hente modeller ind fra SketchUp. Bevarer grupper, komponenter, farver, teksturer på flader, tags og bløde kanter. Se [Importér en SKP-model](topic:import-sketchup-files). |
| Collada (`.dae`) | nej | ja | ja | Udveksling af modeller med andre 3D-modelleringsprogrammer. Bevarer grupper, komponenter og farver. |
| OBJ (`.obj`) | nej | ja | ja | Rendering- og visualiseringsprogrammer. |
| glTF (`.glb`, `.gltf`) | nej | ja | kun `.glb` | Webvisere, spilmotorer, AR. |
| STL (`.stl`) | nej | ja | ja | 3D-print (i millimeter). |
| PLY (`.ply`) | nej | ja | ja | Masker med farver: scanninger, farveprint. |
| FBX (`.fbx`) | nej | ja | nej | Modeller fra animations- og spilprogrammer (FBX 2011 og nyere). |
| Alembic (`.abc`) | nej | ja | nej | Geometri-cacher, ved deres første sample. |
| STEP (`.step`, `.stp`) | nej | ja | nej | Dele fra delmodelleringsprogrammer og leverandører, som lukkede masker i deres rigtige størrelse. Se [Filformater](topic:formats). |
| `.3dm` | nej | ja | nej | NURBS-modeller: polyflader, masker, kurver, blokke og lag, som masker, kanter, komponenter og tags. Se [Importér en .3dm-model](topic:import-3dm-files). |
| 3MF (`.3mf`) | nej | nej | ja | 3D-print, med farver (i millimeter). Fra {{ui:Kontrollér til 3D-print (STL eller 3MF)…}}: se [Gør en model klar til 3D-print](topic:print-3d). |
| IFC (`.ifc`) | nej | nej | ja | BIM-programmer og BimCraft. |
| DWG (`.dwg`) | nej | ja | ja | En situationsplan eller etageplan at modellere på; sende modellen til et CAD-program. |
| DXF (`.dxf`) | nej | ja | ja | Det samme, til ethvert CAD-program. |

[Formater i detaljer](topic:formats) viser præcis, hvad hvert format bevarer, og hvad det udelader.

## ModelCraft-filen

En `.modelcraft`-fil gemmer hele modellen: geometri, grupper, komponenter, guides, scener, enhederne samt kameraet og den stil, du brugte, da du gemte. Den gemmer ikke fortrydelseshistorikken.

### Åbn en model

1. Klik på {{ui:Åbn}} i gruppen {{ui:Fil}}, eller tryk {{key:Mod+O}}.
2. Hvis modellen på skærmen har ikke-gemte ændringer, spørger ModelCraft: »Denne model har ændringer, der ikke er gemt. Gem en kopi først?« Vælg {{ui:Gem en kopi}}, {{ui:Kassér ændringer}} eller {{ui:Annuller}}.
3. Vælg `.modelcraft`-filen.

Modellen åbnes i de enheder, den blev gemt i, med det kamera, den blev gemt med. Du kan også slippe en `.modelcraft`-fil på 3D-visningen eller klikke på en fra listen over seneste filer på startkortet (browsere, der kan genåbne en fil, og desktopappen).

:::desktop
I desktopappen åbner et dobbeltklik på en `.modelcraft`-fil den i ModelCraft, og det gør **Åbn med** på en Collada-, OBJ-, glTF-, DWG- eller DXF-fil også (den importeres i en ny model).
:::

### Gem en model

Klik på {{ui:Gem}} eller tryk {{key:Mod+S}}. Browseren downloader `<name>.modelcraft`, hvor navnet er den fil, du åbnede, eller "Untitled" for en ny model.

:::desktop
I desktopappen skriver {{ui:Gem}} filen, du åbnede, direkte på samme sted. En ny model spørger, hvor den skal gemmes.
:::

- {{ui:Gem som}} ({{key:Mod+Shift+S}}) gemmer en kopi som `.modelcraft`-fil eller som [USD](topic:usd); hvor browseren kan, spørger den om navn og sted. Ellers omdøb den downloadede fil: det næste gem, efter du åbner den omdøbte fil, bruger det nye navn.
- Hvert gem er en ny download. Afhængigt af browserens indstillinger går den direkte til din downloadmappe eller spørger, hvor den skal gemmes. Hvis en fil med det navn allerede findes, tilføjer de fleste browsere et nummer, fx `Untitled (1).modelcraft`.

:::chromium
For at vælge mappe hver gang: åbn browserens indstillinger, søg efter "downloads" og slå "Spørg, hvor hver fil skal gemmes, før den downloades" til.
:::

:::firefox
For at vælge mappe hver gang: åbn **Indstillinger**, derefter **Generelt**, og under "Hentede filer" vælg "Spørg altid, hvor filer skal gemmes".
:::

:::safari
For at ændre, hvor downloads går hen: åbn **Safari**, derefter **Indstillinger**, derefter **Generelt**, og sæt "Placering af filhentning".
:::

### Start en ny model

Klik på {{ui:Ny}}. Hvis der er ikke-gemte ændringer, spørger ModelCraft først. En ny model starter tom, i enheden for dit område (fod og tommer i USA, millimeter ellers), uden scener.

### Hvis browseren lukker, før du gemmer

ModelCraft gemmer en kopi af ikke-gemt arbejde i din browser et par sekunder efter hver ændring. Kopien skrives i baggrunden, så en stor model ikke holder dig op, mens den gemmes. Hvis fanen eller browseren lukkes, før du gemmer, spørger ModelCraft næste gang, du åbner det: »Gendan dit arbejde?« Gendannelse åbner modellen, som den var, endnu ikke gemt i en fil: gem den for at beholde den. Se [Gendan dit arbejde](common:recover).

### Fra CadCraft: Åbn i ModelCraft

I tegneprogrammet CadCraft overdrager **Vis**, derefter **Mere**, derefter **Åbn i ModelCraft** den åbne tegning til ModelCraft i en ny fane, som en DWG. Den kommer ind, som en importeret DWG gør: linjer på jorden, i en gruppe, klar til at modellere på. Intet uploades; filen går igennem din browsers egen lagring.

## Importér

Import tilføjer en fil til den model, du har åben; den erstatter den ikke.

1. Klik på {{ui:Importér}} i gruppen {{ui:Fil}}, eller slip filen på 3D-visningen.
2. Vælg en SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- eller DXF-fil.

   Filen kommer ind som **én gruppe**, markeret, og visningen zoomer til, så den vises. Statuslinjen siger, hvad der kom ind, og lister alt, der ikke kunne importeres, fx »Ikke importeret: 2 teksturer«.

3. For at arbejde på dens geometri direkte, dobbeltklik på gruppen for at redigere inde i den, eller klik på {{ui:Eksplodér}}.

Nogle ting at vide:

- **Størrelse og opadretning:** Collada-filer siger, hvilken enhed de bruger, og hvilken akse der er op, og ModelCraft konverterer dem. glTF er altid i meter. OBJ-filer bærer ingen enhed: ModelCraft læser dem som meter, med Y opad. Hvis en OBJ kommer ind 1000 gange for stor eller for lille, brug [Skalér](topic:rotate-scale) med en faktor som `0.001` eller `1000`.
- **DWG og DXF** kommer ind som linjer (kanter) på jorden, ikke som flader. Hvis tegningen ikke angiver sin enhed, spørger en dialog med titlen »Tegningsenheder«, hvad én tegningsenhed er. Se [Model på en situationsplan](topic:site-plan).
- **Grænser:** filer over 300 MB afvises ved import og over 200 MB ved åbning. Filer med mere end 2 millioner hjørnepunkter eller flader afvises som for store. En OBJ over 64 MB afvises, før den læses. Tekstfiler (Collada, OBJ, ASCII STL, USD-tekst) læses i stykker på ca. 4 MB, så intet enkelt tekstblok holder en hel fil; en 16 MB OBJ brugte ca. 0.5 GB hukommelse, mens den åbnede i vores test.

## Eksportér

1. Klik på {{ui:Eksportér}} i gruppen {{ui:Fil}}.
2. Vælg et format: {{ui:glTF binær (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL til udskrivning (.stl, millimeter)}}, {{ui:PLY med farver (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC til BimCraft (.ifc)}}, {{ui:DWG til CAD (.dwg, 2004)}} eller {{ui:DXF til CAD (.dxf, R12)}}.

Browseren downloader filen, navngivet efter modellen. Hele modellen eksporteres, ikke kun markeringen. glTF-, Collada- og OBJ-filer skrives i baggrunden, så ModelCraft kan fortsætte med at virke, mens en stor model eksporteres; downloaden starter, når filen er klar. En tom model eksporteres ikke: »Modellen er tom: tegn noget først.« Se [Eksportér en model til andre programmer](topic:export-model).

## Online og offline

Alt i ModelCraft kører på din computer, så modellering, åbning, gemning, import og eksport virker alle uden forbindelse, når appen er indlæst.

For at åbne ModelCraft uden nogen forbindelse overhovedet, gem den til offline brug, mens du er online:

1. Klik på {{ui:Gem til offline brug}} i appbaren øverst.
2. Knappen tæller op (»Gemmer 40 af 212«), mens den gemmer. ModelCraft gemmer sine egne filer (heriblandt sin DWG-læser), denne hjælp og 3D-biblioteket, så det kan tage et stykke tid.
3. Når knappen viser {{ui:Klar offline}}, åbner ModelCraft fra samme adresse uden forbindelse, og DWG-import virker også offline.

Klik på {{ui:Klar offline}} senere for {{ui:Gem igen (hent den nyeste version)}} eller {{ui:Fjern offlinekopien}}. Hvis knappen viser {{ui:Kunne ikke gemme}}, blev nogle filer ikke downloadet: tjek forbindelsen og klik for at prøve igen. {{ui:Offline er ikke tilgængelig}} betyder, at dette browservindue ikke kan gemme en kopi (private vinduer og nogle administrerede computere). Se [Arbejd offline](common:offline).

Gem i skyen er ikke tilgængelig endnu. Hver model ligger, hvor du gemmer den.

:::offline
Du er offline. Du kan fortsætte med at modellere og gemme. Medmindre appbaren viser {{ui:Klar offline}}, skal du ikke genindlæse denne fane, før du er online igen.
:::

## Desktopapp

:::desktop
Du bruger ModelCraft i CadCraft Studio, desktopappen med alle otte apps. Filer åbnes og gemmes, hvor du vælger.
:::

:::web
ModelCraft kører i browseren på Mac, Windows og Linux, og i CadCraft Studio, desktopappen med alle otte apps i én installation, fra getcadcraft.com/download.
:::
