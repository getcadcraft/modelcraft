---
title: Dessiner des faces avec des lignes, des rectangles, des cercles et des arcs
summary: Créer des faces planes sur le sol ou sur d'autres faces, les découper avec des lignes, et dessiner des cercles et des polygones avec le nombre de côtés souhaité.
keywords: dessiner, ligne, rectangle, cercle, polygone, décaler, retrait, cadre, bordure, arc, courbe, spline, lisse, câble, chemin, bombement, rayon, courbe, face, plan d'étage, empreinte, découper, côtés, segments, contour, crayon
from: b6d7b7dd
---

Tout dans ModelCraft commence par une **face** plane : une surface fermée par des arêtes. Vous pouvez dessiner directement une face avec {{ui:Rectangle}}, {{ui:Cercle}} ou {{ui:Polygone}}, ou la contourner arête par arête avec {{ui:Ligne}}. Les faces sont ce que [Pousser/tirer](topic:push-pull) transforme en solides.

## Dessiner un rectangle

1. Appuyez sur {{key:R}}.
2. Cliquez sur le premier coin : sur le sol, ou sur n'importe quelle face du modèle.
3. Déplacez le pointeur. Le rectangle reste sur le sol (ou sur la face où vous avez commencé), et la zone de valeur ({{ui:Cotes}}) affiche sa largeur et sa profondeur. L'info-bulle indique « Carré » lorsque les côtés sont égaux.

   Pour dessiner sur un autre plan, pointez-le : une face qui passe par le premier coin place le rectangle sur cette face, et un accrochage à un point hors du plan (une extrémité, une arête, l'axe bleu) dresse le rectangle à la verticale par ses deux coins. Revenez à un point du premier plan pour qu'il se recouche. Pour conserver un plan, appuyez sur une touche fléchée : {{key:Up}} garde le rectangle à plat (le plan bleu), {{key:Right}} sur le plan rouge, {{key:Left}} sur le plan vert. Appuyez de nouveau sur la même touche pour le déverrouiller.
4. Cliquez sur le coin opposé, ou saisissez les deux dimensions séparées par une virgule puis appuyez sur {{key:Enter}} : `4m,3m`, `4000,3000` dans un modèle en millimètres, ou `12',10'6"` en pieds et pouces.

   Une face apparaît, entourée de quatre arêtes.

Les dimensions saisies suivent le sens vers lequel vous pointiez : si le pointeur est à gauche du premier coin au moment de la saisie, le rectangle grandit vers la gauche.

:::warning
La virgule sépare les deux dimensions, elle ne peut donc pas servir de séparateur décimal. Saisissez `2.5m,3m`, jamais `2,5m`.
:::

## Dessiner un cercle ou un polygone

1. Appuyez sur {{key:C}} pour un cercle, ou sur {{key:N}} pour un polygone.
2. Pour changer le nombre de côtés, saisissez-le avant de cliquer : `12s` (ou simplement `12`) puis {{key:Enter}}. Un cercle commence avec 24 côtés et un polygone avec 6. L'info-bulle affiche le nombre actuel, et ModelCraft le conserve pour le cercle suivant jusqu'à ce que vous le changiez ou changiez d'outil.
3. Cliquez sur le centre, sur le sol ou sur une face. Pour le centrer sur une face, pointez le milieu de la face (« Centre de la face ») ou le milieu d'une de ses arêtes (« Milieu »), le pointeur juste à l'intérieur de cette face : le cercle est dessiné sur cette face, même sur l'extrémité étroite d'une longue boîte.
4. Cliquez pour définir le rayon, ou saisissez-le ({{ui:Rayon}} dans la zone de valeur) puis appuyez sur {{key:Enter}}.

Un cercle est un polygone à nombreux côtés. Lorsque vous soulevez un cercle avec Pousser/tirer, ses côtés sont adoucis pour que le cylindre apparaisse comme une seule surface lisse.

## Dessiner un arc

1. Appuyez sur {{key:A}} ({{ui:Arc}}).
2. Cliquez où l'arc commence, puis où il se termine (ou saisissez la longueur entre les deux).
3. Déplacez le pointeur pour faire bomber l'arc, puis cliquez. L'info-bulle indique « Demi-cercle » lorsque le bombement vaut la moitié de la distance entre les extrémités. Ou saisissez de combien le milieu s'écarte : `2` puis {{key:Enter}}.

Pour dessiner un arc autour d'un point, utilisez {{ui:Arc par le centre}} : cliquez sur le centre, puis où l'arc commence (ou saisissez le rayon), puis où il se termine (ou saisissez l'angle en degrés, comme `90`). Il s'accroche par pas de 15°.

Un arc commencé sur une face est dessiné sur cette face ; sinon il est posé sur le sol, ou dressé lorsque ses deux extrémités sont à des hauteurs différentes. Un arc comporte 12 segments ; saisissez `24s` pendant le dessin pour en avoir davantage. Les arcs délimitent des faces comme les lignes : un arc qui traverse le coin d'un rectangle le découpe.

## Dessiner une courbe lisse

{{ui:Courbe}} trace une ligne lisse qui passe par chaque point sur lequel vous cliquez : un câble, le tracé d'une main courante, une bordure de jardin. Elle peut quitter le sol : les points s'accrochent aux coins, aux arêtes et aux faces partout, et les touches fléchées verrouillent le rouge, le vert ou le bleu comme avec {{ui:Ligne}}.

1. Cliquez sur {{ui:Courbe}} dans le groupe {{ui:Dessiner}}.
2. Cliquez sur les points par lesquels passe la courbe. Saisissez `<0,0,1>` puis {{key:Enter}} pour un point situé 1 au-dessus du dernier, `[x,y,z]` pour un emplacement exact, ou une longueur pour un point situé à cette distance vers le pointeur.
3. Appuyez sur {{key:Enter}} ou double-cliquez pour terminer. Cliquez de nouveau sur le premier point pour fermer la courbe. {{key:Backspace}} annule le dernier point.

Une courbe se sélectionne comme un seul élément. Pour la modifier, sélectionnez-la et cliquez sur {{ui:Modifier les points}} dans {{ui:Infos sur l'entité}} : ses points apparaissent sous forme de carrés. Cliquez sur l'un, puis cliquez où il doit aller (ou saisissez `<dx,dy,dz>`). {{key:Esc}} remet un point à sa place et termine la modification. Une courbe plane fermée crée une face ; une courbe qui délimite une face ne peut plus être modifiée.

## Décaler : une bordure à l'intérieur ou à l'extérieur d'une face

{{ui:Décaler}} copie le contour d'une face à une distance donnée à l'intérieur (ou à l'extérieur), pour un cadre, une bordure, un appui de fenêtre ou la vitre d'un écran.

1. Appuyez sur {{key:F}} puis cliquez sur la face, ou sélectionnez d'abord la face puis appuyez sur {{key:F}}.
2. Déplacez le pointeur à l'intérieur de la face pour un contour intérieur, ou à l'extérieur pour un contour extérieur. Le nouveau contour suit, et l'info-bulle indique la distance.
3. Cliquez, ou saisissez la distance puis appuyez sur {{key:Enter}}.

La face se divise en deux : la face intérieure et un cadre autour (ou un nouvel anneau à l'extérieur). Poussez/tirez l'une ou l'autre immédiatement : pour un écran, dessinez la boîte, poussez-la à son épaisseur, décalez la face avant de 30 mm vers l'intérieur, puis poussez un peu la face intérieure pour la vitre. Les trous de la face sont aussi décalés, et un arc ou un cercle reste une seule courbe (plus petite ou plus grande).

- **Double-cliquez** une face avec {{ui:Décaler}} pour la décaler de nouveau de la dernière distance.
- **Arêtes :** sélectionnez une chaîne d'arêtes reliées dans un même plan (par exemple les deux lignes d'un L), appuyez sur {{key:F}}, déplacez-vous du côté souhaité et saisissez la distance : une copie parallèle est dessinée, avec des angles à onglet.
- Lorsque la distance dépasse ce que la face permet, ModelCraft l'indique et ne dessine rien.

## Les arcs, les cercles et les polygones sont des courbes

Cliquez sur n'importe quel segment d'un arc, d'un cercle ou d'un polygone et la courbe entière est sélectionnée. {{ui:Infos sur l'entité}} affiche alors son rayon, ses segments, son angle (pour les arcs) et sa longueur. Saisissez-y un nouveau rayon pour la redimensionner autour de son centre ; les faces dessinées dans son plan suivent. Une fois la face d'une courbe poussée ou tirée, son rayon reste tel quel.

## Dessiner avec des lignes

1. Appuyez sur {{key:L}}.
2. Cliquez où la ligne commence.
3. Cliquez où elle se termine, ou saisissez une longueur et appuyez sur {{key:Enter}}. La longueur saisie suit la direction indiquée par le pointeur.
4. Continuez de cliquer. Chaque clic démarre la ligne suivante à partir de la fin de la précédente.
5. Fermez le contour en cliquant de nouveau sur le premier point. Lorsque les lignes ferment une boucle plane, elle se remplit d'une face et l'outil cesse d'enchaîner. Appuyez sur {{key:Esc}} pour arrêter à tout moment.

Les lignes suivent les directions rouge, verte et bleue lorsque vous vous en approchez ; la ligne prend cette couleur et l'info-bulle indique « Sur l'axe rouge ». Voir [Inférence et accrochage](topic:inference) pour savoir comment verrouiller une direction et vous accrocher à des points.

### Où va une ligne qui ne touche rien

- Une ligne qui commence sur une face reste dans le plan de cette face.
- Une ligne qui commence sur le sol, ou dans le vide, reste à la hauteur de son point de départ. Si vous regardez le modèle de côté, elle va dans le plan vertical qui vous fait face.
- Pour tracer une ligne jusqu'à un emplacement exact, saisissez un point : `[x,y,z]` pour un point du modèle, ou `<dx,dy,dz>` pour un décalage par rapport au départ. Voir [Saisir des dimensions exactes](topic:value-box).

## Découper une face

Tracez une ligne à travers une face, d'une arête à une autre (ou d'arête à arête en passant par d'autres lignes). La face se divise en deux faces. Chacune garde son côté et sa couleur. Il en va de même avec un rectangle ou un cercle dessiné sur une face : la forme devient sa propre face à l'intérieur de la plus grande, qui présente alors un trou.

C'est ainsi que vous tracez des pièces sur une dalle, une fenêtre dans un mur ou une marche sur un escalier : dessinez le contour sur la face, puis poussez ou tirez la nouvelle face.

## Faces tournées dans le mauvais sens

Chaque face a un avant et un arrière. L'arrière apparaît en bleu-gris. Les faces dessinées sur le sol sont orientées vers le haut ; les faces dessinées sur une autre face sont orientées comme celle-ci.

Si une face montre son arrière là où vous attendez l'avant, sélectionnez-la et cliquez sur {{ui:Inverser la face}} dans {{ui:Infos sur l'entité}}.

## Ce que vous voyez pendant le dessin

- Un repère coloré là où le pointeur s'accroche, et son nom dans l'info-bulle en bas à gauche.
- Un aperçu de la ligne ou de la forme.
- La dimension en direct dans la zone de valeur. Vous pouvez la remplacer en saisissant à tout moment.

## Si la forme n'est pas là où vous l'attendiez

- Sur un écran tactile, voir [Dépannage](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Si une ligne s'est accrochée à quelque chose de lointain, derrière, faites tourner la vue un peu : les points cachés derrière une face ne s'accrochent jamais, mais les points sur son arête, eux, le font.
- Appuyez sur {{key:Mod+Z}} pour annuler la dernière forme ; une annulation supprime une ligne ou une forme.
