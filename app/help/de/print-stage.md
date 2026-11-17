---
title: Objekte auf das Druckbett legen und an einen Drucker senden
summary: Bibliothekselemente oder Ihr eigenes Modell auf das Druckbett Ihres Druckers legen, anordnen, die berechneten Schichten durchsehen und den Druck per USB oder Netzwerk senden oder den G-Code speichern, ohne vorher eine STL-Datei zu exportieren.
keywords: Druckbereich, 3D-Druck, Drucker, Druckbett, an 3D-Drucker senden, Slicer, G-Code, gcode, USB, Klipper, Moonraker, OctoPrint, PrusaLink, Bibliothek, anordnen, alles einpassen, Schichtvorschau, Füllung, Stützen, Filament, PLA, PETG, Add-on, 3D-Druck-Add-on
from: abcf5d7e
---

Der {{ui:Druckbereich}} verteilt Objekte auf dem Druckbett Ihres Druckers, berechnet ihre Schichten und sendet sie an den Drucker. Eine Datei müssen Sie vorher nicht exportieren. Er gehört zum 3D-Druck-Add-on, das standardmäßig aktiviert ist.

:::note
Damit wurde noch nichts auf einem echten Drucker gedruckt. Der Slicer ist neu: Beobachten Sie die ersten Schichten Ihres ersten Drucks und nutzen Sie die Schichtvorschau, bevor Sie senden.
:::

## Was Sie tun

Sie legen ein Modell auf das Druckbett, prüfen, ob es passt, sehen sich die berechneten Schichten an und senden es an einen Drucker oder speichern den G-Code.

## Schritte

1. Klicken Sie in der Symbolleiste auf {{ui:Druckbereich}}. Eine Karte öffnet sich über der Ansicht, und ein gestrichelter Umriss zeigt Ihr Druckbett.
2. Geben Sie unter **Aus der Bibliothek hinzufügen** einen Namen ins Suchfeld ein, drücken Sie {{ui:Suchen}} und bei einem Ergebnis {{ui:Hinzufügen}}. Das Element landet in Originalgröße auf dem Druckbett oder wird passend verkleinert. Alles, was Sie bereits gezeichnet oder importiert haben und in der Ansicht sehen, liegt ebenfalls auf dem Druckbett.
3. Prüfen Sie unter **Auf dem Druckbett** die Größe jedes Elements. Ein Element mit der Markierung **Außerhalb des Druckbetts** muss verschoben werden. Verschieben, drehen und skalieren Sie Objekte in der Ansicht mit den üblichen Werkzeugen.
4. Drücken Sie {{ui:Auf dem Druckbett anordnen}}, um die Elemente zu verteilen, oder {{ui:Alle auf das Druckbett einpassen}}, um sie so weit zu verkleinern, bis sie passen.
5. Wählen Sie unter **Ihr Drucker** die Größe des **Druckbetts** oder eines der Druckerprofile.
6. Wählen Sie unter **Druckeinstellungen** das **Material**, die **Qualität** und den **Füllgrad %** und aktivieren Sie **Stützen unter Überhängen hinzufügen**, wenn die Form sie braucht.
7. Drücken Sie {{ui:Schichtvorschau}} und bewegen Sie den Schieberegler **Schicht**, um die berechneten Schichten durchzusehen. Ändern Sie danach den Druckbereich oder die Einstellungen, drücken Sie {{ui:Schichtvorschau}} erneut.
8. Wählen Sie unter **Verbindung** {{ui:USB-Kabel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} oder {{ui:PrusaLink}}. Bei USB drücken Sie {{ui:Verbinden}}. Bei einem Netzwerkdrucker geben Sie seine **Adresse** ein (und den **API-Schlüssel**, falls abgefragt) und drücken dann {{ui:Verbindung testen}}.
9. Drücken Sie {{ui:An 3D-Drucker senden}}. Die Karte fragt, ob das Druckbett frei ist und das richtige Material eingelegt ist, und zeigt Zeit, Material und Temperaturen. Bestätigen Sie, um zu senden.

Sie erhalten eine Meldung, dass der Drucker startet. {{ui:Druck stoppen}} schaltet Heizungen, Lüfter und Motoren aus. Wenn Sie nur eine Datei möchten, drücken Sie {{ui:G-Code stattdessen speichern}}.

## Hinweise

- USB braucht Chrome oder Edge auf einem Computer, und die Seite muss bis zum Ende des Drucks geöffnet bleiben. Wird sie geschlossen, bricht der Datenstrom ab.
- Ein Netzwerkdrucker muss diese Seite zulassen (in Moonraker tragen Sie sie in `cors_domains` ein; in OctoPrint aktivieren Sie CORS und kopieren einen API-Schlüssel). Ihr Browser fragt möglicherweise, ob er auf Geräte in Ihrem Netzwerk zugreifen darf.
- Ohne Ihren Klick wird nichts verbunden oder gesendet.
- Die Slicer-Liste steht unter **Slicer**. {{ui:CadCraft Basis (enthalten, am schnellsten)}} ist eingebaut. Kiri:Moto, PrusaSlicer, OrcaSlicer und der Bambu Lab P2S sind eigene Add-ons, die Sie auf der Karte oder unter {{ui:Einstellungen}} › {{ui:Add-ons}} einschalten. PrusaSlicer und OrcaSlicer verwenden Ihre eigene Kopie und arbeiten auf einem Computer mit CadCraft Studio.
- Teile, die keine geschlossenen Volumenkörper sind, bleiben außen vor, und die Karte zeigt an, wie viel der Form das ist.
- Für Harzdrucker siehe [Für einen Harzdrucker slicen](topic:resin-printing). Um ein Modell vorab zu prüfen oder zu reparieren, siehe [Stützen, Wandstärke, Aushöhlen und Reparieren](topic:print-tools).
