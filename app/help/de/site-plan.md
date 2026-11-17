---
title: Auf einem Lageplan aus DWG oder DXF modellieren
summary: Bringen Sie einen CAD-Lageplan oder Grundriss als Linien auf den Boden, beantworten Sie die Frage nach den Einheiten und zeichnen Sie ihn in Flächen und Baukörper nach.
keywords: Lageplan, dwg, dxf, cad, importieren, Skizze, Handskizze, Serviettenskizze, Foto, Papier, Stiftfarben, dynamische Blöcke, Sichtbarkeitszustände, Text, Schraffur, Spline, Ellipse, 3D-Fläche, nachzeichnen, Grundriss, Parzelle, Grundstücksgrenze, Einheiten, Unterlage, Kontext
from: 3415dc96
---

ModelCraft kann die Linien einer 2D-CAD-Zeichnung, eines Lageplans oder eines Grundrisses importieren und auf den Boden legen, damit Sie darauf modellieren können.

## Die Zeichnung importieren

1. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Importieren}} (oder ziehen Sie die Datei in die 3D-Ansicht).
2. Wählen Sie eine `.dwg`- oder `.dxf`-Datei.

   Eine große DWG braucht einen Moment: Die Statusleiste zeigt „plan.dwg wird gelesen…“, bis sie geladen ist.

3. Wenn die Zeichnung nicht angibt, welche Einheiten sie hat, fragt ein Dialog mit dem Titel „Zeichnungseinheiten“: „Was ist eine Zeichnungseinheit?“ Wählen Sie {{ui:Zoll}}, {{ui:Fuß}}, {{ui:Millimeter}} oder {{ui:Meter}}. Die meisten US-Lagepläne sind in Fuß gezeichnet, Architekturpläne in Zoll und metrische Pläne in Millimetern.

   Die Zeichnung kommt als Gruppe von Kanten auf dem Boden an, ausgewählt, und die Ansicht zoomt darauf. Die Statusleiste zeigt, wie viele Kanten hereinkamen, zum Beispiel „Importiert site.dwg: 1697 Kanten auf dem Boden, in einer Gruppe. Zerlegen Sie sie, um direkt darauf zu zeichnen.“

## Was hereinkommt

- Linien, Polylinien (einschließlich ihrer Bögen), Kreise und Bögen sowie Blöcke mit allem darin, nur aus dem **Modellbereich**. Kurven werden zu kurzen geraden Stücken.
- Linien, Polylinien, Bögen, Kreise, Ellipsen und Splines landen flach auf dem Boden, als Kanten.
- **Schraffuren** werden zu Flächen auf dem Boden, mit ihren Inseln als Löchern, sodass Sie eine schraffierte Fläche sofort mit Drücken/Ziehen hochziehen können.
- **3D-Flächen** und volle Körper werden zu Flächen; 3D-Flächen behalten ihre Höhen.
- **Text** (einzeiliger Text, mehrzeiliger Text und Attributwerte) wird als Kanten in einer einfachen Einzelstrich-Schrift gezeichnet, mit der Höhe, dem Winkel und der Ausrichtung des Textes. Seine Schrift ist nicht die der Zeichnung, daher können die Wörter etwas länger oder kürzer sein. Zeichen, für die die Schrift keine Form hat, werden als kleine Kästchen gezeichnet und gezählt.
- **Bemaßungen** werden so gezeichnet, wie die Zeichnung sie zeigt (ihre Linien, Pfeilspitzen und Texte, als Kanten und Flächen).
- **Dynamische Blöcke** kommen so herein, wie die Zeichnung sie zeigt: jeder platzierte Block im Sichtbarkeitszustand, in dem er gespeichert wurde, und nur die Linien dieses Zustands. Die Statusleiste listet sie mit den angezeigten Zuständen und den übrigen Zuständen jedes Blocks auf, zum Beispiel „Receptacle als Duplex ×38, GFI ×7 angezeigt (Zustände: Duplex, GFI)“. ModelCraft wechselt die Zustände nicht.
- **3D-Volumen, Regionen und Körper** (die ACIS-Daten der Zeichnung) kommen als eigene Gruppen: ein geschlossener Volumenkörper als Volumenkörper, eine Region oder ein offener Körper als Flächen. Ebene Flächen kommen vollständig herein; gekrümmte Flächen (Zylinder, Kegel, Kugeln, Tori, einfache Spline-Flächen) als kleine Dreiecke mit weichen Kanten dazwischen, sodass nur die eigenen Kanten des Volumenkörpers sichtbar sind. Eine Fläche auf einer anderen Art von Oberfläche wird weggelassen und aufgelistet: „Noch nicht gezeichnet (3D-Volumen): …“.
- Nicht importiert: Punkte, Tabellen, Multi-Führungslinien, Bilder und andere Objekttypen. Die Statusleiste listet sie nach Typ auf, etwa „Nicht importiert: 12 POINT.“ Alles, was auf einem Layout (Papierbereich) liegt, wird ebenfalls weggelassen, ohne aufgelistet zu werden.
- Layer werden nicht übernommen: Alle Linien kommen gleich herein.

Liegt die Zeichnung weit von ihrem Ursprung entfernt (z. B. State-Plane-Koordinaten), wird sie trotzdem importiert, kann aber weit vom Ursprung von ModelCraft landen. Zeichnungen, die mehr als 10.000 km von ihrem Ursprung entfernt sind, werden abgelehnt: Verschieben Sie die Zeichnung zuerst im CAD-Programm näher an 0,0.

## In Flächen nachzeichnen

Die importierten Linien schließen sich selten von allein sauber zu Flächen. Es gibt zwei Wege:

**Den Plan als Unterlage behalten (empfohlen)**

1. Lassen Sie den Plan als eigene Gruppe.
2. Zeichnen Sie Ihr Gebäude darüber mit {{ui:Rechteck}} und {{ui:Linie}}, dabei an den Ecken des Plans („Endpunkt“) und Kanten („Auf Kante“) fangen.
3. Ziehen Sie Ihre Flächen mit Drücken/Ziehen hoch. Der Plan bleibt darunter unberührt, und Sie können die ganze Gruppe später mit einem Klick löschen.

Das Fangen funktioniert über Gruppen hinweg: Sie können an den Ecken des Plans fangen, ohne ihn zu öffnen.

**Auf den eigenen Linien des Plans zeichnen**

1. Wählen Sie die Plangruppe und klicken Sie auf {{ui:Zerlegen}}. Ihre Linien werden zu losen Kanten.
2. Wo ein geschlossener Umriss eine Fläche sein sollte, zeichnen Sie mit {{ui:Linie}} eine Linie über eine seiner Kanten, von Ecke zu Ecke. Ist der Umriss geschlossen und eben, füllt sich die Fläche meist. Wenn nicht, suchen Sie nach einer Lücke oder Überlappung im Umriss und zeichnen Sie darüber.
3. Ziehen Sie sie mit Drücken/Ziehen hoch.

Das funktioniert am besten bei einem sauberen Plan. Bei einem unübersichtlichen Vermessungsplan ist das Nachzeichnen darüber schneller.

## Probleme

- „Dies ist eine binäre DXF. Speichern Sie sie als ASCII-DXF und versuchen Sie es erneut.“ Speichern Sie die DXF im CAD-Programm erneut als ASCII (Text).
- „…hat im Modellbereich keine Linien, Bögen oder Kreise zum Importieren.“ Die Zeichnung liegt wahrscheinlich ganz auf Layouts oder besteht nur aus Text und Schraffuren.
- „Diese Zeichnung konnte nicht gelesen werden (…). Sie ist möglicherweise beschädigt oder in einer DWG-Version gespeichert, die der Leser nicht unterstützt…“ Die Klammern sagen den Grund, zum Beispiel „DWG-Version AC1009 wird nicht unterstützt“. Speichern Sie sie im CAD-Programm als DXF oder als DWG von AutoCAD 2000 bis 2018.
- Der Plan hat die falsche Größe: Sie haben die falsche Einheit gewählt. Machen Sie {{key:Mod+Z}} rückgängig und importieren Sie erneut, oder [skalieren](topic:rotate-scale) Sie die Gruppe um den richtigen Faktor (12 zwischen Fuß und Zoll, 25.4 zwischen Zoll und Millimetern).

Um Höhenlinien in Gelände umzuwandeln, das Sie modellieren können, siehe [Gelände](topic:terrain).

## Aus einem Foto einer Handskizze

**Datei › Skizzenfoto importieren…** nimmt ein Foto einer Skizze auf Papier (JPEG, PNG oder TIFF; direkt vom Handy ist in Ordnung) und erstellt dieselbe Art Kanten auf dem Boden. Geben Sie an, welches Papier es ist (oder lassen Sie das Blatt finden, das als A4 angenommen wird), und den Maßstab der Skizze, zum Beispiel 1 : 100. Der Rand des Papiers wird gefunden und das Foto begradigt, die Tinte wird zu Linien und Bögen nachgezeichnet, und jede Stiftfarbe (schwarz, rot, blau, grün) wird zu einer eigenen Gruppe mit einem Tag (**Sketch black**, **Sketch red**, …), alles innerhalb einer Gruppe, die nach dem Foto benannt ist. Es ist ein Rückgängig-Schritt, und alles geschieht auf diesem Computer: Nichts wird irgendwohin gesendet.

Wird kein Papierrand gefunden, wird das ganze Foto als Blatt genommen, und die Statuszeile sagt es. Messen Sie dann etwas, das Sie kennen, und skalieren Sie die Gruppe, wenn sie nicht stimmt. Zeichnen Sie die Linien wie oben in Flächen nach.
