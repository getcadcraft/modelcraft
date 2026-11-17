---
title: Saisir des dimensions exactes dans la boîte de valeur
summary: Toutes les façons de saisir des longueurs, dimensions, points, décalages, angles, côtés et copies, et comment les unités et les nombres seuls sont lus.
keywords: boîte de valeur, vcb, saisie, exact, dimension, longueur, unités, pieds, pouces, métrique, millimètres, coordonnées, décalage, réseau, côtés, angle, virgule décimale
from: 0148dc3d
---

La boîte de valeur se trouve dans la barre d'état en bas, avec une étiquette qui change selon l'outil. Pendant que vous travaillez, elle affiche la taille en direct ; à tout moment, vous pouvez en saisir une exacte.

## Comment saisir

1. Commencez l'action par un clic (le premier coin, la face, le point de départ du déplacement).
2. Saisissez. Inutile de cliquer dans la boîte de valeur : un chiffre ou l'un de ces caractères `. , - ' " [ < * /` y envoie votre saisie.
3. Appuyez sur {{key:Enter}}.

Appuyez sur {{key:Esc}} dans la boîte de valeur pour l'effacer et revenir à la vue. Sur un écran tactile, touchez la boîte de valeur pour afficher le clavier.

Si ModelCraft ne peut pas lire ce que vous avez saisi, la barre d'état indique : « Saisissez une longueur comme 3m, 10'6" ou 4m,3m. » Si l'outil ne peut pas l'utiliser, elle affiche « Cela n'a pas fonctionné : … » avec la raison.

## Longueurs

| Saisie | Signifie |
|---|---|
| `3m` `320cm` `3200mm` | Mètres, centimètres, millimètres |
| `10'` `10ft` `10 feet` | Pieds |
| `6"` `6in` `6 inches` | Pouces |
| `10'6"` `10' 6"` `10'-6 1/2"` | Pieds et pouces, avec une fraction |
| `6 1/2"` `6-1/2"` `3/4"` | Pouces avec une fraction |
| `1.5ft` `.5m` | Décimales avec une unité |
| `120` | Un nombre seul, dans l'unité du modèle |

**Un nombre seul utilise l'unité du modèle**, comme indiqué dans le sélecteur en bas à droite : pouces dans un modèle en pieds et pouces (donc `120` vaut 10 pieds), millimètres dans un modèle en millimètres, et ainsi de suite. Saisir une unité l'emporte toujours, quelle que soit l'unité du modèle. Les guillemets typographiques et les signes de prime (’ ” ′ ″) sont aussi lus comme pieds et pouces.

:::warning
Utilisez toujours un **point** pour les décimales : `2.5m`. La virgule sépare deux valeurs : `2,5` signifie 2 et 5 (deux valeurs), quels que soient vos réglages de langue.
:::

## Calculs

Toute longueur peut être un calcul : ajoutez `+`, soustrayez `-`, multipliez `*`, divisez `/`, et utilisez des parenthèses. Pas besoin de calculatrice.

| Saisie | Signifie |
|---|---|
| `2.5/3` | Un tiers de 2.5 (dans l'unité du modèle) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" dans un modèle en pieds et pouces |
| `3m-25cm` | 2.75 m |

Un nombre seul est dans l'unité du modèle lorsqu'il désigne une longueur (`2.5/3` dans un modèle en mètres vaut 0.833 m), et c'est un simple facteur lorsqu'il multiplie ou divise une longueur (`2*450mm`). Les angles et les facteurs acceptent aussi les calculs : `90/2` vaut 45°. Deux longueurs multipliées donnent une surface, pas une longueur, donc `2m*3m` est refusé.

Si ModelCraft ne peut pas le calculer, la barre d'état indique le problème et son emplacement, par exemple « Division by zero (character 4). » Une parenthèse lance aussi la boîte de valeur, si bien que vous pouvez commencer par `(`.

Ces saisies gardent leur sens propre : `/3`, `3x` et `*3` après une copie, `24s` pour les côtés, et `/3` avec une arête sélectionnée (elle [divise l'arête](topic:divide)).

## Par outil

| Outil | Étiquette | Saisie |
|---|---|---|
| {{ui:Ligne}} | {{ui:Longueur}} | Une longueur (vers le pointeur), ou un point ou un décalage (voir ci-dessous) |
| {{ui:Rectangle}} | {{ui:Cotes}} | Deux longueurs : `4m,3m`, `12',10'`. Un point-virgule fonctionne aussi : `4m;3m` |
| {{ui:Cercle}}, {{ui:Polygone}} | {{ui:Côtés}}, puis {{ui:Rayon}} | Avant le premier clic, le nombre de côtés : `12s` ou `12` (3 à 999). Après, le rayon |
| {{ui:Pousser/tirer}} | {{ui:Distance}} | Une longueur. Une valeur négative va dans l'autre sens |
| {{ui:Déplacer}} | {{ui:Distance}} | Une longueur (vers le pointeur), ou un point ou un décalage. Après une copie : `3x`, `*3`, `/3` |
| {{ui:Rotation}} | {{ui:Angle}} | Degrés : `90`, `-45`, `22.5` |
| {{ui:Échelle}} | {{ui:Échelle}} | Un facteur supérieur à 0 : `2`, `0.5`, `1.25` |
| {{ui:Mètre ruban}} | {{ui:Décaler}} ou {{ui:Longueur}} | Une longueur |
| {{ui:Diviser}} | {{ui:Parties}} | Combien de parties égales : `5`, `5s` ou `/5` (2 à 1000). Voir [Diviser une arête ou une courbe en parties égales](topic:divide) |
| {{ui:Cote}} | {{ui:Décaler}}, puis {{ui:Longueur}} | Où passe la ligne de cote ; juste après la pose, une nouvelle longueur redimensionne le modèle |
| {{ui:Sélectionner}} | {{ui:Valeur}} | Avec une cote ou une arête sélectionnée, une nouvelle longueur redimensionne le modèle. Voir [Cote et redimensionnement](topic:dimensions) |

## Points et décalages

Pour {{ui:Ligne}} et {{ui:Déplacer}}, après le premier clic :

- `[x,y,z]` va à ce point exact du modèle (dans les axes propres du groupe lorsque vous éditez à l'intérieur d'un groupe). Exemple : `[0,0,3m]` est à 3 m exactement au-dessus de l'origine.
- `<dx,dy,dz>` va à cette distance du premier point, selon le rouge, le vert et le bleu. Exemple : `<0,0,10'>` est à 10 pieds directement vers le haut.

Chacune des trois valeurs peut avoir sa propre unité : `<12',0,6">`.

## Copies après un déplacement

Juste après une copie avec {{ui:Déplacer}} :

| Saisie | Crée |
|---|---|
| `3x` ou `*3` | 3 copies à la suite, avec le même espacement |
| `/3` | 3 copies réparties également entre l'original et la première copie |

Jusqu'à 500 copies. Voir [Déplacer, copier et créer des réseaux](topic:move-copy#a-row-of-copies).

## Les longueurs saisies ont besoin d'une direction

Une longueur saisie seule suit la direction du pointeur depuis le premier clic. Si vous saisissez juste après un clic, avant tout mouvement, il n'y a pas encore de direction et rien ne se passe. Déplacez un peu le pointeur vers l'endroit souhaité, puis saisissez.

## L'unité du modèle

Changez l'unité dans le sélecteur en bas à droite : {{ui:ft et in}}, in, ft, yd, mi, mil, µm, mm, cm, m ou km, dans la mesure où elles sont activées dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}} (l'unité propre du modèle est toujours présente). Une longueur saisie avec la marque d'une unité est lue dans cette unité. Voir [Unités, valeurs saisies et listes d'unités](common:unit-lists). Cela change l'affichage des longueurs et la lecture des nombres seuls ; le modèle garde la même taille. L'unité est enregistrée dans le fichier.

Affichage des tailles :

| Unité | Longueurs | Surfaces | Volumes |
|---|---|---|---|
| ft et in | `10' 6 1/2"` (au 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² à partir de 0.01 m², sinon mm² | m³ à partir de 0.01 m³, sinon mm³ |

Un nouveau modèle démarre en pieds et pouces lorsque la langue du navigateur est réglée sur une région des États-Unis (ainsi que le Liberia et la Birmanie), et en millimètres partout ailleurs. Une unité marquée d'une étoile dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}} est utilisée à la place, lorsque ModelCraft la propose. Vous pouvez aussi changer le sélecteur après {{ui:Nouveau}}.
