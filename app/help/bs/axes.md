---
title: Pomjeri i okreni ose crtanja
summary: Okreni crvenu, zelenu i plavu osu da odgovaraju zgradi koja nije pravougaona u odnosu na njih, ili ih poravnaj s površinom, pa crtanje i unos prate tu zgradu.
keywords: ose, ose crtanja, ishodište, poravnaj ose, rotiraj ose, okreni ose, vrati ose, zgrada pod uglom, iskošeno, ucs, koordinatni sistem
from: cab258f7
---

Crvena, zelena i plava osa vode sve što crtaš: pravougaonici se poravnavaju s njima, linije se zaključavaju za njih, a tlo je ravan crvene i zelene. Kad je zgrada pod uglom (plan lokacije koji nije pravougaon prema sjeveru, krilo okrenuto za 30°), pomjeri ose na nju, pa crtanje prati njene zidove. Sam model se ne pomjera.

Sve tri naredbe su u {{ui:Uređivanje}} › {{ui:Više}}.

## Postavi ose

1. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Postavi ose}}.
2. Klikni gdje ide ishodište, na primjer ugao zgrade.
3. Klikni tačku duž nove crvene ose, na primjer dalje duž zida.
4. Klikni tačku prema novoj zelenoj osi. Zelena se postavlja pod pravim uglom prema crvenoj, a plava stoji pod pravim uglom na obje.

Ose su nacrtane na novom mjestu. Pravougaonik koji sad crtaš na tlu, ili upišeš kao `4m,3m`, ide duž okrenute crvene i zelene; tipke sa strelicama zaključavaju se za njih; a hvatanje ishodišta je na novom ishodištu.

## Poravnaj ose s površinom

Odaberi jednu površinu, zatim {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj ose s površinom}}. Plava tada pokazuje van površine, crvena ide duž njene najduže ivice, a ishodište je na početku te ivice. Koristi to da crtaš na kosom krovu kao da je tlo.

## Vrati ose

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Vrati ose}} ih vraća tamo gdje je model počeo.

## Stvari koje treba znati

- Unutar otvorene grupe ili komponente koriste se njene sopstvene ose (okreću se s njom); ose modela važe na najvišem nivou.
- Ose se čuvaju u ModelCraft datoteci, a svaka izmjena je jedan korak poništavanja.
- Izvozi i standardni prikazi ({{ui:Gore}}, {{ui:Naprijed}}…) i dalje koriste sopstvene smjerove modela.
