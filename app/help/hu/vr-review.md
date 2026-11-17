---
title: A modell átnézése VR-szemüvegben
summary: Járjon körbe a modellben valódi méretben VR-szemüvegben: ugorjon, forduljon, mérjen, vágja fel, helyezzen el problémákat képpel, nézze asztali modellként, és találkozzon egy élő munkamenet többi résztvevőjével.
keywords: vr, virtuális valóság, szemüveg, webxr, xr, magával ragadó, quest, oculus, vive, index, pico, körbejárás, teleportálás, tervezési átnézés, átnézés, mérés, metszet, vágás, probléma, problémák, bcf, asztali modell, léptékmodell, jelenlét, avatárok, élő, együtt
from: fa2f591a
---

Az {{ui:Átnézés VR-ben}} a VR-szemüvegben, valódi méretben a modell belsejébe visz. A nézet kamerájának helyén, a kamera alatti padlón áll, ugyanabba az irányba nézve. Semmi sem töltődik fel: a szemüveg azt mutatja, amit a böngésző ezen a számítógépen rajzol (vagy a szemüveg saját böngészőjében).

## Mire van szükség

- Olyan VR-szemüveg, amelyet a böngésző vezérelni tud (WebXR): önálló szemüveg saját böngészője, vagy Chrome vagy Edge egy PC-n, csatlakoztatott szemüveggel.
- A ModelCraft biztonságos (https) oldalon megnyitva, ahogy ezen a webhelyen is van.

Ha nincs szemüveg, az {{ui:Átnézés VR-ben}} szürke, és megmondja az okát.

## Indítás

1. Állítsa be a nézetet, ahonnan indulni szeretne: szobában vagy kint, az épületre nézve.
2. Kattintson a {{ui:Nézetek}} gombra a {{ui:Kamera}} csoportban, majd az {{ui:Átnézés VR-ben}} gombra.
3. Tegye fel a szemüveget.

A menü a bal kéz hátán található. Mutasson rá a jobb kontrollerrel, és húzza meg az elsütőt egy gomb kiválasztásához. (Csak egy kéz esetén a menü ott lebeg, ahol a kezdőpont volt.)

## Hogyan néz ki

A szemüveg a modellt a [élő nézet](topic:live-view) megjelenésében mutatja: a lapoknak adott kinézet és anyagok, az ég és a nap a modell helyéből és dátumából az árnyékával, lámpák, szórt növények és sziklák, valamint a falakról és padlókról visszaverődő fény (ezen a számítógépen számolódik ki körbenézés közben, és követi a mozgást). A fényerő és a nézettranszformáció (ACES vagy AgX) megegyezik a [Kép renderelése](topic:render) beállításaival. Hogy mennyit rajzol, az a szemüveg böngészőjének képességeitől függ, mint asztali gépen; az ambient occlusion, a tükröződések és a bloom csak asztali gépen maradnak.

## Mozgás

- **Ugrás:** a {{ui:Mozgatás}} részben mutasson egy padlóra, és húzza meg az elsütőt; ott érkezik. Vagy tolja előre a botot a célzáshoz, és engedje el az ugráshoz. Csak padlóra és talajra (felfelé néző felületekre) lehet érkezni, falra soha.
- **Fordulás:** tolja a botot balra vagy jobbra; minden alkalommal 30°-kal fordul el a nézet.
- **Séta:** a játéktérben egyszerűen sétáljon.

## Mérés

Válassza a {{ui:Mérés}} lehetőséget, majd húzza meg az elsütőt két ponton. A távolság a modell mértékegységeiben jelenik meg köztük. A sarok közeli pont a sarokhoz illeszkedik.

## Felvágás

Válassza a {{ui:Metszet}} lehetőséget, és húzza meg az elsütőt egy felületen:

- falon (vagy bármi máson, ami nem padló): minden, ami a kamera és a felület között van, levágódik, így belátni lehet. Ez kívülről vagy szobán át a legjobb;
- padlón, felülről: alaprajzi metszet 1,2 m-rel a padló felett, így a falak alsó részüket mutatják.

A {{ui:Törlés}} eltávolítja a metszetet és a méréseket. Ha indításkor metszősík vágja a modellt a nézetben, a szemüveg azzal indul.

## Probléma elhelyezése

Válassza a {{ui:Probléma}} lehetőséget, és húzza meg az elsütőt ott, ahol a hiba van. Egy számozott tű jelöli, a ModelCraft pedig a problémát megtartja azzal a képpel, amit látott, és azzal, hol állt. Ha kilép a VR-ből, a problémák a jobb oldali {{ui:Problémák}} listában vannak:

- a szem gomb azt a problémát mutatja onnan, ahonnan elhelyezték;
- a {{ui:Mentés BCF-ként}} mindet BCF-fájlként tölti le, amelyet a BIM-átnézési programok megnyitnak (a kamerával és a képpel együtt);
- a `.modelcraft` fájlban is mentésre kerülnek.

Megjegyzés a problémához a VR-ből való kilépés után, egy BCF-programban fűzhető hozzá: a szemüvegben való gépelés még nincs elkészítve.

## Megtekintés asztali modellként

Az {{ui:Asztallap}} a modellt az előtte lévő asztalhoz igazítja; járjon körbe rajta, vagy forgassa a botjával. A {{ui:Teljes méret}} visszaviszi az előző helyre.

## Másokkal, élőben

Egy [élő munkamenetben](topic:work-live) a VR-ben mindenki a többieket fejként és két kézként látja, saját színükben, a nevükkel, és ponttal, ahová mutatnak. Bárki által végzett szerkesztés pillanatokon belül eljut a szemüvegbe. Az asztalnál ülők a szemüvegben még nem láthatók.

## Kilépés

Válassza a {{ui:Kilépés a VR-ből}} lehetőséget (vagy vegye le a szemüveget, és ott fejezze be). A képernyőn a nézet oda kerül, ahol a fej volt.

:::note
Csak VR-szemüveg-emulátorral tesztelték, valódi szemüveggel még nem. Nagy modell akadozást okozhat a szemüvegben: előbb rejtse el azt, amire nincs szükség ([elrejtés és izolálás](topic:hide-isolate)).
:::
