---
title: Wat is er nieuw in 0.8 en 0.8.1
summary: Een keuze van render-engine met bestanden voor andere programma's, vrije NURBS-oppervlakken met gemeten continuïteit, een scène die u beschrijft aan uw assistent, een materiaal uit één foto, een schetsfoto op de grond, ingerichte kamers, schuine sneden voor 3D-printen, en de printcontrole in het paneel Problemen.
keywords: wat is er nieuw, what's new, release notes, wijzigingenlogboek, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, render engine, engine, openen in, usd, gltf, unreal, add-on engine, nurbs, oppervlakken, loft, uitvegen, continuïteit, g0, g1, g2, zebra, step, iges, beschrijf de scène, scène, weer, tijdstip van de dag, seizoen, assistent, materiaal uit een foto, foto, schetsfoto, inrichten, inrichten van een ruimte, schuin, schuine snede, splitsen, printcontrole, problemen, eigenschappenraster, lampen, talen, invoerapparaten, werkbalkrijen, dwg, live
from: e4989b17
---

Dit is wat er veranderd is in ModelCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02), vergeleken met 0.7. Het dialoogvenster {{ui:Render a picture…}} kan nu de scène naar een ander programma sturen, het paneel Oppervlakken maakt vloeiende vrije oppervlakken, en een assistent die u verbindt kan in één zin een hele scène instellen.

## Nieuw

### Renderen

- **Een keuze van engine.** {{ui:Render a picture…}} heeft een lijst **Engine** boven Modus. Onze eigen twee engines, Fast en de Path tracer, zijn de standaard en werken overal. Andere items slaan de scène op als pakket (het model als USD-bestand, plus een instellingenbestand met de exacte materiaalwaarden, de lampen die aan staan, de zon, de lucht, de belichting en de camera) om mee te nemen naar een ander programma. Een afbeelding die door een ander programma is getekend, vermeldt welk programma en welke versie die heeft gemaakt. Zie [Kies welk programma de afbeelding tekent](topic:render-engines).
- **Openen in een ander programma.** De lijst Engine kan de scène opslaan als USD-bestand, als glTF-bestand (`.glb`) of als Unreal-projectmap (`.zip`), in de browser en in CadCraft Studio. In Studio kan die ook usdview of het eigen programma van de computer starten voor het bestand. Zie [De scène openen in een ander programma](topic:render-open-in).
- **Naar een game-engine sturen vanuit Studio.** Studio schrijft de scène naar een Unreal Engine-project en houdt dat bij bij elke verzending, maar alleen in één richting. Uw eigen bewerkingen staan in een laag die CadCraft nooit schrijft. Zie [De scène naar een game-engine sturen](topic:render-unreal).
- **Engines uit add-ons.** Een add-on kan een engine aan de lijst toevoegen. Een engine die in JavaScript is geschreven, tekent in de browser en in Studio; een engine die een programma uitvoert, heeft in Studio uw toestemming nodig. Zie [De afbeelding tekenen met een ander programma](topic:render-other-program) en [Een render-engine toevoegen met een add-on](topic:render-engine-addons).
- **Beschrijf de scène.** Vertel uw verbonden assistent "schemering, lichte regen, herfstbomen, mensen op het plein" en ModelCraft zet het in één stap klaar: de zon verschuift naar de datum en het tijdstip zodat de schaduwen meebewegen, de lucht verandert, natte oppervlakken verschijnen, en bomen en mensen worden geplaatst als echte objecten op tags die u kunt verbergen, verplaatsen of verwijderen. Tijdstip van de dag, datum of seizoen, en weer (helder, bewolkt, mist, lichte regen, regen, storm) werken ook op zichzelf, en een latere opdracht wijzigt dezelfde scène. Mist is zichtbaar in de hoge-kwaliteitsafbeelding op de videokaart; de andere engines tonen de lucht, het licht en de natte oppervlakken. Regen wordt niet getekend als vallende strepen.

### Materialen

- **Een materiaal uit één foto.** Geef ModelCraft een foto van een oppervlak (een wand, een vloer, steen) en het maakt een tegelbaar materiaal: de belichting over de foto wordt egaal gemaakt, de randen worden op elkaar aangesloten, en een kleurkaart, een ruwheidskaart en een normaalkaart worden uit de afbeelding berekend. Het is gewone beeldverwerking op uw eigen foto, zonder getraind model. Ruwheid is een schatting. Een gewone, vierkante, recht van voren genomen foto geeft de beste tegel; een sterk patroon zoals baksteen kan een zachte schim laten zien waar de naad is uitgevlakt.

### Oppervlakken

- **Vrije oppervlakken.** Het paneel {{ui:Surfaces}} maakt NURBS-curven en niet-getrimde oppervlakken: curven door punten, loft, ruled, extruderen, omwentelen, uitvegen langs één of twee geleiders, oppervlakken uit een curvennetwerk, vlakken uit vier randen, aansluiten en mengen. Elke gedeelde rand wordt gemeten als G0, G1 of G2 (opening, hoek, krommingssprong) op de exacte oppervlakken, en een rand die slechter is dan u vroeg, verschijnt in het paneel Problemen met een **Aansluiten**-oplossing. Zebrastrepen en krommingskleuren worden getekend uit de exacte oppervlakken. STEP- en IGES-bestanden gaan eruit en komen erin. Zie [Vrije oppervlakken (NURBS)](topic:nurbs-surfaces).

### Terrein en kamers

- **Een schetsfoto op de grond.** {{ui:File}} › {{ui:Import a sketch photo…}} zet een telefoonfoto van een handschets om in randen op de grond, op de schaal die u opgeeft: één groep, met een tag voor elke pennenkleur. Het papier wordt op uw computer gevonden en recht gezet, en er wordt niets ergens naartoe gestuurd. Zie [Model op een terreinplan](topic:site-plan).
- **Een ruimte inrichten.** Selecteer een vloer en gebruik {{ui:Organize}} › {{ui:Furnish a room…}}. Slaapkamer-, woonkamer-, eetkamer-, keuken-, badkamer- of kantoormeubilair wordt op regels geplaatst, tegen de wanden en vrij van deuren en ramen, in één groep die u in één stap kunt verwijderen. Het is een standaardindeling om na te kijken, geen ontwerp. Zie [Startbibliotheek](topic:starter).

### 3D-printen

- **Schuine sneden.** Splitsen voor printen kan de sneden tot 60 graden schuin zetten, wat de stukken meer lijmvlak geeft. Verbindingsstukken staan haaks op de snede. Zie [Een model splitsen voor printen](topic:print-split).
- **De printcontrole in Problemen.** De bevindingen van de 3D-printcontrole verschijnen in het paneel Problemen met markeringen op het model, en Herstellen lost ze vanaf daar op. Zie [Ondersteuningen, wanddikte, uithollen en herstel](topic:print-tools).

### In elke app

- **Talen.** Help en apps zijn beschikbaar in 54 talen. Tien zijn nieuw: Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeeks. Talen anders dan Engels zijn machinale concepten totdat een moedertaalspreker ze heeft gelezen, en help-onderwerpen kunnen nog in het Engels zijn.
- **Invoerapparaten.** Een trackpad, een pen, een 3D-muis, een gamecontroller en MIDI-bediening kunnen de apps aansturen, voor alle apps of voor één.
- **Werkbalkrijen.** {{ui:Settings}} › {{ui:General}} › Werkbalkrijen zet Afbreken (zoals eerder), 2 rijen of 1 rij. Een balk die niet past, scrolt zijwaarts in plaats van ruimte van de tekening af te nemen. Afbreken blijft de standaard.
- **Eigenschappenraster.** De lampvelden van ModelCraft gebruiken het gedeelde raster: inklapbare categorieën, kolommen voor label en waarde, en dichtheid Compact. Getypte rekenkunde zoals `2*450` werkt nog steeds.
- **Problemen.** Het paneel Problemen (de waarschuwingsknop in de app-balk) wordt door alle apps gedeeld. In ModelCraft bevat het de printcontrole en de waarschuwingen over de continuïteit van oppervlakken.
- **Live.** Een Live TeamWork-sessie laat zien wie waar is. Zie [Samen modelleren met Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons kunnen render-engines toevoegen, zoals hierboven.
- **Verbind uw AI.** Het toolcontract en de controles van de acht apps slagen, met 454 hulpmiddelen in totaal. Eén-klik-verbinding in Studio, een gehoste connector voor browserassistenten, uw eigen sleutel in Studio en een gepubliceerd pakket zijn nog niet toegezegd. De apps bevatten geen eigen AI. Zie [ModelCraft gebruiken met AI-assistenten](topic:use-with-ai-assistants).

## Opgelost in 0.8.1

- **Sectie DWG-klassen.** De sectie met klassen van een DWG-bestand werd als het verkeerde type gelezen, wat het bestand bij het importeren kon breken. Die wordt nu goed gelezen, in ModelCraft en in de andere apps die DWG lezen.
- **Tablets in staand formaat.** Overtollige rasterhoogte gaat naar het canvas, en de bladindeling begint bij 760 pixels breed of smaller. De stijlset van ModelCraft bevat de wijziging ook.
- **Taal in Studio.** CadCraft Studio en de verpakte edities kunnen tijdens het draaien van taal wisselen; voorheen waren ze alleen in het Engels. Dit is nog niet op elk platform getest: laat het ons weten als de taal niet verandert.

## Nog niet in deze versie

- **Niet code-ondertekend.** Windows kan SmartScreen tonen: kies {{ui:More info}} en daarna {{ui:Run anyway}}. Op een Mac: klik met de rechtermuisknop en kies {{ui:Open}}. Winkelversies zijn in de wacht gezet, en de iPad- en iPhone-versie is niet opnieuw gebouwd voor 0.8.1.
- Een ander programma dat de afbeelding tekent zonder een render-engine-add-on, panorama- of stereocamera's en een hemelafbeelding via een ander programma, en de plug-in die de Unreal-scène opent, zijn er nog niet. De bestanden worden geschreven; de plug-in is niet uitgebracht en is niet in Unreal uitgevoerd.
- Vrije oppervlakken: G3 en klasse A worden niet gemeten of beweerd, en bijsnijden en volumes komen later.
- Afbeeldingen van andere programma's zijn niet pixel voor pixel gelijk aan die van ons: alleen de camera, zon, lampen en belichting komen overeen.
- De 0.8.1-oplossing voor de taalwissel in Studio is niet op elk platform getest.

Al het overige staat in [Nog niet beschikbaar](topic:not-built-yet). Voor de vorige uitgave, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
