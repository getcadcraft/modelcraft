---
title: Tee materiaaleja solmuilla
summary: Rakenna materiaali tekstuureista, kuvista ja laskutoimituksista Varjostus-työtilassa, näe se näkymässä työn edetessä ja maalaa pinnat sillä.
keywords: varjostus, paistaminen, tekstuurin paistaminen, ympäristön varjostus, ao, kaarevuus, normaalipaistaminen, korkea poly, matala poly, valokartta, tarra, tarrat, logo, etiketti, tekstuurin maalaus, maalaa tekstuuri, sivellin, materiaali, materiaalit, materialx, mtlx, openpbr, standardipinta, materiaalikirjasto, librarycraft, tekstuurisarja, pbr, tuo tekstuureja, zip, cc0, vedä, solmu, solmut, solmueditori, varjostin, tekstuuri, proseduraalinen, kohina, shakki, voronoi, solut, aallot, tiilet, laatat, puu, marmori, liukuväri, lika, reunakuluma, väriramppi, sekoitus, kohouma, normaalikartta, karheus, metallisuus, läpinäkyvyys, leikkaus, emissio, hehku, siirtymä, laatikkokartoitus, triplanar, uv, kuva
from: d7368b21
---

Materiaali, joka tehdään **Varjostus**-työtilassa, kuuluu tiedostoon. Se on pieni kaavio: **solmuja**, jotka tuottavat tekstuureja, kuvia ja lukuja, yhdistettynä **Materiaalin ulostuloon**, jonka tulot ovat pinnan ulkonäkö — perusväri, karheus, metallisuus, normaali, läpinäkyvyys, emissio ja muu OpenPBR-malli. Pinnat maalataan sillä kuten mitä tahansa kirjastomateriaalia, ja jokainen muutos näkyy heti näkymässä.

## Avaa se

Valitse työtilaluettelosta {{ui:Varjostus}}. 3D-näkymä säilyttää ruudun yläosan ja **solmueditori** ottaa alaosan. Oikealla oleva paneeli luettelee tiedoston omat materiaalit.

- {{ui:Uusi materiaali}} tekee harmaan materiaalin, jossa on vain sen Materiaalin ulostulo.
- **Tee muokattava kopio kirjastomateriaalista** muuttaa tiilen, puun, laatan ja muut kaavioksi, jota voi muuttaa: sen tekstuuri tulee Kirjastotekstuuri-solmun kautta, kohoumat Kohouma-solmun kautta.
- {{ui:Maalaa sillä}} maalaa valitut pinnat tai ryhmät tai valitsee materiaalin Maalaa-työkalulle. Maalaa-työkalun materiaalit luettelevat myös tiedoston omat kohdassa **Tässä tiedostossa**.
- {{ui:Monista}} ja {{ui:Poista}} koskevat muokattavana olevaa materiaalia. Poistamista ei voi kumota: sillä maalatut pinnat näyttävät oletusvärin, kunnes ne maalataan uudelleen.

## Kirjaston materiaalit

Paneelin **Materiaalikirjasto (Kirjasto)** luettelee kirjaston materiaalit, kullakin esikatselu, jonka CadCraftin polunjäljittäjä on renderöinyt. Ne ovat CC0-lisenssillä julkaistuja tekstuurisarjoja, ja tekijät on mainittu.

- Napsauta yhtä, jolloin se tuodaan tiedostoon (sen kuvat tulevat mukana). Jos pinnat tai ryhmät on valittu, ne maalataan sillä.
- Vedä yksi pinnalle tai ryhmään näkymässä, jolloin vain se maalataan.
- Siitä tulee yksi tiedoston materiaaleista: muuta sen solmuja kuten mitä tahansa muuta. Sen lähdemerkintä näkyy paneelissa ja pysyy tiedostossa.

## Tuo tekstuurisarja

{{ui:Kuvat tai zip…}} tai {{ui:Kansio…}} kohdassa **Tuo tekstuurisarja** tekee materiaalin karttasarjasta. Kartat tunnistetaan tiedostonimien sanoista: color, albedo, diffuse tai basecolor (väri); roughness (tai gloss, muunnettuna karheudeksi); metalness tai metallic (metallisuus); normal (OpenGL tai DirectX, nimen `gl` / `dx` perusteella); height tai displacement (korkeus tai siirtymä); ambient occlusion (ympäristön varjostus); opacity (läpinäkyvyys); emission (emissio). Pakatut kartat (ARM, ORM) jätetään pois. Laatta alkaa kokoa 1 × 1 m: aseta sen todellinen koko Materiaalin ulostulossa. Korkeus menee siirtymään, jonka mittakaava on 0 — nosta mittakaava, jotta sitä voi käyttää verkoissa.

## MaterialX

MaterialX on avoin muoto, jota muut 3D- ja renderointiohjelmat käyttävät materiaalien siirtoon.

- {{ui:Vie MaterialX-muodossa…}} tallentaa muokattavana olevan materiaalin: sen arvot ja jokaisen tekstuurin PNG-kuvana `.mtlx`-tiedoston vieressä (zip-tiedostossa). Valitse varjostin, jolla se kirjoitetaan: **OpenPBR Surface** (MaterialX 1.39, sama malli kuin ModelCraft käyttää) tai **Standard Surface** (MaterialX 1.38, jota useammat ohjelmat lukevat tällä hetkellä). Tekstuurit sijoitetaan UV-koordinaateilla metreinä; laatikko- ja triplanar-sijoitus kirjoitetaan UV:nä.
- {{ui:Tuo MaterialX…}} (tai {{ui:Kansiosta…}}) lukee `.mtlx`-tiedostoja OpenPBR-, Standard Surface-, UsdPreviewSurface- tai glTF PBR -varjostimilla. Anna sille myös kuvat tai kaikki zip-tiedostona: kuva löytyy polkunsa, nimensä tai nimensä toisella kuvatyypillä perusteella (`.exr`-kuvan tiedostonimi voi olla `.jpg` sen vieressä). Tekstuurit, normaalikartat, laskutoimitukset, sekoitukset ja siirtymät tulevat solmuina; muu säilyttää arvonsa, ja tilarivi kertoo, mitä jäi pois.

## Tarrat

Tarra on kuva, joka asetetaan pinnalle — logo, kyltti, etiketti, tahra — ja jolla on oma materiaali.

- Aseta **Uuden tarran leveys**, sitten {{ui:Aseta tarra…}} (tai {{ui:Tarra}} työkalurivillä), valitse PNG-, JPEG- tai WebP-kuva ja napsauta pintaa. Kuva heijastetaan siellä oleville pinnoille säilyttäen suhteensa; PNG:n läpinäkyvät osat pysyvät läpinäkyvinä.
- Se kuuluu ryhmään tai komponenttiin, johon napsautit, ja liikkuu sen mukana. Se peittää laatikkonsa sisällä olevat pinnat, jotka osoittavat samaan suuntaan, ja pysähtyy sen reunoihin, jonka päällä se on.
- Jokainen tarra saa oman materiaalinsa, nimeltään **Tarra: <kuva>**, tiedoston luetteloon: muokkaa sitä kuten mitä tahansa muuta (karheus, kohouma, hehku). Tarran vieressä oleva {{ui:Materiaali}} avaa sen.
- Jokaisen tarran vieressä: sen leveys (korkeus seuraa kuvaa), {{ui:Kierrä}} (neljännes kierros) ja {{ui:Poista}}. Tarrat säilytetään tiedoston materiaalien kanssa, Kumoa-toiminnon ulkopuolella.
- Ne näkyvät varjostetussa näkymässä, pikarenderöinneissä ja laadukkaissa kuvissa.

## Maalaa tekstuuriin

{{ui:Maalaa tekstuuri}} (tai {{ui:Maalaa}} kohdassa **Maalaa tekstuuriin**) muuttaa osoittimen pyöreäksi siveltimeksi. Vedä pinnalla, jolla on jokin tämän tiedoston materiaaleista: sivellin maalaa kuvan, joka on perusvärin takana.

- Verkossa se maalaa verkon UV-koordinaattien mukaan (kääri se ensin UV-työtilassa); muilla pinnoilla se maalaa pinnan yli, joten maalaus toistuu materiaalin laatan mukaan.
- Materiaali, jonka perusväri on tasainen väri, saa ensimmäisen maalauskerran yhteydessä uuden 512 × 512 kuvan tuosta väristä. Materiaali, jonka perusväri tulee muista solmuista, tarvitsee Kuva-solmun, joka on yhdistetty Perusväriin.
- Aseta siveltimen väri, koko (kuvapikseleinä), voimakkuus ja kovuus paneelissa. {{ui:Kumoa veto}} tai Ctrl+Z (maalauksen aikana) peruuttaa vedon, enintään viimeiset 20.
- Maalattu kuva tallennetaan tiedostoon. Kirjastomateriaaleja ei voi maalata: tee ensin muokattava kopio.

## Paista tekstuurit

**Paista tekstuurit** kirjoittaa muodon ja kohtauksen antaman pinnan kuviksi verkon UV-koordinaattien mukaan.

- Valitse verkko, jolla on UV-koordinaatit (kääri se UV-työtilassa), rastita kartat ja paina {{ui:Paista}}:
  - **Ambient occlusion** — kuinka avoin kukin piste on: kulmat, taitokset ja paikat muiden kohteiden alla tummenevat. Kaikki mallissa näkyvä varjostaa sitä peittoetäisyyteen asti.
  - **Curvature** — kirkas ulkoreunoja pitkin, tumma sisäkulmissa, keskiharmaa tasaisilla ja loivasti kaarevilla osilla asettamasi reunaleveyden yli.
  - **Normaalit korkean yksityiskohtaisuuden kohteesta** — valitse myös yksityiskohtainen kopio: sen pinnan yksityiskohdat kirjoitetaan normaalikarttana yksinkertaisemmalle (kohde, jossa on vähemmän kolmioita, paistetaan sen päälle). Hakuetäisyys on se, kuinka kaukana kaksi pintaa saavat olla toisistaan.
  - **Valaistus** — mallin paikan ja päivämäärän aurinko (Tyyli) varjoineen sekä taivas valokarttana.
- Kuvat liittyvät tiedostoon ja näkyvät Kuva-solmuissa. Jos muokattavana olevassa materiaalissa on **Lika ja reunakuluma** -solmu, se lukee uuden ympäristön varjostuksen ja kaarevuuden heti.
- Enemmän säteitä texelia kohti tekee varjostuksesta ja valaistuksesta tasaisempaa ja vie kauemmin. Paistaminen käyttää tietokoneen suorittimen ytimiä taustalla; {{ui:Lopeta paistaminen}} pysäyttää sen.

## Rakenna kaavio

1. {{ui:Lisää solmu…}} (tai {{key:Shift+A}} solmueditorissa) lisää solmun editorin keskelle.
2. Vedä lähtöpisteestä (solmun oikealla puolella) tulopisteeseen (solmun vasemmalla puolella) yhdistääksesi ne. Toinen yhteys tuloon korvaa ensimmäisen; vedä yhdistetty tulo irti poistaaksesi yhteyden.
3. Yhdistämättömät tulot näyttävät arvonsa: kirjoita luku tai valitse väri. Asetukset ovat kunkin solmun alareunassa.

Siirrä solmua vetämällä sen otsikosta, panoroi vetämällä tyhjää tilaa ja zoomaa rullalla. {{key:Delete}} poistaa valitut solmut tai yhteyden, {{key:Mod+Z}} kumoaa, {{key:Mod+D}} monistaa ja {{key:F}} näyttää kaikki solmut. Jokainen muutos on yksi kumoamisvaihe solmueditorissa. Mallin oma kumoaminen ei muuta materiaaleja.

| Solmut | Mitä ne tuottavat |
|---|---|
| Tekstuurikoordinaatit | Missä laatassa piste on: toista sitä, siirrä sitä, kierrä neljännes. |
| Arvo, Väri | Luku, väri. |
| Kuva | Tiedoston kuva (tuodun mallin mukana tullut tai kuva, joka lisättiin {{ui:Lisää kuva…}}-toiminnolla). Valitse **Värit** valokuvalle ja **Data** karheus- tai normaalikartalle. |
| Kirjastotekstuuri | Kirjastomateriaalin tekstuuri, karheus ja korkeus. |
| Ruutu, Kohina | Neliöt; tasainen fraktaalikohina yksityiskohtineen, karheuksineen ja siemenineen. |
| Voronoi-solut, Aallot, Liukuväri | Solut (etäisyys lähimpään pisteeseen, solujen väliset reunat, väri per solu); poikkiviivat, pysty- tai vinot raidat sini-, saha- tai kolmioaaltona, kohinan taivuttamina; lineaariset, neliölliset, säteittäiset ja pallomaiset liukuvärit. |
| Tiilet, Laatat | Tiilirivit juoksevalla siirrolla tai laattaruudukko: värit, laasti tai saumaaine, väli ja viiste metreinä, korkeus kohoumille, satunnaisluku kappaletta kohti. |
| Puu, Marmori | Renkaat syiden suunnassa hienoine kuituineen; suonet taivutettuna turbulenssilla. |
| Lika ja reunakuluma | Kuluttaa kuperat reunat ja likaa kuopat verkon kaarevuus- ja ympäristön varjostuskuvista ([Paista tekstuurit](topic:shading#bake-textures) tekee ne; tai aseta sen kaksi kuva-asetusta verkon UV-asettelussa: sijoita materiaali UV-koordinaateilla). Ilman niitä se ei muuta mitään. |
| Sekoita värit, Väriramppi, Sävy/kylläisyys/arvo, Kirkkaus ja kontrasti, Käännä, Gamma, Erottele ja yhdistä RGB | Värityöt. |
| Laskenta, Alueen muunnos | Laskutoimitukset luvuille (yhteenlasku, kertolasku, potenssi, tasainen askel ja muut). |
| Kohouma, Normaalikartta | Normaali korkeudesta (Kohouma) tai normaalikarttakuvasta (Normaalikartta: valitse vihreän kanavan suunta). |

## Materiaalin ulostulo

Sen asetukset kertovat, miten tekstuuri asettuu pinnoille:

- **Laatan leveys** ja **Laatan korkeus**: kuinka monta metriä yksi tekstuurin laatta peittää. Kaikki, mitä kaavio tuottaa, toistuu laatan yli ilman saumaa.
- **Sijoitus**: **UV-koordinaatit** seuraavat pintoja (työnnä/vedä-pinnat: kunkin pinnan mukaan; verkot: niiden UV:t, yksi UV-yksikkö = yksi laatta), **Laatikko** heijastaa lähimmästä kolmesta akselista, **Triplanar** sekoittaa kolme heijastusta kallistuville pinnoille (**Sekoituksen terävyys**: korkeampi on kovempi sekoitus).
- **Normaalin voimakkuus** skaalaa normaalitulon. **Siirtymän mittakaava** asettaa, kuinka paljon siirtymätulo siirtää verkon kärkipisteitä.
- {{ui:Lisää tuloja}} näyttää muut OpenPBR-tulot: pinnoite, hapsuus, pinnanalainen, ohut kalvo, läpäisy ja niiden värit.

## Laadukkaissa kuvissa

Polunjäljittäjä lukee perusvärin, karheuden, metallisuuden, läpinäkyvyyden, normaalin ja emission kaaviosta niiden muuttuessa pinnan yli. Mikä tahansa muu yhdistetty tulo (esimerkiksi vaihteleva pinnoite) käytetään keskiarvollaan; paneeli kertoo, mikä. Läpinäkyvyystekstuurista tehty leikkaus näyttää muotonsa, ja sen varjo on tasaisesti läpinäkyvä. Hehkuva tekstuuri valaisee sitä, mitä se koskettaa, ilman että sitä otetaan näytteeksi valona.

**Siirtymä** siirtää vain verkkojen kärkipisteitä, joten lisää yksityiskohtia varten Jakomuokkain ([Muokkaimet](topic:modifiers)). Työnnä/vedä-pinnat säilyttävät muotonsa ja saavat kohoumat normaalista.

:::tip
Tietokoneessa, jossa on WebGPU, kaavio lasketaan näytönohjaimella; ilman sitä suorittimella. Tulos on sama.
:::
