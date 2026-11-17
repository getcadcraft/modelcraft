---
title: Mesurer et placer des guides
summary: Lisez les longueurs et les aires, mesurez entre deux points avec le mètre ruban, et tracez des lignes et des points de guidage pour dessiner par rapport à eux.
keywords: mesure, mètre ruban, rapporteur, angle, guide incliné, guide, ligne de guidage, ligne de construction, distance, cote, longueur, aire, décalage, mise en page, point de guidage
from: de6d04d9
---

## Lire les tailles sans mesurer

Sélectionnez quelque chose et regardez {{ui:Entity info}} :

- Une arête affiche sa **longueur**.
- Une face affiche son **aire** et le nombre de trous qu'elle comporte.
- Plusieurs faces affichent leur **aire totale**.
- Un groupe ou un composant affiche sa **taille** (largeur × profondeur × hauteur de la boîte qui l'entoure) et, s'il s'agit d'un solide fermé, son **volume**.
- Sans sélection, {{ui:Entity info}} affiche la taille de tout le modèle.

Les longueurs et les aires utilisent l'unité choisie dans le sélecteur en bas à droite. Pour un modèle en millimètres, les aires à partir de 0.01 m² s'affichent en mètres carrés (une pièce de 4 × 3 m s'affiche « 12 m² »).

Pendant que vous dessinez, le champ de valeur affiche en direct la longueur, la taille, le rayon ou la distance ; vous avez donc rarement besoin de mesurer après coup.

Pour modifier une taille après le dessin, sélectionnez une arête ou un groupe et saisissez à nouveau sa longueur ou sa taille dans {{ui:Entity info}}. Ou placez une [cote](topic:dimensions) et saisissez-y une nouvelle longueur.

## Mesurer entre deux points

1. Appuyez sur {{key:T}} pour l'outil {{ui:Tape}}.
2. Cliquez sur un point : un coin, un milieu, un point sur une face, ou le sol. (Cliquer sur une arête fait autre chose ; voir plus bas.)
3. Déplacez-vous jusqu'au second point. La pointe et le champ de valeur ({{ui:Length}}) affichent la distance. L'outil s'accroche aux points et aux directions rouge, verte et bleue.
4. Cliquez. La barre d'état indique « Mesuré : 4' 6" » et un **point de guidage** est laissé au second point.

Pour placer le point de guidage à une distance exacte, saisissez-la après le premier clic puis appuyez sur {{key:Enter}} : il se place dans la direction vers laquelle vous pointez.

## Placer une ligne de guidage

Une ligne de guidage est une ligne en pointillés sans fin, parallèle à une arête, à une distance que vous choisissez. Utilisez les guides pour tracer un retrait, une hauteur d'étage ou le début d'une fenêtre.

1. Appuyez sur {{key:T}}.
2. Cliquez sur une **arête** (pas sur son extrémité). L'indication affiche « Sur l'arête ».
3. Éloignez-vous de l'arête, du côté où doit se trouver le guide. Une ligne en pointillés suit, parallèle à l'arête, et le champ de valeur ({{ui:Offset}}) affiche la distance.
4. Cliquez, ou saisissez le décalage et appuyez sur {{key:Enter}} : `1.5m`, `5'`.

   La barre d'état indique « Ligne de guidage à 1.5 m de l'arête. »

Commencer sur une ligne de guidage existante crée un autre guide parallèle à celle-ci, ce qui permet de reporter une trame à partir d'un guide.

Si vous saisissez un décalage sans vous être éloigné de l'arête au préalable, ModelCraft ne peut pas savoir de quel côté vous voulez aller : « Éloignez-vous d'abord de l'arête pour indiquer le côté. »

## Un guide à un angle : rapporteur

1. Cliquez sur {{ui:Protractor}} dans le groupe {{ui:Modify}}.
2. Cliquez sur le centre : le point par lequel passe le guide. Sur une face, le rapporteur s'aligne sur cette face ; ailleurs, il est posé à plat. Après ce clic, {{key:Right}}, {{key:Left}} ou {{key:Up}} le redressent perpendiculairement au rouge, au vert ou au bleu (appuyez à nouveau pour annuler).
3. Cliquez sur un point qui définit 0°, par exemple le long d'une arête.
4. Déplacez-vous jusqu'à l'angle voulu et cliquez : il s'accroche par pas de 15°. Ou saisissez l'angle en degrés, par exemple `22.5`, et appuyez sur {{key:Enter}} ; le guide va du côté où se trouve le pointeur.

La ligne de guidage passe par le centre à cet angle. Dessinez le long de celle-ci avec {{ui:Line}} pour une pente de toit, un chanfrein ou un mur en biais.

## Dessiner par rapport aux guides

Les outils de dessin s'accrochent aux lignes de guidage (« Sur le guide ») et aux points de guidage (« Point de guidage »), ainsi qu'à l'endroit où une ligne de guidage croise une direction d'axe. Commencez un rectangle là où deux guides se croisent pour le placer exactement.

## Supprimer des guides

- Un seul guide : cliquez dessus avec {{ui:Select}} et appuyez sur {{key:Delete}}, ou cliquez dessus avec l'outil {{ui:Eraser}}.
- Tous les guides : sans sélection, cliquez sur {{ui:Delete all guides}} dans {{ui:Entity info}}.

Les guides sont enregistrés dans le fichier `.modelcraft`. Ils ne sont pas exportés vers d'autres formats.
