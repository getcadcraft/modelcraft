---
title: Valitse kohteita
summary: Napsauta, kaksoisnapsauta ja kolminapsauta, vedä ikkuna tai leikkaava laatikko, lisää ja poista valintoja muokkausnäppäimillä ja poista kohteet.
keywords: valitse, valinta, ikkuna, leikkaava, lisää valintaan, poista valinta, valitse kaikki, kolminapsautus, kaksoisnapsautus, poista, pyyhi
from: d56d1f89
---

{{ui:Valitse}} ({{key:Space}}) on työkalu, jolla ModelCraft aloittaa ja johon {{key:Esc}} palauttaa. Valitut kohteet muuttuvat siniseksi, ja oikealla oleva {{ui:Kohteen tiedot}} kertoo, mitä ne ovat.

## Napsautus

| Tee tämä | Valitsee |
|---|---|
| Napsauta pintaa tai särmää | Tämän pinnan tai särmän |
| Napsauta ryhmää tai komponenttia | Koko ryhmän tai komponentin |
| Kaksoisnapsauta pintaa | Pinnan ja sen särmät |
| Kaksoisnapsauta särmää | Särmän ja sen kummallakin puolella olevat pinnat |
| Kaksoisnapsauta ryhmää tai komponenttia | Avaa sen muokkausta varten (katso [Ryhmät ja komponentit](topic:groups-components)) |
| Kolminapsauta pintaa tai särmää | Kaikki siihen liittyvä: koko kohde |
| Napsauta tyhjää tilaa | Ei mitään (tyhjentää valinnan) |
| Kaksoisnapsauta tyhjää tilaa ryhmää muokatessa | Sulkee ryhmän |

Särmiin osuu helpommin kuin pintoihin: kun osoitin on muutaman pikselin etäisyydellä särmästä, napsautus valitsee särmän.

## Vedä laatikko

- **Vasemmalta oikealle** piirtää yhtenäisen laatikon: **ikkunavalinnan**. Valitaan vain kokonaan sen sisällä olevat kohteet.
- **Oikealta vasemmalle** piirtää katkoviivalaatikon: **leikkaavan valinnan**. Laatikon koskettama kohde valitaan, ja pinta valitaan, kun laatikko on kokonaan sen sisällä.

Ryhmä tai komponentti lasketaan yhdeksi kohteeksi: ikkunan on sisällettävä koko kohde, leikkaavan riittää, että se koskettaa sitä.

## Lisää ja poista

Pidä näppäintä pohjassa napsauttaessasi tai vetäessäsi:

| Näppäin | Vaikutus |
|---|---|
| {{key:Shift}} | Vaihtaa: lisää valitsemattoman kohteen ja poistaa valitun |
| {{key:Mod}} | Lisää |
| {{key:Shift}} ja {{key:Mod}} yhdessä | Poistaa |

Kaiken valitsemiseksi mallissa (tai kaiken muokattavana olevassa ryhmässä) paina {{key:Mod+A}}.

## Tyhjennä valinta

Paina {{key:Esc}} ({{ui:Valitse}}-työkalun ollessa käytössä) tai napsauta tyhjää tilaa.

## Poista valitut kohteet

Paina {{key:Delete}} tai {{key:Backspace}}. Valinnassa olevat pinnat, särmät, ryhmät ja ohjeviivat poistetaan yhdellä kertaa; {{key:Mod+Z}} palauttaa ne.

Särmän poistaminen poistaa pinnat, jotka sitä tarvitsevat, paitsi jos särmä erotti vain kaksi samassa tasossa olevaa pintaa: silloin pinnat yhdistyvät yhdeksi. Pinnan poistaminen jättää sen särmät. Katso [Pyyhi ja siivoa](topic:erase).

## Valitse ryhmän sisältä

Ryhmän napsauttaminen valitsee koko ryhmän. Valitaksesi ryhmän sisällä olevan pinnan kaksoisnapsauta ryhmää avataksesi sen ja napsauta sitten. Kun ryhmä on auki, napsautukset ulottuvat vain sen sisällä oleviin kohteisiin; muu himmenee. Paina {{key:Esc}}, kun mitään ei ole valittuna, tai kaksoisnapsauta tyhjää tilaa sulkeaksesi ryhmän.

Vasemmalla oleva {{ui:Jäsennys}} valitsee ryhmät ja komponentit nimen perusteella, mikä auttaa, kun ne ovat piilossa muiden kohteiden takana.
