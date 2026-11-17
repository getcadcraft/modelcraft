---
title: Verven met kleuren en materialen
summary: Geef vlakken, groepen en componenten een effen kleur of een materiaal zoals baksteen, gevelbekleding, dakshingles of hout, en behoud ze bij het exporteren.
keywords: verven, kleur, kleuren, materiaal, materialen, textuur, texturen, baksteen, gevelbekleding, dakshingles, dakbedekking, hout, steen, tegel, beton, stucwerk, gras, grind, glas, metaal, verfemmer, vullen, monster, pipet, standaard, glb, obj, mtl, collada
from: b1500523
---

Kleuren helpen u delen van een model uit elkaar te houden, en **materialen** (baksteen, gevelbekleding, dakbedekking, hout, steen, tegel, beton, stucwerk, gras, glas, metaal) laten het eruitzien alsof het van die materialen is gebouwd. Beide worden op dezelfde manier geverfd.

## Een kleur kiezen

Het gedeelte {{ui:Kleuren}} aan de rechterkant toont een rij effen kleuren, {{ui:Standaard}} (de doorgestreepte: geen kleur) en een {{ui:+}}-staal voor elke andere kleur. Klik op een kleur om die de huidige kleur te maken. Het gereedschap Verven begint ermee.

## Verven

1. Druk op {{key:B}} ({{ui:Verven}}), of klik op een kleur als er niets is geselecteerd. (Als er iets is geselecteerd, verft een klik op een kleur de selectie meteen.)
2. Klik op een vlak om het te verven.
3. Klik op een groep of een component om die kopie te verven: de vlakken die nog geen eigen kleur hebben, nemen deze kleur over. Vlakken die u erin hebt geverfd, behouden hun kleur.

Om meerdere dingen tegelijk te verven, selecteert u ze eerst en klikt u daarna op een kleur, of klikt u op een van hen met {{ui:Verven}}. Het is één stap ongedaan maken.

| Houd ingedrukt | En klik op een vlak | Wat wordt geverfd |
|---|---|---|
| — | | Dat vlak |
| {{key:Ctrl}} | | Elk verbonden vlak met dezelfde kleur |
| {{key:Shift}} | | Elk vlak in die kleur in de groep waarin u werkt |
| {{key:Alt}} | | Niets: u neemt die kleur over |

Om een vlak weer zonder kleur te maken, kiest u {{ui:Standaard}} en klikt u erop.

## Verven met een materiaal

Het gedeelte {{ui:Materialen}}, onder {{ui:Kleuren}}, toont de materiaalbibliotheek per soort: baksteen en blokken, gevelbekleding, dakbedekking, hout, steen, tegel, beton, stucwerk, grond, glas en metaal. Ga met de muisaanwijzer over een kleurstaal om de naam te zien. Klik op een materiaal en verf er daarna precies zo mee als met een kleur: {{key:B}}, en klik op vlakken, groepen of componenten; of selecteer eerst en klik op het materiaal.

- In de stijl **Gearceerd** tonen de vlakken de textuur van het materiaal. Verborgen lijnen, draadmodel en röntgen tonen de kleur ervan.
- Texturen lopen **horizontaal over elk vlak** en **omhoog erop**: bakstenen lagen blijven horizontaal op elke wand, dakshingles lopen langs de helling van een dak, planken op een vloer volgen de rode as. Ze hebben hun echte grootte (een baksteen is ongeveer 215 mm lang), zodat ze op elke afstand goed lijken.
- In een [gerenderde afbeelding](topic:render) behouden materialen hun textuur, ruwheid en, bij glas en metaal, hun glans.
- {{key:Alt}}-klik met {{ui:Verven}} neemt ook het materiaal van een vlak over.

De texturen zijn door ModelCraft zelf getekend, dus ze werken offline en mogen voor alles worden gebruikt (CC0).

## Componenten en kleuren

Een kleur die op een vlak **binnen** een component is geverfd, is op elke kopie zichtbaar, omdat de kopieën één definitie delen. Een kleur die op een **kopie** van buitenaf is geverfd (met de component gesloten) hoort alleen bij die kopie, dus twee kopieën van één component kunnen verschillende kleuren hebben. {{ui:Entiteitsinformatie}} toont de kleur van een geselecteerd vlak, groep of component.

## Kleuren in bestanden

- Het ModelCraft-bestand bewaart elke kleur en elk materiaal.
- Andere formaten krijgen de **kleur van een materiaal** (de uitstraling op afstand) in plaats van de textuur: glTF, Collada, OBJ, DWG en DXF, en de controle op 3D-printen. In glTF, Collada en OBJ behoudt het materiaal zijn naam, zoals `Material_brick-red`.
- **glTF (.glb)** en **Collada (.dae)**: elke kleur wordt een materiaal. Een component die in verschillende kleuren wordt getoond, wordt één keer per kleur geschreven. glTF schrijft geïmporteerde texturen ook als texturen weg.
- **OBJ**: exporteren downloadt twee bestanden, het `.obj` en een `.mtl`-materiaalbestand met de kleuren. Bewaar ze in dezelfde map. Met geïmporteerde texturen komen het `.obj`, het `.mtl` en de afbeeldingen samen in één `.zip`.
- **DWG** behoudt de exacte kleuren; **DXF** gebruikt de dichtstbijzijnde van de 255 standaard CAD-kleuren.
- **STL** en **PLY** bevatten kleuren: STL volgens de VisCAM / SolidView-conventie (programma's die die niet lezen, negeren ze), PLY als een kleur op elk punt. Zie [Bestandsformaten in detail](topic:formats).

:::tip
Om een scherm te modelleren, verft u het kader houtskoolgrijs en het glas blauw nadat u het voorvlak [offset](topic:draw-faces) hebt.
:::
