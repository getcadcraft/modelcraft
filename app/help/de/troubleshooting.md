---
title: Fehlerbehebung
summary: Symptome, Ursachen und Lösungen, von einer leeren 3D-Ansicht bis zu Importen in falscher Größe, mit den Meldungen, die ModelCraft anzeigt.
keywords: Problem, Störung, Fehler, funktioniert nicht, leer, WebGL, Grafik, langsam, Meldung, Import fehlgeschlagen, falsche Größe, nicht auswählbar, Touch, Tasten funktionieren nicht, verlorene Arbeit
from: 6e7394be
---

## Die 3D-Ansicht ist leer

**Symptom:** Die Mitte des Bildschirms bleibt leer oder zeigt nur die Hintergrundfarbe, und Klicks auf Werkzeuge bewirken nichts.

**Ursache:** ModelCraft zeichnet mit WebGL 2, der 3D-Grafik des Browsers. Sie fehlt, wenn der Browser veraltet ist, wenn die Hardwarebeschleunigung ausgeschaltet ist oder wenn der Grafiktreiber gesperrt ist.

**Abhilfe:**

:::chromium
1. Öffnen Sie die Einstellungen des Browsers und suchen Sie nach „Hardwarebeschleunigung“.
2. Schalten Sie „Hardwarebeschleunigung verwenden, wenn verfügbar“ ein und starten Sie den Browser neu.
3. Ist sie bereits eingeschaltet, geben Sie `chrome://gpu` in die Adressleiste ein (in Edge `edge://gpu`) und suchen Sie in der Liste nach „WebGL2“. Steht dort „deaktiviert“, aktualisieren Sie den Grafiktreiber.
:::

:::firefox
1. Öffnen Sie **Einstellungen**, dann **Allgemein**, und scrollen Sie zu „Leistung“.
2. Entfernen Sie den Haken bei „Empfohlene Leistungseinstellungen verwenden“ und setzen Sie dann den Haken bei „Hardwarebeschleunigung verwenden, wenn verfügbar“. Starten Sie Firefox neu.
3. Schlägt es weiterhin fehl, geben Sie `about:support` in die Adressleiste ein und sehen Sie im Abschnitt „Grafik“ nach WebGL 2.
:::

:::safari
Aktualisieren Sie macOS und Safari. Aktuelle Safari-Versionen haben WebGL 2 immer eingeschaltet. Haben Sie unter **Safari**, dann **Einstellungen**, dann **Erweitert** (oder **Funktionsflags**) experimentelle Funktionen geändert, setzen Sie sie zurück.
:::

Auf einem Arbeitsrechner, einem Remote-Desktop oder in einer virtuellen Maschine kann 3D-Grafik durch eine Richtlinie gesperrt sein. Probieren Sie einen anderen Computer aus. Siehe [Browser und Computer](common:browsers).

## Tasten tun nichts oder schreiben in ein Feld

**Ursache:** Der Tastaturfokus liegt in einem Feld des Bereichs: der Liste {{ui:Flächen}} unter {{ui:Stil}}, einer Sonneneinstellung, dem Feld {{ui:Name}} in {{ui:Objektinfo}} oder der Auswahl der Einheiten. Buchstaben und Pfeiltasten gehen dann in dieses Feld.

**Abhilfe:** Klicken Sie in die 3D-Ansicht und drücken Sie die Taste erneut. Tasten funktionieren auch nicht, solange ein Dialogfeld offen ist.

## Eine Zahl eingeben bewirkt nichts

- **Noch keine Richtung.** Eine eingegebene Länge geht in die Richtung, in die der Zeiger vom ersten Klick aus zeigt. Bewegen Sie den Zeiger ein wenig in die gewünschte Richtung und geben Sie dann ein.
- **Falscher Zeitpunkt.** Die meisten Werkzeuge nehmen einen eingegebenen Wert erst nach dem ersten Klick an: Klicken Sie zuerst die erste Ecke, die Fläche oder den Punkt, von dem aus verschoben wird. {{ui:Kreis}} und {{ui:Polygon}} nehmen eine Anzahl Seiten vor dem ersten Klick.
- **„Geben Sie eine Länge wie 3m, 10'6" oder 4m,3m ein.“** ModelCraft konnte das nicht lesen. Prüfen Sie auf ein Dezimalkomma (`2,5`): Verwenden Sie einen Punkt.

## Eine Form beginnt auf einem Touchscreen an der falschen Stelle

**Symptom:** Mit dem Finger ist das erste Rechteck in Ordnung, aber das nächste Rechteck, der nächste Kreis oder die nächste Linie beginnt dort, wo Ihre vorige Berührung endete, statt dort, wo Sie berührt haben.

**Ursache:** Ein Fehler in diesem Build: Auf einem Touchscreen merkt sich das Werkzeug den letzten Fangpunkt der vorherigen Geste.

**Abhilfe:** Tippen Sie vor jeder neuen Form erneut auf die Schaltfläche des Werkzeugs in der Symbolleiste. Dadurch startet das Werkzeug neu, und der erste Punkt landet dort, wo Sie berühren.

## Das Bearbeiten einer Gruppe hat eine andere verändert

**Symptom:** Sie haben eine Gruppe mit {{ui:Verschieben}} und {{key:Ctrl}} kopiert, eine Kopie geöffnet und bearbeitet, und die andere Kopie hat sich ebenfalls verändert. Die {{ui:Gliederung}} zeigt beide mit demselben Namen.

**Ursache:** In diesem Build erzeugt das Kopieren einer Gruppe eine zweite Platzierung derselben Gruppe, wie bei einer Komponente. Die Schaltfläche {{ui:Eindeutig machen}} wird nur für Komponenten angeboten.

**Abhilfe:** Wählen Sie die Kopie, die Sie ändern wollen, klicken Sie in {{ui:Objektinfo}} auf {{ui:Komponente erstellen}} und dann auf {{ui:Eindeutig machen}}. Diese Kopie hat dann ihren eigenen Inhalt. Oder {{ui:Zerlegen}} Sie sie.

## Drücken/Ziehen tut nicht, was ich erwartet habe

- **„Drücken/Ziehen funktioniert auf einer Fläche. Klicken Sie auf eine Fläche.“** Sie haben eine Kante oder leeren Raum angeklickt. Fahren Sie mit dem Zeiger darüber, bis die Fläche hervorgehoben wird, und klicken Sie dann.
- **Die Fläche liegt in einer Gruppe.** Doppelklicken Sie zuerst auf die Gruppe, um sie zu öffnen.
- **Ein Fenster hat die Wand nicht durchschnitten.** Das Rechteck muss auf der Fläche der Wand gezeichnet werden, nicht davor, und die Wand muss eine Rückseite haben. Siehe [Eine Öffnung durch eine Wand schneiden](topic:openings#if-it-did-not-cut-through).
- **Zwei Volumenkörper überlappen, ohne zu verschmelzen.** In diesem Build schneiden oder verbinden sich Volumenkörper, die ineinander gedrückt wurden, nicht.

## Eine Linie oder Form hat keine Fläche erzeugt

Eine Fläche entsteht nur, wenn die Kanten eine ebene Schleife schließen. Prüfen Sie, dass der letzte Punkt auf den ersten eingerastet ist („Endpunkt“) und dass alle Kanten in einer Ebene liegen. Eine Schleife, die leicht aus der Ebene ist, bleibt als Linien stehen. Zeichnen Sie eine ihrer Kanten neu, wobei Sie an den Ecken einrasten.

## Ich kann eine Fläche nicht wählen oder löschen

- Mit {{ui:Wählen}} nimmt ein Klick nahe einer Kante die Kante. Klicken Sie näher an die Mitte der Fläche.
- Der {{ui:Radierer}} wählt keine Flächen. Wählen Sie die Fläche und drücken Sie {{key:Delete}}, oder löschen Sie eine ihrer Kanten.
- Gehört sie zu einer Gruppe oder Komponente, wählt der Klick das Ganze. Doppelklicken Sie, um sie zu öffnen.

## „Wählen Sie zuerst etwas zum Verschieben aus oder klicken Sie darauf.“

{{ui:Verschieben}}, {{ui:Drehen}} und {{ui:Skalieren}} brauchen etwas zum Arbeiten: Wählen Sie es zuerst aus oder starten Sie das Werkzeug, indem Sie auf das Objekt selbst klicken (nicht auf leeren Raum oder eine Hilfslinie).

## „Wählen Sie zuerst Geometrie aus (ziehen Sie ein Fenster oder dreifachklicken Sie, um alles Verbundene zu wählen).“

{{key:G}} und {{key:Shift+G}} brauchen eine Auswahl. Hilfslinien können nicht gruppiert werden.

## Die Pfeiltasten drehen die Ansicht, statt zu sperren

Sperren funktionieren nur nach dem ersten Klick eines Zeichen- oder Bearbeitungswerkzeugs. {{ui:Drücken/Ziehen}} hat keine Sperren, und bei {{ui:Drehen}} ändern sie den Drehwinkel nicht. Sonst drehen die Pfeiltasten die Ansicht.

## Esc im Vollbild

Im Vollbild kann der Browser das erste {{key:Esc}} nutzen, um das Vollbild zu verlassen. Drücken Sie {{key:Esc}} erneut, um das Werkzeug abzubrechen.

## Keine mittlere Maustaste

Drücken Sie {{key:O}} für {{ui:Orbit}} und ziehen Sie, oder verwenden Sie die Pfeiltasten. Siehe [Drehen, verschieben und zoomen](topic:orbit-pan-zoom#without-a-middle-button).

## Importe

| Meldung | Was zu tun ist |
|---|---|
| „ModelCraft importiert SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG und DXF. … ist keines davon.“ | Exportieren Sie das Modell aus dem anderen Programm in einem dieser Formate |
| „Diese Datei ist größer als 300 MB.“ | Vereinfachen oder teilen Sie das Modell im anderen Programm |
| „…zu groß, um es hier zu modellieren (über 2 Millionen Eckpunkte).“ | Dasselbe |
| „Diese .gltf-Datei benötigt „…“…“ | Legen Sie die `.gltf` zusammen mit ihren `.bin`- und Texturdateien ab oder öffnen Sie die `.glb`-Version |
| „Diese glTF-Datei benötigt die Erweiterung …, die ModelCraft nicht liest.“ | Exportieren Sie erneut aus dem anderen Programm ohne diese Erweiterung (zum Beispiel KTX2-Texturen) |
| Eine OBJ-Datei wird ohne ihre Farben oder Texturen importiert | Legen Sie die `.obj` zusammen mit ihrer `.mtl` und den Bildern ab |
| „Diese Alembic-Datei verwendet das alte HDF5-Layout…“ | Speichern Sie sie im anderen Programm erneut als Ogawa-Alembic-Datei |
| Eine FBX-Datei wird ohne ihre Texturen importiert | Legen Sie die `.fbx` zusammen mit ihren Texturbildern ab oder betten Sie die Medien beim Exportieren ein |
| „Diese FBX-Datei hat die Version …, die ModelCraft nicht liest“ | Exportieren Sie erneut als FBX 2011 oder neuer |
| Eine STL- oder PLY-Datei wird 1,000-mal zu groß oder zu klein importiert | STL wird als Millimeter gelesen, PLY als Meter: Skalieren Sie sie (siehe [Drehen und skalieren](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| „Dies ist keine Collada-Datei (.dae)…“ oder „…keine wohlgeformte XML…“ | Die Datei ist beschädigt oder keine Collada-Datei. Exportieren Sie sie erneut |
| „Diese Collada-Datei hat keine Geometrie, die ModelCraft importieren kann.“ | Sie enthält nur Kameras, Lichter oder Verweise auf andere Dateien |
| „Dies ist eine binäre DXF-Datei. Speichern Sie sie als ASCII-DXF und versuchen Sie es erneut.“ | Speichern Sie sie im CAD-Programm erneut als ASCII |
| „Dies ist keine DWG-Zeichnung…“ | Die Datei ist keine DWG oder beschädigt |
| „Diese Zeichnung konnte nicht gelesen werden (…). Sie ist möglicherweise beschädigt oder in einer DWG-Version gespeichert, die der Leser nicht unterstützt…“ | Die Klammern nennen den Grund. Speichern Sie sie im CAD-Programm als DXF oder als DWG von AutoCAD 2000 bis 2018 |
| „Diese Zeichnung reicht mehr als 10,000 km von ihrem Ursprung…“ | Verschieben Sie die Zeichnung im CAD-Programm nahe an 0,0 |

### Der Import hat die falsche Größe oder liegt auf der Seite

- **OBJ:** OBJ hat keine Einheit; ModelCraft liest Meter. Ein Modell in Millimetern kommt 1000-mal zu groß herein: [skalieren](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) Sie es mit `0.001`; ein Modell in Zoll mit `0.0254`.
- **OBJ liegt auf der Seite:** ModelCraft erwartet OBJ-Dateien mit Y nach oben. Eine mit Z nach oben geschriebene Datei kommt liegend an. Drehen Sie sie um 90° um die rote Achse: Klicken Sie für den Mittelpunkt von {{ui:Drehen}} auf eine Fläche, die entlang Rot zeigt, oder öffnen Sie die Datei in ihrem Programm und exportieren Sie sie mit Y nach oben.
- **DWG oder DXF:** Sie haben im Dialog „Zeicheneinheiten“ die falsche Einheit gewählt. Machen Sie den Import rückgängig und importieren Sie erneut.

## Dateien öffnen

| Meldung | Was zu tun ist |
|---|---|
| „Dies ist kein ModelCraft-Modell (es ist kein JSON).“ | Verwenden Sie {{ui:Importieren}} für andere Formate |
| „Dies ist keine ModelCraft-Datei, die wir öffnen können: …“ | Die Datei ist beschädigt oder wurde von Hand verändert |
| „Dieses Modell wurde von einer neueren ModelCraft-Version gespeichert…“ | Öffnen Sie es in der neueren Version |
| „Diese Datei ist größer als 200 MB.“ | Das Modell ist hier zu groß zum Öffnen |

## Ich habe Arbeit verloren

ModelCraft speichert nicht selbst in eine Datei. Wenn Sie einen Tab mit nicht gespeicherten Änderungen schließen oder neu laden, fragt der Browser zuerst („Seite verlassen?“ oder „Seite neu laden?“); bleiben Sie auf der Seite und speichern Sie. Auch Neu und Öffnen fragen nach („Nicht gespeicherte Änderungen“). Sind der Browser oder der Computer abgestürzt, öffnen Sie ModelCraft im selben Browser erneut: Es bietet die nicht gespeicherte Arbeit wieder an („Ihre Arbeit wiederherstellen?“; siehe [Ihre Arbeit wiederherstellen](common:recover)). Speichern Sie oft mit {{key:Mod+S}}.

## Meine Downloads-Ordner füllt sich mit Kopien

Jedes Speichern ist ein neuer Download, benannt `Untitled (1).modelcraft`, `Untitled (2).modelcraft` und so weiter. Löschen Sie die alten oder stellen Sie den Browser so ein, dass er bei jeder Datei fragt, wo sie gespeichert werden soll, und die alte Datei selbst überschreiben lässt. Siehe [Öffnen, speichern, importieren und exportieren](topic:files#save-a-model).

## Es wird langsam

- Jeder Rückgängig-Schritt behält eine Kopie des Modells (ein [Netz](topic:meshes) behält nur, was sich geändert hat), daher dauert bei einem sehr großen Import mit Drücken/Ziehen-Geometrie jede Bearbeitung länger. Zerlegen oder löschen Sie, was Sie nicht brauchen, speichern Sie und öffnen Sie erneut: Das erneute Öffnen löscht auch den Rückgängig-Verlauf.
- Sonnenschatten kosten am meisten. Entfernen Sie den Haken bei {{ui:Sonnenschatten}}, während Sie modellieren.

## Keine Schatten

{{ui:Sonnenschatten}} ist ausgeschaltet, die Sonne ist zu der gewählten Zeit untergegangen („Die Sonne ist zu dieser Zeit untergegangen.“), oder der Stil ist {{ui:Drahtmodell}}, das keine Schatten zeichnet.

## „Dieser Browser hat kein Vollbild erlaubt.“

Manche Browser und manche eingebetteten Ansichten verweigern das Vollbild. Verwenden Sie stattdessen das eigene Vollbild des Browsers ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft öffnet sich ohne Verbindung nicht

ModelCraft öffnet sich offline nur, wenn es in diesem Browser für die Offline-Nutzung gespeichert wurde: Die Schaltfläche in der App-Leiste muss {{ui:Offline bereit}} anzeigen. Öffnen Sie es online und klicken Sie auf {{ui:Für Offline speichern}}. Zeigt die Schaltfläche {{ui:Speichern nicht möglich}}, klicken Sie bei einer besseren Verbindung erneut darauf. {{ui:Offline nicht verfügbar}} bedeutet, dass dieses Fenster (ein privates Fenster oder ein verwalteter Computer) keine Kopie behalten kann. Siehe [Offline arbeiten](common:offline).
