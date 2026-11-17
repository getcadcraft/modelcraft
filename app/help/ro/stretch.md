---
title: Componente care se întind
summary: Faceți o copie a unei componente mai lată, mai adâncă sau mai înaltă, în timp ce piesele ei își păstrează dimensiunile: o masă mai lungă cu aceleași picioare, un raft de cărți mai înalt cu rafturile distanțate, o balustradă ale cărei stâlpi se repetă.
keywords: componentă dinamică, întindere, redimensionare componentă, parametric, dimensiuni denumite, repetare, matrice, picioare, rafturi, balustradă, reguli, variabile
from: b4c40f43
---

Scalarea unei componente mărește tot ce conține, inclusiv picioarele și traversele. **Întindere a acestei copii** schimbă lățimea, adâncimea sau înălțimea unei componente, iar fiecare piesă urmează o regulă: blatul unei mese crește, picioarele își păstrează grosimea și rămân la capete.

Funcționează pe componente formate din piese, adică grupuri sau componente aflate în interiorul componentei, așa cum este orice element din [biblioteca de pornire](topic:starter).

## Întinderea unei copii

1. Selectați componenta.
2. În {{ui:Informații entitate}}, faceți clic pe {{ui:Întindere a acestei copii…}}.
3. Introduceți noile {{ui:Lățime (roșu)}}, {{ui:Adâncime (verde)}} și {{ui:Înălțime (albastru)}}, apoi faceți clic pe {{ui:Întindere}}.

Se modifică doar acea copie: devine o componentă proprie, care reține originalul din care provine. Întindeți-o din nou oricând și este recalculată din original, deci nimic nu se abate. Celelalte copii ale originalului rămân neschimbate.

## Regulile

Deschideți componenta (faceți dublu clic pe ea) și selectați una dintre piesele ei. {{ui:Informații entitate}} afișează {{ui:Când componenta se întinde}}, cu o regulă pe roșu, verde și albastru:

| Regulă | Ce face piesa | De exemplu |
|---|---|---|
| {{ui:Întindere}} | Crește odată cu componenta; distanțele ei până la ambele laturi rămân | Blatul unei mese |
| {{ui:Rămâne la început}} / {{ui:Rămâne la sfârșit}} | Își păstrează dimensiunea și distanța până la acea latură | Picioare |
| {{ui:Mutare proporțională}} | Își păstrează dimensiunea; mijlocul ei se mută proporțional | Rafturi, mâner de ușă |
| {{ui:Scalare proporțională}} | Locul și dimensiunea ei se schimbă proporțional | Treptele unei scări |
| {{ui:Repetare}} | Copii ale ei, la anumite intervale ({{ui:La fiecare}}), de la începutul ei până la latura îndepărtată | Stâlpii unei balustrade |

{{ui:Automat}} (valoarea de pornire) calculează singur regula și arată care: {{ui:Întindere}} când piesa se întinde pe toată componenta, {{ui:Mutare proporțională}} când se află pe la mijloc, altfel rămâne lângă latura cea mai apropiată.

## De reținut

- Formele proprii ale pieselor sunt comune, deci o copie întinsă este ușoară. Editarea unei piese o modifică în toate copiile.
- O copie întinsă nu urmărește modificările ulterioare ale regulilor sau ale aranjamentului originalului: întindeți-o din nou pentru a le aplica.
- Fețele desenate libere în componentă (nu într-o piesă) își păstrează dimensiunea; faceți din ele o piesă ca să urmeze întinderea.
- Regulile și originalul din care a fost întinsă fiecare copie sunt salvate în fișierul ModelCraft.
