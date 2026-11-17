---
title: Die Zeichenachsen verschieben und drehen
summary: Die roten, grünen und blauen Achsen drehen, um ein Gebäude anzupassen, das nicht rechtwinklig zu ihnen steht, oder sie an einer Fläche ausrichten, damit Zeichnen und Eingabe ihr folgen.
keywords: Achsen, Zeichenachsen, Ursprung, Achsen ausrichten, Achsen drehen, Achsen zurücksetzen, schräges Gebäude, schief, BKS, Koordinatensystem
from: cab258f7
---

Die roten, grünen und blauen Achsen führen alles, was Sie zeichnen: Rechtecke richten sich nach ihnen aus, Linien rasten auf sie ein, und der Boden ist die rot-grüne Ebene. Wenn ein Gebäude schräg steht (ein Lageplan, der nicht rechtwinklig zum Norden ist, ein um 30° gedrehter Flügel), verschieben Sie die Achsen auf es, damit das Zeichnen seinen Wänden folgt. Das Modell selbst bewegt sich nicht.

Alle drei Befehle finden Sie unter {{ui:Bearbeiten}} › {{ui:Mehr}}.

## Achsen platzieren

1. {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Achsen platzieren}}.
2. Klicken Sie, wo der Ursprung liegen soll, etwa an eine Ecke des Gebäudes.
3. Klicken Sie einen Punkt entlang der neuen roten Achse, etwa weiter an einer Wand.
4. Klicken Sie einen Punkt in Richtung der neuen grünen Achse. Grün wird rechtwinklig zu Rot ausgerichtet, und Blau steht rechtwinklig zu beiden.

Die Achsen werden an ihrer neuen Stelle gezeichnet. Ein Rechteck, das Sie jetzt auf dem Boden zeichnen oder als `4m,3m` eingeben, verläuft entlang der gedrehten roten und grünen Achse; die Pfeiltasten rasten auf sie ein; und der Ursprungsfang liegt am neuen Ursprung.

## Achsen an einer Fläche ausrichten

Wählen Sie eine Fläche und dann {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Achsen an Fläche ausrichten}}. Blau zeigt dann aus der Fläche heraus, Rot verläuft entlang ihrer längsten Kante, und der Ursprung liegt am Anfang dieser Kante. Verwenden Sie das, um auf einem geneigten Dach zu zeichnen, als wäre es der Boden.

## Achsen zurücksetzen

{{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Achsen zurücksetzen}} setzt sie dorthin zurück, wo das Modell begann.

## Wissenswertes

- Innerhalb einer geöffneten Gruppe oder Komponente gelten deren eigene Achsen (sie drehen sich mit ihr); die Achsen des Modells gelten auf der obersten Ebene.
- Die Achsen werden in der ModelCraft-Datei gespeichert, und jede Änderung ist ein Schritt für Rückgängig.
- Exporte und die Standardansichten ({{ui:Oben}}, {{ui:Vorne}} …) verwenden weiterhin die eigenen Richtungen des Modells.
