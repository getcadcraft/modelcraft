---
title: Flächen schneiden
summary: Die Linien zeichnen, an denen sich Flächen durchdringen, damit Sie die Teile drücken, löschen oder bemalen können.
keywords: schneiden, Flächen schneiden, Mit Modell schneiden, Mit Auswahl schneiden, Ausschnitt, Öffnung, Loch, verbinden, Linien an Schnittstellen, Boolesch
from: 6bc58526
---

Wenn eine Form durch eine andere hindurchgeht, zeichnet ModelCraft die Linie, an der sich ihre Flächen treffen, nicht: Sie überlappen einfach. **Schneiden** zeichnet diese Linien als Kanten, sodass die Flächen dort geteilt werden. Dann können Sie die Teile mit Drücken/Ziehen, Löschen oder Bemalen bearbeiten.

Beide Befehle finden Sie unter {{ui:Edit}} › {{ui:More}}.

## Mit Modell schneiden

Schneidet die Auswahl gegen **jede Fläche auf dem Bildschirm**.

Zum Beispiel: Ein Balken (eine Gruppe) geht durch eine Wand (eine andere Gruppe), und Sie wollen eine Öffnung in der Wand:

1. Doppelklicken Sie auf die Wand, um sie zu öffnen, und wählen Sie alle ihre Flächen aus ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Der Umriss des Balkens wird auf beide Flächen der Wand gezeichnet, als zwei neue Flächen. Drücken Sie eine davon durch die Wand, um die Öffnung zu machen, und schließen Sie dann die Wand.

## Mit Auswahl schneiden

Schneidet die ausgewählten Flächen, Gruppen und Komponenten **nur gegeneinander**. Wählen Sie mindestens zwei aus.

## Wohin die Linien gehen

Die Linien werden immer im **offenen Kontext** gezeichnet: im Modell, wenn keine Gruppe geöffnet ist, oder in der Gruppe, die Sie bearbeiten. Gruppen und Komponenten, die nicht geöffnet sind, werden nicht verändert. Um also die Flächen einer Gruppe zu schneiden, öffnen Sie sie zuerst, wie im obigen Beispiel.

## Wissenswertes

- Flächen, die in derselben Ebene liegen, werden nicht geschnitten.
- Linien, die auf einer Fläche eine Schleife schließen, erzeugen eine neue Fläche, wie gezeichnete Linien auch.
- Jedes Schneiden ist ein Schritt für {{key:Mod+Z}} (Rückgängig). Kreuzt sich nichts, ändert sich nichts.
- Für geschlossene Formen erledigen die [Volumenkörper-Werkzeuge](topic:solids) (Vereinigen, Subtrahieren) die ganze Arbeit in einem Schritt.
