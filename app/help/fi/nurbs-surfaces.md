---
title: Vapaamuotoiset pinnat (NURBS)
summary: Sileät käyrät ja pinnat tuotekuorille, autojen kereille ja venekorkeille — loft, pyyhkäisy, käyräverkot, neljän reunan paikat, sulautukset ja leikkaukset — G0-, G1- ja G2-jatkuvuus mitattuna tarkoilla pinnoilla, kiintokappaleet yhdisteellä, vähennyksellä ja leikkauksella, zebra- ja kaarevuusnäkymät, skannaukseen sovitetut pinnat virhettä mittaten sekä STEP- ja IGES-tiedostot.
keywords: nurbs, skannaus, käänteinen suunnittelu, sovitus, verkko pinnaksi, pistepilvi, stl, typistä, typistetty, reikä, leikkaa, kiintokappale, kiintokappaleet, boolen, yhdiste, vähennä, leikkaus, erotus, ompele, suljettu, vapaamuotoinen, freeform, free-form, pinta, pinnat, b-spline, bspline, käyrä, spline, loft, pyyhkäisy, kisko, verkko, coons, paikka, sulautus, jatkuvuus, g0, g1, g2, tangentti, kaarevuus, zebra, ohjauspisteet, solmut, aste, step, iges, class a
from: 09887405
---

**Pinnat**-paneeli tekee sileitä käyriä ja pintoja, joita käytetään tuotekuorissa, autojen kereissä ja venekorkeissa: NURBS, sama matematiikka, jota muut pintamallinnusohjelmat käyttävät. Kaikki mitataan tarkoilla pinnoilla, ei koskaan näkemiesi kolmioiden päältä. Paneelin koot ovat **millimetreinä**, mikä yksikkö mallissa näkyykin.

Avaa se oikeasta paneelista: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Malli, jossa on jo pintoja, avaa sen itsestään.

## Komennon toiminta

1. Paina komentoa (esimerkiksi **Loft**). Paneeli kertoo, mitä se vielä tarvitsee: pisteitä, käyriä, pinnan reunan tai käyrän pään.
2. Valitse ne: napsauta niitä 3D-näkymässä tai paina **Valitse** (tai reuna- ja päänappeja) kunkin vieressä luettelossa. Reunaa varten napsauta lähellä pinnan reunaa.
3. Tarkista asetukset (aste, toleranssi, jatkuvuus ja muut) ja paina **Tee**.

Pisteistä tehtävät käyrät ottavat pisteet kirjoitettuina yksi riviltä (`x, y, z` mm:nä) tai **Valitse pisteet näkymästä**: jokainen napsautus käyttää samaa tartuntaa kuin piirtotyökalut; paina <kbd>Enter</kbd> tai kaksoisnapsauta lopettaaksesi, <kbd>Esc</kbd> pysäyttääksesi.

## Käyrät

- **Käyrä pisteiden läpi** kulkee jokaisen pisteen kautta. **Käyrä ohjauspisteiden mukaan** seuraa sen sijaan pisteiden häkkiä.
- **Lisää solmu**, **Nosta astetta** ja **Laske astetta** muuttavat käyrän kuvausta siirtämättä sitä (laskeminen hylätään, jos käyrä siirtyisi enemmän kuin toleranssi). **Rakenna käyrä uudelleen** antaa sille uuden määrän ohjauspisteitä ja kertoo, kuinka paljon se siirtyi.
- **Sovita käyrä** saa yhden käyrän pään koskettamaan toisen päätä G0:lla (koskettaa), G1:llä (sama suunta) tai G2:lla (sama kaarevuus myös). **Sulautuskäyrä** lisää uuden käyrän kahden pään väliin.
- **Yhdistä käyrät** ja **Jaa käyrä**.

## Pinnat

- **Loft** kahden tai useamman käyrän läpi, **Viivapinta** kahden välillä, **Pursota käyrä**, **Kierrä käyrä**.
- **Pyyhkäisy yhtä kiskoa pitkin** kuljettaa profiilin polkua pitkin kiertämättä sitä; **Pyyhkäisy kahta kiskoa pitkin** pitää profiilin päät molemmilla kiskoilla. Pyyhkäisyt sovitetaan: tilarivi kertoo, kuinka lähellä todellista pyyhkäisyä se pysyi.
- **Pinta käyräverkosta** kulkee käyrien ruudukon läpi (ensimmäiset valinnat ovat profiileja, loput ohjaimia). **Paikka neljästä reunasta** täyttää neljä käyrää, jotka kohtaavat kulmissaan.
- **Sovita pinta** saa pinnan reunan koskettamaan naapuria G0:lla, G1:llä tai G2:lla; **Sulautuspinta** lisää pinnan kahden reunan väliin.
- **Siirtymäpinta**, **Pidennä pinta** (pinta jatkuu kuten se oli menossa), **Rakenna pinta uudelleen** sekä pintojen solmut ja aste.

## Laadun tarkistaminen

Taulukko **Jaetut reunat** luettelee jokaisen reunan, jonka kaksi pintaa jakaa, raon (mm), niiden välisen kulman (°) ja kaarevuushypyn (1/mm), sekä sen, tekeekö se siitä G0:n, G1:n vai G2:n. Reuna, joka on huonompi kuin pyysit, on myös **Ongelmat**-listassa (sovelluspalkin ⚠-painike) korjauksella **Sovita**.

**Näytä muodossa** › **Zebra-raidat** ja **Kaarevuus (Gaussin)** tulevat tarkasta pinnasta: raidat, jotka kulkevat katkeamatta reunan yli, tarkoittavat G1:tä; raidat, jotka säilyttävät myös leveytensä, tarkoittavat G2:ta. Kaarevuus on sinistä, kun pinta on satulamainen, punaista, kun se on kupoli, ja valkoista, kun se on tasainen. **Ohjauspisteet** piirtää ohjausverkot.

G0–G2 mitataan 33 pisteessä reunaa kohden. **G3:a ja ”class A” -laatua ei mitata**, eikä niitä väitetä.

## Typistä pinta

Ryhmä **Typistä** leikkaa pinnan muuttamatta sen muotoa: pinta säilyttää kaikki ohjauspisteensä, ja vain ääriviivan sisäpuoli näytetään, lasketaan ja kirjoitetaan. **Typistä suorakulmioon** ja **Typistä ympyrällä** toimivat pinnan osuudella (0–1) kussakin suunnassa, joten ne eivät vaadi valintaa näkymästä; **Typistä käyrällä** ottaa suljetun käyrän, joka on pinnalla (se projisoidaan pintaan, ja se hylätään sanallisesti, jos se on avoin tai yli toleranssin päässä). Rastita **Leikkaa reikä** poistaaksesi ääriviivan sisäpuolen; jätä rasti pois säilyttääksesi vain sisäpuolen. Pinnalla voi olla yksi säilytettävä ääriviiva ja mikä tahansa määrä reikiä; ääriviiva, joka leikkaa toisen, hylätään. **Poista typistys** näyttää koko pinnan uudelleen. Leikkausreunat seuraavat ääriviivaa tarkasti; paneelin **Kumoa** palauttaa typistyksen kuten minkä tahansa muun vaiheen.

STEP kuljettaa typistyksen pinnan rajoina ja IGES typistettynä pintana (kohde 144); molemmat lukevat sen takaisin.

## Kiintokappaleet ja Boolen-operaatiot

Ryhmä **Kiintokappaleet** tekee pinnoista suljettuja kappaleita ja yhdistää ne. Kiintokappale tässä on joukko paneelin omia pintoja, jotka yhdessä sulkevat tilavuuden; sen pinnat pysyvät tarkkoina NURBS-pintoina typistyksineen.

- **Laatikkokiintokappale**, **Sylinterikiintokappale** ja **Pallokiintokappale** tekevät yhden kirjoitetuista kooista (mm:nä): laatikko kuudella tasaisella pinnalla, sylinteri pyöreällä sivulla ja kahdella tasaisella päällä, jotka on typistetty ympyrään, pallo yhdestä kierretystä pinnasta.
- **Kiintokappale pinnoista** ryhmittää itse tekemäsi pinnat. Valitse ne tai älä valitse mitään käyttääksesi jokaista näkyvää pintaa, joka ei vielä ole kiintokappaleessa. Ne ommellaan yhteen toleranssin sisällä: jos ne eivät sulkeudu, mikään ei muutu ja paneeli kertoo, kuinka monta reunaa on auki ja kuinka lähellä niiden on yhdyttävä.
- **Yhdiste**, **Vähennä** (toinen kiintokappale vähennetään ensimmäisestä) ja **Leikkaus** (vain se, minkä molemmat jakavat) tarvitsevat kaksi kiintokappaletta: napsauta kumpaankin yhtä pintaa näkymässä tai paina **Valitse** **Kiintokappaleet**-luettelossa. Rastita **Säilytä kaksi kiintokappaletta** jättääksesi ne tuloksen viereen.

Boolen-operaatio säilyttää jokaisen pinnan omalla tarkalla pinnallaan ja leikkaa sen uusilla typistysääriviivoilla leikkausviivaa pitkin. Tulosrivi antaa mitatut luvut: kuinka paljon kiintokappalemoottorin pisteiden piti siirtyä, jotta ne asettuvat tarkoille pinnoille (ei koskaan enemmän kuin toleranssi), kuinka lähellä leikkauspisteet ovat molempia pintoja (yleensä muutama miljoonasosamillimetri), tilavuus ja se, sulkeutuvatko uudet pinnat uudelleen, kun ne ommellaan tarkoista pinnoistaan. Tilavuudet mitataan kolmioista toleranssin sisällä (0,05 mm, ellei toisin aseteta), joten pallon tai sylinterin tilavuus on hieman tarkkaa pienempi: pienempi toleranssi on lähempänä. Boolen-operaatio, jota ei voida tehdä siististi (kiintokappaleet eivät jaa mitään, ääriviiva leikkaisi itsensä), hylätään sanallisesti eikä muuta mitään. Yksi Boolen-operaatio on yksi vaihe paneelin **Kumoa**-toiminnossa.

**Kiintokappaleet**-luettelossa **Pura ryhmitys** säilyttää pinnat tavallisina pintoina; roskakori poistaa kiintokappaleen ja sen pinnat.

**Lisää malliin** (**Kiintokappaleet**-luettelossa) asettaa kopion kiintokappaleesta malliin yhtenä suljettuna ryhmänä, pinnat kolmioina 0,05 mm:n sisällä, yhtenä vaiheena mallin Kumoa-toiminnossa. Sen jälkeen se toimii mallin omien **Yhdiste**-, **Vähennä**- ja **Leikkaus**-työkalujen, push-pullin ja 3D-tulostuksen tarkistuksen kanssa; tarkka kiintokappale pysyy paneelissa.

## Pyöristykset ja paksunnus

**Pinnojen välinen pyöristys** pyöristää reunan, jossa kahden yhden kiintokappaleen pinnan rajat kohtaavat: valitse kaksi pintaa (näkymästä tai luettelon **Valitse**-painikkeella), kirjoita **säde** ja, jos säde muuttuu reunan mukana, **säde lopussa** (0 pitää yhden säteen). Pallo tuon säteen kokoisena vierii reunaa pitkin koskettaen molempia pintoja; pyöristys on tarkka ympyränkaari, joka siinä jää jokaiseen pisteeseen, yhdistettynä yhdeksi pinnaksi, ja kaksi pintaa typistetään siitä, mihin pallo koskettaa. Ulkoreuna menettää materiaalia, sisäkulma saa sitä. Tulosrivi antaa mitatut arvot: kuinka kaukana pyöristyspinta on vierivästä pallosta niiden pisteiden välillä, joista se rakennettiin (pisteitä lisätään, kunnes se on neljänneksen toleranssin sisällä), suurin kulma pyöristyksen ja kunkin pinnan välillä kosketuslinjoja pitkin sekä samat luvut kuin Yhdisteessä. Säde, joka ei mahdu (pallo jättäisi pinnan tai pinta kaartuisi tiukemmin kuin säde), hylätään nimeämällä pinta, eikä mikään muutu.

**Pyöristä useita reunoja** pyöristää monta reunaa yhdessä vaiheessa: valitse ensimmäisen reunan kaksi pintaa, sitten seuraavan reunan kaksi pintaa ja niin edelleen (pinta voi olla useassa parissa, esimerkiksi laatikon yläpinta neljässä niistä); kaikki reunat saavat kirjoittamasi säteen. Jokainen pyöristys lasketaan kiintokappaleesta sellaisena kuin se oli, ja sitten ne leikataan peräkkäin, joten järjestyksellä ei ole väliä. Kun kaksi pyöristettyä reunaa kohtaa kulmassa, jonka muut reunat pysyvät teräväreunaisina, kaksi pyöristystä yhtyvät leikkauskäyränsä kohdalla (taite). Kun kolme pyöristettyä ulkoreunaa kolmesta tasaisesta pinnasta, jotka ovat suorassa kulmassa toisiinsa nähden, kohtaavat yhdellä säteellä, kulma on yksi **pallopaikka**, joka koskettaa kaikkia kolmea pyöristystä (poista rasti **Kulmat** saadaksesi taitetun kulman); reunan on oltava vähintään kaksi kertaa säteen pituinen, kun sen molemmat päät ovat tällaisia kulmia. Tulosrivi kertoo, kuinka monta reunaa pyöristettiin ja miten kulmat onnistuivat. Sisäreunat voi pyöristää myös yhdessä, mutta tulos, joka ei sulkeudu uudelleen, ilmoitetaan vain (rivi kertoo sen), joten tarkista se.

**Paksunna kiintokappaleeksi** antaa pinnalle paksuuden: valitse se, kirjoita **paksuus** ja rastita **Toinen puoli** kasvattaaksesi sitä toiseen suuntaan. Siirretty pinta sovitetaan pintaan ja mitataan sitä vasten (tulosrivi antaa suurimman eron paksuudesta); seinät seuraavat jokaista reunaa ja jokaista typistysääriviivaa. Jos pinta kaartuu tiukemmin kuin paksuus sillä puolella tai jokin muu sen osa on lähempänä kuin paksuus, se hylätään nimeämällä pinta ja paikka, eikä mikään muutu.

## Kumoa, tiedosto, STEP ja IGES

Paneelilla on oma **Kumoa** ja **Tee uudelleen** (yksi vaihe komentoa kohti). Pinnat tallennetaan `.modelcraft`-tiedostoon mallin kanssa; ne eivät ole mallin omassa kumoamisessa, kuten tiedoston materiaalit eivät ole.

**STEP…** (AP242) ja **IGES…** tallentavat käyrät ja pinnat juuri sellaisina kuin ne ovat (B-spline-käyrät ja -pinnat, mitään ei muuteta kolmioiksi). Jokainen pinta on oma pintansa typistyksineen; kiintokappale kirjoitetaan yhtenä suljettuna kuorena, jokainen reuna jaettuna kahden pinnan kesken, kuten muut CAD-ohjelmat odottavat (tilarivi kertoo, kuinka monta kiintokappaletta lähti näin). IGES:ssä sama kiintokappale on yksi monisto-kiintokappale-B-rep (kohde 186 suljetun kuoren 514 päällä, pinnat 510, silmukat 508, yksi reunalista 504 ja yksi kärkipistelista 502); kiintokappale, jonka pinnat eivät pariudu reunoittain, kirjoitetaan erillisinä pintoina, ja rivi kertoo sen. **Tuo…** lukee tällaisen kiintokappaleen takaisin kiintokappaleena sekä STEP- että IGES-tiedostosta. Se lukee tällä tavalla kirjoitetut käyrät ja pinnat sekä `.ccnurbs`-paikkajoukot; muiden ohjelmien STEP-kiintokappaleet avataan Tiedosto › Tuo -komennolla verkkoina.

## Pinnat skannauksesta (käänteinen suunnittelu)

Valitse skannattu verkko mallissa (jos mitään ei ole valittu, kaikki näkyvä), avaa **Pinnat** ja valitse ryhmässä **Skannaus** komento **Sovita pinnat skannaukseen**. Työkalu etsii **tasoja**, **sylintereitä**, **palloja** ja **kartioita** (tarkat pinnat, joista koneistettu osa koostuu; jokainen rivi näyttää löytämänsä säteen tai puolikulman), löytää **pyöristyksiä** (pyöristetyt reunat ja kulmat: pieni sylinteri tai pallo, joka kulkee tangentiaalisesti kahteen tai useampaan muuhun pintaan, näytettynä säteellään ja yhdistämillään pinnoilla), **kehäpyöristyksiä** (vääntö: pyöristetty reuna, jossa tasainen pinta kohtaa sylinterin tai kartion, näytettynä säteellään ja renkaan säteellään) ja **muuttuvia pyöristyksiä** (pyöristetty reuna, jonka säde muuttuu reunaa pitkin, näytettynä säteellä kussakin päässä), sovittaa **yhden vapaamuotoisen paikan** tasaiseen, lempeästi kaarevaan kappaleeseen ja leikkaa jokaisen pinnan sen osan ääriviivaan, jonka skannauksesta se tuli, joten reiät ja kulmat säilyvät. Asetukset: **toleranssi** (kuinka kaukana, mm, skannauspiste saa olla tasosta tai sylinteristä ja yhä kuulua siihen, ja tavoite vapaamuotoiselle paikalle), **pienin kappale** (osuus pinta-alasta) ja **enimmäismäärä pintoja**. Sama skannaus ja samat asetukset antavat aina samat pinnat.

Tulos on taulukko, yksi rivi pintaa kohden: sen laji, kuinka monesta kolmiosta se tuli ja **virhe, joka mitataan skannauksesta pintaan** (rms, suurin ja osuus pisteistä toleranssin sisällä). Mitatut pisteet ovat skannauksen kärkipisteitä ja kunkin kolmion keskikohtia. Virhettä ei mitata toiseen suuntaan (pinnasta skannaukseen), joten pinta, joka ulottuu skannauksen yli, ei näkyisi. Taulukon alla oleva huomautus kertoo myös, kuinka suuri osa pinta-alasta oli liian pieni sovitettavaksi. Näkymässä skannauspisteet värjätään **poikkeamakartan** mukaan: sininen pinnalla, vihreä puolivälissä toleranssia, punainen toleranssissa tai sen yli (poista rasti **Näytä poikkeamakartta** piilottaaksesi sen). Osat, jotka taittuvat itsensä päälle (esimerkiksi suljettu putki, johon on sovitettu vapaamuotoisia paikkoja), luetellaan sovittamattomina, eikä niitä koskaan pakoteta yhdeksi pinnaksi.

**Ompele pinnat kiintokappaleeksi** ompelee yhteen suljetuksi kiintokappaleeksi jokaisen näkyvän pinnan, joka ei ole vielä kiintokappaleessa. Skannauspinnat kohtaavat vain skannauksen oman virheen sisällä, joten se kokeilee pienintä liitosetäisyyttä, joka sulkeutuu (ei koskaan yli **ompeluetäisyyden**, jonka asetat), ja hylkää sanallisesti, jos pinnat eivät sulkeudu. Se ei koskaan paikkaa aukkoa. Laatikko, jonka reunat on pyöristetty, ompeltaan, kun sen pyöristykset on löydetty omina pintoinaan; sulkeutunut liitosetäisyys on tuloksessa. Kiintokappale toimii sen jälkeen Yhdisteen, Vähennä-, Leikkaus- ja **Lisää malliin** -toimintojen kanssa.

Mitä se ei tee: **kehäpyöristystä** (vääntöä) etsitään vain jo löydetyn sylinterin tai kartion akselin ympäriltä, ja **muuttuvaa pyöristystä** vain melko suoraa reunaa pitkin (sen leikkaukset on leikattu neliöön yhteen suuntaan); muualla ne tulevat vapaamuotoisina paikkoina, kun ne ovat riittävän sileitä, ja muuten jätetään pois; pallot, kartiot ja pyöristykset löydetään satunnaisotannalla, joten hyvin pieni (muutama kolmio) voi jäädä huomaamatta; poikkeamakartta näyttää etäisyyden skannauksesta pintoihin, ei toiseen suuntaan; hyvin suuret skannaukset (yli 300 000 kolmiota) hylätään täällä. Täyden kierroksen sylinterin pinnat leikataan reikien ympäriltä, ja sauma asetetaan kohtaan, jossa ei ole reikää. Tarkista jokainen pinta skannaukseesi nähden ennen kuin luotat siihen.

## Ei vielä toteutettu

Kaarevien pintojen kulmissa kohtaavien reunojen pyöristys tai eri säteillä olevien reunojen pyöristys (kärkisulautus), pinnojen välinen pyöristys pinnoille, jotka eivät kohtaa, sisäpyöristys, joka päättyy vinoon tai kaarevaan pintaan, sekä Boolen-operaatiot ja pyöristykset, jotka lasketaan pinnoilla ilman kolmioita (täällä kiintokappalemoottori toimii kolmioilla toleranssin sisällä, ja jokainen piste asetetaan sitten takaisin tarkoille pinnoille).
