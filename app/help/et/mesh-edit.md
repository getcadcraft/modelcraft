---
title: Võrgu muutmine võrgu tööruumis
summary: Vali võrgu tipud, servad ja tahud, teisalda neid ning tõmba välja, sissenihe, faasi, lõika, ühenda, täida ja ühenda sillaga, kumbagi klahvistiiliga.
keywords: võrk, võrgurežiim, võrgu tööruum, tipp, tipud, serv, servad, tahk, tahud, tõmba välja, sissenihe, faas, ahellõige, nuga, poolita, keera, ühenda, lahusta, täida, ruudustikuga täitmine, sild, alajaota, libista, proportsionaalne muutmine, langus, tööruum
from: 92a372dd
---

**Võrgu tööruum** muudab [võrku](topic:meshes) punkt-punktilt: selle tippe, servi ja tahke. Push/pull-geomeetria jääb **Mudeli** tööruumi.

## Avamine

- Vali tööriistariba vasakus servas olevast loendist {{ui:Workspace}} {{ui:Mesh}}. Valitud võrk avaneb muutmiseks; valitud grupp või komponent teisendatakse enne võrguks (üks tagasivõtmise samm).
- Või tee võrgule topeltklõps või vali see modelleerija klahvidega ja vajuta {{key:Tab}}.
- Kui midagi pole valitud, pakub paneel lisamiseks võrke: tasapind, ruudustik, kuup, ring, silinder, koonus, sfäär, ikosfäär ja toroid. Uus võrk läheb sinna, kuhu vaade vaatab, ja avaneb muutmiseks.

{{ui:Back to Model}} (või loendist, modelleerija klahvidega {{key:Tab}}, tõmba-lükka klahvidega ilma valikuta {{key:Esc}}) viib tagasi mudelisse, võrk valituna. Kui Võrgu tööruum on avatud, on ülejäänud mudel tuhmistatud ja mudeli joonistamise tööriistad on eemaldatud.

## Valimine

| Tee | Mida see teeb |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Vali tipud, servad või tahud |
| Klõps | Vali üks; {{key:Shift}}+klõps lisab või eemaldab |
| Lohista kast | Vali see, mis on sees ja nähtav; {{key:Shift}} lisab, {{key:Ctrl}} eemaldab |
| {{key:Alt}}+klõps servale või sellel topeltklõps | Selle servaahel (tahkude režiimis tahkude ahel; avatud servaga äärel terve äär) |
| {{key:Ctrl}}+{{key:Alt}}+klõps servale | Selle servarõngas |
| Kolmikklõps | Kõik, mis sellega on ühendatud |

Valikugrupil {{ui:Select}} on veel {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} ja {{ui:Less}}.

## Teisalda, pööra, mõõtkava

{{ui:Move}}, {{ui:Rotate}} ja {{ui:Scale}} algavad kursorist: liiguta seda, seejärel klõpsa või vajuta {{key:Enter}}, et valik maha panna, või {{key:Esc}}, et tühistada. {{key:X}}, {{key:Y}} või {{key:Z}} (või nooleklahvid) lukustavad telje. Täpse tulemuse saamiseks sisesta kaugus, nurk või kordaja; [arvutused](topic:value-box#calculations) töötavad ka.

**Proportsionaalne muutmine** ({{ui:Proportional}} või paneel): valiku lähedal olevad tipud liiguvad koos teisaldusega, seda vähem, mida kaugemal nad on, kuni sinu seatud ulatuseni, valitud langusega. Lülita sisse {{ui:Only along the mesh}}, et mõõta mööda servi, mitte otse.

{{ui:Slide}} liigutab valitud servaahelat mööda selle kõrval olevaid servi.

## Kuju muutmine

| Tööriist | Teeb |
|---|---|
| {{ui:Extrude}} | Tõmbab valitud tahud välja nende normaali sihis, uute külgtahkudega (või teeb tahud avatud äärservadest). Sisesta kaugus |
| {{ui:Inset}} | Riba valitud tahkude kontuuri sees; vajuta {{key:I}} uuesti iga tahu kohta eraldi |
| {{ui:Bevel}} | Lõikab valitud servad (või {{key:Ctrl}}+{{key:Shift}}+{{key:B}} puhul tipud) etteantud laiusega; ratas või pluss- ja miinusklahvid lisavad lõike ümarale servale |
| {{ui:Loop cut}} | Osuta servale: uued ahelad üle nelinurkade tahkude rõnga; ratas määrab, mitu; klõpsa, et lõigata |
| {{ui:Knife}} | Klõpsa punkte servadel või nurkadel; {{key:Enter}} lõikab sirgelt üle nende vahel olevate tahkude, nagu sa neid näed |
| {{ui:Bisect}} | Joonista ekraanile joon: valitud (või kõik) tahud lõigatakse selle järgi |
| {{ui:Spin}} | Pöörab valitud tahke või avatud servi sinise telje ümber sammudena (ratas määrab need); täispööre sulgeb |
| {{ui:Subdivide}} | Lõikab valitud servad pooleks; terved tahud muutuvad ruudustikuks |
| {{ui:Merge}} | Valitud tipud saavad üheks, oma keskpunkti juures |
| {{ui:Dissolve}} | Võtab valiku välja, aga jätab pinna alles: tahud ühinevad |
| {{ui:Fill}} | Tahk valitud avatud äärest üle (või kahe avatud serva vahele) |
| {{ui:Grid fill}} | Täidab paarisarvu servadega avatud äärt nelinurkade ruudustikuga |
| {{ui:Bridge}} | Ühendab kaks valitud avatud servaahelat tahkudega |
| {{ui:Crease}} | Kui teravaks jäävad valitud servad, kui võrk silutakse alamjaotuspinnaga: liiguta keskpunktist eemale, kasuta ratast (sammud 0,1) või sisesta 0 kuni 1. Paneel näitab valitud servade vagu ja võtab ka sisestatud väärtuse. Vagudega servad joonistatakse magenta värvis |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Pöörab tahud ümber; silub tipud naabrite poole; kustutab valitud režiimi järgi |

Igaüks on üks tagasivõtmise samm. Tekstuurikoordinaadid, värvid ja kaalud liiguvad uutele tahkudele ja tippudele.

## Uuesti võrgustamine

{{ui:Remesh}} teeb kogu võrgu uuesti ühesuurusteks kolmnurkadeks, mille suuruse sa määrad vajutamisel (väiksem on peenem ja aeglasem). See sulgeb augud, ühendab kattuvad tükid ja ühtlustab võrgu, mida skulptimine on venitanud. Teravad servad tulevad välja veidi ümardatult. UV-d, värvid ja vagud alustavad otsast. Üks tagasivõtmise samm.

## Retopoloogia

Uue, puhtama võrgu ehitamiseks üle detailse (skulptuur, skaneering) vali paneelis {{ui:Retopology}} › **Ehita peale** detailne võrk, seejärel:

- **Liigutatud punktid kleepuvad selle peale:** punktid, mida liigutad, ja servad, mida välja tõmbad, asuvad selle pinnal.
- **Pane valitud punktid selle peale** viib valitud punktid kohe selle pinnale (üks tagasivõtmise samm).
- **Näita selle võrgu servi ees** joonistab võrgu, mida sa ehitad, pinna peale, et sa seda näeksid.

## Viimase toimingu reguleerimine

Pärast {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} või {{ui:Spin}} näitab paneel selle seadeid (laius, lõigud, profiil, lõiked jne). Muuda ühte ja toiming tehakse algusest uuesti, endiselt ühe tagasivõtmise sammuna.

## Klahvid

| | Tõmba-lükka klahvid | Modelleerija klahvid |
|---|---|---|
| Teisalda, pööra, mõõtkava | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} kaks korda libistab) |
| Tõmba välja, sissenihe | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Kustuta | {{key:E}} või {{key:Delete}} | {{key:X}} või {{key:Delete}} |
| Vagu | {{key:Shift+C}} | {{key:Shift+E}} |
| Vali kõik, tühista, pööra valik | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Mõlemad | {{key:Ctrl+B}} faas, {{key:Ctrl+R}} ahellõige, {{key:K}} nuga | samamoodi, ning {{key:F}} täida, {{key:M}} ühenda, {{key:Ctrl+X}} lahusta, {{key:L}} / {{key:Ctrl+L}} seotud, {{key:Alt+N}} pööra ümber, {{key:O}} proportsionaalne, {{key:Shift+V}} tipu libistamine |

Vaata ka [Võrgud](topic:meshes), [Võrgule rakendatavad modifikaatorid](topic:modifiers) ja [Veel pole valmis](topic:not-built-yet).
