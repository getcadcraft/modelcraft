---
title: Mät och placera hjälplinjer
summary: Läs av längder och areor, mät mellan två punkter med måttbandet, och lägg ut hjälplinjer och hjälppunkter att rita mot.
keywords: mät, måttband, gradskiva, vinkel, vinklad hjälplinje, hjälplinje, konstruktionslinje, avstånd, mått, längd, area, förskjutning, layout, hjälppunkt
from: de6d04d9
---

## Läs av mått utan att mäta

Markera något och titta i {{ui:Entitetsinfo}}:

- En kant visar sin **längd**.
- En yta visar sin **area** och hur många hål den har.
- Flera ytor visar sin **totala area**.
- En grupp eller komponent visar sin **storlek** (bredd × djup × höjd för lådan runt den) och, om den är en sluten solid, sin **volym**.
- Med inget markerat visar {{ui:Entitetsinfo}} storleken på hela modellen.

Längder och areor använder enheten i väljaren nere till höger. En modell i millimeter visar areor från 0.01 m² och uppåt i kvadratmeter (ett rum på 4 × 3 m visar ”12 m²”).

Medan du ritar visar värdefältet den live uppdaterade längden, storleken, radien eller avståndet, så du behöver sällan mäta efteråt.

För att ändra en storlek efter ritning, markera en kant eller grupp och skriv in ny längd eller storlek i {{ui:Entitetsinfo}}. Eller placera ett [mått](topic:dimensions) och skriv in en ny längd i det.

## Mät mellan två punkter

1. Tryck på {{key:T}} för verktyget {{ui:Måttband}}.
2. Klicka på en punkt: ett hörn, en mittpunkt, en punkt på en yta, eller marken. (Att klicka på en kant gör något annat; se nedan.)
3. Flytta till den andra punkten. Spetsen och värdefältet ({{ui:Längd}}) visar avståndet. Det fångar punkter och de röda, gröna och blå riktningarna.
4. Klicka. Statusfältet säger ”Uppmätt 4' 6".” och en **hjälppunkt** lämnas kvar på den andra punkten.

För att i stället lämna hjälppunkten på ett exakt avstånd, skriv in det efter första klicket och tryck på {{key:Enter}}: den går i den riktning du pekar.

## Placera en hjälplinje

En hjälplinje är en oändlig streckad linje, parallell med en kant, på ett avstånd du väljer. Använd hjälplinjer för att lägga ut en indragning, en våningshöjd eller var ett fönster börjar.

1. Tryck på {{key:T}}.
2. Klicka på en **kant** (inte dess ände). Spetsen säger ”På kant”.
3. Flytta bort från kanten, till den sida där hjälplinjen ska ligga. En streckad linje följer, parallell med kanten, och värdefältet ({{ui:Förskjut}}) visar avståndet.
4. Klicka, eller skriv in förskjutningen och tryck på {{key:Enter}}: `1.5m`, `5'`.

   Statusfältet säger ”Hjälplinje 1.5 m från kanten.”

Om du börjar på en befintlig hjälplinje skapas en annan hjälplinje parallellt med den, så att du kan stega ut ett rutnät från en hjälplinje.

Om du skriver in en förskjutning utan att först flytta bort från kanten kan ModelCraft inte avgöra vilken sida du menar: ”Flytta bort från kanten först för att visa vilken sida.”

## En hjälplinje i vinkel: Gradskiva

1. Klicka på {{ui:Gradskiva}} i gruppen {{ui:Ändra}}.
2. Klicka på centrum: punkten som hjälplinjen går genom. På en yta ligger gradskivan på den ytan; annars ligger den plant. Efter detta klick ställer {{key:Right}}, {{key:Left}} eller {{key:Up}} den i stället vinkelrätt mot den röda, gröna eller blå axeln (tryck igen för att ångra).
3. Klicka på en punkt som sätter 0°, till exempel längs en kant.
4. Flytta till den vinkel du vill ha och klicka: den fångar i steg om 15°. Eller skriv in vinkeln i grader, till exempel `22.5`, och tryck på {{key:Enter}}; hjälplinjen går till den sida pekaren är på.

Hjälplinjen går genom centrum i den vinkeln. Rita längs den med {{ui:Linje}} för en takvinkel, en fasning eller en snedställd vägg.

## Rita mot hjälplinjer

Ritverktygen fångar mot hjälplinjer (”På hjälplinje”) och hjälppunkter (”Hjälppunkt”), och mot där en hjälplinje korsar en axelriktning. Starta en rektangel där två hjälplinjer korsas för att placera den exakt.

## Ta bort hjälplinjer

- En hjälplinje: klicka på den med {{ui:Markera}} och tryck på {{key:Delete}}, eller klicka på den med {{ui:Radergummi}}.
- Alla hjälplinjer: med inget markerat, klicka på {{ui:Ta bort alla hjälplinjer}} i {{ui:Entitetsinfo}}.

Hjälplinjer sparas i filen `.modelcraft`. De exporteras inte till andra format.
