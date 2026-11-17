---
title: Tuo .3dm-malli
summary: Tuo .3dm-tiedosto sen verkkoineen, pintoineen, käyrineen, lohkoineen, tasoineen ja väreineen. Katso, mistä kolmiot tulevat ja mitä jää pois.
keywords: 3dm, tuonti, nurbs, polypinta, brep, pinnat, renderöintiverkko, pursotus, käyrät, lohkot, tasot, tunnisteet, värit, yksiköt, vaihto, siirto
from: 3cf29879
---

ModelCraft lukee `.3dm`-tiedostot omalla lukijallaan sivulla. Mitään ei lähetetä, ja se toimii offline aina, kun ModelCraft toimii. Tiedostorakenteet versioista 5, 6, 7 ja 8 on testattu; vanhemmat (versiot 2 to 4) pitäisi avautua, mutta niitä ei ole vielä kokeiltu.

## Tuo tiedosto

1. Napsauta {{ui:Import}}-painiketta ryhmässä {{ui:File}} (tai pudota `.3dm`-tiedosto 3D-näkymään).
2. Valitse tiedosto.

   Tilarivi kertoo ”Luetaan chair.3dm…” sen lukiessa, ja sen jälkeen, mitä tuli, esimerkiksi ”Tuotu chair.3dm: 14 verkkoa (8330 pintaa), 8 käyrää, 5 lohkosijoitusta, 3 tasoa tunnisteina. Pinnat: 7 tiedostoon tallennetusta verkoista, 29 CadCraft-kolmioimaa.”

Malli tulee yhtenä ryhmänä, joka on nimetty tiedoston mukaan, valittuna, ja näkymä zoomaa siihen. Yksi {{key:Mod+Z}} poistaa kaiken taas, tunnisteet mukaan lukien.

## Mistä kolmiot tulevat

ModelCraft mallintaa pintoja ja verkkoja, joten jokainen tiedoston pinta tulee [verkkona](topic:meshes), jossa on pieniä tasaisia kolmioita. Polypinnan (ja jokaisen pursotuksen) pinnalle ModelCraft ottaa tässä järjestyksessä:

1. **Tiedostoon tallennetun renderöintiverkon.** Useimmat mallinnusohjelmat tallentavat jokaisen pinnan kanssa näytöllä näkemänsä verkon. Kun se on olemassa, ModelCraft käyttää sitä sellaisenaan.
2. **Oman kolmioinnin**, kun tiedostossa ei ole tallennettua verkkoa: tasot, NURBS-pinnat, pyörähdyspinnat (pallot, kartiot, toruksit, sorvatut muodot), pursotetut käyrät ja pursotukset (reikineen ja päätyineen), rajattuna reunoillaan. Polypinnan pinnat jakavat reunapisteensä, joten suljettu polypinta tulee suljettuna verkkona. Kaarevia alueita jaetaan, kunnes kolmiot ovat noin 0.15 %:n päässä kohteen koosta todellisesta pinnasta.
3. **Ei mitään**, jos pinta on sellaista tyyppiä, jota ModelCraft ei vielä lue. Tilarivi kertoo, kuinka monta pintaa ja minkätyyppisiä.

Tilarivin ”Pinnat:”-osa kertoo, kuinka monta pintaa tuli tallennetuista verkoista ja kuinka monta ModelCraft kolmioi itse. Tiedoston pinnan sisäiset reunat ovat pehmeitä ja pintojen väliset terävät, joten kaareva pinta varjostuu sulavasti.

:::tip
Saadaksesi uskollisimmat muodot tallenna tiedosto renderöintiverkkojen kanssa siinä ohjelmassa, joka sen teki. Tämä on yleensä oletus; ”tallenna pienenä” -vaihtoehto jättää ne pois.
:::

## Mitä tulee mukaan

- **Verkot** värilliseine kärkipisteineen ja tekstuurikoordinaatteineen.
- **Polypinnat, pinnat ja pursotukset** kuten yllä kuvattiin.
- **Käyrät** (viivat, murtoviivat, kaaret, ympyrät, NURBS-käyrät ja niistä yhdistetyt käyrät) tulevat [reunoina](topic:curves), yksi reunaryhmä per taso.
- **Lohkot** tulevat [komponentteina](topic:groups-components): jokainen lohkon sijoitus on yhden komponentin sijoitus, joten yhden kopion muokkaaminen muuttaa ne kaikki. Lohkot lohkojen sisällä säilyvät.
- **Tasot** tulevat [tunnisteina](topic:tags) koko nimellään (”Furniture::Chairs”), ja ne ovat piilossa, jos taso oli pois päältä. Jokaisen kohteen sijoitus kantaa tasonsa tunnisteen.
- **Värit.** Kohteen väri tulee siitä, mitä tiedosto sanoo: sen omasta väristä, tasonsa väristä tai materiaalinsa peruskuvan väristä. Se tulee sen pintojen maaliksi.
- **Piilotetut kohteet tulevat piilotettuina**; {{ui:Unhide all}} näyttää ne.
- **Yksiköt:** tiedosto kertoo oman yksikkönsä, ja malli tulee sisään todellisessa koossaan.

## Mitä jää pois (ja kerrotaan)

Tilarivin ”Huomautukset:”-osa nimeää kaiken, mikä ei tullut mukaan, ja kuinka monta:

- pisteet ja pistepilvet, teksti, tekstipisteet, mitoitukset, johtoviivat, täytöt, valot, leikkaustasot ja asettelun yksityiskohdat;
- SubD-kohteet: muuta ne verkoiksi tai polypinnoiksi siinä ohjelmassa, joka tiedoston teki, ennen kuin tuot sen;
- pinnat siirretyillä pinnoilla ja muut pintatyypit, joita ModelCraft ei vielä lue, kun tiedosto ei tallentanut niille verkkoa;
- muista tiedostoista linkitetyt lohkot (luetaan vain tuotava tiedosto);
- pursotukset, joiden päät ovat vinot (loveutetut), tulevat sisään suorin päin.

Materiaalien tekstuurit, renderöintiasetukset, nimetyt näkymät, ryhmät ja käyttäjän teksti eivät lue; materiaali antaa vain peruskuvan värinsä.

## Rajat

Tiedostot enintään 300 MB. Vioittunut tiedosto kertoo, mikä on vialla, eikä lisää mitään. Yksi lukematon kohde jätetään pois ja lasketaan, ja loput tulevat sisään.
