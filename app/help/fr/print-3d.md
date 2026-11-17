---
title: Préparer un modèle pour l'impression 3D
summary: Vérifiez qu'un modèle est fermé et que ses faces sont orientées dans le bon sens, contrôlez sa taille, sa base et ses surplombs, corrigez ce qui ne va pas, et téléchargez-le en STL ou 3MF pour votre logiciel de tranchage.
keywords: impression 3d, impression, imprimante, imprimer, tranchage, stl, 3mf, étanche, fermé, variété, solide, trous, à l'envers, surplomb, supports, base, plateau, millimètres, export, corriger, réparer, creux, épaisseur de paroi, débutant, outils d'impression
from: 948e19af
---

Le logiciel de tranchage d'une imprimante 3D a besoin d'une forme fermée : sans trous, chaque face orientée vers l'extérieur, et aucune partie qui se traverse elle-même. {{ui:Exporter}} › {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}} contrôle exactement cela avant que vous ne téléchargiez le fichier.

## Vérifier et télécharger

1. Sélectionnez ce que vous voulez imprimer : un ou plusieurs groupes ou composants, ou certaines faces. Si rien n'est sélectionné, tout ce qui est affiché s'imprime.
2. Cliquez {{ui:Exporter}} dans le groupe {{ui:Fichier}}, puis {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}}.

   La boîte de dialogue commence par une ligne : « Prêt à imprimer », le nombre de problèmes à corriger avant l'impression, ou le nombre à examiner d'abord. Chaque problème a trois parties : ce qui ne va pas, pourquoi c'est important, et quoi faire. Viennent ensuite la taille en millimètres, le volume, le nombre de triangles et votre plateau d'imprimante.

3. Si la boîte de dialogue liste des éléments à corriger, cliquez {{ui:Fixe}} (voir ci-dessous). La vérification se relance d'elle-même.
4. Cliquez {{ui:Télécharger le 3MF}} ou {{ui:Télécharger le STL}}.

Ce qui s'imprime est ce que vous voyez : les faces, groupes et composants masqués, et tout ce qui se trouve sur un repère masqué, sont laissés de côté. Les tailles sont toujours en millimètres, l'unité attendue par les logiciels de tranchage, quelle que soit l'unité affichée par le modèle.

:::tip
Préférez le 3MF lorsque votre logiciel de tranchage le lit : il conserve les couleurs et les unités. Le STL ne fait ni l'un ni l'autre, et les logiciels supposent des millimètres.
:::

## Ce que la vérification contrôle

Ces points empêchent une impression ou la gâchent, et font afficher « Pas prêt à imprimer » dans la boîte de dialogue :

| Problème | Ce que cela signifie | Quoi faire |
|---|---|---|
| Une face d'un seul côté | Un trou : une arête a une face d'un côté et rien de l'autre | Dessinez la face manquante (une ligne au travers du vide la ferme souvent), ou utilisez {{ui:Fixe}} (ci-dessous) |
| Partagée par trois faces ou plus | Des faces se rejoignent en une ailette ou une paroi à l'intérieur d'un solide | Effacez la face intérieure |
| Faces orientées en sens opposés | Certaines faces pointent vers l'intérieur, d'autres vers l'extérieur | Sélectionnez les faces tournées vers l'intérieur et cliquez {{ui:Inverser la face}} dans {{ui:Infos sur l'entité}} |
| Retournée | Une pièce fermée entière pointe vers l'intérieur | Sélectionnez ses faces et inversez-les |
| Traverse elle-même | Une pièce se replie à travers elle-même | {{ui:Édition}} › {{ui:Plus}} › {{ui:Intersecter avec le modèle}}, puis effacez ce qui est à l'intérieur. Voir [Intersecter les faces](topic:intersect) |

Ce sont des avertissements : le modèle s'imprime, mais jetez-y un œil d'abord.

- **Des pièces séparées se chevauchent**, ou **se touchent face à face** : les logiciels de tranchage les fusionnent généralement en une seule. Pour un fichier plus propre, réunissez-les avec {{ui:Solides}} › {{ui:Union}}. Voir [Outils de solides](topic:solids).
- **Rien n'est à plat en bas** : tournez le modèle pour qu'une face repose sur le plateau, sinon le logiciel ajoutera des supports ou un radeau.
- **S'incline de plus de 45° par rapport à la verticale** : ces faces ont besoin de supports. La boîte de dialogue indique la part de la surface concernée.
- **Moins de 1 mm de large** : probablement modélisé dans la mauvaise unité. Vérifiez l'unité dans la barre d'état.

Une pièce creuse (une coque fermée à l'intérieur d'une autre) est correcte : ses faces pointent vers le creux, et son volume est soustrait.

## Corriger les problèmes

Sous **Où se trouvent les problèmes**, la boîte de dialogue nomme chaque groupe ou composant qui présente un défaut (les faces isolées hors de tout groupe sont listées comme « Faces hors groupe »), avec ce qui ne va pas. Un composant placé plusieurs fois n'est listé qu'une fois : le corriger corrige chaque copie.

- {{ui:Afficher}} ouvre ce groupe et sélectionne les arêtes et faces fautives, mises en évidence.
- {{ui:Corriger ce qui peut l'être}} corrige tout d'un coup : il ferme les trous dont les arêtes sont à plat, supprime les faces à l'intérieur de la forme et les arêtes isolées, et remet les faces dans le bon sens. C'est une seule étape : {{key:Mod+Z}} l'annule. La vérification se relance ensuite et montre ce qui reste.

Ce qu'elle ne peut pas corriger (un trou dont les arêtes ne sont pas à plat, une pièce qui se traverse elle-même) reste dans la liste avec ce qu'il faut faire à la main. {{ui:Réparation}} sous **Outils d'impression** va plus loin : il ferme les trous qui ne sont pas à plat, supprime les morceaux isolés et les faces doublées, et liste chaque correction. Voir [Supports, épaisseur de paroi, évidement et réparation](topic:print-tools#repair). Vous pouvez aussi corriger un groupe à la fois : sélectionnez-le, puis utilisez {{ui:Afficher les problèmes}} et {{ui:Fixe}} dans {{ui:Infos sur l'entité}}. Voir [Outils de solides](topic:solids).

## Une pièce creuse

{{ui:Évidement}} sous **Outils d'impression** creuse une pièce à l'épaisseur de paroi que vous indiquez, avec des trous de vidange là où vous cliquez. Voir [Évidement](topic:print-tools#hollow).

Vous pouvez aussi dessiner le creux vous-même : un groupe fermé à l'intérieur de la pièce, sans la toucher, avec toutes ses faces inversées pour qu'elles pointent vers le creux. La vérification le compte comme un creux et soustrait son volume ; il n'est pas listé comme élément à corriger.

## Le plateau de votre imprimante

Choisissez la taille du plateau de votre imprimante dans {{ui:Paramètres}} › {{ui:ModelCraft}} › {{ui:Plateau d'imprimante 3D}}. La vérification avertit alors lorsque le modèle est plus grand que le plateau, dans l'un ou l'autre sens de rotation. Voir [Paramètres](topic:settings#3d-printer-bed).

## Outils d'impression

Sous les constats de la boîte de dialogue, **Outils d'impression** ouvre {{ui:Aperçu des supports}} (où vont les supports et combien environ), {{ui:Épaisseur des parois}} (parois trop fines pour s'imprimer), {{ui:Évidement}} et {{ui:Réparation}}. Voir [Supports, épaisseur de paroi, évidement et réparation](topic:print-tools). {{ui:Découper pour l'impression}} coupe un modèle trop grand pour le plateau en morceaux avec des connecteurs et des jonctions numérotées : voir [Découper un grand modèle pour l'impression](topic:print-split).

## Non vérifié

La vérification ne fait pas de tranchage : les détails trop fins pour votre buse et les vrais supports relèvent de votre logiciel de tranchage. Voir [Pas encore disponible](topic:not-built-yet#3d-printing).
