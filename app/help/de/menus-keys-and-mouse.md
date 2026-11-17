---
title: Menüs, Tasten und Maus
summary: Einen Menüstil wählen, der zu dem Modellierer passt, den Sie schon kennen, jedem Befehl eine eigene Taste geben, Befehle zwischen Menüs verschieben und festlegen, was das Rad sowie die mittlere und rechte Maustaste tun.
keywords: Menüstil, Menüs, Menüleiste, Symbolleiste, Tastenkürzel, Tastenbelegung, Tasten, Tastenzuordnung, anpassen, neu belegen, Maus, Rad, Zoomrichtung, umkehren, mittlere Taste, rechte Taste, Orbit, Schwenken, exportieren, importieren, wechseln, vertraut, Drücken/Ziehen, Modellierer
from: e56fce3d
---

Die Werkzeuge von ModelCraft sind dieselben, egal wie Sie sie erreichen. Ein **Menüstil** bestimmt, wo sie auf dem Bildschirm sitzen, wie sie dort heißen und mit welchen Tasten sie laufen. Wählen Sie einen in {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}; die Änderung wirkt sofort, und dieser Browser merkt sie sich.

## Die Stile

| Stil | Was Sie erhalten |
|---|---|
| {{ui:ModelCraft}} | Die eigene Symbolleiste von ModelCraft (Datei, Zeichnen, Ändern, Ordnen, Bearbeiten, Kamera) und ihre Einzeltasten: {{key:L}} Linie, {{key:R}} Rechteck, {{key:P}} Drücken/Ziehen, {{key:M}} Verschieben, {{key:Q}} Drehen, {{key:S}} Skalieren, {{key:E}} Radierer, {{key:O}} Orbit. Der Ausgangsstil. |
| {{ui:Push-pull}} | Eine Menüleiste (Datei, Bearbeiten, Ansicht, Kamera, Zeichnen, Werkzeuge, Fenster) über einer Reihe der wichtigsten Werkzeuge, mit denselben Einzeltasten. |
| {{ui:Modeler}} | Eine Kopfzeilen-Menüleiste (Datei, Bearbeiten, Ansicht, Auswahl, Hinzufügen, Objekt, Netz) und die Tasten von Netz-Modellierern: {{key:W}} Wählen, {{key:G}} Greifen, {{key:R}} Drehen und {{key:S}} Skalieren der Auswahl auf einmal ({{key:X}}, {{key:Y}} oder {{key:Z}} sperren beim Verschieben eine Achse), {{key:E}} Drücken/Ziehen, {{key:B}} Rechteck, {{key:X}} Löschen, {{key:A}} Alles auswählen, {{key:Alt+A}} Auswahl aufheben, {{key:Shift+D}} Duplizieren, {{key:Mod+G}} Gruppe, {{key:H}} Ausblenden. Die mittlere Taste führt den Orbit aus; {{key:Shift}} und die mittlere Taste schwenken, {{key:Mod}} und die mittlere Taste zoomen; die rechte Taste bricht ab, was ein Werkzeug gerade tut. |
| {{ui:Beginner}} | Ein Menüband, dessen Reiter {{ui:Make}} ein paar große Schaltflächen hat: Formen zum Ablegen, Löcher, Verschieben, Drehen und Größe, Ausrichten, {{ui:Group}} (Löcher, die in die Formen geschnitten werden) und die Prüfung für den 3D-Druck; jedes andere Werkzeug steht auf dem Reiter {{ui:More tools}}. Die rechte Taste führt den Orbit aus, die mittlere schwenkt. Siehe [Der Einsteiger-Stil](topic:beginner). |

Der Tastenstil, den Sie von {{ui:Keys}} unten rechts in der Ansicht und von {{ui:Edit}} › {{ui:More}} kennen, ist dieselbe Wahl: Wählen Sie dort die Modellierer-Tasten, wird der Stil {{ui:Modeler}} gewählt; wählen Sie die Drücken/Ziehen-Tasten, wechselt es zum Stil {{ui:ModelCraft}}. Hatten Sie in einer älteren Version die Modellierer-Tasten gewählt, öffnet ModelCraft einmal von selbst im Stil {{ui:Modeler}}.

:::tip
Eine Taste, die zu den Drücken/Ziehen-Tasten gehört, Ihr Stil aber einem anderen Befehl zuordnet, tut nichts, und die Statuszeile sagt, wohin ihr Befehl gewandert ist („In Modellierer ist Drücken/Ziehen E“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} und die Pfeiltasten behalten immer ihre Bedeutung, Zahlen gehen immer an das Wertfeld, und während ein Werkzeug etwas verschiebt, haben seine eigenen Tasten Vorrang.
:::

## Eigene Anpassung

1. Wählen Sie den Stil, der Ihrem Wunsch am nächsten kommt, und klicken Sie dann auf {{ui:Customize…}}.
2. Unter {{ui:Keys and menus}} suchen Sie einen Befehl (das Suchfeld hilft). {{ui:Add a key}} wählen und die Taste drücken. Klicken Sie auf eine Taste, um sie zu entfernen.
3. Bei einer Menüleiste verschiebt {{ui:Where it sits}} den Befehl in ein anderes Menü oder nach {{ui:Keys only}}.
4. Unter {{ui:Mouse}} legen Sie Rad und Tastenfunktionen in der 3D-Ansicht fest.
5. Geben Sie ihm einen Namen und klicken Sie auf {{ui:Save}}.

Einen eingebauten Stil zu speichern erstellt Ihre eigene Kopie („Mein Modellierer“); der eingebaute ändert sich nie. Ihre Kopie liest Tasten so, wie der Stil, aus dem sie stammt; eine aus {{ui:Modeler}} erstellte Kopie hält die Greifen-, Drehen- und Skalieren-Tasten sofort am Laufen.

## Maus

- **Mausrad**: {{ui:Scroll up zooms in}} (der Start) oder {{ui:Scroll up zooms out}}, und wie schnell. Eine Zoomgeste auf dem Trackpad (Spreizen mit zwei Fingern) zoomt immer so, wie sich Ihre Finger bewegen.
- **Ziehen in der 3D-Ansicht**: {{ui:Eigene je Ansicht}} behält die Tasten von ModelCraft bei (die mittlere Taste führt den Orbit aus, die rechte Taste oder {{key:Shift}} und die mittlere Taste schwenken). Oder stellen Sie die mittlere und rechte Taste auf Orbit, Schwenken, Zoomen oder nichts; {{key:Shift}} mit der Taste tauscht Orbit und Schwenken. Die linke Taste gehört immer dem gerade verwendeten Werkzeug.
- **Trackpads**: {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Scrolling}} entscheidet weiterhin, ob zwei Finger orbitieren (Trackpad) oder zoomen (Maus). Siehe [Orbit, Schwenken und Zoom](topic:orbit-pan-zoom).

## Mitnehmen

{{ui:Export}} speichert den verwendeten Stil als kleine Datei `.ccinput.json`; {{ui:Import…}} fügt eine hinzu, von einem anderen Computer oder von einer anderen Person. Eine importierte Datei kann nur auf Befehle von ModelCraft selbst verweisen: Alles andere darin wird weggelassen und in der Statuszeile gezählt. {{ui:Delete this style}} entfernt einen eigenen Stil.

:::note
Diese Einstellungen bleiben in diesem Browser. {{ui:Use this style in every app}} unter den Stilkarten sorgt dafür, dass jede App im passenden Stil öffnet: {{ui:Push-pull}} gehört zu den Menüleisten-Stilen der anderen Apps. {{ui:Modeler}} hat dort kein Gegenstück und bleibt deshalb eine Wahl von ModelCraft.
:::

Verwandt: [Tasten- und Mausaktionen](topic:keyboard) · [ModelCraft-Einstellungen](topic:settings) · [Umstieg von anderen Modellierern](topic:coming-from)
