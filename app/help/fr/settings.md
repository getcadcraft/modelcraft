---
title: Paramètres de ModelCraft
summary: Choisissez le style de touches que vous connaissez, faites tourner et déplacez la vue au pavé tactile sans les boutons de caméra, et activez ou désactivez l'accrochage et les collisions de solides.
keywords: paramètres, préférences, commandes, style de touches, raccourcis, touches, blender, pavé tactile, trackpad, touchpad, défilement, molette, orbite, pincement, accrochage, collision, chevauchement, intersection, traverser
from: caf77d5b
---

Ouvrez {{ui:Settings}} avec l'engrenage de la barre d'application ou avec {{key:Mod+,}}. Le premier onglet, {{ui:ModelCraft}}, contient les paramètres propres à cette application ; {{ui:General}} contient ceux que partagent toutes les applications CadCraft (thème, barre d'outils, panneaux). Les paramètres de ModelCraft n'existent que dans l'application : vous les modifiez ici, et ce navigateur les mémorise.

## Commandes : quelles touches et quels boutons de souris

Deux styles de touches. Changez-les ici, avec {{ui:Keys: Push-pull}} / {{ui:Keys: Modeler}} en bas à droite de la vue, ou à la fin du menu {{ui:More}} de la barre d'outils :

- **Style pousser/tirer** (celui du départ ; les lettres des modeleurs pousser/tirer, comme SketchUp) : une lettre choisit un outil : {{key:L}} ligne, {{key:R}} rectangle, {{key:P}} pousser/tirer, {{key:M}} déplacer, {{key:Q}} rotation, {{key:S}} échelle, {{key:G}} créer un composant. Voir [Touches et actions de souris](topic:keyboard).
- **Style modeleur** (les touches des modeleurs à maillage comme Blender) : sélectionnez d'abord, puis agissez aussitôt sur la sélection. {{key:G}} la déplace, {{key:R}} la fait pivoter et {{key:S}} la met à l'échelle à partir de la position du pointeur, sans premier clic. Pendant le déplacement, {{key:X}}, {{key:Y}} ou {{key:Z}} verrouille l'axe rouge, vert ou bleu, un nombre saisi fixe la distance (ou les degrés, ou le facteur), et un clic ou {{key:Enter}} la pose ; {{key:Esc}} ou un clic droit la remet en place. Vous revenez alors à {{ui:Select}}.

Le style de touches modeleur correspond au style de menu {{ui:Modeler}} : choisir l'un revient à choisir l'autre. Voir [Menus, touches et souris](topic:menus-keys-and-mouse). La liste complète du style modeleur se trouve dans [Touches et actions de souris](topic:keyboard#modeler-keys). Les infobulles de la barre d'outils et de la carte de démarrage suivent le style choisi.

## Défilement : molette de souris ou pavé tactile

- **Détection automatique** (au départ) : ModelCraft observe le défilement. Le défilement latéral ou fin, tel qu'envoyé par un pavé tactile, fait tourner la vue ; les crans entiers de la molette font un zoom.
- **Molette de souris** : le défilement zoome toujours vers le pointeur.
- **Pavé tactile** : glissez à deux doigts pour faire tourner la vue, maintenez {{key:Shift}} et glissez pour faire un panoramique, pincez pour zoomer. Vous n'avez jamais besoin des boutons {{ui:Orbit}}, {{ui:Pan}} ou {{ui:Zoom}}.

Le pincement zoome dans tous les cas. Si « Détection automatique » se trompe pour votre souris ou votre pavé tactile, choisissez celui que vous avez.

:::tip
Dans le style modeleur, vous pouvez aussi faire tourner la vue en maintenant {{key:Alt}} et en faisant glisser, et faire un panoramique avec {{key:Alt+Shift}} et un glissement : pratique sur un ordinateur portable sans bouton central.
:::

## Accrochage

**Accrocher aux points, arêtes et axes** (activé au départ) attire le pointeur vers les extrémités, les milieux, les arêtes, les guides et les axes rouge, vert et bleu : voir [Inférence](topic:inference). Désactivez-le lorsque vous voulez placer librement quelque chose près d'une autre géométrie sans qu'il saute. Les faces, le sol et les verrouillages d'axe fonctionnent toujours avec l'accrochage désactivé.

Le bouton {{ui:Snap}} en bas à droite de la vue fait de même pour le travail de cette session (il est aussi enregistré). Dans le style modeleur, {{key:Shift+Tab}} le bascule.

## Les solides s'arrêtent au contact

**Arrêter les solides au contact** (activé au départ) empêche un mur d'être déplacé à travers un autre mur. Avec {{ui:Move}} (et {{key:G}}, et coller puis déplacer avec {{key:Mod+D}}), la sélection glisse jusqu'à l'autre solide et s'arrête à son contact ; avec {{ui:Push/pull}}, une face s'arrête lorsqu'elle rencontre un autre solide. Reposer sur quelque chose et glisser le long de celui-ci reste permis : seul le passage à l'intérieur est bloqué. Les éléments qui se chevauchent déjà au départ peuvent encore être écartés.

Pour pousser un élément à travers un autre volontairement, cliquez sur {{ui:Collide}} en bas à droite (ou désactivez le réglage), effectuez le déplacement, puis recliquez dessus.

:::note
Les collisions sont vérifiées pour les déplacements et le pousser/tirer. {{ui:Rotate}} et {{ui:Scale}} ne les vérifient pas encore, et la géométrie non liée qui se touche se réunit toujours, comme auparavant : gardez les éléments distincts dans des [groupes](topic:groups-components) pour qu'ils restent séparés.
:::

## Plateau d'impression 3D

La taille du plateau de votre imprimante : {{ui:Not set}} (au départ), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ou 300 × 300 × 400 mm. Choisissez la taille la plus proche du volume d'impression de votre imprimante. [Vérifier pour l'impression 3D](topic:print-3d) indique alors lorsqu'un modèle dépasse le plateau ; avec {{ui:Not set}}, la taille n'est pas vérifiée.

## Orbite et panoramique

**Orbiter autour de ce qui est sous le curseur** (activé au départ) : l'orbite tourne autour de la partie du modèle située sous le pointeur, et le panoramique garde ce point sous le pointeur ; dans le vide, les deux utilisent le centre de la vue. Désactivez-le pour toujours orbiter autour du centre de la vue. **Vitesse d'orbite** et **Vitesse de panoramique** vont de 0.25× à 3× (1× est la valeur de départ) et s'appliquent à la souris, au pavé tactile, au tactile et aux touches fléchées. Voir [Orbite, panoramique et zoom](topic:orbit-pan-zoom).

## Indicateur de coin

Ce qui s'affiche dans le coin de la vue 3D : **ViewCube** (au départ ; en haut à droite : cliquez sur une face, une arête ou un coin pour regarder depuis là, faites-le glisser pour faire tourner la vue, faites glisser son anneau de boussole pour tourner le modèle), **Icône d'axes** (un petit repère X, Y, Z en bas à gauche qui tourne avec la vue : X en rouge, Y en vert, Z en bleu) ou **Aucun**. Voir [Le ViewCube](topic:view-cube).
