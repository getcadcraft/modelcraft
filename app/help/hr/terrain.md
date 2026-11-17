---
title: Teren: tlo iz izohipsi i njegovo oblikovanje
summary: Napravite tlo iz linija izohipsi ili kao mrežu, pa ga podižite i spuštajte mekim kistom.
keywords: teren, tlo, krajolik, topografija, izohipse, linije izohipsi, lokacija, nagib, brdo, humak, pješčanik, smoove, oblikovanje, planiranje terena, TIN
from: 407652b3
---

Teren je tlo sastavljeno od trokuta, pa može slijediti bilo koji oblik. To je grupa: dvaput kliknite na nju da je uredite.

## Iz linija izohipsi

1. Nabavite linije izohipsi na njihovim visinama: nacrtajte ih ili [uvezite nacrt lokacije](topic:site-plan) i pomaknite svaku izohipsu na njezinu razinu.
2. Odaberite ih (sve bridove svih izohipsi).
3. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Teren iz odabranih izohipsi}}.

ModelCraft povezuje točke izohipsi trokutima (TIN) i zagladi svaki brid unutar njih, tako da tlo bude glatko sjenčano. Same linije ostaju; izbrišite ih ili sakrijte kad vam više nisu potrebne. Vrlo guste izohipse prorijede se na 8 000 točaka.

## Mreža za oblikovanje

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Mreža terena…}} traži širinu, dubinu i veličinu ćelije, zatim postavlja ravnu mrežu trokuta na mjesto gdje kliknete kut. Manje ćelije oblikuju se glađe, ali stvaraju više ploha (najviše 200 × 200 ćelija).

## Oblikovanje: podizanje i spuštanje tla

1. Dvaput kliknite teren da ga otvorite.
2. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Kipari teren}}. Krug prikazuje kist na tlu ispod pokazivača.
3. Povucite prema gore da podignete tlo ispod kista ili prema dolje da ga spustite. Središte se najviše pomiče, a tlo se pri rubu kruga stišava do nule, pa humci i udubine ispadaju glatki.

Da napravite humak točne visine, kliknite jednom, zatim upišite visinu, primjerice `1.5m` (minus ga spušta), i pritisnite {{key:Enter}}. Da promijenite kist, upišite duljinu prije klika: `5m` daje kist polumjera 5 m.

Svako oblikovanje jedan je korak poništavanja.

## Što treba znati

- Oblikovanje pomiče samo trokutaste plohe, pa svaka ploha ostaje ravna. Plohe nacrtane rukom (pravokutnici, poligoni) nisu teren: alat to javlja.
- Oblikovanje pomiče točke samo gore i dolje; ne dodaje točke. Za finiji detalj napravite mrežu s manjim ćelijama.
- Teren se izvozi kao i svaka druga grupa. U IFC-u je to building element proxy, kao i sve ostalo.
