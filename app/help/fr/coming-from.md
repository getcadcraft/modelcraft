---
title: Venir d'autres modeleurs
summary: Comment les habitudes de modelage par pousser/tirer correspondent à ModelCraft, touche par touche, et les différences qui surprennent.
keywords: changement, migrer, familier, différences, modeleur pousser/tirer, skp, raccourcis, habitudes, comparer, zone de mesures, arborescence, infos sur l'entité
from: 74ffd4ac
---

Si vous avez modelé dans SketchUp, ModelCraft vous semblera familier : la même idée de faces et de pousser/tirer, les mêmes lettres d'outils, une zone de valeur où vous saisissez sans cliquer, l'inférence avec les axes rouge, vert et bleu, les groupes, les composants, une arborescence, des {{ui:Infos sur l'entité}} et des scènes. Cette page liste ce qui se transpose directement et, plus important encore, ce qui ne se transpose pas.

## Habitudes qui se transposent

| Vous avez l'habitude de | Dans ModelCraft |
|---|---|
| Appuyer sur Espace pour Sélectionner, L pour Ligne, R pour Rectangle, C pour Cercle | Identique : {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Appuyer sur P Pousser/tirer, M Déplacer, Q Rotation, S Échelle, E Gomme, T Mètre ruban | Identique : {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Appuyer sur O Orbite, H Panoramique, Z Zoom, Maj+Z Zoom étendu | Identique : {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Appuyer sur G pour créer un composant | Identique : {{key:G}}. {{key:Shift+G}} crée un groupe |
| Saisir dans la zone de mesures sans cliquer dedans | Identique, dans le champ de valeur en bas. Appuyez sur {{key:Enter}} |
| Saisir `4m,3m` pour un rectangle, `12s` pour les côtés | Identique |
| Saisir `3x` ou `/3` après un déplacement en copie | Identique ; `*3` fonctionne aussi |
| Saisir `[x,y,z]` ou `<dx,dy,dz>` pour un point ou un décalage | Identique |
| Saisir un nombre nu dans un modèle en pouces architecturaux et obtenir des pouces | Identique |
| Glisser avec le bouton central pour faire orbiter, Maj+glisser avec le bouton central pour le panoramique, molette pour zoomer sous le curseur | Identique |
| Double-cliquer avec Pousser/tirer pour répéter la distance | Identique |
| Touches fléchées pour verrouiller rouge, vert, bleu et parallèle | Identique : {{key:Right}} rouge, {{key:Left}} vert, {{key:Up}} bleu, {{key:Down}} parallèle |
| Maintenir Maj pour verrouiller une inférence | Identique |
| Ctrl (Option sur Mac) pour copier en déplaçant | {{key:Ctrl}}, {{key:Mod}} ou {{key:Alt}}, sur tout ordinateur |
| Maj pour basculer, Ctrl pour ajouter, Maj+Ctrl pour retirer de la sélection | Mêmes touches ; sur Mac, utilisez {{key:Mod}} là où il est écrit Ctrl |
| Fenêtre de gauche à droite, capture de droite à gauche | Identique |
| Un outil Cote pour indiquer les longueurs | {{key:D}}, et plus : saisissez une nouvelle longueur dans une cote et le modèle se redimensionne. Voir [Coter et redimensionner](topic:dimensions) |
| Double-cliquer une face pour la face et ses arêtes ; triple-cliquer pour tout ce qui est relié | Identique |
| Double-cliquer un groupe pour le modifier ; Échap pour fermer | Identique |
| Tracer une ligne sur une face pour la diviser ; effacer une arête entre des faces coplanaires pour les réparer | Identique |
| Pousser un rectangle de fenêtre à travers un mur pour le découper | Identique |
| Faces arrière en gris bleuté ; Inverser les faces | Même couleur ; {{ui:Inverser la face}} dans {{ui:Infos sur l'entité}} |
| Scènes en onglets au-dessus de la vue, Page Up et Page Down | Identique, avec {{ui:Lecture}} dans le panneau {{ui:Scènes}} |
| Ombres selon la date, l'heure, la latitude et la longitude, avec le nord en vert | Identique, dans le panneau {{ui:Style}} |

## Différences qui surprennent

### L'enregistrement est un téléchargement

Il n'existe pas d'Enregistrer qui écrase le fichier ouvert, pas de boîte Enregistrer sous avec un nom, pas d'enregistrement automatique ni de fichier de sauvegarde. {{ui:Enregistrer}} ({{key:Mod+S}}) télécharge à chaque fois un nouveau fichier `.modelcraft`, généralement dans votre dossier de téléchargements. Enregistrez souvent, et renommez ou déplacez les fichiers vous-même. Voir [Ouvrir, enregistrer, importer et exporter](topic:files).

### Il importe les fichiers .skp, mais ne les enregistre pas

{{ui:Importer}} lit les fichiers SketchUp avec le lecteur propre à ModelCraft, dans la page : groupes, composants, couleurs, textures sur les faces, étiquettes et arêtes lisses sont transférés. Voir [Formats de fichiers en détail](topic:formats#skp-files). ModelCraft ne peut pas enregistrer `.skp` : pour revenir en arrière, exportez en Collada depuis ModelCraft et importez-le dans SketchUp.

### Pas de menu contextuel

Le glisser-droit fait un panoramique ; un clic droit ne fait rien. Les commandes que vous chercheriez dans un menu contextuel se trouvent dans {{ui:Infos sur l'entité}} ({{ui:Inverser la face}}, {{ui:Édition}}, {{ui:Décomposer}}, {{ui:Rendre unique}}, {{ui:Créer un composant}}) et dans le groupe {{ui:Organiser}} de la barre d'outils.

### Les unités se trouvent dans la barre d'état

Il n'y a ni Infos du modèle ni choix de gabarit. Le sélecteur d'unités est en bas à droite. Un nouveau modèle démarre en pieds et pouces aux États-Unis, et en millimètres ailleurs, selon la langue de votre navigateur. Les décimales prennent toujours un point : `2.5m`, jamais `2,5m`, car la virgule sépare toujours les valeurs.

### La peinture a ses propres matériaux

{{ui:Peindre}} ({{key:B}}) peint des couleurs unies et les matériaux de la section {{ui:Matériaux}} : brique, bardage, toiture, bois, pierre et d'autres, dessinés par ModelCraft. Vous ne pouvez pas encore charger votre propre image comme matériau ; les textures qui arrivent avec des fichiers importés sont conservées. Voir [Peindre avec des couleurs et des matériaux](topic:paint).

### L'échelle est uniforme, sans poignées

La mise à l'échelle n'affiche pas de boîte avec des poignées. Cliquez le point qui reste en place, un point de référence, puis la nouvelle taille ou un facteur saisi. Elle s'effectue toujours de façon égale dans toutes les directions. Pour étirer dans une seule direction, utilisez pousser/tirer ou déplacez une face, ressaisissez la largeur, la profondeur ou la hauteur d'un groupe dans {{ui:Infos sur l'entité}}, ou [redimensionnez avec une cote](topic:dimensions).

### La rotation choisit son plan là où vous cliquez

Il n'existe pas de rapporteur qui s'accroche aux faces lorsque vous survolez avec les touches fléchées pour choisir le plan. Cliquez le centre sur une face pour tourner dans le plan de cette face, ou sur le sol pour tourner autour de la verticale. Les touches fléchées font orbiter la vue avant le premier clic.

### Inférence à partir des points survolés

ModelCraft s'accroche aux directions des axes depuis **votre point de départ**, et aux points, arêtes et faces sous le pointeur. Il ne suit pas une direction à partir d'un point simplement survolé (l'inférence « depuis le point » en pointillés). Pour vous aligner sur un coin lointain, verrouillez l'axe avec une touche fléchée et survolez ce coin : le point verrouillé glisse pour s'aligner dessus. Ou placez un [guide](topic:guides-measure).

### Le parallèle utilise l'arête survolée avant de commencer

L'inférence parallèle et perpendiculaire utilise la dernière arête que le pointeur a croisée **avant le premier clic**, et non les arêtes survolées pendant le dessin. Voir [Inférence et accrochage](topic:inference#parallel-and-perpendicular).

### Les copies d'un groupe sont liées

Copier un groupe avec {{ui:Déplacer}} crée un second placement du même groupe : modifier l'un modifie les deux, comme pour les composants. SketchUp rend les groupes indépendants. Voir [Dépannage](topic:troubleshooting#editing-one-group-changed-another).

### L'espace ne fait pas de panoramique

{{key:Space}} choisit {{ui:Sélectionner}}, comme dans SketchUp. Dans certaines autres applications web, maintenir Espace fait un panoramique ; ici, non. Faites un glisser-droit à la place.

### Le défilement à deux doigts zoome

Sur un pavé tactile, réglez {{ui:Paramètres}} › {{ui:ModelCraft}} › Défilement : Pavé tactile. Deux doigts font orbiter, {{key:Shift}} et deux doigts font un panoramique, un pincement zoome. Voir [Orbite, panoramique et zoom](topic:orbit-pan-zoom#on-a-trackpad).

Si vos mains connaissent les touches de Blender plutôt que celles de SketchUp, choisissez le style de menu {{ui:Modeleur}} : {{key:G}}, {{key:R}} et {{key:S}} agissent sur la sélection d'un coup, {{key:E}} extrude (pousser/tirer), {{key:Shift+D}} duplique, et une barre de menus en en-tête (Fichier, Édition, Vue, Sélection, Ajouter, Objet, Maillage) remplace la barre d'outils. Venant de SketchUp, le style {{ui:Pousser-tirer}} donne une barre de menus propre à lui, sur les mêmes lettres d'outils. Voir [Menus, touches et souris](topic:menus-keys-and-mouse).

### Les solides poussés l'un dans l'autre ne se coupent pas

Pousser/tirer découpe à travers la face située derrière elle dans le même objet, mais deux solides séparés poussés l'un dans l'autre ne s'intersectent pas. Il n'existe ni Intersect Faces ni Solid Tools.

### Ce qui manque

Le tracé à main levée, Trim, Split et Outer Shell, vos propres matériaux à image, les extensions et un outil de présentation pour les feuilles ne figurent pas dans cette version. [Pas encore disponible](topic:not-built-yet) liste ce qu'il faut faire à la place.

## Raccourcis que garde le navigateur

ModelCraft fonctionne dans un navigateur, si bien que quelques raccourcis appartiennent au navigateur, non à l'application. {{key:Mod+N}} ouvre une fenêtre du navigateur (utilisez {{ui:Nouveau}}), et {{key:Mod+W}} ferme l'onglet. Si vous avez des modifications non enregistrées, le navigateur demande confirmation avant de fermer. Voir [Touches, souris et pavés tactiles](common:keys#shortcuts-the-browser-keeps).
