---
title: Materialen maken met knopen
summary: Bouw een materiaal uit texturen, afbeeldingen en rekenkunde in de werkomgeving Shading, zie het ondertussen in de weergave, en beschilder vlakken ermee.
keywords: shading, bakken, texturen bakken, ambient occlusion, ao, kromming, normaal bakken, hoge poly, lage poly, lichtkaart, decal, decals, sticker, logo, label, textuur schilderen, penseel, materiaal, materialen, materialx, mtlx, openpbr, standard surface, materiaalbibliotheek, librarycraft, textuurset, pbr, texturen importeren, zip, cc0, slepen, knoop, knopen, knopeneditor, shader, textuur, procedureel, ruis, schaakbord, voronoi, cellen, golven, stenen, tegels, hout, marmer, verloop, vuil, randslijtage, kleurverloop, mengen, bump, normaalkaart, ruwheid, metaalgehalte, ondoorzichtigheid, uitsnede, emissie, gloed, verplaatsing, box-mapping, triplanar, uv, afbeelding, afbeeldingstextuur
from: d7368b21
---

Een materiaal dat in de werkomgeving **Shading** is gemaakt, hoort bij het bestand. Het is een kleine graaf: **knopen** die texturen, afbeeldingen en getallen maken, verbonden met de **Materiaaluitvoer**, waarvan de ingangen het uiterlijk van het oppervlak bepalen — basiskleur, ruwheid, metaalgehalte, normaal, ondoorzichtigheid, emissie en de rest van het OpenPBR-model. U beschildert vlakken ermee zoals met elk bibliotheekmateriaal, en elke wijziging is meteen in de weergave te zien.

## Openen

Kies {{ui:Shading}} in de lijst Werkomgeving. De 3D-weergave houdt de bovenkant van het scherm en de **knopeneditor** neemt de onderkant. Het paneel rechts toont de eigen materialen van het bestand.

- {{ui:Nieuw materiaal}} maakt een grijs materiaal met alleen zijn Materiaaluitvoer.
- **Een bewerkbare kopie van een bibliotheekmateriaal maken** verandert baksteen, hout, tegel en de rest in een graaf die u kunt wijzigen: de textuur komt via een knoop Bibliotheektextuur, de oneffenheden via een knoop Bump.
- {{ui:Ermee schilderen}} beschildert de geselecteerde vlakken of groepen, of kiest het materiaal voor de tool Verven. De materialen van de tool Verven tonen de eigen materialen van het bestand onder **In dit bestand**.
- {{ui:Dupliceren}} en {{ui:Verwijderen}} werken op het materiaal dat u bewerkt. Verwijderen kan niet ongedaan worden gemaakt: vlakken die ermee zijn beschilderd, tonen de standaardkleur totdat u ze opnieuw beschildert.

## Materialen uit de bibliotheek

Het paneel toont onder **Materiaalbibliotheek (Bibliotheek)** de materialen van de bibliotheek, elk met een voorbeeld dat is gerenderd door de path tracer van CadCraft. Het zijn textuursets die onder CC0 zijn uitgebracht, met bronvermelding aan de mensen die ze maakten.

- Klik op één om het in het bestand te brengen (de afbeeldingen komen mee) en, met vlakken of groepen geselecteerd, beschilder ze ermee.
- Sleep er één op een vlak of een groep in de weergave om alleen dat te beschilderen.
- Het wordt een van de materialen van het bestand: wijzig de knopen ervan zoals bij elk ander. De bronvermelding staat in het paneel en blijft in het bestand.

## Een textuurset importeren

{{ui:Afbeeldingen of een zip…}} of {{ui:Een map…}} onder **Een textuurset importeren** maakt een materiaal uit een set kaarten. De kaarten worden herkend aan de woorden in hun bestandsnamen: color, albedo, diffuse of basecolor; roughness (of gloss, omgezet in ruwheid); metalness of metallic; normal (OpenGL of DirectX, uit `gl` / `dx` in de naam); height of displacement; ambient occlusion; opacity; emission. Gepakte kaarten (ARM, ORM) worden overgeslagen. De tegel begint op 1 × 1 m: stel de echte grootte in op de Materiaaluitvoer. Hoogte gaat naar verplaatsing met de schaal op 0 — verhoog de schaal om het op meshes te gebruiken.

## MaterialX

MaterialX is het open formaat dat andere 3D- en renderprogramma's gebruiken om materialen door te geven.

- {{ui:Exporteren als MaterialX…}} slaat het materiaal op dat u bewerkt: de waarden, en elke textuur als PNG-afbeelding naast het `.mtlx`-bestand (in een zip). Kies de shader waarin het wordt geschreven: **OpenPBR Surface** (MaterialX 1.39, hetzelfde model dat ModelCraft gebruikt) of **Standard Surface** (MaterialX 1.38, dat meer programma's nu lezen). De texturen worden geplaatst via UV-coördinaten in meters; box- en triplanar-plaatsing worden als UV geschreven.
- {{ui:MaterialX importeren…}} (of {{ui:Uit een map…}}) leest `.mtlx`-bestanden met OpenPBR-, Standard Surface-, UsdPreviewSurface- of glTF PBR-shaders. Geef er ook de afbeeldingen bij, of een zip met alles: een afbeelding wordt gevonden op zijn pad, zijn naam, of zijn naam met een ander afbeeldingstype (een `.exr` waarvan de bestandsnamen zeggen dat er een `.jpg` naast staat, kan zo binnenkomen). Texturen, normaalkaarten, rekenkunde, mengingen en verplaatsing komen binnen als knopen; al het andere behoudt zijn waarde, en de statusregel zegt wat is weggelaten.

## Decals

Een decal is een afbeelding op een oppervlak — een logo, een bord, een label, een vlek — met een eigen materiaal.

- Stel **Breedte van een nieuwe decal** in, kies dan {{ui:Een decal plaatsen…}} (of {{ui:Decal}} op de werkbalk), kies een PNG-, JPEG- of WebP-afbeelding en klik op een vlak. De afbeelding wordt op de oppervlakken daar geprojecteerd, met behoud van de verhoudingen; transparante delen van een PNG blijven doorzichtig.
- Een decal hoort bij de groep of component waarin u klikte en beweegt mee. Hij bedekt de vlakken binnen zijn kader die dezelfde kant op kijken, en stopt bij de randen van wat hij bedekt.
- Elke decal krijgt een eigen materiaal, genaamd **Decal: <afbeelding>**, in de lijst van het bestand: bewerk het zoals elk ander (ruwheid, een oneffenheid, een gloed). {{ui:Materiaal}} naast de decal opent het.
- Naast elke decal: zijn breedte (de hoogte volgt de afbeelding), {{ui:Draaien}} (een kwartslag) en {{ui:Verwijderen}}. Decals worden bewaard bij de materialen van het bestand, buiten Ongedaan maken.
- Ze zijn zichtbaar in de geschaduwde weergave, in snelle renders en in hoogwaardige afbeeldingen.

## Op de textuur schilderen

{{ui:Textuur schilderen}} (of {{ui:Verven}} onder **Op de textuur schilderen**) maakt de aanwijzer tot een rond penseel. Sleep op een vlak dat een van de materialen van dit bestand draagt: het penseel schildert de afbeelding achter de basiskleur.

- Op een mesh schildert het langs de UV's van de mesh (ontvouw hem eerst in de werkomgeving UV); op andere vlakken schildert het over het vlak heen, zodat de beschildering zich herhaalt met de tegel van het materiaal.
- Een materiaal waarvan de basiskleur een effen kleur is, krijgt de eerste keer dat u het beschildert een nieuwe afbeelding van 512 × 512 pixels in die kleur. Een materiaal waarvan de basiskleur uit andere knopen komt, heeft een knop Afbeelding nodig die aan Basiskleur is gekoppeld.
- Stel de penseelkleur, grootte (in afbeeldingspixels), sterkte en hardheid in het paneel in. {{ui:Streek ongedaan maken}} of Ctrl+Z (tijdens het schilderen) neemt een streek terug, tot de laatste 20.
- De beschilderde afbeelding wordt in het bestand opgeslagen. Bibliotheekmaterialen kunnen niet worden beschilderd: maak eerst een bewerkbare kopie.

## Texturen bakken

**Texturen bakken** schrijft wat de vorm en de scène aan een oppervlak geven naar afbeeldingen langs de UV's van een mesh.

- Selecteer een mesh die UV's heeft (ontvouw hem in de werkomgeving UV), vink de kaarten aan en druk op {{ui:Bakken}}:
  - **Ambient occlusion** — hoe open elk punt is: hoeken, plooien en plaatsen onder andere dingen worden donkerder. Alles wat in het model te zien is, schaduwt het, tot de occlusie-afstand.
  - **Kromming** — helder langs buitenranden, donker in binnenhoeken, middengrijs op vlakke en licht gebogen delen, over de randbreedte die u instelt.
  - **Normalen van het object met veel detail** — selecteer ook een gedetailleerde kopie: de oppervlaktedetails worden geschreven als normaalkaart voor de eenvoudigere (het object met minder driehoeken wordt erop gebakken). De zoekafstand is hoe ver de twee oppervlakken van elkaar mogen liggen.
  - **Verlichting** — de zon van de plaats en datum van het model (Stijl) met zijn schaduwen, plus de lucht, als lichtkaart.
- De afbeeldingen worden aan het bestand toegevoegd en verschijnen in knopen Afbeelding. Als het materiaal dat u bewerkt een knoop **Vuil en randslijtage** heeft, leest die meteen de nieuwe occlusie en kromming.
- Meer stralen per texel geven gladdere occlusie en verlichting en duren langer. Bakken draait op de processorkernen van de computer op de achtergrond; {{ui:Bakken stoppen}} stopt het.

## Een graaf bouwen

1. {{ui:Een knoop toevoegen…}} (of {{key:Shift+A}} in de knopeneditor) voegt een knoop toe in het midden van de editor.
2. Sleep van een uitvoerpunt (aan de rechterkant van een knoop) naar een invoerpunt (aan de linkerkant van een knoop) om ze te verbinden. Een tweede verbinding naar een invoer vervangt de eerste; sleep een verbonden invoer weg om die los te maken.
3. Invoeren die niet verbonden zijn, tonen hun waarde: typ een getal of kies een kleur. Instellingen staan onderaan elke knoop.

Sleep een knoop aan zijn titel om hem te verplaatsen, sleep lege ruimte om te verschuiven, en gebruik het wiel om te zoomen. {{key:Delete}} verwijdert de geselecteerde knopen of verbinding, {{key:Mod+Z}} maakt ongedaan, {{key:Mod+D}} dupliceert, {{key:F}} toont elke knoop. Elke wijziging is één stap ongedaan maken van de knopeneditor. Ongedaan maken van het model zelf verandert de materialen niet.

| Knopen | Wat ze maken |
|---|---|
| Texturecoördinaten | Waar op de tegel een punt ligt: herhaal het, verschuif het, draai het een kwartslag. |
| Waarde, Kleur | Een getal, een kleur. |
| Afbeelding | Een afbeelding van het bestand (een die kwam met een geïmporteerd model, of een die u toevoegde met {{ui:Een afbeelding toevoegen…}}). Kies **Kleuren** voor een foto en **Gegevens** voor een ruwheids- of normaalkaart. |
| Bibliotheektextuur | De textuur, ruwheid en hoogte van een bibliotheekmateriaal. |
| Schaakbord, Ruis | Vierkanten; zacht fractale ruis met zijn detail, ruwheid en zaad. |
| Voronoi-cellen, Golven, Verloop | Cellen (afstand tot het dichtstbijzijnde punt, de randen tussen cellen, een kleur per cel); banden dwars, omhoog of diagonaal, als sinus, zaag of driehoek, gebogen door ruis; lineaire, kwadratische, radiale en bolvormige verlopen. |
| Stenen, Tegels | Rijen stenen met een verspringende voeg, of een raster van tegels: kleuren, mortel of voeg, een spleet en een afschuining in meters, een hoogte voor oneffenheden, een willekeurig getal per stuk. |
| Hout, Marmer | Ringen langs de nerf met fijne vezels; aderen gebogen door turbulentie. |
| Vuil en randslijtage | Slijt bolle randen en vervuilt holtes op basis van de kromming- en occlusie-afbeeldingen van een mesh ([Texturen bakken](topic:shading#bake-textures) maakt die; of stel de twee afbeeldingsinstellingen in, in de UV-indeling van de mesh: plaats het materiaal via UV-coördinaten). Zonder die doet het niets. |
| Kleuren mengen, Kleurverloop, Tint/verzadiging/waarde, Helderheid en contrast, Omkeren, Gamma, RGB splitsen en samenvoegen | Kleurbewerking. |
| Wiskunde, Bereik toewijzen | Rekenkunde op getallen (optellen, vermenigvuldigen, macht, gladde stap en meer). |
| Bump, Normaalkaart | Een normaal uit een hoogte (Bump) of uit een normaalkaart-afbeelding (Normaalkaart: kies de richting van het groene kanaal). |

## De Materiaaluitvoer

De instellingen bepalen hoe de textuur op oppervlakken ligt:

- **Tegelbreedte** en **Tegelhoogte**: hoeveel meter één tegel van de textuur beslaat. Alles wat een graaf maakt, herhaalt zich over de tegel zonder naad.
- **Geplaatst door**: **UV-coördinaten** volgen vlakken (vlakken duwen/trekken: langs elk vlak; meshes: hun UV's, één UV-eenheid = één tegel), **Box** projecteert vanuit de dichtstbijzijnde van de drie assen, **Triplanar** mengt de drie projecties op schuine oppervlakken (**Mengscherpte**: hoger is een harder mengsel).
- **Normaalsterkte** schaalt de normaalingang. **Verplaatsingsschaal** bepaalt hoe ver de verplaatsingsingang de hoekpunten van een mesh verschuift.
- {{ui:Meer ingangen}} toont de rest van de OpenPBR-ingangen: coat, fuzz, subsurface, thin film, transmissie en hun kleuren.

## In hoogwaardige afbeeldingen

De path tracer leest de basiskleur, ruwheid, metaalgehalte, ondoorzichtigheid, normaal en emissie uit de graaf, zoals ze over het oppervlak veranderen. Elke andere ingang die u koppelt (bijvoorbeeld een coat die varieert) wordt gebruikt op zijn gemiddelde; het paneel zegt welke. Een uitsnede uit een ondoorzichtigheidstextuur toont zijn vorm, en zijn schaduw is gelijkmatig doorzichtig. Een gloeiende textuur verlicht wat erop gericht is, zonder als lamp te worden bemonsterd.

**Verplaatsing** verschuift alleen de hoekpunten van meshes, dus voeg een Subdivision-modifier toe voor detail ([Modifiers](topic:modifiers)). Vlakken die duwen/trekken houden hun vorm en krijgen de oneffenheden uit de normaal.

:::tip
Op een computer met WebGPU wordt de graaf op de videokaart berekend; zonder WebGPU op de processor. Het resultaat is hetzelfde.
:::
