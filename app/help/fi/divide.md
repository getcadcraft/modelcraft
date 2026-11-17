---
title: Jaa särmä tai käyrä yhtä suuriin osiin
summary: Jaa viiva yhtä suuriin osiin tai anna kaarelle tai ympyrälle uusi segmenttien määrä Jaa-työkalulla.
keywords: jaa, jaa särmä, yhtä suuret osat, yhtä suuret segmentit, jaa viiva, segmentit, jaa särmät, kaaren segmentit, ympyrän segmentit, pisteet viivaa pitkin
from: 5c3ce3ed
---

{{ui:Jaa}} jakaa särmän yhtä suuriin osiin, ja jokaiseen jakokohtaan tulee kulma. Käytä kulmia tartuntaan, viivojen aloittamiseen tai pinnan osien työntämiseen ja vetämiseen.

## Jaa särmä

1. Napsauta työkalurivillä {{ui:Jaa}}-painiketta tai valitse särmä ja napsauta kohdassa {{ui:Kohteen tiedot}} kohtaa {{ui:Jaa…}}.
2. Osoita särmää. Merkit näyttävät, mihin leikkaukset tulevat: särmän keskikohdan kohdalla osia on kaksi; siirry kohti päätä saadaksesi lisää.
3. Napsauta jakaaksesi särmän näytettyihin osiin. Tai kirjoita luku, esimerkiksi `5` (tai `5s` tai `/5`), ja paina {{key:Enter}}: särmä jakautuu heti.

Osat jäävät valituiksi, ja se on yksi kumoamisvaihe. Pinta, johon särmä kuuluu, säilyttää muotonsa ja saa uudet kulmat.

## Jaa kaari tai ympyrä

Osoita mitä tahansa kaaren tai ympyrän segmenttiä: se jakautuu kokonaisena.

- Kaari tai ympyrä, jonka kulmia mikään muu ei käytä ja joka on tasona pinnallaan, **piirretään uudelleen niin monella segmentillä** todellisella kaarella. Sen päät pysyvät paikallaan, ja se on edelleen yksi käyrä, joten sen voi yhä valita yhdellä napsautuksella ja muuttaa sen sädettä kohdassa {{ui:Kohteen tiedot}}. 24-sivuinen ympyrä, joka jaetaan kahdeksaan, muuttuu kahdeksankulmioksi.
- Mikä tahansa muu käyrä, esimerkiksi vedetyn sylinterin reuna, käyrä, joka on piirretty {{ui:Käyrä}}-työkalulla, tai kaari, johon on liitetty viivoja kulmistaan, saa uusia kulmia yhtä pitkin välein sen varrelta, eikä mikään siirry.

## Näppäimistön mallintajan kanssa

Työkalu toimii samoin mallintajan näppäimillä (Asetukset › ModelCraft › Näppäimet tai mallintajan valikkotyyli). Siellä se on valikossa {{ui:Verkko}} nimellä {{ui:Jaa särmät}}.

## Huomioitavaa

- Kirjoitetut luvut ovat väliltä 2–1000; osoittimella jakaminen antaa enintään 100.
- {{ui:Käyrä}}-työkalulla piirretty käyrä säilyttää pisteensä: kun käytät {{ui:Muokkaa pisteitä}}-toimintoa, se piirretään uudelleen niistä ja uudet kulmat katoavat.

Katso myös [Piirrä pintoja viivoilla, suorakulmioilla, ympyröillä ja kaarilla](topic:draw-faces) ja [Kirjoita tarkat mitat arvoruutuun](topic:value-box).
