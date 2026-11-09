---
title: Mis on uut versioonides 0.8 ja 0.8.1
summary: Renderdusmootori valik koos failidega teistele programmidele, vabakujulised NURBS-pinnad mõõdetud pidevusega, stseen, mida kirjeldad oma assistendile, materjal ühest fotost, visandifoto maapinnale, sisustatud ruumid, kaldlõiked 3D-printimiseks ja printimiskontroll probleemide paneelis.
keywords: mis on uut, what's new, versioonimärkmed, väljalaskemärkmed, muudatused, muudatuste loend, 0.8, 0.8.1, versioon, uued funktsioonid, renderdusmootor, mootor, ava teises programmis, usd, gltf, unreal, lisandmooduli mootor, nurbs, pinnad, loft, sweep, pidevus, g0, g1, g2, zebra, step, iges, ütle stseen, stseen, ilm, kellaaeg, aastaaeg, assistent, materjal fotost, foto, visandifoto, sisusta, sisusta ruum, kaldlõige, jagamine, printimiskontroll, probleemid, omaduste ruudustik, lambid, keeled, sisendseadmed, tööriistariba read, dwg, live
from: e4989b17
---

Siin on kirjeldatud, mis muutus ModelCraftis versioonides 0.8 (2026-11-01) ja 0.8.1 (2026-11-02) võrreldes versiooniga 0.7. Dialoog {{ui:Renderda pilt…}} saab nüüd stseeni saata teisele programmile, pinnade paneel loob sujuvaid vabakujulisi pindu ning ühendatud assistent saab stseeni seada ühe lausega.

## Uus

### Renderdamine

- **Mootori valik.** Dialoogis {{ui:Renderda pilt…}} on režiimi kohal loend **Mootor**. Meie enda kaks mootorit, Kiire ja Teekonnajälgija, on vaikimisi valitud ning töötavad kõikjal. Teised valikud salvestavad stseeni paketina (mudel USD-failina ning seadete fail täpsete materjaliväärtuste, sisselülitatud lampide, päikese, taeva, särituse ja kaameraga), et see viia teise programmi. Teise programmi joonistatud pilt ütleb, milline programm ja versioon selle tegi. Vt [Vali, millise programmiga pilt joonistatakse](topic:render-engines).
- **Avamine teises programmis.** Mootorite loend saab salvestada stseeni USD-failina, glTF-failina (`.glb`) või Unreali projektikaustana (`.zip`), brauseris ja programmis CadCraft Studio. Studios saab see lisaks käivitada faili jaoks usdview või arvuti enda programmi. Vt [Ava stseen teises programmis](topic:render-open-in).
- **Saatmine mängumootorisse Studiost.** Studio kirjutab stseeni Unreal Enginei projekti ja hoiab seda igal saatmisel ajakohasena, ainult ühes suunas. Sinu enda muudatused on kihis, kuhu CadCraft ei kirjuta. Vt [Saada stseen mängumootorisse](topic:render-unreal).
- **Mootorid lisandmoodulitest.** Lisandmoodul saab mootori loendisse lisada. JavaScriptis kirjutatud mootor joonistab brauseris ja Studios; programmi käivitav mootor vajab Studios sinu kinnitust. Vt [Joonista pilt teise programmiga](topic:render-other-program) ja [Lisa renderdusmootor lisandmooduliga](topic:render-engine-addons).
- **Ütle stseen.** Ütle ühendatud assistendile „hämarik, kerge vihm, sügisesed puud, inimesed platsil“ ja ModelCraft seab kõik ühe sammuga: päike liigub kuupäeva ja kellaaja järgi, nii et varjud järgivad seda, taevas muutub, ilmuvad märjad pinnad ning puud ja inimesed paigutatakse päris objektidena siltidega, mida saab peita, teisaldada või kustutada. Kellaaeg, kuupäev või aastaaeg ning ilm (selge, pilves, udu, kerge vihm, vihm, torm) töötavad ka eraldi ning hilisem päring muudab sama stseeni. Udu on näha kvaliteetses pildis graafikakaardil; teised mootorid näitavad taevast, valgust ja märgu pindu. Vihma ei joonistata langevate joontena.

### Materjalid

- **Materjal ühest fotost.** Anna ModelCraftile foto pinnast (sein, põrand, kivi) ja see teeb plaatimise materjali: foto valgustus ühtlustatakse, servad ühendatakse ja fotost arvutatakse värvikaart, karedusekaart ja normaalkaart. See on lihtne pildítöötlus sinu enda pildil, ilma treenitud mudelita. Karedus on hinnang. Lihtne, ruudukujuline ja otsevaade foto annab parima plaadi; tugev muster, näiteks tellised, võib ühenduskohas näidata hägust kummitust, kuna ühendus on segatud.

### Pinnad

- **Vabakujulised pinnad.** Paneel {{ui:Pinnad}} loob NURBS-kõveraid ja lõikamata pindu: punktide kaudu kulgevad kõverad, loft, reeglipärane, väljapressimine, pööramine, üks või kaks rööpa mööda sweep, pinnad kõverate võrgustikust, neljast servast tehtud laigud, sobitamine ja sulandamine. Iga ühine serv mõõdetakse kui G0, G1 või G2 (vahe, nurk, kõverusehüpe) täpsetel pindadel ning serv, mis on halvem kui oled nõudnud, ilmub probleemide paneelile koos parandusega **Sobita**. Zebra-triibud ja kõveruse värvid joonistatakse täpsetelt pindadelt. STEP- ja IGES-failid saab välja ja sisse. Vt [Vabakujulised pinnad (NURBS)](topic:nurbs-surfaces).

### Maa-ala ja ruumid

- **Visandifoto maapinnale.** {{ui:Fail}} › {{ui:Impordi visandi foto…}} muudab käsitsi visandi telefonifoto maapinnal servadeks sinu määratud mõõtkavas: üks rühm, iga pliiatsivärvi kohta silt. Paberi leiab ja sirgendab sinu arvuti ning midagi ei saadeta kuhugi. Vt [Mudel maaplaanil](topic:site-plan).
- **Ruumi sisustamine.** Vali põrand ja kasuta {{ui:Korrastamine}} › {{ui:Sisusta ruum…}}. Magamistoa, elutoa, söögitoa, köögi, vannitoa või kontori mööbel paigutatakse reeglite järgi seinte äärde ja uste ning akende eest eemale ühte rühma, mille saad ühe sammuga eemaldada. See on vaikimisi paigutus, mida sa üle vaatad, mitte disain. Vt [Algusraamatukogu](topic:starter).

### 3D-printimine

- **Kaldlõiked.** Jagamine printimiseks saab lõigata kaldu kuni 60 kraadi, mis annab tükkidele rohkem liimimispinda. Ühendusdetailid seisavad lõikega risti. Vt [Jaga mudel printimiseks](topic:print-split).
- **Printimiskontroll probleemides.** 3D-printimise kontrolli tulemused kuvatakse paneelil Probleemid koos markeritega mudelil ning parandus **Paranda** parandab need sealt. Vt [Toed, seina paksus, õõnestamine ja parandus](topic:print-tools).

### Kõigis rakendustes

- **Keeled.** Abi ja rakendused on saadaval 54 keeles. Kümme on uued: leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiini, suahiili ja usbeki. Muud kui inglise keeled on masintõlked, kuni emakeelne kõneleja on need üle lugenud, ja abiteemad võivad veel olla inglise keeles.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, mänguandur ja MIDI-juhtimised saavad juhtida rakendusi, kõiki või ühte.
- **Tööriistaribade read.** {{ui:Sätted}} › {{ui:Üldine}} › Tööriistariba read seab valikud Mähi (nagu varem), 2 rida või 1 rida. Riba, mis ei mahu, kerib külgsuunas, selle asemel et võtta joonistusest ruumi. Mähi jääb vaikimisi valituks.
- **Omaduste ruudustik.** ModelCraft'i lambiväljad kasutavad jagatud ruudustikku: kokkuklapitavad kategooriad, nimi- ja väärtuseveerud ning tihedus Kompaktne. Sisestatud aritmeetika, näiteks `2*450`, töötab edasi.
- **Probleemid.** Probleemide paneel (hoiatusnupp rakendusriba peal) on kõigi rakenduste ühine. ModelCraftis sisaldab see printimiskontrolli ja pinna pidevuse hoiatusi.
- **Live.** Live TeamWork'i seanss näitab, kes on kus. Vt [Tee koostööd Live TeamWorkiga](topic:work-live).
- **Lisandmoodulid.** Lisandmoodulid saavad lisada renderdusmootoreid, nagu eespool.
- **Ühenda oma AI.** Tööriistade leping ja kaheksa rakenduse kontrollid on läbitud, kokku 454 tööriista. Ühe klõpsuga ühendus Studios, hostitud konnektor brauseri assistentidele, oma võti Studios ja avaldatud pakett pole veel lubatud. Rakendused ei sisalda ise ühtki AI-d. Vt [Kasuta ModelCraftit AI-assistentidega](topic:use-with-ai-assistants).

## Parandatud versioonis 0.8.1

- **DWG klasside osa.** DWG-faili klasside osa loeti valet tüüpi, mis võis faili importimisel rikkuda. Nüüd loetakse see õigesti, ModelCraftis ja teistes DWG-d lugevates rakendustes.
- **Tahvelarvutid portreerežiimis.** Vaba ruudustiku kõrgus läheb lõuendile ja lehe paigutus algab laiusel 760 pikslit või vähem. Ka ModelCrafti stiililehel on see muudatus.
- **Keel Studios.** CadCraft Studio ja pakitud väljaanded saavad töö ajal keelt vahetada; varem olid need ainult inglise keeles. Seda pole veel testitud igal platvormil: teata meile, kui keel ei muutu.

## Pole selles versioonis veel

- **Pole koodiga allkirjastatud.** Windows võib näidata SmartScreeni: vali {{ui:Lisateave}}, seejärel {{ui:Käivita siiski}}. Macis parem klõps ja vali {{ui:Ava}}. Poe versioonid on ootel ning iPadi ja iPhone'i versiooni ei ehitatud versiooni 0.8.1 jaoks uuesti.
- Muu programm, mis joonistab pildi ilma renderdusmootori lisandmooduli, panoraam- või stereokaamerate ning taevapildi muu programmi kaudu, ja Unreali lava avav pistik pole veel olemas. Failid kirjutatakse; pistikut pole välja antud ega ole Unrealis käivitatud.
- Vabakujulised pinnad: G3 ja klass A pole mõõdetud ega väidetud ning lõikamine ja tahkised tulevad hiljem.
- Teiste programmide pildid pole pikslipõhiselt sarnased meie omadega: sobivad ainult kaamera, päike, lambid ja särituse.
- 0.8.1 parandus keelevahetusele Studios pole testitud igal platvormil.

Kõik muu on jaotises [Pole veel ehitatud](topic:not-built-yet). Eelmise väljaande kohta vt [Mis on uut versioonis 0.7](topic:whats-new-0-7).
