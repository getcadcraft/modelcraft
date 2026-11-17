---
title: Modifikatoren für ein Netz, eine Gruppe oder eine Komponente
summary: Ein Netz skalieren, spiegeln, anordnen, glätten, abschrägen, schneiden und biegen, ohne es zu verändern; eine Gruppe oder Komponente mit demselben Stapel wiederholen oder skalieren und bei Bedarf dauerhaft machen.
keywords: Modifikator, Modifikatoren, Stapel, Gruppe, Komponente, skalieren, backen, Quelle bearbeiten, zerstörungsfrei, spiegeln, Anordnung, radiale Anordnung, Unterteilung, Unterteilungsfläche, glätten, abschrägen, verfestigen, Dicke, boolesch, schneiden, verschieben, Rauschen, verschweißen, dezimieren, vereinfachen, Gitter, Käfig, Kurvenverformung, biegen, Schrumpfumhüllung, anwenden
from: dd5ec1cb
---

Ein **Modifikator** ändert, was ein Netz zeigt, ohne das Netz selbst zu verändern. Spiegeln Sie eine Hälfte eines Teils und modellieren Sie nur diese Hälfte; runden Sie einen Quader mit einer Unterteilungsfläche, und bearbeiten Sie weiter den Quader. Modifikatoren stehen in einem **Stapel** und wirken der Reihe nach, von oben nach unten. Was Sie sehen, exportieren, drucken und rendern, ist das Netz mit jedem eingeschalteten Modifikator.

## Einen Modifikator hinzufügen

1. Wählen Sie ein Netz aus. Im Arbeitsbereich Modell steht sein Bereich **Modifikatoren** in {{ui:Entity info}}; im Arbeitsbereich Netz steht er im Panel rechts.
2. Wählen Sie einen aus {{ui:Add a modifier…}}. Er kommt unten in den Stapel.
3. Ändern Sie seine Einstellungen unter seinem Namen. Längen nehmen dieselben Werte wie das Wertfeld, sodass `600mm`, `2'6"` und `(6m)/4` alle funktionieren.

Jede Änderung ist ein Schritt zum Rückgängigmachen: {{key:Mod+Z}} nimmt sie zurück.

## Die Schaltflächen an jedem Modifikator

- Das Kästchen schaltet ihn ein oder aus.
- Die Bildschirm-Schaltfläche zeigt oder verbirgt ihn in der Ansicht (er bleibt im Stapel).
- Die Kamera-Schaltfläche zeigt oder verbirgt ihn in gerenderten Bildern und Videos, sodass ein Modifikator nur für Renderings (oder nur für die Ansicht) sein kann.
- Die Pfeile verschieben ihn im Stapel nach oben oder unten. Die Reihenfolge zählt: Spiegeln und dann Unterteilen ergibt eine glatte Naht, Unterteilen und dann Spiegeln nicht.
- {{ui:Apply}} macht die Form zum Teil des Netzes: Die Modifikatoren darüber und dieser werden auf das Netz selbst angewendet und verlassen den Stapel. Es ist ein Schritt zum Rückgängigmachen.
- Das Kreuz entfernt ihn.

## Die Modifikatoren

| Modifikator | Wirkung |
| --- | --- |
| Skalieren | Skaliert um den Ursprung des Objekts, mit einem Faktor für Rot, Grün und Blau. Auch bei einer Gruppe oder Komponente. |
| Spiegeln | Fügt eine gespiegelte Kopie über Rot, Grün oder Blau durch den Ursprung des Netzes hinzu und verbindet die Hälften dort, wo sie sich treffen. |
| Anordnung | Kopiert in einer Reihe (ein Schritt von der eigenen Größe mal den Zahlen, die Sie angeben, plus ein fester Schritt), um eine Achse oder entlang einer Kurve im Modell. Eine Gruppe oder Komponente übernimmt die Reihe. |
| Unterteilungsfläche | Glättet das Netz durch Catmull-Clark-Unterteilung. Scharfe Kanten bleiben gefaltet. Renderings können mehr Stufen nutzen als die Ansicht. |
| Fase | Rundet jede Kante, die schärfer ist als der angegebene Winkel. |
| Verfestigen | Gibt einer Oberfläche eine Dicke und schließt den Rand. |
| Boolesch | Schneidet weg, verbindet oder behält die Überschneidung mit einem anderen Objekt im Modell. Beide müssen geschlossene Volumenkörper sein. |
| Verschiebung | Verschiebt die Oberfläche durch sanftes Rauschen nach innen oder außen. Derselbe Startwert ergibt jedes Mal dieselben Unebenheiten. |
| Verschweißen | Verbindet Eckpunkte, die näher als eine Strecke beieinander liegen. |
| Dezimieren | Behält einen Anteil der Dreiecke und entfernt die, die die Form am wenigsten ändern. |
| Glätten | Entspannt die Eckpunkte zu ihren Nachbarn hin. |
| Gitter | Biegt das Netz mit einem Käfig: Bewegen Sie die Punkte des Käfigs, und das Netz folgt. |
| Kurvenverformung | Biegt das Netz entlang einer Kurve im Modell, entlang Rot, Grün oder Blau. |
| Schrumpfumhüllung | Verschiebt jeden Eckpunkt auf den nächsten Punkt eines anderen Objekts. |

## Auf einer Gruppe oder Komponente

Eine Gruppe oder Komponente kann ebenfalls ein Rezept behalten. So kann der Schirm einer Lampe eine **Skalierung** und eine **Anordnung** eines einzelnen Schirms sein; ändern Sie eine Zahl, ändert sich die Lampe.

1. Wählen Sie eine Gruppe oder Komponente aus. In {{ui:Entity info}} listet ihr Bereich **Modifikatoren** den Stapel auf (anfangs leer).
2. Wählen Sie {{ui:Scale}} oder {{ui:Array}} aus {{ui:Add a modifier…}}. Die Gruppe wird zu einer Komponente, die **das Original ist, durch den Stapel platziert**. Das Original bleibt erhalten: Bearbeiten Sie es, und jede Kopie folgt sofort.
3. Skalieren nimmt einen Faktor für Rot, Grün und Blau (`1, 1, 2` verdoppelt die Höhe). Anordnung nimmt die Anzahl der Kopien, einen Schritt als Anteil der bisherigen Größe des Ergebnisses und einen zusätzlichen Schritt in Längen.

Der Stapel läuft von oben nach unten auf den eigenen Achsen des Originals um dessen Ursprung, daher zählt die Reihenfolge: Eine Anordnung von drei Kopien im Abstand von 3 m, danach Skalieren 2 auf Rot, setzt die Kopien 6 m auseinander; zuerst Skalieren und dann die Anordnung hält sie 3 m auseinander. Das Kästchen, die Pfeile und das Kreuz funktionieren wie bei einem Netz. Die Ansichts- und Kamera-Schaltflächen sowie Anwenden bei einem einzelnen Modifikator funktionieren nicht, weil ein Stapel auf einer Gruppe eine Einheit ist.

- {{ui:Edit source}} öffnet das Original an Ort und Stelle. Änderungen erscheinen in jeder Kopie; beim Schließen kehren Sie dorthin zurück, wo Sie waren.
- {{ui:Bake modifiers}} macht das Ergebnis zu einfachen Kanten und Flächen und nimmt den Stapel weg, in einem Schritt zum Rückgängigmachen. Kopien, die sich überlappen, bleiben als eigene Geometrie; Backen ist keine Vereinigung.
- Kopien der Komponente teilen sich das Rezept; {{ui:Make unique}} trennt es (das Original bleibt geteilt).
- Der Stapel wird in der Datei gespeichert, mit Kopieren und Einfügen sowie mit Rückgängig übertragen, und Ungenutzte bereinigen behält das Original. Ein Programm, das Modifikatoren nicht kennt, zeigt die Kopien trotzdem.
- Bis zum Backen kann das Ergebnis nicht betreten, zerlegt, in der Größe geändert oder gestreckt werden: Es würde beim nächsten Änderungsschritt neu aufgebaut. Jede dieser Aktionen weist darauf hin.
- Die Grenzen sind 32 Modifikatoren und 1,000 Kopien. Eine Komponente, die zum Strecken gemacht wurde (Strecken), und ein Stapel können noch keine Definition teilen.

## Unterteilungsfläche

Unterteilung glättet ein Netz nach Catmull-Clark: Jede Fläche wird zu vierseitigen Flächen, und jede Stufe macht viermal so viele. Ein Quader mit zwei oder drei Stufen wirkt bereits wie eine abgerundete Form, und Sie bearbeiten weiter den Quader.

- **Stufen in der Ansicht** legt fest, wie glatt es ist.
- **Stufen in Renderings** legt fest, wie glatt gerenderte Bilder und Videos sind. Renderings können mehr Stufen nutzen als die Ansicht.
- **Renderings auf der echten glatten Fläche** setzt die Punkte eines gerenderten Netzes auf die Grenzfläche, der die Stufen zustreben. So rendern schon zwei Stufen so glatt wie viele.
- **Falten** halten Kanten scharf: Wählen Sie im Arbeitsbereich Netz Kanten aus und nutzen Sie {{ui:Crease}} (1 bleibt scharf, 0.5 rundet ein wenig, 0 ist glatt). Siehe [Ein Netz bearbeiten](topic:mesh-edit).
- **Die Ansichtsstufe bei einem großen Netz senken:** Wenn die gewünschten Stufen mehr Flächen ergäben, als dieser Computer für die Ansicht gut verarbeitet, zeigt die Ansicht eine niedrigere Stufe und sagt, welche. {{ui:Apply}} nutzt immer alle Stufen. Wie viele Flächen erlaubt sind, legt die Klasse Ihres Rechners in {{ui:Settings}} › Rendering › Ihr Rechner fest.
- Offene Ränder behalten ihre Ecken und bleiben auf der Linie ihrer Kanten.

## Mit einem Gitterkäfig biegen

1. Fügen Sie einen Modifikator {{ui:Lattice}} hinzu und drücken Sie {{ui:Add a lattice cage round the mesh}}. Ein Käfig aus 3 × 3 × 3 Punkten erscheint um das Netz, als Drahtlinien gezeichnet.
2. Öffnen Sie den Käfig im Arbeitsbereich Netz (doppelklicken Sie darauf) und verschieben Sie seine Punkte. Das Netz folgt weich.

:::tip
Ein Käfig ist ein Netz wie jedes andere: Blenden Sie ihn mit seinem Tag aus, wenn Sie fertig sind.
:::

## Große Netze

Kleine Stapel werden sofort berechnet. Ein großer wird im Hintergrund auf jedem Kern Ihres Computers berechnet; die Ansicht zeigt das letzte Ergebnis, bis das neue fertig ist. Boolesche Operationen laden den Volumenmodellierer beim ersten Mal; die Ansicht sagt das kurz an.

## Was Modifikatoren noch nicht tun

- Gewichte pro Eckpunkt (ein gemalter Abfall auf dem Netz) für Verschiebung, Glätten und Schrumpfumhüllung.
- Andere Modifikatoren als Skalieren und die lineare Anordnung auf Drücken/Ziehen-Geometrie (Gruppen und Komponenten): Wandeln Sie es zuerst in ein Netz um ({{ui:Convert to mesh}}). Spiegeln, eine runde oder Kurven-Anordnung, Biegen und Verjüngen bei Gruppen folgen später.
