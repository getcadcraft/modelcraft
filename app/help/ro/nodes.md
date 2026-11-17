---
title: Noduri: construirea unui model prin conectare
summary: Conectați numere în puncte, puncte în curbe și curbe în suprafețe. Schimbați un număr și tot ce depinde de el se reconstruiește. Fiecare nod este și o linie de CraftScript, iar graful este salvat în fișier.
keywords: noduri, editor de noduri, scriere vizuală, parametric, graf, fire, porturi, formă liberă, free-form, nurbs, loft, extrudare, revoluție, cerc, curbă, suprafață, serie, interval, aleatoriu, listă, script, craftscript, grasshopper
from: 9c8e254f
---

Editorul **Noduri** construiește geometria prin conectarea unor casete. Fiecare casetă (un nod) face o sarcină mică: creează un număr, un punct, un cerc, un loft. Conectați rezultatul unuia la intrarea următorului, iar modelul urmează când schimbați un număr de la început.

Deschideți-l din panoul din dreapta: {{ui:Noduri}} › {{ui:Noduri…}}. Un fișier care are deja un graf îl deschide singur. Este o fereastră peste vizualizarea 3D: trageți de bara de titlu ca s-o mutați, trageți de colț ca s-o redimensionați.

## Conectarea

1. Alegeți un nod din lista din stânga (scrieți în caseta de căutare ca să restrângeți lista; <kbd>Enter</kbd> adaugă primul rezultat). Apare în mijlocul pânzei.
2. Trageți de la un punct rotund de **ieșire**, din dreapta unui nod, până la un punct rotund de **intrare**, din stânga altui nod. Punctul devine verde când se potrivește și roșu când nu; treceți cu indicatorul peste el ca să vedeți motivul.
3. O intrare fără conexiune arată o casetă pentru o valoare scrisă. Scrieți un număr și apăsați <kbd>Tab</kbd>: rezultatul se reconstruiește.
4. Cercul mic din bara de titlu a unui nod este **ochiul** lui. Un nod cu ochiul activat este desenat în vizualizarea 3D: ca linii pentru curbe, umbrit pentru suprafețe, ca puncte pentru puncte.

Trageți un nod de bara lui de titlu. Trageți fundalul ca să deplasați vederea și rotiți rotița ca să măriți. <kbd>Delete</kbd> șterge nodul selectat. {{ui:Aranjare}} așază nodurile în coloane, {{ui:Potrivire}} le aduce pe toate în vedere, iar {{ui:Anulare}} și {{ui:Refacere}} parcurg modificările.

## Tipuri și unități

Porturile au un tip: număr, da/nu, punct, vector, curbă, suprafață, plasă (mesh), solid sau „geometrie” pentru oricare dintre acestea. Un punct poate alimenta o intrare de vector și invers. Numerele au o unitate: o **lungime** este în milimetri, iar un **unghi** în grade. O lungime nu poate alimenta un unghi, iar o lungime înmulțită cu o lungime (o arie) este refuzată, deci o conexiune greșită este oprită chiar când o faceți.

Un punct pătrat este o **listă**. Când o listă ajunge la o intrare cu o singură valoare, nodul rulează o dată pentru fiecare element, iar rezultatul devine o listă. Lista mai scurtă repetă ultimul ei element. De exemplu, o **Serie** de înălțimi conectată la **Mutare** face o stivă de copii.

## Solide și operații booleene ca noduri

Grupul **Solide** creează corpuri închise din aceleași suprafețe exacte ca panoul Suprafețe: **Solid cutie**, **Solid cilindru** și **Solid sferă** (dimensiuni în mm), **Reuniune**, **Scădere** și **Intersectare** (al doilea solid se ia din primul; toleranța este cât de departe pot fi triunghiurile motorului de solide de suprafețele exacte), **Racordare între fețe** (fețele după numărul lor în solid, 1 pentru prima; o rază și, dacă este mai mare decât zero, o rază la capăt), **Volum solid** (mm³) și **Solid în plasă** (ca să-l vedeți sau să-l transformați). Un solid are propriul tip de port: un punct sau un număr nu pot fi conectate la o intrare de solid, iar punctul rămâne roșu. Nodurile booleene și de racordare folosesc motorul de solide al programului, încărcat prima dată când se deschide editorul.

## Erori

Un nod care nu își poate face treaba spune de ce, sub nume, cu roșu („Raza trebuie să fie mai mare decât zero.”), iar nodurile de după el așteaptă. Același mesaj apare ca o problemă în panoul Probleme, deci îl puteți găsi de acolo.

## Fiecare nod este o linie de script

Apăsați {{ui:Script}} ca să vedeți graful ca CraftScript: câte o linie pentru fiecare nod, de exemplu `n3 = nd_circle(n2, n1, [0 0 1]);`. Editați textul și apăsați {{ui:Generare graf din acest script}} ca să-l aduceți înapoi ca graf. Aceleași funcții `nd_` funcționează într-un CraftScript din PartCraft, deci un graf poate fi rulat, repetat sau testat acolo. Numerele aleatorii primesc întotdeauna o **sămânță**, astfel încât același graf dă același rezultat pe orice calculator.

## Salvat cu fișierul

Graful este salvat în fișierul modelului. Nodurile fac curbe, suprafețe și plase proprii: nu schimbă fețele modelului până nu le cereți.

## Transformare în model

Activați ochiul unui nod care face o suprafață sau o plasă, apoi apăsați {{ui:Transformare în model}} în fereastra Noduri. Fiecare suprafață sau plasă afișată devine un grup de fețe în model, în metri, pe care îl puteți edita ca orice altceva. Este un singur pas de {{ui:Anulare}}. Graful rămâne, dar copia nu mai urmează graful: schimbați un număr și transformați din nou ca s-o obțineți pe cea nouă. Punctele și curbele nu sunt solide, deci sunt lăsate afară, iar mesajul spune câte.
