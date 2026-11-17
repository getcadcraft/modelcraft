---
title: Voir le modèle sur chantier avec un téléphone Android (RA)
summary: Tenez un téléphone Android avec Chrome et voyez le modèle à taille réelle par-dessus la caméra, aligné sur le bâtiment grâce à deux points où vous vous tenez, avec une lentille rayons X et une vérification rapide lors de la visite suivante. Pour regarder, non pour implanter.
keywords: ra, réalité augmentée, téléphone, android, chrome, webxr, sur chantier, chantier, caméra, taille réelle, rayons X, aligner, alignement, revérifier, arcore
from: 0f43b50b
---

{{ui:Vue sur chantier (RA, téléphone)}} dans le menu {{ui:Vues}} affiche le modèle à sa taille réelle par-dessus la caméra du téléphone. Cela fonctionne sur un **téléphone Android avec Chrome**, sur une page sécurisée (https), lorsque le téléphone prend en charge la RA. Sur un iPhone ou un iPad, un ordinateur, ou une application Android qui n'affiche qu'une page web, l'élément indique pourquoi il ne peut pas démarrer ; utilisez alors la vue 3D, ou ouvrez cette page dans Chrome sur le téléphone.

**Un téléphone sert à regarder.** Ne mesurez, n'implantez ni ne découpez rien à partir de ce que montre l'écran : le téléphone dérive lorsque vous marchez, et l'erreur de pointage augmente avec la distance aux deux points sur lesquels vous vous êtes alignés (quelques centimètres près d'eux, davantage au loin). Rien ici n'a la précision d'un relevé topographique.

## Aligner le modèle

1. Ouvrez le modèle sur le téléphone et choisissez {{ui:Vue sur chantier (RA, téléphone)}}. Autorisez la caméra.
2. Le panneau en bas nomme le premier point (un coin au sol du modèle). Tenez-vous là, sur le chantier, visez l'anneau vert au sol et touchez {{ui:Placer le point}}.
3. Marchez jusqu'au deuxième point, à au moins un demi-mètre (plus ils sont éloignés, meilleur est l'ajustement), et faites de même.
4. Le modèle apparaît à taille réelle, tourné et déplacé pour correspondre aux deux emplacements. Le panneau indique la concordance des deux points.

{{ui:Recommencer}} efface les points. L'alignement est conservé dans le fichier du modèle, si bien que, la prochaine fois que vous ouvrez le modèle sur chantier, il démarre déjà aligné.

## Lentille rayons X

{{ui:Lentille rayons X}} affiche le modèle entier dans une boîte devant le téléphone (environ un mètre et demi de large et trois mètres de profondeur), et seulement un faible fantôme ailleurs. Vous pouvez ainsi voir ce qui se trouve derrière un mur sans perdre le mur réel.

## La visite suivante

Tenez-vous au premier point et touchez {{ui:Revérifier}}, puis {{ui:Placer le point}}. À moins de 5 centimètres d'écart, l'alignement est conservé. Jusqu'à un demi-mètre d'écart, le modèle se déplace de la différence. Au-delà, le panneau vous demande de viser à nouveau les deux emplacements.

## Quitter

{{ui:Quitter la RA}} termine la session. L'image de la caméra reste dans le navigateur : rien n'est envoyé.
