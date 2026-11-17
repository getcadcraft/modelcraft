---
title: Podrobno o formatih datotek
summary: Natančno, kaj vsak format, ki ga ModelCraft odpre, uvozi ali izvozi, ohrani, pretvori in izpusti.
keywords: formati, vrste datotek, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, predpomnilnik, cache, fbx, 3mf, ifc, dwg, dxf, enote, osi, z navzgor, y navzgor, milimetri, omejitve
from: c47d2d28
---

Model ModelCraft je v metrih, z osjo Z (modro) navzgor. Vsak spodnji format se pretvori v to ali iz tega.

## ModelCraft (.modelcraft)

| Kaj | Podrobnosti |
|---|---|
| Odpri | {{ui:Open}} ({{key:Mod+O}}) ali spustite na pogled. Sprejete so tudi datoteke, ki končajo na `.json` |
| Shrani | {{ui:Save}} ({{key:Mod+S}}), kot prenos |
| Ohrani | Vse: geometrijo, ploskve in njihove barve, materiale in uvožene teksture, svetilke, mehke robove, skupine, komponente, imena, vodila, prizore, enote ter zadnjo kamero in slog |
| Izpusti | Zgodovino razveljavitev |
| Omejitev | 200 MB |

Datoteka, shranjena z novejšim ModelCraftom, kot je vaš, je zavrnjena: „Ta model je shranjen z novejšim ModelCraftom (različica datoteke …). Posodobite ModelCraft, da ga odprete.“ Datoteka, ki ni model ModelCraft, pravi „To ni model ModelCraft (ni JSON).“ ali „To ni datoteka ModelCraft, ki jo lahko odpremo: …“

## USD (.usd, .usda, .usdc, .usdz)

Odprite, uvozite ter {{ui:Save as}} ali {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Datoteka USD, ki jo shrani ModelCraft, se ponovno odpre brez izgub; datoteke USD drugih programov se odprejo kot mreže, skupine, komponente, svetilke in kamere. Glejte [Shranjevanje, odpiranje in izvoz USD](topic:usd).

## Collada (.dae)

Uvoz in izvoz. Najboljši format za izmenjavo modelov z drugimi 3D-modelirniki.

- **Izvoz:** Collada 1.4.1, Z navzgor, metri. Ena geometrija na definicijo skupine ali komponente; komponente se zapišejo enkrat in se postavijo s sklicem, zato ostanejo deljene. Ploskve z luknjami ali konkavnimi obrisi se razdelijo na trikotnike. Barve postanejo materiali. Prosti robovi se zapišejo kot črte. Imena, ki v formatu niso veljavna, se prilagodijo, točno ime pa se ohrani ob njem.
- **Uvoz:** trikotniki, mnogokotniki (z luknjami), trikotne vejice (fan) in pasovi (strip) postanejo ploskve; črte postanejo robovi. Uporabijo se transformacije vozlišč, glavna os datoteke in njena enota. Vozlišče, postavljeno na več mestih, ali geometrija, ki jo uporablja več vozlišč, pride kot komponenta; druga vozlišča pridejo kot skupine. Barve materiala (diffuse) postanejo barve ploskev.
- **Ni uvoženo:** teksture, skini in morfi, kamere, svetilke, nekatere vrste transformacij (look-at in skew) ter sklici na druge datoteke. Vrstica stanja jih prešteje.
- **Izgubljeno pri izvozu:** katere robovi so mehki. **Pri uvozu** trikotniške površine ostanejo trikotniki, z zmehčanimi diagonalami, da ravna območja še vedno delujejo kot ena površina.

## OBJ (.obj, .mtl)

Uvoz in izvoz.

- **Uvoz:** spustite `.obj` skupaj z njegovo `.mtl` in slikami tekstur (ali uvozite samo `.obj`: pride brez materialov, vrstica stanja pa navede `.mtl`, ki ga je želel). Prebere se v metrih z osjo Y navzgor. Vsak predmet (`o`, sicer `g`) postane [mreža](topic:meshes), njegove ploskve ohranjene kakršne so (štirikotniki ostanejo štirikotniki). Teksturne koordinate, normale in barve po ogljiščih se ohranijo. Slika barve materiala (`map_Kd`, PNG, JPEG ali WebP) pride kot tekstura s svojimi možnostmi merila in odmika; sicer njegova barva (`Kd`). Robovi, kjer normale datoteke popustijo, so trdi; brez normal odločajo gladilne skupine datoteke. Druge karte (bump, normal), točke, črte in krivulje se preštejejo in izpustijo. OBJ nima enote, zato model, narejen v milimetrih ali palcih, pride v napačni velikosti: po uvozu ga skalirajte (glejte [Zasukaj in spremeni merilo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Izvoz:** metri, Y navzgor, svetovne koordinate. En predmet na postavitev skupine; komponente se zapišejo v celoti na vsakem mestu. Mreže ohranijo svoje ploskve, teksturne koordinate in normale; ploskve, povezane z [mehkimi robovi](topic:soften), dobijo normalo na vsakem ogljišču. Ko ima model barve, se ob `.obj` prenese `.mtl`. Ko ima uvožene teksture, se `.obj`, `.mtl` in slike prenesejo skupaj kot en `.zip`.
- **Omejitev:** 2 milijona oglišč ali ploskev; 64 MB besedila.

## glTF (.glb, .gltf)

Uvoz in izvoz, glTF 2.0.

- **Uvoz:** `.glb` ali `.gltf` skupaj z njegovima `.bin` in datotekama tekstur: spustite jih na pogled vse naenkrat (ali izberite `.glb`). Samostojen `.gltf` navede datoteko, ki jo potrebuje: „Ta datoteka .gltf potrebuje „…“: odprite različico .glb ali spustite .gltf skupaj z njegovimi datotekami.“
  - **Mreže** pridejo kot [mreže](topic:meshes), ena na mrežo v datoteki, z ohranjenimi normalami, teksturnimi koordinatami in barvami oglišč datoteke. Robovi, kjer normale datoteke popustijo, so trdi; ostali so mehki. Mreža, uporabljena na več mestih, ostane deljena.
  - **Vozlišča** postanejo skupine, poimenovane kot v datoteki. Instancirane mreže (EXT_mesh_gpu_instancing) pridejo kot ena mreža, postavljena večkrat.
  - **Materiali:** tekstura osnovne barve (PNG, JPEG ali WebP) pride kot tekstura, postavljena po teksturnih koordinatah datoteke (z morebitno transformacijo teksture), in se ohrani pri shranjevanju; sicer osnovna barva. Kovina, hrapavost, normalne karte, steklo, prozoren premaz, sijaj in druge razširitve materialov se preberejo, a še niso ohranjene: vrstica stanja to pove.
  - **Svetilke** (KHR_lights_punctual): točkovne in reflektorske luči postanejo [svetilke](topic:lights). Usmerjene luči se štejejo: sonce osvetljuje model.
  - **Kamere** postanejo [prizori](topic:scenes).
  - **Skeletirani liki** pridejo stoječi, kot jih datoteka postavi; njihove kosti, animacije in morfne tarče se preštejejo in še niso ohranjene.
  - **Stisnjene datoteke** (Draco, meshopt) in kvantizirani podatki se preberejo. Dekoderji se naložijo samo za datoteke, ki jih potrebujejo.
  - Točke in črte se preštejejo in izpustijo (mreža vsebuje ploskve). Teksture KTX2 se izpustijo; ploskve ohranijo barvo.
- **Izvoz** (`.glb`): glTF 2.0 binarno, metri, Y navzgor. Ena mreža na definicijo, zato komponente ostanejo deljene. Mreže ohranijo normale, teksturne koordinate in barve oglišč; ploskve, povezane z [mehkimi robovi](topic:soften), nosijo gladke normale. Barve in materiali postanejo materiali (material kot barva); uvožene teksture se zapišejo kot teksture. Vklopljene svetilke postanejo točkovne in reflektorske luči (ploskovne svetilke nimajo ekvivalenta v glTF in se izpustijo); prizori postanejo kamere. Prosti robovi se izpustijo.
- **Omejitev:** datoteke do 300 MB; približno 130 milijonov števil geometrije.

## STL (.stl)

Uvoz in izvoz.

- **Uvoz:** binarno ali ASCII. STL nima enote: prebere se kot **milimetri**, tako kot jih pišejo tiskalniki in lastni izvoz ModelCraft. Oglišča na isti točki se združijo, zato zaprt del pride kot zaprta [mreža](topic:meshes). Barve v datoteki (konvencije VisCAM / SolidView in Materialise) pobarvajo ploskve.
- **Izvoz** za 3D-tiskanje: binarni STL, **milimetri**, Z navzgor. Samo trikotniki: skupine in prosti robovi se izpustijo. Pobarvane ploskve nosijo svojo barvo v konvenciji VisCAM / SolidView, ki jo drugi programi ignorirajo, če je ne berejo. Za čist tisk izvozite zaprta telesa.

## STEP (.step, .stp)

Samo uvoz. STEP je tisto, kar pošiljajo proizvajalci delov in dobavitelji: datoteke AP203, AP214 in AP242.

- **Uvoz:** ModelCraft sam prebere datoteko na strani in vsako telo spremeni v zaprto [mrežo](topic:meshes) trikotnikov: ravne ploskve ostanejo ravne, ukrivljene ploskve (valji, stožci, krogle, tori, ploskve B-zlepkov) pa postanejo veliko majhnih ravnih; robovi znotraj ene ukrivljene ploskve so mehki, robovi med dvema ploskvama pa ostri. Datoteke STEP povedo svojo enoto; model pride v pravi velikosti. Sestav pride z vsakim delom tam, kjer ga datoteka postavi; vsak del je svoja mreža v skupini, poimenovani po datoteki. Barve, imena delov iz drevesa sestava in tolerance (PMI) se ne berejo.
- **Sporočila:** kaj je bilo preskočeno ali narisano bolj grobo, se doda v vrstico stanja („Opombe: …“); datoteka brez telesa, poškodovana datoteka ali datoteka čez omejitve to pove in ničesar ne doda.
- **Omejitev:** datoteke do 300 MB; 400 000 ploskev in 8 milijonov trikotnikov.

## .3dm

Samo uvoz. Datoteke `.3dm` hranijo modele NURBS: polyploskve, ploskve, mreže, krivulje in bloke.

- **Uvoz:** ModelCraft sam prebere datoteko na strani. Mreže pridejo, kakršne so; vsaka ploskev polyploskve ali izvlečka pride iz upodobitvene mreže, shranjene z njo v datoteki, sicer jo ModelCraft razčleni na mrežo (ravnine, ploskve NURBS, površine vrtenja, izvlečene krivulje, izvlečki; obrezane z njihovimi robovi, zaprte polyploskve kot zaprte mreže). Krivulje postanejo robovi, bloki postanejo komponente (bloki v blokih ohranjeni), sloji postanejo oznake (skrite, kadar so izklopljene), barva predmeta (njegova lastna, njegovega sloja ali njegovega materiala) pa pobarva njegove ploskve. Datoteka pove svojo enoto; model pride v pravi velikosti. Korak za korakom: [Uvoz modela .3dm](topic:import-3dm-files).
- **Sporočila:** vrstica stanja pove, koliko ploskev je prišlo iz shranjenih mrež in koliko jih je bilo razčlenjenih, ter navede, kaj je bilo izpuščeno: točke, oblaki točk, besedilo, kote, šrafure, svetilke, predmeti SubD, ploskve na vrstah površin, ki še niso prebrane, povezani bloki.
- **Omejitev:** datoteke do 300 MB.

## PLY (.ply)

Uvoz in izvoz, za mreže z barvami (skeniranja, 3D-tiskanje v barvah, drugi modelirniki).

- **Uvoz:** ASCII in binarno. Ploskve postanejo [mreža](topic:meshes) z ohranjenimi normalami, teksturnimi koordinatami in barvami oglišč; vsaka ploskev se pobarva z najbližjo od 4.096 barv, da že zdaj vidite barve. PLY nima enote ali konvencije osi: koordinate pridejo kakršne so (metri, Z navzgor). PLY samo s točkami je oblak točk: odprite ga v BimCraft ali CivilCraft.
- **Izvoz:** binarni PLY s položaji, normalami in barvami (ter teksturnimi koordinatami, če jih ima model), v metrih, Z navzgor.

## FBX (.fbx)

Samo uvoz. Datoteke FBX 7 (od leta 2011 naprej), binarne ali ASCII, prebere lasten bralnik ModelCraft.

- Mreže pridejo kot [mreže](topic:meshes) z normalami, teksturnimi koordinatami (vsak nabor UV) in barvami oglišč; mreža, ki jo uporablja več predmetov, ostane deljena. Predmeti postanejo skupine s svojimi transformacijami (vključno s pivoti, odmiki in predrotacijami).
- Materiali: difuzna tekstura — vdelana v datoteko ali slika, spuščena skupaj s `.fbx` — pride kot tekstura (slike TGA se ohranijo kot PNG); sicer difuzna barva. Druge nastavitve materialov čakajo na nov model materialov.
- Osi navzgor in enota datoteke se uporabita: vse pride Z navzgor, v metrih.
- Točkovne in reflektorske luči postanejo [svetilke](topic:lights) (intenzivnost 100 v FBX je privzeta svetilka ModelCraft, 800 lumnov: intenzivnosti FBX nimajo enote). Kamere postanejo [prizori](topic:scenes).
- Skeletirani liki pridejo v mirovanju; kosti in animacije se preštejejo in še niso ohranjene. Usmerjene in ploskovne luči ter geometrija, ki ni mreža (NURBS, krivulje), se preštejejo in izpustijo.
- Datoteke FBX 6 in starejše so zavrnjene: shranite jih znova kot FBX 2011 ali novejši.

## Alembic (.abc)

Samo uvoz: predpomnilniki geometrije iz programov za animacijo in učinke.

- Mreže (poligonske in podrazdeljene) pridejo kot [mreže](topic:meshes), s svojimi teksturnimi koordinatami in normalami; transformacije postanejo skupine. Alembic je Y navzgor in se obrne na Z navzgor; metri.
- Predpomnilnik z veliko vzorci (animacija) pride s svojim prvim vzorcem; vrstica stanja pove, koliko jih ima.
- Točke, krivulje, površine NURBS, kamere in svetilke se preštejejo in izpustijo. Datoteke v stari postavitvi HDF5 so zavrnjene: shranite jih znova kot datoteko Ogawa Alembic.

{{ui:Check for 3D printing (STL or 3MF)…}} najprej preveri obliko in zapiše izbor ali vse prikazano. Glejte [Priprava modela za 3D-tiskanje](topic:print-3d).

## 3MF (.3mf)

Samo izvoz, iz {{ui:Check for 3D printing (STL or 3MF)…}}. 3MF jedro: ena mreža v **milimetrih**, Z navzgor, z barvami kot materiali. Večina slicerjev ga bere, za razliko od STL pa pove svojo enoto. Skrite stvari se izpustijo. Glejte [Priprava modela za 3D-tiskanje](topic:print-3d).

## Izvoz DWG in DXF (.dwg, .dxf)

Za programe CAD. Model se zapiše v svoji enoti: palci za modele v čevljih in palcih, sicer milimetri, centimetri ali metri (vrstica stanja jo navede).

- **Ploskve** postanejo 3D-ploskve (trikotniki). Črte znotraj ploskve in mehki robovi se zapišejo kot nevidne, zato so ploskve videti kot v ModelCraft.
- **Prosti robovi** postanejo črte.
- **Skupine in komponente** postanejo bloki: komponenta se zapiše enkrat in postavi tolikokrat, kolikor se uporablja, vključno z obrnjenimi in zrcaljenimi kopijami. Skupina, ki je bila raztegnjena potem ko je bila obrnjena (zato nagnjena), se namesto tega zapiše na mestu.
- **Barve:** DWG ohrani barvo vsake ploskve natančno; DXF uporabi najbližjo od 255 standardnih barv CAD.
- **Različice:** DWG se zapiše kot AutoCAD 2004 (AC1018), ki ga programi CAD od leta 2004 naprej odprejo. DXF je R12 (AC1009), različica, ki jo bere vsak program CAD; R12 nima polja za enoto, zato programu CAD povejte, katero enoto naj uporabi.
- **Ni zapisano:** vodila, kote, prizori in kamera.

## IFC (.ifc)

Samo izvoz, za BimCraft in druge programe BIM. IFC4 s projektom, lokacijo, zgradbo in njenimi etažami. Vsaka skupina ali komponenta na najvišji ravni postane en posrednik gradbenega elementa z imenom; zaprte se zapišejo kot telesa (oblike brep), odprte kot modeli površin; luknje v ploskvah se ohranijo. Prosta geometrija na najvišji ravni postane en element z imenom "Loose geometry". Brez tipov, lastnosti in materialov.

**Etaže:** {{ui:Export}} › {{ui:IFC storeys…}} jih našteje, vsako z imenom in višino ({{ui:Add storey}} ali {{ui:Guess from the model}}, ki naredi eno etažo za vsako višino, na kateri stojijo vaše skupine na najvišji ravni). Ob izvozu gre vsaka skupina ali komponenta na etažo na ali pod svojo najnižjo točko in ohrani svoje mesto. Brez etaž gre vse na eno etažo, „Level 1“, na višino 0. Etaže se shranijo v datoteko ModelCraft.

## DWG (.dwg) in DXF (.dxf)

Uvoz kot črte na tleh (šrafure in 3D-ploskve kot ploskve); izvoz kot je opisano zgoraj. Glejte [Model na situacijskem načrtu](topic:site-plan).

- **Branje:** črte, polilinije (z loki), 3D-polilinije, krožnice, loki in sklici na bloke, vključno z nizi, iz prostora modela. Nevidni predmeti (na primer skrita stanja dinamičnega bloka) se izpustijo. Krivulje postanejo 48 ravnih kosov na poln obrat.
- **Branje od različice 0.4:** zlepki in elipse (kot robovi), besedilo, večvrstično besedilo in vrednosti atributov (kot robovi v enovrstičnem pisanju), šrafure (ploskve z luknjami), 3D-ploskve in polne zapolnitve (ploskve) ter kote (narisane iz lastnih blokov kot v risbi).
- **Branje od različice 0.7:** 3D-telesa, področja in telesa (njihovi podatki ACIS, DWG in DXF vseh različic), vsako kot svojo skupino, zaprta kot telesa. Ploskve na površinah, ki niso ravnine, valji, stožci, krogle, tori in preprosti zlepkasti površini, se izpustijo in navedejo.
- **Ni branja:** točke, tabele, večkratne vodilke, slike in vse v prostoru papirja.
- **Enote:** vzamejo se iz risbe, kadar jih navaja. Če ne, ModelCraft vpraša.
- **DXF** mora biti ASCII. Binarni DXF je zavrnjen.
- **DWG** datoteke od AutoCAD R13 do trenutne oblike (AutoCAD 2018 in novejši; AC1012 do AC1032) prebere lasten bralnik DWG ModelCraft na strani; ker je del ModelCraft, deluje brez povezave, kadar deluje ModelCraft. Starejših različic (R12 in starejših) in močno poškodovanih datotek ni mogoče prebrati; shranite jih kot DXF.
- **Omejitve:** koordinate več kot 10.000 km od izhodišča ali več kot 2 milijona kosov črt se zavrnejo.

## Datoteke SKP

{{ui:Import}} (ali spustite datoteko na pogled) prebere datoteke SketchUp z lastnim bralnikom ModelCraft na strani: nič se ne naloži nikamor, deluje brez povezave, kadar deluje ModelCraft. Preizkušeno z datotekami SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 in 2026; druge različice naj se odprejo, a še niso bile preizkušene. Model pride kot ena skupina, poimenovana po datoteki. En {{key:Mod+Z}} ga odstrani. Korak za korakom: [Uvoz modela SKP](topic:import-sketchup-files).

- **Ohranjeno:** ploskve z luknjami, skupine (kot skupine), komponente (kot komponente, deljene), njihova imena in postavitve, barve, oznake na skupinah in komponentah, robovi, ki niso del ploskve, ter mehki in gladki robovi, da ukrivljene površine ostanejo gladke.
- **Barve:** lastni material ploskve da njeno barvo. Material, nanesen na skupino ali komponento, postane barvanje te postavitve, zato ploskve znotraj, ki nimajo svoje barve, prevzamejo to barvo, kot v SketchUp; komponenta, pobarvana z dvema barvama, ostane ena komponenta.
- **Oznake** na skupinah in komponentah postanejo oznake ModelCraft, prikazane ali skrite, kot so bile. Oznake na prostih ploskvah in robovih se ne ohranijo (ModelCraft označuje samo skupine in komponente); vrstica stanja jih prešteje.
- **Skrite stvari pridejo skrite** (ploskve, robovi, skupine, komponente ter ploskve in robovi na skritih oznakah), tako da vidite, kar je pokazal SketchUp; {{ui:Unhide all}} jih prikaže.
- **Teksture:** ploskev, pobarvana s teksturiranim materialom, ohrani teksturo, postavljeno kot v datoteki, datoteka ModelCraft pa ohrani sliko. Tekstura na celotni skupini ali komponenti, tekstura, ki v datoteki manjka, ali slika, ki je brskalniki ne prikažejo (na primer datoteka Photoshop), ohrani samo barvo materiala.
- **Izpuščeno, prešteto v vrstici stanja:** slike, postavljene v model. Besedilo, kote, vodila, prerezne ravnine, prizori in slogi se ne preberejo.
- **Enote:** datoteke SketchUp so v notranjosti v palcih; ModelCraft jih pretvori, zato velikosti pridejo pravilne v kateri koli enoti.
- **Shranjevanje `.skp`** še ni izdelano. Za vrnitev modela v SketchUp izvozite Collada (`.dae`).

## Ni podprto

ModelCraft ne more odpreti datotek 3DS ali IFC, ne more pa shraniti datotek 3DS, FBX, STEP, `.3dm` ali SketchUp (`.skp`).
