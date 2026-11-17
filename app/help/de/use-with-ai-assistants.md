---
title: ModelCraft mit einem KI-Assistenten verwenden
summary: Lassen Sie Ihren eigenen KI-Assistenten oder ein Skript das Modell ansehen und einfache Volumenkörper erstellen: Berechtigungen, Verbindung über CadCraft Studio und das Aktivitätsprotokoll.
keywords: ki, assistent, agent, mcp, model context protocol, skript, automatisierung, modellierung, quader, zylinder, rendern, renderwarteschlange, berechtigungen, trennen, aktivität
from: 629cd0b7
---

## Was Sie hier lernen

Wie Sie einen KI-Assistenten (oder ein selbst geschriebenes Skript) mit ModelCraft arbeiten lassen und festlegen, worauf er zugreifen darf.

ModelCraft hat **keine eigene KI** und sendet nichts irgendwohin. Sie bringen den Assistenten mit: jedes Programm, das das Model Context Protocol (MCP) unterstützt. ModelCraft stellt ihm nur Werkzeuge zur Verfügung, und Sie wählen aus, welche.

## Einschalten

1. Öffnen Sie {{ui:Einstellungen}} (das Zahnrad in der App-Leiste oder {{key:Mod+,}}) und wechseln Sie zur Registerkarte {{ui:ModelCraft}}.
2. Aktivieren Sie unter {{ui:Assistenten}} das Kontrollkästchen **KI-Assistenten und Skripte dürfen ModelCraft verwenden**. Es bleibt aus, bis Sie es aktivieren.
3. Legen Sie fest, was er tun darf: **Lesen** ist zu Beginn aktiviert; aktivieren Sie **Bearbeiten**, **Speichern** oder **Exportieren** nur, wenn Sie sie brauchen.

Werkzeuge außerhalb der von Ihnen aktivierten Berechtigungen werden dem Assistenten nicht angeboten. Fragt er trotzdem danach, lehnt ModelCraft ab und schreibt es in das Aktivitätsprotokoll. Wenn Sie den Schalter ausschalten, werden alle Verbindungen sofort beendet; {{ui:ModelCraft-Einstellungen zurücksetzen}} schaltet ihn ebenfalls aus.

## Assistenten verbinden

Assistenten verbinden sich über **CadCraft Studio** auf Ihrem Computer: Studio startet einen kleinen Server, den nur dieser Computer erreichen kann, geschützt durch ein Token, das bei jedem Start neu erzeugt wird. Wählen Sie in Studio {{ui:Assistent verbinden}} und kopieren Sie die Adresse und das Token in Ihren Assistenten (Studio zeigt die genauen Einstellungen, die Sie einfügen müssen). Geben Sie das Token niemals weiter.

:::note
Ein Browser-Tab kann keine Verbindung für einen Assistenten öffnen: In den Browser-Apps hat der Schalter keine Wirkung, bis Sie CadCraft Studio auf Ihrem Computer verwenden.
:::

## Sie behalten die Kontrolle

- **Jede Änderung ist ein Rückgängig-Schritt**, benannt mit dem Namen, den der Assistent ihr gibt (zum Beispiel „Assistent: Quader“). {{key:Mod+Z}} nimmt die letzte Änderung des Assistenten als Ganzes zurück.
- **Sie wissen, wenn einer verbunden ist.** Eine Schaltfläche in der App-Leiste nennt den Assistenten, solange er verbunden ist; klicken Sie darauf, um zu sehen, was er darf, oder um ihn zu **Trennen**.
- **Aktivität.** {{ui:Einstellungen}} › {{ui:ModelCraft}} › {{ui:Assistenten}} › {{ui:Aktivität}} listet jeden Aufruf auf: wann, welches Werkzeug, erledigt oder abgelehnt. {{ui:Protokoll speichern}} behält eine Kopie.

## Was ein Assistent anfordern kann

| Werkzeug | Berechtigung | Was es tut |
|---|---|---|
| `app_info`, `model_describe` | Lesen | Die Einheit und Größe des Modells sowie jede Gruppe und Komponente mit ihrer Position, ob sie ein geschlossener Volumenkörper ist, und ihr Volumen |
| `view_screenshot` | Lesen | Ein Bild der 3D-Ansicht, so wie sie angezeigt wird |
| `box_add`, `cylinder_add` | Bearbeiten | Ein Quader oder ein Zylinder als neue Gruppe, an einem Ort und mit einer Größe, die Sie oder der Assistent angeben („3m“, „10'“ oder eine Zahl in der Einheit des Modells) |
| `instance_move`, `instances_erase` | Bearbeiten | Verschiebt oder löscht Gruppen und Komponenten |
| `faces_list`, `materials_list` | Lesen | Die Flächen einer Gruppe oder der losen Geometrie (jeweils Richtung, Fläche und Mittelpunkt); die Materialien und Farben, mit denen sie malen kann |
| `push_pull` | Bearbeiten | Drückt oder zieht eine Fläche, so wie {{ui:Drücken/Ziehen}} es tut |
| `paint` | Bearbeiten | Malt Flächen oder eine ganze Gruppe mit einer Farbe oder einem Material |
| `group_make` | Bearbeiten | Bildet eine Gruppe oder eine Komponente aus losen Flächen und Gruppen |
| `scene_add`, `scene_show` | Bearbeiten | Speichert die Ansicht als Szene; wechselt zu einer gespeicherten Szene |
| `mesh_add` | Bearbeiten | Ein Netzobjekt als Ausgangspunkt (Würfel, Kugel, Zylinder …), so wie der Arbeitsbereich {{ui:Netz}} es hinzufügt |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lesen / Bearbeiten | Der Modifikatorenstapel eines Netzes: Spiegeln, Anordnung, Unterteilung, Fase und die übrigen; nichts wird endgültig angewendet |
| `usd_export` | Exportieren | Das Modell als OpenUSD (.usda, .usdc oder .usdz), so wie das Speichern des Modells als USD es schreibt ([USD](topic:usd)); in einen Ordner, den Sie in Studio erlaubt haben, sonst als Download |
| `render_still` | Exportieren | Ein gerendertes Bild der Ansicht oder einer gespeicherten Szene, so wie die Schaltfläche {{ui:Rendern}} im Dialog {{ui:Rendern}} es erzeugt, mit Ihren Render-Einstellungen, sofern es keine anderen verlangt (eine Szenenvorgabe: Außen, Innen, Schnitt, Nacht oder Auto; schnell oder hohe Qualität, Größe, Samples, Himmel); ein PNG, das es ansehen kann, oder eine PNG-, EXR- oder Renderdatei in einem Ordner, den Sie in Studio erlaubt haben ([Ein Bild rendern](topic:render)) |
| `render_queue` | Exportieren | Fügt Bilder in hoher Qualität zum Dialog {{ui:Rendern}} hinzu (die Ansicht oder gespeicherte Szenen) und führt die Warteschlange aus; die fertigen Bilder gehen in einen Ordner, den Sie erlaubt haben, oder bleiben für Sie in der {{ui:Renderwarteschlange}} des Dialogs Rendern. Benötigt WebGPU |
| `link_push` | Bearbeiten | Aktualisiert ein Modell, das aus einem anderen Programm verknüpft ist (siehe [Ein .3dm-Modell live halten](topic:live-3dm-link)) |
| `link_status` | Lesen | Sagt, ob ein verknüpftes Modell noch vorhanden ist und wann es zuletzt aktualisiert wurde |
| `undo` | Bearbeiten | Nimmt die eigenen Schritte zurück |

Volumenkörper, die ein Assistent erstellt, kommen als Gruppen an, sie verschmelzen also nie mit dem, was Sie gezeichnet haben. Es gibt kein Werkzeug, das das Modell speichert: Speichern bleibt Ihnen überlassen, und Exportieren oder Rendern erfordert, dass **Exportieren** aktiviert ist. Ein Rendering ändert nichts am Modell; das Rendern einer gespeicherten Szene verschiebt die Ansicht dorthin, so wie {{ui:Szenen}} es tut.

## Wenn etwas nicht funktioniert

- **Der Assistent sieht keine ModelCraft-Werkzeuge:** Prüfen Sie, ob der Schalter in diesem Fenster eingeschaltet ist und ob das Fenster in Studio geöffnet ist.
- **„Bearbeitungsberechtigung erforderlich“:** Aktivieren Sie unter {{ui:Assistenten}} **Bearbeiten** und fragen Sie dann erneut.
- **Fehler „401“ oder „Token“:** Das Token hat sich geändert (Studio wurde neu gestartet, oder {{ui:Neues Token}}). Kopieren Sie das neue Token in die Einstellungen des Assistenten.

## Siehe auch

- [Rezepte für KI-Assistenten](common:assistants-recipes): ausgearbeitete Beispiele, jeweils mit den Werkzeugen, die sie aufrufen.
