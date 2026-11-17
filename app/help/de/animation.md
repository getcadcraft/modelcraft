---
title: Kamera und Objekte animieren und ein Video rendern
summary: Keys für die Kamera sowie für Gruppen und Komponenten auf einer Zeitleiste setzen, sie in der Ansicht abspielen und die Animation mit Himmel, Sonne und Materialien des Renderers als WebM-Video rendern.
keywords: Animation, animieren, Zeitleiste, Keyframe, Keys, Key-Bild, Kameraweg, Durchflug, durch das Modell fliegen, Rundgang, durch das Modell gehen, Video, Film, WebM, Video rendern, Bilder, Bildrate, FPS, Abspielkopf, Auto-Key, Glätten, Halten, Szenen, PNG-Folge, Bewegung
from: d3a58249
---

Die **Zeitleiste** bewegt die Kamera und jede Gruppe oder Komponente über die Zeit. Sie setzen **Keys** (wo etwas zu einem bestimmten Zeitpunkt steht); ModelCraft bewegt es sanft von Key zu Key. Spielen Sie es in der Ansicht ab und rendern Sie es dann mit denselben Himmel, derselben Sonne, denselben Materialien und Lampen wie [ein gerendertes Bild](topic:render) zu einem Video.

## Zeitleiste öffnen

Klicken Sie auf {{ui:Ansichten}} in der Gruppe {{ui:Kamera}}, dann auf {{ui:Animationszeitleiste}}. Die Zeitleiste öffnet sich unter der Ansicht: die Bedienelemente oben, dann eine Zeile **Kamera** und eine Zeile für jede Gruppe oder Komponente, die sich bewegt. Die Rauten sind Keys; die rote Linie ist der **Abspielkopf**, der Zeitpunkt, der in der Ansicht gezeigt wird.

:::touch
Auf einem Handy öffnet sich die Zeitleiste ebenfalls unter der Ansicht. Ihre Bedienelemente bilden eine Zeile: Wischen Sie seitlich, um den Rest zu erreichen. Die Schaltfläche zum Schließen der Zeitleiste bleibt an ihrem Ende.
:::

Ziehen Sie den Regler (oder klicken Sie in eine Zeile), um den Abspielkopf zu bewegen. {{ui:Wiedergabe}} spielt ab dem Abspielkopf und wird während des Abspielens zu {{ui:Pause}}; klicken Sie erneut, um dort anzuhalten, wo er ist. {{key:Space}} tut dasselbe, solange die Zeitleiste offen ist (bei geschlossener Zeitleiste ist Space weiterhin Wählen). {{ui:Vorheriger Key}} und {{ui:Nächster Key}} springen zwischen Keys. Ein eigener Stil kann Wiedergabe und Pause eine andere Taste geben: {{ui:Einstellungen}}, dann die Menüs, Tasten und die Maus, der Befehl *Animation abspielen oder anhalten*.

## Die Kamera bewegen

1. Bewegen Sie den Abspielkopf dorthin, wo die Einstellung beginnt (0 s), richten Sie die Ansicht ein und klicken Sie auf {{ui:Kamera-Key}}.
2. Bewegen Sie den Abspielkopf später (etwa 4 s), orbitieren, schwenken oder gehen Sie mit der Ansicht zur nächsten Position und klicken Sie erneut auf {{ui:Kamera-Key}}.
3. Fügen Sie beliebig viele Keys hinzu und klicken Sie dann auf {{ui:Wiedergabe}}.

Die Kamera durchläuft jeden Key sanft und beginnt und endet in Ruhe.

:::tip
Haben Sie schon [Szenen](topic:scenes)? {{ui:Aus Szenen}} erstellt daraus den Kamerapfad: Sie hält an jeder Szene und bewegt sich dann zur nächsten. Hat die Zeitleiste gar keine Keys, erledigt {{ui:Video rendern…}} das automatisch, sodass zwei Szenen oder mehr für ein Rundgang-Video genügen.
:::

## Eine Gruppe oder Komponente bewegen

1. Wählen Sie die Gruppe oder Komponente aus (nur ganze Gruppen und Komponenten bewegen sich; [erstellen Sie zuerst eine Gruppe](topic:groups-components)).
2. Klicken Sie bei 0 s auf {{ui:Auswahl-Key}}.
3. Bewegen Sie den Abspielkopf später, [verschieben, drehen oder skalieren](topic:move-copy) Sie die Gruppe an die gewünschte Stelle und klicken Sie erneut auf {{ui:Auswahl-Key}}.

Sie gleitet, dreht sich und wächst zwischen ihren Keys. Drehungen nehmen den kurzen Weg.

**Auto-Key** spart den Klick aus Schritt 3: Solange {{ui:Auto-Key}} aktiv ist, bekommt eine gewählte Gruppe oder Komponente, die Sie verschieben, drehen oder skalieren, selbst einen Key am Abspielkopf (und beim ersten Mal einen Key bei 0 s, dort, wo sie war).

:::note
Eine animierte Gruppe ohne Key zu bewegen, hält nur, bis sich der Abspielkopf bewegt: Beim nächsten Abspielen oder Scrubben kehrt sie dorthin zurück, wo ihre Keys sie hinsetzen. Die Statusleiste sagt das. Drücken Sie {{ui:Auswahl-Key}}, um es zu behalten.
:::

## Keys ändern

- **Einen Key wählen**, indem Sie auf seine Raute klicken: Der Abspielkopf springt dorthin.
- **Einen Key verschieben**, indem Sie seine Raute entlang ihrer Zeile ziehen, oder mit {{key:Left}} und {{key:Right}} (ein Bild; mit {{key:Shift}}: zehn).
- **Löschen** mit {{ui:Key löschen}} (der gewählte Key oder jeder Key am Abspielkopf) oder mit {{key:Delete}} auf einer gewählten Raute.
- **Wie es weitergeht**, für den gewählten Key: {{ui:Glätten}} (eine Kurve durch die Keys um ihn herum), {{ui:Gleichmäßig}} (eine gerade Linie mit gleichem Tempo), {{ui:Langsam ein und aus}} (kommt an diesem Key zur Ruhe) oder {{ui:Halten}} (bleibt, bis zum nächsten Key).
- **Länge (s)** legt fest, wie lang die Animation ist; ein Key nach dem Ende macht sie länger. Um sie zu kürzen, verschieben oder löschen Sie zuerst die Keys hinter dem neuen Ende.
- Das **×** in der Zeile einer Gruppe beendet deren Animation.

Die Zeitleiste hat eigenes {{ui:Rückgängig}} und {{ui:Wiederholen}}: Das Rückgängig des Modells ({{key:Mod+Z}}) ändert das Modell, nicht die Keys. Die Animation wird in der `.modelcraft`-Datei gespeichert. Beim Schließen der Zeitleiste kehren bewegte Gruppen in ihre erste Pose zurück.

## Das Video rendern

1. Klicken Sie auf der Zeitleiste auf {{ui:Video rendern}} (oder auf {{ui:Export}} › {{ui:Video rendern…}}).
2. Wählen Sie die {{ui:Größe}}, die {{ui:Bildrate}}, die {{ui:Qualität jedes Bildes}} und die {{ui:Datei}}.
3. Klicken Sie auf {{ui:Video rendern}}. Jedes Bild erscheint, sobald es entsteht, mit der verbleibenden Zeit.
4. Ist es fertig, klicken Sie auf {{ui:Video speichern}}.

{{ui:Stopp}} (oder {{key:Esc}}) beendet vorzeitig; {{ui:Video speichern}} behält dann die bereits erstellten Bilder als kürzeres Video.

Himmel, Sonne, Materialien, Lampen und Helligkeit sind die, die in {{ui:Bild rendern…}} eingestellt sind: Stellen Sie sie dort zuerst ein und prüfen Sie ein Standbild. Jedes Bild wird auf diesem Computer gerendert; nichts wird hochgeladen.

| Einstellung | Was sie tut |
|---|---|
| {{ui:Größe}} | 480p, 720p HD, 1080p Full HD oder die eigene Form der Ansicht (bis 1920 Pixel breit) |
| {{ui:Bildrate}} | 24, 25, 30 oder 60 Bilder pro Sekunde. Doppelt so viele Bilder brauchen doppelt so lang |
| {{ui:Qualität jedes Bildes}} | {{ui:Schnell}} (4 Durchgänge), {{ui:Entwurf}} (16) oder {{ui:Gut}} (64): Mehr Durchgänge ergeben glattere Schatten und Kanten |
| {{ui:Datei}} | {{ui:WebM-Video}}, {{ui:MP4-Video (H.264)}}, wo der Browser es schreiben kann, oder {{ui:PNG-Bilder, eines pro Frame (ZIP)}} für Videobearbeitung (und für Browser ohne Video-Encoder) |

:::tip
Ein 10-Sekunden-Video mit 30 Bildern pro Sekunde hat 301 Bilder. Probieren Sie zuerst {{ui:Schnell}} bei 480p, um die Bewegung zu prüfen, und rendern Sie dann {{ui:Entwurf}} oder {{ui:Gut}} in größerer Größe.
:::

WebM spielt in Browsern und VLC, und Videoprogramme konvertieren es. {{ui:MP4-Video (H.264)}} wird angeboten, wo der Browser es schreiben kann. {{ui:Video rendern}} nutzt den schnellen Renderer. Um jedes Bild mit Path Tracing zu rendern, wählen Sie {{ui:Diese Animation zur Warteschlange hinzufügen}} im selben Dialog: Die Bilder werden in der [Render-Warteschlange](topic:render#the-render-queue) gerendert, die WebGPU braucht.

:::firefox safari
Für das Rendern eines Videos braucht der Browser eine eigene Videokodierung (WebCodecs): Aktuelles Chrome, Edge, Firefox und Safari 17 bieten sie. Ohne sie wählen Sie {{ui:PNG-Bilder, eines pro Frame (ZIP)}}.
:::

## Wissenswertes

- Nur ganze Gruppen und Komponenten bewegen sich. Flächen, Kanten, die Sonnenzeit und der Stil ändern sich über die Zeit noch nicht.
- {{ui:Animation exportieren}} unter [Szenen](topic:scenes) zeichnet die Ansicht weiterhin so auf, wie sie auf dem Bildschirm erscheint, in Echtzeit. {{ui:Video rendern}} rendert jedes Bild mit Himmel, Schatten und Materialien.
