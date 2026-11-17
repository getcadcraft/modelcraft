---
title: Examiner le modèle avec un casque VR
summary: Parcourir le modèle en grandeur réelle avec un casque VR : se déplacer, tourner, mesurer, le couper, placer des problèmes avec une image, le voir en maquette sur table et retrouver les autres participants d'une session Live.
keywords: vr, réalité virtuelle, casque, webxr, xr, immersif, quest, oculus, vive, index, pico, parcourir, pas à pas, téléportation, revue de conception, revue, mesurer, coupe, couper, problème, problèmes, bcf, maquette, modèle réduit, présence, avatars, live, ensemble
from: fa2f591a
---

{{ui:Examiner en VR}} vous place à l'intérieur du modèle avec un casque VR, en grandeur réelle. Vous vous tenez à l'endroit où se trouve la caméra de la vue, sur le sol en dessous, face dans la même direction. Rien n'est téléversé : le casque affiche ce que le navigateur dessine sur cet ordinateur (ou dans le navigateur du casque).

## Ce qu'il vous faut

- Un casque que le navigateur peut piloter (WebXR) : le navigateur intégré d'un casque autonome, ou Chrome ou Edge sur un PC avec un casque connecté.
- ModelCraft ouvert sur une page sécurisée (https), comme c'est le cas sur ce site.

Sans casque, {{ui:Examiner en VR}} est grisé et indique pourquoi.

## Démarrer

1. Réglez la vue là où vous voulez commencer : dans une pièce, ou à l'extérieur face au bâtiment.
2. Cliquez sur {{ui:Vues}} dans le groupe {{ui:Caméra}}, puis sur {{ui:Examiner en VR}}.
3. Mettez le casque.

Le menu se trouve sur le dos de votre main gauche. Pointez-le avec la manette droite et appuyez sur la gâchette pour choisir un bouton. (Avec une seule main, le menu flotte devant l'endroit où vous avez commencé.)

## À quoi cela ressemble

Le casque affiche le modèle avec l'aspect de la [vue en direct](topic:live-view) : les aspects et matériaux que vous avez donnés aux faces, le ciel et le soleil d'après le lieu et la date de votre modèle avec son ombre, les lampes, les plantes et rochers répartis, et la lumière rebondie sur les murs et les sols (calculée sur cet ordinateur pendant que vous regardez autour de vous, et qui vous suit lorsque vous vous déplacez). La luminosité et la transformation de vue (ACES ou AgX) sont celles de [Calculer un rendu](topic:render). La quantité affichée dépend de ce que le navigateur du casque sait faire, comme sur ordinateur ; l'occlusion ambiante, les reflets et le halo lumineux restent sur ordinateur.

## Se déplacer

- **Sauter :** dans {{ui:Déplacer}}, pointez un sol et appuyez sur la gâchette : vous atterrissez là. Ou poussez le joystick vers l'avant pour viser, et relâchez pour sauter. Vous ne pouvez atterrir que sur des planchers et du sol (surfaces tournées vers le haut), jamais sur un mur.
- **Tourner :** poussez le joystick à gauche ou à droite : vous tournez de 30° à chaque fois.
- **Marcher :** dans votre zone de jeu, marchez simplement.

## Mesurer

Choisissez {{ui:Mesurer}}, puis appuyez sur la gâchette sur deux points. La distance s'affiche entre eux, dans les unités du modèle. Un point proche d'un coin s'y accroche.

## Le couper

Choisissez {{ui:Coupe}} et appuyez sur la gâchette sur une surface :

- sur un mur (ou tout ce qui n'est pas un sol) : tout ce qui se trouve entre vous et cette surface est retiré, pour que vous voyiez à l'intérieur. Cela marche mieux depuis l'extérieur, ou d'un bout à l'autre d'une pièce ;
- sur un sol, depuis le haut : une coupe en plan à 1.2 m au-dessus de ce sol, pour que les murs montrent leur partie basse.

{{ui:Effacer}} retire la coupe et les mesures. Si un plan de coupe traverse le modèle dans la vue au moment où vous commencez, le casque démarre avec lui.

## Placer un problème

Choisissez {{ui:Problème}} et appuyez sur la gâchette à l'endroit du problème. Une épingle numérotée le marque, et ModelCraft conserve le problème avec une image de ce que vous avez vu et de l'endroit où vous vous teniez. Lorsque vous quittez la VR, les problèmes sont dans la liste {{ui:Problèmes}} à droite :

- le bouton en forme d'œil montre le problème depuis l'endroit où il a été placé ;
- {{ui:Enregistrer en BCF}} télécharge tous les problèmes dans un fichier BCF, que les logiciels de revue BIM ouvrent (caméra et image incluses) ;
- ils sont aussi enregistrés dans le fichier `.modelcraft`.

Ajoutez un commentaire à un problème après être sorti de la VR, dans un logiciel BCF : saisir dans le casque n'est pas encore disponible.

## Voir comme une maquette sur table

{{ui:Maquette}} réduit le modèle pour qu'il tienne sur une table devant vous ; faites le tour, ou tournez-le avec le joystick. {{ui:Taille réelle}} vous remet là où vous étiez.

## Avec d'autres, en direct

Dans une [session Live](topic:work-live), chacun en VR voit les autres sous forme d'une tête et de deux mains dans leur propre couleur, avec leur nom, et un point là où chacun pointe. Les modifications de chacun parviennent à votre casque en un instant. Les personnes présentes au bureau ne sont pas encore affichées dans le casque.

## Quitter

Choisissez {{ui:Quitter la VR}} (ou retirez le casque et mettez fin à la session là). La vue à l'écran se déplace à l'endroit où se trouvait votre tête.

:::note
Testé uniquement avec un émulateur de casque, pas encore avec un vrai casque. Un grand modèle peut faire saccader le casque : masquez d'abord ce dont vous n'avez pas besoin ([masquer et isoler](topic:hide-isolate)).
:::
