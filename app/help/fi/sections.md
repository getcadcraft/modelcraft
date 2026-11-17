---
title: Leikkaustasot: avaa malli leikkaamalla
summary: Aseta leikkaustaso nähdäksesi mallin sisälle, liu'uta sitä läpi, käännä se tai sammuta leikkaus.
keywords: leikkaus, leikkaustaso, leikkaa, läpileikkaus, rajaus, sisäpuoli, pohjapiirros, viipale, poikkileikkaus
from: 28c3a645
---

Leikkaustaso leikkaa mallin auki, jotta voit nähdä ja työskennellä sen sisällä: talon pohjapiirroksen, kaapin sisäpuolen. Mallia ei muuteta. Leikkaus on vain näkymä.

## Aseta leikkaustaso

1. Napsauta {{ui:Leikkaus}} ryhmässä {{ui:Kamera}}.
2. Napsauta pintaa. Taso asetetaan sille pinnalle, ja siinä on neljä nuolta, jotka osoittavat sinua kohti.

   Napsauta muualle kuin pintaan, jos haluat tason neliön, joka on kohtisuorassa suuntaan, johon katsot eniten. Paina ensin nuolinäppäintä, jos haluat tason kohtisuoraan punaista ({{key:Right}}), vihreää ({{key:Left}}) tai sinistä ({{key:Up}}) akselia vastaan.

Nuolten osoittama puoli on **leikattu pois**. Pinnalle asetettu taso ei vielä leikkaa mitään: liu'uta se malliin.

## Liu'uta, käännä ja sammuta

Napsauta tason ääriviivaa valitaksesi sen. Kohdassa {{ui:Kohteen tiedot}}:

- {{ui:Nuolten suuntaan}} kertoo, missä taso sijaitsee. Kirjoita uusi etäisyys ja paina {{key:Enter}} liu'uttaaksesi sen mallin läpi. Kirjoittamalla `-1m` tasolle, jonka asetit etupinnalle, siirrät sen 1 m malliin.
- {{ui:Käännä suunta}} kääntää nuolet ympäri, joten toinen puoli leikataan pois.
- {{ui:Aktiivinen (leikkaa mallia)}}: kerralla yksi taso leikkaa. Rastita toisen tason ruutu tai aseta uusi taso, ja se leikkaa sen sijaan.
- Nimeä taso kohdassa {{ui:Nimi}}. Poista se {{key:Delete}}-näppäimellä tai {{ui:Pyyhekumi}}-työkalulla.

Kun taso kulkee suljetun kiintokappaleen läpi, leikkaus täytetään tummalla värillä. Ei-suljettu geometria (yksi pinta, avoin laatikko) leikataan, mutta sitä ei täytetä.

## Näytä ja piilota

Kohdassa {{ui:Näkymät}}:

- {{ui:Näytä leikkaustasot}} piilottaa tasojen ääriviivat ja nuolet. Leikkaus säilyy.
- {{ui:Näytä leikkaukset}} sammuttaa leikkauksen ja näyttää koko mallin poistamatta tasoja.

[Esitysnäkymä](topic:styles-shadows#presentation-view) piilottaa myös ääriviivat.

## Hyvä tietää

- Leikattua pois olevaa ei voi napsauttaa eikä tarttua siihen, joten voit piirtää sen päälle, mitä leikkaus näyttää.
- Leikkaustasot, aktiivinen taso ja kaksi kytkintä tallennetaan ModelCraft-tiedostoon. Jokainen muutos on yksi kumoamisvaihe.
- Viennit sisältävät aina koko mallin: leikkaus on näkymä, ei muokkaus.
