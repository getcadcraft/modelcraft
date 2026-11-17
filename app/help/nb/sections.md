---
title: Snittplaner: skjær modellen åpen
summary: Plasser en snittplan for å se inni modellen, skyv den gjennom, snu den eller slå av snittet.
keywords: snitt, snittplan, snittkutt, kutt, utskjæring, klipp, inni, plantegning, skive, tverrsnitt
from: 28c3a645
---

En snittplan skjærer modellen åpen, så du kan se og arbeide inni den: en plantegning av et hus, innsiden av et skap. Modellen endres ikke; snittet er bare en visning.

## Plasser en

1. Klikk {{ui:Snitt}} i gruppen {{ui:Kamera}}.
2. Klikk en flate. Planet plasseres på den flaten, med fire piler som peker mot deg.

   Klikk et sted uten flate for å få et plankvadrat vinkelrett på den retningen du ser mest i. Trykk først en piltast for å stille det vinkelrett på rød ({{key:Right}}), grønn ({{key:Left}}) eller blå ({{key:Up}}).

Siden pilene peker mot, er **kuttet bort**. Et plan plassert på en flate kutter ingenting ennå: skyv det inn i modellen.

## Skyv det, snu det, slå det av

Klikk på planets omriss for å velge det. I {{ui:Elementinfo}}:

- {{ui:Langs pilene}} sier hvor det står. Skriv en ny avstand og trykk {{key:Enter}} for å skyve det gjennom modellen. Skriver du `-1m` på et plan du plasserte på en fremre flate, flyttes det 1 m inn i modellen.
- {{ui:Snu retning}} snur pilene, så den andre siden blir kuttet bort.
- {{ui:Aktivt (skjærer modellen)}}: ett plan kutter om gangen. Kryss av et annet plans boks, eller plasser et nytt, så er det det som kutter i stedet.
- Gi det nytt navn i {{ui:Navn}}; slett det med {{key:Delete}} eller {{ui:Viskelær}}.

Der planet passerer gjennom et lukket volumlegeme, fylles snittet med en mørk farge. Geometri som ikke er lukket (en enkelt flate, en åpen boks), blir kuttet, men ikke fylt.

## Vis og skjul

I {{ui:Visninger}}:

- {{ui:Vis snittplan}} skjuler planenes omriss og piler (snittet blir værende).
- {{ui:Vis snitt}} slår av kuttet og viser hele modellen, uten å slette planene.

[Presentasjonsvisningen](topic:styles-shadows#presentation-view) skjuler omrisset også.

## Greit å vite

- Det som er kuttet bort, kan ikke klikkes på eller snappes til, så du kan tegne på det snittet viser.
- Snittplanene, hvilket som er aktivt, og de to bryterne lagres i ModelCraft-filen. Hver endring er ett trinn i angre.
- Eksporter inneholder alltid hele modellen: et snitt er en visning, ikke en redigering.
