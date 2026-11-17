---
title: Supports, épaisseur des parois, évidement et réparation
summary: Voyez où une impression a besoin de supports et en quelle quantité environ, repérez les parois trop fines pour être imprimées, évidez une pièce à une épaisseur de paroi avec des trous d'évacuation, et réparez un maillage avec la liste de chaque correction.
keywords: impression 3D, supports, aperçu des supports, surplomb, supports en arbre, supports en colonnes, épaisseur des parois, parois fines, trop fine, buse, évidement, évider, coque, trou d'évacuation, résine, réparation, corriger le maillage, non variété, faces retournées, trous, petites coques, auto-intersection, chevauchement, joindre
from: 286bde26
---

Quatre outils pour préparer un modèle pour une imprimante 3D. Ouvrez {{ui:Exporter}} › {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}} ; la ligne **Outils d'impression** de la boîte de dialogue contient {{ui:Aperçu des supports}}, {{ui:Épaisseur des parois}}, {{ui:Évidement}} et {{ui:Réparation}}. Chacun s'ouvre sous forme de carte au-dessus de la vue ; {{ui:Fermer}} (la croix) la retire ainsi que ses repères. Une seule carte est affichée à la fois.

Chaque outil travaille sur ce qui s'imprime : la sélection, ou tout ce qui est affiché si rien n'est sélectionné. {{ui:Évidement}} et {{ui:Réparation}} ont besoin d'un groupe, d'un composant ou d'un maillage sélectionné, car ils le modifient.

## Aperçu des supports

Les faces qui s'inclinent davantage que l'**angle de surplomb** par rapport à la verticale sont ombrées en rouge, et des supports simples sont dessinés depuis ces faces (en orange) jusqu'au plateau, ou jusqu'à la partie du modèle située sous elles.

- **Angle de surplomb** : 45° est ce que la plupart des imprimantes réalisent sans support. Augmentez-le pour une imprimante qui réussit bien les ponts.
- **Colonnes** : une colonne droite tous les 3 mm sous chaque surplomb. L'estimation les compte comme un motif de support de 15 %.
- **Arbre** : les points voisins se rejoignent en un tronc sous leur milieu ; aucune branche ne s'incline de plus de 45°. Les arbres demandent en général moins de matière et touchent le plateau en moins d'endroits.

La carte indique quelle surface a besoin de support, combien de points de support il y a et la quantité approximative de matière qu'ils demandent. Les supports qui reposent sur le modèle (et non sur le plateau) sont comptés : ils laissent des marques sur celui-ci. Si un plateau d'imprimante est choisi dans {{ui:Paramètres}}, le plateau est dessiné sous le modèle.

:::note
Il s'agit d'un aperçu, non d'un trancheur : votre trancheur décide des supports réels. Sur un très grand surplomb, les points de support sont répartis plus largement pour que l'aperçu reste rapide ; la carte l'indique.
:::

## Épaisseur des parois

Chaque face est mesurée en ligne droite à travers le solide jusqu'à l'autre côté. Les parois situées sous l'**épaisseur de paroi minimale autorisée** sont rouges, et celles situées sous une fois et demie cette valeur sont oranges : elles s'impriment, mais peuvent être fragiles.

Les zones fines sont listées, la plus fine en premier, avec leur épaisseur et leur taille. {{ui:Afficher}} tourne la caméra vers elle.

Une imprimante ne peut pas faire une paroi plus fine qu'environ deux largeurs de sa buse : 0,8 mm pour la buse courante de 0,4 mm (valeur de départ). Les imprimantes à résine font moins bien ; consultez le guide de votre imprimante.

Sur un très grand modèle, seules certaines faces lancent un rayon, et les autres prennent l'épaisseur de leurs voisines ; la carte indique combien ont été mesurées.

## Évidement

L'évidement conserve l'extérieur tel quel et retire l'intérieur, en laissant des parois aussi épaisses que vous le demandez. Les impressions en résine consomment moins de résine et tirent moins sur le plateau de fabrication ; les impressions au filament utilisent moins de plastique que ne le ferait le remplissage.

1. Sélectionnez le groupe, le composant ou le maillage, puis ouvrez {{ui:Évidement}}.
2. Réglez la **paroi** (2 mm pour commencer) et la largeur des **trous d'évacuation**.
3. Pour une impression en résine, cliquez sur {{ui:Placer un trou d'évacuation}}, puis cliquez sur l'extérieur du modèle à l'endroit voulu : bas, près du plateau de fabrication, pour que la résine liquide s'écoule. Placez-en autant que nécessaire ; chacun apparaît comme un cercle bleu et figure dans la liste avec {{ui:Retirer}}.
4. {{ui:Aperçu}} indique la quantité de matière retirée par l'évidement.
5. {{ui:L'évider}} applique la modification : une seule étape que {{key:Mod+Z}} annule.

Le résultat est un solide fermé unique que la vérification d'impression 3D accepte : ModelCraft le vérifie d'abord et ne modifie rien s'il ne passerait pas. Là où le modèle est plus fin que deux parois, il reste plein. Le résultat est un groupe dont les côtés plats sont des faces uniques, ce qui permet de continuer à modéliser avec {{ui:Pousser/tirer}} ; une pièce courbe évidée sur la grille fine a en général trop de faces pour cela et devient un maillage, la ligne d'état l'indiquant.

:::tip
Pour la plupart des formes, l'intérieur correspond à l'extérieur décalé exactement de la paroi. Lorsque des angles ou des parties fines rendent cela impossible, ModelCraft suit l'extérieur à la distance de la paroi sur une grille fine ; la carte indique alors à quelle précision (à une fraction de millimètre près).
:::

## Réparation

{{ui:Réparation}} examine la pièce sélectionnée comme le ferait le trancheur d'une imprimante, corrige ce qui peut l'être sans risque et liste chaque correction :

| Elle corrige | Ce que cela signifie |
|---|---|
| Triangles sans surface | retirés |
| Un triangle dessiné deux fois | une seule copie conservée ; une face dessinée dos à dos avec elle-même (sans épaisseur) est supprimée |
| Morceaux isolés de moins de 0,5 mm | supprimés |
| Triangles orientés à l'envers | retournés pour correspondre à leurs voisins |
| Trous, plats ou non | fermés par un éventail de nouveaux triangles depuis le centre de chaque trou |
| Une pièce retournée | remise à l'endroit (un creux à l'intérieur d'une autre pièce est laissé tel quel : il est censé être orienté vers l'intérieur) |

{{ui:Corriger ce qui est sûr}} effectue toutes ces corrections en une seule étape que {{key:Mod+Z}} annule, et la ligne d'état les liste une à une. La pièce corrigée devient un groupe dont les côtés plats sont des faces uniques. Si elle n'est toujours pas fermée (il reste quelque chose sous **À traiter manuellement**), ou si elle aurait trop de faces pour un groupe, elle devient un maillage à la place : ses faces restent des triangles, et les côtés plats semblent tout de même plats. La ligne d'état l'indique. {{ui:Joindre les pièces qui se chevauchent}} fonctionne de la même façon.

Ce qui ne peut pas être corrigé sans risque figure sous **À traiter manuellement** et est marqué en violet dans la vue, avec {{ui:Afficher}} :

- **Arêtes où trois faces ou plus se rencontrent** : décidez quelle face appartient et effacez les autres.
- **Une pièce qui traverse une autre** : déplacez ou redessinez cette partie. Voir [Faces sécantes](topic:intersect).
- **Trous trop grands ou trop enchevêtrés pour être fermés** : dessinez des faces à travers eux.
- **Pièces distinctes qui se chevauchent** : les trancheurs les fusionnent de toute façon. {{ui:Joindre les pièces qui se chevauchent}} en fait un seul corps fermé (il reconstruit les faces là où elles se rencontrent, c'est donc un bouton distinct, jamais appliqué à votre place).

Pour les groupes de pousser/tirer, vous pouvez aussi corriger un problème à la fois dans {{ui:Infos sur l'entité}} › {{ui:Afficher les problèmes}} / {{ui:Fixe}}, ce qui conserve les faces que vous avez dessinées. Voir [Outils de solide](topic:solids).

Liens connexes : [Préparer un modèle pour l'impression 3D](topic:print-3d) · [Le style Débutant](topic:beginner) · [Pas encore disponible](topic:not-built-yet#3d-printing)
