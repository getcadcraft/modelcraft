---
title: Surfaces de forme libre (NURBS)
summary: Courbes et surfaces lisses pour coques de produits, carrosseries et coques de bateaux — lissage, balayage, réseaux de courbes, carreaux à quatre arêtes, raccords, découpes — avec continuité G0, G1 et G2 mesurée sur les surfaces exactes, solides avec union, soustraction et intersection, vues zébrées et de courbure, faces ajustées à un scan avec l'erreur mesurée, et fichiers STEP ou IGES.
keywords: nurbs, scan, rétro-ingénierie, ajuster, maillage vers surface, nuage de points, stl, découpe, trou, couper, solide, solides, booléen, union, soustraire, intersecter, différence, coudre, fermé, forme libre, free-form, surface, surfaces, b-spline, bspline, courbe, spline, lissage, balayage, rail, réseau, coons, carreau, raccord, correspondance, continuité, g0, g1, g2, tangente, courbure, zèbre, points de contrôle, nœuds, degré, step, iges, classe A
from: 09887405
---

Le panneau **Surfaces** crée des courbes et surfaces lisses du type utilisé pour les coques de produits, les carrosseries de voitures et les coques de bateaux : des NURBS, les mêmes mathématiques que celles des autres modeleurs de surfaces. Tout est mesuré sur les surfaces exactes, jamais sur les triangles que vous voyez. Les dimensions du panneau sont en **millimètres**, quelle que soit l'unité affichée par le modèle.

Ouvrez-le depuis le panneau de droite : {{ui:Surfaces}} › {{ui:Ouvrir le panneau Surfaces}}. Un modèle qui contient déjà des surfaces l'ouvre automatiquement.

## Fonctionnement d'une commande

1. Lancez une commande (par exemple **Lissage**). Le panneau indique ce qu'il lui faut encore : des points, des courbes, une arête de surface ou une extrémité de courbe.
2. Sélectionnez-les : cliquez-les dans la vue 3D, ou appuyez sur **Choisir** (ou sur les boutons d'arête et d'extrémité) à côté de chacun dans la liste. Pour une arête, cliquez près de cette arête de la surface.
3. Vérifiez les options (degré, tolérance, continuité, …) puis appuyez sur **Créer**.

Les courbes à partir de points prennent les points saisis un par ligne (`x, y, z` en mm), ou **Choisir des points dans la vue** : chaque clic utilise le même accrochage que les outils de dessin ; appuyez sur <kbd>Entrée</kbd> ou double-cliquez pour terminer, et sur <kbd>Échap</kbd> pour arrêter.

## Courbes

- **Courbe par points** passe par chaque point. **Courbe par points de contrôle** suit à la place une cage de points.
- **Insérer un nœud**, **Augmenter le degré** et **Diminuer le degré** modifient la description d'une courbe sans la déplacer (la réduction est refusée si la courbe bougerait au-delà de la tolérance). **Reconstruire la courbe** lui donne un nouveau nombre de points de contrôle et indique de combien elle s'est déplacée.
- **Faire correspondre la courbe** fait rejoindre l'extrémité d'une courbe à celle d'une autre avec G0 (contact), G1 (même direction) ou G2 (même courbure aussi). **Courbe de fusion** ajoute une nouvelle courbe entre deux extrémités.
- **Joindre les courbes** et **Diviser la courbe**.

## Surfaces

- **Lissage** à travers deux courbes ou plus, **Surface réglée** entre deux, **Extrusion de courbe**, **Révolution de courbe**.
- **Balayage sur un rail** fait suivre un profil sur un chemin sans le tordre ; **Balayage sur deux rails** garde les extrémités du profil sur les deux rails. Les balayages sont ajustés : la ligne d'état indique à quel point ils sont restés proches du balayage exact.
- **Surface à partir d'un réseau de courbes** passe par une grille de courbes (les premières sélections sont les profils, les suivantes les guides). **Carreau à partir de quatre arêtes** remplit quatre courbes qui se rejoignent à leurs angles.
- **Faire correspondre la surface** fait rejoindre une arête de surface à une voisine avec G0, G1 ou G2 ; **Surface de fusion** ajoute une surface entre deux arêtes.
- **Décaler la surface**, **Étendre la surface** (la surface continue comme elle allait), **Reconstruire la surface**, ainsi que les nœuds et le degré des surfaces.

## Vérifier la qualité

Le tableau **Arêtes communes** liste chaque arête partagée par deux surfaces, avec l'écart (mm), l'angle entre elles (°) et le saut de courbure (1/mm), et indique si cela donne G0, G1 ou G2. Une arête moins bonne que ce que vous avez demandé figure aussi dans **Problèmes** (le bouton ⚠ de la barre d'application), avec une correction **Faire correspondre**.

**Afficher comme** › **Rayures zébrées** et **Courbure (gaussienne)** proviennent de la surface exacte : des rayures qui passent sans rupture à travers une arête signifient G1 ; des rayures qui gardent aussi leur largeur signifient G2. La courbure est bleue là où la surface est en selle, rouge là où elle est en dôme, et blanche là où elle est plane. **Points de contrôle** dessine les réseaux de contrôle.

G0 à G2 sont mesurés en 33 points par arête. **La G3 et la qualité « classe A » ne sont pas mesurées** et ne sont pas revendiquées.

## Découper une surface

Le groupe **Découpe** coupe une surface sans changer sa forme : la surface garde tous ses points de contrôle, et seule la partie à l'intérieur du contour est affichée, comptée et écrite. **Découper dans un rectangle** et **Découper avec un cercle** travaillent sur une part (de 0 à 1) de la surface dans chaque direction, sans sélection dans la vue ; **Découper par une courbe** prend une courbe fermée située sur la surface (elle est projetée sur la surface, et refusée avec un message si elle est ouverte ou à plus de la tolérance). Cochez **Découper un trou** pour retirer l'intérieur du contour ; laissez-la décochée pour ne garder que l'intérieur. Une surface peut avoir un contour conservé et autant de trous que voulu ; un contour qui en croise un autre est refusé. **Supprimer la découpe** affiche à nouveau la surface entière. Les arêtes coupées suivent exactement le contour ; l'**Annuler** du panneau reprend une découpe comme toute autre étape.

STEP conserve la découpe comme limites de la face, et IGES comme surface découpée (entité 144) ; les deux la relisent.

## Solides et opérations booléennes

Le groupe **Solides** transforme des surfaces en corps fermés et les combine. Un solide ici est un ensemble des surfaces du panneau qui, ensemble, ferment un volume ; ses faces restent des surfaces NURBS exactes avec leurs découpes.

- **Solide boîte**, **Solide cylindre** et **Solide sphère** en créent un à partir de tailles saisies (en mm) : une boîte à six faces planes, un cylindre à côté arrondi et deux extrémités planes découpées sur le cercle, une sphère faite d'une surface de révolution.
- **Solide à partir de surfaces** regroupe les surfaces que vous avez créées. Sélectionnez-les, ou n'en sélectionnez aucune pour utiliser toutes les surfaces affichées qui ne sont pas encore dans un solide. Elles sont cousues ensemble dans la tolérance : si elles ne se referment pas, rien ne change et le panneau indique combien d'arêtes restent ouvertes et à quelle distance elles doivent se rejoindre.
- **Union**, **Soustraire** (le second solide est retiré du premier) et **Intersecter** (seulement ce que les deux ont en commun) prennent deux solides : cliquez une face de chacun dans la vue, ou appuyez sur **Choisir** dans la liste **Solides**. Cochez **Garder les deux solides** pour les laisser à côté du résultat.

Une opération booléenne garde chaque face sur sa surface exacte et la découpe avec de nouveaux contours le long de l'intersection. La ligne de résultat donne les valeurs mesurées : de combien les points du moteur de solides ont dû bouger pour se poser sur les surfaces exactes (jamais plus que la tolérance), à quel point les points d'intersection sont proches des deux surfaces (généralement quelques millionièmes de millimètre), le volume, et si les nouvelles faces se referment lorsqu'elles sont recousues à partir de leurs surfaces exactes. Les volumes sont mesurés sur des triangles dans la tolérance (0.05 mm sauf si vous en réglez une autre), donc le volume d'une sphère ou d'un cylindre s'affiche légèrement inférieur au volume exact : une tolérance plus petite s'en rapproche. Une opération booléenne qui ne peut pas se faire proprement (les solides n'ont rien en commun, un contour se couperait lui-même) est refusée avec un message et ne change rien. Une opération booléenne compte pour une étape de l'**Annuler** du panneau.

Dans la liste **Solides**, **Dissocier** garde les faces comme simples surfaces ; la corbeille supprime le solide et ses faces.

**Ajouter au modèle** (dans la liste **Solides**) place une copie du solide dans le modèle comme un seul groupe fermé, ses faces en triangles à 0.05 mm près, en une seule étape d'annulation du modèle. Il fonctionne ensuite avec **Union**, **Soustraire** et **Intersecter** du modèle lui-même, avec le pousser/tirer et la vérification d'impression 3D ; le solide exact reste dans le panneau.

## Congés et épaississement

**Congé entre faces** arrondit l'arête où deux faces d'un même solide se rejoignent : choisissez les deux faces (dans la vue, ou avec **Choisir** dans la liste), saisissez le **rayon** et, pour un rayon qui varie le long de l'arête, le **rayon à la fin** (0 garde un seul rayon). Une bille de ce rayon est roulée le long de l'arête en touchant les deux faces ; le congé est l'arc circulaire exact qu'elle laisse en chaque point, réuni en une seule surface, et les deux faces sont découpées là où la bille les touche. Une arête extérieure perd de la matière, un angle intérieur en gagne. La ligne de résultat donne les valeurs mesurées : à quelle distance la surface du congé se trouve de la bille roulante entre les points à partir desquels elle a été construite (des points sont ajoutés jusqu'à ce qu'elle soit à moins d'un quart de la tolérance), le plus grand angle entre le congé et chaque face le long des lignes de contact, et les mêmes valeurs qu'une union. Un rayon qui ne convient pas (la bille sortirait d'une face, ou une face se courbe plus serré que le rayon) est refusé en nommant la face, et rien ne change.

**Plusieurs congés** arrondit plusieurs arêtes en une seule étape : choisissez les deux faces de la première arête, puis les deux faces de la suivante, et ainsi de suite (une face peut figurer dans plusieurs paires, par exemple la face supérieure d'une boîte dans quatre d'entre elles) ; toutes les arêtes reçoivent le rayon saisi. Chaque arrondi est calculé sur le solide tel qu'il était, puis ils sont découpés l'un après l'autre, donc l'ordre n'a pas d'importance. Lorsque deux arêtes arrondies se rejoignent à un angle dont les autres arêtes restent vives, les deux congés se prolongent l'un dans l'autre le long de leur courbe d'intersection (une arête vive). Lorsque trois arêtes extérieures arrondies de trois faces planes à angle droit se rejoignent avec un même rayon, l'angle devient un **carreau de sphère** tangent aux trois congés (décochez **Angles** pour obtenir à la place l'angle vif) ; une arête doit être au moins deux fois plus longue que le rayon là où ses deux extrémités sont de tels angles. La ligne de résultat indique combien d'arêtes ont été arrondies et comment les angles se sont passés. Les arêtes intérieures peuvent aussi être arrondies ensemble, mais un résultat qui ne se referme pas est seulement signalé (la ligne le dit) : vérifiez-le.

**Épaissir en solide** donne une épaisseur à une surface : choisissez-la, saisissez l'**épaisseur**, et cochez **Autre côté** pour la faire grandir dans l'autre sens. La face décalée est ajustée à la surface et mesurée par rapport à elle (la ligne de résultat donne le plus grand écart avec l'épaisseur) ; les parois suivent chaque arête et chaque contour de découpe. Si la surface se courbe plus serré que l'épaisseur de ce côté, ou si une autre partie se trouve plus près que l'épaisseur, c'est refusé en nommant la surface et l'endroit, et rien ne change.

## Annulation, fichier, STEP et IGES

Le panneau a son propre **Annuler** et **Rétablir** (une étape par commande). Les surfaces sont enregistrées dans le fichier `.modelcraft` avec le modèle ; elles ne font pas partie de l'annulation propre au modèle, comme les matériaux du fichier.

**STEP…** (AP242) et **IGES…** enregistrent les courbes et surfaces exactement telles quelles (courbes et surfaces B-spline, rien n'est transformé en triangles). Chaque surface est sa propre face, avec sa découpe ; un solide est écrit comme une seule coque fermée, chaque arête partagée par ses deux faces comme les attendent les autres logiciels de CAO (la ligne d'état indique combien de solides sont sortis ainsi). En IGES, le même solide est une seule B-rep de solide manifold (entité 186 sur la coque fermée 514, faces 510, boucles 508, une liste d'arêtes 504 et une liste de sommets 502) ; un solide dont les faces ne s'apparient pas arête à arête est écrit comme des faces séparées, et la ligne le signale. **Importer…** relit un tel solide comme solide, depuis STEP et depuis IGES. Il lit les courbes et surfaces écrites ainsi, et les ensembles de carreaux `.ccnurbs` ; les solides STEP d'autres logiciels s'ouvrent avec Fichier › Importer, comme maillages.

## Surfaces à partir d'un scan (rétro-ingénierie)

Sélectionnez le maillage scanné dans le modèle (rien de sélectionné veut dire tout ce qui est affiché), ouvrez **Surfaces**, et dans le groupe **Scan** choisissez **Ajuster des surfaces au scan**. L'outil cherche des **plans**, des **cylindres**, des **sphères** et des **cônes** (les surfaces exactes dont est faite une pièce usinée ; chaque ligne affiche le rayon ou le demi-angle trouvé), trouve des **congés** (arêtes et angles arrondis : un petit cylindre ou une sphère tangent à deux autres faces ou plus, affiché avec son rayon et les faces qu'il relie), des **congés de tore** (l'arête arrondie où une face plane rejoint un cylindre ou un cône, affichée avec son rayon et le rayon de son anneau) et des **congés variables** (une arête arrondie dont le rayon varie le long de l'arête, affichée avec le rayon à chaque extrémité), ajuste **un carreau de forme libre** sur une pièce lisse et doucement courbée, et découpe chaque face au contour de la partie du scan dont elle provient, pour que les trous et les angles restent. Options : la **tolérance** (à quelle distance, en mm, un point du scan peut être d'un plan ou d'un cylindre tout en lui appartenant, et la cible d'un carreau de forme libre), la **plus petite pièce** (une part de l'aire de surface) et le **plus grand nombre de faces**. Le même scan avec les mêmes options donne toujours les mêmes faces.

Le résultat est un tableau, une ligne par face : son type, le nombre de triangles dont elle est issue, et l'erreur **mesurée du scan vers la face** (rms, la plus grande, et la part des points dans la tolérance). Les points mesurés sont les sommets du scan et le milieu de chaque triangle. L'erreur n'est pas mesurée dans l'autre sens (de la face vers le scan), donc une face qui dépasse du scan ne l'apparaîtrait pas. La note sous le tableau indique aussi quelle part de l'aire était trop petite pour être ajustée. Dans la vue, les points du scan sont colorés selon leur **carte d'écart** : bleu sur la face, vert à mi-chemin de la tolérance, rouge à la tolérance ou au-delà (décochez **Afficher la carte d'écart** pour la masquer). Les morceaux qui se replient sur eux-mêmes (un tube fermé ajusté avec des carreaux de forme libre, par exemple) sont listés comme non ajustés, et jamais forcés en une seule surface.

**Coudre les surfaces en solide** coud en un seul solide fermé toutes les surfaces affichées qui ne sont pas encore dans un solide. Les faces d'un scan ne se rejoignent qu'à l'erreur propre du scan près ; l'outil essaie donc la plus petite distance de jonction qui ferme (sans jamais dépasser la **distance de couture** que vous réglez) et refuse avec un message lorsque les faces ne se referment pas. Il ne comble jamais un trou. Une boîte aux arêtes arrondies se coud lorsque ses congés ont été trouvés comme faces propres ; la distance de jonction qui a fermé figure dans le résultat. Le solide fonctionne ensuite avec Union, Soustraire, Intersecter et **Ajouter au modèle**.

Ce qu'il ne fait pas : un **congé de tore** n'est recherché qu'autour de l'axe d'un cylindre ou d'un cône déjà trouvé, et un **congé variable** seulement le long d'une arête assez droite (ses sections sont coupées d'équerre dans une seule direction) ; ailleurs, ils deviennent des carreaux de forme libre s'ils sont assez lisses, et sont sinon laissés de côté ; les sphères, cônes et congés sont trouvés par échantillonnage aléatoire, donc un très petit (quelques triangles) peut être manqué ; la carte d'écart montre la distance du scan vers les faces, et non l'inverse ; les très grands scans (plus de 300 000 triangles) sont refusés ici. Les faces d'un cylindre à tour complet sont découpées autour des trous, avec la couture placée là où il n'y a pas de trou. Vérifiez chaque face par rapport à votre scan avant de vous y fier.

## Pas encore disponible

Arrondir des arêtes qui se rejoignent à un angle de faces courbes ou avec des rayons différents (un raccord de sommet), un congé entre des faces qui ne se rejoignent pas, un congé intérieur qui se termine sur une face inclinée ou courbe, et des opérations booléennes et congés calculés sur les surfaces sans triangles (ici le moteur de solides travaille sur des triangles dans la tolérance, puis chaque point est reposé sur les surfaces exactes).
