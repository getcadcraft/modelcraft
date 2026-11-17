---
title: Modifikaatorid võrgul, grupil või komponendil
summary: Skaleeri, peegelda, massiivi, silu, faasi, lõika ja painuta võrku ilma seda muutmata; korda ja mõõtkava gruppi või komponenti sama pinuga ning tee see püsivaks, kui oled valmis.
keywords: modifikaator, modifikaatorid, pinu, grupp, komponent, mõõtkava, rakenda, muuda allikat, mittehävitav, peegelda, massiiv, radiaalne massiiv, alamjaotus, alamjaotuspind, silu, faas, tahkestamine, paksus, boole, lõika, nihuta, müra, ühenda tipud, lihtsusta, võre, kest, kõvera deformatsioon, painuta, pinnale tõmbamine, rakenda
from: dd5ec1cb
---

**Modifikaator** muudab seda, mida võrk näitab, ilma võrku ennast muutmata. Peegelda ühte poolt detailist ja modelleeri ainult seda poolt; ümarda kast alamjaotuspinnaga ja jätka kasti muutmist. Modifikaatorid asuvad **pinus** ja töötavad järjekorras ülevalt alla. See, mida näed, eksporditakse, prinditakse ja renderdatakse, on võrk koos iga sisselülitatud modifikaatoriga.

## Modifikaatori lisamine

1. Vali võrk. Mudeli tööruumis on selle jaotis **Modifikaatorid** jaotises {{ui:Entity info}}; Võrgu tööruumis on see paremal paneelis.
2. Vali üks nupust {{ui:Add a modifier…}}. See läheb pinu alumisse ossa.
3. Muuda selle seadeid tema nime all. Pikkused võtavad samu väärtusi nagu väärtusekast, nii et `600mm`, `2'6"` ja `(6m)/4` töötavad kõik.

Iga muudatus on üks tagasivõtmise samm: {{key:Mod+Z}} võtab selle tagasi.

## Iga modifikaatori nupud

- Märkeruut lülitab selle sisse või välja.
- Ekraaninupp näitab või peidab selle vaates (see jääb pinusse).
- Kaameranupp näitab või peidab selle renderdatud piltides ja videotes, nii et modifikaator võib olla ainult renderdamiseks (või ainult vaate jaoks).
- Nooled liigutavad selle pinus üles või alla. Järjekord on oluline: peegelda ja siis alamjaota annab sileda õmbluse, alamjaota ja siis peegelda ei anna.
- {{ui:Apply}} teeb kuju osaks võrgust: selle kohal olevad modifikaatorid ja see ise rakendatakse võrgule endale ning need lahkuvad pinust. See on üks tagasivõtmise samm.
- Rist eemaldab selle.

## Modifikaatorid

| Modifikaator | Mida see teeb |
| --- | --- |
| Mõõtkava | Skaleerib objekti lähtepunkti suhtes, punase, rohelise ja sinise kordajaga. Ka grupil või komponendil |
| Peegeldus | Lisab peegelkoopia üle punase, rohelise või sinise läbi võrgu lähtepunkti ja ühendab pooled kokkupuutekohas |
| Massiiv | Kopeerib joonde (oma suuruse samm korda sinu antud arv, pluss fikseeritud samm), ümber telje või mööda kõverat mudelis. Grupp või komponent läheb joonde |
| Alamjaotuspind | Silub võrku Catmull-Clarki alamjaotusega. Teravad servad jäävad vagudega. Renderdused võivad kasutada rohkem tasemeid kui vaade |
| Faas | Ümardab iga serva, mis on teravam kui sinu antud nurk |
| Tahkestamine | Annab pinnale paksuse ja sulgeb serva |
| Boole | Lõikab välja, ühendab või säilitab kattumise mudelis oleva teise objektiga. Mõlemad peavad olema suletud tahkkehad |
| Nihutus | Nihutab pinda sisse või välja sileda müraga. Sama seeme annab alati samad mügarad |
| Ühenda tipud | Ühendab tipud, mis on lähemal kui antud kaugus |
| Lihtsustamine | Hoiab alles osa kolmnurkadest, eemaldades need, mis kuju kõige vähem muudavad |
| Silu | Lõdvestab tipud naabrite poole |
| Võre | Painutab võrku kestaga: liiguta kesta punkte ja võrk järgib |
| Kõvera deformatsioon | Painutab võrku mööda mudelis olevat kõverat punase, rohelise või sinise suunas |
| Pinnale tõmbamine | Liigutab iga tipu teise objekti lähimale punktile |

## Grupil või komponendil

Grupil või komponendil võib olla samuti retsept, nii et lambivarju võib olla **Mõõtkava** ja ühe varju **Massiiv**, ning ühe numbri muutmine muudab lampi.

1. Vali grupp või komponent. Jaotises {{ui:Entity info}} loetleb jaotis **Modifikaatorid** pinu (alguses tühi).
2. Vali {{ui:Scale}} või {{ui:Array}} nupust {{ui:Add a modifier…}}. Grupist saab komponent, mis on **algne, mida paigutab pinu**. Algne säilib: muuda seda ja iga koopia järgib kohe.
3. Mõõtkava võtab kordaja punase, rohelise ja sinise jaoks (`1, 1, 2` kahekordistab kõrguse). Massiiv võtab koopiate arvu, sammu kui osa tulemuse seni suurusest ja lisasammu pikkustes.

Pinu töötab ülevalt alla algse enda telgede järgi tema lähtepunkti suhtes, nii et järjekord on oluline: kolme koopia massiiv 3 m vahega ja siis punase mõõtkava 2 annab koopiad 6 m kaugusele; esmalt mõõtkava ja siis massiiv hoiab need 3 m vahel. Märkeruut, nooled ja rist töötavad nagu võrgul; vaate- ja kaameranupud ning Rakenda ühel modifikaatoril ei tööta, sest grupi pinu on üks tervik.

- {{ui:Edit source}} avab algse kohapeal. Muudatused näevad igas koopias; selle sulgemine viib sind tagasi, kust tulid.
- {{ui:Bake modifiers}} teeb tulemuse tavalisteks servadeks ja tahkudeks ning eemaldab pinu, ühe tagasivõtmise sammuna. Kattuvad koopiad jäävad eraldi geomeetriaks: Bake ei ole ühend.
- Komponendi koopiad jagavad retsepti; {{ui:Make unique}} eraldab selle (algne jääb jagatuks).
- Pinu salvestatakse failis, seda kantakse üle koopiate, kleepimise ja tagasivõtmisega, ning Puhasta kasutamata hoiab algse alles. Programm, mis modifikaatoreid ei tunne, näitab ikka koopiaid.
- Kuni Bake'ini ei saa tulemust sisse minna, lahutada, suurust muuta ega venitada: see ehitataks järgmisel muudatusel uuesti. Iga toiming ütleb seda.
- Piirid on 32 modifikaatorit ja 1000 koopiat. Venitamiseks tehtud komponent (Venita) ja pinu ei saa veel jagada sama definitsiooni.

## Alamjaotuspind

Alamjaotus silub võrku Catmull-Clarki meetodil: iga tahk muutub nelinurksete tahkudeks ning iga tase teeb neid neli korda rohkem. Kast kahe või kolme tasemega näib juba ümarana, ja sa jätkad kasti muutmist.

- **Tasemed vaates** seab, kui sile see on.
- **Tasemed renderdustes** seab, kui siledad on renderdatud pildid ja videod; renderdused võivad kasutada rohkem tasemeid kui vaade.
- **Renderdused tõelisel siledal pinnal** paneb renderdatava võrgu punktid tasemete piirpinnale, nii et isegi kaks taset renderduvad sama siledalt kui palju.
- **Vagud** hoiavad servad teravana: Võrgu tööruumis vali servad ja kasuta {{ui:Crease}}-t (1 jääb terav, 0,5 ümardub veidi, 0 on sile). Vaata [Võrgu muutmine](topic:mesh-edit).
- **Alanda vaate taset suurel võrgul:** kui nõutud tasemed annaksid rohkem tahke, kui see arvuti vaade hästi käsitleb, näitab vaade madalamat taset ja ütleb, millist. {{ui:Apply}} kasutab alati kõiki tasemeid. Tahkude arvu määrab sinu masina klass jaotises {{ui:Settings}} › Renderdamine › Sinu masin.
- Avatud ääred säilitavad oma nurgad ja jäävad oma servade joonele.

## Painutamine võre-kestaga

1. Lisa modifikaator {{ui:Lattice}} ja vajuta {{ui:Add a lattice cage round the mesh}}. Võrgu ümber ilmub 3 × 3 × 3 punktist kest, mis on joonistatud joontena.
2. Ava kest Võrgu tööruumis (topeltklõps sellel) ja liiguta selle punkte. Võrk järgib sujuvalt.

:::tip
Kest on tavaline võrk: peida see sildiga, kui oled lõpetanud.
:::

## Suured võrgud

Väikesed pinud arvutatakse kohe. Suur arvutatakse taustal kõigil sinu arvuti tuumadel: vaade näitab viimast tulemust, kuni uus on valmis. Boole'i jaoks laaditakse tahkkeha modelleerija esimesel korral; vaade ütleb seda hetkeks.

## Mida modifikaatorid veel ei tee

- Kaalud tipu kohta (kaalude langus võrgule värvituna) Nihutuse, Silu ja Pinnale tõmbamise jaoks.
- Muud modifikaatorid kui Mõõtkava ja lineaarne Massiiv push/pull-geomeetrial (grupid ja komponendid): muuda see enne võrguks ({{ui:Convert to mesh}}). Peegeldus, ringi- või kõvera-massiiv, Painutus ja Kitsendus gruppidel tulevad hiljem.
