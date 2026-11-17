---
title: Dateiformate im Detail
summary: Genau das, was jedes Format, das ModelCraft öffnet, importiert und exportiert, behält, konvertiert und weglässt.
keywords: Formate, Dateitypen, modelcraft, json, 3dm, NURBS, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, Cache, fbx, 3mf, ifc, dwg, dxf, Einheiten, Achsen, Y nach oben, Z nach oben, Millimeter, Grenzen
from: c47d2d28
---

Das Modell von ModelCraft ist in Metern, mit Z (blau) nach oben. Jedes Format unten wird von dort aus oder dorthin konvertiert.

## ModelCraft (.modelcraft)

| Was | Details |
|---|---|
| Öffnen | {{ui:Öffnen}} ({{key:Mod+O}}) oder auf die Ansicht ziehen. Dateien mit der Endung `.json` werden ebenfalls akzeptiert |
| Speichern | {{ui:Speichern}} ({{key:Mod+S}}), als Download |
| Behält | Alles: Geometrie, Flächen und ihre Farben, Materialien und importierte Texturen, Lampen, weiche Kanten, Gruppen, Komponenten, Namen, Hilfslinien, Szenen, die Einheiten sowie die letzte Kamera und den letzten Stil |
| Lässt weg | Den Rückgängig-Verlauf |
| Grenze | 200 MB |

Eine Datei, die mit einer neueren ModelCraft-Version als Ihrer gespeichert wurde, wird abgelehnt: „Dieses Modell wurde mit einer neueren ModelCraft gespeichert (Dateiversion …). Aktualisieren Sie ModelCraft, um es zu öffnen.“ Eine Datei, die kein ModelCraft-Modell ist, meldet „Diese Datei ist kein ModelCraft-Modell (sie ist kein JSON).“ oder „Dies ist keine ModelCraft-Datei, die wir öffnen können: …“

## USD (.usd, .usda, .usdc, .usdz)

Öffnen, importieren, und {{ui:Speichern als}} oder {{ui:Exportieren}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Eine USD-Datei, die ModelCraft gespeichert hat, öffnet sich wieder ohne Verlust. USD-Dateien anderer Programme öffnen sich als Netze, Gruppen, Komponenten, Lampen und Kameras. Siehe [USD speichern, öffnen und exportieren](topic:usd).

## Collada (.dae)

Import und Export. Das beste Format für den Austausch von Modellen mit anderen 3D-Modellierern.

- **Export:** Collada 1.4.1, Z nach oben, Meter. Eine Geometrie pro Gruppe oder Komponentendefinition. Komponenten werden einmal geschrieben und per Verweis platziert, sodass sie gemeinsam bleiben. Flächen mit Löchern oder konkaven Umrissen werden in Dreiecke geteilt. Farben werden zu Materialien. Lose Kanten werden als Linien geschrieben. Namen, die im Format nicht gültig sind, werden angepasst, und der genaue Name wird daneben behalten.
- **Import:** Dreiecke, Polygone (mit Löchern), Dreiecksfächer und -streifen werden zu Flächen; Linien werden zu Kanten. Knotentransformationen, die Hochachse der Datei und ihre Einheit werden angewendet. Ein Knoten, der an mehreren Stellen platziert ist, oder eine Geometrie, die von mehreren Knoten verwendet wird, kommt als Komponente an; andere Knoten kommen als Gruppen. Materialfarben (diffus) werden zu Flächenfarben.
- **Nicht importiert:** Texturen, Skins und Morphs, Kameras, Lichter, einige Transformationsarten (Look-at und Scherung) und Verweise auf andere Dateien. Die Statusleiste zählt sie.
- **Beim Export verloren:** welche Kanten weich sind. **Beim Import** bleiben triangulierte Flächen Dreiecke, wobei die Diagonalen geglättet werden, damit flache Bereiche weiterhin als eine Oberfläche wirken.

## OBJ (.obj, .mtl)

Import und Export.

- **Import:** Ziehen Sie die `.obj` zusammen mit ihrer `.mtl` und den Texturbildern auf die Ansicht (oder importieren Sie die `.obj` allein: Sie kommt ohne Materialien an, und die Statusleiste nennt die `.mtl`, die sie gewollt hätte). Gelesen in Metern mit Y nach oben. Jedes Objekt (`o`, sonst `g`) wird zu einem [Netz](topic:meshes), seine Flächen bleiben wie sie sind (Vierecke bleiben Vierecke). Texturkoordinaten, Normalen und Farben pro Eckpunkt bleiben erhalten. Das Farbbild eines Materials (`map_Kd`, PNG, JPEG oder WebP) kommt als Textur an, mit seinen Skalierungs- und Versatzoptionen; sonst seine Farbe (`Kd`). Kanten, an denen die Normalen der Datei brechen, sind hart; ohne Normalen entscheiden die Glättungsgruppen der Datei. Andere Karten (Bump, Normal), Punkte, Linien und Kurven werden gezählt und weggelassen. OBJ hat keine Einheit, daher kommt ein Modell in Millimetern oder Zoll mit falscher Größe an: Skalieren Sie es nach dem Import (siehe [Drehen und Skalieren](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Export:** Meter, Y nach oben, Weltkoordinaten. Ein Objekt pro Gruppenplatzierung; Komponenten werden bei jeder Platzierung vollständig geschrieben. Netze behalten ihre eigenen Flächen, Texturkoordinaten und Normalen. Flächen, die durch [weiche Kanten](topic:soften) verbunden sind, erhalten eine Normale pro Ecke. Hat das Modell Farben, wird eine `.mtl` neben der `.obj` heruntergeladen. Hat es importierte Texturen, werden `.obj`, `.mtl` und die Bilder gemeinsam als eine `.zip` heruntergeladen.
- **Grenze:** 2 Millionen Eckpunkte oder Flächen; 64 MB Text.

## glTF (.glb, .gltf)

Import und Export, glTF 2.0.

- **Import:** eine `.glb`, oder eine `.gltf` zusammen mit ihrer `.bin` und den Texturdateien: Ziehen Sie alle gleichzeitig auf die Ansicht (oder wählen Sie die `.glb`). Eine `.gltf` allein nennt die Datei, die sie benötigt: „Diese .gltf-Datei braucht „…“: Öffnen Sie die .glb-Version oder ziehen Sie die .gltf zusammen mit ihren Dateien.“
  - **Netze** kommen als [Netze](topic:meshes) an, eines pro Netz in der Datei, mit den Normalen, Texturkoordinaten und Farben pro Eckpunkt der Datei. Kanten, an denen die Normalen der Datei brechen, sind hart; der Rest ist weich. Ein Netz, das an mehreren Stellen verwendet wird, bleibt gemeinsam.
  - **Knoten** werden zu Gruppen, benannt wie in der Datei. Instanziierte Netze (EXT_mesh_gpu_instancing) kommen als ein Netz an, das viele Male platziert ist.
  - **Materialien:** Eine Basisfarben-Textur (PNG, JPEG oder WebP) kommt als Textur an, platziert nach den Texturkoordinaten der Datei (mit einer etwaigen Texturtransformation), und bleibt beim Speichern erhalten; sonst die Basisfarbe. Metall, Rauheit, Normal-Maps, Glas, Klarlack, Sheen und die übrigen Material-Erweiterungen werden gelesen, aber noch nicht behalten: Die Statusleiste sagt es.
  - **Lichter** (KHR_lights_punctual): Punkt- und Spotlichter werden zu [Lampen](topic:lights). Gerichtete Lichter werden gezählt: Die Sonne beleuchtet das Modell.
  - **Kameras** werden zu [Szenen](topic:scenes).
  - **Figuren mit Skelett** kommen in der Ruhehaltung an, wie die Datei sie festlegt. Ihre Knochen, Animationen und Morph-Targets werden gezählt und noch nicht behalten.
  - **Komprimierte Dateien** (Draco, meshopt) und quantisierte Daten werden gelesen. Die Decoder laden nur für eine Datei, die sie braucht.
  - Punkte und Linien werden gezählt und weggelassen (ein Netz enthält Flächen). KTX2-Texturen werden weggelassen; die Flächen behalten ihre Farbe.
- **Export** (`.glb`): glTF 2.0 binär, Meter, Y nach oben. Ein Netz pro Definition, sodass Komponenten gemeinsam bleiben. Netze behalten ihre Normalen, Texturkoordinaten und Farben pro Eckpunkt; Flächen, die durch [weiche Kanten](topic:soften) verbunden sind, erhalten glatte Normalen. Farben und Materialien werden zu Materialien (ein Material als seine Farbe); importierte Texturen werden als Texturen geschrieben. Eingeschaltete Lampen werden zu Punkt- und Spotlichtern (Flächenlampen haben kein glTF-Gegenstück und werden weggelassen); Szenen werden zu Kameras. Lose Kanten werden weggelassen.
- **Grenze:** Dateien bis 300 MB; etwa 130 Millionen Zahlen an Geometriedaten.

## STL (.stl)

Import und Export.

- **Import:** binär oder ASCII. STL hat keine Einheit: Es wird als **Millimeter** gelesen, so wie Drucker und der eigene Export von ModelCraft es schreiben. Eckpunkte am selben Punkt werden verbunden, sodass ein geschlossenes Teil als geschlossenes [Netz](topic:meshes) ankommt. Farben in der Datei (die Konventionen von VisCAM / SolidView und Materialise) färben die Flächen.
- **Export** für den 3D-Druck: binäres STL, **Millimeter**, Z nach oben. Nur Dreiecke: Gruppen und lose Kanten werden weggelassen. Bemalte Flächen tragen ihre Farbe nach der VisCAM-/SolidView-Konvention, die andere Programme ignorieren, wenn sie diese nicht lesen. Exportieren Sie geschlossene Volumenkörper für einen sauberen Druck.

## STEP (.step, .stp)

Nur Import. STEP ist das, was Teilemodellierer und Lieferanten senden: AP203-, AP214- und AP242-Dateien.

- **Import:** ModelCraft liest die Datei selbst, auf der Seite, und macht jeden Volumenkörper zu einem geschlossenen [Netz](topic:meshes) aus Dreiecken. Ebene Flächen bleiben eben; gekrümmte Flächen (Zylinder, Kegel, Kugeln, Tori, B-Spline-Flächen) werden zu vielen kleinen ebenen. Die Kanten innerhalb einer gekrümmten Fläche sind weich, die Kanten zwischen zwei Flächen scharf. STEP-Dateien nennen ihre Einheit; das Modell kommt in seiner echten Größe an. Eine Baugruppe kommt mit jedem Teil dort an, wo die Datei es platziert, jedes Teil als eigenes Netz in einer Gruppe, benannt nach der Datei. Farben, Teilenamen des Baugruppenbaums und Toleranzen (PMI) werden nicht gelesen.
- **Meldungen:** Was übersprungen oder gröber gezeichnet wurde, wird der Statuszeile hinzugefügt („Hinweise: …“). Eine Datei ohne Volumenkörper, eine beschädigte Datei oder eine, die die Grenzen überschreitet, nennt den Grund und fügt nichts hinzu.
- **Grenze:** Dateien bis 300 MB; 400 000 Flächen und 8 Millionen Dreiecke.

## .3dm

Nur Import. `.3dm`-Dateien enthalten NURBS-Modelle: Polyflächen, Flächen, Netze, Kurven und Blöcke.

- **Import:** ModelCraft liest die Datei selbst, auf der Seite. Netze kommen unverändert an. Jede Fläche einer Polyfläche oder Extrusion stammt aus dem Render-Netz, das mit der Datei gespeichert wurde; sonst zerlegt ModelCraft sie (Ebenen, NURBS-Flächen, Rotationsflächen, extrudierte Kurven, Extrusionen, beschnitten durch ihre Kanten; geschlossene Polyflächen als geschlossene Netze). Kurven werden zu Kanten, Blöcke zu Komponenten (verschachtelte Blöcke bleiben erhalten), Layer zu Tags (ausgeblendet, wenn sie aus sind). Die Farbe des Objekts (eigene, die seines Layers oder seines Materials) färbt seine Flächen. Die Datei nennt ihre Einheit; das Modell kommt in seiner echten Größe an. Schritt für Schritt: [Ein .3dm-Modell importieren](topic:import-3dm-files).
- **Meldungen:** Die Statuszeile sagt, wie viele Flächen aus gespeicherten Netzen stammten und wie viele zerlegt wurden. Sie nennt außerdem, was weggelassen wurde: Punkte, Punktwolken, Text, Bemaßungen, Schraffuren, Lichter, SubD-Objekte, Flächen auf Flächenarten, die noch nicht gelesen werden, verknüpfte Blöcke.
- **Grenze:** Dateien bis 300 MB.

## PLY (.ply)

Import und Export, für Netze mit Farben (Scans, Farbdruck im 3D-Druck, andere Modellierer).

- **Import:** ASCII und binär. Flächen werden zu einem [Netz](topic:meshes) mit ihren Normalen, Texturkoordinaten und Farben pro Eckpunkt. Jede Fläche wird mit der nächstgelegenen von 4,096 Farben gefärbt, damit Sie die Farben sofort sehen. PLY hat keine Einheit oder Achsenkonvention: Koordinaten kommen unverändert an (Meter, Z nach oben). Ein PLY nur mit Punkten ist eine Punktwolke: Öffnen Sie es in BimCraft oder CivilCraft.
- **Export:** binäres PLY mit Positionen, Normalen und Farben (und Texturkoordinaten, wenn das Modell sie hat), in Metern, Z nach oben.

## FBX (.fbx)

Nur Import. FBX-7-Dateien (ab 2011), binär oder ASCII, gelesen vom eigenen Leser von ModelCraft.

- Netze kommen als [Netze](topic:meshes) mit ihren Normalen, Texturkoordinaten (jeder UV-Satz) und Farben pro Eckpunkt an. Ein Netz, das mehrere Objekte verwenden, bleibt gemeinsam. Objekte werden zu Gruppen mit ihren Transformationen (einschließlich Pivots, Versätzen und Vorrotationen).
- Materialien: Die diffuse Textur (in der Datei eingebettet oder ein zusammen mit der `.fbx` abgelegtes Bild) kommt als Textur an. TGA-Bilder bleiben als PNG erhalten. Sonst kommt die diffuse Farbe. Andere Materialeinstellungen warten auf das neue Materialmodell.
- Die Hochachse und Einheit der Datei werden angewendet: alles kommt Z nach oben, in Metern.
- Punkt- und Spotlichter werden zu [Lampen](topic:lights). Eine FBX-Intensität von 100 ist die Standardlampe von ModelCraft, 800 Lumen; FBX-Intensitäten haben keine Einheit. Kameras werden zu [Szenen](topic:scenes).
- Figuren mit Skelett kommen in der Ruhehaltung an; Knochen und Animationen werden gezählt und noch nicht behalten. Gerichtete und Flächenlichter sowie Geometrie außer Netzen (NURBS, Kurven) werden gezählt und weggelassen.
- FBX-6-Dateien und ältere werden abgelehnt: Speichern Sie sie erneut als FBX 2011 oder neuer.

## Alembic (.abc)

Nur Import: Geometrie-Caches aus Animations- und Effektprogrammen.

- Netze (Polygon- und Subdivision-Netze) kommen als [Netze](topic:meshes) mit ihren Texturkoordinaten und Normalen an; Transformationen werden zu Gruppen. Alembic ist Y nach oben und wird auf Z nach oben gedreht; Meter.
- Ein Cache mit vielen Samples (eine Animation) kommt mit seinem ersten Sample an; die Statusleiste sagt, wie viele es hat.
- Punkte, Kurven, NURBS-Flächen, Kameras und Lichter werden gezählt und weggelassen. Dateien im alten HDF5-Layout werden abgelehnt: Speichern Sie sie erneut als Ogawa-Alembic-Datei.

{{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}} prüft zuerst die Form und schreibt die Auswahl oder alles Sichtbare. Siehe [Ein Modell für den 3D-Druck vorbereiten](topic:print-3d).

## 3MF (.3mf)

Nur Export, aus {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}}. 3MF-Kern: ein Netz in **Millimetern**, Z nach oben, mit seinen Farben als Materialien. Die meisten Slicer lesen es, und anders als STL nennt es seine Einheit. Verborgene Dinge werden weggelassen. Siehe [Ein Modell für den 3D-Druck vorbereiten](topic:print-3d).

## DWG- und DXF-Export (.dwg, .dxf)

Für CAD-Programme. Das Modell wird in seiner eigenen Einheit geschrieben: Zoll für Modelle in Fuß und Zoll, sonst Millimeter, Zentimeter oder Meter (die Statusleiste nennt sie).

- **Flächen** werden zu 3D-Flächen (Dreiecke). Linien innerhalb einer Fläche und weiche Kanten werden unsichtbar geschrieben, sodass die Flächen wie in ModelCraft aussehen.
- **Lose Kanten** werden zu Linien.
- **Gruppen und Komponenten** werden zu Blöcken. Eine Komponente wird einmal geschrieben und so oft platziert, wie sie verwendet wird, einschließlich gedrehter und gespiegelter Kopien. Eine Gruppe, die nach dem Drehen gestreckt wurde (sodass sie schräg ist), wird stattdessen an Ort und Stelle geschrieben.
- **Farben:** DWG behält die Farbe jeder Fläche genau; DXF verwendet die nächste der 255 Standard-CAD-Farben.
- **Versionen:** DWG wird als AutoCAD 2004 (AC1018) geschrieben, das CAD-Programme ab 2004 öffnen. DXF ist R12 (AC1009), die Version, die jedes CAD-Programm liest. R12 hat kein Einheitenfeld, also sagen Sie dem CAD-Programm, welche Einheit es verwenden soll.
- **Nicht geschrieben:** Hilfslinien, Bemaßungen, Szenen und die Kamera.

## IFC (.ifc)

Nur Export, für BimCraft und andere BIM-Programme. IFC4 mit einem Projekt, einem Grundstück, einem Gebäude und seinen Geschossen. Jede oberste Gruppe oder Komponente wird zu einem Bauteil-Proxy mit ihrem Namen. Geschlossene werden als Volumenkörper geschrieben (facettierte Breps), offene als Flächenmodelle; Löcher in Flächen bleiben erhalten. Lose Geometrie auf oberster Ebene wird zu einem Bauteil namens „Lose Geometrie“. Keine Typen, Eigenschaften oder Materialien.

**Geschosse:** {{ui:Exportieren}} › {{ui:IFC-Geschosse…}} listet sie auf, jedes mit einem Namen und einer Höhe ({{ui:Geschoss hinzufügen}} oder {{ui:Aus dem Modell ableiten}}, das für jede Höhe, auf der Ihre obersten Gruppen stehen, ein Geschoss erstellt). Beim Export kommt jede Gruppe oder Komponente auf das Geschoss auf oder unter ihrem tiefsten Punkt und behält ihre Position. Ohne Geschosse kommt alles auf ein Geschoss, „Level 1“, bei 0. Die Geschosse werden in der ModelCraft-Datei gespeichert.

## DWG (.dwg) und DXF (.dxf)

Import als Linien auf dem Boden (Schraffuren und 3D-Flächen als Flächen); Export wie oben beschrieben. Siehe [Ein Modell auf einem Lageplan platzieren](topic:site-plan).

- **Gelesen:** Linien, Polylinien (mit Bögen), 3D-Polylinien, Kreise, Bögen und Blockreferenzen einschließlich Anordnungen, aus dem Modellbereich. Unsichtbare Objekte (wie die ausgeblendeten Zustände eines dynamischen Blocks) werden weggelassen. Kurven werden zu 48 geraden Stücken pro Vollkreis.
- **Seit 0.4 gelesen:** Splines und Ellipsen (als Kanten), Text, mehrzeiliger Text und Attributwerte (als Kanten in einer Einstrich-Schrift), Schraffuren (Flächen mit Löchern), 3D-Flächen und Vollflächen (Flächen) sowie Bemaßungen (aus den eigenen Bemaßungsblöcken der Zeichnung gezeichnet).
- **Seit 0.7 gelesen:** 3D-Volumenkörper, Regionen und Körper (ihre ACIS-Daten, DWG und DXF jeder Version), jeweils als eigene Gruppe; geschlossene als Volumenkörper. Flächen auf anderen Oberflächen als Ebenen, Zylindern, Kegeln, Kugeln, Tori und einfachen Spline-Flächen werden weggelassen und aufgelistet.
- **Nicht gelesen:** Punkte, Tabellen, Multi-Führungslinien, Bilder und alles im Papierbereich.
- **Einheiten:** aus der Zeichnung übernommen, wenn sie diese angibt. Wenn nicht, fragt ModelCraft nach.
- **DXF** muss ASCII sein. Binäres DXF wird abgelehnt.
- **DWG**-Dateien von AutoCAD R13 bis zum aktuellen Format (AutoCAD 2018 und neuer; AC1012 bis AC1032) werden vom eigenen DWG-Leser von ModelCraft gelesen, auf der Seite. Er ist Teil von ModelCraft und funktioniert daher offline, wann immer ModelCraft es tut. Ältere Versionen (R12 und früher) und stark beschädigte Dateien können nicht gelesen werden; speichern Sie sie als DXF.
- **Grenzen:** Koordinaten mehr als 10.000 km vom Ursprung entfernt oder mehr als 2 Millionen Linienstücke werden abgelehnt.

## SKP-Dateien

{{ui:Importieren}} (oder die Datei auf die Ansicht ziehen) liest SketchUp-Dateien mit dem eigenen Leser von ModelCraft, auf der Seite: Nichts wird hochgeladen, und es funktioniert offline, wann immer ModelCraft es tut. Getestet mit Dateien von SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 und 2026; andere Versionen sollten sich ebenfalls öffnen, wurden aber noch nicht ausprobiert. Das Modell kommt als eine Gruppe an, benannt nach der Datei. Ein {{key:Mod+Z}} nimmt es wieder weg. Schritt für Schritt: [Ein SKP-Modell importieren](topic:import-sketchup-files).

- **Behalten:** Flächen mit ihren Löchern, Gruppen (als Gruppen) und Komponenten (als Komponenten, gemeinsam), ihre Namen und Platzierungen, Farben, Tags an Gruppen und Komponenten, Kanten, die nicht Teil einer Fläche sind, sowie weiche und glatte Kanten, damit gekrümmte Oberflächen glatt bleiben.
- **Farben:** Das eigene Material einer Fläche gibt ihre Farbe. Ein Material, das auf einer Gruppe oder Komponente aufgetragen ist, wird zur Bemalung dieser Platzierung. Innenliegende Flächen ohne eigene Farbe übernehmen sie, wie in SketchUp. Eine Komponente, die zweifarbig bemalt ist, bleibt eine Komponente.
- **Tags** an Gruppen und Komponenten werden zu ModelCraft-Tags, sichtbar oder ausgeblendet wie zuvor. Tags an losen Flächen und Kanten werden nicht behalten (ModelCraft-Tags gelten nur für Gruppen und Komponenten); die Statusleiste zählt sie.
- **Verborgene Dinge kommen verborgen an** (Flächen, Kanten, Gruppen, Komponenten sowie Flächen und Kanten auf einem verborgenen Tag), damit Sie sehen, was SketchUp zeigte. {{ui:Alles einblenden}} zeigt sie.
- **Texturen:** Eine Fläche mit einem texturierten Material behält ihre Textur, platziert wie in der Datei, und die ModelCraft-Datei behält das Bild. Eine Textur auf einer ganzen Gruppe oder Komponente, eine Textur, die in der Datei fehlt, oder ein Bild, das Browser nicht zeigen können (etwa eine Photoshop-Datei), behält nur die Farbe ihres Materials.
- **Weggelassen und in der Statusleiste gezählt:** Bilder, die im Modell platziert sind. Text, Bemaßungen, Hilfslinien, Schnittebenen, Szenen und Stile werden nicht gelesen.
- **Einheiten:** SketchUp-Dateien sind innen in Zoll; ModelCraft rechnet sie um, sodass Maße in jeder Einheit richtig herauskommen.
- **Speichern von `.skp`** ist noch nicht umgesetzt. Um ein Modell zurück zu SketchUp zu bringen, exportieren Sie Collada (`.dae`).

## Nicht unterstützt

ModelCraft kann keine 3DS- oder IFC-Dateien öffnen und kann keine 3DS-, FBX-, STEP-, `.3dm`- oder SketchUp-Dateien (`.skp`) speichern.
