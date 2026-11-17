---
title: 3D szöveg
summary: Adjon betűket a modellhez lapokként, laposan vagy tömörként, bármely lapra állítva: tábla, házszám, név egy ajtón.
keywords: 3d szöveg, szöveg, betűk, betűzés, tábla, feliratozás, házszám, felirat, vésés, betűtípus, szavak
from: 923f5d93
---

A {{ui:3D szöveg}} a {{ui:Rajzolás}} csoportban lapokból készít betűket, amelyeket festhet, kihúzhat vagy tömör testbe vághat.

## Szöveg hozzáadása

1. Kattintson a {{ui:3D szöveg}} gombra.
2. Írja be a szöveget. Új sorhoz nyomja meg az {{key:Enter}} billentyűt a mezőben.
3. Állítsa be a {{ui:Betűmagasság}} értékét (ez a nagybetű magassága, például `30cm` vagy `1'`) és a {{ui:Mélység}} értékét:
   - `0` **lapos betűket** ad: arra a felületre fekvő lapokat, amelyre helyezi, festésre vagy kihúzásra készen.
   - Olyan mélység, mint a `5cm`, **tömör betűket** ad: zárt testeket, amelyeket a [testműveletekkel](topic:solids) használhat.
4. Kattintson az {{ui:Elhelyezés}} gombra, majd kattintson arra a helyre, ahová a szöveg kerül.

Egy lapon a szöveg arra a lapra fekszik, balról jobbra olvashatóan: falon függőlegesen áll; talajon vagy asztalon a piros tengely mentén laposan fekszik. Lapoktól távol a talajon fekszik.

A szöveg a róla elnevezett **komponens**, ezért ha az egyik példányt szerkeszti, minden másolat megváltozik, és a {{ui:Komponensek}} listában újra elhelyezhetőként jelenik meg.

## Tudnivalók

- A betűk a ModelCraft saját, egyvonalas betűtípusából készülnek, megvastagítva: tiszták és olvashatók, de betűtípust még nem lehet választani.
- A betűk, számjegyek és gyakori jelek (az ékezetes betűkkel együtt) rajzolódnak ki; a betűtípusban nem szereplő karakter kis négyzetként jelenik meg.
- A szöveg megváltoztatásához törölje a szöveget, és adja hozzá újra.
- Betűk vésése felületbe: készítsen tömör betűket, helyezze őket félig egy tömör csoportba, majd [vonja ki](topic:solids) azokat.
