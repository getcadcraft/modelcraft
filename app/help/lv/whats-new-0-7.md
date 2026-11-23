---
title: Jaunumi 0.7 versijā (agrāk)
summary: Tīkli ar modifikatoriem, skulptēšana, UV un līkņu objekti, ceļa izsekošana grafikas kartē un Renderēšanas darba vide, reāllaika tiešraides skats ar izkliedi un panorāmām, mezglu materiāli, Animācijas darba vide ar kauliem un fiziku, USD, FBX, STEP un .3dm faili, kā arī drukas rīki ar iesācēju stilu.
keywords: jaunumi 0.7, iepriekšējais izlaidums, izlaiduma piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, tīkls, tīkli, tīkla darba vide, modifikatori, sadalīšana, šķautne, uv, izvērst, šuves, līknes, līkņu objekti, nurbs, bezjē, skulptēt, pārveidot tīklu, retopoloģija, dalīt, aprēķins, ceļa izsekošana, webgpu, renderēšanas darba vide, renderēšanas rinda, mp4, exr, trokšņu samazināšana, fiziskās debesis, hdri, ies, lauka dziļums, gaismu sajaukšana, migla, kaustika, tiešraides skats, reāllaiks, staigāt, izkliede, panorāma, tūre, skatītājs, ēnojums, mezgli, mezglu materiāli, materiālu bibliotēka, materialx, uzlīmes, tekstūras krāsošana, cepšana, animēt, grafiku redaktors, griezumi, atslēgas kadri, draiveri, skelets, kauli, ādošana, ik, ierobežojumi, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D cietie ķermeņi, balsti, sienas biezums, iedobums, labošana, iesācējs, asistenti, jūsu dators, vienības, portugāļu
from: 16d52810
---

Šeit ir izmaiņas ModelCraft 0.7 versijā salīdzinājumā ar 0.6. ModelCraft tagad modelē tīklus, kā arī ģeometriju, ko stumj un velk, renderē grafikas kartē un katram darba veidam ir sava darba vide: izvēlieties to sarakstā {{ui:Darba vide}} rīkjoslas kreisajā pusē.

## Jauns

### Tīkli

- **Tīkli.** Atlasiet grupu vai komponentu un noklikšķiniet uz {{ui:Pārvērst par tīklu}} sadaļā {{ui:Objekta informācija}}: tas kļūst par tīklu ar virsmām ar jebkuru stūru skaitu, kas var saturēt tekstūras koordinātes, normāles, krāsas un svarus. {{ui:Pārvērst par ģeometriju}} to atgriež. Atsaukt tīklā saglabā tikai to, ko katrs solis mainīja. Fails, kurā ir tīkls, lai to atvērtu, prasa ModelCraft 0.7. Skatiet [Tīkli](topic:meshes).
- **Tīkla darba vide.** Veiciet dubultklikšķi uz tīkla vai izvēlieties {{ui:Tīkls}} sarakstā {{ui:Darba vide}}, lai rediģētu tā virsotnes, malas un virsmas: cilpas un gredzeni, proporcionālā rediģēšana, izvilkšana, iekšējā nobīde, nolaušana, cilpas griezums, nazis, bisekcija, griešana, apvienošana, izšķīdināšana, aizpildīšana, režģa aizpildīšana, tilta veidošana un slīdēšana, un pēdējās darbības iestatījumi, kas vēlāk mainīti panelī. Sākt var ar plakni, kubu, sfēru, toru un citiem. Darbojas gan stumšanas/vilkšanas taustiņi, gan modelētāja taustiņi. Skatiet [Rediģēt tīklu tīkla darba vidē](topic:mesh-edit).
- **Modifikatori.** Spoguļošana, masīvs, sadalīšanas virsma, nolaušana, sabiezināšana, bulca, nobīde, savienošana, samazināšana, izlīdzināšana, režģis, līknes deformācija un shrinkwrap maina to, ko tīkls rāda, nemainot pašu tīklu. Sakraujiet tos, ieslēdziet vai izslēdziet katru skatam un renderēšanai, un {{ui:Lietot}} vienu, kad vēlaties to pastāvīgi. Skatiet [Tīkla modifikatori](topic:modifiers).
- **Sadalīšana ar šķautnēm.** {{ui:Šķautne}} tīkla darba vidē saglabā izvēlētās malas asas zem sadalīšanas virsmas. Renderēšanā var izmantot vairāk līmeņu nekā skatā, un lielam tīklam skats rāda zemāku līmeni un par to paziņo. Skatiet [Sadalīšanas virsma](topic:modifiers#subdivision-surface).
- **Līkņu objekti.** Bezjē, NURBS un taisnu segmentu līknes, kas veido cauruli, lenti, konusu vai aizpildītu plāksni, un teksts kā līkne. Rediģējiet to punktus {{ui:Līkne}} darba vidē; {{ui:Par tīklu}}, kad forma ir pareiza. Skatiet [Līkņu objekti](topic:curves).
- **UV darba vide.** Atzīmējiet šuves (vai ļaujiet ModelCraft tās atzīmēt asās malās), {{ui:Izvērst}} un {{ui:Sakārtot}}, vai projicējiet pēc kastes, cilindra, sfēras vai skata. UV redaktors blakus 3D skatam pārvieto, pagriež un mērogo gabalus, bet šaha raksts un stiepuma krāsas parāda rezultātu. Skatiet [Izkārtot tīkla UV](topic:uv).
- **Skulptēšana.** {{ui:Skulptēt}} darba vidē ir zīmēšanas, māla, izlīdzināšanas, satveršanas, piepūšanas, šķautnes, saspiešanas, saplacināšanas un maskas otas, spoguļošana pa X asi un {{ui:Detaļa}}, kas pievieno trīsstūrus vietās, kur skulptējat. Pildspalvas spiediens nosaka otas izmēru un spēku. Katrs vilciens ir viens atsaukšanas solis. Skatiet [Skulptēt tīklu](topic:sculpt).
- **Pārveidošana un retopoloģija.** {{ui:Pārveidot tīklu}} izveido visu tīklu no jauna ar vienmērīgiem trīsstūriem, aizverot caurumus un savienojot pārklājušās daļas. Lai izveidotu tīru tīklu pār detalizētu, izvēlieties to zem {{ui:Retopoloģija}}: punkti, ko pārvietojat, nolaižas uz tā virsmas. Skatiet [Pārveidot tīklu](topic:mesh-edit#remesh).

### Zīmēšana

- **Malas vai līknes dalīšana.** Rīks {{ui:Dalīt}} atzīmē griezumus, kad virzāties pa malu, un dala ar klikšķi vai ievadītu skaitli; ar atlasītu malu, loku vai riņķi ievadiet `/5`; {{ui:Objekta informācija}} › {{ui:Dalīt…}} pieprasa skaitli, ērtībai planšetdatoriem. Loks vai riņķis tiek dalīts ar vienādiem leņķiem pa patiesu loku. Skatiet [Sadalīt malu vai līkni vienādās daļās](topic:divide).
- **Aprēķini vērtību lodziņā.** Ievadiet `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` vai `2*450mm` jebkuram garumam un `90/2` leņķim. Aprēķins, ko nevar veikt, pasaka, kas nav kārtībā un kur. Skatiet [Aprēķini](topic:value-box#calculations).

### Renderēšana

- **Ceļa izsekošana grafikas kartē.** {{ui:Renderēt attēlu…}} › {{ui:Augsta kvalitāte (ceļa izsekošana)}} palaiž CadCraft savu ceļa izsekotāju grafikas kartē, kur pārlūkprogrammai ir WebGPU; līnija zem attēla rāda, kurš dzinējs to izveidoja. {{ui:Apturēt}} saglabā attēlu, un {{ui:Turpināt}} turpina no turienes. Bez WebGPU attēls tiek izsekots ar WebGL, kā agrāk. Skatiet [Augsta kvalitāte](topic:render#high-quality).
- **Renderēšana skatā.** {{ui:Renderēt}} darba vide izseko pašu skatu un sākas no jauna, kad orbītējat vai rediģējat: renderējiet {{ui:Apgabals}}, noklikšķiniet, lai iestatītu {{ui:Fokuss}}, iestatiet {{ui:Detaļa}}. Nepieciešams WebGPU. Skatiet [Renderēšana skatā](topic:render#render-in-the-view).
- **Materiāli, gaismas un debesis.** Augstas kvalitātes attēlos katra virsma tiek nokrāsota ar OpenPBR materiālu modeli (pārklājumi, plūksnainums, plānās plēves, krāsains stikls, mirdzums). Ar WebGPU ir arī {{ui:Fiziskas debesis}} ar {{ui:Miglainība}}, {{ui:Debesu attēls (HDRI)}} un ražotāju IES gaismas profili lampām. Skatiet [Debesis un gaismas profili](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kā fotoaparātam.** Ekspozīcija no diafragmas, slēdža un ISO katrā režīmā; ar WebGPU arī lauka dziļums, divpunktu perspektīva, baltā balanss, 360° panorāmas (arī stereo) un kubu kartes. Skatiet [Kamera](topic:render#the-camera).
- **Attēla pabeigšana pēc renderēšanas.** Pielāgojiet to ({{ui:ACES filmiskais}}, {{ui:AgX}}, {{ui:Filmiskais}} vai {{ui:Standarta}}, kontrasts, mirdzums, atspīdums, vinjete, `.cube` krāsu tabula), sajauciet debesis, sauli un katru lampu grupu un apskatiet renderēšanas elementus pa vienam, visu bez atkārtotas renderēšanas. Atlikušo graudainību notīra trokšņu samazinātājs jūsu datorā. Skatiet [Attēla pabeigšana](topic:render#finish-the-picture) un [Gaismu sajaukšana pēc renderēšanas](topic:render#mix-the-lights-after-the-render).
- **Vairāk veidu, kā saglabāt renderētu attēlu.** 16 bitu PNG, vairāku slāņu EXR ar katru renderēšanas elementu un gaismu grupu un renderēšanas fails (`.ccrender`), ko var atvērt atkal ar tā sajaukumu un pielāgojumu. Skatiet [Saglabāt attēlu](topic:render#save-the-picture).
- **Migla, dūmi un kaustika.** Migla un miglainība, ko apgaismo saule un lampas, ar gaismas stariem; viens dūmu stabs vai mākonis; kaustika zem stikla un spoguļiem; adaptīvā paraugu ņemšana, kas apstājas pikseļos, kas jau ir tīri. Tikai grafikas kartē. Skatiet [Migla, dūmi, troksnis un kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Renderēšanas rinda un MP4.** Pievienojiet augstas kvalitātes attēlus un veselas animācijas {{ui:Renderēšanas rinda}}; tās tiek renderētas viena pēc otras, un rinda saglabājas arī pēc lapas aizvēršanas. Nepieciešams WebGPU. Videoklipus var saglabāt arī kā MP4, ja pārlūkprogramma var to rakstīt. Skatiet [Renderēšanas rinda](topic:render#the-render-queue) un [Renderēt video](topic:animation#render-the-video).

### Tiešraides skats un prezentācijas

- **Tiešraides skats.** {{ui:Eksportēt}} › {{ui:Tiešraide}} rāda modeli reāllaika izskatā blakus skatam, sekojot katrai izmaiņai un kamerai: saules ēnas, materiāli, lampas un no sienām atstarota gaisma. {{ui:Staigāt}} pa to, velciet {{ui:Laiks}} un {{ui:Mēnesis}}, lai pārvietotu sauli, vai pārvietojiet to uz {{ui:Jauns logs}}. Tas izmanto WebGPU, ja pārlūkprogramma to atbalsta, citādi WebGL 2. Skatiet [Tiešraides skats](topic:live-view).
- **Izkliede.** Izkliedējiet zāli, ziedus, akmeņus, kokus un cilvēkus pa virsmām vai ar otu, no septiņiem jauniem apkārtnes vienumiem un pārējās bibliotēkas; kopas tiek saglabātas failā. Skatiet [Izkliedēt augus, akmeņus un cilvēkus](topic:live-view#scatter-plants-rocks-and-people).
- **Kopīgošana.** 360° panorāma, panorāmas tūre ar bultiņām starp vietām, patstāvīgs skatītājs (viena tīmekļa lapa, kas atveras bezsaistē un nekā neielādē no interneta) un kameras ceļa video, visi reāllaika izskatā. Skatiet [Kopīgošana](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR reāllaika izskatā.** {{ui:Pārskatīt VR}} rāda modeli ar tā materiāliem, debesīm, saules ēnu, lampām, izkaisītiem priekšmetiem un atstarotu gaismu. Skatiet [Kā tas izskatās](topic:vr-review#what-it-looks-like).

### Materiāli

- **Materiāli, veidoti ar mezgliem.** {{ui:Ēnojums}} darba vide veido faila paša materiālus kā mezglu grafikus: attēli, troksnis un šaha raksti, Voronoi šūnas, viļņi, ķieģeļi, flīzes, koks, marmors, pāreju gradienti, netīrumi un malu nodilums, krāsu darbs, matemātika, reljefa un normāļu kartes, līdz pilnam OpenPBR materiālam. Skats uzreiz rāda katru izmaiņu. Skatiet [Materiālu veidošana ar mezgliem](topic:shading).
- **Materiālu bibliotēka un jūsu pašu tekstūru komplekti.** Ēnojuma panelī ir bibliotēkas materiāli: sešpadsmit CC0 tekstūru komplekti, katrs ar norādītu autoru. Noklikšķiniet uz viena, lai to izmantotu, vai velciet to uz virsmas. {{ui:Attēlus vai zip…}} vai {{ui:Mapi…}} izveido materiālu no jūsu kartēm, atrastām pēc to failu nosaukumiem. Skatiet [Materiāli no bibliotēkas](topic:shading#materials-from-the-library).
- **MaterialX ievads un izvads.** Eksportējiet materiālu kā MaterialX (OpenPBR Surface vai Standard Surface, tekstūras kā PNG) un importējiet MaterialX failus kopā ar to attēliem. Skatiet [MaterialX](topic:shading#materialx).
- **Uzlīmes un tekstūras krāsošana.** Novietojiet attēlu uz virsmas kā uzlīmi ar savu materiālu un krāsojiet materiāla attēlu ar apaļu otu. Skatiet [Uzlīmes](topic:shading#decals) un [Krāsot tekstūru](topic:shading#paint-on-the-texture).
- **Tekstūru cepšana.** Iecepiet apkārtējo aizēnojumu, izliekumu, apgaismojumu un detalizēta objekta normāles attēlos pa tīkla UV, datora procesora kodolos. Skatiet [Cept tekstūras](topic:shading#bake-textures).

### Animācija

- **Animēšanas darba vide.** Iestatiet atslēgas kadrus objekta vietai, pagriezienam un izmēram, katras lampas spilgtumam, izkliedei un krāsai, kā arī objektīva leņķim, tieši panelī. Laika līnijai ir {{ui:Līknes}} skats (Bezjē rokturi, atkārtojumi) un {{ui:Klipi}} skats, kas saglabā atslēgas kadrus kā darbības, ko atkal novietot un sajaukt; atslēgas kadrus vairākās rindās var pārvietot, stiept, kopēt un ielīmēt. Skatiet [Animēt jebkuru īpašību](topic:animate).
- **Formu atslēgas un draiveri.** Tīklā ir citas tā formas, ko sajauc ar slīdņiem, kurus var iestatīt ar atslēgas kadriem, vai iestatīt pēc citām vērtībām ar mazu izteiksmi. Skatiet [Formu atslēgas](topic:animate#shape-keys-morphs) un [Draiveri](topic:animate#drivers).
- **Skeleti.** Ievietojiet kaulus tīklā, ļaujiet {{ui:Automātiski svari}} sadalīt punktus starp tiem vai krāsojiet svarus, un pozējiet un iestatiet kaulu atslēgas kadrus; lineāra vai divkārša kvaterniona ādošana (skinning). Skatiet [Skeleti](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK un ierobežojumi.** Sasniedzamība (IK) ar polu, skatīšanās uz, transformāciju kopēšana, robežas, bērns no un sekošana ceļam, kauliem un objektiem. Skatiet [IK un ierobežojumi](topic:animate#ik-and-constraints).
- **Fizika.** Grupas un komponenti krīt, sakraujas un saduras kā kastes vai bumbas, un {{ui:Aprēķināt fiziku}} saglabā rezultātu kā atslēgas kadrus. Skatiet [Fizika](topic:animate#physics-drop-stack-and-collide).

### Faili

- **USD.** {{ui:Saglabāt kā}} ({{key:Mod+Shift+S}}) saglabā modeli kā `.usda`, `.usdc` vai `.usdz`, un USD fails, ko ModelCraft saglabājusi, atveras atkal bez zaudējumiem. USD no citām programmām atveras vai importējas kā tīkli, grupas, komponenti, lampas un kameras. {{ui:Saglabāt}} joprojām raksta `.modelcraft`. Skatiet [Saglabāt, atvērt un eksportēt USD](topic:usd).
- **glTF, pilnībā.** glTF faili ienāk kā rediģējami tīkli ar to normālēm, UV, virsotņu krāsām un tekstūrām, mezgli kā grupas, gaismas kā lampas un kameras kā ainas, ieskaitot Draco un meshopt failus; `.gltf` atveras, ja to nometat kopā ar tā failiem. Eksports raksta tīklus, tekstūras, lampas un kameras. Skatiet [glTF](topic:formats#gltf-glb-gltf).
- **FBX, PLY, STL un Alembic importi.** FBX 2011 un jaunāks (tīkli, UV kopas, materiāli, iegultās tekstūras, gaismas, kameras), PLY un STL ar to krāsām un Alembic kešatmiņa pirmajā paraugā. OBJ ienāk kopā ar `.mtl` un attēliem, ja tos nometat kopā. Skatiet [Failu formāti sīkāk](topic:formats).
- **Vairāk eksportu.** PLY ar krāsām, STL ar nokrāsoto virsmu krāsām un OBJ ar tā tekstūrām kā vienu zip failu. Skatiet [Failu formāti sīkāk](topic:formats).
- **STEP faili.** {{ui:Importēt}} nolasa STEP (AP203, AP214, AP242) detaļas un mezglus kā slēgtus tīklus patiesajā izmērā, katru detaļu tur, kur to novieto fails. Skatiet [STEP](topic:formats#step-step-stp).
- **.3dm faili.** {{ui:Importēt}} nolasa `.3dm` modeļus: tīklus, polivirsmas un izvilkumus (no failā saglabātajiem tīkliem, citādi ModelCraft tos sadala trijstūros), līknes kā malas, blokus kā komponentus un slāņus kā birkas. Skatiet [Ievietot .3dm modeli](topic:import-3dm-files).
- **3D cietie ķermeņi no DWG un DXF.** Rasējuma importēšana tagad ieved arī tā 3D cietos ķermeņus, apgabalus un korpusus, katru kā savu grupu, slēgtos kā cietos ķermeņus. Skatiet [Modelēt uz situācijas plāna](topic:site-plan#what-comes-in).

### 3D drukāšana

- **Drukas rīki.** {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}} › **Drukas rīki** ietver {{ui:Balstu priekšskatījums}} (izvirzījumi, balsti kolonnās vai koka veidā, aptuveni cik daudz materiāla), {{ui:Sienas biezums}} (sienas, kas pārāk plānas drukāšanai, uzskaitītas ar {{ui:Rādīt}}), {{ui:Iedobums}} (sienas norādītajā biezumā, ar nosusināšanas caurumiem) un {{ui:Labošana}} (katrs labojums uzskaitīts; pārklājušās daļas savienojas tikai tad, kad to pieprasāt). Iedobums un Labošana dod grupu, kuras plakanās puses ir atsevišķas virsmas, vai tīklu, ja rezultāts nebūtu slēgts vai tam ir pārāk daudz virsmu; statusa rindā norādīts, kurš. Skatiet [Balsti, sienas biezums, iedobums un labošana](topic:print-tools).
- **Iesācēju stils.** {{ui:Iestatījumi}} › {{ui:ModelCraft}} › {{ui:Izvēlnes, taustiņi un pele}} › {{ui:Iesācējs}}: lielas pogas, lai nomestu formas un caurumus, pārvietotu, izlīdzinātu un {{ui:Grupa}}, lai caurumi nogrieztu, un pēc tam pārbaudītu modeli drukāšanai. Skatiet [Iesācēju stils](topic:beginner).

## Labots

- {{ui:Cietie ķermeņi}} › {{ui:Apvienot}}, {{ui:Atņemt}} un {{ui:Krustot}} varēja atgriezt grupu, kas nebija slēgta, jebkurā izmērā. Tagad tās slēdzas.
- {{ui:Cietie ķermeņi}} › {{ui:Atņemt}} bija pelēkots, ja nekas nebija atlasīts, lai gan pēc tā izvēles tas pēc kārtas izvēlas abas daļas.
- Animācijas laika līnijā ievadītie taustiņi nekur nenonāca, tāpat {{key:Mod+S}}. {{key:Mod+Z}} un {{key:Mod+Y}} tur ir laika līnijas pašas atsaukšana un atkārtošana; citi {{key:Mod}} taustiņi sasniedz lietotni.

## Katrā lietotnē

- **Vienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}} katram garumam, laukumam, tilpumam, leņķim un nogāzei ir savs saraksts ar precīzajiem izmēriem, ko dod vienību definīcijas (ASV mērījumu pēda ir atsevišķa vienība). Izslēdziet vienības, ko nekad neizmantojat, un tās pazūd no sarakstiem; atzīmējiet vienu ar zvaigznīti, un jauns darbs sākas tajā. Fails vienmēr saglabā savu vienību. ModelCraft vērtību lodziņa blakus esošais vienību saraksts seko slēdžiem (modeļa pašas vienība vienmēr paliek tajā), zvaigznīte nosaka jauna modeļa vienību (ja ModelCraft to ir), un garums, ievadīts ar jebkuras vienības apzīmējumu, tiek nolasīts šajā vienībā. Skatiet [Mērvienības, ievadītās vērtības un mērvienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas paslēpjas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina vairāk ekrānā (skārienekrāni un tālruņi saglabā savas lielās pogas). Katram sānu panelim ir šaura virsrakstjosla: velciet to, lai piestiprinātu vai atdalītu paneli, nometiet to uz cita paneļa joslas, lai dalītos ar vienu rāmi kā cilnēs, piespraudiet, lai tas paslīdētu līdz malai, vai paslēpiet un atgrieziet no malas. Skatiet [Paneļu izkārtošana](common:arrange-panels#make-the-layout-denser).
- **Dialogi pārvietojas.** Velciet dialogu aiz virsrakstjoslas prom no zīmējuma; tas atgriežas vietā, kur to atstājāt. Veiciet dubultklikšķi uz virsrakstjoslas, lai to atkal centrētu. Skatiet [Pārvietot dialogu](common:arrange-panels#move-a-dialog).
- **Ieteikumi MI asistentiem.** Desmit darba pieprasījumi jūsu asistentam (sakārtot zīmējumu, izdrukāt komplektu, pārbaudīt zīmējumus, uzdot modelim jautājumus, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu …), katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam vajadzīgas, un katrs atkārtots mūsu testos. Lietotnēs nav MI. Skatiet [Ieteikumi MI asistentiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauna sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}}. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir visi lietotņu vārdi kā melnraksti, ko dzimtā valodā runātājs vēl nav pārskatījis. Palīdzības tēmas ir angļu valodā.

## Šajā versijā vēl nav

- 0.7 nav koda parakstīta. Parakstīšana un Microsoft Store pakete tika pārcelta uz 0.8, jo sertifikāta pārbaude vēl nav pabeigta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Operētājsistēmā Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildinformācija}}, tad {{ui:Palaist tomēr}}. Mac datorā pirmoreiz ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. CadCraft Studio vēl nav lietotņu veikalā, un iPad vai iPhone versijas vēl nav.
- Leņķu un nogāžu saraksti {{ui:Vienības}} tiek saglabāti, bet neviens lodziņš tos vēl nenolasa.
- Renderēšana grafikas kartē (WebGPU) šeit testēta tikai ar programmatūras aizstājēju, vēl nevis īstās grafikas kartēs, tāpēc vispirms renderējiet kaut ko nelielu savā datorā. Tas pats attiecas uz tiešraides skatu, un VR joprojām testēts tikai ar austiņu emulatoru.
- Bez WebGPU nav Renderēšanas darba vides vai renderēšanas rindas, un augstas kvalitātes attēliem nav lauka dziļuma, fiziskām debesīm, debesu attēla, miglas, dūmiem, kaustikas vai gaismu sajaukšanas.
- {{ui:Renderēt attēlu…}} vēl nezīmē izkaisītus priekšmetus; tie rādās tiešraides skatā, tā panorāmās, skatītājā un video.
- Lampas animējas skatā, bet renderētais video izmanto lampas tādas, kādas tās ir sākumā.
- Kauli un animācija vēl netiek nolasīti no glTF, FBX vai USD failiem un tajos nerakstīti (ādotie modeļi ienāk miera stāvoklī, ar saviem svariem), un glTF un FBX materiāli, kas pārsniedz pamatkrāsu vai tekstūru, vēl netiek saglabāti.
- STEP krāsas un mezgla detaļu nosaukumi vēl netiek nolasīti. `.3dm` importēšana testēta ar failiem, ko rakstījis formāta rīku komplekts, vēl nevis ar failiem no pašas modelēšanas programmas; SubD objekti, teksts un izmēri nav iekļauti.
- Augu bibliotēka no CivilCraft ir ModelCraft, bet augu novietošana no tās vēl nav izveidota.
- Tekstūras krāsošana uz stumšanas/vilkšanas virsmām atkārtojas ar materiāla flīzi; lai nokrāsotu tikai vienu virsmu, pārveidojiet to par tīklu un izvērsiet to.

Pārējais ir [Vēl nav izveidots](topic:not-built-yet).
