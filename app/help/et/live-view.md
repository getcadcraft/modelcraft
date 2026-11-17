---
title: Reaalajavaade
summary: Mudeli kõrval olev aken, mis näitab seda reaalajalises välimuses päikese ja varjudega ning järgib iga sinu muudatust; kõnni läbi seda ning seadista päevaaeg ja kuu.
keywords: jaga, panoraam, 360, tuur, virtuaalne tuur, iseseisev vaataja, võrguta vaataja, saada kliendile, video, läbikõnnivideo, hajutamine, rohi, niit, mets, kivid, taimed, puud, rahvahulk, taimede värvimine, reaalajavaade, reaalaeg, reaalajarenderdus, läbikõnd, kõnni, esimese isiku vaade, esitlus, klient, teine ekraan, teine aken, monitor, päevaaeg, päike, hooaeg, kuu, varjud, ümbritsev okluusioon, peegeldused, peegeldav valgus, globaalne valgustus, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} avab paneeli rakenduse kohal, mis näitab mudelit reaalajalises välimuses: taevas ja päike mudeli asukoha ja kuupäeva järgi, päikese varjud, pindadele antud vaated ja materjalid, lambid ning seintelt ja põrandatelt peegelduv valgus. See järgib sinu tegevust: pööra vaadet ja see pöördub samuti, muuda mudelit ja muutus ilmub hetk hiljem. Midagi ei laadita üles.

## Avamine

1. Vali {{ui:Export}} › {{ui:Live view}}. Paneel avaneb paremasse alanurka.
2. Lohista selle pealkirjariba, et seda liigutada, tõmba nurgast, et seda suurendada.
3. {{ui:New window}} viib paneeli eraldi aknasse teisele ekraanile. {{ui:Export}} › {{ui:Live view in a new window}} avab selle kohe seal. Kui brauser blokeerib hüpikaknad, avaneb see paneelina.
4. {{ui:Close}} sulgeb selle.

## Juhtnupud

| Juhtnupp | Mida see teeb |
|---|---|
| {{ui:Follow the view}} | Sees: reaalajavaade vaatab sinna, kuhu ModelCraft'i vaade vaatab. Kõndimine lülitab selle välja |
| {{ui:Walk}} | Kõnni mudelis läbi (allpool) |
| {{ui:Gravity}} | Kõndimisel: seisa põrandatel ja ronige trepist üles. Väljas: lenda |
| {{ui:Time}} | Päeva tund, 05:00 kuni 21:00. Päike liigub, kui lohistad |
| {{ui:Month}} | Kuu (selle 21. päev), et näha päikest talvel ja suvel |
| {{ui:Quality}} | {{ui:For this computer}} (mida [sinu masin](topic:your-machine) saab) või {{ui:Low}}, {{ui:Medium}} või {{ui:High}} |

Rea all olev joon ütleb, mis vaadet joonistab (WebGPU või WebGL 2), kvaliteedi ja tagasipeegeldunud valguse.

## Kõnni mudelis läbi

1. Pööra põhivaade sinna, kuhu tahad seista, ja vali {{ui:Walk}}. Seisad vaate silmapunktist allpool oleval põrandal, 1,6 m pikkusena.
2. Klõpsa reaalajavaadet, seejärel kasuta klahve {{key:W}} {{key:A}} {{key:S}} {{key:D}} või nooleklahve. Jooksmiseks hoia all {{key:Shift}}. Ringivaatamiseks lohista.
3. Kuni 40 cm kõrgused astmed ronitakse (trepp); kõrgem on sein. Seinad peatavad sind ja sa libisedes liigud neist mööda.
4. Kui {{ui:Gravity}} on väljas, lendad: {{key:E}} läheb üles, {{key:Q}} alla.
5. {{key:Esc}} lõpetab kõndimise.

## Hajuta taimi, kive ja inimesi

{{ui:Scatter}} reaalajavaate ribal avab hajutuspaneeli pildi kõrval. Hajutuskomplekt laotab esemeid ümbrusteegist (puud, põõsad, rohi, lilled, kivid, inimesed, autod) mudeli osale. Esemed joonistatakse ainult reaalajavaates: need ei ole mudeli geomeetria ja põhivaade neid ei näita.

1. **Täida pinnad:** vali ModelCraftis pinnad (või grupp, näiteks maastik) ja vali {{ui:Fill selection}}. Komplekt katab need.
2. **Värvi:** vali {{ui:Paint}} ja lohista üle reaalajavaate. Kui pinnad on valitud, jääb värv ainult neile; kui midagi pole valitud, lähevad värviga kõik pintsli alla jäävad asjad, sealhulgas maapind. {{ui:Brush size}} seab pintsli; {{ui:Eraser}} eemaldab värvitud kohad.
3. Märgi, mida hajutada. Iga kõrval olev number on selle kaal: 3 ja 1 teeb kolm esimest iga teise kohta.

| Juhtnupp | Mida see teeb |
|---|---|
| {{ui:Per m²}} | Mitu eset igal ruutmeetril |
| {{ui:Keep away (m)}} | Ükski ese ei ole sellest lähemal teistele objektidele ega katuse ja laua all. 0 lülitab selle välja |
| {{ui:Turn (°)}} | Kui palju iga ese juhuslikult pöörab ümber vertikaaltelje |
| {{ui:Steepest (°)}} | Esemeid ei panda kohtadesse, kus pind on järsem |
| {{ui:Size}} | Väikseim ja suurim suurus, esemele endale omase suuruse kordajana |
| {{ui:Height from, to (m)}} | Ainult nende kõrguste vahel (tühi = mis tahes) |
| {{ui:Lean with the surface}} | 0 jätab esemed püsti; 1 seab need nõlva suhtes risti |
| {{ui:Seed}}, {{ui:Shuffle}} | Sama seeme annab alati sama hajutuse; {{ui:Shuffle}} valib teise |

Komplektid salvestatakse failis .modelcraft ja järgivad pindu, mida nad katavad, kui sa neid muudad. Kui palju esemeid reaalajavaade maksimaalselt joonistab, sõltub [sinu masina](topic:your-machine) tasemest: 20 000 valiku {{ui:Processor only}} puhul, 100 000 valiku {{ui:Graphics card, basic}} puhul, miljon valiku {{ui:Graphics card, high}} puhul. Paneel näitab, kui palju esemeid on paigutatud ja kui palju tihedus nõuaks: vähem paigutatakse, kui eelarve saab täis või kui objektid need välja tõrjuvad. Kaamerale lähedased esemed joonistatakse nagu need on; kaugemad lihtsate kujunditena oma värvides.

:::note
Hajutatud esemed on reaalajavaates (ja selle läbikõnnis, panoraamides ja iseseisvas vaatajas). Renderdatud pilt neid veel ei joonista.
:::

## Jaga: panoraamid, tuurid, vaataja, video

{{ui:Share}} reaalajavaate ribal teeb reaalajavaatest faile. Kõik tehakse selles arvutis; midagi ei laadita üles.

| Valik | Mida saad |
|---|---|
| {{ui:360° panorama}} | 360° pilt vaate asukohast (või kohast, kus kõnnid), PNG-na ekvirektangulaarsel kujul, mida avavad panoraamvaatajad ja enamik fotosaite |
| {{ui:Add this spot to the tour}}, seejärel {{ui:Save the tour}} | Üks veebileht, millel on panoraam igas kohas ja nooled kohtadesse, mida iga koht näeb (vahelseina peidab noole) |
| {{ui:Save a viewer}} | Üks veebileht mudeliga selles reaalajalises välimuses: pööra seda, kõnni läbi, hüppa selle salvestatud stseenidesse. See avaneb võrguta brauseris, kus on WebGPU või WebGL 2, kaustast, USB-mälupulgalt või e-kirjast, ilma paigalduse ja kontota, ega laadi midagi internetist |
| {{ui:Video of the path}} | Ajajoone kaamerarada (või salvestatud stseenid järjekorras) videona selles reaalajalises välimuses, reaalajavaate suuruses: WebM või MP4, kui brauser oskab neid teha, muidu nummerdatud pildid ZIP-is |

Panoraami laius järgib kvaliteeti: 1024, 2048 või 4096 pikslit madala, keskmise ja kõrge kvaliteedi puhul. Vaataja fail on umbes 5 MB plus mudel.

:::note
Tuur ja vaataja on tehtud näitamiseks, mitte muutmiseks: nad säilitavad mudeli sellisena, nagu see oli salvestamise hetkel.
:::

## Kvaliteet

| | {{ui:Low}} | {{ui:Medium}} | {{ui:High}} |
|---|---|---|---|
| Päikese varjud | üks varjukaart | kolm kaskaadi | neli kaskaadi |
| Ümbritsev okluusioon (kontaktvarjud) | | ✓ | ✓, peenem |
| Peegeldused metallis | | | ✓ |
| Helendus (kui {{ui:Render a picture}} selle seab) | | ✓ | ✓ |
| Servade silumine | FXAA | mitme kaadri peale (TAA) | mitme kaadri peale (TAA) |
| Tagasipeegeldunud valgus | jäme | peenem | kõige peenem |

{{ui:For this computer}} valib madala, kui arvutil pole kasutatavat graafikakaarti; keskmise, kui on sisseehitatud graafikakiip; kõrge, kui on eraldi graafikakaart. Madal on mõeldud 8 GB sülearvutile ilma graafikakaardita.

## Tagasipeegeldunud valgus

Valgus, mis peegeldub päikesega valgustatud seinalt põrandale, ja toa tumedam sisemus arvutatakse sama teekonnajälgijaga, mis teeb [renderdatud pilte](topic:render): see renderdab väikese panoraami mudeli punktides, taustal igal protsessori tuumal. Kuni see töötab, näitab alumine rida {{ui:Bounce light: 40 %}}; kui see on valmis, võtab vaade selle vastu. Pärast muudatust algab see uuesti.

:::note
See on reaalajavaate ligikaudne lähendus, mitte renderdatud pilt: detailid punktide vahel saavad lähimate punktide tagasipeegeldunud valguse. Lõpliku pildi jaoks kasuta [Renderda pilt](topic:render).
:::

## Heledus ja värvid

Reaalajavaade kasutab sama heledust, valgebalanssi, kontrasti ja vaate teisendust (ACES, AgX, filmic või standardne) nagu [Renderda pilt](topic:render): seadista need seal ja reaalajavaade järgib neid.

:::note
Brauserid erinevad. Kus brauseril on WebGPU (Chrome ja Edge Windowsis, macOS-is ja ChromeOS-is, Safari 26), kasutab reaalajavaade seda; mujal (enamik brausereid Linuxis, vanemad Apple'i süsteemid) kasutab WebGL 2-d ja näeb välja samasugune.
:::
