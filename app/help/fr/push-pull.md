---
title: Pousser et tirer des faces pour en faire des solides
summary: Transformez une face en boîte, rendez un bâtiment plus haut ou plus bas, ajoutez une travée ou un retrait, et répétez une distance par un double-clic.
keywords: pousser tirer, extrusion, hauteur, solide, boîte, masse, plus haut, retrait, saillie, répéter, double-clic, volume, niveau, sur la face, au ras, même hauteur
from: dc093c91
---

{{ui:Pousser/tirer}} ({{key:P}}) déplace une face selon sa propre direction : de haut en bas pour un plancher, vers l'intérieur ou l'extérieur pour un mur. Le résultat dépend de la face.

## Créer un solide à partir d'une face

1. Dessinez une face, par exemple un rectangle au sol ([Dessiner des faces](topic:draw-faces)).
2. Appuyez sur {{key:P}}.
3. Survolez la face. Elle se met en surbrillance.
4. Cliquez sur la face, puis déplacez le pointeur. La face monte (ou descend) et des côtés se forment à partir de ses arêtes. La zone de valeur ({{ui:Distance}}) et l'info-bulle affichent la distance.
5. Cliquez pour terminer, ou saisissez une distance et appuyez sur {{key:Enter}} : `3m`, `10'`, `2700` dans un modèle en millimètres.

   Vous avez maintenant un solide fermé. Sélectionnez-le entièrement et groupez-le (voir [Groupes et composants](topic:groups-components)) : {{ui:Infos sur l'entité}} affiche alors « Solide : oui » et son volume.

Une face isolée peut aller dans les deux sens : tirez-la vers le haut pour une masse au-dessus du sol, poussez-la vers le bas pour une fosse ou une fondation.

:::tip
Au lieu de cliquer deux fois, appuyez sur la face, faites glisser, puis relâchez. Sur un écran tactile, c'est la méthode naturelle : appuyez, glissez, relevez.
:::

## Tirer jusqu'à la hauteur d'un autre élément

Pendant que vous tirez, survolez un coin, un point milieu, une arête ou un guide d'une autre partie du modèle. La face s'aligne sur cette hauteur et un repère indique le point. Utilisez-le pour rendre deux blocs de même hauteur, ou pour vous arrêter sur une ligne-guide placée avec le [mètre ruban](topic:guides-measure).

Vous pouvez aussi survoler une face parallèle à celle que vous poussez, comme le dessus d'un autre bloc ou le dessus de la boîte sur laquelle repose un poteau. L'info-bulle indique « Sur la face », et la face que vous poussez se termine au même niveau. Par exemple, poussez la face intérieure d'un tuyau vers le bas jusqu'à ce qu'elle soit au niveau de la boîte située sous le tuyau.

Une face inclinée par rapport à celle que vous poussez ne fixe pas de niveau : la distance suit le pointeur. Il en va de même pour une face située derrière celle que vous poussez.

Lorsqu'une face poussée se termine à nouveau au ras des faces qui l'entourent, ses côtés disparaissent. Aucun côté de hauteur nulle n'est conservé, et le contour que vous avez dessiné reste sur la face, de sorte que vous pouvez la pousser à nouveau plus tard. Pour la refaire d'un seul tenant, effacez les arêtes du contour avec la {{ui:Gomme}} : les deux faces se joignent.

## Rendre une boîte plus haute ou plus basse

Poussez/tirez le dessus d'une boîte. Comme ses côtés montent déjà droit depuis celui-ci, le dessus se déplace simplement : la boîte devient plus haute ou plus basse, et aucune nouvelle arête n'est créée.

- Pousser le dessus jusqu'en bas supprime la boîte. ModelCraft s'arrête à une hauteur nulle ; il ne retourne jamais la boîte à l'envers.
- Il en va de même pour toute face dont les voisines sont toutes alignées sur sa direction, comme l'extrémité d'un mur.

## Ajouter une travée ou un retrait

1. Dessinez un rectangle sur le côté d'une boîte (commencez-le sur la face ; il reste dans le plan de la face).
2. Appuyez sur {{key:P}} et tirez le nouveau rectangle vers l'**extérieur**. Cela ajoute de la matière : une travée, une cheminée, un auvent.
3. Ou poussez-le vers l'**intérieur**. Cela crée un retrait : un porche, une niche, une entrée en retrait.

Lorsque les côtés de la nouvelle partie s'alignent sur des faces déjà présentes, elles se fondent en une seule face, de sorte que vous n'obtenez pas de traits parasites sur un mur plat.

## Pousser jusqu'au bout

Pousser une face dans un solide s'arrête à la première face située derrière elle. Lorsqu'elle l'atteint, elle perce une ouverture. C'est ainsi que l'on fait des fenêtres et des portes dans un mur épais. Voir [Percer une ouverture dans un mur](topic:openings).

## Saisir une distance

Après avoir cliqué sur la face, saisissez la distance et appuyez sur {{key:Enter}}.

- La distance saisie suit le sens de votre déplacement. Si vous n'avez pas encore bougé, elle va vers l'avant de la face (hors d'un solide, vers le haut depuis le sol).
- Saisissez un nombre négatif, comme `-500`, pour aller dans l'autre sens.
- Si vous changez d'avis avant de cliquer, appuyez sur {{key:Esc}}. La face revient à sa place.

## Répéter la dernière distance

Après un premier pousser/tirer, double-cliquez sur une autre face avec {{ui:Pousser/tirer}} encore sélectionné. Elle se déplace de la même distance. C'est le moyen rapide de donner la même épaisseur ou la même hauteur à plusieurs murs ou plusieurs planchers.

ModelCraft retient la distance jusqu'à ce que vous passiez à un autre outil.

## À savoir

- Pousser/tirer agit sur une face à la fois. Si vous cliquez sur autre chose qu'une face, la barre d'état affiche : « Pousser/tirer fonctionne sur une face. Cliquez sur une face. »
- Pour pousser/tirer une face à l'intérieur d'un groupe ou d'un composant, ouvrez-le d'abord (double-cliquez dessus).
- Avec **Collision** activé, un pousser ou un tirer qui rencontre un autre solide s'arrête au contact, et l'info-bulle indique ce qui est touché (le nom de l'objet, ou « géométrie libre dans ce groupe ») et met en surbrillance les faces rencontrées. Une cavité que vous poussez dans son propre solide (par exemple une face décalée repoussée vers le bas) fait partie de ce solide et n'est jamais arrêtée par ses parois.
- Deux solides poussés l'un dans l'autre ne se découpent ni ne se joignent : leurs faces se traversent simplement. Voir [Pas encore disponible](topic:not-built-yet).
