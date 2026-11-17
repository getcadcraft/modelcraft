---
title: Meniuri, taste și mouse
summary: Alegeți un stil de meniu care se potrivește modelatorului pe care îl cunoașteți deja, dați oricărei comenzi propria tastă, mutați comenzile între meniuri și stabiliți ce fac rotița și butoanele din mijloc și din dreapta ale mouse-ului.
keywords: stil de meniu, meniuri, bară de meniu, bară de instrumente, scurtături de la tastatură, taste rapide, taste, stil de taste, hartă de taste, personalizare, reatribuire, mouse, rotiță, inversare, direcția zoomului, buton din mijloc, buton din dreapta, orbitare, panoramare, exportare, importare, comutare, familiar, push-pull, modelator
from: e56fce3d
---

Uneltele ModelCraft sunt aceleași, indiferent cum le accesați. Un **stil de meniu** decide unde se află pe ecran, cum se numesc acolo și ce taste le pornesc. Alegeți unul în {{ui:Setări}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Meniuri, taste și mouse}}; schimbarea este imediată, iar acest browser o reține.

## Stilurile

| Stil | Ce obțineți |
|---|---|
| {{ui:ModelCraft}} | Bara de instrumente proprie ModelCraft (Fișier, Desen, Modificare, Organizare, Editare, Cameră) și tastele cu o singură literă: {{key:L}} linie, {{key:R}} dreptunghi, {{key:P}} push/pull, {{key:M}} mutare, {{key:Q}} rotire, {{key:S}} scalare, {{key:E}} ștergere, {{key:O}} orbitare. Punctul de plecare. |
| {{ui:Push-pull}} | O bară de meniu (Fișier, Editare, Vizualizare, Cameră, Desen, Unelte, Fereastră) peste un rând de unelte principale, cu aceleași taste cu o singură literă. |
| {{ui:Modeler}} | O bară de meniu în antet (Fișier, Editare, Vizualizare, Selectare, Adăugare, Obiect, Plasă) și tastele modelatoarelor de plase: {{key:W}} selectare, {{key:G}} mutare, {{key:R}} rotire și {{key:S}} scalare a selecției deodată ({{key:X}}, {{key:Y}} sau {{key:Z}} blochează o axă în timpul mișcării), {{key:E}} push/pull, {{key:B}} dreptunghi, {{key:X}} ștergere, {{key:A}} selectare totală, {{key:Alt+A}} niciuna, {{key:Shift+D}} duplicare, {{key:Mod+G}} grup, {{key:H}} ascundere. Butonul din mijloc orbitează; {{key:Shift}} și butonul din mijloc panoramează, {{key:Mod}} și butonul din mijloc măresc; butonul din dreapta anulează ce face o unealtă. |
| {{ui:Începător}} | O panglică a cărei filă {{ui:Creare}} are câteva butoane mari: forme de așezat, găuri, mutare, rotire și dimensiune, aliniere, {{ui:Grup}} (găurile tăiate în forme) și verificarea pentru imprimare 3D; toate celelalte unelte sunt în fila {{ui:Mai multe instrumente}}. Butonul din dreapta orbitează, cel din mijloc panoramează. Vedeți [Stilul Începător](topic:beginner). |

Stilul de taste pe care îl cunoașteți poate din {{ui:Chei}}, din colțul din dreapta jos al vizualizării, și din {{ui:Editare}} › {{ui:Mai multe}} este aceeași alegere: alegând acolo tastele modelatorului, se alege stilul {{ui:Modeler}}, iar alegând tastele push-pull se trece la stilul {{ui:ModelCraft}}. Dacă ați ales tastele modelatorului într-o versiune mai veche, ModelCraft se deschide o singură dată, de la sine, în stilul {{ui:Modeler}}.

:::tip
O tastă care aparține tastelor push-pull, dar pe care stilul o dă altei comenzi, nu face nimic, iar linia de stare spune unde a ajuns comanda („În Modeler, Push/pull este E”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} și tastele cu săgeți își păstrează mereu sensul, cifrele merg mereu în caseta de valori, iar cât timp o unealtă mută ceva, propriile ei taste au prioritate.
:::

## Personalizați-l

1. Alegeți stilul cel mai apropiat de ce doriți, apoi faceți clic pe {{ui:Personalizare…}}.
2. La {{ui:Taste și meniuri}}, găsiți o comandă (caseta de căutare ajută). Faceți clic pe {{ui:Adăugare tastă}} și apăsați tasta. Faceți clic pe o tastă ca s-o scoateți.
3. Cu o bară de meniu, {{ui:Unde se află}} mută comanda în alt meniu sau în {{ui:Doar taste}}.
4. La {{ui:Mouse}}, setați rotița și ce fac butoanele în vizualizarea 3D.
5. Dați-i un nume și faceți clic pe {{ui:Salvare}}.

Salvarea unui stil încorporat face o copie proprie („My Modeler”); cel încorporat nu se schimbă niciodată. Copia citește tastele la fel ca stilul din care a pornit: una făcută din {{ui:Modeler}} păstrează tastele de mutare, rotire și scalare funcționând simultan.

## Mouse

- **Rotița mouse-ului**: {{ui:Derularea în sus mărește}} (valoarea de start) sau {{ui:Derularea în sus micșorează}}, și cât de repede. Un gest de ciupire pe trackpad mărește mereu în direcția în care se mișcă degetele.
- **Tragerea în vizualizarea 3D**: {{ui:Propriile setări ale fiecărei vizualizări}} păstrează butoanele ModelCraft (butonul din mijloc orbitează, butonul din dreapta sau {{key:Shift}} împreună cu butonul din mijloc panoramează). Sau setați butonul din mijloc și pe cel din dreapta să orbiteze, să panorameze, să mărească sau să nu facă nimic; {{key:Shift}} cu butonul inversează orbitarea și panoramarea. Butonul din stânga aparține întotdeauna uneltei folosite.
- **Trackpad-uri**: {{ui:Setări}} › {{ui:ModelCraft}} › {{ui:Derulare}} tot decide dacă două degete orbitează (trackpad) sau măresc (mouse). Vedeți [Orbitare, panoramare și zoom](topic:orbit-pan-zoom).

## Transportarea stilului

{{ui:Exportare}} salvează stilul în uz ca un mic fișier `.ccinput.json`; {{ui:Import…}} adaugă unul, de pe alt calculator sau de la un coleg. Un fișier importat poate indica doar comenzile proprii ale ModelCraft: tot ce nu este acolo este lăsat deoparte și numărat în linia de stare. {{ui:Ștergeți acest stil}} elimină unul propriu.

:::note
Aceste setări rămân în acest browser. {{ui:Folosește acest stil în toate aplicațiile}} de sub cardurile de stil face ca fiecare aplicație să se deschidă în stilul corespunzător: {{ui:Push-pull}} merge cu stilurile cu bară de meniu ale celorlalte aplicații. {{ui:Modeler}} nu are corespondent în celelalte aplicații, deci rămâne o alegere ModelCraft.
:::

Vezi și: [Acțiuni cu taste și mouse](topic:keyboard) · [Setările ModelCraft](topic:settings) · [Venire de la alți modelatori](topic:coming-from)
