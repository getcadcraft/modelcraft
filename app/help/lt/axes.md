---
title: Perkelti ir pasukti brėžinio ašis
summary: Pasukite raudoną, žalią ir mėlyną ašis, kad atitiktų pastatą, kuris nėra statmenas joms, arba suderinkite jas su paviršiumi, kad braižymas ir įvedimas sektų jas.
keywords: ašys, brėžinio ašys, pradžia, lygiuoti ašis, sukti ašis, pasukti ašis, atstatyti ašis, pastatas kampu, įstrižas, ucs, koordinačių sistema
from: cab258f7
---

Raudona, žalia ir mėlyna ašys nukreipia viską, ką braižote: stačiakampiai išsilygiuoja pagal jas, linijos prie jų užsifiksuoja, o žemė yra raudonos ir žalios ašių plokštuma. Kai pastatas stovi kampu (situacijos planas, nesutampantis su šiaurės kryptimi, sparnas, pasuktas 30°), perkelkite ašis į jį, kad braižymas sektų jo sienas. Pats modelis nejuda.

Visos trys komandos yra {{ui:Redagavimas}} › {{ui:Daugiau}}.

## Ašių nustatymas

1. {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Nustatyti ašis}}.
2. Spustelėkite, kur turi būti pradžia, pavyzdžiui, pastato kampas.
3. Spustelėkite tašką išilgai naujos raudonos ašies, pavyzdžiui, toliau išilgai sienos.
4. Spustelėkite tašką link naujos žalios ašies. Žalia tampa statmena raudonai, o mėlyna stovi statmenai abiem.

Ašys nubraižomos naujoje vietoje. Stačiakampis, kurį dabar braižote ant žemės arba įvedate kaip `4m,3m`, eina išilgai pasuktų raudonos ir žalios ašių; rodyklių klavišai prie jų fiksuojasi; o pradžios prisegimas yra naujoje pradžioje.

## Ašių lygiavimas pagal paviršių

Pasirinkite vieną paviršių, tada {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Lygiuoti ašis pagal paviršių}}. Mėlyna tada rodo iš paviršiaus, raudona eina išilgai jo ilgiausios briaunos, o pradžia yra toje briaunos pradžioje. Naudokite tai braižymui ant šlaitinio stogo lyg tai būtų žemė.

## Ašių atstatymas

{{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Atstatyti ašis}} grąžina jas į vietą, kur prasidėjo modelis.

## Verta žinoti

- Atvirojoje grupėje ar komponente naudojamos jos pačios ašys (jos sukasi kartu su ja); modelio ašys galioja viršutiniame lygmenyje.
- Ašys įrašomos į ModelCraft failą, o kiekvienas pakeitimas yra vienas anuliavimo žingsnis.
- Eksportai ir standartiniai rodiniai ({{ui:Viršus}}, {{ui:Priekis}}…) vis dar naudoja paties modelio kryptis.
