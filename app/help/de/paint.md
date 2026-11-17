---
title: Mit Farben und Materialien füllen
summary: Geben Sie Flächen, Gruppen und Komponenten eine einheitliche Farbe oder ein Material wie Ziegel, Verkleidung, Schindeln oder Holz, und behalten Sie sie beim Exportieren.
keywords: füllen, Farbe, Farben, Material, Materialien, Textur, Texturen, Ziegel, Verkleidung, Schindeln, Dachdeckung, Holz, Stein, Fliese, Beton, Putz, Gras, Kies, Glas, Metall, Farbeimer, füllen, Muster, Pipette, Standard, glb, obj, mtl, collada
from: b1500523
---

Farben helfen Ihnen, Teile eines Modells zu unterscheiden, und **Materialien** (Ziegel, Verkleidung, Dachdeckung, Holz, Stein, Fliese, Beton, Putz, Gras, Glas, Metall) lassen es so aussehen, woraus es gebaut ist. Beide werden gleich aufgetragen.

## Farbe wählen

Der Bereich {{ui:Farben}} rechts zeigt eine Reihe einheitlicher Farben, {{ui:Standard}} (das durchgestrichene Feld: keine Farbe) und ein Farbfeld {{ui:+}} für jede andere Farbe. Klicken Sie auf eine, um sie zur aktuellen Farbe zu machen. Das Werkzeug {{ui:Farbeimer}} beginnt damit.

## Füllen

1. Drücken Sie {{key:B}} ({{ui:Farbeimer}}) oder klicken Sie bei nichts Ausgewähltem auf eine Farbe. (Ist etwas ausgewählt, füllt ein Klick auf eine Farbe die Auswahl sofort.)
2. Klicken Sie auf eine Fläche, um sie zu füllen.
3. Klicken Sie auf eine Gruppe oder Komponente, um diese Kopie zu füllen: Ihre Flächen, die keine eigene Farbe haben, übernehmen diese Farbe. Flächen, die Sie darin gefüllt haben, behalten ihre Farbe.

Um mehrere Dinge auf einmal zu füllen, wählen Sie sie zuerst aus und klicken dann auf eine Farbe, oder klicken Sie mit {{ui:Farbeimer}} auf eines davon. Das ist ein einziger Rückgängig-Schritt.

| Halten | Und auf eine Fläche klicken | Was gefüllt wird |
|---|---|---|
| — | | Diese Fläche |
| {{key:Ctrl}} | | Jede angrenzende Fläche mit derselben Farbe |
| {{key:Shift}} | | Jede Fläche dieser Farbe in der Gruppe, in der Sie arbeiten |
| {{key:Alt}} | | Nichts: Sie übernehmen stattdessen diese Farbe |

Um eine Fläche wieder ohne Farbe zu machen, wählen Sie {{ui:Standard}} und klicken Sie darauf.

## Mit einem Material füllen

Der Bereich {{ui:Materialien}} unter {{ui:Farben}} listet die Materialbibliothek nach Art auf: Ziegel und Block, Verkleidung, Dachdeckung, Holz, Stein, Fliese, Beton, Putz, Boden, Glas und Metall. Fahren Sie über ein Farbfeld, um seinen Namen zu sehen. Klicken Sie eines an und füllen Sie dann genauso wie mit einer Farbe: {{key:B}}, auf Flächen, Gruppen oder Komponenten klicken; oder vorher auswählen und dann auf das Material klicken.

- Im Stil **Schattiert** zeigen die Flächen die Textur des Materials. Verdeckte Linien, Drahtmodell und Röntgen zeigen seine Farbe.
- Texturen laufen **auf jeder Fläche waagerecht** und **an ihr nach oben**: Ziegelschichten bleiben auf jeder Wand waagerecht, Schindeln laufen die Dachneigung hinab, Bretter auf dem Boden folgen der roten Achse. Sie haben ihre reale Größe (ein Ziegel ist etwa 215 mm lang), daher wirken sie aus jeder Entfernung richtig.
- In einem [gerenderten Bild](topic:render) behalten Materialien ihre Textur, Rauheit und bei Glas und Metall ihren Glanz.
- {{key:Alt}}-Klick mit {{ui:Farbeimer}} übernimmt auch das Material einer Fläche.

Die Texturen zeichnet ModelCraft selbst; daher funktionieren sie offline und sind frei für alle Zwecke nutzbar (CC0).

## Komponenten und Farben

Eine Farbe, die Sie auf eine Fläche **innerhalb** einer Komponente füllen, erscheint auf jeder Kopie, weil die Kopien eine gemeinsame Definition haben. Eine Farbe, die Sie von außen auf eine **Kopie** füllen (bei geschlossener Komponente), gehört nur zu dieser Kopie; zwei Kopien einer Komponente können also unterschiedliche Farben haben. {{ui:Objektinfo}} zeigt die Farbe einer ausgewählten Fläche, Gruppe oder Komponente.

## Farben in Dateien

- Die ModelCraft-Datei behält jede Farbe und jedes Material.
- Andere Formate erhalten die **Materialfarbe** (ihr Aussehen aus der Ferne) anstelle der Textur: glTF, Collada, OBJ, DWG und DXF sowie die Prüfung für den 3D-Druck. In glTF, Collada und OBJ behält das Material seinen Namen, etwa `Material_brick-red`.
- **glTF (.glb)** und **Collada (.dae)**: jede Farbe wird zu einem Material. Eine Komponente in verschiedenen Farben wird pro Farbe einmal geschrieben. glTF schreibt importierte Texturen zusätzlich als Texturen.
- **OBJ**: Beim Exportieren werden zwei Dateien heruntergeladen: die `.obj` und eine `.mtl`-Materialdatei mit den Farben. Bewahren Sie beide im selben Ordner auf. Bei importierten Texturen kommen die `.obj`, die `.mtl` und die Bilder als eine `.zip`-Datei.
- **DWG** behält die exakten Farben; **DXF** verwendet die nächste der 255 Standard-CAD-Farben.
- **STL** und **PLY** tragen Farben: STL nach der VisCAM-/SolidView-Konvention (Programme, die sie nicht lesen, ignorieren sie), PLY als Farbe an jedem Punkt. Siehe [Dateiformate im Detail](topic:formats).

:::tip
Um einen Bildschirm zu modellieren, färben Sie den Rahmen anthrazit und das Glas blau, nachdem Sie die vordere Fläche [versetzt](topic:draw-faces) haben.
:::
