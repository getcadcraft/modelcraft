---
title: Ajouter un moteur de rendu avec un module complémentaire
summary: Ce qu'un module complémentaire peut ajouter à la liste Moteur de la boîte de dialogue Rendu, l'autorisation nécessaire pour lancer un programme, et ce que Studio vérifie et demande.
keywords: module complémentaire, addon, moteur, moteur de rendu, développeur, engine.run, autorisation, programme, script, signé, studio, api
from: cd7a39ba
---

Un module complémentaire (Paramètres › Modules complémentaires) peut ajouter un moteur à la liste Moteur de {{ui:Calculer un rendu…}}. Le texte complet destiné aux auteurs de modules complémentaires est la section 16 de la spécification des modules complémentaires ; en bref :

- Le module complémentaire enregistre un moteur avec un identifiant qui commence par le sien, un nom, des paramètres facultatifs, et **soit** un programme à lancer **soit** une fonction en JavaScript qui dessine l'image.
- Un moteur qui lance un programme a besoin de l'autorisation **`engine.run`**, affichée avant l'installation et dans les Paramètres. Il ne fonctionne que dans Studio ; dans le navigateur, il apparaît comme un fichier à enregistrer.
- Le module complémentaire indique le programme (un simple nom de fichier, jamais un shell), un script qui se trouve **à l'intérieur du module complémentaire signé**, et des arguments composés de substitutions et de mots simples. Studio trouve le programme ou vous demande de le lui indiquer une seule fois.
- La première fois qu'un module complémentaire lance un programme, **Studio vous le demande dans sa propre boîte de dialogue** : quel module complémentaire, quel programme, et le fait qu'un script peut faire tout ce que peut faire le programme. N'autorisez que les modules complémentaires en qui vous avez confiance. Votre réponse est mémorisée pour ce module complémentaire et ce programme.
- Le paquet (la scène au format USD et un fichier de paramètres, avec le fichier glTF lorsque le module complémentaire le demande) et le script du module complémentaire sont placés dans un nouveau dossier temporaire ; le programme s'y exécute, et l'image revient marquée du nom du moteur du module complémentaire.

:::note
Les modules complémentaires ne peuvent ajouter des moteurs de rendu qu'à partir de l'API de module complémentaire 1.4. Un exemple détaillé pour un moteur de rendu libre en ligne de commande figure dans son propre dépôt ; il n'a pas encore été exécuté avec ce moteur.
:::
