---
title: Siirrä, kopioi ja tee matriiseja
summary: Siirrä kohteita napsauttamalla tai tarkalla etäisyydellä, kopioi ne muokkausnäppäimellä ja tee rivi tasavälisiä kopioita.
keywords: siirrä, kopioi, monista, matriisi, rivi, väli, jaa, siirtymä, venytä, sarakkeet, toista, useita kopioita
from: 280245fc
---

{{ui:Move}} ({{key:M}}) siirtää valitun kohteen yhdestä pisteestä toiseen. Kun pidät muokkausnäppäintä alhaalla, siirrosta tulee kopio, ja kopioinnin jälkeen voit kirjoittaa, montako kopiota vielä haluat.

## Siirrä kohde

1. Valitse se, minkä haluat siirtää (katso [Valitse kohteita](topic:select)). Jos mitään ei ole valittu, {{ui:Move}} ottaa kohteen, jota napsautat.
2. Paina {{key:M}}.
3. Napsauta lähtöpistettä. Valitse merkityksellinen kohta, esimerkiksi kulma: tämä piste osuu tarkalleen siihen kohtaan, jonka napsautat seuraavaksi.
4. Liikuta osoitinta. Valinta seuraa mukana. Se tarttuu pisteisiin, reunoihin ja punaisen, vihreän ja sinisen akselin suuntiin, kuten viiva tekee.
5. Napsauta kohtaa, johon piste siirtyy, tai kirjoita etäisyys ja paina {{key:Enter}}.

   Tilarivin vihje palaa tekstiin ”Napsauta lähtöpistettä…” seuraavaa siirtoa varten.

Kirjoitettu etäisyys menee suuntaan, johon osoitat. Voit myös kirjoittaa tarkan siirtymän, `<2m,0,0>` (2 m punaisen akselin suuntaan), tai tarkan kohteen valitsemallesi pisteelle, `[0,0,0]` (origo). Katso [Kirjoita tarkat mitat](topic:value-box).

Liikkuaksesi vain yhdellä akselilla paina ensimmäisen napsautuksen jälkeen nuolinäppäintä: {{key:Right}} lukitsee punaiseen, {{key:Left}} vihreään ja {{key:Up}} siniseen. Lukituksen poistat painamalla samaa nuolta uudelleen.

## Osan siirtäminen venyttää muotoa

Ryhmittelemätön geometria on yhteydessä toisiinsa. Jos valitset yhden pinnan tai muutaman reunan ja siirrät ne, niihin kiinnittyneet pinnat venyvät mukana. Siirrä laatikon yläpinta sivulle, niin laatikko kallistuu; siirrä katon yhtä reunaa, niin katon kaltevuus muuttuu. Pinnat, joita ei enää voi pitää tasaisina, taittuvat kolmioiksi.

Koko kohteen siirtämiseksi venyttämättä valitse se ensin kokonaan (napsauta kolmesti), tai parempi: tee siitä ryhmä tai komponentti (katso [Ryhmät ja komponentit](topic:groups-components)).

## Kopioi kohde

1. Valitse se, minkä haluat kopioida.
2. Paina {{key:M}}.
3. Pidä {{key:Ctrl}} (tai {{key:Alt}}) alhaalla ja napsauta lähtöpistettä. Macissa {{key:Mod}} tai {{key:Alt}} tekee saman. Vihje sanoo ”Ctrl siirtää sen sijaan”, mikä tarkoittaa, että kopioit.

   Voit myös painaa ja vapauttaa {{key:Ctrl}} tai {{key:Alt}} ensimmäisen napsautuksen jälkeen vaihtaaksesi siirron ja kopioinnin välillä.

4. Napsauta kohtaa, johon kopio menee, tai kirjoita etäisyys ja paina {{key:Enter}}.

   Alkuperäinen jää paikalleen, ja kopio on valittuna.

## Kopiointi, leikkaus, liittäminen ja monistaminen

- {{key:Mod+C}} kopioi valinnan, {{key:Mod+X}} leikkaa sen (kopioi ja poistaa alkuperäisen), ja {{ui:Copy}} sekä {{ui:Paste}} ovat myös työkalurivin ryhmän {{ui:Edit}} painikkeita. Niiden vieressä oleva {{ui:More}} sisältää leikkaamisen, liittämisen samaan paikkaan ja monistamisen.
- {{key:Mod+V}} liittää: kopion ääriviiva seuraa osoitinta ja tarttuu kuten mikä tahansa työkalu, ja napsautus asettaa sen niin, että sen alin kulma on siinä kohdassa. {{key:Esc}} peruuttaa.
- {{key:Mod+Shift+V}} liittää samaan paikkaan, tarkalleen siihen, mistä kopio otettiin. Se on hyödyllinen, kun haluat siirtää jotakin avattuun ryhmään.
- {{key:Mod+D}} ({{key:Shift+D}} Modeler-tyylissä) monistaa: kopio tehdään ja se liikkuu heti osoittimen mukana. Napsauta asettaaksesi sen paikoilleen, kirjoita etäisyys tai paina {{key:Esc}} pudottaaksesi sen. Heti perään voit kirjoittaa `3x` saadaksesi lisää kopioita peräkkäin.

Liitetty ryhmä muuttuu uudeksi ryhmäksi. Liitetty komponentti on uusi sijoitus samasta komponentista, joten sen muokkaaminen muuttaa niitä kaikkia. Kopiot liittyvät myös toiseen ModelCraft-välilehteen tässä selaimessa (ne tulevat sinne uusina määritelminä).

## Rivi kopioita

Heti kopioinnin jälkeen, kun {{ui:Move}} on yhä työkaluna:

- Kirjoita `3x` (tai `*3`) ja paina {{key:Enter}} saadaksesi kolme kopiota peräkkäin, kukin samalla välillä kuin ensimmäinen kopio. Saat kolme uutta kopiota alkuperäisen lisäksi.
- Kirjoita `/3` ja paina {{key:Enter}} jakaaksesi sen sijaan: kolme kopiota jakautuu tasaisesti alkuperäisestä siihen kohtaan, johon asetit ensimmäisen kopion, ja viimeinen kopio on tuossa kohdassa. Käytä tätä, kun haluat täyttää välin: aseta yksi kopio kauimmaiseen päähän ja jaa sitten.

Voit kirjoittaa heti perään toisen luvun: `5x` korvaa `3x`-rivin. Vihje muistuttaa: ”Kopioitu. Kirjoita 3x saadaksesi lisää kopioita peräkkäin tai /3 jakaaksesi etäisyyden.”

### Esimerkki: pilarit 6 metrin välein

1. Tee pilari ja muuta se komponentiksi ({{key:G}}), jotta kaikki kopiot muuttuvat yhdessä myöhemmin.
2. Paina {{key:M}}, pidä {{key:Ctrl}} alhaalla ja napsauta pilarin pohjakulmaa.
3. Liiku punaista akselia pitkin, kirjoita `6m` ja paina {{key:Enter}}.
4. Kirjoita `4x` ja paina {{key:Enter}}. Sinulla on viisi pilaria, 6 m välein.

## Hyvä tietää

- Paina {{key:Esc}} ennen toista napsautusta peruuttaaksesi; kaikki palaa entiselleen.
- Siirto toimii ryhmän sisällä, jota muokkaat. Jos haluat siirtää koko ryhmän, sulje se ensin ja valitse se ulkopuolelta.
- Kun {{ui:Collide}} on päällä (oikeassa alakulmassa ja [ModelCraftin asetuksissa](topic:settings#solids-stop-where-they-touch)), siirto pysähtyy siihen, missä valinta koskettaa toista kiintokappaletta, eikä mene sen läpi. Kytke se pois siirrolle, jonka pitää mennä läpi, painikkeesta {{ui:Collide}}.
- Jos haluat laittaa kopion toiseen ryhmään: kopioi se, avaa toinen ryhmä ja liitä ({{key:Mod+Shift+V}} pitää sen samassa paikassa).
