---
title: Lisää renderointimoottori lisäosalla
summary: Mitä lisäosa voi lisätä Renderöi kuva -valintaikkunan Moottori-luetteloon, lupa jota se tarvitsee ohjelman käynnistämiseen, ja mitä Studio tarkistaa ja kysyy.
keywords: lisäosa, addon, moottori, renderointimoottori, kehittäjä, engine.run, lupa, ohjelma, skripti, allekirjoitettu, studio, api
from: cd7a39ba
---

Lisäosa (Asetukset › Lisäosat) voi lisätä moottorin {{ui:Renderöi kuva…}}-valintaikkunan Moottori-luetteloon. Koko teksti lisäosien tekijöille on lisäosaspesifikaation luvussa 16. Lyhyesti:

- Lisäosa rekisteröi moottorin tunnuksella, joka alkaa lisäosan omalla tunnuksella, sekä nimellä, valinnaisilla asetuksilla ja **joko** ohjelmalla, jonka se käynnistää, **tai** JavaScript-funktiolla, joka piirtää kuvan.
- Moottori, joka käynnistää ohjelman, tarvitsee luvan **`engine.run`**. Lupa näytetään ennen asennusta ja asetuksissa. Moottori toimii vain Studiossa. Selaimessa se näkyy tiedostona, joka tallennetaan.
- Lisäosa nimeää ohjelman (pelkkä tiedostonimi, ei koskaan komentotulkki), skriptin, joka on **allekirjoitetun lisäosan sisällä**, ja argumentit, jotka koostuvat paikkamerkeistä ja tavallisista sanoista. Studio löytää ohjelman tai pyytää sinua osoittamaan sen kerran.
- Kun lisäosa käynnistää ohjelman ensimmäisen kerran, **Studio kysyy sinulta omassa valintaikkunassaan**: mikä lisäosa, mikä ohjelma, ja että skripti voi tehdä kaiken, minkä ohjelma voi. Salli se vain lisäosalle, johon luotat. Vastauksesi muistetaan kyseiselle lisäosalle ja ohjelmalle.
- Paketti (kohtaus USD-muodossa ja asetustiedosto, glTF-tiedosto mukana, kun lisäosa sitä pyytää) ja lisäosan skripti menevät uuteen väliaikaiseen kansioon. Ohjelma ajetaan siellä, ja kuva palautuu, ja siihen on merkitty lisäosan moottorin nimi.

:::note
Lisäosat voivat lisätä renderointimoottoreita vain lisäosa-API:sta 1.4 alkaen. Työesimerkki avoimen lähdekoodin komentorivirenderöijästä on sen omassa tietovarastossa. Sitä ei ole vielä ajettu kyseisellä renderöijällä.
:::
