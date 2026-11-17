---
title: Esculpeix una malla
summary: Doneu forma a una malla com si fos argila amb pinzells —dibuix, argila, suavitza, agafa, infla, plec, pinça, aplana—, protegiu parts amb una màscara, feu simetria a través de X i afegiu detall on esculpiu.
keywords: escultura, esculpir, pinzell, pinzells, argila, dibuix, suavitza, agafa, infla, plec, pinça, aplana, màscara, simetria, mirall, detall, topologia dinàmica, llapis, pressió, tauleta, llapis òptic
from: 5477801a
---

L'espai de treball Escultura dona forma a una malla amb pinzells, com amb argila: arrossegueu per la superfície i s'alça, s'enfonsa, es suavitza o segueix el punter sota un pinzell rodó, més fort al mig i esvaint-se fins a res a la vora.

## Comença

Seleccioneu una malla i trieu {{ui:Escultura}} a la llista d'espais de treball. Un grup o component es converteix primer en malla, com a l'espai de treball Malla. Els pinzells treballen sobre els vèrtexs de la malla, de manera que una malla amb més vèrtexs permet formes més fines: subdiviu-la primer ({{ui:Subdivideix}} de l'espai de treball Malla, o un modificador de superfície de subdivisió que apliqueu), o activeu {{ui:Detall}}.

## Pinzells

| Pinzell | Tecla | Què fa |
| --- | --- | --- |
| {{ui:Dibuix}} | {{key:D}} | Aixeca la superfície sota el pinzell |
| {{ui:Argila}} | {{key:C}} | Construeix capes planes, omplint primer les depressions |
| {{ui:Suavitza}} | {{key:S}} | Anivella les protuberàncies; manteniu {{key:Shift}} per suavitzar amb qualsevol pinzell |
| {{ui:Agafa}} | {{key:G}} | Estira la superfície amb el punter |
| {{ui:Infla}} | {{key:I}} | Infla la superfície en la seva pròpia direcció |
| {{ui:Plec}} | {{key:Shift+C}} | Talla una ranura aguda |
| {{ui:Pinça}} | {{key:P}} | Atrau la superfície cap al centre del pinzell |
| {{ui:Aplana}} | {{key:T}} | Premsa la superfície cap al seu pla mitjà |
| {{ui:Màscara}} | {{key:M}} | Pinta una màscara que protegeix la superfície dels altres pinzells |

Manteniu {{key:Ctrl}} mentre pinzelleu per fer el contrari (baixar en lloc d'elevar, un carener en lloc d'una ranura, treure la màscara), o activeu {{ui:Treu}}.

## Mida i força

La mida del pinzell és en píxels a la pantalla, de manera que es comporta igual sigui quin sigui el zoom: {{key:[}} i {{key:]}} el fan més petit i més gran, i {{key:Shift+[}} i {{key:Shift+]}} canvien la seva força. El tauler mostra totes dues coses.

Amb un llapis en una tauleta, prémer més fort fa el pinzell més gran i més fort; el tauler desactiva qualsevol de les dues coses.

## Simetria, màscara i detall

- {{ui:Simetria X}} ({{key:X}}) esculpeix les dues bandes a través del vermell alhora, per a cares i figures.
- La màscara es veu més fosca mentre esculpiu. {{ui:Treu la màscara}} ({{key:Alt+M}}) la treu, {{ui:Inverteix la màscara}} ({{key:Ctrl+I}}) emmascara el que estava lliure i allibera el que estava emmascarat. La màscara es desa amb la malla.
- {{ui:Detall}} afegeix triangles on esculpiu: les arestes més llargues que la mida fixada al tauler (píxels a la pantalla) es divideixen sota el pinzell. Necessita una malla de triangles, i demana que se'n faci una abans.

Cada traç és un pas de desfer.

:::note
Detall només afegeix triangles; no n'elimina els que s'han fet petitíssims. Un Remesh (de l'espai de treball Malla) torna a igualar tota la malla.
:::

Vegeu també [Edita una malla](topic:mesh-edit), [Malles](topic:meshes) i [Modificadors sobre una malla](topic:modifiers).
