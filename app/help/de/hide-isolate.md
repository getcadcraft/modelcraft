---
title: Ausblenden, Isolieren und Einblenden
summary: Dinge aus dem Weg räumen, um zwischen ihnen zu arbeiten, oder nur das zeigen, woran Sie arbeiten. Ausgeblendete Dinge bleiben in der Datei ausgeblendet.
keywords: ausblenden, einblenden, alles einblenden, isolieren, andere ausblenden, anzeigen, ausgeblendet, lokale Ansicht, Sichtbarkeit, aus dem Weg
from: 2c8a3457
---

Ausblenden räumt Dinge aus dem Weg, ohne sie zu löschen. Eine ausgeblendete Fläche, Kante, Gruppe oder Komponente wird nicht gezeichnet, und Sie können sie nicht mehr fangen, anklicken oder auswählen. So können Sie an dem arbeiten, was hinter oder zwischen Dingen liegt.

## Ausblenden

1. Wählen Sie aus, was ausgeblendet werden soll: Flächen, Kanten, Gruppen oder Komponenten.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Hide}}.

Um zum Beispiel im schmalen Spalt zwischen zwei nah beieinanderstehenden Gruppen zu arbeiten, wählen Sie die vordere aus und blenden Sie sie aus: Klicks und Fänge erreichen nun die Fläche dahinter.

## Isolieren

Wählen Sie aus, was sichtbar bleiben soll, dann {{ui:Edit}} › {{ui:More}} › {{ui:Isolate (hide the rest)}}. Alles andere im Modell wird ausgeblendet, oder, während Sie in einer Gruppe bearbeiten, alles andere in dieser Gruppe. Eine ausgewählte Fläche behält ihre Kanten.

## Alles einblenden

{{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} zeigt wieder alles, in jeder Gruppe. {{ui:Entity info}} zeigt, wie viele Dinge ausgeblendet sind, wenn nichts ausgewählt ist, und hat dort ebenfalls eine Schaltfläche {{ui:Unhide all}}.

Die {{ui:Outliner}} zeigt ausgeblendete Gruppen und Komponenten kursiv mit einem durchgestrichenen Auge. Klicken Sie auf das Auge, um eine wieder anzuzeigen.

:::note
Mit Modeler-Tasten blendet {{key:H}} aus, {{key:Shift+H}} isoliert und {{key:Alt+H}} blendet alles wieder ein. ({{ui:Settings}} › {{ui:ModelCraft}} legt den Tastenstil fest.)
:::

## Wissenswertes

- Was ausgeblendet ist, wird in der ModelCraft-Datei gespeichert und ist beim Öffnen wieder ausgeblendet.
- Ausgeblendete Dinge sind weiterhin im Modell: Exporte enthalten sie, und Volumen und Größen in {{ui:Entity info}} berücksichtigen sie ebenfalls.
- Jedes Ausblenden, Isolieren oder Einblenden ist ein Schritt für {{key:Mod+Z}} (Rückgängig).
