---
title: Metszősíkok: a modell felvágása
summary: Helyezzen el egy metszősíkot, hogy belülről lássa a modellt, tolja át rajta, fordítsa meg, vagy kapcsolja ki a vágást.
keywords: metszet, metszősík, metszetvágás, vágás, kivágás, levágás, belső, alaprajz, szelet, keresztmetszet
from: 28c3a645
---

A metszősík felvágja a modellt, hogy belülről is láthassa és dolgozhasson benne: egy ház alaprajzát, egy szekrény belsejét. A modell nem változik; a vágás csak nézet.

## Elhelyezés

1. Kattintson a {{ui:Section}} gombra a {{ui:Camera}} csoportban.
2. Kattintson egy lapra. A sík arra a lapra kerül, négy, a nézőre mutató nyíllal.

   Kattintson a lapokon kívül bárhová, és a sík a legjobban látott iránynak megfelelően, négyzetesen áll be. Nyomja meg előbb valamelyik nyílbillentyűt, hogy a síkot inkább a piroshoz ({{key:Right}}), a zöldhöz ({{key:Left}}) vagy a kékhez ({{key:Up}}) igazítsa.

A nyilak felé néző oldal **levágásra kerül**. A lapra helyezett sík még nem vág semmit: tolja be a modellbe.

## Tolás, megfordítás, kikapcsolás

Kattintson a sík körvonalára, hogy kijelölje. Az {{ui:Entity info}} alatt:

- Az {{ui:Along its arrows}} mutatja, hol áll. Írjon be új távolságot, és nyomja meg az {{key:Enter}} billentyűt, hogy átcsúsztassa a modellen; ha egy elülső lapra helyezett síkot a `-1m` értékre állít, az 1 m-rel beljebb kerül a modellbe.
- A {{ui:Reverse}} megfordítja a nyilakat, így a másik oldal kerül levágásra.
- Az {{ui:Active (cuts the model)}}: egyszerre csak egy sík vág. Ha egy másik sík dobozát bejelöli, vagy újat helyez el, az vág helyette.
- Nevezze át a {{ui:Name}} mezőben; törölje a {{key:Delete}} billentyűvel vagy az {{ui:Eraser}} eszközzel.

Ahol a sík zárt testen halad át, a vágást sötét szín tölti ki. A nem zárt geometria (egyetlen lap, nyitott doboz) vágódik, de nem kerül kitöltésre.

## Megjelenítés és elrejtés

A {{ui:Views}} alatt:

- A {{ui:Show section planes}} elrejti a síkok körvonalait és nyilait (a vágás marad).
- A {{ui:Show section cuts}} kikapcsolja a vágást, és az egész modellt mutatja, a síkokat nem törli.

A [bemutató nézet](topic:styles-shadows#presentation-view) a körvonalakat is elrejti.

## Tudnivalók

- A levágott rész nem kattintható és nem fogható, így a vágás által mutatott részre is rajzolhat.
- A metszősíkok, az aktív sík és a két kapcsoló a ModelCraft fájlban mentődik. Minden változtatás egy visszavonási lépés.
- Az exportok mindig az egész modellt tartalmazzák: a metszet nézet, nem szerkesztés.
