---
title: Flächen zu Volumenkörpern drücken und ziehen
summary: Eine Fläche in einen Quader verwandeln, ein Gebäude höher oder niedriger machen, einen Erker oder eine Nische hinzufügen und eine Distanz per Doppelklick wiederholen.
keywords: Drücken/Ziehen, Extrudieren, Höhe, Volumenkörper, Quader, Masse, höher, Nische, herausdrücken, wiederholen, Doppelklick, Volumen, Ebene, auf Fläche, bündig, gleiche Höhe
from: dc093c91
---

{{ui:Drücken/Ziehen}} ({{key:P}}) verschiebt eine Fläche entlang ihrer eigenen Richtung: bei einem Boden nach oben und unten, bei einer Wand nach innen und außen. Was passiert, hängt von der Fläche ab.

## Aus einer Fläche einen Volumenkörper machen

1. Zeichnen Sie eine Fläche, zum Beispiel ein Rechteck auf dem Boden ([Flächen zeichnen](topic:draw-faces)).
2. Drücken Sie {{key:P}}.
3. Bewegen Sie den Mauszeiger über die Fläche. Sie wird hervorgehoben.
4. Klicken Sie auf die Fläche und bewegen Sie dann den Zeiger. Die Fläche steigt (oder sinkt), und an ihren Kanten wachsen Seiten. Das Wertfeld ({{ui:Distanz}}) und der Hinweis zeigen die Distanz.
5. Klicken Sie zum Abschließen, oder geben Sie eine Distanz ein und drücken Sie {{key:Enter}}: `3m`, `10'`, `2700` bei einem Modell in Millimetern.

   Jetzt haben Sie einen geschlossenen Volumenkörper. Wählen Sie alles aus und gruppieren Sie es (siehe [Gruppen und Komponenten](topic:groups-components)): {{ui:Objektinfo}} zeigt dann „Volumenkörper: Ja“ und sein Volumen.

Eine einzelne Fläche kann in beide Richtungen: Ziehen Sie sie nach oben für einen Baukörper über dem Boden, drücken Sie sie nach unten für eine Grube oder ein Fundament.

:::tip
Statt zweimal zu klicken, drücken Sie auf die Fläche, ziehen und lassen los. Auf einem Touchscreen ist das der natürliche Weg: drücken, ziehen, loslassen.
:::

## Auf die Höhe von etwas anderem ziehen

Beim Ziehen bewegen Sie den Zeiger über eine Ecke, einen Mittelpunkt, eine Kante oder eine Hilfslinie eines anderen Teils des Modells. Die Fläche rastet auf dieser Höhe ein, und eine Markierung zeigt den Punkt. Damit machen Sie zwei Blöcke gleich hoch oder halten an einer Hilfslinie an, die Sie mit dem [Maßband](topic:guides-measure) gesetzt haben.

Sie können auch den Zeiger über eine Fläche bewegen, die parallel zu der ist, die Sie drücken, etwa die Oberseite eines anderen Blocks oder die Oberseite des Kastens, auf dem eine Stütze steht. Der Hinweis sagt „Auf Fläche“, und die gedrückte Fläche endet bündig mit ihr. Drücken Sie zum Beispiel die Innenfläche eines Rohrs nach unten, bis sie mit dem Kasten unter dem Rohr bündig ist.

Eine Fläche in einem Winkel zu der gedrückten Fläche legt keine Höhe fest. Die Distanz folgt dem Zeiger. Ebenso eine Fläche hinter der Fläche, die Sie drücken.

Endet eine gedrückte Fläche wieder bündig mit den umliegenden Flächen, verschwinden ihre Seiten. Es bleiben keine Seiten mit Höhe null übrig, und der gezeichnete Umriss bleibt auf der Fläche, sodass Sie sie später erneut drücken können. Um sie wieder zu einer einzigen Fläche zu machen, löschen Sie die Kanten des Umrisses mit dem {{ui:Radierer}}: Die beiden Flächen verbinden sich.

## Einen Quader höher oder niedriger machen

Drücken/Ziehen Sie die Oberseite eines Quaders. Da die Seiten bereits gerade von ihr nach oben verlaufen, bewegt sich die Oberseite einfach: Der Quader wird höher oder niedriger, und es entstehen keine neuen Kanten.

- Drücken Sie die Oberseite ganz bis nach unten, verschwindet der Quader. ModelCraft hört bei Höhe null auf; der Quader wird nie von innen nach außen gestülpt.
- Dasselbe gilt für jede Fläche, deren Nachbarn alle in ihre Richtung verlaufen, etwa das Ende einer Wand.

## Einen Erker oder eine Nische hinzufügen

1. Zeichnen Sie ein Rechteck auf die Seite eines Quaders (beginnen Sie es auf der Fläche; es bleibt in der Ebene der Fläche).
2. Drücken Sie {{key:P}} und ziehen Sie das neue Rechteck **heraus**. Es fügt Material hinzu: einen Erker, einen Schornstein, ein Vordach.
3. Oder drücken Sie es **hinein**. Es schneidet eine Vertiefung: eine Veranda, eine Nische, einen zurückgesetzten Eingang.

Wenn die Seiten des neuen Teils mit bereits vorhandenen Flächen fluchten, verschmelzen sie zu einer Fläche, sodass Sie keine störenden Linien auf einer ebenen Wand erhalten.

## Ganz durchdrücken

Drücken Sie eine Fläche in einen Volumenkörper, hält sie an der ersten Fläche dahinter an. Erreicht sie diese Fläche, schneidet sie eine Öffnung hindurch. So machen Sie Fenster und Türen in einer Wand mit Dicke. Siehe [Eine Öffnung durch eine Wand schneiden](topic:openings).

## Eine Distanz eingeben

Geben Sie nach dem Klick auf die Fläche die Distanz ein und drücken Sie {{key:Enter}}.

- Die eingegebene Distanz geht in die Richtung, in die Sie sich bewegt haben. Haben Sie sich noch nicht bewegt, geht sie zur Vorderseite der Fläche (aus einem Volumenkörper heraus, vom Boden nach oben).
- Geben Sie eine negative Zahl ein, etwa `-500`, um in die andere Richtung zu gehen.
- Wenn Sie es sich vor dem Klick anders überlegen, drücken Sie {{key:Esc}}. Die Fläche geht zurück.

## Die letzte Distanz wiederholen

Nach einem Drücken/Ziehen doppelklicken Sie bei weiterhin aktivem {{ui:Drücken/Ziehen}} auf eine andere Fläche. Sie bewegt sich um dieselbe Distanz. So geben Sie mehreren Wänden oder Böden schnell dieselbe Dicke oder Höhe.

ModelCraft merkt sich die Distanz, bis Sie zu einem anderen Werkzeug wechseln.

## Wissenswertes

- Drücken/Ziehen arbeitet jeweils an einer Fläche. Klicken Sie auf etwas, das keine Fläche ist, zeigt die Statusleiste „Drücken/Ziehen arbeitet an einer Fläche. Klicken Sie auf eine Fläche.“
- Um eine Fläche in einer Gruppe oder Komponente zu drücken/ziehen, öffnen Sie diese zuerst (Doppelklick darauf).
- Ist **Kollision** aktiv, hält ein Drücken oder Ziehen, das auf einen anderen Volumenkörper trifft, dort an, wo es ihn berührt; der Hinweis nennt, was berührt wird (der Name des Objekts oder „lose Geometrie in dieser Gruppe“), und hebt die getroffenen Flächen hervor. Eine Tasche, die Sie in den eigenen Volumenkörper drücken (zum Beispiel eine versetzte Fläche, die zurückgedrückt wird), gehört zu diesem Volumenkörper und wird nie von seinen Wänden gestoppt.
- Zwei Volumenkörper, die ineinander gedrückt werden, schneiden oder verbinden sich nicht: Ihre Flächen gehen einfach durcheinander. Siehe [Noch nicht umgesetzt](topic:not-built-yet).
