---
title: Een groot model splitsen voor printen
summary: Snijd een model dat te groot is voor uw printer in stukken die op het bed passen, met pennen, sleutels, zwaluwstaarten, penhout- of magneetgaten en het nummer van de verbinding op beide vlakken, en download elk stuk en een montageblad in één zip.
keywords: 3d-printen, splitsen, schuin, schuine snede, hoekige snede, schuin snijden, splitser, snede, te groot, bedformaat, bouwvolume, stukken, onderdelen, verbindingsstukken, pennen, sleutels, zwaluwstaart, penhout, magneet, speling, tolerantie, onderdeelnummers, montage, explosietekening, zip, stl, 3mf, licentie, license, usb-sleutel, dongle
from: ee96ba77
---

Wanneer een model groter is dan het bed van uw printer, knipt **Splitsen voor printen** het in stukken die erin passen, voegt verbindingsstukken toe zodat de stukken op elkaar aansluiten wanneer u ze samenvoegt, en graveert hetzelfde nummer op beide vlakken van elke verbinding. Open {{ui:Exporteren}} › {{ui:Controleren op 3D-printen (STL of 3MF)…}}; de regel **Printtools** in het dialoogvenster heeft {{ui:Splitsen voor printen}}. Het opent als kaart over de weergave.

Het werkt op wat geprint wordt: de selectie, of alles dat zichtbaar is wanneer er niets is geselecteerd. Wat geprint wordt, moet een gesloten volume zijn; als de controle gaten vindt, gebruik dan eerst [Repareren](topic:print-tools#repair).

Het draait in ModelCraft, op uw computer: geen licentieserver, geen usb-sleutel, en niets wordt geüpload.

## Zo snijdt u

- **Op het bed passen, zo weinig mogelijk stukken**: geef de breedte, diepte en hoogte van het bed op (die beginnen bij {{ui:Instellingen}} › ModelCraft › 3D-printer). De kaart laat zien hoeveel stukken er nodig zijn en hoe groot elk is; het model wordt in gelijke stukken gesneden, zo weinig als er passen. Een stuk mag in de bestanden op zijn zij liggen als dat het passend maakt. De verbindingsstukken die uit een stuk steken, tellen mee voor de grootte ervan.
- **Op de plaatsen die ik opgeef**: kies de as waarover u snijdt en typ waar, in mm vanaf het lage eind van het model, met komma's ertussen (`100, 200` maakt drie stukken).
  **Schuin** draait de sneden tot 60° om een van de twee andere assen (bijvoorbeeld een snede over Z, schuin om X): elke schuine snede loopt op zijn plaats door de middellijn van het model, geeft de stukken meer lijmvlak en verbergt de verbinding beter op een hellend vlak. Verbindingsstukken staan haaks op de snede.

De snijvlakken worden als gestreepte lijnen rond het model getekend zolang de kaart open is.

## Verbindingsstukken

Elke plek waar twee stukken elkaar raken, krijgt verbindingsstukken. Die worden zelf geplaatst waar de meeste ruimte is: minstens de **dunste wand** plus de **speling** plus hun eigen grootte van de buitenkant af, en ver genoeg van elke andere snede dat twee gaten nooit samenkomen. Op een lang vlak worden twee verbindingsstukken erlangs verdeeld, zodat de stukken niet kunnen draaien.

- **Ronde pennen**: een pen op het ene stuk (aan de punt afgeschuind), een gat op het andere.
- **Vierkante sleutels**: hetzelfde, maar vierkant, zodat een stuk maar op één manier erop past.
- **Zwaluwstaarten**: een tong die vanaf de zijkant in een sleuf schuift. Waar één uiteinde van de sleuf een andere snede zou raken, stopt de zwaluwstaart eerder en schuift hij in vanaf het open uiteinde. Zwaluwstaarten passen bij sneden in één richting (een rij plakken); gebruik in een raster pennen of penhout.
- **Penhoutgaten**: een gat aan elke kant; de penhoutpennen worden ook geprint (in de zip).
- **Magneetholtes**: een holte aan elke kant voor een ronde magneet met de diameter en dikte die u opgeeft. Controleer de polen voordat u ze erin lijmt.
- **Geen (lijmen)**.

De **speling** is de opening aan elke kant tussen een pen en zijn gat (0.2 mm als start). Ze klopt met het getal dat u opgeeft: ronde gaten worden iets groter gemaakt, zodat hun vlakke zijden, en niet hun hoeken, die opening behouden. Verhoog de speling als de onderdelen van uw printer te strak uitkomen.

Als een verbinding geen ruimte heeft voor een verbindingsstuk (een dunne wand, een klein raakvlak), zegt de kaart dat: lijm die verbinding dan.

## Onderdeelnummers

Met **Nummers van de verbindingen op beide vlakken graveren** aan, krijgt elke verbinding het nummer van de twee stukken, zoals `3-4`, 0.6 mm diep gegraveerd op beide vlakken, elk leesbaar in de juiste richting. De nummers beginnen op 5 mm hoog en worden kleiner om te passen, tot 2.5 mm; een verbinding zonder ruimte voor het nummer wordt vermeld. Stukken worden vanaf de onderste laag naar boven genummerd.

## Voorbeeld, downloaden, het model splitsen

1. {{ui:Voorbeeld}} snijdt het model en laat zien hoeveel stukken, verbindingen en verbindingsstukken er zijn, of elk stuk de controle voor 3D-printen doorstaat en op het bed past, en geeft de grootte van elk stuk. Een ring markeert elk verbindingsstuk en elk nummer in de weergave.
2. {{ui:De stukken downloaden (.zip)}} slaat één zip op: een bestand per stuk (STL of 3MF, naar keuze onder **Bestanden**), elk rechtop op het bed; de penhoutpennen; en het **montageblad**, een afbeelding van de stukken uit elkaar getrokken met hun nummers (`assembly.svg` en `assembly.png`) en een lijst van de stukken en verbindingen (`assembly.txt`).
3. {{ui:Het model splitsen}} zet de stukken in het model in de plaats van de geselecteerde groepen of componenten, met de namen zoals op het montageblad, in één stap: {{ui:Ongedaan maken}} zet het origineel terug. Er moeten groepen of componenten geselecteerd zijn om te splitsen; het downloaden werkt op alles wat geprint kan worden.

## De verbindingsstukken zelf verplaatsen

Na een voorbeeld laat **Verbindingsstukken met de hand** u corrigeren waar de verbindingsstukken komen:

- {{ui:Een verplaatsen}}: klik op een rode ring in de weergave (hij wordt groen) en klik daarna waar hij op de snede moet komen.
- {{ui:Een toevoegen}}: klik in de weergave waar een verbindingsstuk moet komen. Het komt op het snijvlak dat uw klik bereikt, tussen de twee stukken daar.
- {{ui:Een verwijderen}}: klik op een rode ring om dat verbindingsstuk weg te halen.

Elke wijziging wordt opnieuw gecontroleerd, net als de automatische: een plek te dicht bij de contour, een andere snede of een ander verbindingsstuk wordt niet gemaakt, en de kaart zegt dat. {{ui:Weer automatisch}} vergeet uw plekken. Ze blijven behouden zolang het model, de selectie en de sneden gelijk blijven.

Een voorbeeld blijft staan totdat het model, de selectie of een instelling verandert; dan vraagt de kaart u opnieuw een voorbeeld te maken.

:::note
Elk stuk wordt gecontroleerd zoals de controle voor 3D-printen dat zou doen, voordat u downloadt. Uw slicer bepaalt nog steeds hoe elk stuk wordt geprint: bekijk elk stuk daar, en print eerst één verbinding om te zien hoe uw printer met de speling omgaat.
:::
