---
title: Mallinna asemapiirroksen päälle DWG- tai DXF-tiedostosta
summary: Tuo CAD-asemapiirros tai pohjapiirros viivoina maahan, vastaa yksiköitä koskevaan kysymykseen ja jäljitä se pinnoiksi ja massoiksi.
keywords: asemapiirros, dwg, dxf, cad, tuonti, luonnos, käsinpiirretty luonnos, servietti-luonnos, luonnoksen valokuva, valokuva, paperi, kynävärit, dynaamiset lohkot, näkyvyystilat, teksti, viivoitus, splini, ellipsi, 3D-pinta, jäljitys, pohjapiirros, tontti, kiinteistön raja, yksiköt, alusta, konteksti
from: 3415dc96
---

ModelCraft voi tuoda 2D-CAD-piirustuksen, asemapiirroksen tai pohjapiirroksen viivat ja asettaa ne maahan, jotta niiden päälle voi mallintaa.

## Tuo piirustus

1. Napsauta {{ui:Tuo}}-painiketta {{ui:Tiedosto}}-ryhmässä (tai pudota tiedosto 3D-näkymään).
2. Valitse `.dwg`- tai `.dxf`-tiedosto.

   Suuri DWG-tiedosto vie hetken: tilarivillä lukee "Luetaan plan.dwg…", kunnes se on tuotu.

3. Jos piirustus ei kerro yksiköitään, valintaikkuna nimeltä "Piirustuksen yksiköt" kysyy: "Mikä on yksi piirustusyksikkö?" Valitse {{ui:Tuumaa}}, {{ui:Jalkaa}}, {{ui:Millimetriä}} tai {{ui:Metriä}}. Useimmat yhdysvaltalaiset asemapiirrokset piirretään jaloissa, arkkitehtuuripiirrokset tuumissa ja metriset piirrokset millimetreissä.

   Piirustus tulee maahan ryhmänä särmiä, valittuna, ja näkymä zoomaa siihen. Tilarivi kertoo, kuinka monta särmää tuli, esimerkiksi "Tuotu site.dwg: 1697 särmää maassa, ryhmässä. Hajota se, jotta voit piirtää siihen suoraan."

## Mitä tulee mukaan

- Viivat, murtoviivat (myös niiden kaaret), ympyrät ja kaaret sekä lohkot kaikkine sisältöineen, vain **mallitilasta**. Käyrät muuttuvat lyhyiksi suorien osiksi.
- Viivat, murtoviivat, kaaret, ympyrät, ellipsit ja splinit asettuvat tasaisina maahan särmiksi.
- **Viivoitukset** muuttuvat pinnoiksi maahan, niiden saaret aukoiksi, joten viivoitettu alue voidaan työntää/vetää heti.
- **3D-pinnat** ja kiinteät täytöt muuttuvat pinnoiksi; 3D-pinnat säilyttävät korkeutensa.
- **Teksti** (yksirivinen teksti, monirivinen teksti ja attribuuttiarvot) piirretään särmiksi yksinkertaisella yksiviivakirjoituksella tekstin omalla korkeudella, kulmalla ja tasauksella. Sen fontti ei ole piirustuksen, joten sanat voivat olla hieman pidempiä tai lyhyempiä. Merkit, joille kirjoituksessa ei ole muotoa, piirretään pieninä laatikkoina ja lasketaan.
- **Mitoitukset** piirretään niin kuin piirustus ne näyttää (niiden viivat, nuolenpäät ja teksti särmiksi ja pinnoiksi).
- **Dynaamiset lohkot** tulevat sisään niin kuin piirustus ne näyttää: jokainen sijoitettu lohko siinä näkyvyystilassa, johon se tallennettiin, ja vain sen tilan viivat. Tilarivi luettelee ne näytettyine tiloineen ja muine tiloineen, esimerkiksi "Receptacle näkyy tilana Duplex ×38, GFI ×7 (tilat: Duplex, GFI)". ModelCraft ei vaihda tiloja.
- **3D-kiintokappaleet, alueet ja kappaleet** (piirustuksen ACIS-tiedot) tulevat omina ryhminään: suljettu kiintokappale kiintokappaleena, alue tai avoin kappale pintoina. Tasaiset pinnat tulevat kokonaisina; kaarevat pinnat (sylinterit, kartiot, pallot, toruksit, yksinkertaiset splini-pinnat) pieninä kolmioina, joiden välissä on pehmeät reunat, joten näkyvät vain kiintokappaleen omat särmät. Muuntyyppisellä pinnalla oleva pinta jätetään pois ja luetellaan: "Ei vielä piirretty (3D-kiintokappaleet): …".
- Ei tuoda: pisteet, taulukot, monijohtoviitteet, kuvat ja muut kohdetyypit. Tilarivi luettelee ne tyypeittäin, esimerkiksi "Ei tuotu: 12 POINT." Kaikki asettelussa (paperitilassa) on myös jätetty pois, luettelematta.
- Tasoja ei säilytetä: kaikki viivat tulevat samanlaisina.

Jos piirustus on kaukana origostaan (esimerkiksi valtiotason koordinaatit), se tuodaan silti, mutta se voi asettua kauas ModelCraft-sovelluksen origosta. Yli 10,000 km:n päässä origostaan olevat piirustukset hylätään: siirrä piirustus ensin lähemmäs kohtaa 0,0 CAD-ohjelmassa.

## Jäljitä pinnoiksi

Tuodut viivat eivät harvoin sulkeudu siististi pinnoiksi itsestään. Kaksi tapaa työskennellä:

**Säilytä piirros alustana (suositeltu)**

1. Jätä piirros omaksi ryhmäkseen.
2. Piirrä rakennus päälle {{ui:Suorakulmio}}- ja {{ui:Viiva}}-työkaluilla tarttuen piirroksen kulmiin ("Päätepiste") ja reunoihin ("Reunalla").
3. Työnnä/vedä pinnat ylöspäin. Piirros pysyy koskemattomana alla, ja koko ryhmän voi pyyhkiä myöhemmin yhdellä napsautuksella.

Tartunta toimii ryhmien yli: voit tarttua piirroksen kulmiin avaamatta sitä.

**Piirrä piirroksen omille viivoille**

1. Valitse piirrosryhmä ja napsauta {{ui:Hajota}}. Sen viivoista tulee irrallisia särmiä.
2. Missä suljetun ääriviivan pitäisi olla pinta, piirrä {{ui:Viiva}}-työkalulla yksi viiva minkä tahansa sen särmän päälle kulmasta kulmaan. Kun ääriviiva on suljettu ja tasainen, pinta yleensä täyttyy. Jos ei täyty, etsi ääriviivasta rako tai päällekkäisyys ja piirrä sen päälle.
3. Työnnä/vedä se.

Tämä toimii parhaiten siistillä piirroksella. Vilkkaassa mittauspiirroksessa päälle jäljittäminen on nopeampaa.

## Ongelmatilanteet

- "Tämä on binäärinen DXF. Tallenna se ASCII DXF -muodossa ja yritä uudelleen." Tallenna DXF uudelleen CAD-ohjelmasta ASCII-muodossa (teksti).
- "…ei ole mallitilassa tuotavia viivoja, kaaria tai ympyröitä." Piirustus on todennäköisesti kokonaan asetteluissa tai pelkkää tekstiä ja viivoituksia.
- "Tätä piirustusta ei voitu lukea (…). Se voi olla vaurioitunut tai tallennettu DWG-versiossa, jota lukija ei tue…" Sulkeissa kerrotaan syy, esimerkiksi "DWG-versiota AC1009 ei tueta". Tallenna se CAD-ohjelmasta DXF-muodossa tai DWG-muodossa AutoCADin versioilla 2000–2018.
- Piirros on väärän kokoinen: valitsit väärän yksikön. Kumoa ({{key:Mod+Z}}) ja tuo uudelleen, tai [skaalaa](topic:rotate-scale) ryhmä oikealla kertoimella (12 jalan ja tuuman välillä, 25.4 tuuman ja millimetrin välillä).

Jos haluat muuttaa korkeuskäyrät muokattavaksi maastoksi, katso [Maasto](topic:terrain).

## Käsinpiirretyn luonnoksen valokuvasta

**Tiedosto › Tuo luonnoksen valokuva…** ottaa paperille piirretystä luonnoksesta valokuvan (JPEG, PNG tai TIFF, suoraan puhelimesta käy) ja tekee maahan samanlaiset särmät. Ilmoita, mikä paperi se on (tai anna sen löytää arkki, oletuksena A4) ja luonnoksen mittakaava, esimerkiksi 1 : 100. Paperin reuna löydetään ja valokuva suoristetaan, muste jäljitetään viivoiksi ja kaariksi, ja kukin kynäväri (musta, punainen, sininen, vihreä) muuttuu omaksi ryhmäkseen tunnisteella (**Luonnos musta**, **Luonnos punainen**, …), kaikki yhden valokuvan mukaan nimetyn ryhmän sisällä. Se on yksi kumoamisvaihe, ja kaikki tapahtuu tällä tietokoneella: mitään ei lähetetä minnekään.

Kun paperin reunaa ei löydy, koko valokuva otetaan arkiksi ja tilarivi kertoo sen: mittaa jokin tuntemasi mitta ja skaalaa ryhmä, jos se on väärä. Jäljitä viivat pinnoiksi edellä kuvatulla tavalla.
