---
title: Créer des matériaux avec des nœuds
summary: Construisez un matériau à partir de textures, d'images et de calculs dans l'espace de travail Ombrage, voyez-le dans la vue au fil de vos modifications, et peignez des faces avec.
keywords: ombrage, précalcul, précalcul de texture, occlusion ambiante, ao, courbure, précalcul des normales, haute densité, basse densité, carte de lumière, décalque, décalques, autocollant, logo, étiquette, peinture de texture, peindre la texture, pinceau, matériau, matériaux, materialx, mtlx, openpbr, surface standard, bibliothèque de matériaux, librarycraft, jeu de textures, pbr, importer des textures, zip, cc0, glisser, nœud, nœuds, éditeur de nœuds, shader, texture, procédural, bruit, damier, voronoi, cellules, ondes, briques, carreaux, bois, marbre, dégradé, saleté, usure des arêtes, rampe de couleurs, mélange, relief, carte de normales, rugosité, métallicité, opacité, découpe, émission, lueur, déplacement, projection en boîte, triplanaire, uv, image, texture d'image, openpbr
from: d7368b21
---

Un matériau créé dans l'espace de travail **Ombrage** appartient au fichier. C'est un petit graphe : des **nœuds** qui produisent des textures, des images et des nombres, reliés à la **sortie de matériau**, dont les entrées définissent l'apparence de la surface (couleur de base, rugosité, métallicité, normale, opacité, émission et le reste du modèle OpenPBR). Vous peignez les faces avec lui comme avec n'importe quel matériau de la bibliothèque, et chaque modification apparaît aussitôt dans la vue.

## Ouvrir

Choisissez {{ui:Shading}} dans la liste des espaces de travail. La vue 3D garde le haut de l'écran et l'**éditeur de nœuds** prend le bas. Le panneau de droite liste les matériaux propres au fichier.

- {{ui:New material}} crée un matériau gris, avec seulement sa sortie de matériau.
- **Créer une copie modifiable d'un matériau de la bibliothèque** transforme brique, bois, carrelage et le reste en un graphe que vous pouvez modifier : sa texture passe par un nœud Texture de bibliothèque, ses reliefs par un nœud Relief.
- {{ui:Paint with it}} peint les faces ou groupes sélectionnés, ou choisit le matériau pour l'outil Peindre. Les matériaux de l'outil Peindre listent aussi ceux du fichier sous **Dans ce fichier**.
- {{ui:Duplicate}} et {{ui:Delete}} agissent sur le matériau en cours de modification. La suppression ne peut pas être annulée : les faces peintes avec lui affichent la couleur par défaut jusqu'à ce que vous les repeigniez.

## Matériaux de la bibliothèque

La **Material library (Library)** du panneau liste les matériaux de la bibliothèque, chacun avec un aperçu calculé par le traceur de chemins de CadCraft. Ce sont des jeux de textures publiés sous CC0, crédités à leurs auteurs.

- Cliquez sur l'un d'eux pour l'amener dans le fichier (ses images viennent avec) et, avec des faces ou des groupes sélectionnés, les peindre.
- Glissez-en un sur une face ou un groupe dans la vue pour ne peindre que celui-ci.
- Il devient l'un des matériaux du fichier : modifiez ses nœuds comme les autres. Son crédit apparaît dans le panneau et reste dans le fichier.

## Importer un jeu de textures

{{ui:Pictures or a zip…}} ou {{ui:A folder…}} sous **Importer un jeu de textures** crée un matériau à partir d'un ensemble de cartes. Les cartes sont reconnues par les mots de leur nom de fichier : color, albedo, diffuse ou basecolor ; roughness (ou gloss, converti en rugosité) ; metalness ou metallic ; normal (OpenGL ou DirectX, d'après `gl` / `dx` dans le nom) ; height ou displacement ; ambient occlusion ; opacity ; emission. Les cartes combinées (ARM, ORM) sont ignorées. La tuile démarre à 1 × 1 m : réglez sa taille réelle sur la sortie de matériau. La hauteur va vers le déplacement avec son échelle à 0 : augmentez l'échelle pour l'utiliser sur des maillages.

## MaterialX

MaterialX est le format ouvert que d'autres programmes 3D et de rendu utilisent pour échanger des matériaux.

- {{ui:Export as MaterialX…}} enregistre le matériau en cours de modification : ses valeurs, et chaque texture en image PNG à côté du fichier `.mtlx` (dans un zip). Choisissez le shader dans lequel il est écrit : **OpenPBR Surface** (MaterialX 1.39, le même modèle que ModelCraft utilise) ou **Standard Surface** (MaterialX 1.38, que davantage de programmes lisent aujourd'hui). Les textures sont placées par coordonnées UV en mètres ; les placements en boîte et triplanaire sont écrits en UV.
- {{ui:Import MaterialX…}} (ou {{ui:From a folder…}}) lit les fichiers `.mtlx` avec des shaders OpenPBR, Standard Surface, UsdPreviewSurface ou glTF PBR. Donnez-lui aussi les images, ou un zip de l'ensemble : une image est retrouvée par son chemin, son nom, ou son nom avec un autre type d'image (un `.exr` que mentionne le fichier peut arriver sous forme de `.jpg` à côté de lui). Les textures, cartes de normales, calculs, mélanges et déplacements entrent comme nœuds ; le reste garde sa valeur, et la ligne d'état indique ce qui a été omis.

## Décalques

Un décalque est une image posée sur une surface (un logo, une enseigne, une étiquette, une tache) avec son propre matériau.

- Réglez **Largeur d'un nouveau décalque**, puis {{ui:Place a decal…}} (ou {{ui:Decal}} dans la barre d'outils), choisissez une image PNG, JPEG ou WebP et cliquez sur une face. L'image est projetée sur les surfaces à cet endroit, en conservant ses proportions ; les parties transparentes d'un PNG restent transparentes.
- Il appartient au groupe ou au composant sur lequel vous avez cliqué et se déplace avec lui. Il couvre les faces situées dans sa boîte qui sont orientées de la même façon, et s'arrête aux arêtes de ce qu'il recouvre.
- Chaque décalque a son propre matériau, nommé **Décalque : <image>**, dans la liste du fichier : modifiez-le comme les autres (rugosité, relief, lueur). {{ui:Material}} à côté du décalque l'ouvre.
- À côté de chaque décalque : sa largeur (la hauteur suit l'image), {{ui:Turn}} (un quart de tour) et {{ui:Delete}}. Les décalques sont conservés avec les matériaux du fichier, hors annulation.
- Ils apparaissent dans la vue ombrée, dans les rendus rapides et dans les images haute qualité.

## Peindre sur la texture

{{ui:Paint texture}} (ou {{ui:Paint}} sous **Peindre sur la texture**) transforme le pointeur en pinceau rond. Glissez sur une face qui porte l'un des matériaux de ce fichier : le pinceau peint l'image située derrière sa couleur de base.

- Sur un maillage, il peint suivant les UV du maillage (dépliez-le d'abord dans l'espace de travail UV) ; sur les autres faces, il peint à travers la face, de sorte que la peinture se répète avec la tuile du matériau.
- Un matériau dont la couleur de base est une couleur unie reçoit une nouvelle image de 512 × 512 pixels de cette couleur la première fois que vous le peignez. Un matériau dont la couleur de base provient d'autres nœuds a besoin d'un nœud Image relié à Couleur de base.
- Réglez la couleur, la taille (en pixels de l'image), l'intensité et la dureté du pinceau dans le panneau. {{ui:Undo stroke}} ou Ctrl+Z (pendant la peinture) annule un trait, jusqu'aux 20 derniers.
- L'image peinte est enregistrée dans le fichier. Les matériaux de la bibliothèque ne peuvent pas être peints : créez d'abord une copie modifiable.

## Précalculer les textures

**Précalculer les textures** écrit dans des images ce que la forme et la scène donnent à une surface, le long des UV d'un maillage.

- Sélectionnez un maillage qui a des UV (dépliez-le dans l'espace de travail UV), cochez les cartes et appuyez sur {{ui:Bake}} :
  - **Occlusion ambiante** : le degré d'ouverture de chaque point. Les coins, les plis et les zones sous d'autres éléments s'assombrissent. Tout ce qui est affiché dans le modèle l'ombre, jusqu'à la distance d'occlusion.
  - **Courbure** : clair le long des arêtes extérieures, sombre dans les angles intérieurs, gris moyen sur les parties planes ou légèrement courbes, sur la largeur d'arête que vous réglez.
  - **Normales de l'objet haute densité** : sélectionnez aussi une copie détaillée. Son détail de surface est écrit comme carte de normales pour la version plus simple (l'objet avec moins de triangles reçoit le précalcul). La distance de recherche est l'écart maximal entre les deux surfaces.
  - **Éclairage** : le soleil du lieu et de la date du modèle (Style) avec ses ombres, plus le ciel, sous forme de carte de lumière.
- Les images rejoignent le fichier et apparaissent dans les nœuds Image. Si le matériau en cours de modification possède un nœud **Saleté et usure des arêtes**, il lit immédiatement la nouvelle occlusion et la courbure.
- Plus de rayons par texel donnent une occlusion et un éclairage plus doux, mais prennent plus de temps. Le précalcul s'exécute sur les cœurs du processeur, en arrière-plan ; {{ui:Stop baking}} l'arrête.

## Construire un graphe

1. {{ui:Add a node…}} (ou {{key:Shift+A}} dans l'éditeur de nœuds) ajoute un nœud au milieu de l'éditeur.
2. Glissez depuis un point de sortie (à droite d'un nœud) vers un point d'entrée (à gauche d'un nœud) pour les relier. Un second lien vers une entrée remplace le premier ; glissez une entrée reliée pour la détacher.
3. Les entrées non reliées affichent leur valeur : saisissez un nombre ou choisissez une couleur. Les réglages se trouvent en bas de chaque nœud.

Glissez un nœud par son titre pour le déplacer, glissez dans le vide pour faire un panoramique, et utilisez la molette pour zoomer. {{key:Delete}} supprime les nœuds ou le lien sélectionnés, {{key:Mod+Z}} annule, {{key:Mod+D}} duplique, {{key:F}} affiche tous les nœuds. Chaque modification est une seule étape d'annulation de l'éditeur de nœuds. L'annulation du modèle ne modifie pas les matériaux.

| Nœuds | Ce qu'ils produisent |
|---|---|
| Coordonnées de texture | Où se trouve un point sur la tuile : le répéter, le décaler, le tourner d'un quart. |
| Valeur, Couleur | Un nombre, une couleur. |
| Image | Une image du fichier (une qui vient d'un modèle importé, ou une que vous avez ajoutée avec {{ui:Add a picture…}}). Choisissez **Couleurs** pour une photo et **Données** pour une carte de rugosité ou de normales. |
| Texture de bibliothèque | La texture, la rugosité et la hauteur d'un matériau de la bibliothèque. |
| Damier, Bruit | Carrés ; bruit fractal lisse avec son détail, sa rugosité et sa graine. |
| Cellules de Voronoï, Ondes, Dégradé | Cellules (distance au point le plus proche, bords entre cellules, une couleur par cellule) ; bandes transversales, verticales ou diagonales, sinusoïdales, en dents de scie ou triangulaires, déformées par le bruit ; dégradés linéaires, quadratiques, radiaux et sphériques. |
| Briques, Carreaux | Rangées de briques avec un décalage alterné, ou grille de carreaux : couleurs, mortier ou joint, un écart et un chanfrein en mètres, une hauteur pour les reliefs, un nombre aléatoire par pièce. |
| Bois, Marbre | Anneaux suivant le fil avec de fines fibres ; veines déformées par la turbulence. |
| Saleté et usure des arêtes | Use les arêtes convexes et salit les creux, d'après les images de courbure et d'occlusion d'un maillage ([Précalculer les textures](topic:shading#bake-textures) les produit, ou réglez ses deux réglages d'image, dans la disposition UV du maillage : placez le matériau par coordonnées UV). Sans elles, il ne change rien. |
| Mélanger les couleurs, Rampe de couleurs, Teinte/saturation/valeur, Luminosité et contraste, Inverser, Gamma, Séparer et Combiner RGB | Travail sur les couleurs. |
| Calcul, Plage de valeurs | Calcul sur des nombres (addition, multiplication, puissance, pas lisse, et plus). |
| Relief, Carte de normales | Une normale à partir d'une hauteur (Relief) ou d'une image de carte de normales (Carte de normales : choisissez la direction du canal vert). |

## La sortie de matériau

Ses réglages indiquent comment la texture se pose sur les surfaces :

- **Largeur de tuile** et **Hauteur de tuile** : le nombre de mètres couverts par une tuile de la texture. Tout ce que produit un graphe se répète sur la tuile sans couture.
- **Placement** : **Coordonnées UV** suit les faces (faces créées par pousser/tirer : le long de chaque face ; maillages : leurs UV, une unité UV = une tuile), **Boîte** projette depuis le plus proche des trois axes, **Triplanaire** mélange les trois projections sur les surfaces inclinées (**Netteté du mélange** : plus elle est élevée, plus le mélange est net).
- **Intensité de la normale** règle l'entrée de normale. **Échelle du déplacement** définit de combien l'entrée de déplacement déplace les sommets d'un maillage.
- {{ui:More inputs}} affiche les autres entrées OpenPBR : vernis, duvet, sous-surface, film mince, transmission, et leurs couleurs.

## Dans les images haute qualité

Le traceur de chemins lit la couleur de base, la rugosité, la métallicité, l'opacité, la normale et l'émission du graphe au fur et à mesure qu'elles varient sur la surface. Toute autre entrée reliée (un vernis qui varie, par exemple) est utilisée à sa moyenne ; le panneau indique laquelle. Une découpe issue d'une texture d'opacité montre sa forme, et son ombre est uniformément translucide. Une texture lumineuse éclaire ce qui lui fait face, sans être échantillonnée comme une lampe.

**Le déplacement** ne déplace que les sommets des maillages : ajoutez donc un modificateur de subdivision pour le détail ([Modificateurs](topic:modifiers)). Les faces créées par pousser/tirer conservent leur forme et reçoivent les reliefs par la normale.

:::tip
Sur un ordinateur doté de WebGPU, le graphe est calculé sur la carte graphique ; sans lui, sur le processeur. Le résultat est le même.
:::
