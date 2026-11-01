---
title: Openen, opslaan, importeren en exporteren
summary: Het ModelCraft-bestand, wat u kunt binnenhalen en versturen, waar bestanden naartoe gaan en wat er offline en tussen browsers verandert.
keywords: openen, opslaan, importeren, exporteren, bestand, 3dm, skp, herstellen, automatisch opslaan, recent, desktop, openen in 3d, overdracht, downloaden, modelcraft-bestand, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, indelingen, offline, opslaan als
from: 0b4896d1
---

ModelCraft leest en schrijft bestanden op uw computer. Er wordt niets geüpload: een bestand dat u opent, wordt in uw browser gelezen en een bestand dat u opslaat, is een download. Zie [Waar uw bestanden naartoe gaan](common:your-files).

## Bestandsindelingen in een oogopslag

| Indeling | Openen | Importeren | Exporteren | Waarvoor |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nee | {{ui:Opslaan}} | Uw werkbestand. Bewaart alles. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Opslaan als}}, {{ui:Exporteren}} | Render- en scène-assemblageprogramma's. Het eigen USD van ModelCraft bewaart alles. Zie [USD opslaan, openen en exporteren](topic:usd). |
| SketchUp (`.skp`) | nee | ja | nee | Modellen uit SketchUp binnenhalen. Bewaart groepen, componenten, kleuren, texturen op vlakken, tags en zachte randen. Zie [Een SKP-model binnenhalen](topic:import-sketchup-files). |
| Collada (`.dae`) | nee | ja | ja | Modellen uitwisselen met andere 3D-modelleerprogramma's. Bewaart groepen, componenten en kleuren. |
| OBJ (`.obj`) | nee | ja | ja | Render- en visualisatieprogramma's. |
| glTF (`.glb`, `.gltf`) | nee | ja | alleen `.glb` | Webviewers, game-engines, AR. |
| STL (`.stl`) | nee | ja | ja | 3D-printen (in millimeters). |
| PLY (`.ply`) | nee | ja | ja | Meshes met kleuren: scans, kleurenprinten. |
| FBX (`.fbx`) | nee | ja | nee | Modellen uit animatie- en gameprogramma's (FBX 2011 en nieuwer). |
| Alembic (`.abc`) | nee | ja | nee | Geometriecaches, bij hun eerste sample. |
| STEP (`.step`, `.stp`) | nee | ja | nee | Onderdelen van onderdeelmodelleerprogramma's en leveranciers, als gesloten meshes op ware grootte. Zie [Bestandsindelingen](topic:formats). |
| `.3dm` | nee | ja | nee | NURBS-modellen: polyoppervlakken, meshes, krommen, blokken en lagen, als meshes, randen, componenten en tags. Zie [Een .3dm-model binnenhalen](topic:import-3dm-files). |
| 3MF (`.3mf`) | nee | nee | ja | 3D-printen, met kleuren (in millimeters). Vanuit {{ui:Controleren op 3D-printen (STL of 3MF)…}}: zie [Een model klaarmaken voor 3D-printen](topic:print-3d). |
| IFC (`.ifc`) | nee | nee | ja | BIM-programma's en BimCraft. |
| DWG (`.dwg`) | nee | ja | ja | Een situatietekening of plattegrond om op te modelleren; het model naar een CAD-programma sturen. |
| DXF (`.dxf`) | nee | ja | ja | Hetzelfde, voor elk CAD-programma. |

[Bestandsindelingen in detail](topic:formats) noemt precies wat elke indeling bewaart en weglaat.

## Het ModelCraft-bestand

Een `.modelcraft`-bestand bewaart het hele model: geometrie, groepen, componenten, hulplijnen, scènes, de eenheden en de camera en stijl die u gebruikte toen u opsloeg. De geschiedenis van ongedaan maken wordt niet bewaard.

### Een model openen

1. Klik op {{ui:Openen}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+O}}.
2. Als het model op het scherm niet-opgeslagen wijzigingen heeft, vraagt ModelCraft: "Dit model heeft wijzigingen die niet zijn opgeslagen. Eerst een kopie opslaan?" Kies {{ui:Een kopie opslaan}}, {{ui:Wijzigingen weggooien}} of {{ui:Annuleren}}.
3. Kies het `.modelcraft`-bestand.

Het model opent in de eenheden waarin het is opgeslagen, met de camera waarmee het is opgeslagen. U kunt een `.modelcraft`-bestand ook neerzetten op de 3D-weergave, of op een bestand klikken in de lijst met recente bestanden op de startkaart (browsers die een bestand opnieuw kunnen openen, en de desktop-app).

:::desktop
In de desktop-app opent dubbelklikken op een `.modelcraft`-bestand het in ModelCraft, en dat doet **Openen met** op een Collada-, OBJ-, glTF-, DWG- of DXF-bestand ook (het wordt in een nieuw model geïmporteerd).
:::

### Een model opslaan

Klik op {{ui:Opslaan}} of druk op {{key:Mod+S}}. De browser downloadt `<naam>.modelcraft`, waarbij de naam het bestand is dat u hebt geopend, of "Naamloos" voor een nieuw model.

:::desktop
In de desktop-app schrijft {{ui:Opslaan}} het bestand dat u hebt geopend ter plaatse weg. Een nieuw model vraagt waar het moet worden opgeslagen.
:::

- {{ui:Opslaan als}} ({{key:Mod+Shift+S}}) slaat een kopie op als `.modelcraft`-bestand of als [USD](topic:usd); waar de browser dat kan, vraagt hij om de naam en de plaats. Anders hernoemt u het gedownloade bestand: de eerstvolgende keer opslaan nadat u het hernoemde bestand hebt geopend, gebruikt de nieuwe naam.
- Elke keer opslaan is een nieuwe download. Afhankelijk van de instellingen van de browser gaat het rechtstreeks naar uw downloadmap of wordt gevraagd waar het moet komen. Als daar al een bestand met die naam staat, voegen de meeste browsers een nummer toe, zoals `Naamloos (1).modelcraft`.

:::chromium
Om elke keer de map te kiezen opent u de instellingen van de browser, zoekt u op "downloads" en schakelt u "Vragen waar elk bestand moet worden opgeslagen voordat het wordt gedownload" in.
:::

:::firefox
Om elke keer de map te kiezen opent u **Instellingen**, dan **Algemeen**, en kiest u onder "Downloads" de optie "Altijd vragen waar bestanden moeten worden opgeslagen".
:::

:::safari
Om te wijzigen waar downloads naartoe gaan opent u **Safari**, dan **Instellingen**, dan **Algemeen**, en stelt u "Locatie voor gedownloade bestanden" in.
:::

### Een nieuw model beginnen

Klik op {{ui:Nieuw}}. Als er niet-opgeslagen wijzigingen zijn, vraagt ModelCraft het eerst. Een nieuw model begint leeg, in de eenheid van uw regio (voet en inches in de Verenigde Staten, millimeters elders), zonder scènes.

### Als de browser sluit voordat u opslaat

ModelCraft bewaart een paar seconden na elke wijziging een kopie van niet-opgeslagen werk in uw browser. Als het tabblad of de browser sluit voordat u opslaat, vraagt ModelCraft de volgende keer dat u het opent "Uw werk herstellen?". Herstellen opent het model zoals het was, nog niet in een bestand opgeslagen: sla het op om het te bewaren. Zie [Uw werk herstellen](common:recover).

### Vanuit CadCraft: Openen in ModelCraft

In de tekenapp CadCraft geeft **Weergave**, dan **Meer**, dan **Openen in ModelCraft** de geopende tekening als DWG in een nieuw tabblad aan ModelCraft door. Hij komt aan zoals een geïmporteerde DWG: lijnen op de grond, in een groep, klaar om op te modelleren. Er wordt niets geüpload; het bestand loopt via de eigen opslag van uw browser.

## Importeren

Importeren voegt een bestand toe aan het model dat u open hebt; het vervangt het niet.

1. Klik op {{ui:Importeren}} in de groep {{ui:Bestand}}, of zet het bestand neer op de 3D-weergave.
2. Kies een SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- of DXF-bestand.

   Het bestand komt binnen als **één groep**, geselecteerd, en de weergave zoomt erop in. De statusbalk meldt wat er is binnengekomen en noemt alles wat niet kon worden geïmporteerd, zoals "Niet geïmporteerd: 2 texture".

3. Om rechtstreeks aan de geometrie te werken dubbelklikt u op de groep om erin te bewerken, of klikt u op {{ui:Ontbinden}}.

Goed om te weten:

- **Grootte en bovenrichting:** Collada-bestanden vermelden hun eenheid en welke as omhoog is, en ModelCraft rekent dat om. glTF is altijd in meters. OBJ-bestanden hebben geen eenheid: ModelCraft leest ze als meters, met Y omhoog. Als een OBJ 1000 keer te groot of te klein binnenkomt, gebruikt u [Schalen](topic:rotate-scale) met een factor zoals `0.001` of `1000`.
- **DWG en DXF** komen binnen als lijnen (randen) op de grond, niet als vlakken. Als de tekening haar eenheid niet vermeldt, vraagt een dialoogvenster met de titel "Tekeneenheden" wat één tekeneenheid is. Zie [Modelleren op een situatietekening](topic:site-plan).
- **Grenzen:** bestanden van meer dan 300 MB worden geweigerd bij importeren en van meer dan 200 MB bij openen. Bestanden met meer dan 2 miljoen hoekpunten of vlakken worden geweigerd als te groot.

## Exporteren

1. Klik op {{ui:Exporteren}} in de groep {{ui:Bestand}}.
2. Kies een indeling: {{ui:glTF binair (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL voor printen (.stl, millimeters)}}, {{ui:PLY met kleuren (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC voor BimCraft (.ifc)}}, {{ui:DWG voor CAD (.dwg, 2004)}} of {{ui:DXF voor CAD (.dxf, R12)}}.

De browser downloadt het bestand, met de naam van het model. Het hele model wordt geëxporteerd, niet alleen de selectie. Een leeg model wordt niet geëxporteerd: "Het model is leeg: teken eerst iets." Zie [Een model exporteren voor andere programma's](topic:export-model).

## Online en offline

Alles in ModelCraft draait op uw computer, dus modelleren, openen, opslaan, importeren en exporteren werken allemaal zonder verbinding zodra de app is geladen.

Om ModelCraft helemaal zonder verbinding te openen slaat u het op voor offline gebruik terwijl u online bent:

1. Klik op {{ui:Opslaan voor offline gebruik}} in de appbalk bovenaan.
2. De knop telt op ("Opslaan 40 van 212") terwijl hij opslaat. ModelCraft slaat zijn eigen bestanden op (waaronder zijn DWG-lezer), deze Help en de 3D-bibliotheek, dus dat kan even duren.
3. Als de knop {{ui:Klaar voor offline gebruik}} zegt, opent ModelCraft vanaf hetzelfde adres zonder verbinding, en werkt DWG-import ook offline.

Klik later op {{ui:Klaar voor offline gebruik}} voor {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}}. Als de knop {{ui:Kon niet opslaan}} zegt, zijn sommige bestanden niet gedownload: controleer de verbinding en klik erop om het opnieuw te proberen. {{ui:Offline gebruik is niet beschikbaar}} betekent dat dit browservenster geen kopie kan bewaren (privévensters en sommige beheerde computers). Zie [Offline werken](common:offline).

Opslaan in de cloud is nog niet beschikbaar. Elk model staat waar u het opslaat.

:::offline
U bent offline. U kunt blijven modelleren en opslaan. Tenzij de appbalk {{ui:Klaar voor offline gebruik}} toont, laadt u dit tabblad niet opnieuw totdat u weer online bent.
:::

## Desktop-app

:::desktop
U gebruikt ModelCraft in CadCraft Studio, de desktop-app met alle acht apps. Bestanden openen en worden opgeslagen waar u kiest.
:::

:::web
ModelCraft draait in de browser op Mac, Windows en Linux, en in CadCraft Studio, de desktop-app met alle acht apps in één installatie, via getcadcraft.com/download.
:::
