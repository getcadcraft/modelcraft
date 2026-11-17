---
title: Effacer et nettoyer
summary: Effacer des arêtes, des groupes et des guides avec la gomme ou la touche Suppr, réparer les faces découpées et corriger les faces tournées dans le mauvais sens.
keywords: effacer, gomme, supprimer, retirer, réparer, fusionner les faces, nettoyer, lignes parasites, inverser la face, face arrière, annuler
from: 80b92a81
---

## Effacer avec la gomme

1. Appuyez sur {{key:E}} pour la {{ui:Gomme}}.
2. Cliquez sur une arête, un groupe ou un composant, ou un guide. Il est effacé.
3. Pour en effacer plusieurs, maintenez le bouton enfoncé et faites glisser le pointeur sur eux. Tout ce que vous survolez est mis en évidence, et tout disparaît lorsque vous relâchez.

La gomme ne sélectionne pas les faces : une face disparaît lorsque vous effacez les arêtes dont elle a besoin. Les faces sont ce que la gomme parcourt pour trouver les arêtes.

## Ce qui arrive aux faces

- **Une arête entre deux faces du même plan** (une ligne tracée sur un sol, par exemple) disparaît, et les deux faces **se réparent** en une seule.
- **Une arête dont une face a besoin pour rester fermée** (l'arête d'une boîte) entraîne cette face avec elle. Si vous effacez une arête supérieure d'une boîte, le dessus et un côté disparaissent, laissant une boîte ouverte.
- **Les bouts libres** (points qu'aucune arête n'utilise plus) sont nettoyés.

Effacer la dernière copie d'un composant retire aussi ce composant du panneau {{ui:Composants}}.

## Effacer avec la touche Suppr

1. Sélectionnez ce que vous voulez retirer avec {{ui:Sélectionner}}.
2. Appuyez sur {{key:Delete}} ou {{key:Backspace}}.

Cela supprime aussi les faces. Une face supprimée de cette façon laisse ses arêtes en place : vous pouvez donc supprimer le dessus d'une boîte en gardant son contour, puis dessiner autre chose à cet endroit.

## Nettoyer les lignes parasites sur une face plane

Si un mur ou un sol présente des lignes indésirables (restes du dessin), effacez-les avec la {{ui:Gomme}}. Les lignes situées dans la face se réparent ; la face reste.

## Une face tournée dans le mauvais sens

Une face vue depuis l'arrière apparaît en bleu-gris. Si une face montre du bleu-gris sur l'extérieur de votre modèle :

1. Sélectionnez la face.
2. Cliquez sur {{ui:Inverser la face}} dans {{ui:Infos sur l'entité}}.

Le sens des faces compte surtout à l'exportation : les moteurs de rendu, les moteurs de jeu et les imprimantes 3D peuvent masquer ou mal interpréter les faces orientées vers l'intérieur.

## Annuler une erreur

{{key:Mod+Z}} annule une étape à la fois, {{key:Mod+Y}} (ou {{key:Mod+Shift+Z}}) rétablit. Un glissement avec la gomme compte pour une seule étape, quel que soit le nombre d'éléments concernés. La barre d'état indique ce qui a été annulé : « Annulé : effacement. »
