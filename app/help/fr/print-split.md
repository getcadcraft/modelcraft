---
title: Découper un grand modèle pour l'impression
summary: Découpez un modèle trop grand pour votre imprimante en morceaux qui tiennent sur le plateau, avec tourillons, clavettes, queues d'aronde, trous de goujons ou d'aimants, et le numéro du joint sur les deux faces ; téléchargez toutes les pièces et une feuille d'assemblage dans un seul zip.
keywords: impression 3D, découper, biais, coupe oblique, coupe en biais, diviseur, couper, trop grand, taille du plateau, volume d'impression, pièces, connecteurs, tourillons, clavettes, queue d'aronde, goujon, aimant, jeu, tolérance, numéros de pièces, assemblage, vue éclatée, zip, stl, 3mf, licence, license, clé USB, dongle
from: ee96ba77
---

Lorsqu'un modèle est plus grand que le plateau de votre imprimante, **Découper pour l'impression** le coupe en morceaux qui tiennent, ajoute des connecteurs pour que les pièces s'alignent quand vous les assemblez, et grave le même numéro sur les deux faces de chaque joint. Ouvrez {{ui:Exporter}} › {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}} ; la ligne **Outils d'impression** de la boîte de dialogue contient {{ui:Découper pour l'impression}}. Elle s'ouvre sous forme de carte au-dessus de la vue.

Il travaille sur ce qui s'imprime : la sélection, ou tout ce qui est affiché si rien n'est sélectionné. Ce qui s'imprime doit être un solide fermé ; si la vérification trouve des trous, utilisez d'abord [Réparation](topic:print-tools#repair).

Il fonctionne dans ModelCraft, sur votre ordinateur : aucun serveur de licences, aucune clé USB, rien n'est envoyé.

## Comment découper

- **Adapter au plateau, nombre minimal de pièces** : indiquez la largeur, la profondeur et la hauteur du plateau (elles proviennent de {{ui:Paramètres}} › ModelCraft › Imprimante 3D). La carte indique combien de pièces sont nécessaires et la taille de chacune ; elle découpe le modèle en pièces égales, aussi peu nombreuses que possible. Une pièce peut être couchée dans les fichiers si cela la fait tenir. Les connecteurs qui dépassent d'une pièce comptent dans sa taille.
- **Aux endroits que je donne** : choisissez l'axe à couper et saisissez où, en millimètres à partir de l'extrémité basse du modèle, séparés par des virgules (`100, 200` donne trois pièces).
  **Biais** incline les coupes d'au plus 60° autour de l'un des deux autres axes (une coupe transversale à Z inclinée autour de X, par exemple) : chaque coupe inclinée passe par le milieu du modèle à son emplacement, offre une surface de collage plus grande et masque mieux le joint sur une surface en pente. Les connecteurs sont perpendiculaires à la coupe.

Les plans de coupe sont dessinés en traits pointillés autour du modèle pendant que la carte est ouverte.

## Connecteurs

Chaque endroit où deux pièces se touchent reçoit des connecteurs, placés automatiquement là où il y a le plus de place : à au moins l'**épaisseur de paroi minimale** plus le **jeu** plus leur propre taille de l'extérieur, et assez loin de toute autre coupe pour que deux trous ne se rejoignent jamais. Sur une longue face, deux connecteurs sont répartis le long de celle-ci, pour que les pièces ne puissent pas pivoter.

- **Tourillons ronds** : un tourillon sur une pièce (chanfreiné à l'extrémité), un trou sur l'autre.
- **Clavettes carrées** : la même chose, en carré, pour que la pièce ne puisse se placer que dans un sens.
- **Queues d'aronde** : une languette qui glisse dans une rainure par le côté. Si une extrémité de la rainure rencontrerait une autre coupe, la queue d'aronde s'arrête avant et glisse par l'extrémité ouverte. Les queues d'aronde conviennent aux coupes dans une seule direction (une rangée de tranches) ; dans une grille, utilisez des tourillons ou des goujons.
- **Trous de goujons** : un trou de chaque côté ; les goujons sont aussi imprimés (dans le zip).
- **Logements d'aimants** : un logement de chaque côté pour un aimant rond du diamètre et de l'épaisseur que vous indiquez. Vérifiez les pôles avant de les coller.
- **Aucun (colle)**.

Le **jeu** est l'écart de chaque côté entre un tourillon et son trou (0,2 mm pour commencer). Il est respecté à la valeur que vous indiquez : les trous ronds sont légèrement agrandis pour que leurs côtés plats, et non leurs coins, conservent cet écart. Augmentez-le si les pièces de votre imprimante sortent trop serrées.

Lorsqu'un joint n'a pas la place pour un connecteur (paroi fine, petite zone de contact), la carte l'indique : collez ce joint-là.

## Numéros de pièces

Lorsque **Graver les numéros de joints sur les deux faces** est activé, chaque joint reçoit le numéro de ses deux pièces, par exemple `3-4`, gravé à 0,6 mm de profondeur sur les deux faces, lisible dans le bon sens sur chacune. Les numéros commencent à 5 mm de haut et deviennent plus petits pour tenir, jusqu'à 2,5 mm ; un joint sans place pour son numéro est signalé dans la liste. Les pièces sont numérotées de la couche du bas vers le haut.

## Aperçu, téléchargement, découper le modèle

1. {{ui:Aperçu}} découpe le modèle et indique le nombre de pièces, de joints et de connecteurs, si chaque pièce passe la vérification d'impression 3D et tient sur le plateau, puis liste la taille de chaque pièce. Un anneau marque chaque connecteur et chaque numéro dans la vue.
2. {{ui:Télécharger les pièces (.zip)}} enregistre un seul zip : un fichier par pièce (STL ou 3MF, selon votre choix sous **Fichiers**), chacune posée sur le plateau ; les goujons ; et la **feuille d'assemblage** — une image des pièces séparées avec leurs numéros (`assembly.svg` et `assembly.png`) et une liste des pièces et des joints (`assembly.txt`).
3. {{ui:Découper le modèle}} remplace les groupes ou composants sélectionnés par leurs pièces dans le modèle, nommées comme sur la feuille d'assemblage, en une seule étape : {{ui:Annuler}} rétablit l'original. Il faut sélectionner les groupes ou composants à découper ; le téléchargement fonctionne sur tout ce qui s'imprime.

## Déplacer vous-même les connecteurs

Après un aperçu, **Connecteurs à la main** vous permet de corriger l'emplacement des connecteurs :

- {{ui:En déplacer un}} : cliquez sur un anneau rouge dans la vue (il devient vert), puis cliquez à l'endroit où il doit aller sur la coupe.
- {{ui:En ajouter un}} : cliquez dans la vue à l'endroit où doit aller un connecteur. Il est placé sur le plan de coupe atteint par votre clic, entre les deux pièces à cet endroit.
- {{ui:En retirer un}} : cliquez sur un anneau rouge pour supprimer ce connecteur.

Chaque modification est vérifiée à nouveau comme les connecteurs automatiques : un emplacement trop proche du contour, d'une autre coupe ou d'un autre connecteur n'est pas créé, et la carte l'indique. {{ui:Automatique de nouveau}} oublie vos emplacements. Ils sont conservés tant que le modèle, la sélection et les coupes restent identiques.

Un aperçu reste valide jusqu'à ce que le modèle, la sélection ou un paramètre change ; la carte vous demande alors de refaire l'aperçu.

:::note
Chaque pièce est vérifiée comme le ferait la vérification d'impression 3D avant le téléchargement. Votre trancheur décide toujours de la façon dont chaque pièce s'imprime : examinez-la là-bas, et imprimez d'abord un joint pour voir comment votre imprimante gère le jeu.
:::
