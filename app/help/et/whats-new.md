---
title: Mis on uut versioonis 0.9
summary: Printimise etapp oma viilutaja ja saatmisega USB, Klipperi, OctoPrinti ja PrusaLinki kaudu, vaigu viilutamine ja faililisandmoodulid, materjalivoog, digitaalne kaksik ja tehase põranda lisandmoodulid, NURBS-ümardused, paksendamine ja skanni sobitamine, AR kohapeal ning kümme kaarmeetodit.
keywords: mis on uut, uudised, versioonimärkused, muudatuste logi, 0.9, printimise etapp, 3D-printimine, saada 3D-printerisse, viilutaja, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri:moto, prusaslicer, orcaslicer, bambu, vaik, vaigu printimine, goo, sl1, ctb, anycubic, särituskatse, materjalivoog, digitaalne kaksik, tehase põrand, plc, konveier, nurbs, ümardus, paksendamine, skannimise sobitamine, ar, kohapeal, kaarmeetodid, ühikud, 0.8, 0.8.1, versioon, uued funktsioonid, renderdusmootor, mootor, avamine teises programmis, usd, gltf, unreal, lisandmooduli mootor, pinnad, loft, sweep, pidevus, g0, g1, g2, sebra, step, iges, stseeni kirjeldamine, stseen, ilm, päevaaeg, aastaaeg, assistent, materjal fotost, foto, visandifoto, sisustamine, sisusta ruum, kaldlõige, jagamine, printimise kontroll, probleemid, omaduste ruudustik, lambid, keeled, sisendseadmed, tööriistariba read, dwg, reaalajas
from: 169048a2
---

Need on muudatused ModelCraft 0.9 versioonis võrreldes versiooniga 0.8.1. ModelCraft ulatub nüüd printerini ja tehase põrandani: võid asju paigutada printimisalusele ja saata need ilma eksportimata, viilutada filamendi või vaigu jaoks ning kujundada materjalikäsitlusliini. See on CadCraft Studio 0.9 ja selle kaheksa rakendust; enamik allpool olevatest uutest funktsioonidest on lisandmoodulid.

## Uus

### 3D-printimine

- **Printimise etapp.** Klõpsa tööriistaribal {{ui:Printimise etapp}}. Lisa teegi üksused printeri alusele, korrasta need, vaata viilutatud kihte läbi ja vajuta {{ui:Saada 3D-printerisse}}, ilma STL-i eksportimata. See kuulub 3D-printimise lisandmooduli juurde, mis on vaikimisi sisse lülitatud ja mida saab eemaldada nagu iga lisandmoodulit. Vt [Aseta asjad printimisalusele ja saada need printerisse](topic:print-stage).
- **Oma filamendiviilutaja.** {{ui:CadCraft basic (kaasas, kiireim)}} on viilutaja kaardi loendis **Viilutaja**: seinad, kattekihid, täidis, toed ja servajoon, töötajal, et leht jääks kasutatavaks. {{ui:Kihtide eelvaade}} koos liuguriga **Kiht** näitab kihte enne saatmist. Printeriprofiilid, nagu Ender-3 ja Prusa MK4 stiilid, kannavad oma algus-G-koodi.
- **Saatmine.** USB kaudu (Chrome või Edge arvutis, leht jäetud avatuks) või sinu võrgus olevale Klipperile (Moonraker), OctoPrintile või PrusaLinkile. Miski ei ühendu ega saada ilma klõpsuta ja saatmine küsib enne.
- **Muud viilutajad.** Kiri:Moto, PrusaSlicer ja OrcaSlicer on omaette lisandmoodulid, vaikimisi väljas; lisa need kaardilt või {{ui:Sätted}} › {{ui:Lisandmoodulid}} alt. PrusaSlicer ja OrcaSlicer kasutavad sinu enda CadCraft Studio'st paigaldatud koopiat. Bambu Labi printerite lisandmoodul viilutab sinu OrcaSlicer'iga ja selle P2S-eelseadistustega ning vajab Studio't arvutis.
- **Vaigu printimine.** Vaigu lisandmoodulid (vaikimisi väljas) teevad kihtide pilte printeri ekraanile, koos õõnestamise ja õhuavadega, aluse ja toestustega, kihtide eelvaate ning aja, vaigu ja maksumusega. Failivormingu lisandmoodulid kirjutavad Elegoo GOO, SL1, Chitubox (CBDDLP ja CTB 2 kuni 5) ja Anycubic (PWMX ja PWS). Vaigu särituskatse teeb viie särituse redeli. Vt [Vaigu printeri viilutamine](topic:resin-printing).
- **Muutumatu.** {{ui:Ekspordi}} › {{ui:Kontrolli 3D-printimist (STL või 3MF)…}}, printimise tööriistad ja printimiseks jagamine töötavad nagu versioonis 0.8. Vt [Valmista mudel 3D-printimiseks](topic:print-3d).

### Materjalivoog, digitaalne kaksik ja tehase põrand

Need kolm on lisandmoodulid, mis on väljas, kuni lülitad need sisse {{ui:Sätted}} › {{ui:Lisandmoodulid}} all, ja igal on oma abi, kui see on sisse lülitatud.

- **Materjalivoog.** Paneel nimega Materjalivoog paigutab 3D-vaates konveierid, jaamad, puhvrid ja AGV-teed, käivitab seemnega simulatsiooni, mängib selle tagasi ning näitab läbilaskevõimet, tarneaegu ja järjekordi; tulemused salvestatakse CSV-na. Tellimused võivad tulla CSV-failist. Robotrakke saab kontrollida ja eksportida. PLC-ühendusel on pehme režiim ja päris režiim Modbus TCP kaudu, mis töötab ainult CadCraft Studios.
- **Digitaalne kaksik.** Loeb materjalivoo paigutust ja käivitab sel pehme PLC-i koos veakohtadega, mida saad sundida, laovarude testide, paigutuste võrdluse ja materjalinimekirjaga.
- **Tehase põrand.** Muudab jaamad masinateks ja rakkudeks, loeb neid reaalajas või simulaatorist ning peab töö järjekorda ja lihtsat OEE-d. See ainult loeb: see versioon ei saa masinasse ega PLC-sse kirjutada.

### Pinnad, mudelid ja joonistamine

- **Ümardused, paksendamine ja booleaan-tehted NURBS-il.** Paneelil {{ui:Pinnad}} on {{ui:Ümardus tahkude vahel}}, {{ui:Mitme serva ümardamine}}, {{ui:Paksenda tahkisteks}} ning Ühenda, Lahuta ja Lõikumine, igaühel mõõdetud kõrvalekalle. Vt [Vabakujulised pinnad (NURBS)](topic:nurbs-surfaces).
- **Pindade sobitamine skannimisega.** Vali skannitud võrk ja kasuta gruppi **Skannimine** jaotises {{ui:Sobita pinnad skannimisega}}, seejärel {{ui:Õmbli pinnad tahkiseks}}. See on esimene sobitus, mitte täielik pöördprojekteerimise pakett.
- **Reaalajas link .3dm-modelleerijast.** Ühes suunas, Rhino 8-st või Grasshopperist, ja see vajab CadCraft Studio't samal arvutil. Vt [Hoia .3dm-mudel reaalajas](topic:live-3dm-link).
- **Mudeli vaatamine kohapeal.** {{ui:Vaade objektil (AR, telefon)}} menüüs {{ui:Vaated}} töötab Androidi telefonis Chrome'iga. Vt [Mudeli vaatamine kohapeal Androidi telefoniga (AR)](topic:ar-on-site).
- **Kaare meetodid.** Rippmenüü {{ui:Kaare meetodid}} pakub kümmet viisi kaare joonistamiseks, sealhulgas {{ui:3 punktiga}} ja {{ui:Algus, keskpunkt, lõpp}}.
- **Rohkem ühikuid.** Massid (kg, lb, t, ton) ja temperatuurid (kraadid C, F, K ja R) on arusaadavad seal, kuhu kirjutad väärtusi ühikutega.

## Igas rakenduses

- **Tööriistavihjed.** Nuppude kohal olev hõljutusteksti ja läbilõigatud sildid on Bootstrap'i vihje.
- **Suletav alustamise vihje.** Vihjekaardil tühjal joonisealal on väike sulgemisnupp x. See jääb suletuks ja käsupalett saab selle uuesti näidata.
- **Kerituvad vahelehtede ribad.** Paneeli vahelehtede riba, mis ei mahu, kerib selle asemel, et olla läbi lõigatud.
- **Vahelehtede pealkirjad.** Dokumendi avamisel algab brauseri vaheleht dokumendi nimega, siis ModelCraft ja CadCraft. Salvestamata olekus tuleb enne punkt.
- **Paigutus.** {{ui:Sätted}} › {{ui:Üldine}} › Paigutus hoiab paigutusi rippmenüüs, koos valikuga kasutada paigutust ainult selles rakenduses ja nupuga paigutuse lähtestamiseks.
- **Keeled.** Sätete keeleloend järgib versioonis olevaid keelefaile. Muud keeled kui inglise on masintõlke mustandid.
- **Reaalajas ja teek.** Reaalajas TeamWork näitab reaalajas kursoreid ja nimesid ning teegi kogumikud annavad igale rakendusele vaikekogumiku.

## Parandatud

- {{ui:Esita}} muutub animatsiooni mängides nupuks {{ui:Peata}}, ja ajajoone avamisel esitab ja peatab {{key:Space}}.
- Pildirenderdus läheb WebGL-ile tagasi, kui graafikakaart ei suuda kiirte jälgijat käivitada. Reaalajas renderdusvaade võib viga siiski näidata; seda ei kontrollitud Windowsi masinal selle draiveriga.
- Materjalivoo päris režiim ühendub uuesti pärast seda, kui link lõppes PLC erandvastuste peale.

## Ausad piirangud

- Mitte midagi pole printeril välja printtud: ei filamenti, ei vaiku, ei Bambu Connecti kaudu. Vaigufaile on loetud tagasi ainult CadCrafti enda lugejatega.
- Digitaalset kaksikut ja tehase põrandat on testitud ainult simulaatorite ja teadaolevate vastustega, ilma päris PLC, liini ega protokollita. Need on kontrollimisabivahendid, mitte ohutuse kinnitus. Füüsika katab ainult kaste, kuni kaheksa koormust.
- Rhino ja Grasshopperi link pole kunagi päris programmides töötanud.
- Muud kui inglise keeled on masintõlke mustandid.

## Varem: 0.8 ja 0.8.1

Need on muudatused ModelCraft 0.8 (2026-11-01) ja 0.8.1 (2026-11-02) versioonis võrreldes versiooniga 0.7. Dialoog {{ui:Renderda pilt…}} saab nüüd saata stseeni teise programmi, paneel {{ui:Pinnad}} teeb sujuvaid vabakujulisi pindu ning sinu ühendatud assistent saab seada terve stseeni ühe lausega.

### Uus

**Renderdamine**

- **Mootori valik.** {{ui:Renderda pilt…}} all on loend **Mootor** režiimi kohal. Meie enda kaks mootorit, Kiire ja Kiirte jälgija, on vaikimisi ning töötavad igal pool. Muud valikud salvestavad stseeni paketina (mudel USD-failina ning sätete fail täpsete materjaliväärtustega, sisselülitatud lampide, päikese, taeva, säritusega ja kaameraga), et viia teise programmi. Teise programmi joonistatud pilt ütleb, milline programm ja versioon selle tegid. Vt [Vali, milline programm pildi joonistab](topic:render-engines).
- **Avamine teises programmis.** Mootori loend saab stseeni salvestada USD-failina, glTF-failina (`.glb`) või Unreali projektikaustana (`.zip`), brauseris ja CadCraft Studios. Studios saab see käivitada ka usdview või arvuti enda programmi faili jaoks. Vt [Ava stseen teises programmis](topic:render-open-in).
- **Saada mängumootorisse Studiost.** Studio kirjutab stseeni Unreal Engine'i projekti ja hoiab seda igal saatmisel sammu pidamas, ainult ühes suunas. Sinu enda muudatused elavad kihis, mida CadCraft kunagi ei kirjuta. Vt [Saada stseen mängumootorisse](topic:render-unreal).
- **Mootorid lisandmoodulitest.** Lisandmoodul saab loendisse lisada mootori. JavaScriptis kirjutatu joonistab brauseris ja Studios; programmi käivitav vajab Studios sinu kinnitust. Vt [Joonista pilt teise programmiga](topic:render-other-program) ja [Lisa renderdusmootor lisandmooduliga](topic:render-engine-addons).
- **Kirjelda stseeni.** Ütle oma ühendatud assistendile „hämarik, kerge vihm, sügisesed puud, inimesed platsil“ ja ModelCraft seab selle ühe sammuga: päike liigub kuupäeva ja kellaajani, et varjud järgiks, taevas muutub, ilmuvad märjad pinnad ning puud ja inimesed paigutatakse päris objektidena siltidega, mida saab peita, liigutada või kustutada. Päevaaeg, kuupäev või aastaaeg ning ilm (selge, pilves, udu, kerge vihm, vihm, torm) töötavad ka eraldi ning hilisem päring muudab sama stseeni. Udu näitatakse kvaliteetsel pildil graafikakaardil; muud mootorid näitavad taevast, valgust ja märgu pindu. Vihma ei joonistata langevate joontena.

**Materjalid**

- **Materjal ühest fotost.** Anna ModelCraftile pilt pinnast (sein, põrand, kivi) ja see teeb plaatimismaterjali: valgustus üle foto lamendatakse, servad ühendatakse ning värvikaart, karedusekaart ja normaalkaart arvutatakse pildist. See on tavaline pildi töötlus sinu enda pildil, ilma treenitud mudelita. Karedus on hinnang. Lihtne, ruudukujuline ja otse ette tehtud foto annab parima plaadi; tugev muster, nagu tellised, võib näidata pehmet kummitust kohas, kus ühendus on segatud.

**Pinnad**

- **Vabakujulised pinnad.** Paneel {{ui:Pinnad}} teeb NURBS-kõveraid ja lõikamata pindu: punktide kaudu läbivaid kõveraid, loft'i, reeglipinda, väljapressimist, pööramist, ühe või kahe rööpa mööda sweep'e, pindu kõverate võrgustikust, lappe neljast servast, sobitamist ja segamist. Iga ühine serv mõõdetakse kui G0, G1 või G2 (vahe, nurk, kõverusehüpe) täpsetel pindadel ning serv, mis on halvem kui soovisid, ilmub paneelis Probleemid nupuga **Sobita**. Sebra-triibud ja kõverusvärvid joonistatakse täpsetelt pindadelt. STEP- ja IGES-failid väljuvad ja sisenevad. Vt [Vabakujulised pinnad (NURBS)](topic:nurbs-surfaces).

**Asukoht ja ruumid**

- **Visandifoto maapinnale.** {{ui:Fail}} › {{ui:Impordi visandi foto…}} muudab käsivisandi telefonifoto maapinnal servadeks sinu ütlemisel mõõtkavas: üks grupp, iga pliiatsivärvi jaoks silt. Paber leitakse ja sirgendatakse sinu arvutis ning midagi ei saadeta kuhugi. Vt [Mudel asendiplaanil](topic:site-plan).
- **Ruumi sisustamine.** Vali põrand ja kasuta {{ui:Korrastamine}} › {{ui:Sisusta ruum…}}. Magamistoa, elutoa, söögitoa, köögi, vannitoa või kontori mööbel paigutatakse reeglite järgi, seinte vastu ning uste ja akende vabaks, ühes grupis, mille saab ühe sammuga ära võtta. See on vaikepaigutus, mille sina üle vaatad, mitte disain. Vt [Algusteek](topic:starter).

**3D-printimine**

- **Kaldlõiked.** Printimiseks jagamine saab kaldu lõigata kuni 60 kraadi, mis annab tükkidele rohkem liimimispinda. Ühendused seisavad lõikega risti. Vt [Jaga mudel printimiseks](topic:print-split).
- **Printimise kontroll probleemide all.** 3D-printimise kontrolli tulemused näidatakse paneelis Probleemid mudeli markeritega ja {{ui:Paranda}} parandab need sealt. Vt [Toed, seina paksus, õõnestamine ja parandamine](topic:print-tools).

**Igas rakenduses**

- **Keeled.** Abi ja rakendused tulevad 54 keeles. Kümme on uued: leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiini, suahiili ja usbeki. Muud kui inglise keeled on masintõlke mustandid, kuni emakeelne kõneleja on need läbi lugenud, ja abiteemad võivad olla veel inglise keeles.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, mängupult ja MIDI-juhtnupud saavad rakendusi juhtida kõigi või ühe jaoks.
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › Tööriistariba read määrab Murdumise (nagu varem), 2 rida või 1 rida. Riba, mis ei mahu, kerib külgsuunas, selle asemel et joonisest ruumi võtta. Murdumine jääb vaikeseadeks.
- **Omaduste ruudustik.** ModelCraft'i lambivälja kasutavad jagatud ruudustikku: kokkuklapitavad kategooriad, sildi- ja väärtuseveerud ning tihe paigutus. Kirjutatud arvutused nagu `2*450` töötavad edasi.
- **Probleemid.** Paneel Probleemid (hoiatusnupp rakenduse ribal) on kõigil rakendustel ühine. ModelCraftis hoiab see printimise kontrolli ja pindade pidevuse hoiatusi.
- **Reaalajas.** Reaalajas TeamWorki sessioon näitab, kes on kus. Vt [Mudeli koos töötamine reaalajas TeamWorkiga](topic:work-live).
- **Lisandmoodulid.** Lisandmoodulid saavad lisada renderdusmootoreid, nagu eespool.
- **Ühenda oma tehisintellekt.** Tööriistalepe ja kaheksa rakenduse kontrollid on läbitud, kokku 454 tööriista. Ühe klõpsuga ühendus Studio sees, hallatud konnektor brauseriassistentidele, oma võti Studio sees ja avaldatud pakett pole veel lubatud. Rakendustes endis tehisintellekti pole. Vt [Kasuta ModelCraftit tehisintellekti assistendiga](topic:use-with-ai-assistants).

### Parandatud versioonis 0.8.1

- **DWG klasside osa.** DWG-faili klasside osa loeti valet tüüpi, mis võis importimisel faili rikkuda. Nüüd loetakse see õigesti, ModelCraftis ja teistes DWG-d lugevates rakendustes.
- **Tahvelarvutid portreeres.** Vaba ruudustiku kõrgus läheb joonisevaatele ja lehe paigutus algab 760 pikslit laiuselt või kitsamalt. Ka ModelCraft'i stiililehel on see muudatus.
- **Keel Studios.** CadCraft Studio ja pakitud väljaanded saavad töö ajal keelt vahetada; varem olid need ainult inglise keeles. Seda pole veel igal platvormil testitud: anna teada, kui keel ei muutu.

### Selles versioonis veel pole

- **Pole koodiga allkirjastatud.** Windows võib näidata SmartScreen'i: vali {{ui:Lisateave}}, seejärel {{ui:Käivita siiski}}. Macis tee paremklõps ja vali {{ui:Ava}}. Poodide versioonid on ootel ning iPadi ja iPhone'i versiooni ei ehitatud versiooni 0.8.1 jaoks uuesti.
- Teine programm, mis joonistab pildi ilma renderdusmootori lisandmoodulita, panoraam- või stereokaamerad ning taevapilt teise programmi kaudu, samuti plugin, mis avab Unreali lava, pole veel valmis. Failid on kirjutatud; plugin pole välja antud ega ole Unrealis käivitatud.
- Vabakujulised pinnad: G3 ja klass A pole mõõdetud ega väidetud ning lõikamine ja tahkised tulevad hiljem.
- Teiste programmide pildid pole pikslitäpselt nagu meie omad: ainult kaamera, päike, lambid ja säritus klapivad.
- Keelevahetuse parandust Studios versioonis 0.8.1 pole igal platvormil testitud.

Kõik muu on jaotises [Veel valmimata](topic:not-built-yet). Eelmise versiooni kohta vt [Mis on uut versioonis 0.7](topic:whats-new-0-7).
