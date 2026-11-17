---
title: Ein Netz bildhauen
summary: Ein Netz wie Ton mit Pinseln formen — zeichnen, Ton, glätten, greifen, aufblasen, Falte, kneifen, abflachen — Teile mit einer Maske schützen, über X spiegeln und dort Detail hinzufügen, wo Sie bildhauen.
keywords: bildhauen, Bildhauerei, Pinsel, Ton, zeichnen, glätten, greifen, aufblasen, Falte, kneifen, abflachen, Maske, Symmetrie, spiegeln, Detail, dynamische Topologie, Stift, Druck, Tablet, Eingabestift
from: 5477801a
---

Der Arbeitsbereich Bildhauen formt ein Netz mit Pinseln, wie mit Ton: Ziehen Sie über die Oberfläche, und sie hebt sich, senkt sich, glättet sich oder folgt dem Zeiger unter einem runden Pinsel, am stärksten in der Mitte und zum Rand hin auf null ausblendend.

## Start

Wählen Sie ein Netz und klicken Sie in der Liste der Arbeitsbereiche auf {{ui:Bildhauen}}. Eine Gruppe oder Komponente wird zuerst zu einem Netz, wie im Netz-Arbeitsbereich. Die Pinsel arbeiten auf den Eckpunkten des Netzes, daher ergibt ein Netz mit mehr davon feinere Formen: Unterteilen Sie es zuerst (das {{ui:Unterteilen}} im Netz-Arbeitsbereich oder ein Modifikator „Unterteilungsfläche“, den Sie mit {{ui:Anwenden}} übernehmen), oder schalten Sie {{ui:Detail}} ein.

## Pinsel

| Pinsel | Taste | Was er tut |
| --- | --- | --- |
| {{ui:Zeichnen}} | {{key:D}} | Hebt die Fläche unter dem Pinsel an |
| {{ui:Ton}} | {{key:C}} | Baut flache Schichten auf und füllt zuerst Vertiefungen |
| {{ui:Glätten}} | {{key:S}} | Gleicht Unebenheiten aus; halten Sie {{key:Shift}}, um mit jedem Pinsel zu glätten |
| {{ui:Greifen}} | {{key:G}} | Zieht die Fläche mit dem Zeiger mit |
| {{ui:Aufblasen}} | {{key:I}} | Bläht die Fläche in ihrer eigenen Richtung auf |
| {{ui:Falte}} | {{key:Shift+C}} | Schneidet eine scharfe Rille |
| {{ui:Kneifen}} | {{key:P}} | Zieht die Fläche zur Mitte des Pinsels |
| {{ui:Abflachen}} | {{key:T}} | Drückt die Fläche zu ihrer mittleren Ebene |
| {{ui:Maske}} | {{key:M}} | Malt eine Maske, die die Fläche vor den anderen Pinseln schützt |

Halten Sie {{key:Ctrl}} beim Malen, um in die andere Richtung zu arbeiten (absenken statt anheben, einen Grat statt einer Rille, die Maske entfernen), oder schalten Sie {{ui:Entfernen}} ein.

## Größe und Stärke

Die Größe des Pinsels ist in Pixeln auf dem Bildschirm, daher fühlt sie sich gleich an, wie weit Sie auch zoomen: {{key:[}} und {{key:]}} machen ihn kleiner und größer, {{key:Shift+[}} und {{key:Shift+]}} ändern seine Stärke. Das Panel zeigt beides.

Mit einem Stift auf einem Tablet macht stärkeres Drücken den Pinsel größer und stärker; das Panel schaltet beides aus.

## Spiegeln, Maske und Detail

- {{ui:Spiegeln X}} ({{key:X}}) bildhauert beide Seiten über Rot gleichzeitig, für Gesichter und Figuren.
- Die Maske wird beim Bildhauern dunkler angezeigt. {{ui:Maske löschen}} ({{key:Alt+M}}) entfernt sie, {{ui:Maske umkehren}} ({{key:Ctrl+I}}) maskiert, was frei war, und gibt frei, was maskiert war. Die Maske wird mit dem Netz gespeichert.
- {{ui:Detail}} fügt Dreiecke dort hinzu, wo Sie bildhauern: Kanten, die länger als die im Panel eingestellte Größe sind (Pixel auf dem Bildschirm), werden unter dem Pinsel geteilt. Es braucht ein Netz aus Dreiecken und fragt, ob zuerst eines erstellt werden soll.

Jeder Strich ist ein Rückgängig-Schritt.

:::note
Detail fügt nur Dreiecke hinzu; es entfernt keine, die winzig geworden sind. Ein Neuvernetzen (im Netz-Arbeitsbereich) gleicht das ganze Netz wieder aus.
:::

Siehe auch [Ein Netz bearbeiten](topic:mesh-edit), [Netze](topic:meshes) und [Modifikatoren auf einem Netz](topic:modifiers).
