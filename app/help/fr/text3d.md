---
title: Texte 3D
summary: Ajoutez du lettrage à un modèle sous forme de faces, plates ou pleines, posées sur n'importe quelle face : une enseigne, un numéro de maison, un nom sur une porte.
keywords: texte 3d, texte, lettres, lettrage, enseigne, signalétique, numéro de maison, étiquette, graver, police, mots
from: 923f5d93
---

{{ui:Texte 3D}} dans le groupe {{ui:Dessiner}} crée un lettrage à partir de faces, que vous pouvez peindre, pousser/tirer ou découper dans un solide.

## Ajouter du texte

1. Cliquez sur {{ui:Texte 3D}}.
2. Saisissez le texte. Appuyez sur {{key:Enter}} dans la zone pour une deuxième ligne.
3. Réglez la {{ui:Hauteur des lettres}} (la hauteur d'une majuscule, par exemple `30cm` ou `1'`) et la {{ui:Profondeur}} :
   - `0` donne des **lettres plates** : des faces posées sur la surface où vous les placez, prêtes à être peintes ou poussées/tirées.
   - Une profondeur telle que `5cm` donne des **lettres pleines** : des solides fermés que vous pouvez utiliser avec les [outils de solides](topic:solids).
4. Cliquez sur {{ui:Placer}}, puis cliquez à l'endroit où le texte doit aller.

Sur une face, le texte repose sur cette face et se lit de gauche à droite : sur un mur, il se dresse verticalement ; sur le sol ou une table, il est couché à plat le long du rouge. Hors de toute face, il repose sur le sol.

Le texte est un **composant** dont le nom reprend le texte lui-même : si vous modifiez l'un de ses exemplaires, toutes les copies changent, et il apparaît dans la liste {{ui:Composants}} pour être placé à nouveau.

## À savoir

- Les lettres utilisent la police monotrait propre à ModelCraft, épaissie : nette et lisible, sans choix de police pour l'instant.
- Les lettres, les chiffres et les signes courants (y compris les lettres accentuées) sont dessinés ; un caractère absent de la police s'affiche sous forme de petit carré.
- Pour changer le texte, supprimez-le et ajoutez-le à nouveau.
- Pour découper un lettrage dans une surface, créez des lettres pleines, placez-les à moitié dans un groupe solide, puis [soustrayez-les](topic:solids).
