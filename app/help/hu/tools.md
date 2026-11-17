---
title: Eszközlista
summary: Minden ModelCraft-eszköz a billentyűjével, azzal, hogy mit csinál minden kattintás, és hogy mit írhat az értékmezőbe, miközben az eszköz dolgozik.
keywords: eszközök, eszköztár, parancsok, lista, vonal, téglalap, kör, sokszög, párhuzamos, ív, görbe, spline, követés, söprés, 2 pontos ív, ív középponttal, kijelölés, nyomás húzás, mozgatás, forgatás, léptékezés, radír, mérőszalag, méretezés, körbejárás, eltolás, nagyítás, komponens elhelyezése
from: e08a274f
---

A státuszsor tippje mindig megmondja, mit vár az aktuális eszköz a következő lépésben. Az {{key:Esc}} megszakítja azt, amin az eszköz éppen dolgozik.

## Rajzoló eszközök

| Eszköz | Billentyű | Kattintások | Írjon az értékmezőbe |
|---|---|---|---|
| {{ui:Vonal}} | {{key:L}} | Kezdőpont, majd minden következő pont. Megáll, amikor egy lap bezárul, vagy ha megnyomja az {{key:Esc}} billentyűt | Hossz a mutató irányában; `[x,y,z]` egy pont; `<dx,dy,dz>` egy eltolás ({{ui:Hossz}}) |
| {{ui:Téglalap}} | {{key:R}} | Első sarok (talaj vagy lap), szemközti sarok | Szélesség és mélység: `4m,3m` ({{ui:Méretek}}) |
| {{ui:Kör}} | {{key:C}} | Középpont (talaj vagy lap), egy pont a szélén | Az első kattintás előtt: oldalak, `24s` vagy `24` ({{ui:Oldalak}}). Utána: a sugár ({{ui:Sugár}}) |
| {{ui:Sokszög}} | {{key:N}} | Középpont, egy sarok | Ugyanaz, mint a Körnél; 6 oldallal indul |
| {{ui:Ív}} | {{key:A}} | Kezdőpont, végpont, majd a domborulat | A húr hossza a kezdőpont után ({{ui:Hossz}}); a domborulat a végpont után ({{ui:Kihajlás}}); `12s` szakaszokhoz |
| {{ui:Szögmérő}} | — | Középpont, 0° pont, majd a szög | A szög fokban ({{ui:Szög}}) |
| {{ui:Követés}} | — | Válasszon ki egy útvonalat, majd kattintson a lapra (vagy kattintson a lapra, majd az útvonal egy élére) | — |
| {{ui:Festés}} | {{key:B}} | Egy lap, csoport vagy komponens | — ({{key:Ctrl}} összefüggő, {{key:Shift}} minden ilyen színű, {{key:Alt}} színt vesz fel) |
| {{ui:Párhuzamos}} | {{key:F}} | Egy lap (vagy előbb jelöljön ki egy lapot vagy éleket), majd az oldal és a távolság | A távolság ({{ui:Távolság}}); a lapba befelé irányul |
| {{ui:Görbe}} | — | Pontok, amelyeken a görbe áthalad; az {{key:Enter}} vagy a dupla kattintás befejezi | Hossz a mutató irányában, `[x,y,z]` vagy `<dx,dy,dz>` a következő pontig |
| {{ui:Ív középponttal}} | — | Középpont, kezdőpont, majd a végpont | A sugár a középpont után; a szög fokban a kezdőpont után; `12s` szakaszokhoz |

## Szerkesztő eszközök

| Eszköz | Billentyű | Kattintások | Írjon az értékmezőbe |
|---|---|---|---|
| {{ui:Kijelölés}} | {{key:Space}} | Kattintás, dupla kattintás, hármas kattintás, húzás dobozzal. Lásd [Dolgok kijelölése](topic:select) | Egy kijelölt mérettel vagy éllel: új hossz, amely átméretezi a modellt |
| {{ui:Nyomás/húzás}} | {{key:P}} | A lap, majd a távolság. Egy lapra duplán kattintva megismétli az előző távolságot | Távolság; a negatív az ellenkező irányba megy ({{ui:Távolság}}) |
| {{ui:Mozgatás}} | {{key:M}} | Egy pontból egy pontba. Másoláshoz tartsa lenyomva a {{key:Ctrl}} vagy az {{key:Alt}} billentyűt | Távolság a mutató irányában, `<dx,dy,dz>` vagy `[x,y,z]` ({{ui:Távolság}}). Másolás után: `3x` vagy `/3` |
| {{ui:Forgatás}} | {{key:Q}} | Középpont (lapon: a síkjában fordít), kezdő irány, végirány | A szög fokban ({{ui:Szög}}) |
| {{ui:Léptékezés}} | {{key:S}} | Az a pont, amely megmarad, egy vonatkoztatási pont, az új méret | Szorzó: `2`, `0.5` ({{ui:Léptékezés}}) |
| {{ui:Radír}} | {{key:E}} | Kattintás vagy húzás élek, csoportok, segédvonalak és méretek fölött | nincs |
| {{ui:Mérőszalag}} | {{key:T}} | Egy élről: párhuzamos segédvonal. Egy pontról: méri, és segédpontot hagy | Az eltolás ({{ui:Párhuzamos}}) vagy a távolság ({{ui:Hossz}}) |
| {{ui:Méretezés}} | {{key:D}} | Két sarok (vagy egy él), majd a méretvonal helye. Lásd [Méretezés és átméretezés](topic:dimensions) | Az eltolás ({{ui:Párhuzamos}}). Közvetlenül utána: új hossz, amely átméretezi a modellt |

A {{ui:Mozgatás}}, a {{ui:Forgatás}} és a {{ui:Léptékezés}} a kijelölésen működik. Ha nincs kijelölés, előbb azt veszik, amire kattint (egy lap az éleit is magával hozza).

## Kamera-eszközök

| Eszköz | Billentyű | Húzással |
|---|---|---|
| {{ui:Körbejárás}} | {{key:O}} | Körbeforgatja a modell mutató alatti részét ({{key:Shift}} eltolja) |
| {{ui:Eltolás}} | {{key:H}} | Csúsztatja a nézetet |
| {{ui:Nagyítás}} | {{key:Z}} | Nagyítás: felfelé nagyít, lefelé kicsinyít |
| {{ui:Teljes kiterjedés}} | {{key:Shift+Z}} | (gomb, nem eszköz) Az egész modell illesztése |

Egérrel ritkán van szükség ezekre: a középső gombbal húzva körbejár, a jobb gombbal húzva eltol, a görgővel pedig bármely eszközzel nagyít. Lásd [Körbejárás, eltolás és nagyítás](topic:orbit-pan-zoom).

## Rendszerezés

| Gomb | Billentyű | Teendő |
|---|---|---|
| {{ui:Komponens}} | {{key:G}} | A kijelölést komponenssé alakítja |
| {{ui:Csoport}} | {{key:Shift+G}} | A kijelölést csoporttá alakítja |
| {{ui:Felbontás}} | nincs | A kijelölt csoportokat és komponenseket visszaalakítja szabad geometriává |

## Komponens elhelyezése

Nincs az eszköztáron: kattintson az {{ui:Elhelyezés}} gombra a {{ui:Komponensek}} panelen egy komponens mellett. Kattintson egyszer oda, ahová a komponens origója kerül; az eszköz ezután visszatér a {{ui:Kijelölés}} eszközre.
