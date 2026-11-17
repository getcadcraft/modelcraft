---
title: Dessiner l'image avec un autre programme
summary: Notre propre traceur de chemin dessine l'image de Rendu ; un autre programme ne peut la dessiner que par un module complémentaire de moteur de rendu dans CadCraft Studio. Ce qui est transmis, et pourquoi certains programmes ne sont jamais proposés.
keywords: rendu, moteur, programme externe, moteur de module complémentaire, studio, arrière-plan, file d'attente, usd, gltf, dessiné par, blender, gpl
from: 150f94f1
---

L'image de {{ui:Calculer un rendu…}} est dessinée par **nos propres moteurs** : Rapide et le Traceur de chemin, dans le navigateur et dans CadCraft Studio. Un autre programme ne peut la dessiner que lorsqu'un **module complémentaire de moteur de rendu** l'apporte : voir [Ajouter un moteur de rendu avec un module complémentaire](topic:render-engine-addons). Pour transporter la scène vers un autre programme et continuer d'y travailler, utilisez [Ouvrir la scène dans un autre programme](topic:render-open-in) ou [Envoyer la scène vers un moteur de jeu](topic:render-unreal).

## Dessiner une image avec le moteur d'un module complémentaire

1. Activez le module complémentaire dans Paramètres › Modules complémentaires. Son moteur apparaît dans la liste Moteur de {{ui:Calculer un rendu…}}.
2. Choisissez-le. Ses propres paramètres s'affichent sous la liste Moteur.
3. Cliquez sur {{ui:Rendu}}. Dans Studio, la première fois qu'un module complémentaire lance un programme, Studio vous le demande dans sa propre boîte de dialogue. La progression s'affiche pendant le dessin ; {{ui:Arrêter}} y met fin. L'image apparaît, marquée du moteur qui l'a dessinée.

Un moteur écrit en JavaScript fonctionne aussi dans le navigateur. Un moteur qui lance un programme sur cet ordinateur ne fonctionne que dans Studio ; dans le navigateur, il apparaît comme un fichier à enregistrer.

## Ce qui est transmis

Le moteur reçoit un **paquet** : le modèle sous forme de fichier USD (et un fichier glTF lorsqu'il en demande un), et un fichier de paramètres avec les valeurs exactes des matériaux, le soleil et le ciel, chaque lampe allumée avec sa puissance et son profil de lumière, la caméra et l'exposition. Chaque programme éclaire, règle les tons et échantillonne à sa façon ; les images se ressemblent donc par la caméra, le soleil, les lampes et l'exposition, mais pas pixel pour pixel.

## Programmes que CadCraft ne lance jamais

CadCraft ne lance jamais un programme sous licence GNU GPL, et ne le propose jamais comme moteur ni comme cible d'Ouvrir dans. Blender en fait partie, il ne figure donc pas dans la liste Moteur. Un fichier USD ou glTF enregistré depuis {{ui:Calculer un rendu…}} s'ouvre toujours dans celui-ci, comme dans tout programme qui lit ces fichiers.

:::note
Les caméras panoramiques et stéréoscopiques, ainsi qu'une image de ciel (les couleurs du ciel sont alors utilisées), ne sont pas transmises à un autre programme. Rien de ce qui est fait dans un autre programme ne revient dans le modèle.
:::
