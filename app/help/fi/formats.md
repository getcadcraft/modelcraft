---
title: Tiedostomuodot yksityiskohtaisesti
summary: Tarkalleen, mitä kukin ModelCraftin avaama, tuoma ja viemä muoto säilyttää, muuntaa ja jättää pois.
keywords: tiedostomuodot, tiedostotyypit, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, välimuisti, fbx, 3mf, ifc, dwg, dxf, yksiköt, akselit, Y ylös, Z ylös, millimetrit, rajat
from: c47d2d28
---

ModelCraftin malli on metreissä, ja Z (sininen) on ylös. Jokainen alla oleva muoto muunnetaan tähän tai tästä.

## ModelCraft (.modelcraft)

| Mitä | Tiedot |
|---|---|
| Avaa | {{ui:Avaa}} ({{key:Mod+O}}) tai pudota näkymään. Myös `.json`-päätteiset tiedostot hyväksytään |
| Tallenna | {{ui:Tallenna}} ({{key:Mod+S}}), latauksena |
| Säilyttää | Kaiken: geometrian, pinnat ja niiden värit, materiaalit ja tuodut tekstuurit, lamput, pehmeät särmät, ryhmät, komponentit, nimet, apuviivat, näkymät, yksiköt sekä viimeisen kameran ja tyylin |
| Jättää pois | Kumoamishistorian |
| Raja | 200 Mt |

Uudemmalla ModelCraftilla tallennettu tiedosto, joka on uudempi kuin omasi, hylätään: "Tämä malli on tallennettu uudemmalla ModelCraftilla (tiedostoversio …). Päivitä ModelCraft avataksesi sen." Tiedosto, joka ei ole ModelCraft-malli, ilmoittaa: "Tämä tiedosto ei ole ModelCraft-malli (se ei ole JSON)." tai "Tätä ei voi avata ModelCraftilla: …".

## USD (.usd, .usda, .usdc, .usdz)

Avaa, tuo sekä {{ui:Tallenna muodossa}} tai {{ui:Vie}} › {{ui:USD (.usda, .usdc, .usdz)…}}. ModelCraftin tallentama USD-tiedosto avautuu uudelleen ilman menetyksiä; muiden ohjelmien USD-tiedostot avautuvat verkkoina, ryhminä, komponentteina, lampuina ja kameroina. Katso [Tallenna, avaa ja vie USD](topic:usd).

## Collada (.dae)

Tuonti ja vienti. Paras muoto mallien vaihtoon muiden 3D-mallintajien kanssa.

- **Vienti:** Collada 1.4.1, Z ylös, metrit. Yksi geometria per ryhmä tai komponentin määritelmä; komponentit kirjoitetaan kerran ja sijoitetaan viittauksella, joten ne pysyvät jaettuina. Reiät tai kovera ääriviiva sisältävät pinnat jaetaan kolmioiksi. Värit muuttuvat materiaaleiksi. Irralliset särmät kirjoitetaan viivoina. Muodon kannalta virheelliset nimet mukautetaan, ja alkuperäinen nimi säilytetään sen rinnalla.
- **Tuonti:** kolmiot, monikulmiot (reikineen), kolmiokaaviot ja nauhat muuttuvat pinnoiksi; viivat muuttuvat särmiksi. Solmujen muunnokset, tiedoston ylöspäin oleva akseli ja sen yksikkö otetaan huomioon. Solmu, joka on sijoitettu useaan paikkaan, tai geometria, jota useat solmut käyttävät, tulee komponenttina; muut solmut tulevat ryhminä. Materiaalien värit (diffuusi) muuttuvat pinnan väreiksi.
- **Ei tuoda:** tekstuurit, luut ja muodonmuutokset, kamerat, valot, joitakin muunnostyyppejä (look-at ja vinous) sekä viittaukset muihin tiedostoihin. Tilarivi laskee ne.
- **Häviää viennissä:** se, mitkä särmät ovat pehmeitä. **Tuonnissa** kolmioiduksi jaetut pinnat pysyvät kolmioina, ja lävistäjät pehmennetään, jotta tasaiset alueet näkyvät yhtenäisinä pintoina.

## OBJ (.obj, .mtl)

Tuonti ja vienti.

- **Tuonti:** pudota `.obj` yhdessä sen `.mtl`-tiedoston ja tekstuurikuvien kanssa (tai tuo `.obj` yksin: se tulee ilman materiaaleja, ja tilarivi kertoo, mitä `.mtl`-tiedostoa se halusi). Luetaan metreinä, Y ylös. Jokainen kohde (`o`, muuten `g`) muuttuu [verkoksi](topic:meshes), ja sen pinnat säilyvät sellaisinaan (nelikulmiot pysyvät nelikulmioina). Tekstuurikoordinaatit, normaalit ja kulmakohtaiset värit säilyvät. Materiaalin värikuva (`map_Kd`, PNG, JPEG tai WebP) tulee tekstuurina, sen mittakaava ja siirtymäasetuksineen; muuten käytetään sen väriä (`Kd`). Särmät, joissa tiedoston normaalit katkeavat, ovat kovia; ilman normaaleja tiedoston tasoitusryhmät ratkaisevat. Muut kartat (kuoppa, normaali), pisteet, viivat ja käyrät lasketaan ja jätetään pois. OBJ:ssä ei ole yksikköä, joten millimetreissä tai tuumissa tehty malli tulee väärään kokoon: skaalaa se tuonnin jälkeen (katso [Kierrä ja skaalaa](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Vienti:** metrit, Y ylös, maailmankoordinaatit. Yksi kohde per ryhmän sijoitus; komponentit kirjoitetaan kokonaisina jokaiseen sijoitukseen. Verkot säilyttävät omat pintansa, tekstuurikoordinaattinsa ja normaalinsa; [pehmeillä särmillä](topic:soften) yhdistetyt pinnat saavat normaalin jokaiseen kulmaan. Kun mallissa on värejä, `.mtl` ladataan `.obj`-tiedoston viereen. Kun siinä on tuotuja tekstuureja, `.obj`, `.mtl` ja kuvat ladataan yhdessä yhtenä `.zip`-tiedostona.
- **Raja:** 2 miljoonaa kärkeä tai pintaa; 64 Mt tekstiä.

## glTF (.glb, .gltf)

Tuonti ja vienti, glTF 2.0.

- **Tuonti:** `.glb`, tai `.gltf` yhdessä sen `.bin`- ja tekstuuritiedostojen kanssa: pudota ne näkymään kaikki kerralla (tai valitse `.glb`). Yksin annettu `.gltf` kertoo tarvitsemansa tiedoston: "Tämä .gltf-tiedosto tarvitsee tiedoston "…": avaa .glb-versio tai pudota .gltf yhdessä sen tiedostojen kanssa."
  - **Verkot** tulevat [verkkoina](topic:meshes), yksi jokaista tiedoston verkkoa kohti, ja tiedoston normaalit, tekstuurikoordinaatit ja kulmavärit säilyvät. Särmät, joissa tiedoston normaalit katkeavat, ovat kovia; muut ovat pehmeitä. Useassa paikassa käytetty verkko pysyy jaettuna.
  - **Solmut** muuttuvat ryhmiksi, nimettyinä kuten tiedostossa. Instanssoidut verkot (EXT_mesh_gpu_instancing) tulevat yhtenä verkkona, joka on sijoitettu monta kertaa.
  - **Materiaalit:** peruspohjavärin tekstuuri (PNG, JPEG tai WebP) tulee tekstuurina, sijoitettuna tiedoston tekstuurikoordinaattien mukaan (tekstuurimuunnoksineen), ja se säilyy tallennettaessa; muuten käytetään peruspohjaväriä. Metalli, karheus, normaalikartat, lasi, kirkas pinnoite, hohde ja muut materiaalilaajennukset luetaan mutta niitä ei vielä säilytetä: tilarivi kertoo siitä.
  - **Valot** (KHR_lights_punctual): piste- ja kohdevalot muuttuvat [lampuiksi](topic:lights). Suuntavalot lasketaan: aurinko valaisee mallin.
  - **Kamerat** muuttuvat [näkymiksi](topic:scenes).
  - **Luurankoanimoidut hahmot** tulevat lepoasennossaan; niiden luut ja animaatiot sekä muototavoitteet lasketaan eikä niitä vielä säilytetä.
  - **Pakatut tiedostot** (Draco, meshopt) ja kvantisoitu data luetaan. Dekooderit latautuvat vain tiedostolle, joka niitä tarvitsee.
  - Pisteet ja viivat lasketaan ja jätetään pois (verkko sisältää pintoja). KTX2-tekstuurit jätetään pois; pinnat säilyttävät värinsä.
- **Vienti** (`.glb`): glTF 2.0 -binääri, metrit, Y ylös. Yksi verkko per määritelmä, joten komponentit pysyvät jaettuina. Verkot säilyttävät normaalinsa, tekstuurikoordinaattinsa ja kulmavärinsä; [pehmeillä särmillä](topic:soften) yhdistetyt pinnat kantavat tasoitettuja normaaleja. Värit ja materiaalit muuttuvat materiaaleiksi (materiaali värinsä mukaan); tuodut tekstuurit kirjoitetaan tekstuureina. Päällä olevat lamput muuttuvat piste- ja kohdevaloiksi (aluevaloilla ei ole glTF-vastinetta, joten ne jätetään pois); näkymät muuttuvat kameroiksi. Irralliset särmät jätetään pois.
- **Raja:** tiedostot enintään 300 Mt; noin 130 miljoonaa geometrialukua.

## STL (.stl)

Tuonti ja vienti.

- **Tuonti:** binäärinen tai ASCII. STL:ssä ei ole yksikköä: se luetaan **millimetreinä**, samoin kuin tulostimet ja ModelCraftin oma vienti sen kirjoittavat. Saman pisteen kulmat yhdistetään, joten suljettu osa tulee suljettuna [verkkona](topic:meshes). Tiedoston värit (VisCAM / SolidView- ja Materialise-käytännöt) maalaavat pinnat.
- **Vienti** 3D-tulostusta varten: binäärinen STL, **millimetrit**, Z ylös. Vain kolmiot: ryhmät ja irralliset särmät jätetään pois. Maalatut pinnat kantavat värinsä VisCAM / SolidView -käytännön mukaan, jonka muut ohjelmat jättävät huomiotta, jos eivät lue sitä. Vie suljetut kiintokappaleet puhtaan tulostuksen varmistamiseksi.

## STEP (.step, .stp)

Vain tuonti. STEP on sitä, mitä osamallintajat ja toimittajat lähettävät: AP203-, AP214- ja AP242-tiedostot.

- **Tuonti:** ModelCraft lukee tiedoston itse sivulla ja muuttaa jokaisen kiintokappaleen suljetuksi [verkoksi](topic:meshes), joka koostuu kolmioista: tasaiset pinnat pysyvät tasaisina, kaarevat pinnat (sylinterit, kartiot, pallot, toruksit, B-spline-pinnat) muuttuvat monista pienistä tasaisista pinnoista, joissa yhden kaarevan pinnan sisäiset särmät ovat pehmeitä ja kahden pinnan väliset terävinä. STEP-tiedostot kertovat yksikkönsä; malli tulee oikeaan kokoonsa. Kokoonpano tulee niin, että jokainen osa on siinä, minne tiedosto sen sijoittaa, ja jokainen osa on oma verkkonsa ryhmässä, joka on nimetty tiedoston mukaan. Värejä, kokoonpanopuun osanimiä ja toleransseja (PMI) ei lueta.
- **Viestit:** mikä jätettiin väliin tai piirrettiin karkeammin, lisätään tilariville ("Huomautukset: …"); tiedosto ilman kiintokappaletta, vaurioitunut tiedosto tai rajat ylittävä tiedosto kertoo syyn eikä lisää mitään.
- **Raja:** tiedostot enintään 300 Mt; 400 000 pintaa ja 8 miljoonaa kolmiota.

## .3dm

Vain tuonti. `.3dm`-tiedostot sisältävät NURBS-malleja: polypintoja, pintoja, verkkoja, käyriä ja lohkoja.

- **Tuonti:** ModelCraft lukee tiedoston itse sivulla. Verkot tulevat sellaisinaan; jokainen polypinnan tai pursotuksen pinta tulee tiedostoon tallennetusta renderöintiverkosta, muuten ModelCraft jakaa sen kolmioiksi (tasot, NURBS-pinnat, pyörähdyspinnat, pursotetut käyrät, pursotukset; reunojensa rajaamina, suljetut polypinnat suljettuina verkkoina). Käyrät muuttuvat särmiksi, lohkot komponenteiksi (lohkot lohkojen sisällä säilyvät), tasot tageiksi (piilotettuina, kun ne ovat pois päältä), ja kohteen väri (oma, tasonsa tai materiaalinsa) maalaa sen pinnat. Tiedosto kertoo yksikkönsä; malli tulee oikeaan kokoonsa. Vaiheittain: [Tuo .3dm-malli](topic:import-3dm-files).
- **Viestit:** tilarivi kertoo, kuinka monta pintaa tuli tallennetuista verkoista ja kuinka monta jaettiin kolmioiksi, ja nimeää, mitä jätettiin pois: pisteet, pistepilvet, teksti, mitoitukset, täytöt, valot, SubD-kohteet, pinnat pintalajeilla, joita ei vielä lueta, linkitetyt lohkot.
- **Raja:** tiedostot enintään 300 Mt.

## PLY (.ply)

Tuonti ja vienti, värillisille verkoille (skannaukset, värillinen 3D-tulostus, muut mallintajat).

- **Tuonti:** ASCII ja binääri. Pinnat muuttuvat [verkoksi](topic:meshes), jonka normaalit, tekstuurikoordinaatit ja kulmavärit säilyvät; jokainen pinta maalataan lähimmällä 4 096 värin joukosta, jotta näet värit heti. PLY:ssä ei ole yksikköä eikä akselikäytäntöä: koordinaatit tulevat sellaisinaan (metrit, Z ylös). Pelkkä pisteitä sisältävä PLY on pistepilvi: avaa se BimCraftissa tai CivilCraftissa.
- **Vienti:** binäärinen PLY, jossa on sijainnit, normaalit ja värit (ja tekstuurikoordinaatit, kun mallissa on niitä), metreinä, Z ylös.

## FBX (.fbx)

Vain tuonti. FBX 7 -tiedostot (vuodesta 2011 alkaen), binäärinä tai ASCII, luetaan ModelCraftin omalla lukijalla.

- Verkot tulevat [verkkoina](topic:meshes) normaaleineen, tekstuurikoordinaatteineen (jokainen UV-joukko) ja kulmavärineen; verkko, jota useat kohteet käyttävät, pysyy jaettuna. Kohteet muuttuvat ryhmiksi muunnoksineen (pivot, siirtymät ja esikierrot mukaan lukien).
- Materiaalit: diffuusitekstuuri (tiedostoon upotettu tai `.fbx`:n kanssa pudotettu kuva) tulee tekstuurina (TGA-kuvat säilytetään PNG:nä); muuten diffuusiväri. Muut materiaaliasetukset odottavat uutta materiaalimallia.
- Tiedoston ylöspäin oleva akseli ja yksikkö otetaan huomioon: kaikki tulee Z ylös, metreinä.
- Piste- ja kohdevalot muuttuvat [lampuiksi](topic:lights) (FBX-intensiteetti 100 on ModelCraftin oletuslamppu, 800 luumenia; FBX-intensiteeteillä ei ole yksikköä). Kamerat muuttuvat [näkymiksi](topic:scenes).
- Luurankoanimoidut hahmot tulevat lepoasennossaan; luut ja animaatiot lasketaan eikä niitä vielä säilytetä. Suuntavalot ja aluevalot sekä muu geometria kuin verkot (NURBS, käyrät) lasketaan ja jätetään pois.
- FBX 6 ja sitä vanhemmat tiedostot hylätään: tallenna ne uudelleen FBX 2011:nä tai uudempana.

## Alembic (.abc)

Vain tuonti: animaatio- ja efektiohjelmien geometriavälimuistit.

- Verkot (polygoni- ja alijakoverkot) tulevat [verkkoina](topic:meshes), tekstuurikoordinaatteineen ja normaaleineen; muunnokset muuttuvat ryhmiksi. Alembic on Y ylös ja se käännetään Z ylös; metreinä.
- Monen näytteen välimuisti (animaatio) tulee ensimmäisestä näytteestä; tilarivi kertoo, kuinka monta näytettä sillä on.
- Pisteet, käyrät, NURBS-pinnat, kamerat ja valot lasketaan ja jätetään pois. Vanhan HDF5-asettelun tiedostot hylätään: tallenna ne uudelleen Ogawa Alembic -tiedostona.

{{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}} tarkistaa muodon ensin ja kirjoittaa valinnan tai kaiken näkyvän. Katso [Valmistele malli 3D-tulostukseen](topic:print-3d).

## 3MF (.3mf)

Vain vienti, kohdasta {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}. 3MF-ydin: yksi verkko **millimetreinä**, Z ylös, värit materiaaleina. Useimmat viipalointiohjelmat lukevat sen, ja toisin kuin STL, se kertoo yksikkönsä. Piilotetut asiat jätetään pois. Katso [Valmistele malli 3D-tulostukseen](topic:print-3d).

## DWG- ja DXF-vienti (.dwg, .dxf)

CAD-ohjelmille. Malli kirjoitetaan omassa yksikössään: tuumina jalka- ja tuumamalleille, muuten millimetreinä, senttimetreinä tai metreinä (tilarivi kertoo, mikä).

- **Pinnat** muuttuvat 3D-pinnoiksi (kolmioina). Pinnan sisällä olevat viivat ja pehmeät särmät kirjoitetaan näkymättöminä, joten pinnat näyttävät ModelCraftin pintojen kaltaisilta.
- **Irralliset särmät** muuttuvat viivoiksi.
- **Ryhmät ja komponentit** muuttuvat lohkoiksi: komponentti kirjoitetaan kerran ja sijoitetaan niin monta kertaa kuin sitä käytetään, mukaan lukien käännetyt ja peilatut kopiot. Ryhmä, joka venytettiin kääntämisen jälkeen (joten se on vino), kirjoitetaan sen sijaan paikalleen.
- **Värit:** DWG säilyttää jokaisen pinnan värin tarkalleen; DXF käyttää lähintä 255 CAD-vakiovärin väriä.
- **Versiot:** DWG kirjoitetaan AutoCAD 2004:nä (AC1018), jonka avaavat CAD-ohjelmat vuodesta 2004 alkaen. DXF on R12 (AC1009), jonka jokainen CAD-ohjelma lukee; R12:ssa ei ole yksikkökenttää, joten kerro CAD-ohjelmalle, mitä yksikköä käytetään.
- **Ei kirjoiteta:** apuviivat, mitoitukset, näkymät ja kamera.

## IFC (.ifc)

Vain vienti BimCraftille ja muille BIM-ohjelmille. IFC4, jossa on projekti, tontti, rakennus ja sen kerrokset. Jokainen ylimmän tason ryhmä tai komponentti muuttuu yhdeksi rakennusosan välityskohteeksi nimineen; suljetut kirjoitetaan kiinteinä muotoina (facetoituina breppeinä), avoimet pintamalleina; pintojen reiät säilyvät. Ylimmän tason irrallinen geometria muuttuu yhdeksi kohteeksi nimeltä "Loose geometry". Ei tyyppejä, ominaisuuksia tai materiaaleja.

**Kerrokset:** {{ui:Vie}} › {{ui:IFC-kerrokset…}} luettelee ne, jokaisella nimi ja korkeus ({{ui:Lisää kerros}}, tai {{ui:Arvaa mallin perusteella}}, joka tekee yhden kerroksen jokaiselle korkeudelle, jolla ylimmän tason ryhmät seisovat). Viennissä jokainen ryhmä tai komponentti menee kerrokselle, joka on sen alimman pisteen kohdalla tai sen alapuolella, ja säilyttää paikkansa. Ilman kerroksia kaikki menee yhdelle kerrokselle, "Level 1", korkeudessa 0. Kerrokset tallennetaan ModelCraft-tiedostoon.

## DWG (.dwg) ja DXF (.dxf)

Tuonti viivoina maahan (viivat ja 3D-pinnat pintoina); vienti kuten yllä on kuvattu. Katso [Mallinna asemapiirroksen päälle](topic:site-plan).

- **Luku:** viivat, polyviivat (kaarineen), 3D-polyviivat, ympyrät, kaaret ja lohkoviittaukset taulukoineen mukaan lukien, mallitilasta. Näkymättömät kohteet (kuten dynaamisen lohkon piilotetut tilat) jätetään pois. Käyrät muuttuvat 48 suoraksi osaksi täyttä kierrosta kohden.
- **Luku versiosta 0.4 alkaen:** splinet ja ellipsit (särmiksi), teksti, monirivinen teksti ja attribuuttiarvot (särmiksi yksiviivaisessa kirjoituksessa), täytöt (reikäisiksi pinnoiksi), 3D-pinnat ja kiinteät täytöt (pinnoiksi) sekä mitoitukset (piirretään piirustuksen omista mitoituslohkoista).
- **Luku versiosta 0.7 alkaen:** 3D-kiintokappaleet, alueet ja kappaleet (niiden ACIS-data, DWG ja DXF kaikista versioista), kukin omana ryhmänään, suljetut kiintokappaleina. Pinnat muilla kuin tasoilla, sylintereillä, kartioilla, palloilla, toruksilla ja yksinkertaisilla splinepinnoilla jätetään pois ja luetellaan.
- **Ei lueta:** pisteet, taulukot, monijohdot, kuvat ja kaikki paperitilassa.
- **Yksiköt:** otetaan piirustuksesta, kun se kertoo ne. Muuten ModelCraft kysyy.
- **DXF** on oltava ASCII. Binäärinen DXF hylätään.
- **DWG**-tiedostot AutoCAD R13:sta nykyiseen muotoon (AutoCAD 2018 ja uudemmat; AC1012–AC1032) luetaan ModelCraftin omalla DWG-lukijalla sivulla; se on osa ModelCraftia, joten se toimii offline aina kun ModelCraft toimii. Vanhemmat versiot (R12 ja sitä vanhemmat) sekä pahasti vaurioituneet tiedostot eivät ole luettavissa; tallenna ne DXF-muodossa.
- **Rajat:** koordinaatit, jotka ovat yli 10 000 km:n päässä origosta, tai yli 2 miljoonaa viivaosaa hylätään.

## SKP-tiedostot

{{ui:Tuo}} (tai pudota tiedosto näkymään) lukee SketchUp-tiedostot ModelCraftin omalla lukijalla sivulla: mitään ei lähetetä, ja se toimii offline aina kun ModelCraft toimii. Testattu tiedostoilla SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 ja 2026; muiden versioiden pitäisi myös avautua, mutta niitä ei ole vielä kokeiltu. Malli tulee yhtenä ryhmänä, jonka nimi on tiedoston mukaan. Yksi {{key:Mod+Z}} poistaa sen taas. Vaiheittain: [Tuo SKP-malli](topic:import-sketchup-files).

- **Säilyy:** pinnat reikineen, ryhmät (ryhminä) ja komponentit (komponentteina, jaettuina), niiden nimet ja sijoitukset, värit, tagit ryhmillä ja komponenteilla, särmät, jotka eivät kuulu pintaan, sekä pehmeät ja tasoitetut särmät, joten kaarevat pinnat pysyvät sileinä.
- **Värit:** pinnan oma materiaali antaa sen värin. Ryhmälle tai komponentille maalattu materiaali muuttuu kyseisen sijoituksen maalaukseksi, joten sisällä olevat pinnat, joilla ei ole omaa väriä, ottavat sen, kuten SketchUpissa; komponentti, joka on maalattu kahdella värillä, pysyy yhtenä komponenttina.
- **Tagit** ryhmillä ja komponenteilla muuttuvat ModelCraft-tageiksi ja näkyvät tai ovat piilossa niin kuin ennenkin. Irrallisten pintojen ja särmien tagit eivät säily (ModelCraft merkitsee vain ryhmiä ja komponentteja); tilarivi laskee ne.
- **Piilotetut asiat tulevat piilotettuina** (pinnat, särmät, ryhmät, komponentit sekä pinnat ja särmät piilotetulla tagilla), joten näet sen, mitä SketchUp näytti; {{ui:Näytä kaikki}} näyttää ne.
- **Tekstuurit:** tekstuurilla maalattu pinta säilyttää tekstuurinsa tiedoston mukaisesti sijoitettuna, ja ModelCraft-tiedosto säilyttää kuvan. Koko ryhmän tai komponentin tekstuuri, tiedostosta puuttuva tekstuuri tai kuva, jota selaimet eivät näytä (kuten Photoshop-tiedosto), säilyttää vain materiaalinsa värin.
- **Jätetään pois ja lasketaan tilarivillä:** malliin sijoitetut kuvat. Tekstiä, mitoituksia, apuviivoja, leikkaustasoja, näkymiä ja tyylejä ei lueta.
- **Yksiköt:** SketchUp-tiedostot ovat sisällään tuumina; ModelCraft muuntaa ne, joten koot tulevat oikein mihin tahansa yksikköön.
- **`.skp`-tallennus** ei ole toteutettu. Jos haluat viedä mallin takaisin SketchUpiin, vie Collada (`.dae`).

## Ei tuettu

ModelCraft ei voi avata 3DS- tai IFC-tiedostoja, eikä se voi tallentaa 3DS-, FBX-, STEP-, `.3dm`- tai SketchUp-tiedostoja (`.skp`).
