---
title: Nouveautés des versions 0.8 et 0.8.1
summary: Un choix de moteur de rendu avec des fichiers pour d'autres programmes, des surfaces libres NURBS à continuité mesurée, une scène que vous décrivez à votre assistant, un matériau créé à partir d'une seule photo, une photo de croquis posée sur le sol, des pièces meublées, des coupes inclinées pour l'impression 3D et la vérification d'impression dans le panneau Problèmes.
keywords: nouveautés, quoi de neuf, notes de version, journal des modifications, modifications, 0.8, 0.8.1, version, nouvelles fonctionnalités, moteur de rendu, moteur, ouvrir dans, usd, gltf, unreal, moteur de module complémentaire, nurbs, surfaces, lissage, balayage, continuité, g0, g1, g2, zébrures, step, iges, décrire la scène, scène, météo, moment de la journée, saison, assistant, matériau à partir d'une photo, photo, photo de croquis, meubler, meubler une pièce, coupe inclinée, scinder, vérification d'impression, problèmes, grille de propriétés, lampes, langues, périphériques de saisie, rangées de barre d'outils, dwg, live
from: e4989b17
---

Voici ce qui a changé dans ModelCraft 0.8 (2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. La boîte de dialogue {{ui:Calculer un rendu…}} peut maintenant envoyer la scène vers un autre programme, le panneau {{ui:Surfaces}} crée des surfaces libres lisses, et un assistant que vous connectez peut mettre en place une scène entière à partir d'une seule phrase.

## Nouveautés

### Rendu

- **Un choix de moteur.** {{ui:Calculer un rendu…}} comporte une liste **Moteur** au-dessus de Mode. Nos deux moteurs, Rapide et le Traceur de chemin, sont ceux par défaut et fonctionnent partout. Les autres entrées enregistrent la scène sous forme de paquet (le modèle en fichier USD, plus un fichier de réglages contenant les valeurs exactes des matériaux, les lampes allumées, le soleil, le ciel, l'exposition et la caméra) à ouvrir dans un autre programme. Une image produite par un autre programme indique le programme et la version qui l'ont créée. Voir [Choisir le programme qui calcule l'image](topic:render-engines).
- **Ouvrir dans un autre programme.** La liste Moteur peut enregistrer la scène en fichier USD, en fichier glTF (`.glb`) ou en dossier de projet Unreal (`.zip`), dans le navigateur et dans CadCraft Studio. Dans Studio, elle peut aussi lancer usdview ou le programme par défaut de l'ordinateur pour ce fichier. Voir [Ouvrir la scène dans un autre programme](topic:render-open-in).
- **Envoyer vers un moteur de jeu depuis Studio.** Studio écrit la scène dans un projet Unreal Engine et la tient à jour à chaque envoi, dans un seul sens. Vos propres modifications sont dans un calque que CadCraft n'écrit jamais. Voir [Envoyer la scène vers un moteur de jeu](topic:render-unreal).
- **Moteurs issus de modules complémentaires.** Un module complémentaire peut ajouter un moteur à la liste. Un moteur écrit en JavaScript dessine dans le navigateur et dans Studio ; un moteur qui lance un programme demande votre accord dans Studio. Voir [Dessiner l'image avec un autre programme](topic:render-other-program) et [Ajouter un moteur de rendu avec un module complémentaire](topic:render-engine-addons).
- **Décrire la scène.** Dites à votre assistant connecté « crépuscule, pluie légère, arbres d'automne, des gens sur la place », et ModelCraft met tout en place en une seule étape : le soleil se déplace à la date et à l'heure voulues pour que les ombres suivent, le ciel change, des surfaces mouillées apparaissent, et les arbres et les personnes sont placés comme de vrais objets, sur des repères que vous pouvez masquer, déplacer ou supprimer. L'heure de la journée, la date ou la saison, ainsi que la météo (dégagé, couvert, brouillard, pluie légère, pluie, orage), fonctionnent aussi seuls, et une demande ultérieure modifie la même scène. Le brouillard apparaît dans l'image de haute qualité calculée par la carte graphique ; les autres moteurs montrent le ciel, la lumière et les surfaces mouillées. La pluie n'est pas dessinée sous forme de traînées.

### Matériaux

- **Un matériau à partir d'une seule photo.** Donnez à ModelCraft une photo d'une surface (un mur, un sol, de la pierre) : il crée un matériau répétable. L'éclairage de la photo est uniformisé, les bords sont raccordés pour se joindre, et une carte de couleur, une carte de rugosité et une carte de normales sont calculées à partir de l'image. Il s'agit d'un simple traitement d'image de votre propre photo, sans modèle entraîné. La rugosité est une estimation. Une photo simple, carrée et prise de face donne le meilleur résultat ; un motif marqué, comme des briques, peut laisser un léger fantôme à l'endroit où la jointure est fondue.

### Surfaces

- **Surfaces libres.** Le panneau {{ui:Surfaces}} crée des courbes et des surfaces NURBS non découpées : courbes passant par des points, lissage, surfaces réglées, extrusion, révolution, balayages le long d'un ou de deux rails, surfaces à partir d'un réseau de courbes, carreaux à partir de quatre arêtes, raccord et fusion. Chaque arête commune est mesurée en G0, G1 ou G2 (écart, angle, saut de courbure) sur les surfaces exactes, et une arête moins bonne que vous ne l'avez demandé apparaît dans le panneau Problèmes avec une correction **Raccorder**. Les zébrures et les couleurs de courbure sont tracées à partir des surfaces exactes. Les fichiers STEP et IGES sont exportés et importés. Voir [Surfaces libres (NURBS)](topic:nurbs-surfaces).

### Site et pièces

- **Une photo de croquis posée sur le sol.** {{ui:Fichier}} › {{ui:Importer une photo de croquis…}} transforme une photo prise avec un téléphone d'un croquis à main levée en arêtes posées sur le sol, à l'échelle que vous indiquez : un seul groupe, avec un repère pour chaque couleur de stylo. La feuille est repérée et redressée sur votre ordinateur, et rien n'est envoyé ailleurs. Voir [Modéliser sur un plan de site](topic:site-plan).
- **Meubler une pièce.** Sélectionnez un sol, puis utilisez {{ui:Organiser}} › {{ui:Meubler une pièce…}}. Le mobilier de chambre, de salon, de salle à manger, de cuisine, de salle de bains ou de bureau est placé selon des règles, le long des murs et à l'écart des portes et fenêtres, dans un groupe unique que vous pouvez retirer en une seule étape. Il s'agit d'une disposition par défaut à examiner, et non d'un projet. Voir [Bibliothèque de démarrage](topic:starter).

### Impression 3D

- **Coupes inclinées.** Scinder pour l'impression peut incliner ses coupes jusqu'à 60 degrés, ce qui donne aux pièces une plus grande surface de collage. Les connecteurs restent perpendiculaires à la coupe. Voir [Scinder un modèle pour l'impression](topic:print-split).
- **La vérification d'impression dans Problèmes.** Les constats de la vérification d'impression 3D s'affichent dans le panneau Problèmes, avec des repères sur le modèle, et Réparer les corrige depuis ce panneau. Voir [Supports, épaisseur de paroi, évidement et réparation](topic:print-tools).

### Dans toutes les applications

- **Langues.** L'aide et les applications existent en 54 langues. Dix sont nouvelles : lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili et ouzbek. Les langues autres que l'anglais sont des brouillons issus de la traduction automatique tant qu'un locuteur natif ne les a pas relues, et certaines rubriques d'aide peuvent encore être en anglais.
- **Périphériques de saisie.** Un pavé tactile, un stylet, une souris 3D, une manette de jeu et des commandes MIDI peuvent piloter les applications, pour toutes ou pour une seule.
- **Rangées de barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › Rangées de barre d'outils règle Retour à la ligne (comme avant), 2 rangées ou 1 rangée. Une barre qui ne tient pas défile latéralement au lieu de prendre de la place sur le dessin. Le retour à la ligne reste la valeur par défaut.
- **Grille de propriétés.** Les champs des lampes de ModelCraft utilisent la grille commune : catégories repliables, colonnes d'étiquette et de valeur, et densité Compacte. Les calculs saisis, comme `2*450`, fonctionnent toujours.
- **Problèmes.** Le panneau Problèmes (le bouton d'avertissement de la barre d'application) est commun à toutes les applications. Dans ModelCraft, il contient la vérification d'impression et les avertissements de continuité des surfaces.
- **Live.** Une session Live TeamWork indique qui se trouve où. Voir [Modéliser à plusieurs avec Live TeamWork](topic:work-live).
- **Modules complémentaires.** Les modules complémentaires peuvent ajouter des moteurs de rendu, comme indiqué plus haut.
- **Connecter votre IA.** Le contrat des outils et les vérifications des huit applications sont passés, avec 454 outils au total. Une connexion en un clic dans Studio, un connecteur hébergé pour les assistants du navigateur, votre propre clé dans Studio et un paquet publié ne sont pas encore prévus. Les applications ne contiennent aucune IA. Voir [Utiliser ModelCraft avec des assistants IA](topic:use-with-ai-assistants).

## Corrections dans la 0.8.1

- **Section des classes DWG.** La section des classes d'un fichier DWG était lue avec un mauvais type, ce qui pouvait casser le fichier à l'importation. Elle est lue correctement désormais, dans ModelCraft et dans les autres applications qui lisent le DWG.
- **Tablettes en portrait.** La hauteur libre de la grille est attribuée à la zone de dessin, et la mise en page de la feuille commence à partir de 760 pixels de large ou moins. La feuille de style de ModelCraft contient aussi cette modification.
- **Langue dans Studio.** CadCraft Studio et les éditions empaquetées peuvent changer de langue pendant leur exécution ; auparavant, elles n'étaient qu'en anglais. Ce point n'a pas encore été testé sur toutes les plateformes : dites-nous si la langue ne change pas.

## Pas encore disponible dans cette version

- **Non signé par code.** Windows peut afficher SmartScreen : choisissez {{ui:Plus d'infos}}, puis {{ui:Exécuter quand même}}. Sur Mac, cliquez avec le bouton droit et choisissez {{ui:Ouvrir}}. Les versions pour les magasins d'applications sont suspendues, et la version iPad et iPhone n'a pas été recompilée pour la 0.8.1.
- Un autre programme qui dessine l'image sans module complémentaire de moteur de rendu, les caméras panoramiques ou stéréoscopiques, et une image de ciel rendue par un autre programme, ainsi que le module d'extension qui ouvre la scène Unreal, ne sont pas encore disponibles. Les fichiers sont écrits ; le module d'extension n'est pas publié et n'a pas été exécuté dans Unreal.
- Surfaces libres : G3 et classe A ne sont ni mesurées ni revendiquées, et le découpage et les solides viendront plus tard.
- Les images issues d'autres programmes ne sont pas identiques pixel par pixel aux nôtres : seuls la caméra, le soleil, les lampes et l'exposition concordent.
- La correction de 0.8.1 pour le changement de langue dans Studio n'est pas testée sur toutes les plateformes.

Tout le reste figure dans [Pas encore disponible](topic:not-built-yet). Pour la version précédente, voir [Nouveautés de la 0.7](topic:whats-new-0-7).
