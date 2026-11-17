---
title: Liste des outils
summary: Chaque outil de ModelCraft avec sa touche, ce que fait chaque clic, et ce que vous pouvez saisir dans la zone de valeur pendant qu'il fonctionne.
keywords: outils, barre d'outils, commandes, liste, ligne, rectangle, cercle, polygone, décaler, arc, courbe, spline, suivez-moi, balayage, arc à 2 points, arc depuis le centre, sélectionner, pousser tirer, déplacer, rotation, échelle, gomme, mètre ruban, cote, orbite, panoramique, zoom, placer un composant
from: e08a274f
---

L'info-bulle de la barre d'état indique toujours ce que l'outil attend ensuite. {{key:Esc}} annule ce qu'un outil est en train de faire.

## Outils de dessin

| Outil | Touche | Clics | Saisissez dans la zone de valeur |
|---|---|---|---|
| {{ui:Ligne}} | {{key:L}} | Début, puis chaque point suivant. S'arrête quand une face se ferme, ou sur {{key:Esc}} | Une longueur vers le pointeur ; `[x,y,z]` un point ; `<dx,dy,dz>` un décalage ({{ui:Longueur}}) |
| {{ui:Rectangle}} | {{key:R}} | Premier coin (sol ou face), coin opposé | Largeur et profondeur : `4m,3m` ({{ui:Cotes}}) |
| {{ui:Cercle}} | {{key:C}} | Centre (sol ou face), un point sur le bord | Avant le premier clic : les côtés, `24s` ou `24` ({{ui:Côtés}}). Après : le rayon ({{ui:Rayon}}) |
| {{ui:Polygone}} | {{key:N}} | Centre, un coin | Comme pour le cercle ; commence avec 6 côtés |
| {{ui:Arc}} | {{key:A}} | Début, fin, puis le bombement | La longueur de la corde après le début ({{ui:Longueur}}) ; le bombement après la fin ({{ui:Bombement}}) ; `12s` pour les segments |
| {{ui:Rapporteur}} | — | Centre, point à 0°, puis l'angle | L'angle en degrés ({{ui:Angle}}) |
| {{ui:Suivez-moi}} | — | Sélectionnez un tracé, puis cliquez sur la face (ou cliquez sur la face, puis sur une arête du tracé) | — |
| {{ui:Peindre}} | {{key:B}} | Une face, un groupe ou un composant | — ({{key:Ctrl}} connexe, {{key:Shift}} toute cette couleur, {{key:Alt}} prélever une couleur) |
| {{ui:Décaler}} | {{key:F}} | Une face (ou sélectionnez d'abord une face ou des arêtes), puis le côté et la distance | La distance ({{ui:Distance}}) ; vers l'intérieur de la face, le décalage va vers l'intérieur |
| {{ui:Courbe}} | — | Points que la courbe traverse ; {{key:Enter}} ou un double-clic termine | Une longueur le long du pointeur, `[x,y,z]` ou `<dx,dy,dz>` pour le point suivant |
| {{ui:Arc par le centre}} | — | Centre, début, puis fin | Le rayon après le centre ; l'angle en degrés après le début ; `12s` pour les segments |

## Outils d'édition

| Outil | Touche | Clics | Saisissez dans la zone de valeur |
|---|---|---|---|
| {{ui:Sélectionner}} | {{key:Space}} | Clic, double-clic, triple-clic, glissement d'une boîte. Voir [Sélectionner des éléments](topic:select) | Avec une cote ou une arête sélectionnée : une nouvelle longueur, qui redimensionne le modèle |
| {{ui:Pousser/tirer}} | {{key:P}} | La face, puis la distance. Double-cliquez sur une face pour répéter la dernière distance | Une distance ; négative, elle va dans l'autre sens ({{ui:Distance}}) |
| {{ui:Déplacer}} | {{key:M}} | D'un point à un point. Maintenez {{key:Ctrl}} ou {{key:Alt}} pour copier | Une distance vers le pointeur, `<dx,dy,dz>` ou `[x,y,z]` ({{ui:Distance}}). Après une copie : `3x` ou `/3` |
| {{ui:Rotation}} | {{key:Q}} | Centre (sur une face, pour tourner dans son plan), direction de départ, direction d'arrivée | L'angle en degrés ({{ui:Angle}}) |
| {{ui:Échelle}} | {{key:S}} | Le point qui reste fixe, un point de référence, la nouvelle taille | Un facteur : `2`, `0.5` ({{ui:Échelle}}) |
| {{ui:Gomme}} | {{key:E}} | Clic ou glissement sur des arêtes, des groupes, des guides et des cotes | rien |
| {{ui:Mètre ruban}} | {{key:T}} | Depuis une arête : une ligne-guide parallèle. Depuis un point : mesure et laisse un point-guide | Le décalage ({{ui:Décaler}}) ou la distance ({{ui:Longueur}}) |
| {{ui:Cote}} | {{key:D}} | Deux coins (ou une arête), puis l'endroit où passe la ligne de cote. Voir [Cotes et redimensionnement](topic:dimensions) | Le décalage ({{ui:Décaler}}). Juste après : une nouvelle longueur, qui redimensionne le modèle |

{{ui:Déplacer}}, {{ui:Rotation}} et {{ui:Échelle}} agissent sur la sélection. Si rien n'est sélectionné, ils prennent d'abord ce que vous cliquez (une face entraîne ses arêtes).

## Outils de caméra

| Outil | Touche | Glisser pour |
|---|---|---|
| {{ui:Orbite}} | {{key:O}} | Tourner autour de la partie du modèle sous le pointeur ({{key:Shift}} fait un panoramique) |
| {{ui:Panoramique}} | {{key:H}} | Faire glisser la vue |
| {{ui:Zoom}} | {{key:Z}} | Zoomer : vers le haut, on rapproche ; vers le bas, on éloigne |
| {{ui:Étendue}} | {{key:Shift+Z}} | (un bouton, pas un outil) Ajuster tout le modèle à l'écran |

Avec une souris, vous en avez rarement besoin : le glissement avec le bouton du milieu fait tourner la vue, celui avec le bouton droit fait un panoramique, et la molette fait un zoom avec n'importe quel outil. Voir [Orbite, panoramique et zoom](topic:orbit-pan-zoom).

## Organiser

| Bouton | Touche | Action |
|---|---|---|
| {{ui:Composant}} | {{key:G}} | Transforme la sélection en composant |
| {{ui:Groupe}} | {{key:Shift+G}} | Transforme la sélection en groupe |
| {{ui:Décomposer}} | aucune | Redonne aux groupes et composants sélectionnés une géométrie libre |

## Placer un composant

Pas dans la barre d'outils : cliquez sur {{ui:Placer}} à côté d'un composant dans le panneau {{ui:Composants}}. Cliquez une fois à l'endroit où doit aller l'origine du composant ; l'outil revient ensuite à {{ui:Sélectionner}}.
