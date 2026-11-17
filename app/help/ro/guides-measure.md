---
title: Măsurarea și plasarea ghidurilor
summary: Citiți lungimi și arii, măsurați între două puncte cu ruleta și trasați linii și puncte de ghid pe care să desenați.
keywords: măsurare, ruletă, raportor, unghi, ghid înclinat, ghid, linie de ghid, linie de construcție, distanță, cotare, lungime, arie, decalare, plan, punct de ghid
from: de6d04d9
---

## Citiți dimensiunile fără să măsurați

Selectați ceva și uitați-vă la {{ui:Informații entitate}}:

- O muchie afișează **lungimea** ei.
- O față afișează **aria** ei și câte găuri are.
- Mai multe fețe afișează **aria totală**.
- Un grup sau o componentă afișează **dimensiunea** (lățimea × adâncimea × înălțimea cutiei din jurul ei) și, dacă este un solid închis, **volumul**.
- Fără nimic selectat, {{ui:Informații entitate}} afișează dimensiunea întregului model.

Lungimile și ariile folosesc unitatea din selectorul din dreapta jos. Un model în milimetri afișează ariile de 0.01 m² și mai mari în metri pătrați (o cameră de 4 × 3 m apare „12 m²”).

Cât desenați, caseta de valori afișează lungimea, dimensiunea, raza sau distanța în timp real, așa că rareori trebuie să măsurați după aceea.

Ca să schimbați o dimensiune după desenare, selectați o muchie sau un grup și scrieți din nou lungimea sau dimensiunea în {{ui:Informații entitate}}. Sau plasați o [cotă](topic:dimensions) și scrieți o lungime nouă în ea.

## Măsurați între două puncte

1. Apăsați {{key:T}} pentru măsurătorul {{ui:Ruletă}}.
2. Faceți clic pe un punct: un colț, un mijloc, un punct de pe o față sau pe sol. (Clicul pe o muchie face altceva; vezi mai jos.)
3. Mutați-vă la al doilea punct. Vârful și caseta de valori ({{ui:Lungime}}) afișează distanța. Se agață de puncte și de direcțiile roșu, verde și albastru.
4. Faceți clic. Bara de stare afișează „Măsurat 4' 6".”, iar un **punct de ghid** rămâne în al doilea punct.

Ca să lăsați punctul de ghid la o distanță exactă, scrieți distanța după primul clic și apăsați {{key:Enter}}: punctul merge în direcția în care indicați.

## Plasați o linie de ghid

O linie de ghid este o linie punctată nesfârșită, paralelă cu o muchie, la o distanță aleasă. Folosiți ghidurile ca să trasați un retras, o înălțime de planșeu sau locul unde începe o fereastră.

1. Apăsați {{key:T}}.
2. Faceți clic pe o **muchie** (nu pe capătul ei). Vârful spune „Pe muchie”.
3. Mutați-vă de pe muchie, în partea în care trebuie să fie ghidul. Urmează o linie punctată, paralelă cu muchia, iar caseta de valori ({{ui:Decalare}}) afișează distanța.
4. Faceți clic sau scrieți decalajul și apăsați {{key:Enter}}: `1.5m`, `5'`.

   Bara de stare afișează „Linie de ghid la 1.5 m de muchie.”

Începerea pe o linie de ghid existentă creează alt ghid paralel cu ea, așa că puteți extinde o grilă pornind de la un ghid.

Dacă scrieți un decalaj fără să vă mutați mai întâi de pe muchie, ModelCraft nu poate ști ce parte doriți: „Mutați-vă mai întâi de pe muchie, pentru a arăta pe ce parte.”

## Un ghid înclinat: Raportorul

1. Faceți clic pe {{ui:Raportor}} din grupul {{ui:Modificare}}.
2. Faceți clic pe centru: punctul prin care trece ghidul. Pe o față, raportorul stă pe acea față; în altă parte stă plat. După acest clic, {{key:Right}}, {{key:Left}} sau {{key:Up}} îl așază perpendicular pe roșu, verde sau albastru (apăsați din nou ca să anulați).
3. Faceți clic pe un punct care stabilește 0°, de exemplu de-a lungul unei muchii.
4. Mutați-vă la unghiul dorit și faceți clic: se agață din pași de 15°. Sau scrieți unghiul în grade, de exemplu `22.5`, și apăsați {{key:Enter}}; ghidul merge pe partea în care se află indicatorul.

Linia de ghid trece prin centru la acel unghi. Desenați de-a lungul ei cu {{ui:Linie}} pentru o pantă de acoperiș, un șanfren sau un perete evazat.

## Desenați pe ghiduri

Instrumentele de desen se agață de liniile de ghid („Pe ghid”) și de punctele de ghid („Punct de ghid”), precum și de locul în care o linie de ghid taie o direcție de axă. Începeți un dreptunghi acolo unde se intersectează două ghiduri, ca să îl plasați exact.

## Eliminați ghidurile

- Un ghid: faceți clic pe el cu {{ui:Selectare}} și apăsați {{key:Delete}}, sau faceți clic pe el cu {{ui:Ștergere}}.
- Toate ghidurile: fără nimic selectat, faceți clic pe {{ui:Ștergere toate ghidurile}} din {{ui:Informații entitate}}.

Ghidurile se salvează în fișierul `.modelcraft`. Nu se exportă în alte formate.
