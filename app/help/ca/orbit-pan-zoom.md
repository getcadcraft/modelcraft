---
title: Òrbita, desplaçament i zoom
summary: Moure la càmera amb ratolí, trackpad, pantalla tàctil o teclat, i anar a les vistes estàndard.
keywords: òrbita, desplaça, zoom, premuda llarga, tres dits, dos dits, toc, navegar, càmera, vista, girar la vista, trackpad, tàctil, pinça, botó del mig, extensions, perspectiva, paral·lela, vista superior, iso
from: 10d4d33a
---

Podeu moure la càmera en qualsevol moment, fins i tot enmig de dibuixar una línia o d'empènyer una cara: l'eina espera on era.

## Amb un ratolí de tres botons

| Per | Feu això |
|---|---|
| Òrbita | Arrossegueu amb el botó del mig (premeu la roda) |
| Desplaça | Arrossegueu amb el botó dret, o manteniu premut {{key:Shift}} i arrossegueu amb el botó del mig. Prémer o deixar anar {{key:Shift}} durant un arrossegament canvia entre òrbita i desplaçament |
| Zoom | Gireu la roda. Fa zoom cap a la cara sota el punter, o cap al punt que hi ha sota a la profunditat del centre de la vista |
| Veure el model sencer | {{key:Shift+Z}} o {{ui:Extensió}} |

Òrbita fa girar la vista al voltant de la part del model que hi ha sota el punter, de manera que aquell punt es queda on és mentre tot gira al seu voltant. Sobre l'espai buit gira al voltant del centre de la vista. Desplaça manté el punt que heu agafat sota el punter.

Per orbitar sempre al voltant del centre de la vista, o per fer l'òrbita i el desplaçament més ràpids o més lents, obriu {{ui:Configuració}} ({{key:Mod+,}}), pestanya {{ui:ModelCraft}}, **Òrbita i desplaçament**. Les velocitats s'apliquen al ratolí, al trackpad, al tàctil i a les tecles de fletxa.

Un clic dret sense arrossegar no fa res; ModelCraft no té menú de clic dret.

## Sense botó del mig

Feu servir les eines de càmera de la barra d'eines, o el teclat:

1. Premeu {{key:O}} (o feu clic a {{ui:Òrbita}}) i arrossegueu amb el botó esquerre per girar. Manteniu {{key:Shift}} durant l'arrossegament per desplaçar.
2. Premeu {{key:H}} (o feu clic a {{ui:Desplaça}}) i arrossegueu per desplaçar.
3. Premeu {{key:Z}} (o feu clic a {{ui:Zoom}}) i arrossegueu cap amunt per apropar, o cap avall per allunyar.
4. Premeu {{key:Space}} per tornar a {{ui:Selecciona}}, o premeu la tecla de l'eina que voleu a continuació.

Les eines de càmera substitueixen l'eina que feu servir. Per mirar al voltant enmig d'una operació sense perdre-la, useu el teclat:

- Les tecles de fletxa fan òrbita.
- {{key:Shift}} amb les tecles de fletxa desplaça.

Mentre una eina de dibuix és enmig d'una operació (després del primer clic), les tecles de fletxa bloquegen direccions en lloc de fer òrbita. Vegeu [Inferència i ajust](topic:inference#lock-a-direction).

## En un trackpad

La manera més fàcil: obriu {{ui:Configuració}} ({{key:Mod+,}}), pestanya {{ui:ModelCraft}}, i poseu Desplaçament a **Trackpad** (o deixeu-ho en "Automàtic"). Després lliscau amb dos dits per fer òrbita, manteniu {{key:Shift}} i lliscau per desplaçar, i pinceu per fer zoom, sense botons de càmera. Vegeu [Configuració de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Amb Desplaçament configurat a **Roda del ratolí**:

:::mac
- **Zoom:** lliscau amb dos dits, o pinceu. Tots dos fan zoom cap al punter.
- **Desplaça:** premeu amb dos dits (un clic secundari) i mantingueu els dits premuts mentre arrossegueu. Activeu "Clic secundari" a **Configuració del sistema**, després **Trackpad**, si el clic amb dos dits no fa res.
- **Òrbita:** premeu {{key:O}} i arrossegueu amb un dit, o useu les tecles de fletxa.
- Mantenir premut {{key:Ctrl}} mentre feu clic pot no comptar com a clic dret a ModelCraft, segons el navegador: pot actuar com un clic amb {{key:Ctrl}} premut. Useu la pressió amb dos dits per desplaçar.
:::

:::windows linux
- **Zoom:** lliscau amb dos dits. La pinça també fa zoom quan el controlador del trackpad l'envia com a desplaçament amb {{key:Ctrl}}.
- **Desplaça:** arrossegueu amb el botó dret (en molts trackpads, premeu la cantonada inferior dreta i arrossegueu), o premeu {{key:H}} i arrossegueu.
- **Òrbita:** premeu {{key:O}} i arrossegueu, o useu les tecles de fletxa.
:::

Amb Roda del ratolí, lliscar amb dos dits fa zoom; no desplaça. És el contrari que en moltes pàgines web, i així es comporta la roda del ratolí en la majoria de modeladors 3D.

:::tip
{{key:Space}} tria l'eina {{ui:Selecciona}} a ModelCraft. Mantenir premut {{key:Space}} i arrossegar no desplaça, com sí que fa en algunes altres aplicacions.
:::

## En una pantalla tàctil

:::touch
- **Un dit** fa servir l'eina actual: **toqueu** per fer clic, **premeu i arrossegueu** per dibuixar o arrossegar.
- Mentre el dit d'una eina de dibuix és a la pantalla, una **lupa** per sobre mostra què hi ha sota el dit, perquè pugueu veure el punt final, el punt mig o la vora on s'ajusta abans d'aixecar-lo.
- **Mantingueu quiet** durant mig segon per acabar el que fa l'eina, com ho fa {{key:Enter}}: una corba, una cadena de línies. Sense res en marxa, mantenir quiet i després arrossegar el mateix dit **fa òrbita** fins que l'aixequeu.
- **Dos dits** arrossegats junts **desplacen**; **pinceu** per fer zoom. Tots dos funcionen en un sol gest.
- **Tres dits** arrossegats junts **fan òrbita**.
- Per intercanviar-los (dos dits fan òrbita, tres desplacen), obriu {{ui:Configuració}}, pestanya {{ui:ModelCraft}}, Pantalla tàctil.
- Posar un segon dit **cancel·la** el que havia iniciat el primer (un rectangle a mig dibuixar, un prem i estira en curs). Aixequeu els dits i comenceu de nou.
- Una petita barra a la part inferior de la vista té **Fet** ({{key:Enter}}), **Cancel·la** ({{key:Esc}}) i **Desfés**, per quan no hi ha teclat.
- L'ajust i la selecció arriben una mica més lluny que amb un ratolí, i els botons són més grans, de manera que un dit els pot encertar.
:::

:::mouse
En una pantalla tàctil, un dit fa servir l'eina actual (tocar per fer clic, mantenir quiet per acabar, o mantenir quiet i arrossegar per fer òrbita), dos dits desplacen i pinceu per fer zoom, tres dits fan òrbita, i una petita barra ofereix Fet, Cancel·la i Desfés.
:::

## Vistes estàndard

1. Feu clic a {{ui:Vistes}} a l'extrem dret de la barra d'eines.
2. Trieu {{ui:Iso}}, {{ui:Superior}}, {{ui:Davant}}, {{ui:Dreta}}, {{ui:Darrere}}, {{ui:Esquerra}} o {{ui:Inferior}}.

La vista gira cap a aquella direcció i ajusta tot el model a la pantalla. {{ui:Davant}} mira cap al nord, al llarg de l'eix verd; {{ui:Superior}} mira directament cap avall amb el nord amunt.

El cub de vista de la part superior dreta de la vista fa el mateix d'un sol clic, a més de les arestes i els vèrtexs, d'un anell de brúixola per girar el model i d'un botó d'inici. Vegeu [El cub de vista](topic:view-cube).

## Projecció en perspectiva i paral·lela

Trieu {{ui:Vistes}}, i després {{ui:Perspectiva}}. Una marca de verificació vol dir que la perspectiva és activada. Amb ella desactivada, la vista és una projecció paral·lela (ortogonal): les línies paral·leles del model es mantenen paral·leles a la pantalla, que és el que voleu per als alçats des de {{ui:Davant}} o {{ui:Dreta}}. La barra d'estat diu "Perspectiva." o "Projecció paral·lela."

Cada escena recorda si estava en perspectiva. Vegeu [Desa les vistes com a escenes](topic:scenes).
