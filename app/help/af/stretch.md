---
title: Komponente wat rek
summary: Maak een kopie van 'n komponent breër, dieper of hoër terwyl sy dele hul groottes behou: 'n langer tafel met dieselfde pote, 'n hoër boekrak met sy rakke wyd versprei, 'n reling waarvan die pale herhaal word.
keywords: dinamiese komponent, rek, herskaal komponent, parametries, benoemde groottes, herhaal, skikking, pote, rakke, reling, reëls, veranderlikes
from: b4c40f43
---

Om 'n komponent te skaal maak alles daarin groter, ook die pote en lateie. **Rek hierdie kopie** verander 'n komponent se breedte, diepte of hoogte terwyl elke deel 'n reël volg: 'n tafelblad groei, sy pote behou hul dikte en bly aan die punte.

Dit werk op komponente wat uit dele bestaan, dit wil sê groepe of komponente binne die komponent, soos elke ding in die [beginbiblioteek](topic:starter) is.

## 'n Kopie rek

1. Kies die komponent.
2. In {{ui:Entity info}}, klik {{ui:Stretch this copy…}}.
3. Tik die nuwe {{ui:Width (red)}}, {{ui:Depth (green)}} en {{ui:Height (blue)}} in, en klik {{ui:Stretch}}.

Slegs daardie kopie verander: dit word 'n komponent op sy eie, wat die oorspronklike onthou waarvandaan dit kom. Rek dit enige tyd weer, en dit word vanaf die oorspronklike opnuut uitgewerk, sodat niks verskuif nie. Ander kopieë van die oorspronklike bly soos hulle was.

## Die reëls

Maak die komponent oop (dubbelklik daarop) en kies een van sy dele. {{ui:Entity info}} wys {{ui:When the component stretches}}, met 'n reël langs rooi, groen en blou:

| Reël | Wat die deel doen | Voorbeeld |
|---|---|---|
| {{ui:Stretch}} | Groei met die komponent; sy afstande na albei kante bly | 'n Tafelblad |
| {{ui:Stay at the start}} / {{ui:Stay at the end}} | Behou sy grootte en sy afstand tot daardie kant | Pote |
| {{ui:Move in proportion}} | Behou sy grootte; sy middel beweeg proporsioneel | Rakke, 'n deurhandvatsel |
| {{ui:Scale in proportion}} | Sy plek en sy grootte skaal albei proporsioneel | Die trappe van 'n trap |
| {{ui:Repeat}} | Kopieë daarvan, elke so dikwels ({{ui:Every}}), vanaf waar dit begin tot by die ver kant | Die pale van 'n reling |

{{ui:Automatic}} (die begin) werk een uit en wys watter: {{ui:Stretch}} wanneer die deel die komponent oorspan, {{ui:Move in proportion}} wanneer dit ergens in die middel sit, anders bly dit by die kant waarby dit die naaste is.

## Goed om te weet

- Die dele se eie vorms word gedeel, so 'n gerekte kopie is lig. Die wysiging van 'n deel verander dit in elke kopie.
- 'n Gerekte kopie volg nie latere veranderinge aan die oorspronklike se reëls of uitleg nie: rek dit weer om hulle in te bring.
- Vlakke wat los in die komponent geteken is (nie in 'n deel nie) behou hul grootte; maak hulle 'n deel om hulle te laat volg.
- Reëls en waarvandaan elke kopie gerek is, word in die ModelCraft-lêer gestoor.
