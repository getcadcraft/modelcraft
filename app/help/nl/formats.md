---
title: Bestandsformaten in detail
summary: Precies wat elk formaat dat ModelCraft opent, importeert en exporteert behoudt, omzet en weglaat.
keywords: formaten, bestandstypen, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, eenheden, assen, Y omhoog, Z omhoog, millimeters, limieten
from: c47d2d28
---

Het model van ModelCraft staat in meters, met Z (blauw) omhoog. Elk formaat hieronder wordt naar dat model of vanaf dat model omgezet.

## ModelCraft (.modelcraft)

| Wat | Details |
|---|---|
| Openen | {{ui:Openen}} ({{key:Mod+O}}) of zet het op de weergave. Bestanden die eindigen op `.json` worden ook geaccepteerd |
| Opslaan | {{ui:Opslaan}} ({{key:Mod+S}}), als download |
| Behoudt | Alles: geometrie, vlakken en hun kleuren, materialen en geïmporteerde texturen, lampen, zachte randen, groepen, componenten, namen, hulplijnen, scènes, de eenheden, en de laatste camera en stijl |
| Laat weg | De geschiedenis van ongedaan maken |
| Limiet | 200 MB |

Een bestand dat is opgeslagen met een nieuwere ModelCraft dan de uwe, wordt geweigerd: "Dit model is opgeslagen met een nieuwere ModelCraft (bestandsversie …). Werk ModelCraft bij om het te openen." Een bestand dat geen ModelCraft-model is, zegt "Dit bestand is geen ModelCraft-model (het is geen JSON)." of "Dit is geen ModelCraft-bestand dat we kunnen openen: …".

## USD (.usd, .usda, .usdc, .usdz)

Openen, importeren, en {{ui:Opslaan als}} of {{ui:Exporteren}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Een USD-bestand dat ModelCraft heeft opgeslagen, opent weer zonder dat er iets verloren gaat; USD-bestanden van andere programma's openen als meshes, groepen, componenten, lampen en camera's. Zie [USD opslaan, openen en exporteren](topic:usd).

## Collada (.dae)

Importeren en exporteren. Het beste formaat om modellen met andere 3D-modelleerprogramma's uit te wisselen.

- **Exporteren:** Collada 1.4.1, Z omhoog, meters. Eén geometrie per groep of componentdefinitie; componenten worden één keer geschreven en via verwijzing geplaatst, zodat ze gedeeld blijven. Vlakken met gaten of holle omtrekken worden in driehoeken gesplitst. Kleuren worden materialen. Losse randen worden als lijnen geschreven. Namen die niet geldig zijn in het formaat worden aangepast, en de exacte naam wordt er naast bewaard.
- **Importeren:** driehoeken, veelhoeken (met gaten), driehoeksviften en -stroken worden vlakken; lijnen worden randen. Knooptransformaties, de omhoogas van het bestand en de eenheid worden toegepast. Een knoop die op meerdere plaatsen staat, of een geometrie die door meerdere knopen wordt gebruikt, komt binnen als component; andere knopen komen binnen als groepen. Diffuse materiaalkleuren worden vlakkleuren.
- **Niet geïmporteerd:** texturen, skins en morphs, camera's, lampen, sommige transformatietypen (look-at en skew), en verwijzingen naar andere bestanden. De statusbalk telt ze.
- **Verloren bij export:** welke randen zacht zijn. **Bij import** blijven getrianguleerde oppervlakken driehoeken, met de diagonalen verzacht zodat vlakke gebieden als één oppervlak lezen.

## OBJ (.obj, .mtl)

Importeren en exporteren.

- **Importeren:** zet het `.obj` samen met het `.mtl` en de texturafbeeldingen neer (of importeer het `.obj` alleen: het komt zonder materialen binnen, en de statusbalk noemt het `.mtl` dat het wilde). Gelezen als meters met Y omhoog. Elk object (`o`, anders `g`) wordt een [mesh](topic:meshes), met zijn vlakken zoals ze zijn (vierhoeken blijven vierhoeken). Texturcoördinaten, normalen en kleuren per hoekpunt blijven behouden. De kleurafbeelding van een materiaal (`map_Kd`, PNG, JPEG of WebP) komt binnen als textuur, met zijn schaal- en verschuivingsopties; anders de kleur (`Kd`). Randen waar de normalen van het bestand breken zijn hard; zonder normalen bepalen de afvlakkingsgroepen van het bestand. Andere maps (bump, normaal), punten, lijnen en krommen worden geteld en weggelaten. OBJ heeft geen eenheid, dus een model dat in millimeters of inches is gemaakt, komt op de verkeerde grootte binnen: schaal het na het importeren (zie [Roteren en schalen](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Exporteren:** meters, Y omhoog, wereldcoördinaten. Eén object per groepsplaatsing; componenten worden volledig uitgeschreven op elke plaatsing. Meshes behouden hun eigen vlakken, texturcoördinaten en normalen; vlakken die door [zachte randen](topic:soften) zijn verbonden, krijgen een normaal per hoek. Wanneer het model kleuren heeft, wordt een `.mtl` naast het `.obj` gedownload. Wanneer het geïmporteerde texturen heeft, worden het `.obj`, het `.mtl` en de afbeeldingen samen als één `.zip` gedownload.
- **Limiet:** 2 miljoen hoekpunten of vlakken; 64 MB tekst.

## glTF (.glb, .gltf)

Importeren en exporteren, glTF 2.0.

- **Importeren:** een `.glb`, of een `.gltf` samen met de `.bin`- en texturbestanden: zet ze allemaal tegelijk op de weergave (of kies het `.glb`). Een `.gltf` apart noemt het bestand dat het nodig heeft: "Dit .gltf-bestand heeft "…" nodig: open de .glb-versie, of zet het .gltf neer samen met zijn bestanden."
  - **Meshes** komen binnen als [meshes](topic:meshes), één per mesh in het bestand, met de normalen, texturcoördinaten en kleuren per hoekpunt van het bestand behouden. Randen waar de normalen van het bestand breken, zijn hard; de rest is zacht. Een mesh die op meerdere plaatsen wordt gebruikt, blijft gedeeld.
  - **Knopen** worden groepen, met dezelfde namen als in het bestand. Geïnstanceerde meshes (EXT_mesh_gpu_instancing) komen binnen als één mesh die vaak wordt geplaatst.
  - **Materialen:** een basiskleurtextuur (PNG, JPEG of WebP) komt binnen als textuur, geplaatst volgens de texturcoördinaten van het bestand (met eventuele texturtransformatie), en wordt bewaard wanneer u opslaat; anders de basiskleur. Metaal, ruwheid, normaalmaps, glas, clear coat, sheen en de andere materiaalextensies worden gelezen maar nog niet bewaard: de statusbalk zegt dat.
  - **Lichten** (KHR_lights_punctual): punt- en spotlichten worden [lampen](topic:lights). Directionele lichten worden geteld: de zon verlicht het model.
  - **Camera's** worden [scènes](topic:scenes).
  - **Geskinde figuren** komen binnen in de rustpose die het bestand hun geeft; hun botten en animaties, en morph targets, worden geteld en nog niet bewaard.
  - **Gecomprimeerde bestanden** (Draco, meshopt) en gekwantiseerde gegevens worden gelezen. De decoders laden alleen voor een bestand dat ze nodig heeft.
  - Punten en lijnen worden geteld en weggelaten (een mesh bevat vlakken). KTX2-texturen worden weggelaten; de vlakken behouden hun kleur.
- **Exporteren** (`.glb`): glTF 2.0 binair, meters, Y omhoog. Eén mesh per definitie, zodat componenten gedeeld blijven. Meshes behouden hun normalen, texturcoördinaten en kleuren per hoekpunt; vlakken die door [zachte randen](topic:soften) zijn verbonden, krijgen gladde normalen. Kleuren en materialen worden materialen (een materiaal als zijn kleur); geïmporteerde texturen worden als texturen geschreven. Lampen die aan staan, worden punt- en spotlichten (vlaklampen hebben geen glTF-equivalent en worden weggelaten); scènes worden camera's. Losse randen worden weggelaten.
- **Limiet:** bestanden tot 300 MB; ongeveer 130 miljoen getallen aan geometrie.

## STL (.stl)

Importeren en exporteren.

- **Importeren:** binair of ASCII. STL heeft geen eenheid: het wordt gelezen als **millimeters**, zoals printers en de eigen export van ModelCraft het schrijven. Hoekpunten op hetzelfde punt worden samengevoegd, dus een gesloten onderdeel komt binnen als een gesloten [mesh](topic:meshes). Kleuren in het bestand (de VisCAM / SolidView- en de Materialise-conventies) kleuren de vlakken.
- **Exporteren,** voor 3D-printen: binaire STL, **millimeters**, Z omhoog. Alleen driehoeken: groepen en losse randen worden weggelaten. Geverfde vlakken dragen hun kleur in de VisCAM / SolidView-conventie, die andere programma's negeren als ze die niet lezen. Exporteer gesloten volumes voor een schone print.

## STEP (.step, .stp)

Alleen importeren. STEP is wat onderdelenmodelleurs en leveranciers versturen: AP203-, AP214- en AP242-bestanden.

- **Importeren:** ModelCraft leest het bestand zelf, in de pagina, en zet elk volume om in een gesloten [mesh](topic:meshes) van driehoeken: vlakke vlakken blijven vlak, gebogen vlakken (cilinders, kegels, bollen, torussen, B-spline-oppervlakken) worden veel kleine vlakke vlakken, met de randen binnen één gebogen vlak zacht en de randen tussen twee vlakken scherp. STEP-bestanden vermelden hun eenheid; het model komt binnen op zijn echte grootte. Een samenstelling komt binnen met elk onderdeel waar het bestand het plaatst, elk onderdeel als eigen mesh in een groep die naar het bestand is genoemd. Kleuren, onderdeelnamen uit de samenstellingsboom en toleranties (PMI) worden niet gelezen.
- **Meldingen:** wat is overgeslagen of grover is getekend, wordt aan de statusregel toegevoegd ("Opmerkingen: …"); een bestand zonder volume, een beschadigd bestand of een bestand dat de limieten overschrijdt, zegt waarom en voegt niets toe.
- **Limiet:** bestanden tot 300 MB; 400 000 vlakken en 8 miljoen driehoeken.

## .3dm

Alleen importeren. `.3dm`-bestanden bevatten NURBS-modellen: polyoppervlakken, oppervlakken, meshes, krommen en blokken.

- **Importeren:** ModelCraft leest het bestand zelf, in de pagina. Meshes komen binnen zoals ze zijn; elk vlak van een polyoppervlak of extrusie komt uit de rendermesh die in het bestand is bewaard, anders zet ModelCraft het om in een mesh (vlakken, NURBS-oppervlakken, omwentelingsoppervlakken, geëxtrudeerde krommen, extrusies; begrensd door hun randen, gesloten polyoppervlakken als gesloten meshes). Krommen worden randen, blokken worden componenten (blokken in blokken blijven behouden), lagen worden tags (verborgen wanneer uit), en de kleur van het object (zijn eigen, die van zijn laag of van zijn materiaal) kleurt zijn vlakken. Het bestand vermeldt zijn eenheid; het model komt binnen op zijn echte grootte. Stap voor stap: [Een .3dm-model importeren](topic:import-3dm-files).
- **Meldingen:** de statusregel zegt hoeveel vlakken uit bewaarde meshes kwamen en hoeveel er werden omgezet, en noemt wat is weggelaten: punten, puntenwolken, tekst, maatvoeringen, arceringen, lichten, SubD-objecten, vlakken op oppervlaktesoorten die nog niet worden gelezen, en gekoppelde blokken.
- **Limiet:** bestanden tot 300 MB.

## PLY (.ply)

Importeren en exporteren, voor meshes met kleuren (scans, 3D-printen in kleur, andere modelleerprogramma's).

- **Importeren:** ASCII en binair. Vlakken worden een [mesh](topic:meshes) met hun normalen, texturcoördinaten en kleuren per hoekpunt behouden; elk vlak wordt geverfd met de dichtstbijzijnde van 4,096 kleuren, zodat u de kleuren nu ziet. PLY heeft geen eenheid of assenconventie: coördinaten komen binnen zoals ze zijn (meters, Z omhoog). Een PLY met alleen punten is een puntenwolk: open het in BimCraft of CivilCraft.
- **Exporteren:** binaire PLY met posities, normalen en kleuren (en texturcoördinaten wanneer het model die heeft), in meters, Z omhoog.

## FBX (.fbx)

Alleen importeren. FBX 7-bestanden (vanaf 2011), binair of ASCII, gelezen door de eigen lezer van ModelCraft.

- Meshes komen binnen als [meshes](topic:meshes) met hun normalen, texturcoördinaten (elke UV-set) en kleuren per hoekpunt; een mesh die meerdere objecten gebruiken, blijft gedeeld. Objecten worden groepen met hun transformaties (pivots, offsets en voorrotaties inbegrepen).
- Materialen: de diffuse textuur — ingesloten in het bestand, of een afbeelding die samen met het `.fbx` is neergezet — komt binnen als textuur (TGA-afbeeldingen blijven behouden als PNG); anders de diffuse kleur. Andere materiaalinstellingen wachten op het nieuwe materiaalmodel.
- De omhoogas en eenheid van het bestand worden toegepast: alles komt binnen met Z omhoog, in meters.
- Punt- en spotlichten worden [lampen](topic:lights) (een FBX-intensiteit van 100 is de standaardlamp van ModelCraft, 800 lumen: FBX-intensiteiten hebben geen eenheid). Camera's worden [scènes](topic:scenes).
- Geskinde figuren komen binnen in rustpose; botten en animaties worden geteld en nog niet bewaard. Directionele en vlaklichten, en geometrie anders dan meshes (NURBS, krommen), worden geteld en weggelaten.
- FBX 6-bestanden en ouder worden geweigerd: sla ze opnieuw op als FBX 2011 of nieuwer.

## Alembic (.abc)

Alleen importeren: geometrie-caches van animatie- en effectenprogramma's.

- Meshes (polygoon- en subdivisiemeshes) komen binnen als [meshes](topic:meshes), met hun texturcoördinaten en normalen; transformaties worden groepen. Alembic is Y omhoog en wordt naar Z omhoog gedraaid; meters.
- Een cache met veel samples (een animatie) komt binnen bij zijn eerste sample; de statusbalk zegt hoeveel er zijn.
- Punten, krommen, NURBS-oppervlakken, camera's en lichten worden geteld en weggelaten. Bestanden in de oude HDF5-indeling worden geweigerd: sla ze opnieuw op als Ogawa Alembic-bestand.

{{ui:Controleren op 3D-printen (STL of 3MF)…}} controleert eerst de vorm en schrijft de selectie, of alles wat zichtbaar is. Zie [Een model klaarmaken voor 3D-printen](topic:print-3d).

## 3MF (.3mf)

Alleen exporteren, vanuit {{ui:Controleren op 3D-printen (STL of 3MF)…}}. 3MF-kern: één mesh in **millimeters**, Z omhoog, met de kleuren als materialen. De meeste slicers lezen het, en anders dan STL vermeldt het zijn eenheid. Verborgen zaken worden weggelaten. Zie [Een model klaarmaken voor 3D-printen](topic:print-3d).

## DWG- en DXF-export (.dwg, .dxf)

Voor CAD-programma's. Het model wordt geschreven in zijn eigen eenheid: inches voor modellen in voet en duim, anders millimeters, centimeters of meters (de statusbalk noemt die).

- **Vlakken** worden 3D-vlakken (driehoeken). Lijnen binnen een vlak en zachte randen worden onzichtbaar geschreven, zodat de vlakken eruitzien zoals in ModelCraft.
- **Losse randen** worden lijnen.
- **Groepen en componenten** worden blokken: een component wordt één keer geschreven en zo vaak geplaatst als hij wordt gebruikt, inclusief gedraaide en gespiegelde kopieën. Een groep die na het draaien is uitgerekt (zodat hij schuin staat), wordt in plaats daarvan op zijn plaats uitgeschreven.
- **Kleuren:** DWG behoudt de kleur van elk vlak precies; DXF gebruikt de dichtstbijzijnde van de 255 standaard CAD-kleuren.
- **Versies:** DWG wordt geschreven als AutoCAD 2004 (AC1018), dat CAD-programma's vanaf 2004 openen. DXF is R12 (AC1009), de versie die elk CAD-programma leest; R12 heeft geen eenheidsveld, dus vertel het CAD-programma welke eenheid het moet gebruiken.
- **Niet geschreven:** hulplijnen, maatvoeringen, scènes en de camera.

## IFC (.ifc)

Alleen exporteren, voor BimCraft en andere BIM-programma's. IFC4 met een project, een bouwplaats, een gebouw en zijn verdiepingen. Elke groep of component op het hoogste niveau wordt één bouwelement-proxy met zijn naam; gesloten exemplaren worden geschreven als volumevormen (facetbreps), open exemplaren als oppervlaktemodellen; gaten in vlakken blijven behouden. Losse geometrie op het hoogste niveau wordt één element met de naam "Loose geometry". Geen types, eigenschappen of materialen.

**Verdiepingen:** {{ui:Exporteren}} › {{ui:IFC-verdiepingen…}} toont ze, elk met een naam en een hoogte ({{ui:Verdieping toevoegen}}, of {{ui:Raden uit het model}}, dat voor elke hoogte waarop uw groepen op het hoogste niveau staan één verdieping maakt). Bij export gaat elke groep of component naar de verdieping op of onder zijn laagste punt, en behoudt zijn plaats. Zonder verdiepingen gaat alles op één verdieping, "Niveau 1", op 0. De verdiepingen worden in het ModelCraft-bestand bewaard.

## DWG (.dwg) en DXF (.dxf)

Importeren als lijnen op de grond (arceringen en 3D-vlakken als vlakken); exporteren zoals hierboven beschreven. Zie [Een model op een terreinplan plaatsen](topic:site-plan).

- **Lezen:** lijnen, polylijnen (met bogen), 3D-polylijnen, cirkels, bogen en blokverwijzingen inclusief arrays, uit modelruimte. Onzichtbare objecten (zoals de verborgen toestanden van een dynamisch blok) worden weggelaten. Krommen worden 48 rechte stukken per volledige cirkel.
- **Gelezen vanaf 0.4:** splines en ellipsen (als randen), tekst, meerregelige tekst en attribuutwaarden (als randen in een enkellijns lettertype), arceringen (vlakken met gaten), 3D-vlakken en massieve vulling (vlakken), en maatvoeringen (getekend uit de eigen maatvoeringsblokken van de tekening).
- **Gelezen vanaf 0.7:** 3D-volumes, regio's en lichamen (hun ACIS-gegevens, DWG en DXF van elke versie), elk als eigen groep, gesloten exemplaren als volumes. Vlakken op andere oppervlakken dan vlakken, cilinders, kegels, bollen, torussen en eenvoudige spline-oppervlakken worden weggelaten en vermeld.
- **Niet gelezen:** punten, tabellen, multileaders, afbeeldingen en alles in papierruimte.
- **Eenheden:** overgenomen uit de tekening wanneer die ze vermeldt. Anders vraagt ModelCraft ernaar.
- **DXF** moet ASCII zijn. Binaire DXF wordt geweigerd.
- **DWG-bestanden** van AutoCAD R13 tot het huidige formaat (AutoCAD 2018 en later; AC1012 tot AC1032) worden gelezen door de eigen DWG-lezer van ModelCraft, in de pagina; het is een onderdeel van ModelCraft, dus het werkt offline wanneer ModelCraft dat doet. Oudere versies (R12 en eerder) en zwaar beschadigde bestanden kunnen niet worden gelezen; sla ze op als DXF.
- **Limieten:** coördinaten meer dan 10.000 km van de oorsprong, of meer dan 2 miljoen lijnstukken, worden geweigerd.

## SKP-bestanden

{{ui:Importeren}} (of zet het bestand op de weergave) leest SketchUp-bestanden met de eigen lezer van ModelCraft, in de pagina: er wordt niets geüpload, en het werkt offline wanneer ModelCraft dat doet. Getest met bestanden van SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 en 2026; andere versies zouden ook moeten openen, maar zijn nog niet geprobeerd. Het model komt binnen als één groep die naar het bestand is genoemd. Eén {{key:Mod+Z}} haalt het weer weg. Stap voor stap: [Een SKP-model importeren](topic:import-sketchup-files).

- **Behouden:** vlakken met hun gaten, groepen (als groepen) en componenten (als componenten, gedeeld), hun namen en plaatsingen, kleuren, tags op groepen en componenten, randen die niet deel uitmaken van een vlak, en zachte en gladde randen, zodat gebogen oppervlakken glad blijven.
- **Kleuren:** het eigen materiaal van een vlak geeft zijn kleur. Een materiaal dat op een groep of component is geverfd, wordt de verf van die plaatsing, zodat vlakken erin zonder eigen kleur die overnemen, zoals in SketchUp; een component die twee kleuren verf heeft, blijft één component.
- **Tags** op groepen en componenten worden ModelCraft-tags, zichtbaar of verborgen zoals ze waren. Tags op losse vlakken en randen worden niet bewaard (ModelCraft-tags gelden alleen voor groepen en componenten); de statusbalk telt ze.
- **Verborgen zaken komen verborgen binnen** (vlakken, randen, groepen, componenten, en vlakken en randen op een verborgen tag), zodat u ziet wat SketchUp toonde; {{ui:Alles weer tonen}} toont ze.
- **Texturen:** een vlak dat met een getextureerd materiaal is geverfd, behoudt zijn textuur, geplaatst zoals in het bestand, en het ModelCraft-bestand bewaart de afbeelding. Een textuur op een hele groep of component, een textuur die in het bestand ontbreekt, of een afbeelding die browsers niet kunnen tonen (zoals een Photoshop-bestand), behoudt alleen de kleur van het materiaal.
- **Weggelaten, en geteld in de statusbalk:** afbeeldingen die in het model zijn geplaatst. Tekst, maatvoeringen, hulplijnen, doorsnedevlakken, scènes en stijlen worden niet gelezen.
- **Eenheden:** SketchUp-bestanden zijn van binnen in inches; ModelCraft zet ze om, zodat de maten in elke eenheid goed komen.
- **Opslaan als `.skp`** is nog niet beschikbaar. Om een model terug te brengen naar SketchUp, exporteert u Collada (`.dae`).

## Niet ondersteund

ModelCraft kan geen 3DS- of IFC-bestanden openen, en kan geen 3DS-, FBX-, STEP-, `.3dm`- of SketchUp (`.skp`)-bestanden opslaan.
