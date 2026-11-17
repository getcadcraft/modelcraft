---
title: Trancher une pièce pour imprimante à résine
summary: Découpez le plateau d'impression pour une imprimante à résine, creusez et supportez la pièce, parcourez les couches, enregistrez le fichier de l'imprimante et trouvez votre exposition avec le test d'exposition.
keywords: résine, impression en résine, sla, msla, dlp, trancheur, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, creux, trou d'aération, radeau, supports, test d'exposition, échelle d'exposition, calibrage, couches, module complémentaire
from: 83c394e1
---

Les modules de résine découpent ce qui se trouve sur le plateau d'impression en images de couches pour l'écran de votre imprimante, et enregistrent le fichier que votre imprimante lit. Ils sont gratuits, sans aucune fonction verrouillée, et désactivés tant que vous ne les activez pas.

:::note
Aucun fichier n'a encore été chargé sur une imprimante réelle. Les fichiers n'ont été relus que par les lecteurs propres à CadCraft, et les supports sont nouveaux. Vérifiez les couches, et lancez votre première impression à la main.
:::

## Ce que vous allez faire

Trancher une pièce pour la résine, vérifier les couches, enregistrer le fichier et le copier sur votre imprimante.

## Étapes

1. Ouvrez {{ui:Paramètres}} › {{ui:Modules complémentaires}}, puis activez le module de découpe pour résine et le module pour le format de fichier de votre imprimante (Elegoo GOO, SL1, Chitubox ou Anycubic). Vous pouvez aussi appuyer sur {{ui:Ajouter l'impression en résine}} sur la carte de l'étape Impression.
2. Placez votre pièce sur le plateau comme indiqué dans [Placer des éléments sur le plateau d'impression](topic:print-stage), puis choisissez **Résine** à côté de **Impression avec**.
3. Sous **Réglages d'impression en résine**, choisissez votre **Imprimante** et votre **Résine**. La carte affiche la taille de l'écran en pixels. Ce sont les dimensions publiées par le fabricant ; vérifiez celles de votre appareil, et vous pouvez les modifier sous Personnalisé.
4. Réglez la **Hauteur de couche (mm)**, l'**Exposition (s)** et l'**Exposition du bas (s)**. Les valeurs de chaque résine ne sont qu'un point de départ.
5. Cochez **Creuser, avec un trou d'aération** si vous voulez une pièce creuse, puis réglez l'**Épaisseur de paroi (mm)** et la **Largeur du trou (mm)**.
6. Cochez **Supports et radeau**, puis choisissez la **Densité des supports** : Léger, Moyen ou Élevé.
7. Choisissez le **Format de fichier**. Si la carte indique qu'aucun n'est encore ajouté, appuyez sur le bouton qui affiche Ajouter et le nom du format.
8. Appuyez sur {{ui:Aperçu des couches}} et déplacez le curseur **Couche**. Les morceaux flottants sont entourés d'un cercle. La ligne en dessous indique le nombre de couches, la durée, et la résine en mL, en grammes et son coût.
9. Appuyez sur {{ui:Enregistrer le fichier d'impression}}, vérifiez le récapitulatif et appuyez sur {{ui:Enregistrer}}. Copiez le fichier sur votre imprimante.

## Trouver votre exposition

1. Activez le module de test d'exposition dans {{ui:Paramètres}} › {{ui:Modules complémentaires}}.
2. Appuyez sur {{ui:Placer la pièce de test sur le plateau}}.
3. Appuyez sur {{ui:Enregistrer l'échelle d'exposition}}. Vous obtenez un fichier par exposition, dans un zip.
4. Imprimez chaque fichier avec la même résine, et retenez l'exposition qui donne les piliers fins les plus nets et les trous ouverts les plus propres.

## Remarques

- Le découpage s'effectue en arrière-plan, de sorte que la page reste utilisable avec un grand plateau.
- Les pièces qui ne sont pas des solides fermés sont exclues, et la carte l'indique.
- Si votre imprimante refuse un fichier, la carte du format propose des options pour ce que le format laisse ouvert. Modifiez-en une, enregistrez de nouveau, et dites-nous celle qui a fonctionné.
- Les versions 517 et 518 d'Anycubic ne sont pas écrites.
