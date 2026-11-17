---
title: Exporter un modèle pour d'autres programmes
summary: Choisir le bon export pour le rendu, le web, l'impression 3D, le BIM et BimCraft, et vérifier ce que chacun conserve.
keywords: imprimer, 3mf, pdf, papier, image, png, photo, capture d'écran, rendu, enregistrer la vue, exporter, partager, rendu, gltf, glb, collada, dae, obj, stl, impression 3D, ifc, bim, bimcraft, envoyer, autres logiciels
from: 9e13e80d
---

L'export crée une copie du modèle dans un autre format. Conservez aussi votre fichier `.modelcraft` : c'est le seul fichier qui conserve tout, et le seul que ModelCraft ouvre directement.

## Exporter

1. Enregistrez d'abord ({{key:Mod+S}}), pour que votre fichier de travail soit en sécurité.
2. Cliquez sur {{ui:Exporter}} dans le groupe {{ui:Fichier}}.
3. Choisissez le format. Le navigateur télécharge le fichier, nommé comme le modèle.

Tout le modèle est exporté. Pour n'exporter qu'une partie, enregistrez, effacez le reste, exportez, puis annulez ou rouvrez le fichier.

## Quel format

| Vous voulez | Choisissez | Remarques |
|---|---|---|
| L'ouvrir dans un autre logiciel de modélisation 3D | {{ui:Collada (.dae)}} | Conserve les groupes, les groupes imbriqués, les composants (partagés, non copiés), les noms et les couleurs. Z vers le haut, mètres. |
| Le rendre, ou l'utiliser dans un logiciel de visualisation | {{ui:OBJ (.obj)}} ou {{ui:glTF binaire (.glb)}} | OBJ est le format le plus largement lu ; il écrit le placement de chaque groupe comme un objet séparé, mais n'a ni couleurs ni composants partagés. glTF conserve les composants et les couleurs. |
| Le publier sur le web, dans un moteur de jeu ou en réalité augmentée | {{ui:glTF binaire (.glb)}} | Un seul fichier qui contient tout. |
| L'imprimer en 3D | {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}} | Vérifie que le modèle est fermé et que ses faces sont bien orientées, puis écrit du STL ou du 3MF en millimètres. Voir [Préparer un modèle pour l'impression 3D](topic:print-3d). {{ui:STL pour l'impression (.stl, millimètres)}} écrit tout le modèle sans cette vérification. |
| L'ouvrir dans BimCraft ou un autre logiciel BIM | {{ui:IFC pour BimCraft (.ifc)}} | Chaque groupe ou composant de premier niveau devient un élément de bâtiment. |

La barre d'état confirme chaque export, par exemple « Exporté House.stl (millimètres). » ou « Exporté House.dae (Collada 1.4.1, Z vers le haut, mètres ; les composants restent partagés). »

## Avant d'exporter

- **Groupez vos objets.** Collada, glTF et IFC conservent les groupes et les composants comme objets séparés. La géométrie libre sort en un seul bloc ; en IFC, elle devient un élément unique appelé « Géométrie libre ».
- **Nommez-les.** Les noms des groupes et des composants passent dans Collada et IFC : un mur nommé « Mur nord » arrive sous ce nom.
- **Vérifiez le sens des faces.** Les faces qui apparaissent en bleu-gris à l'extérieur seront orientées vers l'intérieur dans l'export. Corrigez-les avec {{ui:Inverser la face}} (voir [Effacer et nettoyer](topic:erase#a-face-facing-the-wrong-way)).
- **Pour l'impression,** rendez les pièces des solides fermés : sélectionnez chaque groupe et vérifiez que {{ui:Infos sur l'entité}} indique « Solide : Oui ». Ensuite, mettez le modèle à la taille d'impression, ou redimensionnez-le dans le logiciel de l'imprimante.

## Envoyer un modèle vers BimCraft

1. Faites de chaque partie du bâtiment un groupe ou un composant, et nommez-le.
2. Choisissez {{ui:Exporter}}, puis {{ui:IFC pour BimCraft (.ifc)}}.
3. Ouvrez le fichier `.ifc` téléchargé dans BimCraft.

Pour une volumétrie d'esquisse, utilisez plutôt {{ui:Exporter}} › {{ui:Volumétrie vers BimCraft…}} : chaque groupe est envoyé comme une option de volumétrie, avec ses étages, ses surfaces de plancher et son volume. Voir [Envoyer une volumétrie vers BimCraft](topic:massing-to-bimcraft).

L'export IFC simple n'a aucun lien direct entre les deux applications. L'IFC n'a qu'un seul niveau, et chaque élément est un proxy d'élément de bâtiment générique, sans type ni propriétés : il ne porte que la forme et le nom. Les groupes fermés deviennent des formes solides ; les groupes ouverts deviennent des surfaces.

## Lignes sans faces

Les arêtes qui ne font partie d'aucune face (lignes de type guide, plan de site importé) passent dans OBJ et Collada sous forme de lignes. glTF et STL n'ont pas de place pour elles et les omettent. Les guides et les scènes ne sont exportés dans aucun format.

## Enregistrer la vue comme image

{{ui:Exporter}} › {{ui:Image de la vue (.png)}} enregistre exactement ce que montre la vue 3D, à sa taille à l'écran. {{ui:Image au double de la taille (.png)}} l'enregistre deux fois plus large et deux fois plus haute (pour l'impression ou une diapositive nette), avec les cotes et les repères redessinés à cette taille plutôt qu'étirés.

Pour une image qui ressemble à la lumière du jour (ciel, soleil, ombres douces, verre), utilisez plutôt {{ui:Exporter}} › {{ui:Calculer un rendu…}} : voir [Calculer un rendu](topic:render).

Pour une image épurée, activez d'abord la [vue présentation](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) : les axes, les guides, les contours de coupe et la sélection sont masqués. Réglez la caméra, le style et les ombres comme vous le souhaitez, ou passez par une [scène](topic:scenes) ; pour enregistrer un film animé de vos scènes, utilisez {{ui:Exporter une animation}} dans le panneau {{ui:Scènes}}.

## Imprimer la vue, ou l'enregistrer en PDF

- {{ui:Exporter}} › {{ui:PDF de la vue (.pdf)}} enregistre un PDF d'une page : la vue à deux fois sa taille à l'écran, avec ses cotes, sur une page A4 (Letter lorsque le modèle est en pieds et pouces), en paysage, avec une ligne en dessous indiquant le nom du fichier, la date et l'unité.
- {{ui:Exporter}} › {{ui:Imprimer la vue…}} affiche la même page dans la boîte de dialogue d'impression de votre navigateur. Choisissez une imprimante, ou « Enregistrer au format PDF ».

La page montre la vue telle qu'elle est : une vue en perspective n'a pas d'échelle. Pour un dessin à l'échelle, désactivez {{ui:Perspective}} et placez-vous sur {{ui:Dessus}} ou {{ui:Face}}, puis ajoutez des [cotes](topic:dimensions) pour les dimensions importantes. La [vue présentation](topic:styles-shadows#presentation-view) masque les axes, les guides et la sélection ; les cotes restent.
