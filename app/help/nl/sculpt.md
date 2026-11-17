---
title: Een mesh boetseren
summary: Vorm een mesh als klei met kwasten — tekenen, klei, gladmaken, grijpen, opblazen, kreuk, knijpen, vlakmaken — bescherm delen met een masker, spiegel over X, en voeg detail toe waar u boetseert.
keywords: boetseren, sculpten, kwast, kwasten, klei, tekenen, gladmaken, grijpen, opblazen, kreuk, knijpen, vlakmaken, masker, symmetrie, spiegelen, detail, dynamische topologie, pen, druk, tablet, stylus
from: 5477801a
---

De werkomgeving Boetseren vormt een mesh met kwasten, zoals met klei: sleep over het oppervlak en het stijgt, zakt, wordt gladgemaakt of volgt de aanwijzer onder een ronde kwast, het sterkst in het midden en vervagend tot niets aan de rand.

## Starten

Selecteer een mesh en kies {{ui:Boetseren}} in de lijst Werkomgeving. Een groep of component wordt eerst een mesh, zoals in de werkomgeving Mesh. Kwasten werken op de hoekpunten van de mesh, dus een mesh met er meer krijgt fijnere vormen: verdeel hem eerst ({{ui:Verdelen}} van de werkomgeving Mesh, of een Subdivision surface-modifier die u toepast), of zet {{ui:Detail}} aan.

## Kwasten

| Kwast | Toets | Wat het doet |
| --- | --- | --- |
| {{ui:Tekenen}} | {{key:D}} | Verhoogt het oppervlak onder de kwast |
| {{ui:Klei}} | {{key:C}} | Bouwt vlakke lagen op en vult eerst de inzinkingen |
| {{ui:Gladmaken}} | {{key:S}} | Egaliseert bobbels; houd {{key:Shift}} ingedrukt om met elke kwast glad te maken |
| {{ui:Grijpen}} | {{key:G}} | Trekt het oppervlak mee met de aanwijzer |
| {{ui:Opblazen}} | {{key:I}} | Zwelt het oppervlak uit langs zijn eigen richting |
| {{ui:Kreuk}} | {{key:Shift+C}} | Snijdt een scherpe groef |
| {{ui:Knijpen}} | {{key:P}} | Trekt het oppervlak naar het midden van de kwast |
| {{ui:Vlakmaken}} | {{key:T}} | Drukt het oppervlak naar zijn gemiddelde vlak |
| {{ui:Masker}} | {{key:M}} | Schildert een masker dat het oppervlak beschermt tegen de andere kwasten |

Houd {{key:Ctrl}} ingedrukt tijdens een streek om de andere kant op te werken (omlaag in plaats van omhoog, een rand in plaats van een groef, het masker verwijderen), of zet {{ui:Wegnemen}} aan.

## Grootte en sterkte

De grootte van de kwast is in pixels op het scherm, zodat hij overal hetzelfde aanvoelt, hoe ver u ook zoomt: {{key:[}} en {{key:]}} maken hem kleiner en groter, {{key:Shift+[}} en {{key:Shift+]}} wijzigen zijn sterkte. Het paneel toont beide.

Met een pen op een tablet maakt harder drukken de kwast groter en sterker; het paneel schakelt elk van beide uit.

## Spiegelen, masker en detail

- {{ui:Spiegelen X}} ({{key:X}}) boetseert beide kanten tegelijk over rood, voor gezichten en figuren.
- Het masker wordt donkerder weergegeven terwijl u boetseert. {{ui:Masker wissen}} ({{key:Alt+M}}) haalt het weg, {{ui:Masker omkeren}} ({{key:Ctrl+I}}) maskeert wat vrij was en maakt vrij wat gemaskeerd was. Het masker wordt bewaard bij de mesh.
- {{ui:Detail}} voegt driehoeken toe waar u boetseert: randen die langer zijn dan de grootte die in het paneel is ingesteld (pixels op het scherm), worden onder de kwast gesplitst. Het heeft een mesh van driehoeken nodig en vraagt om er eerst een te maken.

Elke streek is één stap in ongedaan maken.

:::note
Detail voegt alleen driehoeken toe; het neemt er geen weg die klein zijn geworden. Een Remesh (de werkomgeving Mesh) egaliseert de hele mesh weer.
:::

Zie ook [Een mesh bewerken](topic:mesh-edit), [Meshes](topic:meshes) en [Modifiers op een mesh](topic:modifiers).
