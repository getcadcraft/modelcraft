---
title: Prendre ModelCraft en main
summary: À quoi sert ModelCraft, comment l'ouvrir, et votre premier parallélépipède, du rectangle au modèle enregistré.
from: d47ad719
keywords: démarrer, premier modèle, débuter, tutoriel, introduction, parallélépipède, volumétrie, 3d, pousser/tirer, démarrage rapide, guidé, guide, débutant, nouveau en 3d
---

ModelCraft est un modeleur 3D pour les premières phases de conception : études de volumétrie, aménagements de pièces, formes de bâtiments rapides et ombres qu'elles portent. Vous dessinez des formes planes, vous les tirez vers le haut pour en faire des solides, et vous continuez à les travailler en dessinant sur leurs faces. Il fonctionne dans votre navigateur, et vos modèles restent sur votre ordinateur.

Si vous avez utilisé SketchUp, l'essentiel de ce que vous savez s'applique ici : les mêmes lettres d'outils, pousser/tirer, une zone de saisie pour les dimensions exactes, des groupes et des composants. [Si vous venez d'autres modeleurs](topic:coming-from) liste ce qui est différent.

## Ouvrir ModelCraft

1. Ouvrez ModelCraft dans une version récente de Chrome, Edge, Firefox ou Safari. Voir [Navigateurs et ordinateurs](common:browsers).
2. Attendez que la vue 3D apparaisse : une zone claire (ou sombre) au milieu avec une carte intitulée « Commencer à modéliser ».

L'écran comporte une barre d'outils en haut, l'{{ui:Arborescence}} et les {{ui:Composants}} à gauche, la vue 3D au milieu, les {{ui:Infos sur l'entité}}, le {{ui:Style}} et les {{ui:Scènes}} à droite, et une barre d'état en bas avec la zone de saisie et les unités. [L'écran de ModelCraft](topic:workspace) explique chaque partie.

:::note
ModelCraft a besoin de WebGL, la fonction de dessin 3D de votre navigateur. Si le milieu de l'écran reste vide et que les outils ne font rien, voir [Dépannage](topic:troubleshooting#the-3d-view-is-blank).
:::

## Vérifier d'abord les unités

Regardez le coin inférieur droit. Le sélecteur d'unités indique dans quelle unité les longueurs sont mesurées.

- Un nouveau modèle démarre en **pieds et pouces** quand votre navigateur est réglé sur les États-Unis (ainsi que le Liberia et le Myanmar), et en **millimètres** partout ailleurs.
- Pour changer, choisissez une autre unité dans le sélecteur : {{ui:ft et in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ou {{ui:mm}}. Le modèle ne change pas de taille ; seuls changent l'affichage des longueurs et la lecture des nombres saisis sans unité.

Un nombre saisi sans unité utilise l'unité du modèle. Dans un modèle en pieds et pouces, un nombre seul est en **pouces** : `120` signifie donc 10 pieds.

## Laisser ModelCraft vous guider pour votre premier modèle

Nouveau en 3D ? Sur la carte {{ui:Commencer à modéliser}}, cliquez sur {{ui:Premier modèle guidé}} (il se trouve aussi dans {{ui:Vues}}). Une petite carte vous mène en quatre étapes, d'un rectangle plat à un modèle prêt pour une imprimante 3D :

1. Dessinez un rectangle au sol.
2. Tirez-le vers le haut pour en faire un parallélépipède.
3. Faites de ce parallélépipède un seul objet (un groupe).
4. Vérifiez-le pour l'impression 3D, puis téléchargez un fichier 3MF ou STL.

La carte surveille le modèle, pas les boutons : elle passe à l'étape suivante quand l'étape est faite, quelle que soit la façon dont vous l'avez faite, et revient d'une étape quand vous annulez. {{ui:Choisir l'outil}} choisit l'outil à votre place. Fermez-la à tout moment avec la croix {{ui:×}}.

## Dessiner votre premier parallélépipède

1. Appuyez sur {{key:R}} pour l'outil {{ui:Rectangle}}, ou cliquez sur {{ui:Rectangle}} dans le groupe {{ui:Dessiner}} de la barre d'outils.
2. Cliquez une fois sur le sol, près du milieu de la vue. C'est le premier coin.
3. Éloignez le pointeur. Un rectangle le suit, et la zone de saisie en bas (intitulée {{ui:Cotes}}) affiche sa taille.
4. Saisissez la taille et appuyez sur {{key:Enter}} : par exemple `4m,3m`, ou `16',12'` en pieds et pouces. Inutile de cliquer d'abord dans la zone de saisie ; saisir un nombre l'y envoie.

   Vous obtenez un rectangle plat au sol. C'est une **face** : une surface entourée d'arêtes.

5. Appuyez sur {{key:P}} pour {{ui:Pousser/tirer}}.
6. Cliquez sur le rectangle, déplacez le pointeur vers le haut, puis cliquez de nouveau. Ou cliquez sur le rectangle et saisissez une hauteur, comme `3m` ou `10'`, puis appuyez sur {{key:Enter}}.

   Le rectangle devient un parallélépipède avec un dessus, un dessous et quatre côtés.

7. Appuyez sur {{key:Space}} pour revenir à {{ui:Sélectionner}}, puis cliquez sur le dessus du parallélépipède. Les {{ui:Infos sur l'entité}} à droite affichent son aire.

:::tip
Vous pouvez aussi faire glisser au lieu de cliquer deux fois : appuyez sur le premier coin, faites glisser, puis relâchez sur le second. Les deux façons fonctionnent pour tous les outils de dessin.
:::

## Regarder autour de soi

- **Orbite :** faites glisser avec le bouton du milieu (la molette), ou appuyez sur {{key:O}} et faites glisser avec le bouton gauche.
- **Panoramique :** faites glisser avec le bouton droit, ou avec le bouton du milieu en maintenant {{key:Shift}}.
- **Zoom :** tournez la molette. Le zoom se fait vers ce qui se trouve sous le pointeur.
- **Tout voir :** appuyez sur {{key:Shift+Z}}, ou cliquez sur {{ui:Étendue}}.

Sur un pavé tactile ou un écran tactile, les gestes sont différents. Voir [Orbite, panoramique et zoom](topic:orbit-pan-zoom).

## Annuler

Appuyez sur {{key:Mod+Z}} pour annuler et sur {{key:Mod+Y}} pour rétablir, ou utilisez {{ui:Annuler}} et {{ui:Rétablir}} dans la barre d'outils. ModelCraft se souvient des 200 dernières étapes tant que le modèle est ouvert. L'historique n'est pas enregistré dans le fichier.

## Enregistrer votre modèle

1. Cliquez sur {{ui:Enregistrer}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+S}}.
2. Le navigateur télécharge un fichier nommé d'après votre modèle, par exemple `Untitled.modelcraft`. La barre d'état indique où il est allé : « Saved Untitled.modelcraft to your downloads. »

**Enregistrer, c'est télécharger.** Chaque enregistrement crée une nouvelle copie dans votre dossier de téléchargements ; il n'écrase pas le fichier que vous avez ouvert. Pour garder un dossier de projet ordonné, déplacez ou renommez vous-même le fichier. [Ouvrir, enregistrer, importer et exporter](topic:files) explique pourquoi et ce que vous pouvez faire d'autre.

:::warning
ModelCraft n'enregistre pas tout seul. Si vous fermez l'onglet avec des modifications non enregistrées, le navigateur demande d'abord (« Quitter le site ? »). Choisissez de rester, puis enregistrez.
:::

## Obtenir de l'aide

Appuyez sur {{key:F1}} ou cliquez sur {{ui:Aide}} dans la barre d'application pour ouvrir cette aide à côté du modèle. Elle fonctionne sans connexion. Appuyez de nouveau sur {{key:F1}}, ou sur {{key:Esc}} dans l'aide, pour la fermer. Voir [Utiliser cette aide](common:help).

## Pour continuer

- [Dessiner des faces avec des lignes, des rectangles et des cercles](topic:draw-faces)
- [Pousser et tirer des faces pour en faire des solides](topic:push-pull)
- [Saisir des dimensions exactes dans la zone de saisie](topic:value-box)
- [Toutes les touches et actions de la souris](topic:keyboard)
