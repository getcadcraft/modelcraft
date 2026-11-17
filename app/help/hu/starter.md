---
title: Kezdő könyvtár
summary: Mintegy harminc kész elem a modellbe helyezéshez: ajtók és ablakok, bútorok, konyha és fürdő, oszlopok és lépcsők, fák, emberek és egy autó.
keywords: berendezés, szoba berendezése, bútorelrendezés, hálószoba, nappali, konyha, fürdőszoba, iroda, renderelés, könyvtár, kezdő, környezeti elemek, fák, emberek, autók, növények, cserjék, sövény, komponensek, bútor, ajtó, ablak, szék, asztal, kanapé, ágy, WC, lépcső, oszlop, fa, személy, autó, raktár, kész
from: 3c06b69c
---

A {{ui:Kezdő könyvtár}} mindennapi dolgokat ad valós méretben, hogy a modell első pillantásra olvasható legyen: ajtó, amely megmutatja a szoba méretét, autó a kocsifelhajtón, emberek és fák az épület körül.

## Elhelyezés

1. A bal oldali {{ui:Komponensek}} részben kattintson a {{ui:Kezdő könyvtár}} gombra.
2. Válasszon egy elemet, például a {{ui:Szék}}-et.
3. Kattintson arra a helyre, ahová kerülnie kell.

Padlón, asztalon vagy talajon elhelyezve az rá áll. Az **ajtók és ablakok** falakba illeszthetők: kattintson egy falra, és azok a falban, kifelé nézve állnak. (A falfelületen ülnek; nem vágnak nyílást. Ahhoz rajzoljon téglalapot a falra, ahová az ablak kerül, és nyomás/húzással húzza át.)

Minden elem egy **komponens**: ha ugyanazt újra kiválasztja, újabb példány kerül elhelyezésre, és ha az egyiket szerkeszti, minden példány megváltozik. A {{ui:Komponensek}} listában is megjelenik, a {{ui:Elhelyezés}} gombbal további példányok adhatók hozzá.

## Mi van benne

| Csoport | Elemek |
|---|---|
| Ajtók és ablakok | Ajtó, dupla ajtó, ablak, széles ablak, garázskapu |
| Bútorok | Étkezőasztal, kerek asztal, szék, bárszék, kanapé, fotel, dupla és egyszemélyes ágy, íróasztal, könyvespolc, szekrény |
| Konyha és fürdő | Alsó és felső szekrény, konyhapult, hűtő, tűzhely, mosogatószekrény, WC, fürdőkád, zuhany, mosdó |
| Épület | Egyenes lépcső (15 lépcsőfok, egyenként 18 cm), kerek és négyzet alakú oszlop, gerenda |
| Telek és emberek | Fa, cserje, személy (1,75 m), autó |
| Környezeti elemek: fák, emberek és autók | Lombhullató fák (4, 6 és 10 m), egy tűlevelű, egy oszlopos fa, kerek és kis cserjék, egy sövény, egy cserepes növény, álló és sétáló emberek, egy gyerek, egy szedán és egy SUV: kerekebb formák saját színekkel, [renderelt képekhez](topic:render) és helyszínrajzokhoz |

Ezek egyszerű alakzatok, festhető, méretezhető vagy [egyedivé tehető](topic:groups-components), és módosítható testekből állnak. A fali szekrény a kattintott ponttól 1,45 m-rel magasabban lóg.

A környezeti elemeket a CadCraft rajzolja, és bármire szabadon felhasználhatók (CC0); ugyanezek a fák, emberek és autók megvannak a Library könyvtárban a BimCraft és a CadCraft számára. Az autó ablakait a {{ui:Színezett üveg}} anyaggal festik, így a képeken átlátszók.

## Szoba berendezése renderelésre

Jelöljön ki egy szoba padlóját (egy szintű, felfelé néző lapot, a modellben vagy csoporton belül), és használja a **Rendezés › Szoba berendezése…** menüpontot (a **Berendezés** gombot). Válassza ki, mi a szoba — hálószoba, nappali, étkező, konyha, fürdőszoba vagy iroda —, vagy hagyja, hogy a méret alapján találja ki. A kezdő bútorok a falak mentén, a leghosszabb faltól kezdve kerülnek el, semmi nem fedi egymást, és a szoba falaiba helyezett kezdő ajtók nyitási íve (valamint az ablakai szélessége a magas bútorok előtt) szabad marad. Ez egy szabályokon alapuló alapelrendezés, amelyet át kell nézni, nem tervezés: ugyanaz a szoba mindig ugyanazt az elrendezést kapja.

Minden egy csoportba kerül a **Bútorok** címkével, egy visszavonási lépésként: a visszavonáshoz, a csoport törléséhez vagy a címke elrejtéséhez. Az olyan elem, amely nem fér el, az állapotsorban megnevezve, a **Problémák** listában pedig megjegyzésként szerepel. A BimCraft **Szoba berendezése** funkciója ugyanazokat a szabályokat használja.
