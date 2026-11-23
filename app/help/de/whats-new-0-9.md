---
title: Neuheiten in 0.9 (früher)
summary: Druckstufe mit eigenem Slicer und Senden über USB, Klipper, OctoPrint und PrusaLink, Harz-Slicing und Dateiformat-Add-ons, Materialfluss, Digitaler Zwilling- und Fabrikhalle-Add-ons, NURBS-Verrundungen, Verdicken und Scan-Anpassung, AR vor Ort und zehn Bogenmethoden.
keywords: Neuheiten 0.9, früherer Release, Neuheiten, Versionshinweise, Changelog, 0.9, Druckstufe, 3D-Druck, an 3D-Drucker senden, Slicer, CadCraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, Harz, Harzdruck, goo, sl1, ctb, anycubic, Belichtungstest, Materialfluss, Digitaler Zwilling, Fabrikhalle, plc, Förderband, nurbs, Verrundung, verdicken, Scan-Anpassung, ar, vor Ort, Bogenmethoden, Einheiten, Neuheiten, Versionshinweise, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Render-Engine, Engine, öffnen in, usd, gltf, unreal, Add-on-Engine, nurbs, Flächen, Loft, Sweep, Kontinuität, g0, g1, g2, Zebra, step, iges, Szene sagen, Szene, Wetter, Tageszeit, Jahreszeit, Assistent, Material aus einem Foto, Foto, Skizzenfoto, möblieren, Raum möblieren, Schräg, schräger Schnitt, Teilen, Druckprüfung, Probleme, Eigenschaftstabelle, Lampen, Sprachen, Eingabegeräte, Werkzeugleistenzeilen, dwg, Live
from: 2717d1b1
---

Dies sind die Änderungen in ModelCraft 0.9 im Vergleich zu 0.8.1. ModelCraft erreicht jetzt den Drucker und die Fertigungshalle: Sie können Objekte auf ein Druckbett legen und ohne Export senden, für Filament oder Harz slicen und eine Linie zur Materialhandhabung auslegen. Dies ist CadCraft Studio 0.9 mit seinen acht Apps; die meisten der neuen Funktionen unten sind Add-ons.

## Neu

### 3D-Druck

- **Druckstufe.** Klicken Sie in der Symbolleiste auf {{ui:Druckstufe}}. Fügen Sie Bibliothekselemente zum Druckbett hinzu, ordnen Sie sie an, sehen Sie sich die gesliceten Schichten an und drücken Sie {{ui:An 3D-Drucker senden}}, ganz ohne STL-Export. Sie gehört zum 3D-Druck-Add-on, das standardmäßig eingeschaltet ist und wie jedes Add-on entfernt werden kann. Siehe [Objekte auf das Druckbett legen und an einen Drucker senden](topic:print-stage).
- **Eigener Filament-Slicer.** {{ui:CadCraft basic (inklusive, am schnellsten)}} ist der Slicer in der Liste **Slicer** der Karte: Wände, Hüllen, Füllung, Stützen und ein Skirt, auf einem Worker, damit die Seite benutzbar bleibt. Mit dem Regler **Schicht** zeigt {{ui:Vorschau der Schichten}} die Schichten, bevor Sie senden. Druckerprofile wie die Stile Ender-3 und Prusa MK4 bringen ihren eigenen Start-G-Code mit.
- **Senden.** Über USB (Chrome oder Edge auf einem Computer, bei geöffneter Seite) oder an Klipper (Moonraker), OctoPrint oder PrusaLink in Ihrem Netzwerk. Ohne Klick wird nichts verbunden oder gesendet, und beim Senden wird zuerst nachgefragt.
- **Andere Slicer.** Kiri:Moto, PrusaSlicer und OrcaSlicer sind eigene Add-ons und standardmäßig aus; fügen Sie sie über die Karte oder über {{ui:Einstellungen}} › {{ui:Add-ons}} hinzu. PrusaSlicer und OrcaSlicer verwenden Ihre eigene installierte Kopie aus CadCraft Studio. Das Add-on für Bambu-Lab-Drucker slicet mit Ihrem OrcaSlicer und dessen P2S-Profilen und benötigt Studio auf einem Computer.
- **Harzdruck.** Die Harz-Add-ons (standardmäßig aus) erzeugen Schichtbilder für das Display Ihres Druckers, mit Aushöhlung und Entlüftungslöchern, einem Floß und Stützen, einer Schichtvorschau sowie Zeit, Harz und Kosten. Dateiformat-Add-ons schreiben Elegoo GOO, SL1, Chitubox (CBDDLP und CTB 2 bis 5) und Anycubic (PWMX und PWS). Ein Belichtungstest für Harz erstellt eine Leiter mit fünf Belichtungen. Siehe [Für einen Harzdrucker slicen](topic:resin-printing).
- **Unverändert.** {{ui:Export}} › {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}}, die Drucktools und Teilen für den Druck funktionieren wie in 0.8. Siehe [Ein Modell für den 3D-Druck vorbereiten](topic:print-3d).

### Materialfluss, Digitaler Zwilling und Fabrikhalle

Diese drei sind Add-ons, die aus bleiben, bis Sie sie in {{ui:Einstellungen}} › {{ui:Add-ons}} einschalten; danach hat jedes seine eigene Hilfe.

- **Materialfluss.** Ein Bereich namens Materialfluss legt Förderbänder, Stationen, Puffer und FTF-Wege in der 3D-Ansicht an, führt eine Simulation mit fester Startzahl aus, spielt sie ab und zeigt Durchsatz, Durchlaufzeiten und Warteschlangen. Die Ergebnisse werden als CSV gespeichert. Aufträge können aus einer CSV-Datei kommen. Roboterzellen lassen sich prüfen und exportieren. Die SPS-Anbindung hat einen Softmodus und einen echten Modus über Modbus TCP, der nur in CadCraft Studio funktioniert.
- **Digitaler Zwilling.** Liest das Layout des Materialflusses und betreibt eine Soft-SPS darauf, mit Störungen, die Sie erzwingen können, Bestandstests, einem Layoutvergleich und einer Stückliste.
- **Fabrikhalle.** Macht die Stationen zu Maschinen und Zellen, liest sie live oder aus einem Simulator, und führt eine Auftragswarteschlange sowie eine einfache OEE. Sie liest nur: Dieser Stand kann nicht auf eine Maschine oder SPS schreiben.

### Flächen, Modelle und Zeichnung

- **Verrundungen, Verdicken und Booleans auf NURBS.** Der Bereich {{ui:Flächen}} hat {{ui:Verrundung zwischen Flächen}}, {{ui:Mehrere Kanten verrunden}}, {{ui:In Volumenkörper verdicken}} sowie Vereinigung, Subtraktion und Schnittmenge, jeweils mit ihrer gemessenen Abweichung. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).
- **Flächen an einen Scan anpassen.** Wählen Sie ein gescanntes Netz und verwenden Sie in der Gruppe „Scan“ {{ui:Flächen an den Scan anpassen}}, danach {{ui:Flächen zu einem Volumenkörper vernähen}}. Es ist eine erste Anpassung, kein vollständiges Reverse-Engineering-Paket.
- **Eine Live-Verbindung von einem .3dm-Modellierer.** Nur in eine Richtung, aus Rhino 8 oder Grasshopper, und sie benötigt CadCraft Studio auf demselben Computer. Siehe [Ein .3dm-Modell live halten](topic:live-3dm-link).
- **Das Modell vor Ort ansehen.** {{ui:Ansicht vor Ort (AR, Handy)}} im Menü {{ui:Ansichten}} funktioniert auf einem Android-Handy mit Chrome. Siehe [Das Modell vor Ort mit einem Android-Handy ansehen (AR)](topic:ar-on-site).
- **Bogenmethoden.** Die Auswahl {{ui:Bogenmethoden}} bietet zehn Arten, einen Bogen zu zeichnen, darunter {{ui:3-Punkt}} und {{ui:Anfang, Mittelpunkt, Ende}}.
- **Weitere Einheiten.** Gewichte (kg, lb, t, ton) und Temperaturen (Grad C, F, K und R) werden erkannt, wo Sie Werte mit Einheiten eingeben.

## In jeder App

- **Tooltips.** Der Hinweistext auf Schaltflächen und abgeschnittenen Beschriftungen ist ein Bootstrap-Tooltip.
- **Schließbarer Starttipp.** Die Tipp-Karte auf einem leeren Zeichenbereich hat ein kleines Schließen-x. Sie bleibt geschlossen, und die Befehlspalette kann sie wieder anzeigen.
- **Scrollbare Registerleisten.** Eine Registerleiste eines Bereichs, die nicht hineinpasst, scrollt, statt abgeschnitten zu werden.
- **Registerkartentitel.** Ist ein Dokument geöffnet, beginnt der Browser-Tab mit dem Namen des Dokuments, dann ModelCraft und CadCraft. Vor dem Namen steht ein Punkt, solange das Dokument nicht gespeichert ist.
- **Layout.** {{ui:Einstellungen}} › {{ui:Allgemein}} › Layout enthält die Layouts in einer Auswahlliste, mit einer Option, ein Layout nur für diese App zu verwenden, und einer Schaltfläche zum Zurücksetzen des Layouts.
- **Sprachen.** Die Sprachliste in den Einstellungen folgt den Sprachdateien, die der Build enthält. Andere Sprachen als Englisch sind maschinelle Entwürfe.
- **Live und Bibliothek.** Live TeamWork zeigt Live-Cursor und Namen, und Bibliothekssammlungen geben jeder App eine Standardsammlung.

## Behoben

- {{ui:Wiedergabe}} wird zu {{ui:Pause}}, während eine Animation läuft, und {{key:Space}} startet und hält an, solange die Zeitleiste offen ist.
- Das Standbild-Rendering greift auf WebGL zurück, wenn die Grafikkarte den Pfad-Tracer nicht starten kann. Die Live-Renderansicht zeigt den Fehler unter Umständen noch; dies wurde nicht auf einem Windows-Rechner mit diesem Treiber geprüft.
- Der echte Modus des Materialflusses verbindet sich wieder, nachdem eine Verbindung bei SPS-Ausnahmeantworten beendet wurde.

## Ehrliche Grenzen

- Nichts wurde auf einem echten Drucker gedruckt: weder Filament noch Harz, auch nicht über Bambu Connect. Harzdateien wurden nur mit den eigenen Lesern von CadCraft zurückgelesen.
- Der Digitale Zwilling und die Fabrikhalle wurden nur mit Simulatoren und bekannten Ergebnissen geprüft, ohne echte SPS, echte Linie oder echtes Protokoll. Sie sind Prüfhilfen, keine Sicherheitsvalidierung. Die Physik gilt nur für Quader, bis zu acht Lasten.
- Die Verbindung zu Rhino und Grasshopper ist in den echten Programmen noch nie gelaufen.
- Nicht-englische Sprachen sind maschinelle Entwürfe.

## Früher: 0.8 und 0.8.1

Dies sind die Änderungen in ModelCraft 0.8 (2026-11-01) und 0.8.1 (2026-11-02) im Vergleich zu 0.7. Der Dialog {{ui:Bild rendern…}} kann die Szene jetzt an ein anderes Programm senden, der Bereich Flächen erstellt glatte Freiformflächen, und ein verbundener Assistent kann eine ganze Szene aus einem Satz einrichten.

### Neu

**Rendering**

- **Eine Auswahl der Engine.** {{ui:Bild rendern…}} hat eine Liste **Engine** über Modus. Unsere beiden eigenen Engines, Schnell und der Pfad-Tracer, sind der Standard und funktionieren überall. Andere Einträge speichern die Szene als Paket (das Modell als USD-Datei, dazu eine Einstellungsdatei mit den genauen Materialwerten, den eingeschalteten Lampen, der Sonne, dem Himmel, der Belichtung und der Kamera), das Sie in ein anderes Programm mitnehmen können. Ein Bild, das ein anderes Programm gezeichnet hat, nennt das Programm und dessen Version. Siehe [Wählen, welches Programm das Bild zeichnet](topic:render-engines).
- **In einem anderen Programm öffnen.** Die Liste Engine kann die Szene als USD-Datei, als glTF-Datei (`.glb`) oder als Unreal-Projektordner (`.zip`) speichern, im Browser und in CadCraft Studio. In Studio kann sie außerdem usdview oder das eigene Programm des Computers für die Datei starten. Siehe [Die Szene in einem anderen Programm öffnen](topic:render-open-in).
- **Aus Studio an eine Spiel-Engine senden.** Studio schreibt die Szene in ein Unreal-Engine-Projekt und hält sie bei jedem Senden synchron, nur in eine Richtung. Ihre eigenen Änderungen liegen in einer Ebene, die CadCraft nie schreibt. Siehe [Die Szene an eine Spiel-Engine senden](topic:render-unreal).
- **Engines aus Add-ons.** Ein Add-on kann der Liste eine Engine hinzufügen. Eine in JavaScript geschriebene zeichnet im Browser und in Studio; eine, die ein Programm startet, braucht Ihr Ja in Studio. Siehe [Das Bild mit einem anderen Programm zeichnen](topic:render-other-program) und [Eine Render-Engine mit einem Add-on hinzufügen](topic:render-engine-addons).
- **Die Szene sagen.** Sagen Sie Ihrem verbundenen Assistenten „Dämmerung, leichter Regen, Herbstbäume, Menschen auf dem Platz“, und ModelCraft richtet alles in einem Schritt ein: Die Sonne wandert zu Datum und Uhrzeit, damit die Schatten folgen, der Himmel ändert sich, nasse Flächen erscheinen, und Bäume und Menschen werden als echte Objekte auf Markierungen platziert, die Sie ausblenden, verschieben oder löschen können. Tageszeit, Datum oder Jahreszeit sowie das Wetter (klar, bedeckt, Nebel, leichter Regen, Regen, Sturm) funktionieren auch einzeln, und eine spätere Anfrage ändert dieselbe Szene. Nebel zeigt sich im hochwertigen Bild auf der Grafikkarte; die anderen Engines zeigen den Himmel, das Licht und die nassen Flächen. Regen wird nicht als fallende Striche gezeichnet.

**Materialien**

- **Ein Material aus einem Foto.** Geben Sie ModelCraft ein Foto einer Fläche (eine Wand, ein Boden, Stein), und es erstellt ein kachelbares Material: Die Beleuchtung über das Foto wird geglättet, die Ränder werden passend gemacht, und eine Farbkarte, eine Rauheitskarte und eine Normalenkarte werden aus dem Bild berechnet. Es ist reine Bildverarbeitung Ihres eigenen Fotos, ohne trainiertes Modell. Die Rauheit ist eine Schätzung. Ein schlichtes, quadratisches, gerade aufgenommenes Foto ergibt die beste Kachel; ein starkes Muster wie Ziegel kann an der Naht einen weichen Schatten zeigen, wo ineinander übergeblendet wird.

**Flächen**

- **Freiformflächen.** Der Bereich {{ui:Flächen}} erstellt NURBS-Kurven und ungetrimmte Flächen: Kurven durch Punkte, Loft, Regelfläche, Extrusion, Drehung, Sweeps entlang einer oder zwei Schienen, Flächen aus einem Kurvennetz, Flicken aus vier Kanten, Angleichen und Verschmelzen. Jede gemeinsame Kante wird als G0, G1 oder G2 gemessen (Spalt, Winkel, Krümmungssprung) an den exakten Flächen, und eine Kante, die schlechter ist als verlangt, erscheint im Bereich Probleme mit einer Korrektur **Angleichen**. Zebrastreifen und Krümmungsfarben werden aus den exakten Flächen gezeichnet. STEP- und IGES-Dateien werden geschrieben und gelesen. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).

**Gelände und Räume**

- **Eine Skizze als Foto auf den Boden.** {{ui:Datei}} › {{ui:Skizzenfoto importieren…}} macht aus einem Handyfoto einer Handskizze Kanten auf dem Boden im Maßstab, den Sie angeben: eine Gruppe, mit einer Markierung für jede Stiftfarbe. Das Papier wird auf Ihrem Computer erkannt und gerade gerichtet; nichts wird irgendwohin gesendet. Siehe [Modell auf einem Lageplan](topic:site-plan).
- **Einen Raum möblieren.** Wählen Sie einen Boden und verwenden Sie {{ui:Organisieren}} › {{ui:Einen Raum möblieren…}}. Schlaf-, Wohn-, Esszimmer-, Küchen-, Badezimmer- oder Büromöbel werden nach Regeln platziert, an den Wänden und frei von Türen und Fenstern, in einer Gruppe, die Sie in einem Schritt entfernen können. Es ist ein Standardlayout zur Prüfung, kein Entwurf. Siehe [Starterbibliothek](topic:starter).

**3D-Druck**

- **Schräge Schnitte.** Teilen für den Druck kann seine Schnitte um bis zu 60 Grad neigen, was den Teilen mehr Klebefläche gibt. Verbinder stehen rechtwinklig zum Schnitt. Siehe [Ein Modell für den Druck teilen](topic:print-split).
- **Die Druckprüfung in Probleme.** Die Ergebnisse der 3D-Druckprüfung erscheinen im Bereich Probleme mit Markierungen am Modell, und Reparieren behebt sie von dort aus. Siehe [Stützen, Wandstärke, Aushöhlen und Reparatur](topic:print-tools).

**In jeder App**

- **Sprachen.** Hilfe und Apps gibt es in 54 Sprachen. Zehn sind neu: Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili und Usbekisch. Andere Sprachen als Englisch sind maschinelle Entwürfe, bis eine Muttersprachlerin oder ein Muttersprachler sie geprüft hat, und Hilfethemen können noch auf Englisch sein.
- **Eingabegeräte.** Ein Trackpad, ein Stift, eine 3D-Maus, ein Game-Controller und MIDI-Regler können die Apps steuern, für alle oder für eine.
- **Werkzeugleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › Werkzeugleistenzeilen setzt Umbrechen (wie bisher), 2 Zeilen oder 1 Zeile. Eine Leiste, die nicht hineinpasst, scrollt seitlich, statt Platz vom Zeichenbereich zu nehmen. Umbrechen bleibt der Standard.
- **Eigenschaftstabelle.** Die Lampenfelder von ModelCraft nutzen die gemeinsame Tabelle: einklappbare Kategorien, Spalten für Bezeichnung und Wert sowie die Dichte Kompakt. Eingetippte Rechnungen wie `2*450` funktionieren weiterhin.
- **Probleme.** Der Bereich Probleme (die Warnschaltfläche in der App-Leiste) ist allen Apps gemeinsam. In ModelCraft enthält er die Druckprüfung und die Warnungen zur Flächenkontinuität.
- **Live.** Eine Live-TeamWork-Sitzung zeigt, wer wo ist. Siehe [Gemeinsam mit Live TeamWork modellieren](topic:work-live).
- **Add-ons.** Add-ons können Render-Engines hinzufügen, wie oben beschrieben.
- **Ihre KI verbinden.** Der Werkzeugvertrag und die Prüfungen der acht Apps bestehen, mit 454 Werkzeugen insgesamt. Eine Ein-Klick-Verbindung in Studio, ein gehosteter Connector für Browser-Assistenten, Ihr eigener Schlüssel in Studio und ein veröffentlichtes Paket sind noch nicht zugesagt. Die Apps enthalten keine eigene KI. Siehe [ModelCraft mit KI-Assistenten verwenden](topic:use-with-ai-assistants).

### Behoben in 0.8.1

- **Abschnitt der DWG-Klassen.** Der Abschnitt mit den Klassen einer DWG-Datei wurde als falscher Typ gelesen, was den Import beschädigen konnte. Er wird jetzt richtig gelesen, in ModelCraft und in den anderen Apps, die DWG lesen.
- **Tablets im Hochformat.** Überschüssige Rasterhöhe geht an die Zeichenfläche, und das Blattlayout beginnt bei 760 Pixeln Breite oder weniger. Auch das Stylesheet von ModelCraft enthält die Änderung.
- **Sprache in Studio.** CadCraft Studio und die gepackten Ausgaben können die Sprache während des Betriebs wechseln; zuvor gab es nur Englisch. Dies wurde noch nicht auf allen Plattformen geprüft: Sagen Sie uns, wenn die Sprache nicht wechselt.

### Noch nicht umgesetzt

- **Nicht signiert.** Windows zeigt möglicherweise SmartScreen: Wählen Sie {{ui:Weitere Informationen}} und dann {{ui:Trotzdem ausführen}}. Auf einem Mac klicken Sie mit der rechten Maustaste und wählen {{ui:Öffnen}}. Store-Builds sind angehalten, und der Build für iPad und iPhone wurde für 0.8.1 nicht neu erstellt.
- Ein anderes Programm, das das Bild ohne Render-Engine-Add-on zeichnet, Panorama- oder Stereokameras sowie ein Himmelsbild über ein anderes Programm sind noch nicht vorhanden, ebenso wenig das Plug-in, das die Unreal-Bühne öffnet. Die Dateien werden geschrieben; das Plug-in ist nicht veröffentlicht und wurde in Unreal nicht ausgeführt.
- Freiformflächen: G3 und Klasse A werden nicht gemessen oder zugesichert; Trimmen und Volumenkörper folgen später.
- Bilder aus anderen Programmen sind nicht pixelgenau wie unsere: Nur Kamera, Sonne, Lampen und Belichtung stimmen überein.
- Die Korrektur von 0.8.1 für den Sprachwechsel in Studio ist nicht auf allen Plattformen geprüft.

Alles Weitere steht unter [Noch nicht umgesetzt](topic:not-built-yet). Zur vorherigen Version siehe [Neuheiten in 0.7](topic:whats-new-0-7).
