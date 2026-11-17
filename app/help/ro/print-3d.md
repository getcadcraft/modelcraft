---
title: Pregătirea unui model pentru imprimare 3D
summary: Verificați că un model este închis și că fețele sunt orientate corect, vedeți dimensiunea, baza și porțiunile în consolă, reparați ce nu este în regulă și descărcați-l ca STL sau 3MF pentru slicer.
keywords: imprimare 3d, imprimantă, imprimare, slicer, stl, 3mf, etanș, închis, varietate, solid, găuri, pe dos, porțiune în consolă, suporturi, bază, pat, milimetri, export, reparare, golire, dimensiunea patului, începător, grosimea peretelui, unelte de imprimare
from: 948e19af
---

Slicerul unei imprimante 3D are nevoie de o formă închisă: fără găuri, cu fiecare față orientată spre exterior și fără să treacă prin ea însăși. {{ui:Export}} › {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}} verifică exact asta înainte să descărcați fișierul.

## Verificați și descărcați

1. Selectați ce doriți să imprimați: unul sau mai multe grupuri ori componente, sau unele fețe. Fără nimic selectat, se imprimă tot ce este afișat.
2. Faceți clic pe {{ui:Export}} din grupul {{ui:Fișier}}, apoi pe {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}.

   Dialogul începe cu o linie: „Gata de imprimare”, câte lucruri trebuie reparate înainte de imprimare sau câte trebuie verificate mai întâi. Fiecare problemă are trei părți: ce nu este în regulă, de ce contează și ce de făcut. Apoi urmează dimensiunea în milimetri, volumul, numărul de triunghiuri și patul imprimantei.

3. Dacă dialogul listează lucruri de reparat, faceți clic pe {{ui:Reparare ce se poate repara}} (vezi mai jos). Verificarea rulează din nou singură.
4. Faceți clic pe {{ui:Descărcare 3MF}} sau {{ui:Descărcare STL}}.

Se imprimă ceea ce vedeți: fețele ascunse, grupurile și componentele ascunse și orice este pe o etichetă ascunsă rămân afară. Dimensiunile sunt mereu în milimetri, unitatea pe care o așteaptă slicerele, oricare ar fi unitatea afișată de model.

:::tip
Preferați 3MF, dacă slicerul îl citește: păstrează culorile și unitățile. STL nu are niciuna, iar slicerele presupun milimetri.
:::

## Ce verifică

Acestea opresc o imprimare sau o strică și fac dialogul să spună „Nu este gata de imprimare”:

| Problemă | Ce înseamnă | Ce de făcut |
|---|---|---|
| O față doar pe o parte | O gaură: o muchie are o față pe o parte și nimic pe cealaltă | Desenați fața lipsă (o linie peste gol o închide adesea), sau folosiți {{ui:Reparare}} (mai jos) |
| Comună cu trei sau mai multe fețe | Fețele se întâlnesc într-o aripioară sau un perete în interiorul unui solid | Ștergeți fața interioară |
| Fețe orientate în sensuri opuse | Unele fețe arată spre interior, altele spre exterior | Selectați fețele care arată spre interior și faceți clic pe {{ui:Inversare față}} în {{ui:Informații entitate}} |
| Pe dos | O piesă închisă întreagă arată spre interior | Selectați fețele ei și inversați-le |
| Trece prin ea însăși | O piesă se pliază prin ea însăși | {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Intersecție cu modelul}}, apoi ștergeți ce este înăuntru. Vezi [Intersectarea fețelor](topic:intersect) |

Acestea sunt avertismente: modelul se imprimă, dar aruncați o privire înainte.

- **Piesele separate se suprapun** sau **se ating față în față**: slicerele le unesc de obicei într-una. Pentru un fișier mai curat, uniți-le cu {{ui:Solide}} › {{ui:Reuniune}}. Vezi [Unelte pentru solide](topic:solids).
- **Nimic nu stă plat jos**: întoarceți modelul astfel încât o față să se odihnească pe pat, altfel slicerul adaugă suporturi sau o plută.
- **Se înclină spre exterior cu mai mult de 45° față de verticală**: acele fețe au nevoie de suport. Dialogul spune cât din suprafață.
- **Sub 1 mm pe lățime**: probabil modelat într-o altă unitate. Verificați unitatea din bara de stare.

O piesă goală (o carcasă închisă în alta) este în regulă: fețele ei arată spre gol, iar volumul ei este scăzut.

## Reparați problemele

Sub **Unde sunt problemele**, dialogul numește fiecare grup sau componentă care are ceva în neregulă (fețele libere care nu sunt într-un grup sunt listate ca „Fețe fără grup”), cu ce nu este în regulă în el. O componentă plasată de mai multe ori este listată o singură dată: reparând-o, reparați fiecare copie.

- {{ui:Afișare}} deschide acel grup și selectează muchiile și fețele greșite, ca să fie evidențiate.
- {{ui:Reparare ce se poate repara}} repară toate deodată: închide găurile ale căror muchii stau plate, înlătură fețele din interiorul formei și muchiile rătăcite și întoarce fețele spre exterior. Este un singur pas: {{key:Mod+Z}} îl anulează. Verificarea rulează apoi din nou și arată ce mai rămâne.

Ce nu poate repara (o gaură ale cărei muchii nu stau plate, o piesă care trece prin ea însăși) rămâne în listă, cu ce trebuie făcut manual. {{ui:Reparare}} de sub **Unelte de imprimare** merge mai departe: închide găurile care nu sunt plate, înlătură bucățile rătăcite și fețele dublate și listează fiecare reparație. Vezi [Suporturi, grosimea peretelui, golire și reparare](topic:print-tools#repair). Puteți repara și un grup pe rând: selectați-l, apoi folosiți {{ui:Afișare probleme}} și {{ui:Reparare}} în {{ui:Informații entitate}}. Vezi [Unelte pentru solide](topic:solids).

## O piesă goală

{{ui:Golire}} de sub **Unelte de imprimare** golește o piesă la grosimea peretelui pe care o dați, cu găuri de scurgere acolo unde faceți clic. Vezi [Golire](topic:print-tools#hollow).

Puteți desena și golirea singuri: un grup închis în interiorul piesei, care nu o atinge, cu toate fețele inversate astfel încât să arate spre gol. Verificarea îl numără ca gol și îi scade volumul; nu este listat ca ceva de reparat.

## Patul imprimantei

Alegeți dimensiunea patului imprimantei în {{ui:Setări}} › {{ui:ModelCraft}} › {{ui:Platforma imprimantei 3D}}. Verificarea avertizează atunci când modelul este mai mare decât patul, rotit în oricare sens. Vezi [Setările](topic:settings#3d-printer-bed).

## Unelte de imprimare

Sub constatările dialogului, **Unelte de imprimare** deschide {{ui:Previzualizare suporturi}} (unde merg suporturile și cât aproximativ), {{ui:Grosimea peretelui}} (pereții prea subțiri ca să fie tipăriți), {{ui:Golire}} și {{ui:Reparare}}. Vezi [Suporturi, grosimea peretelui, golire și reparare](topic:print-tools). {{ui:Divizare pentru imprimare}} taie un model prea mare pentru pat în bucăți, cu conectori și îmbinări numerotate: vezi [Împărțirea unui model mare pentru imprimare](topic:print-split).

## Nu se verifică

Verificarea nu feliază: detaliile prea mici pe care duza nu le poate desena și suporturile reale țin de slicer. Vezi [Încă nerealizat](topic:not-built-yet#3d-printing).
