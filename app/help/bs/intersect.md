---
title: Presijecanje ploha
summary: Nacrtajte linije na mjestima gdje se plohe presijecaju, da možete gurati, brisati ili bojiti dijelove.
keywords: presijeci, presijeci plohe, presijeci s modelom, presijeci s odabirom, rez, otvor, rupa, spajanje, linije gdje se plohe sijeku, bulova
from: 6bc58526
---

Kad jedan oblik prolazi kroz drugi, ModelCraft ne crta liniju na mjestu gdje se njihove plohe sastaju: samo se preklapaju. **Presijecanje** crta te linije, kao ivice, pa se plohe dijele na tom mjestu. Zatim možete gurati/povlačiti, brisati ili bojiti dijelove.

Obje naredbe su u {{ui:Edit}} › {{ui:More}}.

## Presijeci s modelom

Sječe odabrano u odnosu na **svaku plohu na ekranu**.

Na primjer, greda (grupa) prolazi kroz zid (druga grupa), a želite otvor u zidu:

1. Dvaput kliknite zid da ga otvorite i odaberite sve njegove plohe ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Obris grede se crta na obje plohe zida, kao dvije nove plohe. Gurnite jednu od njih kroz zid da napravite otvor, pa zatvorite zid.

## Presijeci s odabirom

Sječe odabrane plohe, grupe i komponente **samo jednu u odnosu na drugu**. Odaberite najmanje dvije.

## Gdje idu linije

Linije se uvijek crtaju u **otvorenom kontekstu**: u modelu kad nijedna grupa nije otvorena, ili u grupi koju uređujete. Grupe i komponente koje nisu otvorene se ne mijenjaju. Zato, da presječete plohe grupe, prvo je otvorite, kao u primjeru iznad.

## Što treba znati

- Plohe koje leže u istoj ravni se ne presijecaju.
- Linije koje zatvaraju petlju na plohi prave novu plohu, kao i nacrtane linije.
- Svako presijecanje je jedan korak poništavanja. Ako ništa ne siječe, ništa se ne mijenja.
- Za zatvorene oblike, [alati za puna tijela](topic:solids) (Union, Subtract) obave cijeli posao u jednom koraku.
