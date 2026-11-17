---
title: USD mentése, megnyitása és exportálása
summary: Mentse az egész modellt USD-ként (.usda, .usdc vagy .usdz) veszteség nélkül, nyissa meg újra, és importáljon USD-jeleneteket más 3D-programokból.
keywords: usd, usda, usdc, usdz, openusd, univerzális jelenetleírás, mentés másként, exportálás, importálás, jelenetösszeállítás, építészeti vizualizáció, openpbr, materialx, csomag
from: 73d299f9
---

Az USD egy jelenetformátum, amelyet sok 3D-, renderelő és építészeti vizualizációs program használ. A ModelCraft ír és olvas USD-t. A `.modelcraft` marad az a formátum, amelyet a {{ui:Mentés}} ír; az USD a {{ui:Mentés mint}} alatt választható.

## Mentés USD-ként

1. Válassza a {{ui:Mentés mint}} lehetőséget a {{ui:Fájl}} csoportban (vagy nyomja meg a {{key:Mod+Shift+S}} billentyűt).
2. Válassza ki a formátumot: {{ui:Szöveg (.usda)}} (olvasható, verziókezeléshez jó), {{ui:Bináris (.usdc)}} (a legkisebb és leggyorsabb) vagy {{ui:Csomag (.usdz)}} (egyetlen fájl, benne a textúrákkal).
3. A fájl letöltődik (az asztali alkalmazásban megadja, hová kerüljön).

Ugyanezek a választások megvannak az {{ui:Exportálás}} › {{ui:USD (.usda, .usdc, .usdz)…}} alatt is.

## Semmi nem vész el

Ha megnyit egy ModelCraft által mentett USD-fájlt, pontosan visszakapja a modellt: a lapokat a lyukaikkal együtt, a lágy és takart éleket, az íveket, csoportokat és komponenseket, a címkéket, jeleneteket, méreteket, segédvonalakat, metszősíkokat, lámpákat, az importált textúrákat és a nézetet. Más programok ugyanazt a modellt hálókként, csoportokként, komponensek prototípusaiként, anyagokként, lámpákként és kamerákként látják.

:::note
Ha egy másik program megváltoztatja egy csoport vagy komponens geometriáját, a ModelCraft azt a részt hálóként nyitja meg a változtatással együtt, és megmondja, hány részt olvasott így. Egy másik programban áthelyezett vagy törölt elhelyezés áthelyezve, illetve törölve marad.
:::

## Más valaki USD-jének megnyitása vagy importálása

- A `.usd`, `.usda`, `.usdc` vagy `.usdz` fájlt a {{ui:Megnyitás}} paranccsal nyissa meg, hogy abból indítson modellt.
- {{ui:Importálás}} egy ilyen fájlt, hogy hozzáadja a megnyitott modellhez. Húzza mellé a fájlokat, amelyekre hivatkozik (más rétegek, textúrák).

A hálók normálvektoraikkal, UV-koordinátáikkal és színeikkel érkeznek, a megosztott geometria komponensként, az anyagok festékszínekként, a lámpák lámpaként, a kamerák jelenetként, méterben, Z-tengellyel felfelé, a fájl egységeitől és felfelé mutató tengelyétől függetlenül.

## Még nem

Az animációt, a csontvázakat és a MaterialX-csomópontgráfokat az USD-ben még nem olvassa és nem írja a ModelCraft. A ModelCraft saját animációját és csomóponti anyagait egy általa mentett USD-fájl őrzi meg, hogy a ModelCraft újra megnyithassa, de más programok nem látják őket. A fájl által hivatkozott, a ModelCraft által nem olvasható rétegeket (például egy MaterialX-dokumentumot) egy megjegyzéssel együtt kihagyja.
