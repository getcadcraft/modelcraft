---
title: Für einen Harzdrucker slicen
summary: Die Druckfläche der Druckstufe für einen Harzdrucker slicen, das Teil aushöhlen und stützen, die Schichten durchsehen, die Druckdatei des Druckers speichern und die passende Belichtung mit dem Belichtungstest finden.
keywords: harz, harzdruck, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, aushöhlen, Entlüftungsloch, raft, Stützen, Belichtungstest, Belichtungsleiter, Kalibrierung, Schichten, Add-on
from: 83c394e1
---

Die Harz-Add-ons slicen, was auf dem Druckbett liegt, in Schichtbilder für den Bildschirm Ihres Druckers, und speichern die Datei, die Ihr Drucker liest. Sie sind kostenlos, ohne gesperrte Funktionen, und ausgeschaltet, bis Sie sie einschalten.

:::note
Auf einem echten Drucker wurde noch keine Datei geladen. Die Dateien wurden nur mit den eigenen Lesern von CadCraft zurückgelesen, und die Stützen sind neu. Prüfen Sie die Schichten und führen Sie Ihren ersten Druck von Hand aus.
:::

## Was Sie tun

Ein Teil für Harz slicen, die Schichten prüfen, die Datei speichern und auf Ihren Drucker kopieren.

## Schritte

1. Öffnen Sie {{ui:Einstellungen}} › {{ui:Add-ons}} und schalten Sie das Harz-Slicer-Add-on sowie das Add-on für das Dateiformat Ihres Druckers ein (Elegoo GOO, SL1, Chitubox oder Anycubic). Sie können auch auf der Karte der Druckstufe auf {{ui:Harzdruck hinzufügen}} drücken.
2. Legen Sie Ihr Teil wie unter [Objekte auf dem Druckbett platzieren](topic:print-stage) auf das Bett und wählen Sie dann {{ui:Harz}} neben **Drucken mit**.
3. Wählen Sie unter **Harzdruck-Einstellungen** Ihren **Drucker** und Ihr **Harz**. Die Karte zeigt die Bildschirmgröße in Pixeln. Dies sind die vom Hersteller veröffentlichten Größen; prüfen Sie Ihre. Sie können sie unter **Benutzerdefiniert** bearbeiten.
4. Stellen Sie **Schichthöhe (mm)**, **Belichtung (s)** und **Bodenbelichtung (s)** ein. Die Werte für jedes Harz sind nur ein Ausgangspunkt.
5. Setzen Sie den Haken bei **Aushöhlen, mit Entlüftungsloch**, wenn Sie ein hohles Teil möchten, und stellen Sie **Wand (mm)** und **Lochbreite (mm)** ein.
6. Setzen Sie den Haken bei **Stützen und Raft** und wählen Sie die **Stützendichte**: Leicht, Mittel oder Stark.
7. Wählen Sie das **Dateiformat**. Wenn die Karte sagt, dass noch keines hinzugefügt ist, drücken Sie die Schaltfläche mit Hinzufügen und dem Namen des Formats.
8. Drücken Sie {{ui:Schichten-Vorschau}} und bewegen Sie den Regler **Schicht**. Schwebende Teile sind eingekreist. Die Zeile darunter nennt die Schichten, die Zeit und das Harz in mL, Gramm und Kosten.
9. Drücken Sie {{ui:Druckdatei speichern}}, prüfen Sie die Zusammenfassung und drücken Sie {{ui:Speichern}}. Kopieren Sie die Datei auf Ihren Drucker.

## Ihre Belichtung finden

1. Schalten Sie das Add-on für den Belichtungstest unter {{ui:Einstellungen}} › {{ui:Add-ons}} ein.
2. Drücken Sie {{ui:Testteil auf das Bett legen}}.
3. Drücken Sie {{ui:Belichtungsleiter speichern}}. Sie erhalten für jede Belichtung eine Datei, alle in einer ZIP-Datei.
4. Drucken Sie jede Datei mit demselben Harz und behalten Sie die Belichtung mit den schärfsten dünnen Säulen und offenen Löchern.

## Hinweise

- Das Slicen läuft im Hintergrund, sodass die Seite bei einer großen Platte bedienbar bleibt.
- Teile, die keine geschlossenen Volumenkörper sind, werden ausgelassen, und die Karte sagt es.
- Wenn Ihr Drucker eine Datei ablehnt, hat die Format-Karte Optionen für das, was das Format offen lässt. Ändern Sie eine, speichern Sie erneut und sagen Sie uns, welche funktioniert hat.
- Anycubic-Versionen 517 und 518 werden nicht geschrieben.
