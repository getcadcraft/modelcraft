---
title: Ouvrir, enregistrer, importer et exporter
summary: Le fichier ModelCraft, ce que vous pouvez importer et exporter, où vont les fichiers, et ce qui change hors ligne et d'un navigateur à l'autre.
from: 0b4896d1
keywords: ouvrir, enregistrer, importer, exporter, fichier, 3dm, skp, récupérer, enregistrement automatique, récents, bureau, ouvrir en 3d, transfert, télécharger, fichier modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formats, hors ligne, enregistrer sous
---

ModelCraft lit et écrit des fichiers sur votre ordinateur. Rien n'est téléversé : un fichier que vous ouvrez est lu dans votre navigateur, et un fichier que vous enregistrez est un téléchargement. Voir [Où vont vos fichiers](common:your-files).

## Les formats en un coup d'œil

| Format | Ouvrir | Importer | Exporter | À quoi il sert |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | oui | non | {{ui:Enregistrer}} | Votre fichier de travail. Il garde tout. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | oui | oui | {{ui:Enregistrer sous}}, {{ui:Exporter}} | Programmes de rendu et d'assemblage de scènes. L'USD propre à ModelCraft garde tout. Voir [Enregistrer, ouvrir et exporter en USD](topic:usd). |
| SketchUp (`.skp`) | non | oui | non | Récupérer des modèles de SketchUp. Garde les groupes, composants, couleurs, textures sur les faces, étiquettes et arêtes adoucies. Voir [Importer un modèle SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | non | oui | oui | Échanger des modèles avec d'autres modeleurs 3D. Garde les groupes, composants et couleurs. |
| OBJ (`.obj`) | non | oui | oui | Programmes de rendu et de visualisation. |
| glTF (`.glb`, `.gltf`) | non | oui | `.glb` seulement | Visionneuses web, moteurs de jeu, réalité augmentée. |
| STL (`.stl`) | non | oui | oui | Impression 3D (en millimètres). |
| PLY (`.ply`) | non | oui | oui | Maillages avec couleurs : numérisations, impression en couleur. |
| FBX (`.fbx`) | non | oui | non | Modèles issus de programmes d'animation et de jeu (FBX 2011 et plus récent). |
| Alembic (`.abc`) | non | oui | non | Caches de géométrie, à leur premier échantillon. |
| STEP (`.step`, `.stp`) | non | oui | non | Pièces issues de modeleurs de pièces et de fournisseurs, en maillages fermés à leur taille réelle. Voir [Formats de fichier](topic:formats). |
| `.3dm` | non | oui | non | Modèles NURBS : polysurfaces, maillages, courbes, blocs et calques, en maillages, arêtes, composants et étiquettes. Voir [Importer un modèle .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | non | non | oui | Impression 3D, avec couleurs (en millimètres). Depuis {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}} : voir [Préparer un modèle pour l'impression 3D](topic:print-3d). |
| IFC (`.ifc`) | non | non | oui | Programmes BIM, et BimCraft. |
| DWG (`.dwg`) | non | oui | oui | Un plan de site ou un plan d'étage sur lequel modéliser ; envoyer le modèle vers un programme de CAO. |
| DXF (`.dxf`) | non | oui | oui | Pareil, pour n'importe quel programme de CAO. |

[Les formats en détail](topic:formats) liste exactement ce que chaque format garde et laisse de côté.

## Le fichier ModelCraft

Un fichier `.modelcraft` garde tout le modèle : géométrie, groupes, composants, guides, scènes, unités, et la caméra et le style que vous utilisiez à l'enregistrement. Il ne garde pas l'historique d'annulation.

### Ouvrir un modèle

1. Cliquez sur {{ui:Ouvrir}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+O}}.
2. Si le modèle à l'écran a des modifications non enregistrées, ModelCraft demande : « This model has changes that are not saved. Save a copy first? » Choisissez {{ui:Enregistrer une copie}}, {{ui:Abandonner les modifications}} ou {{ui:Annuler}}.
3. Choisissez le fichier `.modelcraft`.

Le modèle s'ouvre dans les unités où il a été enregistré, avec la caméra avec laquelle il a été enregistré. Vous pouvez aussi déposer un fichier `.modelcraft` sur la vue 3D, ou en cliquer un dans la liste des fichiers récents de la carte de démarrage (navigateurs capables de rouvrir un fichier, et application de bureau).

:::desktop
Dans l'application de bureau, un double-clic sur un fichier `.modelcraft` l'ouvre dans ModelCraft, de même que **Ouvrir avec** sur un fichier Collada, OBJ, glTF, DWG ou DXF (il est importé dans un nouveau modèle).
:::

### Enregistrer un modèle

Cliquez sur {{ui:Enregistrer}} ou appuyez sur {{key:Mod+S}}. Le navigateur télécharge `<nom>.modelcraft`, où le nom est celui du fichier que vous avez ouvert, ou « Untitled » pour un nouveau modèle.

:::desktop
Dans l'application de bureau, {{ui:Enregistrer}} écrit le fichier ouvert à sa place. Un nouveau modèle demande où l'enregistrer.
:::

- {{ui:Enregistrer sous}} ({{key:Mod+Shift+S}}) enregistre une copie en fichier `.modelcraft` ou en [USD](topic:usd) ; quand le navigateur le permet, il demande le nom et l'emplacement. Sinon, renommez le fichier téléchargé : le prochain enregistrement après l'ouverture du fichier renommé utilise le nouveau nom.
- Chaque enregistrement est un nouveau téléchargement. Selon les paramètres du navigateur, il va directement dans votre dossier de téléchargements ou demande où l'enregistrer. Si un fichier de ce nom s'y trouve déjà, la plupart des navigateurs ajoutent un numéro, comme `Untitled (1).modelcraft`.

:::chromium
Pour choisir le dossier à chaque fois, ouvrez les paramètres du navigateur, cherchez « téléchargements » et activez « Demander où enregistrer chaque fichier avant de le télécharger ».
:::

:::firefox
Pour choisir le dossier à chaque fois, ouvrez **Paramètres**, puis **Général**, et sous « Téléchargements » choisissez « Toujours demander où enregistrer les fichiers ».
:::

:::safari
Pour changer la destination des téléchargements, ouvrez **Safari**, puis **Réglages**, puis **Général**, et définissez « Emplacement de téléchargement des fichiers ».
:::

### Commencer un nouveau modèle

Cliquez sur {{ui:Nouveau}}. S'il y a des modifications non enregistrées, ModelCraft demande d'abord. Un nouveau modèle démarre vide, dans l'unité de votre région (pieds et pouces aux États-Unis, millimètres ailleurs), sans scène.

### Si le navigateur se ferme avant l'enregistrement

ModelCraft garde dans votre navigateur une copie du travail non enregistré, quelques secondes après chaque modification. Si l'onglet ou le navigateur se ferme avant l'enregistrement, la prochaine ouverture de ModelCraft demande « Récupérer votre travail ? ». La récupération ouvre le modèle tel qu'il était, pas encore enregistré dans un fichier : enregistrez-le pour le garder. Voir [Récupérer votre travail](common:recover).

### Depuis CadCraft : Ouvrir dans ModelCraft

Dans l'application de dessin CadCraft, **Affichage**, puis **Plus**, puis **Ouvrir dans ModelCraft** transmet le dessin ouvert à ModelCraft dans un nouvel onglet, sous forme de DWG. Il arrive comme un DWG importé : des lignes au sol, dans un groupe, prêtes à servir de base de modélisation. Rien n'est téléversé ; le fichier passe par le stockage propre à votre navigateur.

## Importer

L'import ajoute un fichier au modèle ouvert ; il ne le remplace pas.

1. Cliquez sur {{ui:Importer}} dans le groupe {{ui:Fichier}}, ou déposez le fichier sur la vue 3D.
2. Choisissez un fichier SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ou DXF.

   Le fichier arrive en **un seul groupe**, sélectionné, et la vue zoome pour le montrer. La barre d'état dit ce qui est arrivé, et liste ce qui n'a pas pu être importé, par exemple « Not imported: 2 texture ».

3. Pour travailler directement sur sa géométrie, double-cliquez sur le groupe pour le modifier de l'intérieur, ou cliquez sur {{ui:Décomposer}}.

Quelques points à connaître :

- **Taille et direction du haut :** les fichiers Collada indiquent leur unité et leur axe vertical, et ModelCraft les convertit. Le glTF est toujours en mètres. Les fichiers OBJ n'ont pas d'unité : ModelCraft les lit en mètres, avec Y vers le haut. Si un OBJ arrive 1000 fois trop grand ou trop petit, utilisez [Échelle](topic:rotate-scale) avec un facteur comme `0.001` ou `1000`.
- **DWG et DXF** arrivent en lignes (arêtes) au sol, pas en faces. Si le dessin n'indique pas son unité, une boîte de dialogue intitulée « Drawing units » demande ce que vaut une unité de dessin. Voir [Modéliser sur un plan de site](topic:site-plan).
- **Limites :** les fichiers de plus de 300 Mo sont refusés à l'import, et ceux de plus de 200 Mo à l'ouverture. Les fichiers de plus de 2 millions de sommets ou de faces sont refusés comme trop gros.

## Exporter

1. Cliquez sur {{ui:Exporter}} dans le groupe {{ui:Fichier}}.
2. Choisissez un format : {{ui:glTF binaire (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL pour l'impression (.stl, millimètres)}}, {{ui:PLY avec couleurs (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC pour BimCraft (.ifc)}}, {{ui:DWG pour la CAO (.dwg, 2004)}} ou {{ui:DXF pour la CAO (.dxf, R12)}}.

Le navigateur télécharge le fichier, nommé comme le modèle. Tout le modèle est exporté, pas seulement la sélection. Un modèle vide n'est pas exporté : « The model is empty: draw something first. » Voir [Exporter un modèle pour d'autres programmes](topic:export-model).

## En ligne et hors ligne

Tout ModelCraft fonctionne sur votre ordinateur : la modélisation, l'ouverture, l'enregistrement, l'import et l'export fonctionnent donc sans connexion une fois l'application chargée.

Pour ouvrir ModelCraft sans aucune connexion, enregistrez-le pour un usage hors ligne pendant que vous êtes en ligne :

1. Cliquez sur {{ui:Enregistrer pour le hors ligne}} dans la barre d'application, en haut.
2. Le bouton compte (« Saving 40 of 212 ») pendant l'enregistrement. ModelCraft enregistre ses propres fichiers (dont son lecteur DWG), cette aide et la bibliothèque 3D ; cela peut prendre un moment.
3. Quand le bouton indique {{ui:Prêt hors ligne}}, ModelCraft s'ouvre à la même adresse sans connexion, et l'import DWG fonctionne aussi hors ligne.

Cliquez plus tard sur {{ui:Prêt hors ligne}} pour {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} ou {{ui:Supprimer la copie hors ligne}}. Si le bouton indique {{ui:Enregistrement impossible}}, certains fichiers n'ont pas été téléchargés : vérifiez la connexion et cliquez dessus pour réessayer. {{ui:Hors ligne indisponible}} signifie que cette fenêtre de navigateur ne peut pas conserver de copie (fenêtres privées et certains ordinateurs gérés). Voir [Travailler hors ligne](common:offline).

L'enregistrement dans le cloud n'est pas encore disponible. Chaque modèle reste là où vous l'enregistrez.

:::offline
Vous êtes hors ligne. Vous pouvez continuer à modéliser et à enregistrer. Tant que la barre d'application n'indique pas {{ui:Prêt hors ligne}}, ne rechargez pas cet onglet avant d'être de nouveau en ligne.
:::

## Application de bureau

:::desktop
Vous utilisez ModelCraft dans CadCraft Studio, l'application de bureau qui réunit les huit applications. Les fichiers s'ouvrent et s'enregistrent là où vous le choisissez.
:::

:::web
ModelCraft fonctionne dans le navigateur sur Mac, Windows et Linux, et dans CadCraft Studio, l'application de bureau qui réunit les huit applications en une seule installation, sur getcadcraft.com/download.
:::
