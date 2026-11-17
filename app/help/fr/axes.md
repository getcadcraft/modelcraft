---
title: Déplacer et tourner les axes de dessin
summary: Tournez les axes rouge, vert et bleu pour les aligner sur un bâtiment qui n'est pas d'équerre avec eux, ou alignez-les sur une face, pour que le dessin et la saisie les suivent.
keywords: axes, axes de dessin, origine, aligner les axes, tourner les axes, faire pivoter les axes, réinitialiser les axes, bâtiment incliné, oblique, ucs, système de coordonnées
from: cab258f7
---

Les axes rouge, vert et bleu guident tout ce que vous dessinez : les rectangles s'alignent sur eux, les lignes s'y verrouillent, et le sol est le plan rouge-vert. Lorsqu'un bâtiment est incliné (un plan de situation qui n'est pas d'équerre avec le nord, une aile tournée de 30°), placez les axes sur lui pour que le dessin suive ses murs. Le modèle lui-même ne bouge pas.

Les trois commandes se trouvent dans {{ui:Édition}} › {{ui:Plus}}.

## Placer les axes

1. {{ui:Édition}} › {{ui:Plus}} › {{ui:Placer les axes}}.
2. Cliquez à l'endroit de l'origine, par exemple un coin du bâtiment.
3. Cliquez un point sur le nouvel axe rouge, par exemple plus loin le long d'un mur.
4. Cliquez un point dans la direction du nouvel axe vert. Le vert est mis d'équerre avec le rouge, et le bleu se tient d'équerre avec les deux.

Les axes sont dessinés à leur nouvel emplacement. Un rectangle que vous dessinez désormais sur le sol, ou que vous saisissez sous la forme `4m,3m`, suit les axes rouge et vert tournés ; les touches fléchées s'y verrouillent ; et l'accrochage à l'origine se fait sur la nouvelle origine.

## Aligner les axes sur une face

Sélectionnez une face, puis {{ui:Édition}} › {{ui:Plus}} › {{ui:Aligner les axes sur la face}}. Le bleu pointe alors hors de la face, le rouge suit son arête la plus longue, et l'origine se trouve au début de cette arête. Utilisez-le pour dessiner sur un toit en pente comme s'il s'agissait du sol.

## Réinitialiser les axes

{{ui:Édition}} › {{ui:Plus}} › {{ui:Réinitialiser les axes}} les remet là où le modèle a commencé.

## Points à connaître

- Dans un groupe ou un composant ouvert, ses propres axes sont utilisés (ils tournent avec lui) ; les axes du modèle s'appliquent au niveau supérieur.
- Les axes sont enregistrés dans le fichier ModelCraft, et chaque modification est une étape d'annulation.
- Les exports et les vues standard ({{ui:Dessus}}, {{ui:Face}}…) utilisent toujours les directions propres au modèle.
