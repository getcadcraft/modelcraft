---
title: Touches et actions de la souris
summary: Tous les raccourcis clavier, actions de souris, gestes du pavé tactile et gestes tactiles de ModelCraft, regroupés par fonction.
keywords: clavier, raccourcis, touches, souris, pavé tactile, tactile, gestes, aide-mémoire, ctrl, commande, touches fléchées
from: e2348957
---

Ce sont les touches du style push-pull, celui avec lequel ModelCraft démarre. Pour l'autre style, voir [Touches Modeler](topic:keyboard#modeler-keys) plus bas et [Paramètres de ModelCraft](topic:settings).

Les raccourcis fonctionnent lorsque la vue 3D ou un bouton de la barre d'outils a le focus. Si vous venez de saisir du texte dans un champ de panneau ou de modifier une liste dans {{ui:Style}}, cliquez d'abord dans la vue 3D, sinon vos touches iront dans ce champ. Voir [Touches, souris et pavés tactiles](common:keys) pour savoir comment les touches sont notées sur chaque ordinateur.

## Outils

| Touche | Outil |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | {{ui:Tape}} (mètre ruban) |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Les lettres des outils fonctionnent sans touche de modification seulement : {{key:Shift}} avec une lettre ne fait rien, sauf les deux raccourcis ci-dessous.

## Modèle et fichier

| Touche | Effet |
|---|---|
| {{key:G}} | Créer un composant à partir de la sélection |
| {{key:Shift+G}} | Créer un groupe à partir de la sélection |
| {{key:Shift+Z}} | Zoom sur l'étendue (tout le modèle) |
| {{key:Mod+Z}} | Annuler |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Rétablir |
| {{key:Mod+S}} | Enregistrer (télécharge le fichier `.modelcraft`) |
| {{key:Mod+O}} | Ouvrir un modèle |
| {{key:Mod+A}} | Tout sélectionner (dans le groupe ouvert, s'il y en a un) |
| {{key:Mod+C}} | Copier la sélection |
| {{key:Mod+X}} | Couper la sélection |
| {{key:Mod+V}} | Coller : la copie suit le pointeur, cliquez à l'endroit voulu |
| {{key:Mod+Shift+V}} | Coller à la même position (là où elle a été copiée) |
| {{key:Mod+D}} | Dupliquer : une copie suit le pointeur, cliquez pour la poser |
| {{key:Delete}} ou {{key:Backspace}} | Effacer la sélection |
| {{key:PageDown}} / {{key:PageUp}} | Scène suivante / précédente |
| {{key:F1}} | Ouvrir ou fermer cette aide (aussi {{ui:Help}} dans la barre de l'application ; {{key:Esc}} dans l'aide la ferme) |
| {{key:Ctrl+Shift+F}} | Mode écran : plein écran, puis barres masquées, puis normal (Control aussi sur Mac) |

## Échap

{{key:Esc}} remonte d'un niveau à chaque pression :

1. Annule ce que l'outil est en train de faire (une ligne en cours de tracé, un pousser/tirer, un déplacement). Tout revient à son état initial.
2. Passe à {{ui:Select}}.
3. Efface la sélection.
4. Ferme le groupe que vous modifiez.

Il arrête aussi la lecture des scènes. Dans le champ de valeur, {{key:Esc}} efface ce que vous avez saisi et vous ramène à la vue.

## Pendant qu'un outil travaille

| Touche | Effet |
|---|---|
| Un chiffre, ou l'un de `. , - ' " [ < * /` | Commence la saisie dans le champ de valeur |
| {{key:Enter}} | Applique ce que vous avez saisi dans le champ de valeur |
| {{key:Right}} | Verrouille sur l'axe rouge (appuyez à nouveau pour déverrouiller) |
| {{key:Left}} | Verrouille sur l'axe vert |
| {{key:Up}} | Verrouille sur l'axe bleu |
| {{key:Down}} | Verrouille en parallèle avec la dernière arête survolée avant le premier clic |
| Maintenir {{key:Shift}} | Maintient la direction sur laquelle vous êtes accroché, tant que la touche est maintenue |
| {{key:Ctrl}}, {{key:Mod}} ou {{key:Alt}} (Déplacer) | Bascule entre déplacer et copier |

Les verrouillages par touches fléchées fonctionnent dans {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} et {{ui:Tape}} (lors d'une mesure à partir d'un point), après le premier clic. {{ui:Push/pull}} se déplace toujours dans la direction de la face et n'a aucun verrouillage. Dans {{ui:Rotate}}, les touches fléchées affichent un message « Verrouillé » après le premier clic, mais ne modifient pas la rotation.

## Touches fléchées à d'autres moments

Lorsqu'aucun outil n'est en cours d'action, les touches fléchées déplacent la caméra :

| Touche | Effet |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbite |
| {{key:Shift}} avec une flèche | Panoramique |

## Souris

| Action | Effet |
|---|---|
| Clic | Utilise l'outil en cours |
| Appuyer, glisser, relâcher | Équivalent à deux clics (pour les outils de dessin) ; une sélection par fenêtre (outil {{ui:Select}}) ; efface au passage (outil {{ui:Eraser}}) |
| Double-clic | {{ui:Select}} : une face avec ses arêtes, une arête avec ses faces, ouvre un groupe ; un espace vide ferme le groupe. {{ui:Push/pull}} : répète la dernière distance |
| Triple-clic | {{ui:Select}} : tout ce qui est connecté |
| {{key:Shift}} + clic | {{ui:Select}} : ajoute ou retire de la sélection |
| {{key:Mod}} + clic | {{ui:Select}} : ajoute à la sélection |
| {{key:Shift}} + {{key:Mod}} + clic | {{ui:Select}} : retire de la sélection |
| Glisser avec le bouton du milieu | Orbite, avec n'importe quel outil |
| {{key:Shift}} + glisser avec le bouton du milieu | Panoramique, avec n'importe quel outil |
| Glisser avec le bouton droit | Panoramique, avec n'importe quel outil |
| Molette | Zoom vers le pointeur |

Il n'existe pas de menu contextuel au clic droit.

## Pavé tactile

L'effet d'un balayage à deux doigts dépend de {{ui:Settings}} › {{ui:ModelCraft}} › Défilement :

| Geste | Pavé tactile (ou déduit) | Molette de souris |
|---|---|---|
| Balayage à deux doigts | Orbite | Zoom vers le pointeur |
| {{key:Shift}} + balayage à deux doigts | Panoramique | Zoom |
| Pincement | Zoom vers le pointeur | Zoom vers le pointeur |
| Appui à deux doigts et glissement (clic secondaire maintenu) | Panoramique | Panoramique |

Voir [Orbite, panoramique et zoom](topic:orbit-pan-zoom#on-a-trackpad) et [Paramètres de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Touches Modeler

Avec {{ui:Settings}} › {{ui:ModelCraft}} › Commandes réglé sur le style Modeler :

| Touche | Effet |
|---|---|
| {{key:W}} ou {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (extrusion) |
| {{key:T}} | {{ui:Tape}} |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Déplace la sélection tout de suite, à partir du pointeur |
| {{key:R}} | Fait pivoter la sélection autour de son milieu (axe bleu) |
| {{key:S}} | Met la sélection à l'échelle autour de son milieu |
| {{key:X}} / {{key:Y}} / {{key:Z}} pendant un déplacement ou une rotation | Verrouille l'axe rouge / vert / bleu (à nouveau pour déverrouiller) |
| Clic ou {{key:Enter}} | Pose l'élément |
| {{key:Esc}} ou clic droit | Remet l'élément en place |
| {{key:Shift+D}} | Duplique et déplace la copie |
| {{key:X}} ou {{key:Delete}} | Efface la sélection |
| {{key:A}} / {{key:Alt+A}} | Tout sélectionner / ne rien sélectionner |
| {{key:Tab}} | Ouvre le groupe ou le composant sélectionné ; à nouveau pour le fermer |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Créer un groupe / créer un composant |
| Pavé numérique {{key:1}} / {{key:3}} / {{key:7}} | Vue de face / de droite / de dessus ({{key:Mod}} pour arrière / gauche / dessous) |
| Pavé numérique {{key:5}} | Perspective activée ou désactivée |
| Pavé numérique {{key:.}} | Zoom sur la sélection |
| {{key:Home}} ou {{key:Shift+C}} | Zoom sur l'étendue |
| {{key:Shift+Tab}} | Accrochage activé ou désactivé |
| Glisser avec le bouton du milieu / avec {{key:Shift}} / avec {{key:Mod}} | Orbite / panoramique / zoom |
| {{key:Alt}} + glisser / {{key:Alt+Shift}} + glisser | Orbite / panoramique (sans bouton du milieu) |

Copier, coller, annuler, enregistrer et ouvrir gardent les touches indiquées plus haut. Les valeurs saisies, le champ de valeur et {{ui:Push/pull}} fonctionnent de la même manière dans les deux styles.

## Écran tactile

| Geste | Effet |
|---|---|
| Tape | Un clic avec l'outil en cours |
| Double tape | Un double-clic |
| Appuyer, glisser, relever | Équivalent à appuyer, glisser, relâcher avec une souris |
| Deux doigts : pincement | Zoom |
| Deux doigts : déplacement ensemble | Panoramique ({{ui:Settings}} › {{ui:ModelCraft}} › Écran tactile peut le faire passer en orbite) |
| Trois doigts : déplacement ensemble | Orbite (panoramique si deux doigts font l'orbite) |
| Maintenir un doigt immobile | Termine l'outil, comme {{key:Enter}} ; sans rien en cours, glissez ensuite pour faire l'orbite |
| Un second doigt pendant une action à un doigt | Annule cette action |
| Outil {{ui:Orbit}}, puis glisser un doigt | Orbite |

Pour saisir une valeur sur un écran tactile, touchez le champ de valeur en bas, saisissez, puis appuyez sur la touche Entrée (ou Aller) du clavier.

## Où se trouve Déplacer

Déplacer se trouve dans l'outil {{ui:Move}}, touche {{key:M}} : choisissez ce qu'il faut déplacer, cliquez sur un point de base, puis sur un second point ou saisissez une distance. Voir [Déplacer, copier et créer des réseaux](topic:move-copy).
