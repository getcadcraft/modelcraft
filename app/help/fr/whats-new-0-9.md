---
title: Nouveautés de la version 0.9 (précédentes)
summary: Étape d'impression avec notre propre trancheur et envoi par USB, Klipper, OctoPrint et PrusaLink, tranchage résine et modules de format de fichier, flux de matières, modules de jumeau numérique et d'atelier de production, congés NURBS, épaississement et ajustement au scan, AR sur chantier et dix méthodes d'arc.
keywords: nouveautés 0.9, version précédente, nouveautés, quoi de neuf, notes de version, journal des modifications, 0.9, étape d'impression, impression 3D, envoyer à une imprimante 3D, trancheur, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, résine, impression résine, goo, sl1, ctb, anycubic, test d'exposition, flux de matières, jumeau numérique, atelier de production, plc, convoyeur, nurbs, congé, épaissir, ajustement au scan, ar, sur chantier, méthodes d'arc, unités, modifications, 0.8, 0.8.1, version, nouvelles fonctionnalités, moteur de rendu, moteur, ouvrir dans, usd, gltf, unreal, moteur des modules, surfaces, lissage, balayage, continuité, g0, g1, g2, zebra, step, iges, dire la scène, scène, météo, moment de la journée, saison, assistant, matériau à partir d'une photo, photo, photo de croquis, meubler, meubler une pièce, pente, coupe oblique, scinder, contrôle d'impression, problèmes, grille des propriétés, lampes, langues, périphériques de saisie, lignes de barre d'outils, dwg, live
from: 2717d1b1
---

Voici ce qui a changé dans ModelCraft 0.9, par rapport à la 0.8.1. ModelCraft atteint désormais l'imprimante et l'atelier de production : vous pouvez placer des éléments sur un plateau d'impression et les envoyer sans exporter, trancher pour le filament ou la résine, et disposer une ligne de manutention de matières. Il s'agit de CadCraft Studio 0.9 et de ses huit applications ; la plupart des nouvelles fonctionnalités ci-dessous sont des modules complémentaires.

## Nouveautés

### Impression 3D

- **Étape d'impression.** Cliquez sur {{ui:Étape d'impression}} dans la barre d'outils. Ajoutez des éléments de bibliothèque sur le plateau de l'imprimante, disposez-les, parcourez les couches tranchées et appuyez sur {{ui:Envoyer à l'imprimante 3D}}, sans avoir de STL à exporter. Cela relève du module complémentaire Impression 3D, activé par défaut, qui peut être retiré comme tout module complémentaire. Voir [Placer des éléments sur le plateau d'impression et les envoyer à une imprimante](topic:print-stage).
- **Notre propre trancheur filament.** {{ui:CadCraft basic (inclus, le plus rapide)}} est le trancheur de la liste **Trancheur** de la carte : parois, peaux, remplissage, supports et jupe, sur un worker afin que la page reste utilisable. {{ui:Aperçu des couches}} avec le curseur **Couche** affiche les couches avant l'envoi. Les profils d'imprimante, comme les styles Ender-3 et Prusa MK4, portent leur propre G-code de démarrage.
- **Envoi.** Par USB (Chrome ou Edge sur un ordinateur, avec la page restée ouverte), ou vers Klipper (Moonraker), OctoPrint ou PrusaLink sur votre réseau. Rien ne se connecte ni n'envoie sans un clic, et l'envoi demande d'abord confirmation.
- **Autres trancheurs.** Kiri:Moto, PrusaSlicer et OrcaSlicer sont des modules complémentaires à part entière, désactivés par défaut ; ajoutez-les depuis la carte ou depuis {{ui:Paramètres}} › {{ui:Modules complémentaires}}. PrusaSlicer et OrcaSlicer utilisent votre copie installée depuis CadCraft Studio. Le module pour les imprimantes Bambu Lab tranche avec votre OrcaSlicer et ses préréglages P2S, et nécessite Studio sur un ordinateur.
- **Impression résine.** Les modules résine (désactivés par défaut) produisent des images de couches pour l'écran de votre imprimante, avec creusage et trous d'évent, radeau et supports, aperçu des couches, ainsi que la durée, la résine et le coût. Les modules de format de fichier écrivent Elegoo GOO, SL1, Chitubox (CBDDLP et CTB 2 à 5) et Anycubic (PWMX et PWS). Un test d'exposition de la résine produit une échelle de cinq expositions. Voir [Trancher pour une imprimante à résine](topic:resin-printing).
- **Inchangé.** {{ui:Exporter}} › {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}}, les outils d'impression et Scinder pour l'impression fonctionnent comme dans la version 0.8. Voir [Préparer un modèle pour l'impression 3D](topic:print-3d).

### Flux de matières, Jumeau numérique et Atelier de production

Ces trois éléments sont des modules complémentaires, désactivés jusqu'à ce que vous les activiez dans {{ui:Paramètres}} › {{ui:Modules complémentaires}}, et chacun dispose de sa propre aide une fois activé.

- **Flux de matières.** Un panneau nommé Flux de matières dispose des convoyeurs, des stations, des tampons et des trajets AGV dans la vue 3D, lance une simulation à germe fixe, la rejoue, et affiche le débit, les délais et les files d'attente, avec les résultats enregistrés en CSV. Les commandes peuvent provenir d'un fichier CSV. Les cellules robotisées peuvent être vérifiées et exportées. La liaison PLC propose un mode logiciel et un mode réel sur Modbus TCP, qui ne fonctionne que dans CadCraft Studio.
- **Jumeau numérique.** Lit la disposition du Flux de matières et y exécute un PLC logiciel, avec des pannes que vous pouvez forcer, des tests de stock, une comparaison de disposition et une nomenclature.
- **Atelier de production.** Transforme les stations en machines et en cellules, les lit en direct ou depuis un simulateur, et tient une file de travaux ainsi qu'un TRS simple. Il ne fait que lire : cette version ne peut pas écrire vers une machine ni vers un PLC.

### Surfaces, modèles et dessin

- **Congés, épaississement et opérations booléennes sur NURBS.** Le panneau {{ui:Surfaces}} propose {{ui:Congé entre faces}}, {{ui:Congé de plusieurs arêtes}}, {{ui:Épaissir en solide}} ainsi que Union, Soustraction et Intersection, chacun avec son écart mesuré. Voir [Surfaces libres (NURBS)](topic:nurbs-surfaces).
- **Ajuster des surfaces à un scan.** Sélectionnez un maillage scanné et utilisez {{ui:Ajuster des surfaces au scan}} dans le groupe **Scan**, puis {{ui:Assembler les surfaces en solide}}. Il s'agit d'un premier ajustement, et non d'un logiciel complet de rétro-ingénierie.
- **Une liaison en direct depuis un modeleur .3dm.** Dans un seul sens, depuis Rhino 8 ou Grasshopper, et elle nécessite CadCraft Studio sur le même ordinateur. Voir [Garder un modèle .3dm en direct](topic:live-3dm-link).
- **Voir le modèle sur chantier.** {{ui:Vue sur chantier (RA, téléphone)}} dans le menu {{ui:Vues}} fonctionne sur un téléphone Android avec Chrome. Voir [Voir le modèle sur chantier avec un téléphone Android (RA)](topic:ar-on-site).
- **Méthodes d'arc.** La liste {{ui:Méthodes d'arc}} propose dix façons de tracer un arc, dont {{ui:3 points}} et {{ui:Début, Centre, Fin}}.
- **Davantage d'unités.** Les masses (kg, lb, t, ton) et les températures (degrés C, F, K et R) sont reconnues lorsque vous saisissez des valeurs avec unités.

## Dans toutes les applications

- **Info-bulles.** Le texte qui apparaît au survol des boutons et des étiquettes tronquées est une info-bulle Bootstrap.
- **Astuce de démarrage repliable.** La carte d'astuce sur une zone de dessin vide a une petite croix de fermeture. Elle reste fermée, et la palette de commandes peut la réafficher.
- **Barres d'onglets défilantes.** La barre d'onglets d'un panneau qui ne tient pas défile au lieu d'être coupée.
- **Titres d'onglet.** Lorsqu'un document est ouvert, l'onglet du navigateur commence par le nom du document, puis ModelCraft et CadCraft. Un point apparaît en premier tant que le document n'est pas enregistré.
- **Disposition.** {{ui:Paramètres}} › {{ui:Général}} › Disposition regroupe les dispositions dans une liste, avec un choix pour utiliser une disposition pour cette seule application et un bouton pour réinitialiser la disposition.
- **Langues.** La liste des langues dans les Paramètres suit les fichiers de langue inclus dans la version. Les langues autres que l'anglais sont des brouillons traduits par machine.
- **Live et Bibliothèque.** Live TeamWork affiche les curseurs et les noms en direct, et les collections de la Bibliothèque donnent à chaque application une collection par défaut.

## Corrigé

- {{ui:Lecture}} devient {{ui:Pause}} pendant la lecture d'une animation, et {{key:Space}} lance et met en pause la lecture lorsque la chronologie est ouverte.
- Le rendu fixe revient à WebGL lorsque la carte graphique ne peut pas démarrer le traceur de chemins. La vue de rendu en direct peut encore afficher l'erreur ; cela n'a pas été vérifié sur une machine Windows avec ce pilote.
- Le mode réel du Flux de matières se reconnecte à nouveau après qu'une liaison s'est terminée sur des réponses d'exception du PLC.

## Limites, en toute franchise

- Rien n'a été imprimé sur une vraie imprimante : ni en filament, ni en résine, ni via Bambu Connect. Les fichiers résine n'ont été relus que par les lecteurs propres à CadCraft.
- Le jumeau numérique et l'Atelier de production n'ont été testés que contre des simulateurs et des réponses connues, sans PLC, ligne ou protocole réel. Ce sont des aides à la vérification, et non une validation de sécurité. La physique ne couvre que les boîtes, jusqu'à huit charges.
- La liaison Rhino et Grasshopper n'a jamais été exécutée dans les vrais logiciels.
- Les langues autres que l'anglais sont des brouillons traduits par machine.

## Précédentes : 0.8 et 0.8.1

Voici ce qui a changé dans ModelCraft 0.8 (2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. La boîte de dialogue {{ui:Calculer un rendu…}} peut désormais envoyer la scène vers un autre logiciel, le panneau Surfaces crée des surfaces libres lisses, et un assistant que vous connectez peut définir une scène entière à partir d'une seule phrase.

### Nouveautés

**Rendu**

- **Un choix de moteur.** {{ui:Calculer un rendu…}} comporte une liste **Moteur** au-dessus de Mode. Nos deux moteurs, Rapide et le Traceur de chemins, sont ceux par défaut et fonctionnent partout. Les autres entrées enregistrent la scène sous forme de paquet (le modèle en fichier USD, plus un fichier de réglages avec les valeurs exactes des matériaux, les lampes allumées, le soleil, le ciel, l'exposition et la caméra) à emporter vers un autre logiciel. Une image produite par un autre logiciel indique quel logiciel et quelle version l'ont créée. Voir [Choisir le logiciel qui dessine l'image](topic:render-engines).
- **Ouvrir dans un autre logiciel.** La liste Moteur peut enregistrer la scène sous forme de fichier USD, de fichier glTF (`.glb`) ou de dossier de projet Unreal (`.zip`), dans le navigateur et dans CadCraft Studio. Dans Studio, elle peut aussi lancer usdview ou le logiciel du système pour ce fichier. Voir [Ouvrir la scène dans un autre logiciel](topic:render-open-in).
- **Envoyer vers un moteur de jeu depuis Studio.** Studio écrit la scène dans un projet Unreal Engine et la tient à jour à chaque envoi, dans un seul sens. Vos propres modifications sont placées dans un calque que CadCraft n'écrit jamais. Voir [Envoyer la scène vers un moteur de jeu](topic:render-unreal).
- **Moteurs issus de modules complémentaires.** Un module complémentaire peut ajouter un moteur à la liste. Un moteur écrit en JavaScript dessine dans le navigateur et dans Studio ; un moteur qui lance un logiciel demande votre accord dans Studio. Voir [Dessiner l'image avec un autre logiciel](topic:render-other-program) et [Ajouter un moteur de rendu avec un module complémentaire](topic:render-engine-addons).
- **Dire la scène.** Dites à votre assistant connecté « crépuscule, pluie fine, arbres d'automne, des gens sur la place » et ModelCraft met la scène en place en une étape : le soleil se déplace à la date et à l'heure pour que les ombres suivent, le ciel change, des surfaces mouillées apparaissent, et les arbres et les personnes sont placés comme de vrais objets sur des étiquettes que vous pouvez masquer, déplacer ou supprimer. Le moment de la journée, la date ou la saison, ainsi que la météo (dégagé, couvert, brouillard, pluie fine, pluie, orage), fonctionnent aussi seuls, et une demande ultérieure modifie la même scène. Le brouillard apparaît dans l'image de haute qualité sur la carte graphique ; les autres moteurs montrent le ciel, la lumière et les surfaces mouillées. La pluie n'est pas dessinée sous forme de traînées tombantes.

**Matériaux**

- **Un matériau à partir d'une seule photo.** Donnez à ModelCraft une photo d'une surface (un mur, un sol, de la pierre) et il crée un matériau répétable : l'éclairage à travers la photo est aplani, les bords sont raccordés, et une carte de couleur, une carte de rugosité et une carte de normales sont calculées à partir de l'image. Il s'agit d'un simple traitement d'image de votre propre photo, sans modèle entraîné. La rugosité est une estimation. Une photo simple, carrée et de face donne la meilleure tuile ; un motif marqué, comme des briques, peut laisser un léger fantôme là où la jonction est fondue.

**Surfaces**

- **Surfaces libres.** Le panneau {{ui:Surfaces}} crée des courbes NURBS et des surfaces non découpées : courbes passant par des points, lissage, réglée, extrusion, révolution, balayages le long d'un ou deux rails, surfaces à partir d'un réseau de courbes, carreaux à partir de quatre arêtes, raccord et fusion. Chaque arête commune est mesurée en G0, G1 ou G2 (écart, angle, saut de courbure) sur les surfaces exactes, et une arête moins bonne que demandé apparaît dans le panneau Problèmes avec une correction **Faire correspondre**. Les rayures zébrées et les couleurs de courbure sont dessinées à partir des surfaces exactes. Les fichiers STEP et IGES sont exportés et importés. Voir [Surfaces libres (NURBS)](topic:nurbs-surfaces).

**Site et pièces**

- **Une photo de croquis sur le sol.** {{ui:Fichier}} › {{ui:Importer une photo de croquis…}} transforme une photo prise avec un téléphone d'un croquis à la main en arêtes sur le sol, à l'échelle que vous indiquez : un seul groupe, avec une étiquette pour chaque couleur de stylo. La feuille est repérée et redressée sur votre ordinateur, et rien n'est envoyé nulle part. Voir [Modéliser sur un plan de site](topic:site-plan).
- **Meubler une pièce.** Sélectionnez un sol et utilisez {{ui:Organiser}} › {{ui:Meubler une pièce…}}. Le mobilier de chambre, de salon, de salle à manger, de cuisine, de salle de bains ou de bureau est placé selon des règles, contre les murs et à l'écart des portes et fenêtres, dans un seul groupe que vous pouvez retirer en une étape. C'est une disposition par défaut à vérifier, et non un projet. Voir [Bibliothèque de démarrage](topic:starter).

**Impression 3D**

- **Coupes en biais.** Scinder pour l'impression peut incliner ses coupes jusqu'à 60 degrés, ce qui donne plus de surface de collage aux pièces. Les connecteurs restent perpendiculaires à la coupe. Voir [Scinder un modèle pour l'impression](topic:print-split).
- **Le contrôle d'impression dans Problèmes.** Les constats du contrôle d'impression 3D apparaissent dans le panneau Problèmes avec des repères sur le modèle, et Réparer les corrige depuis là. Voir [Supports, épaisseur de paroi, creusage et réparation](topic:print-tools).

**Dans toutes les applications**

- **Langues.** L'aide et les applications sont disponibles en 54 langues. Dix sont nouvelles : lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili et ouzbek. Les langues autres que l'anglais sont des brouillons traduits par machine tant qu'un locuteur natif ne les a pas relues, et les rubriques d'aide peuvent encore être en anglais.
- **Périphériques de saisie.** Un pavé tactile, un stylet, une souris 3D, une manette de jeu et des commandes MIDI peuvent piloter les applications, pour toutes ou pour une seule.
- **Lignes de barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › Lignes de barre d'outils règle Retour à la ligne (comme avant), 2 lignes ou 1 ligne. Une barre qui ne tient pas défile latéralement au lieu de prendre de la place sur le dessin. Retour à la ligne reste la valeur par défaut.
- **Grille des propriétés.** Les champs des lampes de ModelCraft utilisent la grille commune : catégories repliables, colonnes d'étiquette et de valeur, et densité Compacte. Les calculs saisis, comme `2*450`, continuent de fonctionner.
- **Problèmes.** Le panneau Problèmes (le bouton d'avertissement dans la barre d'application) est commun à toutes les applications. Dans ModelCraft, il contient le contrôle d'impression et les avertissements de continuité des surfaces.
- **Live.** Une session Live TeamWork montre qui se trouve où. Voir [Modéliser à plusieurs avec Live TeamWork](topic:work-live).
- **Modules complémentaires.** Les modules complémentaires peuvent ajouter des moteurs de rendu, comme indiqué plus haut.
- **Connecter votre IA.** Le contrat des outils et les vérifications des huit applications sont réussis, avec 454 outils au total. La connexion en un clic dans Studio, un connecteur hébergé pour les assistants du navigateur, votre propre clé dans Studio et un paquet publié ne sont pas encore promis. Les applications ne contiennent aucune IA propre. Voir [Utiliser ModelCraft avec des assistants IA](topic:use-with-ai-assistants).

### Corrigé dans la 0.8.1

- **Section des classes DWG.** La section des classes d'un fichier DWG était lue avec le mauvais type, ce qui pouvait rendre le fichier inutilisable à l'import. Elle est lue correctement désormais, dans ModelCraft et dans les autres applications qui lisent le DWG.
- **Tablettes en portrait.** La hauteur de grille disponible va à la zone de dessin, et la disposition de feuille commence à 760 pixels de large ou moins. La feuille de style de ModelCraft contient aussi ce changement.
- **Langue dans Studio.** CadCraft Studio et les éditions empaquetées peuvent changer de langue pendant l'exécution ; auparavant, elles n'étaient qu'en anglais. Cela n'a pas encore été testé sur toutes les plateformes : dites-nous si la langue ne change pas.

### Pas encore disponible dans cette version

- **Non signé.** Windows peut afficher SmartScreen : choisissez {{ui:Plus d'informations}}, puis {{ui:Exécuter quand même}}. Sur un Mac, faites un clic droit et choisissez {{ui:Ouvrir}}. Les versions Store sont suspendues, et la version iPad et iPhone n'a pas été recompilée pour la 0.8.1.
- Un autre logiciel dessinant l'image sans module de moteur de rendu, les caméras panoramiques ou stéréoscopiques, une image de ciel produite par un autre logiciel, ainsi que le module d'extension qui ouvre la scène Unreal, ne sont pas encore disponibles. Les fichiers sont écrits ; le module d'extension n'est pas publié et n'a pas été exécuté dans Unreal.
- Surfaces libres : G3 et classe A ne sont ni mesurées ni revendiquées, et le découpage et les solides viendront plus tard.
- Les images d'autres logiciels ne sont pas identiques pixel par pixel aux nôtres : seuls la caméra, le soleil, les lampes et l'exposition correspondent.
- La correction de 0.8.1 pour le changement de langue dans Studio n'est pas testée sur toutes les plateformes.

Tout le reste figure dans [Pas encore disponible](topic:not-built-yet). Pour la version précédente, voir [Nouveautés de la version 0.7](topic:whats-new-0-7).
