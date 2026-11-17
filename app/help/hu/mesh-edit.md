---
title: Háló szerkesztése a Háló munkaterületen
summary: Háló csúcsainak, éleinek és lapjainak kijelölése, mozgatása, valamint kihúzása, betörése, letörése, vágása, egyesítése, kitöltése és áthidalása bármelyik billentyűstílussal.
keywords: háló, szerkesztési mód, háló munkaterület, csúcs, csúcsok, él, élek, lap, lapok, kihúzás, betörés, letörés, hurokvágás, kés, kettévágás, pörgetés, egyesítés, feloldás, kitöltés, rácsos kitöltés, híd, felosztás, csúsztatás, arányos szerkesztés, csillapítás, munkaterület
from: 92a372dd
---

A **Háló** munkaterület a [hálót](topic:meshes) pontról pontra szerkeszti: csúcsait, éleit és lapjait. A nyomás/húzással készült geometria a **Modell** munkaterületen marad.

## Megnyitás

- Válassza a {{ui:Háló}} lehetőséget az eszköztár bal oldalán lévő {{ui:Munkaterület}} listából. A kijelölt háló szerkesztésre nyílik; a kijelölt csoport vagy komponens előbb hálóvá alakul (egy visszavonási lépés).
- Vagy kattintson duplán a hálóra, vagy a modellező billentyűkkel jelölje ki, és nyomja meg a {{key:Tab}} billentyűt.
- Kijelölés nélkül a panel hozzáadható hálókat kínál: sík, rács, kocka, kör, henger, kúp, gömb, ikozagömb és tórusz. Az új háló oda kerül, ahová a nézet néz, és szerkesztésre nyílik.

A {{ui:Vissza a Modellhez}} (vagy a listából; a modellező billentyűkkel a {{key:Tab}}, a nyomás/húzás billentyűkkel, ha nincs kijelölés, az {{key:Esc}}) visszaviszi a Modellhez, a hálót kijelölve. Amíg a Háló munkaterület nyitva van, a modell többi része elhalványul, és a Modell rajzoló eszközei félreállnak.

## Kijelölés

| Művelet | Eredmény |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Csúcsok, élek vagy lapok kijelölése |
| Kattintás | Egy kijelölése; a {{key:Shift}}+kattintás hozzáad vagy eltávolít |
| Doboz húzása | A dobozba eső és látható elemek kijelölése; a {{key:Shift}} hozzáad, a {{key:Ctrl}} eltávolít |
| {{key:Alt}}+kattintás egy élen, vagy kettős kattintás rajta | Az élhurok (lapi hurok lapmódban; nyílt élnél a teljes szegély) |
| {{key:Ctrl}}+{{key:Alt}}+kattintás egy élen | Az élgyűrű |
| Hármas kattintás | Mindaz, ami hozzá kapcsolódik |

A {{ui:Kijelölés}} csoportban megtalálható még a {{ui:Mind}}, az {{ui:Összekötött}}, a {{ui:Hurok}}, a {{ui:Gyűrű}}, a {{ui:Továbbiak}} és a {{ui:Kevesebb}}.

## Mozgatás, forgatás, léptékezés

A {{ui:Mozgatás}}, a {{ui:Forgatás}} és a {{ui:Léptékezés}} a mutatótól indul: mozgassa, majd kattintson vagy nyomja meg az {{key:Enter}} billentyűt a kijelölés letételéhez, vagy az {{key:Esc}} billentyűt a megszakításhoz. Az {{key:X}}, {{key:Y}} vagy {{key:Z}} (vagy a nyilak) egy tengelyt rögzít. Pontos értékhez írjon be távolságot, szöget vagy szorzót — a [számítások](topic:value-box#calculations) is működnek.

**Arányos szerkesztés** ({{ui:Arányos}}, vagy a panelen): a kijelölés közelében lévő csúcsok követik a mozgatást, annál kevésbé, minél távolabb vannak, a beállított hatótávolságig, a választott csökkenéssel. Kapcsolja be a {{ui:Csak a háló mentén}} opciót, hogy az élek mentén mérjen, ne egyenesen.

A {{ui:Csúsztatás}} a kijelölt élhurkot a mellette lévő élek mentén mozgatja.

## Alak módosítása

| Eszköz | Mit csinál |
|---|---|
| {{ui:Kihúzás}} | A kijelölt lapokat a normálisuk mentén húzza ki, új oldallapokkal (vagy lapokat készít a nyílt szegély éleiből). Írja be a távolságot |
| {{ui:Beljebb}} | Sáv a kijelölt lapok körvonalán belül; minden lapnál külön nyomja meg az {{key:I}} billentyűt |
| {{ui:Letörés}} | A kijelölt éleket (vagy {{key:Ctrl}}+{{key:Shift}}+{{key:B}} esetén csúcsokat) adott szélességgel vágja le; a görgő vagy a plusz és mínusz billentyű szakaszokat ad a lekerekített éléhez |
| {{ui:Hurokvágás}} | Mutasson egy élre: új hurkok négyoldalú lapok gyűrűjén át; a görgő adja meg, hányat; kattintásra vág |
| {{ui:Kés}} | Kattintson pontokra élen vagy sarkon; az {{key:Enter}} egyenesen átvágja a közöttük lévő lapokat, ahogy látja őket |
| {{ui:Kettévágás}} | Rajzoljon egy vonalat a képernyőn: a kijelölt lapok (vagy mind) mentén elvágódnak |
| {{ui:Pörgetés}} | A kijelölt lapokat vagy nyílt éleket forgatja a kék tengely körül lépésenként (a görgő állítja); egy teljes fordulat lezárja |
| {{ui:Felosztás}} | A kijelölt éleket kettévágja; a teljes lapokból rács lesz |
| {{ui:Egyesítés}} | A kijelölt csúcsok egyetlenné válnak, a középpontjukban |
| {{ui:Feloldás}} | Kiveszi a kijelölést, de megtartja a felületet: a lapok összeolvadnak |
| {{ui:Kitöltés}} | Egy lap a kijelölt nyílt szegélyen át (vagy két nyílt él között) |
| {{ui:Rácsos kitöltés}} | Páros számú élű nyílt szegélyt négyszögekből álló ráccsal tölt ki |
| {{ui:Híd}} | Két kijelölt nyílt élhurkot lapokkal köt össze |
| {{ui:Redő}} | Mennyire maradnak élesek a kijelölt élek, amikor a hálót felosztott felület simítja: a középponttól távolodjon, használja a görgőt (0,1-es lépésekben), vagy írjon be 0 és 1 közötti értéket. A panel mutatja a kijelölt élek redőjét, és beírt értéket is elfogad. A redős élek bíbor színnel látszanak |
| {{ui:Tükrözés}}, {{ui:Simítás}}, {{ui:Törlés}} | Lapok megfordítása; csúcsok simítása a szomszédaik felé; törlés a kijelölési mód szerint |

Mindegyik egy visszavonási lépés. A textúrakoordináták, színek és súlyok átkerülnek az új lapokra és csúcsokra.

## Újrahálózás

Az {{ui:Újrahálózás}} újra elkészíti az egész hálót, egyforma méretű egyenlő háromszögekből, a megnyomáskor kért méretben (a kisebb finomabb és lassabb). Bezárja a lyukakat, összeköti az átfedő darabokat, és kiegyenlíti azt a hálót, amelyet a szobrászkodás megnyújtott. Az éles élek kissé lekerekítve kerülnek ki. Az UV-k, a festés és a redők újrakezdődnek. Egy visszavonási lépés.

## Retopológia

Egy részletes (például szobrászati vagy beolvasott) háló fölé tisztább, új hálót építéshez válassza ki a részletes hálót a panel {{ui:Retopológia}} › **Erre épül** pontjánál, majd:

- **A mozgatott pontok rátapadnak:** a mozgatott pontok és a kihúzott élek a felületére kerülnek.
- **A kijelölt pontok ráhelyezése** azonnal a felületre mozgatja a kijelölt pontokat (egy visszavonási lépés).
- **Az építendő háló éleinek előre mutatása** a hálót, amelyet épít, a felület fölé rajzolja, hogy láthassa.

## Az utolsó művelet beállítása

Az {{ui:Beljebb}}, {{ui:Letörés}}, {{ui:Hurokvágás}}, {{ui:Felosztás}}, {{ui:Simítás}}, {{ui:Rácsos kitöltés}} vagy {{ui:Pörgetés}} után a panel megmutatja a beállításait (szélesség, szakaszok, profil, vágások …). Ha módosít egyet, a művelet a kiindulási helyétől újra lefut, továbbra is egy visszavonási lépésként.

## Billentyűk

| | Nyomás/húzás billentyűk | Modellező billentyűk |
|---|---|---|
| Mozgatás, forgatás, léptékezés | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} kétszer csúsztat) |
| Kihúzás, beljebb | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Törlés | {{key:E}} vagy {{key:Delete}} | {{key:X}} vagy {{key:Delete}} |
| Redő | {{key:Shift+C}} | {{key:Shift+E}} |
| Összes kijelölése, kijelölés megszüntetése, invertálás | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Mindkét stílusban | {{key:Ctrl+B}} letörés, {{key:Ctrl+R}} hurokvágás, {{key:K}} kés | ugyanaz, és {{key:F}} kitöltés, {{key:M}} egyesítés, {{key:Ctrl+X}} feloldás, {{key:L}} / {{key:Ctrl+L}} összekötött, {{key:Alt+N}} megfordítás, {{key:O}} arányos, {{key:Shift+V}} csúcscsúsztatás |

Lásd még: [Hálók](topic:meshes), [Módosítók a hálón](topic:modifiers) és [Még nincs elkészítve](topic:not-built-yet).
