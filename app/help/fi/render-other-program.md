---
title: Piirrä kuva toisella ohjelmalla
summary: Oma polunseurantamme piirtää Renderöi kuva -kuvan. Toinen ohjelma voi piirtää sen vain renderointimoottori-lisäosan kautta CadCraft Studiossa. Mitä siirtyy mukana ja miksi joitakin ohjelmia ei koskaan tarjota.
keywords: renderöinti, moottori, ulkoinen ohjelma, lisäosamoottori, studio, tausta, jono, usd, gltf, piirtää, blender, gpl
from: 150f94f1
---

Kuvan {{ui:Renderöi kuva…}} piirtävät **omat moottorimme**, Nopea ja Polunseuranta, selaimessa ja CadCraft Studiossa. Toinen ohjelma voi piirtää kuvan vain, kun **renderointimoottori-lisäosa** tuo sen mukanaan: katso [Lisää renderointimoottori lisäosalla](topic:render-engine-addons). Jos haluat viedä kohtauksen toiseen ohjelmaan ja jatkaa työtä siellä, käytä [Avaa kohtaus toisessa ohjelmassa](topic:render-open-in) tai [Lähetä kohtaus pelimoottoriin](topic:render-unreal).

## Piirrä kuva lisäosan moottorilla

1. Ota lisäosa käyttöön kohdasta Asetukset › Lisäosat. Sen moottori ilmestyy {{ui:Renderöi kuva…}}-valintaikkunan Moottori-luetteloon.
2. Valitse se. Sen omat asetukset näkyvät Moottori-luettelon alla.
3. Napsauta {{ui:Renderöi}}. Studiossa Studio kysyy omassa valintaikkunassaan, kun lisäosa käynnistää ohjelman ensimmäisen kerran. Edistyminen näkyy piirtämisen aikana, ja {{ui:Pysäytä}} lopettaa sen. Kuva ilmestyy, ja siihen on merkitty moottori, joka sen piirsi.

JavaScriptillä kirjoitettu moottori toimii myös selaimessa. Moottori, joka ajaa ohjelmaa tällä tietokoneella, toimii vain Studiossa. Selaimessa se näkyy tiedostona, joka tallennetaan.

## Mitä siirtyy mukana

Moottori saa **paketin**: malli USD-tiedostona (ja glTF-tiedoston, jos se sitä pyytää), ja asetustiedoston, jossa ovat tarkat materiaaliarvot, aurinko ja taivas, jokainen päällä oleva lamppu teholla ja valoprofiilillaan, kamera ja valotus. Jokainen ohjelma valaisee, sävyttää ja näytteistää omalla tavallaan, joten kuvat ovat kameran, auringon, lamppujen ja valotuksen osalta samankaltaisia, eivät pikselilleen samoja.

## Ohjelmat, joita CadCraft ei koskaan aja

CadCraft ei koskaan käynnistä ohjelmaa GNU GPL -lisenssillä, eikä koskaan lisää sitä moottoriksi tai **Avaa …** -kohteeksi. Blender on yksi niistä, joten sitä ei ole Moottori-luettelossa. USD- tai glTF-tiedosto, joka on tallennettu kohdasta {{ui:Renderöi kuva…}}, aukeaa siinä kuten missä tahansa ohjelmassa, joka lukee niitä.

:::note
Panoraama- ja stereokamerat sekä taivaskuva (taivaan värejä käytetään sen sijaan) eivät siirry toiseen ohjelmaan. Toisessa ohjelmassa tehty ei palaa mallin.
:::
