---
title: Formati datoteka detaljno
summary: Točno što svaki format koji ModelCraft otvara, uvozi i izvozi zadržava, pretvara i izostavlja.
keywords: formati, vrste datoteka, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, predmemorija, fbx, 3mf, ifc, dwg, dxf, jedinice, osi, y gore, z gore, milimetri, ograničenja
from: c47d2d28
---

Model u ModelCraftu je u metrima, s Z (plava os) prema gore. Svaki format u nastavku pretvara se u taj model ili iz njega.

## ModelCraft (.modelcraft)

| Što | Pojedinosti |
|---|---|
| Otvori | {{ui:Otvori}} ({{key:Mod+O}}) ili ispuštanje na prikaz. Prihvaćaju se i datoteke koje završavaju na `.json` |
| Spremi | {{ui:Spremi}} ({{key:Mod+S}}), kao preuzimanje |
| Zadržava | Sve: geometriju, plohe i njihove boje, materijale i uvezene teksture, svjetiljke, meke bridove, grupe, komponente, nazive, vodilice, scene, jedinice te zadnju kameru i stil |
| Izostavlja | Povijest poništavanja |
| Ograničenje | 200 MB |

Datoteka koju je spremio noviji ModelCraft od vašeg se odbija: „Ovaj model je spremio noviji ModelCraft (verzija datoteke …). Ažurirajte ModelCraft da biste ga otvorili.“ Datoteka koja nije ModelCraft model kaže „Ova datoteka nije ModelCraft model (nije JSON).“ ili „Ovo nije ModelCraft datoteka koju možemo otvoriti: …“.

## USD (.usd, .usda, .usdc, .usdz)

Otvaranje, uvoz, te {{ui:Spremi kao}} ili {{ui:Izvezi}} › {{ui:USD (.usda, .usdc, .usdz)…}}. USD datoteka koju je spremio ModelCraft ponovno se otvara bez ičeg izgubljenog; USD datoteke drugih programa otvaraju se kao mreže, grupe, komponente, svjetiljke i kamere. Pogledajte [Spremanje, otvaranje i izvoz USD-a](topic:usd).

## Collada (.dae)

Uvoz i izvoz. Najbolji format za razmjenu modela s drugim 3D modelerima.

- **Izvoz:** Collada 1.4.1, Z gore, metri. Jedna geometrija po grupi ili definiciji komponente; komponente se zapisuju jednom i postavljaju referencom, pa ostaju zajedničke. Plohe s rupama ili konkavnim obrisima dijele se na trokute. Boje postaju materijali. Slobodni bridovi zapisuju se kao linije. Nazivi koji nisu valjani u formatu se prilagođavaju, a točan naziv se čuva uz njih.
- **Uvoz:** trokuti, poligoni (s rupama), trokutni lepezi i trake postaju plohe; linije postaju bridovi. Primjenjuju se transformacije čvorova, os gore u datoteci i njezina jedinica. Čvor postavljen na više mjesta ili geometrija koju koristi više čvorova dolazi kao komponenta; ostali čvorovi dolaze kao grupe. Difuzne boje materijala postaju boje ploha.
- **Ne uvozi se:** teksture, skinovi i morph ciljevi, kamere, svjetla, neke vrste transformacija (look-at i skew) i reference na druge datoteke. Statusna traka ih broji.
- **Gubi se pri izvozu:** koji su bridovi meki. **Pri uvozu** trokutaste površine ostaju trokuti, s omekšanim dijagonalama da ravna područja i dalje izgledaju kao jedna površina.

## OBJ (.obj, .mtl)

Uvoz i izvoz.

- **Uvoz:** ispustite `.obj` zajedno s njegovom `.mtl` datotekom i slikama tekstura (ili uvezite samo `.obj`: dolazi bez materijala, a statusna traka navodi `.mtl` koju je tražio). Čita se kao metri s Y gore. Svaki objekt (`o`, inače `g`) postaje [mreža](topic:meshes), a njegove plohe zadržavaju svoj oblik (četverokuti ostaju četverokuti). Teksturne koordinate, normale i boje po vrhu se čuvaju. Slika boje materijala (`map_Kd`, PNG, JPEG ili WebP) dolazi kao tekstura, sa svojim opcijama mjerila i pomaka; inače njegova boja (`Kd`). Bridovi gdje normale datoteke prekidaju su tvrdi; bez normala odlučuju grupe zaglađivanja datoteke. Ostale karte (bump, normal), točke, linije i krivulje broje se i izostavljaju. OBJ nema jedinicu, pa model napravljen u milimetrima ili inčima dolazi u krivoj veličini: skalirajte ga nakon uvoza (pogledajte [Rotiranje i skaliranje](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Izvoz:** metri, Y gore, svjetske koordinate. Jedan objekt po postavljanju grupe; komponente se zapisuju u cijelosti na svakom mjestu. Mreže zadržavaju svoje plohe, teksturne koordinate i normale; plohe spojene [mekim bridovima](topic:soften) dobivaju normalu po kutu. Kad model ima boje, uz `.obj` se preuzima `.mtl`. Kad ima uvezene teksture, `.obj`, `.mtl` i slike preuzimaju se zajedno kao jedan `.zip`.
- **Ograničenje:** 2 milijuna vrhova ili ploha; 64 MB teksta.

## glTF (.glb, .gltf)

Uvoz i izvoz, glTF 2.0.

- **Uvoz:** `.glb`, ili `.gltf` zajedno sa svojim `.bin` i datotekama tekstura: ispustite ih na prikaz odjednom (ili odaberite `.glb`). Sam `.gltf` navodi datoteku koja mu treba: „Ova .gltf datoteka treba „…“: otvorite .glb verziju ili ispustite .gltf zajedno s njegovim datotekama.“
  - **Mreže** dolaze kao [mreže](topic:meshes), jedna po mreži u datoteci, sa zadržanim normalama, teksturnim koordinatama i bojama vrhova iz datoteke. Bridovi gdje normale datoteke prekidaju su tvrdi; ostali su meki. Mreža korištena na više mjesta ostaje zajednička.
  - **Čvorovi** postaju grupe, s nazivima kao u datoteci. Instancirane mreže (EXT_mesh_gpu_instancing) dolaze kao jedna mreža postavljena mnogo puta.
  - **Materijali:** tekstura osnovne boje (PNG, JPEG ili WebP) dolazi kao tekstura, postavljena prema teksturnim koordinatama datoteke (s eventualnom transformacijom teksture), i čuva se pri spremanju; inače osnovna boja. Metal, hrapavost, normal karte, staklo, clear coat, sheen i ostala proširenja materijala se čitaju, ali se još ne čuvaju: statusna traka to kaže.
  - **Svjetla** (KHR_lights_punctual): točkasta i reflektorska svjetla postaju [svjetiljke](topic:lights). Usmjerena svjetla se broje: sunce osvjetljava model.
  - **Kamere** postaju [scene](topic:scenes).
  - **Animirani likovi** dolaze stojeći kako ih datoteka drži; njihove kosti i animacije te morph ciljevi se broje i još se ne čuvaju.
  - **Komprimirane datoteke** (Draco, meshopt) i kvantizirani podaci se čitaju. Dekoderi se učitavaju samo za datoteku koja ih treba.
  - Točke i linije se broje i izostavljaju (mreža sadrži plohe). KTX2 teksture se izostavljaju; plohe zadržavaju svoju boju.
- **Izvoz** (`.glb`): glTF 2.0 binarni, metri, Y gore. Jedna mreža po definiciji, pa komponente ostaju zajedničke. Mreže zadržavaju normale, teksturne koordinate i boje vrhova; plohe spojene [mekim bridovima](topic:soften) nose glatke normale. Boje i materijali postaju materijali (materijal kao svoja boja); uvezene teksture zapisuju se kao teksture. Uključene svjetiljke postaju točkasta i reflektorska svjetla (površinske svjetiljke nemaju glTF ekvivalent i izostavljaju se); scene postaju kamere. Slobodni bridovi se izostavljaju.
- **Ograničenje:** datoteke do 300 MB; oko 130 milijuna brojeva geometrije.

## STL (.stl)

Uvoz i izvoz.

- **Uvoz:** binarni ili ASCII. STL nema jedinicu: čita se kao **milimetri**, kako ih pisači i ModelCraft-ov vlastiti izvoz zapisuju. Vrhovi na istoj točki se spajaju, pa zatvoreni dio dolazi kao zatvorena [mreža](topic:meshes). Boje u datoteci (konvencije VisCAM / SolidView i Materialise) boje plohe.
- **Izvoz za 3D ispis:** binarni STL, **milimetri**, Z gore. Samo trokuti: grupe i slobodni bridovi se izostavljaju. Obojene plohe nose svoju boju u konvenciji VisCAM / SolidView, koju drugi programi ignoriraju ako je ne čitaju. Izvozite zatvorena tijela za čist ispis.

## STEP (.step, .stp)

Samo uvoz. STEP je ono što šalju proizvođači dijelova i dobavljači: datoteke AP203, AP214 i AP242.

- **Uvoz:** ModelCraft sam čita datoteku, na stranici, i svako tijelo pretvara u zatvorenu [mrežu](topic:meshes) trokuta: ravne plohe ostaju ravne, zakrivljene (valjci, stošci, kugle, torusi, B-spline površine) postaju mnogo malih ravnih, pri čemu su bridovi unutar jedne zakrivljene plohe meki, a bridovi između dviju ploha oštri. STEP datoteke navode svoju jedinicu; model dolazi u stvarnoj veličini. Sklop dolazi sa svakim dijelom tamo gdje ga datoteka postavlja, a svaki dio je vlastita mreža u grupi nazvanoj po datoteci. Boje, nazivi dijelova iz stabla sklopa i tolerancije (PMI) se ne čitaju.
- **Poruke:** što je preskočeno ili nacrtano grublje dodaje se u statusnu liniju („Napomene: …“); datoteka bez tijela, oštećena datoteka ili datoteka preko ograničenja to kaže i ništa ne dodaje.
- **Ograničenje:** datoteke do 300 MB; 400 000 ploha i 8 milijuna trokuta.

## .3dm

Samo uvoz. Datoteke `.3dm` sadrže NURBS modele: polypovršine, površine, mreže, krivulje i blokove.

- **Uvoz:** ModelCraft sam čita datoteku, na stranici. Mreže dolaze onakve kakve jesu; svaka ploha polypovršine ili ekstruzije dolazi iz render-mreže spremljene uz nju u datoteci, inače ModelCraft izrađuje mrežu (ravnine, NURBS površine, površine rotacije, izvučene krivulje, ekstruzije; obrezane svojim bridovima, zatvorene polypovršine kao zatvorene mreže). Krivulje postaju bridovi, blokovi postaju komponente (blokovi u blokovima se zadržavaju), slojevi postaju oznake (skrivene kad su isključene), a boja objekta (njegova, njegovog sloja ili materijala) boji njegove plohe. Datoteka navodi svoju jedinicu; model dolazi u stvarnoj veličini. Korak po korak: [Uvoz 3dm modela](topic:import-3dm-files).
- **Poruke:** statusna linija kaže koliko je ploha došlo iz spremljenih mreža, koliko ih je izrađeno, i navodi što je izostavljeno: točke, oblake točaka, tekst, kote, šrafure, svjetla, SubD objekte, plohe na vrstama površina koje još ne čitamo, povezane blokove.
- **Ograničenje:** datoteke do 300 MB.

## PLY (.ply)

Uvoz i izvoz, za mreže s bojama (skenovi, 3D ispis u boji, drugi modeleri).

- **Uvoz:** ASCII i binarno. Plohe postaju [mreža](topic:meshes) sa svojim normalama, teksturnim koordinatama i bojama vrhova; svaka ploha dobiva najbližu od 4.096 boja da odmah vidite boje. PLY nema jedinicu ni konvenciju osi: koordinate dolaze onakve kakve jesu (metri, Z gore). PLY samo s točkama je oblak točaka: otvorite ga u BimCraftu ili CivilCraftu.
- **Izvoz:** binarni PLY s pozicijama, normalama i bojama (i teksturnim koordinatama ako ih model ima), u metrima, Z gore.

## FBX (.fbx)

Samo uvoz. FBX 7 datoteke (od 2011. nadalje), binarne ili ASCII, čita vlastiti čitač ModelCrafta.

- Mreže dolaze kao [mreže](topic:meshes) sa svojim normalama, teksturnim koordinatama (svaki UV skup) i bojama vrhova; mreža koju koristi više objekata ostaje zajednička. Objekti postaju grupe sa svojim transformacijama (uključujući osi zakretanja, pomake i predrotacije).
- Materijali: difuzna tekstura, ugrađena u datoteku ili slika ispuštena zajedno s `.fbx`, dolazi kao tekstura (TGA slike se čuvaju kao PNG); inače difuzna boja. Ostale postavke materijala čekaju novi model materijala.
- Os gore i jedinica datoteke se primjenjuju: sve dolazi s Z gore, u metrima.
- Točkasta i reflektorska svjetla postaju [svjetiljke](topic:lights) (FBX intenzitet 100 je zadana svjetiljka ModelCrafta, 800 lumena: FBX intenziteti nemaju jedinicu). Kamere postaju [scene](topic:scenes).
- Animirani likovi dolaze u mirovanju; kosti i animacije se broje i još se ne čuvaju. Usmjerena i površinska svjetla te geometrija osim mreža (NURBS, krivulje) se broje i izostavljaju.
- FBX 6 i stariji se odbijaju: spremite ih ponovno kao FBX 2011 ili noviji.

## Alembic (.abc)

Samo uvoz: predmemorije geometrije iz programa za animaciju i efekte.

- Mreže (poligonske i subdivizijske) dolaze kao [mreže](topic:meshes) s teksturnim koordinatama i normalama; transformacije postaju grupe. Alembic je Y gore i pretvara se u Z gore; metri.
- Predmemorija s mnogo uzoraka (animacija) dolazi s prvim uzorkom; statusna traka kaže koliko ih ima.
- Točke, krivulje, NURBS površine, kamere i svjetla se broje i izostavljaju. Datoteke u starom HDF5 rasporedu se odbijaju: spremite ih ponovno kao Ogawa Alembic datoteku.

{{ui:Provjera za 3D ispis (STL ili 3MF)…}} prvo provjerava oblik, a zatim zapisuje odabir ili sve što je prikazano. Pogledajte [Priprema modela za 3D ispis](topic:print-3d).

## 3MF (.3mf)

Samo izvoz, iz {{ui:Provjera za 3D ispis (STL ili 3MF)…}}. 3MF jezgra: jedna mreža u **milimetrima**, Z gore, s bojama kao materijalima. Većina slicera ga čita i, za razliku od STL-a, navodi svoju jedinicu. Skriveni objekti se izostavljaju. Pogledajte [Priprema modela za 3D ispis](topic:print-3d).

## Izvoz DWG i DXF (.dwg, .dxf)

Za CAD programe. Model se zapisuje u svojoj jedinici: u inčima za modele u stopama i inčima, inače u milimetrima, centimetrima ili metrima (statusna traka to navodi).

- **Plohe** postaju 3D plohe (trokuti). Linije unutar plohe i meki bridovi zapisuju se nevidljivo, pa plohe izgledaju kao u ModelCraftu.
- **Slobodni bridovi** postaju linije.
- **Grupe i komponente** postaju blokovi: komponenta se zapisuje jednom i postavlja onoliko puta koliko se koristi, uključujući okrenute i zrcaljene kopije. Grupa koja je rastegnuta nakon okretanja (pa je nagnuta) zapisuje se na mjestu.
- **Boje:** DWG čuva boju svake plohe točno; DXF koristi najbližu od 255 standardnih CAD boja.
- **Verzije:** DWG se zapisuje kao AutoCAD 2004 (AC1018), koji CAD programi od 2004. nadalje otvaraju. DXF je R12 (AC1009), verzija koju čita svaki CAD program; R12 nema polje za jedinicu, pa recite CAD programu koju jedinicu da koristi.
- **Ne zapisuje se:** vodilice, kote, scene i kamera.

## IFC (.ifc)

Samo izvoz, za BimCraft i druge BIM programe. IFC4 s projektom, lokacijom, zgradom i njezinim etažama. Svaka grupa ili komponenta najviše razine postaje jedan proxy građevinskog elementa sa svojim nazivom; zatvorene se zapisuju kao puna tijela (faceted brep), otvorene kao modeli površina; rupe u plohama se zadržavaju. Slobodna geometrija na najvišoj razini postaje jedan element naziva „Slobodna geometrija“. Nema tipova, svojstava ni materijala.

**Etaže:** {{ui:Izvezi}} › {{ui:IFC etaže…}} ih navodi, svaku s nazivom i visinom ({{ui:Dodaj etažu}}, ili {{ui:Pogodi iz modela}}, što pravi jednu etažu za svaku visinu na kojoj stoje vaše grupe najviše razine). Pri izvozu svaka grupa ili komponenta ide na etažu na ili ispod svoje najniže točke i zadržava svoje mjesto. Bez etaža sve ide na jednu etažu, „Razina 1“, na 0. Etaže se spremaju u ModelCraft datoteku.

## DWG (.dwg) i DXF (.dxf)

Uvoz kao linije na tlu (šrafure i 3D plohe kao plohe); izvoz kako je gore opisano. Pogledajte [Model na situacijskom planu](topic:site-plan).

- **Čitanje:** linije, polilinije (s lukovima), 3D polilinije, kružnice, lukovi i reference blokova, uključujući nizove, iz prostora modela. Nevidljivi objekti (poput skrivenih stanja dinamičkog bloka) se izostavljaju. Krivulje postaju 48 ravnih dijelova po punom krugu.
- **Čitanje od 0.4:** splajnovi i elipse (kao bridovi), tekst, višeretčani tekst i vrijednosti atributa (kao bridovi u jednolinijskom pismu), šrafure (plohe s rupama), 3D plohe i pune ispune (plohe), te kote (crtaju se iz vlastitih blokova kota crteža).
- **Čitanje od 0.7:** 3D tijela, regije i tijela (njihovi ACIS podaci, DWG i DXF svake verzije), svako kao vlastita grupa, zatvorena kao tijela. Plohe na površinama osim ravnina, valjaka, stošaca, kugli, torusa i jednostavnih spline površina se izostavljaju i navode.
- **Ne čita se:** točke, tablice, višestruke vodilice, slike i ništa u prostoru papira.
- **Jedinice:** uzimaju se iz crteža kad ih navodi. Ako ne, ModelCraft pita.
- **DXF** mora biti ASCII. Binarni DXF se odbija.
- **DWG** datoteke od AutoCAD R13 do aktualnog formata (AutoCAD 2018 i noviji; AC1012 do AC1032) čita vlastiti DWG čitač ModelCrafta, na stranici; dio je ModelCrafta, pa radi offline kad i ModelCraft. Starije verzije (R12 i ranije) i jako oštećene datoteke ne mogu se čitati; spremite ih kao DXF.
- **Ograničenja:** koordinate više od 10.000 km od ishodišta ili više od 2 milijuna dijelova linija se odbijaju.

## Datoteke SKP

{{ui:Uvezi}} (ili ispustite datoteku na prikaz) čita SketchUp datoteke vlastitim čitačem ModelCrafta, na stranici: ništa se ne šalje, a radi offline kad i ModelCraft. Testirano s datotekama iz SketchUpa 3, 6, 7, 2014, 2017, 2018, 2020, 2025 i 2026; ostale verzije bi se trebale otvoriti, ali još nisu isprobane. Model dolazi kao jedna grupa nazvana po datoteci. Jedan {{key:Mod+Z}} ga ponovno uklanja. Korak po korak: [Uvoz SketchUp modela](topic:import-sketchup-files).

- **Čuva se:** plohe s rupama, grupe (kao grupe) i komponente (kao komponente, zajedničke), njihovi nazivi i položaji, boje, oznake na grupama i komponentama, bridovi koji nisu dio plohe te meki i glatki bridovi, pa zakrivljene površine ostaju glatke.
- **Boje:** vlastiti materijal plohe daje joj boju. Materijal nanesen na grupu ili komponentu postaje boja tog položaja, pa unutarnje plohe bez vlastite boje preuzimaju je, kao u SketchUpu; komponenta obojena u dvije boje ostaje jedna komponenta.
- **Oznake** na grupama i komponentama postaju ModelCraft oznake, prikazane ili skrivene kao što su bile. Oznake na slobodnim plohama i bridovima se ne čuvaju (ModelCraft označava samo grupe i komponente); statusna traka ih broji.
- **Skriveno dolazi skriveno** (plohe, bridovi, grupe, komponente te plohe i bridovi na skrivenoj oznaci), pa vidite što je SketchUp prikazivao; {{ui:Prikaži sve}} ih prikazuje.
- **Teksture:** ploha obojena teksturiranim materijalom zadržava teksturu, postavljenu kao u datoteci, a ModelCraft datoteka čuva sliku. Tekstura na cijeloj grupi ili komponenti, tekstura koja nedostaje u datoteci, ili slika koju preglednici ne mogu prikazati (poput Photoshop datoteke) zadržava samo boju svog materijala.
- **Izostavljeno, broji se u statusnoj traci:** slike postavljene u model. Tekst, kote, vodilice, presječne ravnine, scene i stilovi se ne čitaju.
- **Jedinice:** SketchUp datoteke su unutarnje u inčima; ModelCraft ih pretvara, pa veličine dolaze točne u bilo kojoj jedinici.
- **Spremanje `.skp`** još nije izrađeno. Da model vratite u SketchUp, izvezite Collada (`.dae`).

## Nije podržano

ModelCraft ne može otvoriti 3DS ili IFC datoteke, niti spremiti 3DS, FBX, STEP, `.3dm` ili SketchUp (`.skp`) datoteke.
