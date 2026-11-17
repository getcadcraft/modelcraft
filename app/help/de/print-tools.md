---
title: Stützen, Wandstärke, Aushöhlen und Reparieren
summary: Sehen, wo ein Druck Stützen braucht und ungefähr wie viele, zu dünne Wände finden, ein Teil mit einer Wandstärke aushöhlen, mit Ablauflöchern, und ein Netz reparieren, wobei jede Korrektur aufgelistet wird.
keywords: 3D-Druck, Stützen, Stützen-Vorschau, Überhang, Baumstützen, Säulenstützen, Wandstärke, dünne Wände, zu dünn, Düse, aushöhlen, Aushöhlen, Schale, Ablaufloch, Harz, reparieren, Netz reparieren, nicht mannigfaltig, umgedrehte Flächen, Löcher, kleine Schalen, Selbstdurchdringung, Überlappung, verbinden
from: 286bde26
---

Vier Werkzeuge, um ein Modell für einen 3D-Drucker vorzubereiten. Öffnen Sie {{ui:Exportieren}} › {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}}; die Zeile **Druckwerkzeuge** im Dialogfeld enthält {{ui:Stützen-Vorschau}}, {{ui:Wandstärke}}, {{ui:Aushöhlen}} und {{ui:Reparieren}}. Jedes öffnet sich als Karte über der Ansicht; {{ui:Schließen}} (das Kreuz) entfernt sie samt ihren Markierungen. Es wird immer nur eine Karte angezeigt.

Jedes Werkzeug arbeitet an dem, was gedruckt wird: der Auswahl oder allem Sichtbaren, wenn nichts ausgewählt ist. {{ui:Aushöhlen}} und {{ui:Reparieren}} brauchen eine ausgewählte Gruppe, Komponente oder ein Netz, weil sie es verändern.

## Stützen-Vorschau

Flächen, die sich mehr als der **Überhangwinkel** von der Senkrechten nach außen neigen, werden rot schattiert, und einfache Stützen werden von ihnen (orange) nach unten bis zum Druckbett oder bis zum darunterliegenden Teil des Modells gezeichnet.

- **Überhangwinkel**: 45° schaffen die meisten Drucker ohne Stütze. Erhöhen Sie den Winkel für einen Drucker, der gut überbrückt.
- **Säulen**: eine gerade Säule alle 3 mm unter jedem Überhang. Die Schätzung zählt sie als Stützmuster mit 15 %.
- **Baum**: nahe beieinanderliegende Punkte verbinden sich unter ihrer Mitte zu einem Stamm; kein Ast neigt sich mehr als 45°. Baumstützen brauchen meist weniger Material und berühren das Druckbett an weniger Stellen.

Die Karte zeigt, wie viel Fläche Stützen braucht, wie viele Stützpunkte es gibt und ungefähr wie viel Material sie brauchen. Stützen, die auf dem Modell stehen (nicht auf dem Druckbett), werden mitgezählt: Sie hinterlassen dort Spuren. Wurde unter {{ui:Einstellungen}} ein Druckbett gewählt, wird es unter dem Modell gezeichnet.

:::note
Dies ist eine Vorschau, kein Slicer: Ihr Slicer entscheidet über die echten Stützen. Bei einem sehr großen Überhang werden die Stützpunkte weiter verteilt, damit die Vorschau schnell bleibt; die Karte weist darauf hin.
:::

## Wandstärke

Jede Fläche wird gerade durch den Volumenkörper bis zur anderen Seite gemessen. Wände unter der **dünnsten zulässigen Wandstärke** sind rot, und Wände unter dem Anderthalbfachen davon sind orange: Sie drucken sich, können aber schwach werden.

Die dünnen Bereiche werden aufgelistet, die dünnsten zuerst, mit Angabe, wie dünn und wie groß jeder ist. {{ui:Anzeigen}} dreht die Kamera darauf.

Ein Drucker kann keine Wand dünner machen als etwa das Doppelte der Düsenbreite: 0.8 mm bei der üblichen 0.4-mm-Düse (der Ausgangswert). Harzdrucker schaffen weniger; sehen Sie im Handbuch Ihres Druckers nach.

Bei einem sehr großen Modell senden nur einige Flächen einen Strahl aus, die anderen übernehmen die Dicke ihrer Nachbarn; die Karte zeigt, wie viele gemessen wurden.

## Aushöhlen

Beim Aushöhlen bleibt die Außenseite erhalten und das Innere wird entfernt, wobei die Wände so dick bleiben, wie Sie es verlangen. Harzdrucke brauchen weniger Harz und ziehen weniger an der Bauplatte; Filamentdrucke verbrauchen weniger Kunststoff, als es eine Füllung täte.

1. Wählen Sie die Gruppe, Komponente oder das Netz aus und öffnen Sie {{ui:Aushöhlen}}.
2. Stellen Sie die **Wand** (zu Beginn 2 mm) und die Breite der **Ablauflöcher** ein.
3. Bei einem Harzdruck klicken Sie auf {{ui:Ablaufloch platzieren}} und dann auf die Außenseite des Modells, wo es hin soll: tief unten, nahe der Bauplatte, damit das flüssige Harz abläuft. Setzen Sie so viele, wie Sie brauchen; jedes erscheint als blauer Kreis und wird mit {{ui:Entfernen}} aufgelistet.
4. {{ui:Vorschau}} zeigt, wie viel das Aushöhlen entfernt.
5. {{ui:Aushöhlen}} führt die Änderung aus: ein Schritt, den {{key:Mod+Z}} rückgängig macht.

Das Ergebnis ist ein geschlossener Volumenkörper, den die 3D-Druck-Prüfung annimmt: ModelCraft prüft ihn vorab und ändert nichts, wenn er nicht bestehen würde. Wo das Modell dünner ist als zwei Wände, bleibt es massiv. Das Ergebnis ist eine Gruppe, deren ebene Seiten einzelne Flächen sind, sodass Sie es weiter mit {{ui:Drücken/Ziehen}} bearbeiten können; ein gekrümmtes Teil, das auf dem feinen Raster ausgehöhlt wurde, hat dafür meist zu viele Flächen und wird stattdessen zu einem Netz, und die Statuszeile sagt, welches.

:::tip
Bei den meisten Formen ist das Innere die Außenseite, genau um die Wandstärke nach innen versetzt. Wo Ecken oder dünne Teile das unmöglich machen, folgt ModelCraft stattdessen der Außenseite im Abstand der Wand auf einem feinen Raster; die Karte zeigt dann, wie genau das ist (auf einen Bruchteil eines Millimeters genau).
:::

## Reparieren

{{ui:Reparieren}} prüft das ausgewählte Teil so, wie es der Slicer eines Druckers tun würde, behebt, was sich sicher beheben lässt, und listet jede Korrektur auf:

| Das wird behoben | Was das bedeutet |
|---|---|
| Dreiecke ohne Fläche | weggelassen |
| Ein doppelt gezeichnetes Dreieck | eine Kopie bleibt erhalten; eine mit sich selbst Rücken an Rücken liegende Fläche (ohne Dicke) wird entfernt |
| Lose Teile unter 0.5 mm | entfernt |
| Dreiecke mit falscher Ausrichtung | gedreht, damit sie zu ihren Nachbarn passen |
| Löcher, eben oder nicht | geschlossen mit einem Fächer neuer Dreiecke von der Mitte jedes Lochs aus |
| Ein Teil ist links herum | nach außen gedreht (ein Hohlraum in einem anderen Teil bleibt, wie er ist: er soll nach innen zeigen) |

{{ui:Die sicheren beheben}} führt alle in einem Schritt aus, den {{key:Mod+Z}} rückgängig macht, und die Statuszeile listet jede Korrektur auf. Das reparierte Teil wird zu einer Gruppe, deren ebene Seiten einzelne Flächen sind. Schließt es sich immer noch nicht (etwas unter **Für Sie übrig** bleibt), oder hätte es zu viele Flächen für eine Gruppe, wird es stattdessen zu einem Netz: Seine Flächen bleiben Dreiecke, und ebene Seiten wirken weiterhin eben. Die Statuszeile zeigt, welches. {{ui:Überlappende Teile verbinden}} funktioniert genauso.

Was sich nicht sicher beheben lässt, steht unter **Für Sie übrig** und wird in der Ansicht violett markiert, mit {{ui:Anzeigen}}:

- **Kanten, an denen drei oder mehr Flächen zusammentreffen**: Entscheiden Sie, welche Fläche dazugehört, und löschen Sie die anderen.
- **Ein Teil, das durch sich selbst hindurchgeht**: Verschieben oder zeichnen Sie diesen Teil neu. Siehe [Flächen schneiden](topic:intersect).
- **Löcher, zu groß oder zu verschlungen zum Schließen**: Zeichnen Sie Flächen darüber.
- **Getrennte Teile, die sich überlappen**: Slicer verbinden sie ohnehin. {{ui:Überlappende Teile verbinden}} macht sie zu einem geschlossenen Körper (es baut die Flächen dort neu auf, wo sie sich treffen; deshalb ist es eine eigene Schaltfläche, die nie automatisch für Sie ausgeführt wird).

Bei Drücken/Ziehen-Gruppen können Sie auch einzeln in {{ui:Objektinfo}} › {{ui:Probleme anzeigen}} / {{ui:Beheben}} korrigieren; dabei bleiben die gezeichneten Flächen erhalten. Siehe [Volumenkörper-Werkzeuge](topic:solids).

Verwandt: [Ein Modell für den 3D-Druck vorbereiten](topic:print-3d) · [Der Einsteiger-Stil](topic:beginner) · [Noch nicht umgesetzt](topic:not-built-yet#3d-printing)
