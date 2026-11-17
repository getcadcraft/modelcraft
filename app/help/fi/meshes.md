---
title: Verkot
summary: Muuta ryhmä tai komponentti verkoksi, kohteeksi, jolla sisältötyökalut mallintavat, ja takaisin työnnä/vedä-geometriaksi.
keywords: verkko, verkot, monikulmio, monikulmiot, n-kulmio, nelikulmio, nelikulmiot, kärkipisteet, puolisärmä, uv, uv:t, muunna, muunna verkoksi, muunna geometriaksi, jakopinta, veistäminen, mallintaminen, 3D-sisältö
from: e32363e8
---

ModelCraft-mallissa on kahdenlaista geometriaa. **Työnnä/vedä-geometria** on sitä, mitä piirrät: tasaisia pintoja, jotka tarttuvat yhteen, leikkaavat toisensa ja korjautuvat. **Verkko** on sellainen kohde, jolla 3D-sisältötyökalut mallintavat: pintoja, joissa on mikä tahansa määrä kulmia. Kussakin kulmassa on oma tekstuurikoordinaatti (UV:t), normaalit ja värit, ja kussakin kärkipisteessä arvoja, kuten painoja. Verkko sijoitetaan kuten ryhmä tai komponentti, ja se on työnnä/vedä-geometrian vieressä samassa mallissa.

## Muunna ryhmä tai komponentti verkoksi

1. Valitse ryhmä tai komponentti.
2. Kohdassa {{ui:Kohteen tiedot}} napsauta {{ui:Muunna verkoksi}}.

Sen pinnoista tulee verkon pintoja (reiällinen pinta tulee kolmioina). Kovat särmät pysyvät teräviä, pehmeät särmät varjostuvat tasaisesti, ja maali, materiaalit ja tuodut tekstuurit säilyvät pinnoillaan. Sen sisällä olevat ryhmät ja komponentit yhdistetään yhdeksi verkoksi. Irralliset särmät jätetään pois: verkko säilyttää pinnat. Jokainen komponentin sijoitus näyttää verkon. Se on yksi kumoamisvaihe.

## Mitä Kohteen tiedot näyttää

Valitse verkko nähdäksesi sen pinnat, kärkipisteet ja särmät, onko se suljettu kiintokappale (ja sen tilavuus) sekä sen koko sijoitettuna. Verkko, jossa on avoimia särmiä, kertoo niiden määrän.

## Muunna verkko takaisin työnnä/vedä-geometriaksi

Valitse verkko ja napsauta {{ui:Muunna geometriaksi}}. Tasaiset pinnat palautuvat ennalleen. Pinta, jonka kulmat eivät ole samassa tasossa, palautuu kolmioina. Terävät särmät ovat kovia, muut pehmeitä. {{ui:Hajota}} laittaa verkon pinnat suoraan sitä ympäröivään ryhmään.

## Hyvä tietää

- Kaksoisnapsauta verkkoa, jos haluat [muokata sen kärkipisteitä, särmiä ja pintoja](topic:mesh-edit) verkkotyötilassa. Muunna se geometriaksi, jotta voit muokata sitä työnnä/vedä-työkalulla. Siirrä, kierrä, skaalaa, kopioi, maalaa, piilota ja merkitse sitä kuten mitä tahansa ryhmää.
- Viennit, 3D-tulostus, renderöinnit ja VR näkevät verkon pintoinaan.
- Verkon sisältävä tiedosto tallennetaan `.modelcraft`-tiedoston uudempana versiona, joten ModelCraft 0.6 ja vanhemmat eivät voi avata sitä. Ilman verkkoa olevat tiedostot aukeavat niissä kuten ennenkin. Muunna verkot ensin geometriaksi, jos jaat tiedoston jonkun kanssa, jolla on vanhempi versio.
- Verkon kumoaminen säilyttää vain sen, mitä kukin vaihe muutti, joten jopa hyvin suuri verkko kumoutuu nopeasti.

Katso myös [Ryhmät ja komponentit](topic:groups-components) ja [Ei vielä toteutettu](topic:not-built-yet).
