---
title: Verschieben, Kopieren und Anordnungen erstellen
summary: Objekte per Klick oder um einen genauen Abstand verschieben, mit einer Zusatztaste kopieren und eine Reihe gleichmäßig verteilter Kopien erstellen.
keywords: verschieben, kopieren, duplizieren, Anordnung, Reihe, Abstand, teilen, Versatz, strecken, Stützen, wiederholen, mehrfach kopieren
from: 280245fc
---

{{ui:Verschieben}} ({{key:M}}) verschiebt alles, was ausgewählt ist, von einem Punkt zu einem anderen. Wenn Sie beim Verschieben eine Zusatztaste gedrückt halten, entsteht eine Kopie. Nach einem Kopiervorgang können Sie eingeben, wie viele weitere Kopien Sie möchten.

## Etwas verschieben

1. Wählen Sie aus, was verschoben werden soll (siehe [Dinge auswählen](topic:select)). Wenn nichts ausgewählt ist, nimmt {{ui:Verschieben}} das Objekt, auf das Sie klicken.
2. Drücken Sie {{key:M}}.
3. Klicken Sie einen Punkt an, von dem aus verschoben werden soll. Wählen Sie etwas Aussagekräftiges, etwa eine Ecke: Dieser Punkt landet genau dort, wo Sie als Nächstes klicken.
4. Bewegen Sie den Zeiger. Die Auswahl folgt ihm. Sie rastet an Punkten, Kanten und an den roten, grünen und blauen Richtungen ein, genau wie eine Linie.
5. Klicken Sie dort, wohin der Punkt soll, oder geben Sie einen Abstand ein und drücken Sie {{key:Enter}}.

   Der Tipp in der Statusleiste springt für den nächsten Verschiebevorgang wieder zu „Klicken Sie einen Punkt an, von dem aus verschoben werden soll…“.

Ein eingegebener Abstand gilt in die Richtung, in die Sie zeigen. Sie können auch einen genauen Versatz eingeben, `<2m,0,0>` (2 m entlang Rot), oder ein genaues Ziel für den gewählten Punkt, `[0,0,0]` (der Ursprung). Siehe [Genaue Größen eingeben](topic:value-box).

Um nur entlang einer Achse zu verschieben, drücken Sie nach dem ersten Klick eine Pfeiltaste: {{key:Right}} sperrt auf Rot, {{key:Left}} auf Grün, {{key:Up}} auf Blau. Drücken Sie dieselbe Pfeiltaste erneut, um die Sperre aufzuheben.

## Verschieben eines Teils einer Form streckt sie

Geometrie, die nicht gruppiert ist, ist verbunden. Wenn Sie eine Fläche oder einige Kanten auswählen und verschieben, werden die daran hängenden Flächen mitgezogen. Verschieben Sie die obere Fläche eines Quaders zur Seite, neigt sich der Quader; verschieben Sie eine Dachkante, ändert sich die Dachneigung. Flächen, die nicht mehr eben bleiben können, falten sich in Dreiecke.

Um ein ganzes Objekt ohne Strecken zu verschieben, wählen Sie zuerst alles aus (Dreifachklick darauf) oder, besser, machen Sie es zu einer Gruppe oder Komponente (siehe [Gruppen und Komponenten](topic:groups-components)).

## Etwas kopieren

1. Wählen Sie aus, was kopiert werden soll.
2. Drücken Sie {{key:M}}.
3. Halten Sie {{key:Ctrl}} (oder {{key:Alt}}) gedrückt und klicken Sie den Punkt an, von dem aus verschoben werden soll. Auf dem Mac macht {{key:Mod}} oder {{key:Alt}} dasselbe. Der Tipp „Ctrl verschiebt stattdessen“ bedeutet, dass Sie gerade kopieren.

   Sie können nach dem ersten Klick auch {{key:Ctrl}} oder {{key:Alt}} drücken und wieder loslassen, um zwischen Verschieben und Kopieren zu wechseln.

4. Klicken Sie dort, wohin die Kopie soll, oder geben Sie einen Abstand ein und drücken Sie {{key:Enter}}.

   Das Original bleibt, wo es war, und die Kopie ist ausgewählt.

## Kopieren, Ausschneiden, Einfügen und Duplizieren

- {{key:Mod+C}} kopiert die Auswahl, {{key:Mod+X}} schneidet sie aus (kopiert und löscht sie dann). {{ui:Kopieren}} und {{ui:Einfügen}} sind auch Schaltflächen in der Gruppe {{ui:Bearbeiten}} der Symbolleiste, und {{ui:Mehr}} daneben enthält Ausschneiden, An gleicher Position einfügen und Duplizieren.
- {{key:Mod+V}} fügt ein: Ein Umriss der Kopie folgt dem Zeiger und rastet wie jedes Werkzeug ein; ein Klick setzt sie mit ihrer untersten Ecke dort ab. {{key:Esc}} bricht ab.
- {{key:Mod+Shift+V}} fügt an gleicher Position ein, genau dort, wo die Kopie herkam. Das ist nützlich, um etwas in eine geöffnete Gruppe zu verschieben.
- {{key:Mod+D}} ({{key:Shift+D}} im Modeler-Stil) dupliziert: Eine Kopie entsteht sofort und folgt dem Zeiger. Klicken Sie, um sie abzusetzen, geben Sie einen Abstand ein oder drücken Sie {{key:Esc}}, um sie zu verwerfen. Danach geben Sie `3x` ein, um gleich mehrere Kopien hintereinander zu erstellen.

Eine eingefügte Gruppe wird zu einer neuen Gruppe. Eine eingefügte Komponente ist eine weitere Platzierung derselben Komponente, daher ändert das Bearbeiten einer Platzierung alle. Kopien lassen sich auch in einen anderen ModelCraft-Tab in diesem Browser einfügen; dort kommen sie als neue Definitionen an.

## Eine Reihe von Kopien

Direkt nach einem Kopiervorgang, solange {{ui:Verschieben}} noch das Werkzeug ist:

- Geben Sie `3x` (oder `*3`) ein und drücken Sie {{key:Enter}} für drei Kopien hintereinander, jeweils im gleichen Abstand wie die erste Kopie. Sie erhalten drei neue Kopien zusätzlich zum Original.
- Geben Sie `/3` ein und drücken Sie {{key:Enter}}, um stattdessen zu teilen: Drei Kopien werden gleichmäßig vom Original bis zu der Stelle verteilt, an die Sie die erste Kopie gesetzt haben; die letzte liegt genau dort. Verwenden Sie das, um eine Strecke zu füllen: Setzen Sie eine Kopie ans entfernte Ende und teilen Sie dann.

Sie können direkt danach eine andere Zahl eingeben: `5x` ersetzt die Reihe `3x`. Der Tipp erinnert Sie: „Kopiert. Geben Sie 3x für weitere Kopien in einer Reihe ein oder /3, um die Strecke zu teilen.“

### Beispiel: Stützen alle 6 Meter

1. Erstellen Sie eine Stütze und machen Sie sie zur Komponente ({{key:G}}), damit sich alle Kopien später gemeinsam ändern.
2. Drücken Sie {{key:M}}, halten Sie {{key:Ctrl}} gedrückt und klicken Sie die Basisecke der Stütze an.
3. Verschieben Sie entlang der roten Achse, geben Sie `6m` ein und drücken Sie dann {{key:Enter}}.
4. Geben Sie `4x` ein und drücken Sie {{key:Enter}}. Sie haben fünf Stützen im Abstand von 6 m.

## Wissenswertes

- Drücken Sie {{key:Esc}} vor dem zweiten Klick, um abzubrechen; alles kehrt an seinen Ort zurück.
- Verschieben funktioniert innerhalb der Gruppe, die Sie gerade bearbeiten. Um eine ganze Gruppe zu verschieben, schließen Sie sie zuerst und wählen Sie sie von außen aus.
- Ist {{ui:Kollision}} eingeschaltet (unten rechts und in den [ModelCraft-Einstellungen](topic:settings#solids-stop-where-they-touch)), hält ein Verschieben an, sobald die Auswahl einen anderen Volumenkörper berührt, statt hindurchzugehen. Klicken Sie auf {{ui:Kollision}}, um sie für ein Verschieben auszuschalten, das hindurchgehen soll.
- Um eine Kopie in eine andere Gruppe zu legen: Kopieren Sie sie, öffnen Sie die andere Gruppe und fügen Sie ein ({{key:Mod+Shift+V}} behält die Position bei).
