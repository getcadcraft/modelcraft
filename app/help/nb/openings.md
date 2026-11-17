---
title: Lag en åpning gjennom en vegg
summary: Tegn et vindu eller en dør på en vegg med tykkelse og skyv den gjennom, slik at veggen får et ekte hull.
keywords: vindu, dør, åpning, hull, vegg, kutt, skyv gjennom, tomrom, tykkelse, fasade
from: 6b22f32c
---

En åpning trenger en vegg med to sider: en boks, eller en vegg du laget ved å trekke et langt tynt rektangel opp. En enkelt flate som står alene, har ingenting å skyve gjennom til.

## Lag en vegg å øve på

1. Trykk {{key:R}}, klikk et hjørne på bakken og skriv `6m,0.3m` (eller `20',12"`), og trykk {{key:Enter}}.
2. Trykk {{key:P}}, klikk rektangelet og skriv `3m` (eller `10'`), og trykk {{key:Enter}}.

Du har en vegg 300 mm (12 in) tykk.

## Tegn åpningen

1. Bruk {{ui:Orbit}} slik at du ser den lange siden av veggen.
2. Trykk {{key:R}}.
3. Hold pekeren over veggens flate, og klikk der vinduets nedre hjørne skal. Tipset sier «På flate».
4. Skriv vinduets bredde og høyde, for eksempel `1.2m,1.5m` (eller `4',5'`), og trykk {{key:Enter}}.

   Vinduet er en egen flate inne i veggflaten, som nå har et hull rundt seg.

For å plassere det i en nøyaktig avstand fra hjørnet og gulvet, bruk [hjelpelinjer](topic:guides-measure) først: med {{ui:Målebånd}} drar du hjelpelinjer fra veggens nedre og ytre kant, og starter rektangelet der to hjelpelinjer krysser (tipset sier «På hjelpelinje»).

## Skyv den gjennom

1. Trykk {{key:P}}.
2. Klikk vindusflaten og skyv den inn i veggen.
3. Flytt til den stopper ved bakflaten, og klikk. Eller skriv veggtykkelsen, `300` (eller `12`), og trykk {{key:Enter}}.

   ModelCraft stopper ved flaten bak og åpner den: veggen har nå et hull rett gjennom, med fire sideflater (karmer, overstykke og terskel) som kler det. {{ui:Elementinfo}} kaller fortsatt veggen et lukket volumlegeme når den er gruppert.

Hvis du skyver mindre enn hele tykkelsen, får du en fordypning i stedet for et hull.

## En dør

Tegn rektangelet med start på veggflatens nedre kant (tipset sier «På kant» eller «Endepunkt»), slik at åpningen når gulvet. Skyv den gjennom på samme måte.

## Mange vinduer av samme størrelse

1. Lag den første åpningen.
2. For de neste, tegn rektanglene, og dobbeltklikk deretter hver med {{ui:Trykk/trekk}}: et dobbeltklikk gjentar den siste avstanden. Se [Trykk og trekk](topic:push-pull#repeat-the-last-distance).

## Hvis den ikke kuttet gjennom

- Rektangelet må tegnes **på** veggens flate. Hvis det ble tegnet i luften foran den, er det en egen flate: angre og tegn det på nytt, med start på flaten.
- Skyvingen stopper ved den første flaten bak åpningen. Hvis noe annet står i veien inne i veggen (en indre flate igjen fra tidligere tegning), stopper den der; slett kantene på den flaten og prøv igjen.
- Geometri i en egen gruppe blir ikke kuttet. Åpne gruppen som inneholder veggen, og tegn åpningen inne i den.
