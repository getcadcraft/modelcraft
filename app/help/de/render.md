---
title: Ein Bild des Modells rendern
summary: Ein Bild erstellen, das wie Tageslicht aussieht: Himmel, Sonne am Ort und Datum Ihres Modells, weiche Schatten, Glas- und Metalloptik, dann als PNG speichern.
keywords: rendern, Vorgabe, Vorgaben, Szenenvorgabe, Innen, Außen, Schnittansicht, Nacht, ein Klick, Rendering, Path Tracing, path traced, Ray Tracing, globale Beleuchtung, Spiegelungen, Brechung, hohe Qualität, Foto, fotorealistisch, realistisch, Bild, Abbildung, png, Standbild, Himmel, Sonne, Tageslicht, Schatten, weiche Schatten, Umgebungsverdeckung, Glas, Metall, glänzend, Materialien, Belichtung, Helligkeit, bedeckt, Dämmerung, Studio, Präsentation, Nebel, Dunst, Rauch, Wolke, Volumen, Lichtstrahlen, Gottesstrahlen, Kaustiken, adaptives Sampling, Rauschen
from: 517ba4d3
---

{{ui:Bild rendern…}} erstellt ein Bild der Ansicht, das wie Tageslicht statt wie eine Zeichnung aussieht: ein Himmel, die Sonne an der Stelle, die Ort und Datum Ihres Modells ergeben, weiche Schatten, Licht vom ganzen Himmel, das Ecken und Spalten abdunkelt, und Farben, die wie Glas, Metall oder glänzende Farbe wirken können. Das Modell wird nicht verändert.

## Die Ansicht rendern

1. Stellen Sie die Ansicht so ein, wie Sie das Bild wollen: drehen, zoomen, eine [Szene](topic:scenes) wählen, ausblenden, was nicht erscheinen soll. Das Bild verwendet die eigene Kamera der Ansicht.
2. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Exportieren}}, dann auf {{ui:Bild rendern…}}.
3. Wählen Sie eine {{ui:Szene}}, falls die gedrückte nicht die richtige ist (siehe [Szenenvorgaben](topic:render#scene-presets-a-good-picture-in-one-click)), wählen Sie die {{ui:Größe}} und klicken Sie dann auf {{ui:Rendern}}.

   Das Bild füllt sich während des Renderns und wird mit jedem Durchgang glatter. {{ui:Stopp}} (oder {{key:Esc}}) beendet es vorzeitig und behält das bisherige Bild.

4. Klicken Sie auf {{ui:Speichern}}, um es herunterzuladen (eine PNG-Datei, sofern {{ui:Speichern als}} nichts anderes angibt).

:::tip
Beginnen Sie mit {{ui:Entwurf}} in {{ui:Größe der Ansicht}}, um Kamera und Look zu prüfen, und rendern Sie dann {{ui:Gut}} oder {{ui:Beste}} in größerer Größe für das endgültige Bild.
:::

## Szenenvorgaben: ein gutes Bild mit einem Klick

Oben im Dialog stehen vier {{ui:Szenen}}-Schaltflächen. Jede stellt Himmel, Helligkeit, Boden, Kantenlinien, Qualität und Sonne mit einem Klick ein, sodass vor dem ersten Bild nichts zu lernen ist. Klicken Sie auf eine und dann auf {{ui:Rendern}}.

| Szene | Was sie einstellt | Wofür sie gedacht ist |
|---|---|---|
| {{ui:Außen}} | Klarer Himmel, die eigene Sonne des Modells, Boden an | Das Gebäude von außen |
| {{ui:Innen}} | Bedeckter Himmel (gleichmäßiges Licht, keine harten Sonnenflecken), eine halbe Blendenstufe heller | Eine Ansicht aus einem Raum |
| {{ui:Schnittansicht}} | Weißes Studio, kein Boden, Kantenlinien im schnellen Rendering | Ein Modell, das von einem Schnitt geschnitten wird |
| {{ui:Nacht}} | Die Sonne untergegangen (Mitternacht im Winter der Halbkugel des Standorts), eine Blendenstufe heller | Lampen, die das Modell beleuchten. Ohne Lampen ist das Bild dunkel |

- {{ui:Für diese Ansicht wählen}} wählt für Sie: {{ui:Schnittansicht}}, wenn ein Schnitt aktiv ist, {{ui:Innen}}, wenn die Kamera im Modell ist, sonst {{ui:Außen}}. Beim ersten Öffnen des Dialogs beginnt er von selbst so.
- Alle Einstellungen darunter bleiben und können geändert werden. Sobald Sie eine ändern, ist keine Szene mehr gedrückt, und die Zeile unter den Schaltflächen sagt, dass die Einstellungen Ihre eigenen sind. Klicken Sie die Szene erneut, um ihre Werte wiederherzustellen.
- Eine Szene ändert nicht die Engine, den Modus, die Größe, die Materialien, die Kamera oder die Lampen.

:::note
Die Szenen geben in ModelCraft und BimCraft dieselben Werte. Wie das fertige Bild aussieht, hängt von Ihrem Modell und Ihrer Grafikkarte ab.
:::

## Einstellungen

| Einstellung | Was sie bewirkt |
|---|---|
| {{ui:Größe}} | Die Größe der Ansicht, die doppelte Größe der Ansicht, Full HD, 4K oder ein Quadrat. Feste Größen behalten die Kamera der Ansicht und zeigen an den Seiten mehr oder weniger |
| {{ui:Modus}} | {{ui:Schnell}} oder {{ui:Hohe Qualität (Path Tracing)}} (unten) mit seinem {{ui:Zeitlimit}} |
| {{ui:Qualität}} | Wie viele Durchgänge (im Modus hohe Qualität: Samples) gemittelt werden: {{ui:Entwurf}} 16, {{ui:Gut}} 64, {{ui:Beste}} 256. Mehr Durchgänge ergeben glattere Schatten und Kanten und dauern länger |
| {{ui:Himmel}} | {{ui:Klarer Himmel}}, {{ui:Bedeckt}} (weiches Licht, schwache Schatten), {{ui:Dämmerung}} (tiefes, warmes Licht) oder {{ui:Weißes Studio}} (ein schlichter weißer Hintergrund) |
| {{ui:Sonne}} | Die Sonne kommt aus Datum, Uhrzeit und Ort in {{ui:Stil}} › Sonne. Setzen Sie den Haken bei {{ui:Anderes Datum und andere Uhrzeit für dieses Bild verwenden}}, um eine andere Zeit zu testen, ohne den Stil des Modells zu ändern |
| {{ui:Helligkeit}} | Heller oder dunkler, in Stufen (Blendenstufen) |
| {{ui:Boden unter dem Modell}} | Ein Boden, der die Schatten aufnimmt und zum Horizont ausblendet. Ausschalten für ein schwebendes Modell |
| {{ui:Kanten zeichnen}} | Zeichnet die Kanten des Modells dünn über das Bild, für einen gezeichneten Look |

Ist die Sonne zur gewählten Zeit unter dem Horizont, ist es Nacht: Der Himmel wird dunkel, und die [Lampen](topic:lights) des Modells beleuchten es. Der Dialog zeigt das an.

Die Einstellungen werden in der Datei `.modelcraft` gespeichert, sodass das nächste Bild desselben Modells dort weitermacht, wo Sie aufgehört haben.

## Farben wie Glas oder Metall aussehen lassen

Unter {{ui:Materialien}} hat jede Farbe auf dem Bildschirm eine Optik: {{ui:Matt}}, {{ui:Seidenmatt}}, {{ui:Glänzend}}, {{ui:Metall}}, {{ui:Poliertes Metall}}, {{ui:Glas}} oder {{ui:Milchglas}}. {{ui:Ungefüllte Flächen}} sind die Flächen ohne eigene Farbe.

Um Fenster zu Glas zu machen, malen Sie die Fensterscheiben mit dem [Farbeimer](topic:paint) in einer Farbe an und stellen diese Farbe dann auf {{ui:Glas}}. Glas lässt den Himmel und was dahinter ist durchscheinen, gefärbt von seiner Farbe, und spiegelt den Himmel.

:::note
Im Modus {{ui:Schnell}} spiegeln Glas und Metall den Himmel, nicht den Rest des Modells, und Licht bricht sich nicht im Glas. Der unten stehende Modus {{ui:Hohe Qualität (Path Tracing)}} tut beides.
:::

## Hohe Qualität

Wählen Sie {{ui:Modus}} › {{ui:Hohe Qualität (Path Tracing)}} für ein Bild, das dem Licht folgt, wie es eine Kamera sieht:

- Licht prallt zwischen Flächen ab, sodass ein Raum, der durch ein Fenster oder eine Lampe beleuchtet wird, ringsum beleuchtet ist und Farben auf ihre Nachbarn abfärben;
- Glas ist echtes Glas: Licht bricht sich darin, und es spiegelt das Modell;
- Metall und polierte Flächen spiegeln den Rest des Modells;
- Flächenlichter leuchten als Flächen, mit weichen Schatten.

Das ist viel langsamer als {{ui:Schnell}}: Jeder Durchgang verfolgt das Licht jedes Pixels erneut. Das Bild beginnt körnig und klärt sich, während sich die Samples summieren. Beginnen Sie daher klein ({{ui:Größe der Ansicht}}, {{ui:Entwurf}}) und wählen Sie ein {{ui:Zeitlimit}}: Wenn es abläuft, bleibt das bisherige Bild erhalten. {{ui:Stopp}} behält es ebenfalls. Der erste Durchgang wartet, während der Browser den Path Tracer vorbereitet.

Wo der Browser WebGPU hat, ist der Path Tracer der eigene von CadCraft und läuft auf der Grafikkarte; die Zeile unter dem Bild sagt {{ui:Path Tracing auf der Grafikkarte (WebGPU)}}. Nach {{ui:Stopp}} oder dem Zeitlimit setzt {{ui:Fortsetzen}} dasselbe Bild fort, bis alle Samples da sind; eine Änderung einer Einstellung oder erneutes Drücken von {{ui:Rendern}} beginnt von vorn. Ohne WebGPU wird das Bild stattdessen mit WebGL per Path Tracing berechnet (die Zeile sagt es), und {{ui:Fortsetzen}} wird nicht angeboten.

:::linux
Firefox und die meisten Chrome-Installationen unter Linux haben noch kein WebGPU, daher nutzt die hohe Qualität dort WebGL.
:::

In diesem Modus werden keine Kanten gezeichnet, Texturen aus der Bibliothek zeigen ihre Farbe und Rauheit, aber nicht ihre Unebenheiten (ein [Material aus Knoten](topic:shading#in-high-quality-pictures) zeigt seine Normalen und Unebenheiten), und ein Schnitt wird am Modell ausgeführt, bevor das Bild beginnt.

{{ui:Entrauschen (entfernt das Korn, das nach den Samples bleibt)}} ist standardmäßig aktiv: Wenn das Bild fertig oder angehalten ist, wird das verbleibende Korn von einem neuronalen Netz entfernt, das dafür gemacht ist (das veröffentlichte Netz von Intel Open Image Denoise, auf Ihrem eigenen Computer ausgeführt: auf der Grafikkarte, sonst auf dem Prozessor). Ein Bild mit wenigen Samples wird sauber; {{ui:Anzeigen}} › {{ui:Das Bild vor dem Entrauschen}} zeigt es so, wie es gerendert wurde.

## In der Ansicht rendern

Der Arbeitsbereich {{ui:Rendern}} lässt den Path Tracer in der Ansicht selbst laufen: drehen, das Modell bearbeiten oder ein Licht ändern, und er beginnt sofort neu. {{ui:Bereich}}: Ziehen Sie ein Rechteck, und nur dieses wird gerendert; {{ui:Ganze Ansicht}} stellt wieder alles her. {{ui:Fokus}}: Klicken Sie auf das, was scharf sein soll, und die Schärfentiefe wird dort fokussiert. {{ui:Detail}} legt fest, wie viele Pixel der Ansicht gerendert werden (weniger ist schneller). {{ui:Pause}} hält an und macht weiter. Es braucht WebGPU: Ohne WebGPU sagt der Arbeitsbereich das, und {{ui:Exportieren}} › {{ui:Bild rendern…}} funktioniert weiterhin.

## Himmel und Lichtprofile auf der Grafikkarte

Mit WebGPU hat die hohe Qualität zwei weitere Himmel:

- {{ui:Physikalischer Himmel}} berechnet das Tageslicht aus der Höhe der Sonne: ein tiefes Blau oben, ein blasses Band am Horizont und eine Sonne, die wärmer und schwächer wird, je tiefer sie steht. {{ui:Dunst}} reicht von einem sehr klaren Tag (2) bis zu einem dunstigen (10).
- {{ui:Himmelsbild (HDRI)}} beleuchtet das Modell mit einem Panoramabild eines realen Ortes. {{ui:Bild wählen…}} nimmt eine equirektangulare Datei `.hdr` oder `.exr`; {{ui:Drehen}} dreht sie um das Modell, und {{ui:Helligkeit des Bildes}} macht sie heller oder dunkler. Das Bild hat seine eigene Sonne, daher wird die Sonne des Modells nicht hinzugefügt. Es wird nur gespeichert, solange die Seite offen ist: Nach dem erneuten Öffnen wählen Sie es neu aus.

Jede Lampe in der Liste {{ui:Lampen}} kann ein Lichtprofil des Herstellers übernehmen: {{ui:IES-Profil…}} liest eine IES-Datei (LM-63), und die Lampe strahlt ihr Licht dann so ab, wie diese Leuchte es tut (ein schmaler Downlight, ein Wandfluter). Jede Lampe mit diesem Namen verwendet es, und die Lampe behält ihre eigene Helligkeit. Klicken Sie auf den Namen des Profils, um es nicht mehr zu verwenden.

Fenster aus klarem Glas helfen dem Himmelslicht, den Weg in einen Raum zu finden, daher werden Innenbilder unter einem Himmel schneller klar.

Der Modus {{ui:Schnell}} und der WebGL-Path-Tracer zeigen {{ui:Physikalischer Himmel}} und {{ui:Himmelsbild (HDRI)}} als klaren Himmel und ignorieren Lichtprofile.

## Die Kamera

{{ui:Kamera}} richtet das Bild wie eine Fotografie ein:

- {{ui:Belichtung}}: Behalten Sie den {{ui:Helligkeitsregler}}, oder wählen Sie {{ui:Kameraeinstellungen}} und stellen die {{ui:Blende (f-Zahl)}}, {{ui:Verschlusszeit}} und {{ui:ISO}} wie an einer Kamera ein; der EV daneben ist der übliche Belichtungswert. f/16 bei 1/100 s und ISO 100 entspricht einem sonnigen Tag; eine dunklere Szene braucht eine weitere Blendenöffnung (kleinere f-Zahl), eine längere Verschlusszeit oder einen höheren ISO-Wert. Das funktioniert in jedem Modus.
- {{ui:Schärfentiefe}} macht unscharf, was näher oder weiter als die {{ui:Fokusentfernung (m)}} liegt, so wie es ein Objektiv mit dieser Blende täte (lassen Sie es leer, um auf das zu fokussieren, was in der Mitte der Ansicht ist); {{ui:Blendenform}} gibt unscharfen Glanzlichtern eine runde oder lamellenförmige Form.
- {{ui:Zweipunktperspektive (senkrechte Linien bleiben senkrecht)}} richtet die Kamera aus und verschiebt das Bild, wie es ein architektonisches Shift-Objektiv tut, sodass Wände nicht schief wirken, wenn Sie beim Gebäude nach oben oder unten schauen.
- {{ui:Weißabgleich}} legt fest, welche Lichtfarbe als Weiß erscheint: niedriger (zum Beispiel 3000 K) für warmes Lampenlicht, höher für Schatten und bedeckte Tage.
- {{ui:Projektion}}: {{ui:360°-Panorama}} erzeugt ein Bild 2:1 von allem rund um die Kamera für Panorama-Betrachter; {{ui:360°-Stereopanorama}} stapelt ein Panorama für das linke und eines für das rechte Auge, für Headsets; {{ui:Würfelkarte (6 Flächen)}} erzeugt sechs quadratische Ansichten in einem Raster von 3 × 2. Die Breite kommt von {{ui:Größe}}.

Projektion, Schärfentiefe, Zweipunktperspektive und Weißabgleich benötigen den Path Tracer auf der Grafikkarte (WebGPU), daher werden sie nur in {{ui:Hohe Qualität}} angezeigt.

## Das Bild fertigstellen

{{ui:Bild}} gradiert das Bild in hoher Qualität wie eine Fotografie, und jede Steuerung ändert das fertige Bild sofort, ohne erneut zu rendern:

- {{ui:Look (Ansichtstransformation)}}: {{ui:ACES-Filmlook}} (das Bild wie zuvor), {{ui:AgX}} (weicher, behält Farbe bei sehr hellem Licht), {{ui:Filmisch}} (eine sanfte Filmkurve) oder {{ui:Standard}} (schlicht, helles Licht wird auf Weiß begrenzt).
- {{ui:Kontrast}} und {{ui:Lichterkompression}} (holt Details in sehr hellen Stellen zurück).
- {{ui:Glühen}} (ein weiches Leuchten um helles Licht), {{ui:Blendung}} mit seinen {{ui:Blendungsstreifen}} (Sternstrahlen von den hellsten Punkten) und {{ui:Vignettierung}} (dunklere Ecken).
- {{ui:Farbtabelle (.cube)…}} wendet eine Farbgradierung aus einer `.cube`-Datei an, mit ihrer {{ui:Stärke der Farbtabelle}}; wie ein Himmelsbild wird sie nur gespeichert, solange die Seite offen ist.

## Das Bild speichern

{{ui:Speichern als}} neben {{ui:Speichern}} wählt die Datei: {{ui:PNG}}, {{ui:JPEG}} oder {{ui:WebP}} zum Teilen (JPEG und WebP nur, wo der Browser sie schreiben kann), und nach einem Rendering in hoher Qualität auf der Grafikkarte außerdem:

- {{ui:PNG, 16 Bit}}: das gradierte Bild mit feineren Abstufungen zwischen den Tönen, für den Druck oder weitere Bearbeitung.
- {{ui:EXR, jede Ebene (32-Bit-Gleitkomma)}}: das Bild wie gerendert (lineares Licht, keine Gradierung), mit jedem Renderelement und jeder Lichtgruppe als eigenem Layer, für Compositing-Programme.
- {{ui:Renderdatei (.ccrender, um später erneut zu bearbeiten)}}: alles, was der Dialog braucht, um das Bild erneut zu mischen und zu gradieren. {{ui:Eine Renderdatei öffnen…}} holt sie zurück, mit Mischung und Gradierung, ohne zu rendern.

## Die Lichter nach dem Rendern mischen

Aktivieren Sie {{ui:Lichtmischung (Farbe und Helligkeit jeder Lampe nach dem Rendern ändern)}}, bevor Sie {{ui:Rendern}} drücken. Wenn das Bild fertig (oder angehalten) ist, listet {{ui:Das Bild mischen}} seine Lichter in Gruppen: den Himmel, die Sonne und die Lampen nach Namen (jede Lampe mit gleichem Namen ist eine Gruppe). Schalten Sie eine Gruppe aus, geben Sie ihr eine Farbe oder machen Sie sie heller oder dunkler, und das Bild ändert sich sofort, ohne erneut zu rendern. {{ui:Mischung speichern}} behält die Mischung unter einem Namen, den Sie später wieder wählen können; {{ui:Wie gerendert}} stellt das Bild wieder so her, wie es erstellt wurde. {{ui:Speichern}} speichert das gemischte Bild.

{{ui:Renderelemente (Albedo, Normalen, Tiefe, diffus, spiegelnd, Transmission, Emission, IDs)}} behält außerdem die Teile des Bildes. {{ui:Anzeigen}} schaltet die Ansicht auf eines davon um: die Oberflächenfarben (Albedo), die Normalen, die Tiefe, das diffuse, spiegelnde und durchgelassene Licht (jeweils direkt und indirekt), was leuchtet und den Himmel, und eine Farbe pro Objekt oder pro Material für das Erstellen von Masken.

Beide halten zusätzliche Layer auf der Grafikkarte. Bei großen Größen hat eine Grafikkarte möglicherweise nicht genug Platz; der Dialog sagt das, und eine kleinere Größe funktioniert.

## Die Renderwarteschlange

Nach einer Einrichtung in hoher Qualität behält {{ui:Dieses Bild zur Warteschlange hinzufügen}} unter {{ui:Renderwarteschlange}} das Bild so, wie es jetzt eingestellt ist; das Gleiche tut {{ui:Diese Animation zur Warteschlange hinzufügen}} im Videodialog für eine ganze Animation, Bild für Bild mit Path Tracing. {{ui:Warteschlange starten}} rendert sie nacheinander auf diesem Computer, und {{ui:Speichern}} neben jedem fertigen Bild lädt es herunter. Das Schließen der Seite behält die Warteschlange: Öffnen Sie dasselbe Modell, und sie geht dort weiter, wo sie angehalten hat. Die Warteschlange braucht WebGPU.

## Nebel, Rauch, Rauschen und Kaustiken

Diese liegen unter {{ui:Nebel, Rauch und Rauschen}} und funktionieren in {{ui:Hohe Qualität}} auf der Grafikkarte; die anderen Engines lassen sie weg.

- {{ui:Nebel und Dunst}} füllt die Luft bis zu einer Höhe mit einem Dunst, den Sonne, Himmel und Lampen beleuchten. {{ui:Sichtweite in Metern}} legt fest, wie dick er ist (etwa 100 m ist ein leichter Dunst, 20 m ein dichter Nebel), {{ui:Höhe des Nebels über dem Boden in Metern}} gibt an, wo er endet, und {{ui:Lichtstrahlen}} bestimmt, wie stark der Dunst zum Licht hin leuchtet. Sonnenlicht verlässt den Nebel an seiner Oberseite, daher sieht man dort, wo Sonne durch ein Fenster oder zwischen Gebäuden kommt, Lichtstrahlen.
- {{ui:Rauch oder Wolke}} fügt ein Volumen aus Rauch oder Wolke hinzu, beleuchtet wie der Nebel. {{ui:Art}} ist eine {{ui:Wolke}}, eine {{ui:Rauchsäule}} oder {{ui:Aus einer Volumendatei (.ccvol)}}, das eigene Rasterformat von CadCraft. {{ui:Detail}} und {{ui:Variation}} ändern eine erstellte Wolke oder Säule, {{ui:Größe ihrer längsten Seite in Metern (0 = die Größe des Modells)}}, {{ui:X verschieben (m)}}, {{ui:Y verschieben (m)}}, {{ui:Z verschieben (m)}} und {{ui:Drehen}} platzieren sie (sie beginnt in der Mitte des Modells), {{ui:Dicke}} macht sie dichter, {{ui:Vorwärtsglühen}} lässt sie zum Licht hin heller leuchten, und {{ui:Farbe}} färbt sie. Eine Volumendatei wird nur gespeichert, solange die Seite offen ist, wie ein Himmelsbild.
- {{ui:Dort früh aufhören, wo das Bild sauber ist (adaptives Sampling)}} gibt Pixeln, die sich beruhigt haben, keine weiteren Samples, sodass der Rest des Bildes schneller fertig wird. {{ui:Akzeptiertes Rauschen}} ist, wie viel Korn bleibt, wenn ein Pixel aufhört. Die Zeile unter dem Bild sagt, wie viele Samples ein Pixel im Durchschnitt bekam.
- {{ui:Kaustiken (Licht, das durch Glas gebrochen oder von Spiegeln reflektiert wird)}} verfolgt Licht von den Lampen und der Sonne, sodass der helle Fleck unter einer Glaskugel oder das Licht eines Spiegels an einer Wand sauber statt körnig entsteht. Er ist aus, solange Nebel, Rauch, {{ui:Lichter nach dem Rendern mischen}} oder Renderelemente aktiv sind, und er ist für Bilder gemacht, nicht für 360°-Bilder, Animationen oder den Arbeitsbereich Rendern.

## Wie lange es dauert

Das Bild wird auf Ihrem eigenen Computer von seiner Grafikkarte erstellt; nichts wird hochgeladen. Wie lange es dauert, hängt von dieser Karte ab. Die Zeit wächst mit den Durchgängen und den Pixeln: {{ui:Beste}} hat das 16-Fache der Durchgänge von {{ui:Entwurf}}, und ein 4K-Bild hat etwa das Vierfache der Pixel von Full HD. Ein Computer ohne Grafikkarte rendert trotzdem, nur langsamer.

:::note
Wenn der Dialog sagt, dass der Browser keine Bilder rendern kann, hat der Browser kein WebGL 2. Aktualisieren Sie ihn oder schalten Sie die Hardwarebeschleunigung in seinen Einstellungen ein.
:::
