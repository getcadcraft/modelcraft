---
title: Venyvät komponentit
summary: Tee yhdestä komponentin kopiosta leveämpi, syvempi tai korkeampi niin, että sen osat säilyttävät kokonsa: pidempi pöytä samoilla jaloilla, korkeampi kirjahylly levyt levitettyinä, kaide, jonka tolpat toistuvat.
keywords: dynaaminen komponentti, venytys, komponentin koon muuttaminen, parametrinen, nimetyt koot, toisto, matriisi, jalat, hyllyt, kaide, säännöt, muuttujat
from: b4c40f43
---

Komponentin skaalaaminen suurentaa kaiken siinä, myös jalat ja palkit. **Venytä tätä kopiota** muuttaa komponentin leveyttä, syvyyttä tai korkeutta, ja jokainen osa noudattaa sääntöä: pöydän pinta kasvaa, ja sen jalat säilyttävät paksuutensa ja pysyvät päissä.

Se toimii komponenteilla, jotka koostuvat osista, eli ryhmistä tai komponenteista komponentin sisällä, kuten jokainen [aloituskirjaston](topic:starter) kohde.

## Kopion venyttäminen

1. Valitse komponentti.
2. Napsauta kohdassa {{ui:Kohteen tiedot}} kohtaa {{ui:Venytä tätä kopiota…}}.
3. Kirjoita uusi {{ui:Leveys (punainen)}}, {{ui:Syvyys (vihreä)}} ja {{ui:Korkeus (sininen)}}, ja napsauta {{ui:Venymä}}.

Vain tämä kopio muuttuu: siitä tulee oma komponentti, joka muistaa alkuperäisen, josta se tehtiin. Venytä sitä milloin tahansa uudelleen, ja se lasketaan alusta alkuperäisestä, joten mikään ei siirry pois paikoiltaan. Alkuperäisen muut kopiot pysyvät ennallaan.

## Säännöt

Avaa komponentti (kaksoisnapsauta sitä) ja valitse yksi sen osista. {{ui:Kohteen tiedot}} näyttää kohdan {{ui:Kun komponenttia venytetään}}, jossa on sääntö punaisen, vihreän ja sinisen akselin mukaan:

| Sääntö | Mitä osa tekee | Esimerkki |
|---|---|---|
| {{ui:Venymä}} | Kasvaa komponentin mukana; sen etäisyys molempiin reunoihin säilyy | Pöydän pinta |
| {{ui:Pysy alussa}} / {{ui:Pysy lopussa}} | Säilyttää kokonsa ja etäisyytensä kyseiseen reunaan | Jalat |
| {{ui:Siirry suhteessa}} | Säilyttää kokonsa; sen keskikohta siirtyy suhteessa | Hyllyt, oven kahva |
| {{ui:Skaalaudu suhteessa}} | Sekä sen paikka että koko suhteutuvat | Portaan askelmat |
| {{ui:Toisto}} | Tekee siitä kopioita säännöllisin välein ({{ui:Joka}}) alusta loppuun | Kaiteen tolpat |

{{ui:Automaattinen}} (alkutila) selvittää säännön itse ja näyttää, mikä se on: {{ui:Venymä}}, kun osa ulottuu komponentin läpi, {{ui:Siirry suhteessa}}, kun se on suunnilleen keskellä, muuten se pysyy lähempänä olevalla reunallaan.

## Asioita, jotka kannattaa tietää

- Osien omat muodot ovat yhteisiä, joten venytetty kopio on kevyt. Osan muokkaaminen muuttaa sitä jokaisessa kopiossa.
- Venytetty kopio ei seuraa myöhempiä muutoksia alkuperäisen säännöissä tai asettelussa: venytä se uudelleen, jotta ne tulevat mukaan.
- Komponentissa irrallaan olevat pinnat (ei osassa) säilyttävät kokonsa; tee niistä osa, jotta ne seuraavat.
- Säännöt ja se, mistä kukin kopio venytettiin, tallennetaan ModelCraft-tiedostoon.
