---
title: Muokkaimet verkolla, ryhmällä tai komponentilla
summary: Skaalaa, peilaa, taulukoi, tasoita, viistä, leikkaa ja taivuta verkkoa muuttamatta sitä. Toista tai skaalaa ryhmää tai komponenttia samalla pinolla ja tee siitä pysyvä, kun olet valmis.
keywords: muokkain, muokkaimet, pino, ryhmä, komponentti, skaalaa, paista, muokkaa lähdettä, ei-tuhoava, peilaa, matriisi, säteittäinen matriisi, jakopinta, tasoita, viistä, paksunna, boolen, leikkaa, siirrä pintaa, kohina, hitsaa, harvenna, yksinkertaista, hila, häkki, käyräsiirto, taivuta, kutistuskääre, käytä
from: dd5ec1cb
---

**Muokkain** muuttaa sitä, mitä verkko näyttää, muuttamatta itse verkkoa. Peilaa yksi osan puolikas ja mallinna vain se puolikas. Pyöristä laatikko jakopinnalla ja jatka laatikon muokkaamista. Muokkaimet ovat **pinossa** ja toimivat järjestyksessä ylhäältä alas. Näkemäsi, viemäsi, tulostamasi ja renderöimäsi on verkko kaikkine päällä olevine muokkaimineen.

## Lisää muokkain

1. Valitse verkko. Malli-työtilassa sen **Muokkaimet**-osa on kohdassa {{ui:Kohteen tiedot}}. Verkkotyötilassa se on oikealla olevassa paneelissa.
2. Valitse yksi kohdasta {{ui:Lisää muokkain…}}. Se lisätään pinon alareunaan.
3. Muuta sen asetuksia nimen alla. Pituudet ottavat samat arvot kuin arvokenttä, joten `600mm`, `2'6"` ja `(6m)/4` toimivat kaikki.

Jokainen muutos on yksi kumoamisvaihe: {{key:Mod+Z}} kumoaa sen.

## Kunkin muokkaimen painikkeet

- Valintaruutu kytkee sen päälle tai pois.
- Näyttöpainike näyttää tai piilottaa sen näkymässä (se pysyy pinossa).
- Kamerapainike näyttää tai piilottaa sen renderöidyissä kuvissa ja videoissa. Muokkain voi siis olla vain renderöintiä varten (tai vain näkymää varten).
- Nuolet siirtävät sitä ylös tai alas pinossa. Järjestyksellä on merkitystä: ensin peilaus ja sitten jakopinta antaa tasaisen sauman, mutta ensin jakopinta ja sitten peilaus ei anna.
- {{ui:Käytä}} tekee muodosta osan verkkoa: sen yläpuolella olevat muokkaimet ja tämä muokkain tehdään itse verkolle, ja ne poistuvat pinosta. Se on yksi kumoamisvaihe.
- Rasti poistaa sen.

## Muokkaimet

| Muokkain | Mitä se tekee |
| --- | --- |
| Skaalaus | Skaalaa kohteen origon ympäri punaisen, vihreän ja sinisen kertoimella. Myös ryhmällä tai komponentilla. |
| Peilaus | Lisää peilatun kopion punaisen, vihreän tai sinisen yli verkon origon kautta, ja yhdistää puolikkaat niiden kohdatessa. |
| Matriisi | Kopioi suoraan viivalle (oma askel kerrottuna antamillasi luvuilla, plus kiinteä askel), akselin ympäri tai mallin käyrää pitkin. Ryhmä tai komponentti ottaa viivan. |
| Jakopinta | Tasoittaa verkon Catmull-Clark-jakamisella. Terävät särmät pysyvät laskostettuina. Renderöinnit voivat käyttää enemmän tasoja kuin näkymä. |
| Viiste | Pyöristää jokaisen särmän, joka on terävämpi kuin antamasi kulma. |
| Paksunna | Antaa pinnalle paksuuden ja sulkee reunan. |
| Boolen | Leikkaa pois, yhdistää tai säilyttää päällekkäisyyden toisen kohteen kanssa mallissa. Molempien täytyy olla suljettuja kiintokappaleita. |
| Pinnan siirto | Siirtää pintaa sisään tai ulos sileällä kohinalla. Sama siemen antaa joka kerta samat kyhmyt. |
| Hitsaus | Yhdistää kärkipisteet, jotka ovat lähempänä toisiaan kuin annettu etäisyys. |
| Harvennus | Säilyttää osuuden kolmioista ja poistaa ne, jotka muuttavat muotoa vähiten. |
| Tasoitus | Rentouttaa kärkipisteitä kohti naapureitaan. |
| Hila | Taivuttaa verkon häkillä: siirrä häkin pisteitä, ja verkko seuraa. |
| Käyräsiirto | Taivuttaa verkon mallin käyrää pitkin punaisen, vihreän tai sinisen suuntaan. |
| Kutistuskääre | Siirtää jokaisen kärkipisteen toisen kohteen lähimmälle pisteelle. |

## Ryhmällä tai komponentilla

Myös ryhmä tai komponentti voi säilyttää reseptin. Lampunvarjostin voi olla yhden varjostimen **Skaalaus** ja **Matriisi**, ja yhden luvun muuttaminen muuttaa koko lamppua.

1. Valitse ryhmä tai komponentti. Kohdassa {{ui:Kohteen tiedot}} sen **Muokkaimet**-osa listaa pinon (aluksi tyhjä).
2. Valitse {{ui:Skaalaus}} tai {{ui:Matriisi}} kohdasta {{ui:Lisää muokkain…}}. Ryhmästä tulee komponentti, joka on **alkuperäinen, pinon sijoittama**. Alkuperäinen säilyy: muokkaa sitä, ja jokainen kopio seuraa heti.
3. Skaalaus ottaa kertoimen punaiselle, vihreälle ja siniselle (`1, 1, 2` kaksinkertaistaa korkeuden). Matriisi ottaa kopioiden määrän, askeleen osuutena tähän asti syntyneen tuloksen koosta sekä lisäaskeleen pituuksina.

Pino kulkee ylhäältä alas alkuperäisen omilla akseleilla sen origon ympäri, joten järjestyksellä on merkitystä. Kolme kopiota 3 m välein ja sen jälkeen Skaalaus 2 punaiselle asettaa kopiot 6 m välein. Ensin Skaalaus ja sitten Matriisi pitää ne 3 m välein. Valintaruutu, nuolet ja rasti toimivat kuten verkossa. Näkymä- ja kamerapainikkeet sekä Käytä yksittäisessä muokkaimessa eivät toimi, koska pino ryhmällä on yksi kokonaisuus.

- {{ui:Muokkaa lähdettä}} avaa alkuperäisen paikallaan. Muutokset näkyvät jokaisessa kopiossa, ja sulkeminen palauttaa sinut sinne, mistä tulit.
- {{ui:Paista muokkaimet}} tekee tuloksesta tavalliset särmät ja pinnat ja poistaa pinon yhdessä kumoamisvaiheessa. Päällekkäiset kopiot pysyvät erillisinä geometrioina: paistaminen ei ole liitos.
- Komponentin kopiot jakavat reseptin. {{ui:Tee yksilölliseksi}} erottaa sen (alkuperäinen pysyy jaettuna).
- Pino tallennetaan tiedostoon, ja se siirtyy kopioinnissa ja liittämisessä sekä kumoamisessa. Poista käyttämättömät säilyttää alkuperäisen. Ohjelma, joka ei tunne muokkaimia, näyttää silti kopiot.
- Ennen paistamista tulokseen ei voi mennä sisälle, sitä ei voi hajottaa, koon muuttaa tai venyttää: se rakennettaisiin uudelleen seuraavassa muutoksessa. Jokainen kertoo siitä.
- Rajat ovat 32 muokkainta ja 1,000 kopiota. Venytettäväksi tehtyä komponenttia (Stretch) ja pinoa ei voi vielä jakaa samaa määritelmää.

## Jakopinta

Jakopinta tasoittaa verkon Catmull-Clark-menetelmällä: jokainen pinta muuttuu nelisivuisiksi pinnoiksi, ja jokainen taso tekee niitä neljä kertaa enemmän. Laatikko, jossa on kaksi tai kolme tasoa, näyttää jo pyöreältä muodolta, ja laatikkoa muokataan edelleen.

- **Tasot näkymässä** asettavat sen tasaisuuden.
- **Tasot renderöinneissä** asettavat, kuinka tasaisia renderöidyt kuvat ja videot ovat. Renderöinnit voivat käyttää enemmän tasoja kuin näkymä.
- **Renderöinnit todellisella tasaisella pinnalla** siirtävät renderöidyn verkon pisteet rajapintaan, jota tasot lähestyvät. Siksi jopa kaksi tasoa renderöityy yhtä tasaisena kuin monta.
- **Laskokset** pitävät särmät terävinä. Valitse Verkko-työtilassa särmät ja käytä {{ui:Laskos}}-toimintoa (1 pysyy terävänä, 0.5 pyöristää vähän, 0 on tasainen). Katso [Muokkaa verkkoa](topic:mesh-edit).
- **Alenna näkymän tasoa suuressa verkossa:** kun pyydetyt tasot antaisivat enemmän pintoja kuin tämä tietokone käsittelee hyvin, näkymä näyttää alemman tason ja kertoo, mikä se on. {{ui:Käytä}} käyttää aina kaikkia tasoja. Pintojen määrä määräytyy tietokoneesi luokan mukaan kohdassa {{ui:Asetukset}} › Renderöinti › Tietokoneesi.
- Avoimet reunat säilyttävät kulmansa ja pysyvät reunasärmiensä linjalla.

## Taivuta hilahäkillä

1. Lisää {{ui:Hila}}-muokkain ja paina {{ui:Lisää hilahäkki verkon ympärille}}. Verkon ympärille ilmestyy 3 × 3 × 3 pisteen häkki, joka piirtyy lankoina.
2. Avaa häkki Verkko-työtilassa (kaksoisnapsauta sitä) ja siirrä sen pisteitä. Verkko seuraa tasaisesti.

:::tip
Häkki on verkko kuten mikä tahansa muu: piilota se tunnisteellaan, kun olet valmis.
:::

## Suuret verkot

Pienet pinot lasketaan heti. Suuri lasketaan taustalla jokaisella tietokoneesi ytimellä, ja näkymä näyttää edelleen edellisen tuloksen, kunnes uusi on valmis. Booleet lataavat kiintokappalemallintajan ensimmäisellä kerralla, ja näkymä kertoo siitä hetken ajan.

## Mitä muokkaimet eivät vielä tee

- Painot kärkipistettä kohti (vaimennus maalattuna verkolle) Pinnan siirrolle, Tasoitukselle ja Kutistuskäärteelle.
- Muut muokkaimet kuin Skaalaus ja lineaarinen Matriisi työnnä/vedä-geometrialle (ryhmät ja komponentit). Muunna se ensin verkoksi ({{ui:Muunna verkoksi}}). Peilaus, pyöreä tai käyrä-Matriisi, Taivutus ja Kapenevuus ryhmillä tulevat myöhemmin.
