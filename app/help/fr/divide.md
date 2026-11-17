---
title: Diviser une arête ou une courbe en parties égales
summary: Découper une ligne en morceaux égaux, ou donner à un arc ou à un cercle un nouveau nombre de segments, avec l'outil Diviser.
keywords: diviser, diviser une arête, parties égales, segments égaux, découper une arête, segments, subdiviser, subdiviser les arêtes, segments d'arc, segments de cercle, points le long d'une ligne
from: 5c3ce3ed
---

{{ui:Diviser}} découpe une arête en parties égales, avec un coin à chaque point de division. Utilisez ces coins pour vous y accrocher, pour démarrer des lignes, ou pour pousser et tirer des parties d'une face.

## Diviser une arête

1. Cliquez sur {{ui:Diviser}} dans la barre d'outils, ou sélectionnez une arête et cliquez sur {{ui:Diviser…}} dans {{ui:Infos sur l'entité}}.
2. Pointez l'arête. Des repères indiquent où seront les points de division : au milieu de l'arête, elle est divisée en deux parties ; déplacez-vous vers une extrémité pour en obtenir davantage.
3. Cliquez pour la diviser en parties indiquées. Ou saisissez un nombre, comme `5` (ou `5s`, ou `/5`), puis appuyez sur {{key:Enter}} : la division se fait immédiatement.

Les morceaux restent sélectionnés, et l'opération compte pour une seule étape d'annulation. Une face à laquelle appartient l'arête conserve sa forme et gagne les nouveaux coins.

## Diviser un arc ou un cercle

Pointez n'importe quel segment d'un arc ou d'un cercle : il est divisé dans son ensemble.

- Un arc ou un cercle dont aucun autre élément n'utilise les coins, posé à plat sur sa face, est **redessiné avec ce nombre de segments** sur le véritable arc. Ses extrémités restent en place, et il reste une seule courbe : vous pouvez toujours le sélectionner d'un clic et modifier son rayon dans {{ui:Infos sur l'entité}}. Un cercle à 24 côtés divisé en 8 devient un octogone.
- Toute autre courbe — le bord d'un cylindre étiré, une courbe dessinée avec {{ui:Courbe}}, un arc auquel des lignes sont reliées par ses coins — reçoit de nouveaux coins à des longueurs égales le long de la courbe, sans que rien ne bouge.

## Avec les raccourcis du modeleur

L'outil est le même avec les raccourcis du modeleur (Paramètres › ModelCraft › Raccourcis, ou le style de menu Modeler), où il se trouve dans le menu {{ui:Maillage}} sous le nom {{ui:Subdiviser les arêtes}}.

## À savoir

- Les nombres saisis vont de 2 à 1000 ; le pointeur donne jusqu'à 100.
- Une courbe dessinée avec {{ui:Courbe}} conserve ses points : après {{ui:Modifier les points}}, elle est redessinée à partir d'eux et les nouveaux coins disparaissent.

Voir aussi [Dessiner des faces avec des lignes, des rectangles, des cercles et des arcs](topic:draw-faces) et [Saisir des dimensions exactes dans la zone de valeur](topic:value-box).
