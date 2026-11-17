---
title: Materialien mit Nodes erstellen
summary: Erstellen Sie ein Material aus Texturen, Bildern und Rechenoperationen im Arbeitsbereich Shading, sehen Sie es während der Arbeit in der Ansicht und malen Sie Flächen damit an.
keywords: shading, backen, Backen, Texturbacken, Umgebungsverdeckung, ao, Krümmung, Normalenbacken, High Poly, Low Poly, Lichtkarte, Decal, Decals, Aufkleber, Logo, Etikett, Texturmalerei, Textur malen, Material, Materialien, materialx, mtlx, openpbr, standard surface, Materialbibliothek, librarycraft, Texturset, pbr, Texturen importieren, zip, cc0, ziehen, Node, Nodes, Node-Editor, Shader, Textur, prozedural, Rauschen, Karo, Voronoi, Zellen, Wellen, Ziegel, Fliesen, Holz, Marmor, Verlauf, Schmutz, Kantenabnutzung, Farbrampe, Mischen, Bump, Normalenkarte, Rauheit, Metallizität, Deckkraft, Freistellung, Emission, Glühen, Verschiebung, Box-Mapping, Triplanar, uv, Bild, Bildtextur, openpbr
from: d7368b21
---

Ein Material, das im Arbeitsbereich **Shading** erstellt wird, gehört zur Datei. Es ist ein kleiner Graph: **Nodes**, die Texturen, Bilder und Zahlen erzeugen und mit dem **Material-Ausgang** verbunden sind. Dessen Eingänge bestimmen das Aussehen der Oberfläche – Grundfarbe, Rauheit, Metallizität, Normale, Deckkraft, Emission und den Rest des OpenPBR-Modells. Sie malen Flächen damit an wie mit jedem Bibliotheksmaterial, und jede Änderung ist sofort in der Ansicht zu sehen.

## Öffnen

Wählen Sie {{ui:Shading}} in der Liste der Arbeitsbereiche. Die 3D-Ansicht behält den oberen Bereich des Bildschirms, und der **Node-Editor** nimmt den unteren Bereich ein. Der Bereich rechts listet die eigenen Materialien der Datei auf.

- {{ui:Neues Material}} erstellt ein graues Material, das nur seinen Material-Ausgang hat.
- **Eine bearbeitbare Kopie eines Bibliotheksmaterials erstellen** verwandelt Ziegel, Holz, Fliesen und den Rest in einen Graphen, den Sie ändern können: Die Textur kommt über einen Node „Bibliothekstextur“, die Unebenheiten über einen Node „Bump“.
- {{ui:Damit füllen}} malt die ausgewählten Flächen oder Gruppen an oder wählt das Material für das Werkzeug {{ui:Farbeimer}}. Die Materialien des Werkzeugs {{ui:Farbeimer}} listen unter **In dieser Datei** auch die eigenen Materialien der Datei auf.
- {{ui:Duplizieren}} und {{ui:Löschen}} wirken auf das Material, das Sie bearbeiten. Löschen lässt sich nicht rückgängig machen: Flächen, die damit angemalt wurden, zeigen die Standardfarbe, bis Sie sie erneut anmalen.

## Materialien aus der Bibliothek

Die **Materialbibliothek (Library)** im Bereich listet die Materialien der Bibliothek auf, jeweils mit einer Vorschau, die vom Pfad-Tracer von CadCraft gerendert wurde. Es sind Texturensets unter CC0, mit Nennung der Personen, die sie erstellt haben.

- Klicken Sie eines an, um es in die Datei zu holen (seine Bilder kommen mit) und, bei ausgewählten Flächen oder Gruppen, sie anzumalen.
- Ziehen Sie eines auf eine Fläche oder Gruppe in der Ansicht, um nur diese anzumalen.
- Es wird eines der Materialien der Datei: Ändern Sie seine Nodes wie bei jedem anderen. Seine Nennung wird im Bereich angezeigt und bleibt in der Datei.

## Ein Texturset importieren

{{ui:Bilder oder ZIP…}} oder {{ui:Ordner…}} unter **Ein Texturset importieren** erstellt ein Material aus einem Satz von Karten. Die Karten werden anhand der Wörter in ihren Dateinamen erkannt: color, albedo, diffuse oder basecolor; roughness (oder gloss, das in Rauheit umgewandelt wird); metalness oder metallic; normal (OpenGL oder DirectX, aus `gl` / `dx` im Namen); height oder displacement; ambient occlusion (Umgebungsverdeckung); opacity; emission. Gepackte Karten (ARM, ORM) werden ausgelassen. Die Kachel beginnt bei 1 × 1 m: Stellen Sie ihre echte Größe am Material-Ausgang ein. Höhe geht mit der Skalierung 0 in die Verschiebung – erhöhen Sie die Skalierung, um sie auf Netzen zu verwenden.

## MaterialX

MaterialX ist das offene Format, das andere 3D- und Rendering-Programme verwenden, um Materialien weiterzugeben.

- {{ui:Als MaterialX exportieren…}} speichert das Material, das Sie bearbeiten: seine Werte und jede Textur als PNG-Bild neben der `.mtlx`-Datei (in einer ZIP-Datei). Wählen Sie den Shader, mit dem es geschrieben wird: **OpenPBR Surface** (MaterialX 1.39, dasselbe Modell, das ModelCraft verwendet) oder **Standard Surface** (MaterialX 1.38, das heute mehr Programme lesen). Die Texturen werden über UV-Koordinaten in Metern platziert; Box- und Triplanar-Platzierung werden als UV geschrieben.
- {{ui:MaterialX importieren…}} (oder {{ui:Aus einem Ordner…}}) liest `.mtlx`-Dateien mit OpenPBR-, Standard-Surface-, UsdPreviewSurface- oder glTF-PBR-Shadern. Geben Sie die Bilder ebenfalls an, oder eine ZIP-Datei mit allem: Ein Bild wird über seinen Pfad, seinen Namen oder seinen Namen mit einem anderen Bildtyp gefunden (eine im Dateinamen genannte `.exr` kann als `.jpg` daneben liegen). Texturen, Normalenkarten, Arithmetik, Mischungen und Verschiebung kommen als Nodes herein; alles andere behält seinen Wert, und die Statuszeile sagt, was ausgelassen wurde.

## Decals

Ein Decal ist ein Bild, das auf eine Oberfläche gelegt wird – ein Logo, ein Schild, ein Etikett, ein Fleck – mit einem eigenen Material.

- Legen Sie **Breite eines neuen Decals** fest, dann {{ui:Decal platzieren…}} (oder {{ui:Decal}} in der Symbolleiste), wählen Sie ein PNG-, JPEG- oder WebP-Bild und klicken Sie auf eine Fläche. Das Bild wird auf die Oberflächen dort projiziert und behält seine Proportionen; transparente Teile eines PNG bleiben durchsichtig.
- Es gehört zu der Gruppe oder Komponente, in die Sie geklickt haben, und bewegt sich mit ihr. Es deckt die Flächen in seinem Kasten ab, die in dieselbe Richtung zeigen, und endet an den Kanten dessen, worauf es liegt.
- Jedes Decal erhält ein eigenes Material mit dem Namen **Decal: <Bild>** in der Liste der Datei: Bearbeiten Sie es wie jedes andere (Rauheit, eine Unebenheit, ein Glühen). {{ui:Material}} neben dem Decal öffnet es.
- Neben jedem Decal: seine Breite (die Höhe folgt dem Bild), {{ui:Drehen}} (eine Viertelumdrehung) und {{ui:Löschen}}. Decals werden mit den Materialien der Datei gespeichert und liegen außerhalb von Rückgängig.
- Sie werden in der schattierten Ansicht, in schnellen Renderings und in hochwertigen Bildern angezeigt.

## Auf die Textur malen

{{ui:Textur malen}} (oder {{ui:Farbeimer}} unter **Auf die Textur malen**) macht den Zeiger zu einem runden Pinsel. Ziehen Sie auf einer Fläche, die eines der Materialien dieser Datei trägt: Der Pinsel malt das Bild hinter ihrer Grundfarbe.

- Auf einem Netz malt er entlang der UVs des Netzes (vorher im Arbeitsbereich UV aufklappen); auf anderen Flächen malt er quer über die Fläche, sodass sich das Bild mit der Kachel des Materials wiederholt.
- Ein Material, dessen Grundfarbe eine einfarbige Farbe ist, erhält beim ersten Malen ein neues Bild von 512 × 512 in dieser Farbe. Ein Material, dessen Grundfarbe aus anderen Nodes stammt, braucht einen Node „Bild“, der mit der Grundfarbe verbunden ist.
- Stellen Sie die Pinselfarbe, Größe (in Bildpixeln), Stärke und Härte im Bereich ein. {{ui:Strich rückgängig}} oder Ctrl+Z (während des Malens) nimmt einen Strich zurück, bis zu den letzten 20.
- Das gemalte Bild wird in der Datei gespeichert. Bibliotheksmaterialien lassen sich nicht bemalen: Erstellen Sie zuerst eine bearbeitbare Kopie.

## Texturen backen

**Texturen backen** schreibt, was Form und Szene einer Oberfläche geben, entlang der UVs eines Netzes in Bilder.

- Wählen Sie ein Netz mit UVs (vorher im Arbeitsbereich UV aufklappen), setzen Sie die Haken bei den Karten und drücken Sie {{ui:Backen}}:
  - **Umgebungsverdeckung** – wie offen jeder Punkt ist: Ecken, Falten und Stellen unter anderen Objekten werden dunkler. Alles, was im Modell angezeigt wird, schattiert sie, bis zur eingestellten Verdeckungsdistanz.
  - **Krümmung** – hell an äußeren Kanten, dunkel in inneren Ecken, mittelgrau auf flachen und sanft gekrümmten Teilen, über die eingestellte Kantenbreite.
  - **Normalen vom hoch detaillierten Objekt** – wählen Sie auch eine detaillierte Kopie aus: Ihre Oberflächendetails werden als Normalenkarte für das einfachere Objekt geschrieben (auf das Objekt mit weniger Dreiecken wird gebacken). Die Suchdistanz ist, wie weit die beiden Oberflächen voneinander entfernt sein dürfen.
  - **Beleuchtung** – die Sonne am Ort und Datum des Modells (Stil) mit ihren Schatten sowie der Himmel als Lichtkarte.
- Die Bilder kommen in die Datei und erscheinen in Bild-Nodes. Hat das Material, das Sie bearbeiten, einen Node **Schmutz und Kantenabnutzung**, liest er die neue Verdeckung und Krümmung sofort.
- Mehr Strahlen pro Texel machen die Verdeckung und Beleuchtung glatter und dauern länger. Das Backen läuft im Hintergrund auf den Prozessorkernen des Computers; {{ui:Backen beenden}} stoppt es.

## Einen Graphen erstellen

1. {{ui:Node hinzufügen…}} (oder {{key:Shift+A}} im Node-Editor) fügt einen Node in die Mitte des Editors ein.
2. Ziehen Sie von einem Ausgangspunkt (rechts an einem Node) zu einem Eingangspunkt (links an einem Node), um sie zu verbinden. Eine zweite Verbindung in einen Eingang ersetzt die erste; ziehen Sie einen verbundenen Eingang weg, um die Verbindung zu lösen.
3. Nicht verbundene Eingänge zeigen ihren Wert: Geben Sie eine Zahl ein oder wählen Sie eine Farbe. Einstellungen stehen unten an jedem Node.

Ziehen Sie einen Node am Titel, um ihn zu verschieben, ziehen Sie auf leeren Raum, um zu schwenken, und nutzen Sie das Mausrad zum Zoomen. {{key:Delete}} entfernt die ausgewählten Nodes oder die Verbindung, {{key:Mod+Z}} macht rückgängig, {{key:Mod+D}} dupliziert, {{key:F}} zeigt alle Nodes. Jede Änderung ist ein Rückgängig-Schritt des Node-Editors. Die Rückgängig-Funktion des Modells ändert keine Materialien.

| Nodes | Was sie erzeugen |
|---|---|
| Texturkoordinaten | Wo auf der Kachel ein Punkt liegt: wiederholen, versetzen, um eine Viertelumdrehung drehen. |
| Wert, Farbe | Eine Zahl, eine Farbe. |
| Bild | Ein Bild der Datei (eines, das mit einem importierten Modell kam, oder eines, das Sie mit {{ui:Bild hinzufügen…}} hinzugefügt haben). Wählen Sie **Farben** für ein Foto und **Daten** für eine Rauheits- oder Normalenkarte. |
| Bibliothekstextur | Die Textur, Rauheit und Höhe eines Bibliotheksmaterials. |
| Karo, Rauschen | Quadrate; weiches fraktales Rauschen mit seinem Detail, seiner Rauheit und seinem Seed. |
| Voronoi-Zellen, Wellen, Verlauf | Zellen (Abstand zum nächsten Punkt, die Kanten zwischen den Zellen, eine Farbe pro Zelle); Bänder quer, nach oben oder diagonal, als Sinus, Sägezahn oder Dreieck, durch Rauschen verbogen; lineare, quadratische, radiale und sphärische Verläufe. |
| Ziegel, Fliesen | Reihen von Ziegeln mit versetztem Verband oder ein Raster aus Fliesen: Farben, Mörtel oder Fugenmasse, ein Spalt und eine Fase in Metern, eine Höhe für Unebenheiten, eine Zufallszahl pro Stück. |
| Holz, Marmor | Ringe entlang der Maserung mit feinen Fasern; durch Turbulenz verbogene Adern. |
| Schmutz und Kantenabnutzung | Nutzt konvexe Kanten ab und verschmutzt Vertiefungen anhand der Krümmungs- und Verdeckungsbilder eines Netzes ([Texturen backen](topic:shading#bake-textures) erzeugt sie; oder stellen Sie seine zwei Bildeinstellungen im UV-Layout des Netzes ein: Platzieren Sie das Material per UV-Koordinaten). Ohne sie ändert er nichts. |
| Farben mischen, Farbrampe, Farbton/Sättigung/Wert, Helligkeit und Kontrast, Invertieren, Gamma, RGB trennen und RGB kombinieren | Farbarbeit. |
| Math, Wertebereich | Arithmetik mit Zahlen (addieren, multiplizieren, Potenz, glatter Schritt und mehr). |
| Bump, Normalenkarte | Eine Normale aus einer Höhe (Bump) oder aus einem Normalenkartenbild (Normalenkarte: wählen Sie die Richtung des grünen Kanals). |

## Der Material-Ausgang

Seine Einstellungen bestimmen, wie die Textur auf den Oberflächen liegt:

- **Kachelbreite** und **Kachelhöhe**: wie viele Meter eine Kachel der Textur abdeckt. Alles, was ein Graph erzeugt, wiederholt sich ohne Naht über die Kachel.
- **Platziert durch**: **UV-Koordinaten** folgen den Flächen (Flächen aus Drücken/Ziehen: entlang jeder Fläche; Netze: ihre UVs, eine UV-Einheit = eine Kachel), **Box** projiziert von der nächsten der drei Achsen, **Triplanar** mischt die drei Projektionen auf geneigten Oberflächen (**Mischschärfe**: höher ist eine härtere Mischung).
- **Normalenstärke** skaliert den Normalen-Eingang. **Verschiebungsskalierung** legt fest, wie weit der Verschiebungs-Eingang die Eckpunkte eines Netzes bewegt.
- {{ui:Mehr Eingänge}} zeigt die übrigen OpenPBR-Eingänge: Coat, Fuzz, Subsurface, Thin Film, Transmission und ihre Farben.

## In hochwertigen Bildern

Der Pfad-Tracer liest Grundfarbe, Rauheit, Metallizität, Deckkraft, Normale und Emission aus dem Graphen, so wie sie sich über die Oberfläche ändern. Jeder andere Eingang, den Sie verbinden (etwa ein Coat, der variiert), wird mit seinem Durchschnitt verwendet; das Bedienfeld sagt, welcher. Eine Freistellung aus einer Deckkraft-Textur zeigt ihre Form, und ihr Schatten ist gleichmäßig durchsichtig. Eine leuchtende Textur beleuchtet, was ihr zugewandt ist, ohne als Lampe abgetastet zu werden.

**Verschiebung** bewegt nur die Eckpunkte von Netzen; fügen Sie deshalb für Details einen Modifikator Unterteilung hinzu ([Modifikatoren](topic:modifiers)). Flächen aus Drücken/Ziehen behalten ihre Form und erhalten die Unebenheiten aus der Normalen.

:::tip
Auf einem Computer mit WebGPU wird der Graph auf der Grafikkarte berechnet; ohne WebGPU auf dem Prozessor. Das Ergebnis ist dasselbe.
:::
