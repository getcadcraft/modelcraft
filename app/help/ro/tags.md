---
title: Etichete: afișarea și ascunderea seturilor de obiecte
summary: Dați grupurilor și componentelor o etichetă, de exemplu Mobilier sau Pereți, și ascundeți sau afișați tot ce are acea etichetă deodată.
keywords: etichete, etichetă, straturi, strat, afișare, ascundere, vizibilitate, organizare, mobilier, pereți, fără etichetă, redenumire etichetă, ștergere etichetă
from: c1a95a05
---

O etichetă este un nume pe care îl dați grupurilor și componentelor, precum **Mobilier**, **Pereți** sau **Amplasament**, pentru a ascunde sau afișa tot ce are acea etichetă deodată. Etichetele sunt ceea ce programele CAD numesc straturi. Pentru ascunderea unui singur obiect, vezi [Ascundere, izolare și reafișare](topic:hide-isolate).

## Crearea unei etichete

1. În {{ui:Etichete}} din dreapta, faceți clic pe {{ui:Adăugare etichetă}}.
2. Introduceți numele și apăsați {{key:Enter}}.

Pentru a redenumi o etichetă, faceți clic pe numele ei în {{ui:Etichete}}, scrieți noul nume și apăsați {{key:Enter}}. Două etichete nu pot avea același nume.

## Etichetarea grupurilor și componentelor

1. Selectați unul sau mai multe grupuri sau componente.
2. În {{ui:Informații entitate}}, alegeți eticheta în {{ui:Etichetare}}. {{ui:Etichetă nouă…}} creează una nouă și etichetează selecția cu ea.

{{ui:Fără etichetă}} elimină eticheta. Numărul de lângă fiecare etichetă din {{ui:Etichete}} arată câte grupuri și componente o au.

Etichetați grupuri și componente, nu fețe și muchii izolate: desenați mai întâi ca grupuri obiectele pe care vreți să le etichetați (selectați-le, {{key:Shift+G}}).

## Ascundere și afișare

Faceți clic pe ochiul de lângă o etichetă. Tot ce are această etichetă dispare din vedere, oriunde ar fi în model (și în interiorul altor grupuri), iar clicurile și agățările trec pe lângă el. Faceți clic din nou pe ochi pentru a-l afișa. Obiectele {{ui:Fără etichetă}} sunt întotdeauna afișate.

Dacă editați în interiorul unui grup a cărui etichetă o ascundeți, grupul se închide.

## Ștergerea unei etichete

Faceți clic pe coșul de lângă ea. Ce avea eticheta devine {{ui:Fără etichetă}} și se afișează.

## De reținut

- Etichetele, numele lor și care sunt ascunse sunt salvate în fișierul ModelCraft. Copierea unui grup etichetat într-un alt model aduce și eticheta.
- Ascunderea și afișarea unei etichete, precum și orice altă modificare a etichetelor, reprezintă un singur pas de anulare.
- Exporturile includ tot, inclusiv etichetele ascunse, la fel ca obiectele ascunse.
- Straturile din planurile de amplasament DWG și DXF nu se importă încă drept etichete: întregul desen se importă ca un singur grup.
