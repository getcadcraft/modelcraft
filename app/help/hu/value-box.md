---
title: Pontos méretek megadása az értékmezőben
summary: Minden mód a hosszúságok, méretek, pontok, eltolások, szögek, oldalak és példányok megadására, valamint az, hogyan értelmeződnek a mértékegységek és a puszta számok.
keywords: értékmező, vcb, beírás, pontos, méret, hosszúság, mértékegységek, láb, hüvelyk, metrikus, milliméter, koordináták, eltolás, tömb, oldalak, szög, tizedesvessző
from: 0148dc3d
---

Az értékmező az alsó állapotsoron található, a címkéje az eszköz szerint változik. Munka közben az élő méretet mutatja; bármikor beírhat pontos értéket.

## Beírás

1. Kezdje a műveletet egy kattintással (az első sarok, a lap, a mozgatás kiinduló pontja).
2. Írjon be. Nem kell az értékmezőre kattintani: egy számjegy vagy a `. , - ' " [ < * /` karakterek egyike oda küldi a beírást.
3. Nyomja meg az {{key:Enter}} billentyűt.

Az értékmezőben nyomja meg az {{key:Esc}} billentyűt a törléshez és a nézetbe való visszatéréshez. Érintőképernyőn koppintson az értékmezőre a billentyűzet megjelenítéséhez.

Ha a ModelCraft nem olvassa be, amit beírt, az állapotsor ezt írja: „Írjon be egy hosszúságot, például 3m, 10'6" vagy 4m,3m.” Ha az eszköz nem tudja felhasználni, a „Ez nem működött: …” üzenet jelenik meg az okkal.

## Hosszúságok

| Beírás | Jelentése |
|---|---|
| `3m` `320cm` `3200mm` | Méter, centiméter, milliméter |
| `10'` `10ft` `10 feet` | Láb |
| `6"` `6in` `6 inches` | Hüvelyk |
| `10'6"` `10' 6"` `10'-6 1/2"` | Láb és hüvelyk, törttel |
| `6 1/2"` `6-1/2"` `3/4"` | Hüvelyk törttel |
| `1.5ft` `.5m` | Tizedes számok mértékegységgel |
| `120` | Puszta szám, a modell mértékegységében |

**A puszta szám a modell mértékegységét használja**, ahogy a jobb alsó mértékegység-választón látszik: láb és hüvelyk modellben hüvelyk (így a `120` 10 láb), milliméteres modellben milliméter, és így tovább. Mértékegység beírása mindig elsőbbséget élvez, bármilyen a modell mértékegysége. A görbe idézőjelek és a prímjelek (’ ” ′ ″) is láb és hüvelyk jelölésként értelmeződnek.

:::warning
Tizedes törtekhez mindig **pontot** használjon: `2.5m`. A vessző két értéket választ el, így a `2,5` 2-t és 5-öt jelent (két érték), bármilyen a nyelvi beállítás.
:::

## Számítások

Bármely hosszúság lehet számítás: `+` összeadás, `-` kivonás, `*` szorzás, `/` osztás, zárójelek használhatók. Számológépre nincs szükség.

| Beírás | Jelentése |
|---|---|
| `2.5/3` | A 2.5 harmada (a modell mértékegységében) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" láb és hüvelyk modellben |
| `3m-25cm` | 2.75 m |

A puszta szám a modell mértékegységét kapja, ha hosszúság (a `2.5/3` méteres modellben 0,833 m), és egyszerű szorzótényező, ha hosszúságot szoroz vagy oszt (`2*450mm`). A szögek és szorzótényezők is kaphatnak számítást: a `90/2` 45°. Két hosszúság szorzata területet ad, nem hosszúságot, ezért a `2m*3m` elutasításra kerül.

Ha a ModelCraft nem tudja kiszámolni, az állapotsor megmondja, mi a hiba és hol, például „Nullával való osztás (4. karakter).” Zárójel is megnyitja az értékmezőt, így `(`-val is kezdhet.

Ezek megtartják a saját jelentésüket: a `/3`, `3x` és `*3` másolás után, a `24s` oldalakhoz, és a `/3` egy kijelölt éllel (ekkor [felosztja az élt](topic:divide)).

## Eszközönként

| Eszköz | Címke | Beírás |
|---|---|---|
| {{ui:Vonal}} | {{ui:Hossz}} | Hosszúság (a mutató felé), vagy pont vagy eltolás (lent) |
| {{ui:Téglalap}} | {{ui:Méretek}} | Két hosszúság: `4m,3m`, `12',10'`. A pontosvessző is működik: `4m;3m` |
| {{ui:Kör}}, {{ui:Sokszög}} | {{ui:Oldalak}}, majd {{ui:Sugár}} | Az első kattintás előtt az oldalak száma: `12s` vagy `12` (3 és 999 között). Utána a sugár |
| {{ui:Nyomás/húzás}} | {{ui:Távolság}} | Hosszúság. A negatív érték az ellenkező irányba megy |
| {{ui:Mozgatás}} | {{ui:Távolság}} | Hosszúság (a mutató felé), vagy pont vagy eltolás. Másolás után: `3x`, `*3`, `/3` |
| {{ui:Forgatás}} | {{ui:Szög}} | Fok: `90`, `-45`, `22.5` |
| {{ui:Léptékezés}} | {{ui:Léptékezés}} | 0-nál nagyobb szorzótényező: `2`, `0.5`, `1.25` |
| {{ui:Mérőszalag}} | {{ui:Párhuzamos}} vagy {{ui:Hossz}} | Hosszúság |
| {{ui:Osztás}} | {{ui:Részek}} | Hány egyenlő rész: `5`, `5s` vagy `/5` (2 és 1000 között). Lásd: [Él vagy görbe felosztása egyenlő részekre](topic:divide) |
| {{ui:Méretezés}} | {{ui:Párhuzamos}}, majd {{ui:Hossz}} | Hol legyen a méretvonal; közvetlenül elhelyezés után az új hosszúság átméretezi a modellt |
| {{ui:Kijelölés}} | {{ui:Érték}} | Egy méret vagy él kijelölése mellett az új hosszúság átméretezi a modellt. Lásd: [Méretezés és átméretezés](topic:dimensions) |

## Pontok és eltolások

A {{ui:Vonal}} és a {{ui:Mozgatás}} esetén, az első kattintás után:

- A `[x,y,z]` a modell adott pontjára ugrik (a csoport saját tengelyeiben, ha csoporton belül szerkeszt). Példa: a `[0,0,3m]` egyenesen 3 m-rel az origó felett van.
- A `<dx,dy,dz>` ennyire megy az első ponttól a piros, zöld és kék tengely mentén. Példa: a `<0,0,10'>` 10 láb egyenesen felfelé.

A három érték mindegyikének lehet saját mértékegysége: `<12',0,6">`.

## Másolatok mozgatás után

Közvetlenül a {{ui:Mozgatás}} másolás után:

| Beírás | Létrehoz |
|---|---|
| `3x` vagy `*3` | 3 másolat egymás után, azonos távolsággal |
| `/3` | 3 másolat egyenletesen elosztva az eredetitől az első másolatig |

Legfeljebb 500 másolat. Lásd: [Mozgatás, másolás és tömbök készítése](topic:move-copy#a-row-of-copies).

## A beírt hosszúságokhoz irány kell

Egyetlen beírt hosszúság arra megy, amerre a mutató az első kattintástól mutat. Ha kattintás után azonnal, még mozgatás nélkül ír be valamit, még nincs irány, és nem történik semmi. Mozgassa a mutatót egy kicsit arra, amerre menni szeretne, majd írjon be értéket.

## A modell mértékegysége

Változtassa a mértékegységet a jobb alsó választóban: {{ui:láb és hüvelyk}}, in, ft, yd, mi, mil, µm, mm, cm, m vagy km, amennyiben be vannak kapcsolva a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} részben (a modell saját mértékegysége mindig ott van). Bármely mértékegység jelével beírt hosszúság abban a mértékegységben értelmeződik. Lásd: [Mértékegységek, beírt értékek és mértékegység-listák](common:unit-lists). Ez a hosszúságok megjelenítését és a puszta számok értelmezését változtatja; a modell mérete ugyanaz marad. A mértékegység mentésre kerül a fájlban.

A méretek megjelenítése:

| Mértékegység | Hosszúságok | Területek | Térfogatok |
|---|---|---|---|
| láb és hüvelyk | `10' 6 1/2"` (1/16"-ig) | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² 0,01 m²-től, különben mm² | m³ 0,01 m³-től, különben mm³ |

Új modell láb és hüvelyk mértékegységgel indul, ha a böngésző nyelve amerikai régióra van állítva (és Libéria és Mianmar), egyébként mindenhol milliméterben. A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} részben csillaggal jelölt mértékegységet használja a rendszer helyette, ha a ModelCraft támogatja. Vagy az {{ui:Új}} után módosítsa a választót.
