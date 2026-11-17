---
title: Alegerea programului care desenează imaginea
summary: Alegerea Motor din caseta Randare: motoarele noastre, alte programe din CadCraft Studio și ce face web-ul în schimb.
keywords: randare, motor, program de randare, plug-in, plugin, studio, program extern, desenat de, coadă, motor de supliment
from: be4b056a
---

{{ui:Randare imagine…}} are o alegere **Motor** deasupra Mod. Cele două motoare ale noastre sunt mereu acolo și funcționează peste tot; suplimentele pot adăuga altele, iar în CadCraft Studio lista mai conține și programele care preiau scena.

| Motor | Ce face | Unde |
|---|---|---|
| Încorporat: Rapid | Imaginea rapidă statică: lumină de zi, umbre moi, aspect de sticlă și metal, în câteva secunde | Browserul și Studio |
| Încorporat: Trasare de traiectorii | Lumina care sare între suprafețe, pe placa grafică sau pe procesor, coada de randare și celelalte calculatoare din rețea | Browserul și Studio |
| Motorul unui supliment | Desenează și returnează imaginea: vedeți [Desenarea imaginii cu un alt program](topic:render-other-program) | Browserul (un motor scris în JavaScript) sau Studio (un motor care rulează un program) |
| Un program care preia scena | Studio pune scena în dosarul lui și o ține la zi | Studio |
| Deschide în … | Salvează scena și o deschide într-un program; nu se întoarce nimic: vedeți [Deschiderea scenei într-un alt program](topic:render-open-in) | Web-ul salvează fișierul |

## Cum se comportă alegerea

- Alegerea Rapid sau Trasare de traiectorii schimbă și Mod, și invers. Nimic altceva din casetă nu se schimbă pentru cei care nu folosesc niciodată alt motor.
- Un motor care nu este disponibil rămâne în listă, cu motivul („nu a fost găsit”, „are nevoie de o versiune mai nouă”); nu îl puteți alege. În browser, un motor care rulează doar în Studio arată „salvează un fișier”: {{ui:Randare imagine…}} salvează atunci scena și setările ei într-un fișier pe care îl duceți la acel program.
- Alegerea se salvează împreună cu setările de randare ale fișierului, iar motorul ales ultima dată este motorul de pornire pentru fișierele care nu au o alegere proprie.
- O imagine dintr-un alt program spune care program a desenat-o și ce versiune are, în casetă și în coada de randare. Promisiunile paginii [Randare](topic:render) acoperă doar **motoarele noastre**: un alt program luminează, își mapează tonurile și eșantionează în felul lui, deci două imagini ale aceleiași scene sunt asemănătoare ca unghi de cameră, soare, lămpi și expunere, dar nu pixel cu pixel.

## Ce primește fiecare motor

Scena merge către alt program ca **pachet**: modelul ca fișier USD (același fișier pe care îl scrie [Salvare ca USD](topic:usd)) și un fișier de setări care conține ce nu se poate avea încredere să fie citit de un importator USD: valorile exacte ale materialelor, lămpile care sunt pornite, cu puterea și profilele de lumină, soarele, cerul, expunerea și camera așa cum le-ar desena caseta. Nimic nu se încarcă nicăieri.

## Coada de randare

O imagine sau o animație pentru alt program poate aștepta în [coada de randare](topic:render#the-render-queue), ca și cele ale noastre; jobul ei reține motorul pentru care este. O animație merge către program dintr-o singură rulare.
