---
title: Lähetä massoittelu BimCraftiin
summary: Anna Työnnä/vedä-massat BimCraftille massoitteluvaihtoehtoina. Kerrokset, pohja, bruttoala ja tilavuus lasketaan jokaisesta kiintokappaleesta.
keywords: massoittelu, massa, konsepti, vaihtoehdot, bimcraft, ifc, bim, työnnä vedä, kerrokset, bruttoala, pohja, tilavuus, lähetä, luovuta, rakennusmassa, vaihe 2
from: 73c51f3f
---

## Mitä teet

Muuta Työnnä/vedä-työkalulla mallintamasi lohkot BimCraftin ymmärtämiksi massoitteluvaihtoehdoiksi, jotta konsepti jatkuu rakennusmallina.

## Ennen aloittamista

Tee jokaisesta massasta **ryhmä** tai **komponentti** ja nimeä se. Jokaisesta tulee yksi vaihtoehto. Irrallista geometriaa ei lähetetä.

## Lähetä

1. Valitse lähetettävät ryhmät. Kun mitään ei ole valittu, lähetetään kaikki ylimmän tason ryhmät ja komponentit.
2. Valitse {{ui:Vie}} ja sitten {{ui:Massoittelu BimCraftiin…}}.
3. Kirjoita {{ui:Vaihtoehtosarjan nimi}} ja {{ui:Kerroskorkeus}}.
4. Tarkista luettelo: kunkin vaihtoehdon kerrokset, pohja, bruttoala ja tilavuus.
5. Valitse **Lähetä BimCraftiin** avataksesi BimCraftin uudessa välilehdessä vaihtoehtojen kanssa, tai {{ui:Tallenna IFC-tiedostona}}, jolloin tiedosto ladataan ja avataan siellä itse.

BimCraftissa vaihtoehdot luetellaan kohdassa ”Mallin massoitteluvaihtoehdot”, josta yksi voidaan asettaa nykyiseksi vaihtoehdoksi ja kehittää seiniksi ja laatoiksi.

## Miten kiintokappaleesta tulee massa

- **Kerrokset** ovat kiintokappaleen korkeus jaettuna kerroskorkeudella, pyöristettynä ja vähintään yksi. Kerrokset jakavat kiintokappaleen korkeuden tasan. Siksi 10 m lohkossa 3 m kerroksilla on 3 kerrosta, joista kukin on 3.33 m.
- **Kerroksen ala** on kiintokappaleen oman vaakasuuntaisen leikkauksen ala kyseisen kerroksen tasolla. Lohkossa, joka vetäytyy sisään, ylemmät kerrokset ovat pienempiä, ja bruttoala on niiden summa.
- **Pohja** on juuri kiintokappaleen alaosan yläpuolella olevan leikkauksen ääriviiva.
- **Tilavuus** on kiintokappaleen oma.

IFC-tiedostossa kukin vaihtoehto on building element proxy (pohja nostettuna kiintokappaleen korkeuteen), jossa on yksi tila kerrosta kohden ja kerroksen bruttoala. Kaikki vaihtoehdot jakavat yhden rakennuksen, jossa on yhtä monta kerrosta kuin korkeimmalla vaihtoehdolla.

## Yksinkertaistetut muodot

Tavallinen pystysuora lohko siirtyy täsmälleen mallinnettuna. Muu lähetetään silti, ja luettelo kertoo, miksi sen muoto on yksinkertaistettu:

- **Sen kerrokset eivät kaikki ole alustansa kokoisia** (se vetäytyy sisään tai kallistuu): massa BimCraftissa on alustan ääriviiva nostettuna täyteen korkeuteen, mutta kerrosalat ja tilavuus ovat kiintokappaleen omia.
- **Kiintokappale ei ole suljettu**: kerroksia, joiden leikkausta ei voi sulkea, ei mitata, ja ne lasketaan nolliksi. Sulje kiintokappale ({{ui:Kohteen tiedot}} kertoo ”Kiintokappale: Kyllä”), jotta lukemat ovat täydelliset.
- **Sen alustassa on useampi kuin yksi ääriviiva**: suurinta käytetään pohjana.

## Hyvä tietää

- {{ui:IFC BimCraftille (.ifc)}} on eri vienti: se lähettää vain muodot ja nimet, ilman kerroksia tai aloja.
- Mitään ei lähetetä mihinkään. Tiedosto annetaan BimCraft-välilehdelle tällä tietokoneella.
