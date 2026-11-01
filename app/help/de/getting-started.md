---
title: Erste Schritte mit ModelCraft
summary: Wofür ModelCraft gedacht ist, wie Sie es öffnen und wie Sie Ihren ersten Quader vom Rechteck bis zum gespeicherten Modell erstellen.
from: d47ad719
keywords: Start, erstes Modell, beginnen, Tutorial, Einführung, Quader, Massenstudie, 3D, Drücken/Ziehen, Schnellstart, geführt, Anleitung, Einsteiger, neu im 3D
---

ModelCraft ist ein 3D-Modellierer für den frühen Entwurf: Massenstudien, Raumaufteilungen, schnelle Gebäudeformen und ihr Schattenwurf. Sie zeichnen flache Formen, ziehen sie zu Körpern hoch und arbeiten weiter daran, indem Sie auf ihren Flächen zeichnen. Es läuft in Ihrem Webbrowser, und Ihre Modelle bleiben auf Ihrem Computer.

Wenn Sie SketchUp kennen, gilt das meiste davon weiter: dieselben Werkzeugbuchstaben, Drücken/Ziehen, ein Wertefeld für exakte Maße, Gruppen und Komponenten. [Wechsel von anderen Modellierern](topic:coming-from) listet auf, was anders ist.

## ModelCraft öffnen

1. Öffnen Sie ModelCraft in einer aktuellen Version von Chrome, Edge, Firefox oder Safari. Siehe [Browser und Computer](common:browsers).
2. Warten Sie, bis die 3D-Ansicht erscheint: ein heller (oder dunkler) Bereich in der Mitte mit einer Karte namens „Modellieren beginnen“.

Der Bildschirm hat oben eine Symbolleiste, links die {{ui:Gliederung}} und die {{ui:Komponenten}}, in der Mitte die 3D-Ansicht, rechts {{ui:Objektinfo}}, {{ui:Stil}} und {{ui:Szenen}} sowie unten eine Statusleiste mit dem Wertefeld und den Einheiten. [Der ModelCraft-Bildschirm](topic:workspace) erklärt jeden Teil.

:::note
ModelCraft benötigt WebGL, die 3D-Zeichenfunktion Ihres Browsers. Bleibt die Bildschirmmitte leer und reagieren die Werkzeuge nicht, siehe [Fehlerbehebung](topic:troubleshooting#the-3d-view-is-blank).
:::

## Zuerst die Einheiten prüfen

Schauen Sie in die untere rechte Ecke. Die Einheitenauswahl zeigt, in was Längen gemessen werden.

- Ein neues Modell beginnt in **Fuß und Zoll**, wenn Ihr Browser auf die Vereinigten Staaten eingestellt ist (auch Liberia und Myanmar), und sonst in **Millimetern**.
- Zum Ändern wählen Sie in der Auswahl eine andere Einheit: {{ui:ft und in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} oder {{ui:mm}}. Das Modell selbst ändert seine Größe nicht; geändert wird nur, wie Längen angezeigt und wie bloße Zahlen gelesen werden.

Eine Zahl ohne Einheit verwendet die Einheit des Modells. In einem Modell in Fuß und Zoll ist eine bloße Zahl **Zoll**, also bedeutet `120` 10 Fuß.

## Das erste Modell von ModelCraft führen lassen

Neu im 3D? Klicken Sie auf der Karte {{ui:Modellieren beginnen}} auf {{ui:Geführtes erstes Modell}} (es steht auch unter {{ui:Ansichten}}). Eine kleine Karte führt Sie in vier Schritten von einem flachen Rechteck bis zu einem Modell, das für einen 3D-Drucker bereit ist:

1. Ein Rechteck auf den Boden zeichnen.
2. Es zu einem Quader hochziehen.
3. Den Quader zu einem Objekt machen (einer Gruppe).
4. Ihn auf 3D-Druck prüfen und dann eine 3MF- oder STL-Datei herunterladen.

Die Karte beobachtet das Modell, nicht die Schaltflächen: Sie geht weiter, wenn der Schritt erledigt ist, egal wie Sie ihn ausgeführt haben, und geht einen Schritt zurück, wenn Sie rückgängig machen. {{ui:Werkzeug wählen}} wählt das Werkzeug für Sie. Schließen Sie sie jederzeit mit dem {{ui:×}}.

## Den ersten Quader zeichnen

1. Drücken Sie {{key:R}} für das Werkzeug {{ui:Rechteck}} oder klicken Sie in der Gruppe {{ui:Zeichnen}} der Symbolleiste auf {{ui:Rechteck}}.
2. Klicken Sie einmal auf den Boden nahe der Mitte der Ansicht. Das ist die erste Ecke.
3. Bewegen Sie den Zeiger weg. Ein Rechteck folgt ihm, und das Wertefeld unten (beschriftet mit {{ui:Maße}}) zeigt seine Größe.
4. Geben Sie die Größe ein und drücken Sie {{key:Enter}}: zum Beispiel `4m,3m` oder `16',12'` in Fuß und Zoll. Sie müssen nicht zuerst in das Wertefeld klicken; eine eingegebene Zahl landet automatisch dort.

   Sie erhalten ein flaches Rechteck auf dem Boden. Es ist eine **Fläche**: eine Oberfläche mit Kanten ringsum.

5. Drücken Sie {{key:P}} für {{ui:Drücken/Ziehen}}.
6. Klicken Sie auf das Rechteck, bewegen Sie den Zeiger nach oben und klicken Sie erneut. Oder klicken Sie auf das Rechteck, geben Sie eine Höhe wie `3m` oder `10'` ein und drücken Sie {{key:Enter}}.

   Das Rechteck wird zu einem Quader mit Oberseite, Unterseite und vier Seiten.

7. Drücken Sie {{key:Space}}, um zu {{ui:Wählen}} zurückzukehren, und klicken Sie dann auf die Oberseite des Quaders. {{ui:Objektinfo}} rechts zeigt ihre Fläche.

:::tip
Statt zweimal zu klicken, können Sie auch ziehen: auf der ersten Ecke drücken, ziehen und an der zweiten Ecke loslassen. Beides funktioniert bei jedem Zeichenwerkzeug.
:::

## Sich umsehen

- **Orbit:** mit der mittleren Maustaste (dem Rad) ziehen oder {{key:O}} drücken und mit der linken Taste ziehen.
- **Pan:** mit der rechten Taste ziehen oder mit der mittleren Taste bei gehaltener {{key:Shift}}-Taste.
- **Zoom:** das Rad drehen. Es zoomt auf das, was unter dem Zeiger liegt.
- **Alles sehen:** {{key:Shift+Z}} drücken oder auf {{ui:Grenzen}} klicken.

Auf einem Trackpad oder Touchscreen gelten andere Gesten. Siehe [Orbit, Pan und Zoom](topic:orbit-pan-zoom).

## Rückgängig

Drücken Sie {{key:Mod+Z}} zum Rückgängigmachen und {{key:Mod+Y}} zum Wiederholen, oder verwenden Sie {{ui:Rückgängig}} und {{ui:Wiederholen}} in der Symbolleiste. ModelCraft merkt sich die letzten 200 Schritte, solange das Modell geöffnet ist. Der Verlauf wird nicht in der Datei gespeichert.

## Modell speichern

1. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Speichern}} oder drücken Sie {{key:Mod+S}}.
2. Der Browser lädt eine nach Ihrem Modell benannte Datei herunter, etwa `Untitled.modelcraft`. Die Statusleiste meldet, wohin sie gegangen ist: „Untitled.modelcraft in Ihren Downloads gespeichert.“

**Speichern ist ein Download.** Jedes Speichern erzeugt eine neue Kopie in Ihrem Download-Ordner; die geöffnete Datei wird nicht überschrieben. Für einen aufgeräumten Projektordner verschieben oder benennen Sie die Datei selbst dort um. [Öffnen, Speichern, Importieren und Exportieren](topic:files) erklärt, warum das so ist und was Sie sonst tun können.

:::warning
ModelCraft speichert nicht von selbst. Schließen Sie den Tab mit nicht gespeicherten Änderungen, fragt der Browser vorher nach („Seite verlassen?“). Wählen Sie, zu bleiben, und speichern Sie dann.
:::

## Hilfe erhalten

Drücken Sie {{key:F1}} oder klicken Sie in der Anwendungsleiste auf {{ui:Hilfe}}, um diese Hilfe neben dem Modell zu öffnen. Sie funktioniert ohne Verbindung. Drücken Sie erneut {{key:F1}} oder in der Hilfe {{key:Esc}}, um sie zu schließen. Siehe [Diese Hilfe verwenden](common:help).

## Wie es weitergeht

- [Flächen mit Linien, Rechtecken und Kreisen zeichnen](topic:draw-faces)
- [Flächen zu Körpern drücken und ziehen](topic:push-pull)
- [Exakte Maße im Wertefeld eingeben](topic:value-box)
- [Alle Tasten und Mausaktionen](topic:keyboard)
