---
title: Începeți cu ModelCraft
summary: Pentru ce este ModelCraft, cum îl deschideți și prima cutie, de la un dreptunghi până la un model salvat.
keywords: început, primul model, a începe, tutorial, introducere, cutie, studii de volum, 3d, împingere trăgere, pornire rapidă, ghidat, ghid, începător, nou în 3D
from: d47ad719
---

ModelCraft este un instrument de modelare 3D pentru proiectarea din faza timpurie: studii de volum, planuri de încăperi, forme rapide de clădiri și umbrele pe care le proiectează. Desenați forme plane, le trageți în sus, transformându-le în solide, și continuați să lucrați pe ele desenând pe fețele lor. Rulează în browserul web, iar modelele rămân pe calculator.

Dacă ați folosit SketchUp, cea mai mare parte din ce știți se transferă: aceleași litere de instrumente, {{ui:Împinge/Trage}}, caseta de valori pentru dimensiuni exacte, grupuri și componente. [Venind de la alți modelatori](topic:coming-from) enumeră ce este diferit.

## Deschideți ModelCraft

1. Deschideți ModelCraft într-o versiune actuală de Chrome, Edge, Firefox sau Safari. Vedeți [Browsere și calculatoare](common:browsers).
2. Așteptați să apară vizualizarea 3D: o zonă luminoasă (sau întunecată) în mijloc, cu un card intitulat „{{ui:Începeți modelarea}}”.

Ecranul are o bară de instrumente sus, {{ui:Structură arborescentă}} și {{ui:Componente}} în stânga, vizualizarea 3D în mijloc, {{ui:Informații entitate}}, {{ui:Stil}} și {{ui:Scene}} în dreapta, iar jos o bară de stare cu caseta de valori și unitățile. [Ecranul ModelCraft](topic:workspace) explică fiecare parte.

:::note
ModelCraft are nevoie de WebGL, funcția de desenare 3D a browserului. Dacă mijlocul ecranului rămâne gol și instrumentele nu fac nimic, vedeți [Depanare](topic:troubleshooting#the-3d-view-is-blank).
:::

## Verificați mai întâi unitățile

Priviți colțul din dreapta jos. Selectorul de unități arată în ce sunt măsurate lungimile.

- Un model nou pornește în **picioare și țoli** atunci când browserul este setat pe Statele Unite (și Liberia și Myanmar), iar în **milimetri** în rest.
- Pentru a o schimba, alegeți altă unitate în selector: {{ui:ft și in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} sau {{ui:mm}}. Modelul în sine nu își schimbă dimensiunea; se schimbă doar modul în care sunt afișate lungimile și citite numerele fără unitate.

Un număr scris fără unitate folosește unitatea modelului. Într-un model în picioare și țoli, un număr fără unitate înseamnă **țoli**, deci `120` înseamnă 10 picioare.

## Lăsați ModelCraft să vă ghideze primul model

Sunteți nou în 3D? Pe cardul {{ui:Începeți modelarea}}, faceți clic pe {{ui:Primul model ghidat}} (este și în {{ui:Vederi}}). Un card mic vă ghidează prin patru pași, de la un dreptunghi plat până la un model gata pentru o imprimantă 3D:

1. Desenați un dreptunghi pe sol.
2. Trageți-l în sus, până devine o cutie.
3. Faceți din cutie un singur obiect (un grup).
4. Verificați pentru imprimare 3D, apoi descărcați un fișier 3MF sau STL.

Cardul urmărește modelul, nu butoanele: trece mai departe când pasul este făcut, indiferent cum l-ați făcut, și revine un pas când anulați. {{ui:Alegeți instrumentul}} alege singur instrumentul. Închideți-l oricând cu {{ui:×}}.

## Desenați prima cutie

1. Apăsați {{key:R}} pentru instrumentul {{ui:Dreptunghi}} sau faceți clic pe {{ui:Dreptunghi}} din grupul {{ui:Desenare}} al barei de instrumente.
2. Faceți clic o dată pe sol, aproape de mijlocul vizualizării. Acesta este primul colț.
3. Mutați indicatorul. Un dreptunghi îl urmează, iar caseta de valori de jos (etichetată {{ui:Cote}}) arată dimensiunea lui.
4. Scrieți dimensiunea și apăsați {{key:Enter}}: de exemplu `4m,3m`, sau `16',12'` în picioare și țoli. Nu trebuie să faceți clic întâi în caseta de valori; scrierea unui număr o trimite acolo.

   Obțineți un dreptunghi plat pe sol. Este o **față**: o suprafață cu muchii în jur.

5. Apăsați {{key:P}} pentru {{ui:Împinge/Trage}}.
6. Faceți clic pe dreptunghi, mutați indicatorul în sus și faceți clic din nou. Sau faceți clic pe dreptunghi și scrieți o înălțime, de exemplu `3m` sau `10'`, apoi apăsați {{key:Enter}}.

   Dreptunghiul devine o cutie cu o față de sus, una de jos și patru laturi.

7. Apăsați {{key:Space}} ca să reveniți la {{ui:Selectare}}, apoi faceți clic pe fața de sus a cutiei. {{ui:Informații entitate}} din dreapta arată aria ei.

:::tip
Puteți și trage în loc să faceți clic de două ori: apăsați pe primul colț, trageți și eliberați pe al doilea. Ambele moduri funcționează pentru fiecare instrument de desenare.
:::

## Priviți în jur

- **Orbitare:** trageți cu butonul din mijloc al mouse-ului (rotița) sau apăsați {{key:O}} și trageți cu butonul stâng.
- **Pan:** trageți cu butonul din dreapta sau cu butonul din mijloc în timp ce țineți {{key:Shift}}.
- **Zoom:** rotiți rotița. Face zoom spre ce se află sub indicator.
- **Vedeți tot:** apăsați {{key:Shift+Z}} sau faceți clic pe {{ui:Extinderi}}.

Pe touchpad sau pe ecran tactil, gesturile sunt altele. Vedeți [Orbitare, pan și zoom](topic:orbit-pan-zoom).

## Anulare

Apăsați {{key:Mod+Z}} pentru a anula și {{key:Mod+Y}} pentru a reface, sau folosiți {{ui:Anulare}} și {{ui:Refacere}} din bara de instrumente. ModelCraft ține minte ultimii 200 de pași cât modelul este deschis. Istoricul nu se salvează în fișier.

## Salvați modelul

1. Faceți clic pe {{ui:Salvare}} din grupul {{ui:Fișier}} sau apăsați {{key:Mod+S}}.
2. Browserul descarcă un fișier cu numele modelului, de exemplu `Untitled.modelcraft`. Bara de stare spune unde a ajuns: „Untitled.modelcraft salvat în descărcări.”

**Salvarea este o descărcare.** Fiecare salvare face o copie nouă în dosarul de descărcări; nu suprascrie fișierul deschis. Ca să păstrați un dosar de proiect ordonat, mutați sau redenumiți singur fișierul acolo. [Deschidere, salvare, import și export](topic:files) explică de ce și ce altceva puteți face.

:::warning
ModelCraft nu salvează singur. Dacă închideți fila cu modificări nesalvate, browserul întreabă mai întâi („Părăsiți site-ul?”). Alegeți să rămâneți, apoi salvați.
:::

## Ajutor

Apăsați {{key:F1}} sau faceți clic pe {{ui:Ajutor}} din bara de aplicații ca să deschideți acest ajutor lângă model. Funcționează fără conexiune. Apăsați din nou {{key:F1}}, sau {{key:Esc}} în ajutor, ca să-l închideți. Vedeți [Folosirea acestui ajutor](common:help).

## Unde mergeți mai departe

- [Desenarea fețelor cu linii, dreptunghiuri și cercuri](topic:draw-faces)
- [Împingerea și tragerea fețelor în solide](topic:push-pull)
- [Scrieți dimensiuni exacte în caseta de valori](topic:value-box)
- [Fiecare tastă și acțiune cu mouse-ul](topic:keyboard)
