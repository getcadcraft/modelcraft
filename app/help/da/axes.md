---
title: Flyt og drej tegningsakserne
summary: Drej de røde, grønne og blå akser, så de passer til en bygning, der ikke står vinkelret på dem, eller ret dem ind efter en flade, så tegning og indtastning følger den.
keywords: akser, tegningsakser, origo, justér akser, roter akser, drej akser, nulstil akser, vinklet bygning, skæv, ucs, koordinatsystem
from: cab258f7
---

De røde, grønne og blå akser styrer alt, du tegner: rektangler flugter med dem, linjer låser sig til dem, og jorden er det røde–grønne plan. Når en bygning står i en vinkel (en situationsplan, der ikke er vinkelret på nord, en fløj drejet 30°), flyt akserne over på den, så tegningen følger dens vægge. Selve modellen flytter sig ikke.

Alle tre kommandoer findes i {{ui:Rediger}} › {{ui:Mere}}.

## Placér akser

1. {{ui:Rediger}} › {{ui:Mere}} › {{ui:Placér akser}}.
2. Klik, hvor origo skal være, for eksempel et hjørne af bygningen.
3. Klik på et punkt langs den nye røde akse, for eksempel længere ude langs en væg.
4. Klik på et punkt mod den nye grønne akse. Grøn bliver vinkelret på rød, og blå står vinkelret på begge.

Akserne tegnes på deres nye plads. Et rektangel, du nu tegner på jorden, eller skriver som `4m,3m`, løber langs den drejede røde og grønne akse; piletasterne låser sig til dem; og origo-fanget er ved det nye origo.

## Ret akserne ind efter en flade

Vælg én flade, og derefter {{ui:Rediger}} › {{ui:Mere}} › {{ui:Justér akser efter flade}}. Blå peger så ud af fladen, rød løber langs dens længste kant, og origo er ved starten af den kant. Brug det til at tegne på et skråt tag, som om det var jorden.

## Nulstil akser

{{ui:Rediger}} › {{ui:Mere}} › {{ui:Nulstil akser}} sætter dem tilbage, hvor modellen startede.

## Det skal du vide

- Inde i en åben gruppe eller komponent bruges dens egne akser (de drejer med den); modellens akser gælder på øverste niveau.
- Akserne gemmes i ModelCraft-filen, og hver ændring er ét fortryd-trin.
- Eksporter og standardvisningerne ({{ui:Top}}, {{ui:Front}} …) bruger stadig modellens egne retninger.
