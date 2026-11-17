---
title: Animer n'importe quelle propriété, la façonner en courbes et mélanger des séquences
summary: L'espace de travail Animer enregistre l'emplacement, la rotation et la taille d'un objet, la luminosité, l'ouverture et la couleur d'une lampe, l'objectif et les clés de forme d'un maillage ; les armatures déforment un maillage à l'aide d'os et de poids peints ; la cinématique inverse et les contraintes font atteindre, regarder, copier, rester dans des limites, suivre ou être rattaché à d'autres ; les corps rigides tombent, s'empilent et entrent en collision, puis sont précalculés en clés ; les pilotes donnent une valeur à partir d'autres ; la vue Courbes de la chronologie façonne chaque changement avec des poignées de Bézier et des cycles, et sa vue Séquences enregistre les animations sous forme d'actions que vous replacez et mélangez.
keywords: physique, corps rigide, corps rigides, simulation, simuler, lâcher, chute, tomber, gravité, collision, entrer en collision, empiler, rebond, frottement, précalculer, précalculé, ik, cinématique inverse, contrainte, contraintes, regarder vers, suivre la cible, viser, copier les transformations, copier l'emplacement, copier la rotation, limiter la rotation, limites, enfant de, parent, suivre un chemin, chemin, pôle, fabrik, chaîne, armature, armatures, rig, rigging, os, squelette, peau, habillage, poids, peinture de poids, groupes de sommets, poids automatiques, pose, mode pose, quaternion dual, mélange linéaire, clés de forme, clé de forme, morphing, morphes, cibles de morphing, formes fusionnées, expression faciale, pilote, pilotes, expressions, espace de travail animer, animer, animation, image clé, clé, clés, propriété, propriétés, transformation, emplacement, rotation, échelle, lampe, lumière, luminosité, couleur, objectif, champ de vision, fov, éditeur de graphes, courbes, courbe, bézier, poignées, tangente, interpolation, cycle, cycles, répéter, boucle, aller-retour, décalage, feuille d'exposition, sélectionner les clés, sélection par cadre, copier les clés, coller les clés, étirer les clés, mettre à l'échelle les clés, séquences, actions, nla, mélange, mélanger, influence, stocker
from: 16d8e12f
---

La [chronologie](topic:animation) déplace la caméra ainsi que les groupes et composants entiers. L'espace de travail **Animer** enregistre bien davantage, et la chronologie reçoit deux vues supplémentaires pour façonner et réutiliser ce que vous avez enregistré.

## Ouvrir l'espace de travail

Choisissez {{ui:Animer}} dans la liste des espaces de travail de la barre d'outils. La chronologie s'ouvre sous la vue, la barre d'outils affiche les groupes d'Animer ({{ui:Clés}}, {{ui:Lecture}}, {{ui:Ligne de temps}}), et le panneau de droite liste ce que vous pouvez enregistrer à la tête de lecture.

## Enregistrer une propriété

Le panneau liste, à la tête de lecture :

- **Objet choisi** : son {{ui:Placer}}, sa {{ui:Rotation (°)}} et sa {{ui:Taille}}, trois nombres chacun. Saisissez un nombre et appuyez sur {{key:Enter}} : il est enregistré à la tête de lecture et l'objet s'y déplace. Le losange à côté d'une ligne enregistre la valeur telle qu'elle est maintenant ; un losange plein signifie qu'une clé existe déjà à la tête de lecture.
- **Lampes** : la {{ui:Luminosité (lm)}}, l'{{ui:Ouverture (°)}} (lampes projecteurs) et la {{ui:Couleur}} de chaque lampe.
- **Caméra** : l'{{ui:Angle d'objectif (°)}}, pour un zoom pendant que la caméra se déplace.

{{ui:Clé de transformation}} (ou {{key:I}}) enregistre à la fois l'emplacement, la rotation et la taille de chaque groupe ou composant choisi ; {{ui:Clé caméra}} (ou {{key:K}}) enregistre la caméra. Avec {{ui:Clé automatique}} activée, un groupe dont l'emplacement, la rotation et la taille sont enregistrés de cette façon reçoit une nouvelle clé chaque fois que vous le déplacez.

Les rotations sont exprimées par trois angles, autour de X, puis Y, puis Z. Une rotation enregistrée au-delà de 180° continue dans le même sens (190° reste 190°, et non −170°), si bien qu'une roue peut tourner plusieurs fois.

:::tip
Un groupe enregistré avec {{ui:Clé de la sélection}} sur la chronologie possède des clés de placement complet. Le bouton de courbe de sa ligne les transforme en courbes d'emplacement, de rotation et de taille (le même emplacement à chaque clé), afin que vous puissiez les façonner dans {{ui:Courbes}}.
:::

## Clés de forme (morphing)

Une **clé de forme** est une autre forme du même [maillage](topic:meshes) : un sourire sur un visage, le renflement d'une porte, une feuille courbée. Son curseur fait passer du maillage tel qu'il est (0) à cette forme (1) ; plusieurs clés s'additionnent.

1. Choisissez un maillage dans l'espace de travail Animer : le panneau affiche ses {{ui:Clés de forme}}.
2. Cliquez sur {{ui:Ajouter une clé de forme}}. ModelCraft passe dans l'[espace de travail Maillage](topic:mesh-edit) avec la nouvelle clé en cours de modification : déplacez des points, extrudez, sculptez, pour transformer le maillage en la forme voulue.
3. Revenez dans {{ui:Animer}} et cliquez sur {{ui:Terminé}}. Le maillage reprend son état initial, et la clé conserve votre modification.

Faites ensuite glisser le curseur de la clé (ou saisissez une valeur) pour la faire intervenir. Le losange enregistre la valeur à la tête de lecture, si bien qu'une clé peut apparaître et disparaître au fil du temps ; une fois qu'elle a une piste, une nouvelle valeur est enregistrée à la tête de lecture. Le crayon modifie à nouveau la forme de la clé (le maillage la montre entièrement jusqu'à {{ui:Terminé}} ; {{ui:Annuler}} laisse la clé telle qu'elle était), l'œil désactive la clé, la corbeille la supprime.

Un sommet que vous ajoutez pendant la modification d'une clé appartient au maillage lui-même : il reste là où vous l'avez placé, dans toutes les formes.

:::note
Les clés de forme déplacent le maillage avant ses [modificateurs](topic:modifiers) : un modificateur de subdivision lisse la forme mélangée. Les images et vidéos calculées montrent les clés à chaque image.
:::

## Armatures : des os qui déforment un maillage

Une **armature** est un ensemble d'os à l'intérieur d'un [maillage](topic:meshes). Posez les os, et le maillage suit, chaque point dans la mesure que ses **poids** indiquent.

1. Choisissez le maillage dans l'espace de travail Animer et cliquez sur {{ui:Ajouter une armature}} dans le panneau (ou sur {{ui:Ajouter un os}} dans le groupe {{ui:Armature}}) : le premier os remonte au milieu du maillage depuis son pied.
2. Un os étant sélectionné, {{ui:Ajouter un os enfant}} ajoute le suivant depuis son extrémité. Réglez le {{ui:Linteau}}, l'{{ui:Extrémité}}, le {{ui:Roulis (°)}} et ce à quoi il est {{ui:Rattaché à}} dans le panneau ; un os rattaché à un autre se déplace avec lui. Décochez {{ui:Déplace le maillage}} pour un os qui ne fait que diriger les autres.
3. Cliquez sur {{ui:Poids automatiques}} : chaque os prend en charge les points les plus proches de lui, et cette prise se répartit en douceur sur le maillage, si bien que les points situés entre deux os se partagent. {{ui:Os les plus proches seulement}} donne une répartition plus rapide et plus nette.

**Posez** les os avec {{ui:Pose}} ({{key:P}}) : cliquez sur un os pour le sélectionner, faites-le glisser pour le faire pivoter autour de l'axe de la vue, {{key:Shift}}-glissez pour le déplacer. Vous pouvez aussi saisir son {{ui:Placer}}, sa {{ui:Rotation (°)}} et sa {{ui:Taille}} sous {{ui:Pose}} ; les rotations s'expriment selon les axes propres de l'os, depuis sa position de repos. Les losanges et {{ui:Poser une clé pour toute la pose}} enregistrent la pose à la tête de lecture ; une fois qu'un os a des clés, le poser les enregistre à cet endroit. {{ui:Réinitialiser cet os}} et {{ui:Réinitialiser la pose}} remettent les os au repos.

**Peignez les poids** ({{key:W}}) pour l'os sélectionné : le maillage s'affiche au repos, chaque face étant colorée selon la part que cet os lui attribue (rouge tout, bleu rien). Peignez pour ajouter de la prise ({{key:Mod}} la retire, {{key:Shift}} lisse) ; {{ui:Taille (px)}} et {{ui:Intensité}} règlent le pinceau. Avec {{ui:Garder une somme de poids égale à 1 pour chaque point}}, donner davantage de poids à un os en retire autant aux autres. Chaque trait est une étape d'annulation du modèle.

{{ui:Peau}} choisit la manière dont un point situé entre des os se déplace : {{ui:Linéaire (rapide)}} mélange les mouvements des os, et pince légèrement une articulation pliée ; {{ui:Quaternion dual (conserve le volume aux articulations)}} fait plutôt tourner le point autour de l'articulation, si bien qu'un coude ou un genou garde son épaisseur (la {{ui:Taille}} d'un os n'étire alors pas la peau).

:::note
Les clés de forme viennent d'abord, puis l'armature, puis les [modificateurs](topic:modifiers). La vue, les images et les vidéos montrent toutes le maillage posé ; les poids d'un maillage sont enregistrés avec lui, les os et leur pose avec l'animation.
:::

## Cinématique inverse et contraintes

Une **contrainte** déplace un os ou un objet après ses clés, selon une règle. Choisissez l'objet (ou, dans une armature, l'os) et ajoutez-en une sous {{ui:Contraintes de …}} ; plusieurs s'appliquent dans l'ordre affiché (les flèches modifient cet ordre). Chacune possède une {{ui:Intensité}} (de 0 à 1, enregistrée avec son losange comme n'importe quelle propriété) et un interrupteur marche/arrêt.

| Contrainte | Pour | Ce qu'elle fait |
|---|---|---|
| {{ui:Atteindre (IK)}} | Os | L'os et les os auxquels il est rattaché ({{ui:Os de la chaîne}}) se plient pour que son extrémité atteigne la cible. Avec deux os et un {{ui:Pôle (le pli pointe vers lui)}}, le coude ou le genou pointe vers le pôle ; les chaînes plus longues se plient en douceur. Hors de portée, la chaîne pointe droit vers la cible. |
| {{ui:Regarder vers}} | Les deux | Tourne pour que son {{ui:Axe qui pointe}} fasse face à la cible, en gardant son {{ui:Axe gardé vers le haut}} aussi proche du haut que possible. |
| {{ui:Copier les transformations}} | Les deux | Reprend l'emplacement, la rotation ou la taille de la cible, ceux qui sont cochés. |
| {{ui:Limites}} | Les deux | Garde son propre emplacement, sa rotation (en degrés) ou sa taille entre un {{ui:min}} et un {{ui:max}} par axe ; laissez une paire vide pour laisser cet axe libre. |
| {{ui:Enfant de}} | Les deux | Se déplace avec la cible comme s'il lui était rattaché, depuis les positions qu'ils avaient tous deux au moment où vous avez choisi la cible. |
| {{ui:Suivre un chemin}} | Objets | Se place sur un [objet courbe](topic:curves) à {{ui:Le long de la courbe}} (0 au début, 1 à la fin ; enregistrez-le pour qu'il parcoure le chemin), et avec {{ui:Pivoter le long de la courbe}} fait face à la direction de la courbe. |

Une cible est un autre objet du groupe ouvert, un os de la même armature, ou {{ui:Un point}} que vous saisissez (le point d'un objet est exprimé dans les coordonnées du modèle, celui d'un os dans celles de son maillage). Pour une jambe en cinématique inverse, placez la cible là où doit se trouver le pied et enregistrez la cible, ou enregistrez {{ui:Intensité}} pour répartir la jambe entre les clés et la cinématique inverse.

:::tip
Un objet qui regarde vers un objet suivant un chemin le voit sur ce chemin : ModelCraft calcule d'abord les cibles, quel que soit l'ordre des objets.
:::

## Physique : chute, empilement et collisions

Laissez les objets tomber et se heurter, puis conservez le résultat sous forme de clés.

1. Choisissez un groupe, un composant ou un maillage et réglez son {{ui:Corps rigide}} sous {{ui:Physique}} : {{ui:Tombe et entre en collision}} (il bouge) ou {{ui:Reste en place, fait obstacle}} (une table, un mur, une rampe). Donnez à un objet qui tombe sa {{ui:Forme}} (le plus souvent {{ui:Boîte (ses limites)}} ou {{ui:Boule (arrondie dans ses limites)}}), sa {{ui:Masse (kg)}}, son {{ui:Frottement}} et son {{ui:Rebond}} (0 pour un choc sec, 1 pour un rebond aussi haut).
2. Sous {{ui:Tout le modèle}}, réglez {{ui:De (s)}} et {{ui:À (s)}}, la {{ui:Gravité (m/s², vers le bas)}} et s'il existe {{ui:Un sol sur lequel atterrir}} (et sa hauteur).
3. Cliquez sur {{ui:Précalculer la physique}} (dans le panneau ou le groupe {{ui:Physique}}). Chaque objet qui tombe reçoit une clé d'emplacement, de rotation et de taille à chaque image entre les deux instants ; lisez-la comme n'importe quelle animation.

Précalculer à nouveau remplace ces clés ; {{ui:Supprimer les clés précalculées}} les retire. Les objets commencent au repos, là où leurs clés, courbes et contraintes les placent à {{ui:De (s)}} (un mouvement enregistré avant ce moment ne se poursuit pas dans la chute). Davantage de {{ui:Pas par image}} stabilise les empilements hauts ; la barre d'état indique quand un élément bouge encore à la fin.

:::note
Les formes sont des boîtes et des boules autour des limites de chaque objet ; une boîte touche avec ses coins, les milieux de ses arêtes et les milieux de ses faces, si bien que les boîtes s'empilent et basculent comme on s'y attend. Les tissus, les fluides, les articulations entre objets et les formes exactes ne sont pas disponibles.
:::

## Pilotes

Un **pilote** règle une clé de forme à partir d'autres éléments plutôt qu'à la main : ouvrez le pilote d'une clé (le bouton calculatrice), écrivez une **expression** et indiquez à chaque nom ce qu'il lit ({{ui:Lit}}) : le temps en secondes, l'image, l'emplacement, la rotation ou la taille d'un élément selon X, Y ou Z, la luminosité d'une lampe, ou une autre clé de forme. Par exemple, avec `v` lisant la rotation d'une porte autour de Z, `clamp(v / 90, 0, 1)` ouvre une forme à mesure que la porte s'ouvre.

Les expressions utilisent des nombres, les noms, `+ - * / % ^` et des parenthèses, ainsi que les fonctions `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg`, avec `pi` et `e`. Une erreur est signalée et ne modifie rien. Le curseur d'une clé pilotée affiche la valeur du pilote ; le pilote l'emporte sur la piste de la clé jusqu'à ce que vous le retiriez.

## Choisir et modifier les clés (vue Clés)

{{ui:Clés}} affiche une ligne par piste : la caméra, chaque groupe en mouvement, et chaque propriété (« Lampe 2 · Luminosité (lm) » ; les clés de propriété sont rondes).

- Cliquez sur une clé pour la choisir ; {{key:Shift}}-clic ou {{key:Mod}}-clic ajoute ou retire des clés de la sélection. {{key:Shift}}-glissez sur les lignes trace un cadre qui ajoute toutes les clés qu'il contient.
- Faites glisser une clé choisie pour les déplacer toutes ; {{key:Left}} / {{key:Right}} les déplacent d'une image ({{key:Shift}} : dix).
- {{key:Mod+C}} copie les clés choisies, {{key:Mod+V}} les colle depuis la tête de lecture sur les mêmes pistes (un autre onglet ModelCraft peut aussi les coller).
- {{ui:Étirement}} écarte les clés choisies depuis la tête de lecture selon le nombre à côté (2 = deux fois plus espacées ; 0.5 les rapproche).
- La liste de transition règle la manière dont chaque clé choisie évolue.

## Façonner les courbes (vue Courbes)

{{ui:Courbes}} est un graphe de chaque nombre dans le temps : le temps en abscisse, la valeur en ordonnée. Cochez dans la liste de gauche les courbes à afficher (X, Y et Z sont rouge, vert et bleu).

- Cliquez sur une clé (un carré) pour la choisir, {{key:Shift}}-clic pour en ajouter, ou faites glisser un cadre. Faites glisser une clé choisie pour modifier son temps et sa valeur ; si plusieurs clés sont choisies, glisser les déplace dans le temps.
- Une clé choisie affiche ses deux **poignées**. Faites-en glisser une pour façonner la courbe de ce côté. {{ui:Poignées}} indique leur comportement : {{ui:Automatiques}} (une courbe lisse qui passe par les clés voisines), {{ui:Orientées vers la clé suivante}}, {{ui:Alignées}} (les deux restent sur une même ligne droite, si bien que la courbe n'a pas d'angle) ou {{ui:Libre}}.
- {{ui:À partir des clés choisies}} règle la manière dont chaque clé choisie passe à la suivante : {{ui:Courbe (poignées)}}, {{ui:Lisser}}, {{ui:Régulier}}, {{ui:Ralentir au début et à la fin}} ou {{ui:Maintenir}}.
- {{ui:Avant}} et {{ui:Après}} règlent ce que fait une courbe en dehors de ses clés : {{ui:Maintenir}} (reste à la première ou à la dernière valeur), {{ui:Répétitions}}, {{ui:Aller-retour}}, ou {{ui:Répéter et poursuivre}} (chaque répétition commence là où la précédente s'est terminée : une roue continue de rouler, un marcheur continue de marcher).
- La molette zoome ({{key:Mod}} : valeurs seulement ; {{key:Shift}} : temps seulement) ; faites glisser avec le bouton central, ou avec {{key:Alt}}, pour un panoramique ; {{ui:Tout afficher}} ou {{key:Home}} ajuste toutes les courbes affichées. Cliquez dans l'espace vide pour placer la tête de lecture à cet endroit. {{key:Delete}} supprime les clés choisies.

Les poignées ne peuvent pas se croiser dans le temps, si bien qu'une courbe ne revient jamais en arrière.

## Réutiliser les animations (vue Séquences)

Une **séquence** joue sur la chronologie une animation enregistrée (une **action**). Les séquences se mélangent dans l'ordre, les lignes du bas par-dessus celles du haut ; les pistes propres à la chronologie passent au-dessus de toutes les séquences.

1. Enregistrez les groupes et les lampes comme d'habitude, puis cliquez sur {{ui:Créer une séquence}} dans {{ui:Séquences}} et donnez un nom à l'action. Les pistes deviennent l'action, et une séquence la joue là où elles se trouvaient (la caméra reste sur la chronologie).
2. Pour la réutiliser, choisissez l'action et cliquez sur {{ui:Ajouter une séquence}} : une nouvelle séquence commence à la tête de lecture.
3. Faites glisser une séquence le long de sa ligne pour la déplacer ; cliquez dessus pour régler {{ui:Début (s)}}, {{ui:Vitesse}} (2 = deux fois plus vite), {{ui:Répétitions}}, {{ui:Intensité}} (0 à 1), {{ui:Mélange}} ({{ui:Remplacer}}, ou {{ui:Ajouter par-dessus}} les séquences qui la précèdent), {{ui:En dehors de la séquence}} (rien, maintenir sa fin, ou maintenir les deux extrémités) et {{ui:Muet}}. Les flèches modifient l'ordre ; la corbeille la supprime (une action qu'aucune séquence n'utilise plus disparaît avec elle).

Une séquence dont l'{{ui:Intensité}} est inférieure au maximum se mélange à ce qui se trouve sous elle : la séquence précédente, ou la lampe ou l'emplacement tels qu'ils sont sans l'animation.

## Ce qui se joue où

| Élément | Dans la vue | Dans une vidéo calculée |
|---|---|---|
| Clés de caméra, angle d'objectif avec clés de caméra | Oui | Oui |
| Emplacement, rotation et taille (clés, courbes, séquences) | Oui | Oui |
| Luminosité, ouverture et couleur des lampes | Oui | Pas encore disponible : la vidéo utilise les lampes telles qu'elles sont au départ (voir [ce qui n'est pas encore disponible](topic:not-built-yet)) |
| Angle d'objectif sans clés de caméra | Oui | Pas encore disponible : enregistrez aussi la caméra |
| Clés de forme et pilotes | Oui | Oui |
| Armatures (maillages posés) | Oui | Oui |
| Cinématique inverse et contraintes | Oui | Oui |
| Physique précalculée (clés) | Oui | Oui |

Tout est enregistré dans le fichier `.modelcraft` avec le reste de l'animation, et {{ui:Annuler}} et {{ui:Rétablir}} de la chronologie annulent ou rétablissent chacune de ces modifications.
