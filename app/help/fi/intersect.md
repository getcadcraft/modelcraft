---
title: Leikkaa pinnat
summary: Piirrä viivat, joissa pinnat leikkaavat toisensa, jotta voit työntää, poistaa tai maalata palat.
keywords: leikkaus, leikkaa pinnat, leikkaa mallin kanssa, leikkaa valinnan kanssa, aukko, reikä, yhdistä, leikkauslinjat, boolean
from: 6bc58526
---

Kun yksi muoto kulkee toisen läpi, ModelCraft ei piirrä viivaa, jossa niiden pinnat kohtaavat: ne vain menevät päällekkäin. **Leikkaa** piirtää nuo viivat reunoina, jolloin pinnat jakautuvat niistä. Sitten voit työntää/vetää, poistaa tai maalata palat.

Molemmat komennot ovat kohdassa {{ui:Edit}} › {{ui:More}}.

## Leikkaa mallin kanssa

Leikkaa valinta **jokaista näytöllä olevaa pintaa vastaan**.

Esimerkiksi palkki (ryhmä) kulkee seinän (toisen ryhmän) läpi, ja haluat seinään aukon:

1. Kaksoisnapsauta seinää avataksesi sen ja valitse kaikki sen pinnat ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Palkin ääriviiva piirtyy seinän molemmille pinnoille kahtena uutena pintana. Työnnä toinen niistä seinän läpi tehdäksesi aukon, ja sulje sitten seinä.

## Leikkaa valinnan kanssa

Leikkaa valitut pinnat, ryhmät ja komponentit **vain toisiaan vastaan**. Valitse vähintään kaksi.

## Mihin viivat menevät

Viivat piirretään aina **avoimeen kontekstiin**: malliin, kun mitään ryhmää ei ole auki, tai ryhmään, jota muokkaat. Ryhmiä ja komponentteja, jotka eivät ole auki, ei muuteta. Joten leikataksesi ryhmän pintoja, avaa se ensin, kuten yllä olevassa esimerkissä.

## Hyvä tietää

- Samassa tasossa olevia pintoja ei leikata.
- Viivat, jotka sulkevat silmukan pinnalla, tekevät uuden pinnan, kuten piirretyt viivat tekevät.
- Jokainen leikkaus on yksi kumoamisvaihe. Jos mikään ei leikkaa, mitään ei muutu.
- Suljetuille muodoille [kiintokappale-työkalut](topic:solids) (Yhdiste, Vähennä) tekevät koko työn yhdessä vaiheessa.
