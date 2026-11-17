---
title: Modell előkészítése 3D-nyomtatásra
summary: Ellenőrizze, hogy egy modell zárt-e és jó irányba néz, lássa a méretét, alapját és túlnyúlásait, javítsa, ami hibás, és töltse le STL vagy 3MF formátumban a szeletelőjéhez.
keywords: 3D-nyomtatás, nyomtatás, nyomtató, szeletelő, stl, 3mf, vízzáró, zárt, jól záródó, test, lyukak, befelé fordítva, túlnyúlás, támaszok, alap, nyomtatóasztal, milliméter, export, javítás, üreges, asztal mérete, kezdő, falvastagság, nyomtatási eszközök
from: 948e19af
---

A 3D-nyomtató szeletelőjének zárt alakzat kell: nincsenek lyukak, minden lap kifelé mutat, és semmi nem halad át önmagán. Az {{ui:Exportálás}} › {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} pontosan ezt ellenőrzi, mielőtt a fájlt letölti.

## Ellenőrzés és letöltés

1. Jelölje ki, amit nyomtatni szeretne: egy vagy több csoportot vagy komponenst, vagy néhány lapot. Kijelölés nélkül minden látható elem kinyomtatódik.
2. Kattintson a {{ui:Fájl}} csoportban az {{ui:Exportálás}} gombra, majd a {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} lehetőségre.

   A párbeszédpanel egy sorral kezdődik: „Készen áll a nyomtatásra”, a nyomtatás előtt javítandó dolgok száma, vagy az előbb megnézendők száma. Minden probléma három részből áll: mi a hiba, miért számít, és mit tegyen. Ezután következik a méret milliméterben, a térfogat, a háromszögek száma és a nyomtatóasztal.

3. Ha a párbeszédpanel javítandó dolgokat sorol fel, kattintson a {{ui:A javítható javítása}} gombra (lent). Az ellenőrzés magától újra lefut.
4. Kattintson a {{ui:3MF letöltése}} vagy az {{ui:STL letöltése}} gombra.

Ami kinyomtatódik, az az, amit lát: a rejtett lapok, a rejtett csoportok és komponensek, valamint a rejtett címkén lévő elemek kimaradnak. A méretek mindig milliméterben vannak, azt a mértékegységet várják a szeletelők, bármi is a modell mértékegysége.

:::tip
Ha a szeletelő olvassa, részesítse előnyben a 3MF-et: megtartja a színeket és a mértékegységeket. Az STL egyiket sem tartalmazza, és a szeletelők milliméterben számolnak.
:::

## Mit ellenőriz az ellenőrzés

Ezek megállítják vagy elrontják a nyomtatást, és a párbeszédpanel „Nem áll készen a nyomtatásra” üzenetet ír ki:

| Probléma | Mit jelent | Mit tegyen |
|---|---|---|
| Lap csak az egyik oldalon | Lyuk: egy élnek van lapja az egyik oldalon, a másikon nincs | Rajzolja meg a hiányzó lapot (a résen áthúzott vonal gyakran lezárja), vagy használja a {{ui:Javítás}} lehetőséget (lent) |
| Három vagy több lap osztja meg | A lapok egy bordában vagy egy test belsejében lévő falban találkoznak | Törölje a belső lapot |
| Ellentétes irányba néző lapok | Egyesek befelé, mások kifelé mutatnak | Jelölje ki a befelé néző lapokat, és kattintson az {{ui:Lap megfordítása}} gombra az {{ui:Entitásinfó}} panelen |
| Befelé fordítva | Egy egész zárt alkatrész befelé mutat | Jelölje ki a lapjait, és fordítsa meg őket |
| Önmagán áthalad | Egy alkatrész önmagába gyűrődik | {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Metszés a modellel}}, majd törölje, ami belül van. Lásd: [Lapok metszése](topic:intersect) |

Ezek figyelmeztetések: a modell kinyomtatódik, de érdemes előbb ránézni.

- **Külön alkatrészek átfedik egymást**, vagy **lapjukkal érintkeznek**: a szeletelők általában egybeolvasztják őket. Tisztább fájlhoz egyesítse őket a {{ui:Testek}} › {{ui:Egyesítés}} funkcióval. Lásd: [Testeszközök](topic:solids).
- **Alul semmi nem fekszik sík felületen**: fordítsa a modellt úgy, hogy egy lapja a nyomtatóasztalon feküdjön, különben a szeletelő támaszokat vagy tutajt ad hozzá.
- **Függőlegesből 45°-nál többel kidől**: ezeknek a lapoknak támasz kell. A párbeszédpanel megmondja, a felület mekkora része.
- **1 mm-nél kisebb**: valószínűleg rossz mértékegységben készült. Ellenőrizze a mértékegységet az állapotsorban.

Egy üreges alkatrész (egy zárt héj egy másikban) rendben van: lapjai az üreg felé néznek, és a térfogatát levonják.

## Javítás

A párbeszédpanel a **Hol vannak a problémák** részben megnevezi azokat a csoportokat vagy komponenseket, amelyekben hiba van (a csoporton kívüli szabad lapok neve: „Lapok nincsenek csoportban”), és leírja, mi a hiba. Egy többször elhelyezett komponens csak egyszer szerepel: ha azt javítja, minden példány javul.

- A {{ui:Megjelenítés}} megnyitja azt a csoportot, és kijelöli a hibás éleket és lapokat, hogy kiemelve látszanak.
- Az {{ui:A javítható javítása}} egyszerre mindent kijavít: lezárja azokat a lyukakat, amelyek élei síkban fekszenek, eltávolítja a formán belüli lapokat és az eltévedt éleket, és kifelé fordítja a lapokat. Egy lépés: a {{key:Mod+Z}} visszavonja. Az ellenőrzés ezután újra lefut, és megmutatja, mi maradt.

Ami nem javítható (egy lyuk, amelynek élei nem síkban fekszenek, vagy egy alkatrész, amely önmagán halad át), a listában marad a kézi teendőkkel. A **Nyomtatási eszközök** alatti {{ui:Javítás}} tovább megy: lezárja a nem síkban lévő lyukakat, eltávolítja az eltévedt darabokat és a dupla lapokat, és felsorolja minden javítást. Lásd: [Támaszok, falvastagság, kiüregelés és javítás](topic:print-tools#repair). Egy csoportot egyenként is javíthat: jelölje ki, majd használja az {{ui:Problémák megjelenítése}} és a {{ui:Javítás}} gombot az {{ui:Entitásinfó}} panelen. Lásd: [Testeszközök](topic:solids).

## Üreges alkatrész

A **Nyomtatási eszközök** alatti {{ui:Kiüregelés}} a megadott falvastagságra üregesíti az alkatrészt, a kattintás helyein lefolyónyílásokkal. Lásd: [Kiüregelés](topic:print-tools#hollow).

Üreget saját kezűleg is rajzolhat: egy zárt csoportot az alkatrészen belül, amely nem érinti azt, és minden lapja megfordítva, hogy az üreg felé nézzen. Az ellenőrzés üregként számolja, és a térfogatát levonja; nem szerepel a javítandók között.

## A nyomtatóasztal

Válassza ki a nyomtatója asztalának méretét a {{ui:Beállítások}} › {{ui:ModelCraft}} › {{ui:3D nyomtató asztala}} menüpontban. Az ellenőrzés figyelmeztet, ha a modell nagyobb az asztalnál, bármelyik irányban elforgatva. Lásd: [Beállítások](topic:settings#3d-printer-bed).

## Nyomtatási eszközök

Az ellenőrzés eredményei alatt a **Nyomtatási eszközök** megnyitja a {{ui:Támaszok előnézete}} (hol kerülnek a támaszok, és körülbelül mennyi), a {{ui:Falvastagság}} (a nyomtatáshoz túl vékony falak), a {{ui:Kiüregelés}} és a {{ui:Javítás}} lehetőségeket. Lásd: [Támaszok, falvastagság, kiüregelés és javítás](topic:print-tools). A {{ui:Felosztás nyomtatáshoz}} a nyomtatóasztalnál nagyobb modellt darabokra vágja csatlakozókkal és számozott illesztésekkel: lásd [Nagy modell felosztása nyomtatáshoz](topic:print-split).

## Nincs ellenőrizve

Az ellenőrzés nem szeletel: az apró részletek, amelyeket a fúvóka nem tud kirajzolni, és a valódi támaszok a szeletelő dolga. Lásd: [Még nincs elkészítve](topic:not-built-yet#3d-printing).
