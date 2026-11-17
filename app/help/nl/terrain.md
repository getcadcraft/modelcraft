---
title: Terrein: grond uit hoogtelijnen en modelleren
summary: Maak grond van hoogtelijnen of als raster, en til het daarna op of verlaag het met een zachte kwast.
keywords: terrein, grond, landschap, topografie, hoogtelijnen, hoogtelijn, bouwplaats, helling, heuvel, bult, zandbak, smoove, modelleren, aanleggen, TIN
from: 407652b3
---

Terrein is grond die uit driehoeken bestaat, dus het kan elke vorm volgen. Het is een groep: dubbelklik erop om het te bewerken.

## Uit hoogtelijnen

1. Verkrijg de hoogtelijnen op hun hoogte: teken ze, of [importeer een situatietekening](topic:site-plan) en verplaats elke hoogtelijn naar zijn niveau.
2. Selecteer ze (alle randen van alle hoogtelijnen).
3. {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Terrein uit geselecteerde hoogtelijnen}}.

ModelCraft verbindt de punten van de hoogtelijnen met driehoeken (een TIN) en verzacht elke rand erbinnen, zodat de grond glad schaduwt. De lijnen zelf blijven staan; wis of verberg ze wanneer u ze niet meer nodig heeft. Zeer dichte hoogtelijnen worden uitgedund tot 8 000 punten.

## Een raster om te modelleren

{{ui:Bewerken}} › {{ui:Meer}} › {{ui:Terreinraster…}} vraagt om een breedte, diepte en celgrootte, en plaatst daarna een vlak raster van driehoeken waar u de hoek klikt. Kleine cellen modelleren gladder, maar maken meer vlakken (maximaal 200 × 200 cellen).

## Modelleren: de grond optillen en verlagen

1. Dubbelklik op het terrein om het te openen.
2. {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Terrein modelleren}}. Een cirkel toont de kwast op de grond onder de aanwijzer.
3. Sleep omhoog om de grond onder de kwast op te tillen, of omlaag om hem te verlagen. Het midden beweegt het meest, en de grond loopt naar nul aan de rand van de cirkel, zodat heuvels en kuilen glad worden.

Om een heuvel op een exacte hoogte te maken, klikt u één keer, typt u daarna de hoogte, zoals `1.5m` (een min verlaagt), en drukt u op {{key:Enter}}. Om de kwast te wijzigen, typt u een lengte voordat u klikt: `5m` geeft een kwast met een straal van 5 m.

Elke modelleerbeurt is één stap ongedaan maken.

## Let op

- Modelleren verplaatst alleen driehoekvlakken, zodat elk vlak vlak blijft. Met de hand getekende vlakken (rechthoeken, veelhoeken) zijn geen terrein: het gereedschap meldt dat.
- Modelleren verplaatst punten recht omhoog en omlaag; het voegt geen punten toe. Voor meer detail maakt u een raster met kleinere cellen.
- Terrein exporteert zoals elke andere groep. In IFC is het een bouwelementproxy, net als alles andere.
