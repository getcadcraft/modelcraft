---
title: Tastenkürzel und Mausaktionen
summary: Jedes Tastenkürzel, jede Mausaktion, Trackpad-Geste und Touch-Geste in ModelCraft, nach Funktion gruppiert.
keywords: Tastatur, Tastenkürzel, Tasten, Hotkeys, Maus, Trackpad, Touch, Gesten, Spickzettel, ctrl, Befehl, Pfeiltasten
from: e2348957
---

Dies sind die Tasten für Drücken/Ziehen, mit denen ModelCraft startet. Für die andere Variante siehe [Modeler-Tasten](topic:keyboard#modeler-keys) unten und [ModelCraft-Einstellungen](topic:settings).

Tastenkürzel funktionieren, wenn die 3D-Ansicht oder eine Symbolleistenschaltfläche den Fokus hat. Wenn Sie gerade in ein Feld im Bereich getippt oder eine Liste in {{ui:Style}} geändert haben, klicken Sie zuerst in die 3D-Ansicht, sonst gehen Ihre Tasten an dieses Feld. Siehe [Tasten, Mäuse und Trackpads](common:keys), wie Tasten auf jedem Computer geschrieben werden.

## Werkzeuge

| Taste | Werkzeug |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | {{ui:Tape}} |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Werkzeugbuchstaben funktionieren nur ohne Zusatztasten: {{key:Shift}} mit einem Buchstaben tut nichts, außer bei den beiden unten.

## Modell und Datei

| Taste | Funktion |
|---|---|
| {{key:G}} | Komponente aus der Auswahl erstellen |
| {{key:Shift+G}} | Gruppe aus der Auswahl erstellen |
| {{key:Shift+Z}} | Zoom Grenzen (das gesamte Modell) |
| {{key:Mod+Z}} | Rückgängig |
| {{key:Mod+Y}} oder {{key:Mod+Shift+Z}} | Wiederholen |
| {{key:Mod+S}} | Speichern (lädt die Datei `.modelcraft` herunter) |
| {{key:Mod+O}} | Ein Modell öffnen |
| {{key:Mod+A}} | Alles auswählen (im geöffneten Gruppe, falls eine offen ist) |
| {{key:Mod+C}} | Auswahl kopieren |
| {{key:Mod+X}} | Auswahl ausschneiden |
| {{key:Mod+V}} | Einfügen: Die Kopie folgt dem Zeiger, klicken Sie, wo sie hin soll |
| {{key:Mod+Shift+V}} | An gleicher Position einfügen (wo sie kopiert wurde) |
| {{key:Mod+D}} | Duplizieren: Eine Kopie bewegt sich mit dem Zeiger, klicken Sie zum Absetzen |
| {{key:Delete}} oder {{key:Backspace}} | Auswahl löschen |
| {{key:PageDown}} / {{key:PageUp}} | Nächste / vorherige Szene |
| {{key:F1}} | Diese Hilfe öffnen oder schließen (auch {{ui:Help}} in der App-Leiste; {{key:Esc}} in der Hilfe schließt sie) |
| {{key:Ctrl+Shift+F}} | Bildschirmmodus: Vollbild, dann Leisten ausgeblendet, dann normal (auf dem Mac auch Control) |

## Esc

{{key:Esc}} geht bei jedem Drücken eine Stufe zurück:

1. Bricht ab, was das Werkzeug gerade tut (eine Linie, die gezeichnet wird, ein Drücken/Ziehen, ein Verschieben). Alles geht zurück.
2. Wechselt zu {{ui:Select}}.
3. Hebt die Auswahl auf.
4. Schließt die Gruppe, die Sie bearbeiten.

Außerdem stoppt es Szenen, die gerade laufen. Im Eingabefeld löscht {{key:Esc}} das Getippte und kehrt zur Ansicht zurück.

## Während ein Werkzeug arbeitet

| Taste | Funktion |
|---|---|
| Eine Ziffer oder eines von `. , - ' " [ < * /` | Beginnt die Eingabe im Eingabefeld |
| {{key:Enter}} | Übernimmt die Eingabe im Eingabefeld |
| {{key:Right}} | Sperrt auf die rote Achse (erneut drücken zum Entsperren) |
| {{key:Left}} | Sperrt auf die grüne Achse |
| {{key:Up}} | Sperrt auf die blaue Achse |
| {{key:Down}} | Sperrt parallel zur letzten Kante, über die Sie vor dem ersten Klick gefahren sind |
| {{key:Shift}} halten | Hält die Richtung, auf die Sie eingefangen sind, solange die Taste gehalten wird |
| {{key:Ctrl}}, {{key:Mod}} oder {{key:Alt}} (Verschieben) | Wechselt zwischen Verschieben und Kopieren |

Pfeiltastensperren funktionieren bei {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} und {{ui:Tape}} (beim Messen ab einem Punkt), nach dem ersten Klick. {{ui:Push/pull}} bewegt sich immer in Richtung der Fläche und hat keine Sperren. Bei {{ui:Rotate}} zeigen die Pfeiltasten nach dem ersten Klick die Meldung „Gesperrt“, ändern aber die Drehung nicht.

## Pfeiltasten zu anderen Zeiten

Wenn kein Werkzeug gerade etwas tut, bewegen die Pfeiltasten die Kamera:

| Taste | Funktion |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbit |
| {{key:Shift}} mit einer Pfeiltaste | Pan |

## Maus

| Aktion | Funktion |
|---|---|
| Klicken | Verwendet das aktuelle Werkzeug |
| Drücken, ziehen, loslassen | Wie zwei Klicks (bei Zeichenwerkzeugen); ein Rahmen zum Auswählen (bei {{ui:Select}}); löscht unterwegs (bei {{ui:Eraser}}) |
| Doppelklick | {{ui:Select}}: Fläche mit ihren Kanten, Kante mit ihren Flächen; öffnet eine Gruppe; leerer Raum schließt die Gruppe. {{ui:Push/pull}}: wiederholt die letzte Strecke |
| Dreifachklick | {{ui:Select}}: alles Zusammenhängende |
| {{key:Shift}} + Klick | {{ui:Select}}: zur Auswahl hinzufügen oder daraus entfernen |
| {{key:Mod}} + Klick | {{ui:Select}}: zur Auswahl hinzufügen |
| {{key:Shift}} + {{key:Mod}} + Klick | {{ui:Select}}: aus der Auswahl entfernen |
| Mittlere Maustaste ziehen | Orbit, mit jedem Werkzeug |
| {{key:Shift}} + mittlere Maustaste ziehen | Pan, mit jedem Werkzeug |
| Rechte Maustaste ziehen | Pan, mit jedem Werkzeug |
| Mausrad | Zoom zum Zeiger |

Es gibt kein Kontextmenü mit der rechten Maustaste.

## Trackpad

Was eine Zwei-Finger-Wischbewegung bewirkt, hängt von {{ui:Settings}} › {{ui:ModelCraft}} › Scrollen ab:

| Geste | Trackpad (oder abgeleitet) | Mausrad |
|---|---|---|
| Zwei-Finger-Wischen | Orbit | Zoom zum Zeiger |
| {{key:Shift}} + Zwei-Finger-Wischen | Pan | Zoom |
| Pinch | Zoom zum Zeiger | Zoom zum Zeiger |
| Zwei Finger drücken und ziehen (sekundärer Klick gehalten) | Pan | Pan |

Siehe [Orbit, Pan und Zoom](topic:orbit-pan-zoom#on-a-trackpad) und [ModelCraft-Einstellungen](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler-Tasten

Mit {{ui:Settings}} › {{ui:ModelCraft}} › Steuerung auf Modeler-Stil eingestellt:

| Taste | Funktion |
|---|---|
| {{key:W}} oder {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (extrudieren) |
| {{key:T}} | {{ui:Tape}} |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Die Auswahl sofort vom Zeiger aus verschieben |
| {{key:R}} | Die Auswahl um ihre Mitte drehen (blaue Achse) |
| {{key:S}} | Die Auswahl um ihre Mitte skalieren |
| {{key:X}} / {{key:Y}} / {{key:Z}} beim Verschieben oder Drehen | Rote / grüne / blaue Achse sperren (erneut zum Entsperren) |
| Klick oder {{key:Enter}} | Absetzen |
| {{key:Esc}} oder rechter Klick | Zurücklegen |
| {{key:Shift+D}} | Duplizieren und die Kopie verschieben |
| {{key:X}} oder {{key:Delete}} | Auswahl löschen |
| {{key:A}} / {{key:Alt+A}} | Alles auswählen / nichts auswählen |
| {{key:Tab}} | Die ausgewählte Gruppe oder Komponente öffnen; erneut zum Schließen |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Gruppe erstellen / Komponente erstellen |
| Ziffernblock {{key:1}} / {{key:3}} / {{key:7}} | Vorderansicht / Rechte Ansicht / Draufsicht ({{key:Mod}} für Rück-, Linke Ansicht bzw. Untersicht) |
| Ziffernblock {{key:5}} | Perspektive ein oder aus |
| Ziffernblock {{key:.}} | Auf die Auswahl zoomen |
| {{key:Home}} oder {{key:Shift+C}} | Zoom Grenzen |
| {{key:Shift+Tab}} | Fang ein oder aus |
| Mittlere Maustaste ziehen / mit {{key:Shift}} / mit {{key:Mod}} | Orbit / Pan / Zoom |
| {{key:Alt}} + ziehen / {{key:Alt+Shift}} + ziehen | Orbit / Pan (ohne mittlere Maustaste) |

Kopieren, Einfügen, Rückgängig, Speichern und Öffnen behalten die oben aufgeführten Tasten. Eingegebene Werte, das Eingabefeld und {{ui:Push/pull}} funktionieren in beiden Stilen gleich.

## Touchscreen

| Geste | Funktion |
|---|---|
| Tippen | Ein Klick mit dem aktuellen Werkzeug |
| Doppeltippen | Ein Doppelklick |
| Drücken, ziehen, abheben | Wie Drücken, Ziehen, Loslassen mit der Maus |
| Zwei Finger: zusammenziehen | Zoom |
| Zwei Finger: gemeinsam bewegen | Pan (Einstellungen › ModelCraft › Touchscreen kann es auf Orbit umstellen) |
| Drei Finger: gemeinsam bewegen | Orbit (Pan, wenn zwei Finger orbitieren) |
| Einen Finger ruhig halten | Beendet das Werkzeug wie {{key:Enter}}; ohne laufende Aktion, dann ziehen, um zu orbitieren |
| Ein zweiter Finger während einer Ein-Finger-Aktion | Bricht diese Aktion ab |
| Werkzeug {{ui:Orbit}}, dann einen Finger ziehen | Orbit |

Um auf dem Touchscreen einen Wert einzugeben, tippen Sie unten auf das Eingabefeld, geben den Wert ein und drücken die Enter-Taste (oder „Los“) der Tastatur.

## Wo Verschieben zu finden ist

Verschieben ist das Werkzeug {{ui:Move}}, Taste {{key:M}}: Wählen Sie aus, was verschoben werden soll, klicken Sie einen Basispunkt und dann einen zweiten Punkt, oder geben Sie eine Strecke ein. Siehe [Verschieben, Kopieren und Anordnungen erstellen](topic:move-copy).
