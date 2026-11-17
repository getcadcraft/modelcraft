---
title: USD-tiedoston tallennus, avaaminen ja vienti
summary: Tallenna koko malli USD-muodossa (.usda, .usdc tai .usdz) häviöttä, avaa se uudelleen ja tuo USD-kohtauksia muista 3D-ohjelmista.
keywords: usd, usda, usdc, usdz, openusd, yleinen kohtauskuvaus, tallenna muodossa, vienti, tuonti, kohtauskokoonpano, arkkitehtuurin visualisointi, openpbr, materialx, paketti
from: 73d299f9
---

USD on kohtausmuoto, jota monet 3D-, renderöinti- ja arkkitehtuurin visualisointiohjelmat jakavat. ModelCraft kirjoittaa ja lukee sitä. `.modelcraft` on edelleen muoto, jonka {{ui:Tallenna}} kirjoittaa; USD on valinta kohdassa {{ui:Tallenna muodossa}}.

## Tallenna USD-muodossa

1. Valitse {{ui:Tallenna muodossa}} ryhmästä {{ui:Tiedosto}} (tai paina {{key:Mod+Shift+S}}).
2. Valitse muoto: {{ui:Teksti (.usda)}} (luettavissa, hyvä versionhallintaan), {{ui:Binääri (.usdc)}} (pienin ja nopein) tai {{ui:Paketti (.usdz)}} (yksi tiedosto, jonka sisällä ovat tekstuurit).
3. Tiedosto ladataan. Työpöytäsovelluksessa valitset, minne se menee.

Samat valinnat ovat kohdassa {{ui:Vie}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Mitään ei menetetä

Kun avaat USD-tiedoston, jonka ModelCraft tallensi, saat mallin takaisin täsmälleen: pinnat reikineen, pehmeät ja piilotetut särmät, käyrät, ryhmät ja komponentit, tunnisteet, näkymät, mitoitukset, apuviivat, leikkaustasot, valaisimet, tuodut tekstuurit ja näkymän. Muut ohjelmat näkevät saman mallin verkkoina, ryhminä, komponenttien prototyyppeinä, materiaaleina, valaisimina ja kameroina.

:::note
Jos toinen ohjelma muuttaa ryhmän tai komponentin geometriaa, ModelCraft avaa sen osan verkkona, jossa muutos säilyy, ja kertoo, montako osaa se luki näin. Toisessa ohjelmassa siirretty tai poistettu sijoitus pysyy siirrettynä tai poistettuna.
:::

## Avaa tai tuo toisen USD-tiedosto

- {{ui:Avaa}} `.usd`-, `.usda`-, `.usdc`- tai `.usdz`-tiedosto aloittaaksesi mallin siitä.
- {{ui:Tuo}} sellainen lisätäksesi se avoimeen malliin. Vedä mukaan tiedostot, joihin se viittaa (muut USD-tasot, tekstuurit).

Verkot tulevat sisään normaaleineen, UV-koordinaatteineen ja väreineen, jaetut geometriat komponentteina, materiaalit maalausvärinä, valaisimet valaisimina ja kamerat näkymina. Mitat ovat metreinä ja Z on ylhäällä, riippumatta tiedoston yksiköistä ja ylösakselista.

## Ei vielä

Animaatiota, luurankoja ja MaterialX-solmugraafeja ei vielä lueta eikä kirjoiteta USD-muodossa. ModelCraftin omat animaatiot ja solmumateriaalit säilyvät USD-tiedostossa, jonka se tallensi, jotta ModelCraft voi avata sen uudelleen, mutta muut ohjelmat eivät näe niitä. Tasot, joihin tiedosto viittaa ja joita ModelCraft ei voi lukea (esimerkiksi MaterialX-dokumentti), jätetään pois merkinnällä.
