---
title: Flytt og drei tegneaksene
summary: Drei de røde, grønne og blå aksene for å passe til en bygning som ikke står rett på dem, eller innrett dem etter en flate, slik at tegning og skriving følger den.
keywords: akser, tegneakser, origo, innrett akser, roter akser, drei akser, tilbakestill akser, skrå bygning, skjev, bks, koordinatsystem
from: cab258f7
---

De røde, grønne og blå aksene styrer alt du tegner: rektangler stiller seg på linje med dem, linjer låses til dem, og bakken er det røde–grønne planet. Når en bygning står i en vinkel (en situasjonsplan som ikke er rett på nord, en fløy dreid 30°), flytt aksene dit, slik at tegningen følger veggene. Selve modellen flytter seg ikke.

Alle tre kommandoene ligger i {{ui:Rediger}} › {{ui:Mer}}.

## Plasser akser

1. {{ui:Rediger}} › {{ui:Mer}} › {{ui:Plasser akser}}.
2. Klikk der origo skal være, for eksempel et hjørne av bygningen.
3. Klikk et punkt langs den nye røde aksen, for eksempel lenger ut langs en vegg.
4. Klikk et punkt mot den nye grønne aksen. Grønn gjøres rett på rød, og blå står rett på begge.

Aksene tegnes på sitt nye sted. Et rektangel du nå tegner på bakken, eller skriver inn som `4m,3m`, går langs de dreide røde og grønne aksene; piltastene låser seg til dem; og origofangsten er ved det nye origoet.

## Innrett aksene etter en flate

Velg én flate, og deretter {{ui:Rediger}} › {{ui:Mer}} › {{ui:Juster aksene til flate}}. Blå peker da ut av flaten, rød går langs dens lengste kant, og origo er ved starten av den kanten. Bruk det til å tegne på et skrått tak som om det var bakken.

## Tilbakestill akser

{{ui:Rediger}} › {{ui:Mer}} › {{ui:Tilbakestill akser}} setter dem tilbake der modellen begynte.

## Viktig å vite

- Inne i en åpen gruppe eller komponent brukes dens egne akser (de dreier seg med den); modellens akser gjelder på toppnivå.
- Aksene lagres i ModelCraft-filen, og hver endring er ett steg i angre.
- Eksporter og standardvisningene ({{ui:Topp}}, {{ui:Front}} …) bruker fortsatt modellens egne retninger.
