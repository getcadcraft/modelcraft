---
title: Outils de solides : union, soustraction, intersection
summary: Joignez des groupes et composants fermés en un seul, découpez-en un dans un autre, ou ne gardez que ce qu'ils ont en commun.
keywords: solide, solides, inspecteur de solide, pas un solide, réparer le solide, trou, arête isolée, retourné, union, joindre, combiner, fusionner, soustraire, différence, découper, intersection, intersect, booléen, coque extérieure
from: f35df1cc
---

Les outils de solides combinent des **solides** : des groupes et des composants dont les faces referment un volume, chaque arête reliant exactement deux faces. {{ui:Entity info}} indique {{ui:Solid}} : {{ui:Yes}} pour un solide, et affiche son volume.

Ils se trouvent dans le menu {{ui:Solids}} du groupe {{ui:Organize}}.

## Quand un élément n'est pas un solide

Sélectionnez le groupe ou le composant. S'il n'est pas un solide, {{ui:Entity info}} indique pourquoi, par exemple « Pas un solide : 4 arêtes bordent un trou · 1 arête isolée ».

| Problème | Ce que cela signifie |
|---|---|
| Des arêtes bordent un trou | Une face manque |
| Arêtes partagées par trois faces ou plus | Une face divise l'intérieur, ou deux formes se touchent le long d'une arête |
| Faces à l'intérieur de la forme | Un mur laissé à l'intérieur du volume |
| Arêtes isolées | Des lignes qui ne délimitent aucune face |
| Faces retournées | Leurs faces avant sont tournées vers l'intérieur, à l'opposé de leurs voisines |

{{ui:Show problems}} l'ouvre avec ces arêtes et faces sélectionnées, pour que vous puissiez les voir. {{ui:Fix}} répare les cas simples en une étape d'annulation : il retire les arêtes isolées et les faces à l'intérieur de la forme, retourne les faces dans le bon sens, et ferme les trous dont le bord est plat. Ce qu'il ne peut pas réparer sans risque (un trou non plan, une arête partagée par plusieurs faces) lui reste, et il indique ce qui subsiste.

## Union

1. Sélectionnez deux solides ou plus (cliquez sur l'un, puis {{key:Ctrl}}+clic sur les autres).
2. {{ui:Solids}} › {{ui:Union}}.

Ils deviennent un seul solide, dans un seul groupe. Là où ils se chevauchaient, les faces intérieures disparaissent.

## Soustraction

1. {{ui:Solids}} › {{ui:Subtract}}.
2. Cliquez sur le solide à **retirer** (l'outil de coupe).
3. Cliquez sur le solide à **découper**.

Ce qui reste du second solide est conservé ; l'outil de coupe est consommé. Par exemple, pour percer un bloc, dessinez un poteau qui le traverse, faites du poteau un groupe, puis soustrayez le poteau du bloc.

## Intersection

Sélectionnez deux solides ou plus, puis {{ui:Solids}} › {{ui:Intersect}}. Seule la partie qu'ils ont tous en commun est conservée.

## Points à connaître

- Le résultat est un nouveau groupe. Il garde le nom, la couleur et l'étiquette du premier solide (pour la soustraction : celui que vous avez découpé). Les couleurs peintes sur ses faces ne sont pas conservées.
- Les faces planes du résultat sont des faces uniques. Les faces rondes apparaissent comme les facettes planes avec lesquelles elles ont été dessinées.
- Si un groupe ou un composant n'est pas un solide, l'outil indique lequel et ne change rien. Cherchez une face manquante ou une face isolée à l'intérieur.
- Dans un groupe ouvert, les outils travaillent sur les groupes et composants de ce groupe.
- Chaque outil est une étape d'annulation.
- La première fois que vous utilisez un outil de solides, son moteur (manifold-3d) se charge, ce qui peut prendre un moment.
