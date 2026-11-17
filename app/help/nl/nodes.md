---
title: "Knopen: een model bouwen door te verbinden"
summary: Verbind getallen met punten, punten met krommen en krommen met oppervlakken. Verander een getal en alles stroomafwaarts wordt opnieuw opgebouwd. Elke knoop is ook een regel CraftScript, en de graaf wordt in het bestand opgeslagen.
keywords: knopen, knooneditor, visueel scripten, parametrisch, graaf, draden, poorten, vrije vorm, freeform, nurbs, loft, extruderen, omwentelen, cirkel, kromme, oppervlak, reeks, bereik, willekeurig, lijst, script, craftscript, grasshopper
from: 9c8e254f
---

De editor **Knopen** bouwt geometrie door dozen aan elkaar te koppelen. Elke doos (een knoop) doet één klein werkje: een getal maken, een punt, een cirkel, een loft. U verbindt het resultaat van de ene met de invoer van de volgende, en het model volgt wanneer u een getal aan het begin verandert.

Open hem via het paneel rechts: {{ui:Knopen}} › {{ui:Nodes…}}. Een bestand dat al een graaf heeft, opent die vanzelf. Het is een venster over de 3D-weergave: sleep aan de titelbalk om het te verplaatsen, sleep aan de hoek om het te vergroten of te verkleinen.

## Verbinden

1. Kies een knoop uit de lijst links (typ in het zoekveld om de lijst te beperken; <kbd>Enter</kbd> voegt de eerste overeenkomst toe). Ze verschijnt in het midden van het canvas.
2. Sleep van een rond **uitvoer**-puntje rechts van de ene knoop naar een rond **invoer**-puntje links van een andere. Het puntje wordt groen als het past en rood als het niet past. Wijs erop voor de reden.
3. Een invoer waar niets aan vastzit, toont een vakje voor een getypte waarde. Typ een getal en druk op <kbd>Tab</kbd>: het resultaat wordt opnieuw opgebouwd.
4. Het kleine rondje in de titelbalk van een knoop is haar **oog**. Een knoop met het oog aan wordt in de 3D-weergave getekend: als lijnen voor krommen, gearceerd voor oppervlakken en als stippen voor punten.

Sleep een knoop aan haar titelbalk. Sleep de achtergrond om te verschuiven en draai aan het wieltje om te zoomen. <kbd>Delete</kbd> verwijdert de geselecteerde knoop. {{ui:Opruimen}} rangschikt de knopen in kolommen, {{ui:Passend maken}} brengt ze allemaal in beeld, en {{ui:Ongedaan maken}} en {{ui:Opnieuw}} lopen uw bewerkingen stap voor stap terug en vooruit.

## Typen en eenheden

Poorten hebben een type: getal, ja/nee, punt, vector, kromme, oppervlak, mesh, volume, of "geometrie" voor een van die. Een punt kan naar een vectorinvoer en weer terug. Getallen dragen een eenheid: een **lengte** is in millimeters en een **hoek** is in graden. Een lengte kan niet naar een hoek, en een lengte maal een lengte (een oppervlakte) wordt geweigerd. Zo wordt een verkeerde draad al tegengehouden wanneer u hem maakt.

Een vierkant puntje is een **lijst**. Wanneer een lijst bij een invoer met één waarde aankomt, draait de knoop één keer voor elk item, en het resultaat wordt een lijst. De kortere lijst herhaalt zijn laatste item. Bijvoorbeeld: een **Reeks** van hoogtes naar **Verplaatsen** maakt een stapel kopieën.

## Volumes en booleaanse bewerkingen als knopen

De groep **Volumes** maakt gesloten lichamen uit dezelfde exacte oppervlakken als het paneel Oppervlakken: **Doosvolume**, **Cilindervolume** en **Bolvolume** (maten in mm), **Vereniging**, **Aftrekken** en **Snijden** (het tweede volume wordt van het eerste genomen; de tolerantie is hoe ver de driehoeken van de volume-engine van de exacte oppervlakken mogen liggen), **Afronding tussen vlakken** (de vlakken via hun nummer in het volume, 1 voor het eerste; een straal en, boven 0, een straal aan het eind), **Volume-inhoud** (mm³) en **Volume naar mesh** (om het te zien of om het om te zetten). Een volume heeft een eigen poorttype: een punt of getal kan niet op een volume-invoer worden aangesloten, en het puntje blijft rood. De booleaanse knopen en de afrondingsknoop gebruiken de eigen volume-engine van het programma, die de eerste keer wordt geladen wanneer de editor opent.

## Fouten

Een knoop die haar werk niet kan doen, zegt onder haar naam in rood waarom ("De straal moet groter zijn dan nul."), en de knopen erna wachten. Hetzelfde bericht staat als een probleem in het paneel Problemen, zodat u het van daaruit kunt vinden.

## Elke knoop is een regel script

Druk op {{ui:Script}} om de graaf als CraftScript te zien: één regel per knoop, zoals `n3 = nd_circle(n2, n1, [0 0 1]);`. Bewerk de tekst en druk op {{ui:De graaf maken uit dit script}} om hem weer als graaf terug te halen. Dezelfde `nd_`-functies werken in een CraftScript in PartCraft, dus een graaf kan daar worden uitgevoerd, in een lus gezet of getest. Willekeurige getallen krijgen altijd een **seed**, zodat dezelfde graaf op elke computer hetzelfde resultaat geeft.

## Opgeslagen met het bestand

De graaf wordt opgeslagen in het modelbestand. De knopen maken hun eigen krommen, oppervlakken en meshes: ze veranderen de vlakken van het model pas als u daarom vraagt.

## Omzetten naar model

Zet het oog aan van een knoop die een oppervlak of mesh maakt, en druk daarna in het venster Knopen op {{ui:Omzetten naar model}}. Elk getoond oppervlak of mesh wordt een groep vlakken in het model, in meter, die u net als elk ander kunt bewerken. Het is één stap van Ongedaan maken. De graaf blijft bestaan, maar de kopie volgt haar niet meer: verander een getal en zet opnieuw om voor een nieuwe. Punten en krommen zijn geen volumes, dus die worden overgeslagen, en het bericht zegt hoeveel.
