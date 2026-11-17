---
title: Teren: tlo iz izohipsi i oblikovanje
summary: Napravi tlo iz linija izohipsi ili kao mrežu, pa ga podigni i spusti mekanim kistom.
keywords: teren, tlo, pejzaž, topografija, izohipse, linije izohipsi, lokacija, nagib, brdo, humak, pješčanik, smoove, oblikovanje, nivelacija, TIN
from: 407652b3
---

Teren je tlo sastavljeno od trouglova, pa može pratiti bilo koji oblik. To je grupa: dvaput klikni na nju da je uređuješ.

## Iz linija izohipsi

1. Nabavi linije izohipsi na njihovim visinama: nacrtaj ih ili [uvezi plan lokacije](topic:site-plan) i pomjeri svaku izohipsu na njen nivo.
2. Odaberi ih (sve ivice svih izohipsi).
3. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Teren iz izabranih izohipsi}}.

ModelCraft povezuje tačke izohipsi trouglovima (TIN) i ublažava svaku ivicu unutra, da tlo bude glatko sjenčeno. Same linije ostaju; izbriši ili sakrij ih kad ti više ne trebaju. Vrlo guste izohipse se proređuju na 8 000 tačaka.

## Mreža za oblikovanje

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Mreža terena…}} traži širinu, dubinu i veličinu ćelije, pa postavlja ravnu mrežu trouglova tamo gdje klikneš ugao. Manje ćelije daju glađe oblikovanje, ali više površina (najviše 200 × 200 ćelija).

## Oblikovanje: podizanje i spuštanje tla

1. Dvaput klikni teren da ga otvoriš.
2. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Oblikuj teren}}. Krug prikazuje kist na tlu ispod pokazivača.
3. Prevuci gore da podigneš tlo ispod kista, ili dolje da ga spustiš. Sredina se najviše pomjera, a tlo se postepeno smanjuje do nule na rubu kruga, pa humci i udubljenja ispadaju glatki.

Da humak bude tačne visine, klikni jednom, zatim upiši visinu, npr. `1.5m` (minus spušta), i pritisni {{key:Enter}}. Da promijeniš kist, upiši dužinu prije klika: `5m` daje kist poluprečnika 5 m.

Svako oblikovanje je jedan korak poništavanja.

## Šta treba znati

- Oblikovanje pomjera samo trouglaste površine, pa svaka površina ostaje ravna. Površine nacrtane rukom (pravougaonici, poligoni) nisu teren: alat to javlja.
- Oblikovanje pomjera tačke samo gore i dolje; ne dodaje tačke. Za finije detalje napravi mrežu s manjim ćelijama.
- Teren se izvozi kao i svaka druga grupa. U IFC-u je to proxy građevinskog elementa, kao i sve ostalo.
