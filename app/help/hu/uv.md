---
title: Háló UV-jeinek elrendezése
summary: Varratok megjelölése, kibontás, vetítés és csomagolás a háló textúra-koordinátáihoz az UV munkaterületen, ellenőrzés sakktáblával és nyúlásszínekkel.
keywords: uv, uv-k, kibontás, varrat, varratok, textúra, textúra-koordináták, atlasz, csomagolás, sziget, szigetek, sakktábla, nyúlás, torzítás, doboz vetítés, henger vetítés, gömb vetítés, konform, angle based, lscm, abf
from: 00028f20
---

A textúra sík kép; a háló nem sík. Az **UV-k** megadják, hol helyezkedik el a képen minden lap minden sarka. Az UV munkaterület ezeket elkészíti: a hálót a **varratok** mentén felnyitja, a darabokat síkba teríti (**kibontás**), és a négyzetbe illeszti (**csomagolás**).

## Megnyitás

Jelöljön ki egy hálót, és válassza ki a {{ui:UV}} lehetőséget a Munkaterület listából. Csoport vagy komponens először hálóvá alakul, ahogy a Háló munkaterületen is. A 3D-nézet a bal felére mozdul; a jobb oldali **UV-szerkesztő** mutatja a háló lapjait a textúra-négyzeten elrendezve. A kijelölés ugyanúgy működik, mint a Háló munkaterületen, és amit az egyik nézetben kijelöl, az a másikban is kijelölődik.

## Varratok megjelölése

A varratok azok a helyek, ahol a háló felnyitható; mindkét nézetben pirosan látszanak.

- Jelöljön ki éleket ({{ui:Él}} vagy {{key:2}}), és nyomja meg a {{ui:Varrat jelölése}} gombot ({{key:Ctrl+E}}). A {{ui:Varrat törlése}} ({{key:Ctrl+Shift+E}}) eltávolítja őket.
- A {{ui:Varratok az élesen}} megjelöli a minden éles élt, és minden olyan élt, ahol a lapok 60°-nál nagyobb szögben találkoznak: egy doboz hat oldalra esik szét.
- A {{ui:Varratok az UV-kből}} megjelöli a varratokat, ahol az UV-k már megtörnek, például vetítés után.

Egy zárt darabnak varratok kellenek ahhoz, hogy síkba fekhessen: egy gömbnek legalább egy vágás kell, egy csőnek a hossza mentén egy vágás.

## Kibontás

Jelölje ki az elrendezendő lapokat (vagy egyiket sem, az egész hálóhoz), és nyomja meg a {{ui:Kibontás}} gombot ({{key:U}}). A varratok közötti minden darab síkba terül, szögeit a lehetőséghez mérten pontosan megtartva (szög alapú síkítás), majd a darabok a négyzetbe csomagolódnak. A {{ui:Konform}} ehelyett a legkisebb négyzetes konform leképezéssel bontja ki: gyorsabb, de erősen ívelt darabokon kicsit kevésbé pontos. Az a forma, amely síklemezből készíthető, például egyszer felvágott henger oldala, nyúlás nélkül bontható ki.

## Vetítés

Egyszerű formáknál gyakran elég a vetítés:

| Vetítés | Mit csinál |
| --- | --- |
| {{ui:Doboz}} | Minden lap arra a doboz-oldalra vetítve, amely felé leginkább néz |
| {{ui:Henger}} | A kék tengely körül: keresztben a körbefordulási szög, felfelé a magasság |
| {{ui:Gömb}} | A középpontból: keresztben a körbefordulási szög, felfelé a szélesség |
| {{ui:Nézetből}} | Ahogy a lapok most látszanak a 3D-nézetben |

A henger vagy a gömb illesztési vonalán átnyúló lap egy darabban marad, így UV-i kissé túlnyúlhatnak a négyzet jobb szélén; a textúrák ott ismétlődnek.

## Rendezés

- A {{ui:Pakolás}} egy texel-méretben illeszti a darabokat (szigeteket) a négyzetbe, mindegyiket úgy forgatva, hogy a legkevesebb helyet foglalják el. A panel állítja be a köztük maradó távolságot.
- A {{ui:Forgatás 90°-kal}} és a {{ui:Tükrözés}} forgatja vagy tükrözi a kijelölt lapok UV-it.
- Az UV-szerkesztőben húzza a kijelölt lapot a kijelölés UV-inek mozgatásához, vagy mutasson a szerkesztőre, nyomja meg a {{key:R}} vagy {{key:S}} billentyűt, majd mozgasson a forgatáshoz vagy méretezéshez (kattintás megtartja, az {{key:Esc}} megszakítja). A {{key:G}} húzás nélkül mozgat. Kettős kattintás egy lapon (vagy {{key:L}}) a teljes szigetet kijelöli. A görgő nagyít; a középső vagy jobb gombbal húzva eltolhatja; a {{key:F}} újra illeszti a négyzetet.

Minden módosítás egy visszavonási lépés.

## Ellenőrzés

- A {{ui:Sakktábla}} címkézett sakktábla-mintát mutat a hálón az UV-kben: az egyenletes, négyzetes kockák azt jelentik, hogy a textúra egyenletesen fekszik; a címkék mutatják, merre fut.
- A {{ui:Nyúlás}} minden lapot annak alapján színez, mennyire nyúlnak meg az UV-i: a kék semennyire, a zöldön át a piros sok nyúlást jelent. A panel azt választja ki, hogy **megtört szögeket** vagy **megváltozott méretet** mér-e, és megmutatja az átlagot.

Lásd még: [Háló szerkesztése](topic:mesh-edit), [Hálók](topic:meshes) és [Módosítók egy hálón](topic:modifiers).
