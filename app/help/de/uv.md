---
title: Die UVs eines Netzes anordnen
summary: Nähte markieren, abwickeln, projizieren und anordnen die Texturkoordinaten eines Netzes im UV-Arbeitsbereich, und Sie prüfen sie mit einem Karomuster und den Streckfarben.
keywords: uv, uvs, abwickeln, abwicklung, naht, nähte, textur, texturkoordinaten, atlas, anordnen, anordnung, insel, inseln, karo, streckung, verzerrung, quaderprojektion, zylinderprojektion, kugelprojektion, konform, winkelbasiert, lscm, abf
from: 00028f20
---

Eine Textur ist ein flaches Bild; ein Netz ist nicht flach. Seine **UVs** legen fest, wo jede Ecke jeder Fläche auf dem Bild liegt. Der UV-Arbeitsbereich erstellt sie: Sie schneiden das Netz entlang von **Nähten** auf, legen die Teile flach (**abwickeln**) und passen sie in das Quadrat ein (**anordnen**).

## Öffnen

Wählen Sie ein Netz und wählen Sie {{ui:UV}} in der Liste {{ui:Arbeitsbereich}}. Eine Gruppe oder Komponente wird zuerst zu einem Netz, so wie im Arbeitsbereich {{ui:Netz}}. Die 3D-Ansicht wechselt in die linke Hälfte; der **UV-Editor** rechts zeigt die Flächen des Netzes, auf dem Texturquadrat ausgelegt. Das Wählen funktioniert wie im Arbeitsbereich Netz, und was Sie in einer Ansicht wählen, ist in der anderen ebenfalls gewählt.

## Nähte markieren

Nähte sind Stellen, an denen das Netz aufgeschnitten werden darf; sie werden in beiden Ansichten rot angezeigt.

- Wählen Sie Kanten ({{ui:Kante}} oder {{key:2}}) und drücken Sie {{ui:Naht markieren}} ({{key:Ctrl+E}}). {{ui:Naht entfernen}} ({{key:Ctrl+Shift+E}}) hebt sie wieder auf.
- {{ui:Nähte an scharfen Kanten}} markiert jede scharfe Kante und jede Kante, an der Flächen in einem Winkel von mehr als 60° aufeinandertreffen: Ein Quader zerfällt so in seine sechs Seiten.
- {{ui:Nähte aus UVs}} markiert Nähte, an denen die UVs bereits brechen, etwa nach einer Projektion.

Ein geschlossenes Teil braucht Nähte, damit es flach liegt: Eine Kugel braucht mindestens einen Schnitt, eine Röhre einen Schnitt entlang ihrer Länge.

## Abwickeln

Wählen Sie die Flächen zum Auslegen (oder keine, für das ganze Netz) und drücken Sie {{ui:Abwickeln}} ({{key:U}}). Jedes Teil zwischen den Nähten wird flach gelegt und behält seine Winkel so genau wie möglich bei (winkelbasiertes Glätten); danach werden die Teile in das Quadrat angeordnet. {{ui:Konform}} wickelt stattdessen mit konformen Abbildungen nach der Methode der kleinsten Quadrate ab: schneller, bei stark gekrümmten Teilen etwas weniger genau. Eine Form, die aus einem flachen Blech entstehen kann, etwa die einmal aufgeschnittene Mantelfläche eines Zylinders, wickelt sich ganz ohne Streckung ab.

## Projizieren

Bei einfachen Formen reicht oft eine Projektion:

| Projektion | Was sie tut |
| --- | --- |
| {{ui:Quader}} | Jede Fläche auf die Seite eines Quaders, der sie am stärksten zugewandt ist |
| {{ui:Zylinder}} | Um die blaue Achse: quer ist der Winkel um die Achse, nach oben die Höhe |
| {{ui:Kugel}} | Vom Mittelpunkt aus: quer ist der Winkel um die Achse, nach oben die Breite |
| {{ui:Aus der Ansicht}} | So, wie die Flächen jetzt in der 3D-Ansicht zu sehen sind |

Eine Fläche, die über die Verbindungsstelle von Zylinder oder Kugel läuft, bleibt in einem Stück, sodass ihre UVs ein Stück über den rechten Rand des Quadrats hinauslaufen können; dort wiederholen sich die Texturen.

## Anordnen

- {{ui:Anordnen}} passt die Teile (Inseln) bei einer einheitlichen Texelgröße in das Quadrat ein, jedes so gedreht, dass es am wenigsten Platz braucht. Der Bereich legt den Abstand zwischen ihnen fest.
- {{ui:90° drehen}} und {{ui:Spiegeln}} drehen oder spiegeln die UVs der gewählten Flächen.
- Im UV-Editor ziehen Sie eine gewählte Fläche, um die UVs der Auswahl zu verschieben. Oder Sie zeigen auf den Editor, drücken {{key:R}} oder {{key:S}} und bewegen dann die Maus, um sie zu drehen oder zu skalieren (ein Klick behält die Änderung, {{key:Esc}} bricht ab). {{key:G}} verschiebt ohne Ziehen. Doppelklicken Sie auf eine Fläche (oder drücken Sie {{key:L}}), um ihre ganze Insel zu wählen. Das Mausrad zoomt; ziehen Sie mit der mittleren oder rechten Taste, um zu schwenken; {{key:F}} passt das Quadrat wieder ein.

Jede Änderung ist ein Rückgängig-Schritt.

## Prüfen

- {{ui:Karo}} zeigt ein beschriftetes Karomuster auf dem Netz in seinen UVs: gleichmäßige, quadratische Karos bedeuten, dass die Textur gleichmäßig liegt; die Beschriftungen zeigen, in welche Richtung sie verläuft.
- {{ui:Streckung}} färbt jede Fläche danach ein, wie stark ihre UVs sie strecken: Blau keine, über Grün bis Rot stark. Der Bereich legt fest, ob das **Winkel verbogen** oder **Größe verändert** misst, und zeigt den Durchschnitt.

Siehe auch [Ein Netz bearbeiten](topic:mesh-edit), [Netze](topic:meshes) und [Modifikatoren an einem Netz](topic:modifiers).
