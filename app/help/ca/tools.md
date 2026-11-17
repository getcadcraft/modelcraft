---
title: Llista d'eines
summary: Cada eina de ModelCraft amb la seva tecla, què fa cada clic i què podeu escriure a la caixa de valor mentre funciona.
keywords: eines, barra d'eines, ordres, llista, línia, rectangle, cercle, polígon, desfasament, arc, corba, spline, segueix-me, escombrat, arc de 2 punts, arc des del centre, selecciona, prem/estira, mou, gira, escala, esborrador, cinta, cota, òrbita, desplaça, zoom, col·loca component
from: e08a274f
---

La suggerència de la barra d'estat sempre diu què vol l'eina actual a continuació. {{key:Esc}} cancel·la el que una eina tingui a mig fer.

## Eines de dibuix

| Eina | Tecla | Clics | Escriviu a la caixa de valor |
|---|---|---|---|
| {{ui:Línia}} | {{key:L}} | Inici, i després cada punt següent. S'atura quan es tanca una cara, o amb {{key:Esc}} | Una longitud cap al punter; `[x,y,z]` un punt; `<dx,dy,dz>` un desplaçament ({{ui:Longitud}}) |
| {{ui:Rectangle}} | {{key:R}} | Primer cantó (terra o cara), cantó oposat | Amplada i profunditat: `4m,3m` ({{ui:Cotes}}) |
| {{ui:Cercle}} | {{key:C}} | Centre (terra o cara), un punt a la vora | Abans del primer clic: costats, `24s` o `24` ({{ui:Costats}}). Després: el radi ({{ui:Radi}}) |
| {{ui:Polígon}} | {{key:N}} | Centre, un cantó | Igual que Cercle; comença amb 6 costats |
| {{ui:Arc}} | {{key:A}} | Inici, final, i després la curvatura | La longitud de la corda després de l'inici ({{ui:Longitud}}); la curvatura després del final ({{ui:Curvatura}}); `12s` per a segments |
| {{ui:Transportador}} | — | Centre, punt de 0°, i després l'angle | L'angle en graus ({{ui:Angle}}) |
| {{ui:Segueix-me}} | — | Seleccioneu un camí, i després feu clic a la cara (o feu clic a la cara i després a una aresta del camí) | — |
| {{ui:Pinta}} | {{key:B}} | Una cara, grup o component | — ({{key:Ctrl}} connectat, {{key:Shift}} tot d'aquell color, {{key:Alt}} recull un color) |
| {{ui:Desfasament}} | {{key:F}} | Una cara (o seleccioneu abans cares o arestes), i després el costat i la distància | La distància ({{ui:Distància}}); cap dins de la cara és cap a dins |
| {{ui:Corba}} | — | Punts per on passa la corba; {{key:Enter}} o un doble clic l'acaba | Una longitud al llarg del punter, `[x,y,z]` o `<dx,dy,dz>` per al punt següent |
| {{ui:Arc des del centre}} | — | Centre, inici, i després el final | El radi després del centre; l'angle en graus després de l'inici; `12s` per a segments |

## Eines d'edició

| Eina | Tecla | Clics | Escriviu a la caixa de valor |
|---|---|---|---|
| {{ui:Selecciona}} | {{key:Space}} | Clic, doble clic, triple clic, arrossegueu una caixa. Vegeu [Selecciona elements](topic:select) | Amb una cota o una aresta seleccionada: una longitud nova, que redimensiona el model |
| {{ui:Prem/Estira}} | {{key:P}} | La cara, i després la distància. Feu doble clic a una cara per repetir l'última distància | Una distància; una de negativa va en sentit contrari ({{ui:Distància}}) |
| {{ui:Mou}} | {{key:M}} | Des d'un punt, fins a un punt. Mantingueu {{key:Ctrl}} o {{key:Alt}} per copiar | Una distància cap al punter, `<dx,dy,dz>` o `[x,y,z]` ({{ui:Distància}}). Després d'una còpia: `3x` o `/3` |
| {{ui:Gira}} | {{key:Q}} | Centre (sobre una cara per girar-la en el seu pla), direcció inicial, direcció final | L'angle en graus ({{ui:Angle}}) |
| {{ui:Escala}} | {{key:S}} | El punt que es manté, un punt de referència, la nova mida | Un factor: `2`, `0.5` ({{ui:Escala}}) |
| {{ui:Esborrador}} | {{key:E}} | Clic o arrossegament sobre arestes, grups, guies i cotes | res |
| {{ui:Cinta}} | {{key:T}} | Des d'una aresta: una línia guia paral·lela. Des d'un punt: mesura i deixa un punt guia | El desplaçament ({{ui:Desfasament}}) o la distància ({{ui:Longitud}}) |
| {{ui:Cota}} | {{key:D}} | Dues cantonades (o una aresta), i després on va la línia de cota. Vegeu [Cota i redimensiona](topic:dimensions) | El desplaçament ({{ui:Desfasament}}). Just després: una longitud nova, que redimensiona el model |

{{ui:Mou}}, {{ui:Gira}} i {{ui:Escala}} actuen sobre la selecció. Si no hi ha res seleccionat, agafen primer el que feu clic (una cara porta les seves arestes).

## Eines de càmera

| Eina | Tecla | Arrossegueu per |
|---|---|---|
| {{ui:Òrbita}} | {{key:O}} | Girar al voltant de la part del model que hi ha sota el punter ({{key:Shift}} desplaça) |
| {{ui:Desplaça}} | {{key:H}} | Lliscar la vista |
| {{ui:Zoom}} | {{key:Z}} | Zoom: amunt és acostar, avall és allunyar |
| {{ui:Extensió}} | {{key:Shift+Z}} | (un botó, no una eina) Ajusta tot el model |

Amb el ratolí rarament us calen aquestes: arrossegar amb el botó del mig fa òrbita, arrossegar amb el botó dret desplaça, i la roda fa zoom amb qualsevol eina. Vegeu [Òrbita, desplaça i zoom](topic:orbit-pan-zoom).

## Organitza

| Botó | Tecla | Fa |
|---|---|---|
| {{ui:Component}} | {{key:G}} | Converteix la selecció en un component |
| {{ui:Grup}} | {{key:Shift+G}} | Converteix la selecció en un grup |
| {{ui:Descompon}} | cap | Torna a convertir els grups i components seleccionats en geometria solta |

## Col·loca un component

No és a la barra d'eines: feu clic a {{ui:Col·loca}} al costat d'un component del panell {{ui:Components}}. Feu clic una vegada on ha d'anar l'origen del component; després l'eina torna a {{ui:Selecciona}}.
