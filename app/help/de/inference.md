---
title: Ausrichtung und Fang
summary: Was die farbigen Markierungen bedeuten, welcher Fang gewinnt und wie Sie eine Richtung mit den Pfeiltasten oder Shift sperren.
keywords: Ausrichtung, Fang, Fangen, Endpunkt, Mittelpunkt, Flächenmitte, Zentrum, auf Kante, auf Fläche, Achse, rote Achse, grüne Achse, blaue Achse, parallel, senkrecht, sperren, Shift, Objektfang
from: e78984e9
---

Während ein Zeichen- oder Bearbeitungswerkzeug arbeitet, schaut ModelCraft, was unter dem Zeiger liegt, und fängt am nützlichsten Punkt in der Nähe ein. Eine Markierung zeigt, was gefunden wurde, und der Hinweis unten links benennt es.

## Markierungen und Hinweise

| Tipp | Markierung | Fängt ein an |
|---|---|---|
| Endpunkt | Grüner Kreis | Das Ende einer Kante |
| Mittelpunkt | Cyan-Kreis | Die Mitte einer Kante |
| Flächenmitte | Blauer Kreis | Die Mitte der Fläche unter dem Zeiger |
| Hilfspunkt | Grau | Ein Hilfspunkt, den das Maßband hinterlassen hat |
| Ursprung | Ockergelb | Dort, wo sich die rote, grüne und blaue Achse treffen |
| Auf roter Achse / Auf grüner Achse / Auf blauer Achse | Eine Linie in dieser Farbe | Eine Linie von Ihrem Startpunkt in dieser Richtung |
| Parallel zu Kante / Senkrecht zu Kante | Magentafarbene Linie | Eine Linie von Ihrem Startpunkt, parallel oder senkrecht zur gemerkten Kante (siehe unten) |
| Gesperrt | Magentafarbene Linie | Eine Richtung, die Sie mit einer Pfeiltaste oder {{key:Shift}} gesperrt haben |
| Auf Kante | Rotes Quadrat | Irgendwo entlang einer Kante |
| Auf Hilfslinie | Grau | Irgendwo entlang einer Hilfslinie |
| Auf Fläche | Blaue Raute | Irgendwo auf einer Fläche |
| Auf Ebene | keine | Die Ebene, auf der Sie begonnen haben, wenn der Zeiger über leerem Raum ist |
| Auf dem Boden | keine | Der Boden (die rot-grüne Ebene), wenn dort nichts anderes ist |

Wenn eine Achsenlinie von Ihrem Startpunkt eine Kante oder Hilfslinie kreuzt, fängt ModelCraft am Kreuzungspunkt ein, und der Hinweis nennt beides, etwa „Auf roter Achse, auf Kante“.

## Welcher Fang gewinnt

1. **Punkte** innerhalb von etwa 12 Pixeln: zuerst Endpunkte, dann Hilfspunkte, Mittelpunkte, die Flächenmitte unter dem Zeiger und der Ursprung.
2. **Richtungen** vom Startpunkt: die rote, grüne und blaue Achse sowie parallel oder senkrecht zur gemerkten Kante.
3. **Auf einer Kante** oder einer Hilfslinie.
4. **Auf einer Fläche.**
5. **Die Zeichenebene** oder der Boden.

Dinge hinter einer Fläche werden nie eingefangen. Drehen Sie die Ansicht mit {{ui:Orbit}}, bis Sie den gewünschten Punkt sehen.

## Von einem Punkt aus auf einer Fläche zeichnen

Ein {{ui:Rectangle}}, {{ui:Circle}} oder {{ui:Polygon}}, das an einer Ecke, einem Mittelpunkt, einer Kante oder der Flächenmitte beginnt, wird **in der Ebene der Fläche unter dem Zeiger** gezeichnet und schneidet diese Fläche. Eine Kante gehört zu zwei Flächen, daher entscheidet die Seite der Kante, auf der der Zeiger liegt. Um auf dem Ende eines langen Quaders zu zeichnen, beginnen Sie in der Mitte einer seiner Kanten, wobei der Zeiger knapp innerhalb der Endfläche liegt.

## Parallel und senkrecht

ModelCraft merkt sich die **letzte Kante, über die der Zeiger vor Ihrem ersten Klick gefahren ist**. Das Starten an einer Ecke oder auf einer Kante zählt als Überfahren dieser Kante. Sobald das Werkzeug arbeitet, ersetzen andere Kanten, über die Sie fahren, diese Merkung nicht.

Um eine Linie parallel zu einer bestehenden Kante zu zeichnen:

1. Drücken Sie {{key:L}} und fahren Sie über die Kante, der Sie entsprechen wollen.
2. Bewegen Sie sich zum Startpunkt, möglichst ohne dabei andere Kanten zu kreuzen, und klicken Sie.
3. Bewegen Sie sich in die Richtung parallel zu dieser Kante. Die Linie wird magenta und der Hinweis zeigt „Parallel zu Kante“. Senkrecht funktioniert genauso, innerhalb der Ebene, auf der Sie zeichnen.

Wenn die falsche Kante gemerkt wurde, drücken Sie {{key:Esc}}, fahren Sie über die richtige Kante und beginnen Sie neu.

## Eine Richtung sperren

Nach dem ersten Klick eines Werkzeugs können Sie den nächsten Punkt auf einer Linie halten:

| Taste | Sperrt auf |
|---|---|
| {{key:Right}} | Die rote Achse |
| {{key:Left}} | Die grüne Achse |
| {{key:Up}} | Die blaue Achse (senkrecht nach oben) |
| {{key:Down}} | Parallel zur gemerkten Kante (siehe oben) |

Drücken Sie dieselbe Pfeiltaste erneut, um zu entsperren. Die Statusleiste zeigt „Auf die rote Achse gesperrt. Dieselbe Pfeiltaste drücken, um zu entsperren.“

Gesperrt gleitet der Punkt auf der Linie zu der Stelle, wohin der Zeiger zeigt, und richtet sich weiterhin an Punkten aus, über die Sie fahren. Fahren Sie etwa über die Ecke eines anderen Quaders, um eine Linie entlang Rot genau so weit zu zeichnen, wie diese Ecke liegt.

**{{key:Shift}}** sperrt die Richtung, auf die Sie gerade eingefangen sind (eine Achse oder parallel), solange Sie die Taste halten. Lassen Sie sie los, um zu entsperren.

Sperren funktionieren bei {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} und {{ui:Tape}}. Vor dem ersten Klick drehen die Pfeiltasten stattdessen die Ansicht.

## In einer Gruppe

Während Sie in einer Gruppe oder Komponente bearbeiten, sind die Achsen die eigenen Achsen der Gruppe. Sie wandern mit ihr und drehen sich mit ihr, falls sie gedreht wurde. Fänge finden weiterhin Punkte und Kanten außerhalb der Gruppe, sodass Sie Dinge am restlichen Modell ausrichten können.
