---
title: Avec quoi votre machine effectue le rendu
summary: Paramètres › Rendu indique les graphismes, les cœurs du processeur et la mémoire que ce navigateur laisse à l'application, ainsi que le niveau qui détermine le point de départ du rendu.
keywords: votre machine, carte graphique, gpu, webgpu, webgl, processeur, cpu, cœurs, threads, mémoire, ram, mémoire partagée, isolation, palier, niveau, vitesse, lent, vitesse de rendu, ordinateur portable
from: 8a0c21c9
---

Ouvrez {{ui:Paramètres}} ({{key:Mod+,}}), restez sur l'onglet propre à cette application et faites défiler jusqu'à {{ui:Rendu}}. {{ui:Votre machine}} indique ce que ce navigateur laisse à l'application pour le rendu. Rien de cela ne quitte votre ordinateur.

| Ligne | Ce que cela signifie |
|---|---|
| {{ui:Graphismes}} | La carte graphique signalée par le navigateur. « WebGPU » signifie qu'elle peut effectuer tout le travail de rendu ; « WebGL 2 only » signifie que la vue en direct et {{ui:Calculer un rendu…}} l'utilisent (haute qualité avec le traceur de chemin WebGL), mais que le rendu dans la vue et la file de rendu, qui nécessitent WebGPU, ne sont pas proposés ; un substitut logiciel signifie que tout s'exécute sur le processeur |
| {{ui:Processeur}} | Le nombre de cœurs de processeur signalé par le navigateur |
| {{ui:Mémoire}} | À peu près la quantité de mémoire de l'ordinateur, lorsque le navigateur l'indique. Certains navigateurs ne l'indiquent pas |
| {{ui:Mémoire partagée}} | Indique si la page peut partager la mémoire entre ses processus de travail. Activée, chaque cœur peut travailler sur une seule copie d'une scène ; désactivée, chacun a besoin de sa propre copie, donc une grande scène ne tient que sur moins de cœurs à la fois |
| {{ui:Code processeur rapide}} | Indique si le navigateur exécute le code WebAssembly plus rapide. Sans lui, une solution de repli plus lente est utilisée |
| {{ui:Niveau}} | {{ui:Carte graphique, haute}}, {{ui:Carte graphique, de base}} ou {{ui:Processeur seul}}, avec la raison indiquée dessous |

## Le niveau

Le niveau détermine le point de départ de la [vue en direct](topic:live-view) ({{ui:Pour cet ordinateur}}), le nombre d'éléments dispersés qu'elle dessine et le nombre de faces qu'une [surface de subdivision](topic:modifiers#subdivision-surface) peut afficher dans la vue, afin qu'un ordinateur portable doté d'une puce graphique intégrée ou sans carte graphique reste réactif. Une puce graphique intégrée ou de téléphone, ou 4 Go de mémoire ou moins, n'obtient jamais {{ui:Carte graphique, haute}}.

:::note
Les navigateurs diffèrent. Le même ordinateur peut afficher WebGPU dans un navigateur et « WebGL 2 only » dans un autre. Sous Linux, la plupart des navigateurs ne proposent pas encore WebGPU.
:::
