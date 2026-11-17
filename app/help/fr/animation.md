---
title: Animer la caméra et les objets, et calculer une vidéo
summary: Enregistrez des clés pour la caméra et pour les groupes et composants sur une chronologie, lisez-les dans la vue, et calculez l'animation en vidéo WebM avec le ciel, le soleil et les matériaux du moteur de rendu.
keywords: animation, animer, chronologie, image clé, clés, image clé, trajectoire de caméra, survol, parcours, promenade, parcourir, vidéo, film, webm, calculer une vidéo, images, fréquence d'images, fps, tête de lecture, clé automatique, transition, lisser, maintenir, scènes, séquence PNG, mouvement
from: d3a58249
---

La **chronologie** déplace la caméra et tout groupe ou composant au fil du temps. Vous enregistrez des **clés** (où se trouve un élément à un instant donné) ; ModelCraft le déplace en douceur d'une clé à l'autre. Lisez-la dans la vue, puis calculez-la en vidéo avec le même ciel, le même soleil, les mêmes matériaux et les mêmes lampes qu'[une image calculée](topic:render).

## Ouvrir la chronologie

Cliquez sur {{ui:Vues}} dans le groupe {{ui:Caméra}}, puis sur {{ui:Chronologie d'animation}}. La chronologie s'ouvre sous la vue : les commandes en haut, puis une ligne **Caméra** et une ligne pour chaque groupe ou composant qui bouge. Les losanges sont des clés ; la ligne rouge est la **tête de lecture**, l'instant affiché dans la vue.

:::touch
Sur un téléphone, la chronologie s'ouvre elle aussi sous la vue. Ses commandes tiennent sur une ligne : balayez-la latéralement pour atteindre le reste ; le bouton qui ferme la chronologie reste à son extrémité.
:::

Faites glisser le curseur (ou cliquez dans une ligne) pour déplacer la tête de lecture. {{ui:Lecture}} joue depuis la tête de lecture et devient {{ui:Pause}} pendant la lecture ; cliquez à nouveau pour arrêter à cet endroit. {{key:Space}} fait la même chose tant que la chronologie est ouverte (chronologie fermée, Espace reste Sélectionner). {{ui:Clé précédente}} et {{ui:Clé suivante}} sautent d'une clé à l'autre. Un style personnalisé peut attribuer une autre touche à lecture et pause : {{ui:Paramètres}}, puis les menus, les touches et la souris, la commande *Lire ou mettre en pause l'animation*.

## Déplacer la caméra

1. Placez la tête de lecture à l'endroit où le plan commence (0 s), réglez la vue et cliquez sur {{ui:Clé caméra}}.
2. Placez la tête de lecture plus loin (par exemple 4 s), faites orbiter, faites un panoramique ou avancez la vue jusqu'à la position suivante, puis cliquez à nouveau sur {{ui:Clé caméra}}.
3. Ajoutez autant de clés que vous le souhaitez, puis cliquez sur {{ui:Lecture}}.

La caméra passe en douceur par chaque clé, et démarre et s'arrête au repos.

:::tip
Vous avez déjà des [scènes](topic:scenes) ? {{ui:Depuis les scènes}} crée la trajectoire de la caméra à partir d'elles : elle s'arrête à chaque scène, puis se dirige vers la suivante. Si la chronologie ne contient aucune clé, {{ui:Rendu vidéo…}} s'en charge seul : deux scènes suffisent pour une vidéo de parcours.
:::

## Déplacer un groupe ou un composant

1. Sélectionnez le groupe ou le composant (seuls les groupes et composants entiers bougent ; [créez d'abord un groupe](topic:groups-components) si nécessaire).
2. À 0 s, cliquez sur {{ui:Clé de la sélection}}.
3. Placez la tête de lecture plus loin, [déplacez, faites pivoter ou mettez à l'échelle](topic:move-copy) le groupe à l'endroit voulu, puis cliquez à nouveau sur {{ui:Clé de la sélection}}.

Il glisse, pivote et grandit entre ses clés. Les rotations prennent le chemin le plus court.

**Clé automatique** évite le clic de l'étape 3 : tant que {{ui:Clé automatique}} est activée, un groupe ou composant sélectionné que vous déplacez, faites pivoter ou mettez à l'échelle reçoit de lui-même une clé à la tête de lecture (et, la première fois, une clé à 0 s à l'endroit où il se trouvait).

:::note
Déplacer un groupe animé sans clé ne dure que jusqu'au prochain déplacement de la tête de lecture : la fois suivante où vous lisez ou faites défiler l'animation, il retourne là où ses clés le placent. La barre d'état l'indique. Appuyez sur {{ui:Clé de la sélection}} pour le conserver.
:::

## Modifier les clés

- **Choisir une clé** en cliquant sur son losange : la tête de lecture s'y rend.
- **Déplacer une clé** en faisant glisser son losange le long de sa ligne, ou avec {{key:Left}} et {{key:Right}} (une image ; avec {{key:Shift}}, dix).
- **Supprimer** avec {{ui:Supprimer la clé}} (la clé choisie, ou toutes les clés à la tête de lecture) ou avec {{key:Delete}} sur un losange choisi.
- **Comment elle évolue ensuite**, pour la clé choisie : {{ui:Lisser}} (une courbe qui passe par les clés voisines), {{ui:Régulier}} (une ligne droite à vitesse constante), {{ui:Ralentir au début et à la fin}} (s'arrête sur cette clé) ou {{ui:Maintenir}} (reste en place jusqu'à la clé suivante).
- **{{ui:Durée (s)}}** règle la longueur de l'animation ; une clé placée après la fin la rallonge. Pour la raccourcir, déplacez ou supprimez d'abord les clés situées après la nouvelle fin.
- Le **×** sur la ligne d'un groupe arrête son animation.

La chronologie a ses propres {{ui:Annuler}} et {{ui:Rétablir}} : l'annulation du modèle ({{key:Mod+Z}}) modifie le modèle, pas les clés. L'animation est enregistrée dans le fichier `.modelcraft`. Fermer la chronologie remet les groupes en mouvement dans leur première pose.

## Calculer la vidéo

1. Cliquez sur {{ui:Calculer une vidéo}} dans la chronologie (ou sur {{ui:Exporter}} › {{ui:Rendu vidéo…}}).
2. Choisissez la {{ui:Taille}}, la {{ui:Fréquence d'images}}, la {{ui:Qualité de chaque image}} et le {{ui:Fichier}}.
3. Cliquez sur {{ui:Calculer une vidéo}}. Chaque image s'affiche au fur et à mesure de sa création, avec le temps restant.
4. Une fois terminé, cliquez sur {{ui:Enregistrer la vidéo}}.

{{ui:Arrêter}} (ou {{key:Esc}}) met fin au calcul ; {{ui:Enregistrer la vidéo}} conserve alors les images déjà calculées sous forme de vidéo plus courte.

Le ciel, le soleil, les matériaux, les lampes et la luminosité sont ceux réglés dans {{ui:Calculer un rendu…}} : réglez-les d'abord là-bas, en vérifiant une image fixe. Chaque image est calculée sur cet ordinateur ; rien n'est envoyé.

| Réglage | Ce qu'il fait |
|---|---|
| {{ui:Taille}} | 480p, 720p HD, 1080p Full HD, ou la forme propre de la vue (jusqu'à 1920 pixels de large) |
| {{ui:Fréquence d'images}} | 24, 25, 30 ou 60 images par seconde. Deux fois plus d'images prennent deux fois plus de temps |
| {{ui:Qualité de chaque image}} | {{ui:Quick}} (4 passes), {{ui:Draft}} (16) ou {{ui:Good}} (64) : davantage de passes donnent des ombres et des bords plus lisses |
| {{ui:Fichier}} | {{ui:Vidéo WebM}}, {{ui:Vidéo MP4 (H.264)}} lorsque le navigateur peut l'écrire, ou {{ui:Images PNG, une par image de la vidéo (ZIP)}} pour les logiciels de montage vidéo (et pour les navigateurs sans encodeur vidéo) |

:::tip
Une vidéo de 10 secondes à 30 images par seconde compte 301 images. Essayez d'abord {{ui:Quick}} en 480p pour vérifier le mouvement, puis calculez en {{ui:Draft}} ou {{ui:Good}} à une taille plus grande.
:::

La vidéo WebM se lit dans les navigateurs et dans VLC, et les logiciels de montage la convertissent. {{ui:Vidéo MP4 (H.264)}} est proposée lorsque le navigateur peut l'écrire. {{ui:Calculer une vidéo}} utilise le moteur de rendu rapide ; pour un tracé de chemin de chaque image, choisissez {{ui:Ajouter cette animation à la file}} dans la même boîte de dialogue : les images se calculent dans la [file de rendu](topic:render#the-render-queue), qui nécessite WebGPU.

:::firefox safari
Calculer une vidéo nécessite un navigateur qui encode lui-même la vidéo (WebCodecs) : les versions récentes de Chrome, Edge, Firefox et Safari 17 le font. Sans cela, choisissez {{ui:Images PNG, une par image de la vidéo (ZIP)}}.
:::

## Points à connaître

- Seuls les groupes et composants entiers se déplacent. Les faces, les arêtes, l'heure du soleil et le style ne changent pas encore au fil du temps.
- {{ui:Exporter une animation}} sous [Scènes](topic:scenes) enregistre toujours la vue telle qu'elle apparaît à l'écran, en temps réel ; {{ui:Calculer une vidéo}} calcule chaque image avec le ciel, les ombres et les matériaux.
