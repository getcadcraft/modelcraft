---
title: Sélectionner des éléments
summary: Cliquez, double-cliquez et triple-cliquez, faites glisser une fenêtre ou une boîte de capture, ajoutez et retirez avec les touches de modification, et supprimez.
keywords: sélectionner, sélection, fenêtre, capture, ajouter à la sélection, désélectionner, tout sélectionner, triple clic, double clic, supprimer, effacer
from: d56d1f89
---

{{ui:Select}} ({{key:Space}}) est l'outil avec lequel ModelCraft démarre, et celui vers lequel {{key:Esc}} vous ramène. Les éléments sélectionnés deviennent bleus, et {{ui:Entity info}} à droite indique ce qu'ils sont.

## Cliquer

| Action | Sélectionne |
|---|---|
| Cliquez sur une face ou une arête | Cette face ou cette arête |
| Cliquez sur un groupe ou un composant | Le groupe ou le composant entier |
| Double-cliquez sur une face | La face et ses arêtes |
| Double-cliquez sur une arête | L'arête et les faces de part et d'autre |
| Double-cliquez sur un groupe ou un composant | L'ouvre pour modification (voir [Groupes et composants](topic:groups-components)) |
| Triple-cliquez sur une face ou une arête | Tout ce qui lui est relié : l'objet entier |
| Cliquez dans le vide | Rien (efface la sélection) |
| Double-cliquez dans le vide pendant la modification d'un groupe | Ferme le groupe |

Les arêtes sont plus faciles à viser que les faces : lorsque le pointeur se trouve à quelques pixels d'une arête, le clic choisit l'arête.

## Faire glisser une boîte

- **De gauche à droite** dessine une boîte pleine : une sélection par **fenêtre**. Seuls les éléments entièrement à l'intérieur sont sélectionnés.
- **De droite à gauche** dessine une boîte en pointillés : une sélection par **capture**. Tout élément touché par la boîte est sélectionné, et une face l'est lorsque la boîte se trouve entièrement à l'intérieur de celle-ci.

Un groupe ou un composant compte comme un seul élément : une fenêtre doit le contenir entièrement, une capture doit seulement le toucher.

## Ajouter et retirer

Maintenez une touche pendant que vous cliquez ou faites glisser :

| Touche | Effet |
|---|---|
| {{key:Shift}} | Bascule : ajoute ce qui n'est pas sélectionné, retire ce qui l'est |
| {{key:Mod}} | Ajoute |
| {{key:Shift}} et {{key:Mod}} ensemble | Retire |

Pour sélectionner tout le modèle (ou tout le groupe en cours de modification), appuyez sur {{key:Mod+A}}.

## Effacer la sélection

Appuyez sur {{key:Esc}} (avec {{ui:Select}} comme outil), ou cliquez dans le vide.

## Supprimer la sélection

Appuyez sur {{key:Delete}} ou {{key:Backspace}}. Les faces, arêtes, groupes et guides de la sélection sont supprimés en une seule étape ; {{key:Mod+Z}} les rétablit.

Supprimer une arête retire les faces qui en ont besoin, sauf si l'arête ne séparait que deux faces situées dans le même plan : les deux faces se réunissent alors en une seule. Supprimer une face laisse ses arêtes. Voir [Effacer et nettoyer](topic:erase).

## Sélectionner à l'intérieur d'un groupe

Cliquer sur un groupe sélectionne le groupe entier. Pour sélectionner une face à l'intérieur, double-cliquez sur le groupe pour l'ouvrir, puis cliquez. Lorsqu'un groupe est ouvert, les clics n'atteignent que ce qui se trouve à l'intérieur ; tout le reste est estompé. Appuyez sur {{key:Esc}} sans rien sélectionner, ou double-cliquez dans le vide, pour le fermer.

L'{{ui:Outliner}} à gauche sélectionne les groupes et les composants par leur nom, ce qui est utile lorsqu'ils sont masqués derrière d'autres éléments.
