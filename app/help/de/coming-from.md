---
title: Umstieg von anderen Modellierprogrammen
summary: Wie die Gewohnheiten aus dem Push/Pull-Modellieren Taste für Taste zu ModelCraft passen und welche Unterschiede Menschen überraschen.
keywords: Umstieg, wechseln, migrieren, vertraut, Unterschiede, Push-Pull-Modellierer, SKP, Tastenkürzel, Gewohnheiten, vergleichen, Messfeld, Gliederung, Objektinfo
from: 74ffd4ac
---

Wenn Sie in SketchUp modelliert haben, wird Ihnen ModelCraft vertraut vorkommen: dieselbe Idee von Flächen und Drücken/Ziehen, dieselben Werkzeugbuchstaben, ein Wertfeld, in das Sie tippen, ohne zu klicken, Ableitung mit roten, grünen und blauen Achsen, Gruppen, Komponenten, eine Gliederung, Objektinfo und Szenen. Diese Seite zeigt, was sich direkt übernehmen lässt und, wichtiger, was nicht.

## Gewohnheiten, die übernommen werden

| Was Sie gewohnt sind | In ModelCraft |
|---|---|
| Space für Wählen, L für Linie, R für Rechteck, C für Kreis | Dasselbe: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| P für Drücken/Ziehen, M für Verschieben, Q für Drehen, S für Skalieren, E für Radierer, T für Maßband | Dasselbe: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| O für Orbit, H für Pan, Z für Zoom, Shift+Z für Zoom Grenzen | Dasselbe: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| G für eine Komponente | Dasselbe: {{key:G}}. {{key:Shift+G}} erstellt eine Gruppe |
| In das Messfeld tippen, ohne es anzuklicken | Dasselbe, im Wertfeld unten. {{key:Enter}} drücken |
| `4m,3m` für ein Rechteck, `12s` für Seiten eingeben | Dasselbe |
| `3x` oder `/3` nach einer Kopie mit Verschieben eingeben | Dasselbe; `*3` funktioniert auch |
| `[x,y,z]` oder `<dx,dy,dz>` für einen Punkt oder Versatz eingeben | Dasselbe |
| Eine nackte Zahl in einem Modell in Architekturzoll eingeben und Zoll erhalten | Dasselbe |
| Mitteltaste ziehen zum Orbit, Shift+Mitteltaste ziehen zum Schwenken, Rad zum Zoom am Zeiger | Dasselbe |
| Doppelklick mit Drücken/Ziehen, um den Abstand zu wiederholen | Dasselbe |
| Pfeiltasten zum Einrasten auf Rot, Grün, Blau und parallel | Dasselbe: {{key:Right}} Rot, {{key:Left}} Grün, {{key:Up}} Blau, {{key:Down}} parallel |
| Shift halten, um eine Ableitung zu sperren | Dasselbe |
| Ctrl (auf dem Mac Option), um beim Verschieben zu kopieren | {{key:Ctrl}}, {{key:Mod}} oder {{key:Alt}}, auf jedem Computer |
| Shift zum Umschalten, Ctrl zum Hinzufügen, Shift+Ctrl zum Entfernen aus der Auswahl | Dieselben Tasten; auf dem Mac {{key:Mod}} an den Stellen, wo Ctrl steht |
| Fenster von links nach rechts, Kreuzen von rechts nach links | Dasselbe |
| Ein Bemaßungswerkzeug, um Längen zu beschriften | {{key:D}}, und mehr: Geben Sie in eine Bemaßung eine neue Länge ein, und das Modell passt sich an. Siehe [Bemaßen und Größe ändern](topic:dimensions) |
| Doppelklick auf eine Fläche für Fläche plus Kanten; Dreifachklick für alle verbundenen | Dasselbe |
| Doppelklick auf eine Gruppe, um sie zu bearbeiten; Esc zum Schließen | Dasselbe |
| Eine Linie über eine Fläche ziehen, um sie zu teilen; eine Kante zwischen koplanaren Flächen löschen, um sie zu heilen | Dasselbe |
| Ein Fensterrechteck durch eine Wand drücken, um sie zu schneiden | Dasselbe |
| Rückseiten in Blaugrau; Flächen umkehren | Dieselbe Farbe; {{ui:Fläche umkehren}} in {{ui:Objektinfo}} |
| Szenen als Registerkarten über der Ansicht, Page Up und Page Down | Dasselbe, mit {{ui:Wiedergabe}} im Bereich {{ui:Szenen}} |
| Schatten aus Datum, Uhrzeit, Breiten- und Längengrad, mit Norden in Grün | Dasselbe, im Bereich {{ui:Stil}} |

## Unterschiede, die Sie überraschen

### Speichern ist ein Download

Es gibt kein Speichern, das die geöffnete Datei überschreibt, keinen Dialog „Speichern unter“ mit Namensfeld, kein automatisches Speichern und keine Sicherungsdatei. {{ui:Speichern}} ({{key:Mod+S}}) lädt jedes Mal eine neue `.modelcraft`-Datei herunter, meist in Ihren Downloadordner. Speichern Sie oft, und benennen oder verschieben Sie die Dateien selbst. Siehe [Öffnen, Speichern, Importieren und Exportieren](topic:files).

### Importiert .skp-Dateien, speichert sie aber nicht

{{ui:Importieren}} liest SketchUp-Dateien mit dem eigenen Leser von ModelCraft, direkt im Browser: Gruppen, Komponenten, Farben, Texturen auf Flächen, Tags und weiche Kanten kommen mit. Siehe [Dateiformate im Detail](topic:formats#skp-files). ModelCraft kann `.skp` nicht speichern. Um zurückzuwechseln, exportieren Sie aus ModelCraft als Collada und importieren Sie es in SketchUp.

### Kein Kontextmenü per Rechtsklick

Rechts ziehen schwenkt die Ansicht; ein Rechtsklick tut nichts. Befehle, die Sie im Kontextmenü suchen würden, finden Sie in {{ui:Objektinfo}} ({{ui:Fläche umkehren}}, {{ui:Bearbeiten}}, {{ui:Zerlegen}}, {{ui:Eindeutig machen}}, {{ui:Komponente erstellen}}) und in der Gruppe {{ui:Organisieren}} der Symbolleiste.

### Einheiten stehen in der Statusleiste

Es gibt keine Modellinfo und keine Vorlagenauswahl. Die Einheitenauswahl steht unten rechts. Ein neues Modell beginnt in Fuß und Zoll in den USA und sonst in Millimetern, je nach Spracheinstellung Ihres Browsers. Dezimalstellen werden immer mit einem Punkt geschrieben: `2.5m`, nie `2,5m`, weil das Komma immer Werte trennt.

### Der Farbeimer hat eigene Materialien

{{ui:Farbeimer}} ({{key:B}}) malt Volltöne und die Materialien im Bereich {{ui:Materialien}}: Ziegel, Verkleidung, Dacheindeckung, Holz, Stein und mehr, von ModelCraft gezeichnet. Sie können noch kein eigenes Bild als Material laden; Texturen aus importierten Dateien bleiben erhalten. Siehe [Mit Farben und Materialien malen](topic:paint).

### Skalieren ist gleichmäßig, ohne Griffe

Skalieren zeigt keinen Kasten mit Griffen. Klicken Sie den Punkt an, der stehen bleibt, einen Bezugspunkt, dann die neue Größe oder einen eingetippten Faktor. Es skaliert immer gleichmäßig in alle Richtungen. Um in eine Richtung zu strecken, drücken/ziehen oder verschieben Sie eine Fläche, oder tragen Sie die Breite, Tiefe oder Höhe einer Gruppe in {{ui:Objektinfo}} neu ein, oder [ändern Sie die Größe mit einer Bemaßung](topic:dimensions).

### Drehen wählt seine Ebene nach dem Klickpunkt

Es gibt kein Winkelmesser, das beim Überfahren mit den Pfeiltasten an Flächen haftet, um die Ebene zu wählen. Klicken Sie auf die Mitte einer Fläche, um in deren Ebene zu drehen, oder auf den Boden, um um die Senkrechte zu drehen. Die Pfeiltasten schwenken die Ansicht vor dem ersten Klick.

### Ableitung aus überfahrenen Punkten

ModelCraft rastet auf Achsrichtungen von **Ihrem Startpunkt** ein und auf Punkte, Kanten und Flächen unter dem Zeiger. Es verfolgt keine Richtung von einem Punkt, über den Sie nur gefahren sind (die gepunktete Ableitung „von Punkt“). Um auf eine entfernte Ecke auszurichten, sperren Sie die Achse mit einer Pfeiltaste und fahren Sie über diese Ecke: Der gesperrte Punkt gleitet, bis er mit ihr fluchtet. Oder setzen Sie eine [Hilfslinie](topic:guides-measure).

### Parallel nutzt die Kante, über die Sie vorher gefahren sind

Die Ableitung für parallel und senkrecht nutzt die letzte Kante, die der Zeiger **vor dem ersten Klick** überquert hat, nicht Kanten, über die Sie beim Zeichnen fahren. Siehe [Ableitung und Fang](topic:inference#parallel-and-perpendicular).

### Kopien einer Gruppe sind verknüpft

Eine Gruppe mit {{ui:Verschieben}} zu kopieren erzeugt eine zweite Platzierung derselben Gruppe. Das Bearbeiten einer davon ändert daher beide, wie bei Komponenten. SketchUp macht Gruppen unabhängig. Siehe [Fehlerbehebung](topic:troubleshooting#editing-one-group-changed-another).

### Space schwenkt nicht

{{key:Space}} wählt {{ui:Wählen}}, wie in SketchUp. In manchen anderen Web-Apps schwenkt das Halten von Space; hier nicht. Stattdessen schwenkt Rechts-Ziehen.

### Zwei-Finger-Scrollen zoomt

Auf einem Trackpad stellen Sie unter {{ui:Einstellungen}} › {{ui:ModelCraft}} › Scrollen auf Trackpad ein: Zwei Finger orbitieren, {{key:Shift}} und zwei Finger schwenken, ein Pinch zoomt. Siehe [Orbit, Schwenken und Zoom](topic:orbit-pan-zoom#on-a-trackpad).

Wenn Ihre Hände die Tasten von Blender statt die von SketchUp kennen, wählen Sie den Menüstil {{ui:Modellierer}}: {{key:G}}, {{key:R}} und {{key:S}} wirken gleichzeitig auf die Auswahl, {{key:E}} extrudiert (Drücken/Ziehen), {{key:Shift+D}} dupliziert, und eine Menüleiste oben (Datei, Bearbeiten, Ansicht, Auswahl, Hinzufügen, Objekt, Netz) ersetzt die Symbolleiste. Aus SketchUp kommend gibt Ihnen der Stil {{ui:Drücken/Ziehen}} eine eigene Menüleiste über denselben Werkzeugbuchstaben. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).

### Körper, die ineinander gedrückt werden, schneiden nicht

Drücken/Ziehen schneidet durch die Fläche dahinter im selben Objekt, aber zwei getrennte Körper, die ineinander gedrückt werden, schneiden sich nicht. Es gibt kein Intersect Faces und keine Solid Tools.

### Was fehlt

Freihand, Stutzen, Teilen und Äußere Hülle, eigene Bildmaterialien, Erweiterungen und ein Layoutwerkzeug für Blätter sind in dieser Version nicht enthalten. [Noch nicht umgesetzt](topic:not-built-yet) listet auf, was Sie stattdessen tun können.

## Tastenkürzel, die der Browser behält

ModelCraft läuft in einem Browser, daher gehören ein paar Tastenkürzel dem Browser, nicht der App. {{key:Mod+N}} öffnet ein Browserfenster (verwenden Sie {{ui:Neu}}), und {{key:Mod+W}} schließt den Tab. Bei nicht gespeicherten Änderungen fragt der Browser vor dem Schließen. Siehe [Tasten, Mäuse und Trackpads](common:keys#shortcuts-the-browser-keeps).
