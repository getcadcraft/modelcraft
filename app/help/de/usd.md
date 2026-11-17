---
title: USD speichern, öffnen und exportieren
summary: Das ganze Modell als USD (.usda, .usdc oder .usdz) ohne Verlust speichern, wieder öffnen und USD-Szenen aus anderen 3D-Programmen importieren.
keywords: usd, usda, usdc, usdz, openusd, Universal Scene Description, speichern als, exportieren, importieren, Szenenzusammenstellung, Archviz, openpbr, materialx, Paket
from: 73d299f9
---

USD ist ein Szenenformat, das viele 3D-, Rendering- und Archviz-Programme gemeinsam nutzen. ModelCraft schreibt und liest es. `.modelcraft` bleibt das Format, das {{ui:Speichern}} schreibt; USD ist eine Auswahl unter {{ui:Speichern als}}.

## Als USD speichern

1. Wählen Sie {{ui:Speichern als}} in der Gruppe {{ui:Datei}} (oder drücken Sie {{key:Mod+Shift+S}}).
2. Wählen Sie das Format: {{ui:Text (.usda)}} (lesbar, gut für die Versionsverwaltung), {{ui:Binär (.usdc)}} (am kleinsten und schnellsten) oder {{ui:Paket (.usdz)}} (eine Datei mit den Texturen darin).
3. Die Datei wird heruntergeladen (in der Desktop-App wählen Sie, wohin sie gehen soll).

Dieselben Auswahlmöglichkeiten gibt es unter {{ui:Exportieren}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nichts geht verloren

Öffnen Sie eine USD-Datei, die ModelCraft gespeichert hat, und Sie erhalten das Modell genau zurück: Flächen mit ihren Löchern, weiche und verdeckte Kanten, Kurven, Gruppen und Komponenten, Tags, Szenen, Bemaßungen, Hilfslinien, Schnittebenen, Lampen, importierte Texturen und die Ansicht. Andere Programme sehen dasselbe Modell als Netze, Gruppen, Prototypen für Komponenten, Materialien, Lampen und Kameras.

:::note
Ändert ein anderes Programm die Geometrie einer Gruppe oder Komponente, öffnet ModelCraft diesen Teil als Netz mit erhaltener Änderung und sagt, wie viele Teile es so gelesen hat. Eine Platzierung, die in einem anderen Programm verschoben oder gelöscht wurde, bleibt verschoben oder gelöscht.
:::

## Fremde USD-Datei öffnen oder importieren

- {{ui:Öffnen}} Sie eine `.usd`-, `.usda`-, `.usdc`- oder `.usdz`-Datei, um daraus ein Modell zu beginnen.
- {{ui:Importieren}} Sie eine solche Datei, um sie dem geöffneten Modell hinzuzufügen. Legen Sie die Dateien, auf die sie verweist (andere Layer, Texturen), zusammen mit ihr ab.

Netze kommen mit ihren Normalen, UV-Koordinaten und Farben herein, gemeinsam genutzte Geometrie als Komponenten, Materialien als Farben des Farbeimers, Lampen als Lampen und Kameras als Szenen, in Metern mit Z nach oben, unabhängig von den Einheiten und der Hochachse der Datei.

## Noch nicht

Animationen, Skelette und MaterialX-Knotengraphen werden noch nicht als USD gelesen oder geschrieben. Die eigenen Animationen und Knotenmaterialien von ModelCraft bleiben in einer USD-Datei erhalten, die es gespeichert hat, damit ModelCraft sie wieder öffnen kann; andere Programme sehen sie aber nicht. Layer, auf die eine Datei verweist und die ModelCraft nicht lesen kann (zum Beispiel ein MaterialX-Dokument), werden mit einem Hinweis weggelassen.
