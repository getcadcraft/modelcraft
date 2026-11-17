---
title: Edita una malla a l'espai Malla
summary: Seleccioneu els vèrtexs, les arestes i les cares d'una malla, mogueu-los, extruïu-los, feu-los un interior, biselleu-los, talleu-los, fusioneu-los, ompliu-los i uniu-los, amb qualsevol dels dos estils de tecles.
keywords: malla, mode d'edició, espai malla, vèrtex, vèrtexs, aresta, arestes, cara, cares, extrueix, interior, bisell, talla en bucle, ganivet, bisecció, gira per passos, fusiona, dissol, omple, omple amb graella, pont, subdivideix, llisca, edició proporcional, atenuació, espai de treball
from: 92a372dd
---

L'**espai Malla** edita una [malla](topic:meshes) punt per punt: els seus vèrtexs, arestes i cares. La geometria de prem/estira es queda a l'espai **Model**.

## Obre-la

- Trieu {{ui:Mesh}} a la llista {{ui:Workspace}} a l'esquerra de la barra d'eines. La malla seleccionada s'obre per editar-la; un grup o component seleccionat es converteix primer en malla (un pas de desfer).
- O bé feu doble clic a una malla o, amb les tecles del modelador, seleccioneu-la i premeu {{key:Tab}}.
- Sense res seleccionat, el panell ofereix mallas per afegir: pla, quadrícula, cub, cercle, cilindre, con, esfera, esfera ico i tor. Una de nova va on mira la vista i s'obre per editar-la.

{{ui:Back to Model}} (o la llista, {{key:Tab}} amb les tecles del modelador, {{key:Esc}} sense res seleccionat amb les tecles de prem/estira) torna a Model amb la malla seleccionada. Mentre l'espai Malla és obert, la resta del model s'esvaeix i les eines de dibuix de Model queden guardades.

## Selecciona

| Acció | Per a |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Seleccionar vèrtexs, arestes o cares |
| Clic | Seleccionar-ne un; {{key:Shift}}+clic afegeix o treu |
| Arrossegueu una caixa | Seleccionar el que és a dins i visible; {{key:Shift}} afegeix, {{key:Ctrl}} treu |
| {{key:Alt}}+clic a una aresta, o doble clic | El seu bucle d'arestes (un bucle de cares en mode cara; tota la vora en una aresta oberta) |
| {{key:Ctrl}}+{{key:Alt}}+clic a una aresta | El seu anell d'arestes |
| Triple clic | Tot el que hi està unit |

El grup {{ui:Select}} també té {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} i {{ui:Less}}.

## Mou, gira, escala

{{ui:Move}}, {{ui:Rotate}} i {{ui:Scale}} comencen des del punter: moveu-lo, després feu clic o premeu {{key:Enter}} per deixar la selecció, o {{key:Esc}} per cancel·lar. {{key:X}}, {{key:Y}} o {{key:Z}} (o les tecles de fletxa) bloquegen un eix. Escriviu una distància, un angle o un factor per a un valor exacte; els [càlculs](topic:value-box#calculations) també funcionen.

**Edició proporcional** ({{ui:Proportional}}, o el panell): els vèrtexs a prop de la selecció segueixen un moviment, cada cop menys com més lluny, fins a l'abast que definiu, amb l'atenuació que trieu. Activeu {{ui:Only along the mesh}} per mesurar al llarg de les arestes en lloc de en línia recta.

{{ui:Slide}} mou un bucle d'arestes seleccionat al llarg de les arestes del costat.

## Canvia la forma

| Eina | Fa |
|---|---|
| {{ui:Extrude}} | Estira les cares seleccionades cap enfora segons la seva normal, amb noves cares laterals (o fa cares a partir de les arestes de vora obertes). Escriviu la distància |
| {{ui:Inset}} | Una franja dins del contorn de les cares seleccionades; premeu {{key:I}} de nou per a cada cara per separat |
| {{ui:Bevel}} | Talla les arestes seleccionades (o, amb {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, els vèrtexs) a una amplada; la roda o les tecles més i menys afegeixen segments per a una aresta arrodonida |
| {{ui:Loop cut}} | Apunteu una aresta: noves voltes a través de l'anell de cares de quatre costats; la roda defineix quantes; feu clic per tallar |
| {{ui:Knife}} | Feu clic en punts de les arestes o dels cantons; {{key:Enter}} talla recte a través de les cares entre ells, tal com les veieu |
| {{ui:Bisect}} | Dibuixeu una línia a la pantalla: les cares seleccionades (o totes) es tallen al llarg d'ella |
| {{ui:Spin}} | Gira les cares seleccionades o les arestes obertes al voltant de l'eix blau per passos (la roda els defineix); una volta completa tanca |
| {{ui:Subdivide}} | Talla les arestes seleccionades en dues; les cares senceres es converteixen en una quadrícula |
| {{ui:Merge}} | Els vèrtexs seleccionats esdevenen un, al seu centre |
| {{ui:Dissolve}} | Treu la selecció però manté la superfície: les cares s'uneixen |
| {{ui:Fill}} | Una cara a través d'una vora oberta seleccionada (o entre dues arestes obertes) |
| {{ui:Grid fill}} | Omple una vora oberta amb un nombre parell d'arestes amb una quadrícula de quadrilàters |
| {{ui:Bridge}} | Uneix dos bucles d'arestes obertes seleccionats amb cares |
| {{ui:Crease}} | Quant es mantenen vives les arestes seleccionades quan la malla s'alisa amb una superfície de subdivisió: allunyeu-vos del centre, useu la roda (passos de 0.1) o escriviu un valor de 0 a 1. El panell mostra el plec de les arestes seleccionades i també accepta un valor escrit. Les arestes amb plec es dibuixen en magenta |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Giren les cares; alisen els vèrtexs cap als seus veïns; suprimeixen segons el mode de selecció |

Cada una és un pas de desfer. Les coordenades de textura, els colors i els pesos segueixen fins a les noves cares i vèrtexs.

## Remalla

{{ui:Remesh}} torna a fer tota la malla com a triangles igualment grans d'una mida, demanada en prémer-lo (més petit és més fi i més lent). Tanca forats, uneix trossos que se superposen, i iguala una malla que l'escultura ha estirat. Les arestes vives surten una mica arrodonides. Els UV, la pintura i els plecs tornen a començar. Un pas de desfer.

## Retopologia

Per construir una malla nova i més neta sobre una de detallada (una escultura, un escaneig), trieu la detallada sota {{ui:Retopology}} › **Construeix sobre** al panell, i després:

- **Ajusta els punts moguts a la superfície:** els punts que moveu, i les arestes que extruïu, cauen sobre la seva superfície.
- **Posa els punts seleccionats sobre la superfície** els mou ara mateix (un pas de desfer).
- **Mostra les arestes d'aquesta malla davant** dibuixa la malla que construïu sobre la superfície, perquè la pugueu veure.

## Ajusta l'última operació

Després de {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} o {{ui:Spin}}, el panell mostra la seva configuració (amplada, segments, perfil, talls…). Canvieu-ne una i l'operació es refà des del seu inici, encara com un sol pas de desfer.

## Tecles

| | Tecles de prem/estira | Tecles del modelador |
|---|---|---|
| Mou, gira, escala | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dues vegades llisca) |
| Extrueix, interior | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Suprimeix | {{key:E}} o {{key:Delete}} | {{key:X}} o {{key:Delete}} |
| Plec | {{key:Shift+C}} | {{key:Shift+E}} |
| Seleccionar tot, res, invertir | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Ambdós | {{key:Ctrl+B}} bisell, {{key:Ctrl+R}} talla en bucle, {{key:K}} ganivet | el mateix, i {{key:F}} omple, {{key:M}} fusiona, {{key:Ctrl+X}} dissol, {{key:L}} / {{key:Ctrl+L}} enllaçat, {{key:Alt+N}} simetria, {{key:O}} proporcional, {{key:Shift+V}} llisca de vèrtex |

Vegeu també [Malles](topic:meshes), [Modificadors sobre una malla](topic:modifiers) i [Encara no implementat](topic:not-built-yet).
