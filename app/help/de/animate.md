---
title: Jede Eigenschaft animieren, als Kurven formen und Clips mischen
summary: Der Arbeitsbereich Animieren setzt Keys für Lage, Drehung und Größe eines Objekts, für Helligkeit, Öffnungswinkel und Farbe einer Lampe, für die Linse und die Shape Keys eines Netzes; Armaturen biegen ein Netz mit Bones und gemalten Gewichten; IK und Abhängigkeiten lassen Bones und Objekte greifen, hinsehen, kopieren, innerhalb von Grenzen bleiben, an anderen hängen oder ihnen folgen; Starrkörper fallen, stapeln sich und kollidieren und werden zu Keys gebacken; Treiber setzen einen Wert aus anderen; die Kurven-Ansicht der Zeitleiste formt jede Änderung mit Bézier-Griffen und Wiederholungen, und ihre Clip-Ansicht speichert Animationen als Aktionen, die Sie erneut platzieren und mischen.
keywords: Physik, Starrkörper, Starrkörper, Simulation, simulieren, fallen lassen, fallen, Schwerkraft, kollidieren, Kollision, stapeln, abprallen, Reibung, backen, gebacken, IK, inverse Kinematik, Abhängigkeit, Abhängigkeiten, hinsehen, Ziel verfolgen, anvisieren, Transformationen kopieren, Lage kopieren, Drehung kopieren, Drehung begrenzen, Grenzen, untergeordnet, Eltern, Pfad folgen, Pfad, Pol, FABRIK, Kette, Armature, Armaturen, Rig, Rigging, Bones, Bone, Skelett, Haut, Skinning, Gewichte, Gewichte malen, Gewichtsmalerei, Vertex-Gruppen, automatische Gewichte, Bone-Heat, Pose, Posenmodus, Dual Quaternion, lineare Mischung, Shape Keys, Shape Key, Morphing, Morphs, Morph-Ziele, Blendshapes, Gesichtsausdruck, Ausdruck, Treiber, Treiber, Ausdrücke, Arbeitsbereich Animieren, animieren, Animation, Keyframe, Key, Keys, Eigenschaft, Eigenschaften, Transformation, Lage, Drehung, Skalierung, Lampe, Licht, Helligkeit, Farbe, Farbe, Linse, Sichtfeld, FOV, Graph-Editor, Kurven, Kurve, Bézier, Griffe, Tangente, Interpolation, Zyklus, Zyklen, Wiederholen, Schleife, Ping-Pong, Versatz, Dope Sheet, Keys auswählen, Rahmenauswahl, Keys kopieren, Keys einfügen, Keys strecken, Keys skalieren, Clips, Aktionen, NLA, mischen, Mischung, Einfluss, Stash
from: 16d8e12f
---

Die [Zeitleiste](topic:animation) bewegt die Kamera sowie ganze Gruppen und Komponenten. Der Arbeitsbereich **Animieren** setzt mehr Keys als das, und die Zeitleiste bekommt zwei weitere Ansichten, um das Gesetzte zu formen und wiederzuverwenden.

## Öffnen

Wählen Sie {{ui:Animieren}} in der Liste der Arbeitsbereiche in der Symbolleiste. Die Zeitleiste öffnet sich unter der Ansicht, die Symbolleiste zeigt die Gruppen von Animieren ({{ui:Keys}}, {{ui:Wiedergabe}}, {{ui:Zeitleiste}}), und der Bereich rechts listet, was Sie am Abspielkopf keyen können.

## Eine Eigenschaft keyen

Der Bereich listet am Abspielkopf:

- **Gewähltes Objekt**: seine {{ui:Platzieren}}, {{ui:Drehung (°)}} und {{ui:Größe}}, jeweils drei Zahlen. Tippen Sie eine Zahl und drücken Sie {{key:Enter}}: Sie wird am Abspielkopf als Key gesetzt, und das Objekt bewegt sich dorthin. Die Raute neben einer Zeile keyt den Wert, wie er jetzt ist; eine gefüllte Raute bedeutet, dass am Abspielkopf bereits ein Key liegt.
- **Lampen**: die {{ui:Helligkeit (lm)}}, der {{ui:Öffnungswinkel (°)}} (Spotlampen) und die {{ui:Farbe}} jeder Lampe.
- **Kamera**: der {{ui:Objektivwinkel (°)}}, für einen Zoom, während sich die Kamera bewegt.

{{ui:Key transform}} (oder {{key:I}}) keyt Lage, Drehung und Größe jeder gewählten Gruppe oder Komponente auf einmal; {{ui:Kamera-Key}} (oder {{key:K}}) keyt die Kamera. Ist {{ui:Auto-Key}} aktiv, erhält eine Gruppe, deren Lage, Drehung und Größe so gekeyt sind, bei jedem Verschieben einen neuen Key.

Drehungen sind drei Winkel, um X, dann Y, dann Z. Eine Drehung über 180° läuft in derselben Richtung weiter (190° bleibt 190°, nicht −170°), sodass ein Rad mehrmals umlaufen kann.

:::tip
Eine Gruppe, die mit {{ui:Auswahl-Key}} auf der Zeitleiste gekeyt wurde, hat Keys für ihre ganze Platzierung. Die Kurven-Schaltfläche an ihrer Zeile macht daraus Kurven für Lage, Drehung und Größe (dieselbe Platzierung bei jedem Key), damit Sie sie in {{ui:Kurven}} formen können.
:::

## Shape Keys (Morphs)

Ein **Shape Key** ist eine andere Form desselben [Netzes](topic:meshes): ein Lächeln auf einem Gesicht, eine Beule an einer Tür, ein gebogenes Blatt. Sein Regler mischt vom Netz, wie es ist (0), zu dieser Form (1); mehrere Keys addieren sich.

1. Wählen Sie im Arbeitsbereich Animieren ein Netz: Der Bereich zeigt seine {{ui:Shape Keys}}.
2. Klicken Sie auf {{ui:Shape Key hinzufügen}}. ModelCraft wechselt in den [Netz-Arbeitsbereich](topic:mesh-edit), in dem der neue Key bearbeitet wird: Punkte verschieben, extrudieren, modellieren. Verwandeln Sie das Netz in die gewünschte Form.
3. Kehren Sie zu {{ui:Animieren}} zurück und klicken Sie auf {{ui:Fertig}}. Das Netz geht in seinen Ausgangszustand zurück, und der Key behält Ihre Änderung.

Ziehen Sie dann den Regler des Keys (oder tippen Sie einen Wert), um ihn einzumischen. Die Raute keyt den Wert am Abspielkopf, sodass ein Key über die Zeit wachsen und verblassen kann; sobald er eine Spur hat, wird ein neuer Wert am Abspielkopf gekeyt. Der Stift bearbeitet die Form des Keys erneut (das Netz zeigt sie vollständig bis {{ui:Fertig}}; {{ui:Abbrechen}} lässt den Key, wie er war), das Auge schaltet den Key aus, der Papierkorb entfernt ihn.

Ein Punkt, den Sie beim Bearbeiten eines Keys hinzufügen, gehört zum Netz selbst: Er bleibt dort, wo Sie ihn gesetzt haben, in jeder Form.

:::note
Shape Keys bewegen das Netz vor seinen [Modifikatoren](topic:modifiers): Ein Unterteilungs-Modifikator glättet die gemischte Form. Gerenderte Bilder und Videos zeigen die Keys in jedem Bild.
:::

## Armaturen: Bones, die ein Netz biegen

Eine **Armature** ist eine Gruppe von Bones in einem [Netz](topic:meshes). Stellen Sie die Bones, folgt das Netz, jeder Punkt so stark, wie seine **Gewichte** es vorgeben.

1. Wählen Sie das Netz im Arbeitsbereich Animieren und klicken Sie im Bereich auf {{ui:Armature hinzufügen}} (oder auf {{ui:Bone hinzufügen}} in der Gruppe {{ui:Rig}}): Der erste Bone läuft von seinem Fuß aus durch die Mitte des Netzes.
2. Mit gewähltem Bone fügt {{ui:Untergeordneten Bone hinzufügen}} den nächsten an seiner Spitze hinzu. Setzen Sie im Bereich {{ui:Kopf}}, {{ui:Spitze}}, {{ui:Roll (°)}} und woran er {{ui:Hängt an}}; ein Bone, der an einem anderen hängt, bewegt sich mit ihm. Entfernen Sie den Haken bei {{ui:Bewegt das Netz}} für einen Bone, der nur andere steuert.
3. Klicken Sie auf {{ui:Automatische Gewichte}}: Jeder Bone greift die Punkte, die ihm am nächsten sind, und der Griff verteilt sich sanft über das Netz, sodass sich die Punkte zwischen zwei Bones beide teilen. {{ui:Nur nächste Bones}} ist eine schnellere, härtere Aufteilung.

**Posieren** Sie die Bones mit {{ui:Pose}} ({{key:P}}): Klicken Sie auf einen Bone, um ihn zu wählen, ziehen Sie, um ihn um die Achse der Ansicht zu drehen, und ziehen Sie mit {{key:Shift}}, um ihn zu verschieben. Oder tragen Sie seine {{ui:Platzieren}}, {{ui:Drehung (°)}} und {{ui:Größe}} unter {{ui:Pose}} ein; Drehungen liegen in den eigenen Achsen des Bones, von seiner Ruhelage aus. Die Rauten und {{ui:Die ganze Pose keyen}} keyen die Pose am Abspielkopf; sobald ein Bone Keys hat, wird beim Posieren dort gekeyt. {{ui:Diesen Bone zurücksetzen}} und {{ui:Pose zurücksetzen}} bringen die Bones in Ruhe zurück.

**Gewichte malen** ({{key:W}}) für den gewählten Bone: Das Netz zeigt sich in Ruhe, jede Fläche ist nach dem Anteil gefärbt, den dieser Bone hält: Rot ganz, Blau gar nicht. Malen Sie, um Halt hinzuzufügen ({{key:Mod}} nimmt ihn weg, {{key:Shift}} glättet); {{ui:Größe (px)}} und {{ui:Stärke}} stellen den Pinsel ein. Mit {{ui:Die Gewichte jedes Punkts auf die Summe 1 halten}} nimmt einem Bone, dem Sie mehr geben, dasselbe von den anderen. Jeder Strich ist ein Schritt im Rückgängig des Modells.

{{ui:Haut}} bestimmt, wie sich ein Punkt zwischen Bones bewegt: {{ui:Linear (schnell)}} mischt die Bewegungen der Bones und quetscht ein geknicktes Gelenk ein wenig. {{ui:Dual Quaternion (erhält das Volumen an Gelenken)}} dreht den Punkt dagegen um das Gelenk, sodass ein Ellbogen oder ein Knie seine Dicke behält (die {{ui:Größe}} eines Bones dehnt die Haut dann nicht).

:::note
Shape Keys kommen zuerst, dann die Armature, dann die [Modifikatoren](topic:modifiers). Ansicht, Bilder und Videos zeigen alle das posierte Netz; die Gewichte eines Netzes werden mit ihm gespeichert, die Bones und ihre Pose mit der Animation.
:::

## IK und Abhängigkeiten

Eine **Abhängigkeit** bewegt einen Bone oder ein Objekt nach seinen Keys, nach einer Regel. Wählen Sie das Objekt (oder im Armature den Bone) und fügen Sie eine unter {{ui:Abhängigkeiten von …}} hinzu. Mehrere laufen in der aufgelisteten Reihenfolge (die Pfeile ändern sie). Jede hat {{ui:Stärke}} (0 bis 1, mit ihrer Raute gekeyt wie jede Eigenschaft) und einen Ein-/Aus-Schalter.

| Abhängigkeit | Für | Was sie tut |
|---|---|---|
| {{ui:Erreichen (IK)}} | Bones | Der Bone und die Bones, an denen er hängt ({{ui:Bones in der Kette}}), beugen sich, sodass seine Spitze das Ziel erreicht. Bei zwei Bones und einem {{ui:Pol (die Beugung zeigt zu ihm)}} zeigt der Ellbogen oder das Knie zum Pol; längere Ketten beugen sich sanft. Außer Reichweite zeigt die Kette gerade auf das Ziel. |
| {{ui:Hinsehen}} | Beide | Dreht sich, sodass die {{ui:Achse, die zeigt}} zum Ziel schaut und die {{ui:Achse, die oben bleibt}} so nah wie möglich oben bleibt. |
| {{ui:Transformationen kopieren}} | Beide | Übernimmt Lage, Drehung oder Größe des Ziels, die angehakten. |
| {{ui:Grenzen}} | Beide | Hält die eigene Lage, Drehung (Grad) oder Größe pro Achse zwischen einem {{ui:Min}} und einem {{ui:Max}}; lassen Sie ein Paar leer, um diese Achse frei zu lassen. |
| {{ui:Untergeordnet zu}} | Beide | Bewegt sich mit dem Ziel, als hinge es daran, von der Stelle aus, an der beide waren, als Sie das Ziel wählten. |
| {{ui:Pfad folgen}} | Objekte | Sitzt auf einem [Kurvenobjekt](topic:curves) bei {{ui:Entlang der Kurve}} (0 ist sein Anfang, 1 sein Ende; keyen Sie es, um zu wandern), und mit {{ui:Entlang der Kurve drehen}} zeigt es entlang der Kurve. |

Ein Ziel ist ein anderes Objekt in der geöffneten Gruppe, ein Bone derselben Armature oder ein {{ui:Ein Punkt}}, den Sie eintippen (der Punkt eines Objekts liegt in den Koordinaten des Modells, der eines Bones in denen seines Netzes). Für ein IK-Bein setzen Sie das Ziel dorthin, wo der Fuß sein soll, und keyen das Ziel; oder keyen Sie {{ui:Stärke}}, um das Bein zwischen den Keys von der Animation an das IK zu übergeben.

:::tip
Ein Objekt, das auf eines hinsieht, das einem Pfad folgt, sieht es auf dem Pfad: ModelCraft ermittelt die Ziele zuerst, unabhängig von der Reihenfolge der Objekte.
:::

## Physik: fallen lassen, stapeln und kollidieren

Lassen Sie Objekte fallen und aneinanderstoßen, und behalten Sie das Ergebnis als Keys.

1. Wählen Sie eine Gruppe, Komponente oder ein Netz und stellen Sie unter {{ui:Physik}} seinen {{ui:Starrkörper}} ein: {{ui:Fällt und kollidiert}} (es bewegt sich) oder {{ui:Bleibt liegen, steht im Weg}} (ein Tisch, eine Wand, eine Rampe). Geben Sie einem fallenden Objekt seine {{ui:Form}}, {{ui:Quader (seine Begrenzung)}} oder {{ui:Kugel (rund um die Begrenzung)}}, dazu seine {{ui:Masse (kg)}}, {{ui:Reibung}} und {{ui:Sprungkraft}} (0 plumpst, 1 springt so hoch zurück).
2. Setzen Sie unter {{ui:Das ganze Modell}} {{ui:Von (s)}} und {{ui:Bis (s)}}, die {{ui:Schwerkraft (m/s², nach unten)}} und ob es {{ui:Ein Boden zum Landen}} gibt (und dessen Höhe).
3. Klicken Sie auf {{ui:Physik backen}} (im Bereich oder in der Gruppe {{ui:Physik}}). Jedes fallende Objekt erhält bei jedem Bild zwischen den beiden Zeiten einen Key für Lage, Drehung und Größe; spielen Sie es wie jede andere Animation ab.

Erneutes Backen ersetzt diese Keys; {{ui:Gebackene Keys entfernen}} nimmt sie wieder weg. Die Objekte beginnen in Ruhe, dort, wo ihre Keys, Kurven und Abhängigkeiten sie bei {{ui:Von (s)}} hinsetzen (eine Bewegung mit Keys davor setzt sich im Fall nicht fort). Mehr {{ui:Schritte pro Bild}} halten hohe Stapel stabiler; die Statusleiste sagt, wenn am Ende noch etwas in Bewegung ist.

:::note
Formen sind Quader und Kugeln rund um die Begrenzung jedes Objekts. Ein Quader berührt mit seinen Ecken, Kantenmitten und Flächenmitten, sodass Quader wie erwartet stapeln und kippen. Stoff, Flüssigkeiten, Gelenke zwischen Objekten und exakte Formen sind nicht umgesetzt.
:::

## Treiber

Ein **Treiber** setzt einen Shape Key aus anderen Dingen statt von Hand: Öffnen Sie den Treiber eines Keys (die Rechner-Schaltfläche), schreiben Sie einen **Ausdruck** und geben Sie jedem Namen darin an, was er liest ({{ui:Liest}}): die Zeit in Sekunden, das Bild, die Lage, Drehung oder Größe eines Objekts entlang X, Y oder Z, die Helligkeit einer Lampe oder einen anderen Shape Key. Zum Beispiel öffnet `clamp(v / 90, 0, 1)` eine Form, während sich eine Tür öffnet, wenn `v` die Drehung der Tür um Z liest.

Ausdrücke verwenden Zahlen, die Namen, `+ - * / % ^` und Klammern sowie die Funktionen `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` mit `pi` und `e`. Ein Fehler wird angezeigt und ändert nichts. Der Regler eines getriebenen Keys zeigt den Wert des Treibers; der Treiber hat Vorrang vor der Spur des Keys, bis Sie ihn entfernen.

## Keys wählen und ändern (Keys-Ansicht)

{{ui:Keys}} zeigt eine Zeile pro Spur: die Kamera, jede bewegte Gruppe und jede Eigenschaft („Lampe 2 · Helligkeit (lm)“; Eigenschafts-Keys sind rund).

- Klicken Sie auf einen Key, um ihn zu wählen. {{key:Shift}}-Klick oder {{key:Mod}}-Klick fügt Keys zur Auswahl hinzu oder entfernt sie. {{key:Shift}}-Ziehen über die Zeilen zieht einen Rahmen, der jeden Key darin hinzufügt.
- Ziehen Sie einen gewählten Key, um alle zu verschieben. {{key:Left}} / {{key:Right}} verschieben sie um ein Bild ({{key:Shift}}: zehn).
- {{key:Mod+C}} kopiert die gewählten Keys, {{key:Mod+V}} fügt sie ab dem Abspielkopf auf denselben Spuren ein (auch ein anderer ModelCraft-Tab kann sie einfügen).
- {{ui:Streckung}} spreizt die gewählten Keys vom Abspielkopf aus um die Zahl daneben (2 = doppelt so weit auseinander; 0.5 zieht sie zusammen).
- Die Übergangsliste legt fest, wie sich jeder gewählte Key weiterbewegt.

## Kurven formen (Kurven-Ansicht)

{{ui:Kurven}} ist ein Graph jeder Zahl über die Zeit: Zeit nach rechts, Wert nach oben. Haken Sie die Kurven an, die in der Liste links angezeigt werden sollen (X, Y und Z sind rot, grün und blau).

- Klicken Sie auf einen Key (ein Quadrat), um ihn zu wählen, {{key:Shift}}-Klick für mehr, oder ziehen Sie einen Rahmen. Ziehen Sie einen gewählten Key, um seine Zeit und seinen Wert zu ändern; bei mehreren gewählten verschiebt das Ziehen sie entlang der Zeit.
- Ein gewählter Key zeigt seine zwei **Griffe**. Ziehen Sie einen, um die Kurve auf dieser Seite zu formen. {{ui:Griffe}} legt fest, wie sie sich verhalten: {{ui:Automatisch}} (eine glatte Kurve durch die Keys um ihn herum), {{ui:Zum nächsten Key zeigend}}, {{ui:Ausgerichtet}} (die beiden bleiben in einer geraden Linie, sodass die Kurve keine Ecke hat) oder {{ui:Frei}}.
- {{ui:Aus den gewählten Keys}} legt fest, wie sich jeder gewählte Key zum nächsten bewegt: {{ui:Kurve (Griffe)}}, {{ui:Glätten}}, {{ui:Gleichmäßig}}, {{ui:Langsam ein und aus}} oder {{ui:Halten}}.
- {{ui:Davor}} und {{ui:Danach}} legen fest, was eine Kurve außerhalb ihrer Keys tut: {{ui:Halten}} (bleibt beim ersten oder letzten Wert), {{ui:Wiederholen}}, {{ui:Hin und zurück}} oder {{ui:Wiederholen und fortsetzen}} (jede Wiederholung beginnt dort, wo die letzte endete: ein Rad rollt weiter, ein Läufer läuft weiter).
- Das Mausrad zoomt ({{key:Mod}}: nur Werte; {{key:Shift}}: nur Zeit). Ziehen Sie mit der mittleren Taste oder mit {{key:Alt}}, um zu schwenken. {{ui:Alles anzeigen}} oder {{key:Home}} passt jede gezeigte Kurve ein. Klicken Sie auf leeren Raum, um den Abspielkopf dorthin zu bewegen. {{key:Delete}} löscht die gewählten Keys.

Griffe werden davon abgehalten, sich in der Zeit zu kreuzen, sodass eine Kurve nie rückwärts läuft.

## Animationen wiederverwenden (Clip-Ansicht)

Ein **Clip** spielt eine gespeicherte Animation (eine **Aktion**) auf der Zeitleiste ab. Clips werden in der Reihenfolge gemischt, die unteren Zeilen liegen über den oberen; die eigenen Spuren der Zeitleiste liegen über jedem Clip.

1. Keyen Sie Gruppen und Lampen wie gewohnt, klicken Sie dann in {{ui:Clips}} auf {{ui:Clip erstellen}} und geben Sie der Aktion einen Namen. Die Spuren werden zur Aktion, und ein Clip spielt sie dort ab, wo sie waren (die Kamera bleibt auf der Zeitleiste).
2. Um sie erneut zu verwenden, wählen Sie die Aktion und klicken Sie auf {{ui:Clip hinzufügen}}: Ein neuer Clip startet am Abspielkopf.
3. Ziehen Sie einen Clip entlang seiner Zeile, um ihn zu verschieben. Klicken Sie darauf, um {{ui:Start (s)}}, {{ui:Geschwindigkeit}} (2 = doppelt so schnell), {{ui:Wiederholungen}}, {{ui:Stärke}} (0 bis 1), {{ui:Mischen}} ({{ui:Ersetzen}} oder {{ui:Obendrauf addieren}} zu den Clips davor), {{ui:Außerhalb des Clips}} (nichts, sein Ende halten oder beide Enden halten) und {{ui:Stummschalten}} einzustellen. Die Pfeile ändern die Reihenfolge; der Papierkorb entfernt ihn (eine Aktion, die kein Clip mehr nutzt, geht mit).

Ein Clip mit weniger als voller {{ui:Stärke}} mischt sich aus dem, was darunter liegt: dem Clip davor oder der Lampe bzw. Lage, wie sie ohne Animation ist.

## Was wo abgespielt wird

| Was | In der Ansicht | In einem gerenderten Video |
|---|---|---|
| Kamera-Keys, Objektivwinkel mit Kamera-Keys | Ja | Ja |
| Lage, Drehung und Größe (Keys, Kurven, Clips) | Ja | Ja |
| Lampenhelligkeit, Öffnungswinkel und Farbe | Ja | Noch nicht: Das Video nutzt die Lampen, wie sie beim Start sind (siehe [was noch nicht umgesetzt ist](topic:not-built-yet)) |
| Objektivwinkel ohne Kamera-Keys | Ja | Noch nicht: Keyen Sie auch die Kamera |
| Shape Keys und Treiber | Ja | Ja |
| Armaturen (posierte Netze) | Ja | Ja |
| IK und Abhängigkeiten | Ja | Ja |
| Gebackene Physik (Keys) | Ja | Ja |

Alles wird in der `.modelcraft`-Datei zusammen mit dem Rest der Animation gespeichert; {{ui:Rückgängig}} und {{ui:Wiederholen}} der Zeitleiste nehmen jedes davon zurück.
