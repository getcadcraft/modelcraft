---
title: Das Modell in einem VR-Headset prüfen
summary: Gehen Sie in Originalgröße durch das Modell in einem VR-Headset: springen, drehen, messen, aufschneiden, Themen mit einem Bild setzen, es als Tischmodell betrachten und die anderen einer Live-Sitzung treffen.
keywords: vr, virtuelle realität, headset, webxr, xr, immersiv, quest, oculus, vive, index, pico, durchgehen, rundgang, teleport, designprüfung, prüfung, messen, schnitt, schneiden, thema, themen, bcf, tischplatte, maßstabsmodell, präsenz, avatare, live, gemeinsam
from: fa2f591a
---

{{ui:In VR prüfen}} versetzt Sie mit einem VR-Headset in das Modell, in Originalgröße. Sie stehen dort, wo die Kamera der Ansicht steht, auf dem Boden darunter, und blicken in dieselbe Richtung. Es wird nichts hochgeladen: Das Headset zeigt, was der Browser auf diesem Computer (oder im eigenen Browser des Headsets) zeichnet.

## Was Sie brauchen

- Ein Headset, das der Browser steuern kann (WebXR): der eigene Browser eines eigenständigen Headsets oder Chrome bzw. Edge auf einem PC mit angeschlossenem Headset.
- ModelCraft auf einer sicheren Seite (https), wie auf dieser Website.

Wenn kein Headset vorhanden ist, ist {{ui:In VR prüfen}} ausgegraut und sagt, warum.

## Starten

1. Richten Sie die Ansicht ein, mit der Sie beginnen möchten: in einem Raum oder draußen mit Blick auf das Gebäude.
2. Klicken Sie in der Gruppe {{ui:Kamera}} auf {{ui:Ansichten}} und dann auf {{ui:In VR prüfen}}.
3. Setzen Sie das Headset auf.

Das Menü befindet sich auf der Rückseite Ihrer linken Hand. Zeigen Sie mit dem rechten Controller darauf und drücken Sie den Auslöser, um eine Schaltfläche zu wählen. (Mit nur einer Hand schwebt das Menü vor der Stelle, an der Sie begonnen haben.)

## So sieht es aus

Das Headset zeigt das Modell im Look der [Live-Ansicht](topic:live-view): die Looks und Materialien, die Sie den Flächen gegeben haben, den Himmel und die Sonne an Ort und Datum Ihres Modells samt Schatten, Lampen, verstreute Pflanzen und Felsen sowie Licht, das von Wänden und Böden zurückgeworfen wird (auf diesem Computer berechnet, während Sie sich umsehen, und Ihnen folgend, wenn Sie sich bewegen). Helligkeit und Farbtransformation (ACES oder AgX) sind die von [Ein Bild rendern](topic:render). Wie viel gezeichnet wird, hängt davon ab, was der Browser des Headsets kann, wie auch am Desktop; Umgebungsverdeckung, Spiegelungen und Bloom bleiben am Desktop.

## Sich bewegen

- **Springen:** Zeigen Sie in {{ui:Verschieben}} auf einen Boden und drücken Sie den Auslöser; Sie landen dort. Oder schieben Sie den Stick nach vorn, um zu zielen, und lassen Sie los, um zu springen. Sie können nur auf Böden und Grund landen (Flächen, die nach oben zeigen), nie auf einer Wand.
- **Drehen:** Schieben Sie den Stick nach links oder rechts: Sie drehen sich jedes Mal um 30°.
- **Gehen:** Im Spielbereich gehen Sie einfach.

## Messen

Wählen Sie {{ui:Messen}} und drücken Sie den Auslöser auf zwei Punkten. Die Distanz wird zwischen ihnen in den Einheiten des Modells angezeigt. Ein Punkt nahe einer Ecke rastet in der Ecke ein.

## Aufschneiden

Wählen Sie {{ui:Schnitt}} und drücken Sie den Auslöser auf eine Fläche:

- auf einer Wand (oder allem, was kein Boden ist): Alles zwischen Ihnen und dieser Fläche wird weggeschnitten, sodass Sie hineinsehen. Das funktioniert am besten von außen oder quer durch einen Raum;
- auf einem Boden, von oben: ein Grundrissschnitt 1.2 m über diesem Boden, sodass die Wände ihren unteren Teil zeigen.

{{ui:Löschen}} entfernt den Schnitt und die Messungen. Schneidet eine Schnittebene das Modell in der Ansicht, wenn Sie starten, beginnt das Headset damit.

## Ein Thema setzen

Wählen Sie {{ui:Thema}} und drücken Sie den Auslöser dort, wo das Problem liegt. Eine nummerierte Nadel markiert es, und ModelCraft speichert das Thema mit einem Bild von dem, was Sie gesehen haben, und dem Standort, an dem Sie standen. Wenn Sie VR verlassen, sind die Themen in der Liste {{ui:Themen}} rechts:

- die Auge-Schaltfläche zeigt das Thema von dem Ort aus, an dem es gesetzt wurde;
- {{ui:Als BCF speichern}} lädt alle als BCF-Datei herunter, die BIM-Prüfprogramme öffnen (einschließlich Kamera und Bild);
- sie werden auch in der `.modelcraft`-Datei gespeichert.

Einen Kommentar zu einem Thema fügen Sie nach dem Verlassen von VR in einem BCF-Programm hinzu: Eingeben im Headset ist noch nicht umgesetzt.

## Als Tischmodell betrachten

{{ui:Tischplatte}} verkleinert das Modell, sodass es auf einen Tisch vor Ihnen passt; gehen Sie darum herum oder drehen Sie es mit dem Stick. {{ui:Originalgröße}} versetzt Sie zurück an den Ort, an dem Sie waren.

## Gemeinsam, live

In einer [Live-Sitzung](topic:work-live) sieht jeder in VR die anderen als Kopf und zwei Hände in ihrer eigenen Farbe, mit ihrem Namen und einem Punkt, wohin jeder zeigt. Änderungen, die jemand vornimmt, erreichen Ihr Headset innerhalb eines Augenblicks. Personen am Schreibtisch werden im Headset noch nicht angezeigt.

## Verlassen

Wählen Sie {{ui:VR verlassen}} (oder nehmen Sie das Headset ab und beenden Sie dort). Die Ansicht auf dem Bildschirm wechselt zu der Stelle, an der Ihr Kopf war.

:::note
Nur mit einem Headset-Emulator getestet, noch nicht mit einem echten Headset. Ein großes Modell kann das Headset ruckeln lassen: Blenden Sie zuerst aus, was Sie nicht brauchen ([Ausblenden und Isolieren](topic:hide-isolate)).
:::
