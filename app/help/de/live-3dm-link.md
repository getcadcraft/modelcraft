---
title: Ein .3dm-Modell live verknüpft halten
summary: Ein Modell im Programm ändern, das es erstellt hat, aus Rhino 8 oder einer Grasshopper-Definition, und die Änderung hier sehen, ohne erneut zu speichern und zu importieren.
keywords: rhino, grasshopper, Live-Verknüpfung, Live-Verbindung, 3dm, NURBS, parametrisch, Verknüpfung, Synchronisation, Skript, Referenzmodell, Push
from: 331b0a7e
---

Modellieren Sie weiter, wo Sie modellieren, und verwenden Sie das Ergebnis hier: zum Rendern, zur Beleuchtung oder um eine Szene darum herum anzuordnen. Jede Änderung im anderen Programm aktualisiert eine Gruppe in ModelCraft.

:::note
Die Verknüpfung braucht **CadCraft Studio** auf demselben Computer. Ein Browser-Tab kann die Verbindung nicht herstellen. Nichts wird über das Internet übertragen: Das Skript spricht mit Studio unter der eigenen Adresse dieses Computers, mit einem Token.
:::

:::warning
Diese Verknüpfung wurde mit dem Dateischreiber des Skripts und einem Ersatz für das andere Programm getestet, noch nicht in Rhino oder Grasshopper selbst. Falls dort etwas fehlschlägt, teilen Sie uns mit, was gemeldet wurde.
:::

## Einrichten

1. In Studio ModelCraft öffnen. Unter {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}} ein Häkchen bei **KI-Assistenten und Skripte ModelCraft nutzen lassen** setzen, dann **Bearbeiten** klicken.
2. In Studio {{ui:Connect an assistant}} wählen. Dort werden die Adresse und das Token angezeigt, die Sie unten einfügen.
3. Skript herunterladen: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Aus Rhino

1. `cadcraft_link.py` im Skript-Editor von Rhino ausführen (Python 3 in Rhino 8).
2. Beim ersten Mal Adresse und Token einfügen. Sie werden in `.cadcraft-link.json` in Ihrem Benutzerordner gespeichert, nie im Modell. Studio erstellt bei jedem Start ein neues Token, daher fragt das Skript dann erneut.

Das ganze Modell wird als eine Gruppe übertragen, benannt nach dem Dokument, zum Beispiel „chair (linked)“. Danach wird jede Änderung übertragen, sobald Sie kurz innehalten, und nur die geänderten Objekte werden gesendet. Führen Sie das Skript erneut aus, um es zu beenden.

## Aus Grasshopper

Führen Sie das Skript zuerst einmal in Rhino aus, damit Adresse und Token gespeichert werden.

1. Eine Skript-Komponente (Python 3) hinzufügen und den gesamten Inhalt von `cadcraft_link.py` hineinkopieren.
2. Geben Sie ihr diese Eingaben: `G` (die Geometrie, mit Listenzugriff), `N` (ein Name, optional), `On` (ein Ja/Nein-Schalter) und `Target` (optional: `model` oder `part`, wenn beide Programme geöffnet sind).
3. `On` auf `true` setzen.

Bei jeder Berechnung wird `G` übertragen und ersetzt, was zuletzt gesendet wurde. Das Ziehen eines Schiebereglers aktualisiert daher die Gruppe hier. Der Ausgang `a` zeigt, was passiert ist. Jede Komponente hat ihre eigene Gruppe.

## Was Sie mit der Gruppe tun können

- **Verschieben, mit einem Tag versehen, darum herum bauen.** Position und Tag der Gruppe bleiben bei jeder Aktualisierung erhalten, ebenso alles daneben.
- **Nicht innen bearbeiten.** Jede Aktualisierung ersetzt den Inhalt der Gruppe. Diese Objekte gehören dem anderen Programm.
- **Rückgängig.** Aktualisierungen innerhalb von zwei Sekunden teilen sich einen Schritt, sodass {{key:Mod+Z}} einen ganzen Zug zurücknimmt. Die nächste Aktualisierung bringt das Modell wieder in Übereinstimmung.
- **Speichern.** Die gespeicherte Datei behält die Verknüpfung. Führen Sie das Skript nach dem erneuten Öffnen erneut aus, dann aktualisiert sich dieselbe Gruppe.

## Was übertragen wird

Netze, Polyflächen, Flächen und Extrusionen als das Netz, das Sie auf dem Bildschirm sehen; SubD als sein Netz; Kurven als Kanten; Blöcke als eigenständige Objekte an ihrer Stelle (nicht als Komponenten); Layer als Tags, dazu Farben und Einheiten. Wie diese hier erscheinen, zeigt [Ein .3dm-Modell importieren](topic:import-3dm-files).

Nicht übertragen werden (mit Anzahl im anderen Programm angegeben): Punkte, Text, Bemaßungen, Lichter und Ähnliches.

**Nur eine Richtung.** Änderungen hier gehen nicht an das andere Programm zurück.

## Wenn etwas schiefgeht

- „Kein ModelCraft- oder PartCraft-Fenster erlaubt das“: Schritt 1 der Einrichtung ausführen.
- „Studio hat das Token abgewiesen“: Studio wurde neu gestartet. Das neue Token kopieren und das Skript erneut ausführen. Für Grasshopper zuerst in Rhino ausführen.
- „CadCraft Studio kann nicht erreicht werden“: Studio läuft nicht, oder die Adresse hat sich geändert.
