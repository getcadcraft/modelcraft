---
title: Krommeobjecten
summary: Teken Bézier-, NURBS- en rechte-segmentkrommen, geef ze een dikte, breedte of taps toelopend verloop, vul vlakke krommen, zet tekst als kromme en zet ze om in meshes.
keywords: kromme, krommen, bézier, nurbs, spline, splines, pad, buis, pijp, kabel, touw, afschuining, extruderen, taper, kanteling, straal, vullen, profiel, tekst, letters, logo, kromme naar mesh
from: 602bf077
---

Een **krommeobject** is een kromme die een vorm maakt: een buis langs hem (afschuining), een band (extrusie), een taps toelopende hoorn (taper), of — als hij vlak en gesloten is — een gevulde plaat of letters. De vorm volgt de kromme: verplaats een punt en de buis beweegt mee. Als de vorm klopt, zet u hem om in een mesh.

## Een kromme toevoegen

Kies {{ui:Kromme}} in de lijst met werkomgevingen en druk op {{ui:Toevoegen}}:

| Soort | Wat het is |
|---|---|
| Bézier-kromme, Bézier-cirkel | Gaat door zijn punten; elk punt heeft twee handvatten die de richting van de kromme bepalen |
| NURBS-kromme, NURBS-cirkel, Pad | Glad, getekend naar zijn punten (begint en eindigt op zijn eindpunten); elk punt heeft een gewicht |
| Tekst | Uw tekst als vlakke, gevulde letteromtrekken |

Een nieuwe kromme krijgt een dunne buis zodat hij te zien en te selecteren is; zet de afschuiningsdiepte op 0 voor een kale kromme.

U kunt ook starten vanuit iets getekends: selecteer een boog, cirkel, veelhoek of getekende kromme in de werkomgeving Model en druk op {{ui:Een krommeobject maken}} in {{ui:Entity info}}. De getekende lijnen blijven staan.

## De punten bewerken

Dubbelklik op een krommeobject (of selecteer het en kies {{ui:Kromme}}) om het te bewerken.

- Klik op een punt of handvat ({{key:Shift}} voegt toe of verwijdert); sleep het om het te verplaatsen. Sleep op lege ruimte om met een kader te selecteren.
- {{ui:Verlengen}} ({{key:E}}, of {{key:Ctrl}}+klik) voegt een punt toe na het geselecteerde eind, bij de aanwijzer.
- {{ui:Verdelen}} ({{key:W}}) zet een punt tussen elk paar geselecteerde buren; een Bézier behoudt zijn vorm.
- {{ui:Verplaatsen}}, {{ui:Draaien}}, {{ui:Schalen}} verplaatsen de geselecteerde punten met de aanwijzer (modelleerdertoetsen {{key:G}} {{key:R}} {{key:S}}, push/pull-toetsen {{key:M}} {{key:Q}} {{key:S}}); klik om te bewaren, {{key:Esc}} om te annuleren.
- {{ui:Sluiten}} ({{key:C}}) sluit een open spline of opent een gesloten; {{ui:Omkeren}} ({{key:Shift+R}}) laat hem de andere kant op lopen.
- Bézier-handvatten: {{ui:Gladmaken}} ({{key:V}}) plaatst ze voor een gladde kromme, {{ui:Hoek}} ({{key:Shift+V}}) richt ze op de buren, {{ui:Vrij}} ({{key:Alt+V}}) laat ze staan waar u ze zet. Een handvat slepen maakt het vrij.
- {{ui:Bézier}}, {{ui:NURBS}} en {{ui:Polylijn}} wijzigen het type van de geselecteerde splines en behouden de punten.

Elke wijziging is één stap ongedaan maken.

## Vorm

De instellingen staan in het paneel (en in {{ui:Entity info}} in de werkomgeving Model):

- **Vorm:** 3D-krommen gaan alle kanten op; een vlakke kromme blijft in zijn eigen vlak en kan gevuld worden.
- **Gesloten splines vullen** (vlak): de omtrekken worden een plaat; een omtrek binnen een andere is een gat, zodat letters hun gaten behouden.
- **Extruderen:** de helft van de breedte van de band (open of 3D-krommen), of de helft van de dikte van de plaat (gevuld).
- **Afschuiningsdiepte** en **ronding:** een ronde buis langs de kromme (bij extruderen: een afgeronde band); bij een gevulde vorm een afgeronde rand.
- **Uiteinden sluiten:** doppen op een open buis.
- **Taps toelopen langs de kromme:** schaalt gelijkmatig langs elke spline, bijvoorbeeld `1, 0.2` voor een hoorn, `0, 1, 0` voor een spoel.
- **Gladheid** en, voor NURBS, **orde**: hoe fijn hij getekend wordt, en hoe glad (2 recht … 6 gladst).
- Met geselecteerde punten: **straal** (de dikte van de buis daar, maal de afschuining), **kanteling** (draait de band om de kromme) en, voor NURBS, **gewicht**.

Modifiers werken bovenop een krommeobject zoals op een mesh: een Array langs de kromme, een spiegel, een Subdivision-oppervlak. Zie [Modifiers op een mesh](topic:modifiers).

## Omzetten naar een mesh

{{ui:Naar mesh}} (in de werkomgeving Kromme of in {{ui:Entity info}}, {{ui:Kromme naar mesh}}) maakt van het krommeobject de mesh die het nu toont; zijn modifiers blijven erbovenop. Bewerk hem daarna in de werkomgeving Mesh. Ongedaan maken zet hem terug.

Zie ook [Meshes](topic:meshes) en [Een mesh bewerken](topic:mesh-edit).
