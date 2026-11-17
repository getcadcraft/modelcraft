---
title: Gruppen und Komponenten
summary: Objekte davon abhalten, aneinanderzukleben, eine Kopie bearbeiten, um alle zu ändern, und die Bereiche Gliederung und Komponenten verwenden.
keywords: Gruppe, Komponente, Gruppe erstellen, Komponente erstellen, Zerlegen, eindeutig machen, Gliederung, Instanzen, Kopien, Block, verschachtelt, Gruppe bearbeiten, platzieren
from: 7cb925f3
---

Lose Geometrie in ModelCraft klebt zusammen: Linien, die sich berühren, teilen einander auf, und Flächen, die eine Kante teilen, bewegen sich gemeinsam. Dadurch funktioniert das Zeichnen auf Flächen, aber ein Quader, der an einen anderen gezeichnet wird, verschmilzt mit ihm. **Gruppen** und **Komponenten** halten die Dinge getrennt.

- Eine **Gruppe** fasst Geometrie so zusammen, dass sie wie ein einzelnes Objekt wirkt. Nichts außerhalb davon kann daran haften.
- Eine **Komponente** ist eine Gruppe, die beliebig oft platziert werden kann. Alle Kopien teilen denselben Inhalt: Bearbeiten Sie eine, ändern sich alle. Verwenden Sie Komponenten für alles, was sich wiederholt: Fenster, Stützen, Tische, Bäume.

## Gruppe oder Komponente erstellen

1. Wählen Sie die Geometrie aus. Ein Dreifachklick auf eine Fläche wählt das gesamte zusammenhängende Objekt; ein Fensterziehen wählt alles im Rahmen aus.
2. Drücken Sie {{key:Shift+G}} für eine Gruppe oder {{key:G}} für eine Komponente. Sie können auch in der Symbolleiste in der Gruppe {{ui:Organize}} auf {{ui:Group}} oder {{ui:Component}} klicken oder in {{ui:Entity info}} auf {{ui:Make group (Shift+G)}} bzw. {{ui:Make component (G)}}.

   Die Statusleiste zeigt „Gruppiert als Group#1.“ oder „Komponente Component#1 erstellt.“, das neue Objekt ist ausgewählt, und es erscheint in der {{ui:Outliner}}.

3. Um es zu benennen, geben Sie einen Namen in das Feld {{ui:Name}} von {{ui:Entity info}} ein und drücken Sie {{key:Enter}} oder klicken Sie daneben.

Wenn Sie eine Fläche auswählen, werden ihre Kanten mitgewählt. Ist nichts ausgewählt, zeigt die Statusleiste: „Wählen Sie zuerst Geometrie aus (Fenster ziehen oder Dreifachklick, um alles Zusammenhängende zu wählen).“

Sie können auch Gruppen zu Gruppen zusammenfassen: Wählen Sie mehrere Gruppen aus und drücken Sie {{key:Shift+G}}. Die {{ui:Outliner}} zeigt die Verschachtelung.

:::note
Die Tastenbuchstaben entsprechen den Standardwerten von SketchUp: {{key:G}} erstellt eine Komponente, {{key:Shift+G}} eine Gruppe.
:::

## In einer Gruppe oder Komponente bearbeiten

1. Doppelklicken Sie darauf (in der Ansicht oder in der {{ui:Outliner}}) oder wählen Sie es aus und klicken Sie in {{ui:Entity info}} auf {{ui:Edit}}.

   Der Rest des Modells wird ausgeblendet, die Achsen wechseln zu den eigenen Achsen der Gruppe, und die {{ui:Outliner}} zeigt „Bearbeitet: Model › Group#1“. Die Statusleiste zeigt „Group#1 wird bearbeitet. Esc oder Doppelklick außerhalb schließt sie.“

2. Zeichnen, {{ui:Push/pull}}, Verschieben und Löschen wie gewohnt. Alles, was Sie tun, bleibt innerhalb der Gruppe.
3. Schließen Sie sie: Drücken Sie {{key:Esc}} (zweimal, wenn etwas ausgewählt ist), doppelklicken Sie auf leeren Raum oder klicken Sie in der {{ui:Outliner}} auf {{ui:Close group}}.

Solange eine Komponente geöffnet ist, ändert sich bei Ihrer Arbeit jede Kopie davon.

## Weitere Kopien einer Komponente platzieren

- Kopieren Sie sie mit {{ui:Move}} und {{key:Ctrl}} (siehe [Verschieben und Kopieren](topic:move-copy)). Jede Kopie ist eine weitere Platzierung derselben Komponente.
- Oder klicken Sie im Bereich {{ui:Components}} neben ihr auf {{ui:Place}} und dann dorthin, wo sie hin soll. Ihr Ursprung, also die unterste Ecke des Quaders um die Auswahl, die Sie beim Erstellen gewählt haben, landet an der Stelle, an die Sie klicken. Danach kehrt das Werkzeug zu {{ui:Select}} zurück.

Der Bereich {{ui:Components}} zeigt an, wie viele Kopien platziert sind („4×“), und die {{ui:Outliner}} zeigt die Anzahl hinter dem Namen.

## In der Gliederung neu anordnen

Ziehen Sie eine Zeile in der {{ui:Outliner}}, um zu ändern, wohin sie gehört. In der Ansicht bewegt sich nichts: Eine Gruppe behält ihren Platz im Modell.

- **In eine Gruppe:** Legen Sie sie auf die Mitte der Zeile einer Gruppe ab (die Zeile erhält einen gestrichelten Rand). Sie kommt als Letztes hinein.
- **In anderer Reihenfolge:** Legen Sie sie auf die obere oder untere Kante einer Zeile ab (dort erscheint eine Linie). Sie kommt direkt davor oder danach, innerhalb derselben Gruppe wie diese Zeile. So landet sie auch an einer gewählten Stelle in einer Gruppe.
- **Heraus auf die oberste Ebene:** Legen Sie sie auf die Überschrift der {{ui:Outliner}} ab. Sie kommt als Letztes.

Jedes Ablegen ist ein Schritt: {{key:Mod+Z}} stellt es wieder her. {{key:Esc}} während des Ziehens legt nichts ab. Eine Gruppe kann nicht in sich selbst oder in eine Gruppe verschoben werden, die sie enthält. Das Ziehen ist aus, solange {{ui:Find by name}} Text enthält.

:::touch
Halten Sie einen Finger einen Moment auf eine Zeile und ziehen Sie sie dann. Eine schnelle Wischbewegung scrollt stattdessen die Liste.
:::

## Eine Kopie anders gestalten

Wählen Sie die Kopie aus und klicken Sie in {{ui:Entity info}} auf {{ui:Make unique}} (wird angezeigt, wenn die Komponente mehrfach platziert ist). Diese Kopie erhält eine eigene Definition, benannt wie das Original mit einer neuen Nummer. Bearbeiten Sie sie, ohne die anderen zu berühren.

## Eine Gruppe in eine Komponente umwandeln

Wählen Sie die Gruppe aus und klicken Sie in {{ui:Entity info}} auf {{ui:Make component}}. Sie erhält einen neuen Namen, etwa Component#2, auch wenn Sie die Gruppe benannt hatten. Geben Sie den Namen im Feld {{ui:Name}} erneut ein.

## Zerlegen

Wählen Sie eine Gruppe oder Komponente aus und klicken Sie auf {{ui:Explode}} (in der Symbolleiste oder in {{ui:Entity info}}). Ihr Inhalt wird an der bisherigen Stelle zu loser Geometrie und haftet an dem, was er berührt. Gruppen darin bleiben Gruppen.

## Volumenkörper und Volumen

Wenn Sie eine Gruppe oder Komponente auswählen, zeigt {{ui:Entity info}} **Volumenkörper: Ja**, wenn ihre Flächen geschlossen sind, ohne Lücken (jede Kante wird von genau zwei Flächen geteilt), und keine Gruppen darin verschachtelt sind. Dann zeigt es auch das **Volumen**. Ein Quader, eine Wand mit einem durchgehenden Fenster und ein gezogener Zylinder sind Volumenkörper; ein Quader, dessen Deckfläche gelöscht wurde, ist keiner.

## Wenn die letzte Kopie verschwindet

Wenn Sie die letzte Kopie einer Komponente löschen, verschwindet sie auch aus dem Bereich {{ui:Components}}. {{key:Mod+Z}} bringt sie zurück.

## Wissenswertes

- Kopien einer **Gruppe**, die mit {{ui:Move}} erstellt wurden, teilen in dieser Version ihren Inhalt, wie es Komponentenkopien tun: Die Bearbeitung einer ändert die anderen. Um eine unabhängig zu machen, klicken Sie auf {{ui:Make component}} und dann auf {{ui:Make unique}}. Siehe [Fehlerbehebung](topic:troubleshooting#editing-one-group-changed-another).
- Komponenten schneiden keine Öffnungen in Wände und haften nicht an Flächen, und es gibt keine Bibliothek fertiger Komponenten. Sie erstellen eigene oder importieren sie.
- Importierte Dateien kommen als Gruppe an. Collada-Dateien behalten ihre eigenen Gruppen und Komponenten darin.
