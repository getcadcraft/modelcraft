---
title: Groupes et composants
summary: Empêchez les objets de se coller entre eux, modifiez une copie pour les changer toutes, et utilisez les panneaux Arborescence et Composants.
keywords: groupe, composant, créer un groupe, créer un composant, décomposer, rendre unique, arborescence, instances, copies, bloc, imbriqué, modifier le groupe, placer
from: 7cb925f3
---

La géométrie libre dans ModelCraft se colle : les lignes qui se touchent se coupent mutuellement, et les faces qui partagent une arête se déplacent ensemble. C'est ce qui permet de dessiner sur les faces, mais cela signifie aussi qu'une boîte dessinée contre une autre fusionne avec elle. **Les groupes** et **les composants** gardent les éléments séparés.

- Un **groupe** enveloppe une géométrie pour qu'elle se comporte comme un seul objet. Rien à l'extérieur ne peut s'y coller.
- Un **composant** est un groupe qui peut être placé plusieurs fois. Chaque copie partage le même contenu : modifiez-en une et elles changent toutes. Utilisez des composants pour tout ce qui se répète : fenêtres, colonnes, bureaux, arbres.

## Créer un groupe ou un composant

1. Sélectionnez la géométrie. Un triple-clic sur une face sélectionne tout l'objet connecté ; un glissement de fenêtre sélectionne tout ce qui se trouve dans la boîte.
2. Appuyez sur {{key:Shift+G}} pour un groupe, ou sur {{key:G}} pour un composant. Vous pouvez aussi cliquer sur {{ui:Group}} ou {{ui:Component}} dans le groupe {{ui:Organize}} de la barre d'outils, ou sur {{ui:Make group (Shift+G)}} ou {{ui:Make component (G)}} dans {{ui:Entity info}}.

   La barre d'état indique « Groupe créé : Group#1. » ou « Composant créé : Component#1. », le nouvel objet est sélectionné et il apparaît dans {{ui:Outliner}}.

3. Pour le nommer, saisissez un nom dans le champ {{ui:Name}} de {{ui:Entity info}} puis appuyez sur {{key:Enter}} ou cliquez ailleurs.

Sélectionner une face entraîne ses arêtes. Si rien n'est sélectionné, la barre d'état indique : « Sélectionnez d'abord de la géométrie (faites glisser une fenêtre, ou faites un triple-clic pour tout sélectionner de manière connectée). »

Vous pouvez aussi regrouper des groupes : sélectionnez plusieurs groupes et appuyez sur {{key:Shift+G}}. {{ui:Outliner}} affiche l'imbrication.

:::note
Les lettres des touches correspondent aux réglages par défaut de SketchUp : {{key:G}} crée un composant, {{key:Shift+G}} un groupe.
:::

## Modifier à l'intérieur d'un groupe ou d'un composant

1. Double-cliquez dessus (dans la vue ou dans {{ui:Outliner}}), ou sélectionnez-le et cliquez sur {{ui:Edit}} dans {{ui:Entity info}}.

   Le reste du modèle s'estompe, les axes passent aux axes propres du groupe, et {{ui:Outliner}} affiche « Modification : Model › Group#1 ». La barre d'état indique « Modification de Group#1. Échap ou un double-clic à l'extérieur le ferme. »

2. Dessinez, poussez/tirez, déplacez et effacez comme d'habitude. Tout ce que vous faites reste à l'intérieur du groupe.
3. Pour le fermer, appuyez sur {{key:Esc}} (deux fois si quelque chose est sélectionné), double-cliquez sur un espace vide, ou cliquez sur {{ui:Close group}} dans {{ui:Outliner}}.

Pendant qu'un composant est ouvert, chacune de ses copies change au fur et à mesure de votre travail.

## Placer d'autres copies d'un composant

- Copiez-le avec {{ui:Move}} et {{key:Ctrl}} (voir [Déplacer et copier](topic:move-copy)). Chaque copie est un autre placement du même composant.
- Ou cliquez sur {{ui:Place}} à côté de lui dans le panneau {{ui:Components}}, puis cliquez à l'endroit voulu. Son origine, le coin le plus bas de la boîte autour de ce que vous avez sélectionné à sa création, se place là où vous cliquez. L'outil revient ensuite à {{ui:Select}}.

{{ui:Components}} indique le nombre de copies placées (« 4× »), et {{ui:Outliner}} affiche ce nombre après le nom.

## Réorganiser dans l'arborescence

Faites glisser une ligne dans {{ui:Outliner}} pour changer son appartenance. Rien ne bouge dans la vue : un groupe conserve sa place dans le modèle.

- **Dans un groupe :** déposez-le au milieu de la ligne d'un groupe (la ligne prend un contour en pointillés). Il y entre, en dernier.
- **Dans un autre ordre :** déposez-le sur le bord supérieur ou inférieur d'une ligne (un trait s'affiche). Il se place juste avant ou après cette ligne, dans le même groupe que celle-ci ; vous pouvez donc aussi le placer dans un groupe, à l'endroit choisi.
- **Au niveau supérieur :** déposez-le sur l'en-tête de {{ui:Outliner}}. Il se place en dernier.

Chaque dépôt constitue une étape : {{key:Mod+Z}} le remet en place. {{key:Esc}} pendant un glissement annule le dépôt. Un groupe ne peut pas être placé dans lui-même ni dans un groupe qu'il contient. Le glissement est désactivé lorsque {{ui:Find by name}} contient du texte.

:::touch
Maintenez le doigt sur une ligne un instant, puis faites-la glisser. Un balayage rapide fait défiler la liste à la place.
:::

## Rendre une copie différente

Sélectionnez la copie et cliquez sur {{ui:Make unique}} dans {{ui:Entity info}} (affiché lorsque le composant est placé plus d'une fois). Cette copie reçoit sa propre définition, nommée comme l'original avec un nouveau numéro. Modifiez-la sans toucher aux autres.

## Transformer un groupe en composant

Sélectionnez le groupe et cliquez sur {{ui:Make component}} dans {{ui:Entity info}}. Il reçoit un nouveau nom, par exemple Component#2, même si vous aviez nommé le groupe ; saisissez à nouveau le nom dans {{ui:Name}}.

## Décomposer

Sélectionnez un groupe ou un composant et cliquez sur {{ui:Explode}} (dans la barre d'outils ou dans {{ui:Entity info}}). Son contenu devient une géométrie libre à sa place, et se colle à ce qu'il touche. Les groupes qu'il contient restent des groupes.

## Solide et volume

Lorsque vous sélectionnez un groupe ou un composant, {{ui:Entity info}} affiche **Solide : Oui** si ses faces se referment sans trou (chaque arête est partagée par exactement deux faces) et s'il ne contient aucun groupe imbriqué. Il affiche alors aussi le **volume**. Une boîte, un mur avec une fenêtre découpée et un cylindre tiré sont des solides ; une boîte dont on a effacé le dessus ne l'est pas.

## Quand la dernière copie disparaît

Effacer la dernière copie d'un composant le retire aussi du panneau {{ui:Components}}. {{key:Mod+Z}} le fait revenir.

## Points à connaître

- Les copies d'un **groupe** créé avec {{ui:Move}} partagent leur contenu dans cette version, comme les copies de composants : modifier l'une modifie les autres. Pour en faire une copie indépendante, cliquez sur {{ui:Make component}}, puis sur {{ui:Make unique}}. Voir [Dépannage](topic:troubleshooting#editing-one-group-changed-another).
- Les composants ne découpent pas d'ouvertures dans les murs et ne se collent pas aux faces, et il n'existe pas de bibliothèque de composants prêts à l'emploi. Vous créez les vôtres, ou vous les importez.
- Les fichiers importés arrivent sous forme de groupe. Les fichiers Collada conservent leurs propres groupes et composants à l'intérieur.
