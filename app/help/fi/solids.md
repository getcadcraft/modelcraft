---
title: Kiintokappaleiden työkalut: yhdiste, erotus, leikkaus
summary: Yhdistä suljetut ryhmät ja komponentit yhdeksi, leikkaa yksi toisesta tai säilytä vain se, mitä ne jakavat.
keywords: kiintokappale, kiintokappaleet, kiintokappaleen tarkastaja, ei kiintokappale, korjaa kiintokappale, reikä, irrallinen särmä, sisältäpäin ulos, yhdiste, yhdistä, sulauta, erotus, vähennä, leikkaa, leikkaus, boolean, ulkokuori
from: f35df1cc
---

Kiintokappaleiden työkalut yhdistävät **kiintokappaleita**: ryhmiä ja komponentteja, joiden pinnat sulkevat tilavuuden, ja jokainen särmä yhdistää tasan kaksi pintaa. {{ui:Kohteen tiedot}} kertoo {{ui:Kiintokappale}}: {{ui:Kyllä}} sellaiselle, ja näyttää sen tilavuuden.

Ne löytyvät {{ui:Kiintokappaleet}}-valikosta {{ui:Järjestä}}-ryhmästä.

## Kun jokin ei ole kiintokappale

Valitse ryhmä tai komponentti. Kun se ei ole kiintokappale, {{ui:Kohteen tiedot}} kertoo syyn, esimerkiksi "Ei kiintokappale: 4 särmää rajaavat reikää · 1 irrallinen särmä":

| Ongelma | Mitä se tarkoittaa |
|---|---|
| Särmät rajaavat reikää | Pinta puuttuu |
| Särmät jaettu kolmen tai useamman pinnan kesken | Pinta jakaa sisätilan, tai kaksi muotoa koskettaa toisiaan särmää pitkin |
| Pinnat muodon sisällä | Seinä on jäänyt tilavuuden sisään |
| Irralliset särmät | Viivat, jotka eivät rajaa pintaa |
| Pinnat käännetty nurin | Niiden etupuoli sisäänpäin, naapureitaan vastaan |

{{ui:Näytä ongelmat}} avaa sen niin, että nämä särmät ja pinnat ovat valittuina, jotta näet ne. {{ui:Korjaa}} korjaa yksinkertaiset tapaukset yhdellä kumoamisvaiheella: se poistaa irralliset särmät ja muodon sisäiset pinnat, kääntää pinnat oikein päin ja sulkee reiät, joiden reuna on tasainen. Kaiken, mitä ei voi korjata turvallisesti (reikä, joka ei ole tasainen, särmä, jonka monet pinnat jakavat), se jättää sinulle ja kertoo, mitä jäi jäljelle.

## Yhdiste

1. Valitse kaksi tai useampi kiintokappale (napsauta yhtä, {{key:Ctrl}}+napsauta muita).
2. {{ui:Kiintokappaleet}} › {{ui:Yhdiste}}.

Niistä tulee yksi kiintokappale, yhdessä ryhmässä. Kohdissa, joissa ne menivät päällekkäin, sisäpinnat ovat poissa.

## Erotus

1. {{ui:Kiintokappaleet}} › {{ui:Erotus}}.
2. Napsauta kiintokappaletta, joka **poistetaan** (leikkuri).
3. Napsauta kiintokappaletta, josta **leikataan**.

Toisen kiintokappaleen jäljelle jäävä osa säilyy; leikkuri kuluu loppuun. Esimerkiksi reiän tekemiseksi lohkon läpi piirrä tolppa sen läpi, tee tolpasta ryhmä ja vähennä sitten tolppa lohkosta.

## Leikkaus

Valitse kaksi tai useampi kiintokappale ja sitten {{ui:Kiintokappaleet}} › {{ui:Leikkaus}}. Säilytetään vain se osa, jonka ne kaikki jakavat.

## Hyvä tietää

- Tulos on uusi ryhmä. Se säilyttää ensimmäisen kiintokappaleen nimen, värin ja tunnisteen (Erotus-toiminnossa: se, josta leikataan). Pinnoille maalatut värit eivät säily.
- Tuloksen tasaiset sivut ovat yksittäisiä pintoja. Pyöreät sivut tulevat ulos niiden tasaisina fasetteina, joilla ne piirrettiin.
- Jos ryhmä tai komponentti ei ole kiintokappale, työkalu kertoo, mikä, eikä muuta mitään. Etsi siitä puuttuva pinta tai sisään jäänyt irrallinen pinta.
- Avoimen ryhmän sisällä työkalut toimivat sen ryhmän ryhmiin ja komponentteihin.
- Kukin työkalu on yksi kumoamisvaihe.
- Kun käytät kiintokappaletyökalua ensimmäisen kerran, sen moottori (manifold-3d) latautuu, mikä voi viedä hetken.
