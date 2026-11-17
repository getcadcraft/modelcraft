---
title: Siirtyminen muista mallintajista
summary: Miten push/pull-mallinnuksen tavat vastaavat ModelCraftia näppäin kerrallaan, ja erot, jotka yllättävät ihmiset.
keywords: vaihtaminen, siirtyminen, tutut, erot, push pull -mallintaja, skp, pikanäppäimet, tavat, vertailu, mittalaatikko, kohdeluettelo, kohteen tiedot
from: 74ffd4ac
---

Jos olet mallintanut SketchUpilla, ModelCraft tuntuu tutulta: sama ajatus pinnoista ja push/pullista, samat työkalukirjaimet, arvolaatikko, johon kirjoitat napsauttamatta, päättely punaisten, vihreiden ja sinisten akselien avulla, ryhmät, komponentit, kohdeluettelo, kohteen tiedot ja näkymät. Tämä sivu luettelee, mikä siirtyy suoraan, ja tärkeämpänä, mikä ei.

## Tavat, jotka säilyvät

| Olet tottunut | ModelCraftissa |
|---|---|
| Paina Space valintaan, L viivaan, R suorakulmioon, C ympyrään | Sama: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Paina P Työnnä/vedä, M Siirrä, Q Kierrä, S Skaalaa, E Pyyhekumi, T Mittanauha | Sama: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Paina O kiertääksesi näkymää, H panoroi, Z zoomaa, Shift+Z zoomaa laajuuteen | Sama: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Paina G tehdäksesi komponentin | Sama: {{key:G}}. {{key:Shift+G}} tekee ryhmän |
| Kirjoita mittalaatikkoon napsauttamatta sitä | Sama, alhaalla olevassa arvolaatikossa. Paina {{key:Enter}} |
| Kirjoita suorakulmiolle `4m,3m`, sivuille `12s` | Sama |
| Kirjoita siirron kopion jälkeen `3x` tai `/3` | Sama; `*3` toimii myös |
| Kirjoita pisteelle tai siirtymälle `[x,y,z]` tai `<dx,dy,dz>` | Sama |
| Kirjoita pelkkä luku arkkitehtuuritumamallissa, ja saat tuumat | Sama |
| Keskipainikkeella vetäminen kiertää, Shift+keskipainikkeella vetäminen panoroi, rulla zoomaa osoittimen kohdalla | Sama |
| Kaksoisnapsauta Työnnä/vedä-työkalulla toistaaksesi etäisyyden | Sama |
| Nuolinäppäimillä lukitaan punainen, vihreä, sininen ja yhdensuuntaisuus | Sama: {{key:Right}} punainen, {{key:Left}} vihreä, {{key:Up}} sininen, {{key:Down}} yhdensuuntainen |
| Pidä Shift pohjassa lukitaksesi päättelyn | Sama |
| Ctrl (Mac-tietokoneella Option) kopioidaksesi siirrettäessä | {{key:Ctrl}}, {{key:Mod}} tai {{key:Alt}}, millä tahansa tietokoneella |
| Shift vaihtaa, Ctrl lisää, Shift+Ctrl poistaa valinnasta | Samat näppäimet; Macilla käytä {{key:Mod}} sen kohdalla, jossa lukee Ctrl |
| Vasemmalta oikealle ikkuna, oikealta vasemmalle leikkaava | Sama |
| Mitoitustyökalu pituuksien merkitsemiseen | {{key:D}}, ja lisää: kirjoita mitoitukseen uusi pituus, ja malli muuttuu sen mukaiseksi. Katso [Mitoitus ja koon muuttaminen](topic:dimensions) |
| Kaksoisnapsauta pintaa pinnan ja särmien valitsemiseen; kolmoisnapsauta kaikkien liittyvien valitsemiseen | Sama |
| Kaksoisnapsauta ryhmää muokataksesi sitä; Esc sulkee | Sama |
| Piirrä viiva pinnan poikki jakaaksesi sen; poista särmä samassa tasossa olevien pintojen välillä yhdistääksesi ne | Sama |
| Työnnä ikkunan suorakulmio seinän läpi leikataksesi sen | Sama |
| Takapinnat sinisenharmaina; Käännä pinnat | Sama väri; {{ui:Käännä pinta}} kohdassa {{ui:Kohteen tiedot}} |
| Näkymät välilehtinä näkymän päällä, Page Up ja Page Down | Sama, {{ui:Toista}} {{ui:Näkymät}}-paneelissa |
| Varjot päivämäärän, kellonajan, leveys- ja pituuspiirin mukaan, pohjoinen vihreällä | Sama, {{ui:Tyyli}}-paneelissa |

## Erot, jotka yllättävät

### Tallentaminen on lataus

Ei ole {{ui:Tallenna}}-toimintoa, joka korvaisi avaamasi tiedoston, ei Tallenna nimellä -valintaikkunaa nimelle, ei automaattista tallennusta eikä varmuuskopiotiedostoa. {{ui:Tallenna}} ({{key:Mod+S}}) lataa joka kerta uuden `.modelcraft`-tiedoston, yleensä latauskansioosi. Tallenna usein, ja nimeä tai siirrä tiedostot itse. Katso [Avaa, tallenna, tuo ja vie](topic:files).

### Se tuo .skp-tiedostoja, mutta ei tallenna niitä

{{ui:Tuo}} lukee SketchUp-tiedostoja ModelCraftin omalla lukijalla, sivulla: ryhmät, komponentit, värit, pintojen tekstuurit, tunnisteet ja pehmeät särmät siirtyvät mukana. Katso [Tiedostomuodot tarkemmin](topic:formats#skp-files). ModelCraft ei voi tallentaa `.skp`-tiedostoa: palataksesi takaisin vie ModelCraftista Collada-tiedosto ja tuo se SketchUpiin.

### Ei hiiren oikean painikkeen valikkoa

Oikealla vetäminen panoroi; oikea napsautus ei tee mitään. Komennot, jotka löytäisit pikavalikosta, ovat kohdassa {{ui:Kohteen tiedot}} ({{ui:Käännä pinta}}, {{ui:Muokkaus}}, {{ui:Hajota}}, {{ui:Tee yksilölliseksi}}, {{ui:Tee komponentti}}) ja työkalurivin {{ui:Järjestä}}-ryhmässä.

### Yksiköt ovat tilarivillä

Mallitietoja tai mallipohjan valintaa ei ole. Yksikönvalitsin on oikeassa alareunassa. Uusi malli alkaa jaloissa ja tuumissa Yhdysvalloissa ja muualla millimetreissä selaimesi kieliasetuksesta riippuen. Desimaalit erotetaan aina pisteellä: `2.5m`, ei koskaan `2,5m`, koska pilkku erottaa aina arvot.

### Maalauksella on omat materiaalit

{{ui:Maalaa}} ({{key:B}}) maalaa yksivärisiä pintoja ja {{ui:Materiaalit}}-osion materiaaleja: tiili, vuoraus, kattomateriaali, puu, kivi ja muuta, ModelCraftin piirtämänä. Omaa kuvaa ei voi vielä ladata materiaaliksi; tuotuihin tiedostoihin tulevat tekstuurit säilyvät. Katso [Maalaa väreillä ja materiaaleilla](topic:paint).

### Skaalaus on tasainen, ilman otteita

Skaalaus ei näytä laatikkoa otteineen. Napsauta pistettä, joka pysyy paikallaan, eli viitepistettä, ja sitten uutta kokoa tai kirjoitettua kerrointa. Se skaalaa aina tasaisesti kaikkiin suuntiin. Venyttääksesi yhteen suuntaan työnnä/vedä tai siirrä pintaa, kirjoita ryhmän leveys, syvyys tai korkeus uudelleen kohdassa {{ui:Kohteen tiedot}}, tai [muuta kokoa mitoituksella](topic:dimensions).

### Kierto valitsee tasonsa napsautuskohdasta

Ei ole kulmamittaria, joka tarttuisi pintoihin, kun nuolinäppäimillä etsit tasoa. Napsauta keskipistettä pinnalla kiertääksesi sen pinnan tasossa, tai maanpinnalla kiertääksesi pystyakselin ympäri. Nuolinäppäimet kiertävät näkymää ennen ensimmäistä napsautusta.

### Päättely pisteistä, joiden ohi kuljet

ModelCraft tarttuu akselien suuntiin **aloituspisteestäsi**, sekä osoittimen alla oleviin pisteisiin, särmiin ja pintoihin. Se ei seuraa suuntaa pisteestä, jonka päältä vain kuljit (katkoviivainen ”pisteestä” -päättely). Kohdistuaksesi kaukaiseen kulmaan lukitse akseli nuolinäppäimellä ja vie osoitin kyseiseen kulmaan: lukittu piste liukuu kohdistuakseen siihen. Tai aseta [apuviiva](topic:guides-measure).

### Yhdensuuntainen käyttää särmää, jonka ohitit ennen aloitusta

Yhdensuuntaisuuden ja kohtisuoruuden päättely käyttää viimeistä särmää, jonka osoitin ylitti **ennen ensimmäistä napsautusta**, ei piirtäessä osoitettuja särmiä. Katso [Päättely ja tartunta](topic:inference#parallel-and-perpendicular).

### Ryhmän kopiot ovat linkitettyjä

Ryhmän kopioiminen {{ui:Siirrä}}-työkalulla tekee toisen sijoituksen samasta ryhmästä, joten yhden muokkaaminen muuttaa molempia, kuten komponenteilla. SketchUp tekee ryhmistä itsenäisiä. Katso [Vianetsintä](topic:troubleshooting#editing-one-group-changed-another).

### Space ei panoroi

{{key:Space}} valitsee {{ui:Valitse}}-työkalun, kuten SketchUpissa. Joissakin muissa verkkosovelluksissa Spacen pitäminen painettuna panoroi; täällä ei. Oikealla vetäminen panoroi sen sijaan.

### Kahden sormen vieritys zoomaa

Kosketuslevyllä aseta {{ui:Asetukset}} › {{ui:ModelCraft}} › Vieritys kohtaan Kosketuslevy: kaksi sormea kiertää, {{key:Shift}} ja kaksi sormea panoroi, nipistys zoomaa. Katso [Kierto, panorointi ja zoomaus](topic:orbit-pan-zoom#on-a-trackpad).

Jos kätesi tuntevat Blenderin näppäimet SketchUpin sijaan, valitse {{ui:Mallintaja}}-valikkotyyli: {{key:G}}, {{key:R}} ja {{key:S}} vaikuttavat valintaan kerralla, {{key:E}} pursottaa (työnnä/vedä), {{key:Shift+D}} monistaa, ja yläpalkin valikkorivi (Tiedosto, Muokkaus, Näkymä, Valitse, Lisää, Kohde, Verkko) korvaa työkalurivin. Kun tulet SketchUpista, {{ui:Työnnä/vedä}}-tyyli antaa oman valikkorivinsä samoilla työkalukirjaimilla. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).

### Toisiinsa työnnetyt kappaleet eivät leikkaudu

Työnnä/vedä leikkaa läpi takanaan olevan pinnan samassa kohteessa, mutta kaksi erillistä kiintokappaletta, jotka työnnetään toisiinsa, eivät leikkaa toisiaan. Ei ole Leikkaa pinnat -toimintoa eikä Kiintokappaleen työkaluja.

### Mitä puuttuu

Vapaapiirto, Typistä, Jaa ja Ulkokuori, omat kuvamateriaalit, laajennukset ja asettelutyökalu arkeille eivät ole tässä versiossa. [Ei vielä toteutettu](topic:not-built-yet) kertoo, mitä tehdä sen sijaan.

## Selaimen pitämät pikanäppäimet

ModelCraft toimii selaimessa, joten muutama pikanäppäin kuuluu selaimelle, ei sovellukselle. {{key:Mod+N}} avaa selainikkunan (käytä {{ui:Uusi}}-toimintoa), ja {{key:Mod+W}} sulkee välilehden. Jos tallentamattomia muutoksia on, selain kysyy ennen sulkemista. Katso [Näppäimet, hiiri ja kosketuslevyt](common:keys#shortcuts-the-browser-keeps).
