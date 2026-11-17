---
title: Dölj, isolera och visa igen
summary: Flytta undan saker för att arbeta mellan dem, eller visa bara det du arbetar med; dolda saker förblir dolda i filen.
keywords: dölj, visa igen, visa allt, isolera, dölj övriga, visa, dold, lokal vy, synlighet, undan
from: 2c8a3457
---

Att dölja flyttar undan saker utan att radera dem. En dold yta, kant, grupp eller komponent ritas inte, och du kan varken fånga den, klicka på den eller markera den, så att du kan arbeta med det som ligger bakom eller mellan saker.

## Dölj

1. Markera det som ska döljas: ytor, kanter, grupper eller komponenter.
2. {{ui:Redigera}} › {{ui:Mer}} › {{ui:Dölj}}.

Till exempel, för att arbeta i det smala gapet mellan två grupper som står tätt intill varandra, markera den främre och dölj den: klick och fångst når nu ytan bakom den.

## Isolera

Markera det du vill ha kvar i vyn, och sedan {{ui:Redigera}} › {{ui:Mer}} › {{ui:Isolera (dölj resten)}}. Allt annat i modellen döljs – eller, medan du redigerar inuti en grupp, allt annat i den gruppen. En markerad yta behåller sina kanter.

## Visa allt igen

{{ui:Redigera}} › {{ui:Mer}} › {{ui:Visa allt}} visar allt igen, i alla grupper. {{ui:Entitetsinfo}} säger hur många saker som är dolda när inget är markerat, med en knapp {{ui:Visa allt}} där också.

{{ui:Disposition}} visar dolda grupper och komponenter i kursiv med ett genomstruket öga; klicka på ögat för att visa en igen.

:::note
Med Modeler-tangenter döljer {{key:H}}, {{key:Shift+H}} isolerar och {{key:Alt+H}} visar allt igen. ({{ui:Inställningar}} › {{ui:ModelCraft}} väljer tangentstil.)
:::

## Bra att veta

- Det som är dolt sparas i ModelCraft-filen och är dolt när du öppnar den igen.
- Dolda saker finns kvar i modellen: exporter innehåller dem, och så gör volymer och storlekar i {{ui:Entitetsinfo}}.
- Varje dölj, isolera eller visa är ett steg för ångra.
