---
title: Failu formāti sīkāk
summary: Precīzi, ko katrs formāts, ko ModelCraft atver, importē un eksportē, saglabā, pārvērš un izlaiž.
keywords: formāti, failu tipi, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, kešs, fbx, 3mf, ifc, dwg, dxf, mērvienības, asis, Y uz augšu, Z uz augšu, milimetri, ierobežojumi
from: c47d2d28
---

ModelCraft modelis ir metros ar Z (zilo) asi uz augšu. Katrs tālāk minētais formāts tiek pārvērsts uz vai no tā.

## ModelCraft (.modelcraft)

| Kas | Sīkāk |
|---|---|
| Atvērt | {{ui:Atvērt}} ({{key:Mod+O}}) vai nomest skatā. Faili, kas beidzas ar `.json`, arī tiek pieņemti |
| Saglabāt | {{ui:Saglabāt}} ({{key:Mod+S}}), kā lejupielādi |
| Saglabā | Viss: ģeometrija, virsmas un to krāsas, materiāli un importētās tekstūras, lampas, mīkstās malas, grupas, komponenti, nosaukumi, palīglīnijas, ainas, mērvienības un pēdējā kamera un stils |
| Izlaiž | Atsaukšanas vēsturi |
| Ierobežojums | 200 MB |

Fails, kas saglabāts ar jaunāku ModelCraft nekā jūsu, tiek noraidīts: "Šis modelis ir saglabāts ar jaunāku ModelCraft (faila versija …). Atjauniniet ModelCraft, lai to atvērtu." Fails, kas nav ModelCraft modelis, saka: "Šis fails nav ModelCraft modelis (tas nav JSON)." vai "Šis nav ModelCraft fails, ko mēs varam atvērt: …".

## USD (.usd, .usda, .usdc, .usdz)

Atvērt, importēt un {{ui:Saglabāt kā}} vai {{ui:Eksportēt}} › {{ui:USD (.usda, .usdc, .usdz)…}}. USD fails, ko ModelCraft ir saglabājis, atveras atkal bez zaudējumiem; citu programmu USD faili atveras kā tīkli, grupas, komponenti, lampas un kameras. Skatiet [USD saglabāšana, atvēršana un eksportēšana](topic:usd).

## Collada (.dae)

Importēšana un eksportēšana. Labākais formāts modeļu apmaiņai ar citiem 3D modelētājiem.

- **Eksportēšana:** Collada 1.4.1, Z uz augšu, metri. Viena ģeometrija katrai grupai vai komponenta definīcijai; komponenti tiek rakstīti vienu reizi un novietoti ar atsauci, tāpēc paliek kopīgi. Virsmas ar caurumiem vai ieliektām kontūrām tiek sadalītas trijstūros. Krāsas kļūst par materiāliem. Brīvās malas tiek rakstītas kā līnijas. Nosaukumi, kas formātā nav derīgi, tiek pielāgoti, un precīzais nosaukums tiek saglabāts blakus.
- **Importēšana:** trijstūri, daudzstūri (ar caurumiem), trijstūru veidotas virsmas un joslas kļūst par virsmām; līnijas kļūst par malām. Mezglu transformācijas, faila augšējā ass un tā mērvienība tiek pielietotas. Mezgls, kas novietots vairākās vietās, vai ģeometrija, ko izmanto vairāki mezgli, nonāk kā komponents; citi mezgli nonāk kā grupas. Materiālu krāsas (difūzās) kļūst par virsmu krāsām.
- **Nav importēts:** tekstūras, skini un morfi, kameras, gaismas, dažas transformāciju formas (look-at un skew) un atsauces uz citiem failiem. Statusa josla tos saskaita.
- **Pazūd eksportējot:** tas, kuras malas ir mīkstas. **Importējot** trijstūrotas virsmas paliek trijstūri, ar diagonālēm, kas ir mīkstinātas, lai plakanās zonas joprojām izskatītos kā viena virsma.

## OBJ (.obj, .mtl)

Importēšana un eksportēšana.

- **Importēšana:** nometiet `.obj` kopā ar tā `.mtl` un tekstūru attēliem (vai importējiet tikai `.obj`: tas ieiet bez materiāliem, un statusa josla nosauc `.mtl`, ko tas vēlējās). Nolasīts metros ar Y uz augšu. Katrs objekts (`o`, citādi `g`) kļūst par [tīklu](topic:meshes), tā virsmas saglabājas tādas, kādas tās ir (četrstūri paliek četrstūri). Tekstūru koordinātes, normāles un krāsas katrā punktā tiek saglabātas. Materiāla krāsas attēls (`map_Kd`, PNG, JPEG vai WebP) ieiet kā tekstūra ar tās mēroga un nobīdes opcijām; citādi tā krāsa (`Kd`). Malas, kur faila normāles pārtrūkst, ir cietas; bez normālēm lēmumu pieņem faila gludināšanas grupas. Citas kartes (bump, normal), punkti, līnijas un līknes tiek saskaitītas un izlaistas. OBJ nav mērvienības, tāpēc modelis, kas veidots milimetros vai collās, ieiet nepareizā izmērā: pēc importēšanas mērogojiet to (skatiet [Pagriešana un mērogošana](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksportēšana:** metri, Y uz augšu, pasaules koordinātes. Viens objekts katram grupas novietojumam; komponenti tiek rakstīti pilnībā katrā novietojumā. Tīkli saglabā savas virsmas, tekstūru koordinātes un normāles; virsmas, kas savienotas ar [mīkstām malām](topic:soften), saņem normāli katrā stūrī. Ja modelim ir krāsas, blakus `.obj` lejupielādējas `.mtl`. Ja tam ir importētas tekstūras, `.obj`, `.mtl` un attēli lejupielādējas kopā kā viens `.zip`.
- **Ierobežojums:** 2 miljoni virsotņu vai virsmu; 64 MB teksta.

## glTF (.glb, .gltf)

Importēšana un eksportēšana, glTF 2.0.

- **Importēšana:** `.glb`, vai `.gltf` kopā ar tā `.bin` un tekstūru failiem: nometiet tos skatā visus vienlaikus (vai izvēlieties `.glb`). `.gltf` fails, kas dots viens pats, nosauc failu, kas tam vajadzīgs: "Šim .gltf failam vajag "…": atveriet .glb versiju vai nometiet .gltf kopā ar tā failiem."
  - **Tīkli** ieiet kā [tīkli](topic:meshes), pa vienam katram failā esošam tīklam, ar faila normālēm, tekstūru koordinātēm un virsotņu krāsām. Malas, kur faila normāles pārtrūkst, ir cietas; pārējās ir mīkstas. Tīkls, ko izmanto vairākās vietās, paliek kopīgs.
  - **Mezgli** kļūst par grupām, nosauktām kā failā. Instancētie tīkli (EXT_mesh_gpu_instancing) ieiet kā viens tīkls, kas novietots daudzkārt.
  - **Materiāli:** bāzes krāsas tekstūra (PNG, JPEG vai WebP) ieiet kā tekstūra, novietota pēc faila tekstūru koordinātēm (ar jebkuru tekstūras transformāciju), un tiek saglabāta, kad saglabājat; citādi bāzes krāsa. Metāls, raupjums, normāļu kartes, stikls, clear coat, sheen un citi materiālu paplašinājumi tiek nolasīti, bet vēl nav saglabāti: statusa josla to saka.
  - **Gaismas** (KHR_lights_punctual): punktveida un prožektoru gaismas kļūst par [lampām](topic:lights). Virziena gaismas tiek saskaitītas: saule apgaismo modeli.
  - **Kameras** kļūst par [ainām](topic:scenes).
  - **Skeleta varoņi** ieiet stāvot tā, kā fails tos atstāj; to kauli un animācijas, kā arī morfu mērķi tiek saskaitīti un vēl nav saglabāti.
  - **Saspiesti faili** (Draco, meshopt) un kvantēti dati tiek nolasīti. Dekoderi ielādējas tikai failam, kam tie vajadzīgi.
  - Punkti un līnijas tiek saskaitītas un izlaistas (tīklā ir virsmas). KTX2 tekstūras tiek izlaistas; virsmas saglabā savu krāsu.
- **Eksportēšana** (`.glb`): glTF 2.0 bināri, metri, Y uz augšu. Viens tīkls katrai definīcijai, tāpēc komponenti paliek kopīgi. Tīkli saglabā savas normāles, tekstūru koordinātes un virsotņu krāsas; virsmas, kas savienotas ar [mīkstām malām](topic:soften), nes gludas normāles. Krāsas un materiāli kļūst par materiāliem (materiāls kā krāsa); importētās tekstūras tiek rakstītas kā tekstūras. Ieslēgtās lampas kļūst par punktveida un prožektoru gaismām (laukuma lampām glTF ekvivalenta nav, tās tiek izlaistas); ainas kļūst par kamerām. Brīvās malas tiek izlaistas.
- **Ierobežojums:** faili līdz 300 MB; ap 130 miljoniem ģeometrijas skaitļu.

## STL (.stl)

Importēšana un eksportēšana.

- **Importēšana:** bināri vai ASCII. STL nav mērvienības: tas tiek nolasīts kā **milimetri**, tāpat kā printeri un ModelCraft pats savu eksportu raksta. Stūri vienā punktā tiek savienoti, tāpēc slēgta detaļa ieiet kā slēgts [tīkls](topic:meshes). Faila krāsas (VisCAM / SolidView un Materialise konvencijas) iekrāso virsmas.
- **Eksportēšana** 3D drukāšanai: bināri STL, **milimetri**, Z uz augšu. Tikai trijstūri: grupas un brīvās malas tiek izlaistas. Krāsotas virsmas nes savu krāsu VisCAM / SolidView konvencijā, ko citas programmas ignorē, ja tās to nelasa. Tīrai drukai eksportējiet slēgtus cietos ķermeņus.

## STEP (.step, .stp)

Tikai importēšana. STEP ir tas, ko detaļu modelētāji un piegādātāji sūta: AP203, AP214 un AP242 faili.

- **Importēšana:** ModelCraft nolasa failu pats, lapā, un katru cieto ķermeni pārvērš slēgtā [tīklā](topic:meshes) no trijstūriem: plakanas virsmas paliek plakanas, izliektas virsmas (cilindri, konusi, sfēras, tori, B-spline virsmas) kļūst par daudzām mazām plakanām, malas vienas izliektas virsmas iekšienē ir mīkstas, bet malas starp divām virsmām ir asas. STEP faili nosaka savu mērvienību; modelis ieiet savā patiesajā izmērā. Montāža ieiet ar katru detaļu tur, kur fails to novieto; katra detaļa ir savs tīkls grupā, kas nosaukta pēc faila. Krāsas, montāžas koka detaļu nosaukumi un pielaides (PMI) netiek nolasīti.
- **Ziņojumi:** tas, kas izlaists vai zīmēts rupjāk, tiek pievienots statusa rindai ("Piezīmes: …"); fails bez cieta ķermeņa, bojāts fails vai fails, kas pārsniedz ierobežojumus, to saka un neko nepievieno.
- **Ierobežojums:** faili līdz 300 MB; 400 000 virsmas un 8 miljoni trijstūru.

## .3dm

Tikai importēšana. `.3dm` faili glabā NURBS modeļus: polisaites, virsmas, tīklus, līknes un blokus.

- **Importēšana:** ModelCraft nolasa failu pats, lapā. Tīkli ieiet tādi, kādi tie ir; katra polisaites vai ekstrūzijas virsma nāk no renderēšanas tīkla, kas saglabāts failā, citādi ModelCraft to tesselē (plaknes, NURBS virsmas, rotācijas virsmas, ekstrudētas līknes, ekstrūzijas; apgrieztas pēc savām malām, slēgtas polisaites kā slēgti tīkli). Līknes kļūst par malām, bloki kļūst par komponentiem (bloki blokos tiek saglabāti), slāņi kļūst par atzīmēm (paslēpti, ja izslēgti), objekta krāsa (pašas, tās slāņa vai materiāla) iekrāso tā virsmas. Fails nosaka savu mērvienību; modelis ieiet savā patiesajā izmērā. Soli pa solim: [Ievietot .3dm modeli](topic:import-3dm-files).
- **Ziņojumi:** statusa rindā norādīts, cik virsmu nākušas no saglabātiem tīkliem un cik tesselētas, un nosaukts, kas izlaists: punkti, punktu mākoņi, teksts, izmēri, svītrojumi, gaismas, SubD objekti, virsmas tipos, ko vēl nenolasa, saistītie bloki.
- **Ierobežojums:** faili līdz 300 MB.

## PLY (.ply)

Importēšana un eksportēšana tīkliem ar krāsām (skenējumi, krāsains 3D drukāšana, citi modelētāji).

- **Importēšana:** ASCII un bināri. Virsmas kļūst par [tīklu](topic:meshes) ar saglabātām normālēm, tekstūru koordinātēm un virsotņu krāsām; katra virsma tiek nokrāsota ar tuvāko no 4 096 krāsām, lai jūs tagad redzētu krāsas. PLY nav mērvienības vai asu konvencijas: koordinātes ieiet tādas, kādas tās ir (metri, Z uz augšu). PLY tikai ar punktiem ir punktu mākonis: atveriet to BimCraft vai CivilCraft.
- **Eksportēšana:** bināri PLY ar pozīcijām, normālēm un krāsām (un tekstūru koordinātēm, ja modelim tās ir), metros, Z uz augšu.

## FBX (.fbx)

Tikai importēšana. FBX 7 faili (no 2011. gada), bināri vai ASCII, nolasīti ar ModelCraft pašu lasītāju.

- Tīkli ieiet kā [tīkli](topic:meshes) ar savām normālēm, tekstūru koordinātēm (katru UV kopu) un virsotņu krāsām; tīkls, ko izmanto vairāki objekti, paliek kopīgs. Objekti kļūst par grupām ar savām transformācijām (ieskaitot pivotus, nobīdes un pirmspagriezienus).
- Materiāli: difūzā tekstūra — iestrādāta failā vai attēls, kas nomests kopā ar `.fbx` — ieiet kā tekstūra (TGA attēli tiek saglabāti kā PNG); citādi difūzā krāsa. Citi materiālu iestatījumi gaida jauno materiālu modeli.
- Faila augšējā ass un mērvienība tiek pielietotas: viss ieiet Z uz augšu, metros.
- Punktveida un prožektoru gaismas kļūst par [lampām](topic:lights) (FBX intensitāte 100 ir ModelCraft noklusējuma lampa, 800 lūmeni: FBX intensitātēm nav mērvienības). Kameras kļūst par [ainām](topic:scenes).
- Skeleta varoņi ieiet miera stāvoklī; kauli un animācijas tiek saskaitīti un vēl nav saglabāti. Virziena un laukuma gaismas, kā arī ģeometrija, kas nav tīkli (NURBS, līknes), tiek saskaitīta un izlaista.
- FBX 6 un vecāki faili tiek noraidīti: saglabājiet tos vēlreiz kā FBX 2011 vai jaunāku.

## Alembic (.abc)

Tikai importēšana: ģeometrijas kešs no animācijas un efektu programmām.

- Tīkli (poligonu un apakšdalīšanas tīkli) ieiet kā [tīkli] ar savām tekstūru koordinātēm un normālēm; transformācijas kļūst par grupām. Alembic ir Y uz augšu un tiek pagriezts uz Z uz augšu; metri.
- Kešs ar daudziem paraugiem (animācija) ieiet ar pirmo paraugu; statusa josla saka, cik to ir.
- Punkti, līknes, NURBS virsmas, kameras un gaismas tiek saskaitītas un izlaistas. Faili vecajā HDF5 izkārtojumā tiek noraidīti: saglabājiet tos vēlreiz kā Ogawa Alembic failu.

{{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}} vispirms pārbauda formu un raksta atlasi vai visu redzamo. Skatiet [Sagatavot modeli 3D drukāšanai](topic:print-3d).

## 3MF (.3mf)

Tikai eksportēšana, no {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}. 3MF pamats: viens tīkls **milimetros**, Z uz augšu, ar krāsām kā materiāliem. Lielākā daļa slicer programmu to lasa, un atšķirībā no STL tas nosaka savu mērvienību. Paslēptie objekti netiek iekļauti. Skatiet [Sagatavot modeli 3D drukāšanai](topic:print-3d).

## DWG un DXF eksports (.dwg, .dxf)

CAD programmām. Modelis tiek rakstīts savā mērvienībā: collās modeļiem pēdās un collās, citādi milimetros, centimetros vai metros (statusa josla to nosauc).

- **Virsmas** kļūst par 3D virsmām (trijstūri). Līnijas virsmas iekšpusē un mīkstās malas tiek rakstītas neredzamas, tāpēc virsmas izskatās kā ModelCraft virsmas.
- **Brīvās malas** kļūst par līnijām.
- **Grupas un komponenti** kļūst par blokiem: komponents tiek rakstīts vienu reizi un novietots tik reižu, cik tas tiek izmantots, ieskaitot pagrieztas un spoguļotas kopijas. Grupa, kas tika izstiepta pēc pagriešanas (tāpēc ir slīpa), tiek rakstīta savā vietā.
- **Krāsas:** DWG saglabā katras virsmas krāsu precīzi; DXF izmanto tuvāko no 255 standarta CAD krāsām.
- **Versijas:** DWG tiek rakstīts kā AutoCAD 2004 (AC1018), ko CAD programmas no 2004. gada atver. DXF ir R12 (AC1009), ko lasa katra CAD programma; R12 nav mērvienības lauka, tāpēc pasakiet CAD programmai, kuru mērvienību izmantot.
- **Nerakstīts:** palīglīnijas, izmēri, ainas un kamera.

## IFC (.ifc)

Tikai eksportēšana, BimCraft un citām BIM programmām. IFC4 ar projektu, vietu, ēku un tās stāviem. Katra augšējā līmeņa grupa vai komponents kļūst par vienu ēkas elementa vietturi ar savu nosaukumu; slēgtie tiek rakstīti kā cietas formas (faceted brep), atvērtie — kā virsmu modeļi; caurumi virsmās tiek saglabāti. Brīvā ģeometrija augšējā līmenī kļūst par vienu elementu ar nosaukumu "Loose geometry". Nav tipu, īpašību vai materiālu.

**Stāvi:** {{ui:Eksportēt}} › {{ui:IFC stāvi…}} parāda tos, katru ar nosaukumu un augstumu ({{ui:Pievienot stāvu}} vai {{ui:Noteikt pēc modeļa}}, kas izveido vienu stāvu katram augstumam, uz kura stāv jūsu augšējā līmeņa grupas). Eksportējot, katra grupa vai komponents nonāk stāvā, kas atrodas tā zemākajā punktā vai zemāk, un saglabā savu vietu. Bez stāviem viss nonāk vienā stāvā, "Level 1", augstumā 0. Stāvi tiek saglabāti ModelCraft failā.

## DWG (.dwg) un DXF (.dxf)

Importēti kā līnijas uz zemes (svītrojumi un 3D virsmas kā virsmas); eksportēti kā aprakstīts augstāk. Skatiet [Modelis uz situācijas plāna](topic:site-plan).

- **Lasīšana:** līnijas, polilīnijas (ar lokiem), 3D polilīnijas, riņķi, loki un bloku atsauces, ieskaitot masīvus, no modeļa telpas. Neredzami objekti (piemēram, dinamiska bloka paslēptie stāvokļi) tiek izlaisti. Līknes kļūst par 48 taisniem gabaliem uz pilnu apli.
- **Lasīts kopš 0.4:** splainus un elipses (kā malas), teksts, daudzrindu teksts un atribūtu vērtības (kā malas vienas līnijas burtos), svītrojumi (virsmas ar caurumiem), 3D virsmas un cietās aizpildes (virsmas), un izmēri (zīmēti no paša rasējuma izmēru blokiem).
- **Lasīts kopš 0.7:** 3D cietvielas, reģioni un ķermeņi (to ACIS dati, DWG un DXF katrā versijā), katrs kā sava grupa; slēgtie kā cietas formas. Virsmas, kas nav plaknes, cilindri, konusi, sfēras, tori un vienkāršas spline virsmas, tiek izlaistas un uzskaitītas.
- **Nelasīts:** punkti, tabulas, multileaders, attēli un viss papīra telpā.
- **Mērvienības:** ņemtas no rasējuma, ja tas tās norāda. Ja nē, ModelCraft jautā.
- **DXF** jābūt ASCII. Bināro DXF noraida.
- **DWG** faili no AutoCAD R13 līdz pašreizējam formātam (AutoCAD 2018 un jaunāki; AC1012 līdz AC1032) tiek nolasīti ar ModelCraft pašu DWG lasītāju lapā; tas ir daļa no ModelCraft, tāpēc darbojas bezsaistē, kad darbojas ModelCraft. Vecākas versijas (R12 un agrākas) un stipri bojāti faili nav nolasāmi; saglabājiet tos kā DXF.
- **Ierobežojumi:** koordinātes vairāk nekā 10 000 km no sākumpunkta vai vairāk nekā 2 miljoni līniju gabalu tiek noraidītas.

## SKP faili

{{ui:Importēt}} (vai nomest failu skatā) nolasa SketchUp failus ar ModelCraft pašu lasītāju lapā: nekas netiek augšupielādēts, un tas darbojas bezsaistē, kad darbojas ModelCraft. Testēts ar SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 un 2026 failiem; citas versijas arī vajadzētu atvērt, bet tās vēl nav izmēģinātas. Modelis ieiet kā viena grupa ar nosaukumu pēc faila. Viens {{key:Mod+Z}} to atkal noņem. Soli pa solim: [SKP modeļa ievietošana](topic:import-sketchup-files).

- **Saglabāts:** virsmas ar caurumiem, grupas (kā grupas) un komponenti (kā komponenti, kopīgi), to nosaukumi un novietojumi, krāsas, atzīmes uz grupām un komponentiem, malas, kas nav virsmas daļa, un mīkstās un gludās malas, tātad izliektas virsmas paliek gludas.
- **Krāsas:** virsmas pašas materiāls dod tās krāsu. Materiāls, kas uzkrāsots uz grupas vai komponenta, kļūst par šī novietojuma krāsu, tāpēc iekšējās virsmas bez savas krāsas to pārņem, kā SketchUp; komponents, kas nokrāsots divās krāsās, paliek viens komponents.
- **Atzīmes** uz grupām un komponentiem kļūst par ModelCraft atzīmēm, redzamas vai paslēptas, kā tās bija. Atzīmes uz brīvām virsmām un malām netiek saglabātas (ModelCraft atzīmē tikai grupas un komponentus); statusa josla tās saskaita.
- **Paslēpti objekti ieiet paslēpti** (virsmas, malas, grupas, komponenti, kā arī virsmas un malas uz paslēptas atzīmes), tātad redzat to, ko rādīja SketchUp; {{ui:Parādīt visu}} tos parāda.
- **Tekstūras:** virsma ar tekstūras materiālu saglabā savu tekstūru, novietotu kā failā, un ModelCraft fails saglabā attēlu. Tekstūra uz visas grupas vai komponenta, tekstūra, kas failā trūkst, vai attēls, ko pārlūkprogrammas nevar parādīt (piemēram, Photoshop fails), saglabā tikai sava materiāla krāsu.
- **Izlaists, un statusa joslā saskaitīts:** attēli, kas novietoti modelī. Teksts, izmēri, palīglīnijas, griezuma plaknes, ainas un stili netiek nolasīti.
- **Mērvienības:** SketchUp faili iekšēji ir collās; ModelCraft tos pārvērš, tāpēc izmēri ir pareizi jebkurā mērvienībā.
- **`.skp` saglabāšana** nav izveidota. Lai modeli atgrieztu SketchUp, eksportējiet Collada (`.dae`).

## Netiek atbalstīts

ModelCraft nevar atvērt 3DS vai IFC failus, un nevar saglabāt 3DS, FBX, STEP, `.3dm` vai SketchUp (`.skp`) failus.
