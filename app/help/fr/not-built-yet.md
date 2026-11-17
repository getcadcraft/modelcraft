---
title: Pas encore disponible
summary: Ce que cette version de ModelCraft ne fait pas encore, et ce qu'il faut faire à la place aujourd'hui.
keywords: manquant, pas encore, limitations, feuille de route, matériaux, textures, texte, calques, ajuster, diviser, cloud, bureau
from: 179fa5e4
---

ModelCraft est une version préliminaire. Cette page liste ce qu'il ne fait pas encore, pour que vous ne le cherchiez pas, ainsi que le moyen le plus proche de réaliser la tâche aujourd'hui.

## Outils de dessin

| Pas encore | À la place, aujourd'hui |
|---|---|
| Dessin à main levée | Cliquez les points avec {{ui:Courbe}} |
| Modifier le nombre de segments d'un arc ou d'un cercle après l'avoir dessiné | Effacez-le et redessinez-le après avoir saisi `24s` |
| Choisir une police pour le [texte 3D](topic:text3d), ou modifier son contenu après l'avoir placé | Supprimez-le et ajoutez à nouveau le texte |
| Modifier un angle en saisissant une valeur dans une cote angulaire, ou modifier la taille d'un cylindre à partir de la cote de son cercle | Faites pivoter les arêtes avec {{ui:Rotation}} ; mettez le cylindre à l'échelle avec {{ui:Échelle}} |
| Cotes dans les fichiers de modèle exportés | Les cotes apparaissent dans les images, impressions et PDF de la vue ; les fichiers de modèle ne contiennent que la géométrie |
| Ajuster, Diviser et Coque extérieure | Groupes [Union, Soustraire et Intersecter](topic:solids) fermés, ou [intersecter les faces](topic:intersect) puis effacer ce dont vous n'avez pas besoin |
| Choisir l'axe de rotation avec les touches fléchées | Cliquez sur le centre de {{ui:Rotation}} sur une face orientée dans le sens que doit prendre l'axe |
| Verrouillages sur plusieurs inférences à la fois | Verrouillez une direction avec une touche fléchée, puis accrochez-vous à un point |
| Redimensionner selon une pente, ou à partir d'une extrémité de cote qui n'est pas sur un angle | Placez la cote sur deux angles, le long d'une arête, ou le long de l'axe rouge, vert ou bleu |

## Animation

| Pas encore | À la place, aujourd'hui |
|---|---|
| Animer les faces, les arêtes, l'heure du jour du soleil, le style ou ce qui est masqué | Faites de la pièce mobile un groupe ou un composant ; calculez une vidéo séparée pour une autre heure du jour |
| Une caméra qui suit un tracé dessiné, ou qui regarde un objet en mouvement | Ajoutez davantage de clés de caméra en chemin ([Animer](topic:animation)) |
| Son dans les vidéos, et vidéos de haute qualité (tracé de chemins) sans WebGPU | Ajoutez le son dans un éditeur vidéo ; sans WebGPU, calculez la vidéo avec le moteur rapide ([Calculer la vidéo](topic:animation#render-the-video)) |
| Lampes animées (luminosité, diffusion, couleur) dans une vidéo calculée, angle d'objectif animé sans clés de caméra dans une vidéo, animation des matériaux ou des réglages de rendu | Les lampes s'animent dans la vue ; pour une vidéo, animez aussi la caméra pour un zoom ; calculez des vidéos séparées pour différents réglages de lampes ([Animer toute propriété](topic:animate)) |
| Mise en miroir des poids ou des os d'un côté à l'autre, enveloppes d'os visibles, affichage des poids en teinte point par point (ils s'affichent par face), voir le maillage posé pendant la peinture des poids | Peignez les deux côtés, ou faites une moitié et utilisez un modificateur Miroir avant l'ajout de l'armature ; basculez entre Peindre les poids et Pose pour vérifier |
| Os lus depuis des fichiers glTF, FBX ou USD comme armature, et armatures écrites dans ces fichiers | Les modèles squelettés arrivent au repos avec les poids du fichier ; ajoutez les os dans l'ordre d'articulation du fichier, puis {{ui:Utiliser les poids du fichier}} ([Animer](topic:animate)) |
| Déplacer une cible CI ou un pôle en la faisant glisser dans la vue, choisir l'espace propre d'une contrainte (local ou monde), étirer des chaînes CI, CI le long d'une courbe | Saisissez le point de la cible, ou visez un objet et déplacez-le ; gardez les chaînes à leurs longueurs |
| Tissus, fluides, corps souples, articulations et charnières entre corps rigides, collision avec la forme exacte d'un objet (seules les boîtes et les sphères l'entourent), simulation en direct pendant la lecture, vitesse ou rotation initiale (les corps démarrent au repos) | Figez les corps rigides et lisez les clés ; construisez une charnière avec des clés ; découpez une forme irrégulière en boîtes (groupes) |
| Exporter l'animation vers glTF ou d'autres fichiers de modèle | Calculez une vidéo ; le fichier `.modelcraft`, et un [fichier USD](topic:usd) enregistré par ModelCraft, restent réservés à ModelCraft |
| Saisir un commentaire ou un titre sur un problème en VR, notes vocales, déplacer un plan de coupe à la main en VR | Placez le problème en VR, puis ajoutez son texte dans un logiciel BCF ; réglez un plan de coupe dans la vue avant d'entrer : voir [Examiner le modèle avec un casque VR](topic:vr-review) |
| Voir des personnes au bureau en VR (seules les personnes en VR apparaissent), enregistrer une promenade en VR | Demandez-leur de rejoindre en VR, ou faites une [animation](topic:animation) de la promenade |

## Maillages

| Pas encore | À la place, aujourd'hui |
|---|---|
| Sculpter par niveaux (multirésolution), et Détail qui supprime les triangles devenus minuscules | [Sculptez](topic:sculpt) un maillage subdivisé ; {{ui:Remailler}} pour le ré-uniformiser |
| Un remaillage en faces à quatre côtés qui suivent la forme | {{ui:Remailler}} (triangles réguliers), puis reconstruisez-le avec la [retopologie](topic:mesh-edit#retopology) |
| Poids peints sur les sommets pour les modificateurs (Déplacement, Lissage et Enveloppe travaillent sur tout le maillage) | Appliquez le modificateur, puis sculptez ou modifiez les parties concernées |
| Copier et coller des sommets, arêtes ou faces, une coupe au couteau qui se termine à l'intérieur d'une face, des arêtes filaires sans face | Dupliquez le maillage dans l'onglet Objet ; coupez au couteau de bord à bord ; [extrudez](topic:mesh-edit#change-the-shape) les arêtes ouvertes en faces |

## Organisation et affichage

| Pas encore | À la place, aujourd'hui |
|---|---|
| Calques des plans de site DWG et DXF comme étiquettes | Le plan de site arrive en un seul groupe : décomposez-le et groupez les parties que vous voulez étiqueter |
| Plusieurs coupes à la fois, une boîte de coupe, ou le contour d'une coupe exporté comme dessin | Une [coupe par plan](topic:sections) à la fois ; exportez la vue en image |
| Afficher les arêtes douces en tirets, ou adoucir pendant le glissement d'un curseur | [Adoucir par angle](topic:soften) dans les Infos sur l'entité, puis annulez pour essayer un autre angle |
| Une bibliothèque en ligne de modèles à rechercher, ou des composants avec des options à choisir (couleur, style) | La [bibliothèque de départ](topic:starter) ; importez des modèles Collada, OBJ ou glTF ; [étirez](topic:stretch) une copie à la taille voulue |
| Placer des plantes depuis la bibliothèque de plantes | [Répartir](topic:live-view#scatter-plants-rocks-and-people) des plantes dans la vue en direct, ou placez un arbre de la bibliothèque de départ |
| Copies indépendantes d'un groupe | Faites-en un composant, puis {{ui:Rendre unique}} (voir [Dépannage](topic:troubleshooting#editing-one-group-changed-another)) |

## Rendu

| Pas encore | À la place, aujourd'hui |
|---|---|
| Rendu dans la vue (l'espace de travail {{ui:Rendu}}), la file de rendu, et les options de caméra, d'image de ciel, de brouillard et de mélange de lumières sans WebGPU | {{ui:Calculer un rendu…}} en haute qualité utilise alors le traceur de chemins WebGL, sans ces options ([Calculer une image](topic:render#high-quality)) |
| Un autre programme dessinant l'image de rendu sans module de moteur de rendu (CadCraft n'exécute jamais de programme sous licence GNU GPL) ; caméras panoramiques ou stéréo, et image de ciel par un autre programme ; le module Unreal Engine (les fichiers sont écrits, mais le module qui les ouvre n'est pas publié) | Nos propres moteurs Rapide et Traceur de chemins ; le moteur d'un module complémentaire ([dessiner l'image avec un autre programme](topic:render-other-program)) ; un dossier de fichier USD, glTF ou Unreal depuis la liste des moteurs, à emporter dans n'importe quel programme |
| Plantes et rochers répartis dans {{ui:Calculer un rendu…}} | Ils s'affichent dans la [vue en direct](topic:live-view), ses panoramas, la visionneuse et la vidéo |

## Matériaux et couleurs

| Pas encore | À la place, aujourd'hui |
|---|---|
| Entrées autres que la couleur de base, la rugosité, la métallicité, l'opacité, la normale et l'émission qui varient sur une surface dans les images de haute qualité (elles utilisent leur moyenne) | [Créez des matériaux avec des nœuds](topic:shading) : reliez-les quand même, la vue les montre variables |
| Déplacement sur les faces poussées/tirées | Convertissez l'objet en maillage pour le déplacement |
| Partager vos propres matériaux vers la Bibliothèque depuis l'application, et cartes empaquetées (ARM/ORM) ou EXR dans un jeu de textures importé | Conservez-les dans le fichier ; importez les cartes séparées en PNG ou JPEG |
| Matériaux du fichier dans les sessions Live TeamWork (ils restent sur l'ordinateur qui les a créés) | Enregistrez le fichier et partagez-le |
| Décalques qui se courbent sur les surfaces incurvées, décalques dans Annuler, ou peinture des textures de plusieurs faces à la fois à travers une couture | Placez de plus petits décalques sur chaque pièce ; peignez chaque côté d'une couture séparément |
| Figer sur les faces poussées/tirées, figer plusieurs objets dans une image, une cage façonnée à la main, ou éclairage figé issu de lampes | Convertissez en maillage et dépliez-le ; figez chaque objet ; augmentez la distance de recherche ; calculez une image pour la lumière des lampes |
| Peindre la rugosité, la métallicité ou la hauteur, peindre avec des images (tampons), et peindre des textures plus grandes que 512 × 512 | Peignez la couleur de base ici ; créez les autres cartes dans un éditeur d'images et importez-les comme jeu de textures |
| Textures dans les exports Collada, STL, PLY, 3MF, IFC, DWG et DXF, et graphes de nœuds des matériaux propres au fichier dans les modèles exportés | Ces formats reçoivent la couleur de chaque matériau ; glTF et OBJ conservent les textures importées ; exportez un matériau seul en [MaterialX](topic:shading#materialx) ; [USD](topic:usd) conserve tout le modèle pour ModelCraft |
| Textures dans les fichiers Collada | Elles sont comptées et laissées de côté à l'import ; les textures des fichiers `.skp` et `.glb` sont importées |

## Fichiers

| Pas encore | À la place, aujourd'hui |
|---|---|
| Enregistrer des fichiers SketchUp, avec leur texte et leurs cotes | [Importez](topic:import-sketchup-files) conserve les faces, couleurs et textures ; exportez en Collada (`.dae`) pour revenir dans SketchUp |
| Cotes et guides dans les exports DWG et DXF | Ajoutez-les dans le logiciel de CAO après l'export |
| Points, tableaux et lignes de repère multiples depuis DWG et DXF | Ils sont comptés et laissés de côté ; le texte arrive en écriture monotrait, et non avec la police du dessin |
| Surfaces, maillages, tableaux et lignes de repère multiples depuis DWG et DXF ; faces de solides 3D sur des surfaces balayées, lissées ou autres surfaces libres | Ils sont aussi comptés et laissés de côté (les solides 3D eux-mêmes sont importés). Exportez ces parties depuis le logiciel de CAO en OBJ ou Collada, puis importez-les |
| Types, propriétés ou matériaux IFC | L'export IFC contient les [niveaux](topic:formats#ifc-ifc) et des éléments génériques ; ajoutez le reste dans un logiciel BIM |
| Envoyer un modèle directement à BimCraft | Exportez {{ui:IFC pour BimCraft (.ifc)}} et ouvrez-le dans BimCraft |
| Arêtes libres dans glTF et STL | Utilisez OBJ ou Collada pour les tracés linéaires |
| Matériaux glTF et FBX au-delà de la couleur de base (métal, rugosité, cartes de normales, verre, vernis, velours…) | Ils sont lus et listés ; ModelCraft conserve la couleur de base ou la texture. Recréez l'aspect dans l'[espace Ombrage](topic:shading) |
| Os glTF, animations et cibles de morphing | Les modèles squelettés arrivent debout, au repos ; animez dans la [chronologie](topic:animation) |
| Couleurs et noms de pièces de l'assemblage depuis les fichiers STEP | Les pièces arrivent en maillages à leur vraie taille ; [peignez](topic:paint) et nommez-les après l'import |
| Objets SubD, texte, cotes et lumières des fichiers `.3dm` | Voir [ce qui est laissé de côté](topic:import-3dm-files#what-is-left-out-and-said) ; convertissez les SubD en maillages dans le programme qui a créé le fichier |
| Textures KTX2 et variantes de matériaux dans glTF | Exportez avec des textures PNG ou JPEG ; la variante par défaut est utilisée |
| Écriture de l'instanciation glTF (EXT_mesh_gpu_instancing) | Les composants sont écrits une fois et placés plusieurs fois, ce que tout visualiseur lit |
| Animation Alembic (chaque échantillon d'un cache), points et courbes Alembic, écriture Alembic | Le premier échantillon est importé ; animez dans la [chronologie](topic:animation) ; écrivez en glTF, USD ou OBJ |
| Cartes de relief et de normales dans les matériaux OBJ | Seule l'image de couleur (`map_Kd`) est importée |
| Os et animation FBX, export FBX, fichiers FBX 6 | Les modèles squelettés arrivent au repos ; exportez en glTF ; enregistrez les anciens fichiers en FBX 2011 ou plus récent |
| Peaux, morphings, caméras, lumières, transformations look-at et skew Collada, références externes | Laissés de côté à l'import et comptés dans le message |
| Fichiers de sauvegarde | {{ui:Enregistrer en}} ({{key:Mod+Shift+S}}) enregistre une autre copie. Après un plantage, ModelCraft vous propose votre travail non enregistré (« Récupérer votre travail ? ») |
| Enregistrement et synchronisation cloud entre ordinateurs | Pas encore disponible. Enregistrez les fichiers sur votre ordinateur et copiez-les où vous en avez besoin |

## Impression 3D

| Pas encore | À la place, aujourd'hui |
|---|---|
| Supports réels du logiciel de tranchage (interfaces, radeau, motif exact des supports) | L'[aperçu des supports](topic:print-tools#supports-preview) indique où et combien environ ; l'aperçu de votre logiciel de tranchage montre les vrais |
| Démêler une pièce qui se traverse elle-même, ou des arêtes où trois faces ou plus se rejoignent | [Réparation](topic:print-tools#repair) les liste avec leur emplacement ; utilisez [Intersecter les faces](topic:intersect) et effacez ce qui est à l'intérieur |
| Motifs de remplissage et treillis à l'intérieur d'un creux | [Évidement](topic:print-tools#hollow) la laisse vide ; votre logiciel de tranchage ajoute le remplissage à une pièce pleine |
| Détails trop petits pour votre buse (autres que les parois) | [Épaisseur des parois](topic:print-tools#wall-thickness) trouve les parois fines ; l'aperçu des couches de votre logiciel montre le reste |

## Performances

L'annulation conserve une copie du modèle pour chaque étape (un [maillage](topic:meshes) ne garde que ce qui a changé), donc de très gros imports de géométrie poussée/tirée ralentissent chaque modification. Gardez les imports légers, et enregistrez puis rouvrez le fichier pour vider l'historique.

## Applications et plateformes

- **Bureau :** ModelCraft fonctionne dans le navigateur sur Mac, Windows et Linux, et dans CadCraft Studio, l'application de bureau qui regroupe les huit applications en une seule installation. Sur Android, CadCraft Studio s'installe à partir de son APK sur getcadcraft.com/download. Il n'existe pas encore de version iPad ou iPhone.
- **Tactile :** voir [Orbite, panoramique et zoom](topic:orbit-pan-zoom) pour les gestes du doigt. La pression d'un stylet règle le pinceau dans [Sculpter](topic:sculpt) ; ailleurs, la pression et l'inclinaison du stylet ne sont pas utilisées.
- **Feuilles :** ModelCraft [imprime une vue par page](topic:export-model#print-the-view-or-save-it-as-a-pdf) ; il n'existe pas de présentations avec plusieurs vues ni de cartouche. Exportez en DWG/DXF compatibles avec CadCraft pour des dessins à l'échelle.
