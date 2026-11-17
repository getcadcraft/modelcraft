---
title: Grupuri și componente
summary: Împiedicați lipirea obiectelor între ele, editați o copie ca să le schimbați pe toate și folosiți panourile Structură arborescentă și Componente.
keywords: grup, componentă, creare grup, creare componentă, descompunere, creare unică, structură arborescentă, instanțe, copii, bloc, imbricat, editare grup, plasare
from: 7cb925f3
---

Geometria liberă din ModelCraft se lipește: liniile care se ating se taie între ele, iar fețele care au o muchie comună se mișcă împreună. Asta face posibilă desenarea pe fețe, dar înseamnă și că o cutie desenată lângă alta fuzionează cu ea. **Grupurile** și **componentele** țin lucrurile separate.

- Un **grup** înfășoară o geometrie astfel încât să se comporte ca un singur obiect. Nimic din afara lui nu se poate lipi de el.
- O **componentă** este un grup care poate fi plasat de mai multe ori. Fiecare copie are același conținut: editați una și toate se schimbă. Folosiți componente pentru tot ce se repetă: ferestre, stâlpi, birouri, copaci.

## Creați un grup sau o componentă

1. Selectați geometria. Un triplu clic pe o față selectează întregul obiect conectat; trăgerea unei ferestre selectează tot ce se află în casetă.
2. Apăsați {{key:Shift+G}} pentru un grup sau {{key:G}} pentru o componentă. Puteți și să faceți clic pe {{ui:Grup}} sau {{ui:Componentă}} din grupul {{ui:Organizare}} al barei de instrumente ori pe {{ui:Creare grup (Shift+G)}} sau {{ui:Creare componentă (G)}} din {{ui:Informații entitate}}.

   Bara de stare afișează „Grupat ca Group#1.” sau „Componentă creată Component#1.”, noul obiect este selectat și apare în {{ui:Structură arborescentă}}.

3. Ca să îl denumiți, scrieți un nume în câmpul {{ui:Nume}} din {{ui:Informații entitate}} și apăsați {{key:Enter}} sau faceți clic în altă parte.

Selectarea unei fețe aduce și muchiile ei. Dacă nu este selectat nimic, bara de stare afișează „Selectați mai întâi o geometrie (trageți o fereastră sau faceți triplu clic pentru a selecta tot ce este conectat).”

Puteți grupa și grupuri: selectați mai multe grupuri și apăsați {{key:Shift+G}}. {{ui:Structură arborescentă}} arată imbricarea.

:::note
Tastele corespund celor implicite din SketchUp: {{key:G}} creează o componentă, {{key:Shift+G}} un grup.
:::

## Editați în interiorul unui grup sau al unei componente

1. Faceți dublu clic pe el (în vizualizare sau în {{ui:Structură arborescentă}}), sau selectați-l și faceți clic pe {{ui:Editare}} din {{ui:Informații entitate}}.

   Restul modelului se estompează, axele se mută pe axele proprii ale grupului, iar {{ui:Structură arborescentă}} afișează „Editare: Model › Group#1”. Bara de stare afișează „Editare Group#1. Esc sau dublu clic în afară îl închide.”

2. Desenați, împingeți și trageți, mutați și ștergeți ca de obicei. Tot ce faceți rămâne în interiorul grupului.
3. Închideți-l: apăsați {{key:Esc}} (de două ori dacă ceva este selectat), faceți dublu clic pe spațiul gol sau faceți clic pe {{ui:Închidere grup}} din {{ui:Structură arborescentă}}.

Cât timp o componentă este deschisă, fiecare copie a ei se schimbă pe măsură ce lucrați.

## Plasați mai multe copii ale unei componente

- Copiați-o cu {{ui:Mutare}} și {{key:Ctrl}} (vezi [Mutare și copiere](topic:move-copy)). Fiecare copie este o altă plasare a aceleiași componente.
- Sau faceți clic pe {{ui:Plasare}} de lângă ea în panoul {{ui:Componente}}, apoi faceți clic acolo unde trebuie să ajungă. Originea ei, colțul cel mai de jos al casetei din jurul a ceea ce ați selectat la creare, ajunge acolo unde faceți clic. Instrumentul revine apoi la {{ui:Selectare}}.

{{ui:Componente}} arată câte copii sunt plasate („4×”), iar {{ui:Structură arborescentă}} afișează numărul după nume.

## Rearanjați în Structură arborescentă

Trageți un rând din {{ui:Structură arborescentă}} ca să schimbați locul la care aparține. Nimic nu se mută în vizualizare: un grup își păstrează locul în model.

- **În interiorul unui grup:** lăsați-l pe mijlocul rândului unui grup (rândul primește un contur punctat). Intră înăuntru, ultimul.
- **Într-o altă ordine:** lăsați-l pe marginea de sus sau de jos a unui rând (apare o linie). Se pune chiar înainte sau după acel rând, în același grup cu rândul respectiv, deci și așa ajunge într-un grup, într-un loc ales.
- **Înapoi la nivelul de sus:** lăsați-l pe titlul {{ui:Structură arborescentă}}. Ajunge ultimul.

Fiecare lăsare este un singur pas: {{key:Mod+Z}} îl readuce. {{key:Esc}} în timpul trăgerii nu lasă nimic. Un grup nu poate fi pus în el însuși sau într-un grup pe care îl conține. Trăgerea este dezactivată cât timp {{ui:Căutare după nume}} conține text.

:::touch
Țineți degetul pe un rând câteva clipe, apoi trageți. O glisare rapidă derulează lista.
:::

## Faceți o copie diferită

Selectați copia și faceți clic pe {{ui:Creare unică}} din {{ui:Informații entitate}} (apare când componenta este plasată de mai multe ori). Copia primește propria definiție, cu numele originalului și un număr nou. Editați-o fără să atingeți celelalte.

## Transformați un grup într-o componentă

Selectați grupul și faceți clic pe {{ui:Creare componentă}} din {{ui:Informații entitate}}. Primește un nume nou, cum ar fi Component#2, chiar dacă grupul avea deja un nume; scrieți numele din nou în {{ui:Nume}}.

## Descompunere

Selectați un grup sau o componentă și faceți clic pe {{ui:Descompunere}} (în bara de instrumente sau în {{ui:Informații entitate}}). Conținutul ei devine geometrie liberă în locul în care se afla și se lipește de ce atinge. Grupurile din interiorul ei rămân grupuri.

## Solid și volum

Când selectați un grup sau o componentă, {{ui:Informații entitate}} afișează **Solid: Da** dacă fețele ei se închid fără goluri (fiecare muchie este comună cu exact două fețe) și nu are grupuri imbricate în interior. Atunci afișează și **volumul**. O cutie, un perete cu o fereastră tăiată prin el și un cilindru tras sunt solide; o cutie al cărei capac a fost șters nu este.

## Când se șterge ultima copie

Ștergerea ultimei copii a unei componente o scoate și din panoul {{ui:Componente}}. {{key:Mod+Z}} o readuce.

## De știut

- Copiile unui **grup** făcute cu {{ui:Mutare}} își împart conținutul în această versiune, la fel ca și copiile de componente: editarea uneia le schimbă pe celelalte. Ca să faceți una independentă, faceți clic pe {{ui:Creare componentă}}, apoi pe {{ui:Creare unică}}. Vezi [Depanare](topic:troubleshooting#editing-one-group-changed-another).
- Componentele nu taie goluri în pereți și nu se lipesc de fețe, iar nu există o bibliotecă de componente gata făcute. Le creați singuri sau le importați.
- Fișierele importate ajung ca un grup. Fișierele Collada își păstrează grupurile și componentele în interiorul lui.
