---
title: Le ViewCube
summary: Cliquez sur une face, une arête ou un coin du cube dans l'angle de la vue pour regarder depuis cet endroit, faites-le glisser pour orbiter, tournez l'anneau de la boussole, passez d'une vue de face à l'autre et revenez à la vue d'accueil.
keywords: view cube, viewcube, cube, boussole, nord, vue d'accueil, vues standard, dessus, face, droite, iso, coin, arête, orbite, rotation de la vue, icône des axes, indicateur de coin, navigation
from: e1ec1347
---

Le ViewCube se trouve en haut à droite de la vue 3D. Il tourne avec la vue, si bien qu'il indique toujours dans quel sens vous regardez : {{ui:Dessus}} est en haut, {{ui:Face}} regarde vers le sud (vous regardez vers le nord, le long de l'axe vert, quand vous la regardez), {{ui:Droite}} regarde vers l'est (axe rouge). Il reste translucide tant que vous ne le pointez pas.

## Regarder depuis un côté, une arête ou un coin

1. Placez le pointeur sur le cube. La partie sous le pointeur s'éclaire : le milieu d'une face, une arête (elle s'éclaire sur les deux faces qui la partagent) ou un coin (sur les trois faces).
2. Cliquez. La vue tourne pour regarder depuis là, en gardant le même centre et le même zoom.

Il y a 26 positions sur lesquelles cliquer : 6 faces ({{ui:Dessus}}, {{ui:Dessous}}, {{ui:Face}}, {{ui:Arrière}}, {{ui:Gauche}}, {{ui:Droite}}), 12 arêtes et 8 coins. Un coin donne la vue classique en trois quarts ; une arête se situe à mi-chemin entre deux faces.

Cliquer sur {{ui:Face}} équivaut à {{ui:Vues}}, {{ui:Face}} dans la barre d'outils, sans l'ajustement du zoom. {{ui:Vues}} zoome toujours sur l'ensemble du modèle.

## Faire orbiter en faisant glisser le cube

Faites glisser le cube pour tourner la vue, comme pour l'orbite dans la vue elle-même. Un glissement n'est jamais pris pour un clic : vous pouvez saisir le cube n'importe où.

## L'anneau de la boussole

L'anneau sous le cube porte N, E, S et O.

- **Faites glisser l'anneau** pour tourner le modèle autour de l'axe vertical, comme sur un plateau tournant. L'anneau suit le pointeur.
- **Cliquez sur une lettre** pour regarder depuis ce côté, en gardant l'inclinaison de votre regard vers le bas. Dans une vue prise verticalement depuis le haut, la lettre sur laquelle vous cliquez passe en bas de l'écran.

## Vues de face : flèches

Lorsque vous regardez une face bien en face, de petites flèches apparaissent autour du cube :

- Les quatre **triangles** amènent la face de ce côté devant : le triangle au-dessus du cube montre la face qui était en haut, et ainsi de suite.
- Les deux **flèches courbes** en haut à droite font tourner l'image d'un quart de tour dans le sens horaire ou anti-horaire, sans changer la face que vous regardez. Utilisez-les pour tourner un plan afin qu'un long mur traverse l'écran.

## Accueil

Le bouton maison en haut à gauche du cube revient à la vue {{ui:Iso}} en trois quarts et ajuste tout le modèle à l'écran. {{key:Home}} fait la même chose lorsque le cube a le focus clavier.

## Au clavier

Atteignez le cube avec {{key:Tab}}, puis :

| Touche | Action |
|---|---|
| {{key:left}} / {{key:right}} | choisit une face, une arête ou un coin autour du cube, par pas d'un huitième de tour (les lecteurs d'écran annoncent lequel) |
| {{key:up}} / {{key:down}} | choisit un élément plus haut ou plus bas, jusqu'à {{ui:Dessus}} ou jusqu'à {{ui:Dessous}} |
| {{key:Enter}} ou {{key:Space}} | regarde depuis l'élément choisi |
| {{key:Shift+left}} / {{key:Shift+right}} | tourne la vue d'un quart de tour autour de l'axe vertical |
| {{key:Home}} | la vue d'accueil |
| {{key:Esc}} | quitte le cube |

Les touches pressées sur le cube restent au cube : elles ne lancent pas d'outils de ModelCraft.

## Icône des axes, ou rien à la place

Ouvrez {{ui:Paramètres}} ({{key:Mod+,}}), l'onglet {{ui:ModelCraft}}, et réglez **Indicateur de coin** sur {{ui:ViewCube}} (la valeur de départ), {{ui:Icône des axes}} (un petit repère X, Y, Z en bas à gauche : X rouge, Y vert, Z bleu) ou {{ui:Aucun}}. Ce navigateur retient le choix. Voir [Réglages de ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft n'a pas de roulis : hors des vues strictement de dessus et de dessous, le haut de l'écran est toujours le haut du modèle. Le cube et les flèches courbes peuvent tourner une vue en plan ; ils ne peuvent pas faire basculer une vue de côté sur son bord.
:::
