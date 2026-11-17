---
title: Komponenten, die sich strecken
summary: Eine Kopie einer Komponente breiter, tiefer oder höher machen, während ihre Teile ihre Größe behalten: ein längerer Tisch mit denselben Beinen, ein höheres Regal mit weiter auseinanderliegenden Böden, ein Geländer, dessen Pfosten sich wiederholen.
keywords: dynamische Komponente, strecken, Komponente neu dimensionieren, parametrisch, benannte Größen, wiederholen, Anordnung, Beine, Böden, Geländer, Regeln, Variablen
from: b4c40f43
---

Eine Komponente zu skalieren vergrößert alles darin, auch Beine und Schienen. **Diese Kopie strecken** ändert die Breite, Tiefe oder Höhe einer Komponente, während jedes Teil einer Regel folgt: Eine Tischplatte wird länger, ihre Beine behalten ihre Stärke und bleiben an den Enden.

Das funktioniert bei Komponenten aus Teilen, also bei Gruppen oder Komponenten innerhalb der Komponente, wie bei jedem Objekt der [Startbibliothek](topic:starter).

## Eine Kopie strecken

1. Wählen Sie die Komponente.
2. Klicken Sie in {{ui:Objektinfo}} auf {{ui:Diese Kopie strecken…}}.
3. Geben Sie die neue {{ui:Breite (Rot)}}, {{ui:Tiefe (Grün)}} und {{ui:Höhe (Blau)}} ein und klicken Sie auf {{ui:Streckung}}.

Nur diese Kopie ändert sich: Sie wird zu einer eigenen Komponente, die sich an das Original erinnert, aus dem sie entstanden ist. Strecken Sie sie jederzeit erneut; sie wird dann aus dem Original neu berechnet, sodass nichts abweicht. Andere Kopien des Originals bleiben unverändert.

## Die Regeln

Öffnen Sie die Komponente (Doppelklick) und wählen Sie eines ihrer Teile. {{ui:Objektinfo}} zeigt {{ui:Wenn sich die Komponente streckt}} mit einer Regel für Rot, Grün und Blau:

| Regel | Was das Teil tut | Beispiel |
|---|---|---|
| {{ui:Streckung}} | Wächst mit der Komponente; seine Abstände zu beiden Seiten bleiben | Eine Tischplatte |
| {{ui:Am Anfang bleiben}} / {{ui:Am Ende bleiben}} | Behält seine Größe und seinen Abstand zu dieser Seite | Beine |
| {{ui:Proportional verschieben}} | Behält seine Größe; seine Mitte verschiebt sich proportional | Böden, ein Türgriff |
| {{ui:Proportional skalieren}} | Platz und Größe werden beide proportional angepasst | Die Stufen einer Treppe |
| {{ui:Wiederholen}} | Kopien davon in regelmäßigen Abständen ({{ui:Alle}}), vom Anfang bis zur gegenüberliegenden Seite | Die Pfosten eines Geländers |

{{ui:Automatisch}} (der Standard) ermittelt eine Regel und zeigt sie an: {{ui:Streckung}}, wenn das Teil die ganze Komponente überspannt, {{ui:Proportional verschieben}}, wenn es ungefähr in der Mitte sitzt, und sonst bleibt es an der Seite, der es näher ist.

## Wissenswertes

- Die Formen der Teile werden gemeinsam genutzt, daher ist eine gestreckte Kopie leicht. Eine Änderung an einem Teil wirkt sich auf alle Kopien aus.
- Eine gestreckte Kopie folgt späteren Änderungen an den Regeln oder am Aufbau des Originals nicht. Strecken Sie sie erneut, um diese zu übernehmen.
- Flächen, die lose in der Komponente liegen (nicht in einem Teil), behalten ihre Größe. Machen Sie sie zu einem Teil, damit sie folgen.
- Regeln und das Original jeder gestreckten Kopie werden in der ModelCraft-Datei gespeichert.
