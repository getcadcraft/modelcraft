---
title: Mit Faktoren skalieren und Schwindungszugabe
summary: Eine Auswahl um einen gewählten Punkt mit einem Faktor pro Achse skalieren oder ein Gussmodell um den Prozentsatz vergrößern, um den ein Gussteil schwindet.
keywords: skalieren, ungleichmäßig, Faktor, Prozent, strecken, Schwindung, schwinden, Guss, Gussmodell, Gießerei, Zugabe, Größe ändern
from: 37e1bbff
---

Das Werkzeug Skalieren ({{key:S}}) skaliert gleichmäßig oder zieht an einem Griff, um eine oder zwei Richtungen zu strecken. **Mit Faktoren skalieren…** (Menü Werkzeuge oder die Gruppe Ändern) ist die getippte Form: eine Zahl für jede der drei Achsen.

1. Wählen Sie Kanten, Flächen, Gruppen oder Komponenten aus.
2. Öffnen Sie {{ui:Mit Faktoren skalieren…}}. Geben Sie einen Faktor für Rot, Grün und Blau ein. Ein Faktor kann `1.015`, `101.5%` oder `+1.5%` sein (und `-2%` für kleiner). {{ui:Auf allen drei Achsen gleich}} kopiert den ersten Wert auf die beiden anderen.
3. Wählen Sie, was **stehen bleibt**: die Mitte der Auswahl, ihre niedrigste Ecke, die Mitte ihrer Unterseite oder den Ursprung.
4. Die Zeile unter den Feldern zeigt die aktuelle Größe und die neue. {{ui:Skalieren}} führt es in einem Rückgängig-Schritt aus.

Die Achsen sind die der Gruppe, die Sie geöffnet haben (die des Modells auf der obersten Ebene). Eine Gruppe oder Komponente, die gedreht ist, wird schräg verzerrt, wenn ihre Faktoren verschieden sind; skalieren Sie stattdessen die Gruppe, die sie enthält. Der Inhalt einer Komponente bleibt unberührt, daher bleiben ihre anderen Kopien, wie sie sind.

## Schwindungszugabe

Ein Gussteil schwindet beim Abkühlen, daher wird sein Gussmodell größer gemacht. Geben Sie unter **Schwindungszugabe** den Prozentsatz für jede Achse ein (Ihre Gießerei oder Ihr Modellbauer nennt ihn für Ihr Metall; 1.5 % unten ist nur ein Beispiel) und drücken Sie {{ui:Als Faktoren verwenden}}.

- **Der Prozentsatz selbst** macht den Faktor 1 plus den Prozentsatz: 1.5 % ergibt 1.015, was ein Schwindmaßstab markiert.
- **Genau genug** macht den Faktor 1 geteilt durch 1 minus den Prozentsatz: 1.5 % ergibt 1.0152, damit das Gussteil nach dem Schwinden in der Größe des Teils herauskommt.

Ihre letzten Prozentsätze werden in diesem Browser gespeichert.

:::note
Den Prozentsatz legen Sie fest: ModelCraft kennt Ihr Metall, Ihre Gießform oder Ihr Verfahren nicht.
:::
