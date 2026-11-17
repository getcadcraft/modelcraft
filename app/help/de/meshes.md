---
title: Netze
summary: Eine Gruppe oder Komponente in ein Netz verwandeln, die Art von Objekt, mit der Tools für 3D-Inhalte modellieren, und wieder zurück in Drücken/Ziehen-Geometrie.
keywords: Netz, Netze, Polygon, Polygone, n-Eck, Viereck, Vierecke, Eckpunkte, Halbkante, UV, UVs, Umwandlung, in Netz umwandeln, in Geometrie umwandeln, Unterteilung, Skulptur, Modellierung, 3D-Inhalt
from: e32363e8
---

ModelCraft hat zwei Arten von Geometrie. **Drücken/Ziehen-Geometrie** ist das, was Sie zeichnen: flache Flächen, die zusammenhalten, einander schneiden und heilen. Ein **Netz** ist die Art von Objekt, mit der Tools für 3D-Inhalte modellieren: Flächen mit beliebig vielen Ecken, wobei jede Ecke eigene Texturkoordinaten (UVs), Normalen und Farben tragen kann und jeder Eckpunkt Werte wie Gewichte. Ein Netz wird wie eine Gruppe oder Komponente platziert und liegt im selben Modell neben Drücken/Ziehen-Geometrie.

## Eine Gruppe oder Komponente in ein Netz verwandeln

1. Wählen Sie eine Gruppe oder Komponente aus.
2. Klicken Sie in {{ui:Entity info}} auf {{ui:Convert to mesh}}.

Ihre Flächen werden zu den Flächen des Netzes (eine Fläche mit Löchern kommt als Dreiecke herein). Harte Kanten bleiben scharf, weiche Kanten werden weich schattiert, und Farbe, Materialien und importierte Texturen bleiben auf ihren Flächen. Gruppen und Komponenten darin werden zu einem Netz vereint. Lose Kanten bleiben außen vor: Ein Netz behält Flächen. Jede Platzierung einer Komponente zeigt das Netz. Es ist ein Schritt zum Rückgängigmachen.

## Was Entity info zeigt

Wählen Sie ein Netz aus, um seine Flächen, Eckpunkte und Kanten zu sehen, ob es ein geschlossener Volumenkörper ist (und sein Volumen) und seine Größe, wie platziert. Ein Netz mit offenen Kanten nennt deren Anzahl.

## Ein Netz zurück in Drücken/Ziehen-Geometrie verwandeln

Wählen Sie das Netz aus und klicken Sie auf {{ui:Convert to geometry}}. Ebene Flächen kommen wie zuvor zurück; eine Fläche, deren Ecken nicht in einer Ebene liegen, kommt als Dreiecke zurück. Scharfe Kanten sind hart, die anderen weich. {{ui:Explode}} legt die Flächen eines Netzes direkt in die Gruppe darum.

## Wissenswertes

- Doppelklicken Sie auf ein Netz, um [seine Eckpunkte, Kanten und Flächen zu bearbeiten](topic:mesh-edit) im Arbeitsbereich Netz. Wandeln Sie es in Geometrie um, um es mit Drücken/Ziehen zu bearbeiten; verschieben, drehen, skalieren, kopieren, malen, ausblenden und mit einem Tag versehen Sie es wie jede andere Gruppe.
- Exporte, 3D-Druck, Renderings und VR sehen ein Netz als seine Flächen.
- Eine Datei, die ein Netz enthält, wird als neuere Version der Datei `.modelcraft` gespeichert. ModelCraft 0.6 und älter können sie deshalb nicht öffnen; Dateien ohne Netz öffnen sich darin wie bisher. Wandeln Sie Netze zuerst in Geometrie um, um eine Datei mit jemandem zu teilen, der eine ältere Version nutzt.
- Rückgängig bei einem Netz speichert nur, was jeder Schritt geändert hat, daher macht selbst ein sehr großes Netz schnell rückgängig.

Siehe auch [Gruppen und Komponenten](topic:groups-components) und [Noch nicht umgesetzt](topic:not-built-yet).
