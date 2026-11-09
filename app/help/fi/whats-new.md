---
title: Mitä uutta versioissa 0.8 ja 0.8.1
summary: Renderöintimoottorin valinta toisille ohjelmille sopivine tiedostoineen, vapaamuotoiset NURBS-pinnat mitatulla jatkuvuudella, kohtaus, jonka kuvailet avustajallesi, materiaali yhdestä valokuvasta, luonnoskuva maastoon, kalustetut huoneet, vinot leikkaukset 3D-tulostukseen ja tulostustarkistus Ongelmat-paneelissa.
keywords: mitä uutta, julkaisutiedot, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, renderöintimoottori, moottori, avaa ohjelmassa, usd, gltf, unreal, lisäosamoottori, nurbs, pinnat, loft, pyyhkäise, jatkuvuus, g0, g1, g2, zebra, step, iges, kuvaile kohtaus, kohtaus, sää, vuorokaudenaika, vuodenaika, avustaja, materiaali valokuvasta, valokuva, luonnoskuva, kalusta, kalusta huone, vino, vinoleikkaus, jako, tulostustarkistus, ongelmat, ominaisuusruudukko, lamput, kielet, syöttölaitteet, työkalurivit, dwg, live
from: e4989b17
---

Tämä on muuttunut ModelCraftissa versioissa 0.8 (2026-11-01) ja 0.8.1 (2026-11-02), verrattuna versioon 0.7. {{ui:Renderöi kuva…}}-valintaikkuna voi nyt lähettää kohtauksen toiseen ohjelmaan, {{ui:Pinnat}}-paneeli tekee sujuvia vapaamuotoisia pintoja, ja yhdistämäsi avustaja voi asettaa koko kohtauksen yhdellä lauseella.

## Uutta

### Renderöinti

- **Moottorivalinta.** {{ui:Renderöi kuva…}}-valintaikkunassa on **Moottori**-luettelo Tila-kentän yläpuolella. Omat kaksi moottoria, Fast ja Path tracer, ovat oletuksena ja toimivat kaikkialla. Muut vaihtoehdot tallentavat kohtauksen paketiksi (malli USD-tiedostona sekä asetustiedosto, jossa ovat tarkat materiaaliarvot, päällä olevat lamput, aurinko, taivas, valotus ja kamera), jotta voit viedä sen toiseen ohjelmaan. Toisen ohjelman piirtämässä kuvassa kerrotaan, mikä ohjelma ja versio sen teki. Katso [Valitse, mikä ohjelma piirtää kuvan](topic:render-engines).
- **Avaa toisessa ohjelmassa.** Moottori-luettelo voi tallentaa kohtauksen USD-tiedostona, glTF-tiedostona (`.glb`) tai Unreal-projektikansiona (`.zip`) selaimessa ja CadCraft Studiossa. Studiossa se voi myös käynnistää usdviewin tai tietokoneen oman ohjelman tiedostolle. Katso [Avaa kohtaus toisessa ohjelmassa](topic:render-open-in).
- **Lähetä pelimoottoriin Studiosta.** Studio kirjoittaa kohtauksen Unreal Engine -projektiin ja pitää sen ajan tasalla joka lähetyksessä, vain yhteen suuntaan. Omat muokkauksesi ovat kerroksessa, jonka CadCraft ei koskaan kirjoita. Katso [Lähetä kohtaus pelimoottoriin](topic:render-unreal).
- **Lisäosien moottorit.** Lisäosa voi lisätä moottorin luetteloon. JavaScriptillä kirjoitettu moottori piirtää selaimessa ja Studiossa; ohjelmaa ajava moottori vaatii sinun hyväksyntäsi Studiossa. Katso [Piirrä kuva toisella ohjelmalla](topic:render-other-program) ja [Lisää renderöintimoottori lisäosalla](topic:render-engine-addons).
- **Kuvaile kohtaus.** Kerro yhdistetylle avustajallesi ”hämärä, kevyt sade, syksyiset puut, ihmisiä aukiolla”, ja ModelCraft asettaa kohtauksen yhdellä askeleella: aurinko siirtyy päivämäärään ja kellonaikaan, jotta varjot seuraavat, taivas muuttuu, märät pinnat ilmestyvät, ja puut ja ihmiset sijoitetaan oikeina kohteina tunnisteilla, jotka voit piilottaa, siirtää tai poistaa. Vuorokaudenaika, päivämäärä tai vuodenaika sekä sää (selkeä, pilvinen, sumu, kevyt sade, sade, myrsky) toimivat myös yksinään, ja myöhempi pyyntö muuttaa samaa kohtausta. Sumu näkyy laadukkaassa kuvassa näytönohjaimella; muut moottorit näyttävät taivaan, valon ja märät pinnat. Sadetta ei piirretä putoavina viivoina.

### Materiaalit

- **Materiaali yhdestä valokuvasta.** Anna ModelCraftille valokuva pinnasta (seinä, lattia, kivi), ja se tekee laatoitettavan materiaalin: valaistus kuvan poikki tasoitetaan, reunat tehdään yhteensopiviksi, ja väri-, karheus- ja normaalikartta lasketaan kuvasta. Se on tavallista kuvankäsittelyä omasta kuvastasi, ilman koulutettua mallia. Karheus on arvio. Tasainen, neliömäinen ja suoraan edestä otettu kuva antaa parhaan laatan; voimakas kuvio, kuten tiili, voi näyttää pehmeän haamun kohdassa, jossa reunat sekoittuvat.

### Pinnat

- **Vapaamuotoiset pinnat.** {{ui:Pinnat}}-paneeli luo NURBS-käyriä ja rajaamattomia pintoja: pisteiden kautta kulkevia käyriä, loft-pintoja, viivapintoja, pursotuksia, kierrettyjä pintoja, pyyhkäisyjä yhdelle tai kahdelle ohjauskiskolle, pintoja käyräverkosta, laastareita neljästä särmästä, sovitus ja sekoitus. Jokainen yhteinen särmä mitataan tarkoilla pinnoilla arvoina G0, G1 tai G2 (rako, kulma, kaarevuushyppäys), ja särmä, joka on huonompi kuin pyysit, näkyy Ongelmat-paneelissa **Sovita**-korjauksen kanssa. Zebra-raidat ja kaarevuusvärit piirretään tarkoista pinnoista. STEP- ja IGES-tiedostoja voi sekä viedä että tuoda. Katso [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).

### Paikka ja huoneet

- **Luonnoskuva maastoon.** {{ui:Tiedosto}} › {{ui:Tuo luonnoskuva…}} muuttaa puhelimella otetun kuvan käsin piirretystä luonnoksesta reunoiksi maastoon ilmoittamassasi mittakaavassa: yksi ryhmä, jossa on tunniste kullekin kynänvärille. Paperi tunnistetaan ja suoristetaan tietokoneellasi, eikä mitään lähetetä minnekään. Katso [Malli maastokartalla](topic:site-plan).
- **Kalusta huone.** Valitse lattia ja käytä {{ui:Järjestä}} › {{ui:Kalusta huone…}}-komentoa. Makuuhuoneen, olohuoneen, ruokailuhuoneen, keittiön, kylpyhuoneen tai toimiston kalusteet sijoitetaan sääntöjen mukaan seinien viereen ja pois ovien ja ikkunoiden edestä yhteen ryhmään, jonka voit poistaa yhdellä askeleella. Se on oletusasettelu, jonka voit tarkistaa, ei suunnitelma. Katso [Aloituskirjasto](topic:starter).

### 3D-tulostus

- **Vinot leikkaukset.** Jako tulostusta varten voi kallistaa leikkauksiaan jopa 60 astetta, mikä antaa paloille enemmän liimauspintaa. Liittimet seisovat leikkaukseen nähden suorassa kulmassa. Katso [Jaa malli tulostusta varten](topic:print-split).
- **Tulostustarkistus Ongelmat-paneelissa.** 3D-tulostustarkistuksen löydökset näkyvät Ongelmat-paneelissa merkkeinä mallissa, ja **Korjaa** korjaa ne sieltä. Katso [Tuet, seinämän paksuus, ontelointi ja korjaus](topic:print-tools).

### Kaikissa sovelluksissa

- **Kielet.** Ohjeet ja sovellukset ovat 54 kielellä. Kymmenen on uutta: liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filippiiniläinen, swahili ja uzbek. Muut kielet kuin englanti ovat koneella tehtyjä luonnoksia, kunnes äidinkielenään puhuva on lukenut ne, ja ohjeaiheet voivat yhä olla englanniksi.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, peliohjain ja MIDI-säätimet voivat ohjata sovelluksia, kaikkia tai yhtä.
- **Työkalurivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › Työkalurivit asettaa arvoksi Rivitys (kuten ennen), 2 riviä tai 1 rivi. Palkki, joka ei mahdu, vierittyy sivulle sen sijaan, että veisi tilaa piirustukselta. Rivitys on edelleen oletus.
- **Ominaisuusruudukko.** ModelCraftin lampun kentät käyttävät yhteistä ruudukkoa: supistettavat ryhmät, nimi- ja arvosarakkeet sekä Tiivis tiheys. Kirjoitettu laskenta, kuten `2*450`, toimii edelleen.
- **Ongelmat.** Ongelmat-paneeli (sovelluspalkin varoituspainike) on kaikkien sovellusten yhteinen. ModelCraftissa siinä ovat tulostustarkistus ja pintojen jatkuvuusvaroitukset.
- **Live.** Live TeamWork -istunto näyttää, kuka on missä. Katso [Mallinna yhdessä Live TeamWorkin avulla](topic:work-live).
- **Lisäosat.** Lisäosat voivat lisätä renderöintimoottoreita, kuten yllä.
- **Yhdistä tekoälysi.** Työkalusopimus ja kahdeksan sovelluksen tarkistukset menevät läpi, ja työkaluja on yhteensä 454. Yhden napsautuksen yhteys Studiossa, isännöity liitin selainavustajille, oma avain Studiossa ja julkaistu paketti eivät ole vielä käytettävissä. Sovelluksissa ei ole omaa tekoälyä. Katso [Käytä ModelCraftia tekoälyavustajien kanssa](topic:use-with-ai-assistants).

## Korjattu versiossa 0.8.1

- **DWG-luokkien osio.** DWG-tiedoston luokkien osio luettiin väärän tyyppisenä, mikä saattoi rikkoa tiedoston tuonnin. Se luetaan nyt oikein ModelCraftissa ja muissa DWG-tiedostoja lukevissa sovelluksissa.
- **Tabletit pystyasennossa.** Ylimääräinen ruudukon korkeus menee piirtoalueelle, ja arkkiasettelu alkaa, kun leveys on 760 pikseliä tai vähemmän. ModelCraftin tyylitiedostossa on myös muutos.
- **Kieli Studiossa.** CadCraft Studio ja paketoidut versiot voivat vaihtaa kieltä ajon aikana; aiemmin ne olivat vain englanniksi. Tätä ei ole vielä testattu kaikilla alustoilla: kerro, jos kieli ei vaihdu.

## Ei vielä tässä versiossa

- **Ei koodiallekirjoitusta.** Windows voi näyttää SmartScreen-varoituksen: valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa napsauta hiiren oikealla painikkeella ja valitse {{ui:Avaa}}. Kauppaversiot ovat pidossa, eikä iPad- ja iPhone-versiota koottu uudelleen versiolle 0.8.1.
- Toinen ohjelma piirtämässä kuvaa ilman renderöintimoottorin lisäosaa, panoraama- tai stereokamerat sekä taivaskuva toisen ohjelman kautta eivät ole vielä mukana, eikä myöskään liitännäinen, joka avaa Unreal-näyttämön. Tiedostot kirjoitetaan; liitännäistä ei ole julkaistu, eikä sitä ole ajettu Unrealissa.
- Vapaamuotoiset pinnat: G3- ja A-luokan pintoja ei mitata eikä väitetä, ja leikkaus ja kiinteät kappaleet tulevat myöhemmin.
- Muiden ohjelmien kuvat eivät ole pikseli pikseliltä samanlaisia kuin meidän: vain kamera, aurinko, lamput ja valotus täsmäävät.
- Studion kielenvaihdon korjausta versiossa 0.8.1 ei ole testattu kaikilla alustoilla.

Muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet). Edellisestä julkaisusta katso [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
