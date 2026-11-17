---
title: Kaj je novega v 0.7 (prej)
summary: Mreže z modifikatorji, kiparjenje, UV in krivuljni predmeti, sledenje poti na grafični kartici in delovno okolje Upodobi, živi pogled v realnem času s stresanjem in panoramami, materiali z vozlišči, delovno okolje Animiraj s kostmi in fiziko, USD, FBX, STEP in datoteke .3dm ter orodja za tiskanje s slogom Začetnik.
keywords: kaj je novega 0.7, prejšnja izdaja, opombe ob izdaji, dnevnik sprememb, spremembe, 0.7, različica, nove funkcije, mreža, mreže, delovno okolje mreže, modifikatorji, podrazdelitev, zareza, uv, razvij, šivi, krivulje, krivuljni predmeti, nurbs, bezier, kiparjenje, ponovna mreža, retopologija, razdelitev, izračun, sledenje poti, webgpu, delovno okolje upodobi, vrsta upodobitev, mp4, exr, odšumljanje, fizično nebo, hdri, ies, globina ostrine, mešanje luči, megla, kavstika, živi pogled, realni čas, hoja, raztresenje, panorama, ogled, senčenje, vozlišča, vozliščni materiali, knjižnica materialov, materialx, nalepke, slikanje tekstur, pečenje, animiraj, urejevalnik grafov, posnetki, oblike ključev, gonilniki, skelet, kosti, vezanje, ik, omejitve, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d telesa, podpore, debelina sten, izdolbi, popravilo, začetnik, pomočniki, vaš računalnik, enote, portugalščina
from: fa562a09
---

To so spremembe v ModelCraft 0.7 v primerjavi z 0.6. ModelCraft zdaj modelira mreže in tudi geometrijo, narejeno s potisni/povleci, upodablja na grafični kartici in ima delovno okolje za vsako vrsto dela: izberete ga v seznamu {{ui:Delovno okolje}} na levi strani orodne vrstice.

## Novo

### Mreže

- **Mreže.** Izberite skupino ali komponento in kliknite {{ui:Pretvori v mrežo}} v {{ui:Podatki o entiteti}}: postane mreža s ploskvami s poljubnim številom vogalov, ki lahko nosijo teksturne koordinate, normale, barve in uteži. {{ui:Pretvori v geometrijo}} jo vrne nazaj. Razveljavitev na mreži ohrani le tisto, kar je vsak korak spremenil. Datoteka, ki vsebuje mrežo, za odpiranje potrebuje ModelCraft 0.7. Glejte [Mreže](topic:meshes).
- **Delovno okolje Mreža.** Dvakrat kliknite mrežo ali izberite {{ui:Mreža}} v seznamu {{ui:Delovno okolje}}, da uredite njena oglišča, robove in ploskve: zanke in obroče, sorazmerno urejanje, iztiskanje, zamik, skos, rez zanke, nož, bisekcijo, vrtenje, združevanje, raztapljanje, zapolnitev, mrežno zapolnitev, most in drsenje ter nastavitve zadnje operacije, ki jih lahko spremenite pozneje v podoknu. Začnete lahko z ravnino, kocko, kroglo, torusom in še več. Tipke potisni/povleci in tipke modelirnika delujejo obe. Glejte [Urejanje mreže v delovnem okolju Mreža](topic:mesh-edit).
- **Modifikatorji.** Zrcaljenje, matrika, podrazdelitvena ploskev, skos, utrditev, logična operacija, premik, zavarjanje, decimacija, glajenje, rešetka (lattice), upogib krivulje in prilagoditev ovoju spremenijo, kar mreža prikazuje, ne da bi jo spremenili. Naložite jih v sklad, vklapljajte in izklapljajte vsakega za pogled in za upodobitve ter {{ui:Uporabi}} enega, kadar ga želite trajno. Glejte [Modifikatorji na mreži](topic:modifiers).
- **Podrazdelitev z zarezami.** {{ui:Zareza}} v delovnem okolju Mreža ohrani izbrane robove ostre pod podrazdelitveno ploskvijo. Upodobitve lahko uporabijo več stopenj kot pogled, pri velikih mrežah pa pogled prikaže nižjo stopnjo in to pove. Glejte [Podrazdelitvena ploskev](topic:modifiers#subdivision-surface).
- **Krivuljni predmeti.** Bézierjeve, NURBS in ravnosegmentne krivulje, ki naredijo cev, trak, zožitev ali zapolnjeno ploščo, ter besedilo kot krivulja. Njihove točke urejate v delovnem okolju {{ui:Krivulja}}; {{ui:V mrežo}}, ko je oblika prava. Glejte [Krivuljni predmeti](topic:curves).
- **Delovno okolje UV.** Označite šive (ali naj ModelCraft označi na ostrih robovih), {{ui:Razvij}} in {{ui:Zapakiraj}}, ali projicirajte s kvadrom, valjem, kroglo ali pogledom. Urejevalnik UV ob 3D pogledu premika, obrača in meri kose, šahovnica in barve raztezanja pa prikažejo rezultat. Glejte [Razporeditev UV koordinat mreže](topic:uv).
- **Kiparjenje.** Delovno okolje {{ui:Kiparjenje}} ima čopiče za risanje, glino, glajenje, prijem, napihovanje, zarezo, stiskanje, sploščenje in masko, zrcaljenje čez X ter {{ui:Podrobnost}}, ki doda trikotnike tam, kjer kiparite. Tlak peresa nastavi velikost in moč čopiča. Vsak potez je en korak razveljavitve. Glejte [Kiparjenje mreže](topic:sculpt).
- **Ponovna mreža in retopologija.** {{ui:Ponovno mreži}} naredi celotno mrežo znova iz enakomernih trikotnikov, zapre luknje in združi prekrivajoče se kose. Če želite čisto mrežo čez podrobno, jo izberite pod {{ui:Retopologija}}: točke, ki jih premaknete, pristanejo na njeni površini. Glejte [Ponovna mreža](topic:mesh-edit#remesh).

### Risanje

- **Razdelitev roba ali krivulje.** Orodje {{ui:Razdeli}} označi reze, ko se premikate po robu, in deli s klikom ali vpisanim številom; z izbranim robom, lokom ali krogom vpišite `/5`; {{ui:Podatki o entiteti}} › {{ui:Razdeli…}} zahteva število, za tablice. Lok ali krog se deli na enake kote na pravem loku. Glejte [Razdelitev roba ali krivulje na enake dele](topic:divide).
- **Izračuni v polju vrednosti.** Vpišite `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ali `2*450mm` za katero koli dolžino in `90/2` za kot. Izračun, ki ga ni mogoče opraviti, pove, kaj in kje je narobe. Glejte [Izračuni](topic:value-box#calculations).

### Upodabljanje

- **Sledenje poti na grafični kartici.** {{ui:Upodobi sliko…}} › {{ui:Visoka kakovost (sledenje poti)}} zažene lastni sledilnik poti CadCraft na grafični kartici, kjer brskalnik podpira WebGPU; vrstica pod sliko pove, kateri mehanizem jo je naredil. {{ui:Ustavi}} ohrani sliko, {{ui:Nadaljuj}} pa nadaljuje od tam. Brez WebGPU je slika narejena s sledenjem poti z WebGL, kakor prej. Glejte [Visoka kakovost](topic:render#high-quality).
- **Upodabljanje v pogledu.** Delovno okolje {{ui:Upodobi}} sledi poti samemu pogledu in se začne znova, ko krožite ali urejate: upodobite {{ui:Območje}}, kliknite za {{ui:Ostrenje}}, nastavite {{ui:Podrobnost}}. Potrebuje WebGPU. Glejte [Upodabljanje v pogledu](topic:render#render-in-the-view).
- **Materiali, luči in nebo.** Visokokakovostne slike senčijo vsako ploskev z materialnim modelom OpenPBR (prevleke, kosmatost, tanke plasti, obarvano steklo, sij). Z WebGPU sta na voljo tudi {{ui:Fizikalno nebo}} z {{ui:Motnost}}, {{ui:Slika neba (HDRI)}} in proizvajalčevi profili luči IES za svetila. Glejte [Nebo in profili luči](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kakor pri fotografiji.** Osvetlitev iz zaslonke, zaslonskega časa in ISO v vsakem načinu; z WebGPU še globina ostrine, perspektiva z dvema točkama, nastavitev belega, panorame 360° (tudi stereo) in kubične mape. Glejte [Kamera](topic:render#the-camera).
- **Dokončajte sliko po upodobitvi.** Barvno uglasite ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} ali {{ui:Standardno}}, kontrast, bloom, bliščanje, vinjeta, tabela barv `.cube`), mešate nebo, sonce in vsako skupino svetil ter si ogledate elemente upodobitve enega za drugim, vse brez ponovne upodobitve. Preostalo zrno odstrani odšumljevalnik na vašem računalniku. Glejte [Dokončanje slike](topic:render#finish-the-picture) in [Mešanje luči po upodobitvi](topic:render#mix-the-lights-after-the-render).
- **Več načinov shranjevanja upodobitve.** 16-bitni PNG, večplastna EXR z vsakim elementom upodobitve in skupino svetil ter datoteka upodobitve (`.ccrender`), ki se ponovno odpre z mešanjem in barvnim uglaševanjem. Glejte [Shranjevanje slike](topic:render#save-the-picture).
- **Megla, dim in kavstika.** Megla in medlica, osvetljeni s soncem in svetili, s svetlobnimi stebri; en dimni steber ali oblak; kavstika pod steklom in zrcali; adaptivno vzorčenje, ki se ustavi na slikovnih točkah, ki so že čiste. Samo na grafični kartici. Glejte [Megla, dim, šum in kavstika](topic:render#fog-smoke-noise-and-caustics).
- **Vrsta upodobitev in MP4.** Dodajte visokokakovostne slike in cele animacije v {{ui:Vrsta upodobitev}}; upodabljajo se druga za drugo in vrsta preživi zapiranje strani. Potrebuje WebGPU. Videe lahko shranite tudi kot MP4, kjer ga brskalnik lahko zapiše. Glejte [Vrsta upodobitev](topic:render#the-render-queue) in [Upodobitev videa](topic:animation#render-the-video).

### Živi pogled in predstavitve

- **Živi pogled.** {{ui:Izvozi}} › {{ui:Živi pogled}} prikaže model v videzu v realnem času ob pogledu, ki sledi vsaki spremembi in kameri: sončne sence, materiali, svetila in svetloba, odbita od sten. {{ui:Hoja}} skozi, povlecite {{ui:Čas}} in {{ui:Mesec}}, da premaknete sonce, ali ga premaknete v {{ui:Novo okno}}. Uporablja WebGPU, kjer ga brskalnik ima, sicer WebGL 2. Glejte [Živi pogled](topic:live-view).
- **Raztresenje.** Razpršite travo, cvetje, kamenje, drevesa in ljudi po ploskvah ali s čopičem, iz sedmih novih predmetov okolice in preostale knjižnice; nabori se shranijo v datoteko. Glejte [Raztresanje rastlin, kamenja in ljudi](topic:live-view#scatter-plants-rocks-and-people).
- **Deljenje.** 360° panorama, ogled s panoramami s puščicami med točkami, samostojni ogledovalnik (ena spletna stran, ki se odpre brez povezave in ne naloži ničesar iz interneta) in video poti kamere, vse v videzu v realnem času. Glejte [Deljenje](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR v videzu v realnem času.** {{ui:Pregled v VR}} prikaže model z materiali, nebom, senco sonca, svetili, raztresenimi predmeti in odbito svetlobo. Glejte [Kako izgleda](topic:vr-review#what-it-looks-like).

### Materiali

- **Materiali, narejeni z vozlišči.** Delovno okolje {{ui:Senčenje}} gradi lastne materiale datoteke kot grafe vozlišč: slike, šum in šahovnice, Voronoi celice, valove, opeke, ploščice, les, marmor, prelive, umazanijo in obrabo robov, barvno delo, matematiko, grbinske in normalne karte, v celoten material OpenPBR. Pogled prikaže vsako spremembo takoj. Glejte [Izdelava materialov z vozlišči](topic:shading).
- **Knjižnica materialov in lastni nabori tekstur.** Plošča Senčenje navaja materiale knjižnice: šestnajst nizov tekstur CC0, vsak z navedbo avtorja. Kliknite enega, da ga uporabite, ali ga povlecite na ploskev. {{ui:Slike ali zip…}} ali {{ui:Mapa…}} naredi material iz vaših zemljevidov, najdenih po imenih datotek. Glejte [Materiali iz knjižnice](topic:shading#materials-from-the-library).
- **MaterialX v in iz.** Izvozite material kot MaterialX (OpenPBR Surface ali Standard Surface, teksture kot PNG) in uvozite datoteke MaterialX z njihovimi slikami. Glejte [MaterialX](topic:shading#materialx).
- **Nalepke in slikanje teksture.** Postavite sliko na površino kot nalepko z lastnim materialom in slikajte po sliki materiala z okroglim čopičem. Glejte [Nalepke](topic:shading#decals) in [Slikanje po teksturi](topic:shading#paint-on-the-texture).
- **Pečenje tekstur.** Speče okluzijo okolice, ukrivljenost, osvetlitev in normale podrobnega predmeta v slike vzdolž UV mreže, na procesorskih jedrih računalnika. Glejte [Pečenje tekstur](topic:shading#bake-textures).

### Animacija

- **Delovno okolje Animiraj.** Ključite mesto, obrat in velikost predmeta, svetlost, razpršenost in barvo vsakega svetila ter kot objektiva, kar v podoknu. Časovnica dobi pogled {{ui:Krivulje}} (Bézierjevi ročaji, ponavljanja) in pogled {{ui:Posnetki}}, ki shrani ključe kot dejanja za ponovno postavitev in mešanje; ključe v več vrsticah lahko premikate, raztegujete, kopirate in lepite. Glejte [Animirajte poljubno lastnost](topic:animate).
- **Oblike ključev in gonilniki.** Mreža hrani druge oblike sebe, zmešane z drsniki, ki jih lahko ključite, ali nastavljene iz drugih vrednosti z majhnim izrazom. Glejte [Oblike ključev](topic:animate#shape-keys-morphs) in [Gonilniki](topic:animate#drivers).
- **Skeleti.** Postavite kosti v mrežo, naj {{ui:Samodejne uteži}} razdeli točke med njimi ali slikajte uteži, ter pozirajte in ključite kosti; linearno ali dvojno kvaternionsko vezanje. Glejte [Skeleti](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK in omejitve.** Doseg (IK) s polom, gledanje proti, kopiranje preoblik, meje, otrok od in sledenje poti, za kosti in predmete. Glejte [IK in omejitve](topic:animate#ik-and-constraints).
- **Fizika.** Skupine in komponente padejo, se zlagajo in trčijo kot kvadri ali krogle, {{ui:Peci fiziko}} pa ohrani rezultat kot ključe. Glejte [Fizika](topic:animate#physics-drop-stack-and-collide).

### Datoteke

- **USD.** {{ui:Shrani kot}} ({{key:Mod+Shift+S}}) shrani model kot `.usda`, `.usdc` ali `.usdz`; datoteka USD, ki jo je ModelCraft shranil, se ponovno odpre brez izgub. USD iz drugih programov se odpre ali uvozi kot mreže, skupine, komponente, svetila in kamere. {{ui:Shrani}} še vedno zapiše `.modelcraft`. Glejte [Shranjevanje, odpiranje in izvoz USD](topic:usd).
- **glTF, popolno.** Datoteke glTF pridejo kot urejljive mreže z normalami, UV, barvami oglišč in teksturami; vozlišča kot skupine, svetila kot svetila in kamere kot prizori, vključno z datotekami Draco in meshopt; `.gltf` se odpre, če ga spustite skupaj z datotekami. Izvoz zapiše mreže, teksture, svetila in kamere. Glejte [glTF](topic:formats#gltf-glb-gltf).
- **Uvoz FBX, PLY, STL in Alembic.** FBX 2011 in novejši (mreže, nabori UV, materiali, vdelane teksture, svetila, kamere), PLY in STL z njunimi barvami ter predpomnilniki Alembic na prvem vzorcu. OBJ pride z `.mtl` in slikami, ko ju spustite skupaj. Glejte [Formati datotek podrobneje](topic:formats).
- **Več izvozov.** PLY z barvami, STL z barvami pobarvanih ploskev in OBJ s teksturami kot ena datoteka zip. Glejte [Formati datotek podrobneje](topic:formats).
- **Datoteke STEP.** {{ui:Uvozi}} prebere dele in sestave STEP (AP203, AP214, AP242) kot zaprte mreže v pravi velikosti, vsak del tam, kjer ga datoteka postavi. Glejte [STEP](topic:formats#step-step-stp).
- **Datoteke .3dm.** {{ui:Uvozi}} prebere modele `.3dm`: mreže, polpovršine in izvlečke (iz mrež, shranjenih v datoteki, sicer jih ModelCraft pretvori v mreže), krivulje kot robove, bloke kot komponente in plasti kot oznake. Glejte [Uvoz modela .3dm](topic:import-3dm-files).
- **3D telesa iz DWG in DXF.** Uvoz risbe zdaj prinese tudi njena 3D telesa, območja in telesa, vsako kot svojo skupino, zaprta pa kot telesa. Glejte [Model na tlorisu lokacije](topic:site-plan#what-comes-in).

### Tiskanje v 3D

- **Orodja za tiskanje.** {{ui:Preveri za 3D-tiskanje (STL ali 3MF)…}} › **Orodja za tiskanje** ima {{ui:Predogled podpor}} (previsi, stebri ali drevesne podpore, približna količina materiala), {{ui:Debelina sten}} (stene, ki so pretanke za tiskanje, navedene z {{ui:Prikaži}}), {{ui:Izdolbi}} (stene dane debeline z odtočnimi luknjami) in {{ui:Popravilo}} (vsako popravilo je navedeno; prekrivajoči se deli se združijo le, ko to zahtevate). Izdolbi in Popravilo dasta skupino, katere ravne stranice so posamezne ploskve, ali mrežo, kadar rezultat ne bi bil zaprt ali ima preveč ploskev; vrstica stanja pove, katera. Glejte [Podpore, debelina sten, izdolbitev in popravilo](topic:print-tools).
- **Slog Začetnik.** {{ui:Nastavitve}} › {{ui:ModelCraft}} › {{ui:Meniji, tipke in miška}} › {{ui:Začetnik}}: veliki gumbi za spuščanje oblik in lukenj, premikanje, poravnavo in {{ui:Skupina}}, da se luknje izrežejo, nato preverite model za tiskanje. Glejte [Slog Začetnik](topic:beginner).

### Pomočniki in vaš računalnik

- **Več za pomočnike z umetno inteligenco.** Pomočnik lahko zdaj našteje ploskve in materiale, potisne/povleče, pobarva, naredi skupine, doda in pokaže prizore, doda mreže, ureja sklade modifikatorjev, izvozi USD, upodobi sliko in napolni vrsto upodobitev. Glejte [Uporaba ModelCraft s pomočnikom z umetno inteligenco](topic:use-with-ai-assistants).
- **Vaš računalnik.** {{ui:Nastavitve}} › {{ui:ModelCraft}} › {{ui:Upodabljanje}} › {{ui:Vaš računalnik}} prikaže grafiko, procesorska jedra in pomnilnik, ki jih lahko aplikacija v tem brskalniku uporabi, ter raven, ki določa, kje se začne živi pogled. Glejte [Kaj vaš računalnik upodablja](topic:your-machine).

## Popravljeno

- {{ui:Telesa}} › {{ui:Unija}}, {{ui:Odštej}} in {{ui:Presek}} sta lahko vrnila skupino, ki ni bila zaprta, pri katerikoli velikosti. Zdaj se zaprejo.
- {{ui:Telesa}} › {{ui:Odštej}} je bil siv, ko nič ni bilo izbrano, čeprav po izbiri izbere svoja dva kosa drugega za drugim.
- V časovnici animacije tipke, vtipkane vanjo, niso šle nikamor, prav tako ne {{key:Mod+S}}. {{key:Mod+Z}} in {{key:Mod+Y}} tam sta razveljavitev in uveljavitev časovnice; druge tipke {{key:Mod}} dosežejo aplikacijo.

## V vseh aplikacijah

- **Enote.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}} ima po en seznam za dolžino, ploščino, prostornino, kot in naklon, s točnimi velikostmi, ki jih dajejo definicije enot (ameriški geodetski čevelj je sam svoja enota). Izklopite enote, ki jih nikoli ne uporabljate, in ostanejo zunaj seznamov; z zvezdico označena enota začne novo delo. Datoteka vedno ohrani svojo enoto. V ModelCraft seznam enot ob polju vrednosti sledi stikalom (enota modela vedno ostane na seznamu), zvezdica nastavi enoto novega modela (kadar ga ModelCraft ima), dolžina, vpisana z oznako katerekoli enote, pa se prebere v tej enoti. Glejte [Enote, vneseni podatki in seznami enot](common:unit-lists).
- **Gostejša postavitev in podokna, ki se skrijejo.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Gostota postavitve}} › {{ui:Strnjeno}} vidi več na zaslonu (zasloni na dotik in telefoni ohranijo velike gumbe). Vsako stransko podokno ima tanko naslovno vrstico: povlecite jo, da ga pripnete ali odlepite, spustite jo na naslovno vrstico drugega podokna, da delita en okvir kot zavihke, ga pripnite, da zdrsne do roba, ali ga skrijte in privabite nazaj z roba. Glejte [Razvrstitev podoken](common:arrange-panels#make-the-layout-denser).
- **Pogovorna okna se premikajo.** Povlecite pogovorno okno za naslovno vrstico iz poti risbe; vrne se tja, kjer ste ga pustili. Dvakrat kliknite naslovno vrstico, da ga spet postavite na sredino. Glejte [Premik pogovornega okna](common:arrange-panels#move-a-dialog).
- **Recepti za pomočnike z umetno inteligenco.** Deset obdelanih zahtev za vašega pomočnika (uredi risbo, natisni komplet, preveri risbe, vprašaj model, sešteje predizmere, preizkusi različico dela …), vsaka s orodji, ki jih kliče, in dovoljenji, ki jih potrebuje, ter vsaka ponovljena z našimi testi. Aplikacije ne vsebujejo umetne inteligence. Glejte [Recepti za pomočnike z umetno inteligenco](common:assistants-recipes).
- **Jeziki.** **Português (Portugal)** je nov v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Jezik}}. Ta, **Português (Brasil)**, **Español (México)** in **Bahasa Indonesia** imajo zdaj vse besede aplikacij, kot osnutke, ki jih ni pregledal materni govorec. Teme pomoči so v angleščini.
- **CadCraft Studio** pove, zakaj preverjanje posodobitve ni uspelo (ni datoteke za vaš sistem, ni omrežja, slab podpis), namesto le „Končano“, in ne prikaže več kartice Kaj je novega, ki ste jo zaprli, dokler ni novejše izdaje.

## Še ni v tej izdaji

- **0.7 ni podpisan s kodo.** Podpisovanje in paket trgovine Microsoft Store sta prestavljena v 0.8, ker potrditev certifikata še ni prišla. Preverite SHA-256 ob vsaki datoteki na getcadcraft.com/download. Na Windows, če SmartScreen ustavi namestitveni program, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu prvič z desno tipko kliknite CadCraft Studio in izberite {{ui:Odpri}}. CadCraft Studio še ni v nobeni trgovini z aplikacijami, izdelave za iPad ali iPhone pa še ni.
- Seznama kota in naklona v {{ui:Enote}} sta shranjena, vendar ju zaenkrat nobeno polje ne bere.
- Upodabljanje na grafični kartici (WebGPU) je bilo tukaj preizkušeno samo s programsko nadomestno napravo, še ne na pravih grafičnih karticah, zato najprej na svojem računalniku upodobite kaj majhnega. Enako velja za živi pogled, VR pa je bil preizkušen samo z emulatorjem očal.
- Brez WebGPU ni delovnega okolja Upodobi ali vrste upodobitev, visokokakovostne slike pa nimajo globine ostrine, fizikalnega neba, slike neba, megle, dima, kavstike ali mešanja luči.
- {{ui:Upodobi sliko…}} še ne riše raztresenih predmetov; prikažejo se v živem pogledu, njegovih panoramah, ogledovalniku in videu.
- Svetila se animirajo v pogledu, vendar upodobljen video uporablja svetila takšna, kakršna so, ko se začne.
- Kosti in animacija se ne berejo in ne pišejo v datoteke glTF, FBX ali USD (vezani modeli pridejo v mirovanju, z utežmi), materiali glTF in FBX onkraj osnovne barve ali teksture pa še niso ohranjeni.
- Barve STEP in imena delov sestave še niso prebrana. Uvoz `.3dm` je bil preizkušen z datotekami, ki jih je zapisalo orodje formata, še ne z datotekami iz samega modelirnika; predmeti SubD, besedilo in kote so izpuščeni.
- Knjižnica rastlin iz CivilCraft je v ModelCraft, vendar postavljanje rastlin iz nje še ni izdelano.
- Barvanje teksture na ploskvah potisni/povleci se ponavlja s ploščico materiala; za pobarvanje samo ene ploskve jo pretvorite v mrežo in razvijte.

Vse drugo je v [Še ni izdelano](topic:not-built-yet).
