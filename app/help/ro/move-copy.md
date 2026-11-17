---
title: Mutare, copiere și matrice
summary: Mutați lucruri făcând clic sau la o distanță exactă, copiați-le cu o tastă modificatoare și faceți un șir de copii la distanțe egale.
keywords: mutare, copiere, duplicare, matrice, rând, distanță, împărțire, decalare, întindere, coloane, repetare, copiere multiplă
from: 280245fc
---

{{ui:Mutare}} ({{key:M}}) mută ce este selectat dintr-un punct în altul. Ținând apăsată o tastă modificatoare, se face o copie, iar după o copiere puteți scrie câte copii în plus doriți.

## Mutarea unui obiect

1. Selectați ce doriți să mutați (vezi [Selectarea obiectelor](topic:select)). Dacă nu este selectat nimic, {{ui:Mutare}} ia obiectul pe care faceți clic.
2. Apăsați {{key:M}}.
3. Faceți clic pe un punct de la care să pornească mutarea. Alegeți ceva semnificativ, cum ar fi un colț: acel punct va ajunge exact unde faceți clic apoi.
4. Mutați indicatorul. Selecția urmează indicatorul. Se fixează la puncte, la muchii și la direcțiile roșie, verde și albastră, la fel ca o linie.
5. Faceți clic unde trebuie să ajungă punctul sau scrieți o distanță și apăsați {{key:Enter}}.

   Sfatul din bara de stare revine la „Faceți clic pe un punct de la care să pornească mutarea…” pentru următoarea mutare.

O distanță scrisă merge în direcția în care indicați. Puteți scrie și un decalaj exact, `<2m,0,0>` (2 m pe roșu), sau o destinație exactă pentru punctul ales, `[0,0,0]` (originea). Vezi [Scrierea dimensiunilor exacte](topic:value-box).

Pentru a muta doar pe o axă, apăsați o tastă săgeată după primul clic: {{key:Right}} blochează pe roșu, {{key:Left}} pe verde, {{key:Up}} pe albastru. Apăsați aceeași săgeată din nou ca să deblocați.

## Mutarea unei părți dintr-o formă o întinde

Geometria care nu este grupată este conectată. Dacă selectați o față sau câteva muchii și le mutați, fețele atașate de ele se întind ca să le urmeze. Mutați fața de sus a unei cutii spre lateral și cutia se înclină; mutați o muchie a acoperișului și acoperișul își schimbă panta. Fețele care nu mai pot rămâne plane se pliază în triunghiuri.

Ca să mutați un obiect întreg fără să se întindă, selectați-l complet înainte (faceți triplu clic pe el) sau, mai bine, faceți-l grup ori componentă (vezi [Grupuri și componente](topic:groups-components)).

## Copierea unui obiect

1. Selectați ce doriți să copiați.
2. Apăsați {{key:M}}.
3. Țineți apăsat {{key:Ctrl}} (sau {{key:Alt}}) și faceți clic pe punctul de la care să pornească mutarea. Pe Mac, {{key:Mod}} sau {{key:Alt}} face același lucru. Indicația spune „Ctrl mută în schimb”, ceea ce înseamnă că faceți o copie.

   Puteți apăsa și elibera {{key:Ctrl}} sau {{key:Alt}} și după primul clic, ca să treceți între mutare și copiere.

4. Faceți clic unde trebuie să ajungă copia sau scrieți o distanță și apăsați {{key:Enter}}.

   Originalul rămâne unde era, iar copia este selectată.

## Copiere, decupare, lipire și duplicare

- {{key:Mod+C}} copiază selecția, {{key:Mod+X}} o decupează (copiază, apoi șterge), iar {{ui:Copiere}} și {{ui:Lipire}} sunt și butoane în grupul {{ui:Editare}} al barei de instrumente. {{ui:Mai multe}}, de lângă ele, are decupare, lipire în aceeași poziție și duplicare.
- {{key:Mod+V}} lipește: un contur al copiei urmează indicatorul, fixându-se ca orice unealtă, iar un clic o pune jos cu colțul ei cel mai de jos acolo. {{key:Esc}} anulează.
- {{key:Mod+Shift+V}} lipește în aceeași poziție, exact de unde a venit copia, util pentru a muta ceva într-un grup deschis.
- {{key:Mod+D}} ({{key:Shift+D}} în stilul Modeler) duplică: se face o copie care se mișcă imediat cu indicatorul; faceți clic ca s-o puneți jos, scrieți o distanță sau apăsați {{key:Esc}} ca s-o renunțați. Imediat după, scrieți `3x` pentru mai multe copii la rând.

O grupare lipită devine un grup nou. O componentă lipită este o altă plasare a aceleiași componente, deci modificarea uneia le schimbă pe toate. Copiile se lipesc și într-un alt tab ModelCraft din acest browser (intră acolo ca definiții noi).

## Un rând de copii

Imediat după o copiere, cât timp {{ui:Mutare}} este încă unealta activă:

- Scrieți `3x` (sau `*3`) și apăsați {{key:Enter}} pentru trei copii la rând, fiecare la aceeași distanță ca prima copie. Obțineți trei copii noi pe lângă original.
- Scrieți `/3` și apăsați {{key:Enter}} ca să împărțiți: trei copii distribuite egal de la original până unde ați pus prima copie, ultima fiind chiar acolo. Folosiți asta ca să umpleți un interval: puneți o copie la capătul îndepărtat, apoi împărțiți.

Puteți scrie imediat alt număr: `5x` înlocuiește rândul `3x`. Sfatul vă amintește: „Copiat. Scrieți 3x pentru mai multe copii la rând sau /3 ca să împărțiți distanța.”

### Exemplu: coloane la fiecare 6 metri

1. Faceți o coloană și transformați-o în componentă ({{key:G}}), ca toate copiile să se schimbe împreună mai târziu.
2. Apăsați {{key:M}}, țineți {{key:Ctrl}} apăsat și faceți clic pe colțul de bază al coloanei.
3. Mutați-vă pe axa roșie și scrieți `6m`, apoi {{key:Enter}}.
4. Scrieți `4x` și {{key:Enter}}. Aveți cinci coloane, la 6 m distanță una de alta.

## De reținut

- Apăsați {{key:Esc}} înainte de al doilea clic ca să anulați; totul revine la locul inițial.
- {{ui:Mutare}} funcționează în grupul pe care îl editați. Ca să mutați un grup întreg, închideți-l mai întâi și selectați-l din exterior.
- Cu {{ui:Coliziune}} activă (jos în dreapta și în [setările ModelCraft](topic:settings#solids-stop-where-they-touch)), o mutare se oprește acolo unde selecția atinge un alt solid, în loc să treacă prin el. Faceți clic pe {{ui:Coliziune}} ca s-o dezactivați pentru o mutare care trebuie să treacă prin.
- Ca să puneți o copie într-un alt grup: copiați-o, deschideți celălalt grup și lipiți ({{key:Mod+Shift+V}} o păstrează în aceeași poziție).
