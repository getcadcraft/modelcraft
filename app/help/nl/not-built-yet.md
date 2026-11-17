---
title: Nog niet beschikbaar
summary: Wat deze versie van ModelCraft nog niet doet, en wat u er vandaag voor kunt doen.
keywords: ontbrekend, nog niet, beperkingen, routekaart, materialen, texturen, tekst, lagen, bijsnijden, splitsen, cloud, desktop
from: 179fa5e4
---

ModelCraft is een vroege versie. Deze pagina somt op wat het nog niet doet, zodat u er niet naar zoekt, en de dichtstbijzijnde manier om de klus vandaag toch te klaren.

## Tekentools

| Nog niet | Nu in plaats daarvan |
|---|---|
| Vrij tekenen | Klik de punten aan met {{ui:Kromme}} |
| Het aantal segmenten van een boog of cirkel wijzigen nadat u hem getekend heeft | Wis hem en teken hem opnieuw na het typen van `24s` |
| Een lettertype kiezen voor [3D-tekst](topic:text3d), of de woorden bewerken nadat u die geplaatst heeft | Verwijder hem en voeg de tekst opnieuw toe |
| Een hoek wijzigen door te typen in een hoekmaatvoering, of de maat van een cilinder wijzigen vanuit de maatvoering van zijn cirkel | Draai de randen met {{ui:Draaien}}; schaal de cilinder met {{ui:Schalen}} |
| Maatvoeringen in geëxporteerde modelbestanden | Maatvoeringen verschijnen in afbeeldingen, prints en PDF's van de weergave; modelbestanden bevatten alleen geometrie |
| Bijsnijden, Splitsen en Buitenschil | [Vereniging, Aftrekken en Snijden](topic:solids) van gesloten groepen, of [vlakken snijden](topic:intersect) en wis wat u niet nodig heeft |
| De rotatie-as kiezen met de pijltjestoetsen | Klik het middelpunt van {{ui:Draaien}} aan op een vlak dat in de richting van de gewenste as wijst |
| Vergrendelingen op meer dan één aanwijzing tegelijk | Vergrendel één richting met een pijltjestoets, en snap daarna aan een punt |
| Vergroten of verkleinen langs een schuine lijn, of vanuit een maateinde dat niet op een hoek ligt | Plaats de maatvoering op twee hoeken, langs een rand, of langs rood, groen of blauw |

## Animatie

| Nog niet | Nu in plaats daarvan |
|---|---|
| Vlakken, randen, het tijdstip van de zon, de stijl of wat verborgen is animeren | Maak het bewegende deel een groep of component; render een aparte video voor een ander tijdstip van de dag |
| Een camera die een getekend pad volgt, of naar een bewegend object kijkt | Zet meer camerasleutels langs de weg ([Animeren](topic:animation)) |
| Geluid in video's, en video's van hoge kwaliteit (path-traced) zonder WebGPU | Voeg geluid toe in een videobewerkingsprogramma; zonder WebGPU, render de video met de snelle renderer ([De video renderen](topic:animation#render-the-video)) |
| Geanimeerde lampen (helderheid, spreiding, kleur) in een gerenderde video, een lenshoek die in een video geanimeerd wordt zonder camerasleutels, of het animeren van materialen of renderinstellingen | Lampen animeren in de weergave; voor een video zet u ook camerasleutels voor een zoom; render aparte video's voor verschillende lampinstellingen ([Elke eigenschap animeren](topic:animate)) |
| Gewichten of botten van de ene kant naar de andere spiegelen, zichtbare botenhulpen, gewichten per punt gearceerd tonen (ze tonen per vlak), de vervormde mesh zien tijdens het schilderen van gewichten | Schilder beide kanten, of maak één helft en gebruik een Spiegel-modifier voordat de armatuur wordt toegevoegd; wissel tussen Gewichten verven en Pose om te controleren |
| Botten die uit glTF-, FBX- of USD-bestanden als armatuur worden gelezen, en armaturen die naar die bestanden worden geschreven | Ingeklede modellen komen in rust binnen met de gewichten van het bestand; voeg de botten toe in de gewrichtsvolgorde van het bestand, en gebruik daarna {{ui:De gewichten van het bestand gebruiken}} ([Animeren](topic:animate)) |
| Een IK-doel of een pool verplaatsen door het in de weergave te slepen, de eigen ruimte van een beperking (lokaal of wereld) kiezen, IK-ketens uitrekken, IK langs een kromme | Typ het punt van het doel, of mik op een object en verplaats dat; houd ketens op hun lengten |
| Stof, vloeistoffen, zachte lichamen, scharnieren en verbindingen tussen starre lichamen, botsing met de exacte vorm van een object (er wordt alleen een doos of bol eromheen gebruikt), een live simulatie terwijl u afspeelt, een beginsnelheid of draaiing (lichamen beginnen in rust) | Bak starre lichamen in en speel de sleutels af; bouw een scharnier met sleutels; splits een vreemde vorm op in dozen (groepen) |
| De animatie exporteren naar glTF of andere modelbestanden | Render een video; het `.modelcraft`-bestand, en een [USD-bestand](topic:usd) dat ModelCraft opsloeg, bewaren het voor ModelCraft |
| Een opmerking of titel op een issue typen in VR, spraaknotities, een doorsnedevlak met de hand verplaatsen in VR | Plaats het issue in VR en voeg de tekst daarna toe in een BCF-programma; stel een doorsnedevlak in de weergave in voordat u naar binnen gaat: zie [Het model beoordelen met een VR-headset](topic:vr-review) |
| Mensen aan het bureau zien in VR (alleen mensen in VR worden getoond), een VR-wandeling opnemen | Vraag hen om in VR mee te doen, of maak een [animatie](topic:animation) van de wandeling |

## Meshes

| Nog niet | Nu in plaats daarvan |
|---|---|
| Boetseren op niveaus (multiresolutie), en Detail die driehoeken verwijdert die klein zijn geworden | [Boetsen](topic:sculpt) een onderverdeelde mesh; {{ui:Opnieuw meshen}} om hem weer gelijkmatig te maken |
| Een hermeshing naar vierhoekige vlakken die de vorm volgen | {{ui:Opnieuw meshen}} (gelijkmatige driehoeken), en bouw hem daarna opnieuw op met [Retopologie](topic:mesh-edit#retopology) |
| Gewichten op hoekpunten geschilderd voor modifiers (Displace, Smooth en Shrinkwrap werken op de hele mesh) | Pas de modifier toe, en boetsel of bewerk daarna de delen die dat nodig hebben |
| Kopiëren en plakken van hoekpunten, randen of vlakken, een messnede die eindigt binnen een vlak, draadranden zonder vlak | Dupliceer de mesh in Model; snijd met het mes van rand naar rand; [Extruderen](topic:mesh-edit#change-the-shape) open randen naar vlakken |

## Ordenen en bekijken

| Nog niet | Nu in plaats daarvan |
|---|---|
| Lagen van DWG- en DXF-situatietekeningen als tags | De situatietekening komt binnen als één groep: ontbind hem en groepeer de delen die u wilt taggen |
| Meerdere doorsnedes tegelijk, een snijkader, of de contour van een doorsnede geëxporteerd als tekening | Één [doorsnedevlak](topic:sections) snijdt tegelijk; exporteer de weergave als afbeelding |
| Zachte randen gestreept tonen, of verzachten terwijl u een schuifregelaar sleept | [Verzachten op hoek](topic:soften) in Entiteitsinformatie, en Ongedaan maken om een andere hoek te proberen |
| Een online bibliotheek met modellen om in te zoeken, of componenten met opties om uit te kiezen (kleur, stijl) | De [startbibliotheek](topic:starter); importeer Collada-, OBJ- of glTF-modellen; [rek](topic:stretch) een kopie uit tot de gewenste maat |
| Planten plaatsen uit de plantenbibliotheek | [Verspreid](topic:live-view#scatter-plants-rocks-and-people) planten in de live-weergave, of plaats een boom uit de startbibliotheek |
| Onafhankelijke kopieën van een groep | Maak er een component van, en gebruik daarna {{ui:Uniek maken}} (zie [Problemen oplossen](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderen

| Nog niet | Nu in plaats daarvan |
|---|---|
| Renderen in de weergave (de werkomgeving {{ui:Renderen}}), de renderwachtrij, en de opties voor camera, hemelafbeelding, mist en lichtmenging zonder WebGPU | {{ui:Een afbeelding renderen…}} in {{ui:Hoge kwaliteit}} gebruikt daar de WebGL-padtracer, zonder die opties ([Een afbeelding renderen](topic:render#high-quality)) |
| Een ander programma dat de gerenderde afbeelding tekent zonder een render-engine-add-on (CadCraft voert nooit een programma uit onder de GNU GPL-licentie); panorama- of stereocamera's en een hemelafbeelding via een ander programma; de Unreal Engine-plug-in (de bestanden worden geschreven, maar de plug-in die ze opent is niet uitgebracht) | De engines Fast en Path tracer van ons zelf; de engine van een add-on ([de afbeelding met een ander programma tekenen](topic:render-other-program)); een USD-, glTF- of Unreal-mapbestand uit de lijst Engine om mee te nemen naar elk programma |
| Verspreide planten en rotsen in {{ui:Een afbeelding renderen…}} | Ze verschijnen in de [live-weergave](topic:live-view), de panorama's, de kijker en de video |

## Materialen en kleuren

| Nog niet | Nu in plaats daarvan |
|---|---|
| Invoer anders dan basiskleur, ruwheid, metaalachtigheid, dekking, normaal en emissie die over een oppervlak veranderen in afbeeldingen van hoge kwaliteit (ze gebruiken hun gemiddelde) | [Materialen maken met knopen](topic:shading): koppel ze toch, de weergave toont ze wel als variërend |
| Verplaatsing op vlakken van Duwen/trekken | Zet het object om in een mesh voor verplaatsing |
| Uw eigen materialen delen met de Bibliotheek vanuit de app, en gepakte (ARM/ORM) of EXR-kaarten in een geïmporteerde textuurset | Bewaar ze in het bestand; importeer de losse kaarten als PNG of JPEG |
| Materialen van het bestand in Live TeamWork-sessies (ze blijven op de computer die ze maakte) | Sla het bestand op en deel het |
| Decals die om gebogen oppervlakken buigen, decals in Ongedaan maken, of texturen van meerdere vlakken tegelijk over een naad schilderen | Plaats kleinere decals op elk deel; schilder elke kant van een naad afzonderlijk |
| Inbakken op vlakken van Duwen/trekken, meerdere objecten in één afbeelding inbakken, een kooi die u met de hand vormt, of ingebakken belichting van lampen | Zet om in een mesh en ontvouw hem; bak elk object in; verhoog de zoekafstand; render een afbeelding voor lamplicht |
| Ruwheid, metaalachtigheid of hoogte schilderen, schilderen met afbeeldingen (stempels) en textuurschilderen groter dan 512 × 512 | Schilder hier de basiskleur; maak andere kaarten in een afbeeldingseditor en importeer ze als textuurset |
| Texturen in Collada-, STL-, PLY-, 3MF-, IFC-, DWG- en DXF-exports, en de grafen van knopen van de eigen materialen van het bestand in geëxporteerde modellen | Die formaten krijgen de kleur van elk materiaal; glTF en OBJ bewaren geïmporteerde texturen; exporteer een materiaal op zich als [MaterialX](topic:shading#materialx); [USD](topic:usd) bewaart het hele model voor ModelCraft |
| Texturen in Collada-bestanden | Ze worden geteld en weggelaten bij het importeren; texturen in `.skp`- en `.glb`-bestanden komen binnen |

## Bestanden

| Nog niet | Nu in plaats daarvan |
|---|---|
| SketchUp-bestanden opslaan, en tekst en maatvoeringen daaruit | [Importeren](topic:import-sketchup-files) bewaart vlakken, kleuren en texturen; exporteer Collada (`.dae`) om terug naar SketchUp te gaan |
| Maatvoeringen en hulplijnen in DWG- en DXF-exports | Voeg ze toe in het CAD-programma na het exporteren |
| Punten, tabellen en multileiders uit DWG en DXF | Ze worden geteld en weggelaten; tekst komt binnen als enkellijnige letters, niet in het lettertype van de tekening |
| Oppervlakken, meshes, tabellen en multileiders uit DWG en DXF; vlakken van 3D-volumes op uitgeveegde, loft- of andere vrije-vormoppervlakken | Die worden ook geteld en weggelaten (3D-volumes zelf komen binnen). Exporteer die delen vanuit het CAD-programma als OBJ of Collada en importeer dat |
| IFC-types, eigenschappen of materialen | De IFC-export bevat [verdiepingen](topic:formats#ifc-ifc) en generieke elementen; voeg de rest toe in een BIM-programma |
| Een model rechtstreeks naar BimCraft sturen | Exporteer {{ui:IFC voor BimCraft (.ifc)}} en open het in BimCraft |
| Losse randen in glTF en STL | Gebruik OBJ of Collada voor lijnwerk |
| glTF- en FBX-materialen buiten de basiskleur (metaal, ruwheid, normaalkaarten, glas, lak, glans…) | Ze worden gelezen en opgesomd; ModelCraft bewaart de basiskleur of textuur. Bouw de look opnieuw op in de [Shading-werkomgeving](topic:shading) |
| glTF-botten, animaties en morph-doelen | Ingeklede modellen komen binnen in de rustpositie; animeer in de [tijdlijn](topic:animation) |
| Kleuren en de onderdeelnamen van de samenstelling uit STEP-bestanden | Onderdelen komen binnen als meshes op hun ware grootte; [verf](topic:paint) ze en geef ze namen na het importeren |
| SubD-objecten, tekst, maatvoeringen en lampen uit `.3dm`-bestanden | Zie [wat is weggelaten](topic:import-3dm-files#what-is-left-out-and-said); zet SubD om in meshes in het programma dat het bestand maakte |
| KTX2-texturen en materiaalvarianten in glTF | Exporteer met PNG- of JPEG-texturen; de standaardvariant wordt gebruikt |
| Het schrijven van glTF-instancing (EXT_mesh_gpu_instancing) | Componenten worden één keer geschreven en vaak geplaatst, wat elke kijker leest |
| Alembic-animatie (elk monster van een cache), Alembic-punten en -krommen, Alembic schrijven | Het eerste monster komt binnen; animeer in de [tijdlijn](topic:animation); schrijf glTF, USD of OBJ |
| Bump- en normaalkaarten in OBJ-materialen | Alleen de kleurenafbeelding (`map_Kd`) komt binnen |
| FBX-botten en -animatie, FBX-export, FBX 6-bestanden | Ingeklede modellen komen in rust binnen; exporteer glTF; bewaar oude bestanden als FBX 2011 of nieuwer |
| Collada-skins, morphs, camera's, lampen, look-at- en scheeftransformaties, externe verwijzingen | Bij het importeren weggelaten en geteld in het bericht |
| Back-upbestanden | {{ui:Opslaan als}} ({{key:Mod+Shift+S}}) slaat een andere kopie op. Na een crash biedt ModelCraft uw niet-opgeslagen werk weer aan ("Uw werk herstellen?") |
| Opslaan in de cloud en synchronisatie tussen computers | Nog niet beschikbaar. Sla bestanden op uw computer op, en kopieer ze waar u ze nodig heeft |

## 3D-printen

| Nog niet | Nu in plaats daarvan |
|---|---|
| Echte steunen van de slicer (interfaces, raft, het exacte steunpatroon) | De [voorbeeld van steunen](topic:print-tools#supports-preview) toont waar en ongeveer hoeveel; de voorbeeldweergave van uw slicer toont de echte |
| Een onderdeel ontwarren dat door zichzelf heen gaat, of randen waar drie of meer vlakken samenkomen | [Repareren](topic:print-tools#repair) somt ze op met hun plaats; gebruik [vlakken snijden](topic:intersect) en wis wat erbinnen zit |
| Vulpatronen en een rooster binnen een holte | [Uitholen](topic:print-tools#hollow) laat hem leeg; uw slicer voegt vulling toe aan een massief onderdeel |
| Details die te klein zijn voor uw spuitmond (behalve wanden) | [Wanddikte](topic:print-tools#wall-thickness) vindt dunne wanden; de laagvoorbeeldweergave van uw slicer toont de rest |

## Prestaties

Ongedaan maken bewaart een kopie van het model voor elke stap (een [mesh](topic:meshes) bewaart alleen wat er veranderde). Daardoor maken zeer grote imports van Duwen/trekken-geometrie elke bewerking trager. Houd imports slank, en sla op en open opnieuw om de geschiedenis te wissen.

## Apps en platforms

- **Desktop:** ModelCraft draait in de browser op Mac, Windows en Linux, en in CadCraft Studio, de desktopapp met alle acht de apps in één installatie. Op Android installeert CadCraft Studio zich vanaf zijn APK op getcadcraft.com/download. Er is nog geen iPad- of iPhone-versie.
- **Aanraken:** zie [Draaien, verschuiven en zoomen](topic:orbit-pan-zoom) voor de vingergebaren. De drukgevoeligheid van een pen bepaalt het penseel in [Boetsen](topic:sculpt); elders worden druk en pen-kanteling niet gebruikt.
- **Bladen:** ModelCraft [print één weergave per pagina](topic:export-model#print-the-view-or-save-it-as-a-pdf); er zijn geen bladindelingen met meerdere weergaven of een titelblok. Exporteer naar DWG/DXF die goed met CadCraft werkt voor tekeningen op schaal.
