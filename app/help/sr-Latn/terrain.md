---
title: Teren: tlo iz izohipsi i njegovo oblikovanje
summary: Napravi tlo iz linija izohipsi ili kao mrežu, pa ga podigni i spusti mekom četkom.
keywords: teren, tlo, pejzaž, topografija, izohipse, linije izohipsi, lokacija, nagib, brdo, humak, peščanik, smoove, oblikovanje, nivelacija, TIN
from: 407652b3
---

Teren je tlo sastavljeno od trouglova, pa može pratiti bilo koji oblik. To je grupa: dvaput klikni da je uređuješ.

## Iz linija izohipsi

1. Nabavi linije izohipsi na njihovim visinama: nacrtaj ih, ili [uvezi plan lokacije](topic:site-plan) i pomeri svaku izohipsu na njen nivo.
2. Izaberi ih (sve ivice svih izohipsi).
3. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Teren iz izabranih izohipsa}}.

ModelCraft spaja tačke izohipsi trouglovima (TIN) i omekšava svaku ivicu unutra, pa se tlo senči glatko. Same linije ostaju; obriši ih ili sakrij kad ti više ne trebaju. Vrlo guste izohipse se prorede na 8 000 tačaka.

## Mreža za oblikovanje

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Mreža terena…}} traži širinu, dubinu i veličinu ćelije, pa postavlja ravnu mrežu trouglova na mestu gde klikneš ugao. Male ćelije daju glatkije oblikovanje, ali više površi (najviše 200 × 200 ćelija).

## Oblikovanje: podizanje i spuštanje tla

1. Dvaput klikni teren da ga otvoriš.
2. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Oblikuj teren}}. Krug prikazuje četku na tlu ispod pokazivača.
3. Prevuci nagore da podigneš tlo ispod četke, ili nadole da ga spustiš. Sredina se najviše pomera, a tlo se postepeno stišava do nule na ivici kruga, pa humci i udubljenja ispadaju glatki.

Da napraviš humak tačne visine, klikni jednom, pa unesi visinu, na primer `1.5m` (minus spušta), i pritisni {{key:Enter}}. Da promeniš četku, unesi dužinu pre klika: `5m` daje četku poluprečnika 5 m.

Svako oblikovanje je jedan korak opozivanja.

## Na šta treba paziti

- Oblikovanje pomera samo trouglaste površi, pa svaka površ ostaje ravna. Površi nacrtane rukom (pravougaonici, poligoni) nisu teren: alat to kaže.
- Oblikovanje pomera tačke samo gore i dole; ne dodaje tačke. Za finije detalje napravi mrežu sa manjim ćelijama.
- Teren se izvozi kao svaka druga grupa. U IFC-u je to proksi građevinskog elementa, kao i sve ostalo.
