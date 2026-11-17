---
title: Ouvrir la scène dans un autre programme
summary: Enregistrez la scène sous forme de fichier USD ou glTF pour n'importe quel programme qui les lit, ou ouvrez-la depuis Studio dans un programme de cet ordinateur.
keywords: ouvrir dans, usd, gltf, glb, exporter, programme de rendu, archviz, studio, usdview, envoyer, transfert, paquet, dossier unreal
from: 812329d5
---

Choisissez une entrée **Ouvrir dans** dans la liste Moteur de {{ui:Calculer un rendu…}} pour transporter la scène vers un autre programme. Rien ne revient dans le modèle.

## Un fichier pour n'importe quel programme

- **Fichier USD** enregistre la scène au format `.usdc` (ou `.usdz` lorsque le modèle contient des images) : le [même fichier que Enregistrer en USD](topic:usd), avec les matériaux, les lampes et les caméras. Il conserve les instances et les valeurs exactes des matériaux. La plupart des moteurs de rendu, des moteurs de jeu et des visionneuses lisent l'USD.
- **Fichier glTF (.glb)** enregistre le fichier glTF 2.0, plus léger, avec les matériaux, les textures et les lampes ; voir [Exporter un modèle pour d'autres programmes](topic:export-model) pour les formats écrits par ModelCraft.

- **Dossier de projet Unreal (.zip)** enregistre le dossier qu'écrit [Envoyer la scène vers un moteur de jeu](topic:render-unreal), pour un projet sur n'importe quel ordinateur.

Les trois fonctionnent dans le navigateur et dans Studio.

## Dans Studio : l'ouvrir dans un programme

Studio liste les programmes qu'il trouve sur cet ordinateur et capables d'ouvrir la scène : usdview s'il se trouve dans votre chemin de recherche, et le programme de l'ordinateur pour ce type de fichier. Choisissez-en un, choisissez USD ou glTF lorsqu'il lit les deux, et cliquez sur {{ui:Rendu}}. Studio écrit le paquet dans un nouveau dossier sous Documents (`CadCraft hand-off` ; rien n'est écrasé, chaque envoi a son propre dossier) et lance le programme dessus, puis indique où se trouvent les fichiers.

| Programme | Lit le mieux |
|---|---|
| usdview | USD |
| Le programme de l'ordinateur | Ce que l'ordinateur possède pour ce type de fichier |

Studio ne lance que les programmes de cette liste fixe ; il n'exécute rien que la page demande par son nom, et il ne lance jamais un programme sous licence GNU GPL (voir [Dessiner l'image avec un autre programme](topic:render-other-program#programs-cadcraft-never-runs)). Tout programme qui lit l'USD ou le glTF ouvre le fichier décrit dans **Fichier pour n'importe quel programme** ci-dessus.

:::note
Twinmotion, Enscape et d'autres programmes de visualisation ne figurent pas dans la liste : CadCraft n'a pas été testé avec eux et n'émet aucune garantie à leur sujet. Un fichier glTF ou USD issu d'ici constitue la voie d'accès.
:::
