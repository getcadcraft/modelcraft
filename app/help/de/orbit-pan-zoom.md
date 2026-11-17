---
title: Orbit, Pan und Zoom
summary: Bewegen Sie sich mit Maus, Trackpad, Touchscreen oder Tastatur um das Modell und springen Sie zu Standardansichten.
keywords: orbit, pan, zoom, langer Druck, drei Finger, zwei Finger, tippen, navigieren, Kamera, Ansicht, Ansicht drehen, Trackpad, Touch, pinch, mittlere Taste, Zoom Grenzen, Perspektive, parallel, Draufsicht, iso
from: 10d4d33a
---

Sie können die Kamera jederzeit bewegen, sogar mitten beim Zeichnen einer Linie oder beim Drücken einer Fläche: Das Werkzeug wartet an der Stelle, an der es war.

## Mit einer Maus mit drei Tasten

| Zu | So geht's |
|---|---|
| Orbit | Mit der mittleren Taste ziehen (das Rad drücken) |
| Pan | Mit der rechten Taste ziehen, oder {{key:Shift}} halten und mit der mittleren Taste ziehen. Das Drücken oder Loslassen von {{key:Shift}} während des Ziehens wechselt zwischen Orbit und Pan |
| Zoom | Am Rad drehen. Es zoomt zur Fläche unter dem Zeiger oder zum Punkt darunter in der Tiefe der Ansichtsmitte |
| Das ganze Modell sehen | {{key:Shift+Z}} oder {{ui:Grenzen}} |

Orbit dreht die Ansicht um den Teil des Modells unter dem Zeiger, sodass dieser Punkt an seinem Ort bleibt, während sich alles um ihn dreht. Über leerem Raum dreht sie sich um die Mitte der Ansicht. Pan behält den Punkt, den Sie gegriffen haben, unter dem Zeiger.

Um immer um die Mitte der Ansicht zu orbiten oder Orbit und Pan schneller oder langsamer zu machen, öffnen Sie {{ui:Einstellungen}} ({{key:Mod+,}}), Registerkarte {{ui:ModelCraft}}, **Orbit und Pan**. Die Geschwindigkeiten gelten für Maus, Trackpad, Touch und die Pfeiltasten.

Ein Rechtsklick ohne Ziehen tut nichts; ModelCraft hat kein Rechtsklick-Menü.

## Ohne mittlere Taste

Verwenden Sie die Kamerawerkzeuge in der Symbolleiste oder die Tastatur:

1. Drücken Sie {{key:O}} (oder klicken Sie {{ui:Orbit}}) und ziehen Sie mit der linken Taste, um zu orbiten. Halten Sie {{key:Shift}} während des Ziehens, um zu pannen.
2. Drücken Sie {{key:H}} (oder klicken Sie {{ui:Pan}}) und ziehen Sie, um zu pannen.
3. Drücken Sie {{key:Z}} (oder klicken Sie {{ui:Zoom}}) und ziehen Sie nach oben zum Vergrößern, nach unten zum Verkleinern.
4. Drücken Sie {{key:Space}}, um zu {{ui:Wählen}} zurückzukehren, oder drücken Sie die Taste des nächsten gewünschten Werkzeugs.

Die Kamerawerkzeuge ersetzen das Werkzeug, das Sie gerade verwenden. Um sich mitten in einem Vorgang umzusehen, ohne ihn zu verlieren, verwenden Sie stattdessen die Tastatur:

- Die Pfeiltasten orbiten.
- {{key:Shift}} mit den Pfeiltasten pannt.

Während ein Zeichenwerkzeug mitten in einem Vorgang ist (nach seinem ersten Klick), sperren die Pfeiltasten Richtungen, statt zu orbiten. Siehe [Hinweise und Einrasten](topic:inference#lock-a-direction).

## Auf einem Trackpad

Am einfachsten: Öffnen Sie {{ui:Einstellungen}} ({{key:Mod+,}}), Registerkarte {{ui:ModelCraft}}, und stellen Sie Scrollen auf **Trackpad** (oder lassen Sie es auf „Automatisch erkennen“). Dann wischen Sie mit zwei Fingern zum Orbiten, halten {{key:Shift}} und wischen zum Pannen, und ziehen mit einer Pinch-Geste zum Zoomen auseinander oder zusammen, ganz ohne Kamera-Schaltflächen. Siehe [ModelCraft-Einstellungen](topic:settings#scrolling-mouse-wheel-or-trackpad).

Wenn Scrollen auf **Mausrad** eingestellt ist:

:::mac
- **Zoom:** Mit zwei Fingern scrollen oder pinchen. Beides zoomt zum Zeiger.
- **Pan:** Mit zwei Fingern drücken (ein Sekundärklick) und die Finger unten halten, während Sie ziehen. Aktivieren Sie „Sekundärklick“ in den **Systemeinstellungen** unter **Trackpad**, falls der Zweifingerklick nichts bewirkt.
- **Orbit:** Drücken Sie {{key:O}} und ziehen Sie mit einem Finger, oder verwenden Sie die Pfeiltasten.
- Das Halten von {{key:Ctrl}} beim Klicken zählt in ModelCraft je nach Browser möglicherweise nicht als Rechtsklick: Es kann dann als Klick mit gehaltenem {{key:Ctrl}} wirken. Verwenden Sie zum Pannen den Zweifingerdruck.
:::

:::windows linux
- **Zoom:** Mit zwei Fingern scrollen. Pinchen zoomt auch dort, wo der Touchpad-Treiber es als Scrollen mit {{key:Ctrl}} sendet.
- **Pan:** Mit der rechten Taste ziehen (bei vielen Touchpads die untere rechte Ecke drücken und ziehen), oder {{key:H}} drücken und ziehen.
- **Orbit:** Drücken Sie {{key:O}} und ziehen Sie, oder verwenden Sie die Pfeiltasten.
:::

Beim Mausrad zoomt das Scrollen mit zwei Fingern; es pannt nicht. Das ist das Gegenteil vieler Webseiten, und so verhält sich das Mausrad in den meisten 3D-Modellierern.

:::tip
{{key:Space}} wählt in ModelCraft das Werkzeug {{ui:Wählen}}. Das Halten von {{key:Space}} und Ziehen pannt nicht, wie es in manchen anderen Apps der Fall ist.
:::

## Auf einem Touchscreen

:::touch
- **Ein Finger** verwendet das aktuelle Werkzeug: **tippen**, um zu klicken, **drücken und ziehen**, um zu zeichnen oder zu ziehen.
- Während der Finger eines Zeichenwerkzeugs unten ist, zeigt eine **Lupe** darüber, was unter dem Finger liegt, damit Sie den Endpunkt, Mittelpunkt oder die Kante sehen, an der er einrastet, bevor Sie loslassen.
- **Still halten** für eine halbe Sekunde beendet, was das Werkzeug tut, wie {{key:Enter}} es tut: eine Kurve, eine Linienkette. Ohne etwas Laufendes orbitet das Stillhalten und anschließende Ziehen mit demselben Finger, bis Sie loslassen.
- **Zwei Finger**, zusammen gezogen, **pannen**; **pinchen** zum Zoomen. Beides funktioniert in einer Geste.
- **Drei Finger**, zusammen gezogen, **orbiten**.
- Um sie zu tauschen (zwei Finger orbiten, drei pannen), öffnen Sie {{ui:Einstellungen}}, Registerkarte {{ui:ModelCraft}}, Touchscreen.
- Einen zweiten Finger aufzusetzen **bricht** ab, was der erste Finger begonnen hat (ein halb gezeichnetes Rechteck, ein laufendes Drücken/Ziehen). Heben Sie die Finger und beginnen Sie erneut.
- Eine kleine Leiste unten in der Ansicht hat **Fertig** ({{key:Enter}}), **Abbrechen** ({{key:Esc}}) und **Rückgängig**, für Situationen ohne Tastatur.
- Einrasten und Auswählen reichen etwas weiter als mit der Maus, und die Schaltflächen sind größer, damit ein Finger sie trifft.
:::

:::mouse
Auf einem Touchscreen verwendet ein Finger das aktuelle Werkzeug (tippen zum Klicken, still halten zum Beenden oder still halten und ziehen zum Orbiten), zwei Finger pannen und pinchen zum Zoomen, drei Finger orbiten, und eine kleine Leiste bietet Fertig, Abbrechen und Rückgängig.
:::

## Standardansichten

1. Klicken Sie {{ui:Ansichten}} am rechten Ende der Symbolleiste.
2. Wählen Sie {{ui:Iso}}, {{ui:Oben}}, {{ui:Vorne}}, {{ui:Rechts}}, {{ui:Hinten}}, {{ui:Links}} oder {{ui:Unten}}.

Die Ansicht dreht sich in diese Richtung und passt das ganze Modell ein. {{ui:Vorne}} blickt nach Norden, entlang der grünen Achse; {{ui:Oben}} blickt senkrecht nach unten, mit Norden oben.

Der ViewCube oben rechts in der Ansicht macht dasselbe mit einem Klick, zusätzlich mit Kanten und Ecken, einem Kompassring zum Drehen des Modells und einer Startschaltfläche. Siehe [Der ViewCube](topic:view-cube).

## Perspektive und Parallelprojektion

Wählen Sie {{ui:Ansichten}}, dann {{ui:Perspektive}}. Ein Häkchen bedeutet, dass die Perspektive an ist. Ohne sie ist die Ansicht eine Parallelprojektion (orthografisch): Linien, die im Modell parallel sind, bleiben auf dem Bildschirm parallel. Das wollen Sie für Aufrisse aus {{ui:Vorne}} oder {{ui:Rechts}}. Die Statusleiste zeigt „Perspektive.“ oder „Parallelprojektion.“

Jede Szene merkt sich, ob sie in der Perspektive war. Siehe [Ansichten als Szenen speichern](topic:scenes).
