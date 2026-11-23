---
title: Mitä uutta versiossa 0.9 (aiemmin)
summary: Tulostusvaihe omalla viipaloijalla ja lähetys USB:llä, Klipperiin, OctoPrinttiin ja PrusaLinkiin, hartsiviipalointi ja tiedostolisäosat, materiaalivirta, digitaalinen kaksonen ja tehdaslattian lisäosat, NURBS-pyöristykset, paksunnus ja skannauksen sovitus, AR työmaalla sekä kymmenen kaarimenetelmää.
keywords: mitä uutta 0.9, aiempi julkaisu, mitä uutta, julkaisutiedot, muutosloki, 0.9, tulostusvaihe, 3D-tulostus, lähetä 3D-tulostimelle, viipaloija, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, hartsi, hartsitulostus, goo, sl1, ctb, anycubic, valotustesti, materiaalivirta, digitaalinen kaksonen, tehdaslattia, plc, kuljetin, nurbs, pyöristys, paksunna, skannauksen sovitus, ar, työmaa, kaarimenetelmät, yksiköt, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, renderointi, moottori, avaa, usd, gltf, unreal, lisäosamoottori, pinnat, loft, sweep, jatkuvuus, g0, g1, g2, zebra, step, iges, sano kohtaus, kohtaus, sää, vuorokaudenaika, vuodenaika, avustaja, materiaali valokuvasta, valokuva, luonnoskuva, kalusta, kalusta huone, vinoleikkaus, jako, tulostustarkistus, ongelmat, ominaisuusruudukko, valot, kielet, syöttölaitteet, työkalurivit, dwg, live
from: 2717d1b1
---

Tämä on luettelo muutoksista: ModelCraft 0.9 verrattuna versioon 0.8.1. ModelCraft ulottuu nyt tulostimeen ja tehdaslattiaan: voit asettaa kappaleita tulostusalustalle ja lähettää ne ilman vientiä, viipaloida filamentille tai hartsille ja suunnitella materiaalinkäsittelylinjan. Tämä on CadCraft Studio 0.9 ja sen kahdeksan sovellusta; useimmat alla olevat uudet ominaisuudet ovat lisäosia.

## Uutta

### 3D-tulostus

- **Tulostusvaihe.** Napsauta työkalurivin {{ui:Tulostusvaihe}} -painiketta. Lisää kirjaston kohteita tulostimen alustalle, järjestele ne, tarkastele viipaloituja kerroksia ja paina {{ui:Lähetä 3D-tulostimelle}}, ilman STL-tiedoston vientiä. Se kuuluu 3D-tulostuslisäosaan, joka on oletuksena päällä ja jonka voi poistaa kuten mitä tahansa lisäosan. Katso [Aseta kohteet tulostusalustalle ja lähetä ne tulostimelle](topic:print-stage).
- **Oma filamenttiviipaloija.** {{ui:CadCraft basic (included, fastest)}} on viipaloija kortin **Viipaloija**-luettelossa: seinät, kuori, täyttö, tuet ja helma, työntekijäsäikeessä, jotta sivu pysyy käytettävänä. {{ui:Esikatsele kerroksia}} **Kerros**-liukusäätimellä näyttää kerrokset ennen lähettämistä. Tulostinprofiileissa, kuten Ender-3- ja Prusa MK4 -tyyleissä, on omat aloitus-G-koodinsa.
- **Lähetys.** USB:n kautta (Chrome tai Edge tietokoneella, sivu pidettynä auki) tai verkossa olevaan Klipperiin (Moonraker), OctoPrinttiin tai PrusaLinkiin. Mikään ei yhdisty tai lähetä ilman napsautusta, ja lähettäminen kysyy ensin.
- **Muut viipaloijat.** Kiri:Moto, PrusaSlicer ja OrcaSlicer ovat omia lisäosiaan, oletuksena pois päältä. Lisää ne kortilta tai kohdasta {{ui:Asetukset}} › {{ui:Lisäosat}}. PrusaSlicer ja OrcaSlicer käyttävät CadCraft Studion kanssa asennettua omaa kopiotasi. Bambu Lab -tulostimien lisäosa viipaloi OrcaSlicerillasi ja sen P2S-esiasetuksilla ja vaatii tietokoneella Studion.
- **Hartsitulostus.** Hartsilisäosat (oletuksena pois päältä) tekevät kerroskuvia tulostimen näytölle, ja niissä on ontelointi ja tuuletusreiät, alusta ja tuet, kerrosten esikatselu sekä aika, hartsi ja kustannus. Tiedostomuoto-lisäosat kirjoittavat Elegoo GOO-, SL1-, Chitubox- (CBDDLP ja CTB 2–5) ja Anycubic- (PWMX ja PWS) -tiedostoja. Hartsin valotustesti tekee viiden valotuksen portaat. Katso [Viipalointi hartsitulostimelle](topic:resin-printing).
- **Ennallaan.** {{ui:Vie}} › {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}, tulostustyökalut ja Jako tulostusta varten toimivat kuten versiossa 0.8. Katso [Valmistele malli 3D-tulostusta varten](topic:print-3d).

### Materiaalivirta, digitaalinen kaksonen ja tehdaslattia

Nämä kolme ovat lisäosia, jotka ovat pois päältä, kunnes kytket ne päälle kohdasta {{ui:Asetukset}} › {{ui:Lisäosat}}. Kullakin on oma ohjeensa, kun se on päällä.

- **Materiaalivirta.** Materiaalivirta-niminen paneeli asettaa kuljettimet, asemat, puskurit ja AGV-reitit 3D-näkymään, ajaa siemennetyn simulaation, toistaa sen ja näyttää läpimenon, läpimenoajat ja jonot. Tulokset tallennetaan CSV-tiedostoina. Tilaukset voivat tulla CSV-tiedostosta. Robottisoluja voi tarkistaa ja viedä. PLC-yhteydessä on pehmeä tila ja todellinen tila Modbus TCP:n yli, ja se toimii vain CadCraft Studiossa.
- **Digitaalinen kaksonen.** Lukee Materiaalivirta-asettelun ja ajaa sen päällä pehmeää PLC:tä, jossa voit pakottaa vikoja, tehdä varastotestejä, vertailla asetteluja ja nähdä osaluettelon.
- **Tehdaslattia.** Muuttaa asemat koneiksi ja soluiksi, lukee niitä livenä tai simulaattorista ja pitää työjonoa sekä yksinkertaista OEE:tä yllä. Se vain lukee: tämä versio ei voi kirjoittaa koneelle tai PLC:lle.

### Pinnat, mallit ja piirustus

- **NURBS-pyöristykset, paksunnus ja Boolen-operaatiot.** Kohdan {{ui:Pinnat}}-paneelissa ovat {{ui:Pyöristys pintojen välillä}}, {{ui:Pyöristä useita särmiä}}, {{ui:Paksunna kiintokappaleeksi}} sekä Yhdiste, Vähennys ja Leikkaus, kullakin mitattu poikkeama. Katso [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).
- **Pintojen sovitus skannaukseen.** Valitse skannattu verkko ja käytä **Skannaus**-ryhmän {{ui:Sovita pinnat skannaukseen}} -painiketta ja sen jälkeen {{ui:Ompele pinnat kiintokappaleeksi}}. Kyse on ensimmäisestä sovituksesta, ei täydestä takaisinmallinnuspaketista.
- **Live-yhteys .3dm-mallintajaan.** Yksisuuntainen: Rhino 8 tai Grasshopper, ja se vaatii CadCraft Studion samalle tietokoneelle. Katso [Pidä .3dm-malli ajan tasalla](topic:live-3dm-link).
- **Mallin katselu työmaalla.** {{ui:Näkymä työmaalla (AR, puhelin)}} {{ui:Näkymät}}-valikossa toimii Android-puhelimella Chromella. Katso [Katso malli työmaalla Android-puhelimella (AR)](topic:ar-on-site).
- **Kaarimenetelmät.** Pudotusvalikko {{ui:Kaaren menetelmät}} tarjoaa kymmenen tapaa piirtää kaari, mukaan lukien {{ui:3-Point}} ja {{ui:Start, Center, End}}.
- **Lisää yksiköitä.** Painot (kg, lb, t, ton) ja lämpötilat (astetta C, F, K ja R) tunnistetaan kohdissa, joihin kirjoitat arvoja yksiköineen.

## Kaikissa sovelluksissa

- **Työkaluvihjeet.** Painikkeiden kohdistusteksti ja katkenneet nimet näkyvät Bootstrap-työkaluvihjeinä.
- **Suljettava aloitusvihje.** Tyhjän piirustusalueen vihjekortissa on pieni sulkemispainike (x). Se pysyy suljettuna, ja komentopaletti voi näyttää sen uudelleen.
- **Vierittävät välilehtirivit.** Paneelin välilehtirivi, joka ei mahdu, vierittyy katkaisemisen sijaan.
- **Välilehtien otsikot.** Kun asiakirja on auki, selainvälilehti alkaa asiakirjan nimellä, sitten ModelCraft ja CadCraft. Piste tulee ensimmäiseksi, kun muutoksia ei ole tallennettu.
- **Asettelu.** {{ui:Asetukset}} › {{ui:Yleiset}} › Asettelu sisältää asettelut pudotusvalikossa, ja siinä on valinta käyttää asettelua vain tässä sovelluksessa sekä painike asettelun palauttamiseen.
- **Kielet.** Asetusten kieliluettelo seuraa version sisältämiä kielitiedostoja. Muut kielet kuin englanti ovat konekäännöksiä luonnoksina.
- **Live ja Kirjasto.** Live TeamWork näyttää elävät kohdistimet ja nimet, ja kirjastokokoelmat antavat jokaiselle sovellukselle oletuskokoelman.

## Korjattu

- {{ui:Toista}} muuttuu {{ui:Tauko}}-painikkeeksi animaation toistuessa, ja {{key:Space}} toistaa ja keskeyttää aikajanan ollessa auki.
- Kuvan renderöinti palaa WebGL:ään, kun näytönohjain ei voi käynnistää polunseurantaa. Live-renderöintinäkymä voi yhä näyttää virheen; tätä ei tarkistettu Windows-koneella kyseisellä ajurilla.
- Materiaalivirran todellinen tila muodostaa yhteyden uudelleen sen jälkeen, kun yhteys katkesi PLC:n poikkeusvastauksiin.

## Rehelliset rajat

- Oikealla tulostimella ei ole tulostettu mitään: ei filamenttia, ei hartsia, ei Bambu Connectin kautta. Hartsitiedostot on luettu takaisin vain CadCraftin omilla lukijoilla.
- Digitaalista kaksosta ja tehdaslattiaa on testattu vain simulaattoreita ja tunnettuja vastauksia vastaan, ilman oikeaa PLC:tä, linjaa tai protokollaa. Ne ovat tarkistusapuja, eivät turvallisuusvalidointia. Fysiikka kattaa vain laatikot, enintään kahdeksan kuormaa.
- Rhino- ja Grasshopper-yhteyttä ei ole koskaan ajettu oikeissa ohjelmissa.
- Muut kielet kuin englanti ovat konekäännöksiä luonnoksina.

## Aiemmin: 0.8 ja 0.8.1

Tämä kuvaa, mitä muuttui versiossa 0.8 (2026-11-01) ja 0.8.1 (2026-11-02) verrattuna versioon 0.7. {{ui:Renderöi kuva…}}-valintaikkuna voi nyt lähettää kohtauksen toiseen ohjelmaan, {{ui:Pinnat}}-paneeli tekee sujuvia vapaamuotoisia pintoja, ja yhdistämäsi avustaja voi asettaa koko kohtauksen yhdellä lauseella.

### Uutta

**Renderöinti**

- **Moottorivalinta.** {{ui:Renderöi kuva…}}-valintaikkunassa on **Moottori**-luettelo Tilan yläpuolella. Omat kaksi moottoria, Fast ja Path tracer, ovat oletuksena ja toimivat kaikkialla. Muut vaihtoehdot tallentavat kohtauksen paketiksi (malli USD-tiedostona sekä asetustiedosto, jossa ovat tarkat materiaaliarvot, päällä olevat valot, aurinko, taivas, valotus ja kamera), jotta sen voi viedä toiseen ohjelmaan. Toisella ohjelmalla piirretyssä kuvassa kerrotaan, mikä ohjelma ja versio sen teki. Katso [Valitse, mikä ohjelma piirtää kuvan](topic:render-engines).
- **Avaa toisessa ohjelmassa.** Moottori-luettelo voi tallentaa kohtauksen USD-tiedostona, glTF-tiedostona (`.glb`) tai Unreal-projektikansiona (`.zip`) selaimessa ja CadCraft Studiossa. Studiossa se voi myös käynnistää usdviewin tai tietokoneen oman ohjelman tiedostolle. Katso [Avaa kohtaus toisessa ohjelmassa](topic:render-open-in).
- **Lähetys pelimoottoriin Studiosta.** Studio kirjoittaa kohtauksen Unreal Engine -projektiin ja pitää sen ajan tasalla joka lähetyksellä, vain yhteen suuntaan. Omat muokkauksesi ovat tasossa, jota CadCraft ei koskaan kirjoita. Katso [Lähetä kohtaus pelimoottoriin](topic:render-unreal).
- **Lisäosien moottorit.** Lisäosa voi lisätä moottorin luetteloon. JavaScriptillä kirjoitettu piirtää selaimessa ja Studiossa; ohjelmaa ajava vaatii Studiossa sinun lupasi. Katso [Piirrä kuva toisella ohjelmalla](topic:render-other-program) ja [Lisää renderöintimoottori lisäosalla](topic:render-engine-addons).
- **Sano kohtaus.** Kerro yhdistetylle avustajallesi ”hämärä, kevyt sade, syksyiset puut, ihmisiä aukiolla”, ja ModelCraft asettaa kohtauksen yhdellä askeleella: aurinko siirtyy päivämäärään ja kellonaikaan, jotta varjot seuraavat, taivas muuttuu, märät pinnat ilmestyvät, ja puut ja ihmiset sijoitetaan todellisina kohteina tunnisteisiin, joita voit piilottaa, siirtää tai poistaa. Vuorokaudenaika, päivämäärä tai vuodenaika sekä sää (selkeä, pilvinen, sumu, kevyt sade, sade, myrsky) toimivat myös yksinään, ja myöhempi pyyntö muuttaa samaa kohtausta. Sumu näkyy laadukkaassa kuvassa näytönohjaimella; muut moottorit näyttävät taivaan, valon ja märät pinnat. Sadetta ei piirretä putoavina viiruina.

**Materiaalit**

- **Materiaali yhdestä valokuvasta.** Anna ModelCraftille pinnan valokuva (seinä, lattia, kivi), ja se tekee laatoitettavan materiaalin: valaistus valokuvan yli tasoitetaan, reunat sovitetaan yhteen, ja värikartta, karkeuskartta sekä normaalikartta lasketaan kuvasta. Kyse on tavallisesta kuvankäsittelystä omalla kuvallasi, ilman koulutettua mallia. Karkeus on arvio. Tasainen, neliömäinen ja suoraan edestä otettu valokuva antaa parhaan laatan; voimakas kuvio, kuten tiilet, voi näyttää pehmeän haamun kohdassa, jossa liitos on sekoitettu.

**Pinnat**

- **Vapaamuotoiset pinnat.** {{ui:Pinnat}}-paneeli tekee NURBS-käyriä ja rajaamattomia pintoja: pisteiden kautta kulkevia käyriä, loft-, suora-, pursota- ja kierrä-pintoja, pyyhkäisyjä yhden tai kahden kiskon pitkin, pintoja käyrän verkosta, laastareita neljästä reunasta sekä sovitus ja sulautus. Jokainen yhteinen reuna mitataan tarkoilla pinnoilla arvoina G0, G1 tai G2 (rako, kulma, kaarevuushyppäys), ja reuna, joka on huonompi kuin pyysit, näkyy Ongelmat-paneelissa **Sovita**-korjauksella. Zebra-raidat ja kaarevuusvärit piirretään tarkoista pinnoista. STEP- ja IGES-tiedostot viedään ja tuodaan. Katso [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).

**Työmaa ja huoneet**

- **Luonnoskuva maanpinnalle.** {{ui:Tiedosto}} › {{ui:Tuo luonnoskuva…}} muuttaa käsin piirretystä luonnoksesta otetun puhelinkuvan reunoiksi maanpinnalle ilmoittamassasi mittakaavassa: yksi ryhmä, jossa on tunniste kullekin kynän värille. Paperi löydetään ja suoristetaan tietokoneellasi, eikä mitään lähetetä minnekään. Katso [Mallinna asemapiirroksen päällä](topic:site-plan).
- **Kalusta huone.** Valitse lattia ja käytä {{ui:Järjestä}} › {{ui:Kalusta huone…}}. Makuuhuoneen, olohuoneen, ruokailuhuoneen, keittiön, kylpyhuoneen tai toimiston kalusteet sijoitetaan säännöillä seinien viereen ja pois ovien ja ikkunoiden edestä, yhteen ryhmään, jonka voit poistaa yhdellä askeleella. Se on oletusasettelu, jonka voit tarkistaa, ei suunnitelma. Katso [Aloituskirjasto](topic:starter).

**3D-tulostus**

- **Vinot leikkaukset.** Jako tulostusta varten voi kallistaa leikkauksiaan enintään 60 astetta, mikä antaa osille enemmän liimauspintaa. Liittimet ovat suoraan leikkauspintaan nähden. Katso [Jaa malli tulostusta varten](topic:print-split).
- **Tulostustarkistus Ongelmat-paneelissa.** 3D-tulostustarkistuksen löydökset näkyvät Ongelmat-paneelissa merkkeinä mallin päällä, ja Korjaa korjaa ne sieltä käsin. Katso [Tuet, seinämän paksuus, ontelointi ja korjaus](topic:print-tools).

**Kaikissa sovelluksissa**

- **Kielet.** Ohjeet ja sovellukset ovat 54 kielellä. Kymmenen on uutta: liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili ja uzbek. Muut kielet kuin englanti ovat konekäännöksiä luonnoksina, kunnes äidinkielinen puhuja on lukenut ne, ja ohjeaiheet voivat yhä olla englanniksi.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, peliohjain ja MIDI-säätimet voivat ohjata sovelluksia, kaikkia tai yhtä.
- **Työkalurivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › Työkalurivit asettaa Rivitys (kuten ennen), 2 riviä tai 1 rivi. Palkki, joka ei mahdu, vierittyy sivusuunnassa sen sijaan, että veisi tilaa piirustukselta. Rivitys pysyy oletuksena.
- **Ominaisuusruudukko.** ModelCraftin valokenttien ruudukko on yhteinen: taitettavat ryhmät, nimi- ja arvosarakkeet sekä Tiivis tiheys. Kirjoitettu laskenta, kuten `2*450`, toimii edelleen.
- **Ongelmat.** Ongelmat-paneeli (sovellusrivin varoituspainike) on yhteinen kaikille sovelluksille. ModelCraftissa siinä ovat tulostustarkistus ja pintojen jatkuvuusvaroitukset.
- **Live.** Live TeamWork -istunto näyttää, kuka on missä. Katso [Mallinna yhdessä Live TeamWorkin kanssa](topic:work-live).
- **Lisäosat.** Lisäosat voivat lisätä renderöintimoottoreita, kuten yllä.
- **Yhdistä tekoälysi.** Työkalusopimus ja kahdeksan sovelluksen tarkistukset menevät läpi, yhteensä 454 työkalua. Yhden napsautuksen yhteyttä Studiossa, isännöityä liitintä selainavustajille, omaa avainta Studiossa ja julkaistua pakettia ei vielä luvata. Sovelluksissa ei ole omaa tekoälyä. Katso [Käytä ModelCraftia tekoälyavustajien kanssa](topic:use-with-ai-assistants).

### Korjattu versiossa 0.8.1

- **DWG-luokkaosio.** DWG-tiedoston luokkaosio luettiin väärällä tyypillä, mikä saattoi rikkoa tiedoston tuonnissa. Se luetaan nyt oikein ModelCraftissa ja muissa sovelluksissa, jotka lukevat DWG-tiedostoja.
- **Tabletit pystyasennossa.** Vapaa ruudukon korkeus menee piirtoalueelle, ja arkkiasettelu alkaa 760 pikselin leveydestä tai kapeammasta. Myös ModelCraftin tyylitiedostossa on muutos.
- **Kieli Studiossa.** CadCraft Studio ja pakatut versiot voivat vaihtaa kieltä käynnissä ollessaan; aiemmin ne olivat vain englanniksi. Tätä ei ole vielä testattu kaikilla alustoilla: kerro meille, jos kieli ei vaihdu.

### Ei vielä tässä versiossa

- **Ei koodiallekirjoitusta.** Windows voi näyttää SmartScreenin: valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa napsauta hiiren oikealla ja valitse {{ui:Avaa}}. Kauppaversiot ovat pidossa, eikä iPad- ja iPhone-versiota rakennettu uudelleen versiolle 0.8.1.
- Toisen ohjelman piirtämä kuva ilman renderöintimoottorilisäosaa, panoraama- tai stereokamerat sekä taivaskuva toisen ohjelman kautta sekä liitännäinen, joka avaa Unreal-näyttämön, eivät ole vielä mukana. Tiedostot kirjoitetaan; liitännäistä ei ole julkaistu, eikä sitä ole ajettu Unrealissa.
- Vapaamuotoiset pinnat: G3 ja A-luokka eivät ole mitattuja tai väitettyjä, ja rajaus ja kiintokappaleet tulevat myöhemmin.
- Muiden ohjelmien kuvat eivät ole pikseli pikseliltä samoja kuin omamme: vain kamera, aurinko, valot ja valotus vastaavat.
- Versiossa 0.8.1 tehtyä kielenvaihdon korjausta Studiossa ei ole testattu kaikilla alustoilla.

Kaikki muu on luettelossa [Ei vielä toteutettu](topic:not-built-yet). Edellisen julkaisun tiedot löytyvät kohdasta [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
