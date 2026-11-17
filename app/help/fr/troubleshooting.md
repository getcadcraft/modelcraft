---
title: Dépannage
summary: Symptômes, causes et solutions, de la vue 3D vide aux imports à la mauvaise taille, avec les messages affichés par ModelCraft.
keywords: problème, dépannage, erreur, ne fonctionne pas, vide, webgl, graphisme, lent, message, échec d'import, mauvaise taille, sélection impossible, tactile, touches inopérantes, travail perdu
from: 6e7394be
---

## La vue 3D est vide

**Symptôme :** le centre de l'écran reste vide, ou n'affiche que la couleur de fond, et cliquer sur les outils ne fait rien.

**Cause :** ModelCraft dessine avec WebGL 2, le moteur graphique 3D du navigateur. Il manque lorsque le navigateur est ancien, lorsque l'accélération matérielle est désactivée ou lorsque le pilote graphique est bloqué.

**Solution :**

:::chromium
1. Ouvrez les paramètres du navigateur et recherchez « accélération graphique ».
2. Activez « Utiliser l'accélération graphique si disponible » et relancez le navigateur.
3. Si elle est déjà activée, saisissez `chrome://gpu` dans la barre d'adresse (`edge://gpu` dans Edge) et cherchez « WebGL2 » dans la liste. S'il indique désactivé, mettez à jour le pilote graphique.
:::

:::firefox
1. Ouvrez **Paramètres**, puis **Général**, et faites défiler jusqu'à « Performances ».
2. Décochez « Utiliser les paramètres de performance recommandés », puis cochez « Utiliser l'accélération matérielle si disponible ». Redémarrez Firefox.
3. Si cela échoue toujours, saisissez `about:support` dans la barre d'adresse et regardez la section « Graphismes » pour WebGL 2.
:::

:::safari
Mettez à jour macOS et Safari. Les versions récentes de Safari ont toujours WebGL 2 activé. Si vous avez modifié les fonctionnalités expérimentales sous **Safari**, puis **Réglages**, puis **Avancé** (ou **Indicateurs de fonctionnalités**), réinitialisez-les.
:::

Sur un ordinateur professionnel, un bureau à distance ou une machine virtuelle, la 3D peut être bloquée par une règle. Essayez un autre ordinateur. Voir [Navigateurs et ordinateurs](common:browsers).

## Les touches ne font rien, ou écrivent dans une zone de saisie

**Cause :** le focus du clavier se trouve dans un champ du panneau : la liste {{ui:Faces}} dans {{ui:Style}}, un réglage du soleil, le champ {{ui:Nom}} dans {{ui:Infos sur l'entité}}, ou le sélecteur d'unités. Les lettres et les touches fléchées vont alors à ce champ.

**Solution :** cliquez dans la vue 3D, puis appuyez à nouveau sur la touche. Les touches ne fonctionnent pas non plus pendant qu'une boîte de dialogue est ouverte.

## Saisir un nombre ne fait rien

- **Pas encore de direction.** Une longueur saisie suit la direction du pointeur depuis le premier clic. Déplacez légèrement le pointeur dans la direction voulue, puis saisissez.
- **Mauvais moment.** La plupart des outils n'acceptent une valeur saisie qu'après le premier clic : cliquez d'abord sur le premier coin, la face ou le point à partir duquel déplacer. {{ui:Cercle}} et {{ui:Polygone}} demandent un nombre de côtés avant le premier clic.
- **« Saisissez une longueur, par exemple 3m, 10'6" ou 4m,3m. »** ModelCraft n'a pas pu la lire. Vérifiez qu'il n'y a pas de virgule décimale (`2,5`) : utilisez un point.

## Une forme commence au mauvais endroit sur un écran tactile

**Symptôme :** avec le doigt, le premier rectangle est correct, mais le rectangle, le cercle ou la ligne suivant commence là où votre geste précédent s'est terminé, et non là où vous avez touché.

**Cause :** un bogue de cette version : sur un écran tactile, l'outil mémorise le dernier point d'accrochage du geste précédent.

**Solution :** touchez à nouveau le bouton de l'outil dans la barre d'outils avant chaque nouvelle forme. Cela relance l'outil à zéro, et le premier point tombe là où vous touchez.

## La modification d'un groupe en a changé un autre

**Symptôme :** vous avez copié un groupe avec {{ui:Déplacer}} et {{key:Ctrl}}, ouvert une copie et l'avez modifiée, et l'autre copie a changé aussi. L'{{ui:Arborescence}} affiche les deux avec le même nom.

**Cause :** dans cette version, copier un groupe crée une deuxième occurrence du même groupe, comme pour un composant. Le bouton {{ui:Rendre unique}} de ModelCraft n'est proposé que pour les composants.

**Solution :** sélectionnez la copie à modifier, cliquez sur {{ui:Créer un composant}} dans {{ui:Infos sur l'entité}}, puis sur {{ui:Rendre unique}}. Cette copie a désormais son propre contenu. Vous pouvez aussi la {{ui:Décomposer}}.

## Pousser/tirer ne fait pas ce que j'attendais

- **« Pousser/tirer agit sur une face. Cliquez sur une face. »** Vous avez cliqué sur une arête ou dans le vide. Survolez jusqu'à ce que la face soit mise en surbrillance, puis cliquez.
- **La face se trouve dans un groupe.** Double-cliquez d'abord sur le groupe pour l'ouvrir.
- **Une fenêtre n'a pas traversé le mur.** Le rectangle doit être dessiné sur la face du mur, et non devant elle, et le mur doit avoir une face arrière. Voir [Percer une ouverture dans un mur](topic:openings#if-it-did-not-cut-through).
- **Deux boîtes se chevauchent sans fusionner.** Les solides poussés l'un dans l'autre ne se découpent ni ne se joignent dans cette version.

## Une ligne ou une forme n'a pas créé de face

Une face ne se remplit que lorsque les arêtes forment une boucle plane fermée. Vérifiez que le dernier point s'est accroché au premier (« Extrémité ») et que toutes les arêtes se trouvent dans un même plan. Une boucle légèrement hors plan reste sous forme de lignes. Redessinez l'une de ses arêtes en vous accrochant aux coins.

## Je ne peux pas sélectionner ni effacer une face

- Avec {{ui:Sélectionner}}, un clic près d'une arête prend l'arête. Cliquez plus près du milieu de la face.
- La {{ui:Gomme}} ne choisit pas les faces. Sélectionnez la face et appuyez sur {{key:Delete}}, ou effacez l'une de ses arêtes.
- Si la face appartient à un groupe ou à un composant, le clic sélectionne l'ensemble. Double-cliquez pour l'ouvrir.

## « Sélectionnez d'abord un élément à déplacer, ou cliquez dessus. »

{{ui:Déplacer}}, {{ui:Rotation}} et {{ui:Échelle}} ont besoin d'un élément à traiter : sélectionnez-le d'abord, ou lancez l'outil en cliquant sur l'élément lui-même (et non dans le vide ou sur un guide).

## « Sélectionnez d'abord de la géométrie (faites glisser une fenêtre, ou faites un triple-clic pour sélectionner tout ce qui est connecté). »

{{key:G}} et {{key:Shift+G}} ont besoin d'une sélection. Les guides ne peuvent pas être groupés.

## Les touches fléchées font tourner la vue au lieu de verrouiller

Les verrouillages ne fonctionnent qu'après le premier clic d'un outil de dessin ou d'édition. {{ui:Pousser/tirer}} n'a pas de verrouillages, et dans {{ui:Rotation}} ils ne modifient pas la rotation. À d'autres moments, les touches fléchées font tourner la vue.

## Échap en plein écran

En plein écran, le navigateur peut utiliser la première {{key:Esc}} pour quitter le plein écran. Appuyez à nouveau sur {{key:Esc}} pour annuler l'outil.

## Pas de bouton du milieu

Appuyez sur {{key:O}} pour {{ui:Orbite}} et faites glisser, ou utilisez les touches fléchées. Voir [Orbite, panoramique et zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Imports

| Message | Que faire |
|---|---|
| « ModelCraft importe SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG et DXF. … n'est aucun de ces formats. » | Exportez le modèle depuis l'autre programme dans l'un de ces formats |
| « Ce fichier dépasse 300 MB. » | Simplifiez ou découpez le modèle dans l'autre programme |
| « … trop volumineux pour être modélisé ici (plus de 2 millions de sommets). » | Idem |
| « Ce fichier .gltf a besoin de « … »… » | Déposez le `.gltf` avec ses fichiers `.bin` et ses textures, ou ouvrez la version `.glb` |
| « Ce fichier glTF a besoin de l'extension …, que ModelCraft ne lit pas encore. » | Réexportez depuis l'autre programme sans cette extension (textures KTX2, par exemple) |
| Un OBJ arrive sans ses couleurs ni ses textures | Déposez le `.obj` avec son `.mtl` et ses images |
| « Ce fichier Alembic utilise l'ancienne structure HDF5… » | Enregistrez-le à nouveau depuis l'autre programme au format Alembic Ogawa |
| Un FBX arrive sans ses textures | Déposez le `.fbx` avec ses images de texture, ou intégrez les médias lors de l'export |
| « Ce fichier FBX est en version …, que ModelCraft ne lit pas » | Réexportez en FBX 2011 ou plus récent |
| Un STL ou un PLY arrive 1,000 fois trop grand ou trop petit | Le STL est lu en millimètres et le PLY en mètres : mettez-le à l'échelle (voir [Rotation et échelle](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| « Ce n'est pas un fichier Collada (.dae)… » ou « …XML mal formé… » | Le fichier est endommagé ou n'est pas Collada. Réexportez-le |
| « Ce fichier Collada ne contient aucune géométrie que ModelCraft peut importer. » | Il ne contient que des caméras, des lumières ou des références à d'autres fichiers |
| « C'est un DXF binaire. Enregistrez-le en DXF ASCII et réessayez. » | Enregistrez-le à nouveau depuis le logiciel de CAO, en ASCII |
| « Ce n'est pas un dessin DWG… » | Le fichier n'est pas un DWG, ou il est endommagé |
| « Ce dessin n'a pas pu être lu (…). Il est peut-être endommagé, ou enregistré dans une version DWG que le lecteur ne gère pas… » | Les parenthèses donnent la raison. Enregistrez-le en DXF, ou en DWG d'AutoCAD 2000 à 2018, depuis le logiciel de CAO |
| « Ce dessin s'étend à plus de 10,000 km de son origine… » | Déplacez le dessin près de 0,0 dans le logiciel de CAO |

### L'import a la mauvaise taille ou est couché sur le côté

- **OBJ :** le format OBJ n'a pas d'unité ; ModelCraft lit des mètres. Un modèle en millimètres arrive 1000 fois trop grand : [mettez-le à l'échelle](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) par `0.001` ; un modèle en pouces, par `0.0254`.
- **OBJ couché :** ModelCraft attend des fichiers OBJ avec Y vers le haut. Un fichier écrit avec Z vers le haut arrive couché. Faites-le pivoter de 90° autour du rouge : cliquez sur le centre de {{ui:Rotation}} sur une face orientée selon le rouge, ou ouvrez le fichier dans son programme et exportez-le avec Y vers le haut.
- **DWG ou DXF :** vous avez choisi la mauvaise unité dans la boîte de dialogue « Unités du dessin ». Annulez et réimportez.

## Ouvrir des fichiers

| Message | Que faire |
|---|---|
| « Ce fichier n'est pas un modèle ModelCraft (ce n'est pas du JSON). » | Utilisez {{ui:Importer}} pour les autres formats |
| « Ce n'est pas un fichier ModelCraft ouvrable : … » | Le fichier est endommagé ou a été modifié à la main |
| « Ce modèle a été enregistré par une version plus récente de ModelCraft… » | Ouvrez-le dans la version plus récente |
| « Ce fichier dépasse 200 MB. » | Le modèle est trop volumineux pour être ouvert ici |

## J'ai perdu mon travail

ModelCraft n'enregistre pas tout seul dans un fichier. Quand vous fermez ou rechargez un onglet contenant des modifications non enregistrées, le navigateur demande d'abord (« Quitter le site ? » ou « Recharger le site ? ») : choisissez de rester et enregistrez. Nouveau et Ouvrir demandent aussi (« Modifications non enregistrées »). Si le navigateur ou l'ordinateur a planté, rouvrez ModelCraft dans le même navigateur : il vous propose de récupérer le travail non enregistré (« Récupérer votre travail ? » ; voir [Récupérer votre travail](common:recover)). Enregistrez souvent avec {{key:Mod+S}}.

## Mon dossier de téléchargements se remplit de copies

Chaque enregistrement est un nouveau téléchargement, nommé `Untitled (1).modelcraft`, `Untitled (2).modelcraft` et ainsi de suite. Supprimez les anciens, ou réglez le navigateur pour qu'il demande où enregistrer chaque fichier et que vous écrasiez vous-même l'ancien. Voir [Ouvrir, enregistrer, importer et exporter](topic:files#save-a-model).

## Ça ralentit

- Chaque étape d'annulation conserve une copie du modèle (un [maillage](topic:meshes) ne garde que ce qui a changé) ; donc, sur un très gros import de géométrie poussée/tirée, chaque modification prend plus de temps. Décomposez ou effacez ce dont vous n'avez pas besoin, enregistrez, puis rouvrez : la réouverture efface aussi l'historique d'annulation.
- Les ombres du soleil coûtent le plus cher. Décochez {{ui:Ombres du soleil}} pendant la modélisation.

## Pas d'ombres

{{ui:Ombres du soleil}} est désactivé, le soleil est couché à l'heure choisie (« Le soleil est couché à cette heure. »), ou le style est {{ui:Filaire}}, qui ne dessine aucune ombre.

## « Ce navigateur n'a pas autorisé le plein écran. »

Certains navigateurs et certaines vues intégrées refusent le plein écran. Utilisez à la place le plein écran du navigateur ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft ne s'ouvre pas sans connexion

ModelCraft ne s'ouvre hors ligne qu'après avoir été enregistré pour un usage hors ligne dans ce navigateur : le bouton de la barre d'application doit afficher {{ui:Prêt hors ligne}}. Ouvrez-le en ligne et cliquez sur {{ui:Enregistrer pour le hors ligne}}. Si le bouton affiche {{ui:Enregistrement impossible}}, cliquez à nouveau dessus avec une meilleure connexion ; {{ui:Hors ligne indisponible}} signifie que cette fenêtre (une fenêtre privée ou un ordinateur géré) ne peut pas conserver de copie. Voir [Travailler hors ligne](common:offline).
