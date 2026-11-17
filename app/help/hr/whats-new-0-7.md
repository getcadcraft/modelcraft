---
title: Što je novo u 0.7 (ranije)
summary: Mreže s modifikatorima, kiparenje, UV-ovi i objekti krivulja, praćenje putanja na grafičkoj kartici i radni prostor Renderiraj, prikaz uživo u stvarnom vremenu s raspršivanjem i panoramama, čvorni materijali, radni prostor Animacija s kostima i fizikom, USD, FBX, STEP i .3dm datoteke te alati za 3D ispis s početničkim stilom.
keywords: što je novo 0.7, ranije izdanje, bilješke o izdanju, popis promjena, promjene, 0.7, verzija, nove značajke, mreža, mreže, radni prostor mreža, modifikatori, podjela, žlijeb, uv, razmotavanje, šavovi, krivulje, objekti krivulja, nurbs, bezier, kiparenje, remesh, retopologija, podjela brida, izračun, praćenje putanja, webgpu, radni prostor render, red renderiranja, mp4, exr, uklanjanje šuma, fizikalno nebo, hdri, ies, dubina polja, miješanje svjetla, magla, kaustika, prikaz uživo, stvarno vrijeme, hodaj, raspršivanje, panorama, obilazak, preglednik, sjenčanje, čvorovi, čvorni materijali, knjižnica materijala, materialx, naljepnice, bojanje teksture, pečenje, animacija, uređivač grafa, isječci, ključevi oblika, pokretači, armatura, kosti, skinning, ik, ograničenja, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D tijela, potpore, debljina stijenke, izdubi, popravak, početnik, pomoćnici, vaše računalo, jedinice, portugalski
from: fa562a09
---

Ovo je što se promijenilo u ModelCraftu 0.7 u odnosu na 0.6. ModelCraft sada modelira mreže uz geometriju potisni/povuci, renderira na grafičkoj kartici i ima radni prostor za svaku vrstu posla: odaberite ga na popisu {{ui:Radni prostor}} s lijeve strane alatne trake.

## Novo

### Mreže

- **Mreže.** Odaberite grupu ili komponentu i kliknite {{ui:Pretvori u mrežu}} u {{ui:Informacije o entitetu}}: postaje mreža s plohama s proizvoljnim brojem kutova koje mogu nositi teksturne koordinate, normale, boje i težine. {{ui:Pretvori u geometriju}} vraća je natrag. Poništavanje na mreži zadržava samo ono što je svaki korak promijenio. Datoteka koja sadrži mrežu treba ModelCraft 0.7 da se otvori. Vidi [Mreže](topic:meshes).
- **Radni prostor Mreža.** Dvaput kliknite mrežu ili odaberite {{ui:Mreža}} na popisu {{ui:Radni prostor}} da uredite njezine vrhove, bridove i plohe: petlje i prstenove, proporcionalno uređivanje, izvlačenje, uvlačenje, skošenje, rez petlje, nož, bisekciju, okretanje, spajanje, rastapanje, popunjavanje, popunjavanje mreže, most i klizanje te postavke posljednje operacije, naknadno promijenjene na ploči. Počnite od ravnine, kocke, kugle, torusa i drugih. Tipke potisni/povuci i tipke modelara rade obje. Vidi [Uređivanje mreže u radnom prostoru Mreža](topic:mesh-edit).
- **Modifikatori.** Zrcaljenje, niz, podjela površine, skošenje, učvršćivanje, bulova operacija, pomak, zavarivanje, decimacija, glađenje, rešetka, deformacija krivuljom i stezanje po omotaču mijenjaju što mreža prikazuje, bez promjene same mreže. Slažite ih, uključujte ili isključujte za prikaz i za renderiranje te {{ui:Primijeni}} jedan kad ga želite trajno. Vidi [Modifikatori na mreži](topic:modifiers).
- **Podjela sa žlijebovima.** {{ui:Žlijeb}} u radnom prostoru Mreža drži odabrane bridove oštrima pod podjelom površine. Renderiranje može koristiti više razina od prikaza, a na velikoj mreži prikaz pokazuje nižu razinu i kaže to. Vidi [Podjela površine](topic:modifiers#subdivision-surface).
- **Objekti krivulja.** Bézierove, NURBS i ravnosegmentne krivulje od kojih nastaju cijev, traka, suženje ili puna ploča, te tekst kao krivulja. Uredite njihove točke u radnom prostoru {{ui:Krivulja}}; {{ui:U mrežu}} kad je oblik dobar. Vidi [Objekti krivulja](topic:curves).
- **Radni prostor UV.** Označite šavove (ili neka ModelCraft označi na oštrim bridovima), {{ui:Razmotaj}} i {{ui:Složi}}, ili projicirajte po kutiji, valjku, kugli ili pogledu. UV editor pokraj 3D prikaza pomiče, okreće i skalira dijelove, a šahovnica i boje razvlačenja pokazuju rezultat. Vidi [Raspored UV-ova mreže](topic:uv).
- **Kiparenje.** Radni prostor {{ui:Kiparenje}} ima kistove: crtanje, glina, glađenje, hvatanje, napuhivanje, žlijeb, stezanje, izravnavanje i maska, zrcaljenje duž osi X, te {{ui:Detalj}} koji dodaje trokute tamo gdje kiparite. Pritisak olovke određuje veličinu i jačinu kista. Svaki potez je jedan korak poništavanja. Vidi [Kiparenje mreže](topic:sculpt).
- **Remesh i retopologija.** {{ui:Remesh}} ponovno izrađuje cijelu mrežu kao ravnomjerne trokute, zatvarajući rupe i spajajući preklapajuće dijelove. Za čistu mrežu nad detaljnom odaberite je pod {{ui:Retopologija}}: točke koje pomaknete padaju na njezinu plohu. Vidi [Remesh](topic:mesh-edit#remesh).

### Crtanje

- **Podjela brida ili krivulje.** Alat {{ui:Podijeli}} označava rezove dok se krećete duž brida i dijeli klikom ili upisanim brojem; s odabranim bridom, lukom ili kružnicom upišite `/5`; {{ui:Informacije o entitetu}} › {{ui:Podijeli…}} traži broj, za tablete. Luk ili kružnica dijele se jednakim kutovima na stvarnom luku. Vidi [Podjela brida ili krivulje na jednake dijelove](topic:divide).
- **Izračuni u polju vrijednosti.** Upišite `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm` za bilo koju duljinu, i `90/2` za kut. Izračun koji se ne može izvesti kaže što nije u redu i gdje. Vidi [Izračuni](topic:value-box#calculations).

### Renderiranje

- **Praćenje putanja na grafičkoj kartici.** {{ui:Renderiraj sliku…}} › {{ui:Visoka kvaliteta (path tracing)}} pokreće vlastiti CadCraft path tracer na grafičkoj kartici tamo gdje preglednik ima WebGPU; redak ispod slike kaže koji ju je motor izradio. {{ui:Zaustavi}} zadržava sliku, a {{ui:Nastavi}} nastavlja odatle. Bez WebGPU-a slika se prati putanjom s WebGL-om, kao prije. Vidi [Visoka kvaliteta](topic:render#high-quality).
- **Renderiranje u prikazu.** Radni prostor {{ui:Renderiraj}} sam prati putanje prikaza i kreće ispočetka dok orbitirate ili uređujete: renderirajte {{ui:Područje}}, kliknite za {{ui:Fokus}}, postavite {{ui:Detalj}}. Treba WebGPU. Vidi [Renderiranje u prikazu](topic:render#render-in-the-view).
- **Materijali, svjetla i nebesa.** Slike visoke kvalitete sjenčaju svaku plohu modelom materijala OpenPBR (premazi, dlakavost, tanki filmovi, obojeno staklo, sjaj). S WebGPU-om postoji i {{ui:Fizikalno nebo}} s {{ui:Zamagljenost}}, {{ui:Slika neba (HDRI)}} i IES profili svjetiljki proizvođača. Vidi [Nebo i profili svjetla](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kao fotografska.** Ekspozicija iz otvora blende, zatvarača i ISO-a u svakom načinu; s WebGPU-om još i dubina polja, perspektiva s dvije točke, ravnoteža bijele, panorame od 360° (i stereo) te kubne karte. Vidi [Kamera](topic:render#the-camera).
- **Dovršite sliku nakon renderiranja.** Gradirajte je ({{ui:ACES filmski}}, {{ui:AgX}}, {{ui:Filmic}} ili {{ui:Standardno}}, kontrast, bloom, odsjaj, vinjeta, tablica boja `.cube`), miješajte nebo, sunce i svaku skupinu svjetiljki te pregledavajte elemente renderiranja jedan po jedan, sve bez ponovnog renderiranja. Preostali šum uklanja odšumljivač na vašem računalu. Vidi [Dovršavanje slike](topic:render#finish-the-picture) i [Miješanje svjetla nakon renderiranja](topic:render#mix-the-lights-after-the-render).
- **Više načina spremanja renderiranja.** PNG od 16 bita, višeslojni EXR sa svakim elementom renderiranja i skupinom svjetla te datoteka renderiranja (`.ccrender`) koja se ponovno otvara sa svojim miješanjem i gradacijom. Vidi [Spremanje slike](topic:render#save-the-picture).
- **Magla, dim i kaustika.** Magla i izmaglica osvijetljene suncem i svjetiljkama, sa svjetlosnim snopovima; jedan stup dima ili oblak; kaustika ispod stakla i zrcala; adaptivno uzorkovanje koje staje na pikselima koji su već čisti. Samo na grafičkoj kartici. Vidi [Magla, dim, šum i kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Red renderiranja i MP4.** Dodajte slike visoke kvalitete i cijele animacije u {{ui:Red renderiranja}}; renderiraju se jedna za drugom, a red preživi zatvaranje stranice. Treba WebGPU. Videi se mogu spremiti i kao MP4 tamo gdje ga preglednik može zapisati. Vidi [Red renderiranja](topic:render#the-render-queue) i [Renderiranje videa](topic:animation#render-the-video).

### Prikaz uživo i prezentacije

- **Prikaz uživo.** {{ui:Izvezi}} › {{ui:Prikaz uživo}} prikazuje model u izgledu u stvarnom vremenu pokraj prikaza, prateći svaku izmjenu i kameru: sjene od sunca, materijali, svjetiljke i svjetlo odbijeno od zidova. {{ui:Hodaj}} kroz njega, povucite {{ui:Vrijeme}} i {{ui:Mjesec}} da pomaknete sunce ili ga premjestite u {{ui:Novi prozor}}. Koristi WebGPU gdje ga preglednik ima, inače WebGL 2. Vidi [Prikaz uživo](topic:live-view).
- **Raspršivanje.** Raširite travu, cvijeće, kamenje, drveće i ljude po plohama ili kistom, iz sedam novih stavki pratnje i ostatka knjižnice; skupovi se spremaju u datoteku. Vidi [Raspršivanje biljaka, kamenja i ljudi](topic:live-view#scatter-plants-rocks-and-people).
- **Dijeljenje.** Panorama od 360°, obilazak panoramom sa strelicama između mjesta, samostalni preglednik (jedna web-stranica koja se otvara izvan mreže i ne učitava ništa s interneta) i video putanje kamere, sve u izgledu u stvarnom vremenu. Vidi [Dijeljenje](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR u izgledu u stvarnom vremenu.** {{ui:Pregled u VR-u}} prikazuje model s materijalima, nebom, sjenom sunca, svjetiljkama, raspršenim stavkama i odbijenim svjetlom. Vidi [Kako izgleda](topic:vr-review#what-it-looks-like).

### Materijali

- **Materijali izrađeni čvorovima.** Radni prostor {{ui:Sjenčanje}} gradi vlastite materijale datoteke kao grafove čvorova: slike, šum i šahovnice, Voronoi ćelije, valove, opeke, pločice, drvo, mramor, prijelaze, prljavštinu i trošenje bridova, obradu boja, matematiku, mape reljefa i normala, u puni materijal OpenPBR. Prikaz pokazuje svaku promjenu odmah. Vidi [Izrada materijala čvorovima](topic:shading).
- **Knjižnica materijala i vaši skupovi tekstura.** Ploča Sjenčanje navodi materijale iz Knjižnice: šesnaest skupova tekstura CC0, svaki s navedenim autorom. Kliknite jedan da ga upotrijebite ili ga povucite na plohu. {{ui:Slike ili zip…}} ili {{ui:Mapa…}} izrađuje materijal iz vaših vlastitih mapa, prepoznatih po nazivima datoteka. Vidi [Materijali iz knjižnice](topic:shading#materials-from-the-library).
- **MaterialX na ulazu i izlazu.** Izvezite materijal kao MaterialX (OpenPBR Surface ili Standard Surface, teksture kao PNG) i uvezite MaterialX datoteke s njihovim slikama. Vidi [MaterialX](topic:shading#materialx).
- **Naljepnice i bojanje teksture.** Postavite sliku na plohu kao naljepnicu s vlastitim materijalom i bojajte po slici materijala okruglim kistom. Vidi [Naljepnice](topic:shading#decals) i [Bojanje po teksturi](topic:shading#paint-on-the-texture).
- **Pečenje tekstura.** Pecite ambijentalnu okluziju, zakrivljenost, osvjetljenje i normale detaljnog objekta u slike duž UV-ova mreže, na jezgrama procesora računala. Vidi [Pečenje tekstura](topic:shading#bake-textures).

### Animacija

- **Radni prostor Animacija.** Postavite ključeve za mjesto, okretanje i veličinu objekta, svjetlinu, širenje i boju svake svjetiljke te kut leće, odmah u ploči. Vremenska crta dobiva prikaz {{ui:Krivulje}} (Bézierove ručke, ponavljanja) i prikaz {{ui:Klipovi}} koji sprema ključeve kao radnje za ponovno postavljanje i miješanje; ključeve na više redaka može se pomicati, rastezati, kopirati i lijepiti. Vidi [Animiranje bilo kojeg svojstva](topic:animate).
- **Ključevi oblika i pokretači.** Mreža sadrži druge svoje oblike, miješane klizačima koji se mogu postaviti ključem, ili postavljene iz drugih vrijednosti pomoću kratkog izraza. Vidi [Ključevi oblika](topic:animate#shape-keys-morphs) i [Pokretači](topic:animate#drivers).
- **Armature.** Stavite kosti u mrežu, pustite {{ui:Automatske težine}} da podijele točke među njima ili bojajte težine, te postavljajte pozu i ključeve kostiju; linearno ili dvostruko kvaternionsko oblaganje (skinning). Vidi [Armature](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK i ograničenja.** Dohvat (IK) s polom, gledanje prema, kopiranje transformacija, granice, dijete od i slijeđenje putanje, za kosti i objekte. Vidi [IK i ograničenja](topic:animate#ik-and-constraints).
- **Fizika.** Grupe i komponente padaju, slažu se i sudaraju kao kutije ili kugle, a {{ui:Ispeci fiziku}} zadržava rezultat kao ključeve. Vidi [Fizika](topic:animate#physics-drop-stack-and-collide).

### Datoteke

- **USD.** {{ui:Spremi kao}} ({{key:Mod+Shift+S}}) sprema model kao `.usda`, `.usdc` ili `.usdz`, a USD datoteka koju je ModelCraft spremio otvara se ponovno bez gubitka. USD iz drugih programa otvara se ili uvozi kao mreže, grupe, komponente, svjetiljke i kamere. {{ui:Spremi}} i dalje zapisuje `.modelcraft`. Vidi [Spremanje, otvaranje i izvoz USD-a](topic:usd).
- **glTF, potpuno.** glTF datoteke dolaze kao mreže koje se mogu uređivati, s normalama, UV-ovima, bojama vrhova i teksturama, čvorovi kao grupe, svjetla kao svjetiljke i kamere kao scene; uključene su Draco i meshopt datoteke. `.gltf` se otvara kad se ispusti zajedno sa svojim datotekama. Izvoz zapisuje mreže, teksture, svjetiljke i kamere. Vidi [glTF](topic:formats#gltf-glb-gltf).
- **Uvoz FBX, PLY, STL i Alembic.** FBX 2011 i noviji (mreže, skupovi UV-ova, materijali, ugrađene teksture, svjetla, kamere), PLY i STL s njihovim bojama te Alembic predmemorije na njihovom prvom uzorku. OBJ dolazi sa svojom `.mtl` datotekom i slikama kad ih ispustite zajedno. Vidi [Formati datoteka detaljno](topic:formats).
- **Više izvoza.** PLY s bojama, STL s bojama obojenih ploha i OBJ s njegovim teksturama kao jedan zip. Vidi [Formati datoteka detaljno](topic:formats).
- **STEP datoteke.** {{ui:Uvezi}} čita STEP (AP203, AP214, AP242) dijelove i sklopove kao zatvorene mreže u njihovoj stvarnoj veličini, svaki dio tamo gdje ga datoteka postavlja. Vidi [STEP](topic:formats#step-step-stp).
- **.3dm datoteke.** {{ui:Uvezi}} čita `.3dm` modele: mreže, poliplohe i izvlačenja (iz mreža spremljenih u datoteci, inače razložene na trokute u ModelCraftu), krivulje kao bridove, blokove kao komponente i slojeve kao oznake. Vidi [Uvoz .3dm modela](topic:import-3dm-files).
- **3D tijela iz DWG i DXF.** Uvoz crteža sada donosi i njegova 3D tijela, područja i tijela, svako kao vlastitu grupu, zatvorena kao puna tijela. Vidi [Model na situacijskom planu](topic:site-plan#what-comes-in).

### 3D ispis

- **Alati za ispis.** {{ui:Provjera za 3D ispis (STL ili 3MF)…}} › **Alati za ispis** ima {{ui:Pregled potpora}} (previsi, stupci ili stablaste potpore, otprilike koliko materijala), {{ui:Debljina stijenke}} (stijenke pretanke za ispis, navedene uz {{ui:Prikaz}}), {{ui:Izdubi}} (stijenke zadane debljine, s rupama za odvod) i {{ui:Popravak}} (svaki popravak naveden; preklapajući dijelovi spajaju se samo kad to zatražite). Izdubi i Popravak daju grupu čije su ravne strane pojedinačne plohe, ili mrežu kad rezultat ne bi bio zatvoren ili ima previše ploha; redak statusa kaže koje. Vidi [Potpore, debljina stijenke, izdubljivanje i popravak](topic:print-tools).
- **Početnički stil.** {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Izbornici, tipke i miš}} › {{ui:Početnik}}: veliki gumbi za ubacivanje oblika i rupa, pomicanje, poravnavanje i {{ui:Grupa}} da se rupe izrežu, zatim provjera modela za ispis. Vidi [Početnički stil](topic:beginner).

### Pomoćnici i vaše računalo

- **Više za AI pomoćnike.** Pomoćnik sada može popisati plohe i materijale, potisni/povuci, bojati, izrađivati grupe, dodavati i prikazivati scene, dodavati mreže, uređivati nizove modifikatora, izvesti USD, renderirati sliku i puniti red renderiranja. Vidi [Korištenje ModelCraft-a s AI pomoćnikom](topic:use-with-ai-assistants).
- **Vaše računalo.** {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Renderiranje}} › {{ui:Vaše računalo}} prikazuje grafiku, jezgre procesora i memoriju koje ovaj preglednik dopušta aplikaciji te razinu koja određuje gdje prikaz uživo počinje. Vidi [S čime vaše računalo renderira](topic:your-machine).

## Popravljeno

- {{ui:Tijela}} › {{ui:Unija}}, {{ui:Oduzmi}} i {{ui:Presjek}} ponekad su vraćali grupu koja nije bila zatvorena, u bilo kojoj veličini. Sada se zatvaraju.
- {{ui:Tijela}} › {{ui:Oduzmi}} bio je zasivljen dok ništa nije odabrano, iako sam bira dva dijela redom nakon što ga odaberete.
- U vremenskoj crti animacije upisani tipkovni znakovi nisu išli nikamo, kao ni {{key:Mod+S}}. {{key:Mod+Z}} i {{key:Mod+Y}} tamo su vlastito poništavanje i ponavljanje vremenske crte; ostale tipke {{key:Mod}} dolaze do aplikacije.

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, volumen, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa vlastita je jedinica). Isključite jedinice koje nikad ne koristite i one nestaju s popisa jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U ModelCraftu popis jedinica pokraj polja vrijednosti slijedi prekidače (jedinica samog modela uvijek ostaje na popisu), zvjezdica postavlja jedinicu novog modela (kad ModelCraft ima tu jedinicu), a duljina upisana oznakom bilo koje jedinice čita se u toj jedinici. Vidi [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} stane više na zaslon (zasloni osjetljivi na dodir i telefoni zadržavaju velike gumbe). Svaka bočna ploča ima tanku naslovnu traku: povucite je da je usidrite ili odvojite, ispustite na traku druge ploče da dijelite jedan okvir kao kartice, prikvačite je da kliže prema rubu ili je sakrijte i vratite s ruba. Vidi [Raspored ploča](common:arrange-panels#make-the-layout-denser).
- **Dijaloški okviri se pomiču.** Povucite dijaloški okvir za naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvostruki klik na naslovnu traku ponovno ga centrira. Vidi [Pomicanje dijaloškog okvira](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset primjera zahtjeva za vašeg pomoćnika (sredi crtež, ispiši skup listova, provjeri crteže, postavi pitanja o modelu, zbroji predmjer, isprobaj varijantu dijela …), svaki s alatima koje poziva i dopuštenjima koja treba, te svaki ponovno pokrenut našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** nov je u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (nema datoteke za vaš sustav još, nema mreže, neispravan potpis) umjesto samo „Gotovo“, i prestaje vraćati karticu Što je novo koju ste zatvorili dok ne bude novijeg izdanja.

## Nije još u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer potvrda certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu, prvi put, desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovini aplikacija i još nema izrade za iPad ili iPhone.
- Popisi kuta i nagiba u {{ui:Jedinice}} se spremaju, ali nijedno polje ih još ne čita.
- Renderiranje na grafičkoj kartici (WebGPU) ovdje je testirano samo s programskom zamjenom, još ne na stvarnim grafičkim karticama, pa prvo renderirajte nešto malo na svom računalu. Isto vrijedi za prikaz uživo, a VR je i dalje isprobavan samo s emulatorom naočala.
- Bez WebGPU-a nema radnog prostora Renderiraj ni reda renderiranja, a slike visoke kvalitete nemaju dubinu polja, fizikalno nebo, sliku neba, magle, dim, kaustiku ni miješanje svjetla.
- {{ui:Renderiraj sliku…}} još ne crta raspršene stavke; one se prikazuju u prikazu uživo, njegovim panoramama, preglednikom i videom.
- Svjetiljke se animiraju u prikazu, ali renderirani video koristi svjetiljke onakve kakve su na početku.
- Kosti i animacija još se ne čitaju iz glTF, FBX ili USD datoteka niti se u njih zapisuju (modeli s oblaganjem dolaze u mirovanju, sa svojim težinama), a materijali glTF-a i FBX-a osim osnovne boje ili teksture još se ne zadržavaju.
- Boje STEP-a i nazivi dijelova sklopa još se ne čitaju. Uvoz `.3dm`-a testiran je s datotekama koje je zapisao alat formata, ne još s datotekama iz samog programa za modeliranje; SubD objekti, tekst i kote su izostavljeni.
- Knjižnica biljaka iz CivilCrafta nalazi se u ModelCraftu, ali postavljanje biljaka iz nje još nije izrađeno.
- Bojanje teksture na plohama potisni/povuci ponavlja se s pločicom materijala; da obojite samo jednu plohu, pretvorite je u mrežu i razmotajte je.

Sve ostalo nalazi se u [Još nije izrađeno](topic:not-built-yet).
