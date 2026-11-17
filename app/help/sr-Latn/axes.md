---
title: Pomerite i okrenite ose crteža
summary: Okrenite crvenu, zelenu i plavu osu da se poklope sa zgradom koja nije pravougaona u odnosu na njih, ili ih poravnajte sa stranom, pa crtanje i unos prate zgradu.
keywords: ose, ose crteža, ishodište, poravnaj ose, okreni ose, vrati ose, zgrada pod uglom, nakošena, ucs, koordinatni sistem
from: cab258f7
---

Crvena, zelena i plava osa vode sve što crtate: pravougaonici se poravnavaju s njima, linije se zaključavaju uz njih, a tlo je ravan crvena–zelena. Kada zgrada stoji pod uglom (situacioni plan koji nije pravougaon prema severu, krilo okrenuto za 30°), pomerite ose na nju, pa crtanje prati njene zidove. Sam model se ne pomera.

Sve tri komande su u {{ui:Uređivanje}} › {{ui:Više}}.

## Postavljanje osa

1. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Postavi ose}}.
2. Kliknite gde ide ishodište, na primer ugao zgrade.
3. Kliknite tačku duž nove crvene ose, na primer dalje duž zida.
4. Kliknite tačku prema novoj zelenoj osi. Zelena se pravi pod pravim uglom u odnosu na crvenu, a plava stoji pod pravim uglom prema obema.

Ose se crtaju na novom mestu. Pravougaonik koji sada crtate na tlu, ili upišete kao `4m,3m`, ide duž okrenute crvene i zelene; strelice tastature se zaključavaju uz njih; a hvatanje ishodišta je na novom ishodištu.

## Poravnavanje osa sa stranom

Izaberite jednu stranu, pa {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj ose sa stranom}}. Plava tada pokazuje iz strane, crvena ide duž njene najduže ivice, a ishodište je na početku te ivice. Koristite to da crtate na kosom krovu kao da je to tlo.

## Vraćanje osa

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Vrati ose}} ih vraća na mesto gde je model počeo.

## Stvari koje treba znati

- Unutar otvorene grupe ili komponente koriste se njene sopstvene ose (okreću se s njom); ose modela važe na najvišem nivou.
- Ose se čuvaju u datoteci ModelCraft, a svaka promena je jedan korak opoziva.
- Izvozi i standardni prikazi ({{ui:Gore}}, {{ui:Spredaj}}…) i dalje koriste sopstvene pravce modela.
