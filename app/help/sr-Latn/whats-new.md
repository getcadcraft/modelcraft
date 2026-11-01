---
title: Šta je novo u 0.7
summary: Mreže sa modifikatorima, oblikovanje, UV i objekti krivih, praćenje putanje zraka na grafičkoj kartici i radni prostor Render, prikaz uživo sa rasejavanjem i panoramama, materijali od čvorova, radni prostor Animiraj sa kostima i fizikom, datoteke USD, FBX, STEP i .3dm, i alati za štampu sa stilom Početnik.
keywords: šta je novo, beleške o izdanju, izmene, promene, 0.7, verzija, nove funkcije, mreža, mreže, radni prostor mreže, modifikatori, podela, nabor, uv, razvijanje, šavovi, krive, objekti krivih, nurbs, bezije, oblikovanje, ponovno mreženje, retopologija, podela, proračun, praćenje putanje zraka, webgpu, radni prostor render, red za renderovanje, mp4, exr, smanjivanje šuma, fizičko nebo, hdri, ies, dubina polja, mešanje svetla, magla, kaustika, prikaz uživo, u realnom vremenu, šetnja, rasejavanje, panorama, tura, pregledač, senčenje, čvorovi, materijali od čvorova, biblioteka materijala, materialx, nalepnice, slikanje teksture, pečenje, animacija, grafikon, isečci, ključevi oblika, pogoni, armature, kosti, ik, ograničenja, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d tela, oslonci, debljina zida, izdubi, popravka, početnik, pomoćnici, tvoj računar, jedinice, portugalski
from: b9fc43e2
---

Ovo je šta se promenilo u ModelCraft 0.7, u odnosu na 0.6. ModelCraft sada modeluje mreže pored geometrije guranja i vučenja, renderuje na grafičkoj kartici i ima radni prostor za svaku vrstu rada: izaberi ga na listi {{ui:Radni prostor}} sa leve strane trake alata.

## Novo

### Mreže

- **Mreže.** Izaberi grupu ili komponentu i klikni {{ui:Pretvori u mrežu}} u {{ui:Podaci o entitetu}}: postaje mreža, sa površima proizvoljnog broja uglova koje mogu da nose koordinate teksture, normale, boje i težine. {{ui:Pretvori u geometriju}} je vraća. Opozivanje na mreži zadržava samo ono što je svaki korak promenio. Datoteka koja sadrži mrežu treba ModelCraft 0.7 da bi se otvorila. Pogledaj [Mreže](topic:meshes).
- **Radni prostor mreže.** Dvoklikni mrežu ili izaberi {{ui:Mreža}} na listi {{ui:Radni prostor}} da uređuješ njena temena, ivice i površi: petlje i prstenove, proporcionalno uređivanje, izvlačenje, uvlačenje, skošenje, presecanje petlje, nožić, bisekciju, obrtanje, spajanje, rastvaranje, popunjavanje, mrežasto popunjavanje, most i klizanje, i podešavanja poslednje operacije koja se menjaju naknadno u panelu. Kreni od ravni, kocke, sfere, torusa i još mnogo toga. Rade i tasteri guranja i vučenja i tasteri modelara. Pogledaj [Uređivanje mreže u radnom prostoru mreže](topic:mesh-edit).
- **Modifikatori.** Ogledalo, niz, podela površi, skošenje, očvršćavanje, bulova operacija, pomeranje, spajanje tačaka, smanjenje broja, izglađivanje, rešetka, deformacija krivom i skupljanje na omotač menjaju šta mreža prikazuje, bez menjanja nje. Slažeš ih u niz, uključuješ ili isključuješ svaki za prikaz i za renderovanje, a {{ui:Primeni}} jednog kad ga želiš zauvek. Pogledaj [Modifikatori na mreži](topic:modifiers).
- **Podela sa naborima.** {{ui:Nabor}} u radnom prostoru mreže zadržava izabrane ivice oštrim pod podelom površi. Renderi mogu da koriste više nivoa nego prikaz, a na velikoj mreži prikaz pokazuje niži nivo i to kaže. Pogledaj [Podela površi](topic:modifiers#subdivision-surface).
- **Objekti krivih.** Bezijeove, NURBS i prave krive koje prave cev, traku, suženje ili popunjenu ploču, i tekst kao krivu. Uređuj njihove tačke u radnom prostoru {{ui:Kriva}}; {{ui:U mrežu}} kad oblik bude dobar. Pogledaj [Objekti krivih](topic:curves).
- **Radni prostor UV.** Obeleži šavove (ili pusti ModelCraft da ih obeleži na oštrim ivicama), {{ui:Razvij}} i {{ui:Spakuj}}, ili projektuj kockom, cilindrom, sferom ili pogledom. UV uređivač pored 3D pogleda pomera, okreće i skalira delove, a šahovski obrazac i boje rastezanja pokazuju rezultat. Pogledaj [Raspored UV-ova mreže](topic:uv).
- **Oblikovanje.** Radni prostor {{ui:Oblikovanje}} ima četkice za crtanje, glinu, glačanje, hvatanje, naduvavanje, nabor, stezanje, izravnavanje i masku, zrcaljenje preko X ose, i {{ui:Detalj}} koji dodaje trouglove gde oblikuješ. Pritisak olovke određuje veličinu i jačinu četke. Svaki potez je jedan korak opoziva. Pogledaj [Oblikovanje mreže](topic:sculpt).
- **Ponovno mreženje i retopologija.** {{ui:Ponovo mrežiraj}} pravi celu mrežu ponovo od ravnomernih trouglova, zatvarajući rupe i spajajući preklapajuće delove. Da napraviš čistu mrežu preko detaljne, izaberi je pod {{ui:Retopologija}}: tačke koje pomeriš padaju na njenu površ. Pogledaj [Ponovno mreženje](topic:mesh-edit#remesh).

### Crtanje

- **Podela ivice ili krive.** Alat {{ui:Podeli}} obeležava preseke dok pomeraš duž ivice i deli klikom ili unetim brojem; sa izabranom ivicom, lukom ili krugom ukucaj `/5`; {{ui:Podaci o entitetu}} › {{ui:Podeli…}} traži broj, za tablete. Luk ili krug se dele jednakim uglovima na pravom luku. Pogledaj [Podela ivice ili krive na jednake delove](topic:divide).
- **Proračuni u polju za vrednost.** Ukucaj `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm` za bilo koju dužinu, i `90/2` za ugao. Proračun koji se ne može izvesti kaže šta nije u redu i gde. Pogledaj [Proračuni](topic:value-box#calculations).

### Renderovanje

- **Praćenje putanje zraka na grafičkoj kartici.** {{ui:Renderuj sliku…}} › {{ui:Visoki kvalitet (praćenje putanje zraka)}} pokreće CadCraftov sopstveni tragač putanje zraka na grafičkoj kartici gde pregledač ima WebGPU; red ispod slike kaže koji motor ju je napravio. {{ui:Zaustavi}} zadržava sliku, a {{ui:Nastavi}} nastavlja odatle. Bez WebGPU-a slika se računa praćenjem putanje zraka sa WebGL-om, kao ranije. Pogledaj [Visoki kvalitet](topic:render#high-quality).
- **Renderovanje u prikazu.** Radni prostor {{ui:Renderuj}} prati putanju zraka samog prikaza i počinje iznova kad orbitiraš ili menjaš: renderuj {{ui:Oblast}}, klikni da {{ui:Fokus}}, podesi {{ui:Detalj}}. Treba mu WebGPU. Pogledaj [Renderovanje u prikazu](topic:render#render-in-the-view).
- **Materijali, svetla i nebo.** Slike visokog kvaliteta senče svaku površ OpenPBR modelom materijala (premazi, dlačice, tanki filmovi, obojeno staklo, sjaj). Uz WebGPU postoje i {{ui:Fizičko nebo}} sa {{ui:Magla}}, {{ui:Slika neba (HDRI)}}, i proizvođačevi IES profili svetla za lampe. Pogledaj [Nebo i profili svetla](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kao fotografska.** Ekspozicija iz f-broja, zatvarača i ISO u svakom režimu; uz WebGPU i dubina polja, perspektiva sa dve tačke, balans bele, 360° panorame (i u stereu) i kubne mape. Pogledaj [Kamera](topic:render#the-camera).
- **Završna obrada slike posle renderovanja.** Oceni je ({{ui:ACES filmski}}, {{ui:AgX}}, {{ui:Filmski}} ili {{ui:Standardni}}, kontrast, blum, odsjaj, vinjetiranje, tabela boja `.cube`), pomešaj nebo, sunce i svaku grupu lampi, i pogledaj elemente renderovanja jedan po jedan, bez ponovnog renderovanja. Preostalo zrno čisti smanjivač šuma na tvom računaru. Pogledaj [Završna obrada slike](topic:render#finish-the-picture) i [Mešanje svetla posle renderovanja](topic:render#mix-the-lights-after-the-render).
- **Više načina za čuvanje rendera.** PNG od 16 bita, višeslojni EXR sa svakim elementom renderovanja i grupom svetla, i datoteka renderovanja (`.ccrender`) koja se ponovo otvara sa svojim mešanjem i obradom. Pogledaj [Čuvanje slike](topic:render#save-the-picture).
- **Magla, dim i kaustika.** Magla i izmaglica osvetljene suncem i lampama, sa svetlosnim snopovima; jedan stub dima ili oblak; kaustika ispod stakla i ogledala; adaptivno uzorkovanje koje staje na pikselima koji su već čisti. Samo na grafičkoj kartici. Pogledaj [Magla, dim, šum i kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Red za renderovanje i MP4.** Dodaj slike visokog kvaliteta i cele animacije u {{ui:Red za renderovanje}}; renderuju se jedna za drugom, a red opstaje i kad zatvoriš stranicu. Treba mu WebGPU. Video se takođe može sačuvati kao MP4 tamo gde ga pregledač može upisati. Pogledaj [Red za renderovanje](topic:render#the-render-queue) i [Renderovanje videa](topic:animation#render-the-video).

### Prikaz uživo i prezentacije

- **Prikaz uživo.** {{ui:Izvezi}} › {{ui:Prikaz uživo}} prikazuje model u izgledu u realnom vremenu pored prikaza, prateći svaku izmenu i kameru: senke od sunca, materijale, lampe i svetlo odbijeno od zidova. {{ui:Šetnja}} kroz njega, prevuci {{ui:Vreme}} i {{ui:Mesec}} da pomeraš sunce, ili ga pomeri u {{ui:Novi prozor}}. Koristi WebGPU gde ga pregledač ima, inače WebGL 2. Pogledaj [Prikaz uživo](topic:live-view).
- **Rasejavanje.** Raširi travu, cveće, stene, drveće i ljude preko površi ili četkicom, iz sedam novih stavki pratećeg sadržaja i ostatka biblioteke; skupovi se čuvaju u datoteci. Pogledaj [Rasejavanje biljaka, stena i ljudi](topic:live-view#scatter-plants-rocks-and-people).
- **Deljenje.** 360° panorama, tura po panoramama sa strelicama između tačaka, samostalni pregledač (jedna veb stranica koja se otvara van mreže i ne učitava ništa sa interneta) i video putanje kamere, sve u izgledu u realnom vremenu. Pogledaj [Deljenje](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR u izgledu u realnom vremenu.** {{ui:Pregled u VR}} prikazuje model sa materijalima, nebom, senkom sunca, lampama, rasejanim stavkama i odbijenim svetlom. Pogledaj [Kako izgleda](topic:vr-review#what-it-looks-like).

### Materijali

- **Materijali napravljeni čvorovima.** Radni prostor {{ui:Senčenje}} pravi sopstvene materijale datoteke kao grafove čvorova: slike, šum i šahovnice, Voronojeve ćelije, talase, cigle, pločice, drvo, mermer, prelive, prljavštinu i habanje ivica, rad sa bojama, matematiku, mape neravnina i normala, u pun OpenPBR materijal. Prikaz odmah pokazuje svaku promenu. Pogledaj [Pravljenje materijala čvorovima](topic:shading).
- **Biblioteka materijala i sopstveni skupovi tekstura.** Panel Senčenje navodi materijale iz biblioteke: šesnaest CC0 skupova tekstura, svaki sa navedenim autorom. Klikni jedan da ga koristiš, ili ga prevuci na površ. {{ui:Slike ili zip…}} ili {{ui:Fascikla…}} pravi materijal od tvojih mapa, prepoznatih po nazivima datoteka. Pogledaj [Materijali iz biblioteke](topic:shading#materials-from-the-library).
- **MaterialX ulaz i izlaz.** Izvezi materijal kao MaterialX (OpenPBR Surface ili Standard Surface, teksture kao PNG), i uvezi MaterialX datoteke sa njihovim slikama. Pogledaj [MaterialX](topic:shading#materialx).
- **Nalepnice i slikanje teksture.** Postavi sliku na površ kao nalepnicu sa sopstvenim materijalom, i slikaj po slici materijala okruglom četkicom. Pogledaj [Nalepnice](topic:shading#decals) i [Slikanje po teksturi](topic:shading#paint-on-the-texture).
- **Pečenje tekstura.** Peci ambijentalnu okluziju, zakrivljenost, osvetljenje i normale detaljnog objekta u slike duž UV-ova mreže, na jezgrima procesora računara. Pogledaj [Pečenje tekstura](topic:shading#bake-textures).

### Animacija

- **Radni prostor Animiraj.** Ključ položaj, okretanje i veličinu objekta, svetlinu, širenje i boju svake lampe, i ugao sočiva, pravo u panelu. Vremenska linija dobija prikaz {{ui:Krive}} (Bezijeove ručice, ponavljanja) i prikaz {{ui:Isečci}} koji čuva ključeve kao radnje za ponovno postavljanje i mešanje; ključevi na više redova mogu da se pomeraju, rastežu, kopiraju i lepe. Pogledaj [Animiraj bilo koje svojstvo](topic:animate).
- **Ključevi oblika i pogoni.** Mreža sadrži druge svoje oblike, mešane klizačima koji mogu da se ključe, ili podešene iz drugih vrednosti malim izrazom. Pogledaj [Ključevi oblika](topic:animate#shape-keys-morphs) i [Pogoni](topic:animate#drivers).
- **Armature.** Stavi kosti u mrežu, pusti {{ui:Automatske težine}} da podele tačke među njima ili slikaj težine, pa postavi i ključaj kosti; linearno ili dual-kvaternionsko oblaganje. Pogledaj [Armature](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK i ograničenja.** Dosezanje (IK) sa polom, gledanje u, kopiranje transformacija, granice, dete od i prati putanju, za kosti i objekte. Pogledaj [IK i ograničenja](topic:animate#ik-and-constraints).
- **Fizika.** Grupe i komponente padaju, slažu se i sudaraju kao kutije ili lopte, a {{ui:Izračunaj fiziku}} zadržava rezultat kao ključeve. Pogledaj [Fizika](topic:animate#physics-drop-stack-and-collide).

### Datoteke

- **USD.** {{ui:Sačuvaj kao}} ({{key:Mod+Shift+S}}) čuva model kao `.usda`, `.usdc` ili `.usdz`, a USD datoteka koju je ModelCraft sačuvao otvara se ponovo bez gubitka. USD iz drugih programa otvara se ili uvozi kao mreže, grupe, komponente, lampe i kamere. {{ui:Sačuvaj}} i dalje piše `.modelcraft`. Pogledaj [Čuvanje, otvaranje i izvoz USD-a](topic:usd).
- **glTF, potpuno.** glTF datoteke stižu kao mreže za uređivanje sa svojim normalama, UV-ovima, bojama temena i teksturama, čvorovi kao grupe, svetla kao lampe, a kamere kao scene; uključujući Draco i meshopt datoteke. `.gltf` se otvara kad ga prevučeš zajedno sa svojim datotekama. Izvoz piše mreže, teksture, lampe i kamere. Pogledaj [glTF](topic:formats#gltf-glb-gltf).
- **Uvoz FBX, PLY, STL i Alembic.** FBX 2011 i noviji (mreže, skupovi UV-ova, materijali, ugrađene teksture, svetla, kamere), PLY i STL sa svojim bojama, i Alembic keševi na prvom uzorku. OBJ stiže sa svojim `.mtl` i slikama kad ih prevučeš zajedno. Pogledaj [Datoteke formata detaljno](topic:formats).
- **Više izvoza.** PLY sa bojama, STL sa bojama obojenih površi, i OBJ sa svojim teksturama kao jedan zip. Pogledaj [Datoteke formata detaljno](topic:formats).
- **STEP datoteke.** {{ui:Uvezi}} čita STEP (AP203, AP214, AP242) delove i sklopove kao zatvorene mreže u pravoj veličini, svaki deo tamo gde ga datoteka postavlja. Pogledaj [STEP](topic:formats#step-step-stp).
- **.3dm datoteke.** {{ui:Uvezi}} čita `.3dm` modele: mreže, polipovrši i izvlačenja (iz mreža sačuvanih u datoteci, inače ih ModelCraft tesalira), krive kao ivice, blokove kao komponente i slojeve kao oznake. Pogledaj [Uvoz .3dm modela](topic:import-3dm-files).
- **3D tela iz DWG i DXF.** Uvoz crteža sada donosi i njihova 3D tela, oblasti i tela, svako kao sopstvenu grupu, a zatvorena kao čvrsta tela. Pogledaj [Modelovanje na planu lokacije](topic:site-plan#what-comes-in).

### 3D štampa

- **Alati za štampu.** {{ui:Proveri za 3D štampanje (STL ili 3MF)…}} › **Alati za štampu** ima {{ui:Pregled oslonaca}} (previsi, stubovi ili drvoliki oslonci, otprilike koliko materijala), {{ui:Debljina zida}} (zidovi pretanki za štampu, navedeni sa {{ui:Prikaz}}), {{ui:Izdubi}} (zidovi debljine koju zadaješ, sa odvodnim rupama) i {{ui:Popravka}} (svaka popravka navedena; preklapajući delovi se spajaju samo kad to zatražiš). Izdubi i Popravka daju grupu čije su ravne strane pojedinačne površi, ili mrežu kad rezultat ne bi bio zatvoren ili ima previše površi; statusna linija kaže koje. Pogledaj [Oslonci, debljina zida, izdubljivanje i popravka](topic:print-tools).
- **Stil Početnik.** {{ui:Podešavanja}} › {{ui:ModelCraft}} › {{ui:Meniji, tasteri i miš}} › {{ui:Početnik}}: velika dugmad za ubacivanje oblika i rupa, pomeranje, poravnavanje i {{ui:Grupa}} da se rupe izseku, pa provera modela za štampu. Pogledaj [Stil Početnik](topic:beginner).

### Pomoćnici i tvoj računar

- **Još za AI pomoćnike.** Pomoćnik sada može da navede površi i materijale, guranje i vučenje, slikanje, pravljenje grupa, dodavanje i prikaz scena, dodavanje mreža, izmenu nizova modifikatora, izvoz USD-a, renderovanje slike i punjenje reda za renderovanje. Pogledaj [Koristi ModelCraft sa AI pomoćnicima](topic:use-with-ai-assistants).
- **Tvoj računar.** {{ui:Podešavanja}} › {{ui:ModelCraft}} › {{ui:Renderovanje}} › {{ui:Tvoj računar}} prikazuje grafiku, jezgra procesora i memoriju koje ovaj pregledač dozvoljava aplikaciji, i nivo koji određuje odakle počinje prikaz uživo. Pogledaj [Na čemu tvoj računar renderuje](topic:your-machine).

## Ispravljeno

- {{ui:Čvrsta tela}} › {{ui:Spoj}}, {{ui:Oduzmi}} i {{ui:Presek}} su ponekad vraćali grupu koja nije bila zatvorena, u bilo kojoj veličini. Sada se zatvaraju.
- {{ui:Čvrsta tela}} › {{ui:Oduzmi}} bio je zasivljen kad ništa nije izabrano, iako posle izbora bira dva dela redom.
- Unutar vremenske linije animacije, otkucani tasteri nisu imali dejstvo, ni {{key:Mod+S}}. {{key:Mod+Z}} i {{key:Mod+Y}} tu su sopstveno opozivanje i ponavljanje vremenske linije; ostali {{key:Mod}} tasteri stižu do aplikacije.

## U svim aplikacijama

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sopstvena jedinica). Isključi jedinice koje nikad ne koristiš i one napuštaju liste; označi jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava svoju jedinicu. U ModelCraft-u lista jedinica pored polja za vrednost prati prekidače (jedinica samog modela uvek ostaje na listi), zvezdica postavlja jedinicu novog modela (kad ModelCraft ima tu jedinicu), a dužina ukucana sa oznakom bilo koje jedinice čita se u toj jedinici. Pogledaj [Jedinice, uneti brojevi i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stavlja više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju svoja velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevuci je da ga prikačiš ili pustiš da pluta, prevuci je na naslovnu traku drugog panela da delite okvir kao kartice, zakači je da klizne do ivice, ili ga sakrij i vrati sa ivice. Pogledaj [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevuci dijalog za naslovnu traku dalje od crteža; vraća se gde si ga ostavio. Dvoklikni naslovnu traku da ga ponovo centriraš. Pogledaj [Pomeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset obrađenih zahteva za tvog pomoćnika (sredi crtež, isplotuj set, proveri crteže, postavi pitanja modelu, zbroji predmer, isprobaj varijantu dela…), svaki sa alatima koje poziva i dozvolama koje treba, i svaki ponovo proveren našim testovima. Same aplikacije ne sadrže AI. Pogledaj [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za tvoj sistem, nema mreže, loš potpis), umesto samo „Gotovo“, i ne vraća karticu Šta je novo koju si zatvorio dok ne stigne novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer validacija sertifikata još nije stigla. Proveri SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalaciju, izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desnim klikom na CadCraft Studio izaberi {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još ne postoji verzija za iPad ili iPhone.
- Lista ugla i nagiba u {{ui:Jedinice}} se čuva, ali je još nijedno polje ne čita.
- Renderovanje na grafičkoj kartici (WebGPU) testirano je ovde samo sa softverskim zamenikom, još ne na pravim grafičkim karticama, pa prvo renderuj nešto malo na svom računaru. Isto važi za prikaz uživo, a VR je isproban samo sa emulatorom naglavne slušalice.
- Bez WebGPU-a nema radnog prostora Render niti reda za renderovanje, a slike visokog kvaliteta nemaju dubinu polja, fizičko nebo, sliku neba, maglu, dim, kaustiku ili mešanje svetla.
- {{ui:Renderuj sliku…}} još ne crta rasejane stavke; one se prikazuju u prikazu uživo, njegovim panoramama, pregledaču i videu.
- Lampe se animiraju u prikazu, ali renderovani video koristi lampe kakve su kad počne.
- Kosti i animacija se još ne čitaju niti pišu u glTF, FBX ili USD datotekama (oblikovani modeli stižu u mirovanju, sa svojim težinama), a glTF i FBX materijali van osnovne boje ili teksture još se ne čuvaju.
- Boje STEP-a i nazivi delova sklopa još se ne čitaju. Uvoz `.3dm` testiran je sa datotekama koje je napisao alat formata, još ne sa datotekama iz samog programa za modelovanje; SubD objekti, tekst i kote su izostavljeni.
- Biblioteka biljaka iz CivilCraft-a je u ModelCraft-u, ali postavljanje biljaka iz nje još nije napravljeno.
- Slikanje teksture na površima guranja i vučenja ponavlja se sa pločicom materijala; da slikaš samo jednu površ, pretvori je u mrežu i razvij je.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet).
