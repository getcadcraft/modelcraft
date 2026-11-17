---
title: Eine Render-Engine mit einem Add-on hinzufügen
summary: Was ein Add-on zur Engine-Liste des Dialogs „Bild rendern…“ hinzufügen kann, welche Berechtigung es braucht, um ein Programm auszuführen, und was Studio prüft und abfragt.
keywords: Add-on, Addon, Engine, Render-Engine, Entwickler, engine.run, Berechtigung, Programm, Skript, signiert, Studio, API
from: cd7a39ba
---

Ein Add-on (Einstellungen › Add-ons) kann eine Engine zur Engine-Liste von {{ui:Bild rendern…}} hinzufügen. Den vollständigen Text für Add-on-Autoren finden Sie in Abschnitt 16 der Add-on-Spezifikation; kurz gefasst:

- Das Add-on registriert eine Engine mit einer ID, die mit seiner eigenen beginnt, einem Namen, optionalen Einstellungen und **entweder** einem auszuführenden Programm **oder** einer Funktion in JavaScript, die das Bild zeichnet.
- Eine Engine, die ein Programm ausführt, braucht die Berechtigung **`engine.run`**, die vor der Installation und in den Einstellungen angezeigt wird. Sie läuft nur in Studio; im Browser erscheint sie als Datei zum Speichern.
- Das Add-on nennt das Programm (ein einfacher Dateiname, nie eine Shell), ein Skript, das **im signierten Add-on** liegt, und Argumente aus Platzhaltern und einfachen Wörtern. Studio findet das Programm oder bittet Sie einmal, darauf zu zeigen.
- Wenn ein Add-on zum ersten Mal ein Programm ausführt, **fragt Studio Sie in einem eigenen Dialog**: welches Add-on, welches Programm und dass ein Skript alles tun kann, was das Programm kann. Erlauben Sie das nur einem Add-on, dem Sie vertrauen. Ihre Antwort wird für dieses Add-on und Programm gespeichert.
- Das Paket (die Szene als USD und eine Einstellungsdatei, mit der glTF-Datei, wenn das Add-on sie anfordert) und das Skript des Add-ons werden in einen neuen temporären Ordner gelegt; das Programm läuft dort, und das Bild kommt mit dem Namen der Engine des Add-ons zurück.

:::note
Add-ons können Render-Engines nur ab Add-on-API 1.4 hinzufügen. Ein ausgearbeitetes Beispiel für einen quelloffenen Renderer über die Kommandozeile liegt in einem eigenen Repository; es wurde mit diesem Renderer noch nicht ausgeführt.
:::
