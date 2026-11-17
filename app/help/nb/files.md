---
title: Åpne, lagre, importer og eksporter
summary: ModelCraft-filen, hva du kan hente inn og sende ut, hvor filene havner, og hva som endres frakoblet og mellom nettlesere.
keywords: åpne, lagre, importer, eksporter, fil, 3dm, skp, gjenopprett, automatisk lagring, nylige, skrivebord, åpne i 3D, overføring, last ned, modelcraft-fil, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formater, frakoblet, lagre som
from: 3f09ab72
---

ModelCraft leser og skriver filer på datamaskinen din. Ingenting lastes opp: en fil du åpner, leses inne i nettleseren din, og en fil du lagrer, er en nedlasting. Se [Hvor filene dine havner](common:your-files).

## Formater i korte trekk

| Format | {{ui:Åpne}} | {{ui:Importer}} | {{ui:Eksporter}} | Brukes til |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nei | {{ui:Lagre}} | Arbeidsfilen din. Beholder alt. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Lagre som}}, {{ui:Eksporter}} | Gjengivelses- og scenesammenstillingsprogrammer. ModelCraft sin egen USD beholder alt. Se [Lagre, åpne og eksporter USD](topic:usd). |
| SketchUp (`.skp`) | nei | ja | nei | Å hente inn modeller fra SketchUp. Beholder grupper, komponenter, farger, teksturer på flater, merkelapper og myke kanter. Se [Importer en SKP-modell](topic:import-sketchup-files). |
| Collada (`.dae`) | nei | ja | ja | Utveksling av modeller med andre 3D-modellerere. Beholder grupper, komponenter og farger. |
| OBJ (`.obj`) | nei | ja | ja | Gjengivelses- og visualiseringsprogrammer. |
| glTF (`.glb`, `.gltf`) | nei | ja | bare `.glb` | Webvisere, spillmotorer, AR. |
| STL (`.stl`) | nei | ja | ja | 3D-utskrift (i millimeter). |
| PLY (`.ply`) | nei | ja | ja | Nett med farger: skanninger, fargeutskrift. |
| FBX (`.fbx`) | nei | ja | nei | Modeller fra animasjons- og spillprogrammer (FBX 2011 og nyere). |
| Alembic (`.abc`) | nei | ja | nei | Geometrimellomlagre, ved første bilde. |
| STEP (`.step`, `.stp`) | nei | ja | nei | Deler fra delmodellerere og leverandører, som lukkede nett i riktig størrelse. Se [Filformater](topic:formats). |
| `.3dm` | nei | ja | nei | NURBS-modeller: polyflater, nett, kurver, blokker og lag, som nett, kanter, komponenter og merkelapper. Se [Importer en .3dm-modell](topic:import-3dm-files). |
| 3MF (`.3mf`) | nei | nei | ja | 3D-utskrift, med farger (i millimeter). Fra {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}: se [Gjør en modell klar for 3D-utskrift](topic:print-3d). |
| IFC (`.ifc`) | nei | nei | ja | BIM-programmer, og BimCraft. |
| DWG (`.dwg`) | nei | ja | ja | En situasjonsplan eller etasjeplan å modellere på; sende modellen til et CAD-program. |
| DXF (`.dxf`) | nei | ja | ja | Det samme, for ethvert CAD-program. |

[Filformater i detalj](topic:formats) lister nøyaktig hva hvert format beholder og utelater.

## ModelCraft-filen

En `.modelcraft`-fil beholder hele modellen: geometri, grupper, komponenter, veiledere, scener, enhetene, og kameraet og stilen du brukte da du lagret. Den beholder ikke angrehistorikken.

### Åpne en modell

1. Klikk på {{ui:Åpne}} i {{ui:Fil}}-gruppen, eller trykk {{key:Mod+O}}.
2. Hvis modellen på skjermen har ulagrede endringer, spør ModelCraft: «Denne modellen har endringer som ikke er lagret. Lagre en kopi først?» Velg {{ui:Lagre en kopi}}, {{ui:Forkast endringer}} eller {{ui:Avbryt}}.
3. Velg `.modelcraft`-filen.

Modellen åpnes i enhetene den ble lagret med, med kameraet den ble lagret med. Du kan også slippe en `.modelcraft`-fil på 3D-visningen, eller klikke på en i listen over nylige filer på startkortet (nettlesere som kan åpne en fil igjen, og skrivebordsappen).

:::desktop
I skrivebordsappen åpner dobbeltklikk på en `.modelcraft`-fil den i ModelCraft, og det gjør også **Åpne med** på en Collada-, OBJ-, glTF-, DWG- eller DXF-fil (den importeres til en ny modell).
:::

### Lagre en modell

Klikk på {{ui:Lagre}} eller trykk {{key:Mod+S}}. Nettleseren laster ned `<name>.modelcraft`, der navnet er filen du åpnet, eller "Untitled" for en ny modell.

:::desktop
I skrivebordsappen skriver {{ui:Lagre}} over filen du åpnet, på samme sted. En ny modell spør hvor den skal lagres.
:::

- {{ui:Lagre som}} ({{key:Mod+Shift+S}}) lagrer en kopi som `.modelcraft`-fil eller som [USD](topic:usd); der nettleseren kan, spør den etter navn og sted. Ellers gir du den nedlastede filen nytt navn: neste lagring etter at du åpner den omdøpte filen, bruker det nye navnet.
- Hver lagring er en ny nedlasting. Avhengig av nettleserens innstillinger går den rett til nedlastingsmappen eller spør hvor den skal lagres. Hvis en fil med det navnet allerede er der, legger de fleste nettlesere til et nummer, for eksempel `Untitled (1).modelcraft`.

:::chromium
For å velge mappe hver gang, åpne nettleserens innstillinger, søk etter «nedlastinger» og slå på «Spør hvor hver fil skal lagres før nedlasting».
:::

:::firefox
For å velge mappe hver gang, åpne **Innstillinger**, deretter **Generelt**, og under «Nedlastinger» velg «Spør alltid hvor filer skal lagres».
:::

:::safari
For å endre hvor nedlastinger havner, åpne **Safari**, deretter **Innstillinger**, deretter **Generelt**, og still inn «Plassering for nedlastede filer».
:::

### Start en ny modell

Klikk på {{ui:Ny}}. Hvis det finnes ulagrede endringer, spør ModelCraft først. En ny modell starter tom, i språkversjonens enhet (fot og tommer i USA, millimeter ellers), uten scener.

### Hvis nettleseren lukkes før du lagrer

ModelCraft beholder en kopi av ulagret arbeid i nettleseren noen sekunder etter hver endring. Kopien skrives i bakgrunnen, så en stor modell holder deg ikke opp mens den lagres. Hvis fanen eller nettleseren lukkes før du lagrer, spør ModelCraft neste gang du åpner den: «Gjenopprett arbeidet ditt?». Gjenoppretting åpner modellen slik den var, ikke lagret til en fil ennå: lagre den for å beholde den. Se [Gjenopprett arbeidet ditt](common:recover).

### Fra CadCraft: Åpne i ModelCraft

I CadCraft-tegneappen overfører **Vis**, deretter **Mer**, deretter **Åpne i ModelCraft** den åpne tegningen til ModelCraft i en ny fane, som en DWG. Den kommer inn slik en importert DWG gjør: linjer på bakken, i en gruppe, klar til å modellere på. Ingenting lastes opp; filen går via nettleserens egen lagring.

## Importer

Import legger til en fil i modellen du har åpen; den erstatter den ikke.

1. Klikk på {{ui:Importer}} i {{ui:Fil}}-gruppen, eller slipp filen på 3D-visningen.
2. Velg en SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- eller DXF-fil.

   Filen kommer inn som **én gruppe**, valgt, og visningen zoomer til den. Statuslinjen sier hva som kom inn, og lister opp alt den ikke kunne importere, for eksempel «Ikke importert: 2 teksturer».

3. For å jobbe med geometrien direkte, dobbeltklikk på gruppen for å redigere inni den, eller klikk på {{ui:Eksploder}}.

Noe å vite:

- **Størrelse og opp-retning:** Collada-filer sier hvilken enhet og hvilken akse som er opp, og ModelCraft konverterer dem. glTF er alltid i meter. OBJ-filer har ingen enhet: ModelCraft leser dem som meter, med Y opp. Hvis en OBJ kommer inn 1000 ganger for stor eller for liten, bruk [Skaler](topic:rotate-scale) med en faktor som `0.001` eller `1000`.
- **DWG og DXF** kommer inn som linjer (kanter) på bakken, ikke som flater. Hvis tegningen ikke sier sin enhet, spør en dialog med tittelen «Tegningsenheter» hva én tegningsenhet er. Se [Modeller på en situasjonsplan](topic:site-plan).
- **Grenser:** filer over 300 MB avvises ved import, og over 200 MB ved åpning. Filer med mer enn 2 millioner hjørnepunkter eller flater avvises som for store. En OBJ over 64 MB avvises før den leses. Tekstfiler (Collada, OBJ, ASCII-STL, USD-tekst) leses en bit om gangen, omtrent 4 MB, så ingen enkelt tekstblokk holder en hel fil; en 16 MB OBJ brukte omtrent 0.5 GB minne mens den åpnet i vår test.

## Eksporter

1. Klikk på {{ui:Eksporter}} i {{ui:Fil}}-gruppen.
2. Velg et format: {{ui:glTF binær (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for utskrift (.stl, millimeter)}}, {{ui:PLY med farger (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} eller {{ui:DXF for CAD (.dxf, R12)}}.

Nettleseren laster ned filen, navngitt likt modellen. Hele modellen eksporteres, ikke bare utvalget. glTF-, Collada- og OBJ-filer skrives i bakgrunnen, så ModelCraft fortsetter å virke mens en stor modell eksporteres; nedlastingen starter når filen er klar. En tom modell eksporteres ikke: «Modellen er tom: tegn noe først.» Se [Eksporter en modell for andre programmer](topic:export-model).

## Online og frakoblet

Alt i ModelCraft kjører på datamaskinen din, så modellering, åpning, lagring, import og eksport fungerer alle uten forbindelse når appen er lastet.

For å åpne ModelCraft uten noen forbindelse i det hele tatt, lagre den for frakoblet bruk mens du er tilkoblet:

1. Klikk på {{ui:Lagre for frakoblet bruk}} i appfeltet øverst.
2. Knappen teller opp («Lagrer 40 av 212») mens den lagrer. ModelCraft lagrer sine egne filer (blant dem DWG-leseren), denne hjelpen og 3D-biblioteket, så det kan ta en stund.
3. Når knappen viser {{ui:Klar frakoblet}}, åpnes ModelCraft fra samme adresse uten forbindelse, og DWG-import fungerer også frakoblet.

Klikk på {{ui:Klar frakoblet}} senere for {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}}. Hvis knappen viser {{ui:Kunne ikke lagre}}, lastet noen filer ikke ned: sjekk forbindelsen og klikk for å prøve igjen. {{ui:Frakoblet bruk er ikke tilgjengelig}} betyr at dette nettlesevinduet ikke kan beholde en kopi (private vinduer og noen administrerte datamaskiner). Se [Arbeide frakoblet](common:offline).

Skylagring er ikke tilgjengelig ennå. Hver modell ligger der du lagrer den.

:::offline
Du er frakoblet. Du kan fortsette å modellere og lagre. Med mindre appfeltet viser {{ui:Klar frakoblet}}, ikke last inn denne fanen på nytt før du er tilkoblet igjen.
:::

## Skrivebordsappen

:::desktop
Du bruker ModelCraft i CadCraft Studio, skrivebordsappen med alle åtte appene. Filer åpnes og lagres der du velger.
:::

:::web
ModelCraft kjører i nettleseren på Mac, Windows og Linux, og i CadCraft Studio, skrivebordsappen med alle åtte appene i én installasjon, fra getcadcraft.com/download.
:::
