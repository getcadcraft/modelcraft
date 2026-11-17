---
title: Siirrä ja käännä piirustuksen akseleita
summary: Käännä punainen, vihreä ja sininen akseli vastaamaan rakennusta, joka ei ole suorassa niihin nähden, tai kohdista ne pintaan, jotta piirtäminen ja kirjoittaminen seuraavat sitä.
keywords: akselit, piirustusakselit, origo, kohdista akselit, kierrä akselit, palauta akselit, vinossa oleva rakennus, vino, ucs, koordinaatisto
from: cab258f7
---

Punainen, vihreä ja sininen akseli ohjaavat kaikkea piirtämistäsi: suorakulmiot asettuvat niiden mukaan, viivat lukittuvat niihin, ja maanpinta on punainen–vihreä taso. Kun rakennus on kulmassa (asemapiirros, joka ei ole suorassa pohjoiseen nähden, siipi käännettynä 30°), siirrä akselit sen päälle, jotta piirtäminen seuraa sen seiniä. Malli itse ei liiku.

Kaikki kolme komentoa ovat kohdassa {{ui:Muokkaus}} › {{ui:Lisää}}.

## Aseta akselit

1. {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Aseta akselit}}.
2. Napsauta kohtaa, johon origo menee, esimerkiksi rakennuksen kulmaa.
3. Napsauta pistettä uuden punaisen akselin varrella, esimerkiksi kauempana seinää pitkin.
4. Napsauta pistettä kohti uutta vihreää akselia. Vihreä tehdään suorakulmaiseksi punaiseen nähden, ja sininen on suorassa molempiin nähden.

Akselit piirtyvät uuteen paikkaansa. Maanpinnalle nyt piirtämäsi suorakulmio tai kirjoittamasi `4m,3m` kulkee käännettyjä punaisia ja vihreitä pitkin; nuolinäppäimet lukittuvat niihin; ja origoon tarttuminen on uudessa origossa.

## Kohdista akselit pintaan

Valitse yksi pinta ja sitten {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Kohdista akselit pintaan}}. Sininen osoittaa sitten ulos pinnasta, punainen kulkee sen pisimmän särmän suuntaisesti, ja origo on tuon särmän alussa. Käytä sitä piirtämiseen vinolle katolle kuin se olisi maanpinta.

## Palauta akselit

{{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Palauta akselit}} palauttaa ne sinne, mistä malli alkoi.

## Hyvä tietää

- Avoimen ryhmän tai komponentin sisällä käytetään sen omia akseleita (ne kääntyvät sen mukana); mallin akselit koskevat ylintä tasoa.
- Akselit tallennetaan ModelCraft-tiedostoon, ja jokainen muutos on yksi kumoamisaskel.
- Viennit ja vakionäkymät ({{ui:Ylä}}, {{ui:Etu}}…) käyttävät yhä mallin omia suuntia.
