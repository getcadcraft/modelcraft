---
title: Werkzeugliste
summary: Jedes ModelCraft-Werkzeug mit seiner Taste, was jeder Klick bewirkt und was Sie während der Arbeit in das Wertfeld eingeben können.
keywords: Werkzeuge, Symbolleiste, Befehle, Liste, Linie, Rechteck, Kreis, Polygon, Versetzen, Bogen, Kurve, Spline, Folge mir, Sweep, 2-Punkt-Bogen, Bogen aus Mittelpunkt, Wählen, Drücken Ziehen, Verschieben, Drehen, Skalieren, Radierer, Maßband, Bemaßung, Orbit, Pan, Zoom, Komponente platzieren
from: e08a274f
---

Der Tipp in der Statusleiste sagt immer, was das aktuelle Werkzeug als Nächstes erwartet. {{key:Esc}} bricht ab, was ein Werkzeug gerade tut.

## Zeichenwerkzeuge

| Werkzeug | Taste | Klicks | Im Wertfeld eingeben |
|---|---|---|---|
| {{ui:Linie}} | {{key:L}} | Start, dann jeder weitere Punkt. Hört auf, wenn eine Fläche sich schließt, oder bei {{key:Esc}} | Eine Länge zum Zeiger; `[x,y,z]` ein Punkt; `<dx,dy,dz>` ein Versatz ({{ui:Länge}}) |
| {{ui:Rechteck}} | {{key:R}} | Erste Ecke (Boden oder Fläche), gegenüberliegende Ecke | Breite und Tiefe: `4m,3m` ({{ui:Bemaßungen}}) |
| {{ui:Kreis}} | {{key:C}} | Mittelpunkt (Boden oder Fläche), ein Punkt am Rand | Vor dem ersten Klick: Seiten, `24s` oder `24` ({{ui:Seiten}}). Danach: der Radius ({{ui:Radius}}) |
| {{ui:Polygon}} | {{key:N}} | Mittelpunkt, eine Ecke | Wie bei Kreis; beginnt mit 6 Seiten |
| {{ui:Bogen}} | {{key:A}} | Start, Ende, dann die Wölbung | Die Länge der Sehne nach dem Start ({{ui:Länge}}); die Wölbung nach dem Ende ({{ui:Wölbung}}); `12s` für Segmente |
| {{ui:Winkelmesser}} | — | Mittelpunkt, 0°-Punkt, dann der Winkel | Der Winkel in Grad ({{ui:Winkel}}) |
| {{ui:Folge mir}} | — | Einen Pfad wählen, dann auf die Fläche klicken (oder erst auf die Fläche, dann auf eine Kante des Pfads) | — |
| {{ui:Farbeimer}} | {{key:B}} | Eine Fläche, Gruppe oder Komponente | — ({{key:Ctrl}} zusammenhängend, {{key:Shift}} alles in dieser Farbe, {{key:Alt}} eine Farbe aufnehmen) |
| {{ui:Versetzen}} | {{key:F}} | Eine Fläche (oder vorher Fläche oder Kanten wählen), dann die Seite und der Abstand | Der Abstand ({{ui:Distanz}}); in die Fläche hinein ist nach innen |
| {{ui:Kurve}} | — | Punkte, die die Kurve durchläuft; {{key:Enter}} oder ein Doppelklick beendet | Eine Länge entlang des Zeigers, `[x,y,z]` oder `<dx,dy,dz>` für den nächsten Punkt |
| {{ui:Bogen (Zentrum)}} | — | Mittelpunkt, Start, dann das Ende | Der Radius nach dem Mittelpunkt; der Winkel in Grad nach dem Start; `12s` für Segmente |

## Bearbeitungswerkzeuge

| Werkzeug | Taste | Klicks | Im Wertfeld eingeben |
|---|---|---|---|
| {{ui:Wählen}} | {{key:Space}} | Klicken, Doppelklicken, Dreifachklicken, ein Fenster ziehen. Siehe [Dinge wählen](topic:select) | Mit einer gewählten Bemaßung oder Kante: eine neue Länge, die das Modell neu dimensioniert |
| {{ui:Drücken/Ziehen}} | {{key:P}} | Die Fläche, dann der Abstand. Doppelklick auf eine Fläche wiederholt den letzten Abstand | Ein Abstand; negativ geht in die andere Richtung ({{ui:Distanz}}) |
| {{ui:Verschieben}} | {{key:M}} | Von einem Punkt zu einem Punkt. {{key:Ctrl}} oder {{key:Alt}} gedrückt halten, um zu kopieren | Ein Abstand zum Zeiger, `<dx,dy,dz>` oder `[x,y,z]` ({{ui:Distanz}}). Nach einer Kopie: `3x` oder `/3` |
| {{ui:Drehen}} | {{key:Q}} | Mittelpunkt (auf einer Fläche, um in ihrer Ebene zu drehen), Startrichtung, Endrichtung | Der Winkel in Grad ({{ui:Winkel}}) |
| {{ui:Skalieren}} | {{key:S}} | Der Punkt, der bleibt, ein Bezugspunkt, die neue Größe | Ein Faktor: `2`, `0.5` ({{ui:Skalieren}}) |
| {{ui:Radierer}} | {{key:E}} | Klicken oder ziehen über Kanten, Gruppen, Hilfslinien und Bemaßungen | nichts |
| {{ui:Maßband}} | {{key:T}} | Von einer Kante: eine parallele Hilfslinie. Von einem Punkt: misst und hinterlässt einen Hilfspunkt | Der Versatz ({{ui:Versetzen}}) oder der Abstand ({{ui:Länge}}) |
| {{ui:Bemaßung}} | {{key:D}} | Zwei Ecken (oder eine Kante), dann wohin die Maßlinie geht. Siehe [Bemaßen und neu dimensionieren](topic:dimensions) | Der Versatz ({{ui:Versetzen}}). Direkt danach: eine neue Länge, die das Modell neu dimensioniert |

{{ui:Verschieben}}, {{ui:Drehen}} und {{ui:Skalieren}} arbeiten auf der Auswahl. Ist nichts gewählt, nehmen sie zuerst das, worauf Sie klicken (eine Fläche bringt ihre Kanten mit).

## Kamerawerkzeuge

| Werkzeug | Taste | Ziehen zum |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Drehen um den Teil des Modells unter dem Zeiger ({{key:Shift}} verschiebt die Ansicht) |
| {{ui:Pan}} | {{key:H}} | Die Ansicht verschieben |
| {{ui:Zoom}} | {{key:Z}} | Zoomen: nach oben hinein, nach unten hinaus |
| {{ui:Grenzen}} | {{key:Shift+Z}} | (eine Schaltfläche, kein Werkzeug) Das ganze Modell einpassen |

Mit einer Maus brauchen Sie diese selten: Mit der mittleren Taste ziehen dreht, mit der rechten Taste ziehen verschiebt, und das Mausrad zoomt mit jedem Werkzeug. Siehe [Drehen, verschieben und zoomen](topic:orbit-pan-zoom).

## Organisieren

| Schaltfläche | Taste | Tut |
|---|---|---|
| {{ui:Komponente}} | {{key:G}} | Macht die Auswahl zu einer Komponente |
| {{ui:Gruppe}} | {{key:Shift+G}} | Macht die Auswahl zu einer Gruppe |
| {{ui:Zerlegen}} | keine | Macht die gewählten Gruppen und Komponenten wieder zu losen Geometrien |

## Komponente platzieren

Nicht in der Symbolleiste: Klicken Sie neben einer Komponente im Bereich {{ui:Komponenten}} auf {{ui:Platzieren}}. Klicken Sie einmal, wo der Ursprung der Komponente hin soll; danach kehrt das Werkzeug zu {{ui:Wählen}} zurück.
