---
title: Bármely tulajdonság animálása, görbékkel való formálása és klipek keverése
summary: Az Animáció munkaterület kulcsolja egy objektum helyzetét, forgatását és méretét, egy lámpa fényerejét, nyílásszögét és színét, a lencsét és a háló alakkulcsait; a vázak csontokkal és festett súlyokkal hajlítják a hálót; az IK és a kényszerek elérést, nézést, másolást, korlátozást, függést vagy követést adnak az objektumoknak; a merev testek leesnek, egymásra halmozódnak és ütköznek, majd kulcsokká sülnek; a vezérlők más értékekből állítanak be egy értéket; az idővonal Görbék nézete Bézier-karokkal formálja az egyes változásokat és ciklusokat, a Klipek nézete pedig az animációkat műveletekként menti, amelyeket újra elhelyezhet és keverhet.
keywords: fizika, merev test, merev testek, szimuláció, szimulálás, leesés, esés, gravitáció, ütközés, ütközik, halmozás, pattanás, súrlódás, kisütés, kisütött, ik, inverz kinematika, kényszer, kényszerek, nézés, követés, célzás, transzformáció másolása, helyzet másolása, forgatás másolása, forgatási korlát, korlátok, gyermeke, szülő, útvonal követése, útvonal, pólus, fabrik, lánc, váz, vázak, csontváz, csont, csontok, bőr, súlyok, súlyfestés, csúcscsoportok, automatikus súlyok, póz, pózmód, kettős kvaternió, lineáris keverés, alakkulcsok, alakkulcs, morf, morfok, morfcélok, alakkeverés, arc, kifejezés, vezérlő, vezérlők, kifejezések, animáció munkaterület, animáció, animálás, kulcskocka, kulcs, kulcsok, tulajdonság, tulajdonságok, transzformáció, helyzet, forgatás, méret, lámpa, fényforrás, fényerő, szín, lencse, látómező, fov, grafikonszerkesztő, görbék, görbe, bézier, karok, érintő, interpoláció, ciklus, ciklusok, ismétlés, hurok, ping-pong, eltolás, kulcslap, kulcsok kijelölése, dobozos kijelölés, kulcsok másolása, kulcsok beillesztése, kulcsok nyújtása, kulcsok léptékezése, klipek, műveletek, nla, keverés, hatás, rögzítés
from: 16d8e12f
---

Az [idővonal](topic:animation) a kamerát és a teljes csoportokat és komponenseket mozgatja. Az **Animáció** munkaterület ennél többet kulcsol, az idővonal pedig két további nézetet kap, amelyekkel formálhatja és újra felhasználhatja a kulcsolt elemeket.

## Megnyitás

Válassza a {{ui:Animate}} lehetőséget a munkaterület-listában az eszköztáron. Az idővonal a nézet alatt nyílik meg, az eszköztáron az animációs csoportok jelennek meg ({{ui:Keys}}, {{ui:Play}}, {{ui:Timeline}}), a jobb oldali panel pedig azt sorolja fel, amit a lejátszófejnél kulcsolhat.

## Tulajdonság kulcsolása

A panel a lejátszófejnél a következőket sorolja fel:

- **Kijelölt objektum**: a {{ui:Place}}, a {{ui:Turn (°)}} és a {{ui:Size}}, mindegyik három számmal. Írjon be egy számot, és nyomja meg az {{key:Enter}} billentyűt: a lejátszófejnél kulcs keletkezik, és az objektum oda mozdul. A sor melletti rombusz az érték jelenlegi állapotát kulcsolja; a kitöltött rombusz azt jelzi, hogy a lejátszófejnél már van kulcs.
- **Lámpák**: minden lámpa {{ui:Brightness (lm)}}, {{ui:Spread (°)}} (reflektorlámpák) és {{ui:Colour}} értéke.
- **Kamera**: a {{ui:Lens angle (°)}}, a kamera mozgása közbeni nagyításhoz.

A {{ui:Key transform}} (vagy az {{key:I}}) egyszerre kulcsolja a kijelölt csoportok vagy komponensek helyzetét, forgatását és méretét; a {{ui:Key camera}} (vagy a {{key:K}}) a kamerát kulcsolja. Ha a {{ui:Auto key}} be van kapcsolva, a csoport, amelynek helyzete, forgatása és mérete így van kulcsolva, minden mozgatáskor új kulcsot kap.

A forgatás három szög: az X, majd az Y, végül a Z tengely körül. A 180°-nál nagyobbra kulcsolt forgatás ugyanabba az irányba folytatódik (190° marad 190°, nem lesz −170°), így egy kerék többször is körbeforoghat.

:::tip
Az idővonalon a {{ui:Key selected}} gombbal kulcsolt csoport teljes elhelyezési kulcsokat kap. A sorában lévő görbegomb ezeket helyzet-, forgatás- és méretgörbékké alakítja (ugyanazzal az elhelyezéssel minden kulcsnál), így a {{ui:Curves}} nézetben formálhatja őket.
:::

## Alakkulcsok (morfok)

Az **alakkulcs** ugyanannak a [hálónak](topic:meshes) egy másik alakja: mosoly egy arcon, egy ajtó kidudorodása, egy meghajlított levél. A csúszkája a hálót eredeti állapotából (0) az adott alakba (1) keveri; több kulcs összeadódik.

1. Válasszon egy hálót az Animáció munkaterületen: a panel megjeleníti a {{ui:Shape keys}} listáját.
2. Kattintson az {{ui:Add shape key}} gombra. A ModelCraft a [Háló munkaterületre](topic:mesh-edit) lép az új alakkulccsal: mozgasson pontokat, húzzon ki, formázzon – alakítsa a hálót a kívánt alakra.
3. Térjen vissza az {{ui:Animate}} munkaterületre, és kattintson a {{ui:Done}} gombra. A háló visszaáll az eredeti állapotába, az alakkulcs pedig megtartja a módosítást.

Ezután húzza el az alakkulcs csúszkáját (vagy írjon be egy értéket), hogy keverje. A rombusz a lejátszófejnél kulcsolja az értéket, így az alakkulcs idővel felnőhet és eltűnhet; ha már van sávja, az új érték a lejátszófejnél kulcsolódik. A ceruza újra szerkeszti a kulcs alakját (a háló a {{ui:Done}} gombig teljesen ezt mutatja; a {{ui:Cancel}} visszahagyja a kulcsot az eredeti állapotában), a szem kikapcsolja a kulcsot, a kuka eltávolítja.

Az alakkulcs szerkesztése közben hozzáadott csúcs a hálóhoz tartozik: ott marad, ahová tette, minden alakban.

:::note
Az alakkulcsok a hálót a [módosítói](topic:modifiers) előtt mozgatják: a Felosztás módosító simítja a kevert alakot. A renderelt képek és videók minden képkockánál megmutatják a kulcsokat.
:::

## Vázak: csontok, amelyek hajlítják a hálót

A **váz** egy [háló](topic:meshes) belsejében lévő csontok halmaza. Pozícionálja a csontokat, és a háló követi őket, mindegyik pont annyira, amennyire a **súlyai** előírják.

1. Válassza ki a hálót az Animáció munkaterületen, és kattintson a panelben az {{ui:Add an armature}} gombra (vagy a {{ui:Rig}} csoport {{ui:Add bone}} gombjára): az első csont a háló közepén fut fel a talpától.
2. Egy kijelölt csontnál az {{ui:Add a child bone}} a csúcsától kezdve hozzáadja a következőt. Állítsa be bármely csont {{ui:Head}}, {{ui:Tip}}, {{ui:Roll (°)}} értékét és azt, hogy mitől {{ui:Hangs from}}, a panelen; a másik csonttól függő csont vele együtt mozog. Vegye ki a pipát a {{ui:Moves the mesh}} mellől, ha a csont csak másokat irányít.
3. Kattintson az {{ui:Automatic weights}} gombra: minden csont megfogja a hozzá legközelebbi pontokat, a fogás simán szétterül a hálón, így két csont közötti pontok megosztoznak rajtuk. A {{ui:Nearest bones only}} gyorsabb, élesebb felosztást ad.

A csontokat a {{ui:Pose}} ({{key:P}}) móddal **pózolja**: kattintson egy csontra a kijelöléséhez, húzással forgassa a nézet tengelye körül, a {{key:Shift}}+húzással mozgassa. Vagy írja be a {{ui:Place}}, a {{ui:Turn (°)}} és a {{ui:Size}} értékét a {{ui:Pose}} alatt; a forgatások a csont saját tengelyei szerint értendők, a nyugalmi helyzetétől számítva. A rombuszok és a {{ui:Key the whole pose}} a pózt a lejátszófejnél kulcsolják; ha a csontnak már vannak kulcsai, a pózolás ott kulcsolja. A {{ui:Reset this bone}} és a {{ui:Reset the pose}} a csontokat nyugalmi helyzetbe állítja vissza.

**Súlyok festése** ({{key:W}}) a kijelölt csonthoz: a háló nyugalmi állapotban látszik, minden lap annak szerint színeződik, mennyire fogja meg a csont – piros mindent, kék semmit. Festéssel adjon fogást ({{key:Mod}} elveszi, {{key:Shift}} simít); a {{ui:Size (px)}} és a {{ui:Strength}} állítja az ecsetet. A {{ui:Keep each point's weights adding up to 1}} beállítással, ha egy csontnak többet ad, ugyanannyit vesz el a többitől. Minden vonás a modell egy visszavonási lépése.

A {{ui:Skin}} határozza meg, hogyan mozog két csont közötti pont: a {{ui:Linear (fast)}} keveri a csontok mozgását, és kissé összeszorítja a meghajlított ízületet; a {{ui:Dual quaternion (keeps volume at joints)}} ehelyett a pontot az ízület körül forgatja, így a könyök vagy a térd megtartja a vastagságát (ekkor a csont {{ui:Size}} értéke nem nyújtja a bőrt).

:::note
Előbb az alakkulcsok jönnek, utána a váz, majd a [módosítók]. A nézet, a képek és a videók mind a pózolt hálót mutatják; a háló súlyai a hálóval együtt mentődnek, a csontok és a pózuk az animációval.
:::

## IK és kényszerek

A **kényszer** a kulcsok után, szabály szerint mozgat egy csontot vagy objektumot. Válassza ki az objektumot (vagy a vázban a csontot), és adjon hozzá egyet a {{ui:Constraints of …}} alatt; több kényszer a felsorolás sorrendjében fut (a nyilak változtatják meg), és mindegyiknek van {{ui:How much}} értéke (0 és 1 között, a rombuszával kulcsolható, mint bármely tulajdonság), valamint be- és kikapcsolója.

| Kényszer | Kinek | Mit csinál |
|---|---|---|
| {{ui:Reach (IK)}} | Csontok | A csont és az, amelytől függ ({{ui:Bones in the chain}}), meghajlik, hogy a végük elérje a célt. Két csonttal és egy {{ui:Pole (the bend points to it)}} beállítással a könyök vagy a térd a pólus felé mutat; a hosszabb láncok simán hajlanak. Ha a cél túl messze van, a lánc egyenesen a cél felé mutat. |
| {{ui:Look at}} | Mindkettő | Úgy fordul, hogy a {{ui:Axis that points}} a cél felé nézzen, miközben a {{ui:Axis kept up}} a lehető legközelebb marad a felfelé irányhoz. |
| {{ui:Copy transforms}} | Mindkettő | Átveszi a cél helyzetét, forgatását vagy méretét – a bejelöltekét. |
| {{ui:Limits}} | Mindkettő | Tartja a saját helyzetét, forgatását (fokban) vagy méretét a {{ui:min}} és a {{ui:max}} között tengelyenként; ha egy párt üresen hagy, az a tengely szabad marad. |
| {{ui:Child of}} | Mindkettő | A céllal együtt mozog, mintha attól függne, abból a helyzetből, ahol mindkettő volt, amikor kiválasztotta a célt. |
| {{ui:Follow path}} | Objektumok | A [görbeobjektumon](topic:curves) ül a {{ui:Along the curve}} pozícióban (0 az eleje, 1 a vége; kulcsolja, hogy végighaladjon), és a {{ui:Turn along the curve}} beállítással a görbe irányába néz. |

A cél lehet másik objektum a megnyitott csoportban, ugyanannak a vázának egy csontja, vagy egy beírt {{ui:A point}} (egy objektum pontja a modell koordinátáiban, egy csonté a hálójának koordinátáiban értendő). IK-lábhoz helyezze a célt oda, ahol a láb lesz, és kulcsolja a célt, vagy kulcsolja a {{ui:How much}} értékét, hogy a láb a kulcsok és az IK között váltson.

:::tip
Az az objektum, amely egy útvonalat követő másikat néz, az útvonalon látja azt: a ModelCraft előbb kiszámítja a célokat, függetlenül az objektumok sorrendjétől.
:::

## Fizika: leesés, halmozás és ütközés

Engedje, hogy az objektumok leessenek és egymásnak ütközzenek, majd tartsa meg az eredményt kulcsokként.

1. Válasszon egy csoportot, komponenst vagy hálót, és állítsa be a {{ui:Rigid body}} értékét a {{ui:Physics}} alatt: {{ui:Falls and collides}} (mozog) vagy {{ui:Stays put, gets in the way}} (asztal, fal, rámpa). Egy eeső elemnek adja meg a {{ui:Shape}} értékét – {{ui:Box (its bounds)}} vagy {{ui:Ball (round its bounds)}} –, a {{ui:Mass (kg)}}, a {{ui:Friction}} és a {{ui:Bounce}} értékét (0 puffan, 1 olyan magasra pattan vissza, amilyen magasról esett).
2. A {{ui:The whole model}} alatt állítsa be a {{ui:From (s)}} és a {{ui:To (s)}} értéket, a {{ui:Gravity (m/s², down)}} értéket, és hogy van-e {{ui:A ground to land on}} (és annak magassága).
3. Kattintson a {{ui:Bake physics}} gombra (a panelen vagy a {{ui:Physics}} csoportban). Minden leeső objektum helyzet-, forgatás- és méretkulcsot kap a két idő közötti minden képkockánál; játssza le, mint bármely más animációt.

Az újbóli kisütés lecseréli ezeket a kulcsokat; a {{ui:Remove baked keys}} eltávolítja őket. Az objektumok nyugalomban indulnak, ott, ahová kulcsaik, görbéik és kényszereik teszik őket a {{ui:From (s)}} időpontban (a megelőző kulcsolt mozgás nem folytatódik az esésben). Több {{ui:Steps a frame}} stabilabbá teszi a magas halmokat; az állapotsor jelzi, ha valami a végén még mozog.

:::note
A formák az egyes objektumok határai körüli dobozok és golyók; a doboz a sarkaival, élfelezőivel és lapközepeivel ér hozzá, így a dobozok úgy halmozódnak és borulnak fel, ahogy várja. A szövet, a folyadékok, az objektumok közötti csuklók és a pontos formák nincsenek kész állapotban.
:::

## Vezérlők

A **vezérlő** egy alakkulcsot más dolgok alapján állít be, nem kézzel: nyissa meg egy kulcs vezérlőjét (a számológép gomb), írjon egy **kifejezést**, és minden benne szereplő névhez adja meg, mit olvasson ki ({{ui:Reads}}): az időt másodpercben, a képkockát, egy elhelyezés helyzetét, forgatását vagy méretét az X, Y vagy Z tengely mentén, egy lámpa fényerejét, vagy másik alakkulcsot. Például ha a `v` egy ajtó Z tengely körüli forgatását olvassa, a `clamp(v / 90, 0, 1)` alak az ajtó nyitásával együtt nyílik.

A kifejezésekben számok, a nevek, a `+ - * / % ^` jelek és zárójelek, valamint a `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` függvények szerepelnek, továbbá a `pi` és az `e`. A hibát jelzi a rendszer, és nem változtat semmit. A vezérlővel rendelkező kulcs csúszkája a vezérlő értékét mutatja; a vezérlő felülírja a kulcs sávját, amíg el nem távolítja.

## Kulcsok kijelölése és módosítása (Kulcsok nézet)

A {{ui:Keys}} soronként mutat egy sávot: a kamerát, minden mozgó csoportot és minden tulajdonságot („Lámpa 2 · Fényerő (lm)”; a tulajdonságkulcsok kerekek).

- Kattintson egy kulcsra a kijelöléséhez; a {{key:Shift}}+kattintás vagy a {{key:Mod}}+kattintás hozzáad vagy elvesz kulcsot a kijelölésből. A {{key:Shift}}+húzás a sorok fölött dobozt rajzol, amely minden benne lévő kulcsot kijelöli.
- Húzza a kijelölt kulcsot, hogy mindet egyszerre mozgassa; a {{key:Left}} / {{key:Right}} egy képkockával mozgatja (a {{key:Shift}}-tel tízzel).
- A {{key:Mod+C}} másolja a kijelölt kulcsokat, a {{key:Mod+V}} a lejátszófejtől a ugyanazokra a sávokra illeszti be őket (egy másik ModelCraft-lap is be tudja illeszteni).
- A {{ui:Stretch}} szétteríti a kijelölt kulcsokat a lejátszófejtől a mellette lévő szám arányában (2 = kétszer olyan távolra; 0,5 összehúzza őket).
- Az átmenet-lista határozza meg, hogyan mozog tovább a kijelölt kulcs.

## Görbék formálása (Görbék nézet)

A {{ui:Curves}} minden szám időbeli alakulását grafikonon mutatja: az idő vízszintesen, az érték függőlegesen. Pipálja be a bal oldali listában megjeleníteni kívánt görbéket (az X, Y és Z piros, zöld és kék).

- Kattintson egy kulcsra (egy négyzetre) a kijelöléséhez, a {{key:Shift}}+kattintás további kulcsot ad hozzá, vagy húzzon dobozt. Húzza a kijelölt kulcsot az idejének és értékének módosításához; több kijelölt kulcsnál a húzás együtt tolja őket időben.
- A kijelölt kulcs mutatja a két **karját**. Húzza az egyiket, hogy formálja a görbét az adott oldalon. A {{ui:Handles}} megmondja, hogyan viselkedjenek: {{ui:Automatic}} (sima görbe a környező kulcsokon át), {{ui:Pointing at the next key}}, {{ui:Aligned}} (a kettő egy egyenesben marad, így a görbének nincs éle), vagy {{ui:Free}}.
- A {{ui:From the chosen keys}} határozza meg, hogyan mozog tovább minden kijelölt kulcs a következőhöz: {{ui:Curve (handles)}}, {{ui:Smooth}}, {{ui:Steady}}, {{ui:Slow in and out}} vagy {{ui:Hold}}.
- A {{ui:Before}} és az {{ui:After}} határozza meg, mit tesz a görbe a kulcsain kívül: {{ui:Hold}} (az első vagy utolsó értéken marad), {{ui:Repeat}}, {{ui:Back and forth}}, vagy {{ui:Repeat and carry on}} (minden ismétlés ott kezdődik, ahol az előző véget ért: a kerék gurul tovább, a sétáló sétál tovább).
- Az egérgörgő nagyít ({{key:Mod}}: csak az értékek; {{key:Shift}}: csak az idő); a középső gombbal vagy az {{key:Alt}}-tal húzva mozgatja a nézetet; a {{ui:Show all}} vagy a {{key:Home}} minden látható görbét beilleszt a nézetbe. Üres helyre kattintva a lejátszófej oda ugrik. A {{key:Delete}} törli a kijelölt kulcsokat.

A karokat az idő mentén nem engedi egymást átlépni, így a görbe sosem fut visszafelé.

## Animációk újrahasznosítása (Klipek nézet)

A **klip** egy mentett animációt (egy **műveletet**) játszik le az idővonalon. A klipek sorrendben keverednek: az alsó sorok a felsők fölött; az idővonal saját sávjai minden klip fölött állnak.

1. Kulcsolja a csoportokat és lámpákat szokás szerint, majd kattintson a {{ui:Clips}} alatti {{ui:Make a clip}} gombra, és adjon nevet a műveletnek. A sávokból művelet lesz, és a klip oda játssza le, ahol voltak (a kamera az idővonalon marad).
2. Az újrahasználáshoz válassza ki a műveletet, és kattintson az {{ui:Add clip}} gombra: az új klip a lejátszófejnél indul.
3. Húzza a klipet a sorában, hogy mozgassa; kattintson rá a {{ui:Start (s)}}, a {{ui:Speed}} (2 = kétszer olyan gyors), a {{ui:Repeats}}, a {{ui:How much}} (0 és 1 között), a {{ui:Mix}} ({{ui:Replace}}, vagy {{ui:Add on top}} a előtte lévő klipek fölé), a {{ui:Outside the clip}} (semmi, a vége tartása vagy mindkét vég tartása) és a {{ui:Mute}} beállításához. A nyilak változtatják a sorrendet; a kuka eltávolítja (a műveletet, amelyet már egy klip sem használ, vele együtt).

A teljes {{ui:How much}} alatti klip arra keveredik rá, ami alatta van: az előtte lévő klipre, vagy a lámpára illetve elhelyezésre úgy, ahogy az animáció nélkül lenne.

## Mi hol játszódik le

| Mi | A nézetben | Renderelt videóban |
|---|---|---|
| Kamerakulcsok, lencseszög kamerakulcsokkal | Igen | Igen |
| Helyzet, forgatás és méret (kulcsok, görbék, klipek) | Igen | Igen |
| Lámpa fényereje, nyílásszöge és színe | Igen | Még nem: a videó a lámpákat úgy használja, ahogy az indításkor vannak (lásd [mi nincs még kész](topic:not-built-yet)) |
| Lencseszög kamerakulcsok nélkül | Igen | Még nem: kulcsolja a kamerát is |
| Alakkulcsok és vezérlők | Igen | Igen |
| Vázak (pózolt hálók) | Igen | Igen |
| IK és kényszerek | Igen | Igen |
| Kisütött fizika (kulcsok) | Igen | Igen |

Minden a `.modelcraft` fájlban mentődik az animáció többi részével együtt, az idővonal {{ui:Undo}} és {{ui:Redo}} gombjai pedig bármelyiket visszavonják.
