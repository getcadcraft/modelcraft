---
title: Mis on uut versioonis 0.7 (varasem)
summary: Võrgud modifikaatoritega, skulptuur, UV-d ja kõveraobjektid, kiirte jälgimine graafikakaardil ja renderdamise tööruum, reaalajavaade hajutuse ja panoraamidega, sõlmematerjalid, animatsiooni tööruum luude ja füüsikaga, USD, FBX, STEP ja .3dm-failid ning printimise tööriistad algaja stiiliga.
keywords: mis on uut 0.7, varasem versioon, versioonimärkused, muudatuste logi, muudatused, 0.7, versioon, uued funktsioonid, võrk, võrgud, võrgu tööruum, modifikaatorid, alajaotus, vagu, uv, lahuta, õmblused, kõverad, kõveraobjektid, nurbs, bezier, skulptuur, uuesti võrgusta, retopoloogia, jaga, arvutus, kiirte jälgimine, webgpu, renderdamise tööruum, renderdamise järjekord, mp4, exr, müra eemaldamine, füüsikaline taevas, hdri, ies, väljasügavus, valguse segamine, udu, kaustika, reaalajavaade, reaalajas, hajutus, panoraam, tuur, vaataja, varjutus, sõlmed, sõlmematerjalid, materialx, kleebised, tekstuurimaalimine, küpsetamine, animeeri, graafiku redaktor, klipid, kujuvõtmed, draiverid, armatuur, luud, nahastamine, ik, piirangud, füüsika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D-tahkised, toed, seina paksus, õõnestamine, paranda, algaja, assistendid, sinu masin, ühikud, portugali
from: fa562a09
---

Need on muudatused ModelCraft 0.7 versioonis võrreldes versiooniga 0.6. ModelCraft modelleerib nüüd võrke lisaks lükka/tõmba geomeetriale, renderdab graafikakaardil ja sellel on tööruum iga liiki tööks: vali see tööriistariba vasakul olevast loendist {{ui:Tööruum}}.

## Uus

### Võrgud

- **Võrgud.** Vali grupp või komponent ja klõpsa {{ui:Teisenda võrguks}} jaotises {{ui:Objekti teave}}: sellest saab võrk, mille tahkudel võib olla suvaline arv nurki ning mis võivad kanda tekstuurikoordinaate, normaale, värve ja kaale. {{ui:Teisenda geomeetriaks}} muudab selle tagasi. Tagasivõtmine võrgul säilitab ainult selle, mida iga samm muutis. Võrgu sisaldavat faili avamiseks on vaja ModelCraft 0.7-d. Vt [Võrgud](topic:meshes).
- **Võrgu tööruum.** Topeltklõps võrgul või vali {{ui:Võrk}} tööruumi loendist, et muuta selle tippe, servi ja tahke: silmused ja rõngad, proportsionaalne muutmine, väljapressimine, sissenihe, faas, silmalõige, nuga, poolitamine, pööramine, liitmine, lahustamine, täitmine, ruudustiku täitmine, sild ja nihe; viimase toimingu sätteid saab hiljem paneelis muuta. Alusta tasapinnast, kuubist, sfäärist, toroidist ja muust. Töötavad nii lükka/tõmba klahvid kui modelleerija klahvid. Vt [Võrgu muutmine võrgu tööruumis](topic:mesh-edit).
- **Modifikaatorid.** Peegeldus, massiiv, alajaotuspind, faas, tahkestamine, bool, nihutus, ühendamine, detsimeerimine, silumine, võre, kõvera deformatsioon ja kokkutõmbumine muudavad seda, mida võrk näitab, muutmata võrku ennast. Virnasta neid, lülita kumbki vaate ja renderduste jaoks sisse või välja ning {{ui:Rakenda}} üks, kui soovid seda lõplikult. Vt [Võrgu modifikaatorid](topic:modifiers).
- **Alajaotus vagudega.** Võrgu tööruumi {{ui:Vagu}} hoiab valitud servad alajaotuspinna all teravatena. Renderdustes võib kasutada rohkem tasemeid kui vaates, ja suurel võrgul näitab vaade madalamat taset ning ütleb seda. Vt [Alajaotuspind](topic:modifiers#subdivision-surface).
- **Kõveraobjektid.** Bézier-, NURBS- ja sirglõikudest kõverad, millest saab toru, riba, kitsenduse või täidetud plaadi, ning tekst kõverana. Muuda nende punkte {{ui:Kõver}} tööruumis; kui kuju on paigas, {{ui:Võrguks}}. Vt [Kõveraobjektid](topic:curves).
- **UV-tööruum.** Märgi õmblused (või lase ModelCraftil need märkida teravatel servadel), {{ui:Lahuta}} ja {{ui:Paki}}, või projekteeri kasti, silindri, sfääri või vaate järgi. 3D-vaate kõrval olev UV-redaktor liigutab, pöörab ja skaleerib tükke, ning kontrollruudustik ja venitusvärvid näitavad tulemust. Vt [Paiguta võrgu UV-d](topic:uv).
- **Skulptimine.** {{ui:Skulptuur}} tööruumis on joonistus-, savi-, silumis-, haardumis-, täispuhumis-, vaguse-, nypistus-, lamendus- ja maskeerimispintslid, peegeldus üle X-telje ning {{ui:Detail}}, mis lisab kolmnurki seal, kus skulpteerid. Pliiatsi surve määrab pintsli suuruse ja tugevuse. Iga joon on üks tagasivõtmise samm. Vt [Võrgu skulptimine](topic:sculpt).
- **Uuesti võrgustamine ja retopoloogia.** {{ui:Uuesti võrgusta}} teeb kogu võrgu uuesti ühtlaste kolmnurkadena, sulgedes augud ja ühendades kattuvad tükid. Puhta võrgu loomiseks detailse peale vali see jaotises {{ui:Retopoloogia}}: punktid, mida liigutad, asetuvad selle pinnale. Vt [Uuesti võrgustamine](topic:mesh-edit#remesh).

### Joonistamine

- **Serva või kõvera jagamine.** Tööriist {{ui:Jaga}} märgib lõiked, kui liigud mööda serva, ja jagab klõpsuga või kirjutatud arvuga; kui on valitud serv, kaar või ring, kirjuta `/5`; {{ui:Objekti teave}} › {{ui:Jaga…}} küsib arvu tahvelarvutite jaoks. Kaar või ring jagatakse võrdsete nurkade kaupa tõelisel kaarel. Vt [Serva või kõvera jagamine võrdseteks osadeks](topic:divide).
- **Arvutused väärtusekastis.** Kirjuta `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` või `2*450mm` mis tahes pikkuse jaoks ja `90/2` nurga jaoks. Arvutus, mida ei saa teha, ütleb, mis on valesti ja kus. Vt [Arvutused](topic:value-box#calculations).

### Renderdamine

- **Kiirte jälgimine graafikakaardil.** {{ui:Renderda pilt…}} › {{ui:Kvaliteetne (kiirte jälgimine)}} käivitab CadCraft'i enda kiirte jälgija graafikakaardil seal, kus brauseril on WebGPU; joon pildi all ütleb, milline mootor selle tegi. {{ui:Peata}} säilitab pildi ja {{ui:Jätka}} jätkab sealt. Ilma WebGPU-ta renderdatakse pilt nagu varem WebGL-iga kiirte jälgimisena. Vt [Kvaliteetne](topic:render#high-quality).
- **Renderdamine vaates.** {{ui:Renderda}} tööruum jälgib kiiri otse vaates ja alustab uuesti, kui orbiteerid või muudad: renderda {{ui:Piirkond}}, klõpsa {{ui:Fookus}}, määra {{ui:Detail}}. Vajab WebGPU-d. Vt [Renderdamine vaates](topic:render#render-in-the-view).
- **Materjalid, valgused ja taevad.** Kvaliteetsed pildid varjutavad iga pinna OpenPBR-materjalimudeliga (kihid, kiud, õhukesed kiled, värviline klaas, hõõgumine). WebGPU-ga on ka {{ui:Füüsikaline taevas}} koos valikuga {{ui:Udusus}}, {{ui:Taevapilt (HDRI)}} ning tootjate IES-valgusprofiilid lampide jaoks. Vt [Taevad ja valgusprofiilid](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Fotokaamerale sarnane kaamera.** Säritus f-numbrist, säriajast ja ISO-st igas režiimis; WebGPU-ga ka väljasügavus, kahepunktperspektiiv, valgebalanss, 360° panoraamid (ka stereos) ja kuubikaardid. Vt [Kaamera](topic:render#the-camera).
- **Pildi viimistlemine pärast renderdamist.** Anna sellele toon ({{ui:ACES filmne}}, {{ui:AgX}}, {{ui:Filmne}} või {{ui:Standardne}}, kontrast, hõõgumine, sära, vinjetid, `.cube` värvitabel), sega taevast, päikest ja iga lambigruppi ning vaata renderduselemente ükshaaval, kõike ilma uuesti renderdamata. Jäänud terakese eemaldab sinu arvutis müratõrjuja. Vt [Pildi viimistlemine](topic:render#finish-the-picture) ja [Valguste segamine pärast renderdamist](topic:render#mix-the-lights-after-the-render).
- **Rohkem viise renderduse salvestamiseks.** 16-bitine PNG, mitmekihiline EXR iga renderduselemendi ja valgusgrupiga ning renderdusfail (`.ccrender`), mis avaneb uuesti oma segu ja toonidega. Vt [Pildi salvestamine](topic:render#save-the-picture).
- **Udu, suits ja kaustika.** Päikese ja lampide valgustatud udu ja hägusus valgusvihkudega; üks suitsusammas või pilv; kaustika klaasi ja peeglite all; kohanduv valimine, mis peatub juba puhastel pikslitel. Ainult graafikakaardil. Vt [Udu, suits, müra ja kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Renderdamise järjekord ja MP4.** Lisa kvaliteetsed pildid ja terved animatsioonid järjekorda {{ui:Renderdamise järjekord}}; need renderdatakse ükshaaval ja järjekord säilib lehe sulgemisel. Vajab WebGPU-d. Videoid saab salvestada ka MP4-na, kui brauser seda kirjutada oskab. Vt [Renderdamise järjekord](topic:render#the-render-queue) ja [Video renderdamine](topic:animation#render-the-video).

### Reaalajavaade ja esitlused

- **Reaalajavaade.** {{ui:Ekspordi}} › {{ui:Reaalajavaade}} näitab mudelit reaalajas ilmes vaate kõrval, järgides iga muudatust ja kaamerat: päikese varjud, materjalid, lambid ja seintelt tagasipeegelduv valgus. {{ui:Kõnni}} läbi selle, lohista {{ui:Kellaaeg}} ja {{ui:Kuu}}, et liigutada päikest, või teisalda see eraldi aknasse {{ui:Uus aken}}. Kus brauseris on WebGPU, kasutab see seda, muidu WebGL 2. Vt [Reaalajavaade](topic:live-view).
- **Hajutus.** Levita rohi, lilli, kive, puid ja inimesi üle tahkude või pintsliga, seitsmest uuest ümbruselemendist ja ülejäänud teegist; komplektid salvestatakse faili. Vt [Hajuta taimed, kivid ja inimesed](topic:live-view#scatter-plants-rocks-and-people).
- **Jagamine.** 360° panoraam, panoraamituur nooltega kohtade vahel, iseseisev vaataja (üks veebileht, mis avaneb võrguühenduseta ja ei laadi midagi internetist) ning kaamera teekonna video, kõik reaalajas ilmes. Vt [Jagamine](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR reaalajas ilmes.** {{ui:Vaata üle VR-is}} näitab mudelit oma materjalide, taeva, päikesevarju, lampide, hajutatud esemete ja tagasipeegelduva valgusega. Vt [Kuidas see välja näeb](topic:vr-review#what-it-looks-like).

### Materjalid

- **Sõlmedega tehtud materjalid.** {{ui:Varjutus}} tööruum koostab faili enda materjalid sõlmegraafikutena: pildid, müra ja kontrollruudustikud, Voronoi rakud, lained, tellised, plaadid, puit, marmor, gradiendid, mustus ja servakulumine, värvitöö, matemaatika, reljeef- ja normaalkaardid, täielikuks OpenPBR-materjaliks. Vaade näitab iga muudatust kohe. Vt [Materjalide tegemine sõlmedega](topic:shading).
- **Materjaliteek ja oma tekstuurikomplektid.** Varjutuspaneel loetleb teegi materjalid: kuusteist CC0-tekstuurikomplekti, igaühel autorinimi. Klõpsa ühel, et seda kasutada, või lohista see tahule. {{ui:Pildid või zip…}} või {{ui:Kaust…}} teeb materjali sinu enda kaartidest, mis leitakse failinimede järgi. Vt [Teegi materjalid](topic:shading#materials-from-the-library).
- **MaterialX sisse ja välja.** Ekspordi materjal MaterialX-ina (OpenPBR Surface või Standard Surface, tekstuurid PNG-na) ning impordi MaterialX-failid koos piltidega. Vt [MaterialX](topic:shading#materialx).
- **Kleebised ja tekstuurimaalimine.** Aseta pilt pinnale kleebisena oma materjaliga ja maali materjali pildile ümmarguse pintsliga. Vt [Kleebised](topic:shading#decals) ja [Maali tekstuur](topic:shading#paint-on-the-texture).
- **Tekstuuride küpsetamine.** Küpseta ümbritsev varjutus, kõverus, valgustus ja detailse objekti normaalid piltideks mööda võrgu UV-sid, arvuti protsessorituumadel. Vt [Küpseta tekstuurid](topic:shading#bake-textures).

### Animatsioon

- **Animeerimise tööruum.** Lisa võtmekaadrid objekti asukohale, pöördele ja suurusele, iga lambi heledusele, levikule ja värvile ning objektiivi nurgale, otse paneelis. Ajajoonele tuleb vaade {{ui:Kõverad}} (Bézier'i käepidemed, kordused) ja vaade {{ui:Klipid}}, mis salvestab võtmed toimingutena, mida saab uuesti paigutada ja segada; mitmel real olevaid võtmeid saab liigutada, venitada, kopeerida ja kleepida. Vt [Animeeri mis tahes omadust](topic:animate).
- **Kujuvõtmed ja draiverid.** Võrk hoiab enda teisi kujusid, mida segatakse liugurite abil (neile saab lisada võtmekaadreid) või seatakse teistest väärtustest väikese avaldise abil. Vt [Kujuvõtmed](topic:animate#shape-keys-morphs) ja [Draiverid](topic:animate#drivers).
- **Armatuurid.** Pane võrku luud, lase {{ui:Automaatsed kaalud}} jagada punktid nende vahel või maali kaalud, ning poseeri ja lisa luudele võtmekaadreid; lineaarne või kahe kvaternioni nahastamine. Vt [Armatuurid](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK ja piirangud.** Ulatuv (IK) pooluse abil, vaatamine, teisenduste kopeerimine, piirid, alluv ja tee järgimine luudele ja objektidele. Vt [IK ja piirangud](topic:animate#ik-and-constraints).
- **Füüsika.** Grupid ja komponendid langevad, virnastuvad ja põrkuvad kastidena või pallidena ning {{ui:Arvuta füüsika}} salvestab tulemuse võtmekaadritena. Vt [Füüsika](topic:animate#physics-drop-stack-and-collide).

### Failid

- **USD.** {{ui:Salvesta kui}} ({{key:Mod+Shift+S}}) salvestab mudeli failidena `.usda`, `.usdc` või `.usdz`, ja ModelCraftiga salvestatud USD-fail avaneb uuesti ilma kaotusteta. Teistest programmidest pärinev USD avaneb või imporditakse võrkude, gruppide, komponentide, lampide ja kaameratena. {{ui:Salvesta}} kirjutab endiselt `.modelcraft`. Vt [USD salvestamine, avamine ja eksport](topic:usd).
- **glTF, täielik.** glTF-failid tulevad sisse muudetavate võrkudena koos normaalide, UV-de, tippude värvide ja tekstuuridega, sõlmed grupidena, valgused lampidena ja kaamerad stseenidena; Draco- ja meshopt-failid kaasa arvatud; `.gltf` avaneb, kui lohistad selle koos failidega. Eksport kirjutab võrke, tekstuure, lampe ja kaameraid. Vt [glTF](topic:formats#gltf-glb-gltf).
- **FBX-, PLY-, STL- ja Alembic-importid.** FBX 2011 ja uuem (võrgud, UV-komplektid, materjalid, sisseehitatud tekstuurid, valgused, kaamerad), PLY ja STL koos värvidega ning Alembic-vahemälud esimese proovi järgi. OBJ tuleb sisse koos oma `.mtl`-i ja piltidega, kui lohistad need koos. Vt [Failivormingud üksikasjalikult](topic:formats).
- **Rohkem eksporte.** PLY koos värvidega, STL värvitud tahkude värvidega ning OBJ oma tekstuuridega ühes zip-failis. Vt [Failivormingud üksikasjalikult](topic:formats).
- **STEP-failid.** {{ui:Impordi}} loeb STEP-i (AP203, AP214, AP242) detaile ja koostuid suletud võrkudena õigel suurusel, iga detail seal, kus fail seda paigutab. Vt [STEP](topic:formats#step-step-stp).
- **.3dm-failid.** {{ui:Impordi}} loeb `.3dm`-mudeleid: võrgud, polypinnad ja väljapressimised (failis salvestatud võrkudest, muidu ModelCraft'i poolt kolmnurkadeks jaotatud), kõverad servadena, plokid komponentidena ja kihid siltidena. Vt [.3dm-mudeli importimine](topic:import-3dm-files).
- **3D-tahkised DWG-st ja DXF-ist.** Joonise importimine toob nüüd kaasa ka selle 3D-tahkised, piirkonnad ja kehad, igaüks oma grupina, suletud tahkised tahkistena. Vt [Mudel asendiplaanil](topic:site-plan#what-comes-in).

### 3D-printimine

- **Printimise tööriistad.** {{ui:Kontrolli 3D-printimist (STL või 3MF)…}} › **Printimise tööriistad** sisaldab {{ui:Toetuste eelvaade}} (ülejäägid, sambad või puutoed, umbes kui palju materjali), {{ui:Seina paksus}} (printimiseks liiga õhukesed seinad, loetletud koos {{ui:Näita}}), {{ui:Õõnestamine}} (seinad sinu antud paksusega ja äravoolu avadega) ning {{ui:Paranda}} (iga parandus loetletud; kattuvad osad ühinevad ainult siis, kui küsid). Õõnestamine ja parandamine annavad grupi, mille lamedad küljed on üksikud tahud, või võrgu, kui tulemus ei sulgu või on liiga palju tahke; olekurida ütleb, kumb. Vt [Toed, seina paksus, õõnestamine ja parandamine](topic:print-tools).
- **Algaja stiil.** {{ui:Sätted}} › {{ui:ModelCraft}} › {{ui:Menüüd, klahvid ja hiir}} › {{ui:Algaja}}: suured nupud kujundite ja aukude paigutamiseks, teisaldamiseks, joondamiseks ja {{ui:Grupp}}, et augud lõikuksid, seejärel kontrolli mudelit printimiseks. Vt [Algaja stiil](topic:beginner).

### Assistendid ja sinu masin

- **Veel tehisintellekti assistentidele.** Assistent saab nüüd loetleda tahke ja materjale, lükata/tõmmata, värvida, teha gruppe, lisada ja näidata stseene, lisada võrke, muuta modifikaatorite virnu, eksportida USD-d, renderdada pilti ning täita renderdamise järjekorda. Vt [Kasuta ModelCraftit tehisintellekti assistendiga](topic:use-with-ai-assistants).
- **Sinu masin.** {{ui:Sätted}} › {{ui:ModelCraft}} › {{ui:Renderdamine}} › {{ui:Sinu masin}} näitab graafikat, protsessorituumi ja mälu, mida see brauser rakendusele lubab, ning taset, mis määrab, kust reaalajavaade algab. Vt [Millega sinu masin renderdab](topic:your-machine).

## Parandatud

- {{ui:Tahkised}} › {{ui:Ühenda}}, {{ui:Lahuta}} ja {{ui:Lõikumine}} võisid anda grupi, mis ei olnud suletud, mis tahes suuruses. Nüüd need sulguvad.
- {{ui:Tahkised}} › {{ui:Lahuta}} oli hall, kui midagi polnud valitud, kuigi pärast valimist valib see kaks tükki järjest.
- Animatsiooni ajajoone sees ei jõudnud kirjutatud klahvid kuhugi, ka {{key:Mod+S}} mitte. {{key:Mod+Z}} ja {{key:Mod+Y}} on seal ajajoone enda tagasivõtmine ja uuestitegemine; teised {{key:Mod}} klahvid jõuavad rakenduseni.

## Igas rakenduses

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} sisaldab igaühel pikkuse, pindala, mahu, nurga ja kalde loendit täpsete suurustega, mis tulenevad ühikute definitsioonidest (USA mõõdistusjalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need kaovad ühikuloenditest; tähista üks tärniga ja uus töö algab selles. Fail säilitab alati oma ühiku. ModelCraftis järgib väärtusekasti kõrval olev ühikuloend lüliteid (mudeli enda ühik jääb alati loendisse), tärn määrab uue mudeli ühiku (kui ModelCraft seda ühikut toetab) ja mis tahes ühiku tähisega kirjutatud pikkus loetakse selles ühikus. Vt [Ühikud, kirjutatud väärtused ja ühikuloendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis taanduvad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad oma suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista seda, et paneel dokkida või ujuvaks teha, pane see teise paneeli ribale, et jagada üks raam vahelehtedena, kinnita see, et see libiseks servale, või peida see ja too serva pealt tagasi. Vt [Paiguta paneelid](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi pealkirjaribast joonisest eemale; see tuleb tagasi sinna, kus jätsid. Topeltklõps pealkirjaribal tsentreerib selle uuesti. Vt [Teisalda dialoogi](common:arrange-panels#move-a-dialog).
- **Retseptid tehisintellekti assistentidele.** Kümme töönäidet sinu enda assistendile (korrasta joonis, koosta komplekti plaan, kontrolli jooniseid, esita mudelile küsimusi, summeeri koguste arvestus, proovi detaili varianti …), igaüks koos tööriistadega, mida see kutsub, ja õigustega, mida see vajab; igaüks on meie testidega uuesti läbi mängitud. Rakendused ei sisalda tehisintellekti. Vt [Retseptid tehisintellekti assistentidele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}} all. Need, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd rakenduse kõigi sõnadega, mustanditena, mida emakeelne kõneleja pole veel üle vaadanud. Abiteemad on inglise keeles.

## Selles versioonis veel pole

- **0.7 ei ole koodiga allkirjastatud.** Allkirjastamine ja Microsofti Store'i pakett lükati versioonile 0.8, sest sertifikaadi kontroll pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256 lehel getcadcraft.com/download. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:Lisateave}}, seejärel {{ui:Käivita siiski}}. Macis vali esimesel korral CadCraft Studio'l parem klõps ja vali {{ui:Ava}}. CadCraft Studio pole veel rakenduste poes ning iPadi ja iPhone'i versiooni veel ei ole.
- Nurga- ja kaldenurga loendid {{ui:Ühikud}} all salvestatakse, kuid veel pole ühtegi kasti, mis neid loeks.
- Renderdamist graafikakaardil (WebGPU) on siin testitud ainult tarkvaralise asendajaga, mitte veel päris graafikakaartidel, seega renderda enne oma arvutis midagi väikest. Sama kehtib reaalajavaate kohta; VR-i on samuti proovitud ainult peakomplekti emulaatoriga.
- Ilma WebGPU-ta puudub {{ui:Renderda}} tööruum ja renderdamise järjekord ning kvaliteetsetel piltidel puuduvad väljasügavus, füüsikaline taevas, taevapilt, udu, suits, kaustika ja valguse segamine.
- {{ui:Renderda pilt…}} ei joonista veel hajutatud esemeid; need on näha reaalajavaates, selle panoraamides, vaatajas ja videos.
- Lambid animeeritakse vaates, kuid renderdatud video kasutab lampe sellisena, nagu need on siis, kui see algab.
- Luid ja animatsiooni ei loeta veel glTF-, FBX- ega USD-failidest ega kirjutata neisse (nahastatud mudelid tulevad sisse puhkeasendis, koos oma kaaludega), ning glTF- ja FBX-materjale peale põhivärvi või tekstuuri veel ei säilitata.
- STEP-i värve ja koostu detailide nimesid veel ei loeta. `.3dm`-importi on testitud failidega, mille kirjutas formaadi tööriistakomplekt, mitte veel modelleerimisprogrammi enda failidega; SubD-objektid, tekst ja mõõdud on välja jäetud.
- CivilCrafti taimeteek on ModelCraftis, kuid taimede paigutamine sealt pole veel valmis.
- Tekstuuri maalimine lükka/tõmba tahkudele kordub materjali plaadiga; ainult ühe tahu maalimiseks teisenda see võrguks ja lahuta see.

Kõik muu on jaotises [Veel valmimata](topic:not-built-yet).
