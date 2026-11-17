---
title: Tyylit ja auringon varjot
summary: Näytä malli varjostettuna, piilotettuina viivoina, rautalankana tai läpinäkyvänä ja tutki sen heittämiä varjoja mihin tahansa päivämäärään, aikaan ja paikkaan.
keywords: esitysnäkymä, selkeä näkymä, piilota apuviivat, piilota akselit, tyyli, varjostettu, piilotetut viivat, rautalanka, röntgen, särmät, varjot, aurinko, auringon tutkimus, aurinkoanalyysi, päivämäärä, aika, leveysaste, pituusaste, aikavyöhyke, pohjoinen
from: 09c95329
---

Paneeli {{ui:Tyyli}} oikealla muuttaa mallin piirtotapaa. Mikään siinä ei muuta itse mallia, eikä se kuulu kumoamiseen. Jokainen [näkymä](topic:scenes) muistaa oman tyylinsä, ja tiedosto muistaa tyylin, joka sinulla oli tallentaessasi.

## Pinnat

Valitse yksi luettelosta {{ui:Pinnat}}:

| Tyyli | Näyttää |
|---|---|
| {{ui:Varjostettu}} | Kiinteät pinnat, pehmeästi valaistuina. Pinnat, jotka näkyvät takaa, ovat sinisenharmaita. Tuodut värit näkyvät. |
| {{ui:Piilotetut viivat}} | Pinnat taustan värisinä ja särmät tummina: puhdas viivapiirros, josta piilotetut viivat on poistettu. Valkoinen, kun {{ui:Paperi}}, tumma, kun {{ui:Malli}}. |
| {{ui:Rautalanka}} | Vain särmät. Pintoja ei piirretä, mutta ne lasketaan silti napsautuksissa ja tartunnoissa: niiden läpi ei voi valita. |
| {{ui:Röntgen}} | Läpinäkyvät pinnat, jotta näet, mitä on takana tai sisällä. Kuten rautalangassa, napsautukset ja tartunnat pysähtyvät lähimpään pintaan. |

{{ui:Näytä särmät}} kytkee särmät päälle tai pois kaikissa tyyleissä paitsi {{ui:Rautalanka}}. Kun se on pois, {{ui:Piilotetut viivat}} näyttää lähes ei mitään, koska sen pinnat vastaavat taustaa. Pehmeitä särmiä, kuten vedetyn ympyrän sivuja, ei piirretä koskaan.

## Kytke auringon varjot

1. Valitse {{ui:Auringon varjot}}. Sen alla olevat aurinkoasetukset aktivoituvat, ja malli heittää varjoja itselleen ja maahan.
2. Aseta paikka:
   - {{ui:Leveysaste}}: pohjoinen on positiivinen, etelä negatiivinen (New York on noin 40.7, Sydney noin -33.9).
   - {{ui:Pituusaste}}: itä on positiivinen, länsi negatiivinen (New York on noin -74.0).
   - {{ui:UTC-poikkeama}}: paikan poikkeama UTC:stä tunteina, esimerkiksi `-5` New Yorkille talvella. ModelCraft ei käytä kesäaikaa; käytä `-4` New Yorkille kesällä.
3. Aseta {{ui:Päivämäärä}} (kuukausi ja päivä) ja vedä {{ui:Aika}}-liukusäädintä. Aika liikkuu 15 minuutin askelin ja näkyy liukusäätimen vieressä, esimerkiksi "3:00 pm".

Asetusten alla oleva rivi kertoo, missä aurinko on, esimerkiksi ”Aurinko 52° ylhäällä, 250° pohjoisesta. Pohjoinen on vihreä akseli.” Yöllä se kertoo ”Aurinko on alhaalla tähän aikaan.”

Uusi malli alkaa auringosta 21. kesäkuuta kello 3:00 pm, leveysasteella 40, pituusasteella -105 ja UTC-poikkeamalla -7.

## Käännä malli pohjoiseen

ModelCraftin pohjoinen on aina **vihreä akseli**. Tutkiaksesi todellista paikkaa käännä malli niin, että sen pohjoispuoli osoittaa vihreää pitkin: valitse kaikki ({{key:Mod+A}}), paina {{key:Q}}, napsauta keskipistettä maassa ja käännä sitä paikan kulman verran pohjoisesta (katso [Kierto ja skaalaus](topic:rotate-scale)).

## Auringon tutkimus

1. Aseta paikka ja päivämäärä.
2. Lisää näkymä ({{ui:Lisää näkymä}} kohdassa {{ui:Näkymät}}).
3. Siirrä aikaliukusäädintä ja lisää toinen näkymä. Toista jokaiselle tunnille, jonka haluat.
4. Napsauta {{ui:Toista}} selataksesi niitä. Katso [Tallenna näkymät](topic:scenes).

## Asioita, jotka kannattaa tietää

- Varjot voivat näyttää rosoisilta hyvin suuressa mallissa, koska yksi varjokartta kattaa koko mallin.
- Varjoja ei piirretä tilassa {{ui:Rautalanka}}.
- Auringon sijainti seuraa NOAA:n aurinkolaskentaa ja on tarkka murto-osan asteen tarkkuudella, mikä riittää massatutkimuksiin. Ilmakehän taittumista ei huomioida, joten hyvin matalat auringon kulmat auringonnousun ja -laskun aikaan voivat olla hieman pielessä.

## Esitysnäkymä

{{ui:Näkymät}} › {{ui:Esitysnäkymä}} (tai {{key:Shift+P}}) näyttää vain mallin: akselit, apuviivat ja apupisteet, leikkaustasojen reunat (leikkaus säilyy), valaisimien merkit, auki olevan ryhmän laatikon, tartuntamerkit ja vinkit sekä valinnan korostuksen. Käytä sitä mallin selkeään tarkasteluun tai ennen kuvakaappausta. Työkalut toimivat yhä ja tarttuvat, vain merkit eivät näy. Paina {{key:Shift+P}} uudelleen, niin ne palaavat. Mitoitukset pysyvät, koska ne ovat osa piirustusta. Kun muokkaat ryhmän sisällä, muu malli ei enää himmene: se näkyy sellaisena kuin on, tekstuurit mukaan lukien.
