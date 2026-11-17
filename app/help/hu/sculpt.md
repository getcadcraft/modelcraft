---
title: Háló szobrászata
summary: Formázza a hálót ecsetekkel, mint az agyagot — rajzolás, agyag, simítás, megfogás, felfújás, redő, csípés, laposítás —, védje a részeket maszkkal, tükrözzön X mentén, és adjon részletet ott, ahol szobrászkodik.
keywords: szobrászat, szobrászkodás, ecset, ecsetek, agyag, rajzolás, simítás, megfogás, felfújás, redő, csípés, laposítás, maszk, szimmetria, tükrözés, részlet, dinamikus topológia, toll, nyomás, tábla, érintőceruza
from: 5477801a
---

A Szobrászat munkaterület ecsetekkel formálja a hálót, mint az agyagot: húzza végig a felületen, és az felemelkedik, süllyed, simul, vagy követi a mutatót egy kerek ecset alatt; a közepén a legerősebb, a szélén fokozatosan elhalkul.

## Kezdés

Jelöljön ki egy hálót, és válassza a {{ui:Sculpt}} lehetőséget a Munkaterület listában. Egy csoport vagy komponens előbb hálóvá alakul, ahogy a Háló munkaterületen is. Az ecsetek a háló csúcsain dolgoznak, így a több csúcsot tartalmazó háló finomabb formákat ad: ezért előbb ossza fel (a Háló munkaterület {{ui:Subdivide}} parancsával, vagy egy alkalmazott Felosztott felület (Subdivision surface) módosítóval), vagy kapcsolja be a {{ui:Detail}} opciót.

## Ecsetek

| Ecset | Billentyű | Mit csinál |
| --- | --- | --- |
| {{ui:Draw}} | {{key:D}} | Megemeli az ecset alatti felületet |
| {{ui:Clay}} | {{key:C}} | Lapos rétegeket épít fel, előbb a mélyedéseket tölti ki |
| {{ui:Smooth}} | {{key:S}} | Kisimítja a púpokat; a {{key:Shift}} tartásával bármelyik ecsettel simít |
| {{ui:Grab}} | {{key:G}} | A mutatóval húzza maga után a felületet |
| {{ui:Inflate}} | {{key:I}} | Saját iránya mentén kifújja a felületet |
| {{ui:Crease}} | {{key:Shift+C}} | Éles barázdát vág |
| {{ui:Pinch}} | {{key:P}} | A felületet az ecset közepe felé húzza |
| {{ui:Flatten}} | {{key:T}} | A felületet az átlagos síkjára nyomja |
| {{ui:Mask}} | {{key:M}} | Maszkot fest, amely megvédi a felületet a többi ecsettől |

Ecsetelés közben tartsa lenyomva a {{key:Ctrl}} billentyűt, ha fordítva akar dolgozni (lefelé az emelés helyett, gerinc a barázda helyett, a maszk eltávolítása), vagy kapcsolja be a {{ui:Take away}} opciót.

## Méret és erősség

Az ecset mérete képernyő-képpontban van, így minden nagyításnál ugyanúgy érződik: a {{key:[}} és a {{key:]}} kisebbíti és nagyítja, a {{key:Shift+[}} és a {{key:Shift+]}} az erősségét módosítja. A panel mindkettőt mutatja.

Tabletes tollal a keményebb nyomás nagyobbá és erősebbé teszi az ecsetet; a panel mindkettőt kikapcsolja.

## Tükrözés, maszk és részlet

- A {{ui:Mirror X}} ({{key:X}}) egyszerre szobrássza mindkét oldalt a piros mentén, arcokhoz és alakokhoz.
- A maszk szobrászkodás közben sötétebben látszik. A {{ui:Clear mask}} ({{key:Alt+M}}) eltávolítja, az {{ui:Invert mask}} ({{key:Ctrl+I}}) megfordítja: a maszkolatlan részt maszkolja, a maszkolt részt felszabadítja. A maszk a hálóval együtt mentődik.
- A {{ui:Detail}} háromszögeket ad ahhoz, ahol szobrászkodik: a panelen beállított méretnél (képernyő-képpontban) hosszabb élek az ecset alatt felosztódnak. Háromszögekből álló háló kell hozzá, és előbb megkéri, hogy készítsen egyet.

Minden vonás egy visszavonási lépés.

:::note
A részlet csak háromszögeket ad hozzá; a túl aprókká vált háromszögeket nem veszi el. A Remesh (a Háló munkaterületen) az egész hálót újra egyenletessé teszi.
:::

Lásd még: [Háló szerkesztése](topic:mesh-edit), [Hálók](topic:meshes) és [Módosítók hálón](topic:modifiers).
