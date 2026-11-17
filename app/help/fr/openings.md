---
title: Percer une ouverture dans un mur
summary: Dessinez une fenêtre ou une porte sur un mur d'épaisseur, puis poussez-la à travers, pour que le mur reçoive un vrai trou.
keywords: fenêtre, porte, ouverture, trou, mur, couper, pousser à travers, vide, épaisseur, façade
from: 6b22f32c
---

Une ouverture a besoin d'un mur à deux faces : une boîte, ou un mur que vous avez fait en tirant un long rectangle fin vers le haut. Une face isolée, debout toute seule, n'a rien à traverser.

## Créer un mur pour s'entraîner

1. Appuyez sur {{key:R}}, cliquez un angle sur le sol et saisissez `6m,0.3m` (ou `20',12"`), puis {{key:Enter}}.
2. Appuyez sur {{key:P}}, cliquez sur le rectangle et saisissez `3m` (ou `10'`), puis {{key:Enter}}.

Vous avez un mur de 300 mm (12 in) d'épaisseur.

## Dessiner l'ouverture

1. Orbitez pour voir le long côté du mur.
2. Appuyez sur {{key:R}}.
3. Survolez la face du mur, puis cliquez là où doit aller l'angle inférieur de la fenêtre. L'indication dit « Sur la face ».
4. Saisissez la largeur et la hauteur de la fenêtre, comme `1.2m,1.5m` (ou `4',5'`), et appuyez sur {{key:Enter}}.

   La fenêtre est une face à part, à l'intérieur de la face du mur, qui présente alors un trou autour d'elle.

Pour la placer à une distance exacte de l'angle et du sol, utilisez d'abord des [guides](topic:guides-measure) : avec {{ui:Mètre ruban}}, faites glisser des guides depuis les arêtes basse et d'extrémité du mur, puis commencez le rectangle là où deux guides se croisent (l'indication dit « Sur le guide »).

## Pousser à travers

1. Appuyez sur {{key:P}}.
2. Cliquez sur la face de la fenêtre et poussez-la dans le mur.
3. Déplacez jusqu'à ce qu'elle s'arrête sur la face arrière, puis cliquez. Ou saisissez l'épaisseur du mur, `300` (ou `12`), et appuyez sur {{key:Enter}}.

   ModelCraft s'arrête sur la face derrière et l'ouvre : le mur présente maintenant un trou traversant, avec quatre faces latérales (tableaux, linteau et appui) qui le bordent. {{ui:Infos sur l'entité}} continue d'appeler le mur un solide fermé lorsqu'il est groupé.

Si vous poussez moins que toute l'épaisseur, vous obtenez une réservation au lieu d'un trou.

## Une porte

Dessinez le rectangle en commençant sur l'arête basse de la face du mur (l'indication dit « Sur l'arête » ou « Extrémité »), pour que l'ouverture atteigne le sol. Poussez-le à travers de la même façon.

## Plusieurs fenêtres de même taille

1. Créez la première ouverture.
2. Pour les suivantes, dessinez les rectangles, puis double-cliquez sur chacun avec {{ui:Pousser/tirer}} : un double-clic répète la dernière distance. Voir [Pousser et tirer](topic:push-pull#repeat-the-last-distance).

## Si la découpe n'a pas traversé

- Le rectangle doit être dessiné **sur** la face du mur. S'il a été dessiné dans le vide devant elle, c'est une face séparée : annulez et redessinez-le en commençant sur la face.
- La poussée s'arrête à la première face derrière l'ouverture. Si quelque chose d'autre gêne à l'intérieur du mur (une face intérieure restée d'un dessin précédent), elle s'arrête là ; effacez les arêtes de cette face et réessayez.
- Une géométrie dans un groupe séparé n'est pas découpée. Ouvrez le groupe qui contient le mur et dessinez l'ouverture à l'intérieur.
