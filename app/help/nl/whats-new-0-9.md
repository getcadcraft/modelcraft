---
title: Wat is er nieuw in 0.9 (eerder)
summary: Printfase met onze eigen slicer en verzenden via USB, Klipper, OctoPrint en PrusaLink, harssnijden en bestands-add-ons, materiaalstroom, digital twin- en factory floor-add-ons, NURBS-afrondingen, verdikken en scanpassing, AR op de bouwplaats en tien boogmethoden.
keywords: wat is er nieuw 0.9, eerdere uitgave, wat is er nieuw, release notes, wijzigingenlijst, 0.9, printfase, 3d-printen, naar 3d-printer verzenden, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, hars, harsprinten, goo, sl1, ctb, anycubic, belichtingstest, materiaalstroom, digital twin, factory floor, plc, transportband, nurbs, afronding, verdikken, scanpassing, ar, op de bouwplaats, boogmethoden, eenheden, wat is er nieuw, release notes, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, renderengine, engine, openen in, usd, gltf, unreal, add-on-engine, nurbs, oppervlakken, loft, uitvegen, continuïteit, g0, g1, g2, zebra, step, iges, scène beschrijven, scène, weer, tijd van de dag, seizoen, assistent, materiaal van een foto, foto, schetsfoto, inrichten, ruimte inrichten, schuin, schuine snede, splitsen, printcontrole, problemen, eigenschappenraster, lampen, talen, invoerapparaten, werkbalkrijen, dwg, live
from: 2717d1b1
---

Dit is wat er is veranderd in ModelCraft 0.9, vergeleken met 0.8.1. ModelCraft bereikt nu de printer en de productievloer: u kunt objecten op een printbed zetten en ze verzenden zonder te exporteren, snijden voor filament of hars, en een lijn voor materiaaltransport indelen. Dit is CadCraft Studio 0.9 en de acht apps ervan; de meeste nieuwe functies hieronder zijn add-ons.

## Nieuw

### 3D-printen

- **Printfase.** Klik in de werkbalk op {{ui:Printfase}}. Voeg bibliotheekitems toe aan het bed van de printer, rangschik ze, bekijk de gesneden lagen en druk op {{ui:Naar 3D-printer verzenden}}, zonder STL te exporteren. Het hoort bij de 3D Print-add-on, die standaard aan staat en net als elke add-on verwijderd kan worden. Zie [Objecten op het printbed plaatsen en naar een printer verzenden](topic:print-stage).
- **Onze eigen filamentslicer.** {{ui:CadCraft basic (included, fastest)}} is de slicer in de lijst **Slicer** op de kaart: wanden, buitenhuiden, vulling, steunen en een skirt, op een achtergrondproces zodat de pagina bruikbaar blijft. {{ui:Lagen bekijken}} met de schuif **Laag** toont de lagen voordat u verzendt. Printerprofielen zoals de stijlen Ender-3 en Prusa MK4 hebben hun eigen start-G-code.
- **Verzenden.** Via USB (Chrome of Edge op een computer, met de pagina open), of naar Klipper (Moonraker), OctoPrint of PrusaLink op uw netwerk. Er wordt niets verbonden of verzonden zonder klik, en bij verzenden wordt eerst gevraagd.
- **Andere slicers.** Kiri:Moto, PrusaSlicer en OrcaSlicer zijn elk een eigen add-on, standaard uit; voeg ze toe vanaf de kaart of via {{ui:Instellingen}} › {{ui:Add-ons}}. PrusaSlicer en OrcaSlicer gebruiken uw eigen geïnstalleerde exemplaar uit CadCraft Studio. De add-on voor Bambu Lab-printers snijdt met uw OrcaSlicer en de P2S-presets ervan en heeft Studio op een computer nodig.
- **Harsprinten.** De hars-add-ons (standaard uit) maken laagafbeeldingen voor het scherm van uw printer, met uithollen en ventilatiegaten, een vlotter en steunen, een laagvoorbeeld, en tijd, hars en kosten. De bestandsformaat-add-ons schrijven Elegoo GOO, SL1, Chitubox (CBDDLP en CTB 2 tot 5) en Anycubic (PWMX en PWS). Een harsbelichtingstest maakt een ladder van vijf belichtingen. Zie [Snijden voor een harsprinter](topic:resin-printing).
- **Ongewijzigd.** {{ui:Exporteren}} › {{ui:Controleren op 3D-printen (STL of 3MF)…}}, de printhulpmiddelen en Splitsen voor printen werken zoals in 0.8. Zie [Een model klaarmaken voor 3D-printen](topic:print-3d).

### Materiaalstroom, Digital twin en Factory floor

Deze drie zijn add-ons, uit tot u ze aanzet via {{ui:Instellingen}} › {{ui:Add-ons}}, en elk heeft eigen Help zodra het aan staat.

- **Materiaalstroom.** Een paneel met de naam Materiaalstroom legt transportbanden, stations, buffers en AGV-paden neer in de 3D-weergave, draait een gezaaide simulatie, speelt die af en toont doorvoer, doorlooptijden en wachtrijen, met resultaten opgeslagen als CSV. Orders kunnen uit een CSV-bestand komen. Robotcellen kunnen worden gecontroleerd en geëxporteerd. De PLC-koppeling heeft een zachte modus en een echte modus via Modbus TCP, die alleen werkt in CadCraft Studio.
- **Digital twin.** Leest de lay-out van de materiaalstroom en draait er een zachte PLC op, met fouten die u kunt forceren, voorraadtests, een vergelijking van lay-outs en een stuklijst.
- **Factory floor.** Maakt van de stations machines en cellen, leest ze live of uit een simulator, en houdt een taakwachtrij en een eenvoudige OEE bij. Het leest alleen: deze build kan niet naar een machine of PLC schrijven.

### Oppervlakken, modellen en tekenen

- **Afrondingen, verdikken en booleans op NURBS.** Het paneel {{ui:Oppervlakken}} heeft {{ui:Afronding tussen vlakken}}, {{ui:Meerdere randen afronden}}, {{ui:Verdikken tot volume}} en Samenvoegen, Aftrekken en Doorsnede, elk met de gemeten afwijking. Zie [Vrije vormoppervlakken (NURBS)](topic:nurbs-surfaces).
- **Oppervlakken aan een scan passen.** Selecteer een gescand mesh en gebruik {{ui:Oppervlakken aan de scan passen}} in de groep **Scan**, en daarna {{ui:De oppervlakken tot een volume hechten}}. Dit is een eerste passing, geen volledig reverse-engineeringpakket.
- **Een live koppeling vanuit een .3dm-modelleerprogramma.** Eenrichtingsverkeer, vanuit Rhino 8 of Grasshopper, en het vereist CadCraft Studio op dezelfde computer. Zie [Een .3dm-model live houden](topic:live-3dm-link).
- **Het model op de bouwplaats bekijken.** {{ui:Weergave op de bouwplaats (AR, telefoon)}} in het menu {{ui:Weergaven}} werkt op een Android-telefoon met Chrome. Zie [Het model op de bouwplaats bekijken met een Android-telefoon (AR)](topic:ar-on-site).
- **Boogmethoden.** De keuzelijst {{ui:Boogmethoden}} biedt tien manieren om een boog te tekenen, waaronder {{ui:3 punten}} en {{ui:Start, middelpunt, eind}}.
- **Meer eenheden.** Gewichten (kg, lb, t, ton) en temperaturen (graden C, F, K en R) worden herkend waar u waarden met eenheden typt.

## In elke app

- **Tooltips.** Zwevende tekst op knoppen en afgesneden labels is een Bootstrap-tooltip.
- **Sluitbare starttip.** De tipkaart op een leeg tekengebied heeft een klein sluitknopje (x). Ze blijft gesloten, en het opdrachtpalet kan ze weer tonen.
- **Schuivende tabbalken.** Een tabbalk van een paneel die niet past, schuift in plaats van afgesneden te worden.
- **Tabbladtitels.** Als een document open is, begint het browsertabblad met de naam van het document, daarna ModelCraft en CadCraft. Een stip staat ervoor zolang het niet-opgeslagen is.
- **Indeling.** {{ui:Instellingen}} › {{ui:Algemeen}} › Indeling bevat de indelingen in een keuzelijst, met een keuze om een indeling alleen voor deze app te gebruiken en een knop om de indeling opnieuw in te stellen.
- **Talen.** De taallijst in Instellingen volgt de taalbestanden die in de build zitten. Andere talen dan Engels zijn machineconcepten.
- **Live en Bibliotheek.** Live TeamWork toont live cursors en namen, en bibliotheekcollecties geven elke app een standaardcollectie.

## Opgelost

- {{ui:Afspelen}} wordt {{ui:Pauzeren}} terwijl een animatie speelt, en {{key:Space}} speelt en pauzeert terwijl de tijdlijn open is.
- De stilstaande render valt terug op WebGL wanneer de videokaart de pad tracer niet kan starten. De live renderweergave kan de fout nog tonen; dit is niet gecontroleerd op een Windows-computer met dat stuurprogramma.
- De echte modus van de materiaalstroom verbindt weer opnieuw nadat een verbinding eindigde op PLC-uitzonderingsantwoorden.

## Eerlijke grenzen

- Er is niets geprint op een echte printer: niet met filament, niet met hars, niet via Bambu Connect. Harsbestanden zijn alleen teruggelezen door de eigen lezers van CadCraft.
- De digital twin en Factory floor zijn alleen getest met simulators en bekende antwoorden, zonder echte PLC, lijn of protocol. Het zijn controlehulpmiddelen, geen veiligheidsvalidatie. De fysica geldt alleen voor dozen, tot acht belastingen.
- De Rhino- en Grasshopper-koppeling heeft nog nooit in de echte programma's gedraaid.
- Talen anders dan Engels zijn machineconcepten.

## Eerder: 0.8 en 0.8.1

Dit is wat er is veranderd in ModelCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02), vergeleken met 0.7. Het dialoogvenster {{ui:Een afbeelding renderen…}} kan nu de scène naar een ander programma sturen, het paneel {{ui:Oppervlakken}} maakt gladde vrije vormoppervlakken, en een assistent die u verbindt kan een hele scène instellen met één zin.

### Nieuw

**Renderen**

- **Een keuze van engine.** {{ui:Een afbeelding renderen…}} heeft een lijst **Engine** boven Modus. Onze eigen twee engines, Fast en de Path tracer, staan standaard aan en werken overal. Andere opties slaan de scène op als pakket (het model als USD-bestand, plus een instellingenbestand met de exacte materiaalwaarden, de aangezette lampen, de zon, de lucht, de belichting en de camera) om mee te nemen naar een ander programma. Een afbeelding die door een ander programma is getekend, vermeldt welk programma en welke versie hem maakte. Zie [Kiezen welk programma de afbeelding tekent](topic:render-engines).
- **Openen in een ander programma.** De lijst Engine kan de scène opslaan als USD-bestand, glTF-bestand (`.glb`) of een Unreal-projectmap (`.zip`), in de browser en in CadCraft Studio. In Studio kan het ook usdview of het eigen programma van de computer starten voor het bestand. Zie [De scène openen in een ander programma](topic:render-open-in).
- **Verzenden naar een game-engine vanuit Studio.** Studio schrijft de scène in een Unreal Engine-project en houdt die bij bij elke verzending, alleen één richting. Uw eigen wijzigingen staan in een laag die CadCraft nooit schrijft. Zie [De scène naar een game-engine sturen](topic:render-unreal).
- **Engines uit add-ons.** Een add-on kan een engine aan de lijst toevoegen. Een engine in JavaScript tekent in de browser en in Studio; een engine die een programma draait, heeft uw ja nodig in Studio. Zie [De afbeelding tekenen met een ander programma](topic:render-other-program) en [Een renderengine toevoegen met een add-on](topic:render-engine-addons).
- **Scène beschrijven.** Vertel uw verbonden assistent "schemer, lichte regen, herfstbomen, mensen op het plein" en ModelCraft zet het in één stap klaar: de zon verplaatst zich naar de datum en het tijdstip zodat de schaduwen meebewegen, de lucht verandert, natte oppervlakken verschijnen, en bomen en mensen worden geplaatst als echte objecten op labels die u kunt verbergen, verplaatsen of verwijderen. Tijd van de dag, datum of seizoen, en weer (helder, bewolkt, mist, lichte regen, regen, storm) werken ook op zichzelf, en een latere aanvraag wijzigt dezelfde scène. Mist is zichtbaar in de hoogwaardige afbeelding op de videokaart; de andere engines tonen de lucht, het licht en de natte oppervlakken. Regen wordt niet getekend als vallende strepen.

**Materialen**

- **Een materiaal uit één foto.** Geef ModelCraft een foto van een oppervlak (een muur, een vloer, steen) en het maakt een tegelbaar materiaal: de verlichting over de foto wordt vlakgemaakt, de randen worden op elkaar aangesloten, en een kleurkaart, een ruwheidskaart en een normaalkaart worden uit de afbeelding afgeleid. Het is gewone beeldverwerking op uw eigen foto, zonder getraind model. Ruwheid is een schatting. Een gewone, vierkante, rechtdoor genomen foto geeft de beste tegel; een sterk patroon, zoals bakstenen, kan een zachte schim laten zien waar de naad is uitgemengd.

**Oppervlakken**

- **Vrije vormoppervlakken.** Het paneel {{ui:Oppervlakken}} maakt NURBS-curven en niet-bijgesneden oppervlakken: curven door punten, loft, gelijkvormig, extruderen, omwentelen, uitvegen langs een of twee rails, oppervlakken uit een curvennetwerk, vlakken uit vier randen, passen en mengen. Elke gedeelde rand wordt gemeten als G0, G1 of G2 (opening, hoek, krommingssprong) op de exacte oppervlakken, en een rand die slechter is dan u vroeg, verschijnt in het paneel Problemen met een reparatie **Passen**. Zebrastrepen en krommingskleuren worden getekend vanaf de exacte oppervlakken. STEP- en IGES-bestanden gaan eruit en komen erin. Zie [Vrije vormoppervlakken (NURBS)](topic:nurbs-surfaces).

**Bouwplaats en ruimten**

- **Een schetsfoto op de grond.** {{ui:Bestand}} › {{ui:Een schetsfoto importeren…}} zet een telefoonfoto van een handschets om in randen op de grond, op de schaal die u opgeeft: één groep, met een label voor elke pennenkleur. Het papier wordt op uw computer gevonden en recht gezet, en er wordt niets ergens naartoe gestuurd. Zie [Model op een situatietekening](topic:site-plan).
- **Een ruimte inrichten.** Selecteer een vloer en gebruik {{ui:Ordenen}} › {{ui:Een ruimte inrichten…}}. Slaapkamer-, woonkamer-, eetkamer-, keuken-, badkamer- of kantoormeubilair wordt op regels geplaatst, tegen de muren en vrij van deuren en ramen, in één groep die u in één stap kunt verwijderen. Het is een standaardindeling om na te kijken, geen ontwerp. Zie [Startbibliotheek](topic:starter).

**3D-printen**

- **Schuine sneden.** Splitsen voor printen kan de sneden tot 60 graden schuin maken, wat de delen meer lijmoppervlak geeft. Verbindingsstukken staan recht op de snede. Zie [Een model splitsen voor printen](topic:print-split).
- **De printcontrole in Problemen.** De bevindingen van de 3D-printcontrole verschijnen in het paneel Problemen met markeringen op het model, en Repareren lost ze vanaf daar op. Zie [Steunen, wanddikte, uithollen en reparatie](topic:print-tools).

**In elke app**

- **Talen.** Help en apps zijn beschikbaar in 54 talen. Tien zijn nieuw: Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeeks. Talen anders dan Engels zijn machineconcepten totdat een moedertaalspreker ze heeft gelezen, en Help-onderwerpen kunnen nog in het Engels zijn.
- **Invoerapparaten.** Een trackpad, een pen, een 3D-muis, een gamecontroller en MIDI-bedieningen kunnen de apps bedienen, voor alle apps of voor één.
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › Werkbalkrijen stelt Terugloop (zoals voorheen), 2 rijen of 1 rij in. Een balk die niet past, schuift zijwaarts in plaats van ruimte van de tekening af te nemen. Terugloop blijft de standaard.
- **Eigenschappenraster.** De lampvelden van ModelCraft gebruiken het gedeelde raster: samenvouwbare categorieën, kolommen voor label en waarde, en dichtheid Compact. Getypte rekenkunde zoals `2*450` blijft werken.
- **Problemen.** Het paneel Problemen (de waarschuwingsknop in de appbalk) wordt door alle apps gedeeld. In ModelCraft bevat het de printcontrole en de waarschuwingen voor oppervlaktecontinuïteit.
- **Live.** Een Live TeamWork-sessie toont wie waar is. Zie [Samen modelleren met Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons kunnen renderengines toevoegen, zoals hierboven.
- **Verbind uw AI.** Het toolcontract en de controles van de acht apps slagen, met 454 tools in totaal. Verbinden met één klik binnen Studio, een gehoste connector voor browserassistenten, uw eigen sleutel binnen Studio en een gepubliceerd pakket zijn nog niet beloofd. De apps bevatten zelf geen AI. Zie [ModelCraft gebruiken met AI-assistenten](topic:use-with-ai-assistants).

### Opgelost in 0.8.1

- **Sectie DWG-klassen.** De sectie met klassen van een DWG-bestand werd als het verkeerde type gelezen, wat het bestand bij importeren kon breken. Het wordt nu correct gelezen, in ModelCraft en in de andere apps die DWG lezen.
- **Tablets in staand formaat.** Overtollige rasterhoogte gaat naar het canvas, en de vellenindeling begint bij 760 pixels breed of minder. De stijlbladen van ModelCraft hebben de wijziging ook.
- **Taal in Studio.** CadCraft Studio en de verpakte edities kunnen de taal wisselen terwijl ze draaien; eerder was dat alleen Engels. Dit is nog niet op elk platform getest: laat ons weten als de taal niet verandert.

### Nog niet beschikbaar in deze versie

- **Niet code-ondertekend.** Windows kan SmartScreen tonen: kies {{ui:Meer informatie}}, daarna {{ui:Toch uitvoeren}}. Op een Mac klikt u met de rechtermuisknop en kiest u {{ui:Openen}}. Winkelversies staan in de wacht, en de iPad- en iPhone-build is niet opnieuw gebouwd voor 0.8.1.
- Een ander programma dat de afbeelding tekent zonder een renderengine-add-on, panorama- of stereocamera's en een lucht-afbeelding via een ander programma, en de plug-in die de Unreal-scène opent, zijn er nog niet. De bestanden worden geschreven; de plug-in is niet uitgebracht en is niet in Unreal uitgevoerd.
- Vrije vormoppervlakken: G3 en klasse A worden niet gemeten of beweerd, en bijsnijden en volumes komen later.
- Afbeeldingen van andere programma's zijn niet pixel voor pixel gelijk aan die van ons: alleen de camera, zon, lampen en belichting komen overeen.
- De oplossing in 0.8.1 voor het wisselen van taal in Studio is niet op elk platform getest.

Al het overige staat in [Nog niet beschikbaar](topic:not-built-yet). Voor de vorige uitgave, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
