---
title: Obiecte curbă
summary: Desenați curbe Bézier, NURBS și segmente drepte, dați-le o grosime, o lățime sau o conicitate, umpleți cele plate, scrieți text ca o curbă și transformați-le în plase.
keywords: curbă, curbe, bezier, nurbs, spline, splines, traseu, tub, țeavă, cablu, funie, grosime, extrudare, conicitate, înclinare, rază, umplere, profil, text, litere, logo, curbă în plasă
from: 602bf077
---

Un **obiect curbă** este o curbă care face o formă: un tub de-a lungul ei (grosime), o bandă (extrudare), o trompetă care se îngustează (conicitate) sau — când este plată și închisă — o placă umplută sau litere. Forma urmează curba: mutați un punct și tubul se mută odată cu el. Când forma este corectă, transformați-o într-o plasă.

## Adăugarea unei curbe

Alegeți {{ui:Curbă}} din lista spațiilor de lucru și apăsați {{ui:Adăugare}}:

| Fel | Ce este |
| --- | --- |
| Curbă Bézier, cerc Bézier | Trece prin punctele sale; fiecare punct are două mânere care stabilesc direcția curbei |
| Curbă NURBS, cerc NURBS, Traseu | Netedă, trasă spre punctele sale (pornește și se oprește în punctele sale de capăt); fiecare punct are o pondere |
| Text | Textul ca contururi de litere plate, umplute |

O curbă nouă primește un tub subțire, ca să fie văzută și selectată; setați adâncimea grosimii la 0 pentru o curbă goală.

Puteți porni și de la ceva desenat: selectați un arc, un cerc, un poligon sau o curbă desenată în spațiul de lucru Model și apăsați {{ui:Creare obiect curbă}} în {{ui:Informații entitate}}. Liniile desenate rămân.

## Editarea punctelor

Faceți dublu clic pe un obiect curbă (sau selectați-l și alegeți {{ui:Curbă}}) ca să îl editați.

- Faceți clic pe un punct sau pe un mâner ({{key:Shift}} adaugă sau scoate); trageți-l ca să îl mutați. Trageți pe spațiul gol ca să selectați cu o casetă.
- {{ui:Prelungire}} ({{key:E}}, sau {{key:Ctrl}}+clic) adaugă un punct după capătul selectat, la cursor.
- {{ui:Subdivizare}} ({{key:W}}) pune un punct între fiecare pereche de vecini selectați; o Bézier își păstrează forma.
- {{ui:Mutare}}, {{ui:Rotire}}, {{ui:Scalare}} mută punctele selectate cu cursorul (tastele din modelator {{key:G}} {{key:R}} {{key:S}}, tastele împingere/tragere {{key:M}} {{key:Q}} {{key:S}}); faceți clic ca să păstrați, {{key:Esc}} ca să anulați.
- {{ui:Închidere}} ({{key:C}}) închide o spline deschisă sau deschide una închisă; {{ui:Inversare}} ({{key:Shift+R}}) o parcurge în sens invers.
- Mânerele Bézier: {{ui:Netezire}} ({{key:V}}) le așază pentru o curbă netedă, {{ui:Colț}} ({{key:Shift+V}}) le îndreaptă spre vecini, {{ui:Liber}} ({{key:Alt+V}}) le lasă unde le-ați pus. Trăgerea unui mâner îl face liber.
- {{ui:Bézier}}, {{ui:NURBS}} și {{ui:Poli}} schimbă tipul splinelor selectate, păstrând punctele.

Fiecare modificare este un pas de anulare.

## Forma

Setările sunt în panou (și în {{ui:Informații entitate}} din spațiul de lucru Model):

- **Formă:** curbele 3D merg oricum; o curbă plată rămâne în planul ei și poate fi umplută.
- **Umple splinele închise** (plate): contururile devin o placă; un contur în interiorul altuia este o gaură, astfel că literele își păstrează găurile.
- **Extrudare:** jumătate din lățimea benzii (curbe deschise sau 3D), sau jumătate din grosimea plăcii (umplută).
- **Adâncimea grosimii** și **rotunjimea:** un tub rotund de-a lungul curbei (cu extrudare: o bandă rotunjită); pe o formă umplută, o muchie rotunjită.
- **Închiderea capetelor:** capace pe un tub deschis.
- **Conicitate de-a lungul ei:** scalează uniform de-a lungul fiecărei spline, de exemplu `1, 0.2` pentru o trompetă, `0, 1, 0` pentru un fus.
- **Netezimea** și, pentru NURBS, **ordinul:** cât de fin este desenată și cât de netedă (de la 2, drept, până la 6, cel mai neted).
- Cu puncte selectate: **raza** (grosimea tubului acolo, înmulțită cu adâncimea grosimii), **înclinarea** (rotește banda în jurul curbei) și, pentru NURBS, **ponderea**.

Modificatorii funcționează peste un obiect curbă ca pe o plasă: o matrice de-a lungul ei, o oglindire, o suprafață Subdivision. Vezi [Modificatori pe o plasă](topic:modifiers).

## Transformarea într-o plasă

{{ui:În plasă}} (în spațiul de lucru Curbă sau, în {{ui:Informații entitate}}, {{ui:Curbă în plasă}}) transformă obiectul curbă în plasa pe care o arată acum; modificatorii lui rămân deasupra. Apoi editați-o în spațiul de lucru Plasă. {{ui:Anulare}} o readuce la curbă.

Vezi și [Plase](topic:meshes) și [Editarea unei plase](topic:mesh-edit).
