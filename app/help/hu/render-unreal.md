---
title: Jelenet küldése játékmotorba
summary: A Studio a jelenetet Unreal Engine-projektbe írhatja, és minden küldésnél frissen tartja. A saját módosítások a CadCraft által soha nem írt rétegben maradnak. Az ezt megnyitó bővítmény még nincs kiadva.
keywords: unreal, unreal engine, játékmotor, hivatkozás, küldés, usd stage, projekt, live, cine kamera, filmrender-sor
from: 9a765cc2
---

A CadCraft Studio Motor listája egy Unreal Engine-projekthez tartozó **hivatkozást** tarthat. Csak egy irányban működik: a CadCraftból az Unreal felé.

## Jelenet küldése

1. Válassza ki az Unreal-bejegyzést a Motor listában. Első alkalommal a Studio kéri a projekt mappáját (amelyben a `.uproject` fájl van); ezt megjegyzi.
2. Kattintson a {{ui:Send}} gombra. A Studio a projekten belül létrehozza a `CadCraft/<fájlnév>/` mappát: ide menti a jelenetet USD-fájlként, a beállítások fájlját, a fényprofilokat és két kis rétegfájlt.
3. Módosítsa a modellt, mentse, majd küldje újra. Csak a jelenet és a beállítások fájlja cserélődik le.

## A saját módosítások biztonságban vannak

Az Unreal által megnyitott stage egy kis gyökérréteg, amelyet egyszer hoz létre a rendszer, alatta két réteggel: felül a **saját réteg** (`<name>.user.usda`, kezdetben üres, a CadCraft soha nem írja felül), alatta a CadCraft jelenete. A saját rétegbe mentett módosítások a jelenet újraküldése után is megmaradnak. Az Unreal-szintbe elhelyezett fények és egyéb aktorok a stage-en kívül esnek, ezeket a küldés sem érinti.

## Studio nélkül

A böngészőben, vagy olyan számítógépen, ahol a Studio nem találja meg az Unrealt, válassza a **Unreal-projektmappa (.zip)** lehetőséget a Motor listában, majd kattintson a {{ui:Render}} gombra. Ez ugyanazt a mappát zip-fájlként menti: csomagolja ki a projekt `CadCraft` mappájába. Az első alkalommal hagyja bejelölve a **A stage-fájlok belefoglalása** opciót; későbbi mentéseknél kapcsolja ki, így a zip csak a jelenetet és a beállítások fájlját tartalmazza, a saját réteg pedig soha nem íródik felül.

:::note
Az Unreal-bővítmény, amely megnyitja a stage-et, beállítja a napot, a lámpákat, a kamerákat és az expozíciót, minden küldést követ, és egy kamerából renderel, **még nincs kiadva**, és az Unrealben még nem futtatták. Addig a Küldés a fájlokat a projektbe teszi, és az Unreal saját USD-eszközei meg tudják nyitni őket. Az első rendszer a Windows; a macOS ezt követi.
:::
