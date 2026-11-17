---
title: Envoyer une volumétrie vers BimCraft
summary: Transmettez à BimCraft les volumes modélisés par pousser/tirer comme options de volumétrie, avec les niveaux, l'emprise, la surface de plancher brute et le volume calculés à partir de chaque solide.
keywords: volumétrie, masse, concept, options, bimcraft, ifc, bim, pousser tirer, étages, niveaux, surface de plancher brute, emprise, volume, envoyer, transmettre, masse du bâtiment, étape 2
from: 73c51f3f
---

## Ce que vous allez faire

Transformez les blocs modélisés par pousser/tirer en options de volumétrie que BimCraft comprend, pour que le concept se poursuive sous forme de modèle de bâtiment.

## Avant de commencer

Faites de chaque masse un **groupe** ou un **composant**, et donnez-lui un nom. Chacun devient une option. La géométrie libre n'est pas envoyée.

## Envoyer

1. Sélectionnez les groupes à envoyer. Sans sélection, tous les groupes et composants de premier niveau sont envoyés.
2. Choisissez {{ui:Exporter}}, puis {{ui:Volumétrie vers BimCraft…}}.
3. Saisissez le {{ui:Nom du jeu d'options}} et la {{ui:Hauteur d'étage}}.
4. Vérifiez la liste : pour chaque option, ses étages, son emprise, sa surface de plancher brute et son volume.
5. Choisissez **Envoyer à BimCraft** pour ouvrir BimCraft dans un nouvel onglet avec les options, ou {{ui:Enregistrer en IFC}} pour télécharger le fichier et l'ouvrir vous-même là-bas.

Dans BimCraft, les options figurent sous « Options de volumétrie dans le modèle », où l'une d'elles peut devenir l'option courante et être développée en murs et planchers.

## Comment un solide devient une masse

- **Les étages** correspondent à la hauteur du solide divisée par la hauteur d'étage, arrondie, et au moins un. Les étages se partagent ensuite la hauteur du solide à parts égales : un bloc de 10 m avec des étages de 3 m compte donc 3 étages de 3.33 m.
- **La surface d'un étage** est l'aire de la section horizontale propre du solide au niveau de cet étage. Un bloc qui se retire a des étages supérieurs plus petits, et la surface de plancher brute est leur somme.
- **L'emprise** est le contour de la section juste au-dessus de la base du solide.
- **Le volume** est celui du solide lui-même.

Dans le fichier IFC, chaque option est un proxy d'élément de bâtiment (l'emprise élevée jusqu'à la hauteur du solide), avec un espace par étage portant la surface brute de l'étage. Toutes les options partagent un même bâtiment, avec autant de niveaux que la plus haute des options.

## Formes simplifiées

Un bloc simple et droit est transmis exactement comme il a été modélisé. Tout le reste est tout de même envoyé, et la liste indique pourquoi sa forme est simplifiée :

- **Ses étages n'ont pas tous la taille de sa base** (il se retire ou s'incline) : la masse dans BimCraft est le contour de la base élevé à toute la hauteur, mais les surfaces d'étages et le volume sont ceux du solide lui-même.
- **Le solide n'est pas fermé** : les étages dont la section ne peut pas être refermée ne sont pas mesurés et comptent pour zéro. Fermez le solide ({{ui:Infos sur l'entité}} indique « Solide : Oui ») pour obtenir des valeurs complètes.
- **Sa base comporte plusieurs contours** : le plus grand est utilisé comme emprise.

## Bon à savoir

- {{ui:IFC pour BimCraft (.ifc)}} est un export différent : il n'envoie que les formes et les noms, sans étages ni surfaces.
- Rien n'est téléversé. Le fichier est remis à l'onglet BimCraft de cet ordinateur.
