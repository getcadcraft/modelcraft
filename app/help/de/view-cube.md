---
title: Der ViewCube
summary: Klicken Sie auf eine Fläche, Kante oder Ecke des Würfels in der Ecke der Ansicht, um von dort aus zu schauen, ziehen Sie ihn, um die Ansicht zu drehen, drehen Sie den Kompassring, wechseln Sie um eine frontale Ansicht herum und kehren Sie zur Startansicht zurück.
keywords: viewcube, view cube, würfel, kompass, norden, startansicht, standardansichten, oben, vorne, rechts, iso, ecke, kante, orbit, ansicht drehen, achsensymbol, eckenanzeige, navigation
from: e1ec1347
---

Der ViewCube sitzt oben rechts in der 3D-Ansicht. Er dreht sich mit der Ansicht, sodass er immer zeigt, in welche Richtung Sie schauen: {{ui:Oben}} ist oben, {{ui:Vorne}} zeigt nach Süden (Sie schauen nach Norden, entlang der grünen Achse, wenn Sie ihn betrachten), {{ui:Rechts}} zeigt nach Osten (rote Achse). Er bleibt durchsichtig, bis Sie darauf zeigen.

## Von einer Seite, Kante oder Ecke aus schauen

1. Zeigen Sie auf den Würfel. Der Teil unter dem Zeiger leuchtet auf: die Mitte einer Fläche, eine Kante (sie leuchtet auf beiden Flächen, die sie teilen) oder eine Ecke (auf allen drei Flächen).
2. Klicken Sie darauf. Die Ansicht dreht sich, um von dort aus zu schauen, und behält dieselbe Mitte und denselben Zoom bei.

Es gibt 26 Stellen zum Klicken: 6 Flächen ({{ui:Oben}}, {{ui:Unten}}, {{ui:Vorne}}, {{ui:Hinten}}, {{ui:Links}}, {{ui:Rechts}}), 12 Kanten und 8 Ecken. Eine Ecke ergibt die klassische Dreiviertelansicht; eine Kante liegt auf halber Strecke zwischen zwei Flächen.

Ein Klick auf {{ui:Vorne}} ist dasselbe wie {{ui:Ansichten}}, {{ui:Vorne}} in der Symbolleiste, nur ohne das Einpassen des Zooms. {{ui:Ansichten}} zoomt weiterhin auf das ganze Modell.

## Die Ansicht durch Ziehen des Würfels drehen

Ziehen Sie den Würfel, um die Ansicht zu drehen, genauso wie das Orbitieren in der Ansicht selbst. Ein Ziehen wird nie als Klick gewertet, sodass Sie den Würfel überall anfassen können.

## Der Kompassring

Der Ring unter dem Würfel trägt N, O, S und W.

- **Ziehen Sie den Ring**, um das Modell um die senkrechte Achse zu drehen, als stünde es auf einem Drehteller. Der Ring folgt dem Zeiger.
- **Klicken Sie auf einen Buchstaben**, um von dieser Seite aus zu schauen und dabei den Blickwinkel nach unten beizubehalten. Bei einer Ansicht von genau oben wandert der angeklickte Buchstabe an den unteren Rand des Bildschirms.

## Frontale Ansichten: Pfeile

Wenn Sie direkt auf eine Fläche schauen, erscheinen kleine Pfeile um den Würfel:

- Die vier **Dreiecke** bringen die Fläche auf dieser Seite nach vorne: Das Dreieck über dem Würfel zeigt die Fläche, die oben war, und so weiter.
- Die zwei **gebogenen Pfeile** oben rechts drehen das Bild um eine Viertelumdrehung im oder gegen den Uhrzeigersinn, ohne zu ändern, auf welche Fläche Sie schauen. Verwenden Sie sie, um einen Plan so zu drehen, dass eine lange Wand quer über den Bildschirm verläuft.

## Startansicht

Die Haus-Schaltfläche oben links am Würfel kehrt zur Dreiviertelansicht {{ui:Iso}} zurück und passt das ganze Modell ein. {{key:Home}} tut dasselbe, solange der Würfel den Tastaturfokus hat.

## Mit der Tastatur

{{key:Tab}} bis zum Würfel, dann:

| Taste | Funktion |
|---|---|
| {{key:left}} / {{key:right}} | eine Seite, Kante oder Ecke rund um den Würfel wählen, in Achtel-Drehschritten (Bildschirmleser sagen, welche) |
| {{key:up}} / {{key:down}} | eine höhere oder tiefere wählen, bis hinauf zu {{ui:Oben}} oder hinunter zu {{ui:Unten}} |
| {{key:Enter}} oder {{key:Space}} | von der gewählten aus schauen |
| {{key:Shift+left}} / {{key:Shift+right}} | die Ansicht um eine Viertelumdrehung um die senkrechte Achse drehen |
| {{key:Home}} | die Startansicht |
| {{key:Esc}} | den Würfel verlassen |

Tasten, die am Würfel gedrückt werden, bleiben beim Würfel: Sie starten keine ModelCraft-Werkzeuge.

## Achsensymbol oder nichts stattdessen

Öffnen Sie {{ui:Einstellungen}} ({{key:Mod+,}}), die Registerkarte {{ui:ModelCraft}}, und stellen Sie **Eckenanzeige** auf {{ui:View cube}} (der Start), {{ui:Axis icon}} (ein kleines X-, Y-, Z-Zeichen unten links: X rot, Y grün, Z blau) oder {{ui:None}}. Dieser Browser merkt sich die Wahl. Siehe [ModelCraft-Einstellungen](topic:settings#corner-indicator).

:::note
ModelCraft kennt keine Rollung: Außer bei Ansichten direkt von oben und direkt von unten ist oben auf dem Bildschirm immer oben im Modell. Der Würfel und die gebogenen Pfeile können eine Draufsicht drehen; sie können eine Seitenansicht nicht auf die Kante kippen.
:::
