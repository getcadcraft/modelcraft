---
title: Tags: Gruppen von Objekten anzeigen und ausblenden
summary: Geben Sie Gruppen und Komponenten einen Tag, etwa Möbel oder Wände, und blenden Sie alles mit diesem Tag auf einmal ein oder aus.
keywords: Tags, Tag, Layer, Sichtbarkeit, anzeigen, ausblenden, Möbel, Wände, ohne Tag, Tag umbenennen, Tag löschen, organisieren
from: c1a95a05
---

Ein Tag ist ein Name, den Sie Gruppen und Komponenten geben, etwa **Möbel**, **Wände** oder **Grundstück**, damit Sie alles mit diesem Tag auf einmal ein- oder ausblenden können. Tags entsprechen dem, was CAD-Programme Layer nennen. Zum Ausblenden einzelner Objekte siehe [Ausblenden, isolieren und einblenden](topic:hide-isolate).

## Tag erstellen

1. Klicken Sie im rechten Bereich bei {{ui:Tags}} auf {{ui:Tag hinzufügen}}.
2. Geben Sie den Namen ein und drücken Sie {{key:Enter}}.

Um einen Tag umzubenennen, klicken Sie in {{ui:Tags}} auf seinen Namen, geben den neuen Namen ein und drücken {{key:Enter}}. Zwei Tags können keinen gleichen Namen haben.

## Gruppen und Komponenten taggen

1. Wählen Sie eine oder mehrere Gruppen oder Komponenten.
2. Wählen Sie in {{ui:Objektinfo}} den Tag bei {{ui:Tag}}. {{ui:Neuer Tag…}} erstellt einen neuen Tag und versieht die Auswahl damit.

{{ui:Ohne Tag}} entfernt den Tag. Die Zahl neben jedem Tag in {{ui:Tags}} zeigt, wie viele Gruppen und Komponenten ihn haben.

Taggen Sie Gruppen und Komponenten, nicht lose Flächen und Kanten: Zeichnen Sie die Dinge, die Sie taggen wollen, zuerst als Gruppen (wählen Sie sie aus, {{key:Shift+G}}).

## Ein- und ausblenden

Klicken Sie auf das Auge neben einem Tag. Alles mit diesem Tag verschwindet aus der Ansicht, wo immer es im Modell liegt (auch in anderen Gruppen), und Klicks und Fangpunkte gehen daran vorbei. Klicken Sie erneut auf das Auge, um es wieder anzuzeigen. {{ui:Ohne Tag}}-Objekte werden immer angezeigt.

Wenn Sie innerhalb einer Gruppe bearbeiten, deren Tag Sie ausblenden, wird die Gruppe geschlossen.

## Tag löschen

Klicken Sie auf den Papierkorb neben dem Tag. Was den Tag hatte, wird {{ui:Ohne Tag}} und wird angezeigt.

## Wissenswertes

- Tags, ihre Namen und welche ausgeblendet sind, werden in der ModelCraft-Datei gespeichert. Wer eine getaggte Gruppe in ein anderes Modell kopiert, bringt deren Tag mit.
- Das Ein- und Ausblenden eines Tags und jede andere Änderung an Tags ist ein einziger Rückgängig-Schritt.
- Exporte enthalten alles, auch ausgeblendete Tags, wie sie es auch für ausgeblendete Objekte tun.
- Layer in DWG- und DXF-Lageplänen werden noch nicht als Tags übernommen: Die ganze Zeichnung wird als eine Gruppe importiert.
