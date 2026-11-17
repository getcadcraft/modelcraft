---
title: Coter et redimensionner ce que vous avez dessiné
summary: Placez des cotes entre des coins, sur des arcs et des cercles, ou entre deux arêtes ; saisissez une nouvelle longueur pour redimensionner le modèle. Ressaisissez la longueur d'une arête, ou la largeur, la profondeur et la hauteur d'un groupe, dans les infos sur l'entité.
keywords: cote, cotes, redimensionner, changer la taille, modifier la taille, longueur, largeur, profondeur, hauteur, étirer, cote pilotante, annoter, mesurer, après coup, rayon, diamètre, angle, angulaire, arc, cercle, R, Ø
from: a1f815ec
---

Les tailles dans ModelCraft ne sont pas figées une fois qu'un élément est dessiné. Une cote affiche une longueur sur le modèle, et saisir une nouvelle longueur dans la cote redimensionne le modèle en conséquence. Vous pouvez aussi ressaisir la longueur d'une arête, ou la largeur, la profondeur et la hauteur d'un groupe, dans {{ui:Infos sur l'entité}}.

## Placer une cote

1. Appuyez sur {{key:D}}, ou cliquez sur {{ui:Cote}} dans la barre d'outils.
2. Cliquez le coin à partir duquel mesurer. Il s'accroche aux coins, aux milieux et aux arêtes, comme pour le dessin.
3. Cliquez le second coin.

   Ou cliquez une fois sur une **arête** (l'infobulle indique « Sur l'arête ») pour coter toute cette arête en un seul clic.
4. Déplacez le pointeur à l'endroit où doit se trouver la ligne de cote, et cliquez. Vous pouvez aussi saisir le décalage, par exemple `0.5m`, et appuyer sur {{key:Enter}}.

   La ligne de cote reste horizontale pour une arête horizontale, sauf si vous la regardez de côté. Pour une arête verticale, elle reste dans le plan vertical qui vous fait le mieux face.

La barre d'état indique « Cote 4 m. ». Les cotes affichent leur longueur dans l'unité du modèle et se mettent à jour lorsque vous changez d'unité dans le sélecteur.

## Rayon, diamètre et angle

Le même outil {{ui:Cote}} cote aussi les arrondis et les angles :

- **Un arc** : cliquez sur l'arc. L'infobulle indique {{ui:Rayon}}. Déplacez le pointeur à l'endroit où doit aller le texte, et cliquez : la cote affiche **R 1.5 m**.
- **Un cercle** : cliquez sur le cercle. Vous obtenez un **diamètre** (**Ø 3 m**), avec une ligne traversant le cercle par son centre. Les polygones fonctionnent de la même façon, leurs coins étant sur le cercle.
- **L'angle entre deux arêtes** : cliquez une arête, puis une seconde arête qui la rejoint en un coin (lorsque vous la survolez, l'infobulle indique {{ui:Angle entre les arêtes}}). Déplacez-vous ensuite dans l'angle voulu, et cliquez. À l'intérieur du coin, vous obtenez l'angle entre les arêtes ; si vous passez de l'autre côté, vous obtenez l'angle adjacent (par exemple 150° au lieu de 30°). La distance entre le coin et votre clic fixe l'emplacement de l'arc ; vous pouvez aussi saisir cette distance.

Pour passer d'un rayon à un diamètre, ou inversement, sélectionnez la cote et choisissez dans {{ui:Afficher comme}}, dans {{ui:Infos sur l'entité}}.

**Redimensionner avec elles** : saisissez un nouveau rayon ou diamètre juste après en avoir placé un, ou sélectionnez-le plus tard et saisissez. L'arc ou le cercle conserve son centre et change de taille ; une face qu'il délimite (un disque, l'extrémité d'une fente) change avec lui. Deux cas ne font que mesurer :

- **Une cote d'angle** ne modifie jamais le modèle. Pour changer un angle, faites pivoter les arêtes avec {{ui:Rotation}}.
- **Le cercle à l'extrémité d'un cylindre** (un cercle que vous avez tiré avec {{ui:Pousser/tirer}}) ne peut pas être redimensionné depuis sa cote, car ses côtés devraient changer aussi. Mettez plutôt le cylindre à l'échelle, autour de son axe.

## Redimensionner le modèle avec une cote

Juste après avoir placé une cote, saisissez une nouvelle longueur et appuyez sur {{key:Enter}} : `6m`, `12'`, `3500` dans un modèle en millimètres. Le modèle prend cette taille.

Plus tard, à tout moment :

1. Avec {{ui:Sélectionner}}, cliquez sur le texte ou la ligne de la cote. {{ui:Infos sur l'entité}} indique **Cote** et affiche sa {{ui:Longueur}}.
2. Saisissez la nouvelle longueur et appuyez sur {{key:Enter}}. Vous pouvez saisir directement dans le champ de valeur, ou dans le champ {{ui:Longueur}} des infos sur l'entité.

### Ce qui bouge

Le second coin que vous avez cliqué se déplace, ainsi que tout ce qui se trouve au-delà :

- **Les deux coins sur une même pièce** (la largeur d'une boîte, la hauteur d'un mur) : le côté du coin mobile glisse vers l'extérieur ou l'intérieur, et les faces qui lui sont jointes s'étirent. Une boîte reste un solide fermé, et tout ce qui se trouve entièrement de ce côté, comme un composant fenêtre, se déplace avec elle.
- **Les coins sur deux pièces séparées** (l'écart entre deux boîtes) : la pièce du coin mobile se déplace entière, et l'écart change.
- **Le coin mobile dans un groupe ou un composant** dont l'autre coin ne fait pas partie : le groupe entier se déplace.
- **Les deux coins dans le même groupe ou composant** : il est étiré à l'intérieur. Un composant change partout où il est placé, comme toujours lorsqu'on le modifie.

Pour changer l'extrémité qui se déplace, sélectionnez la cote et choisissez dans {{ui:Se déplace}}, dans {{ui:Infos sur l'entité}} :

| Choix | Ce qui se passe |
|---|---|
| {{ui:Deuxième extrémité}} (par défaut) | L'extrémité cliquée en second se déplace |
| {{ui:Première extrémité}} | L'extrémité cliquée en premier se déplace |
| {{ui:Les deux extrémités (centré)}} | Chaque extrémité se déplace de la moitié du changement, si bien que le milieu reste en place |

### Quand un redimensionnement est refusé

ModelCraft ne modifie rien et indique pourquoi dans la barre d'état :

- « une face se courberait hors de son plan » : la cote traverse la forme en biais. Cotez le long d'une arête, ou le long du rouge, du vert ou du bleu.
- « une face se réduirait à rien ou se retournerait » : la nouvelle longueur est trop courte pour la forme.
- « l'extrémité qui se déplace n'est pas sur un coin du modèle » : cette extrémité a été placée dans le vide ou au milieu d'une arête. Choisissez l'autre extrémité dans {{ui:Se déplace}}, ou placez la cote sur deux coins.
- « une longueur doit être supérieure à zéro ».

Chaque redimensionnement est une étape : {{key:Mod+Z}} l'annule.

## Ressaisir une taille dans les infos sur l'entité

Vous n'avez pas toujours besoin d'une cote :

- **Une arête** : sélectionnez-la. Sa {{ui:Longueur}} dans {{ui:Infos sur l'entité}} est une zone de saisie. Saisir une longueur dans le champ de valeur fonctionne aussi. L'extrémité située plus loin selon le rouge, puis le vert, puis le bleu se déplace, et ce qui lui est joint s'étire. Par exemple, ressaisir l'arête avant-inférieure d'une boîte la rend plus large vers la droite.
- **Un groupe ou un composant** : sélectionnez-le. {{ui:Largeur (rouge)}}, {{ui:Profondeur (vert)}} et {{ui:Hauteur (bleu)}} sont des zones de saisie. Son côté éloigné (droite, arrière, dessus) se déplace. Ce sont les axes propres au groupe, avant toute rotation que vous lui avez appliquée.

Appuyez sur {{key:Enter}} pour appliquer, ou sur {{key:Esc}} pour remettre l'ancienne valeur.

## Les cotes suivent le modèle

Une cote est attachée aux deux coins sur lesquels elle a été placée (un angle : à son coin et aux extrémités éloignées de ses deux arêtes ; un rayon ou un diamètre : à son arc ou son cercle). Déplacez, poussez/tirez ou redimensionnez la géométrie, et la cote suit et affiche la nouvelle longueur. Elle reste attachée lorsque vous transformez la géométrie en groupe ou en composant.

Si une extrémité a été placée à un endroit qui n'est pas un coin (sur une face, ou dans le vide), ou si son coin est effacé, cette extrémité reste où elle était. La cote mesure toujours, mais elle ne peut redimensionner qu'à partir de son autre extrémité.

## Supprimer des cotes

- Une cote : sélectionnez-la et appuyez sur {{key:Delete}}, ou cliquez dessus avec la {{ui:Gomme}}.
- Toutes les cotes : sans rien sélectionner, cliquez sur {{ui:Supprimer toutes les cotes}} dans {{ui:Infos sur l'entité}}.

Les cotes sont enregistrées dans le fichier `.modelcraft`. Elles ne sont pas exportées vers d'autres formats, qui ne transportent que le modèle 3D. Un fichier contenant des cotes s'ouvre quand même dans une ancienne version de ModelCraft, sans elles.
