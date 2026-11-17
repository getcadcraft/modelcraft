---
title: Cotați și redimensionați ce ați desenat
summary: Puneți cote între colțuri, pe arce și cercuri sau între două muchii; scrieți o lungime nouă ca să redimensionați modelul. Rescrieți lungimea unei muchii sau lățimea, adâncimea și înălțimea unui grup în Informații entitate.
keywords: cotă, cote, cotare, redimensionare, schimbare dimensiune, editare dimensiune, lungime, lățime, adâncime, înălțime, întindere, cotă motoare, adnotare, măsurare, după fapt, rază, diametru, unghi, unghiular, arc, cerc, R, Ø
from: a1f815ec
---

Dimensiunile din ModelCraft nu sunt fixe odată ce ceva a fost desenat. O **cotă** arată o lungime pe model, iar dacă scrieți o lungime nouă în ea, modelul se redimensionează după ea. Puteți rescrie și lungimea unei muchii, sau lățimea, adâncimea și înălțimea unui grup, în {{ui:Informații entitate}}.

## Punerea unei cote

1. Apăsați {{key:D}}, sau faceți clic pe {{ui:Cotare}} în bara de instrumente.
2. Faceți clic pe un colț de la care să măsurați. Se fixează pe colțuri, mijloace și muchii, ca la desen.
3. Faceți clic pe al doilea colț.

   Sau faceți un singur clic pe o **muchie** (sfatul spune „Pe muchie”) ca s-o cotați întreagă dintr-un clic.
4. Mutați cursorul unde trebuie să fie linia cotei și faceți clic. Puteți scrie și decalajul, de exemplu `0.5m`, și apăsați {{key:Enter}}.

   Linia cotei rămâne orizontală pentru o muchie orizontală, dacă nu o priviți din lateral. Pentru o muchie verticală, rămâne în planul vertical care vă este cel mai potrivit.

Bara de stare spune „Cotă 4 m.”. Cotele își arată lungimea în unitatea modelului și se actualizează când schimbați unitatea din selector.

## Rază, diametru și unghi

Același instrument {{ui:Cotare}} cotează și rotunjimi, și unghiuri:

- **Un arc:** faceți clic pe arc. Sfatul spune {{ui:Rază}}. Mutați cursorul unde trebuie să fie textul și faceți clic: cota arată **R 1.5 m**.
- **Un cerc:** faceți clic pe cerc. Obțineți un **diametru** (**Ø 3 m**), cu o linie peste cerc prin centrul lui. Poligoanele funcționează la fel, cu colțurile lor pe cerc.
- **Unghiul dintre două muchii:** faceți clic pe o muchie, apoi pe a doua muchie care o întâlnește într-un colț (cât timp sunteți peste ea, sfatul spune {{ui:Unghi între muchii}}). Apoi mutați-vă în unghiul dorit și faceți clic. În interiorul colțului obțineți unghiul dintre muchii; mutându-vă pe o parte, obțineți unghiul alăturat (de exemplu 150° în loc de 30°). Cât de departe de colț faceți clic stabilește unde merge arcul; sau scrieți acea distanță.

Ca să treceți o rază la diametru sau invers, selectați cota și alegeți în {{ui:Afișare ca}} din {{ui:Informații entitate}}.

**Redimensionarea cu ele:** scrieți o rază sau un diametru nou chiar după ce ați pus una, sau selectați-o mai târziu și scrieți. Arcul sau cercul își păstrează centrul și își schimbă mărimea; o față pe care o delimitează (un disc, capătul unei fante) se schimbă odată cu el. Două lucruri doar măsoară:

- **O cotă de unghi** nu schimbă niciodată modelul. Ca să schimbați un unghi, rotiți muchiile cu {{ui:Rotire}}.
- **Cercul de la capătul unui cilindru** (un cerc pe care l-ați tras cu {{ui:Împinge/Trage}}) nu poate fi redimensionat din cota lui, pentru că și laturile lui ar trebui să se schimbe. Scalați în schimb cilindrul, în jurul axei lui.

## Redimensionarea modelului cu o cotă

Imediat după ce puneți o cotă, scrieți o lungime nouă și apăsați {{key:Enter}}: `6m`, `12'`, `3500` într-un model în milimetri. Modelul se schimbă la acea mărime.

Mai târziu, oricând:

1. Cu {{ui:Selectare}}, faceți clic pe textul cotei sau pe linia ei. {{ui:Informații entitate}} spune **Cotă** și arată {{ui:Lungime}}.
2. Scrieți lungimea nouă și apăsați {{key:Enter}}. Puteți scrie direct în caseta de valori, sau în caseta {{ui:Lungime}} din {{ui:Informații entitate}}.

### Ce se mișcă

Al doilea colț pe care l-ați făcut clic se mută, și tot ce este dincolo de el:

- **Ambele colțuri pe o singură piesă** (lățimea unei cutii, înălțimea unui perete): latura de la colțul care se mișcă alunecă afară sau înăuntru, iar fețele lipite de ea se întind. O cutie rămâne un solid închis, iar tot ce se află complet pe acea latură, de exemplu o componentă fereastră, se mișcă odată cu ea.
- **Colțurile pe două piese separate** (spațiul dintre două cutii): piesa colțului care se mișcă se mută întreagă, iar spațiul se schimbă.
- **Colțul care se mișcă într-un grup sau o componentă** în care nu este și celălalt colț: se mută tot grupul.
- **Ambele colțuri în același grup sau aceeași componentă**: se întinde în interiorul ei. O componentă se schimbă peste tot unde este plasată, cum se întâmplă mereu când o editați.

Ca să schimbați ce capăt se mișcă, selectați cota și alegeți în {{ui:Se mută}} din {{ui:Informații entitate}}:

| Alegere | Ce se întâmplă |
|---|---|
| {{ui:Al doilea capăt}} (implicit) | Capătul pe care l-ați făcut clic al doilea se mută |
| {{ui:Primul capăt}} | Capătul pe care l-ați făcut clic primul se mută |
| {{ui:Ambele capete (centrat)}} | Fiecare capăt se mută cu jumătate din schimbare, astfel că mijlocul rămâne pe loc |

### Când o redimensionare este refuzată

ModelCraft nu schimbă nimic și spune de ce în bara de stare:

- „o față s-ar îndoi din planul ei”: cota trece oblic prin formă. Cotați de-a lungul unei muchii sau de-a lungul roșu, verde sau albastru.
- „o față s-ar micșora până la nimic sau s-ar întoarce pe dos”: lungimea nouă este prea scurtă pentru formă.
- „capătul care se mișcă nu este pe un colț al modelului”: acel capăt a fost pus în spațiu gol sau pe mijlocul unei muchii. Alegeți celălalt capăt în {{ui:Se mută}}, sau puneți cota pe două colțuri.
- „o lungime trebuie să fie mai mare decât zero”.

Fiecare redimensionare este un pas: {{key:Mod+Z}} o anulează.

## Rescrierea unei mărimi în Informații entitate

Nu aveți întotdeauna nevoie de o cotă:

- **O muchie:** selectați-o. {{ui:Lungime}} din {{ui:Informații entitate}} este o casetă în care puteți scrie. Scrierea unei lungimi în caseta de valori merge și ea. Capătul mai departe pe roșu, apoi pe verde, apoi pe albastru se mută, iar ce este lipit de el se întinde. De exemplu, rescrierea muchiei din față-jos a unei cutii o face mai lată spre dreapta.
- **Un grup sau o componentă:** selectați-l. {{ui:Lățime (roșu)}}, {{ui:Adâncime (verde)}} și {{ui:Înălțime (albastru)}} sunt casete. Latura lui îndepărtată (dreapta, spatele, sus) se mută. Acestea sunt axele proprii ale grupului, dinaintea oricărei rotiri pe care i-ați dat-o.

Apăsați {{key:Enter}} ca să aplicați sau {{key:Esc}} ca să readuceți valoarea veche.

## Cotele urmează modelul

O cotă este atașată de cele două colțuri pe care a fost pusă (un unghi: de colțul ei și de capetele îndepărtate ale celor două muchii; o rază sau un diametru: de arcul sau cercul ei). Mutați, împingeți/trageți sau redimensionați geometria, iar cota urmează și arată noua lungime. Rămâne atașată când transformați geometria în grup sau componentă.

Dacă un capăt a fost pus undeva care nu este un colț (pe o față sau în spațiu gol), sau dacă colțul lui a fost șters, acel capăt rămâne unde era. Cota măsoară în continuare, dar se poate redimensiona doar din celălalt capăt.

## Eliminarea cotelor

- O cotă: selectați-o și apăsați {{key:Delete}}, sau faceți clic pe ea cu {{ui:Ștergere}}.
- Toate cotele: cu nimic selectat, faceți clic pe {{ui:Ștergere toate cotele}} din {{ui:Informații entitate}}.

Cotele se salvează în fișierul `.modelcraft`. Nu se exportă în alte formate, care transportă doar modelul 3D. Un fișier cu cote se deschide și într-un ModelCraft mai vechi, fără ele.
