---
title: Baukörper an BimCraft senden
summary: Drücken/Ziehen-Baukörper als Baukörperoptionen an BimCraft übergeben, mit Geschossen, Grundfläche, Brutto-Geschossfläche und Volumen, berechnet aus jedem Körper.
keywords: Baukörper, Masse, Konzept, Optionen, BimCraft, IFC, BIM, Drücken/Ziehen, Geschosse, Stockwerke, Brutto-Geschossfläche, Grundfläche, Volumen, senden, übergeben, Gebäudemasse, Stufe 2
from: 73c51f3f
---

## Was Sie tun

Machen Sie die Blöcke, die Sie mit Drücken/Ziehen modelliert haben, zu Baukörperoptionen, die BimCraft versteht, damit das Konzept als Gebäudemodell weiterläuft.

## Bevor Sie beginnen

Machen Sie jede Masse zu einer **Gruppe** oder **Komponente** und benennen Sie sie. Jede wird zu einer Option. Lose Geometrie wird nicht gesendet.

## Senden

1. Wählen Sie die zu sendenden Gruppen aus. Ohne Auswahl wird jede oberste Gruppe und Komponente gesendet.
2. {{ui:Export}} wählen, dann {{ui:Massing to BimCraft…}}.
3. Geben Sie den {{ui:Name of the option set}} und die {{ui:Floor height}} ein.
4. Prüfen Sie die Liste: die Geschosse, die Grundfläche, die Brutto-Geschossfläche und das Volumen jeder Option.
5. **An BimCraft senden** wählen, um BimCraft in einem neuen Tab mit den Optionen zu öffnen, oder {{ui:Save as IFC}}, um die Datei herunterzuladen und selbst dort zu öffnen.

In BimCraft stehen die Optionen unter „Baukörperoptionen im Modell“. Dort kann eine zur aktuellen Option gemacht und zu Wänden und Decken ausgearbeitet werden.

## Wie ein Körper zur Masse wird

- **Geschosse** sind die Höhe des Körpers geteilt durch die Geschosshöhe, gerundet und mindestens eins. Die Geschosse teilen sich dann die Höhe des Körpers gleichmäßig, sodass ein 10 m hoher Block bei 3 m Geschosshöhe 3 Geschosse zu je 3.33 m hat.
- **Die Fläche eines Geschosses** ist die Fläche des eigenen waagerechten Schnitts des Körpers auf der Ebene dieses Geschosses. Ein Block, der zurückspringt, hat kleinere obere Geschosse, und die Brutto-Geschossfläche ist deren Summe.
- **Die Grundfläche** ist der Umriss des Schnitts knapp über der Basis des Körpers.
- **Das Volumen** ist das des Körpers selbst.

In der IFC-Datei ist jede Option ein Bauelement-Proxy (der Grundflächen-Umriss, auf die Höhe des Körpers angehoben), mit einem Raum pro Geschoss, der die Brutto-Geschossfläche dieses Geschosses trägt. Alle Optionen teilen sich ein Gebäude mit so vielen Geschossen wie die höchste Option.

## Vereinfachte Formen

Ein einfacher aufrechter Block wird genau so übergeben, wie modelliert. Alles andere wird trotzdem gesendet, und die Liste sagt, warum seine Form vereinfacht ist:

- **Nicht alle seine Geschosse haben die Größe der Basis** (er springt zurück oder ist geneigt): Die Masse in BimCraft ist der Umriss der Basis, auf die volle Höhe angehoben. Die Geschossflächen und das Volumen sind aber die des Körpers selbst.
- **Der Körper ist nicht geschlossen**: Geschosse, deren Schnitt sich nicht schließen lässt, werden nicht gemessen und zählen als nichts. Schließen Sie den Körper ({{ui:Entity info}} zeigt „Volumenkörper: Ja“), um vollständige Werte zu erhalten.
- **Seine Basis hat mehr als einen Umriss**: Der größte wird als Grundfläche genutzt.

## Gut zu wissen

- {{ui:IFC for BimCraft (.ifc)}} ist ein anderer Export: Er sendet nur Formen und Namen, ohne Geschosse oder Flächen.
- Nichts wird hochgeladen. Die Datei wird dem BimCraft-Tab auf diesem Computer übergeben.
