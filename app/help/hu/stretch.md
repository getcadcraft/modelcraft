---
title: Nyúló komponensek
summary: Egy komponens egyik példányát szélesebbé, mélyebbé vagy magasabbá teheti úgy, hogy a részei megtartják méretüket: hosszabb asztal ugyanazokkal a lábakkal, magasabb könyvespolc egymástól távolabbi polcokkal, ismétlődő oszlopokkal rendelkező korlát.
keywords: dinamikus komponens, nyújtás, komponens átméretezése, paraméteres, elnevezett méretek, ismétlés, sokszorozás, lábak, polcok, korlát, szabályok, változók
from: b4c40f43
---

Egy komponens léptékezése mindent nagyobbá tesz benne, a lábakat és a rudakat is. Az **E másolat megnyújtása** megváltoztatja a komponens szélességét, mélységét vagy magasságát, miközben minden rész egy szabályt követ: az asztallap nő, a lábai pedig megtartják vastagságukat és a végükön maradnak.

A módszer olyan komponensekkel működik, amelyek részekből állnak, vagyis csoportokat vagy komponenseket tartalmaznak, ahogy a [kezdő könyvtár](topic:starter) minden eleme is.

## Egy másolat megnyújtása

1. Válassza ki a komponenst.
2. Az {{ui:Entitásinfó}} részben kattintson az {{ui:E másolat megnyújtása…}} gombra.
3. Írja be az új {{ui:Szélesség (piros)}}, {{ui:Mélység (zöld)}} és {{ui:Magasság (kék)}} értékét, majd kattintson a {{ui:Nyúlás}} gombra.

Csak az a másolat változik: saját komponenssé válik, amely emlékszik az eredetire, ahonnan származik. Bármikor újra megnyújthatja; ilyenkor az eredetiből számítódik újra, így semmi nem tér el. Az eredeti más másolatai változatlanok maradnak.

## A szabályok

Nyissa meg a komponenst (kattintson rá duplán), és jelöljön ki egy részét. Az {{ui:Entitásinfó}} megjeleníti a {{ui:Amikor a komponens megnyúlik}} beállítást, a piros, zöld és kék tengely mentén érvényes szabállyal:

| Szabály | Mit csinál a rész | Például |
|---|---|---|
| {{ui:Nyúlás}} | A komponenssel együtt nő; a két oldalához mért távolsága megmarad | Asztallap |
| {{ui:Az elején marad}} / {{ui:A végén marad}} | Megtartja méretét és távolságát az adott oldaltól | Lábak |
| {{ui:Arányosan mozog}} | Megtartja méretét; középpontja arányosan mozog | Polcok, ajtókilincs |
| {{ui:Arányosan léptékeződik}} | Helye és mérete is arányosan változik | Egy lépcső fokai |
| {{ui:Ismétlés}} | Másolatai adott közönként ({{ui:Minden}}) jelennek meg, attól a helytől, ahol kezdődnek, a távoli oldalig | Egy korlát oszlopai |

Az {{ui:Automatikus}} (az alapérték) kiszámítja és megjeleníti, melyik szabály érvényes: {{ui:Nyúlás}}, ha a rész átível a komponensen; {{ui:Arányosan mozog}}, ha nagyjából a közepén helyezkedik el; egyébként azon az oldalon marad, amelyhez közelebb áll.

## Tudnivalók

- A részek saját alakjai közösek, ezért a megnyújtott másolat könnyű. Egy rész szerkesztése minden másolatban megváltoztatja.
- A megnyújtott másolat nem követi az eredeti szabályainak vagy elrendezésének későbbi módosításait: ezek átvételéhez nyújtsa meg újra.
- A komponensbe szabadon rajzolt lapok (nem valamelyik részbe) megtartják méretüket. Ha részt csinál belőlük, követni fogják a változásokat.
- A szabályokat és azt, hogy melyik másolat melyik eredetiből készült, a ModelCraft-fájl menti.
