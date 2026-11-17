---
title: Nouveautés de la version 0.9
summary: Étape d'impression avec notre propre trancheur et envoi par USB, Klipper, OctoPrint et PrusaLink, tranchage pour résine et modules complémentaires de fichiers, flux de matières, modules jumeau numérique et atelier, congés NURBS, épaississement et ajustement de scan, AR sur site et dix méthodes d'arc.
keywords: nouveautés, quoi de neuf, notes de version, journal des modifications, 0.9, étape d'impression, impression 3D, envoyer à l'imprimante 3D, trancheur, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, résine, impression résine, goo, sl1, ctb, anycubic, test d'exposition, flux de matières, jumeau numérique, atelier, plc, convoyeur, nurbs, congé, épaissir, ajustement de scan, ar, sur site, méthodes d'arc, unités, 0.8, 0.8.1, version, nouvelles fonctionnalités, moteur de rendu, moteur, ouvrir avec, usd, gltf, unreal, moteur de module complémentaire, surfaces, lissage, balayage, continuité, g0, g1, g2, zébrures, step, iges, dire la scène, scène, météo, moment de la journée, saison, assistant, matériau à partir d'une photo, photo, photo de croquis, meubler, meubler une pièce, biseau, coupe biaise, fractionner, vérification d'impression, problèmes, grille de propriétés, lampes, langues, périphériques de saisie, rangées de barre d'outils, dwg, live
from: 169048a2
---

Voici ce qui a changé dans ModelCraft 0.9, par rapport à la 0.8.1. ModelCraft atteint désormais l'imprimante et l'atelier : vous pouvez poser des objets sur un plateau d'impression et les envoyer sans les exporter, trancher pour filament ou résine, et disposer une ligne de manutention de matières. Il s'agit de CadCraft Studio 0.9 et de ses huit applications ; la plupart des nouveautés ci-dessous sont des modules complémentaires.

## Nouveautés

### Impression 3D

- **Étape d'impression.** Cliquez sur {{ui:Étape d'impression}} dans la barre d'outils. Ajoutez des éléments de la Bibliothèque au plateau de l'imprimante, disposez-les, parcourez les couches tranchées et appuyez sur {{ui:Envoyer à l'imprimante 3D}}, sans STL à exporter. Elle fait partie du module complémentaire 3D Print, activé par défaut, qui peut être retiré comme tout module complémentaire. Voir [Poser des objets sur le plateau d'impression et les envoyer à une imprimante](topic:print-stage).
- **Notre propre trancheur de filament.** {{ui:CadCraft basic (inclus, le plus rapide)}} est le trancheur de la liste **Trancheur** de la carte : parois, peaux, remplissage, supports et jupe, sur un worker pour que la page reste utilisable. {{ui:Aperçu des couches}} avec le curseur **Couche** montre les couches avant l'envoi. Les profils d'imprimante, comme les styles Ender-3 et Prusa MK4, portent leur propre G-code de démarrage.
- **Envoi.** Par USB (Chrome ou Edge sur un ordinateur, avec la page restée ouverte), ou vers Klipper (Moonraker), OctoPrint ou PrusaLink sur votre réseau. Rien ne se connecte ni n'envoie sans un clic, et l'envoi demande d'abord confirmation.
- **Autres trancheurs.** Kiri:Moto, PrusaSlicer et OrcaSlicer sont chacun un module complémentaire, désactivé par défaut ; ajoutez-les depuis la carte ou depuis {{ui:Paramètres}} › {{ui:Modules complémentaires}}. PrusaSlicer et OrcaSlicer utilisent votre propre copie installée depuis CadCraft Studio. Le module des imprimantes Bambu Lab tranche avec votre OrcaSlicer et ses préréglages P2S, et nécessite Studio sur un ordinateur.
- **Impression en résine.** Les modules de résine (désactivés par défaut) créent des images de couches pour l'écran de votre imprimante, avec évidement et trous d'aération, un radeau et des supports, un aperçu des couches, ainsi que le temps, la résine et le coût. Les modules de formats de fichiers écrivent Elegoo GOO, SL1, Chitubox (CBDDLP et CTB 2 à 5) et Anycubic (PWMX et PWS). Un test d'exposition en résine fait une échelle de cinq expositions. Voir [Trancher pour une imprimante à résine](topic:resin-printing).
- **Inchangé.** {{ui:Exporter}} › {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}}, les outils d'impression et la {{ui:Découpe pour l'impression}} fonctionnent comme dans la 0.8. Voir [Préparer un modèle pour l'impression 3D](topic:print-3d).

### Flux de matières, jumeau numérique et atelier

Ces trois éléments sont des modules complémentaires, inactifs tant que vous ne les activez pas dans {{ui:Paramètres}} › {{ui:Modules complémentaires}}, et chacun a sa propre aide une fois activé.

- **Flux de matières.** Un panneau nommé Flux de matières dispose des convoyeurs, postes, tampons et trajets d'AGV dans la vue 3D, lance une simulation à germe, la rejoue, et affiche le débit, les délais et les files d'attente, les résultats étant enregistrés en CSV. Les commandes peuvent provenir d'un fichier CSV. Les cellules robotisées peuvent être vérifiées et exportées. La liaison PLC propose un mode simulé et un mode réel sur Modbus TCP, qui ne fonctionne que dans CadCraft Studio.
- **Jumeau numérique.** Lit la disposition du Flux de matières et exécute un PLC simulé dessus, avec des pannes que vous pouvez forcer, des tests de stock, une comparaison de dispositions et une nomenclature.
- **Atelier.** Transforme les postes en machines et cellules, les lit en direct ou depuis un simulateur, et tient une file de travaux et un TRS simple. Il ne fait que lire : cette version ne peut pas écrire vers une machine ni un PLC.

### Surfaces, modèles et dessin

- **Congés, épaississement et booléens sur NURBS.** Le panneau {{ui:Surfaces}} propose {{ui:Congé entre faces}}, {{ui:Congé de plusieurs arêtes}}, {{ui:Épaissir en solide}} et Union, Soustraction et Intersection, chacun avec son écart mesuré. Voir [Surfaces de forme libre (NURBS)](topic:nurbs-surfaces).
- **Ajuster des surfaces à un scan.** Sélectionnez un maillage scanné et utilisez {{ui:Ajuster des surfaces au scan}} dans le groupe **Scan**, puis {{ui:Assembler les surfaces en solide}}. C'est un premier ajustement, pas un ensemble complet de rétro-ingénierie.
- **Une liaison en direct depuis un modeleur .3dm.** À sens unique, depuis Rhino 8 ou Grasshopper, et qui nécessite CadCraft Studio sur le même ordinateur. Voir [Garder un modèle .3dm en direct](topic:live-3dm-link).
- **Voir le modèle sur site.** {{ui:Voir sur site (AR, téléphone)}} dans le menu {{ui:Vues}} fonctionne sur un téléphone Android avec Chrome. Voir [Voir le modèle sur site avec un téléphone Android (AR)](topic:ar-on-site).
- **Méthodes d'arc.** La liste {{ui:Méthodes d'arc}} propose dix façons de dessiner un arc, dont {{ui:3 points}} et {{ui:Début, Centre, Fin}}.
- **Plus d'unités.** Les masses (kg, lb, t, ton) et les températures (degrés C, F, K et R) sont reconnues là où vous saisissez des valeurs avec unités.

## Dans toutes les applications

- **Info-bulles.** Le texte d'aide au survol des boutons et les libellés tronqués s'affichent dans une info-bulle Bootstrap.
- **Astuce de départ refermable.** La carte d'astuce sur une zone de dessin vide a une petite croix de fermeture. Elle reste fermée, et la palette de commandes peut la faire réapparaître.
- **Bandes d'onglets défilantes.** La bande d'onglets d'un panneau qui ne tient pas défile au lieu d'être coupée.
- **Titres d'onglets.** Lorsqu'un document est ouvert, l'onglet du navigateur commence par le nom du document, puis ModelCraft et CadCraft. Un point apparaît en premier tant qu'il n'est pas enregistré.
- **Disposition.** {{ui:Paramètres}} › {{ui:Général}} › Disposition regroupe les dispositions dans une liste déroulante, avec un choix pour n'utiliser une disposition que pour cette application et un bouton pour la réinitialiser.
- **Langues.** La liste des langues dans les Paramètres suit les fichiers de langue que contient la version. Les langues autres que l'anglais sont des brouillons traduits par machine.
- **Live et Bibliothèque.** Live TeamWork affiche les curseurs et les noms en direct, et les collections de la Bibliothèque donnent à chaque application une collection par défaut.

## Corrigé

- {{ui:Lecture}} devient {{ui:Pause}} pendant qu'une animation se joue, et {{key:Space}} lance et met en pause pendant que la chronologie est ouverte.
- Le rendu fixe revient à WebGL lorsque la carte graphique ne peut pas démarrer le path tracer. La vue de rendu en direct peut encore afficher l'erreur ; cela n'a pas été vérifié sur une machine Windows avec ce pilote.
- La liaison réelle de Flux de matières se reconnecte à nouveau après une fin de liaison sur des réponses d'exception PLC.

## Limites honnêtes

- Rien n'a été imprimé sur une vraie imprimante : ni filament, ni résine, ni via Bambu Connect. Les fichiers de résine n'ont été relus que par les lecteurs propres à CadCraft.
- Le jumeau numérique et l'atelier n'ont été testés que contre des simulateurs et des réponses connues, sans vrai PLC, vraie ligne ni vrai protocole. Ce sont des aides à la vérification, pas une validation de sécurité. La physique ne couvre que les boîtes, jusqu'à huit charges.
- La liaison Rhino et Grasshopper n'a jamais tourné dans les vrais programmes.
- Les langues autres que l'anglais sont des brouillons traduits par machine.

## Plus tôt : 0.8 et 0.8.1

Voici ce qui a changé dans ModelCraft 0.8 (2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. La boîte de dialogue {{ui:Calculer un rendu…}} peut désormais envoyer la scène vers un autre programme, le panneau Surfaces crée des surfaces lisses de forme libre, et un assistant connecté peut mettre en place une scène entière à partir d'une seule phrase.

### Nouveautés

**Rendu**

- **Un choix de moteur.** La boîte {{ui:Calculer un rendu…}} a une liste **Moteur** au-dessus du Mode. Nos deux moteurs, Rapide et le Path tracer, sont la valeur par défaut et fonctionnent partout. Les autres entrées enregistrent la scène sous forme de paquet (le modèle en fichier USD, plus un fichier de réglages avec les valeurs exactes des matériaux, les lampes allumées, le soleil, le ciel, l'exposition et la caméra) à emporter vers un autre programme. Une image dessinée par un autre programme indique le programme et la version qui l'ont produite. Voir [Choisir le programme qui dessine l'image](topic:render-engines).
- **Ouvrir dans un autre programme.** La liste Moteur peut enregistrer la scène en fichier USD, en fichier glTF (`.glb`) ou en dossier de projet Unreal (`.zip`), dans le navigateur comme dans CadCraft Studio. Dans Studio, elle peut aussi lancer usdview ou le programme de l'ordinateur pour le fichier. Voir [Ouvrir la scène dans un autre programme](topic:render-open-in).
- **Envoyer vers un moteur de jeu depuis Studio.** Studio écrit la scène dans un projet Unreal Engine et la tient à jour à chaque envoi, à sens unique seulement. Vos propres modifications vivent dans un calque que CadCraft n'écrit jamais. Voir [Envoyer la scène vers un moteur de jeu](topic:render-unreal).
- **Moteurs issus de modules complémentaires.** Un module peut ajouter un moteur à la liste. Un moteur écrit en JavaScript dessine dans le navigateur et dans Studio ; un moteur qui lance un programme nécessite votre accord dans Studio. Voir [Dessiner l'image avec un autre programme](topic:render-other-program) et [Ajouter un moteur de rendu avec un module complémentaire](topic:render-engine-addons).
- **Dire la scène.** Dites à votre assistant connecté « crépuscule, pluie légère, arbres d'automne, des gens sur la place » et ModelCraft met tout en place en une seule étape : le soleil se place à la date et à l'heure pour que les ombres suivent, le ciel change, des surfaces mouillées apparaissent, et arbres et personnes sont posés comme de vrais objets sur des étiquettes que vous pouvez masquer, déplacer ou supprimer. Le moment de la journée, la date ou la saison, et la météo (dégagé, couvert, brouillard, pluie légère, pluie, orage) fonctionnent aussi seuls, et une demande ultérieure modifie la même scène. Le brouillard apparaît dans l'image haute qualité sur la carte graphique ; les autres moteurs montrent le ciel, la lumière et les surfaces mouillées. La pluie n'est pas dessinée sous forme de traînées tombantes.

**Matériaux**

- **Un matériau à partir d'une photo.** Donnez à ModelCraft une photo d'une surface (un mur, un sol, de la pierre) et il en fait un matériau répétable : l'éclairage à travers la photo est aplani, les bords sont rendus raccordables, et une carte de couleur, une carte de rugosité et une carte de normales sont calculées à partir de l'image. C'est un simple traitement d'image sur votre propre photo, sans modèle entraîné. La rugosité est une estimation. Une photo nette, carrée et de face donne la meilleure tuile ; un motif marqué, comme des briques, peut laisser un léger fantôme à l'endroit de la jointure, qui est fondue.

**Surfaces**

- **Surfaces de forme libre.** Le panneau {{ui:Surfaces}} crée des courbes NURBS et des surfaces non découpées : courbes passant par des points, lissage, réglée, extrusion, révolution, balayages le long d'un ou deux rails, surfaces à partir d'un réseau de courbes, pièces à partir de quatre arêtes, raccord et fusion. Chaque arête commune est mesurée en G0, G1 ou G2 (écart, angle, saut de courbure) sur les surfaces exactes, et une arête moins bonne que demandé apparaît dans le panneau Problèmes avec une correction **Raccorder**. Les zébrures et les couleurs de courbure sont dessinées à partir des surfaces exactes. Les fichiers STEP et IGES sortent et entrent. Voir [Surfaces de forme libre (NURBS)](topic:nurbs-surfaces).

**Site et pièces**

- **Une photo de croquis sur le sol.** {{ui:Fichier}} › {{ui:Importer une photo de croquis…}} transforme une photo prise avec un téléphone d'un croquis à la main en arêtes sur le sol, à l'échelle que vous indiquez : un groupe, avec une étiquette pour chaque couleur de stylo. La feuille est repérée et redressée sur votre ordinateur, et rien n'est envoyé nulle part. Voir [Modéliser sur un plan de site](topic:site-plan).
- **Meubler une pièce.** Sélectionnez un sol et utilisez {{ui:Organiser}} › {{ui:Meubler une pièce…}}. Le mobilier de chambre, de salon, de salle à manger, de cuisine, de salle de bains ou de bureau est placé selon des règles, le long des murs et à l'écart des portes et fenêtres, dans un seul groupe que vous pouvez retirer en une étape. C'est une disposition par défaut à relire, pas un projet. Voir [Bibliothèque de départ](topic:starter).

**Impression 3D**

- **Coupes biaises.** La découpe pour l'impression peut incliner ses coupes jusqu'à 60 degrés, ce qui donne aux pièces plus de surface de collage. Les connecteurs restent perpendiculaires à la coupe. Voir [Découper un modèle pour l'impression](topic:print-split).
- **La vérification d'impression dans Problèmes.** Les constats de la vérification d'impression 3D s'affichent dans le panneau Problèmes avec des repères sur le modèle, et Réparation les corrige depuis là. Voir [Supports, épaisseur de paroi, évidement et réparation](topic:print-tools).

**Dans toutes les applications**

- **Langues.** L'aide et les applications sont disponibles en 54 langues. Dix sont nouvelles : lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, philippin, swahili et ouzbek. Les langues autres que l'anglais sont des brouillons traduits par machine jusqu'à relecture par un locuteur natif, et les rubriques d'aide peuvent rester en anglais.
- **Périphériques de saisie.** Un pavé tactile, un stylet, une souris 3D, une manette de jeu et des commandes MIDI peuvent piloter les applications, pour toutes ou pour une seule.
- **Rangées de barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › Rangées de barre d'outils règle Retour à la ligne (comme avant), 2 rangées ou 1 rangée. Une barre qui ne tient pas défile latéralement au lieu de prendre de la place au dessin. Le retour à la ligne reste la valeur par défaut.
- **Grille de propriétés.** Les champs de lampe de ModelCraft utilisent la grille commune : catégories repliables, colonnes d'intitulé et de valeur, et densité Compacte. Les calculs saisis, comme `2*450`, continuent de fonctionner.
- **Problèmes.** Le panneau Problèmes (le bouton d'avertissement de la barre d'application) est commun à toutes les applications. Dans ModelCraft, il contient la vérification d'impression et les avertissements de continuité des surfaces.
- **Live.** Une session Live TeamWork montre qui est où. Voir [Modéliser à plusieurs avec Live TeamWork](topic:work-live).
- **Modules complémentaires.** Les modules complémentaires peuvent ajouter des moteurs de rendu, comme ci-dessus.
- **Connectez votre IA.** Le contrat d'outils et les contrôles des huit applications passent, avec 454 outils au total. Une connexion en un clic dans Studio, un connecteur hébergé pour les assistants du navigateur, votre propre clé dans Studio et un paquet publié ne sont pas encore promis. Les applications ne contiennent aucune IA propre. Voir [Utiliser ModelCraft avec des assistants IA](topic:use-with-ai-assistants).

### Corrigé dans 0.8.1

- **Section des classes DWG.** La section des classes d'un fichier DWG était lue avec le mauvais type, ce qui pouvait casser le fichier à l'import. Elle est lue correctement désormais, dans ModelCraft comme dans les autres applications qui lisent le DWG.
- **Tablettes en portrait.** La hauteur de grille disponible va à la zone de dessin, et la mise en page de feuille commence à 760 pixels de large ou moins. La feuille de style de ModelCraft contient aussi ce changement.
- **Langue dans Studio.** CadCraft Studio et les éditions empaquetées peuvent changer de langue pendant leur exécution ; auparavant, elles n'étaient qu'en anglais. Ceci n'a pas encore été testé sur toutes les plateformes : dites-nous si la langue ne change pas.

### Pas encore dans cette version

- **Non signée numériquement.** Windows peut afficher SmartScreen : choisissez {{ui:Informations complémentaires}}, puis {{ui:Exécuter quand même}}. Sur un Mac, faites un clic droit et choisissez {{ui:Ouvrir}}. Les versions pour boutiques sont en attente, et la version iPad et iPhone n'a pas été recompilée pour la 0.8.1.
- Un autre programme dessinant l'image sans module de moteur de rendu, les caméras panoramiques ou stéréo, et une image de ciel passant par un autre programme ne sont pas encore là, ni le module qui ouvre la scène Unreal. Les fichiers sont écrits ; le module n'est pas publié et n'a pas été exécuté dans Unreal.
- Surfaces de forme libre : G3 et classe A ne sont ni mesurées ni garanties, et le découpage et les solides viendront plus tard.
- Les images issues d'autres programmes ne sont pas identiques pixel par pixel aux nôtres : seuls la caméra, le soleil, les lampes et l'exposition concordent.
- La correction de 0.8.1 pour le changement de langue dans Studio n'est pas testée sur toutes les plateformes.

Tout le reste figure dans [Pas encore disponible](topic:not-built-yet). Pour la version précédente, voir [Nouveautés de la version 0.7](topic:whats-new-0-7).
