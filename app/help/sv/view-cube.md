---
title: ViewCube
summary: Klicka på en sida, kant eller ett hörn av kuben uppe i vyns hörn för att titta därifrån, dra den för att kretsa, vrid kompassringen, stega runt en vy rakt framifrån och gå hem.
keywords: view cube, viewcube, kub, kompass, norr, hemvy, standardvyer, ovanifrån, framifrån, höger, iso, hörn, kant, kretsa, rotera vy, axelikon, hörnindikator, navigering
from: e1ec1347
---

Kuben sitter uppe till höger i 3D-vyn. Den vrids med vyn, så den alltid visar åt vilket håll du tittar: {{ui:Top}} är upp, {{ui:Front}} vetter söderut (du tittar norrut, längs den gröna axeln, när du tittar på den), {{ui:Right}} vetter österut (röda axeln). Den är genomskinlig tills du pekar på den.

## Titta från en sida, en kant eller ett hörn

1. Peka på kuben. Den del som ligger under pekaren lyser upp: mitten av en sida, en kant (den lyser på båda sidor som delar den) eller ett hörn (på alla tre sidor).
2. Klicka på den. Vyn vrids så att den tittar därifrån, med samma mitt och zoom.

Det finns 26 platser att klicka på: 6 sidor ({{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}), 12 kanter och 8 hörn. Ett hörn ger den klassiska tre-kvartsvyn; en kant ser ut att ligga halvvägs mellan två sidor.

Att klicka på {{ui:Front}} är detsamma som {{ui:Views}}, {{ui:Front}} i verktygsfältet, utan zoom till passning. {{ui:Views}} zoomar fortfarande till hela modellen.

## Kretsa genom att dra i kuben

Dra kuben för att vrida vyn, samma som att kretsa i själva vyn. Ett drag räknas aldrig som ett klick, så du kan ta tag i kuben var som helst.

## Kompassringen

Ringen under kuben bär N, Ö, S och V.

- **Dra i ringen** för att vrida modellen kring den vertikala axeln, som om den stod på en skivspelare. Ringen följer pekaren.
- **Klicka på en bokstav** för att titta från den sidan, och behåll hur brant du tittar nedåt. I en vy rakt uppifrån hamnar bokstaven du klickar på längst ned på skärmen.

## Vyer rakt framifrån: pilar

När du tittar rakt på en sida visas små pilar runt kuben:

- De fyra **trianglarna** tar sidan på den sidan fram till framsidan: triangeln ovanför kuben visar sidan som var uppe, och så vidare.
- De två **böjda pilarna** uppe till höger vrider bilden ett kvarts varv medurs eller moturs, utan att ändra vilken sida du tittar på. Använd dem för att vrida en plan så att en lång vägg går tvärs över skärmen.

## Hem

Hus-knappen uppe till vänster på kuben går tillbaka till tre-kvartsvyn {{ui:Iso}} och anpassar hela modellen. {{key:Home}} gör detsamma när kuben har tangentbordsfokus.

## Med tangentbordet

{{key:Tab}} till kuben, och sedan:

| Tangent | Gör |
|---|---|
| {{key:left}} / {{key:right}} | väljer en sida, kant eller ett hörn runt kuben, i åttondels varv (skärmläsare säger vilket) |
| {{key:up}} / {{key:down}} | väljer en högre eller lägre, upp till {{ui:Top}} eller ned till {{ui:Bottom}} |
| {{key:Enter}} eller {{key:Space}} | titta från den valda |
| {{key:Shift+left}} / {{key:Shift+right}} | vrid vyn ett kvarts varv kring den vertikala axeln |
| {{key:Home}} | hemvyn |
| {{key:Esc}} | lämna kuben |

Tangenttryckningar på kuben stannar i kuben: de startar inga ModelCraft-verktyg.

## Axelikon eller ingenting i stället

Öppna {{ui:Settings}} ({{key:Mod+,}}), fliken {{ui:ModelCraft}}, och ställ in **Hörnindikator** till {{ui:View cube}} (standard), {{ui:Axis icon}} (en liten X-, Y-, Z-markör nere till vänster: X röd, Y grön, Z blå) eller {{ui:None}}. Den här webbläsaren kommer ihåg valet. Se [ModelCraft-inställningar](topic:settings#corner-indicator).

:::note
ModelCraft har ingen rullning: utom i vyer rakt uppifrån och rakt nedifrån är upp på skärmen alltid upp i modellen. Kuben och de böjda pilarna kan vrida en planvy; de kan inte kippa en sidovy så att den står på sin kant.
:::
