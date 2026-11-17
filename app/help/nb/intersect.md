---
title: Skjær flater
summary: Tegn linjene der flater skjærer hverandre, slik at du kan skyve, slette eller male delene.
keywords: skjær, skjær flater, skjær mot modell, skjær mot utvalg, kutt, åpning, hull, sammenføy, linjer der flater krysser, boolsk
from: 6bc58526
---

Når én form går gjennom en annen, tegner ikke ModelCraft linjen der flatene deres møtes: de bare overlapper. **Skjær** tegner disse linjene, som kanter, slik at flatene deles der. Deretter kan du trykke/trekke, slette eller male delene.

Begge kommandoene ligger i {{ui:Rediger}} › {{ui:Mer}}.

## Skjær mot modell

Kutter det du velger mot **hver flate på skjermen**.

For eksempel: en bjelke (en gruppe) går gjennom en vegg (en annen gruppe), og du vil ha en åpning i veggen:

1. Dobbeltklikk veggen for å åpne den, og velg alle flatene hennes ({{key:Ctrl+A}}).
2. {{ui:Rediger}} › {{ui:Mer}} › {{ui:Skjær mot modell}}.

Bjelkens omriss tegnes på begge flatene av veggen, som to nye flater. Skyv en av dem gjennom veggen for å lage åpningen, og lukk deretter veggen.

## Skjær mot utvalg

Kutter de valgte flatene, gruppene og komponentene **bare mot hverandre**. Velg minst to.

## Hvor linjene går

Linjene tegnes alltid i den **åpne konteksten**: i modellen når ingen gruppe er åpen, eller i gruppen du redigerer. Grupper og komponenter som ikke er åpne, endres ikke. Så for å kutte en gruppes flater, åpne den først, som i eksempelet over.

## Greit å vite

- Flater som ligger i samme plan skjæres ikke.
- Linjer som lukker en sløyfe på en flate lager en ny flate, slik tegnede linjer gjør.
- Hver skjæring er ett angrersteg. Hvis ingenting krysser, endres ingenting.
- For lukkede former gjør [volumverktøyene](topic:solids) (Union, Subtract) hele jobben i ett steg.
