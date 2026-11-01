---
title: Aan de slag met ModelCraft
summary: Waarvoor ModelCraft dient, hoe u het opent en uw eerste kubus, van een rechthoek tot een opgeslagen model.
keywords: start, eerste model, beginnen, handleiding, introductie, kubus, massastudie, 3d, duwen en trekken, snelstart, begeleid, gids, beginner, nieuw met 3d
from: d47ad719
---

ModelCraft is een 3D-modelleerprogramma voor het vroege ontwerp: massastudies, indelingen van ruimten, snelle gebouwvormen en de schaduwen die ze werpen. U tekent platte vormen, trekt ze op tot volumes en werkt verder door op hun vlakken te tekenen. Het draait in uw webbrowser en uw modellen blijven op uw computer.

Als u SketchUp hebt gebruikt, geldt het meeste wat u weet ook hier: dezelfde gereedschapsletters, duwen/trekken, een waardevak voor exacte maten, groepen en componenten. [Afkomstig van andere modelleerprogramma's](topic:coming-from) toont wat er anders is.

## ModelCraft openen

1. Open ModelCraft in een actuele versie van Chrome, Edge, Firefox of Safari. Zie [Browsers en computers](common:browsers).
2. Wacht tot de 3D-weergave verschijnt: een lichte (of donkere) ruimte in het midden met een kaart met de titel "Begin met modelleren".

Het scherm heeft bovenaan een werkbalk, links het {{ui:Overzicht}} en de {{ui:Componenten}}, in het midden de 3D-weergave, rechts {{ui:Entiteitsinformatie}}, {{ui:Stijl}} en {{ui:Scènes}}, en onderaan een statusbalk met het waardevak en de eenheden. [Het ModelCraft-scherm](topic:workspace) legt elk onderdeel uit.

:::note
ModelCraft heeft WebGL nodig, de 3D-tekenfunctie van uw browser. Blijft het midden van het scherm leeg en doen de gereedschappen niets, zie dan [Problemen oplossen](topic:troubleshooting#the-3d-view-is-blank).
:::

## Controleer eerst de eenheden

Kijk in de rechterbenedenhoek. De eenhedenkiezer toont waarin lengtes worden gemeten.

- Een nieuw model begint in **voet en inches** als uw browser op de Verenigde Staten is ingesteld (ook Liberia en Myanmar), en overal elders in **millimeters**.
- Om dat te wijzigen kiest u een andere eenheid in de kiezer: {{ui:ft en in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} of {{ui:mm}}. Het model zelf verandert niet van grootte; alleen hoe lengtes worden getoond en hoe kale getallen worden gelezen.

Een getal dat u zonder eenheid typt, gebruikt de eenheid van het model. In een model in voet en inches is een kaal getal **inches**, dus `120` betekent 10 voet.

## Laat ModelCraft uw eerste model begeleiden

Nieuw met 3D? Klik op de kaart {{ui:Begin met modelleren}} op {{ui:Begeleid eerste model}} (het staat ook in {{ui:Weergaven}}). Een kleine kaart leidt u in vier stappen van een platte rechthoek naar een model dat klaar is voor een 3D-printer:

1. Teken een rechthoek op de grond.
2. Trek hem op tot een kubus.
3. Maak van de kubus één object (een groep).
4. Controleer het op 3D-printen en download dan een 3MF- of STL-bestand.

De kaart kijkt naar het model, niet naar de knoppen: hij gaat verder zodra de stap klaar is, hoe u het ook deed, en gaat een stap terug als u ongedaan maakt. {{ui:Kies het gereedschap}} kiest het gereedschap voor u. Sluit de kaart op elk moment met de {{ui:×}}.

## Teken uw eerste kubus

1. Druk op {{key:R}} voor het gereedschap {{ui:Rechthoek}}, of klik op {{ui:Rechthoek}} in de groep {{ui:Tekenen}} van de werkbalk.
2. Klik één keer op de grond, dicht bij het midden van de weergave. Dat is de eerste hoek.
3. Beweeg de aanwijzer weg. Een rechthoek volgt hem en het waardevak onderaan (met het label {{ui:Afmetingen}}) toont de grootte.
4. Typ de maat en druk op {{key:Enter}}: bijvoorbeeld `4m,3m`, of `16',12'` in voet en inches. U hoeft niet eerst in het waardevak te klikken; als u een getal typt, komt het daar terecht.

   U krijgt een platte rechthoek op de grond. Dat is een **vlak**: een oppervlak met randen eromheen.

5. Druk op {{key:P}} voor {{ui:Duwen/trekken}}.
6. Klik op de rechthoek, beweeg de aanwijzer omhoog en klik opnieuw. Of klik op de rechthoek en typ een hoogte, zoals `3m` of `10'`, en druk op {{key:Enter}}.

   De rechthoek wordt een kubus met een bovenkant, een onderkant en vier zijkanten.

7. Druk op {{key:Space}} om terug te gaan naar {{ui:Selecteren}} en klik dan op de bovenkant van de kubus. {{ui:Entiteitsinformatie}} rechts toont de oppervlakte.

:::tip
U kunt ook slepen in plaats van twee keer te klikken: druk op de eerste hoek, sleep en laat los op de tweede. Beide manieren werken voor elk tekengereedschap.
:::

## Rondkijken

- **Draaien:** sleep met de middelste muisknop (het wiel), of druk op {{key:O}} en sleep met de linkerknop.
- **Verschuiven:** sleep met de rechterknop, of met de middelste knop terwijl u {{key:Shift}} ingedrukt houdt.
- **Zoomen:** draai aan het wiel. Er wordt ingezoomd op wat zich onder de aanwijzer bevindt.
- **Alles zien:** druk op {{key:Shift+Z}} of klik op {{ui:Alles}}.

Op een trackpad of aanraakscherm zijn de gebaren anders. Zie [Draaien, verschuiven en zoomen](topic:orbit-pan-zoom).

## Ongedaan maken

Druk op {{key:Mod+Z}} om ongedaan te maken en op {{key:Mod+Y}} om opnieuw te doen, of gebruik {{ui:Ongedaan maken}} en {{ui:Opnieuw}} in de werkbalk. ModelCraft onthoudt de laatste 200 stappen zolang het model open is. De geschiedenis wordt niet in het bestand opgeslagen.

## Uw model opslaan

1. Klik op {{ui:Opslaan}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+S}}.
2. De browser downloadt een bestand met de naam van uw model, zoals `Naamloos.modelcraft`. De statusbalk meldt waar het naartoe ging: "Naamloos.modelcraft opgeslagen in uw downloads."

**Opslaan is een download.** Elke keer opslaan maakt een nieuwe kopie in uw downloadmap; het bestand dat u hebt geopend, wordt niet overschreven. Om een nette projectmap te houden verplaatst of hernoemt u het bestand zelf. [Openen, opslaan, importeren en exporteren](topic:files) legt uit waarom en wat u verder kunt doen.

:::warning
ModelCraft slaat niet vanzelf op. Als u het tabblad sluit met niet-opgeslagen wijzigingen, vraagt de browser het eerst ("Site verlaten?"). Kies om te blijven en sla dan op.
:::

## Hulp krijgen

Druk op {{key:F1}} of klik op {{ui:Help}} in de appbalk om deze Help naast het model te openen. Het werkt zonder verbinding. Druk nogmaals op {{key:F1}}, of op {{key:Esc}} in de Help, om hem te sluiten. Zie [Deze Help gebruiken](common:help).

## Waar u daarna heen gaat

- [Vlakken tekenen met lijnen, rechthoeken en cirkels](topic:draw-faces)
- [Vlakken duwen en trekken tot volumes](topic:push-pull)
- [Exacte maten typen in het waardevak](topic:value-box)
- [Alle toetsen en muisacties](topic:keyboard)
