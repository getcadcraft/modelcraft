---
title: ModelCraft-asetukset
summary: Valitse tuntemasi näppäintyyli, tee kiertäminen ja panorointi kosketuslevyllä ilman kamerapainikkeita sekä kytke tartunta ja kiintokappaleiden törmäys päälle tai pois.
keywords: asetukset, mieltymykset, ohjaimet, näppäintyyli, näppäinkartta, pikanäppäimet, blender, kosketuslevy, vieritys, kiertäminen, nipistys, tartunta, törmäys, päällekkäisyys, leikkaus, läpi meneminen
from: caf77d5b
---

Avaa {{ui:Asetukset}} sovelluspalkin rattaasta tai painamalla {{key:Mod+,}}. Ensimmäinen välilehti, {{ui:ModelCraft}}, sisältää tähän sovellukseen kuuluvat asetukset; {{ui:Yleiset}} sisältää ne, jotka kaikki CadCraft-sovellukset jakavat (teema, työkalurivi, paneelit). ModelCraft-asetukset ovat vain tässä sovelluksessa: muutat niitä täällä, ja tämä selain muistaa ne.

## Ohjaimet: mitkä näppäimet ja hiiren painikkeet

Kaksi näppäintyyliä. Vaihda ne täältä {{ui:Näppäimet: Työnnä/vedä}} / {{ui:Näppäimet: Mallintaja}} -valinnoilla näkymän oikeassa alakulmassa tai työkalurivin {{ui:Lisää}}-valikon lopussa:

- **Työnnä/vedä-tyyli** (aloitustila; työnnä/vedä-mallintajien, kuten SketchUpin, kirjaimet): kirjain valitsee työkalun — {{key:L}} viiva, {{key:R}} suorakulmio, {{key:P}} työnnä/vedä, {{key:M}} siirrä, {{key:Q}} kierrä, {{key:S}} skaalaa, {{key:G}} tee komponentti. Katso [Näppäimet ja hiiritoiminnot](topic:keyboard).
- **Mallintaja-tyyli** (verkkomallintajien, kuten Blenderin, näppäimet): valitse ensin ja toimi sitten heti valinnan kanssa. {{key:G}} siirtää sitä, {{key:R}} kiertää ja {{key:S}} skaalaa osoittimen kohdasta — ei ensimmäistä napsautusta. Siirron aikana {{key:X}}, {{key:Y}} tai {{key:Z}} lukitsee punaisen, vihreän tai sinisen akselin, kirjoitettu luku asettaa etäisyyden (tai asteet tai kertoimen), ja napsautus tai {{key:Enter}} laskee kohteen paikalleen; {{key:Esc}} tai hiiren oikea painike palauttaa sen. Sen jälkeen palataan {{ui:Valitse}}-työkaluun.

Näppäintyyli on sama valinta kuin valikkotyyli: Mallintaja-näppäintyyli on {{ui:Mallintaja}}-valikkotyyli, ja yhden valinta valitsee toisen. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse). Koko Mallintaja-luettelo on kohdassa [Näppäimet ja hiiritoiminnot](topic:keyboard#modeler-keys). Työkalurivin ja aloituskortin työkaluvihjeet seuraavat valitsemaasi tyyliä.

## Vieritys: hiiren rulla tai kosketuslevy

- **Tunnista itse** (aloitustila): ModelCraft tarkkailee vieritystä. Sivuttainen tai hienojakoinen vieritys, jota kosketuslevy lähettää, kiertää; kokonaiset rullan napsahdukset zoomaavat.
- **Hiiren rulla**: vieritys zoomaa aina kohti osoitinta.
- **Kosketuslevy**: pyyhkäise kahdella sormella kiertääksesi, pidä {{key:Shift}} pohjassa ja pyyhkäise panoroidaksesi, nipistä zoomataksesi. {{ui:Kiertokatselu}}-, {{ui:Panoroi}}- ja {{ui:Zoomaa}}-painikkeita ei tarvita koskaan.

Nipistys zoomaa jokaisessa valinnassa. Jos **Tunnista itse** arvaa hiirelle tai kosketuslevylle väärin, valitse se, jolla työskentelet.

:::tip
Mallintaja-tyylissä voit kiertää myös pitämällä {{key:Alt}} pohjassa ja vetämällä sekä panoroida {{key:Alt+Shift}} ja vetämällä — kätevä kannettavalla ilman keskipainiketta.
:::

## Tartunta

**Tartunta pisteisiin, särmiin ja akseleihin** (päällä aloitustilassa) vetää osoittimen päätepisteisiin, keskikohtiin, särmiin, ohjeviivoihin sekä punaisiin, vihreisiin ja sinisiin akseleihin — katso [Päättely](topic:inference). Kytke se pois, kun haluat sijoittaa jotain vapaasti muun geometrian lähelle niin, ettei se hyppää. Pinnat, maa ja akselilukitukset toimivat edelleen, vaikka tartunta on pois päältä.

{{ui:Tartunta}}-painike näkymän oikeassa alakulmassa tekee saman tämän istunnon työlle (se tallentuu myös). Mallintaja-tyylissä {{key:Shift+Tab}} vaihtaa sen.

## Kappaleet pysähtyvät kosketuskohtaan

**Pysäytä kiintokappaleet kosketuskohdassa** (päällä aloitustilassa) estää seinän vetämisen toisen seinän läpi. {{ui:Siirrä}}-työkalulla (ja {{key:G}}:llä sekä liitä-ja-siirrä-toiminnolla {{key:Mod+D}}) valinta liukuu toisen kiintokappaleen luo ja pysähtyy kiinni siihen; {{ui:Työnnä/vedä}}-työkalulla pinta pysähtyy, kun se osuu toiseen kiintokappaleeseen. Jonkin päällä lepääminen ja sitä pitkin liukuminen on sallittua — pysäytetään vain sisään meneminen. Asiat, jotka ovat jo valmiiksi päällekkäin aloittaessa, voi edelleen vetää erilleen.

Jos haluat työntää jonkin läpi tarkoituksella, napsauta oikeassa alakulmassa {{ui:Törmäys}}-painiketta (tai poista asetus käytöstä), tee siirto ja napsauta sitä uudelleen.

:::note
Törmäykset tarkistetaan siirroissa ja työnnä/vedä-toiminnossa. {{ui:Kierrä}}- ja {{ui:Skaalaa}}-toiminnot eivät tarkista niitä vielä, ja irralliset kohteet, jotka koskettavat toisiaan, yhdistyvät edelleen kuten aina: pidä erilliset kohteet [ryhmissä](topic:groups-components), jotta ne pysyvät erillisinä.
:::

## 3D-tulostimen alusta

Tulostimen alustan koko: {{ui:Ei asetettu}} (aloitustila), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 tai 300 × 300 × 400 mm. Valitse koko, joka on lähinnä tulostimen tulostustilavuutta. [Tarkista 3D-tulostus](topic:print-3d) kertoo sitten, kun malli on alustaa suurempi; {{ui:Ei asetettu}}-tilassa kokoa ei tarkisteta.

## Kiertokatselu ja panorointi

**Kierrä osoittimen alla olevan kohteen ympäri** (päällä aloitustilassa): kiertäminen kääntyy mallin osan ympäri, joka on osoittimen alla, ja panorointi pitää tämän pisteen osoittimen alla; tyhjän tilan päällä molemmat käyttävät näkymän keskustaa. Kytke pois, jos haluat aina kiertää näkymän keskustan ympäri. **Kiertonopeus** ja **Panorointinopeus** vaihtelevat välillä 0.25× – 3× (1× on aloitustila) ja koskevat hiirtä, kosketuslevyä, kosketusta ja nuolinäppäimiä. Katso [Kiertäminen, panorointi ja zoomaus](topic:orbit-pan-zoom).

## Kulmaindikaattori

Mitä 3D-näkymän kulmassa näkyy: **Näkymäkuutio** (aloitustila; oikealla ylhäällä — napsauta pintaa, särmää tai kulmaa katsoaksesi sieltä, vedä sitä kiertääksesi, vedä sen kompassirengasta kääntääksesi mallia), **Akselikuvake** (pieni X-, Y- ja Z-merkki vasemmassa alakulmassa, joka kääntyy näkymän mukana: X punainen, Y vihreä, Z sininen) tai **Ei mitään**. Katso [Näkymäkuutio](topic:view-cube).
