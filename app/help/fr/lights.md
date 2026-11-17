---
title: Éclairer un modèle avec des lampes
summary: Placez des lampes, des projecteurs et des panneaux lumineux dans un modèle pour que les images rendues montrent des pièces la nuit ou des intérieurs éclairés, avec des ombres douces.
keywords: lumière, lumières, lampe, lampes, éclairage, ampoule, plafonnier, projecteur, spot encastré, panneau lumineux, lumière surfacique, lumens, luminosité, température de couleur, chaude, nuit, intérieur, rendu
from: c8d72cbc
---

Les lampes éclairent les [images rendues](topic:render). Elles ne modifient pas la vue 3D, où chaque lampe apparaît comme une petite marque dans sa propre couleur.

## Ajouter une lampe

1. Dans la section {{ui:Lumières}} à droite, cliquez sur {{ui:Lampe}}, {{ui:Projecteur}} ou {{ui:Panneau lumineux}}.
2. Cliquez à l'endroit voulu. L'accrochage fonctionne comme pendant le dessin.
   - Sur un plafond ou un mur, une **lampe** pend à 25 cm de la surface, du côté d'où vous regardez ; un **panneau lumineux** est posé sur la surface et éclaire en s'en éloignant.
   - Un **projecteur** demande deux clics : son emplacement, puis ce qu'il éclaire.

La nouvelle lampe est sélectionnée dans {{ui:Lumières}}, prête à être modifiée.

## Modifier une lampe

Cliquez sur le nom d'une lampe dans {{ui:Lumières}}, ou sur sa marque dans la vue avec {{ui:Sélectionner}}. Puis :

| Réglage | Effet |
|---|---|
| {{ui:Luminosité (lumens)}} | Quantité de lumière émise. Une ampoule domestique émet environ 800 lumens ; un panneau de plafond lumineux 3000 |
| {{ui:Couleur}} | {{ui:Chaude}} (une ampoule domestique), {{ui:Neutre}} ou {{ui:Lumière du jour}}, ou une couleur quelconque |
| {{ui:Faisceau (degrés)}} | Le cône d'un projecteur, d'un bord à l'autre |
| {{ui:Taille de l'ampoule}}, {{ui:Largeur}}, {{ui:Profondeur}} | Des ampoules et des panneaux plus grands donnent des ombres plus douces |
| {{ui:Rouge (x)}}, {{ui:Vert (y)}}, {{ui:Hauteur}} | Où elle se trouve |

La case à côté du nom d'une lampe l'allume ou l'éteint. {{ui:Supprimer la lumière}} la retire. Chaque modification correspond à une seule étape : {{key:Ctrl+Z}} l'annule. Les lampes sont enregistrées dans le fichier `.modelcraft`.

## Images de nuit

Dans {{ui:Calculer un rendu…}}, cochez {{ui:Utiliser une autre date et une autre heure pour cette image}} et choisissez une heure du soir. Quand le soleil est couché, le ciel s'assombrit et seules les lampes éclairent le modèle. Augmentez la {{ui:Luminosité}} dans la boîte de dialogue si l'image est trop sombre, ou ajoutez des lampes.

:::tip
Pour une pièce vue de l'intérieur, placez la caméra dans la pièce (orbite et zoom avant, ou une [scène](topic:scenes)), ajoutez une lampe au plafond et calculez le rendu de nuit. En mode {{ui:Rapide}}, les coins éloignés d'une lampe restent plus sombres que sur une photo ; le [mode haute qualité](topic:render#high-quality) laisse la lumière rebondir sur les murs.
:::
