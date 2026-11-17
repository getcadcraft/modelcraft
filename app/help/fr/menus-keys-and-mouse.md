---
title: Menus, touches et souris
summary: Choisissez un style de menus qui correspond au modeleur que vous connaissez déjà, donnez votre propre touche à une commande, déplacez des commandes entre les menus, et réglez l'action de la molette ainsi que des boutons central et droit de la souris.
keywords: style de menus, menus, barre de menus, barre d'outils, raccourcis clavier, raccourcis, touches, style de touches, affectation des touches, personnaliser, réaffecter, souris, molette, inverser, sens du zoom, bouton central, bouton droit, orbite, panoramique, exporter, importer, changer, familier, pousser-tirer, modeleur
from: e56fce3d
---

Les outils de ModelCraft sont les mêmes quel que soit le moyen de les atteindre. Un **style de menus** détermine où ils se trouvent à l'écran, comment ils s'appellent et quelles touches les lancent. Choisissez-en un dans {{ui:Paramètres}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, touches et souris}} ; le changement est immédiat, et ce navigateur s'en souvient.

## Les styles

| Style | Ce que vous obtenez |
|---|---|
| {{ui:ModelCraft}} | La barre d'outils propre à ModelCraft (Fichier, Dessiner, Modifier, Organiser, Édition, Caméra) et ses touches à une seule lettre : {{key:L}} ligne, {{key:R}} rectangle, {{key:P}} pousser/tirer, {{key:M}} déplacer, {{key:Q}} rotation, {{key:S}} échelle, {{key:E}} gomme, {{key:O}} orbite. Le style de départ. |
| {{ui:Pousser-tirer}} | Une barre de menus (Fichier, Édition, Affichage, Caméra, Dessiner, Outils, Fenêtre) au-dessus d'une rangée des outils principaux, avec les mêmes touches à une seule lettre. |
| {{ui:Modeleur}} | Une barre de menus en en-tête (Fichier, Édition, Affichage, Sélection, Ajouter, Objet, Maillage) et les touches des modeleurs de maillage : {{key:W}} sélectionner, {{key:G}} déplacer, {{key:R}} faire pivoter et {{key:S}} mettre à l'échelle la sélection en même temps ({{key:X}}, {{key:Y}} ou {{key:Z}} verrouille un axe pendant le déplacement), {{key:E}} pousser/tirer, {{key:B}} rectangle, {{key:X}} supprimer, {{key:A}} tout sélectionner, {{key:Alt+A}} rien, {{key:Shift+D}} dupliquer, {{key:Mod+G}} grouper, {{key:H}} masquer. Le bouton central fait tourner la vue ; {{key:Shift}} et le bouton central font un panoramique, {{key:Mod}} et le bouton central font un zoom ; le bouton droit annule ce que fait un outil. |
| {{ui:Débutant}} | Un ruban dont l'onglet {{ui:Créer}} présente quelques gros boutons : formes à déposer, trous, déplacer, tourner et dimensionner, aligner, {{ui:Groupe}} (trous découpés dans les formes) et la vérification pour l'impression 3D ; chaque autre outil se trouve dans l'onglet {{ui:Autres outils}}. Le bouton droit fait tourner la vue, le bouton central fait un panoramique. Voir [Le style Débutant](topic:beginner). |

Le style de touches que vous connaissez peut-être par {{ui:Clés}}, en bas à droite de la vue, et par {{ui:Édition}} › {{ui:Plus}}, est le même choix : choisir les touches du modeleur y sélectionne le style {{ui:Modeleur}}, et choisir les touches pousser/tirer quitte ce style pour le style {{ui:ModelCraft}}. Si vous aviez choisi les touches du modeleur dans une version antérieure, ModelCraft s'ouvre une seule fois, de lui-même, dans le style {{ui:Modeleur}}.

:::tip
Une touche qui appartient aux touches pousser/tirer, mais à laquelle votre style attribue une autre commande, ne fait rien, et la ligne d'état indique où sa commande est passée (« Dans Modeleur, Pousser/tirer est E »). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} et les flèches gardent toujours leur sens, les chiffres vont toujours dans la zone de valeur, et lorsqu'un outil déplace quelque chose, ses propres touches l'emportent.
:::

## Personnaliser

1. Choisissez le style le plus proche de ce que vous voulez, puis cliquez sur {{ui:Personnaliser…}}.
2. Dans {{ui:Touches et menus}}, trouvez une commande (la zone de recherche aide). {{ui:Ajouter une touche}}, puis appuyez sur la touche. Cliquez sur une touche pour la retirer.
3. Avec une barre de menus, {{ui:Emplacement}} déplace la commande vers un autre menu, ou vers {{ui:Touches seulement}}.
4. Dans {{ui:Souris}}, réglez la molette et l'action des boutons dans la vue 3D.
5. Donnez-lui un nom et cliquez sur {{ui:Enregistrer}}.

Enregistrer un style intégré crée votre propre copie (« Mon Modeleur ») ; le style intégré, lui, ne change jamais. Votre copie lit les touches comme le style dont elle est issue : une copie créée à partir de {{ui:Modeleur}} garde les touches de déplacement, de rotation et d'échelle qui fonctionnent en même temps.

## Souris

- **Molette de la souris** : {{ui:Faire défiler vers le haut zoome en avant}} (le départ) ou {{ui:Faire défiler vers le haut zoome en arrière}}, et à quelle vitesse. Un pincement sur le pavé tactile zoome toujours dans le sens du mouvement de vos doigts.
- **Glisser dans la vue 3D** : {{ui:Propre à chaque vue}} conserve les boutons de ModelCraft (le bouton central fait tourner la vue, le bouton droit ou {{key:Shift}} avec le bouton central fait un panoramique). Ou réglez les boutons central et droit pour faire tourner, faire un panoramique, zoomer ou ne rien faire ; {{key:Shift}} avec le bouton inverse la rotation et le panoramique. Le bouton gauche appartient toujours à l'outil en cours.
- **Pavés tactiles** : {{ui:Paramètres}} › {{ui:ModelCraft}} › {{ui:Défilement}} décide toujours si deux doigts font tourner la vue (pavé tactile) ou zooment (souris). Voir [Orbite, panoramique et zoom](topic:orbit-pan-zoom).

## Emportez-les avec vous

{{ui:Exporter}} enregistre le style utilisé dans un petit fichier `.ccinput.json` ; {{ui:Importer…}} en ajoute un, depuis un autre ordinateur ou d'un collègue. Un fichier importé ne peut pointer que vers les commandes propres à ModelCraft : tout le reste est laissé de côté et compté dans la ligne d'état. {{ui:Supprimer ce style}} retire l'un de vos propres styles.

:::note
Ces réglages restent dans ce navigateur. {{ui:Utiliser ce style dans toutes les applications}}, sous les cartes de style, fait ouvrir chaque application dans son style correspondant : {{ui:Pousser-tirer}} va avec les styles à barre de menus des autres applications. {{ui:Modeleur}} n'a pas d'équivalent dans les autres applications : il reste un choix propre à ModelCraft.
:::

Voir aussi : [Touches et actions de la souris](topic:keyboard) · [Paramètres de ModelCraft](topic:settings) · [Venir d'autres modeleurs](topic:coming-from)
