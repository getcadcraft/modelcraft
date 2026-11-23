---
title: Mis on uut versioonis 0.9 (varem)
summary: Printimisetapp oma viilutaja ja saatmisega USB, Klipperi, OctoPrinti ja PrusaLinki kaudu, vaikviilutamine ja failivormingute lisandmoodulid, materjalivoog, digitaalse kaksiku ja tehasepõranda lisandmoodulid, NURBS-ümardused, paksendamine ja skannimisega sobitamine, AR kohapeal ning kümme kaareviisi.
keywords: mis on uut 0.9, varasem väljaanne, mis on uut, väljaande märkmed, muudatuste loend, 0.9, printimisetapp, 3D-printimine, saada 3D-printerisse, viilutaja, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, vaik, vaikprintimine, goo, sl1, ctb, anycubic, valotuskatse, materjalivoog, digitaalne kaksik, tehasepõrand, plc, konveier, nurbs, ümardus, paksenda, skannimise sobitamine, ar, kohapeal, kaare meetodid, ühikud, muutused, 0.8, 0.8.1, versioon, uued funktsioonid, renderdusmootor, mootor, avamine teises programmis, usd, gltf, unreal, lisandmooduli mootor, pinnad, loft, sweep, järjepidevus, g0, g1, g2, zebra, step, iges, stseeni kirjeldamine, stseen, ilm, kellaaeg, aastaaeg, assistent, materjal fotost, foto, visandi foto, sisustamine, sisusta ruum, kaldlõige, jaotamine, printimise kontroll, probleemid, omaduste ruudustik, lambid, keeled, sisendseadmed, tööriistariba read, dwg, reaalajas
from: 2717d1b1
---

See on, mis muutus ModelCraft 0.9-s võrreldes versiooniga 0.8.1. ModelCraft jõuab nüüd printerini ja tehase tootmispõrandani: saate asjad printimisalusele panna ja need saata ilma eksportimata, viilutada filamendi või vaigu jaoks ning kavandada materjalikäitlusliini. See on CadCraft Studio 0.9 ja selle kaheksa rakendust; enamik allpool olevaid uusi funktsioone on lisandmoodulid.

## Uus

### 3D-printimine

- **Printimisetapp.** Klõpsake tööriistaribal {{ui:Printimisetapp}}. Lisage printimisalusele teegi üksusi, paigutage need, vaadake viilutatud kihte läbi ja vajutage {{ui:Saada 3D-printerisse}}, ilma STL-faili eksportimata. See kuulub lisandmooduli 3D-printimine juurde, mis on vaikimisi sisse lülitatud ja mida saab eemaldada nagu iga lisandmoodulit. Vt [Aseta asjad printimisalusele ja saada need printerisse](topic:print-stage).
- **Meie enda filamendi viilutaja.** {{ui:CadCraft basic (kaasas, kiireim)}} on viilutaja kaardi loendis **Viilutaja**: seinad, katted, täitmine, toed ja ääreserv, töödeldakse töötajal, et leht jääks kasutatavaks. {{ui:Kihtide eelvaade}} koos liugur **Kiht** näitab kihte enne saatmist. Printeriprofiilid, nagu Ender-3 ja Prusa MK4 stiilid, sisaldavad oma algus-G-koodi.
- **Saatmine.** USB kaudu (Chrome või Edge arvutis, lehe avatuna hoides) või Klipperile (Moonraker), OctoPrintile või PrusaLinkile teie võrgus. Miski ei ühendu ega saadeta ilma klõpsuta ning saatmisel küsitakse kõigepealt.
- **Muud viilutajad.** Kiri:Moto, PrusaSlicer ja OrcaSlicer on omaette lisandmoodulid, vaikimisi väljas; lisage need kaardilt või {{ui:Sätted}} › {{ui:Lisandmoodulid}} kaudu. PrusaSlicer ja OrcaSlicer kasutavad teie CadCraft Studio's installitud koopiat. Bambu Labi printerite lisandmoodul viilutab teie OrcaSlicer'i ja selle P2S eelseadistustega ning vajab arvutis Studiot.
- **Vaikprintimine.** Vaikprintimise lisandmoodulid (vaikimisi väljas) teevad kihtpildid teie printeri ekraanile, koos õõnestamise ja ventilatsiooniavadega, alusplaadi ja toetega, kihieelvaate ning aja, vaigu ja maksumusega. Failivormingu lisandmoodulid kirjutavad Elegoo GOO, SL1, Chitubox'i (CBDDLP ja CTB 2 kuni 5) ning Anycubicu (PWMX ja PWS) vormingus. Vaigu valotuskatse teeb viievalotusega redeli. Vt [Viilutamine vaikprinteri jaoks](topic:resin-printing).
- **Muutumata.** {{ui:Ekspordi}} › {{ui:Kontrolli 3D-printimist (STL või 3MF)…}}, printimistööriistad ja Jaota printimiseks töötavad nagu versioonis 0.8. Vt [Valmista mudel 3D-printimiseks](topic:print-3d).

### Materjalivoog, digitaalne kaksik ja tehasepõrand

Need kolm on lisandmoodulid, mis on välja lülitatud, kuni lülitate need menüüs {{ui:Sätted}} › {{ui:Lisandmoodulid}} sisse, ja igaühel on pärast sisselülitamist oma abi.

- **Materjalivoog.** Paneel nimega Materjalivoog paigutab 3D-vaatesse konveierid, jaamad, puhvrid ja AGV-teed, käivitab seemnega simulatsiooni, esitab selle tagasi ning näitab läbilaskevõimet, tarneaegu ja järjekordi; tulemused salvestatakse CSV-na. Tellimused võivad tulla CSV-failist. Robotrakke saab kontrollida ja eksportida. PLC-link on pehme režiim ja päris režiim Modbus TCP kaudu, mis töötab ainult CadCraft Studios.
- **Digitaalne kaksik.** Loeb Materjalivoo paigutust ja käivitab sellel pehme PLC-d, kus saab sundida tõrkeid, teha laovaliku teste, võrrelda paigutusi ning vaadata materjalinimekirja.
- **Tehasepõrand.** Muudab jaamad masinateks ja rakkudeks, loeb neid reaalajas või simulaatorist ning hoiab tööjärjekorda ja lihtsat OEE-d. See ainult loeb: see versioon ei saa masinale ega PLC-le kirjutada.

### Pinnad, mudelid ja joonis

- **NURBS-ümardused, paksendamine ja loogilised tehted.** Paneelil {{ui:Pinnad}} on {{ui:Ümardus tahkude vahel}}, {{ui:Mitme serva ümardamine}}, {{ui:Paksenda tahkisteks}} ning Ühendamine, Lahutamine ja Lõikumine, igaühel oma mõõdetud kõrvalekalle. Vt [Vabakujulised pinnad (NURBS)](topic:nurbs-surfaces).
- **Sobita pinnad skanniga.** Valige skannitud võrk ja kasutage grupis **Skannimine** nuppu {{ui:Sobita pinnad skannimisega}}, seejärel {{ui:Õmbli pinnad tahkiseks}}. See on esmane sobitus, mitte täielik pöördprojekteerimise pakett.
- **Reaalajas link .3dm-modelleerijast.** Ühesuunaline, Rhino 8-st või Grasshopperist, ja see vajab samas arvutis CadCraft Studiot. Vt [Hoia .3dm-mudel reaalajas](topic:live-3dm-link).
- **Vaata mudelit kohapeal.** {{ui:Vaade objektil (AR, telefon)}} menüüs {{ui:Vaated}} töötab Android-telefonil Chrome'iga. Vt [Vaata mudelit kohapeal Android-telefoniga (AR)](topic:ar-on-site).
- **Kaare meetodid.** Rippmenüü {{ui:Kaare meetodid}} pakub kümmet viisi kaare joonistamiseks, sealhulgas {{ui:3 punktiga}} ja {{ui:Algus, keskpunkt, lõpp}}.
- **Rohkem ühikuid.** Kaale (kg, lb, t, ton) ja temperatuure (kraadi C, F, K ja R) mõistetakse seal, kus sisestate väärtusi ühikutega.

## Kõigis rakendustes

- **Tööriistavihjed.** Nuppude kursori all kuvatav tekst ja lõigatud sildid on Bootstrapi tööriistavihjed.
- **Suletav alustamisvihje.** Vihjekaardil tühjal joonisealal on väike sulgemisnupp x. See jääb suletuks ja käsupalett saab selle uuesti näidata.
- **Kerimisega vahekaardiribad.** Paneeli vahekaardiriba, mis ei mahu, kerib selle asemel, et jääda lõigatuks.
- **Vahekaardi pealkirjad.** Dokumendi avamisel algab brauseri vahekaart dokumendi nimega, siis ModelCraft ja CadCraft. Enne seda on punkt, kuni dokument on salvestamata.
- **Paigutus.** {{ui:Sätted}} › {{ui:Üldine}} › Paigutus hoiab paigutusi rippmenüüs, koos valikuga kasutada paigutust ainult selles rakenduses ja nupuga paigutuse lähtestamiseks.
- **Keeled.** Keelte loend sätetes järgib ehitises olevaid keelefaile. Muud keeled kui inglise keel on masinmustandid.
- **Reaalajas ja teek.** Reaalajas TeamWork näitab reaalajas kursoreid ja nimesid ning teegi kogumikud annavad igale rakendusele vaikekogumiku.

## Parandatud

- {{ui:Esita}} muutub animatsiooni mängimise ajal {{ui:Peata}}-ks ning {{key:Space}} esitab ja peatab ajajoone avatud olekus.
- Pildirenderdus langeb WebGL-ile, kui graafikakaart ei suuda path tracerit käivitada. Reaalajas renderdusvaade võib ikka näidata vea; seda ei kontrollitud Windowsi masinal selle draiveriga.
- Materjalivoo päris režiim ühendub uuesti pärast seda, kui link lõppes PLC erandvastuste tõttu.

## Ausad piirangud

- Päris printerile pole midagi printitud: mitte filamenti, mitte vaiku ega Bambu Connecti kaudu. Vaigufailid loeti tagasi ainult CadCraft'i enda lugejatega.
- Digitaalset kaksikut ja tehasepõrandat katsetati ainult simulaatorite ja teadaolevate vastustega, ilma päris PLC, liini ega protokollita. Need on kontrollimise abivahendid, mitte ohutuse valideerimine. Füüsika katab ainult kaste, kuni kaheksa koormust.
- Rhino ja Grasshopperi link pole kunagi päris programmides töötanud.
- Muud keeled kui inglise keel on masinmustandid.

## Varasem: 0.8 ja 0.8.1

See on, mis muutus ModelCraft 0.8-s (2026-11-01) ja 0.8.1-s (2026-11-02), võrreldes versiooniga 0.7. Dialoog {{ui:Renderda pilt…}} saab nüüd stseeni saata teise programmi, paneel Pinnad teeb siledaid vabakujulisi pindu ja ühendatud assistent saab seada kogu stseeni ühe lausega.

### Uus

**Renderdamine**

- **Mootorivalik.** {{ui:Renderda pilt…}} sisaldab nimekirja **Mootor** režiimi kohal. Meie enda kaks mootorit, Kiire ja Teekonna jälgija, on vaikimisi ja töötavad kõikjal. Teised valikud salvestavad stseeni paketina (mudel USD-failina ning seadete fail täpsete materjaliväärtuste, sisselülitatud lampide, päikese, taeva, säritusega ja kaameraga), et viia see teise programmi. Teise programmi joonistatud pilt ütleb, milline programm ja versioon selle tegi. Vt [Vali, milline programm pildi joonistab](topic:render-engines).
- **Avamine teises programmis.** Mootorite loend saab salvestada stseeni USD-failina, glTF-failina (`.glb`) või Unreali projektikaustana (`.zip`), brauseris ja CadCraft Studios. Studios saab see käivitada ka usdview'i või arvuti enda programmi faili jaoks. Vt [Ava stseen teises programmis](topic:render-open-in).
- **Saatmine mängumootorisse Studiost.** Studio kirjutab stseeni Unreal Engine'i projekti ja hoiab seda igal saatmisel sammu pidamas, ainult ühes suunas. Teie enda muudatused on kihis, mida CadCraft ei kirjuta kunagi. Vt [Saada stseen mängumootorisse](topic:render-unreal).
- **Mootorid lisandmoodulitest.** Lisandmoodul saab lisada mootori loendisse. JavaScriptis kirjutatud mootor joonistab brauseris ja Studios; programmi käivitav mootor vajab Studios teie kinnitust. Vt [Joonista pilt teise programmiga](topic:render-other-program) ja [Lisa renderdusmootor lisandmooduliga](topic:render-engine-addons).
- **Kirjelda stseen.** Ütelge ühendatud assistendile "hämarik, kerge vihm, sügisesed puud, inimesed platsil" ja ModelCraft seab selle ühe sammuga üles: päike liigub kuupäeva ja kellaajaga, et varjud järgiksid, taevas muutub, märjad pinnad ilmuvad ning puud ja inimesed paigutatakse päris objektidena siltidega, mida saab peita, liigutada või kustutada. Kellaaeg, kuupäev või aastaaeg ning ilm (selge, pilves, udu, kerge vihm, vihm, torm) töötavad ka eraldi ja hilisem päring muudab sama stseeni. Udu on näha kvaliteetses pildis graafikakaardil; teised mootorid näitavad taevast, valgust ja märgu pindu. Vihma ei joonistata langevate joontena.

**Materjalid**

- **Materjal ühest fotost.** Andke ModelCraftile foto pinnast (sein, põrand, kivi) ja see teeb korduva materjali: valgustus fotol tasandatakse, servad ühendatakse ning värvikaart, karedusekaart ja normaalkaart arvutatakse pildilt. See on tavaline pilditöötlus teie enda pildil, ilma treenitud mudelita. Karedus on hinnang. Lihtne, ruudukujuline ja otse ees tehtud foto annab parima plaadi; tugev muster, nagu tellised, võib näidata pehmet kummitust kohas, kus ühendus on segatud.

**Pinnad**

- **Vabakujulised pinnad.** Paneel {{ui:Pinnad}} teeb NURBS-kõveraid ja pindu ilma lõikeserva: punktide kaudu kulgevad kõverad, loft, reeglipärased pinnad, väljasurumine, pööramine, roobid ühe või kahe rööpa mööda, pinnad kõverate võrgust, lapid neljast servast, sobitamine ja sulandamine. Iga ühine serv mõõdetakse kui G0, G1 või G2 (vahe, nurk, kõvera hüpe) täpsetel pindadel ning serv, mis on halvem kui soovisite, ilmub paneelil Probleemid koos parandusega **Sobita**. Sebra triibud ja kõveruse värvid joonistatakse täpsetest pindadest. STEP- ja IGES-failid väljuvad ja sisenevad. Vt [Vabakujulised pinnad (NURBS)](topic:nurbs-surfaces).

**Asukoht ja ruumid**

- **Visandi foto maapinnale.** {{ui:File}} › {{ui:Impordi visandi foto…}} muudab käsivisandi telefoniga tehtud foto servadeks maapinnal teie määratud mõõtkavas: üks grupp, iga pliiatsivärvi jaoks silt. Paber leitakse ja sirgendatakse teie arvutis ning midagi ei saadeta kuhugi. Vt [Mudel asendiplaanil](topic:site-plan).
- **Sisusta ruum.** Valige põrand ja kasutage {{ui:Korrastamine}} › {{ui:Sisusta ruum…}}. Magamistoa, elutoa, söögitoa, köögi, vannitoa või kontorimööbel paigutatakse reeglite järgi seintele ja eemale ustest ning akendest ühte gruppi, mille saate ühe sammuga ära võtta. See on vaikepaigutus, mida teie üle vaadata, mitte disain. Vt [Algusteek](topic:starter).

**3D-printimine**

- **Kaldlõiked.** Jaota printimiseks saab lõiked kallutada kuni 60 kraadi, mis annab tükkidele rohkem liimimispinda. Ühendajad seisavad lõikega risti. Vt [Jaota mudel printimiseks](topic:print-split).
- **Printimise kontroll probleemides.** 3D-printimise kontrolli leiud kuvatakse paneelil Probleemid mudeli märgistega ning parandus, {{ui:Paranda}}, parandab need sealt. Vt [Toed, seinapaksus, õõnestamine ja parandus](topic:print-tools).

**Kõigis rakendustes**

- **Keeled.** Abi ja rakendused tulevad 54 keeles. Kümme on uued: leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiino, suahiili ja usbeki. Muud keeled kui inglise keel on masinmustandid, kuni emakeelena kõneleja on need läbi lugenud, ja abiteemad võivad olla veel inglise keeles.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, mängupult ja MIDI-juhtimised saavad rakendusi juhtida, kõigi või ühe jaoks.
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › Tööriistariba read määrab Murdmine (nagu varem), 2 rida või 1 rida. Riba, mis ei mahu, kerib küljele, selle asemel et võtta ruumi joonistusalalt. Murdmine jääb vaikimisi valituks.
- **Omaduste ruudustik.** ModelCraft'i lambivälja kasutavad ühist ruudustikku: kokkuklapitavad kategooriad, sildi- ja väärtuseveerud ning Tihe paigutus. Sisestatud aritmeetika nagu `2*450` töötab edasi.
- **Probleemid.** Paneel Probleemid (hoiatusnupp rakenduse ribal) on kõigi rakenduste ühine. ModelCraftis sisaldab see printimise kontrolli ja pinna pidevuse hoiatusi.
- **Reaalajas.** Reaalajas TeamWork seanss näitab, kes on kus. Vt [Modelleeri koos Reaalajas TeamWorkiga](topic:work-live).
- **Lisandmoodulid.** Lisandmoodulid saavad lisada renderdusmootoreid, nagu ülal.
- **Ühendage oma AI.** Kaheksa rakenduse tööriistalepingu ja kontrollid läbivad, kokku 454 tööriista. Ühe klõpsuga ühendus Studio sees, hostitud konnektor brauseri assistentidele, teie enda võti Studio sees ja avaldatud pakett pole veel lubatud. Rakendustel endil AI-d ei ole. Vt [Kasuta ModelCraftiga AI-assistente](topic:use-with-ai-assistants).

### Parandatud versioonis 0.8.1

- **DWG klasside jaotis.** DWG-faili klasside jaotist loeti vale tüübina, mis võis faili importimisel rikkuda. Nüüd loetakse see õigesti, ModelCraftis ja teistes DWG-d lugevates rakendustes.
- **Tahvelarvutid portreerežiimis.** Vaba ruudustiku kõrgus läheb joonisealale ja lehe paigutus algab 760 pikslit laiuse või vähemana. ModelCraft'i stiililehel on samuti see muudatus.
- **Keel Studios.** CadCraft Studio ja pakitud versioonid saavad keelt vahetada töötamise ajal; varem olid need ainult inglise keeles. Seda pole veel kõigil platvormidel testitud: andke teada, kui keel ei muutu.

### Pole selles versioonis veel

- **Pole koodiga allkirjastatud.** Windows võib näidata SmartScreeni: valige {{ui:Täpsemalt}}, seejärel {{ui:Käivita siiski}}. Macil paremklõpsake ja valige {{ui:Ava}}. Poe versioonid on ootel ning iPadi ja iPhone'i versiooni ei ehitatud versiooni 0.8.1 jaoks uuesti.
- Teine programm, mis joonistab pildi ilma renderdusmootori lisandmoodulita, panoraam- ja stereokaamerad ning taevapilt teise programmi kaudu ning plugin, mis avab Unreali lava, pole veel olemas. Failid kirjutatakse; plugin pole avaldatud ega ole Unrealis käivitatud.
- Vabakujulised pinnad: G3 ja klass A pole mõõdetud ega väidetud, lõikamine ja tahkised tulevad hiljem.
- Teiste programmide pildid ei ole pikslipõhiselt samad kui meie omad: vastavad ainult kaamera, päike, lambid ja säritus.
- Parandus versioonis 0.8.1 Studio keelevahetuse jaoks pole testitud kõigil platvormidel.

Kõik muu on [Pole veel ehitatud](topic:not-built-yet). Eelmise väljaande kohta vt [Mis on uut versioonis 0.7](topic:whats-new-0-7).
