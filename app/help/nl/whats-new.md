---
title: Wat is er nieuw in 0.9
summary: Printfase met onze eigen slicer en verzenden via USB, Klipper, OctoPrint en PrusaLink, slicen voor hars en bestandsadd-ons, add-ons voor materiaalstroom, digitale tweeling en fabriekshal, NURBS-afrondingen, verdikken en scanpassing, AR op locatie en tien boogmethoden.
keywords: wat is er nieuw, release notes, uitgavenotities, wijzigingslogboek, 0.9, printfase, 3d-printen, naar 3d-printer sturen, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, hars, harsprinten, goo, sl1, ctb, anycubic, belichtingstest, materiaalstroom, digitale tweeling, fabriekshal, plc, transportband, nurbs, afronding, verdikken, scanpassing, ar, op locatie, boogmethoden, eenheden, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, renderengine, engine, openen in, usd, gltf, unreal, add-on-engine, oppervlakken, loft, uitvegen, continuïteit, g0, g1, g2, zebra, step, iges, de scène beschrijven, scène, weer, tijd van de dag, seizoen, assistent, materiaal uit een foto, foto, schetsfoto, inrichten, een ruimte inrichten, schuin, schuine snede, splitsen, printcontrole, problemen, eigenschappenraster, lampen, talen, invoerapparaten, werkbalkrijen, dwg, live
from: 169048a2
---

Dit is wat er in ModelCraft 0.9 is veranderd, vergeleken met 0.8.1. ModelCraft bereikt nu de printer en de fabriekshal: u kunt dingen op een printbed zetten en ze verzenden zonder te exporteren, slicen voor filament of hars, en een materiaalverwerkingslijn indelen. Dit is CadCraft Studio 0.9 en zijn acht apps; de meeste nieuwe functies hieronder zijn add-ons.

## Nieuw

### 3D-printen

- **Printfase.** Klik op {{ui:Printfase}} in de werkbalk. Voeg bibliotheekitems toe aan het printbed van de printer, schik ze, bekijk de gesliceerde lagen en druk op {{ui:Verzenden naar 3D-printer}}, zonder STL te exporteren. Het hoort bij de add-on 3D Print, die standaard aan staat en net als elke add-on kan worden verwijderd. Zie [Dingen op het printbed zetten en naar een printer sturen](topic:print-stage).
- **Onze eigen filamentslicer.** {{ui:CadCraft basic (inbegrepen, het snelst)}} is de slicer in de lijst **Slicer** van de kaart: wanden, huiden, vulling, steunen en een skirt, op een worker zodat de pagina bruikbaar blijft. {{ui:Lagen bekijken}} met de schuifregelaar **Laag** toont de lagen voordat u verzendt. Printerprofielen zoals de Ender-3- en Prusa MK4-stijlen hebben hun eigen start-G-code.
- **Verzenden.** Via USB (Chrome of Edge op een computer, met de pagina open), of naar Klipper (Moonraker), OctoPrint of PrusaLink op uw netwerk. Er wordt niets verbonden of verzonden zonder een klik, en bij verzenden wordt eerst gevraagd.
- **Andere slicers.** Kiri:Moto, PrusaSlicer en OrcaSlicer zijn elk een eigen add-on, standaard uit; voeg ze toe vanaf de kaart of via {{ui:Instellingen}} › {{ui:Add-ons}}. PrusaSlicer en OrcaSlicer gebruiken uw eigen geïnstalleerde kopie vanuit CadCraft Studio. De add-on voor Bambu Lab-printers slicet met uw OrcaSlicer en de P2S-presets, en heeft Studio op een computer nodig.
- **Harsprinten.** De hars-add-ons (standaard uit) maken laagafbeeldingen voor het scherm van uw printer, met uitholling en ventilatiegaten, een raft en steunen, een laagvoorbeeld, en tijd, hars en kosten. Add-ons voor bestandsformaten schrijven Elegoo GOO, SL1, Chitubox (CBDDLP en CTB 2 tot 5) en Anycubic (PWMX en PWS). Een harsbelichtingstest maakt een ladder van vijf belichtingen. Zie [Slicen voor een harsprinter](topic:resin-printing).
- **Ongewijzigd.** {{ui:Exporteren}} › {{ui:Controleren op 3D-printen (STL of 3MF)…}}, de printtools en Splitsen voor printen werken zoals in 0.8. Zie [Een model klaarmaken voor 3D-printen](topic:print-3d).

### Materiaalstroom, Digitale tweeling en Fabriekshal

Deze drie zijn add-ons, uit totdat u ze aanzet in {{ui:Instellingen}} › {{ui:Add-ons}}, en elk heeft eigen Help zodra het aan staat.

- **Materiaalstroom.** Een paneel met de naam Materiaalstroom legt transportbanden, stations, buffers en AGV-paden uit in de 3D-weergave, draait een simulatie met vast startgetal, speelt die af en toont doorvoer, doorlooptijden en wachtrijen, met resultaten opgeslagen als CSV. Orders kunnen uit een CSV-bestand komen. Robotcellen kunnen worden gecontroleerd en geëxporteerd. De PLC-koppeling heeft een zachte modus en een echte modus via Modbus TCP, die alleen in CadCraft Studio werkt.
- **Digitale tweeling.** Leest de indeling van de Materiaalstroom en draait er een zachte PLC op, met storingen die u kunt forceren, voorraadtests, een indelingsvergelijking en een stuklijst.
- **Fabriekshal.** Zet de stations om in machines en cellen, leest ze live of van een simulator, en houdt een opdrachtwachtrij en een eenvoudige OEE bij. Het leest alleen: deze build kan niet naar een machine of PLC schrijven.

### Oppervlakken, modellen en tekenen

- **Afrondingen, verdikken en booleans op NURBS.** Het paneel {{ui:Oppervlakken}} heeft {{ui:Afronding tussen vlakken}}, {{ui:Meerdere randen afronden}}, {{ui:Verdikken tot volume}} en Vereniging, Aftrekken en Doorsnede, elk met de gemeten afwijking. Zie [Vrije oppervlakken (NURBS)](topic:nurbs-surfaces).
- **Oppervlakken passen op een scan.** Selecteer een gescande mesh en gebruik {{ui:Oppervlakken aan de scan passen}} in de groep **Scan**, en daarna {{ui:De oppervlakken tot een volume hechten}}. Het is een eerste pasvorming, geen volledig reverse-engineeringpakket.
- **Een live-koppeling vanuit een .3dm-modelleerprogramma.** Eenrichtingsverkeer, vanuit Rhino 8 of Grasshopper, en het heeft CadCraft Studio op dezelfde computer nodig. Zie [Een .3dm-model live houden](topic:live-3dm-link).
- **Het model op locatie bekijken.** {{ui:Weergave op de bouwplaats (AR, telefoon)}} in het menu {{ui:Weergaven}} werkt op een Android-telefoon met Chrome. Zie [Het model op locatie bekijken met een Android-telefoon (AR)](topic:ar-on-site).
- **Boogmethoden.** De keuzelijst {{ui:Boogmethoden}} biedt tien manieren om een boog te tekenen, waaronder {{ui:3 punten}} en {{ui:Start, middelpunt, eind}}.
- **Meer eenheden.** Gewichten (kg, lb, t, ton) en temperaturen (graden C, F, K en R) worden herkend waar u waarden met eenheden typt.

## In elke app

- **Tooltips.** Zweeftekst op knoppen en afgesneden labels is een Bootstrap-tooltip.
- **Sluitbare starttip.** De tipkaart op een lege tekenruimte heeft een kleine sluitknop (x). Ze blijft gesloten, en het opdrachtenpalet kan hem weer tonen.
- **Scrollende tabbalken.** Een tabbalk van een paneel die niet past, scrolt in plaats van afgesneden te worden.
- **Tabbladtitels.** Met een document open begint het browsertabblad met de naam van het document, daarna ModelCraft en CadCraft. Een stip komt er eerst bij zolang het document niet is opgeslagen.
- **Indeling.** {{ui:Instellingen}} › {{ui:Algemeen}} › Indeling bevat de indelingen in een keuzelijst, met een keuze om een indeling alleen voor deze app te gebruiken en een knop om de indeling opnieuw in te stellen.
- **Talen.** De taallijst in Instellingen volgt de taalbestanden die de build bevat. Andere talen dan Engels zijn machineconcepten.
- **Live en Bibliotheek.** Live TeamWork toont live cursors en namen, en bibliotheekcollecties geven elke app een standaardcollectie.

## Opgelost

- {{ui:Afspelen}} verandert in {{ui:Pauzeren}} terwijl een animatie speelt, en {{key:Space}} speelt en pauzeert terwijl de tijdlijn open is.
- De stilstaande render valt terug op WebGL wanneer de videokaart de padtracer niet kan starten. De live-renderweergave kan de fout nog steeds tonen; dit is niet gecontroleerd op een Windows-computer met dat stuurprogramma.
- De echte modus van Materiaalstroom verbindt weer nadat een koppeling was beëindigd door PLC-uitzonderingsantwoorden.

## Eerlijke grenzen

- Er is nog niets geprint op een echte printer: niet met filament, niet met hars, niet via Bambu Connect. Harsbestanden zijn alleen teruggelezen door de eigen lezers van CadCraft.
- De digitale tweeling en de Fabriekshal zijn alleen getest met simulators en bekende antwoorden, zonder echte PLC, lijn of protocol. Het zijn controlehulpmiddelen, geen veiligheidsvalidatie. Fysica dekt alleen dozen, tot acht belastingen.
- De koppeling met Rhino en Grasshopper is nooit in de echte programma's gedraaid.
- Andere talen dan Engels zijn machineconcepten.

## Eerder: 0.8 en 0.8.1

Dit is wat er in ModelCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02) is veranderd, vergeleken met 0.7. Het dialoogvenster {{ui:Een afbeelding renderen…}} kan nu de scène naar een ander programma sturen, het paneel Oppervlakken maakt gladde vrije oppervlakken, en een assistent die u verbindt kan een hele scène instellen met één zin.

### Nieuw

**Renderen**

- **Een keuze van engine.** {{ui:Een afbeelding renderen…}} heeft een lijst **Engine** boven Modus. Onze eigen twee engines, Snel en de Padtracer, zijn de standaard en werken overal. Andere items slaan de scène op als pakket (het model als USD-bestand, plus een instellingenbestand met de exacte materiaalwaarden, de lampen die aan staan, de zon, de lucht, de belichting en de camera) om mee te nemen naar een ander programma. Een afbeelding die door een ander programma is getekend, zegt welk programma en welke versie hem heeft gemaakt. Zie [Kiezen welk programma de afbeelding tekent](topic:render-engines).
- **Openen in een ander programma.** De lijst Engine kan de scène opslaan als USD-bestand, glTF-bestand (`.glb`) of Unreal-projectmap (`.zip`), in de browser en in CadCraft Studio. In Studio kan het ook usdview of het eigen programma van de computer voor het bestand starten. Zie [De scène openen in een ander programma](topic:render-open-in).
- **Naar een game-engine sturen vanuit Studio.** Studio schrijft de scène naar een Unreal Engine-project en houdt het bij op elke verzending, alleen één richting. Uw eigen bewerkingen staan in een laag die CadCraft nooit schrijft. Zie [De scène naar een game-engine sturen](topic:render-unreal).
- **Engines uit add-ons.** Een add-on kan een engine aan de lijst toevoegen. Een in JavaScript geschreven engine tekent in de browser en in Studio; een engine die een programma draait, heeft uw ja nodig in Studio. Zie [De afbeelding tekenen met een ander programma](topic:render-other-program) en [Een renderengine toevoegen met een add-on](topic:render-engine-addons).
- **De scène beschrijven.** Vertel uw verbonden assistent "schemering, lichte regen, herfstbomen, mensen op het plein" en ModelCraft zet het in één stap klaar: de zon verschuift naar de datum en tijd zodat de schaduwen volgen, de lucht verandert, natte vlakken verschijnen, en bomen en mensen worden geplaatst als echte objecten op tags die u kunt verbergen, verplaatsen of verwijderen. Tijdstip van de dag, datum of seizoen, en weer (helder, bewolkt, mist, lichte regen, regen, storm) werken ook op zichzelf, en een latere aanvraag verandert dezelfde scène. Mist is zichtbaar in de afbeelding van hoge kwaliteit op de videokaart; de andere engines tonen de lucht, het licht en de natte vlakken. Regen wordt niet als vallende strepen getekend.

**Materialen**

- **Een materiaal uit één foto.** Geef ModelCraft een foto van een oppervlak (een wand, een vloer, steen) en het maakt een tegelmateriaal: de belichting over de foto wordt egaal gemaakt, de randen worden aaneengesloten, en een kleurkaart, een ruwheidskaart en een normaalkaart worden uit de afbeelding afgeleid. Het is gewone beeldbewerking van uw eigen foto, zonder getraind model. Ruwheid is een schatting. Een vlakke, vierkante, recht-van-voren foto geeft de beste tegel; een sterk patroon zoals bakstenen kan een zachte schim tonen waar de verbinding is vermengd.

**Oppervlakken**

- **Vrije oppervlakken.** Het paneel {{ui:Oppervlakken}} maakt NURBS-krommen en niet-getrimde oppervlakken: krommen door punten, loft, ruled, extruderen, omwentelen, uitvegen langs één of twee rails, oppervlakken uit een kromme-netwerk, vlakken uit vier randen, matchen en mengen. Elke gedeelde rand wordt gemeten als G0, G1 of G2 (opening, hoek, krommingssprong) op de exacte oppervlakken, en een rand die slechter is dan u vroeg, verschijnt in het paneel Problemen met een **Match**-reparatie. Zebrastrepen en krommingskleuren worden getekend uit de exacte oppervlakken. STEP- en IGES-bestanden gaan eruit en komen erin. Zie [Vrije oppervlakken (NURBS)](topic:nurbs-surfaces).

**Locatie en ruimten**

- **Een schetsfoto op de grond.** {{ui:Bestand}} › {{ui:Een schetsfoto importeren…}} zet een telefoonfoto van een handschets om in randen op de grond op de schaal die u opgeeft: één groep, met een tag voor elke pennenkleur. Het papier wordt op uw computer gevonden en recht gemaakt, en er wordt niets ergens naartoe gestuurd. Zie [Model op een situatietekening](topic:site-plan).
- **Een ruimte inrichten.** Selecteer een vloer en gebruik {{ui:Ordenen}} › {{ui:Een ruimte inrichten…}}. Slaapkamer-, woonkamer-, eetkamer-, keuken-, badkamer- of kantoormeubilair wordt volgens regels geplaatst, tegen de wanden en vrij van deuren en ramen, in één groep die u in één stap kunt verwijderen. Het is een standaardindeling die u kunt nakijken, geen ontwerp. Zie [Startbibliotheek](topic:starter).

**3D-printen**

- **Schuine sneden.** Splitsen voor printen kan de sneden tot 60 graden schuin zetten, wat de stukken meer lijmvlak geeft. Verbindingen staan haaks op de snede. Zie [Een model splitsen voor printen](topic:print-split).
- **De printcontrole in Problemen.** De bevindingen van de 3D-printcontrole verschijnen in het paneel Problemen met markeringen op het model, en Repareren lost ze van daaruit op. Zie [Steunen, wanddikte, uitholling en reparatie](topic:print-tools).

**In elke app**

- **Talen.** Help en apps komen in 54 talen. Tien zijn nieuw: Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeeks. Andere talen dan Engels zijn machineconcepten tot een moedertaalspreker ze heeft gelezen, en helponderwerpen kunnen nog in het Engels zijn.
- **Invoerapparaten.** Een trackpad, een pen, een 3D-muis, een gamecontroller en MIDI-bediening kunnen de apps aansturen, voor allemaal of voor één.
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › Werkbalkrijen stelt Afbreken in (zoals voorheen), 2 rijen of 1 rij. Een balk die niet past, scrolt zijwaarts in plaats van ruimte van de tekening in te nemen. Afbreken blijft de standaard.
- **Eigenschappenraster.** De lampvelden van ModelCraft gebruiken het gedeelde raster: inklapbare categorieën, kolommen voor label en waarde, en Compacte dichtheid. Getypte rekenkunde zoals `2*450` blijft werken.
- **Problemen.** Het paneel Problemen (de waarschuwingsknop in de app-balk) wordt door alle apps gedeeld. In ModelCraft bevat het de printcontrole en de waarschuwingen over oppervlaktecontinuïteit.
- **Live.** Een Live TeamWork-sessie toont wie waar is. Zie [Samen modelleren met Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons kunnen renderengines toevoegen, zoals hierboven.
- **Uw AI verbinden.** Het toolcontract en de controles van de acht apps slagen, met 454 tools in totaal. Verbinding met één klik binnen Studio, een gehoste connector voor browserassistenten, uw eigen sleutel binnen Studio en een gepubliceerd pakket zijn nog niet beloofd. De apps bevatten zelf geen AI. Zie [ModelCraft gebruiken met AI-assistenten](topic:use-with-ai-assistants).

### Opgelost in 0.8.1

- **DWG-klassensectie.** De klassensectie van een DWG-bestand werd als het verkeerde type gelezen, wat het bestand bij importeren kon breken. Het wordt nu correct gelezen, in ModelCraft en in de andere apps die DWG lezen.
- **Tablets in staand formaat.** Overgebleven rasterhoogte gaat naar het canvas, en de bladindeling begint bij 760 pixels breed of minder. Het stijlblad van ModelCraft heeft de wijziging ook.
- **Taal in Studio.** CadCraft Studio en de verpakte edities kunnen tijdens het draaien van taal wisselen; eerder waren ze alleen Engels. Dit is nog niet op elk platform getest: laat ons weten als de taal niet verandert.

### Nog niet in deze versie

- **Niet code-ondertekend.** Windows kan SmartScreen tonen: kies {{ui:Meer informatie}}, en daarna {{ui:Toch uitvoeren}}. Op een Mac klikt u met de rechtermuisknop en kiest u {{ui:Openen}}. Store-builds staan in de wacht, en de iPad- en iPhone-build is niet opnieuw gebouwd voor 0.8.1.
- Een ander programma dat de afbeelding tekent zonder een renderengine-add-on, panorama- of stereocamera's en een luchtafbeelding via een ander programma, en de plug-in die de Unreal-stage opent, zijn er nog niet. De bestanden worden geschreven; de plug-in is niet uitgebracht en is niet in Unreal gedraaid.
- Vrije oppervlakken: G3 en klasse A worden niet gemeten of geclaimd, en bijsnijden en volumes komen later.
- Afbeeldingen van andere programma's zijn niet pixel voor pixel gelijk aan de onze: alleen de camera, zon, lampen en belichting komen overeen.
- De 0.8.1-reparatie voor het wisselen van taal in Studio is niet op elk platform getest.

Al het overige staat in [Nog niet beschikbaar](topic:not-built-yet). Voor de vorige uitgave, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
