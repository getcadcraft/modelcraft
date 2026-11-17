---
title: Van andere modelleerprogramma's overstappen
summary: Hoe de push/pull-gewoontes van modelleren aansluiten op ModelCraft, toets voor toets, en de verschillen die mensen verrassen.
keywords: overstappen, migreren, vertrouwd, verschillen, push pull modelleerder, skp, sneltoetsen, gewoontes, vergelijken, maatvak, overzicht, entiteitsinformatie
from: 74ffd4ac
---

Als u in SketchUp hebt gemodelleerd, zal ModelCraft vertrouwd aanvoelen: hetzelfde idee van vlakken en push/pull, dezelfde gereedschapsletters, een waardevak waarin u typt zonder erop te klikken, afleiding met de rode, groene en blauwe assen, groepen, componenten, een Overzicht, Entiteitsinformatie en scènes. Deze pagina somt op wat rechtstreeks overeenkomt en, belangrijker, wat niet.

## Gewoontes die meegaan

| U bent gewend | In ModelCraft |
|---|---|
| Druk op Space voor Selecteren, L Lijn, R Rechthoek, C Cirkel | Hetzelfde: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Druk op P Duwen/trekken, M Verplaatsen, Q Draaien, S Schalen, E Gum, T Meetlint | Hetzelfde: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Druk op O Omcirkelen, H Verschuiven, Z Zoomen, Shift+Z Alles tonen | Hetzelfde: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Druk op G om een component te maken | Hetzelfde: {{key:G}}. {{key:Shift+G}} maakt een groep |
| Typ in het Maatvak zonder erop te klikken | Hetzelfde, in het waardevak onderaan. Druk op {{key:Enter}} |
| Typ `4m,3m` voor een rechthoek, `12s` voor zijden | Hetzelfde |
| Typ `3x` of `/3` na een Verplaatsen-kopie | Hetzelfde; `*3` werkt ook |
| Typ `[x,y,z]` of `<dx,dy,dz>` voor een punt of verschuiving | Hetzelfde |
| Typ een kaal getal in een architectonisch model in inches en krijg inches | Hetzelfde |
| Middelknop-slepen om te draaien, Shift+middelknop-slepen om te verschuiven, wiel om te zoomen bij de cursor | Hetzelfde |
| Dubbelklik met Push/Pull om de afstand te herhalen | Hetzelfde |
| Pijltjestoetsen om rood, groen, blauw en evenwijdig te vergrendelen | Hetzelfde: {{key:Right}} rood, {{key:Left}} groen, {{key:Up}} blauw, {{key:Down}} evenwijdig |
| Houd Shift vast om een afleiding te vergrendelen | Hetzelfde |
| Ctrl (Option op een Mac) om te kopiëren tijdens het verplaatsen | {{key:Ctrl}}, {{key:Mod}} of {{key:Alt}}, op elke computer |
| Shift om te wisselen, Ctrl om toe te voegen, Shift+Ctrl om uit de selectie te halen | Dezelfde toetsen; op een Mac gebruikt u {{key:Mod}} waar Ctrl staat |
| Kader van links naar rechts, kruisvenster van rechts naar links | Hetzelfde |
| Een Maatvoering-gereedschap om lengtes te labelen | {{key:D}}, en meer: typ een nieuwe lengte in een maatvoering en het model past zich aan. Zie [Maatvoering en formaat wijzigen](topic:dimensions) |
| Dubbelklik op een vlak voor vlak plus randen; drievoudig klikken voor alles wat verbonden is | Hetzelfde |
| Dubbelklik op een groep om hem te bewerken; Esc om te sluiten | Hetzelfde |
| Trek een lijn over een vlak om het te splitsen; wis een rand tussen coplanaire vlakken om ze te herstellen | Hetzelfde |
| Duw een raamrechthoek door een muur om hem te snijden | Hetzelfde |
| Achterkanten in blauwgrijs; Vlakken omkeren | Dezelfde kleur; {{ui:Vlak omkeren}} in {{ui:Entity info}} |
| Scènes als tabbladen boven de weergave, Page Up en Page Down | Hetzelfde, met {{ui:Afspelen}} in het paneel {{ui:Scènes}} |
| Schaduwen uit datum, tijd, breedte- en lengtegraad, met het noorden op groen | Hetzelfde, in het paneel {{ui:Stijl}} |

## Verschillen die mensen verrassen

### Opslaan is een download

Er is geen Opslaan die het bestand overschrijft dat u opende, geen Opslaan als-dialoog met een naam, geen automatisch opslaan en geen back-upbestand. {{ui:Opslaan}} ({{key:Mod+S}}) downloadt elke keer een nieuw `.modelcraft`-bestand, meestal naar uw downloadmap. Sla vaak op, en hernoem of verplaats de bestanden zelf. Zie [Openen, opslaan, importeren en exporteren](topic:files).

### Het importeert .skp-bestanden, maar slaat ze niet op

{{ui:Importeren}} leest SketchUp-bestanden met de eigen lezer van ModelCraft, in de pagina: groepen, componenten, kleuren, texturen op vlakken, tags en zachte randen komen mee. Zie [Bestandsformaten in detail](topic:formats#skp-files). ModelCraft kan geen `.skp` opslaan: om terug te gaan, exporteert u Collada uit ModelCraft en importeert u dat in SketchUp.

### Geen rechtermuisknopmenu

Rechts-slepen verschuift; een rechtermuisklik doet niets. Commando's die u in het contextmenu zou vinden staan in {{ui:Entity info}} ({{ui:Vlak omkeren}}, {{ui:Bewerken}}, {{ui:Ontbinden}}, {{ui:Uniek maken}}, {{ui:Component maken}}) en in de groep {{ui:Ordenen}} van de werkbalk.

### Eenheden staan in de statusbalk

Er is geen Modelinformatie of sjabloonkeuze. De eenhedenkiezer staat rechtsonder. Een nieuw model start in voet en inch in de VS en elders in millimeters, op basis van de taalinstelling van uw browser. Decimalen gebruiken altijd een punt: `2.5m`, nooit `2,5m`, omdat de komma altijd waarden scheidt.

### Verf heeft eigen materialen

{{ui:Verven}} ({{key:B}}) verft effen kleuren en de materialen in de sectie {{ui:Materialen}}: baksteen, gevelbekleding, dakbedekking, hout, steen en meer, getekend door ModelCraft. U kunt nog niet uw eigen afbeelding als materiaal laden; texturen die met geïmporteerde bestanden meekomen, blijven bewaard. Zie [Verven met kleuren en materialen](topic:paint).

### Schalen is gelijkmatig, zonder grips

Schalen toont geen kader met grips. Klik op het punt dat blijft staan, een referentiepunt, daarna op het nieuwe formaat of een getypte factor. Het schaalt altijd gelijkmatig in alle richtingen. Om in één richting uit te rekken, duwt of trekt u aan een vlak of verplaatst u het, of typt u de breedte, diepte of hoogte van een groep opnieuw in {{ui:Entity info}}, of [wijzigt u het formaat met een maatvoering](topic:dimensions).

### Draaien kiest zijn vlak waar u klikt

Er is geen gradenboog die aan vlakken blijft plakken terwijl u met de pijltjestoetsen het vlak kiest. Klik op het middelpunt op een vlak om in het vlak van dat vlak te draaien, of op de grond om om de verticale as te draaien. De pijltjestoetsen draaien de weergave vóór de eerste klik.

### Afleiding van punten waar u overheen gaat

ModelCraft grijpt naar asrichtingen vanaf **uw startpunt**, en naar punten, randen en vlakken onder de aanwijzer. Het volgt geen richting vanaf een punt waar u alleen overheen bent gegaan (de gestippelde "from point"-afleiding). Om uit te lijnen met een verre hoek, vergrendelt u de as met een pijltjestoets en beweegt u over die hoek: het vergrendelde punt schuift om erop uit te lijnen. Of plaats een [hulplijn](topic:guides-measure).

### Evenwijdig gebruikt de rand die u eerder passeerde

De evenwijdige en loodrechte afleiding gebruikt de laatste rand die de aanwijzer **vóór de eerste klik** kruiste, niet randen die u tijdens het tekenen aanwijst. Zie [Afleiding en snappen](topic:inference#parallel-and-perpendicular).

### Kopieën van een groep zijn gekoppeld

Een groep kopiëren met {{ui:Verplaatsen}} maakt een tweede plaatsing van dezelfde groep, zodat bewerken van één beide verandert, net als bij componenten. SketchUp maakt groepen onafhankelijk. Zie [Problemen oplossen](topic:troubleshooting#editing-one-group-changed-another).

### Spatie verschuift niet

{{key:Space}} kiest {{ui:Selecteren}}, zoals in SketchUp. In sommige andere webapps verschuift het ingedrukt houden van Space; hier niet. Rechts-slepen verschuift in plaats daarvan.

### Twee vingers scrollen zoomt

Op een trackpad stelt u {{ui:Instellingen}} › {{ui:ModelCraft}} › Scrollen in op Trackpad: twee vingers draaien om, {{key:Shift}} en twee vingers verschuiven, een knijpbeweging zoomt. Zie [Draaien, verschuiven en zoomen](topic:orbit-pan-zoom#on-a-trackpad).

Als uw handen de toetsen van Blender kennen in plaats van die van SketchUp, kies de menustijl {{ui:Modeleerder}}: {{key:G}}, {{key:R}} en {{key:S}} werken tegelijk op de selectie, {{key:E}} extrudeert (push/pull), {{key:Shift+D}} dupliceert, en een menubalk bovenaan (Bestand, Bewerken, Weergave, Selecteren, Toevoegen, Object, Mesh) vervangt de werkbalk. Komt u van SketchUp, dan geeft de stijl {{ui:Duwen en trekken}} een eigen menubalk over dezelfde gereedschapsletters. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).

### Vaste lichamen die in elkaar zijn geduwd, snijden niet

Push/pull snijdt door het vlak erachter in hetzelfde object, maar twee losse vaste lichamen die in elkaar geduwd worden, snijden elkaar niet. Er is geen Vlakken snijden en geen Vaste-stoffengereedschap.

### Wat ontbreekt

Vrijhand, Bijsnijden, Splitsen en Buitenschil, uw eigen afbeeldingsmaterialen, extensies en een indelingsgereedschap voor bladen zijn niet in deze build. [Nog niet beschikbaar](topic:not-built-yet) somt op wat u in plaats daarvan doet.

## Sneltoetsen die de browser behoudt

ModelCraft draait in een browser, dus een paar sneltoetsen horen bij de browser, niet bij de app. {{key:Mod+N}} opent een browservenster (gebruik {{ui:Nieuw}}), en {{key:Mod+W}} sluit het tabblad. Als u niet-opgeslagen wijzigingen hebt, vraagt de browser om bevestiging voordat hij sluit. Zie [Toetsen, muizen en trackpads](common:keys#shortcuts-the-browser-keeps).
