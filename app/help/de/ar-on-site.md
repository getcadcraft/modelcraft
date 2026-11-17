---
title: Das Modell vor Ort mit einem Android-Handy sehen (AR)
summary: Ein Android-Handy mit Chrome hochhalten und das Modell in Originalgröße über der Kamera sehen, auf dem Gebäude ausgerichtet durch zwei Punkte, an denen Sie stehen, mit einer Röntgenlinse und einer schnellen Nachprüfung beim nächsten Besuch. Zum Betrachten, nicht zum Abstecken.
keywords: ar, erweiterte Realität, Augmented Reality, Handy, Android, Chrome, WebXR, vor Ort, Baustelle, Kamera, Originalgröße, Röntgen, ausrichten, einpassen, Nachprüfung, ARCore
from: 0f43b50b
---

{{ui:Ansicht vor Ort (AR, Handy)}} im Menü {{ui:Ansichten}} zeigt das Modell in seiner echten Größe über der Kamera des Handys. Es funktioniert auf einem **Android-Handy mit Chrome**, auf einer sicheren (https) Seite, wenn das Handy AR unterstützt. Auf einem iPhone oder iPad, einem Computer oder einer Android-App, die nur eine Webseite zeigt, nennt der Eintrag den Grund, warum er nicht starten kann. Nutzen Sie dort die 3D-Ansicht, oder öffnen Sie diese Seite auf dem Handy in Chrome.

**Ein Handy dient zum Betrachten.** Messen, abstecken oder zuschneiden Sie nichts von dem, was der Bildschirm zeigt: Das Handy driftet, während Sie gehen, und der Zeigefehler wächst mit dem Abstand zu den beiden Punkten, an denen Sie ausgerichtet haben (einige Zentimeter in ihrer Nähe, mehr weiter weg). Nichts hier ist vermessungsgenau.

## Das Modell ausrichten

1. Öffnen Sie das Modell auf dem Handy und wählen Sie {{ui:Ansicht vor Ort (AR, Handy)}}. Erlauben Sie den Zugriff auf die Kamera.
2. Die Leiste unten nennt den ersten Punkt (eine Bodenecke des Modells). Stellen Sie sich dort vor Ort hin, richten Sie den grünen Ring auf den Boden und tippen Sie auf {{ui:Punkt setzen}}.
3. Gehen Sie zum zweiten Punkt, mindestens einen halben Meter entfernt (je weiter auseinander, desto besser die Passung), und machen Sie dasselbe.
4. Das Modell erscheint in voller Größe, gedreht und verschoben, um zu den beiden Stellen zu passen. Die Leiste zeigt, wie gut die beiden Punkte übereinstimmen.

{{ui:Neu beginnen}} löscht die Punkte. Die Ausrichtung wird in der Modelldatei gespeichert, sodass das Modell beim nächsten Öffnen vor Ort bereits ausgerichtet startet.

## Röntgenlinse

{{ui:Röntgenlinse}} zeigt das ganze Modell in einem Kasten vor dem Handy (etwa anderthalb Meter breit und drei Meter tief) und sonst nur einen schwachen Schatten davon. So sehen Sie, was hinter einer Wand liegt, ohne die echte Wand aus den Augen zu verlieren.

## Der nächste Besuch

Stellen Sie sich am ersten Punkt hin und tippen Sie auf {{ui:Erneut prüfen}}, dann auf {{ui:Punkt setzen}}. Liegt die Abweichung unter 5 Zentimetern, bleibt die Ausrichtung erhalten. Bis zu einem halben Meter Abweichung verschiebt sich das Modell um die Differenz. Darüber hinaus bittet die Leiste Sie, die beiden Stellen erneut anzuzeigen.

## Verlassen

{{ui:AR verlassen}} beendet die Sitzung. Das Kamerabild bleibt im Browser: Nichts wird hochgeladen.
