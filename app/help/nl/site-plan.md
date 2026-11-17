---
title: Modelleren op een situatietekening uit een DWG of DXF
summary: Haal een CAD-situatie- of plattegrondtekening binnen als lijnen op de grond, beantwoord de vraag over eenheden, en traceer ze tot vlakken en massa's.
keywords: situatietekening, dwg, dxf, cad, importeren, schets, handschets, schetsfoto, foto, papier, pennenkleuren, dynamische blokken, zichtbaarheidstoestanden, tekst, arcering, spline, ellips, 3D-vlak, traceren, plattegrond, kavel, perceelsgrens, eenheden, onderlegger, context
from: 3415dc96
---

ModelCraft kan de lijnen van een 2D-CAD-tekening, een situatietekening of een plattegrond binnenhalen, en ze op de grond leggen zodat u erbovenop kunt modelleren.

## De tekening importeren

1. Klik op {{ui:Importeren}} in de groep {{ui:Bestand}} (of zet het bestand op de 3D-weergave).
2. Kies een `.dwg`- of `.dxf`-bestand.

   Een grote DWG kost even tijd: de statusbalk toont "plan.dwg wordt gelezen…" totdat hij binnen is.

3. Als de tekening niet zegt wat haar eenheden zijn, vraagt een dialoogvenster met de titel "Tekeningeenheden": "Wat is één tekeneenheid?" Kies {{ui:Inches}}, {{ui:Voeten}}, {{ui:Millimeters}} of {{ui:Meters}}. De meeste Amerikaanse situatietekeningen zijn in voet getekend, architectonische plannen in inches, en metrische plannen in millimeters.

   De tekening komt binnen als een groep randen op de grond, geselecteerd, en de weergave zoomt erop in. De statusbalk zegt hoeveel randen er binnenkwamen, bijvoorbeeld "Imported site.dwg: 1697 edges on the ground, in a group. Explode it to draw on it directly." — in het Nederlands: "site.dwg geïmporteerd: 1697 randen op de grond, in een groep. Ontbind hem om er direct op te tekenen."

## Wat binnenkomt

- Lijnen, polylijnen (inclusief hun bogen), cirkels en bogen, en blokken met alles erin, alleen uit **modelruimte**. Krommen worden korte rechte stukken.
- Lijnen, polylijnen, bogen, cirkels, ellipsen en splines komen plat op de grond, als randen.
- **Arceringen** worden vlakken op de grond, met hun eilanden als gaten, zodat u een gearceerd gebied meteen kunt duwen/trekken.
- **3D-vlakken** en gevulde volumes worden vlakken; 3D-vlakken behouden hun hoogten.
- **Tekst** (enkelregelige tekst, meerregelige tekst en attribuutwaarden) wordt getekend als randen in een eenvoudig eenlijnig lettertype, op de eigen hoogte, hoek en uitlijning van de tekst. Het lettertype is niet dat van de tekening, dus de woorden kunnen iets langer of korter zijn. Tekens waarvoor het lettertype geen vorm heeft, worden getekend als kleine vakjes en geteld.
- **Maatvoering** wordt getekend zoals de tekening die toont (hun maatlijnen, pijlpunten en tekst, als randen en vlakken).
- **Dynamische blokken** komen binnen zoals de tekening ze toont: elk geplaatst blok in de zichtbaarheidstoestand waarin het is opgeslagen, en alleen de lijnen van die toestand. De statusbalk somt ze op met de getoonde toestanden en de andere toestanden die elk heeft, bijvoorbeeld "Stopcontact getoond als Duplex ×38, GFI ×7 (toestanden: Duplex, GFI)". ModelCraft wisselt de toestanden niet.
- **3D-volumes, gebieden en lichamen** (de ACIS-gegevens van de tekening) komen binnen als eigen groepen: een gesloten volume als volume, een gebied of open lichaam als vlakken. Vlakke vlakken komen compleet binnen; gebogen vlakken (cilinders, kegels, bollen, torussen, eenvoudige spline-oppervlakken) als kleine driehoeken met zachte randen ertussen, zodat alleen de eigen randen van het volume zichtbaar zijn. Een vlak op een ander soort oppervlak wordt weggelaten en vermeld: "Nog niet getekend (3D-volumes): …".
- Niet geïmporteerd: punten, tabellen, multileaders, afbeeldingen en andere objecttypen. De statusbalk somt ze op per type, zoals "Niet geïmporteerd: 12 POINT." Alles op een indeling (papierruimte) wordt ook weggelaten, zonder dat het wordt vermeld.
- Lagen worden niet bewaard: alle lijnen komen gelijk binnen.

Als de tekening ver van haar oorsprong ligt (bijvoorbeeld in state plane-coördinaten), wordt ze nog steeds geïmporteerd, maar ze kan ver van de oorsprong van ModelCraft terechtkomen. Tekeningen die verder dan 10,000 km van hun oorsprong liggen, worden geweigerd: verplaats de tekening eerst in het CAD-programma dichter naar 0,0.

## Traceren tot vlakken

De geïmporteerde lijnen sluiten zelden vanzelf netjes tot vlakken. Twee manieren om te werken:

**De plattegrond als onderlegger houden (aanbevolen)**

1. Laat de plattegrond als eigen groep staan.
2. Teken uw gebouw erbovenop met {{ui:Rechthoek}} en {{ui:Lijn}}, en vastklik aan de hoeken van de plattegrond ("Eindpunt") en aan de randen ("Op rand").
3. Duw/trek uw vlakken omhoog. De plattegrond blijft eronder onaangeroerd, en u kunt de hele groep later met één klik wissen.

Vastklikken werkt over groepen heen: u kunt aan de hoeken van de plattegrond vastklikken zonder hem te openen.

**Tekenen op de eigen lijnen van de plattegrond**

1. Selecteer de plattegrondgroep en klik op {{ui:Ontbinden}}. Haar lijnen worden losse randen.
2. Waar een gesloten contour een vlak moet zijn, teken dan met {{ui:Lijn}} een lijn over een van de randen, van hoek tot hoek. Als de contour gesloten en vlak is, vult het vlak zich meestal. Zo niet, zoek dan naar een gat of een overlap in de contour en teken eroverheen.
3. Duw/trek het omhoog.

Dit werkt het best op een schone plattegrond. Bij een drukke opmeting is tekenen erbovenop sneller.

## Problemen

- "This is a binary DXF…" — Dit is een binaire DXF. Sla de DXF opnieuw op vanuit het CAD-programma als ASCII (tekst) en probeer het opnieuw.
- "…has no lines, arcs or circles in model space to bring in." — De tekening staat waarschijnlijk helemaal op indelingen, of bestaat alleen uit tekst en arceringen.
- "This drawing could not be read (…)…" — Deze tekening kon niet worden gelezen (…). Ze is mogelijk beschadigd, of opgeslagen in een DWG-versie die de lezer niet ondersteunt. De haakjes zeggen waarom, bijvoorbeeld "DWG-versie AC1009 wordt niet ondersteund". Sla hem op als DXF, of als DWG van AutoCAD 2000 tot 2018, vanuit het CAD-programma.
- De plattegrond is het verkeerde formaat: u koos de verkeerde eenheid. Maak ongedaan ({{key:Mod+Z}}) en importeer opnieuw, of [schaal](topic:rotate-scale) de groep met de juiste factor (12 tussen voet en inches, 25.4 tussen inches en millimeters).

Om hoogtelijnen om te zetten in grond die u kunt boetseren, zie [Terrein](topic:terrain).

## Uit een foto van een handschets

**Bestand › Een schetsfoto importeren…** neemt een foto van een schets op papier (JPEG, PNG of TIFF; rechtstreeks van een telefoon is prima) en maakt er dezelfde soort randen op de grond van. Geef aan welk papier het is (of laat het het blad zoeken, aangenomen als A4) en de schaal van de schets, bijvoorbeeld 1 : 100. De rand van het papier wordt gevonden en de foto recht getrokken, de inkt wordt getraceerd tot lijnen en bogen, en elke pennenkleur (zwart, rood, blauw, groen) wordt een eigen groep met een tag (**Schets zwart**, **Schets rood**, …), allemaal binnen één groep die naar de foto is genoemd. Het is één stap ongedaan maken, en alles gebeurt op deze computer: er wordt niets ergens naartoe gestuurd.

Wanneer geen papierrand kan worden gevonden, wordt de hele foto als blad genomen en zegt de statusregel dat; meet iets wat u kent en schaal de groep als hij niet klopt. Traceer de lijnen tot vlakken zoals hierboven.
