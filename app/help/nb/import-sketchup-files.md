---
title: Hent inn en SKP-modell
summary: Importer en .skp-fil med dens grupper, komponenter, farger, teksturer, etiketter og myke kanter, se hva som kom inn og hva som ikke gjorde det, og fortsett å modellere.
keywords: skp, importer, åpne skp, komponenter, grupper, etiketter, layer, materialer, farger, teksturer, skjult, myke kanter, 3d warehouse, migrer, bytte
from: 325d3c81
---

ModelCraft leser SketchUp-filer (`.skp`) med sin egen leser, i siden. Ingenting lastes opp, og det fungerer frakoblet hver gang ModelCraft gjør det. Filer fra SketchUp 3 og opp til 2026 er testet.

## Importer filen

1. Klikk {{ui:Importer}} i gruppen {{ui:Fil}} (eller slipp `.skp`-filen på 3D-visningen).
2. Velg filen.

   Statuslinjen sier "Leser house.skp…" mens den leser, og deretter hva som kom inn, for eksempel "Importerte house.skp (SketchUp 25.0.575): 1240 flater, 6 komponenter, i en gruppe."

Hele modellen kommer inn som én gruppe oppkalt etter filen, valgt, og visningen zoomer til den. Ett {{key:Mod+Z}} fjerner alt igjen, inkludert etikettene.

:::tip
Eksploder importgruppen ({{ui:Elementinfo}} › {{ui:Eksploder}}) når du vil ha innholdet løst i modellen din i stedet for i én gruppe.
:::

## Hva som kommer inn

- **Flater** med sine hull, og **kanter** som ikke er en del av en flate.
- **Grupper** kommer inn som grupper, og **komponenter** som komponenter: hver kopi av en komponent er en plassering av én definisjon, så redigerer du én kopi, endres de alle, slik som i SketchUp. Navnene følger med.
- **Farger.** En flates eget materiale gir den sin farge. Et materiale malt på en gruppe eller komponent blir den plasseringens maling, slik at flater inni den uten egen farge tar den, slik som i SketchUp. En komponent malt rød på ett sted og blå på et annet forblir én komponent.
- **Teksturer.** En flate malt med et teksturert materiale kommer inn med sin tekstur, lagt på flaten slik den står i filen, og {{ui:Skygget}}-stilen viser den. Bildet beholdes i ModelCraft-filen når du lagrer, og et [gjengitt bilde](topic:render) viser det også. Et teksturert materiale malt på en hel gruppe eller komponent gir den kopien bare materialets farge.
- **Etiketter.** En gruppe eller komponent på en SketchUp-etikett får en ModelCraft-etikett med samme navn, listet i {{ui:Etiketter}}, vist eller skjult slik den var i SketchUp. Har modellen din allerede en etikett med det navnet, brukes den.
- **Skjulte ting kommer inn skjult:** flater, kanter, grupper og komponenter, og flater og kanter på en skjult etikett. Du ser det SketchUp viste, og ingenting går tapt: {{ui:Rediger}} › {{ui:Mer}} › {{ui:Vis alle}} viser dem. Se [Skjul, isoler og vis igjen](topic:hide-isolate).
- **Myke og glatte kanter** forblir myke, slik at buede flater fortsatt ser glatte ut.
- **Størrelser** blir riktige i alle enheter: SketchUp-filer er i tommer innvendig, og ModelCraft konverterer dem.

## Hva som ikke kommer inn

Statuslinjen sier hva som ble utelatt, med antall.

- **Noen teksturer** beholder bare materialets farge: en tekstur som mangler i filen, et bilde i et format nettlesere ikke kan vise (for eksempel en Photoshop-fil), eller en tekstur uten størrelse. Flater med en projisert tekstur kommer inn med teksturen plassert omtrent.
- **Etiketter på løse flater og kanter.** ModelCraft etiketterer bare grupper og komponenter, så en flate eller kant med sin egen etikett kommer inn uten etikett, og statuslinjen teller dem. Gjør slike flater om til en gruppe ({{key:Shift+G}}) og gi gruppen en etikett.
- **Bilder** plassert i modellen, tekst, måltilsettinger, hjelpelinjer, snittplan, scener og stiler.

## Problemer

- "Dette er ikke en SketchUp-fil." eller "Denne SketchUp-filen er skadet: …": filen er kuttet av eller er noe annet med et `.skp`-navn. Lagre den på nytt fra SketchUp, eller be om en ny kopi.
- En fil fra en nyere SketchUp-versjon enn ModelCraft kjenner, avvises, og versjonen den fant blir vist.
- En modell som bare består av bilder, tekst eller måltilsettinger, sier at den ikke har noe å vise.

## Ta modellen tilbake

ModelCraft kan ikke lagre `.skp`-filer. Eksporter Collada ({{ui:Eksporter}} › `.dae`) og importer den i SketchUp: grupper, komponenter og farger går over; teksturer går som materialets farge. Se [Eksporter modellen din](topic:export-model).
