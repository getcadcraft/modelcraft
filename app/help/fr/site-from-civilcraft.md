---
title: Prendre un site depuis CivilCraft
summary: Ouvrez le fichier adresse-vers-site que CivilCraft crée, et ajoutez les bâtiments et la parcelle autour sous forme de volumes et de ligne de site, uniquement ceux que vous cochez.
keywords: site, civilcraft, adresse, parcelle, bâtiments voisins, volumes, contexte, ccsite, données ouvertes, openstreetmap
from: f28e4a3b
---

CivilCraft peut rechercher une adresse et enregistrer ce que les sources de données ouvertes savent autour : bâtiments voisins, parcelle, et contours des zones inondables, de zonage et de sols. ModelCraft lit ce fichier comme des suggestions. Rien n'est ajouté tant que vous ne l'indiquez pas.

## Importer le fichier

1. Dans CivilCraft, envoyez le site à ModelCraft, ou enregistrez le fichier (il se termine par `.ccsite.json`).
2. Dans ModelCraft, ouvrez le fichier ou déposez-le. Une liste s'ouvre avec une case à cocher pour chaque bâtiment et pour la parcelle.
3. Saisissez une hauteur pour les bâtiments dont la source n'en donne pas. Une ligne à côté indique l'origine de leur hauteur : leur nombre de niveaux à 3 m chacun, ou la hauteur que vous avez saisie.
4. Appuyez sur {{ui:Add the ticked ones}}.

Les bâtiments cochés deviennent des volumes extrudés dans un seul composant, et la parcelle devient une ligne autour du site. L'ensemble constitue une seule étape d'annulation. Le point d'adresse se trouve à l'origine, à des mètres à l'est et au nord de celui-ci.

Les contours des zones inondables, de zonage et de sols sont listés à titre d'information seulement ; ils ne sont pas dessinés.

Les données proviennent de sources ouvertes, et leur attribution figure en bas de la liste. Les hauteurs non renseignées sont des hypothèses : vérifiez-les avant de vous y fier.
