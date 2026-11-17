---
title: 3D tekst
summary: Dodaj natpise modelu kao površi, ravne ili pune, na bilo kojoj površi: tabla, broj kuće, ime na vratima.
keywords: 3d tekst, tekst, slova, natpis, tabla, signalizacija, broj kuće, oznaka, urezivanje, font, reči
from: 923f5d93
---

{{ui:3D tekst}} u grupi {{ui:Crtanje}} pravi natpise od površi, koje možeš bojiti, gurati/vući ili useći u čvrsto telo.

## Dodaj tekst

1. Klikni {{ui:3D tekst}}.
2. Unesi tekst. Pritisni {{key:Enter}} u polju za drugi red.
3. Podesi {{ui:Visinu slova}} (visinu velikog slova, na primer `30cm` ili `1'`) i {{ui:Dubinu}}:
   - `0` daje **ravna slova**: površi koje leže na onome gde ih postavljaš, spremne za bojenje ili guranje/vuču.
   - Dubina, na primer `5cm`, daje **puna slova**: zatvorena čvrsta tela koja možeš koristiti sa [alatima za čvrsta tela](topic:solids).
4. Klikni {{ui:Postavi}}, pa klikni mesto gde ide tekst.

Na površi tekst leži na toj površi i čita se sleva nadesno: na zidu stoji uspravno, a na tlu ili stolu leži ravno duž crvene ose. Kad nije ni na jednoj površi, leži na tlu.

Tekst je **komponenta** nazvana po sebi, pa se svaka kopija menja kad izmeniš jednu, a prikazuje se u listi {{ui:Komponente}} da je ponovo postaviš.

## Na šta treba paziti

- Slova su sopstveni ModelCraft font sa jednom linijom, zadebljan: čist i čitljiv, bez izbora kroja za sada.
- Slova, cifre i uobičajeni znakovi (uključujući slova sa dijakritikom) se crtaju; znak koji font nema prikazuje se kao mali kvadrat.
- Da promeniš reči, obriši tekst i dodaj ga ponovo.
- Da useckaš natpis u površ, napravi puna slova, postavi ih do pola u čvrstu grupu i [oduzmi](topic:solids) ih.
