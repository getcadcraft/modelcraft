---
title: Noch nicht umgesetzt
summary: Was diese Version von ModelCraft noch nicht kann und was Sie heute stattdessen tun können.
keywords: fehlend, noch nicht, Einschränkungen, Fahrplan, Materialien, Texturen, Text, Layer, Stutzen, Teilen, Wolke, Desktop
from: 179fa5e4
---

ModelCraft ist eine frühe Version. Diese Seite listet auf, was sie noch nicht kann, damit Sie nicht danach suchen, und den nächstliegenden Weg, die Aufgabe heute zu erledigen.

## Zeichenwerkzeuge

| Noch nicht | Heute stattdessen |
|---|---|
| Freihandzeichnen | Klicken Sie die Punkte mit {{ui:Kurve}} an |
| Die Anzahl der Segmente eines Bogens oder Kreises nach dem Zeichnen ändern | Löschen Sie ihn und zeichnen Sie ihn nach Eingabe von `24s` erneut |
| Eine Schriftart für [3D-Text](topic:text3d) wählen oder seine Worte nach dem Platzieren bearbeiten | Löschen Sie ihn und fügen Sie den Text erneut hinzu |
| Einen Winkel durch Eingabe in eine Winkelbemaßung ändern oder die Größe eines Zylinders über die Bemaßung seines Kreises | Drehen Sie die Kanten mit {{ui:Drehen}}; skalieren Sie den Zylinder mit {{ui:Skalieren}} |
| Bemaßungen in exportierten Modelldateien | Bemaßungen erscheinen in Bildern, Ausdrucken und PDFs der Ansicht; Modelldateien enthalten nur Geometrie |
| Stutzen, Teilen und Außenhülle | [Vereinigung, Subtrahieren und Schnittmenge](topic:solids) für geschlossene Gruppen, oder [Flächen schneiden](topic:intersect) und löschen, was Sie nicht brauchen |
| Die Drehachse mit den Pfeiltasten wählen | Klicken Sie mit {{ui:Drehen}} auf das Zentrum einer Fläche, die in die Richtung zeigt, in die die Achse zeigen soll |
| Sperren für mehr als einen Hinweis gleichzeitig | Sperren Sie eine Richtung mit einer Pfeiltaste und rasten Sie dann an einem Punkt ein |
| Größenänderung entlang einer Schräge oder von einem Bemaßungsende aus, das nicht an einer Ecke liegt | Platzieren Sie die Bemaßung auf zwei Ecken, entlang einer Kante oder entlang Rot, Grün oder Blau |

## Animation

| Noch nicht | Heute stattdessen |
|---|---|
| Animieren von Flächen, Kanten, der Tageszeit der Sonne, des Stils oder dessen, was verborgen ist | Machen Sie den beweglichen Teil zu einer Gruppe oder Komponente; rendern Sie für eine andere Tageszeit ein separates Video |
| Eine Kamera, die einem gezeichneten Pfad folgt oder ein bewegtes Objekt anschaut | Setzen Sie unterwegs weitere Kamera-Schlüsselbilder ([Animieren](topic:animation)) |
| Ton in Videos und hochwertige (pfadverfolgte) Videos ohne WebGPU | Fügen Sie Ton in einem Videoeditor hinzu; ohne WebGPU rendern Sie das Video mit dem schnellen Renderer ([Video rendern](topic:animation#render-the-video)) |
| Animierte Lampen (Helligkeit, Streuung, Farbe) in einem gerenderten Video, ein animierter Objektivwinkel ohne Kamera-Schlüsselbilder in einem Video, Animieren von Materialien oder Rendereinstellungen | Lampen werden in der Ansicht animiert; für ein Video setzen Sie auch Kamera-Schlüsselbilder für einen Zoom; rendern Sie separate Videos für verschiedene Lampeneinstellungen ([Jede Eigenschaft animieren](topic:animate)) |
| Spiegeln von Gewichten oder Knochen von einer Seite zur anderen, sichtbare Knochenhüllen, Anzeigen der Gewichte schattiert Punkt für Punkt (sie werden je Fläche angezeigt), Sehen des Netzes in Pose beim Malen von Gewichten | Malen Sie beide Seiten, oder erstellen Sie eine Hälfte und verwenden Sie einen Spiegel-Modifikator, bevor das Skelett hinzugefügt wird; wechseln Sie zum Prüfen zwischen „Gewichte malen“ und „Pose“ |
| Knochen aus glTF-, FBX- oder USD-Dateien als Skelett gelesen und Skelette in diese Dateien geschrieben | Modelle mit Skelettgewichtung kommen in Ruhelage mit den Gewichten der Datei; fügen Sie die Knochen in der Gelenkreihenfolge der Datei hinzu und wählen Sie dann {{ui:Gewichte der Datei verwenden}} ([Animieren](topic:animate)) |
| Verschieben eines IK-Ziels oder Pols durch Ziehen in der Ansicht, Wahl des Raums einer Bedingung (lokal oder Welt), Dehnen von IK-Ketten, IK entlang einer Kurve | Geben Sie den Punkt des Ziels ein oder zielen Sie auf ein Objekt und verschieben Sie dieses; halten Sie Ketten auf ihren Längen |
| Stoff, Flüssigkeiten, weiche Körper, Gelenke und Scharniere zwischen starren Körpern, Kollision mit der exakten Form eines Objekts (nur Quader und Kugeln umgeben es), eine laufende Simulation während der Wiedergabe, eine Anfangsgeschwindigkeit oder Drehung (Körper starten in Ruhe) | Starre Körper einbacken und die Schlüsselbilder abspielen; ein Scharnier aus Schlüsselbildern bauen; eine unregelmäßige Form in Quader (Gruppen) aufteilen |
| Exportieren der Animation in glTF- oder andere Modelldateien | Rendern Sie ein Video; die Datei `.modelcraft` und eine [USD-Datei](topic:usd), die ModelCraft gespeichert hat, bleiben für ModelCraft |
| Einen Kommentar oder Titel zu einem Problem in VR eingeben, Sprachnotizen, Verschieben einer Schnittebene von Hand in VR | Platzieren Sie das Problem in VR und fügen Sie den Text dann in einem BCF-Programm hinzu; setzen Sie eine Schnittebene in der Ansicht, bevor Sie hineingehen: siehe [Modell in einem VR-Headset prüfen](topic:vr-review) |
| Personen am Schreibtisch in VR sehen (nur Personen in VR werden angezeigt), einen VR-Rundgang aufzeichnen | Bitten Sie sie, in VR beizutreten, oder erstellen Sie eine [Animation](topic:animation) des Rundgangs |

## Netze

| Noch nicht | Heute stattdessen |
|---|---|
| Bildhauern nach Stufen (Multiresolution) und Detail, das winzig gewordene Dreiecke entfernt | [Bildhauern](topic:sculpt) an einem unterteilten Netz; {{ui:Neu vernetzen}}, um es wieder gleichmäßig zu machen |
| Ein Neuvernetzen in viereckige Flächen, die der Form folgen | {{ui:Neu vernetzen}} (gleichmäßige Dreiecke), dann neu aufbauen mit [Retopologie](topic:mesh-edit#retopology) |
| Gewichte an Punkten für Modifikatoren gemalt (Verdrängen, Glätten und Schrumpfen wirken auf das ganze Netz) | Modifikator anwenden, dann die Teile bildhauern oder bearbeiten, die es brauchen |
| Kopieren und Einfügen von Punkten, Kanten oder Flächen, ein Messerschnitt, der innerhalb einer Fläche endet, Drahtkanten ohne Fläche | Netz in Modell duplizieren; Messer von Kante zu Kante; offene Kanten zu Flächen [extrudieren](topic:mesh-edit#change-the-shape) |

## Ordnen und Betrachten

| Noch nicht | Heute stattdessen |
|---|---|
| Layer von DWG- und DXF-Lageplänen als Tags | Der Lageplan kommt als eine Gruppe: Zerlegen Sie ihn und gruppieren Sie die Teile, die Sie taggen möchten |
| Mehrere Schnitte gleichzeitig, ein Schnittkasten oder der Umriss eines Schnitts als Zeichnung exportiert | Immer eine [Schnittebene](topic:sections) schneidet; exportieren Sie die Ansicht als Bild |
| Weiche Kanten gestrichelt anzeigen, oder beim Ziehen eines Schiebereglers weich machen | [Nach Winkel glätten](topic:soften) in Objektinfo, und rückgängig machen, um einen anderen Winkel zu versuchen |
| Eine Online-Bibliothek von Modellen zur Suche, oder Komponenten mit wählbaren Optionen (Farbe, Stil) | Die [Startbibliothek](topic:starter); Modelle in Collada, OBJ oder glTF importieren; eine Kopie auf Größe [strecken](topic:stretch) |
| Pflanzen aus der Pflanzenbibliothek platzieren | [Pflanzen streuen](topic:live-view#scatter-plants-rocks-and-people) in der Live-Ansicht oder einen Baum aus der Startbibliothek platzieren |
| Unabhängige Kopien einer Gruppe | Machen Sie sie zu einer Komponente, dann {{ui:Eindeutig machen}} (siehe [Fehlerbehebung](topic:troubleshooting#editing-one-group-changed-another)) |

## Rendern

| Noch nicht | Heute stattdessen |
|---|---|
| Rendern in der Ansicht (der Arbeitsbereich {{ui:Render}}), die Renderwarteschlange sowie Kamera-, Himmelsbild-, Nebel- und Lichtmischoptionen ohne WebGPU | {{ui:Bild rendern…}} in {{ui:Hohe Qualität}} verwendet dort den WebGL-Pfadtracer, ohne diese Optionen ([Bild rendern](topic:render#high-quality)) |
| Ein anderes Programm zeichnet das gerenderte Bild ohne Render-Engine-Add-on (CadCraft führt nie ein Programm unter der GNU-GPL-Lizenz aus); Panorama- oder Stereokameras und ein Himmelsbild über ein anderes Programm; das Unreal-Engine-Plug-in (die Dateien werden geschrieben, das Plug-in zum Öffnen wird nicht veröffentlicht) | Unsere eigenen Engines Fast und Path Tracer; die Engine eines Add-ons ([das Bild mit einem anderen Programm zeichnen](topic:render-other-program)); ein USD-, glTF- oder Unreal-Ordner aus der Engine-Liste, um ihn in jedes Programm zu nehmen |
| Verstreute Pflanzen und Felsen in {{ui:Bild rendern…}} | Sie werden in der [Live-Ansicht](topic:live-view), ihren Panoramen, dem Betrachter und Videos angezeigt |

## Materialien und Farben

| Noch nicht | Heute stattdessen |
|---|---|
| Eingaben außer Grundfarbe, Rauheit, Metallizität, Deckkraft, Normale und Emission, die sich über eine Fläche ändern, in hochwertigen Bildern (sie verwenden ihren Mittelwert) | [Materialien mit Knoten erstellen](topic:shading): Verbinden Sie sie trotzdem, die Ansicht zeigt die Änderung |
| Verdrängung auf Flächen aus {{ui:Drücken/Ziehen}} | Objekt in ein Netz umwandeln, dann die Verdrängung verwenden |
| Teilen eigener Materialien in die Bibliothek aus der App, und gepackte (ARM/ORM) oder EXR-Karten in einem importierten Texturset | Behalten Sie sie in der Datei; importieren Sie die einzelnen Karten als PNG oder JPEG |
| Materialien der Datei in Live-TeamWork-Sitzungen (sie bleiben auf dem Computer, der sie erstellt hat) | Speichern Sie die Datei und teilen Sie sie |
| Decals, die sich um gekrümmte Flächen biegen, Decals im Rückgängig, oder das gleichzeitige Bemalen der Texturen mehrerer Flächen über eine Naht | Platzieren Sie kleinere Decals auf jedem Teil; malen Sie jede Seite einer Naht einzeln |
| Einbacken auf Flächen aus Drücken/Ziehen, Einbacken mehrerer Objekte in ein Bild, ein Käfig, den Sie von Hand formen, oder eingebackene Beleuchtung von Lampen | In ein Netz umwandeln und entfalten; jedes Objekt einzeln einbacken; die Suchdistanz erhöhen; für Lampenlicht ein Bild rendern |
| Malen von Rauheit, Metallizität oder Höhe, Malen mit Bildern (Stempeln) und Texturmalen größer als 512 × 512 | Malen Sie hier die Grundfarbe; erstellen Sie andere Karten in einem Bildbearbeitungsprogramm und importieren Sie sie als Texturset |
| Texturen in Collada-, STL-, PLY-, 3MF-, IFC-, DWG- und DXF-Exporten sowie die Knotengraphen der eigenen Materialien einer Datei in exportierten Modellen | Diese Formate erhalten die Materialfarbe jedes Materials; glTF und OBJ behalten importierte Texturen; exportieren Sie ein Material für sich als [MaterialX](topic:shading#materialx); [USD](topic:usd) behält das ganze Modell für ModelCraft |
| Texturen in Collada-Dateien | Sie werden beim Import gezählt und weggelassen; Texturen in `.skp`- und `.glb`-Dateien werden importiert |

## Dateien

| Noch nicht | Heute stattdessen |
|---|---|
| SketchUp-Dateien speichern, sowie Text und Bemaßungen aus ihnen | [Importieren](topic:import-sketchup-files) behält Flächen, Farben und Texturen; exportieren Sie Collada (`.dae`), um zurück zu SketchUp zu gelangen |
| Bemaßungen und Hilfslinien in DWG- und DXF-Exporten | Fügen Sie sie nach dem Export im CAD-Programm hinzu |
| Punkte, Tabellen und Multi-Führungslinien aus DWG und DXF | Sie werden gezählt und weggelassen; Text kommt als Einzelstrich-Schrift, nicht in der Schrift der Zeichnung |
| Flächen, Netze, Tabellen und Multi-Führungslinien aus DWG und DXF; Flächen von 3D-Volumenkörpern auf Sweep-, Loft- oder anderen Freiformflächen | Sie werden ebenfalls gezählt und weggelassen (3D-Volumenkörper selbst kommen herein). Exportieren Sie diese Teile aus dem CAD-Programm als OBJ oder Collada und importieren Sie das |
| IFC-Typen, Eigenschaften oder Materialien | Der IFC-Export enthält [Geschosse](topic:formats#ifc-ifc) und allgemeine Elemente; ergänzen Sie den Rest in einem BIM-Programm |
| Ein Modell direkt an BimCraft senden | Exportieren Sie {{ui:IFC für BimCraft (.ifc)}} und öffnen Sie es in BimCraft |
| Lose Kanten in glTF und STL | Verwenden Sie OBJ oder Collada für Linienzeichnungen |
| glTF- und FBX-Materialien über die Grundfarbe hinaus (Metall, Rauheit, Normalenkarten, Glas, Klarlack, Schimmer…) | Sie werden gelesen und aufgelistet; ModelCraft behält die Grundfarbe oder Textur. Bauen Sie das Aussehen im [Shading-Arbeitsbereich](topic:shading) neu auf |
| glTF-Knochen, Animationen und Morph-Targets | Modelle mit Skelettgewichtung kommen in Ruhelage; animieren Sie in der [Zeitleiste](topic:animation) |
| Farben und die Teilenamen der Baugruppe aus STEP-Dateien | Teile kommen als Netze in ihrer wahren Größe; [malen](topic:paint) und benennen Sie sie nach dem Import |
| SubD-Objekte, Text, Bemaßungen und Lichter aus `.3dm`-Dateien | Siehe [was weggelassen wird](topic:import-3dm-files#what-is-left-out-and-said); wandeln Sie SubD im Programm, das die Datei erstellt hat, in Netze um |
| KTX2-Texturen und Materialvarianten in glTF | Exportieren Sie mit PNG- oder JPEG-Texturen; die Standardvariante wird verwendet |
| Schreiben von glTF-Instanzierung (EXT_mesh_gpu_instancing) | Komponenten werden einmal geschrieben und vielfach platziert, was jeder Betrachter liest |
| Alembic-Animation (jedes Sample eines Caches), Alembic-Punkte und -Kurven, Schreiben von Alembic | Das erste Sample kommt herein; animieren Sie in der [Zeitleiste](topic:animation); schreiben Sie glTF, USD oder OBJ |
| Bump- und Normalenkarten in OBJ-Materialien | Nur das Farbbild (`map_Kd`) kommt herein |
| FBX-Knochen und Animation, FBX-Export, FBX-6-Dateien | Modelle mit Skelettgewichtung kommen in Ruhelage; exportieren Sie glTF; speichern Sie alte Dateien als FBX 2011 oder neuer |
| Collada-Skins, Morphs, Kameras, Lichter, Look-at- und Scherungstransformationen, externe Referenzen | Beim Import weggelassen und in der Meldung gezählt |
| Sicherungsdateien | {{ui:Speichern als}} ({{key:Mod+Shift+S}}) speichert eine weitere Kopie. Nach einem Absturz bietet ModelCraft Ihre nicht gespeicherte Arbeit wieder an („Ihre Arbeit wiederherstellen?“) |
| Cloud-Speichern und Synchronisation zwischen Computern | Noch nicht verfügbar. Speichern Sie Dateien auf Ihrem Computer und kopieren Sie sie dorthin, wo Sie sie brauchen |

## 3D-Druck

| Noch nicht | Heute stattdessen |
|---|---|
| Echte Slicer-Stützen (Zwischenlagen, Raft, das genaue Stützmuster) | Die [Stützen-Vorschau](topic:print-tools#supports-preview) zeigt, wo und ungefähr wie viele; die Vorschau Ihres Slicers zeigt die echten |
| Entwirren eines Teils, das sich selbst durchdringt, oder Kanten, an denen drei oder mehr Flächen zusammentreffen | [Reparieren](topic:print-tools#repair) listet sie mit ihrer Lage auf; verwenden Sie [Flächen schneiden](topic:intersect) und löschen Sie, was innen liegt |
| Füllmuster und ein Gitter in einem Hohlraum | [Aushöhlen](topic:print-tools#hollow) lässt es leer; Ihr Slicer fügt einem massiven Teil Füllung hinzu |
| Details, die für Ihre Düse zu klein sind (außer Wänden) | [Wandstärke](topic:print-tools#wall-thickness) findet dünne Wände; die Schichtvorschau Ihres Slicers zeigt den Rest |

## Leistung

Rückgängig speichert eine Kopie des Modells für jeden Schritt (ein [Netz](topic:meshes) behält nur, was sich geändert hat). Sehr große Importe von Geometrie aus Drücken/Ziehen machen daher jede Bearbeitung langsamer. Halten Sie Importe schlank und speichern Sie die Datei und öffnen Sie sie erneut, um den Verlauf zu leeren.

## Apps und Plattformen

- **Desktop:** ModelCraft läuft im Browser auf Mac, Windows und Linux sowie in CadCraft Studio, der Desktop-App mit allen acht Apps in einer Installation. Auf Android installiert sich CadCraft Studio aus seiner APK unter getcadcraft.com/download. Einen iPad- oder iPhone-Build gibt es noch nicht.
- **Touch:** Die Fingergesten finden Sie unter [Orbit, Pan und Zoom](topic:orbit-pan-zoom). Der Druck eines Stifts bestimmt den Pinsel in [Bildhauern](topic:sculpt); sonst werden Druck und Neigung des Stifts nicht verwendet.
- **Blätter:** ModelCraft [druckt eine Ansicht pro Seite](topic:export-model#print-the-view-or-save-it-as-a-pdf); es gibt keine Layouts mit mehreren Ansichten und kein Schriftfeld. Exportieren Sie für maßstäbliche Zeichnungen nach einem CadCraft-kompatiblen DWG/DXF.
