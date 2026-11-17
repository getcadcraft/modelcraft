---
title: Ouvrir, enregistrer, importer et exporter
summary: Le fichier ModelCraft, ce que vous pouvez importer et envoyer, où vont les fichiers, et ce qui change hors ligne et d'un navigateur à l'autre.
keywords: ouvrir, enregistrer, importer, exporter, fichier, 3dm, skp, récupérer, enregistrement automatique, récents, bureau, ouvrir en 3D, transfert, télécharger, fichier modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formats, hors ligne, enregistrer en
from: 3f09ab72
---

ModelCraft lit et écrit des fichiers sur votre ordinateur. Rien n'est téléversé : un fichier que vous ouvrez est lu dans votre navigateur, et un fichier que vous enregistrez est un téléchargement. Voir [Où vont vos fichiers](common:your-files).

## Formats en un coup d'œil

| Format | Ouvrir | Importer | Exporter | À quoi il sert |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | oui | non | {{ui:Enregistrer}} | Votre fichier de travail. Conserve tout. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | oui | oui | {{ui:Enregistrer en}}, {{ui:Exporter}} | Programmes de rendu et d'assemblage de scènes. Le format USD propre à ModelCraft conserve tout. Voir [Enregistrer, ouvrir et exporter en USD](topic:usd). |
| SketchUp (`.skp`) | non | oui | non | Importer des modèles depuis SketchUp. Conserve les groupes, les composants, les couleurs, les textures sur les faces, les étiquettes et les arêtes adoucies. Voir [Importer un modèle SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | non | oui | oui | Échanger des modèles avec d'autres modeleurs 3D. Conserve les groupes, les composants et les couleurs. |
| OBJ (`.obj`) | non | oui | oui | Programmes de rendu et de visualisation. |
| glTF (`.glb`, `.gltf`) | non | oui | `.glb` seulement | Visionneuses web, moteurs de jeu, réalité augmentée (RA). |
| STL (`.stl`) | non | oui | oui | Impression 3D (en millimètres). |
| PLY (`.ply`) | non | oui | oui | Maillages avec couleurs : numérisations, impression couleur. |
| FBX (`.fbx`) | non | oui | non | Modèles issus de programmes d'animation et de jeu (FBX 2011 et versions ultérieures). |
| Alembic (`.abc`) | non | oui | non | Caches de géométrie, à leur première image. |
| STEP (`.step`, `.stp`) | non | oui | non | Pièces issues de modeleurs de pièces et de fournisseurs, sous forme de maillages fermés à leur taille réelle. Voir [Formats de fichiers](topic:formats). |
| `.3dm` | non | oui | non | Modèles NURBS : polysurfaces, maillages, courbes, blocs et calques, sous forme de maillages, d'arêtes, de composants et d'étiquettes. Voir [Importer un modèle .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | non | non | oui | Impression 3D, avec couleurs (en millimètres). Depuis {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}} : voir [Préparer un modèle pour l'impression 3D](topic:print-3d). |
| IFC (`.ifc`) | non | non | oui | Programmes BIM, et BimCraft. |
| DWG (`.dwg`) | non | oui | oui | Un plan de site ou un plan d'étage sur lequel modéliser ; envoi du modèle vers un programme de CAO. |
| DXF (`.dxf`) | non | oui | oui | Idem, pour tout programme de CAO. |

[Formats de fichiers en détail](topic:formats) liste exactement ce que chaque format conserve et ce qu'il laisse de côté.

## Le fichier ModelCraft

Un fichier `.modelcraft` conserve tout le modèle : géométrie, groupes, composants, guides, scènes, unités, ainsi que la caméra et le style utilisés au moment de l'enregistrement. Il ne conserve pas l'historique d'annulation.

### Ouvrir un modèle

1. Cliquez sur {{ui:Ouvrir}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+O}}.
2. Si le modèle affiché contient des modifications non enregistrées, ModelCraft demande : « Ce modèle contient des modifications non enregistrées. Enregistrer d'abord une copie ? » Choisissez {{ui:Enregistrer une copie}}, {{ui:Abandonner les modifications}} ou {{ui:Annuler}}.
3. Choisissez le fichier `.modelcraft`.

Le modèle s'ouvre dans les unités où il a été enregistré, avec la caméra utilisée à l'enregistrement. Vous pouvez aussi déposer un fichier `.modelcraft` sur la vue 3D, ou cliquer sur l'un d'eux dans la liste des fichiers récents de la carte de démarrage (navigateurs capables de rouvrir un fichier, et application de bureau).

:::desktop
Dans l'application de bureau, un double-clic sur un fichier `.modelcraft` l'ouvre dans ModelCraft, et **Ouvrir avec** sur un fichier Collada, OBJ, glTF, DWG ou DXF fait de même (il est importé dans un nouveau modèle).
:::

### Enregistrer un modèle

Cliquez sur {{ui:Enregistrer}} ou appuyez sur {{key:Mod+S}}. Le navigateur télécharge `<name>.modelcraft`, où le nom est celui du fichier ouvert, ou « Untitled » pour un nouveau modèle.

:::desktop
Dans l'application de bureau, {{ui:Enregistrer}} écrit le fichier ouvert à son emplacement. Un nouveau modèle demande où l'enregistrer.
:::

- {{ui:Enregistrer en}} ({{key:Mod+Shift+S}}) enregistre une copie au format `.modelcraft` ou en [USD](topic:usd) ; là où le navigateur le permet, il demande le nom et l'emplacement. Sinon, renommez le fichier téléchargé : le prochain enregistrement, après avoir ouvert le fichier renommé, utilise le nouveau nom.
- Chaque enregistrement est un nouveau téléchargement. Selon les paramètres du navigateur, il part directement dans votre dossier de téléchargements ou demande où l'enregistrer. Si un fichier portant ce nom existe déjà, la plupart des navigateurs ajoutent un numéro, comme `Untitled (1).modelcraft`.

:::chromium
Pour choisir le dossier à chaque fois, ouvrez les paramètres du navigateur, recherchez « téléchargements » et activez « Demander où enregistrer chaque fichier avant de le télécharger ».
:::

:::firefox
Pour choisir le dossier à chaque fois, ouvrez **Paramètres**, puis **Général**, et sous « Téléchargements », choisissez « Toujours demander où enregistrer les fichiers ».
:::

:::safari
Pour changer l'emplacement des téléchargements, ouvrez **Safari**, puis **Réglages**, puis **Général**, et définissez « Emplacement des fichiers téléchargés ».
:::

### Commencer un nouveau modèle

Cliquez sur {{ui:Nouveau}}. S'il existe des modifications non enregistrées, ModelCraft demande d'abord. Un nouveau modèle démarre vide, dans l'unité de votre langue (pieds et pouces aux États-Unis, millimètres ailleurs), sans scène.

### Si le navigateur se ferme avant l'enregistrement

ModelCraft conserve une copie du travail non enregistré dans votre navigateur, quelques secondes après chaque modification. La copie est écrite en arrière-plan, si bien qu'un gros modèle ne vous ralentit pas pendant cette opération. Si l'onglet ou le navigateur se ferme avant l'enregistrement, la prochaine fois que vous ouvrez ModelCraft, il demande « Récupérer votre travail ? ». La récupération rouvre le modèle tel qu'il était, sans l'avoir encore enregistré dans un fichier : enregistrez-le pour le conserver. Voir [Récupérer votre travail](common:recover).

### Depuis CadCraft : ouvrir dans ModelCraft

Dans l'application de dessin CadCraft, **Affichage**, puis **Plus**, puis **Ouvrir dans ModelCraft** transmet le dessin ouvert à ModelCraft, dans un nouvel onglet, au format DWG. Il arrive comme un DWG importé : des lignes sur le sol, dans un groupe, prêtes pour la modélisation. Rien n'est téléversé ; le fichier transite par le stockage propre à votre navigateur.

## Importer

Importer ajoute un fichier au modèle ouvert ; il ne remplace pas celui-ci.

1. Cliquez sur {{ui:Importer}} dans le groupe {{ui:Fichier}}, ou déposez le fichier sur la vue 3D.
2. Choisissez un fichier SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ou DXF.

   Le fichier arrive sous la forme d'**un seul groupe**, sélectionné, et la vue fait un zoom pour le montrer. La barre d'état indique ce qui est entré et liste ce qui n'a pas pu être importé, par exemple « Non importé : 2 textures ».

3. Pour travailler directement sur sa géométrie, double-cliquez sur le groupe pour le modifier, ou cliquez sur {{ui:Décomposer}}.

Quelques points à connaître :

- **Taille et sens vertical :** les fichiers Collada indiquent leur unité et leur axe vertical, et ModelCraft les convertit. Le glTF est toujours en mètres. Les fichiers OBJ ne portent aucune unité : ModelCraft les lit en mètres, avec Y vers le haut. Si un OBJ arrive 1000 fois trop grand ou trop petit, utilisez [Échelle](topic:rotate-scale) avec un facteur tel que `0.001` ou `1000`.
- **DWG et DXF** arrivent sous forme de lignes (arêtes) sur le sol, et non de faces. Si le dessin n'indique pas son unité, une boîte de dialogue intitulée « Unités du dessin » demande ce que vaut une unité de dessin. Voir [Modéliser sur un plan de site](topic:site-plan).
- **Limites :** les fichiers de plus de 300 MB sont refusés à l'importation, et ceux de plus de 200 MB à l'ouverture. Les fichiers comptant plus de 2 millions de sommets ou de faces sont refusés car trop volumineux. Un OBJ de plus de 64 MB est refusé avant d'être lu. Les fichiers texte (Collada, OBJ, STL ASCII, USD texte) sont lus par morceaux d'environ 4 MB, si bien qu'aucun bloc de texte ne contient un fichier entier ; un OBJ de 16 MB a utilisé environ 0.5 GB de mémoire à son ouverture lors de nos tests.

## Exporter

1. Cliquez sur {{ui:Exporter}} dans le groupe {{ui:Fichier}}.
2. Choisissez un format : {{ui:glTF binaire (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL pour l'impression (.stl, millimètres)}}, {{ui:PLY avec couleurs (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC pour BimCraft (.ifc)}}, {{ui:DWG pour la CAO (.dwg, 2004)}} ou {{ui:DXF pour la CAO (.dxf, R12)}}.

Le navigateur télécharge le fichier, nommé comme le modèle. Tout le modèle est exporté, et pas seulement la sélection. Les fichiers glTF, Collada et OBJ sont écrits en arrière-plan : ModelCraft continue donc de fonctionner pendant l'export d'un gros modèle ; le téléchargement démarre lorsque le fichier est prêt. Un modèle vide n'est pas exporté : « Le modèle est vide : dessinez d'abord quelque chose. » Voir [Exporter un modèle vers d'autres programmes](topic:export-model).

## En ligne et hors ligne

Tout dans ModelCraft fonctionne sur votre ordinateur : la modélisation, l'ouverture, l'enregistrement, l'importation et l'exportation fonctionnent donc sans connexion une fois l'application chargée.

Pour ouvrir ModelCraft sans aucune connexion, enregistrez-le pour un usage hors ligne pendant que vous êtes en ligne :

1. Cliquez sur {{ui:Enregistrer pour le hors ligne}} dans la barre d'application en haut.
2. Le bouton affiche la progression (« Enregistrement 40 sur 212 ») pendant l'opération. ModelCraft enregistre ses propres fichiers (dont son lecteur DWG), cette aide et la bibliothèque 3D, ce qui peut prendre un moment.
3. Lorsque le bouton affiche {{ui:Prêt hors ligne}}, ModelCraft s'ouvre depuis la même adresse sans connexion, et l'importation DWG fonctionne aussi hors ligne.

Cliquez plus tard sur {{ui:Prêt hors ligne}} pour {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} ou {{ui:Supprimer la copie hors ligne}}. Si le bouton affiche {{ui:Enregistrement impossible}}, certains fichiers n'ont pas été téléchargés : vérifiez la connexion, puis cliquez à nouveau dessus. {{ui:Hors ligne indisponible}} signifie que cette fenêtre du navigateur ne peut pas conserver de copie (fenêtres privées et certains ordinateurs gérés). Voir [Travailler hors ligne](common:offline).

L'enregistrement dans le cloud n'est pas encore disponible. Chaque modèle se trouve à l'endroit où vous l'enregistrez.

:::offline
Vous êtes hors ligne. Vous pouvez continuer à modéliser et à enregistrer. Sauf si la barre d'application affiche {{ui:Prêt hors ligne}}, ne rechargez pas cet onglet tant que vous n'êtes pas de nouveau en ligne.
:::

## Application de bureau

:::desktop
Vous utilisez ModelCraft dans CadCraft Studio, l'application de bureau qui regroupe les huit applications. Les fichiers s'ouvrent et s'enregistrent où vous le choisissez.
:::

:::web
ModelCraft fonctionne dans le navigateur sur Mac, Windows et Linux, et dans CadCraft Studio, l'application de bureau qui regroupe les huit applications en une seule installation, à partir de getcadcraft.com/download.
:::
