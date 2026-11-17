---
title: Vrije-vormoppervlakken (NURBS)
summary: Gladde krommen en oppervlakken voor productschalen, carrosserieën en scheepsrompen — loft, sweep, krommennetwerken, patches op vier randen, overgangen, bijsnijdingen — met G0-, G1- en G2-continuïteit gemeten op de exacte oppervlakken, volumes met vereniging, aftrekken en snijden, zebra- en kromming-weergaven, vlakken gepast op een scan met de fout gemeten, en STEP- of IGES-bestanden.
keywords: nurbs, scan, reverse engineering, passen, mesh naar oppervlak, puntenwolk, stl, bijsnijden, bijgesneden, gat, snijden, volume, volumes, booleaans, vereniging, aftrekken, snijden, verschil, hechten, gesloten, vrije vorm, freeform, vrije-vorm, oppervlak, oppervlakken, b-spline, bspline, kromme, spline, loft, sweep, rail, netwerk, coons, patch, overgang, aansluiten, continuïteit, g0, g1, g2, raaklijn, kromming, zebra, besturingspunten, knopen, graad, step, iges, klasse a
from: 09887405
---

Het paneel **Oppervlakken** maakt gladde krommen en oppervlakken van het soort dat gebruikt wordt voor productschalen, carrosserieën en scheepsrompen: NURBS, dezelfde wiskunde die andere oppervlaktemodelleerders gebruiken. Alles wordt gemeten op de exacte oppervlakken, nooit op de driehoeken die u ziet. Maten in het paneel zijn in **millimeters**, welke eenheid het model ook toont.

Open het via het paneel rechts: {{ui:Oppervlakken}} › {{ui:Het paneel Oppervlakken openen}}. Een model dat al oppervlakken heeft, opent het vanzelf.

## Hoe een opdracht werkt

1. Druk op een opdracht (bijvoorbeeld **Loft**). Het paneel zegt wat het nog nodig heeft: punten, krommen, een rand van een oppervlak of een kromme-einde.
2. Kies ze: klik ze aan in de 3D-weergave, of druk op **Kiezen** (of de rand- en eindknoppen) naast elk in de lijst. Voor een rand klikt u dicht bij die rand van het oppervlak.
3. Controleer de opties (graad, tolerantie, continuïteit, …) en druk op **Maken**.

Krommen uit punten nemen de punten die u per regel typt (`x, y, z` in mm), of **Punten kiezen in de weergave**: elke klik gebruikt dezelfde snapping als de tekentools. Druk op <kbd>Enter</kbd> of dubbelklik om af te ronden, en op <kbd>Esc</kbd> om te stoppen.

## Krommen

- **Kromme door punten** gaat door elk punt. **Kromme via besturingspunten** volgt in plaats daarvan een kooi van punten.
- **Knoop invoegen**, **Graad verhogen** en **Graad verlagen** wijzigen hoe een kromme beschreven wordt, zonder haar te verplaatsen (verlagen wordt geweigerd als de kromme meer dan de tolerantie zou verschuiven). **Kromme opnieuw opbouwen** geeft haar een nieuw aantal besturingspunten en zegt hoe ver ze verplaatst is.
- **Kromme aansluiten** laat het einde van de ene kromme aansluiten op de andere met G0 (raken), G1 (zelfde richting) of G2 (ook dezelfde kromming). **Overgangskromme** voegt een nieuwe kromme toe tussen twee einden.
- **Krommen samenvoegen** en **Kromme splitsen**.

## Oppervlakken

- **Loft** door twee of meer krommen, **Gelijnd oppervlak** tussen twee, **Kromme extruderen**, **Kromme omwentelen**.
- **Uitvegen langs één rail** voert een profiel langs een pad zonder het te draaien; **Uitvegen langs twee rails** houdt de uiteinden van het profiel op beide rails. Uitvegingen worden gepast: de statusregel zegt hoe dicht het bij de echte uitveging bleef.
- **Oppervlak uit een krommennetwerk** gaat door een raster van krommen (de eerste keuzes zijn de profielen, de rest de geleiders). **Vlak uit vier randen** vult vier krommen die op hun hoeken samenkomen.
- **Oppervlak aansluiten** laat een rand van een oppervlak aansluiten op een buur met G0, G1 of G2; **Overgangsoppervlak** voegt een oppervlak toe tussen twee randen.
- **Oppervlak offsetten**, **Oppervlak verlengen** (het oppervlak loopt door zoals het ging), **Oppervlak opnieuw opbouwen**, en knopen en graad voor oppervlakken.

## De kwaliteit controleren

De tabel **Gedeelde randen** toont elke rand die twee oppervlakken delen, met de opening (mm), de hoek ertussen (°) en de sprong in kromming (1/mm), en of dat G0, G1 of G2 is. Een rand die slechter is dan u vroeg, staat ook in **Problemen** (de ⚠-knop in de appbalk) met een oplossing **Aansluiten**.

**Weergeven als** › **Zebrastrepen** en **Kromming (Gauss)** komen uit het exacte oppervlak: strepen die ononderbroken over een rand lopen betekenen G1; strepen die ook hun breedte behouden betekenen G2. Kromming is blauw waar het oppervlak een zadel is, rood waar het een koepel is en wit waar het vlak is. **Besturingspunten** tekent de besturingsnetten.

G0–G2 worden gemeten in 33 punten per rand. **G3 en "klasse A"-kwaliteit worden niet gemeten**, en er wordt ook niets over beweerd.

## Een oppervlak bijsnijden

De groep **Bijsnijden** snijdt een oppervlak zonder zijn vorm te veranderen: het oppervlak houdt al zijn besturingspunten, en alleen het deel binnen de contour wordt getoond, geteld en geschreven. **Bijsnijden tot een rechthoek** en **Bijsnijden met een cirkel** werken op een aandeel (0 tot 1) van het oppervlak in elke richting, dus ze hebben geen kiezen in de weergave nodig. **Bijsnijden door een kromme** neemt een gesloten kromme die op het oppervlak ligt (ze wordt op het oppervlak geprojecteerd, en geweigerd met een uitleg als ze open is of meer dan de tolerantie ervan af ligt). Vink **Een gat uitsnijden** aan om de binnenkant van de contour te verwijderen; laat hem uit om alleen de binnenkant te houden. Een oppervlak kan één bewaarde contour hebben en een willekeurig aantal gaten; een contour die een andere kruist, wordt geweigerd. **De bijsnijding verwijderen** toont het hele oppervlak weer. De gesneden randen volgen de contour exact, en Ongedaan maken van het paneel neemt een bijsnijding terug als elke andere stap.

STEP bewaart de bijsnijding als de grenzen van het vlak, en IGES als een bijgesneden oppervlak (entiteit 144); beide lezen die weer in.

## Volumes en booleaanse bewerkingen

De groep **Volumes** maakt van oppervlakken gesloten lichamen en combineert ze. Een volume is hier een verzameling van de eigen oppervlakken van het paneel die samen een ruimte sluiten; zijn vlakken blijven exacte NURBS-oppervlakken met hun bijsnijdingen.

- **Doosvolume**, **Cilindervolume** en **Bolvolume** maken er één van getypte maten (in mm): een doos van zes vlakke vlakken, een cilinder met een ronde zijde en twee vlakke einden bijgesneden tot de cirkel, een bol van één omwentelingsoppervlak.
- **Volume uit oppervlakken** groepeert oppervlakken die u zelf maakte. Kies ze, of kies er geen om elk getoond oppervlak te gebruiken dat nog niet in een volume zit. Ze worden binnen de tolerantie aan elkaar gehecht: als ze niet sluiten, verandert er niets, en het paneel zegt hoeveel randen open blijven en hoe dicht ze bij elkaar moeten komen.
- **Vereniging**, **Aftrekken** (het tweede volume wordt van het eerste afgetrokken) en **Snijden** (alleen wat beide delen) nemen twee volumes: klik in de weergave op een vlak van elk, of druk op **Kiezen** in de lijst **Volumes**. Vink **De twee volumes behouden** aan om ze naast het resultaat te laten staan.

Een booleaanse bewerking houdt elk vlak op zijn eigen exacte oppervlak en snijdt het met nieuwe bijsnijdcontouren langs de doorsnede. De resultaatregel geeft de gemeten getallen: hoe ver de punten van de volume-engine moesten verschuiven om op de exacte oppervlakken te liggen (nooit meer dan de tolerantie), hoe dicht de snijpunten bij beide oppervlakken liggen (meestal enkele miljoenste millimeter), het volume, en of de nieuwe vlakken weer sluiten wanneer ze opnieuw worden gehecht vanuit hun exacte oppervlakken. Volumes worden gemeten op driehoeken binnen de tolerantie (0.05 mm tenzij u een andere instelt), dus het volume van een bol of cilinder komt iets lager uit dan het exacte: een kleinere tolerantie komt dichterbij. Een booleaanse bewerking die niet netjes kan (de volumes delen niets, of een contour zou zichzelf kruisen) wordt met een uitleg geweigerd en verandert niets. Eén booleaanse bewerking is één stap van Ongedaan maken van het paneel.

In de lijst **Volumes** laat **Groepering opheffen** de vlakken als gewone oppervlakken; de prullenbak verwijdert het volume en zijn vlakken.

**Aan het model toevoegen** (in de lijst **Volumes**) zet een kopie van het volume als één gesloten groep in het model, de vlakken als driehoeken binnen 0.05 mm, in één stap van Ongedaan maken van het model. Daarna werkt het met de eigen **Vereniging**, **Aftrekken** en **Snijden** van het model, met Duwen/trekken en met de 3D-printcontrole; het exacte volume blijft in het paneel.

## Afrondingen en verdikking

**Afronding tussen vlakken** rondt de rand af waar twee vlakken van één volume samenkomen: kies de twee vlakken (in de weergave, of met **Kiezen** in de lijst), typ de **straal** en, voor een straal die langs de rand verandert, de **straal aan het eind** (0 houdt één straal aan). Een bol met die straal wordt langs de rand gerold en raakt beide vlakken; de afronding is de exacte cirkelboog die op elk punt overblijft, samengevoegd tot één oppervlak, en de twee vlakken worden bijgesneden waar de bol ze raakt. Een buitenrand verliest materiaal, een binnenhoek wint het. De resultaatregel geeft wat gemeten is: hoe ver het afrondingsoppervlak van de rollende bol ligt tussen de punten waaruit het gebouwd is (er worden punten toegevoegd tot het binnen een vierde van de tolerantie ligt), de grootste hoek tussen de afronding en elk vlak langs de raaklijnen, en dezelfde getallen als bij een Vereniging. Een straal die niet past (de bol zou een vlak verlaten, of een vlak buigt scherper dan de straal) wordt geweigerd onder vermelding van het vlak, en er verandert niets.

**Meerdere randen afronden** rondt in één stap veel randen af: kies de twee vlakken van de eerste rand, dan de twee vlakken van de volgende, enzovoort (een vlak mag in meerdere paren zitten, bijvoorbeeld het bovenvlak van een doos in vier ervan). Alle randen krijgen de straal die u typt. Elke afronding wordt berekend op het volume zoals het was, en daarna worden ze na elkaar gesneden, dus de volgorde doet er niet toe. Waar twee afgeronde randen samenkomen in een hoek waarvan de andere randen scherp blijven, lopen de twee afrondingen langs hun doorsnedekromme in elkaar (een vouw). Waar drie afgeronde buitenranden van drie vlakke vlakken die loodrecht op elkaar staan samenkomen met één straal, wordt de hoek één **bolvlak** dat raakt aan alle drie afrondingen (zet **Hoeken** uit om in plaats daarvan de hoek met vouw te krijgen). Een rand moet minstens twee keer de straal lang zijn waar beide uiteinden zulke hoeken zijn. De resultaatregel zegt hoeveel randen zijn afgerond en hoe de hoeken zijn uitgevallen. Binnenranden kunnen ook samen worden afgerond, maar een resultaat dat niet opnieuw sluit wordt alleen gemeld (de regel zegt het), dus controleer het.

**Verdikken tot volume** geeft een oppervlak een dikte: kies het, typ de **dikte**, en vink **Andere kant** aan om het de andere kant op te laten groeien. Het verschoven vlak wordt op het oppervlak gepast en ertegen gemeten (de resultaatregel geeft het grootste verschil met de dikte); wanden volgen elke rand en elke bijsnijdcontour. Als het oppervlak aan die kant scherper buigt dan de dikte, of een ander deel ervan ligt dichter dan de dikte, wordt het geweigerd met de naam van het oppervlak en de plaats, en verandert er niets.

## Ongedaan maken, het bestand, STEP en IGES

Het paneel heeft zijn eigen **Ongedaan maken** en **Opnieuw** (één stap per opdracht). De oppervlakken worden opgeslagen in het `.modelcraft`-bestand met het model; ze zijn geen deel van de eigen ongedaan-maken-geschiedenis van het model, net als de materialen van het bestand.

**STEP…** (AP242) en **IGES…** slaan de krommen en oppervlakken precies op zoals ze zijn (B-spline-krommen en -oppervlakken, niets omgezet in driehoeken). Elk oppervlak is een eigen vlak, met zijn bijsnijding. Een volume wordt geschreven als één gesloten schaal, waarbij elke rand door zijn twee vlakken gedeeld wordt, zoals andere CAD-programma's verwachten (de statusregel zegt hoeveel volumes er zo zijn uitgegaan). In IGES is hetzelfde volume één manifold volume-B-rep (entiteit 186 over gesloten schaal 514, vlakken 510, lussen 508, één randlijst 504 en één hoekpuntlijst 502). Een volume waarvan de vlakken niet rand voor rand paren, wordt geschreven als losse vlakken, en de regel zegt dat. **Importeren…** leest zo'n volume weer in als volume, uit STEP en uit IGES. Het leest krommen en oppervlakken die zo geschreven zijn, en `.ccnurbs`-patchsets; STEP-volumes van andere programma's openen met Bestand › Importeren als meshes.

## Oppervlakken uit een scan (reverse engineering)

Selecteer de gescande mesh in het model (niets geselecteerd betekent alles wat getoond wordt), open **Oppervlakken**, en kies in de groep **Scan** **Oppervlakken aan de scan passen**. De tool zoekt naar **vlakken**, **cilinders**, **bollen** en **kegels** (de exacte oppervlakken waaruit een bewerkt onderdeel bestaat; elke rij toont de straal of halve hoek die gevonden is), vindt **afrondingen** (afgeronde randen en hoeken: een kleine cilinder of bol die raakt aan twee of meer andere vlakken, met zijn straal en de vlakken die hij verbindt), **randafrondingen** (een torus: de afgeronde rand waar een vlak vlak een cilinder of kegel raakt, met zijn straal en zijn ringstraal) en **variabele afrondingen** (een afgeronde rand waarvan de straal langs de rand verandert, met de straal aan elk eind). Verder past het **één vrije-vorm-vlak** op een glad, zacht gebogen stuk, en snijdt het elk vlak bij de contour van het deel van de scan waar het vandaan kwam, zodat gaten en hoeken blijven. Opties: de **tolerantie** (hoe ver, in mm, een scanpunt van een vlak of cilinder mag liggen en er toch bij horen, en het doel voor een vrije-vorm-vlak), het **kleinste stuk** (een aandeel van het oppervlak) en de **meeste vlakken**. Dezelfde scan en opties geven altijd dezelfde vlakken.

Het resultaat is een tabel, één rij per vlak: het soort, uit hoeveel driehoeken het kwam, en de fout **gemeten van de scan naar het vlak** (rms, de grootste, en het aandeel punten binnen de tolerantie). De gemeten punten zijn de hoekpunten van de scan en het midden van elke driehoek. De fout wordt niet andersom gemeten (vlak naar scan), dus een vlak dat voorbij de scan reikt, zou dat niet tonen. De noot onder de tabel zegt ook hoeveel van het oppervlak te klein was om te passen. In de weergave worden de scanpunten gekleurd op hun **afwijkingskaart**: blauw op het vlak, groen halverwege de tolerantie, rood bij de tolerantie of meer (vink **De afwijkingskaart tonen** uit om hem te verbergen). Stukken die op zichzelf terugvouwen (bijvoorbeeld een gesloten buis gepast met vrije-vorm-vlakken) worden vermeld als niet gepast, en nooit geforceerd tot één oppervlak.

**De oppervlakken aan een volume hechten** hecht elk getoond oppervlak dat niet in een volume zit tot één gesloten volume. Scanvlakken raken elkaar alleen binnen de eigen fout van de scan, dus het probeert de kleinste verbindingsafstand die sluit (nooit meer dan de **hechtafstand** die u instelt) en weigert met een uitleg als de vlakken niet sluiten. Het vult nooit een opening op. Een doos met afgeronde randen hecht als zijn afrondingen als eigen vlakken zijn gevonden; de verbindingsafstand die sloot staat in het resultaat. Het volume werkt daarna met Vereniging, Aftrekken, Snijden en **Aan het model toevoegen**.

Wat het niet doet: een **randafronding** (een torus) wordt alleen gezocht rond de as van een cilinder of kegel die al gevonden is, en een **variabele afronding** alleen langs een vrij rechte rand (haar doorsneden zijn loodrecht op één richting gesneden). Elders komen ze als vrije-vorm-vlakken als ze glad genoeg zijn, en worden ze anders weggelaten. Bollen, kegels en afrondingen worden gevonden door willekeurige steekproeven, dus een heel klein exemplaar (een paar driehoeken) kan gemist worden. De afwijkingskaart toont de afstand van de scan tot de vlakken, niet andersom. Zeer grote scans (meer dan 300,000 driehoeken) worden hier geweigerd. Vlakken van een volledige cilinder worden rond gaten gesneden, met de naad waar geen gat is. Controleer elk vlak tegen uw scan voordat u erop vertrouwt.

## Nog niet beschikbaar

Randen afronden die in een hoek van gekromde vlakken samenkomen of met verschillende stralen (een hoekovergang), een afronding tussen vlakken die niet samenkomen, een binnenafronding die eindigt op een schuin of gekromd vlak, en booleaanse bewerkingen en afrondingen berekend op de oppervlakken zonder driehoeken (hier werkt de volume-engine op driehoeken binnen de tolerantie, en elk punt wordt daarna teruggezet op de exacte oppervlakken).
