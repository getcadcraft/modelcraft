---
title: Maillages
summary: Transformez un groupe ou un composant en maillage, le type d'objet avec lequel les outils de contenu 3D modélisent, puis reconvertissez-le en géométrie pousser/tirer.
keywords: maillage, maillages, polygone, polygones, n-gone, quad, quads, sommets, demi-arête, uv, uvs, convertir, convertir en maillage, convertir en géométrie, subdivision, sculpture, modélisation, contenu 3D
from: e32363e8
---

ModelCraft a deux types de géométrie. La **géométrie pousser/tirer** est ce que vous dessinez : des faces planes qui se collent, se coupent et se réparent. Un **maillage** est le type d'objet avec lequel les outils de contenu 3D modélisent : des faces à un nombre quelconque de coins, chaque coin pouvant porter ses propres coordonnées de texture (UV), normales et couleurs, et chaque sommet des valeurs comme des poids. Un maillage se place comme un groupe ou un composant, et se trouve à côté de la géométrie pousser/tirer dans le même modèle.

## Convertir un groupe ou un composant en maillage

1. Sélectionnez un groupe ou un composant.
2. Dans {{ui:Infos sur l'entité}}, cliquez sur {{ui:Convertir en maillage}}.

Ses faces deviennent les faces du maillage (une face avec des trous arrive sous forme de triangles), les arêtes vives restent vives, les arêtes douces sont lissées à l'ombrage, et la peinture, les matériaux et les textures importées restent sur leurs faces. Les groupes et composants qu'il contient sont réunis dans un seul maillage. Les arêtes libres sont laissées de côté : un maillage conserve des faces. Chaque placement d'un composant montre le maillage. C'est une seule étape d'annulation.

## Ce qu'affichent les infos sur l'entité

Sélectionnez un maillage pour voir ses faces, sommets et arêtes, s'il s'agit d'un solide fermé (et son volume), ainsi que sa taille une fois placé. Un maillage comportant des arêtes ouvertes indique leur nombre.

## Reconvertir un maillage en géométrie pousser/tirer

Sélectionnez le maillage et cliquez sur {{ui:Convertir en géométrie}}. Les faces planes reviennent comme elles étaient ; une face dont les coins ne sont pas dans un même plan revient sous forme de triangles. Les arêtes vives restent vives, les autres sont douces. {{ui:Décomposer}} place les faces d'un maillage directement dans le groupe qui l'entoure.

## À savoir

- Double-cliquez sur un maillage pour [modifier ses sommets, arêtes et faces](topic:mesh-edit) dans l'espace de travail Maillage. Convertissez-le en géométrie pour le modifier avec pousser/tirer ; déplacez, faites pivoter, mettez à l'échelle, copiez, peignez, masquez et étiquetez-le comme tout groupe.
- Les exports, l'impression 3D, les rendus et la RV voient un maillage comme ses faces.
- Un fichier qui contient un maillage est enregistré comme une version plus récente du fichier `.modelcraft`, de sorte que ModelCraft 0.6 et les versions antérieures ne peuvent pas l'ouvrir ; les fichiers sans maillage s'y ouvrent comme avant. Convertissez les maillages en géométrie d'abord pour partager un fichier avec quelqu'un qui utilise une version plus ancienne.
- L'annulation sur un maillage ne conserve que ce que chaque étape a modifié, de sorte que même un très grand maillage s'annule rapidement.

Voir aussi [Groupes et composants](topic:groups-components) et [Pas encore disponible](topic:not-built-yet).
