---
title: Kierrä ja skaalaa
summary: Käännä kohteita pisteen ympäri napsauttamalla tai kirjoittamalla asteet, ja muuta kokoa tasaisesti kertoimella.
keywords: skaalauksen otteet, venytä, epätasainen, akselikohtainen, käännä, peilaa, peilattu kopio, käännä akselia pitkin, kierrä, kääntäminen, kulma, asteet, kulmamitta, skaalaa, muuta kokoa, suurenna, pienennä, kerroin, tasainen skaalaus
from: 45cdcb49
---

## Kierrä

{{ui:Kierrä}} ({{key:Q}}) kiertää valintaa keskipisteen ympäri. Se vaatii kolme napsautusta: keskipisteen, alkusuunnan ja loppusuunnan.

1. Valitse, mitä haluat kääntää. Jos mitään ei ole valittuna, Kierrä ottaa ensimmäisen napsauttamasi kohteen.
2. Paina {{key:Q}}. Osoitinta seuraa rengas, joka näyttää tason, jonka suuntaan käännät.
3. Napsauta kiertokeskipistettä.
   - Maassa tai tyhjässä tilassa rengas on vaakasuorassa (sininen): kääntö tapahtuu pystyakselin ympäri, kuten rakennuksen kääntäminen tontillaan.
   - Pinnalla rengas on sen pinnan tasossa: kääntö tapahtuu pinnan oman suunnan ympäri. Napsauta seinää, jos haluat kääntää jotakin vaakasuoran akselin ympäri.
4. Napsauta pistettä, joka asettaa kulman alun, esimerkiksi kääntämäsi kohteen reunaa pitkin.
5. Liikuta osoitinta keskipisteen ympäri. Kulma näkyy kärjessä ja arvokentässä ({{ui:Kulma}}). Kun olet lähellä yhtä askelta, se napsahtaa 15°:n askeleisiin.
6. Napsauta lopettaaksesi, tai kirjoita kulma asteina ja paina {{key:Enter}}: `90`, `45`, `-30`.

   Positiiviset kulmat kiertävät vastapäivään katsottuna renkaan osoittamalta puolelta.

Paina {{key:Ctrl}} (tai {{key:Alt}}) kiertäessäsi, jotta kierrät **kopion** ja alkuperäinen jää paikalleen, kuten siirrossa. Kärki kertoo, onko kopiointi päällä, ja painamalla näppäintä uudelleen se kytkeytyy pois. Kirjoita `3x` heti kierretyn kopion jälkeen, jos haluat lisää kopioita samaan keskipisteeseen.

Kuten siirrossa, yhdistetyn geometrian osan kiertäminen vääntää siihen kiinnittyneitä pintoja. Ryhmitä kohteet ensin, jotta ne kierretään kokonaisina.

:::note
Kärki kertoo, että nuolinäppäimet valitsevat kiertoakselin, mutta tässä versiossa ne kiertävät näkymää ennen ensimmäistä napsautusta. Valitaksesi akselin napsauta keskipistettä pinnalla, joka osoittaa haluamaasi suuntaan. Katso [Ei vielä toteutettu](topic:not-built-yet).
:::

## Skaalaa

{{ui:Skaalaa}} ({{key:S}}) muuttaa valinnan kokoa. Valitse ensin, mitä haluat muuttaa, ja paina sitten {{key:S}}: laatikon kulmiin, reunoihin ja sivujen keskikohtiin ilmestyy pieniä neliöitä (otteita).

### Venytä tai skaalaa otteilla

- **Kulmaote** skaalaa tasaisesti joka suuntaan vastakkaisen kulman ympäri.
- Sivun keskellä oleva ote venyttää vain tätä suuntaa pitkin vastakkaisen sivun ympäri: tee laatikosta pidempi kasvattamatta sen korkeutta.
- Laatikon reunan keskellä oleva ote venyttää kahteen sen yli kulkevaan suuntaan.
- Pidä {{key:Ctrl}} pohjassa, kun napsautat otetta, jos haluat skaalata laatikon keskikohdan ympäri.

Napsauta otetta, liikuta osoitinta ja napsauta uudelleen; tai napsauta otetta, kirjoita kerroin (`2` kaksinkertaistaa, `0.5` puolittaa) ja paina {{key:Enter}}. Jos haluat antaa kullekin suunnalle oman kertoimen, kirjoita kolme: punaiselle, vihreälle ja siniselle: `2,1,0.5`. Avoimen ryhmän sisällä suunnat ovat ryhmän omat.

### Skaalaa mielivaltaisen pisteen ympäri

Napsauta muualle kuin otetta skaalataksesi tasaisesti oman pisteesi ympäri. Se vaatii kolme napsautusta:

1. Valitse, mitä haluat muuttaa. Jos mitään ei ole valittuna, Skaalaa ottaa ensimmäisen napsauttamasi kohteen.
2. Paina {{key:S}}.
3. Napsauta pistettä, joka pysyy paikallaan (ei otetta), esimerkiksi alanurkkaa.
4. Napsauta vertailupistettä. Sen etäisyys ensimmäisestä pisteestä on 1×.
5. Liikuta osoitinta kohti ensimmäistä pistettä tai siitä poispäin. Kerroin näkyy kärjessä ja arvokentässä ({{ui:Skaalaa}}).
6. Napsauta lopettaaksesi, tai kirjoita kerroin ja paina {{key:Enter}}: `2` kaksinkertaistaa koon, `0.5` puolittaa sen.

### Skaalaa tarkkaan kokoon

Tehdäksesi jostakin tarkan pituuden, laske kerroin: uusi pituus jaettuna nykyisellä pituudella. Kolmen napsautuksen tilassa arvokenttä laskee, joten kirjoita `4.2/3.6`, jotta 3.6 m pitkästä seinästä tulee 4.2 m pitkä. Otteen arvokenttä hyväksyy vain tavallisia lukuja: laske kerroin ensin (4.2 / 3.6 on noin 1.1667). Valitse reuna ensin, jotta näet sen nykyisen pituuden kohdasta {{ui:Kohteen tiedot}}.

### Korjaa väärän kokoisena tullut tuonti

OBJ-tiedostoissa ei ole yksikköä, joten millimetreillä piirretty malli tulee 1000 kertaa liian suurena. Valitse tuotu ryhmä, paina {{key:S}}, napsauta kulmaotetta, kirjoita `0.001` ja paina {{key:Enter}}. Tuumoina piirretylle mallille kirjoita `0.0254`.

## Muuta

- Skaalaus kolmen napsautuksen avulla pisteen ympäri on tasaista. Venyttääksesi vain yhteen suuntaan, käytä sivun tai reunan otetta (katso yllä).
- Ryhmän tai komponentin skaalaus muuttaa skaalaamaasi kopiota; komponentin muut kopiot säilyttävät kokonsa.
- Paina {{key:Esc}} ennen viimeistä napsautusta peruuttaaksesi.

## Käännä

{{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Käännä punaista akselia pitkin}}, {{ui:Käännä vihreää akselia pitkin}} tai {{ui:Käännä sinistä akselia pitkin}} peilaa valinnan paikallaan, laatikkonsa keskikohdan kautta: vasenkätinen portaikko muuttuu oikeakätiseksi. Pinnat osoittavat edelleen ulospäin, ja ryhmä tai komponentti peilautuu kokonaisena (sen sisäosia ei kirjoiteta uudelleen).

{{ui:Käännetty kopio punaista akselia pitkin}} (sekä vihreä että sininen) jättää alkuperäisen paikalleen ja asettaa peilatun kopion sen viereen, laatikon toisen puolen yli: parin toisen oven tai rakennuksen toisen siiven. Siihen koskettava irrallinen geometria liittyy alkuperäiseen, kuten koskettava geometria aina tekee; tee alkuperäisestä ensin ryhmä, jos haluat pitää ne erillään.

Avoimen ryhmän sisällä punainen, vihreä ja sininen ovat ryhmän omat akselit.
