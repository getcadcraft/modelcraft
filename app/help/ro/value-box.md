---
title: Introducerea exactă a dimensiunilor în caseta de valori
summary: Toate modurile de a scrie lungimi, dimensiuni, puncte, decalaje, unghiuri, laturi și copii și cum sunt citite unitățile și numerele simple.
keywords: casetă de valori, casetă de măsurători, vcb, introducere, exact, cotă, lungime, unități, picioare, inci, metric, milimetri, coordonate, decalare, matrice, laturi, unghi, virgulă zecimală
from: 0148dc3d
---

Caseta de valori se află în bara de stare de jos, cu o etichetă care se schimbă după unealtă. Cât lucrați, arată dimensiunea în timp real; oricând puteți scrie una exactă.

## Cum se scrie

1. Începeți acțiunea cu un clic (primul colț, fața, punctul de la care mutați).
2. Scrieți. Nu trebuie să faceți clic pe caseta de valori: o cifră sau unul dintre caracterele `. , - ' " [ < * /` trimite ce scrieți acolo.
3. Apăsați {{key:Enter}}.

Apăsați {{key:Esc}} în caseta de valori ca s-o goliți și să reveniți la vedere. Pe ecran tactil, atingeți caseta de valori ca să apară tastatura.

Dacă ModelCraft nu poate citi ce ați scris, bara de stare spune „Introduceți o lungime, de exemplu 3m, 10'6" sau 4m,3m.” Dacă unealta nu poate folosi valoarea, spune „Nu a funcționat: …” și motivul.

## Lungimi

| Scriere | Înseamnă |
|---|---|
| `3m` `320cm` `3200mm` | Metri, centimetri, milimetri |
| `10'` `10ft` `10 feet` | Picioare |
| `6"` `6in` `6 inches` | Inci |
| `10'6"` `10' 6"` `10'-6 1/2"` | Picioare și inci, cu fracție |
| `6 1/2"` `6-1/2"` `3/4"` | Inci cu fracție |
| `1.5ft` `.5m` | Zecimale cu unitate |
| `120` | Un număr simplu, în unitatea modelului |

**Un număr simplu folosește unitatea modelului**, cum se vede în selectorul din dreapta jos: inci într-un model cu picioare și inci (deci `120` înseamnă 10 picioare), milimetri într-un model în milimetri și așa mai departe. O unitate scrisă câștigă întotdeauna, oricare ar fi unitatea modelului. Ghilimelele curbe și semnele de prim (’ ” ′ ″) se citesc tot ca picioare și inci.

:::warning
Folosiți întotdeauna **punctul** pentru zecimale: `2.5m`. Virgula separă două valori, deci `2,5` înseamnă 2 și 5 (două valori), indiferent de setările de limbă.
:::

## Calcule

Orice lungime poate fi un calcul: adunați cu `+`, scădeți cu `-`, înmulțiți cu `*`, împărțiți cu `/` și folosiți paranteze. Nu este nevoie de calculator.

| Scriere | Înseamnă |
|---|---|
| `2.5/3` | O treime din 2.5 (în unitatea modelului) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" într-un model cu picioare și inci |
| `3m-25cm` | 2.75 m |

Un număr simplu este în unitatea modelului când este o lungime (`2.5/3` într-un model în metri este 0.833 m), iar când înmulțește sau împarte o lungime este un factor simplu (`2*450mm`). Unghiurile și factorii acceptă și ei calcule: `90/2` este 45°. Două lungimi înmulțite fac o arie, nu o lungime, deci `2m*3m` este refuzat.

Dacă ModelCraft nu poate calcula, bara de stare spune ce nu este în regulă și unde, de exemplu „Împărțire la zero (caracterul 4).” O paranteză pornește și ea caseta de valori, deci puteți începe cu `(`.

Acestea își păstrează sensul: `/3`, `3x` și `*3` după o copiere, `24s` pentru laturi și `/3` cu o muchie selectată (care [împarte muchia](topic:divide)).

## Pe unealtă

| Unealtă | Etichetă | Scriere |
|---|---|---|
| {{ui:Linie}} | {{ui:Lungime}} | O lungime (spre cursor), sau un punct ori un decalaj (mai jos) |
| {{ui:Dreptunghi}} | {{ui:Dimensiuni}} | Două lungimi: `4m,3m`, `12',10'`. Merge și un punct și virgulă: `4m;3m` |
| {{ui:Cerc}}, {{ui:Poligon}} | {{ui:Laturi}}, apoi {{ui:Rază}} | Înainte de primul clic, numărul de laturi: `12s` sau `12` (3 până la 999). După el, raza |
| {{ui:Împinge/Trage}} | {{ui:Distanță}} | O lungime. Una negativă merge în sens invers |
| {{ui:Mutare}} | {{ui:Distanță}} | O lungime (spre cursor), sau un punct ori un decalaj. După o copiere: `3x`, `*3`, `/3` |
| {{ui:Rotire}} | {{ui:Unghi}} | Grade: `90`, `-45`, `22.5` |
| {{ui:Scalare}} | {{ui:Scalare}} | Un factor peste 0: `2`, `0.5`, `1.25` |
| {{ui:Ruletă}} | {{ui:Decalare}} sau {{ui:Lungime}} | O lungime |
| {{ui:Divizare}} | {{ui:Părți}} | În câte părți egale: `5`, `5s` sau `/5` (2 până la 1000). Vezi [Împărțirea unei muchii sau a unei curbe în părți egale](topic:divide) |
| {{ui:Cotare}} | {{ui:Decalare}}, apoi {{ui:Lungime}} | Unde merge linia de cotă; imediat după plasare, o lungime nouă redimensionează modelul |
| {{ui:Selectare}} | {{ui:Valoare}} | Cu o cotă sau o muchie selectată, o lungime nouă redimensionează modelul. Vezi [Cotare și redimensionare](topic:dimensions) |

## Puncte și decalaje

Pentru {{ui:Linie}} și {{ui:Mutare}}, după primul clic:

- `[x,y,z]` merge la punctul exact din model (în axele grupului dacă editați în interiorul unui grup). Exemplu: `[0,0,3m]` este la 3 m drept deasupra originii.
- `<dx,dy,dz>` merge atât de departe de primul punct, de-a lungul roșu, verde și albastru. Exemplu: `<0,0,10'>` este 10 picioare drept în sus.

Fiecare dintre cele trei valori poate avea propria unitate: `<12',0,6">`.

## Copii după o mutare

Imediat după o copiere cu {{ui:Mutare}}:

| Scriere | Creează |
|---|---|
| `3x` sau `*3` | 3 copii una după alta, la aceeași distanță |
| `/3` | 3 copii distribuite egal de la original până la prima copie |

Până la 500 de copii. Vezi [Mutarea, copierea și crearea matricelor](topic:move-copy#a-row-of-copies).

## Lungimile scrise cer o direcție

O lungime scrisă singură merge în direcția în care arată cursorul de la primul clic. Dacă scrieți imediat după un clic, înainte de a mișca deloc, nu există încă o direcție și nu se întâmplă nimic. Mișcați puțin cursorul spre locul unde vreți să mergeți, apoi scrieți.

## Unitatea modelului

Schimbați unitatea din selectorul din dreapta jos: {{ui:ft and in}}, in, ft, yd, mi, mil, µm, mm, cm, m sau km, în măsura în care sunt activate în {{ui:Setări}} › {{ui:General}} › {{ui:Unități}} (unitatea proprie a modelului este mereu acolo). O lungime scrisă cu semnul oricărei unități este citită în acea unitate. Vezi [Unități, valori scrise și listele de unități](common:unit-lists). Schimbarea unității modifică modul în care sunt arătate lungimile și cum sunt citite numerele simple; modelul rămâne aceeași mărime. Unitatea este salvată în fișier.

Cum sunt arătate dimensiunile:

| Unitate | Lungimi | Arii | Volume |
|---|---|---|---|
| ft and in | `10' 6 1/2"` (până la 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² de la 0.01 m², altfel mm² | m³ de la 0.01 m³, altfel mm³ |

Un model nou începe în picioare și inci când limba browserului este setată pe o regiune din SUA (și Liberia și Myanmar), iar în milimetri în rest. O unitate marcată cu steluță în {{ui:Setări}} › {{ui:General}} › {{ui:Unități}} se folosește în locul acesteia, când ModelCraft o are. Sau puteți schimba selectorul după {{ui:Nou}}.
