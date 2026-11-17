---
title: Schnittebenen: das Modell aufschneiden
summary: Eine Schnittebene setzen, um in das Modell zu sehen, sie hindurchschieben, umkehren oder den Schnitt ausschalten.
keywords: Schnitt, Schnittebene, Schnittführung, Freischnitt, Beschneiden, Inneres, Grundriss, Scheibe, Querschnitt
from: 28c3a645
---

Eine Schnittebene schneidet das Modell auf, sodass Sie darin sehen und arbeiten können: ein Grundriss eines Hauses, das Innere eines Schranks. Das Modell wird nicht verändert; der Schnitt ist nur eine Ansicht.

## Eine setzen

1. Klicken Sie in der Gruppe {{ui:Kamera}} auf {{ui:Schnitt}}.
2. Klicken Sie auf eine Fläche. Die Ebene wird auf dieser Fläche platziert, mit vier Pfeilen, die auf Sie zeigen.

   Klicken Sie abseits jeder Fläche, um eine quadratische Ebene zu der Richtung zu setzen, in die Sie am meisten schauen. Drücken Sie zuerst eine Pfeiltaste, um sie stattdessen senkrecht zu Rot ({{key:Right}}), Grün ({{key:Left}}) oder Blau ({{key:Up}}) zu stellen.

Die Seite, auf die die Pfeile zeigen, wird **weggeschnitten**. Eine auf einer Fläche platzierte Ebene schneidet noch nichts: Schieben Sie sie ins Modell.

## Verschieben, umkehren, ausschalten

Klicken Sie auf den Umriss der Ebene, um sie auszuwählen. In {{ui:Objektinfo}}:

- {{ui:Entlang ihrer Pfeile}} gibt an, wo sie sitzt. Geben Sie eine neue Entfernung ein und drücken Sie {{key:Enter}}, um sie durch das Modell zu schieben; das Eingeben von `-1m` bei einer Ebene, die Sie auf einer vorderen Fläche platziert haben, verschiebt sie 1 m ins Modell.
- {{ui:Umkehren}} dreht die Pfeile um, sodass die andere Seite weggeschnitten wird.
- {{ui:Aktiv (schneidet das Modell)}}: Jeweils eine Ebene schneidet. Setzen Sie den Haken im Kästchen einer anderen Ebene oder setzen Sie eine neue, und diese schneidet stattdessen.
- Benennen Sie sie unter {{ui:Name}} um; löschen Sie sie mit {{key:Delete}} oder dem {{ui:Radierer}}.

Wo die Ebene einen geschlossenen Volumenkörper durchläuft, wird der Schnitt dunkel ausgefüllt. Geometrie, die nicht geschlossen ist (eine einzelne Fläche, eine offene Schachtel), wird geschnitten, aber nicht ausgefüllt.

## Ein- und ausblenden

Unter {{ui:Ansichten}}:

- {{ui:Schnittebenen anzeigen}} blendet die Umrisse und Pfeile der Ebenen aus (der Schnitt bleibt).
- {{ui:Schnitte anzeigen}} schaltet den Schnitt aus und zeigt das ganze Modell, ohne die Ebenen zu löschen.

[Präsentationsansicht](topic:styles-shadows#presentation-view) blendet die Umrisse ebenfalls aus.

## Zu beachten

- Was weggeschnitten ist, kann nicht angeklickt oder eingerastet werden, sodass Sie auf dem zeichnen können, was der Schnitt zeigt.
- Schnittebenen, die aktive Ebene und die beiden Schalter werden in der ModelCraft-Datei gespeichert. Jede Änderung ist ein Rückgängig-Schritt.
- Exporte enthalten immer das ganze Modell: Ein Schnitt ist eine Ansicht, keine Änderung.
