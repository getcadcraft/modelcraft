---
title: Elemek kijelölése
summary: Kattintás, dupla és hármas kattintás, ablak vagy keresztező doboz húzása, hozzáadás és eltávolítás módosítóbillentyűkkel, törlés.
keywords: kijelölés, kijelölt, ablak, keresztező, hozzáadás a kijelöléshez, kijelölés megszüntetése, összes kijelölése, hármas kattintás, dupla kattintás, törlés, kitörlés
from: d56d1f89
---

{{ui:Kijelölés}} ({{key:Space}}) az eszköz, amellyel a ModelCraft indul, és ahová a {{key:Esc}} visszahozza. A kijelölt elemek kékre váltanak, a jobb oldali {{ui:Entitásinfó}} pedig megmondja, mik azok.

## Kattintás

| Teendő | Kijelöli |
|---|---|
| Kattintson egy lapra vagy élre | Azt a lapot vagy élt |
| Kattintson egy csoportra vagy komponensre | Az egész csoportot vagy komponenst |
| Dupla kattintás egy lapra | A lapot és annak éleit |
| Dupla kattintás egy élre | Az élt és a két oldalán lévő lapokat |
| Dupla kattintás egy csoportra vagy komponensre | Megnyitja szerkesztésre (lásd [Csoportok és komponensek](topic:groups-components)) |
| Hármas kattintás egy lapra vagy élre | Mindent, ami hozzá kapcsolódik: az egész objektumot |
| Kattintson üres területre | Semmit (törli a kijelölést) |
| Dupla kattintás üres területen csoport szerkesztése közben | Bezárja a csoportot |

Az élekre könnyebb kattintani, mint a lapokra: ha a mutató néhány pixelen belül van egy éltől, a kattintás az élt választja.

## Húzás dobozzal

- **Balról jobbra** húzva szilárd dobozt rajzol: **ablak** kijelölés. Csak a teljesen benne lévő elemek kerülnek kijelölésre.
- **Jobbról balra** húzva szaggatott dobozt rajzol: **keresztező** kijelölés. A doboz által érintett minden elem kijelölődik, a lap pedig akkor, ha a doboz teljesen benne van.

Egy csoport vagy komponens egy elemnek számít: az ablaknak az egészet tartalmaznia kell, a keresztezőnek csak érintenie kell.

## Hozzáadás és eltávolítás

Tartson lenyomva egy billentyűt kattintás vagy húzás közben:

| Billentyű | Hatás |
|---|---|
| {{key:Shift}} | Kapcsol: hozzáadja, ami nincs kijelölve, eltávolítja, ami ki van jelölve |
| {{key:Mod}} | Hozzáad |
| {{key:Shift}} és {{key:Mod}} együtt | Eltávolít |

A modell összes elemének (vagy a szerkesztett csoport összes elemének) kijelöléséhez nyomja meg a {{key:Mod+A}} billentyűket.

## Kijelölés törlése

Nyomja meg az {{key:Esc}} billentyűt ({{ui:Kijelölés}} eszközzel), vagy kattintson üres területre.

## A kijelölt elemek törlése

Nyomja meg a {{key:Delete}} vagy a {{key:Backspace}} billentyűt. A kijelölt lapok, élek, csoportok és segédvonalak egy lépésben törlődnek; a {{key:Mod+Z}} visszahozza őket.

Egy él törlése eltávolítja azokat a lapokat, amelyekhez szükséges, kivéve, ha az él csak két, egy síkban lévő lapot választott el: ekkor a két lap egybeolvad. Egy lap törlése meghagyja az éleit. Lásd [Törlés és tisztítás](topic:erase).

## Kijelölés csoporton belül

Csoportra kattintva az egész csoport kijelölődik. Egy csoporton belüli lap kijelöléséhez kattintson duplán a csoportra a megnyitásához, majd kattintson a lapra. Míg a csoport meg van nyitva, a kattintások csak a csoporton belüli elemeket érik el; minden más halvány. A csoport bezárásához nyomja meg az {{key:Esc}} billentyűt, miközben nincs kijelölve semmi, vagy kattintson duplán üres területre.

A bal oldali {{ui:Vázlatnézet}} név szerint jelöli ki a csoportokat és komponenseket, ami hasznos, ha más elemek mögé vannak rejtve.
