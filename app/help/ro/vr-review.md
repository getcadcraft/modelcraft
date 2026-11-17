---
title: Revizuirea modelului cu o cască VR
summary: Parcurgeți modelul la mărime reală într-o cască VR: săriți, întoarceți-vă, măsurați, tăiați-l, plasați probleme cu o imagine, vedeți-l ca model pe masă și întâlniți pe ceilalți din sesiunea live.
keywords: vr, realitate virtuală, cască, webxr, xr, imersiv, quest, oculus, vive, index, pico, plimbare, teleportare, revizuire de proiect, revizuire, măsurare, secțiune, tăiere, problemă, probleme, bcf, blat de masă, model la scară, prezență, avatare, live, împreună
from: fa2f591a
---

{{ui:Revizuire în VR}} vă pune în interiorul modelului cu o cască VR, la mărime reală. Stați acolo unde se află camera vederii, pe podeaua de sub ea, orientat în aceeași direcție. Nimic nu este trimis: casca arată ce desenează browserul pe acest calculator (sau în browserul propriu al căștii).

## Ce aveți nevoie

- O cască pe care browserul o poate folosi (WebXR): browserul propriu al unei căști independente, sau Chrome ori Edge pe un PC cu o cască conectată.
- ModelCraft deschis pe o pagină sigură (https), așa cum este pe acest site.

Când nu există cască, {{ui:Revizuire în VR}} este estompat și spune motivul.

## Pornirea

1. Pregătiți vederea de unde vreți să începeți: într-o cameră sau afară, privind clădirea.
2. Faceți clic pe {{ui:Vederi}} din grupul {{ui:Cameră}}, apoi pe {{ui:Revizuire în VR}}.
3. Puneți casca.

Meniul este pe dosul mâinii stângi. Îndreptați spre el controlerul din dreapta și apăsați trăgaciul ca să alegeți un buton. (Cu o singură mână, meniul plutește în fața locului de unde ați pornit.)

## Cum arată

Casca arată modelul în aspectul [vederii live](topic:live-view): aspectele și materialele pe care le-ați dat fețelor, cerul și soarele după locul și data modelului, cu umbra lor, lămpi, plante și pietre împrăștiate și lumină reflectată de pereți și podele (calculată pe acest calculator cât priviți în jur și urmând mișcările voastre). Luminozitatea și transformarea vederii (ACES sau AgX) sunt cele din [Randarea unei imagini](topic:render). Cât desenează depinde de ce are browserul căștii, ca pe desktop; ocluzia ambientală, reflexiile și strălucirea (bloom) rămân pe desktop.

## Mișcarea

- **Săritura:** în {{ui:Mutare}}, indicați o podea și apăsați trăgaciul; aterizați acolo. Sau împingeți joystickul înainte ca să țintiți și lăsați-l ca să săriți. Puteți ateriza doar pe podele și pe teren (suprafețe orientate în sus), niciodată pe un perete.
- **Întoarcerea:** împingeți joystickul la stânga sau la dreapta: vă întoarceți cu 30° de fiecare dată.
- **Mersul:** în zona de joc, pur și simplu mergeți.

## Măsurarea

Alegeți {{ui:Măsurare}}, apoi apăsați trăgaciul pe două puncte. Distanța apare între ele, în unitățile modelului. Un punct aproape de un colț se fixează pe colț.

## Tăierea modelului

Alegeți {{ui:Secțiune}} și apăsați trăgaciul pe o suprafață:

- pe un perete (sau pe orice nu este o podea): tot ce este între dumneavoastră și suprafața aceea este tăiat, ca să vedeți înăuntru. Funcționează cel mai bine din exterior sau peste o cameră;
- pe o podea, de sus: o secțiune în plan la 1.2 m deasupra acelei podele, astfel încât pereții să arate partea lor de jos.

{{ui:Golire}} înlătură tăietura și măsurătorile. Dacă un plan de secțiune taie modelul în vedere când porniți, casca pornește cu el.

## Plasarea unei probleme

Alegeți {{ui:Problemă}} și apăsați trăgaciul unde este problema. Un ac numerotat o marchează, iar ModelCraft păstrează problema împreună cu o imagine a ceea ce ați văzut și cu locul unde ați stat. Când ieșiți din VR, problemele se află în lista {{ui:Probleme}} din dreapta:

- butonul cu ochi arată problema de la locul unde a fost plasată;
- {{ui:Salvare ca BCF}} descarcă toate problemele ca fișier BCF, care se deschide în programele de revizuire BIM (cu cameră și imagine incluse);
- sunt salvate și în fișierul `.modelcraft`.

Adăugați un comentariu la o problemă după ce ieșiți din VR, într-un program BCF: scrierea în cască nu este încă realizată.

## Vedere ca model pe masă

{{ui:Blat de masă}} micșorează modelul ca să încapă pe o masă în fața dumneavoastră; ocoliți-l sau întoarceți-l cu joystickul. {{ui:Mărime reală}} vă pune înapoi unde erați.

## Împreună, live

Într-o [sesiune live](topic:work-live), toți cei din VR îi văd pe ceilalți ca pe un cap și două mâini în culoarea lor, cu numele lor, și un punct acolo unde arată fiecare. Modificările făcute de oricine ajung în casca dumneavoastră într-o clipă. Cei de la birou nu sunt încă afișați în cască.

## Ieșirea

Alegeți {{ui:Ieșire din VR}} (sau scoateți casca și încheiați acolo). Vederea de pe ecran se mută la locul unde era capul dumneavoastră.

:::note
Testat doar cu un emulator de cască, nu încă cu o cască reală. Un model mare poate face casca să sacadeze: ascundeți mai întâi ce nu vă trebuie ([ascundere și izolare](topic:hide-isolate)).
:::
