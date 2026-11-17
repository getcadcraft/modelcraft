---
title: Étiquettes : afficher et masquer des ensembles d'éléments
summary: Donnez à des groupes et des composants une étiquette, comme Mobilier ou Murs, puis masquez ou affichez d'un coup tout ce qui porte cette étiquette.
keywords: étiquettes, étiquette, calques, calque, afficher, masquer, visibilité, organiser, mobilier, murs, sans étiquette, renommer une étiquette, supprimer une étiquette
from: c1a95a05
---

Une étiquette est un nom que vous donnez à des groupes et des composants, comme **Mobilier**, **Murs** ou **Site**, pour masquer ou afficher d'un coup tout ce qui porte cette étiquette. Les étiquettes correspondent aux calques des logiciels de CAO. Pour masquer un seul élément à la fois, voir [Masquer, isoler et réafficher](topic:hide-isolate).

## Créer une étiquette

1. Dans {{ui:Étiquettes}}, à droite, cliquez sur {{ui:Ajouter une étiquette}}.
2. Saisissez son nom et appuyez sur {{key:Enter}}.

Pour renommer une étiquette, cliquez sur son nom dans {{ui:Étiquettes}}, saisissez le nouveau nom et appuyez sur {{key:Enter}}. Deux étiquettes ne peuvent pas porter le même nom.

## Étiqueter des groupes et des composants

1. Sélectionnez un ou plusieurs groupes ou composants.
2. Dans {{ui:Infos sur l'entité}}, choisissez l'étiquette dans {{ui:Repère}}. {{ui:Nouvelle étiquette…}} crée une étiquette et l'applique à la sélection.

{{ui:Sans étiquette}} retire l'étiquette. Le nombre à côté de chaque étiquette dans {{ui:Étiquettes}} indique combien de groupes et de composants la portent.

Étiquetez des groupes et des composants, pas des faces et des arêtes isolées : dessinez d'abord en groupes les éléments à étiqueter (sélectionnez-les, puis {{key:Shift+G}}).

## Masquer et afficher

Cliquez sur l'œil à côté d'une étiquette. Tout ce qui porte cette étiquette disparaît de la vue, où qu'il se trouve dans le modèle (y compris dans d'autres groupes), et les clics et les accrochages passent à travers. Cliquez à nouveau sur l'œil pour l'afficher. Les éléments {{ui:Sans étiquette}} sont toujours affichés.

Si vous modifiez à l'intérieur d'un groupe dont vous masquez l'étiquette, le groupe se ferme.

## Supprimer une étiquette

Cliquez sur la corbeille à côté. Ce qui portait l'étiquette devient {{ui:Sans étiquette}}, et s'affiche.

## À savoir

- Les étiquettes, leurs noms et celles qui sont masquées sont enregistrés dans le fichier ModelCraft. Copier un groupe étiqueté dans un autre modèle emporte son étiquette.
- Masquer et afficher une étiquette, ainsi que toute autre modification des étiquettes, forment une seule étape d'annulation.
- Les exports incluent tout, y compris les étiquettes masquées, comme pour les éléments masqués.
- Les calques des plans de site DWG et DXF ne sont pas encore importés comme étiquettes : le dessin entier arrive sous forme d'un seul groupe.
