---
title: Šta je novo u 0.7
summary: Mreže s modifikatorima, oblikovanje, UV i objekti krivih, praćenje putanje na grafičkoj kartici i radni prostor Renderuj, živi pregled s rasipanjem i panoramama, materijali od čvorova, radni prostor Animiraj s kostima i fizikom, datoteke USD, FBX, STEP i .3dm, te alati za štampanje sa stilom Početnik.
keywords: šta je novo, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, mreža, mreže, radni prostor za mreže, modifikatori, podjela površine, žlijeb, uv, razvijanje, šavovi, krive, objekti krivih, nurbs, bezier, oblikovanje, ponovo mrežiranje, retopologija, podijeli, proračun, praćenje putanje, webgpu, radni prostor za renderovanje, red renderovanja, mp4, exr, uklanjanje šuma, fizičko nebo, hdri, ies, dubina polja, miješanje svjetla, magla, kaustika, živi pregled, u stvarnom vremenu, hodaj, rasipanje, panorama, obilazak, preglednik, sjenčenje, čvorovi, materijali od čvorova, biblioteka materijala, materialx, nalijepnice, bojenje tekstura, pečenje, animiraj, uređivač grafa, isječci, ključevi oblika, pogoni, skelet, kosti, oblaganje, ik, ograničenja, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D tijela, oslonci, debljina zida, šuplje, popravka, početnik, asistenti, vaš računar, jedinice, portugalski
from: b9fc43e2
---

Ovo je šta se promijenilo u ModelCraftu 0.7 u odnosu na 0.6. ModelCraft sada modelira i mreže uz guranje i povlačenje geometrije, renderuje na grafičkoj kartici i ima radni prostor za svaku vrstu rada: odaberi ga na listi {{ui:Radni prostor}} s lijeve strane trake alata.

## Novo

### Mreže

- **Mreže.** Odaberi grupu ili komponentu i klikni {{ui:Pretvori u mrežu}} u {{ui:Podaci o entitetu}}: postaje mreža, s plohama s proizvoljnim brojem uglova koje mogu nositi koordinate tekstura, normale, boje i težine. {{ui:Pretvori u geometriju}} je vraća. Poništavanje na mreži čuva samo ono što je svaki korak promijenio. Datoteka koja sadrži mrežu treba ModelCraft 0.7 da bi se otvorila. Pogledaj [Mreže](topic:meshes).
- **Radni prostor za mreže.** Dvaput klikni mrežu ili odaberi {{ui:Mreža}} na listi {{ui:Radni prostor}} da uređuješ njene vrhove, ivice i plohe: petlje i prstenove, proporcionalno uređivanje, izvlačenje, uvlačenje, skošenje, rez petljom, nož, bisekciju, okretanje, spajanje, rastvaranje, popunjavanje, popunjavanje mreže, most i klizanje, te postavke posljednje operacije, promijenjene naknadno u panelu. Počni od ravni, kocke, sfere, torusa i još nečeg. Tasteri gurni/povuci i tasteri za modeler rade oboje. Pogledaj [Uređivanje mreže u radnom prostoru za mreže](topic:mesh-edit).
- **Modifikatori.** Ogledalo, niz, podjela površine, skošenje, učvršćivanje, bulova operacija, pomak, zavarivanje, proređivanje, glađenje, rešetka, deformacija krivom i prianjanje uz omotač mijenjaju prikaz mreže bez promjene nje same. Slažu se, uključuju ili isključuju za prikaz i za renderovanje, a {{ui:Primijeni}} jedan kad se želi trajno. Pogledaj [Modifikatori na mreži](topic:modifiers).
- **Podjela površine sa žlijebovima.** {{ui:Žlijeb}} u radnom prostoru za mreže zadržava odabrane ivice oštrim pod podjelom površine. Renderovanja mogu koristiti više nivoa nego prikaz, a kod velike mreže prikaz pokazuje niži nivo i to kaže. Pogledaj [Podjela površine](topic:modifiers#subdivision-surface).
- **Objekti krivih.** Bezier, NURBS i pravolinijske krive koje prave cijev, traku, suženje ili popunjenu ploču, te tekst kao kriva. Tačke se uređuju u radnom prostoru {{ui:Kriva}}; {{ui:U mrežu}} kad je oblik dobar. Pogledaj [Objekti krivih](topic:curves).
- **Radni prostor UV.** Označi šavove (ili neka ModelCraft označi na oštrim ivicama), pa {{ui:Razvijanje}} i {{ui:Složi}}, ili projektuj kockom, cilindrom, sferom ili pogledom. UV uređivač uz 3D pogled pomjera, okreće i skalira komade, a šahovska tabla i boje rastezanja pokazuju rezultat. Pogledaj [Raspored UV-ova mreže](topic:uv).
- **Oblikovanje.** Radni prostor {{ui:Oblikovanje}} ima četke za crtanje, glinu, glađenje, hvatanje, naduvavanje, žlijeb, stiskanje, izravnavanje i masku, zrcaljenje preko ose X, te {{ui:Detalj}} koji dodaje trouglove tamo gdje se oblikuje. Pritisak olovke podešava veličinu i jačinu četke. Svaki potez je jedan korak poništavanja. Pogledaj [Oblikovanje mreže](topic:sculpt).
- **Ponovno mrežiranje i retopologija.** {{ui:Ponovo mrežiraj}} pravi cijelu mrežu ponovo kao ravnomjerne trouglove, zatvara rupe i spaja preklapajuće dijelove. Da bi se napravila čista mreža preko detaljne, odaberi je pod {{ui:Retopologija}}: tačke koje se pomjere sjedaju na njenu površinu. Pogledaj [Ponovno mrežiranje](topic:mesh-edit#remesh).

### Crtanje

- **Podijeli ivicu ili krivu.** Alat {{ui:Podijeli}} obilježava rezove dok se ide duž ivice i dijeli klikom ili unesenim brojem; s odabranom ivicom, lukom ili krugom ukucaj `/5`; {{ui:Podaci o entitetu}} › {{ui:Podijeli…}} traži broj, za tablete. Luk ili krug dijeli se jednakim uglovima na pravom luku. Pogledaj [Podijeli ivicu ili krivu na jednake dijelove](topic:divide).
- **Proračuni u polju za vrijednost.** Ukucaj `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm` za bilo koju dužinu, i `90/2` za ugao. Proračun koji se ne može izvesti kaže šta nije u redu i gdje. Pogledaj [Proračuni](topic:value-box#calculations).

### Renderovanje

- **Praćenje putanje na grafičkoj kartici.** {{ui:Renderuj sliku…}} › {{ui:Visoki kvalitet (praćenje putanje)}} pokreće vlastiti alat za praćenje putanje CadCraft-a na grafičkoj kartici gdje preglednik ima WebGPU; linija ispod slike kaže koji ju je mehanizam napravio. {{ui:Zaustavi}} zadržava sliku, a {{ui:Nastavi}} nastavlja odatle. Bez WebGPU-a slika se prati putem WebGL-a, kao ranije. Pogledaj [Visoki kvalitet](topic:render#high-quality).
- **Renderovanje u pogledu.** Radni prostor {{ui:Renderuj}} prati sam pogled i počinje ponovo kako se okreće ili uređuje: renderuje se {{ui:Područje}}, klikne za {{ui:Fokus}}, podesi {{ui:Detalj}}. Treba mu WebGPU. Pogledaj [Renderovanje u pogledu](topic:render#render-in-the-view).
- **Materijali, svjetla i nebesa.** Slike visokog kvaliteta sjenče svaku plohu modelom materijala OpenPBR (premazi, dlakavost, tanki filmovi, obojeno staklo, sjaj). Uz WebGPU postoje i {{ui:Fizičko nebo}} sa {{ui:Zamućenje}}, {{ui:Slika neba (HDRI)}}, te proizvođačevi IES profili svjetla za svjetiljke. Pogledaj [Nebesa i profili svjetla](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kao fotografska.** Ekspozicija iz f-broja, zatvarača i ISO-a u svakom režimu; uz WebGPU i dubina polja, perspektiva s dvije tačke, balans bijele, panorame od 360° (također stereo) i kockaste mape. Pogledaj [Kamera](topic:render#the-camera).
- **Dorada slike nakon renderovanja.** Gradiraj je ({{ui:ACES filmski}}, {{ui:AgX}}, {{ui:Filmski}} ili {{ui:Standardni}}, kontrast, blum, odsjaj, vinjetu, tabelu boja `.cube`), miješaj nebo, sunce i svaku grupu svjetiljki, i pregledaj elemente renderovanja jedan po jedan, sve bez ponovnog renderovanja. Preostalo zrnanje uklanja uklanjač šuma na računaru. Pogledaj [Dorada slike](topic:render#finish-the-picture) i [Miješanje svjetla nakon renderovanja](topic:render#mix-the-lights-after-the-render).
- **Više načina za spašavanje renderovanja.** PNG od 16 bita, višeslojni EXR sa svim elementima renderovanja i grupama svjetla, te datoteka renderovanja (`.ccrender`) koja se ponovo otvara sa svojim miješanjem i gradacijom. Pogledaj [Spašavanje slike](topic:render#save-the-picture).
- **Magla, dim i kaustika.** Magla i izmaglica osvijetljene suncem i svjetiljkama, sa svjetlosnim snopovima; jedan stub dima ili oblak; kaustika ispod stakla i ogledala; adaptivno uzorkovanje koje staje na pikselima koji su već čisti. Samo na grafičkoj kartici. Pogledaj [Magla, dim, šum i kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Red renderovanja i MP4.** Dodaj slike visokog kvaliteta i cijele animacije u {{ui:Red renderovanja}}; renderuju se jedna za drugom, a red ostaje i kad se stranica zatvori. Treba mu WebGPU. Videi se mogu spasiti i kao MP4 gdje preglednik to može zapisati. Pogledaj [Red renderovanja](topic:render#the-render-queue) i [Renderovanje videa](topic:animation#render-the-video).

### Živi pregled i prezentacije

- **Živi pregled.** {{ui:Izvezi}} › {{ui:Živi pregled}} prikazuje model u izgledu u stvarnom vremenu pored pogleda, prateći svaku promjenu i kameru: sunčeve sjene, materijale, svjetiljke i svjetlo odbijeno od zidova. {{ui:Hodaj}} kroz njega, prevuci {{ui:Vrijeme}} i {{ui:Mjesec}} da pomjeriš sunce, ili ga pomjeri u {{ui:Novi prozor}}. Koristi WebGPU gdje ga preglednik ima, inače WebGL 2. Pogledaj [Živi pregled](topic:live-view).
- **Rasipanje.** Rasporedi travu, cvijeće, stijene, drveće i ljude po plohama ili četkom, iz sedam novih stavki za okolinu i ostatka biblioteke; skupovi se čuvaju u datoteci. Pogledaj [Rasipanje biljaka, stijena i ljudi](topic:live-view#scatter-plants-rocks-and-people).
- **Dijeljenje.** Panorama od 360°, obilazak panoramom sa strelicama između mjesta, samostalni preglednik (jedna web stranica koja se otvara van mreže i ništa ne učitava s interneta) i video putanje kamere, sve u izgledu u stvarnom vremenu. Pogledaj [Dijeljenje](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR u izgledu u stvarnom vremenu.** {{ui:Pregled u VR-u}} prikazuje model s materijalima, nebom, sunčevom sjenom, svjetiljkama, rasutim stavkama i odbijenim svjetlom. Pogledaj [Kako izgleda](topic:vr-review#what-it-looks-like).

### Materijali

- **Materijali napravljeni čvorovima.** Radni prostor {{ui:Sjenčenje}} pravi materijale same datoteke kao grafove čvorova: slike, šum i šahovske table, Voronoi ćelije, talase, cigle, pločice, drvo, mramor, gradijente, prljavštinu i habanje ivica, rad s bojama, matematiku, mape reljefa i normala, sve u potpuni materijal OpenPBR. Prikaz pokazuje svaku promjenu odmah. Pogledaj [Pravljenje materijala čvorovima](topic:shading).
- **Biblioteka materijala i vlastiti skupovi tekstura.** Panel Sjenčenje navodi materijale iz biblioteke: šesnaest skupova tekstura CC0, svaki s navedenim autorom. Klikni jedan da ga koristiš, ili ga prevuci na plohu. {{ui:Slike ili zip…}} ili {{ui:Folder…}} pravi materijal od vlastitih mapa, prepoznatih po imenima datoteka. Pogledaj [Materijali iz biblioteke](topic:shading#materials-from-the-library).
- **MaterialX na ulazu i izlazu.** Izvezi materijal kao MaterialX (OpenPBR Surface ili Standard Surface, teksture kao PNG), i uvezi MaterialX datoteke s njihovim slikama. Pogledaj [MaterialX](topic:shading#materialx).
- **Nalijepnice i bojenje tekstura.** Postavi sliku na plohu kao nalijepnicu s vlastitim materijalom, i boji po slici materijala okruglom četkom. Pogledaj [Nalijepnice](topic:shading#decals) i [Bojenje teksture](topic:shading#paint-on-the-texture).
- **Pečenje tekstura.** Peci ambijentalnu okluziju, zakrivljenost, osvjetljenje i normale detaljnog objekta u slike duž UV-ova mreže, na jezgrama procesora računara. Pogledaj [Pečenje tekstura](topic:shading#bake-textures).

### Animacija

- **Radni prostor Animiraj.** Postavi ključeve za položaj, okretanje i veličinu objekta, svjetlinu, širenje i boju svake svjetiljke, te ugao objektiva, pravo u panelu. Vremenska linija dobija prikaz {{ui:Krive}} (Bezier ručke, ponavljanja) i prikaz {{ui:Isječci}} koji čuva ključeve kao radnje za ponovno postavljanje i miješanje; ključeve u više redova može se pomjerati, rastezati, kopirati i lijepiti. Pogledaj [Animiraj bilo koje svojstvo](topic:animate).
- **Ključevi oblika i pogoni.** Mreža sadrži druge svoje oblike, miješane klizačima koji mogu imati ključeve, ili postavljene iz drugih vrijednosti malim izrazom. Pogledaj [Ključevi oblika](topic:animate#shape-keys-morphs) i [Pogoni](topic:animate#drivers).
- **Skeleti.** Postavi kosti u mrežu, pusti {{ui:Automatske težine}} da podijele tačke među njima ili boji težine, te postavi položaje kostiju i dodaj im ključeve; linearno ili dualno kvaternionsko oblaganje. Pogledaj [Skeleti](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK i ograničenja.** Dosezanje (IK) s polom, gledanje u, kopiranje transformacija, granice, dijete-od i praćenje putanje, za kosti i objekte. Pogledaj [IK i ograničenja](topic:animate#ik-and-constraints).
- **Fizika.** Grupe i komponente padaju, slažu se i sudaraju kao kutije ili kugle, a {{ui:Zapeci fiziku}} zadržava rezultat kao ključeve. Pogledaj [Fizika](topic:animate#physics-drop-stack-and-collide).

### Datoteke

- **USD.** {{ui:Spasi kao}} ({{key:Mod+Shift+S}}) spašava model kao `.usda`, `.usdc` ili `.usdz`, a USD datoteka koju je ModelCraft spasio ponovo se otvara bez gubitka. USD iz drugih programa otvara se ili uvozi kao mreže, grupe, komponente, svjetiljke i kamere. {{ui:Spasi}} i dalje zapisuje `.modelcraft`. Pogledaj [Spašavanje, otvaranje i izvoz USD-a](topic:usd).
- **glTF, potpuno.** glTF datoteke stižu kao mreže koje se mogu uređivati, s normalama, UV-ovima, bojama vrhova i teksturama; čvorovi kao grupe, svjetla kao svjetiljke, a kamere kao scene; uključene su Draco i meshopt datoteke; `.gltf` se otvara kad se prevuče zajedno s datotekama. Izvoz zapisuje mreže, teksture, svjetiljke i kamere. Pogledaj [glTF](topic:formats#gltf-glb-gltf).
- **Uvoz FBX, PLY, STL i Alembic.** FBX 2011 i noviji (mreže, skupovi UV-ova, materijali, ugrađene teksture, svjetla, kamere), PLY i STL s bojama, i Alembic keševi na prvom uzorku. OBJ dolazi s `.mtl` i slikama kad se prevuku zajedno. Pogledaj [Formati datoteka detaljno](topic:formats).
- **Više izvoza.** PLY s bojama, STL s bojama obojenih ploha, i OBJ s teksturama kao jedan zip. Pogledaj [Formati datoteka detaljno](topic:formats).
- **STEP datoteke.** {{ui:Uvezi}} čita STEP (AP203, AP214, AP242) dijelove i sklopove kao zatvorene mreže u pravoj veličini, svaki dio tamo gdje ga datoteka postavlja. Pogledaj [STEP](topic:formats#step-step-stp).
- **.3dm datoteke.** {{ui:Uvezi}} čita `.3dm` modele: mreže, poliplohe i izvlačenja (iz mreža sačuvanih u datoteci, inače ih ModelCraft pravi kao mreže), krive kao ivice, blokove kao komponente i slojeve kao oznake. Pogledaj [Uvoz .3dm modela](topic:import-3dm-files).
- **3D tijela iz DWG-a i DXF-a.** Uvoz crteža sada donosi i njegova 3D tijela, područja i tijela, svako kao zasebnu grupu, a zatvorena kao tijela. Pogledaj [Model na situacionom planu](topic:site-plan#what-comes-in).

### 3D štampanje

- **Alati za štampanje.** {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}} › **Alati za štampanje** ima {{ui:Pregled podrške}} (previsi, stupovi ili podrške u obliku stabla, otprilike koliko materijala), {{ui:Debljina zida}} (zidovi pretanki za štampanje, navedeni uz {{ui:Prikaži}}), {{ui:Šuplje}} (zidovi debljine koju zadaješ, s rupama za odvod) i {{ui:Popravka}} (svaka popravka navedena; preklapajući dijelovi se spajaju samo kad se zatraži). Šuplje i Popravka daju grupu čije su ravne strane pojedinačne plohe, ili mrežu kad se rezultat ne bi zatvorio ili ima previše ploha; statusna linija kaže koje. Pogledaj [Oslonci, debljina zida, šupljenje i popravka](topic:print-tools).
- **Stil Početnik.** {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Meniji, tipke i miš}} › {{ui:Početnik}}: velika dugmad za postavljanje oblika i rupa, pomjeranje, poravnavanje i {{ui:Grupa}} da se rupe isijeku, zatim provjera modela za štampanje. Pogledaj [Stil Početnik](topic:beginner).

### Asistenti i vaš računar

- **Više za AI asistente.** Asistent sada može navesti plohe i materijale, gurati/povlačiti, bojiti, praviti grupe, dodavati i prikazivati scene, dodavati mreže, uređivati slojeve modifikatora, izvoziti USD, renderovati sliku i puniti red renderovanja. Pogledaj [Korištenje ModelCraft-a s AI asistentima](topic:use-with-ai-assistants).
- **Vaš računar.** {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Renderovanje}} › {{ui:Vaš računar}} prikazuje grafiku, jezgre procesora i memoriju koje preglednik dozvoljava aplikaciji, te nivo koji određuje odakle počinje živi pregled. Pogledaj [Čime računar renderuje](topic:your-machine).

## Ispravljeno

- {{ui:Tijela}} › {{ui:Spoji}}, {{ui:Oduzmi}} i {{ui:Presijeci}} su mogli vratiti grupu koja nije bila zatvorena, bilo koje veličine. Sada se zatvaraju.
- {{ui:Tijela}} › {{ui:Oduzmi}} bilo je zasivljeno kad ništa nije odabrano, iako bira svoja dva dijela redom nakon izbora.
- Unutar vremenske linije animacije, ukucani tasteri nisu išli nigdje, kao ni {{key:Mod+S}}. {{key:Mod+Z}} i {{key:Mod+Y}} tu su vlastito poništavanje i ponavljanje vremenske linije; ostali tasteri {{key:Mod}} stižu do aplikacije.

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je vlastita jedinica). Isključi jedinice koje nikad ne koristiš i nestaju s lista jedinica; označi jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek čuva svoju jedinicu. U ModelCraftu lista jedinica pored polja za vrijednost prati prekidače (jedinica modela uvijek ostaje na listi), zvjezdica postavlja jedinicu novog modela (kad ModelCraft ima tu jedinicu), a dužina ukucana bilo kojom oznakom jedinice čita se u toj jedinici. Pogledaj [Jedinice, ukucane vrijednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevuci je da zakačiš ili izdvojiš panel, pusti je na traku drugog panela da dijele jedan okvir kao kartice, zakači je da kliže do ivice, ili je sakrij i vrati s ivice. Pogledaj [Raspoređivanje panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Prevuci dijalog za naslovnu traku dalje od crteža; vraća se tamo gdje je ostavljen. Dvaput klikni naslovnu traku da ga ponovo centriraš. Pogledaj [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset obrađenih zahtjeva za vlastitog asistenta (uredi crtež, iscrtaj set, provjeri crteže, postavi modelu pitanja, zbroji predmjer, isprobaj varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovo pokrenut našim testovima. Aplikacije ne sadrže AI. Pogledaj [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Ovaj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje još nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** navodi zašto provjera ažuriranja nije uspjela (još nema datoteke za ovaj sistem, nema mreže, loš potpis) umjesto samo „Gotovo“, i ne vraća karticu Šta je novo koja je zatvorena dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket Microsoft Store prebačeni su na 0.8 jer validacija certifikata još nije stigla. Provjeri SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, odaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Macu, prvi put, desnim klikom na CadCraft Studio odaberi {{ui:Otvori}}. CadCraft Studio još nije u prodavnicama aplikacija, a još nema verzije za iPad ili iPhone.
- Liste ugla i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedno polje ne čita.
- Renderovanje na grafičkoj kartici (WebGPU) ovdje je testirano samo s programskim zamjenikom, ne još na pravim grafičkim karticama, pa prvo renderuj nešto malo na računaru. Isto važi za živi pregled, a VR je još isprobavan samo s emulatorom naočara.
- Bez WebGPU-a nema radnog prostora Renderuj ni reda renderovanja, a slike visokog kvaliteta nemaju dubinu polja, fizičko nebo, sliku neba, maglu, dim, kaustiku ni miješanje svjetla.
- {{ui:Renderuj sliku…}} još ne crta rasute stavke; one se pokazuju u živom pregledu, njegovim panoramama, preglednikom i videu.
- Svjetiljke se animiraju u pogledu, ali renderovani video koristi svjetiljke kakve jesu kad počne.
- Kosti i animacija se još ne čitaju niti zapisuju u datoteke glTF, FBX ili USD (modeli s oblaganjem stižu u mirovanju, sa svojim težinama), a materijali glTF i FBX osim osnovne boje ili teksture još se ne čuvaju.
- Boje STEP-a i nazivi dijelova sklopa još se ne čitaju. Uvoz `.3dm` testiran je s datotekama koje je zapisao alat formata, još ne s datotekama iz samog programa za modeliranje; SubD objekti, tekst i kote su izostavljeni.
- Biblioteka biljaka iz CivilCraft-a je u ModelCraftu, ali postavljanje biljaka iz nje još nije napravljeno.
- Bojenje teksture na plohama gurni/povuci ponavlja se s pločicom materijala; da bi se obojila samo jedna ploha, pretvori je u mrežu i razvij je.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet).
