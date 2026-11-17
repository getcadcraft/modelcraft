---
title: Die Szene in einem anderen Programm öffnen
summary: Die Szene als USD- oder glTF-Datei für jedes Programm speichern, das sie liest, oder sie aus Studio in einem Programm auf diesem Computer öffnen.
keywords: Öffnen in, USD, glTF, glb, Export, Renderprogramm, Archviz, Studio, usdview, senden, Übergabe, Paket, Unreal-Ordner
from: 812329d5
---

Wählen Sie einen Eintrag **Öffnen in** in der Engine-Liste von {{ui:Bild rendern…}}, um die Szene in ein anderes Programm zu bringen. Nichts kommt zurück ins Modell.

## Eine Datei für jedes Programm

- **USD-Datei** speichert die Szene als `.usdc` (oder `.usdz`, wenn das Modell Bilder enthält): dieselbe Datei wie [Als USD speichern](topic:usd), mit Materialien, Lampen und Kameras. Sie behält Instanzierungen und die genauen Materialwerte. Die meisten Renderer, Game-Engines und Viewer lesen USD.
- **glTF-Datei (.glb)** speichert die schlankere glTF-2.0-Datei mit Materialien, Texturen und Lampen; siehe [Ein Modell für andere Programme exportieren](topic:export-model) für die Formate, die ModelCraft schreibt.

- **Unreal-Projektordner (.zip)** speichert den Ordner, den [Die Szene an eine Game-Engine senden](topic:render-unreal) schreibt, für ein Projekt auf jedem Computer.

Alle drei funktionieren im Browser und in Studio.

## In Studio: in einem Programm öffnen

Studio listet die Programme auf, die es auf diesem Computer findet und die die Szene öffnen können: usdview, wenn es in Ihrem Suchpfad liegt, und das eigene Programm des Computers für den Dateityp. Wählen Sie eines, wählen Sie USD oder glTF, wo beide gelesen werden, und klicken Sie auf {{ui:Rendern}}. Studio schreibt das Paket in einen neuen Ordner unter Dokumente (`CadCraft hand-off`; nichts wird überschrieben, jede Übergabe bekommt einen eigenen Ordner) und startet das Programm damit und sagt dann, wo die Dateien liegen.

| Programm | Liest am besten |
|---|---|
| usdview | USD |
| Das eigene Programm des Computers | Was der Computer für den Dateityp hat |

Studio startet nur Programme aus dieser festen Liste; es führt nichts aus, was die Seite beim Namen verlangt, und startet nie ein Programm unter der GNU GPL-Lizenz (siehe [Das Bild mit einem anderen Programm zeichnen](topic:render-other-program#programs-cadcraft-never-runs)). Jedes Programm, das USD oder glTF liest, öffnet die Datei aus **Eine Datei für jedes Programm** oben.

:::note
Twinmotion, Enscape und andere Visualisierungsprogramme stehen nicht in der Liste: CadCraft wurde mit ihnen nicht geprüft, und es werden keine Aussagen dazu gemacht. Eine glTF- oder USD-Datei von hier ist der Weg hinein.
:::
