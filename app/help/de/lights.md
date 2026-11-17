---
title: Ein Modell mit Lampen beleuchten
summary: Lampen, Spots und Flächenlichter in ein Modell setzen, damit gerenderte Bilder Räume bei Nacht und beleuchtete Innenräume mit weichen Schatten zeigen.
keywords: Licht, Lichter, Lampe, Lampen, Beleuchtung, Leuchtmittel, Deckenlicht, Spot, Downlight, Flächenlicht, Flächenleuchte, Lumen, Helligkeit, Farbtemperatur, warm, Nacht, Innenraum, rendern
from: c8d72cbc
---

Lampen beleuchten [gerenderte Bilder](topic:render). Sie ändern die 3D-Ansicht nicht; dort erscheint jede Lampe als kleine Markierung in ihrer eigenen Farbe.

## Lampe hinzufügen

1. Im Bereich {{ui:Lights}} rechts auf {{ui:Lamp}}, {{ui:Spotlight}} oder {{ui:Light panel}} klicken.
2. An die gewünschte Stelle klicken. Der Fang funktioniert wie beim Zeichnen.
   - An einer Decke oder Wand hängt eine **Lampe** 25 cm von der Fläche entfernt, auf der Seite, von der Sie schauen; ein **Flächenlicht** liegt auf der Fläche und strahlt von ihr weg.
   - Ein **Spot** braucht zwei Klicks: zuerst seinen Standort, dann das Ziel, auf das er zeigt.

Die neue Lampe ist in {{ui:Lights}} ausgewählt und kann sofort geändert werden.

## Lampe ändern

Klicken Sie den Namen einer Lampe in {{ui:Lights}} an oder ihre Markierung in der Ansicht mit {{ui:Select}}. Danach:

| Einstellung | Wirkung |
|---|---|
| {{ui:Brightness (lumens)}} | Wie viel Licht sie abgibt. Eine Haushaltslampe hat etwa 800 Lumen, ein helles Deckenpanel 3000 |
| {{ui:Color}} | {{ui:Warm}} (eine Wohnraumlampe), {{ui:Neutral}} oder {{ui:Daylight}} oder eine beliebige Farbe |
| {{ui:Beam (degrees)}} | Der Lichtkegel eines Spots, von Kante zu Kante |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Größere Leuchtmittel und Panels erzeugen weichere Schatten |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Wo sie steht |

Das Häkchen neben dem Namen einer Lampe schaltet sie ein oder aus. {{ui:Delete the light}} entfernt sie. Jede Änderung ist ein Schritt: {{key:Ctrl+Z}} macht sie rückgängig. Lampen werden in der Datei `.modelcraft` gespeichert.

## Bilder bei Nacht

Im Dialog {{ui:Render a picture…}} ein Häkchen bei {{ui:Use another date and time for this picture}} setzen und eine Abendstunde wählen. Bei untergegangener Sonne wird der Himmel dunkel, und nur die Lampen beleuchten das Modell. Ist das Bild zu dunkel, erhöhen Sie im Dialog {{ui:Brightness}} oder fügen Sie Lampen hinzu.

:::tip
Für einen Raum, der von innen gesehen wird, setzen Sie die Kamera in den Raum (um den Raum schwenken und hineinzoomen, oder eine [Szene](topic:scenes) nutzen), fügen Sie eine Lampe an der Decke hinzu und rendern Sie bei Nacht. Im Modus {{ui:Fast}} bleiben Ecken, die von einer Lampe entfernt sind, dunkler als auf einem Foto; der [Modus für hohe Qualität](topic:render#high-quality) lässt das Licht von den Wänden zurückprallen.
:::
