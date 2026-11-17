---
title: Kirjoita tarkat mitat arvoruutuun
summary: Kaikki tavat kirjoittaa pituuksia, kokoja, pisteitä, siirtymiä, kulmia, sivuja ja kopioita sekä se, miten yksiköt ja paljaat luvut luetaan.
keywords: arvoruutu, mittaruutu, vcb, kirjoita, tarkka, mitoitus, pituus, yksiköt, jalat, tuumat, metrinen, millimetrit, koordinaatit, siirtymä, matriisi, sivut, kulma, desimaalipilkku
from: 0148dc3d
---

Arvoruutu on alareunan tilarivillä, ja sen nimike vaihtuu työkalun mukaan. Työskennellessäsi se näyttää kokoa reaaliajassa; milloin tahansa voit kirjoittaa tarkan koon.

## Kirjoittaminen

1. Aloita toiminto napsautuksella (ensimmäinen kulma, pinta, piste, josta siirretään).
2. Kirjoita. Arvoruutua ei tarvitse napsauttaa: numero tai jokin merkeistä `. , - ' " [ < * /` lähettää kirjoituksesi sinne.
3. Paina {{key:Enter}}.

Paina arvoruudussa {{key:Esc}} tyhjentääksesi sen ja palataksesi näkymään. Kosketusnäytöllä napauta arvoruutua tuodaksesi näppäimistön esiin.

Jos ModelCraft ei ymmärrä kirjoittamaasi, tilarivi sanoo "Kirjoita pituus, kuten 3m, 10'6" tai 4m,3m." Jos työkalu ei voi käyttää sitä, tilarivillä lukee "Se ei onnistunut: …" ja syy.

## Pituudet

| Kirjoita | Tarkoittaa |
|---|---|
| `3m` `320cm` `3200mm` | Metriä, senttimetriä, millimetriä |
| `10'` `10ft` `10 feet` | Jalkoja |
| `6"` `6in` `6 inches` | Tuumia |
| `10'6"` `10' 6"` `10'-6 1/2"` | Jalkoja ja tuumia, murtoluvulla |
| `6 1/2"` `6-1/2"` `3/4"` | Tuumia murtoluvulla |
| `1.5ft` `.5m` | Desimaaleja yksikön kanssa |
| `120` | Paljas luku, mallin yksikössä |

**Paljas luku käyttää mallin yksikköä**, kuten oikeassa alakulmassa olevassa valitsimessa näkyy: tuumia jalka- ja tuumamallissa (joten `120` on 10 jalkaa), millimetrejä millimetrimallissa ja niin edelleen. Yksikön kirjoittaminen voittaa aina, mallin yksiköstä riippumatta. Kaarevat lainausmerkit ja prime-merkit (’ ” ′ ″) luetaan myös jalkoina ja tuumina.

:::warning
Käytä desimaaleissa aina **pistettä**: `2.5m`. Pilkku erottaa kaksi arvoa, joten `2,5` tarkoittaa 2 ja 5 (kaksi arvoa), kieliasetuksista riippumatta.
:::

## Laskutoimitukset

Mikä tahansa pituus voi olla laskutoimitus: lisää `+`, vähennä `-`, kerro `*`, jaa `/` ja käytä sulkuja. Laskinta ei tarvita.

| Kirjoita | Tarkoittaa |
|---|---|
| `2.5/3` | Kolmasosa luvusta 2.5 (mallin yksikössä) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" jalka- ja tuumamallissa |
| `3m-25cm` | 2.75 m |

Paljas luku on mallin yksikössä, kun se on pituus (`2.5/3` metrimallissa on 0.833 m), ja tavallinen kerroin, kun se kertoo tai jakaa pituuden (`2*450mm`). Myös kulmat ja kertoimet voivat olla laskutoimituksia: `90/2` on 45°. Kaksi kerrottua pituutta tekee pinta-alan, ei pituutta, joten `2m*3m` hylätään.

Jos ModelCraft ei pysty laskemaan sitä, tilarivi kertoo, mikä on vialla ja missä, esimerkiksi "Nollalla jakaminen (merkki 4)." Myös sulku aloittaa arvoruudun, joten voit aloittaa merkillä `(`.

Nämä säilyttävät oman merkityksensä: `/3`, `3x` ja `*3` kopioinnin jälkeen, `24s` sivuille sekä `/3` särmän ollessa valittuna (se [jakaa särmän](topic:divide)).

## Työkaluittain

| Työkalu | Nimike | Kirjoita |
|---|---|---|
| {{ui:Viiva}} | {{ui:Pituus}} | Pituus (osoittimeen päin), tai piste tai siirtymä (alla) |
| {{ui:Suorakulmio}} | {{ui:Mitoitukset}} | Kaksi pituutta: `4m,3m`, `12',10'`. Puolipiste käy myös: `4m;3m` |
| {{ui:Ympyrä}}, {{ui:Monikulmio}} | {{ui:Sivut}}, sitten {{ui:Säde}} | Ennen ensimmäistä napsautusta sivujen määrä: `12s` tai `12` (3–999). Sen jälkeen säde |
| {{ui:Työnnä/vedä}} | {{ui:Etäisyys}} | Pituus. Negatiivinen menee toiseen suuntaan |
| {{ui:Siirrä}} | {{ui:Etäisyys}} | Pituus (osoittimeen päin), tai piste tai siirtymä. Kopioinnin jälkeen: `3x`, `*3`, `/3` |
| {{ui:Kierrä}} | {{ui:Kulma}} | Asteet: `90`, `-45`, `22.5` |
| {{ui:Skaalaa}} | {{ui:Skaalaa}} | Kerroin suurempi kuin 0: `2`, `0.5`, `1.25` |
| {{ui:Mittanauha}} | {{ui:Siirtymä}} tai {{ui:Pituus}} | Pituus |
| {{ui:Jaa}} | {{ui:Osat}} | Montako yhtä suurta osaa: `5`, `5s` tai `/5` (2–1000). Katso [Jaa särmä tai käyrä yhtä suuriin osiin](topic:divide) |
| {{ui:Mitoitus}} | {{ui:Siirtymä}}, sitten {{ui:Pituus}} | Mihin mittaviiva menee; heti sijoittamisen jälkeen uusi pituus muuttaa mallin kokoa |
| {{ui:Valitse}} | {{ui:Arvo}} | Kun yksi mitoitus tai särmä on valittuna, uusi pituus muuttaa mallin kokoa. Katso [Mitoitus ja koon muuttaminen](topic:dimensions) |

## Pisteet ja siirtymät

Työkaluille {{ui:Viiva}} ja {{ui:Siirrä}} ensimmäisen napsautuksen jälkeen:

- `[x,y,z]` siirtyy siihen tarkkaan pisteeseen mallissa (ryhmän omilla akseleilla, kun muokkaat ryhmän sisällä). Esimerkki: `[0,0,3m]` on 3 m suoraan origon yläpuolella.
- `<dx,dy,dz>` menee tuon matkan päähän ensimmäisestä pisteestä punaisen, vihreän ja sinisen akselin suuntaan. Esimerkki: `<0,0,10'>` on 10 jalkaa suoraan ylös.

Jokaisella kolmesta arvosta voi olla oma yksikkönsä: `<12',0,6">`.

## Kopiot siirron jälkeen

Heti kopioinnin jälkeen {{ui:Siirrä}}-työkalulla:

| Kirjoita | Tekee |
|---|---|
| `3x` tai `*3` | 3 kopiota peräkkäin samalla välillä |
| `/3` | 3 kopiota tasaisesti alkuperäisestä ensimmäiseen kopioon |

Enintään 500 kopiota. Katso [Siirrä, kopioi ja tee matriiseja](topic:move-copy#a-row-of-copies).

## Kirjoitetut pituudet tarvitsevat suunnan

Yksittäinen kirjoitettu pituus menee siihen suuntaan, johon osoitin osoittaa ensimmäisestä napsautuksesta. Jos kirjoitat heti napsautuksen jälkeen, ennen kuin liikutat osoitinta lainkaan, suuntaa ei vielä ole eikä mitään tapahdu. Liikuta osoitinta hieman kohti haluamaasi suuntaa ja kirjoita sitten.

## Mallin yksikkö

Vaihda yksikkö oikeassa alakulmassa olevasta valitsimesta: {{ui:ft ja in}}, in, ft, yd, mi, mil, µm, mm, cm, m tai km, siltä osin kuin ne on kytketty päälle kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} (mallin oma yksikkö on aina mukana). Pituus, joka on kirjoitettu minkä tahansa yksikön merkillä, luetaan siinä yksikössä. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists). Yksikkö muuttaa tapaa, jolla pituudet näytetään ja paljaat luvut luetaan; malli pysyy samankokoisena. Yksikkö tallennetaan tiedostoon.

Näin koot näytetään:

| Yksikkö | Pituudet | Pinta-alat | Tilavuudet |
|---|---|---|---|
| ft ja in | `10' 6 1/2"` (1/16":een asti) | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² alkaen 0.01 m², muuten mm² | m³ alkaen 0.01 m³, muuten mm³ |

Uusi malli alkaa tuumina ja jalkoina, kun selaimen kieli on asetettu Yhdysvaltain alueeseen (sekä Liberiassa ja Myanmarissa), ja muualla millimetreinä. Kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} tähdellä merkitty yksikkö käytetään sen sijaan, kun ModelCraftilla on se. Tai vaihda valitsinta {{ui:Uusi}}-toiminnon jälkeen.
