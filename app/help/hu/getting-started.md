---
title: Első lépések a ModelCrafttal
summary: Mire való a ModelCraft, hogyan nyitja meg, és az első doboza egy téglalaptól a mentett modellig.
keywords: indulás, első modell, kezdés, útmutató, bevezetés, doboz, tömegmodell, 3d, nyomás/húzás, gyors útmutató, vezetett, kezdő, új a 3d-ben
from: d47ad719
---

A ModelCraft korai tervezéshez való 3D modellező: tömegtanulmányokhoz, helyiségelrendezésekhez, gyors épületformákhoz és az általuk vetett árnyékokhoz. Sík alakzatokat rajzol, testekké húzza fel őket, és a lapjaikra rajzolva dolgozik rajtuk tovább. A böngészőben fut, és a modelljei a saját számítógépén maradnak.

Ha használt már SketchUpot, a tudása nagy része átvihető: ugyanazok az eszközbetűk, a nyomás/húzás, a mérték megadására szolgáló értékmező, a csoportok és a komponensek. A [Más modellezőkből érkezik](topic:coming-from) felsorolja, mi más.

## A ModelCraft megnyitása

1. Nyissa meg a ModelCraftot a Chrome, az Edge, a Firefox vagy a Safari egy aktuális verziójában. Lásd [Böngészők és számítógépek](common:browsers).
2. Várja meg, amíg megjelenik a 3D nézet: egy világos (vagy sötét) terület középen, rajta egy „A modellezés megkezdése” című kártya.

A képernyőn felül eszköztár van, balra a {{ui:Vázlatnézet}} és a {{ui:Komponensek}}, középen a 3D nézet, jobbra az {{ui:Entitásinfó}}, a {{ui:Stílus}} és a {{ui:Jelenetek}}, alul pedig állapotsor az értékmezővel és a mértékegységekkel. [A ModelCraft képernyője](topic:workspace) minden részt elmagyaráz.

:::note
A ModelCraftnak WebGL kell, a böngésző 3D-rajzolási funkciója. Ha a képernyő közepe üres marad, és az eszközök nem csinálnak semmit, lásd [Hibaelhárítás](topic:troubleshooting#the-3d-view-is-blank).
:::

## Először ellenőrizze a mértékegységeket

Nézze meg a jobb alsó sarkot. A mértékegység-választó mutatja, miben mérik a hosszakat.

- Egy új modell **lábban és hüvelykben** indul, ha a böngészője az Egyesült Államokra van állítva (és Libériára, Mianmarra), és **milliméterben** mindenhol máshol.
- A módosításhoz válasszon másik mértékegységet a választóban: {{ui:láb és hüvelyk}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} vagy {{ui:mm}}. Maga a modell nem változtat méretet; csak az változik, hogyan jelennek meg a hosszak, és hogyan értelmeződnek a mértékegység nélküli számok.

A mértékegység nélkül beírt szám a modell mértékegységét használja. Egy láb-hüvelyk modellben a mértékegység nélküli szám **hüvelyk**, így a `120` 10 lábat jelent.

## A ModelCraft vezesse az első modelljét

Új a 3D-ben? Az {{ui:A modellezés megkezdése}} kártyán kattintson a {{ui:Vezetett első modell}} gombra (a {{ui:Nézetek}} menüben is megvan). Egy kis kártya négy lépésen vezeti végig, egy sík téglalaptól a 3D-nyomtatóra kész modellig:

1. Rajzoljon egy téglalapot a talajra.
2. Húzza fel dobozzá.
3. Tegye a dobozt egyetlen objektummá (csoporttá).
4. Ellenőrizze 3D nyomtatásra, majd töltsön le egy 3MF- vagy STL-fájlt.

A kártya a modellt figyeli, nem a gombokat: továbblép, ha a lépés kész, bárhogyan csinálta, és visszalép egyet, ha visszavonja. A {{ui:Válassza ki az eszközt}} kiválasztja helyette az eszközt. Bármikor bezárhatja a {{ui:×}} gombbal.

## Az első doboz megrajzolása

1. Nyomja meg az {{key:R}} billentyűt a {{ui:Téglalap}} eszközhöz, vagy kattintson a {{ui:Téglalap}} gombra az eszköztár {{ui:Rajzolás}} csoportjában.
2. Kattintson egyszer a talajra, a nézet közepe közelében. Ez az első sarok.
3. Mozgassa a mutatót távolabb. Egy téglalap követi, és az alul lévő értékmező ({{ui:Méretek}} feliratú) mutatja a méretét.
4. Írja be a méretet, és nyomja meg az {{key:Enter}} billentyűt: például `4m,3m`, vagy `16',12'` lábban és hüvelykben. Nem kell előbb az értékmezőbe kattintania; a szám begépelése oda küldi.

   Kap egy sík téglalapot a talajon. Ez egy **lap**: egy felület, körülötte élekkel.

5. Nyomja meg a {{key:P}} billentyűt a {{ui:Nyomás/húzás}} eszközhöz.
6. Kattintson a téglalapra, mozgassa a mutatót felfelé, és kattintson újra. Vagy kattintson a téglalapra, és írjon be egy magasságot, például `3m` vagy `10'`, majd nyomja meg az {{key:Enter}} billentyűt.

   A téglalapból doboz lesz, tetővel, aljjal és négy oldallal.

7. Nyomja meg a {{key:Space}} billentyűt, hogy visszatérjen a {{ui:Kijelölés}} eszközre, majd kattintson a doboz tetejére. A jobb oldali {{ui:Entitásinfó}} megmutatja a területét.

:::tip
Kétszeri kattintás helyett húzhat is: nyomja meg az első sarkot, húzza, és engedje el a másodiknál. Mindkét mód működik minden rajzolóeszközzel.
:::

## Körbenézés

- **Körbejárás:** húzzon a középső egérgombbal (a görgővel), vagy nyomja meg az {{key:O}} billentyűt, és húzzon a bal gombbal.
- **Eltolás:** húzzon a jobb gombbal, vagy a középső gombbal a {{key:Shift}} lenyomva tartása közben.
- **Nagyítás:** forgassa a görgőt. A mutató alatti rész felé nagyít.
- **Minden megjelenítése:** nyomja meg a {{key:Shift+Z}} billentyűket, vagy kattintson a {{ui:Teljes kiterjedés}} gombra.

Érintőpadon vagy érintőképernyőn a mozdulatok mások. Lásd [Körbejárás, eltolás és nagyítás](topic:orbit-pan-zoom).

## Visszavonás

Nyomja meg a {{key:Mod+Z}} billentyűt a visszavonáshoz és a {{key:Mod+Y}} billentyűt az ismétléshez, vagy használja az eszköztár {{ui:Visszavonás}} és {{ui:Ismétlés}} gombját. A ModelCraft az utolsó 200 lépést megjegyzi, amíg a modell nyitva van. Az előzmények nem kerülnek a fájlba.

## A modell mentése

1. Kattintson a {{ui:Mentés}} gombra a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+S}} billentyűt.
2. A böngésző letölt egy fájlt a modell nevével, például `Untitled.modelcraft`. Az állapotsor megmondja, hová került: „A(z) Untitled.modelcraft mentve a letöltések közé.”

**A mentés egy letöltés.** Minden mentés új másolatot készít a letöltések mappában; nem írja felül a megnyitott fájlt. A rendezett projektmappához helyezze át vagy nevezze át a fájlt ott saját kezűleg. A [Megnyitás, mentés, importálás és exportálás](topic:files) elmagyarázza, miért, és mit tehet még.

:::warning
A ModelCraft nem ment magától. Ha nem mentett módosításokkal zárja be a lapot, a böngésző előbb rákérdez („Elhagyja az oldalt?”). Válassza a maradást, majd mentsen.
:::

## Súgó

Nyomja meg az {{key:F1}} billentyűt, vagy kattintson a {{ui:Súgó}} gombra az alkalmazássávban, hogy a modell mellett megnyissa ezt a súgót. Kapcsolat nélkül is működik. Nyomja meg újra az {{key:F1}} billentyűt, vagy a súgóban az {{key:Esc}} billentyűt a bezáráshoz. Lásd [A súgó használata](common:help).

## Merre tovább

- [Lapok rajzolása vonalakkal, téglalapokkal és körökkel](topic:draw-faces)
- [Lapok húzása és nyomása testekké](topic:push-pull)
- [Pontos méretek beírása az értékmezőbe](topic:value-box)
- [Minden billentyű és egérművelet](topic:keyboard)
