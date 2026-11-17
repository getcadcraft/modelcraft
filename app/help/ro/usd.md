---
title: Salvarea, deschiderea și exportul USD
summary: Salvați întregul model ca USD (.usda, .usdc sau .usdz) fără nicio pierdere, deschideți-l din nou și importați scene USD din alte programe 3D.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, salvare ca, export, import, asamblare de scene, archviz, openpbr, materialx, pachet
from: 73d299f9
---

USD este un format de scenă pe care îl folosesc multe programe 3D, de randare și de archviz. ModelCraft îl scrie și îl citește. `.modelcraft` rămâne formatul pe care îl scrie {{ui:Salvare}}; USD este o alegere în {{ui:Salvare ca}}.

## Salvarea ca USD

1. Alegeți {{ui:Salvare ca}} din grupul {{ui:Fișier}} (sau apăsați {{key:Mod+Shift+S}}).
2. Alegeți formatul: {{ui:Text (.usda)}} (lizibil, bun pentru controlul versiunilor), {{ui:Binar (.usdc)}} (cel mai mic și cel mai rapid) sau {{ui:Pachet (.usdz)}} (un singur fișier cu texturile înăuntru).
3. Fișierul se descarcă (în aplicația desktop alegeți unde se salvează).

Aceleași alegeri se află în {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nimic nu se pierde

Deschideți un fișier USD salvat de ModelCraft și primiți modelul înapoi exact: fețe cu găurile lor, muchii moi și ascunse, curbe, grupuri și componente, etichete, scene, cote, ghiduri, planuri de secțiune, lumini, texturi importate și vederea. Alte programe văd același model ca plase, grupuri, prototipuri pentru componente, materiale, lumini și camere.

:::note
Dacă alt program schimbă geometria unui grup sau a unei componente, ModelCraft deschide acea parte ca plasă, cu schimbarea păstrată, și spune câte piese a citit astfel. O plasare mutată sau ștearsă în alt program rămâne mutată sau ștearsă.
:::

## Deschiderea sau importul unui USD al altcuiva

- {{ui:Deschidere}} un fișier `.usd`, `.usda`, `.usdc` sau `.usdz` pentru a porni un model din el.
- {{ui:Import}} unul pentru a-l adăuga în modelul deschis. Trageți împreună cu el fișierele la care se referă (alte straturi, texturi).

Plasele vin cu normalele, coordonatele UV și culorile lor, geometria comună ca componente, materialele ca culori de vopsea, luminile ca lumini și camerele ca scene, în metri, cu Z în sus, oricare ar fi unitățile și axa de sus a fișierului.

## Încă nu

Animația, scheletele și grafurile de noduri MaterialX nu se citesc și nu se scriu încă drept USD. Animația ModelCraft și materialele cu noduri sunt păstrate într-un fișier USD salvat de ModelCraft, pentru ca ModelCraft să-l deschidă din nou, dar celelalte programe nu le văd. Straturile la care se referă un fișier și pe care ModelCraft nu le poate citi (de exemplu un document MaterialX) sunt lăsate afară, cu o notă.
