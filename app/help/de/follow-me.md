---
title: Folge mir: Fläche entlang eines Pfads führen
summary: Rohre, Kabel, Handläufe, Profilleisten und Ringe erstellen, indem Sie eine Fläche entlang von Kanten, Bögen oder einer Kurve führen.
keywords: Folge mir, Sweep, Pfad, Rohr, Kabel, Röhre, Handlauf, Profilleiste, Zierleiste, Dachrinne, Ring, Torus, Drehkörper, entlang extrudieren
from: ec7b3839
---

{{ui:Folge mir}} bewegt eine Fläche entlang eines Pfads und baut den Volumenkörper, den sie durchläuft. Die Fläche behält ihre Form und steht rechtwinklig zum Pfad. An jeder Ecke des Pfads treffen sich die Teile auf einer sauberen Gehrung.

## Ein Kabel erstellen

1. Zeichnen Sie den Pfad: eine {{ui:Kurve}} durch die Punkte, die das Kabel durchläuft (sie kann steigen und fallen), oder {{ui:Linie}}n und {{ui:Bogen}}-Teile, Ende an Ende verbunden.
2. Zeichnen Sie am Anfang des Pfads den Querschnitt des Kabels: einen kleinen {{ui:Kreis}} quer zum Pfad. Beginnen Sie den Kreis am Endpunkt des Pfads und drehen Sie ihn, damit er entlang des Pfads zeigt. Oder zeichnen Sie ihn auf einer Fläche, die den Pfad dort kreuzt.
3. Wählen Sie den Pfad aus (ein Klick wählt eine ganze Kurve oder einen Bogen; {{key:Ctrl}}+Klicken fügt weitere Kanten hinzu).
4. Klicken Sie in der Gruppe {{ui:Ändern}} auf {{ui:Folge mir}} und dann auf den Kreis.

Die Röhre ist ein geschlossener Volumenkörper mit glatten (weichen) Seiten.

## Ohne den Pfad vorher auszuwählen

Klicken Sie auf {{ui:Folge mir}}, klicken Sie auf die Fläche und dann auf eine beliebige Kante des Pfads. Der Pfad ist die Kette von Kanten durch diese Kante, bis dorthin, wo sich drei oder mehr Kanten treffen.

## Wissenswertes

- **Geschlossene Pfade** (ein Kreis, eine geschlossene Kurve, der Umriss eines Rechtecks) ergeben einen Ring: Die Fläche wird verbraucht, und der Ring schließt sich selbst. Zeichnen Sie einen Kreis auf den Boden als Pfad und einen kleinen Kreis, der quer darauf steht, für einen Donut.
- **Abseits des Pfads:** Die Fläche muss den Pfad nicht berühren. Ein Profil neben einem Pfad wird neben ihm entlanggeführt, wie eine Leiste oben an einer Wand.
- **Der Pfad darf sich nicht verzweigen** und muss eine einzige zusammenhängende Kette sein. ModelCraft meldet das, wenn es nicht so ist.
- **Eine Fläche, die entlang des Pfads liegt** (in derselben Ebene wie die erste Kante des Pfads), kann nicht entlanggeführt werden. Drehen Sie sie, damit sie den Pfad kreuzt.
- Es ist ein Rückgängig-Schritt.
