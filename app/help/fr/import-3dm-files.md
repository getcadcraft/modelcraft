---
title: Importer un modèle .3dm
summary: Importez un fichier .3dm avec ses maillages, surfaces, courbes, blocs, calques et couleurs ; d'où viennent les triangles, et ce qui n'est pas repris.
keywords: 3dm, importer, nurbs, polysurface, brep, surfaces, maillage de rendu, extrusion, courbes, blocs, calques, étiquettes, couleurs, unités, changer, migrer
from: 3cf29879
---

ModelCraft lit les fichiers `.3dm` avec son propre lecteur, dans la page. Rien n'est téléversé, et cela fonctionne hors ligne chaque fois que ModelCraft fonctionne. Les fichiers enregistrés dans les versions 5, 6, 7 et 8 ont été testés ; les plus anciens (versions 2 à 4) devraient aussi s'ouvrir, mais n'ont pas encore été essayés.

## Importer le fichier

1. Cliquez sur {{ui:Import}} dans le groupe {{ui:File}} (ou déposez le fichier `.3dm` sur la vue 3D).
2. Choisissez le fichier.

   La barre d'état indique « Lecture de chair.3dm… » pendant la lecture, puis ce qui a été importé, par exemple « chair.3dm importé : 14 maillages (8330 faces), 8 courbes, 5 placements de blocs, 3 calques en étiquettes. Surfaces : 7 faces à partir des maillages enregistrés dans le fichier, 29 maillées par CadCraft. »

Le modèle entier arrive sous forme d'un seul groupe portant le nom du fichier, sélectionné, et la vue fait un zoom dessus. Un {{key:Mod+Z}} le retire entièrement, étiquettes comprises.

## D'où viennent les triangles

ModelCraft modélise avec des faces et des maillages : chaque surface du fichier arrive donc sous forme de [maillage](topic:meshes) de petits triangles plats. Pour chaque face d'une polysurface (et pour chaque extrusion), ModelCraft prend, dans cet ordre :

1. **Le maillage de rendu enregistré dans le fichier.** La plupart des logiciels de modélisation enregistrent avec chaque surface le maillage affiché à l'écran ; lorsqu'il existe, ModelCraft l'utilise tel quel.
2. **Sa propre tessellation**, lorsque le fichier ne contient pas de maillage enregistré : plans, surfaces NURBS, surfaces de révolution (sphères, cônes, tores, formes de tour), courbes extrudées et extrusions (avec leurs trous et leurs faces d'extrémité), découpées selon leurs arêtes. Les faces d'une même polysurface partagent leurs points d'arête, si bien qu'une polysurface fermée arrive sous forme de maillage fermé. Les zones courbes sont subdivisées jusqu'à ce que les triangles restent dans environ 0.15 % de la taille de l'objet par rapport à la surface réelle.
3. **Rien**, pour une face d'un type de surface que ModelCraft ne lit pas encore. La barre d'état indique combien de faces, et de quel type.

La partie « Surfaces : » de la barre d'état indique combien de faces proviennent de maillages enregistrés et combien ont été maillées par ModelCraft. Les arêtes situées à l'intérieur d'une même face du fichier sont douces, et les arêtes entre deux faces sont vives, si bien qu'une face courbe s'ombre de façon continue.

:::tip
Pour des formes plus fidèles, enregistrez le fichier avec ses maillages de rendu dans le logiciel qui l'a créé (c'est généralement l'option par défaut ; une option « enregistrer en petit » les omet).
:::

## Ce qui arrive

- **Maillages** avec leurs couleurs de sommets et leurs coordonnées de texture.
- **Polysurfaces, surfaces et extrusions**, comme décrit ci-dessus.
- **Courbes** (lignes, polylignes, arcs, cercles, courbes NURBS et courbes assemblées à partir de celles-ci) sous forme d'[arêtes](topic:curves), un groupe d'arêtes par calque.
- **Blocs** : ils deviennent des [composants](topic:groups-components). Chaque placement d'un bloc est un placement d'un même composant, si bien que modifier une copie les change toutes. Les blocs imbriqués dans des blocs sont conservés.
- **Calques** : ils deviennent des [étiquettes](topic:tags) portant le nom complet du calque (« Furniture::Chairs »), masquées lorsque le calque était désactivé. Le placement de chaque objet porte l'étiquette de son calque.
- **Couleurs.** La couleur d'un objet provient de l'endroit indiqué par le fichier : sa couleur propre, celle de son calque, ou la couleur de base de son matériau. Elle devient la peinture de ses faces.
- **Les objets masqués arrivent masqués** ; {{ui:Unhide all}} les affiche.
- **Unités :** le fichier indique son unité ; le modèle arrive à sa taille réelle.

## Ce qui est laissé de côté (et signalé)

La partie « Remarques : » de la barre d'état nomme tout ce qui n'a pas été importé, avec leur nombre :

- points et nuages de points, texte, points de texte, cotes, repères, hachures, lumières, plans de coupe et détails de mise en page ;
- objets SubD : transformez-les d'abord en maillages ou en polysurfaces dans le logiciel qui a créé le fichier ;
- faces sur des surfaces décalées et d'autres types de surfaces que ModelCraft ne lit pas encore, lorsque le fichier n'a pas enregistré de maillage pour elles ;
- blocs liés depuis d'autres fichiers (seul le fichier importé est lu) ;
- extrusions dont les extrémités sont coupées en biais : elles arrivent avec des extrémités droites.

Les textures de matériaux, les réglages de rendu, les vues nommées, les groupes et le texte utilisateur ne sont pas lus ; un matériau ne donne que sa couleur de base.

## Limites

Fichiers jusqu'à 300 Mo. Un fichier endommagé indique le problème et n'ajoute rien ; un objet impossible à lire est laissé de côté et compté, et le reste est importé.
