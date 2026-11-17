---
title: Steunen, wanddikte, uithollen en repareren
summary: Zie waar een print steunen nodig heeft en ongeveer hoeveel, vind wanden die te dun zijn om te printen, hol een onderdeel uit tot een wanddikte met afvoergaten, en repareer een mesh met elke reparatie vermeld.
keywords: 3d-printen, steunen, steunvoorbeeld, overhang, boomsteunen, kolomsteunen, wanddikte, dunne wanden, te dun, nozzle, uithollen, uitholling, afvoergat, hars, repareren, mesh repareren, non-manifold, omgekeerde vlakken, gaten, kleine losse delen, zelfdoorsnijding, overlap, samenvoegen
from: 286bde26
---

Vier gereedschappen om een model klaar te maken voor een 3D-printer. Open {{ui:Exporteren}} › {{ui:Controleren op 3D-printen (STL of 3MF)…}}; de regel **Printtools** in het dialoogvenster heeft {{ui:Voorbeeld van steunen}}, {{ui:Wanddikte}}, {{ui:Uitholen}} en {{ui:Repareren}}. Elk opent als kaart over de weergave; {{ui:Sluiten}} (het kruis) haalt die kaart en de markeringen weg. Er wordt altijd maar één kaart getoond.

Elk gereedschap werkt op wat geprint wordt: de selectie, of alles dat zichtbaar is wanneer er niets is geselecteerd. {{ui:Uitholen}} en {{ui:Repareren}} vragen om één groep, component of mesh die geselecteerd is, omdat ze die wijzigen.

## Voorbeeld van steunen

De vlakken die verder naar buiten hellen dan de **overhangshoek** vanaf rechtop, worden rood gearceerd. Eenvoudige steunen worden vanaf die vlakken (oranje) naar beneden getekend, tot het bed of tot het deel van het model eronder.

- **Overhangshoek**: 45° is wat de meeste printers zonder steun aankunnen. Verhoog hem voor een printer die goed overbrugt.
- **Kolommen**: een rechte kolom elke 3 mm onder elke overhang. De schatting telt ze mee als een steunpatroon van 15%.
- **Boom**: nabijgelegen punten komen samen in één stam onder hun midden; geen tak helt meer dan 45°. Bomen gebruiken meestal minder materiaal en raken het bed op minder plaatsen.

De kaart laat zien hoeveel oppervlak steun nodig heeft, hoeveel steunpunten er zijn en ongeveer hoeveel materiaal ze kosten. Steunen die op het model staan (niet op het bed) worden meegeteld: ze laten daar sporen achter. Als er een printerbed is gekozen in {{ui:Instellingen}}, wordt het bed onder het model getekend.

:::note
Dit is een voorbeeld, geen slicer: uw slicer bepaalt de echte steunen. Bij een zeer grote overhang worden de steunpunten breder verspreid zodat het voorbeeld snel blijft; de kaart zegt dat.
:::

## Wanddikte

Elk vlak wordt rechtdoor door het volume gemeten tot de andere kant. Wanden onder de **dunste toegestane wand** zijn rood, en wanden onder anderhalf keer die waarde zijn oranje: ze worden geprint, maar kunnen zwak uitkomen.

De dunne gebieden worden vermeld, het dunst eerst, met hoe dun en hoe groot elk is. {{ui:Tonen}} draait de camera ernaartoe.

Een printer kan geen wand dunner maken dan ongeveer twee keer de breedte van zijn nozzle: 0.8 mm voor de gangbare nozzle van 0.4 mm (de start). Harsprinters halen minder; raadpleeg de handleiding van uw printer.

Bij een zeer groot model werpen alleen sommige vlakken een straal, en nemen de andere de dikte van hun buren over; de kaart zegt hoeveel er zijn gemeten.

## Uitholen

Uitholling houdt de buitenkant zoals die is en haalt de binnenkant weg, met wanden zo dik als u vraagt. Harsprints gebruiken minder hars en trekken minder aan de bouwplaat; filamentprints gebruiken minder plastic dan vulling zou doen.

1. Selecteer de groep, component of mesh en open {{ui:Uitholen}}.
2. Stel de **wand** in (2 mm als start) en hoe breed de **afvoergaten** zijn.
3. Voor een harsprint klikt u op {{ui:Een afvoergat plaatsen}} en klikt u daarna op de buitenkant van het model waar het moet komen: laag, dicht bij de bouwplaat, zodat de vloeibare hars eruit loopt. Plaats er zoveel als nodig; elk wordt als een blauwe cirkel getoond en vermeld met {{ui:Verwijderen}}.
4. {{ui:Voorbeeld}} zegt hoeveel de uitholling wegneemt.
5. {{ui:Uithollen}} maakt de wijziging: één stap die {{key:Mod+Z}} ongedaan maakt.

Het resultaat is één gesloten volume dat de controle voor 3D-printen accepteert: ModelCraft controleert het eerst en verandert niets als het niet zou slagen. Waar het model dunner is dan twee wanden, blijft het massief. Het resultaat is een groep waarvan de vlakke zijden enkele vlakken zijn, zodat u er verder mee kunt modelleren met {{ui:Duwen/trekken}}. Een gebogen onderdeel dat op het fijne raster is uitgehold, heeft daarvoor meestal te veel vlakken en wordt in plaats daarvan een mesh; de statusregel zegt welke.

:::tip
Voor de meeste vormen is de binnenkant de buitenkant, precies met de wand naar binnen verschoven. Waar hoeken of dunne delen dat onmogelijk maken, volgt ModelCraft in plaats daarvan de buitenkant op de afstand van de wand, op een fijn raster; de kaart zegt dan hoe nauwkeurig dat is (binnen een fractie van een mm).
:::

## Repareren

{{ui:Repareren}} kijkt naar het geselecteerde onderdeel zoals de slicer van een printer dat doet, repareert wat veilig te repareren is en vermeldt elke reparatie:

| Het repareert | Wat dat betekent |
|---|---|
| Driehoeken zonder oppervlakte | weggelaten |
| Een driehoek dubbel getekend | één exemplaar blijft; een vlak dat met zichzelf rug-aan-rug is getekend (zonder dikte) wordt verwijderd |
| Losse stukjes kleiner dan 0.5 mm | verwijderd |
| Driehoeken die de verkeerde kant op wijzen | gedraaid zodat ze bij hun buren passen |
| Gaten, vlak of niet | gesloten met een waaier van nieuwe driehoeken vanuit het midden van elk gat |
| Een stuk binnenstebuiten | naar buiten gedraaid (een holte in een ander stuk blijft zoals hij is: die moet naar binnen wijzen) |

{{ui:De veilige herstellen}} voert ze allemaal uit in één stap die {{key:Mod+Z}} ongedaan maakt, en de statusregel somt elke reparatie op. Het gerepareerde onderdeel wordt een groep waarvan de vlakke zijden enkele vlakken zijn. Als het nog steeds niet sluit (er blijft iets over onder **Voor u overgelaten**), of het zou te veel vlakken voor een groep hebben, wordt het in plaats daarvan een mesh: de vlakken blijven driehoeken, en vlakke zijden zien er nog steeds vlak uit. De statusregel zegt welke. {{ui:Overlappende onderdelen samenvoegen}} werkt op dezelfde manier.

Wat niet veilig te repareren is, staat onder **Voor u overgelaten** en is paars gemarkeerd in de weergave, met {{ui:Tonen}}:

- **Randen waar drie of meer vlakken samenkomen**: bepaal welk vlak erbij hoort en wis de andere.
- **Een stuk dat door zichzelf heen gaat**: verplaats of teken dat deel opnieuw. Zie [Vlakken snijden](topic:intersect).
- **Gaten die te groot of te verward zijn om te sluiten**: teken vlakken eroverheen.
- **Losse stukken die overlappen**: slicers voegen ze toch samen. {{ui:Overlappende onderdelen samenvoegen}} maakt er één gesloten lichaam van (het bouwt de vlakken opnieuw op waar ze elkaar raken, daarom is het een aparte knop en wordt het nooit voor u gedaan).

Voor groepen van duwen/trekken kunt u ook één voor één repareren in {{ui:Entiteitsinformatie}} › {{ui:Problemen tonen}} / {{ui:Repareren}}, wat de vlakken behoudt die u hebt getekend. Zie [Volumegereedschappen](topic:solids).

Zie ook: [Een model klaarmaken voor 3D-printen](topic:print-3d) · [De stijl Beginner](topic:beginner) · [Nog niet beschikbaar](topic:not-built-yet#3d-printing)
