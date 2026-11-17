---
title: Legătură live cu un model .3dm
summary: Modificați un model în programul în care a fost creat și vedeți schimbarea aici, din Rhino 8 sau dintr-o definiție Grasshopper, fără să salvați și să importați din nou.
keywords: rhino, grasshopper, legătură live, conexiune live, 3dm, nurbs, parametric, legătură, sincronizare, script, model de referință, împingere
from: 331b0a7e
---

Continuați modelarea acolo unde modelați și folosiți rezultatul aici: pentru a-l randa, a-l ilumina sau a aranja o scenă în jurul lui. Fiecare modificare făcută în celălalt program actualizează un grup din ModelCraft.

:::note
Legătura necesită **CadCraft Studio** pe același calculator. O filă de browser nu poate prelua conexiunea. Nimic nu trece prin internet: scriptul vorbește cu Studio la adresa proprie a acestui calculator, cu un token.
:::

:::warning
Această legătură a fost testată cu scriptul de scriere a fișierelor și cu un înlocuitor al celuilalt program, nu încă în interiorul Rhino sau Grasshopper. Dacă apare o eroare acolo, spuneți-ne ce a afișat.
:::

## Configurarea

1. În Studio, deschideți ModelCraft. În {{ui:Setări}} › {{ui:ModelCraft}} › {{ui:Asistenți}}, bifați **Permiteți asistenților AI și scripturilor să folosească ModelCraft**, apoi **Editare**.
2. În Studio, alegeți {{ui:Conectare asistent}}. Afișează adresa și tokenul pe care le lipiți mai jos.
3. Descărcați scriptul: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Din Rhino

1. Rulați `cadcraft_link.py` în editorul de scripturi din Rhino (Python 3 în Rhino 8).
2. Prima dată, lipiți adresa și tokenul. Ele sunt păstrate în `.cadcraft-link.json`, în dosarul personal, niciodată în model. Studio creează un token nou la fiecare pornire, deci scriptul îl cere din nou atunci.

Întregul model ajunge ca un singur grup, cu numele documentului, de exemplu „chair (linked)”. După aceea, fiecare modificare ajunge când faceți o scurtă pauză, iar sunt trimise doar obiectele care s-au schimbat. Rulați din nou scriptul ca să opriți.

## Din Grasshopper

Rulați întâi scriptul o dată în Rhino, ca adresa și tokenul să fie salvate.

1. Adăugați o componentă Script (Python 3) și lipiți în ea întregul `cadcraft_link.py`.
2. Configurați-i aceste intrări: `G` (geometria, cu acces la listă), `N` (un nume, opțional), `On` (un comutator boolean) și `Target` (opțional: `model` sau `part`, dacă ambele aplicații sunt deschise).
3. Setați `On` pe true.

La fiecare calcul, `G` este trimisă și înlocuiește ce a trimis componenta data trecută, astfel încât tragerea unui glisor actualizează grupul de aici. Ieșirea `a` spune ce s-a întâmplat. Fiecare componentă are propriul grup.

## Ce puteți face cu grupul

- **Mutați-l, etichetați-l, construiți în jurul lui.** Poziția grupului și eticheta lui rămân la fiecare actualizare, la fel și tot ce este alături.
- **Nu editați în interiorul lui.** Fiecare actualizare înlocuiește ce se află înăuntru. Obiectele aparțin celuilalt program.
- **Anulare.** Actualizările făcute la mai puțin de două secunde una de alta formează un singur pas de anulare, deci {{key:Mod+Z}} anulează o tragere întreagă. Următoarea actualizare readuce modelul în potrivire.
- **Salvare.** Fișierul salvat păstrează legătura. Rulați din nou scriptul după ce redeschideți fișierul, iar același grup se actualizează.

## Ce ajunge

Plasele, polisuprafețele, suprafețele și extrudările ajung ca plasa pe care o vedeți pe ecran, SubD ca plasa lui, curbele ca muchii, blocurile ca obiecte separate acolo unde se află (nu ca componente), straturile ca etichete, culorile și unitățile. Vedeți [Importul unui model .3dm](topic:import-3dm-files) pentru felul în care apar aici.

Lăsate afară, cu un număr în celălalt program: punctele, textul, cotele, luminile și altele asemenea.

**Doar într-un sens.** Modificările făcute aici nu revin în celălalt program.

## Dacă apare o problemă

- **„Nicio fereastră ModelCraft sau PartCraft nu permite asta”:** faceți pasul 1 din configurare.
- **„Studio a refuzat tokenul”:** Studio a fost repornit. Copiați noul token și rulați din nou scriptul. Pentru Grasshopper, rulați-l întâi în Rhino.
- **„Nu se poate ajunge la CadCraft Studio”:** Studio nu rulează, sau adresa s-a schimbat.
