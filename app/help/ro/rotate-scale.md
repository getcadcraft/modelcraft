---
title: Rotire și scalare
summary: Întoarceți lucruri în jurul unui punct, făcând clic sau tastând grade, și redimensionați-le uniform cu un factor.
keywords: mânere de scalare, întindere, neuniform, pe axă, răsturnare, oglindire, copie oglindită, răsturnare pe axa, rotire, întoarcere, unghi, grade, raportor, scalare, redimensionare, mărire, micșorare, factor, scalare uniformă
from: 45cdcb49
---

## Rotire

{{ui:Rotire}} ({{key:Q}}) întoarce selecția în jurul unui punct central. Are nevoie de trei clicuri: centrul, o direcție de pornire și direcția finală.

1. Selectați ce vreți să întoarceți. Dacă nu este nimic selectat, Rotire ia lucrul pe care faceți clic primul.
2. Apăsați {{key:Q}}. Un inel urmărește cursorul și arată planul în care veți întoarce.
3. Faceți clic pe centrul rotirii.
   - Pe teren sau în spațiu gol, inelul stă plat (albastru): întoarcerea se face în jurul unei axe verticale, ca la rotirea unei clădiri pe amplasament.
   - Pe o față, inelul stă în planul acelei fețe: întoarcerea se face în jurul direcției proprii a feței. Faceți clic pe un perete ca să întoarceți ceva în jurul unei axe orizontale.
4. Faceți clic pe un punct care stabilește de unde începe unghiul, de exemplu de-a lungul unei muchii a lucrului pe care îl întoarceți.
5. Mutați cursorul în jurul centrului. Unghiul se arată în vârf și în caseta de valoare ({{ui:Unghi}}). Se fixează din 15° în 15° când vă apropiați de unul dintre ele.
6. Faceți clic pentru a încheia sau tastați unghiul în grade și apăsați {{key:Enter}}: `90`, `45`, `-30`.

   Unghiurile pozitive întorc în sens invers acelor de ceasornic, privit din partea spre care este orientat inelul.

Apăsați {{key:Ctrl}} (sau {{key:Alt}}) în timp ce rotiți ca să întoarceți o **copie** și să lăsați originalul la locul lui, ca la Mutare; vârful spune dacă opțiunea de copiere este activă, iar apăsarea din nou a tastei o dezactivează. Tastați `3x` imediat după o copie rotită pentru mai multe copii în jurul aceluiași centru.

Ca la Mutare, rotirea unei părți dintr-o geometrie conectată răsucește fețele atașate la ea. Grupați mai întâi lucrurile ca să le întoarceți întregi.

:::note
Vârful spune că tastele săgeți aleg axa de rotație, dar în această versiune ele rotesc vizualizarea în loc să facă asta înainte de primul clic. Ca să alegeți axa, faceți clic pe centru, pe o față orientată în direcția dorită. Consultați [Încă nerealizat](topic:not-built-yet).
:::

## Scalare

{{ui:Scalare}} ({{key:S}}) redimensionează selecția. Selectați mai întâi ce vreți să redimensionați, apoi apăsați {{key:S}}: pe colțurile, muchiile și mijloacele laturilor casetei sale apar pătrățele mici (mânere).

### Întindere sau scalare cu mânerele

- Un **mâner de colț** scalează uniform în toate direcțiile, în jurul colțului opus.
- Mânerul din mijlocul unei **laturi** întinde doar pe acea direcție, în jurul laturii opuse: faceți o cutie mai lungă fără să o faceți mai înaltă.
- Mânerul din mijlocul unei **muchii a casetei** întinde în cele două direcții peste ea.
- Țineți apăsat {{key:Ctrl}} când faceți clic pe un mâner, ca să scalați în jurul mijlocului casetei.

Faceți clic pe un mâner, mutați cursorul și faceți clic din nou; sau faceți clic pe mâner și tastați un factor (`2` dublează, `0.5` înjumătățește) și apăsați {{key:Enter}}. Ca să dați fiecărei direcții propriul factor, tastați trei, pentru roșu, verde și albastru: `2,1,0.5`. În interiorul unui grup deschis, direcțiile sunt ale grupului.

### Scalare față de un punct oarecare

Faceți clic oriunde în afara unui mâner ca să scalați uniform față de un punct propriu. Sunt necesare trei clicuri:

1. Selectați ce vreți să redimensionați. Dacă nu este nimic selectat, Scalare ia lucrul pe care faceți clic primul.
2. Apăsați {{key:S}}.
3. Faceți clic pe punctul care rămâne pe loc (nu pe un mâner), de exemplu un colț de jos.
4. Faceți clic pe un punct de referință. Distanța lui față de primul punct contează ca 1×.
5. Mutați cursorul spre sau departe de primul punct. Factorul se arată în vârf și în caseta de valoare ({{ui:Scalare}}).
6. Faceți clic pentru a încheia sau tastați un factor și apăsați {{key:Enter}}: `2` dublează dimensiunea, `0.5` o înjumătățește.

### Scalare la o dimensiune exactă

Ca să faceți ceva de o lungime exactă, calculați factorul: lungimea nouă împărțită la lungimea actuală. În modul cu trei clicuri, caseta de valoare face calcule, deci tastați `4.2/3.6` ca să faceți un perete de 3.6 m să aibă 4.2 m. Caseta de valoare a unui mâner acceptă doar numere simple: calculați mai întâi factorul (4.2 împărțit la 3.6 este cam 1.1667). Selectați mai întâi muchia ca să citiți lungimea ei actuală în {{ui:Informații entitate}}.

### Corectarea unui import care a venit la dimensiune greșită

Fișierele OBJ nu au unitate, deci un model desenat în milimetri vine de 1000 de ori mai mare. Selectați grupul importat, apăsați {{key:S}}, faceți clic pe un mâner de colț și tastați `0.001`, apoi apăsați {{key:Enter}}. Pentru un model desenat în inci, tastați `0.0254`.

## De reținut

- Scalarea față de un punct, cu cele trei clicuri, este uniformă. Ca să întindeți într-o singură direcție, folosiți un mâner de latură sau de muchie (vezi mai sus).
- Scalarea unui grup sau a unei componente schimbă copia pe care ați scalat-o; celelalte copii ale unei componente își păstrează dimensiunea.
- Apăsați {{key:Esc}} înainte de ultimul clic ca să anulați.

## Răsturnare

{{ui:Editare}} › {{ui:Mai multe}} › {{ui:Răsturnare pe axa roșie}}, {{ui:Răsturnare pe axa verde}} sau {{ui:Răsturnare pe axa albastră}} oglindește selecția pe loc, prin mijlocul casetei sale: o scară cu mâna stângă devine una cu mâna dreaptă. Fețele rămân orientate spre exterior, iar un grup sau o componentă este oglindit ca întreg (interiorul lui nu este rescris).

{{ui:Copie răsturnată pe axa roșie}} (și verde, albastră) lasă originalul la locul lui și pune o copie oglindită alături, peste latura opusă a casetei selecției: a doua ușă a unei perechi, a doua aripă a unei clădiri. Geometria liberă care atinge acolo se unește cu originalul, cum se întâmplă mereu cu geometria atinsă; faceți mai întâi originalul un grup ca să le țineți separate.

În interiorul unui grup deschis, roșu, verde și albastru sunt axele proprii ale grupului.
