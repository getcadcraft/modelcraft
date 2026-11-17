---
title: Aseta osat tulostusalustalle ja lähetä ne tulostimeen
summary: Lisää kirjaston kohteita tai omia mallejasi tulostimesi alustalle, järjestä ne, tarkastele viipaloituja tasoja ja lähetä tulostus USB:n tai verkon kautta tai tallenna G-koodi ilman STL-vientiä ensin.
keywords: tulostusvaihe, 3D-tulostus, tulostin, alusta, lähetys 3D-tulostimeen, viipalointiohjelma, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, kirjasto, järjestely, sovita kaikki, tasojen esikatselu, tuet, filamentti, pla, petg, lisäosa, 3D-tulostuksen lisäosa
from: abcf5d7e
---

{{ui:Tulostusvaihe}} asettelee kohteet tulostimesi alustalle, viipaloi ne ja lähettää ne tulostimelle. Tiedostoa ei tarvitse viedä ensin. Se kuuluu 3D-tulostuksen lisäosaan, joka on oletuksena päällä.

:::note
Tällä ei ole vielä tulostettu oikealla tulostimella. Viipalointiohjelma on uusi: seuraa ensimmäisen tulostuksen ensimmäisiä tasoja ja käytä tasojen esikatselua ennen lähettämistä.
:::

## Mitä teet

Aseta malli alustalle, tarkista että se mahtuu, katso viipaloituja tasoja ja lähetä malli tulostimelle tai tallenna G-koodi.

## Vaiheet

1. Napsauta työkalurivillä {{ui:Tulostusvaihe}}. Näkymän päälle aukeaa kortti, ja katkoviiva näyttää alustasi.
2. Kohdassa **Lisää kirjastosta** kirjoita nimi hakukenttään, paina {{ui:Hae}} ja paina {{ui:Lisää}} tulosta. Kohde asettuu alustalle täyskokoisena tai pienennettynä, jotta se mahtuu. Kaikki jo piirtämäsi tai tuomasi kohteet, jotka näkyvät näkymässä, ovat myös alustalla.
3. Kohdassa **Alustalla** tarkista kunkin kohteen koko. Kohde, jonka merkintä on **Alustan ulkopuolella**, pitää siirtää. Siirrä, kierrä ja skaalaa kohteita näkymässä tavallisilla työkaluilla.
4. Paina {{ui:Järjestä alustalle}} levittääksesi kohteet, tai {{ui:Sovita kaikki alustalle}} pienentääksesi ne niin, että ne mahtuvat.
5. Kohdassa **Tulostimesi** valitse **Alusta**-koko tai yksi tulostinprofiileista.
6. Kohdassa **Tulostusasetukset** valitse **Materiaali**, **Laatu** ja **Täyttö %**, ja ruksaa **Lisää tuet ulokkeiden alle**, jos muoto niitä tarvitsee.
7. Paina {{ui:Esikatsele kerrokset}} ja siirrä **Taso**-liukusäädintä tarkastellaksesi viipaloituja tasoja. Jos muutat vaihetta tai asetuksia myöhemmin, paina {{ui:Esikatsele kerrokset}} uudelleen.
8. Kohdassa **Yhteys** valitse {{ui:USB-kaapeli}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} tai {{ui:PrusaLink}}. USB:lle paina {{ui:Yhdistä}}. Verkkotulostimelle kirjoita sen **Osoite** (ja **API-avain**, jos sitä kysytään) ja paina {{ui:Testaa yhteys}}.
9. Paina {{ui:Lähetä 3D-tulostimeen}}. Kortti kysyy, onko alusta tyhjä ja oikea materiaali ladattu, ja näyttää ajan, materiaalin ja lämpötilat. Vahvista lähettääksesi.

Saat ilmoituksen, että tulostin käynnistyy. {{ui:Pysäytä tulostus}} sammuttaa lämmittimet, tuulettimen ja moottorit. Jos haluat vain tiedoston, paina {{ui:Tallenna G-koodi sen sijaan}}.

## Huomautukset

- USB vaatii Chromen tai Edgen tietokoneella, ja sivun täytyy pysyä auki, kunnes tulostus päättyy. Sivun sulkeminen pysäyttää virran.
- Verkkotulostimen täytyy sallia tämä sivusto (Moonrakerissa lisää se `cors_domains`-kohtaan; OctoPrintissa ota CORS käyttöön ja kopioi API-avain). Selaimesi saattaa kysyä lupaa ottaa yhteys verkkosi laitteisiin.
- Mikään ei yhdisty tai lähetä ilman napsautustasi.
- Viipalointiohjelmien luettelo on kohdassa **Viipalointiohjelma**. {{ui:CadCraft basic (mukana, nopein)}} on sisäänrakennettu. Kiri:Moto, PrusaSlicer, OrcaSlicer ja Bambu Lab P2S ovat omia lisäosiaan, jotka otat käyttöön kortista tai kohdasta {{ui:Asetukset}} › {{ui:Lisäosat}}. PrusaSlicer ja OrcaSlicer käyttävät omaa kopiotasi ja toimivat CadCraft Studiosta tietokoneella.
- Osat, jotka eivät ole suljettuja kiintokappaleita, jätetään pois, ja kortti kertoo, kuinka suuri osa muodosta se on.
- Hartsitulostimia varten katso [Viipalointi hartsitulostimelle](topic:resin-printing). Mallin tarkistamista tai korjaamista varten katso ensin [Tuet, seinämän paksuus, ontoksi tekeminen ja korjaus](topic:print-tools).
