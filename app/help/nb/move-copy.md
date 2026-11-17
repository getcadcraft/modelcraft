---
title: Flytt, kopier og lag matriser
summary: Flytt ting ved å klikke eller med en nøyaktig avstand, kopier dem med en modifikatortast, og lag en rad med jevnt fordelte kopier.
keywords: flytt, kopier, dupliser, matrise, rad, avstand, del, forskyv, strekk, kolonner, gjenta, flere kopier
from: 280245fc
---

{{ui:Flytt}} ({{key:M}}) flytter det som er valgt, fra ett punkt til et annet. Hvis du holder en modifikatortast nede, lages en kopi, og etter en kopi kan du skrive hvor mange flere du vil ha.

## Flytt noe

1. Velg det du vil flytte (se [Velg ting](topic:select)). Hvis ingenting er valgt, tar Flytt det du klikker på.
2. Trykk {{key:M}}.
3. Klikk et punkt å flytte fra. Velg noe meningsfullt, for eksempel et hjørne: det punktet havner nøyaktig der du klikker neste gang.
4. Flytt pekeren. Utvalget følger med. Det fester seg til punkter, kanter og de røde, grønne og blå retningene, slik en linje gjør.
5. Klikk der punktet skal havne, eller skriv en avstand og trykk {{key:Enter}}.

   Tipset i statuslinjen går tilbake til «Klikk et punkt å flytte fra …» for neste flytting.

En skrevet avstand går i retningen du peker. Du kan også skrive et nøyaktig forskyvning, `<2m,0,0>` (2 m langs rødt), eller en nøyaktig destinasjon for punktet du valgte, `[0,0,0]` (origo). Se [Skriv inn nøyaktige størrelser](topic:value-box).

For å flytte langs bare én akse, trykk en piltast etter det første klikket: {{key:Right}} låser til rødt, {{key:Left}} til grønt, {{key:Up}} til blått. Trykk samme piltast igjen for å låse opp.

## Å flytte en del av en form strekker den

Geometri som ikke er gruppert, er koblet sammen. Hvis du velger én flate eller noen få kanter og flytter dem, strekkes flatene som er festet til dem, med. Flytter du toppflaten på en boks til siden, lener boksen seg; flytter du én kant på taket, endrer taket helning. Flater som ikke lenger kan være flate, brettes til trekanter.

For å flytte et helt objekt uten å strekke det, velg alt først (tredobbeltklikk på det), eller enda bedre: gjør det til en gruppe eller komponent (se [Grupper og komponenter](topic:groups-components)).

## Kopier noe

1. Velg det du vil kopiere.
2. Trykk {{key:M}}.
3. Hold {{key:Ctrl}} (eller {{key:Alt}}) og klikk punktet å flytte fra. På en Mac gjør {{key:Mod}} eller {{key:Alt}} det samme. Tipset sier «Ctrl flytter i stedet», som betyr at du kopierer.

   Du kan også trykke og slippe {{key:Ctrl}} eller {{key:Alt}} etter det første klikket for å veksle mellom flytting og kopiering.

4. Klikk der kopien skal havne, eller skriv en avstand og trykk {{key:Enter}}.

   Originalen blir stående der den var, og kopien er valgt.

## Kopier, klipp ut, lim inn og dupliser

- {{key:Mod+C}} kopierer utvalget, {{key:Mod+X}} klipper det ut (kopierer og sletter), {{ui:Kopier}} og {{ui:Lim inn}} er også knapper i verktøylinjens gruppe {{ui:Rediger}}, og {{ui:Mer}} ved siden av har klipp ut, lim inn på samme sted og dupliser.
- {{key:Mod+V}} limer inn: en kontur av kopien følger pekeren og fester seg som ethvert verktøy gjør, og et klikk setter den ned med det nederste hjørnet der. {{key:Esc}} avbryter.
- {{key:Mod+Shift+V}} limer inn på samme sted, nøyaktig der kopien kom fra – nyttig for å flytte noe inn i en gruppe du har åpnet.
- {{key:Mod+D}} ({{key:Shift+D}} i Modeler-stilen) dupliserer: en kopi lages og følger pekeren med en gang; klikk for å sette den ned, skriv en avstand, eller trykk {{key:Esc}} for å slippe den. Rett etterpå kan du skrive `3x` for flere kopier på rad.

En limt gruppe blir en ny gruppe. En limt komponent er en ny plassering av samme komponent, så redigering av én endrer dem alle. Kopier kan også limes inn i en annen ModelCraft-fane i denne nettleseren (de kommer inn der som nye definisjoner).

## En rad med kopier

Rett etter en kopi, mens {{ui:Flytt}} fortsatt er verktøyet:

- Skriv `3x` (eller `*3`) og trykk {{key:Enter}} for tre kopier på rad, hver med samme avstand som den første kopien. Du får tre nye kopier i tillegg til originalen.
- Skriv `/3` og trykk {{key:Enter}} for å dele i stedet: tre kopier fordelt jevnt fra originalen til der du satte den første kopien, den siste på det stedet. Bruk dette for å fylle et spenn: sett én kopi i den fjerne enden, og del deretter.

Du kan skrive et annet tall rett etterpå: `5x` erstatter `3x`-raden. Tipset minner deg om det: «Kopiert. Skriv 3x for flere kopier på rad, eller /3 for å dele avstanden.»

### Eksempel: søyler hver 6 meter

1. Lag en søyle og gjør den til en komponent ({{key:G}}), så alle kopiene endrer seg samtidig senere.
2. Trykk {{key:M}}, hold {{key:Ctrl}} og klikk søylens hjørne ved foten.
3. Flytt langs den røde aksen og skriv `6m`, deretter {{key:Enter}}.
4. Skriv `4x` og {{key:Enter}}. Du har fem søyler, 6 m fra hverandre.

## Ting å vite

- Trykk {{key:Esc}} før det andre klikket for å avbryte; alt går tilbake til der det var.
- Flytt fungerer inne i gruppen du redigerer. For å flytte en hel gruppe, lukk den først og velg den fra utsiden.
- Med **Kollisjon** på (nede til høyre, og i [ModelCraft-innstillinger](topic:settings#solids-stop-where-they-touch)) stopper en flytting der utvalget tar i et annet volumlegeme, i stedet for å gå gjennom det. Klikk {{ui:Kollisjon}} for å slå det av for en flytting som skal gå gjennom.
- For å legge en kopi inne i en annen gruppe: kopier den, åpne den andre gruppen, og lim inn ({{key:Mod+Shift+V}} beholder den på samme sted).
