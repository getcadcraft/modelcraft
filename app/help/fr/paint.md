---
title: Peindre avec des couleurs et des matériaux
summary: Donnez aux faces, groupes et composants une couleur unie ou un matériau comme la brique, le bardage, les bardeaux ou le bois, et conservez-les à l'exportation.
keywords: peindre, couleur, coloris, matériau, matériaux, texture, textures, brique, bardage, bardeaux, couverture, bois, pierre, carrelage, béton, crépi, herbe, gravier, verre, métal, pot de peinture, remplissage, échantillon, pipette, par défaut, glb, obj, mtl, collada
from: b1500523
---

Les couleurs vous aident à distinguer les parties d'un modèle, et les **matériaux** (brique, bardage, couverture, bois, pierre, carrelage, béton, crépi, herbe, verre, métal) lui donnent l'aspect de ce dont il est constitué. Les deux se peignent de la même manière.

## Choisir une couleur

La section {{ui:Couleurs}} à droite affiche une rangée de couleurs unies, {{ui:Par défaut}} (celle barrée d'un trait : aucune couleur) et une case {{ui:+}} pour toute autre couleur. Cliquez sur l'une d'elles pour en faire la couleur courante. L'outil Peindre démarre avec celle-ci.

## Peindre

1. Appuyez sur {{key:B}} ({{ui:Peindre}}), ou, si rien n'est sélectionné, cliquez sur une couleur. (Si quelque chose est sélectionné, cliquer sur une couleur peint aussitôt la sélection.)
2. Cliquez sur une face pour la peindre.
3. Cliquez sur un groupe ou un composant pour peindre cette copie : ses faces qui n'ont pas de couleur propre prennent cette couleur. Les faces que vous avez peintes à l'intérieur conservent la leur.

Pour peindre plusieurs éléments à la fois, sélectionnez-les d'abord puis cliquez sur une couleur, ou cliquez sur l'un d'eux avec {{ui:Peindre}}. Cela ne compte que pour une seule étape d'annulation.

| Maintenez | Et cliquez sur une face | Ce qui est peint |
|---|---|---|
| — | | Cette face |
| {{key:Ctrl}} | | Chaque face qui lui est reliée et qui a la même couleur |
| {{key:Shift}} | | Toutes les faces de cette couleur dans le groupe dans lequel vous travaillez |
| {{key:Alt}} | | Rien : vous prélevez cette couleur à la place |

Pour remettre une face sans couleur, choisissez {{ui:Par défaut}} et cliquez dessus.

## Peindre avec un matériau

La section {{ui:Matériaux}}, sous {{ui:Couleurs}}, liste la bibliothèque de matériaux par type : brique et bloc, bardage, couverture, bois, pierre, carrelage, béton, crépi, sol, verre et métal. Survolez une case pour voir son nom. Cliquez sur l'un d'eux, puis peignez comme avec une couleur : {{key:B}}, cliquez sur des faces, des groupes ou des composants ; ou sélectionnez d'abord puis cliquez sur le matériau.

- Dans le style **Ombré**, les faces affichent la texture du matériau. Lignes cachées, fil de fer et rayons X affichent sa couleur.
- Les textures se déroulent **à l'horizontale sur chaque face** et **à la verticale** : les rangs de briques restent horizontaux sur chaque mur, les bardeaux descendent la pente d'un toit, les lames d'un plancher suivent l'axe rouge. Elles ont leur taille réelle (une brique mesure environ 215 mm de long), elles sont donc justes à toute distance.
- Dans une [image de rendu](topic:render), les matériaux conservent leur texture, leur rugosité et, pour le verre et le métal, leur brillance.
- Un clic avec {{key:Alt}} et {{ui:Peindre}} prélève aussi le matériau d'une face.

Les textures sont dessinées par ModelCraft lui-même : elles fonctionnent donc hors ligne et sont libres d'utilisation pour tout usage (CC0).

## Composants et couleurs

Une couleur peinte sur une face **à l'intérieur** d'un composant apparaît sur chaque copie, car les copies partagent une même définition. Une couleur peinte sur une **copie** depuis l'extérieur (composant fermé) n'appartient qu'à cette copie : deux copies d'un même composant peuvent donc avoir des couleurs différentes. {{ui:Infos sur l'entité}} affiche la couleur d'une face, d'un groupe ou d'un composant sélectionné.

## Couleurs dans les fichiers

- Le fichier ModelCraft conserve chaque couleur et chaque matériau.
- Les autres formats reçoivent la **couleur du matériau** (son aspect de loin) à la place de la texture : glTF, Collada, OBJ, DWG et DXF, ainsi que la vérification pour l'impression 3D. Dans glTF, Collada et OBJ, le matériau conserve son nom, comme `Material_brick-red`.
- **glTF (.glb)** et **Collada (.dae)** : chaque couleur devient un matériau. Un composant affiché avec différentes couleurs est écrit une fois par couleur. Le glTF écrit aussi les textures importées sous forme de textures.
- **OBJ** : l'exportation télécharge deux fichiers, le `.obj` et un fichier de matériaux `.mtl` contenant les couleurs. Conservez-les dans le même dossier. Avec des textures importées, le `.obj`, le `.mtl` et les images arrivent dans un seul `.zip`.
- **DWG** conserve les couleurs exactes ; **DXF** utilise la plus proche des 255 couleurs standard de CAO.
- **STL** et **PLY** transportent des couleurs : STL selon la convention VisCAM / SolidView (les programmes qui ne la lisent pas l'ignorent), PLY comme une couleur sur chaque point. Voir [Formats de fichiers en détail](topic:formats).

:::tip
Pour modéliser un écran, peignez le cadre en anthracite et le verre en bleu après avoir [décalé](topic:draw-faces) la face avant.
:::
