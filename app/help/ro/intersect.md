---
title: Intersectarea fețelor
summary: Desenați liniile în care fețele se taie unele pe altele, ca să puteți împinge, șterge sau vopsi bucățile.
keywords: intersectare, intersectare fețe, intersecție cu modelul, intersecție cu selecția, tăiere, deschidere, gaură, unire, linii unde fețele se intersectează, boolean
from: 6bc58526
---

Când o formă trece prin alta, ModelCraft nu desenează linia în care se întâlnesc fețele lor: ele doar se suprapun. **Intersectarea** desenează aceste linii, ca muchii, astfel încât fețele se despart acolo. Apoi puteți împinge/trage, șterge sau vopsi bucățile.

Ambele comenzi se află în {{ui:Editare}} › {{ui:Mai multe}}.

## Intersecție cu modelul

Taie ce selectați față de **fiecare față de pe ecran**.

De exemplu, o grindă (un grup) trece printr-un perete (alt grup), iar doriți o deschidere în perete:

1. Faceți dublu clic pe perete ca să îl deschideți și selectați toate fețele sale ({{key:Ctrl+A}}).
2. {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Intersecție cu modelul}}.

Conturul grinzii se desenează pe ambele fețe ale peretelui, ca două fețe noi. Împingeți una dintre ele prin perete ca să faceți deschiderea, apoi închideți peretele.

## Intersecție cu selecția

Taie fețele, grupurile și componentele selectate **doar unele față de altele**. Selectați cel puțin două.

## Unde ajung liniile

Liniile se desenează întotdeauna în **contextul deschis**: în model, când niciun grup nu este deschis, sau în grupul pe care îl editați. Grupurile și componentele care nu sunt deschise nu se schimbă. Așadar, ca să tăiați fețele unui grup, deschideți-l mai întâi, ca în exemplul de mai sus.

## De știut

- Fețele aflate în același plan nu se intersectează.
- Liniile care închid o buclă pe o față fac o față nouă, ca liniile desenate.
- Fiecare intersectare este un singur pas de anulare. Dacă nimic nu se taie, nimic nu se schimbă.
- Pentru forme închise, [instrumentele de solide](topic:solids) (Reuniune, Scădere) fac întreaga operație într-un singur pas.
