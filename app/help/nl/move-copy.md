---
title: Verplaatsen, kopiëren en arrays maken
summary: Verplaats dingen door erop te klikken of over een exacte afstand, kopieer ze met een wijzigingstoets en maak een rij gelijkmatig verdeelde kopieën.
keywords: verplaatsen, kopiëren, dupliceren, array, rij, tussenafstand, verdelen, offset, uitrekken, kolommen, herhalen, meervoudig kopiëren
from: 280245fc
---

{{ui:Verplaatsen}} ({{key:M}}) verplaatst alles wat geselecteerd is van het ene punt naar het andere. Als u een wijzigingstoets vasthoudt, wordt het een kopie, en daarna kunt u typen hoeveel extra kopieën u wilt.

## Iets verplaatsen

1. Selecteer wat u wilt verplaatsen (zie [Objecten selecteren](topic:select)). Als er niets is geselecteerd, pakt {{ui:Verplaatsen}} het ding waarop u klikt.
2. Druk op {{key:M}}.
3. Klik op een punt om vanaf te verplaatsen. Kies iets betekenisvols, zoals een hoek: dat punt komt precies terecht waar u daarna klikt.
4. Beweeg de aanwijzer. De selectie volgt. Ze snapt naar punten, randen en de rode, groene en blauwe richtingen, net als een lijn.
5. Klik waar het punt naartoe moet, of typ een afstand en druk op {{key:Enter}}.

   De tip in de statusbalk keert terug naar "Klik op een punt om vanaf te verplaatsen…" voor de volgende verplaatsing.

Een getypte afstand gaat in de richting waarin u wijst. U kunt ook een exacte verschuiving typen, `<2m,0,0>` (2 m langs rood), of een exacte bestemming voor het punt dat u koos, `[0,0,0]` (de oorsprong). Zie [Exacte maten invoeren](topic:value-box).

Om langs slechts één as te verplaatsen, drukt u na het eerste klikken op een pijltjestoets: {{key:Right}} vergrendelt op rood, {{key:Left}} op groen, {{key:Up}} op blauw. Druk dezelfde pijltjestoets nogmaals om te ontgrendelen.

## Een deel van een vorm verplaatsen rekt die uit

Geometrie die niet gegroepeerd is, is verbonden. Als u één vlak of enkele randen selecteert en die verplaatst, worden de vlakken die eraan vastzitten meegerekt. Verplaats het bovenvlak van een doos opzij en de doos hangt scheef; verplaats één rand van het dak en het dak verandert van helling. Vlakken die niet meer vlak kunnen blijven, vouwen zich in driehoeken.

Om een heel object te verplaatsen zonder het uit te rekken, selecteert u het eerst helemaal (drievoudig klikken erop), of beter: maak er een groep of component van (zie [Groepen en componenten](topic:groups-components)).

## Iets kopiëren

1. Selecteer wat u wilt kopiëren.
2. Druk op {{key:M}}.
3. Houd {{key:Ctrl}} (of {{key:Alt}}) vast en klik op het punt om vanaf te verplaatsen. Op een Mac doet {{key:Mod}} of {{key:Alt}} hetzelfde. De tip zegt "Ctrl verplaatst in plaats daarvan", wat betekent dat u aan het kopiëren bent.

   U kunt na het eerste klikken ook {{key:Ctrl}} of {{key:Alt}} indrukken en loslaten om te wisselen tussen verplaatsen en kopiëren.

4. Klik waar de kopie moet komen, of typ een afstand en druk op {{key:Enter}}.

   Het origineel blijft staan waar het stond, en de kopie is geselecteerd.

## Kopiëren, knippen, plakken en dupliceren

- {{key:Mod+C}} kopieert de selectie, {{key:Mod+X}} knipt die (kopieert en wist daarna), {{ui:Kopiëren}} en {{ui:Plakken}} zijn ook knoppen in de groep {{ui:Bewerken}} van de werkbalk, en {{ui:Meer}} ernaast heeft knippen, plakken op dezelfde plaats en dupliceren.
- {{key:Mod+V}} plakt: een contour van de kopie volgt de aanwijzer, snapt zoals elk gereedschap, en een klik zet hem neer met zijn linkeronderhoek daar. {{key:Esc}} annuleert.
- {{key:Mod+Shift+V}} plakt op dezelfde plaats, precies waar de kopie vandaan kwam. Handig om iets in een groep die u open heeft te zetten.
- {{key:Mod+D}} ({{key:Shift+D}} in de Modeler-stijl) dupliceert: er wordt meteen een kopie gemaakt die met de aanwijzer meebeweegt. Klik om hem neer te zetten, typ een afstand, of druk op {{key:Esc}} om hem los te laten. Typ direct daarna `3x` voor meer kopieën op een rij.

Een geplakte groep wordt een nieuwe groep. Een geplakte component is een andere plaatsing van dezelfde component, dus als u er één bewerkt, veranderen ze allemaal mee. Kopieën worden ook in een ander ModelCraft-tabblad in deze browser geplakt (ze komen daar binnen als nieuwe definities).

## Een rij kopieën

Direct na een kopie, terwijl {{ui:Verplaatsen}} nog het gereedschap is:

- Typ `3x` (of `*3`) en druk op {{key:Enter}} voor drie kopieën op een rij, elk met dezelfde tussenafstand als de eerste kopie. U krijgt drie nieuwe kopieën naast het origineel.
- Typ `/3` en druk op {{key:Enter}} om te verdelen: drie kopieën gelijkmatig verspreid van het origineel tot waar u de eerste kopie zette, de laatste precies daar. Gebruik dit om een afstand op te vullen: plaats één kopie aan het verste eind en verdeel daarna.

Typ direct daarna een ander getal: `5x` vervangt de rij `3x`. De tip herinnert u eraan: "Gekopieerd. Typ 3x voor meer kopieën op een rij, of /3 om de afstand te verdelen."

### Voorbeeld: kolommen om de 6 meter

1. Maak een kolom en maak er een component van ({{key:G}}), zodat alle kopieën later samen veranderen.
2. Druk op {{key:M}}, houd {{key:Ctrl}} vast en klik op de onderhoek van de kolom.
3. Verplaats langs de rode as en typ `6m`, en dan {{key:Enter}}.
4. Typ `4x` en {{key:Enter}}. U heeft nu vijf kolommen, 6 m uit elkaar.

## Wat u moet weten

- Druk op {{key:Esc}} voor de tweede klik om te annuleren; alles gaat terug naar waar het stond.
- Verplaatsen werkt binnen de groep die u bewerkt. Om een hele groep te verplaatsen, sluit u haar eerst en selecteert u haar van buitenaf.
- Met **Botsen** aan (rechtsonder, en in de [ModelCraft-instellingen](topic:settings#solids-stop-where-they-touch)) stopt een verplaatsing waar de selectie een ander volume raakt, in plaats van er doorheen te gaan. Klik op {{ui:Botsen}} om het uit te zetten voor een verplaatsing die er wel doorheen moet.
- Om een kopie in een andere groep te zetten: kopieer haar, open de andere groep en plak ({{key:Mod+Shift+V}} houdt haar op dezelfde plaats).
