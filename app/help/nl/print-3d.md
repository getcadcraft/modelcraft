---
title: Een model klaarmaken voor 3D-printen
summary: Controleer of een model gesloten is en de goede kant op staat, bekijk zijn grootte, voet en overhangen, los wat niet klopt op, en download het als STL of 3MF voor uw slicer.
keywords: 3d-printen, 3d-printing, printer, printen, slicer, stl, 3mf, waterdicht, gesloten, manifold, volume, gaten, binnste buiten, overhang, steunen, voet, bed, millimeters, exporteren, repareren, uithollen, bedgrootte, beginner, wanddikte, printgereedschap
from: 948e19af
---

Een slicer van een 3D-printer heeft een gesloten vorm nodig: geen gaten, elk vlak wijst naar buiten, en niets dat door zichzelf heen gaat. {{ui:Exporteren}} › {{ui:Controleren op 3D-printen (STL of 3MF)…}} controleert precies dat voordat u het bestand downloadt.

## Controleren en downloaden

1. Selecteer wat u wilt printen: een of meer groepen of componenten, of enkele vlakken. Als er niets is geselecteerd, wordt alles wat getoond wordt geprint.
2. Klik op {{ui:Exporteren}} in de groep {{ui:Bestand}}, en dan op {{ui:Controleren op 3D-printen (STL of 3MF)…}}.

   Het dialoogvenster begint met één regel: "Klaar om te printen", hoeveel dingen er vóór het printen opgelost moeten worden, of hoeveel er eerst bekeken moeten worden. Elk probleem heeft drie delen: wat er mis is, waarom het ertoe doet, en wat u moet doen. Daarna volgen de grootte in millimeters, het volume, het aantal driehoeken en uw printbed.

3. Als het dialoogvenster dingen opsomt om op te lossen, klikt u op {{ui:Repareer wat gerepareerd kan worden}} (zie hieronder). De controle loopt zelf opnieuw.
4. Klik op {{ui:3MF downloaden}} of {{ui:STL downloaden}}.

Wat geprint wordt, is wat u ziet: verborgen vlakken, verborgen groepen en componenten, en alles op een verborgen label blijft weg. Grootten zijn altijd in millimeters, de eenheid die slicers verwachten, welke eenheid het model ook toont.

:::tip
Kies 3MF als uw slicer het leest: het bewaart de kleuren en de eenheden. STL heeft geen van beide, en slicers gaan uit van millimeters.
:::

## Wat de controle zoekt

Deze stoppen een print of bederven hem, en laten het dialoogvenster "Niet klaar om te printen" zeggen:

| Probleem | Wat het betekent | Wat u moet doen |
|---|---|---|
| Een vlak aan maar één kant | Een gat: een rand heeft een vlak aan de ene kant en niets aan de andere | Teken het ontbrekende vlak (een lijn over de opening sluit hem vaak), of gebruik {{ui:Repareren}} (hieronder) |
| Gedeeld door drie of meer vlakken | Vlakken komen samen in een vin of een wand binnen een volume | Wis het binnenste vlak |
| Vlakken die de andere kant op wijzen | Sommige vlakken wijzen naar binnen, andere naar buiten | Selecteer de vlakken die naar binnen wijzen en klik op {{ui:Vlak omkeren}} in {{ui:Entiteitsinformatie}} |
| Binnenste buiten | Een heel gesloten onderdeel wijst naar binnen | Selecteer zijn vlakken en keer ze om |
| Gaat door zichzelf heen | Een onderdeel vouwt door zichzelf heen | {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Snijden met model}}, en wis daarna wat erbinnen zit. Zie [Vlakken snijden](topic:intersect) |

Dit zijn waarschuwingen: het model wordt geprint, maar kijk er eerst naar.

- **Afzonderlijke onderdelen overlappen**, of **raken elkaar vlak op vlak**: slicers voegen ze meestal samen tot één. Voor een schoner bestand voegt u ze samen met {{ui:Volumes}} › {{ui:Vereniging}}. Zie [Volumegereedschap](topic:solids).
- **Niets ligt plat aan de onderkant**: draai het model zodat een vlak op het bed rust, anders voegt de slicer steunen of een raft toe.
- **Helt meer dan 45° van de verticaal af**: die vlakken hebben steun nodig. Het dialoogvenster zegt hoeveel van het oppervlak dat is.
- **Minder dan 1 mm breed**: waarschijnlijk in de verkeerde eenheid gemodelleerd. Controleer de eenheid in de statusbalk.

Een hol onderdeel (een gesloten schaal in een ander) is prima: de vlakken wijzen de holte in, en het volume wordt eraf getrokken.

## Problemen oplossen

Onder **Waar de problemen zijn** noemt het dialoogvenster elke groep of component die iets verkeerd heeft (losse vlakken die niet in een groep zitten, worden vermeld als "Vlakken niet in een groep"), met wat er mis is. Een component die meerdere keren geplaatst is, wordt één keer vermeld: als u die oplost, lost u elke kopie op.

- {{ui:Tonen}} opent die groep en selecteert de randen en vlakken die fout zijn, zodat ze gemarkeerd zijn.
- {{ui:Repareer wat gerepareerd kan worden}} lost ze allemaal tegelijk op: het sluit gaten waarvan de randen plat liggen, verwijdert vlakken binnen de vorm en losse randen, en keert vlakken de goede kant op. Het is één stap: {{key:Mod+Z}} maakt het ongedaan. De controle loopt daarna opnieuw en toont wat er nog over is.

Wat het niet kan repareren (een gat waarvan de randen niet plat liggen, een onderdeel dat door zichzelf heen gaat), blijft in de lijst staan met wat u met de hand moet doen. {{ui:Repareren}} onder **Printgereedschap** gaat verder: het sluit gaten die niet plat zijn, verwijdert losse stukken en dubbele vlakken, en somt elke reparatie op. Zie [Steunen, wanddikte, uithollen en repareren](topic:print-tools#repair). U kunt ook één groep per keer oplossen: selecteer hem, en gebruik dan {{ui:Problemen tonen}} en {{ui:Repareren}} in {{ui:Entiteitsinformatie}}. Zie [Volumegereedschap](topic:solids).

## Een hol onderdeel

{{ui:Uitholen}} onder **Printgereedschap** holt een onderdeel uit tot de wanddikte die u opgeeft, met afvoergaten waar u klikt. Zie [Uitholen](topic:print-tools#hollow).

U kunt de holte ook zelf tekenen: een gesloten groep binnen het onderdeel die het niet raakt, met al haar vlakken omgekeerd zodat ze de holte in wijzen. De controle telt hem als holte en trekt zijn volume eraf; hij staat niet als iets om op te lossen.

## Het bed van uw printer

Kies de bedgrootte van uw printer in {{ui:Instellingen}} › {{ui:ModelCraft}} › {{ui:Bouwplaat van de 3D-printer}}. De controle waarschuwt dan wanneer het model groter is dan het bed, in beide draaiingen. Zie [Instellingen](topic:settings#3d-printer-bed).

## Printgereedschap

Onder de bevindingen van het dialoogvenster opent **Printgereedschap** {{ui:Voorbeeld van steunen}} (waar steunen komen en ongeveer hoeveel), {{ui:Wanddikte}} (muren die te dun zijn om te printen), {{ui:Uitholen}} en {{ui:Repareren}}. Zie [Steunen, wanddikte, uithollen en repareren](topic:print-tools). {{ui:Splitsen voor printen}} snijdt een model dat te groot is voor het bed in stukken, met verbinders en genummerde verbindingen: zie [Een groot model splitsen voor printen](topic:print-split).

## Niet gecontroleerd

De controle slicet niet: fijne details die uw spuitmond niet kan tekenen en de echte steunen zijn van uw slicer. Zie [Nog niet beschikbaar](topic:not-built-yet#3d-printing).
