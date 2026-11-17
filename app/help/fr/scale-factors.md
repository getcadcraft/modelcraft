---
title: Mettre à l'échelle par facteurs et majoration de retrait
summary: Mettez une sélection à l'échelle par un facteur pour chaque axe autour d'un point choisi, ou agrandissez un modèle du pourcentage dont une pièce moulée va se rétracter.
keywords: échelle, non uniforme, facteur, pourcentage, étirer, retrait, rétrécissement, moulage, modèle, fonderie, majoration, redimensionner
from: 37e1bbff
---

L'outil Échelle ({{key:S}}) met à l'échelle uniformément ou fait glisser une poignée pour étirer une ou deux directions. **{{ui:Mettre à l'échelle par facteurs…}}** (menu Outils, ou le groupe Modifier) est la forme saisie : un nombre pour chacun des trois axes.

1. Sélectionnez des arêtes, des faces, des groupes ou des composants.
2. Ouvrez {{ui:Mettre à l'échelle par facteurs…}}. Saisissez un facteur pour le rouge, le vert et le bleu. Un facteur peut être `1.015`, `101.5%` ou `+1.5%` (et `-2%` pour réduire). {{ui:Identique sur les trois axes}} recopie le premier sur les deux autres.
3. Choisissez ce qui **reste en place** : le milieu de la sélection, son coin le plus bas, le milieu de son bas, ou l'origine.
4. La ligne sous les champs indique la taille actuelle et la taille future. {{ui:Échelle}} l'applique en une seule étape d'annulation.

Les axes sont ceux du groupe ouvert (ceux du modèle, au niveau supérieur). Un groupe ou un composant qui est tourné ressort cisaillé si ses facteurs diffèrent ; mettez plutôt à l'échelle le groupe qui le contient. Le contenu d'un composant n'est pas modifié, si bien que ses autres copies restent inchangées.

## Majoration de retrait

Une pièce moulée se rétracte en refroidissant ; son modèle est donc fabriqué plus grand. Sous **Majoration de retrait**, saisissez le pourcentage pour chaque axe (votre fonderie ou votre mouleur le fournit pour votre métal ; 1,5 % ci-dessous ne sert que d'exemple), puis cliquez sur {{ui:Utiliser comme facteurs}}.

- **Le pourcentage lui-même** donne un facteur égal à 1 plus le pourcentage : 1,5 % donne 1,015, ce qu'indique une règle de retrait.
- **Juste assez** donne un facteur égal à 1 divisé par (1 moins le pourcentage) : 1,5 % donne 1,0152, si bien que la pièce moulée a la taille de la pièce une fois rétractée de cette quantité.

Vos derniers pourcentages sont mémorisés dans ce navigateur.

:::note
Le pourcentage est de votre ressort : ModelCraft ne connaît rien de votre métal, de votre moule ni de votre procédé.
:::
