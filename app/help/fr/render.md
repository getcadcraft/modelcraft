---
title: Rendre une image du modèle
summary: Créez une image qui ressemble à la lumière du jour : ciel, soleil à la position et à la date de votre modèle, ombres douces, aspects verre et métal, puis enregistrez-la en PNG.
keywords: rendu, préréglage, préréglages, préréglage de scène, intérieur, extérieur, vue en coupe, nuit, un clic, calcul de rendu, path tracing, path traced, ray tracing, éclairage global, reflets, réfraction, haute qualité, photo, photoréaliste, réaliste, image, png, fixe, ciel, soleil, lumière du jour, ombres, ombres douces, occlusion ambiante, verre, métal, brillant, matériaux, exposition, luminosité, couvert, crépuscule, studio, présentation, brouillard, brume, buée, fumée, nuage, volume, rayons de lumière, god rays, caustiques, échantillonnage adaptatif, bruit
from: 517ba4d3
---

{{ui:Calculer un rendu…}} crée une image de la vue qui ressemble à la lumière du jour plutôt qu'à un dessin : un ciel, le soleil à la position que donnent le lieu et la date de votre modèle, des ombres douces, une lumière venant de tout le ciel qui assombrit les coins et les interstices, et des couleurs qui peuvent évoquer le verre, le métal ou une peinture brillante. Le modèle n'est pas modifié.

## Calculer le rendu de la vue

1. Réglez la vue comme vous le souhaitez pour l'image : orbite, zoom, choisissez une [scène](topic:scenes), masquez ce qui ne doit pas apparaître. L'image utilise la caméra propre à la vue.
2. Cliquez sur {{ui:Exporter}} dans le groupe {{ui:Fichier}}, puis sur {{ui:Calculer un rendu…}}.
3. Choisissez une {{ui:Scène}} si celle qui est enfoncée ne vous convient pas (voir [Préréglages de scène](topic:render#scene-presets-a-good-picture-in-one-click)), choisissez la {{ui:Taille}}, puis cliquez sur {{ui:Rendu}}.

   L'image se construit pendant le calcul et gagne en netteté à chaque passe. {{ui:Arrêter}} (ou {{key:Esc}}) met fin au calcul plus tôt et conserve l'image obtenue jusque-là.

4. Cliquez sur {{ui:Enregistrer}} pour la télécharger (un PNG, sauf si {{ui:Enregistrer en}} indique autre chose).

:::tip
Commencez avec {{ui:Brouillon}} à {{ui:Taille de la vue}} pour vérifier la caméra et l'aspect, puis calculez en {{ui:Bonne}} ou {{ui:Meilleure}} à une taille plus grande pour l'image finale.
:::

## Préréglages de scène : une belle image en un clic

En haut de la boîte de dialogue figurent quatre boutons {{ui:Scène}}. Chacun règle en un clic le ciel, la luminosité, le sol, les lignes de contour, la qualité et le soleil, si bien qu'il n'y a rien à apprendre avant la première image. Cliquez sur l'un d'eux, puis sur {{ui:Rendu}}.

| Scène | Ce qu'elle règle | À utiliser pour |
|---|---|---|
| {{ui:Extérieur}} | Ciel dégagé, le soleil du modèle, sol activé | Le bâtiment vu de l'extérieur |
| {{ui:Intérieur}} | Ciel couvert (lumière uniforme, sans tâches de soleil marquées), un demi-diaphragme plus lumineux | Une vue depuis l'intérieur d'une pièce |
| {{ui:Vue en coupe}} | Studio blanc, pas de sol, lignes de contour dans le rendu rapide | Un modèle coupé par un plan de coupe |
| {{ui:Nuit}} | Le soleil couché (minuit en plein hiver pour l'hémisphère du site), un diaphragme plus lumineux | Des lampes qui éclairent le modèle. Sans lampes, l'image est sombre |

- {{ui:Choisir pour cette vue}} choisit à votre place : {{ui:Vue en coupe}} lorsqu'une coupe est active, {{ui:Intérieur}} lorsque la caméra est à l'intérieur du modèle, sinon {{ui:Extérieur}}. La première fois que vous ouvrez la boîte de dialogue, elle démarre ainsi toute seule.
- Chaque réglage reste disponible plus bas et peut être modifié. Dès que vous changez un réglage, la scène ne correspond plus, aucun bouton n'est enfoncé, et la ligne sous les boutons indique que les réglages vous appartiennent. Cliquez de nouveau sur la scène pour rétablir ses valeurs.
- Une scène ne modifie ni le moteur, ni le mode, ni la taille, ni les matériaux, ni la caméra, ni les lampes.

:::note
Les scènes donnent les mêmes valeurs dans ModelCraft et dans BimCraft. L'aspect de l'image finale dépend de votre modèle et de votre carte graphique.
:::

## Réglages

| Réglage | Ce qu'il fait |
|---|---|
| {{ui:Taille}} | La taille de la vue, le double de la taille de la vue, Full HD, 4K ou un carré. Les tailles fixes conservent la caméra de la vue et montrent un peu plus ou un peu moins sur les côtés |
| {{ui:Mode}} | {{ui:Rapide}}, ou {{ui:Haute qualité (path tracing)}} (ci-dessous) avec sa {{ui:Limite de temps}} |
| {{ui:Qualité}} | Le nombre de passes (ou, en haute qualité, d'échantillons) moyennées : {{ui:Brouillon}} 16, {{ui:Bonne}} 64, {{ui:Meilleure}} 256. Davantage de passes donnent des ombres et des bords plus doux, mais prennent plus de temps |
| {{ui:Bleu ciel}} | {{ui:Ciel dégagé}}, {{ui:Couvert}} (lumière douce, ombres légères), {{ui:Crépuscule}} (lumière basse et chaude) ou {{ui:Studio blanc}} (un fond blanc uni) |
| {{ui:Soleil}} | Le soleil vient de la date, de l'heure et du lieu définis dans {{ui:Style}} › soleil. Cochez {{ui:Utiliser une autre date et une autre heure pour cette image}} pour essayer une autre heure sans changer le style du modèle |
| {{ui:Luminosité}} | Plus clair ou plus sombre, par paliers (diaphragmes) |
| {{ui:Sol sous le modèle}} | Un sol qui reçoit les ombres et se fond dans l'horizon. Désactivez-le pour un modèle qui flotte |
| {{ui:Dessiner les arêtes}} | Trace les arêtes du modèle en fines lignes sur l'image, pour un aspect dessiné |

Lorsque le soleil est sous l'horizon à l'heure choisie, il fait nuit : le ciel s'assombrit et les [lampes](topic:lights) du modèle l'éclairent. La boîte de dialogue l'indique.

Les réglages sont enregistrés dans le fichier `.modelcraft`, de sorte que la prochaine image du même modèle reprend là où vous vous êtes arrêté.

## Donner aux couleurs un aspect verre ou métal

Sous {{ui:Matériaux}}, chaque couleur à l'écran possède un aspect : {{ui:Mat}}, {{ui:Satiné}}, {{ui:Brillant}}, {{ui:Métal}}, {{ui:Métal poli}}, {{ui:Vitrage}} ou {{ui:Verre dépoli}}. {{ui:Faces sans matériau}} désigne les faces qui n'ont pas de couleur propre.

Pour transformer des fenêtres en verre, [peignez](topic:paint) les vitres d'une couleur, puis réglez cette couleur sur {{ui:Vitrage}}. Le verre laisse voir le ciel et ce qui se trouve derrière, teinté par sa couleur, et reflète le ciel.

:::note
En mode {{ui:Rapide}}, le verre et le métal reflètent le ciel, et non le reste du modèle, et la lumière ne se courbe pas en traversant le verre. Le mode {{ui:Haute qualité (path tracing)}} ci-dessous fait les deux.
:::

## Haute qualité

Choisissez {{ui:Mode}} › {{ui:Haute qualité (path tracing)}} pour une image qui suit la lumière comme la voit un appareil photo :

- la lumière rebondit entre les surfaces, de sorte qu'une pièce éclairée par une fenêtre ou par une lampe est lumineuse sur tout son pourtour, et que les couleurs déteignent sur leurs voisins ;
- le verre est du verre réel : la lumière s'y réfracte et il reflète le modèle ;
- le métal et les surfaces polies reflètent le reste du modèle ;
- les panneaux lumineux éclairent comme des panneaux, avec des ombres douces.

Ce mode est beaucoup plus lent que {{ui:Rapide}} : chaque passe recalcule la lumière de chaque pixel. L'image commence granuleuse et s'éclaircit à mesure que les échantillons s'additionnent ; commencez donc petit ({{ui:Taille de la vue}}, {{ui:Brouillon}}) et choisissez une {{ui:Limite de temps}} : quand elle est atteinte, l'image obtenue est conservée. {{ui:Arrêter}} la conserve aussi. La première passe attend que le navigateur prépare le path tracer.

Lorsque le navigateur dispose de WebGPU, le path tracer est celui de CadCraft et s'exécute sur la carte graphique ; la ligne sous l'image indique {{ui:Path traced on the graphics card (WebGPU)}}. Après {{ui:Arrêter}} ou la limite de temps, {{ui:Reprendre}} poursuit la même image jusqu'à obtenir tous ses échantillons ; modifier un réglage ou cliquer de nouveau sur {{ui:Rendu}} recommence depuis le début. Sans WebGPU, l'image est calculée avec WebGL (la ligne l'indique) et {{ui:Reprendre}} n'est pas proposé.

:::linux
Firefox et la plupart des configurations de Chrome sous Linux ne disposent pas encore de WebGPU ; la haute qualité utilise donc WebGL sur ces systèmes.
:::

Dans ce mode, les arêtes ne sont pas tracées, les textures de la bibliothèque montrent leur couleur et leur rugosité mais pas leurs reliefs (un [matériau fait avec des nœuds](topic:shading#in-high-quality-pictures) affiche sa normale et ses reliefs), et une coupe est réalisée sur le modèle avant le début du rendu.

{{ui:Débruiter (supprime le grain restant après les échantillons)}} est activé par défaut : lorsque l'image est terminée, ou arrêtée, le grain restant est supprimé par un réseau de neurones conçu pour cet usage (le réseau publié par Intel Open Image Denoise, exécuté sur votre propre ordinateur : sur la carte graphique, sinon sur le processeur). Une image avec peu d'échantillons ressort propre ; {{ui:Afficher}} › {{ui:L'image avant débruitage}} montre l'image telle qu'elle a été calculée.

## Rendu dans la vue

L'espace de travail {{ui:Rendu}} exécute le path tracer dans la vue elle-même : vous orbitez, modifiez le modèle ou changez une lumière, et le calcul reprend immédiatement. {{ui:Zone}} : tracez un rectangle, et seule cette partie est calculée ; {{ui:Vue entière}} revient en arrière. {{ui:Mise au point}} : cliquez sur ce qui doit être net, et la profondeur de champ se fait à cet endroit. {{ui:Détail}} règle le nombre de pixels de la vue qui sont calculés (moins de pixels, c'est plus rapide). {{ui:Pause}} arrête et reprend. Cet espace nécessite WebGPU : sans WebGPU, il l'indique, et {{ui:Exporter}} › {{ui:Calculer un rendu…}} fonctionne toujours.

## Ciels et profils de lumière sur la carte graphique

Avec WebGPU, la haute qualité propose deux ciels supplémentaires :

- {{ui:Ciel physique}} calcule la lumière du jour à partir de la hauteur du soleil : un bleu profond au zénith, une bande pâle à l'horizon, et un soleil qui devient plus chaud et plus faible à mesure qu'il descend. {{ui:Brume}} varie d'un jour très clair (2) à un jour brumeux (10).
- {{ui:Image de ciel (HDRI)}} éclaire le modèle avec une image panoramique d'un lieu réel. {{ui:Choisir une image…}} prend un fichier `.hdr` ou `.exr` en projection équirectangulaire ; {{ui:Tourner}} le fait pivoter autour du modèle, et {{ui:Luminosité de l'image}} le rend plus clair ou plus sombre. L'image contient son propre soleil, donc le soleil du modèle n'est pas ajouté. Elle n'est conservée que tant que la page est ouverte : après une réouverture, choisissez-la de nouveau.

Chaque lampe de la liste {{ui:Lampes}} peut recevoir le profil de lumière d'un fabricant : {{ui:Profil IES…}} lit un fichier IES (LM-63) et la lampe projette alors sa lumière comme le ferait ce luminaire (un spot étroit, un éclairage mural). Toutes les lampes portant ce nom utilisent ce profil, et chaque lampe conserve sa propre luminosité. Cliquez sur le nom du profil pour cesser de l'utiliser.

Les fenêtres en verre transparent aident la lumière du ciel à entrer dans une pièce ; les images d'intérieur sous un ciel se règlent donc plus vite.

Les modes {{ui:Rapide}} et le path tracer WebGL affichent {{ui:Ciel physique}} et {{ui:Image de ciel (HDRI)}} comme un ciel dégagé et ignorent les profils de lumière.

## La caméra

{{ui:Caméra}} règle l'image comme une photographie :

- {{ui:Exposition}} : gardez le {{ui:Curseur de luminosité}}, ou choisissez {{ui:Réglages de la caméra}} et réglez l'{{ui:Ouverture (f-stop)}}, la {{ui:Vitesse d'obturation}} et l'{{ui:ISO}} comme sur un appareil photo ; l'EV affiché à côté est la valeur d'exposition habituelle. f/16 à 1/100 s et ISO 100 correspondent à une journée ensoleillée ; une scène plus sombre demande une ouverture plus grande, un obturateur plus lent ou un ISO plus élevé. Ce réglage fonctionne dans tous les modes.
- {{ui:Profondeur de champ}} floute ce qui est plus proche ou plus éloigné que la {{ui:Distance de mise au point (m)}}, comme le ferait un objectif de cette ouverture (laissez-la vide pour faire la mise au point sur ce qui se trouve au milieu de la vue) ; la {{ui:Forme de l'ouverture}} donne aux reflets flous une forme ronde ou à lamelles.
- {{ui:Perspective à deux points (les lignes verticales restent verticales)}} met la caméra à niveau et décale l'image, comme le fait un objectif à bascule-décentrement d'architecte, afin que les murs ne penchent pas lorsque vous regardez vers le haut ou vers le bas un bâtiment.
- {{ui:Balance des blancs}} définit la couleur de lumière qui apparaît en blanc : plus basse (par exemple 3000 K) pour une lumière de lampe chaude, plus haute pour l'ombre et les journées couvertes.
- {{ui:Projection}} : {{ui:Panorama à 360°}} crée une image 2:1 de tout ce qui entoure la caméra, pour les visionneuses de panoramas ; {{ui:Panorama stéréo à 360°}} empile un panorama pour l'œil gauche et un pour l'œil droit, pour les casques ; {{ui:Carte cubique (6 faces)}} crée six vues carrées dans une grille de 3 × 2. La largeur vient de {{ui:Taille}}.

La projection, la profondeur de champ, la perspective à deux points et la balance des blancs nécessitent le path tracer sur la carte graphique (WebGPU) ; elles n'apparaissent donc qu'en {{ui:Haute qualité}}.

## Finaliser l'image

{{ui:Image}} étalonne l'image haute qualité comme une photographie ; chaque commande modifie immédiatement l'image finale, sans nouveau calcul :

- {{ui:Rendu (transformation de vue)}} : {{ui:ACES filmique}} (l'image comme précédemment), {{ui:AgX}} (plus doux, conserve la couleur dans une lumière très vive), {{ui:Filmique}} (une courbe de film douce) ou {{ui:Standard}} (sobre ; la lumière très vive est écrêtée en blanc).
- {{ui:Contraste}} et {{ui:Compression des hautes lumières}} (restitue les détails des parties très lumineuses).
- {{ui:Halo}} (une lueur douce autour des lumières vives), {{ui:Éblouissement}} avec ses {{ui:Traînées d'éblouissement}} (rayons en étoile issus des points les plus lumineux) et {{ui:Vignettage}} (coins plus sombres).
- {{ui:Table de couleurs (.cube)…}} applique un étalonnage de couleurs issu d'un fichier `.cube`, avec son {{ui:Intensité de la table de couleurs}} ; comme une image de ciel, elle n'est conservée que tant que la page est ouverte.

## Enregistrer l'image

{{ui:Enregistrer en}} à côté de {{ui:Enregistrer}} choisit le fichier : {{ui:PNG}}, {{ui:JPEG}} ou {{ui:WebP}} pour le partage (JPEG et WebP uniquement lorsque le navigateur peut les écrire), et, après un rendu haute qualité sur la carte graphique, également :

- {{ui:PNG, 16 bits}} : l'image étalonnée, avec des paliers plus fins entre les nuances, pour l'impression ou pour une retouche ultérieure.
- {{ui:EXR, toutes les couches (flottant 32 bits)}} : l'image telle qu'elle a été calculée (lumière linéaire, sans étalonnage), avec chaque élément de rendu et chaque groupe de lumières sur sa propre couche, pour les logiciels de compositing.
- {{ui:Fichier de rendu (.ccrender, pour retoucher plus tard)}} : tout ce dont la boîte de dialogue a besoin pour mélanger et étalonner de nouveau l'image. {{ui:Ouvrir un fichier de rendu…}} le rouvre, avec son mélange et son étalonnage, sans recalcul.

## Mélanger les lumières après le rendu

Activez {{ui:Mixage de lumière (modifier la couleur et la luminosité de chaque lumière après le rendu)}} avant de cliquer sur {{ui:Rendu}}. Lorsque l'image est terminée (ou arrêtée), {{ui:Mélanger l'image}} liste ses lumières par groupes : le ciel, le soleil, et les lampes par leur nom (chaque lampe portant le même nom forme un seul groupe). Désactivez un groupe, donnez-lui une couleur, ou rendez-le plus clair ou plus sombre : l'image change immédiatement, sans nouveau calcul. {{ui:Enregistrer le mélange}} conserve le mélange sous un nom pour le choisir plus tard ; {{ui:Tel que rendu}} revient à l'image telle qu'elle a été calculée. {{ui:Enregistrer}} enregistre l'image mélangée.

{{ui:Éléments de rendu (albédo, normales, profondeur, diffus, spéculaire, transmission, émission, ID)}} conserve aussi les parties de l'image. {{ui:Afficher}} fait basculer la vue sur l'une d'elles : les couleurs de surface (albédo), les normales, la profondeur, la lumière diffuse, spéculaire et transmise (chacune directe et indirecte), ce qui émet de la lumière et le ciel, ainsi qu'une couleur par objet ou par matériau pour réaliser des masques.

Ces deux options conservent des couches supplémentaires sur la carte graphique. Pour les grandes tailles, une carte graphique peut manquer de mémoire ; la boîte de dialogue le signale, et une taille plus petite fonctionne.

## La file de rendu

Après une configuration haute qualité, {{ui:Ajouter cette image à la file}} sous {{ui:File de rendu}} conserve l'image telle qu'elle est réglée à ce moment ; {{ui:Ajouter cette animation à la file}} de la boîte de dialogue vidéo fait de même pour une animation entière, calculée image par image en path tracing. {{ui:Démarrer la file}} calcule les éléments les uns après les autres sur cet ordinateur, et {{ui:Enregistrer}} à côté de chaque élément terminé le télécharge. Fermer la page conserve la file : ouvrez le même modèle et elle reprend là où elle s'est arrêtée. La file nécessite WebGPU.

## Brouillard, fumée, bruit et caustiques

Ces réglages se trouvent dans {{ui:Brouillard, fumée et bruit}} et fonctionnent en {{ui:Haute qualité}} sur la carte graphique ; les autres moteurs ne les proposent pas.

- {{ui:Brouillard et brume}} remplit l'air jusqu'à une hauteur avec une brume que le soleil, le ciel et les lampes éclairent. {{ui:Distance de visibilité, en mètres}} règle son épaisseur (environ 100 m pour une légère brume, 20 m pour un brouillard épais), {{ui:Hauteur du brouillard au-dessus du sol, en mètres}} indique où il s'arrête, et {{ui:Rayons de lumière}} règle l'intensité avec laquelle la brume rayonne vers la lumière. La lumière du soleil quitte le brouillard par son sommet : là où le soleil passe par une fenêtre ou entre les bâtiments, vous le voyez sous forme de faisceaux lumineux.
- {{ui:Fumée ou nuage}} ajoute un seul volume de fumée ou de nuage, éclairé comme le brouillard. {{ui:Type}} est un {{ui:Nuage}}, une {{ui:Colonne de fumée}} ou {{ui:Depuis un fichier de volume (.ccvol)}}, le format de grille propre à CadCraft. {{ui:Détail}} et {{ui:Variation}} modifient un nuage ou une colonne créé, {{ui:Taille de son côté le plus long, en mètres (0 = la taille du modèle)}}, {{ui:Déplacer X (m)}}, {{ui:Déplacer Y (m)}}, {{ui:Déplacer Z (m)}} et {{ui:Tourner}} le placent (il commence au milieu du modèle), {{ui:Épaisseur}} le rend plus dense, {{ui:Lueur vers l'avant}} le rend plus lumineux vers la source de lumière, et {{ui:Couleur}} le teinte. Un fichier de volume n'est conservé que tant que la page est ouverte, comme une image de ciel.
- {{ui:Arrêter tôt là où l'image est nette (échantillonnage adaptatif)}} n'attribue plus d'échantillons aux pixels stabilisés, de sorte que le reste de l'image se termine plus vite. {{ui:Bruit accepté}} règle le grain qui subsiste lorsqu'un pixel s'arrête. La ligne sous l'image indique le nombre moyen d'échantillons reçus par pixel.
- {{ui:Caustiques (lumière courbée par le verre ou réfléchie par les miroirs)}} trace la lumière issue des lampes et du soleil, si bien que la tache lumineuse sous une boule de verre ou la lumière d'un miroir sur un mur sort nette au lieu d'être granuleuse. Elles sont désactivées lorsque le brouillard, la fumée, {{ui:Mélanger les lumières après le rendu}} ou les éléments de rendu sont actifs ; elles sont conçues pour les images, et non pour les images à 360°, les animations ou l'espace {{ui:Rendu}}.

## Durée du calcul

L'image est calculée sur votre propre ordinateur, par sa carte graphique ; rien n'est envoyé en ligne. La durée dépend de cette carte. Elle augmente avec les passes et les pixels : {{ui:Meilleure}} comporte 16 fois plus de passes que {{ui:Brouillon}}, et une image 4K compte environ quatre fois plus de pixels qu'une image Full HD. Un ordinateur sans carte graphique calcule quand même, mais plus lentement.

:::note
Si la boîte de dialogue indique que le navigateur ne peut pas calculer d'images, c'est qu'il n'a pas WebGL 2. Mettez-le à jour, ou activez l'accélération matérielle dans ses réglages.
:::
