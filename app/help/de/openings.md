---
title: Eine Öffnung durch eine Wand schneiden
summary: Zeichnen Sie ein Fenster oder eine Tür mit Dicke auf eine Wand und drücken Sie sie hindurch, sodass die Wand ein echtes Loch bekommt.
keywords: Fenster, Tür, Öffnung, Loch, Wand, schneiden, durchdrücken, Hohlraum, Dicke, Fassade
from: 6b22f32c
---

Eine Öffnung braucht eine Wand mit zwei Seiten: einen Quader oder eine Wand, die Sie erstellt haben, indem Sie ein langes dünnes Rechteck nach oben gezogen haben. Eine einzelne, frei stehende Fläche hat nichts, durch das Sie drücken können.

## Eine Wand zum Üben erstellen

1. Drücken Sie {{key:R}}, klicken Sie eine Ecke auf dem Boden an und geben Sie `6m,0.3m` (oder `20',12"`) ein, dann {{key:Enter}}.
2. Drücken Sie {{key:P}}, klicken Sie das Rechteck an und geben Sie `3m` (oder `10'`) ein, dann {{key:Enter}}.

Sie haben jetzt eine Wand, die 300 mm (12 in) dick ist.

## Die Öffnung zeichnen

1. Drehen Sie die Ansicht, damit Sie die lange Seite der Wand sehen.
2. Drücken Sie {{key:R}}.
3. Fahren Sie über die Fläche der Wand und klicken Sie dann, wo die untere Ecke des Fensters hinkommt. Der Tipp sagt „Auf Fläche“.
4. Geben Sie Breite und Höhe des Fensters ein, zum Beispiel `1.2m,1.5m` (oder `4',5'`), und drücken Sie {{key:Enter}}.

   Das Fenster ist eine eigene Fläche innerhalb der Wandfläche, die nun ein Loch um sich herum hat.

Um es in einem genauen Abstand von der Ecke und dem Boden zu platzieren, verwenden Sie zuerst [Hilfslinien](topic:guides-measure): Ziehen Sie mit {{ui:Maßband}} Hilfslinien von der unteren und der seitlichen Endkante der Wand weg und beginnen Sie das Rechteck dort, wo sich zwei Hilfslinien kreuzen (der Tipp sagt „Auf Hilfslinie“).

## Hindurchdrücken

1. Drücken Sie {{key:P}}.
2. Klicken Sie die Fensterfläche an und drücken Sie sie in die Wand.
3. Bewegen Sie, bis sie an der hinteren Fläche stoppt, dann klicken Sie. Oder geben Sie die Wanddicke ein, `300` (oder `12`), und drücken Sie {{key:Enter}}.

   ModelCraft stoppt an der Fläche dahinter und öffnet sie: Die Wand hat jetzt ein durchgehendes Loch, mit vier Seitenflächen (Laibungen, Sturz und Brüstung), die es auskleiden. {{ui:Objektinfo}} nennt die Wand auch dann noch einen geschlossenen Volumenkörper, wenn sie gruppiert ist.

Wenn Sie weniger als die volle Dicke drücken, entsteht eine Vertiefung statt eines Lochs.

## Eine Tür

Zeichnen Sie das Rechteck, beginnend an der unteren Kante der Wandfläche (der Tipp sagt „Auf Kante“ oder „Endpunkt“), damit die Öffnung bis zum Boden reicht. Drücken Sie es auf dieselbe Weise hindurch.

## Viele Fenster gleicher Größe

1. Erstellen Sie die erste Öffnung.
2. Für die nächsten zeichnen Sie die Rechtecke und doppelklicken Sie dann jedes mit {{ui:Drücken/Ziehen}}: Ein Doppelklick wiederholt den letzten Abstand. Siehe [Drücken und Ziehen](topic:push-pull#repeat-the-last-distance).

## Wenn es nicht durchgeschnitten hat

- Das Rechteck muss **auf** der Wandfläche gezeichnet werden. Wurde es frei davor in der Luft gezeichnet, ist es eine eigene Fläche: Machen Sie es rückgängig und zeichnen Sie es erneut, beginnend auf der Fläche.
- Das Drücken stoppt an der ersten Fläche hinter der Öffnung. Liegt etwas anderes im Weg, innerhalb der Wand (eine innere Fläche aus früherem Zeichnen), stoppt es dort; löschen Sie die Kanten dieser Fläche und versuchen Sie es erneut.
- Geometrie in einer eigenen Gruppe wird nicht geschnitten. Öffnen Sie die Gruppe, die die Wand enthält, und zeichnen Sie die Öffnung darin.
