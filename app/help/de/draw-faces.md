---
title: Flächen mit Linien, Rechtecken, Kreisen und Bögen zeichnen
summary: Flache Flächen auf dem Boden oder auf anderen Flächen erstellen, sie mit Linien teilen, sowie Kreise und Polygone mit der gewünschten Seitenzahl zeichnen.
keywords: zeichnen, Zeichnung, Linie, Rechteck, Kreis, Polygon, Versatz, versetzen, Rahmen, Umrandung, Bogen, Kurve, Spline, glatt, Kabel, Pfad, Ausbuchtung, Radius, Fläche, Grundriss, Grundfläche, teilen, Seiten, Segmente, Umriss, Bleistift
from: b6d7b7dd
---

Alles in ModelCraft beginnt als flache **Fläche**: eine von Kanten geschlossene Oberfläche. Sie können eine Fläche direkt mit {{ui:Rechteck}}, {{ui:Kreis}} oder {{ui:Polygon}} zeichnen oder sie Kante für Kante mit {{ui:Linie}} umreißen. Aus Flächen macht [Drücken/Ziehen](topic:push-pull) Volumenkörper.

## Ein Rechteck zeichnen

1. Drücken Sie {{key:R}}.
2. Klicken Sie auf die erste Ecke: auf dem Boden oder auf einer beliebigen Fläche des Modells.
3. Bewegen Sie den Zeiger. Das Rechteck bleibt auf dem Boden (oder auf der Fläche, auf der Sie begonnen haben), und das Wertfeld ({{ui:Bemaßungen}}) zeigt seine Breite und Tiefe. Der Tipp sagt „Quadrat“, wenn die Seiten gleich lang sind.

   Um auf einer anderen Ebene zu zeichnen, zeigen Sie darauf: Eine Fläche, die durch die erste Ecke verläuft, legt das Rechteck auf diese Fläche. Das Einfangen an einem Punkt außerhalb der Ebene (ein Endpunkt, eine Kante oder die blaue Achse) stellt das Rechteck durch beide Ecken auf. Fangen Sie wieder einen Punkt auf der ersten Ebene, legt es sich wieder flach hin. Um eine Ebene festzuhalten, drücken Sie eine Pfeiltaste: {{key:Up}} hält das Rechteck waagerecht (die blaue Ebene), {{key:Right}} auf der roten Ebene, {{key:Left}} auf der grünen Ebene. Drücken Sie dieselbe Taste erneut, um die Sperre zu lösen.
4. Klicken Sie auf die gegenüberliegende Ecke, oder geben Sie die beiden Maße durch ein Komma getrennt ein und drücken Sie {{key:Enter}}: `4m,3m`, `4000,3000` in einem Modell in Millimetern oder `12',10'6"` in Fuß und Zoll.

   Es erscheint eine Fläche mit vier Kanten rundherum.

Die eingegebenen Maße gehen in die Richtung, in die der Zeiger zeigte: Wenn er beim Eingeben links von der ersten Ecke steht, wächst das Rechteck nach links.

:::warning
Das Komma trennt die beiden Maße, daher kann es kein Dezimaltrennzeichen sein. Geben Sie `2.5m,3m` ein, niemals `2,5m`.
:::

## Einen Kreis oder ein Polygon zeichnen

1. Drücken Sie {{key:C}} für einen Kreis oder {{key:N}} für ein Polygon.
2. Um die Seitenzahl zu ändern, geben Sie sie vor dem Klicken ein: `12s` (oder nur `12`) und {{key:Enter}}. Ein Kreis beginnt mit 24 Seiten, ein Polygon mit 6. Der Tipp zeigt die aktuelle Zahl, und ModelCraft behält sie für den nächsten Kreis, bis Sie sie ändern oder das Werkzeug wechseln.
3. Klicken Sie auf den Mittelpunkt, auf dem Boden oder auf einer Fläche. Um ihn auf einer Fläche zu zentrieren, zeigen Sie mit dem Zeiger knapp innerhalb dieser Fläche auf deren Mitte („Zentrum der Fläche“) oder auf die Mitte einer ihrer Kanten („Mittelpunkt“). Der Kreis wird auf dieser Fläche gezeichnet, selbst auf dem schmalen Ende eines langen Quaders.
4. Klicken Sie, um den Radius festzulegen, oder geben Sie ihn ein ({{ui:Radius}} im Wertfeld) und drücken Sie {{key:Enter}}.

Ein Kreis ist ein Polygon mit vielen Seiten. Wenn Sie einen Kreis mit Drücken/Ziehen nach oben ziehen, werden seine Seiten geglättet, damit der Zylinder als eine einzige glatte Oberfläche wirkt.

## Einen Bogen zeichnen

1. Drücken Sie {{key:A}} ({{ui:Bogen}}).
2. Klicken Sie, wo der Bogen beginnt, dann, wo er endet (oder geben Sie die Länge zwischen beiden ein).
3. Bewegen Sie den Zeiger, um den Bogen nach außen zu wölben, und klicken Sie. Der Tipp sagt „Halbkreis“, wenn die Wölbung die Hälfte des Abstands zwischen den Enden beträgt. Oder geben Sie ein, wie weit die Mitte absteht: `2` und {{key:Enter}}.

Um stattdessen einen Bogen um einen Punkt zu zeichnen, verwenden Sie {{ui:Bogen (Zentrum)}}: Klicken Sie auf das Zentrum, dann dort, wo der Bogen beginnt (oder geben Sie den Radius ein), dann dort, wo er endet (oder geben Sie den Winkel in Grad ein, etwa `90`). Er rastet in 15°-Schritten ein.

Ein auf einer Fläche begonnener Bogen wird auf dieser Fläche gezeichnet. Andernfalls liegt er auf dem Boden oder steht aufrecht, wenn seine beiden Enden auf unterschiedlicher Höhe liegen. Ein Bogen hat 12 Segmente; geben Sie beim Zeichnen `24s` ein, um mehr zu erhalten. Bögen schließen Flächen genauso wie Linien: Ein Bogen quer über die Ecke eines Rechtecks teilt es.

## Eine glatte Kurve zeichnen

{{ui:Kurve}} zeichnet eine glatte Linie, die durch jeden Punkt verläuft, den Sie anklicken: ein Kabel, den Pfad eines Handlaufs, eine Gartenkante. Sie kann sich vom Boden lösen: Punkte rasten an Eckpunkten, Kanten und Flächen überall ein, und die Pfeiltasten sperren Rot, Grün oder Blau wie bei {{ui:Linie}}.

1. Klicken Sie in der Gruppe {{ui:Zeichnen}} auf {{ui:Kurve}}.
2. Klicken Sie die Punkte an, durch die die Kurve verläuft. Geben Sie `<0,0,1>` und {{key:Enter}} für einen Punkt 1 über dem letzten ein, `[x,y,z]` für eine exakte Stelle oder eine Länge für einen Punkt in dieser Entfernung in Richtung des Zeigers.
3. Drücken Sie {{key:Enter}} oder doppelklicken Sie, um abzuschließen. Klicken Sie den ersten Punkt erneut an, um die Kurve zu schließen. {{key:Backspace}} nimmt den letzten Punkt zurück.

Eine Kurve wird als ein einziges Stück ausgewählt. Zum Ändern wählen Sie sie aus und klicken in {{ui:Objektinfo}} auf {{ui:Punkte bearbeiten}}: Ihre Punkte erscheinen als Quadrate. Klicken Sie einen an, dann klicken Sie, wohin er soll (oder geben Sie `<dx,dy,dz>` ein). {{key:Esc}} setzt einen Punkt an seine alte Stelle zurück und beendet das Bearbeiten. Eine geschlossene flache Kurve ergibt eine Fläche; eine Kurve, die eine Fläche umreißt, lässt sich nicht mehr bearbeiten.

## Versatz: ein Rand innerhalb oder außerhalb einer Fläche

{{ui:Versetzen}} kopiert den Umriss einer Fläche um einen festen Abstand nach innen (oder außen), für einen Rahmen, eine Umrandung, eine Fensterbank oder das Glas eines Bildschirms.

1. Drücken Sie {{key:F}} und klicken Sie auf die Fläche, oder wählen Sie die Fläche zuerst aus und drücken Sie dann {{key:F}}.
2. Bewegen Sie den Zeiger in die Fläche für einen inneren Umriss oder aus ihr heraus für einen äußeren. Der neue Umriss folgt, und der Tipp zeigt den Abstand an.
3. Klicken Sie, oder geben Sie den Abstand ein und drücken Sie {{key:Enter}}.

Die Fläche wird in zwei geteilt: die innere Fläche und ein Rahmen darum (oder ein neuer Ring außen). Bearbeiten Sie eine davon sofort mit Drücken/Ziehen. Für einen Bildschirm zeichnen Sie den Quader, ziehen ihn auf seine Dicke, versetzen die Vorderfläche 30 mm nach innen und drücken die innere Fläche für das Glas ein wenig hinein. Löcher in der Fläche werden ebenfalls versetzt, und ein Bogen oder Kreis bleibt eine einzige (kleinere oder größere) Kurve.

- **Doppelklicken** Sie mit {{ui:Versetzen}} auf eine Fläche, um sie erneut um den letzten Abstand zu versetzen.
- **Kanten:** Wählen Sie eine Kette zusammenhängender Kanten in einer Ebene (zum Beispiel die beiden Linien eines L), drücken Sie {{key:F}}, bewegen Sie den Zeiger zur gewünschten Seite und geben Sie den Abstand ein: Eine parallele Kopie wird mit auf Gehrung geschnittenen Ecken gezeichnet.
- Wenn der Abstand mehr erlaubt, als die Fläche zulässt, meldet ModelCraft das und zeichnet nichts.

## Bögen, Kreise und Polygone sind Kurven

Klicken Sie auf ein beliebiges Segment eines Bogens, eines Kreises oder eines Polygons, und die ganze Kurve wird ausgewählt. {{ui:Objektinfo}} zeigt dann ihren Radius, ihre Segmente, ihren Winkel (bei Bögen) und ihre Länge. Geben Sie dort einen neuen Radius ein, um sie um ihren Mittelpunkt zu vergrößern oder zu verkleinern; Flächen in ihrer Ebene folgen. Sobald die Fläche einer Kurve gedrückt oder gezogen wurde, bleibt ihr Radius unverändert.

## Mit Linien zeichnen

1. Drücken Sie {{key:L}}.
2. Klicken Sie, wo die Linie beginnt.
3. Klicken Sie, wo sie endet, oder geben Sie eine Länge ein und drücken Sie {{key:Enter}}. Die eingegebene Länge geht in die Richtung, die der Zeiger anzeigt.
4. Klicken Sie weiter. Jeder Klick beginnt die nächste Linie am Ende der letzten.
5. Schließen Sie den Umriss, indem Sie den ersten Punkt erneut anklicken. Bilden die Linien eine flache Schleife, füllt sie sich mit einer Fläche, und das Werkzeug hört auf, Linien aneinanderzureihen. Drücken Sie jederzeit {{key:Esc}}, um anzuhalten.

Linien folgen den roten, grünen und blauen Richtungen, wenn Sie ihnen nahe kommen. Die Linie färbt sich in dieser Farbe, und der Tipp sagt „Auf roter Achse“. Siehe [Ableitung und Einfangen](topic:inference), um eine Richtung zu sperren und an Punkte einzufangen.

### Wohin eine Linie geht, wenn sie nichts berührt

- Eine Linie, die auf einer Fläche beginnt, bleibt in der Ebene dieser Fläche.
- Eine Linie, die auf dem Boden oder im leeren Raum beginnt, bleibt auf der Höhe ihres Startpunkts. Wenn Sie das Modell kantenseitig betrachten, geht sie stattdessen in die vertikale Ebene, die Ihnen zugewandt ist.
- Um eine Linie zu einem exakten Ort zu zeichnen, geben Sie einen Punkt ein: `[x,y,z]` für einen Punkt im Modell oder `<dx,dy,dz>` für einen Versatz vom Start. Siehe [Exakte Maße eingeben](topic:value-box).

## Eine Fläche teilen

Zeichnen Sie eine Linie quer über eine Fläche, von einer Kante zur anderen (oder von Kante zu Kante über andere Linien). Die Fläche wird in zwei Flächen geteilt. Jede behält ihre Seite und Farbe. Dasselbe funktioniert mit einem Rechteck oder Kreis, der auf einer Fläche gezeichnet wird: Die Form wird zu einer eigenen Fläche innerhalb der größeren, die nun ein Loch hat.

So legen Sie Räume auf einer Decke an, ein Fenster in einer Wand oder eine Stufe auf einer Treppe: Zeichnen Sie den Umriss auf die Fläche, dann drücken oder ziehen Sie die neue Fläche.

## Flächen zeigen in die falsche Richtung

Jede Fläche hat eine Vorder- und eine Rückseite. Die Rückseite erscheint blaugrau. Auf dem Boden gezeichnete Flächen zeigen nach oben; auf einer anderen Fläche gezeichnete Flächen zeigen in dieselbe Richtung wie diese.

Wenn eine Fläche ihre Rückseite zeigt, wo Sie die Vorderseite erwarten, wählen Sie sie aus und klicken in {{ui:Objektinfo}} auf {{ui:Fläche umkehren}}.

## Was Sie beim Zeichnen sehen

- Eine farbige Markierung dort, wo der Zeiger einfängt, und ihr Name im Tipp unten links.
- Eine Vorschau der Linie oder Form.
- Die aktuellen Maße im Wertfeld. Sie können jederzeit darüber schreiben.

## Wenn die Form nicht dort ist, wo Sie es erwartet haben

- Auf einem Touchscreen siehe [Fehlerbehebung](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Wenn eine Linie an etwas weit dahinter eingefangen hat, drehen Sie die Ansicht ein wenig: Punkte hinter einer Fläche fangen nie ein, Punkte an ihrer Kante aber schon.
- Drücken Sie {{key:Mod+Z}}, um die letzte Form rückgängig zu machen. Ein Rückgängig-Schritt entfernt eine Linie oder eine Form.
