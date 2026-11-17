---
title: Enregistrer, ouvrir et exporter en USD
summary: Enregistrez le modèle entier en USD (.usda, .usdc ou .usdz) sans rien perdre, rouvrez-le, et importez des scènes USD provenant d'autres programmes 3D.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, enregistrer en, exporter, importer, assemblage de scène, archviz, openpbr, materialx, paquet
from: 73d299f9
---

USD est un format de scène partagé par de nombreux programmes 3D, de rendu et d'archviz. ModelCraft l'écrit et le lit. `.modelcraft` reste le format qu'écrit {{ui:Enregistrer}} ; USD est un choix proposé dans {{ui:Enregistrer en}}.

## Enregistrer en USD

1. Choisissez {{ui:Enregistrer en}} dans le groupe {{ui:Fichier}} (ou appuyez sur {{key:Mod+Shift+S}}).
2. Choisissez le format : {{ui:Texte (.usda)}} (lisible, pratique pour le contrôle de version), {{ui:Binaire (.usdc)}} (le plus petit et le plus rapide) ou {{ui:Paquet (.usdz)}} (un seul fichier contenant les textures).
3. Le fichier se télécharge (dans l'application de bureau, vous choisissez où il est enregistré).

Les mêmes choix se trouvent dans {{ui:Exporter}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Rien n'est perdu

Ouvrez un fichier USD enregistré par ModelCraft et vous retrouvez le modèle à l'identique : faces avec leurs trous, arêtes douces et cachées, courbes, groupes et composants, étiquettes, scènes, cotes, repères, plans de coupe, lampes, textures importées et la vue. Les autres programmes voient le même modèle sous forme de maillages, de groupes, de prototypes pour les composants, de matériaux, de lampes et de caméras.

:::note
Si un autre programme modifie la géométrie d'un groupe ou d'un composant, ModelCraft ouvre cette partie comme un maillage en conservant la modification, et indique combien de pièces il a lues ainsi. Un placement déplacé ou supprimé dans un autre programme reste déplacé ou supprimé.
:::

## Ouvrir ou importer un USD d'un tiers

- {{ui:Ouvrir}} un fichier `.usd`, `.usda`, `.usdc` ou `.usdz` pour créer un modèle à partir de lui.
- {{ui:Importer}} un fichier pour l'ajouter au modèle ouvert. Déposez avec lui les fichiers auxquels il fait référence (autres couches, textures).

Les maillages arrivent avec leurs normales, leurs coordonnées UV et leurs couleurs ; la géométrie partagée devient des composants, les matériaux deviennent des couleurs de peinture, les lampes deviennent des lampes et les caméras deviennent des scènes, en mètres avec Z vers le haut, quelles que soient les unités et l'axe vertical du fichier.

## Pas encore

L'animation, les squelettes et les graphes de nœuds MaterialX ne sont pas encore lus ni écrits en USD. Les animations et les matériaux à nœuds propres à ModelCraft sont conservés dans un fichier USD que ModelCraft a enregistré, pour qu'il puisse le rouvrir, mais les autres programmes ne les voient pas. Les couches auxquelles un fichier fait référence et que ModelCraft ne peut pas lire (par exemple un document MaterialX) sont omises, avec une remarque.
