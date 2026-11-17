---
title: Déplacer, copier et créer des réseaux
summary: Déplacez des éléments en cliquant ou d'une distance exacte, copiez-les avec une touche de modification, et créez une rangée de copies régulièrement espacées.
keywords: déplacer, copier, dupliquer, réseau, rangée, espacement, diviser, décaler, colonnes, étirer, répéter, copie multiple
from: 280245fc
---

{{ui:Déplacer}} ({{key:M}}) déplace ce qui est sélectionné d'un point à un autre. Si vous maintenez une touche de modification, l'opération devient une copie, et après une copie vous pouvez saisir le nombre de copies supplémentaires souhaitées.

## Déplacer un élément

1. Sélectionnez ce que vous voulez déplacer (voir [Sélectionner des éléments](topic:select)). Si rien n'est sélectionné, {{ui:Déplacer}} prend l'élément sur lequel vous cliquez.
2. Appuyez sur {{key:M}}.
3. Cliquez sur un point de départ. Choisissez un point significatif, comme un angle : ce point viendra exactement à l'endroit où vous cliquerez ensuite.
4. Déplacez le pointeur. La sélection suit. Elle s'accroche aux points, aux arêtes et aux directions rouge, verte et bleue, comme le fait une ligne.
5. Cliquez à l'endroit où le point doit aller, ou saisissez une distance puis appuyez sur {{key:Enter}}.

   L'indication de la barre d'état revient à « Cliquez sur un point de départ… » pour le déplacement suivant.

Une distance saisie suit la direction vers laquelle vous pointez. Vous pouvez aussi saisir un décalage exact, `<2m,0,0>` (2 m le long de l'axe rouge), ou une destination exacte pour le point choisi, `[0,0,0]` (l'origine). Voir [Saisir des dimensions exactes](topic:value-box).

Pour ne déplacer que selon un seul axe, appuyez sur une touche fléchée après le premier clic : {{key:Right}} verrouille sur l'axe rouge, {{key:Left}} sur le vert, {{key:Up}} sur le bleu. Appuyez de nouveau sur la même flèche pour déverrouiller.

## Déplacer une partie d'une forme l'étire

Une géométrie non groupée est reliée. Si vous sélectionnez une face ou quelques arêtes et que vous les déplacez, les faces qui y sont attachées s'étirent pour les suivre. Déplacez la face supérieure d'une boîte sur le côté et la boîte s'incline ; déplacez une arête du toit et la pente du toit change. Les faces qui ne peuvent plus rester planes se replient en triangles.

Pour déplacer un objet entier sans l'étirer, sélectionnez-le entièrement d'abord (triple-clic dessus), ou mieux, faites-en un groupe ou un composant (voir [Groupes et composants](topic:groups-components)).

## Copier un élément

1. Sélectionnez ce que vous voulez copier.
2. Appuyez sur {{key:M}}.
3. Maintenez {{key:Ctrl}} (ou {{key:Alt}}) et cliquez sur le point de départ. Sur Mac, {{key:Mod}} ou {{key:Alt}} a le même effet. L'indication affiche « Ctrl déplace à la place », ce qui signifie que vous copiez.

   Vous pouvez aussi appuyer puis relâcher {{key:Ctrl}} ou {{key:Alt}} après le premier clic pour basculer entre déplacement et copie.

4. Cliquez à l'endroit où la copie doit aller, ou saisissez une distance puis appuyez sur {{key:Enter}}.

   L'original reste à sa place, et la copie est sélectionnée.

## Copier, couper, coller et dupliquer

- {{key:Mod+C}} copie la sélection, {{key:Mod+X}} la coupe (copie puis efface). {{ui:Copier}} et {{ui:Coller}} sont aussi des boutons du groupe {{ui:Édition}} de la barre d'outils, et {{ui:Plus}} à côté d'eux propose couper, coller à la même position et dupliquer.
- {{key:Mod+V}} colle : un contour de la copie suit le pointeur, en s'accrochant comme n'importe quel outil, et un clic la pose avec son angle le plus bas à cet endroit. {{key:Esc}} annule.
- {{key:Mod+Shift+V}} colle à la même position, exactement là où la copie a été prise. C'est utile pour déplacer quelque chose dans un groupe que vous avez ouvert.
- {{key:Mod+D}} ({{key:Shift+D}} dans le style Modeler) duplique : une copie est créée et suit le pointeur immédiatement ; cliquez pour la poser, saisissez une distance, ou appuyez sur {{key:Esc}} pour la déposer. Juste après, saisissez `3x` pour obtenir d'autres copies à la suite.

Un groupe collé devient un nouveau groupe. Un composant collé est un autre placement du même composant : modifier l'un modifie donc tous les autres. Les copies se collent aussi dans un autre onglet ModelCraft de ce navigateur ; elles y arrivent comme de nouvelles définitions.

## Une rangée de copies

Juste après une copie, tant que {{ui:Déplacer}} reste l'outil actif :

- Saisissez `3x` (ou `*3`) puis appuyez sur {{key:Enter}} pour obtenir trois copies à la suite, chacune espacée comme la première copie. Vous obtenez trois nouvelles copies en plus de l'original.
- Saisissez `/3` puis appuyez sur {{key:Enter}} pour diviser à la place : trois copies réparties régulièrement entre l'original et l'endroit où vous avez posé la première copie, la dernière se trouvant à cet endroit. Utilisez cela pour remplir un espace : posez une copie à l'extrémité lointaine, puis divisez.

Vous pouvez saisir ensuite un autre nombre : `5x` remplace la rangée `3x`. L'indication vous le rappelle : « Copié. Saisissez 3x pour plus de copies à la suite, ou /3 pour diviser la distance. »

### Exemple : colonnes tous les 6 mètres

1. Créez une colonne et faites-en un composant ({{key:G}}), pour que toutes les copies changent ensemble par la suite.
2. Appuyez sur {{key:M}}, maintenez {{key:Ctrl}} et cliquez sur l'angle de base de la colonne.
3. Déplacez-vous le long de l'axe rouge et saisissez `6m`, puis {{key:Enter}}.
4. Saisissez `4x` et {{key:Enter}}. Vous avez cinq colonnes, espacées de 6 m.

## Points à savoir

- Appuyez sur {{key:Esc}} avant le second clic pour annuler : tout revient à sa place initiale.
- {{ui:Déplacer}} fonctionne à l'intérieur du groupe que vous modifiez. Pour déplacer un groupe entier, fermez-le d'abord, puis sélectionnez-le depuis l'extérieur.
- Lorsque {{ui:Collision}} est activé (en bas à droite, et dans les [Paramètres de ModelCraft](topic:settings#solids-stop-where-they-touch)), un déplacement s'arrête là où la sélection touche un autre solide au lieu de le traverser. Cliquez sur {{ui:Collision}} pour le désactiver pour un déplacement qui doit traverser.
- Pour mettre une copie dans un autre groupe : copiez-la, ouvrez l'autre groupe, puis collez ({{key:Mod+Shift+V}} la garde à la même position).
