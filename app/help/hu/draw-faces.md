---
title: Lapok rajzolása vonalakkal, téglalapokkal, körökkel és ívekkel
summary: Sík lapok készítése a talajon vagy más lapokon, felosztásuk vonalakkal, valamint körök és sokszögek rajzolása a kívánt oldalszámmal.
keywords: rajzolás, vonal, téglalap, kör, sokszög, eltolás, beljebb tolás, keret, szegély, ív, görbe, spline, sima, kábel, útvonal, kidudorodás, sugár, görbe, lap, alaprajz, lábnyom, felosztás, oldalak, szakaszok, körvonal, ceruza
from: b6d7b7dd
---

A ModelCraftban minden egy sík **lapként** kezdődik: élekkel lezárt felületként. Lapot közvetlenül rajzolhat a {{ui:Téglalap}}, a {{ui:Kör}} vagy a {{ui:Sokszög}} eszközzel, vagy egyenként, élenként körvonalazhatja a {{ui:Vonal}} eszközzel. A lapokból a [Tolás/húzás](topic:push-pull) testeket hoz létre.

## Téglalap rajzolása

1. Nyomja meg az {{key:R}} billentyűt.
2. Kattintson az első sarokra: a talajon, vagy a modell bármely lapján.
3. Mozgassa az egérmutatót. A téglalap a talajon marad (vagy azon a lapon, ahol elkezdte), és az értékmező ({{ui:Méretek}}) mutatja a szélességét és mélységét. A tipp „Négyzet” feliratot mutat, ha az oldalak egyenlők.

   Más síkon történő rajzoláshoz mutasson rá: az első sarkon áthaladó lap arra a lapra helyezi a téglalapot, a síkon kívüli ponthoz (végpont, él vagy a kék tengely) illesztve pedig a téglalap mindkét sarkon át felállítva. Ha az első síkon lévő pontra illeszt vissza, a téglalap újra lefekszik. Egy sík rögzítéséhez nyomjon meg egy nyílbillentyűt: a {{key:Up}} a téglalapot vízszintesen tartja (a kék síkon), a {{key:Right}} a piros síkon, a {{key:Left}} a zöld síkon. A feloldáshoz nyomja meg újra ugyanazt a billentyűt.
4. Kattintson a szemközti sarokra, vagy írja be a két méretet vesszővel elválasztva, és nyomja meg az {{key:Enter}} billentyűt: `4m,3m`, `4000,3000` milliméteres modellben, vagy `12',10'6"` láb és hüvelyk esetén.

   Megjelenik egy lap, amelyet négy él határol.

A beírt méretek abba az irányba kerülnek, amerre mutatott: ha a beírás pillanatában az egérmutató az első sarok bal oldalán van, a téglalap balra nő.

:::warning
A vessző a két méretet választja el, ezért nem lehet tizedesjel. Így írja be: `2.5m,3m`, sosem `2,5m`.
:::

## Kör vagy sokszög rajzolása

1. Nyomja meg a {{key:C}} billentyűt kör, vagy az {{key:N}} billentyűt sokszög rajzolásához.
2. Az oldalak számának módosításához írja be kattintás előtt: `12s` (vagy csak `12`), majd nyomja meg az {{key:Enter}} billentyűt. A kör alapból 24 oldallal, a sokszög 6 oldallal indul. A tipp mutatja az aktuális számot, és a ModelCraft a következő körnél is megtartja, amíg meg nem változtatja, vagy nem vált eszközt.
3. Kattintson a középpontra, a talajon vagy egy lapon. A lapon történő középre helyezéshez mutasson a lap közepére („Lap középpontja”), vagy egyik élének közepére („Felezőpont”), miközben az egérmutató a lap belsejében van: a kör a lapon rajzolódik meg, még egy hosszú doboz keskeny végén is.
4. Kattintson a sugár megadásához, vagy írja be ({{ui:Sugár}} az értékmezőben), majd nyomja meg az {{key:Enter}} billentyűt.

A kör sok oldalú sokszög. Ha a kört a [Tolás/húzás](topic:push-pull) eszközzel felhúzza, oldalai lágyulnak, így a henger egyetlen sima felületként látszik.

## Ív rajzolása

1. Nyomja meg az {{key:A}} billentyűt ({{ui:Ív}}).
2. Kattintson arra a pontra, ahol az ív kezdődik, majd arra, ahol véget ér (vagy írja be a két pont közötti hosszt).
3. Mozgassa az egérmutatót, hogy az ívet kidomborítsa, majd kattintson. A tipp „Félkör” feliratot mutat, ha a domborulat a végpontok távolságának fele. Vagy írja be, mennyire térjen ki az ív közepe: `2`, majd nyomja meg az {{key:Enter}} billentyűt.

Ha inkább egy pont körül szeretne ívet rajzolni, használja az {{ui:Ív középponttal}} eszközt: kattintson a középpontra, majd arra, ahol az ív kezdődik (vagy írja be a sugarat), azután arra, ahol véget ér (vagy írja be a szöget fokban, például `90`). 15°-os lépésekben fogódik.

A lapon kezdett ív a lapon rajzolódik meg; egyébként a talajon fekszik, vagy függőlegesen áll, ha két végpontja különböző magasságban van. Az ív 12 szakaszból áll; rajzolás közben írjon be `24s`-t, ha többre van szüksége. Az ívek éppúgy zárnak le lapokat, mint a vonalak: a téglalap sarkán átívelő ív kettéosztja.

## Sima görbe rajzolása

A {{ui:Görbe}} eszköz sima vonalat rajzol, amely áthalad minden kattintott ponton: például kábelt, korlát útvonalát vagy kerti szegélyt. Elhagyhatja a talajt: a pontok bárhol a sarkokra, élekre és lapokra fogódnak, a nyílbillentyűk pedig a piros, zöld vagy kék irányt rögzítik, ahogy a {{ui:Vonal}} eszköznél.

1. Kattintson a {{ui:Rajzolás}} csoportban lévő {{ui:Görbe}} gombra.
2. Kattintson azokra a pontokra, amelyeken a görbe áthalad. Írja be a `<0,0,1>` értéket, majd nyomja meg az {{key:Enter}} billentyűt az utolsó ponttól 1 egységgel feljebb lévő ponthoz; a `[x,y,z]` formát a pontos helyhez; vagy adjon meg egy hosszt az egérmutató irányában lévő ponthoz.
3. Az befejezéshez nyomja meg az {{key:Enter}} billentyűt vagy kattintson duplán. Az első pontra újra kattintva zárja le a görbét. A {{key:Backspace}} eltávolítja az utolsó pontot.

A görbe egy darabként jelölhető ki. Módosításához jelölje ki, majd az {{ui:Entitásinfó}} panelen kattintson a {{ui:Pontok szerkesztése}} gombra: a pontjai négyzetként jelennek meg. Kattintson egyre, majd arra a helyre, ahová kerülnie kell (vagy írja be a `<dx,dy,dz>` értéket). Az {{key:Esc}} visszahelyezi a pontot, és befejezi a szerkesztést. Egy zárt, lapos görbéből lap lesz; a lapot körvonalazó görbe már nem szerkeszthető.

## Eltolás: keret a lap belsejében vagy kívül

Az {{ui:Párhuzamos}} eszköz egy lap körvonalát adott távolságra lemásolja a belsejébe (vagy kívülre), kerethez, szegélyhez, ablakpárkányhoz vagy egy képernyő üvegéhez.

1. Nyomja meg az {{key:F}} billentyűt, és kattintson a lapra, vagy előbb jelölje ki a lapot, majd nyomja meg az {{key:F}} billentyűt.
2. Belső körvonalhoz mozgassa az egérmutatót a lapba, külsőhöz kifelé. Az új körvonal követi, a tipp pedig megmutatja a távolságot.
3. Kattintson, vagy írja be a távolságot, és nyomja meg az {{key:Enter}} billentyűt.

A lap kettéoszlik: a belső lap és az azt körülvevő keret (vagy egy új gyűrű kívül). Mindkettőt azonnal tolhatja vagy húzhatja: képernyő esetén rajzolja meg a dobozt, húzza a vastagságára, tolja befelé a homlokfelületet 30 mm-rel, az üveghez pedig a belső lapot kissé húzza be. A lapon lévő lyukakat szintén eltolja, az ív vagy kör pedig egy (kisebb vagy nagyobb) görbe marad.

- **Kattintson duplán** egy lapra a {{ui:Párhuzamos}} eszközzel, hogy az utolsó távolsággal újra eltolja.
- **Élek:** jelöljön ki egy síkban összekapcsolt élláncot (például egy L alakú két vonalát), nyomja meg az {{key:F}} billentyűt, mozduljon a kívánt oldalra, és írja be a távolságot: párhuzamos másolat rajzolódik, ferdén vágott (gérelt) sarkokkal.
- Ha a távolság több, mint amennyit a lap enged, a ModelCraft ezt jelzi, és nem rajzol semmit.

## Az ívek, körök és sokszögek görbék

Kattintson egy ív, kör vagy sokszög bármely szakaszára, és az egész görbe kijelölődik. Az {{ui:Entitásinfó}} ezután megmutatja a sugarát, a szakaszait, a szögét (ívek esetén) és a hosszát. Ide új sugarat írva a középpontja körül átméretezhető; a síkjában rajzolt lapok követik. Miután egy görbe lapját tolták vagy húzták, a sugara ezután már nem változik.

## Rajzolás vonalakkal

1. Nyomja meg az {{key:L}} billentyűt.
2. Kattintson arra a pontra, ahol a vonal kezdődik.
3. Kattintson arra a pontra, ahol végződik, vagy írjon be egy hosszt, és nyomja meg az {{key:Enter}} billentyűt. A beírt hossz az egérmutató által jelzett irányba kerül.
4. Folytassa a kattintást. Minden kattintás az előző vonal végéről indítja a következőt.
5. Az körvonal lezárásához kattintson újra az első pontra. Ha a vonalak egy síkbeli zárt hurkot alkotnak, az egy lappal kitöltődik, és az eszköz nem láncolja tovább. Bármikor megállíthatja az {{key:Esc}} billentyűvel.

A vonalak közelítéskor a piros, zöld és kék irányokat követik; a vonal felveszi az adott színt, a tipp pedig ezt írja: „Piros tengelyen”. Az irány rögzítéséhez és pontokra fogáshoz lásd: [Következtetés és fogás](topic:inference).

### Hová kerül a vonal, ha nem ér semmihez

- A lapon kezdődő vonal a lap síkjában marad.
- A talajon vagy üres térben kezdődő vonal a kezdőpontjával azonos szinten marad. Ha a modellt élről nézi, a vonal a nézet felé néző függőleges síkba kerül.
- Vonal pontos helyre húzásához írjon be egy pontot: `[x,y,z]` a modell egy pontjához, vagy `<dx,dy,dz>` a kezdőponttól mért eltoláshoz. Lásd: [Pontos méretek beírása](topic:value-box).

## Lap felosztása

Rajzoljon vonalat egy lapon át, az egyik éltől a másikig (vagy élről élre más vonalakon keresztül). A lap két lapra oszlik. Mindkettő megtartja a saját oldalát és színét. Ugyanez működik a lapon rajzolt téglalappal vagy körrel is: az alakzat a nagyobb lapon belül saját lapként jelenik meg, a nagyobb lap pedig most lyukas lesz.

Így lehet helyiségeket kialakítani egy födémen, ablakot egy falon vagy lépcsőfokot egy lépcsőn: rajzolja meg a körvonalat a lapon, majd tolja vagy húzza az új lapot.

## Rossz irányba néző lapok

Minden lapnak van eleje és hátulja. A hátulja kékesszürkén látszik. A talajon rajzolt lapok felfelé néznek; egy másik lapon rajzolt lapok ugyanabba az irányba néznek, mint az a lap.

Ha a lap hátulját látja ott, ahol az elejét várja, jelölje ki, és az {{ui:Entitásinfó}} panelen kattintson a {{ui:Lap megfordítása}} gombra.

## Mit lát rajzolás közben

- Színes jelölő ott, ahol az egérmutató fogódik, és ennek neve a tippben, bal alul.
- A vonal vagy alakzat előnézete.
- Az élő méret az értékmezőben. Bármikor felülírhatja beírással.

## Ha az alakzat nincs ott, ahol várta

- Érintőképernyőn lásd: [Hibaelhárítás](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Ha a vonal egy távoli, mögötte lévő valamihez fogódott, forgasson egy kicsit a nézeten: a lap mögött rejtett pontok sosem fogódnak, de a lap szélén lévők igen.
- Az utolsó alakzat visszavonásához nyomja meg a {{key:Mod+Z}} billentyűt; egy visszavonás egy vonalat vagy egy alakzatot távolít el.
