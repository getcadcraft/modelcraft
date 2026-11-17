---
title: Presecanje površi
summary: Nacrtajte linije gde se površi seku, pa možete da guražite, brišete ili bojite delove.
keywords: presek, presecanje površi, presek sa modelom, presek sa izborom, sečenje, otvor, rupa, spajanje, linije gde se površi seku, bulova operacija
from: 6bc58526
---

Kad jedan oblik prolazi kroz drugi, ModelCraft ne crta liniju gde se njihove površi spajaju: samo se preklapaju. **Presek** crta te linije, kao ivice, pa se površi tamo dele. Zatim možete da guražite, brišete ili bojite delove.

Obe komande su u {{ui:Uređivanje}} › {{ui:Više}}.

## Presek sa modelom

Seče izabrano protiv **svake površi na ekranu**.

Na primer, greda (grupa) prolazi kroz zid (druga grupa), a želite otvor u zidu:

1. Dvaput kliknite na zid da ga otvorite, pa izaberite sve njegove površi ({{key:Ctrl+A}}).
2. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Presek sa modelom}}.

Obris grede se crta na obe površi zida, kao dve nove površi. Gurnite jednu od njih kroz zid da napravite otvor, pa zatvorite zid.

## Presek sa izborom

Seče izabrane površi, grupe i komponente **samo jednu o drugu**. Izaberite najmanje dve.

## Gde idu linije

Linije se uvek crtaju u **otvorenom kontekstu**: u modelu kad nijedna grupa nije otvorena, ili u grupi koju uređujete. Grupe i komponente koje nisu otvorene se ne menjaju. Zato, da biste presekli površi grupe, prvo je otvorite, kao u primeru gore.

## Šta treba znati

- Površi u istoj ravni se ne seku.
- Linije koje zatvaraju petlju na površi prave novu površ, kao i nacrtane linije.
- Svaki presek je jedan korak za {{ui:Opozovi}}. Ako ništa ne seče, ništa se ne menja.
- Za zatvorene oblike, [alati za čvrsta tela](topic:solids) (Unija, Oduzimanje) obavljaju ceo posao u jednom koraku.
