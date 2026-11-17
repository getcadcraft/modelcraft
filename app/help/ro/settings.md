---
title: Setările ModelCraft
summary: Alegeți stilul de taste pe care îl cunoașteți, orbitați și panoramați cu touchpadul fără butoanele camerei și activați sau dezactivați agățarea și coliziunile corpurilor solide.
keywords: setări, preferințe, comenzi, stil de taste, mapare taste, scurtături, blender, touchpad, trackpad, derulare, orbitare, ciupire, agățare, coliziune, suprapunere, intersecție, trecere prin
from: caf77d5b
---

Deschideți {{ui:Setări}} cu pictograma roată dințată din bara aplicației sau cu {{key:Mod+,}}. Prima filă, {{ui:ModelCraft}}, conține setările care aparțin acestei aplicații; {{ui:General}} conține cele pe care le au în comun toate aplicațiile CadCraft (tema, bara de instrumente, panourile). Setările ModelCraft există doar în aplicație: le schimbați aici, iar acest browser le reține.

## Comenzi: ce taste și ce butoane de mouse

Două stiluri de taste. Le comutați aici, cu {{ui:Taste: Împinge/Trage}} / {{ui:Taste: Modelator}} din dreapta jos a vizualizării, sau la sfârșitul meniului {{ui:Mai multe}} din bara de instrumente:

- **Stilul Împinge/Trage** (cel de la început; literele modelatoarelor de tip împinge-trage, cum este SketchUp): o literă alege un instrument: {{key:L}} linie, {{key:R}} dreptunghi, {{key:P}} împingere/tragere, {{key:M}} mutare, {{key:Q}} rotire, {{key:S}} scalare, {{key:G}} creare componentă. Vezi [Taste și acțiuni ale mouse-ului](topic:keyboard).
- **Stilul Modelator** (tastele modelatoarelor cu plase, cum este Blender): selectați mai întâi, apoi acționați imediat asupra selecției. {{key:G}} o mută, {{key:R}} o rotește și {{key:S}} o scalează de unde se află indicatorul, fără primul clic. Cât timp se mută, {{key:X}}, {{key:Y}} sau {{key:Z}} blochează axa roșie, verde sau albastră, o distanță tastată stabilește distanța (sau gradele, sau factorul), iar un clic sau {{key:Enter}} o fixează; {{key:Esc}} sau un clic cu butonul din dreapta o readuce la loc. Apoi reveniți la {{ui:Selectare}}.

Stilul de taste Modelator este același lucru cu stilul de meniu {{ui:Modeler}}, iar alegerea unuia o alege pe celălalt. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse). Lista completă a stilului Modelator se află în [Taste și acțiuni ale mouse-ului](topic:keyboard#modeler-keys). Indicațiile de pe bara de instrumente și de pe cardul de pornire urmează stilul ales.

## Derulare: rotița mouse-ului sau touchpadul

- **Determinare automată** (cea de la început): ModelCraft urmărește derularea. Derularea laterală sau fină, cum trimite un touchpad, orbitează; pașii întregi ai rotiței măresc sau micșorează.
- **Rotița mouse-ului**: derularea mărește sau micșorează întotdeauna spre indicator.
- **Touchpad**: glisați cu două degete ca să orbitați, țineți apăsată {{key:Shift}} și glisați ca să panoramați, ciupiți ca să măriți. Nu aveți nevoie niciodată de butoanele {{ui:Orbitare}}, {{ui:Pan}} sau {{ui:Zoom}}.

Un gest de ciupire mărește în orice alegere. Dacă {{ui:Determinare automată}} nu se potrivește cu mouse-ul sau touchpadul pe care îl aveți, alegeți tipul corect.

:::tip
În stilul Modelator puteți orbita și ținând apăsată {{key:Alt}} și trăgând, iar panorama cu {{key:Alt+Shift}} și o tragere, util pe un laptop fără buton din mijloc.
:::

## Agățare

**Agățarea la puncte, muchii și axe** (activată la început) trage indicatorul spre capete, mijloace, muchii, ghidaje și axele roșie, verde și albastră; vezi [Inferență](topic:inference). Dezactivați-o când doriți să plasați ceva liber, lângă alte geometrii, fără să sară. Fețele, solul și blocajele pe axe funcționează și cu agățarea dezactivată.

Butonul {{ui:Agățare}} din dreapta jos a vizualizării face același lucru pentru lucrul din această sesiune (este salvat și el). În stilul Modelator, {{key:Shift+Tab}} îl comută.

## Corpurile solide se opresc la atingere

**Oprirea corpurilor solide la atingere** (activată la început) împiedică un perete să fie tras prin alt perete. Cu {{ui:Mutare}} (și cu {{key:G}}, și cu duplicarea prin {{key:Mod+D}} urmată de mutare), selecția alunecă până la celălalt corp solid și se oprește lângă el; cu {{ui:Împinge/Trage}} o față se oprește acolo unde întâlnește alt corp solid. Stând pe ceva și alunecând de-a lungul lui, lucrurile sunt permise: doar intrarea în interior este oprită. Lucrurile care se suprapun deja la început pot fi totuși separate.

Ca să treceți ceva prin altceva intenționat, faceți clic pe {{ui:Coliziune}} din dreapta jos (sau dezactivați setarea), efectuați mutarea și apoi faceți din nou clic pe el.

:::note
Coliziunile sunt verificate la mutări și la împingere/tragere. {{ui:Rotire}} și {{ui:Scalare}} nu le verifică încă, iar geometria liberă care se atinge se unește, ca întotdeauna: țineți obiectele separate în [grupuri](topic:groups-components), ca să rămână separate.
:::

## Patul imprimantei 3D

Dimensiunea patului imprimantei dumneavoastră: {{ui:Nesetată}} (la început), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 sau 300 × 300 × 400 mm. Alegeți dimensiunea cea mai apropiată de volumul de construcție al imprimantei. [Verificarea pentru imprimare 3D](topic:print-3d) indică apoi când un model depășește patul; cu {{ui:Nesetată}}, dimensiunea nu este verificată.

## Orbitare și panoramare

**Orbitare în jurul a ceea ce se află sub cursor** (activată la început): orbitarea se învârte în jurul părții din model aflate sub indicator, iar panoramarea păstrează acel punct sub indicator; peste spațiul gol, ambele folosesc centrul vizualizării. Dezactivați-o ca să orbitați întotdeauna în jurul centrului vizualizării. **Viteza de orbitare** și **Viteza de panoramare** variază de la 0.25× la 3× (1× este valoarea de la început) și se aplică mouse-ului, touchpadului, ecranului tactil și tastelor săgeți. Vezi [Orbitare, panoramare și zoom](topic:orbit-pan-zoom).

## Indicator de colț

Ce apare în colțul vizualizării 3D: **ViewCube** (la început; dreapta sus: faceți clic pe o față, o muchie sau un colț ca să priviți de acolo, trageți-l ca să orbitați, trageți inelul busolei ca să rotiți modelul), **Pictogramă axe** (un mic marcaj X, Y, Z în stânga jos, care se rotește odată cu vizualizarea: X roșu, Y verde, Z albastru) sau **Niciunul**. Vezi [ViewCube](topic:view-cube).
