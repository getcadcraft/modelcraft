---
title: Újdonságok a 0.9-ben
summary: Nyomtatási szakasz saját szeletelővel és küldéssel USB-n, Klipperre, OctoPrintre és PrusaLinkre, gyanta-szeletelés és fájlbővítmények, anyagáramlás, digitális iker és gyárpadló-bővítmények, NURBS-lekerekítések, vastagítás és szkennelés-illesztés, AR a helyszínen és tíz ívmódszer.
keywords: újdonságok, mi újság, kiadási jegyzetek, változásnapló, 0.9, nyomtatási szakasz, 3D-nyomtatás, nyomtatóhoz küldés, szeletelő, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, gyanta, gyantanyomtatás, goo, sl1, ctb, anycubic, expozíciós teszt, anyagáramlás, digitális iker, gyárpadló, plc, szállítószalag, nurbs, lekerekítés, vastagítás, szkennelés illesztése, ar, helyszín, ívmódszerek, mértékegységek, verzió, új funkciók, renderelő motor, motor, megnyitás másik programban, usd, gltf, unreal, bővítménymotor, jelenet, időjárás, napszak, évszak, asszisztens, anyag fényképből, fénykép, vázlatfénykép, berendezés, szoba berendezése, ferde, ferde vágás, felbontás, nyomtatás-ellenőrzés, problémák, tulajdonságrács, lámpák, nyelvek, beviteli eszközök, eszköztársorok, dwg, élő
from: 169048a2
---

Ez változott a ModelCraft 0.9-ben, a 0.8.1-hez képest. A ModelCraft mostantól eljut a nyomtatóig és a gyárpadlóig: a nyomtatóágyra helyezhet dolgokat, és exportálás nélkül küldheti el őket, szeletelhet filamentre vagy gyantára, és anyagmozgató vonalat rendezhet el. Ez a CadCraft Studio 0.9 és nyolc alkalmazása; az alábbi új funkciók többsége bővítmény.

## Új

### 3D-nyomtatás

- **Nyomtatási szakasz.** Kattintson az eszköztár {{ui:Nyomtatási szakasz}} gombjára. Adjon hozzá könyvtári elemeket a nyomtató ágyához, rendezze el őket, nézze át a szeletelt rétegeket, és nyomja meg a {{ui:Küldés 3D-nyomtatóra}} gombot, STL exportálása nélkül. A 3D Print bővítményhez tartozik, amely alapértelmezés szerint be van kapcsolva, és ugyanúgy eltávolítható, mint bármely bővítmény. Lásd: [Tárgyak a nyomtatóágyra helyezése és küldése nyomtatóra](topic:print-stage).
- **Saját filamentszeletelő.** A kártya **Szeletelő** listájában a {{ui:CadCraft basic (beépített, leggyorsabb)}} a szeletelő: falak, burkolat, kitöltés, támaszok és szegélyvonal, egy háttérszálon, hogy az oldal használható maradjon. A {{ui:Rétegek előnézete}} a **Réteg** csúszkával a küldés előtt mutatja a rétegeket. A nyomtatóprofilok, például az Ender-3 és a Prusa MK4 stílusok, saját indító G-kóddal érkeznek.
- **Küldés.** USB-n keresztül (számítógépen Chrome vagy Edge, a lap nyitva tartása mellett), vagy a hálózatán lévő Klipper-re (Moonraker), OctoPrint-re vagy PrusaLink-re. Kattintás nélkül semmi sem csatlakozik vagy küldődik, és a küldés előtt rákérdez.
- **Más szeletelők.** A Kiri:Moto, a PrusaSlicer és az OrcaSlicer saját bővítmények, alapértelmezés szerint kikapcsolva; a kártyáról vagy a {{ui:Beállítások}} › {{ui:Bővítmények}} részből adhatók hozzá. A PrusaSlicer és az OrcaSlicer a CadCraft Studio-ból a saját, telepített példányát használja. A Bambu Lab nyomtatók bővítménye a saját OrcaSlicer-ével és annak P2S-profiljaival szeletel, és számítógépen futó Studio-t igényel.
- **Gyantanyomtatás.** A gyanta-bővítmények (alapértelmezés szerint kikapcsolva) rétegképeket készítenek a nyomtató kijelzőjére, kiüregeléssel és szellőzőlyukakkal, tutajjal és támaszokkal, rétegelőnézettel, valamint idővel, gyantával és költséggel. A fájlformátum-bővítmények Elegoo GOO, SL1, Chitubox (CBDDLP és CTB 2–5) és Anycubic (PWMX és PWS) fájlokat írnak. A gyanta-expozíciós teszt öt expozíciós lépcsőt készít. Lásd: [Szeletelés gyantanyomtatóhoz](topic:resin-printing).
- **Változatlan.** Az {{ui:Exportálás}} › {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}}, a nyomtatóeszközök és a Felbontás nyomtatáshoz a 0.8-hoz hasonlóan működnek. Lásd: [A modell előkészítése 3D-nyomtatáshoz](topic:print-3d).

### Anyagáramlás, digitális iker és gyárpadló

Ezek a bővítmények ki vannak kapcsolva, amíg be nem kapcsolják a {{ui:Beállítások}} › {{ui:Bővítmények}} részben; bekapcsolás után mindegyiknek saját súgója van.

- **Anyagáramlás.** Az Anyagáramlás nevű panel szállítószalagokat, állomásokat, puffereket és AGV-útvonalakat rendez el a 3D-nézetben, rögzített magú szimulációt futtat, visszajátssza, és megmutatja az áteresztőképességet, az átfutási időket és a sorokat; az eredmények CSV-ként mentődnek. A rendelések egy CSV-fájlból érkezhetnek. Robotcellák ellenőrizhetők és exportálhatók. A PLC-kapcsolatnak van lágy módja és valódi módja Modbus TCP-n keresztül, amely csak a CadCraft Studio-ban működik.
- **Digitális iker.** Beolvassa az Anyagáramlás elrendezését, és lágy PLC-t futtat rajta, kényszeríthető hibákkal, készletpróbákkal, elrendezés-összehasonlítással és anyagjegyzékkel.
- **Gyárpadló.** Az állomásokat gépekké és cellákká alakítja, élőben vagy szimulátorból olvassa őket, és munkasort és egyszerű OEE-t tart nyilván. Csak olvas: ez a verzió nem tud gépbe vagy PLC-be írni.

### Felületek, modellek és rajz

- **Lekerekítések, vastagítás és logikai műveletek NURBS-en.** A {{ui:Felületek}} panelen van a {{ui:Lekerekítés lapok között}}, a {{ui:Több él lekerekítése}}, a {{ui:Vastagítás testté}}, valamint az Egyesítés, Kivonás és Metszet, mindegyik mért eltéréssel. Lásd: [Szabad formájú felületek (NURBS)](topic:nurbs-surfaces).
- **Felületek illesztése szkenneléshez.** Jelöljön ki egy szkennelt hálót, és használja a **Szkennelés** csoportban a {{ui:Felületek illesztése a szkennelésre}} lehetőséget, majd a {{ui:Felületek összevarrása testté}} lehetőséget. Ez első illesztés, nem teljes visszafejtő csomag.
- **Élő kapcsolat egy .3dm-modellezőből.** Egy irányú, a Rhino 8-ból vagy a Grasshopperből, és ugyanazon a számítógépen CadCraft Studio-t igényel. Lásd: [A .3dm-modell élőben tartása](topic:live-3dm-link).
- **Modell megtekintése a helyszínen.** A {{ui:Megtekintés a helyszínen (AR, telefon)}} a {{ui:Nézetek}} menüben Chrome-mal rendelkező Android-telefonon működik. Lásd: [A modell megtekintése a helyszínen Android-telefonnal (AR)](topic:ar-on-site).
- **Ívmódszerek.** Az {{ui:Ívmódszerek}} legördülő lista tíz módot kínál ív rajzolására, köztük a {{ui:3 pont}} és a {{ui:Kezdőpont, középpont, végpont}} módot.
- **További mértékegységek.** A tömegek (kg, lb, t, ton) és a hőmérsékletek (°C, °F, K és °R) felismerődnek ott, ahol mértékegységgel írja be az értékeket.

## Minden alkalmazásban

- **Buborékszövegek.** A gombok fölé húzott szöveg és a levágott címkék Bootstrap-buborékot kapnak.
- **Bezárható indító tipp.** Az üres rajzterület tipp-kártyáján kis bezárás (x) gomb van. Bezárt marad, a parancspaletta pedig újra megjelenítheti.
- **Görgethető lapsorok.** A panel lapsora, ha nem fér ki, görgethető lesz a levágás helyett.
- **Lapcímek.** Dokumentum megnyitásakor a böngészőlap a dokumentum nevével kezdődik, utána a ModelCraft és a CadCraft. Ha nincs mentve, pont áll elöl.
- **Elrendezés.** A {{ui:Beállítások}} › {{ui:Általános}} › Elrendezés az elrendezéseket legördülő listában tartja, azzal a lehetőséggel, hogy egy elrendezést csak ebben az alkalmazásban használjon, és gombbal visszaállíthatja az elrendezést.
- **Nyelvek.** A Beállításokban lévő nyelvlista a buildben lévő nyelvi fájlokat követi. Az angolon kívüli nyelvek gépi piszkozatok.
- **Élő és Könyvtár.** A Live TeamWork élő kurzorokat és neveket mutat, a Könyvtár-gyűjtemények pedig minden alkalmazásnak alapértelmezett gyűjteményt adnak.

## Javítások

- Animáció lejátszása közben a {{ui:Lejátszás}} gomb helyett a {{ui:Szünet}} látszik, és a {{key:Space}} lejátszik és szünetel, amíg az idővonal nyitva van.
- Az álló kép WebGL-re vált vissza, ha a grafikus kártya nem tudja elindítani az útkövetőt. Az élő renderelési nézet továbbra is mutathatja a hibát; ezt nem ellenőrizték Windows-gépen azzal az illesztőprogrammal.
- Az Anyagáramlás valódi módja újra csatlakozik, miután a kapcsolat PLC-kivételválaszoknál megszakadt.

## Őszinte korlátok

- Semmi sem lett kinyomtatva valódi nyomtatón: sem filamenttel, sem gyantával, sem a Bambu Connecten keresztül. A gyantafájlokat csak a CadCraft saját olvasói olvasták vissza.
- A digitális ikert és a gyárpadlót csak szimulátorokkal és ismert eredményekkel tesztelték, valódi PLC, vonal vagy protokoll nélkül. Ellenőrző segédeszközök, nem biztonsági érvényesítés. A fizika csak dobozokat fed le, legfeljebb nyolc terheléssel.
- A Rhino- és Grasshopper-kapcsolat még soha nem futott a valódi programokban.
- Az angolon kívüli nyelvek gépi piszkozatok.

## Korábbi: 0.8 és 0.8.1

Ez változott a ModelCraft 0.8-ban (2026. november 1.) és a 0.8.1-ben (2026. november 2.), a 0.7-hez képest. A {{ui:Kép renderelése…}} párbeszédpanel most már átküldheti a jelenetet egy másik programba, a Felületek panel sima, szabad formájú felületeket készít, a csatlakoztatott asszisztens pedig egyetlen mondatból beállíthat egy egész jelenetet.

### Új

**Renderelés**

- **Motorválasztás.** A {{ui:Kép renderelése…}} párbeszédpanelen a **Motor** lista a Mód fölött van. A saját két motorunk, a Gyors és az Útkövető az alapértelmezés, és mindenhol működnek. Más bejegyzések a jelenetet csomagként mentik (a modell USD-fájlként, plusz egy beállítófájl a pontos anyagértékekkel, a bekapcsolt lámpákkal, a nappal, az éggel, az expozícióval és a kamerával), hogy egy másik programba vihesse. Másik program által rajzolt kép megmondja, melyik program és melyik verzió készítette. Lásd: [Válassza ki, melyik program rajzolja a képet](topic:render-engines).
- **Megnyitás másik programban.** A Motor listából a jelenet USD-fájlként, glTF-fájlként (`.glb`) vagy Unreal projektmappaként (`.zip`) menthető, a böngészőben és a CadCraft Studio-ban. A Studio-ban a usdview-t vagy a számítógép saját programját is el tudja indítani a fájlhoz. Lásd: [A jelenet megnyitása másik programban](topic:render-open-in).
- **Küldés játékmotorba a Studio-ból.** A Studio a jelenetet Unreal Engine projektbe írja, és minden küldéskor szinkronban tartja, csak egy irányban. A saját szerkesztései a CadCraft által soha nem írt rétegben élnek. Lásd: [A jelenet küldése játékmotornak](topic:render-unreal).
- **Motorok bővítményekből.** Egy bővítmény motort adhat a listához. A JavaScriptben írt a böngészőben és a Studio-ban rajzol; a programot futtató motorhoz a Studio-ban jóváhagyás szükséges. Lásd: [Kép rajzolása más programmal](topic:render-other-program) és [Renderelő motor hozzáadása bővítménnyel](topic:render-engine-addons).
- **Jelenet leírása szóval.** Mondja el a csatlakoztatott asszisztensnek: „alkony, enyhe eső, őszi fák, emberek a téren”, és a ModelCraft egy lépésben beállítja: a nap a dátumhoz és időhöz mozdul, hogy az árnyékok kövessék, az ég megváltozik, nedves felületek jelennek meg, a fák és emberek valódi objektumként kerülnek elhelyezésre olyan címkéken, amelyeket el lehet rejteni, mozgatni vagy törölni. A napszak, a dátum vagy az évszak, valamint az időjárás (tiszta, borult, köd, enyhe eső, eső, vihar) önmagában is működik, és egy későbbi kérés ugyanazt a jelenetet módosítja. A köd a grafikus kártyán készült nagy minőségű képen látszik; a többi motor az eget, a fényt és a nedves felületeket mutatja. Az esőt nem rajzolják hulló csíkokként.

**Anyagok**

- **Anyag egy fényképből.** Adjon a ModelCraft-nak egy felületről készült fényképet (fal, padló, kő), és csempézhető anyagot készít: a fénykép megvilágítása kisimul, a széleket összeillesztik, a színtérképet, az érdességi térképet és a normáltérképet a képből számítják ki. Ez egyszerű képfeldolgozás a saját képén, betanított modell nélkül. Az érdesség becslés. Egyszerű, négyzetes, szemből készült fénykép adja a legjobb csempét; erős minta, például téglák, halvány szellemképet mutathat ott, ahol az illesztés keveredik.

**Felületek**

- **Szabad formájú felületek.** A {{ui:Felületek}} panel NURBS-görbéket és levágatlan felületeket készít: pontokon átmenő görbéket, áthúzást, vonalzott felületet (ruled), kihúzást, forgatást, egy vagy két sínen végigvezetett felületeket, görbehálózatból készült felületeket, négy élből készült foltokat, illesztést és keverést. Minden közös élt G0, G1 vagy G2 szinten mérnek (rés, szög, görbületugrás) a pontos felületeken, és a kért szintnél rosszabb él megjelenik a Problémák panelen **Illesztés** javítással. A zebracsíkok és a görbületi színek a pontos felületekből készülnek. A STEP- és IGES-fájlok ki- és beolvashatók. Lásd: [Szabad formájú felületek (NURBS)](topic:nurbs-surfaces).

**Helyszín és szobák**

- **Vázlatfénykép a talajra.** A {{ui:Fájl}} › {{ui:Vázlatfénykép importálása…}} egy kézi vázlatról készült telefonfotót a megadott méretarányban élekké alakít a talajon: egy csoport, minden tollszínhez egy címkével. A papírt a számítógépen találja meg és egyenesíti ki, és semmit sem küld sehová. Lásd: [Modellezés helyszínrajzon](topic:site-plan).
- **Szoba berendezése.** Jelöljön ki egy padlót, és használja a {{ui:Rendezés}} › {{ui:Szoba berendezése…}} parancsot. Hálószoba-, nappali-, étkező-, konyha-, fürdőszoba- vagy irodabútorok szabályok szerint kerülnek elhelyezésre, a falak mellé, ajtók és ablakok elől szabadon, egy csoportban, amelyet egy lépésben el lehet távolítani. Ez alapértelmezett elrendezés, amelyet át kell nézni, nem tervezet. Lásd: [Kezdő könyvtár](topic:starter).

**3D-nyomtatás**

- **Ferde vágások.** A nyomtatásra bontás a vágásait legfeljebb 60 fokkal megdöntheti, ami több ragasztási felületet ad a daraboknak. A csatlakozók merőlegesen állnak a vágásra. Lásd: [Modell felbontása nyomtatáshoz](topic:print-split).
- **A nyomtatás-ellenőrzés a Problémákban.** A 3D-nyomtatási ellenőrzés megállapításai a Problémák panelen jelennek meg, jelölésekkel a modellen, és a Javítás innen javítja őket. Lásd: [Támaszok, falvastagság, kiüregelés és javítás](topic:print-tools).

**Minden alkalmazásban**

- **Nyelvek.** A súgó és az alkalmazások 54 nyelven érhetők el. Tíz új: litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég. Az angolon kívüli nyelvek gépi piszkozatok, amíg anyanyelvi lektor el nem olvasta őket, és a súgótémakörök még lehetnek angolul.
- **Beviteli eszközök.** Érintőpad, toll, 3D-egér, játékvezérlő és MIDI-vezérlők is működtethetik az alkalmazásokat, mindegyiket vagy csak egyet.
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › Eszköztársorok beállítja a Tördelés értékét (a korábbi módon), 2 sort vagy 1 sort. A nem férő sáv oldalra görgethető, ahelyett, hogy a rajzból venne helyet. A Tördelés marad az alapértelmezés.
- **Tulajdonságrács.** A ModelCraft lámpamezői a közös rácsot használják: összecsukható kategóriák, címke- és értékoszlopok, és Kompakt sűrűség. A beírt számítások, például a `2*450`, továbbra is működnek.
- **Problémák.** A Problémák panel (a figyelmeztető gomb az alkalmazássávon) minden alkalmazással közös. A ModelCraft-ban a nyomtatás-ellenőrzést és a felületfolytonossági figyelmeztetéseket tartalmazza.
- **Élő.** A Live TeamWork munkamenet megmutatja, ki hol van. Lásd: [Közös modellezés a Live TeamWork-kel](topic:work-live).
- **Bővítmények.** A bővítmények renderelő motorokat adhatnak hozzá, ahogy fent.
- **AI csatlakoztatása.** Az eszközszerződés és a nyolc alkalmazás ellenőrzései átmennek, összesen 454 eszközzel. Egykattintásos csatlakozás a Studio-n belül, böngészős asszisztensekhez való tárhelyen futó csatlakozó, saját kulcs a Studio-n belül és közzétett csomag még nem ígérhető. Az alkalmazások nem tartalmaznak saját AI-t. Lásd: [ModelCraft használata AI-asszisztenssel](topic:use-with-ai-assistants).

### Javítások a 0.8.1-ben

- **DWG osztályok szakasza.** A DWG-fájl osztályok szakaszát hibás típusként olvasta be, ami importáláskor tönkretehette a fájlt. Most helyesen olvassa be, a ModelCraft-ban és a többi DWG-t olvasó alkalmazásban.
- **Táblagépek álló helyzetben.** A szabad rácsmagasság a vászonra kerül, és a lapelrendezés 760 pixel széles vagy annál keskenyebb képernyőn kezdődik. A ModelCraft stíluslapja is tartalmazza a változtatást.
- **Nyelv a Studio-ban.** A CadCraft Studio és a csomagolt kiadások futás közben is válthatnak nyelvet; korábban csak angolul voltak. Még nem minden platformon tesztelték: jelezze nekünk, ha a nyelv nem változik.

### Ebben a verzióban még nincs

- **Nincs kódaláírás.** A Windows megjelenítheti a SmartScreen-t: válassza a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} lehetőséget. Macen jobb gombbal kattintson, és válassza a {{ui:Megnyitás}} lehetőséget. A boltverziók szünetelnek, és az iPad- és iPhone-verziót a 0.8.1-hez nem építették újra.
- Másik program által rajzolt kép renderelőmotor-bővítmény nélkül, panorámás vagy sztereó kamerák, és égkép másik programon keresztül, valamint az Unreal-színpadot megnyitó bővítmény még nincs. A fájlok készülnek; a bővítmény nincs kiadva, és az Unreal-ben még nem futtatták.
- Szabad formájú felületek: a G3 és az A osztály nincs mérve vagy állítva, a levágás és a testek később jönnek.
- Más programok képei nem pixelre pontosan egyeznek a mieinkkel: csak a kamera, a nap, a lámpák és az expozíció egyezik.
- A 0.8.1-es javítás a Studio nyelvváltására nincs minden platformon tesztelve.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon található. Az előző kiadásról lásd: [Újdonságok a 0.7-ben](topic:whats-new-0-7).
