---
title: Pomaknite i zakrenite osi crtanja
summary: Zakrenite crvenu, zelenu i plavu os da odgovaraju građevini koja nije okomita na njih ili ih poravnajte s plohom, pa crtanje i unos slijede to.
keywords: osi, osi crtanja, ishodište, poravnaj osi, zakreni osi, vrati osi, nagnuta građevina, koso, ucs, koordinatni sustav
from: cab258f7
---

Crvena, zelena i plava os vode sve što crtate: pravokutnici se poravnavaju s njima, linije se zaključavaju na njih, a tlo je ravnina crvena–zelena. Kad građevina stoji pod kutom (situacijski plan koji nije okomit na sjever, krilo zakrenuto za 30°), pomaknite osi na nju, pa crtanje slijedi njezine zidove. Sam model se ne pomiče.

Sve tri naredbe su u {{ui:Uređivanje}} › {{ui:Više}}.

## Postavljanje osi

1. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Postavi osi}}.
2. Kliknite gdje ide ishodište, npr. kut građevine.
3. Kliknite točku duž nove crvene osi, npr. dalje duž zida.
4. Kliknite točku prema novoj zelenoj osi. Zelena se postavlja okomito na crvenu, a plava stoji okomito na obje.

Osi se crtaju na novom mjestu. Pravokutnik koji sada crtate na tlu, ili upišete kao `4m,3m`, ide duž zakrenute crvene i zelene; strelice se zaključavaju na njih; a hvatanje ishodišta je na novom ishodištu.

## Poravnanje osi s plohom

Odaberite jednu plohu, zatim {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj osi s plohom}}. Plava tada pokazuje izvan plohe, crvena ide duž njezina najdužeg brida, a ishodište je na početku tog brida. Koristite to za crtanje na nagnutom krovu kao da je tlo.

## Vraćanje osi

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Vrati osi}} vraća ih tamo gdje je model počeo.

## Što treba znati

- Unutar otvorene grupe ili komponente koriste se njezine vlastite osi (zakreću se s njom); osi modela vrijede na najvišoj razini.
- Osi se spremaju u ModelCraft datoteku, a svaka promjena je jedan korak poništavanja.
- Izvozi i standardni pogledi ({{ui:Gore}}, {{ui:Naprijed}}…) i dalje koriste smjerove samog modela.
