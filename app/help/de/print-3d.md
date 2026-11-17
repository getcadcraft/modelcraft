---
title: Ein Modell für den 3D-Druck vorbereiten
summary: Prüfen, ob ein Modell geschlossen ist und richtig herum zeigt, seine Größe, Auflage und Überhänge sehen, Fehler beheben und es als STL oder 3MF für Ihren Slicer herunterladen.
keywords: 3D-Druck, 3D-Drucken, Drucker, drucken, Slicer, stl, 3mf, wasserdicht, geschlossen, mannigfaltig, Volumenkörper, Löcher, von innen nach außen, Überhang, Stützen, Druckbett, Millimeter, exportieren, beheben, reparieren, aushöhlen, Druckbettgröße, Einsteiger, Wandstärke, Druckwerkzeuge
from: 948e19af
---

Der Slicer eines 3D-Druckers braucht eine geschlossene Form: keine Löcher, jede Fläche zeigt nach außen, nichts durchdringt sich selbst. {{ui:Exportieren}} › {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}} sucht genau danach, bevor Sie die Datei herunterladen.

## Prüfen und herunterladen

1. Wählen Sie aus, was Sie drucken möchten: eine oder mehrere Gruppen oder Komponenten oder einige Flächen. Ohne Auswahl wird alles Sichtbare gedruckt.
2. Klicken Sie {{ui:Exportieren}} in der Gruppe {{ui:Datei}}, dann {{ui:Auf 3D-Druck prüfen (STL oder 3MF)…}}.

   Der Dialog beginnt mit einer Zeile: „Bereit zum Drucken“, wie viele Dinge vor dem Drucken zu beheben sind, oder wie viele zuerst anzusehen sind. Jedes Problem hat drei Teile: was falsch ist, warum es wichtig ist und was zu tun ist. Dann folgen die Größe in Millimetern, das Volumen, die Anzahl der Dreiecke und Ihr Druckbett.

3. Wenn der Dialog Dinge zum Beheben auflistet, klicken Sie {{ui:Behebbares beheben}} (siehe unten). Die Prüfung läuft dann automatisch erneut.
4. Klicken Sie {{ui:3MF herunterladen}} oder {{ui:STL herunterladen}}.

Was gedruckt wird, ist das, was Sie sehen: verborgene Flächen, verborgene Gruppen und Komponenten sowie alles an einem verborgenen Tag werden weggelassen. Maße sind immer in Millimetern angegeben, der Einheit, die Slicer erwarten, unabhängig davon, welche Einheit das Modell zeigt.

:::tip
Verwenden Sie 3MF, wenn Ihr Slicer es liest: Es behält die Farben und die Einheiten. STL hat beides nicht, und Slicer gehen von Millimetern aus.
:::

## Was die Prüfung sucht

Diese Probleme verhindern einen Druck oder verderben ihn, und der Dialog sagt dann „Nicht bereit zum Drucken“:

| Problem | Was es bedeutet | Was zu tun ist |
|---|---|---|
| Eine Fläche nur auf einer Seite | Ein Loch: Eine Kante hat eine Fläche auf einer Seite und nichts auf der anderen | Zeichnen Sie die fehlende Fläche (eine Linie quer über die Lücke schließt sie oft), oder verwenden Sie {{ui:Beheben}} (unten) |
| Von drei oder mehr Flächen geteilt | Flächen treffen sich in einer Rippe oder einer Wand innerhalb eines Volumenkörpers | Löschen Sie die innere Fläche |
| Flächen zeigen in entgegengesetzte Richtungen | Manche Flächen zeigen nach innen, manche nach außen | Wählen Sie die Flächen aus, die nach innen zeigen, und klicken Sie {{ui:Fläche umkehren}} in {{ui:Objektinfo}} |
| Von innen nach außen | Ein ganzes geschlossenes Teil zeigt nach innen | Wählen Sie seine Flächen aus und kehren Sie sie um |
| Durchdringt sich selbst | Ein Teil faltet sich durch sich selbst | {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Mit Modell schneiden}}, dann löschen Sie, was innen liegt. Siehe [Flächen schneiden](topic:intersect) |

Das sind Warnungen: Das Modell lässt sich drucken, aber sehen Sie es sich vorher an.

- **Getrennte Teile überlappen** oder **treffen Fläche auf Fläche aufeinander**: Slicer verschmelzen sie meist zu einem. Für eine sauberere Datei vereinigen Sie sie mit {{ui:Volumenkörper}} › {{ui:Vereinigung}}. Siehe [Volumenkörper-Werkzeuge](topic:solids).
- **Nichts liegt unten flach**: Drehen Sie das Modell so, dass eine Fläche auf dem Bett ruht, sonst fügt der Slicer Stützen oder ein Raft hinzu.
- **Neigt sich mehr als 45° von der Senkrechten nach außen**: Diese Flächen brauchen Stützen. Der Dialog sagt, wie viel der Oberfläche das betrifft.
- **Unter 1 mm breit**: Wahrscheinlich in der falschen Einheit modelliert. Prüfen Sie die Einheit in der Statusleiste.

Ein hohles Teil (eine geschlossene Schale innerhalb eines anderen) ist in Ordnung: Seine Flächen zeigen in den Hohlraum, und sein Volumen wird abgezogen.

## Probleme beheben

Unter **Wo die Probleme liegen** nennt der Dialog jede Gruppe oder Komponente mit einem Fehler (lose Flächen, die nicht in einer Gruppe sind, werden als „Flächen nicht in einer Gruppe“ aufgelistet), mit dem, was darin falsch ist. Eine mehrfach platzierte Komponente wird einmal aufgelistet: Ihre Behebung betrifft jede Kopie.

- {{ui:Anzeigen}} öffnet diese Gruppe und wählt die falschen Kanten und Flächen aus, sodass sie hervorgehoben erscheinen.
- {{ui:Behebbares beheben}} behebt alle auf einmal: Es schließt Löcher, deren Kanten flach liegen, entfernt Flächen innerhalb der Form und lose Kanten und dreht Flächen richtig herum. Es ist ein Schritt: {{key:Mod+Z}} macht ihn rückgängig. Die Prüfung läuft dann erneut und zeigt, was übrig ist.

Was es nicht beheben kann (ein Loch, dessen Kanten nicht flach liegen, ein Teil, das sich selbst durchdringt), bleibt in der Liste mit dem, was Sie von Hand tun müssen. {{ui:Reparieren}} unter **Druckwerkzeuge** geht weiter: Es schließt Löcher, die nicht flach sind, entfernt lose Teile und doppelte Flächen und listet jede Behebung auf. Siehe [Stützen, Wandstärke, Aushöhlen und Reparieren](topic:print-tools#repair). Sie können auch eine Gruppe nach der anderen beheben: Wählen Sie sie aus, dann verwenden Sie {{ui:Probleme anzeigen}} und {{ui:Beheben}} in {{ui:Objektinfo}}. Siehe [Volumenkörper-Werkzeuge](topic:solids).

## Ein hohles Teil

{{ui:Aushöhlen}} unter **Druckwerkzeuge** höhlt ein Teil auf die Wandstärke aus, die Sie angeben, mit Abflusslöchern dort, wo Sie klicken. Siehe [Aushöhlen](topic:print-tools#hollow).

Sie können die Aushöhlung auch selbst zeichnen: eine geschlossene Gruppe innerhalb des Teils, die es nicht berührt, mit allen umgekehrten Flächen, sodass sie in den Hohlraum zeigen. Die Prüfung zählt sie als Hohlraum und zieht ihr Volumen ab. Sie wird nicht als etwas zum Beheben aufgeführt.

## Das Druckbett Ihres Druckers

Wählen Sie die Größe des Druckbetts Ihres Druckers in {{ui:Einstellungen}} › {{ui:ModelCraft}} › {{ui:3D-Druckerbett}}. Die Prüfung warnt dann, wenn das Modell größer als das Bett ist, in beiden Drehrichtungen. Siehe [Einstellungen](topic:settings#3d-printer-bed).

## Druckwerkzeuge

Unter den Ergebnissen des Dialogs öffnet **Druckwerkzeuge** {{ui:Stützen-Vorschau}} (wo Stützen hinkommen und ungefähr wie viel), {{ui:Wandstärke}} (zu dünne Wände zum Drucken), {{ui:Aushöhlen}} und {{ui:Reparieren}}. Siehe [Stützen, Wandstärke, Aushöhlen und Reparieren](topic:print-tools). {{ui:Für den Druck teilen}} schneidet ein Modell, das für das Bett zu groß ist, in Stücke mit Verbindern und nummerierten Verbindungen: siehe [Ein großes Modell für den Druck teilen](topic:print-split).

## Nicht geprüft

Die Prüfung schneidet nicht: Winzige Details, die Ihre Düse nicht drucken kann, und die echten Stützen sind Sache Ihres Slicers. Siehe [Noch nicht umgesetzt](topic:not-built-yet#3d-printing).
