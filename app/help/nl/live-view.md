---
title: De live-weergave
summary: Een venster naast het model dat het toont in de realtime-look, met zon en schaduwen, en dat elke wijziging volgt; loop erdoor en stel het tijdstip van de dag en de maand in.
keywords: delen, panorama, 360, rondleiding, virtuele rondleiding, zelfstandige viewer, offline viewer, naar een klant sturen, video, wandelvideo, verstrooien, verstrooiing, gras, weide, bos, rotsen, planten, bomen, menigte, planten schilderen, live-weergave, realtime, realtime-render, wandeling, lopen, eerste persoon, presentatie, klant, tweede scherm, tweede venster, monitor, tijdstip van de dag, zon, seizoen, maand, schaduwen, omgevingsocclusie, reflecties, gekaatst licht, globale verlichting, webgpu, webgl
from: fca3b0d6
---

{{ui:Exporteren}} › {{ui:Live weergave}} opent een paneel over de app dat het model toont in de realtime-look: de lucht en de zon op de plaats en datum van uw model, de zonneschaduwen, de looks en materialen die u de vlakken gaf, lampen, en licht dat van muren en vloeren kaatst. Het volgt wat u doet: draait u de weergave, dan draait het mee; wijzigt u het model, dan toont het de wijziging even later. Er wordt niets geüpload.

## Openen

1. Kies {{ui:Exporteren}} › {{ui:Live weergave}}. Het paneel opent in de rechteronderhoek.
2. Sleep de titelbalk om het te verplaatsen, trek aan de hoek om het groter te maken.
3. {{ui:Nieuw venster}} zet het in een eigen venster, voor een tweede scherm. {{ui:Exporteren}} › {{ui:Live weergave in een nieuw venster}} opent het daar meteen. Als uw browser pop-upvensters blokkeert, opent het als paneel.
4. {{ui:Sluiten}} sluit het.

## De bediening

| Bediening | Wat het doet |
|---|---|
| {{ui:De weergave volgen}} | Aan: de live-weergave kijkt waar de weergave van ModelCraft naar kijkt. Lopen zet het uit |
| {{ui:Lopen}} | Loop door het model (hieronder) |
| {{ui:Zwaartekracht}} | Tijdens het lopen: op vloeren staan en trappen beklimmen. Uit: vliegen |
| {{ui:Tijd}} | Het uur van de dag, van 05:00 tot 21:00. De zon beweegt terwijl u sleept |
| {{ui:Maand}} | De maand (de 21e ervan), zodat u de zon in winter en zomer ziet |
| {{ui:Kwaliteit}} | {{ui:Voor deze computer}} (wat [uw machine](topic:your-machine) krijgt), of {{ui:Laag}}, {{ui:Gemiddeld}} of {{ui:Hoog}} |

De regel onderaan laat zien wat de weergave tekent (WebGPU of WebGL 2), de kwaliteit en het gekaatste licht.

## Door het model lopen

1. Draai de hoofdweergave naar de plek waar u wilt staan en kies {{ui:Lopen}}. U staat op de vloer onder het oogpunt van de weergave, 1.6 m hoog.
2. Klik in de live-weergave en gebruik {{key:W}} {{key:A}} {{key:S}} {{key:D}} of de pijltoetsen. Houd {{key:Shift}} ingedrukt om te rennen. Sleep om rond te kijken.
3. Treden tot 40 cm worden beklommen (trappen); alles hoger is een muur. Muren stoppen u en u glijdt langs ze.
4. Met {{ui:Zwaartekracht}} uit vliegt u: {{key:E}} gaat omhoog, {{key:Q}} omlaag.
5. {{key:Esc}} stopt het lopen.

## Planten, rotsen en mensen verstrooien

{{ui:Verstrooien}} in de balk van de live-weergave opent het paneel voor verstrooien naast het beeld. Een verstrooiset spreidt items uit de figurantenbibliotheek (bomen, struiken, gras, bloemen, rotsen, mensen, auto's) over een deel van het model. De items worden alleen in de live-weergave getekend: het zijn geen geometrie in het model, en de hoofdweergave toont ze niet.

1. **Vlakken vullen:** selecteer vlakken (of een groep, zoals een terrein) in ModelCraft en kies {{ui:Selectie vullen}}. De set bedekt ze.
2. **Schilderen:** kies {{ui:Verven}} en sleep over de live-weergave. Met geselecteerde vlakken komt de verf alleen daarop; zonder selectie komt hij op alles onder het penseel, ook de grond. {{ui:Penseelgrootte}} stelt het penseel in; {{ui:Gum}} haalt geschilderde plekken weg.
3. Vink aan wat u wilt verstrooien. Het getal ernaast is het gewicht: 3 en 1 maakt drie van de eerste voor elke ene van de tweede.

| Bediening | Wat het doet |
|---|---|
| {{ui:Per m²}} | Hoeveel items per vierkante meter |
| {{ui:Afstand houden (m)}} | Geen items dichter bij andere objecten dan dit, en geen onder een dak of een tafel. 0 zet het uit |
| {{ui:Draaiing (°)}} | Hoever elk item willekeurig om de verticale as wordt gedraaid |
| {{ui:Steilste (°)}} | Geen items waar het oppervlak steiler is |
| {{ui:Afmeting}} | De kleinste en grootste maat, als factor van de eigen maat van het item |
| {{ui:Hoogte van, tot (m)}} | Alleen tussen deze hoogtes (leeg = elke) |
| {{ui:Meeleunen met het oppervlak}} | 0 houdt items rechtop; 1 zet ze loodrecht op een helling |
| {{ui:Startwaarde}}, {{ui:Schudden}} | Dezelfde startwaarde geeft altijd dezelfde verstrooiing; Schudden kiest een andere |

De sets worden opgeslagen in het bestand .modelcraft en volgen de vlakken die ze bedekken wanneer u die wijzigt. Het maximale aantal items dat de live-weergave tekent, hangt af van het niveau van [uw machine](topic:your-machine): 20 000 bij {{ui:Alleen processor}}, 100 000 bij {{ui:Grafische kaart, basis}}, een miljoen bij {{ui:Grafische kaart, hoog}}. Het paneel zegt hoeveel er geplaatst zijn van het aantal dat de dichtheid vraagt: er worden er minder geplaatst als het budget bereikt is, of waar objecten ze weghouden. Items dicht bij de camera worden als zichzelf getekend; verre items als eenvoudige vormen in hun kleuren.

:::note
Verstrooide items staan in de live-weergave (en de wandeling, panorama's en de zelfstandige viewer). Een afbeelding renderen tekent ze nog niet.
:::

## Delen: panorama's, rondleidingen, een viewer, een video

{{ui:Delen}} in de balk van de live-weergave maakt bestanden van de live-weergave. Alles wordt op deze computer gemaakt; er wordt niets geüpload.

| Keuze | Wat u krijgt |
|---|---|
| {{ui:360°-panorama}} | Een 360°-afbeelding vanaf waar de weergave staat (of waar u loopt), als equirectangulaire PNG die panoramaviewers en de meeste fotosites openen |
| {{ui:Deze plek aan de tour toevoegen}}, dan {{ui:De tour opslaan}} | Eén webpagina met een panorama bij elke plek en pijlen naar de plekken die elk kan zien (een muur ertussen verbergt de pijl) |
| {{ui:Een viewer opslaan}} | Eén webpagina met het model in deze realtime-look: draai het, loop erdoor, spring naar de opgeslagen scènes. Het opent offline in een browser met WebGPU of WebGL 2, vanuit een map, een usb-stick of een e-mail, zonder installatie en zonder account, en laadt niets van internet |
| {{ui:Video van het pad}} | Het cameratraject van de tijdlijn (of de opgeslagen scènes in volgorde) als video in deze realtime-look, op de grootte van de live-weergave: WebM of MP4 waar de browser dat kan maken, anders genummerde afbeeldingen in een ZIP |

De grootte van het panorama volgt de kwaliteit: 1024, 2048 of 4096 pixels breed bij Laag, Gemiddeld en Hoog. Een viewerbestand is ongeveer 5 MB plus het model.

:::note
De tour en de viewer zijn gemaakt om te tonen, niet om te bewerken: ze bewaren het model zoals het is wanneer u ze opslaat.
:::

## Kwaliteit

| | Laag | Gemiddeld | Hoog |
|---|---|---|---|
| Zonneschaduwen | één schaduwkaart | drie cascades | vier cascades |
| Omgevingsocclusie (contactschaduwen) | | ✓ | ✓, fijner |
| Reflecties in metaal | | | ✓ |
| Bloom (wanneer Een afbeelding renderen dit instelt) | | ✓ | ✓ |
| Randen gladgestreken | FXAA | over meerdere frames (TAA) | over meerdere frames (TAA) |
| Gekaatst licht | grof | fijner | fijnst |

{{ui:Voor deze computer}} kiest Laag op een computer zonder bruikbare grafische kaart, Gemiddeld met een ingebouwde grafische chip, Hoog met een aparte grafische kaart. Laag is bedoeld voor een laptop van 8 GB zonder grafische kaart.

## Gekaatst licht

Licht dat van een door de zon beschenen muur op de vloer kaatst, en de donkerdere binnenkant van een kamer, worden berekend door dezelfde padtracer die [gerenderde afbeeldingen](topic:render) maakt: die rendert op de achtergrond een klein panorama op punten door het model, op elke processorkern. Terwijl hij werkt, zegt de onderste regel {{ui:Gekaatst licht: 40 %}}; als hij klaar is, neemt de weergave het over. Na een wijziging begint hij opnieuw.

:::note
Dit is een benadering voor een live-weergave, geen gerenderde afbeelding: kleine details tussen de punten krijgen het gekaatste licht van de punten dichtbij. Voor een definitief beeld gebruikt u [Een afbeelding renderen](topic:render).
:::

## Helderheid en kleuren

De live-weergave gebruikt dezelfde helderheid, witbalans, contrast en weergavetransformatie (ACES, AgX, filmic of standaard) als [Een afbeelding renderen](topic:render): stelt u die daar in, dan volgt de live-weergave.

:::note
Browsers verschillen. Waar de browser WebGPU heeft (Chrome en Edge op Windows, macOS en ChromeOS, Safari 26), gebruikt de live-weergave het; elders (de meeste browsers op Linux, oudere Apple-systemen) gebruikt hij WebGL 2 en ziet er hetzelfde uit.
:::
