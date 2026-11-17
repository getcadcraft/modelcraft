---
title: Valmistele malli 3D-tulostusta varten
summary: Tarkista, että malli on suljettu ja pinnat osoittavat oikeaan suuntaan, katso sen koko, pohja ja ulokkeet, korjaa virheet ja lataa malli STL- tai 3MF-muodossa viipalointiohjelmaasi varten.
keywords: 3D-tulostus, tulostin, tulostaa, viipalointi, stl, 3mf, vesitiivis, eheä, suljettu, kiintokappale, reiät, nurinpäin, uloke, tuet, pohja, alusta, millimetrit, vienti, korjaa, korjaus, ontto, alustan koko, aloittelija, seinämän paksuus, tulostustyökalut
from: 948e19af
---

Viipalointiohjelma tarvitsee suljetun muodon: ei reikiä, jokainen pinta osoittaa ulospäin, eikä mikään mene itsensä läpi. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} etsii juuri tätä ennen kuin lataat tiedoston.

## Tarkista ja lataa

1. Valitse, mitä haluat tulostaa: yksi tai useampi ryhmä tai komponentti, tai joitakin pintoja. Jos mitään ei ole valittu, kaikki näkyvä tulostuu.
2. Napsauta {{ui:Export}} ryhmässä {{ui:File}}, sitten {{ui:Check for 3D printing (STL or 3MF)…}}.

   Valintaikkuna alkaa yhdellä rivillä: ”Valmis tulostettavaksi”, kuinka monta asiaa on korjattava ennen tulostusta, tai kuinka monta on ensin tarkistettava. Jokaisella ongelmalla on kolme osaa: mikä on vialla, miksi se on tärkeää ja mitä tehdä. Sen jälkeen tulevat koko millimetreinä, tilavuus, kolmioiden määrä ja tulostusalustasi.

3. Jos valintaikkuna luettelee asioita korjattavaksi, napsauta {{ui:Fix what can be fixed}} (katso alla). Tarkistus ajetaan uudelleen itsestään.
4. Napsauta {{ui:Download 3MF}} tai {{ui:Download STL}}.

Tulostuu se, mitä näet: piilotetut pinnat, piilotetut ryhmät ja komponentit sekä kaikki piilotetussa tunnisteessa olevat jätetään pois. Koot ovat aina millimetreinä, yksikkönä jota viipalointiohjelmat odottavat, riippumatta siitä, mikä yksikkö malli näyttää.

:::tip
Suosi 3MF:ää, kun viipalointiohjelmasi lukee sen: se säilyttää värit ja yksiköt. STL ei säilytä kumpaakaan, ja viipalointiohjelmat olettavat millimetrit.
:::

## Mitä tarkistus etsii

Nämä estävät tulostuksen tai pilaavat sen, ja valintaikkuna sanoo ”Ei valmis tulostettavaksi”:

| Ongelma | Mitä se tarkoittaa | Mitä tehdä |
|---|---|---|
| Pinta vain toisella puolella | Reikä: reunalla on pinta toisella puolella ja ei mitään toisella | Piirrä puuttuva pinta (viiva aukon yli sulkee sen usein), tai käytä {{ui:Fix}} (alla) |
| Kolme tai useampi pinta jakaa | Pinnat kohtaavat evässä tai seinässä kiintokappaleen sisällä | Poista sisäpinta |
| Pinnat osoittavat eri suuntiin | Osa pinnoista osoittaa sisään, osa ulos | Valitse sisäänpäin osoittavat pinnat ja napsauta {{ui:Reverse face}} kohdassa {{ui:Entity info}} |
| Nurinpäin | Koko suljettu osa osoittaa sisäänpäin | Valitse sen pinnat ja käännä ne |
| Menee itsensä läpi | Yksi osa taittuu itsensä läpi | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, sitten poista sisältä. Katso [Leikkaa pinnat](topic:intersect) |

Nämä ovat varoituksia: malli tulostuu, mutta katso ensin.

- **Erilliset osat menevät päällekkäin** tai **koskettavat pinta pintaa vasten**: viipalointiohjelmat yhdistävät ne yleensä yhdeksi. Siistimpää tiedostoa varten yhdistä ne kohdalla {{ui:Solids}} › {{ui:Union}}. Katso [Kiintokappaleen työkalut](topic:solids).
- **Mikään ei ole tasaisena pohjassa**: käännä malli niin, että pinta lepää alustalla, tai viipalointiohjelma lisää tuet tai raftin.
- **Nojaa ulospäin yli 45°** pystysuorasta: nämä pinnat tarvitsevat tuen. Valintaikkuna kertoo, kuinka suuri osa pinnasta.
- **Alle 1 mm leveä**: todennäköisesti mallinnettu väärällä yksiköllä. Tarkista yksikkö tilarivistä.

Ontto osa (suljettu kuori toisen sisällä) on kunnossa: sen pinnat osoittavat onkaloon, ja sen tilavuus vähennetään.

## Korjaa ongelmat

Kohdassa **Missä ongelmat ovat** valintaikkuna nimeää jokaisen ryhmän tai komponentin, jossa on jotain vialla (ryhmittelemättömät irralliset pinnat luetellaan nimellä ”Pinnat ei ryhmässä”), ja kertoo, mikä siinä on vialla. Komponentti, joka on sijoitettu useita kertoja, luetellaan kerran: sen korjaaminen korjaa jokaisen kopion.

- {{ui:Show}} avaa ryhmän ja valitsee virheelliset reunat ja pinnat, jolloin ne näkyvät korostettuina.
- {{ui:Fix what can be fixed}} korjaa kaikki kerralla: se sulkee reiät, joiden reunat ovat tasaisella, poistaa muodon sisällä olevat pinnat ja irralliset reunat ja kääntää pinnat oikeaan suuntaan. Se on yksi vaihe: {{key:Mod+Z}} kumoaa sen. Tarkistus ajetaan sitten uudelleen ja näyttää, mitä on jäljellä.

Mitä se ei voi korjata (reikä, jonka reunat eivät ole tasaisella, tai osa, joka menee itsensä läpi), jää luetteloon ja kertoo, mitä tehdä käsin. {{ui:Repair}} kohdassa **Tulostustyökalut** menee pidemmälle: se sulkee reiät, jotka eivät ole tasaisia, poistaa irralliset palat ja kaksinkertaiset pinnat ja luettelee jokaisen korjauksen. Katso [Tuet, seinämän paksuus, onteloiminen ja korjaus](topic:print-tools#repair). Voit myös korjata yhden ryhmän kerrallaan: valitse se, käytä sitten {{ui:Show problems}} ja {{ui:Fix}} kohdassa {{ui:Entity info}}. Katso [Kiintokappaleen työkalut](topic:solids).

## Ontto osa

{{ui:Hollow}} kohdassa **Tulostustyökalut** tekee osasta ontto antamallasi seinämän paksuudella, ja tyhjennysaukot napsautettuihin kohtiin. Katso [Ontto](topic:print-tools#hollow).

Voit myös piirtää onton tilan itse: suljettu ryhmä osan sisällä, joka ei kosketa sitä, ja kaikki sen pinnat käännettyinä niin, että ne osoittavat onteloon. Tarkistus laskee sen onteloksi ja vähentää sen tilavuuden; sitä ei luetella korjattavana.

## Tulostimesi alusta

Valitse tulostimesi alustan koko kohdassa {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. Tarkistus varoittaa sitten, kun malli on alustaa suurempi, kummin päin tahansa käännettynä. Katso [Asetukset](topic:settings#3d-printer-bed).

## Tulostustyökalut

Valintaikkunan löydösten alla **Tulostustyökalut** avaa {{ui:Supports preview}} (mihin tuet menevät ja suunnilleen kuinka paljon), {{ui:Wall thickness}} (liian ohuet seinät tulostettavaksi), {{ui:Hollow}} ja {{ui:Repair}}. Katso [Tuet, seinämän paksuus, onteloiminen ja korjaus](topic:print-tools). {{ui:Split for printing}} leikkaa liian ison mallin palasiksi liitoksilla ja numeroiduilla saumoilla: katso [Jaa iso malli tulostusta varten](topic:print-split).

## Ei tarkisteta

Tarkistus ei viipaloi: tulostussuuttimesi liian pienet yksityiskohdat ja todelliset tuet kuuluvat viipalointiohjelmallesi. Katso [Ei vielä toteutettu](topic:not-built-yet#3d-printing).
