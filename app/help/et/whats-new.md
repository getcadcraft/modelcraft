---
title: Mis on uut versioonis 0.7
summary: Võrgud modifikaatoritega, skulptuurimine, UV-d ja kõveraobjektid, kiirte jälgimine graafikakaardil ja renderdamise tööruum, reaalajas vaade hajutuse ja panoraamidega, sõlmedel põhinevad materjalid, animatsiooni tööruum luude ja füüsikaga, USD-, FBX-, STEP- ja .3dm-failid ning 3D-printimise tööriistad koos algaja stiiliga.
keywords: mis on uut, uudised, väljalaske märkmed, muudatused, 0.7, versioon, uued funktsioonid, võrk, võrgud, võrgu tööruum, modifikaatorid, alajaotus, vagu, uv, lahutamine, õmblused, kõverad, kõveraobjektid, nurbs, bezier, skulptuur, uuesti võrgustamine, retopoloogia, jagamine, arvutamine, kiirte jälgimine, webgpu, renderdamise tööruum, renderdamise järjekord, mp4, exr, müra vähendamine, füüsikaline taevas, hdri, ies, väljasügavus, valguse segamine, udu, kaustikud, reaalajas, kõnni, hajutamine, panoraam, tuur, vaatur, varjutus, sõlmed, sõlmematerjalid, materjalide teek, materjalx, kleebised, tekstuuri maalimine, küpsetamine, animeeri, graafiku redaktor, klipid, kujutisvõtmed, draiverid, skelett, luud, nahastamine, ik, piirangud, füüsika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D-tahkised, toed, seina paksus, õõnestamine, parandamine, algaja, abilised, sinu masin, ühikud, portugali keel
from: b9fc43e2
---

See on, mis ModelCraft 0.7-s muutus võrreldes versiooniga 0.6. ModelCraft modelleerib nüüd nii võrke kui ka lükka/tõmba geomeetriat, renderdab graafikakaardil ning sellel on tööruum igat liiki tööks: vali see tööriistariba vasakus servas olevast nimekirjast {{ui:Tööruum}}.

## Uus

### Võrgud

- **Võrgud.** Vali grupp või komponent ja klõpsa jaotises {{ui:Objekti teave}} nuppu {{ui:Teisenda võrguks}}: see muutub võrguks, mille tahkudel on mis tahes arvu nurki ning need võivad kanda tekstuuri koordinaate, normaale, värve ja kaale. {{ui:Teisenda geomeetriaks}} muudab selle tagasi. Võrgu tagasivõtmine säilitab ainult selle, mida iga samm muutis. Fail, mis sisaldab võrku, vajab avamiseks ModelCraft 0.7. Vaata [Võrgud](topic:meshes).
- **Võrgu tööruum.** Topeltklõpsa võrku või vali tööruumide nimekirjast {{ui:Võrk}}, et muuta selle tippe, servi ja tahke: silmuseid ja rõngaid, proportsionaalset muutmist, väljapressimist, sissepoole nihet, faasi, silmuselõiget, nuga, poolitamist, pööramist, ühendamist, lahustamist, täitmist, ruudustiku täitmist, sildu ja libistamist, ning viimase operatsiooni seadeid saab hiljem paneelis muuta. Alusta tasapinnast, kuubist, sfäärist, toruskujust ja muust. Töötavad nii lükka/tõmba klahvid kui ka modelleerija klahvid. Vaata [Võrgu muutmine võrgu tööruumis](topic:mesh-edit).
- **Modifikaatorid.** Peegel, massiiv, alajaotuspind, faas, tahkendamine, bool, nihutamine, sulandamine, lihtsustamine, silumine, võre, kõvera deformeerimine ja kokkukrimpimine muudavad võrgu kuvamist, muutmata seda ennast. Virna neid, lülita iga üks vaate ja renderduste jaoks sisse või välja ning {{ui:Rakenda}} üks, kui soovid selle lõplikuks. Vaata [Modifikaatorid võrgul](topic:modifiers).
- **Alajaotus koos vagudega.** {{ui:Vagu}} võrgu tööruumis hoiab valitud servad alajaotuspinna all teravatena. Renderdused võivad kasutada rohkem tasemeid kui vaade, ning suurel võrgul näitab vaade madalamat taset ja ütleb seda. Vaata [Alajaotuspind](topic:modifiers#subdivision-surface).
- **Kõveraobjektid.** Bézier-, NURBS- ja sirgelõiguga kõverad, millest saab toru, lindi, kitsenduva kuju või täidetud plaadi, ning tekst kõverana. Muuda nende punkte tööruumis {{ui:Kõver}}; {{ui:Võrguks}}, kui kuju on paigas. Vaata [Kõveraobjektid](topic:curves).
- **UV-tööruum.** Märgi õmblused (või lase ModelCraftil need märkida teravatel servadel), {{ui:Lahuta}} ja {{ui:Paki}}, või projekteeri kasti, silindri, sfääri või vaate järgi. UV-redaktor 3D-vaate kõrval liigutab, pöörab ja skaleerib tükke, ning kontrollmuster ja venitusvärvid näitavad tulemust. Vaata [UV-de paigutamine võrgul](topic:uv).
- **Skulptuur.** Tööruum {{ui:Skulptuur}} sisaldab joonistus-, savi-, silumis-, haaramis-, täispuhumis-, vagu-, nipsimis-, lamendamis- ja maskipintsleid, peegeldamist X-telje suhtes ning {{ui:Detail}}, mis lisab kolmnurki seal, kus skulptuurid. Pliiatsi surve määrab pintsli suuruse ja tugevuse. Iga joon on üks tagasivõtmise samm. Vaata [Võrgu skulptuurimine](topic:sculpt).
- **Uuesti võrgustamine ja retopoloogia.** {{ui:Uuesti võrgusta}} teeb kogu võrgu uuesti ühtlasteks kolmnurkadeks, sulgedes augud ja ühendades kattuvad tükid. Puhta võrgu ehitamiseks detailse peale vali see jaotises {{ui:Retopoloogia}}: punktid, mida liigutad, asuvad selle pinnal. Vaata [Uuesti võrgustamine](topic:mesh-edit#remesh).

### Joonistamine

- **Serva või kõvera jagamine.** Tööriist {{ui:Jaga}} märgib lõiked, kui liigud mööda serva, ning jagab klõpsuga või kirjutatud arvuga; kui on valitud serv, kaar või ring, kirjuta `/5`; {{ui:Objekti teave}} › {{ui:Jaga…}} küsib arvu, tahvelarvutite jaoks. Kaar või ring jagatakse võrdsete nurkade järgi tõelisel kaarel. Vaata [Serva või kõvera jagamine võrdseteks osadeks](topic:divide).
- **Arvutused väärtusväljal.** Kirjuta `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` või `2*450mm` mis tahes pikkuse jaoks ja `90/2` nurga jaoks. Arvutus, mida ei saa teha, ütleb, mis on valesti ja kus. Vaata [Arvutused](topic:value-box#calculations).

### Renderdamine

- **Kiirte jälgimine graafikakaardil.** {{ui:Renderda pilt…}} › {{ui:Kvaliteetne (kiirte jälgimine)}} käivitab CadCraft'i enda kiirte jälgija graafikakaardil seal, kus brauseril on WebGPU; pildi all olev rida ütleb, milline mootor selle tegi. {{ui:Peata}} säilitab pildi ja {{ui:Jätka}} jätkab sealt. Ilma WebGPU-ta renderdatakse pilt kiirte jälgimisega WebGL-iga, nagu varem. Vaata [Kvaliteetne](topic:render#high-quality).
- **Renderdamine vaates.** Tööruum {{ui:Renderda}} jälgib kiiri vaates endas ning alustab uuesti, kui pöörad või muudad: renderda {{ui:Piirkond}}, klõpsa {{ui:Fookus}}, määra {{ui:Detail}}. See vajab WebGPU-d. Vaata [Renderdamine vaates](topic:render#render-in-the-view).
- **Materjalid, valgustid ja taevad.** Kvaliteetsed pildid varjutavad iga pinna OpenPBR-materjalimudeliga (kattekihid, kohevus, õhukesed kiled, värvilised klaasid, hõõgumine). WebGPU-ga on saadaval ka {{ui:Füüsikaline taevas}} koos {{ui:Udusus}}ega, {{ui:Taevapilt (HDRI)}} ja lampide tootja IES-valgusprofiilid. Vaata [Taevad ja valgusprofiilid](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Fotoaparaadi moodi kaamera.** Säritus f-numbri, katikuaja ja ISO järgi igas režiimis; WebGPU-ga ka väljasügavus, kahepunkti perspektiiv, valge tasakaal, 360° panoraamid (ka stereos) ja kuubikarud. Vaata [Kaamera](topic:render#the-camera).
- **Pildi viimistlemine pärast renderdamist.** Anna sellele toon ({{ui:ACES filmne}}, {{ui:AgX}}, {{ui:Filmne}} või {{ui:Standardne}}, kontrast, hõõg, hiilgus, vinjett, `.cube` värvitabel), sega taevast, päikest ja iga lambigruppi ning vaata renderdamise elemente ükshaaval, kõik ilma uuesti renderdamata. Alles jäänud tera eemaldab müra vähendaja sinu enda arvutis. Vaata [Pildi viimistlemine](topic:render#finish-the-picture) ja [Valguste segamine pärast renderdamist](topic:render#mix-the-lights-after-the-render).
- **Rohkem viise renderduse salvestamiseks.** 16-bitine PNG, mitmekihiline EXR iga renderdamise elemendi ja valgusgrupiga ning renderdusfail (`.ccrender`), mis avaneb uuesti oma segu ja toonidega. Vaata [Pildi salvestamine](topic:render#save-the-picture).
- **Udu, suits ja kaustikud.** Päikese ja lampide valgustatud udu ja hägusus valguskiirtega; üks suitsusammas või pilv; kaustikud klaasi ja peegli all; kohanduv proovivõtt, mis peatub pikslitel, mis on juba puhtad. Ainult graafikakaardil. Vaata [Udu, suits, müra ja kaustikud](topic:render#fog-smoke-noise-and-caustics).
- **Renderdamise järjekord ja MP4.** Lisa kvaliteetsed pildid ja terved animatsioonid järjekorda {{ui:Renderdamise järjekord}}; need renderdatakse ükshaaval ja järjekord säilib ka lehe sulgemisel. See vajab WebGPU-d. Videoid saab salvestada ka MP4-na seal, kus brauser seda kirjutada oskab. Vaata [Renderdamise järjekord](topic:render#the-render-queue) ja [Video renderdamine](topic:animation#render-the-video).

### Reaalajavaade ja esitlused

- **Reaalajavaade.** {{ui:Ekspordi}} › {{ui:Reaalajavaade}} näitab mudelit reaalajas vaate kõrval: päikesevarjud, materjalid, lambid ja seinadelt tagasipeegelduv valgus, mis järgivad iga muudatust ja kaamerat. {{ui:Kõnni}} läbi selle, lohista {{ui:Kellaaeg}} ja {{ui:Kuu}} päikese liigutamiseks või vii see {{ui:Uus aken}}i. Kasutab WebGPU-d seal, kus see on brauseris, muidu WebGL 2-d. Vaata [Reaalajavaade](topic:live-view).
- **Hajutamine.** Levita rohi, lilled, kivid, puud ja inimesed pindadele või pintsliga, seitsmest uuest ümbruse elemendist ja ülejäänud teegist; komplektid salvestatakse faili. Vaata [Taimede, kivide ja inimeste hajutamine](topic:live-view#scatter-plants-rocks-and-people).
- **Jagamine.** 360° panoraam, panoraamtuur nooltega punktide vahel, eraldiseisev vaatur (üks veebileht, mis avaneb võrguta ega laadi midagi internetist) ning kaamera teekonna video, kõik reaalajas vaates. Vaata [Jagamine](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR reaalajas vaates.** {{ui:Vaata üle VR-is}} näitab mudelit oma materjalide, taeva, päikesevarju, lampide, hajutatud elementide ja tagasipeegelduva valgusega. Vaata [Mida see välja näeb](topic:vr-review#what-it-looks-like).

### Materjalid

- **Sõlmedega tehtud materjalid.** Tööruum {{ui:Varjutus}} ehitab faili enda materjalid sõlmegraafikutena: pildid, müra ja kontrollmustrid, Voronoi rakud, lained, tellised, plaadid, puit, marmor, gradiendid, mustus ja servakulumine, värvitöötlus, matemaatika, pinna- ja normaalkaardid, täielikuks OpenPBR-materjaliks. Vaade näitab iga muudatust kohe. Vaata [Materjalide tegemine sõlmedega](topic:shading).
- **Materjaliteek ja sinu enda tekstuurikomplektid.** Varjutuspaneel loetleb teegi materjalid: kuusteist CC0 tekstuurikomplekti, igaüks tunnustatud. Klõpsa ühel selle kasutamiseks või lohista see pinnale. {{ui:Pildid või zip…}} või {{ui:Kaust…}} teeb materjali sinu enda kaartidest, mis leitakse failinimede järgi. Vaata [Teegi materjalid](topic:shading#materials-from-the-library).
- **MaterialX sisse ja välja.** Ekspordi materjal MaterialX-ina (OpenPBR Surface või Standard Surface, tekstuurid PNG-na) ning impordi MaterialX-faile koos nende piltidega. Vaata [MaterialX](topic:shading#materialx).
- **Kleebised ja tekstuuri maalimine.** Aseta pilt pinnale kleepsuna, millel on oma materjal, ning maali materjali pilti ümara pintsliga. Vaata [Kleebised](topic:shading#decals) ja [Tekstuuri maalimine](topic:shading#paint-on-the-texture).
- **Tekstuuride küpsetamine.** Küpseta ümbritsev varjutus, kõverus, valgustus ja detailse objekti normaalid piltideks mööda võrgu UV-sid, arvuti protsessorituumadel. Vaata [Tekstuuride küpsetamine](topic:shading#bake-textures).

### Animatsioon

- **Animeeri tööruum.** Võta võtmeks objekti asukoht, pööre ja suurus, iga lambi heledus, levik ja värv ning objektiivi nurk, otse paneelis. Ajajoonele tuleb {{ui:Kõverad}} vaade (Bézier'i käepidemed, kordused) ning {{ui:Klipid}} vaade, mis salvestab võtmed toimingutena, mida saab uuesti paigutada ja segada; mitmel real olevaid võtmeid saab liigutada, venitada, kopeerida ja kleepida. Vaata [Animeeri mis tahes omadust](topic:animate).
- **Kujutisvõtmed ja draiverid.** Võrk sisaldab enda teisi kujusid, mida segavad liugurid, mida saab võtmestada, või mis saavad väärtused teistelt väärtustelt lühikese avaldise kaudu. Vaata [Kujutisvõtmed](topic:animate#shape-keys-morphs) ja [Draiverid](topic:animate#drivers).
- **Skeletid.** Pane võrku luud, lase {{ui:Automaatsed kaalud}} jagada punktid nende vahel või maali kaalud, ning poseeri ja võtmesta luud; lineaarne või kahe kvaternioni nahastamine. Vaata [Skeletid](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK ja piirangud.** Ulatus (IK) koos poolusega, vaatamine, transformatsioonide kopeerimine, piirangud, alluv ja tee järgimine luudele ja objektidele. Vaata [IK ja piirangud](topic:animate#ik-and-constraints).
- **Füüsika.** Grupid ja komponendid langevad, virnastuvad ja põrkuvad kastidena või palllidena ning {{ui:Arvuta füüsika}} hoiab tulemuse võtmetena. Vaata [Füüsika](topic:animate#physics-drop-stack-and-collide).

### Failid

- **USD.** {{ui:Salvesta kui}} ({{key:Mod+Shift+S}}) salvestab mudeli failina `.usda`, `.usdc` või `.usdz`, ning ModelCraft'i salvestatud USD-fail avaneb uuesti ilma midagi kaotamata. Teistest programmidest pärit USD avaneb või imporditakse võrkudena, gruppidena, komponentidena, lampidena ja kaameratena. {{ui:Salvesta}} kirjutab endiselt faili `.modelcraft`. Vaata [USD salvestamine, avamine ja eksport](topic:usd).
- **glTF, täielik.** glTF-failid tulevad sisse muudetavate võrkudena koos normaalide, UV-de, tipuvärvide ja tekstuuridega; sõlmed gruppidena, valgustid lampidena ning kaamerad stseenidena; Draco- ja meshopt-failid kaasa arvatud; `.gltf` avaneb, kui lohistad selle koos failidega. Eksport kirjutab võrke, tekstuure, lampe ja kaameraid. Vaata [glTF](topic:formats#gltf-glb-gltf).
- **FBX, PLY, STL ja Alembic-importid.** FBX 2011 ja uuem (võrgud, UV-komplektid, materjalid, sisseehitatud tekstuurid, valgustid, kaamerad), PLY ja STL koos värvidega ning Alembic-vahemälud nende esimese kaadri järgi. OBJ tuleb sisse koos oma `.mtl`-faili ja piltidega, kui lohistad need koos. Vaata [Failivormingud üksikasjalikult](topic:formats).
- **Rohkem eksporte.** PLY värvidega, STL värvitud pindade värvidega ning OBJ koos tekstuuridega ühes zip-failis. Vaata [Failivormingud üksikasjalikult](topic:formats).
- **STEP-failid.** {{ui:Impordi}} loeb STEP-i (AP203, AP214, AP242) detaile ja koostuid suletud võrkudena õiges suuruses, iga detail sinna, kuhu fail selle paigutab. Vaata [STEP](topic:formats#step-step-stp).
- **.3dm-failid.** {{ui:Impordi}} loeb `.3dm`-mudeleid: võrke, polypindu ja ekstrusioone (failis salvestatud võrkudest, muidu ModelCraft'i poolt tessellatsioonina), kõveraid servadena, plokke komponentidena ning kihte siltidena. Vaata [.3dm-mudeli sisse toomine](topic:import-3dm-files).
- **3D-tahkised DWG-st ja DXF-ist.** Joonise importimisel tulevad nüüd kaasa ka selle 3D-tahkised, piirkonnad ja kehad, igaüks oma grupina, suletud tahkised tahkistena. Vaata [Mudeli koostamine situatsiooniplaanil](topic:site-plan#what-comes-in).

### 3D-printimine

- **Printimise tööriistad.** {{ui:Kontrolli 3D-printimist (STL või 3MF)…}} › **Printimise tööriistad** sisaldab {{ui:Toete eelvaadet}} (ülejooksud, sambad või puutoed, umbes kui palju materjali), {{ui:Seina paksus}} (liiga õhukesed seinad, mida ei saa printida, loetletud nupuga {{ui:Näita}}), {{ui:Õõnestamine}} (seinad antud paksusega, koos äravooluavadega) ning {{ui:Paranda}} (iga parandus loetletud; kattuvad osad ühinevad ainult siis, kui nõuad seda). Õõnestamine ja parandamine annavad grupi, mille tasased küljed on üksikud tahud, või võrgu, kui tulemus ei sulgu või sisaldab liiga palju tahke; olekurida ütleb, mis tuli. Vaata [Toed, seina paksus, õõnestamine ja parandamine](topic:print-tools).
- **Algaja stiil.** {{ui:Sätted}} › {{ui:ModelCraft}} › {{ui:Menüüd, klahvid ja hiir}} › {{ui:Algaja}}: suured nupud kujundite ja aukude lohistamiseks, teisaldamiseks, joondamiseks ja {{ui:Grupp}}i tegemiseks, nii et augud lõikuvad, seejärel kontrolli mudelit printimiseks. Vaata [Algaja stiil](topic:beginner).

### Abilised ja sinu masin

- **Veel AI-abilistele.** Abiline saab nüüd loetleda tahke ja materjale, lükata/tõmmata, maalida, teha gruppe, lisada ja kuvada stseene, lisada võrke, muuta modifikaatorite virnasid, eksportida USD-d, renderdada pilti ja täita renderdamise järjekorda. Vaata [ModelCraft'i kasutamine AI-abilistega](topic:use-with-ai-assistants).
- **Sinu masin.** {{ui:Sätted}} › {{ui:ModelCraft}} › {{ui:Renderdamine}} › {{ui:Sinu masin}} näitab graafikat, protsessorituumi ja mälu, mida see brauser rakendusele lubab, ning taset, mis määrab, kust reaalajavaade algab. Vaata [Millega sinu masin renderdab](topic:your-machine).

## Parandatud

- {{ui:Tahkised}} › {{ui:Ühenda}}, {{ui:Lahuta}} ja {{ui:Lõikumine}} võisid tagastada grupi, mis ei olnud suletud, igas suuruses. Nüüd need sulguvad.
- {{ui:Tahkised}} › {{ui:Lahuta}} oli hall, kui midagi polnud valitud, kuigi see valib oma kaks osa järjest pärast selle valimist.
- Animatsiooni ajajoone sees ei jõudnud kirjutatud klahvid kuhugi, samuti mitte {{key:Mod+S}}. {{key:Mod+Z}} ja {{key:Mod+Y}} seal on ajajoone enda tagasivõtmine ja uuestitegemine; muud {{key:Mod}}-klahvid jõuavad rakendusse.

## Kõigis rakendustes

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} sisaldab iga pikkuse, pindala, ruumala, nurga ja kalde jaoks eraldi loendit, täpsete suurustega, mis ühikute definitsioonid annavad (USA miilijalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need lahkuvad ühikute loenditest; märgi tärniga üks ning uus töö algab selles. Fail säilitab alati oma ühiku. ModelCraft'is järgib väärtusvälja kõrval olev ühikute loend lülitisid (mudeli enda ühik jääb alati loendisse), täht määrab uue mudeli ühiku (kui ModelCraft seda ühikut tunneb), ning pikkus, mis on sisestatud mis tahes ühiku märgiga, loetakse selles ühikus. Vaata [Ühikud, sisestatud väärtused ja ühikute loendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end ära peidavad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad oma suured nupud). Igal külgpaneelil on õhuke pealkirjariba: lohista see paneeli dokkimiseks või ujuvaks tegemiseks, pane see teise paneeli ribale, et jagada üks raam vahekaartidena, kinnita see, et see libiseks servale, või peida ja too servast tagasi. Vaata [Paneelide korrastamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi selle pealkirjaribast kõrvale joonisest; see tuleb tagasi sinna, kust lahkusid. Topeltklõps pealkirjaribal tsentreerib selle uuesti. Vaata [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid AI-abilistele.** Kümme töötatud päringut sinu enda abilisele (korrasta joonis, joonista komplekt, kontrolli jooniseid, küsi mudelilt küsimusi, summeeri koguste arvestus, proovi detaili varianti …), igaüks koos tööriistadega, mida see kutsub, ja õigustega, mida see vajab, ning iga üks kontrollitud meie testidega. Rakendused ise ei sisalda AI-d. Vaata [Retseptid AI-abilistele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus jaotises {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}}. See, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd kõigi rakenduse sõnadega, kuid mustanditena, mida emakeelne kasutaja pole veel üle vaadanud. Abi teemad on inglise keeles.
- **CadCraft Studio** ütleb, miks värskenduse kontroll ebaõnnestus (sinu süsteemile pole veel faili, võrguühendust pole, vale allkiri), selle asemel et öelda ainult „Valmis“, ning ei too enam tagasi suletud kaarti „Mis on uut“, kuni on uuem väljalase.

## Pole selles versioonis veel

- **0.7 ei ole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store'i pakett lükkusid versioonile 0.8, kuna sertifikaadi kinnitus pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256-d aadressil getcadcraft.com/download. Windowsis, kui SmartScreen peatab installija, vali {{ui:Rohkem infot}}, seejärel {{ui:Käivita siiski}}. Macis vali esimesel korral CadCraft Studio hiire parema nupuga ja vali {{ui:Ava}}. CadCraft Studio ei ole veel üheski rakenduste poes ning iPadi- ega iPhone'i versiooni veel pole.
- Ühikute {{ui:Ühikud}} nurga ja kalde loendid salvestatakse, kuid ükski kast neid veel ei loe.
- Renderdamine graafikakaardil (WebGPU) on siin testitud ainult tarkvaralise asendajaga, mitte veel päris graafikakaartidel, seega renderda enne midagi väikest oma arvutis. Sama kehtib reaalajavaate kohta, ning VR-i on testitud ainult peakomplekti emulaatoriga.
- Ilma WebGPU-ta ei ole renderdamise tööruumi ega renderdamise järjekorda ning kvaliteetsetel piltidel ei ole väljasügavust, füüsikalist taevast, taevapilti, udu, suitsu, kaustikke ega valguse segamist.
- {{ui:Renderda pilt…}} ei joonista veel hajutatud elemente; need kuvatakse reaalajavaates, selle panoraamides, vaaturis ja videos.
- Lambid animeeruvad vaates, kuid renderdatud video kasutab lampe sellisena, nagu nad on, kui see algab.
- Luid ja animatsiooni ei loeta ega kirjutata veel glTF-, FBX- ega USD-failidesse (nahastatud mudelid tulevad sisse puhkeasendis, koos oma kaaludega) ning glTF- ja FBX-materjale peale põhivärvi või tekstuuri ei säilitata veel.
- STEP-i värve ja koostu detailide nimesid ei loeta veel. `.3dm`-import on testitud failidega, mis on kirjutatud vormingu tööriistakomplektiga, mitte veel failidega modelleerimisprogrammist endast; SubD-objekte, teksti ja mõõte ei võeta kaasa.
- CivilCraft'i taimede teek on ModelCraft'is, kuid taimede paigutamine sealt pole veel loodud.
- Tekstuuri maalimine lükka/tõmba tahkudel kordub materjali ruudu järgi; et maalida ainult üks tahk, muuda see võrguks ja lahuta see UV-deks.

Kõik muu on jaotises [Veel valmimata](topic:not-built-yet).
