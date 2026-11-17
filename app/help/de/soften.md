---
title: Kanten glätten
summary: Blenden Sie die Kanten zwischen Flächen aus, die in einem flachen Winkel aufeinandertreffen, damit gekrümmte Formen als eine glatte Oberfläche wirken – in ModelCraft und in exportierten Dateien.
keywords: glätten, Glätten, weiche Kanten, glatte Schattierung, Kanten ausblenden, Facetten, facettiert, gekrümmt, Normalen, härten, Winkel
from: 52d32453
---

Eine gekrümmte Form in ModelCraft besteht aus flachen Flächen. **Weiche** Kanten zwischen diesen Flächen werden nicht gezeichnet, und die Flächen, die sie verbinden, werden als eine glatte Oberfläche schattiert, sodass ein Zylinder mit 24 Seiten rund aussieht.

Wenn Sie einen Kreis mit {{ui:Drücken/Ziehen}} hochziehen, werden seine Seiten für Sie geglättet. Bei anderen Formen glätten Sie nach Winkel.

## Nach Winkel glätten

1. Wählen Sie aus, was geglättet werden soll: Flächen und Kanten oder eine Gruppe bzw. Komponente (alle ihre Kanten).
2. Geben Sie in {{ui:Objektinfo}} einen Winkel in {{ui:Glätten bis}} ein, zum Beispiel `20`, und klicken Sie auf {{ui:Glätten}}.

Jede Kante in der Auswahl, deren zwei Flächen sich um diesen Winkel oder weniger drehen, wird weich; Kanten mit einer schärferen Drehung bleiben hart. Die Seiten eines Prismas mit 12 Seiten drehen sich um 30° und seine Ränder um 90°, daher glättet `31` nur die Seiten.

{{ui:Alle härten}} macht jede Kante in der Auswahl wieder hart. Jeder Schritt ist ein Rückgängig-Schritt.

## Wissenswertes

- Nur Kanten zwischen genau zwei Flächen werden geglättet. Lose Kanten bleiben, wie sie sind.
- Glatte Schattierung wirkt nur über weiche Kanten: Eine Fläche ohne weiche Kante wird flach schattiert.
- Weiche Kanten bleiben in der ModelCraft-Datei erhalten. **glTF (.glb)**- und **OBJ**-Exporte enthalten die glatte Schattierung (eine Normale pro Ecke), damit andere Programme dieselbe Oberfläche zeigen. Collada und STL exportieren flache Flächen.
- Weiche Kanten sind in jedem Flächenstil ausgeblendet, auch in {{ui:Röntgen}} und {{ui:Drahtmodell}}. Um sie zu sehen, wählen Sie die Form aus und klicken Sie auf {{ui:Alle härten}}; Rückgängig stellt die Glättung wieder her.
