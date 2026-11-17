---
title: Módosítók egy hálón, csoporton vagy komponensen
summary: Háló méretezése, tükrözése, sokszorozása, simítása, letörése, vágása és hajlítása úgy, hogy maga a háló nem változik; csoport vagy komponens ismétlése és méretezése ugyanazzal a veremmel; végleges tétele, amikor készen áll.
keywords: módosító, módosítók, verem, csoport, komponens, méretezés, kisütés, forrás szerkesztése, nem romboló, tükrözés, sokszorozás, radiális sokszorozás, felosztott felület, simítás, letörés, vastagítás, logikai művelet, vágás, elmozdítás, zaj, összehegesztés, ritkítás, egyszerűsítés, rács, rácsketrec, görbe szerinti deformálás, hajlítás, zsugorburkolás, alkalmazás
from: dd5ec1cb
---

A **módosító** úgy változtatja meg, mit mutat egy háló, hogy maga a háló nem változik. Tükrözzön egy alkatrészfelet, és csak a felét modellezze; kerekítsen le egy dobozt felosztott felülettel, és továbbra is a dobozt szerkessze. A módosítók egy **veremben** állnak, és felülről lefelé, sorrendben dolgoznak. Amit lát, exportál, nyomtat és renderel, az a háló az összes bekapcsolt módosítóval.

## Módosító hozzáadása

1. Jelöljön ki egy hálót. A Modell munkaterületen a **Módosítók** szakasz az {{ui:Entitásinfó}} panelen van; a Háló munkaterületen a jobb oldali panelben.
2. Válasszon egyet a {{ui:Módosító hozzáadása…}} menüből. A verem aljára kerül.
3. Módosítsa a beállításokat a neve alatt. A hosszúságok ugyanazokat az értékeket fogadják el, mint az Értékmező, így a `600mm`, a `2'6"` és a `(6m)/4` is működik.

Minden módosítás egy visszavonási lépés: a {{key:Mod+Z}} visszavonja.

## A módosítók gombjai

- A jelölőnégyzet be- vagy kikapcsolja.
- A képernyőgomb megjeleníti vagy elrejti a nézetben (a veremben marad).
- A kamera-gomb megjeleníti vagy elrejti a renderelt képekben és videókban, így egy módosító csak renderekhez (vagy csak a nézethez) lehet.
- A nyilak fel- vagy lefelé mozgatják a veremben. A sorrend számít: a tükrözés, majd a felosztás sima varratot ad; a felosztás, majd a tükrözés nem.
- Az {{ui:Alkalmaz}} a formát a háló részévé teszi: ez a módosító és a fölötte lévők a magán a hálón végződnek, és kikerülnek a veremből. Ez egy visszavonási lépés.
- A kereszt eltávolítja.

## A módosítók

| Módosító | Mit csinál |
|---|---|
| Léptékezés | Az objektum origója körül léptékez: külön szorzó a pirosra, zöldre és kékre. Csoporton vagy komponensen is. |
| Tükrözés | Tükrözött másolatot ad a piros, zöld vagy kék tengelyen át a háló origóján, és összeilleszti a feleket ott, ahol találkoznak. |
| Sokszorozás | Másol egy vonalban (a saját méretének és a megadott számoknak megfelelő lépéssel, plusz egy rögzített lépéssel), egy tengely körül, vagy a modell egy görbéje mentén. Csoport vagy komponens a vonalat veszi át. |
| Felosztott felület | Simítja a hálót Catmull–Clark felosztással. Az éles élek redősek maradnak. A renderek több szintet használhatnak, mint a nézet. |
| Letörés | Lekerekít minden élt, amely élesebb a megadott szögnél. |
| Vastagítás | Vastagságot ad egy felületnek, és lezárja a peremet. |
| Logikai művelet | Kivág, egyesít vagy megtartja az átfedést egy másik objektummal a modellben. Mindkettőnek zárt testnek kell lennie. |
| Elmozdítás | A felületet befelé vagy kifelé mozgatja sima zajjal. Ugyanaz a mag mindig ugyanazokat a bucikat adja. |
| Összehegesztés | Egyesíti az adott távolságnál közelebbi csúcsokat. |
| Ritkítás | Megtartja a háromszögek egy részét, eltávolítva azokat, amelyek a legkevésbé változtatják az alakot. |
| Simítás | A csúcsokat a szomszédaik felé lazítja. |
| Rácsketrec | Ketrecbe zárva hajlítja a hálót: mozgassa a ketrec pontjait, és a háló követi. |
| Görbe szerinti deformálás | A hálót a modell egy görbéje mentén hajlítja, a piros, zöld vagy kék tengely mentén. |
| Zsugorburkolás | Minden csúcsot egy másik objektum legközelebbi pontjára mozgat. |

## Csoporton vagy komponensen

Egy csoport vagy komponens is megőrizhet receptet, így egy lámpaernyő lehet egy **Léptékezés** és egy **Sokszorozás** egyetlen ernyőből, és a szám megváltoztatása megváltoztatja a lámpát.

1. Jelöljön ki egy csoportot vagy komponenst. Az {{ui:Entitásinfó}} panelen a **Módosítók** szakasz listázza a veremet (kezdetben üres).
2. Válassza a {{ui:Léptékezés}} vagy a {{ui:Sokszorozás}} lehetőséget a {{ui:Módosító hozzáadása…}} menüből. A csoport **az eredeti, amelyet a verem helyez el** komponenssé válik. Az eredeti megmarad: szerkessze, és minden másolat azonnal követi.
3. A léptékezés piros, zöld és kék szorzót kér (`1, 1, 2` megduplázza a magasságot). A sokszorozás a másolatok számát, a lépést az eredmény eddigi méretének arányában, és egy további lépést hosszúságban kér.

A verem az eredeti saját tengelyein fut, az origója körül felülről lefelé, ezért a sorrend számít: három másolat 3 m-enként sokszorozva, majd 2-es léptékezés a piros tengelyen 6 m-enként helyezi el a másolatokat; ha előbb léptékez, majd sokszoroz, 3 m-enként maradnak. A jelölőnégyzet, a nyilak és a kereszt úgy működnek, mint a hálón; a nézet- és kamera-gombok, valamint az egy módosítóra vonatkozó Alkalmaz nem, mert a csoportnál a verem egy egységet alkot.

- A {{ui:Forrás szerkesztése}} helyben megnyitja az eredetit. A változások minden másolatban megjelennek; a bezárás visszaviszi oda, ahol volt.
- A {{ui:Módosítók kisütése}} egyszerű élekké és lapokká alakítja az eredményt, és elviszi a vermet, egy visszavonási lépésben. Az átfedő másolatok külön geometriaként maradnak: a kisütés nem egyesítés.
- A komponens másolatai megosztják a receptet; a {{ui:Egyedivé tétel}} szétválasztja (az eredeti megosztott marad).
- A verem a fájlban mentődik, a másolással, beillesztéssel és visszavonással együtt jár, és a használaton kívüli elemek törlése megtartja az eredetit. Egy olyan program, amely nem ismeri a módosítókat, is megjeleníti a másolatokat.
- A kisütésig az eredmény nem léphető be, nem bontható fel, nem méretezhető és nem nyújtható: a következő változásnál újraépülne. Mindegyik ezt jelzi.
- A határ 32 módosító és 1 000 másolat. A Húzás (Stretch) céllal készült komponens és egy verem még nem oszthat meg egy definíciót.

## Felosztott felület

A felosztás Catmull–Clark módszerrel simítja a hálót: minden lap négyoldalú lapokra bomlik, és minden szint négyszer annyi lapot ad. Egy két-három szintű doboz már lekerekített alaknak látszik, és továbbra is a dobozt szerkeszti.

- **A szintek a nézetben** határozzák meg, mennyire sima.
- **A szintek a renderekben** határozzák meg, mennyire simák a renderelt képek és videók; a renderek több szintet használhatnak, mint a nézet.
- **Renderek a valódi sima felületen:** a renderelt háló pontjait arra a határfelületre helyezi, amelyhez a szintek tartanak, így akár két szint is olyan simán renderel, mint sok.
- **A redők** élesen tartják az éleket: a Háló munkaterületen jelöljön ki éleket, és használja a {{ui:Redő}} lehetőséget (1 éles marad, 0,5 kissé lekerekít, 0 sima). Lásd: [Háló szerkesztése](topic:mesh-edit).
- **Alacsonyabb nézetszint nagy hálón:** ha a kért szintek több lapot adnának, mint amennyit ez a számítógép nézete jól kezel, a nézet alacsonyabb szintet mutat, és megmondja, melyiket. Az {{ui:Alkalmaz}} mindig az összes szintet használja. A lapok száma a gép osztályától függ, amelyet a {{ui:Beállítások}} › Renderelés › Az Ön gépe menüpontban lát.
- A nyílt szegélyek megtartják sarkaikat, és élük vonalán maradnak.

## Hajlítás rácsketrecel

1. Adjon hozzá egy {{ui:Rács}} módosítót, és nyomja meg az {{ui:Rácsketrec hozzáadása a háló köré}} gombot. Egy 3 × 3 × 3 pontból álló ketrec jelenik meg a háló körül, drótként rajzolva.
2. Nyissa meg a ketrecet a Háló munkaterületen (kattintson rá duplán), és mozgassa a pontjait. A háló simán követi.

:::tip
A ketrec is háló, mint bármely más: ha végzett, rejtse el a címkéjével.
:::

## Nagy hálók

A kis verem azonnal kiszámítódik. A nagy verem a számítógép minden magján, a háttérben számolódik: a nézet mindaddig az utolsó eredményt mutatja, amíg az új el nem készül. A logikai műveletek először betöltik a testmodellezőt; a nézet erről egy pillanatra jelez.

## Amit a módosítók még nem tudnak

- Csúcsonkénti súlyok (a hálóra festett csökkenés) az Elmozdítás, a Simítás és a Zsugorburkolás módosítónál.
- A Léptékezésen és a lineáris Sokszorozáson kívüli módosítók nyomás/húzásos geometrián (csoportok és komponensek): alakítsa előbb hálóvá ({{ui:Átalakítás hálóvá}}). A tükrözés, a kör- vagy görbe-sokszorozás, a Hajlítás és a Kúposítás csoportokon később készül.
