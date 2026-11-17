---
title: Bemaßen und Größe ändern, was Sie gezeichnet haben
summary: Bemaßungen zwischen Ecken, an Bögen und Kreisen oder zwischen zwei Kanten platzieren; eine neue Länge eintippen, um das Modell zu ändern. Die Länge einer Kante oder Breite, Tiefe und Höhe einer Gruppe in der Objektinfo neu eintragen.
keywords: Bemaßung, Bemaßungen, Größe ändern, Größe anpassen, Länge, Breite, Tiefe, Höhe, strecken, Bemaßung als Antrieb, annotieren, messen, nachträglich, Radius, Durchmesser, Winkel, Bogen, Kreis, R, Ø
from: a1f815ec
---

Größen in ModelCraft sind nach dem Zeichnen nicht festgelegt. Eine Bemaßung zeigt eine Länge am Modell, und wenn Sie dort eine neue Länge eintippen, passt sich das Modell an. Sie können auch die Länge einer Kante neu eintragen oder die Breite, Tiefe und Höhe einer Gruppe in {{ui:Objektinfo}}.

## Eine Bemaßung platzieren

1. Drücken Sie {{key:D}} oder klicken Sie in der Symbolleiste auf {{ui:Bemaßung}}.
2. Klicken Sie auf eine Ecke, von der aus gemessen wird. Der Fang greift auf Ecken, Mittelpunkte und Kanten, wie beim Zeichnen.
3. Klicken Sie auf die zweite Ecke.

   Oder klicken Sie einmal auf eine **Kante** (der Tipp sagt „An Kante“), um diese ganze Kante mit einem Klick zu bemaßen.
4. Bewegen Sie den Zeiger dorthin, wo die Maßlinie stehen soll, und klicken Sie. Sie können auch den Abstand eintippen, etwa `0.5m`, und {{key:Enter}} drücken.

   Die Maßlinie bleibt bei einer waagerechten Kante waagerecht, außer Sie schauen sie von der Seite an. Bei einer senkrechten Kante bleibt sie in der senkrechten Ebene, die Ihnen am besten zugewandt ist.

Die Statusleiste zeigt „Bemaßung 4 m.“ Bemaßungen zeigen ihre Länge in der Einheit des Modells und aktualisieren sich, wenn Sie die Einheit in der Einheitenauswahl ändern.

## Radius, Durchmesser und Winkel

Dasselbe Werkzeug {{ui:Bemaßung}} bemaßt auch runde Formen und Winkel:

- **Ein Bogen:** Klicken Sie auf den Bogen. Der Tipp sagt {{ui:Radius}}. Bewegen Sie den Zeiger dorthin, wo der Text stehen soll, und klicken Sie: Die Bemaßung zeigt **R 1.5 m**.
- **Ein Kreis:** Klicken Sie auf den Kreis. Sie erhalten einen **Durchmesser** (**Ø 3 m**) mit einer Linie quer durch den Kreis über seinen Mittelpunkt. Polygone funktionieren genauso, mit ihren Ecken auf dem Kreis.
- **Der Winkel zwischen zwei Kanten:** Klicken Sie auf eine Kante und dann auf eine zweite Kante, die sie an einer Ecke trifft (solange Sie darüberstehen, sagt der Tipp {{ui:Winkel zwischen den Kanten}}). Bewegen Sie sich dann in den gewünschten Winkel und klicken Sie. Innerhalb der Ecke erhalten Sie den Winkel zwischen den Kanten; bewegen Sie sich zu einer Seite, erhalten Sie den Nebenwinkel (etwa 150° statt 30°). Wie weit von der Ecke Sie klicken, legt fest, wo der Bogen liegt, oder geben Sie diesen Abstand ein.

Um einen Radius in einen Durchmesser umzuschalten oder zurück, wählen Sie die Bemaßung aus und wählen Sie unter {{ui:Anzeigen als}} in {{ui:Objektinfo}}.

**Größe damit ändern:** Geben Sie einen neuen Radius oder Durchmesser direkt nach dem Platzieren ein, oder wählen Sie ihn später aus und tippen Sie. Der Bogen oder Kreis behält seinen Mittelpunkt und ändert seine Größe; eine Fläche, die er begrenzt (eine Scheibe, das Ende eines Schlitzes), ändert sich mit. Zwei Dinge messen nur:

- **Eine Winkelbemaßung** ändert das Modell nie. Um einen Winkel zu ändern, drehen Sie die Kanten mit {{ui:Drehen}}.
- **Der Kreis am Ende eines Zylinders** (ein Kreis, den Sie mit {{ui:Drücken/Ziehen}} herausgezogen haben) lässt sich über seine Bemaßung nicht ändern, weil dann auch seine Seiten sich ändern müssten. Skalieren Sie stattdessen den Zylinder um seine Achse.

## Das Modell mit einer Bemaßung ändern

Direkt nach dem Platzieren einer Bemaßung tippen Sie eine neue Länge ein und drücken {{key:Enter}}: `6m`, `12'`, `3500` in einem Modell in Millimetern. Das Modell ändert sich auf diese Größe.

Später, jederzeit:

1. Klicken Sie mit {{ui:Wählen}} auf den Text oder die Linie der Bemaßung. {{ui:Objektinfo}} zeigt **Bemaßung** und die {{ui:Länge}}.
2. Tippen Sie die neue Länge ein und drücken Sie {{key:Enter}}. Sie können direkt in das Wertfeld tippen oder in das Feld {{ui:Länge}} in {{ui:Objektinfo}}.

### Was sich bewegt

Die zweite angeklickte Ecke bewegt sich, und mit ihr alles jenseits davon:

- **Beide Ecken an einem Teil** (die Breite eines Quaders, die Höhe einer Wand): Die Seite an der beweglichen Ecke gleitet hinaus oder hinein, und damit verbundene Flächen werden gestreckt. Ein Quader bleibt ein geschlossener Körper, und alles, was ganz auf dieser Seite liegt, etwa eine Fensterkomponente, bewegt sich mit.
- **Die Ecken an zwei getrennten Teilen** (der Spalt zwischen zwei Quadern): Das Teil der beweglichen Ecke bewegt sich als Ganzes, und der Spalt ändert sich.
- **Die bewegliche Ecke innerhalb einer Gruppe oder Komponente**, in der die andere Ecke nicht liegt: Die ganze Gruppe bewegt sich.
- **Beide Ecken innerhalb derselben Gruppe oder Komponente**: Sie wird darin gestreckt. Eine Komponente ändert sich überall, wo sie platziert ist, wie beim Bearbeiten immer.

Um zu ändern, welches Ende sich bewegt, wählen Sie die Bemaßung aus und wählen Sie unter {{ui:Bewegt sich}} in {{ui:Objektinfo}}:

| Auswahl | Was passiert |
|---|---|
| {{ui:Zweites Ende}} (der Standard) | Das Ende, das Sie als Zweites angeklickt haben, bewegt sich |
| {{ui:Erstes Ende}} | Das Ende, das Sie als Erstes angeklickt haben, bewegt sich |
| {{ui:Beide Enden (zentriert)}} | Jedes Ende bewegt sich um die Hälfte der Änderung, sodass die Mitte stehen bleibt |

### Wenn eine Größenänderung abgelehnt wird

ModelCraft ändert nichts und sagt in der Statusleiste, warum:

- „eine Fläche würde aus ihrer Ebene gebogen“: Die Bemaßung verläuft schräg durch die Form. Bemaßen Sie entlang einer Kante oder entlang Rot, Grün oder Blau.
- „eine Fläche würde auf null schrumpfen oder sich nach innen stülpen“: Die neue Länge ist zu kurz für die Form.
- „das Ende, das sich bewegt, liegt nicht an einer Ecke des Modells“: Dieses Ende wurde im leeren Raum oder in der Mitte einer Kante platziert. Wählen Sie das andere Ende unter {{ui:Bewegt sich}} oder platzieren Sie die Bemaßung zwischen zwei Ecken.
- „eine Länge muss größer als null sein“.

Jede Größenänderung ist ein Schritt: {{key:Mod+Z}} macht sie rückgängig.

## Größe in der Objektinfo direkt eintragen

Eine Bemaßung brauchen Sie nicht immer:

- **Eine Kante:** Wählen Sie sie aus. Ihre {{ui:Länge}} in {{ui:Objektinfo}} ist ein Feld, in das Sie tippen können. Eine Länge direkt ins Wertfeld einzugeben funktioniert auch. Das Ende weiter in Richtung Rot, dann Grün, dann Blau bewegt sich, und was damit verbunden ist, wird gestreckt. Wenn Sie etwa die vordere untere Kante eines Quaders neu eintragen, wird der Quader nach rechts breiter.
- **Eine Gruppe oder Komponente:** Wählen Sie sie aus. {{ui:Breite (Rot)}}, {{ui:Tiefe (Grün)}} und {{ui:Höhe (Blau)}} sind Felder. Ihre entfernte Seite (rechts, hinten, oben) bewegt sich. Diese Achsen gehören der Gruppe selbst, vor einer Drehung, die Sie ihr gegeben haben.

Drücken Sie {{key:Enter}}, um zu übernehmen, oder {{key:Esc}}, um den alten Wert zurückzusetzen.

## Bemaßungen folgen dem Modell

Eine Bemaßung ist an die beiden Ecken gebunden, auf denen sie platziert wurde (ein Winkel: an seine Ecke und die entfernten Enden seiner beiden Kanten; ein Radius oder Durchmesser: an seinen Bogen oder Kreis). Verschieben, drücken/ziehen oder ändern Sie die Geometrie, und die Bemaßung folgt und zeigt die neue Länge. Sie bleibt verbunden, wenn Sie die Geometrie in eine Gruppe oder Komponente umwandeln.

Wurde ein Ende an einer Stelle platziert, die keine Ecke ist (auf einer Fläche oder im leeren Raum), oder wird seine Ecke gelöscht, bleibt dieses Ende, wo es war. Die Bemaßung misst weiterhin, kann aber nur vom anderen Ende aus ändern.

## Bemaßungen entfernen

- Eine Bemaßung: Wählen Sie sie aus und drücken Sie {{key:Delete}}, oder klicken Sie mit dem {{ui:Radierer}} darauf.
- Alle Bemaßungen: Klicken Sie bei nichts ausgewählt auf {{ui:Alle Bemaßungen löschen}} in {{ui:Objektinfo}}.

Bemaßungen werden in der `.modelcraft`-Datei gespeichert. Sie werden nicht in andere Formate exportiert, die nur das 3D-Modell enthalten. Eine Datei mit Bemaßungen lässt sich in einer älteren ModelCraft weiterhin öffnen, dann eben ohne sie.
