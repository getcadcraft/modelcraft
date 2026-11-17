---
title: Mittaa ja sijoita apuviivat
summary: Lue pituuksia ja pinta-aloja, mittaa kahden pisteen väli mittanauhalla, ja aseta apuviivoja ja apupisteitä, joihin piirtää.
keywords: mittaa, mittanauha, kulmaviivain, kulma, kulmittainen apuviiva, apuviiva, rakennusviiva, etäisyys, mitoitus, pituus, pinta-ala, siirtymä, asettelu, apupiste
from: de6d04d9
---

## Lue koot mittaamatta

Valitse jokin kohde ja katso kohtaa {{ui:Entity info}}:

- Reuna näyttää **pituutensa**.
- Pinta näyttää **pinta-alansa** ja reikiensä määrän.
- Useat pinnat näyttävät **kokonaispinta-alansa**.
- Ryhmä tai komponentti näyttää **kokonsa** (laatikon, joka sen ympärillä on: leveys × syvyys × korkeus) ja, jos se on suljettu kiintokappale, **tilavuutensa**.
- Kun mitään ei ole valittuna, {{ui:Entity info}} näyttää koko mallin koon.

Pituudet ja pinta-alat käyttävät oikeassa alakulmassa olevan valitsimen yksikköä. Millimetrimallissa 0.01 m² ja suuremmat pinta-alat näkyvät neliömetreinä (4 × 3 m huone näkyy ”12 m²”).

Piirtäessä arvoruutu näyttää reaaliaikaisen pituuden, koon, säteen tai etäisyyden, joten jälkikäteen mittaaminen on harvoin tarpeen.

Muuttaaksesi kokoa piirtämisen jälkeen valitse reuna tai ryhmä ja kirjoita sen pituus tai koko uudelleen kohtaan {{ui:Entity info}}. Tai sijoita [mitoitus](topic:dimensions) ja kirjoita siihen uusi pituus.

## Mittaa kahden pisteen välinen etäisyys

1. Paina {{key:T}} käyttääksesi {{ui:Tape}}-mittanauhaa.
2. Napsauta pistettä: kulmaa, keskikohtaa, pinnan pistettä tai maata. (Reunan napsauttaminen tekee muuta; katso alla.)
3. Siirry toiseen pisteeseen. Kärki ja arvoruutu ({{ui:Length}}) näyttävät etäisyyden. Se tarttuu pisteisiin sekä punaisiin, vihreisiin ja sinisiin suuntiin.
4. Napsauta. Tilarivi kertoo ”Mitattu 4' 6".”, ja toiseen pisteeseen jää **apupiste**.

Jos haluat jättää apupisteen tarkkaan etäisyyteen, kirjoita se ensimmäisen napsautuksen jälkeen ja paina {{key:Enter}}: se menee suuntaan, johon osoitat.

## Sijoita apuviiva

Apuviiva on loputon katkoviiva, joka on yhdensuuntainen reunan kanssa valitsemallasi etäisyydellä. Käytä apuviivoja takaisinvedon, kerroskorkeuden tai ikkunan alkukohdan merkitsemiseen.

1. Paina {{key:T}}.
2. Napsauta **reunaa** (ei sen päätä). Kärki sanoo ”Reunalla”.
3. Siirry pois reunalta sille puolelle, jonne apuviivan pitää mennä. Katkoviiva seuraa reunaa yhdensuuntaisena, ja arvoruutu ({{ui:Offset}}) näyttää etäisyyden.
4. Napsauta, tai kirjoita siirtymä ja paina {{key:Enter}}: `1.5m`, `5'`.

   Tilarivi kertoo ”Apuviiva on reunasta 1.5 m etäisyydellä.”

Olemassa olevalta apuviivalta aloittaminen tekee toisen apuviivan sen suuntaiseksi, joten voit siirtää ruudukkoa askel kerrallaan yhdestä apuviivasta.

Jos kirjoitat siirtymän ennen kuin olet siirtynyt pois reunalta, ModelCraft ei voi päätellä, mitä puolta tarkoitat: ”Siirry ensin pois reunalta, jotta näkyy, mikä puoli on kyseessä.”

## Kulmittainen apuviiva: Kulmaviivain

1. Napsauta {{ui:Protractor}}-painiketta ryhmässä {{ui:Modify}}.
2. Napsauta keskipistettä: pistettä, jonka kautta apuviiva kulkee. Pinnalla kulmaviivain asettuu sen pinnan suuntaiseksi; muualla se on tasaisena. Tämän napsautuksen jälkeen {{key:Right}}, {{key:Left}} tai {{key:Up}} asettaa sen kohtisuoraan punaiseen, vihreään tai siniseen suuntaan (paina uudelleen kumotaksesi).
3. Napsauta pistettä, joka määrittää 0°, esimerkiksi reunaa pitkin.
4. Siirry haluamaasi kulmaan ja napsauta: se tarttuu 15°:n askelin. Tai kirjoita kulma asteina, kuten `22.5`, ja paina {{key:Enter}}; apuviiva menee osoittimen puolelle.

Apuviiva kulkee keskipisteen kautta tuossa kulmassa. Piirrä sitä pitkin {{ui:Line}}-työkalulla esimerkiksi kattokaltevuutta, viistettä tai vinoa seinää varten.

## Piirrä apuviivojen suhteen

Piirtotyökalut tarttuvat apuviivoihin (”Apuviivalla”) ja apupisteisiin (”Apupiste”) sekä kohtaan, jossa apuviiva risteää akselisuunnan kanssa. Aloita suorakulmio siitä kohdasta, jossa kaksi apuviivaa risteää, jotta se sijoittuu tarkasti.

## Poista apuviivat

- Yksi apuviiva: napsauta sitä {{ui:Select}}-työkalulla ja paina {{key:Delete}}, tai napsauta sitä {{ui:Eraser}}-työkalulla.
- Kaikki apuviivat: kun mitään ei ole valittuna, napsauta kohdassa {{ui:Entity info}} painiketta {{ui:Delete all guides}}.

Apuviivat tallennetaan `.modelcraft`-tiedostoon. Niitä ei viedä muihin muotoihin.
