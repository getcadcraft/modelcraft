---
title: Ansichten als Szenen speichern
summary: Eine Kamera und einen Stil als Szene speichern, sie aktualisieren und umbenennen und durch Szenen schalten oder sie abspielen, um einen Entwurf zu präsentieren.
keywords: Szene, Ansicht, gespeicherte Ansicht, Kamera, Präsentation, Animation, abspielen, Diaschau, Page Up, Page Down, Registerkarten, Rundgang
from: 38680d6e
---

Eine **Szene** merkt sich eine Kameraposition, einen Stil und was ausgeblendet ist: wo Sie hinsehen, Perspektive oder Parallelprojektion, den Flächenstil, Kanten, die Sonneneinstellungen, ausgeblendete Gruppen, ausgeschaltete Tags und den Schnitt. Szenen werden in der Datei `.modelcraft` gespeichert.

## Eine Szene hinzufügen

1. Stellen Sie die Ansicht ein: drehen, zoomen, einen Stil wählen, die Sonne einstellen.
2. Klicken Sie im Bereich {{ui:Szenen}} rechts auf {{ui:Szene hinzufügen}}.

   Die Szene erscheint in der Liste, benannt „Szene 1“, „Szene 2“ und so weiter, und als Registerkarte oben in der 3D-Ansicht. Die Statusleiste sagt „Szene 1 gespeichert: diese Kamera, dieser Stil und was ausgeblendet ist.“

## Zu einer Szene wechseln

- Klicken Sie auf ihre Registerkarte über der 3D-Ansicht oder auf ihren Namen in der Liste {{ui:Szenen}}.
- Oder drücken Sie {{key:PageDown}} für die nächste Szene und {{key:PageUp}} für die vorherige. {{ui:Weiter}} und {{ui:Zurück}} unter der Liste tun dasselbe.

Die Kamera gleitet in etwas über einer halben Sekunde zur Szene. Wenn Ihr Computer so eingestellt ist, dass Bewegung reduziert wird, springt sie direkt dorthin.

## Eine Szene ändern, umbenennen oder löschen

Jede Szene in der Liste hat drei kleine Schaltflächen nach ihrem Namen:

- **Aktualisieren** (die kreisförmigen Pfeile): speichert die aktuelle Kamera, den Stil und was ausgeblendet ist, in diese Szene. „Szene 2 aktualisiert.“
- **Umbenennen** (der Stift): öffnet ein Dialogfeld „Szene umbenennen“. Geben Sie den neuen Namen ein und klicken Sie auf {{ui:Speichern}}.
- **Löschen** (der Papierkorb): entfernt die Szene. „Szene 2 gelöscht. Mit Ctrl+Z wiederherstellen.“

Hinzufügen, Aktualisieren, Umbenennen und Löschen von Szenen sind Schritte im Rückgängig-Verlauf, wie Änderungen am Modell.

## Die Kamera einer Szene sperren

Wenn Sie dieselbe Ansicht immer wieder rendern, während sich der Entwurf ändert, sperren Sie die Kamera dieser Szene, damit sich die Ansicht nie aus Versehen bewegt.

1. Klicken Sie in der Liste {{ui:Szenen}} auf die Schaltfläche **Sperren** (das offene Vorhängeschloss) nach dem Namen der Szene. Sie schließt sich, und die Registerkarte der Szene über der 3D-Ansicht zeigt ein kleines Vorhängeschloss. Die Statusleiste sagt „Szene 2: Kamera gesperrt.“
2. Gehen Sie zur Szene, wann immer Sie rendern möchten: Die Kamera kehrt genau zur gespeicherten Ansicht zurück, damit Bilder, die daraus entstehen, zu den früheren passen.

Während die Kamera gesperrt ist, speichert **Aktualisieren** weiterhin Stil und Ausgeblendetes in der Szene, doch die Kamera bleibt, wo sie war, auch wenn Sie inzwischen gedreht haben. Klicken Sie erneut auf das Vorhängeschloss, um zu entsperren; dann speichert Aktualisieren wieder die aktuelle Ansicht. Sperren und Entsperren sind Schritte im Rückgängig-Verlauf, und die Sperre wird in der Datei `.modelcraft` gespeichert.

## Präsentieren

1. Fügen Sie zwei oder mehr Szenen hinzu.
2. Klicken Sie unter der Liste auf {{ui:Wiedergabe}}. ModelCraft wechselt alle paar Sekunden zur nächsten Szene und springt nach der letzten zur ersten zurück.
3. Klicken Sie auf {{ui:Stopp}} (dieselbe Schaltfläche) oder drücken Sie {{key:Esc}}, um anzuhalten.

Für eine Sonnenstudie fügen Sie je eine Szene pro Stunde hinzu, bei der nur {{ui:Uhrzeit}} geändert ist, und spielen Sie sie dann ab. Siehe [Stile und Sonnenschatten](topic:styles-shadows#a-sun-study).

Um ohne die Leisten zu präsentieren, drücken Sie zweimal {{key:Ctrl+Shift+F}}: Vollbild, dann Vollbild mit ausgeblendeten Leisten. Die Szenen-Registerkarten bleiben über der Ansicht.

## Was eine Szene zeigt

Eine Szene merkt sich, was beim Speichern ausgeblendet war: Gruppen und Komponenten, die Sie [ausgeblendet](topic:hide-isolate) haben, [Tags](topic:tags), die Sie ausgeschaltet haben, und welche [Schnittebene](topic:sections) schneidet. Wenn Sie zur Szene gehen, werden sie wieder ein- bzw. ausgeblendet. So kann eine Szene das ganze Haus zeigen, die nächste das Haus ohne das Tag des Dachs, die nächste einen Schnitt durch es.

Ausgeblendete lose Flächen und Kanten sind kein Teil von Szenen. Zu einer Szene zu gehen erzeugt keinen Rückgängig-Schritt. Szenen, die mit einer früheren Version von ModelCraft gespeichert wurden, lassen das Ausgeblendete, wie es ist; klicken Sie auf Aktualisieren, um es in sie zu speichern.

## Eine Animation exportieren

{{ui:Animation exportieren}} unter der Liste spielt die Szenen vom ersten bis zum letzten ab, bewegt die Kamera sanft zwischen ihnen und speichert den Film als **WebM**-Video (zwei Sekunden Bewegung und eine kurze Pause pro Szene). Es zeichnet die Ansicht so auf, wie Sie sie sehen, in ihrer Größe auf dem Bildschirm, in der [Präsentationsansicht](topic:styles-shadows#presentation-view) (ohne Achsen, Hilfslinien oder Auswahl). Drücken Sie {{key:Esc}} oder klicken Sie erneut auf die Schaltfläche, um ohne Speichern zu stoppen. WebM läuft in Browsern und VLC, und Videoeditoren konvertieren es.

Für einen gerenderten Rundgang (Himmel, Sonne, Schatten, Materialien) in einer Größe Ihrer Wahl verwenden Sie stattdessen {{ui:Video rendern…}}: Ohne Animationsschlüssel nimmt es die Szenen in ihrer Reihenfolge als Weg der Kamera. Siehe [Kamera und Objekte animieren](topic:animation).

## Zu beachten

- Das Ändern des Stils oder das Bewegen der Kamera nach dem Wechsel zu einer Szene ändert die Szene nicht, bis Sie auf Aktualisieren klicken.
- Szenen werden nicht nach Collada, OBJ, glTF, STL oder IFC exportiert.
