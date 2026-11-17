---
title: Modéliser à plusieurs avec Live TeamWork
summary: Ce qui change dans ModelCraft pendant une session Live TeamWork depuis CadCraft Studio : groupes et composants de chacun dans un même modèle, qui peut remodeler quoi en même temps, votre propre annulation, et la connexion depuis un navigateur sur le même réseau.
keywords: live, live teamwork, studio live, ensemble, collaborer, session, partager en direct, rejoindre, groupe, composant, pousser tirer, curseur, pointeur, se voir, noms, couleur, sélection, annuler, hôte
from: d8d2f282
---

## Ce que vous allez apprendre

Ce qui arrive à un modèle lorsque plusieurs personnes y travaillent en même temps. CadCraft Studio démarre et rejoint la session Live TeamWork (Partager, Rejoindre) ; cette page traite du modèle lui-même.

## Travailler dans votre propre groupe

Tout le monde modifie le même modèle, et vos propres modifications apparaissent immédiatement. La façon dont les changements se fusionnent dépend de ce que vous modifiez :

- **Déplacer, nommer, colorer ou masquer des groupes et des composants placés** fusionne : deux personnes qui déplacent deux groupes gardent toutes deux leurs déplacements.
- **La géométrie d'un même groupe** (ses arêtes et ses faces : dessin, pousser/tirer, effacement) forme un seul bloc. Lorsque deux personnes remodèlent le même groupe au même moment, la seconde modification est annulée et la barre d'état l'indique. Des groupes différents ne se gênent jamais.
- **La géométrie libre** (hors de tout groupe) forme le groupe propre du modèle : une seule personne peut la remodeler à la fois.

Convenez donc de qui travaille dans quel groupe, ou créez un groupe pour la part de chacun avant de commencer. Les guides, cotes et plans de coupe se fusionnent un à un ; les scènes, étiquettes, niveaux et axes de dessin reviennent à la dernière personne qui les a modifiés.

## Se voir

Chaque personne de la session a sa propre couleur. Vous voyez le pointeur de chacun sous forme de flèche à sa couleur, avec son nom à côté, à la profondeur de la vue que vous regardez, et un cadre en pointillés à sa couleur autour de ce qu'il a sélectionné.

Pointeurs, noms et sélections ne valent que pour la session : ils ne sont jamais enregistrés dans le fichier et n'entrent jamais dans l'annulation de personne. Ils glissent jusqu'à l'endroit où se trouve chacun, si bien qu'ils restent fluides même sur une connexion lente.

## Annuler ne défait que votre travail

{{key:Mod+Z}} annule votre dernière étape et laisse celles des autres intactes. Si quelqu'un a modifié la même chose depuis, rien n'est annulé et la barre d'état indique qui.

## Rejoindre depuis un navigateur

Un coéquipier sans Studio peut scanner l'image sous le code de l'hôte avec un téléphone, une tablette ou un ordinateur sur le même réseau. ModelCraft s'ouvre dans le navigateur et se remplit avec le modèle de l'hôte une fois que celui-ci vous admet. Un lien d'invitation permet à quelqu'un de rejoindre depuis un autre réseau : l'hôte a besoin d'un poste du plan Team Cloud Plan pour l'application, les autres rejoignent gratuitement, et le lien ne fonctionne que tant que la session de l'hôte est ouverte.

## Quand la session se termine

Seul l'hôte enregistre le modèle. Les autres gardent une copie non enregistrée : enregistrez-la si vous voulez la conserver.
