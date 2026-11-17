---
title: Masquer, isoler et afficher
summary: Mettez des éléments de côté pour travailler entre eux, ou n'affichez que ce sur quoi vous travaillez ; les éléments masqués restent masqués dans le fichier.
keywords: masquer, afficher, tout afficher, isoler, masquer les autres, montrer, masqué, vue locale, visibilité, mettre de côté
from: 2c8a3457
---

Masquer met des éléments de côté sans les effacer. Une face, une arête, un groupe ou un composant masqué n'est pas dessiné, et vous ne pouvez ni vous y accrocher, ni cliquer dessus, ni le sélectionner ; vous pouvez ainsi travailler sur ce qui se trouve derrière ou entre d'autres éléments.

## Masquer

1. Sélectionnez ce qu'il faut masquer : faces, arêtes, groupes ou composants.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Hide}}.

Par exemple, pour travailler dans le petit espace entre deux groupes placés côte à côte, sélectionnez celui de devant et masquez-le : les clics et les accrochages atteignent maintenant la face située derrière.

## Isoler

Sélectionnez ce que vous voulez garder à l'écran, puis {{ui:Edit}} › {{ui:More}} › {{ui:Isolate (hide the rest)}}. Tout le reste du modèle se masque — ou, pendant que vous modifiez à l'intérieur d'un groupe, tout le reste de ce groupe. Une face sélectionnée conserve ses arêtes.

## Tout afficher

{{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} affiche à nouveau tout, dans tous les groupes. {{ui:Entity info}} indique combien d'éléments sont masqués lorsque rien n'est sélectionné, avec un bouton {{ui:Unhide all}} à cet endroit également.

{{ui:Outliner}} affiche les groupes et composants masqués en italique, avec un œil barré ; cliquez sur l'œil pour en afficher à nouveau un.

:::note
Avec les touches Modeler, {{key:H}} masque, {{key:Shift+H}} isole et {{key:Alt+H}} affiche tout. ({{ui:Settings}} › {{ui:ModelCraft}} choisit le style des touches.)
:::

## Points à connaître

- Ce qui est masqué est enregistré dans le fichier ModelCraft, et reste masqué lorsque vous l'ouvrez.
- Les éléments masqués restent dans le modèle : les exports les incluent, et il en va de même pour les volumes et les tailles dans {{ui:Entity info}}.
- Chaque masquage, isolement ou affichage constitue une seule étape d'annulation.
