---
title: Terrain : sol à partir de courbes de niveau, et modelage
summary: Créez du sol à partir de courbes de niveau ou sous forme de grille, puis soulevez-le et abaissez-le avec un pinceau doux.
keywords: terrain, sol, paysage, topographie, courbes de niveau, lignes de niveau, site, pente, colline, butte, bac à sable, smoove, modeler, terrassement, TIN
from: 407652b3
---

Le terrain est un sol fait de triangles, il peut donc épouser n'importe quelle forme. C'est un groupe : double-cliquez dessus pour le modifier.

## À partir de courbes de niveau

1. Obtenez les courbes de niveau à leur altitude : dessinez-les, ou [importez un plan de site](topic:site-plan) et amenez chaque courbe à son niveau.
2. Sélectionnez-les (toutes les arêtes de toutes les courbes).
3. {{ui:Édition}} › {{ui:Plus}} › {{ui:Terrain depuis les courbes sélectionnées}}.

ModelCraft relie les points des courbes par des triangles (un TIN) et adoucit chaque arête intérieure pour que le sol s'ombre en douceur. Les lignes elles-mêmes restent : effacez-les ou masquez-les quand vous n'en avez plus besoin. Les courbes très denses sont réduites à 8 000 points.

## Une grille à modeler

{{ui:Édition}} › {{ui:Plus}} › {{ui:Grille de terrain…}} demande une largeur, une profondeur et une taille de cellule, puis place une grille plane de triangles à l'endroit où vous cliquez pour en définir le coin. Les petites cellules permettent un modelage plus lisse, mais créent plus de faces (200 × 200 cellules au maximum).

## Modeler : soulever et abaisser le sol

1. Double-cliquez sur le terrain pour l'ouvrir.
2. {{ui:Édition}} › {{ui:Plus}} › {{ui:Modeler le terrain}}. Un cercle montre le pinceau sur le sol sous le pointeur.
3. Faites glisser vers le haut pour soulever le sol sous le pinceau, ou vers le bas pour l'abaisser. Le centre bouge le plus, et le sol s'estompe jusqu'à zéro au bord du cercle, si bien que les buttes et les creux sortent lisses.

Pour donner à une butte une hauteur exacte, cliquez une fois, puis saisissez la hauteur, par exemple `1.5m` (un moins l'abaisse), et appuyez sur {{key:Enter}}. Pour changer le pinceau, saisissez une longueur avant de cliquer : `5m` donne un pinceau de 5 m de rayon.

Chaque modelage forme une seule étape d'annulation.

## À savoir

- Le modelage ne déplace que les faces triangulaires, donc chaque face reste plane. Les faces dessinées à la main (rectangles, polygones) ne sont pas du terrain : l'outil le signale.
- Le modelage déplace les points uniquement de haut en bas ; il n'en ajoute pas. Pour plus de détail, créez une grille aux cellules plus petites.
- Le terrain s'exporte comme tout autre groupe. En IFC, c'est un proxy d'élément de bâtiment, comme tout le reste.
