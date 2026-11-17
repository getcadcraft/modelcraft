---
title: Kép készítése másik programmal
summary: A saját útkövetőnk rajzolja a Kép renderelése képet; másik program csak egy renderelőmotor-bővítményen keresztül rajzolhat a CadCraft Studióban. Mi kerül át, és miért nem kínálunk egyes programokat soha.
keywords: renderelés, motor, külső program, bővítményes motor, studio, háttér, sor, usd, gltf, rajzolja, blender, gpl
from: 150f94f1
---

A {{ui:Kép renderelése…}} párbeszédpanel képét **saját motorjaink** rajzolják: a Gyors és a Path tracer a böngészőben és a CadCraft Studióban. Másik program csak akkor rajzolhatja meg, ha egy **renderelőmotor-bővítmény** hozza: lásd [Renderelőmotor hozzáadása bővítménnyel](topic:render-engine-addons). Ha a jelenetet át szeretné vinni egy másik programba, és ott tovább dolgozna, használja ezt: [A jelenet megnyitása másik programban](topic:render-open-in), vagy ezt: [Jelenet küldése játékmotorba](topic:render-unreal).

## Kép rajzolása bővítmény motorjával

1. Kapcsolja be a bővítményt a Beállítások › Bővítmények menüben. A motora megjelenik a {{ui:Kép renderelése…}} Motor listájában.
2. Válassza ki. A saját beállításai a Motor lista alatt jelennek meg.
3. Kattintson a {{ui:Renderelés}} gombra. A Studióban, ha egy bővítmény először futtat programot, a Studio a saját párbeszédpanelén kérdez. Az előrehaladás a rajzolás közben látszik; a {{ui:Leállítás}} gomb leállítja. A kép azzal a motorral megjelölve jelenik meg, amely megrajzolta.

A JavaScriptben írt motor a böngészőben is fut. A számítógépen programot futtató motor csak a Studióban fut; a böngészőben mentendő fájlként jelenik meg.

## Mi kerül át

A motor egy **csomagot** kap: a modellt USD-fájlként (és glTF-fájlként, ha kéri), valamint egy beállítási fájlt a pontos anyagértékekkel, a nappal és az éggel, minden bekapcsolt lámpával a teljesítményével és fényprofiljával, a kamerával és az expozícióval. Minden program a saját módján világít, hangol és mintavételez, így a képek kamerában, napfényben, lámpákban és expozícióban hasonlóak, de nem pixelre pontosan azonosak.

## Programok, amelyeket a CadCraft soha nem futtat

A CadCraft soha nem indít GNU GPL licenc alatt álló programot, és soha nem sorol fel ilyet motorként vagy „Megnyitás másik programban” célként. A Blender ezek egyike, ezért nincs a Motor listában. A {{ui:Kép renderelése…}} párbeszédpanelből mentett USD- vagy glTF-fájl azonban ugyanúgy megnyitható benne, mint bármely más, ezeket olvasó programban.

:::note
A panorámakamerák és a sztereó kamerák, valamint az égkép (helyette az ég színei kerülnek felhasználásra) nem kerülnek át egy másik programba. Egy másik programban végzett munka nem jön vissza a modellbe.
:::
