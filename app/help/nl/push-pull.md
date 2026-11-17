---
title: Vlakken duwen en trekken tot volumes
summary: Maak van een vlak een doos, maak een gebouw hoger of lager, voeg een erker of een uitsparing toe, en herhaal een afstand met een dubbelklik.
keywords: duwen trekken, extruderen, hoogte, volume, doos, massa, hoger, uitsparing, uitsteeksel, herhalen, dubbelklik, niveau, op vlak, gelijk, zelfde hoogte
from: dc093c91
---

{{ui:Duwen/trekken}} ({{key:P}}) verplaatst een vlak langs zijn eigen richting: omhoog en omlaag voor een vloer, naar binnen en naar buiten voor een wand. Wat er gebeurt, hangt af van het vlak.

## Een volume maken van een vlak

1. Teken een vlak, bijvoorbeeld een rechthoek op de grond ([Vlakken tekenen](topic:draw-faces)).
2. Druk op {{key:P}}.
3. Beweeg over het vlak. Het licht op.
4. Klik op het vlak en beweeg daarna de aanwijzer. Het vlak stijgt (of zakt) en er groeien zijden vanaf de randen. Het waardeveld ({{ui:Afstand}}) en de tip tonen de afstand.
5. Klik om af te ronden, of typ een afstand en druk op {{key:Enter}}: `3m`, `10'`, `2700` in een model in millimeter.

   U hebt nu een gesloten volume. Selecteer alles en groepeer het (zie [Groepen en componenten](topic:groups-components)): {{ui:Entiteitsinformatie}} toont daarna "Volume: Ja" en het volume.

Een los vlak kan twee kanten op: trek het omhoog voor een massa boven de grond, of duw het omlaag voor een put of een fundering.

:::tip
In plaats van twee keer te klikken, drukt u op het vlak, sleept u en laat u los. Op een touchscreen is dat de natuurlijke manier: indrukken, slepen, loslaten.
:::

## Trekken tot de hoogte van iets anders

Terwijl u trekt, beweegt u over een hoek, een middelpunt van lijn, een rand of een hulplijn van een ander deel van het model. Het vlak springt naar die hoogte en een markering toont het punt. Gebruik dit om twee blokken even hoog te maken, of om te stoppen bij een hulplijn die u hebt geplaatst met het [meetlint](topic:guides-measure).

U kunt ook over een vlak bewegen dat evenwijdig is aan het vlak dat u duwt, zoals de bovenkant van een ander blok of de bovenkant van de doos waarop een paal staat. De tip zegt "Op vlak", en het vlak dat u duwt eindigt er gelijk mee. Duw bijvoorbeeld het binnenvlak van een buis omlaag tot het gelijk is met de doos onder de buis.

Een vlak onder een hoek met het vlak dat u duwt, bepaalt geen niveau. De afstand volgt de aanwijzer. Dat geldt ook voor een vlak achter het vlak dat u duwt.

Wanneer een geduwd vlak weer gelijk eindigt met de vlakken eromheen, verdwijnen de zijden. Er blijven geen zijden van nulhoogte over, en de contour die u tekende blijft op het vlak, zodat u het later opnieuw kunt duwen. Om het weer één vlak te maken, wist u de randen van de contour met de {{ui:Gum}}: de twee vlakken worden samengevoegd.

## Een doos hoger of lager maken

Duw of trek de bovenkant van een doos. Omdat de zijden er al recht omhoog vanaf lopen, verplaatst de bovenkant eenvoudig mee: de doos wordt hoger of lager, en er worden geen nieuwe randen gemaakt.

- De bovenkant helemaal naar de onderkant duwen verwijdert de doos. ModelCraft stopt bij nulhoogte; het keert de doos nooit binnenstebuiten.
- Hetzelfde geldt voor elk vlak waarvan alle buren langs zijn richting lopen, zoals het eind van een wand.

## Een erker of een uitsparing toevoegen

1. Teken een rechthoek op de zijkant van een doos (begin hem op het vlak; hij blijft in het vlak liggen).
2. Druk op {{key:P}} en trek de nieuwe rechthoek **naar buiten**. Er wordt materiaal aan toegevoegd: een erker, een schoorsteen, een luifel.
3. Of duw hem **naar binnen**. Er ontstaat een uitsparing: een portiek, een nis, een ingetrokken entree.

Wanneer de zijden van het nieuwe deel uitlijnen met vlakken die er al zijn, versmelten ze tot één vlak, zodat u geen losse lijnen op een vlakke wand krijgt.

## Helemaal doorduwen

Een vlak in een volume duwen stopt bij het eerste vlak erachter. Wanneer het dat vlak bereikt, snijdt het er een opening doorheen. Zo maakt u ramen en deuren in een wand met dikte. Zie [Een opening door een wand snijden](topic:openings).

## Een afstand typen

Typ na het klikken op het vlak de afstand en druk op {{key:Enter}}.

- De getypte afstand gaat de richting op waarin u bewoog. Als u nog niet hebt bewogen, gaat hij naar de voorkant van het vlak (uit een volume, omhoog vanaf de grond).
- Typ een negatief getal, zoals `-500`, om de andere kant op te gaan.
- Als u zich bedenkt voordat u klikt, druk op {{key:Esc}}. Het vlak keert terug.

## De laatste afstand herhalen

Dubbelklik na één duwen/trekken op een ander vlak terwijl {{ui:Duwen/trekken}} nog geselecteerd is. Het verplaatst zich over dezelfde afstand. Zo geeft u snel meerdere wanden of meerdere vloeren dezelfde dikte of hoogte.

ModelCraft onthoudt de afstand totdat u naar een ander gereedschap overschakelt.

## Wat u moet weten

- Duwen/trekken werkt op één vlak tegelijk. Als u op iets klikt dat geen vlak is, zegt de statusbalk "Duwen/trekken werkt op een vlak. Klik op een vlak."
- Om een vlak in een groep of component te duwen of te trekken, opent u die eerst (dubbelklik erop).
- Met **Botsen** aan, stopt een duw- of trekbeweging die een ander volume raakt op het punt van contact, en de tip zegt wat hij raakt (de naam van het object, of "losse geometrie in deze groep") en markeert de vlakken waar hij op stuitte. Een holte die u in het eigen volume duwt (bijvoorbeeld een verschoven vlak dat weer omlaag is gedrukt) hoort bij dat volume en wordt nooit door de wanden gestopt.
- Twee volumes die in elkaar worden geduwd, snijden of verbinden elkaar niet: hun vlakken gaan er gewoon doorheen. Zie [Nog niet beschikbaar](topic:not-built-yet).
