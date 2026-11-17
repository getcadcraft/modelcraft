---
title: Taste și acțiuni cu mouse-ul
summary: Fiecare scurtătură de tastatură, acțiune de mouse, gest de touchpad și gest tactil din ModelCraft, grupate după ce fac.
keywords: tastatură, scurtături, taste, taste rapide, mouse, touchpad, tactil, gesturi, fișă rapidă, ctrl, comandă, taste cu săgeți
from: e2348957
---

Acestea sunt tastele stilului push-pull, cu care pornește ModelCraft. Pentru celălalt stil, vezi [Tastele Modeler](topic:keyboard#modeler-keys) mai jos și [Setările ModelCraft](topic:settings).

Scurtăturile funcționează când vizualizarea 3D sau un buton din bara de instrumente are focusul. Dacă tocmai ați scris într-un câmp al unui panou sau ați schimbat o listă din {{ui:Stil}}, faceți clic întâi în vizualizarea 3D, altfel tastele ajung în acel câmp. Vezi [Taste, mouse-uri și touchpad-uri](common:keys) pentru cum se scriu tastele pe fiecare calculator.

## Instrumente

| Tastă | Instrument |
|---|---|
| {{key:Space}} | {{ui:Selectare}} |
| {{key:L}} | {{ui:Linie}} |
| {{key:R}} | {{ui:Dreptunghi}} |
| {{key:C}} | {{ui:Cerc}} |
| {{key:N}} | {{ui:Poligon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Decalare}} |
| {{key:B}} | {{ui:Vopsire}} |
| {{key:P}} | {{ui:Împinge/Trage}} |
| {{key:M}} | {{ui:Mutare}} |
| {{key:Q}} | {{ui:Rotire}} |
| {{key:S}} | {{ui:Scalare}} |
| {{key:E}} | {{ui:Ștergere}} |
| {{key:T}} | Măsurătorul {{ui:Ruletă}} |
| {{key:D}} | {{ui:Cotare}} |
| {{key:O}} | {{ui:Orbitare}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Literele instrumentelor funcționează doar fără taste de modificare: {{key:Shift}} cu o literă nu face nimic, cu excepția celor două de mai jos.

## Model și fișier

| Tastă | Face |
|---|---|
| {{key:G}} | Creează componentă din selecție |
| {{key:Shift+G}} | Creează grup din selecție |
| {{key:Shift+Z}} | Zoom la extinderi (tot modelul) |
| {{key:Mod+Z}} | Anulare |
| {{key:Mod+Y}} sau {{key:Mod+Shift+Z}} | Refacere |
| {{key:Mod+S}} | Salvare (descarcă fișierul `.modelcraft`) |
| {{key:Mod+O}} | Deschide un model |
| {{key:Mod+A}} | Selectează tot (în grupul deschis, dacă este unul deschis) |
| {{key:Mod+C}} | Copiază selecția |
| {{key:Mod+X}} | Decupează selecția |
| {{key:Mod+V}} | Lipește: copia urmează indicatorul, faceți clic unde trebuie |
| {{key:Mod+Shift+V}} | Lipire în aceeași poziție (de unde a fost copiată) |
| {{key:Mod+D}} | Duplicare: o copie se mută cu indicatorul, faceți clic ca s-o puneți jos |
| {{key:Delete}} sau {{key:Backspace}} | Șterge selecția |
| {{key:PageDown}} / {{key:PageUp}} | Scena următoare / anterioară |
| {{key:F1}} | Deschide sau închide acest ajutor (și {{ui:Ajutor}} din bara aplicației; {{key:Esc}} în ajutor îl închide) |
| {{key:Ctrl+Shift+F}} | Mod ecran: ecran complet, apoi bare ascunse, apoi normal (și Ctrl pe Mac) |

## Esc

{{key:Esc}} face un pas înapoi de fiecare dată când îl apăsați:

1. Anulează ce face instrumentul în acel moment (o linie în curs de desenare, o împingere sau o tragere, o mutare). Totul revine.
2. Trece la {{ui:Selectare}}.
3. Golește selecția.
4. Închide grupul pe care îl editați.

De asemenea, oprește scenele care rulează. În caseta de valori, {{key:Esc}} șterge ce ați scris și revine la vizualizare.

## Cât lucrează un instrument

| Tastă | Face |
|---|---|
| O cifră sau unul dintre `. , - ' " [ < * /` | Începe scrierea în caseta de valori |
| {{key:Enter}} | Aplică ce ați scris în caseta de valori |
| {{key:Right}} | Blochează pe axa roșie (apăsați din nou ca să deblocați) |
| {{key:Left}} | Blochează pe axa verde |
| {{key:Up}} | Blochează pe axa albastră |
| {{key:Down}} | Blochează paralel cu ultima muchie peste care ați trecut înainte de primul clic |
| Țineți apăsat {{key:Shift}} | Păstrează direcția pe care sunteți agățat, cât timp este apăsat |
| {{key:Ctrl}}, {{key:Mod}} sau {{key:Alt}} (la {{ui:Mutare}}) | Comută între mutare și copiere |

Blocările cu tastele săgeți funcționează în {{ui:Linie}}, {{ui:Dreptunghi}}, {{ui:Cerc}}, {{ui:Poligon}}, {{ui:Mutare}}, {{ui:Scalare}} și {{ui:Ruletă}} (când măsurați de la un punct), după primul clic. {{ui:Împinge/Trage}} merge întotdeauna de-a lungul direcției feței și nu are blocări. În {{ui:Rotire}}, tastele săgeți afișează un mesaj „Blocat” după primul clic, dar nu schimbă rotirea.

## Tastele săgeți în alte momente

Când niciun instrument nu lucrează, tastele săgeți mută camera:

| Tastă | Face |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbitare |
| {{key:Shift}} cu o săgeată | Pan |

## Mouse

| Acțiune | Face |
|---|---|
| Clic | Folosește instrumentul curent |
| Apăsare, trăgere, eliberare | La fel ca două clicuri (pentru instrumentele de desen); o selecție prin casetă (pentru {{ui:Selectare}}); șterge pe drum (pentru {{ui:Ștergere}}) |
| Dublu clic | {{ui:Selectare}}: față cu muchiile ei, muchie cu fețele ei, deschide un grup; spațiul gol închide grupul. {{ui:Împinge/Trage}}: repetă ultima distanță |
| Triplu clic | {{ui:Selectare}}: tot ce este conectat |
| {{key:Shift}} + clic | {{ui:Selectare}}: intră și iese din selecție |
| {{key:Mod}} + clic | {{ui:Selectare}}: adaugă la selecție |
| {{key:Shift}} + {{key:Mod}} + clic | {{ui:Selectare}}: scoate din selecție |
| Trăgere cu butonul din mijloc | Orbitare, cu orice instrument |
| {{key:Shift}} + trăgere cu butonul din mijloc | Pan, cu orice instrument |
| Trăgere cu butonul din dreapta | Pan, cu orice instrument |
| Rotița | Zoom spre indicator |

Nu există meniu la clic dreapta.

## Touchpad

Ce face un gest cu două degete depinde de {{ui:Setări}} › {{ui:ModelCraft}} › Derulare:

| Gest | Touchpad (sau dedus) | Rotița mouse-ului |
|---|---|---|
| Glisare cu două degete | Orbitare | Zoom spre indicator |
| {{key:Shift}} + glisare cu două degete | Pan | Zoom |
| Ciupire | Zoom spre indicator | Zoom spre indicator |
| Apăsare cu două degete și trăgere (clic secundar ținut) | Pan | Pan |

Vezi [Orbitare, pan și zoom](topic:orbit-pan-zoom#on-a-trackpad) și [Setările ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Tastele Modeler

Cu {{ui:Setări}} › {{ui:ModelCraft}} › Comenzi setate pe stilul Modeler:

| Tastă | Face |
|---|---|
| {{key:W}} sau {{key:Space}} | {{ui:Selectare}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Linie}} / {{ui:Dreptunghi}} / {{ui:Cerc}} / {{ui:Poligon}} |
| {{key:E}} | {{ui:Împinge/Trage}} (extrudare) |
| {{key:T}} | Măsurătorul {{ui:Ruletă}} |
| {{key:D}} | {{ui:Cotare}} |
| {{key:G}} | Mută imediat selecția, de la indicator |
| {{key:R}} | Rotește selecția în jurul mijlocului ei (axa albastră) |
| {{key:S}} | Scalează selecția față de mijlocul ei |
| {{key:X}} / {{key:Y}} / {{key:Z}} cât mutați sau rotiți | Blochează axa roșie / verde / albastră (din nou ca să deblocați) |
| Clic sau {{key:Enter}} | Pune jos |
| {{key:Esc}} sau clic dreapta | Pune înapoi |
| {{key:Shift+D}} | Duplică și mută copia |
| {{key:X}} sau {{key:Delete}} | Șterge selecția |
| {{key:A}} / {{key:Alt+A}} | Selectează tot / nu selecta nimic |
| {{key:Tab}} | Deschide grupul sau componenta selectată; din nou ca s-o închidă |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Creare grup / creare componentă |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Vedere din față / din dreapta / de sus ({{key:Mod}} pentru spate / stânga / de jos) |
| Numpad {{key:5}} | Perspectivă activată sau dezactivată |
| Numpad {{key:.}} | Zoom la selecție |
| {{key:Home}} sau {{key:Shift+C}} | Zoom la extinderi |
| {{key:Shift+Tab}} | Agățare activată sau dezactivată |
| Trăgere cu butonul din mijloc / cu {{key:Shift}} / cu {{key:Mod}} | Orbitare / pan / zoom |
| {{key:Alt}} + trăgere / {{key:Alt+Shift}} + trăgere | Orbitare / pan (fără buton din mijloc) |

Copierea, lipirea, anularea, salvarea și deschiderea păstrează tastele de mai sus. Valorile scrise, caseta de valori și {{ui:Împinge/Trage}} funcționează la fel în ambele stiluri.

## Ecran tactil

| Gest | Face |
|---|---|
| Atingere | Un clic cu instrumentul curent |
| Atingere dublă | Un dublu clic |
| Apăsare, trăgere, ridicare | La fel ca apăsare, trăgere, eliberare cu mouse-ul |
| Două degete: ciupire | Zoom |
| Două degete: mișcate împreună | Pan (în {{ui:Setări}} › {{ui:ModelCraft}} › Ecran tactil poate deveni Orbitare) |
| Trei degete: mișcate împreună | Orbitare (Pan când două degete orbitează) |
| Ținerea unui deget nemișcat | Încheie instrumentul, ca {{key:Enter}}; când nu se întâmplă nimic, trageți ca să orbitați |
| Un al doilea deget în timpul unei acțiuni cu un deget | Anulează acea acțiune |
| Instrumentul {{ui:Orbitare}}, apoi trăgere cu un deget | Orbitare |

Ca să scrieți o valoare pe ecranul tactil, atingeți caseta de valori de jos, scrieți și apăsați tasta Enter (sau Go) de la tastatură.

## Unde este Mutare

{{ui:Mutare}} se află în instrumentul {{ui:Mutare}}, tasta {{key:M}}: alegeți ce mutați, faceți clic pe un punct de bază, apoi pe un al doilea punct sau scrieți o distanță. Vezi [Mutare, copiere și matrice](topic:move-copy).
