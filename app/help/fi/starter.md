---
title: Aloituskirjasto
summary: Noin kolmekymmentä valmista kohdetta sijoitettavaksi malliin: ovet ja ikkunat, huonekalut, keittiö ja kylpyhuone, pilarit ja portaat, puut, ihmiset ja auto.
keywords: kalustaa, kalusta huone, huonekalujen asettelu, makuuhuone, olohuone, keittiö, kylpyhuone, toimisto, renderöinti, kirjasto, aloitus, ympäristöelementit, puut, ihmiset, autot, kasvit, pensaat, aita, komponentit, huonekalut, ovi, ikkuna, tuoli, pöytä, sohva, sänky, wc, portaat, pilari, henkilö, auto, varasto, valmis
from: 3c06b69c
---

{{ui:Aloituskirjasto}} antaa arkisia kohteita todellisissa mitoissa, jotta malli luetaan yhdellä silmäyksellä: ovi näyttämään huoneen mittakaavan, auto ajotiellä, ihmisiä ja puita rakennuksen ympärillä.

## Sijoita yksi

1. Napsauta vasemmalla olevassa {{ui:Komponentit}}-kohdassa {{ui:Aloituskirjasto}}-kohtaa.
2. Valitse kohde, esimerkiksi {{ui:Tuoli}}.
3. Napsauta kohtaa, johon se menee.

Lattialle, pöydälle tai maahan se asettuu niiden päälle. **Ovet ja ikkunat** on tehty seiniin: napsauta seinää, ja ne seisovat siinä ulospäin suuntautuneena. (Ne asettuvat seinän pinnalle; ne eivät leikkaa aukkoa. Jos haluat tehdä aukon, piirrä suorakulmio seinään, johon ikkuna tulee, ja työnnä se läpi.)

Jokainen kohde on **komponentti**: saman valitseminen uudelleen sijoittaa toisen kopion, ja jokainen kopio muuttuu, jos muokkaat yhtä. Se näkyy myös {{ui:Komponentit}}-luettelossa, jossa {{ui:Aseta}}-toiminnolla lisätään lisää.

## Mitä siinä on

| Ryhmä | Kohteet |
|---|---|
| Ovet ja ikkunat | Ovi, kaksoisovi, ikkuna, leveä ikkuna, autotallin ovi |
| Huonekalut | Ruokapöytä, pyöreä pöytä, tuoli, baarijakkara, sohva, nojatuoli, kaksois- ja yksittäissänky, työpöytä, kirjahylly, vaatekaappi |
| Keittiö ja kylpyhuone | Alakaappi ja seinäkaappi, keittiön tasot, jääkaappi, liesi, allasyksikkö, WC, kylpyamme, suihku, pesuallas |
| Rakennus | Suora porras (15 nousua, 18 cm kukin), pyöreä ja neliöpilari, palkki |
| Tonttialue ja ihmiset | Puu, pensas, henkilö (1.75 m), auto |
| Ympäristöelementit: puut, ihmiset ja autot | Lehtipuut (4, 6 ja 10 m), havupuu, pylväspuu, pyöreät ja pienet pensaat, aita, ruukkukasvi, seisovat ja kävelevät ihmiset, lapsi, sedan ja maastoauto: pyöreämmät muodot omilla väreillään, [renderöityihin kuviin](topic:render) ja asemapiirroksiin |

Ne ovat yksinkertaisia muotoja, jotka koostuvat kiintokappaleista, joita voi maalata, skaalata, [tehdä yksilöllisiksi](topic:groups-components) ja muokata. Seinäkaappi roikkuu 1.45 m napsautuskohdan yläpuolella.

CadCraft on piirtänyt ympäristöelementit, ja niitä saa käyttää mihin tahansa (CC0); samat puut, ihmiset ja autot ovat BimCraft- ja CadCraft-sovellusten kirjastossa. Auton ikkunat on maalattu {{ui:Tummennettu lasi}}-materiaalilla, joten ne ovat läpinäkyviä kuvissa.

## Kalusta huone renderöintiä varten

Valitse huoneen lattia (yksi tasainen pinta, joka osoittaa ylös, mallissa tai ryhmän sisällä) ja käytä **{{ui:Järjestä}} › Kalusta huone…** (**Kalusta**-painike). Valitse huoneen tyyppi — makuuhuone, olohuone, ruokailuhuone, keittiö, kylpyhuone tai toimisto — tai anna sen arvata koon perusteella. Aloitushuonekalut asetetaan seinien viereen pisimmästä seinästä alkaen, mikään ei mene päällekkäin, ja minkä tahansa huoneen seinään sijoitetun aloitusoven heilahdusalue (ja korkeiden kalusteiden edessä olevien ikkunoiden leveys) pysyy vapaana. Se on säännöillä tehty oletusasettelu tarkistettavaksi, ei suunnitelma: sama huone saa aina saman asettelun.

Kaikki tulee **yhteen ryhmään** tunnisteella **Huonekalut**, yhtenä kumoamisvaiheena: {{ui:Kumoa}}, poista ryhmä tai piilota tunniste, jotta se poistuu. Kappale, joka ei mahdu, nimetään tilarivillä ja luetellaan **Ongelmat**-kohdassa huomautuksena. BimCraft-sovelluksen **Kalusta huone** noudattaa samoja sääntöjä.
