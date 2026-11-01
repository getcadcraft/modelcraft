---
title: Åpne, lagre, importere og eksportere
summary: ModelCraft-filen, hva du kan ta inn og sende ut, hvor filer havner, og hva som endres frakoblet og mellom nettlesere.
keywords: åpne, lagre, importere, eksportere, fil, 3dm, skp, gjenopprette, automatisk lagring, nylige, skrivebord, åpne i 3d, overlevering, nedlasting, modelcraft-fil, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formater, frakoblet, lagre som
from: 0b4896d1
---

ModelCraft leser og skriver filer på datamaskinen din. Ingenting lastes opp: en fil du åpner leses inne i nettleseren din, og en fil du lagrer er en nedlasting. Se [Hvor filene dine havner](common:your-files).

## Formater på et blikk

| Format | Åpne | Importer | Eksporter | Hva det brukes til |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nei | {{ui:Lagre}} | Arbeidsfilen din. Beholder alt. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Lagre som}}, {{ui:Eksporter}} | Render- og scenesammenstillingsprogrammer. ModelCrafts egen USD beholder alt. Se [Lagre, åpne og eksportere USD](topic:usd). |
| SketchUp (`.skp`) | nei | ja | nei | Å ta inn modeller fra SketchUp. Beholder grupper, komponenter, farger, teksturer på flater, etiketter og myke kanter. Se [Ta inn en SKP-modell](topic:import-sketchup-files). |
| Collada (`.dae`) | nei | ja | ja | Utveksling av modeller med andre 3D-modellerere. Beholder grupper, komponenter og farger. |
| OBJ (`.obj`) | nei | ja | ja | Render- og visualiseringsprogrammer. |
| glTF (`.glb`, `.gltf`) | nei | ja | bare `.glb` | Nettvisere, spillmotorer, AR. |
| STL (`.stl`) | nei | ja | ja | 3D-utskrift (i millimeter). |
| PLY (`.ply`) | nei | ja | ja | Nett med farger: skanninger, fargeutskrift. |
| FBX (`.fbx`) | nei | ja | nei | Modeller fra animasjons- og spillprogrammer (FBX 2011 og nyere). |
| Alembic (`.abc`) | nei | ja | nei | Geometribuffere, ved første sample. |
| STEP (`.step`, `.stp`) | nei | ja | nei | Deler fra delmodellerere og leverandører, som lukkede nett i riktig størrelse. Se [Filformater](topic:formats). |
| `.3dm` | nei | ja | nei | NURBS-modeller: polyoverflater, nett, kurver, blokker og layer, som nett, kanter, komponenter og etiketter. Se [Ta inn en .3dm-modell](topic:import-3dm-files). |
| 3MF (`.3mf`) | nei | nei | ja | 3D-utskrift, med farger (i millimeter). Fra {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}: se [Gjør en modell klar for 3D-utskrift](topic:print-3d). |
| IFC (`.ifc`) | nei | nei | ja | BIM-programmer og BimCraft. |
| DWG (`.dwg`) | nei | ja | ja | En situasjonsplan eller plantegning å modellere på; sende modellen til et CAD-program. |
| DXF (`.dxf`) | nei | ja | ja | Det samme, for et hvilket som helst CAD-program. |

[Filformater i detalj](topic:formats) lister nøyaktig hva hvert format beholder og utelater.

## ModelCraft-filen

En `.modelcraft`-fil beholder hele modellen: geometri, grupper, komponenter, hjelpelinjer, scener, enhetene, og kameraet og stilen du brukte da du lagret. Den beholder ikke angrehistorikken.

### Åpne en modell

1. Klikk {{ui:Åpne}} i gruppen {{ui:Fil}}, eller trykk {{key:Mod+O}}.
2. Hvis modellen på skjermen har ulagrede endringer, spør ModelCraft: «Denne modellen har endringer som ikke er lagret. Lagre en kopi først?» Velg {{ui:Lagre en kopi}}, {{ui:Forkast endringer}} eller {{ui:Avbryt}}.
3. Velg `.modelcraft`-filen.

Modellen åpnes i enhetene den ble lagret i, med kameraet den ble lagret med. Du kan også slippe en `.modelcraft`-fil på 3D-visningen, eller klikke på en i listen over nylige filer på startkortet (nettlesere som kan åpne en fil på nytt, og skrivebordsappen).

:::desktop
I skrivebordsappen åpner dobbeltklikk på en `.modelcraft`-fil den i ModelCraft, og det samme gjør **Åpne med** på en Collada-, OBJ-, glTF-, DWG- eller DXF-fil (den importeres til en ny modell).
:::

### Lagre en modell

Klikk {{ui:Lagre}} eller trykk {{key:Mod+S}}. Nettleseren laster ned `<name>.modelcraft`, der navnet er filen du åpnet, eller «Uten navn» for en ny modell.

:::desktop
I skrivebordsappen skriver {{ui:Lagre}} filen du åpnet på stedet. En ny modell spør hvor den skal lagres.
:::

- {{ui:Lagre som}} ({{key:Mod+Shift+S}}) lagrer en kopi som en `.modelcraft`-fil eller som [USD](topic:usd); der nettleseren kan, spør den om navn og sted. Ellers gir du den nedlastede filen nytt navn: neste lagring etter at du har åpnet den omdøpte filen, bruker det nye navnet.
- Hver lagring er en ny nedlasting. Avhengig av nettleserens innstillinger går den rett til nedlastingsmappen din eller spør hvor den skal lagres. Hvis en fil med det navnet allerede finnes, legger de fleste nettlesere til et tall, for eksempel `Untitled (1).modelcraft`.

:::chromium
For å velge mappe hver gang åpner du nettleserens innstillinger, søker etter «nedlastinger» og slår på «Spør hvor hver fil skal lagres før nedlasting».
:::

:::firefox
For å velge mappe hver gang åpner du **Innstillinger**, deretter **Generelt**, og under «Nedlastinger» velger du «Spør alltid hvor filer skal lagres».
:::

:::safari
For å endre hvor nedlastinger havner åpner du **Safari**, deretter **Innstillinger**, deretter **Generelt**, og angir «Sted for filnedlasting».
:::

### Start en ny modell

Klikk {{ui:Ny}}. Hvis det er ulagrede endringer, spør ModelCraft først. En ny modell starter tom, i enheten for ditt språkområde (fot og tommer i USA, millimeter ellers), uten scener.

### Hvis nettleseren lukkes før du lagrer

ModelCraft beholder en kopi av ulagret arbeid i nettleseren din et par sekunder etter hver endring. Hvis fanen eller nettleseren lukkes før du lagrer, spør ModelCraft neste gang du åpner den: «Gjenopprette arbeidet ditt?». Gjenoppretting åpner modellen slik den var, ennå ikke lagret i en fil: lagre den for å beholde den. Se [Gjenopprett arbeidet ditt](common:recover).

### Fra CadCraft: Åpne i ModelCraft

I tegneappen CadCraft overleverer **Visning**, deretter **Mer**, deretter **Åpne i ModelCraft** den åpne tegningen til ModelCraft i en ny fane, som en DWG. Den kommer inn på samme måte som en importert DWG: linjer på bakken, i en gruppe, klare til å modellere på. Ingenting lastes opp; filen går gjennom nettleserens egen lagring.

## Importer

Import legger en fil til i modellen du har åpen; den erstatter den ikke.

1. Klikk {{ui:Importer}} i gruppen {{ui:Fil}}, eller slipp filen på 3D-visningen.
2. Velg en SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- eller DXF-fil.

   Filen kommer inn som **én gruppe**, valgt, og visningen zoomer for å vise den. Statuslinjen sier hva som kom inn, og lister alt den ikke kunne importere, for eksempel «Ikke importert: 2 teksturer».

3. For å arbeide direkte på geometrien dobbeltklikker du på gruppen for å redigere inni den, eller klikker {{ui:Eksploder}}.

Noe du bør vite:

- **Størrelse og oppretning:** Collada-filer oppgir enheten sin og hvilken akse som er opp, og ModelCraft konverterer dem. glTF er alltid i meter. OBJ-filer har ingen enhet: ModelCraft leser dem som meter, med Y opp. Hvis en OBJ kommer inn 1000 ganger for stor eller for liten, bruk [Skaler](topic:rotate-scale) med en faktor som `0.001` eller `1000`.
- **DWG og DXF** kommer inn som linjer (kanter) på bakken, ikke som flater. Hvis tegningen ikke oppgir enheten sin, spør en dialogboks med tittelen «Tegneenheter» hva én tegneenhet er. Se [Modeller på en situasjonsplan](topic:site-plan).
- **Grenser:** filer over 300 MB avvises for import, og over 200 MB for åpning. Filer med mer enn 2 millioner hjørnepunkter eller flater avvises som for store.

## Eksporter

1. Klikk {{ui:Eksporter}} i gruppen {{ui:Fil}}.
2. Velg et format: {{ui:glTF binær (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for utskrift (.stl, millimeter)}}, {{ui:PLY med farger (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} eller {{ui:DXF for CAD (.dxf, R12)}}.

Nettleseren laster ned filen, oppkalt etter modellen. Hele modellen eksporteres, ikke bare utvalget. En tom modell eksporteres ikke: «Modellen er tom: tegn noe først.» Se [Eksporter en modell til andre programmer](topic:export-model).

## Tilkoblet og frakoblet

Alt i ModelCraft kjører på datamaskinen din, så modellering, åpning, lagring, import og eksport fungerer uten tilkobling så snart appen er lastet.

For å åpne ModelCraft uten noen tilkobling i det hele tatt lagrer du den for frakoblet bruk mens du er tilkoblet:

1. Klikk {{ui:Lagre for frakoblet bruk}} i applinjen øverst.
2. Knappen teller opp («Lagrer 40 av 212») mens den lagrer. ModelCraft lagrer sine egne filer (blant dem DWG-leseren), denne hjelpen og 3D-biblioteket, så det kan ta en stund.
3. Når knappen viser {{ui:Klar frakoblet}}, åpnes ModelCraft fra samme adresse uten tilkobling, og DWG-import fungerer også frakoblet.

Klikk {{ui:Klar frakoblet}} senere for {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}}. Hvis knappen viser {{ui:Kunne ikke lagre}}, ble ikke alle filene lastet ned: sjekk tilkoblingen og klikk på den for å prøve igjen. {{ui:Frakoblet bruk er ikke tilgjengelig}} betyr at dette nettleservinduet ikke kan beholde en kopi (private vinduer og enkelte administrerte datamaskiner). Se [Arbeide frakoblet](common:offline).

Lagring i skyen er ikke tilgjengelig ennå. Hver modell ligger der du lagrer den.

:::offline
Du er frakoblet. Du kan fortsette å modellere og lagre. Med mindre applinjen viser {{ui:Klar frakoblet}}, ikke last denne fanen på nytt før du er tilkoblet igjen.
:::

## Skrivebordsapp

:::desktop
Du bruker ModelCraft i CadCraft Studio, skrivebordsappen med alle åtte appene. Filer åpnes og lagres der du velger.
:::

:::web
ModelCraft kjører i nettleseren på Mac, Windows og Linux, og i CadCraft Studio, skrivebordsappen med alle åtte appene i én installasjon, fra getcadcraft.com/download.
:::
