---
title: Een .3dm-model importeren
summary: Importeer een .3dm-bestand met zijn meshes, oppervlakken, krommen, blokken, lagen en kleuren; waar de driehoeken vandaan komen en wat wordt weggelaten.
keywords: 3dm, importeren, nurbs, polyvlak, brep, oppervlakken, rendermesh, extrusie, krommen, blokken, lagen, labels, kleuren, eenheden, overschakelen, migreren
from: 3cf29879
---

ModelCraft leest `.3dm`-bestanden met zijn eigen lezer, in de pagina. Er wordt niets geüpload, en het werkt offline wanneer ModelCraft dat ook doet. Bestanden opgeslagen in de indelingen van versie 5, 6, 7 en 8 zijn getest; oudere (versies 2 tot 4) zouden ook moeten openen, maar die zijn nog niet getest.

## Het bestand importeren

1. Klik op {{ui:Importeren}} in de groep {{ui:Bestand}} (of zet het `.3dm`-bestand op de 3D-weergave).
2. Kies het bestand.

   De statusbalk meldt "chair.3dm wordt gelezen…" terwijl het leest, en daarna wat er binnenkwam, bijvoorbeeld "chair.3dm geïmporteerd: 14 meshes (8330 vlakken), 8 krommen, 5 blokplaatsingen, 3 lagen als labels. Oppervlakken: 7 vlakken uit de meshes die in het bestand zijn opgeslagen, 29 getessellateerd door CadCraft."

Het hele model komt binnen als één groep met de naam van het bestand, geselecteerd, en het beeld zoomt erop in. Eén keer {{key:Mod+Z}} haalt alles weer weg, inclusief de labels.

## Waar de driehoeken vandaan komen

ModelCraft werkt met vlakken en meshes, dus elk oppervlak in het bestand komt binnen als een [mesh](topic:meshes) van kleine vlakke driehoeken. Voor elk vlak van een polyvlak (en elke extrusie) neemt ModelCraft, in deze volgorde:

1. **De rendermesh die in het bestand is opgeslagen.** De meeste modelleerprogramma's slaan bij elk oppervlak de mesh op die ze op het scherm toonden; als die er is, gebruikt ModelCraft die zoals hij is.
2. **Zijn eigen tessellatie**, wanneer het bestand geen opgeslagen mesh heeft: vlakken, NURBS-oppervlakken, omwentelingsoppervlakken (bollen, kegels, torussen, draaivormen), geëxtrudeerde krommen en extrusies (met hun gaten en eindvlakken), begrensd door hun randen. Vlakken van één polyvlak delen hun randpunten, zodat een gesloten polyvlak als gesloten mesh binnenkomt. Gebogen gebieden worden gesplitst totdat de driehoeken binnen ongeveer 0.15 % van de grootte van het object van het echte oppervlak liggen.
3. **Niets**, voor een vlak van een soort oppervlak dat ModelCraft nog niet leest. De statusbalk zegt hoeveel vlakken het zijn, en van welke soort.

Het deel "Oppervlakken:" van de statusbalk zegt hoeveel vlakken uit opgeslagen meshes kwamen en hoeveel ModelCraft zelf getessellateerd heeft. Randen binnen één vlak van het bestand zijn zacht en randen tussen twee vlakken scherp, zodat een gebogen vlak glad schaduwt.

:::tip
Voor de meest getrouwe vormen slaat u het bestand met zijn rendermeshes op in het programma dat het heeft gemaakt (dat is meestal de standaard; een optie "save small" laat ze weg).
:::

## Wat er binnenkomt

- **Meshes** met hun hoekpuntkleuren en textuurcoördinaten.
- **Polyvlakken, oppervlakken en extrusies**, zoals hierboven beschreven.
- **Krommen** (lijnen, polylijnen, bogen, cirkels, NURBS-krommen en krommen die daaruit zijn samengevoegd) als [randen](topic:curves), één groep randen per laag.
- **Blokken** worden [componenten](topic:groups-components): elke plaatsing van een blok is een plaatsing van één component, dus het bewerken van één kopie wijzigt ze allemaal. Blokken in blokken blijven behouden.
- **Lagen** worden [labels](topic:tags) met de volledige naam van de laag ("Furniture::Chairs"), verborgen wanneer de laag uit stond. De plaatsing van elk object draagt het label van zijn laag.
- **Kleuren.** De kleur van een object komt uit waar het bestand aangeeft: de eigen kleur, die van de laag, of de basiskleur van het materiaal. Die wordt de verf van zijn vlakken.
- **Verborgen objecten komen verborgen binnen**; {{ui:Alles weer tonen}} toont ze.
- **Eenheden:** het bestand geeft zijn eenheid aan; het model komt binnen op zijn echte grootte.

## Wat wordt weggelaten (en gemeld)

Het deel "Notes:" van de statusbalk noemt alles wat niet is binnengekomen, met het aantal:

- punten en puntenwolken, tekst, tekstpunten, maatvoering, leiders, arceringen, lampen, afknipvlakken en indelingsdetails;
- SubD-objecten: zet ze eerst om in meshes of polyvlakken in het programma dat het bestand maakte;
- vlakken op verschoven oppervlakken en andere oppervlaktesoorten die ModelCraft nog niet leest, wanneer het bestand er geen mesh voor heeft opgeslagen;
- blokken die vanuit andere bestanden zijn gekoppeld (alleen het bestand dat u importeert wordt gelezen);
- extrusies met schuine (verstek) uiteinden; die komen binnen met vierkante uiteinden.

Materiaaltexturen, renderinstellingen, benoemde weergaven, groepen en gebruikerstekst worden niet gelezen; een materiaal geeft alleen zijn basiskleur.

## Limieten

Bestanden tot 300 MB. Een beschadigd bestand zegt wat er mis is en voegt niets toe; één object dat niet gelezen kan worden, wordt weggelaten en geteld, en de rest komt binnen.
