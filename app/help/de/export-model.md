---
title: Ein Modell für andere Programme exportieren
summary: Den richtigen Export für Rendern, das Web, 3D-Druck, BIM und BimCraft wählen und prüfen, was jeder davon behält.
keywords: drucken, 3MF, PDF, Papier, Bild, PNG, Foto, Bildschirmfoto, Ansicht speichern, exportieren, teilen, rendern, Rendering, glTF, GLB, Collada, DAE, OBJ, STL, 3D-Druck, IFC, BIM, BimCraft, senden, andere Software
from: 9e13e80d
---

Exportieren erstellt eine Kopie des Modells in einem anderen Format. Bewahren Sie auch Ihre `.modelcraft`-Datei auf: Sie ist die einzige Datei, die alles behält, und die einzige, die ModelCraft direkt öffnet.

## Exportieren

1. Speichern Sie zuerst ({{key:Mod+S}}), damit Ihre Arbeitsdatei sicher ist.
2. Klicken Sie in der Gruppe {{ui:Datei}} auf {{ui:Exportieren}}.
3. Wählen Sie das Format. Der Browser lädt es herunter, benannt wie das Modell.

Das gesamte Modell wird exportiert. Um nur einen Teil zu exportieren, speichern Sie, löschen Sie den Rest, exportieren und machen dann rückgängig oder öffnen die Datei erneut.

## Welches Format

| Sie wollen | Wählen | Hinweise |
|---|---|---|
| In einem anderen 3D-Modellierer öffnen | {{ui:Collada (.dae)}} | Behält Gruppen, verschachtelte Gruppen, Komponenten (gemeinsam, nicht kopiert), Namen und Farben. Z nach oben, Meter. |
| Rendern oder in einem Visualisierungsprogramm verwenden | {{ui:OBJ (.obj)}} oder {{ui:glTF binär (.glb)}} | OBJ wird am weitesten gelesen; es schreibt jede Gruppenplatzierung als eigenes Objekt, hat aber keine Farben und keine gemeinsamen Komponenten. glTF behält Komponenten und Farben. |
| Ins Web, in eine Game-Engine oder in AR bringen | {{ui:glTF binär (.glb)}} | Eine Datei mit allem darin. |
| Im 3D-Druck ausgeben | {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}} | Prüft, ob das Modell geschlossen ist und die richtige Richtung hat, und schreibt dann STL oder 3MF in Millimetern. Siehe [Ein Modell für den 3D-Druck vorbereiten](topic:print-3d). {{ui:STL für den Druck (.stl, Millimeter)}} schreibt das gesamte Modell ohne die Prüfung. |
| In BimCraft oder einem anderen BIM-Programm öffnen | {{ui:IFC für BimCraft (.ifc)}} | Jede oberste Gruppe oder Komponente wird zu einem Bauteil. |

Die Statusleiste bestätigt jeden Export, zum Beispiel „House.stl exportiert (Millimeter).“ oder „House.dae exportiert (Collada 1.4.1, Z nach oben, Meter; Komponenten bleiben gemeinsam).“

## Vor dem Exportieren

- **Gruppieren Sie Ihre Objekte.** Collada, glTF und IFC behalten Gruppen und Komponenten als getrennte Objekte. Lose Geometrie wird als ein einziger Klumpen ausgegeben; in IFC wird sie zu einem Bauteil namens „Lose Geometrie“.
- **Benennen Sie sie.** Namen von Gruppen und Komponenten gehen in Collada und IFC ein, sodass eine Wand namens „North wall“ als „North wall“ ankommt.
- **Prüfen Sie die Flächenrichtung.** Flächen, die außen blaugrau erscheinen, zeigen im Export nach innen. Korrigieren Sie sie mit {{ui:Fläche umkehren}} (siehe [Löschen und aufräumen](topic:erase#a-face-facing-the-wrong-way)).
- **Für den Druck** machen Sie die Teile zu geschlossenen Volumenkörpern: Wählen Sie jede Gruppe aus und prüfen Sie, ob {{ui:Objektinfo}} „Volumenkörper: Ja“ anzeigt. Skalieren Sie das Modell dann auf die gedruckte Größe oder in der Druckersoftware.

## Ein Modell an BimCraft senden

1. Machen Sie jeden Gebäudeteil zu einer Gruppe oder Komponente und benennen Sie ihn.
2. Wählen Sie {{ui:Exportieren}} und dann {{ui:IFC für BimCraft (.ifc)}}.
3. Öffnen Sie die heruntergeladene `.ifc`-Datei in BimCraft.

Für eine Konzeptstudie verwenden Sie stattdessen {{ui:Exportieren}} › {{ui:Baukörper an BimCraft…}}: Jede Gruppe geht als Baukörper-Option mit Geschossen, Geschossflächen und Volumen. Siehe [Baukörper an BimCraft senden](topic:massing-to-bimcraft).

Der einfache IFC-Export hat keine direkte Verbindung zwischen den beiden Apps. Die IFC hat ein Geschoss, und jedes Element ist ein generischer Bauteil-Proxy ohne Typ oder Eigenschaften: Er trägt nur Form und Namen. Geschlossene Gruppen werden zu Volumenkörpern, offene zu Flächen.

## Linien ohne Flächen

Kanten, die zu keiner Fläche gehören (führungsartige Linien, ein importierter Lageplan), gehen als Linien in OBJ und Collada. glTF und STL haben dafür keinen Platz und lassen sie weg. Hilfslinien und Szenen werden in kein Format exportiert.

## Die Ansicht als Bild speichern

{{ui:Exportieren}} › {{ui:Bild der Ansicht (.png)}} speichert genau das, was die 3D-Ansicht zeigt, in ihrer Größe auf dem Bildschirm. {{ui:Bild in doppelter Größe (.png)}} speichert es doppelt so breit und doppelt so hoch (für den Druck oder eine scharfe Folie). Bemaßungen und Markierungen werden in dieser Größe neu gezeichnet, statt gestreckt zu werden.

Für ein Bild, das wie Tageslicht aussieht (Himmel, Sonne, weiche Schatten, Glas), verwenden Sie stattdessen {{ui:Exportieren}} › {{ui:Bild rendern…}}: siehe [Ein Bild rendern](topic:render).

Für ein sauberes Bild schalten Sie zuerst die [Präsentationsansicht](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) ein: Achsen, Hilfslinien, Schnittumrisse und die Auswahl werden weggelassen. Stellen Sie Kamera, Stil und Schatten wie gewünscht ein oder gehen Sie zu einer [Szene](topic:scenes). Um einen bewegten Film Ihrer Szenen zu speichern, verwenden Sie {{ui:Animation exportieren}} im Bereich {{ui:Szenen}}.

## Die Ansicht drucken oder als PDF speichern

- {{ui:Exportieren}} › {{ui:PDF der Ansicht (.pdf)}} speichert ein einseitiges PDF: die Ansicht in doppelter Bildschirmgröße mit ihren Bemaßungen, auf einer A4-Seite (Letter, wenn das Modell in Fuß und Zoll ist), im Querformat, mit einer Zeile darunter, die Dateinamen, Datum und Einheit angibt.
- {{ui:Exportieren}} › {{ui:Ansicht drucken…}} legt dieselbe Seite in den Druckdialog Ihres Browsers. Wählen Sie einen Drucker oder „Als PDF speichern“.

Die Seite zeigt die Ansicht so, wie sie ist: Bei einer Perspektivansicht gibt es keinen Maßstab. Für eine maßstäbliche Zeichnung schalten Sie {{ui:Perspektive}} aus, sehen von {{ui:Oben}} oder {{ui:Vorne}} auf das Modell und fügen [Bemaßungen](topic:dimensions) für die wichtigen Maße hinzu. Die [Präsentationsansicht](topic:styles-shadows#presentation-view) lässt Achsen, Hilfslinien und die Auswahl weg; Bemaßungen bleiben.
