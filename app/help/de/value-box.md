---
title: Exakte Maße im Wertfeld eingeben
summary: Alle Arten, Längen, Größen, Punkte, Versätze, Winkel, Seiten und Kopien einzugeben, und wie Einheiten und Zahlen ohne Einheit gelesen werden.
keywords: wertfeld, maßfeld, vcb, eingeben, exakt, bemaßung, länge, einheiten, fuß, zoll, metrisch, millimeter, koordinaten, versatz, anordnung, seiten, winkel, dezimalkomma
from: 0148dc3d
---

Das Wertfeld sitzt unten in der Statusleiste, mit einer Beschriftung, die sich mit dem Werkzeug ändert. Während Sie arbeiten, zeigt es die aktuelle Größe; jederzeit können Sie eine genaue eingeben.

## So geben Sie Werte ein

1. Beginnen Sie die Aktion mit einem Klick (der erste Eckpunkt, die Fläche, der Punkt, von dem aus Sie verschieben).
2. Geben Sie ein. Sie müssen nicht ins Wertfeld klicken: Eine Ziffer oder eines der Zeichen `. , - ' " [ < * /` leitet Ihre Eingabe dorthin.
3. Drücken Sie {{key:Enter}}.

Drücken Sie im Wertfeld {{key:Esc}}, um es zu leeren und zur Ansicht zurückzukehren. Auf einem Touchscreen tippen Sie auf das Wertfeld, um die Tastatur einzublenden.

Wenn ModelCraft Ihre Eingabe nicht lesen kann, zeigt die Statusleiste „Geben Sie eine Länge ein, z. B. 3m, 10'6" oder 4m,3m.“ Kann das Werkzeug die Eingabe nicht verwenden, steht dort „Das hat nicht funktioniert: …“ mit dem Grund.

## Längen

| Eingabe | Bedeutet |
|---|---|
| `3m` `320cm` `3200mm` | Meter, Zentimeter, Millimeter |
| `10'` `10ft` `10 feet` | Fuß |
| `6"` `6in` `6 inches` | Zoll |
| `10'6"` `10' 6"` `10'-6 1/2"` | Fuß und Zoll, mit Bruch |
| `6 1/2"` `6-1/2"` `3/4"` | Zoll mit Bruch |
| `1.5ft` `.5m` | Dezimalzahlen mit Einheit |
| `120` | Eine Zahl ohne Einheit, in der Einheit des Modells |

**Eine Zahl ohne Einheit verwendet die Einheit des Modells**, wie in der Auswahl unten rechts angezeigt: Zoll in einem Modell mit Fuß und Zoll (also ist `120` 10 Fuß), Millimeter in einem Millimeter-Modell und so weiter. Eine eingegebene Einheit gilt immer, unabhängig von der Einheit des Modells. Typografische Anführungszeichen und Prime-Zeichen (’ ” ′ ″) werden ebenfalls als Fuß und Zoll gelesen.

:::warning
Verwenden Sie für Dezimalstellen immer einen **Punkt**: `2.5m`. Ein Komma trennt zwei Werte, daher bedeutet `2,5` 2 und 5 (zwei Werte), unabhängig von Ihren Spracheinstellungen.
:::

## Berechnungen

Jede Länge kann eine Berechnung sein: Addieren mit `+`, subtrahieren mit `-`, multiplizieren mit `*`, dividieren mit `/`, und Klammern sind möglich. Kein Taschenrechner nötig.

| Eingabe | Bedeutet |
|---|---|
| `2.5/3` | Ein Drittel von 2.5 (in der Einheit des Modells) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" in einem Modell mit Fuß und Zoll |
| `3m-25cm` | 2.75 m |

Eine Zahl ohne Einheit gilt in der Einheit des Modells, wenn sie eine Länge ist (`2.5/3` in einem Meter-Modell ist 0.833 m), und als einfacher Faktor, wenn sie eine Länge multipliziert oder dividiert (`2*450mm`). Auch Winkel und Faktoren können berechnet werden: `90/2` ist 45°. Zwei multiplizierte Längen ergeben eine Fläche, keine Länge, daher wird `2m*3m` abgelehnt.

Wenn ModelCraft es nicht berechnen kann, sagt die Statusleiste, was falsch ist und wo, zum Beispiel „Division durch null (Zeichen 4).“ Auch eine Klammer startet das Wertfeld, sodass Sie mit `(` beginnen können.

Diese behalten ihre eigene Bedeutung: `/3`, `3x` und `*3` nach einer Kopie, `24s` für Seiten und `/3` bei gewählter Kante (sie [teilt die Kante](topic:divide)).

## Pro Werkzeug

| Werkzeug | Beschriftung | Eingabe |
|---|---|---|
| {{ui:Linie}} | {{ui:Länge}} | Eine Länge (in Richtung des Zeigers), oder ein Punkt oder Versatz (unten) |
| {{ui:Rechteck}} | {{ui:Bemaßungen}} | Zwei Längen: `4m,3m`, `12',10'`. Ein Semikolon funktioniert auch: `4m;3m` |
| {{ui:Kreis}}, {{ui:Polygon}} | {{ui:Seiten}}, dann {{ui:Radius}} | Vor dem ersten Klick die Anzahl der Seiten: `12s` oder `12` (3 bis 999). Danach der Radius |
| {{ui:Drücken/Ziehen}} | {{ui:Distanz}} | Eine Länge. Eine negative geht in die andere Richtung |
| {{ui:Verschieben}} | {{ui:Distanz}} | Eine Länge (in Richtung des Zeigers), oder ein Punkt oder Versatz. Nach einer Kopie: `3x`, `*3`, `/3` |
| {{ui:Drehen}} | {{ui:Winkel}} | Grad: `90`, `-45`, `22.5` |
| {{ui:Skalieren}} | {{ui:Skalieren}} | Ein Faktor über 0: `2`, `0.5`, `1.25` |
| {{ui:Maßband}} | {{ui:Versetzen}} oder {{ui:Länge}} | Eine Länge |
| {{ui:Teilen}} | {{ui:Teile}} | Wie viele gleiche Teile: `5`, `5s` oder `/5` (2 bis 1000). Siehe [Eine Kante oder Kurve in gleiche Teile teilen](topic:divide) |
| {{ui:Bemaßung}} | {{ui:Versetzen}}, dann {{ui:Länge}} | Wo die Maßlinie liegt; direkt nach dem Setzen ändert eine neue Länge die Größe des Modells |
| {{ui:Wählen}} | {{ui:Wert}} | Bei einer gewählten Bemaßung oder Kante ändert eine neue Länge die Größe des Modells. Siehe [Bemaßen und Größe ändern](topic:dimensions) |

## Punkte und Versätze

Für {{ui:Linie}} und {{ui:Verschieben}}, nach dem ersten Klick:

- `[x,y,z]` springt zu diesem genauen Punkt im Modell (in den eigenen Achsen der Gruppe, wenn Sie innerhalb einer Gruppe bearbeiten). Beispiel: `[0,0,3m]` ist 3 m senkrecht über dem Ursprung.
- `<dx,dy,dz>` geht so weit vom ersten Punkt entlang Rot, Grün und Blau. Beispiel: `<0,0,10'>` ist 10 Fuß senkrecht nach oben.

Jeder der drei Werte kann seine eigene Einheit haben: `<12',0,6">`.

## Kopien nach einem Verschieben

Direkt nach einer Kopie mit {{ui:Verschieben}}:

| Eingabe | Erzeugt |
|---|---|
| `3x` oder `*3` | 3 Kopien hintereinander im gleichen Abstand |
| `/3` | 3 Kopien, gleichmäßig verteilt vom Original bis zur ersten Kopie |

Bis zu 500 Kopien. Siehe [Verschieben, kopieren und Anordnungen erstellen](topic:move-copy#a-row-of-copies).

## Eingegebene Längen brauchen eine Richtung

Eine einzelne eingegebene Länge geht in die Richtung, in die der Zeiger vom ersten Klick aus zeigt. Wenn Sie direkt nach dem Klick eingeben, noch bevor Sie den Zeiger bewegt haben, gibt es noch keine Richtung, und nichts geschieht. Bewegen Sie den Zeiger ein wenig in die gewünschte Richtung und geben Sie dann ein.

## Die Einheit des Modells

Ändern Sie die Einheit in der Auswahl unten rechts: {{ui:ft und in}}, in, ft, yd, mi, mil, µm, mm, cm, m oder km, soweit sie in {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} eingeschaltet sind (die eigene Einheit des Modells ist immer dabei). Eine Länge, die mit der Einheitenkennzeichnung einer Einheit eingegeben wird, wird in dieser Einheit gelesen. Siehe [Einheiten, eingegebene Werte und Einheitenlisten](common:unit-lists). Die Einheit ändert, wie Längen angezeigt werden und wie Zahlen ohne Einheit gelesen werden; das Modell bleibt gleich groß. Die Einheit wird in der Datei gespeichert.

So werden Größen angezeigt:

| Einheit | Längen | Flächen | Volumen |
|---|---|---|---|
| ft und in | `10' 6 1/2"` (auf 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² ab 0.01 m², sonst mm² | m³ ab 0.01 m³, sonst mm³ |

Ein neues Modell beginnt in Fuß und Zoll, wenn die Sprache des Browsers auf eine US-Region eingestellt ist (sowie Liberia und Myanmar), und sonst überall in Millimetern. Eine in {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} mit Stern markierte Einheit wird stattdessen verwendet, wenn ModelCraft sie hat. Oder ändern Sie die Auswahl nach {{ui:Neu}}.
