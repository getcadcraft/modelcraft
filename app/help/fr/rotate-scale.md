---
title: Rotation et échelle
summary: Faire pivoter des éléments autour d'un point en cliquant ou en saisissant des degrés, et les redimensionner uniformément par un facteur.
keywords: poignées d'échelle, étirer, non uniforme, par axe, retourner, symétrie, copie symétrique, retourner le long de, rotation, pivoter, angle, degrés, rapporteur, échelle, redimensionner, agrandir, réduire, facteur, échelle uniforme
from: 45cdcb49
---

## Rotation

{{ui:Rotation}} ({{key:Q}}) fait pivoter la sélection autour d'un point central. Elle demande trois clics : le centre, une direction de départ et la direction d'arrivée.

1. Sélectionnez ce que vous voulez faire pivoter. Si rien n'est sélectionné, la rotation prend l'élément sur lequel vous cliquez en premier.
2. Appuyez sur {{key:Q}}. Un anneau suit le pointeur et montre le plan dans lequel vous allez pivoter.
3. Cliquez sur le centre de rotation.
   - Sur le sol ou dans l'espace vide, l'anneau est à plat (bleu) : la rotation se fait autour d'un axe vertical, comme lorsqu'on tourne un bâtiment sur son site.
   - Sur une face, l'anneau se place dans le plan de cette face : la rotation se fait autour de la direction propre à la face. Cliquez sur un mur pour faire pivoter quelque chose autour d'un axe horizontal.
4. Cliquez sur un point qui fixe le début de l'angle, par exemple le long d'une arête de l'élément que vous faites pivoter.
5. Déplacez le pointeur autour du centre. L'angle s'affiche dans l'info-bulle et dans la zone de valeur ({{ui:Angle}}). Il s'accroche à des paliers de 15° lorsque vous vous en approchez.
6. Cliquez pour terminer, ou saisissez l'angle en degrés et appuyez sur {{key:Enter}} : `90`, `45`, `-30`.

   Les angles positifs tournent dans le sens inverse des aiguilles d'une montre, vu du côté où fait face l'anneau.

Appuyez sur {{key:Ctrl}} (ou {{key:Alt}}) pendant la rotation pour faire pivoter une **copie** en laissant l'original en place, comme avec Déplacer ; l'info-bulle indique si la copie est activée, et appuyer à nouveau sur la touche la désactive. Saisissez `3x` juste après une copie pivotée pour obtenir d'autres copies autour du même centre.

Comme pour Déplacer, faire pivoter une partie de géométrie reliée tord les faces qui y sont attachées. Regroupez d'abord les éléments pour les faire pivoter entiers.

:::note
L'info-bulle indique que les touches fléchées choisissent l'axe de rotation, mais dans cette version, elles font plutôt orbiter la vue avant le premier clic. Pour choisir l'axe, cliquez sur le centre d'une face orientée dans le sens voulu. Voir [Pas encore disponible](topic:not-built-yet).
:::

## Échelle

{{ui:Échelle}} ({{key:S}}) redimensionne la sélection. Sélectionnez d'abord ce que vous voulez redimensionner, puis appuyez sur {{key:S}} : de petits carrés (poignées) apparaissent sur les coins, les arêtes et au milieu des côtés de sa boîte.

### Étirer ou mettre à l'échelle avec les poignées

- Une poignée d'**angle** met à l'échelle uniformément dans toutes les directions, autour de l'angle opposé.
- La poignée au milieu d'un **côté** étire uniquement dans cette direction, autour du côté opposé : elle allonge une boîte sans la rendre plus haute.
- La poignée au milieu d'une **arête de la boîte** étire dans les deux directions qui la traversent.
- Maintenez {{key:Ctrl}} en cliquant sur une poignée pour mettre à l'échelle autour du centre de la boîte.

Cliquez sur une poignée, déplacez le pointeur, puis cliquez à nouveau ; ou cliquez sur la poignée, saisissez un facteur (`2` double, `0.5` divise par deux) et appuyez sur {{key:Enter}}. Pour donner à chaque direction son propre facteur, saisissez-en trois, pour rouge, vert et bleu : `2,1,0.5`. Dans un groupe ouvert, les directions sont celles du groupe.

### Mettre à l'échelle autour d'un point quelconque

Cliquez n'importe où en dehors d'une poignée pour mettre à l'échelle uniformément autour d'un point de votre choix. Cela demande trois clics :

1. Sélectionnez ce que vous voulez redimensionner. Si rien n'est sélectionné, la mise à l'échelle prend l'élément sur lequel vous cliquez en premier.
2. Appuyez sur {{key:S}}.
3. Cliquez sur le point qui reste fixe (pas sur une poignée), par exemple un coin inférieur.
4. Cliquez sur un point de référence. Sa distance au premier point compte pour 1×.
5. Déplacez le pointeur vers le premier point ou à l'opposé. Le facteur s'affiche dans l'info-bulle et dans la zone de valeur ({{ui:Échelle}}).
6. Cliquez pour terminer, ou saisissez un facteur et appuyez sur {{key:Enter}} : `2` double la taille, `0.5` la divise par deux.

### Mettre à une taille exacte

Pour donner à quelque chose une longueur exacte, calculez le facteur : nouvelle longueur divisée par longueur actuelle. En mode à trois clics, la zone de valeur fait le calcul, donc saisissez `4.2/3.6` pour transformer un mur de 3.6 m en un mur de 4.2 m. La zone de valeur d'une poignée n'accepte que des nombres simples : calculez d'abord le facteur (4.2 divisé par 3.6 donne environ 1.1667). Sélectionnez d'abord l'arête pour lire sa longueur actuelle dans {{ui:Infos sur l'entité}}.

### Corriger un import à la mauvaise taille

Les fichiers OBJ n'ont pas d'unité : un modèle dessiné en millimètres arrive donc 1000 fois trop grand. Sélectionnez le groupe importé, appuyez sur {{key:S}}, cliquez sur une poignée d'angle, saisissez `0.001` et appuyez sur {{key:Enter}}. Pour un modèle dessiné en pouces, saisissez `0.0254`.

## Quelques points à connaître

- La mise à l'échelle autour d'un point, en trois clics, est uniforme. Pour étirer dans une seule direction, utilisez une poignée de côté ou d'arête (voir ci-dessus).
- Mettre à l'échelle un groupe ou un composant modifie la copie concernée ; les autres copies d'un composant gardent leur taille.
- Appuyez sur {{key:Esc}} avant le dernier clic pour annuler.

## Retourner

{{ui:Édition}} › {{ui:Plus}} › {{ui:Retourner le long du rouge}}, {{ui:Retourner le long du vert}} ou {{ui:Retourner le long du bleu}} produit la symétrie de la sélection sur place, à travers le milieu de sa boîte : un escalier tournant à gauche devient un escalier tournant à droite. Les faces restent orientées vers l'extérieur, et un groupe ou un composant est mis en symétrie dans son ensemble (son contenu n'est pas réécrit).

{{ui:Copie retournée le long du rouge}} (et vert, bleu) laisse l'original en place et place une copie symétrique à côté, de l'autre côté de la boîte de la sélection : l'autre porte d'une paire, l'autre aile d'un bâtiment. La géométrie libre qui touche à cet endroit se joint à l'original, comme le fait toujours une géométrie en contact ; faites d'abord de l'original un groupe pour les garder séparés.

Dans un groupe ouvert, rouge, vert et bleu désignent les axes propres au groupe.
