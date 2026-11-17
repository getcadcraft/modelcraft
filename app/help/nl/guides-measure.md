---
title: Meten en hulplijnen plaatsen
summary: Lees lengtes en oppervlakten af, meet tussen twee punten met het meetlint, en leg hulplijnen en hulppunten vast om tegen te tekenen.
keywords: meten, meetlint, gradenboog, hoek, schuine hulplijn, hulplijn, constructielijn, afstand, maatvoering, lengte, oppervlakte, offset, indeling, hulppunt
from: de6d04d9
---

## Afmetingen aflezen zonder te meten

Selecteer iets en kijk in {{ui:Entiteitsinformatie}}:

- Een rand toont zijn **lengte**.
- Een vlak toont zijn **oppervlakte** en hoeveel gaten het heeft.
- Meerdere vlakken tonen hun **totale oppervlakte**.
- Een groep of component toont zijn **grootte** (breedte × diepte × hoogte van de doos eromheen) en, als het een gesloten solid is, zijn **volume**.
- Als niets is geselecteerd, toont {{ui:Entiteitsinformatie}} de grootte van het hele model.

Lengtes en oppervlakten gebruiken de eenheid in de kiezer rechtsonder. Een model in millimeters toont oppervlakten van 0.01 m² en groter in vierkante meters (een kamer van 4 × 3 m leest "12 m²").

Terwijl u tekent, toont het waardevak de actuele lengte, grootte, straal of afstand, zodat u achteraf zelden hoeft te meten.

Om een grootte na het tekenen te wijzigen, selecteert u een rand of groep en typt u de lengte of grootte opnieuw in {{ui:Entiteitsinformatie}}. Of plaats een [maatvoering](topic:dimensions) en typ er een nieuwe lengte in.

## Meten tussen twee punten

1. Druk op {{key:T}} voor het {{ui:Meetlint}}.
2. Klik op een punt: een hoek, een middelpunt, een punt op een vlak, of de grond. (Klikken op een rand doet iets anders; zie hieronder.)
3. Beweeg naar het tweede punt. De punt van de aanwijzer en het waardevak ({{ui:Lengte}}) tonen de afstand. Het snapt vast aan punten en aan de rode, groene en blauwe richtingen.
4. Klik. De statusbalk meldt "Gemeten 4' 6"." en er blijft een **hulppunt** achter op het tweede punt.

Om het hulppunt op een exacte afstand te zetten, typt u die na de eerste klik en drukt u op {{key:Enter}}: het hulppunt gaat in de richting waarin u wijst.

## Een hulplijn plaatsen

Een hulplijn is een onbegrensde gestreepte lijn, evenwijdig aan een rand, op een afstand die u kiest. Gebruik hulplijnen om een terugwijking, een vloerhoogte of het begin van een raam uit te zetten.

1. Druk op {{key:T}}.
2. Klik op een **rand** (niet op het uiteinde). De tip zegt "Op rand".
3. Beweeg weg van de rand, naar de kant waar de hulplijn moet komen. Er volgt een gestreepte lijn, evenwijdig aan de rand, en het waardevak ({{ui:Offset}}) toont de afstand.
4. Klik, of typ de offset en druk op {{key:Enter}}: `1.5m`, `5'`.

   De statusbalk meldt "Hulplijn 1.5 m van de rand."

Als u begint op een bestaande hulplijn, maakt u een andere hulplijn evenwijdig eraan, zodat u vanuit één hulplijn stap voor stap een raster kunt uitzetten.

Als u een offset typt zonder eerst van de rand weg te bewegen, kan ModelCraft niet zien welke kant u bedoelt: "Beweeg eerst van de rand af om aan te geven welke kant."

## Een hulplijn onder een hoek: Gradenboog

1. Klik op {{ui:Gradenboog}} in de groep {{ui:Wijzigen}}.
2. Klik op het middelpunt: het punt waar de hulplijn doorheen gaat. Op een vlak ligt de gradenboog op dat vlak; anders ligt hij plat. Na deze klik zet {{key:Right}}, {{key:Left}} of {{key:Up}} hem in plaats daarvan loodrecht op de rode, groene of blauwe richting (druk opnieuw om dat ongedaan te maken).
3. Klik op een punt dat 0° bepaalt, bijvoorbeeld langs een rand.
4. Beweeg naar de gewenste hoek en klik: hij snapt in stappen van 15°. Of typ de hoek in graden, zoals `22.5`, en druk op {{key:Enter}}; de hulplijn gaat naar de kant waar de aanwijzer staat.

De hulplijn loopt door het middelpunt onder die hoek. Teken erlangs met {{ui:Lijn}} voor een dakhelling, een afschuining of een schuine wand.

## Tekenen tegen hulplijnen

Tekengereedschappen snappen aan hulplijnen ("Op hulplijn") en hulppunten ("Hulppunt"), en aan het punt waar een hulplijn een asrichting kruist. Begin een rechthoek waar twee hulplijnen elkaar kruisen om hem precies te plaatsen.

## Hulplijnen verwijderen

- Eén hulplijn: klik erop met {{ui:Selecteren}} en druk op {{key:Delete}}, of klik erop met de {{ui:Gum}}.
- Alle hulplijnen: klik met niets geselecteerd op {{ui:Alle hulplijnen verwijderen}} in {{ui:Entiteitsinformatie}}.

Hulplijnen worden opgeslagen in het `.modelcraft`-bestand. Ze worden niet naar andere formaten geëxporteerd.
