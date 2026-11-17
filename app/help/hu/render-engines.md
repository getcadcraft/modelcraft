---
title: Melyik program rajzolja meg a képet
summary: A Kép renderelése párbeszédpanel Motor-választása: a saját két motorunk, más programok a CadCraft Studióban, és mit tesz a web helyette.
keywords: renderelés, motor, renderelő, renderelőmotor, bővítmény, studio, külső program, rajzolja, sor, bővítményes motor
from: be4b056a
---

A {{ui:Kép renderelése…}} párbeszédpanelen a **Motor** választás a Mód fölött található. Saját két motorunk mindig megvan, és mindenhol működik; a bővítmények továbbiakat adhatnak hozzá, a CadCraft Studióban pedig a lista azokat a programokat is tartalmazza, amelyek átveszik a jelenetet.

| Motor | Mit csinál | Hol |
|---|---|---|
| Beépített: Gyors | A gyors állókép: nappali fény, lágy árnyékok, üveg- és fémhatás, másodpercek alatt | A böngészőben és a Studióban |
| Beépített: Path tracer | A fény felületek között verődik vissza a grafikus kártyáján vagy processzorán, a renderelési sor és a hálózatának többi számítógépe | A böngészőben és a Studióban |
| Egy bővítmény motorja | Megrajzolja, és visszaadja a képet: lásd [Kép készítése másik programmal](topic:render-other-program) | A böngészőben (JavaScriptben írt motor) vagy a Studióban (program futtatására képes motor) |
| Program, amely átveszi a jelenetet | A Studio a jelenetet a mappájába teszi, és szinkronban tartja | Studio |
| Megnyitás másik programban … | Elmenti a jelenetet, és megnyitja egy programban; semmi nem jön vissza: lásd [A jelenet megnyitása másik programban](topic:render-open-in) | A webes változat elmenti a fájlt |

## A választás működése

- A Gyors vagy a Path tracer választása a Módot is ezzel együtt váltja, és fordítva. A párbeszédpanel többi része nem változik azoknak, akik soha nem használnak másik motort.
- A nem elérhető motor a listában marad az okával együtt („nem található”, „újabb verziót igényel”); nem lehet kiválasztani. A böngészőben a csak a Studióban futó motor a „fájlt ment” szöveget mutatja: ilyenkor a {{ui:Kép renderelése…}} a jelenetet és a beállításait egy olyan fájlba menti, amelyet az adott programba vihet át.
- A választás a fájl renderelési beállításaival együtt mentődik, a legutoljára választott motor pedig a kezdő motor azoknak a fájloknak, amelyeknek nincs saját választásuk.
- Másik program képe megmondja, melyik program rajzolta és melyik verziójú, a párbeszédpanelen és a renderelési sorban egyaránt. A [Renderelés](topic:render) oldal ígéretei csak **a saját** motorjainkra vonatkoznak: egy másik program a saját módján világít, hangol és mintavételez, így ugyanazon jelenet két képe kamerában, napfényben, lámpákban és expozícióban hasonló, de nem pixelre pontosan azonos.

## Mit kap minden motor

A jelenet egy másik programhoz **csomagként** kerül: a modell USD-fájlként (ugyanaz a fájl, amelyet a [Mentés USD-ként](topic:usd) ír), és egy beállítási fájl, amely azt tartalmazza, amiben egy USD-importálónak nem lehet megbízni: a pontos anyagértékeket, a bekapcsolt lámpákat a teljesítményükkel és fényprofiljukkal, a napot, az eget, az expozíciót és a kamerát úgy, ahogy a párbeszédpanel rajzolná. Semmi sem kerül feltöltésre sehová.

## A renderelési sor

Egy másik programnak szánt kép vagy animáció ugyanúgy várakozhat a [renderelési sorban](topic:render#the-render-queue), mint a saját képeink; a feladat emlékszik arra, melyik motornak szól. Az animáció egyetlen futtatásban megy át a programba.
