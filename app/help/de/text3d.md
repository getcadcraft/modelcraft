---
title: 3D-Text
summary: Schrift als Flächen zum Modell hinzufügen, flach oder massiv, auf jeder beliebigen Fläche stehend: ein Schild, eine Hausnummer, ein Name an einer Tür.
keywords: 3D-Text, Text, Buchstaben, Schrift, Beschriftung, Schild, Beschilderung, Hausnummer, Etikett, gravieren, Schriftart, Wörter
from: 923f5d93
---

{{ui:3D-Text}} in der Gruppe {{ui:Zeichnen}} erzeugt Schrift aus Flächen, die Sie färben, mit {{ui:Drücken/Ziehen}} verschieben oder in einen Volumenkörper schneiden können.

## Text hinzufügen

1. Klicken Sie auf {{ui:3D-Text}}.
2. Geben Sie den Text ein. Drücken Sie im Feld {{key:Enter}} für eine zweite Zeile.
3. Legen Sie die {{ui:Buchstabenhöhe}} fest (die Höhe eines Großbuchstabens, etwa `30cm` oder `1'`) und die {{ui:Tiefe}}:
   - `0` ergibt **flache Buchstaben**: Flächen, die auf dem liegen, worauf Sie sie platzieren, bereit zum Färben oder für {{ui:Drücken/Ziehen}}.
   - Eine Tiefe wie `5cm` ergibt **massive Buchstaben**: geschlossene Volumenkörper, die Sie mit den [Volumenkörper-Werkzeugen](topic:solids) verwenden können.
4. Klicken Sie auf {{ui:Platzieren}} und dann dorthin, wo der Text hin soll.

Auf einer Fläche liegt der Text auf dieser Fläche und ist von links nach rechts lesbar: An einer Wand steht er aufrecht; auf dem Boden oder einem Tisch liegt er flach entlang Rot. Abseits jeder Fläche liegt er auf dem Boden.

Der Text ist eine nach ihm benannte **Komponente**. Wenn Sie eine Kopie ändern, ändern sich alle; und er erscheint in der Liste {{ui:Komponenten}}, um ihn erneut zu platzieren.

## Wissenswertes

- Die Buchstaben stammen aus der eigenen Einzellinienschrift von ModelCraft, verdickt: sauber und lesbar, bisher ohne Auswahl an Schriftarten.
- Buchstaben, Ziffern und gängige Zeichen (einschließlich akzentuierter Buchstaben) werden gezeichnet; ein Zeichen, das die Schrift nicht hat, wird als kleines Kästchen angezeigt.
- Um die Wörter zu ändern, löschen Sie den Text und fügen ihn erneut hinzu.
- Um Schrift in eine Oberfläche zu schneiden, erstellen Sie massive Buchstaben, platzieren sie halb in einer massiven Gruppe und [subtrahieren](topic:solids) sie.
