---
title: El cub de vista
summary: Feu clic a una cara, aresta o cantonada del cub de la cantonada de la vista per mirar des d'allà, arrossegueu-lo per fer òrbita, gireu l'anell de la brúixola, feu un gir de vista de cara i torneu a l'inici.
keywords: cub de vista, viewcube, cub, brúixola, nord, vista d'inici, vistes estàndard, superior, davant, dreta, iso, cantonada, aresta, òrbita, girar la vista, icona d'eixos, indicador de cantonada, navegació
from: e1ec1347
---

El cub de vista és a la part superior dreta de la vista 3D. Gira amb la vista, de manera que sempre mostra cap a on mireu: {{ui:Superior}} és amunt, {{ui:Davant}} mira cap al sud (mireu cap al nord, al llarg de l'eix verd, quan el mireu), {{ui:Dreta}} mira cap a l'est (eix vermell). Es manté transparent fins que el punteu.

## Mireu des d'un costat, una aresta o una cantonada

1. Situeu el punter sobre el cub. La part sota el punter s'il·lumina: el centre d'una cara, una aresta (s'il·lumina en les dues cares que la comparteixen) o una cantonada (en les tres cares).
2. Feu-hi clic. La vista gira per mirar des d'aquell lloc, mantenint el mateix centre i zoom.

Hi ha 26 llocs on fer clic: 6 cares ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Davant}}, {{ui:Darrere}}, {{ui:Esquerra}}, {{ui:Dreta}}), 12 arestes i 8 cantonades. Una cantonada dona la clàssica vista de tres quarts; una aresta es veu a mig camí entre dues cares.

Fer clic a {{ui:Davant}} és el mateix que {{ui:Vistes}}, {{ui:Davant}} de la barra d'eines, però sense l'ajust de zoom. {{ui:Vistes}} encara fa zoom a tot el model.

## Feu òrbita arrossegant el cub

Arrossegueu el cub per girar la vista, igual que en fer òrbita a la mateixa vista. Un arrossegament mai no es considera un clic, de manera que podeu agafar el cub per qualsevol punt.

## L'anell de la brúixola

L'anell sota el cub porta N, E, S i O.

- **Arrossegueu l'anell** per girar el model al voltant de l'eix vertical, com si estigués sobre una plataforma giratòria. L'anell segueix el punter.
- **Feu clic a una lletra** per mirar des d'aquell costat, mantenint com de pronunciadament mireu cap avall. En una vista directament des de dalt, la lletra on feu clic va a la part inferior de la pantalla.

## Vistes de cara: fletxes

Quan mireu directament una cara, apareixen petites fletxes al voltant del cub:

- Els quatre **triangles** porten la cara d'aquell costat al davant: el triangle de sobre del cub mostra la cara que era a dalt, i així successivament.
- Les dues **fletxes corbes** de la part superior dreta giren la imatge un quart de volta en sentit horari o antihorari, sense canviar la cara que mireu. Useu-les per girar un plànol de manera que una paret llarga quedi travessada a la pantalla.

## Inici

El botó de la casa, a la part superior esquerra del cub, torna a la vista de tres quarts {{ui:Iso}} i ajusta tot el model a la vista. {{key:Home}} fa el mateix mentre el cub té el focus del teclat.

## Amb el teclat

Premeu {{key:Tab}} fins al cub, i després:

| Tecla | Fa |
|---|---|
| {{key:left}} / {{key:right}} | trieu un costat, aresta o cantonada al voltant del cub, en passos de vuitè de volta (els lectors de pantalla n'indiquen quina) |
| {{key:up}} / {{key:down}} | trieu una de més alta o més baixa, fins a {{ui:Superior}} o fins a {{ui:Inferior}} |
| {{key:Enter}} o {{key:Space}} | mireu des de la que heu triat |
| {{key:Shift+left}} / {{key:Shift+right}} | gireu la vista un quart de volta al voltant de l'eix vertical |
| {{key:Home}} | la vista d'inici |
| {{key:Esc}} | deixeu el cub |

Les tecles premudes sobre el cub es queden amb el cub: no inicien eines de ModelCraft.

## Icona d'eixos o res

Obriu {{ui:Configuració}} ({{key:Mod+,}}), la pestanya {{ui:ModelCraft}}, i establiu **Indicador de cantonada** a {{ui:Cub de vista}} (l'inicial), {{ui:Icona d'eixos}} (un petit marcador X, Y, Z a la part inferior esquerra: X vermell, Y verd, Z blau) o {{ui:Cap}}. Aquest navegador recorda l'elecció. Vegeu [Configuració de ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft no té balanceig: fora de les vistes directament de dalt i directament de baix, amunt a la pantalla és sempre amunt al model. El cub i les fletxes corbes poden girar una vista en planta; no poden inclinar una vista lateral fins a posar-la de cantell.
:::
