---
title: Suivez-moi : balayer une face le long d'un tracé
summary: Créer des tubes, des câbles, des mains courantes, des moulures et des anneaux en balayant une face le long d'arêtes, d'arcs ou d'une courbe.
keywords: suivez-moi, balayage, tracé, tuyau, câble, tube, main courante, moulure, gouttière, anneau, tore, révolution, extruder le long de
from: ec7b3839
---

{{ui:Suivez-moi}} déplace une face le long d'un tracé et construit le solide qu'elle traverse. La face garde sa forme et reste d'équerre par rapport au tracé, et à chaque angle du tracé, les pièces se rejoignent par un onglet propre.

## Créer un câble

1. Dessinez le tracé : une {{ui:Courbe}} qui passe par les points que suit le câble (elle peut monter et descendre), ou des {{ui:Ligne}}s et des {{ui:Arc}}s reliés bout à bout.
2. Au début du tracé, dessinez la section du câble : un petit {{ui:Cercle}} perpendiculaire au tracé. Commencez le cercle au point d'extrémité du tracé et faites-le pivoter pour qu'il soit orienté le long du tracé ; ou dessinez-le sur une face qui croise le tracé à cet endroit.
3. Sélectionnez le tracé (un clic sélectionne une courbe ou un arc entier ; {{key:Ctrl}}+clic ajoute d'autres arêtes).
4. Cliquez sur {{ui:Suivez-moi}} dans le groupe {{ui:Modifier}}, puis cliquez sur le cercle.

Le tube est un solide fermé, aux côtés adoucis.

## Sans sélectionner d'abord le tracé

Cliquez sur {{ui:Suivez-moi}}, cliquez sur la face, puis cliquez sur n'importe quelle arête du tracé. Le tracé est la chaîne d'arêtes reliées à cette arête, jusqu'à l'endroit où trois arêtes ou plus se rejoignent.

## À savoir

- **Tracés fermés** (un cercle, une courbe fermée, le contour d'un rectangle) forment un anneau : la face est consommée et l'anneau se referme sur lui-même. Dessinez un cercle sur le sol pour le tracé, et un petit cercle dressé en travers pour un tore.
- **Hors du tracé :** la face n'a pas besoin de toucher le tracé. Un profil dessiné à côté d'un tracé le balaie en restant à côté, comme une moulure le long du haut d'un mur.
- **Le tracé ne doit pas se ramifier**, et doit former une seule chaîne connectée. ModelCraft le signale lorsque ce n'est pas le cas.
- **Une face couchée le long du tracé** (dans le même plan que la première arête du tracé) ne peut pas être balayée : tournez-la pour qu'elle croise le tracé.
- C'est une seule étape d'annulation.
