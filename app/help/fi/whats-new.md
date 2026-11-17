---
title: Uutta versiossa 0.9
summary: Tulostusvaihe omalla viipalointiohjelmalla ja lähetys USB:n, Klipperin, OctoPrintin ja PrusaLinkin kautta, hartsiviipalointi ja tiedostolisäosat, materiaalivirta, digitaalinen kaksonen ja tehdaslattian lisäosat, NURBS-pyöristykset, paksuntaminen ja skannaussovitus, AR työmaalla sekä kymmenen kaarimenetelmää.
keywords: uutta, mitä uutta, julkaisutiedot, muutosloki, 0.9, tulostusvaihe, 3d-tulostus, lähetä tulostimelle, viipalointiohjelma, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, hartsi, hartsitulostus, goo, sl1, ctb, anycubic, valotustesti, materiaalivirta, digitaalinen kaksonen, tehdaslattia, plc, kuljetin, nurbs, pyöristys, paksuntaminen, skannaussovitus, ar, työmaa, kaarimenetelmät, yksiköt, versio, julkaisu, uudet ominaisuudet, 0.8, 0.8.1, renderöintimoottori, moottori, avaa toisessa ohjelmassa, usd, gltf, unreal, lisäosamoottori, vapaamuotoiset pinnat, loft, pyyhkäisy, jatkuvuus, g0, g1, g2, zebra, step, iges, näkymä, sää, vuorokaudenaika, vuodenaika, avustaja, materiaali valokuvasta, valokuva, luonnoskuva, kalustaminen, kalusta huone, vino leikkaus, viipale, tulostustarkistus, ongelmat, ominaisuusruudukko, lamput, kielet, syöttölaitteet, työkalurivit, dwg, live
from: 169048a2
---

Tämä on muuttunut ModelCraftissa versiosta 0.8.1 versioon 0.9. ModelCraft ulottuu nyt tulostimeen ja tehtaan lattiaan: voit asettaa asioita tulostusalustalle ja lähettää ne viemättä mitään, viipaloida filamentille tai hartsille ja asetella materiaalinkäsittelylinjan. Tämä on CadCraft Studio 0.9 ja sen kahdeksan sovellusta; suurin osa alla olevista uusista ominaisuuksista on lisäosia.

## Uutta

### 3D-tulostus

- **Tulostusvaihe.** Napsauta {{ui:Tulostusvaihe}} työkalurivillä. Lisää kirjaston kohteita tulostimen alustalle, järjestele ne, tarkastele viipaloituja kerroksia ja paina {{ui:Lähetä 3D-tulostimeen}}, ilman STL-tiedoston vientiä. Se kuuluu 3D-tulostuksen lisäosaan, joka on oletuksena päällä ja jonka voi poistaa kuten minkä tahansa lisäosan. Katso [Aseta asioita tulostusalustalle ja lähetä ne tulostimelle](topic:print-stage).
- **Oma filamenttiviipalointi.** {{ui:CadCraft basic (mukana, nopein)}} on kortin **Viipalointiohjelma**-luettelon viipalointiohjelma: seinät, pinnat, täyttö, tuet ja helma, taustaprosessissa, jotta sivu pysyy käytettävänä. {{ui:Esikatsele kerroksia}} **Kerros**-liukusäätimen kanssa näyttää kerrokset ennen lähettämistä. Tulostinprofiileissa, kuten Ender-3- ja Prusa MK4 -tyyleissä, on oma aloitus-G-koodinsa.
- **Lähettäminen.** USB:n kautta (Chrome tai Edge tietokoneella, sivu pidettynä auki) tai Klipperille (Moonraker), OctoPrintille tai PrusaLinkille verkossasi. Mikään ei yhdisty tai lähetä ilman napsautusta, ja lähettäminen kysyy ensin.
- **Muut viipalointiohjelmat.** Kiri:Moto, PrusaSlicer ja OrcaSlicer ovat omia lisäosiaan, oletuksena pois päältä; lisää ne kortilta tai kohdasta {{ui:Asetukset}} › {{ui:Lisäosat}}. PrusaSlicer ja OrcaSlicer käyttävät CadCraft Studiosta omaa asennettua kopiotasi. Bambu Lab -tulostimien lisäosa viipaloi OrcaSlicerillasi ja sen P2S-esiasetuksilla, ja se tarvitsee Studion tietokoneella.
- **Hartsitulostus.** Hartsilisäosat (oletuksena pois päältä) tekevät kerroskuvia tulostimen näytölle, ontoksi ja tuuletusreikineen, alustan ja tuet, kerroksen esikatselun sekä ajan, hartsin ja kustannuksen. Tiedostomuotolisäosat kirjoittavat Elegoo GOO, SL1, Chitubox (CBDDLP ja CTB 2–5) ja Anycubic (PWMX ja PWS). Hartsin valotustesti tekee viiden valotuksen portaikon. Katso [Viipaloi hartsitulostimelle](topic:resin-printing).
- **Ennallaan.** {{ui:Vie}} › {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}, tulostustyökalut ja Jaa tulostusta varten toimivat kuten versiossa 0.8. Katso [Valmistele malli 3D-tulostusta varten](topic:print-3d).

### Materiaalivirta, digitaalinen kaksonen ja tehdaslattia

Nämä kolme ovat lisäosia, jotka ovat pois päältä, kunnes kytket ne päälle kohdassa {{ui:Asetukset}} › {{ui:Lisäosat}}, ja kullakin on oma ohjeensa, kun se on päällä.

- **Materiaalivirta.** Paneeli nimeltä Materiaalivirta asettelee kuljettimet, asemat, puskurit ja AGV-reitit 3D-näkymään, ajaa siemenarvoon perustuvan simulaation, toistaa sen ja näyttää läpimenon, toimitusajat ja jonot; tulokset tallennetaan CSV-tiedostoon. Tilaukset voivat tulla CSV-tiedostosta. Robottisoluja voi tarkistaa ja viedä. PLC-yhteydessä on pehmeä tila ja todellinen tila Modbus TCP:n yli, joka toimii vain CadCraft Studiossa.
- **Digitaalinen kaksonen.** Lukee Materiaalivirta-asettelun ja ajaa sen päällä pehmeää PLC:tä, jossa voit pakottaa vikoja, varastotestejä, asettelun vertailun ja osaluettelon.
- **Tehdaslattia.** Muuttaa asemat koneiksi ja soluiksi, lukee niitä live-tilassa tai simulaattorista ja ylläpitää työjonoa ja yksinkertaista OEE:tä. Se vain lukee: tämä versio ei voi kirjoittaa koneeseen tai PLC:hen.

### Pinnat, mallit ja piirtäminen

- **NURBS-pyöristykset, paksuntaminen ja boolet.** {{ui:Pinnat}}-paneelissa on {{ui:Pyöristys pintojen välillä}}, {{ui:Pyöristä useita särmiä}}, {{ui:Paksunna kiintokappaleeksi}} sekä Yhdiste, Erotus ja Leikkaus, kukin mitatulla poikkeamallaan. Katso [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).
- **Pintojen sovitus skannaukseen.** Valitse skannattu verkko ja käytä {{ui:Sovita pinnat skannaukseen}} **Skannaus**-ryhmässä, sitten {{ui:Ompele pinnat kiintokappaleeksi}}. Se on ensimmäinen sovitus, ei täysi käänteissuunnittelupaketti.
- **Live-yhteys .3dm-mallintajasta.** Yksisuuntainen, Rhino 8:sta tai Grasshopperista, ja se vaatii CadCraft Studion samalla tietokoneella. Katso [Pidä .3dm-malli ajan tasalla](topic:live-3dm-link).
- **Malli työmaalla.** {{ui:Näkymä työmaalla (AR, puhelin)}} {{ui:Näkymät}}-valikossa toimii Android-puhelimella Chromella. Katso [Katso malli työmaalla Android-puhelimella (AR)](topic:ar-on-site).
- **Kaaren menetelmät.** Pudotusvalikko {{ui:Kaaren menetelmät}} tarjoaa kymmenen tapaa piirtää kaari, mukaan lukien {{ui:3-piste}} ja {{ui:Alku, keskipiste, loppu}}.
- **Lisää yksiköitä.** Painot (kg, lb, t, ton) ja lämpötilat (astetta C, F, K ja R) ymmärretään siellä, missä kirjoitat arvoja yksiköiden kanssa.

## Kaikissa sovelluksissa

- **Työkaluvihjeet.** Painikkeiden ja katkenneiden nimikkeiden kohdistusteksti on Bootstrap-työkaluvihje.
- **Suljettava aloitusvihje.** Vihjekortissa tyhjällä piirtoalueella on pieni sulkemisristi. Se pysyy suljettuna, ja komentopaletti voi näyttää sen uudelleen.
- **Vieritettävät välilehtirivit.** Paneelin välilehtirivi, joka ei mahdu, vierii sen sijaan, että se katkeaisi.
- **Välilehtien otsikot.** Kun asiakirja on auki, selainvälilehti alkaa asiakirjan nimellä, sitten ModelCraft ja CadCraft. Piste tulee ensimmäiseksi, kun asiakirja on tallentamaton.
- **Asettelu.** {{ui:Asetukset}} › {{ui:Yleiset}} › Asettelu pitää asettelut pudotusvalikossa, ja siinä on valinta käyttää asettelua vain tässä sovelluksessa sekä painike asettelun palauttamiseen.
- **Kielet.** Asetusten kieliluettelo seuraa koontiversion sisältämiä kielitiedostoja. Muut kielet kuin englanti ovat koneellisia luonnoksia.
- **Live ja kirjasto.** Live TeamWork näyttää live-osoittimet ja nimet, ja kirjastokokoelmat antavat jokaiselle sovellukselle oletuskokoelman.

## Korjattu

- {{ui:Toista}} muuttuu {{ui:Tauko}}-painikkeeksi animaation toistuessa, ja {{key:Space}} toistaa ja keskeyttää aikajanan ollessa auki.
- Kuvan renderöinti palaa WebGL:ään, kun näytönohjain ei voi käynnistää polunjäljitintä. Live-renderöintinäkymä voi yhä näyttää virheen; tätä ei tarkistettu Windows-koneella kyseisellä ajurilla.
- Materiaalivirran todellinen tila yhdistyy taas, kun yhteys päättyi PLC-poikkeusvastauksiin.

## Rehelliset rajat

- Mitään ei ole tulostettu oikealla tulostimella: ei filamentilla, ei hartsilla, eikä Bambu Connectin kautta. Hartsitiedostot on luettu takaisin vain CadCraftin omilla lukijoilla.
- Digitaalista kaksosta ja tehdaslattiaa on testattu vain simulaattoreita ja tunnettuja vastauksia vasten, ilman oikeaa PLC:tä, linjaa tai protokollaa. Ne ovat tarkistusapuja, eivät turvallisuusvalidointia. Fysiikka kattaa vain laatikot, enintään kahdeksan kuormaa.
- Rhinon ja Grasshopperin linkki ei ole koskaan toiminut oikeissa ohjelmissa.
- Muut kuin englanninkieliset kielet ovat koneellisia luonnoksia.

## Aiemmin: 0.8 ja 0.8.1

Tämä on muuttunut ModelCraftissa versiossa 0.8 (2026-11-01) ja 0.8.1 (2026-11-02) versioon 0.7 verrattuna. {{ui:Renderöi kuva…}}-valintaikkuna voi nyt lähettää näkymän toiseen ohjelmaan, {{ui:Pinnat}}-paneeli tekee sujuvia vapaamuotoisia pintoja, ja yhdistämäsi avustaja voi asettaa koko näkymän yhdellä lauseella.

### Uutta

**Renderöinti**

- **Moottorivalinta.** {{ui:Renderöi kuva…}}-valintaikkunassa on **Moottori**-luettelo Tilan yläpuolella. Omat kaksi moottoria, Nopea ja Polunjäljitin, ovat oletuksia ja toimivat kaikkialla. Muut vaihtoehdot tallentavat näkymän paketiksi (malli USD-tiedostona sekä asetustiedosto tarkkoine materiaaliarvoineen, päällä olevine lampuineen, aurinkoineen, taivaineen, valotuksineen ja kameroineen), jotta voit viedä sen toiseen ohjelmaan. Toisen ohjelman piirtämästä kuvasta näkyy, mikä ohjelma ja versio sen teki. Katso [Valitse, mikä ohjelma piirtää kuvan](topic:render-engines).
- **Avaa toisessa ohjelmassa.** Moottori-luettelo voi tallentaa näkymän USD-tiedostona, glTF-tiedostona (`.glb`) tai Unreal-projektikansiona (`.zip`), selaimessa ja CadCraft Studiossa. Studiossa se voi myös käynnistää usdviewin tai tietokoneen oman ohjelman tiedostolle. Katso [Avaa näkymä toisessa ohjelmassa](topic:render-open-in).
- **Lähetä pelimoottoriin Studiosta.** Studio kirjoittaa näkymän Unreal Engine -projektiin ja pitää sen ajan tasalla jokaisella lähetyksellä, vain yhteen suuntaan. Omat muokkauksesi ovat tasossa, jota CadCraft ei koskaan kirjoita. Katso [Lähetä näkymä pelimoottoriin](topic:render-unreal).
- **Moottorit lisäosista.** Lisäosa voi lisätä moottorin luetteloon. JavaScriptillä kirjoitettu piirtää selaimessa ja Studiossa; ohjelmaa ajava vaatii sinun hyväksyntäsi Studiossa. Katso [Piirrä kuva toisella ohjelmalla](topic:render-other-program) ja [Lisää renderöintimoottori lisäosalla](topic:render-engine-addons).
- **Kuvaile näkymä.** Kerro yhdistetylle avustajallesi "hämärä, kevyt sade, syksyiset puut, ihmisiä aukiolla", ja ModelCraft asettaa sen yhdellä askeleella: aurinko siirtyy päivämäärään ja kellonaikaan, jotta varjot seuraavat, taivas muuttuu, märät pinnat ilmestyvät, ja puut ja ihmiset sijoitetaan oikeina kohteina tunnisteille, joita voit piilottaa, siirtää tai poistaa. Vuorokaudenaika, päivämäärä tai vuodenaika sekä sää (selkeä, pilvinen, sumu, kevyt sade, sade, myrsky) toimivat myös yksin, ja myöhempi pyyntö muuttaa samaa näkymää. Sumu näkyy korkean laadun kuvassa näytönohjaimella; muut moottorit näyttävät taivaan, valon ja märät pinnat. Sadetta ei piirretä putoavina viiruina.

**Materiaalit**

- **Materiaali yhdestä kuvasta.** Anna ModelCraftille pinnan kuva (seinä, lattia, kivi), ja se tekee laatoitettavan materiaalin: valaistus kuvan poikki tasoitetaan, reunat saadaan liittymään, ja värikartta, karkeuskartta ja normaalikartta lasketaan kuvasta. Kyseessä on tavallinen kuvankäsittely omalla kuvallasi, ilman koulutettua mallia. Karkeus on arvio. Tasainen, neliömäinen, suoraan edestä otettu kuva antaa parhaan laatan; voimakas kuvio, kuten tiilet, voi näyttää pehmeän haamun kohdassa, jossa liitos sekoitetaan.

**Pinnat**

- **Vapaamuotoiset pinnat.** {{ui:Pinnat}}-paneeli tekee NURBS-käyriä ja rajaamattomia pintoja: pisteiden kautta kulkevia käyriä, loft, viivapinta, pursotus, pyöräytys, pyyhkäisyt yhden tai kahden raiteen varrella, pinnat käyräverkosta, paikat neljästä särmästä, sovitus ja sekoitus. Jokainen yhteinen särmä mitataan G0-, G1- tai G2-tasolla (rako, kulma, kaarevuushyppäys) tarkoilla pinnoilla, ja särmä, joka on huonompi kuin pyysit, näkyy Ongelmat-paneelissa korjauksella **Sovita**. Seepra-raidat ja kaarevuusvärit piirretään tarkoista pinnoista. STEP- ja IGES-tiedostot viedään ja tuodaan. Katso [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).

**Työmaa ja huoneet**

- **Luonnoskuva maastoon.** {{ui:Tiedosto}} › {{ui:Tuo luonnoskuva…}} muuttaa puhelimella otetun kuvan käsinpiirretystä luonnoksesta reunoiksi maastoon antamassasi mittakaavassa: yksi ryhmä, jolla on tunniste jokaista kynän väriä kohden. Paperi löydetään ja suoristetaan tietokoneellasi, eikä mitään lähetetä minnekään. Katso [Malli asemapiirroksella](topic:site-plan).
- **Kalusta huone.** Valitse lattia ja käytä {{ui:Järjestä}} › {{ui:Kalusta huone…}}. Makuuhuoneen, olohuoneen, ruokailuhuoneen, keittiön, kylpyhuoneen tai toimiston kalusteet sijoitetaan säännöillä seinien viereen ja pois ovien ja ikkunoiden edestä, yhteen ryhmään, jonka voit poistaa yhdellä askeleella. Se on oletusasettelu, jonka voit tarkistaa, ei suunnitelma. Katso [Aloituskirjasto](topic:starter).

**3D-tulostus**

- **Vinot leikkaukset.** Jaa tulostusta varten voi kallistaa leikkauksiaan enintään 60 asteella, mikä antaa paloille enemmän liimauspintaa. Liittimet seisovat leikkaukseen nähden suorassa. Katso [Jaa malli tulostusta varten](topic:print-split).
- **Tulostustarkistus Ongelmissa.** 3D-tulostustarkistuksen havainnot näkyvät Ongelmat-paneelissa merkintöinä mallilla, ja Korjaus korjaa ne sieltä. Katso [Tuet, seinämän paksuus, ontoksi ja korjaus](topic:print-tools).

**Kaikissa sovelluksissa**

- **Kielet.** Ohjeet ja sovellukset ovat 54 kielellä. Kymmenen on uutta: liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili ja uzbek. Muut kuin englanninkieliset kielet ovat koneellisia luonnoksia, kunnes äidinkielinen puhuja on lukenut ne, ja ohjeaiheet voivat yhä olla englanniksi.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, peliohjain ja MIDI-säätimet voivat ohjata sovelluksia, kaikille tai yhdelle.
- **Työkalurivien rivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › Työkalurivit asettaa Rivitys (kuten ennen), 2 riviä tai 1 rivi. Palkki, joka ei mahdu, vierii sivusuunnassa sen sijaan, että veisi tilaa piirrokselta. Rivitys pysyy oletuksena.
- **Ominaisuusruudukko.** ModelCraftin lamppukentät käyttävät yhteistä ruudukkoa: kokoontaitettavat luokat, nimike- ja arvosarakkeet sekä Tiivis-tiheys. Kirjoitettu laskenta kuten `2*450` toimii edelleen.
- **Ongelmat.** Ongelmat-paneeli (sovelluspalkin varoituspainike) on kaikkien sovellusten yhteinen. ModelCraftissa siinä on tulostustarkistus ja pintojen jatkuvuusvaroitukset.
- **Live.** Live TeamWork -istunto näyttää, kuka on missä. Katso [Mallinna yhdessä Live TeamWorkin kanssa](topic:work-live).
- **Lisäosat.** Lisäosat voivat lisätä renderöintimoottoreita, kuten yllä.
- **Yhdistä tekoäly.** Työkalusopimus ja kahdeksan sovelluksen tarkistukset menevät läpi, yhteensä 454 työkalua. Yhden napsautuksen yhteyttä Studiossa, isännöityä liitintä selainavustajille, omaa avainta Studiossa ja julkaistua pakettia ei ole vielä luvattu. Sovelluksissa ei ole omaa tekoälyä. Katso [Käytä ModelCraftia tekoälyavustajan kanssa](topic:use-with-ai-assistants).

### Korjattu versiossa 0.8.1

- **DWG-luokkaosio.** DWG-tiedoston luokkaosio luettiin väärällä tyypillä, mikä saattoi rikkoa tiedoston tuonnissa. Se luetaan nyt oikein, ModelCraftissa ja muissa sovelluksissa, jotka lukevat DWG:tä.
- **Tabletit pystyasennossa.** Ylimääräinen ruudukon korkeus menee piirtoalueelle, ja arkkiasettelu alkaa, kun leveys on 760 pikseliä tai vähemmän. ModelCraftin tyylitiedostossa on myös muutos.
- **Kieli Studiossa.** CadCraft Studio ja pakatut versiot voivat vaihtaa kieltä käynnissä ollessaan; aiemmin ne olivat vain englanniksi. Tätä ei ole vielä testattu jokaisella alustalla: kerro meille, jos kieli ei vaihdu.

### Ei vielä tässä versiossa

- **Ei koodiallekirjoitettu.** Windows voi näyttää SmartScreenin: valitse {{ui:Lisätietoja}}, sitten {{ui:Suorita silti}}. Macissa napsauta hiiren kakkospainikkeella ja valitse {{ui:Avaa}}. Kauppaversiot ovat pidossa, eikä iPad- ja iPhone-versiota ole rakennettu uudelleen versiolle 0.8.1.
- Toinen ohjelma, joka piirtää kuvan ilman renderöintimoottorin lisäosaa, panoraama- tai stereokamerat sekä taivaskuva toisen ohjelman kautta, ja liitännäinen, joka avaa Unreal-näyttämön, eivät ole vielä mukana. Tiedostot kirjoitetaan; liitännäistä ei ole julkaistu, eikä sitä ole ajettu Unrealissa.
- Vapaamuotoiset pinnat: G3- ja luokan A -arvoja ei mitata eikä väitetä, ja rajaus ja kiintokappaleet tulevat myöhemmin.
- Muiden ohjelmien kuvat eivät ole pikseli pikseliltä samanlaisia kuin omamme: vain kamera, aurinko, lamput ja valotus vastaavat.
- Versiossa 0.8.1 tehtyä kielenvaihdon korjausta Studiossa ei ole testattu jokaisella alustalla.

Muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet). Edellisen julkaisun osalta katso [Uutta versiossa 0.7](topic:whats-new-0-7).
