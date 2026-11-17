---
title: Élek lágyítása és simítása
summary: Rejtse el a sekély szögben találkozó lapok közötti éleket, hogy az ívelt alakzatok egyetlen sima felületnek látszanak, a ModelCraftban és az exportált fájlokban.
keywords: lágyítás, simítás, lágy élek, sima árnyalás, élek elrejtése, facetta, facettált, ívelt, normálok, keményítés, szög
from: 52d32453
---

Az ívelt alakzat a ModelCraftban síklapokból áll. A lapok közötti **lágy** élek nem rajzolódnak ki, az általuk összekötött lapok pedig egyetlen sima felületként árnyalódnak, így egy 24 oldalú henger kerek nézetet kap.

Kör húzásakor a {{ui:Nyomás/húzás}} eszközzel a kör oldalai automatikusan lágyítva lesznek. Más alakzatoknál szög szerint lágyítson.

## Lágyítás szög szerint

1. Jelölje ki, mit lágyítson: lapokat és éleket, vagy egy csoportot vagy komponenst (annak minden élét).
2. Az {{ui:Entitásinfó}} panelen írjon be egy szöget a {{ui:Lágyítás eddig}} mezőbe, például `20`, majd kattintson a {{ui:Lágyítás}} gombra.

A kijelölés minden olyan éle lágy lesz, amelynek két lapja legfeljebb ekkora szöggel fordul; az élesebb fordulatú élek kemények maradnak. Egy 12 oldalú hasáb oldalai 30°-kal, peremei 90°-kal fordulnak, ezért a `31` csak az oldalakat lágyítja.

A {{ui:Összes keményítése}} a kijelölés minden élét újra keménnyé teszi. Mindegyik egy visszavonási lépés.

## Tudnivalók

- Csak pontosan két lap közötti élek lágyulnak. A laza élek változatlanok maradnak.
- A sima árnyalás csak a lágy éleken át működik: a lágy él nélküli lap síkban árnyalódik.
- A lágy élek megmaradnak a ModelCraft-fájlban. A **glTF (.glb)** és az **OBJ** exportok megőrzik a sima árnyalást (sarkonként egy normállal), így más programok ugyanazt a felületet mutatják. A Collada és az STL a síklapokat exportálja.
- A lágy élek minden lapstílusban rejtve vannak, a {{ui:Röntgen}} és a {{ui:Drótváz}} módban is. Megtekintésükhöz jelölje ki az alakzatot, és kattintson az {{ui:Összes keményítése}} gombra; a visszavonás visszahozza a lágyítást.
