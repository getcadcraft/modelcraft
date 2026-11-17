---
title: Desenarea fețelor cu linii, dreptunghiuri, cercuri și arce
summary: Creați fețe plane pe sol sau pe alte fețe, împărțiți-le cu linii și desenați cercuri și poligoane cu numărul de laturi dorit.
keywords: desenare, linie, dreptunghi, cerc, poligon, decalare, retragere, cadru, bordură, arc, curbă, spline, netezire, cablu, traseu, bombare, rază, față, plan de etaj, amprentă, împărțire, laturi, segmente, contur, creion
from: b6d7b7dd
---

Totul în ModelCraft începe ca o **față** plană: o suprafață închisă de muchii. Puteți desena direct o față cu {{ui:Dreptunghi}}, {{ui:Cerc}} sau {{ui:Poligon}}, ori puteți contura câte o muchie pe rând cu {{ui:Linie}}. Fețele sunt ceea ce [Împinge/Trage](topic:push-pull) transformă în solide.

## Desenarea unui dreptunghi

1. Apăsați {{key:R}}.
2. Faceți clic pe primul colț: pe sol sau pe orice față a modelului.
3. Mutați cursorul. Dreptunghiul rămâne pe sol (sau pe fața de la care ați pornit), iar caseta de valori ({{ui:Cote}}) arată lățimea și adâncimea lui. Sfatul spune „Pătrat” când laturile sunt egale.

   Pentru a desena pe alt plan, indicați-l cu cursorul: o față care trece prin primul colț așază dreptunghiul pe acea față, iar agățarea de un punct din afara planului (un capăt, o muchie, axa albastră) ridică dreptunghiul în picioare prin ambele colțuri. Agățați din nou de un punct de pe primul plan și acesta se așază iarăși culcat. Pentru a păstra un plan, apăsați o tastă cu săgeată: {{key:Up}} menține dreptunghiul orizontal (planul albastru), {{key:Right}} pe planul roșu, {{key:Left}} pe planul verde. Apăsați aceeași tastă din nou pentru a debloca.
4. Faceți clic pe colțul opus sau tastați cele două dimensiuni separate printr-o virgulă și apăsați {{key:Enter}}: `4m,3m`, `4000,3000` într-un model în milimetri sau `12',10'6"` în picioare și inchi.

   Apare o față cu patru muchii în jurul ei.

Dimensiunile tastate merg în direcția în care indicați: dacă, la tastare, cursorul se află la stânga primului colț, dreptunghiul crește spre stânga.

:::warning
Virgula separă cele două dimensiuni, deci nu poate fi separator zecimal. Tastați `2.5m,3m`, niciodată `2,5m`.
:::

## Desenarea unui cerc sau a unui poligon

1. Apăsați {{key:C}} pentru un cerc sau {{key:N}} pentru un poligon.
2. Pentru a schimba numărul de laturi, tastați-l înainte de a face clic: `12s` (sau doar `12`) și {{key:Enter}}. Un cerc începe cu 24 de laturi, iar un poligon cu 6. Sfatul afișează numărul curent, iar ModelCraft îl păstrează pentru următorul cerc până când îl schimbați sau schimbați instrumentul.
3. Faceți clic pe centru, pe sol sau pe o față. Pentru a-l centra pe o față, indicați mijlocul feței („Centrul feței”) sau mijlocul uneia dintre muchiile sale („Mijloc”), cu cursorul chiar în interiorul acelei fețe: cercul este desenat pe acea față, chiar și pe capătul îngust al unei cutii lungi.
4. Faceți clic pentru a stabili raza, sau tastați-o ({{ui:Rază}} din caseta de valori) și apăsați {{key:Enter}}.

Un cerc este un poligon cu multe laturi. Când trageți un cerc în sus cu Împinge/Trage, laturile sale sunt netezite, astfel încât cilindrul apare ca o singură suprafață netedă.

## Desenarea unui arc

1. Apăsați {{key:A}} ({{ui:Arc}}).
2. Faceți clic unde începe arcul, apoi unde se termină (sau tastați lungimea dintre ele).
3. Mutați cursorul pentru a bomba arcul spre exterior și faceți clic. Sfatul spune „Semicerc” când bombarea este jumătate din distanța dintre capete. Sau tastați cât se îndepărtează mijlocul: `2` și {{key:Enter}}.

Pentru a desena în schimb un arc în jurul unui punct, folosiți {{ui:Arc din centru}}: faceți clic pe centru, apoi unde începe arcul (sau tastați raza), apoi unde se termină (sau tastați unghiul în grade, precum `90`). Se agață din 15° în 15°.

Un arc pornit de pe o față este desenat pe acea față; altfel se află pe sol sau stă vertical când cele două capete sunt la înălțimi diferite. Un arc are 12 segmente; tastați `24s` în timpul desenării pentru mai multe. Arcele închid fețe la fel ca liniile: un arc peste colțul unui dreptunghi îl împarte.

## Desenarea unei curbe netede

{{ui:Curbă}} desenează o linie netedă care trece prin fiecare punct pe care îl faceți clic: un cablu, traseul unei balustrade, marginea unei grădini. Poate părăsi solul: punctele se agață de colțuri, muchii și fețe oriunde, iar tastele cu săgeată blochează roșu, verde sau albastru, ca la {{ui:Linie}}.

1. Faceți clic pe {{ui:Curbă}} în grupul {{ui:Desenare}}.
2. Faceți clic pe punctele prin care trece curba. Tastați `<0,0,1>` și apăsați {{key:Enter}} pentru un punct cu 1 deasupra ultimului, `[x,y,z]` pentru un loc exact, sau o lungime pentru un punct atât de departe spre cursor.
3. Apăsați {{key:Enter}} sau faceți dublu clic pentru a termina. Faceți clic din nou pe primul punct pentru a închide curba. {{key:Backspace}} anulează ultimul punct.

O curbă se selectează ca o singură piesă. Pentru a o modifica, selectați-o și faceți clic pe {{ui:Editare puncte}} din {{ui:Informații entitate}}: punctele sale apar ca pătrățele. Faceți clic pe unul, apoi faceți clic unde trebuie să ajungă (sau tastați `<dx,dy,dz>`). {{key:Esc}} anulează mutarea punctului și încheie editarea. O curbă plană închisă face o față; o curbă care conturează o față nu mai poate fi editată.

## Decalare: o bordură în interiorul sau în exteriorul unei fețe

{{ui:Decalare}} copiază conturul unei fețe la o distanță stabilită în interiorul ei (sau în exterior), pentru un cadru, o bordură, un pervaz sau sticla unui ecran.

1. Apăsați {{key:F}} și faceți clic pe față, sau selectați mai întâi fața și apoi apăsați {{key:F}}.
2. Mutați cursorul în interiorul fețe pentru un contur interior, sau în afara ei pentru unul exterior. Noul contur urmează cursorul, iar sfatul arată distanța.
3. Faceți clic sau tastați distanța și apăsați {{key:Enter}}.

Fața se împarte în două: fața interioară și un cadru în jurul ei (sau un inel nou în exterior). Folosiți Împinge/Trage pe oricare dintre ele, imediat: pentru un ecran, desenați cutia, împingeți-o la grosimea ei, decalați fața din față cu 30 mm spre interior și împingeți puțin fața interioară pentru sticlă. Golurile din față sunt și ele decalate, iar un arc sau un cerc rămâne o singură curbă (mai mică sau mai mare).

- **Dublu clic** pe o față cu {{ui:Decalare}} pentru a o decala din nou cu ultima distanță.
- **Muchii:** selectați un lanț de muchii conectate într-un plan (de exemplu cele două linii ale unui L), apăsați {{key:F}}, mutați-vă pe partea dorită și tastați distanța: se desenează o copie paralelă, cu colțuri tăiate la 45°.
- Când distanța depășește ce permite fața, ModelCraft anunță și nu desenează nimic.

## Arcele, cercurile și poligoanele sunt curbe

Faceți clic pe orice segment al unui arc, al unui cerc sau al unui poligon și se selectează întreaga curbă. {{ui:Informații entitate}} arată apoi raza, segmentele, unghiul (pentru arce) și lungimea. Tastați acolo o rază nouă pentru a redimensiona curba față de centrul ei; fețele desenate în planul ei urmează. Odată ce fața unei curbe a fost împinsă sau trasă, raza ei rămâne neschimbată.

## Desenarea cu linii

1. Apăsați {{key:L}}.
2. Faceți clic unde începe linia.
3. Faceți clic unde se termină, sau tastați o lungime și apăsați {{key:Enter}}. Lungimea tastată merge în direcția arătată de cursor.
4. Continuați să faceți clic. Fiecare clic pornește următoarea linie de la capătul ultimei.
5. Închideți conturul făcând clic din nou pe primul punct. Când liniile închid o buclă plană, aceasta se umple cu o față, iar instrumentul nu mai înlănțuie. Apăsați {{key:Esc}} pentru a opri oricând.

Liniile urmează direcțiile roșu, verde și albastru când vă apropiați de ele; linia își schimbă culoarea, iar sfatul spune „Pe axa roșie”. Vedeți [Deducerea și agățarea](topic:inference) pentru a bloca o direcție și a agăța de puncte.

### Unde merge o linie când nu atinge nimic

- O linie care pornește de pe o față rămâne în planul acelei fețe.
- O linie care pornește de pe sol sau din spațiul gol rămâne la același nivel cu punctul ei de start. Dacă priviți modelul din profil, aceasta merge în planul vertical orientat spre vizualizare.
- Pentru a desena o linie până la un loc exact, tastați un punct: `[x,y,z]` pentru un punct din model sau `<dx,dy,dz>` pentru o decalare față de start. Vedeți [Tastarea dimensiunilor exacte](topic:value-box).

## Împărțirea unei fețe

Desenați o linie peste o față, de la o muchie la alta (sau de la muchie la muchie, prin alte linii). Fața se împarte în două fețe. Fiecare își păstrează partea și culoarea. Același lucru funcționează și cu un dreptunghi sau cerc desenat pe o față: forma devine propria față în interiorul celei mari, care acum are un gol.

Așa așezați camere pe un planșeu, o fereastră pe un perete sau o treaptă pe o scară: desenați conturul pe față, apoi împingeți sau trageți noua față.

## Fețe orientate în direcția greșită

Fiecare față are o parte din față și una din spate. Spatele apare gri-albăstrui. Fețele desenate pe sol sunt orientate în sus; fețele desenate pe altă față sunt orientate la fel ca aceasta.

Dacă o față arată spatele acolo unde vă așteptați la față, selectați-o și faceți clic pe {{ui:Inversare față}} din {{ui:Informații entitate}}.

## Ce vedeți în timpul desenării

- Un marcaj colorat acolo unde cursorul se agață, iar numele său în sfatul din stânga jos.
- O previzualizare a liniei sau a formei.
- Dimensiunea în timp real din caseta de valori. Puteți tasta peste ea oricând.

## Dacă forma nu este unde v-ați așteptat

- Pe un ecran tactil, vedeți [Depanare](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Dacă o linie s-a agățat de ceva aflat departe în spate, rotiți puțin vizualizarea: punctele ascunse în spatele unei fețe nu se agață niciodată, dar cele de pe muchia ei se agață.
- Apăsați {{key:Mod+Z}} pentru a anula ultima formă; o anulare elimină o linie sau o formă.
