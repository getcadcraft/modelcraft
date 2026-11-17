---
title: Stile und Sonnenschatten
summary: Das Modell schattiert, als verdeckte Linien, als Drahtmodell oder durchsichtig anzeigen und die Schatten untersuchen, die es zu jedem Datum, jeder Uhrzeit und an jedem Ort wirft.
keywords: Präsentationsansicht, saubere Ansicht, Hilfslinien ausblenden, Achsen ausblenden, Stil, schattiert, verdeckte Linien, Drahtmodell, Röntgen, Kanten, Schatten, Sonne, Sonnenstudie, Solar, Datum, Uhrzeit, Breitengrad, Längengrad, Zeitzone, Norden
from: 09c95329
---

Der Bereich {{ui:Stil}} rechts ändert, wie das Modell gezeichnet wird. Nichts darin ändert das Modell selbst, und er ist nicht Teil der Rückgängig-Funktion. Jede [Szene](topic:scenes) merkt sich ihren eigenen Stil, und die Datei merkt sich den Stil, den Sie beim Speichern hatten.

## Flächen

Wählen Sie einen in der Liste {{ui:Flächen}}:

| Stil | Aussehen |
|---|---|
| {{ui:Schattiert}} | Volle Flächen, weich beleuchtet. Von hinten gesehene Flächen sind blaugrau. Importierte Farben werden angezeigt. |
| {{ui:Verdeckte Linien}} | Flächen in der Hintergrundfarbe mit Kanten in dunkler Strichfarbe: eine saubere Strichzeichnung ohne verdeckte Linien. Weiß bei {{ui:Papier}}, dunkel bei {{ui:Modell}}. |
| {{ui:Drahtmodell}} | Nur Kanten. Flächen werden nicht gezeichnet, zählen aber beim Klicken und Fangen: Man kann nicht durch sie hindurch wählen. |
| {{ui:Röntgen}} | Durchsichtige Flächen, um zu sehen, was dahinter oder darin liegt. Wie beim Drahtmodell bleiben Klicks und Fangpunkte an der nächsten Fläche hängen. |

{{ui:Kanten anzeigen}} schaltet die Kanten in jedem Stil außer {{ui:Drahtmodell}} ein oder aus. Ist es aus, zeigt {{ui:Verdeckte Linien}} fast nichts, da seine Flächen dem Hintergrund entsprechen. Weiche Kanten, etwa die Seiten eines gezogenen Kreises, werden nie gezeichnet.

## Sonnenschatten einschalten

1. Setzen Sie den Haken bei {{ui:Sonnenschatten}}. Die Sonneneinstellungen darunter werden aktiv, und das Modell wirft Schatten auf sich selbst und auf den Boden.
2. Legen Sie den Ort fest:
   - {{ui:Breitengrad}}: Norden ist positiv, Süden negativ (New York liegt etwa bei 40.7, Sydney etwa bei -33.9).
   - {{ui:Längengrad}}: Osten ist positiv, Westen negativ (New York liegt etwa bei -74.0).
   - {{ui:UTC-Versatz}}: der Versatz des Standorts zu UTC in Stunden, etwa `-5` für New York im Winter. ModelCraft wendet keine Sommerzeit an; verwenden Sie `-4` für New York im Sommer.
3. Stellen Sie das {{ui:Datum}} (Monat und Tag) ein und ziehen Sie den Regler {{ui:Uhrzeit}}. Die Zeit springt in 15-Minuten-Schritten und wird neben dem Regler angezeigt, etwa „3:00 pm“.

Eine Zeile unter den Einstellungen sagt, wo die Sonne steht, etwa „Sonne 52° hoch, 250° von Norden. Norden ist die grüne Achse.“ Nachts steht dort „Die Sonne ist zu dieser Zeit untergegangen.“

Ein neues Modell beginnt mit der Sonne am 21. Juni um 15:00 Uhr, bei Breitengrad 40, Längengrad -105 und UTC-Versatz -7.

## Modell nach Norden ausrichten

Norden in ModelCraft ist immer die **grüne Achse**. Um einen realen Standort zu untersuchen, drehen Sie das Modell so, dass seine Nordseite entlang Grün zeigt: Wählen Sie alles ({{key:Mod+A}}), drücken Sie {{key:Q}}, klicken Sie auf einen Mittelpunkt auf dem Boden und drehen Sie um den Winkel des Standorts von Norden (siehe [Drehen und skalieren](topic:rotate-scale)).

## Eine Sonnenstudie

1. Richten Sie den Ort und das Datum ein.
2. Fügen Sie eine Szene hinzu ({{ui:Szene hinzufügen}} in {{ui:Szenen}}).
3. Verschieben Sie den Zeitregler und fügen Sie dann eine weitere Szene hinzu. Wiederholen Sie das für jede Stunde, die Sie untersuchen wollen.
4. Klicken Sie auf {{ui:Wiedergabe}}, um sie durchzugehen. Siehe [Ansichten als Szenen speichern](topic:scenes).

## Wissenswertes

- Auf einem sehr großen Modell können Schatten gezackt aussehen, da eine einzige Schattenkarte das ganze Modell abdeckt.
- Im {{ui:Drahtmodell}} werden keine Schatten gezeichnet.
- Die Sonnenposition folgt der NOAA-Sonnenberechnung und ist auf einen Bruchteil eines Grades genau, was für Massenstudien mehr als genügt. Die atmosphärische Lichtbrechung wird ignoriert, daher können sehr flache Sonnenwinkel nahe Sonnenauf- und -untergang leicht abweichen.

## Präsentationsansicht

{{ui:Ansichten}} › {{ui:Präsentationsansicht}} (oder {{key:Shift+P}}) zeigt nur das Modell: Die Achsen, Hilfslinien und Hilfspunkte, die Umrisse der Schnittebenen (der Schnitt bleibt), die Markierungen der Lampen, den Rahmen einer geöffneten Gruppe, die Fangmarkierungen und Hinweise sowie die Auswahlhervorhebung werden ausgeblendet. Nutzen Sie sie, um das Modell klar zu betrachten oder vor einem Bildschirmfoto. Werkzeuge funktionieren weiterhin und fangen weiterhin; Sie sehen nur die Markierungen nicht. Drücken Sie {{key:Shift+P}} erneut, um sie wieder anzuzeigen. Bemaßungen bleiben, da sie Teil der Zeichnung sind. Während Sie innerhalb einer Gruppe bearbeiten, verblasst der Rest des Modells nicht mehr: Er wird so gezeigt, wie er ist, einschließlich der Texturen.
