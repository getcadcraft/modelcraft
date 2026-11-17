---
title: Muokkaa verkkoa verkkotyötilassa
summary: Valitse verkon kärkipisteet, särmät ja pinnat, siirrä niitä ja pursota, upota, viistä, leikkaa, yhdistä, täytä ja silloita ne kummalla tahansa näppäintyylillä.
keywords: verkko, muokkaustila, verkkotyötila, kärkipiste, kärkipisteet, särmä, särmät, pinta, pinnat, pursota, upotus, viiste, silmukkaleikkaus, veitsi, puolita, pyöräytä, yhdistä, liuota, täytä, ruudukkotäyttö, silta, jaa, liu'uta, verrannollinen muokkaus, työtila
from: 92a372dd
---

**Verkko**-työtila muokkaa [verkkoa](topic:meshes) pisteittäin: sen kärkipisteitä, särmiä ja pintoja. Työnnä/vedä-geometria pysyy **Malli**-työtilassa.

## Avaa se

- Valitse {{ui:Verkko}} {{ui:Työtila}}-luettelosta työkalurivin vasemmalla puolella. Valittu verkko avautuu muokattavaksi. Valittu ryhmä tai komponentti muunnetaan ensin verkoksi (yksi kumoamisvaihe).
- Tai kaksoisnapsauta verkkoa, tai mallintajan näppäimillä valitse se ja paina {{key:Tab}}.
- Kun mitään ei ole valittu, paneeli tarjoaa lisättäviä verkkoja: taso, ruudukko, kuutio, ympyrä, sylinteri, kartio, pallo, ico sphere ja toroidi. Uusi lisätään siihen, mihin näkymä katsoo, ja se avautuu muokattavaksi.

{{ui:Takaisin Malliin}} (tai luettelo, {{key:Tab}} mallintajan näppäimillä, {{key:Esc}} kun mitään ei ole valittu työnnä/vedä-näppäimillä) palaa Malliin, verkko valittuna. Kun Verkko-työtila on auki, muu malli himmennetään ja Mallin piirtotyökalut piilotetaan.

## Valitse

| Tee | Tulos |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Valitse kärkipisteet, särmät tai pinnat |
| Napsauta | Valitse yksi; {{key:Shift}}+napsautus lisää tai poistaa |
| Vedä laatikko | Valitse sisällä oleva ja näkyvä; {{key:Shift}} lisää, {{key:Ctrl}} poistaa |
| {{key:Alt}}+napsautus särmään tai kaksoisnapsautus siihen | Sen särmäsilmukka (pintasilmukka pintatilassa; koko reuna avoimella särmällä) |
| {{key:Ctrl}}+{{key:Alt}}+napsautus särmään | Sen särmärengas |
| Kolminkertainen napsautus | Kaikki siihen liittyvä |

{{ui:Valitse}}-ryhmässä on myös {{ui:Kaikki}}, {{ui:Yhteenliittyneet}}, {{ui:Silmukka}}, {{ui:Rengas}}, {{ui:Lisää}} ja {{ui:Vähemmän}}.

## Siirrä, kierrä, skaalaa

{{ui:Siirrä}}, {{ui:Kierrä}} ja {{ui:Skaalaa}} alkavat osoittimesta: liikuta sitä, napsauta tai paina {{key:Enter}} asettaaksesi valinnan paikalleen, tai {{key:Esc}} peruuttaaksesi. {{key:X}}, {{key:Y}} tai {{key:Z}} (tai nuolinäppäimet) lukitsevat akselin. Kirjoita etäisyys, kulma tai kerroin tarkkaa arvoa varten. Myös [laskelmat](topic:value-box#calculations) toimivat.

**Verrannollinen muokkaus** ({{ui:Verrannollinen}} tai paneeli): valinnan lähellä olevat kärkipisteet seuraavat siirtoa, sitä vähemmän mitä kauempana ne ovat, asettamaasi ulottuvuuteen asti ja valitsemallasi vaimennuksella. Kytke {{ui:Vain verkkoa pitkin}} päälle, jos haluat mitata särmiä pitkin suoran sijaan.

{{ui:Liu'uta}} siirtää valittua särmäsilmukkaa sen vierellä olevia särmiä pitkin.

## Muuta muotoa

| Työkalu | Tekee |
|---|---|
| {{ui:Pursota}} | Vetää valitut pinnat ulos normaalinsa suuntaan uusilla sivupinnoilla (tai tekee pintoja avoimista reunasärmistä). Kirjoita etäisyys |
| {{ui:Upotus}} | Nauha valittujen pintojen ääriviivan sisällä. Paina {{key:I}} uudelleen jokaiselle pinnalle erikseen |
| {{ui:Viiste}} | Viistää valitut särmät (tai, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, kärkipisteet) tietyllä leveydellä. Rulla tai plus- ja miinusnäppäimet lisäävät segmenttejä pyöristettyä särmää varten |
| {{ui:Silmukkaleikkaus}} | Osoita särmää: uudet silmukat neliönpintojen renkaan poikki. Rulla asettaa määrän. Napsauta leikataksesi |
| {{ui:Veitsi}} | Napsauta pisteitä särmillä tai kulmissa. {{key:Enter}} leikkaa suoraan pintojen yli niiden välillä, sellaisina kuin näet ne |
| {{ui:Puolita}} | Piirrä viiva näytölle: valitut pinnat (tai kaikki) leikataan sitä pitkin |
| {{ui:Pyöräytä}} | Kääntää valittuja pintoja tai avoimia särmiä sinisen akselin ympäri askelittain (rulla asettaa askeleet). Täysi kierros sulkee |
| {{ui:Jaa}} | Jakaa valitut särmät kahtia. Kokonaiset pinnat muuttuvat ruudukoksi |
| {{ui:Yhdistä}} | Valitut kärkipisteet yhdistyvät yhdeksi keskikohtaan |
| {{ui:Liuota}} | Poistaa valinnan, mutta säilyttää pinnan: pinnat yhdistyvät |
| {{ui:Täytä}} | Pinta valitun avoimen reunan yli (tai kahden avoimen särmän väliin) |
| {{ui:Ruudukkotäyttö}} | Täyttää avoimen reunan, jossa on parillinen määrä särmiä, nelisivuisten ruudukolla |
| {{ui:Silta}} | Yhdistää kaksi valittua avointa särmäsilmukkaa pinnoilla |
| {{ui:Laskos}} | Kuinka terävinä valitut särmät pysyvät, kun verkko tasoitetaan jakopinnalla: liiku keskustasta poispäin, käytä rullaa (0.1 askelin) tai kirjoita 0–1. Paneeli näyttää valittujen särmien laskoksen ja ottaa myös kirjoitetun arvon. Laskostetut särmät piirretään magentalla |
| {{ui:Käännä}}, {{ui:Tasoita}}, {{ui:Poista}} | Kääntää pinnat; tasoittaa kärkipisteitä kohti naapureitaan; poistaa valintatilan mukaan |

Jokainen on yksi kumoamisvaihe. Tekstuurikoordinaatit, värit ja painot siirtyvät uusille pinnoille ja kärkipisteille.

## Verkota uudelleen

{{ui:Verkota uudelleen}} tekee koko verkon uudelleen tasaisina kolmioina yhdessä koossa, pyydettynä painettaessa (pienempi on tarkempi ja hitaampi). Se sulkee reiät, yhdistää päällekkäiset osat ja tasoittaa verkon, jonka veistäminen on venyttänyt. Terävät särmät tulevat hieman pyöristettyinä. UV:t, maali ja laskokset alkavat alusta. Yksi kumoamisvaihe.

## Uudelleentopologia

Rakentaaksesi uuden, siistimmän verkon yksityiskohtaisen päälle (veistos, skannaus), valitse yksityiskohtainen verkko kohdassa {{ui:Uudelleentopologia}} › **Rakenna päälle** paneelissa, sitten:

- **Tartunta siirrettyihin pisteisiin:** siirtämäsi pisteet ja pursottamasi särmät asettuvat sen pinnalle.
- **Aseta valitut pisteet siihen** siirtää valitut pisteet siihen heti (yksi kumoamisvaihe).
- **Näytä tämän verkon särmät edessä** piirtää rakennettavan verkon pinnan päälle, jotta näet sen.

## Säädä viimeistä toimintoa

Kun {{ui:Upotus}}, {{ui:Viiste}}, {{ui:Silmukkaleikkaus}}, {{ui:Jaa}}, {{ui:Tasoita}}, {{ui:Ruudukkotäyttö}} tai {{ui:Pyöräytä}} on tehty, paneeli näyttää sen asetukset (leveys, segmentit, profiili, leikkaukset …). Kun muutat yhtä, toiminto tehdään uudelleen alusta asti, yhä yhtenä kumoamisvaiheena.

## Näppäimet

| | Työnnä/vedä-näppäimet | Mallintajan näppäimet |
|---|---|---|
| Siirrä, kierrä, skaalaa | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} kahdesti liu'uttaa) |
| Pursota, upota | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Poista | {{key:E}} tai {{key:Delete}} | {{key:X}} tai {{key:Delete}} |
| Laskos | {{key:Shift+C}} | {{key:Shift+E}} |
| Valitse kaikki, ei mitään, käännä valinta | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Molemmat | {{key:Ctrl+B}} viiste, {{key:Ctrl+R}} silmukkaleikkaus, {{key:K}} veitsi | sama, ja {{key:F}} täyttö, {{key:M}} yhdistä, {{key:Ctrl+X}} liuota, {{key:L}} / {{key:Ctrl+L}} yhteenliittyneet, {{key:Alt+N}} käännä, {{key:O}} verrannollinen, {{key:Shift+V}} kärkipisteen liu'utus |

Katso myös [Verkot](topic:meshes), [Muokkaimet verkolla](topic:modifiers) ja [Ei vielä toteutettu](topic:not-built-yet).
