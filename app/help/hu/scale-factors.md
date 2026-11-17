---
title: Léptékezés tényezőkkel és zsugorodási ráhagyással
summary: Egy kijelölést tengelyenként megadott tényezővel léptékezhet egy általa választott pont körül, vagy egy mintázatot nagyíthat akkora százalékkal, amennyivel egy öntött alkatrész zsugorodik.
keywords: léptékezés, nem egyenletes, tényező, százalék, nyújtás, zsugorodás, öntés, mintázat, öntödei, ráhagyás, átméretezés
from: 37e1bbff
---

A Léptékezés eszköz ({{key:S}}) egyenletesen léptékez, vagy egy fogópontot húzva egy vagy két irányba nyújt. A **{{ui:Scale by factors…}}** (az Eszközök menüben, vagy a Módosítás csoportban) a beírós változat: egy szám mindhárom tengelyhez.

1. Jelöljön ki éleket, lapokat, csoportokat vagy komponenseket.
2. Nyissa meg a {{ui:Scale by factors…}} párbeszédpanelt. Írjon be egy tényezőt a piroshoz, a zöldhöz és a kékhez. Tényező lehet `1.015`, `101.5%` vagy `+1.5%` (kisebbítéshez `-2%`). A {{ui:Same on all three axes}} az elsőt átmásolja a másik kettőre.
3. Válassza ki, mi maradjon a helyén: a kijelölés közepe, az alsó sarka, az alsó oldalának közepe vagy az origó.
4. A mezők alatti sor mutatja a jelenlegi és az új méretet. A {{ui:Scale}} egy visszavonási lépésben végzi el.

A tengelyek a megnyitott csoporté (a legfelső szinten a modellé). Egy elforgatott csoport vagy komponens ferdén torzul, ha a tényezői eltérnek; ilyenkor a tartalmazó csoportot léptékezze. Egy komponens tartalmát nem érinti, így a másolatai változatlanok maradnak.

## Zsugorodási ráhagyás

Az öntött alkatrész lehűléskor zsugorodik, ezért a mintázatát nagyobbra készítik. A **Zsugorodási ráhagyás** alatt írja be minden tengelyhez a százalékot (az öntöde vagy a mintakészítő adja meg a fémhez; az alábbi 1,5% csak példa), majd nyomja meg a {{ui:Use as the factors}} gombot.

- **Maga a százalék** a tényezőt 1 plusz a százalékra állítja: 1,5% 1,015-öt ad, amit a zsugorodási vonalzó is jelöl.
- **Pontosan elég** a tényezőt 1 osztva eggyel mínusz a százalékkal számolja: 1,5% 1,0152-t ad, így az öntvény a zsugorodás után pontosan az alkatrész méretére jön ki.

Az utoljára használt százalékok ebben a böngészőben megmaradnak.

:::note
A százalékot a saját adatai alapján kell megadni: a ModelCraft nem ismeri a fémet, az öntőformát vagy az eljárást.
:::
