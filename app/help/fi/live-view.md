---
title: Live-näkymä
summary: Ikkuna mallin vieressä, joka näyttää sen reaaliaikaisella ilmeellä auringon ja varjojen kanssa ja seuraa jokaista muutosta. Kävele sen läpi ja aseta vuorokaudenaika ja kuukausi.
keywords: jaa, panoraama, 360, kierros, virtuaalikierros, itsenäinen katselin, offline-katselin, lähetä asiakkaalle, video, kävelyvideo, sirottelu, ruoho, niitty, metsä, kivet, kasvit, puut, väkijoukko, maalaa kasvit, live-näkymä, reaaliaika, reaaliaikarenderöinti, kävely, läpikävely, ensimmäinen persoona, esitys, asiakas, toinen näyttö, toinen ikkuna, näyttö, vuorokaudenaika, aurinko, vuodenaika, kuukausi, varjot, ympäristön okkluusio, heijastukset, heijastuva valo, globaali valaistus, webgpu, webgl
from: fca3b0d6
---

{{ui:Vie}} › {{ui:Live-näkymä}} avaa paneelin sovelluksen päälle. Se näyttää mallin reaaliaikaisella ilmeellä: taivaan ja auringon mallisi paikan ja päivämäärän mukaan, auringon varjot, pinnoille antamasi ilmeet ja materiaalit, lamput sekä seinistä ja lattioista heijastuvan valon. Se seuraa tekemiäsi asioita: kun käännät näkymää, sekin kääntyy, ja kun muutat mallia, muutos näkyy hetken kuluttua. Mitään ei lähetetä mihinkään.

## Avaa se

1. Valitse {{ui:Vie}} › {{ui:Live-näkymä}}. Paneeli avautuu oikeaan alakulmaan.
2. Siirrä paneelia vetämällä sen otsikkopalkista ja suurenna vetämällä sen kulmasta.
3. {{ui:Uusi ikkuna}} siirtää sen omaan ikkunaansa toista näyttöä varten. {{ui:Vie}} › {{ui:Live-näkymä uudessa ikkunassa}} avaa sen suoraan siellä. Jos selain estää ponnahdusikkunat, se avautuu paneelina.
4. {{ui:Sulje}} sulkee sen.

## Säätimet

| Säädin | Mitä se tekee |
|---|---|
| {{ui:Seuraa näkymää}} | Päällä: live-näkymä katsoo samaan suuntaan kuin ModelCraftin näkymä. Kävely kytkee sen pois |
| {{ui:Kävele}} | Kävele mallin läpi (alla) |
| {{ui:Painovoima}} | Kävellessä: seiso lattioilla ja kiipeä portaita. Pois: lennä |
| {{ui:Aika}} | Vuorokaudenaika tunneittain, 05:00–21:00. Aurinko liikkuu vetäessäsi |
| {{ui:Kuukausi}} | Kuukausi (sen 21. päivä), jotta näet auringon talvella ja kesällä |
| {{ui:Laatu}} | {{ui:Tälle tietokoneelle}} ([koneesi](topic:your-machine) saa), tai {{ui:Matala}}, {{ui:Keskitaso}} tai {{ui:Korkea}} |

Alareunan rivi kertoo, millä näkymä piirretään (WebGPU tai WebGL 2), laadun ja heijastuneen valon.

## Kävele mallin läpi

1. Käännä päänäkymä kohtaan, johon haluat seisoa, ja valitse {{ui:Kävele}}. Seisot näkymän silmäpisteen alapuolella olevalla lattialla, 1.6 m korkeana.
2. Napsauta live-näkymää ja käytä sitten {{key:W}} {{key:A}} {{key:S}} {{key:D}} tai nuolinäppäimiä. Juoksu onnistuu pitämällä {{key:Shift}} pohjassa. Katsele ympärillesi vetämällä.
3. Enintään 40 cm korkuiset askelmat kiivetään (portaat). Sitä korkeammat ovat seiniä. Seinät pysäyttävät sinut, ja liu'ut niitä pitkin.
4. Kun {{ui:Painovoima}} on pois päältä, lennät: {{key:E}} nousee, {{key:Q}} laskee.
5. {{key:Esc}} lopettaa kävelyn.

## Sirottele kasveja, kiviä ja ihmisiä

{{ui:Levitä}} live-näkymän palkissa avaa sirottelupaneelin kuvan viereen. Sirotteluryhmä levittää kohteita ympäristökirjastosta (puut, pensaat, ruoho, kukat, kivet, ihmiset, autot) osaan mallia. Kohteet piirretään vain live-näkymässä: ne eivät ole geometriaa mallissa, eikä päänäkymä näytä niitä.

1. **Täytä pinnat:** valitse ModelCraftissa pinnat (tai ryhmä, esimerkiksi maasto) ja valitse {{ui:Täytä valinta}}. Ryhmä peittää ne.
2. **Maalaa:** valitse {{ui:Maalaa}} ja vedä live-näkymän yli. Kun pinnat on valittu, maali osuu vain niihin. Kun mitään ei ole valittu, se osuu kaikkeen siveltimen alla olevaan, myös maahan. {{ui:Siveltimen koko}} asettaa siveltimen, ja {{ui:Pyyhekumi}} poistaa maalatut kohdat.
3. Ruksi, mitä sirotellaan. Kunkin vieressä oleva luku on sen paino: 3 ja 1 tarkoittaa kolmea ensimmäistä jokaista toisen kohdetta kohden.

| Säädin | Mitä se tekee |
|---|---|
| {{ui:Per m²}} | Kuinka monta kohdetta jokaisella neliömetrillä on |
| {{ui:Pysy loitolla (m)}} | Ei kohteita tätä lähempänä muita kohteita, eikä katon tai pöydän alla. 0 kytkee pois |
| {{ui:Kierto (°)}} | Kuinka paljon kukin kohde kääntyy satunnaisesti pystyakselin ympäri |
| {{ui:Jyrkin (°)}} | Ei kohteita, joissa pinta on jyrkempi |
| {{ui:Koko}} | Pienin ja suurin koko kohteen oman koon kertoimena |
| {{ui:Korkeus mistä, mihin (m)}} | Vain näiden korkeuksien välillä (tyhjä = mikä tahansa) |
| {{ui:Kallistu pinnan mukana}} | 0 pitää kohteet pystyssä; 1 asettaa ne kohtisuoraan rinnettä vasten |
| {{ui:Siemen}}, {{ui:Sekoita}} | Sama siemen tuottaa aina saman sirottelun. {{ui:Sekoita}} valitsee toisen |

Ryhmät tallennetaan `.modelcraft`-tiedostoon, ja ne seuraavat peittämiään pintoja, kun muutat niitä. Enimmäismäärän, jonka live-näkymä piirtää, määrää [koneesi](topic:your-machine) taso: 20 000 kohdalle {{ui:Vain suoritin}}, 100 000 kohdalle {{ui:Näytönohjain, perus}} ja miljoona kohdalle {{ui:Näytönohjain, korkea}}. Paneeli kertoo, montako kohdetta on sijoitettu ja montako tiheys vaatii. Vähemmän sijoitetaan, kun raja tulee vastaan tai kun kohteet jäävät pois. Kameran lähellä olevat kohteet piirretään omina itsenään, kaukaiset yksinkertaisina muotoina omilla väreillään.

:::note
Sirotellut kohteet ovat live-näkymässä (ja sen kävelyssä, panoraameissa ja itsenäisessä katselimessa). Kuvan renderöinti ei piirrä niitä vielä.
:::

## Jaa: panoraamat, kierrokset, katselin, video

{{ui:Jaa}} live-näkymän palkissa tekee tiedostoja live-näkymästä. Kaikki tehdään tällä tietokoneella. Mitään ei lähetetä mihinkään.

| Valinta | Mitä saat |
|---|---|
| {{ui:360° panoraama}} | 360° kuva siitä kohdasta, jossa näkymä on (tai missä kävelet), equirectangular-PNG-muodossa, jonka panoraamakatselimet ja useimmat kuvapalvelut avaavat |
| {{ui:Lisää tämä paikka kierrokseen}}, sitten {{ui:Tallenna kierros}} | Yksi verkkosivu, jolla on panoraama jokaisessa kohdassa ja nuolet niihin kohtiin, joita kukin näkee (väliin jäävä seinä piilottaa nuolen) |
| {{ui:Tallenna katselin}} | Yksi verkkosivu, jolla on malli tässä reaaliaikaisessa ilmeessä: käännä sitä, kävele sen läpi ja hyppää tallennettuihin kohtauksiin. Se avautuu offline-tilassa selaimessa, jossa on WebGPU tai WebGL 2, kansiosta, USB-muistitikulta tai sähköpostista, ilman asennusta ja tiliä. Se ei lataa mitään internetistä |
| {{ui:Video polusta}} | Aikajanan kameraradan (tai tallennetut kohtaukset järjestyksessä) video tässä reaaliaikaisessa ilmeessä, live-näkymän kokoisena: WebM tai MP4 siinä missä selain pystyy niitä tekemään, muuten numeroidut kuvat ZIP-tiedostossa |

Panoraaman koko seuraa laatua: 1024, 2048 tai 4096 pikseliä leveä, kun laatu on Matala, Keskitaso tai Korkea. Katselintiedosto on noin 5 MB plus malli.

:::note
Kierros ja katselin on tehty näyttämiseen, ei muokkaamiseen: ne säilyttävät mallin sellaisena kuin se on tallennushetkellä.
:::

## Laatu

| | Matala | Keskitaso | Korkea |
|---|---|---|---|
| Auringon varjot | yksi varjokartta | kolme kaskadia | neljä kaskadia |
| Ympäristön okkluusio (kontaktivarjot) | | ✓ | ✓, hienompi |
| Heijastukset metallissa | | | ✓ |
| Hehku (kun Renderöi kuva asettaa sen) | | ✓ | ✓ |
| Reunat tasoitettu | FXAA | usealla kehyksellä (TAA) | usealla kehyksellä (TAA) |
| Heijastunut valo | karkea | hienompi | hienoin |

{{ui:Tälle tietokoneelle}} valitsee Matala tietokoneella, jossa ei ole käyttökelpoista näytönohjainta, Keskitaso sisäisellä grafiikkapiirillä ja Korkea erillisellä näytönohjaimella. Matala on tarkoitettu kannettavalle tietokoneelle, jossa on 8 GB muistia ja ei näytönohjainta.

## Heijastunut valo

Valo, joka heijastuu auringonvalaistulta seinältä lattialle, ja huoneen tummempi sisäosa lasketaan samalla polunseurantamoottorilla, joka tekee [renderöityjä kuvia](topic:render). Se renderöi pienen panoraaman pisteissä mallin läpi taustalla jokaisella suorittimen ytimellä. Sen työskennellessä alarivi kertoo {{ui:Heijastunut valo: 40 %}}. Kun se on valmis, näkymä ottaa sen käyttöön. Muutoksen jälkeen se alkaa alusta.

:::note
Tämä on likiarvo live-näkymälle, ei renderöity kuva: pisteiden väliset pienet yksityiskohdat saavat lähimpien pisteiden heijastuneen valon. Valmista kuvaa varten käytä [Renderöi kuva](topic:render).
:::

## Kirkkaus ja värit

Live-näkymä käyttää samaa kirkkautta, valkotasapainoa, kontrastia ja näkymämuunnosta (ACES, AgX, filmic tai vakio) kuin [Renderöi kuva](topic:render). Aseta ne siellä, ja live-näkymä seuraa.

:::note
Selaimet eroavat toisistaan. Missä selaimessa on WebGPU (Chrome ja Edge Windows-, macOS- ja ChromeOS-järjestelmissä, Safari 26), live-näkymä käyttää sitä. Muualla (useimmat selaimet Linux-järjestelmissä, vanhemmat Apple-järjestelmät) se käyttää WebGL 2:ta ja näyttää samalta.
:::
