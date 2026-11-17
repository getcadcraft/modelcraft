---
title: 3D tekst
summary: Dodajte natpise na model kao plohe, ravne ili pune, na bilo kojoj plohi: znak, kućni broj, ime na vratima.
keywords: 3d tekst, tekst, slova, natpisi, znak, signalizacija, kućni broj, oznaka, graviranje, font, riječi
from: 923f5d93
---

{{ui:3D tekst}} u grupi {{ui:Crtanje}} stvara slova od ploha, koje možete obojiti, potisnuti/povući ili urezati u puno tijelo.

## Dodavanje teksta

1. Kliknite {{ui:3D tekst}}.
2. Upišite tekst. Pritisnite {{key:Enter}} u okviru za drugi redak.
3. Postavite {{ui:Visina slova}} (visinu velikog slova, primjerice `30cm` ili `1'`) i {{ui:Dubina}}:
   - `0` daje **ravna slova**: plohe koje leže na onome na što ih postavite, spremne za bojanje ili potisni/povuci.
   - Dubina poput `5cm` daje **puna slova**: zatvorena puna tijela koja možete koristiti s [alatima za puna tijela](topic:solids).
4. Kliknite {{ui:Postavi}}, zatim kliknite mjesto gdje tekst ide.

Na plohi tekst leži na njoj i čita se slijeva nadesno: na zidu stoji uspravno; na tlu ili stolu leži ravno duž crvene osi. Izvan svake plohe leži na tlu.

Tekst je **komponenta** nazvana po sebi, pa se svaka kopija mijenja kad uredite jednu, a prikazuje se na popisu {{ui:Komponente}} da je ponovno postavite.

## Što treba znati

- Slova su vlastiti jednolinijski font ModelCraft, zadebljan: čist i čitljiv, bez izbora kroja pisma za sada.
- Slova, brojke i uobičajeni znakovi (uključujući slova s dijakriticima) se crtaju; znak koji font nema prikazuje se kao mali okvir.
- Za promjenu riječi izbrišite tekst i ponovno ga dodajte.
- Da urežete natpis u plohu, napravite puna slova, postavite ih napola u grupu punog tijela i [oduzmite](topic:solids) ih.
