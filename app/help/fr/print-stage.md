---
title: Placer des éléments sur le plateau d'impression et les envoyer à une imprimante
summary: Ajoutez des éléments de la bibliothèque ou votre propre modèle au plateau de votre imprimante, disposez-les, parcourez les couches tranchées, et envoyez l'impression par USB ou par le réseau, ou enregistrez le G-code, sans exporter de STL au préalable.
keywords: étape d'impression, impression 3D, imprimante, plateau, envoyer à l'imprimante 3D, trancheur, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, bibliothèque, disposer, tout ajuster, aperçu des couches, remplissage, supports, filament, pla, petg, module complémentaire, module d'impression 3D
from: abcf5d7e
---

{{ui:Étape d'impression}} dispose les éléments sur le plateau de votre imprimante, les tranche et les envoie à l'imprimante. Vous n'exportez aucun fichier au préalable. Elle fait partie du module complémentaire Impression 3D, activé par défaut.

:::note
Rien n'a encore été imprimé sur une vraie imprimante avec cette fonction. Le trancheur est nouveau : surveillez les premières couches de votre première impression, et utilisez l'aperçu des couches avant d'envoyer.
:::

## Ce que vous allez faire

Placer un modèle sur le plateau, vérifier qu'il tient, examiner les couches tranchées, puis l'envoyer à une imprimante ou enregistrer le G-code.

## Étapes

1. Cliquez sur {{ui:Étape d'impression}} dans la barre d'outils. Une carte s'ouvre au-dessus de la vue et un contour en pointillés représente votre plateau.
2. Sous **Ajouter depuis la bibliothèque**, saisissez un nom dans la zone de recherche, appuyez sur {{ui:Rechercher}} puis sur {{ui:Ajouter}} pour un résultat. L'élément arrive sur le plateau à taille réelle, ou réduit pour tenir. Tout ce que vous avez déjà dessiné ou importé et que vous voyez dans la vue se trouve aussi sur le plateau.
3. Sous **Sur le plateau**, vérifiez la taille de chaque élément. Un élément marqué **Hors du plateau** doit être déplacé. Déplacez, faites pivoter et mettez à l'échelle les éléments dans la vue avec les outils habituels.
4. Appuyez sur {{ui:Disposer sur le plateau}} pour répartir les éléments, ou sur {{ui:Tout ajuster sur le plateau}} pour les réduire jusqu'à ce qu'ils tiennent.
5. Sous **Votre imprimante**, choisissez la taille du **Plateau** ou l'un des profils d'imprimante.
6. Sous **Paramètres d'impression**, choisissez le **Matériau**, la **Qualité** et le **Remplissage %**, et cochez **Ajouter des supports sous les surplombs** si la forme en a besoin.
7. Appuyez sur {{ui:Aperçu des couches}} et déplacez le curseur **Couche** pour parcourir les couches tranchées. Si vous modifiez ensuite l'étape ou les paramètres, appuyez de nouveau sur {{ui:Aperçu des couches}}.
8. Sous **Connexion**, choisissez {{ui:Câble USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ou {{ui:PrusaLink}}. Pour l'USB, appuyez sur {{ui:Se connecter}}. Pour une imprimante réseau, saisissez son **Adresse** (et la **clé API** si elle est demandée), puis appuyez sur {{ui:Tester la connexion}}.
9. Appuyez sur {{ui:Envoyer à l'imprimante 3D}}. La carte demande si le plateau est dégagé et si le bon matériau est chargé, et affiche la durée, le matériau et les températures. Confirmez pour envoyer.

Un message vous indique que l'imprimante démarre. {{ui:Arrêter l'impression}} éteint les chauffages, le ventilateur et les moteurs. Si vous voulez seulement un fichier, appuyez sur {{ui:Enregistrer le G-code à la place}}.

## Remarques

- L'USB nécessite Chrome ou Edge sur un ordinateur, et la page doit rester ouverte jusqu'à la fin de l'impression. La fermer interrompt le flux.
- Une imprimante réseau doit autoriser ce site (dans Moonraker, ajoutez-le à `cors_domains` ; dans OctoPrint, activez CORS et copiez une clé API). Votre navigateur peut demander l'accès aux appareils de votre réseau.
- Rien ne se connecte ni n'envoie sans votre clic.
- La liste des trancheurs se trouve sous **Trancheur**. {{ui:CadCraft basic (inclus, le plus rapide)}} est intégré. Kiri:Moto, PrusaSlicer, OrcaSlicer et la Bambu Lab P2S sont des modules complémentaires distincts que vous activez depuis la carte ou sous {{ui:Paramètres}} › {{ui:Modules complémentaires}}. PrusaSlicer et OrcaSlicer utilisent votre propre copie et fonctionnent depuis CadCraft Studio sur un ordinateur.
- Les pièces qui ne sont pas des solides fermés sont laissées de côté, et la carte indique la part de la forme concernée.
- Pour les imprimantes à résine, voir [Trancher pour une imprimante à résine](topic:resin-printing). Pour vérifier ou réparer d'abord un modèle, voir [Supports, épaisseur des parois, évidement et réparation](topic:print-tools).
