---
title: Gelände: Boden aus Höhenlinien und Modellieren
summary: Boden aus Höhenlinien oder als Raster erstellen, dann mit einem weichen Pinsel anheben und absenken.
keywords: Gelände, Boden, Landschaft, Topografie, Höhenlinien, Höhenlinie, Grundstück, Gefälle, Hügel, Erhebung, Sandkasten, Smoove, modellieren, Geländemodellierung, TIN
from: 407652b3
---

Gelände ist Boden aus Dreiecken und kann daher jede Form annehmen. Es ist eine Gruppe: Doppelklicken Sie darauf, um es zu bearbeiten.

## Aus Höhenlinien

1. Besorgen Sie die Höhenlinien auf ihrer Höhe: Zeichnen Sie sie, oder [importieren Sie einen Lageplan](topic:site-plan) und verschieben Sie jede Höhenlinie auf ihre Höhe.
2. Wählen Sie sie aus (alle Kanten aller Höhenlinien).
3. {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Gelände aus gewählten Höhenlinien}}.

ModelCraft verbindet die Höhenlinienpunkte mit Dreiecken (ein TIN) und glättet jede Kante darin, damit der Boden glatt schattiert wird. Die Linien selbst bleiben erhalten; löschen oder verbergen Sie sie, wenn Sie sie nicht mehr brauchen. Sehr dichte Höhenlinien werden auf 8 000 Punkte ausgedünnt.

## Ein Raster zum Modellieren

{{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Geländeraster…}} fragt nach einer Breite, einer Tiefe und einer Zellengröße und platziert dann ein flaches Dreiecksraster, wo Sie seine Ecke anklicken. Kleine Zellen lassen sich glatter modellieren, erzeugen aber mehr Flächen (höchstens 200 × 200 Zellen).

## Modellieren: Boden anheben und absenken

1. Doppelklicken Sie auf das Gelände, um es zu öffnen.
2. {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Gelände modellieren}}. Ein Kreis zeigt den Pinsel auf dem Boden unter dem Zeiger.
3. Ziehen Sie nach oben, um den Boden unter dem Pinsel anzuheben, oder nach unten, um ihn abzusenken. Die Mitte bewegt sich am stärksten, und der Boden läuft zum Kreisrand hin auf null aus, sodass Hügel und Mulden glatt werden.

Um einen Hügel auf eine genaue Höhe zu bringen, klicken Sie einmal, geben dann die Höhe ein, etwa `1.5m` (ein Minus senkt ab), und drücken {{key:Enter}}. Um den Pinsel zu ändern, geben Sie vor dem Klicken eine Länge ein: `5m` ergibt einen Pinsel mit 5 m Radius.

Jede Modellierung ist ein einziger Rückgängig-Schritt.

## Wissenswertes

- Modellieren verschiebt nur Dreiecksflächen, sodass jede Fläche flach bleibt. Von Hand gezeichnete Flächen (Rechtecke, Polygone) sind kein Gelände: Das Werkzeug weist darauf hin.
- Modellieren verschiebt Punkte nur senkrecht nach oben und unten; es fügt keine Punkte hinzu. Für feinere Details erstellen Sie ein Raster mit kleineren Zellen.
- Gelände wird wie jede andere Gruppe exportiert. In IFC ist es ein Bauelement-Proxy, wie alles andere auch.
