---
title: Formati datoteka detaljno
summary: Tačno šta svaki format koji ModelCraft otvara, uvozi i izvozi zadržava, pretvara i ostavlja van.
keywords: formati, tipovi datoteka, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, keš, fbx, 3mf, ifc, dwg, dxf, jedinice, ose, Y gore, Z gore, milimetri, ograničenja
from: c47d2d28
---

Model u ModelCraftu je u metrima, sa Z (plavom) osom gore. Svaki format ispod se pretvara u tu osnovu ili iz nje.

## ModelCraft (.modelcraft)

| Šta | Detalji |
|---|---|
| Otvori | {{ui:Otvori}} ({{key:Mod+O}}) ili prevuci na pogled. Datoteke koje završavaju na `.json` također se prihvataju |
| Spasi | {{ui:Spasi}} ({{key:Mod+S}}), kao preuzimanje |
| Zadržava | Sve: geometriju, plohe i njihove boje, materijale i uvezene teksture, lampe, meke ivice, grupe, komponente, nazive, vodilice, scene, jedinice, te posljednju kameru i stil |
| Ostavlja van | Historiju poništavanja |
| Ograničenje | 200 MB |

Datoteka spašena novijom verzijom ModelCraft-a od tvoje se odbija: "Ovaj model je spašen novijim ModelCraftom (verzija datoteke …). Ažuriraj ModelCraft da ga otvoriš." Datoteka koja nije ModelCraft model kaže "Ova datoteka nije ModelCraft model (nije JSON)." ili "Ovo nije ModelCraft datoteka koju možemo otvoriti: …".

## USD (.usd, .usda, .usdc, .usdz)

Otvori, uvezi, i {{ui:Spasi kao}} ili {{ui:Izvezi}} › {{ui:USD (.usda, .usdc, .usdz)…}}. USD datoteka koju je ModelCraft spasio otvara se opet bez gubitka; USD datoteke drugih programa otvaraju se kao mreže, grupe, komponente, lampe i kamere. Vidi [Spasi, otvori i izvezi USD](topic:usd).

## Collada (.dae)

Uvoz i izvoz. Najbolji format za razmjenu modela sa drugim 3D modelerima.

- **Izvoz:** Collada 1.4.1, Z gore, metri. Jedna geometrija po definiciji grupe ili komponente; komponente se zapišu jednom i postavljaju referencom, pa ostaju zajedničke. Plohe sa rupama ili konkavnim obrisima dijele se na trouglove. Boje postaju materijali. Labave ivice zapisuju se kao linije. Nazivi koji nisu valjani u formatu se prilagođavaju, a tačan naziv se čuva uz njih.
- **Uvoz:** trouglovi, poligoni (sa rupama), trouglaste lepeze i trake postaju plohe; linije postaju ivice. Primjenjuju se transformacije čvorova, osa gore datoteke i njena jedinica. Čvor postavljen na više mjesta, ili geometrija koju koristi više čvorova, dolazi kao komponenta; ostali čvorovi dolaze kao grupe. Difuzne boje materijala postaju boje ploha.
- **Nije uvezeno:** teksture, skinovi i morfovi, kamere, svjetla, neki tipovi transformacija (look-at i skew), i reference na druge datoteke. Statusna traka ih broji.
- **Gubi se pri izvozu:** koje su ivice meke. **Pri uvozu,** trouglaste površine ostaju trouglovi, sa ublaženim dijagonalama, pa ravne površine i dalje izgledaju kao jedna površina.

## OBJ (.obj, .mtl)

Uvoz i izvoz.

- **Uvoz:** prevuci `.obj` zajedno sa njegovim `.mtl` i slikama tekstura (ili uvezi samo `.obj`: dolazi bez materijala, a statusna traka navodi `.mtl` koji je tražio). Čita se kao metri sa Y gore. Svaki objekat (`o`, inače `g`) postaje [mreža](topic:meshes), a njegove plohe ostaju kakve jesu (četverouglovi ostaju četverouglovi). Koordinate tekstura, normale i boje po vrhu se čuvaju. Slika boje materijala (`map_Kd`, PNG, JPEG ili WebP) dolazi kao tekstura, sa opcijama razmjere i pomaka; inače njegova boja (`Kd`). Ivice gdje normale datoteke pucaju su tvrde; bez normala odlučuju grupe zaglađivanja datoteke. Ostale mape (bump, normal), tačke, linije i krive se broje i ostavljaju van. OBJ nema jedinicu, pa model napravljen u milimetrima ili palcima dolazi pogrešne veličine: skaliraj ga nakon uvoza (vidi [Rotiraj i skaliraj](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Izvoz:** metri, Y gore, svjetske koordinate. Jedan objekat po položaju grupe; komponente se ispisuju u cijelosti na svakom položaju. Mreže zadržavaju svoje plohe, koordinate tekstura i normale; plohe spojene [mekim ivicama](topic:soften) dobijaju normalu po uglu. Kada model ima boje, `.mtl` se preuzima uz `.obj`. Kada ima uvezene teksture, `.obj`, `.mtl` i slike se preuzimaju zajedno kao jedan `.zip`.
- **Ograničenje:** 2 miliona vrhova ili ploha; 64 MB teksta.

## glTF (.glb, .gltf)

Uvoz i izvoz, glTF 2.0.

- **Uvoz:** `.glb`, ili `.gltf` zajedno sa njegovim `.bin` i datotekama tekstura: prevuci ih na pogled sve odjednom (ili izaberi `.glb`). `.gltf` samostalno navodi datoteku koja mu treba: "Ova .gltf datoteka treba "…": otvori .glb verziju, ili prevuci .gltf zajedno sa njegovim datotekama."
  - **Mreže** dolaze kao [mreže](topic:meshes), jedna po mreži u datoteci, sa zadržanim normalama, koordinatama tekstura i bojama vrhova iz datoteke. Ivice gdje normale datoteke pucaju su tvrde; ostale su meke. Mreža koja se koristi na više mjesta ostaje zajednička.
  - **Čvorovi** postaju grupe, nazvane kao u datoteci. Instancirane mreže (EXT_mesh_gpu_instancing) dolaze kao jedna mreža postavljena mnogo puta.
  - **Materijali:** tekstura osnovne boje (PNG, JPEG ili WebP) dolazi kao tekstura, postavljena po koordinatama tekstura datoteke (sa svakom transformacijom teksture), i čuva se pri spašavanju; inače osnovna boja. Metal, hrapavost, normal mape, staklo, premazni sloj, sjaj i ostala proširenja materijala se čitaju, ali se još ne čuvaju: statusna traka to kaže.
  - **Svjetla** (KHR_lights_punctual): tačkasta i reflektorska svjetla postaju [lampe](topic:lights). Usmjerena svjetla se broje: sunce osvjetljava model.
  - **Kamere** postaju [scene](topic:scenes).
  - **Likovi sa skeletom** dolaze stojeći onako kako ih datoteka postavlja; njihove kosti i animacije, te morfing ciljevi, se broje i još se ne čuvaju.
  - **Kompresovane datoteke** (Draco, meshopt) i kvantizovani podaci se čitaju. Dekoderi se učitavaju samo za datoteku koja ih treba.
  - Tačke i linije se broje i ostavljaju van (mreža drži plohe). KTX2 teksture se ostavljaju van; plohe zadržavaju svoju boju.
- **Izvoz** (`.glb`): glTF 2.0 binarno, metri, Y gore. Jedna mreža po definiciji, pa komponente ostaju zajedničke. Mreže zadržavaju normale, koordinate tekstura i boje vrhova; plohe spojene [mekim ivicama](topic:soften) nose glatke normale. Boje i materijali postaju materijali (materijal kao svoja boja); uvezene teksture se zapisuju kao teksture. Uključene lampe postaju tačkasta i reflektorska svjetla (površinske lampe nemaju glTF ekvivalent i ostavljaju se van); scene postaju kamere. Labave ivice se ostavljaju van.
- **Ograničenje:** datoteke do 300 MB; oko 130 miliona brojeva geometrije.

## STL (.stl)

Uvoz i izvoz.

- **Uvoz:** binarni ili ASCII. STL nema jedinicu: čita se kao **milimetri**, kako ga štampači i sam ModelCraftov izvoz zapisuju. Tačke na istom mjestu se spajaju, pa zatvoren dio dolazi kao zatvorena [mreža](topic:meshes). Boje u datoteci (konvencije VisCAM / SolidView i Materialise) boje plohe.
- **Izvoz,** za 3D štampu: binarni STL, **milimetri**, Z gore. Samo trouglovi: grupe i labave ivice se ostavljaju van. Obojene plohe nose svoju boju u konvenciji VisCAM / SolidView, koju drugi programi ignorišu ako je ne čitaju. Za čistu štampu izvezi zatvorena tijela.

## STEP (.step, .stp)

Samo uvoz. STEP je ono što dijelovi modelera i dobavljači šalju: datoteke AP203, AP214 i AP242.

- **Uvoz:** ModelCraft sam čita datoteku, na stranici, i pretvara svako tijelo u zatvorenu [mrežu](topic:meshes) trouglova: ravne plohe ostaju ravne, zakrivljene plohe (cilindri, konusi, sfere, torusi, B-spline površi) postaju mnogo malih ravnih, sa ivicama unutar jedne zakrivljene plohe mekim, a ivicama između dvije plohe oštrim. STEP datoteke navode svoju jedinicu; model dolazi u pravoj veličini. Sklop dolazi sa svakim dijelom tamo gdje ga datoteka postavlja, svaki dio kao svoja mreža u grupi nazvanoj po datoteci. Boje, nazivi dijelova iz stabla sklopa i tolerancije (PMI) se ne čitaju.
- **Poruke:** šta je preskočeno ili nacrtano grublje dodaje se u statusnu liniju ("Napomene: …"); datoteka bez tijela, oštećena datoteka ili datoteka van granica kaže zašto i ne dodaje ništa.
- **Ograničenje:** datoteke do 300 MB; 400 000 ploha i 8 miliona trouglova.

## .3dm

Samo uvoz. `.3dm` datoteke sadrže NURBS modele: polipovršine, površi, mreže, krive i blokove.

- **Uvoz:** ModelCraft sam čita datoteku, na stranici. Mreže dolaze kakve jesu; svaka ploha polipovršine ili ekstruzije dolazi iz mreže za prikaz sačuvane u datoteci, inače ModelCraft je sam pretvara u mrežu (ravni, NURBS površi, površi rotacije, izvučene krive, ekstruzije; ograničene svojim ivicama, zatvorene polipovršine kao zatvorene mreže). Krive postaju ivice, blokovi postaju komponente (blokovi u blokovima se čuvaju), slojevi postaju oznake (sakrivene kada su isključene), a boja objekta (njegova, njegovog sloja ili materijala) boji njegove plohe. Datoteka navodi svoju jedinicu; model dolazi u pravoj veličini. Korak po korak: [Uvezi .3dm model](topic:import-3dm-files).
- **Poruke:** statusna linija kaže koliko ploha je došlo iz sačuvanih mreža a koliko pretvoreno, i navodi šta je ostavljeno van: tačke, oblake tačaka, tekst, kote, šrafure, svjetla, SubD objekte, plohe na vrstama površi koje još nisu čitane, povezane blokove.
- **Ograničenje:** datoteke do 300 MB.

## PLY (.ply)

Uvoz i izvoz, za mreže sa bojama (skeniranja, 3D štampa u boji, drugi modeleri).

- **Uvoz:** ASCII i binarno. Plohe postaju [mreža](topic:meshes) sa zadržanim normalama, koordinatama tekstura i bojama vrhova; svaka ploha se oboji najbližom od 4.096 boja da odmah vidiš boje. PLY nema jedinicu ni konvenciju ose: koordinate dolaze kakve jesu (metri, Z gore). PLY sa samo tačkama je oblak tačaka: otvori ga u BimCraftu ili CivilCraftu.
- **Izvoz:** binarni PLY sa pozicijama, normalama i bojama (i koordinatama tekstura kada ih model ima), u metrima, Z gore.

## FBX (.fbx)

Samo uvoz. FBX 7 datoteke (od 2011. nadalje), binarne ili ASCII, čita ModelCraftov vlastiti čitač.

- Mreže dolaze kao [mreže](topic:meshes) sa svojim normalama, koordinatama tekstura (svaki UV skup) i bojama vrhova; mreža koju koristi više objekata ostaje zajednička. Objekti postaju grupe sa svojim transformacijama (uključujući centre, pomake i predrotacije).
- Materijali: difuzna tekstura, ugrađena u datoteku ili slika prevučena zajedno sa `.fbx`, dolazi kao tekstura (TGA slike se čuvaju kao PNG); inače difuzna boja. Ostale postavke materijala čekaju novi model materijala.
- Osa gore i jedinica datoteke se primjenjuju: sve dolazi sa Z gore, u metrima.
- Tačkasta i reflektorska svjetla postaju [lampe](topic:lights) (FBX intenzitet 100 je ModelCraftova podrazumijevana lampa, 800 lumena: FBX intenziteti nemaju jedinicu). Kamere postaju [scene](topic:scenes).
- Likovi sa skeletom dolaze u mirovanju; kosti i animacije se broje i još se ne čuvaju. Usmjerena i površinska svjetla, te geometrija koja nije mreža (NURBS, krive), broje se i ostavljaju van.
- FBX 6 i stariji se odbijaju: sačuvaj ih ponovo kao FBX 2011 ili novije.

## Alembic (.abc)

Samo uvoz: keševi geometrije iz programa za animaciju i efekte.

- Mreže (poligonske i podjele površi) dolaze kao [mreže](topic:meshes), sa koordinatama tekstura i normalama; transformacije postaju grupe. Alembic je Y gore i okreće se na Z gore; metri.
- Keš sa mnogo uzoraka (animacija) dolazi sa svojim prvim uzorkom; statusna traka kaže koliko ih ima.
- Tačke, krive, NURBS površi, kamere i svjetla se broje i ostavljaju van. Datoteke u starom HDF5 rasporedu se odbijaju: sačuvaj ih ponovo kao Ogawa Alembic datoteku.

{{ui:Provjeri za 3D štampanje (STL ili 3MF)…}} prvo provjerava oblik i piše odabir, ili sve što je prikazano. Vidi [Pripremi model za 3D štampu](topic:print-3d).

## 3MF (.3mf)

Samo izvoz, iz {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}}. 3MF jezgro: jedna mreža u **milimetrima**, Z gore, sa bojama kao materijalima. Većina slajsera ga čita, i za razliku od STL-a kaže svoju jedinicu. Sakrivene stvari se ostavljaju van. Vidi [Pripremi model za 3D štampu](topic:print-3d).

## Izvoz DWG i DXF (.dwg, .dxf)

Za CAD programe. Model se piše u svojoj jedinici: palci za modele u stopama i palcima, inače milimetri, centimetri ili metri (statusna traka kaže koja).

- **Plohe** postaju 3D plohe (trouglovi). Linije unutar plohe i meke ivice se pišu nevidljive, pa plohe izgledaju kao u ModelCraftu.
- **Labave ivice** postaju linije.
- **Grupe i komponente** postaju blokovi: komponenta se piše jednom i postavlja onoliko puta koliko se koristi, uključujući okrenute i zrcaljene kopije. Grupa koja je rastegnuta nakon što je okrenuta (pa je nakošena) piše se na mjestu.
- **Boje:** DWG zadržava tačno boju svake plohe; DXF koristi najbližu od 255 standardnih CAD boja.
- **Verzije:** DWG se piše kao AutoCAD 2004 (AC1018), koji CAD programi od 2004. nadalje otvaraju. DXF je R12 (AC1009), verzija koju čita svaki CAD program; R12 nema polje za jedinicu, pa reci CAD programu koju jedinicu da koristi.
- **Nije zapisano:** vodilice, kote, scene i kamera.

## IFC (.ifc)

Samo izvoz, za BimCraft i druge BIM programe. IFC4 sa projektom, lokacijom, zgradom i njenim spratovima. Svaka grupa ili komponenta najvišeg nivoa postaje jedan proxy građevinskog elementa sa svojim nazivom; zatvorene se zapisuju kao čvrsti oblici (faceted breps), otvorene kao modeli površi; rupe u plohama se zadržavaju. Labava geometrija na najvišem nivou postaje jedan element pod nazivom "Loose geometry". Nema tipova, svojstava ni materijala.

**Spratovi:** {{ui:Izvezi}} › {{ui:IFC spratovi…}} ih navodi, svaki sa nazivom i visinom ({{ui:Dodaj sprat}}, ili {{ui:Procijeni iz modela}}, koje pravi jedan sprat za svaku visinu na kojoj stoje tvoje grupe najvišeg nivoa). Pri izvozu, svaka grupa ili komponenta ide na sprat na ili ispod svoje najniže tačke i zadržava svoje mjesto. Bez spratova, sve ide na jedan sprat, "Level 1", na 0. Spratovi se čuvaju u ModelCraft datoteci.

## DWG (.dwg) i DXF (.dxf)

Uvoz kao linije na podlozi (šrafure i 3D plohe kao plohe); izvoz kao gore opisano. Vidi [Model na situacionom planu](topic:site-plan).

- **Čitanje:** linije, polilinije (sa lukovima), 3D polilinije, krugovi, lukovi i reference blokova, uključujući nizove, iz prostora modela. Nevidljivi objekti (na primjer skrivena stanja dinamičkog bloka) se ostavljaju van. Krive postaju 48 pravih dijelova po punom krugu.
- **Čitanje od 0.4:** splajnovi i elipse (kao ivice), tekst, višelinijski tekst i vrijednosti atributa (kao ivice u jednolinijskom pisanju), šrafure (plohe sa rupama), 3D plohe i pune ispune (plohe), i kote (crtaju se iz vlastitih blokova kota crteža).
- **Čitanje od 0.7:** 3D tijela, regije i tijela (njihovi ACIS podaci, DWG i DXF svake verzije), svako kao vlastita grupa, zatvorena kao tijela. Plohe na površima koje nisu ravni, cilindri, konusi, sfere, torusi i jednostavne splajn površi se ostavljaju van i navode se.
- **Nije čitano:** tačke, tabele, višestruke vodilice (multileaders), slike i sve u prostoru papira.
- **Jedinice:** uzimaju se iz crteža kada ih navodi. Ako ne, ModelCraft pita.
- **DXF** mora biti ASCII. Binarni DXF se odbija.
- **DWG** datoteke od AutoCAD R13 do aktuelnog formata (AutoCAD 2018 i novije; AC1012 do AC1032) čita ModelCraftov vlastiti DWG čitač, na stranici; to je dio ModelCraft-a, pa radi van mreže kad i ModelCraft. Starije verzije (R12 i ranije) i jako oštećene datoteke se ne mogu čitati; sačuvaj ih kao DXF.
- **Ograničenja:** koordinate više od 10.000 km od ishodišta, ili više od 2 miliona dijelova linija, se odbijaju.

## SKP datoteke

{{ui:Uvezi}} (ili prevuci datoteku na pogled) čita SketchUp datoteke ModelCraftovim vlastitim čitačem, na stranici: ništa se ne šalje, i radi van mreže kad i ModelCraft. Testirano sa datotekama SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 i 2026; druge verzije bi trebalo da se otvore, ali još nisu probane. Model dolazi kao jedna grupa nazvana po datoteci. Jedno {{key:Mod+Z}} ga ponovo uklanja. Korak po korak: [Uvezi SKP model](topic:import-sketchup-files).

- **Zadržava:** plohe sa svojim rupama, grupe (kao grupe) i komponente (kao komponente, zajedničke), njihove nazive i pozicije, boje, oznake na grupama i komponentama, ivice koje nisu dio plohe, te meke i glatke ivice, pa zakrivljene površi ostaju glatke.
- **Boje:** vlastiti materijal plohe daje njenu boju. Materijal nanesen na grupu ili komponentu postaje boja tog položaja, pa unutrašnje plohe bez vlastite boje je preuzimaju, kao u SketchUp-u; komponenta obojena u dvije boje ostaje jedna komponenta.
- **Oznake** na grupama i komponentama postaju ModelCraft oznake, prikazane ili sakrivene kako su bile. Oznake na pojedinačnim plohama i ivicama se ne čuvaju (ModelCraft označava samo grupe i komponente); statusna traka ih broji.
- **Sakriveno dolazi sakriveno** (plohe, ivice, grupe, komponente, te plohe i ivice na sakrivenoj oznaci), pa vidiš šta je SketchUp prikazivao; {{ui:Prikaži sve}} ih prikazuje.
- **Teksture:** ploha obojena teksturisanim materijalom zadržava teksturu, postavljenu kako je u datoteci, a ModelCraft datoteka čuva sliku. Tekstura na cijeloj grupi ili komponenti, tekstura koja nedostaje u datoteci, ili slika koju pregledači ne mogu prikazati (na primjer Photoshop datoteka) zadržava samo boju svog materijala.
- **Ostavlja van, i broji se u statusnoj traci:** slike postavljene u model. Tekst, kote, vodilice, ravni presjeka, scene i stilovi se ne čitaju.
- **Jedinice:** SketchUp datoteke su u inčima iznutra; ModelCraft ih pretvara, pa veličine ispadaju tačne u bilo kojoj jedinici.
- **Spašavanje `.skp`** nije podržano. Da model vratiš u SketchUp, izvezi Collada (`.dae`).

## Nije podržano

ModelCraft ne može otvoriti 3DS ili IFC datoteke, i ne može spasiti 3DS, FBX, STEP, `.3dm` ili SketchUp (`.skp`) datoteke.
