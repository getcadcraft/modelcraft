---
title: Novosti u verziji 0.7 (ranije)
summary: Mreže sa modifikatorima, oblikovanje, UV i objekti krivih, praćenje putanje zraka na grafičkoj kartici i radni prostor Renderovanje, prikaz uživo u realnom vremenu sa rasutim elementima i panoramama, materijali od čvorova, radni prostor Animacija sa kostima i fizikom, USD, FBX, STEP i .3dm datoteke, i alati za štampanje sa stilom Početnik.
keywords: novosti 0.7, ranije izdanje, napomene o izdanju, dnevnik promena, promene, 0.7, verzija, nove funkcije, mreža, mreže, radni prostor mreže, modifikatori, podela površi, nabor, uv, razvij, šavovi, krive, objekti krivih, nurbs, bezier, oblikovanje, ponovno mreženje, retopologija, podela, računice, praćenje putanje zraka, webgpu, radni prostor renderovanja, red za renderovanje, mp4, exr, odšumljavanje, fizičko nebo, hdri, ies, dubina polja, mešanje svetla, magla, kaustika, prikaz uživo, realno vreme, šetnja, rasipanje, panorama, obilazak, pregledač, senčenje, čvorovi, materijali od čvorova, biblioteka materijala, materialx, nalepnice, slikanje teksture, pečenje, animacija, grafikon, isečci, ključevi oblika, upravljači, skelet, kosti, kinematika, ograničenja, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D tela, oslonci, debljina zida, šuplje, popravka, početnik, asistenti, vaš računar, jedinice, portugalski
from: 16d52810
---

Ovo je šta se promenilo u ModelCraft-u 0.7, u poređenju sa 0.6. ModelCraft sada modeluje mreže kao i geometriju guranja i vučenja, renderuje na grafičkoj kartici i ima radni prostor za svaku vrstu rada: izaberite ga u listi {{ui:Radni prostor}} na levoj strani alatne trake.

## Novo

### Mreže

- **Mreže.** Izaberite grupu ili komponentu i kliknite {{ui:Pretvori u mrežu}} u {{ui:Podaci o entitetu}}: postaje mreža, sa površima bilo kog broja uglova koje mogu da nose teksturne koordinate, normale, boje i težine. {{ui:Pretvori u geometriju}} je vraća. Opozivanje na mreži zadržava samo ono što je svaki korak promenio. Datoteka koja sadrži mrežu treba ModelCraft 0.7 da bi se otvorila. Vidi [Mreže](topic:meshes).
- **Radni prostor Mreža.** Dvostruko kliknite mrežu ili izaberite {{ui:Mreža}} u listi {{ui:Radni prostor}} da uređujete njena temena, ivice i površi: petlje i prstenove, proporcionalno uređivanje, izvlačenje, uvlačenje, skošenje, presek petljom, nož, bisekciju, okretanje, spajanje, rastvaranje, popunjavanje, popunjavanje mreže, most i klizanje, i podešavanja poslednje operacije menjaju se naknadno u panelu. Počnite od ravni, kocke, sfere, torusa i još nečega. Radi i tasteri guranja/vučenja i tasteri modelovanja. Vidi [Uređivanje mreže u radnom prostoru Mreža](topic:mesh-edit).
- **Modifikatori.** Ogledalo, niz, podela površi, skošenje, učvršćivanje, bulova operacija, pomeranje, spajanje tačaka, proredjivanje, izglađivanje, rešetka, deformacija krivom i skupljanje menjaju šta mreža prikazuje, bez promene same mreže. Slažite ih, uključujete ili isključujete za prikaz i za renderovanje, i {{ui:Primeni}} jedan kad ga želite trajno. Vidi [Modifikatori na mreži](topic:modifiers).
- **Podela sa naborima.** {{ui:Nabor}} u radnom prostoru Mreža održava izabrane ivice oštrim pod podelom površi. Renderovanja mogu da koriste više nivoa nego prikaz, a na velikoj mreži prikaz pokazuje niži nivo i to kaže. Vidi [Podela površi](topic:modifiers#subdivision-surface).
- **Objekti krivih.** Bezijeove, NURBS i prave krive koje prave cev, traku, suženje ili popunjenu ploču, i tekst kao kriva. Uređujte njihove tačke u radnom prostoru {{ui:Kriva}}; {{ui:U mrežu}} kad je oblik dobar. Vidi [Objekti krivih](topic:curves).
- **Radni prostor UV.** Označite šavove (ili dozvolite ModelCraft-u da ih označi na oštrim ivicama), {{ui:Razvij}} i {{ui:Spakuj}}, ili projektujte kutijom, cilindrom, sferom ili pogledom. UV uređivač pored 3D pogleda pomera, okreće i skalira komade, a šahovnica i boje istezanja pokazuju rezultat. Vidi [Raspored UV koordinata mreže](topic:uv).
- **Oblikovanje.** Radni prostor {{ui:Oblikovanje}} ima četkice za crtanje, glinu, glačanje, hvatanje, naduvavanje, nabor, stiskanje, izravnavanje i masku, zrcaljenje preko X ose, i {{ui:Detalj}} koji dodaje trouglove gde oblikujete. Pritisak olovke podešava veličinu i jačinu četkice. Svaki potez je jedan korak opoziva. Vidi [Oblikovanje mreže](topic:sculpt).
- **Ponovno mreženje i retopologija.** {{ui:Ponovo mrežiraj}} pravi celu mrežu ponovo kao ravnomerne trouglove, zatvarajući rupe i spajajući preklapajuće delove. Da napravite čistu mrežu preko detaljne, izaberite je pod {{ui:Retopologija}}: tačke koje pomerate padaju na njenu površ. Vidi [Ponovo mreženje](topic:mesh-edit#remesh).

### Crtanje

- **Podela ivice ili krive.** Alat {{ui:Podeli}} označava rezove dok se krećete duž ivice i deli klikom ili unetim brojem; sa izabranom ivicom, lukom ili krugom ukucajte `/5`; {{ui:Podaci o entitetu}} › {{ui:Podeli…}} traži broj, za tablete. Luk ili krug se dele jednakim uglovima na pravom luku. Vidi [Podela ivice ili krive na jednake delove](topic:divide).
- **Računice u polju za vrednost.** Ukucajte `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm` za bilo koju dužinu, a `90/2` za ugao. Računica koja se ne može izvesti kaže šta nije u redu i gde. Vidi [Računice](topic:value-box#calculations).

### Renderovanje

- **Praćenje putanje zraka na grafičkoj kartici.** {{ui:Renderuj sliku…}} › {{ui:Visoki kvalitet (praćenje putanje zraka)}} pokreće sopstveni praćenik putanje zraka CadCraft-a na grafičkoj kartici tamo gde pregledač ima WebGPU; linija ispod slike kaže koji je mehanizam napravio sliku. {{ui:Zaustavi}} čuva sliku, a {{ui:Nastavi}} nastavlja odatle. Bez WebGPU-a slika se prati putanjom sa WebGL-om, kao ranije. Vidi [Visoki kvalitet](topic:render#high-quality).
- **Renderovanje u prikazu.** Radni prostor {{ui:Renderovanje}} prati putanju zraka samog prikaza i kreće ponovo kad okrećete ili menjate: renderujte {{ui:Oblast}}, kliknite da {{ui:Fokus}}, podesite {{ui:Detalj}}. Treba mu WebGPU. Vidi [Renderovanje u prikazu](topic:render#render-in-the-view).
- **Materijali, svetla i nebo.** Slike visokog kvaliteta senče svaku površ OpenPBR modelom materijala (premazi, dlakavost, tanki filmovi, obojeno staklo, sjaj). Uz WebGPU postoje i {{ui:Fizičko nebo}} sa {{ui:Magla}}, {{ui:Slika neba (HDRI)}}, i IES profili svetla proizvođača za lampe. Vidi [Nebo i profili svetla](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kao fotografska.** Ekspozicija iz f-broja, zatvarača i ISO-a u svakom režimu; uz WebGPU i dubina polja, perspektiva sa dve tačke, balans bele, panorame od 360° (i u stereu) i kocke mape. Vidi [Kamera](topic:render#the-camera).
- **Završite sliku posle renderovanja.** Gradirajte je ({{ui:ACES filmski}}, {{ui:AgX}}, {{ui:Filmski}} ili {{ui:Standardni}}, kontrast, bloom, sjaj, vinjeta, tabela boja `.cube`), pomešajte nebo, sunce i svaku grupu lampi, i gledajte elemente renderovanja jedan po jedan, sve bez ponovnog renderovanja. Preostalo zrnce čisti odšumljivač na vašem računaru. Vidi [Završite sliku](topic:render#finish-the-picture) i [Mešajte svetla posle renderovanja](topic:render#mix-the-lights-after-the-render).
- **Više načina da sačuvate render.** 16-bitni PNG, višeslojni EXR sa svakim elementom renderovanja i grupom svetla, i datoteka renderovanja (`.ccrender`) koja se ponovo otvara sa mešanjem i gradacijom. Vidi [Čuvanje slike](topic:render#save-the-picture).
- **Magla, dim i kaustika.** Magla i izmaglica osvetljene suncem i lampama, sa svetlosnim snopovima; jedan stub dima ili oblak; kaustika ispod stakla i ogledala; adaptivno uzorkovanje koje staje na pikselima koji su već čisti. Samo na grafičkoj kartici. Vidi [Magla, dim, šum i kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Red za renderovanje i MP4.** Dodajte slike visokog kvaliteta i cele animacije u {{ui:Red za renderovanje}}; renderuju se jedna za drugom, a red opstaje i kad zatvorite stranicu. Treba mu WebGPU. Video se može sačuvati kao MP4 tamo gde pregledač može da ga upiše. Vidi [Red za renderovanje](topic:render#the-render-queue) i [Renderovanje videa](topic:animation#render-the-video).

### Prikaz uživo i prezentacije

- **Prikaz uživo.** {{ui:Izvezi}} › {{ui:Prikaz uživo}} prikazuje model u izgledu u realnom vremenu pored prikaza, prateći svaku izmenu i kameru: senke od sunca, materijali, lampe i svetlost odbijena od zidova. {{ui:Šetnja}} kroz njega, prevucite {{ui:Vreme}} i {{ui:Mesec}} da pomerate sunce, ili ga premestite u {{ui:Novi prozor}}. Koristi WebGPU tamo gde ga pregledač ima, inače WebGL 2. Vidi [Prikaz uživo](topic:live-view).
- **Rasipanje.** Rasporedite travu, cveće, kamenje, drveće i ljude po površima ili četkicom, iz sedam novih stavki okruženja i ostatka biblioteke; skupovi se čuvaju u datoteci. Vidi [Rasuto bilje, kamenje i ljudi](topic:live-view#scatter-plants-rocks-and-people).
- **Deljenje.** Panorama od 360°, obilazak panoramom sa strelicama između mesta, samostalni pregledač (jedna veb stranica koja se otvara van mreže i ne učitava ništa sa interneta) i video putanje kamere, sve u izgledu u realnom vremenu. Vidi [Deljenje](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR u izgledu u realnom vremenu.** {{ui:Pregled u VR}} prikazuje model sa njegovim materijalima, nebom, senkom od sunca, lampama, rasutim stavkama i svetlošću odbijenom. Vidi [Kako izgleda](topic:vr-review#what-it-looks-like).

### Materijali

- **Materijali napravljeni čvorovima.** Radni prostor {{ui:Senčenje}} pravi materijale datoteke kao grafove čvorova: slike, šum i šahovnice, Voronojeve ćelije, talase, cigle, pločice, drvo, mermer, gradijente, prljavštinu i habanje ivica, rad sa bojom, matematiku, mape reljefa i normala, u potpuni OpenPBR materijal. Prikaz pokazuje svaku promenu odmah. Vidi [Pravljenje materijala čvorovima](topic:shading).
- **Biblioteka materijala i vaši setovi tekstura.** Panel senčenja navodi materijale iz biblioteke: šesnaest setova tekstura CC0, svaki sa navedenim autorom. Kliknite jedan da ga koristite, ili ga prevucite na površ. {{ui:Slike ili zip…}} ili {{ui:Fascikla…}} pravi materijal od vaših mapa, prepoznatih po imenima datoteka. Vidi [Materijali iz biblioteke](topic:shading#materials-from-the-library).
- **MaterialX ulaz i izlaz.** Izvezite materijal kao MaterialX (OpenPBR Surface ili Standard Surface, teksture kao PNG), i uvezite MaterialX datoteke sa njihovim slikama. Vidi [MaterialX](topic:shading#materialx).
- **Nalepnice i slikanje teksture.** Postavite sliku na površ kao nalepnicu sa sopstvenim materijalom, i slikajte po slici materijala okruglom četkicom. Vidi [Nalepnice](topic:shading#decals) i [Slikanje po teksturi](topic:shading#paint-on-the-texture).
- **Pečenje tekstura.** Pecite okluziju okoline, zakrivljenost, osvetljenje i normale detaljnog objekta u slike duž UV-a mreže, na jezgrima procesora računara. Vidi [Pečenje tekstura](topic:shading#bake-textures).

### Animacija

- **Radni prostor Animacija.** Zabeležite mesto, okret i veličinu objekta, svetlinu, širenje i boju svake lampe, i ugao sočiva, pravo u panelu. Vremenska linija dobija prikaz {{ui:Krive}} (Bezijeove ručice, ponavljanja) i prikaz {{ui:Isečci}} koji čuva ključeve kao radnje za ponovno postavljanje i mešanje; ključevi na nekoliko redova mogu da se pomeraju, rastežu, kopiraju i lepe. Vidi [Animirajte bilo koje svojstvo](topic:animate).
- **Ključevi oblika i upravljači.** Mreža sadrži druge oblike sebe, mešane klizačima koji mogu da se zabeleže, ili postavljene iz drugih vrednosti malim izrazom. Vidi [Ključevi oblika](topic:animate#shape-keys-morphs) i [Upravljači](topic:animate#drivers).
- **Skeleti.** Stavite kosti u mrežu, pustite da {{ui:Automatske težine}} podele tačke među njima ili slikajte težine, i postavite i zabeležite kosti; linearno ili dualno kvaternionsko vezivanje. Vidi [Skeleti](topic:animate#armatures-bones-that-bend-a-mesh).
- **Kinematika i ograničenja.** Dosezanje (IK) sa polom, gledanje ka, kopiranje transformacija, granice, dete i praćenje putanje, za kosti i objekte. Vidi [Kinematika i ograničenja](topic:animate#ik-and-constraints).
- **Fizika.** Grupe i komponente padaju, slažu se i sudaraju kao kutije ili lopte, a {{ui:Izračunaj fiziku}} zadržava rezultat kao ključeve. Vidi [Fizika](topic:animate#physics-drop-stack-and-collide).

### Datoteke

- **USD.** {{ui:Sačuvaj kao}} ({{key:Mod+Shift+S}}) čuva model kao `.usda`, `.usdc` ili `.usdz`, a USD datoteka koju je ModelCraft sačuvao otvara se ponovo bez gubitka. USD iz drugih programa se otvara ili uvozi kao mreže, grupe, komponente, lampe i kamere. {{ui:Sačuvaj}} i dalje piše `.modelcraft`. Vidi [Čuvanje, otvaranje i izvoz USD-a](topic:usd).
- **glTF, potpuno.** glTF datoteke ulaze kao mreže koje se mogu uređivati, sa normalama, UV, bojama temena i teksturama; čvorovi kao grupe, svetla kao lampe, a kamere kao scene; uključene su Draco i meshopt datoteke. `.gltf` se otvara kad ga prevučete zajedno sa svojim datotekama. Izvoz piše mreže, teksture, lampe i kamere. Vidi [glTF](topic:formats#gltf-glb-gltf).
- **Uvoz FBX, PLY, STL i Alembic.** FBX 2011 i noviji (mreže, skupovi UV, materijali, ugrađene teksture, svetla, kamere), PLY i STL sa njihovim bojama, i Alembic keševi na prvom uzorku. OBJ ulazi sa svojim `.mtl` i slikama kad ih prevučete zajedno. Vidi [Formati datoteka u detalje](topic:formats).
- **Više izvoza.** PLY sa bojama, STL sa bojama obojenih površi, i OBJ sa svojim teksturama kao jedan zip. Vidi [Formati datoteka u detalje](topic:formats).
- **STEP datoteke.** {{ui:Uvezi}} čita STEP (AP203, AP214, AP242) delove i sklopove kao zatvorene mreže u pravoj veličini, svaki deo tamo gde ga datoteka postavlja. Vidi [STEP](topic:formats#step-step-stp).
- **.3dm datoteke.** {{ui:Uvezi}} čita `.3dm` modele: mreže, polipovrši i izvlačenja (iz mreža sačuvanih u datoteci, inače ih ModelCraft pretvara), krive kao ivice, blokove kao komponente i slojeve kao oznake. Vidi [Uvoz .3dm modela](topic:import-3dm-files).
- **3D tela iz DWG i DXF.** Uvoz crteža sada donosi i njegova 3D tela, oblasti i tela, svako kao sopstvenu grupu, zatvorena kao čvrsta tela. Vidi [Model na situacionom planu](topic:site-plan#what-comes-in).

### 3D štampa

- **Alati za štampu.** {{ui:Proveri za 3D štampanje (STL ili 3MF)…}} › **Alati za štampu** ima {{ui:Pregled oslonaca}} (previsi, stubovi ili oslonci u obliku stabla, otprilike koliko materijala), {{ui:Debljina zida}} (zidovi pretanki za štampu, navedeni sa {{ui:Prikaz}}), {{ui:Šuplje}} (zidovi debljine koju zadate, sa rupama za odvod) i {{ui:Popravka}} (svaka popravka navedena; delovi koji se preklapaju spajaju se samo kad to tražite). Šuplje i popravka daju grupu čije su ravne strane pojedinačne površi, ili mrežu kad rezultat ne bi bio zatvoren ili ima previše površi; statusna linija kaže koje. Vidi [Oslonci, debljina zida, šuplјenje i popravka](topic:print-tools).
- **Stil Početnik.** {{ui:Podešavanja}} › {{ui:ModelCraft}} › {{ui:Meniji, tasteri i miš}} › {{ui:Početnik}}: veliki tasteri za dodavanje oblika i rupa, pomeranje, poravnanje i {{ui:Grupa}} tako da se rupe isecaju, pa proverite model za štampu. Vidi [Stil Početnik](topic:beginner).

## Ispravljeno

- {{ui:Čvrsta tela}} › {{ui:Spoj}}, {{ui:Oduzmi}} i {{ui:Presek}} mogli su da vrate grupu koja nije bila zatvorena, bilo koje veličine. Sada se zatvaraju.
- {{ui:Čvrsta tela}} › {{ui:Oduzmi}} bio je zasivljen dok ništa nije izabrano, iako bira svoja dva dela redom kad ga izaberete.
- U vremenskoj liniji animacije, ukucani tasteri nisu išli nigde, pa ni {{key:Mod+S}}. {{key:Mod+Z}} i {{key:Mod+Y}} tamo su opoziv i ponavljanje same vremenske linije; ostali tasteri {{key:Mod}} stižu do aplikacije.

## U svim aplikacijama

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka anketna stopa je sopstvena jedinica). Isključite jedinice koje nikad ne koristite i one napuste liste; označite jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava sopstvenu jedinicu. U ModelCraft-u lista jedinica pored polja za vrednost prati prekidače (jedinica samog modela uvek ostaje u njoj), zvezdica postavlja jedinicu novog modela (kad ModelCraft ima tu jedinicu), a dužina ukucana sa oznakom bilo koje jedinice čita se u toj jedinici. Vidi [Jedinice, unete vrednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stavlja više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da ga zakačite ili pustite da lebdi, spustite na traku drugog panela da delite okvir kao kartice, zakačite ga da klizi do ivice, ili sakrijte i vratite sa ivice. Vidi [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevucite dijalog za naslovnu traku da ga sklonite sa crteža; vraća se tamo gde ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Vidi [Pomeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahteva za vaš asistent (uredi crtež, iscrtaj set, proveri crteže, postavi pitanja o modelu, zbroji predmer, isprobaj varijantu dela…), svaki sa alatima koje poziva i dozvolama koje treba, i svaki ponovo proveren našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje nije pregledao izvorni govornik. Tekstovi pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis), umesto samo „Gotovo”, i prestaje da vraća karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8, jer provera sertifikata još nije stigla. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, kliknite desnim tasterom na CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Liste nagiba i uglova u {{ui:Jedinice}} se čuvaju, ali još nijedan okvir ih ne čita.
- Renderovanje na grafičkoj kartici (WebGPU) testirano je ovde samo sa softverskim zamenikom, još ne na pravim grafičkim karticama, pa prvo renderujte nešto malo na svom računaru. Isto važi za prikaz uživo, a VR je još proban samo sa emulatorom naočara.
- Bez WebGPU-a nema radnog prostora Renderovanje ni reda za renderovanje, a slike visokog kvaliteta nemaju dubinu polja, fizičko nebo, sliku neba, maglu, dim, kaustiku ni mešanje svetla.
- {{ui:Renderuj sliku…}} još ne crta rasute stavke; one se prikazuju u prikazu uživo, njegovim panoramama, pregledaču i videu.
- Lampe se animiraju u prikazu, ali renderovani video koristi lampe kakve su kad počne.
- Kosti i animacija se još ne čitaju niti pišu u glTF, FBX ili USD datotekama (modeli sa skeletom ulaze u mirovanju, sa svojim težinama), a glTF i FBX materijali osim osnovne boje ili teksture još se ne čuvaju.
- STEP boje i nazivi delova sklopa još se ne čitaju. Uvoz `.3dm` testiran je sa datotekama koje je napisao alat formata, još ne sa datotekama iz samog programa za modelovanje; SubD objekti, tekst i kote su izostavljeni.
- Biblioteka biljaka iz CivilCraft-a je u ModelCraft-u, ali postavljanje biljaka iz nje još nije napravljeno.
- Slikanje teksture na površima guranja/vučenja ponavlja se sa pločicom materijala; da obojite samo jednu površ, pretvorite je u mrežu i razvijte je.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet).
