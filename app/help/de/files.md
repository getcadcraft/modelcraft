---
title: Öffnen, Speichern, Importieren und Exportieren
summary: Die ModelCraft-Datei, was Sie hinein- und hinausbringen können, wohin Dateien gehen und was sich offline und zwischen Browsern ändert.
from: 0b4896d1
keywords: öffnen, speichern, importieren, exportieren, Datei, 3dm, skp, wiederherstellen, automatisch speichern, zuletzt verwendet, Desktop, in 3D öffnen, Übergabe, Download, ModelCraft-Datei, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, Formate, offline, speichern unter
---

ModelCraft liest und schreibt Dateien auf Ihrem Computer. Nichts wird hochgeladen: Eine Datei, die Sie öffnen, wird in Ihrem Browser gelesen, und eine Datei, die Sie speichern, ist ein Download. Siehe [Wohin Ihre Dateien gehen](common:your-files).

## Formate im Überblick

| Format | Öffnen | Importieren | Exportieren | Wofür es dient |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nein | {{ui:Speichern}} | Ihre Arbeitsdatei. Behält alles. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Speichern unter}}, {{ui:Exportieren}} | Rendering- und Szenenaufbau-Programme. Das eigene USD von ModelCraft behält alles. Siehe [USD speichern, öffnen und exportieren](topic:usd). |
| SketchUp (`.skp`) | nein | ja | nein | Modelle aus SketchUp übernehmen. Behält Gruppen, Komponenten, Farben, Texturen auf Flächen, Tags und weiche Kanten. Siehe [Ein SKP-Modell übernehmen](topic:import-sketchup-files). |
| Collada (`.dae`) | nein | ja | ja | Modelle mit anderen 3D-Modellierern austauschen. Behält Gruppen, Komponenten und Farben. |
| OBJ (`.obj`) | nein | ja | ja | Rendering- und Visualisierungsprogramme. |
| glTF (`.glb`, `.gltf`) | nein | ja | nur `.glb` | Web-Viewer, Spiele-Engines, AR. |
| STL (`.stl`) | nein | ja | ja | 3D-Druck (in Millimetern). |
| PLY (`.ply`) | nein | ja | ja | Netze mit Farben: Scans, Farbdruck. |
| FBX (`.fbx`) | nein | ja | nein | Modelle aus Animations- und Spieleprogrammen (FBX 2011 und neuer). |
| Alembic (`.abc`) | nein | ja | nein | Geometrie-Caches, mit ihrem ersten Sample. |
| STEP (`.step`, `.stp`) | nein | ja | nein | Bauteile aus Bauteilmodellierern und von Lieferanten, als geschlossene Netze in ihrer wahren Größe. Siehe [Dateiformate](topic:formats). |
| `.3dm` | nein | ja | nein | NURBS-Modelle: Polyflächen, Netze, Kurven, Blöcke und Layer, als Netze, Kanten, Komponenten und Tags. Siehe [Ein .3dm-Modell übernehmen](topic:import-3dm-files). |
| 3MF (`.3mf`) | nein | nein | ja | 3D-Druck mit Farben (in Millimetern). Über {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}}: siehe [Ein Modell für den 3D-Druck vorbereiten](topic:print-3d). |
| IFC (`.ifc`) | nein | nein | ja | BIM-Programme und BimCraft. |
| DWG (`.dwg`) | nein | ja | ja | Ein Lageplan oder Grundriss, auf dem Sie modellieren; das Modell an ein CAD-Programm senden. |
| DXF (`.dxf`) | nein | ja | ja | Dasselbe, für jedes CAD-Programm. |

[Dateiformate im Detail](topic:formats) listet genau auf, was jedes Format behält und weglässt.

## Die ModelCraft-Datei

Eine `.modelcraft`-Datei behält das ganze Modell: Geometrie, Gruppen, Komponenten, Hilfslinien, Szenen, die Einheiten sowie die Kamera und den Stil, die Sie beim Speichern verwendet haben. Den Rückgängig-Verlauf behält sie nicht.

### Ein Modell öffnen

1. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Öffnen}} oder drücken Sie {{key:Mod+O}}.
2. Hat das Modell auf dem Bildschirm nicht gespeicherte Änderungen, fragt ModelCraft: „Dieses Modell hat Änderungen, die nicht gespeichert sind. Zuerst eine Kopie speichern?“ Wählen Sie {{ui:Kopie speichern}}, {{ui:Änderungen verwerfen}} oder {{ui:Abbrechen}}.
3. Wählen Sie die `.modelcraft`-Datei.

Das Modell öffnet sich in den Einheiten, in denen es gespeichert wurde, und mit der Kamera, mit der es gespeichert wurde. Sie können auch eine `.modelcraft`-Datei auf die 3D-Ansicht ziehen oder auf der Startkarte in der Liste der zuletzt verwendeten Dateien eine anklicken (Browser, die eine Datei erneut öffnen können, und die Desktop-Anwendung).

:::desktop
In der Desktop-Anwendung öffnet ein Doppelklick auf eine `.modelcraft`-Datei sie in ModelCraft, ebenso **Öffnen mit** bei einer Collada-, OBJ-, glTF-, DWG- oder DXF-Datei (sie wird in ein neues Modell importiert).
:::

### Ein Modell speichern

Klicken Sie auf {{ui:Speichern}} oder drücken Sie {{key:Mod+S}}. Der Browser lädt `<Name>.modelcraft` herunter, wobei der Name der der geöffneten Datei ist, oder „Untitled“ bei einem neuen Modell.

:::desktop
In der Desktop-Anwendung schreibt {{ui:Speichern}} die geöffnete Datei an Ort und Stelle. Bei einem neuen Modell wird nach dem Speicherort gefragt.
:::

- {{ui:Speichern unter}} ({{key:Mod+Shift+S}}) speichert eine Kopie als `.modelcraft`-Datei oder als [USD](topic:usd); wo der Browser es kann, fragt er nach Namen und Ort. Andernfalls benennen Sie die heruntergeladene Datei um: Das nächste Speichern, nachdem Sie die umbenannte Datei geöffnet haben, verwendet den neuen Namen.
- Jedes Speichern ist ein neuer Download. Je nach den Einstellungen des Browsers landet er direkt in Ihrem Download-Ordner oder fragt nach dem Speicherort. Existiert dort bereits eine Datei mit diesem Namen, hängen die meisten Browser eine Zahl an, etwa `Untitled (1).modelcraft`.

:::chromium
Um jedes Mal den Ordner zu wählen, öffnen Sie die Einstellungen des Browsers, suchen Sie nach „Downloads“ und aktivieren Sie „Vor dem Herunterladen immer nach dem Speicherort fragen“.
:::

:::firefox
Um jedes Mal den Ordner zu wählen, öffnen Sie **Einstellungen**, dann **Allgemein**, und wählen Sie unter „Downloads“ die Option „Immer nachfragen, wo Dateien gespeichert werden sollen“.
:::

:::safari
Um zu ändern, wohin Downloads gehen, öffnen Sie **Safari**, dann **Einstellungen**, dann **Allgemein**, und stellen Sie „Speicherort für geladene Dateien“ ein.
:::

### Ein neues Modell beginnen

Klicken Sie auf {{ui:Neu}}. Bei nicht gespeicherten Änderungen fragt ModelCraft zuerst. Ein neues Modell beginnt leer, in der Einheit Ihrer Region (Fuß und Zoll in den Vereinigten Staaten, sonst Millimeter) und ohne Szenen.

### Wenn der Browser sich vor dem Speichern schließt

ModelCraft hält einige Sekunden nach jeder Änderung eine Kopie der nicht gespeicherten Arbeit in Ihrem Browser vor. Schließt sich der Tab oder der Browser vor dem Speichern, fragt ModelCraft beim nächsten Öffnen: „Ihre Arbeit wiederherstellen?“ Beim Wiederherstellen öffnet sich das Modell so, wie es war, noch nicht in einer Datei gespeichert: Speichern Sie es, um es zu behalten. Siehe [Ihre Arbeit wiederherstellen](common:recover).

### Aus CadCraft: In ModelCraft öffnen

In der Zeichen-Anwendung CadCraft übergibt **Ansicht**, dann **Mehr**, dann **In ModelCraft öffnen** die geöffnete Zeichnung in einem neuen Tab als DWG an ModelCraft. Sie kommt an wie ein importiertes DWG: Linien auf dem Boden, in einer Gruppe, bereit zum Daraufmodellieren. Nichts wird hochgeladen; die Datei läuft über den eigenen Speicher Ihres Browsers.

## Importieren

Beim Importieren wird eine Datei zum geöffneten Modell hinzugefügt; es ersetzt es nicht.

1. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Importieren}} oder ziehen Sie die Datei auf die 3D-Ansicht.
2. Wählen Sie eine SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- oder DXF-Datei.

   Die Datei kommt als **eine Gruppe** an, ausgewählt, und die Ansicht zoomt auf sie. Die Statusleiste nennt, was hereingekommen ist, und listet alles auf, was nicht importiert werden konnte, etwa „Nicht importiert: 2 Textur“.

3. Um direkt an der Geometrie zu arbeiten, doppelklicken Sie auf die Gruppe, um darin zu bearbeiten, oder klicken Sie auf {{ui:Zerlegen}}.

Einiges ist wissenswert:

- **Größe und Aufwärtsrichtung:** Collada-Dateien nennen ihre Einheit und welche Achse oben ist, und ModelCraft rechnet um. glTF ist immer in Metern. OBJ-Dateien tragen keine Einheit: ModelCraft liest sie als Meter, mit Y nach oben. Kommt ein OBJ 1000-mal zu groß oder zu klein an, verwenden Sie [Skalieren](topic:rotate-scale) mit einem Faktor wie `0.001` oder `1000`.
- **DWG und DXF** kommen als Linien (Kanten) auf dem Boden an, nicht als Flächen. Nennt die Zeichnung ihre Einheit nicht, fragt ein Dialogfeld mit dem Titel „Zeichnungseinheiten“, was eine Zeichnungseinheit ist. Siehe [Auf einem Lageplan modellieren](topic:site-plan).
- **Grenzen:** Dateien über 300 MB werden beim Import abgelehnt, über 200 MB beim Öffnen. Dateien mit mehr als 2 Millionen Eckpunkten oder Flächen werden als zu groß abgelehnt.

## Exportieren

1. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Exportieren}}.
2. Wählen Sie ein Format: {{ui:glTF binär (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL für den Druck (.stl, Millimeter)}}, {{ui:PLY mit Farben (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC für BimCraft (.ifc)}}, {{ui:DWG für CAD (.dwg, 2004)}} oder {{ui:DXF für CAD (.dxf, R12)}}.

Der Browser lädt die Datei herunter, benannt wie das Modell. Das ganze Modell wird exportiert, nicht nur die Auswahl. Ein leeres Modell wird nicht exportiert: „Das Modell ist leer: Zeichnen Sie zuerst etwas.“ Siehe [Ein Modell für andere Programme exportieren](topic:export-model).

## Online und offline

Alles in ModelCraft läuft auf Ihrem Computer, sodass Modellieren, Öffnen, Speichern, Importieren und Exportieren nach dem Laden der Anwendung ohne Verbindung funktionieren.

Um ModelCraft ganz ohne Verbindung zu öffnen, speichern Sie es für die Offline-Nutzung, solange Sie online sind:

1. Klicken Sie oben in der Anwendungsleiste auf {{ui:Für Offline speichern}}.
2. Die Schaltfläche zählt hoch („Speichere 40 von 212“), während sie speichert. ModelCraft speichert seine eigenen Dateien (darunter seinen DWG-Leser), diese Hilfe und die 3D-Bibliothek, das kann also eine Weile dauern.
3. Steht auf der Schaltfläche {{ui:Offline bereit}}, öffnet sich ModelCraft unter derselben Adresse ohne Verbindung, und auch der DWG-Import funktioniert offline.

Klicken Sie später auf {{ui:Offline bereit}} für {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}}. Steht auf der Schaltfläche {{ui:Speichern nicht möglich}}, wurden einige Dateien nicht heruntergeladen: Prüfen Sie die Verbindung und klicken Sie darauf, um es erneut zu versuchen. {{ui:Offline nicht verfügbar}} bedeutet, dass dieses Browserfenster keine Kopie vorhalten kann (private Fenster und einige verwaltete Computer). Siehe [Offline arbeiten](common:offline).

Cloud-Speicherung ist noch nicht vorhanden. Jedes Modell liegt dort, wo Sie es speichern.

:::offline
Sie sind offline. Sie können weiter modellieren und speichern. Solange die Anwendungsleiste nicht {{ui:Offline bereit}} zeigt, laden Sie diesen Tab nicht neu, bevor Sie wieder online sind.
:::

## Desktop-Anwendung

:::desktop
Sie verwenden ModelCraft in CadCraft Studio, der Desktop-Anwendung mit allen acht Anwendungen. Dateien öffnen und speichern sich dort, wo Sie es wählen.
:::

:::web
ModelCraft läuft im Browser auf Mac, Windows und Linux sowie in CadCraft Studio, der Desktop-Anwendung mit allen acht Anwendungen in einer Installation, von getcadcraft.com/download.
:::
