---
title: Style en sonskaduwees
summary: Wys die model geskaduwee, as versteekte lyne, as 'n draadraamwerk of deursigtig, en bestudeer die skaduwees wat dit op enige datum, tyd en plek werp.
keywords: aanbiedingsaansig, skoon aansig, versteek riglyne, versteek asse, styl, geskaduwee, versteekte lyn, draadraamwerk, röntgen, rande, skaduwees, son, sonstudie, solaar, datum, tyd, breedtegraad, lengtegraad, tydsone, noord
from: 09c95329
---

Die {{ui:Style}}-paneel aan die regterkant verander hoe die model geteken word. Niks daarin verander die model self nie, en dit is nie deel van ontdoen nie. Elke [toneel](topic:scenes) onthou sy eie styl, en die lêer onthou die styl wat jy gehad het toe jy gestoor het.

## Vlakke

Kies een in die {{ui:Faces}}-lys:

| Styl | Lyk soos |
|---|---|
| {{ui:Shaded}} | Soliede vlakke, sag verlig. Vlakke wat van agter gesien word, is blougrys. Ingevoerde kleure wys. |
| {{ui:Hidden line}} | Vlakke in die agtergrondkleur met rande in donkerkleur: 'n skoon lyntekening met versteekte lyne verwyder. Wit op {{ui:Paper}}, donker op {{ui:Model}}. |
| {{ui:Wireframe}} | Slegs rande. Vlakke word nie geteken nie, maar hulle tel steeds wanneer jy klik en vasvang: jy kan nie deur hulle kies nie. |
| {{ui:X-ray}} | Deursigtige vlakke, om te sien wat agter of binne is. Soos in draadraamwerk, stop klikke en vasvang steeds by die naaste vlak. |

{{ui:Show edges}} skakel die rande aan of af in elke styl behalwe {{ui:Wireframe}}. Met dit af, wys {{ui:Hidden line}} byna niks nie, omdat die vlakke by die agtergrond pas. Sagte rande, soos die sye van 'n sirkel wat uitgetrek is, word nooit geteken nie.

## Skakel sonskaduwees aan

1. Merk {{ui:Sun shadows}}. Die soninstellings daaronder word aktief, en die model werp skaduwees op homself en op die grond.
2. Stel die plek:
   - {{ui:Latitude}}: noord is positief, suid negatief (New York is ongeveer 40.7, Sydney ongeveer -33.9).
   - {{ui:Longitude}}: oos is positief, wes negatief (New York is ongeveer -74.0).
   - {{ui:UTC offset}}: die plek se verskil van UTC in ure, soos `-5` vir New York in die winter. ModelCraft pas nie somertyd toe nie; gebruik `-4` vir New York in die somer.
3. Stel die {{ui:Date}} (maand en dag) en sleep die {{ui:Time}}-skuif. Die tyd beweeg in stappe van 15 minute en wys langs die skuif, soos "3:00 pm".

'n Reël onder die instellings sê waar die son is, soos "Son 52° op, 250° vanaf noord. Noord is die groen as." Snags sê dit "Die son is op hierdie tyd onder."

'n Nuwe model begin met die son op 21 Junie om 3:00 pm, by breedtegraad 40, lengtegraad -105, UTC-verskil -7.

## Draai die model na noord

ModelCraft se noord is altyd die **groen as**. Om 'n werklike terrein te bestudeer, draai die model sodat sy noordkant langs groen wys: kies alles ({{key:Mod+A}}), druk {{key:Q}}, klik 'n middelpunt op die grond, en draai dit met die terrein se hoek vanaf noord (sien [Draai en skaal](topic:rotate-scale)).

## 'n Sonstudie

1. Stel die plek en die datum op.
2. Voeg 'n toneel by ({{ui:Add scene}} in {{ui:Scenes}}).
3. Skuif die tydskuif, en voeg dan nog 'n toneel by. Herhaal vir elke uur wat jy wil hê.
4. Klik {{ui:Play}} om deur hulle te stap. Sien [Stoor aansigte as tonele](topic:scenes).

## Goed om te weet

- Skaduwees kan kartelrig lyk op 'n baie groot model, omdat een skaduwee-kaart die hele model dek.
- Skaduwees word nie in {{ui:Wireframe}} geteken nie.
- Die sonposisie volg die NOAA-sonberekening en is akkuraat tot 'n breukdeel van 'n graad, wat genoeg is vir massastudies. Atmosferiese breking word geïgnoreer, so baie lae sonhoeke naby sonop- en sonsondergang kan effens af wees.

## Aanbiedingsaansig

{{ui:Views}} › {{ui:Presentation view}} (of {{key:Shift+P}}) wys slegs die model: die asse, riglyne en riglynpunte, die omlynings van snitvlakke (die snit bly), die merkers van lampe, die boks van 'n oop groep, die vasvangmerkers en wenke, en die seleksie-uitlig verdwyn almal. Gebruik dit om die model duidelik te sien, of voor 'n skermkiekie. Gereedskap werk steeds, en vang steeds vas; jy sien net nie die merkers nie. Druk {{key:Shift+P}} weer om hulle terug te bring. Afmetings bly, want hulle is deel van die tekening. Terwyl jy binne 'n groep redigeer, verdof die res van die model nie meer nie: dit wys soos dit is, insluitend teksture.
