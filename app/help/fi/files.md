---
title: Avaa, tallenna, tuo ja vie
summary: ModelCraft-tiedosto, tiedostot joita voit tuoda ja lähettää, tiedostojen sijainti sekä mikä muuttuu offline-tilassa ja eri selaimissa.
keywords: avaa, tallenna, tuo, vie, tiedosto, 3dm, skp, palauta, automaattinen tallennus, viimeisimmät, työpöytä, avaa 3D:nä, siirto, lataa, modelcraft-tiedosto, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, muodot, offline, tallenna muodossa
from: 3f09ab72
---

ModelCraft lukee ja kirjoittaa tiedostoja tietokoneellesi. Mitään ei lähetetä: avattava tiedosto luetaan selaimessasi, ja tallennettava tiedosto on lataus. Katso [Missä tiedostosi ovat](common:your-files).

## Muodot yhdellä silmäyksellä

| Muoto | Avaa | Tuo | Vie | Käyttötarkoitus |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | kyllä | ei | {{ui:Tallenna}} | Työtiedostosi. Säilyttää kaiken. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | kyllä | kyllä | {{ui:Tallenna muodossa}}, {{ui:Vie}} | Renderöinti- ja kohtausten kokoamisohjelmat. ModelCraftin oma USD säilyttää kaiken. Katso [Tallenna, avaa ja vie USD](topic:usd). |
| SketchUp (`.skp`) | ei | kyllä | ei | Mallien tuonti SketchUpista. Säilyttää ryhmät, komponentit, värit, pintojen tekstuurit, tunnisteet ja pehmeät särmät. Katso [Tuo SKP-malli](topic:import-sketchup-files). |
| Collada (`.dae`) | ei | kyllä | kyllä | Mallien vaihto muiden 3D-mallintajien kanssa. Säilyttää ryhmät, komponentit ja värit. |
| OBJ (`.obj`) | ei | kyllä | kyllä | Renderöinti- ja visualisointiohjelmat. |
| glTF (`.glb`, `.gltf`) | ei | kyllä | vain `.glb` | Web-katseluohjelmat, pelimoottorit, AR. |
| STL (`.stl`) | ei | kyllä | kyllä | 3D-tulostus (millimetreinä). |
| PLY (`.ply`) | ei | kyllä | kyllä | Värilliset verkot: skannaukset, värituloste. |
| FBX (`.fbx`) | ei | kyllä | ei | Animaatio- ja peliohjelmien mallit (FBX 2011 ja uudemmat). |
| Alembic (`.abc`) | ei | kyllä | ei | Geometriavälimuistit ensimmäisen näytteen kohdalta. |
| STEP (`.step`, `.stp`) | ei | kyllä | ei | Osat osamallinnusohjelmista ja toimittajilta suljettuina verkkoina todellisessa koossaan. Katso [Tiedostomuodot tarkemmin](topic:formats). |
| `.3dm` | ei | kyllä | ei | NURBS-mallit: monipinnat, verkot, käyrät, lohkot ja tasot verkkoina, reunoina, komponentteina ja tunnisteina. Katso [Tuo .3dm-malli](topic:import-3dm-files). |
| 3MF (`.3mf`) | ei | ei | kyllä | 3D-tulostus väreillä (millimetreinä). Kohdasta {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}: katso [Valmistele malli 3D-tulostukseen](topic:print-3d). |
| IFC (`.ifc`) | ei | ei | kyllä | BIM-ohjelmat ja BimCraft. |
| DWG (`.dwg`) | ei | kyllä | kyllä | Asemapiirros tai pohjapiirros, jonka päälle mallinnetaan; mallin lähettäminen CAD-ohjelmaan. |
| DXF (`.dxf`) | ei | kyllä | kyllä | Sama, mille tahansa CAD-ohjelmalle. |

[Tiedostomuodot tarkemmin](topic:formats) luettelee tarkasti, mitä kukin muoto säilyttää ja mitä jättää pois.

## ModelCraft-tiedosto

`.modelcraft`-tiedosto säilyttää koko mallin: geometrian, ryhmät, komponentit, apuviivat, kohtaukset, yksiköt sekä kameran ja tyylin, joita käytit tallentaessa. Se ei säilytä kumoushistoriaa.

### Avaa malli

1. Valitse {{ui:Tiedosto}}-ryhmästä {{ui:Avaa}} tai paina {{key:Mod+O}}.
2. Jos näytöllä olevassa mallissa on tallentamattomia muutoksia, ModelCraft kysyy: ”Tässä mallissa on tallentamattomia muutoksia. Tallennetaanko kopio ensin?” Valitse {{ui:Tallenna kopio}}, {{ui:Hylkää muutokset}} tai {{ui:Peruuta}}.
3. Valitse `.modelcraft`-tiedosto.

Malli avautuu tallennusyksiköissään ja tallennetulla kameralla. Voit myös pudottaa `.modelcraft`-tiedoston 3D-näkymään tai napsauttaa sitä aloituskortin viimeisimpien tiedostojen luettelosta (selaimet, jotka voivat avata tiedoston uudelleen, ja työpöytäsovellus).

:::desktop
Työpöytäsovelluksessa `.modelcraft`-tiedoston kaksoisnapsauttaminen avaa sen ModelCraftissa, ja niin tekee myös **Avaa sovelluksella** Collada-, OBJ-, glTF-, DWG- tai DXF-tiedostolle (se tuodaan uuteen malliin).
:::

### Tallenna malli

Napsauta {{ui:Tallenna}} tai paina {{key:Mod+S}}. Selain lataa tiedoston `<name>.modelcraft`, missä nimi on avaamasi tiedoston nimi, tai ”Untitled” uudelle mallille.

:::desktop
Työpöytäsovelluksessa {{ui:Tallenna}} kirjoittaa avaamasi tiedoston paikalleen. Uusi malli kysyy, minne tallentaa.
:::

- {{ui:Tallenna muodossa}} ({{key:Mod+Shift+S}}) tallentaa kopion `.modelcraft`-tiedostona tai [USD:na](topic:usd). Missä selain sen sallii, se kysyy nimen ja paikan. Muuten nimeä ladattu tiedosto uudelleen: seuraava tallennus, kun olet avannut uudelleen nimetyn tiedoston, käyttää uutta nimeä.
- Jokainen tallennus on uusi lataus. Selaimen asetuksista riippuen se menee suoraan latauskansioosi tai kysyy, minne tallentaa. Jos tiedosto nimellä on jo siellä, useimmat selaimet lisäävät numeron, kuten `Untitled (1).modelcraft`.

:::chromium
Valitaksesi kansion joka kerta, avaa selaimen asetukset, hae ”downloads” ja kytke päälle ”Kysy, mihin kukin tiedosto tallennetaan ennen lataamista”.
:::

:::firefox
Valitaksesi kansion joka kerta, avaa **Asetukset**, sitten **Yleiset**, ja kohdassa ”Lataukset” valitse ”Kysy aina, mihin tiedostot tallennetaan”.
:::

:::safari
Muuttaaksesi latausten kohdetta avaa **Safari**, sitten **Asetukset**, sitten **Yleiset**, ja aseta ”Tiedostojen latauskansio”.
:::

### Aloita uusi malli

Valitse {{ui:Uusi}}. Jos on tallentamattomia muutoksia, ModelCraft kysyy ensin. Uusi malli alkaa tyhjänä, paikallisessa yksikössäsi (Yhdysvalloissa jalkoina ja tuumina, muualla millimetreinä), ilman kohtauksia.

### Jos selain sulkeutuu ennen tallentamista

ModelCraft säilyttää kopion tallentamattomasta työstä selaimessasi muutaman sekunnin ajan jokaisen muutoksen jälkeen. Kopio kirjoitetaan taustalla, joten suuri malli ei hidasta sinua. Jos välilehti tai selain sulkeutuu ennen tallentamista, seuraavalla avauskerralla ModelCraft kysyy: ”Palautetaanko työsi?”. Palauttaminen avaa mallin sellaisena kuin se oli, mutta ei vielä tallennettuna tiedostoksi: tallenna se säilyttääksesi sen. Katso [Palauta työsi](common:recover).

### CadCraftista: Avaa ModelCraftissa

CadCraft-piirrosohjelmassa **Näytä**, sitten **Lisää**, sitten **Avaa ModelCraftissa** siirtää avoimen piirustuksen ModelCraftille uudessa välilehdessä DWG-tiedostona. Se saapuu kuten tuotu DWG: viivat maassa, ryhmässä, valmiina mallinnettavaksi. Mitään ei lähetetä; tiedosto kulkee selaimesi oman tallennustilan kautta.

## Tuonti

Tuonti lisää tiedoston avoimeen malliin; se ei korvaa sitä.

1. Valitse {{ui:Tiedosto}}-ryhmästä {{ui:Tuo}} tai pudota tiedosto 3D-näkymään.
2. Valitse SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- tai DXF-tiedosto.

   Tiedosto saapuu **yhtenä ryhmänä**, valittuna, ja näkymä zoomaa näyttämään sen. Tilarivi kertoo, mitä saapui, ja luettelee tuomatta jääneet asiat, kuten ”Ei tuotu: 2 tekstuuria”.

3. Jos haluat työstää sen geometriaa suoraan, kaksoisnapsauta ryhmää muokataksesi sen sisällä tai napsauta {{ui:Hajota}}.

Muutamia asioita:

- **Koko ja ylöspäin suunta:** Collada-tiedostot kertovat yksikkönsä ja sen, mikä akseli on ylhäällä, ja ModelCraft muuntaa ne. glTF on aina metreissä. OBJ-tiedostoissa ei ole yksikköä: ModelCraft lukee ne metreinä, Y ylöspäin. Jos OBJ tulee 1000 kertaa liian suurena tai pienenä, käytä [Skaalaa](topic:rotate-scale)-työkalua kertoimella kuten `0.001` tai `1000`.
- **DWG ja DXF** tulevat sisään viivoina (reunoina) maassa, ei pintoina. Jos piirustus ei kerro yksikköään, ikkuna nimeltä ”Piirustuksen yksiköt” kysyy, mikä yksi piirustusyksikkö on. Katso [Mallinna asemapiirroksen päälle](topic:site-plan).
- **Rajat:** yli 300 MB:n tiedostot hylätään tuonnissa ja yli 200 MB:n avauksessa. Tiedostot, joissa on yli 2 miljoonaa kärkeä tai pintaa, hylätään liian suurina. OBJ yli 64 MB:n kokoisena hylätään ennen lukemista. Tekstitiedostot (Collada, OBJ, ASCII STL, USD-teksti) luetaan kerrallaan, noin 4 MB:n paloissa, joten mikään yksittäinen tekstilohko ei pidä koko tiedostoa; 16 MB:n OBJ käytti testissämme noin 0.5 GB muistia avautuessaan.

## Vienti

1. Valitse {{ui:Tiedosto}}-ryhmästä {{ui:Vie}}.
2. Valitse muoto: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL tulostusta varten (.stl, millimetreinä)}}, {{ui:PLY väreillä (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC BimCraftille (.ifc)}}, {{ui:DWG CAD-ohjelmalle (.dwg, 2004)}} tai {{ui:DXF CAD-ohjelmalle (.dxf, R12)}}.

Selain lataa tiedoston, nimettynä mallin mukaan. Vientiin tulee koko malli, ei vain valinta. glTF-, Collada- ja OBJ-tiedostot kirjoitetaan taustalla, joten ModelCraft toimii edelleen suuren mallin viedessä; lataus alkaa, kun tiedosto on valmis. Tyhjää mallia ei viedä: ”Malli on tyhjä: piirrä ensin jotain.” Katso [Vie malli muille ohjelmille](topic:export-model).

## Verkossa ja offline-tilassa

ModelCraft toimii kokonaan tietokoneellasi, joten mallinnus, avaaminen, tallentaminen, tuonti ja vienti toimivat ilman yhteyttä, kun sovellus on ladattu.

Avataksesi ModelCraftin ilman yhteyttä lainkaan, tallenna se offline-käyttöön yhteyden ollessa:

1. Napsauta {{ui:Tallenna offline-käyttöön}} sovelluspalkin yläreunassa.
2. Painike laskee tallentaessaan (”Tallennetaan 40/212”). ModelCraft tallentaa omat tiedostonsa (myös DWG-lukijansa), tämän ohjeen ja 3D-kirjaston, joten se voi kestää hetken.
3. Kun painike näyttää {{ui:Offline valmis}}, ModelCraft avautuu samasta osoitteesta ilman yhteyttä, ja DWG-tuonti toimii myös offline-tilassa.

Napsauta {{ui:Offline valmis}} myöhemmin valitaksesi {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}}. Jos painike näyttää {{ui:Tallennus ei onnistunut}}, osa tiedostoista ei latautunut: tarkista yhteys ja napsauta painiketta uudelleen. {{ui:Offline ei käytettävissä}} tarkoittaa, että tämä selainikkuna ei voi säilyttää kopiota (yksityiset ikkunat ja jotkin hallinnoidut tietokoneet). Katso [Työskentely offline-tilassa](common:offline).

Pilvitallennus ei ole vielä käytettävissä. Jokainen malli on siellä, minne tallennat sen.

:::offline
Olet offline-tilassa. Voit jatkaa mallintamista ja tallentamista. Ellei sovelluspalkki näytä {{ui:Offline valmis}}, älä lataa tätä välilehteä uudelleen ennen kuin olet taas yhteydessä.
:::

## Työpöytäsovellus

:::desktop
Käytät ModelCraftia CadCraft Studiossa, työpöytäsovelluksessa, jossa ovat kaikki kahdeksan sovellusta. Tiedostot avautuvat ja tallentuvat paikkaan, jonka valitset.
:::

:::web
ModelCraft toimii selaimessa Macilla, Windowsilla ja Linuxilla sekä CadCraft Studiossa, työpöytäsovelluksessa, jossa ovat kaikki kahdeksan sovellusta yhdessä asennuksessa, osoitteesta getcadcraft.com/download.
:::
