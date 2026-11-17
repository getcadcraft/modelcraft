---
title: Maße ablesen und Hilfslinien setzen
summary: Längen und Flächen ablesen, Abstände zwischen zwei Punkten mit dem Maßband messen und Hilfslinien und Punkte zum Zeichnen anlegen.
keywords: messen, Maßband, Winkelmesser, Winkel, Winkelhilfslinie, Hilfslinie, Konstruktionslinie, Abstand, Bemaßung, Länge, Fläche, Versatz, Layout, Hilfspunkt
from: de6d04d9
---

## Größen ablesen, ohne zu messen

Wählen Sie etwas aus und sehen Sie in {{ui:Entity info}} nach:

- Eine Kante zeigt ihre **Länge**.
- Eine Fläche zeigt ihre **Fläche** und wie viele Öffnungen sie hat.
- Mehrere Flächen zeigen ihre **Gesamtfläche**.
- Eine Gruppe oder Komponente zeigt ihre **Größe** (Breite × Tiefe × Höhe des Quaders um sie herum) und, wenn sie ein geschlossener Volumenkörper ist, ihr **Volumen**.
- Ohne Auswahl zeigt {{ui:Entity info}} die Größe des gesamten Modells.

Längen und Flächen verwenden die Einheit im Auswahlfeld unten rechts. Bei einem Modell in Millimetern zeigen Flächen ab 0.01 m² in Quadratmetern an (ein Raum von 4 × 3 m zeigt „12 m²“).

Während Sie zeichnen, zeigt das Eingabefeld die aktuelle Länge, Größe, den Radius oder Abstand, sodass Sie selten nachmessen müssen.

Um eine Größe nach dem Zeichnen zu ändern, wählen Sie eine Kante oder Gruppe aus und geben Sie die Länge oder Größe in {{ui:Entity info}} erneut ein. Oder setzen Sie eine [Bemaßung](topic:dimensions) und geben dort eine neue Länge ein.

## Zwischen zwei Punkten messen

1. Drücken Sie {{key:T}} für das Werkzeug {{ui:Tape}}.
2. Klicken Sie auf einen Punkt: eine Ecke, einen Mittelpunkt, einen Punkt auf einer Fläche oder den Boden. (Ein Klick auf eine Kante bewirkt etwas anderes; siehe unten.)
3. Bewegen Sie sich zum zweiten Punkt. Die Spitze und das Eingabefeld ({{ui:Length}}) zeigen den Abstand. Es fängt an Punkten sowie an den roten, grünen und blauen Richtungen ein.
4. Klicken Sie. Die Statusleiste zeigt „Gemessen 4' 6".“, und am zweiten Punkt bleibt ein **Hilfspunkt**.

Um den Hilfspunkt stattdessen in einem genauen Abstand zu setzen, geben Sie ihn nach dem ersten Klick ein und drücken Sie {{key:Enter}}: Er wird in die Richtung gesetzt, in die Sie zeigen.

## Eine Hilfslinie setzen

Eine Hilfslinie ist eine endlose gestrichelte Linie, parallel zu einer Kante, in einem Abstand, den Sie wählen. Verwenden Sie Hilfslinien, um einen Rücksprung, eine Geschosshöhe oder den Beginn eines Fensters festzulegen.

1. Drücken Sie {{key:T}}.
2. Klicken Sie auf eine **Kante** (nicht auf ihr Ende). Die Spitze zeigt „Auf Kante“.
3. Bewegen Sie sich von der Kante weg, zu der Seite, auf der die Hilfslinie liegen soll. Eine gestrichelte Linie folgt, parallel zur Kante, und das Eingabefeld ({{ui:Offset}}) zeigt den Abstand.
4. Klicken Sie, oder geben Sie den Versatz ein und drücken Sie {{key:Enter}}: `1.5m`, `5'`.

   Die Statusleiste zeigt „Hilfslinie 1.5 m von der Kante entfernt.“

Wenn Sie auf einer bestehenden Hilfslinie beginnen, entsteht eine weitere Hilfslinie parallel dazu, sodass Sie ein Raster Schritt für Schritt von einer Hilfslinie aus anlegen können.

Wenn Sie einen Versatz eingeben, ohne sich vorher von der Kante wegzubewegen, kann ModelCraft nicht erkennen, welche Seite Sie meinen: „Bewegen Sie sich zuerst von der Kante weg, um zu zeigen, welche Seite gemeint ist.“

## Eine Hilfslinie im Winkel: Winkelmesser

1. Klicken Sie in der Gruppe {{ui:Modify}} auf {{ui:Protractor}}.
2. Klicken Sie auf das Zentrum: den Punkt, durch den die Hilfslinie verläuft. Auf einer Fläche liegt der Winkelmesser auf dieser Fläche; sonst liegt er flach. Nach diesem Klick stellen {{key:Right}}, {{key:Left}} oder {{key:Up}} ihn rechtwinklig zu Rot, Grün bzw. Blau auf (erneut drücken, um es rückgängig zu machen).
3. Klicken Sie auf einen Punkt, der 0° festlegt, zum Beispiel entlang einer Kante.
4. Bewegen Sie sich zum gewünschten Winkel und klicken Sie: Er rastet in 15°-Schritten ein. Oder geben Sie den Winkel in Grad ein, etwa `22.5`, und drücken Sie {{key:Enter}}; die Hilfslinie geht auf die Seite, auf der der Zeiger liegt.

Die Hilfslinie verläuft im gewählten Winkel durch das Zentrum. Zeichnen Sie entlang ihr mit {{ui:Line}} für eine Dachneigung, eine Fase oder eine abgeschrägte Wand.

## An Hilfslinien zeichnen

Zeichenwerkzeuge fangen an Hilfslinien („Auf Hilfslinie“) und Hilfspunkten („Hilfspunkt“) ein, ebenso dort, wo eine Hilfslinie eine Achsenrichtung kreuzt. Beginnen Sie ein Rechteck dort, wo sich zwei Hilfslinien kreuzen, um es genau zu platzieren.

## Hilfslinien entfernen

- Eine Hilfslinie: Klicken Sie sie mit {{ui:Select}} an und drücken Sie {{key:Delete}}, oder klicken Sie sie mit dem {{ui:Eraser}} an.
- Alle Hilfslinien: Klicken Sie ohne Auswahl in {{ui:Entity info}} auf {{ui:Delete all guides}}.

Hilfslinien werden in der Datei `.modelcraft` gespeichert. Sie werden nicht in andere Formate exportiert.
