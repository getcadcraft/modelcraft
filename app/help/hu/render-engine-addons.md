---
title: Renderelőmotor hozzáadása bővítménnyel
summary: Mit adhat hozzá egy bővítmény a Kép renderelése párbeszédpanel Motor listájához, milyen engedélyre van szüksége egy program futtatásához, és mit ellenőriz és kérdez a Studio.
keywords: bővítmény, addon, motor, renderelőmotor, fejlesztő, engine.run, engedély, program, szkript, aláírt, studio, api
from: cd7a39ba
---

Egy bővítmény (Beállítások › Bővítmények) motort adhat a {{ui:Kép renderelése…}} Motor listájához. A bővítmények szerzőinek szóló teljes szöveg a bővítményspecifikáció 16. szakasza; röviden:

- A bővítmény motort regisztrál: azonosítóval, amely a saját azonosítójával kezdődik, névvel, opcionális beállításokkal, és **vagy** futtatandó programmal, **vagy** JavaScript-függvénnyel, amely megrajzolja a képet.
- A programot futtató motorhoz az **`engine.run`** engedély szükséges, amely telepítés előtt és a Beállításokban látszik. Csak a Studióban fut; a böngészőben mentendő fájlként jelenik meg.
- A bővítmény megnevezi a programot (egyszerű fájlnév, soha nem shell), egy szkriptet, amely **az aláírt bővítményen belül van**, és helyőrzőkből és egyszerű szavakból álló argumentumokat. A Studio megkeresi a programot, vagy egyszer megkéri a megjelölésére.
- Ha egy bővítmény először futtat programot, a **Studio a saját párbeszédpaneljében kérdez**: melyik bővítmény, melyik program, és hogy a szkript azt is megteheti, amit maga a program. Csak megbízható bővítménynél engedélyezze. A válasz arra a bővítményre és programra emlékezetben marad.
- A csomag (a jelenet USD-ként és egy beállítási fájl, a glTF-fájllal együtt, ha a bővítmény kéri) és a bővítmény szkriptje egy új, ideiglenes mappába kerül, a program ott fut, és a kép a bővítmény motorjának nevével megjelölve tér vissza.

:::note
A bővítmények csak 1.4-es bővítmény-API-tól kezdve adhatnak hozzá renderelőmotorokat. Egy nyílt forráskódú parancssori renderelőhöz készült kidolgozott példa a saját tárolójában található; ezt az adott renderelővel még nem futtatták.
:::
