---
title: Renderda mudelist pilt
summary: Tee pilt, mis näeb välja nagu päevavalgus: taevas, päike mudeli asukoha ja kuupäeva järgi, pehmed varjud, klaasi- ja metallilaad ning salvesta see PNG-na.
keywords: renderdamine, eelseade, eelseaded, stseeni eelseade, sisemine, väline, lõikevaade, öö, üks klõps, kiirte jälgimine, kiirte jälgitud, valgusekiirte jälgimine, globaalne valgustus, peegeldused, murdumine, kvaliteetne, foto, fotorealistlik, realistlik, pilt, kujutis, png, staatiline, taevas, päike, päevavalgus, varjud, pehmed varjud, ümbritsev okluusioon, klaas, metall, läikiv, materjalid, säritus, heledus, pilvine, hämarik, stuudio, esitlus, udu, hägu, suits, pilv, maht, valguskiired, jumalakiired, kaustikud, adaptiivne proovivõtt, müra
from: 517ba4d3
---

{{ui:Renderda pilt…}} teeb vaatest pildi, mis näeb välja nagu päevavalgus, mitte nagu joonis: taeva, päikese sinna, kus mudeli asukoht ja kuupäev seda asetavad, pehmed varjud, valguse kogu taevast, mis tumedamaks muudab nurgad ja pilud, ning värvid, mis võivad näida nagu klaas, metall või läikiv värv. Mudelit ei muudeta.

## Renderda vaade

1. Seadista vaade nii, nagu tahad pilti: orbiteeri, suumi, vali [stseen](topic:scenes), peida see, mis ei peaks näha olema. Pilt kasutab vaate enda kaamerat.
2. Klõpsa rühmas {{ui:Fail}} valikul {{ui:Ekspordi}}, seejärel {{ui:Renderda pilt…}}.
3. Vali {{ui:Stseen}}, kui vajutatud ei ole see, mida tahad (vt [Stseeni eelseaded](topic:render#scene-presets-a-good-picture-in-one-click)), vali {{ui:Suurus}} ja klõpsa {{ui:Renderda}}.

   Pilt täitub renderdamise ajal ja muutub igal läbikäigul siledamaks. {{ui:Peata}} (või {{key:Esc}}) lõpetab varakult ja jätab pildi sellisena, nagu ta on.

4. Klõpsa {{ui:Salvesta}}, et see alla laadida (PNG, kui {{ui:Salvesta nimega}} ei ütle teisiti).

:::tip
Alusta valikuga {{ui:Mustand}} vaate suuruses {{ui:Vaate suurus}}, et kontrollida kaamerat ja ilmet, ning renderda lõplik pilt suuremana valikuga {{ui:Hea}} või {{ui:Parim}}.
:::

## Stseeni eelseaded: hea pilt ühe klõpsuga

Dialoogi ülaosas on neli nuppu {{ui:Stseen}}. Igaüks seab korraga taeva, heleduse, maapinna, servajooned, kvaliteedi ja päikese, nii et enne esimest pilti pole midagi õppida. Klõpsa ühte ja seejärel {{ui:Renderda}}.

| Stseen | Mida see seab | Kasuta selleks |
|---|---|---|
| {{ui:Väline}} | Selge taevas, mudeli enda päike, maapind sees | Hoonet väljastpoolt |
| {{ui:Sisemine}} | Pilvine taevas (ühtlane valgus, ilma teravate päikeselaikudeta), pool valgusastet heledam | Vaadet ruumi seest |
| {{ui:Lõikevaade}} | Valge stuudio, maapinda ei ole, servajooned kiires renderdamises | Lõikega lõigatud mudelit |
| {{ui:Öö}} | Päike loojub (keskööl talvel saidi poolkera jaoks), üks valgusaste heledam | Valgustitega valgustatud mudelit. Ilma valgustiteta on pilt tume |

- {{ui:Vali selle vaate järgi}} valib sinu eest: {{ui:Lõikevaade}}, kui lõige on sees, {{ui:Sisemine}}, kui kaamera on mudeli sees, muidu {{ui:Väline}}. Dialoogi esimesel avamisel alustab see automaatselt nii.
- Kõik sätted jäävad allpool ja neid saab muuta. Kui muudad ühte, ei ole stseen enam valitud, ükski nupp ei ole vajutatud ja nuppude all olev rida ütleb, et sätted on sinu enda. Klõpsa stseeni uuesti, et tema väärtused tagasi panna.
- Stseen ei puuduta mootorit, režiimi, suurust, materjale, kaamerat ega valgusteid.

:::note
Stseenid annavad ModelCraftis ja BimCraftis samad väärtused. Valmis pilt sõltub mudelist ja sinu graafikakaardist.
:::

## Sätted

| Säte | Mida see teeb |
|---|---|
| {{ui:Suurus}} | Vaate suurus, kaks korda vaate suurus, Full HD, 4K või ruut. Kindla suurusega säilitavad vaate kaamera ja näitavad külgedel rohkem või vähem |
| {{ui:Režiim}} | {{ui:Kiire}} või {{ui:Kvaliteetne (kiirte jälgimine)}} (allpool) ja selle {{ui:Ajapiirang}} |
| {{ui:Kvaliteet}} | Mitu läbikäiku (või kvaliteetses režiimis mitu proovi) keskmistatakse: {{ui:Mustand}} 16, {{ui:Hea}} 64, {{ui:Parim}} 256. Rohkem läbikäike annab siledamad varjud ja servad, kuid kestab kauem |
| {{ui:Taevas}} | {{ui:Selge taevas}}, {{ui:Pilvine}} (pehme valgus, nõrgad varjud), {{ui:Hämarik}} (madal, soe valgus) või {{ui:Valge stuudio}} (lihtne valge taust) |
| {{ui:Päike}} | Päike tuleb kuupäevast, kellaajast ja asukohast jaotisest {{ui:Stiil}} › päike. Märgi {{ui:Kasuta selle pildi jaoks teist kuupäeva ja kellaaega}}, et proovida teist aega ilma mudeli stiili muutmata |
| {{ui:Heledus}} | Heledam või tumedam, astmetes (valgusastmed) |
| {{ui:Maapind mudeli all}} | Maapind, mis võtab varjud ja hajub horisondiks. Lülita välja mudeli puhul, mis hõljub |
| {{ui:Joonista servad}} | Joonistab mudeli servad õhukeselt pildi peale joonistatud välimuse jaoks |

Kui päike on valitud ajal horisondi all, on öö: taevas läheb tumedaks ja mudelit valgustavad [valgustid](topic:lights). Dialoog ütleb seda.

Sätted salvestatakse `.modelcraft`-faili, nii et sama mudeli järgmine pilt algab sealt, kus jäid.

## Muuda värvid klaasi või metalli moodi

Jaotises {{ui:Materjalid}} on igal ekraanil oleval värvil ilme: {{ui:Matt}}, {{ui:Siidmatt}}, {{ui:Läikiv}}, {{ui:Metall}}, {{ui:Poleeritud metall}}, {{ui:Klaas}} või {{ui:Matt klaas}}. {{ui:Värvimata tahud}} on tahud, millel ei ole oma värvi.

Akna klaasiks värvi aknaruudud [ühe värviga](topic:paint) ja seejärel seadista see värv valikuks {{ui:Klaas}}. Klaas laseb läbi taeva ja selle taga oleva, tinditud oma värvi, ning peegeldab taevast.

:::note
Režiimis {{ui:Kiire}} peegeldavad klaas ja metall taevast, mitte ülejäänud mudelit, ning valgus klaasi kaudu ei murdu. Allpool olev režiim {{ui:Kvaliteetne (kiirte jälgimine)}} teeb mõlemad.
:::

## Kvaliteetne

Vali {{ui:Režiim}} › {{ui:Kvaliteetne (kiirte jälgimine)}} pildi jaoks, mis jälgib valgust nii, nagu kaamera seda näeb:

- valgus põrkab pindade vahel, nii et ruum, mida valgustab aken või valgusti, on valgustatud igast küljest ja värvid kanduvad naabritele;
- klaas on päris klaas: valgus murdub läbi selle ja see peegeldab mudelit;
- metall ja poleeritud pinnad peegeldavad ülejäänud mudelit;
- valgusplaadid valgustavad nagu plaadid, pehmete varjudega.

See on palju aeglasem kui {{ui:Kiire}}: iga läbikäik jälgib iga pikslisse jõudvat valgust uuesti. Pilt algab terasena ja puhastub, kui proovid kokku liituvad, seega alusta väikesena ({{ui:Vaate suurus}}, {{ui:Mustand}}) ja vali {{ui:Ajapiirang}}: kui see otsa saab, jääb pilt sellisena, nagu ta siis on. {{ui:Peata}} jätab selle samuti alles. Esimene läbikäik ootab, kuni brauser ette valmistab kiirte jälgija.

Kui brauseril on WebGPU, on kiirte jälgija CadCraft'i enda oma ja töötab graafikakaardil; rida pildi all ütleb {{ui:Jälgitud kiirtega graafikakaardil (WebGPU)}}. Pärast {{ui:Peata}} või ajapiirangut jätkab {{ui:Jätka}} sama pildiga, kuni kõik proovid on tehtud; sätte muutmine või uuesti {{ui:Renderda}} vajutamine alustab otsast. Ilma WebGPU-ta renderdatakse pilt WebGL-iga (rida ütleb seda) ja {{ui:Jätka}} ei ole pakutud.

:::linux
Firefoxil ja enamikul Chrome'i seadistustel Linuxis ei ole veel WebGPU-d, seega kvaliteetne režiim kasutab seal WebGL-i.
:::

Selles režiimis servi ei joonistata, raamatukogu tekstuurid näitavad oma värvi ja karedust, kuid mitte oma reljeefi ([sõlmedega tehtud materjal](topic:shading#in-high-quality-pictures) näitab oma normaali ja reljeefi), ning mudelile tehakse lõige enne pildi algust.

{{ui:Müra vähendamine (eemaldab proovide järel jääva tera)}} on vaikimisi sees: kui pilt on valmis või peatatud, eemaldatakse järelejäänud tera selleks tehtud närvivõrguga (Intel Open Image Denoise'i avaldatud võrk, töötab sinu arvutis: graafikakaardil, muidu protsessoril). Pilt vähese proovide arvuga tuleb puhas; {{ui:Näita}} › {{ui:Pilt enne müra eemaldamist}} näitab seda nii, nagu renderdati.

## Renderda vaates

{{ui:Renderda}} tööruum käivitab kiirte jälgija vaates endas: orbiteeri, muuda mudelit või vaheta valgustit ja see algab kohe uuesti. {{ui:Piirkond}}: lohista ristkülik ja renderdatakse ainult see; {{ui:Kogu vaade}} viib tagasi. {{ui:Fookus}}: klõpsa sellel, mis peab olema terav, ja terava ala sügavus fokusseerub sinna. {{ui:Detail}} määrab, mitu vaate pikslit renderdatakse (vähem on kiirem). {{ui:Peata}} peatab ja jätkab. Tööruum vajab WebGPU-d: ilma selleta ütleb ta seda, ja {{ui:Ekspordi}} › {{ui:Renderda pilt…}} töötab siiski.

## Taevad ja valgusprofiilid graafikakaardil

WebGPU-ga on kvaliteetsel režiimil kaks lisataevast:

- {{ui:Füüsikaline taevas}} arvutab päevavalguse päikese kõrgusest: ülal sügav sinine, horisondil kahvatu riba ja päike, mis läheb madalal soojemaks ja nõrgemaks. {{ui:Udusus}} läheb väga selgest päevast (2) hägusasse (10).
- {{ui:Taevapilt (HDRI)}} valgustab mudelit päris koha panoraampildiga. {{ui:Vali pilt…}} võtab equirectangular-faili `.hdr` või `.exr`; {{ui:Pööra}} pöörab seda mudeli ümber ja {{ui:Pildi heledus}} teeb selle heledamaks või tumedamaks. Pildil on oma päike, seega mudeli päikest ei lisata. See jääb alles ainult nii kaua, kui leht on avatud: pärast uuesti avamist vali see uuesti.

Iga valgusti loendis {{ui:Valgustid}} võib kasutada tootja valgusprofiili: {{ui:IES-profiil…}} loeb IES (LM-63) faili ja valgusti kiirgab oma valgust nii, nagu see valgusti teeb (kitsas allavalgusti, seinavalgusti). Iga sama nimega valgusti kasutab seda ja valgusti säilitab oma heleduse. Klõpsa profiili nimel, et selle kasutamine lõpetada.

Selge klaasiga aknad aitavad taeva valgusel ruumi leida, nii et siseruumide pildid selginevad taeva all kiiremini.

{{ui:Kiire}} režiim ja WebGL-i kiirte jälgija näitavad {{ui:Füüsikalist taevast}} ja {{ui:Taevapilti (HDRI)}} selge taevana ning ignoreerivad valgusprofiile.

## Kaamera

{{ui:Kaamera}} seab pildi nagu fotograafia:

- {{ui:Säritus}}: jäta {{ui:Heleduse liugur}} või vali {{ui:Kaamera sätted}} ja sea {{ui:Ava (f-number)}}, {{ui:Säriaeg}} ja {{ui:ISO}} nagu kaameral; nende kõrval olev EV on tavaline särituse väärtus. f/16 ajaga 1/100 s ja ISO 100 sobib päikesepaistelise päeva kohta; tumedam stseen vajab laiemat ava, aeglasemat säriaega või kõrgemat ISO-d. See töötab igas režiimis.
- {{ui:Terava ala sügavus}} hägustab, mis on lähemal või kaugemal kui {{ui:Fookuskaugus (m)}}, nagu sellise f-numbriga objektiiv teeks (jäta tühjaks, et fokusseerida vaate keskel olevale); {{ui:Ava kuju}} annab fookusest väljas olevatele helkidele ringi või tiibadega kuju.
- {{ui:Kahepunktiline perspektiiv (vertikaaljooned jäävad vertikaalseks)}} joondab kaamera ja nihutab pilti, nagu arhitektuurne nihkeobjektiiv teeb, nii et seinad ei kaldu, kui vaatad hoone poole üles või alla.
- {{ui:Valgebalanss}} määrab, milline valguse värv näib valgena: madalam (näiteks 3000 K) soojale valgustivalgusele, kõrgem varjule ja pilvistele päevadele.
- {{ui:Projektsioon}}: {{ui:360° panoraam}} teeb 2:1 pildi kõigest kaamera ümber panoraamvaatajatele; {{ui:360° stereopanoraam}} paneb üksteise otsa vasaku ja parema silma panoraami peakomplektidele; {{ui:Kuupkaart (6 tahku)}} teeb kuus ruudukujulist vaadet 3 × 2 ruudustikus. Laius tuleb {{ui:Suurus}}est.

Projektsioon, terava ala sügavus, kahepunktiline perspektiiv ja valgebalanss vajavad graafikakaardil kiirte jälgijat (WebGPU), seega näidatakse neid ainult režiimis {{ui:Kvaliteetne}}.

## Pildi viimistlemine

{{ui:Pilt}} töötleb kvaliteetset pilti nagu fotot, ja iga juhtnupp muudab valmis pilti kohe, renderdamata uuesti:

- {{ui:Välimus (vaate teisendus)}}: {{ui:ACES filmne}} (pilt nagu varem), {{ui:AgX}} (pehmem, säilitab värvi väga heledas valguses), {{ui:Filmne}} (õrn filmikõver) või {{ui:Standardne}} (lihtne; väga hele valgus lõigatakse valgeks).
- {{ui:Kontrast}} ja {{ui:Heleduste tihendamine}} (toob tagasi detaili väga heledates kohtades).
- {{ui:Helendus}} (pehme hõõg heleda valguse ümber), {{ui:Läige}} ja selle {{ui:Läigejooned}} (tähekujulised kiired kõige heledamatest punktidest) ning {{ui:Vinjett}} (tumedamad nurgad).
- {{ui:Värvitabel (.cube)…}} rakendab `.cube`-failist värvitöötluse, mille tugevust juhib {{ui:Värvitabeli tugevus}}; nagu taevapilt, jääb see alles ainult siis, kui leht on avatud.

## Salvesta pilt

{{ui:Salvesta nimega}} kõrval {{ui:Salvesta}} valib faili: {{ui:PNG}}, {{ui:JPEG}} või {{ui:WebP}} jagamiseks (JPEG ja WebP ainult seal, kus brauser neid kirjutada oskab), ning pärast kvaliteetset renderdamist graafikakaardil ka:

- {{ui:PNG, 16 bitti}}: töödeldud pilt peenemate astmetega toonide vahel, trükkimiseks või edasiseks töötlemiseks.
- {{ui:EXR, iga kiht (32-bitine ujukomaarv)}}: pilt nii, nagu renderdati (lineaarne valgus, ilma töötluseta), iga renderdamise element ja valgusrühm oma kihina, komposiitimisprogrammidele.
- {{ui:Renderdusfail (.ccrender, hiljem uuesti töötlemiseks)}}: kõik, mida dialoog vajab pildi uuesti segamiseks ja töötlemiseks. {{ui:Ava renderdusfail…}} toob selle tagasi koos segu ja töötlusega, renderdamata.

## Sega valgused pärast renderdamist

Lülita sisse {{ui:Valguse segamine (muuda iga valgusti värvi ja heledust pärast renderdamist)}} enne, kui vajutad {{ui:Renderda}}. Kui pilt on valmis (või peatatud), loetleb {{ui:Sega pilt}} selle valgused rühmadena: taevas, päike ja valgustid nime järgi (iga sama nimega valgusti on üks rühm). Lülita rühm välja, anna talle värv või tee see heledamaks või tumedamaks, ja pilt muutub kohe, renderdamata uuesti. {{ui:Salvesta segu}} jätab segu nime alla, et seda hiljem valida; {{ui:Nagu renderdatud}} viib tagasi pildi sellisena, nagu ta tehti. {{ui:Salvesta}} salvestab segatud pildi.

{{ui:Renderdamise elemendid (albedo, normaalid, sügavus, diffuus, peegeldus, läbilaskvus, kiirgus, ID-d)}} hoiab ka pildi osad alles. {{ui:Näita}} lülitab vaate ühele neist: pindade värvid (albedo), normaalid, sügavus, diffuusne, peegelduv ja läbiv valgus (igaüks otsene ja kaudne), mis hõõgub ning taevas, ja värv objekti või materjali kohta maskide tegemiseks.

Mõlemad hoiavad lisakihte graafikakaardil. Suurtes suurustes ei pruugi graafikakaardil ruumi olla; dialoog ütleb seda ja väiksem suurus töötab.

## Renderdamise järjekord

Pärast kvaliteetset seadistust hoiab {{ui:Lisa see pilt järjekorda}} jaotises {{ui:Renderdamise järjekord}} pildi just sellisena, nagu ta praegu on seatud; videodialoogi {{ui:Lisa see animatsioon järjekorda}} teeb sama terve animatsiooni kohta, kiirte jälgituna kaadri haaval. {{ui:Käivita järjekord}} renderdab need üksteise järel selles arvutis ja iga valmis pildi kõrval olev {{ui:Salvesta}} laadib selle alla. Lehe sulgemine jätab järjekorra alles: ava sama mudel ja see jätkub sealt, kus peatus. Järjekord vajab WebGPU-d.

## Udu, suits, müra ja kaustikud

Need asuvad jaotises {{ui:Udu, suits ja müra}} ja töötavad kvaliteetses režiimis graafikakaardil; muud mootorid need välja jätavad.

- {{ui:Udu ja hägu}} täidab õhu kuni teatud kõrguseni udu, mida päike, taevas ja valgustid valgustavad. {{ui:Kui kaugele näed, meetrites}} määrab, kui paks see on (umbes 100 m on kerge hägu, 20 m paks udu), {{ui:Udu kõrgus maapinnast, meetrites}} on see, kus see lõpeb, ja {{ui:Valguskiired}} on, kui palju udu hõõgub valguse poole. Päikesevalgus lahkub udust ülevalt, seega kohtades, kus päike tuleb akna kaudu või hoonete vahelt, näed seda valguskiirtena.
- {{ui:Suits või pilv}} lisab ühe suitsu- või pilvemahu, valgustatud nagu udu. {{ui:Liik}} on {{ui:Pilv}}, {{ui:Suitsusammas}} või {{ui:Mahufailist (.ccvol)}}, CadCraft'i enda ruudustikuformaat. {{ui:Detail}} ja {{ui:Variatsioon}} muudavad tehtud pilve või sammast, {{ui:Pikima külje suurus meetrites (0 = mudeli suurus)}}, {{ui:Nihuta X (m)}}, {{ui:Nihuta Y (m)}}, {{ui:Nihuta Z (m)}} ja {{ui:Pööra}} paigutavad selle (algab mudeli keskelt), {{ui:Paksus}} muudab tihedamaks, {{ui:Ees helendus}} teeb valguse poole heledamaks ja {{ui:Värv}} tinditab selle. Mahufail jääb alles ainult lehe avatud olekus, nagu taevapilt.
- {{ui:Peata varakult kohtades, kus pilt on puhas (adaptiivne proovivõtt)}} ei anna enam proove rahunenud pikslitele, nii et ülejäänud pilt valmib kiiremini. {{ui:Aktsepteeritav müra}} on, kui palju tera jääb alles, kui piksel peatub. Pildi all olev rida ütleb, mitu proovi piksel keskmiselt sai.
- {{ui:Kaustikud (klaasi kaudu murdunud või peeglitelt peegeldunud valgus)}} jälgib valgust valgustitest ja päikesest, nii et hele laik klaaspalli all või peegli valgus seinal tuleb puhtana, mitte terasena. See on välja lülitatud, kui udu, suits, {{ui:Sega valgused pärast renderdamist}} või renderdamise elemendid on sees, ja see on tehtud piltide jaoks, mitte 360° piltide, animatsioonide ega renderdamise tööruumi jaoks.

## Kui kaua see võtab

Pilt tehakse sinu enda arvutis, selle graafikakaardiga; midagi ei laadita üles. Kui kaua see võtab, sõltub kaardist. Aeg kasvab läbikäikude ja pikslite arvuga: {{ui:Parim}} on 16 korda rohkem läbikäike kui {{ui:Mustand}} ning 4K pilt on umbes neli korda rohkem piksleid kui Full HD. Arvuti ilma graafikakaardita renderdab siiski, ainult aeglasemalt.

:::note
Kui dialoog ütleb, et brauser ei saa pilte renderdada, pole brauseril WebGL 2. Uuenda seda või lülita selle sätetes sisse riistvaraline kiirendus.
:::
