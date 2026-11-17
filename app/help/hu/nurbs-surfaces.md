---
title: Szabad formájú felületek (NURBS)
summary: Sima görbék és felületek termékhéjakhoz, karosszériákhoz és hajótestekhez – loft, végigvezetés, görbehálózatok, négyélű foltok, átmenetek, vágások –, G0, G1 és G2 folytonosság a pontos felületeken mérve, testek egyesítéssel, kivonással és metszéssel, zebra- és görbületnézetek, szkennelésből illesztett felületek mért hibával, valamint STEP- vagy IGES-fájlok.
keywords: nurbs, szkennelés, visszafejtés, illesztés, háló felületté, ponthalmaz, stl, vágás, vágott, lyuk, kivágás, test, testek, logikai, egyesítés, kivonás, metszés, különbség, varrás, zárt, szabad formájú, felület, felületek, b-spline, bspline, görbe, spline, loft, végigvezetés, sín, hálózat, coons, folt, átmenet, illesztés, folytonosság, g0, g1, g2, érintő, görbület, zebra, vezérlőpontok, csomók, fok, step, iges, a osztály
from: 09887405
---

A **Felületek** panel olyan sima görbéket és felületeket készít, amilyeneket termékhéjakhoz, karosszériákhoz és hajótestekhez használnak: NURBS, ugyanaz a matematika, amelyet más felületmodellezők is használnak. Minden a pontos felületeken mérődik, soha nem a látott háromszögeken. A panel méretei **milliméterben** vannak, bármilyen mértékegységet mutat is a modell.

Nyissa meg a jobb oldali panelről: {{ui:Felületek}} › {{ui:A Felületek panel megnyitása}}. Az a modell, amelyben már vannak felületek, magától megnyitja.

## Hogyan működik egy parancs

1. Nyomjon meg egy parancsot (például a **Loft**). A panel megmondja, mire van még szükség: pontokra, görbékre, felületszélre vagy görbevégre.
2. Válassza ki azokat: kattintson rájuk a 3D nézetben, vagy nyomja meg a listában minden elem mellett a **Kijelölés** gombot (vagy az él- és végpont-gombokat). Élnél kattintson a felület adott élének közelébe.
3. Ellenőrizze a beállításokat (fok, tűrés, folytonosság, …), majd nyomja meg a **Készítés** gombot.

A pontokból készített görbéknél a pontokat soronként, beírva adja meg (`x, y, z` mm-ben), vagy használja a **Pontok kijelölése a nézetben** lehetőséget: minden kattintás ugyanazt a fogást használja, mint a rajzeszközök. Az <kbd>Enter</kbd> vagy a dupla kattintás befejezi, az <kbd>Esc</kbd> megállítja.

## Görbék

- **Görbe átmenő pontokon** minden ponton átmegy. **Görbe vezérlőpontokkal** ehelyett a vezérlőpontok burkát követi.
- A **Csomó beszúrása**, a **Fok emelése** és a **Fok csökkentése** úgy változtatják meg a görbe leírását, hogy nem mozdítják el (a csökkentés elutasításra kerül, ha a görbe a tűrésnél többet mozdulna). A **Görbe újraépítése** új számú vezérlőpontot ad neki, és megmondja, mennyire mozdult el.
- A **Görbe illesztése** egy görbe végét egy másikéhoz illeszti G0 (érintkezés), G1 (ugyanaz az irány) vagy G2 (ugyanaz a görbület is) szerint. A **Görbe átmenet** új görbét ad két vég közé.
- **Görbék egyesítése** és **Görbe felosztása**.

## Felületek

- **Áthúzás (loft)** két vagy több görbén át, **Vonalas felület** kettő között, **Görbe kihúzása**, **Görbe forgatása**.
- A **Végigvezetés egy sínen** a profilt csavarodás nélkül viszi végig egy útvonalon; a **Végigvezetés két sínen** a profil végeit mindkét sínen tartja. A végigvezetések illesztettek: az állapotsor megmondja, mennyire maradtak közel a valódi végigvezetéshez.
- A **Felület görbehálózatból** egy görbehálózat rácsán halad át (az első kijelölések a profilok, a többi a vezetők). A **Folt négy élből** négy görbét tölt ki, amelyek a sarkaiknál találkoznak.
- A **Felület illesztése** egy felületszélt egy szomszédéhoz illeszt G0, G1 vagy G2 szerint; a **Felület átmenet** egy felületet ad két él közé.
- **Eltolt felület**, **Felület kiterjesztése** (a felület úgy folytatódik, ahogy haladt), **Felület újraépítése**, valamint csomók és fok a felületekhez.

## A minőség ellenőrzése

A **Közös élek** táblázat minden élt felsorol, amelyet két felület oszt meg: a rést (mm), a közöttük lévő szöget (°) és a görbületi ugrást (1/mm), valamint azt, hogy ez G0, G1 vagy G2 szintű-e. Ha egy él rosszabb, mint amit kért, az a **Problémák** között is megjelenik (az alkalmazássáv ⚠ gombja), egy **Illesztés** javítással.

A **{{ui:Megjelenítés}}** › **Zebra csíkok** és **Görbület (Gauss)** a pontos felületből származik: a csíkok, amelyek törés nélkül futnak át egy élen, G1-et jelentenek; amelyek szélessége is megmarad, G2-t. A görbület kék ott, ahol a felület nyeregalakú, piros ott, ahol kupola, és fehér ott, ahol sík. A **Vezérlőpontok** a vezérlőhálókat rajzolja meg.

A G0–G2 élenként 33 ponton mérődik. A **G3 és az „A osztályú” minőség nincs mérve**, és nem is állítjuk.

## Felület vágása

A **Vágás** csoport anélkül vág egy felületet, hogy az alakja változna: a felület megtartja minden vezérlőpontját, és csak a körvonalon belüli rész látszik, számolódik és íródik. A **Vágás téglalapra** és a **Vágás körrel** a felület minden irányban egy arányán (0 és 1 között) működik, így nem kell a nézetben kijelölni; a **Vágás görbével** egy zárt görbét vesz, amely a felületen fekszik (a felületre vetítik, és ha nyitott, vagy a tűréstől többel távolabb van, szavakkal elutasítja). Jelölje be a **Lyuk vágása** opciót, hogy eltávolítsa a körvonalon belüli részt; hagyja kikapcsolva, hogy csak a belső maradjon. Egy felületnek lehet egy megtartott körvonala és tetszőleges számú lyuka; az a körvonal, amely egy másikat keresztez, elutasításra kerül. A **Vágás eltávolítása** újra megmutatja az egész felületet. A vágott élek pontosan követik a körvonalat; a panel visszavonása a vágást is ugyanúgy visszaveszi, mint bármely más lépést.

A STEP a vágást a lap határaként, az IGES vágott felületként (144-es entitás) tárolja; mindkettő visszaolvassa.

## Testek és logikai műveletek

A **Testek** csoport felületeket zárt testekké alakít és egyesít. Egy test itt a panel saját felületeinek olyan halmaza, amely együtt zár egy térfogatot; lapjai pontos NURBS-felületek maradnak a vágásaikkal együtt.

- A **Doboztest**, a **Hengertest** és a **Gömbtest** megadott méretekből (mm-ben) készít egyet: egy doboz hat sík lapból áll, egy henger kerek oldalból és két sík véglapból, a körre vágva; egy gömb egy forgatott felületből.
- A **Test felületekből** a saját készítésű felületeket csoportosítja. Jelöljön ki néhányat, vagy ne jelöljön ki egyet sem, hogy az összes még testben nem lévő megjelenített felületet használja. A felületeket a tűrésen belül varrják össze: ha nem záródnak, semmi nem változik, és a panel megmondja, hány él marad nyitva, és milyen közel kell találkozniuk.
- Az **Egyesítés**, a **Kivonás** (a második testet vonja le az elsőből) és a **Metszés** (csak az, ami mindkettőben közös) két testet vesz: kattintson mindkettő egy lapjára a nézetben, vagy nyomja meg a **Kijelölés** gombot a **Testek** listában. Jelölje be a **Két test megtartása** opciót, hogy mellettük maradjanak az eredménnyel.

Egy logikai művelet minden lapot a saját pontos felületén tart, és a metszésvonal mentén új vágási körvonalakkal vág. Az eredménysor a mért számokat adja: mennyire kellett elmozdulnia a testmotor pontjainak, hogy a pontos felületeken üljenek (soha nem több a tűrésnél), milyen közel vannak a metszéspontok mindkét felülethez (általában néhány milliomod milliméter), a térfogatot, és hogy az új lapok újra záródnak-e, ha a pontos felületeikből újra varrják őket. A térfogatok a tűrésen belüli háromszögeken mérődnek (0,05 mm, hacsak nem állított be mást), így egy gömb vagy henger térfogata kicsit a pontosnál kisebbnek olvasódik: kisebb tűrés közelebb visz. Egy tisztán el nem végezhető logikai művelet (a testek nem osztanak meg semmit, vagy egy körvonal metszené önmagát) szavakkal elutasításra kerül, és semmit nem változtat. Egy logikai művelet a panel **Visszavonás** gombjának egy lépése.

A **Testek** listában a **Csoport feloldása** a lapokat egyszerű felületekként megtartja; a kuka eltávolítja a testet és a lapjait.

A **Hozzáadás a modellhez** (a **Testek** listában) a test egy másolatát a modellbe teszi egyetlen zárt csoportként, lapjai 0,05 mm-en belüli háromszögek, egyetlen lépésben a modell visszavonásában. Ezután működik a modell saját **Egyesítés**, **Kivonás** és **Metszés** funkcióival, a {{ui:Nyomás/húzás}} eszközzel és a 3D-nyomtatás-ellenőrzéssel; a pontos test a panelben marad.

## Lekerekítések és vastagítás

A **Lapok közötti lekerekítés** lekerekíti azt az élt, ahol egy test két lapja találkozik: jelölje ki a két lapot (a nézetben, vagy a listában a **Kijelölés** gombbal), adja meg a **sugarat**, és egy élen változó sugárhoz a **sugár a végén** értéket (0 esetén egy sugár marad). Egy ekkora sugarú golyót gördítünk az él mentén úgy, hogy mindkét lapot érintse; a lekerekítés a pontokon keletkező pontos körív, egy felületté összefűzve, és a két lap ott vágódik le, ahol a golyó érinti őket. A külső él anyagot veszít, a belső sarok nyer. Az eredménysor a mért adatokat adja: mennyire tér el a lekerekítő felület a gördülő golyótól azok között a pontok között, amelyekből készült (pontok adódnak hozzá, amíg a tűrés negyedén belül nem lesz), a legnagyobb szöget a lekerekítés és minden lap között az érintővonalak mentén, és ugyanazokat a számokat, mint egy egyesítésnél. Egy nem illő sugár (a golyó kilépne egy lapból, vagy egy lap szorosabban görbül a sugárnál) elutasításra kerül a lap nevével, és semmi nem változik.

A **Több él lekerekítése** sok élt egy lépésben kerekít le: jelölje ki az első él két lapját, majd a következő él két lapját, és így tovább (egy lap több párban is lehet, például egy doboz felső lapja négyben); minden élnek a beírt sugár jut. Minden lekerekítés az eredeti testen számolódik, majd egymás után vágódnak ki, így a sorrend nem számít. Ahol két lekerekített él találkozik egy sarokban, amelyen az összes többi él éles marad, a két lekerekítés a metszésvonaluk mentén összefut (gerinc). Ahol három lekerekített külső él három, egymásra merőleges sík lapból egy sugárral találkozik, a sarok egy **gömbfolt** lesz, amely mindhárom lekerekítést érinti (a **Sarkok** kikapcsolásával gerinces sarkot kap); egy élnek legalább a sugár kétszeresének kell lennie, ha mindkét vége ilyen sarok. Az eredménysor megmondja, hány élt kerekítettek le, és hogyan sikerültek a sarkok. Belső élek is lekerekíthetők együtt, de az olyan eredményt, amely nem záródik újra, csak jelentjük (a sor ezt mondja), ezért ellenőrizze.

A **Testté vastagítás** vastagságot ad egy felületnek: jelölje ki, adja meg a **vastagságot**, és jelölje be a **Másik oldal** opciót, hogy a másik irányba nőjön. Az eltolt lap a felülethez illesztett, és azzal szemben mérődik (az eredménysor adja a legnagyobb eltérést a vastagságtól); a falak minden élt és minden vágási körvonalat követnek. Ha a felület az adott oldalon szorosabban görbül a vastagságnál, vagy a felület egy másik része a vastagságnál közelebb fekszik, elutasításra kerül, megnevezve a felületet és a helyet; semmi nem változik.

## Visszavonás, a fájl, STEP és IGES

A panelnek saját **Visszavonás** és **Ismétlés** gombja van (parancsonként egy lépés). A felületek a `.modelcraft` fájlban a modellel együtt mentődnek; nem részei a modell saját visszavonásának, akárcsak a fájl anyagai.

A **STEP…** (AP242) és az **IGES…** pontosan úgy menti a görbéket és felületeket, ahogy vannak (B-spline görbék és felületek, semmi nincs háromszögekké alakítva). Minden felület saját lap a vágásával; egy test egy zárt héjként íródik, minden él a két lapja által megosztva, ahogy azt más CAD-programok várják (az állapotsor megmondja, hány test ment így). Az IGES-ben ugyanez a test egyetlen zárt test B-rep (186-os entitás az 514-es zárt héjon, 510-es lapok, 508-as hurkok, egy 504-es éllista és egy 502-es csúcslista); az a test, amelynek lapjai élenként nem párosodnak, külön lapokként íródik, és ezt a sor is jelzi. Az **Importálás…** az ilyen testeket testként olvassa vissza STEP-ből és IGES-ből. Olvassa a így írt görbéket és felületeket, valamint a `.ccnurbs` foltkészleteket; más programok STEP-testjei a Fájl › Importálás menüvel hálóként nyílnak meg.

## Felületek szkennelésből (visszafejtés)

Jelölje ki a szkennelt hálót a modellben (kijelölés nélkül minden megjelenített), nyissa meg a **Felületek** panelt, és a **Szkennelés** csoportban válassza a **Felületek illesztése a szkennre** lehetőséget. Az eszköz **síkokat**, **hengereket**, **gömböket** és **kúpokat** keres (azokat a pontos felületeket, amelyekből egy megmunkált alkatrész áll; minden sor megmutatja a talált sugarat vagy félszöget), **lekerekítéseket** keres (lekerekített éleket és sarkokat: egy kis henger vagy gömb, amely érintőlegesen fut két vagy több másik lapba, a sugarával és a csatlakozó lapokkal együtt), **peremlekerekítéseket** (egy tórusz: a lekerekített él, ahol egy sík lap hengerhez vagy kúphoz csatlakozik, a sugarával és a gyűrű sugarával), és **változó lekerekítéseket** (egy lekerekített él, amelynek sugara az él mentén változik, minden végén a sugárral). Illeszt **egy szabad formájú foltot** egy sima, enyhén görbülő darabra, és minden lapot a szkenn annak a részének körvonalára vág, ahonnan származik, így a lyukak és sarkok megmaradnak. Beállítások: a **tűrés** (mm-ben, mennyire lehet egy szkennelt pont egy síktól vagy hengertől, és még hozzá tartozzon; és a szabad formájú folt célja), a **legkisebb darab** (a felületi terület aránya) és a **legtöbb lap**. Ugyanaz a szkenn és ugyanezek a beállítások mindig ugyanazokat a lapokat adják.

Az eredmény egy táblázat, soronként egy lappal: a típusa, hány háromszögből származik, és a **hiba, amelyet a szkenntől a lapig mérünk** (rms, a legnagyobb, és a pontok aránya a tűrésen belül). A mért pontok a szkenn csúcsai és minden háromszög közepe. A hibát nincs visszafelé, lapról a szkennre mérve, így egy szkennen túlnyúló lap nem jelenne meg. A táblázat alatti megjegyzés azt is mondja, a felületnek mekkora része volt túl kicsi az illesztéshez. A nézetben a szkennpontok az **eltérési térképük** szerint színeződnek: kék a lapon, zöld a tűrés felénél, piros a tűrésnél vagy azon túl (az **Az eltérési térkép megjelenítése** kikapcsolásával elrejthető). Önmagukba visszahajló darabok (például egy zárt cső szabad formájú foltokkal illesztve) nem illesztettként jelennek meg, soha nem erőltetve egy felületté.

A **Felületek összevarrása testté** minden megjelenített felületet, amely még nincs testben, egyetlen zárt testbe varr. A szkenn lapjai csak a szkenn saját hibáján belül találkoznak, így a legkisebb illesztési távolságot próbálja, amely záródik (soha nagyobbat, mint a beállított **varrási távolság**), és szavakkal elutasítja, ha a lapok nem záródnak. Soha nem fed be rést. Egy lekerekített élű doboz akkor varrható össze, ha a lekerekítései saját lapként lettek megtalálva; a záródó illesztési távolság az eredményben szerepel. A test ezután működik az Egyesítéssel, a Kivonással, a Metszéssel és a **Hozzáadás a modellhez** funkcióval.

Amit nem tesz meg: a **peremlekerekítést** (tóruszt) csak egy már megtalált henger vagy kúp tengelye körül keresi, a **változó lekerekítést** pedig csak egy viszonylag egyenes él mentén (a metszetei az egyik irányra merőlegesen vannak vágva); máshol szabad formájú foltként jelennek meg, ha elég simák, különben kimaradnak. A gömböket, kúpokat és lekerekítéseket véletlen mintavétellel keresi, így egy nagyon kicsi (néhány háromszögből álló) elem elmaradhat. Az eltérési térkép a szkenntől a lapokig mért távolságot mutatja, nem fordítva. A nagyon nagy szkenneket (300 000 háromszög felett) itt elutasítja. Egy teljes körű henger lapjait lyukak körül vágja, a varrat pedig oda kerül, ahol nincs lyuk. Mielőtt ráhagyatkozna, ellenőrizze minden lapot a szkenn alapján.

## Még nincs elkészítve

A görbe lapok sarkában vagy különböző sugarakkal találkozó élek lekerekítése (csúcsátmenet), a nem találkozó lapok közötti lekerekítés, egy ferde vagy görbe lapon végződő belső lekerekítés, valamint a felületeken háromszögek nélkül számolt logikai műveletek és lekerekítések. Itt a testmotor a tűrésen belüli háromszögeken dolgozik, és minden pontot visszatesz a pontos felületekre.
