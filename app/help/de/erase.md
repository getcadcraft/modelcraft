---
title: Löschen und aufräumen
summary: Kanten, Gruppen und Hilfslinien mit dem Radierer oder der Taste Delete löschen, geteilte Flächen zusammenführen und Flächen korrigieren, die in die falsche Richtung zeigen.
keywords: löschen, Löschen, Radierer, Delete, entfernen, verschmelzen, Flächen zusammenführen, aufräumen, lose Linien, Fläche umkehren, Rückseite, rückgängig
from: 80b92a81
---

## Mit dem Radierer löschen

1. Drücken Sie {{key:E}} für den {{ui:Radierer}}.
2. Klicken Sie auf eine Kante, eine Gruppe, eine Komponente oder eine Hilfslinie. Sie wird gelöscht.
3. Um mehrere zu löschen, drücken Sie und ziehen Sie über sie. Alles, worüber Sie fahren, wird hervorgehoben, und alles davon wird gelöscht, sobald Sie loslassen.

Der Radierer wählt keine Flächen aus: Eine Fläche verschwindet, wenn Sie die Kanten löschen, die sie benötigt. Flächen sind das, durch das der Radierer hindurch nach Kanten sucht.

## Was mit den Flächen geschieht

- **Eine Kante zwischen zwei Flächen in derselben Ebene** (zum Beispiel eine Linie, die Sie quer über einen Boden gezeichnet haben) verschwindet, und die beiden Flächen **verschmelzen** zu einer.
- **Eine Kante, die eine Fläche braucht, um geschlossen zu bleiben** (die Kante eines Quaders), nimmt diese Fläche mit. Löschen Sie eine obere Kante eines Quaders, verschwinden die Oberseite und eine Seite und lassen einen offenen Kasten zurück.
- **Lose Enden** (Punkte, die keine Kante mehr verwendet) werden aufgeräumt.

Das Löschen der letzten Kopie einer Komponente entfernt auch die Komponente aus dem Bereich {{ui:Komponenten}}.

## Mit der Taste Delete löschen

1. Wählen Sie mit {{ui:Wählen}} aus, was Sie entfernen möchten.
2. Drücken Sie {{key:Delete}} oder {{key:Backspace}}.

Das entfernt auch Flächen. Eine so gelöschte Fläche lässt ihre Kanten zurück. So können Sie die Oberseite eines Kastens löschen, seinen Umriss behalten und dort etwas anderes zeichnen.

## Lose Linien auf einer flachen Fläche aufräumen

Wenn eine Wand oder ein Boden Linien zeigt, die Sie nicht wollen (vom Zeichnen übrig geblieben), löschen Sie sie mit dem {{ui:Radierer}}. Linien, die in der Fläche liegen, verschmelzen und verschwinden; die Fläche bleibt bestehen.

## Eine Fläche, die in die falsche Richtung zeigt

Eine Fläche von hinten gesehen ist blaugrau. Wenn eine Fläche auf der Außenseite Ihres Modells blaugrau erscheint:

1. Wählen Sie die Fläche aus.
2. Klicken Sie in {{ui:Objektinfo}} auf {{ui:Fläche umkehren}}.

Die Richtung der Flächen ist beim Exportieren am wichtigsten: Renderer, Game-Engines und 3D-Drucker können nach innen zeigende Flächen verbergen oder falsch lesen.

## Einen Fehler rückgängig machen

{{key:Mod+Z}} macht jeweils einen Schritt rückgängig, {{key:Mod+Y}} (oder {{key:Mod+Shift+Z}}) wiederholt ihn. Ein Ziehen mit dem Radierer ist ein Schritt, egal wie viele Dinge es erfasst hat. Die Statusleiste nennt, was rückgängig gemacht wurde: „Löschen rückgängig gemacht.“
