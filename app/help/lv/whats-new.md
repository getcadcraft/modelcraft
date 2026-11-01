---
title: Jaunumi versijā 0.7
summary: Tīkli ar modifikatoriem, skulptēšana, UV un līkņu objekti, ceļa izsekošana uz grafikas kartes un renderēšanas darbvieta, reāllaika tiešraides skats ar izkliedi un panorāmām, mezglu materiāli, animācijas darbvieta ar skeletiem un fiziku, USD, FBX, STEP un .3dm faili un drukas rīki ar iesācēja stilu.
keywords: jaunumi, kas jauns, izlaiduma piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, tīkls, tīkli, tīklu darbvieta, modifikatori, apakšdalīšana, šķautne, uv, izvērst, šuves, līknes, līkņu objekti, nurbs, bezjē, skulptēt, pārveidot tīklu, retopoloģija, dalīt, aprēķins, ceļa izsekošana, webgpu, renderēšanas darbvieta, renderēšanas rinda, mp4, exr, trokšņu samazināšana, fiziskas debesis, hdri, ies, lauka dziļums, gaismu sajaukšana, migla, kaustika, tiešraide, reāllaiks, staigāt, izkliede, panorāma, tūre, skatītājs, ēnojums, mezgli, mezglu materiāli, materiālu bibliotēka, materialx, uzlīmes, tekstūru krāsošana, cepšana, animēt, grafiku redaktors, klipi, formu atslēgas, draiveri, skelets, kauli, ādas pārklāšana, ik, ierobežojumi, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d cietie ķermeņi, balsti, sienas biezums, iedobums, labošana, iesācējs, palīgi, jūsu dators, mērvienības, portugāļu
from: b9fc43e2
---

Šis ir tas, kas mainījās ModelCraft 0.7 versijā, salīdzinot ar 0.6. ModelCraft tagad modelē arī tīklus, renderē uz grafikas kartes un ir darbvieta katram darba veidam: izvēlieties to sarakstā {{ui:Darba vide}} rīkjoslas kreisajā pusē.

## Jauns

### Tīkli

- **Tīkli.** Atlasiet grupu vai komponentu un noklikšķiniet uz {{ui:Pārvērst par tīklu}} sadaļā {{ui:Objekta informācija}}: tas kļūst par tīklu ar virsmām ar jebkuru stūru skaitu, kurām var būt tekstūras koordinātes, normāles, krāsas un svari. {{ui:Pārvērst par ģeometriju}} to atgriež. Atsaukšana tīklā glabā tikai to, ko mainīja katrs solis. Fails ar tīklu atvēršanai prasa ModelCraft 0.7. Skatiet [Tīkli](topic:meshes).
- **Tīklu darbvieta.** Veiciet dubultklikšķi uz tīkla vai izvēlieties {{ui:Tīkls}} sarakstā {{ui:Darba vide}}, lai rediģētu tā virsotnes, malas un virsmas: cilpas un gredzenus, proporcionālo rediģēšanu, izvilkšanu, ievilkšanu, nošķelšanu, cilpas griezumu, nazi, bisekciju, pagriešanu, apvienošanu, izšķīdināšanu, aizpildīšanu, režģa aizpildīšanu, tiltu un slīdēšanu, kā arī pēdējās darbības iestatījumus, kurus var mainīt pēc tam paneļa. Sākt var no plaknes, kuba, sfēras, tora un citiem. Darbojas gan stumšanas/vilkšanas, gan modelētāja taustiņi. Skatiet [Rediģēt tīklu tīklu darbvietā](topic:mesh-edit).
- **Modifikatori.** Spogulis, masīvs, apakšdalīšanas virsma, nošķelšana, sabiezināšana, bulea, pārvietojums, metināšana, decimācija, izlīdzināšana, režģis, līkņu deformācija un apvilkšana maina to, ko tīkls rāda, nemainot pašu tīklu. Sakārtojiet tos kaudzē, ieslēdziet vai izslēdziet katru skatam un renderiem, un {{ui:Lietot}} vienu, kad tas jāpaliek uz visiem laikiem. Skatiet [Modifikatori tīklam](topic:modifiers).
- **Apakšdalīšana ar šķautnēm.** {{ui:Šķautne}} tīklu darbvietā saglabā izvēlētas malas asas zem apakšdalīšanas virsmas. Renderēšanā var izmantot vairāk līmeņu nekā skatā, un lielam tīklam skats rāda zemāku līmeni un par to paziņo. Skatiet [Apakšdalīšanas virsma](topic:modifiers#subdivision-surface).
- **Līkņu objekti.** Bezjē, NURBS un taisnu segmentu līknes, kas veido cauruli, joslu, konusveida formu vai aizpildītu plāksni, un teksts kā līkne. Rediģējiet to punktus {{ui:Līkne}} darbvietā; {{ui:Par tīklu}}, kad forma ir pareiza. Skatiet [Līkņu objekti](topic:curves).
- **UV darbvieta.** Atzīmējiet šuves (vai ļaujiet ModelCraft tās atzīmēt asās malās), {{ui:Izvērst}} un {{ui:Sakārtot}}, vai projicējiet pēc kastes, cilindra, sfēras vai skata. Blakus 3D skatam UV redaktors pārvieto, pagriež un mērogo gabalus, bet rezultātu parāda šaha raksts un izstiepuma krāsas. Skatiet [Izkārtot tīkla UV](topic:uv).
- **Skulptēšana.** Darbvietā {{ui:Skulptēt}} ir zīmēšanas, māla, izlīdzināšanas, satveršanas, piepūšanas, šķautnes, savilkšanas, saplacināšanas un maskas otas, spoguļošana pāri X asij un {{ui:Detaļa}}, kas pievieno trīsstūrus, kur skulptējat. Pildspalvas spiediens nosaka otas izmēru un stiprumu. Katrs vilciens ir viens atsaukšanas solis. Skatiet [Skulptēt tīklu](topic:sculpt).
- **Pārveidošana un retopoloģija.** {{ui:Pārveidot tīklu}} izveido visu tīklu no jauna kā vienmērīgus trīsstūrus, aizverot caurumus un savienojot pārklājošās daļas. Lai izveidotu tīru tīklu pār detalizētu, izvēlieties to sadaļā {{ui:Retopoloģija}}: punkti, ko pārvietojat, nonāk uz tā virsmas. Skatiet [Pārveidot tīklu](topic:mesh-edit#remesh).

### Zīmēšana

- **Dalīt malu vai līkni.** Rīks {{ui:Dalīt}} atzīmē griezumus, kamēr pārvietojaties pa malu, un dala ar klikšķi vai ierakstītu skaitli; ar atlasītu malu, loku vai riņķi ierakstiet `/5`; {{ui:Objekta informācija}} › {{ui:Dalīt…}} jautā skaitli planšetdatoriem. Loku vai riņķi dala ar vienādiem leņķiem pa īsto loku. Skatiet [Dalīt malu vai līkni vienādās daļās](topic:divide).
- **Aprēķini vērtību laukā.** Ierakstiet `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` vai `2*450mm` jebkuram garumam un `90/2` leņķim. Aprēķins, ko nevar izpildīt, pasaka, kas nav kārtībā un kur. Skatiet [Aprēķini](topic:value-box#calculations).

### Renderēšana

- **Ceļa izsekošana uz grafikas kartes.** {{ui:Renderēt attēlu…}} › {{ui:Augsta kvalitāte (ceļa izsekošana)}} izmanto CadCraft savu ceļa izsekotāju uz grafikas kartes, kur pārlūkprogrammā ir WebGPU; līnija zem attēla norāda, kurš dzinējs to izveidoja. {{ui:Apturēt}} saglabā attēlu, un {{ui:Turpināt}} turpina no turienes. Bez WebGPU attēls tiek izsekots ar WebGL, kā agrāk. Skatiet [Augsta kvalitāte](topic:render#high-quality).
- **Renderēt skatā.** {{ui:Renderēt}} darbvieta izseko pašu skatu un sāk no jauna, kad griežat vai rediģējat: renderējiet {{ui:Apgabals}}, noklikšķiniet uz {{ui:Fokuss}}, iestatiet {{ui:Detaļa}}. Nepieciešams WebGPU. Skatiet [Renderēt skatā](topic:render#render-in-the-view).
- **Materiāli, gaismas un debesis.** Augstas kvalitātes attēli ēno katru virsmu ar OpenPBR materiāla modeli (pārklājumi, pūkainums, plānās plēves, krāsains stikls, mirdzums). Ar WebGPU ir arī {{ui:Fiziskas debesis}} ar {{ui:Miglainība}}, {{ui:Debesu attēls (HDRI)}} un ražotāju IES gaismas profili lampām. Skatiet [Debesis un gaismu profili](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kā fotogrāfijā.** Ekspozīcija no diafragmas, slēģa un ISO katrā režīmā; ar WebGPU arī lauka dziļums, divpunktu perspektīva, baltā balanss, 360° panorāmas (arī stereo) un kubu kartes. Skatiet [Kamera](topic:render#the-camera).
- **Pabeigt attēlu pēc renderēšanas.** Noregulējiet to toni ({{ui:ACES filmiskais}}, {{ui:AgX}}, {{ui:Filmiskais}} vai {{ui:Standarta}}, kontrasts, uzplaiksnījums, spīdums, vinjete, `.cube` krāsu tabula), sajauciet debesis, sauli un katru lampu grupu, un apskatiet renderēšanas elementus pa vienam, bez jauna renderēšanas. Atlikušos graudus notīra trokšņu samazinātājs jūsu datorā. Skatiet [Pabeigt attēlu](topic:render#finish-the-picture) un [Sajaukt gaismas pēc renderēšanas](topic:render#mix-the-lights-after-the-render).
- **Vairāk veidu, kā saglabāt renderētu attēlu.** 16 bitu PNG, daudzslāņu EXR ar katru renderēšanas elementu un gaismu grupu un renderēšanas fails (`.ccrender`), ko var atvērt atkal ar tā sajaukumu un toni. Skatiet [Saglabāt attēlu](topic:render#save-the-picture).
- **Migla, dūmi un kaustika.** Migla un miglainība, ko apgaismo saule un lampas, ar gaismas stariem; viena dūmu kolonna vai mākonis; kaustika zem stikla un spoguļiem; adaptīvā paraugņemšana, kas apstājas pikseļos, kuri jau ir tīri. Tikai uz grafikas kartes. Skatiet [Migla, dūmi, troksnis un kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Renderēšanas rinda un MP4.** Pievienojiet augstas kvalitātes attēlus un veselas animācijas {{ui:Renderēšanas rinda}}; tie renderējas viens pēc otra, un rinda saglabājas arī pēc lapas aizvēršanas. Nepieciešams WebGPU. Videoklipus var saglabāt arī kā MP4, kur pārlūkprogramma to var ierakstīt. Skatiet [Renderēšanas rinda](topic:render#the-render-queue) un [Renderēt videoklipu](topic:animation#render-the-video).

### Tiešraides skats un prezentācijas

- **Tiešraides skats.** {{ui:Eksportēt}} › {{ui:Tiešraide}} parāda modeli reāllaika izskatā blakus skatam, sekojot katrai rediģēšanai un kamerai: saules ēnas, materiāli, lampas un no sienām atstarota gaisma. {{ui:Staigāt}} pa to, velciet {{ui:Laiks}} un {{ui:Mēnesis}}, lai pārvietotu sauli, vai pārvietojiet to uz {{ui:Jauns logs}}. Tas izmanto WebGPU, ja pārlūkprogrammā tas ir, citādi WebGL 2. Skatiet [Tiešraides skats](topic:live-view).
- **Izkliede.** Izkliedējiet zāli, ziedus, akmeņus, kokus un cilvēkus pa virsmām vai ar otu, no septiņiem jauniem apkārtnes vienumiem un pārējās bibliotēkas; kopas tiek saglabātas failā. Skatiet [Izkliedēt augus, akmeņus un cilvēkus](topic:live-view#scatter-plants-rocks-and-people).
- **Kopīgošana.** 360° panorāma, panorāmas tūre ar bultiņām starp vietām, autonoms skatītājs (viena tīmekļa lapa, kas atveras bezsaistē un neielādē neko no interneta) un video par kameras ceļu, viss reāllaika izskatā. Skatiet [Kopīgošana](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR reāllaika izskatā.** {{ui:Pārskatīt VR}} rāda modeli ar tā materiāliem, debesīm, saules ēnu, lampām, izkliedētajiem vienumiem un atstarotu gaismu. Skatiet [Kā tas izskatās](topic:vr-review#what-it-looks-like).

### Materiāli

- **Materiāli, kas veidoti ar mezgliem.** Darbvieta {{ui:Ēnojums}} veido faila pašus materiālus kā mezglu grafus: attēlus, troksni un šaha rakstus, Voronoi šūnas, viļņus, ķieģeļus, flīzes, koku, marmoru, pārejas, netīrumus un malu nodilumu, krāsu darbus, matemātiku, reljefa un normāļu kartes — pilnā OpenPBR materiālā. Skats parāda katru izmaiņu uzreiz. Skatiet [Veidot materiālus ar mezgliem](topic:shading).
- **Materiālu bibliotēka un jūsu pašu tekstūru kopas.** Ēnojuma panelis uzskaita bibliotēkas materiālus: sešpadsmit CC0 tekstūru kopas, katra ar norādītu autoru. Noklikšķiniet uz vienas, lai to izmantotu, vai velciet uz virsmas. {{ui:Attēlus vai zip…}} vai {{ui:Mapi…}} izveido materiālu no jūsu pašu kartēm, atrastām pēc to failu nosaukumiem. Skatiet [Materiāli no bibliotēkas](topic:shading#materials-from-the-library).
- **MaterialX ievade un izvade.** Eksportējiet materiālu kā MaterialX (OpenPBR Surface vai Standard Surface, tekstūras kā PNG) un importējiet MaterialX failus kopā ar to attēliem. Skatiet [MaterialX](topic:shading#materialx).
- **Uzlīmes un tekstūru krāsošana.** Novietojiet attēlu uz virsmas kā uzlīmi ar savu materiālu un krāsojiet uz materiāla attēla ar apaļu otu. Skatiet [Uzlīmes](topic:shading#decals) un [Krāsot uz tekstūras](topic:shading#paint-on-the-texture).
- **Tekstūru cepšana.** Cept apkārtējās aizsegšanas, izliekuma, apgaismojuma un detalizēta objekta normāļu attēlus gar tīkla UV, uz datora procesora kodoliem. Skatiet [Cept tekstūras](topic:shading#bake-textures).

### Animācija

- **Animēt darbvieta.** Ievietojiet atslēgas objekta vietai, pagriezienam un izmēram, katras lampas spilgtumam, izkliedei un krāsai, kā arī objektīva leņķim tieši panelī. Laika līnijai ir {{ui:Līknes}} skats (Bezjē rokturi, atkārtojumi) un {{ui:Klipi}} skats, kas saglabā atslēgas kā darbības, ko var novietot atkal un sajaukt; atslēgas vairākās rindās var pārvietot, stiept, kopēt un ielīmēt. Skatiet [Animēt jebkuru īpašību](topic:animate).
- **Formu atslēgas un draiveri.** Tīklā ir citas tā paša formas, kas sajauktas ar slīdņiem; slīdņus var atslēgt vai iestatīt pēc citām vērtībām ar nelielu izteiksmi. Skatiet [Formu atslēgas](topic:animate#shape-keys-morphs) un [Draiveri](topic:animate#drivers).
- **Skeleti.** Ievietojiet kaulus tīklā, ļaujiet {{ui:Automātiski svari}} sadalīt punktus starp tiem vai krāsojiet svarus, un novietojiet pozā un atslēdziet kaulus; lineāra vai dubultā kvaterniona ādas pārklāšana. Skatiet [Skeleti](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK un ierobežojumi.** Sasniegšana (IK) ar polu, skatīšanās virzienā, pārveidojumu kopēšana, ierobežojumi, pakārtots, sekot ceļam — kauliem un objektiem. Skatiet [IK un ierobežojumi](topic:animate#ik-and-constraints).
- **Fizika.** Grupas un komponenti krīt, sakraujas un saduras kā kastes vai bumbiņas, un {{ui:Aprēķināt fiziku}} saglabā rezultātu kā atslēgas. Skatiet [Fizika](topic:animate#physics-drop-stack-and-collide).

### Faili

- **USD.** {{ui:Saglabāt kā}} ({{key:Mod+Shift+S}}) saglabā modeli kā `.usda`, `.usdc` vai `.usdz`, un USD fails, ko ModelCraft saglabāja, atveras atkal bez zaudējumiem. USD no citām programmām atveras vai importējas kā tīkli, grupas, komponenti, lampas un kameras. {{ui:Saglabāt}} joprojām raksta `.modelcraft`. Skatiet [Saglabāt, atvērt un eksportēt USD](topic:usd).
- **glTF, pilnībā.** glTF faili ienāk kā rediģējami tīkli ar normālēm, UV, virsotņu krāsām un tekstūrām, mezgli kā grupas, gaismas kā lampas un kameras kā ainas, ieskaitot Draco un meshopt failus; `.gltf` atveras, ja to nometat kopā ar tā failiem. Eksportā raksta tīklus, tekstūras, lampas un kameras. Skatiet [glTF](topic:formats#gltf-glb-gltf).
- **FBX, PLY, STL un Alembic importēšana.** FBX 2011 un jaunāks (tīkli, UV kopas, materiāli, iegultas tekstūras, gaismas, kameras), PLY un STL ar to krāsām un Alembic kešatmiņas pirmajā paraugā. OBJ ienāk ar savu `.mtl` un attēliem, kad tos nometat kopā. Skatiet [Failu formāti sīkāk](topic:formats).
- **Papildu eksporti.** PLY ar krāsām, STL ar nokrāsoto virsmu krāsām un OBJ ar tā tekstūrām kā vienu zip failu. Skatiet [Failu formāti sīkāk](topic:formats).
- **STEP faili.** {{ui:Importēt}} nolasa STEP (AP203, AP214, AP242) detaļas un mezglus kā slēgtus tīkls to patiesajā izmērā, katru detaļu tur, kur fails to novieto. Skatiet [STEP](topic:formats#step-step-stp).
- **.3dm faili.** {{ui:Importēt}} nolasa `.3dm` modeļus: tīklus, politvirsmas un ekstrūzijas (no faila saglabātajiem tīkliem, citādi ModelCraft tos sadala trīsstūros), līknes kā malas, blokus kā komponentus un slāņus kā birkas. Skatiet [.3dm modeļa importēšana](topic:import-3dm-files).
- **3D cietie ķermeņi no DWG un DXF.** Rasējuma importēšana tagad ienes arī tā 3D cietos ķermeņus, reģionus un korpusus, katru kā savu grupu, slēgtos kā cietos ķermeņus. Skatiet [Modelēšana uz situācijas plāna](topic:site-plan#what-comes-in).

### 3D drukāšana

- **Drukas rīki.** {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}} › **Drukas rīki** ietver {{ui:Balstu priekšskatījums}} (pārkaras, kolonnas vai koka balsti, aptuveni cik materiāla), {{ui:Sienas biezums}} (sienas, kas drukāšanai par plānas, uzskaitītas ar {{ui:Rādīt}}), {{ui:Iedobums}} (sienas ar jūsu norādīto biezumu un drenāžas caurumiem) un {{ui:Labošana}} (katrs labojums uzskaitīts; pārklājošās daļas savienojas tikai tad, kad to pieprasāt). Iedobums un labošana dod grupu, kuras plakanās puses ir vienas virsmas, vai tīklu, ja rezultāts nesaslēdzas vai tam ir pārāk daudz virsmu; statusa rindā norādīts, kurš. Skatiet [Balsti, sienas biezums, iedobums un labošana](topic:print-tools).
- **Iesācēja stils.** {{ui:Iestatījumi}} › {{ui:ModelCraft}} › {{ui:Izvēlnes, taustiņi un pele}} › {{ui:Iesācējs}}: lielas pogas, lai nomestu formas un caurumus, pārvietotu, līdzinātu un {{ui:Grupa}}, lai caurumi izgrieztos, pēc tam pārbaudītu modeli drukāšanai. Skatiet [Iesācēja stils](topic:beginner).

## Labots

- {{ui:Cietie ķermeņi}} › {{ui:Apvienot}}, {{ui:Atņemt}} un {{ui:Krustot}} varēja atgriezt grupu, kas nebija slēgta, jebkurā izmērā. Tagad tā slēdzas.
- {{ui:Cietie ķermeņi}} › {{ui:Atņemt}} bija pelēks, kad nekas nebija atlasīts, lai gan pēc tā izvēles tas izvēlas savus divus gabalus pēc kārtas.
- Animācijas laika līnijas iekšienē ierakstītie taustiņi nekur nenonāca, arī {{key:Mod+S}}. {{key:Mod+Z}} un {{key:Mod+Y}} tur ir laika līnijas paša atsaukšana un atkārtošana; citi {{key:Mod}} taustiņi sasniedz lietotni.

## Visās lietotnēs

- **Vienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}} ir viens saraksts katram garumam, laukumam, tilpumam, leņķim un slīpumam, ar precīziem izmēriem, ko dod vienību definīcijas (ASV pārbaudes pēda ir sava vienība). Izslēdziet vienības, ko nekad neizmantojat, un tās pazūd no vienību sarakstiem; atzīmējiet vienu, un jaunais darbs sākas tajā. Fails vienmēr glabā savu vienību. ModelCraft vērtību lauka blakus esošais vienību saraksts seko slēdžiem (modeļa pašreizējā vienība vienmēr paliek sarakstā), zvaigznīte iestata jauna modeļa vienību (ja ModelCraft ir šī vienība), un garums, kas ierakstīts ar jebkuras vienības zīmi, tiek nolasīts šajā vienībā. Skatiet [Vienības, ierakstītās vērtības un vienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas sakārtojas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina ekrānā vairāk (skārienekrāni un tālruņi saglabā lielās pogas). Katram sānu panelim ir šaura virsrakstu josla: velciet to, lai piestiprinātu vai atdalītu paneli, nometiet uz cita paneļa joslas, lai dalītu vienu rāmi kā cilnes, piespraudiet, lai tas paslīd uz malu, vai paslēpiet un atgrieziet to no malas. Skatiet [Izkārtot paneļus](common:arrange-panels#make-the-layout-denser).
- **Dialogi pārvietojas.** Velciet dialogu aiz tā virsrakstu joslas, lai tas nebūtu ceļā zīmējumam; tas atgriežas tur, kur to atstājāt. Veiciet dubultklikšķi uz virsrakstu joslas, lai to atkal centrētu. Skatiet [Pārvietot dialogu](common:arrange-panels#move-a-dialog).
- **Receptes MI palīgiem.** Desmit gatavas pieprasījumu receptes jūsu palīgam (sakārtot zīmējumu, uzzīmēt komplektu, pārbaudīt rasējumus, uzdot jautājumus par modeli, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu…), katra ar rīkiem, ko tā izsauc, un atļaujām, kas tai vajadzīgas, un katra atkārtota ar mūsu testiem. Lietotnēs nav MI. Skatiet [Receptes MI palīgiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}}; arī **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir ar visiem lietotņu vārdiem kā melnraksti, ko dzimtā valoda vēl nav pārskatījusi. Palīdzības tēmas ir angļu valodā.
- **CadCraft Studio** norāda, kāpēc atjauninājumu pārbaude neizdevās (failu jūsu sistēmai vēl nav, nav tīkla, slikts paraksts), nevis tikai „Gatavs”, un vairs neatgriež Jaunumu karti, ko aizvērāt, kamēr nav jaunāks izlaidums.

## Vēl nav šajā versijā

- **0.7 nav koda parakstīts.** Parakstīšana un Microsoft Store pakotne pārcelta uz 0.8, jo sertifikāta pārbaude vēl nav pienākusi. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Operētājsistēmā Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildu informācija}}, pēc tam {{ui:Palaist tomēr}}. Mac datorā pirmajā reizē ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. CadCraft Studio vēl nav lietotņu veikalā, un vēl nav iPad vai iPhone versijas.
- Leņķa un slīpuma saraksti sadaļā {{ui:Vienības}} tiek saglabāti, bet neviens lodziņš tos vēl nenolasa.
- Renderēšana uz grafikas kartes (WebGPU) šeit testēta tikai ar programmatūras aizvietotāju, vēl ne uz īstām grafikas kartēm, tāpēc vispirms renderējiet kaut ko mazu savā datorā. Tas pats attiecas uz tiešraides skatu, un VR vēl ir izmēģināts tikai ar galvas komplekta emulatoru.
- Bez WebGPU nav renderēšanas darbvietas vai renderēšanas rindas, un augstas kvalitātes attēliem nav lauka dziļuma, fiziskām debesīm, debesu attēla, miglas, dūmu, kaustikas vai gaismu sajaukšanas.
- {{ui:Renderēt attēlu…}} vēl nezīmē izkliedētos vienumus; tie redzami tiešraides skatā, tā panorāmās, skatītājā un video.
- Lampas animējas skatā, bet renderēts video izmanto lampas tādas, kādas tās ir, kad tas sākas.
- Kauli un animācija netiek nolasīti vai rakstīti glTF, FBX vai USD failos vēl (ar ādu pārklātie modeļi ienāk miera stāvoklī ar saviem svariem), un glTF un FBX materiāli aiz bāzes krāsas vai tekstūras vēl nav saglabāti.
- STEP krāsas un montāžas detaļu nosaukumi vēl netiek nolasīti. `.3dm` importēšana testēta ar failiem, ko rakstījis formāta rīkkopa, vēl ne ar failiem no pašas modelēšanas programmas; SubD objekti, teksts un izmēri ir izlaisti.
- Augu bibliotēka no CivilCraft ir ModelCraft, bet augu novietošana no tās vēl nav izveidota.
- Tekstūras krāsošana uz stumšanas/vilkšanas virsmām atkārtojas ar materiāla flīzi; lai nokrāsotu tikai vienu virsmu, pārvērtiet to par tīklu un izvērsiet to.

Viss pārējais ir [Vēl nav izveidots](topic:not-built-yet).
