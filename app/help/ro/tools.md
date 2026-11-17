---
title: Lista uneltelor
summary: Fiecare unealtă ModelCraft cu tasta ei, ce face fiecare clic și ce puteți scrie în caseta de valori cât timp lucrează.
keywords: unelte, bară de instrumente, comenzi, listă, linie, dreptunghi, cerc, poligon, decalare, arc, curbă, spline, urmărește-mă, baleiere, arc din 2 puncte, arc din centru, selectare, împingere tragere, mutare, rotire, scalare, gumă, ruletă, cotare, orbitare, pan, zoom, plasare componentă
from: e08a274f
---

Bara de stare arată mereu ce așteaptă unealta următor. {{key:Esc}} anulează ce face în acel moment o unealtă.

## Unelte de desenare

| Unealtă | Tastă | Clicuri | Scrieți în caseta de valori |
|---|---|---|---|
| {{ui:Linie}} | {{key:L}} | Început, apoi fiecare punct următor. Se oprește când se închide o față sau la {{key:Esc}} | O lungime spre cursor; `[x,y,z]` un punct; `<dx,dy,dz>` o decalare ({{ui:Lungime}}) |
| {{ui:Dreptunghi}} | {{key:R}} | Primul colț (sol sau o față), colțul opus | Lățimea și adâncimea: `4m,3m` ({{ui:Cote}}) |
| {{ui:Cerc}} | {{key:C}} | Centrul (sol sau o față), un punct de pe margine | Înainte de primul clic: laturile, `24s` sau `24` ({{ui:Laturi}}). După: raza ({{ui:Rază}}) |
| {{ui:Poligon}} | {{key:N}} | Centrul, un colț | La fel ca la Cerc; începe cu 6 laturi |
| {{ui:Arc}} | {{key:A}} | Început, sfârșit, apoi curbura | Lungimea coardei după început ({{ui:Lungime}}); curbura după sfârșit ({{ui:Curbură}}); `12s` pentru segmente |
| {{ui:Raportor}} | — | Centrul, punctul de 0°, apoi unghiul | Unghiul în grade ({{ui:Unghi}}) |
| {{ui:Urmărește-mă}} | — | Selectați un traseu, apoi faceți clic pe față (sau faceți clic pe față, apoi pe o muchie a traseului) | — |
| {{ui:Vopsire}} | {{key:B}} | O față, un grup sau o componentă | — ({{key:Ctrl}} conectat, {{key:Shift}} toată culoarea aceasta, {{key:Alt}} preia o culoare) |
| {{ui:Decalare}} | {{key:F}} | O față (sau selectați întâi o față sau muchii), apoi latura și distanța | Distanța ({{ui:Distanță}}); spre interiorul feței înseamnă înăuntru |
| {{ui:Curbă}} | — | Punctele prin care trece curba; {{key:Enter}} sau un dublu clic încheie | O lungime de-a lungul cursorului, `[x,y,z]` sau `<dx,dy,dz>` pentru următorul punct |
| {{ui:Arc din centru}} | — | Centrul, începutul, apoi sfârșitul | Raza după centru; unghiul în grade după început; `12s` pentru segmente |

## Unelte de editare

| Unealtă | Tastă | Clicuri | Scrieți în caseta de valori |
|---|---|---|---|
| {{ui:Selectare}} | {{key:Space}} | Clic, dublu clic, triplu clic, trageți o casetă. Vezi [Selectarea obiectelor](topic:select) | Cu o cotă sau o muchie selectată: o lungime nouă, care redimensionează modelul |
| {{ui:Împinge/Trage}} | {{key:P}} | Fața, apoi distanța. Dublu clic pe o față repetă ultima distanță | O distanță; negativ merge în sens invers ({{ui:Distanță}}) |
| {{ui:Mutare}} | {{key:M}} | Dintr-un punct, într-un punct. Țineți {{key:Ctrl}} sau {{key:Alt}} pentru a copia | O distanță spre cursor, `<dx,dy,dz>` sau `[x,y,z]` ({{ui:Distanță}}). După o copiere: `3x` sau `/3` |
| {{ui:Rotire}} | {{key:Q}} | Centrul (pe o față, pentru a o întoarce în planul ei), direcția de început, direcția de sfârșit | Unghiul în grade ({{ui:Unghi}}) |
| {{ui:Scalare}} | {{key:S}} | Punctul care rămâne, un punct de referință, noua dimensiune | Un factor: `2`, `0.5` ({{ui:Scalare}}) |
| {{ui:Ștergere}} | {{key:E}} | Clic sau trageți peste muchii, grupuri, ghiduri și cote | nimic |
| {{ui:Ruletă}} | {{key:T}} | Dintr-o muchie: o linie-ghid paralelă. Dintr-un punct: măsoară și lasă un punct-ghid | Decalarea ({{ui:Decalare}}) sau distanța ({{ui:Lungime}}) |
| {{ui:Cotare}} | {{key:D}} | Două colțuri (sau o muchie), apoi unde merge linia de cotă. Vezi [Cotare și redimensionare](topic:dimensions) | Decalarea ({{ui:Decalare}}). Imediat după: o lungime nouă, care redimensionează modelul |

{{ui:Mutare}}, {{ui:Rotire}} și {{ui:Scalare}} lucrează pe selecție. Dacă nu este selectat nimic, iau întâi ce faceți clic (o față aduce muchiile ei).

## Unelte de cameră

| Unealtă | Tastă | Trageți pentru a |
|---|---|---|
| {{ui:Orbitare}} | {{key:O}} | Întoarce în jurul părții din model aflate sub cursor ({{key:Shift}} face pan) |
| {{ui:Pan}} | {{key:H}} | Glisa vederea |
| {{ui:Zoom}} | {{key:Z}} | Face zoom: în sus apropie, în jos depărtează |
| {{ui:Extinderi}} | {{key:Shift+Z}} | (un buton, nu o unealtă) Încadrează tot modelul |

Cu mouse-ul rareori aveți nevoie de ele: trageți cu butonul din mijloc pentru orbitare, trageți cu dreapta pentru pan, iar rotița face zoom cu orice unealtă. Vezi [Orbitare, pan și zoom](topic:orbit-pan-zoom).

## Organizare

| Buton | Tastă | Face |
|---|---|---|
| {{ui:Componentă}} | {{key:G}} | Transformă selecția într-o componentă |
| {{ui:Grup}} | {{key:Shift+G}} | Transformă selecția într-un grup |
| {{ui:Descompunere}} | nicio | Transformă grupurile și componentele selectate la loc în geometrie liberă |

## Plasarea unei componente

Nu este pe bara de instrumente: faceți clic pe {{ui:Plasare}} lângă o componentă din panoul {{ui:Componente}}. Faceți un clic unde trebuie să fie originea componentei; apoi unealta revine la {{ui:Selectare}}.
