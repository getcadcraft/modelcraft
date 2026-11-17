---
title: Festés színekkel és anyagokkal
summary: Adjon lapoknak, csoportoknak és komponenseknek egyszínű színt vagy anyagot, például téglát, burkolatot, zsindelyt vagy fát, és exportáláskor is megmaradnak.
keywords: festés, szín, színek, anyag, anyagok, textúra, textúrák, tégla, burkolat, zsindely, tetőfedés, fa, kő, csempe, beton, vakolat, fű, kavics, üveg, fém, festővödör, kitöltés, minta, szemcseppentő, alapértelmezett, glb, obj, mtl, collada
from: b1500523
---

A színek segítenek megkülönböztetni a modell részeit, az **anyagok** (tégla, burkolat, tetőfedés, fa, kő, csempe, beton, vakolat, fű, üveg, fém) pedig úgy mutatják a modellt, mint amiből épült. Mindkettő ugyanúgy festődik.

## Szín kiválasztása

A jobb oldali {{ui:Színek}} szakasz egy sor egyszínű színt mutat, az {{ui:Alapértelmezett}} lehetőséget (amelyet vonal húz át: nincs szín), és egy {{ui:+}} mintát bármely más színhez. Kattintson egyre, hogy az legyen az aktuális szín. A Festés eszköz ezzel indul.

## Festés

1. Nyomja meg a {{key:B}} billentyűt ({{ui:Festés}}), vagy ha nincs kijelölés, kattintson egy színre. (Ha van kijelölés, egy színre kattintva azonnal kifesti a kijelölést.)
2. Kattintson egy lapra a festéséhez.
3. Kattintson egy csoportra vagy komponensre, hogy azt a példányt fesse: a saját színnel nem rendelkező lapjai átveszik ezt a színt. A benne festett lapok megtartják a színüket.

Több dolog egyszerre festéséhez jelölje ki őket, majd kattintson egy színre, vagy kattintson bármelyikükre a {{ui:Festés}} eszközzel. Ez egy visszavonási lépés.

| Tartsa lenyomva | És kattintson egy lapra | Mi festődik ki |
|---|---|---|
| — | | Az a lap |
| {{key:Ctrl}} | | Minden hozzá kapcsolódó lap, amelynek ugyanaz a színe |
| {{key:Shift}} | | Minden ilyen színű lap abban a csoportban, amelyben éppen dolgozik |
| {{key:Alt}} | | Semmi: helyette azt a színt veszi fel |

Hogy egy lapot visszaállítson szín nélkülire, válassza az {{ui:Alapértelmezett}} lehetőséget, majd kattintson rá.

## Festés anyaggal

A {{ui:Anyagok}} szakasz a {{ui:Színek}} alatt fajtánként sorolja fel az anyagkönyvtárat: tégla és blokk, burkolat, tetőfedés, fa, kő, csempe, beton, vakolat, talaj, üveg és fém. Vigye a mutatót egy minta fölé, hogy megjelenjen a neve. Kattintson egyre, majd festsen vele pontosan úgy, mint egy színnel: {{key:B}}, majd kattintás lapokra, csoportokra vagy komponensekre; vagy jelöljön ki előbb, majd kattintson az anyagra.

- Az **Árnyékolt** stílusban a lapok az anyag textúráját mutatják. A rejtett vonalas, a drótvázas és a röntgen nézet az anyag színét mutatja.
- A textúrák **vízszintesen futnak minden lap mentén**, és **felfelé** is: a téglasorok minden falon vízszintesek maradnak, a zsindely lefelé fut a tető lejtőjén, a padló deszkái pedig a piros tengelyt követik. Valós méretükben vannak (egy tégla kb. 215 mm hosszú), így bármilyen távolságból jól néznek ki.
- Egy [renderelt képen](topic:render) az anyagok megtartják textúrájukat és érdességüket, az üvegnél és a fémnél pedig a fényességüket.
- Az {{key:Alt}}-kattintás a {{ui:Festés}} eszközzel a lap anyagát is átveszi.

A textúrákat maga a ModelCraft rajzolja, így offline is működnek, és bármire szabadon felhasználhatók (CC0).

## Komponensek és színek

A **komponensen belül** festett szín minden példányon megjelenik, mert a példányok egy közös definíciót használnak. A **példányra** kívülről (a komponens zárt állapotában) festett szín csak arra a példányra vonatkozik, így ugyanazon komponens két példánya eltérő színű lehet. Az {{ui:Entitásinfó}} megmutatja a kijelölt lap, csoport vagy komponens színét.

## Színek a fájlokban

- A ModelCraft-fájl minden színt és minden anyagot megőriz.
- Más formátumok a textúra helyett az **anyag színét** kapják (a távolból látszó megjelenését): glTF, Collada, OBJ, DWG és DXF, valamint a 3D nyomtatás ellenőrzése. A glTF-ben, Collada-ban és OBJ-ban az anyag megtartja a nevét, például `Material_brick-red`.
- **glTF (.glb)** és **Collada (.dae)**: minden szín anyaggá válik. A különböző színekben megjelenő komponens színenként egyszer íródik ki. A glTF az importált textúrákat textúraként is kiírja.
- **OBJ**: exportáláskor két fájl töltődik le: az `.obj` és a színeket tartalmazó `.mtl` anyagfájl. Tartsa őket ugyanabban a mappában. Importált textúrák esetén az `.obj`, az `.mtl` és a képek egy `.zip` fájlban érkeznek.
- **DWG** megőrzi a pontos színeket; a **DXF** a 255 szabványos CAD-szín közül a legközelebbit használja.
- **STL** és **PLY** hordozza a színeket: az STL a VisCAM / SolidView szabályt követi (a programok, amelyek nem olvassák, figyelmen kívül hagyják), a PLY pontonként színként. Lásd: [A fájlformátumok részletesen](topic:formats).

:::tip
Egy képernyő modellezéséhez festse a keretet szénszürkére, az üveget kékre, miután [párhuzamosan eltolta](topic:draw-faces) az elülső lapot.
:::
