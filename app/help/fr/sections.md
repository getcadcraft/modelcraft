---
title: Plans de coupe : ouvrir le modèle
summary: Placez un plan de coupe pour voir à l'intérieur du modèle, faites-le glisser, inversez-le ou désactivez la coupe.
keywords: coupe, plan de coupe, coupe transversale, couper, vue éclatée, écorché, intérieur, plan d'étage, tranche, coupe en section, écrêtage
from: 28c3a645
---

Un plan de coupe ouvre le modèle, afin que vous puissiez voir et travailler à l'intérieur : un plan d'étage de maison, l'intérieur d'un meuble. Le modèle n'est pas modifié ; la coupe n'est qu'un affichage.

## En placer un

1. Cliquez sur {{ui:Coupe}} dans le groupe {{ui:Caméra}}.
2. Cliquez sur une face. Le plan est placé sur cette face, avec quatre flèches qui pointent vers vous.

   Cliquez hors de toute face pour placer un plan carré face à la direction dans laquelle vous regardez le plus. Appuyez d'abord sur une touche fléchée pour le placer perpendiculairement au rouge ({{key:Right}}), au vert ({{key:Left}}) ou au bleu ({{key:Up}}).

Le côté vers lequel pointent les flèches est **coupé et retiré**. Un plan placé sur une face ne coupe encore rien : faites-le glisser dans le modèle.

## Le faire glisser, l'inverser, le désactiver

Cliquez sur le contour du plan pour le sélectionner. Dans {{ui:Infos sur l'entité}} :

- {{ui:Le long de ses flèches}} indique sa position. Saisissez une nouvelle distance et appuyez sur {{key:Enter}} pour le faire glisser à travers le modèle ; saisir `-1m` sur un plan placé sur une face avant le déplace de 1 m dans le modèle.
- {{ui:Inverser}} retourne les flèches, pour que l'autre côté soit retiré.
- {{ui:Active (coupe le modèle)}} : un seul plan coupe à la fois. Cochez la case d'un autre plan, ou placez-en un nouveau, et c'est celui-là qui coupe.
- Renommez-le dans {{ui:Nom}} ; supprimez-le avec {{key:Delete}} ou avec la {{ui:Gomme}}.

Là où le plan traverse un solide fermé, la coupe est remplie d'une couleur sombre. Une géométrie qui n'est pas fermée (une seule face, une boîte ouverte) est coupée, mais pas remplie.

## Afficher et masquer

Dans {{ui:Vues}} :

- {{ui:Afficher les plans de coupe}} masque les contours et les flèches des plans (la coupe reste).
- {{ui:Afficher les coupes}} désactive la coupe et affiche le modèle entier, sans supprimer les plans.

[Mode présentation](topic:styles-shadows#presentation-view) masque aussi les contours.

## Points à connaître

- Ce qui est retiré ne peut pas être cliqué ni accroché, si bien que vous pouvez dessiner sur ce que la coupe laisse voir.
- Les plans de coupe, le plan actif et les deux interrupteurs sont enregistrés dans le fichier ModelCraft. Chaque modification constitue une étape d'annulation.
- Les exports contiennent toujours le modèle entier : une coupe est un affichage, et non une modification.
