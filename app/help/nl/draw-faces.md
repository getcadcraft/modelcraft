---
title: Vlakken tekenen met lijnen, rechthoeken, cirkels en bogen
summary: Maak vlakke vlakken op de grond of op andere vlakken, splits ze met lijnen, en teken cirkels en veelhoeken met het aantal zijden dat u wilt.
keywords: tekenen, lijn, rechthoek, cirkel, veelhoek, offset, insprong, kader, rand, boog, kromme, spline, glad, kabel, pad, bolling, straal, kromme, vlak, plattegrond, voetafdruk, splitsen, zijden, segmenten, omtrek, potlood
from: b6d7b7dd
---

Alles in ModelCraft begint als een **vlak**: een oppervlak dat door randen is afgesloten. U kunt een vlak direct tekenen met {{ui:Rechthoek}}, {{ui:Cirkel}} of {{ui:Veelhoek}}, of één rand tegelijk omtrekken met {{ui:Lijn}}. Vlakken zijn wat [Duwen en trekken](topic:push-pull) in volumes verandert.

## Een rechthoek tekenen

1. Druk op {{key:R}}.
2. Klik op het eerste hoekpunt: op de grond, of op een vlak van het model.
3. Beweeg de aanwijzer. De rechthoek blijft op de grond (of op het vlak waarop u begon), en het waardeveld ({{ui:Maatvoeringen}}) toont de breedte en diepte. De tip zegt "Vierkant" wanneer de zijden gelijk zijn.

   Om op een ander vlak te tekenen, richt u de aanwijzer erop: een vlak dat door het eerste hoekpunt loopt, zet de rechthoek op dat vlak, en snappen naar een punt buiten het vlak (een eindpunt, een rand, de blauwe as) zet de rechthoek rechtop door beide hoekpunten. Snap terug naar een punt op het eerste vlak en hij ligt weer plat. Om één vlak vast te houden, drukt u op een pijltjestoets: {{key:Up}} houdt de rechthoek horizontaal (het blauwe vlak), {{key:Right}} op het rode vlak, {{key:Left}} op het groene vlak. Druk nogmaals op dezelfde toets om te ontgrendelen.
4. Klik op het tegenoverliggende hoekpunt, of typ de twee maten gescheiden door een komma en druk op {{key:Enter}}: `4m,3m`, `4000,3000` in een model in millimeters, of `12',10'6"` in voet en duim.

   Er verschijnt een vlak met vier randen eromheen.

De getypte maten gaan in de richting waarin u wees: als de aanwijzer links van het eerste hoekpunt staat wanneer u typt, groeit de rechthoek naar links.

:::warning
De komma scheidt de twee maten, dus die kan geen decimaalteken zijn. Typ `2.5m,3m`, nooit `2,5m`.
:::

## Een cirkel of veelhoek tekenen

1. Druk op {{key:C}} voor een cirkel of op {{key:N}} voor een veelhoek.
2. Om het aantal zijden te wijzigen, typt u het vóórdat u klikt: `12s` (of alleen `12`) en {{key:Enter}}. Een cirkel begint met 24 zijden en een veelhoek met 6. De tip toont het huidige aantal, en ModelCraft houdt het voor de volgende cirkel tot u het wijzigt of van gereedschap wisselt.
3. Klik op het middelpunt, op de grond of op een vlak. Om op een vlak te centreren, richt u de aanwijzer op het midden van het vlak ("Middelpunt van vlak") of op het midden van een van de randen ("Middelpunt van lijn"), met de aanwijzer net binnen dat vlak: de cirkel wordt op dat vlak getekend, zelfs op het smalle uiteinde van een lange doos.
4. Klik om de straal in te stellen, of typ hem ({{ui:Straal}} in het waardeveld) en druk op {{key:Enter}}.

Een cirkel is een veelhoek met veel zijden. Wanneer u een cirkel omhoog trekt met Duwen en trekken, worden de zijden verzacht zodat de cilinder als één glad oppervlak leest.

## Een boog tekenen

1. Druk op {{key:A}} ({{ui:Boog}}).
2. Klik waar de boog begint, en daarna waar hij eindigt (of typ de lengte ertussen).
3. Beweeg de aanwijzer om de boog naar buiten te laten bollen, en klik. De tip zegt "Halve cirkel" wanneer de bolling de helft van de afstand tussen de uiteinden is. Of typ hoe ver het midden afstaat: `2` en {{key:Enter}}.

Om in plaats daarvan een boog rond een punt te tekenen, gebruikt u {{ui:Boog vanuit middelpunt}}: klik op het middelpunt, daarna waar de boog begint (of typ de straal), en daarna waar hij eindigt (of typ de hoek in graden, zoals `90`). Hij snapt in stappen van 15°.

Een boog die op een vlak begint, wordt op dat vlak getekend; anders ligt hij op de grond, of staat hij rechtop wanneer zijn twee uiteinden op verschillende hoogten liggen. Een boog heeft 12 segmenten; typ `24s` tijdens het tekenen voor meer. Bogen sluiten vlakken net zoals lijnen dat doen: een boog over de hoek van een rechthoek splitst hem.

## Een vloeiende kromme tekenen

{{ui:Kromme}} tekent een vloeiende lijn die door elk punt gaat dat u aanklikt: een kabel, het pad van een trapleuning, een tuinrand. Hij kan van de grond af: punten snappen naar hoekpunten, randen en vlakken overal, en de pijltjestoetsen vergrendelen rood, groen of blauw, zoals bij {{ui:Lijn}}.

1. Klik op {{ui:Kromme}} in de groep {{ui:Tekenen}}.
2. Klik de punten aan waar de kromme doorheen gaat. Typ `<0,0,1>` en {{key:Enter}} voor een punt 1 boven het laatste, `[x,y,z]` voor een exacte plek, of een lengte voor een punt zo ver richting de aanwijzer.
3. Druk op {{key:Enter}} of dubbelklik om af te ronden. Klik opnieuw op het eerste punt om de kromme te sluiten. {{key:Backspace}} neemt het laatste punt terug.

Een kromme selecteert als één stuk. Om hem te wijzigen, selecteert u hem en klikt u op {{ui:Punten bewerken}} in {{ui:Entiteitsinformatie}}: de punten verschijnen als vierkantjes. Klik op één, en klik dan waar het punt naartoe moet (of typ `<dx,dy,dz>`). {{key:Esc}} zet een punt terug en beëindigt het bewerken. Een gesloten vlakke kromme maakt een vlak; een kromme die een vlak omtrekt, kan niet meer worden bewerkt.

## Offset: een rand binnen of buiten een vlak

{{ui:Offset}} kopieert de omtrek van een vlak op een ingestelde afstand naar binnen (of naar buiten), voor een kader, een rand, een dorpel of het glas van een scherm.

1. Druk op {{key:F}} en klik op het vlak, of selecteer eerst het vlak en druk daarna op {{key:F}}.
2. Beweeg de aanwijzer het vlak in voor een binnenomtrek, of eruit voor een buitenomtrek. De nieuwe omtrek volgt, en de tip zegt hoe ver.
3. Klik, of typ de afstand en druk op {{key:Enter}}.

Het vlak splitst zich in twee: het binnenste vlak en een kader eromheen (of een nieuwe ring buiten). Duw of trek een van beide direct weg: voor een scherm tekent u de doos, duwt u die naar zijn dikte, offset u het voorvlak 30 mm naar binnen en duwt u het binnenste vlak een beetje in voor het glas. Gaten in het vlak worden ook geoffset, en een boog of cirkel blijft één (kleinere of grotere) kromme.

- **Dubbelklik** op een vlak met {{ui:Offset}} om het opnieuw te offsetten met de laatste afstand.
- **Randen:** selecteer een keten van verbonden randen in één vlak (bijvoorbeeld de twee lijnen van een L), druk op {{key:F}}, beweeg naar de kant die u wilt en typ de afstand: er wordt een evenwijdige kopie getekend, met verstekhoeken.
- Wanneer de afstand groter is dan het vlak toestaat, meldt ModelCraft dat en tekent het niets.

## Bogen, cirkels en veelhoeken zijn krommen

Klik op een segment van een boog, een cirkel of een veelhoek en de hele kromme wordt geselecteerd. {{ui:Entiteitsinformatie}} toont dan de straal, de segmenten, de hoek (bij bogen) en de lengte. Typ daar een nieuwe straal om hem rond zijn middelpunt te vergroten of verkleinen; vlakken die in zijn vlak zijn getekend volgen. Zodra het vlak van een kromme is geduwd of getrokken, blijft de straal zoals hij is.

## Tekenen met lijnen

1. Druk op {{key:L}}.
2. Klik waar de lijn begint.
3. Klik waar hij eindigt, of typ een lengte en druk op {{key:Enter}}. De getypte lengte gaat in de richting die de aanwijzer aangeeft.
4. Blijf klikken. Elke klik start de volgende lijn vanaf het eind van de vorige.
5. Sluit de omtrek door opnieuw op het eerste punt te klikken. Wanneer de lijnen een vlakke lus sluiten, vult die zich met een vlak en stopt het gereedschap met ketenen. Druk op {{key:Esc}} om op elk moment te stoppen.

Lijnen volgen de rode, groene en blauwe richtingen wanneer u er dicht bij komt; de lijn krijgt die kleur en de tip zegt "Op rode as". Zie [Inferentie en snappen](topic:inference) voor het vergrendelen van een richting en het snappen naar punten.

### Waar een lijn naartoe gaat als hij niets raakt

- Een lijn die op een vlak begint, blijft in het vlak van dat vlak.
- Een lijn die op de grond begint, of in lege ruimte, blijft gelijk met zijn startpunt. Als u het model langs de rand bekijkt, gaat hij in plaats daarvan in het verticale vlak dat naar u toe is gericht.
- Om een lijn naar een exacte plek te tekenen, typt u een punt: `[x,y,z]` voor een punt in het model, of `<dx,dy,dz>` voor een verschuiving vanaf het startpunt. Zie [Exacte maten typen](topic:value-box).

## Een vlak splitsen

Teken een lijn over een vlak, van de ene rand naar de andere (of van rand naar rand via andere lijnen). Het vlak splitst zich in twee vlakken. Elk behoudt zijn zijde en kleur. Hetzelfde werkt met een rechthoek of cirkel die op een vlak is getekend: de vorm wordt een eigen vlak binnen het grotere, dat nu een gat heeft.

Zo deelt u kamers in op een vloerplaat, een raam in een wand, of een trede op een trap in: teken de omtrek op het vlak, en duw of trek daarna het nieuwe vlak.

## Vlakken die de verkeerde kant op wijzen

Elk vlak heeft een voor- en achterkant. De achterkant is blauwgrijs. Vlakken die op de grond zijn getekend, wijzen omhoog; vlakken die op een ander vlak zijn getekend, wijzen dezelfde kant op als dat vlak.

Als een vlak zijn achterkant toont waar u de voorkant verwacht, selecteer het dan en klik op {{ui:Vlak omkeren}} in {{ui:Entiteitsinformatie}}.

## Wat u ziet tijdens het tekenen

- Een gekleurde markering waar de aanwijzer snapt, en de naam ervan in de tip linksonder.
- Een voorbeeld van de lijn of vorm.
- De actuele grootte in het waardeveld. U kunt er op elk moment overheen typen.

## Als de vorm niet is waar u die verwachtte

- Op een aanraakscherm, zie [Probleemoplossing](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Als een lijn is gesnapt op iets ver achter het model, draai de weergave dan een beetje: punten achter een vlak snappen nooit, maar punten op de rand ervan wel.
- Druk op {{key:Mod+Z}} om de laatste vorm ongedaan te maken; één keer ongedaan maken verwijdert één lijn of vorm.
