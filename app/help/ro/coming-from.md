---
title: Venind de la alți modelatori
summary: Cum se potrivesc obiceiurile de modelare prin împingere/tragere cu ModelCraft, tastă cu tastă, și diferențele care îi surprind pe oameni.
keywords: trecere, migrare, familiar, diferențe, modelare împingere tragere, skp, scurtături, obiceiuri, comparare, casetă de măsurători, structură arborescentă, informații entitate
from: 74ffd4ac
---

Dacă ați modelat în SketchUp, ModelCraft vă va părea familiar: aceeași idee de fețe și împingere/tragere, aceleași litere de instrumente, o casetă de valori în care scrieți fără să faceți clic, inferență cu axele roșie, verde și albastră, grupuri, componente, o structură arborescentă, {{ui:Informații entitate}} și scene. Pagina arată ce se transpune direct și, mai important, ce nu.

## Obiceiuri care se transpun

| Ce ați folosit până acum | În ModelCraft |
|---|---|
| Apăsați Space pentru Selectare, L Linie, R Dreptunghi, C Cerc | La fel: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Apăsați P Împinge/Trage, M Mutare, Q Rotire, S Scalare, E Ștergere, T Ruletă | La fel: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Apăsați O Orbitare, H Pan, Z Zoom, Shift+Z Zoom extinderi | La fel: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Apăsați G ca să creați o componentă | La fel: {{key:G}}. {{key:Shift+G}} creează un grup |
| Scrieți în caseta de măsurători fără să faceți clic pe ea | La fel, în caseta de valori de jos. Apăsați {{key:Enter}} |
| Scrieți `4m,3m` pentru un dreptunghi, `12s` pentru laturi | La fel |
| Scrieți `3x` sau `/3` după o copiere cu Mutare | La fel; `*3` funcționează și el |
| Scrieți `[x,y,z]` sau `<dx,dy,dz>` pentru un punct sau o decalare | La fel |
| Scrieți un număr simplu într-un model arhitectural în inci și obțineți inci | La fel |
| Tragere cu butonul din mijloc pentru orbitare, Shift plus tragere cu butonul din mijloc pentru pan, rotița pentru zoom la cursor | La fel |
| Dublu clic cu Împinge/Trage ca să repetați distanța | La fel |
| Tastele cu săgeți pentru a fixa roșu, verde, albastru și paralel | La fel: {{key:Right}} roșu, {{key:Left}} verde, {{key:Up}} albastru, {{key:Down}} paralel |
| Țineți {{key:Shift}} ca să fixați o inferență | La fel |
| {{key:Ctrl}} (Option pe Mac) ca să copiați în timpul mutării | {{key:Ctrl}}, {{key:Mod}} sau {{key:Alt}}, pe orice calculator |
| {{key:Shift}} pentru comutare, {{key:Ctrl}} pentru adăugare, Shift+Ctrl pentru scoatere din selecție | Aceleași taste; pe Mac folosiți {{key:Mod}} acolo unde scrie Ctrl |
| Fereastră de la stânga la dreapta, intersectare de la dreapta la stânga | La fel |
| Un instrument de cotare pentru a eticheta lungimi | {{key:D}}, și mai mult: scrieți o lungime nouă într-o cotă și modelul se redimensionează după ea. Vezi [Cotare și redimensionare](topic:dimensions) |
| Dublu clic pe o față pentru față plus muchii; triplu clic pentru tot ce este conectat | La fel |
| Dublu clic pe un grup ca să îl editați; {{key:Esc}} ca să închideți | La fel |
| Desenați o linie peste o față ca s-o împărțiți; ștergeți o muchie între fețe coplanare ca să le unificați | La fel |
| Împingeți un dreptunghi de fereastră prin perete ca să îl tăiați | La fel |
| Fețele din spate în gri-albastru; Inversare fețe | Aceeași culoare; {{ui:Inversare față}} în {{ui:Informații entitate}} |
| Scenele ca file peste vedere, Page Up și Page Down | La fel, cu {{ui:Redare}} în panoul {{ui:Scene}} |
| Umbrele după dată, oră, latitudine și longitudine, cu nordul pe verde | La fel, în panoul {{ui:Stil}} |

## Diferențe care îi surprind pe oameni

### Salvarea este o descărcare

Nu există un {{ui:Salvare}} care să suprascrie fișierul deschis, nici o casetă Salvare ca, nici salvare automată și nici fișier de rezervă. {{ui:Salvare}} ({{key:Mod+S}}) descarcă de fiecare dată un fișier `.modelcraft` nou, de obicei în dosarul de descărcări. Salvați des și redenumiți sau mutați fișierele singuri. Vezi [Deschidere, salvare, import și export](topic:files).

### Importă fișiere .skp, dar nu le salvează

{{ui:Import}} citește fișiere SketchUp cu propriul cititor al ModelCraft, în pagină: grupurile, componentele, culorile, texturile de pe fețe, etichetele și muchiile netede trec în model. Vezi [Formate de fișiere în detaliu](topic:formats#skp-files). ModelCraft nu poate salva `.skp`: ca să reveniți, exportați Collada din ModelCraft și importați-l în SketchUp.

### Fără meniu la clic dreapta

Tragerea cu butonul din dreapta face pan; un clic dreapta nu face nimic. Comenzile pe care le-ați căuta în meniul contextual se găsesc în {{ui:Informații entitate}} ({{ui:Inversare față}}, {{ui:Editare}}, {{ui:Descompunere}}, {{ui:Creare unică}}, {{ui:Creare componentă}}) și în grupul {{ui:Organizare}} din bara de instrumente.

### Unitățile sunt în bara de stare

Nu există Informații model sau alegere de șablon. Selectorul de unități este în dreapta jos. Un model nou pornește în picioare și inci în SUA și în milimetri în rest, după limba setată în browser. Zecimalele se scriu întotdeauna cu punct: `2.5m`, niciodată `2,5m`, pentru că virgula separă întotdeauna valorile.

### Vopseaua are propriile materiale

{{ui:Vopsire}} ({{key:B}}) pictează culori solide și materialele din secțiunea {{ui:Materiale}}: cărămidă, fațadă din scânduri, învelitoare, lemn, piatră și altele, desenate de ModelCraft. Nu puteți încărca încă propria imagine ca material; texturile care vin odată cu fișierele importate se păstrează. Vezi [Vopsire cu culori și materiale](topic:paint).

### Scalarea este uniformă, fără mânere

Scalarea nu arată o cutie cu mânere. Faceți clic pe punctul care rămâne pe loc, un punct de referință, apoi pe noua dimensiune sau pe un factor scris. Scalează întotdeauna egal în toate direcțiile. Ca să întindeți pe o singură direcție, împingeți/trageți sau mutați o față, rescrieți lățimea, adâncimea sau înălțimea unui grup în {{ui:Informații entitate}}, sau [redimensionați cu o cotă](topic:dimensions).

### Rotirea își alege planul din locul unde faceți clic

Nu există un raportor care să se fixeze pe fețe când treceți cu tastele cu săgeți peste ele ca să alegeți planul. Faceți clic pe centru, pe o față, ca să rotiți în planul acelei fețe, sau pe sol ca să rotiți în jurul verticalei. Tastele cu săgeți orbitează vederea înainte de primul clic.

### Deducție din punctele peste care treceți

ModelCraft se fixează pe direcțiile axelor de la **punctul de start**, și pe puncte, muchii și fețe sub cursor. Nu urmărește o direcție dintr-un punct peste care doar ați trecut (deducția punctată „din punct”). Ca să vă aliniați cu un colț îndepărtat, fixați axa cu o tastă cu săgeată și treceți cu cursorul peste acel colț: punctul fixat alunecă până se aliniază cu el. Sau plasați un [ghid](topic:guides-measure).

### Paralelul folosește muchia peste care ați trecut înainte de start

Deducția paralelă și perpendiculară folosește ultima muchie peste care a trecut cursorul **înainte de primul clic**, nu muchiile peste care treceți în timpul desenării. Vezi [Deducție și agățare](topic:inference#parallel-and-perpendicular).

### Copiile unui grup sunt legate

Copierea unui grup cu {{ui:Mutare}} face o a doua poziționare a aceluiași grup, astfel că modificarea unuia le schimbă pe amândouă, ca la componente. SketchUp face grupurile independente. Vezi [Depanare](topic:troubleshooting#editing-one-group-changed-another).

### Spațiul nu face pan

{{key:Space}} alege {{ui:Selectare}}, ca în SketchUp. În alte aplicații web, ținerea apăsată a lui Space face pan; aici nu. În schimb, tragerea cu butonul din dreapta face pan.

### Derularea cu două degete face zoom

Pe touchpad, setați {{ui:Setări}} › {{ui:ModelCraft}} › Derulare la Touchpad: două degete orbitează, {{key:Shift}} și două degete fac pan, un ciupit face zoom. Vezi [Orbitare, pan și zoom](topic:orbit-pan-zoom#on-a-trackpad).

Dacă mâinile vă sunt obișnuite cu tastele din Blender, nu cu cele din SketchUp, alegeți stilul de meniu {{ui:Modeler}}: {{key:G}}, {{key:R}} și {{key:S}} acționează deodată asupra selecției, {{key:E}} extrudează (împingere/tragere), {{key:Shift+D}} duplică, iar o bară de meniu din antet (Fișier, Editare, Vedere, Selectare, Adăugare, Obiect, Plasă) înlocuiește bara de instrumente. Venind din SketchUp, stilul {{ui:Push-pull}} dă o bară de meniu proprie peste aceleași litere de instrumente. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse).

### Solidele împinse unul în altul nu se taie

Împingerea/tragerea taie prin fața din spate din același obiect, dar două solide separate împinse unul în altul nu se intersectează. Nu există Intersect Faces și nu există Solid Tools.

### Ce lipsește

Desenul liber, Tăiere, Împărțire și Coajă exterioară, materialele cu propria imagine, extensiile și un instrument de aranjare în pagină pentru foi nu sunt în această versiune. [Ce nu este încă realizat](topic:not-built-yet) arată ce să faceți în loc.

## Scurtături pe care le păstrează browserul

ModelCraft rulează într-un browser, așa că unele scurtături aparțin browserului, nu aplicației. {{key:Mod+N}} deschide o fereastră de browser (folosiți {{ui:Nou}}), iar {{key:Mod+W}} închide fila. Dacă aveți modificări nesalvate, browserul întreabă înainte să închidă. Vezi [Taste, mouse-uri și touchpad-uri](common:keys#shortcuts-the-browser-keeps).
