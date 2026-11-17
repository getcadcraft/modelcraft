---
title: ModelCraft-Einstellungen
summary: Wählen Sie den Tastenstil, den Sie kennen, steuern Sie Orbit und Pan mit dem Trackpad ohne die Kamera-Schaltflächen und schalten Sie das Fangen sowie die Kollision von Volumenkörpern ein oder aus.
keywords: Einstellungen, Voreinstellungen, Steuerung, Tastenstil, Tastenbelegung, Tastenkürzel, blender, Trackpad, Touchpad, Scrollen, Orbit, Pinch, Fangen, Fang, Kollision, Überlappung, Schnittmenge, durchdringen
from: caf77d5b
---

Öffnen Sie {{ui:Einstellungen}} mit dem Zahnrad in der App-Leiste oder mit {{key:Mod+,}}. Die erste Registerkarte, {{ui:ModelCraft}}, enthält die Einstellungen, die zu dieser App gehören; {{ui:Allgemein}} enthält die, die alle CadCraft-Apps gemeinsam nutzen (Design, Symbolleiste, Bereiche). Die Einstellungen von ModelCraft gelten nur in dieser App: Sie ändern sie hier, und dieser Browser merkt sie sich.

## Steuerung: welche Tasten und Maustasten

Es gibt zwei Tastenstile. Wechseln Sie hier mit {{ui:Tasten: Drücken/Ziehen}} / {{ui:Tasten: Modellierer}} unten rechts in der Ansicht oder am Ende des Menüs {{ui:Mehr}} der Symbolleiste:

- **Stil Drücken/Ziehen** (der Start; die Buchstaben von Drücken/Ziehen-Modellierern wie SketchUp): Ein Buchstabe wählt ein Werkzeug: {{key:L}} Linie, {{key:R}} Rechteck, {{key:P}} Drücken/Ziehen, {{key:M}} Verschieben, {{key:Q}} Drehen, {{key:S}} Skalieren, {{key:G}} Komponente erstellen. Siehe [Tasten und Mausaktionen](topic:keyboard).
- **Stil Modellierer** (die Tasten von Netz-Modellierern wie Blender): Wählen Sie zuerst aus, dann bearbeiten Sie die Auswahl sofort. {{key:G}} verschiebt sie, {{key:R}} dreht sie und {{key:S}} skaliert sie ab der Zeigerposition – ohne ersten Klick. Während sie verschoben wird, sperrt {{key:X}}, {{key:Y}} oder {{key:Z}} die rote, grüne oder blaue Achse, eine eingegebene Zahl legt die Strecke fest (oder Grad, oder Faktor), und ein Klick oder {{key:Enter}} setzt sie ab; {{key:Esc}} oder ein Rechtsklick setzt sie zurück. Danach sind Sie wieder in {{ui:Wählen}}.

Der Tastenstil ist dieselbe Wahl wie der Menüstil: Der Tastenstil {{ui:Modellierer}} entspricht dem Menüstil {{ui:Modellierer}}, und wenn Sie einen wählen, ist auch der andere gewählt. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse). Die vollständige Liste der Modellierer-Tasten steht unter [Tasten und Mausaktionen](topic:keyboard#modeler-keys). Die Tooltips der Symbolleiste und der Startkarte folgen dem gewählten Stil.

## Scrollen: Mausrad oder Trackpad

- **Automatisch erkennen** (der Start): ModelCraft beobachtet das Scrollen. Seitliches oder feines Scrollen, wie es ein Trackpad sendet, orbitet; ganze Rastschritte am Mausrad zoomen.
- **Mausrad**: Scrollen zoomt immer zum Zeiger hin.
- **Trackpad**: Wischen Sie mit zwei Fingern zum Orbiten, halten Sie {{key:Shift}} und wischen Sie zum Schwenken, und ziehen Sie mit zwei Fingern zusammen oder auseinander, um zu zoomen. Die Schaltflächen {{ui:Orbit}}, {{ui:Pan}} oder {{ui:Zoom}} brauchen Sie nie.

Das Zusammenziehen zoomt bei jeder Wahl. Wenn „Automatisch erkennen“ für Ihre Maus oder Ihr Trackpad falsch liegt, wählen Sie die Option, die Sie haben.

:::tip
Im Stil Modellierer können Sie auch orbiten, indem Sie {{key:Alt}} halten und ziehen, und mit {{key:Alt+Shift}} und einem Ziehen schwenken – praktisch auf einem Laptop ohne mittlere Taste.
:::

## Fangen

**Auf Punkte, Kanten und Achsen fangen** (am Start ein) zieht den Zeiger zu Endpunkten, Mittelpunkten, Kanten, Hilfslinien und den roten, grünen und blauen Achsen – siehe [Ableitung](topic:inference). Schalten Sie es aus, wenn Sie etwas frei nahe an anderer Geometrie platzieren möchten, ohne dass es springt. Flächen, der Boden und die Achssperren funktionieren auch bei ausgeschaltetem Fangen.

Die Schaltfläche {{ui:Fang}} unten rechts in der Ansicht wirkt auf die Arbeit dieser Sitzung (sie wird ebenfalls gespeichert). Im Stil Modellierer schaltet {{key:Shift+Tab}} sie um.

## Volumenkörper stoppen, wo sie sich berühren

**Volumenkörper an Berührungen stoppen** (am Start ein) verhindert, dass eine Wand durch eine andere Wand gezogen wird. Mit {{ui:Verschieben}} (und {{key:G}}, sowie Einfügen und dann Verschieben mit {{key:Mod+D}}) gleitet die Auswahl bis zum anderen Volumenkörper und berührt ihn dann nur; mit {{ui:Drücken/Ziehen}} hält eine Fläche an, wenn sie auf einen anderen Volumenkörper trifft. Auf etwas aufliegen und daran entlanggleiten ist in Ordnung – nur das Eindringen ins Innere wird gestoppt. Dinge, die sich beim Start schon überlappen, können trotzdem auseinandergezogen werden.

Um etwas bewusst hindurchzuschieben, klicken Sie unten rechts auf {{ui:Kollision}} (oder deaktivieren Sie die Einstellung), führen Sie die Verschiebung aus und klicken Sie erneut darauf.

:::note
Kollisionen werden für Verschieben und Drücken/Ziehen geprüft. {{ui:Drehen}} und {{ui:Skalieren}} prüfen sie noch nicht, und lose Geometrie, die sich berührt, verbindet sich weiterhin, wie immer: Halten Sie getrennte Dinge in [Gruppen](topic:groups-components), damit sie getrennt bleiben.
:::

## Bett des 3D-Druckers

Die Größe des Betts Ihres 3D-Druckers: {{ui:Nicht festgelegt}} (der Start), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 oder 300 × 300 × 400 mm. Wählen Sie die Größe, die dem Bauraum Ihres Druckers am nächsten kommt. [Prüfung für den 3D-Druck](topic:print-3d) zeigt dann an, wenn ein Modell größer als das Bett ist; bei {{ui:Nicht festgelegt}} wird die Größe nicht geprüft.

## Orbit und Pan

**Um das Objekt unter dem Cursor orbiten** (am Start ein): Orbit dreht sich um den Teil des Modells unter dem Zeiger, und Pan hält diesen Punkt unter dem Zeiger; über leerem Raum verwenden beide die Mitte der Ansicht. Schalten Sie es aus, um immer um die Mitte der Ansicht zu orbiten. **Orbit-Geschwindigkeit** und **Pan-Geschwindigkeit** reichen von 0.25× bis 3× (1× ist der Start) und gelten für Maus, Trackpad, Touch und die Pfeiltasten. Siehe [Orbit, Pan und Zoom](topic:orbit-pan-zoom).

## Anzeige in der Ecke

Was in der Ecke der 3D-Ansicht angezeigt wird: **ViewCube** (am Start; oben rechts – klicken Sie auf eine Fläche, Kante oder Ecke, um von dort aus zu schauen, ziehen Sie daran, um zu orbiten, und ziehen Sie am Kompassring, um das Modell zu drehen), **Achssymbol** (ein kleines X-, Y-, Z-Zeichen unten links, das sich mit der Ansicht dreht: X rot, Y grün, Z blau) oder **Keine**. Siehe [Der ViewCube](topic:view-cube).
