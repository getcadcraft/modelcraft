---
title: Voer 'n SKP-model in
summary: Voer 'n .skp-lêer in met sy groepe, komponente, kleure, teksture, etikette en sagte rande, sien wat ingekom het en wat nie, en gaan voort om te modelleer.
keywords: skp, invoer, oop skp, komponente, groepe, etikette, lae, materiale, kleure, teksture, versteek, sagte rande, 3d warehouse, migreer, oorskakel
from: 325d3c81
---

ModelCraft lees SketchUp-lêers (`.skp`) met sy eie leser, in die bladsy. Niks word opgelaai nie, en dit werk aflyn wanneer ModelCraft aflyn werk. Lêers vanaf SketchUp 3 tot 2026 is getoets.

## Voer die lêer in

1. Klik op {{ui:Import}} in die {{ui:File}}-groep (of sleep die `.skp`-lêer op die 3D-aansig).
2. Kies die lêer.

   Die statusbalk sê "Reading house.skp…" terwyl dit lees, en daarna wat ingekom het, byvoorbeeld "Imported house.skp (SketchUp 25.0.575): 1240 faces, 6 components, in a group." Hieronder: "Ingevoer house.skp (SketchUp 25.0.575): 1240 vlakke, 6 komponente, in 'n groep."

Die hele model kom aan as een groep wat na die lêer vernoem is, gekies, en die aansig zoem daarop. Een {{key:Mod+Z}} haal alles weer weg, insluitend die etikette.

:::tip
Ontbind die invoergroep ({{ui:Entity info}} › {{ui:Explode}}) wanneer jy wil hê die inhoud moet los in jou model wees, eerder as in een groep.
:::

## Wat inkom

- **Vlakke** met hul gate, en **rande** wat nie deel van 'n vlak is nie.
- **Groepe** kom as groepe in, en **komponente** as komponente: elke kopie van 'n komponent is 'n plasing van een definisie, so die wysiging van een kopie verander hulle almal, soos in SketchUp. Name kom saam met hulle.
- **Kleure.** 'n Vlak se eie materiaal gee hom sy kleur. 'n Materiaal wat op 'n groep of komponent geverf is, word daardie plasing se verf, so vlakke binne dit sonder eie kleur neem dit aan, soos in SketchUp. 'n Komponent wat op een plek rooi en op 'n ander blou geverf is, bly een komponent.
- **Teksture.** 'n Vlak wat met 'n getekstureerde materiaal geverf is, kom met sy tekstuur in, op die vlak gelê soos in die lêer, en die {{ui:Shaded}}-styl wys dit. Die beeld word in die ModelCraft-lêer behou wanneer jy stoor, en 'n [weergegee prent](topic:render) wys dit ook. 'n Getekstureerde materiaal wat op 'n hele groep of komponent geverf is, gee daardie kopie net die materiaal se kleur.
- **Etikette.** 'n Groep of komponent op 'n SketchUp-etiket kry 'n ModelCraft-etiket met dieselfde naam, gelys in {{ui:Tags}}, gewys of versteek soos in SketchUp. As jou model reeds 'n etiket met daardie naam het, word daardie etiket gebruik.
- **Versteekte dinge kom versteek in:** vlakke, rande, groepe en komponente, en vlakke en rande op 'n versteekte etiket. Jy sien wat SketchUp gewys het, en niks gaan verlore nie: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} wys hulle. Sien [Versteek, isoleer en wys weer](topic:hide-isolate).
- **Sagte en gladde rande** bly sag, so geboë oppervlaktes lyk steeds glad.
- **Groottes** kom reg uit in enige eenheid: SketchUp-lêers is binnekant in duim, en ModelCraft skakel dit om.

## Wat nie inkom nie

Die statusbalk sê wat weggelaat is, met tellings.

- **Sommige teksture** hou net hul materiaal se kleur: 'n tekstuur wat nie in die lêer is nie, 'n beeld in 'n formaat wat blaaiers nie kan wys nie (soos 'n Photoshop-lêer), of 'n tekstuur sonder 'n grootte. Vlakke met 'n geprojekteerde tekstuur kom in, met die tekstuur ongeveer geplaas.
- **Etikette op los vlakke en rande.** ModelCraft etiketteer net groepe en komponente, so 'n vlak of rand met sy eie etiket kom sonder etiket in, en die statusbalk tel hulle. Maak sulke vlakke in 'n groep ({{key:Shift+G}}) en etiketteer die groep.
- **Beelde** in die model geplaas, teks, maatlyne, leidrade, snyvlakke, tonele en style.

## Probleme

- "Dit is nie 'n SketchUp-lêer nie." of "Hierdie SketchUp-lêer is beskadig: …": die lêer is afgesny of is iets anders met 'n `.skp`-naam. Stoor dit weer vanaf SketchUp, of vra vir 'n nuwe kopie.
- 'n Lêer van 'n SketchUp-weergawe nuwer as wat ModelCraft ken, word geweier, met die weergawe wat dit gevind het.
- 'n Model wat net beelde, teks of maatlyne is, sê dat dit niks het om te wys nie.

## Neem die model terug

ModelCraft kan nie `.skp`-lêers stoor nie. Voer Collada uit ({{ui:Export}} › `.dae`) en voer dit in SketchUp in: groepe, komponente en kleure gaan oor; teksture gaan oor as hul materiaal se kleur. Sien [Voer jou model uit](topic:export-model).
