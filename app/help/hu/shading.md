---
title: Anyagok készítése csomópontokkal
summary: Építsen anyagot textúrákból, képekből és matematikából az Árnyalás munkaterületen, nézze meg a nézetben menet közben, és fesse vele a lapokat.
keywords: árnyalás, kisütés, textúra kisütése, környezeti takarás, ao, görbület, normál kisütés, nagy poligonszámú, kis poligonszámú, fénytérkép, matrica, matricák, matrica, embléma, címke, textúrafestés, textúra festése, ecset, anyag, anyagok, materialx, mtlx, openpbr, standard surface, anyagkönyvtár, librarycraft, textúrakészlet, pbr, textúrák importálása, zip, cc0, húzás, csomópont, csomópontok, csomóponteditor, árnyaló, textúra, procedurális, zaj, sakktábla, voronoi, cellák, hullámok, téglák, csempék, fa, márvány, átmenet, szennyeződés, élkopás, színátmenet, keverés, dudorítás, normáltérkép, érdesség, fémesség, átlátszatlanság, kivágás, kibocsátás, izzás, elmozdulás, dobozos leképezés, háromsíkú, uv, kép, képtextúra
from: d7368b21
---

Az **Árnyalás** munkaterületen készített anyag a fájlhoz tartozik. Ez egy kis gráf: **csomópontok**, amelyek textúrákat, képeket és számokat állítanak elő, és ezek az **Anyagkimenetbe** kapcsolódnak, amelynek bemenetei a felület megjelenését határozzák meg — alapszín, érdesség, fémesség, normál, átlátszatlanság, kibocsátás és az OpenPBR modell többi része. Bármelyik könyvtári anyaghoz hasonlóan festhet vele lapokat, és minden változás azonnal megjelenik a nézetben.

## Megnyitás

Válassza az {{ui:Árnyalás}} lehetőséget a munkaterület-listában. A 3D nézet megtartja a képernyő tetejét, a **csomóponteditor** pedig az alját foglalja el. A jobb oldali panel a fájl saját anyagait sorolja fel.

- {{ui:Új anyag}} egy szürke anyagot hoz létre, csak az Anyagkimenettel.
- **Könyvtári anyag szerkeszthető másolatának készítése** a téglát, a fát, a csempét és a többit olyan gráffá alakítja, amelyet módosíthat: textúrája egy Könyvtári textúra csomóponton keresztül érkezik, dudorai pedig egy Dudorítás csomóponton keresztül.
- {{ui:Festés vele}} a kijelölt lapokat vagy csoportokat festi be, vagy kiválasztja az anyagot a Festés eszköz számára. A Festés eszköz anyagai között a fájl saját anyagai az **Ebben a fájlban** alatt is szerepelnek.
- {{ui:Kettőzés}} és {{ui:Törlés}} a szerkesztett anyagra vonatkozik. A törlés nem vonható vissza: az vele festett lapok alapértelmezett színt mutatnak, amíg újra nem festi őket.

## Anyagok a könyvtárból

A panel **Anyagkönyvtár (Könyvtár)** része listázza a könyvtár anyagait, mindegyik előnézetével, amelyet a CadCraft útkövetője renderel. Ezek CC0 alatt kiadott textúrakészletek, a készítőik nevével.

- Kattintson rá, hogy átkerüljön a fájlba (a képei vele együtt), és ha lapok vagy csoportok vannak kijelölve, azokat festi be.
- Húzza a nézetben egy lapra vagy csoportra, hogy csak azt fesse be.
- A fájl egyik anyagává válik: csomópontjait ugyanúgy módosíthatja, mint bármelyiket. Az elismerése a panelen látszik, és a fájlban marad.

## Textúrakészlet importálása

A **Textúrakészlet importálása** alatti {{ui:Képek vagy zip…}} vagy {{ui:Mappa…}} egy térképkészletből anyagot készít. A térképeket a fájlnevükben lévő szavak alapján találja meg: color, albedo, diffuse vagy basecolor; roughness (vagy gloss, érdességgé alakítva); metalness vagy metallic; normal (OpenGL vagy DirectX, a névben lévő `gl` / `dx` alapján); height vagy displacement; ambient occlusion; opacity; emission. A csomagolt térképek (ARM, ORM) kimaradnak. A csempe 1 × 1 m-rel indul: a valódi méretét az Anyagkimeneten állítsa be. A magasság elmozdulásként kerül be, a skálája 0 — növelje a skálát, hogy hálókon használja.

## MaterialX

A MaterialX az a nyílt formátum, amelyet más 3D- és renderelőprogramok használnak anyagok átadására.

- {{ui:Exportálás MaterialX-ként…}} elmenti a szerkesztett anyagot: értékeit, és minden textúrát PNG-képként a `.mtlx` fájl mellé (zipben). Válassza ki az árnyalót, amellyel íródik: **OpenPBR Surface** (MaterialX 1.39, ugyanaz a modell, amelyet a ModelCraft használ) vagy **Standard Surface** (MaterialX 1.38, amelyet ma több program olvas). A textúrák UV-koordinátákkal, méterben kerülnek elhelyezésre; a doboz- és a háromsíkú elhelyezés UV-ként íródik.
- {{ui:MaterialX importálása…}} (vagy {{ui:Mappából…}}) beolvassa a `.mtlx` fájlokat az OpenPBR, Standard Surface, UsdPreviewSurface vagy glTF PBR árnyalókkal. Adja hozzá a képeket is, vagy egy mindent tartalmazó zip-fájlt: a képet az elérési útja, a neve, vagy a neve másik képtípussal alapján találja meg (a fájlnévben szereplő `.exr` a mellette lévő `.jpg`-ként is érkezhet). A textúrák, normáltérképek, aritmetika, keverések és az elmozdulás csomópontként érkeznek; minden más megtartja az értékét, az állapotsor pedig felsorolja, mi maradt ki.

## Matricák

A matrica egy kép, amelyet egy felületre helyeznek — logó, tábla, címke, folt —, saját anyaggal.

- Állítsa be az **Új matrica szélességét**, majd válassza a {{ui:Matrica elhelyezése…}} lehetőséget (vagy az eszköztár {{ui:Matrica}} gombját), válasszon PNG, JPEG vagy WebP képet, és kattintson egy lapra. A kép az ott lévő felületekre vetül, megtartva az arányait; a PNG átlátszó részei átlátszók maradnak.
- A kattintott csoporthoz vagy komponenshez tartozik, és azzal mozog. Lefedi a dobozán belüli, ugyanabba az irányba néző lapokat, és a ráhelyezett felület széleinél megáll.
- Minden matrica saját anyagot kap **Decal: <picture>** néven, a fájl listájában: szerkessze úgy, mint bármelyiket (érdesség, dudor, izzás). A matrica melletti {{ui:Anyag}} megnyitja.
- Minden matrica mellett: szélessége (a magasság követi a képet), {{ui:Forgatás}} (negyedfordulat) és {{ui:Törlés}}. A matricák a fájl anyagaival maradnak meg, a visszavonáson kívül.
- Megjelennek az árnyalt nézetben, a gyors renderekben és a nagy minőségű képeken.

## Festés a textúrán

A {{ui:Textúra festése}} (vagy a **Festés a textúrán** alatti {{ui:Festés}}) a mutatót kerek ecsetté alakítja. Húzzon olyan lapon, amely a fájl egyik anyagát viseli: az ecset a textúrát festi, amely az alapszín mögött van.

- Mesh esetén a mesh UV-i mentén fest (előbb a UV-munkaterületen oldja ki); más lapokon a lapon keresztben fest, így a festés az anyag csempéjével ismétlődik.
- Az az anyag, amelynek az alapszíne egyszerű szín, az első festésnél egy új, 512 × 512 képpontos, abban a színben lévő képet kap. Ha az alapszín más csomópontokból jön, az Alapszínhez kapcsolt Kép csomópontra van szükség.
- Állítsa be a panelen az ecset színét, méretét (képpontban), erejét és keménységét. A {{ui:Vonás visszavonása}} vagy a {{key:Ctrl+Z}} (festés közben) visszavon egy vonást, az utolsó 20-ig.
- A megfestett kép a fájlban mentésre kerül. A könyvtári anyagok nem festhetők: előbb készítsen szerkeszthető másolatot.

## Textúrák kisütése

A **Textúrák kisütése** a felület alakját és a jelenet hatását képekbe írja egy mesh UV-i mentén.

- Jelöljön ki egy UV-ékkel rendelkező meshet (a UV-munkaterületen oldja ki), jelölje be a térképeket, és nyomja meg a {{ui:Kisütés}} gombot:
  - **Környezeti takarás** — mennyire nyitott minden pont: a sarkok, a hajtások és a más dolgok alatti helyek sötétebbek lesznek. A modellben megjelenő minden elem árnyékolja, a takarási távolságig.
  - **Görbület** — a külső élek mentén világos, a belső sarkokban sötét, a sík és enyhén görbült részeken középszürke, a beállított élszélességen belül.
  - **Normálok a nagy részletességű objektumból** — jelöljön ki egy részletes másolatot is: annak felületi részletei normáltérképként íródnak az egyszerűbb objektumra (a kevesebb háromszöget tartalmazó objektumra sül ki). A keresési távolság azt adja meg, mennyire lehetnek távol egymástól a két felület.
  - **Megvilágítás** — a modell helyének és dátumának napja (Stílus) az árnyékaival, valamint az ég, fénytérképként.
- A képek a fájlhoz kerülnek, és megjelennek a Kép csomópontokban. Ha a szerkesztett anyagnak van **Szennyeződés és élkopás** csomópontja, az azonnal beolvassa az új takarási és görbületi képeket.
- Texelenként több sugár simább takarást és megvilágítást eredményez, de tovább tart. A kisütés a számítógép processzormagjain fut a háttérben; a {{ui:A kisütés leállítása}} leállítja.

## Gráf építése

1. {{ui:Csomópont hozzáadása…}} (vagy a {{key:Shift+A}} a csomóponteditorban) egy csomópontot ad a szerkesztő közepére.
2. Húzzon egy kimeneti pontból (a csomópont jobb oldalán) egy bemeneti pontra (a csomópont bal oldalán) az összekötéshez. Egy bemenetre érkező második összekötés kicseréli az elsőt; a kapcsolt bemenetet elhúzva szétkapcsolja.
3. A nem kapcsolt bemenetek értéket mutatnak: írjon be egy számot, vagy válasszon színt. A beállítások minden csomópont alján vannak.

A csomópontot a címénél fogva húzva mozgathatja, az üres területet húzva eltolhatja a nézetet, a görgővel nagyíthat. A {{key:Delete}} törli a kijelölt csomópontokat vagy összeköttetést, a {{key:Mod+Z}} visszavon, a {{key:Mod+D}} kettőz, az {{key:F}} megmutat minden csomópontot. Minden változás a csomóponteditor egy visszavonási lépése. A modell saját visszavonása nem módosítja az anyagokat.

| Csomópontok | Amit készítenek |
|---|---|
| Textúrakoordináták | Hol van egy pont a csempén: ismételje, tolja el, forgassa el negyed fordulattal. |
| Érték, Szín | Egy szám, egy szín. |
| Kép | A fájl egyik képe (amely egy importált modellel érkezett, vagy amelyet a {{ui:Kép hozzáadása…}} lehetőséggel adott hozzá). Fényképhez a **Színek**, érdességi vagy normáltérképhez az **Adatok** beállítást válassza. |
| Könyvtári textúra | Egy könyvtári anyag textúrája, érdessége és magassága. |
| Sakktábla, Zaj | Négyzetek; sima fraktál zaj a részletességével, érdességével és magjával. |
| Voronoi-cellák, Hullámok, Átmenet | Cellák (a legközelebbi ponttól való távolság, a cellák közötti élek, cellánként egy szín); sávok keresztben, felfelé vagy átlósan, szinusz-, fűrész- vagy háromszögalakban, zaj által meghajlítva; lineáris, négyzetes, sugárirányú és gömbi átmenetek. |
| Téglák, Csempék | Téglasorok váltakozó eltolással, vagy csempeháló: színek, habarcs vagy fuga, rés és lekerekítés méterben, dudorokhoz magasság, darabonként egy véletlen szám. |
| Fa, Márvány | Gyűrűk a szálak mentén finom rostokkal; erek, amelyeket turbulencia hajlít. |
| Szennyeződés és élkopás | A domború éleket kikopja, a mélyedéseket beszennyezi a mesh görbületi és takarási képei alapján ([Textúrák kisütése](topic:shading#bake-textures) készíti őket; vagy állítsa be a két képbeállítást a mesh UV-kiosztásában: helyezze el az anyagot UV-koordinátákkal). Nélkülük nem változtat semmin. |
| Színek keverése, Színátmenet, Árnyalat/telítettség/érték, Fényerő és kontraszt, Invertálás, Gamma, RGB szétbontása és egyesítése | Színművelet. |
| Matematika, Tartománytérkép | Számtani műveletek (összeadás, szorzás, hatvány, simított lépcső és más). |
| Dudorítás, Normáltérkép | Normál egy magasságból (Dudorítás) vagy egy normáltérkép-képből (Normáltérkép: válassza a zöld csatorna irányát). |

## Az Anyagkimenet

A beállításai megmondják, hogyan fekszik a textúra a felületeken:

- **Csempeszélesség** és **Csempemagasság**: hány méter lefedi a textúra egy csempéjét. Minden, amit a gráf készít, a csempén belül ismétlődik, varrat nélkül.
- **Elhelyezés alapja**: a **UV-koordináták** a lapokat követik (a nyomás/húzás lapjai: mindegyik lap mentén; meshek: a saját UV-ik, egy UV-egység = egy csempe), a **Doboz** a három tengely közül a legközelebbit vetíti, a **Háromsíkú** a három vetítést keveri a dőlt felületeken (**Keverési élesség**: a magasabb érték keményebb keveréket ad).
- **Normálerő** a normálbemenetet skálázza. **Elmozdulás skálája** megadja, mennyire mozgatja az elmozdulásbemenet a mesh csúcsait.
- A {{ui:További bemenetek}} megmutatja az OpenPBR többi bemenetét: bevonat, szőrösség, szubfelület, vékony film, átvitel és ezek színei.

## Nagy minőségű képekben

Az útkövető a gráfból olvassa az alapszínt, érdességet, fémességet, átlátszatlanságot, normált és kibocsátást, ahogy azok a felületen változnak. Minden más bemenet, amelyet összekapcsol (például egy változó bevonat), átlagértékén kerül felhasználásra; a panel megmondja, melyik. Az átlátszatlansági textúrából készült kivágás mutatja az alakját, az árnyéka egyenletesen átlátszó. Az izzó textúra megvilágítja azt, amire néz, anélkül, hogy lámpaként mintavételezné.

Az **Elmozdulás** csak a meshek csúcsait mozgatja, ezért a részletekhez adjon hozzá egy Subdivision módosítót ([Módosítók](topic:modifiers)). A nyomás/húzás lapjai megtartják az alakjukat, a dudorokat a normálból kapják.

:::tip
WebGPU-val rendelkező számítógépen a gráf a grafikus kártyán számolódik, nélküle a processzoron. Az eredmény ugyanaz.
:::
