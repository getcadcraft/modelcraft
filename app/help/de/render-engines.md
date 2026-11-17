---
title: Wählen, welches Programm das Bild zeichnet
summary: Die Engine-Auswahl im Dialog „Bild rendern…“: unsere eigenen zwei Engines, andere Programme in CadCraft Studio und was das Web stattdessen tut.
keywords: Rendern, Engine, Renderer, Render-Engine, Plug-in, Plugin, Studio, externes Programm, gezeichnet von, Warteschlange, Add-on-Engine, Öffnen in
from: be4b056a
---

{{ui:Bild rendern…}} hat oberhalb von **Modus** eine Auswahl **Engine**. Unsere eigenen zwei Engines sind immer vorhanden und funktionieren überall; Add-ons können weitere hinzufügen, und in CadCraft Studio enthält die Liste außerdem die Programme, die die Szene übernehmen.

| Engine | Was sie tut | Wo |
|---|---|---|
| Eingebaut: Schnell | Das schnelle Standbild: Tageslicht, weiche Schatten, Glas- und Metalloptik, in Sekunden | Der Browser und Studio |
| Eingebaut: Pfadverfolgung | Licht, das zwischen Oberflächen reflektiert wird, auf Ihrer Grafikkarte oder Ihrem Prozessor, die Render-Warteschlange und die anderen Computer in Ihrem Netzwerk | Der Browser und Studio |
| Die Engine eines Add-ons | Sie zeichnet das Bild und gibt es zurück: siehe [Das Bild mit einem anderen Programm zeichnen](topic:render-other-program) | Der Browser (eine Engine in JavaScript) oder Studio (eine Engine, die ein Programm ausführt) |
| Ein Programm, das die Szene übernimmt | Studio legt die Szene in seinem Ordner ab und hält sie synchron | Studio |
| Öffnen in … | Speichert die Szene und öffnet sie in einem Programm; nichts kommt zurück: siehe [Die Szene in einem anderen Programm öffnen](topic:render-open-in) | Im Web wird die Datei gespeichert |

## So verhält sich die Auswahl

- Wenn Sie Schnell oder die Pfadverfolgung wählen, ändert sich der Modus damit, und umgekehrt. Am Dialog ändert sich sonst nichts für Personen, die nie eine andere Engine verwenden.
- Eine nicht verfügbare Engine bleibt in der Liste, mit dem Grund („nicht gefunden“, „braucht eine neuere Version“); Sie können sie nicht wählen. Im Browser zeigt eine Engine, die nur in Studio läuft, „speichert eine Datei“: {{ui:Bild rendern…}} speichert dann die Szene und ihre Einstellungen in eine Datei, die Sie in dieses Programm bringen.
- Die Auswahl wird mit den Render-Einstellungen der Datei gespeichert; die zuletzt gewählte Engine ist die Start-Engine für Dateien ohne eigene Auswahl.
- Ein Bild aus einem anderen Programm zeigt im Dialog und in der Render-Warteschlange, welches Programm es gezeichnet hat und in welcher Version. Die Zusagen der Seite [Rendern](topic:render) gelten nur für **unsere eigenen** Engines: Ein anderes Programm beleuchtet, tont und samplet auf seine Weise, sodass zwei Bilder einer Szene in Kamera, Sonne, Lampen und Belichtung gleich sind, aber nicht Pixel für Pixel.

## Was jede Engine erhält

Die Szene geht als **Paket** an ein anderes Programm: das Modell als USD-Datei (dieselbe Datei, die [Als USD speichern](topic:usd) schreibt), und eine Einstellungsdatei mit allem, dem ein USD-Importer nicht vertrauen kann: die genauen Materialwerte, die eingeschalteten Lampen mit ihrer Leistung und ihren Lichtprofilen, die Sonne, den Himmel, die Belichtung und die Kamera so, wie der Dialog sie zeichnen würde. Nichts wird irgendwohin hochgeladen.

## Die Render-Warteschlange

Ein Bild oder eine Animation für ein anderes Programm kann wie unsere eigenen in [der Render-Warteschlange](topic:render#the-render-queue) warten; ihr Auftrag merkt sich, für welche Engine er ist. Eine Animation geht in einem Durchlauf an das Programm.
