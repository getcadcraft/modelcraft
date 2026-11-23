---
title: Újdonságok a 0.9 verzióban (korábbi)
summary: Nyomtatási szakasz saját szeletelővel és küldéssel USB-n, Klipperre, OctoPrint-re és PrusaLink-re, gyantás szeletelés és fájlbővítmények, anyagáramlás, digitális iker és gyártósor-bővítmények, NURBS-lekerekítések, vastagítás és szkennelés-illesztés, AR-es helyszíni megtekintés és tíz ívmódszer.
keywords: újdonságok 0.9, korábbi kiadás, újdonságok, mi az új, kiadási megjegyzések, változásnapló, 0.9, nyomtatási szakasz, 3D nyomtatás, küldés 3D nyomtatóra, szeletelő, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, gyanta, gyantás nyomtatás, goo, sl1, ctb, anycubic, expozíciós teszt, anyagáramlás, digitális iker, gyártósor, plc, szállítószalag, nurbs, lekerekítés, vastagítás, szkennelés illesztése, ar, helyszín, ívmódszerek, mértékegységek, változások, 0.8, 0.8.1, verzió, új funkciók, renderelőmotor, motor, szkennelés, jelenet, időjárás, napszak, évszak, asszisztens, fénykép alapú anyag, fénykép, vázlatfénykép, berendezés, szoba berendezése, ferde vágás, felosztás, nyomtatás-ellenőrzés, problémák, tulajdonságrács, lámpák, nyelvek, beviteli eszközök, eszköztársorok, dwg, live
from: 2717d1b1
---

Ez a ModelCraft 0.9 változásait mutatja a 0.8.1 verzióhoz képest. A ModelCraft mostantól eljut a nyomtatóig és a gyártósorig: elhelyezhet tárgyakat a nyomtatási tálcán, és exportálás nélkül küldheti el őket, szeletelhet filamentre vagy gyantára, és anyagmozgató vonalat rendezhet el. Ez a CadCraft Studio 0.9 és nyolc alkalmazása; az alábbi új funkciók többsége bővítmény.

## Új

### 3D nyomtatás

- **Nyomtatási szakasz.** Kattintson az eszköztárban a {{ui:Nyomtatási szakasz}} gombra. Adjon hozzá könyvtári elemeket a nyomtató tálcájához, rendezze el őket, nézze át a szeletelt rétegeket, és nyomja meg a {{ui:Küldés 3D nyomtatóra}} gombot, STL exportálás nélkül. Ez a 3D nyomtatás bővítményhez tartozik, amely alapértelmezetten be van kapcsolva, és ugyanúgy eltávolítható, mint bármely bővítmény. Lásd: [Elemek elhelyezése a nyomtatási tálcán és küldése nyomtatóra](topic:print-stage).
- **Saját filamentszeletelő.** A {{ui:CadCraft basic (mellékelt, a leggyorsabb)}} a kártya **Szeletelő** listájában szereplő szeletelő: falak, burkolatok, kitöltés, támasztékok és szegélyvonal, háttérfolyamatban, hogy az oldal használható maradjon. A {{ui:Rétegek előnézete}} a **Réteg** csúszkával a küldés előtt mutatja a rétegeket. A nyomtatóprofilok, például az Ender-3 és a Prusa MK4 stílusúak, saját kezdő G-kóddal rendelkeznek.
- **Küldés.** USB-n (Chrome vagy Edge számítógépen, az oldal nyitva tartásával), vagy a hálózatán lévő Klipperre (Moonraker), OctoPrint-re vagy PrusaLink-re. Kattintás nélkül semmi nem csatlakozik és nem küld el semmit, a küldés pedig előbb rákérdez.
- **Más szeletelők.** A Kiri:Moto, a PrusaSlicer és az OrcaSlicer saját bővítmények, alapértelmezetten kikapcsolva; a kártyáról vagy a {{ui:Beállítások}} › {{ui:Bővítmények}} menüből adhatók hozzá. A PrusaSlicer és az OrcaSlicer a CadCraft Studio-ból telepített saját példányát használja. A Bambu Lab nyomtatók bővítménye az OrcaSlicer és annak P2S előbeállításai szerint szeletel, és számítógépen a Studio-t igényli.
- **Gyantás nyomtatás.** A gyantás bővítmények (alapértelmezetten kikapcsolva) rétegképeket készítenek a nyomtató kijelzőjéhez, üregesítéssel és szellőzőnyílásokkal, alapréteggel és támasztékokkal, rétegelőnézettel, valamint idővel, gyantamennyiséggel és költséggel. A fájlformátum-bővítmények az Elegoo GOO, SL1, Chitubox (CBDDLP és CTB 2–5) és Anycubic (PWMX és PWS) formátumokat írják. Egy gyantás expozíciós teszt öt expozícióból álló létrát készít. Lásd: [Szeletelés gyantás nyomtatóhoz](topic:resin-printing).
- **Változatlan.** Az {{ui:Exportálás}} › {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}}, a nyomtatóeszközök és a nyomtatáshoz való felosztás a 0.8-hoz hasonlóan működik. Lásd: [Modell előkészítése 3D nyomtatáshoz](topic:print-3d).

### Anyagáramlás, digitális iker és gyártósor

Ez a három bővítmény a {{ui:Beállítások}} › {{ui:Bővítmények}} menüben kapcsolható be; bekapcsolás után mindegyiknek van saját súgója.

- **Anyagáramlás.** Az Anyagáramlás nevű panel szállítószalagokat, állomásokat, puffereket és AGV-útvonalakat rendez el a 3D nézetben, rögzített magú szimulációt futtat, lejátssza azt, és megmutatja az átbocsátást, a szállítási időket és a sorokat, az eredményeket CSV-ben mentve. A megrendelések CSV-fájlból is érkezhetnek. A robotcellák ellenőrizhetők és exportálhatók. A PLC-kapcsolatnak van puha módja és valódi módja Modbus TCP-n keresztül; ez utóbbi csak a CadCraft Studio-ban működik.
- **Digitális iker.** Az Anyagáramlás elrendezését olvassa, és rajta puha PLC-t futtat, kényszeríthető hibákkal, készletpróbákkal, elrendezés-összehasonlítással és anyagjegyzékkel.
- **Gyártósor.** Az állomásokat gépekké és cellákká alakítja, élőben vagy szimulátorból olvassa őket, és munkasort vezet egy egyszerű OEE-mutatóval. Csak olvas: ez a verzió nem írhat gépbe vagy PLC-be.

### Felületek, modellek és rajzolás

- **Lekerekítések, vastagítás és logikai műveletek NURBS-en.** A {{ui:Felületek}} panelen található a {{ui:Lekerekítés lapok között}}, a {{ui:Több él lekerekítése}}, a {{ui:Vastagítás testté}}, valamint az Unió, a Kivonás és a Metszés, mindegyik mért eltéréssel. Lásd: [Szabad formájú felületek (NURBS)](topic:nurbs-surfaces).
- **Felületek illesztése szkenneléshez.** Jelöljön ki egy beszkennelt hálót, és használja a {{ui:Felületek illesztése a szkennelésre}} parancsot a **Szkennelés** csoportban, majd a {{ui:Felületek összevarrása testté}} parancsot. Ez első illesztés, nem teljes visszatervezési csomag.
- **Élő kapcsolat .3dm modellezőből.** Egyirányú, a Rhino 8-ból vagy a Grasshopperből, és a CadCraft Studio-t ugyanazon a számítógépen kell futtatni. Lásd: [.3dm modell élő tartása](topic:live-3dm-link).
- **A modell megtekintése helyszínen.** A {{ui:Nézetek}} menü {{ui:Megtekintés a helyszínen (AR, telefon)}} pontja Android telefonon, Chrome-mal működik. Lásd: [A modell megtekintése helyszínen Android telefonnal (AR)](topic:ar-on-site).
- **Ívmódszerek.** A {{ui:Ívmódszerek}} legördülő lista tíz módot kínál ív rajzolására, köztük a {{ui:3 pont}} és a {{ui:Kezdőpont, középpont, végpont}} módot.
- **További mértékegységek.** A tömeg (kg, lb, t, ton) és a hőmérséklet (°C, °F, K és °R) értelmezhető ott, ahol mértékegységgel adja meg az értékeket.

## Minden alkalmazásban

- **Eszköztippek.** A gombok és a levágott feliratok súgószövege Bootstrap-eszköztipp.
- **Bezárható kezdő tipp.** A kezdő rajzterület üres részén lévő tippkártya kis bezáró gombbal rendelkezik. Bezárva marad, a parancspaletta pedig újra megjelenítheti.
- **Görgethető lapsorok.** A panel lapsora, ha nem fér ki, görgethető, és nem vágódik le.
- **Lapcímek.** Ha dokumentum van megnyitva, a böngésző lapjának címe a dokumentum nevével kezdődik, utána a ModelCraft és a CadCraft. Mentetlen állapotban előbb egy pont jelenik meg.
- **Elrendezés.** A {{ui:Beállítások}} › {{ui:Általános}} › Elrendezés a legördülő listában tartja az elrendezéseket, lehetőséget ad arra, hogy az elrendezés csak ebben az alkalmazásban legyen használva, és gombot az elrendezés visszaállítására.
- **Nyelvek.** A Beállításokban lévő nyelvlista a buildben található nyelvfájlokat követi. Az angolon kívüli nyelvek gépi piszkozatok.
- **Live TeamWork és Könyvtár.** A Live TeamWork élő kurzorokat és neveket mutat, a Könyvtár gyűjtemények pedig minden alkalmazásnak alapértelmezett gyűjteményt adnak.

## Javítva

- A {{ui:Lejátszás}} gomb animáció közben {{ui:Szünet}} gombbá változik, a {{key:Space}} pedig az idővonal nyitott állapotában lejátszik és szünetel.
- Az álló renderelés WebGL-re vált vissza, ha a grafikus kártya nem tudja elindítani az útkövető (path tracer) motort. Az élő rendereléskép továbbra is mutathatja a hibát; ezt nem ellenőriztük olyan Windows-gépen, amely ugyanezzel az illesztőprogrammal rendelkezik.
- Az Anyagáramlás valódi módja újra csatlakozik, miután a kapcsolat PLC-kivételes válaszok miatt megszakadt.

## Valós korlátok

- Egyetlen nyomtatást sem végeztünk valódi nyomtatón: sem filamenttel, sem gyantával, sem a Bambu Connecten keresztül. A gyantafájlokat csak a CadCraft saját olvasói ellenőrizték vissza.
- A digitális ikert és a gyártósort csak szimulátorokkal és ismert eredményekkel teszteltük, valódi PLC-vel, sorral vagy protokollal nem. Ezek ellenőrző segédeszközök, nem biztonsági validáció. A fizikai számítás csak dobozokra terjed ki, legfeljebb nyolc terhelésig.
- A Rhino és a Grasshopper kapcsolata a valódi programokban még soha nem futott.
- Az angolon kívüli nyelvek gépi piszkozatok.

## Korábbi: 0.8 és 0.8.1

Ez a ModelCraft 0.8 (2026-11-01) és 0.8.1 (2026-11-02) változásait mutatja a 0.7-hez képest. A {{ui:Kép renderelése…}} párbeszédpanel most át tudja küldeni a jelenetet egy másik programnak, a Felületek panel sima, szabad formájú felületeket készít, és egy csatlakoztatott asszisztens egyetlen mondatból be tud állítani egy teljes jelenetet.

### Új

**Renderelés**

- **Motorválasztás.** A {{ui:Kép renderelése…}} párbeszédpanelen a Mód fölött **Motor** lista található. Saját két motorunk, a Gyors és az Útkövető az alapértelmezett, és mindenütt működnek. A többi bejegyzés a jelenetet csomagként menti (a modell USD-fájlként, plusz egy beállítási fájl a pontos anyagértékekkel, a bekapcsolt lámpákkal, a nappal, az éggel, az expozícióval és a kamerával), hogy egy másik programba vihesse. A másik program által készített kép megmondja, melyik program és melyik verzió készítette. Lásd: [Válassza ki, melyik program rajzolja a képet](topic:render-engines).
- **Megnyitás másik programban.** A Motor lista a jelenetet USD-fájlként, glTF-fájlként (`.glb`) vagy Unreal-projektmappaként (`.zip`) mentheti, a böngészőben és a CadCraft Studio-ban egyaránt. A Studio-ban a usdview-t vagy a számítógép saját programját is el tudja indítani a fájlhoz. Lásd: [A jelenet megnyitása másik programban](topic:render-open-in).
- **Küldés játékmotornak a Studio-ból.** A Studio a jelenetet Unreal Engine projektbe írja, és minden küldéskor frissíti, csak egy irányban. Saját módosításai egy olyan rétegben élnek, amelyet a CadCraft soha nem ír. Lásd: [A jelenet küldése játékmotornak](topic:render-unreal).
- **Motorok bővítményekből.** Egy bővítmény motort adhat a listához. A JavaScriptben írt motor a böngészőben és a Studio-ban rajzol; a programot futtató motor a Studio-ban jóváhagyást igényel. Lásd: [Kép rajzolása másik programmal](topic:render-other-program) és [Renderelőmotor hozzáadása bővítménnyel](topic:render-engine-addons).
- **Mondja el a jelenetet.** Mondja el a csatlakoztatott asszisztensnek: „alkony, könnyű eső, őszi fák, emberek a téren”, és a ModelCraft egy lépésben beállítja: a nap a dátumhoz és az időhöz igazodik, hogy az árnyékok követhessék, az ég megváltozik, nedves felületek jelennek meg, a fák és az emberek pedig valódi objektumként kerülnek be, olyan címkéken, amelyeket el lehet rejteni, mozgatni vagy törölni. A napszak, a dátum vagy az évszak, valamint az időjárás (derült, borult, köd, könnyű eső, eső, vihar) önmagában is működik, és egy későbbi kérés ugyanazt a jelenetet módosítja. A köd a jó minőségű képen a grafikus kártyán jelenik meg; a többi motor az eget, a fényt és a nedves felületeket mutatja. Az eső nem hulló csíkokként jelenik meg.

**Anyagok**

- **Anyag egyetlen fényképből.** Adjon a ModelCraft-nak egy felületről készült fényképet (fal, padló, kő), és az csempézhető anyagot készít: a fotón átívelő megvilágítás kisimul, az élek illeszkednek, a színtérkép, az érdességi térkép és a normáltérkép magából a képből készül. Ez egyszerű képfeldolgozás a saját képén, betanított modell nélkül. Az érdesség becslés. Egy sima, négyzetes, szemből készült fotó adja a legjobb csempét; az erős minta, például a tégla, az illesztésnél halvány szellemképet mutathat, ahol az átmenet összemosódik.

**Felületek**

- **Szabad formájú felületek.** A {{ui:Felületek}} panel NURBS-görbéket és nem levágott felületeket készít: pontokon átmenő görbéket, loftot, vonalzott felületet, kihúzást, forgatást, egy vagy két sínen vezetett sweepet, felületeket görbehálózatból, foltokat négy élből, illesztést és keverést. Minden közös élt G0, G1 vagy G2 szinten mérünk (rés, szög, görbületi ugrás) a pontos felületeken, és a kért szintnél rosszabb él megjelenik a Problémák panelen, a {{ui:Illesztés}} javítással. A zebra-csíkok és a görbületi színek a pontos felületekből rajzolódnak. A STEP- és IGES-fájlok kiírhatók és beolvashatók. Lásd: [Szabad formájú felületek (NURBS)](topic:nurbs-surfaces).

**Terep és szobák**

- **Vázlatfénykép a talajra.** A {{ui:Fájl}} › {{ui:Vázlatfénykép importálása…}} a kézi vázlatról készült telefonfotót a talajon lévő élekké alakítja a megadott léptékben: egy csoport, minden tollszínhez egy címke. A papírt a számítógép keresi meg és egyenesíti ki, semmi nem kerül elküldésre. Lásd: [Modell helyszíni alaprajzon](topic:site-plan).
- **Szoba berendezése.** Jelöljön ki egy padlót, és használja a {{ui:Rendezés}} › {{ui:Szoba berendezése…}} parancsot. Hálószoba-, nappali-, étkező-, konyha-, fürdőszoba- vagy irodabútorok szabályok szerint kerülnek elhelyezésre, a falakhoz igazítva, ajtóktól és ablakoktól szabadon, egy csoportban, amelyet egy lépésben el lehet távolítani. Ez alapértelmezett elrendezés, amelyet át kell nézni, nem tervezés. Lásd: [Kezdő könyvtár](topic:starter).

**3D nyomtatás**

- **Ferde vágások.** A nyomtatásra szolgáló felosztás a vágásokat legfeljebb 60 fokkal megdöntheti, így az alkatrészek nagyobb ragasztási felületet kapnak. A csatlakozók merőlegesek a vágásra. Lásd: [Modell felosztása nyomtatáshoz](topic:print-split).
- **A nyomtatás-ellenőrzés a Problémák panelen.** A 3D nyomtatás-ellenőrzés eredményei a Problémák panelen jelennek meg, a modellen lévő jelölőkkel, és a Javítás innen javítja őket. Lásd: [Támasztékok, falvastagság, üregesítés és javítás](topic:print-tools).

**Minden alkalmazásban**

- **Nyelvek.** A súgó és az alkalmazások 54 nyelven érhetők el. Tíz új: litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég. Az angoltól eltérő nyelvek gépi piszkozatok, amíg anyanyelvi beszélő át nem nézte őket, és a súgótémák még angolul lehetnek.
- **Beviteli eszközök.** Érintőpad, toll, 3D egér, játékvezérlő és MIDI-vezérlők vezérelhetik az alkalmazásokat, mindegyiket vagy csak egyet.
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › Eszköztársorok a Tördelés (mint korábban), a 2 sor vagy az 1 sor módot állítja be. Az eszköztár, ha nem fér ki, oldalra görgethető ahelyett, hogy a rajzból venne helyet. A Tördelés az alapértelmezés marad.
- **Tulajdonságrács.** A ModelCraft lámpamezői a közös rácsot használják: összecsukható kategóriák, címke- és értékoszlopok, valamint Kompakt sűrűség. A beírt számtani kifejezések, például `2*450`, továbbra is működnek.
- **Problémák.** A Problémák panel (a figyelmeztetés gomb az alkalmazássávon) minden alkalmazásban közös. A ModelCraft-ban a nyomtatás-ellenőrzést és a felületek folytonossági figyelmeztetéseit tartalmazza.
- **Élő.** Az Élő csapatmunka-munkamenet megmutatja, ki hol tartózkodik. Lásd: [Együttes modellezés a Live TeamWork-kel](topic:work-live).
- **Bővítmények.** A bővítmények, ahogy fent is szerepel, renderelőmotorokat adhatnak hozzá.
- **Az MI csatlakoztatása.** A nyolc alkalmazás eszközszerződése és ellenőrzései átmentek, összesen 454 eszközzel. Az egykattintásos csatlakozás a Studio-ban, a böngészős asszisztensekhez szánt üzemeltetett csatlakozó, a Studio-n belüli saját kulcs és a közzétett csomag még nem ígérhető. Az alkalmazások nem tartalmaznak saját MI-t. Lásd: [A ModelCraft használata MI-asszisztensekkel](topic:use-with-ai-assistants).

### Javítások a 0.8.1 verzióban

- **DWG osztályok szakasz.** A DWG-fájl osztályainak szakaszát rossz típusként olvasta, ami importáláskor hibát okozhatott. Most helyesen olvassa, a ModelCraft-ban és a többi DWG-t olvasó alkalmazásban.
- **Táblagépek álló helyzetben.** A szabad rácsmagasság a rajzvászonra kerül, a lapelrendezés pedig 760 pixel szélességtől vagy annál kisebb szélességnél indul. A ModelCraft stíluslapja is tartalmazza a változtatást.
- **Nyelv a Studio-ban.** A CadCraft Studio és a csomagolt kiadások futás közben is válthatnak nyelvet; korábban csak angol volt. Ezt nem teszteltük minden platformon: jelezze nekünk, ha a nyelv nem változik.

### Még nincs ebben a verzióban

- **Nincs kódaláírás.** A Windows a SmartScreen figyelmeztetést jelezheti: válassza a {{ui:További információ}} lehetőséget, majd a {{ui:Futtatás mindenképpen}} gombot. Mac-en jobb gombbal kattintson, és válassza a {{ui:Megnyitás}} lehetőséget. Az áruházi verziók szünetelnek, az iPad- és iPhone-verziót pedig nem építették újra a 0.8.1-hez.
- Egy másik program általi képrajzolás renderelőmotor-bővítmény nélkül, panorámás vagy sztereó kamerák, egy másik programon át küldött égkép, és az Unreal-szakaszt megnyitó bővítmény még nincs meg. A fájlok íródnak; a bővítmény nincs kiadva, és Unrealben nem futtatták.
- Szabad formájú felületek: a G3 és az A osztály nincs mérve vagy igazolva; a vágás és a testek később érkeznek.
- Más programok képei nem pixelre pontosan egyeznek a sajátunkkal: csak a kamera, a nap, a lámpák és az expozíció egyezik.
- A 0.8.1 nyelvváltási javítás a Studio-ban nincs minden platformon tesztelve.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon található. A korábbi kiadásról lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
