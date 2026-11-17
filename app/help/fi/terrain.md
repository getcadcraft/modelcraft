---
title: "Maasto: maanpinta korkeuskäyristä ja sen muokkaus"
summary: Tee maanpinta korkeuskäyristä tai ruudukkona ja nosta tai laske sitä pehmeällä harjalla.
keywords: maasto, maanpinta, maisema, topografia, korkeuskäyrät, korkeuskäyräviivat, tontti, rinne, mäki, kumpu, hiekkalaatikko, smoove, veistäminen, tasaus, TIN
from: 407652b3
---

Maasto on kolmioista koostuva maanpinta, joten se voi seurata mitä tahansa muotoa. Se on ryhmä: kaksoisnapsauta sitä muokataksesi sitä.

## Korkeuskäyristä

1. Hanki korkeuskäyrät oikeilla korkeuksillaan: piirrä ne tai [tuo asemakaava](topic:site-plan) ja siirrä jokainen käyrä omalle korkeudelleen.
2. Valitse ne (kaikkien käyrien kaikki särmät).
3. {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Maasto valituista korkeuskäyristä}}.

ModelCraft yhdistää käyrien pisteet kolmioilla (TIN) ja pehmentää jokaisen sisäisen särmän, jotta maanpinta varjostuu tasaisesti. Viivat itse jäävät paikoilleen: poista tai piilota ne, kun et enää tarvitse niitä. Hyvin tiheät käyrät harvennetaan 8 000 pisteeseen.

## Ruudukko veistämistä varten

{{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Maastoruudukko…}} kysyy leveyden, syvyyden ja solukoon ja asettaa tasaisen kolmioruudukon sen kulmaan, johon napsautat. Pienet solut veistävät tasaisemmin mutta tuottavat enemmän pintoja (enintään 200 × 200 solua).

## Veistä: nosta ja laske maanpintaa

1. Kaksoisnapsauta maastoa avataksesi sen.
2. {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Veistä maastoa}}. Ympyrä näyttää harjan maanpinnalla osoittimen alla.
3. Vedä ylös nostaaksesi harjan alla olevaa maata tai alas laskeaksesi sitä. Keskikohta liikkuu eniten, ja maa tasoittuu nollaan ympyrän reunalla, joten kummut ja kuopat tulevat pehmeiksi.

Tehdäksesi kummusta tarkan korkeuden napsauta kerran, kirjoita korkeus, esimerkiksi `1.5m` (miinus laskee sitä), ja paina {{key:Enter}}. Harjan vaihtamiseksi kirjoita pituus ennen napsautusta: `5m` antaa harjan, jonka säde on 5 m.

Jokainen veistotoimi on yksi kumoamisvaihe.

## Asioita, jotka kannattaa tietää

- Veistäminen siirtää vain kolmiopintoja, joten jokainen pinta pysyy tasaisena. Käsin piirretyt pinnat (suorakulmiot, monikulmiot) eivät ole maastoa: työkalu kertoo siitä.
- Veistäminen siirtää pisteitä suoraan ylös ja alas; se ei lisää pisteitä. Tarkempaa yksityiskohtaa varten tee ruudukko pienemmillä soluilla.
- Maasto viedään kuten mikä tahansa muu ryhmä. IFC-muodossa se on rakennusosaproxy-kohde, kuten kaikki muukin.
