---
title: Trancher pour une imprimante à résine
summary: Trancher le plateau d'impression pour une imprimante à résine, creuser et soutenir la pièce, parcourir les couches, enregistrer le fichier de l'imprimante et trouver votre exposition avec le test d'exposition.
keywords: résine, suggérer une inclinaison, ventouse, force de décollement, contreventement, impression résine, sla, msla, dlp, trancheur, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, creux, trou d'évent, radeau, supports, test d'exposition, échelle d'exposition, étalonnage, couches, module complémentaire
from: 8cc12858
---

Les modules complémentaires résine tranchent ce qui se trouve sur le plateau d'impression en images de couches pour l'écran de votre imprimante, et enregistrent le fichier que votre imprimante lit. Ils sont gratuits, sans aucune fonction verrouillée, et désactivés tant que vous ne les activez pas.

:::note
Aucun fichier n'a encore été chargé sur une vraie imprimante. Les fichiers n'ont été relus que par les lecteurs propres à CadCraft, et les supports sont nouveaux. Vérifiez les couches et lancez votre première impression à la main.
:::

## Ce que vous allez faire

Trancher une pièce pour la résine, vérifier les couches, enregistrer le fichier et le copier sur votre imprimante.

## Étapes

1. Ouvrez {{ui:Paramètres}} › {{ui:Modules complémentaires}} et activez le module complémentaire de trancheur résine ainsi que le module pour le format de fichier de votre imprimante (Elegoo GOO, SL1, Chitubox ou Anycubic). Vous pouvez aussi appuyer sur {{ui:Ajouter l'impression résine}} sur la carte de l'étape d'impression.
2. Placez votre pièce sur le plateau comme dans [Placer des éléments sur le plateau d'impression](topic:print-stage), puis choisissez {{ui:Résine}} à côté de **Impression avec**.
3. Sous **Paramètres d'impression résine**, choisissez votre **Imprimante** et votre **Résine**. La carte affiche la taille de l'écran en pixels. Ce sont les tailles publiées par le fabricant ; vérifiez la vôtre. Vous pouvez les modifier sous Personnalisé.
4. Réglez **Hauteur de couche (mm)**, **Exposition (s)** et **Exposition de la base (s)**. Les valeurs pour chaque résine ne sont qu'un point de départ.
5. Cochez **Creuser, avec un trou d'évent** si vous voulez une pièce creuse, puis réglez **Paroi (mm)** et **Largeur du trou (mm)**.
6. Cochez **Supports et radeau**, puis choisissez la **Densité des supports** : Léger, Moyen ou Fort.
7. Choisissez le **Format de fichier**. Si la carte indique qu'aucun format n'est encore ajouté, appuyez sur le bouton qui affiche Ajouter et le nom du format.
8. Appuyez sur {{ui:Aperçu des couches}} et déplacez le curseur **Couche**. Les pièces flottantes sont entourées. La ligne en dessous donne le nombre de couches, la durée et la résine en mL, en grammes et le coût.
9. Appuyez sur {{ui:Enregistrer le fichier d'impression}}, vérifiez le résumé et appuyez sur {{ui:Enregistrer}}. Copiez le fichier sur votre imprimante.

## Inclinaison, ventouses, renforts et chiffre de décollement

Ces quatre éléments sont des estimations à partir de la forme de la pièce. Aucun n'a encore été testé sur une vraie imprimante : considérez chacun comme une indication et vérifiez les couches.

1. Appuyez sur {{ui:Suggérer une inclinaison}} sous **Inclinaison (degrés)**. CadCraft essaie des inclinaisons de 0 à 60 degrés et retient celle qui donne la plus petite couche maximale, la surface en surplomb la moins étendue et aucune ventouse. Il règle **Inclinaison (degrés)** et indique ce qu'il a trouvé. Les pondérations du calcul sont les nôtres, et non celles d'un fabricant d'imprimantes.
2. Après {{ui:Aperçu des couches}}, un avertissement signale les cavités qui ne s'ouvrent que vers le film. Une cavité de ce type peut retenir une aspiration lorsqu'une couche se décolle. Inclinez la pièce ou ajoutez un trou. Les poches plus étroites que la taille de cellule indiquée dans l'avertissement ne sont pas détectées.
3. Si **Supports et radeau** est activé, cochez **Renforcer les grands supports** pour ajouter des entretoises entre les piliers hauts et fins.
4. La ligne sous l'aperçu donne la plus grande couche en cm2. Elle n'affiche une force que si vous saisissez une **Contrainte de décollement mesurée** sous **Couches de base, levée et vitesses**. Sans votre propre valeur mesurée, elle n'affiche que la surface.

## Trouver votre exposition

1. Activez le module complémentaire de test d'exposition dans {{ui:Paramètres}} › {{ui:Modules complémentaires}}.
2. Appuyez sur {{ui:Placer la pièce de test sur le plateau}}.
3. Appuyez sur {{ui:Enregistrer l'échelle d'exposition}}. Vous obtenez un fichier par exposition, dans un zip.
4. Imprimez chaque fichier avec la même résine, et gardez l'exposition qui donne les piliers fins et les trous ouverts les plus nets.

## Notes

- Le tranchage s'effectue en arrière-plan, de sorte que la page reste utilisable sur un grand plateau.
- Les pièces qui ne sont pas des solides fermés sont laissées de côté, et la carte le signale.
- Si votre imprimante refuse un fichier, la carte du format propose des options pour ce que le format laisse indéterminé. Modifiez-en une, enregistrez à nouveau et dites-nous laquelle a fonctionné.
- Les versions 517 et 518 d'Anycubic ne sont pas écrites.
