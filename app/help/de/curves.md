---
title: Kurvenobjekte
summary: Bézier- und NURBS-Kurven sowie Kurven aus geraden Segmenten zeichnen, ihnen eine Dicke, eine Breite oder eine Verjüngung geben, flache Kurven füllen, Text als Kurve setzen und sie in Netze umwandeln.
keywords: Kurve, Kurven, Bézier, NURBS, Spline, Splines, Pfad, Röhre, Rohr, Kabel, Seil, Profil, extrudieren, Extrusion, Verjüngung, Neigung, Radius, füllen, Profil, Text, Buchstaben, Logo, Kurve zu Netz
from: 602bf077
---

Ein **Kurvenobjekt** ist eine Kurve, die eine Form erzeugt: eine Röhre entlang ihr (Profil), ein Band (Extrusion), ein sich verjüngendes Horn (Verjüngung) oder, wenn sie flach und geschlossen ist, eine gefüllte Platte oder Buchstaben. Die Form folgt der Kurve: Verschieben Sie einen Punkt, bewegt sich die Röhre mit. Wenn die Form stimmt, wandeln Sie sie in ein Netz um.

## Eine Kurve hinzufügen

Wählen Sie {{ui:Kurve}} in der Liste der Arbeitsbereiche und drücken Sie {{ui:Hinzufügen}}:

| Art | Was es ist |
| --- | --- |
| Bézier-Kurve, Bézier-Kreis | Verläuft durch ihre Punkte; jeder Punkt hat zwei Griffe, die die Richtung der Kurve festlegen |
| NURBS-Kurve, NURBS-Kreis, Pfad | Glatt, zu ihren Punkten hin gezeichnet (sie beginnt und endet an ihren Endpunkten); jeder Punkt hat ein Gewicht |
| Text | Ihr Text als flache, gefüllte Buchstabenumrisse |

Eine neue Kurve erhält eine dünne Röhre, damit sie sichtbar und wählbar ist. Setzen Sie die Profiltiefe auf 0 für eine nackte Kurve.

Sie können auch von etwas Gezeichnetem ausgehen: Wählen Sie im Modellarbeitsbereich einen Bogen, einen Kreis, ein Polygon oder eine gezeichnete Kurve aus und drücken Sie in der {{ui:Objektinfo}} auf {{ui:Ein Kurvenobjekt erstellen}}. Die gezeichneten Linien bleiben erhalten.

## Die Punkte bearbeiten

Doppelklicken Sie auf ein Kurvenobjekt (oder wählen Sie es aus und wählen {{ui:Kurve}}), um es zu bearbeiten.

- Klicken Sie auf einen Punkt oder Griff (Shift fügt hinzu oder entfernt); ziehen Sie ihn, um ihn zu verschieben. Ziehen Sie auf leerem Raum, um mit einem Rahmen auszuwählen.
- {{ui:Verlängern}} ({{key:E}}, oder {{key:Ctrl}}+Klick) fügt einen Punkt nach dem gewählten Ende an der Zeigerposition hinzu.
- {{ui:Unterteilen}} ({{key:W}}) setzt zwischen jedes Paar ausgewählter Nachbarn einen Punkt; eine Bézier-Kurve behält ihre Form.
- {{ui:Verschieben}}, {{ui:Drehen}}, {{ui:Skalieren}} bewegen die gewählten Punkte mit dem Zeiger (Modeler-Tasten {{key:G}} {{key:R}} {{key:S}}, Drücken/Ziehen-Tasten {{key:M}} {{key:Q}} {{key:S}}). Klicken Sie zum Behalten, {{key:Esc}} bricht ab.
- {{ui:Schließen}} ({{key:C}}) schließt einen offenen Spline oder öffnet einen geschlossenen; {{ui:Umkehren}} ({{key:Shift+R}}) läuft ihn in die andere Richtung.
- Bézier-Griffe: {{ui:Glätten}} ({{key:V}}) setzt sie für eine glatte Kurve, {{ui:Ecke}} ({{key:Shift+V}}) richtet sie auf die Nachbarn, {{ui:Frei}} ({{key:Alt+V}}) lässt sie, wo Sie sie hingelegt haben. Das Ziehen eines Griffs macht ihn frei.
- {{ui:Bézier}}, {{ui:NURBS}} und {{ui:Poly}} ändern den Typ der gewählten Splines und behalten die Punkte.

Jede Änderung ist ein Schritt für Rückgängig.

## Form

Die Einstellungen finden Sie im Bereich (und in der Objektinfo im Modellarbeitsbereich):

- **Form:** 3D-Kurven gehen in jede Richtung; eine flache Kurve bleibt in ihrer eigenen Ebene und kann gefüllt werden.
- **Geschlossene Splines füllen** (flach): Die Umrisse werden zu einer Platte. Ein Umriss innerhalb eines anderen ist ein Loch, sodass Buchstaben ihre Löcher behalten.
- **Extrusion:** die halbe Breite des Bandes (offene oder 3D-Kurven) oder die halbe Dicke der Platte (gefüllt).
- **Profiltiefe** und **Rundheit:** eine runde Röhre entlang der Kurve (mit Extrusion: ein gerundetes Band); bei einer gefüllten Form eine abgerundete Kante.
- **Enden schließen:** Deckel auf einer offenen Röhre.
- **Verjüngung entlang der Kurve:** skaliert gleichmäßig entlang jedes Splines, zum Beispiel `1, 0.2` für ein Horn, `0, 1, 0` für eine Spindel.
- **Glätte** und bei NURBS die **Ordnung**: wie fein sie gezeichnet wird und wie glatt (2 gerade … 6 am glattesten).
- Mit gewählten Punkten: **Radius** (die Dicke der Röhre dort, multipliziert mit der Profiltiefe), **Neigung** (dreht das Band um die Kurve) und bei NURBS das **Gewicht**.

Modifikatoren wirken auf einem Kurvenobjekt wie auf einem Netz: ein Array entlang der Kurve, eine Spiegelung, eine Unterteilungsfläche. Siehe [Modifikatoren auf einem Netz](topic:modifiers).

## In ein Netz umwandeln

{{ui:In Netz}} (im Kurven-Arbeitsbereich oder in der Objektinfo unter {{ui:Kurve zu Netz}}) macht aus dem Kurvenobjekt das Netz, das es jetzt zeigt; seine Modifikatoren bleiben obendrauf. Bearbeiten Sie es dann im Netz-Arbeitsbereich. Rückgängig macht es wieder rückgängig.

Siehe auch [Netze](topic:meshes) und [Ein Netz bearbeiten](topic:mesh-edit).
