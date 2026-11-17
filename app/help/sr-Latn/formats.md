---
title: Formati datoteka detaljno
summary: Tačno šta svaki format koji ModelCraft otvara, uvozi i izvozi zadržava, pretvara i izostavlja.
keywords: formati, tipovi datoteka, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, keš, fbx, 3mf, ifc, dwg, dxf, jedinice, ose, y gore, z gore, milimetri, ograničenja
from: c47d2d28
---

Model u ModelCraft-u je u metrima, sa Z (plavo) gore. Svaki format ispod se pretvara u tu osnovu ili iz nje.

## ModelCraft (.modelcraft)

| Šta | Detalji |
|---|---|
| Otvaranje | {{ui:Otvori}} ({{key:Mod+O}}) ili prevuci na pogled. Prihvataju se i fajlovi koji se završavaju na `.json` |
| Čuvanje | {{ui:Sačuvaj}} ({{key:Mod+S}}), kao preuzimanje |
| Zadržava | Sve: geometriju, površine i njihove boje, materijale i uvezene teksture, svetiljke, meke ivice, grupe, komponente, imena, vodilice, scene, jedinice, i poslednju kameru i stil |
| Izostavlja | Istoriju opozivanja |
| Ograničenje | 200 MB |

Fajl sačuvan novijim ModelCraft-om od tvog se odbija: „Ovaj model je sačuvan novijim ModelCraft-om (verzija fajla …). Ažuriraj ModelCraft da bi ga otvorio.” Fajl koji nije ModelCraft model kaže „Ovaj fajl nije ModelCraft model (nije JSON).” ili „Ovo nije ModelCraft fajl koji možemo da otvorimo: …”.

## USD (.usd, .usda, .usdc, .usdz)

Otvaranje, uvoz i {{ui:Sačuvaj kao}} ili {{ui:Izvezi}} › {{ui:USD (.usda, .usdc, .usdz)…}}. USD fajl koji je ModelCraft sačuvao otvara se ponovo bez gubitaka; USD fajlovi drugih programa otvaraju se kao mreže, grupe, komponente, svetiljke i kamere. Pogledaj [Čuvanje, otvaranje i izvoz USD-a](topic:usd).

## Collada (.dae)

Uvoz i izvoz. Najbolji format za razmenu modela sa drugim 3D modelarima.

- **Izvoz:** Collada 1.4.1, Z gore, metri. Jedna geometrija po definiciji grupe ili komponente; komponente se pišu jednom i postavljaju referencom, pa ostaju deljene. Površine sa rupama ili konkavnim obrisima dele se na trouglove. Boje postaju materijali. Slobodne ivice se pišu kao linije. Imena koja nisu valjana u formatu se prilagođavaju, a tačno ime se čuva uz njih.
- **Uvoz:** trouglovi, poligoni (sa rupama), lepeze i trake trouglova postaju površine; linije postaju ivice. Primenjuju se transformacije čvorova, osa gore fajla i njegova jedinica. Čvor postavljen na više mesta, ili geometrija koju koristi više čvorova, dolazi kao komponenta; ostali čvorovi dolaze kao grupe. Difuzne boje materijala postaju boje površina.
- **Nije uvezeno:** teksture, skinovi i morfovi, kamere, svetla, neki tipovi transformacija (look-at i skew) i reference na druge fajlove. Statusna traka ih broji.
- **Izgubljeno pri izvozu:** koje su ivice meke. **Pri uvozu,** trouglaste površine ostaju trouglovi, sa omekšanim dijagonalama, tako da ravne oblasti i dalje izgledaju kao jedna površina.

## OBJ (.obj, .mtl)

Uvoz i izvoz.

- **Uvoz:** prevuci `.obj` zajedno sa njegovim `.mtl` i slikama tekstura (ili uvezi sam `.obj`: dolazi bez materijala, a statusna traka kaže koji `.mtl` je tražio). Čita se kao metri sa Y gore. Svaki objekat (`o`, inače `g`) postaje [mreža](topic:meshes), a njegove površine se zadržavaju kakve jesu (četvorouglovi ostaju četvorouglovi). Teksturne koordinate, normale i boje po temenu se zadržavaju. Slika boje materijala (`map_Kd`, PNG, JPEG ili WebP) dolazi kao tekstura, sa svojim opcijama razmere i pomeraja; inače njegova boja (`Kd`). Ivice na kojima se normale fajla lome su tvrde; bez normala odlučuju grupe zaglađivanja fajla. Ostale mape (reljef, normala), tačke, linije i krive se broje i izostavljaju. OBJ nema jedinicu, pa model napravljen u milimetrima ili inčima stiže pogrešne veličine: razmeri ga posle uvoza (pogledaj [Rotiranje i razmera](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Izvoz:** metri, Y gore, svetske koordinate. Jedan objekat po postavljanju grupe; komponente se pišu u celini na svakom mestu postavljanja. Mreže zadržavaju svoje površine, teksturne koordinate i normale; površine spojene [mekim ivicama](topic:soften) dobijaju normalu po temenu. Kad model ima boje, `.mtl` se preuzima pored `.obj`. Kad ima uvezene teksture, `.obj`, `.mtl` i slike se preuzimaju zajedno kao jedan `.zip`.
- **Ograničenje:** 2 miliona temena ili površina; 64 MB teksta.

## glTF (.glb, .gltf)

Uvoz i izvoz, glTF 2.0.

- **Uvoz:** `.glb`, ili `.gltf` zajedno sa njegovim `.bin` i fajlovima tekstura: prevuci ih na pogled sve odjednom (ili izaberi `.glb`). `.gltf` dat sam navodi fajl koji mu treba: „Ovaj .gltf fajl treba „…”: otvori .glb verziju ili prevuci .gltf zajedno sa njegovim fajlovima.”
  - **Mreže** dolaze kao [mreže](topic:meshes), po jedna za svaku mrežu u fajlu, sa zadržanim normalama, teksturnim koordinatama i bojama temena iz fajla. Ivice na kojima se normale fajla lome su tvrde; ostale su meke. Mreža korišćena na više mesta ostaje deljena.
  - **Čvorovi** postaju grupe, imenovane kao u fajlu. Instancirane mreže (EXT_mesh_gpu_instancing) dolaze kao jedna mreža postavljena mnogo puta.
  - **Materijali:** tekstura osnovne boje (PNG, JPEG ili WebP) dolazi kao tekstura, postavljena po teksturnim koordinatama fajla (sa eventualnom transformacijom teksture), i zadržava se pri čuvanju; inače osnovna boja. Metal, hrapavost, normalne mape, staklo, premaz, sjaj i ostale ekstenzije materijala se čitaju, ali se još ne zadržavaju: statusna traka to kaže.
  - **Svetla** (KHR_lights_punctual): tačkasta i reflektorska svetla postaju [svetiljke](topic:lights). Usmerena svetla se broje: sunce osvetljava model.
  - **Kamere** postaju [scene](topic:scenes).
  - **Skinovani likovi** dolaze stojeći kako ih fajl postavlja; njihove kosti i animacije, i morf ciljevi, broje se i još se ne zadržavaju.
  - **Kompresovani fajlovi** (Draco, meshopt) i kvantizovani podaci se čitaju. Dekoderi se učitavaju samo za fajl koji ih traži.
  - Tačke i linije se broje i izostavljaju (mreža sadrži površine). KTX2 teksture se izostavljaju; površine zadržavaju boju.
- **Izvoz** (`.glb`): glTF 2.0 binarni, metri, Y gore. Jedna mreža po definiciji, pa komponente ostaju deljene. Mreže zadržavaju svoje normale, teksturne koordinate i boje temena; površine spojene [mekim ivicama](topic:soften) nose glatke normale. Boje i materijali postaju materijali (materijal kao svoja boja); uvezene teksture se pišu kao teksture. Svetla koja su uključena postaju tačkasta i reflektorska svetla (površinska svetla nemaju glTF ekvivalent i izostavljaju se); scene postaju kamere. Slobodne ivice se izostavljaju.
- **Ograničenje:** fajlovi do 300 MB; oko 130 miliona brojeva geometrije.

## STL (.stl)

Uvoz i izvoz.

- **Uvoz:** binarni ili ASCII. STL nema jedinicu: čita se kao **milimetri**, kako štampači i sam izvoz ModelCraft-a to pišu. Uglovi u istoj tački se spajaju, pa zatvoren deo dolazi kao zatvorena [mreža](topic:meshes). Boje u fajlu (konvencije VisCAM / SolidView i Materialise) boje površine.
- **Izvoz,** za 3D štampanje: binarni STL, **milimetri**, Z gore. Samo trouglovi: grupe i slobodne ivice se izostavljaju. Obojene površine nose boju u konvenciji VisCAM / SolidView, koju drugi programi ignorišu ako je ne čitaju. Za čistu štampu izvezi zatvorena tela.

## STEP (.step, .stp)

Samo uvoz. STEP je ono što proizvođači delova i dobavljači šalju: fajlovi AP203, AP214 i AP242.

- **Uvoz:** ModelCraft sam čita fajl, na stranici, i pretvara svako telo u zatvorenu [mrežu](topic:meshes) trouglova: ravne površine ostaju ravne, zakrivljene (cilindri, konusi, sfere, torusi, B-spline površine) postaju mnogo malih ravnih, sa mekim ivicama unutar jedne zakrivljene površine i oštrim ivicama između dve površine. STEP fajlovi kažu koju jedinicu koriste; model dolazi u svojoj pravoj veličini. Sklop dolazi sa svakim delom tamo gde ga fajl postavlja, svaki deo kao sopstvena mreža u grupi nazvanoj po fajlu. Boje, imena delova iz stabla sklopa i tolerancije (PMI) se ne čitaju.
- **Poruke:** šta je preskočeno ili nacrtano grublje dodaje se u statusnu liniju („Napomene: …”); fajl bez tela, oštećen fajl ili fajl preko ograničenja kaže zašto i ništa ne dodaje.
- **Ograničenje:** fajlovi do 300 MB; 400 000 površina i 8 miliona trouglova.

## .3dm

Samo uvoz. `.3dm` fajlovi čuvaju NURBS modele: polipovršine, površine, mreže, krive i blokove.

- **Uvoz:** ModelCraft sam čita fajl, na stranici. Mreže dolaze kakve jesu; svaka površina polipovršine ili ekstruzije dolazi iz mreže za prikaz sačuvane u fajlu, inače je ModelCraft pretvara u mrežu (ravni, NURBS površine, površine obrtanja, izvučene krive, ekstruzije; ograničene svojim ivicama, zatvorene polipovršine kao zatvorene mreže). Krive postaju ivice, blokovi postaju komponente (blokovi u blokovima se zadržavaju), slojevi postaju oznake (sakrivene kad su isključene), a boja objekta (njegova, njegovog sloja ili njegovog materijala) boji njegove površine. Fajl kaže svoju jedinicu; model dolazi u svojoj pravoj veličini. Korak po korak: [Uvoz 3dm modela](topic:import-3dm-files).
- **Poruke:** statusna linija kaže koliko je površina došlo iz sačuvanih mreža, a koliko je pretvoreno u mrežu, i navodi šta je izostavljeno: tačke, oblaci tačaka, tekst, kote, šrafure, svetla, SubD objekti, površine vrsta koje još nisu čitane, povezani blokovi.
- **Ograničenje:** fajlovi do 300 MB.

## PLY (.ply)

Uvoz i izvoz, za mreže sa bojama (skenovi, 3D štampa u boji, drugi modelari).

- **Uvoz:** ASCII i binarni. Površine postaju [mreža](topic:meshes) sa zadržanim normalama, teksturnim koordinatama i bojama temena; svaka površina se oboji najbližom od 4,096 boja, pa odmah vidiš boje. PLY nema jedinicu ni konvenciju osa: koordinate dolaze kakve jesu (metri, Z gore). PLY samo sa tačkama je oblak tačaka: otvori ga u BimCraft ili CivilCraft.
- **Izvoz:** binarni PLY sa pozicijama, normalama i bojama (i teksturnim koordinatama kad ih model ima), u metrima, Z gore.

## FBX (.fbx)

Samo uvoz. FBX 7 fajlovi (od 2011 nadalje), binarni ili ASCII, čita ih sopstveni čitač ModelCraft-a.

- Mreže dolaze kao [mreže](topic:meshes) sa normalama, teksturnim koordinatama (svaki UV skup) i bojama temena; mreža koju koristi više objekata ostaje deljena. Objekti postaju grupe sa svojim transformacijama (uključujući osovine, pomeraje i predrotacije).
- Materijali: difuzna tekstura, ugrađena u fajl ili slika prevučena zajedno sa `.fbx`, dolazi kao tekstura (TGA slike se zadržavaju kao PNG); inače difuzna boja. Ostala podešavanja materijala čekaju novi model materijala.
- Osa gore i jedinica fajla se primenjuju: sve dolazi sa Z gore, u metrima.
- Tačkasta i reflektorska svetla postaju [svetiljke](topic:lights) (FBX intenzitet 100 je podrazumevana svetiljka ModelCraft-a, 800 lumena: FBX intenziteti nemaju jedinicu). Kamere postaju [scene](topic:scenes).
- Skinovani likovi dolaze u mirovanju; kosti i animacije se broje i još se ne zadržavaju. Usmerena i površinska svetla i geometrija koja nije mreža (NURBS, krive) se broje i izostavljaju.
- FBX 6 i stariji fajlovi se odbijaju: sačuvaj ih ponovo kao FBX 2011 ili noviji.

## Alembic (.abc)

Samo uvoz: keševi geometrije iz programa za animaciju i efekte.

- Mreže (poligonalne i podeljene mreže) dolaze kao [mreže](topic:meshes), sa teksturnim koordinatama i normalama; transformacije postaju grupe. Alembic je Y gore i pretvara se u Z gore; metri.
- Keš sa mnogo uzoraka (animacija) dolazi sa svojim prvim uzorkom; statusna traka kaže koliko ih ima.
- Tačke, krive, NURBS površine, kamere i svetla se broje i izostavljaju. Fajlovi u starom HDF5 rasporedu se odbijaju: sačuvaj ih ponovo kao Ogawa Alembic fajl.

{{ui:Proveri za 3D štampanje (STL ili 3MF)…}} prvo proverava oblik, pa piše izbor ili sve što je prikazano. Pogledaj [Pripremi model za 3D štampanje](topic:print-3d).

## 3MF (.3mf)

Samo izvoz, iz {{ui:Proveri za 3D štampanje (STL ili 3MF)…}}. Osnovni 3MF: jedna mreža u **milimetrima**, Z gore, sa bojama kao materijalima. Većina slajsera ga čita, i za razliku od STL-a kaže koju jedinicu koristi. Sakrivene stvari se izostavljaju. Pogledaj [Pripremi model za 3D štampanje](topic:print-3d).

## Izvoz DWG i DXF (.dwg, .dxf)

Za CAD programe. Model se piše u svojoj jedinici: inči za modele u stopama i inčima, inače milimetri, centimetri ili metri (statusna traka kaže koja).

- **Površine** postaju 3D površine (trouglovi). Linije unutar površine i meke ivice se pišu nevidljivo, pa površine izgledaju kao u ModelCraft-u.
- **Slobodne ivice** postaju linije.
- **Grupe i komponente** postaju blokovi: komponenta se piše jednom i postavlja onoliko puta koliko se koristi, uključujući okrenute i ogledalski prevučene kopije. Grupa koja je razvučena posle okretanja (pa je nagnuta) piše se na licu mesta.
- **Boje:** DWG zadržava tačnu boju svake površine; DXF koristi najbližu od 255 standardnih CAD boja.
- **Verzije:** DWG se piše kao AutoCAD 2004 (AC1018), koji CAD programi od 2004 nadalje otvaraju. DXF je R12 (AC1009), verzija koju čita svaki CAD program; R12 nema polje za jedinicu, pa reci CAD programu koju jedinicu da koristi.
- **Nije upisano:** vodilice, kote, scene i kamera.

## IFC (.ifc)

Samo izvoz, za BimCraft i druge BIM programe. IFC4 sa projektom, lokacijom, zgradom i njenim spratovima. Svaka grupa ili komponenta najvišeg nivoa postaje jedan building element proxy sa svojim imenom; zatvorene se pišu kao čvrsti oblici (faceted breps), otvorene kao modeli površina; rupe u površinama se zadržavaju. Slobodna geometrija na najvišem nivou postaje jedan element pod imenom "Loose geometry". Nema tipova, svojstava ni materijala.

**Spratovi:** {{ui:Izvezi}} › {{ui:IFC spratovi…}} ih navodi, svaki sa imenom i visinom ({{ui:Dodaj sprat}}, ili {{ui:Pogodi iz modela}}, koji pravi po jedan sprat za svaku visinu na kojoj stoje tvoje grupe najvišeg nivoa). Pri izvozu, svaka grupa ili komponenta ide na sprat na ili ispod svoje najniže tačke i zadržava svoje mesto. Bez spratova, sve ide na jedan sprat, "Level 1", na 0. Spratovi se čuvaju u ModelCraft fajlu.

## DWG (.dwg) i DXF (.dxf)

Uvoz kao linije na tlu (šrafure i 3D površine kao površine); izvoz kako je opisano iznad. Pogledaj [Model na situacionom planu](topic:site-plan).

- **Čitanje:** linije, polilinije (sa lukovima), 3D polilinije, krugovi, lukovi i reference blokova, uključujući nizove, iz prostora modela. Nevidljivi objekti (kao skriveno stanje dinamičkog bloka) se izostavljaju. Krive postaju 48 pravih delova po punom krugu.
- **Čitanje od 0.4:** splajnovi i elipse (kao ivice), tekst, višeredni tekst i vrednosti atributa (kao ivice u jednolinijskom pismu), šrafure (površine sa rupama), 3D površine i pune ispune (površine), i kote (crtane iz sopstvenih blokova kota crteža).
- **Čitanje od 0.7:** 3D tela, regioni i tela (njihovi ACIS podaci, DWG i DXF svake verzije), svako kao sopstvena grupa, zatvorena kao tela. Površine na drugim vrstama od ravni, cilindara, konusa, sfera, torusa i jednostavnih splajn površina se izostavljaju i navode.
- **Nije čitano:** tačke, tabele, višestruki vodilci, slike i sve u prostoru papira.
- **Jedinice:** preuzimaju se iz crteža kad ih navodi. Ako ne, ModelCraft pita.
- **DXF** mora biti ASCII. Binarni DXF se odbija.
- **DWG** fajlovi od AutoCAD R13 do aktuelnog formata (AutoCAD 2018 i noviji; AC1012 do AC1032) čita ModelCraft-ov sopstveni DWG čitač, na stranici; to je deo ModelCraft-a, pa radi van mreže kad i ModelCraft. Starije verzije (R12 i ranije) i jako oštećeni fajlovi ne mogu da se čitaju; sačuvaj ih kao DXF.
- **Ograničenja:** koordinate udaljene više od 10,000 km od početka, ili više od 2 miliona delova linija, se odbijaju.

## Fajlovi SKP

{{ui:Uvezi}} (ili prevuci fajl na pogled) čita SketchUp fajlove ModelCraft-ovim sopstvenim čitačem, na stranici: ništa se ne šalje, i radi van mreže kad i ModelCraft. Testirano sa fajlovima SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 i 2026; druge verzije bi trebalo da se otvore, ali još nisu probane. Model dolazi kao jedna grupa nazvana po fajlu. Jedan {{key:Mod+Z}} ga uklanja. Korak po korak: [Uvoz SKP modela](topic:import-sketchup-files).

- **Zadržava:** površine sa njihovim rupama, grupe (kao grupe) i komponente (kao komponente, deljene), njihova imena i postavljanja, boje, oznake na grupama i komponentama, ivice koje nisu deo površine, i meke i glatke ivice, pa zakrivljene površine ostaju glatke.
- **Boje:** sopstveni materijal površine daje njenu boju. Materijal nanet na grupu ili komponentu postaje boja tog postavljanja, pa unutrašnje površine bez sopstvene boje preuzimaju je, kao u SketchUp-u; komponenta obojena dve boje ostaje jedna komponenta.
- **Oznake** na grupama i komponentama postaju ModelCraft oznake, prikazane ili sakrivene kao što su bile. Oznake na slobodnim površinama i ivicama se ne zadržavaju (ModelCraft označava samo grupe i komponente); statusna traka ih broji.
- **Sakriveno dolazi sakriveno** (površine, ivice, grupe, komponente, i površine i ivice na sakrivenoj oznaci), pa vidiš ono što je SketchUp prikazivao; {{ui:Prikaži sve}} ih prikazuje.
- **Teksture:** površina obojena teksturisanim materijalom zadržava svoju teksturu, postavljenu kao u fajlu, a ModelCraft fajl zadržava sliku. Tekstura na celoj grupi ili komponenti, tekstura koja nedostaje u fajlu ili slika koju pregledači ne mogu da prikažu (kao Photoshop fajl) zadržava samo boju svog materijala.
- **Izostavljeno, i prebrojano u statusnoj traci:** slike postavljene u modelu. Tekst, kote, vodilice, ravni preseka, scene i stilovi se ne čitaju.
- **Jedinice:** SketchUp fajlovi su unutra u inčima; ModelCraft ih pretvara, pa su veličine ispravne u bilo kojoj jedinici.
- **Čuvanje `.skp`** nije napravljeno. Da model vratiš u SketchUp, izvezi Collada (`.dae`).

## Nije podržano

ModelCraft ne može da otvori 3DS ili IFC fajlove, i ne može da sačuva 3DS, FBX, STEP, `.3dm` ili SketchUp (`.skp`) fajlove.
