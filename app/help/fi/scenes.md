---
title: Tallenna näkymät kohtauksina
summary: Tallenna kamera ja tyyli kohtauksena, päivitä ja nimeä se uudelleen sekä siirry kohtausten läpi tai toista ne esitellessäsi suunnittelua.
keywords: kohtaus, näkymä, tallennettu näkymä, kamera, esitys, animaatio, toista, diaesitys, page up, page down, välilehdet, kävelykierros
from: 38680d6e
---

**Kohtaus** muistaa kameran sijainnin, tyylin ja mitä on piilotettu: mistä katsot, perspektiivin tai rinnakkaisprojektion, pintatyylin, särmät, auringon asetukset, piilotetut ryhmät, pois päältä kytketyt tunnisteet ja leikkauksen. Kohtaukset tallennetaan `.modelcraft`-tiedostoon.

## Lisää kohtaus

1. Aseta näkymä: kierrä, zoomaa, valitse tyyli, aseta aurinko.
2. Napsauta oikealla olevassa {{ui:Kohtaukset}}-paneelissa {{ui:Lisää näkymä}}.

   Kohtaus ilmestyy luetteloon nimellä "Kohtaus 1", "Kohtaus 2" ja niin edelleen, ja välilehtenä 3D-näkymän yläpuolella. Tilarivi kertoo: "Kohtaus 1 tallennettu: tämä kamera, tyyli ja piilotetut kohteet."

## Siirry kohtaukseen

- Napsauta sen välilehteä 3D-näkymän päällä tai sen nimeä {{ui:Kohtaukset}}-luettelossa.
- Tai paina {{key:PageDown}} seuraavaan kohtaukseen ja {{key:PageUp}} edelliseen. {{ui:Seuraava}} ja {{ui:Edellinen}} luettelon alla tekevät saman.

Kamera liukuu kohtaukseen hieman yli puolessa sekunnissa. Jos tietokoneesi on asetettu vähentämään liikettä, se hyppää sinne.

## Muuta, nimeä uudelleen tai poista kohtaus

Jokaisessa luettelon kohtauksessa on nimen jälkeen kolme pientä painiketta:

- **Päivitä** (kiertävät nuolet): tallentaa nykyisen kameran, tyylin ja piilotukset kohtaukseen. "Kohtaus 2 päivitetty."
- **Nimeä uudelleen** (kynä): avaa "Nimeä kohtaus" -valintaikkunan. Kirjoita uusi nimi ja napsauta {{ui:Tallenna}}.
- **Poista** (roskakori): poistaa kohtauksen. "Kohtaus 2 poistettu. Ctrl+Z palauttaa sen."

Kohtausten lisääminen, päivittäminen, uudelleen nimeäminen ja poistaminen ovat kumoamisvaiheita, kuten mallin muutokset.

## Lukitse kohtauksen kamera

Kun renderöit saman näkymän yhä uudelleen suunnitelman muuttuessa, lukitse kohtauksen kamera, ettei näkymä liiku vahingossa.

1. Napsauta {{ui:Kohtaukset}}-luettelossa kohtauksen nimen jälkeen **lukko**-painiketta (avoin riippulukko). Se sulkeutuu, ja kohtauksen välilehdessä 3D-näkymän päällä on pieni riippulukko. Tilarivi kertoo: "Kohtaus 2: kamera lukittu."
2. Siirry kohtaukseen aina, kun haluat renderöidä. Kamera palaa tarkalleen tallennettuun näkymään, joten tehdyt kuvat asettuvat aiempien kanssa päällekkäin.

Kun kamera on lukittu, **Päivitä** tallentaa silti tyylin ja piilotukset kohtaukseen, mutta kamera pysyy paikallaan, vaikka olisit kiertänyt pois. Napsauta riippulukkoa uudelleen avataksesi sen. Päivitä tallentaa sitten nykyisen näkymän uudelleen. Lukitseminen ja avaaminen ovat kumoamisvaiheita, ja lukitus tallennetaan `.modelcraft`-tiedostoon.

## Esitä

1. Lisää kaksi tai useampi kohtaus.
2. Napsauta luettelon alla {{ui:Toista}}. ModelCraft siirtyy seuraavaan kohtaukseen muutaman sekunnin välein ja palaa ensimmäiseen viimeisen jälkeen.
3. Pysäytä napsauttamalla {{ui:Pysäytä}} (sama painike) tai painamalla {{key:Esc}}.

Aurinkotutkimusta varten lisää yksi kohtaus tunnissa, joissa vain {{ui:Aika}} on muutettu, ja toista ne. Katso [Tyylit ja auringon varjot](topic:styles-shadows#a-sun-study).

Esittääksesi ilman palkkeja paina {{key:Ctrl+Shift+F}} kahdesti: ensin koko näyttö, sitten koko näyttö piilotetuilla palkeilla. Kohtausvälilehdet pysyvät näkymän päällä.

## Mitä kohtaus näyttää

Kohtaus muistaa, mikä oli piilotettuna, kun tallensit: ryhmät ja komponentit, jotka [piilotit](topic:hide-isolate), [tunnisteet](topic:tags), jotka kytkit pois päältä, ja mitkä [leikkaustasot](topic:sections) leikkaavat. Kohtaukseen siirtyminen piilottaa ja näyttää ne uudelleen. Yksi kohtaus voi siis näyttää koko talon, seuraava talon ilman katon tunnistetta ja seuraava talon läpi leikattuna.

Piilotetut irralliset pinnat ja särmät eivät kuulu kohtauksiin. Kohtaukseen siirtyminen ei tee kumoamisvaihetta. Aiemmalla ModelCraftin versiolla tallennetut kohtaukset jättävät piilotuksen ennalleen. Napsauta Päivitä, jos haluat tallentaa sen niihin.

## Vie animaatio

{{ui:Vie animaatio}}, luettelon alla, toistaa kohtaukset ensimmäisestä viimeiseen ja liu'uttaa kameran sujuvasti niiden välillä. Se tallentaa elokuvan **WebM**-videona (kaksi sekuntia liikettä ja lyhyt tauko kohtausta kohden). Se tallentaa näkymän sellaisena kuin näet sen, sen kokoisena näytöllä, [esitysnäkymässä](topic:styles-shadows#presentation-view) (ei akseleita, ohjeita tai valintaa). Paina {{key:Esc}} tai napsauta painiketta uudelleen pysäyttääksesi tallentamatta. WebM toistuu selaimissa ja VLC:ssä, ja videoeditorit muuntavat sen.

Renderöityä kävelykierrosta varten (taivas, aurinko, varjot, materiaalit) valitsemallasi koolla käytä sen sijaan {{ui:Renderöi video…}}-toimintoa. Ilman animaatioavaimia se ottaa kohtaukset järjestyksessä kameran polkuna. Katso [Animoi kamera ja kohteet](topic:animation).

## Hyvä tietää

- Tyylin muuttaminen tai kameran liikuttaminen kohtaukseen siirtymisen jälkeen ei muuta kohtausta, ennen kuin napsautat Päivitä.
- Kohtauksia ei viedä Collada-, OBJ-, glTF-, STL- tai IFC-muotoon.
