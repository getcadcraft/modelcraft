---
title: Hibaelhárítás
summary: Tünetek, okok és megoldások az üres 3D-nézettől a rossz méretben érkező importokig, a ModelCraft által megjelenített üzenetekkel.
keywords: probléma, hiba, nem működik, üres, webgl, grafika, lassú, üzenet, importálás sikertelen, rossz méret, nem lehet kijelölni, érintés, billentyűk nem működnek, elveszett munka
from: 6e7394be
---

## Üres a 3D-nézet

**Tünet:** a képernyő közepe üres marad, vagy csak a háttérszínt mutatja, és az eszközökre kattintás nem tesz semmit.

**Ok:** a ModelCraft WebGL 2-vel rajzol, a böngésző 3D-grafikai rendszerével. Ez hiányzik, ha a böngésző régi, ha a hardveres gyorsítás ki van kapcsolva, vagy ha a grafikus illesztőprogramot letiltották.

**Megoldás:**

:::chromium
1. Nyissa meg a böngésző beállításait, és keressen rá a „hardveres gyorsítás” kifejezésre.
2. Kapcsolja be a „Hardveres gyorsítás használata, ha elérhető” lehetőséget, és indítsa újra a böngészőt.
3. Ha már be van kapcsolva, írja be a `chrome://gpu` címet a címsorba (Edge-ben `edge://gpu`), és keresse a „WebGL2” sort a listában. Ha letiltottként szerepel, frissítse a grafikus illesztőprogramot.
:::

:::firefox
1. Nyissa meg a **Beállítások** menüt, majd az **Általános** részt, és görgessen a „Teljesítmény” szakaszhoz.
2. Törölje a jelölést a „Javasolt teljesítménybeállítások használata” lehetőség mellől, majd jelölje be a „Hardveres gyorsítás használata, ha elérhető” lehetőséget. Indítsa újra a Firefoxot.
3. Ha így is hibát ad, írja be az `about:support` címet a címsorba, és a „Grafika” részben keresse a WebGL 2 sort.
:::

:::safari
Frissítse a macOS-t és a Safarit. A Safari újabb verzióiban a WebGL 2 mindig be van kapcsolva. Ha a **Safari**, majd a **Beállítások**, majd a **Speciális** (vagy a **Funkciójelzők**) alatt módosította a kísérleti funkciókat, állítsa vissza őket.
:::

Munkahelyi számítógépen, távoli asztalon vagy virtuális gépen a házirend letilthatja a 3D-grafikát. Próbáljon másik számítógépet. Lásd [Böngészők és számítógépek](common:browsers).

## A billentyűk nem működnek, vagy egy mezőbe íródnak

**Ok:** a billentyűzet fókusza egy panel mezőjében van: a {{ui:Lapok}} listában a {{ui:Stílus}} részben, egy napbeállításban, a {{ui:Név}} mezőben az {{ui:Entitásinfó}} részben, vagy a mértékegység-választóban. A betűk és a nyílbillentyűk ekkor abba a mezőbe mennek.

**Megoldás:** kattintson a 3D-nézetbe, majd nyomja meg újra a billentyűt. A billentyűk párbeszédpanel nyitott állapotában szintén nem működnek.

## Szám beírása nem tesz semmit

- **Még nincs irány.** A beírt hossz abba az irányba megy, amerre a mutató az első kattintástól mutat. Mozgassa egy kicsit a mutatót a kívánt irányba, és csak utána írjon.
- **Rossz pillanat.** A legtöbb eszköz csak az első kattintás után fogad értéket: először kattintson az első sarokra, a lapra vagy a mozgatandó pontra. A {{ui:Kör}} és a {{ui:Sokszög}} az első kattintás előtt várja az oldalak számát.
- **„Adjon meg egy hosszt, például 3m, 10'6" vagy 4m,3m."** A ModelCraft nem tudta beolvasni. Ellenőrizze, nincs-e tizedesvessző (`2,5`): használjon tizedespontot.

## Az alakzat rossz helyen kezdődik érintőképernyőn

**Tünet:** ujjal az első téglalap rendben van, de a következő téglalap, kör vagy vonal ott kezdődik, ahol az előző érintés véget ért, nem ott, ahová most érintett.

**Ok:** hiba ebben a verzióban: érintőképernyőn az eszköz megjegyzi az előző mozdulat utolsó illesztési pontját.

**Megoldás:** minden új alakzat előtt koppintson újra az eszköz gombjára az eszköztáron. Ez újraindítja az eszközt, és az első pont oda kerül, ahová érint.

## Egy csoport szerkesztése megváltoztatott egy másikat

**Tünet:** a {{ui:Mozgatás}} és a {{key:Ctrl}} használatával csoportot másolt, az egyik példányt megnyitotta és szerkesztette, és a másik is megváltozott. A {{ui:Vázlatnézet}} mindkettőt azonos névvel mutatja.

**Ok:** ebben a verzióban egy csoport másolása a komponensekhez hasonlóan ugyanannak a csoportnak egy második elhelyezését hozza létre. Az {{ui:Egyedivé tétel}} gomb csak komponensekhez érhető el.

**Megoldás:** jelölje ki a módosítani kívánt példányt, kattintson az {{ui:Komponens létrehozása}} gombra az {{ui:Entitásinfó}} részben, majd az {{ui:Egyedivé tétel}} gombra. Ennek a példánynak ezután saját tartalma lesz. Vagy bontsa fel a {{ui:Felbontás}} gombbal.

## A nyomás/húzás nem azt teszi, amit vártam

- **„Nyomás/húzás lapon működik. Kattintson egy lapra.”** Élre vagy üres területre kattintott. Vigye a mutatót a lapra, amíg az ki nem emelődik, majd kattintson.
- **A lap csoporton belül van.** Először kattintson duplán a csoportra a megnyitásához.
- **Egy ablak nem vágott át a falon.** A téglalapot a fal lapján kell rajzolni, nem előtte, és a falnak hátlapja kell legyen. Lásd [Nyílás vágása egy falon](topic:openings#if-it-did-not-cut-through).
- **Két doboz átfedésben van, de nem olvad össze.** Egymásba tolt testek ebben a verzióban nem vágják és nem egyesítik egymást.

## Vonal vagy alakzat nem hozott létre lapot

Lap csak akkor töltődik ki, ha az élek egy lapos hurkot zárnak be. Ellenőrizze, hogy az utolsó pont a első ponthoz illeszkedett-e („Végpont”), és hogy az összes él egy síkban van-e. A kissé síkon kívül eső hurok vonalként marad. Rajzolja újra az egyik élét, a sarkokra illesztve.

## Nem tudok lapot kijelölni vagy törölni

- A {{ui:Kijelölés}} eszközzel az élhez közeli kattintás élt jelöl ki. Kattintson inkább a lap közepéhez közel.
- A {{ui:Radír}} nem választ ki lapokat. Jelölje ki a lapot, és nyomja meg a {{key:Delete}} billentyűt, vagy törölje valamelyik élét.
- Ha csoporthoz vagy komponenshez tartozik, a kattintás a teljes elemet jelöli ki. Kattintson rá duplán a megnyitásához.

## „Előbb jelöljön ki valamit a mozgatáshoz, vagy kattintson rá.”

A {{ui:Mozgatás}}, a {{ui:Forgatás}} és a {{ui:Léptékezés}} munkához valamit igényel: jelölje ki előbb, vagy a dolog magán kezdje az eszközt kattintva (nem üres területen vagy segédvonalon).

## „Előbb jelöljön ki geometriát (húzzon ablakot, vagy kattintson háromszor, hogy kijelölje az összes összefüggő elemet).”

A {{key:G}} és a {{key:Shift+G}} kijelölést igényel. A segédvonalak nem csoportosíthatók.

## A nyílbillentyűk körbeforgatnak, ahelyett hogy zárnának

A zárak csak egy rajzoló vagy szerkesztő eszköz első kattintása után működnek. A {{ui:Nyomás/húzás}} eszköznek nincsenek zárai, a {{ui:Forgatás}} eszközben pedig nem változtatják a fordulatot. Más esetekben a nyílbillentyűk körbeforgatják a nézetet.

## Az Esc teljes képernyőn

Teljes képernyőn a böngésző az első {{key:Esc}} billentyűt a teljes képernyőből való kilépéshez használhatja. Nyomja meg újra az {{key:Esc}} billentyűt az eszköz megszakításához.

## Nincs középső gomb

Nyomja meg az {{key:O}} billentyűt a {{ui:Körbejárás}} eszközhöz, és húzzon, vagy használja a nyílbillentyűket. Lásd [Körbejárás, eltolás és nagyítás](topic:orbit-pan-zoom#without-a-middle-button).

## Importálás

| Üzenet | Teendő |
|---|---|
| „A ModelCraft a SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG és DXF fájlokat importálja. … ezek egyike sem.” | Exportálja a modellt a másik programból ezek egyikébe |
| „Ez a fájl 300 MB-nál nagyobb.” | Egyszerűsítse vagyossza fel a modellt a másik programban |
| „…túl nagy ahhoz, hogy itt modellezni lehessen vele (2 millió csúcspontnál több).” | Ugyanaz |
| „Ez a .gltf fájl ezt igényli: „…”…” | Húzza a `.gltf` fájlt a `.bin` és a textúrafájljaival együtt, vagy nyissa meg a `.glb` változatát |
| „Ez a glTF fájl a … kiterjesztést igényli, amelyet a ModelCraft még nem olvas.” | Exportálja újra a másik programból úgy, hogy ne használja ezt a kiterjesztést (például KTX2 textúrák) |
| Az OBJ színek vagy textúrák nélkül érkezik | Húzza az `.obj` fájlt a hozzá tartozó `.mtl` fájllal és a képekkel együtt |
| „Ez az Alembic fájl a régi HDF5 elrendezést használja…” | Mentse újra a másik programból Ogawa Alembic fájlként |
| Az FBX textúrák nélkül érkezik | Húzza az `.fbx` fájlt a textúrakép-fájlokkal együtt, vagy exportáláskor ágyazza be a médiát |
| „Ez az FBX fájl … verziójú, amelyet a ModelCraft nem olvas” | Exportálja újra FBX 2011-es vagy újabb verzióban |
| Az STL vagy PLY 1000-szer nagyobbnak vagy kisebbnek érkezik | Az STL-t milliméterként, a PLY-t méterként olvassa: léptékezze (lásd [Forgatás és léptékezés](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| „Ez nem Collada (.dae) fájl…” vagy „…nem jól formázott XML…” | A fájl sérült, vagy nem Collada. Exportálja újra. |
| „Ez a Collada fájl nem tartalmaz a ModelCraft által importálható geometriát.” | Csak kamerákat, fényeket vagy más fájlokra mutató hivatkozásokat tartalmaz |
| „Ez bináris DXF. Mentse ASCII DXF-ként, és próbálja újra.” | Mentse újra ASCII-ként a CAD-programból |
| „Ez nem DWG-rajz…” | A fájl nem DWG, vagy sérült |
| „Ezt a rajzot nem lehetett beolvasni (…). Lehet, hogy sérült, vagy olyan DWG-verzióban van mentve, amelyet az olvasó nem kezel…” | A zárójelek adják meg az okot. Mentse DXF-ként, vagy AutoCAD 2000 és 2018 közötti DWG-ként a CAD-programból |
| „Ez a rajz 10 000 km-nél messzebb esik a kezdőponttól…” | Mozgassa a rajzot a 0,0 pont közelébe a CAD-programban |

### Az import rossz méretű, vagy oldalra fekszik

- **OBJ:** az OBJ-nek nincs mértékegysége; a ModelCraft méterben olvassa. Egy milliméteres modell 1000-szer nagyobbnak érkezik: [léptékezze](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) `0.001` értékkel; hüvelykes modell esetén `0.0254` értékkel.
- **OBJ oldalra fekve:** a ModelCraft Y-tengellyel felfelé mutató OBJ-fájlokat vár. A Z-tengellyel felfelé mutató fájl fekve érkezik. Forgassa el 90°-kal a piros tengely körül: kattintson a {{ui:Forgatás}} középpontjára egy olyan lapon, amely a piros irányba néz, vagy nyissa meg a fájlt a saját programjában, és exportálja Y-tengellyel felfelé.
- **DWG vagy DXF:** rossz mértékegységet választott a „Rajz mértékegységei” párbeszédpanelen. Vonja vissza, és importálja újra.

## Fájlok megnyitása

| Üzenet | Teendő |
|---|---|
| „Ez a fájl nem ModelCraft-modell (nem JSON).” | Más formátumokhoz használja az {{ui:Importálás}} parancsot |
| „Ez nem olyan ModelCraft-fájl, amelyet meg tudnánk nyitni: …” | A fájl sérült, vagy kézzel módosították |
| „Ezt a modellt egy újabb ModelCraft mentette…” | Nyissa meg az újabb verzióban |
| „Ez a fájl 200 MB-nál nagyobb.” | A modell túl nagy ahhoz, hogy itt meg lehessen nyitni |

## Elveszett munka

A ModelCraft nem ment magától fájlba. Ha nem mentett módosításokkal zár be vagy tölt újra egy lapot, a böngésző előbb rákérdez („Elhagyja az oldalt?” vagy „Újratölti az oldalt?”); maradjon, és mentsen. Az Új és a Megnyitás is rákérdez („Nem mentett módosítások”). Ha a böngésző vagy a számítógép összeomlott, nyissa meg újra a ModelCraftot ugyanabban a böngészőben: felajánlja a nem mentett munkát („Munka helyreállítása?”; lásd [Munka helyreállítása](common:recover)). Gyakran mentsen a {{key:Mod+S}} billentyűvel.

## A letöltési mappa tele lesz másolatokkal

Minden mentés új letöltés, a neve `Untitled (1).modelcraft`, `Untitled (2).modelcraft` és így tovább. Törölje a régieket, vagy állítsa a böngészőt úgy, hogy minden fájlnál kérdezze meg, hová mentse, és a régi fájlt maga írja felül. Lásd [Megnyitás, mentés, importálás és exportálás](topic:files#save-a-model).

## Lassú lesz

- A visszavonás minden lépése egy modellmásolatot tart meg (a [háló](topic:meshes) csak a megváltozott részt), ezért nagyon nagy, nyomás/húzás geometriát tartalmazó importnál minden szerkesztés tovább tart. Bontsa fel vagy törölje, amire nincs szüksége, mentsen, és nyissa meg újra: az újranyitás a visszavonási előzményeket is törli.
- A napárnyékok kerülnek a legtöbbe. Modellezés közben törölje a {{ui:Napárnyékok}} jelölését.

## Nincsenek árnyékok

A {{ui:Napárnyékok}} ki van kapcsolva, a nap az Ön által választott időpontban lenyugodott („Ebben az időpontban a nap a horizont alatt van.”), vagy a stílus a {{ui:Drótváz}}, amely nem rajzol árnyékot.

## „A böngésző nem engedélyezte a teljes képernyőt.”

Egyes böngészők és beágyazott nézetek nem engedélyezik a teljes képernyőt. Használja helyette a böngésző saját teljes képernyős módját ({{pick:mac=Control-Command-F|windows linux=F11}}).

## A ModelCraft kapcsolat nélkül nem nyílik meg

A ModelCraft csak akkor nyílik meg offline, ha abban a böngészőben már el lett mentve offline használatra: az alkalmazássáv gombjának ezt kell mutatnia: {{ui:Offline használatra kész}}. Kapcsolattal nyissa meg, és kattintson a {{ui:Mentés offline használatra}} gombra. Ha a gomb {{ui:Nem sikerült menteni}} feliratot mutat, kattintson rá újra jobb kapcsolattal. Az {{ui:Az offline mód nem érhető el}} azt jelenti, hogy ez az ablak (privát ablak vagy felügyelt számítógép) nem tud másolatot tartani. Lásd [Munka offline módban](common:offline).
