---
title: Volumverktøy: forening, subtraher, snitt
summary: Slå sammen lukkede grupper og komponenter til én, skjær én ut av en annen, eller behold bare det de har felles.
keywords: volumlegeme, volumlegemer, volumsjekk, ikke volumlegeme, rett opp volumlegeme, hull, løs kant, vrangen ut, forening, slå sammen, kombiner, flett, subtraher, differanse, kutt, hull, snitt, skjæring, boolsk, ytre skall
from: f35df1cc
---

Volumverktøyene kombinerer **volumlegemer**: grupper og komponenter hvis flater lukker et volum, med hver kant som forbinder nøyaktig to flater. {{ui:Elementinfo}} sier {{ui:Volumlegeme}}: {{ui:Ja}} for ett, og viser volumet.

De ligger i menyen {{ui:Volumlegemer}} i gruppen {{ui:Organiser}}.

## Når noe ikke er et volumlegeme

Velg gruppen eller komponenten. Når den ikke er et volumlegeme, sier {{ui:Elementinfo}} hvorfor, for eksempel «Ikke et volumlegeme: 4 kanter grenser til et hull · 1 løs kant»:

| Problem | Hva det betyr |
|---|---|
| Kanter grenser til et hull | En flate mangler |
| Kanter delt av tre flater eller flere | En flate deler innsiden, eller to former berører hverandre langs en kant |
| Flater inne i formen | En vegg igjen inne i volumet |
| Løse kanter | Linjer som ikke avgrenser noen flate |
| Flater snudd vrangen ut | Forsidene vender innover, mot naboene |

{{ui:Vis problemer}} åpner den med disse kantene og flatene valgt, så du kan se dem. {{ui:Rett opp}} reparerer de enkle tilfellene i ett angrertrinn: den fjerner løse kanter og flater inne i formen, snur flater slik at de vender riktig vei, og lukker hull hvis kant ligger flatt. Det den ikke kan reparere trygt (et hull som ikke er flatt, en kant delt av mange flater), overlater den til deg, og sier hva som gjenstår.

## Forening

1. Velg to eller flere volumlegemer (klikk ett, {{key:Ctrl}}+klikk de andre).
2. {{ui:Volumlegemer}} › {{ui:Forening}}.

De blir ett volumlegeme, i én gruppe. Der de overlappet, er flatene inni borte.

## Subtraher

1. {{ui:Volumlegemer}} › {{ui:Subtraher}}.
2. Klikk volumlegemet som skal **tas bort** (skjæreverktøyet).
3. Klikk volumet som skal **kuttes**.

Det som er igjen av det andre volumlegemet, blir; skjæreverktøyet brukes opp. For eksempel, for å lage et hull gjennom en blokk: tegn en stolpe gjennom den, gjør stolpen til en gruppe, og subtraher stolpen fra blokken.

## Snitt

Velg to eller flere volumlegemer, og {{ui:Volumlegemer}} › {{ui:Snitt}}. Bare delen de alle deler, beholdes.

## Ting å vite

- Resultatet er en ny gruppe. Den beholder navnet, fargen og etiketten til det første volumlegemet (for Subtraher: det du kuttet). Farger malt på flatene beholdes ikke.
- Flate sider i resultatet er enkle flater. Runde sider blir de flate facettene de var tegnet med.
- Hvis en gruppe eller komponent ikke er et volumlegeme, sier verktøyet hvilken og endrer ingenting. Se etter en manglende flate eller en løs flate inni den.
- Inne i en åpen gruppe virker verktøyene på gruppene og komponentene i den gruppen.
- Hvert verktøy er ett angrertrinn.
- Første gang du bruker et volumverktøy, lastes motoren (manifold-3d), noe som kan ta et øyeblikk.
