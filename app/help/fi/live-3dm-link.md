---
title: Pidä .3dm-malli live-tilassa
summary: Muuta mallia ohjelmassa, jossa se tehtiin, ja näe muutos täällä Rhino 8 -ohjelmasta tai Grasshopper-määrittelystä ilman tallennusta ja uudelleentuontia.
keywords: rhino, grasshopper, live-linkki, live-yhteys, 3dm, nurbs, parametrinen, linkki, synkronointi, skripti, viitemalli, työntö
from: 331b0a7e
---

Jatka mallintamista siellä, missä mallinnat, ja käytä tulosta täällä: renderöi se, valaise se tai asettele sen ympärille kohtaus. Jokainen muutos toisessa ohjelmassa päivittää yhden ryhmän ModelCraftissa.

:::note
Linkki tarvitsee **CadCraft Studion** samalle tietokoneelle. Selaimen välilehti ei voi muodostaa yhteyttä. Mitään ei lähetetä internetiin: skripti puhuu Studiolle tämän tietokoneen omassa osoitteessa tunnisteella.
:::

:::warning
Linkki on testattu skriptin tiedostokirjoittajalla ja korvikkeella toisesta ohjelmasta, ei vielä itse Rhino- tai Grasshopper-ohjelman sisällä. Jos siellä jokin epäonnistuu, kerro meille, mitä virheilmoitus sanoi.
:::

## Määritys

1. Avaa Studiossa ModelCraft. Valitse {{ui:Asetukset}} › {{ui:ModelCraft}} › {{ui:Avustajat}}, ruksi **Anna tekoälyavustajien ja skriptien käyttää ModelCraftia** ja valitse sitten **Muokkaa**.
2. Valitse Studiossa {{ui:Yhdistä avustaja}}. Se näyttää osoitteen ja tunnisteen, jotka liität alla.
3. Lataa skripti: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino-ohjelmasta

1. Suorita `cadcraft_link.py` Rhino-ohjelman skriptieditorissa (Python 3, Rhino 8).
2. Ensimmäisellä kerralla liitä osoite ja tunniste. Ne tallennetaan tiedostoon `.cadcraft-link.json` kotikansioon, ei koskaan malliin. Studio luo uuden tunnisteen aina käynnistyessään, joten skripti kysyy silloin uudelleen.

Koko malli siirtyy yhtenä ryhmänä, joka on nimetty asiakirjan mukaan, esimerkiksi ”chair (linked)”. Sen jälkeen jokainen muutos siirtyy hetken tauon jälkeen, ja vain muuttuneet kohteet lähetetään. Lopeta suorittamalla skripti uudelleen.

## Grasshopper-ohjelmasta

Suorita skripti ensin kerran Rhino-ohjelmassa, jotta osoite ja tunniste tallentuvat.

1. Lisää Script-komponentti (Python 3) ja liitä siihen koko `cadcraft_link.py`.
2. Anna sille nämä syötteet: `G` (geometria, luettelo-käytöllä), `N` (nimi, valinnainen), `On` (totuusarvokytkin) ja `Target` (valinnainen: `model` tai `part`, jos molemmat sovellukset ovat auki).
3. Aseta `On` arvoon true.

Jokainen laskenta lähettää `G`:n ja korvaa sen, mitä komponentti lähetti viimeksi, joten liukusäätimen vetäminen päivittää ryhmän täällä. Sen tulostus `a` kertoo, mitä tapahtui. Jokaisella komponentilla on oma ryhmänsä.

## Mitä ryhmälle voi tehdä

- **Siirrä, merkitse, rakenna sen ympärille.** Ryhmän paikka ja sen tunniste säilyvät jokaisessa päivityksessä, samoin kaikki sen vieressä oleva.
- **Älä muokkaa sen sisällä.** Jokainen päivitys korvaa ryhmän sisällä olevan. Toinen ohjelma omistaa nämä kohteet.
- **Kumoa.** Kahden sekunnin sisällä tulevat päivitykset jakavat yhden kumoamisvaiheen, joten {{key:Mod+Z}} kumoaa koko vedon. Seuraava päivitys tuo mallin takaisin vastaamaan lähdettä.
- **Tallenna.** Tallennettu tiedosto säilyttää linkin. Suorita skripti uudelleen, kun avaat tiedoston, niin sama ryhmä päivittyy.

## Mitä siirtyy

Verkot, polypinnat, pinnat ja pursotukset näytön verkkona, SubD omana verkkonaan, käyrät reunoina, lohkot erillisinä kohteina paikoillaan (ei komponentteina), tasot tunnisteina, värit ja yksiköt. Katso [Tuo .3dm-malli](topic:import-3dm-files), miten ne näkyvät täällä.

Jätetään pois, ja niiden määrä ilmoitetaan toisessa ohjelmassa: pisteet, teksti, mitoitukset, valot ja vastaavat.

**Vain yhteen suuntaan.** Täällä tehdyt muutokset eivät palaa toiseen ohjelmaan.

## Jos jokin menee pieleen

- `"Mikään ModelCraft- tai PartCraft-ikkuna ei salli sitä"`: tee asennuksen vaihe 1.
- `"Studio hylkäsi tunnisteen"`: Studio on käynnistynyt uudelleen. Kopioi uusi tunniste ja suorita skripti uudelleen. Grasshopperia varten suorita se ensin Rhino-ohjelmassa.
- `"CadCraft Studioon ei saada yhteyttä"`: Studio ei ole käynnissä tai osoite on muuttunut.
