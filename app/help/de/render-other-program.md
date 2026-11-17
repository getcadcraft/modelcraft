---
title: Das Bild mit einem anderen Programm zeichnen
summary: Unsere eigene Pfadverfolgung zeichnet das Bild von Render; ein anderes Programm kann es nur über ein Render-Engine-Add-on in CadCraft Studio zeichnen. Was übernommen wird und warum manche Programme nie angeboten werden.
keywords: Rendern, Engine, externes Programm, Add-on-Engine, Studio, Hintergrund, Warteschlange, USD, glTF, gezeichnet von, Blender, GPL
from: 150f94f1
---

Das Bild in {{ui:Bild rendern…}} wird von **unseren eigenen Engines** gezeichnet: Schnell und der Pfadverfolgung, im Browser und in CadCraft Studio. Ein anderes Programm kann es nur zeichnen, wenn ein **Render-Engine-Add-on** es einbringt: siehe [Eine Render-Engine mit einem Add-on hinzufügen](topic:render-engine-addons). Um die Szene in ein anderes Programm zu bringen und dort weiterzuarbeiten, verwenden Sie [Die Szene in einem anderen Programm öffnen](topic:render-open-in) oder [Die Szene an eine Game-Engine senden](topic:render-unreal).

## Ein Bild mit der Engine eines Add-ons zeichnen

1. Schalten Sie das Add-on unter Einstellungen › Add-ons ein. Seine Engine erscheint in der Engine-Liste von {{ui:Bild rendern…}}.
2. Wählen Sie sie. Ihre eigenen Einstellungen erscheinen unter der Engine-Liste.
3. Klicken Sie auf {{ui:Rendern}}. In Studio fragt Studio Sie beim ersten Mal, wenn ein Add-on ein Programm ausführt, in einem eigenen Dialog. Der Fortschritt wird angezeigt, während gezeichnet wird; {{ui:Stopp}} beendet es. Das Bild erscheint mit der Markierung der Engine, die es gezeichnet hat.

Eine in JavaScript geschriebene Engine läuft auch im Browser. Eine Engine, die ein Programm auf diesem Computer ausführt, läuft nur in Studio; im Browser erscheint sie als Datei zum Speichern.

## Was übernommen wird

Die Engine erhält ein **Paket**: das Modell als USD-Datei (und eine glTF-Datei, wenn sie sie anfordert) sowie eine Einstellungsdatei mit den genauen Materialwerten, der Sonne und dem Himmel, jeder eingeschalteten Lampe mit ihrer Leistung und ihrem Lichtprofil, der Kamera und der Belichtung. Jedes Programm beleuchtet, tont und samplet auf seine Weise, sodass Bilder in Kamera, Sonne, Lampen und Belichtung gleich sind, aber nicht Pixel für Pixel.

## Programme, die CadCraft nie ausführt

CadCraft startet nie ein Programm unter der GNU GPL-Lizenz und führt nie eines als Engine oder als Ziel von Öffnen in auf. Blender gehört dazu, deshalb steht es nicht in der Engine-Liste. Eine USD- oder glTF-Datei, die aus {{ui:Bild rendern…}} gespeichert wurde, lässt sich dort trotzdem öffnen, wie in jedem Programm, das diese Dateien liest.

:::note
Panorama- und Stereokameras sowie ein Himmelsbild (stattdessen werden die Himmelsfarben verwendet) werden nicht an ein anderes Programm übernommen. Nichts, was in einem anderen Programm gemacht wird, kommt zurück ins Modell.
:::
