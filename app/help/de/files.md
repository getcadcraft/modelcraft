---
title: Öffnen, speichern, importieren und exportieren
summary: Die ModelCraft-Datei, was Sie importieren und exportieren können, wohin Dateien gehen und was offline und zwischen Browsern anders ist.
keywords: öffnen, speichern, importieren, exportieren, Datei, 3dm, skp, wiederherstellen, automatisch speichern, zuletzt verwendet, Desktop, in 3D öffnen, Übergabe, herunterladen, ModelCraft-Datei, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, Formate, offline, speichern unter
from: 3f09ab72
---

ModelCraft liest und schreibt Dateien auf Ihrem Computer. Nichts wird hochgeladen: Eine Datei, die Sie öffnen, wird im Browser gelesen, und eine Datei, die Sie speichern, ist ein Download. Siehe [Wohin Ihre Dateien gehen](common:your-files).

## Formate auf einen Blick

| Format | Öffnen | Import | Export | Wofür |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nein | {{ui:Speichern}} | Ihre Arbeitsdatei. Behält alles. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Speichern als}}, {{ui:Exportieren}} | Render- und Szenenzusammenstellungsprogramme. Das eigene USD von ModelCraft behält alles. Siehe [USD speichern, öffnen und exportieren](topic:usd). |
| SketchUp (`.skp`) | nein | ja | nein | Zum Importieren von Modellen aus SketchUp. Behält Gruppen, Komponenten, Farben, Texturen auf Flächen, Tags und weiche Kanten. Siehe [Ein SKP-Modell importieren](topic:import-sketchup-files). |
| Collada (`.dae`) | nein | ja | ja | Austausch von Modellen mit anderen 3D-Modellierern. Behält Gruppen, Komponenten und Farben. |
| OBJ (`.obj`) | nein | ja | ja | Render- und Visualisierungsprogramme. |
| glTF (`.glb`, `.gltf`) | nein | ja | nur `.glb` | Web-Betrachter, Spiele-Engines, AR. |
| STL (`.stl`) | nein | ja | ja | 3D-Druck (in Millimetern). |
| PLY (`.ply`) | nein | ja | ja | Netze mit Farben: Scans, Farbdruck. |
| FBX (`.fbx`) | nein | ja | nein | Modelle aus Animations- und Spielprogrammen (FBX 2011 und neuer). |
| Alembic (`.abc`) | nein | ja | nein | Geometrie-Caches, am ersten Bild. |
| STEP (`.step`, `.stp`) | nein | ja | nein | Bauteile von Teilemodellierern und Lieferanten, als geschlossene Netze in ihrer wahren Größe. Siehe [Dateiformate](topic:formats). |
| `.3dm` | nein | ja | nein | NURBS-Modelle: Polyflächen, Netze, Kurven, Blöcke und Layer, als Netze, Kanten, Komponenten und Tags. Siehe [Ein 3dm-Modell importieren](topic:import-3dm-files). |
| 3MF (`.3mf`) | nein | nein | ja | 3D-Druck, mit Farben (in Millimetern). Aus {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}}: siehe [Ein Modell für den 3D-Druck vorbereiten](topic:print-3d). |
| IFC (`.ifc`) | nein | nein | ja | BIM-Programme und BimCraft. |
| DWG (`.dwg`) | nein | ja | ja | Ein Lageplan oder Grundriss als Modellgrundlage; das Senden des Modells an ein CAD-Programm. |
| DXF (`.dxf`) | nein | ja | ja | Dasselbe, für jedes CAD-Programm. |

[Dateiformate im Detail](topic:formats) listet genau auf, was jedes Format behält und was es weglässt.

## Die ModelCraft-Datei

Eine `.modelcraft`-Datei behält das ganze Modell: Geometrie, Gruppen, Komponenten, Hilfslinien, Szenen, die Einheiten sowie die Kamera und den Stil, die Sie beim Speichern verwendet haben. Der Rückgängig-Verlauf wird nicht gespeichert.

### Ein Modell öffnen

1. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Öffnen}} oder drücken Sie {{key:Mod+O}}.
2. Hat das Modell auf dem Bildschirm nicht gespeicherte Änderungen, fragt ModelCraft: „Dieses Modell hat nicht gespeicherte Änderungen. Zuerst eine Kopie speichern?“ Wählen Sie {{ui:Kopie speichern}}, {{ui:Änderungen verwerfen}} oder {{ui:Abbrechen}}.
3. Wählen Sie die Datei `.modelcraft`.

Das Modell öffnet sich in den Einheiten, in denen es gespeichert wurde, mit der Kamera, mit der es gespeichert wurde. Sie können eine `.modelcraft`-Datei auch auf die 3D-Ansicht ziehen oder in der Liste der {{ui:Zuletzt verwendet}}-Dateien auf der Startkarte anklicken (Browser, die eine Datei erneut öffnen können, und die Desktop-App).

:::desktop
In der Desktop-App öffnet ein Doppelklick auf eine `.modelcraft`-Datei sie in ModelCraft; ebenso **Öffnen mit** bei einer Collada-, OBJ-, glTF-, DWG- oder DXF-Datei (sie wird in ein neues Modell importiert).
:::

### Ein Modell speichern

Klicken Sie auf {{ui:Speichern}} oder drücken Sie {{key:Mod+S}}. Der Browser lädt `<name>.modelcraft` herunter; der Name ist der Name der geöffneten Datei oder „Untitled“ für ein neues Modell.

:::desktop
In der Desktop-App schreibt {{ui:Speichern}} die geöffnete Datei an ihrem Ort. Ein neues Modell fragt, wo es gespeichert werden soll.
:::

- {{ui:Speichern als}} ({{key:Mod+Shift+S}}) speichert eine Kopie als `.modelcraft`-Datei oder als [USD](topic:usd); wo der Browser es kann, fragt er nach Name und Ort. Ansonsten benennen Sie die heruntergeladene Datei um: Das nächste Speichern nach dem Öffnen der umbenannten Datei verwendet den neuen Namen.
- Jedes Speichern ist ein neuer Download. Je nach Browser-Einstellungen landet er direkt im Downloads-Ordner oder fragt, wo er gespeichert werden soll. Ist dort schon eine Datei mit diesem Namen, hängen die meisten Browser eine Zahl an, etwa `Untitled (1).modelcraft`.

:::chromium
Um jedes Mal den Ordner zu wählen, öffnen Sie die Einstellungen des Browsers, suchen Sie nach „Downloads“ und aktivieren Sie „Vor dem Herunterladen jeder Datei nach dem Speicherort fragen“.
:::

:::firefox
Um jedes Mal den Ordner zu wählen, öffnen Sie **Einstellungen**, dann **Allgemein**, und wählen Sie unter „Downloads“ die Option „Immer nachfragen, wo Dateien gespeichert werden sollen“.
:::

:::safari
Um den Speicherort für Downloads zu ändern, öffnen Sie **Safari**, dann **Einstellungen**, dann **Allgemein**, und stellen Sie „Speicherort für Dateidownloads“ ein.
:::

### Ein neues Modell beginnen

Klicken Sie auf {{ui:Neu}}. Gibt es nicht gespeicherte Änderungen, fragt ModelCraft zuerst. Ein neues Modell beginnt leer, in der Einheit Ihrer Region (Fuß und Zoll in den USA, Millimeter sonst), ohne Szenen.

### Wenn der Browser schließt, bevor Sie speichern

ModelCraft behält eine Kopie nicht gespeicherter Arbeit in Ihrem Browser, einige Sekunden nach jeder Änderung. Die Kopie wird im Hintergrund geschrieben, sodass ein großes Modell Sie nicht aufhält. Schließen sich Tab oder Browser, bevor Sie speichern, fragt ModelCraft beim nächsten Öffnen: „Ihre Arbeit wiederherstellen?“ Wiederherstellen öffnet das Modell so, wie es war, aber noch nicht als Datei gespeichert: Speichern Sie es, um es zu behalten. Siehe [Ihre Arbeit wiederherstellen](common:recover).

### Aus CadCraft: In ModelCraft öffnen

Im Zeichenprogramm CadCraft übergibt **Ansicht**, dann **Mehr**, dann **In ModelCraft öffnen** die geöffnete Zeichnung in einem neuen Tab als DWG an ModelCraft. Sie kommt so an wie ein importiertes DWG: Linien auf dem Boden, in einer Gruppe, bereit zum Modellieren. Nichts wird hochgeladen; die Datei wird nur im eigenen Speicher Ihres Browsers weitergereicht.

## Importieren

Importieren fügt eine Datei dem geöffneten Modell hinzu; es ersetzt es nicht.

1. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Importieren}} oder ziehen Sie die Datei auf die 3D-Ansicht.
2. Wählen Sie eine SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- oder DXF-Datei.

   Die Datei kommt als **eine Gruppe** an, ausgewählt, und die Ansicht zoomt darauf. Die Statusleiste zeigt, was gekommen ist, und listet alles auf, was nicht importiert werden konnte, etwa „Nicht importiert: 2 Textur“.

3. Um direkt an seiner Geometrie zu arbeiten, doppelklicken Sie die Gruppe, um darin zu bearbeiten, oder klicken Sie auf {{ui:Zerlegen}}.

Einiges sollten Sie wissen:

- **Größe und Oben-Richtung:** Collada-Dateien nennen ihre Einheit und welche Achse oben ist; ModelCraft rechnet sie um. glTF ist immer in Metern. OBJ-Dateien haben keine Einheit: ModelCraft liest sie als Meter, mit Y oben. Kommt eine OBJ-Datei 1000-mal zu groß oder zu klein, verwenden Sie [Skalieren](topic:rotate-scale) mit einem Faktor wie `0.001` oder `1000`.
- **DWG und DXF** kommen als Linien (Kanten) auf dem Boden an, nicht als Flächen. Gibt die Zeichnung ihre Einheit nicht an, fragt ein Dialogfeld „Zeicheneinheiten“, was eine Zeicheneinheit ist. Siehe [Auf einem Lageplan modellieren](topic:site-plan).
- **Grenzen:** Dateien über 300 MB werden zum Importieren abgelehnt, über 200 MB zum Öffnen. Dateien mit mehr als 2 Millionen Eckpunkten oder Flächen werden als zu groß abgelehnt. Eine OBJ-Datei über 64 MB wird abgelehnt, bevor sie gelesen wird. Textdateien (Collada, OBJ, ASCII-STL, USD-Text) werden stückweise gelesen, etwa 4 MB auf einmal, sodass kein einzelner Textblock eine ganze Datei hält; eine 16-MB-OBJ-Datei benötigte beim Öffnen in unserem Test etwa 0.5 GB Speicher.

## Exportieren

1. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Exportieren}}.
2. Wählen Sie ein Format: {{ui:glTF binär (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL für den Druck (.stl, Millimeter)}}, {{ui:PLY mit Farben (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC für BimCraft (.ifc)}}, {{ui:DWG für CAD (.dwg, 2004)}} oder {{ui:DXF für CAD (.dxf, R12)}}.

Der Browser lädt die Datei herunter, benannt wie das Modell. Das gesamte Modell wird exportiert, nicht nur die Auswahl. glTF-, Collada- und OBJ-Dateien werden im Hintergrund geschrieben, sodass ModelCraft während des Exports eines großen Modells weiterarbeitet; der Download startet, sobald die Datei fertig ist. Ein leeres Modell wird nicht exportiert: „Das Modell ist leer: Zeichnen Sie zuerst etwas.“ Siehe [Ein Modell für andere Programme exportieren](topic:export-model).

## Online und offline

Alles in ModelCraft läuft auf Ihrem Computer; daher funktionieren Modellieren, Öffnen, Speichern, Importieren und Exportieren ohne Verbindung, sobald die App geladen ist.

Um ModelCraft ganz ohne Verbindung zu öffnen, speichern Sie es für die Offline-Nutzung, solange Sie online sind:

1. Klicken Sie oben in der App-Leiste auf {{ui:Für Offline speichern}}.
2. Die Schaltfläche zählt hoch („Speichern 40 von 212“), während sie speichert. ModelCraft speichert seine eigenen Dateien (darunter den DWG-Leser), diese Hilfe und die 3D-Bibliothek, daher kann es etwas dauern.
3. Zeigt die Schaltfläche {{ui:Offline bereit}}, öffnet sich ModelCraft unter derselben Adresse ohne Verbindung, und der DWG-Import funktioniert ebenfalls offline.

Klicken Sie später auf {{ui:Offline bereit}} für {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}}. Zeigt die Schaltfläche {{ui:Speichern nicht möglich}}, sind einige Dateien nicht heruntergeladen worden: Prüfen Sie die Verbindung und klicken Sie erneut darauf. {{ui:Offline nicht verfügbar}} bedeutet, dass dieses Browserfenster keine Kopie behalten kann (private Fenster und manche verwalteten Computer). Siehe [Offline arbeiten](common:offline).

Cloud-Speichern ist noch nicht umgesetzt. Jedes Modell liegt dort, wo Sie es speichern.

:::offline
Sie sind offline. Sie können weiter modellieren und speichern. Solange die App-Leiste nicht {{ui:Offline bereit}} anzeigt, laden Sie diesen Tab nicht neu, bevor Sie wieder online sind.
:::

## Desktop-App

:::desktop
Sie verwenden ModelCraft in CadCraft Studio, der Desktop-App mit allen acht Apps. Dateien werden dort geöffnet und gespeichert, wo Sie es wählen.
:::

:::web
ModelCraft läuft im Browser auf Mac, Windows und Linux sowie in CadCraft Studio, der Desktop-App mit allen acht Apps in einer Installation, von getcadcraft.com/download.
:::
