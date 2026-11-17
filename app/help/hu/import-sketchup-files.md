---
title: Egy SKP-modell importálása
summary: Importáljon egy .skp fájlt a csoportjaival, komponenseivel, színeivel, textúráival, címkéivel és lágy éleivel, nézze meg, mi érkezett be és mi nem, majd folytassa a modellezést.
keywords: skp, importálás, skp megnyitása, komponensek, csoportok, címkék, rétegek, anyagok, színek, textúrák, rejtett, lágy élek, 3D Warehouse, áttérés, migrálás
from: 325d3c81
---

A ModelCraft a SketchUp-fájlokat (`.skp`) saját olvasójával, az oldalon belül olvassa. Semmi sem töltődik fel, és offline is működik, amikor a ModelCraft is. A SketchUp 3-tól a 2026-os verzióig készült fájlokat tesztelték.

## A fájl importálása

1. Kattintson a {{ui:Fájl}} csoportban lévő {{ui:Importálás}} gombra (vagy húzza a `.skp` fájlt a 3D-nézetre).
2. Válassza ki a fájlt.

   Az állapotsor olvasás közben ezt írja: „Reading house.skp…”, utána pedig azt, ami beérkezett, például: „Imported house.skp (SketchUp 25.0.575): 1240 lap, 6 komponens, egy csoportban.”

A teljes modell egyetlen csoportként érkezik, a fájl nevét viseli, kijelölve, és a nézet oda nagyít. Egyetlen {{key:Mod+Z}} mindent visszavon, a címkékkel együtt.

:::tip
Ha az importált csoport tartalmát laza elemekként szeretné a modellben, és nem egy csoportban, bontsa fel a csoportot ({{ui:Entitásinfó}} › {{ui:Felbontás}}).
:::

## Mi érkezik be

- **Lapok** a lyukaikkal, és **élek**, amelyek nem részei egyetlen lapnak sem.
- **Csoportok** csoportként, **komponensek** komponensként érkeznek: egy komponens minden példánya ugyanannak a definíciónak egy elhelyezése, így egy példány szerkesztése mindet megváltoztatja, ahogy a SketchUpban is. A nevek is megérkeznek.
- **Színek.** Egy lap saját anyaga adja a színét. Egy csoportra vagy komponensre festett anyag az adott elhelyezés festéke lesz, így a benne lévő, saját színnel nem rendelkező lapok azt veszik át, ahogy a SketchUpban is. Egy komponens, amelyet az egyik helyen pirosra, a másikon kékre festettek, egy komponens marad.
- **Textúrák.** A textúrált anyaggal festett lap a textúrájával érkezik, a fájlban megadott módon a lapra kiterítve, és a {{ui:Árnyékolt}} stílus is megjeleníti. A kép a mentéskor a ModelCraft-fájlban marad, és a [renderelt kép](topic:render) is mutatja. Egy egész csoportra vagy komponensre festett textúrált anyag csak az anyag színét adja az adott példánynak.
- **Címkék.** A SketchUp-címkén lévő csoport vagy komponens ugyanilyen nevű ModelCraft-címkét kap, amely szerepel a {{ui:Címkék}} listában, és úgy látható vagy rejtett, ahogy a SketchUpban volt. Ha a modellben már van ilyen nevű címke, azt használja.
- **A rejtett dolgok rejtve érkeznek:** lapok, élek, csoportok és komponensek, valamint a rejtett címkén lévő lapok és élek. Azt látja, amit a SketchUp mutatott, és semmi sem vész el: a {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Összes megjelenítése}} parancs megjeleníti őket. Lásd: [Elrejtés, elkülönítés és rejtés feloldása](topic:hide-isolate).
- **A lágy és sima élek** lágyak maradnak, így a görbült felületek továbbra is simának látszanak.
- **Méretek** minden mértékegységben helyesek: a SketchUp-fájlok belsőleg hüvelykben (in) mérnek, a ModelCraft átváltja őket.

## Mi nem érkezik be

Az állapotsor megmondja, mi maradt ki, darabszámmal.

- **Néhány textúra** csak az anyaga színét tartja meg: a fájlból hiányzó textúra, böngészőben meg nem jeleníthető formátumú kép (például Photoshop-fájl), vagy méret nélküli textúra. A vetített textúrájú lapok textúrája közelítőleg kerül elhelyezésre.
- **Laza lapokon és éleken lévő címkék.** A ModelCraft csak csoportokat és komponenseket címkéz, így a saját címkével rendelkező lap vagy él címke nélkül érkezik, és az állapotsor megszámolja őket. Ilyen lapokból csoportot kell létrehozni ({{key:Shift+G}}), és a csoportot kell megcímkézni.
- **A modellbe helyezett képek**, szöveg, méretezések, segédvonalak, metszősíkok, jelenetek és stílusok.

## Problémák

- „Ez nem SketchUp-fájl.” vagy „Ez a SketchUp-fájl sérült: …”: a fájl csonka, vagy valami más, `.skp` nevű fájl. Mentse újra a SketchUpból, vagy kérjen új példányt.
- A ModelCraft visszautasítja a nála újabb SketchUp-verzióból származó fájlt, és megmondja, melyik verziót találta.
- Olyan modell, amely csak képekből, szövegből vagy méretezésekből áll, jelzi, hogy nincs megjeleníthető tartalma.

## A modell visszavitele

A ModelCraft nem tud `.skp` fájlt menteni. Exportálja Collada formátumban ({{ui:Exportálás}} › `.dae`), és importálja a SketchUpba: a csoportok, komponensek és színek átmennek; a textúrák az anyaguk színeként jutnak át. Lásd: [Modell exportálása](topic:export-model).
