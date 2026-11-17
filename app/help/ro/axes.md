---
title: Mutați și rotiți axele de desen
summary: Rotiți axele roșie, verde și albastră ca să se potrivească cu o clădire care nu este pătrată față de ele, sau aliniați-le la o față, astfel că desenul și tastarea le urmează.
keywords: axe, axe de desen, origine, aliniere axe, rotire axe, întoarcere axe, resetare axe, clădire înclinată, strâmbă, ucs, sistem de coordonate
from: cab258f7
---

Axele roșie, verde și albastră ghidează tot ce desenați: dreptunghiurile se aliniază cu ele, liniile se fixează pe ele, iar solul este planul roșu–verde. Când o clădire stă la un unghi (un plan de amplasament care nu este pătrat față de nord, o aripă rotită cu 30°), mutați axele pe ea, astfel că desenul urmează pereții ei. Modelul în sine nu se mută.

Toate cele trei comenzi se află în {{ui:Editare}} › {{ui:Mai multe}}.

## Plasarea axelor

1. {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Plasare axe}}.
2. Faceți clic unde trebuie să fie originea, de exemplu pe un colț al clădirii.
3. Faceți clic pe un punct de-a lungul noii axe roșii, de exemplu mai departe pe un perete.
4. Faceți clic pe un punct spre noua axă verde. Verde devine perpendicular pe roșu, iar albastru stă perpendicular pe amândouă.

Axele se desenează în noul loc. Un dreptunghi pe care îl desenați acum pe sol sau pe care îl scrieți ca `4m,3m` merge de-a lungul roșului și verdelui rotite; tastele cu săgeți se fixează pe ele; iar agățarea la origine este în noua origine.

## Alinierea axelor la o față

Selectați o față, apoi {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Aliniere axe la față}}. Albastru arată atunci în afara feței, roșu merge de-a lungul celei mai lungi muchii a ei, iar originea este la începutul acelei muchii. Folosiți-o ca să desenați pe un acoperiș înclinat ca și cum ar fi solul.

## Resetarea axelor

{{ui:Editare}} › {{ui:Mai multe}} › {{ui:Resetare axe}} le readuce acolo unde a început modelul.

## Lucruri de știut

- În interiorul unui grup sau al unei componente deschise se folosesc axele proprii ale acestora (se rotesc odată cu ele); axele modelului se aplică la nivelul de sus.
- Axele se salvează în fișierul ModelCraft, iar fiecare schimbare este un pas de anulare.
- Exporturile și vederile standard ({{ui:Sus}}, {{ui:Față}}…) folosesc încă direcțiile proprii ale modelului.
