---
title: Kép renderelése a modellről
summary: Nappali fényre emlékeztető képet készíthet: égbolt, nap a modell helyszíne és dátuma szerint, lágy árnyékok, üveg- és fémhatás, majd PNG-ként mentheti.
keywords: render, előbeállítás, előbeállítások, jelenet-előbeállítás, belső, külső, metszetnézet, éjszaka, egy kattintás, renderelés, útkövetés, útkövetéses, sugárkövetés, globális megvilágítás, tükröződés, törés, nagy minőség, fotó, fotórealisztikus, valósághű, kép, png, állókép, égbolt, nap, nappali fény, árnyékok, lágy árnyékok, környezeti elzáródás, üveg, fém, fényes, anyagok, expozíció, fényerő, borult, szürkület, stúdió, bemutató, köd, pára, füst, felhő, térfogat, fénysugarak, kausztikák, adaptív mintavételezés, zaj
from: 517ba4d3
---

{{ui:Render a picture…}} a nézetről olyan képet készít, amely inkább nappali fényre hasonlít, mint rajzra: égbolt, a nap ott, ahol a modell helyszíne és dátuma szerint lennie kell, lágy árnyékok, az egész égboltról érkező fény, amely elsötétíti a sarkokat és réseket, továbbá olyan szín, amely üvegnek, fémnek vagy fényes festéknek látszik. A modell nem változik.

## A nézet renderelése

1. Állítsa be a nézetet úgy, ahogy a kép látszania kell: forgassa, nagyítsa, válasszon egy [jelenetet](topic:scenes), rejtse el azt, aminek nem szabad látszania. A kép a nézet saját kamerájával készül.
2. Kattintson a {{ui:Export}} gombra a {{ui:File}} csoportban, majd a {{ui:Render a picture…}} gombra.
3. Ha a kijelölt {{ui:Scene}} nem az, amire szüksége van, válasszon másikat (lásd [Jelenet-előbeállítások](topic:render#scene-presets-a-good-picture-in-one-click)), állítsa be a {{ui:Size}} beállítást, majd kattintson a {{ui:Render}} gombra.

   A kép a renderelés közben alakul ki, és minden menettel simább lesz. A {{ui:Stop}} (vagy a {{key:Esc}}) korán befejezi, és megtartja az addig elkészült képet.

4. Kattintson a {{ui:Save}} gombra a letöltéshez (PNG, hacsak a {{ui:Save as}} másként nem adja meg).

:::tip
Kezdje a {{ui:Draft}} minőséggel, a {{ui:The view's size}} méretben, hogy ellenőrizze a kamerát és a hatást, majd a végleges képet nagyobb méretben, {{ui:Good}} vagy {{ui:Best}} minőséggel renderelje.
:::

## Jelenet-előbeállítások: jó kép egy kattintásra

A párbeszédpanel tetején négy {{ui:Scene}} gomb van. Mindegyik egy kattintással beállítja az eget, a fényerőt, a talajt, az élvonalakat, a minőséget és a napot, így az első kép előtt nincs mit megtanulni. Kattintson az egyikre, majd a {{ui:Render}} gombra.

| Jelenet | Mit állít be | Mire használja |
|---|---|---|
| {{ui:Exterior}} | Tiszta égbolt, a modell saját napja, talaj bekapcsolva | Az épület kívülről |
| {{ui:Interior}} | Borult égbolt (egyenletes fény, éles napfoltok nélkül), fél stoppal világosabb | Nézet egy szoba belsejéből |
| {{ui:Section view}} | Fehér stúdió, nincs talaj, élvonalak a gyors renderben | Metszettel vágott modell |
| {{ui:Night}} | A nap lenyugszik (a hely féltekéjén télen éjfél), egy stoppal világosabb | Lámpákkal megvilágított modell. Lámpák nélkül a kép sötét |

- A {{ui:Pick for this view}} gomb maga választ: a {{ui:Section view}}-t, ha metszet van bekapcsolva, az {{ui:Interior}}-t, ha a kamera a modellen belül van, egyébként az {{ui:Exterior}}-t. A párbeszédpanel első megnyitásakor így indul magától.
- Minden beállítás lent van, és módosítható. Ha módosít egy, a jelenet által beállított értéket, egyik gomb sem marad lenyomva, a gombok alatti sor pedig jelzi, hogy a beállítások egyéniek. Kattintson újra a jelenetre, hogy visszakerüljenek a jelenet értékei.
- A jelenet nem érinti a motort, a módot, a méretet, az anyagokat, a kamerát és a lámpákat.

:::note
A jelenetek ugyanazokat az értékeket adják a ModelCraftban és a BimCraftban. A kész kép a modelltől és a grafikus kártyától függ.
:::

## Beállítások

| Beállítás | Mit csinál |
|---|---|
| {{ui:Size}} | A nézet mérete, a nézet kétszerese, Full HD, 4K vagy négyzet. A rögzített méretek megtartják a nézet kameráját, és az oldalakon többet vagy kevesebbet mutatnak |
| {{ui:Mode}} | {{ui:Fast}}, vagy {{ui:High quality (path traced)}} (lent), a hozzá tartozó {{ui:Time limit}} beállítással |
| {{ui:Quality}} | Hány menet (nagy minőségnél minta) átlagolódik: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Több menet simább árnyékot és éleket ad, de tovább tart |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}} (lágy fény, halvány árnyékok), {{ui:Dusk}} (alacsony, meleg fény) vagy {{ui:White studio}} (sima fehér háttér) |
| {{ui:Sun}} | A nap a {{ui:Style}} › nap részben megadott dátumból, időből és helyből számolódik. Jelölje be a {{ui:Use another date and time for this picture}} beállítást, ha más időpontot próbálna ki anélkül, hogy a modell stílusát módosítaná |
| {{ui:Brightness}} | Világosabb vagy sötétebb, lépésekben (stop) |
| {{ui:Ground under the model}} | Olyan talaj, amely felveszi az árnyékokat, és elmosódik a horizontban. Lebegő modellnél kapcsolja ki |
| {{ui:Draw edges}} | A modell éleit vékonyan rajzolja a kép fölé, rajzos hatáshoz |

Ha a nap a kiválasztott időpontban a horizont alatt van, éjszaka van: az égbolt elsötétül, a modellt pedig a [lámpák](topic:lights) világítják meg. A párbeszédpanel ezt jelzi.

A beállítások a `.modelcraft` fájlban mentődnek, így a modell következő képe ott folytatódik, ahol abbahagyta.

## Üveg vagy fém hatása a színekben

A {{ui:Materials}} alatt minden képernyőn látható színnek van hatása: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} vagy {{ui:Frosted glass}}. A {{ui:Unpainted faces}} azok a lapok, amelyeknek nincs saját színük.

Hogy az ablakok üvegnek látszanak, [fesse](topic:paint) az ablaktáblákat egy színnel, majd ezt a színt állítsa erre: {{ui:Glass}}. Az üveg átengedi az eget és a mögötte lévőt, a saját színével színeződik, és visszatükrözi az eget.

:::note
A {{ui:Fast}} módban az üveg és a fém az eget tükrözi, nem a modell többi részét, és a fény nem törik meg az üvegen. A lent leírt {{ui:High quality (path traced)}} mód mindkettőt megteszi.
:::

## Nagy minőség

Válassza a {{ui:Mode}} › {{ui:High quality (path traced)}} beállítást olyan képhez, amely úgy követi a fényt, ahogy a kamera látja:

- a fény a felületek között verődik, így az ablakon vagy lámpán át megvilágított szoba minden oldalról világos, a színek pedig átterjednek a szomszédokra;
- az üveg valódi üveg: a fény megtörik rajta, és visszatükrözi a modellt;
- a fém és a polírozott felületek visszatükrözik a modell többi részét;
- a fénypanelek panelekként világítanak, lágy árnyékokkal.

Sokkal lassabb, mint a {{ui:Fast}}: minden menetben a fény minden képpontra újra végigkövetődik. A kép kezdetben szemcsés, és ahogy a minták összeadódnak, kitisztul. Ezért kezdjen kicsiben ({{ui:The view's size}}, {{ui:Draft}}), és állítson be {{ui:Time limit}} időkorlátot: ha lejár, a kész rész megmarad. A {{ui:Stop}} is megtartja. Az első menet addig vár, amíg a böngésző előkészíti az útkövetőt.

Ha a böngészőnek van WebGPU-ja, az útkövető a CadCraft saját megoldása, és a videókártyán fut; a kép alatti sor ezt mondja: {{ui:Path traced on the graphics card (WebGPU)}}. A {{ui:Stop}} vagy az időkorlát után a {{ui:Resume}} ugyanazzal a képpel folytatja, amíg meg nem kapja az összes mintát; egy beállítás módosítása vagy a {{ui:Render}} újbóli megnyomása újrakezdi. WebGPU nélkül a kép WebGL-lel készül (a sor ezt is jelzi), és a {{ui:Resume}} nem elérhető.

:::linux
A Firefoxban és a legtöbb Chrome-beállításban Linuxon még nincs WebGPU, ezért ott a nagy minőség a WebGL-t használja.
:::

Ebben a módban az élek nem rajzolódnak, a könyvtári textúrák a színüket és az érdességüket mutatják, de a domborzatukat nem (a [csomópontokkal készített anyag](topic:shading#in-high-quality-pictures) a normálját és a dombornyomását is mutatja), a metszetvágás pedig a kép kezdete előtt készül el a modellen.

A {{ui:Denoise (clears the grain left after the samples)}} alapértelmezés szerint be van kapcsolva: a kép elkészültekor vagy megállításakor a megmaradt szemcsét erre készített neurális háló tisztítja meg (az Intel Open Image Denoise nyilvánosan közzétett hálója, a saját számítógépen fut: a videókártyán, ha ott nincs, a processzoron). Kevés mintával készült kép is tiszta lesz; a {{ui:Show}} › {{ui:The picture before denoising}} a renderelt állapotot mutatja.

## Renderelés a nézetben

A {{ui:Render}} munkaterület az útkövetőt magában a nézetben futtatja: forgatja, szerkeszti a modellt vagy módosít egy lámpát, és azonnal újraindul. {{ui:Region}}: húzzon egy téglalapot, és csak az renderelődik; a {{ui:Whole view}} visszaállítja. {{ui:Focus}}: kattintson arra, aminek élesnek kell lennie, és a mélységélesség ott fókuszál. A {{ui:Detail}} megadja, hány képpontot renderel a nézetből (kevesebb gyorsabb). A {{ui:Pause}} megáll, és tovább is megy. WebGPU kell hozzá: nélküle a munkaterület ezt jelzi, az {{ui:Export}} › {{ui:Render a picture…}} viszont továbbra is működik.

## Égboltok és fényprofilok a videókártyán

WebGPU-val a nagy minőség két további égboltot kínál:

- A {{ui:Physical sky}} a napmagasságból számolja ki a nappali fényt: mélykék az égen, halvány sáv a horizonton, a nap pedig melegebb és halványabb lesz, ahogy alacsonyra ér. A {{ui:Haze}} a nagyon tiszta napot (2) és a párásat (10) közötti skálán állítja.
- A {{ui:Sky picture (HDRI)}} a modellt egy valódi hely panorámaképével világítja meg. A {{ui:Choose a picture…}} egy equirectangular `.hdr` vagy `.exr` fájlt vesz; a {{ui:Turn}} a modell körül forgatja, a {{ui:Picture brightness}} pedig világosabbá vagy sötétebbé teszi. A kép saját napot hordoz, így a modell napja nem adódik hozzá. Csak addig marad meg, amíg az oldal nyitva van: újranyitás után újra ki kell választani.

A {{ui:Lamps}} listájában minden lámpa kaphat gyártói fényprofilt: az {{ui:IES profile…}} egy IES (LM-63) fájlt olvas be, és a lámpa úgy veti a fényét, ahogy az adott lámpatest (keskeny lefelé világító lámpa, falmosó). Az azonos nevű lámpák mind ezt használják, a lámpa pedig megtartja a saját fényerejét. A profil nevére kattintva nem használja tovább.

A tiszta üvegből készült ablakok segítik az égbolt fényét bejutni a szobába, így a belső képek égbolt alatt hamarabb tisztulnak.

A {{ui:Fast}} mód és a WebGL útkövető a {{ui:Physical sky}} és a {{ui:Sky picture (HDRI)}} égboltot tiszta égboltként jeleníti meg, a fényprofilokat pedig nem veszi figyelembe.

## A kamera

A {{ui:Camera}} a képet fényképszerűen állítja be:

- {{ui:Exposure}}: tartsa a {{ui:Brightness slider}} értéket, vagy válassza a {{ui:Camera settings}} lehetőséget, és állítsa be a {{ui:Aperture (f-stop)}}, a {{ui:Shutter speed}} és az {{ui:ISO}} értékét, mint egy fényképezőgépen; a mellettük lévő EV a szokásos expozíciós érték. f/16, 1/100 s és ISO 100 mellett egy napsütéses napnak felel meg; egy sötétebb jelenethez szélesebb rekesz, lassabb zár vagy nagyobb ISO kell. Ez minden módban működik.
- A {{ui:Depth of field}} elmossa azt, ami a {{ui:Focus distance (m)}} távolságnál közelebb vagy messzebb van, ahogy egy ilyen f-számú lencse tenné (ha a nézet közepére szeretne fókuszálni, hagyja üresen); a {{ui:Aperture shape}} a fókuszon kívüli fényfoltoknak kerek vagy lamellás alakot ad.
- A {{ui:Two-point perspective (vertical lines stay vertical)}} vízszintbe állítja a kamerát, és eltolja a képet, ahogy egy építészeti tilt-shift lencse, így a falak nem dőlnek el, amikor felfelé vagy lefelé néz egy épületre.
- A {{ui:White balance}} megadja, melyik fényszín látszik fehérnek: alacsonyabb (például 3000 K) a meleg lámpafényhez, magasabb az árnyékhoz és a borult napokhoz.
- A {{ui:Projection}}: a {{ui:360° panorama}} 2:1 arányú képet készít a kamera körüli mindenről panorámanézegetőkhöz; a {{ui:360° stereo panorama}} egy bal- és egy jobb szemes panorámát egymás alá tesz fejhallgatóhoz; a {{ui:Cube map (6 faces)}} hat négyzet alakú nézetet készít 3 × 2-es rácsban. A szélesség a {{ui:Size}} beállításból adódik.

A vetítés, a mélységélesség, a kétpontos perspektíva és a fehéregyensúly a videókártyán futó útkövetőt igényli (WebGPU), ezért csak a {{ui:High quality}} módban láthatók.

## A kép befejezése

A {{ui:Picture}} fényképszerűen színezi a nagy minőségű képet, és minden vezérlő azonnal módosítja a kész képet, újrarenderelés nélkül:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (a kép az eddigi), {{ui:AgX}} (lágyabb, nagyon erős fényben is megtartja a színt), {{ui:Filmic}} (finom filmgörbe) vagy {{ui:Standard}} (sima; a nagyon erős fény fehérbe vág).
- {{ui:Contrast}} és {{ui:Highlight compression}} (a nagyon fényes részek részletét visszahozza).
- {{ui:Bloom}} (lágy izzás az erős fény körül), {{ui:Glare}} a hozzá tartozó {{ui:Glare streaks}} beállítással (csillag alakú sugarak a legfényesebb pontokból) és {{ui:Vignette}} (sötétebb sarkok).
- A {{ui:Colour table (.cube)…}} színes utómunkát alkalmaz egy `.cube` fájlból, a hozzá tartozó {{ui:Colour table strength}} beállítással; égképhez hasonlóan csak addig marad meg, amíg az oldal nyitva van.

## A kép mentése

A {{ui:Save as}} a {{ui:Save}} mellett választja ki a fájlt: {{ui:PNG}}, {{ui:JPEG}} vagy {{ui:WebP}} megosztáshoz (a JPEG és a WebP csak ott, ahol a böngésző tudja írni őket), és videókártyás nagy minőségű renderelés után még:

- {{ui:PNG, 16 bits}}: a színezett kép finomabb árnyalatlépcsőkkel, nyomtatáshoz vagy további szerkesztéshez.
- {{ui:EXR, every layer (32-bit float)}}: a kép úgy, ahogy renderelődött (lineáris fény, szín nélkül), minden renderelemmel és fénycsoporttal külön rétegként, kompozitáló programokhoz.
- {{ui:Render file (.ccrender, to grade again later)}}: minden, amire a párbeszédpanelnek szüksége van a kép újrakeveréséhez és színezéséhez. A {{ui:Open a render file…}} visszahozza azt a keveréssel és a színezéssel együtt, renderelés nélkül.

## Fények keverése renderelés után

Mielőtt megnyomja a {{ui:Render}} gombot, kapcsolja be a {{ui:Light mixing (change each light's colour and brightness after the render)}} beállítást. A kép elkészültekor (vagy megállításakor) a {{ui:Mix the picture}} csoportokba sorolja a lámpákat: az eget, a napot, a lámpákat név szerint (minden azonos nevű lámpa egy csoport). Kapcsoljon ki egy csoportot, adjon neki színt, vagy tegye világosabbá vagy sötétebbé, és a kép azonnal változik, renderelés nélkül. A {{ui:Save mix}} a keveréket névvel menti, hogy később újra kiválaszthassa; az {{ui:As rendered}} visszaállítja a kép eredeti állapotát. A {{ui:Save}} a kevert képet menti.

A {{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} a kép részeit is megtartja. A {{ui:Show}} a nézetet átkapcsolja valamelyikre: a felületi színekre (albedó), a normálokra, a mélységre, a diffúz, a spekuláris és az áteresztett fényre (mindegyiket közvetlenül és közvetve), arra, ami világít, és az égre, valamint objektumonként vagy anyagonként egy színre, maszkok készítéséhez.

Mindkettő extra rétegeket tart a videókártyán. Nagy méretnél előfordulhat, hogy a kártyán nincs elég hely; a párbeszédpanel ezt jelzi, és egy kisebb méret működik.

## A renderelési sor

Egy nagy minőségű beállítás után a {{ui:Render queue}} alatti {{ui:Add this picture to the queue}} a kép jelenlegi beállítását megtartja; az animáció párbeszédpanel {{ui:Add this animation to the queue}} gombja ugyanezt teszi egy teljes animációval, képkockánként útkövetve. A {{ui:Start the queue}} egymás után rendereli őket ezen a számítógépen, és minden kész elem mellett a {{ui:Save}} letölti azt. Az oldal bezárásakor a sor megmarad: ugyanazt a modellt megnyitva ott folytatódik, ahol abbahagyta. A sorhoz WebGPU kell.

## Köd, füst, zaj és kausztikák

Ezek a {{ui:Fog, smoke and noise}} alatt vannak, és a videókártyán futó {{ui:High quality}} módban működnek; a többi motor kihagyja őket.

- A {{ui:Fog and haze}} egy magasságig tölti meg a levegőt olyan párával, amelyet a nap, az égbolt és a lámpák megvilágítanak. A {{ui:How far you can see, in meters}} megadja, milyen sűrű (kb. 100 m enyhe pára, 20 m sűrű köd), a {{ui:Fog height above the ground, in meters}} azt, meddig ér, a {{ui:Light shafts}} pedig azt szabályozza, mennyire izzik a pára a fény irányába. A napfény a köd tetején lép ki, ezért ahol a nap ablakon vagy épületek között átjön, fénysugarakként látszik.
- A {{ui:Smoke or cloud}} egy térfogatnyi füstöt vagy felhőt ad hozzá, a ködhöz hasonlóan megvilágítva. A {{ui:Kind}} lehet {{ui:Cloud}}, {{ui:Smoke column}} vagy {{ui:From a volume file (.ccvol)}}, ami a CadCraft saját rácsformátuma. A {{ui:Detail}} és a {{ui:Variation}} a kész felhőt vagy füstoszlopot módosítja; a {{ui:Size of its longest side, in meters (0 = the size of the model)}}, a {{ui:Move X (m)}}, a {{ui:Move Y (m)}}, a {{ui:Move Z (m)}} és a {{ui:Turn}} helyezi el (a modell közepén indul); a {{ui:Thickness}} sűrűbbé, a {{ui:Forward glow}} a fény felé világosabbá teszi, a {{ui:Color}} pedig színezi. A térfogatfájl csak addig marad meg, amíg az oldal nyitva van, egy égképhez hasonlóan.
- A {{ui:Stop early where the picture is clean (adaptive sampling)}} nem ad több mintát azoknak a képpontoknak, amelyek megnyugodtak, így a kép többi része hamarabb kész lesz. A {{ui:Noise to accept}} azt adja meg, mennyi szemcse marad, amikor egy képpont megáll. A kép alatti sor azt mondja, átlagosan hány mintát kapott egy képpont.
- A {{ui:Caustics (light bent by glass or bounced by mirrors)}} a lámpáktól és a napból követi a fényt, így az üveggömb alatti fényfolt vagy a tükör fénye a falon tisztán jelenik meg, nem szemcsésen. Kikapcsolva marad, ha a köd, a füst, a Fények keverése renderelés után vagy a renderelemek be vannak kapcsolva; képekhez készült, nem 360°-os képekhez, animációhoz vagy a {{ui:Render}} munkaterülethez.

## Mennyi ideig tart

A képet a saját számítógépe készíti el, a videókártyája segítségével; semmi sem töltődik fel. Az idő a menetek és a képpontok számával nő. A {{ui:Best}} minőség 16-szor annyi menetet tartalmaz, mint a {{ui:Draft}}, a 4K kép pedig körülbelül négyszer annyi képpontot, mint a Full HD. Videókártya nélküli számítógép is renderel, csak lassabban.

:::note
Ha a párbeszédpanel azt mondja, hogy a böngésző nem tud képet renderelni, a böngészőben nincs WebGL 2. Frissítse, vagy kapcsolja be a hardveres gyorsítást a beállításaiban.
:::
