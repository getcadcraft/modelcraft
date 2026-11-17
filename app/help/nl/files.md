---
title: Openen, opslaan, importeren en exporteren
summary: Het ModelCraft-bestand, wat u kunt inlezen en versturen, waar bestanden naartoe gaan, en wat er verandert offline en tussen browsers.
keywords: openen, opslaan, importeren, exporteren, bestand, 3dm, skp, herstellen, automatisch opslaan, recent, desktop, openen in 3d, overdracht, downloaden, modelcraft-bestand, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formaten, offline, opslaan als
from: 3f09ab72
---

ModelCraft leest en schrijft bestanden op uw computer. Er wordt niets geüpload: een bestand dat u opent, wordt in uw browser gelezen, en een bestand dat u opslaat, is een download. Zie [Waar uw bestanden naartoe gaan](common:your-files).

## Formaten in één oogopslag

| Formaat | Openen | Importeren | Exporteren | Waarvoor het dient |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nee | {{ui:Opslaan}} | Uw werkbestand. Bewaart alles. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Opslaan als}}, {{ui:Exporteren}} | Render- en scène-programma's. De eigen USD van ModelCraft bewaart alles. Zie [USD opslaan, openen en exporteren](topic:usd). |
| SketchUp (`.skp`) | nee | ja | nee | Modellen uit SketchUp importeren. Bewaart groepen, componenten, kleuren, texturen op vlakken, tags en zachte randen. Zie [Een SKP-model importeren](topic:import-sketchup-files). |
| Collada (`.dae`) | nee | ja | ja | Modellen uitwisselen met andere 3D-modelleerders. Bewaart groepen, componenten en kleuren. |
| OBJ (`.obj`) | nee | ja | ja | Render- en visualisatieprogramma's. |
| glTF (`.glb`, `.gltf`) | nee | ja | alleen `.glb` | Webviewers, game-engines, AR. |
| STL (`.stl`) | nee | ja | ja | 3D-printen (in millimeter). |
| PLY (`.ply`) | nee | ja | ja | Meshes met kleuren: scans, kleurenprinten. |
| FBX (`.fbx`) | nee | ja | nee | Modellen uit animatie- en gameprogramma's (FBX 2011 en nieuwer). |
| Alembic (`.abc`) | nee | ja | nee | Geometriecaches, bij hun eerste frame. |
| STEP (`.step`, `.stp`) | nee | ja | nee | Onderdelen van onderdelenmodelleerders en leveranciers, als gesloten meshes op hun ware grootte. Zie [Bestandsformaten](topic:formats). |
| `.3dm` | nee | ja | nee | NURBS-modellen: polyoppervlakken, meshes, krommen, blokken en lagen, als meshes, randen, componenten en tags. Zie [Een .3dm-model importeren](topic:import-3dm-files). |
| 3MF (`.3mf`) | nee | nee | ja | 3D-printen, met kleuren (in millimeter). Vanuit {{ui:Controleren op 3D-printen (STL of 3MF)…}}: zie [Een model klaarmaken voor 3D-printen](topic:print-3d). |
| IFC (`.ifc`) | nee | nee | ja | BIM-programma's en BimCraft. |
| DWG (`.dwg`) | nee | ja | ja | Een situatietekening of plattegrond om op te modelleren; het model naar een CAD-programma sturen. |
| DXF (`.dxf`) | nee | ja | ja | Hetzelfde, voor elk CAD-programma. |

[Bestandsformaten in detail](topic:formats) geeft precies aan wat elk formaat bewaart en weglaat.

## Het ModelCraft-bestand

Een `.modelcraft`-bestand bewaart het hele model: geometrie, groepen, componenten, hulplijnen, scènes, de eenheden, en de camera en stijl die u gebruikte toen u opsloeg. De geschiedenis van ongedaan maken wordt niet bewaard.

### Een model openen

1. Klik op {{ui:Openen}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+O}}.
2. Als het model op het scherm niet-opgeslagen wijzigingen heeft, vraagt ModelCraft: "Dit model heeft wijzigingen die niet zijn opgeslagen. Eerst een kopie opslaan?" Kies {{ui:Een kopie opslaan}}, {{ui:Wijzigingen weggooien}} of {{ui:Annuleren}}.
3. Kies het `.modelcraft`-bestand.

Het model opent in de eenheden waarin het is opgeslagen, met de camera waarmee het is opgeslagen. U kunt ook een `.modelcraft`-bestand op de 3D-weergave slepen, of er een kiezen in de lijst met recente bestanden op de startkaart (browsers die een bestand opnieuw kunnen openen, en de desktopapp).

:::desktop
In de desktopapp opent dubbelklikken op een `.modelcraft`-bestand het in ModelCraft, en **Openen met** bij een Collada-, OBJ-, glTF-, DWG- of DXF-bestand doet dat ook (het wordt in een nieuw model geïmporteerd).
:::

### Een model opslaan

Klik op {{ui:Opslaan}} of druk op {{key:Mod+S}}. De browser downloadt `<name>.modelcraft`, waarbij de naam het bestand is dat u hebt geopend, of "Untitled" voor een nieuw model.

:::desktop
In de desktopapp schrijft {{ui:Opslaan}} het geopende bestand op dezelfde plek. Een nieuw model vraagt waar het moet worden opgeslagen.
:::

- {{ui:Opslaan als}} ({{key:Mod+Shift+S}}) slaat een kopie op als `.modelcraft`-bestand of als [USD](topic:usd); waar de browser dat kan, vraagt het om de naam en de plek. Anders hernoemt u het gedownloade bestand: de eerstvolgende keer opslaan nadat u het hernoemde bestand opent, gebruikt de nieuwe naam.
- Elke keer opslaan is een nieuwe download. Afhankelijk van de instellingen van de browser gaat die rechtstreeks naar uw downloadmap of vraagt waar het moet worden opgeslagen. Staat er al een bestand met die naam, dan voegt de meeste browsers een nummer toe, zoals `Untitled (1).modelcraft`.

:::chromium
Om elke keer de map te kiezen, opent u de instellingen van de browser, zoekt u naar "downloads" en zet u "Vragen waar elk bestand moet worden opgeslagen voordat het wordt gedownload" aan.
:::

:::firefox
Om elke keer de map te kiezen, opent u **Instellingen**, dan **Algemeen**, en kiest u onder "Downloads" de optie "Altijd vragen waar bestanden moeten worden opgeslagen".
:::

:::safari
Om te wijzigen waar downloads naartoe gaan, opent u **Safari**, dan **Instellingen**, dan **Algemeen**, en stelt u "Downloadlocatie" in.
:::

### Een nieuw model starten

Klik op {{ui:Nieuw}}. Als er niet-opgeslagen wijzigingen zijn, vraagt ModelCraft dat eerst. Een nieuw model begint leeg, in de eenheid van uw land (voet en inch in de Verenigde Staten, millimeter elders), zonder scènes.

### Als de browser sluit voordat u opslaat

ModelCraft bewaart een kopie van niet-opgeslagen werk in uw browser, enkele seconden na elke wijziging. De kopie wordt op de achtergrond geschreven, zodat een groot model u niet ophoudt terwijl het wordt bewaard. Als het tabblad of de browser sluit voordat u opslaat, vraagt ModelCraft de volgende keer dat u het opent: "Uw werk herstellen?" Herstellen opent het model zoals het was, nog niet opgeslagen in een bestand: sla het op om het te bewaren. Zie [Uw werk herstellen](common:recover).

### Vanuit CadCraft: openen in ModelCraft

In de tekenapp CadCraft zet **Beeld**, dan **Meer**, dan **Openen in ModelCraft** de geopende tekening als DWG in een nieuw tabblad over naar ModelCraft. Die komt binnen zoals een geïmporteerde DWG: lijnen op de grond, in een groep, klaar om op te modelleren. Er wordt niets geüpload; het bestand gaat via de eigen opslag van uw browser.

## Importeren

Importeren voegt een bestand toe aan het model dat u open hebt; het vervangt het niet.

1. Klik op {{ui:Importeren}} in de groep {{ui:Bestand}}, of sleep het bestand op de 3D-weergave.
2. Kies een SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- of DXF-bestand.

   Het bestand komt binnen als **één groep**, geselecteerd, en de weergave zoomt in om die te tonen. De statusbalk zegt wat er is binnengekomen en somt op wat niet kon worden geïmporteerd, zoals "Niet geïmporteerd: 2 textuur".

3. Om de geometrie direct te bewerken, dubbelklikt u op de groep om erin te bewerken, of klikt u op {{ui:Ontbinden}}.

Let op het volgende:

- **Grootte en omhoog-richting:** Collada-bestanden vermelden hun eenheid en welke as omhoog is, en ModelCraft zet ze om. glTF is altijd in meter. OBJ-bestanden bevatten geen eenheid: ModelCraft leest ze als meter, met Y omhoog. Als een OBJ 1000 keer te groot of te klein binnenkomt, gebruikt u [Schalen](topic:rotate-scale) met een factor zoals `0.001` of `1000`.
- **DWG en DXF** komen binnen als lijnen (randen) op de grond, niet als vlakken. Als de tekening haar eenheid niet vermeldt, vraagt een dialoogvenster met de titel "Tekeningeenheden" wat één tekeneenheid is. Zie [Model maken op een situatietekening](topic:site-plan).
- **Grenzen:** bestanden van meer dan 300 MB worden geweigerd voor import, en van meer dan 200 MB voor openen. Bestanden met meer dan 2 miljoen hoekpunten of vlakken worden als te groot geweigerd. Een OBJ van meer dan 64 MB wordt geweigerd voordat het wordt gelezen. Tekstbestanden (Collada, OBJ, ASCII-STL, USD-tekst) worden stuk voor stuk gelezen, ongeveer 4 MB per keer, zodat geen enkel tekstblok het hele bestand bevat; een OBJ van 16 MB gebruikte in onze test ongeveer 0.5 GB geheugen tijdens het openen.

## Exporteren

1. Klik op {{ui:Exporteren}} in de groep {{ui:Bestand}}.
2. Kies een formaat: {{ui:glTF binair (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL voor printen (.stl, millimeters)}}, {{ui:PLY met kleuren (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC voor BimCraft (.ifc)}}, {{ui:DWG voor CAD (.dwg, 2004)}} of {{ui:DXF voor CAD (.dxf, R12)}}.

De browser downloadt het bestand, met de naam van het model. Het hele model wordt geëxporteerd, niet alleen de selectie. glTF-, Collada- en OBJ-bestanden worden op de achtergrond geschreven, zodat ModelCraft blijft werken terwijl een groot model wordt geëxporteerd; de download begint zodra het bestand klaar is. Een leeg model wordt niet geëxporteerd: "Het model is leeg: teken eerst iets." Zie [Een model exporteren voor andere programma's](topic:export-model).

## Online en offline

Alles in ModelCraft draait op uw computer, dus modelleren, openen, opslaan, importeren en exporteren werken allemaal zonder verbinding zodra de app is geladen.

Om ModelCraft helemaal zonder verbinding te openen, slaat u het op voor offline gebruik terwijl u online bent:

1. Klik op {{ui:Opslaan voor offline gebruik}} in de appbalk bovenaan.
2. De knop telt op ("Opslaan: 40 van 212") terwijl het opslaat. ModelCraft slaat zijn eigen bestanden op (zijn DWG-lezer onder andere), deze help en de 3D-bibliotheek, dus het kan even duren.
3. Wanneer de knop {{ui:Klaar voor offline gebruik}} aangeeft, opent ModelCraft vanaf hetzelfde adres zonder verbinding, en DWG-import werkt ook offline.

Klik later op {{ui:Klaar voor offline gebruik}} voor {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}}. Als de knop {{ui:Kon niet opslaan}} aangeeft, zijn sommige bestanden niet gedownload: controleer de verbinding en klik erop om het opnieuw te proberen. {{ui:Offline gebruik is niet beschikbaar}} betekent dat dit browservenster geen kopie kan bewaren (privévensters en sommige beheerde computers). Zie [Offline werken](common:offline).

Cloudopslag is nog niet beschikbaar. Elk model staat op de plek waar u het opslaat.

:::offline
U bent offline. U kunt blijven modelleren en opslaan. Tenzij de appbalk {{ui:Klaar voor offline gebruik}} toont, laadt u dit tabblad niet opnieuw voordat u weer online bent.
:::

## Desktopapp

:::desktop
U gebruikt ModelCraft in CadCraft Studio, de desktopapp met alle acht apps. Bestanden worden geopend en opgeslagen waar u kiest.
:::

:::web
ModelCraft draait in de browser op Mac, Windows en Linux, en in CadCraft Studio, de desktopapp met alle acht apps in één installatie, van getcadcraft.com/download.
:::
