---
title: Šta je novo u 0.7 (ranije)
summary: Mreže s modifikatorima, oblikovanje, UV-ovi i objekti krivih, praćenje putanje na grafičkoj kartici i radni prostor Renderuj, živi pregled u stvarnom vremenu s rasipanjem i panoramama, čvorni materijali, radni prostor Animiraj s kostima i fizikom, datoteke USD, FBX, STEP i .3dm, te alati za štampanje sa stilom Početnik.
keywords: šta je novo 0.7, raniji izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, mreža, mreže, radni prostor mreže, modifikatori, podjela površine, žlijeb, uv, razvijanje, šavovi, krive, objekti krivih, nurbs, bezier, oblikovanje, ponovno mrežiranje, retopologija, podijeli, računanje, praćenje putanje, webgpu, radni prostor renderovanja, red renderovanja, mp4, exr, smanjenje šuma, fizičko nebo, hdri, ies, dubina polja, miješanje svjetla, magla, kaustika, živi pregled, stvarno vrijeme, hodaj, rasipanje, panorama, obilazak, pregledač, sjenčenje, čvorovi, čvorni materijali, biblioteka materijala, materialx, nalijepnice, slikanje teksture, pečenje, animiraj, graf krivih, isječci, ključevi oblika, upravljači, skelet, kosti, skinning, ik, ograničenja, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d tijela, podrška, debljina zida, šuplje, popravka, početnik, asistenti, tvoj računar, jedinice, portugalski
from: 16d52810
---

Ovo je ono što se promijenilo u ModelCraftu 0.7, u odnosu na 0.6. ModelCraft sada modelira mreže, kao i geometriju guranja/vučenja, renderuje na grafičkoj kartici i ima radni prostor za svaku vrstu posla: izaberi ga u listi {{ui:Radni prostor}} s lijeve strane alatne trake.

## Novo

### Mreže

- **Mreže.** Odaberi grupu ili komponentu i klikni {{ui:Pretvori u mrežu}} u {{ui:Podaci o entitetu}}: postaje mreža, s površinama bilo kojeg broja uglova koje mogu nositi koordinate teksture, normale, boje i težine. {{ui:Pretvori u geometriju}} vraća je nazad. Poništavanje na mreži čuva samo ono što je svaki korak promijenio. Datoteka koja sadrži mrežu treba ModelCraft 0.7 da se otvori. Vidi [Mreže](topic:meshes).
- **Radni prostor Mreža.** Dvaput klikni mrežu, ili izaberi {{ui:Mreža}} u listi {{ui:Radni prostor}}, da uređuješ njena tjemena, ivice i površine: petlje i prstenove, proporcionalno uređivanje, izvlačenje, uvlačenje, skošenje, rez petljom, nož, prepolovljenje, okretanje, spajanje, rastvaranje, popunjavanje, popunjavanje mreže, most i klizanje, a postavke zadnje operacije mijenjaju se naknadno u panelu. Kreni od ravni, kocke, sfere, torusa i još toga. Tasteri za guranje/vučenje i tasteri modelara rade oba. Vidi [Uređivanje mreže u radnom prostoru Mreža](topic:mesh-edit).
- **Modifikatori.** Zrcaljenje, niz, podjela površine, skošenje, učvršćivanje, bulova operacija, pomjeranje, spajanje tjemena, prorjeđivanje, glačanje, rešetka, deformacija krive i skupljanje oblika mijenjaju ono što mreža prikazuje, bez mijenjanja nje same. Slaži ih, uključuj ili isključuj svaki za prikaz i za renderovanje, i {{ui:Primijeni}} jednog kad hoćeš zauvijek. Vidi [Modifikatori na mreži](topic:modifiers).
- **Podjela površine sa žlijebovima.** {{ui:Žlijeb}} u radnom prostoru Mreža drži odabrane ivice oštrima pod podjelom površine. Renderi mogu koristiti više nivoa od prikaza, a na velikoj mreži prikaz pokazuje niži nivo i to kaže. Vidi [Podjela površine](topic:modifiers#subdivision-surface).
- **Objekti krivih.** Bézier, NURBS i krive od pravih segmenata koje prave cijev, traku, suženje ili popunjenu ploču, i tekst kao krivu. Uređuj njihove tačke u radnom prostoru {{ui:Kriva}}; {{ui:U mrežu}} kad je oblik dobar. Vidi [Objekti krivih](topic:curves).
- **UV radni prostor.** Označi šavove (ili pusti ModelCraft da ih označi na oštrim ivicama), {{ui:Razvijanje}} i {{ui:Složi}}, ili projektuj po kutiji, cilindru, sferi ili pogledu. UV uređivač pored 3D prikaza pomjera, okreće i skalira dijelove, a šahovnica i boje rastezanja pokazuju rezultat. Vidi [Rasporedi UV-ove mreže](topic:uv).
- **Oblikovanje.** Radni prostor {{ui:Oblikovanje}} ima četke za crtanje, glinu, glačanje, hvatanje, naduvavanje, žlijeb, stiskanje, izravnavanje i maskiranje, zrcaljenje preko X, i {{ui:Detalj}} koji dodaje trouglove gdje oblikuješ. Pritisak olovke određuje veličinu i jačinu četke. Svaki potez je jedan korak poništavanja. Vidi [Oblikovanje mreže](topic:sculpt).
- **Ponovno mrežiranje i retopologija.** {{ui:Ponovno mrežiraj}} pravi cijelu mrežu ponovo od ravnomjernih trouglova, zatvarajući rupe i spajajući preklapajuće dijelove. Da napraviš čistu mrežu preko detaljne, izaberi je pod {{ui:Retopologija}}: tačke koje pomjeriš sjedaju na njenu površinu. Vidi [Ponovno mrežiranje](topic:mesh-edit#remesh).

### Crtanje

- **Podjela ivice ili krive.** Alat {{ui:Podijeli}} obilježava rezove dok se krećeš duž ivice i dijeli klikom ili upisanim brojem; s odabranom ivicom, lukom ili krugom, upiši `/5`; {{ui:Podaci o entitetu}} › {{ui:Podijeli…}} traži broj, za tablete. Luk ili krug dijele se jednakim uglovima na pravom luku. Vidi [Podjela ivice ili krive na jednake dijelove](topic:divide).
- **Računanja u polju za vrijednosti.** Upiši `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm` za bilo koju dužinu, i `90/2` za ugao. Račun koji se ne može izvesti kaže šta nije u redu i gdje. Vidi [Računanje](topic:value-box#calculations).

### Renderovanje

- **Praćenje putanje na grafičkoj kartici.** {{ui:Renderuj sliku…}} › {{ui:Visoki kvalitet (praćenje putanje)}} pokreće CadCraftov vlastiti praćač putanje na grafičkoj kartici gdje preglednik ima WebGPU; linija ispod slike kaže koji ga je motor napravio. {{ui:Zaustavi}} zadržava sliku, a {{ui:Nastavi}} nastavlja odatle. Bez WebGPU-a slika se prati putanjom preko WebGL-a, kao ranije. Vidi [Visoki kvalitet](topic:render#high-quality).
- **Renderovanje u prikazu.** Radni prostor {{ui:Renderuj}} prati putanju samog prikaza i kreće ispočetka kad orbitiraš ili uređuješ: renderuj {{ui:Područje}}, klikni za {{ui:Fokus}}, postavi {{ui:Detalj}}. Treba WebGPU. Vidi [Renderovanje u prikazu](topic:render#render-in-the-view).
- **Materijali, svjetla i nebo.** Visokokvalitetne slike sjenče svaku površinu OpenPBR modelom materijala (premazi, dlakavost, tanki filmovi, obojeno staklo, sjaj). Uz WebGPU postoji i {{ui:Fizičko nebo}} sa {{ui:Zamućenje}}, {{ui:Slika neba (HDRI)}}, i proizvođačevi IES profili svjetla za lampe. Vidi [Nebo i profili svjetla](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kao fotografska.** Ekspozicija iz f-broja, zatvarača i ISO-a u svakom režimu; uz WebGPU i dubina polja, dvotačkasta perspektiva, balans bijele, 360° panorame (i u stereo) i kubne mape. Vidi [Kamera](topic:render#the-camera).
- **Završi sliku nakon renderovanja.** Gradiraj je ({{ui:ACES filmski}}, {{ui:AgX}}, {{ui:Filmski}} ili {{ui:Standardni}}, kontrast, bloom, odsjaj, vinjetiranje, tabela boja `.cube`), miješaj nebo, sunce i svaku grupu lampi, i pregledaj elemente renderovanja jedan po jedan, sve bez ponovnog renderovanja. Preostalo zrnce čisti odšumljivač na tvom računaru. Vidi [Završi sliku](topic:render#finish-the-picture) i [Miješaj svjetla nakon renderovanja](topic:render#mix-the-lights-after-the-render).
- **Više načina da sačuvaš renderovanje.** 16-bitni PNG, višeslojni EXR sa svakim elementom renderovanja i grupom svjetla, i datoteka renderovanja (`.ccrender`) koja se ponovo otvara sa svojim miješanjem i gradacijom. Vidi [Čuvanje slike](topic:render#save-the-picture).
- **Magla, dim i kaustika.** Magla i izmaglica osvijetljene suncem i lampama, sa svjetlosnim snopovima; jedan stub dima ili oblak; kaustika ispod stakla i ogledala; adaptivno uzorkovanje koje se zaustavlja na pikselima koji su već čisti. Samo na grafičkoj kartici. Vidi [Magla, dim, šum i kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Red renderovanja i MP4.** Dodaj visokokvalitetne slike i cijele animacije u {{ui:Red renderovanja}}; renderuju se jedna za drugom, i red ostaje kad zatvoriš stranicu. Treba WebGPU. Videi se također mogu sačuvati kao MP4 gdje preglednik to može zapisati. Vidi [Red renderovanja](topic:render#the-render-queue) i [Renderovanje videa](topic:animation#render-the-video).

### Živi pregled i prezentacije

- **Živi pregled.** {{ui:Izvezi}} › {{ui:Živi pregled}} prikazuje model u izgledu u stvarnom vremenu pored prikaza, prateći svaku izmjenu i kameru: sunčeve sjene, materijale, lampe i svjetlo odbijeno od zidova. {{ui:Hodaj}} kroz njega, prevuci {{ui:Vrijeme}} i {{ui:Mjesec}} da pomjeriš sunce, ili ga premjesti u {{ui:Novi prozor}}. Koristi WebGPU gdje ga preglednik ima, inače WebGL 2. Vidi [Živi pregled](topic:live-view).
- **Rasipanje.** Rasporedi travu, cvijeće, kamenje, drveće i ljude po površinama ili četkom, iz sedam novih pratećih stavki i ostatka biblioteke; setovi se čuvaju u datoteci. Vidi [Rasipanje biljaka, kamenja i ljudi](topic:live-view#scatter-plants-rocks-and-people).
- **Dijeljenje.** 360° panorama, obilazak panoramom sa strelicama između mjesta, samostalni pregledač (jedna web stranica koja se otvara van mreže i ništa ne učitava s interneta) i video putanje kamere, sve u izgledu u stvarnom vremenu. Vidi [Dijeljenje](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR u izgledu u stvarnom vremenu.** {{ui:Pregled u VR-u}} prikazuje model s njegovim materijalima, nebom, sjenom sunca, lampama, rasutim stavkama i odbijenim svjetlom. Vidi [Kako izgleda](topic:vr-review#what-it-looks-like).

### Materijali

- **Materijali napravljeni čvorovima.** Radni prostor {{ui:Sjenčenje}} gradi vlastite materijale datoteke kao grafove čvorova: slike, šum i šahovnice, Voronoi ćelije, talase, cigle, pločice, drvo, mramor, gradijente, prljavštinu i habanje ivica, rad s bojama, matematiku, mape izbočina i normala, u puni OpenPBR materijal. Prikaz pokazuje svaku promjenu odmah. Vidi [Pravljenje materijala čvorovima](topic:shading).
- **Biblioteka materijala i vlastiti setovi tekstura.** Panel Sjenčenje navodi materijale iz Biblioteke: šesnaest CC0 setova tekstura, svaki s navedenim autorom. Klikni jedan da ga koristiš, ili ga prevuci na površinu. {{ui:Slike ili zip…}} ili {{ui:Folder…}} pravi materijal od tvojih mapa, pronađenih po nazivima datoteka. Vidi [Materijali iz biblioteke](topic:shading#materials-from-the-library).
- **MaterialX u i iz.** Izvezi materijal kao MaterialX (OpenPBR Surface ili Standard Surface, teksture kao PNG), i uvezi MaterialX datoteke s njihovim slikama. Vidi [MaterialX](topic:shading#materialx).
- **Nalijepnice i slikanje teksture.** Postavi sliku na površinu kao nalijepnicu sa vlastitim materijalom, i slikaj po slici materijala okruglom četkom. Vidi [Nalijepnice](topic:shading#decals) i [Slikanje po teksturi](topic:shading#paint-on-the-texture).
- **Pečenje tekstura.** Peci ambijentalnu okluziju, zakrivljenost, osvjetljenje i normale detaljnog objekta u slike duž UV-ova mreže, na jezgrama procesora računara. Vidi [Pečenje tekstura](topic:shading#bake-textures).

### Animacija

- **Radni prostor Animiraj.** Postavi ključeve mjesta, okreta i veličine objekta, svjetline, raspršenja i boje svake lampe, i ugla sočiva, pravo u panelu. Vremenska linija dobija prikaz {{ui:Krive}} (Bézier ručke, ponavljanja) i prikaz {{ui:Isječci}} koji čuva ključeve kao radnje za ponovno postavljanje i miješanje; ključevi u više redova mogu se pomjerati, rastezati, kopirati i lijepiti. Vidi [Animiraj bilo koje svojstvo](topic:animate).
- **Ključevi oblika i upravljači.** Mreža sadrži druge svoje oblike, miješane klizačima koji se mogu ključati, ili postavljene iz drugih vrijednosti malim izrazom. Vidi [Ključevi oblika](topic:animate#shape-keys-morphs) i [Upravljači](topic:animate#drivers).
- **Skeleti.** Stavi kosti u mrežu, pusti {{ui:Automatske težine}} da podijele tjemena među njima ili slikaj težine, i postavi i ključaj kosti; linearni ili dvostruki kvaternionski skinning. Vidi [Skeleti](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK i ograničenja.** Dohvat (IK) s polom, gledanje u, kopiranje transformacija, granice, dijete od i prati putanju, za kosti i objekte. Vidi [IK i ograničenja](topic:animate#ik-and-constraints).
- **Fizika.** Grupe i komponente padaju, slažu se i sudaraju kao kutije ili kugle, a {{ui:Zapeci fiziku}} čuva rezultat kao ključeve. Vidi [Fizika](topic:animate#physics-drop-stack-and-collide).

### Datoteke

- **USD.** {{ui:Spasi kao}} ({{key:Mod+Shift+S}}) čuva model kao `.usda`, `.usdc` ili `.usdz`, a USD datoteka koju je ModelCraft sačuvao ponovo se otvara bez gubitka. USD iz drugih programa otvara se ili uvozi kao mreže, grupe, komponente, lampe i kamere. {{ui:Spasi}} i dalje piše `.modelcraft`. Vidi [Čuvanje, otvaranje i izvoz USD-a](topic:usd).
- **glTF, potpuno.** glTF datoteke ulaze kao uređive mreže s normalama, UV-ovima, bojama tjemena i teksturama, čvorovi kao grupe, svjetla kao lampe i kamere kao scene, uključujući Draco i meshopt datoteke; `.gltf` se otvara kad se prevuče zajedno sa svojim datotekama. Izvoz piše mreže, teksture, lampe i kamere. Vidi [glTF](topic:formats#gltf-glb-gltf).
- **Uvoz FBX, PLY, STL i Alembic.** FBX 2011 i noviji (mreže, skupovi UV-ova, materijali, ugrađene teksture, svjetla, kamere), PLY i STL s njihovim bojama, i Alembic keševi na svom prvom uzorku. OBJ se uvozi sa svojim `.mtl` i slikama kad ih prevučeš zajedno. Vidi [Formati datoteka detaljno](topic:formats).
- **Više izvoza.** PLY s bojama, STL s bojama obojenih površina, i OBJ sa svojim teksturama kao jedan zip. Vidi [Formati datoteka detaljno](topic:formats).
- **STEP datoteke.** {{ui:Uvezi}} čita STEP (AP203, AP214, AP242) dijelove i sklopove kao zatvorene mreže u pravoj veličini, svaki dio tamo gdje ga datoteka postavlja. Vidi [STEP](topic:formats#step-step-stp).
- **.3dm datoteke.** {{ui:Uvezi}} čita `.3dm` modele: mreže, poliplohe i ekstruzije (iz mreža sačuvanih u datoteci, inače ih ModelCraft pretvara u mrežu), krive kao ivice, blokove kao komponente i slojeve kao oznake. Vidi [Uvoz .3dm modela](topic:import-3dm-files).
- **3D tijela iz DWG-a i DXF-a.** Uvoz crteža sada donosi i njegova 3D tijela, područja i tijela, svako kao vlastitu grupu, zatvorena kao tijela. Vidi [Model na situacionom planu](topic:site-plan#what-comes-in).

### 3D štampanje

- **Alati za štampanje.** {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}} › **Alati za štampanje** ima {{ui:Pregled podrške}} (previsi, stupovi ili stablo podrške, otprilike koliko materijala), {{ui:Debljina zida}} (zidovi pretanki za štampanje, navedeni uz {{ui:Prikaži}}), {{ui:Šuplje}} (zidovi debljine koju zadaš, s rupama za odvod) i {{ui:Popravka}} (svaka popravka navedena; preklapajući dijelovi se spajaju samo kad to zatražiš). Šuplje i Popravka daju grupu čije su ravne strane pojedinačne površine, ili mrežu kad rezultat ne bi bio zatvoren ili ima previše površina; statusna linija kaže koje. Vidi [Podrška, debljina zida, šupljenje i popravka](topic:print-tools).
- **Stil Početnik.** {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Meniji, tasteri i miš}} › {{ui:Početnik}}: velika dugmad za ispuštanje oblika i rupa, pomjeranje, poravnavanje i {{ui:Grupa}} da rupe izrežu, pa provjeri model za štampanje. Vidi [Stil Početnik](topic:beginner).

### Asistenti i tvoj računar

- **Više za AI asistente.** Asistent sada može da navede površine i materijale, guranje/vučenje, bojenje, pravljenje grupa, dodavanje i prikazivanje scena, dodavanje mreža, uređivanje slojeva modifikatora, izvoz USD-a, renderovanje slike i punjenje reda renderovanja. Vidi [Koristi ModelCraft s AI asistentom](topic:use-with-ai-assistants).
- **Tvoj računar.** {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Renderovanje}} › {{ui:Vaš računar}} prikazuje grafiku, jezgre procesora i memoriju koje ovaj preglednik dopušta aplikaciji, i nivo koji određuje odakle počinje živi pregled. Vidi [Čime tvoj računar renderuje](topic:your-machine).

## Ispravljeno

- {{ui:Tijela}} › {{ui:Spoji}}, {{ui:Oduzmi}} i {{ui:Presijeci}} su mogli vratiti grupu koja nije bila zatvorena, bilo koje veličine. Sada se zatvaraju.
- {{ui:Tijela}} › {{ui:Oduzmi}} bio je zasivljen kad ništa nije odabrano, iako bira svoja dva dijela redom nakon što ga izabereš.
- U vremenskoj liniji animacije upisani tasteri nisu išli nigdje, ni {{key:Mod+S}}. {{key:Mod+Z}} i {{key:Mod+Y}} tu su vlastito poništavanje i ponavljanje vremenske linije; ostali tasteri {{key:Mod}} stižu do aplikacije.

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je vlastita jedinica). Isključi jedinice koje nikad ne koristiš i one napuštaju liste; označi jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U ModelCraftu lista jedinica pored polja za vrijednosti prati prekidače (jedinica samog modela uvijek ostaje u njoj), zvjezdica postavlja jedinicu novog modela (kad ModelCraft ima tu jedinicu), a dužina upisana bilo kojom oznakom jedinice čita se u toj jedinici. Vidi [Jedinice, upisane vrijednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju svoja velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevuci je da usidriš ili plutaš panel, spusti je na traku drugog panela da dijelite jedan okvir kao kartice, zakači je da kliza do ivice, ili sakrij i vrati s ivice. Vidi [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Prevuci dijalog za naslovnu traku izvan puta crtežu; vraća se tamo gdje si ga ostavio. Dvaput klikni naslovnu traku da ga ponovo centriraš. Vidi [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primjera zahtjeva za tvog asistenta (sredi crtež, iscrtaj set, provjeri crteže, postavi pitanja o modelu, zbroji predmjer, isprobaj varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovljen našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Tekstovi pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za tvoj sistem, nema mreže, loš potpis), umjesto samo „Gotovo“, i prestaje ponovo prikazivati karticu Šta je novo koju si zatvorio dok ne bude novijeg izdanja.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer validacija certifikata još nije stigla. Provjeri SHA-256 pored svake datoteke na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Macu, prvi put, desnim klikom na CadCraft Studio izaberi {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema build za iPad ili iPhone.
- Liste ugla i nagiba u {{ui:Jedinice}} se čuvaju, ali još nijedno polje ih ne čita.
- Renderovanje na grafičkoj kartici (WebGPU) testirano je ovdje samo s programskim zamjenikom, još ne na pravim grafičkim karticama, pa prvo renderuj nešto malo na svom računaru. Isto važi za živi pregled, a VR je još isprobavan samo s emulatorom naočara.
- Bez WebGPU-a nema radnog prostora Renderuj ni reda renderovanja, a visokokvalitetne slike nemaju dubinu polja, fizičko nebo, sliku neba, maglu, dim, kaustiku ni miješanje svjetla.
- {{ui:Renderuj sliku…}} još ne crta rasute stavke; one se prikazuju u živom pregledu, njegovim panoramama, pregledaču i videu.
- Lampe se animiraju u prikazu, ali renderovani video koristi lampe onakve kakve jesu kad počne.
- Kosti i animacija se još ne čitaju iz glTF, FBX ili USD datoteka niti se u njih upisuju (modeli sa skinningom uvoze se u mirovanju, sa svojim težinama), a materijali glTF i FBX osim osnovne boje ili teksture još se ne čuvaju.
- Boje STEP-a i nazivi dijelova sklopa još se ne čitaju. Uvoz `.3dm` testiran je s datotekama koje je napisao alat formata, još ne s datotekama iz samog programa za modelovanje; SubD objekti, tekst i kote su izostavljeni.
- Biblioteka biljaka iz CivilCraft-a je u ModelCraftu, ali postavljanje biljaka iz nje još nije napravljeno.
- Slikanje teksture na površine guranja/vučenja ponavlja se s pločicom materijala; da oslikaš samo jednu površinu, pretvori je u mrežu i razvij je.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet).
