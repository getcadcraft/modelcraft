---
title: Editarea unei plase în spațiul de lucru Plasă
summary: Selectați vârfurile, muchiile și fețele unei plase, mutați-le și extrudați, retrageți, teșiți, tăiați, îmbinați, umpleți și uniți-le, cu oricare stil de taste.
keywords: plasă, mod de editare, spațiu de lucru plasă, vârf, vârfuri, muchie, muchii, față, fețe, extrudare, retragere, teșire, tăiere în buclă, cuțit, bisectare, învârtire, îmbinare, dizolvare, umplere, umplere cu grilă, punte, subdivizare, alunecare, editare proporțională, atenuare, spațiu de lucru
from: 92a372dd
---

Spațiul de lucru **Plasă** editează o [plasă](topic:meshes) punct cu punct: vârfurile, muchiile și fețele ei. Geometria push/pull rămâne în spațiul de lucru **Model**.

## Deschiderea

- Alegeți {{ui:Plasă}} din lista {{ui:Spațiu de lucru}} de la stânga barei de instrumente. Plasa selectată se deschide pentru editare; un grup sau o componentă selectată este transformată întâi în plasă (un singur pas de anulare).
- Sau faceți dublu clic pe o plasă ori, cu tastele modelatorului, selectați-o și apăsați {{key:Tab}}.
- Fără nimic selectat, panoul oferă plase de adăugat: plan, grilă, cub, cerc, cilindru, con, sferă, sferă ico și tor. Una nouă apare acolo unde privește vizualizarea și se deschide pentru editare.

{{ui:Înapoi la Model}} (sau lista, {{key:Tab}} cu tastele modelatorului, {{key:Esc}} fără nimic selectat cu tastele push/pull) revine la Model cu plasa selectată. Cât timp spațiul de lucru Plasă este deschis, restul modelului este estompat, iar uneltele de desen ale Model sunt ascunse.

## Selectarea

| Faceți | Pentru |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Selectarea vârfurilor, muchiilor sau fețelor |
| Clic | Selectarea unuia; {{key:Shift}}+clic adaugă sau scoate |
| Trageți o casetă | Selectarea a ce este înăuntru și vizibil; {{key:Shift}} adaugă, {{key:Ctrl}} scoate |
| {{key:Alt}}+clic pe o muchie, sau dublu clic pe ea | Bucla ei de muchii (buclă de fețe în modul fețe; tot conturul la o muchie deschisă) |
| {{key:Ctrl}}+{{key:Alt}}+clic pe o muchie | Inelul ei de muchii |
| Clic triplu | Tot ce este legat de el |

Grupul {{ui:Selectare}} mai are {{ui:Tot}}, {{ui:Legate}}, {{ui:Buclă}}, {{ui:Inel}}, {{ui:Mai multe}} și {{ui:Mai puțin}}.

## Mutare, rotire, scalare

{{ui:Mutare}}, {{ui:Rotire}} și {{ui:Scalare}} pornesc de la cursor: mutați-l, apoi faceți clic sau apăsați {{key:Enter}} pentru a depune selecția, ori {{key:Esc}} pentru a anula. {{key:X}}, {{key:Y}} sau {{key:Z}} (sau tastele cu săgeți) blochează o axă. Tastați o distanță, un unghi sau un factor pentru o valoare exactă — [calculele](topic:value-box#calculations) funcționează și ele.

**Editarea proporțională** ({{ui:Proporțional}}, sau din panou): vârfurile apropiate de selecție urmează o mutare, cu atât mai puțin cu cât sunt mai departe, până la raza pe care o setați, cu atenuarea pe care o alegeți. Porniți {{ui:Doar de-a lungul plasei}} pentru a măsura pe muchii, nu în linie dreaptă.

{{ui:Alunecare}} mută o buclă de muchii selectată de-a lungul muchiilor de lângă ea.

## Schimbarea formei

| Unealtă | Face |
|---|---|
| {{ui:Extrudare}} | Scoate fețele selectate pe direcția lor normală, cu fețe laterale noi (sau face fețe din muchii deschise de contur). Tastați distanța |
| {{ui:Retragere}} | O fâșie în interiorul conturului fețelor selectate; apăsați din nou {{key:I}} pentru fiecare față separat |
| {{ui:Teșire}} | Taie muchiile selectate (sau, cu {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, vârfurile) la o lățime; rotița sau tastele plus și minus adaugă segmente pentru o muchie rotunjită |
| {{ui:Tăiere în buclă}} | Indicați o muchie: buclele noi trec peste inelul de fețe cu patru laturi; rotița stabilește câte; clic ca să tăiați |
| {{ui:Cuțit}} | Faceți clic pe puncte de pe muchii sau colțuri; {{key:Enter}} taie drept prin fețele dintre ele, așa cum le vedeți |
| {{ui:Bisectare}} | Trageți o linie pe ecran: fețele selectate (sau toate) sunt tăiate de-a lungul ei |
| {{ui:Învârtire}} | Rotește fețele selectate sau muchiile deschise în jurul axei albastre, în pași (rotița le stabilește); o rotație completă închide |
| {{ui:Subdivizare}} | Taie muchiile selectate în două; fețele întregi devin o grilă |
| {{ui:Îmbinare}} | Vârfurile selectate devin unul, în centrul lor |
| {{ui:Dizolvare}} | Scoate selecția, dar păstrează suprafața: fețele se unesc |
| {{ui:Umplere}} | O față peste un contur deschis selectat (sau între două muchii deschise) |
| {{ui:Umplere cu grilă}} | Umple un contur deschis cu un număr par de muchii, cu o grilă de patrulatere |
| {{ui:Punte}} | Unește două bucle de muchii deschise selectate cu fețe |
| {{ui:Crestare}} | Cât de ascuțite rămân muchiile selectate când plasa este netezită de o suprafață de subdivizare: trageți departe de centru, folosiți rotița (pași de 0.1) sau tastați o valoare de la 0 la 1. Panoul arată crestarea muchiilor selectate și acceptă și o valoare tastată. Muchiile crestate sunt desenate în magenta |
| {{ui:Întoarcere}}, {{ui:Netezire}}, {{ui:Ștergere}} | Întorc fețele pe dos; netezesc vârfurile spre vecinii lor; șterg după modul de selectare |

Fiecare este un singur pas de anulare. Coordonatele de textură, culorile și greutățile trec pe fețele și vârfurile noi.

## Remeshare

{{ui:Remeshare}} face din nou toată plasa din triunghiuri egale, de o singură mărime, cerută când apăsați (mai mică înseamnă mai fin și mai lent). Închide găurile, unește bucățile care se suprapun și egalizează o plasă întinsă de sculptare. Muchiile ascuțite ies ușor rotunjite. UV-urile, vopseaua și crestările pornesc din nou. Un singur pas de anulare.

## Retopologie

Pentru a construi o plasă nouă, mai curată, peste una detaliată (o sculptură, o scanare), alegeți cea detaliată la {{ui:Retopologie}} › **Construire pe** în panou, apoi:

- **Agățare punctelor mutate pe ea:** punctele pe care le mutați și muchiile pe care le extrudați ajung pe suprafața ei.
- **Punerea punctelor selectate pe ea** mută acum punctele selectate pe ea (un singur pas de anulare).
- **Afișează muchiile acestei plase în față** desenează plasa pe care o construiți peste suprafață, ca s-o vedeți.

## Ajustarea ultimei operații

După {{ui:Retragere}}, {{ui:Teșire}}, {{ui:Tăiere în buclă}}, {{ui:Subdivizare}}, {{ui:Netezire}}, {{ui:Umplere cu grilă}} sau {{ui:Învârtire}}, panoul arată setările lor (lățime, segmente, profil, tăieturi …). Modificați una și operația se face din nou de la început, tot ca un singur pas de anulare.

## Taste

| | Taste push/pull | Taste Modeler |
|---|---|---|
| Mutare, rotire, scalare | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} de două ori alunecă) |
| Extrudare, retragere | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Ștergere | {{key:E}} sau {{key:Delete}} | {{key:X}} sau {{key:Delete}} |
| Crestare | {{key:Shift+C}} | {{key:Shift+E}} |
| Selectare totală, niciuna, inversare | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Ambele | {{key:Ctrl+B}} teșire, {{key:Ctrl+R}} tăiere în buclă, {{key:K}} cuțit | același lucru, plus {{key:F}} umplere, {{key:M}} îmbinare, {{key:Ctrl+X}} dizolvare, {{key:L}} / {{key:Ctrl+L}} legate, {{key:Alt+N}} întoarcere, {{key:O}} proporțional, {{key:Shift+V}} alunecare a vârfurilor |

Vezi și [Plase](topic:meshes), [Modificatori pe o plasă](topic:modifiers) și [Încă nerealizat](topic:not-built-yet).
