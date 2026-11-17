---
title: Mål og plasser hjelpelinjer
summary: Les lengder og arealer, mål mellom to punkter med målebåndet, og legg ut hjelpelinjer og punkter å tegne mot.
keywords: mål, målebånd, vinkelmåler, vinkel, vinklet hjelpelinje, hjelpelinje, konstruksjonslinje, avstand, måltilsetting, lengde, areal, forskyv, layout, hjelpepunkt
from: de6d04d9
---

## Les mål uten å måle

Velg noe og se på {{ui:Elementinfo}}:

- En kant viser sin **lengde**.
- En flate viser sitt **areal** og hvor mange hull den har.
- Flere flater viser deres **samlede areal**.
- En gruppe eller komponent viser sin **størrelse** (bredde × dybde × høyde for boksen rundt den) og, hvis det er et lukket volumlegeme, sitt **volum**.
- Med ingenting valgt viser {{ui:Elementinfo}} størrelsen på hele modellen.

Lengder og arealer bruker enheten i velgeren nederst til høyre. En modell i millimeter viser arealer fra 0.01 m² og oppover i kvadratmeter (et 4 × 3 m rom viser "12 m²").

Mens du tegner, viser verdiboksen den levende lengden, størrelsen, radiusen eller avstanden, så du trenger sjelden å måle etterpå.

For å endre et mål etter tegning, velg en kant eller gruppe og skriv inn ny lengde eller størrelse på nytt i {{ui:Elementinfo}}. Eller plasser en [måltilsetting](topic:dimensions) og skriv inn en ny lengde i den.

## Mål mellom to punkter

1. Trykk {{key:T}} for {{ui:Målebånd}}-målingen.
2. Klikk et punkt: et hjørne, et midtpunkt, et punkt på en flate, eller bakken. (Å klikke på en kant gjør noe annet; se under.)
3. Flytt til det andre punktet. Spissen og verdiboksen ({{ui:Lengde}}) viser avstanden. Den fester seg til punkter og til de røde, grønne og blå retningene.
4. Klikk. Statuslinjen sier "Målt 4' 6"." og et **hjelpepunkt** blir liggende på det andre punktet.

For i stedet å sette hjelpepunktet på en nøyaktig avstand, skriv den inn etter første klikk og trykk {{key:Enter}}: det går i den retningen du peker.

## Plasser en hjelpelinje

En hjelpelinje er en endeløs stiplet linje, parallell med en kant, i en avstand du velger. Bruk hjelpelinjer til å legge ut en tilbaketrekning, en etasjehøyde eller hvor et vindu starter.

1. Trykk {{key:T}}.
2. Klikk på en **kant** (ikke på enden). Spissen sier "På kant".
3. Flytt av kanten, til siden hjelpelinjen skal gå. En stiplet linje følger, parallell med kanten, og verdiboksen ({{ui:Forskyv}}) viser avstanden.
4. Klikk, eller skriv inn forskyvningen og trykk {{key:Enter}}: `1.5m`, `5'`.

   Statuslinjen sier "Hjelpelinje 1.5 m fra kanten."

Å starte på en eksisterende hjelpelinje lager en ny hjelpelinje parallelt med den, slik at du kan føre et rutenett utover fra én hjelpelinje.

Hvis du skriver inn en forskyvning uten først å flytte av kanten, kan ikke ModelCraft vite hvilken side du mener: "Flytt av kanten først for å vise hvilken side."

## En hjelpelinje i en vinkel: Vinkelmåler

1. Klikk {{ui:Vinkelmåler}} i gruppen {{ui:Endre}}.
2. Klikk midtpunktet: punktet hjelpelinjen går gjennom. På en flate ligger vinkelmåleren på den flaten; ellers ligger den flatt. Etter dette klikket setter {{key:Right}}, {{key:Left}} eller {{key:Up}} den rett på rød, grønn eller blå (trykk igjen for å angre).
3. Klikk et punkt som setter 0°, for eksempel langs en kant.
4. Flytt til ønsket vinkel og klikk: den fester seg i trinn på 15°. Eller skriv inn vinkelen i grader, for eksempel `22.5`, og trykk {{key:Enter}}; hjelpelinjen går til siden pekeren er på.

Hjelpelinjen går gjennom midtpunktet i den vinkelen. Tegn langs den med {{ui:Linje}} for en takvinkel, en fase eller en skrå vegg.

## Tegn mot hjelpelinjer

Tegneverktøyene fester seg til hjelpelinjer ("På hjelpelinje") og hjelpepunkter ("Hjelpepunkt"), og til der en hjelpelinje krysser en aksemretning. Start et rektangel der to hjelpelinjer krysser for å plassere det nøyaktig.

## Fjern hjelpelinjer

- Én hjelpelinje: klikk den med {{ui:Velg}} og trykk {{key:Delete}}, eller klikk den med {{ui:Viskelær}}.
- Alle hjelpelinjer: med ingenting valgt, klikk {{ui:Slett alle hjelpelinjer}} i {{ui:Elementinfo}}.

Hjelpelinjer lagres i `.modelcraft`-filen. De eksporteres ikke til andre formater.
