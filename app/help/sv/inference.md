---
title: Inferens och fångst
summary: Vad de färgade markörerna betyder, vilken fångst som vinner och hur du låser en riktning med piltangenterna eller Shift.
keywords: inferens, fångst, fånga, slutpunkt, mittpunkt, ytans centrum, centrum, på kant, på yta, axel, röd axel, grön axel, blå axel, parallell, vinkelrät, lås, shift, objektfångst
from: e78984e9
---

Medan ett rit- eller redigeringsverktyg arbetar tittar ModelCraft på det som finns under pekaren och fångar det mest användbara i närheten. En markör visar vad den hittade, och hjälptexten nere till vänster namnger det.

## Markörer och hjälptexter

| Hjälptext | Markör | Fångar |
|---|---|---|
| Slutpunkt | Grön cirkel | Kantens ände |
| Mittpunkt | Cyan cirkel | Kantens mitt |
| Ytans centrum | Blå cirkel | Mitten av ytan under pekaren |
| Hjälppunkt | Grå | En hjälppunkt som lämnats av måttbandet |
| Origo | Oker | Där de röda, gröna och blå axlarna möts |
| På röd axel / På grön axel / På blå axel | En linje i den färgen | En linje från din startpunkt i den riktningen |
| Parallell med kant / Vinkelrät mot kant | Magenta linje | En linje från din startpunkt parallell eller vinkelrät mot den ihågkomna kanten (se nedan) |
| Låst | Magenta linje | En riktning du låst med en piltangent eller {{key:Shift}} |
| På kant | Röd kvadrat | Var som helst längs en kant |
| På hjälplinje | Grå | Var som helst längs en hjälplinje |
| På yta | Blå romb | Var som helst på en yta |
| På plan | ingen | Planet du startade på, när pekaren är över tomt utrymme |
| På marken | ingen | Marken (det röd-gröna planet), när inget annat finns där |

När en axellinje från din startpunkt korsar en kant eller hjälplinje, fångar ModelCraft korsningen och hjälptexten namnger båda, till exempel ”På röd axel, på kant”.

## Vilken fångst som vinner

1. **Punkter** inom cirka 12 pixlar: först slutpunkter, sedan hjälppunkter, mittpunkter, ytans centrum under pekaren och origo.
2. **Riktningar** från startpunkten: de röda, gröna och blå axlarna, och parallellt eller vinkelrätt mot den ihågkomna kanten.
3. **På en kant** eller en hjälplinje.
4. **På en yta.**
5. **Ritplanet**, eller marken.

Saker som döljs bakom en yta fångas aldrig. Vrid vyn så att du ser punkten du vill ha.

## Rita på en yta från en punkt

En {{ui:Rektangel}}, {{ui:Cirkel}} eller {{ui:Polygon}} som startas på ett hörn, en mittpunkt, en kant eller ytans centrum ritas **i planet för ytan under pekaren**, och skär den ytan. En kant tillhör två ytor, så kantens sida som pekaren är på avgör: för att rita på änden av en lång låda, starta från mitten av en av dess kanter med pekaren precis innanför ändytan.

## Parallellt och vinkelrätt

ModelCraft kommer ihåg den **senaste kanten som pekaren passerade före ditt första klick**. Att starta på ett hörn eller på en kant räknas som att ha passerat den kanten. När verktyget väl arbetar ersätter inte andra kanter du håller över det minnet.

För att rita en linje parallell med en befintlig kant:

1. Tryck på {{key:L}} och håll pekaren över kanten du vill matcha.
2. Flytta till startpunkten, utan att korsa andra kanter på vägen om du kan, och klicka.
3. Flytta i riktningen parallellt med den kanten. Linjen blir magenta och spetsen säger ”Parallell med kant”. Vinkelrätt fungerar på samma sätt, inom planet du ritar på.

Om fel kant kom ihåg, tryck på {{key:Esc}}, håll pekaren över rätt kant och börja om.

## Lås en riktning

Efter första klicket i ett verktyg kan du hålla nästa punkt på en linje:

| Tangent | Låser till |
|---|---|
| {{key:Right}} | Röda axeln |
| {{key:Left}} | Gröna axeln |
| {{key:Up}} | Blå axeln (rakt upp) |
| {{key:Down}} | Parallellt med den ihågkomna kanten (se ovan) |

Tryck på samma pil igen för att låsa upp. Statusfältet säger ”Låst till röda axeln. Tryck på samma pil för att låsa upp.”

Medan den är låst glider punkten längs linjen mot var pekaren än är, och den passar fortfarande in på punkter du håller över: håll över hörnet på en annan låda för att rita en linje längs röda axeln exakt så långt som till det hörnet.

**{{key:Shift}}** låser den riktning du just nu är fångad på (en axel eller parallell), så länge du håller ner den. Släpp för att låsa upp.

Lås fungerar i {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Cirkel}}, {{ui:Polygon}}, {{ui:Flytta}}, {{ui:Skala}} och {{ui:Måttband}}. Före första klicket vrider piltangenterna i stället vyn.

## I en grupp

Medan du redigerar inuti en grupp eller komponent är axlarna gruppens egna axlar (de rör sig med den, och vrids med den om den var roterad). Fångster hittar fortfarande punkter och kanter utanför gruppen, så att du kan linjera upp saker med resten av modellen.
