---
title: Ein Netz im Arbeitsbereich Netz bearbeiten
summary: Eckpunkte, Kanten und Flächen eines Netzes auswählen, verschieben und extrudieren, einsetzen, fasen, schneiden, zusammenführen, füllen und überbrücken, mit beiden Tastenstilen.
keywords: Netz, Bearbeitungsmodus, Arbeitsbereich Netz, Eckpunkt, Eckpunkte, Kante, Kanten, Fläche, Flächen, extrudieren, einsetzen, Fase, Schleifenschnitt, Messer, halbieren, schwenken, zusammenführen, auflösen, füllen, Rasterfüllung, Brücke, unterteilen, gleiten, proportionale Bearbeitung, Abfall, Arbeitsbereich
from: 92a372dd
---

Der Arbeitsbereich **Netz** bearbeitet ein [Netz](topic:meshes) Punkt für Punkt: seine Eckpunkte, Kanten und Flächen. Drücken/Ziehen-Geometrie bleibt im Arbeitsbereich **Modell**.

## Öffnen

- {{ui:Mesh}} in der Liste {{ui:Workspace}} links in der Symbolleiste wählen. Das ausgewählte Netz öffnet sich zur Bearbeitung; eine ausgewählte Gruppe oder Komponente wird zuerst in ein Netz umgewandelt (ein Schritt zum Rückgängigmachen).
- Oder doppelklicken Sie auf ein Netz, oder wählen Sie es bei den Modellierer-Tasten aus und drücken {{key:Tab}}.
- Ohne Auswahl bietet das Panel Netze zum Hinzufügen an: Ebene, Gitter, Würfel, Kreis, Zylinder, Kegel, Kugel, Ikosphäre und Torus. Ein neues Netz kommt dorthin, wohin die Ansicht schaut, und öffnet sich zur Bearbeitung.

{{ui:Back to Model}} (oder die Liste, {{key:Tab}} bei den Modellierer-Tasten, {{key:Esc}} ohne Auswahl bei den Drücken/Ziehen-Tasten) geht zurück zu Modell, mit dem ausgewählten Netz. Während der Arbeitsbereich Netz offen ist, wird der Rest des Modells abgeblendet, und die Zeichenwerkzeuge von Modell sind eingeklappt.

## Auswählen

| Aktion | Wirkung |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Eckpunkte, Kanten oder Flächen auswählen |
| Klicken | Eines auswählen; {{key:Shift}}+Klick fügt hinzu oder entfernt |
| Rahmen ziehen | Alles innerhalb und Sichtbare auswählen; {{key:Shift}} fügt hinzu, {{key:Ctrl}} entfernt |
| {{key:Alt}}+Klick auf eine Kante, oder Doppelklick darauf | Ihre Kantenschleife (eine Flächenschleife im Flächenmodus; bei einer offenen Kante der ganze Rand) |
| {{key:Ctrl}}+{{key:Alt}}+Klick auf eine Kante | Ihr Kantenring |
| Dreifachklick | Alles, was damit verbunden ist |

Die Gruppe {{ui:Select}} hat außerdem {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} und {{ui:Less}}.

## Verschieben, Drehen, Skalieren

{{ui:Move}}, {{ui:Rotate}} und {{ui:Scale}} beginnen beim Zeiger: Bewegen Sie ihn, dann klicken Sie oder drücken {{key:Enter}}, um die Auswahl abzulegen, oder {{key:Esc}}, um abzubrechen. {{key:X}}, {{key:Y}} oder {{key:Z}} (oder die Pfeiltasten) sperren eine Achse. Geben Sie eine Strecke, einen Winkel oder einen Faktor ein, um genau zu sein; [Berechnungen](topic:value-box#calculations) funktionieren ebenfalls.

**Proportionale Bearbeitung** ({{ui:Proportional}} oder im Panel): Eckpunkte nahe der Auswahl folgen einem Verschieben, und zwar umso weniger, je weiter sie entfernt sind, bis zur eingestellten Reichweite, mit dem gewählten Abfall. Schalten Sie {{ui:Nur entlang des Netzes}} ein, um entlang der Kanten statt geradlinig zu messen.

{{ui:Slide}} verschiebt eine ausgewählte Kantenschleife entlang der angrenzenden Kanten.

## Form ändern

| Werkzeug | Funktion |
|---|---|
| {{ui:Extrude}} | Zieht die ausgewählten Flächen entlang ihrer Normalen heraus, mit neuen Seitenflächen (oder erzeugt Flächen aus offenen Randkanten). Geben Sie die Strecke ein |
| {{ui:Inset}} | Ein Band innerhalb des Umrisses der ausgewählten Flächen; {{key:I}} erneut drücken für jede Fläche einzeln |
| {{ui:Bevel}} | Schneidet die ausgewählten Kanten (oder mit {{key:Ctrl}}+{{key:Shift}}+{{key:B}} Eckpunkte) in einer Breite ab; das Rad oder die Plus- und Minustasten fügen Segmente für eine gerundete Kante hinzu |
| {{ui:Loop cut}} | Auf eine Kante zeigen: neue Schleifen quer über den Ring vierseitiger Flächen; das Rad legt fest, wie viele; klicken zum Schneiden |
| {{ui:Knife}} | Klicken Sie Punkte auf Kanten oder Ecken; {{key:Enter}} schneidet gerade quer durch die Flächen dazwischen, so wie Sie sie sehen |
| {{ui:Bisect}} | Zeichnen Sie eine Linie auf dem Bildschirm: Die ausgewählten Flächen (oder alle) werden entlang dieser Linie geschnitten |
| {{ui:Spin}} | Dreht die ausgewählten Flächen oder offenen Kanten in Schritten um die blaue Achse (das Rad legt sie fest); eine volle Drehung schließt sie |
| {{ui:Subdivide}} | Teilt die ausgewählten Kanten in zwei; ganze Flächen werden zu einem Gitter |
| {{ui:Merge}} | Die ausgewählten Eckpunkte werden zu einem, in ihrer Mitte |
| {{ui:Dissolve}} | Entfernt die Auswahl, behält aber die Oberfläche: Flächen verbinden sich |
| {{ui:Fill}} | Eine Fläche über einen ausgewählten offenen Rand (oder zwischen zwei offenen Kanten) |
| {{ui:Grid fill}} | Füllt einen offenen Rand mit gerader Kantenzahl mit einem Gitter aus Vierecken |
| {{ui:Bridge}} | Verbindet zwei ausgewählte offene Kantenschleifen mit Flächen |
| {{ui:Crease}} | Wie scharf die ausgewählten Kanten bleiben, wenn das Netz von einer Unterteilungsfläche geglättet wird: vom Mittelpunkt weg bewegen, das Rad nutzen (Schritte von 0.1) oder 0 bis 1 eintippen. Das Panel zeigt die Falte der ausgewählten Kanten und nimmt auch einen eingegebenen Wert. Falten-Kanten werden in Magenta gezeichnet |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Flächen umdrehen; Eckpunkte zu ihren Nachbarn glätten; löschen nach dem Auswahlmodus |

Jedes ist ein Schritt zum Rückgängigmachen. Texturkoordinaten, Farben und Gewichte übertragen sich auf die neuen Flächen und Eckpunkte.

## Neu vernetzen

{{ui:Remesh}} erzeugt das gesamte Netz neu als gleichmäßige Dreiecke einer Größe, die Sie beim Drücken festlegen (kleiner ist feiner und langsamer). Es schließt Löcher, verbindet überlappende Teile und gleicht ein Netz aus, das Modellieren gestreckt hat. Scharfe Kanten werden ganz leicht abgerundet. UVs, Farbe und Falten werden neu angelegt. Ein Schritt zum Rückgängigmachen.

## Retopologie

Um ein neues, saubereres Netz über ein detailliertes (eine Skulptur, einen Scan) zu bauen, wählen Sie das detaillierte unter {{ui:Retopology}} › **Aufbauen auf** im Panel, dann:

- **Verschobene Punkte darauf einrasten:** Punkte, die Sie verschieben, und Kanten, die Sie extrudieren, landen auf seiner Oberfläche.
- **Die ausgewählten Punkte darauf setzen** verschiebt die ausgewählten Punkte jetzt auf sie (ein Schritt zum Rückgängigmachen).
- **Die Kanten dieses Netzes vorne anzeigen** zeichnet das Netz, das Sie bauen, über der Oberfläche, damit Sie es sehen.

## Den letzten Vorgang anpassen

Nach {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} oder {{ui:Spin}} zeigt das Panel seine Einstellungen (Breite, Segmente, Profil, Schnitte …). Ändern Sie eine, und der Vorgang wird von seinem Anfang an neu ausgeführt, weiterhin als ein Schritt zum Rückgängigmachen.

## Tasten

| | Drücken/Ziehen-Tasten | Modellierer-Tasten |
|---|---|---|
| Verschieben, drehen, skalieren | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} zweimal gleitet) |
| Extrudieren, einsetzen | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Löschen | {{key:E}} oder {{key:Delete}} | {{key:X}} oder {{key:Delete}} |
| Falte | {{key:Shift+C}} | {{key:Shift+E}} |
| Alles auswählen, Auswahl aufheben, Auswahl umkehren | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Beides | {{key:Ctrl+B}} Fase, {{key:Ctrl+R}} Schleife schneiden, {{key:K}} Messer | dasselbe, und {{key:F}} Füllen, {{key:M}} Zusammenführen, {{key:Ctrl+X}} Auflösen, {{key:L}} / {{key:Ctrl+L}} Verbunden, {{key:Alt+N}} Spiegeln, {{key:O}} Proportional, {{key:Shift+V}} Eckpunkt-Gleiten |

Siehe auch [Netze](topic:meshes), [Modifikatoren an einem Netz](topic:modifiers) und [Noch nicht umgesetzt](topic:not-built-yet).
