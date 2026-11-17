---
title: Jaa suuri malli tulostusta varten
summary: Leikkaa tulostimesi alustalle liian suuri malli osiin, jotka mahtuvat alustalle, tapeilla, avaimilla, hännityssiivillä, vaarna- tai magneettireikillä ja liitoksen numerolla molemmilla pinnoilla, ja lataa jokainen osa sekä kokoonpanoarkki yhteen zip-tiedostoon.
keywords: 3D-tulostus, jako, vino, vinoleikkaus, kulmaleikkaus, vinoon, jakaja, leikkaus, liian suuri, alustan koko, tulostustilavuus, osat, liittimet, tapit, avaimet, hännitys, vaarna, magneetti, väljyys, toleranssi, osanumerot, kokoonpano, räjäytetty näkymä, zip, stl, 3mf, lisenssi, license, USB-avain, dongle
from: ee96ba77
---

Kun malli on suurempi kuin tulostimesi alusta, **Jaa tulostusta varten** leikkaa sen osiin, jotka mahtuvat alustalle, lisää liittimet, joilla osat asettuvat kohdalleen yhteen, ja kaivertaa saman numeron jokaisen liitoksen molemmille pinnoille. Avaa {{ui:Vie}} › {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}; valintaikkunan **Tulostustyökalut**-rivillä on {{ui:Jaa tulostusta varten}}. Se avautuu kortiksi näkymän päälle.

Se toimii tulostettaville osille: valinnalle tai, jos mitään ei ole valittu, kaikelle näkyvälle. Tulostettavan täytyy olla suljettu kiintokappale. Jos tarkistus löytää reikiä, käytä ensin [Korjaus](topic:print-tools#repair).

Se toimii ModelCraftissa omalla tietokoneellasi: ei lisenssipalvelinta, ei USB-avainta, eikä mitään lähetetä.

## Miten leikataan

- **Sovita alustaan, mahdollisimman vähän osia**: anna alustan leveys, syvyys ja korkeus (ne alkavat kohdasta {{ui:Asetukset}} › ModelCraft › 3D-tulostin). Kortti kertoo, montako osaa tarvitaan ja kuinka suuri kukin on. Se leikkaa mallin yhtä suuriin osiin, mahdollisimman vähän. Osa voi maata kyljellään tiedostoissa, jos se auttaa sovittamaan. Osasta ulkonevat liittimet lasketaan mukaan sen kokoon.
- **Annetuissa kohdissa**: valitse akseli, jonka poikki leikataan, ja kirjoita kohdat millimetreinä mallin alareunasta, pilkuilla erotettuina (`100, 200` tekee kolme osaa).
  **Vino** kääntää leikkauksia enintään 60° jonkin kahdesta muusta akselista ympäri (esimerkiksi Z:n poikki tehty leikkaus, vinossa X:n suhteen). Jokainen vino leikkaus kulkee mallin keskiviivan kautta kohdassaan, antaa osille enemmän liimauspintaa ja piilottaa liitoksen paremmin kaltevalla pinnalla. Liittimet ovat kohtisuorassa leikkaukseen nähden.

Leikkaustasot piirretään mallin ympärille katkoviivoina, kun kortti on auki.

## Liittimet

Jokaiseen kohtaan, jossa kaksi osaa koskettaa, tulee liittimiä. Ne sijoitetaan itsestään siihen, missä on eniten tilaa: vähintään **ohuin seinä** + **väljyys** + niiden oma koko etäisyydelle ulkoreunasta, ja niin kaukana muista leikkauksista, ettei kaksi reikää koskaan kohtaa. Pitkällä pinnalla kaksi liitintä levitetään pinnan varrelle, jotta osat eivät pääse kääntymään.

- **Pyöreät tapit**: tappi toisella osalla (kärjestä viistetty), reikä toisella.
- **Neliömäiset avaimet**: sama, neliömäisenä, jolloin osa voi mennä paikalleen vain yhdellä tavalla.
- **Hännityssiivet**: kieleke, joka liukuu uraan sivusta. Jos uran toinen pää osuisi toiseen leikkaukseen, hännityssiipi pysähtyy lyhyeksi ja liukuu sisään avoimesta päästä. Hännityssiivet sopivat leikkauksiin yhteen suuntaan (rivi viipaleita). Ruudukossa käytä tappeja tai vaarnoja.
- **Vaarnareiät**: reikä kummallakin puolella. Vaarnat tulostetaan myös (zip-tiedostossa).
- **Magneettitaskut**: tasku kummallakin puolella annetun halkaisijan ja paksuuden omaavalle pyöreälle magneetille. Tarkista navat ennen kuin liimaat magneetit paikoilleen.
- **Ei mitään (liimaus)**.

**Väljyys** on kunkin puolen rako tapin ja sen reiän välillä (aluksi 0.2 mm). Se on totta antamasi luvun mukaan: pyöreitä reikiä tehdään hieman suuremmiksi, jotta niiden tasaiset sivut, eivät kulmat, säilyttävät raon. Nosta sitä, jos tulostimesi osat tulevat liian tiukoiksi.

Kun liitoksessa ei ole tilaa liittimelle (ohut seinä, pieni kosketuspinta), kortti kertoo siitä: liimaa se kohta.

## Osanumerot

Kun **Kaiverra liitosnumerot molemmille pinnoille** on päällä, jokaiseen liitokseen tulee sen kahden osan numero, esimerkiksi `3-4`. Se kaiverretaan 0.6 mm syvyyteen molemmille pinnoille, ja se on luettavissa oikein päin kummaltakin. Numerot alkavat 5 mm:n korkeudesta ja pienenevät mahtuakseen, enintään 2.5 mm:iin asti. Liitos, jossa ei ole tilaa numerolle, luetellaan. Osat numeroidaan alimmasta tasosta ylöspäin.

## Esikatselu, lataus, jaa malli

1. {{ui:Esikatselu}} leikkaa mallin ja kertoo, montako osaa, liitosta ja liitintä siinä on, läpäisevätkö kaikki osat 3D-tulostustarkistuksen ja mahtuvatko ne alustalle, ja luettelee kunkin osan koon. Rengas merkitsee jokaisen liittimen ja numeron näkymässä.
2. {{ui:Lataa osat (.zip)}} tallentaa yhden zip-tiedoston: tiedoston jokaiselle osalle (STL tai 3MF, valintasi mukaan kohdassa **Tiedostot**), kukin alustalla pystyssä; vaarnat; ja **kokoonpanoarkin**, eli kuvan osista irrotettuina numeroineen (`assembly.svg` ja `assembly.png`) sekä luettelon osista ja liitoksista (`assembly.txt`).
3. {{ui:Jaa malli}} asettaa osat malliin valittujen ryhmien tai komponenttien tilalle, nimettyinä kokoonpanoarkin mukaan, yhdellä askeleella. {{ui:Kumoa}} palauttaa alkuperäisen. Jaon tekemiseen ryhmät tai komponentit täytyy olla valittuina; lataus toimii kaikelle, mikä tulostuu.

## Liittimien siirtäminen itse

Esikatselun jälkeen **Liittimet käsin** antaa korjata, mihin liittimet menevät:

- {{ui:Siirrä yksi}}: napsauta näkymässä punaista rengasta (se muuttuu vihreäksi), napsauta sitten leikkauksella kohtaa, johon liitin pitäisi siirtää.
- {{ui:Lisää yksi}}: napsauta näkymässä kohtaa, johon liittimen pitäisi tulla. Se menee leikkaustasolle, jonka napsautuksesi osuu, kahden osan väliin siinä kohdassa.
- {{ui:Poista yksi}}: napsauta punaista rengasta poistaaksesi sen liittimen.

Jokainen muutos tarkistetaan uudelleen kuten automaattisetkin. Paikka, joka on liian lähellä ulkoreunaa, toista leikkausta tai toista liitintä, ei toteudu, ja kortti kertoo siitä. {{ui:Automaattinen taas}} unohtaa paikkasi. Ne säilyvät niin kauan kuin malli, valinta ja leikkaukset pysyvät ennallaan.

Esikatselu pysyy voimassa, kunnes malli, valinta tai asetus muuttuu. Sen jälkeen kortti pyytää esikatselemaan uudelleen.

:::note
Jokainen osa tarkistetaan samalla tavalla kuin 3D-tulostustarkistus tekisi ennen lataamista. Viipalointiohjelmasi päättää silti, miten kukin osa tulostuu: katso jokainen siellä, ja tulosta ensin yksi liitos nähdäksesi, miten tulostimesi käsittelee väljyyden.
:::
