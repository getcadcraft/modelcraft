---
title: Ein großes Modell für den Druck teilen
summary: Ein Modell, das für Ihren Drucker zu groß ist, in Teile schneiden, die auf das Druckbett passen, mit Zapfen, Keilen, Schwalbenschwänzen, Dübel- oder Magnetlöchern und der Fugennummer auf beiden Seiten, und jedes Teil sowie ein Montageblatt in einer ZIP-Datei herunterladen.
keywords: 3D-Druck, teilen, schräg, Schrägschnitt, schräger Schnitt, Schneider, schneiden, zu groß, Druckbettgröße, Bauraum, Teile, Bauteile, Verbinder, Zapfen, Keile, Schwalbenschwanz, Dübel, Magnet, Spiel, Toleranz, Teilenummern, Montage, Explosionsdarstellung, ZIP, STL, 3MF, Lizenz, USB-Schlüssel, Dongle
from: ee96ba77
---

Wenn ein Modell größer als das Druckbett Ihres Druckers ist, schneidet **Für den Druck teilen** es in Teile, die passen, fügt Verbinder hinzu, damit die Teile beim Zusammensetzen fluchten, und graviert dieselbe Nummer auf beide Seiten jeder Fuge. Öffnen Sie {{ui:Exportieren}} › {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}}; die Zeile **Druckwerkzeuge** im Dialogfeld enthält {{ui:Für den Druck teilen}}. Es öffnet sich als Karte über der Ansicht.

Es arbeitet an dem, was gedruckt wird: der Auswahl oder allem Sichtbaren, wenn nichts ausgewählt ist. Was gedruckt wird, muss ein geschlossener Volumenkörper sein; findet die Prüfung Löcher, verwenden Sie zuerst [Reparieren](topic:print-tools#repair).

Es läuft in ModelCraft auf Ihrem Computer: kein Lizenzserver, kein USB-Schlüssel, nichts wird hochgeladen.

## So wird geschnitten

- **Druckbett passend, wenigste Teile**: Geben Sie Breite, Tiefe und Höhe des Druckbetts an (sie starten bei {{ui:Einstellungen}} › ModelCraft › 3D-Drucker). Die Karte zeigt, wie viele Teile nötig sind und wie groß jedes ist; das Modell wird in gleich große Teile geschnitten, so wenige wie möglich. Ein Teil darf in den Dateien auf der Seite liegen, wenn es dadurch passt. Die Verbinder, die aus einem Teil herausragen, zählen zu seiner Größe.
- **An von Ihnen angegebenen Stellen**: Wählen Sie die Achse, quer zu der geschnitten wird, und geben Sie die Stellen in Millimetern vom unteren Ende des Modells ein, durch Kommas getrennt (`100, 200` ergibt drei Teile).
  **Schräg** dreht die Schnitte um bis zu 60° um eine der beiden anderen Achsen (zum Beispiel ein Schnitt quer zu Z, schräg um X): Jeder schräge Schnitt verläuft an seiner Stelle durch die Mittellinie des Modells, gibt den Teilen mehr Klebefläche und verdeckt die Fuge auf einer geneigten Fläche besser. Verbinder stehen rechtwinklig zum Schnitt.

Die Schnittebenen werden bei geöffneter Karte als gestrichelte Linien um das Modell gezeichnet.

## Verbinder

An jeder Stelle, an der sich zwei Teile berühren, werden Verbinder gesetzt, und zwar dort, wo am meisten Platz ist: mindestens die **geringste Wandstärke** plus das **Spiel** plus ihre eigene Größe vom Außenrand entfernt und weit genug von jedem anderen Schnitt, sodass sich zwei Löcher nie treffen. Bei einer langen Fläche werden zwei Verbinder entlang verteilt, damit sich die Teile nicht drehen können.

- **Runde Zapfen**: ein Zapfen an einem Teil (an der Spitze abgefast), ein Loch am anderen.
- **Vierkant-Keile**: wie die Zapfen, aber eckig, sodass ein Teil nur in einer Richtung passt.
- **Schwalbenschwänze**: eine Zunge, die seitlich in eine Nut gleitet. Wo ein Ende der Nut auf einen anderen Schnitt träfe, endet der Schwalbenschwanz kurz davor und wird vom offenen Ende her eingeschoben. Schwalbenschwänze eignen sich für Schnitte in einer Richtung (eine Reihe von Scheiben); bei einem Raster verwenden Sie Zapfen oder Dübel.
- **Dübellöcher**: ein Loch auf jeder Seite; die Dübelstifte werden ebenfalls gedruckt (in der ZIP-Datei).
- **Magnettaschen**: eine Tasche auf jeder Seite für einen runden Magneten mit dem Durchmesser und der Dicke, die Sie angeben. Prüfen Sie die Pole, bevor Sie sie einkleben.
- **Keiner (kleben)**.

Das **Spiel** ist der Abstand auf jeder Seite zwischen einem Zapfen und seinem Loch (zu Beginn 0.2 mm). Es entspricht genau dem Wert, den Sie angeben: Runde Löcher werden etwas größer gemacht, damit ihre flachen Seiten, nicht ihre Ecken, diesen Abstand einhalten. Erhöhen Sie den Wert, wenn die Teile Ihres Druckers zu eng sitzen.

Hat eine Fuge keinen Platz für einen Verbinder (eine dünne Wand, eine kleine Berührungsfläche), zeigt die Karte das an: Kleben Sie diese Fuge.

## Teilenummern

Ist **Fugennummern auf beiden Seiten gravieren** aktiviert, erhält jede Fuge die Nummer ihrer beiden Teile, etwa `3-4`, 0.6 mm tief auf beiden Seiten graviert und auf jeder Seite richtig herum lesbar. Die Nummern beginnen mit 5 mm Höhe und werden bei Bedarf bis auf 2.5 mm kleiner; eine Fuge ohne Platz für ihre Nummer wird aufgelistet. Die Teile werden von der untersten Schicht nach oben nummeriert.

## Vorschau, herunterladen, Modell teilen

1. {{ui:Vorschau}} schneidet das Modell und zeigt, wie viele Teile, Fugen und Verbinder es gibt, ob jedes Teil die 3D-Druck-Prüfung besteht und auf das Druckbett passt, und listet die Größe jedes Teils auf. Ein Ring markiert in der Ansicht jeden Verbinder und jede Nummer.
2. {{ui:Die Teile herunterladen (.zip)}} speichert eine ZIP-Datei: je eine Datei pro Teil (STL oder 3MF, wie Sie unter **Dateien** wählen), jeweils auf dem Druckbett stehend; die Dübelstifte; und das **Montageblatt**, eine Abbildung der auseinandergezogenen Teile mit ihren Nummern (`assembly.svg` und `assembly.png`) und eine Liste der Teile und Fugen (`assembly.txt`).
3. {{ui:Modell teilen}} ersetzt in einem Schritt die ausgewählten Gruppen oder Komponenten im Modell durch die Teile, benannt wie auf dem Montageblatt: {{ui:Rückgängig}} stellt das Original wieder her. Dafür müssen die zu teilenden Gruppen oder Komponenten ausgewählt sein; das Herunterladen funktioniert für alles, was gedruckt wird.

## Verbinder selbst verschieben

Nach einer Vorschau können Sie mit **Verbinder von Hand** korrigieren, wo die Verbinder sitzen:

- {{ui:Einen verschieben}}: Klicken Sie in der Ansicht auf einen roten Ring (er wird grün), dann auf die Stelle am Schnitt, an die er soll.
- {{ui:Einen hinzufügen}}: Klicken Sie in der Ansicht an die Stelle, an die ein Verbinder soll. Er wird auf die Schnittebene gesetzt, die Ihr Klick erreicht, zwischen den beiden Teilen dort.
- {{ui:Einen entfernen}}: Klicken Sie auf einen roten Ring, um diesen Verbinder zu entfernen.

Jede Änderung wird wie die automatischen geprüft: Eine Stelle zu nah am Umriss, an einem anderen Schnitt oder an einem anderen Verbinder wird nicht gesetzt, und die Karte meldet das. {{ui:Wieder automatisch}} vergisst Ihre Stellen. Sie bleiben erhalten, solange Modell, Auswahl und Schnitte unverändert bleiben.

Eine Vorschau bleibt bestehen, bis sich Modell, Auswahl oder eine Einstellung ändert; danach fordert die Karte Sie auf, erneut eine Vorschau anzuzeigen.

:::note
Jedes Teil wird vor dem Herunterladen so geprüft, wie es die 3D-Druck-Prüfung täte. Ihr Slicer entscheidet weiterhin, wie jedes Teil gedruckt wird: Sehen Sie sich jedes dort an und drucken Sie zuerst eine Fuge, um zu sehen, wie Ihr Drucker mit dem Spiel umgeht.
:::
