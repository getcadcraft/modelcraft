---
title: Intersecter les faces
summary: Tracez les lignes où les faces se traversent, pour pousser, effacer ou peindre les morceaux.
keywords: intersecter, intersecter les faces, intersecter avec le modèle, intersecter avec la sélection, couper, ouverture, trou, joindre, lignes où les faces se croisent, booléen
from: 6bc58526
---

Lorsqu'une forme traverse une autre, ModelCraft ne trace pas la ligne où leurs faces se rencontrent : elles se chevauchent simplement. **Intersecter** trace ces lignes, sous forme d'arêtes, si bien que les faces s'y divisent. Vous pouvez ensuite pousser/tirer, effacer ou peindre les morceaux.

Les deux commandes se trouvent dans {{ui:Edit}} › {{ui:More}}.

## Intersecter avec le modèle

Découpe ce que vous sélectionnez par rapport à **chaque face à l'écran**.

Par exemple, une poutre (un groupe) traverse un mur (un autre groupe), et vous voulez une ouverture dans le mur :

1. Double-cliquez sur le mur pour l'ouvrir, puis sélectionnez toutes ses faces ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Le contour de la poutre est tracé sur les deux faces du mur, sous forme de deux nouvelles faces. Poussez l'une d'elles à travers le mur pour créer l'ouverture, puis fermez le mur.

## Intersecter avec la sélection

Découpe les faces, groupes et composants sélectionnés **uniquement les uns par rapport aux autres**. Sélectionnez-en au moins deux.

## Où vont les lignes

Les lignes sont toujours tracées dans le **contexte ouvert** : dans le modèle lorsqu'aucun groupe n'est ouvert, ou dans le groupe que vous modifiez. Les groupes et composants qui ne sont pas ouverts ne sont pas modifiés. Pour découper les faces d'un groupe, ouvrez-le donc d'abord, comme dans l'exemple ci-dessus.

## Points à connaître

- Les faces situées dans un même plan ne sont pas intersectées.
- Les lignes qui referment une boucle sur une face créent une nouvelle face, comme le font les lignes dessinées.
- Chaque intersection constitue une étape d'annulation. Si rien ne se croise, rien ne change.
- Pour les formes fermées, les [outils de solides](topic:solids) (Union, Soustraction) font tout le travail en une seule étape.
