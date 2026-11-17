---
title: Voer 'n .3dm-model in
summary: Voer 'n .3dm-lêer in met sy netwerke, oppervlaktes, krommes, blokke, lae en kleure; waar die driehoeke vandaan kom, en wat weggelaat word.
keywords: 3dm, invoer, nurbs, polysurface, brep, oppervlaktes, weergavenetwerk, uitrekking, krommes, blokke, lae, etikette, kleure, eenhede, oorskakel, migreer
from: 3cf29879
---

ModelCraft lees `.3dm`-lêers met sy eie leser, in die bladsy. Niks word opgelaai nie, en dit werk aflyn wanneer ModelCraft aflyn werk. Lêers wat in die weergawe 5, 6, 7 en 8-uitlegte gestoor is, is getoets; ouer lêers (weergawes 2 tot 4) behoort ook oop te maak, maar is nog nie probeer nie.

## Voer die lêer in

1. Klik op {{ui:Import}} in die {{ui:File}}-groep (of sleep die `.3dm`-lêer op die 3D-aansig).
2. Kies die lêer.

   Die statusbalk sê "Reading chair.3dm…" terwyl dit lees, en daarna wat ingekom het, byvoorbeeld "Ingevoer chair.3dm: 14 maaswerke (8330 vlakke), 8 krommes, 5 blokplasings, 3 lae as etikette. Oppervlaktes: 7 vlakke uit die maaswerke in die lêer gestoor, 29 getesselleer deur CadCraft."

Die hele model kom aan as een groep wat na die lêer vernoem is, gekies, en die aansig zoem daarop. Een {{key:Mod+Z}} haal alles weer weg, insluitend die etikette.

## Waar die driehoeke vandaan kom

ModelCraft modelleer met vlakke en maaswerke, so elke oppervlak in die lêer kom in as 'n [maaswerk](topic:meshes) van klein plat driehoeke. Vir elke vlak van 'n polysurface (en elke uitrekking) neem ModelCraft, in hierdie volgorde:

1. **Die weergavenetwerk wat in die lêer gestoor is.** Die meeste modelleerprogramme stoor die netwerk wat hulle op die skerm gewys het saam met elke oppervlak; as dit daar is, gebruik ModelCraft dit soos dit is.
2. **Sy eie tessellasie**, wanneer die lêer geen gestoorde netwerk het nie: vlakke, NURBS-oppervlaktes, oppervlaktes van omwenteling (sfere, keëls, torusse, draaivorms), uitgetrekte krommes en uitrekkings (met hul gate en eindoppe), begrens deur hul rande. Vlakke van een polysurface deel hul randpunte, so 'n geslote polysurface kom in as 'n geslote maaswerk. Geboë gebiede word verdeel totdat die driehoeke binne ongeveer 0.15 % van die voorwerp se grootte van die ware oppervlak lê.
3. **Niks**, vir 'n vlak van 'n soort oppervlak wat ModelCraft nog nie lees nie. Die statusbalk sê hoeveel vlakke, en van watter soort.

Die statusbalk se "Oppervlaktes:"-deel sê hoeveel vlakke uit gestoorde netwerke gekom het en hoeveel ModelCraft getesselleer het. Rande binne een vlak van die lêer is sag, en rande tussen twee vlakke skerp, so 'n geboë vlak skakeer glad.

:::tip
Vir die getroueste vorms, stoor die lêer met sy weergavenetwerke in die program wat dit gemaak het (dit is gewoonlik die standaard; 'n "stoor klein"-opsie laat hulle weg).
:::

## Wat inkom

- **Netwerke** met hul hoekpuntkleure en tekstuurkoördinate.
- **Polysurfaces, oppervlaktes en uitrekkings**, soos hierbo beskryf.
- **Krommes** (lyne, polilyne, boë, sirkels, NURBS-krommes en krommes wat daaruit saamgevoeg is) as [rande](topic:curves), een groep rande per laag.
- **Blokke** word [komponente](topic:groups-components): elke plasing van 'n blok is 'n plasing van een komponent, so die wysiging van een kopie verander hulle almal. Blokke binne blokke word behou.
- **Lae** word [etikette](topic:tags) met die laag se volle naam ("Furniture::Chairs"), versteek wanneer die laag af was. Elke voorwerp se plasing dra sy laag se etiket.
- **Kleure.** 'n Voorwerp se kleur kom van waar die lêer dit sê: sy eie kleur, dié van sy laag, of sy materiaal se basiskleur. Dit word die verf van sy vlakke.
- **Versteekte voorwerpe kom versteek in**; {{ui:Unhide all}} wys hulle.
- **Eenhede:** die lêer sê sy eenheid; die model kom in sy ware grootte.

## Wat weggelaat word (en gesê word)

Die statusbalk se "Notas:"-deel noem alles wat nie ingekom het nie, met hoeveel:

- punte en puntwolke, teks, teksstippels, maatlyne, leiers, arseringe, ligte, snyvlakke en uitlegbesonderhede;
- SubD-voorwerpe: verander hulle in netwerke of polysurfaces in die program wat die lêer gemaak het, voordat jy die lêer invoer;
- vlakke op verplaasde oppervlaktes en ander soorte oppervlaktes wat ModelCraft nog nie lees nie, wanneer die lêer geen netwerk daarvoor gestoor het nie;
- blokke wat van ander lêers af geskakel is (net die lêer wat jy invoer, word gelees);
- uitrekkings met skuins (gemiterde) punte kom met vierkantige punte in.

Materiaaltekstuur, weergave-instellings, benoemde aansigte, groepe en gebruikersteks word nie gelees nie; 'n materiaal gee net sy basiskleur.

## Perke

Lêers tot 300 MB. 'n Beskadigde lêer sê wat verkeerd is en voeg niks by nie; een voorwerp wat nie gelees kan word nie, word weggelaat en getel, en die res kom in.
