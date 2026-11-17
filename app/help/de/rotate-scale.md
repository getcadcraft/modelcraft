---
title: Drehen und skalieren
summary: Drehen Sie Objekte um einen Punkt, durch Klicken oder durch Eingabe in Grad, und skalieren Sie sie gleichmäßig um einen Faktor.
keywords: Skalierungsgriffe, strecken, nicht gleichmäßig, je Achse, spiegeln, Spiegeln, gespiegelte Kopie, entlang spiegeln, drehen, wenden, Winkel, Grad, Winkelmesser, skalieren, Größe ändern, vergrößern, verkleinern, Faktor, gleichmäßiges Skalieren
from: 45cdcb49
---

## Drehen

{{ui:Drehen}} ({{key:Q}}) dreht die Auswahl um einen Mittelpunkt. Dafür sind drei Klicks nötig: der Mittelpunkt, eine Startrichtung und die Endrichtung.

1. Wählen Sie aus, was gedreht werden soll. Ist nichts ausgewählt, nimmt Drehen das Objekt, das Sie zuerst anklicken.
2. Drücken Sie {{key:Q}}. Ein Ring folgt dem Zeiger und zeigt die Ebene, in der Sie drehen.
3. Klicken Sie auf den Drehmittelpunkt.
   - Auf dem Boden oder im leeren Raum liegt der Ring flach (blau): Gedreht wird um eine senkrechte Achse, wie ein Gebäude auf seinem Grundstück gedreht wird.
   - Auf einer Fläche liegt der Ring in deren Ebene: Gedreht wird um die eigene Richtung der Fläche. Klicken Sie auf eine Wand, um etwas um eine waagerechte Achse zu drehen.
4. Klicken Sie auf einen Punkt, der festlegt, wo der Winkel beginnt, etwa entlang einer Kante des Objekts, das Sie drehen.
5. Bewegen Sie den Zeiger um den Mittelpunkt. Der Winkel erscheint in der Spitze und im Wertfeld ({{ui:Winkel}}). Er rastet in Schritten von 15° ein, wenn Sie nahe genug kommen.
6. Klicken Sie zum Beenden oder geben Sie den Winkel in Grad ein und drücken Sie {{key:Enter}}: `90`, `45`, `-30`.

   Positive Winkel drehen gegen den Uhrzeigersinn, von der Seite aus gesehen, zu der der Ring zeigt.

Drücken Sie während des Drehens {{key:Ctrl}} (oder {{key:Alt}}), um eine **Kopie** zu drehen und das Original stehen zu lassen, wie beim Verschieben; der Hinweis zeigt, ob Kopieren aktiv ist, und erneutes Drücken der Taste schaltet es aus. Geben Sie `3x` direkt nach einer gedrehten Kopie ein, für weitere Kopien um denselben Mittelpunkt.

Wie beim Verschieben verdreht das Drehen eines Teils zusammenhängender Geometrie die daran hängenden Flächen. Gruppieren Sie Dinge zuerst, um sie als Ganzes zu drehen.

:::note
Der Hinweis sagt, dass Pfeiltasten die Drehachse wählen, aber in dieser Version drehen sie vor dem ersten Klick stattdessen die Ansicht. Um die Achse zu wählen, klicken Sie den Mittelpunkt auf einer Fläche an, die in die gewünschte Richtung zeigt. Siehe [Noch nicht umgesetzt](topic:not-built-yet).
:::

## Skalieren

{{ui:Skalieren}} ({{key:S}}) ändert die Größe der Auswahl. Wählen Sie zuerst aus, was Sie skalieren möchten, und drücken Sie dann {{key:S}}: Kleine Quadrate (Griffe) erscheinen an den Ecken, Kanten und Seitenmitten ihres Rahmens.

### Strecken oder skalieren mit den Griffen

- Ein Griff an einer **Ecke** skaliert gleichmäßig in alle Richtungen, um die gegenüberliegende Ecke.
- Der Griff in der Mitte einer **Seite** streckt nur in deren Richtung, um die gegenüberliegende Seite: Ein Körper wird länger, ohne höher zu werden.
- Der Griff in der Mitte einer **Kante** des Rahmens streckt in die beiden Richtungen, die sie kreuzen.
- Halten Sie beim Klick auf einen Griff {{key:Ctrl}}, um stattdessen um die Mitte des Rahmens zu skalieren.

Klicken Sie auf einen Griff, bewegen Sie den Zeiger und klicken Sie erneut; oder klicken Sie auf den Griff, geben Sie einen Faktor ein (`2` verdoppelt, `0.5` halbiert) und drücken Sie {{key:Enter}}. Um jeder Richtung einen eigenen Faktor zu geben, geben Sie drei ein, für Rot, Grün und Blau: `2,1,0.5`. In einer geöffneten Gruppe gelten die eigenen Richtungen der Gruppe.

### Um einen beliebigen Punkt skalieren

Klicken Sie irgendwo außerhalb eines Griffs, um gleichmäßig um einen eigenen Punkt zu skalieren. Dafür sind drei Klicks nötig:

1. Wählen Sie aus, was Sie skalieren möchten. Ist nichts ausgewählt, nimmt Skalieren das Objekt, das Sie zuerst anklicken.
2. Drücken Sie {{key:S}}.
3. Klicken Sie auf den Punkt, der stehen bleibt (nicht auf einen Griff), etwa eine untere Ecke.
4. Klicken Sie auf einen Bezugspunkt. Sein Abstand zum ersten Punkt zählt als 1×.
5. Bewegen Sie den Zeiger auf den ersten Punkt zu oder von ihm weg. Der Faktor erscheint in der Spitze und im Wertfeld ({{ui:Skalieren}}).
6. Klicken Sie zum Beenden oder geben Sie einen Faktor ein und drücken Sie {{key:Enter}}: `2` verdoppelt die Größe, `0.5` halbiert sie.

### Auf eine exakte Größe skalieren

Um etwas auf eine exakte Länge zu bringen, berechnen Sie den Faktor: neue Länge geteilt durch aktuelle Länge. Im Modus mit drei Klicks rechnet das Wertfeld; daher geben Sie `4.2/3.6` ein, um eine 3.6 m lange Wand 4.2 m lang zu machen. Das Wertfeld eines Griffs akzeptiert nur einfache Zahlen: Berechnen Sie den Faktor vorher (4.2 geteilt durch 3.6 ist etwa 1.1667). Wählen Sie die Kante zuerst aus, um ihre aktuelle Länge in {{ui:Objektinfo}} abzulesen.

### Einen Import mit falscher Größe korrigieren

OBJ-Dateien haben keine Einheit; ein in Millimetern gezeichnetes Modell kommt daher 1000-mal zu groß an. Wählen Sie die importierte Gruppe aus, drücken Sie {{key:S}}, klicken Sie auf einen Eckgriff und geben Sie `0.001` ein und drücken Sie {{key:Enter}}. Für ein in Zoll gezeichnetes Modell geben Sie `0.0254` ein.

## Wissenswertes

- Skalieren um einen Punkt mit drei Klicks ist gleichmäßig. Um nur in eine Richtung zu strecken, verwenden Sie einen Seiten- oder Kantengriff (siehe oben).
- Das Skalieren einer Gruppe oder Komponente ändert nur die skalierte Kopie; andere Kopien einer Komponente behalten ihre Größe.
- Drücken Sie vor dem letzten Klick {{key:Esc}}, um abzubrechen.

## Spiegeln

{{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Entlang Rot spiegeln}}, {{ui:Entlang Grün spiegeln}} oder {{ui:Entlang Blau spiegeln}} spiegelt die Auswahl an Ort und Stelle durch die Mitte ihres Rahmens: Eine linksläufige Treppe wird zu einer rechtsläufigen. Flächen zeigen weiter nach außen, und eine Gruppe oder Komponente wird als Ganzes gespiegelt (ihr Inneres wird nicht neu geschrieben).

{{ui:Gespiegelte Kopie entlang Rot}} (und Grün, Blau) lässt das Original stehen und setzt eine gespiegelte Kopie daneben, über die gegenüberliegende Seite des Rahmens der Auswahl: die andere Tür eines Paars, der andere Flügel eines Gebäudes. Lose Geometrie, die dort anstößt, verbindet sich mit dem Original, wie anstoßende Geometrie es immer tut; machen Sie das Original zuerst zu einer Gruppe, um sie getrennt zu halten.

In einer geöffneten Gruppe sind Rot, Grün und Blau die eigenen Achsen der Gruppe.
