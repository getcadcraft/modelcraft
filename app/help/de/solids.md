---
title: Volumenkörper-Werkzeuge: Vereinigung, Subtrahieren, Schnittmenge
summary: Verbinden Sie geschlossene Gruppen und Komponenten zu einer, schneiden Sie eine aus einer anderen heraus oder behalten Sie nur, was sie gemeinsam haben.
keywords: Volumenkörper, Volumenkörper-Prüfung, kein Volumenkörper, Volumenkörper reparieren, Loch, lose Kante, umgestülpt, Vereinigung, verbinden, kombinieren, zusammenführen, subtrahieren, Differenz, schneiden, Loch, Schnittmenge, boolesch, äußere Hülle
from: f35df1cc
---

Die Volumenkörper-Werkzeuge verbinden **Volumenkörper**: Gruppen und Komponenten, deren Flächen ein Volumen schließen, wobei jede Kante genau zwei Flächen verbindet. {{ui:Objektinfo}} zeigt {{ui:Volumenkörper}}: {{ui:Ja}} für einen, und zeigt sein Volumen an.

Sie befinden sich im Menü {{ui:Volumenkörper}} in der Gruppe {{ui:Organisieren}}.

## Wenn etwas kein Volumenkörper ist

Wählen Sie die Gruppe oder Komponente aus. Ist sie kein Volumenkörper, sagt {{ui:Objektinfo}} warum, zum Beispiel „Kein Volumenkörper: 4 Kanten grenzen an ein Loch · 1 lose Kante“:

| Problem | Was es bedeutet |
|---|---|
| Kanten grenzen an ein Loch | Eine Fläche fehlt |
| Kanten, die von drei oder mehr Flächen geteilt werden | Eine Fläche teilt das Innere, oder zwei Formen berühren sich entlang einer Kante |
| Flächen im Inneren der Form | Eine Wand, die im Volumen übrig geblieben ist |
| Lose Kanten | Linien, die keine Fläche begrenzen |
| Umgestülpte Flächen | Ihre Vorderseiten zeigen nach innen, gegen ihre Nachbarn |

{{ui:Probleme anzeigen}} öffnet sie mit diesen Kanten und Flächen ausgewählt, damit Sie sie sehen. {{ui:Beheben}} repariert die einfachen Fälle in einem Rückgängig-Schritt: Es entfernt lose Kanten und Flächen im Inneren der Form, dreht Flächen richtig herum und schließt Löcher, deren Rand eben liegt. Alles, was es nicht sicher reparieren kann (ein Loch, das nicht eben ist, eine Kante, die von vielen Flächen geteilt wird), lässt es für Sie stehen und sagt, was übrig bleibt.

## Vereinigung

1. Wählen Sie zwei oder mehr Volumenkörper aus (einen anklicken, die anderen mit {{key:Ctrl}}+Klick).
2. {{ui:Volumenkörper}} › {{ui:Vereinigung}}.

Sie werden zu einem Volumenkörper in einer Gruppe. Wo sie sich überlappten, sind die Flächen im Inneren verschwunden.

## Subtrahieren

1. {{ui:Volumenkörper}} › {{ui:Subtrahieren}}.
2. Klicken Sie auf den Volumenkörper, der **weggenommen** wird (das Schneidewerkzeug).
3. Klicken Sie auf den Volumenkörper, der **geschnitten** wird.

Was vom zweiten Volumenkörper übrig bleibt, bleibt erhalten; das Schneidewerkzeug wird aufgebraucht. Um zum Beispiel ein Loch durch einen Block zu machen, zeichnen Sie einen Pfosten hindurch, machen Sie den Pfosten zu einer Gruppe und subtrahieren Sie dann den Pfosten vom Block.

## Schnittmenge

Wählen Sie zwei oder mehr Volumenkörper aus, dann {{ui:Volumenkörper}} › {{ui:Schnittmenge}}. Nur der Teil, den alle gemeinsam haben, bleibt erhalten.

## Wissenswertes

- Das Ergebnis ist eine neue Gruppe. Sie behält den Namen, die Farbe und das Tag des ersten Volumenkörpers (bei Subtrahieren: den, den Sie geschnitten haben). Farben, die auf seine Flächen gemalt wurden, bleiben nicht erhalten.
- Ebene Seiten des Ergebnisses sind einzelne Flächen. Runde Seiten erscheinen als die ebenen Facetten, mit denen sie gezeichnet wurden.
- Ist eine Gruppe oder Komponente kein Volumenkörper, sagt das Werkzeug, welche, und ändert nichts. Suchen Sie nach einer fehlenden Fläche oder einer losen Fläche darin.
- In einer geöffneten Gruppe arbeiten die Werkzeuge mit den Gruppen und Komponenten in dieser Gruppe.
- Jedes Werkzeug ist ein Rückgängig-Schritt.
- Beim ersten Einsatz eines Volumenkörper-Werkzeugs wird seine Engine (manifold-3d) geladen; das kann einen Moment dauern.
