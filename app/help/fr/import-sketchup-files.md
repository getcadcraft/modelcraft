---
title: Importer un modèle SKP
summary: Importez un fichier .skp avec ses groupes, composants, couleurs, textures, étiquettes et arêtes douces, voyez ce qui est arrivé et ce qui ne l'est pas, puis poursuivez la modélisation.
keywords: skp, importer, ouvrir skp, composants, groupes, étiquettes, calques, matériaux, couleurs, textures, masqué, arêtes douces, 3D Warehouse, migrer, changer
from: 325d3c81
---

ModelCraft lit les fichiers SketchUp (`.skp`) avec son propre lecteur, dans la page. Rien n'est téléversé, et cela fonctionne hors ligne chaque fois que ModelCraft fonctionne. Les fichiers de SketchUp 3 jusqu'à 2026 ont été testés.

## Importer le fichier

1. Cliquez sur {{ui:Import}} dans le groupe {{ui:File}} (ou déposez le fichier `.skp` sur la vue 3D).
2. Choisissez le fichier.

   La barre d'état indique « Lecture de house.skp… » pendant la lecture, puis ce qui a été importé, par exemple « house.skp importé (SketchUp 25.0.575) : 1240 faces, 6 composants, dans un groupe. »

Le modèle entier arrive sous forme d'un seul groupe portant le nom du fichier, sélectionné, et la vue fait un zoom dessus. Un {{key:Mod+Z}} le retire entièrement, étiquettes comprises.

:::tip
Décomposez le groupe d'importation ({{ui:Entity info}} › {{ui:Explode}}) lorsque vous voulez que son contenu soit libre dans votre modèle plutôt que dans un seul groupe.
:::

## Ce qui arrive

- **Faces** avec leurs trous, et **arêtes** qui ne font pas partie d'une face.
- **Groupes** arrivent comme groupes, et **composants** comme composants : chaque copie d'un composant est un placement d'une même définition, si bien que modifier une copie les change toutes, comme dans SketchUp. Les noms sont conservés.
- **Couleurs.** Le matériau propre d'une face lui donne sa couleur. Un matériau peint sur un groupe ou un composant devient la peinture de ce placement, si bien que les faces qu'il contient sans couleur propre la prennent, comme dans SketchUp. Un composant peint en rouge à un endroit et en bleu à un autre reste un seul composant.
- **Textures.** Une face peinte avec un matériau texturé arrive avec sa texture, posée sur la face comme dans le fichier, et le style {{ui:Shaded}} l'affiche. L'image est conservée dans le fichier ModelCraft lors de l'enregistrement, et une [image de rendu](topic:render) l'affiche aussi. Un matériau texturé peint sur un groupe ou un composant entier ne donne à cette copie que la couleur du matériau.
- **Étiquettes.** Un groupe ou un composant placé sur une étiquette SketchUp reçoit une étiquette ModelCraft du même nom, listée dans {{ui:Tags}}, affichée ou masquée comme dans SketchUp. Si votre modèle a déjà une étiquette de ce nom, c'est celle-ci qui est utilisée.
- **Les éléments masqués arrivent masqués :** faces, arêtes, groupes et composants, ainsi que faces et arêtes placées sur une étiquette masquée. Vous voyez ce que SketchUp affichait, et rien n'est perdu : {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} les affiche. Voir [Masquer, isoler et afficher](topic:hide-isolate).
- **Arêtes douces et lissées** restent douces, si bien que les surfaces courbes restent lisses.
- **Dimensions** correctes dans toutes les unités : les fichiers SketchUp sont enregistrés en pouces (in) à l'intérieur, et ModelCraft les convertit.

## Ce qui n'arrive pas

La barre d'état indique ce qui a été laissé de côté, avec des compteurs.

- **Certaines textures** ne gardent que la couleur de leur matériau : texture absente du fichier, image dans un format que les navigateurs ne peuvent pas afficher (comme un fichier Photoshop), ou texture sans taille. Les faces avec une texture projetée arrivent avec la texture placée approximativement.
- **Étiquettes sur des faces et arêtes isolées.** ModelCraft n'étiquette que les groupes et les composants : une face ou une arête portant sa propre étiquette arrive sans étiquette, et la barre d'état les compte. Transformez ces faces en groupe ({{key:Shift+G}}) et étiquetez le groupe.
- **Images** placées dans le modèle, texte, cotes, guides, plans de coupe, scènes et styles.

## Problèmes

- « Ce n'est pas un fichier SketchUp. » ou « Ce fichier SketchUp est endommagé : … » : le fichier est tronqué, ou c'est autre chose portant une extension `.skp`. Enregistrez-le à nouveau depuis SketchUp, ou demandez une copie récente.
- Un fichier d'une version de SketchUp plus récente que celles que ModelCraft connaît est refusé, avec la version détectée.
- Un modèle composé uniquement d'images, de texte ou de cotes indique qu'il n'a rien à afficher.

## Reprendre le modèle

ModelCraft ne peut pas enregistrer de fichiers `.skp`. Exportez en Collada ({{ui:Export}} › `.dae`) et importez-le dans SketchUp : groupes, composants et couleurs passent ; les textures passent avec la couleur de leur matériau. Voir [Exporter votre modèle](topic:export-model).
