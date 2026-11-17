---
title: Renderöi kuva mallista
summary: Tee kuva, joka näyttää päivänvalolta: taivas, aurinko mallisi paikan ja päivämäärän mukaan, pehmeät varjot, lasin ja metallin ilmeet. Tallenna se PNG-tiedostona.
keywords: renderöinti, esiasetus, esiasetukset, kohtauksen esiasetus, sisätila, ulkotila, leikkausnäkymä, yö, yhdellä napsautuksella, renderöinti, polunjäljitys, polunjäljitetty, säteenseuranta, globaali valaistus, heijastukset, taittuminen, korkea laatu, valokuva, fotorealistinen, realistinen, kuva, kuvatiedosto, png, pysäytyskuva, taivas, aurinko, päivänvalo, varjot, pehmeät varjot, ympäristön okkluusio, lasi, metalli, kiiltävä, materiaalit, valotus, kirkkaus, pilvinen, hämärä, studio, esitys, sumu, utu, savu, pilvi, tilavuus, valopilarit, jumalansäteet, kaustiikka, mukautuva näytteistys, kohina
from: 517ba4d3
---

{{ui:Renderöi kuva…}} tekee näkymästä kuvan, joka näyttää päivänvalolta eikä piirrokselta: taivaan, auringon sijaintinsa ja päivämääränsä mukaan, pehmeät varjot, kokonaistaivaasta tulevan valon, joka tummentaa kulmat ja raot, sekä värit, jotka voivat näyttää lasilta, metallilta tai kiiltävältä maalilta. Mallia ei muuteta.

## Renderöi näkymä

1. Aseta näkymä haluamallesi kuvalle: kierrä, zoomaa, valitse [kohtaus](topic:scenes), piilota se, mitä ei pitäisi näkyä. Kuva käyttää näkymän omaa kameraa.
2. Napsauta {{ui:Vie}} ryhmässä {{ui:Tiedosto}}, sitten {{ui:Renderöi kuva…}}.
3. Valitse {{ui:Kohtaus}}, jos painettu ei ole haluamasi (katso [Kohtauksen esiasetukset](topic:render#scene-presets-a-good-picture-in-one-click)). Valitse {{ui:Koko}} ja napsauta sitten {{ui:Renderöi}}.

   Kuva täyttyy renderöinnin aikana ja tasoittuu jokaisella kierroksella. {{ui:Pysäytä}} (tai {{key:Esc}}) lopettaa aikaisin ja säilyttää siihen mennessä syntyneen kuvan.

4. Napsauta {{ui:Tallenna}} ladataksesi sen (PNG, ellei {{ui:Tallenna muodossa}} sano muuta).

:::tip
Aloita {{ui:Luonnos}}-tilassa {{ui:Näkymän koko}} -kokoisena tarkistaaksesi kameran ja ilmeen. Renderöi sitten {{ui:Hyvä}} tai {{ui:Paras}} suuremmassa koossa lopullista kuvaa varten.
:::

## Kohtauksen esiasetukset: hyvä kuva yhdellä napsautuksella

Valintaikkunan yläosassa on neljä {{ui:Kohtaus}}-painiketta. Kukin asettaa taivaan, kirkkauden, maan, reunaviivat, laadun ja auringon yhdellä napsautuksella, joten ensimmäiseen kuvaan ei tarvitse oppia mitään. Napsauta yhtä ja sitten {{ui:Renderöi}}.

| Kohtaus | Mitä se asettaa | Käyttökohde |
|---|---|---|
| {{ui:Ulkoa}} | Selkeä taivas, mallin oma aurinko, maa päällä | Rakennus ulkopuolelta |
| {{ui:Sisältä}} | Pilvinen taivas (tasainen valo, ei kovia auringonlaikkuja), yhden valotuspisteen puoli kirkkaampi | Näkymä huoneen sisältä |
| {{ui:Leikkausnäkymä}} | Valkoinen studio, ei maata, reunaviivat pikarenderöinnissä | Leikkauksen leikkaama malli |
| {{ui:Yö}} | Aurinko laskettuna (keskiyö talvella sivuston pallonpuoliskolla), yhden valotuspisteen kirkkaampi | Lamput, jotka valaisevat mallia. Ilman lamppuja kuva on tumma |

- {{ui:Valitse tälle näkymälle}} valitsee puolestasi: {{ui:Leikkausnäkymä}}, kun leikkaus on päällä, {{ui:Sisältä}}, kun kamera on mallin sisällä, muuten {{ui:Ulkoa}}. Kun avaat valintaikkunan ensimmäisen kerran, se aloittaa näin itsestään.
- Kaikki asetukset pysyvät alla ja niitä voi muuttaa. Kun muutat yhtä, kohtaus ei enää vastaa asetuksia, mikään painike ei ole painettuna, ja painikkeiden alla oleva rivi kertoo, että asetukset ovat omiasi. Napsauta kohtausta uudelleen palauttaaksesi sen arvot.
- Kohtaus ei koske moottoriin, tilaan, kokoon, materiaaleihin, kameraan tai lampuihin.

:::note
Kohtaukset antavat samat arvot ModelCraftissa ja BimCraftissa. Valmiin kuvan ulkonäkö riippuu mallistasi ja näytönohjaimestasi.
:::

## Asetukset

| Asetus | Mitä se tekee |
|---|---|
| {{ui:Koko}} | Näkymän koko, kaksinkertainen näkymän koko, Full HD, 4K tai neliö. Kiinteät koot säilyttävät näkymän kameran ja näyttävät sivuilla enemmän tai vähemmän |
| {{ui:Tila}} | {{ui:Nopea}}, tai {{ui:Korkea laatu (polunjäljitys)}} (alla) ja sen {{ui:Aikaraja}} |
| {{ui:Laatu}} | Kuinka monta kierrosta (tai korkeassa laadussa näytettä) keskiarvoistetaan: {{ui:Luonnos}} 16, {{ui:Hyvä}} 64, {{ui:Paras}} 256. Lisää kierroksia antaa tasaisemmat varjot ja reunat ja vie kauemmin |
| {{ui:Taivaansininen}} | {{ui:Selkeä taivas}}, {{ui:Pilvinen}} (pehmeä valo, heikot varjot), {{ui:Hämärä}} (matala, lämmin valo) tai {{ui:Valkoinen studio}} (tavallinen valkoinen tausta) |
| {{ui:Aurinko}} | Aurinko tulee päivämäärästä, ajasta ja paikasta kohdassa {{ui:Tyyli}} › aurinko. Valitse {{ui:Käytä toista päivämäärää ja aikaa tälle kuvalle}}, jos haluat kokeilla toista aikaa muuttamatta mallin tyyliä |
| {{ui:Kirkkaus}} | Vaaleampi tai tummempi, askelina (valotuspisteinä) |
| {{ui:Maa mallin alla}} | Maa, joka ottaa varjot vastaan ja haalistuu horisonttiin. Poista käytöstä lentävälle mallille |
| {{ui:Piirrä särmät}} | Piirtää mallin särmät ohuina viivoina kuvan päälle piirretyn ilmeen saamiseksi |

Kun aurinko on valitulla hetkellä horisontin alapuolella, on yö: taivas tummuu ja mallin [lamput](topic:lights) valaisevat sen. Valintaikkuna kertoo sen.

Asetukset tallennetaan `.modelcraft`-tiedostoon, joten mallin seuraava kuva alkaa siitä, mihin jäit.

## Väreistä lasin tai metallin näköisiä

Kohdassa {{ui:Materiaalit}} jokaisella ruudulla näkyvällä värillä on ilme: {{ui:Matta}}, {{ui:Satiini}}, {{ui:Kiiltävä}}, {{ui:Metalli}}, {{ui:Kiillotettu metalli}}, {{ui:Lasi}} tai {{ui:Himmeä lasi}}. {{ui:Maalaamattomat pinnat}} ovat pintoja, joilla ei ole omaa väriä.

Tee ikkunoista lasia [maalaamalla](topic:paint) ikkunaruudut yhdellä värillä ja aseta sitten väri ilmeeksi {{ui:Lasi}}. Lasi päästää taivaan ja sen takana olevan näkyviin, värjäytyneenä väriltään, ja heijastaa taivasta.

:::note
{{ui:Nopea}}-tilassa lasi ja metalli heijastavat taivasta, eivät muuta mallia, eikä valo taitu lasin läpi. Alla oleva {{ui:Korkea laatu (polunjäljitys)}}-tila tekee molemmat.
:::

## Korkea laatu

Valitse {{ui:Tila}} › {{ui:Korkea laatu (polunjäljitys)}} kuvaa varten, joka seuraa valoa niin kuin kamera sen näkee:

- valo heijastuu pintojen välillä, joten ikkunan tai lampun valaisema huone valaistaan joka puolelta ja värit valuvat naapureihinsa;
- lasi on oikeaa lasia: valo taittuu sen läpi ja se heijastaa mallia;
- metalli ja kiillotetut pinnat heijastavat muuta mallia;
- valopaneelit valaisevat paneelien tavoin, pehmeillä varjoilla.

Se on paljon hitaampi kuin {{ui:Nopea}}: jokainen kierros jäljittää jokaisen pikselin valon uudelleen. Kuva alkaa rakeisena ja selkiää näytteiden kertyessä. Aloita siksi pienellä ({{ui:Näkymän koko}}, {{ui:Luonnos}}) ja valitse {{ui:Aikaraja}}: kun se loppuu, siihen mennessä syntynyt kuva säilyy. {{ui:Pysäytä}} säilyttää sen myös. Ensimmäinen kierros odottaa, kun selain valmistelee polunjäljittäjän.

Kun selaimessa on WebGPU, polunjäljittäjä on CadCraftin oma ja se käy näytönohjaimella. Kuvan alla oleva rivi kertoo {{ui:Polunjäljitys näytönohjaimella (WebGPU)}}. Kun {{ui:Pysäytä}} tai aikaraja on tullut, {{ui:Jatka}} jatkaa samasta kuvasta, kunnes siinä on kaikki näytteet. Asetuksen muuttaminen tai {{ui:Renderöi}}-painikkeen painaminen uudelleen aloittaa alusta. Ilman WebGPU:ta kuva polunjäljitetään WebGL:llä (rivi kertoo sen), eikä {{ui:Jatka}} ole tarjolla.

:::linux
Firefoxissa ja useimmissa Chrome-asennuksissa Linuxilla ei ole vielä WebGPU:ta, joten korkea laatu käyttää siellä WebGL:ää.
:::

Tässä tilassa särmiä ei piirretä. Kirjastotekstuurit näyttävät värinsä ja karheutensa mutta eivät kuoppiaan. [Solmuilla tehty materiaali](topic:shading#in-high-quality-pictures) näyttää normaalinsa ja kuoppansa. Leikkaus tehdään mallille ennen kuvan alkua.

{{ui:Kohinanpoisto (poistaa näytteiden jälkeen jäävän rakeisuuden)}} on oletuksena päällä: kun kuva on valmis tai pysäytetty, siihen jäänyt rakeisuus poistetaan tätä varten tehdyllä neuroverkolla (Intel Open Image Denoisen julkaistu verkko, ajettuna omalla tietokoneellasi: näytönohjaimella tai muuten suorittimella). Vähän näytteitä sisältävä kuva tulee puhtaana. {{ui:Näytä}} › {{ui:Kuva ennen kohinanpoistoa}} näyttää sen renderöitynä.

## Renderöi näkymässä

{{ui:Renderöi}}-työtila ajaa polunjäljittäjän itse näkymässä: kierrä, muokkaa mallia tai muuta valoa, ja se alkaa heti alusta. {{ui:Alue}}: vedä suorakulmio, ja vain se renderöidään. {{ui:Koko näkymä}} palauttaa. {{ui:Tarkenna}}: napsauta kohtaa, jonka pitäisi olla terävää, ja syväterävyys tarkentuu siihen. {{ui:Yksityiskohta}} säätää, montako näkymän pikseliä renderöidään (vähemmän on nopeampaa). {{ui:Tauko}} pysäyttää ja jatkaa. Työtila tarvitsee WebGPU:n: ilman sitä se kertoo sen, ja {{ui:Vie}} › {{ui:Renderöi kuva…}} toimii silti.

## Taivaat ja valoprofiilit näytönohjaimella

WebGPU:n kanssa korkea laatu tarjoaa kaksi taivasta lisää:

- {{ui:Fysikaalinen taivas}} laskee päivänvalon auringon korkeudesta: syvän sinisen yläpuolella, vaalean vyön horisontissa ja auringon, joka lämpenee ja himmenee matalalla. {{ui:Utu}} vaihtelee hyvin selkeästä päivästä (2) sumuiseen (10).
- {{ui:Taivaskuva (HDRI)}} valaisee mallin todellisen paikan panoraamakuvalla. {{ui:Valitse kuva…}} ottaa equirectangular-muotoisen `.hdr`- tai `.exr`-tiedoston. {{ui:Kierrä}} kääntää sen mallin ympäri, ja {{ui:Kuvan kirkkaus}} tekee siitä vaaleamman tai tummemman. Kuvassa on oma aurinkonsa, joten mallin aurinkoa ei lisätä. Se säilyy vain, kun sivu on auki: avaamisen jälkeen valitse se uudelleen.

Jokainen {{ui:Lamput}}-luettelon lamppu voi ottaa valmistajan valoprofiilin. {{ui:IES-profiili…}} lukee IES (LM-63) -tiedoston, ja lamppu säteilee valonsa sen kiinnitteen tavalla (kapea alasvalaisin, seinävalaisin). Jokainen lamppu, jolla on sama nimi, käyttää sitä, ja lamppu säilyttää oman kirkkautensa. Napsauta profiilin nimeä lopettaaksesi sen käytön.

Kirkkaan lasin ikkunat auttavat taivaan valoa löytämään tiehensä huoneeseen, joten sisäkuvat taivaan alla selkiävät nopeammin.

{{ui:Nopea}}-tila ja WebGL-polunjäljittäjä näyttävät {{ui:Fysikaalisen taivaan}} ja {{ui:Taivaskuvan (HDRI)}} selkeänä taivaana, ja ne jättävät valoprofiilit huomiotta.

## Kamera

{{ui:Kamera}} asettaa kuvan kuten valokuvan:

- {{ui:Valotus}}: pidä {{ui:Kirkkausliukusäädin}}, tai valitse {{ui:Kameran asetukset}} ja aseta {{ui:Aukko (f-luku)}}, {{ui:Suljinaika}} ja {{ui:ISO}} kuten kamerassa. Niiden vieressä oleva EV on tavallinen valotusarvo. f/16, 1/100 s ja ISO 100 vastaa aurinkoista päivää. Tummempi kohtaus vaatii leveämmän aukon, hitaamman suljinajan tai korkeamman ISO:n. Tämä toimii kaikissa tiloissa.
- {{ui:Syväterävyys}} sumentaa ne kohdat, jotka ovat lähempänä tai kauempana kuin {{ui:Tarkennusetäisyys (m)}}, kuten sellainen objektiivi tekisi tällä f-luvulla. Jätä tyhjäksi tarkentaaksesi keskelle näkymää. {{ui:Aukon muoto}} antaa tarkentumattomille kohokohdille pyöreän tai lamellimuodon.
- {{ui:Kahden pisteen perspektiivi (pystyviivat pysyvät pystysuorina)}} tasoittaa kameran ja siirtää kuvaa, kuten arkkitehtuurin tilt-shift-objektiivi. Seinät eivät kallistu, kun katsot rakennusta ylös tai alas.
- {{ui:Valkotasapaino}} määrittää, mikä valon väri näkyy valkoisena: alempi (esimerkiksi 3000 K) lämpimälle lamppuvalolle, korkeampi varjoon ja pilvisiin päiviin.
- {{ui:Projektio}}: {{ui:360° panoraama}} tekee 2:1-kuvan kaikesta kameran ympärillä panoraamakatselimille. {{ui:360° stereopanoraama}} pinoaa vasemman ja oikean silmän panoraamat kuulokkeille. {{ui:Kuutiokartta (6 sivua)}} tekee kuusi neliönmuotoista näkymää 3 × 2 -ruudukkoon. Leveys tulee kohdasta {{ui:Koko}}.

Projektio, syväterävyys, kahden pisteen perspektiivi ja valkotasapaino vaativat polunjäljittäjän näytönohjaimella (WebGPU), joten ne näkyvät vain {{ui:Korkea laatu}}-tilassa.

## Viimeistele kuva

{{ui:Kuva}} arvioi korkean laadun kuvan kuten valokuvan. Jokainen säädin muuttaa valmista kuvaa heti, renderöimättä uudelleen:

- {{ui:Ilme (näkymämuunnos)}}: {{ui:ACES filmic}} (kuva kuten ennen), {{ui:AgX}} (pehmeämpi, säilyttää värin hyvin kirkkaassa valossa), {{ui:Filmic}} (lempeä filmikäyrä) tai {{ui:Vakio}} (tavallinen, kirkas valo leikkautuu valkoiseksi).
- {{ui:Kontrasti}} ja {{ui:Kirkkaiden alueiden pakkaus}} (palauttaa yksityiskohtia hyvin kirkkaisiin kohtiin).
- {{ui:Hehku}} (pehmeä hohde kirkkaan valon ympärillä), {{ui:Häikäisy}} sen {{ui:Häikäisyjuovat}}-asetuksineen (tähtisäteet kirkkaimmista pisteistä) ja {{ui:Vinjetti}} (tummemmat kulmat).
- {{ui:Väritaulukko (.cube)…}} soveltaa värisävytyksen `.cube`-tiedostosta sen {{ui:Väritaulukon voimakkuus}}-asetuksella. Kuten taivaskuva, se säilyy vain, kun sivu on auki.

## Tallenna kuva

{{ui:Tallenna muodossa}} {{ui:Tallenna}}-painikkeen vieressä valitsee tiedoston: {{ui:PNG}}, {{ui:JPEG}} tai {{ui:WebP}} jakamista varten (JPEG ja WebP vain, jos selain osaa kirjoittaa ne). Korkean laadun renderöinnin jälkeen näytönohjaimella myös:

- {{ui:PNG, 16 bittiä}}: sävytetty kuva hienommin porrastetuin sävyin, tulostusta tai jatkomuokkausta varten.
- {{ui:EXR, kaikki kerrokset (32-bittinen liukuluku)}}: kuva renderöitynä (lineaarinen valo, ei sävytystä), ja jokainen renderöintielementti ja valoryhmä omana kerroksenaan yhdistelyohjelmille.
- {{ui:Renderöintitiedosto (.ccrender, jälkisäätöä varten)}}: kaikki, mitä valintaikkuna tarvitsee kuvan sekoittamiseen ja sävyttämiseen uudelleen. {{ui:Avaa renderöintitiedosto…}} tuo sen takaisin sekoituksineen ja sävytyksineen ilman renderöintiä.

## Sekoita valot renderöinnin jälkeen

Ota {{ui:Valojen sekoitus (muuta kunkin valon väriä ja kirkkautta renderöinnin jälkeen)}} päälle ennen kuin painat {{ui:Renderöi}}. Kun kuva on valmis (tai pysäytetty), {{ui:Sekoita kuva}} listaa sen valot ryhmittäin: taivaan, auringon ja lamput nimen mukaan. Jokainen saman nimen lamppu on yksi ryhmä. Kytke ryhmä pois päältä, anna sille väri tai tee se vaaleammaksi tai tummemmaksi, ja kuva muuttuu heti, renderöimättä uudelleen. {{ui:Tallenna sekoitus}} säilyttää sekoituksen nimen alla valittavaksi myöhemmin. {{ui:Sellaisena kuin renderöity}} palauttaa kuvan sellaisena kuin se tehtiin. {{ui:Tallenna}} tallentaa sekoitetun kuvan.

{{ui:Renderöintielementit (albedo, normaalit, syvyys, diffuusi, kiilto, läpäisy, emissio, tunnukset)}} säilyttää kuvan osat myös. {{ui:Näytä}} vaihtaa näkymän yhteen niistä: pintavärit (albedo), normaalit, syvyys, diffuusi, kiilto ja läpäisevä valo (kukin suora ja epäsuora), mikä hehkuu ja taivas, sekä väri kohdetta tai materiaalia kohden maskien tekemistä varten.

Molemmat pitävät ylimääräisiä kerroksia näytönohjaimella. Suurilla kooilla näytönohjaimessa ei ehkä ole tilaa. Valintaikkuna kertoo sen, ja pienempi koko toimii.

## Renderöintijono

Korkean laadun asetuksen jälkeen {{ui:Lisää tämä kuva jonoon}} kohdassa {{ui:Renderöintijono}} säilyttää kuvan juuri nyt asetettuna. Videovalintaikkunan {{ui:Lisää tämä animaatio jonoon}} tekee saman koko animaatiolle, polunjäljitettynä kehys kerrallaan. {{ui:Käynnistä jono}} renderöi ne peräkkäin tällä tietokoneella, ja jokaisen valmiin vieressä oleva {{ui:Tallenna}} lataa sen. Sivun sulkeminen säilyttää jonon: avaa sama malli, ja se jatkuu siitä, mihin se pysähtyi. Jono tarvitsee WebGPU:n.

## Sumu, savu, kohina ja kaustiikka

Nämä ovat kohdassa {{ui:Sumu, savu ja kohina}} ja toimivat {{ui:Korkea laatu}}-tilassa näytönohjaimella. Muut moottorit jättävät ne pois.

- {{ui:Sumu ja utu}} täyttää ilman tiettyyn korkeuteen asti sumulla, jonka aurinko, taivas ja lamput valaisevat. {{ui:Kuinka kauas näkee, metreinä}} asettaa sen paksuuden (noin 100 m on kevyt utu, 20 m sakea sumu). {{ui:Sumun korkeus maanpinnasta, metreinä}} on kohta, jossa se päättyy, ja {{ui:Valopilarit}} kertoo, kuinka paljon sumu hehkuu valoa kohti. Auringonvalo jättää sumun yläosastaan, joten missä aurinko tulee ikkunasta tai rakennusten välistä, näet sen valopilareina.
- {{ui:Savu tai pilvi}} lisää yhden savu- tai pilvitilavuuden, valaistuna kuten sumu. {{ui:Laji}} on {{ui:Pilvi}}, {{ui:Savupilari}} tai {{ui:Tilavuustiedostosta (.ccvol)}}, CadCraftin oma ruudukkomuoto. {{ui:Yksityiskohta}} ja {{ui:Vaihtelu}} muuttavat tehtyä pilveä tai pilaria. {{ui:Pisimmän sivun koko metreinä (0 = mallin koko)}}, {{ui:Siirrä X (m)}}, {{ui:Siirrä Y (m)}}, {{ui:Siirrä Z (m)}} ja {{ui:Kierrä}} sijoittavat sen (se alkaa mallin keskeltä). {{ui:Paksuus}} tekee siitä tiheämmän, {{ui:Eteenpäinhehku}} tekee siitä kirkkaamman kohti valoa, ja {{ui:Väri}} sävyttää sen. Tilavuustiedosto säilyy vain, kun sivu on auki, kuten taivaskuva.
- {{ui:Lopeta aikaisin siellä, missä kuva on puhdas (mukautuva näytteistys)}} ei anna lisää näytteitä pikseleille, jotka ovat asettuneet, joten muu kuva valmistuu nopeammin. {{ui:Hyväksyttävä kohina}} on rakeisuus, joka jää, kun pikseli pysähtyy. Kuvan alla oleva rivi kertoo, kuinka monta näytettä pikseli sai keskimäärin.
- {{ui:Kaustikat (lasin taittama tai peilien heijastama valo)}} seuraa lampuista ja auringosta tulevaa valoa. Lasipallon alla oleva kirkas laikku tai peilin valo seinällä tulee siksi puhtaana eikä rakeisena. Se on pois päältä, kun sumu, savu, valojen sekoitus renderöinnin jälkeen tai renderöintielementit ovat päällä. Se on tehty kuville, ei 360°-kuville, animaatioille tai {{ui:Renderöi}}-työtilalle.

## Kuinka kauan se kestää

Kuva tehdään omalla tietokoneellasi sen näytönohjaimella. Mitään ei lähetetä. Kesto riippuu kortista. Aika kasvaa kierrosten ja pikseleiden mukana: {{ui:Paras}} on 16 kertaa {{ui:Luonnos}}-kierrokset, ja 4K-kuvassa on noin neljä kertaa Full HD:n pikselit. Tietokone ilman näytönohjainta renderöi silti, mutta hitaammin.

:::note
Jos valintaikkuna kertoo, ettei selain osaa renderöidä kuvia, selaimesta puuttuu WebGL 2. Päivitä se tai ota laitteistokiihdytys päälle sen asetuksista.
:::
