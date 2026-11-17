---
title: A ModelCraft beállításai
summary: Válassza ki az ismert billentyűkiosztást, tegye lehetővé a körbejárást és eltolást érintőpaddal kamera gombok nélkül, és kapcsolja be vagy ki a fogást és a testek ütközését.
keywords: beállítások, preferenciák, vezérlés, billentyűstílus, billentyűkiosztás, billentyűparancsok, blender, érintőpad, touchpad, görgetés, körbejárás, csippentés, fogás, ütközés, átfedés, áthaladás
from: caf77d5b
---

Nyissa meg a {{ui:Beállítások}} menüt az alkalmazássávon lévő fogaskerékkel vagy a {{key:Mod+,}} billentyűkkel. Az első lap, a {{ui:ModelCraft}}, az ehhez az alkalmazáshoz tartozó beállításokat tartalmazza; a {{ui:Általános}} az összes CadCraft-alkalmazás közös beállításait (téma, eszköztár, panelek). A ModelCraft beállításai csak ebben az alkalmazásban léteznek: itt módosítja őket, és a böngésző megjegyzi őket.

## Vezérlés: mely billentyűk és egérgombok

Két billentyűstílus van. Itt kapcsolhatja őket, a nézet jobb alsó sarkában lévő {{ui:Billentyűk: Nyomás/húzás}} / {{ui:Billentyűk: Modellező}} gombokkal, vagy az eszköztár {{ui:Továbbiak}} menüjének végén:

- **Nyomás/húzás stílus** (kezdeti): egy betű választ egy eszközt: {{key:L}} vonal, {{key:R}} téglalap, {{key:P}} nyomás/húzás, {{key:M}} mozgatás, {{key:Q}} forgatás, {{key:S}} léptékezés, {{key:G}} komponenssé alakítás. Lásd [Billentyűk és egérműveletek](topic:keyboard).
- **Modellező stílus** (a hálós modellezők, például a Blender billentyűi): először jelöljön ki, majd a kijelölésen azonnal végezzen műveletet. A {{key:G}} mozgatja, a {{key:R}} forgatja, az {{key:S}} léptékezi, a mutató helyétől kezdve — nincs szükség előzetes kattintásra. Mozgatás közben a {{key:X}}, {{key:Y}} vagy {{key:Z}} a piros, zöld vagy kék tengelyt zárolja, egy beírt szám adja meg a távolságot (vagy a fokot, vagy a szorzót), egy kattintás vagy az {{key:Enter}} helyezi le, az {{key:Esc}} vagy a jobb kattintás pedig visszahelyezi. Ezután ismét a {{ui:Kijelölés}} eszközben van.

A billentyűstílus azonos a menüstílussal: a Modellező billentyűstílus a {{ui:Modellező}} menüstílus, és az egyik választása a másikat is kiválasztja. Lásd [Menük, billentyűk és egér](topic:menus-keys-and-mouse). A teljes modellező lista a [Billentyűk és egérműveletek](topic:keyboard#modeler-keys) oldalon található. Az eszköztár és a kezdőkártya eszköztippjei a kiválasztott stílust követik.

## Görgetés: egérgörgő vagy érintőpad

- **Automatikus felismerés** (kezdeti): a ModelCraft figyeli a görgetést. Az oldalirányú vagy finom görgetés, ahogy az érintőpad küldi, körbejár; a teljes görgőkattintások nagyítanak.
- **Egérgörgő**: a görgetés mindig a mutató felé nagyít.
- **Érintőpad**: két ujjal húzva körbejár, a {{key:Shift}} lenyomva tartásával és húzással eltol, csippentéssel nagyít. A {{ui:Körbejárás}}, {{ui:Eltolás}} és {{ui:Nagyítás}} gombokra soha nincs szükség.

A csippentés minden választásnál nagyít. Ha az automatikus felismerés rosszul tippel az egerére vagy érintőpadjára, válassza ki a ténylegeset.

:::tip
A Modellező stílusban körbejárhat a {{key:Alt}} lenyomva tartásával és húzással, eltolni pedig a {{key:Alt+Shift}} kombinációval és húzással lehet — ez hasznos laptopon, középső gomb nélkül.
:::

## Fogás

**Fogás pontokra, élekre és tengelyekre** (kezdeti állapotban be): a mutatót a végpontokhoz, felezőpontokhoz, élekhez, segédvonalakhoz és a piros, zöld és kék tengelyekhez húzza — lásd [Következtetés](topic:inference). Kapcsolja ki, ha valamit szabadon szeretne elhelyezni más geometria közelében anélkül, hogy ugrálna. A lapok, a talaj és a tengelyzárolások fogás nélkül is működnek.

A {{ui:Fogás}} gomb a nézet jobb alsó sarkában ugyanezt teszi a munkamenetre (ez is mentésre kerül). A Modellező stílusban a {{key:Shift+Tab}} kapcsolja.

## Testek megállnak az érintkezésnél

**Testek megállítása érintkezésnél** (kezdeti állapotban be) megakadályozza, hogy egy falat egy másik falon áthúzzanak. A {{ui:Mozgatás}} (valamint a {{key:G}} és a beillesztés utáni mozgatás a {{key:Mod+D}} billentyűvel) esetén a kijelölés a másik testig csúszik, és ott megáll; a {{ui:Nyomás/húzás}} esetén a lap ott áll meg, ahol egy másik testbe ütközik. Valami tetején állni és azon csúszni rendben van — csak a belsejébe való behatolás van megakadályozva. Ami indításkor már átfed, azt még szét lehet húzni.

Ha szándékosan akar valamit átnyomni, kattintson a jobb alsó sarokban lévő {{ui:Ütközés}} gombra (vagy törölje a beállítást), végezze el a mozgatást, majd kattintson rá újra.

:::note
Az ütközéseket a mozgatásnál és a nyomás/húzásnál ellenőrzik. A {{ui:Forgatás}} és a {{ui:Léptékezés}} még nem ellenőrzi őket, és az érintkező, laza geometria továbbra is összekapcsolódik, ahogy mindig is: a külön álló dolgokat tartsa [csoportokban](topic:groups-components), hogy külön maradjanak.
:::

## 3D nyomtató ágya

A nyomtató ágyának mérete: {{ui:Nincs beállítva}} (kezdeti), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 vagy 300 × 300 × 400 mm. Válassza ki a nyomtató építési térfogatához legközelebbi méretet. A [3D nyomtatás ellenőrzése](topic:print-3d) jelzi, ha a modell nagyobb az ágynál; a {{ui:Nincs beállítva}} esetén a méret nincs ellenőrizve.

## Körbejárás és eltolás

**Körbejárás a kurzor alatti elem körül** (kezdeti állapotban be): a körbejárás a modell mutató alatti része körül fordul, az eltolás pedig ezt a pontot a mutató alatt tartja; üres területen mindkettő a nézet középpontját használja. Kikapcsolva mindig a nézet középpontja körül jár. A **Körbejárás sebessége** és az **Eltolás sebessége** 0,25×-tól 3×-ig terjed (1× a kezdeti), és az egérre, az érintőpadra, az érintésre és a nyílbillentyűkre vonatkozik. Lásd [Körbejárás, eltolás és nagyítás](topic:orbit-pan-zoom).

## Sarokjelző

A 3D nézet sarkában látható: **Nézetkocka** (kezdeti; jobb felül — kattintson egy lapra, élre vagy sarokra, hogy onnan nézzen; húzza a körbejáráshoz; húzza az iránytű gyűrűjét a modell elforgatásához), **Tengelyikon** (a bal alsó sarokban lévő kis X, Y, Z jelölő, amely a nézettel együtt fordul: X piros, Y zöld, Z kék), vagy **Nincs**. Lásd [A nézetkocka](topic:view-cube).
