---
title: Nodes: Modell durch Verknüpfen aufbauen
summary: Zahlen mit Punkten, Punkte mit Kurven und Kurven mit Flächen verbinden. Ändern Sie eine Zahl, und alles Folgende wird neu erstellt. Jeder Knoten ist außerdem eine Zeile CraftScript, und der Graph wird in der Datei gespeichert.
keywords: nodes, Knoten, Knoten-Editor, visuelle Skripterstellung, parametrisch, Graph, Verbindungen, Anschlüsse, Freiform, freeform, nurbs, loft, Extrusion, Drehung, Kreis, Kurve, Fläche, Reihe, Bereich, Zufall, Liste, Skript, craftscript, grasshopper
from: 9c8e254f
---

Der **Nodes**-Editor baut Geometrie, indem er Kästchen miteinander verdrahtet. Jedes Kästchen (ein Knoten) erledigt eine kleine Aufgabe: eine Zahl erzeugen, einen Punkt, einen Kreis, einen Loft. Sie verbinden das Ergebnis des einen mit dem Eingang des nächsten, und das Modell folgt, wenn Sie eine Zahl am Anfang ändern.

Öffnen Sie ihn über das rechte Bedienfeld: {{ui:Nodes}} › {{ui:Nodes…}}. Eine Datei, die bereits einen Graphen enthält, öffnet ihn von selbst. Er ist ein Fenster über der 3D-Ansicht: Ziehen Sie an der Titelleiste, um es zu verschieben, und an der Ecke, um die Größe zu ändern.

## Verdrahten

1. Wählen Sie links in der Liste einen Knoten (geben Sie im Suchfeld ein, um die Auswahl einzugrenzen; <kbd>Enter</kbd> fügt den ersten Treffer hinzu). Er erscheint in der Mitte der Zeichenfläche.
2. Ziehen Sie von einem runden **Ausgang** rechts an einem Knoten zu einem runden **Eingang** links an einem anderen. Der Punkt wird grün, wenn es passt, und rot, wenn nicht; zeigen Sie darauf, um den Grund zu sehen.
3. Ein Eingang ohne Verbindung zeigt ein Feld für einen eingegebenen Wert. Geben Sie eine Zahl ein und drücken Sie <kbd>Tab</kbd>: Das Ergebnis wird neu erstellt.
4. Der kleine Kreis in der Titelleiste eines Knotens ist sein **Auge**. Ein Knoten mit eingeschaltetem Auge wird in der 3D-Ansicht gezeichnet: als Linien für Kurven, schattiert für Flächen, als Punkte für Punkte.

Ziehen Sie einen Knoten an seiner Titelleiste. Ziehen Sie den Hintergrund, um zu verschieben, drehen Sie das Mausrad, um zu zoomen. <kbd>Delete</kbd> entfernt den ausgewählten Knoten. {{ui:Aufräumen}} ordnet die Knoten in Spalten an, {{ui:Einpassen}} bringt alle ins Bild, und {{ui:Rückgängig}} und {{ui:Wiederholen}} gehen Ihre Änderungen Schritt für Schritt durch.

## Typen und Einheiten

Anschlüsse haben einen Typ: Zahl, Ja/Nein, Punkt, Vektor, Kurve, Fläche, Netz, Volumenkörper oder „Geometrie“ für jeden dieser Typen. Ein Punkt kann einen Vektoreingang speisen und umgekehrt. Zahlen tragen eine Einheit: Eine **Länge** ist in Millimetern angegeben, ein **Winkel** in Grad. Eine Länge kann keinen Winkel speisen, und eine Länge mal eine Länge (eine Fläche) wird abgelehnt. So wird eine falsche Verbindung schon beim Herstellen gestoppt.

Ein quadratischer Punkt ist eine **Liste**. Erreicht eine Liste einen Eingang für einzelne Werte, läuft der Knoten einmal für jedes Element, und sein Ergebnis wird wieder eine Liste. Die kürzere Liste wiederholt ihr letztes Element. Zum Beispiel erzeugt eine **Reihe** von Höhen, die in **Verschieben** geht, einen Stapel von Kopien.

## Volumenkörper und Boolesche Operationen als Knoten

Die Gruppe **Volumenkörper** erstellt geschlossene Körper aus denselben exakten Flächen wie das Bedienfeld Flächen: **Quader-Volumenkörper**, **Zylinder-Volumenkörper** und **Kugel-Volumenkörper** (Maße in mm), **Vereinigung**, **Subtrahieren** und **Schnittmenge** (der zweite Volumenkörper wird vom ersten genommen; die Toleranz gibt an, wie weit die Dreiecke der Volumenkörper-Engine von den exakten Flächen abweichen dürfen), **Verrundung zwischen Flächen** (die Flächen über ihre Nummer im Volumenkörper, 1 für die erste; ein Radius und, über 0, ein Radius am Ende), **Volumen des Volumenkörpers** (mm³) und **Volumenkörper in Netz** (zum Ansehen oder Einbacken). Ein Volumenkörper hat seinen eigenen Anschlusstyp: Ein Punkt oder eine Zahl kann nicht in einen Volumenkörper-Eingang verdrahtet werden, und der Punkt bleibt rot. Die Knoten für Boolesche Operationen und Verrundungen verwenden die eigene Volumenkörper-Engine des Programms, die beim ersten Öffnen des Editors geladen wird.

## Fehler

Ein Knoten, der seine Aufgabe nicht erledigen kann, sagt unter seinem Namen in Rot, warum („Der Radius muss größer als null sein.“), und die folgenden Knoten warten. Dieselbe Meldung erscheint als Problem im Bedienfeld „Probleme“, sodass Sie sie von dort aus finden können.

## Jeder Knoten ist eine Zeile Skript

Drücken Sie {{ui:Skript}}, um den Graphen als CraftScript zu sehen: eine Zeile pro Knoten, zum Beispiel `n3 = nd_circle(n2, n1, [0 0 1]);`. Bearbeiten Sie den Text und drücken Sie {{ui:Den Graphen aus diesem Skript erzeugen}}, um ihn wieder als Graph zu übernehmen. Dieselben `nd_`-Funktionen funktionieren in einem CraftScript in PartCraft, sodass ein Graph dort ausgeführt, wiederholt oder getestet werden kann. Zufallszahlen erhalten immer einen **Startwert** (Seed), damit derselbe Graph auf jedem Computer dasselbe Ergebnis liefert.

## Mit der Datei gespeichert

Der Graph wird in der Modelldatei gespeichert. Die Knoten erzeugen eigene Kurven, Flächen und Netze: Sie ändern die Flächen des Modells nicht, bevor Sie es verlangen.

## In Modell umwandeln

Schalten Sie das Auge eines Knotens ein, der eine Fläche oder ein Netz erzeugt, und drücken Sie dann im Nodes-Fenster {{ui:In Modell umwandeln}}. Jede angezeigte Fläche oder jedes Netz wird zu einer Gruppe von Flächen im Modell, in Metern, die Sie wie jede andere bearbeiten können. Das ist ein einziger Rückgängig-Schritt. Der Graph bleibt bestehen, aber die Kopie folgt ihm nicht mehr: Ändern Sie eine Zahl und wandeln Sie erneut um, um eine neue zu erhalten. Punkte und Kurven sind keine Volumenkörper und werden weggelassen; die Meldung nennt, wie viele es sind.
