---
title: Neuheiten in 0.9
summary: Druckstufe mit eigenem Slicer und Senden über USB, Klipper, OctoPrint und PrusaLink, Harz-Slicing und Dateiformat-Add-ons, Materialfluss, Add-ons für Digitalen Zwilling und Produktionshalle, NURBS-Verrundungen, Verdickung und Scananpassung, AR vor Ort und zehn Bogenmethoden.
keywords: neuheiten, was ist neu, versionshinweise, änderungsprotokoll, 0.9, druckstufe, 3d-druck, an 3d-drucker senden, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, harz, harzdruck, goo, sl1, ctb, anycubic, belichtungstest, materialfluss, digitaler zwilling, produktionshalle, plc, förderband, nurbs, verrundung, verdicken, scananpassung, ar, vor ort, bogenmethoden, einheiten, änderungen, 0.8, 0.8.1, version, neue funktionen, render-engine, engine, öffnen in, usd, gltf, unreal, add-on-engine, flächen, loft, sweep, stetigkeit, g0, g1, g2, zebra, step, iges, szene sagen, szene, wetter, tageszeit, jahreszeit, assistent, material aus foto, foto, skizzenfoto, möblieren, schräg, schräger schnitt, teilen, druckprüfung, probleme, eigenschaftsraster, lampen, sprachen, eingabegeräte, werkzeugleisten-zeilen, dwg, live
from: 169048a2
---

Das hat sich in ModelCraft 0.9 gegenüber 0.8.1 geändert. ModelCraft reicht jetzt bis zum Drucker und zur Produktionshalle: Sie können Dinge auf ein Druckbett legen und senden, ohne zu exportieren, für Filament oder Harz in Schichten aufteilen und eine Förderstrecke für den Materialfluss auslegen. Dies ist CadCraft Studio 0.9 mit seinen acht Apps; die meisten der neuen Funktionen unten sind Add-ons.

## Neu

### 3D-Druck

- **Druckstufe.** Klicken Sie in der Symbolleiste auf {{ui:Druckstufe}}. Fügen Sie Elemente der {{ui:Bibliothek}} zum Druckbett des Druckers hinzu, ordnen Sie sie an, sehen Sie sich die geschnittenen Schichten an und drücken Sie {{ui:An 3D-Drucker senden}}, ganz ohne STL zu exportieren. Sie gehört zum Add-on 3D-Druck, das standardmäßig eingeschaltet ist und wie jedes Add-on entfernt werden kann. Siehe [Dinge auf das Druckbett legen und an einen Drucker senden](topic:print-stage).
- **Unser eigener Filament-Slicer.** {{ui:CadCraft basic (inklusive, am schnellsten)}} ist der Slicer in der Liste **Slicer** der Karte: Wände, Außenhaut, Füllung, Stützen und ein Skirt, in einem Worker, damit die Seite bedienbar bleibt. {{ui:Schichten anzeigen}} mit dem Regler **Schicht** zeigt die Schichten, bevor Sie senden. Druckerprofile wie die Stile Ender-3 und Prusa MK4 bringen ihren eigenen Start-G-Code mit.
- **Senden.** Über USB (Chrome oder Edge auf einem Computer, mit geöffneter Seite) oder an Klipper (Moonraker), OctoPrint oder PrusaLink in Ihrem Netz. Nichts verbindet sich oder sendet ohne einen Klick, und beim Senden wird zuerst nachgefragt.
- **Weitere Slicer.** Kiri:Moto, PrusaSlicer und OrcaSlicer sind eigene Add-ons, standardmäßig ausgeschaltet; fügen Sie sie über die Karte oder über {{ui:Einstellungen}} › {{ui:Add-ons}} hinzu. PrusaSlicer und OrcaSlicer verwenden Ihre eigene installierte Kopie aus CadCraft Studio. Das Add-on für Bambu-Lab-Drucker schneidet mit Ihrem OrcaSlicer und dessen P2S-Voreinstellungen und braucht Studio auf einem Computer.
- **Harzdruck.** Die Harz-Add-ons (standardmäßig aus) erzeugen Schichtbilder für den Bildschirm Ihres Druckers, mit Aushöhlung und Entlüftungslöchern, einem Floß und Stützen, einer Schichtvorschau sowie Zeit, Harz und Kosten. Dateiformat-Add-ons schreiben Elegoo GOO, SL1, Chitubox (CBDDLP und CTB 2 bis 5) und Anycubic (PWMX und PWS). Ein Belichtungstest für Harz erzeugt eine Leiter aus fünf Belichtungen. Siehe [Für einen Harzdrucker in Schichten aufteilen](topic:resin-printing).
- **Unverändert.** {{ui:Exportieren}} › {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}}, die Drucktools und {{ui:Zum Drucken teilen}} funktionieren wie in 0.8. Siehe [Ein Modell für den 3D-Druck vorbereiten](topic:print-3d).

### Materialfluss, Digitaler Zwilling und Produktionshalle

Diese drei sind Add-ons, die ausgeschaltet bleiben, bis Sie sie in {{ui:Einstellungen}} › {{ui:Add-ons}} einschalten; jedes hat eine eigene Hilfe, sobald es eingeschaltet ist.

- **Materialfluss.** Ein Bereich namens Materialfluss legt Förderbänder, Stationen, Puffer und FTF-Wege in der 3D-Ansicht aus, führt eine Simulation mit festem Startwert (Seed) aus, spielt sie ab und zeigt Durchsatz, Durchlaufzeiten und Warteschlangen; die Ergebnisse werden als CSV gespeichert. Aufträge können aus einer CSV-Datei kommen. Roboterzellen lassen sich prüfen und exportieren. Die SPS-Anbindung hat einen Softmodus und einen echten Modus über Modbus TCP, der nur in CadCraft Studio funktioniert.
- **Digitaler Zwilling.** Liest das Layout des Materialflusses und führt darauf eine Soft-SPS aus, mit Störungen, die Sie erzwingen können, Bestandstests, einem Layoutvergleich und einer Stückliste.
- **Produktionshalle.** Macht aus den Stationen Maschinen und Zellen, liest sie live oder aus einem Simulator und führt eine Auftragswarteschlange sowie eine einfache OEE. Sie liest nur: Dieser Build kann weder auf eine Maschine noch auf eine SPS schreiben.

### Flächen, Modelle und Zeichnung

- **Verrundungen, Verdickungen und boolesche Operationen auf NURBS.** Der Bereich {{ui:Flächen}} hat {{ui:Verrundung zwischen Flächen}}, {{ui:Mehrere Kanten verrunden}}, {{ui:In Volumenkörper verdicken}} sowie Vereinigung, Subtrahieren und Schnittmenge, jeweils mit ihrer gemessenen Abweichung. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).
- **Flächen an einen Scan anpassen.** Wählen Sie ein gescanntes Netz und verwenden Sie in der Gruppe **Scan** {{ui:Flächen an den Scan anpassen}}, dann {{ui:Flächen zu einem Volumenkörper vernähen}}. Es ist eine erste Anpassung, kein vollständiges Paket zur Rückkonstruktion.
- **Eine Live-Verbindung von einem .3dm-Modellierer.** Einseitig, von Rhino 8 oder Grasshopper, und sie braucht CadCraft Studio auf demselben Computer. Siehe [Ein .3dm-Modell live halten](topic:live-3dm-link).
- **Das Modell vor Ort sehen.** {{ui:Ansicht vor Ort (AR, Handy)}} im Menü {{ui:Ansichten}} funktioniert auf einem Android-Handy mit Chrome. Siehe [Das Modell vor Ort mit einem Android-Handy sehen (AR)](topic:ar-on-site).
- **Bogenmethoden.** Die Auswahlliste {{ui:Bogenmethoden}} bietet zehn Arten, einen Bogen zu zeichnen, darunter {{ui:3-Punkt}} und {{ui:Anfang, Mittelpunkt, Ende}}.
- **Weitere Einheiten.** Gewichte (kg, lb, t, ton) und Temperaturen (Grad C, F, K und R) werden dort verstanden, wo Sie Werte mit Einheiten eingeben.

## In jeder App

- **Tooltips.** Der Hinweistext bei Schaltflächen und abgeschnittenen Beschriftungen ist ein Bootstrap-Tooltip.
- **Schließbarer Startmerker.** Die Tippkarte auf einem leeren Zeichenbereich hat ein kleines Schließen-Kreuz. Sie bleibt geschlossen, und die Befehlspalette kann sie wieder anzeigen.
- **Scrollbare Registerkartenleisten.** Eine Registerkartenleiste eines Bereichs, die nicht passt, scrollt, statt abgeschnitten zu werden.
- **Titel der Registerkarten.** Bei geöffnetem Dokument beginnt der Browser-Tab mit dem Namen des Dokuments, dann ModelCraft und CadCraft. Solange es nicht gespeichert ist, steht ein Punkt voran.
- **Layout.** {{ui:Einstellungen}} › {{ui:Allgemein}} › Layout hält die Layouts in einer Auswahlliste, mit einer Option, ein Layout nur für diese App zu verwenden, und einer Schaltfläche, um das Layout zurückzusetzen.
- **Sprachen.** Die Sprachliste in den Einstellungen folgt den Sprachdateien, die der Build enthält. Andere Sprachen als Englisch sind maschinelle Entwürfe.
- **Live und Bibliothek.** Live TeamWork zeigt Live-Cursor und Namen, und Bibliothekssammlungen geben jeder App eine Standardsammlung.

## Behoben

- {{ui:Wiedergabe}} wird während einer Animation zu {{ui:Pause}}, und {{key:Space}} startet und pausiert die Wiedergabe, solange die Zeitleiste geöffnet ist.
- Das Standbild-Rendering fällt auf WebGL zurück, wenn die Grafikkarte den Path Tracer nicht starten kann. Die Live-Render-Ansicht kann den Fehler noch zeigen; das wurde auf einem Windows-Rechner mit diesem Treiber nicht geprüft.
- Der echte Modus des Materialflusses verbindet sich wieder, nachdem eine Verbindung auf SPS-Ausnahmeantworten endete.

## Ehrliche Grenzen

- Noch nichts wurde auf einem echten Drucker gedruckt: weder mit Filament noch mit Harz, auch nicht über Bambu Connect. Harz-Dateien wurden nur von den eigenen Lesern von CadCraft zurückgelesen.
- Der Digitale Zwilling und die Produktionshalle wurden nur gegen Simulatoren und bekannte Ergebnisse getestet, ohne echte SPS, Linie oder echtes Protokoll. Sie sind Prüfhilfen, keine Sicherheitsvalidierung. Die Physik deckt nur Quader ab, bis zu acht Lasten.
- Die Verbindung zu Rhino und Grasshopper ist noch nie in den echten Programmen gelaufen.
- Andere Sprachen als Englisch sind maschinelle Entwürfe.

## Früher: 0.8 und 0.8.1

Das hat sich in ModelCraft 0.8 (2026-11-01) und 0.8.1 (2026-11-02) gegenüber 0.7 geändert. Der Dialog {{ui:Bild rendern…}} kann die Szene jetzt an ein anderes Programm senden, der Bereich {{ui:Flächen}} erstellt glatte Freiformflächen, und ein verbundener Assistent kann eine ganze Szene mit einem Satz einrichten.

### Neu

**Rendern**

- **Eine Engine-Auswahl.** {{ui:Bild rendern…}} hat über dem Modus eine Liste **Engine**. Unsere eigenen beiden Engines, Schnell und der Path Tracer, sind der Standard und funktionieren überall. Andere Einträge speichern die Szene als Paket (das Modell als USD-Datei, dazu eine Einstellungsdatei mit den genauen Materialwerten, den eingeschalteten Lampen, der Sonne, dem Himmel, der Belichtung und der Kamera), um sie in ein anderes Programm zu bringen. Ein Bild, das ein anderes Programm gezeichnet hat, sagt, welches Programm und welche Version es erstellt haben. Siehe [Auswählen, welches Programm das Bild zeichnet](topic:render-engines).
- **In einem anderen Programm öffnen.** Die Engine-Liste kann die Szene als USD-Datei, als glTF-Datei (`.glb`) oder als Unreal-Projektordner (`.zip`) speichern, im Browser und in CadCraft Studio. In Studio kann sie außerdem usdview oder das eigene Programm des Computers für die Datei starten. Siehe [Die Szene in einem anderen Programm öffnen](topic:render-open-in).
- **Aus Studio an eine Spiele-Engine senden.** Studio schreibt die Szene in ein Unreal-Engine-Projekt und hält es bei jedem Senden synchron, nur in eine Richtung. Ihre eigenen Änderungen liegen in einem Layer, den CadCraft nie schreibt. Siehe [Die Szene an eine Spiele-Engine senden](topic:render-unreal).
- **Engines aus Add-ons.** Ein Add-on kann der Liste eine Engine hinzufügen. Eine in JavaScript geschriebene zeichnet im Browser und in Studio; eine, die ein Programm ausführt, braucht Ihr Ja in Studio. Siehe [Das Bild mit einem anderen Programm zeichnen](topic:render-other-program) und [Eine Render-Engine mit einem Add-on hinzufügen](topic:render-engine-addons).
- **Die Szene sagen.** Sagen Sie Ihrem verbundenen Assistenten „Dämmerung, leichter Regen, Herbstbäume, Menschen auf dem Platz“, und ModelCraft richtet es in einem Schritt ein: Die Sonne wandert zu Datum und Uhrzeit, damit die Schatten folgen, der Himmel ändert sich, nasse Flächen erscheinen, und Bäume und Menschen werden als echte Objekte auf Tags platziert, die Sie ausblenden, verschieben oder löschen können. Tageszeit, Datum oder Jahreszeit sowie Wetter (klar, bedeckt, Nebel, leichter Regen, Regen, Sturm) funktionieren auch allein, und eine spätere Anfrage ändert dieselbe Szene. Nebel erscheint im Bild in hoher Qualität auf der Grafikkarte; die anderen Engines zeigen den Himmel, das Licht und die nassen Flächen. Regen wird nicht als fallende Striche gezeichnet.

**Materialien**

- **Ein Material aus einem Foto.** Geben Sie ModelCraft ein Foto einer Fläche (Wand, Boden, Stein), und es erstellt ein kachelbares Material: Die Beleuchtung über das Foto wird geglättet, die Ränder werden zum Anschluss gebracht, und eine Farbkarte, eine Rauheitskarte und eine Normal-Map werden aus dem Bild errechnet. Es ist reine Bildverarbeitung Ihres eigenen Fotos, ohne trainiertes Modell. Die Rauheit ist eine Schätzung. Ein einfaches, quadratisches, geradeaus aufgenommenes Foto ergibt die beste Kachel; ein starkes Muster wie Ziegel kann an der Stelle des Übergangs einen weichen Geist zeigen.

**Flächen**

- **Freiformflächen.** Der Bereich {{ui:Flächen}} erstellt NURBS-Kurven und nicht beschnittene Flächen: Kurven durch Punkte, Loft, Regelfläche, Extrusion, Drehung, Sweeps entlang einer oder zwei Schienen, Flächen aus einem Kurvennetz, Flicken aus vier Kanten, Angleichen und Verschmelzen. Jede gemeinsame Kante wird auf den exakten Flächen als G0, G1 oder G2 gemessen (Lücke, Winkel, Krümmungssprung), und eine Kante, die schlechter ist als verlangt, erscheint im Bereich {{ui:Probleme}} mit einer Korrektur **Angleichen**. Zebrastreifen und Krümmungsfarben werden aus den exakten Flächen gezeichnet. STEP- und IGES-Dateien werden exportiert und importiert. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).

**Gelände und Räume**

- **Ein Skizzenfoto auf den Boden.** {{ui:Datei}} › {{ui:Skizzenfoto importieren…}} macht aus einem Handyfoto einer Handskizze Kanten auf dem Boden im Maßstab, den Sie angeben: eine Gruppe, mit einem Tag für jede Stiftfarbe. Das Papier wird auf Ihrem Computer gefunden und begradigt, und nichts wird irgendwohin gesendet. Siehe [Auf einem Lageplan modellieren](topic:site-plan).
- **Einen Raum möblieren.** Wählen Sie einen Boden und verwenden Sie {{ui:Organisieren}} › {{ui:Einen Raum möblieren…}}. Schlafzimmer-, Wohnzimmer-, Esszimmer-, Küchen-, Badezimmer- oder Büromöbel werden nach Regeln platziert, an die Wände und frei von Türen und Fenstern, in einer Gruppe, die Sie in einem Schritt entfernen können. Es ist ein Standardlayout, das Sie prüfen sollten, kein Entwurf. Siehe [Startbibliothek](topic:starter).

**3D-Druck**

- **Schräge Schnitte.** Zum Drucken teilen kann seine Schnitte um bis zu 60 Grad neigen, was den Teilen mehr Klebefläche gibt. Verbinder stehen rechtwinklig zum Schnitt. Siehe [Ein Modell zum Drucken teilen](topic:print-split).
- **Die Druckprüfung unter Probleme.** Die Befunde der 3D-Druckprüfung erscheinen im Bereich {{ui:Probleme}} mit Markierungen am Modell, und {{ui:Reparieren}} behebt sie von dort aus. Siehe [Stützen, Wandstärke, Aushöhlen und Reparieren](topic:print-tools).

**In jeder App**

- **Sprachen.** Hilfe und Apps gibt es in 54 Sprachen. Zehn sind neu: Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Suaheli und Usbekisch. Andere Sprachen als Englisch sind maschinelle Entwürfe, bis eine Person mit dieser Muttersprache sie geprüft hat, und Hilfethemen können noch auf Englisch sein.
- **Eingabegeräte.** Ein Trackpad, ein Stift, eine 3D-Maus, ein Game-Controller und MIDI-Bedienelemente können die Apps steuern, für alle oder für eine.
- **Zeilen der Symbolleiste.** {{ui:Einstellungen}} › {{ui:Allgemein}} › Zeilen der Symbolleiste legt Umbruch (wie bisher), 2 Zeilen oder 1 Zeile fest. Eine Leiste, die nicht passt, scrollt seitlich, statt der Zeichnung Platz wegzunehmen. Umbruch bleibt die Voreinstellung.
- **Eigenschaftsraster.** Die Lampenfelder von ModelCraft nutzen das gemeinsame Raster: einklappbare Kategorien, Spalten für Beschriftung und Wert sowie die Dichte Kompakt. Eingegebene Rechnungen wie `2*450` funktionieren weiterhin.
- **Probleme.** Der Bereich {{ui:Probleme}} (die Warnschaltfläche in der App-Leiste) wird von allen Apps genutzt. In ModelCraft enthält er die Druckprüfung und die Warnungen zur Flächenstetigkeit.
- **Live.** Eine Live-TeamWork-Sitzung zeigt, wer wo ist. Siehe [Gemeinsam mit Live TeamWork modellieren](topic:work-live).
- **Add-ons.** Add-ons können Render-Engines hinzufügen, wie oben beschrieben.
- **KI verbinden.** Der Werkzeugvertrag und die Prüfungen der acht Apps bestehen, mit insgesamt 454 Werkzeugen. Eine Verbindung per Klick in Studio, ein gehosteter Connector für Browser-Assistenten, ein eigener Schlüssel in Studio und ein veröffentlichtes Paket sind noch nicht zugesagt. Die Apps enthalten keine eigene KI. Siehe [ModelCraft mit KI-Assistenten verwenden](topic:use-with-ai-assistants).

### Behoben in 0.8.1

- **Abschnitt der DWG-Klassen.** Der Klassenabschnitt einer DWG-Datei wurde als falscher Typ gelesen, was die Datei beim Importieren beschädigen konnte. Er wird jetzt richtig gelesen, in ModelCraft und in den anderen Apps, die DWG lesen.
- **Tablets im Hochformat.** Freie Rasterhöhe geht an die Zeichenfläche, und das Blattlayout beginnt bei 760 Pixel Breite oder weniger. Auch das Stylesheet von ModelCraft hat die Änderung.
- **Sprache in Studio.** CadCraft Studio und die gepackten Ausgaben können während des Betriebs die Sprache wechseln; vorher gab es sie nur auf Englisch. Das wurde noch nicht auf jeder Plattform getestet: Sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.

### In dieser Version noch nicht enthalten

- **Nicht code-signiert.** Windows zeigt möglicherweise SmartScreen: Wählen Sie {{ui:Weitere Informationen}} und dann {{ui:Trotzdem ausführen}}. Auf einem Mac klicken Sie mit der rechten Maustaste und wählen {{ui:Öffnen}}. Store-Builds sind angehalten, und der iPad- und iPhone-Build wurde für 0.8.1 nicht neu erstellt.
- Ein anderes Programm, das das Bild ohne Render-Engine-Add-on zeichnet, Panorama- oder Stereokameras und ein Himmelsbild durch ein anderes Programm sowie das Plug-in, das die Unreal-Bühne öffnet, sind noch nicht vorhanden. Die Dateien werden geschrieben; das Plug-in ist nicht veröffentlicht und wurde in Unreal nicht ausgeführt.
- Freiformflächen: G3 und Klasse A werden nicht gemessen oder beansprucht, und Beschneiden und Volumenkörper kommen später.
- Bilder aus anderen Programmen sind nicht pixelgenau wie unsere: Nur Kamera, Sonne, Lampen und Belichtung stimmen überein.
- Die Korrektur des Sprachwechsels in Studio aus 0.8.1 ist nicht auf jeder Plattform getestet.

Alles Weitere steht unter [Noch nicht umgesetzt](topic:not-built-yet). Zur vorherigen Version siehe [Neuheiten in 0.7](topic:whats-new-0-7).
