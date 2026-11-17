---
title: Osvetli model lampama
summary: Postavi lampe, reflektore i svetlosne panele u model da renderovane slike mogu da prikažu prostorije noću ili osvetljene enterijere, sa mekim senkama.
keywords: svetlo, svetla, lampa, lampe, osvetljenje, sijalica, svetlo na plafonu, reflektor, downlight, svetlosni panel, površinsko svetlo, lumeni, svetlost, temperatura boje, toplo, noć, enterijer, renderovanje
from: c8d72cbc
---

Lampe osvetljavaju [renderovane slike](topic:render). Ne menjaju 3D prikaz, gde se svaka lampa prikazuje kao mala oznaka u sopstvenoj boji.

## Dodaj lampu

1. U odeljku {{ui:Svetla}} s desne strane kliknite {{ui:Lampa}}, {{ui:Reflektor}} ili {{ui:Svetlosni panel}}.
2. Kliknite mesto gde treba da bude. Hvatanje radi kao pri crtanju.
   - Na plafonu ili zidu **lampa** visi 25 cm od površine, sa strane sa koje gledate; **svetlosni panel** leži na površini i svetli od nje.
   - **Reflektor** traži dva klika: prvo mesto gde je, zatim šta osvetljava.

Nova lampa je izabrana u {{ui:Svetla}} i spremna za izmenu.

## Izmeni lampu

Kliknite ime lampe u {{ui:Svetla}} ili njenu oznaku u prikazu pomoću {{ui:Izaberi}}. Zatim:

| Podešavanje | Šta radi |
|---|---|
| {{ui:Svetlost (lumeni)}} | Koliko svetla daje. Obična kućna sijalica ima oko 800 lumena; jak plafonski panel 3000 |
| {{ui:Boja}} | {{ui:Toplo}} (kućna sijalica), {{ui:Neutralno}} ili {{ui:Dnevno}}, ili bilo koja boja |
| {{ui:Snop (stepeni)}} | Konus reflektora, od ivice do ivice |
| {{ui:Veličina sijalice}}, {{ui:Širina}}, {{ui:Dubina}} | Veće sijalice i paneli daju mekše senke |
| {{ui:Crveno (x)}}, {{ui:Zeleno (y)}}, {{ui:Visina}} | Gde se nalazi |

Polje pored imena lampe je uključuje i isključuje. {{ui:Obriši svetlo}} je uklanja. Svaka izmena je jedan korak: {{key:Ctrl+Z}} je opoziva. Lampe se čuvaju u datoteci `.modelcraft`.

## Noćne slike

U {{ui:Renderuj sliku…}} označite {{ui:Koristi drugi datum i vreme za ovu sliku}} i izaberite večernji sat. Kad je sunce ispod horizonta, nebo postane tamno i model osvetljavaju samo lampe. Povećajte {{ui:Svetlina}} u dijalogu ako je slika previše tamna, ili dodajte lampe.

:::tip
Za prostoriju posmatranu iznutra stavite kameru unutra (rotirajte pogled i uvećajte, ili [scenu](topic:scenes)), dodajte lampu na plafon i renderujte noću. U režimu {{ui:Brzi}} uglovi dalje od lampe ostaju tamniji nego na fotografiji; [režim visokog kvaliteta](topic:render#high-quality) dozvoljava da svetlo odbija od zidova.
:::
