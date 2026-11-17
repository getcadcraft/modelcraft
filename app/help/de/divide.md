---
title: Kante oder Kurve in gleiche Teile teilen
summary: Eine Linie in gleich lange Stücke teilen oder einem Bogen oder Kreis eine neue Anzahl an Segmenten geben, mit dem Werkzeug Teilen.
keywords: teilen, Kante teilen, gleiche Teile, gleiche Segmente, Kante aufteilen, Segmente, unterteilen, Kanten unterteilen, Bogensegmente, Kreissegmente, Punkte entlang einer Linie
from: 5c3ce3ed
---

{{ui:Teilen}} schneidet eine Kante in gleich lange Stücke, mit einem Eckpunkt an jeder Schnittstelle. Verwenden Sie die Eckpunkte zum Einfangen, um Linien von dort aus zu beginnen, oder um Teile einer Fläche zu drücken oder zu ziehen.

## Kante teilen

1. Klicken Sie in der Symbolleiste auf {{ui:Teilen}}, oder wählen Sie eine Kante aus und klicken Sie in {{ui:Objektinfo}} auf {{ui:Teilen…}}.
2. Zeigen Sie auf die Kante. Markierungen zeigen, wo die Schnitte liegen: Über der Mitte der Kante entstehen zwei Teile; bewegen Sie den Zeiger zu einem Ende hin, für mehr Teile.
3. Klicken Sie, um sie in die angezeigten Teile zu teilen. Oder geben Sie eine Zahl ein, etwa `5` (oder `5s`, oder `/5`), und drücken Sie {{key:Enter}}: Sie wird sofort geteilt.

Die Teile bleiben ausgewählt, und das Teilen ist ein Rückgängig-Schritt. Eine Fläche, zu der die Kante gehört, behält ihre Form und erhält die neuen Eckpunkte.

## Bogen oder Kreis teilen

Zeigen Sie auf ein beliebiges Segment eines Bogens oder Kreises: Er wird als Ganzes geteilt.

- Ein Bogen oder Kreis, dessen Eckpunkte sonst nichts verwendet und der flach auf seiner Fläche liegt, wird **mit dieser Anzahl an Segmenten auf dem echten Bogen neu gezeichnet**. Seine Enden bleiben, wo sie sind, und er bleibt eine einzige Kurve, sodass Sie ihn weiterhin mit einem Klick auswählen und seinen Radius in {{ui:Objektinfo}} ändern können. Ein 24-seitiger Kreis, geteilt in 8, wird zu einem Achteck.
- Jede andere Kurve (der Rand eines gezogenen Zylinders, eine mit {{ui:Kurve}} gezeichnete Kurve, ein Bogen mit an seinen Eckpunkten angefügten Linien) erhält neue Eckpunkte in gleichen Längen entlang der Kurve, und nichts wird verschoben.

## Mit den Modeler-Tasten

Das Werkzeug ist mit den Modeler-Tasten dasselbe (Einstellungen › ModelCraft › Tasten oder der Menüstil Modeler). Dort befindet es sich im Menü {{ui:Netz}} als {{ui:Kanten unterteilen}}.

## Wissenswertes

- Eingegebene Zahlen reichen von 2 bis 1000; mit dem Zeiger sind bis zu 100 möglich.
- Eine mit {{ui:Kurve}} gezeichnete Kurve behält ihre Punkte: Nach {{ui:Punkte bearbeiten}} wird sie aus diesen neu gezeichnet, und die neuen Eckpunkte sind weg.

Siehe auch [Flächen mit Linien, Rechtecken, Kreisen und Bögen zeichnen](topic:draw-faces) und [Exakte Maße im Wertfeld eingeben](topic:value-box).
