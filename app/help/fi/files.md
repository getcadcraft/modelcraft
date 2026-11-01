---
title: Avaaminen, tallennus, tuonti ja vienti
summary: ModelCraft-tiedosto, mitä voit tuoda ja viedä, minne tiedostot päätyvät ja mikä muuttuu offline-tilassa ja selainten välillä.
keywords: avaa, tallenna, tuo, vie, tiedosto, 3dm, skp, palauta, automaattinen tallennus, viimeisimmät, työpöytä, avaa 3D:ssä, siirto, lataa, modelcraft-tiedosto, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, muodot, offline, tallenna nimellä
from: 0b4896d1
---

ModelCraft lukee ja kirjoittaa tiedostoja tietokoneellasi. Mitään ei lähetetä minnekään: avaamasi tiedosto luetaan selaimen sisällä ja tallentamasi tiedosto on lataus. Katso [Minne tiedostosi päätyvät](common:your-files).

## Muodot yhdellä silmäyksellä

| Muoto | Avaa | Tuo | Vie | Mihin se sopii |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | kyllä | ei | {{ui:Tallenna}} | Työtiedostosi. Säilyttää kaiken. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | kyllä | kyllä | {{ui:Tallenna nimellä}}, {{ui:Vie}} | Renderöinti- ja näyttämökokoonpanoohjelmat. ModelCraftin oma USD säilyttää kaiken. Katso [USD:n tallennus, avaaminen ja vienti](topic:usd). |
| SketchUp (`.skp`) | ei | kyllä | ei | Mallien tuonti SketchUpista. Säilyttää ryhmät, komponentit, värit, pintojen tekstuurit, tunnisteet ja pehmeät särmät. Katso [SKP-mallin tuonti](topic:import-sketchup-files). |
| Collada (`.dae`) | ei | kyllä | kyllä | Mallien vaihto muiden 3D-mallinnusohjelmien kanssa. Säilyttää ryhmät, komponentit ja värit. |
| OBJ (`.obj`) | ei | kyllä | kyllä | Renderöinti- ja visualisointiohjelmat. |
| glTF (`.glb`, `.gltf`) | ei | kyllä | vain `.glb` | Verkkokatselimet, pelimoottorit, AR. |
| STL (`.stl`) | ei | kyllä | kyllä | 3D-tulostus (millimetreinä). |
| PLY (`.ply`) | ei | kyllä | kyllä | Värilliset verkot: skannaukset, väritulostus. |
| FBX (`.fbx`) | ei | kyllä | ei | Mallit animaatio- ja peliohjelmista (FBX 2011 ja uudemmat). |
| Alembic (`.abc`) | ei | kyllä | ei | Geometriavälimuistit ensimmäisenä näytteenään. |
| STEP (`.step`, `.stp`) | ei | kyllä | ei | Osat osamallintajista ja toimittajilta suljettuina verkkoina todellisessa koossaan. Katso [Tiedostomuodot](topic:formats). |
| `.3dm` | ei | kyllä | ei | NURBS-mallit: monipintakappaleet, verkot, käyrät, lohkot ja tasot verkkoina, särminä, komponentteina ja tunnisteina. Katso [.3dm-mallin tuonti](topic:import-3dm-files). |
| 3MF (`.3mf`) | ei | ei | kyllä | 3D-tulostus väreillä (millimetreinä). Kohdasta {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}: katso [Mallin valmistelu 3D-tulostukseen](topic:print-3d). |
| IFC (`.ifc`) | ei | ei | kyllä | BIM-ohjelmat ja BimCraft. |
| DWG (`.dwg`) | ei | kyllä | kyllä | Asemapiirros tai pohjakuva, jonka päälle mallinnetaan; mallin lähettäminen CAD-ohjelmaan. |
| DXF (`.dxf`) | ei | kyllä | kyllä | Sama, mille tahansa CAD-ohjelmalle. |

[Tiedostomuodot tarkemmin](topic:formats) luettelee täsmälleen, mitä kukin muoto säilyttää ja mitä se jättää pois.

## ModelCraft-tiedosto

`.modelcraft`-tiedosto säilyttää koko mallin: geometrian, ryhmät, komponentit, apuviivat, näkymät, yksiköt sekä kameran ja tyylin, joita käytit tallentaessasi. Se ei säilytä kumoamishistoriaa.

### Mallin avaaminen

1. Napsauta {{ui:Avaa}} {{ui:Tiedosto}}-ryhmässä tai paina {{key:Mod+O}}.
2. Jos näytöllä olevassa mallissa on tallentamattomia muutoksia, ModelCraft kysyy: ”Tässä mallissa on tallentamattomia muutoksia. Tallennetaanko ensin kopio?” Valitse {{ui:Tallenna kopio}}, {{ui:Hylkää muutokset}} tai {{ui:Peruuta}}.
3. Valitse `.modelcraft`-tiedosto.

Malli avautuu yksiköissä, joissa se tallennettiin, ja kameralla, jolla se tallennettiin. Voit myös pudottaa `.modelcraft`-tiedoston 3D-näkymään tai napsauttaa sellaista aloituskortin viimeisimpien tiedostojen luettelosta (selaimissa, jotka voivat avata tiedoston uudelleen, ja työpöytäsovelluksessa).

:::desktop
Työpöytäsovelluksessa `.modelcraft`-tiedoston kaksoisnapsautus avaa sen ModelCraftissa, samoin **Avaa ohjelmalla** Collada-, OBJ-, glTF-, DWG- tai DXF-tiedostolle (se tuodaan uuteen malliin).
:::

### Mallin tallennus

Napsauta {{ui:Tallenna}} tai paina {{key:Mod+S}}. Selain lataa tiedoston `<name>.modelcraft`, jossa nimi on avaamasi tiedoston nimi tai ”Untitled” uudelle mallille.

:::desktop
Työpöytäsovelluksessa {{ui:Tallenna}} kirjoittaa avaamasi tiedoston paikallaan. Uusi malli kysyy, minne se tallennetaan.
:::

- {{ui:Tallenna nimellä}} ({{key:Mod+Shift+S}}) tallentaa kopion `.modelcraft`-tiedostona tai [USD](topic:usd)-muodossa; kun selain voi, se kysyy nimen ja paikan. Muuten nimeä ladattu tiedosto uudelleen: seuraava tallennus sen jälkeen, kun avaat uudelleennimetyn tiedoston, käyttää uutta nimeä.
- Jokainen tallennus on uusi lataus. Selaimen asetuksista riippuen se menee suoraan latauskansioosi tai kysyy, minne tallennetaan. Jos samanniminen tiedosto on jo siellä, useimmat selaimet lisäävät numeron, esimerkiksi `Untitled (1).modelcraft`.

:::chromium
Jos haluat valita kansion joka kerta, avaa selaimen asetukset, hae sanalla ”lataukset” ja ota käyttöön ”Kysy aina, minne tiedostot tallennetaan ennen lataamista”.
:::

:::firefox
Jos haluat valita kansion joka kerta, avaa **Asetukset**, sitten **Yleiset**, ja kohdassa ”Tiedostot ja sovellukset” valitse ”Kysy aina, minne tiedostot tallennetaan”.
:::

:::safari
Muuttaaksesi sitä, minne lataukset menevät, avaa **Safari**, sitten **Asetukset**, sitten **Yleiset**, ja aseta ”Tiedostojen latauspaikka”.
:::

### Uuden mallin aloittaminen

Napsauta {{ui:Uusi}}. Jos on tallentamattomia muutoksia, ModelCraft kysyy ensin. Uusi malli alkaa tyhjänä maa-asetuksesi mukaisessa yksikössä (jalat ja tuumat Yhdysvalloissa, millimetrit muualla) ja ilman näkymiä.

### Jos selain sulkeutuu ennen tallennusta

ModelCraft säilyttää kopion tallentamattomasta työstä selaimessasi pari sekuntia jokaisen muutoksen jälkeen. Jos välilehti tai selain sulkeutuu ennen tallennusta, ModelCraft kysyy seuraavalla avauskerralla ”Palautetaanko työsi?”. Palautus avaa mallin sellaisena kuin se oli, ei vielä tallennettuna tiedostoon: tallenna se säilyttääksesi sen. Katso [Työsi palauttaminen](common:recover).

### CadCraftista: Avaa ModelCraftissa

CadCraft-piirto-ohjelmassa **Näytä**, sitten **Lisää**, sitten **Avaa ModelCraftissa** välittää avoimen piirustuksen ModelCraftille uudessa välilehdessä DWG-tiedostona. Se saapuu samalla tavalla kuin tuotu DWG: viivoina maassa, ryhmässä, valmiina mallinnettavaksi. Mitään ei lähetetä minnekään; tiedosto kulkee selaimesi oman tallennustilan kautta.

## Tuonti

Tuonti lisää tiedoston avoinna olevaan malliin; se ei korvaa sitä.

1. Napsauta {{ui:Tuo}} {{ui:Tiedosto}}-ryhmässä tai pudota tiedosto 3D-näkymään.
2. Valitse SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- tai DXF-tiedosto.

   Tiedosto saapuu **yhtenä ryhmänä**, valittuna, ja näkymä zoomaa näyttämään sen. Tilarivi kertoo, mitä tuli sisään, ja luettelee kaiken, mitä ei voitu tuoda, esimerkiksi ”Ei tuotu: 2 texture”.

3. Jos haluat työstää sen geometriaa suoraan, kaksoisnapsauta ryhmää muokataksesi sen sisällä tai napsauta {{ui:Hajota}}.

Hyvä tietää:

- **Koko ja ylösuunta:** Collada-tiedostot kertovat yksikkönsä ja sen, mikä akseli on ylös, ja ModelCraft muuntaa ne. glTF on aina metreinä. OBJ-tiedostoissa ei ole yksikköä: ModelCraft lukee ne metreinä, Y ylöspäin. Jos OBJ tulee 1000 kertaa liian suurena tai pienenä, käytä [Skaalaa](topic:rotate-scale)-työkalua kertoimella, kuten `0.001` tai `1000`.
- **DWG ja DXF** tulevat viivoina (särminä) maahan, eivät pintoina. Jos piirustus ei kerro yksikköään, ”Piirustusyksiköt”-niminen valintaikkuna kysyy, mikä yksi piirustusyksikkö on. Katso [Mallinnus asemapiirroksen päälle](topic:site-plan).
- **Rajat:** yli 300 MB:n tiedostot hylätään tuonnissa ja yli 200 MB:n avaamisessa. Tiedostot, joissa on yli 2 miljoonaa kärkipistettä tai pintaa, hylätään liian suurina.

## Vienti

1. Napsauta {{ui:Vie}} {{ui:Tiedosto}}-ryhmässä.
2. Valitse muoto: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL tulostusta varten (.stl, millimetreinä)}}, {{ui:PLY väreillä (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC BimCraftille (.ifc)}}, {{ui:DWG CAD-ohjelmalle (.dwg, 2004)}} tai {{ui:DXF CAD-ohjelmalle (.dxf, R12)}}.

Selain lataa tiedoston, joka on nimetty mallin mukaan. Koko malli viedään, ei vain valinta. Tyhjää mallia ei viedä: ”Malli on tyhjä: piirrä ensin jotain.” Katso [Mallin vienti muille ohjelmille](topic:export-model).

## Online ja offline

Kaikki ModelCraftissa toimii tietokoneellasi, joten mallinnus, avaaminen, tallennus, tuonti ja vienti toimivat kaikki ilman yhteyttä, kun sovellus on kerran ladattu.

Jos haluat avata ModelCraftin täysin ilman yhteyttä, tallenna se offline-käyttöön, kun olet online:

1. Napsauta {{ui:Tallenna offline-käyttöön}} ylhäällä olevassa sovelluspalkissa.
2. Painike laskee ylöspäin (”Tallennetaan 40 / 212”) tallennuksen aikana. ModelCraft tallentaa omat tiedostonsa (muun muassa DWG-lukijansa), tämän ohjeen ja 3D-kirjaston, joten siihen voi mennä hetki.
3. Kun painikkeessa lukee {{ui:Offline valmis}}, ModelCraft avautuu samasta osoitteesta ilman yhteyttä, ja DWG-tuonti toimii myös offline.

Napsauta myöhemmin {{ui:Offline valmis}} saadaksesi {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}}. Jos painikkeessa lukee {{ui:Tallennus ei onnistunut}}, kaikkia tiedostoja ei ladattu: tarkista yhteys ja napsauta sitä yrittääksesi uudelleen. {{ui:Offline ei käytettävissä}} tarkoittaa, että tämä selainikkuna ei voi säilyttää kopiota (yksityiset ikkunat ja jotkin hallitut tietokoneet). Katso [Offline-työskentely](common:offline).

Pilvitallennus ei ole vielä käytettävissä. Jokainen malli on siellä, minne sen tallennat.

:::offline
Olet offline. Voit jatkaa mallinnusta ja tallennusta. Ellei sovelluspalkissa lue {{ui:Offline valmis}}, älä lataa tätä välilehteä uudelleen ennen kuin olet taas online-tilassa.
:::

## Työpöytäsovellus

:::desktop
Käytät ModelCraftia CadCraft Studiossa, työpöytäsovelluksessa, jossa on kaikki kahdeksan sovellusta. Tiedostot avataan ja tallennetaan sinne, minne valitset.
:::

:::web
ModelCraft toimii selaimessa Macilla, Windowsissa ja Linuxissa sekä CadCraft Studiossa, työpöytäsovelluksessa, jossa kaikki kahdeksan sovellusta ovat yhdessä asennuksessa, osoitteesta getcadcraft.com/download.
:::
