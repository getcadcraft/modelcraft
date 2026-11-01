---
title: Der ModelCraft-Bildschirm
summary: Eine Tour durch Symbolleiste, die Bereiche an beiden Seiten, die 3D-Ansicht und die Statusleiste, mit ihren Namen auf dem Bildschirm.
from: 4a9a4516
keywords: Bildschirm, Layout, Symbolleiste, Bereiche, Gliederung, Objektinfo, Stil, Szenen, Statusleiste, Wertefeld, Einheiten, Oberfläche, Tour
---

Von oben nach unten: die Anwendungsleiste, die Symbolleiste, die drei Spalten (linke Bereiche, 3D-Ansicht, rechte Bereiche) und die Statusleiste.

## Die Anwendungsleiste

Die schmale Leiste ganz oben gehört zu jeder CadCraft-Anwendung. Sie enthält den Namen und die Version der Anwendung, {{ui:Über ModelCraft}}, die Schaltfläche für den Bildschirmmodus und den Schalter {{ui:Papier}} / {{ui:Modell}}.

- {{ui:Papier}} ist das helle und {{ui:Modell}} das dunkle Design. Die 3D-Ansicht passt ihre Farben an; Ihr Modell ändert sich nicht.
- Die Schaltfläche für den Bildschirmmodus (zuerst mit {{ui:Vollbild}} beschriftet) und {{key:Ctrl+Shift+F}} schalten durch drei Modi: normal, Vollbild und Vollbild mit ausgeblendeten Leisten. Bei ausgeblendeten Leisten zeigen Sie auf den oberen Bildschirmrand (oder tippen darauf), um sie zurückzuholen. {{key:Esc}} beendet den Vollbildmodus.

:::note
{{key:Ctrl+Shift+F}} verwendet auf jedem Computer die Taste Control, auch auf einem Mac. Auf dem iPhone, wo Browser keinen Vollbildmodus haben, blendet die Schaltfläche die Leisten nur aus und ein.
:::

## Die Symbolleiste

Die Symbolleiste ist in beschriftete Gruppen unterteilt. Zeigen Sie auf eine Schaltfläche, um ihren Namen und ihre Taste zu sehen.

Links bestimmt die Liste {{ui:Arbeitsbereich}}, wofür Symbolleiste und rechter Bereich da sind: {{ui:Modell}} (Drücken/Ziehen-Modellierung, die Tour unten), {{ui:Netz}} ([ein Netz bearbeiten](topic:mesh-edit)), {{ui:Kurve}} ([Kurvenobjekte](topic:curves)), {{ui:UV}} ([UVs anordnen](topic:uv)), {{ui:Bildhauen}} ([Bildhauen](topic:sculpt)), {{ui:Shading}} ([Materialien mit Knoten](topic:shading)), {{ui:Animieren}} ([animieren](topic:animate)) und {{ui:Rendern}} ([in der Ansicht rendern](topic:render#render-in-the-view)).

| Gruppe | Schaltflächen |
|---|---|
| Datei | {{ui:Neu}}, {{ui:Öffnen}}, {{ui:Speichern}}, {{ui:Importieren}}, {{ui:Exportieren}} (ein Menü mit Formaten) |
| Zeichnen | {{ui:Linie}} ({{key:L}}), {{ui:Rechteck}} ({{key:R}}), {{ui:Kreis}} ({{key:C}}), {{ui:Polygon}} ({{key:N}}) |
| Ändern | {{ui:Wählen}} ({{key:Space}}), {{ui:Drücken/Ziehen}} ({{key:P}}), {{ui:Verschieben}} ({{key:M}}), {{ui:Drehen}} ({{key:Q}}), {{ui:Skalieren}} ({{key:S}}), {{ui:Radierer}} ({{key:E}}), {{ui:Maßband}} ({{key:T}}) |
| Organisieren | {{ui:Komponente}} ({{key:G}}), {{ui:Gruppe}} ({{key:Shift+G}}), {{ui:Zerlegen}} |
| Bearbeiten | {{ui:Rückgängig}} ({{key:Mod+Z}}), {{ui:Wiederholen}} ({{key:Mod+Y}}), {{ui:Kopieren}} ({{key:Mod+C}}), {{ui:Einfügen}} ({{key:Mod+V}}), {{ui:Mehr}} (ein Menü: Ausschneiden, Kopieren, Einfügen, An gleicher Position einfügen {{key:Mod+Shift+V}}, Duplizieren {{key:Mod+D}}, Löschen, Alles auswählen, Auswahl aufheben und der Tastenstil) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Pan}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Grenzen}} ({{key:Shift+Z}}), {{ui:Ansichten}} (ein Menü) |

Die angezeigten Tasten sind die des Stils Drücken/Ziehen; ist in den [ModelCraft-Einstellungen](topic:settings) der Stil Modellierer gewählt, zeigen die Kurzinfos stattdessen dessen Tasten. Das Werkzeug, das Sie gerade verwenden, wird gedrückt dargestellt. Auf einem schmalen Bildschirm scrollt die Symbolleiste seitwärts.

Das Menü {{ui:Ansichten}} enthält {{ui:Iso}}, {{ui:Oben}}, {{ui:Vorne}}, {{ui:Rechts}}, {{ui:Hinten}}, {{ui:Links}} und {{ui:Unten}}, jeweils auf das Modell eingepasst, sowie {{ui:Perspektive}}, das zwischen perspektivischer und paralleler Projektion umschaltet.

## Die 3D-Ansicht

Die Bildschirmmitte. Die roten, grünen und blauen Linien sind die Achsen: Rot und Grün liegen auf dem Boden, Blau zeigt nach oben, und **Norden ist die grüne Achse**. Wo sie sich treffen, ist der Ursprung.

- Beim Start listet eine Karte mit dem Titel „Modellieren beginnen“ die ersten Tasten auf. Sie verschwindet, wenn Sie ein Zeichenwerkzeug wählen oder in die Ansicht klicken.
- Während ein Werkzeug arbeitet, zeigt die Ansicht **Ableitungsmarkierungen**: kleine farbige Formen dort, wo der Zeiger einrastet (ein grüner Kreis an einem Endpunkt, ein türkisfarbener an einem Mittelpunkt, ein rotes Quadrat auf einer Kante, eine blaue Raute auf einer Fläche). Siehe [Ableitung und Fang](topic:inference).
- Ausgewählte Dinge werden blau. Eine von hinten gesehene Fläche ist blaugrau.
- Wenn Sie eine Gruppe zum Bearbeiten öffnen, wird alles außerhalb ausgeblendet, und die Achsen wechseln zu den eigenen Achsen der Gruppe.
- Hat ein Modell Szenen, erscheint am oberen Rand der Ansicht eine Reihe von Szenenregistern.
- Ziehen Sie eine Datei irgendwo auf die Ansicht, um sie zu öffnen oder zu importieren.

## Die linken Bereiche

**{{ui:Gliederung}}** listet die Gruppen und Komponenten im Modell auf, so verschachtelt, wie sie im Modell verschachtelt sind. Eine mehrfach verwendete Komponente zeigt, wie oft, etwa „Fenster (4)“.

- Klicken Sie auf einen Namen, um ihn auszuwählen. Doppelklicken Sie, um ihn zum Bearbeiten zu öffnen.
- **Nach Namen suchen** (erscheint, sobald es zwei oder mehr Gruppen gibt) behält nur die Zeilen, deren Name passt, samt den Gruppen, in denen sie liegen. {{key:Esc}} hebt es auf.
- Das **Auge** am Zeilenende blendet diese Gruppe oder Komponente aus oder ein (wie {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Ausblenden}}). Ein Tag-Symbol bedeutet, dass sie durch ihren [Tag](topic:tags) ausgeblendet ist.
- **Direkt umbenennen:** Klicken Sie auf eine Zeile, drücken Sie {{key:F2}}, tippen Sie und drücken Sie {{key:Enter}} ({{key:Esc}} behält den alten Namen).
- **Eine Zeile ziehen:** Auf die Mitte der Zeile einer anderen Gruppe gezogen, wandert sie in diese Gruppe; auf den oberen oder unteren Rand einer Zeile gezogen, kommt sie direkt vor oder hinter diese Zeile; auf die Überschrift {{ui:Gliederung}} gezogen, wandert sie auf die oberste Ebene. Im Modell bleibt sie, wo sie ist, und behält Farbe, Tag und Namen. Eine Gruppe kann nicht in sich selbst verschoben werden. Jedes Verschieben ist ein Rückgängig-Schritt. Siehe [In der Gliederung umordnen](topic:groups-components#rearrange-in-the-outliner).
- Solange Sie in einer Gruppe bearbeiten, steht dort eine Zeile „Bearbeiten: Modell › …“, und eine Schaltfläche {{ui:Gruppe schließen}} erscheint. Sie schließt alle geöffneten Ebenen auf einmal.

**{{ui:Komponenten}}** listet jede Komponentendefinition auf, mit der Zahl der platzierten Kopien („3×“) und einer Schaltfläche {{ui:Platzieren}}, die eine weitere Kopie dort einfügt, wo Sie klicken.

## Die rechten Bereiche

**{{ui:Objektinfo}}** beschreibt, was ausgewählt ist. Die Überschrift ändert sich und nennt, was es ist:

| Überschrift | Zeigt | Schaltflächen |
|---|---|---|
| Modell (nichts ausgewählt) | Flächen, Kanten, Gruppen, Komponenten und wie viele platziert sind, Hilfslinien, Gesamtgröße | {{ui:Alle Hilfslinien löschen}} (wenn es Hilfslinien gibt) |
| Fläche | Flächeninhalt, Anzahl der Löcher | {{ui:Fläche umkehren}} |
| Kante | Länge | keine |
| Gruppe oder Komponente | Name (zum Umbenennen tippen), wie oft sie platziert ist, ob sie ein geschlossener Volumenkörper ist, ihr Volumen, ihre Größe | {{ui:Bearbeiten}}, {{ui:Zerlegen}}, {{ui:Eindeutig machen}} (eine mehrfach platzierte Komponente), {{ui:Komponente erstellen}} (eine Gruppe) |
| Hilfspunkt oder Hilfslinie | nichts | {{ui:Löschen}} |
| Mehrere Dinge | Wie viele Flächen, Kanten, Gruppen und Hilfslinien, der Gesamtflächeninhalt der Flächen | {{ui:Komponente erstellen (G)}}, {{ui:Gruppe erstellen (Shift+G)}} |

**{{ui:Stil}}** legt fest, wie das Modell gezeichnet wird: {{ui:Flächen}} ({{ui:Schattiert}}, {{ui:Verdeckte Linien}}, {{ui:Drahtmodell}}, {{ui:Röntgen}}), {{ui:Kanten anzeigen}} und {{ui:Sonnenschatten}} mit Datum, Uhrzeit und Ort der Sonne. Siehe [Stile und Sonnenschatten](topic:styles-shadows).

**{{ui:Szenen}}** speichert Ansichten: {{ui:Szene hinzufügen}}, die Liste der Szenen sowie {{ui:Zurück}}, {{ui:Wiedergabe}} und {{ui:Weiter}}. Siehe [Ansichten als Szenen speichern](topic:scenes).

## Die Statusleiste

Unten, von links nach rechts:

1. **Der Tipp**: was das Werkzeug als Nächstes braucht oder worauf der Zeiger gerade einrastet („Endpunkt“, „Auf roter Achse“).
2. **Meldungen**: was gerade geschehen ist („Drücken/Ziehen rückgängig gemacht.“, „site.dxf importiert: 1697 Kanten auf dem Boden, in einer Gruppe.“) oder warum etwas nicht funktioniert hat.
3. **Das Wertefeld**: Seine Beschriftung ändert sich mit dem Werkzeug ({{ui:Länge}}, {{ui:Maße}}, {{ui:Radius}}, {{ui:Seiten}}, {{ui:Abstand}}, {{ui:Winkel}}, {{ui:Maßstab}}, {{ui:Versatz}}). Es zeigt die aktuelle Größe während der Arbeit und nimmt Ihre Eingabe entgegen. Siehe [Exakte Maße im Wertefeld eingeben](topic:value-box).
4. **Der Tastenstil**: {{ui:Tasten: Drücken/Ziehen}} oder {{ui:Tasten: Modellierer}} schaltet Tastenkürzel und Maustasten auf einmal um (wie in den [ModelCraft-Einstellungen](topic:settings)).
5. **{{ui:Fang}} und {{ui:Kollision}}**: Einrasten an Punkten, Kanten und Achsen sowie Körper, die dort anhalten, wo sie sich berühren. Durchgestrichen = aus. Zum Umschalten klicken. Siehe [ModelCraft-Einstellungen](topic:settings).
6. **Die Einheitenauswahl**: die Einheit, in der Längen angezeigt werden. Siehe [Erste Schritte](topic:getting-started#check-the-units-first).

## Auf einem schmalen Bildschirm

Unterhalb von etwa 760 Pixeln Breite (ein Telefon oder ein schmales Fenster) behält die 3D-Ansicht den Bildschirm. Die Symbolleiste ist eine Zeile, die seitwärts scrollt, und die Bereiche öffnen sich als Blätter aus der Leiste am unteren Bildschirmrand.
