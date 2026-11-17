---
title: Modell exportálása más programokhoz
summary: Válassza ki a megfelelő exportot renderelésre, webre, 3D nyomtatásra, BIM-re és a BimCrafthoz, és ellenőrizze, mit őriz meg mindegyik.
keywords: nyomtatás, 3mf, pdf, papír, kép, png, fénykép, képernyőkép, render, nézet mentése, export, megosztás, render, renderelés, gltf, glb, collada, dae, obj, stl, 3D nyomtatás, ifc, bim, bimcraft, küldés, más szoftver
from: 9e13e80d
---

Az exportálás a modell másolatát készíti másik formátumban. A `.modelcraft` fájlt is őrizze meg: ez az egyetlen fájl, amely mindent megőriz, és az egyetlen, amelyet a ModelCraft közvetlenül megnyit.

## Exportálás

1. Mentsen először ({{key:Mod+S}}), hogy a munkafájl biztonságban legyen.
2. Kattintson a {{ui:Fájl}} csoportban lévő {{ui:Exportálás}} gombra.
3. Válassza ki a formátumot. A böngésző letölti a fájlt, a modell nevével.

A teljes modell exportálódik. Egy rész exportálásához mentsen, törölje a többit, exportáljon, majd vonja vissza a törlést vagy nyissa meg újra.

## Melyik formátum

| Cél | Válassza | Megjegyzések |
|---|---|---|
| Megnyitás másik 3D modellezőprogramban | {{ui:Collada (.dae)}} | Megőrzi a csoportokat, egymásba ágyazott csoportokat, komponenseket (megosztva, nem másolva), neveket és színeket. Z felfelé, méter. |
| Renderelni, vagy vizualizációs programban használni | {{ui:OBJ (.obj)}} vagy {{ui:glTF bináris (.glb)}} | Az OBJ a legszélesebb körben olvasott; minden csoportelhelyezést külön objektumként ír ki, de nincs benne szín és megosztott komponens. A glTF megőrzi a komponenseket és a színeket. |
| Webre, játékmotorba vagy AR-be tenni | {{ui:glTF bináris (.glb)}} | Egy fájl, benne mindennel. |
| 3D-ben nyomtatni | {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} | Ellenőrzi, hogy a modell zárt-e, és a lapjai jó irányba néznek-e, majd STL vagy 3MF formátumban, milliméterben ír. Lásd: [Modell előkészítése 3D nyomtatáshoz](topic:print-3d). A {{ui:STL nyomtatáshoz (.stl, milliméter)}} az ellenőrzés nélkül írja ki az egész modellt. |
| Megnyitás a BimCraftban vagy másik BIM-programban | {{ui:IFC a BimCrafthoz (.ifc)}} | Minden legfelső szintű csoport vagy komponens egy épületelemmé válik. |

Az állapotsor minden exportot megerősít, például: „A House.stl exportálva (milliméter).” vagy „A House.dae exportálva (Collada 1.4.1, Z felfelé, méter; a komponensek megosztva maradnak).”

## Export előtt

- **Csoportosítsa az objektumokat.** A Collada, glTF és IFC külön objektumként őrzi meg a csoportokat és komponenseket. A szabad geometria egy tömbként kerül ki; IFC-ben a „Loose geometry” nevű egyetlen elemmé válik.
- **Nevezze el őket.** A csoport- és komponensnevek bekerülnek a Collada és IFC fájlokba, így a „Északi fal” nevű fal „Északi fal” néven érkezik.
- **Ellenőrizze a lapok irányát.** A kívül kékesszürkén látszó lapok az exportban befelé fognak mutatni. Javítsa őket a {{ui:Lap megfordítása}} gombbal (lásd: [Törlés és tisztítás](topic:erase#a-face-facing-the-wrong-way)).
- **Nyomtatáshoz** zárt testekké tegye az alkatrészeket: jelöljön ki minden csoportot, és ellenőrizze, hogy az {{ui:Entitásinfó}} „Test: Igen” értéket mutat-e. Ezután léptékezze a modellt a nyomtatott méretre, vagy léptékezze a nyomtató szoftverében.

## Modell küldése a BimCraftnak

1. Minden épületrészt tegyen csoporttá vagy komponensé, és nevezze el.
2. Válassza az {{ui:Exportálás}}, majd az {{ui:IFC a BimCrafthoz (.ifc)}} lehetőséget.
3. Nyissa meg a letöltött `.ifc` fájlt a BimCraftban.

Koncepcionális tömegmodellhez inkább az {{ui:Exportálás}} › {{ui:Tömegmodell küldése a BimCraft alkalmazásnak…}} lehetőséget használja: minden csoport tömegmodell-változatként kerül át, szintekkel, alapterületekkel és térfogattal. Lásd: [Tömegmodell küldése a BimCraftnak](topic:massing-to-bimcraft).

A sima IFC-export nem teremt közvetlen kapcsolatot a két alkalmazás között. Az IFC egyetlen szintet tartalmaz, és minden elem általános IfcBuildingElementProxy, típus és tulajdonságok nélkül: csak alakot és nevet hordoz. A zárt csoportok szilárd alakzatokká, a nyitottak felületekké válnak.

## Lapok nélküli vonalak

Azok az élek, amelyek nem tartoznak egyetlen laphoz sem (segédvonalszerű vonalak, egy importált telekterv), vonalként kerülnek az OBJ-ba és a Collada-ba. A glTF és az STL nem tud velük mit kezdeni, ezért kihagyja őket. A segédvonalakat és a jeleneteket egyik formátum sem exportálja.

## A nézet mentése képként

{{ui:Exportálás}} › {{ui:A nézet képe (.png)}} pontosan azt menti, amit a 3D-nézet mutat, a képernyőn látható méretében. A {{ui:Kép kétszeres méretben (.png)}} kétszer olyan szélesre és kétszer olyan magasra menti (nyomtatáshoz vagy éles vetítéshez), a méretek és jelölések ekkora méretben újrarajzolva, nem nyújtva.

Nappali fényre hasonlító képhez (égbolt, nap, lágy árnyékok, üveg) inkább az {{ui:Exportálás}} › {{ui:Kép renderelése…}} lehetőséget használja: lásd: [Kép renderelése](topic:render).

Tiszta képhez először kapcsolja be a [bemutatónézetet](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): a tengelyek, segédvonalak, metszetvonalak és a kijelölés kimaradnak. Állítsa be a kamerát, a stílust és az árnyékokat a kívánt módon, vagy lépjen egy [jelenetbe](topic:scenes); a jelenetek mozgóképes felvételének mentéséhez használja a {{ui:Jelenetek}} panelen az {{ui:Animáció exportálása}} lehetőséget.

## A nézet nyomtatása vagy mentése PDF-ként

- {{ui:Exportálás}} › {{ui:A nézet PDF-je (.pdf)}} egy egyoldalas PDF-et ment: a nézet a képernyőméret kétszeresében, méretekkel együtt, A4-es oldalon (Letter, ha a modell láb és hüvelyk mértékegységű), fekvő tájolásban, alatta egy sorral, amely megadja a fájlnevet, a dátumot és a mértékegységet.
- {{ui:Exportálás}} › {{ui:A nézet nyomtatása…}} ugyanezt az oldalt a böngésző nyomtatási párbeszédpanelébe helyezi. Válasszon nyomtatót, vagy a „Mentés PDF-ként” lehetőséget.

Az oldal a nézetet úgy mutatja, ahogy van: perspektivikus nézeten nincs léptékarány. Léptékhelyes rajzhoz kapcsolja ki a {{ui:Perspektíva}} lehetőséget, és nézzen a {{ui:Felülnézet}} vagy az {{ui:Elölnézet}} irányából, majd adjon hozzá [méreteket](topic:dimensions) a fontos méretekhez. A [bemutatónézet](topic:styles-shadows#presentation-view) kihagyja a tengelyeket, segédvonalakat és a kijelölést; a méretek megmaradnak.
