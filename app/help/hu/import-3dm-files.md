---
title: A .3dm modell importálása
summary: Importáljon egy .3dm fájlt a hálóival, felületeivel, görbéivel, blokkjaival, rétegeivel és színeivel; itt látható, honnan származnak a háromszögek, és mi marad ki.
keywords: 3dm, importálás, nurbs, polifelület, brep, felületek, renderelési háló, kihúzás, görbék, blokkok, rétegek, címkék, színek, mértékegységek, áttérés, migrálás
from: 3cf29879
---

A ModelCraft a `.3dm` fájlokat saját olvasójával, az oldalon belül olvassa. Semmi sem töltődik fel, és offline is működik, amikor a ModelCraft is. Az 5., 6., 7. és 8. verziójú fájlszerkezetekkel tesztelték; a régebbi (2–4. verziójú) fájlok valószínűleg megnyílnak, de még nem tesztelték őket.

## A fájl importálása

1. Kattintson a {{ui:Fájl}} csoportban lévő {{ui:Importálás}} gombra (vagy húzza a `.3dm` fájlt a 3D-nézetre).
2. Válassza ki a fájlt.

   Az állapotsor olvasás közben ezt írja: „Reading chair.3dm…”, utána pedig azt, ami beérkezett, például: „Imported chair.3dm: 14 háló (8330 lap), 8 görbe, 5 blokkelhelyezés, 3 réteg címkeként. Felületek: 7 lap a fájlban mentett hálókból, 29 a CadCraft háromszögelte.”

A teljes modell egyetlen csoportként érkezik, a fájl nevét viseli, kijelölve, és a nézet oda nagyít. Egyetlen {{key:Mod+Z}} mindent visszavon, a címkékkel együtt.

## Honnan származnak a háromszögek

A ModelCraft lapokkal és hálókkal dolgozik, ezért a fájl minden felülete kis, lapos háromszögekből álló [hálóként](topic:meshes) érkezik. Egy polifelület (és minden kihúzás) minden lapjához a ModelCraft ebben a sorrendben vesz:

1. **A fájlban mentett renderelési hálót.** A legtöbb modellező program minden felülettel elmenti a képernyőn látott hálót; ha ott van, a ModelCraft változtatás nélkül használja.
2. **Saját háromszögelést**, ha a fájlban nincs mentett háló: síkok, NURBS-felületek, forgásfelületek (gömbök, kúpok, tórusok, esztergált alakzatok), kihúzott görbék és kihúzások (lyukaikkal és végzáróikkal), az éleik szerint levágva. Egy polifelület lapjai megosztják az éleik pontjait, így egy zárt polifelület zárt hálóként érkezik. A görbült részek addig osztódnak, amíg a háromszögek a valódi felülettől az objektum méretének körülbelül 0,15%-án belül esnek.
3. **Semmit**, ha a lap olyan felülettípuson van, amelyet a ModelCraft még nem olvas. Az állapotsor megmondja, hány lap és milyen fajta.

Az állapotsor „Felületek:” része megmondja, hány lap jött a mentett hálókból, és hányat háromszögelt a ModelCraft. A fájl egy lapján belüli élek lágyak, a lapok közötti élek élesek, így egy görbült lap simán árnyékolódik.

:::tip
A legpontosabb alakokhoz mentse a fájlt a készítő programjában a renderelési hálóival együtt (ez általában az alapbeállítás; a „kisméretű mentés” beállítás kihagyja őket).
:::

## Mi érkezik be

- **Hálók** a csúcspontjaik színeivel és textúra-koordinátáival.
- **Polifelületek, felületek és kihúzások**, ahogy fent leírtuk.
- **Görbék** (vonalak, polivonalak, ívek, körök, NURBS-görbék és ezekből összeillesztett görbék) [élekként](topic:curves), rétegenként egy élcsoportban.
- **Blokkok** [komponensekké](topic:groups-components) válnak: a blokk minden elhelyezése ugyanannak a komponensnek egy elhelyezése, így egy példány szerkesztése mindet megváltoztatja. A blokkokon belüli blokkok megmaradnak.
- **Rétegek** [címkékké](topic:tags) válnak a réteg teljes nevével („Furniture::Chairs”); ha a réteg ki volt kapcsolva, a címke is rejtett. Minden objektum elhelyezése megkapja a rétege címkéjét.
- **Színek.** Egy objektum színe abból jön, amit a fájl megad: a saját színéből, a rétegéből vagy az anyagának alapszínéből. Ez lesz a lapjai festése.
- **A rejtett objektumok rejtve érkeznek**; az {{ui:Összes megjelenítése}} parancs megjeleníti őket.
- **Mértékegységek:** a fájl megadja a mértékegységét, a modell a valódi méretével érkezik.

## Mi marad ki (és erről szól az üzenet)

Az állapotsor „Megjegyzések:” része felsorolja mindazt, ami nem érkezett be, darabszámmal:

- pontok és pontfelhők, szöveg, szöveges pontok, méretezések, vezetővonalak, sraffozások, fények, vágósíkok és elrendezési részletek;
- SubD-objektumok: a fájlt létrehozó programban előbb alakítsa őket hálóvá vagy polifelületté;
- eltolt felületeken lévő lapok és más, a ModelCraft által még nem olvasott felülettípusok, ha a fájl nem mentett hozzájuk hálót;
- más fájlokból hivatkozott blokkok (csak az importált fájl olvasódik be);
- ferde (gérvágott) végű kihúzások, négyzetes végekkel érkeznek.

Az anyagok textúrái, a renderelési beállítások, az elnevezett nézetek, a csoportok és a felhasználói szöveg nem olvasódnak be; az anyag csak az alapszínét adja meg.

## Korlátok

300 MB-ig terjedő fájlok. Egy sérült fájl megmondja, mi a baj, és nem ad hozzá semmit; egy olvashatatlan objektumot kihagy és megszámolja, a többi beérkezik.
