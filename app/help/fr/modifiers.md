---
title: Modificateurs sur un maillage, un groupe ou un composant
summary: Mettez à l'échelle, symétrisez, répétez, lissez, biseautez, coupez et courbez un maillage sans le modifier ; répétez ou mettez à l'échelle un groupe ou un composant avec la même pile ; rendez la modification permanente quand vous êtes prêt.
keywords: modificateur, modificateurs, pile, groupe, composant, échelle, édition source, non destructif, symétrie, réseau, réseau radial, subdivision, surface de subdivision, lisser, biseau, solidifier, épaisseur, booléen, couper, déplacement, bruit, souder, décimer, simplifier, treillis, cage, déformation par courbe, courber, enveloppement, appliquer, précalculer
from: dd5ec1cb
---

Un **modificateur** change ce qu'un maillage montre sans modifier le maillage lui-même. Symétrisez une moitié d'une pièce et ne modélisez que cette moitié ; arrondissez une boîte avec une surface de subdivision et continuez à modifier la boîte. Les modificateurs se placent dans une **pile** et agissent dans l'ordre, du haut vers le bas. Ce que vous voyez, exportez, imprimez et calculez en rendu est le maillage avec chaque modificateur actif.

## Ajouter un modificateur

1. Sélectionnez un maillage. Dans l'espace de travail Modèle, sa section {{ui:Modificateurs}} se trouve dans {{ui:Infos sur l'entité}} ; dans l'espace de travail Maillage, elle se trouve dans le panneau de droite.
2. Choisissez-en un dans {{ui:Ajouter un modificateur…}}. Il est placé en bas de la pile.
3. Modifiez ses réglages sous son nom. Les longueurs acceptent les mêmes valeurs que la zone de valeur : `600mm`, `2'6"` et `(6m)/4` fonctionnent tous.

Chaque modification est une seule étape d'annulation : {{key:Mod+Z}} l'annule.

## Les boutons de chaque modificateur

- La case à cocher l'active ou le désactive.
- Le bouton écran l'affiche ou le masque dans la vue (il reste dans la pile).
- Le bouton caméra l'affiche ou le masque dans les images rendues et les vidéos, de sorte qu'un modificateur peut servir uniquement aux rendus (ou uniquement à la vue).
- Les flèches le déplacent vers le haut ou vers le bas de la pile. L'ordre compte : symétrie puis subdivision donne une jointure lisse, subdivision puis symétrie ne le fait pas.
- {{ui:Appliquer}} intègre la forme dans le maillage : les modificateurs situés au-dessus et celui-ci sont appliqués au maillage lui-même et quittent la pile. C'est une seule étape d'annulation.
- La croix le retire.

## Les modificateurs

| Modificateur | Ce qu'il fait |
| --- | --- |
| Échelle | Met à l'échelle autour de l'origine de l'objet, avec un facteur pour le rouge, le vert et le bleu. Aussi sur un groupe ou un composant. |
| Symétrie | Ajoute une copie symétrique selon le rouge, le vert ou le bleu, passant par l'origine du maillage, et joint les moitiés là où elles se rencontrent. |
| Réseau | Copie en ligne (un pas de sa propre taille multiplié par les nombres que vous donnez, plus un pas fixe), autour d'un axe, ou le long d'une courbe du modèle. Un groupe ou un composant suit la ligne. |
| Surface de subdivision | Lisse le maillage par subdivision de Catmull-Clark. Les arêtes vives restent pliées. Les rendus peuvent utiliser plus de niveaux que la vue. |
| Biseau | Arrondit chaque arête plus vive que l'angle que vous donnez. |
| Solidifier | Donne une épaisseur à une surface et referme le bord. |
| Booléen | Retranche, réunit ou conserve le chevauchement avec un autre objet du modèle. Les deux doivent être des solides fermés. |
| Déplacement | Déplace la surface vers l'intérieur ou l'extérieur par un bruit lisse. Une même graine donne toujours les mêmes bosses. |
| Souder | Joint les sommets plus proches qu'une distance donnée. |
| Décimer | Conserve une part des triangles, en retirant ceux qui modifient le moins la forme. |
| Lisser | Détend les sommets vers leurs voisins. |
| Treillis | Plie le maillage avec une cage : déplacez les points de la cage et le maillage suit. |
| Déformation par courbe | Plie le maillage le long d'une courbe du modèle, selon le rouge, le vert ou le bleu. |
| Enveloppement | Déplace chaque sommet sur le point le plus proche d'un autre objet. |

## Sur un groupe ou un composant

Un groupe ou un composant peut aussi conserver une recette, de sorte que l'abat-jour d'une lampe peut être une **Échelle** et un **Réseau** d'un seul abat-jour, et qu'une modification d'un nombre change la lampe.

1. Sélectionnez un groupe ou un composant. Dans {{ui:Infos sur l'entité}}, sa section **Modificateurs** liste la pile (vide au départ).
2. Choisissez {{ui:Échelle}} ou {{ui:Réseau}} dans {{ui:Ajouter un modificateur…}}. Le groupe devient un composant qui est **l'original, placé par la pile**. L'original est conservé : modifiez-le et chaque copie suit aussitôt.
3. L'échelle prend un facteur pour le rouge, le vert et le bleu (`1, 1, 2` double la hauteur). Le réseau prend le nombre de copies, un pas exprimé en proportion de la taille actuelle du résultat, et un pas supplémentaire en longueurs.

La pile s'exécute du haut vers le bas sur les axes propres de l'original, autour de son origine ; l'ordre compte donc : un Réseau de trois copies espacées de 3 m, puis une Échelle de 2 sur le rouge, place les copies à 6 m d'écart ; l'Échelle d'abord puis le Réseau les garde à 3 m d'écart. La case à cocher, les flèches et la croix fonctionnent comme sur un maillage ; les boutons vue et caméra, et Appliquer sur un modificateur, ne fonctionnent pas, car une pile sur un groupe forme un tout.

- {{ui:Modifier la source}} ouvre l'original sur place. Les modifications apparaissent dans chaque copie ; la fermeture vous ramène là où vous étiez.
- {{ui:Précalculer les modificateurs}} rend le résultat simple (arêtes et faces) et retire la pile, en une seule étape d'annulation. Les copies qui se chevauchent restent des géométries séparées : précalculer n'est pas une union.
- Les copies du composant partagent la recette ; {{ui:Rendre unique}} la sépare (l'original reste partagé).
- La pile est enregistrée dans le fichier, transportée par copier-coller et par l'annulation, et Purger les éléments inutilisés conserve l'original. Un programme qui ne connaît pas les modificateurs affiche quand même les copies.
- Jusqu'au précalcul, le résultat ne peut être ni édité, ni décomposé, ni redimensionné, ni étiré : il serait reconstruit au prochain changement. Chaque action le signale.
- Les limites sont de 32 modificateurs et 1,000 copies. Un composant conçu pour s'étirer (Étirer) et une pile ne peuvent pas encore partager une définition.

## Surface de subdivision

La subdivision lisse un maillage par Catmull-Clark : chaque face devient des faces à quatre côtés, et chaque niveau en fait quatre fois plus. Une boîte à deux ou trois niveaux se lit déjà comme une forme arrondie, et vous continuez à modifier la boîte.

- **Niveaux dans la vue** règle le degré de lissage.
- **Niveaux dans les rendus** règle le lissage des images rendues et des vidéos ; les rendus peuvent utiliser plus de niveaux que la vue.
- **Rendus sur la vraie surface lisse** place les points d'un maillage rendu sur la surface limite vers laquelle tendent les niveaux, de sorte que deux niveaux seulement rendent aussi lisse que beaucoup.
- **Plis** gardent les arêtes vives : dans l'espace de travail Maillage, sélectionnez des arêtes et utilisez {{ui:Pli}} (1 reste vif, 0.5 arrondit un peu, 0 est lisse). Voir [Modifier un maillage](topic:mesh-edit).
- **Abaissez le niveau de la vue sur un grand maillage :** lorsque les niveaux demandés donneraient plus de faces que ce que la vue gère bien sur cet ordinateur, la vue affiche un niveau inférieur et l'indique. {{ui:Appliquer}} utilise toujours tous les niveaux. Le nombre de faces dépend de la classe de votre machine dans {{ui:Paramètres}} › Rendu › Votre machine.
- Les bords ouverts conservent leurs angles et restent sur la ligne de leurs arêtes.

## Courber avec une cage treillis

1. Ajoutez un modificateur {{ui:Treillis}} et appuyez sur {{ui:Ajouter une cage de treillis autour du maillage}}. Une cage de 3 × 3 × 3 points apparaît autour du maillage, dessinée en fil de fer.
2. Ouvrez la cage dans l'espace de travail Maillage (double-cliquez dessus) et déplacez ses points. Le maillage suit en douceur.

:::tip
Une cage est un maillage comme les autres : masquez-la avec son étiquette lorsque vous avez terminé.
:::

## Grands maillages

Les petites piles sont calculées immédiatement. Une grande est calculée en arrière-plan sur chaque cœur de votre ordinateur : la vue continue d'afficher le dernier résultat jusqu'à ce que le nouveau soit prêt. Les booléens chargent le modeleur de solides la première fois ; la vue l'indique pendant un instant.

## Ce que les modificateurs ne font pas encore

- Des poids par sommet (une atténuation peinte sur le maillage) pour Déplacement, Lisser et Enveloppement.
- Des modificateurs autres qu'Échelle et le Réseau linéaire sur la géométrie pousser/tirer (groupes et composants) : convertissez-la d'abord en maillage ({{ui:Convertir en maillage}}). Symétrie, un réseau circulaire ou sur courbe, Courber et Effiler sur les groupes viendront plus tard.
