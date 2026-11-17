---
title: 3D-teksti
summary: Lisää malliin kirjaimia pintoina, tasaisina tai kiinteinä, mihin tahansa pintaan: kyltti, talonumero tai nimi ovessa.
keywords: 3D-teksti, teksti, kirjaimet, kirjoitus, kyltti, opastus, talonumero, nimilappu, kaiverrus, fontti, sanat
from: 923f5d93
---

{{ui:3D-teksti}} ryhmässä {{ui:Piirrä}} tekee kirjaimia pinnoista, joita voit maalata, työntää tai vetää, tai leikata kiinteään kappaleeseen.

## Lisää teksti

1. Napsauta {{ui:3D-teksti}}.
2. Kirjoita teksti. Paina {{key:Enter}} laatikossa lisätäksesi toisen rivin.
3. Aseta {{ui:Kirjaimen korkeus}} (isokirjaimen korkeus, esimerkiksi `30cm` tai `1'`) ja {{ui:Syvyys}}:
   - `0` tekee **tasaisia kirjaimia**: pintoja, jotka lepäävät sen päällä, minne ne asetat. Ne ovat valmiita maalattaviksi tai työnnettäviksi ja vedettäviksi.
   - Syvyys, kuten `5cm`, tekee **kiinteitä kirjaimia**: suljettuja kiintokappaleita, joita voit käyttää [kiintokappaletyökaluilla](topic:solids).
4. Napsauta {{ui:Aseta}} ja napsauta sitten kohtaa, johon teksti tulee.

Pinnalla teksti lepää sen pinnan päällä ja lukee vasemmalta oikealle: seinällä se seisoo pystyssä, maalla tai pöydällä se makaa tasaisesti punaista akselia pitkin. Kauempana pinnoista se lepää maassa.

Teksti on **komponentti**, joka on nimetty tekstin mukaan. Jos muokkaat yhtä, jokainen kopio muuttuu, ja se näkyy luettelossa {{ui:Komponentit}}, josta sen voi asettaa uudelleen.

## Asioita, jotka kannattaa tietää

- Kirjaimet ovat ModelCraftin oma yksiviivainen fontti, paksunnettuna: selkeä ja luettava, mutta fontin valintaa ei vielä ole.
- Kirjaimet, numerot ja yleiset merkit (myös tarkkeelliset kirjaimet) piirretään. Merkki, jota fontissa ei ole, näkyy pienenä laatikkona.
- Sanojen muuttamiseksi poista teksti ja lisää se uudelleen.
- Kirjainten leikkaamiseksi pintaan tee kiinteät kirjaimet, aseta ne puoliksi kiinteän ryhmän sisään ja [vähennä](topic:solids) ne.
