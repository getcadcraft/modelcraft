---
title: Presijecanje ploha
summary: Nacrtajte linije na kojima se plohe međusobno presijecaju kako biste mogli potiskivati, brisati ili bojati dijelove.
keywords: presijeci, presijecanje ploha, presijeci s modelom, rez, otvor, provrt, spoji, linije gdje se plohe sijeku, boolean
from: 6bc58526
---

Kad jedan oblik prolazi kroz drugi, ModelCraft ne crta liniju na kojoj se njihove plohe susreću: samo se preklapaju. **Presijeci** crtaju te linije kao bridove, pa se plohe dijele na tom mjestu. Zatim možete potiskivati i povlačiti, brisati ili bojati dijelove.

Oba naredba nalaze se u {{ui:Uređivanje}} › {{ui:Više}}.

## Presijeci s modelom

Reže odabrano prema **svakoj plohi na zaslonu**.

Na primjer, greda (grupa) prolazi kroz zid (druga grupa), a vi želite otvor u zidu:

1. Dvaput kliknite zid da ga otvorite i odaberite sve njegove plohe ({{key:Ctrl+A}}).
2. {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Presijeci s modelom}}.

Obris grede se crta na obje plohe zida, kao dvije nove plohe. Gurnite jednu od njih kroz zid da napravite otvor, zatim zatvorite zid.

## Presijeci s odabirom

Reže odabrane plohe, grupe i komponente **samo jedne o drugu**. Odaberite najmanje dvije.

## Kamo idu linije

Linije se uvijek crtaju u **otvorenom kontekstu**: u modelu kad nijedna grupa nije otvorena, ili u grupi koju uređujete. Grupe i komponente koje nisu otvorene se ne mijenjaju. Dakle, da biste rezali plohe grupe, najprije je otvorite, kao u primjeru gore.

## Što treba znati

- Plohe koje leže u istoj ravnini se ne presijecaju.
- Linije koje zatvaraju petlju na plohi stvaraju novu plohu, kao i nacrtane linije.
- Svako presijecanje je jedan korak poništavanja. Ako se ništa ne siječe, ništa se ne mijenja.
- Za zatvorene oblike [alati za tijela](topic:solids) (Unija, Oduzimanje) obave cijeli posao u jednom koraku.
