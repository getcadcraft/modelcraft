---
title: Die Szene an eine Game-Engine senden
summary: Studio kann die Szene in ein Unreal-Engine-Projekt schreiben und bei jedem Senden aktuell halten; Ihre eigenen Änderungen liegen in einem Layer, den CadCraft nie schreibt. Das Plug-in, das sie öffnet, ist noch nicht veröffentlicht.
keywords: unreal, unreal engine, game engine, Verknüpfung, senden, USD-Stage, Projekt, live, cine camera, movie render queue
from: 9a765cc2
---

In CadCraft Studio kann die Engine-Liste eine **Verknüpfung** zu einem Unreal-Engine-Projekt enthalten. Nur in eine Richtung: von CadCraft zu Unreal.

## Die Szene senden

1. Wählen Sie den Unreal-Eintrag in der Engine-Liste. Beim ersten Mal fragt Studio nach dem Ordner Ihres Projekts (dem mit der Datei `.uproject`); er wird gespeichert.
2. Klicken Sie auf {{ui:Senden}}. Studio schreibt `CadCraft/<file name>/` in das Projekt: die Szene als USD-Datei, die Einstellungsdatei, Lichtprofile und zwei kleine Layer-Dateien.
3. Ändern Sie das Modell, speichern Sie und senden Sie erneut. Nur die Szene und die Einstellungsdatei werden ersetzt.

## Ihre eigenen Änderungen bleiben erhalten

Die Stage, die Unreal öffnet, ist eine kleine Root-Layer, die einmal erstellt wird, mit zwei Layern darunter: **Ihrer** oben (`<name>.user.usda`, zu Beginn leer, wird von CadCraft nie neu geschrieben) und der Szene von CadCraft darunter. Änderungen, die Sie in Ihrem eigenen Layer speichern, bleiben erhalten, wenn die Szene erneut gesendet wird. Lichter und andere Akteure, die Sie im Unreal-Level platzieren, liegen außerhalb der Stage und werden ebenfalls nicht verändert.

## Ohne Studio

Im Browser oder auf einem Computer, auf dem Studio Unreal nicht findet, wählen Sie **Unreal-Projektordner (.zip)** in der Engine-Liste und klicken Sie auf {{ui:Rendern}}. Es wird derselbe Ordner als ZIP-Datei gespeichert: Entpacken Sie sie in den Ordner `CadCraft` Ihres Projekts. Lassen Sie **Stage-Dateien einschließen** beim ersten Mal aktiviert; deaktivieren Sie es für spätere Speicherungen, damit das ZIP nur die Szene und die Einstellungsdatei enthält und Ihr eigener Layer nie ersetzt wird.

:::note
Das Unreal-Plug-in, das die Stage öffnet, Sonne, Lampen, Kameras und Belichtung anwendet, jedem Senden folgt und eine Kamera rendert, ist **noch nicht veröffentlicht** und wurde in Unreal noch nicht ausgeführt. Bis dahin legt Senden die Dateien im Projekt ab, und die USD-Werkzeuge von Unreal selbst können sie öffnen. Windows ist das erste System; macOS folgt.
:::
