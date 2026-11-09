---
title: Neuerungen in 0.8 und 0.8.1
summary: Eine Auswahl der Render-Engine mit Dateien für andere Programme, Freiformflächen mit gemessener Stetigkeit, eine Szene, die Sie Ihrem Assistenten beschreiben, ein Material aus einem Foto, ein Skizzenfoto auf dem Gelände, möblierte Räume, schräge Schnitte für den 3D-Druck und die Druckprüfung im Bereich „Probleme“.
keywords: Neuerungen, was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Render-Engine, Engine, öffnen in, USD, glTF, Unreal, Add-on-Engine, NURBS, Flächen, Loft, Sweep, Stetigkeit, G0, G1, G2, Zebra, STEP, IGES, Szene beschreiben, Szene, Wetter, Tageszeit, Jahreszeit, Assistent, Material aus einem Foto, Foto, Skizzenfoto, möblieren, Raum möblieren, schräg, schräger Schnitt, teilen, Druckprüfung, Probleme, Eigenschaftsraster, Lampen, Sprachen, Eingabegeräte, Symbolleistenzeilen, DWG, Live
from: e4989b17
---

Das hat sich in ModelCraft 0.8 (2026-11-01) und 0.8.1 (2026-11-02) gegenüber 0.7 geändert. Der Dialog {{ui:Bild rendern…}} kann die Szene jetzt an ein anderes Programm senden, der Bereich {{ui:Flächen}} erstellt glatte Freiformflächen, und ein angebundener Assistent kann mit einem einzigen Satz eine ganze Szene einrichten.

## Neu

### Rendern

- **Eine Auswahl der Engine.** {{ui:Bild rendern…}} hat oberhalb von Modus eine Liste **Engine**. Unsere eigenen zwei Engines, Schnell und der Path-Tracer, sind der Standard und funktionieren überall. Andere Einträge speichern die Szene als Paket (das Modell als USD-Datei sowie eine Einstellungsdatei mit den genauen Materialwerten, den eingeschalteten Lampen, der Sonne, dem Himmel, der Belichtung und der Kamera), das Sie in ein anderes Programm mitnehmen können. Ein Bild, das ein anderes Programm gezeichnet hat, nennt Programm und Version, mit denen es entstanden ist. Siehe [Auswählen, welches Programm das Bild zeichnet](topic:render-engines).
- **In einem anderen Programm öffnen.** Die Liste Engine kann die Szene als USD-Datei, als glTF-Datei (`.glb`) oder als Unreal-Projektordner (`.zip`) speichern, im Browser und in CadCraft Studio. In Studio kann sie außerdem usdview oder das eigene Programm des Computers für die Datei starten. Siehe [Szene in einem anderen Programm öffnen](topic:render-open-in).
- **An eine Spiel-Engine aus Studio senden.** Studio schreibt die Szene in ein Projekt der Unreal Engine und hält es bei jedem Senden aktuell, nur in eine Richtung. Ihre eigenen Änderungen liegen in einem Layer, den CadCraft nie schreibt. Siehe [Szene an eine Spiel-Engine senden](topic:render-unreal).
- **Engines aus Add-ons.** Ein Add-on kann der Liste eine Engine hinzufügen. Eine in JavaScript geschriebene zeichnet im Browser und in Studio; eine, die ein Programm startet, braucht Ihre Zustimmung in Studio. Siehe [Bild mit einem anderen Programm zeichnen](topic:render-other-program) und [Render-Engine mit einem Add-on hinzufügen](topic:render-engine-addons).
- **Die Szene beschreiben.** Sagen Sie Ihrem verbundenen Assistenten „Dämmerung, leichter Regen, Herbstbäume, Menschen auf dem Platz“, und ModelCraft richtet alles in einem Schritt ein: Die Sonne wandert auf Datum und Uhrzeit, damit die Schatten folgen, der Himmel ändert sich, nasse Flächen erscheinen, und Bäume und Menschen werden als echte Objekte auf Tags gesetzt, die Sie ausblenden, verschieben oder löschen können. Tageszeit, Datum oder Jahreszeit und Wetter (klar, bedeckt, Nebel, leichter Regen, Regen, Sturm) funktionieren auch allein, und eine spätere Anfrage ändert dieselbe Szene. Nebel erscheint im Bild in höchster Qualität auf der Grafikkarte; die anderen Engines zeigen den Himmel, das Licht und die nassen Flächen. Regen wird nicht als fallende Streifen gezeichnet.

### Materialien

- **Ein Material aus einem Foto.** Geben Sie ModelCraft ein Foto einer Fläche (eine Wand, ein Boden, Stein), und es entsteht ein kachelbares Material: Die Beleuchtung über das Foto wird geglättet, die Kanten werden zusammengefügt, und eine Farbkarte, eine Rauheitskarte und eine Normalenkarte werden aus dem Bild berechnet. Es ist reine Bildverarbeitung Ihres eigenen Bildes, ohne trainiertes Modell. Die Rauheit ist eine Schätzung. Ein einfaches, quadratisches, gerade aufgenommenes Foto ergibt die beste Kachel; ein starkes Muster wie Ziegel kann an der Fuge eine weiche Doppelkontur zeigen, wo die Verbindung überblendet wird.

### Flächen

- **Freiformflächen.** Der Bereich {{ui:Flächen}} erstellt NURBS-Kurven und nicht beschnittene Flächen: Kurven durch Punkte, Loft, Regelfläche, Extrusion, Drehung, Sweeps entlang einer oder zweier Führungskurven, Flächen aus einem Kurvennetz, Flicken aus vier Kanten, Angleichen und Übergänge. Jede gemeinsame Kante wird als G0, G1 oder G2 gemessen (Lücke, Winkel, Krümmungssprung) an den exakten Flächen. Eine Kante, die schlechter ist als verlangt, erscheint im Bereich „Probleme“ mit der Korrektur **Angleichen**. Zebrastreifen und Krümmungsfarben werden aus den exakten Flächen gezeichnet. STEP- und IGES-Dateien werden exportiert und importiert. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).

### Gelände und Räume

- **Ein Skizzenfoto auf das Gelände.** {{ui:File}} › {{ui:Skizzenfoto importieren…}} macht aus einem Handyfoto einer Handskizze Kanten auf dem Gelände im Maßstab, den Sie angeben: eine Gruppe, mit einem Tag für jede Stiftfarbe. Das Blatt wird auf Ihrem Computer erkannt und gerade gerichtet, und nichts wird irgendwohin gesendet. Siehe [Auf einem Lageplan modellieren](topic:site-plan).
- **Einen Raum möblieren.** Wählen Sie einen Boden und verwenden Sie {{ui:Organisieren}} › {{ui:Einen Raum möblieren…}}. Schlafzimmer-, Wohnzimmer-, Esszimmer-, Küchen-, Badezimmer- oder Büromöbel werden nach Regeln platziert, an den Wänden und frei von Türen und Fenstern, in einer Gruppe, die Sie in einem Schritt entfernen können. Es ist ein Standardvorschlag zur Prüfung durch Sie, kein fertiger Entwurf. Siehe [Startbibliothek](topic:starter).

### 3D-Druck

- **Schräge Schnitte.** Teilen für den Druck kann die Schnitte um bis zu 60 Grad neigen, was den Teilen mehr Klebefläche gibt. Verbinder stehen rechtwinklig zum Schnitt. Siehe [Modell zum Drucken teilen](topic:print-split).
- **Die Druckprüfung in Probleme.** Die Befunde der 3D-Druckprüfung erscheinen im Bereich „Probleme“ mit Markierungen am Modell, und Reparieren behebt sie von dort aus. Siehe [Stützen, Wandstärke, Aushöhlen und Reparatur](topic:print-tools).

### In allen Apps

- **Sprachen.** Hilfe und Apps gibt es in 54 Sprachen. Zehn sind neu: Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili und Usbekisch. Andere Sprachen als Englisch sind maschinelle Entwürfe, bis eine muttersprachliche Person sie gelesen hat, und Hilfethemen können noch auf Englisch sein.
- **Eingabegeräte.** Ein Trackpad, ein Stift, eine 3D-Maus, ein Spielcontroller und MIDI-Bedienelemente können die Apps steuern, für alle oder für eine einzelne.
- **Symbolleistenzeilen.** {{ui:Settings}} › {{ui:General}} › Symbolleistenzeilen legt Umbrechen (wie bisher), 2 Zeilen oder 1 Zeile fest. Eine Leiste, die nicht passt, scrollt seitlich, statt Platz von der Zeichnung zu nehmen. Umbrechen bleibt der Standard.
- **Eigenschaftsraster.** Die Lampenfelder von ModelCraft verwenden das gemeinsame Raster: einklappbare Kategorien, Spalten für Bezeichnung und Wert sowie die Dichte „Kompakt“. Typisierte Rechnungen wie `2*450` funktionieren weiterhin.
- **Probleme.** Der Bereich „Probleme“ (die Warnschaltfläche in der Anwendungsleiste) ist allen Apps gemeinsam. In ModelCraft enthält er die Druckprüfung und die Warnungen zur Flächenstetigkeit.
- **Live.** Eine Live-TeamWork-Sitzung zeigt, wer wo ist. Siehe [Gemeinsam modellieren mit Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons können, wie oben beschrieben, Render-Engines hinzufügen.
- **KI anbinden.** Die Werkzeugschnittstelle und die Prüfungen der acht Apps sind bestanden, mit 454 Werkzeugen insgesamt. Eine Verbindung mit einem Klick in Studio, ein gehosteter Connector für Browser-Assistenten, Ihr eigener Schlüssel in Studio und ein veröffentlichtes Paket sind noch nicht zugesagt. Die Apps enthalten keine eigene KI. Siehe [ModelCraft mit KI-Assistenten nutzen](topic:use-with-ai-assistants).

## Behoben in 0.8.1

- **Klassenabschnitt der DWG-Datei.** Der Klassenabschnitt einer DWG-Datei wurde als falscher Typ gelesen, was den Import der Datei beschädigen konnte. Er wird jetzt richtig gelesen, in ModelCraft und in den anderen Apps, die DWG lesen.
- **Tablets im Hochformat.** Überschüssige Rasterhöhe geht an die Zeichenfläche, und das Blattlayout beginnt bei 760 Pixel Breite oder weniger. Auch das Stylesheet von ModelCraft enthält die Änderung.
- **Sprache in Studio.** CadCraft Studio und die verpackten Ausgaben können die Sprache während des Betriebs umschalten; bisher waren sie nur auf Englisch verfügbar. Das wurde noch nicht auf jeder Plattform getestet: Sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.

## Noch nicht in dieser Version

- **Nicht code-signiert.** Windows zeigt möglicherweise SmartScreen an: Wählen Sie {{ui:More info}}, dann {{ui:Run anyway}}. Auf einem Mac klicken Sie mit der rechten Maustaste und wählen {{ui:Open}}. Store-Versionen sind angehalten, und die Version für iPad und iPhone wurde für 0.8.1 nicht neu erstellt.
- Ein anderes Programm, das das Bild ohne Render-Engine-Add-on zeichnet, Panorama- und Stereokameras sowie ein Himmelsbild über ein anderes Programm und das Plug-in, das die Unreal-Bühne öffnet, gibt es noch nicht. Die Dateien werden geschrieben; das Plug-in ist nicht veröffentlicht und wurde nicht in Unreal ausgeführt.
- Freiformflächen: G3 und Klasse A werden nicht gemessen oder beansprucht; Zuschneiden und Volumenkörper folgen später.
- Bilder aus anderen Programmen sind nicht pixelgenau wie unsere: Nur Kamera, Sonne, Lampen und Belichtung stimmen überein.
- Die Korrektur in 0.8.1 für den Sprachwechsel in Studio ist nicht auf jeder Plattform getestet.

Alles Weitere steht unter [Noch nicht umgesetzt](topic:not-built-yet). Zur vorherigen Version siehe [Neuerungen in 0.7](topic:whats-new-0-7).
