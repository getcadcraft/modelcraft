---
title: Suporturi, grosimea peretelui, golire și reparare
summary: Vedeți unde are nevoie o imprimare de suporturi și aproximativ cât, găsiți pereții prea subțiri pentru imprimare, goliți o piesă la o grosime de perete cu orificii de scurgere și reparați o plasă, cu fiecare reparație listată.
keywords: imprimare 3D, suporturi, previzualizare suporturi, porțiune în consolă, grosimea peretelui, pereți subțiri, prea subțire, duză, golire, coajă, orificiu de scurgere, rășină, reparare, reparare plasă, nemanifold, fețe întoarse, găuri, coji mici, autointersectare, suprapunere, unire
from: 286bde26
---

Patru unelte pentru pregătirea unui model pentru o imprimantă 3D. Deschideți {{ui:Exportare}} › {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}; rândul **Instrumente de imprimare** din caseta de dialog are {{ui:Previzualizare suporturi}}, {{ui:Grosimea peretelui}}, {{ui:Golire}} și {{ui:Reparare}}. Fiecare se deschide ca o fișă peste vizualizare; {{ui:Închidere}} (crucea) o închide împreună cu marcajele ei. Se afișează câte o fișă o dată.

Fiecare unealtă funcționează asupra a ceea ce se imprimă: selecția sau tot ce este afișat când nu este nimic selectat. {{ui:Golire}} și {{ui:Reparare}} cer un grup, o componentă sau o plasă selectată, deoarece le modifică.

## Previzualizare suporturi

Fețele care se înclină mai mult decât **unghiul de porțiune în consolă** față de verticală sunt umbrite cu roșu, iar suporturile simple sunt desenate de la ele (portocaliu) în jos, până la pat sau până la partea modelului aflată sub ele.

- **Unghi de porțiune în consolă**: 45° este ceea ce gestionează majoritatea imprimantelor fără suport. Măriți-l pentru o imprimantă care face bine punțile.
- **Coloane**: o coloană dreaptă la fiecare 3 mm sub fiecare porțiune în consolă. Estimarea le numără ca un model de suport de 15%.
- **Arbore**: punctele apropiate se unesc într-un singur trunchi, sub mijlocul lor; nicio ramură nu se înclină mai mult de 45°. Arborii consumă de obicei mai puțin material și ating patul în mai puține locuri.

Fișa spune câtă suprafață are nevoie de suport, câte puncte de suport există și cam cât material iau. Suporturile care stau pe model (nu pe pat) sunt numărate, deoarece lasă urme acolo. Dacă este ales un pat de imprimantă în {{ui:Setări}}, patul este desenat sub model.

:::note
Aceasta este o previzualizare, nu un program de feliere: programul de feliere decide suporturile reale. Pe o porțiune în consolă foarte mare, punctele de suport sunt împrăștiate mai larg, ca previzualizarea să rămână rapidă; fișa spune asta.
:::

## Grosimea peretelui

Fiecare față este măsurată drept prin solid, până la cealaltă parte. Pereții sub **cel mai subțire perete permis** sunt roșii, iar cei sub o dată și jumătate din acea valoare sunt portocalii: se imprimă, dar pot ieși slabi.

Zonele subțiri sunt listate, cele mai subțiri primele, cu cât de subțiri sunt și cât de mare este fiecare. {{ui:Afișare}} întoarce camera spre ea.

O imprimantă nu poate face un perete mai subțire decât cam două lățimi ale duzei: 0.8 mm pentru duza obișnuită de 0.4 mm (valoarea de pornire). Imprimantele cu rășină fac mai puțin; verificați ghidul imprimantei.

Pe un model foarte mare, doar unele fețe trimit o rază, iar celelalte iau grosimea vecinilor lor; fișa spune câte au fost măsurate.

## Golire

Golirea păstrează exteriorul așa cum este și scoate interiorul, lăsând pereții cât de groși cereți. Imprimările cu rășină folosesc mai puțină rășină și trag mai puțin de placa de construcție; imprimările cu filament folosesc mai puțin plastic decât ar folosi umplerea.

1. Selectați grupul, componenta sau plasa, apoi deschideți {{ui:Golire}}.
2. Setați **peretele** (2 mm la început) și cât de late sunt **orificiile de scurgere**.
3. Pentru o imprimare cu rășină, faceți clic pe {{ui:Plasare orificiu de scurgere}}, apoi faceți clic pe exteriorul modelului, unde trebuie să fie: jos, aproape de placa de construcție, ca rășina lichidă să curgă afară. Plasați câte aveți nevoie; fiecare apare ca un cerc albastru și este listat cu {{ui:Eliminare}}.
4. {{ui:Previzualizare}} spune cât scoate golirea.
5. {{ui:Golire}} face modificarea: un singur pas, pe care {{key:Mod+Z}} îl anulează.

Rezultatul este un solid închis pe care verificarea pentru imprimare 3D îl acceptă: ModelCraft îl verifică mai întâi și nu schimbă nimic dacă nu ar trece. Acolo unde modelul este mai subțire decât doi pereți, rămâne plin. Rezultatul este un grup ale cărui fețe plane sunt fețe unice, deci îl puteți modela în continuare cu {{ui:Împinge/Trage}}. O piesă curbă golită pe grila fină are de obicei prea multe fețe pentru asta și devine în schimb o plasă; bara de stare spune care dintre ele.

:::tip
Pentru majoritatea formelor, interiorul este exteriorul mutat înăuntru exact cu grosimea peretelui. Acolo unde colțurile sau piesele subțiri fac asta imposibil, ModelCraft urmează exteriorul la distanța peretelui, pe o grilă fină; fișa spune atunci cât de aproape este (cu o precizie de o fracțiune de milimetru).
:::

## Reparare

{{ui:Reparare}} examinează piesa selectată așa cum o va examina programul de feliere, repară ce poate repara în siguranță și listează fiecare reparație:

| Repară | Ce înseamnă |
|---|---|
| Triunghiuri fără suprafață | lăsate afară |
| Un triunghi desenat de două ori | o copie păstrată; o față desenată spate în spate cu ea însăși (fără grosime) este eliminată |
| Bucăți libere sub 0.5 mm | eliminate |
| Triunghiuri orientate greșit | rotite ca să se potrivească cu vecinii |
| Găuri, plate sau nu | închise cu un evantai de triunghiuri noi din mijlocul fiecărei găuri |
| O piesă întoarsă pe dos | rotită spre exterior (un interior gol într-o altă piesă este lăsat așa, fiindcă este făcut să fie orientat spre interior) |

{{ui:Reparați cele sigure}} face toate acestea într-un singur pas, pe care {{key:Mod+Z}} îl anulează, iar bara de stare listează fiecare reparație. Piesa reparată devine un grup ale cărui fețe plane sunt fețe unice. Dacă tot nu se închide (ceva de sub **Lăsat de rezolvat** rămâne) sau ar avea prea multe fețe pentru un grup, devine în schimb o plasă: fețele ei rămân triunghiuri, iar fețele plane par tot plane. Bara de stare spune care. {{ui:Unire piese suprapuse}} funcționează la fel.

Ce nu se poate repara în siguranță este listat sub **Lăsat de rezolvat** și marcat cu violet în vizualizare, cu {{ui:Afișare}}:

- **Muchii unde se întâlnesc trei sau mai multe fețe**: decideți ce față aparține și ștergeți celelalte.
- **O piesă care trece prin ea însăși**: mutați sau redesenați acea parte. Vedeți [Intersectarea fețelor](topic:intersect).
- **Găuri prea mari sau prea încurcate ca să se închidă**: desenați fețe peste ele.
- **Piese separate care se suprapun**: programele de feliere le unesc oricum. {{ui:Unire piese suprapuse}} face din ele un singur corp închis (reconstruiește fețele acolo unde se întâlnesc, de aceea este un buton separat, niciodată făcut automat).

Pentru grupurile de împingere/tragere puteți repara și câte o problemă, în {{ui:Informații entitate}} › {{ui:Afișare probleme}} / {{ui:Reparare}}, ceea ce păstrează fețele pe care le-ați desenat. Vedeți [Unelte pentru solide](topic:solids).

Înrudite: [Pregătirea unui model pentru imprimare 3D](topic:print-3d) · [Stilul pentru începători](topic:beginner) · [Încă nerealizat](topic:not-built-yet#3d-printing)
