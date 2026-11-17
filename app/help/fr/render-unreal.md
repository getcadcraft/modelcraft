---
title: Envoyer la scène vers un moteur de jeu
summary: Studio peut écrire la scène dans un projet Unreal Engine et la garder à jour à chaque envoi ; vos propres modifications sont dans une couche que CadCraft n'écrit jamais. Le module d'extension qui l'ouvre n'est pas encore publié.
keywords: unreal, unreal engine, moteur de jeu, lien, envoyer, usd stage, projet, live, caméra cine, file de rendu vidéo
from: 9a765cc2
---

Dans CadCraft Studio, la liste Moteur peut contenir un **lien** vers un projet Unreal Engine. Sens unique : de CadCraft vers Unreal.

## Envoyer la scène

1. Choisissez l'entrée Unreal dans la liste Moteur. La première fois, Studio vous demande de choisir le dossier de votre projet (celui qui contient le fichier `.uproject`) ; il s'en souvient.
2. Cliquez sur {{ui:Envoyer}}. Studio écrit `CadCraft/<nom du fichier>/` dans le projet : la scène sous forme de fichier USD, le fichier de réglages, les profils de lumière et deux petits fichiers de couche.
3. Modifiez le modèle, enregistrez puis envoyez de nouveau. Seuls la scène et le fichier de réglages sont remplacés.

## Vos modifications sont protégées

Le stage ouvert par Unreal est une petite couche racine créée une seule fois, avec deux couches en dessous : **la vôtre** au-dessus (`<nom>.user.usda`, vide au départ, jamais réécrite par CadCraft) et la scène de CadCraft en dessous. Les modifications que vous enregistrez dans votre propre couche sont conservées lorsque la scène est envoyée de nouveau. Les lumières et les autres acteurs que vous placez dans le niveau Unreal sont en dehors du stage et ne sont pas touchés non plus.

## Sans Studio

Dans le navigateur, ou sur un ordinateur où Studio ne trouve pas Unreal, choisissez **Dossier de projet Unreal (.zip)** dans la liste Moteur, puis cliquez sur {{ui:Rendu}}. Le dossier est enregistré sous forme de fichier zip : décompressez-le dans le dossier `CadCraft` de votre projet. Laissez **Inclure les fichiers du stage** coché la première fois ; décochez-le pour les enregistrements suivants, afin que le zip ne contienne que la scène et le fichier de réglages, et que votre propre couche ne soit jamais remplacée.

:::note
Le module d'extension Unreal qui ouvre le stage, applique le soleil, les lampes, les caméras et l'exposition, suit chaque envoi et calcule un rendu depuis une caméra n'est **pas encore publié** et n'a pas encore été exécuté dans Unreal. Tant qu'il ne l'est pas, Envoyer dépose les fichiers dans le projet, et les outils USD d'Unreal peuvent les ouvrir. Windows est le premier système pris en charge ; macOS suivra.
:::
