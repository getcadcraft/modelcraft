---
title: Draaien en schalen
summary: Draai dingen om een punt door te klikken of door graden in te typen, en wijzig het formaat gelijkmatig met een factor.
keywords: schaalgrips, uitrekken, niet-uniform, per as, spiegelen, gespiegelde kopie, spiegelen langs, roteren, draaien, hoek, graden, gradenboog, schalen, formaat wijzigen, vergroten, verkleinen, factor, uniform schalen
from: 45cdcb49
---

## Draaien

{{ui:Draaien}} ({{key:Q}}) draait de selectie om een middelpunt. Het gaat in drie klikken: het middelpunt, een beginrichting en de eindrichting.

1. Selecteer wat u wilt draaien. Als er niets is geselecteerd, neemt Draaien het ding waarop u eerst klikt.
2. Druk op {{key:Q}}. Een ring volgt de aanwijzer en toont het vlak waarin u gaat draaien.
3. Klik op het middelpunt van de draaiing.
   - Op de grond of in lege ruimte ligt de ring plat (blauw): de draaiing is om een verticale as, zoals een gebouw op zijn terrein draaien.
   - Op een vlak ligt de ring in het vlak van dat vlak: de draaiing is om de eigen richting van het vlak. Klik op een wand om iets om een horizontale as te draaien.
4. Klik op een punt dat bepaalt waar de hoek begint, bijvoorbeeld langs een rand van het ding dat u draait.
5. Beweeg de aanwijzer rond het middelpunt. De hoek verschijnt in de tip en in het waardevak ({{ui:Hoek}}). Hij springt in stappen van 15° wanneer u er dichtbij komt.
6. Klik om af te ronden, of typ de hoek in graden en druk op {{key:Enter}}: `90`, `45`, `-30`.

   Positieve hoeken draaien tegen de klok in, gezien vanaf de kant waar de ring naartoe is gericht.

Druk op {{key:Ctrl}} (of {{key:Alt}}) terwijl u draait om een **kopie** te draaien en het origineel te laten staan, zoals bij Verplaatsen; de tip zegt of kopiëren aan staat, en door de toets opnieuw in te drukken, gaat het uit. Typ `3x` direct na een gedraaide kopie voor meer kopieën rond hetzelfde middelpunt.

Net als bij Verplaatsen vervormt het draaien van een deel van verbonden geometrie de vlakken die eraan vastzitten. Groepeer dingen eerst om ze geheel te draaien.

:::note
De tip zegt dat de pijltoetsen de draaias kiezen, maar in deze versie draaien ze de weergave er voor de eerste klik omheen. Om de as te kiezen, klikt u het middelpunt aan op een vlak dat de gewenste kant op staat. Zie [Nog niet beschikbaar](topic:not-built-yet).
:::

## Schalen

{{ui:Schalen}} ({{key:S}}) wijzigt het formaat van de selectie. Selecteer eerst wat u het formaat wilt geven en druk dan op {{key:S}}: kleine vierkantjes (grips) verschijnen op de hoeken, de randen en de middens van de zijden van de doos.

### Uitrekken of schalen met de grips

- Een **hoekgrip** schaalt gelijkmatig in alle richtingen, rond de tegenoverliggende hoek.
- De grip in het midden van een **zijde** rekt alleen in die richting uit, rond de tegenoverliggende zijde: maak een doos langer zonder hem hoger te maken.
- De grip in het midden van een **doosrand** rekt uit in de twee richtingen dwars erop.
- Houd {{key:Ctrl}} ingedrukt wanneer u op een grip klikt om rond het midden van de doos te schalen.

Klik op een grip, beweeg de aanwijzer en klik opnieuw; of klik op de grip en typ een factor (`2` verdubbelt, `0.5` halveert) en druk op {{key:Enter}}. Om elke richting een eigen factor te geven, typt u er drie, voor rood, groen en blauw: `2,1,0.5`. Binnen een open groep zijn de richtingen die van de groep zelf.

### Schalen rond een willekeurig punt

Klik ergens anders dan op een grip om gelijkmatig te schalen rond een punt naar keuze. Het gaat in drie klikken:

1. Selecteer wat u het formaat wilt geven. Als er niets is geselecteerd, neemt Schalen het ding waarop u eerst klikt.
2. Druk op {{key:S}}.
3. Klik op het punt dat blijft staan (niet op een grip), bijvoorbeeld een hoek onderaan.
4. Klik op een referentiepunt. De afstand daarvan tot het eerste punt telt als 1×.
5. Beweeg de aanwijzer naar het eerste punt toe of ervan af. De factor verschijnt in de tip en in het waardevak ({{ui:Schalen}}).
6. Klik om af te ronden, of typ een factor en druk op {{key:Enter}}: `2` verdubbelt het formaat, `0.5` halveert het.

### Schalen naar een exact formaat

Om iets een exacte lengte te geven, berekent u de factor: nieuwe lengte gedeeld door de huidige lengte. In de modus met drie klikken rekent het waardevak; typ `4.2/3.6` om een muur van 3.6 m 4.2 m lang te maken. Het waardevak van een grip accepteert alleen gewone getallen: bereken de factor eerst (4.2 gedeeld door 3.6 is ongeveer 1.1667). Selecteer eerst de rand om de huidige lengte te zien in {{ui:Entiteitsinformatie}}.

### Een import met het verkeerde formaat corrigeren

OBJ-bestanden hebben geen eenheid, dus een model dat in millimeter is getekend, komt 1000 keer te groot binnen. Selecteer de geïmporteerde groep, druk op {{key:S}}, klik op een hoekgrip, typ `0.001` en druk op {{key:Enter}}. Voor een model dat in inch is getekend, typt u `0.0254`.

## Wat u moet weten

- Schalen rond een punt met de drie klikken is gelijkmatig. Om alleen in één richting uit te rekken, gebruikt u een zij- of randgrip (zie hierboven).
- Een groep of component schalen verandert de kopie die u schaalt; andere kopieën van een component behouden hun formaat.
- Druk op {{key:Esc}} vóór de laatste klik om te annuleren.

## Spiegelen

{{ui:Bewerken}} › {{ui:Meer}} › {{ui:Spiegelen langs rood}}, {{ui:Spiegelen langs groen}} of {{ui:Spiegelen langs blauw}} spiegelt de selectie op zijn plaats, door het midden van de doos: een linkertrap wordt een rechtertrap. Vlakken blijven naar buiten gericht, en een groep of component wordt als geheel gespiegeld (de binnenkant wordt niet herschreven).

{{ui:Gespiegelde kopie langs rood}} (en groen, blauw) laat het origineel staan en zet een gespiegelde kopie ernaast, aan de verre kant van de doos van de selectie: de andere deur van een paar, de andere vleugel van een gebouw. Losse geometrie die daar aanraakt, voegt zich bij het origineel, zoals aanrakende geometrie altijd doet; maak het origineel eerst een groep om ze gescheiden te houden.

Binnen een open groep zijn rood, groen en blauw de eigen assen van de groep.
