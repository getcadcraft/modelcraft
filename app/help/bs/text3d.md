---
title: 3D tekst
summary: Dodaj natpis na model kao površine, ravne ili pune, koje stoje na bilo kojoj površini: znak, kućni broj, ime na vratima.
keywords: 3d tekst, tekst, slova, natpis, znak, oznake na znakovima, kućni broj, etiketa, graviranje, font, riječi
from: 923f5d93
---

{{ui:3D tekst}} u grupi {{ui:Crtanje}} pravi natpis od površina, koje možeš bojiti, gurati/povlačiti ili urezati u pun model.

## Dodaj tekst

1. Klikni {{ui:3D tekst}}.
2. Upiši tekst. Pritisni {{key:Enter}} u polju za drugi red.
3. Postavi {{ui:Visina slova}} (visinu velikog slova, npr. `30cm` ili `1'`) i {{ui:Dubina}}:
   - `0` daje **ravna slova**: površine koje leže na onome na šta ih postaviš, spremne za bojenje ili gurni/povuci.
   - Dubina poput `5cm` daje **pune slova**, zatvorena tijela koja možeš koristiti s [alatima za tijela](topic:solids).
4. Klikni {{ui:Postavi}}, pa klikni gdje tekst treba da ide.

Na površini tekst leži na njoj i čita se s lijeva na desno: na zidu stoji uspravno; na tlu ili stolu leži ravno duž crvene. Ako nije ni na jednoj površini, leži na tlu.

Tekst je **komponenta** nazvana po sebi, pa se svaka kopija mijenja ako izmijeniš jednu, i prikazuje se na listi {{ui:Komponente}} da je ponovo postaviš.

## Šta treba znati

- Slova su ModelCraftov vlastiti jednolinijski font, zadebljan: čist i čitljiv, bez izbora kroja pisma za sada.
- Crtaju se slova, cifre i uobičajeni znakovi (uključujući slova s dijakritikom); znak koji font nema prikazuje se kao mali kvadrat.
- Da promijeniš riječi, izbriši tekst i dodaj ga ponovo.
- Da urežeš natpis u površinu, napravi pune slova, postavi ih do pola u punu grupu i [oduzmi](topic:solids) ih.
