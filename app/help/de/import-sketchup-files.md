---
title: Ein SKP-Modell importieren
summary: Eine .skp-Datei mit ihren Gruppen, Komponenten, Farben, Texturen, Tags und weichen Kanten importieren, sehen, was angekommen ist und was nicht, und mit dem Modellieren weitermachen.
keywords: skp, importieren, skp öffnen, Komponenten, Gruppen, Tags, Layer, Materialien, Farben, Texturen, ausgeblendet, weiche Kanten, 3D Warehouse, migrieren, wechseln
from: 325d3c81
---

ModelCraft liest SketchUp-Dateien (`.skp`) mit einem eigenen Leser direkt auf der Seite. Nichts wird hochgeladen, und es funktioniert offline, wann immer ModelCraft das tut. Dateien von SketchUp 3 bis 2026 wurden getestet.

## Die Datei importieren

1. Klicken Sie in der Gruppe {{ui:File}} auf {{ui:Import}} (oder ziehen Sie die `.skp`-Datei auf die 3D-Ansicht).
2. Wählen Sie die Datei aus.

   Die Statusleiste zeigt „Lese house.skp…“, während sie liest, danach, was hereingekommen ist, zum Beispiel „house.skp importiert (SketchUp 25.0.575): 1240 Flächen, 6 Komponenten, in einer Gruppe.“

Das gesamte Modell kommt als eine Gruppe an, benannt nach der Datei, ausgewählt, und die Ansicht zoomt darauf. Mit {{key:Mod+Z}} wird alles wieder entfernt, einschließlich der Tags.

:::tip
Zerlegen Sie die Importgruppe ({{ui:Entity info}} › {{ui:Explode}}), wenn ihr Inhalt lose in Ihrem Modell liegen soll statt in einer Gruppe.
:::

## Was ankommt

- **Flächen** mit ihren Löchern und **Kanten**, die nicht Teil einer Fläche sind.
- **Gruppen** kommen als Gruppen an und **Komponenten** als Komponenten: Jede Kopie einer Komponente ist eine Platzierung einer Definition, sodass das Bearbeiten einer Kopie alle ändert, wie in SketchUp. Die Namen kommen mit.
- **Farben.** Das eigene Material einer Fläche gibt ihr die Farbe. Ein Material, das auf eine Gruppe oder Komponente gemalt wurde, wird zur Füllung dieser Platzierung, sodass Flächen darin ohne eigene Farbe es übernehmen, wie in SketchUp. Eine Komponente, die an einer Stelle rot und an einer anderen blau gemalt ist, bleibt eine Komponente.
- **Texturen.** Eine Fläche, die mit einem texturierten Material bemalt ist, kommt mit ihrer Textur an, auf der Fläche platziert wie in der Datei, und der Stil {{ui:Shaded}} zeigt sie. Das Bild wird beim Speichern in der ModelCraft-Datei behalten, und ein [gerendertes Bild](topic:render) zeigt es ebenfalls. Ein texturiertes Material, das auf eine ganze Gruppe oder Komponente gemalt ist, gibt dieser Kopie nur die Farbe des Materials.
- **Tags.** Eine Gruppe oder Komponente auf einem SketchUp-Tag erhält ein ModelCraft-Tag mit demselben Namen, in {{ui:Tags}} aufgelistet, angezeigt oder ausgeblendet, wie es in SketchUp war. Hat Ihr Modell bereits ein Tag mit diesem Namen, wird dieses verwendet.
- **Ausgeblendete Dinge kommen ausgeblendet an:** Flächen, Kanten, Gruppen und Komponenten sowie Flächen und Kanten auf einem ausgeblendeten Tag. Sie sehen, was SketchUp zeigte, und es geht nichts verloren: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} zeigt sie. Siehe [Ausblenden, Isolieren und Einblenden](topic:hide-isolate).
- **Weiche und glatte Kanten** bleiben weich, sodass gekrümmte Flächen glatt aussehen.
- **Größen** stimmen in jeder Einheit: SketchUp-Dateien sind intern in Zoll, und ModelCraft rechnet sie um.

## Was nicht ankommt

Die Statusleiste zeigt, was ausgelassen wurde, mit Anzahl.

- **Manche Texturen** behalten nur die Farbe ihres Materials: eine Textur, die in der Datei fehlt, ein Bild in einem Format, das Browser nicht zeigen können (etwa eine Photoshop-Datei), oder eine Textur ohne Größe. Flächen mit einer projizierten Textur kommen mit ungefähr platzierter Textur an.
- **Tags auf losen Flächen und Kanten.** ModelCraft versieht nur Gruppen und Komponenten mit Tags. Eine Fläche oder Kante mit eigenem Tag kommt daher ohne Tag an, und die Statusleiste zählt sie. Machen Sie solche Flächen zu einer Gruppe ({{key:Shift+G}}) und versehen Sie die Gruppe mit einem Tag.
- **Bilder**, die im Modell platziert sind, Text, Bemaßungen, Hilfslinien, Schnittebenen, Szenen und Stile.

## Probleme

- „This is not a SketchUp file.“ oder „This SketchUp file is damaged: …“: Die Datei ist abgeschnitten oder etwas anderes mit der Endung `.skp`. Speichern Sie sie in SketchUp erneut oder fordern Sie eine frische Kopie an.
- Eine Datei aus einer SketchUp-Version, die neuer ist als die, die ModelCraft kennt, wird mit der gefundenen Version abgelehnt.
- Ein Modell, das nur aus Bildern, Text oder Bemaßungen besteht, meldet, dass es nichts anzuzeigen hat.

## Das Modell zurückbringen

ModelCraft kann keine `.skp`-Dateien speichern. Exportieren Sie Collada ({{ui:Export}} › `.dae`) und importieren Sie es in SketchUp: Gruppen, Komponenten und Farben gehen mit; Texturen gehen als Materialfarbe mit. Siehe [Ihr Modell exportieren](topic:export-model).
