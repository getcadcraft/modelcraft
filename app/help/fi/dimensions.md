---
title: Mitoita ja muuta piirtämäsi kokoa
summary: Aseta mitoituksia kulmien väliin, kaarille ja ympyröille tai kahden särmän väliin; kirjoita uusi pituus muuttaaksesi mallin kokoa. Kirjoita särmän pituus tai ryhmän leveys, syvyys ja korkeus uudelleen kohdassa Kohteen tiedot.
keywords: mitoitus, mitat, koon muuttaminen, muuta kokoa, muokkaa kokoa, pituus, leveys, syvyys, korkeus, venytä, ohjaava mitoitus, mittaa, jälkikäteen, säde, halkaisija, kulma, kaari, ympyrä, R, Ø
from: a1f815ec
---

Koot ModelCraftissa eivät ole lukittuja, kun jokin on piirretty. Mitoitus näyttää pituuden mallissa, ja kun kirjoitat siihen uuden pituuden, malli muuttaa kokoaan vastaamaan sitä. Voit myös kirjoittaa uudelleen särmän pituuden tai ryhmän leveyden, syvyyden ja korkeuden kohdassa {{ui:Kohteen tiedot}}.

## Aseta mitoitus

1. Paina {{key:D}} tai napsauta työkalurivin {{ui:Mitoitus}}-painiketta.
2. Napsauta kulmaa, josta mitataan. Se tarttuu kulmiin, keskikohtiin ja särmiin, kuten piirtäessä.
3. Napsauta toista kulmaa.

   Tai napsauta kerran **särmää** (vihje sanoo ”Särmällä”) mitoittaaksesi koko särmän yhdellä napsautuksella.
4. Siirrä osoitin kohtaan, johon mittaviivan pitäisi mennä, ja napsauta. Voit myös kirjoittaa siirtymän, kuten `0.5m`, ja painaa {{key:Enter}}.

   Mittaviiva pysyy vaakasuorana vaakasuoralle särmälle, paitsi jos katsot sitä sivusta. Pystysuoralle särmälle se pysyy pystytasossa, joka osoittaa sinua parhaiten kohti.

Tilarivi sanoo ”Mitoitus 4 m.” Mitoitukset näyttävät pituutensa mallin yksikössä ja päivittyvät, kun vaihdat yksikön valitsimessa.

## Säde, halkaisija ja kulma

Sama {{ui:Mitoitus}}-työkalu mitoittaa pyöreitä kohteita ja kulmia:

- **Kaari:** napsauta kaarta. Vihje sanoo {{ui:Säde}}. Siirrä osoitin kohtaan, johon tekstin pitäisi mennä, ja napsauta: mitoitus lukee **R 1.5 m**.
- **Ympyrä:** napsauta ympyrää. Saat **halkaisijan** (**Ø 3 m**), jossa on viiva ympyrän poikki keskipisteen kautta. Monikulmiot toimivat samoin, ja niiden kulmat ovat ympyrällä.
- **Kulma kahden särmän välillä:** napsauta yhtä särmää ja sitten toista särmää, joka kohtaa sen kulmassa (kun osoitin on sen päällä, vihje sanoo {{ui:Särmien välinen kulma}}). Siirry sitten haluamaasi kulmaan ja napsauta. Kulman sisäpuolella saat särmien välisen kulman; siirtymällä sivulle saat viereisen kulman (esimerkiksi 150° 30°:n sijaan). Kuinka kaukana kulmasta napsautat, määrää kaaren paikan; tai kirjoita se etäisyys.

Vaihtaaksesi säteen halkaisijaksi tai takaisin, valitse mitoitus ja valitse {{ui:Näytä muodossa}} kohdasta {{ui:Kohteen tiedot}}.

**Koon muuttaminen niillä:** kirjoita uusi säde tai halkaisija heti kun olet asettanut sen, tai valitse se myöhemmin ja kirjoita. Kaari tai ympyrä säilyttää keskipisteensä ja muuttaa kokoa; sen rajaama pinta (kiekko, uran pää) muuttuu mukana. Kaksi asiaa vain mittaa:

- **Kulmamitoitus** ei koskaan muuta mallia. Muuttaaksesi kulmaa kierrä särmiä {{ui:Kierrä}}-työkalulla.
- **Sylinterin päässä oleva ympyrä** (ympyrä, jonka vedit {{ui:Työnnä/vedä}}-työkalulla) ei voi muuttaa kokoaan mitoituksestaan, koska sen sivujen pitäisi muuttua myös. Skaalaa sylinteriä sen sijaan akselinsa ympäri.

## Muuta mallin kokoa mitoituksella

Heti mitoituksen asettamisen jälkeen kirjoita uusi pituus ja paina {{key:Enter}}: `6m`, `12'`, `3500` millimetrimallissa. Malli muuttuu siihen kokoon.

Myöhemmin milloin tahansa:

1. {{ui:Valitse}}-työkalulla napsauta mitoituksen tekstiä tai viivaa. {{ui:Kohteen tiedot}} sanoo **Mitoitus** ja näyttää sen {{ui:Pituus}}-kentän.
2. Kirjoita uusi pituus ja paina {{key:Enter}}. Voit kirjoittaa suoraan arvolaatikkoon tai kohteen tiedoissa olevaan {{ui:Pituus}}-laatikkoon.

### Mikä liikkuu

Toinen napsauttamasi kulma liikkuu, ja niin liikkuu kaikki sen takana:

- **Molemmat kulmat yhdellä kappaleella** (laatikon leveys, seinän korkeus): liikkuvan kulman puoli liukuu ulos tai sisään, ja siihen liittyvät pinnat venyvät. Laatikko pysyy suljettuna kiintokappaleena, ja kaikki kokonaan sillä puolella oleva, kuten ikkunakomponentti, liikkuu mukana.
- **Kulmat kahdella erillisellä kappaleella** (kahden laatikon välinen rako): liikkuvan kulman kappale liikkuu kokonaan, ja rako muuttuu.
- **Liikkuva kulma ryhmän tai komponentin sisällä**, johon toinen kulma ei kuulu: koko ryhmä liikkuu.
- **Molemmat kulmat saman ryhmän tai komponentin sisällä**: se venytetään sisältä. Komponentti muuttuu kaikkialla, missä se on sijoitettu, kuten sen muokkaaminen aina tekee.

Muuttaaksesi, mikä pää liikkuu, valitse mitoitus ja valitse {{ui:Liikkuu}} kohdassa {{ui:Kohteen tiedot}}:

| Valinta | Mitä tapahtuu |
|---|---|
| {{ui:Toinen pää}} (oletus) | Toiseksi napsauttamasi pää liikkuu |
| {{ui:Ensimmäinen pää}} | Ensimmäiseksi napsauttamasi pää liikkuu |
| {{ui:Molemmat päät (keskitetty)}} | Kumpikin pää liikkuu puolet muutoksesta, joten keskikohta pysyy paikallaan |

### Kun koon muutos hylätään

ModelCraft ei muuta mitään ja kertoo syyn tilarivillä:

- ”pinta taittuisi pois tasostaan”: mitoitus kulkee vinosti muodon poikki. Mitoita särmän suuntaisesti tai punaisen, vihreän tai sinisen suuntaisesti.
- ”pinta kutistuisi olemattomiin tai kääntyisi sisäpuolelleen”: uusi pituus on liian lyhyt muodolle.
- ”liikkuva pää ei ole mallin kulmassa”: tuo pää on asetettu tyhjään tilaan tai särmän keskikohtaan. Valitse toinen pää kohdasta {{ui:Liikkuu}}, tai aseta mitoitus kahteen kulmaan.
- ”pituuden on oltava suurempi kuin nolla”.

Jokainen koon muutos on yksi askel: {{key:Mod+Z}} kumoaa sen.

## Kirjoita koko uudelleen kohteen tiedoissa

Mitoitusta ei aina tarvita:

- **Särmä:** valitse se. Sen {{ui:Pituus}} kohdassa {{ui:Kohteen tiedot}} on laatikko, johon voi kirjoittaa. Pituuden kirjoittaminen arvolaatikkoon toimii myös. Pää, joka on kauempana punaisen, sitten vihreän ja sitten sinisen suunnassa, liikkuu, ja siihen liittyvä venyy. Esimerkiksi laatikon etuala-särmän kirjoittaminen uudelleen tekee laatikosta leveämmän oikealle.
- **Ryhmä tai komponentti:** valitse se. {{ui:Leveys (punainen)}}, {{ui:Syvyys (vihreä)}} ja {{ui:Korkeus (sininen)}} ovat laatikoita. Sen kaukainen puoli (oikea, takana, yläpuoli) liikkuu. Nämä ovat ryhmän omia akseleita, ennen kiertoa, joka sille on annettu.

Paina {{key:Enter}} ottaaksesi käyttöön tai {{key:Esc}} palauttaaksesi vanhan arvon.

## Mitoitukset seuraavat mallia

Mitoitus on kiinnitetty kahteen kulmaan, joihin se asetettiin (kulma: kulmaansa ja kahden särmänsä kauempiin päihin; säde tai halkaisija: kaareensa tai ympyräänsä). Siirrä, työnnä/vedä tai muuta kokoa geometriaa, ja mitoitus seuraa ja näyttää uuden pituuden. Se pysyy kiinnitettynä, kun teet geometriasta ryhmän tai komponentin.

Jos pää on asetettu jonnekin muualle kuin kulmaan (pinnalle tai tyhjään tilaan), tai sen kulma on poistettu, tuo pää pysyy paikallaan. Mitoitus mittaa edelleen, mutta se voi muuttaa kokoa vain toisesta päästään.

## Poista mitoituksia

- Yksi mitoitus: valitse se ja paina {{key:Delete}}, tai napsauta sitä {{ui:Pyyhekumi}}-työkalulla.
- Kaikki mitoitukset: kun mitään ei ole valittuna, napsauta {{ui:Poista kaikki mitoitukset}} kohdassa {{ui:Kohteen tiedot}}.

Mitoitukset tallennetaan `.modelcraft`-tiedostoon. Niitä ei viedä muihin muotoihin, jotka kantavat vain 3D-mallin. Mitoituksia sisältävä tiedosto avautuu yhä vanhemmassa ModelCraftissa, ilman niitä.
