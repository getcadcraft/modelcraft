---
title: Nagy modell felosztása nyomtatáshoz
summary: Vágja a nyomtatóhoz túl nagy modellt a tárgyasztalra illeszkedő darabokra, csapokkal, kulcsokkal, galambfarkakkal, csapszeg- vagy mágnesfuratokkal, az illesztés számával mindkét lapon, és töltse le az összes darabot és egy összeszerelési lapot egy zip-fájlban.
keywords: 3d nyomtatás, felosztás, ferde, ferde vágás, szögvágás, ferdített vágás, felosztó, vágás, túl nagy, tárgyasztal mérete, építési térfogat, darabok, alkatrészek, csatlakozók, csapok, kulcsok, galambfark, csapszeg, mágnes, hézag, tűrés, darabszámok, összeszerelés, szétszedett nézet, zip, stl, 3mf, licenc, license, USB-kulcs, dongle
from: ee96ba77
---

Ha a modell nagyobb a nyomtató tárgyasztalánál, a **Felosztás nyomtatáshoz** a darabokat a tárgyasztalra illeszkedő részekre vágja, csatlakozókat ad hozzá, hogy a darabok összeillesztéskor egymáshoz igazodjanak, és minden illesztés mindkét lapján ugyanazt a számot gravírozza. Nyissa meg a {{ui:Exportálás}} › {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} menüpontot; a párbeszédpanel **Nyomtatási eszközök** sorában található a {{ui:Felosztás nyomtatáshoz}}. Kártyaként nyílik meg a nézet fölött.

A nyomtatható részeken dolgozik: a kijelölésen, vagy ha nincs kijelölés, a látható mindenen. Ami nyomtatható, annak zárt testnek kell lennie; ha az ellenőrzés lyukakat talál, előbb használja a [Javítás](topic:print-tools#repair) eszközt.

A ModelCraft-ban, a számítógépen fut: nincs licenckiszolgáló, nincs USB-kulcs, és semmi sem kerül feltöltésre.

## A vágás módja

- **Illesztés a tárgyasztalhoz, a lehető legkevesebb darabbal**: adja meg a tárgyasztal szélességét, mélységét és magasságát (ezek a {{ui:Beállítások}} › ModelCraft › 3D-nyomtató menüpontból indulnak). A kártya megmutatja, hány darabra van szükség és mekkora mindegyik; a modellt egyenlő darabokra vágja, a lehető legkevesebbre. A darab a fájlokban oldalán fekhet, ha ez teszi illeszkedővé. A darabból kiálló csatlakozók beleszámítanak a méretébe.
- **Megadott helyeken**: válassza ki a tengelyt, amelyre vágni szeretne, és írja be milliméterben, a modell alsó végétől mért helyeket, vesszővel elválasztva (a `100, 200` három darabot készít).
  A **Ferdítés** a vágásokat legfeljebb 60°-kal elforgatja a másik két tengely egyike körül (például a Z-re merőleges vágás az X körül ferdítve): minden ferde vágás a modell középvonalán megy át a megadott helyen, több ragasztási felületet ad a darabjaknak, és lejtős felületen jobban elrejti az illesztést. A csatlakozók a vágásra merőlegesen állnak.

A vágósíkokat szaggatott vonalak rajzolják a modell köré, amíg a kártya nyitva van.

## Csatlakozók

Minden hely, ahol két darab érintkezik, csatlakozókat kap; ezek ott helyezkednek el, ahol a legtöbb hely van: a külső széltől legalább a **legkisebb falvastagság**, a **hézag** és a saját méretük összegével távolabb, és elég messze minden másik vágástól, hogy két furat soha ne találkozzon. Hosszú lapon két csatlakozó oszlik el rajta, így a darabok nem fordulhatnak el.

- **Kerek csapok**: egy csap az egyik darabon (a hegyén letört éllel), furat a másikon.
- **Négyzetes kulcsok**: ugyanaz, négyzet keresztmetszetben, így a darab csak egyféleképpen illeszthető.
- **Galambfarkak**: egy nyelv, amely oldalról csúszik be a horonyba. Ahol a horony egyik vége találkozna egy másik vágással, a galambfark rövidebb marad, és a nyitott végén csúszik be. A galambfarkak egy irányú vágásokhoz illenek (szeletek sora); rácsnál használjon csapokat vagy csapszegeket.
- **Csapszeg-furatok**: furat mindkét oldalon; a csapszegeket is kinyomtatja (a zip-fájlban).
- **Mágneszsebek**: zseb mindkét oldalon a megadott átmérőjű és vastagságú kerek mágnes számára. A ragasztás előtt ellenőrizze a pólusokat.
- **Nincs (ragasztás)**.

A **hézag** a csap és a furata közötti rés mindkét oldalon (kezdetben 0,2 mm). Ez pontosan a megadott szám: a kerek furatokat kissé nagyobbra készítjük, hogy a lapos oldalaik, nem a sarkaik, tartsák meg ezt a rést. Növelje, ha a nyomtató darabjai túl szorosak lesznek.

Ha egy illesztésnek nincs hely csatlakozónak (vékony fal, kis érintkezési felület), a kártya ezt jelzi: ezt az illesztést ragassza.

## Illesztésszámok

Ha be van kapcsolva a **Az illesztésszámok gravírozása mindkét lapra** lehetőség, minden illesztés megkapja a két darabja számát, például `3-4`, amelyet mindkét lapon 0,6 mm mélyen gravíroz, mindkét oldalon helyes irányban olvasható. A számok kezdetben 5 mm magasak, és kisebbre méreteződnek, hogy elférjenek, egészen 2,5 mm-ig; a számára helyet nem találó illesztések listába kerülnek. A darabok számozása alulról felfelé történik.

## Előnézet, letöltés, a modell felosztása

1. A {{ui:Előnézet}} elvégzi a vágást, és megmondja, hány darab, illesztés és csatlakozó van, hogy minden darab átmegy-e a 3D-nyomtatási ellenőrzésen és ráfér-e a tárgyasztalra, és felsorolja minden darab méretét. Gyűrű jelöli a nézetben minden csatlakozót és számot.
2. A {{ui:A darabok letöltése (.zip)}} egyetlen zip-fájlt ment: fájlt minden darabhoz (STL vagy 3MF, a **Fájlok** alatt választottak szerint), mindegyik a tárgyasztalon állva; a csapszegeket; és az **összeszerelési lapot** — a darabok szétszedett képét a számaikkal (`assembly.svg` és `assembly.png`) és a darabok és illesztések listáját (`assembly.txt`).
3. A {{ui:A modell felosztása}} egy lépésben a darabokat a modellbe helyezi a kijelölt csoportok vagy komponensek helyére, az összeszerelési lapon szereplő nevekkel: a {{ui:Visszavonás}} visszaállítja az eredetit. A felosztáshoz ki kell jelölni a felosztandó csoportokat vagy komponenseket; a letöltés azon működik, ami nyomtatható.

## Csatlakozók kézi áthelyezése

Előnézet után a **Csatlakozók kézzel** lehetőséggel javíthatja, hová kerülnek a csatlakozók:

- {{ui:Egy mozgatása}}: kattintson a nézetben egy piros gyűrűre (zöldre vált), majd kattintson arra a helyre a vágáson, ahová kerülnie kell.
- {{ui:Egy hozzáadása}}: kattintson a nézetben arra a helyre, ahová csatlakozó kerüljön. A kattintás eléri a vágósíkot, és a két darab közé kerül.
- {{ui:Egy eltávolítása}}: kattintson egy piros gyűrűre, hogy eltávolítsa azt a csatlakozót.

Minden módosítást ugyanúgy ellenőriz, mint az automatikusakat: a körvonalhoz túl közeli helyet, másik vágást vagy másik csatlakozót nem hoz létre, és a kártya ezt jelzi. A {{ui:Újra automatikus}} elfelejti a kézzel megadott helyeket. Ezek addig maradnak meg, amíg a modell, a kijelölés és a vágások változatlanok.

Az előnézet addig marad érvényben, amíg a modell, a kijelölés vagy egy beállítás meg nem változik; ekkor a kártya újabb előnézetet kér.

:::note
Minden darab a letöltés előtt úgy van ellenőrizve, ahogyan a 3D-nyomtatási ellenőrzés ellenőrizné. A szeletelő továbbra is dönti el, hogyan nyomtatódik az egyes darab: ott nézze meg mindegyiket, és először egy illesztést nyomtasson ki, hogy lássa, hogyan kezeli a nyomtatója a hézagot.
:::
