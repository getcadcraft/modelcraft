---
title: Garder un modèle .3dm en direct
summary: Modifiez un modèle dans le logiciel qui l'a créé et voyez-le changer ici, depuis Rhino 8 ou une définition Grasshopper, sans enregistrer ni réimporter.
keywords: rhino, grasshopper, liaison Live, connexion Live, 3dm, nurbs, paramétrique, liaison, synchronisation, script, modèle de référence, pousser
from: 331b0a7e
---

Continuez à modéliser là où vous modélisez et utilisez le résultat ici : pour le calculer, l'éclairer ou composer une scène autour. Chaque modification dans l'autre logiciel met à jour un groupe dans ModelCraft.

:::note
La liaison nécessite **CadCraft Studio** sur le même ordinateur. Un onglet de navigateur ne peut pas établir la connexion. Rien ne transite par Internet : le script communique avec Studio à l'adresse propre à cet ordinateur, avec un jeton.
:::

:::warning
Cette liaison a été testée avec l'écrivain de fichiers du script et un substitut de l'autre logiciel, mais pas encore dans Rhino ou Grasshopper eux-mêmes. Si quelque chose échoue là-bas, dites-nous ce qui s'est affiché.
:::

## Configurer

1. Dans Studio, ouvrez ModelCraft. Dans {{ui:Paramètres}} › {{ui:ModelCraft}} › {{ui:Assistants}}, cochez **Laisser les assistants IA et les scripts utiliser ModelCraft**, puis cliquez sur **Modifier**.
2. Dans Studio, choisissez {{ui:Connecter un assistant}}. Il affiche l'adresse et le jeton à coller ci-dessous.
3. Téléchargez le script : [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Depuis Rhino

1. Exécutez `cadcraft_link.py` dans l'éditeur de scripts de Rhino (Python 3 dans Rhino 8).
2. La première fois, collez l'adresse et le jeton. Ils sont conservés dans `.cadcraft-link.json` dans votre dossier personnel, jamais dans le modèle. Studio crée un nouveau jeton à chaque démarrage : le script le redemande alors.

Le modèle entier arrive sous la forme d'un seul groupe portant le nom du document, par exemple « chaise (liée) ». Ensuite, chaque modification arrive dès que vous marquez une courte pause, et seuls les objets modifiés sont envoyés. Relancez le script pour arrêter.

## Depuis Grasshopper

Exécutez d'abord le script une fois dans Rhino, pour enregistrer l'adresse et le jeton.

1. Ajoutez un composant Script (Python 3) et collez-y l'intégralité de `cadcraft_link.py`.
2. Donnez-lui ces entrées : `G` (la géométrie, avec accès aux listes), `N` (un nom, facultatif), `On` (un interrupteur booléen) et `Target` (facultatif : `model` ou `part`, si les deux applications sont ouvertes).
3. Passez `On` à vrai.

Chaque calcul envoie `G` et remplace ce qui avait été envoyé la fois précédente, de sorte que faire glisser un curseur met à jour le groupe ici. Sa sortie `a` indique ce qui s'est passé. Chaque composant a son propre groupe.

## Ce que vous pouvez faire avec le groupe

- **Déplacez-le, étiquetez-le, construisez autour.** L'emplacement du groupe et son étiquette restent d'une mise à jour à l'autre, de même que tout ce qui se trouve à côté.
- **Ne modifiez pas son contenu.** Chaque mise à jour remplace ce qui se trouve à l'intérieur du groupe. Ces objets appartiennent à l'autre logiciel.
- **Annuler.** Les mises à jour espacées de moins de deux secondes partagent une seule étape d'annulation : {{key:Mod+Z}} annule donc un glissement complet. La mise à jour suivante remet le modèle en accord.
- **Enregistrer.** Le fichier enregistré conserve la liaison. Relancez le script après la réouverture, et le même groupe se met à jour.

## Ce qui est transmis

Maillages, polysurfaces, surfaces et extrusions sous la forme du maillage visible à l'écran, SubD sous la forme de son maillage, courbes sous forme d'arêtes, blocs comme objets séparés à leur emplacement (et non comme composants), calques sous forme d'étiquettes, couleurs et unités. Voir [Importer un fichier .3dm](topic:import-3dm-files) pour savoir comment ils apparaissent ici.

Non transmis, avec un décompte dans l'autre logiciel : points, textes, cotes, lumières et éléments similaires.

**Sens unique.** Les modifications faites ici ne reviennent pas dans l'autre logiciel.

## En cas de problème

- **« Aucune fenêtre ModelCraft ou PartCraft ne l'autorise » :** effectuez l'étape 1 de la configuration.
- **« Studio a refusé le jeton » :** Studio a redémarré. Copiez le nouveau jeton et relancez le script. Pour Grasshopper, exécutez-le d'abord dans Rhino.
- **« Impossible de joindre CadCraft Studio » :** Studio n'est pas lancé, ou l'adresse a changé.
