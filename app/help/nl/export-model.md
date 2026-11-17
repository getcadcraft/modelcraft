---
title: Een model exporteren voor andere programma's
summary: Kies de juiste export voor renderen, het web, 3D-printen, BIM en BimCraft, en controleer wat elk behoudt.
keywords: afdrukken, 3mf, pdf, papier, afbeelding, png, plaatje, schermafbeelding, renderen, weergave opslaan, exporteren, delen, render, rendering, gltf, glb, collada, dae, obj, stl, 3d-printen, ifc, bim, bimcraft, versturen, andere software
from: 9e13e80d
---

Exporteren maakt een kopie van het model in een ander formaat. Bewaar ook uw `.modelcraft`-bestand: het is het enige bestand dat alles behoudt, en het enige dat ModelCraft rechtstreeks opent.

## Exporteren

1. Sla eerst op ({{key:Mod+S}}), zodat uw werkbestand veilig is.
2. Klik op {{ui:Exporteren}} in de groep {{ui:Bestand}}.
3. Kies het formaat. De browser downloadt het, met de naam van het model.

Het hele model wordt geëxporteerd. Om één onderdeel te exporteren: sla op, wis de rest, exporteer, en maak daarna ongedaan of open opnieuw.

## Welk formaat

| U wilt | Kies | Toelichting |
|---|---|---|
| Het openen in een ander 3D-modelleerprogramma | {{ui:Collada (.dae)}} | Behoudt groepen, geneste groepen, componenten (gedeeld, niet gekopieerd), namen en kleuren. Z omhoog, meters. |
| Het renderen, of gebruiken in een visualisatieprogramma | {{ui:OBJ (.obj)}} of {{ui:glTF binair (.glb)}} | OBJ wordt het breedst gelezen; het schrijft elke groepsplaatsing als apart object, maar heeft geen kleuren en geen gedeelde componenten. glTF behoudt componenten en kleuren. |
| Op het web zetten, in een game-engine of in AR | {{ui:glTF binair (.glb)}} | Één bestand met alles erin. |
| 3D-printen | {{ui:Controleren op 3D-printen (STL of 3MF)…}} | Controleert of het model gesloten is en de juiste kant op wijst, en schrijft daarna STL of 3MF in millimeters. Zie [Een model klaarmaken voor 3D-printen](topic:print-3d). {{ui:STL voor printen (.stl, millimeters)}} schrijft het hele model zonder de controle. |
| Openen in BimCraft of een ander BIM-programma | {{ui:IFC voor BimCraft (.ifc)}} | Elke groep of component op het hoogste niveau wordt één bouwelement. |

De statusbalk bevestigt elke export, bijvoorbeeld "House.stl geëxporteerd (millimeters)." of "House.dae geëxporteerd (Collada 1.4.1, Z omhoog, meters; componenten blijven gedeeld)."

## Voordat u exporteert

- **Groepeer uw objecten.** Collada, glTF en IFC houden groepen en componenten als aparte objecten. Losse geometrie gaat eruit als één klomp; in IFC wordt die één element met de naam "Loose geometry".
- **Geef ze namen.** Groeps- en componentnamen gaan naar Collada en IFC, dus een wand die "North wall" heet, komt aan als "North wall".
- **Controleer de richting van vlakken.** Vlakken die aan de buitenkant blauwgrijs tonen, wijzen in de export naar binnen. Repareer ze met {{ui:Vlak omkeren}} (zie [Wissen en opruimen](topic:erase#a-face-facing-the-wrong-way)).
- **Voor printen** maakt u de onderdelen gesloten volumes: selecteer elke groep en controleer of {{ui:Entiteitsinformatie}} "Volume: Ja" zegt. Schaal daarna het model naar de geprinte grootte, of schaal het in de printersoftware.

## Een model naar BimCraft sturen

1. Maak van elk gebouwdeel een groep of component en geef het een naam.
2. Kies {{ui:Exporteren}}, en daarna {{ui:IFC voor BimCraft (.ifc)}}.
3. Open het gedownloade `.ifc`-bestand in BimCraft.

Voor conceptuele massastudies gebruikt u in plaats daarvan {{ui:Exporteren}} › {{ui:Massa naar BimCraft…}}: elke groep gaat als massastudie-optie mee, met verdiepingen, vloeroppervlakken en volume. Zie [Massa naar BimCraft sturen](topic:massing-to-bimcraft).

De gewone IFC-export heeft geen directe koppeling tussen de twee apps. De IFC heeft één verdieping, en elk element is een generieke bouwelement-proxy zonder type of eigenschappen: het bevat alleen vorm en naam. Gesloten groepen worden volumevormen; open groepen worden oppervlakken.

## Lijnen zonder vlakken

Randen die geen deel uitmaken van een vlak (hulplijnachtige lijnen, een geïmporteerd terreinplan) gaan naar OBJ en Collada als lijnen. glTF en STL hebben er geen plaats voor en laten ze weg. Hulplijnen en scènes worden niet naar enig formaat geëxporteerd.

## De weergave als afbeelding opslaan

{{ui:Exporteren}} › {{ui:Afbeelding van de weergave (.png)}} slaat precies op wat de 3D-weergave toont, op de grootte op het scherm. {{ui:Afbeelding op twee keer de grootte (.png)}} slaat hem twee keer zo breed en twee keer zo hoog op (voor print of een scherpe presentatie), waarbij maatvoeringen en markeringen op die grootte opnieuw worden getekend in plaats van uitgerekt.

Voor een foto die op daglicht lijkt (lucht, zon, zachte schaduwen, glas), gebruikt u in plaats daarvan {{ui:Exporteren}} › {{ui:Een afbeelding renderen…}}: zie [Een afbeelding renderen](topic:render).

Voor een schone afbeelding schakelt u eerst [presentatieweergave](topic:styles-shadows#presentation-view) in ({{key:Shift+P}}): de assen, hulplijnen, doorsnede-omtrekken en de selectie worden weggelaten. Stel de camera, stijl en schaduwen in zoals u ze wilt, of ga naar een [scène](topic:scenes); om een bewegende film van uw scènes op te slaan, gebruikt u {{ui:Animatie exporteren}} in het paneel {{ui:Scènes}}.

## De weergave afdrukken, of opslaan als PDF

- {{ui:Exporteren}} › {{ui:PDF van de weergave (.pdf)}} slaat een PDF van één pagina op: de weergave op twee keer de schermgrootte, met zijn maatvoeringen, op een A4-pagina (Letter wanneer het model in voet en duim is), liggend, met een regel eronder met de bestandsnaam, de datum en de eenheid.
- {{ui:Exporteren}} › {{ui:De weergave afdrukken…}} zet dezelfde pagina in het afdrukvenster van uw browser. Kies een printer, of "Opslaan als PDF".

De pagina toont de weergave zoals hij is: bij een perspectiefweergave is er geen schaal. Voor een tekening op schaal schakelt u {{ui:Perspectief}} uit en kijkt u vanuit {{ui:Boven}} of {{ui:Voor}}, en voegt u [maatvoeringen](topic:dimensions) toe voor de maten die ertoe doen. [Presentatieweergave](topic:styles-shadows#presentation-view) laat de assen, hulplijnen en de selectie weg; maatvoeringen blijven staan.
