---
title: Modifiers op een mesh, een groep of een component
summary: Schaal, spiegel, maak een array van, maak glad, schuin af, snijd en buig een mesh zonder het te veranderen; herhaal of schaal een groep of component met dezelfde stapel, en maak het permanent wanneer u er klaar voor bent.
keywords: modifier, modifiers, stapel, groep, component, schalen, bakken, bron bewerken, niet-destructief, spiegelen, array, radiale array, subdivisie, subdivisieoppervlak, gladmaken, afschuinen, verstevigen, dikte, boolean, snijden, verschuiven, ruis, lassen, decimeren, vereenvoudigen, rooster, kooi, krommevervorming, buigen, krimpomhulling, toepassen
from: dd5ec1cb
---

Een **modifier** verandert wat een mesh toont zonder de mesh zelf te veranderen. Spiegel één helft van een onderdeel en modelleer alleen die helft; rond een doos af met een subdivisieoppervlak en blijf de doos bewerken. Modifiers staan in een **stapel** en werken in volgorde, van boven naar beneden. Wat u ziet, exporteert, print en rendert is de mesh met elke modifier die aan staat.

## Een modifier toevoegen

1. Selecteer een mesh. In de Model-werkomgeving staat het gedeelte **Modifiers** in {{ui:Entiteitsinformatie}}; in de Mesh-werkomgeving staat het in het paneel rechts.
2. Kies er een uit {{ui:Een modifier toevoegen…}}. Hij komt onderaan de stapel.
3. Wijzig de instellingen onder de naam. Lengten nemen dezelfde waarden als het waardevak, dus `600mm`, `2'6"` en `(6m)/4` werken allemaal.

Elke wijziging is één stap ongedaan maken: {{key:Mod+Z}} neemt hem terug.

## De knoppen op elke modifier

- Het vinkje zet hem aan of uit.
- De schermknop toont of verbergt hem in de weergave (hij blijft in de stapel).
- De cameraknop toont of verbergt hem in gerenderde afbeeldingen en video's, zodat een modifier alleen voor renders kan zijn (of alleen voor de weergave).
- De pijltjes verplaatsen hem omhoog of omlaag in de stapel. De volgorde telt: eerst spiegelen en dan verdelen geeft een gladde naad; eerst verdelen en dan spiegelen niet.
- {{ui:Toepassen}} maakt de vorm deel van de mesh: de modifiers erboven en deze worden op de mesh zelf uitgevoerd en verlaten de stapel. Het is één stap ongedaan maken.
- Het kruis verwijdert hem.

## De modifiers

| Modifier | Wat het doet |
| --- | --- |
| Schalen | Schaalt rond het oorsprongpunt van het object, een factor voor rood, groen en blauw. Ook op een groep of component. |
| Spiegelen | Voegt een gespiegelde kopie toe over rood, groen of blauw door het oorsprongpunt van de mesh, en voegt de helften samen waar ze elkaar raken. |
| Array | Kopieert in een lijn (een stap van zijn eigen grootte maal de getallen die u geeft, plus een vaste stap), rond een as, of langs een kromme in het model. Een groep of component neemt de lijn. |
| Subdivisieoppervlak | Maakt de mesh glad met Catmull-Clark-subdivisie. Scherpe randen blijven gekreukt. Renders kunnen meer niveaus gebruiken dan de weergave. |
| Afschuinen | Rondt elke rand af die scherper is dan de hoek die u opgeeft. |
| Verstevigen | Geeft een oppervlak een dikte en sluit de rand. |
| Boolean | Snijdt weg, voegt samen of houdt de overlap met een ander object in het model. Beide moeten gesloten volumes zijn. |
| Verschuiven | Verplaatst het oppervlak naar binnen of naar buiten door zachte ruis. Dezelfde startwaarde geeft elke keer dezelfde bulten. |
| Lassen | Voegt hoekpunten samen die dichter bij elkaar liggen dan een afstand. |
| Decimeren | Houdt een deel van de driehoeken, en verwijdert die welke de vorm het minst veranderen. |
| Gladmaken | Ontspant de hoekpunten richting hun buren. |
| Rooster | Buigt de mesh met een kooi: verplaats de punten van de kooi en de mesh volgt. |
| Kromme vervormen | Buigt de mesh langs een kromme in het model, langs rood, groen of blauw. |
| Krimpomhulling | Verplaatst elk hoekpunt naar het dichtstbijzijnde punt van een ander object. |

## Op een groep of een component

Een groep of component kan ook een recept bewaren, zodat de kap van een lamp een **Schalen** en een **Array** van één kap kan zijn, en het wijzigen van een getal de lamp verandert.

1. Selecteer een groep of component. In {{ui:Entiteitsinformatie}} toont het gedeelte **Modifiers** de stapel (eerst leeg).
2. Kies {{ui:Schalen}} of {{ui:Array}} uit {{ui:Een modifier toevoegen…}}. De groep wordt een component die **het origineel is, geplaatst door de stapel**. Het origineel blijft bewaard: bewerk het en elke kopie volgt meteen.
3. Schalen neemt een factor voor rood, groen en blauw (`1, 1, 2` verdubbelt de hoogte). Array neemt het aantal kopieën, een stap als aandeel van de tot nu toe bereikte grootte van het resultaat, en een extra stap in lengten.

De stapel loopt van boven naar beneden op de eigen assen van het origineel rond zijn oorsprongpunt, dus de volgorde telt: een Array van drie kopieën 3 m uit elkaar, dan Schalen 2 op rood, zet de kopieën 6 m uit elkaar; eerst Schalen en dan de Array houdt ze 3 m uit elkaar. Het vinkje, de pijltjes en het kruis werken als op een mesh; de weergave- en cameraknoppen en Toepassen op één modifier werken niet, omdat een stapel op een groep één ding is.

- {{ui:Bron bewerken}} opent het origineel op zijn plek. Wijzigingen zijn in elke kopie zichtbaar; het sluiten brengt u terug waar u was.
- {{ui:Modifiers bakken}} maakt het resultaat gewone randen en vlakken en haalt de stapel weg, in één stap ongedaan maken. Kopieën die overlappen blijven afzonderlijke geometrie: bakken is geen vereniging.
- Kopieën van de component delen het recept; {{ui:Uniek maken}} maakt het los (het origineel blijft gedeeld).
- De stapel wordt in het bestand opgeslagen, meegenomen bij kopiëren en plakken en bij ongedaan maken, en Ongebruikte opschonen behoudt het origineel. Een programma dat modifiers niet kent, toont de kopieën nog wel.
- Tot het bakken kan het resultaat niet worden betreden, ontbonden, van grootte gewijzigd of uitgerekt: het zou bij de volgende wijziging opnieuw worden opgebouwd. Elk zegt dat.
- De limieten zijn 32 modifiers en 1,000 kopieën. Een component die is gemaakt om uit te rekken ({{ui:Uitrekken}}) en een stapel kunnen nog geen definitie delen.

## Subdivisieoppervlak

Subdivisie maakt een mesh glad met Catmull-Clark: elk vlak wordt vierhoekige vlakken, en elk niveau maakt er vier keer zoveel. Een doos met twee of drie niveaus leest al als een afgeronde vorm, en u blijft de doos bewerken.

- **Niveaus in de weergave** bepaalt hoe glad het is.
- **Niveaus in renders** bepaalt hoe glad gerenderde afbeeldingen en video's zijn; renders kunnen meer niveaus gebruiken dan de weergave.
- **Renders op het echte gladde oppervlak** zet de punten van een gerenderde mesh op het limietoppervlak waar de niveaus naartoe gaan, zodat zelfs twee niveaus zo glad renderen als veel.
- **Kreuken** houden randen scherp: selecteer in de Mesh-werkomgeving randen en gebruik {{ui:Kreuk}} (1 blijft scherp, 0.5 rondt een beetje af, 0 is glad). Zie [Een mesh bewerken](topic:mesh-edit).
- **Verlaag het weergaveniveau bij een grote mesh:** als de niveaus die u vraagt meer vlakken zouden geven dan deze computer in de weergave goed aankan, toont de weergave een lager niveau en zegt welk. {{ui:Toepassen}} gebruikt altijd alle niveaus. Hoeveel vlakken is ingesteld door de klasse van uw machine in {{ui:Instellingen}} › Rendering › Uw machine.
- Open randen houden hun hoeken en blijven op de lijn van hun randen.

## Buigen met een roosterkooi

1. Voeg een modifier {{ui:Rooster}} toe en druk op {{ui:Een roosterkooi om de mesh heen toevoegen}}. Een kooi van 3 × 3 × 3 punten verschijnt rond de mesh, getekend als draden.
2. Open de kooi in de Mesh-werkomgeving (dubbelklik erop) en verplaats zijn punten. De mesh volgt soepel.

:::tip
Een kooi is een gewone mesh: verberg hem met zijn tag als u klaar bent.
:::

## Grote meshes

Kleine stapels worden meteen berekend. Een grote wordt op de achtergrond berekend op elke kern van uw computer: de weergave toont het laatste resultaat tot het nieuwe klaar is. Booleans laden de volumemodeler de eerste keer; de weergave zegt dat even.

## Wat modifiers nog niet doen

- Gewichten per hoekpunt (een afvlakking die op de mesh is geverfd) voor Verschuiven, Gladmaken en Krimpomhulling.
- Modifiers anders dan Schalen en de lineaire Array op geometrie van duwen en trekken (groepen en componenten): zet het eerst om in een mesh ({{ui:Omzetten naar mesh}}). Spiegelen, een ronde of krommen-array, Buigen en Taperen op groepen komen later.
