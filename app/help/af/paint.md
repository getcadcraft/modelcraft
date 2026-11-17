---
title: Verf met kleure en materiale
summary: Gee vlakke, groepe en komponente 'n eenvoudige kleur of 'n materiaal soos baksteen, sidingplanke, dakspane of hout, en hou dit wanneer jy uitvoer.
keywords: verf, kleur, kleure, materiaal, materiale, tekstuur, teksture, baksteen, siding, dakspane, dakbedekking, hout, klip, teël, beton, stoepleem, gras, gruis, glas, metaal, verfemmer, vul, monster, kleurkieser, verstek, glb, obj, mtl, collada
from: b1500523
---

Kleure help jou om dele van 'n model uit mekaar te ken, en **materiale** (baksteen, siding, dakbedekking, hout, klip, teël, beton, stoepleem, gras, glas, metaal) laat dit lyk soos waarvan dit gebou is. Albei verf op dieselfde manier.

## Kies 'n kleur

Die {{ui:Kleure}}-afdeling aan die regterkant wys 'n ry soliede kleure, {{ui:Verstek}} (die een wat deur 'n lyn gekruis is: geen kleur) en 'n {{ui:+}}-monster vir enige ander kleur. Klik op een om dit die huidige kleur te maak. Die Verf-gereedskap begin daarmee.

## Verf

1. Druk {{key:B}} ({{ui:Verf}}), of, met niks gekies nie, klik op 'n kleur. (Met iets gekies verf 'n klik op 'n kleur die keuse dadelik.)
2. Klik op 'n vlak om dit te verf.
3. Klik op 'n groep of 'n komponent om daardie kopie te verf: sy vlakke wat nog geen eie kleur het nie, neem hierdie kleur. Vlakke wat jy binne-in verf, hou hul eie kleur.

Om verskeie dinge tegelyk te verf, kies hulle eerste en klik dan op 'n kleur, of klik op enige van hulle met {{ui:Verf}}. Dit is een ontdoen-stap.

| Hou | En klik op 'n vlak | Wat word geverf |
|---|---|---|
| — | | Daardie vlak |
| {{key:Ctrl}} | | Elke vlak wat daaraan gekoppel is en dieselfde kleur het |
| {{key:Shift}} | | Elke vlak van daardie kleur in die groep waarin jy werk |
| {{key:Alt}} | | Niks: jy neem daardie kleur op in plaas daarvan |

Om 'n vlak terug na geen kleur te neem nie, kies {{ui:Verstek}} en klik daarop.

## Verf met 'n materiaal

Die {{ui:Materiale}}-afdeling, onder {{ui:Kleure}}, lys die materiaalbiblioteek volgens soort: baksteen en blok, siding, dakbedekking, hout, klip, teël, beton, stoepleem, grond, glas en metaal. Hou oor 'n monster vir sy naam. Klik op een, en verf dan net soos met 'n kleur: {{key:B}}, klik op vlakke, groepe of komponente; of kies eers en klik op die materiaal.

- In die **Geskakeer**-styl wys die vlakke die materiaal se tekstuur. Verborge lyn, draadraam en x-straal wys sy kleur.
- Teksture loop **gelyk langs elke vlak** en **op daarteen**: baksteenlae bly gelyk op elke muur, dakspane loop af oor 'n dak se helling, planke op 'n vloer volg die rooi as. Hulle is op hul werklike grootte ('n baksteen is ongeveer 215 mm lank), so lyk hulle reg op enige afstand.
- In 'n [weergegee prentjie](topic:render) hou materiale hul tekstuur, ruwheid en, vir glas en metaal, hul glans.
- {{key:Alt}}-klik met {{ui:Verf}} neem ook 'n vlak se materiaal op.

Die teksture word deur ModelCraft self geteken, so hulle werk vanlyn en is vry om vir enigiets te gebruik (CC0).

## Komponente en kleure

'n Kleur wat op 'n vlak **binne** 'n komponent geverf is, wys op elke kopie, omdat die kopieë een definisie deel. 'n Kleur wat op 'n **kopie** van buite af geverf is (met die komponent toe), hoort net by daardie kopie, so twee kopieë van een komponent kan verskillende kleure hê. {{ui:Entiteitinligting}} wys die kleur van 'n gekose vlak, groep of komponent.

## Kleure in lêers

- Die ModelCraft-lêer hou elke kleur en elke materiaal.
- Ander formate kry 'n **materiaal se kleur** (sy voorkoms van ver af) in plaas van die tekstuur: glTF, Collada, OBJ, DWG en DXF, en die 3D-druk-kontrole. In glTF, Collada en OBJ hou die materiaal sy naam, soos `Material_brick-red`.
- **glTF (.glb)** en **Collada (.dae)**: elke kleur word 'n materiaal. 'n Komponent wat in verskillende kleure gewys word, word een keer per kleur geskryf. glTF skryf ook ingevoerde teksture as teksture.
- **OBJ**: uitvoer laai twee lêers af, die `.obj` en 'n `.mtl`-materiaallêer met die kleure. Hou hulle in dieselfde vouer. Met ingevoerde teksture kom die `.obj`, die `.mtl` en die prente as een `.zip`.
- **DWG** hou die presiese kleure; **DXF** gebruik die naaste van die 255 standaard CAD-kleure.
- **STL** en **PLY** dra kleure: STL in die VisCAM / SolidView-konvensie (programme wat dit nie lees nie, ignoreer dit), PLY as 'n kleur op elke punt. Sien [Lêerformate in detail](topic:formats).

:::tip
Om 'n skerm te modelleer, verf die raamwerk houtskoolgrys en die glas blou nadat jy die voorvlak [versit](topic:draw-faces).
:::
