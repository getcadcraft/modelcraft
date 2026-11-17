---
title: Ein .3dm-Modell importieren
summary: Eine .3dm-Datei mit ihren Netzen, Flächen, Kurven, Blöcken, Layern und Farben importieren; woher die Dreiecke kommen und was ausgelassen wird.
keywords: 3dm, importieren, NURBS, Polyfläche, BRep, Flächen, Render-Netz, Extrusion, Kurven, Blöcke, Layer, Tags, Farben, Einheiten, wechseln, migrieren
from: 3cf29879
---

ModelCraft liest `.3dm`-Dateien mit einem eigenen Leser direkt auf der Seite. Nichts wird hochgeladen, und es funktioniert offline, wann immer ModelCraft das tut. Dateien in den Formaten der Versionen 5, 6, 7 und 8 wurden getestet. Ältere (Versionen 2 bis 4) sollten sich ebenfalls öffnen lassen, wurden aber noch nicht ausprobiert.

## Die Datei importieren

1. Klicken Sie in der Gruppe {{ui:File}} auf {{ui:Import}} (oder ziehen Sie die `.3dm`-Datei auf die 3D-Ansicht).
2. Wählen Sie die Datei aus.

   Die Statusleiste zeigt „Lese chair.3dm…“, während sie liest, danach, was hereingekommen ist, zum Beispiel „chair.3dm importiert: 14 Netze (8330 Flächen), 8 Kurven, 5 Blockplatzierungen, 3 Layer als Tags. Flächen: 7 Flächen aus den in der Datei gespeicherten Netzen, 29 von CadCraft tesseliert.“

Das gesamte Modell kommt als eine Gruppe an, benannt nach der Datei, ausgewählt, und die Ansicht zoomt darauf. Mit {{key:Mod+Z}} wird alles wieder entfernt, einschließlich der Tags.

## Woher die Dreiecke kommen

ModelCraft arbeitet mit Flächen und Netzen, daher kommt jede Oberfläche der Datei als [Netz](topic:meshes) aus kleinen, flachen Dreiecken an. Für jede Fläche einer Polyfläche (und jede Extrusion) nimmt ModelCraft in dieser Reihenfolge:

1. **Das in der Datei gespeicherte Render-Netz.** Die meisten Modellierprogramme speichern das Netz, das sie auf dem Bildschirm zeigten, mit jeder Oberfläche. Ist es vorhanden, übernimmt ModelCraft es unverändert.
2. **Eine eigene Tesselierung**, wenn die Datei kein gespeichertes Netz hat: Ebenen, NURBS-Flächen, Rotationsflächen (Kugeln, Kegel, Tori, Drehkörper), extrudierte Kurven und Extrusionen (mit ihren Löchern und Abschlussflächen), begrenzt durch ihre Kanten. Flächen einer Polyfläche teilen ihre Kantenpunkte, sodass eine geschlossene Polyfläche als geschlossenes Netz ankommt. Gekrümmte Bereiche werden so lange unterteilt, bis die Dreiecke innerhalb von etwa 0.15 % der Objektgröße von der echten Fläche liegen.
3. **Nichts**, bei einer Fläche einer Art, die ModelCraft noch nicht liest. Die Statusleiste zeigt, wie viele Flächen es sind und von welcher Art.

Der Teil „Flächen:“ der Statusleiste zeigt, wie viele Flächen aus gespeicherten Netzen kamen und wie viele ModelCraft tesseliert hat. Kanten innerhalb einer Fläche der Datei sind weich, Kanten zwischen zwei Flächen sind scharf, sodass eine gekrümmte Fläche gleichmäßig schattiert wird.

:::tip
Für die originalgetreusten Formen speichern Sie die Datei mit ihren Render-Netzen in dem Programm, das sie erstellt hat. Das ist meist die Voreinstellung. Eine Option „save small“ lässt sie weg.
:::

## Was ankommt

- **Netze** mit ihren Vertexfarben und Texturkoordinaten.
- **Polyflächen, Flächen und Extrusionen**, wie oben beschrieben.
- **Kurven** (Linien, Polylinien, Bögen, Kreise, NURBS-Kurven und daraus verbundene Kurven) als [Kanten](topic:curves), eine Kantengruppe pro Layer.
- **Blöcke** werden zu [Komponenten](topic:groups-components): Jede Platzierung eines Blocks ist eine Platzierung einer Komponente, sodass das Bearbeiten einer Kopie alle ändert. Blöcke in Blöcken bleiben erhalten.
- **Layer** werden zu [Tags](topic:tags) mit dem vollständigen Namen des Layers („Furniture::Chairs“), ausgeblendet, wenn der Layer ausgeschaltet war. Die Platzierung jedes Objekts trägt das Tag seines Layers.
- **Farben.** Die Farbe eines Objekts kommt aus der Angabe der Datei: seiner eigenen Farbe, der seines Layers oder der Grundfarbe seines Materials. Sie wird zur Füllung seiner Flächen.
- **Ausgeblendete Objekte kommen ausgeblendet an.** {{ui:Unhide all}} zeigt sie.
- **Einheiten:** Die Datei gibt ihre Einheit an. Das Modell kommt in seiner tatsächlichen Größe an.

## Was ausgelassen wird (und gemeldet wird)

Der Teil „Hinweise:“ der Statusleiste nennt alles, was nicht hereinkam, mit Anzahl:

- Punkte und Punktwolken, Text, Textpunkte, Bemaßungen, Führungslinien, Schraffuren, Lichter, Schnittebenen und Layout-Details;
- SubD-Objekte: Wandeln Sie sie zuerst im Programm, das die Datei erstellt hat, in Netze oder Polyflächen um;
- Flächen auf versetzten Oberflächen und andere Flächenarten, die ModelCraft noch nicht liest, wenn die Datei dafür kein Netz gespeichert hat;
- Blöcke, die aus anderen Dateien verknüpft sind (nur die importierte Datei wird gelesen);
- Extrusionen mit schrägen (auf Gehrung geschnittenen) Enden kommen mit geraden Enden an.

Materialtexturen, Renderingeinstellungen, benannte Ansichten, Gruppen und Benutzertext werden nicht gelesen. Ein Material gibt nur seine Grundfarbe an.

## Grenzen

Dateien bis 300 MB. Eine beschädigte Datei nennt, was nicht stimmt, und fügt nichts hinzu. Ein Objekt, das nicht gelesen werden kann, wird ausgelassen und gezählt, der Rest kommt herein.
