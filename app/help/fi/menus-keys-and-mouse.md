---
title: Valikot, näppäimet ja hiiri
summary: Valitse valikkotyyli, joka vastaa tuntemaasi mallinnusohjelmaa, anna jokaiselle komennolle oma näppäin, siirrä komentoja valikoiden välillä ja määritä rullan sekä hiiren keski- ja oikean painikkeen toiminnot.
keywords: valikkotyyli, valikot, valikkorivi, työkalurivi, pikanäppäimet, näppäimet, näppäintyyli, näppäinkartta, mukauta, uudelleenmääritä, hiiri, rulla, käännä, zoomauksen suunta, keskipainike, oikea painike, kiertää, panoroi, vienti, tuonti, vaihto, tuttu, työnnä/vedä, mallintaja
from: e56fce3d
---

ModelCraftin työkalut ovat samat, miten niihin pääsetkin. **Valikkotyyli** päättää, missä ne ovat näytöllä, mikä niiden nimi siellä on ja millä näppäimillä ne toimivat. Valitse tyyli kohdasta {{ui:Asetukset}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Valikot, näppäimet ja hiiri}}. Muutos tulee heti voimaan, ja tämä selain muistaa sen.

## Tyylit

| Tyyli | Mitä saat |
|---|---|
| {{ui:ModelCraft}} | ModelCraftin oma työkalurivi (Tiedosto, Piirrä, Muunna, Järjestä, Muokkaus, Kamera) ja sen yhden kirjaimen näppäimet: {{key:L}} viiva, {{key:R}} suorakulmio, {{key:P}} työnnä/vedä, {{key:M}} siirrä, {{key:Q}} kierrä, {{key:S}} skaalaa, {{key:E}} pyyhekumi, {{key:O}} kiertää näkymää. Lähtötyyli. |
| {{ui:Työnnä/vedä}} | Valikkorivi (Tiedosto, Muokkaus, Näytä, Kamera, Piirrä, Työkalut, Ikkuna) pääkomentorivin päällä, samat yhden kirjaimen näppäimet. |
| {{ui:Mallintaja}} | Otsikkovalikkorivi (Tiedosto, Muokkaus, Näytä, Valitse, Lisää, Kohde, {{ui:Verkko}}) ja verkkomallintajien näppäimet: {{key:W}} valitse, {{key:G}} tartu, {{key:R}} kierrä ja {{key:S}} skaalaa valinta kerralla ({{key:X}}, {{key:Y}} tai {{key:Z}} lukitsee akselin siirron aikana), {{key:E}} työnnä/vedä, {{key:B}} suorakulmio, {{key:X}} poista, {{key:A}} valitse kaikki, {{key:Alt+A}} ei mitään, {{key:Shift+D}} monista, {{key:Mod+G}} ryhmä, {{key:H}} piilota. Keskipainike kiertää. {{key:Shift}} ja keskipainike panoroivat, {{key:Mod}} ja keskipainike zoomaavat. Oikea painike peruuttaa, mitä työkalu tekee. |
| {{ui:Aloittelija}} | Valintanauha, jonka {{ui:Tee}}-välilehdessä on muutama iso painike: pudotettavia muotoja, reikiä, siirto, kierto ja koko, tasaus, {{ui:Ryhmä}} (reiät leikataan muotoihin) sekä 3D-tulostuksen tarkistus. Kaikki muut työkalut ovat {{ui:Lisää työkaluja}}-välilehdellä. Oikea painike kiertää, keskipainike panoroi. Katso [Aloittelijan tyyli](topic:beginner). |

Näppäintyyli, jonka tunnet ehkä {{ui:Avaimet}}-valikosta näkymän oikeasta alakulmasta ja kohdasta {{ui:Muokkaus}} › {{ui:Lisää}}, on sama valinta. Mallintajan näppäimet valitsevat {{ui:Mallintaja}}-tyylin, ja työnnä/vedä-näppäimet siirtävät takaisin {{ui:ModelCraft}}-tyyliin. Jos olit valinnut mallintajan näppäimet vanhemmassa versiossa, ModelCraft avautuu kerran {{ui:Mallintaja}}-tyylissä itsestään.

:::tip
Näppäin, joka kuuluu työnnä/vedä-näppäimiin mutta jonka tyylisi antaa toiselle komennolle, ei tee mitään. Tilarivi kertoo, minne sen komento siirtyi (”Mallintajassa työnnä/vedä on E”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nuolet säilyttävät aina merkityksensä. Numerot menevät aina arvokenttään, ja kun työkalu siirtää jotakin, sen omat näppäimet voittavat.
:::

## Tee siitä oma

1. Valitse lähimpänä haluamaasi tyyliä ja napsauta {{ui:Mukauta…}}.
2. Kohdassa {{ui:Näppäimet ja valikot}} etsi komento (hakukentästä on apua). Valitse {{ui:Lisää näppäin}} ja paina näppäintä. Napsauta näppäintä poistaaksesi sen.
3. Valikkorivin kanssa {{ui:Sijainti}} siirtää komennon toiseen valikkoon tai kohtaan {{ui:Vain näppäimet}}.
4. Kohdassa {{ui:Hiiri}} määritä rulla ja painikkeiden toiminta 3D-näkymässä.
5. Anna sille nimi ja napsauta {{ui:Tallenna}}.

Sisäänrakennetun tyylin tallentaminen tekee oman kopion (”Oma Mallintaja”), eikä sisäänrakennettu muutu koskaan. Kopiosi lukee näppäimet samalla tavalla kuin tyyli, josta se alkoi: {{ui:Mallintaja}}-pohjainen kopio pitää tartu-, kierrä- ja skaalausnäppäimet toimivina samanaikaisesti.

## Hiiri

- **Hiiren rulla**: {{ui:Vieritys ylös lähentää}} (lähtötila) tai {{ui:Vieritys ylös loitontaa}}, ja nopeus. Kosketuslevyn nipistys zoomaa aina sormien liikkeen suuntaan.
- **Vetäminen 3D-näkymässä**: {{ui:Kunkin näkymän oma}} säilyttää ModelCraftin painikkeet (keskipainike kiertää, oikea painike tai {{key:Shift}} ja keskipainike panoroivat). Tai aseta keskipainike ja oikea painike kiertämään, panoroimaan, zoomaamaan tai ei mihinkään. {{key:Shift}} painikkeen kanssa vaihtaa kiertämisen ja panoroinnin. Vasen painike kuuluu aina käytössä olevalle työkalulle.
- **Kosketuslevyt**: {{ui:Asetukset}} › {{ui:ModelCraft}} › {{ui:Vieritys}} määrää edelleen, kiertääkö kaksi sormea (kosketuslevy) vai zoomaako (hiiri). Katso [Kierto, panorointi ja zoomaus](topic:orbit-pan-zoom).

## Vie se mukanasi

{{ui:Vie}} tallentaa käytössä olevan tyylin pieneen `.ccinput.json`-tiedostoon. {{ui:Tuo…}} lisää sellaisen toiselta tietokoneelta tai kollegalta. Tuotu tiedosto voi viitata vain ModelCraftin omiin komentoihin: kaikki muu siinä jätetään pois ja lasketaan tilariviin. {{ui:Poista tämä tyyli}} poistaa yhden omistasi.

:::note
Nämä asetukset pysyvät tässä selaimessa. {{ui:Käytä tätä tyyliä jokaisessa sovelluksessa}} tyylikorttien alla saa jokaisen sovelluksen avautumaan vastaavassa tyylissään: {{ui:Työnnä/vedä}} kuuluu muiden sovellusten valikkorivityyleihin. Tyylillä {{ui:Mallintaja}} ei ole vastinetta muissa sovelluksissa, joten se pysyy ModelCraftin valintana.
:::

Liittyvää: [Näppäimet ja hiiritoiminnot](topic:keyboard) · [ModelCraft-asetukset](topic:settings) · [Siirtyminen muista mallintajista](topic:coming-from)
