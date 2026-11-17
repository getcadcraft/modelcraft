---
title: Die Live-Ansicht
summary: Ein Fenster neben dem Modell, das es im Echtzeit-Look mit Sonne und Schatten zeigt und jeder Änderung folgt; darin gehen Sie umher und stellen Tageszeit und Monat ein.
keywords: teilen, Panorama, 360, Tour, virtuelle Tour, eigenständiger Betrachter, Offline-Betrachter, an Kunden senden, Video, Rundgangvideo, Streuung, streuen, Gras, Wiese, Wald, Felsen, Pflanzen, Bäume, Menschenmenge, Pflanzen malen, Live-Ansicht, Echtzeit, Echtzeit-Rendering, Rundgang, durchgehen, Ego-Perspektive, Präsentation, Kunde, zweiter Bildschirm, zweites Fenster, Monitor, Tageszeit, Sonne, Jahreszeit, Monat, Schatten, Umgebungsverdeckung, Spiegelungen, indirektes Licht, globale Beleuchtung, WebGPU, WebGL
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} öffnet ein Fenster über der App, das das Modell im Echtzeit-Look zeigt: den Himmel und die Sonne am Ort und Datum Ihres Modells, die Sonnenschatten, die Looks und Materialien, die Sie den Flächen gegeben haben, Lampen und das Licht, das von Wänden und Böden zurückgeworfen wird. Es folgt dem, was Sie tun: Drehen Sie die Ansicht, dreht es sich mit; ändern Sie das Modell, zeigt es die Änderung kurz danach. Nichts wird hochgeladen.

## Öffnen

1. {{ui:Export}} › {{ui:Live view}} wählen. Das Fenster öffnet sich unten rechts in der Ecke.
2. Ziehen Sie die Titelleiste, um es zu verschieben, und ziehen Sie an der Ecke, um es zu vergrößern.
3. {{ui:New window}} verschiebt es in ein eigenes Fenster, etwa für einen zweiten Bildschirm. {{ui:Export}} › {{ui:Live view in a new window}} öffnet es dort gleich. Blockiert Ihr Browser Pop-up-Fenster, öffnet es sich als Bereich.
4. {{ui:Close}} schließt es.

## Die Bedienelemente

| Bedienelement | Wirkung |
|---|---|
| {{ui:Follow the view}} | Ein: Die Live-Ansicht schaut dorthin, wohin die Ansicht von ModelCraft schaut. Beim Gehen wird sie ausgeschaltet |
| {{ui:Walk}} | Durch das Modell gehen (siehe unten) |
| {{ui:Gravity}} | Beim Gehen: auf Böden stehen und Treppen steigen. Aus: fliegen |
| {{ui:Time}} | Die Tageszeit von 05:00 bis 21:00. Die Sonne wandert beim Ziehen mit |
| {{ui:Month}} | Der Monat (am 21. davon), damit Sie die Sonne im Winter und im Sommer sehen |
| {{ui:Quality}} | {{ui:For this computer}} (was [Ihr Rechner](topic:your-machine) erhält) oder {{ui:Low}}, {{ui:Medium}} oder {{ui:High}} |

Die Zeile unten zeigt, was die Ansicht zeichnet (WebGPU oder WebGL 2), die Qualität und das indirekte Licht.

## Durch das Modell gehen

1. Drehen Sie die Hauptansicht dorthin, wo Sie stehen möchten, und wählen Sie {{ui:Walk}}. Sie stehen auf dem Boden unter dem Augpunkt der Ansicht, 1.6 m groß.
2. Klicken Sie in die Live-Ansicht und nutzen Sie dann {{key:W}} {{key:A}} {{key:S}} {{key:D}} oder die Pfeiltasten. Halten Sie {{key:Shift}} gedrückt, um zu laufen. Ziehen Sie, um sich umzusehen.
3. Stufen bis 40 cm werden erstiegen (Treppen); alles Höhere ist eine Wand. Wände stoppen Sie, und Sie gleiten an ihnen entlang.
4. Bei ausgeschaltetem {{ui:Gravity}} fliegen Sie: {{key:E}} geht nach oben, {{key:Q}} nach unten.
5. {{key:Esc}} beendet das Gehen.

## Pflanzen, Felsen und Personen streuen

{{ui:Scatter}} in der Leiste der Live-Ansicht öffnet den Streubereich neben dem Bild. Ein Streuset verteilt Objekte aus der Beiwerk-Bibliothek (Bäume, Sträucher, Gras, Blumen, Felsen, Personen, Autos) über einen Teil des Modells. Die Objekte werden nur in der Live-Ansicht gezeichnet: Sie sind keine Geometrie im Modell, und die Hauptansicht zeigt sie nicht.

1. **Flächen füllen:** Wählen Sie in ModelCraft Flächen (oder eine Gruppe, etwa ein Gelände) aus und wählen Sie dann {{ui:Fill selection}}. Das Set bedeckt sie.
2. **Malen:** Wählen Sie {{ui:Paint}} und ziehen Sie dann über die Live-Ansicht. Bei ausgewählten Flächen wirkt der Pinsel nur auf sie; ohne Auswahl wirkt er auf alles unter dem Pinsel, auch auf den Boden. {{ui:Brush size}} legt den Pinsel fest; {{ui:Eraser}} entfernt gemalte Stellen.
3. Haken Sie an, was gestreut werden soll. Die Zahl neben jedem ist sein Gewicht: 3 und 1 ergeben drei vom ersten für jeden vom zweiten.

| Bedienelement | Wirkung |
|---|---|
| {{ui:Per m²}} | Wie viele Objekte auf jedem Quadratmeter liegen |
| {{ui:Keep away (m)}} | Keine Objekte näher als dieser Abstand an anderen Objekten und keine unter einem Dach oder Tisch. 0 schaltet es aus |
| {{ui:Turn (°)}} | Wie stark jedes Objekt zufällig um die Senkrechte gedreht wird |
| {{ui:Steepest (°)}} | Keine Objekte, wo die Fläche steiler ist |
| {{ui:Size}} | Die kleinste und größte Größe, als Faktor der eigenen Größe des Objekts |
| {{ui:Height from, to (m)}} | Nur zwischen diesen Höhen (leer = beliebig) |
| {{ui:Lean with the surface}} | 0 hält Objekte aufrecht; 1 stellt sie rechtwinklig zu einer Neigung auf |
| {{ui:Seed}}, {{ui:Shuffle}} | Derselbe Startwert ergibt immer dieselbe Streuung; Mischen wählt eine andere |

Die Sets werden in der Datei .modelcraft gespeichert und folgen den Flächen, die sie bedecken, wenn Sie diese ändern. Wie viele Objekte die Live-Ansicht höchstens zeichnet, legt die Stufe von [Ihrem Rechner](topic:your-machine) fest: 20 000 bei {{ui:Processor only}}, 100 000 bei {{ui:Graphics card, basic}}, eine Million bei {{ui:Graphics card, high}}. Die Anzeige zeigt, wie viele platziert werden, von wie vielen die Dichte verlangt: Es werden weniger platziert, wenn das Budget erreicht ist oder Objekte sie fernhalten. Nahe Objekte werden als sie selbst gezeichnet, ferne als einfache Formen in ihren Farben.

:::note
Gestreute Objekte gibt es in der Live-Ansicht (und ihrem Rundgang, den Panoramen und dem eigenständigen Betrachter). {{ui:Render a picture}} zeichnet sie noch nicht.
:::

## Teilen: Panoramen, Touren, ein Betrachter, ein Video

{{ui:Share}} in der Leiste der Live-Ansicht erstellt Dateien aus der Live-Ansicht. Alles wird auf diesem Computer erstellt; nichts wird hochgeladen.

| Auswahl | Ergebnis |
|---|---|
| {{ui:360° panorama}} | Ein 360°-Bild von dort, wo die Ansicht steht (oder wo Sie gehen), als äquirektangulare PNG-Datei, die Panorama-Betrachter und die meisten Fotoseiten öffnen |
| {{ui:Add this spot to the tour}}, dann {{ui:Save the tour}} | Eine Webseite mit einem Panorama an jedem Standpunkt und Pfeilen zu den Standpunkten, die jeder sehen kann (eine Wand dazwischen blendet den Pfeil aus) |
| {{ui:Save a viewer}} | Eine Webseite mit dem Modell in diesem Echtzeit-Look: drehen, durchgehen, zu seinen gespeicherten Szenen springen. Sie öffnet sich offline in einem Browser mit WebGPU oder WebGL 2, aus einem Ordner, von einem USB-Stick oder aus einer E-Mail, ohne Installation und ohne Konto, und sie lädt nichts aus dem Internet |
| {{ui:Video of the path}} | Der Kamerapfad der Zeitleiste (oder die gespeicherten Szenen in Reihenfolge) als Video in diesem Echtzeit-Look, in der Größe der Live-Ansicht: WebM oder MP4, wo der Browser sie erstellen kann, sonst nummerierte Bilder in einer ZIP-Datei |

Die Breite des Panoramas folgt der Qualität: 1024, 2048 oder 4096 Pixel bei Niedrig, Mittel und Hoch. Eine Betrachter-Datei ist etwa 5 MB groß, plus das Modell.

:::note
Tour und Betrachter sind zum Zeigen gemacht, nicht zum Bearbeiten: Sie behalten das Modell so, wie es beim Speichern war.
:::

## Qualität

| | Niedrig | Mittel | Hoch |
|---|---|---|---|
| Sonnenschatten | eine Schattenkarte | drei Kaskaden | vier Kaskaden |
| Umgebungsverdeckung (Kontaktschatten) | | ✓ | ✓, feiner |
| Spiegelungen in Metall | | | ✓ |
| Bloom (wenn {{ui:Render a picture}} ihn setzt) | | ✓ | ✓ |
| Geglättete Kanten | FXAA | über mehrere Bilder (TAA) | über mehrere Bilder (TAA) |
| Indirektes Licht | grob | feiner | am feinsten |

{{ui:For this computer}} wählt Niedrig auf einem Computer ohne nutzbare Grafikkarte, Mittel mit einem integrierten Grafikchip und Hoch mit einer eigenen Grafikkarte. Niedrig ist für einen 8-GB-Laptop ohne Grafikkarte gedacht.

## Indirektes Licht

Licht, das von einer besonnten Wand auf den Boden zurückgeworfen wird, und das dunklere Innere eines Raums werden vom selben Pfadtracer berechnet, der [gerenderte Bilder](topic:render) erzeugt: Er rendert an Punkten durch das Modell ein kleines Panorama, im Hintergrund auf jedem Prozessorkern. Während er arbeitet, zeigt die untere Zeile {{ui:Indirektes Licht: 40 %}}; ist er fertig, übernimmt die Ansicht ihn. Nach einer Änderung beginnt er von vorn.

:::note
Das ist eine Näherung für eine Live-Ansicht, kein gerendertes Bild: Kleine Details zwischen den Punkten erhalten das indirekte Licht der nahen Punkte. Für ein fertiges Bild nutzen Sie [Bild rendern](topic:render).
:::

## Helligkeit und Farben

Die Live-Ansicht nutzt dieselbe Helligkeit, denselben Weißabgleich, Kontrast und dieselbe Ansichtstransformation (ACES, AgX, Filmic oder Standard) wie [Bild rendern](topic:render). Stellen Sie sie dort ein, und die Live-Ansicht folgt.

:::note
Browser unterscheiden sich. Wo der Browser WebGPU hat (Chrome und Edge unter Windows, macOS und ChromeOS, Safari 26), nutzt die Live-Ansicht es; anderswo (die meisten Browser unter Linux, ältere Apple-Systeme) nutzt sie WebGL 2 und sieht gleich aus.
:::
