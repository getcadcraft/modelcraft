---
title: Valitse, mikä ohjelma piirtää kuvan
summary: Renderöi kuva -valintaikkunan Moottori-valinta, eli omat kaksi moottoriamme, muut ohjelmat CadCraft Studiossa ja se, mitä verkko tekee sen sijaan.
keywords: renderöinti, moottori, renderöijä, renderointimoottori, liitännäinen, plugin, studio, ulkoinen ohjelma, piirtää, jono, lisäosamoottori
from: be4b056a
---

{{ui:Renderöi kuva…}}-valintaikkunassa on **Moottori**-valinta Tilan yläpuolella. Omat kaksi moottoriamme ovat aina käytettävissä ja toimivat kaikkialla. Lisäosat voivat lisätä muita, ja CadCraft Studiossa luettelossa ovat myös ohjelmat, jotka ottavat kohtauksen haltuunsa.

| Moottori | Mitä se tekee | Missä |
|---|---|---|
| Sisäänrakennettu: Nopea | Nopea yksittäiskuva: päivänvalo, pehmeät varjot, lasin ja metallin ilme, sekunneissa | Selain ja Studio |
| Sisäänrakennettu: Polunseuranta | Valo, joka heijastuu pintojen välillä näytönohjaimella tai prosessorilla, renderointijono ja muut verkkosi tietokoneet | Selain ja Studio |
| Lisäosan moottori | Se piirtää kuvan ja palauttaa sen: katso [Piirrä kuva toisella ohjelmalla](topic:render-other-program) | Selain (JavaScriptillä kirjoitettu moottori) tai Studio (moottori, joka käynnistää ohjelman) |
| Ohjelma, joka ottaa kohtauksen haltuunsa | Studio laittaa kohtauksen kansioonsa ja pitää sen ajan tasalla | Studio |
| Avaa … | Tallentaa kohtauksen ja avaa sen ohjelmassa. Mitään ei palaa takaisin: katso [Avaa kohtaus toisessa ohjelmassa](topic:render-open-in) | Verkko tallentaa tiedoston |

## Miten valinta toimii

- Nopean tai Polunseurannan valinta vaihtaa myös Tilan, ja päinvastoin. Mikään muu valintaikkunassa ei muutu niille, jotka eivät koskaan käytä toista moottoria.
- Moottori, joka ei ole käytettävissä, pysyy luettelossa syyn kanssa (”ei löytynyt”, ”vaatii uudemman version”). Sitä ei voi valita. Selaimessa moottori, joka toimii vain Studiossa, näyttää ”tallentaa tiedoston”. {{ui:Renderöi kuva…}} tallentaa silloin kohtauksen ja sen asetukset tiedostoon, jonka viet kyseiseen ohjelmaan.
- Valinta tallentuu tiedoston renderöinta-asetusten mukana. Viimeksi valitsemasi moottori on aloitusmoottori tiedostoille, joilla ei ole omaa valintaa.
- Kuvasta toisella ohjelmalla kertoo, mikä ohjelma sen piirsi ja mikä sen versio on, sekä valintaikkunassa että renderointijonossa. [Renderöi](topic:render)-sivun lupaukset koskevat vain **omia** moottoreitamme. Toinen ohjelma valaisee, sävyttää ja näytteistää omalla tavallaan, joten kaksi kuvaa samasta kohtauksesta ovat kameran, auringon, lamppujen ja valotuksen osalta samankaltaisia, eivät pikselilleen samoja.

## Mitä jokainen moottori saa

Kohtaus menee toiselle ohjelmalle **pakettina**: malli USD-tiedostona (sama tiedosto, jonka [Tallenna USD-muodossa](topic:usd) kirjoittaa), ja asetustiedosto, joka sisältää sen, mihin USD-tuoja ei voi luottaa: tarkat materiaaliarvot, lamput, jotka ovat päällä, teholla ja valoprofiileineen, aurinko, taivas, valotus ja kamera niin kuin valintaikkuna ne piirtäisi. Mitään ei ladata minnekään.

## Renderointijono

Kuva tai animaatio toiselle ohjelmalle voi odottaa [renderointijonossa](topic:render#the-render-queue) samalla tavalla kuin omat kuvamme. Sen työ muistaa, mille moottorille se on. Animaatio menee ohjelmalle yhdessä ajossa.
