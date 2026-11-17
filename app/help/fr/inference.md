---
title: Inférence et accrochage
summary: Ce que signifient les repères colorés, quel accrochage l'emporte, et comment verrouiller une direction avec les touches fléchées ou Maj.
keywords: inférence, accrochage, accrocher, extrémité, milieu, centre de face, centre, sur l'arête, sur la face, axe, axe rouge, axe vert, axe bleu, parallèle, perpendiculaire, verrouiller, maj, accrochage aux objets
from: e78984e9
---

Pendant qu'un outil de dessin ou de modification travaille, ModelCraft examine ce qui se trouve sous le pointeur et s'accroche à l'élément le plus utile à proximité. Un repère indique ce qu'il a trouvé, et l'indication en bas à gauche le nomme.

## Repères et indications

| Indication | Repère | S'accroche à |
|---|---|---|
| Extrémité | Cercle vert | L'extrémité d'une arête |
| Milieu | Cercle cyan | Le milieu d'une arête |
| Centre de face | Cercle bleu | Le milieu de la face sous le pointeur |
| Point de guidage | Gris | Un point de guidage laissé par le mètre ruban |
| Origine | Ocre | Le point où se rejoignent les axes rouge, vert et bleu |
| Sur l'axe rouge / Sur l'axe vert / Sur l'axe bleu | Une ligne de cette couleur | Une ligne partant de votre point de départ dans cette direction |
| Parallèle à l'arête / Perpendiculaire à l'arête | Ligne magenta | Une ligne partant de votre point de départ, parallèle ou perpendiculaire à l'arête mémorisée (voir plus bas) |
| Verrouillé | Ligne magenta | Une direction verrouillée avec une touche fléchée ou {{key:Shift}} |
| Sur l'arête | Carré rouge | N'importe où le long d'une arête |
| Sur le guide | Gris | N'importe où le long d'une ligne de guidage |
| Sur la face | Losange bleu | N'importe où sur une face |
| Sur le plan | aucun | Le plan où vous avez commencé, lorsque le pointeur est au-dessus d'un espace vide |
| Sur le sol | aucun | Le sol (le plan rouge-vert), lorsque rien d'autre n'est présent |

Lorsqu'une ligne d'axe partant de votre point de départ croise une arête ou un guide, ModelCraft s'accroche au croisement, et l'indication nomme les deux, par exemple « Sur l'axe rouge, sur l'arête ».

## Quel accrochage l'emporte

1. **Points** à environ 12 pixels : d'abord les extrémités, puis les points de guidage, les milieux, le centre de la face sous le pointeur et l'origine.
2. **Directions** à partir du point de départ : les axes rouge, vert et bleu, et parallèle ou perpendiculaire à l'arête mémorisée.
3. **Sur une arête** ou sur une ligne de guidage.
4. **Sur une face.**
5. **Le plan de dessin**, ou le sol.

Les éléments masqués derrière une face ne sont jamais accrochés. Faites tourner la vue pour voir le point voulu.

## Dessiner sur une face à partir d'un point

Un {{ui:Rectangle}}, un {{ui:Circle}} ou un {{ui:Polygon}} commencé sur un coin, un milieu, une arête ou le centre d'une face est dessiné **dans le plan de la face sous le pointeur**, et découpe cette face. Une arête appartient à deux faces : c'est donc le côté de l'arête où se trouve le pointeur qui décide. Pour dessiner sur l'extrémité d'une longue boîte, partez du milieu d'une de ses arêtes, le pointeur juste à l'intérieur de la face d'extrémité.

## Parallèle et perpendiculaire

ModelCraft mémorise **la dernière arête que le pointeur a survolée avant votre premier clic**. Commencer sur un coin ou sur une arête compte comme un survol de cette arête. Une fois l'outil en marche, les autres arêtes survolées ne remplacent pas celle-ci.

Pour dessiner une ligne parallèle à une arête existante :

1. Appuyez sur {{key:L}} et survolez l'arête à laquelle vous voulez vous aligner.
2. Déplacez-vous jusqu'au point de départ, sans croiser d'autres arêtes si possible, et cliquez.
3. Déplacez-vous dans la direction parallèle à cette arête. La ligne devient magenta et l'indication affiche « Parallèle à l'arête ». La perpendiculaire fonctionne de la même manière, dans le plan sur lequel vous dessinez.

Si la mauvaise arête a été mémorisée, appuyez sur {{key:Esc}}, survolez la bonne arête et recommencez.

## Verrouiller une direction

Après le premier clic d'un outil, vous pouvez garder le point suivant sur une seule ligne :

| Touche | Verrouille sur |
|---|---|
| {{key:Right}} | L'axe rouge |
| {{key:Left}} | L'axe vert |
| {{key:Up}} | L'axe bleu (verticalement vers le haut) |
| {{key:Down}} | Parallèle à l'arête mémorisée (voir plus haut) |

Appuyez à nouveau sur la même flèche pour déverrouiller. La barre d'état indique « Verrouillé sur l'axe rouge. Appuyez à nouveau sur la même flèche pour déverrouiller. »

Pendant le verrouillage, le point glisse le long de la ligne vers l'endroit où se trouve le pointeur, et s'aligne toujours sur les points que vous survolez : survolez le coin d'une autre boîte pour tracer une ligne le long du rouge, exactement jusqu'à ce coin.

**{{key:Shift}}** verrouille la direction sur laquelle vous êtes accroché à cet instant (un axe, ou le parallélisme), tant que vous le maintenez enfoncé. Relâchez pour déverrouiller.

Les verrouillages fonctionnent dans {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} et {{ui:Tape}}. Avant le premier clic, les touches fléchées font tourner la vue à la place.

## À l'intérieur d'un groupe

Pendant que vous modifiez à l'intérieur d'un groupe ou d'un composant, les axes sont ceux du groupe (ils le suivent, et tournent avec lui s'il a été pivoté). Les accrochages trouvent toujours les points et les arêtes situés hors du groupe, si bien que vous pouvez aligner des éléments sur le reste du modèle.
