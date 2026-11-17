---
title: La vue en direct
summary: Une fenêtre à côté du modèle qui le montre avec l'aspect en temps réel, avec le soleil et les ombres, et qui suit chaque modification que vous faites ; parcourez-le à pied, et réglez l'heure du jour et le mois.
keywords: partage, panorama, 360, visite, visite virtuelle, visionneuse autonome, visionneuse hors ligne, envoyer à un client, vidéo, vidéo de parcours, dispersion, disperser, herbe, prairie, forêt, rochers, plantes, arbres, foule, peindre des plantes, vue en direct, temps réel, rendu en temps réel, parcours, marcher, parcourir, première personne, présentation, client, second écran, deuxième fenêtre, écran, heure du jour, soleil, saison, mois, ombres, occlusion ambiante, reflets, lumière renvoyée, éclairage global, webgpu, webgl
from: fca3b0d6
---

{{ui:Exporter}} › {{ui:Vue en direct}} ouvre un panneau par-dessus l'application qui montre le modèle avec l'aspect en temps réel : le ciel et le soleil selon le lieu et la date de votre modèle, les ombres portées du soleil, les aspects et matériaux que vous avez donnés aux faces, les lampes, et la lumière renvoyée par les murs et les sols. Il suit ce que vous faites : vous tournez la vue, il tourne aussi ; vous modifiez le modèle, il affiche le changement un instant plus tard. Rien n'est téléversé.

## Ouvrir

1. Choisissez {{ui:Exporter}} › {{ui:Vue en direct}}. Le panneau s'ouvre dans le coin inférieur droit.
2. Faites glisser sa barre de titre pour le déplacer, tirez sur son coin pour l'agrandir.
3. {{ui:Nouvelle fenêtre}} le place dans une fenêtre à part, pour un second écran. {{ui:Exporter}} › {{ui:Vue en direct dans une nouvelle fenêtre}} l'ouvre directement là. Si votre navigateur bloque les fenêtres surgissantes, il s'ouvre en tant que panneau.
4. {{ui:Fermer}} le ferme.

## Les commandes

| Commande | Effet |
|---|---|
| {{ui:Suivre la vue}} | Activée : la vue en direct regarde là où regarde la vue de ModelCraft. Marcher la désactive |
| {{ui:Marche}} | Parcourir le modèle (ci-dessous) |
| {{ui:Gravité}} | En marche : se tenir sur les sols et monter les escaliers. Désactivée : voler |
| {{ui:Heure}} | L'heure de la journée, de 05:00 à 21:00. Le soleil se déplace pendant que vous faites glisser |
| {{ui:Mois}} | Le mois (le 21 de ce mois), pour voir le soleil en hiver et en été |
| {{ui:Qualité}} | {{ui:Pour cet ordinateur}} (ce que [votre machine](topic:your-machine) obtient), ou {{ui:Basse}}, {{ui:Moyenne}} ou {{ui:Haute}} |

La ligne du bas indique ce qui dessine la vue (WebGPU ou WebGL 2), la qualité et la lumière renvoyée.

## Parcourir le modèle

1. Tournez la vue principale vers l'endroit où vous voulez vous tenir, puis choisissez {{ui:Marche}}. Vous vous tenez sur le sol sous le point de vue de la vue, à 1.6 m de haut.
2. Cliquez sur la vue en direct, puis utilisez {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou les touches fléchées. Maintenez {{key:Shift}} pour courir. Faites glisser pour regarder autour de vous.
3. Les marches de 40 cm au plus sont franchies (escaliers) ; au-delà, c'est un mur. Les murs vous arrêtent, et vous glissez le long de ceux-ci.
4. Avec {{ui:Gravité}} désactivée, vous volez : {{key:E}} monte, {{key:Q}} descend.
5. {{key:Esc}} arrête la marche.

## Disperser plantes, rochers et personnes

{{ui:Dispersion}} dans la barre de la vue en direct ouvre le panneau de dispersion à côté de l'image. Un jeu de dispersion répartit des éléments de la bibliothèque d'éléments d'environnement (arbres, arbustes, herbe, fleurs, rochers, personnes, voitures) sur une partie du modèle. Ces éléments ne sont dessinés que dans la vue en direct : ce ne sont pas de la géométrie du modèle, et la vue principale ne les affiche pas.

1. **Remplir des faces :** sélectionnez des faces (ou un groupe, comme un terrain) dans ModelCraft, puis choisissez {{ui:Remplir la sélection}}. Le jeu les couvre.
2. **Peindre :** choisissez {{ui:Peindre}}, puis faites glisser sur la vue en direct. Si des faces sont sélectionnées, la peinture ne s'applique qu'à elles ; sans sélection, elle s'applique à tout ce qui se trouve sous le pinceau, sol compris. {{ui:Taille du pinceau}} règle le pinceau ; {{ui:Gomme}} retire les zones peintes.
3. Cochez ce que vous voulez disperser. Le nombre à côté de chacun est son poids : 3 et 1 donnent trois éléments du premier pour chaque élément du second.

| Réglage | Effet |
|---|---|
| {{ui:Par m²}} | Nombre d'éléments par mètre carré |
| {{ui:Distance de dégagement (m)}} | Aucun élément plus près de cette distance d'autres objets, et aucun sous un toit ou une table. 0 désactive |
| {{ui:Rotation (°)}} | Angle aléatoire de rotation de chaque élément autour de la verticale |
| {{ui:Pente maximale (°)}} | Aucun élément là où la surface est plus pentue |
| {{ui:Taille}} | La plus petite et la plus grande taille, en facteur de la taille propre de l'élément |
| {{ui:Hauteur de, à (m)}} | Seulement entre ces hauteurs (vide = toutes) |
| {{ui:S'incliner avec la surface}} | 0 garde les éléments verticaux ; 1 les place perpendiculaires à la pente |
| {{ui:Germe}}, {{ui:Mélanger}} | Une même graine donne toujours la même dispersion ; Mélanger en choisit une autre |

Les jeux sont enregistrés dans le fichier .modelcraft et suivent les faces qu'ils couvrent lorsque vous les modifiez. Le nombre maximal d'éléments que la vue en direct dessine dépend du niveau de [votre machine](topic:your-machine) : 20 000 pour {{ui:Processeur seul}}, 100 000 pour {{ui:Carte graphique, de base}}, un million pour {{ui:Carte graphique, haute}}. Le panneau indique combien d'éléments sont placés sur le nombre demandé par la densité : il y en a moins lorsque le budget est atteint, ou là où des objets les en empêchent. Les éléments proches de la caméra sont dessinés tels quels ; les lointains sous forme de formes simples, dans leurs couleurs.

:::note
Les éléments dispersés apparaissent dans la vue en direct (et dans sa marche, ses panoramas et la visionneuse autonome). {{ui:Calculer un rendu…}} ne les affiche pas encore.
:::

## Partager : panoramas, visites, visionneuse, vidéo

{{ui:Partager}} dans la barre de la vue en direct crée des fichiers à partir de celle-ci. Tout est fait sur cet ordinateur ; rien n'est téléversé.

| Choix | Ce que vous obtenez |
|---|---|
| {{ui:Panorama à 360°}} | Une image à 360° depuis l'emplacement de la vue (ou là où vous marchez), au format PNG équirectangulaire que les visionneuses de panoramas et la plupart des sites photo ouvrent |
| {{ui:Ajouter ce point à la visite}}, puis {{ui:Enregistrer la visite}} | Une page web avec un panorama à chaque point et des flèches vers les points que chacun peut voir (un mur entre les deux masque la flèche) |
| {{ui:Enregistrer un visionneur}} | Une page web avec le modèle dans cet aspect temps réel : le faire pivoter, le parcourir, sauter vers ses scènes enregistrées. Elle s'ouvre hors ligne dans un navigateur avec WebGPU ou WebGL 2, depuis un dossier, une clé USB ou un e-mail, sans installation ni compte, et ne charge rien depuis Internet |
| {{ui:Vidéo du parcours}} | Le trajet de caméra de la chronologie (ou les scènes enregistrées, dans l'ordre) en vidéo dans cet aspect temps réel, à la taille de la vue en direct : WebM ou MP4 lorsque le navigateur sait les produire, sinon des images numérotées dans un ZIP |

La taille du panorama suit la qualité : 1024, 2048 ou 4096 pixels de large en {{ui:Basse}}, {{ui:Moyenne}} et {{ui:Haute}}. Un fichier de visionneuse pèse environ 5 Mo, plus le modèle.

:::note
La visite et la visionneuse sont conçues pour la présentation, pas pour la modification : elles conservent le modèle tel qu'il est au moment où vous les enregistrez.
:::

## Qualité

| | Basse | Moyenne | Haute |
|---|---|---|---|
| Ombres du soleil | une carte d'ombres | trois cascades | quatre cascades |
| Occlusion ambiante (ombres de contact) | | ✓ | ✓, plus fine |
| Reflets sur le métal | | | ✓ |
| Bloom (quand {{ui:Calculer un rendu…}} le règle) | | ✓ | ✓ |
| Bords lissés | FXAA | sur plusieurs images (TAA) | sur plusieurs images (TAA) |
| {{ui:Lumière renvoyée}} | grossière | plus fine | la plus fine |

{{ui:Pour cet ordinateur}} choisit Basse sur un ordinateur sans carte graphique utilisable, Moyenne avec une puce graphique intégrée, et Haute avec une carte graphique séparée. Basse est prévue pour un ordinateur portable de 8 Go sans carte graphique.

## Lumière renvoyée

La lumière qui rebondit d'un mur ensoleillé sur le sol, et l'intérieur plus sombre d'une pièce, sont calculés par le même traceur de chemin que celui qui produit les [images rendues](topic:render) : il calcule un petit panorama en plusieurs points du modèle, en arrière-plan sur chaque cœur du processeur. Pendant le calcul, la ligne du bas affiche {{ui:Lumière renvoyée : 40 %}} ; une fois prête, la vue l'intègre. Après une modification, le calcul recommence.

:::note
Il s'agit d'une approximation pour une vue en direct, et non d'une image rendue : les petits détails entre les points reçoivent la lumière renvoyée des points voisins. Pour une image finale, utilisez [Calculer un rendu](topic:render).
:::

## Luminosité et couleurs

La vue en direct utilise la même {{ui:Luminosité}}, la même balance des blancs, le même contraste et la même transformation de vue (ACES, AgX, filmique ou standard) que [Calculer un rendu](topic:render) : réglez-les là-bas et la vue en direct suit.

:::note
Les navigateurs diffèrent. Là où le navigateur dispose de WebGPU (Chrome et Edge sous Windows, macOS et ChromeOS, Safari 26), la vue en direct l'utilise ; ailleurs (la plupart des navigateurs sous Linux, les systèmes Apple plus anciens), elle utilise WebGL 2 et l'aspect est identique.
:::
