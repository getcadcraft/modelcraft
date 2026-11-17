---
title: Enregistrer des vues comme scènes
summary: Enregistrez une caméra et un style comme scène, mettez-la à jour et renommez-la, puis parcourez ou lisez les scènes pour présenter un projet.
keywords: scène, vue, vue enregistrée, caméra, présentation, animation, lecture, diaporama, page précédente, page suivante, onglets, visite
from: 38680d6e
---

Une **scène** retient une position de caméra, un style et ce qui est masqué : d'où vous regardez, perspective ou parallèle, le style des faces, les arêtes, les réglages du soleil, les groupes masqués, les étiquettes désactivées et la coupe. Les scènes sont enregistrées dans le fichier `.modelcraft`.

## Ajouter une scène

1. Réglez la vue : orbite, zoom, choisissez un style, réglez le soleil.
2. Dans le panneau {{ui:Scènes}} à droite, cliquez sur {{ui:Ajouter une scène}}.

   La scène apparaît dans la liste, nommée « Scène 1 », « Scène 2 », etc., et sous forme d'onglet en haut de la vue 3D. La barre d'état indique « Scène 1 enregistrée : cette caméra, ce style et ce qui est masqué. »

## Aller à une scène

- Cliquez sur son onglet au-dessus de la vue 3D, ou sur son nom dans la liste {{ui:Scènes}}.
- Ou appuyez sur {{key:PageDown}} pour la scène suivante et {{key:PageUp}} pour la précédente. {{ui:Suivante}} et {{ui:Précédente}} sous la liste font la même chose.

La caméra glisse jusqu'à la scène en un peu plus d'une demi-seconde. Si votre ordinateur est réglé pour réduire les animations, elle y saute directement.

## Modifier, renommer ou supprimer une scène

Chaque scène de la liste comporte trois petits boutons après son nom :

- **Mettre à jour** (les flèches circulaires) : enregistre la caméra, le style et ce qui est masqué actuels dans cette scène. « Scène 2 mise à jour. »
- **Renommer** (le crayon) : ouvre une boîte de dialogue « Renommer la scène ». Saisissez le nouveau nom et cliquez sur {{ui:Enregistrer}}.
- **Supprimer** (la corbeille) : supprime la scène. « Scène 2 supprimée. Ctrl+Z la rétablit. »

Ajouter, mettre à jour, renommer et supprimer des scènes sont des étapes d'annulation, comme les modifications du modèle.

## Verrouiller la caméra d'une scène

Lorsque vous calculez plusieurs fois la même vue au fil de l'évolution du projet, verrouillez la caméra de cette scène pour qu'elle ne bouge jamais par accident.

1. Dans la liste {{ui:Scènes}}, cliquez sur le bouton **verrou** (le cadenas ouvert) après le nom de la scène. Il se ferme, et l'onglet de la scène au-dessus de la vue 3D affiche un petit cadenas. La barre d'état indique « Scène 2 : caméra verrouillée. »
2. Allez à la scène chaque fois que vous voulez calculer une image : la caméra revient exactement à la vue enregistrée, si bien que les images obtenues s'alignent sur les précédentes.

Lorsque la caméra est verrouillée, **Mettre à jour** enregistre toujours le style et ce qui est masqué dans la scène, mais la caméra reste à sa place, même si vous avez fait pivoter la vue. Cliquez de nouveau sur le cadenas pour le déverrouiller ; Mettre à jour enregistre alors de nouveau la vue actuelle. Verrouiller et déverrouiller sont des étapes d'annulation, et le verrouillage est enregistré dans le fichier `.modelcraft`.

## Présenter

1. Ajoutez deux scènes ou plus.
2. Cliquez sur {{ui:Lecture}} sous la liste. ModelCraft passe à la scène suivante toutes les quelques secondes, et revient à la première après la dernière.
3. Cliquez sur {{ui:Arrêter}} (le même bouton) ou appuyez sur {{key:Esc}} pour arrêter.

Pour une étude du soleil, ajoutez une scène par heure en ne modifiant que {{ui:Heure}}, puis lancez la lecture. Voir [Styles et ombres du soleil](topic:styles-shadows#a-sun-study).

Pour présenter sans les barres, appuyez deux fois sur {{key:Ctrl+Shift+F}} : plein écran, puis plein écran avec les barres masquées. Les onglets des scènes restent au-dessus de la vue.

## Ce qu'affiche une scène

Une scène retient ce qui était masqué lorsque vous l'avez enregistrée : les groupes et les composants que vous avez [masqués](topic:hide-isolate), les [étiquettes](topic:tags) que vous avez désactivées, et les [plans de coupe](topic:sections) actifs. Aller à la scène masque et affiche de nouveau ces éléments. Ainsi, une scène peut montrer toute la maison, la suivante la maison sans l'étiquette du toit, et la suivante une coupe à travers elle.

Les faces et arêtes libres masquées ne font pas partie des scènes. Aller à une scène ne crée pas d'étape d'annulation. Les scènes enregistrées par une version antérieure de ModelCraft conservent ce qui est masqué tel quel ; cliquez sur Mettre à jour pour l'enregistrer dedans.

## Exporter une animation

{{ui:Exporter une animation}}, sous la liste, parcourt les scènes de la première à la dernière, en déplaçant la caméra en douceur entre elles, et enregistre le film sous forme de vidéo **WebM** (deux secondes de déplacement et une courte pause par scène). Elle enregistre la vue telle que vous la voyez, à sa taille à l'écran, en [mode présentation](topic:styles-shadows#presentation-view) (sans axes, repères ni sélection). Appuyez sur {{key:Esc}} ou cliquez de nouveau sur le bouton pour arrêter sans enregistrer. Le WebM se lit dans les navigateurs et dans VLC, et les logiciels de montage peuvent le convertir.

Pour une visite calculée (ciel, soleil, ombres, matériaux) à une taille de votre choix, utilisez plutôt {{ui:Rendu vidéo…}} : sans images clés d'animation, il prend les scènes, dans l'ordre, comme trajectoire de la caméra. Voir [Animer la caméra et les objets](topic:animation).

## Points à connaître

- Modifier le style ou déplacer la caméra après être allé à une scène ne modifie pas la scène tant que vous ne cliquez pas sur Mettre à jour.
- Les scènes ne sont pas exportées vers Collada, OBJ, glTF, STL ou IFC.
