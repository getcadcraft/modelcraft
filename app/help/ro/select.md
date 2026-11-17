---
title: Selectarea obiectelor
summary: Clic, dublu clic și triplu clic, trageți o fereastră sau o casetă de intersectare, adăugați și eliminați cu tastele modificatoare și ștergeți.
keywords: selectare, selecție, fereastră, intersectare, adăugare la selecție, deselectare, selectare totală, triplu clic, dublu clic, ștergere, eliminare
from: d56d1f89
---

{{ui:Selectare}} ({{key:Space}}) este instrumentul cu care pornește ModelCraft și la care vă readuce {{key:Esc}}. Obiectele selectate devin albastre, iar {{ui:Informații entitate}} din dreapta spune ce sunt.

## Clic

| Faceți asta | Selectează |
|---|---|
| Clic pe o față sau pe o muchie | Fața sau muchia respectivă |
| Clic pe un grup sau pe o componentă | Întregul grup sau întreaga componentă |
| Dublu clic pe o față | Fața și muchiile ei |
| Dublu clic pe o muchie | Muchia și fețele de pe ambele părți |
| Dublu clic pe un grup sau pe o componentă | O deschide pentru editare (vezi [Grupuri și componente](topic:groups-components)) |
| Triplu clic pe o față sau pe o muchie | Tot ce este conectat la ea: întregul obiect |
| Clic pe spațiul gol | Nimic (golește selecția) |
| Dublu clic pe spațiul gol în timp ce editați un grup | Închide grupul |

Muchiile se ating mai ușor decât fețele: când indicatorul se află la câțiva pixeli de o muchie, clicul ia muchia.

## Trageți o casetă

- **De la stânga la dreapta** trasează o casetă plină: o selecție de tip **fereastră**. Sunt selectate doar obiectele aflate în întregime în interiorul ei.
- **De la dreapta la stânga** trasează o casetă cu linie întreruptă: o selecție de tip **intersectare**. Este selectat orice atinge caseta, iar o față este selectată atunci când caseta se află în întregime în interiorul ei.

Un grup sau o componentă contează ca un singur obiect: o fereastră trebuie să îl cuprindă în întregime, iar o intersectare trebuie doar să îl atingă.

## Adăugare și eliminare

Țineți apăsată o tastă în timp ce faceți clic sau trageți:

| Tastă | Efect |
|---|---|
| {{key:Shift}} | Comută: adaugă ce nu este selectat, elimină ce este |
| {{key:Mod}} | Adaugă |
| {{key:Shift}} și {{key:Mod}} împreună | Elimină |

Ca să selectați tot din model (sau tot din grupul pe care îl editați), apăsați {{key:Mod+A}}.

## Golirea selecției

Apăsați {{key:Esc}} (cu {{ui:Selectare}} ca instrument) sau faceți clic pe spațiul gol.

## Ștergerea a ceea ce este selectat

Apăsați {{key:Delete}} sau {{key:Backspace}}. Fețele, muchiile, grupurile și ghidajele din selecție sunt eliminate dintr-un singur pas; {{key:Mod+Z}} le readuce.

Ștergerea unei muchii elimină fețele care au nevoie de ea, cu excepția cazului în care muchia separa doar două fețe din același plan: atunci cele două fețe se unesc într-una. Ștergerea unei fețe lasă muchiile ei. Vezi [Ștergere și curățare](topic:erase).

## Selectarea în interiorul unui grup

Clic pe un grup selectează întregul grup. Ca să selectați o față din interiorul lui, faceți dublu clic pe grup ca să îl deschideți, apoi faceți clic. Cât timp un grup este deschis, clicurile ajung doar la ce se află în interiorul lui; tot restul este estompat. Apăsați {{key:Esc}} fără să aveți nimic selectat sau faceți dublu clic pe spațiul gol ca să îl închideți.

{{ui:Structură arborescentă}} din stânga selectează grupurile și componentele după nume, ceea ce ajută atunci când sunt ascunse în spatele altor lucruri.
