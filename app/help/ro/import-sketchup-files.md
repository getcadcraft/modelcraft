---
title: Importul unui model SKP
summary: Importați un fișier .skp cu grupurile, componentele, culorile, texturile, etichetele și muchiile moi, vedeți ce a intrat și ce nu, și continuați modelarea.
keywords: skp, import, deschidere skp, componente, grupuri, etichete, straturi, materiale, culori, texturi, ascuns, muchii moi, 3D Warehouse, migrare, comutare
from: 325d3c81
---

ModelCraft citește fișiere SketchUp (`.skp`) cu propriul cititor, în pagină. Nu se încarcă nimic, iar funcționează offline ori de câte ori funcționează ModelCraft. Au fost testate fișiere de la SketchUp 3 până la 2026.

## Importați fișierul

1. Faceți clic pe {{ui:Import}} din grupul {{ui:Fișier}} (sau trageți fișierul `.skp` pe vizualizarea 3D).
2. Alegeți fișierul.

   Bara de stare afișează „Se citește house.skp…” cât timp citește, apoi ce a intrat, de exemplu „Importat house.skp (SketchUp 25.0.575): 1240 fețe, 6 componente, într-un grup.”

Modelul întreg ajunge ca un grup cu numele fișierului, selectat, iar vizualizarea face zoom pe el. Un {{key:Mod+Z}} îl înlătură din nou, cu etichetele cu tot.

:::tip
Descompuneți grupul importat ({{ui:Informații entitate}} › {{ui:Descompunere}}) când doriți conținutul său liber în model, nu într-un singur grup.
:::

## Ce intră

- **Fețe** cu găurile lor și **muchii** care nu fac parte dintr-o față.
- **Grupurile** intră ca grupuri, iar **componentele** ca componente: fiecare copie a unei componente este o plasare a unei singure definiții, deci editarea unei copii le schimbă pe toate, ca în SketchUp. Numele vin odată cu ele.
- **Culori.** Materialul propriu al unei fețe îi dă culoarea. Un material vopsit pe un grup sau pe o componentă devine vopseaua acelei plasări, astfel încât fețele din interior fără culoare proprie o preiau, ca în SketchUp. O componentă vopsită roșu într-un loc și albastru în altul rămâne o singură componentă.
- **Texturi.** O față vopsită cu un material cu textură intră cu textura sa, așezată pe față ca în fișier, iar stilul {{ui:Umbrit}} o arată. Imaginea se păstrează în fișierul ModelCraft când salvați, iar o [imagine randată](topic:render) o arată și ea. Un material cu textură vopsit pe un grup sau o componentă întreagă dă acelei copii doar culoarea materialului.
- **Etichete.** Un grup sau o componentă aflată pe o etichetă SketchUp primește o etichetă ModelCraft cu același nume, listată în {{ui:Etichete}}, arătată sau ascunsă cum era în SketchUp. Dacă modelul are deja o etichetă cu acest nume, aceea se folosește.
- **Lucrurile ascunse intră ascunse:** fețe, muchii, grupuri și componente, precum și fețe și muchii de pe o etichetă ascunsă. Vedeți ce arăta SketchUp, iar nimic nu se pierde: {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Afișare tot}} le arată. Vezi [Ascundere, izolare și afișare](topic:hide-isolate).
- **Muchiile moi și netede** rămân moi, astfel încât suprafețele curbe arată în continuare netede.
- **Dimensiunile** ies corect în orice unitate: fișierele SketchUp sunt în inch în interior, iar ModelCraft le convertește.

## Ce nu intră

Bara de stare spune ce a rămas afară, cu numărători.

- **Unele texturi** păstrează doar culoarea materialului lor: o textură lipsă din fișier, o imagine într-un format pe care browserele nu o pot afișa (cum este un fișier Photoshop) sau o textură fără dimensiune. Fețele cu textură proiectată intră cu textura așezată aproximativ.
- **Etichete pe fețe și muchii libere.** ModelCraft etichetează doar grupuri și componente, deci o față sau o muchie cu eticheta proprie intră fără etichetă, iar bara de stare le numără. Transformați astfel de fețe într-un grup ({{key:Shift+G}}) și etichetați grupul.
- **Imagini** plasate în model, text, cote, ghiduri, plane de secțiune, scene și stiluri.

## Probleme

- „Acesta nu este un fișier SketchUp.” sau „Acest fișier SketchUp este deteriorat: …”: fișierul este tăiat sau este altceva cu nume `.skp`. Salvați-l din nou din SketchUp sau cereți o copie nouă.
- Un fișier dintr-o versiune SketchUp mai nouă decât cea cunoscută de ModelCraft este refuzat, cu versiunea pe care a găsit-o.
- Un model format numai din imagini, text sau cote spune că nu are ce arăta.

## Luați modelul înapoi

ModelCraft nu poate salva fișiere `.skp`. Exportați Collada ({{ui:Exportare}} › `.dae`) și importați-l în SketchUp: grupurile, componentele și culorile trec; texturile trec ca o culoare de material. Vezi [Exportul modelului](topic:export-model).
