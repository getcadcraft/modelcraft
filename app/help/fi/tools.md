---
title: Työkaluluettelo
summary: Jokainen ModelCraftin työkalu näppäimineen, mitä kukin napsautus tekee ja mitä voit kirjoittaa arvokenttään työkalun ollessa käytössä.
keywords: työkalut, työkalurivi, komennot, luettelo, viiva, suorakulmio, ympyrä, monikulmio, siirtymä, kaari, käyrä, spline, seuraa minua, pyyhkäise, 2 pisteen kaari, keskipisteestä kaari, valitse, työnnä vedä, siirrä, kierrä, skaalaa, pyyhekumi, mittanauha, mitoitus, kiertokatselu, panoroi, zoomaa, sijoita komponentti
from: e08a274f
---

Tilarivin vihje kertoo aina, mitä nykyinen työkalu odottaa seuraavaksi. {{key:Esc}} peruuttaa sen, mitä työkalu on parhaillaan tekemässä.

## Piirtotyökalut

| Työkalu | Näppäin | Napsautukset | Kirjoita arvokenttään |
|---|---|---|---|
| {{ui:Viiva}} | {{key:L}} | Alku, sitten jokainen seuraava piste. Pysähtyy, kun pinta sulkeutuu, tai painamalla {{key:Esc}} | Pituus osoittimen suuntaan; `[x,y,z]` piste; `<dx,dy,dz>` siirtymä ({{ui:Pituus}}) |
| {{ui:Suorakulmio}} | {{key:R}} | Ensimmäinen kulma (maassa tai pinnalla), vastakkainen kulma | Leveys ja syvyys: `4m,3m` ({{ui:Mitoitukset}}) |
| {{ui:Ympyrä}} | {{key:C}} | Keskipiste (maassa tai pinnalla), piste reunalla | Ennen ensimmäistä napsautusta: sivut, `24s` tai `24` ({{ui:Sivut}}). Sen jälkeen: säde ({{ui:Säde}}) |
| {{ui:Monikulmio}} | {{key:N}} | Keskipiste, kulma | Sama kuin ympyrässä; alkaa 6 sivusta |
| {{ui:Kaari}} | {{key:A}} | Alku, loppu, sitten kaarevuus | Jänteen pituus alun jälkeen ({{ui:Pituus}}); kaarevuus lopun jälkeen ({{ui:Kaarevuus}}); `12s` segmenteille |
| {{ui:Kulmaviivain}} | — | Keskipiste, 0°-piste, sitten kulma | Kulma asteina ({{ui:Kulma}}) |
| {{ui:Seuraa minua}} | — | Valitse polku, sitten napsauta pintaa (tai napsauta pintaa, sitten polun särmää) | — |
| {{ui:Maalaa}} | {{key:B}} | Pinta, ryhmä tai komponentti | — ({{key:Ctrl}} yhdistetty, {{key:Shift}} kaikki tämän värin kohteet, {{key:Alt}} poimi väri) |
| {{ui:Siirtymä}} | {{key:F}} | Pinta (tai valitse ensin pinta tai särmät), sitten puoli ja etäisyys | Etäisyys ({{ui:Etäisyys}}); pinnan sisään on sisäänpäin |
| {{ui:Käyrä}} | — | Pisteet, joiden läpi käyrä kulkee; {{key:Enter}} tai kaksoisnapsautus lopettaa | Pituus osoittimen suuntaan, `[x,y,z]` tai `<dx,dy,dz>` seuraavaan pisteeseen |
| {{ui:Kaari keskipisteestä}} | — | Keskipiste, alku, sitten loppu | Säde keskipisteen jälkeen; kulma asteina alun jälkeen; `12s` segmenteille |

## Muokkaustyökalut

| Työkalu | Näppäin | Napsautukset | Kirjoita arvokenttään |
|---|---|---|---|
| {{ui:Valitse}} | {{key:Space}} | Napsautus, kaksoisnapsautus, kolmoisnapsautus, laatikon vetäminen. Katso [Valitse kohteet](topic:select) | Kun yksi mitta tai särmä on valittu: uusi pituus, joka muuttaa mallin kokoa |
| {{ui:Työnnä/vedä}} | {{key:P}} | Pinta, sitten etäisyys. Kaksoisnapsauta pintaa toistaaksesi viimeisen etäisyyden | Etäisyys; negatiivinen menee toiseen suuntaan ({{ui:Etäisyys}}) |
| {{ui:Siirrä}} | {{key:M}} | Pisteestä pisteeseen. Pidä {{key:Ctrl}} tai {{key:Alt}} pohjassa kopioidaksesi | Etäisyys osoittimen suuntaan, `<dx,dy,dz>` tai `[x,y,z]` ({{ui:Etäisyys}}). Kopioinnin jälkeen: `3x` tai `/3` |
| {{ui:Kierrä}} | {{key:Q}} | Keskipiste (pinnalla kääntyy sen tasossa), alkusuunta, loppusuunta | Kulma asteina ({{ui:Kulma}}) |
| {{ui:Skaalaa}} | {{key:S}} | Piste, joka pysyy paikallaan, vertailupiste, uusi koko | Kerroin: `2`, `0.5` ({{ui:Skaalaa}}) |
| {{ui:Pyyhekumi}} | {{key:E}} | Napsauta tai vedä särmien, ryhmien, apuviivojen ja mitoitusten yli | ei mitään |
| {{ui:Mittanauha}} | {{key:T}} | Särmästä: yhdensuuntainen apuviiva. Pisteestä: mittaa ja jättää apupisteen | Siirtymä ({{ui:Siirtymä}}) tai etäisyys ({{ui:Pituus}}) |
| {{ui:Mitoitus}} | {{key:D}} | Kaksi kulmaa (tai yksi särmä), sitten mihin mittaviiva menee. Katso [Mitoitus ja koon muuttaminen](topic:dimensions) | Siirtymä ({{ui:Siirtymä}}). Heti sen jälkeen: uusi pituus, joka muuttaa mallin kokoa |

{{ui:Siirrä}}, {{ui:Kierrä}} ja {{ui:Skaalaa}} toimivat valinnalle. Jos mitään ei ole valittu, ne ottavat ensin sen, mitä napsautat (pinta tuo mukanaan sen särmät).

## Kameratyökalut

| Työkalu | Näppäin | Vedä |
|---|---|---|
| {{ui:Kiertokatselu}} | {{key:O}} | Kierrä mallin sen osan ympäri, joka on osoittimen alla ({{key:Shift}} panoroi) |
| {{ui:Panoroi}} | {{key:H}} | Liu'uta näkymää |
| {{ui:Zoomaa}} | {{key:Z}} | Zoomaa: ylös on sisään, alas on ulos |
| {{ui:Laajuus}} | {{key:Shift+Z}} | (painike, ei työkalu) Sovita koko malli |

Hiirellä näitä tarvitaan harvoin: keskipainikkeella vetäminen kiertää, oikealla vetäminen panoroi ja rulla zoomaa millä tahansa työkalulla. Katso [Kierto, panorointi ja zoomaus](topic:orbit-pan-zoom).

## Järjestäminen

| Painike | Näppäin | Tekee |
|---|---|---|
| {{ui:Komponentti}} | {{key:G}} | Tekee valinnasta komponentin |
| {{ui:Ryhmä}} | {{key:Shift+G}} | Tekee valinnasta ryhmän |
| {{ui:Hajota}} | ei mitään | Muuttaa valitut ryhmät ja komponentit takaisin irrallisiksi geometrioiksi |

## Aseta komponentti

Ei työkalurivillä: napsauta {{ui:Aseta}} komponentin vieressä paneelissa {{ui:Komponentit}}. Napsauta kerran kohtaa, johon komponentin origo tulee; sen jälkeen työkalu palaa tilaan {{ui:Valitse}}.
