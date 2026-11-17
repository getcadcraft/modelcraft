---
title: Osvijetlite model svjetiljkama
summary: Stavite svjetiljke, reflektore i svjetlosne ploče u model da renderirane slike mogu prikazati sobe noću ili osvijetljene interijere, s mekim sjenama.
keywords: svjetlo, svjetla, svjetiljka, svjetiljke, osvjetljenje, žarulja, stropna svjetiljka, reflektor, ugradbena svjetiljka, svjetlosna ploča, površinsko svjetlo, lumeni, svjetlina, temperatura boje, toplo, noć, interijer, render
from: c8d72cbc
---

Svjetiljke osvjetljavaju [renderirane slike](topic:render). Ne mijenjaju 3D prikaz, gdje se svaka svjetiljka prikazuje kao mala oznaka u vlastitoj boji.

## Dodavanje svjetiljke

1. U odjeljku {{ui:Svjetla}} s desne strane kliknite {{ui:Svjetiljka}}, {{ui:Reflektor}} ili {{ui:Svjetlosna ploča}}.
2. Kliknite mjesto gdje ide. Hvatanje radi kao pri crtanju.
   - Na stropu ili zidu **svjetiljka** visi 25 cm od plohe, na strani s koje gledate; **svjetlosna ploča** leži na plohi i svijetli od nje.
   - **Reflektor** zahtijeva dva klika: prvo mjesto na kojem stoji, zatim što osvjetljava.

Nova svjetiljka odabrana je u {{ui:Svjetla}}, spremna za promjenu.

## Promjena svjetiljke

Kliknite naziv svjetiljke u {{ui:Svjetla}} ili njezinu oznaku u prikazu uz {{ui:Odaberi}}. Zatim:

| Postavka | Što radi |
|---|---|
| {{ui:Svjetlina (lumeni)}} | Koliko svjetla daje. Obična kućna žarulja ima oko 800 lumena; svijetla stropna ploča 3000 |
| {{ui:Boja}} | {{ui:Toplo}} (kućna žarulja), {{ui:Neutralno}} ili {{ui:Dnevno svjetlo}}, ili bilo koja boja |
| {{ui:Snop (stupnjevi)}} | Stožac reflektora, od ruba do ruba |
| {{ui:Veličina žarulje}}, {{ui:Širina}}, {{ui:Dubina}} | Veće žarulje i ploče daju mekše sjene |
| {{ui:Crvena (x)}}, {{ui:Zelena (y)}}, {{ui:Visina}} | Gdje se nalazi |

Kvačica pored naziva svjetiljke uključuje ili isključuje je. {{ui:Izbriši svjetlo}} je uklanja. Svaka promjena je jedan korak: {{key:Ctrl+Z}} je poništava. Svjetiljke se spremaju u datoteku `.modelcraft`.

## Slike noću

U {{ui:Renderiraj sliku…}} označite {{ui:Koristi drugi datum i vrijeme za ovu sliku}} i odaberite večernji sat. Kad sunce zađe, nebo potamni i model osvjetljavaju samo svjetiljke. Povećajte {{ui:Svjetlina}} u dijaloškom okviru ako je slika pretamna, ili dodajte svjetiljke.

:::tip
Za sobu viđenu iznutra stavite kameru unutra (orbitirajte i približite, ili [scenu](topic:scenes)), dodajte svjetiljku na strop i renderirajte noću. U načinu {{ui:Brzo}} kutovi dalje od svjetiljke ostaju tamniji nego na fotografiji; [način visoke kvalitete](topic:render#high-quality) dopušta da se svjetlo odbija od zidova.
:::
