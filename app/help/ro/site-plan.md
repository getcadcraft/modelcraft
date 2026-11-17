---
title: Modelarea pe un plan de amplasament dintr-un DWG sau DXF
summary: Aduceți un plan CAD de amplasament sau de nivel ca linii pe sol, răspundeți la întrebarea despre unități și trasați-le în fețe și volume.
keywords: plan de amplasament, dwg, dxf, cad, import, schiță, fotografie cu schiță, schiță de mână, schiță pe șervețel, fotografie, hârtie, culori de stilou, blocuri dinamice, stări de vizibilitate, text, hașură, spline, elipsă, față 3D, trasare, plan de nivel, lot, linie de proprietate, unități, substrat, context
from: 3415dc96
---

ModelCraft poate aduce liniile unui desen CAD 2D, ale unui plan de amplasament sau ale unui plan de nivel și le poate așeza pe sol, ca să modelați pe deasupra lor.

## Importul desenului

1. Faceți clic pe {{ui:Import}} din grupul {{ui:Fișier}} (sau trageți fișierul în vizualizarea 3D).
2. Alegeți un fișier `.dwg` sau `.dxf`.

   Un DWG mare durează puțin: bara de stare afișează „Se citește plan.dwg…” până când este încărcat.

3. Dacă desenul nu spune care sunt unitățile lui, o casetă de dialog intitulată „Unități desen” întreabă: „Care este o unitate de desen?” Alegeți {{ui:Țoli}}, {{ui:Picioare}}, {{ui:Milimetri}} sau {{ui:Metri}}. Majoritatea planurilor de amplasament din SUA sunt desenate în picioare, planurile de arhitectură în țoli, iar cele metrice în milimetri.

   Desenul ajunge ca un grup de muchii pe sol, selectat, iar vizualizarea se apropie de el. Bara de stare spune câte muchii au intrat, de exemplu „Importat site.dwg: 1697 muchii pe sol, într-un grup. Descompuneți-l ca să desenați direct pe el.”

## Ce intră

- Linii, polilinii (inclusiv arcele lor), cercuri și arce și blocuri cu tot ce conțin, doar din **spațiul model**. Curbele devin bucăți drepte scurte.
- Liniile, polyliniile, arcele, cercurile, elipsele și spline-urile ajung plate pe sol, ca muchii.
- **Hașurile** devin fețe pe sol, iar insulele lor devin găuri, astfel încât puteți împinge/trage imediat o zonă hașurată.
- **Fețele 3D** și umpleriile solide devin fețe; fețele 3D își păstrează înălțimile.
- **Textul** (text pe un rând, text pe mai multe rânduri și valori de atribute) este desenat ca muchii, cu un scris simplu dintr-o singură linie, la înălțimea, unghiul și alinierea proprii textului. Fontul lui nu este cel al desenului, așa că cuvintele pot fi puțin mai lungi sau mai scurte. Caracterele pentru care scrisul nu are formă sunt desenate ca mici casete și numărate.
- **Cotele** sunt desenate așa cum le arată desenul (liniile, vârfurile de săgeată și textul lor, ca muchii și fețe).
- **Blocurile dinamice** intră așa cum arată desenul: fiecare bloc plasat în starea de vizibilitate cu care a fost salvat și doar liniile acelei stări. Bara de stare le listează cu stările afișate și cu celelalte stări pe care le are fiecare, de exemplu „Receptacle afișat ca Duplex ×38, GFI ×7 (stări: Duplex, GFI)”. ModelCraft nu schimbă stările.
- **Corpurile, regiunile și solidele 3D** (datele ACIS ale desenului) intră ca grupuri proprii: un solid închis ca solid, o regiune sau un corp deschis ca fețe. Fețele plate intră întregi; fețele curbe (cilindri, conuri, sfere, tori, suprafețe spline simple) intră ca triunghiuri mici cu muchii line între ele, astfel încât se văd doar muchiile solidului. O față pe alt tip de suprafață este lăsată deoparte și listată: „Încă nedesenat (solide 3D): …”.
- Nu se importă: puncte, tabele, multiindicatoare (multileaders), imagini și alte tipuri de obiecte. Bara de stare le listează după tip, de exemplu „Neimportat: 12 POINT.” Orice se află pe o aranjare în pagină (spațiul hârtie) este lăsat deoparte, de asemenea, fără să fie listat.
- Straturile nu se păstrează: toate liniile intră la fel.

Dacă desenul este departe de originea lui (de exemplu coordonate de plan de stat), se importă totuși, dar poate ajunge departe de originea ModelCraft. Desenele care depășesc 10,000 km față de originea lor sunt refuzate: mutați mai întâi desenul mai aproape de 0,0 în programul CAD.

## Trasarea în fețe

Liniile importate rareori se închid curat în fețe de la sine. Două moduri de lucru:

**Păstrați planul ca substrat (recomandat)**

1. Lăsați planul ca grup propriu.
2. Desenați clădirea pe deasupra cu {{ui:Dreptunghi}} și {{ui:Linie}}, agățând de colțurile planului („Capăt”) și de muchiile lui („Pe muchie”).
3. Împingeți/trageți fețele în sus. Planul rămâne neatins dedesubt, iar întregul grup îl puteți șterge mai târziu dintr-un singur clic.

Agățarea funcționează între grupuri: puteți agăța de colțurile planului fără să îl deschideți.

**Desenați pe liniile proprii ale planului**

1. Selectați grupul planului și faceți clic pe {{ui:Descompunere}}. Liniile lui devin muchii libere.
2. Acolo unde un contur închis ar trebui să fie o față, desenați o linie peste oricare dintre muchiile lui cu {{ui:Linie}}, de la colț la colț. Când conturul este închis și plat, fața se umple de obicei. Dacă nu, căutați o gaură sau o suprapunere în contur și desenați peste ea.
3. Împingeți/trageți-o.

Acest lucru funcționează cel mai bine pe un plan curat. Pe un plan topografic aglomerat, trasarea pe deasupra este mai rapidă.

## Probleme

- „Acesta este un DXF binar. Salvați-l ca DXF ASCII și încercați din nou.” Salvați din nou DXF-ul din programul CAD, ca ASCII (text).
- „…nu are linii, arce sau cercuri în spațiul model de adus.” Probabil desenul este în întregime pe aranjări în pagină sau conține doar text și hașuri.
- „Acest desen nu a putut fi citit (…). Poate fi deteriorat sau salvat într-o versiune DWG pe care cititorul nu o acceptă…” Între paranteze se spune motivul, de exemplu „Versiunea DWG AC1009 nu este acceptată”. Salvați-l din programul CAD ca DXF sau ca DWG de la AutoCAD 2000 până la 2018.
- Planul are dimensiunea greșită: ați ales unitatea greșită. Anulați ({{key:Mod+Z}}) și importați din nou sau [scalați](topic:rotate-scale) grupul cu factorul corect (12 între picioare și țoli, 25.4 între țoli și milimetri).

Pentru a transforma liniile de nivel în teren pe care îl puteți modela, vezi [Teren](topic:terrain).

## Dintr-o fotografie a unei schițe de mână

**Fișier › Importare fotografie cu schiță…** ia o fotografie a unei schițe pe hârtie (JPEG, PNG sau TIFF; direct de pe telefon este în regulă) și face același fel de muchii pe sol. Spuneți ce hârtie este (sau lăsați aplicația să găsească foaia, luată ca A4) și scara schiței, de exemplu 1 : 100. Marginea hârtiei este găsită și fotografia este îndreptată, cerneala este trasată în linii și arce, iar fiecare culoare de stilou (negru, roșu, albastru, verde) devine un grup propriu, cu o etichetă (**Schiță neagră**, **Schiță roșie**, …), toate într-un grup numit după fotografie. Este un singur pas de anulare, iar totul se întâmplă pe acest calculator: nimic nu este trimis nicăieri.

Când nu se poate găsi o margine a hârtiei, întreaga fotografie este luată ca foaie, iar linia de stare o spune: măsurați ceva cunoscut și scalați grupul dacă este greșit. Trasați liniile în fețe ca mai sus.
