---
title: Uutta versiossa 0.7 (aiemmin)
summary: Verkot muokkaimilla, veistäminen, UV-koordinaatit ja käyräkohteet, polunjäljitys näytönohjaimella ja Renderöinti-työtila, reaaliaikainen live-näkymä sirottelulla ja panoraamoilla, solmumateriaalit, Animoi-työtila luilla ja fysiikalla, USD-, FBX-, STEP- ja .3dm-tiedostot sekä tulostustyökalut Aloittelija-tyylillä.
keywords: mitä uutta 0.7, aiempi julkaisu, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, verkko, verkot, verkkotyötila, muokkaimet, alijako, laskos, uv, avaa tasoksi, saumat, käyrät, käyräkohteet, nurbs, bezier, veistäminen, uudelleenverkotus, jako, laskenta, polunjäljitys, webgpu, renderöintityötila, renderöintijono, mp4, exr, kohinanpoisto, fysikaalinen taivas, hdri, ies, syvyysterävyys, valojen sekoitus, sumu, kaustiikka, live-näkymä, reaaliaika, kävely, sirottelu, panoraama, kierros, katselin, varjostus, solmut, solmumateriaalit, materiaalikirjasto, materialx, tarrat, tekstuurimaalaus, paistaminen, animointi, käyräeditori, leikkeet, muotoavaimet, ohjaimet, luustot, ihotus, ik, rajoitteet, fysiikka, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d-kiintokappaleet, tukien, seinämän paksuus, ontoksi, korjaus, aloittelija, avustajat, oma kone, yksiköt, portugali
from: 16d52810
---

Tämä on muuttunut ModelCraftissa versiosta 0.6 versioon 0.7. ModelCraft mallintaa nyt verkkoja työnnä/vedä-geometrian lisäksi, renderöi näytönohjaimella ja sillä on työtila jokaiselle työlajille: valitse se työkalurivin vasemmalla puolella olevasta {{ui:Työtila}}-luettelosta.

## Uutta

### Verkot

- **Verkot.** Valitse ryhmä tai komponentti ja napsauta {{ui:Muunna verkoksi}} kohdassa {{ui:Kohteen tiedot}}: siitä tulee verkko, jonka pinnoissa voi olla mielivaltainen määrä kulmia ja joka voi kantaa tekstuurikoordinaatteja, normaaleja, värejä ja painoja. {{ui:Muunna geometriaksi}} muuttaa sen takaisin. Kumoaminen verkossa säilyttää vain sen, minkä kukin vaihe muutti. Verkon sisältävä tiedosto vaatii ModelCraft 0.7:n avautuakseen. Katso [Verkot](topic:meshes).
- **Verkkotyötila.** Kaksoisnapsauta verkkoa tai valitse {{ui:Verkko}} {{ui:Työtila}}-luettelosta muokataksesi sen kärkipisteitä, särmiä ja pintoja: silmukat ja renkaat, verrannollinen muokkaus, pursotus, sisennys, viistäminen, silmukkaleikkaus, veitsi, puolittaminen, pyöräytys, yhdistäminen, liuottaminen, täyttö, ruudukkotäyttö, silta ja liu'utus sekä viimeisimmän toiminnon asetukset, joita voi muuttaa jälkikäteen paneelissa. Aloita tasosta, kuutiosta, pallosta, vanteesta ja muusta. Työnnä/vedä-näppäimet ja mallinnusnäppäimet toimivat molemmat. Katso [Muokkaa verkkoa verkkotyötilassa](topic:mesh-edit).
- **Muokkaimet.** Peilaus, matriisi, alijakopinta, pyöristys, paksuus, boolen, siirtäminen, hitsaus, harventaminen, tasoitus, hila, käyrämuodonmuutos ja tiivistys muuttavat sitä, mitä verkko näyttää, muuttamatta itse verkkoa. Pinoa ne, kytke kukin päälle tai pois näkymää ja renderöintiä varten ja käytä {{ui:Käytä}} yhtä, kun haluat sen lopullisesti. Katso [Verkon muokkaimet](topic:modifiers).
- **Alijako laskoksilla.** {{ui:Laskos}} verkkotyötilassa pitää valitut särmät teräväreunaisina alijakopinnan alla. Renderöinnissä voi käyttää enemmän tasoja kuin näkymässä, ja suuressa verkossa näkymä näyttää alemman tason ja kertoo siitä. Katso [Alijakopinta](topic:modifiers#subdivision-surface).
- **Käyräkohteet.** Bézier-, NURBS- ja suorasegmenttikäyrät, joista tehdään putki, nauha, kapeneva muoto tai täytetty levy, sekä teksti käyränä. Muokkaa niiden pisteitä {{ui:Käyrä}}-työtilassa; {{ui:Verkoksi}}, kun muoto on valmis. Katso [Käyräkohteet](topic:curves).
- **UV-työtila.** Merkitse saumat (tai anna ModelCraftin merkitä ne terävissä särmissä), {{ui:Avaa tasoksi}} ja {{ui:Pakkaa}}, tai projisoi laatikolla, sylinterillä, pallolla tai näkymällä. 3D-näkymän vieressä oleva UV-editori siirtää, kääntää ja skaalaa palat, ja ruutukuvio ja venymävärit näyttävät tuloksen. Katso [Asettele verkon UV-koordinaatit](topic:uv).
- **Veistäminen.** {{ui:Veistä}}-työtilassa on piirto-, savi-, tasoitus-, tartunta-, paisutus-, laskos-, nipistys-, litistys- ja maskiharjat, peilaus X-akselin yli ja {{ui:Yksityiskohta}}, joka lisää kolmioita sitä mukaa kun veistät. Kynän paine asettaa harjan koon ja voimakkuuden. Jokainen veto on yksi kumoamisvaihe. Katso [Veistä verkko](topic:sculpt).
- **Uudelleenverkotus ja uudelleentopologia.** {{ui:Verkota uudelleen}} tekee koko verkosta uudelleen tasaisina kolmioina, sulkien aukot ja liittäen päällekkäiset palat. Siistin verkon rakentamiseksi yksityiskohtaisen verkon päälle valitse se kohdassa {{ui:Uudelleentopologia}}: siirtämäsi pisteet asettuvat sen pinnalle. Katso [Verkota uudelleen](topic:mesh-edit#remesh).

### Piirtäminen

- **Jaa särmä tai käyrä.** {{ui:Jaa}}-työkalu merkitsee leikkauskohdat, kun liikut särmää pitkin, ja jakaa napsautuksella tai kirjoitetulla luvulla; kun särmä, kaari tai ympyrä on valittuna, kirjoita `/5`; {{ui:Kohteen tiedot}} › {{ui:Jaa…}} kysyy luvun tableteille. Kaari tai ympyrä jaetaan yhtä suurilla kulmilla todellisella kaarella. Katso [Jaa särmä tai käyrä yhtä suuriin osiin](topic:divide).
- **Laskutoimitukset arvoruudussa.** Kirjoita `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` tai `2*450mm` mille tahansa pituudelle ja `90/2` kulmalle. Laskutoimitus, jota ei voi suorittaa, kertoo, mikä on vialla ja missä. Katso [Laskutoimitukset](topic:value-box#calculations).

### Renderöinti

- **Polunjäljitys näytönohjaimella.** {{ui:Renderöi kuva…}} › {{ui:Korkea laatu (polunjäljitys)}} ajaa CadCraftin oman polunjäljittimen näytönohjaimella siellä, missä selaimella on WebGPU; kuvan alla oleva rivi kertoo, mikä moottori sen teki. {{ui:Pysäytä}} säilyttää kuvan ja {{ui:Jatka}} jatkaa siitä. Ilman WebGPU:ta kuva jäljitetään WebGL:llä, kuten ennenkin. Katso [Korkea laatu](topic:render#high-quality).
- **Renderöinti näkymässä.** {{ui:Renderöi}}-työtila jäljittää itse näkymän ja alkaa alusta, kun kiertelet tai muokkaat: renderöi {{ui:Alue}}, valitse {{ui:Tarkenna}} ja napsauta kohtaa, aseta {{ui:Yksityiskohta}}. Se vaatii WebGPU:n. Katso [Renderöinti näkymässä](topic:render#render-in-the-view).
- **Materiaalit, valot ja taivaat.** Korkean laadun kuvat varjostavat jokaisen pinnan OpenPBR-materiaalimallilla (pinnoitteet, karvapeite, ohuet kalvot, värilliset lasit, hehku). WebGPU:n kanssa on myös {{ui:Fysikaalinen taivas}} ({{ui:Utu}}), {{ui:Taivaskuva (HDRI)}} ja valmistajan IES-valoprofiilit lampuille. Katso [Taivaat ja valoprofiilit](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kuin valokuvakoneessa.** Valotus aukosta, suljinajasta ja ISO:sta jokaisessa tilassa; WebGPU:n kanssa myös syvyysterävyys, kaksipistenäkökulma, valkotasapaino, 360°-panoraamat (myös stereona) ja kuutiokartat. Katso [Kamera](topic:render#the-camera).
- **Viimeistele kuva renderöinnin jälkeen.** Säädä sävy ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} tai {{ui:Vakio}}, kontrasti, hehku, häikäisy, vinjetti, `.cube`-väritaulukko), sekoita taivas, aurinko ja kukin lamppuryhmä ja tarkastele renderöintielementtejä yksi kerrallaan, kaikki ilman uutta renderöintiä. Jäljelle jäävän rakeisuuden poistaa kohinanpoistaja omalla tietokoneellasi. Katso [Viimeistele kuva](topic:render#finish-the-picture) ja [Sekoita valot renderöinnin jälkeen](topic:render#mix-the-lights-after-the-render).
- **Lisää tapoja tallentaa renderöinti.** 16-bittinen PNG, monikerroksinen EXR, jossa on jokainen renderöintielementti ja valoryhmä, sekä renderöintitiedosto (`.ccrender`), joka avautuu uudelleen sekoituksineen ja sävyineen. Katso [Tallenna kuva](topic:render#save-the-picture).
- **Sumu, savu ja kaustiikka.** Auringon ja lamppujen valaisema sumu ja utu valokeilineen; yksi savupylväs tai pilvi; kaustiikka lasin ja peilien alla; mukautuva näytteenotto, joka lakkaa pikseleissä, jotka ovat jo puhtaita. Vain näytönohjaimella. Katso [Sumu, savu, kohina ja kaustiikka](topic:render#fog-smoke-noise-and-caustics).
- **Renderointijono ja MP4.** Lisää korkean laadun kuvia ja kokonaisia animaatioita kohtaan {{ui:Renderöintijono}}; ne renderöidään peräkkäin, ja jono säilyy, vaikka sivu suljetaan. Se vaatii WebGPU:n. Videot voi tallentaa myös MP4-muodossa siellä, missä selain sen osaa kirjoittaa. Katso [Renderöintijono](topic:render#the-render-queue) ja [Renderöi video](topic:animation#render-the-video).

### Live-näkymä ja esitykset

- **Live-näkymä.** {{ui:Vie}} › {{ui:Live-näkymä}} näyttää mallin reaaliaikaisena näkymän vieressä ja seuraa jokaista muokkausta ja kameraa: auringon varjot, materiaalit, lamput ja seinistä heijastuva valo. {{ui:Kävele}} sen läpi, vedä {{ui:Aika}} ja {{ui:Kuukausi}} siirtääksesi aurinkoa tai siirrä se uuteen ikkunaan ({{ui:Uusi ikkuna}}). Se käyttää WebGPU:ta, jos selaimella on se, muuten WebGL 2:ta. Katso [Live-näkymä](topic:live-view).
- **Sirottelu.** Levitä ruohoa, kukkia, kiviä, puita ja ihmisiä pinnoille tai harjalla, seitsemästä uudesta ympäristöelementistä ja muusta kirjastosta; sarjat tallennetaan tiedostoon. Katso [Sirottele kasveja, kiviä ja ihmisiä](topic:live-view#scatter-plants-rocks-and-people).
- **Jakaminen.** 360°-panoraama, panoraamakierros, jossa nuolet kohtien välillä, itsenäinen katseluohjelma (yksi verkkosivu, joka aukeaa offline-tilassa eikä lataa mitään internetistä) ja video kameran reitistä, kaikki reaaliaikaisella ilmeellä. Katso [Jakaminen](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR reaaliaikaisella ilmeellä.** {{ui:Tarkastele VR:ssä}} näyttää mallin materiaaleineen, taivaineen, auringon varjoineen, lamppuineen, sirotelluin kohteineen ja heijastusvalon. Katso [Miltä se näyttää](topic:vr-review#what-it-looks-like).

### Materiaalit

- **Solmuilla tehdyt materiaalit.** {{ui:Varjostus}}-työtila rakentaa tiedoston omat materiaalit solmuverkkoina: kuvat, kohina ja ruutukuviot, Voronoi-solut, aallot, tiilet, laatat, puu, marmori, liukuvärit, lika ja reunakulumat, värityöt, matematiikka, kuoppa- ja normaalikartat täydeksi OpenPBR-materiaaliksi. Näkymä näyttää jokaisen muutoksen heti. Katso [Tee materiaaleja solmuilla](topic:shading).
- **Materiaalikirjasto ja omat tekstuurisarjat.** Varjostus-paneeli luettelee kirjaston materiaalit: kuusitoista CC0-tekstuurisarjaa, joista kukin on mainittu. Napsauta yhtä käyttääksesi sitä tai vedä se pinnalle. {{ui:Kuvat tai zip…}} tai {{ui:Kansio…}} tekee materiaalin omista kartoistasi, jotka löytyvät tiedostonimiensä perusteella. Katso [Materiaalit kirjastosta](topic:shading#materials-from-the-library).
- **MaterialX sisään ja ulos.** Vie materiaali MaterialX-muodossa (OpenPBR Surface tai Standard Surface, tekstuurit PNG-muodossa) ja tuo MaterialX-tiedostoja kuvineen. Katso [MaterialX](topic:shading#materialx).
- **Tarrat ja tekstuurin maalaus.** Sijoita kuva pinnalle tarrana, jolla on oma materiaali, ja maalaa materiaalin kuvaan pyöreällä harjalla. Katso [Tarrat](topic:shading#decals) ja [Maalaa tekstuuriin](topic:shading#paint-on-the-texture).
- **Tekstuurien paistaminen.** Paista ympäristön okkluusio, kaarevuus, valaistus ja yksityiskohtaisen kohteen normaalit kuviksi verkon UV-koordinaattien mukaan tietokoneen suorittimen ytimillä. Katso [Paista tekstuurit](topic:shading#bake-textures).

### Animaatio

- **Animoi-työtila.** Aseta avaimet kohteen sijaintiin, kiertoon ja kokoon, kunkin lampun kirkkauteen, leviämiseen ja väriin sekä linssin kulmaan suoraan paneelissa. Aikajanalle tulee {{ui:Käyrät}}-näkymä (Bézier-kahvat, toistot) ja {{ui:Leikkeet}}-näkymä, joka tallentaa avaimet toimintoina, jotka voi sijoittaa uudelleen ja sekoittaa; useiden rivien avaimia voi siirtää, venyttää, kopioida ja liittää. Katso [Animoi mikä tahansa ominaisuus](topic:animate).
- **Muotoavaimet ja ohjaimet.** Verkossa on muita omia muotojaan, jotka sekoitetaan liukusäätimillä, joille voi asettaa avaimia, tai asetetaan muista arvoista pienellä lausekkeella. Katso [Muotoavaimet](topic:animate#shape-keys-morphs) ja [Ohjaimet](topic:animate#drivers).
- **Luustot.** Aseta luita verkkoon, anna {{ui:Automaattiset painot}} jakaa pisteet niiden kesken tai maalaa painot, asettele luut asentoon ja aseta niille avaimet; lineaarinen tai kaksoiskvaternionipohjainen ihotus. Katso [Luustot](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK ja rajoitteet.** Ulottuvuus (IK) napa-avustuksella, kohti katsominen, muunnosten kopiointi, rajat, vanhemmuus ja polun seuraaminen luille ja kohteille. Katso [IK ja rajoitteet](topic:animate#ik-and-constraints).
- **Fysiikka.** Ryhmät ja komponentit putoavat, pinoutuvat ja törmäävät laatikkoina tai palloina, ja {{ui:Paista fysiikka}} säilyttää tuloksen avaimina. Katso [Fysiikka](topic:animate#physics-drop-stack-and-collide).

### Tiedostot

- **USD.** {{ui:Tallenna muodossa}} ({{key:Mod+Shift+S}}) tallentaa mallin muodossa `.usda`, `.usdc` tai `.usdz`, ja ModelCraftin tallentama USD-tiedosto avautuu uudelleen ilman menetyksiä. Muiden ohjelmien USD avautuu tai tuodaan verkkoina, ryhminä, komponentteina, lampuina ja kameroina. {{ui:Tallenna}} kirjoittaa edelleen muodossa `.modelcraft`. Katso [Tallenna, avaa ja vie USD](topic:usd).
- **glTF, täydellinen.** glTF-tiedostot tulevat sisään muokattavina verkkoina normaaleineen, UV-koordinaatteineen, kärkipisteiden väreineen ja tekstuureineen, solmut ryhminä, valot lampuina ja kamerat näkymiksi; myös Draco- ja meshopt-tiedostot. `.gltf` avautuu, kun se pudotetaan yhdessä tiedostojensa kanssa. Vienti kirjoittaa verkot, tekstuurit, lamput ja kamerat. Katso [glTF](topic:formats#gltf-glb-gltf).
- **FBX-, PLY-, STL- ja Alembic-tuonti.** FBX 2011 ja uudemmat (verkot, UV-joukot, materiaalit, upotetut tekstuurit, valot, kamerat), PLY ja STL väreineen sekä Alembic-välimuistit ensimmäisellä näytteellään. OBJ tulee sisään `.mtl`-tiedostonsa ja kuviensa kanssa, kun pudotat ne yhdessä. Katso [Tiedostomuodot yksityiskohtaisesti](topic:formats).
- **Lisää vientejä.** PLY väreineen, STL maalattujen pintojen väreineen ja OBJ tekstuureineen yhtenä zip-tiedostona. Katso [Tiedostomuodot yksityiskohtaisesti](topic:formats).
- **STEP-tiedostot.** {{ui:Tuo}} lukee STEP-osat ja -kokoonpanot (AP203, AP214, AP242) suljettuina verkkoina todellisessa koossaan, jokainen osa sinne, minne tiedosto sen sijoittaa. Katso [STEP](topic:formats#step-step-stp).
- **.3dm-tiedostot.** {{ui:Tuo}} lukee `.3dm`-malleja: verkot, polypinnat ja pursotukset (tiedostoon tallennetuista verkoista, muuten ModelCraftin muuntamina), käyrät särmiksi, lohkot komponenteiksi ja tasot tunnisteiksi. Katso [Tuo .3dm-malli](topic:import-3dm-files).
- **3D-kiintokappaleet DWG- ja DXF-tiedostoista.** Piirustuksen tuonti tuo nyt myös sen 3D-kiintokappaleet, alueet ja kappaleet, jokainen omana ryhmänään, suljetut kiintokappaleina. Katso [Malli asemakaavasta](topic:site-plan#what-comes-in).

### 3D-tulostus

- **Tulostustyökalut.** {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}} › **Tulostustyökalut** sisältää {{ui:Tukien esikatselu}} (ulokkeet, pylväät tai puutuet, noin kuinka paljon materiaalia), {{ui:Seinämän paksuus}} (seinät, jotka ovat liian ohuita tulostettaviksi, listattuna {{ui:Näytä}}-toiminnolla), {{ui:Ontoksi}} (antamasi paksuiset seinät, tyhjennysreikineen) ja {{ui:Korjaus}} (jokainen korjaus listattuna; päällekkäiset osat liittyvät vain pyydettäessä). Ontoksi ja Korjaus antavat ryhmän, jonka tasaiset sivut ovat yksittäisiä pintoja, tai verkon, kun tulos ei sulkeutuisi tai sillä on liian monta pintaa; tilarivi kertoo, kumpi. Katso [Tuet, seinämän paksuus, ontoksi ja korjaus](topic:print-tools).
- **Aloittelijatyyli.** {{ui:Asetukset}} › {{ui:ModelCraft}} › {{ui:Valikot, näppäimet ja hiiri}} › {{ui:Aloittelija}}: isot painikkeet muotojen ja reikien pudottamiseen, siirtämiseen, kohdistamiseen ja {{ui:Ryhmä}}-toimintoon, jotta reiät leikkautuvat, minkä jälkeen mallin voi tarkistaa tulostusta varten. Katso [Aloittelijatyyli](topic:beginner).

### Tekoälyavustajat ja oma koneesi

- **Lisää tekoälyavustajille.** Avustaja voi nyt luetella pinnat ja materiaalit, työntää ja vetää, maalata, tehdä ryhmiä, lisätä ja näyttää näkymiä, lisätä verkkoja, muokata muokkainpinoja, viedä USD:n, renderöidä kuvan ja täyttää renderöintijonon. Katso [Käytä ModelCraftia tekoälyavustajan kanssa](topic:use-with-ai-assistants).
- **Oma koneesi.** {{ui:Asetukset}} › {{ui:ModelCraft}} › {{ui:Renderöinti}} › {{ui:Koneesi}} näyttää grafiikan, suoritinytimet ja muistin, joita tämä selain antaa sovelluksen käyttää, sekä tason, joka määrää, mistä live-näkymä alkaa. Katso [Millä koneesi renderöi](topic:your-machine).

## Korjattu

- {{ui:Kiintokappaleet}} › {{ui:Yhdiste}}, {{ui:Erotus}} ja {{ui:Leikkaus}} saattoivat palauttaa ryhmän, joka ei ollut suljettu, minkä tahansa kokoisena. Ne sulkeutuvat nyt.
- {{ui:Kiintokappaleet}} › {{ui:Erotus}} oli harmaana, kun mitään ei ollut valittuna, vaikka se valitsee kaksi osaansa vuorotellen valintasi jälkeen.
- Animaation aikajanalla kirjoitetut näppäimet eivät menneet mihinkään, eikä {{key:Mod+S}} myöskään. {{key:Mod+Z}} ja {{key:Mod+Y}} siellä ovat aikajanan omat kumoa ja tee uudelleen; muut {{key:Mod}}-näppäimet välittyvät sovellukselle.

## Kaikissa sovelluksissa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää yhden luettelon pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle, tarkkoine kokoineen yksiköiden määritelmien mukaan (USA:n mittausjalka on oma yksikkönsä). Kytke pois yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista; merkitse yksi tähdellä, ja uusi työ alkaa siinä. Tiedosto säilyttää aina oman yksikkönsä. ModelCraftissa arvoruudun vieressä oleva yksikköluettelo seuraa kytkimiä (mallin oma yksikkö pysyy siinä aina), tähti asettaa uuden mallin yksikön (kun ModelCraftilla on se yksikkö), ja minkä tahansa yksikön merkillä kirjoitettu pituus luetaan siinä yksikössä. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiiviimpi asettelu ja paneelit, jotka piiloutuvat.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahduttaa ruudulle enemmän (kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa). Jokaisella sivupaneelilla on kapea otsikkopalkki: vedä se kiinnittääksesi tai irrottaaksesi paneelin, pudota se toisen paneelin palkkiin jakaaksesi yhden kehyksen välilehtinä, kiinnitä se liukumaan pois reunaan tai piilota se ja tuo takaisin reunasta. Katso [Järjestä paneelit](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat liikkuvat.** Vedä valintaikkunaa otsikkopalkista pois piirustuksen tieltä; se palaa siihen, mihin jätit sen. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Reseptit tekoälyavustajille.** Kymmenen esimerkkipyyntöä omalle avustajallesi (siivoa piirustus, tulosta arkkisarja, tarkista piirustuksia, kysy mallilta kysymyksiä, laske määrälaskenta yhteen, kokeile osan varianttia…), joista kukin kertoo käyttämänsä työkalut ja tarvitsemansa käyttöoikeudet, ja testimme toistavat jokaisen. Sovelluksissa ei ole tekoälyä. Katso [Reseptit tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se itse sekä **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt sovellusten kaikki sanat luonnoksina, joita äidinkielinen puhuja ei ole vielä lukenut. Ohjeaiheet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (järjestelmällesi ei ole vielä tiedostoa, ei verkkoa, virheellinen allekirjoitus), sen sijaan että näyttäisi vain "Valmis", ja lakkaa tuomasta takaisin Mitä uutta -korttia, jonka suljit, ennen kuin on uudempi julkaisu.

## Ei vielä tässä versiossa

- **0.7 ei ole koodiallekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirtyivät versioon 0.8, koska varmenteen vahvistus ei ole vielä tullut. Tarkista SHA-256 kunkin tiedoston vieressä osoitteessa getcadcraft.com/download. Windowsissa, jos SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa valitse ensimmäisellä kerralla CadCraft Studio hiiren kakkospainikkeella ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPadille tai iPhonelle ole vielä versiota.
- Kulma- ja kaltevuusluettelot kohdassa {{ui:Yksiköt}} tallennetaan, mutta mikään ruutu ei lue niitä vielä.
- Renderöintiä näytönohjaimella (WebGPU) on testattu täällä vain ohjelmallisella korvikkeella, ei vielä oikeilla näytönohjaimilla, joten renderöi ensin jotain pientä omalla tietokoneellasi. Sama koskee live-näkymää, ja VR:ää on toistaiseksi kokeiltu vain kuulokeemulaattorilla.
- Ilman WebGPU:ta ei ole Renderöinti-työtilaa eikä renderöintijonoa, eikä korkean laadun kuvissa ole syvyysterävyyttä, fysikaalista taivasta, taivaskuvaa, sumua, savua, kaustiikkaa tai valojen sekoitusta.
- {{ui:Renderöi kuva…}} ei vielä piirrä sirotettuja kohteita; ne näkyvät live-näkymässä, sen panoraameissa, katseluohjelmassa ja videossa.
- Lamput animoituvat näkymässä, mutta renderöity video käyttää lamppuja sellaisina kuin ne ovat alkaessaan.
- Luita ja animaatiota ei vielä lueta glTF-, FBX- tai USD-tiedostoista eikä kirjoiteta niihin (ihotetut mallit tulevat lepoasennossa painoineen), eikä glTF- ja FBX-materiaaleja, jotka ylittävät peruspvärin tai tekstuurin, säilytetä vielä.
- STEP-värejä ja kokoonpanon osien nimiä ei vielä lueta. `.3dm`-tuonti on testattu tiedostoilla, jotka formaatin työkalupakki on kirjoittanut, ei vielä mallinnusohjelman itsensä tiedostoilla; SubD-kohteet, teksti ja mitoitukset jätetään pois.
- CivilCraftin kasvikirjasto on ModelCraftissa, mutta kasvien sijoittaminen siitä ei ole vielä toteutettu.
- Tekstuurin maalaaminen työnnä/vedä-pinnoille toistuu materiaalin laatan mukaan; maalataksesi vain yhden pinnan muunna se verkoksi ja avaa se tasoksi.

Muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet).
