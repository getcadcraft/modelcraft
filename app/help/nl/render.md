---
title: Een afbeelding van het model renderen
summary: Maak een afbeelding die op daglicht lijkt: lucht, zon op de plaats en datum van uw model, zachte schaduwen, glas- en metaallooks, en sla die daarna op als PNG.
keywords: render, voorinstelling, voorinstellingen, scènevoorinstelling, interieur, exterieur, doorsnedeweergave, nacht, één klik, renderen, padtracing, padgetraceerd, raytracing, globale verlichting, reflecties, breking, hoge kwaliteit, foto, fotorealistisch, realistisch, afbeelding, beeld, png, stilstaand, lucht, zon, daglicht, schaduwen, zachte schaduwen, ambient occlusion, glas, metaal, glanzend, materialen, belichting, helderheid, bewolkt, schemering, studio, presentatie, mist, waas, nevel, rook, wolk, volume, lichtstralen, godstralen, caustics, adaptieve sampling, ruis
from: 517ba4d3
---

{{ui:Een afbeelding renderen…}} maakt een afbeelding van de weergave die op daglicht lijkt in plaats van op een tekening: een lucht, de zon waar de plaats en datum van uw model hem zetten, zachte schaduwen, licht uit de hele lucht dat hoeken en spleten donkerder maakt, en kleuren die als glas, metaal of glanzende verf kunnen lijken. Het model wordt niet gewijzigd.

## De weergave renderen

1. Stel de weergave in zoals u de afbeelding wilt: draai eromheen, zoom, kies een [scène](topic:scenes), verberg wat niet mee moet komen. De afbeelding gebruikt de eigen camera van de weergave.
2. Klik op {{ui:Exporteren}} in de groep {{ui:Bestand}}, en daarna op {{ui:Een afbeelding renderen…}}.
3. Kies een {{ui:Scène}} als de ingedrukte niet is wat u wilt (zie [Scènevoorinstellingen](topic:render#scene-presets-a-good-picture-in-one-click)), kies de {{ui:Afmeting}} en klik op {{ui:Renderen}}.

   De afbeelding vult zich tijdens het renderen en wordt bij elke doorgang gladder. {{ui:Stoppen}} (of {{key:Esc}}) beëindigt het vroegtijdig en bewaart de afbeelding tot dan toe.

4. Klik op {{ui:Opslaan}} om hem te downloaden (een PNG, tenzij {{ui:Opslaan als}} anders aangeeft).

:::tip
Begin met {{ui:Concept}} op {{ui:Het formaat van de weergave}} om de camera en de look te controleren, en render daarna met {{ui:Goed}} of {{ui:Best}} op een groter formaat voor de definitieve afbeelding.
:::

## Scènevoorinstellingen: een goede afbeelding in één klik

Bovenaan het dialoogvenster staan vier knoppen {{ui:Scène}}. Elk stelt in één klik de lucht, de helderheid, de grond, de randlijnen, de kwaliteit en de zon in, zodat u niets hoeft te leren voor de eerste afbeelding. Klik op één, en daarna op {{ui:Renderen}}.

| Scène | Wat het instelt | Gebruik voor |
|---|---|---|
| {{ui:Exterieur}} | Heldere lucht, de eigen zon van het model, grond aan | Het gebouw van buitenaf |
| {{ui:Interieur}} | Bewolkte lucht (gelijkmatig licht, geen harde zonvlekken), een halve stop helderder | Een weergave van binnen een kamer |
| {{ui:Doorsnedeweergave}} | Witte studio, geen grond, randlijnen in de snelle render | Een model dat door een doorsnede is gesneden |
| {{ui:Nacht}} | De zon onder (middernacht in midwinter voor het halfrond van de locatie), één stop helderder | Lampen die het model verlichten. Zonder lampen is de afbeelding donker |

- {{ui:Kies voor deze weergave}} kiest voor u: {{ui:Doorsnedeweergave}} wanneer een doorsnede aan staat, {{ui:Interieur}} wanneer de camera in het model zit, anders {{ui:Exterieur}}. De eerste keer dat u het dialoogvenster opent, begint het zo vanzelf.
- Elke instelling blijft hieronder staan en kan worden gewijzigd. Zodra u er één wijzigt die de scène zet, is geen knop meer ingedrukt en zegt de regel onder de knoppen dat de instellingen de uwe zijn. Klik nogmaals op de scène om de waarden terug te zetten.
- Een scène raakt de engine, de modus, het formaat, de materialen, de camera of de lampen niet aan.

:::note
De scènes geven dezelfde waarden in ModelCraft en BimCraft. Hoe de afgewerkte afbeelding eruitziet, hangt af van uw model en uw grafische kaart.
:::

## Instellingen

| Instelling | Wat het doet |
|---|---|
| {{ui:Afmeting}} | Het formaat van de weergave, tweemaal het formaat van de weergave, Full HD, 4K of een vierkant. Vaste formaten behouden de camera van de weergave en tonen aan de zijkanten meer of minder |
| {{ui:Modus}} | {{ui:Snel}}, of {{ui:Hoge kwaliteit (padtracing)}} (hieronder) met de {{ui:Tijdslimiet}} |
| {{ui:Kwaliteit}} | Hoeveel doorgangen (of, in hoge kwaliteit, samples) worden gemiddeld: {{ui:Concept}} 16, {{ui:Goed}} 64, {{ui:Best}} 256. Meer doorgangen geven gladdere schaduwen en randen en duren langer |
| {{ui:Lucht}} | {{ui:Heldere lucht}}, {{ui:Bewolkt}} (zacht licht, zwakke schaduwen), {{ui:Schemering}} (laag, warm licht) of {{ui:Witte studio}} (een effen witte achtergrond) |
| {{ui:Zon}} | De zon komt uit de datum, tijd en plaats in {{ui:Stijl}} › zon. Vink {{ui:Een andere datum en tijd voor deze afbeelding gebruiken}} aan om een ander tijdstip te proberen zonder de stijl van het model te wijzigen |
| {{ui:Helderheid}} | Lichter of donkerder, in stappen (stops) |
| {{ui:Grond onder het model}} | Een grond die de schaduwen opvangt en in de horizon overvloeit. Zet het uit voor een model dat zweeft |
| {{ui:Randen tekenen}} | Tekent de randen van het model dun over de afbeelding, voor een getekende look |

Wanneer de zon op het gekozen tijdstip onder de horizon staat, is het nacht: de lucht wordt donker en de [lampen](topic:lights) van het model verlichten het. Het dialoogvenster meldt dat.

De instellingen worden opgeslagen in het `.modelcraft`-bestand, zodat de volgende afbeelding van hetzelfde model begint waar u bent gebleven.

## Kleuren als glas of metaal laten lijken

Onder {{ui:Materialen}} heeft elke kleur op het scherm een look: {{ui:Mat}}, {{ui:Satijn}}, {{ui:Glanzend}}, {{ui:Metaal}}, {{ui:Gepolijst metaal}}, {{ui:Glas}} of {{ui:Matglas}}. {{ui:Onbeschilderde vlakken}} zijn de vlakken zonder eigen kleur.

Om ramen glas te maken, [verft](topic:paint) u de ruiten één kleur en zet u die kleur daarna op {{ui:Glas}}. Glas laat de lucht en wat erachter ligt doorheen zien, gekleurd door zijn kleur, en het weerkaatst de lucht.

:::note
In de modus {{ui:Snel}} weerkaatsen glas en metaal de lucht, niet de rest van het model, en buigt het licht niet door glas. De modus {{ui:Hoge kwaliteit (padtracing)}} hieronder doet beide wel.
:::

## Hoge kwaliteit

Kies {{ui:Modus}} › {{ui:Hoge kwaliteit (padtracing)}} voor een afbeelding die het licht volgt zoals een camera het ziet:

- licht kaatst tussen oppervlakken, zodat een kamer die door een raam of door een lamp wordt verlicht, rondom licht krijgt en kleuren op hun buren afstralen;
- glas is echt glas: licht buigt erdoorheen en het weerkaatst het model;
- metaal en gepolijste oppervlakken weerkaatsen de rest van het model;
- lichtpanelen lichten als panelen, met zachte schaduwen.

Het is veel trager dan {{ui:Snel}}: elke doorgang traceert het licht van elke pixel opnieuw. De afbeelding begint korrelig en wordt helder naarmate de samples zich opstapelen, dus begin klein ({{ui:Het formaat van de weergave}}, {{ui:Concept}}) en kies een {{ui:Tijdslimiet}}: wanneer die afloopt, blijft de afbeelding tot dan toe bewaard. {{ui:Stoppen}} bewaart haar ook. De eerste doorgang wacht terwijl de browser de padtracer voorbereidt.

Waar de browser WebGPU heeft, is de padtracer van CadCraft zelf en draait hij op de grafische kaart; de regel onder de afbeelding zegt {{ui:Padgetraceerd op de grafische kaart (WebGPU)}}. Na {{ui:Stoppen}} of de tijdslimiet gaat {{ui:Hervatten}} door met dezelfde afbeelding tot alle samples erin zitten; het wijzigen van een instelling of nogmaals op {{ui:Renderen}} drukken begint opnieuw. Zonder WebGPU wordt de afbeelding in plaats daarvan met WebGL padgetraceerd (de regel zegt dat) en wordt {{ui:Hervatten}} niet aangeboden.

:::linux
Firefox en de meeste Chrome-installaties op Linux hebben nog geen WebGPU, dus hoge kwaliteit gebruikt daar WebGL.
:::

In deze modus worden randen niet getekend, tonen bibliotheektexturen hun kleur en ruwheid maar niet hun bobbels (een [materiaal gemaakt met knooppunten](topic:shading#in-high-quality-pictures) toont zijn normaal en bobbels), en wordt een doorsnede op het model gemaakt voordat de afbeelding begint.

{{ui:Ontruisen (haalt de korrel weg die na de samples overblijft)}} staat standaard aan: wanneer de afbeelding klaar is, of gestopt, wordt de overgebleven korrel verwijderd door een neuraal netwerk dat hiervoor is gemaakt (het gepubliceerde netwerk van Intel Open Image Denoise, uitgevoerd op uw eigen computer: op de grafische kaart, anders op de processor). Een afbeelding met weinig samples wordt schoon; {{ui:Tonen}} › {{ui:Het beeld vóór het ontruisen}} toont hem zoals gerenderd.

## Renderen in de weergave

De werkomgeving {{ui:Renderen}} draait de padtracer in de weergave zelf: draai eromheen, bewerk het model of wijzig een lamp en hij begint meteen opnieuw. {{ui:Gebied}}: sleep een rechthoek en alleen die wordt gerenderd; {{ui:Hele weergave}} keert terug. {{ui:Scherpstellen}}: klik op wat scherp moet zijn, en de scherptediepte stelt daar scherp. {{ui:Detail}} bepaalt hoeveel pixels van de weergave worden gerenderd (minder is sneller). {{ui:Pauzeren}} stopt en gaat verder. Er is WebGPU voor nodig: zonder WebGPU meldt de werkomgeving dat, en werkt {{ui:Exporteren}} › {{ui:Een afbeelding renderen…}} nog steeds.

## Luchten en lichtprofielen op de grafische kaart

Met WebGPU heeft hoge kwaliteit twee extra luchten:

- {{ui:Fysieke lucht}} berekent het daglicht uit de hoogte van de zon: een diepblauw boven het hoofd, een bleke band aan de horizon, en een zon die warmer en zwakker wordt naarmate hij laag staat. {{ui:Waas}} loopt van een heel helderere dag (2) tot een wazigere (10).
- {{ui:Luchtafbeelding (HDRI)}} verlicht het model met een panoramafoto van een echte plek. {{ui:Kies een afbeelding…}} neemt een equirectangulair `.hdr`- of `.exr`-bestand; {{ui:Draaien}} draait het om het model heen en {{ui:Helderheid van de afbeelding}} maakt het lichter of donkerder. De afbeelding heeft haar eigen zon, dus de zon van het model wordt er niet bij opgeteld. Ze blijft alleen bewaard zolang de pagina open is: kies haar na het opnieuw openen opnieuw.

Elke lamp in de lijst {{ui:Lampen}} kan een lichtprofiel van de fabrikant krijgen: {{ui:IES-profiel…}} leest een IES-bestand (LM-63) en de lamp werpt daarna zijn licht zoals die armatuur doet (een smalle downlight, een wandwasser). Elke lamp met die naam gebruikt het, en de lamp behoudt zijn eigen helderheid. Klik op de naam van het profiel om het niet meer te gebruiken.

Ramen van helder glas helpen het licht van de lucht een weg naar binnen vinden, dus binnenafbeeldingen onder een lucht worden sneller helder.

De modus {{ui:Snel}} en de WebGL-padtracer tonen {{ui:Fysieke lucht}} en {{ui:Luchtafbeelding (HDRI)}} als een heldere lucht en negeren lichtprofielen.

## De camera

{{ui:Camera}} zet de afbeelding op zoals een foto:

- {{ui:Belichting}}: houd de {{ui:Helderheidsschuifregelaar}}, of kies {{ui:Camera-instellingen}} en stel de {{ui:Diafragma (f-stop)}}, {{ui:Sluitertijd}} en {{ui:ISO}} in zoals op een camera; de EV ernaast is de gebruikelijke belichtingswaarde. f/16 bij 1/100 s en ISO 100 past bij een zonnige dag; een donkerdere scène vraagt om een wijder diafragma, een langzamere sluiter of een hogere ISO. Dit werkt in elke modus.
- {{ui:Scherptediepte}} vervaagt wat dichterbij of verder ligt dan de {{ui:Scherpstelafstand (m)}}, zoals een lens met die f-stop dat zou doen (laat leeg om scherp te stellen op wat in het midden van de weergave staat); {{ui:Vorm van het diafragma}} geeft buiten focus liggende highlights een ronde of gelamelleerde vorm.
- {{ui:Tweepuntsperspectief (verticale lijnen blijven verticaal)}} waterpast de camera en verschuift de afbeelding, zoals een architectonische tilt-shift-lens doet, zodat muren niet schever staan wanneer u omhoog of omlaag naar een gebouw kijkt.
- {{ui:Witbalans}} bepaalt welke lichtkleur als wit getoond wordt: lager (bijvoorbeeld 3000 K) voor warm lamplicht, hoger voor schaduw en bewolkte dagen.
- {{ui:Projectie}}: {{ui:360°-panorama}} maakt een beeld van 2:1 van alles rond de camera, voor panoramaviewers; {{ui:360°-stereopanorama}} zet een linker- en een rechteroogpanorama onder elkaar voor headsets; {{ui:Kubusmap (6 vlakken)}} maakt zes vierkante weergaven in een raster van 3 × 2. De breedte komt uit {{ui:Afmeting}}.

Projectie, scherptediepte, tweepuntsperspectief en witbalans hebben de padtracer op de grafische kaart (WebGPU) nodig, dus ze worden alleen getoond in {{ui:Hoge kwaliteit}}.

## De afbeelding afwerken

{{ui:Beeld}} graadt de afbeelding in hoge kwaliteit zoals een foto, en elke regelaar wijzigt de afgewerkte afbeelding meteen, zonder opnieuw te renderen:

- {{ui:Uitstraling (view transform)}}: {{ui:ACES filmic}} (de afbeelding zoals voorheen), {{ui:AgX}} (zachter, behoudt kleur in heel helder licht), {{ui:Filmic}} (een zachte filmcurve) of {{ui:Standaard}} (eenvoudig; helder licht wordt wit afgekapt).
- {{ui:Contrast}} en {{ui:Compressie van hooglichten}} (brengt detail terug in heel heldere delen).
- {{ui:Bloom}} (een zachte gloed rond helder licht), {{ui:Schittering}} met zijn {{ui:Schitteringsstrepen}} (sterstralen vanuit de helderste punten) en {{ui:Vignettering}} (donkerdere hoeken).
- {{ui:Kleurtabel (.cube)…}} past een kleurgradatie toe uit een `.cube`-bestand, met zijn {{ui:Sterkte van de kleurtabel}}; net als een luchtafbeelding wordt het alleen bewaard zolang de pagina open is.

## De afbeelding opslaan

{{ui:Opslaan als}} naast {{ui:Opslaan}} kiest het bestand: {{ui:PNG}}, {{ui:JPEG}} of {{ui:WebP}} voor delen (JPEG en WebP alleen waar de browser ze kan schrijven), en na een renderen in hoge kwaliteit op de grafische kaart ook:

- {{ui:PNG, 16 bits}}: de gegradeerde afbeelding met fijnere stappen tussen tinten, voor afdrukken of verder bewerken.
- {{ui:EXR, elke laag (32-bit float)}}: de afbeelding zoals gerenderd (lineair licht, geen gradatie) met elk renderelement en elke lichtgroep als eigen laag, voor compositieprogramma's.
- {{ui:Renderbestand (.ccrender, om later opnieuw te graderen)}}: alles wat het dialoogvenster nodig heeft om de afbeelding opnieuw te mengen en te graderen. {{ui:Een renderbestand openen…}} haalt hem terug, met zijn mix en zijn gradatie, zonder opnieuw te renderen.

## De lampen na het renderen mengen

Zet {{ui:Lichtmenging (kleur en helderheid van elke lamp na het renderen wijzigen)}} aan voordat u op {{ui:Renderen}} drukt. Wanneer de afbeelding klaar is (of gestopt), toont {{ui:Het beeld mengen}} de lichten in groepen: de lucht, de zon, en de lampen op naam (elke lamp met dezelfde naam is één groep). Schakel een groep uit, geef haar een kleur, of maak haar lichter of donkerder, en de afbeelding verandert meteen, zonder opnieuw te renderen. {{ui:Mengsel opslaan}} bewaart de mix onder een naam om later te kiezen; {{ui:Zoals gerenderd}} keert terug naar de afbeelding zoals ze gemaakt is. {{ui:Opslaan}} slaat de gemengde afbeelding op.

{{ui:Renderelementen (albedo, normalen, diepte, diffuus, speculair, transmissie, emissie, ID's)}} bewaart ook de onderdelen van de afbeelding. {{ui:Tonen}} schakelt de weergave naar een daarvan: de oppervlaktekleuren (albedo), de normalen, de diepte, het diffuse, speculaire en doorgelaten licht (elk direct en indirect), wat gloeit en de lucht, en een kleur per object of per materiaal om maskers te maken.

Beide bewaren extra lagen op de grafische kaart. Bij grote formaten heeft een grafische kaart mogelijk geen ruimte; het dialoogvenster meldt dat, en een kleiner formaat werkt.

## De renderwachtrij

Na een instelling in hoge kwaliteit bewaart {{ui:Dit beeld aan de wachtrij toevoegen}} onder {{ui:Renderwachtrij}} de afbeelding zoals ze nu is ingesteld; de {{ui:Deze animatie aan de wachtrij toevoegen}} van het videodialoogvenster doet hetzelfde voor een hele animatie, padgetraceerd beeld voor beeld. {{ui:Wachtrij starten}} rendert ze achter elkaar op deze computer, en {{ui:Opslaan}} naast elke voltooide downloadt hem. Het sluiten van de pagina bewaart de wachtrij: open hetzelfde model en hij gaat verder waar hij stopte. De wachtrij heeft WebGPU nodig.

## Mist, rook, ruis en caustics

Deze staan in {{ui:Mist, rook en ruis}} en werken in {{ui:Hoge kwaliteit}} op de grafische kaart; de andere engines laten ze weg.

- {{ui:Mist en waas}} vult de lucht tot een hoogte met een nevel die de zon, de lucht en lampen verlichten. {{ui:Hoe ver u kunt zien, in meters}} bepaalt hoe dik hij is (ongeveer 100 m is een lichte waas, 20 m een dikke mist), {{ui:Hoogte van de mist boven de grond, in meters}} is waar hij eindigt, en {{ui:Lichtstralen}} is hoeveel de nevel naar het licht toe gloeit. Zonlicht verlaat de mist aan de bovenkant, dus waar zon door een raam of tussen gebouwen komt, ziet u dat als lichtstralen.
- {{ui:Rook of wolk}} voegt één volume rook of wolk toe, verlicht zoals de mist. {{ui:Soort}} is een {{ui:Wolk}}, een {{ui:Rookpluim}} of {{ui:Uit een volumebestand (.ccvol)}}, het eigen rasterformaat van CadCraft. {{ui:Detail}} en {{ui:Variatie}} wijzigen een gemaakte wolk of pluim, {{ui:Grootte van de langste zijde, in meters (0 = de grootte van het model)}}, {{ui:Verschuiven X (m)}}, {{ui:Verschuiven Y (m)}}, {{ui:Verschuiven Z (m)}} en {{ui:Draaien}} plaatsen hem (hij begint in het midden van het model), {{ui:Dikte}} maakt hem dichter, {{ui:Gloed naar voren}} maakt hem helderder richting het licht, en {{ui:Kleur}} tint hem. Een volumebestand wordt alleen bewaard zolang de pagina open is, net als een luchtafbeelding.
- {{ui:Vroeg stoppen waar het beeld schoon is (adaptieve sampling)}} geeft pixels die tot rust zijn gekomen geen extra samples meer, zodat de rest van de afbeelding sneller klaar is. {{ui:Ruis die wordt geaccepteerd}} is hoeveel korrel overblijft wanneer een pixel stopt. De regel onder de afbeelding zegt hoeveel samples een pixel gemiddeld kreeg.
- {{ui:Caustics (licht gebroken door glas of weerkaatst door spiegels)}} traceert licht van de lampen en de zon, zodat de heldere vlek onder een glazen bol of het lichtje van een spiegel op een muur schoon wordt in plaats van korrelig. Het staat uit terwijl mist, rook, {{ui:Lichtmenging}} of renderelementen aan staan, en het is bedoeld voor afbeeldingen, niet voor 360°-afbeeldingen, animaties of de werkomgeving Renderen.

## Hoe lang het duurt

De afbeelding wordt op uw eigen computer gemaakt, door de grafische kaart; er wordt niets geüpload. Hoe lang het duurt, hangt af van die kaart. De tijd groeit met de doorgangen en de pixels: {{ui:Best}} heeft 16 keer zoveel doorgangen als {{ui:Concept}}, en een 4K-afbeelding heeft ongeveer vier keer zoveel pixels als Full HD. Een computer zonder grafische kaart rendert ook, maar trager.

:::note
Als het dialoogvenster zegt dat de browser geen afbeeldingen kan renderen, heeft de browser geen WebGL 2. Werk hem bij, of zet hardwareversnelling aan in zijn instellingen.
:::
