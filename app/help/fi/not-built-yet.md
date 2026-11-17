---
title: Ei vielä toteutettu
summary: Mitä tämä ModelCraftin versio ei vielä tee ja mitä voit tehdä sen sijaan tänään.
keywords: puuttuu, ei vielä, rajoitukset, tiekartta, materiaalit, tekstuurit, teksti, tasot, typistä, jaa, pilvi, työpöytä
from: 179fa5e4
---

ModelCraft on varhainen versio. Tämä sivu luettelee, mitä se ei vielä tee, jotta et etsi sitä turhaan, ja lähimmän tavan tehdä työ tänään.

## Piirtotyökalut

| Ei vielä | Sen sijaan tänään |
|---|---|
| Vapaa piirtäminen | Napsauta pisteitä työkalu {{ui:Curve}} |
| Kaaren tai ympyrän segmenttimäärän muuttaminen piirtämisen jälkeen | Poista se ja piirrä uudelleen kirjoitettuasi `24s` |
| Fontin valinta [3D-tekstille](topic:text3d) tai sen sanojen muokkaus sijoittamisen jälkeen | Poista se ja lisää teksti uudelleen |
| Kulman muuttaminen kirjoittamalla kulmamitoitukseen tai sylinterin koon muuttaminen ympyrän mitoituksesta | Kierrä reunoja työkalulla {{ui:Rotate}}; skaalaa sylinteri työkalulla {{ui:Scale}} |
| Mitoitukset viedyissä mallitiedostoissa | Mitoitukset näkyvät näkymän kuvissa, tulosteissa ja PDF-tiedostoissa; mallitiedostot sisältävät vain geometrian |
| Typistä, Jaa ja Ulkokuori | [Yhdiste, Vähennä ja Leikkaus](topic:solids) suljetuille ryhmille tai [leikkaa pinnat](topic:intersect) ja poista tarpeettomat |
| Kiertoakselin valinta nuolinäppäimillä | Napsauta työkalun {{ui:Rotate}} keskipistettä pinnalla, joka osoittaa suuntaan, johon akselin pitäisi osoittaa |
| Lukitukset useammalle kuin yhdelle päättelylle kerrallaan | Lukitse yksi suunta nuolinäppäimellä ja tartu sitten pisteeseen |
| Koon muuttaminen vinossa suunnassa tai mitoituksen päästä, joka ei ole kulmassa | Aseta mitoitus kahteen kulmaan, pitkin reunaa tai pitkin punaista, vihreää tai sinistä akselia |

## Animaatio

| Ei vielä | Sen sijaan tänään |
|---|---|
| Pintojen, reunojen, auringon vuorokaudenajan, tyylin tai piilotettujen kohteiden animointi | Tee liikkuvasta osasta ryhmä tai komponentti; renderöi erillinen video toiselle vuorokaudenajalle |
| Kamera, joka seuraa piirrettyä polkua tai katsoo liikkuvaa kohdetta | Aseta lisää kameran avainkehyksiä matkan varrelle ([Animoi](topic:animation)) |
| Ääni videoissa ja laadukkaat (path-traced) videot ilman WebGPU:ta | Lisää ääni videoeditorissa; ilman WebGPU:ta renderöi video nopealla renderöijällä ([Renderöi video](topic:animation#render-the-video)) |
| Animoidut lamput (kirkkaus, levitys, väri) renderöidyssä videossa, linssikulma animoituna ilman kameran avainkehyksiä videossa, materiaalien tai renderöintiasetusten animointi | Lamput animoituvat näkymässä; zoomausta varten videossa animoi myös kamera; renderöi erilliset videot eri lampun asetuksille ([Animoi mikä tahansa ominaisuus](topic:animate)) |
| Painojen tai luiden peilaus puolelta toiselle, näkyvät luiden verhokäyrät, painot varjostettuina pisteittäin (ne näkyvät pinnoittain), posatun verkon näkeminen painojen maalauksen aikana | Maalaa molemmat puolet tai tee yksi puolisko ja käytä Mirror-muokkainta ennen luurangon lisäämistä; vaihda Paint weights- ja Pose-tilojen välillä tarkistaaksesi |
| Luut glTF-, FBX- tai USD-tiedostoista luurankona ja luurankojen kirjoitus näihin tiedostoihin | Iholliset mallit tulevat lepoasennossa tiedoston painoilla; lisää luut tiedoston nivelten järjestyksessä ja valitse sitten {{ui:Use the file's weights}} ([Animoi](topic:animate)) |
| IK-kohteen tai navan siirtäminen vetämällä näkymässä, rajoitteen oma avaruus (paikallinen tai maailma), IK-ketjujen venyttäminen, IK käyrää pitkin | Kirjoita kohteen piste tai osoita kohteeseen ja siirrä sitä; pidä ketjut pituuksissaan |
| Kangas, nesteet, pehmeät kappaleet, nivelet ja saranat jäykkien kappaleiden välillä, törmäys kohteen tarkan muodon kanssa (vain laatikot ja pallot ympäröivät sitä), elävä simulaatio toiston aikana, lähtönopeus tai pyöriminen (kappaleet alkavat levosta) | Muunna jäykät kappaleet ja toista avainkehykset; tee sarana avainkehyksillä; jaa outo muoto laatikoiksi (ryhmiksi) |
| Animaation vieminen glTF- tai muihin mallitiedostoihin | Renderöi video; `.modelcraft`-tiedosto ja ModelCraftin tallentama [USD-tiedosto](topic:usd) säilyvät ModelCraftille |
| Kommentin tai otsikon kirjoitus ongelmalle VR:ssä, äänimuistiinpanot, leikkaustason siirtäminen käsin VR:ssä | Aseta ongelma VR:ssä ja lisää sen sanat BCF-ohjelmassa; aseta leikkaustaso näkymään ennen sisäänmenoa: katso [Tarkista malli VR-kuulokkeella](topic:vr-review) |
| Ihmisten näkeminen työpöydän ääressä VR:ssä (näkyvät vain VR:ssä olevat ihmiset), VR-kävelyn tallentaminen | Pyydä heitä liittymään VR:ään tai tee kävelystä [animaatio](topic:animation) |

## Verkot

| Ei vielä | Sen sijaan tänään |
|---|---|
| Veistäminen tasoittain (monitarkkuus) ja Detail, joka poistaa pieniksi käyneet kolmiot | [Veistä](topic:sculpt) jaettu verkko; {{ui:Remesh}} tasoittaaksesi sen uudelleen |
| Uudelleenverkotus nelikulmaisiksi pinnoiksi, jotka seuraavat muotoa | {{ui:Remesh}} (tasaiset kolmiot), rakenna sitten uudelleen [Retopologialla](topic:mesh-edit#retopology) |
| Pisteisiin maalatut painot muokkaimille (Displace, Smooth ja Shrinkwrap toimivat koko verkossa) | Käytä muokkainta, sitten veistä tai muokkaa osia, jotka sitä tarvitsevat |
| Pisteiden, reunojen tai pintojen kopiointi ja liittäminen, pinnan sisään päättyvä veitsileikkaus, pinnattomat langkanvat | Monista verkko mallissa; veitsi reunasta reunaan; [Pursota](topic:mesh-edit#change-the-shape) avoimet reunat pinnoiksi |

## Järjestäminen ja katselu

| Ei vielä | Sen sijaan tänään |
|---|---|
| DWG- ja DXF-pohjakuvien tasot tageina | Pohjakuva tulee yhtenä ryhmänä: pura se ja ryhmitä ne osat, jotka haluat tagata |
| Useat leikkaukset kerralla, leikkauslaatikko tai leikkauksen ääriviivan vienti piirustuksena | Yksi [leikkaustaso](topic:sections) leikkaa kerrallaan; vie näkymä kuvana |
| Pehmeiden reunojen katkoviivat tai pehmentäminen liukusäätimellä vedettäessä | [Pehmennä kulman mukaan](topic:soften) kohdassa Kohteen tiedot ja kumoa kokeillaksesi toista kulmaa |
| Verkkokirjasto hakuun tai komponentit valittavilla vaihtoehdoilla (väri, tyyli) | [Aloituskirjasto](topic:starter); tuo Collada-, OBJ- tai glTF-malleja; [venytä](topic:stretch) kopio sopivaan kokoon |
| Kasvien sijoittaminen kasvikirjastosta | [Hajauta](topic:live-view#scatter-plants-rocks-and-people) kasveja elävässä näkymässä tai sijoita aloituskirjaston puu |
| Ryhmän itsenäiset kopiot | Tee siitä komponentti ja käytä sitten {{ui:Make unique}} (katso [Vianmääritys](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderöinti

| Ei vielä | Sen sijaan tänään |
|---|---|
| Renderöinti näkymässä (työtila {{ui:Render}}), renderijono sekä kameran, taivaankuvan, sumun ja valojen sekoitusasetukset ilman WebGPU:ta | {{ui:Render a picture…}} asetuksella {{ui:High quality}} käyttää siellä WebGL-polunseurantaa ilman näitä asetuksia ([Renderöi kuva](topic:render#high-quality)) |
| Toinen ohjelma piirtää renderöidyn kuvan ilman renderöintimoottori-lisäosaa (CadCraft ei koskaan aja ohjelmaa GNU GPL -lisenssillä); panoraama- tai stereokamerat ja taivaankuva toisen ohjelman kautta; Unreal Engine -liitännäinen (tiedostot kirjoitetaan, mutta niitä avaava liitännäinen ei ole julkaistu) | Omat Fast- ja Path tracer -moottorit; lisäosan moottori ([piirrä kuva toisella ohjelmalla](topic:render-other-program)); USD-, glTF- tai Unreal-kansiotiedosto Moottorit-luettelosta vietäväksi mihin tahansa ohjelmaan |
| Hajautetut kasvit ja kivet kohdassa {{ui:Render a picture…}} | Ne näkyvät [elävässä näkymässä](topic:live-view), sen panoraamoissa, katselimessa ja videossa |

## Materiaalit ja värit

| Ei vielä | Sen sijaan tänään |
|---|---|
| Muut syötteet kuin perusväri, karheus, metallisuus, peittävyys, normaali ja emissio, jotka vaihtelevat pinnan yli laadukkaissa kuvissa (ne käyttävät keskiarvoa) | [Tee materiaaleja solmuilla](topic:shading): yhdistä ne silti, näkymä näyttää vaihtelun |
| Siirtymä push/pull-pinnoilla | Muunna kohde verkoksi siirtymää varten |
| Omien materiaalien jakaminen Kirjastoon sovelluksesta sekä pakatut (ARM/ORM) tai EXR-kartat tuodussa tekstuurisarjassa | Pidä ne tiedostossa; tuo erilliset kartat PNG- tai JPEG-muodossa |
| Tiedoston materiaalit Live TeamWork -istunnoissa (ne pysyvät tietokoneella, joka ne teki) | Tallenna tiedosto ja jaa se |
| Dekaalit, jotka taipuvat kaarevien pintojen ympäri, dekaalit kumoamisessa tai useiden pintojen tekstuurien maalaus kerralla saumaa pitkin | Sijoita pienemmät dekaalit jokaiseen osaan; maalaa jokainen saumanpuoli erikseen |
| Leipominen push/pull-pinnoille, useiden kohteiden leipominen yhteen kuvaan, käsin muotoiltu häkki tai lampuista leivottu valaistus | Muunna verkoksi ja avaa se; leivo jokainen kohde erikseen; nosta hakuetäisyyttä; renderöi kuva lampun valoa varten |
| Karheuden, metallisuuden tai korkeuden maalaus, maalaus kuvilla (leimat) ja tekstuurimaalaus suuremmalla kuin 512 × 512 | Maalaa perusväri tässä; tee muut kartat kuvankäsittelyohjelmalla ja tuo ne tekstuurisarjana |
| Tekstuurit Collada-, STL-, PLY-, 3MF-, IFC-, DWG- ja DXF-vienneissä sekä tiedoston omien materiaalien solmukaaviot viedyissä malleissa | Nämä muodot saavat kunkin materiaalin värin; glTF ja OBJ kantavat tuodut tekstuurit; vie materiaali yksinään [MaterialX:nä](topic:shading#materialx); [USD](topic:usd) säilyttää koko mallin ModelCraftille |
| Tekstuurit Collada-tiedostoissa | Ne lasketaan ja jätetään pois tuonnissa; tekstuurit `.skp`- ja `.glb`-tiedostoista tulevat mukaan |

## Tiedostot

| Ei vielä | Sen sijaan tänään |
|---|---|
| SketchUp-tiedostojen tallennus sekä niiden teksti ja mitoitukset | [Tuo](topic:import-sketchup-files) säilyttää pinnat, värit ja tekstuurit; vie Collada (`.dae`) palataksesi SketchUpiin |
| Mitoitukset ja apuviivat DWG- ja DXF-vienneissä | Lisää ne CAD-ohjelmassa viennin jälkeen |
| Pisteet, taulukot ja monirivinen osoitin DWG- ja DXF-tiedostoista | Ne lasketaan ja jätetään pois; teksti tulee yksiviivaisena kirjaimistona, ei piirustuksen fonttina |
| Pinnat, verkot, taulukot ja monirivinen osoitin DWG- ja DXF-tiedostoista; 3D-kiintokappaleiden pinnat pyyhkäistyillä, loftatuilla tai muilla vapaamuotoisilla pinnoilla | Ne lasketaan ja jätetään myös pois (3D-kiintokappaleet itsessään tulevat mukaan). Vie nuo osat CAD-ohjelmasta OBJ- tai Collada-muodossa ja tuo ne |
| IFC-tyypit, ominaisuudet tai materiaalit | IFC-vienti sisältää [kerrokset](topic:formats#ifc-ifc) ja yleiset elementit; lisää loput BIM-ohjelmassa |
| Mallin lähettäminen suoraan BimCraftiin | Vie {{ui:IFC for BimCraft (.ifc)}} ja avaa se BimCraftissa |
| Irralliset reunat glTF- ja STL-tiedostoissa | Käytä OBJ- tai Collada-muotoa viivatyöhön |
| glTF- ja FBX-materiaalit perusvärin lisäksi (metalli, karheus, normaalikartat, lasi, kirkaskerros, hohde…) | Ne luetaan ja luetellaan; ModelCraft säilyttää perusvärin tai tekstuurin. Rakenna ulkoasu uudelleen [Varjostustyötilassa](topic:shading) |
| glTF-luut, animaatiot ja morph-kohteet | Iholliset mallit tulevat lepoasennossa; animoi [aikajanalla](topic:animation) |
| STEP-tiedostojen värit ja kokoonpanon osien nimet | Osat tulevat verkkoina todellisessa koossaan; [maalaa](topic:paint) ja nimeä ne tuonnin jälkeen |
| SubD-kohteet, teksti, mitoitukset ja valot `.3dm`-tiedostoista | Katso [mitä jätetään pois](topic:import-3dm-files#what-is-left-out-and-said); muunna SubD verkoiksi ohjelmassa, joka tiedoston teki |
| KTX2-tekstuurit ja materiaalivariantit glTF:ssä | Vie PNG- tai JPEG-tekstuureilla; käytetään oletusvarianttia |
| glTF-instancingin kirjoitus (EXT_mesh_gpu_instancing) | Komponentit kirjoitetaan kerran ja sijoitetaan monta kertaa, minkä jokainen katselin lukee |
| Alembic-animaatio (jokainen välimuistin näyte), Alembic-pisteet ja -käyrät, Alembicin kirjoitus | Ensimmäinen näyte tulee mukaan; animoi [aikajanalla](topic:animation); kirjoita glTF, USD tai OBJ |
| Kuhmu- ja normaalikartat OBJ-materiaaleissa | Vain väripiirros (`map_Kd`) tulee mukaan |
| FBX-luut ja -animaatio, FBX-vienti, FBX 6 -tiedostot | Iholliset mallit tulevat lepoasennossa; vie glTF; tallenna vanhat tiedostot FBX 2011 tai uudempana |
| Collada-skinit, morphit, kamerat, valot, look-at- ja vinoutusmuunnokset, ulkoiset viittaukset | Jätetään pois tuonnissa ja lasketaan viestissä |
| Varmuuskopiotiedostot | {{ui:Save as}} ({{key:Mod+Shift+S}}) tallentaa toisen kopion. Kaatumisen jälkeen ModelCraft tarjoaa tallentamattoman työsi takaisin (”Palautetaanko työsi?”) |
| Pilvitallennus ja synkronointi tietokoneiden välillä | Ei vielä käytettävissä. Tallenna tiedostot tietokoneellesi ja kopioi ne tarvittaessa |

## 3D-tulostus

| Ei vielä | Sen sijaan tänään |
|---|---|
| Todelliset viipalointiohjelman tuet (rajapinnat, alusta, tarkka tukikuvio) | [Tukien esikatselu](topic:print-tools#supports-preview) näyttää missä ja suunnilleen kuinka paljon; viipalointiohjelmasi esikatselu näyttää todelliset |
| Osan, joka kulkee itsensä läpi, selvittäminen, tai reunat, joissa kolme tai useampi pinta kohtaa | [Korjaus](topic:print-tools#repair) luettelee ne ja kertoo missä ne ovat; käytä [Leikkaa pinnat](topic:intersect) ja poista sisältä |
| Täyttökuviot ja hila ontossa | [Ontto](topic:print-tools#hollow) jättää sen tyhjäksi; viipalointiohjelmasi lisää täytön kiinteään osaan |
| Liian pienet yksityiskohdat tulostussuuttimellesi (muut kuin seinät) | [Seinämän paksuus](topic:print-tools#wall-thickness) löytää ohuet seinät; viipalointiohjelmasi kerrosesikatselu näyttää loput |

## Suorituskyky

Kumoaminen säilyttää kopion mallista jokaista vaihetta varten (a [verkko](topic:meshes) säilyttää vain muuttuneen), joten hyvin suuret push/pull-geometrian tuonnit hidastavat jokaista muokkausta. Pidä tuonnit kevyinä ja tallenna ja avaa tiedosto uudelleen tyhjentääksesi historian.

## Sovellukset ja alustat

- **Työpöytä:** ModelCraft toimii selaimessa Macilla, Windowsilla ja Linuxilla sekä CadCraft Studiossa, työpöytäsovelluksessa, jossa kaikki kahdeksan sovellusta ovat yhdessä asennuksessa. Androidilla CadCraft Studio asennetaan APK-tiedostosta osoitteessa getcadcraft.com/download. iPad- tai iPhone-versiota ei ole vielä.
- **Kosketus:** katso [Kiertäminen, panorointi ja zoomaus](topic:orbit-pan-zoom) sormieleille. Kynän paine asettaa siveltimen [Veistossa](topic:sculpt); muualla painetta ja kynän kallistusta ei käytetä.
- **Arkit:** ModelCraft [tulostaa yhden näkymän sivulle](topic:export-model#print-the-view-or-save-it-as-a-pdf); ei ole arkkiasetteluja, joissa on useita näkymiä tai piirustusotsikkoa. Vie piirustuksia mittakaavassa DWG/DXF-muodossa, joka sopii CadCraftille.
