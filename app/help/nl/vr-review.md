---
title: Het model beoordelen in een VR-headset
summary: Loop in ware grootte door het model met een VR-headset: spring rond, draai, meet, snijd het open, plaats problemen met een afbeelding, bekijk het als tafelmodel en ontmoet de anderen van een live-sessie.
keywords: vr, virtual reality, headset, webxr, xr, immersief, quest, oculus, vive, index, pico, doorlopen, rondloop, teleporteren, ontwerpbeoordeling, beoordeling, meten, doorsnede, snijden, probleem, problemen, bcf, tafelblad, schaalmodel, aanwezigheid, avatars, live, samen
from: fa2f591a
---

{{ui:Bekijken in VR}} zet u met een VR-headset in het model, op ware grootte. U staat waar de camera van de weergave is, op de vloer eronder, en kijkt dezelfde kant op. Er wordt niets geüpload: de headset toont wat de browser op deze computer tekent (of in de eigen browser van de headset).

## Wat u nodig hebt

- Een headset die de browser kan aansturen (WebXR): de eigen browser van een zelfstandige headset, of Chrome of Edge op een pc met een aangesloten headset.
- ModelCraft geopend op een beveiligde pagina (https), zoals op deze site.

Zonder headset is {{ui:Bekijken in VR}} grijs en wordt aangegeven waarom.

## Starten

1. Stel de weergave in waar u wilt beginnen: in een kamer, of buiten, kijkend naar het gebouw.
2. Klik op {{ui:Weergaven}} in de groep {{ui:Camera}}, en daarna op {{ui:Bekijken in VR}}.
3. Zet de headset op.

Het menu zit op de achterkant van uw linkerhand. Wijs ernaar met de rechtercontroller en trek de trekker om een knop te kiezen. (Met alleen één hand zweeft het menu voor de plek waar u begon.)

## Hoe het eruitziet

De headset toont het model in de look van de [live-weergave](topic:live-view): de looks en materialen die u de vlakken hebt gegeven, de lucht en de zon vanaf de plek en datum van uw model met de schaduw, lampen, verspreide planten en stenen, en licht dat van muren en vloeren weerkaatst (op deze computer berekend terwijl u rondkijkt, en u volgend als u beweegt). Helderheid en de weergavetransformatie (ACES of AgX) zijn die van [Een afbeelding renderen](topic:render). Hoeveel er wordt getekend hangt af van wat de browser van de headset heeft, net als op de desktop; ambient occlusion, reflecties en bloom blijven op de desktop.

## Rondlopen

- **Springen:** kies in {{ui:Verplaatsen}} een vloer met de aanwijzer en trek de trekker; u landt daar. Of duw de stick naar voren om te richten en laat los om te springen. U kunt alleen op vloeren en grond landen (vlakken die omhoog zijn gericht), nooit op een wand.
- **Draaien:** duw de stick naar links of rechts: u draait elke keer 30°.
- **Lopen:** loop gewoon binnen uw speelgebied.

## Meten

Kies {{ui:Meten}} en trek daarna de trekker op twee punten. De afstand tussen beide wordt getoond, in de eenheden van het model. Een punt in de buurt van een hoek snapt naar de hoek.

## Doorsnijden

Kies {{ui:Doorsnede}} en trek de trekker op een vlak:

- op een wand (of iets dat geen vloer is): alles tussen u en dat vlak wordt weggesneden, zodat u naar binnen kunt kijken. Dit werkt het best van buiten, of over een kamer heen;
- op een vloer, van boven: een plattegrondsnede 1.2 m boven die vloer, zodat de wanden hun onderste deel tonen.

{{ui:Wissen}} verwijdert de snede en de metingen. Als een doorsnedevlak het model in de weergave snijdt wanneer u begint, start de headset ermee.

## Een probleem plaatsen

Kies {{ui:Probleem}} en trek de trekker waar het probleem zit. Een genummerde pin markeert het, en ModelCraft bewaart het probleem met een afbeelding van wat u zag en waar u stond. Wanneer u VR verlaat, staan de problemen in de lijst {{ui:Problemen}} rechts:

- de oogknop toont het probleem vanaf de plek waar het is geplaatst;
- {{ui:Opslaan als BCF}} downloadt ze allemaal als BCF-bestand, dat BIM-beoordelingsprogramma's openen (met camera en afbeelding);
- ze worden ook opgeslagen in het `.modelcraft`-bestand.

Voeg een opmerking aan een probleem toe nadat u VR hebt verlaten, in een BCF-programma: typen in de headset is nog niet beschikbaar.

## Bekijken als tafelmodel

{{ui:Tafelblad}} verkleint het model zodat het op een tafel voor u past; loop eromheen, of draai het met de stick. {{ui:Ware grootte}} zet u terug waar u was.

## Samen, live

In een [live-sessie](topic:work-live) ziet iedereen in VR de anderen als een hoofd en twee handen in hun eigen kleur, met hun naam, en een stip waar elk naartoe wijst. Bewerkingen die iemand maakt, bereiken uw headset binnen een moment. Mensen achter het bureau worden in de headset nog niet getoond.

## Verlaten

Kies {{ui:VR verlaten}} (of zet de headset af en beëindig het daar). De weergave op het scherm verschuift naar waar uw hoofd was.

:::note
Alleen getest met een headset-emulator, nog niet met een echte headset. Een groot model kan de headset laten haperen: verberg eerst wat u niet nodig hebt ([verbergen en isoleren](topic:hide-isolate)).
:::
