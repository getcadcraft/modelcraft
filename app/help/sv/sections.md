---
title: Sektionsplan: skär upp modellen
summary: Placera ett sektionsplan för att se in i modellen, skjut det genom den, vänd det eller stäng av snittet.
keywords: sektion, sektionsplan, sektionssnitt, snitt, genomskärning, urklipp, inuti, planritning, skiva, tvärsektion
from: 28c3a645
---

Ett sektionsplan skär upp modellen, så att du kan se och arbeta inuti den: en planritning av ett hus, insidan av ett skåp. Modellen ändras inte; snittet är bara en vy.

## Placera ett

1. Klicka på {{ui:Sektion}} i gruppen {{ui:Kamera}}.
2. Klicka på en yta. Planet placeras på den ytan, med fyra pilar som pekar mot dig.

   Klicka bort från alla ytor för att få en kvadratisk planyta vinkelrät mot den riktning du tittar mest i. Tryck på en piltangent först för att ställa planet vinkelrätt mot rött ({{key:Right}}), grönt ({{key:Left}}) eller blått ({{key:Up}}) i stället.

Sidan som pilarna pekar mot är **bortskuren**. Ett plan placerat på en yta skär ingenting än: skjut det in i modellen.

## Skjut det, vänd det, stäng av det

Klicka på planets kontur för att markera det. I {{ui:Entitetsinfo}}:

- {{ui:Längs dess pilar}} anger var det sitter. Skriv ett nytt avstånd och tryck på {{key:Enter}} för att skjuta det genom modellen; att skriva `-1m` på ett plan du placerat på en framsida flyttar det 1 m in i modellen.
- {{ui:Vänd}} vänder pilarna, så att den andra sidan blir bortskuren.
- {{ui:Aktiv (skär modellen)}}: ett plan skär i taget. Markera en annan planrutas ruta, eller placera ett nytt, så skär den i stället.
- Byt namn på det i {{ui:Namn}}; ta bort det med {{key:Delete}} eller {{ui:Radergummi}}.

Där planet går genom en sluten solid fylls snittet med en mörk färg. Geometri som inte är sluten (en enstaka yta, en öppen låda) skärs men fylls inte.

## Visa och dölj

I {{ui:Vyer}}:

- {{ui:Visa sektionsplan}} döljer planens konturer och pilar (snittet finns kvar).
- {{ui:Visa sektionssnitt}} stänger av snittet och visar hela modellen, utan att ta bort planen.

[Presentationsvy](topic:styles-shadows#presentation-view) döljer konturerna också.

## Att tänka på

- Det som är bortskuret går inte att klicka på eller fånga, så du kan rita på det snittet visar.
- Sektionsplan, vilket som är aktivt och de två omkopplarna sparas i ModelCraft-filen. Varje ändring är ett steg i Ångra.
- Exporter innehåller alltid hela modellen: ett snitt är en vy, inte en redigering.
