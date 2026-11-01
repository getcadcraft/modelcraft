---
title: Što je novo u 0.7
summary: Mreže s modifikatorima, kiparenje, UV koordinate i objekti krivulja, path tracing na grafičkoj kartici i radni prostor Render, prikaz uživo u stvarnom vremenu s raspršivanjem i panoramama, materijali izrađeni čvorovima, radni prostor Animiraj s kostima i fizikom, datoteke USD, FBX, STEP i .3dm te alati za ispis sa stilom Početnik.
keywords: što je novo, bilješke o izdanju, popis promjena, promjene, 0.7, verzija, nove značajke, mreža, mreže, radni prostor za mreže, modifikatori, subdivizija, žlijeb, uv, razmotaj, šavovi, krivulje, objekti krivulja, nurbs, bezier, kiparenje, remesh, retopologija, podijeli, izračun, path tracing, webgpu, radni prostor render, red renderiranja, mp4, exr, uklanjanje šuma, fizikalno nebo, hdri, ies, dubina polja, miješanje svjetla, magla, kaustika, prikaz uživo, stvarno vrijeme, hodaj, raspršivanje, panorama, obilazak, gledatelj, sjenčanje, čvorovi, materijali čvorova, knjižnica materijala, materialx, naljepnice, slikanje tekstura, pečenje, animiraj, uređivač grafa, klipovi, ključevi oblika, pogoni, kosturi, kosti, vezivanje kože, ik, ograničenja, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D tijela, potpore, debljina stijenke, izdubi, popravak, početnik, pomoćnici, vaše računalo, jedinice, portugalski
from: b9fc43e2
---

Ovo je što se promijenilo u ModelCraft 0.7 u odnosu na 0.6. ModelCraft sada modelira mreže kao i geometriju potiskivanja/povlačenja, renderira na grafičkoj kartici i ima radni prostor za svaku vrstu rada: odaberite ga na popisu {{ui:Workspace}} s lijeve strane alatne trake.

## Novo

### Mreže

- **Mreže.** Odaberite grupu ili komponentu i kliknite {{ui:Convert to mesh}} u {{ui:Entity info}}: postaje mreža s plohama s proizvoljnim brojem kutova koje mogu nositi koordinate teksture, normale, boje i težine. {{ui:Convert to geometry}} je vraća natrag. Poništavanje na mreži zadržava samo ono što je svaki korak promijenio. Datoteka koja sadrži mrežu treba ModelCraft 0.7 za otvaranje. Pogledajte [Mreže](topic:meshes).
- **Radni prostor Mreža.** Dvaput kliknite mrežu ili odaberite {{ui:Mesh}} na popisu {{ui:Workspace}} da biste uređivali njezine vrhove, bridove i plohe: petlje i prstenove, proporcionalno uređivanje, izvlačenje, uvlačenje, skošenje, rez petlje, nož, prepolovljenje, zavrtanje, spajanje, rastapanje, ispunjavanje, ispunu mreže, most i klizanje. Postavke posljednje operacije mijenjaju se naknadno na ploči. Počnite od ravnine, kocke, kugle, torusa i drugih oblika. Tipke potiskivanja/povlačenja i tipke modelara rade obje. Pogledajte [Uređivanje mreže u radnom prostoru Mreža](topic:mesh-edit).
- **Modifikatori.** Zrcaljenje, niz, subdivizijska površina, skošenje, učvršćivanje, bulova operacija, pomak, zavarivanje, prorjeđivanje, zaglađivanje, rešetka, deformacija krivuljom i shrinkwrap mijenjaju što mreža prikazuje, ne mijenjajući je samu. Slažite ih u stog, uključujte ili isključujte svaki za prikaz i za renderiranje, a kad želite da neki ostane, primijenite ga pomoću {{ui:Apply}}. Pogledajte [Modifikatori na mreži](topic:modifiers).
- **Subdivizija sa žlijebovima.** {{ui:Crease}} u radnom prostoru Mreža čuva odabrane bridove oštrima pod subdivizijskom površinom. Renderiranja mogu koristiti više razina nego prikaz, a na velikoj mreži prikaz pokazuje nižu razinu i to kaže. Pogledajte [Subdivizijska površina](topic:modifiers#subdivision-surface).
- **Objekti krivulja.** Bézierove, NURBS i ravnosegmentne krivulje koje tvore cijev, traku, suženje ili ispunjenu ploču, te tekst kao krivulja. Uređujte njihove točke u radnom prostoru {{ui:Curve}}; kad oblik bude dobar, koristite {{ui:To mesh}}. Pogledajte [Objekti krivulja](topic:curves).
- **Radni prostor UV.** Označite šavove (ili neka ih ModelCraft označi na oštrim bridovima), {{ui:Unwrap}} i {{ui:Pack}}, ili projicirajte kutijom, cilindrom, kuglom ili pogledom. UV uređivač uz 3D prikaz pomiče, okreće i skalira dijelove, a provjeravač i boje rastezanja prikazuju rezultat. Pogledajte [Raspored UV koordinata mreže](topic:uv).
- **Kiparenje.** Radni prostor {{ui:Sculpt}} ima kistove za crtanje, glinu, zaglađivanje, hvatanje, napuhivanje, žlijeb, stiskanje, spljoštavanje i masku, zrcaljenje po osi X, te {{ui:Detail}} koji dodaje trokute tamo gdje kiparite. Tlak olovke određuje veličinu i jačinu kista. Svaki potez je jedan korak poništavanja. Pogledajte [Kiparenje mreže](topic:sculpt).
- **Remesh i retopologija.** {{ui:Remesh}} ponovno izrađuje cijelu mrežu kao ujednačene trokute, zatvarajući rupe i spajajući preklapajuće dijelove. Za izradu čiste mreže preko detaljne odaberite je pod {{ui:Retopology}}: točke koje pomaknete slijeću na njezinu površinu. Pogledajte [Remesh](topic:mesh-edit#remesh).

### Crtanje

- **Podjela brida ili krivulje.** Alat {{ui:Divide}} označava rezove dok se krećete duž brida i dijeli klikom ili upisanim brojem; s odabranim bridom, lukom ili kružnicom upišite `/5`; {{ui:Entity info}} › {{ui:Divide…}} traži broj, za tablete. Luk ili kružnica dijele se jednakim kutovima na stvarnom luku. Pogledajte [Podjela brida ili krivulje na jednake dijelove](topic:divide).
- **Izračuni u polju vrijednosti.** Upišite `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm` za bilo koju duljinu, te `90/2` za kut. Izračun koji se ne može provesti kaže što nije u redu i gdje. Pogledajte [Izračuni](topic:value-box#calculations).

### Renderiranje

- **Path tracing na grafičkoj kartici.** {{ui:Render a picture…}} › {{ui:High quality (path traced)}} pokreće vlastiti path tracer CadCrafta na grafičkoj kartici gdje preglednik ima WebGPU; redak ispod slike kaže koji je motor izradio sliku. Naredba {{ui:Stop}} čuva sliku, a {{ui:Resume}} nastavlja od tamo. Bez WebGPU-a slika se path traca s WebGL-om, kao i prije. Pogledajte [Visoka kvaliteta](topic:render#high-quality).
- **Renderiranje u prikazu.** Radni prostor {{ui:Render}} path traca sam prikaz i počinje ispočetka čim orbitirate ili uređujete: renderirajte {{ui:Region}}, kliknite za {{ui:Focus}}, postavite {{ui:Detail}}. Potreban je WebGPU. Pogledajte [Renderiranje u prikazu](topic:render#render-in-the-view).
- **Materijali, svjetla i nebo.** Slike visoke kvalitete sjenčaju svaku površinu OpenPBR modelom materijala (premazi, dlakavost, tanki filmovi, obojeno staklo, sjaj). S WebGPU-om postoji i {{ui:Physical sky}} s {{ui:Haze}}, {{ui:Sky picture (HDRI)}} te IES profili svjetla proizvođača za svjetiljke. Pogledajte [Nebo i profili svjetla](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kao fotografska.** Ekspozicija iz f-broja, zatvarača i ISO-a u svakom načinu; s WebGPU-om i dubina polja, perspektiva s dvije točke, balans bijele, 360° panorame (također stereo) i mape kocke. Pogledajte [Kamera](topic:render#the-camera).
- **Dovršavanje slike nakon renderiranja.** Gradacija (ACES filmski, AgX, Filmic ili Standardno, kontrast, bloom, bljesak, vinjeta, `.cube` tablica boja), miješanje neba, sunca i svake skupine svjetiljki te pregled elemenata renderiranja jedan po jedan, sve bez ponovnog renderiranja. Preostalo zrnje uklanja alat za uklanjanje šuma na vašem računalu. Pogledajte [Dovršavanje slike](topic:render#finish-the-picture) i [Miješanje svjetla nakon renderiranja](topic:render#mix-the-lights-after-the-render).
- **Više načina spremanja renderiranja.** PNG s 16 bitova, EXR s više slojeva sa svakim elementom renderiranja i skupinom svjetla, te datoteka renderiranja (`.ccrender`) koja se ponovno otvara s miješanjem i gradacijom. Pogledajte [Spremanje slike](topic:render#save-the-picture).
- **Magla, dim i kaustika.** Magla i izmaglica osvijetljena suncem i svjetiljkama, sa svjetlosnim stupovima; jedan stup dima ili oblak; kaustika ispod stakla i zrcala; adaptivno uzorkovanje koje staje na pikselima koji su već čisti. Samo na grafičkoj kartici. Pogledajte [Magla, dim, šum i kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Red renderiranja i MP4.** Dodajte slike visoke kvalitete i cijele animacije u {{ui:Render queue}}; renderiraju se jedna za drugom, a red opstaje i nakon zatvaranja stranice. Potreban je WebGPU. Videozapisi se mogu spremiti i kao MP4 gdje preglednik to može zapisati. Pogledajte [Red renderiranja](topic:render#the-render-queue) i [Renderiranje videa](topic:animation#render-the-video).

### Prikaz uživo i prezentacije

- **Prikaz uživo.** {{ui:Export}} › {{ui:Live view}} prikazuje model u izgledu u stvarnom vremenu pored prikaza, prateći svaku izmjenu i kameru: sjene od sunca, materijali, svjetiljke i svjetlo odbijeno od zidova. Pomoću {{ui:Walk}} prolazite kroz njega, povucite {{ui:Time}} i {{ui:Month}} da pomaknete sunce, ili ga premjestite u {{ui:New window}}. Koristi WebGPU gdje ga preglednik ima, inače WebGL 2. Pogledajte [Prikaz uživo](topic:live-view).
- **Raspršivanje.** Raspršite travu, cvijeće, stijene, drveće i ljude po plohama ili kistom, iz sedam novih stavki pratećih elemenata i ostatka knjižnice; skupovi se spremaju u datoteku. Pogledajte [Raspršivanje biljaka, stijena i ljudi](topic:live-view#scatter-plants-rocks-and-people).
- **Dijeljenje.** Panorama od 360°, obilazak panoramom sa strelicama između mjesta, samostalni gledatelj (jedna web stranica koja se otvara bez mreže i ne učitava ništa s interneta) i video putanje kamere, sve u izgledu u stvarnom vremenu. Pogledajte [Dijeljenje](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR u izgledu u stvarnom vremenu.** {{ui:Review in VR}} prikazuje model s njegovim materijalima, nebom, sjenom sunca, svjetiljkama, raspršenim stavkama i odbijenim svjetlom. Pogledajte [Kako izgleda](topic:vr-review#what-it-looks-like).

### Materijali

- **Materijali izrađeni čvorovima.** Radni prostor {{ui:Shading}} izrađuje vlastite materijale datoteke kao grafove čvorova: slike, šum i šahovnice, Voronoi ćelije, valove, opeku, pločice, drvo, mramor, prijelaze boja, prljavštinu i trošenje bridova, rad s bojama, matematiku, mape reljefa i normala, sve do punog OpenPBR materijala. Prikaz odmah pokazuje svaku promjenu. Pogledajte [Izrada materijala čvorovima](topic:shading).
- **Knjižnica materijala i vlastiti skupovi tekstura.** Ploča Sjenčanje navodi materijale iz Knjižnice: šesnaest skupova tekstura CC0, svaki s navođenjem autora. Kliknite jedan da ga upotrijebite ili ga povucite na plohu. {{ui:Pictures or a zip…}} ili {{ui:A folder…}} izrađuje materijal iz vaših tekstura, prepoznatih po nazivima datoteka. Pogledajte [Materijali iz knjižnice](topic:shading#materials-from-the-library).
- **MaterialX na ulazu i izlazu.** Izvezite materijal kao MaterialX (OpenPBR Surface ili Standard Surface, teksture kao PNG) i uvezite MaterialX datoteke s njihovim slikama. Pogledajte [MaterialX](topic:shading#materialx).
- **Naljepnice (decali) i slikanje tekstura.** Postavite sliku na plohu kao naljepnicu s vlastitim materijalom te slikajte po slici materijala okruglim kistom. Pogledajte [Naljepnice](topic:shading#decals) i [Slikanje po teksturi](topic:shading#paint-on-the-texture).
- **Pečenje tekstura.** Pecite ambijentalnu okluziju, zakrivljenost, osvjetljenje i normale detaljnog objekta u slike duž UV koordinata mreže, na procesorskim jezgrama računala. Pogledajte [Pečenje tekstura](topic:shading#bake-textures).

### Animacija

- **Radni prostor Animiraj.** Postavite ključeve mjesta, okretanja i veličine objekta, svjetline, raspršenosti i boje svake svjetiljke te kut leće, izravno na ploči. Vremenska crta dobiva prikaz {{ui:Curves}} (Bézierove ručke, ponavljanja) i prikaz {{ui:Clips}} koji sprema ključeve kao radnje za ponovno postavljanje i miješanje; ključeve na više redaka može se pomicati, rastezati, kopirati i lijepiti. Pogledajte [Animiranje bilo kojeg svojstva](topic:animate).
- **Ključevi oblika i pogoni.** Mreža može sadržavati druge svoje oblike, miješane klizačima koji se mogu postaviti kao ključevi ili zadati iz drugih vrijednosti pomoću malog izraza. Pogledajte [Ključevi oblika](topic:animate#shape-keys-morphs) i [Pogoni](topic:animate#drivers).
- **Kosturi.** Stavite kosti u mrežu, pustite {{ui:Automatic weights}} da raspodijeli točke među njima ili slikajte težine, te postavljajte pozu i ključajte kosti; linearno ili dual quaternion vezivanje kože. Pogledajte [Kosturi](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK i ograničenja.** Doseg (IK) s polom, gledaj prema, kopiranje transformacija, granice, dijete od i prati putanju, za kosti i objekte. Pogledajte [IK i ograničenja](topic:animate#ik-and-constraints).
- **Fizika.** Skupine i komponente padaju, slažu se i sudaraju kao kutije ili kuglice, a {{ui:Bake physics}} zadržava rezultat kao ključeve. Pogledajte [Fizika](topic:animate#physics-drop-stack-and-collide).

### Datoteke

- **USD.** {{ui:Save as}} ({{key:Mod+Shift+S}}) sprema model kao `.usda`, `.usdc` ili `.usdz`, a USD datoteka koju je ModelCraft spremio ponovno se otvara bez ičega izgubljenog. USD iz drugih programa otvara se ili uvozi kao mreže, grupe, komponente, svjetiljke i kamere. {{ui:Save}} i dalje piše `.modelcraft`. Pogledajte [Spremanje, otvaranje i izvoz USD-a](topic:usd).
- **glTF, potpuno.** glTF datoteke ulaze kao mreže koje se mogu uređivati, s normalama, UV koordinatama, bojama vrhova i teksturama; čvorovi kao grupe, svjetla kao svjetiljke, a kamere kao scene; uključene su Draco i meshopt datoteke; `.gltf` se otvara kad se ispusti zajedno sa svojim datotekama. Izvoz piše mreže, teksture, svjetiljke i kamere. Pogledajte [glTF](topic:formats#gltf-glb-gltf).
- **Uvoz FBX, PLY, STL i Alembic.** FBX 2011 i noviji (mreže, skupovi UV-a, materijali, ugrađene teksture, svjetla, kamere), PLY i STL s njihovim bojama, te Alembic predmemorije na njihovom prvom uzorku. OBJ se uvozi s `.mtl` i slikama kad ih ispustite zajedno. Pogledajte [Formati datoteka detaljno](topic:formats).
- **Više izvoza.** PLY s bojama, STL s bojama obojenih ploha i OBJ s teksturama kao jedna zip datoteka. Pogledajte [Formati datoteka detaljno](topic:formats).
- **Datoteke STEP.** {{ui:Import}} čita dijelove i sklopove STEP (AP203, AP214, AP242) kao zatvorene mreže u njihovoj stvarnoj veličini, svaki dio tamo gdje ga datoteka smješta. Pogledajte [STEP](topic:formats#step-step-stp).
- **Datoteke .3dm.** {{ui:Import}} čita `.3dm` modele: mreže, poliplohe i izvlačenja (iz mreža spremljenih u datoteci, inače tesselirane od ModelCrafta), krivulje kao bridove, blokove kao komponente i slojeve kao oznake. Pogledajte [Uvoz modela .3dm](topic:import-3dm-files).
- **3D tijela iz DWG i DXF.** Uvoz crteža sada donosi i njegova 3D tijela, regije i volumene, svako kao vlastitu grupu, a zatvorena kao tijela. Pogledajte [Model na situacijskom planu](topic:site-plan#what-comes-in).

### 3D ispis

- **Alati za ispis.** {{ui:Check for 3D printing (STL or 3MF)…}} › **Alati za ispis** ima {{ui:Supports preview}} (previsi, stupovi ili stablaste potpore, otprilike koliko materijala), {{ui:Wall thickness}} (stijenke pretanke za ispis, navedene uz {{ui:Show}}), {{ui:Hollow}} (stijenke zadane debljine, s odvodnim rupama) i {{ui:Repair}} (svaka popravka navedena; preklapajući dijelovi spajaju se samo kad to zatražite). {{ui:Hollow}} i {{ui:Repair}} daju grupu čije su ravne strane pojedinačne plohe, ili mrežu kad rezultat ne bi bio zatvoren ili ima previše ploha; redak stanja kaže koje. Pogledajte [Potpore, debljina stijenke, izdubljivanje i popravak](topic:print-tools).
- **Stil Početnik.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}} › {{ui:Beginner}}: veliki gumbi za dodavanje oblika i rupa, pomicanje, poravnavanje i {{ui:Group}} tako da se rupe izrežu, zatim provjerite model za ispis. Pogledajte [Stil Početnik](topic:beginner).

### Asistenti i vaše računalo

- **Više za AI pomoćnike.** Pomoćnik sada može popisati plohe i materijale, potisnuti/povući, slikati, izrađivati grupe, dodavati i prikazivati scene, dodavati mreže, uređivati stogove modifikatora, izvoziti USD, renderirati sliku i puniti red renderiranja. Pogledajte [Korištenje ModelCrafta s AI pomoćnicima](topic:use-with-ai-assistants).
- **Vaše računalo.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Your machine}} prikazuje grafiku, procesorske jezgre i memoriju koju ovaj preglednik smije koristiti aplikaciji te razinu koja određuje gdje prikaz uživo počinje. Pogledajte [Čime vaše računalo renderira](topic:your-machine).

## Ispravljeno

- {{ui:Solids}} › {{ui:Union}}, {{ui:Subtract}} i {{ui:Intersect}} mogli su vratiti grupu koja nije bila zatvorena, bez obzira na veličinu. Sada se zatvara.
- {{ui:Solids}} › {{ui:Subtract}} bio je zasivljen kad ništa nije odabrano, iako nakon što ga odaberete redom bira svoja dva dijela.
- U vremenskoj crti animacije upisane tipke nisu išle nigdje, kao ni {{key:Mod+S}}. {{key:Mod+Z}} i {{key:Mod+Y}} tamo su vlastiti poništi i ponovi vremenske crte; ostale {{key:Mod}} tipke dolaze do aplikacije.

## U svim aplikacijama

- **Jedinice.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ima po jedan popis za duljinu, površinu, volumen, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa je zasebna jedinica). Isključite jedinice koje nikad ne koristite i one nestaju s popisa jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U ModelCraftu popis jedinica pored polja vrijednosti slijedi prekidače (jedinica modela uvijek ostaje na popisu), zvjezdica postavlja jedinicu novog modela (kad ModelCraft ima tu jedinicu), a duljina upisana s oznakom bilo koje jedinice čita se u toj jedinici. Pogledajte [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se sklanjaju.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} stane više na zaslon (zasloni osjetljivi na dodir i telefoni zadržavaju velike gumbe). Svaka bočna ploča ima tanku naslovnu traku: povucite je da usidrite ili odvojite ploču, ispustite je na traku druge ploče da biste dijelili jedan okvir kao kartice, prikvačite je da klizi do ruba ili je sakrijte i vratite s ruba. Pogledajte [Raspored ploča](common:arrange-panels#make-the-layout-denser).
- **Dijaloški okviri se pomiču.** Povucite dijaloški okvir za naslovnu traku izvan puta crteža; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovno centrirate. Pogledajte [Pomicanje dijaloškog okvira](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset primjera zahtjeva za vašeg pomoćnika (urediti crtež, ispisati skup, provjeriti crteže, postaviti pitanja modelu, zbrojiti predmjer, isprobati varijantu dijela...), svaki s alatima koje poziva i dozvolama koje treba, te svaki ponovljen našim testovima. Aplikacije ne sadrže nikakvu AI. Pogledajte [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. On i **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju sve riječi aplikacija, kao radne verzije koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom jeziku.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, loš potpis) umjesto samo „Gotovo“, i prestaje ponovno prikazivati karticu Što je novo koju ste zatvorili dok ne bude novijeg izdanja.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store premješteni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsima, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu desnom tipkom kliknite CadCraft Studio pri prvom pokretanju i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovinama aplikacija i još nema verzije za iPad ili iPhone.
- Kontrole kuta i nagiba u {{ui:Units}} su spremljene, ali ih još ništa ne čita.
- Renderiranje na grafičkoj kartici (WebGPU) ovdje je testirano samo s programskom zamjenom, a ne još na stvarnim grafičkim karticama, pa prvo renderirajte nešto malo na vlastitom računalu. Isto vrijedi za prikaz uživo, a VR je još isproban samo s emulatorom naočala.
- Bez WebGPU-a nema radnog prostora Render ni reda renderiranja, a slike visoke kvalitete nemaju dubinu polja, fizikalno nebo, sliku neba, maglu, dim, kaustiku ili miješanje svjetla.
- {{ui:Render a picture…}} još ne crta raspršene stavke; prikazuju se u prikazu uživo, njegovim panoramama, gledatelju i videu.
- Svjetiljke se animiraju u prikazu, ali renderirani video koristi svjetiljke kakve su pri početku.
- Kosti i animacija se još ne čitaju niti zapisuju u datoteke glTF, FBX ili USD (modeli s kostima uvode se u mirovanju, sa svojim težinama), a materijali glTF i FBX osim osnovne boje ili teksture još se ne čuvaju.
- STEP boje i nazivi dijelova sklopa još se ne čitaju. Uvoz `.3dm` testiran je s datotekama koje je napisao alat formata, ali još ne s datotekama iz samog programa za modeliranje; SubD objekti, tekst i kote su izostavljeni.
- Biblioteka biljaka iz CivilCraft je u ModelCraftu, ali postavljanje biljaka iz nje još nije izrađeno.
- Slikanje teksture na plohe potisni/povuci ponavlja se s pločicom materijala; da biste slikali samo jednu plohu, pretvorite je u mrežu i razmotajte.

Sve ostalo je u [Još nije izrađeno](topic:not-built-yet).
