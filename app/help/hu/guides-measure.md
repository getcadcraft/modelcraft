---
title: Mérés és segédvonalak elhelyezése
summary: Olvasson le hosszakat és területeket, mérjen két pont között mérőszalaggal, és helyezzen el segédvonalakat és segédpontokat, amelyekhez rajzolhat.
keywords: mérés, mérőszalag, szögmérő, szög, döntött segédvonal, segédvonal, vezetővonal, építési vonal, távolság, méretezés, hossz, terület, eltolás, elrendezés, segédpont
from: de6d04d9
---

## Méretek leolvasása mérés nélkül

Jelöljön ki valamit, és nézze meg az {{ui:Entitásinfó}} panelt:

- Egy él **hosszát** mutatja.
- Egy lap **területét** és a lyukai számát mutatja.
- Több lap esetén az **összes területüket** mutatja.
- Egy csoport vagy komponens **méretét** mutatja (a körülötte lévő doboz szélessége × mélysége × magassága), és ha zárt test, a **térfogatát** is.
- Ha semmi sincs kijelölve, az {{ui:Entitásinfó}} panel az egész modell méretét mutatja.

A hosszak és területek a jobb alsó sarokban lévő mértékegység-választóban beállított egységet használják. Milliméteres modellnél a 0,01 m²-nél nagyobb területek négyzetméterben jelennek meg (egy 4 × 3 m-es szoba területe így látszik: „12 m²”).

Rajzolás közben az értékdoboz mutatja az aktuális hosszt, méretet, sugarat vagy távolságot, így ritkán kell utólag mérnie.

Ha rajzolás után szeretne módosítani egy méretet, jelöljön ki egy élt vagy csoportot, és írja be újra a hosszát vagy a méretét az {{ui:Entitásinfó}} panelen. Vagy helyezzen el egy [méretezést](topic:dimensions), és írjon bele új hosszt.

## Mérés két pont között

1. Nyomja meg a {{key:T}} billentyűt a {{ui:Mérőszalag}} eszközhöz.
2. Kattintson egy pontra: sarokra, felezőpontra, lapon lévő pontra vagy a talajra. (Él kattintása másra szolgál; lásd lent.)
3. Mozgassa a kurzort a második pontra. A jelölő és az értékdoboz ({{ui:Hossz}}) mutatja a távolságot. Illeszkedik a pontokhoz, valamint a piros, zöld és kék irányokhoz.
4. Kattintson. Az állapotsor ezt írja: „Mért érték: 4' 6".”, a második pontnál pedig egy **segédpont** marad.

Ha inkább pontos távolságra szeretné elhelyezni a segédpontot, az első kattintás után írja be a távolságot, és nyomja meg az {{key:Enter}} billentyűt: a pont abba az irányba kerül, amerre mutat.

## Segédvonal elhelyezése

A segédvonal egy végtelen szaggatott vonal, egy élre párhuzamosan, az Ön által választott távolságban. Segédvonallal kijelölhet egy hátraugrást, egy szintmagasságot vagy azt, hol kezdődik egy ablak.

1. Nyomja meg a {{key:T}} billentyűt.
2. Kattintson egy **élre** (nem a végére). A jelölő ezt mutatja: „Élen”.
3. Lépjen le az élről arra az oldalra, ahová a segédvonalnak kerülnie kell. Szaggatott vonal követi az élt párhuzamosan, az értékdoboz ({{ui:Eltolás}}) pedig a távolságot mutatja.
4. Kattintson, vagy írja be az eltolást, és nyomja meg az {{key:Enter}} billentyűt: `1.5m`, `5'`.

   Az állapotsor ezt írja: „Segédvonal az éltől 1,5 m-re.”

Ha egy meglévő segédvonalon kezd, a rendszer ahhoz párhuzamos újabb segédvonalat hoz létre, így egy segédvonalból kiindulva rácsot építhet.

Ha az eltolást úgy írja be, hogy előbb nem lépett le az élről, a ModelCraft nem tudja eldönteni, melyik oldalt jelöli: „Először lépjen le az élről, hogy megmutassa, melyik oldalra gondol.”

## Szögben elhelyezett segédvonal: szögmérő

1. Kattintson a {{ui:Szögmérő}} gombra a {{ui:Módosítás}} csoportban.
2. Kattintson a középpontra: arra a pontra, amelyen a segédvonal átmegy. Lapon a szögmérő arra a lapra fekszik, máshol vízszintesen fekszik. Ezután a {{key:Right}}, {{key:Left}} vagy {{key:Up}} billentyű a piros, zöld vagy kék irányhoz állítja merőlegesen (újra megnyomva visszavonja).
3. Kattintson egy pontra, amely a 0°-ot jelöli ki, például egy él mentén.
4. Mozgassa a kurzort a kívánt szögig, és kattintson: 15°-os lépésekben illeszkedik. Vagy írja be a szöget fokban, például `22.5`, és nyomja meg az {{key:Enter}} billentyűt; a segédvonal arra az oldalra kerül, amerre a kurzor van.

A segédvonal a középponton át, az adott szögben halad. Mentén húzzon a {{ui:Vonal}} eszközzel, például tetőhajlásnál, letörésnél vagy ferde falnál.

## Rajzolás segédvonalakhoz igazodva

A rajzoló eszközök a segédvonalakhoz illeszkednek („Segédvonalon”) és a segédpontokhoz („Segédpont”), valamint ahol egy segédvonal egy tengelyirányt metsz. Téglalapot úgy kezdjen, ahol két segédvonal metszi egymást, így pontosan oda kerül.

## Segédvonalak eltávolítása

- Egy segédvonal: kattintson rá a {{ui:Kijelölés}} eszközzel, és nyomja meg a {{key:Delete}} billentyűt, vagy kattintson rá a {{ui:Radír}} eszközzel.
- Minden segédvonal: ne legyen semmi kijelölve, és kattintson az {{ui:Entitásinfó}} panel {{ui:Minden segédvonal törlése}} gombjára.

A segédvonalak a `.modelcraft` fájlba mentődnek. Más formátumokba nem exportálódnak.
