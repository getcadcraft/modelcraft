---
title: Orbite, panoramique et zoom
summary: Déplacez-vous autour du modèle avec une souris, un pavé tactile, un écran tactile ou le clavier, et passez aux vues standard.
keywords: orbite, panoramique, zoom, appui prolongé, trois doigts, deux doigts, toucher, naviguer, caméra, vue, faire pivoter la vue, pavé tactile, tactile, pincement, bouton du milieu, zoom étendue, perspective, parallèle, vue de dessus, isométrique
from: 10d4d33a
---

Vous pouvez déplacer la caméra à tout moment, même au milieu d'un trait ou d'un poussage : l'outil attend là où il était.

## Avec une souris à trois boutons

| Pour | Faites ceci |
|---|---|
| Orbiter | Faites glisser avec le bouton du milieu (appuyez sur la molette) |
| Panoramique | Faites glisser avec le bouton droit, ou maintenez {{key:Shift}} et faites glisser avec le bouton du milieu. Appuyer ou relâcher {{key:Shift}} pendant un glissement bascule entre orbite et panoramique |
| Zoom | Tournez la molette. Le zoom se fait vers la face sous le pointeur, ou vers le point sous lui à la profondeur du centre de la vue |
| Voir le modèle entier | {{key:Shift+Z}} ou {{ui:Étendue}} |

L'orbite fait pivoter la vue autour de la partie du modèle sous le pointeur, de sorte que ce point reste en place pendant que tout tourne autour de lui. Au-dessus d'un espace vide, la vue pivote autour du centre de la vue. Le panoramique garde le point que vous avez saisi sous le pointeur.

Pour toujours orbiter autour du centre de la vue, ou pour rendre l'orbite et le panoramique plus rapides ou plus lents, ouvrez {{ui:Paramètres}} ({{key:Mod+,}}), l'onglet {{ui:ModelCraft}}, **Orbite et panoramique**. Les vitesses s'appliquent à la souris, au pavé tactile, à l'écran tactile et aux touches fléchées.

Un clic droit sans glisser ne fait rien ; ModelCraft n'a pas de menu contextuel au clic droit.

## Sans bouton du milieu

Utilisez les outils de caméra de la barre d'outils, ou le clavier :

1. Appuyez sur {{key:O}} (ou cliquez {{ui:Orbite}}) et faites glisser avec le bouton gauche pour orbiter. Maintenez {{key:Shift}} pendant le glissement pour faire un panoramique.
2. Appuyez sur {{key:H}} (ou cliquez {{ui:Panoramique}}) et faites glisser pour faire un panoramique.
3. Appuyez sur {{key:Z}} (ou cliquez {{ui:Zoom}}) et faites glisser vers le haut pour zoomer, vers le bas pour dézoomer.
4. Appuyez sur {{key:Space}} pour revenir à {{ui:Sélectionner}}, ou appuyez ensuite sur la touche de l'outil souhaité.

Les outils de caméra remplacent l'outil que vous utilisiez. Pour regarder autour de vous au milieu d'une opération sans la perdre, utilisez plutôt le clavier :

- Les touches fléchées font pivoter la vue (orbite).
- {{key:Shift}} avec les touches fléchées fait un panoramique.

Pendant qu'un outil de dessin est au milieu d'une opération (après son premier clic), les touches fléchées verrouillent des directions au lieu d'orbiter. Voir [Inférence et accrochage](topic:inference#lock-a-direction).

## Sur un pavé tactile

Le plus simple : ouvrez {{ui:Paramètres}} ({{key:Mod+,}}), l'onglet {{ui:ModelCraft}}, et réglez Défilement sur **Pavé tactile** (ou laissez sur « Déterminer automatiquement »). Faites ensuite glisser deux doigts pour orbiter, maintenez {{key:Shift}} et glissez pour faire un panoramique, et pincez pour zoomer, sans boutons de caméra. Voir [Paramètres de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Avec Défilement réglé sur **Molette de souris** :

:::mac
- **Zoom :** faites défiler avec deux doigts, ou pincez. Les deux zooment vers le pointeur.
- **Panoramique :** appuyez avec deux doigts (clic secondaire) et gardez les doigts posés pendant le glissement. Activez « Clic secondaire » dans **Réglages Système**, puis **Trackpad**, si le clic à deux doigts ne fait rien.
- **Orbite :** appuyez sur {{key:O}} et glissez avec un doigt, ou utilisez les touches fléchées.
- Maintenir {{key:Ctrl}} pendant un clic peut ne pas compter comme un clic droit dans ModelCraft, selon le navigateur : il peut agir comme un clic avec {{key:Ctrl}} maintenu. Utilisez l'appui à deux doigts pour faire un panoramique.
:::

:::windows linux
- **Zoom :** faites défiler avec deux doigts. Le pincement zoome aussi lorsque le pilote du pavé l'envoie comme défilement avec {{key:Ctrl}}.
- **Panoramique :** faites glisser avec le bouton droit (sur beaucoup de pavés, appuyez dans le coin inférieur droit et glissez), ou appuyez sur {{key:H}} et glissez.
- **Orbite :** appuyez sur {{key:O}} et glissez, ou utilisez les touches fléchées.
:::

Avec Molette de souris, le défilement à deux doigts zoome ; il ne fait pas de panoramique. C'est l'inverse de nombreuses pages web, et c'est ainsi que se comporte la molette dans la plupart des modeleurs 3D.

:::tip
{{key:Space}} sélectionne l'outil {{ui:Sélectionner}} dans ModelCraft. Maintenir {{key:Space}} et glisser ne fait pas de panoramique, contrairement à certaines autres applications.
:::

## Sur un écran tactile

:::touch
- **Un doigt** utilise l'outil en cours : **touchez** pour cliquer, **appuyez et glissez** pour dessiner ou déplacer.
- Pendant qu'un doigt est posé sur un outil de dessin, une **loupe** au-dessus de lui montre ce qui est sous le doigt, pour que vous voyiez l'extrémité, le milieu ou l'arête où il s'accroche avant de relâcher.
- **Restez immobile** une demi-seconde pour terminer ce que fait l'outil, comme le fait {{key:Enter}} : une courbe, une chaîne de lignes. Sans rien en cours, rester immobile puis glisser le même doigt **fait pivoter la vue** jusqu'à ce que vous le relâchiez.
- **Deux doigts** glissés ensemble font un **panoramique** ; **pincez** pour zoomer. Les deux fonctionnent en un seul geste.
- **Trois doigts** glissés ensemble **orbitent**.
- Pour les inverser (deux doigts orbitent, trois font un panoramique), ouvrez {{ui:Paramètres}}, l'onglet {{ui:ModelCraft}}, Écran tactile.
- Poser un second doigt **annule** ce que le premier a commencé (un rectangle à moitié dessiné, un poussage en cours). Relâchez vos doigts et recommencez.
- Une petite barre en bas de la vue propose **Terminé** ({{key:Enter}}), **Abandonner** ({{key:Esc}}) et **Annuler**, pour le cas où il n'y a pas de clavier.
- Les zones de saisie et de sélection atteignent un peu plus loin qu'avec la souris, et les boutons sont plus grands, pour qu'un doigt puisse les toucher.
:::

:::mouse
Sur un écran tactile, un doigt utilise l'outil en cours (toucher pour cliquer, rester immobile pour terminer, ou rester immobile puis glisser pour orbiter), deux doigts font un panoramique et pincent pour zoomer, trois doigts orbitent, et une petite barre propose Terminé, Abandonner et Annuler.
:::

## Vues standard

1. Cliquez {{ui:Vues}} à l'extrémité droite de la barre d'outils.
2. Choisissez {{ui:Iso}}, {{ui:Dessus}}, {{ui:Face}}, {{ui:Droite}}, {{ui:Arrière}}, {{ui:Gauche}} ou {{ui:Dessous}}.

La vue se tourne vers cette direction et ajuste l'ensemble du modèle. {{ui:Face}} regarde vers le nord, le long de l'axe vert ; {{ui:Dessus}} regarde verticalement vers le bas, nord en haut.

Le cube de vue en haut à droite de la vue fait la même chose en un clic, avec en plus les arêtes et les angles, un anneau de boussole pour tourner le modèle et un bouton d'accueil. Voir [Le cube de vue](topic:view-cube).

## Projection en perspective et parallèle

Choisissez {{ui:Vues}}, puis {{ui:Perspective}}. Une coche indique que la perspective est active. Désactivée, la vue est une projection parallèle (orthographique) : les lignes parallèles du modèle restent parallèles à l'écran, ce qui est voulu pour les élévations depuis {{ui:Face}} ou {{ui:Droite}}. La barre d'état affiche « Perspective. » ou « Projection parallèle. »

Chaque scène se souvient si elle était en perspective. Voir [Enregistrer des vues comme scènes](topic:scenes).
