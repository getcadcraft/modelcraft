---
title: L'écran de ModelCraft
summary: Visite de la barre d'outils, des panneaux de chaque côté, de la vue 3D et de la barre d'état, sous leurs noms à l'écran.
from: 4a9a4516
keywords: écran, disposition, barre d'outils, panneaux, arborescence, infos sur l'entité, style, scènes, barre d'état, zone de saisie, unités, interface, visite
---

De haut en bas : la barre d'application, la barre d'outils, les trois colonnes (panneaux de gauche, vue 3D, panneaux de droite) et la barre d'état.

## La barre d'application

La fine barre tout en haut appartient à chaque application CadCraft. Elle porte le nom et la version de l'application, {{ui:À propos de ModelCraft}}, le bouton de mode d'écran et le commutateur {{ui:Papier}} / {{ui:Objet}}.

- {{ui:Papier}} est le thème clair et {{ui:Objet}} le thème sombre. La vue 3D change de couleurs en conséquence ; votre modèle ne change pas.
- Le bouton de mode d'écran (il indique d'abord {{ui:Plein écran}}) et {{key:Ctrl+Shift+F}} font passer par trois modes : normal, plein écran, et plein écran avec les barres masquées. Avec les barres masquées, pointez le bord supérieur de l'écran (ou touchez-le) pour les faire revenir. {{key:Esc}} quitte le plein écran.

:::note
{{key:Ctrl+Shift+F}} utilise la touche Contrôle sur tous les ordinateurs, y compris un Mac. Sur iPhone, où les navigateurs n'ont pas de plein écran, le bouton ne fait que masquer et afficher les barres.
:::

## La barre d'outils

La barre d'outils est divisée en groupes nommés. Survolez un bouton pour voir son nom et sa touche.

À sa gauche, la liste {{ui:Espace de travail}} change ce à quoi servent la barre d'outils et le panneau de droite : {{ui:Modèle}} (modélisation par pousser/tirer, la visite ci-dessous), {{ui:Maillage}} ([modifier un maillage](topic:mesh-edit)), {{ui:Courbe}} ([objets courbes](topic:curves)), {{ui:UV}} ([disposer les UV](topic:uv)), {{ui:Sculpter}} ([sculpter](topic:sculpt)), {{ui:Ombrage}} ([matériaux faits de nœuds](topic:shading)), {{ui:Animer}} ([animer](topic:animate)) et {{ui:Rendu}} ([calculer un rendu dans la vue](topic:render#render-in-the-view)).

| Groupe | Boutons |
|---|---|
| Fichier | {{ui:Nouveau}}, {{ui:Ouvrir}}, {{ui:Enregistrer}}, {{ui:Importer}}, {{ui:Exporter}} (un menu de formats) |
| Dessiner | {{ui:Ligne}} ({{key:L}}), {{ui:Rectangle}} ({{key:R}}), {{ui:Cercle}} ({{key:C}}), {{ui:Polygone}} ({{key:N}}) |
| Modifier | {{ui:Sélectionner}} ({{key:Space}}), {{ui:Pousser/tirer}} ({{key:P}}), {{ui:Déplacer}} ({{key:M}}), {{ui:Rotation}} ({{key:Q}}), {{ui:Échelle}} ({{key:S}}), {{ui:Gomme}} ({{key:E}}), {{ui:Mètre ruban}} ({{key:T}}) |
| Organiser | {{ui:Composant}} ({{key:G}}), {{ui:Groupe}} ({{key:Shift+G}}), {{ui:Décomposer}} |
| Édition | {{ui:Annuler}} ({{key:Mod+Z}}), {{ui:Rétablir}} ({{key:Mod+Y}}), {{ui:Copier}} ({{key:Mod+C}}), {{ui:Coller}} ({{key:Mod+V}}), {{ui:Plus}} (un menu : couper, copier, coller, coller à la même position {{key:Mod+Shift+V}}, dupliquer {{key:Mod+D}}, supprimer, tout sélectionner, désélectionner tout, et le style de touches) |
| Caméra | {{ui:Orbite}} ({{key:O}}), {{ui:Panoramique}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Étendue}} ({{key:Shift+Z}}), {{ui:Vues}} (un menu) |

Les touches indiquées sont celles du style pousser/tirer ; avec le style Modeleur choisi dans les [paramètres de ModelCraft](topic:settings), les info-bulles montrent ces touches-là. L'outil que vous utilisez apparaît enfoncé. Sur un écran étroit, la barre d'outils défile latéralement.

Le menu {{ui:Vues}} contient {{ui:Iso}}, {{ui:Dessus}}, {{ui:Face}}, {{ui:Droite}}, {{ui:Arrière}}, {{ui:Gauche}} et {{ui:Dessous}}, chacune ajustée au modèle, et {{ui:Perspective}}, qui bascule entre projection en perspective et projection parallèle.

## La vue 3D

Le milieu de l'écran. Les lignes rouge, verte et bleue sont les axes : le rouge et le vert reposent sur le sol, le bleu pointe vers le haut, et **le nord est l'axe vert**. Leur point de rencontre est l'origine.

- Au démarrage, une carte intitulée « Commencer à modéliser » liste les premières touches. Elle disparaît quand vous choisissez un outil de dessin ou cliquez dans la vue.
- Quand un outil travaille, la vue montre des **marqueurs d'inférence** : de petites formes colorées là où le pointeur s'accroche (un cercle vert à une extrémité, un cercle cyan à un milieu, un carré rouge sur une arête, un losange bleu sur une face). Voir [Inférence et accrochage](topic:inference).
- Ce qui est sélectionné devient bleu. Une face vue de dos est gris-bleu.
- Quand vous ouvrez un groupe pour le modifier, tout ce qui est en dehors s'estompe, et les axes passent aux axes propres du groupe.
- Quand un modèle a des scènes, une rangée d'onglets de scènes apparaît en haut de la vue.
- Déposez un fichier n'importe où sur la vue pour l'ouvrir ou l'importer.

## Les panneaux de gauche

**{{ui:Arborescence}}** liste les groupes et composants du modèle, imbriqués comme ils le sont dans le modèle. Un composant utilisé plusieurs fois indique combien de fois, par exemple « Window (4) ».

- Cliquez sur un nom pour le sélectionner. Double-cliquez pour l'ouvrir en modification.
- **Rechercher par nom** (affiché dès qu'il y a au moins deux groupes) ne garde que les lignes dont le nom correspond, avec les groupes qui les contiennent. {{key:Esc}} l'efface.
- L'**œil** au bout d'une ligne masque ou affiche ce groupe ou ce composant (comme {{ui:Édition}} › {{ui:Plus}} › {{ui:Masquer}}). Une icône d'étiquette signifie qu'il est masqué par son [étiquette](topic:tags).
- **Renommer sur place :** cliquez sur une ligne, appuyez sur {{key:F2}}, saisissez, puis appuyez sur {{key:Enter}} ({{key:Esc}} garde l'ancien nom).
- **Faire glisser une ligne** sur le milieu de la ligne d'un autre groupe pour la placer dans ce groupe, sur le bord supérieur ou inférieur d'une ligne pour la placer juste avant ou après, ou sur le titre {{ui:Arborescence}} pour la placer au niveau supérieur. Elle reste à sa place dans le modèle, et garde sa couleur, son étiquette et son nom. Un groupe ne peut pas entrer dans lui-même. Chaque déplacement est une étape d'annulation. Voir [Réorganiser dans l'arborescence](topic:groups-components#rearrange-in-the-outliner).
- Pendant que vous modifiez à l'intérieur d'un groupe, une ligne indique « Editing: Model › … », et un bouton {{ui:Fermer le groupe}} apparaît. Il ferme d'un coup tous les niveaux ouverts.

**{{ui:Composants}}** liste chaque définition de composant avec le nombre de copies placées (« 3× ») et un bouton {{ui:Placer}} qui ajoute une autre copie là où vous cliquez.

## Les panneaux de droite

**{{ui:Infos sur l'entité}}** décrit ce qui est sélectionné. Son titre change pour dire de quoi il s'agit :

| Titre | Affiche | Boutons |
|---|---|---|
| Modèle (rien de sélectionné) | Faces, arêtes, groupes, composants et nombre de copies placées, guides, taille globale | {{ui:Supprimer tous les guides}} (quand il y a des guides) |
| Face | Aire, nombre de trous | {{ui:Inverser la face}} |
| Arête | Longueur | aucun |
| Groupe ou composant | Nom (saisissez pour renommer), nombre de fois où il est placé, s'il s'agit d'un solide fermé, son volume, sa taille | {{ui:Modifier}}, {{ui:Décomposer}}, {{ui:Rendre unique}} (un composant placé plusieurs fois), {{ui:Créer un composant}} (un groupe) |
| Point de guide ou ligne de guide | rien | {{ui:Supprimer}} |
| Plusieurs éléments | Nombre de faces, d'arêtes, de groupes et de guides, aire totale des faces | {{ui:Créer un composant (G)}}, {{ui:Créer un groupe (Maj+G)}} |

**{{ui:Style}}** règle la façon dont le modèle est dessiné : {{ui:Faces}} ({{ui:Ombré}}, {{ui:Lignes cachées}}, {{ui:Filaire}}, {{ui:Rayons X}}), {{ui:Afficher les arêtes}}, et {{ui:Ombres du soleil}} avec la date, l'heure et le lieu du soleil. Voir [Styles et ombres du soleil](topic:styles-shadows).

**{{ui:Scènes}}** enregistre des vues : {{ui:Ajouter une scène}}, la liste des scènes, et {{ui:Précédente}}, {{ui:Lecture}} et {{ui:Suivante}}. Voir [Enregistrer des vues sous forme de scènes](topic:scenes).

## La barre d'état

Le long du bas, de gauche à droite :

1. **L'astuce** : ce que l'outil attend ensuite, ou à quoi le pointeur s'accroche (« Endpoint », « On red axis »).
2. **Les messages** : ce qui vient de se passer (« Undid push/pull. », « Imported site.dxf: 1697 edges on the ground, in a group. ») ou pourquoi quelque chose n'a pas fonctionné.
3. **La zone de saisie** : son intitulé change avec l'outil ({{ui:Longueur}}, {{ui:Cotes}}, {{ui:Rayon}}, {{ui:Côtés}}, {{ui:Distance}}, {{ui:Angle}}, {{ui:Échelle}}, {{ui:Décalage}}). Elle affiche la taille en direct pendant le travail, et reçoit ce que vous saisissez. Voir [Saisir des dimensions exactes dans la zone de saisie](topic:value-box).
4. **Le style de touches** : {{ui:Touches : pousser/tirer}} ou {{ui:Touches : modeleur}} change d'un coup les raccourcis clavier et les boutons de la souris (comme dans les [paramètres de ModelCraft](topic:settings)).
5. **{{ui:Accrochage}} et {{ui:Collision}}** : l'accrochage aux points, arêtes et axes, et l'arrêt des solides là où ils se touchent. Barré = désactivé. Cliquez pour basculer. Voir les [paramètres de ModelCraft](topic:settings).
6. **Le sélecteur d'unités** : l'unité dans laquelle les longueurs sont affichées. Voir [Prendre en main](topic:getting-started#check-the-units-first).

## Sur un écran étroit

En dessous d'environ 760 pixels de large (un téléphone, ou une fenêtre étroite), la vue 3D garde l'écran. La barre d'outils tient sur une rangée qui défile latéralement, et les panneaux s'ouvrent comme des feuilles depuis la barre en bas de l'écran.
