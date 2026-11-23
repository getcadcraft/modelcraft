---
title: Für einen Harzdrucker slicen
summary: Das Druckbett der Druckstufe für einen Harzdrucker slicen, das Teil aushöhlen und abstützen, die Schichten prüfen, die Druckdatei des Druckers speichern und die Belichtung mit dem Belichtungstest finden.
keywords: Harz, Neigung vorschlagen, Saugnapf, Abziehkraft, Verstrebung, Harzdruck, sla, msla, dlp, Slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, aushöhlen, Entlüftungsloch, Floß, Stützen, Belichtungstest, Belichtungsleiter, Kalibrierung, Schichten, Add-on
from: 8cc12858
---

Die Harz-Add-ons slicen, was auf dem Druckbett liegt, zu Schichtbildern für das Display Ihres Druckers und speichern die Datei, die Ihr Drucker liest. Sie sind kostenlos, ohne gesperrte Funktionen, und bleiben aus, bis Sie sie einschalten.

:::note
Auf einem echten Drucker wurde noch keine Datei geladen. Die Dateien wurden nur mit den eigenen Lesern von CadCraft zurückgelesen, und die Stützen sind neu. Prüfen Sie die Schichten und starten Sie Ihren ersten Druck von Hand.
:::

## Was Sie tun

Ein Teil für Harz slicen, die Schichten prüfen, die Datei speichern und auf Ihren Drucker kopieren.

## Schritte

1. Öffnen Sie {{ui:Einstellungen}} › {{ui:Add-ons}} und schalten Sie das Harz-Slicer-Add-on sowie das Add-on für das Dateiformat Ihres Druckers ein (Elegoo GOO, SL1, Chitubox oder Anycubic). Alternativ drücken Sie auf der Karte der Druckstufe auf {{ui:Harzdruck hinzufügen}}.
2. Legen Sie Ihr Teil wie unter [Objekte auf das Druckbett legen](topic:print-stage) auf das Bett und wählen Sie danach neben **Drucken mit** {{ui:Harz}}.
3. Wählen Sie unter **Harzdruck-Einstellungen** Ihren **Drucker** und Ihr **Harz**. Die Karte zeigt die Displaygröße in Pixeln. Dies sind die vom Hersteller veröffentlichten Größen; prüfen Sie Ihre. Unter **Benutzerdefiniert** können Sie sie ändern.
4. Stellen Sie **Schichthöhe (mm)**, **Belichtung (s)** und **Bodenbelichtung (s)** ein. Die Werte für jedes Harz sind nur ein Ausgangspunkt.
5. Aktivieren Sie **Aushöhlen, mit Entlüftungsloch**, wenn Sie ein hohles Teil möchten, und stellen Sie **Wand (mm)** und **Lochbreite (mm)** ein.
6. Aktivieren Sie **Stützen und Floß** und wählen Sie die **Stützdichte**: Gering, Mittel oder Hoch.
7. Wählen Sie das **Dateiformat**. Zeigt die Karte an, dass noch keines hinzugefügt ist, drücken Sie die Schaltfläche mit der Aufschrift Hinzufügen und dem Namen des Formats.
8. Drücken Sie {{ui:Vorschau der Schichten}} und bewegen Sie den Regler **Schicht**. Schwebende Teile sind eingekreist. Die Zeile darunter nennt die Schichten, die Zeit sowie das Harz in mL, Gramm und Kosten.
9. Drücken Sie {{ui:Druckdatei speichern}}, prüfen Sie die Zusammenfassung und drücken Sie {{ui:Speichern}}. Kopieren Sie die Datei auf Ihren Drucker.

## Neigung, Saugnäpfe, Verstrebungen und der Abziehwert

Diese vier Werte sind Schätzungen aus der Form des Teils. Keiner wurde auf einem echten Drucker erprobt. Behandeln Sie jeden als Hinweis und sehen Sie sich die Schichten an.

1. Drücken Sie unter **Neigung (Grad)** auf {{ui:Neigung vorschlagen}}. CadCraft probiert Neigungen von 0 bis 60 Grad aus und wählt die mit der kleinsten größten Schicht, der geringsten überhängenden Fläche und ohne Saugnapf. Es setzt **Neigung (Grad)** und nennt, was es gefunden hat. Die Gewichtung der Bewertung stammt von uns, nicht vom Druckerhersteller.
2. Nach {{ui:Vorschau der Schichten}} nennt eine Warnung Hohlräume, die nur zur Folie hin offen sind. Ein solcher Hohlraum kann Unterdruck halten, wenn sich eine Schicht löst. Neigen Sie das Teil oder fügen Sie ein Loch hinzu. Taschen, die schmaler als die Zellgröße in der Warnung sind, werden nicht erkannt.
3. Wenn **Stützen und Floß** aktiv ist, aktivieren Sie **Hohe Stützen verstreben**, um Querverstrebungen zwischen hohen, dünnen Pfeilern einzufügen.
4. Die Zeile unter der Vorschau nennt die größte Schicht in cm2. Eine Kraft zeigt sie nur, wenn Sie unter **Bodenschichten, Anhub und Geschwindigkeiten** eine **Gemessene Abziehspannung** eingeben. Ohne Ihren eigenen Messwert zeigt sie nur die Fläche.

## Belichtung finden

1. Schalten Sie das Add-on für den Belichtungstest in {{ui:Einstellungen}} › {{ui:Add-ons}} ein.
2. Drücken Sie {{ui:Testteil auf das Bett legen}}.
3. Drücken Sie {{ui:Belichtungsleiter speichern}}. Sie erhalten eine Datei pro Belichtung, in einem ZIP-Archiv.
4. Drucken Sie jede Datei mit demselben Harz und behalten Sie die Belichtung mit den schärfsten dünnen Pfeilern und offenen Löchern.

## Hinweise

- Das Slicen läuft im Hintergrund, sodass die Seite auch bei einer großen Platte benutzbar bleibt.
- Teile, die keine geschlossenen Volumenkörper sind, werden weggelassen, und die Karte weist darauf hin.
- Wenn Ihr Drucker eine Datei ablehnt, bietet die Formatkarte Optionen für das, was das Format offen lässt. Ändern Sie eine, speichern Sie erneut und sagen Sie uns, welche funktioniert hat.
- Anycubic-Versionen 517 und 518 werden nicht geschrieben.
