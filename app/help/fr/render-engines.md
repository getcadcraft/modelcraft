---
title: Choisir le programme qui dessine l'image
summary: Le choix de moteur dans la boîte de dialogue Rendu : nos deux moteurs, les autres programmes dans CadCraft Studio, et ce que fait le web à la place.
keywords: rendu, moteur, moteur de rendu, module d'extension, plugin, studio, programme externe, dessiné par, file d'attente, moteur de module complémentaire
from: be4b056a
---

{{ui:Calculer un rendu…}} propose un choix **Moteur** au-dessus de Mode. Nos deux moteurs sont toujours disponibles et fonctionnent partout ; les modules complémentaires peuvent en ajouter d'autres, et dans CadCraft Studio la liste comprend aussi les programmes qui prennent en charge la scène.

| Moteur | Ce qu'il fait | Où |
|---|---|---|
| Intégré : Rapide | L'image fixe rapide : lumière du jour, ombres douces, aspects verre et métal, en quelques secondes | Le navigateur et Studio |
| Intégré : Traceur de chemin | La lumière qui rebondit entre les surfaces, sur votre carte graphique ou votre processeur, la file d'attente de rendu et les autres ordinateurs de votre réseau | Le navigateur et Studio |
| Un moteur de module complémentaire | Il dessine l'image et la renvoie : voir [Dessiner l'image avec un autre programme](topic:render-other-program) | Le navigateur (un moteur écrit en JavaScript) ou Studio (un moteur qui lance un programme) |
| Un programme qui prend la scène en charge | Studio place la scène dans son dossier et la tient à jour | Studio |
| Ouvrir dans … | Enregistre la scène et l'ouvre dans un programme ; rien ne revient : voir [Ouvrir la scène dans un autre programme](topic:render-open-in) | Le web enregistre le fichier |

## Comment le choix se comporte

- Choisir Rapide ou le Traceur de chemin change Mode en conséquence, et inversement. Rien d'autre dans la boîte de dialogue ne change pour ceux qui n'utilisent jamais un autre moteur.
- Un moteur indisponible reste dans la liste avec la raison (« introuvable », « nécessite une version plus récente ») ; vous ne pouvez pas le choisir. Dans le navigateur, un moteur qui ne fonctionne que dans Studio affiche « enregistre un fichier » : {{ui:Calculer un rendu…}} enregistre alors la scène et ses paramètres dans un fichier que vous emportez vers ce programme.
- Le choix est enregistré avec les paramètres de rendu du fichier, et le moteur choisi en dernier est le moteur de départ pour les fichiers qui n'ont pas de choix propre.
- Une image issue d'un autre programme indique le programme qui l'a dessinée et sa version, dans la boîte de dialogue et dans la file d'attente de rendu. Les engagements de la page [Rendu](topic:render) ne couvrent que **nos propres** moteurs : un autre programme éclaire, règle les tons et échantillonne à sa façon, de sorte que deux images d'une même scène se ressemblent par la caméra, le soleil, les lampes et l'exposition, mais pas pixel pour pixel.

## Ce que reçoit chaque moteur

La scène est transmise à un autre programme sous forme de **paquet** : le modèle sous forme de fichier USD (le même fichier que celui qu'écrit [Enregistrer en USD](topic:usd)), et un fichier de paramètres qui contient ce qu'un importateur USD ne peut pas gérer de façon fiable : les valeurs exactes des matériaux, les lampes allumées avec leur puissance et leurs profils de lumière, le soleil, le ciel, l'exposition et la caméra telle que la boîte de dialogue la dessinerait. Rien n'est envoyé ailleurs.

## La file d'attente de rendu

Une image ou une animation destinée à un autre programme peut attendre dans [la file d'attente de rendu](topic:render#the-render-queue) comme les nôtres ; sa tâche se souvient du moteur auquel elle est destinée. Une animation est transmise au programme en une seule exécution.
