---
title: Lapok nyomása és húzása testekké
summary: Alakítson lapot dobozzá, tegyen magasabbá vagy alacsonyabbá egy elemet, adjon hozzá öblöt vagy fülkét, és ismételjen távolságot dupla kattintással.
keywords: nyomás húzás, kihúzás, magasság, test, doboz, tömeg, magasabb, fülke, kiugrás, ismétlés, dupla kattintás, térfogat, szint, lapon, sík, azonos magasság
from: dc093c91
---

A {{ui:Nyomás/húzás}} ({{key:P}}) a lapot a saját irányában mozgatja: padlónál fel és le, falnál be és ki. Az eredmény a laptól függ.

## Test készítése egy lapból

1. Rajzoljon egy lapot, például egy téglalapot a talajon ([Lapok rajzolása](topic:draw-faces)).
2. Nyomja meg a {{key:P}} billentyűt.
3. Vigye a mutatót a lap fölé. Kiemelődik.
4. Kattintson a lapra, majd mozgassa a mutatót. A lap felemelkedik (vagy süllyed), és az éleiből oldalak nőnek ki. Az értékmező ({{ui:Távolság}}) és a tipp megmutatja a távolságot.
5. A befejezéshez kattintson, vagy írjon be egy távolságot, és nyomja meg a {{key:Enter}} billentyűt: `3m`, `10'`, `2700` milliméteres modellben.

   Most már zárt teste van. Jelölje ki az egészet, és csoportosítsa (lásd: [Csoportok és komponensek](topic:groups-components)): ekkor a {{ui:Entitásinfó}} megjeleníti a „Test: igen” sort és a térfogatát.

Egyedülálló lap bármerre mehet: húzza fel, ha tömeget szeretne a talaj fölé, nyomja le, ha gödröt vagy alapot.

:::tip
Két kattintás helyett nyomja meg a lapot, húzza, és engedje el. Érintőképernyőn ez a természetes mód: nyomjon, húzzon, emeljen.
:::

## Húzás más elem magasságáig

Húzás közben vigye a mutatót a modell másik részének sarka, felezőpontja, éle vagy segédvonala fölé. A lap ehhez a magassághoz illeszkedik, és egy jelölő mutatja a pontot. Használja két tömb azonos magasságúra készítéséhez, vagy hogy megálljon a [mérőszalaggal](topic:guides-measure) elhelyezett segédvonalnál.

Egy olyan lap fölé is vihető a mutató, amely párhuzamos azzal, amelyet nyom, például egy másik tömb tetejére vagy arra a dobozra, amelyen egy oszlop áll. A tipp „Lapon” szöveget mutat, és a nyomott lap ehhez igazodva végződik. Például nyomja le egy cső belső lapját, amíg egy szintbe nem kerül a cső alatti dobozzal.

A nyomott laphoz szögben álló lap nem ad szintet. A távolság a mutatót követi. Ugyanígy a nyomott lap mögötti lap sem ad szintet.

Ha a nyomott lap ismét egy síkba esik a körülötte lévő lapokkal, oldalai eltűnnek. Nulla magasságú oldal nem marad vissza, és a rajzolt körvonal a lapon marad, így később újra nyomhatja. Hogy ismét egy lap legyen, törölje a körvonal éleit a {{ui:Radír}} eszközzel: a két lap összeáll.

## Doboz magasabbá vagy alacsonyabbá tétele

Nyomás/húzás a doboz tetején. Mivel az oldalak már egyenesen felfelé futnak belőle, a tető egyszerűen elmozdul: a doboz magasabb vagy alacsonyabb lesz, és nem jönnek létre új élek.

- Ha a tetőt egészen az aljáig lenyomja, a doboz eltűnik. A ModelCraft nulla magasságnál megáll; soha nem fordítja ki a dobozt.
- Ugyanez igaz minden olyan lapra, amelynek szomszédai mind az irányában futnak, például egy fal végére.

## Öböl vagy fülke hozzáadása

1. Rajzoljon téglalapot egy doboz oldalára (a lapon kezdje; a lap síkjában marad).
2. Nyomja meg a {{key:P}} billentyűt, és húzza ki az új téglalapot **kifelé**. Anyagot ad hozzá: öblöt, kéményt, előtetőt.
3. Vagy nyomja **befelé**. Fülkét vág: tornácot, falmélyedést, visszahúzott bejáratot.

Ha az új rész oldalai már meglévő lapokkal esnek egy síkba, egy lappá olvadnak össze, így nem keletkeznek kóbor vonalak egy sík falon.

## Átnyomás teljesen át

Ha egy lapot egy testbe nyom, a mögötte lévő első lapnál megáll. Amikor eléri azt a lapot, átvágja a nyílást. Így készíthet ablakot és ajtót vastag falba. Lásd: [Nyílás vágása a falon át](topic:openings).

## Távolság beírása

A lap kijelölése után írja be a távolságot, és nyomja meg a {{key:Enter}} billentyűt.

- A beírt távolság abba az irányba megy, amerre mozgatta. Ha még nem mozgatott, a lap eleje felé megy (testből kifelé, a talajtól felfelé).
- Negatív számot írjon be, például `-500`, hogy az ellenkező irányba menjen.
- Ha a kattintás előtt másként döntene, nyomja meg a {{key:Esc}} billentyűt. A lap visszaáll.

## Az utolsó távolság ismétlése

Egy nyomás/húzás után, miközben a {{ui:Nyomás/húzás}} még ki van jelölve, kattintson duplán egy másik lapra. Ugyanazzal a távolsággal mozdul el. Ez a gyors mód arra, hogy több falnak vagy több padlónak ugyanazt a vastagságot vagy magasságot adja.

A ModelCraft addig emlékszik a távolságra, amíg másik eszközre nem vált.

## Tudnivalók

- A nyomás/húzás egyszerre egy lapon dolgozik. Ha olyasmire kattint, ami nem lap, az állapotsor azt írja: „A nyomás/húzás lapon működik. Kattintson egy lapra.”
- Csoporton vagy komponensen belüli lap nyomásához/húzásához először nyissa meg azt (kattintson rá duplán).
- Ha az **Ütközés** be van kapcsolva, a nyomás vagy húzás, amely másik testbe ütközik, ott megáll, ahol érintkezik, a tipp pedig megmondja, mit ér (az objektum nevét vagy a „laza geometria ebben a csoportban” szöveget), és kiemeli a találkozott lapokat. Az a zseb, amelyet a saját testébe nyom (például egy eltolt lapot visszanyomva lefelé), ugyanannak a testnek a része, és falai soha nem állítják meg.
- Két test, amelyet egymásba nyomnak, nem vágja és nem egyesíti egymást: lapjaik egyszerűen átmennek egymáson. Lásd: [Még nincs elkészítve](topic:not-built-yet).
