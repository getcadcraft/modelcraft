---
title: Modellezés helyszínrajzon DWG vagy DXF alapján
summary: Hozzon be egy CAD-helyszínrajzot vagy alaprajzot vonalként a talajra, válaszoljon a mértékegységre vonatkozó kérdésre, és rajzolja át lapokká és tömegekké.
keywords: helyszínrajz, dwg, dxf, cad, importálás, vázlat, kézi vázlat, fénykép, vázlatfotó, szalvétavázlat, papír, tollszínek, dinamikus blokkok, láthatósági állapotok, szöveg, sraffozás, spline, ellipszis, 3D lap, átrajzolás, alaprajz, telekhatár, mértékegységek, aláterítés, környezet
from: 3415dc96
---

A ModelCraft be tud hozni egy 2D CAD-rajz, helyszínrajz vagy alaprajz vonalait, és a talajra helyezi őket, hogy rájuk modellezhessen.

## Rajz importálása

1. Kattintson a {{ui:Importálás}} gombra a {{ui:Fájl}} csoportban (vagy húzza rá a fájlt a 3D nézetre).
2. Válasszon `.dwg` vagy `.dxf` fájlt.

   Egy nagy DWG beolvasása egy pillanatba telik: az állapotsor „plan.dwg beolvasása…” üzenetet mutat, amíg be nem került.

3. Ha a rajz nem mondja meg a mértékegységét, a „Rajz mértékegységei” című párbeszédpanel kérdezi: „Mekkora egy rajzegység?” Válassza a {{ui:Hüvelyk}}, {{ui:Láb}}, {{ui:Milliméter}} vagy {{ui:Méter}} lehetőséget. A legtöbb amerikai helyszínrajzot lábban, az építészeti terveket hüvelykben, a metrikus terveket milliméterben rajzolják.

   A rajz élek csoportjaként érkezik a talajon, kijelölve, és a nézet rá nagyít. Az állapotsor megmondja, hány él érkezett, például: „Importálva: site.dwg: 1697 él a talajon, csoportban. A közvetlen rajzoláshoz bontsa fel.”

## Mi érkezik be

- Vonalak, polivonalak (az íveikkel együtt), körök és ívek, valamint blokkok a bennük lévő mindennel, csak a **modelltérből**. A görbék rövid egyenes szakaszokká válnak.
- A vonalak, polivonalak, ívek, körök, ellipszisek és spline-ok laposan, élekként kerülnek a talajra.
- A **sraffozások** a talajon lévő lapokká válnak, a szigeteik lyukakként, így a sraffozott terület azonnal nyomás/húzással mozgatható.
- A **3D lapok** és a tömör kitöltések lapokká válnak; a 3D lapok megtartják a magasságukat.
- A **szöveg** (egysoros szöveg, többsoros szöveg és attribútumértékek) egyszerű, egyvonalas betűkészletű élekként rajzolódik, a szöveg saját magasságában, szögében és igazításában. A betűtípusa nem a rajzé, ezért a szavak valamivel hosszabbak vagy rövidebbek lehetnek. A betűkészlet számára alak nélküli karakterek kis dobozként jelennek meg, és számuk is megjelenik.
- A **méretezések** úgy rajzolódnak, ahogy a rajz mutatja (vonalaik, nyilaik és szövegük élekként és lapokként).
- A **dinamikus blokkok** úgy érkeznek, ahogy a rajz mutatja: minden elhelyezett blokk abban a láthatósági állapotban, amelyben mentették, és csak annak az állapotnak a vonalai. Az állapotsor felsorolja őket a megjelenített állapotukkal és a többi állapotukkal együtt, például: „Receptacle a Duplex ×38, GFI ×7 állapotban (állapotok: Duplex, GFI)”. A ModelCraft nem vált állapotot.
- A **3D testek, régiók és testek** (a rajz ACIS-adatai) saját csoportjaikként érkeznek: egy zárt test testként, egy régió vagy nyitott test lapokként. A sík lapok egészben érkeznek; a görbült lapok (hengerek, kúpok, gömbök, tóruszok, egyszerű spline-felületek) kis háromszögekként, közöttük lágy élekkel, így csak a test saját élei látszanak. A más típusú felületen lévő lap kimarad, és fel van sorolva: „Még nem rajzolható (3D testek): …”.
- Nem importálva: pontok, táblázatok, többszörös vezetővonalak, képek és más objektumtípusok. Az állapotsor típus szerint listázza őket, például: „Nem importálva: 12 POINT.” A papírtéren (elrendezésen) lévő elemek szintén kimaradnak, felsorolás nélkül.
- A rétegek nem maradnak meg: minden vonal egyformán érkezik.

Ha a rajz messze van az origójától (például állósíkbeli koordinátákkal), az is importálódik, de lehet, hogy messze a ModelCraft origójától érkezik. A 10 000 km-nél távolabbi rajzokat nem fogadja: a CAD-programban előbb helyezze közelebb a rajzot a 0,0 ponthoz.

## Átrajzolás lapokká

Az importált vonalak ritkán záródnak szépen lapokká önmaguktól. Két mód van a munkára:

**Tartsa meg a helyszínrajzot aláterítésként (ajánlott)**

1. Hagyja a helyszínrajzot a saját csoportjában.
2. Rajzolja meg az épületét a {{ui:Téglalap}} és a {{ui:Vonal}} eszközzel, a helyszínrajz sarkaihoz („Végpont”) és széleihez („Élen”) illesztve.
3. Nyomás/húzással emelje fel a lapjait. A helyszínrajz alatta érintetlen marad, a teljes csoportot később egy kattintással törölheti.

A fogás a csoportok között is működik: a csoport megnyitása nélkül is foghat a helyszínrajz sarkaihoz.

**Rajzoljon a helyszínrajz saját vonalaira**

1. Jelölje ki a helyszínrajz-csoportot, és kattintson a {{ui:Felbontás}} gombra. A vonalai laza élekké válnak.
2. Ahol egy zárt körvonalnak lapnak kellene lennie, húzzon egy vonalat a {{ui:Vonal}} eszközzel bármelyik széle fölé, sarokról sarokra. Ha a körvonal zárt és sík, a lap általában kitöltődik. Ha nem, keressen rést vagy átfedést a körvonalban, és rajzoljon felette.
3. Nyomás/húzással emelje fel.

Ez tiszta helyszínrajzon működik a legjobban. Zsúfolt földmérési rajzon gyorsabb az átrajzolás.

## Hibák

- „Ez bináris DXF. Mentse ASCII DXF formátumban, majd próbálja újra.” Mentse újra a DXF-et a CAD-programból ASCII (szöveges) formátumban.
- „…nem tartalmaz vonalat, ívet vagy kört a modelltérben a behozatalhoz.” A rajz valószínűleg csak elrendezéseken van, vagy csak szövegből és sraffozásokból áll.
- „Ez a rajz nem olvasható (…). Lehet, hogy sérült, vagy olyan DWG-verzióban van mentve, amelyet az olvasó nem kezel…” A zárójelben az ok áll, például: „A DWG-verzió AC1009 nem támogatott.” Mentse DXF-ként, vagy a CAD-programból AutoCAD 2000 és 2018 közötti verzióban DWG-ként.
- A helyszínrajz rossz méretű: rossz mértékegységet választott. Vonja vissza a {{key:Mod+Z}} billentyűvel, és importálja újra, vagy [léptékezze](topic:rotate-scale) a csoportot a helyes szorzóval (12 láb és hüvelyk között, 25,4 hüvelyk és milliméter között).

A szintvonalak talajjá alakításához lásd [Terep](topic:terrain).

## Kézi vázlat fényképéből

A **Fájl › Vázlatfotó importálása…** egy papíron lévő vázlat fényképét veszi (JPEG, PNG vagy TIFF; egy telefonról közvetlenül is megfelel), és ugyanolyan típusú éleket készít a talajon. Adja meg, milyen papírról van szó (vagy hagyja, hogy megkeresse a lapot, A4-nek véve), valamint a vázlat léptékét, például 1 : 100. A papír széle megtalálásra kerül, a fénykép kiegyenesedik, a tinta vonalakká és ívekké rajzolódik, és minden tollszín (fekete, piros, kék, zöld) saját csoportot kap címkével (**Vázlat fekete**, **Vázlat piros**, …), mindegyik a fénykép nevéről elnevezett csoporton belül. Ez egy visszavonási lépés, és minden ezen a számítógépen történik: semmi nem kerül elküldésre.

Ha nem található papírszél, az egész fénykép lapként értelmeződik, és az állapotsor ezt jelzi: mérjen le valamit, amit ismer, és léptékezze a csoportot, ha pontatlan. A vonalakat a fentiek szerint rajzolja át lapokká.
