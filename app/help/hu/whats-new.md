---
title: Újdonságok a 0.8 és 0.8.1 verzióban
summary: Renderelő motor választása más programoknak szánt fájlokkal, szabad formájú NURBS-felületek mért folytonossággal, jelenet leírása az asszisztensnek, anyag egyetlen fényképből, vázlatfénykép a talajra, berendezett helyiségek, ferde vágások 3D nyomtatáshoz, valamint a nyomtatás-ellenőrzés a Problémák panelen.
keywords: újdonságok, mi az új, kiadási jegyzetek, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, renderelő motor, motor, megnyitás más programban, usd, gltf, unreal, bővítménymotor, nurbs, felületek, loft, sweep, folytonosság, g0, g1, g2, zebra, step, iges, jelenet leírása, jelenet, időjárás, napszak, évszak, asszisztens, anyag fényképből, fénykép, vázlatfénykép, berendezés, szoba berendezése, ferde vágás, felosztás, nyomtatás-ellenőrzés, problémák, tulajdonságrács, lámpák, nyelvek, beviteli eszközök, eszköztársorok, dwg, live
from: e4989b17
---

Ez a változások listája a ModelCraft 0.8 (2026-11-01) és 0.8.1 (2026-11-02) verziójában, a 0.7-hez képest. A {{ui:Kép renderelése…}} párbeszédpanel mostantól át tudja küldeni a jelenetet más programnak, a {{ui:Felületek}} panel sima, szabad formájú felületeket készít, a csatlakoztatott asszisztens pedig egyetlen mondattal be tud állítani egy teljes jelenetet.

## Új

### Renderelés

- **Motor választása.** A {{ui:Kép renderelése…}} párbeszédpanelen a Mód fölött van egy **Motor** lista. Saját két motorunk, a **Gyors** és a **Path tracer** az alapértelmezett, és mindenhol működik. A többi bejegyzés a jelenetet csomagként menti (a modell USD-fájlként, plusz egy beállítófájl a pontos anyagértékekkel, a bekapcsolt lámpákkal, a nappal, az éggel, az expozícióval és a kamerával), hogy egy másik programba vihesse. Egy másik program által rajzolt kép megjelöli, melyik program és melyik verzió készítette. Lásd: [Válassza ki, melyik program rajzolja meg a képet](topic:render-engines).
- **Megnyitás más programban.** A Motor lista a jelenetet USD-fájlként, glTF-fájlként (`.glb`) vagy Unreal-projektmappaként (`.zip`) is elmentheti, böngészőben és a CadCraft Studióban egyaránt. A Studióban a fájlhoz el tudja indítani a usdview-t vagy a számítógép saját programját is. Lásd: [A jelenet megnyitása másik programban](topic:render-open-in).
- **Küldés játékmotorba a Studióból.** A Studio a jelenetet Unreal Engine-projektbe írja, és minden küldéskor egyirányúan szinkronban tartja. Az Ön saját módosításai egy olyan rétegben élnek, amelyet a CadCraft soha nem ír. Lásd: [A jelenet küldése játékmotorba](topic:render-unreal).
- **Motorok bővítményekből.** Egy bővítmény motort adhat a listához. A JavaScriptben írt motor a böngészőben és a Studióban rajzol; a programot futtató motor a Studióban az Ön jóváhagyását kéri. Lásd: [A kép rajzolása másik programmal](topic:render-other-program) és [Renderelő motor hozzáadása bővítménnyel](topic:render-engine-addons).
- **Jelenet leírása.** Mondja el a csatlakoztatott asszisztensnek: „alkonyat, könnyű eső, őszi fák, emberek a téren”, és a ModelCraft egy lépésben beállítja: a nap a dátumhoz és az időponthoz igazodik, hogy az árnyékok kövessék, az ég megváltozik, megjelennek a nedves felületek, a fák és az emberek pedig valódi objektumként kerülnek a helyükre, olyan címkéken, amelyeket elrejthet, mozgathat vagy törölhet. A napszak, a dátum vagy az évszak, valamint az időjárás (tiszta, borult, köd, könnyű eső, eső, vihar) önmagában is működik, és egy későbbi kérés ugyanazt a jelenetet módosítja. A köd a nagy minőségű képen látszik a grafikus kártyán; a többi motor az eget, a fényt és a nedves felületeket mutatja. Az eső nem hulló csíkként jelenik meg.

### Anyagok

- **Anyag egyetlen fényképből.** Adjon a ModelCraftnak egy felületről készült fényképet (fal, padló, kő), és csempézhető anyagot készít: a fénykép megvilágítása kiegyenlítődik, az éleket összeillesztik, a színtérképet, az érdességtérképet és a normáltérképet pedig a képből számítja ki. Ez egyszerű képfeldolgozás a saját képén, betanított modell nélkül. Az érdesség becslés. Egy sima, négyzetes, szembenéző fénykép adja a legjobb csempét; az erős mintázat, például a tégla, lágy szellemképet mutathat ott, ahol az illesztés át van keverve.

### Felületek

- **Szabad formájú felületek.** A {{ui:Felületek}} panel NURBS-görbéket és nem vágott felületeket készít: pontokon átmenő görbéket, loftot, vonalzott felületet, kihúzást, forgatást, egy vagy két sínen végigvezetett sweepet, felületeket görbehálóból, foltokat négy élből, illesztést és átmenetet. Minden közös élt G0, G1 vagy G2 szerint mérnek (rés, szög, görbületugrás) a pontos felületeken, és a kért értéknél rosszabb él a Problémák panelen jelenik meg **Illesztés** javítással. A zebracsíkok és a görbületi színek a pontos felületekből rajzolódnak. A STEP- és IGES-fájlok ki- és beolvashatók. Lásd: [Szabad formájú felületek (NURBS)](topic:nurbs-surfaces).

### Terep és helyiségek

- **Vázlatfénykép a talajra.** A {{ui:Fájl}} › {{ui:Vázlatfénykép importálása…}} parancs egy kézi vázlatról készült telefonos fényképet a megadott léptékben a talajon lévő élekké alakít: egy csoport, minden tollszínhez egy címkével. A papírt a számítógépe keresi meg és egyenesíti ki, semmi nem kerül sehová. Lásd: [Modellezés a helyszínrajzon](topic:site-plan).
- **Helyiség berendezése.** Jelöljön ki egy padlót, és használja a {{ui:Rendezés}} › {{ui:Szoba berendezése…}} parancsot. Hálószoba, nappali, étkező, konyha, fürdőszoba vagy irodabútor szabályok szerint kerül a falak mellé, ajtóktól és ablakoktól szabadon, egy csoportba, amelyet egy lépésben eltávolíthat. Ez alapértelmezett elrendezés, amelyet át kell néznie; nem végleges tervezés. Lásd: [Kezdő könyvtár](topic:starter).

### 3D nyomtatás

- **Ferde vágások.** A nyomtatásra való felosztás a vágásait legfeljebb 60 fokkal megdöntheti, így a darabok nagyobb ragasztófelületet kapnak. A csatlakozók merőlegesek a vágásra. Lásd: [Modell felosztása nyomtatáshoz](topic:print-split).
- **A nyomtatás-ellenőrzés a Problémákban.** A 3D-nyomtatás-ellenőrzés megállapításai a Problémák panelen jelennek meg a modellen lévő jelölőkkel, a javítás innen végezhető el. Lásd: [Alátámasztások, falvastagság, üregesítés és javítás](topic:print-tools).

### Minden alkalmazásban

- **Nyelvek.** A súgó és az alkalmazások 54 nyelven érhetők el. Tíz új: litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég. Az angoltól eltérő nyelvek gépi piszkozatok, amíg egy anyanyelvi beszélő át nem nézte, és a súgótémakörök még angolul lehetnek.
- **Beviteli eszközök.** Érintőpad, toll, 3D egér, játékvezérlő és MIDI-vezérlők hajthatják az alkalmazásokat, mindegyikhez vagy csak egyhez.
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › Eszköztársorok beállítja a Tördelés (mint eddig), a 2 sor vagy az 1 sor értéket. A nem férő sáv oldalra görgethető, nem veszi el a helyet a rajztól. A Tördelés marad az alapértelmezett.
- **Tulajdonságrács.** A ModelCraft lámpamezői a közös rácsot használják: összecsukható kategóriák, címke- és értékoszlopok, valamint Kompakt sűrűség. A beírt számtani műveletek, például a `2*450`, továbbra is működnek.
- **Problémák.** A Problémák panel (a figyelmeztető gomb az alkalmazássávon) minden alkalmazásban közös. A ModelCraftban a nyomtatás-ellenőrzést és a felületi folytonossági figyelmeztetéseket tartalmazza.
- **Live.** Egy Live TeamWork munkamenet mutatja, ki hol van. Lásd: [Együttes modellezés a Live TeamWork-kel](topic:work-live).
- **Bővítmények.** A bővítmények fentebb leírtak szerint renderelő motorokat adhatnak.
- **Csatlakoztassa az MI-jét.** A nyolc alkalmazás eszközfelülete és ellenőrzései átmennek, összesen 454 eszközzel. Egykattintásos csatlakozás a Studión belül, böngészős asszisztensek számára készült üzemeltetett csatlakozó, saját kulcs a Studióban és a közzétett csomag még nincs ígérve. Az alkalmazások nem tartalmaznak saját MI-t. Lásd: [A ModelCraft használata MI-asszisztensekkel](topic:use-with-ai-assistants).

## Javítva a 0.8.1 verzióban

- **DWG-osztályok szakasza.** Egy DWG-fájl osztályok szakaszát rossz típusként olvasta, ami importáláskor tönkretehette a fájlt. Most helyesen olvassa, a ModelCraftban és a többi DWG-t olvasó alkalmazásban.
- **Táblagépek álló helyzetben.** A szabad rácsmagasság a rajzvászonhoz kerül, a lapelrendezés 760 pixel vagy annál keskenyebb szélességnél indul. A ModelCraft stíluslapja is tartalmazza a változást.
- **Nyelv a Studióban.** A CadCraft Studio és a csomagolt kiadások futás közben tudnak nyelvet váltani; eddig csak angolul működtek. Még nem minden platformon tesztelték: szóljon, ha a nyelv nem változik.

## Még nincs ebben a verzióban

- **Nincs kódaláírás.** A Windows megjelenítheti a SmartScreen figyelmeztetést: válassza a {{ui:További információ}} lehetőséget, majd a {{ui:Mégis futtatás}} lehetőséget. Macen kattintson jobb gombbal, és válassza a {{ui:Megnyitás}} lehetőséget. Az áruházi buildek szünetelnek, az iPad- és iPhone-buildet pedig nem építették újra a 0.8.1-hez.
- Másik program általi képrajzolás renderelő motor bővítmény nélkül, panorámás vagy sztereó kamerák, és másik programon át készített égkép, valamint az Unreal-színpadot megnyitó bővítmény még nincs meg. A fájlok íródnak; a bővítmény nincs kiadva, és az Unrealban nem futtatták.
- Szabad formájú felületek: a G3 és az A osztály nincs mérve és nem állítjuk, a vágás és a testek később jönnek.
- Más programok képei nem pixelről pixelre egyeznek a sajátunkkal: csak a kamera, a nap, a lámpák és az expozíció egyezik.
- A 0.8.1 Studio-nyelvváltás javítása nincs minden platformon tesztelve.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon található. A korábbi kiadásról lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
