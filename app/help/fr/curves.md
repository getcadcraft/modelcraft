---
title: Objets courbes
summary: Dessinez des courbes de Bézier, NURBS et à segments droits, donnez-leur une épaisseur, une largeur ou une conicité, remplissez les courbes planes, écrivez un texte en courbe et transformez-les en maillages.
keywords: courbe, courbes, bézier, nurbs, spline, splines, chemin, tube, tuyau, câble, corde, biseau, extrusion, extruder, conicité, inclinaison, rayon, remplissage, profil, texte, lettres, logo, courbe en maillage
from: 602bf077
---

Un **objet courbe** est une courbe qui forme une figure : un tube le long de celle-ci (biseau), une bande (extrusion), un pavillon effilé (conicité) ou, lorsqu'elle est plane et fermée, une plaque remplie ou des lettres. La forme suit la courbe : déplacez un point, et le tube le suit. Lorsque la forme vous convient, transformez-la en maillage.

## Ajouter une courbe

Choisissez {{ui:Courbe}} dans la liste des espaces de travail et appuyez sur {{ui:Ajouter}} :

| Type | Ce que c'est |
| --- | --- |
| Courbe de Bézier, cercle de Bézier | Passe par ses points ; chaque point a deux poignées qui règlent la direction de la courbe |
| Courbe NURBS, cercle NURBS, Chemin | Lisse, tracée vers ses points (elle commence et se termine sur ses points d'extrémité) ; chaque point a un poids |
| Texte | Votre texte sous forme de contours de lettres pleines |

Une nouvelle courbe reçoit un tube fin pour qu'on puisse la voir et la sélectionner ; réglez sa profondeur de biseau à 0 pour une courbe nue.

Vous pouvez aussi partir d'un élément dessiné : sélectionnez un arc, un cercle, un polygone ou une courbe dessinée dans l'espace de travail Modèle, puis appuyez sur {{ui:Créer un objet courbe}} dans {{ui:Infos sur l'entité}}. Les lignes dessinées restent en place.

## Modifier les points

Double-cliquez sur un objet courbe (ou sélectionnez-le et choisissez {{ui:Courbe}}) pour le modifier.

- Cliquez sur un point ou une poignée ({{key:Shift}} ajoute ou retire) ; faites-le glisser pour le déplacer. Glissez dans l'espace vide pour sélectionner avec un cadre.
- {{ui:Prolonger}} ({{key:E}}, ou clic avec {{key:Ctrl}}) ajoute un point après l'extrémité sélectionnée, à l'endroit du pointeur.
- {{ui:Subdiviser}} ({{key:W}}) place un point entre chaque paire de voisins sélectionnés ; une courbe de Bézier garde sa forme.
- {{ui:Déplacer}}, {{ui:Tourner}} et {{ui:Échelle}} déplacent les points sélectionnés avec le pointeur (touches du modeleur {{key:G}} {{key:R}} {{key:S}}, touches pousser/tirer {{key:M}} {{key:Q}} {{key:S}}) ; cliquez pour valider, {{key:Esc}} pour annuler.
- {{ui:Fermer}} ({{key:C}}) ferme une spline ouverte ou ouvre une spline fermée ; {{ui:Inverser}} ({{key:Shift+R}}) la parcourt dans l'autre sens.
- Poignées de Bézier : {{ui:Lisser}} ({{key:V}}) les place pour une courbe lisse, {{ui:Angle}} ({{key:Shift+V}}) les oriente vers les voisins, {{ui:Libre}} ({{key:Alt+V}}) les laisse où vous les avez mises. Faire glisser une poignée la rend libre.
- {{ui:Bézier}}, {{ui:NURBS}} et {{ui:Poly}} changent le type des splines sélectionnées, en conservant les points.

Chaque modification est une étape d'annulation.

## Forme

Les réglages se trouvent dans le panneau (et dans {{ui:Infos sur l'entité}} dans l'espace de travail Modèle) :

- **Forme** : les courbes 3D vont dans n'importe quelle direction ; une courbe plane reste dans son plan et peut être remplie.
- **Remplir les splines fermées** (plan) : les contours deviennent une plaque ; un contour à l'intérieur d'un autre est un trou, si bien que les lettres gardent leurs trous.
- **Extrusion** : la moitié de la largeur de la bande (courbes ouvertes ou 3D), ou la moitié de l'épaisseur de la plaque (remplie).
- **Profondeur de biseau** et **arrondi** : un tube rond le long de la courbe (avec extrusion : une bande arrondie) ; sur une forme remplie, une arête arrondie.
- **Fermer les extrémités** : des capuchons sur un tube ouvert.
- **Conicité le long de la courbe** : met à l'échelle régulièrement le long de chaque spline, par exemple `1, 0.2` pour un pavillon, `0, 1, 0` pour un fuseau.
- **Régularité** et, pour les NURBS, **ordre** : la finesse du tracé et son lissage (2 droit … 6 le plus lisse).
- Avec des points sélectionnés : **rayon** (l'épaisseur du tube à cet endroit, multipliée par le biseau), **inclinaison** (fait tourner la bande autour de la courbe) et, pour les NURBS, **poids**.

Les modificateurs fonctionnent sur un objet courbe comme sur un maillage : un réseau le long de la courbe, une symétrie, une surface de subdivision. Voir [Modificateurs sur un maillage](topic:modifiers).

## Transformer en maillage

{{ui:En maillage}} (dans l'espace de travail Courbe ou dans {{ui:Infos sur l'entité}}, {{ui:Courbe en maillage}}) transforme l'objet courbe en le maillage qu'il affiche maintenant ; ses modificateurs restent par-dessus. Modifiez-le ensuite dans l'espace de travail Maillage. Annuler le ramène à l'état d'objet courbe.

Voir aussi [Maillages](topic:meshes) et [Modifier un maillage](topic:mesh-edit).
