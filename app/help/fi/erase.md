---
title: Poista ja siivoa
summary: Poista särmät, ryhmät ja apuviivat pyyhekumilla tai Delete-näppäimellä, yhdistä jaetut pinnat ja korjaa pinnat, jotka osoittavat väärään suuntaan.
keywords: poista, pyyhekumi, delete, poista, korjaa, yhdistä pinnat, siivoa, eksyneet viivat, käännä pinta, takapinta, kumoa
from: 80b92a81
---

## Poista pyyhekumilla

1. Paina {{key:E}} ({{ui:Pyyhekumi}}).
2. Napsauta särmää, ryhmää tai komponenttia tai apuviivaa. Se poistetaan.
3. Poistaaksesi useita vedä pyyhekumilla niiden yli pitäen hiiren painiketta alhaalla. Kaikki, minkä ylitset, korostuu, ja kaikki poistuu, kun päästät irti.

Pyyhekumi ei valitse pintoja: pinta poistuu, kun poistat särmät, joita se tarvitsee. Pinnat ovat niitä, joita pyyhekumi käyttää särmien löytämiseen.

## Mitä pinnoille tapahtuu

- **Särmä kahden samassa tasossa olevan pinnan välissä** (esimerkiksi lattian poikki piirretty viiva) katoaa, ja kaksi pintaa **yhdistyvät** yhdeksi.
- **Särmä, jota pinta tarvitsee pysyäkseen suljettuna** (laatikon reuna), vie pinnan mukanaan. Jos poistat laatikon yhden yläreunan, katto ja yksi sivu katoavat ja jäljelle jää avoin laatikko.
- **Irralliset päät** (pisteet, joita mikään särmä ei enää käytä) siivotaan pois.

Kun poistat komponentin viimeisen kappaleen, komponentti poistuu myös kohdasta {{ui:Komponentit}}.

## Poista Delete-näppäimellä

1. Valitse poistettava {{ui:Valitse}}-työkalulla.
2. Paina {{key:Delete}} tai {{key:Backspace}}.

Tämä poistaa myös pinnat. Tällä tavalla poistettu pinta jättää särmänsä jäljelle, joten voit poistaa laatikon katon, säilyttää sen ääriviivan ja piirtää sinne jotain muuta.

## Siivoa tasaiselta pinnalta eksyneet viivat

Jos seinässä tai lattiassa näkyy viivoja, joita et halua (piirtämisen jäljiltä), poista ne {{ui:Pyyhekumi}}-työkalulla. Pinnalla olevat viivat yhdistyvät pois, ja pinta säilyy.

## Pinta, joka osoittaa väärään suuntaan

Pinta, jota katsotaan takaa, näkyy sinertävänharmaana. Jos pinta näyttää sinertävänharmaana mallisi ulkopuolella:

1. Valitse pinta.
2. Napsauta kohdassa {{ui:Kohteen tiedot}} kohtaa {{ui:Käännä pinta}}.

Pinnan suunnalla on eniten merkitystä viedessä: renderöijät, pelimoottorit ja 3D-tulostimet voivat piilottaa tai tulkita väärin pinnat, jotka osoittavat sisäänpäin.

## Kumoa virhe

{{key:Mod+Z}} kumoaa yhden vaiheen kerrallaan, {{key:Mod+Y}} (tai {{key:Mod+Shift+Z}}) tekee uudelleen. Pyyhekumin veto on yksi vaihe, riippumatta siitä, kuinka monta asiaa se kattoi. Tilarivi kertoo, mikä kumottiin: "Poisto kumottu."
