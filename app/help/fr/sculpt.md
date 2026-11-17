---
title: Sculpter un maillage
summary: Façonnez un maillage comme de l'argile avec des pinceaux — dessiner, argile, lisser, saisir, gonfler, pli, pincer, aplanir —, protégez des zones avec un masque, mettez en symétrie selon X et ajoutez du détail là où vous sculptez.
keywords: sculpter, sculpture, pinceau, pinceaux, argile, dessiner, lisser, saisir, gonfler, pli, pincer, aplanir, masque, symétrie, miroir, détail, topologie dynamique, stylet, pression, tablette, stylet
from: 5477801a
---

L'espace de travail Sculpter façonne un maillage avec des pinceaux, comme on modèle de l'argile : glissez sur la surface, et elle se soulève, s'enfonce, se lisse ou suit le pointeur sous un pinceau rond, plus forte au centre et s'estompant jusqu'à disparaître sur le bord.

## Démarrer

Sélectionnez un maillage et choisissez {{ui:Sculpter}} dans la liste Espace de travail. Un groupe ou un composant devient d'abord un maillage, comme dans l'espace Maillage. Les pinceaux agissent sur les sommets du maillage : un maillage qui en compte davantage permet des formes plus fines. Subdivisez-le d'abord (le {{ui:Subdiviser}} de l'espace Maillage, ou un modificateur Surface de subdivision que vous appliquez), ou activez {{ui:Détail}}.

## Pinceaux

| Pinceau | Touche | Ce qu'il fait |
| --- | --- | --- |
| {{ui:Dessiner}} | {{key:D}} | Soulève la surface sous le pinceau |
| {{ui:Argile}} | {{key:C}} | Construit des couches plates en comblant d'abord les creux |
| {{ui:Lisser}} | {{key:S}} | Nivelle les bosses ; maintenez {{key:Shift}} pour lisser avec n'importe quel pinceau |
| {{ui:Saisir}} | {{key:G}} | Entraîne la surface avec le pointeur |
| {{ui:Gonfler}} | {{key:I}} | Gonfle la surface dans sa propre direction |
| {{ui:Pli}} | {{key:Shift+C}} | Creuse une rainure nette |
| {{ui:Pincer}} | {{key:P}} | Attire la surface vers le centre du pinceau |
| {{ui:Aplanir}} | {{key:T}} | Ramène la surface vers son plan moyen |
| {{ui:Masque}} | {{key:M}} | Peint un masque qui protège la surface des autres pinceaux |

Maintenez {{key:Ctrl}} pendant le tracé pour travailler dans l'autre sens (abaisser au lieu de soulever, une arête au lieu d'une rainure, retirer le masque), ou activez {{ui:Retirer}}.

## Taille et intensité

La taille du pinceau est exprimée en pixels à l'écran : elle reste la même quel que soit le zoom. {{key:[}} et {{key:]}} la réduisent et l'agrandissent ; {{key:Shift+[}} et {{key:Shift+]}} modifient son intensité. Le panneau affiche les deux.

Avec un stylet sur une tablette, appuyer plus fort rend le pinceau plus grand et plus fort ; le panneau désactive l'un ou l'autre.

## Symétrie, masque et détail

- {{ui:Miroir X}} ({{key:X}}) sculpte les deux côtés à la fois selon le rouge, pour les visages et les personnages.
- Le masque apparaît plus sombre pendant que vous sculptez. {{ui:Effacer le masque}} ({{key:Alt+M}}) le retire, {{ui:Inverser le masque}} ({{key:Ctrl+I}}) masque ce qui était libre et libère ce qui était masqué. Le masque est conservé avec le maillage.
- {{ui:Détail}} ajoute des triangles là où vous sculptez : les arêtes plus longues que la taille réglée dans le panneau (en pixels à l'écran) sont divisées sous le pinceau. Cela nécessite un maillage de triangles, et le logiciel demande d'en créer un au préalable.

Chaque tracé constitue une étape d'annulation.

:::note
Détail ne fait qu'ajouter des triangles ; il ne supprime pas ceux qui sont devenus minuscules. Un Remaillage (espace Maillage) rééquilibre à nouveau tout le maillage.
:::

Voir aussi [Modifier un maillage](topic:mesh-edit), [Maillages](topic:meshes) et [Modificateurs sur un maillage](topic:modifiers).
