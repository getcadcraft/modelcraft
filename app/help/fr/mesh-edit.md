---
title: Modifier un maillage dans l'espace de travail Maillage
summary: Sélectionnez les sommets, arêtes et faces d'un maillage, déplacez-les, et extrudez, incrustez, biseautez, coupez, fusionnez, remplissez et reliez-les, avec l'un ou l'autre style de touches.
keywords: maillage, mode édition, espace de travail maillage, sommet, sommets, arête, arêtes, face, faces, extruder, incruster, biseau, couper une boucle, couteau, bissecter, tourner, fusionner, dissoudre, remplir, remplissage en grille, pont, subdiviser, glisser, édition proportionnelle, atténuation, espace de travail
from: 92a372dd
---

L'espace de travail **Maillage** modifie un [maillage](topic:meshes) point par point : ses sommets, arêtes et faces. La géométrie pousser/tirer reste dans l'espace de travail **Modèle**.

## Ouvrir

- Choisissez {{ui:Maillage}} dans la liste {{ui:Espace de travail}}, à gauche de la barre d'outils. Le maillage sélectionné s'ouvre en édition ; un groupe ou un composant sélectionné est d'abord converti en maillage (une étape d'annulation).
- Ou double-cliquez sur un maillage, ou, avec les touches du modeleur, sélectionnez-le et appuyez sur {{key:Tab}}.
- Sans sélection, le panneau propose des maillages à ajouter : plan, grille, cube, cercle, cylindre, cône, sphère, sphère icosaédrique et tore. Un nouveau maillage est placé là où regarde la vue et s'ouvre en édition.

{{ui:Retour au modèle}} (ou la liste, {{key:Tab}} avec les touches du modeleur, {{key:Esc}} sans sélection avec les touches pousser/tirer) revient au Modèle avec le maillage sélectionné. Pendant que l'espace de travail Maillage est ouvert, le reste du modèle est estompé et les outils de dessin du Modèle sont rangés.

## Sélectionner

| Action | Pour |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Sélectionner les sommets, les arêtes ou les faces |
| Clic | Sélectionner un élément ; {{key:Shift}}+clic ajoute ou retire |
| Glisser une boîte | Sélectionner ce qui est à l'intérieur et visible ; {{key:Shift}} ajoute, {{key:Ctrl}} retire |
| {{key:Alt}}+clic sur une arête, ou double-clic dessus | Sa boucle d'arêtes (une boucle de faces en mode face ; tout le bord sur une arête ouverte) |
| {{key:Ctrl}}+{{key:Alt}}+clic sur une arête | Son anneau d'arêtes |
| Triple clic | Tout ce qui y est relié |

Le groupe {{ui:Sélectionner}} propose aussi {{ui:Tout}}, {{ui:Liées}}, {{ui:Boucle}}, {{ui:Anneau}}, {{ui:Plus}} et {{ui:Moins}}.

## Déplacer, faire pivoter, mettre à l'échelle

{{ui:Déplacer}}, {{ui:Rotation}} et {{ui:Échelle}} partent du pointeur : déplacez-le, puis cliquez ou appuyez sur {{key:Enter}} pour poser la sélection, ou sur {{key:Esc}} pour annuler. {{key:X}}, {{key:Y}} ou {{key:Z}} (ou les touches fléchées) verrouillent un axe. Saisissez une distance, un angle ou un facteur pour une valeur exacte ; les [calculs](topic:value-box#calculations) fonctionnent aussi.

**Édition proportionnelle** ({{ui:Proportionnel}}, ou dans le panneau) : les sommets proches de la sélection suivent un déplacement, d'autant moins qu'ils sont éloignés, jusqu'à la portée que vous réglez, avec l'atténuation que vous choisissez. Activez {{ui:Seulement le long du maillage}} pour mesurer le long des arêtes plutôt qu'en ligne droite.

{{ui:Glisser}} déplace une boucle d'arêtes sélectionnée le long des arêtes voisines.

## Modifier la forme

| Outil | Effet |
|---|---|
| {{ui:Extruder}} | Tire les faces sélectionnées le long de leur normale, avec de nouvelles faces latérales (ou crée des faces à partir d'arêtes de bord ouvertes). Saisissez la distance |
| {{ui:Incruster}} | Une bande à l'intérieur du contour des faces sélectionnées ; appuyez à nouveau sur {{key:I}} pour chaque face séparément |
| {{ui:Biseau}} | Coupe les arêtes sélectionnées (ou, avec {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, les sommets) sur une largeur donnée ; la molette ou les touches plus et moins ajoutent des segments pour une arête arrondie |
| {{ui:Couper une boucle}} | Pointez une arête : de nouvelles boucles traversent l'anneau de faces à quatre côtés ; la molette règle leur nombre ; cliquez pour couper |
| {{ui:Couteau}} | Cliquez des points sur les arêtes ou les coins ; {{key:Enter}} coupe en ligne droite à travers les faces entre eux, telles que vous les voyez |
| {{ui:Bissecter}} | Tracez une ligne à l'écran : les faces sélectionnées (ou toutes) sont coupées le long de celle-ci |
| {{ui:Tourner}} | Fait tourner les faces sélectionnées ou les arêtes ouvertes autour de l'axe bleu, par pas (la molette les règle) ; un tour complet referme |
| {{ui:Subdiviser}} | Coupe en deux les arêtes sélectionnées ; les faces entières deviennent une grille |
| {{ui:Fusionner}} | Les sommets sélectionnés ne forment plus qu'un, à leur centre |
| {{ui:Dissoudre}} | Retire la sélection mais conserve la surface : les faces se rejoignent |
| {{ui:Remplir}} | Une face sur un bord ouvert sélectionné (ou entre deux arêtes ouvertes) |
| {{ui:Remplissage en grille}} | Remplit un bord ouvert comportant un nombre pair d'arêtes avec une grille de quadrilatères |
| {{ui:Pont}} | Relie deux boucles d'arêtes ouvertes sélectionnées par des faces |
| {{ui:Pli}} | Le degré de netteté des arêtes sélectionnées lorsque le maillage est lissé par une surface de subdivision : éloignez-vous du centre, utilisez la molette (pas de 0.1) ou saisissez une valeur de 0 à 1. Le panneau affiche le pli des arêtes sélectionnées et accepte aussi une valeur saisie. Les arêtes pliées sont dessinées en magenta |
| {{ui:Retourner}}, {{ui:Lisser}}, {{ui:Supprimer}} | Retourne les faces ; lisse les sommets vers leurs voisins ; supprime selon le mode de sélection |

Chaque action est une étape d'annulation. Les coordonnées de texture, les couleurs et les poids sont reportés sur les nouvelles faces et les nouveaux sommets.

## Remailler

{{ui:Remailler}} refait tout le maillage en triangles réguliers d'une même taille, demandée au moment où vous appuyez (plus petit = plus fin et plus lent). Il referme les trous, réunit les morceaux qui se chevauchent et égalise un maillage que la sculpture a étiré. Les arêtes vives ressortent très légèrement arrondies. Les UV, la peinture et les plis repartent de zéro. Une étape d'annulation.

## Retopologie

Pour construire un maillage neuf et plus propre par-dessus un maillage détaillé (une sculpture, un scan), choisissez le maillage détaillé sous {{ui:Retopologie}} › **Construire sur** dans le panneau, puis :

- **Accrocher les points déplacés sur celui-ci :** les points que vous déplacez, et les arêtes que vous extrudez, se posent sur sa surface.
- **Poser les points sélectionnés sur celui-ci** déplace dès maintenant les points sélectionnés sur sa surface (une étape d'annulation).
- **Afficher les arêtes de ce maillage au premier plan** dessine le maillage que vous construisez par-dessus la surface, pour que vous puissiez le voir.

## Ajuster la dernière opération

Après {{ui:Incruster}}, {{ui:Biseau}}, {{ui:Couper une boucle}}, {{ui:Subdiviser}}, {{ui:Lisser}}, {{ui:Remplissage en grille}} ou {{ui:Tourner}}, le panneau affiche ses réglages (largeur, segments, profil, coupes…). Modifiez l'un d'eux et l'opération est refaite depuis son point de départ, toujours en une seule étape d'annulation.

## Touches

| | Touches pousser/tirer | Touches du modeleur |
|---|---|---|
| Déplacer, faire pivoter, mettre à l'échelle | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} deux fois glisse) |
| Extruder, incruster | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Supprimer | {{key:E}} ou {{key:Delete}} | {{key:X}} ou {{key:Delete}} |
| Pli | {{key:Shift+C}} | {{key:Shift+E}} |
| Tout sélectionner, rien, inverser | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Les deux | {{key:Ctrl+B}} biseau, {{key:Ctrl+R}} couper une boucle, {{key:K}} couteau | les mêmes, et {{key:F}} remplir, {{key:M}} fusionner, {{key:Ctrl+X}} dissoudre, {{key:L}} / {{key:Ctrl+L}} liées, {{key:Alt+N}} retourner, {{key:O}} proportionnel, {{key:Shift+V}} glissement de sommet |

Voir aussi [Maillages](topic:meshes), [Modificateurs sur un maillage](topic:modifiers) et [Pas encore disponible](topic:not-built-yet).
