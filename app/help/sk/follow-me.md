---
title: Nasleduj ma: ťahanie plochy po dráhe
summary: Vytvorte potrubia, káble, zábradlia, lišty a prstence ťahaním plochy po hranách, oblúkoch alebo krivke.
keywords: nasleduj ma, ťahanie, dráha, potrubie, kábel, rúra, zábradlie, lišta, žľab, prstenec, torus, sústruženie, ťahanie po dráhe
from: ec7b3839
---

{{ui:Nasleduj ma}} posunie plochu po dráhe a vytvorí teleso, ktorým prechádza. Plocha si zachová svoj tvar a zostane kolmo na dráhu a v každom rohu dráhy sa časti stretnú na čistom skosení.

## Vytvorenie kábla

1. Nakreslite dráhu: {{ui:Krivka}} cez body, ktorými kábel prechádza (môže stúpať aj klesať), alebo čiary tvorené nástrojmi {{ui:Úsečka}} a {{ui:Oblúk}} spojené koniec na koniec.
2. Na začiatku dráhy nakreslite prierez kábla: malú kružnicu nástrojom {{ui:Kružnica}} cez dráhu. Začnite kružnicu v koncovom bode dráhy a otočte ju tak, aby smerovala pozdĺž dráhy; alebo ju nakreslite na plochu, ktorá tam dráhu prekrýva.
3. Vyberte dráhu (jedným kliknutím sa vyberie celá krivka alebo oblúk; {{key:Ctrl}}+kliknutie pridá ďalšie hrany).
4. Kliknite na {{ui:Nasleduj ma}} v skupine {{ui:Úpravy}} a potom kliknite na kružnicu.

Rúra je uzavreté teleso s hladkými (mäkkými) bokmi.

## Bez predchádzajúceho výberu dráhy

Kliknite na {{ui:Nasleduj ma}}, kliknite na plochu a potom na ľubovoľnú hranu dráhy. Dráha je reťaz hrán cez túto hranu až po miesto, kde sa stretnú tri alebo viac hrán.

## Čo treba vedieť

- **Uzavreté dráhy** (kružnica, uzavretá krivka, obrys obdĺžnika) vytvoria prstenec: plocha sa spotrebuje a prstenec sa uzavrie sám na seba. Na zemi nakreslite kružnicu ako dráhu a malú kružnicu zvislo cez ňu pre donut.
- **Mimo dráhy:** plocha sa nemusí dotýkať dráhy. Profil nakreslený vedľa dráhy sa posúva popri nej, ako lišta pozdĺž hornej hrany múra.
- **Dráha sa nesmie vetviť** a musí tvoriť jednu spojenú reťaz. ModelCraft to oznámi, keď to tak nie je.
- **Plocha ležiaca pozdĺž dráhy** (v rovnakej rovine ako prvá hrana dráhy) sa nedá ťahať: otočte ju tak, aby prechádzala cez dráhu.
- Dá sa to vrátiť jedným krokom späť.
