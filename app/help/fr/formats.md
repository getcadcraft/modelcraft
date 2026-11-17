---
title: Formats de fichiers en détail
summary: Ce que conserve, convertit et laisse de côté chaque format que ModelCraft ouvre, importe et exporte, exactement.
keywords: formats, types de fichiers, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, unités, axes, y vers le haut, z vers le haut, millimètres, limites
from: c47d2d28
---

Le modèle de ModelCraft est en mètres, avec Z (bleu) vers le haut. Chaque format ci-dessous est converti vers ce repère, ou depuis celui-ci.

## ModelCraft (.modelcraft)

| Quoi | Détails |
|---|---|
| Ouvrir | {{ui:Ouvrir}} ({{key:Mod+O}}) ou déposer sur la vue. Les fichiers se terminant par `.json` sont aussi acceptés |
| Enregistrer | {{ui:Enregistrer}} ({{key:Mod+S}}), sous forme de téléchargement |
| Conserve | Tout : géométrie, faces et leurs couleurs, matériaux et textures importées, lampes, arêtes adoucies, groupes, composants, noms, guides, scènes, unités, ainsi que la dernière caméra et le dernier style |
| Laisse de côté | L'historique d'annulation |
| Limite | 200 MB |

Un fichier enregistré par une version de ModelCraft plus récente que la vôtre est refusé : « Ce modèle a été enregistré par une version plus récente de ModelCraft (version de fichier …). Mettez à jour ModelCraft pour l'ouvrir. » Un fichier qui n'est pas un modèle ModelCraft affiche « Ce fichier n'est pas un modèle ModelCraft (il n'est pas en JSON). » ou « Ce n'est pas un fichier ModelCraft que nous pouvons ouvrir : … ».

## USD (.usd, .usda, .usdc, .usdz)

Ouverture, import, et {{ui:Enregistrer en}} ou {{ui:Exporter}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Un fichier USD enregistré par ModelCraft se rouvre sans rien perdre ; les fichiers USD d'autres programmes s'ouvrent comme des maillages, des groupes, des composants, des lampes et des caméras. Voir [Enregistrer, ouvrir et exporter en USD](topic:usd).

## Collada (.dae)

Import et export. Le meilleur format pour échanger des modèles avec d'autres modeleurs 3D.

- **Export :** Collada 1.4.1, Z vers le haut, mètres. Une géométrie par définition de groupe ou de composant ; les composants sont écrits une fois et placés par référence, donc ils restent partagés. Les faces avec trous ou contours concaves sont découpées en triangles. Les couleurs deviennent des matériaux. Les arêtes isolées sont écrites comme des lignes. Les noms non valides dans ce format sont ajustés, et le nom exact est conservé à côté.
- **Import :** les triangles, polygones (avec trous), éventails et bandes de triangles deviennent des faces ; les lignes deviennent des arêtes. Les transformations des nœuds, l'axe vertical du fichier et son unité sont appliqués. Un nœud placé à plusieurs endroits, ou une géométrie utilisée par plusieurs nœuds, arrive comme un composant ; les autres nœuds arrivent comme des groupes. Les couleurs de matériau (diffuse) deviennent des couleurs de face.
- **Non importés :** textures, skins et morphs, caméras, lumières, certains types de transformation (look-at et skew), et références à d'autres fichiers. La barre d'état les compte.
- **Perdu à l'export :** les arêtes adoucies. **À l'import,** les surfaces triangulées restent des triangles, avec les diagonales adoucies pour que les zones planes apparaissent comme une seule surface.

## OBJ (.obj, .mtl)

Import et export.

- **Import :** déposez le `.obj` avec son `.mtl` et ses images de texture (ou importez le `.obj` seul : il arrive sans matériaux, et la barre d'état indique le `.mtl` qu'il attendait). Lu en mètres, avec Y vers le haut. Chaque objet (`o`, sinon `g`) devient un [maillage](topic:meshes), ses faces conservées telles quelles (les quadrilatères restent des quadrilatères). Les coordonnées de texture, les normales et les couleurs par sommet sont conservées. L'image de couleur d'un matériau (`map_Kd`, PNG, JPEG ou WebP) arrive comme une texture, avec ses options d'échelle et de décalage ; sinon, sa couleur (`Kd`). Les arêtes où les normales du fichier se brisent sont vives ; sans normales, ce sont les groupes de lissage du fichier qui décident. Les autres cartes (relief, normale), les points, les lignes et les courbes sont comptés et laissés de côté. OBJ n'a pas d'unité : un modèle fait en millimètres ou en pouces arrive donc à la mauvaise taille. Mettez-le à l'échelle après l'import (voir [Pivoter et mettre à l'échelle](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Export :** mètres, Y vers le haut, coordonnées du monde. Un objet par placement de groupe ; les composants sont écrits en entier à chaque placement. Les maillages gardent leurs propres faces, coordonnées de texture et normales ; les faces reliées par des [arêtes adoucies](topic:soften) reçoivent une normale par coin. Lorsque le modèle a des couleurs, un `.mtl` se télécharge à côté du `.obj`. Lorsqu'il a des textures importées, le `.obj`, le `.mtl` et les images se téléchargent ensemble dans un seul `.zip`.
- **Limite :** 2 millions de sommets ou de faces ; 64 MB de texte.

## glTF (.glb, .gltf)

Import et export, glTF 2.0.

- **Import :** un `.glb`, ou un `.gltf` avec ses fichiers `.bin` et textures : déposez-les tous ensemble sur la vue (ou choisissez le `.glb`). Un `.gltf` donné seul indique le fichier dont il a besoin : « Ce fichier .gltf a besoin de "…" : ouvrez la version .glb, ou déposez le .gltf avec ses fichiers. »
  - **Maillages :** ils arrivent comme des [maillages](topic:meshes), un par maillage du fichier, avec les normales, coordonnées de texture et couleurs par sommet du fichier conservées. Les arêtes où les normales du fichier se brisent sont vives ; les autres sont adoucies. Un maillage utilisé à plusieurs endroits reste partagé.
  - **Nœuds :** ils deviennent des groupes, nommés comme dans le fichier. Les maillages instanciés (EXT_mesh_gpu_instancing) arrivent comme un seul maillage placé plusieurs fois.
  - **Matériaux :** une texture de couleur de base (PNG, JPEG ou WebP) arrive comme une texture, placée selon les coordonnées de texture du fichier (avec toute transformation de texture), et elle est conservée à l'enregistrement ; sinon, la couleur de base. Le métal, la rugosité, les cartes de normales, le verre, le vernis, le sheen et les autres extensions de matériau sont lus mais pas encore conservés : la barre d'état le signale.
  - **Lumières** (KHR_lights_punctual) : les lumières ponctuelles et projecteurs deviennent des [lampes](topic:lights). Les lumières directionnelles sont comptées : le soleil éclaire le modèle.
  - **Caméras :** elles deviennent des [scènes](topic:scenes).
  - **Personnages animés :** ils arrivent debout, dans la pose de repos du fichier ; leurs os et animations, ainsi que les morph targets, sont comptés et pas encore conservés.
  - **Fichiers compressés** (Draco, meshopt) et données quantifiées : ils sont lus. Les décodeurs ne se chargent que pour un fichier qui en a besoin.
  - Les points et lignes sont comptés et laissés de côté (un maillage contient des faces). Les textures KTX2 sont laissées de côté ; les faces gardent leur couleur.
- **Export** (`.glb`) : glTF 2.0 binaire, mètres, Y vers le haut. Un maillage par définition, donc les composants restent partagés. Les maillages gardent leurs normales, coordonnées de texture et couleurs par sommet ; les faces reliées par des [arêtes adoucies](topic:soften) portent des normales lisses. Les couleurs et matériaux deviennent des matériaux (un matériau sous forme de couleur) ; les textures importées sont écrites comme textures. Les lampes allumées deviennent des lumières ponctuelles et projecteurs (les lampes de surface n'ont pas d'équivalent glTF et sont laissées de côté) ; les scènes deviennent des caméras. Les arêtes isolées sont laissées de côté.
- **Limite :** fichiers jusqu'à 300 MB ; environ 130 millions de nombres de géométrie.

## STL (.stl)

Import et export.

- **Import :** binaire ou ASCII. STL n'a pas d'unité : il est lu en **millimètres**, comme le font les imprimantes et l'export de ModelCraft lui-même. Les coins situés au même point sont reliés, donc une pièce fermée arrive comme un [maillage](topic:meshes) fermé. Les couleurs du fichier (conventions VisCAM / SolidView et Materialise) colorent les faces.
- **Export,** pour l'impression 3D : STL binaire, **millimètres**, Z vers le haut. Triangles seulement : les groupes et les arêtes isolées sont laissés de côté. Les faces peintes gardent leur couleur selon la convention VisCAM / SolidView, que les autres programmes ignorent s'ils ne la lisent pas. Exportez des solides fermés pour une impression propre.

## STEP (.step, .stp)

Import seulement. STEP est le format que les modeleurs de pièces et les fournisseurs envoient : fichiers AP203, AP214 et AP242.

- **Import :** ModelCraft lit le fichier lui-même, dans la page, et transforme chaque solide en un [maillage](topic:meshes) fermé de triangles : les faces planes restent planes, les faces courbes (cylindres, cônes, sphères, tores, surfaces B-spline) deviennent de nombreuses petites faces planes, les arêtes à l'intérieur d'une même face courbe sont adoucies et celles situées entre deux faces sont vives. Les fichiers STEP indiquent leur unité ; le modèle arrive à sa vraie taille. Un assemblage arrive avec chaque pièce à l'endroit où le fichier la place, chaque pièce dans son propre maillage, dans un groupe qui porte le nom du fichier. Les couleurs, les noms des pièces dans l'arborescence de l'assemblage et les tolérances (PMI) ne sont pas lus.
- **Messages :** ce qui a été ignoré ou dessiné plus grossièrement est ajouté à la ligne d'état (« Remarques : … ») ; un fichier sans solide, un fichier endommagé ou un fichier au-delà des limites l'indique, et rien n'est ajouté.
- **Limite :** fichiers jusqu'à 300 MB ; 400 000 faces et 8 millions de triangles.

## .3dm

Import seulement. Les fichiers `.3dm` contiennent des modèles NURBS : polysurfaces, surfaces, maillages, courbes et blocs.

- **Import :** ModelCraft lit le fichier lui-même, dans la page. Les maillages arrivent tels quels ; chaque face d'une polysurface ou d'une extrusion provient du maillage de rendu enregistré avec elle dans le fichier, sinon ModelCraft la tesselle (plans, surfaces NURBS, surfaces de révolution, courbes extrudées, extrusions ; découpées par leurs arêtes, les polysurfaces fermées deviennent des maillages fermés). Les courbes deviennent des arêtes, les blocs deviennent des composants (les blocs dans des blocs sont conservés), les calques deviennent des étiquettes (masquées lorsqu'elles sont désactivées), et la couleur de l'objet (la sienne, celle de son calque ou celle de son matériau) colore ses faces. Le fichier indique son unité ; le modèle arrive à sa vraie taille. Pas à pas : [Importer un modèle .3dm](topic:import-3dm-files).
- **Messages :** la ligne d'état indique combien de faces proviennent de maillages enregistrés et combien ont été tesselées, et nomme ce qui a été laissé de côté : points, nuages de points, texte, cotes, hachures, lumières, objets SubD, faces sur des types de surface pas encore lus, blocs liés.
- **Limite :** fichiers jusqu'à 300 MB.

## PLY (.ply)

Import et export, pour les maillages avec couleurs (numérisations, impression 3D en couleur, autres modeleurs).

- **Import :** ASCII et binaire. Les faces deviennent un [maillage](topic:meshes) avec leurs normales, coordonnées de texture et couleurs par sommet conservées ; chaque face est peinte de la couleur la plus proche parmi 4 096 couleurs, pour voir les couleurs immédiatement. PLY n'a ni unité ni convention d'axe : les coordonnées arrivent telles quelles (mètres, Z vers le haut). Un PLY composé seulement de points est un nuage de points : ouvrez-le dans BimCraft ou CivilCraft.
- **Export :** PLY binaire avec positions, normales et couleurs (et coordonnées de texture lorsque le modèle en a), en mètres, Z vers le haut.

## FBX (.fbx)

Import seulement. Fichiers FBX 7 (à partir de 2011), binaires ou ASCII, lus par le lecteur propre à ModelCraft.

- Les maillages arrivent comme des [maillages](topic:meshes) avec leurs normales, coordonnées de texture (chaque jeu UV) et couleurs par sommet ; un maillage utilisé par plusieurs objets reste partagé. Les objets deviennent des groupes avec leurs transformations (pivots, décalages et pré-rotations inclus).
- Matériaux : la texture diffuse (intégrée au fichier, ou une image déposée avec le `.fbx`) arrive comme une texture (les images TGA sont conservées en PNG) ; sinon, la couleur diffuse. Les autres réglages de matériau attendent le nouveau modèle de matériau.
- L'axe vertical et l'unité du fichier sont appliqués : tout arrive avec Z vers le haut, en mètres.
- Les lumières ponctuelles et projecteurs deviennent des [lampes](topic:lights) (une intensité FBX de 100 correspond à la lampe par défaut de ModelCraft, 800 lumens : les intensités FBX n'ont pas d'unité). Les caméras deviennent des [scènes](topic:scenes).
- Les personnages animés arrivent au repos ; leurs os et animations sont comptés et pas encore conservés. Les lumières directionnelles et de surface, ainsi que la géométrie autre que les maillages (NURBS, courbes), sont comptées et laissées de côté.
- Les fichiers FBX 6 et plus anciens sont refusés : enregistrez-les de nouveau en FBX 2011 ou plus récent.

## Alembic (.abc)

Import seulement : caches de géométrie issus de logiciels d'animation et d'effets.

- Les maillages (polygones et maillages de subdivision) arrivent comme des [maillages](topic:meshes), avec leurs coordonnées de texture et normales ; les transformations deviennent des groupes. Alembic est Y vers le haut et est tourné en Z vers le haut ; mètres.
- Un cache à nombreux échantillons (une animation) arrive à son premier échantillon ; la barre d'état indique combien il en contient.
- Les points, courbes, surfaces NURBS, caméras et lumières sont comptés et laissés de côté. Les fichiers au vieux format HDF5 sont refusés : enregistrez-les de nouveau en fichier Alembic Ogawa.

{{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}} vérifie d'abord la forme, puis écrit la sélection, ou tout ce qui est visible. Voir [Préparer un modèle pour l'impression 3D](topic:print-3d).

## 3MF (.3mf)

Export seulement, depuis {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}}. 3MF core : un maillage en **millimètres**, Z vers le haut, avec ses couleurs comme matériaux. La plupart des logiciels de découpe le lisent, et contrairement au STL il indique son unité. Les éléments masqués sont laissés de côté. Voir [Préparer un modèle pour l'impression 3D](topic:print-3d).

## DWG et export DXF (.dwg, .dxf)

Pour les logiciels de CAO. Le modèle est écrit dans sa propre unité : pouces pour les modèles en pieds et pouces, sinon millimètres, centimètres ou mètres (la barre d'état l'indique).

- **Faces** deviennent des faces 3D (triangles). Les lignes à l'intérieur d'une face et les arêtes adoucies sont écrites invisibles, pour que les faces ressemblent à celles de ModelCraft.
- **Arêtes isolées** deviennent des lignes.
- **Groupes et composants** deviennent des blocs : un composant est écrit une fois et placé autant de fois qu'il est utilisé, copies tournées et symétrisées comprises. Un groupe étiré après avoir été tourné (donc incliné) est écrit à sa place à la place.
- **Couleurs :** DWG conserve exactement la couleur de chaque face ; DXF utilise la couleur la plus proche parmi les 255 couleurs standard de CAO.
- **Versions :** DWG est écrit en AutoCAD 2004 (AC1018), que les logiciels de CAO à partir de 2004 ouvrent. DXF est en R12 (AC1009), la version que tous les logiciels de CAO lisent ; R12 n'a pas de champ d'unité, donc indiquez au logiciel de CAO quelle unité utiliser.
- **Non écrits :** guides, cotes, scènes et caméra.

## IFC (.ifc)

Export seulement, pour BimCraft et les autres logiciels BIM. IFC4 avec un projet, un site, un bâtiment et ses niveaux. Chaque groupe ou composant de premier niveau devient un proxy d'élément de bâtiment portant son nom ; les groupes fermés sont écrits comme des formes solides (brep facettés), les groupes ouverts comme des modèles surfaciques ; les trous dans les faces sont conservés. La géométrie libre au premier niveau devient un élément unique appelé « Géométrie libre ». Pas de types, de propriétés ni de matériaux.

**Niveaux :** {{ui:Exporter}} › {{ui:Étages IFC…}} les liste, chacun avec un nom et une altitude ({{ui:Ajouter un étage}}, ou {{ui:Deviner depuis le modèle}}, qui crée un niveau pour chaque hauteur sur laquelle reposent vos groupes de premier niveau). À l'export, chaque groupe ou composant va au niveau situé à son point le plus bas ou en dessous, et garde sa place. Sans niveaux, tout va sur un seul niveau, « Niveau 1 », à 0. Les niveaux sont enregistrés dans le fichier ModelCraft.

## DWG (.dwg) et DXF (.dxf)

Import sous forme de lignes sur le sol (hachures et faces 3D comme faces) ; export comme décrit plus haut. Voir [Modéliser sur un plan de site](topic:site-plan).

- **Lecture :** lignes, polylignes (avec arcs), polylignes 3D, cercles, arcs, et références de blocs y compris les réseaux, depuis l'espace objet. Les objets invisibles (comme les états masqués d'un bloc dynamique) sont laissés de côté. Les courbes deviennent 48 segments droits par tour complet.
- **Lecture depuis la 0.4 :** splines et ellipses (comme arêtes), texte, texte multiligne et valeurs d'attributs (comme arêtes dans une écriture à trait unique), hachures (faces avec trous), faces 3D et remplissages pleins (faces), et cotes (dessinées à partir des blocs de cotes du dessin).
- **Lecture depuis la 0.7 :** solides 3D, régions et corps (leurs données ACIS, en DWG et DXF de toutes versions), chacun comme son propre groupe, les fermés comme solides. Les faces sur des surfaces autres que les plans, cylindres, cônes, sphères, tores et surfaces spline simples sont laissées de côté et listées.
- **Non lus :** points, tableaux, multirepères, images et tout ce qui se trouve dans l'espace papier.
- **Unités :** prises du dessin lorsqu'il les indique. Sinon, ModelCraft demande.
- **DXF** doit être en ASCII. Le DXF binaire est refusé.
- **DWG** des versions AutoCAD R13 à la version actuelle (AutoCAD 2018 et ultérieures ; AC1012 à AC1032) est lu par le lecteur DWG propre à ModelCraft, dans la page ; il fait partie de ModelCraft, donc il fonctionne hors ligne dès que ModelCraft fonctionne. Les versions plus anciennes (R12 et antérieures) et les fichiers très endommagés ne peuvent pas être lus ; enregistrez-les en DXF.
- **Limites :** les coordonnées à plus de 10 000 km de l'origine, ou plus de 2 millions de segments de ligne, sont refusées.

## Fichiers SKP

{{ui:Importer}} (ou déposer le fichier sur la vue) lit les fichiers SketchUp avec le lecteur propre à ModelCraft, dans la page : rien n'est envoyé, et cela fonctionne hors ligne dès que ModelCraft fonctionne. Testé avec des fichiers de SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 et 2026 ; les autres versions devraient aussi s'ouvrir, mais n'ont pas encore été essayées. Le modèle arrive dans un seul groupe portant le nom du fichier. Un {{key:Mod+Z}} le retire de nouveau. Pas à pas : [Importer un modèle SKP](topic:import-sketchup-files).

- **Conservé :** faces avec leurs trous, groupes (en tant que groupes) et composants (en tant que composants, partagés), leurs noms et placements, couleurs, étiquettes sur les groupes et composants, arêtes qui ne font pas partie d'une face, et arêtes adoucies et lisses, pour que les surfaces courbes restent lisses.
- **Couleurs :** le matériau propre d'une face donne sa couleur. Un matériau peint sur un groupe ou un composant devient la peinture de ce placement, de sorte que les faces à l'intérieur qui n'ont pas de couleur propre la prennent, comme dans SketchUp ; un composant peint en deux couleurs reste un seul composant.
- **Étiquettes** sur les groupes et composants : elles deviennent des étiquettes ModelCraft, affichées ou masquées comme elles l'étaient. Les étiquettes sur les faces et arêtes isolées ne sont pas conservées (ModelCraft n'étiquette que les groupes et composants) ; la barre d'état les compte.
- **Éléments masqués :** ils arrivent masqués (faces, arêtes, groupes, composants, ainsi que faces et arêtes sur une étiquette masquée), pour que vous voyiez ce que SketchUp montrait ; {{ui:Tout afficher}} les rend visibles.
- **Textures :** une face peinte avec un matériau texturé conserve sa texture, placée comme dans le fichier, et le fichier ModelCraft conserve l'image. Une texture sur un groupe ou un composant entier, une texture absente du fichier, ou une image que les navigateurs ne peuvent pas afficher (comme un fichier Photoshop) ne conserve que la couleur du matériau.
- **Laissés de côté, et comptés dans la barre d'état :** les images placées dans le modèle. Le texte, les cotes, les guides, les plans de coupe, les scènes et les styles ne sont pas lus.
- **Unités :** les fichiers SketchUp sont en pouces à l'intérieur ; ModelCraft les convertit, de sorte que les dimensions sont justes dans toutes les unités.
- **L'enregistrement en `.skp`** n'est pas encore disponible. Pour ramener un modèle dans SketchUp, exportez en Collada (`.dae`).

## Non pris en charge

ModelCraft ne peut pas ouvrir les fichiers 3DS ni IFC, et ne peut pas enregistrer les fichiers 3DS, FBX, STEP, `.3dm` ou SketchUp (`.skp`).
