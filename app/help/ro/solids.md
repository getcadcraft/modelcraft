---
title: Unelte pentru corpuri solide: reuniune, scădere, intersecție
summary: Uniți grupuri și componente închise într-unul singur, decupați unul dintr-altul sau păstrați doar ce au în comun.
keywords: solid, solide, inspector solid, nu este solid, reparare solid, gaură, muchie rătăcită, pe dos, reuniune, unire, combinare, îmbinare, scădere, diferență, decupare, intersecție, booleană, înveliș exterior
from: f35df1cc
---

Uneltele pentru solide combină **solide**: grupuri și componente ale căror fețe închid un volum, fiecare muchie unind exact două fețe. {{ui:Informații entitate}} spune {{ui:Solid}}: {{ui:Da}} pentru un solid, și arată volumul lui.

Ele se află în meniul {{ui:Solide}} din grupul {{ui:Organizare}}.

## Când ceva nu este un solid

Selectați grupul sau componenta. Când nu este un solid, {{ui:Informații entitate}} spune de ce, de exemplu „Nu este solid: 4 muchii mărginesc o gaură · 1 muchie rătăcită”:

| Problemă | Ce înseamnă |
|---|---|
| Muchii care mărginesc o gaură | Lipsește o față |
| Muchii comune a trei sau mai multe fețe | O față împarte interiorul sau două forme se ating de-a lungul unei muchii |
| Fețe în interiorul formei | Un perete rămas în interiorul volumului |
| Muchii rătăcite | Linii care nu delimitează nicio față |
| Fețe întoarse pe dos | Fețele lor frontale spre interior, împotriva vecinilor |

{{ui:Afișare probleme}} o deschide cu acele muchii și fețe selectate, ca să le vedeți. {{ui:Reparare}} repară cazurile simple dintr-un singur pas de anulare: elimină muchiile rătăcite și fețele din interiorul formei, întoarce fețele în direcția corectă și închide golurile al căror contur este plat. Orice nu poate fi reparat în siguranță (o gaură care nu este plată, o muchie comună mai multor fețe) rămâne neschimbat, iar aplicația spune ce a rămas.

## Reuniune

1. Selectați două sau mai multe solide (faceți clic pe unul, apoi {{key:Ctrl}}+clic pe celelalte).
2. {{ui:Solide}} › {{ui:Reuniune}}.

Devin un singur solid, într-un singur grup. Acolo unde se suprapuneau, fețele din interior dispar.

## Scădere

1. {{ui:Solide}} › {{ui:Scădere}}.
2. Faceți clic pe solidul de **scos** (instrumentul de tăiere).
3. Faceți clic pe solidul de **tăiat**.

Ce rămâne din al doilea solid se păstrează; instrumentul de tăiere se consumă. De exemplu, ca să faceți o gaură printr-un bloc, desenați un stâlp care îl străpunge, transformați stâlpul într-un grup, apoi scădeți stâlpul din bloc.

## Intersecție

Selectați două sau mai multe solide, apoi {{ui:Solide}} › {{ui:Intersecție}}. Se păstrează doar partea pe care o au toate în comun.

## De reținut

- Rezultatul este un grup nou. Păstrează numele, culoarea și eticheta primului solid (la Scădere: cel tăiat). Culorile vopsite pe fețele lui nu se păstrează.
- Laturile plate ale rezultatului sunt fețe simple. Laturile rotunde ies ca fațetele plate cu care au fost desenate.
- Dacă un grup sau o componentă nu este solid, unealta spune care și nu schimbă nimic. Căutați o față lipsă sau o față rătăcită în interiorul ei.
- În interiorul unui grup deschis, uneltele lucrează pe grupurile și componentele din acel grup.
- Fiecare unealtă este un pas de anulare.
- Prima dată când folosiți o unealtă pentru solide, motorul ei (manifold-3d) se încarcă, ceea ce poate dura un moment.
