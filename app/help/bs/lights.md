---
title: Osvijetli model lampama
summary: Postavi lampe, reflektore i svjetlosne panele u model, da renderovane slike mogu prikazati prostorije noću ili osvijetljene enterijere, sa mekim sjenama.
keywords: svjetlo, svjetla, lampa, lampe, osvjetljenje, sijalica, plafonsko svjetlo, reflektor, downlight, svjetlosni panel, površinsko svjetlo, lumeni, svjetlina, temperatura boje, toplo, noć, enterijer, render
from: c8d72cbc
---

Lampe osvjetljavaju [renderovane slike](topic:render). Ne mijenjaju 3D pogled, gdje se svaka lampa prikazuje kao mala oznaka u svojoj boji.

## Dodaj lampu

1. U odjeljku {{ui:Svjetla}} na desnoj strani klikni {{ui:Lampa}}, {{ui:Reflektor}} ili {{ui:Svjetlosni panel}}.
2. Klikni mjesto na kojem ide. Hvatanje radi kao pri crtanju.
   - Na plafonu ili zidu **lampa** visi 25 cm od površine, sa strane s koje gledaš; **svjetlosni panel** leži na površini i svijetli od nje.
   - **Reflektor** traži dva klika: prvo gdje stoji, zatim šta osvjetljava.

Nova lampa je odabrana u odjeljku {{ui:Svjetla}}, spremna za izmjenu.

## Promijeni lampu

Klikni naziv lampe u odjeljku {{ui:Svjetla}}, ili njenu oznaku u pogledu pomoću {{ui:Odaberi}}. Zatim:

| Podešavanje | Šta radi |
|---|---|
| {{ui:Svjetlina (lumeni)}} | Koliko svjetla daje. Obična kućna sijalica ima oko 800 lumena; jak plafonski panel 3000 |
| {{ui:Boja}} | {{ui:Toplo}} (kućna sijalica), {{ui:Neutralno}} ili {{ui:Dnevno}}, ili bilo koja boja |
| {{ui:Snop (stepeni)}} | Konus reflektora, od ivice do ivice |
| {{ui:Veličina sijalice}}, {{ui:Širina}}, {{ui:Dubina}} | Veće sijalice i paneli daju mekše sjene |
| {{ui:Crvena (x)}}, {{ui:Zelena (y)}}, {{ui:Visina}} | Gdje se nalazi |

Kvačica pored naziva lampe uključuje ili isključuje lampu. {{ui:Obriši svjetlo}} uklanja svjetlo. Svaka izmjena je jedan korak: {{key:Ctrl+Z}} je poništava. Lampe se čuvaju u datoteci `.modelcraft`.

## Slike noću

U {{ui:Renderuj sliku…}} uključi {{ui:Koristi drugi datum i vrijeme za ovu sliku}} i odaberi večernji sat. Kad je sunce zašlo, nebo postaje tamno i model osvjetljavaju samo lampe. Ako je slika pretamna, povećaj {{ui:Svjetlina}} u dijalogu ili dodaj lampe.

:::tip
Za prostoriju viđenu iznutra, stavi kameru unutar prostorije (rotiraj i zumiraj, ili [scenu](topic:scenes)), dodaj lampu na plafon i renderuj noću. U režimu {{ui:Brzo}} uglovi dalje od lampe ostaju tamniji nego na fotografiji; [režim visokog kvaliteta](topic:render#high-quality) dozvoljava da se svjetlo odbija od zidova.
:::
