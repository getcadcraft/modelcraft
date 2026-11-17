---
title: Vianmääritys
summary: Oireet, syyt ja korjaukset tyhjästä 3D-näkymästä virheellisen kokoisiin tuontiin, ModelCraftin näyttämine viesteineen.
keywords: ongelma, vika, virhe, ei toimi, tyhjä, webgl, grafiikka, hidas, viesti, tuonti epäonnistui, väärä koko, ei voi valita, kosketus, näppäimet eivät toimi, työn menetys
from: 6e7394be
---

## 3D-näkymä on tyhjä

**Oire:** keskikohta pysyy tyhjänä tai näyttää vain taustavärin, eikä työkalujen napsauttaminen tee mitään.

**Syy:** ModelCraft piirtää WebGL 2:lla, selaimen 3D-grafiikalla. Se puuttuu, kun selain on vanha, laitteistokiihdytys on pois päältä tai näytönohjaimen ajuri on estetty.

**Korjaus:**

:::chromium
1. Avaa selaimen asetukset ja hae "laitteistokiihdytys".
2. Kytke päälle "Käytä laitteistokiihdytystä, kun se on käytettävissä" ja käynnistä selain uudelleen.
3. Jos se on jo päällä, kirjoita osoiteriville `chrome://gpu` (Edgessä `edge://gpu`) ja etsi luettelosta "WebGL2". Jos se on pois käytöstä, päivitä näytönohjaimen ajuri.
:::

:::firefox
1. Avaa **Asetukset**, sitten **Yleiset**, ja vieritä kohtaan "Suorituskyky".
2. Poista valinta kohdasta "Käytä suositeltuja suorituskykyasetuksia" ja valitse "Käytä laitteistokiihdytystä, kun se on käytettävissä". Käynnistä Firefox uudelleen.
3. Jos se yhä epäonnistuu, kirjoita osoiteriville `about:support` ja katso osiosta "Grafiikka" WebGL 2.
:::

:::safari
Päivitä macOS ja Safari. Uudet Safari-versiot pitävät WebGL 2:n aina päällä. Jos muutit kokeellisia ominaisuuksia kohdassa **Safari**, sitten **Asetukset**, sitten **Lisäasetukset** (tai **Feature Flags**), palauta ne.
:::

Työkoneella, etätyöpöydällä tai virtuaalikoneella käytännöt voivat estää 3D-grafiikan. Kokeile toista tietokonetta. Katso [Selaimet ja tietokoneet](common:browsers).

## Näppäimet eivät tee mitään tai kirjoittavat kenttään

**Syy:** näppäinfokus on paneelin kentässä: luettelo {{ui:Pinnat}} kohdassa {{ui:Tyyli}}, aurinkoasetus, kenttä {{ui:Nimi}} kohdassa {{ui:Kohteen tiedot}} tai yksikkövalitsin. Kirjaimet ja nuolinäppäimet menevät silloin siihen kenttään.

**Korjaus:** napsauta 3D-näkymää ja paina näppäintä uudelleen. Näppäimet eivät myöskään tee mitään, kun valintaikkuna on auki.

## Numeron kirjoittaminen ei tee mitään

- **Suuntaa ei vielä ole.** Kirjoitettu pituus menee sen suuntaan, johon osoitin osoittaa ensimmäisestä napsautuksesta. Siirrä osoitinta hieman haluamaasi suuntaan ja kirjoita sitten.
- **Väärä hetki.** Useimmat työkalut hyväksyvät kirjoitetun arvon vasta ensimmäisen napsautuksen jälkeen: napsauta ensin ensimmäinen kulma, pinta tai piste, josta siirrät. {{ui:Ympyrä}} ja {{ui:Monikulmio}} ottavat sivujen määrän ennen ensimmäistä napsautusta.
- **”Kirjoita pituus, kuten 3m, 10'6" tai 4m,3m.”** ModelCraft ei pystynyt lukemaan sitä. Tarkista, ettei käytössä ole desimaalipilkkua (`2,5`): käytä pistettä.

## Kohde alkaa väärästä paikasta kosketusnäytöllä

**Oire:** sormella ensimmäinen suorakulmio on kunnossa, mutta seuraava suorakulmio, ympyrä tai viiva alkaa siitä, mihin edellinen kosketus päättyi, eikä siitä, mihin kosketit.

**Syy:** tämän version virhe: kosketusnäytöllä työkalu muistaa edellisen eleen viimeisen tartuntapisteen.

**Korjaus:** napauta työkalun painiketta työkalurivillä uudelleen ennen jokaista uutta muotoa. Se aloittaa työkalun alusta, ja ensimmäinen piste osuu sinne, mihin kosketat.

## Yhden ryhmän muokkaaminen muutti toista

**Oire:** kopioit ryhmän {{ui:Siirrä}}- ja {{key:Ctrl}}-yhdistelmällä, avasit yhden kopion ja muokkasit sitä, ja toinen kopio muuttui myös. {{ui:Jäsennys}} näyttää molemmat samalla nimellä.

**Syy:** tässä versiossa ryhmän kopiointi tekee toisen sijoituksen samasta ryhmästä, kuten komponentissa. ModelCraftin {{ui:Tee yksilölliseksi}}-painike on tarjolla vain komponenteille.

**Korjaus:** valitse kopio, jota haluat muuttaa, napsauta kohdassa {{ui:Kohteen tiedot}} {{ui:Tee komponentti}} ja sitten {{ui:Tee yksilölliseksi}}. Tällä kopiolla on nyt oma sisältö. Vaihtoehtoisesti voit käyttää {{ui:Hajota}}-toimintoa.

## Työntäminen ja vetäminen ei tee sitä, mitä odotin

- **”Työnnä/vedä toimii pinnalle. Napsauta pintaa.”** Napsautit särmää tai tyhjää tilaa. Vie osoitin pinnan päälle, kunnes se korostuu, ja napsauta.
- **Pinta on ryhmän sisällä.** Kaksoisnapsauta ryhmää ensin avataksesi sen.
- **Ikkuna ei leikannut seinän läpi.** Suorakulmion täytyy olla piirretty seinän pinnalle, ei sen eteen, ja seinällä täytyy olla takapinta. Katso [Leikkaa aukko seinän läpi](topic:openings#if-it-did-not-cut-through).
- **Kaksi laatikkoa menevät päällekkäin sulautumatta.** Kiintokappaleet, jotka on työnnetty toisiinsa, eivät leikkaa tai yhdistä toisiaan tässä versiossa.

## Viiva tai muoto ei tehnyt pintaa

Pinta täyttyy vain, kun särmät sulkevat tasaisen silmukan. Tarkista, että viimeinen piste tarttui ensimmäiseen ("Päätepiste") ja että kaikki särmät ovat samassa tasossa. Silmukka, joka on hieman tasosta poikkeava, jää viivoiksi. Piirrä yksi sen särmistä uudelleen tarttuen kulmiin.

## Pintaa ei voi valita tai poistaa

- Valitsemalla {{ui:Valitse}}-työkalulla särmän lähellä napsautus ottaa särmän. Napsauta lähempänä pinnan keskikohtaa.
- {{ui:Pyyhekumi}} ei poimi pintoja. Valitse pinta ja paina {{key:Delete}}, tai poista yksi sen särmistä.
- Jos pinta kuuluu ryhmään tai komponenttiin, napsautus valitsee koko kohteen. Kaksoisnapsauta avataksesi sen.

## "Valitse ensin jotain siirrettäväksi tai napsauta sitä."

{{ui:Siirrä}}, {{ui:Kierrä}} ja {{ui:Skaalaa}} tarvitsevat jotain käsiteltävää: valitse se ensin tai aloita työkalu napsauttamalla itse kohdetta (ei tyhjää tilaa tai apuviivaa).

## "Valitse ensin geometriaa (vedä ikkuna tai kolmoisnapsauta valitaksesi kaiken yhteen kuuluvan)."

{{key:G}} ja {{key:Shift+G}} tarvitsevat valinnan. Apuviivoja ei voi ryhmitellä.

## Nuolinäppäimet kiertävät lukitsemisen sijaan

Lukitukset toimivat vain piirto- tai muokkaustyökalun ensimmäisen napsautuksen jälkeen. {{ui:Työnnä/vedä}}-työkalussa ei ole lukituksia, eikä {{ui:Kierrä}}-työkalussa ne muuta kääntöä. Muulloin nuolinäppäimet kiertävät näkymää.

## Esc kokoruudussa

Kokoruudussa selain saattaa käyttää ensimmäisen {{key:Esc}}-painalluksen kokoruudusta poistumiseen. Paina {{key:Esc}} uudelleen peruuttaaksesi työkalun.

## Ei keskipainiketta

Paina {{key:O}} valitaksesi {{ui:Kiertokatselu}} ja vedä, tai käytä nuolinäppäimiä. Katso [Kierto, panorointi ja zoomaus](topic:orbit-pan-zoom#without-a-middle-button).

## Tuonti

| Viesti | Mitä tehdä |
|---|---|
| ”ModelCraft tuo SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG ja DXF -tiedostoja. … ei ole mikään näistä.” | Vie malli toisesta ohjelmasta yhdessä näistä muodoista |
| ”Tämä tiedosto on yli 300 MB.” | Yksinkertaista tai jaa malli toisessa ohjelmassa |
| ”…liian suuri mallinnettavaksi täällä (yli 2 miljoonaa kärkipistettä).” | Sama |
| ”Tämä .gltf-tiedosto tarvitsee "…"…” | Vedä `.gltf` yhdessä sen `.bin`- ja tekstuuritiedostojen kanssa tai avaa `.glb`-versio |
| ”Tämä glTF-tiedosto tarvitsee … -laajennuksen, jota ModelCraft ei vielä lue.” | Vie uudelleen toisesta ohjelmasta ilman tätä laajennusta (esimerkiksi KTX2-tekstuurit) |
| OBJ tulee ilman värejään tai tekstuurejaan | Vedä `.obj` yhdessä sen `.mtl`- ja kuvatiedostojen kanssa |
| ”Tämä Alembic-tiedosto käyttää vanhaa HDF5-rakennetta…” | Tallenna se uudelleen toisesta ohjelmasta Ogawa Alembic -tiedostona |
| FBX tulee ilman tekstuurejaan | Vedä `.fbx` yhdessä tekstuurikuvien kanssa tai upota media viedessä |
| ”Tämä FBX-tiedosto on versiota …, jota ModelCraft ei lue” | Vie uudelleen FBX 2011:nä tai uudempana |
| STL- tai PLY-tiedosto tulee 1,000 kertaa liian suurena tai pienenä | STL luetaan millimetreinä ja PLY metreinä: skaalaa se (katso [Kierto ja skaalaus](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| ”Tämä ei ole Collada (.dae) -tiedosto…” tai ”…ei ole hyvin muodostettua XML:ää…” | Tiedosto on vioittunut tai ei ole Collada. Vie se uudelleen |
| ”Tässä Collada-tiedostossa ei ole geometriaa, jonka ModelCraft voi tuoda.” | Se sisältää vain kameroita, valoja tai viittauksia muihin tiedostoihin |
| ”Tämä on binäärinen DXF. Tallenna se ASCII-DXF:nä ja yritä uudelleen.” | Tallenna se uudelleen CAD-ohjelmasta ASCII-muodossa |
| ”Tämä ei ole DWG-piirustus…” | Tiedosto ei ole DWG, tai se on vioittunut |
| ”Tätä piirustusta ei voitu lukea (…). Se voi olla vioittunut tai tallennettu DWG-versiossa, jota lukija ei käsittele…” | Sulkeissa on syy. Tallenna se CAD-ohjelmasta DXF:nä tai DWG:nä, joka on AutoCAD 2000:sta 2018:aan |
| ”Tämä piirustus ulottuu yli 10,000 km:n päähän origostaan…” | Siirrä piirustus lähelle kohtaa 0,0 CAD-ohjelmassa |

### Tuonti on väärän kokoinen tai makaa kyljellään

- **OBJ:** OBJ ei sisällä yksikköä; ModelCraft lukee metrejä. Millimetrimalli tulee 1000 kertaa liian suurena: [skaalaa](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) se arvolla `0.001`, tuumamalli arvolla `0.0254`.
- **OBJ kyljellään:** ModelCraft odottaa OBJ-tiedostoja, joissa Y on ylhäällä. Tiedosto, jossa Z on ylhäällä, tulee makaamaan. Käännä sitä 90° punaisen akselin ympäri: napsauta {{ui:Kierrä}}-keskipistettä pinnalla, joka on punaiseen akseliin päin, tai avaa tiedosto ohjelmassaan ja vie se Y ylhäällä.
- **DWG tai DXF:** valitsit väärän yksikön ”Piirustuksen yksiköt” -valintaikkunassa. Kumoa ja tuo uudelleen.

## Tiedostojen avaaminen

| Viesti | Mitä tehdä |
|---|---|
| ”Tämä tiedosto ei ole ModelCraft-malli (se ei ole JSON).” | Käytä {{ui:Tuo}}-toimintoa muille muodoille |
| ”Tämä ei ole ModelCraft-tiedosto, jonka voimme avata: …” | Tiedosto on vioittunut tai sitä on muutettu käsin |
| ”Tämän mallin on tallentanut uudempi ModelCraft…” | Avaa se uudemmassa versiossa |
| ”Tämä tiedosto on yli 200 MB.” | Malli on liian suuri avattavaksi täällä |

## Työn menetys

ModelCraft ei tallenna tiedostoon itsestään. Kun suljet tai lataat uudelleen välilehden, jossa on tallentamattomia muutoksia, selain kysyy ensin (”Poistutaanko sivulta?” tai ”Ladataanko sivu uudelleen?”). Valitse pysyä ja tallenna. Myös Uusi ja {{ui:Avaa}} kysyvät ("Tallentamattomat muutokset"). Jos selain tai tietokone kaatui, avaa ModelCraft uudelleen samassa selaimessa: se tarjoaa tallentamattoman työn takaisin (”Palautetaanko työsi?”; katso [Palauta työsi](common:recover)). Tallenna usein painamalla {{key:Mod+S}}.

## Latauskansio täyttyy kopioista

Jokainen tallennus on uusi lataus, nimeltään `Untitled (1).modelcraft`, `Untitled (2).modelcraft` ja niin edelleen. Poista vanhat tai aseta selain kysymään, minne kukin tiedosto tallennetaan, ja korvaa vanha tiedosto itse. Katso [Avaa, tallenna, tuo ja vie](topic:files#save-a-model).

## Työskentely hidastuu

- Jokainen kumoamisvaihe säilyttää kopion mallista (verkko säilyttää vain muuttuneen), joten hyvin suuressa työntämis- ja vetogeometrian tuonnissa jokainen muokkaus vie kauemmin. Hajota tai poista tarpeeton, tallenna ja avaa uudelleen: uudelleen avaaminen tyhjentää myös kumoushistorian.
- Auringon varjot vievät eniten. Poista {{ui:Auringon varjot}} valinta, kun mallinnat.

## Ei varjoja

{{ui:Auringon varjot}} on pois päältä, aurinko on alhaalla valitsemallasi hetkellä (”Aurinko on alhaalla tähän aikaan.”), tai tyyli on {{ui:Rautalanka}}, joka ei piirrä varjoja.

## "Tämä selain ei sallinut kokoruutua."

Jotkin selaimet ja upotetut näkymät eivät salli kokoruutua. Käytä selaimen omaa kokoruutua ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft ei avaudu ilman yhteyttä

ModelCraft avautuu offline-tilassa vain, jos se on tallennettu offline-käyttöön kyseisessä selaimessa: sovelluspalkin painikkeen on oltava {{ui:Offline valmis}}. Avaa se yhteydessä ja napsauta {{ui:Tallenna offline-käyttöön}}. Jos painike näyttää {{ui:Tallennus ei onnistunut}}, napsauta sitä uudelleen paremmalla yhteydellä. {{ui:Offline ei käytettävissä}} tarkoittaa, että tämä ikkuna (yksityinen ikkuna tai hallittu tietokone) ei voi säilyttää kopiota. Katso [Työskentely offline-tilassa](common:offline).
