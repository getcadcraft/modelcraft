---
title: Nœuds : construire un modèle par câblage
summary: Reliez des nombres en points, des points en courbes, des courbes en surfaces. Modifiez un nombre et tout ce qui en dépend se reconstruit. Chaque nœud est aussi une ligne de CraftScript, et le graphe est enregistré dans le fichier.
keywords: nœuds, éditeur de nœuds, script visuel, paramétrique, graphe, fils, ports, forme libre, freeform, nurbs, lissage, extrusion, révolution, cercle, courbe, surface, série, plage, aléatoire, liste, script, craftscript, grasshopper
from: 9c8e254f
---

L'éditeur **Nœuds** construit la géométrie en reliant des boîtes entre elles. Chaque boîte (un nœud) accomplit une petite tâche : produire un nombre, un point, un cercle, un lissage. Vous reliez le résultat de l'une à l'entrée de la suivante, et le modèle suit lorsque vous modifiez un nombre au départ.

Ouvrez-le depuis le panneau de droite : {{ui:Nœuds}} › {{ui:Nœuds…}}. Un fichier qui contient déjà un graphe l'ouvre automatiquement. C'est une fenêtre superposée à la vue 3D : faites glisser sa barre de titre pour la déplacer, et son coin pour la redimensionner.

## Câblage

1. Choisissez un nœud dans la liste à gauche (saisissez dans la zone de recherche pour la réduire ; <kbd>Entrée</kbd> ajoute la première correspondance). Il apparaît au milieu de la zone de travail.
2. Faites glisser depuis un point rond de **sortie**, à droite d'un nœud, vers un point rond d'**entrée**, à gauche d'un autre. Le point devient vert lorsque la liaison est valide, et rouge sinon ; pointez-le pour en connaître la raison.
3. Une entrée sans rien de relié affiche une case pour une valeur saisie. Saisissez un nombre puis appuyez sur <kbd>Tab</kbd> : le résultat se reconstruit.
4. Le petit cercle dans la barre de titre d'un nœud est son **œil**. Un nœud dont l'œil est ouvert est dessiné dans la vue 3D : en lignes pour les courbes, en teinte pour les surfaces, en points pour les points.

Faites glisser un nœud par sa barre de titre. Faites glisser le fond pour faire un panoramique, et tournez la molette pour zoomer. <kbd>Suppr</kbd> supprime le nœud sélectionné. {{ui:Ranger}} dispose les nœuds en colonnes, {{ui:Ajuster}} les amène tous à l'écran, et {{ui:Annuler}} et {{ui:Rétablir}} parcourent vos modifications.

## Types et unités

Les ports ont un type : nombre, oui/non, point, vecteur, courbe, surface, maillage, solide, ou « géométrie » pour l'un quelconque de ces types. Un point peut alimenter une entrée de vecteur, et inversement. Les nombres ont une unité : une **longueur** est en millimètres et un **angle** est en degrés. Une longueur ne peut pas alimenter un angle, et une longueur multipliée par une longueur (une aire) est refusée : un mauvais câble est donc bloqué dès que vous le créez.

Un carré est une **liste**. Lorsqu'une liste atteint une entrée à valeur unique, le nœud s'exécute une fois pour chaque élément, et son résultat devient une liste. La liste la plus courte répète son dernier élément. Par exemple, une **Série** de hauteurs envoyée à **Déplacer** produit une pile de copies.

## Solides et opérations booléennes en nœuds

Le groupe **Solides** crée des corps fermés à partir des mêmes surfaces exactes que le panneau Surfaces : **Solide boîte**, **Solide cylindre** et **Solide sphère** (tailles en mm), **Union**, **Soustraire** et **Intersecter** (le second solide est pris dans le premier ; la tolérance est l'écart maximal entre les triangles du moteur de solides et les surfaces exactes), **Congé entre faces** (les faces désignées par leur numéro dans le solide, 1 pour la première ; un rayon et, si la valeur est supérieure à 0, un rayon à la fin), **Volume du solide** (mm³) et **Solide vers maillage** (pour voir ou figer le résultat). Un solide a son propre type de port : un point ou un nombre ne peut pas être relié à une entrée de solide, et le point reste rouge. Les nœuds booléens et de congé utilisent le moteur de solides du programme, chargé à la première ouverture de l'éditeur.

## Erreurs

Un nœud qui ne peut pas accomplir sa tâche indique pourquoi, sous son nom, en rouge (« Le rayon doit être supérieur à zéro. »), et les nœuds suivants attendent. Le même message apparaît comme problème dans le panneau Problèmes, où vous pouvez le retrouver.

## Chaque nœud est une ligne de script

Appuyez sur {{ui:Script}} pour voir le graphe sous forme de CraftScript : une ligne par nœud, par exemple `n3 = nd_circle(n2, n1, [0 0 1]);`. Modifiez le texte puis appuyez sur {{ui:Créer le graphe à partir de ce script}} pour le retransformer en graphe. Les mêmes fonctions `nd_` fonctionnent dans un CraftScript de PartCraft : un graphe peut donc y être exécuté, bouclé ou testé. Les nombres aléatoires demandent toujours une **graine**, pour que le même graphe donne le même résultat sur chaque ordinateur.

## Enregistré avec le fichier

Le graphe est enregistré dans le fichier du modèle. Les nœuds créent leurs propres courbes, surfaces et maillages : ils ne modifient pas les faces du modèle tant que vous ne le demandez pas.

## Figer dans le modèle

Activez l'œil d'un nœud qui produit une surface ou un maillage, puis appuyez sur {{ui:Figer dans le modèle}} dans la fenêtre Nœuds. Chaque surface ou maillage affiché devient un groupe de faces du modèle, en mètres, que vous pouvez modifier comme les autres. C'est une seule étape d'annulation. Le graphe reste, mais la copie ne le suit plus : modifiez un nombre et figez de nouveau pour en obtenir une nouvelle. Les points et les courbes ne sont pas des solides : ils sont laissés de côté, et le message indique combien.
