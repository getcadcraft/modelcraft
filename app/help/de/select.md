---
title: Objekte wählen
summary: Klicken, Doppelklicken und Dreifachklicken, ein Fenster oder einen Kreuzen-Kasten ziehen, mit Zusatztasten hinzufügen und entfernen sowie löschen.
keywords: wählen, Auswahl, Fenster, Kreuzen, zur Auswahl hinzufügen, Auswahl aufheben, Alles auswählen, Dreifachklick, Doppelklick, Löschen, Entfernen
from: d56d1f89
---

{{ui:Wählen}} ({{key:Space}}) ist das Werkzeug, mit dem ModelCraft startet und zu dem {{key:Esc}} Sie zurückbringt. Ausgewählte Objekte werden blau, und {{ui:Objektinfo}} rechts zeigt an, was sie sind.

## Klicken

| Vorgehen | Wählt aus |
|---|---|
| Eine Fläche oder eine Kante anklicken | Diese Fläche oder Kante |
| Eine Gruppe oder Komponente anklicken | Die ganze Gruppe oder Komponente |
| Eine Fläche doppelklicken | Die Fläche und ihre Kanten |
| Eine Kante doppelklicken | Die Kante und die Flächen auf beiden Seiten |
| Eine Gruppe oder Komponente doppelklicken | Öffnet sie zum Bearbeiten (siehe [Gruppen und Komponenten](topic:groups-components)) |
| Eine Fläche oder Kante dreifach klicken | Alles, was damit verbunden ist: das ganze Objekt |
| Leeren Bereich anklicken | Nichts (hebt die Auswahl auf) |
| Leeren Bereich doppelklicken, während eine Gruppe bearbeitet wird | Schließt die Gruppe |

Kanten sind leichter zu treffen als Flächen: Wenn sich der Zeiger innerhalb weniger Pixel von einer Kante befindet, nimmt der Klick die Kante.

## Kasten ziehen

- **Von links nach rechts** zieht einen durchgezogenen Kasten: eine **Fenster**-Auswahl. Nur Objekte, die vollständig darin liegen, werden ausgewählt.
- **Von rechts nach links** zieht einen gestrichelten Kasten: eine **Kreuzen**-Auswahl. Alles, was der Kasten berührt, wird ausgewählt, und eine Fläche wird ausgewählt, wenn der Kasten vollständig in ihr liegt.

Eine Gruppe oder Komponente zählt als ein Objekt: Ein Fenster muss sie ganz enthalten, ein Kreuzen muss sie nur berühren.

## Hinzufügen und entfernen

Halten Sie beim Klicken oder Ziehen eine Taste gedrückt:

| Taste | Wirkung |
|---|---|
| {{key:Shift}} | Schaltet um: fügt hinzu, was nicht ausgewählt ist, und entfernt, was ausgewählt ist |
| {{key:Mod}} | Fügt hinzu |
| {{key:Shift}} und {{key:Mod}} zusammen | Entfernt |

Um alles im Modell auszuwählen (oder alles in der Gruppe, die Sie bearbeiten), drücken Sie {{key:Mod+A}}.

## Auswahl aufheben

Drücken Sie {{key:Esc}} (mit {{ui:Wählen}} als Werkzeug) oder klicken Sie auf einen leeren Bereich.

## Ausgewähltes löschen

Drücken Sie {{key:Delete}} oder {{key:Backspace}}. Flächen, Kanten, Gruppen und Hilfslinien in der Auswahl werden in einem Schritt entfernt; {{key:Mod+Z}} holt sie zurück.

Das Löschen einer Kante entfernt die Flächen, die sie benötigen, es sei denn, die Kante hat nur zwei Flächen in derselben Ebene getrennt: dann werden die beiden Flächen zu einer verbunden. Das Löschen einer Fläche lässt ihre Kanten stehen. Siehe [Löschen und bereinigen](topic:erase).

## Innerhalb einer Gruppe auswählen

Ein Klick auf eine Gruppe wählt die ganze Gruppe aus. Um eine Fläche darin auszuwählen, doppelklicken Sie auf die Gruppe, um sie zu öffnen, und klicken Sie dann. Solange eine Gruppe geöffnet ist, erreichen Klicks nur, was darin liegt; alles andere wird verblasst. Drücken Sie {{key:Esc}} ohne Auswahl oder doppelklicken Sie auf einen leeren Bereich, um sie zu schließen.

Die {{ui:Gliederung}} links wählt Gruppen und Komponenten nach Namen aus; das hilft, wenn sie hinter anderen Objekten verborgen sind.
