---
title: Stöd, väggtjocklek, urholkning och reparation
summary: Se var en utskrift behöver stöd och ungefär hur mycket, hitta väggar som är för tunna för att skrivas ut, urholka en del till en väggtjocklek med dräneringshål, och reparera ett nät med varje åtgärd listad.
keywords: 3d-utskrift, stöd, förhandsvisning av stöd, överhäng, trädstöd, kolumnstöd, väggtjocklek, tunna väggar, för tunn, munstycke, urholka, urholkning, skal, dräneringshål, harts, reparera, laga nät, icke-manifold, vända ytor, hål, små skal, självgenomskärning, överlapp, sammanfoga
from: 286bde26
---

Fyra verktyg för att göra en modell redo för en 3D-skrivare. Öppna {{ui:Exportera}} › {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}; dialogrutans rad **Utskriftsverktyg** har {{ui:Förhandsvisning av stöd}}, {{ui:Väggtjocklek}}, {{ui:Urholka}} och {{ui:Reparera}}. Varje öppnas som ett kort över vyn; {{ui:Stäng}} (krysset) tar bort det och dess markeringar. Ett kort visas åt gången.

Varje verktyg fungerar på det som skrivs ut: markeringen, eller allt som visas när inget är markerat. {{ui:Urholka}} och {{ui:Reparera}} kräver en markerad grupp, komponent eller ett nät, eftersom de ändrar den.

## Förhandsvisning av stöd

Ytor som lutar ut mer än **överhängsvinkeln** från lodrätt skuggas röda, och enkla stöd ritas från dem (orange) ner till bädden, eller till den del av modellen som ligger under dem.

- **Överhängsvinkel**: 45° är vad de flesta skrivare klarar utan stöd. Höj den för en skrivare som brygglägger bra.
- **Kolumner**: en rak kolumn var 3 mm under varje överhäng. Uppskattningen räknar dem som ett stödmönster på 15 %.
- **Träd**: närliggande punkter går ihop i en stam under deras mitt; ingen gren lutar mer än 45°. Träd tar oftast mindre material och vidrör bädden på färre ställen.

Kortet säger hur stor yta som behöver stöd, hur många stödpunkter det finns och ungefär hur mycket material de tar. Stöd som står på modellen (inte bädden) räknas: de lämnar märken där. Med en bädd vald i {{ui:Inställningar}} ritas bädden under modellen.

:::note
Detta är en förhandsvisning, inte en slicer: din slicer avgör de verkliga stöden. På ett mycket stort överhäng sprids stödpunkterna vidare så att förhandsvisningen förblir snabb; kortet säger det.
:::

## Väggtjocklek

Varje yta mäts rakt genom solidet till andra sidan. Väggar under **tunnaste vägg som tillåts** är röda, och väggar under en och en halv gång det är orange: de skrivs ut, men kan bli svaga.

De tunna områdena listas, tunnaste först, med hur tunna och hur stora de är. {{ui:Visa}} vrider kameran dit.

En skrivare kan inte göra en vägg tunnare än ungefär två bredder av dess munstycke: 0,8 mm för det vanliga 0,4 mm munstycket (utgångsvärdet). Hartsskrivare klarar mindre; kontrollera din skrivares guide.

På en mycket stor modell kastar bara vissa ytor en stråle, och de andra tar sina grannars tjocklek; kortet säger hur många som mättes.

## Urholka

Urholkning behåller utsidan som den är och tar bort insidan, och lämnar väggar så tjocka som du begär. Hartsutskrifter använder mindre harts och drar mindre i byggplattan; filamentutskrifter använder mindre plast än fyllnad skulle göra.

1. Markera gruppen, komponenten eller nätet, öppna sedan {{ui:Urholka}}.
2. Ange **väggen** (2 mm att börja med) och hur breda **dräneringshålen** är.
3. För en hartsutskrift klickar du på {{ui:Placera ett dräneringshål}} och klickar sedan på modellens utsida där det ska sitta: lågt, nära byggplattan, så att det flytande hartset rinner ut. Placera så många du behöver; var och en visas som en blå cirkel och listas med {{ui:Ta bort}}.
4. {{ui:Preview}} säger hur mycket urholkningen tar bort.
5. {{ui:Hollow it}} gör ändringen: ett steg som {{key:Mod+Z}} ångrar.

Resultatet är ett slutet solid som 3D-utskriftskontrollen godkänner: ModelCraft kontrollerar det först och ändrar ingenting om det inte skulle klara den. Där modellen är tunnare än två väggar förblir den solid. Resultatet är en grupp vars plana sidor är enskilda ytor, så du kan fortsätta modellera den med {{ui:Push/pull}}; en krökt del som urholkas på det fina rutnätet har oftast för många ytor för det och blir i stället ett nät, och statusraden säger vilket.

:::tip
För de flesta former är insidan utsidan flyttad inåt med exakt väggens tjocklek. Där hörn eller tunna delar gör det omöjligt följer ModelCraft i stället utsidan på väggens avstånd på ett fint rutnät; kortet säger då hur nära det är (inom en bråkdel av en millimeter).
:::

## Reparera

{{ui:Repair}} tittar på den markerade delen så som en skrivares slicer gör, åtgärdar det som kan åtgärdas säkert och listar varje åtgärd:

| Den åtgärdar | Vad det betyder |
|---|---|
| Trianglar utan yta | utelämnas |
| En triangel ritad två gånger | en kopia behålls; en yta ritad rygg mot rygg med sig själv (utan tjocklek) tas bort |
| Lösa delar under 0,5 mm | tas bort |
| Trianglar som vetter åt fel håll | vänds så att de matchar sina grannar |
| Hål, plana eller inte | stängs med en vifta av nya trianglar från mitten av varje hål |
| En del vänd ut och in | vänds utåt (ett ihåligt inuti en annan del lämnas som det är: det ska vetta inåt) |

{{ui:Fix the safe ones}} gör alla i ett steg som {{key:Mod+Z}} ångrar, och statusraden listar varje åtgärd. Den lagade delen blir en grupp vars plana sidor är enskilda ytor. Om den fortfarande inte sluter sig (något under **Lämnat åt dig** finns kvar), eller om den skulle få för många ytor för en grupp, blir den i stället ett nät: dess ytor förblir trianglar, och plana sidor ser fortfarande plana ut. Statusraden säger vilket. {{ui:Join overlapping parts}} fungerar på samma sätt.

Det som inte kan åtgärdas säkert listas under **Lämnat åt dig** och markeras i lila i vyn, med {{ui:Visa}}:

- **Kanter där tre eller fler ytor möts**: bestäm vilken yta som hör dit och radera de andra.
- **En del som går genom sig själv**: flytta eller rita om den delen. Se [Skär ytor](topic:intersect).
- **Hål för stora eller för trassliga för att stängas**: rita ytor över dem.
- **Lösa delar som överlappar**: slicers slår ihop dem ändå. {{ui:Join overlapping parts}} gör dem till en sluten kropp (den bygger om ytorna där de möts, så det är en egen knapp och görs aldrig åt dig).

För grupper som tryckts/dragits kan du också åtgärda en i taget i {{ui:Entity info}} › {{ui:Show problems}} / {{ui:Fix}}, vilket behåller de ytor du ritade. Se [Solidverktyg](topic:solids).

Relaterat: [Gör en modell redo för 3D-utskrift](topic:print-3d) · [Nybörjarstilen](topic:beginner) · [Finns inte ännu](topic:not-built-yet#3d-printing)
