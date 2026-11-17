---
title: Disposer les UV d'un maillage
summary: Marquer les coutures, déplier, projeter et ranger les coordonnées de texture d'un maillage dans l'espace UV, puis les vérifier avec un damier et les couleurs d'étirement.
keywords: uv, uvs, déplier, dépliage, couture, coutures, texture, coordonnées de texture, atlas, ranger, rangement, îlot, îlots, damier, étirement, distorsion, projection boîte, projection cylindre, projection sphère, conforme, angles, lscm, abf
from: 00028f20
---

Une texture est une image plane ; un maillage ne l'est pas. Ses **UV** indiquent où se trouve chaque coin de chaque face sur l'image. L'espace UV les crée : vous découpez le maillage le long de **coutures**, vous étalez les morceaux à plat (**déplier**) et vous les ajustez dans le carré (**ranger**).

## Ouvrir

Sélectionnez un maillage et choisissez {{ui:UV}} dans la liste Espace de travail. Un groupe ou un composant devient d'abord un maillage, comme dans l'espace Maillage. La vue 3D passe sur la moitié gauche ; l'**éditeur UV** à droite affiche les faces du maillage disposées sur le carré de texture. La sélection fonctionne comme dans l'espace Maillage, et ce que vous sélectionnez dans une vue l'est aussi dans l'autre.

## Marquer les coutures

Les coutures sont les endroits où le maillage peut être ouvert ; elles apparaissent en rouge dans les deux vues.

- Sélectionnez des arêtes ({{ui:Arête}}, ou {{key:2}}) puis appuyez sur {{ui:Marquer la couture}} ({{key:Ctrl+E}}). {{ui:Effacer la couture}} ({{key:Ctrl+Shift+E}}) les retire.
- {{ui:Coutures aux arêtes vives}} marque chaque arête vive et chaque arête où des faces se rejoignent avec un angle supérieur à 60° : une boîte se découpe en ses six côtés.
- {{ui:Coutures depuis les UV}} marque les coutures là où les UV sont déjà discontinus, par exemple après une projection.

Une pièce fermée a besoin de coutures pour s'étaler à plat : une sphère a besoin d'au moins une découpe, un tube d'une découpe le long de sa longueur.

## Déplier

Sélectionnez les faces à disposer (ou aucune, pour tout le maillage) et appuyez sur {{ui:Déplier}} ({{key:U}}). Chaque morceau compris entre les coutures est étalé à plat en conservant ses angles le plus fidèlement possible (aplatissement basé sur les angles), puis les morceaux sont rangés dans le carré. {{ui:Conforme}} déplie plutôt par des applications conformes aux moindres carrés : c'est plus rapide, un peu moins fidèle sur les morceaux fortement courbes. Une forme qui peut être faite à partir d'une feuille plate, comme le côté d'un cylindre coupé une fois, se déplie sans aucun étirement.

## Projeter

Pour les formes simples, une projection suffit souvent :

| Projection | Ce qu'elle fait |
| --- | --- |
| {{ui:Boîte}} | Chaque face sur le côté de la boîte vers lequel elle est la plus tournée |
| {{ui:Cylindre}} | Autour de l'axe bleu : en largeur, l'angle de rotation ; en hauteur, la hauteur |
| {{ui:Sphère}} | Depuis le centre : en largeur, l'angle de rotation ; en hauteur, la latitude |
| {{ui:Depuis la vue}} | Telles que les faces sont vues dans la vue 3D à cet instant |

Une face à cheval sur la jointure du cylindre ou de la sphère reste d'un seul tenant, si bien que ses UV peuvent dépasser un peu le bord droit du carré ; les textures s'y répètent.

## Disposer

- {{ui:Ranger}} ajuste les morceaux (îlots) dans le carré à une taille de texel unique, chacun tourné pour prendre le moins de place. Le panneau règle l'espace laissé entre eux.
- {{ui:Tourner de 90°}} et {{ui:Refléter}} tournent ou reflètent les UV des faces sélectionnées.
- Dans l'éditeur UV, faites glisser une face sélectionnée pour déplacer les UV de la sélection, ou placez le pointeur sur l'éditeur et appuyez sur {{key:R}} ou {{key:S}}, puis déplacez pour les tourner ou les mettre à l'échelle (un clic les garde, {{key:Esc}} annule). {{key:G}} déplace sans faire glisser. Double-cliquez une face (ou appuyez sur {{key:L}}) pour sélectionner tout son îlot. La molette fait un zoom ; faites glisser avec le bouton du milieu ou le bouton droit pour le panoramique ; {{key:F}} ajuste de nouveau le carré.

Chaque modification est une seule étape d'annulation.

## Les vérifier

- {{ui:Damier}} affiche un damier étiqueté sur le maillage, dans ses UV : des carrés réguliers et carrés signifient que la texture s'étale uniformément ; les étiquettes indiquent le sens de la texture.
- {{ui:Étirement}} colore chaque face selon l'étirement de ses UV : bleu pour aucun, puis vert, jusqu'au rouge pour beaucoup. Le panneau choisit si l'on mesure les **angles pliés** ou la **taille modifiée**, et affiche la moyenne.

Voir aussi [Modifier un maillage](topic:mesh-edit), [Maillages](topic:meshes) et [Modificateurs sur un maillage](topic:modifiers).
