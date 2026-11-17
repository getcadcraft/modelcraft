---
title: Tecles i accions del ratolí
summary: Totes les dreceres de teclat, accions del ratolí, gestos del pad tàctil i gestos de pantalla tàctil de ModelCraft, agrupats segons la seva funció.
keywords: teclat, dreceres, tecles, ratolí, pad tàctil, gestos, pantalla tàctil, resum de dreceres, ctrl, ordre, tecles de fletxa, sense ratolí
from: e2348957
---

Aquestes són les tecles de l'estil Prem/Estira (push-pull), amb les quals comença ModelCraft. Per a l'altre estil, vegeu [Tecles de Modeler](topic:keyboard#modeler-keys) més avall i [Configuració de ModelCraft](topic:settings).

Les dreceres funcionen quan la vista 3D o un botó de la barra d'eines té el focus. Si acabes d'escriure en un camp d'un tauler o has canviat una llista a {{ui:Estil}}, fes primer clic a la vista 3D, o les tecles aniran a aquell camp. Vegeu [Tecles, ratolí i pad tàctil](common:keys) per saber com s'escriuen les tecles a cada ordinador.

## Eines

| Tecla | Eina |
|---|---|
| {{key:Space}} | {{ui:Selecciona}} |
| {{key:L}} | {{ui:Línia}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Cercle}} |
| {{key:N}} | {{ui:Polígon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Desfasament}} |
| {{key:B}} | {{ui:Pinta}} |
| {{key:P}} | {{ui:Prem/Estira}} |
| {{key:M}} | {{ui:Mou}} |
| {{key:Q}} | {{ui:Gira}} |
| {{key:S}} | {{ui:Escala}} |
| {{key:E}} | {{ui:Esborrador}} |
| {{key:T}} | Mesura amb {{ui:Cinta}} |
| {{key:D}} | {{ui:Cota}} |
| {{key:O}} | {{ui:Òrbita}} |
| {{key:H}} | {{ui:Desplaça}} |
| {{key:Z}} | {{ui:Zoom}} |

Les tecles d'eina funcionen només sense tecles modificadores: {{key:Shift}} amb una lletra no fa res, excepte les dues de sota.

## Model i fitxer

| Tecla | Fa |
|---|---|
| {{key:G}} | Crea un component a partir de la selecció |
| {{key:Shift+G}} | Crea un grup a partir de la selecció |
| {{key:Shift+Z}} | Zoom a l'extensió (tot el model) |
| {{key:Mod+Z}} | Desfés |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Refés |
| {{key:Mod+S}} | Desa (baixa el fitxer `.modelcraft`) |
| {{key:Mod+O}} | Obre un model |
| {{key:Mod+A}} | Selecciona-ho tot (al grup obert, si n'hi ha un) |
| {{key:Mod+C}} | Copia la selecció |
| {{key:Mod+X}} | Retalla la selecció |
| {{key:Mod+V}} | Enganxa: la còpia segueix el punter; fes clic on ha d'anar |
| {{key:Mod+Shift+V}} | Enganxa al mateix lloc (d'on s'ha copiat) |
| {{key:Mod+D}} | Duplica: una còpia es mou amb el punter; fes clic per deixar-la |
| {{key:Delete}} o {{key:Backspace}} | Esborra la selecció |
| {{key:PageDown}} / {{key:PageUp}} | Escena següent / anterior |
| {{key:F1}} | Obre o tanca aquesta ajuda (també {{ui:Ajuda}} a la barra de l'aplicació; {{key:Esc}} dins de l'ajuda la tanca) |
| {{key:Ctrl+Shift+F}} | Mode de pantalla: pantalla completa, després barres amagades, després normal (Control també en un Mac) |

## Esc

{{key:Esc}} retrocedeix un nivell cada vegada que el prems:

1. Cancel·la el que l'eina estigui fent (una línia que s'està dibuixant, un Prem/Estira, un moviment). Tot torna enrere.
2. Passa a {{ui:Selecciona}}.
3. Neteja la selecció.
4. Tanca el grup que estàs editant.

També atura la reproducció d'escenes. A la caixa de valors, {{key:Esc}} esborra el que hi has escrit i torna a la vista.

## Mentre una eina treballa

| Tecla | Fa |
|---|---|
| Un dígit, o un dels caràcters `. , - ' " [ < * /` | Comença a escriure a la caixa de valors |
| {{key:Enter}} | Aplica el que has escrit a la caixa de valors |
| {{key:Right}} | Bloqueja a l'eix vermell (torna a prémer per desbloquejar) |
| {{key:Left}} | Bloqueja a l'eix verd |
| {{key:Up}} | Bloqueja a l'eix blau |
| {{key:Down}} | Bloqueja paral·lel a l'última aresta per la qual has passat el punter abans del primer clic |
| Mantén {{key:Shift}} | Manté la direcció en què estàs ajustat, mentre el mantens premut |
| {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}} (Mou) | Alterna entre moure i copiar |

Els bloquejos amb fletxes funcionen a {{ui:Línia}}, {{ui:Rectangle}}, {{ui:Cercle}}, {{ui:Polígon}}, {{ui:Mou}}, {{ui:Escala}} i {{ui:Cinta}} (quan mesures des d'un punt), després del primer clic. {{ui:Prem/Estira}} es mou sempre al llarg de la direcció de la cara i no té bloquejos. A {{ui:Gira}}, les tecles de fletxa mostren un missatge "Bloquejat" després del primer clic, però no canvien el gir.

## Tecles de fletxa en altres moments

Quan cap eina no està a mig fer alguna cosa, les tecles de fletxa mouen la càmera:

| Tecla | Fa |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Òrbita |
| {{key:Shift}} amb una fletxa | Desplaça |

## Ratolí

| Acció | Fa |
|---|---|
| Clic | Usa l'eina actual |
| Prem, arrossega, deixa anar | Igual que dos clics (per a les eines de dibuix); una selecció amb finestra (per a {{ui:Selecciona}}); esborra pel camí (per a {{ui:Esborrador}}) |
| Doble clic | {{ui:Selecciona}}: cara amb les seves arestes, aresta amb les seves cares, obre un grup; un espai buit tanca el grup. {{ui:Prem/Estira}}: repeteix l'última distància |
| Triple clic | {{ui:Selecciona}}: tot el connectat |
| {{key:Shift}} + clic | {{ui:Selecciona}}: entra i surt de la selecció |
| {{key:Mod}} + clic | {{ui:Selecciona}}: afegeix a la selecció |
| {{key:Shift}} + {{key:Mod}} + clic | {{ui:Selecciona}}: treu de la selecció |
| Arrossegament amb el botó central | Òrbita, amb qualsevol eina |
| {{key:Shift}} + arrossegament amb el botó central | Desplaça, amb qualsevol eina |
| Arrossegament amb el botó dret | Desplaça, amb qualsevol eina |
| Roda | Zoom cap al punter |

No hi ha menú de clic dret.

## Pad tàctil

El que fa un lliscament amb dos dits depèn de {{ui:Configuració}} › {{ui:ModelCraft}} › Desplaçament:

| Gest | Pad tàctil (o similar) | Roda del ratolí |
|---|---|---|
| Lliscament amb dos dits | Òrbita | Zoom cap al punter |
| {{key:Shift}} + lliscament amb dos dits | Desplaça | Zoom |
| Pinça | Zoom cap al punter | Zoom cap al punter |
| Prem i arrossega amb dos dits (clic secundari mantingut) | Desplaça | Desplaça |

Vegeu [Òrbita, desplaçament i zoom](topic:orbit-pan-zoom#on-a-trackpad) i [Configuració de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Tecles de Modeler

Amb {{ui:Configuració}} › {{ui:ModelCraft}} › Controls posat a estil Modeler:

| Tecla | Fa |
|---|---|
| {{key:W}} o {{key:Space}} | {{ui:Selecciona}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Línia}} / {{ui:Rectangle}} / {{ui:Cercle}} / {{ui:Polígon}} |
| {{key:E}} | {{ui:Prem/Estira}} (extrusió) |
| {{key:T}} | Mesura amb {{ui:Cinta}} |
| {{key:D}} | {{ui:Cota}} |
| {{key:G}} | Mou la selecció de cop, des del punter |
| {{key:R}} | Gira la selecció al voltant del seu centre (eix blau) |
| {{key:S}} | Escala la selecció al voltant del seu centre |
| {{key:X}} / {{key:Y}} / {{key:Z}} mentre mous o gires | Bloqueja l'eix vermell / verd / blau (torna a prémer per desbloquejar) |
| Clic o {{key:Enter}} | Posa-ho al seu lloc |
| {{key:Esc}} o clic dret | Torna-ho al seu lloc |
| {{key:Shift+D}} | Duplica i mou la còpia |
| {{key:X}} o {{key:Delete}} | Esborra la selecció |
| {{key:A}} / {{key:Alt+A}} | Selecciona-ho tot / no selecciones res |
| {{key:Tab}} | Obre el grup o component seleccionat; torna a prémer per tancar-lo |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Crea un grup / crea un component |
| Teclat numèric {{key:1}} / {{key:3}} / {{key:7}} | Vista de davant / dreta / superior ({{key:Mod}} per a darrere / esquerra / inferior) |
| Teclat numèric {{key:5}} | Perspectiva activada o desactivada |
| Teclat numèric {{key:.}} | Zoom a la selecció |
| {{key:Home}} o {{key:Shift+C}} | Zoom a l'extensió |
| {{key:Shift+Tab}} | Ajust activat o desactivat |
| Arrossegament amb el botó central / amb {{key:Shift}} / amb {{key:Mod}} | Òrbita / desplaça / zoom |
| {{key:Alt}} + arrossegament / {{key:Alt+Shift}} + arrossegament | Òrbita / desplaça (sense necessitat del botó central) |

Copiar, enganxar, desfer, desar i obrir mantenen les tecles indicades més amunt. Els valors escrits, la caixa de valors i {{ui:Prem/Estira}} funcionen igual en tots dos estils.

## Pantalla tàctil

| Gest | Fa |
|---|---|
| Toc | Un clic amb l'eina actual |
| Doble toc | Un doble clic |
| Prem, arrossega, aixeca | Igual que prem, arrossega i deixa anar amb el ratolí |
| Dos dits: pinça | Zoom |
| Dos dits: es mouen junts | Desplaça (a {{ui:Configuració}} › {{ui:ModelCraft}} › Pantalla tàctil es pot fer Òrbita) |
| Tres dits: es mouen junts | Òrbita (Desplaça quan dos dits fan òrbita) |
| Mantén un dit quiet | Acaba l'eina, com {{key:Enter}}; sense res en marxa, arrossega després per fer òrbita |
| Un segon dit durant una acció amb un dit | Cancel·la aquella acció |
| Eina {{ui:Òrbita}}, després arrossega amb un dit | Òrbita |

Per escriure un valor en una pantalla tàctil, toca la caixa de valors de la part inferior, escriu, i prem la tecla Enter (o la tecla d'acció) del teclat.

## On és Mou

El Mou és a l'eina {{ui:Mou}}, tecla {{key:M}}: tria què vols moure, fes clic a un punt base i després a un segon punt, o escriu una distància. Vegeu [Mou, copia i crea matrius](topic:move-copy).
