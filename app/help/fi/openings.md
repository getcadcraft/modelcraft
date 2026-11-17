---
title: Leikkaa aukko seinän läpi
summary: Piirrä ikkuna tai ovi paksulle seinälle ja työnnä se läpi, jolloin seinään tulee oikea reikä.
keywords: ikkuna, ovi, aukko, reikä, seinä, leikkaus, työnnä läpi, tyhjä tila, paksuus, julkisivu
from: 6b22f32c
---

Aukko tarvitsee seinän, jolla on kaksi puolta: laatikon tai seinän, jonka olet tehnyt vetämällä pitkän ohuen suorakulmion ylös. Yksittäinen, omillaan seisova pinta ei tarjoa mitään, minkä läpi työntää.

## Tee harjoitusseinä

1. Paina {{key:R}}, napsauta kulmaa maassa ja kirjoita `6m,0.3m` (tai `20',12"`), sitten {{key:Enter}}.
2. Paina {{key:P}}, napsauta suorakulmiota ja kirjoita `3m` (tai `10'`), sitten {{key:Enter}}.

Sinulla on seinä, joka on 300 mm (12 in) paksu.

## Piirrä aukko

1. Kiertele näkymää, jotta näet seinän pitkän sivun.
2. Paina {{key:R}}.
3. Vie osoitin seinän pinnan päälle ja napsauta kohtaa, johon ikkunan alakulma menee. Vihje sanoo ”Pinnalla”.
4. Kirjoita ikkunan leveys ja korkeus, esimerkiksi `1.2m,1.5m` (tai `4',5'`), ja paina {{key:Enter}}.

   Ikkuna on oma pintansa seinäpinnan sisällä, ja seinäpinnassa on nyt reikä sen ympärillä.

Sijoittaaksesi ikkunan tarkan etäisyyden päähän kulmasta ja lattiasta, käytä ensin [ohjeviivoja](topic:guides-measure): vedä työkalulla {{ui:Tape}} ohjeviivoja seinän alareunasta ja päätereunasta, ja aloita suorakulmio siitä kohdasta, jossa kaksi ohjeviivaa risteää (vihje sanoo ”Ohjeviivalla”).

## Työnnä läpi

1. Paina {{key:P}}.
2. Napsauta ikkunan pintaa ja työnnä se seinään.
3. Liikuta, kunnes se pysähtyy takapinnalle, ja napsauta. Tai kirjoita seinän paksuus, `300` (tai `12`), ja paina {{key:Enter}}.

   ModelCraft pysähtyy takana olevaan pintaan ja avaa sen: seinään tulee suora läpireikä, jota reunustavat neljä sivupintaa (pielet, yläpalkki ja alapalkki). {{ui:Entity info}} kutsuu seinää yhä suljetuksi kiintokappaleeksi, kun se on ryhmitetty.

Jos työnnät vähemmän kuin koko paksuuden, saat reiän sijaan syvennyksen.

## Ovi

Piirrä suorakulmio alkaen seinäpinnan alareunasta (vihje sanoo ”Reunalla” tai ”Päätepiste”), jotta aukko ulottuu lattiaan. Työnnä se läpi samalla tavalla.

## Monta samankokoista ikkunaa

1. Tee ensimmäinen aukko.
2. Seuraaviin piirrä suorakulmiot ja kaksoisnapsauta jokaista työkalulla {{ui:Push/pull}}: kaksoisnapsautus toistaa viimeisen etäisyyden. Katso [Työnnä ja vedä](topic:push-pull#repeat-the-last-distance).

## Jos se ei leikannut läpi

- Suorakulmion täytyy olla piirretty seinän pinnalle **päälle**. Jos se piirrettiin ilmaan pinnan eteen, se on erillinen pinta: kumoa ja piirrä se uudelleen alkaen pinnalta.
- Työntö pysähtyy ensimmäiseen pintaan aukon takana. Jos seinän sisällä on jotakin muuta tiellä (aiemmasta piirtämisestä jäänyt sisäpinta), työntö pysähtyy siihen; poista sen pinnan reunat ja yritä uudelleen.
- Erillisessä ryhmässä olevaa geometriaa ei leikata. Avaa ryhmä, jossa seinä on, ja piirrä aukko sen sisällä.
