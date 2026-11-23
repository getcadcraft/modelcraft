---
title: Viipalointi hartsitulostimelle
summary: Viipaloi tulostusvaiheen alusta hartsitulostimelle, onteloi ja tue kappale, tarkastele kerroksia, tallenna tulostimen tiedosto ja etsi valotusaikasi valotustestillä.
keywords: hartsi, kallistuksen ehdotus, imukuppi, irrotusvoima, vahvistus, hartsitulostus, sla, msla, dlp, viipalointi, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, ontelo, tuuletusreikä, alusta, tuet, valotustesti, valotusportaat, kalibrointi, kerrokset, lisäosa
from: 8cc12858
---

Hartsilisäosat viipaloivat tulostusalustalla olevat kappaleet kerroskuviksi tulostimen näytölle ja tallentavat tiedoston, jonka tulostin lukee. Ne ovat ilmaisia, mikään ei ole lukittu, ja ne ovat pois päältä, kunnes kytket ne päälle.

:::note
Oikealla tulostimella ei ole vielä tulostettu yhtään tiedostoa. Tiedostot on luettu takaisin vain CadCraftin omilla lukijoilla, ja tuet ovat uusia. Tarkista kerrokset ja tee ensimmäinen tulostus käsin.
:::

## Mitä teet

Viipaloi kappale hartsille, tarkista kerrokset, tallenna tiedosto ja kopioi se tulostimelle.

## Vaiheet

1. Avaa {{ui:Asetukset}} › {{ui:Lisäosat}} ja kytke päälle hartsiviipalointilisäosa sekä tulostimesi tiedostomuodon lisäosa (Elegoo GOO, SL1, Chitubox tai Anycubic). Voit myös painaa {{ui:Lisää hartsitulostus}} -painiketta Tulostusvaihe-kortilla.
2. Aseta kappale tulostusalustalle kohdan [Aseta kohteet tulostusalustalle](topic:print-stage) mukaan ja valitse **Tulostustapa**-kohdan vierestä {{ui:Hartsi}}.
3. Kohdassa **Hartsitulostuksen asetukset** valitse **Tulostin** ja **Hartsi**. Kortti näyttää näytön koon pikseleinä. Nämä ovat valmistajan julkaisemia kokoja, joten tarkista oma tulostimesi; voit muokata niitä kohdassa Mukautettu.
4. Aseta **Kerroksen korkeus (mm)**, **Valotus (s)** ja **Pohjavalotus (s)**. Kunkin hartsin luvut ovat vain lähtökohta.
5. Valitse **Onttona, tuuletusreiällä**, jos haluat ontto kappaleen, ja aseta **Seinämä (mm)** ja **Reiän leveys (mm)**.
6. Valitse **Tuet ja alusta** ja valitse **Tukien tiheys**: Kevyt, Keskitaso tai Tiheä.
7. Valitse **Tiedostomuoto**. Jos kortilla lukee, ettei yhtään ole vielä lisätty, paina painiketta, jossa lukee Lisää ja muodon nimi.
8. Paina {{ui:Esikatsele kerroksia}} ja siirrä **Kerros**-liukusäädintä. Irralliset osat on rengastettu. Sen alla oleva rivi kertoo kerrosten määrän, ajan sekä hartsin millilitroina, grammoina ja kustannuksena.
9. Paina {{ui:Tallenna tulostustiedosto}}, tarkista yhteenveto ja paina {{ui:Tallenna}}. Kopioi tiedosto tulostimelle.

## Kallistus, imukupit, vahvistukset ja irrotusluku

Nämä neljä ovat arvioita kappaleen muodosta. Mitään niistä ei ole kokeiltu oikealla tulostimella, joten pidä jokaista vihjeenä ja tarkista kerrokset.

1. Paina {{ui:Ehdota kallistusta}} kohdassa **Kallistus (astetta)**. CadCraft kokeilee kallistuksia 0–60 astetta ja valitsee sen, jossa suurin kerros on pienin, roikkuvaa pintaa on vähiten eikä imukuppia synny. Se asettaa **Kallistus (astetta)**-arvon ja kertoo, mitä löysi. Pisteytyksen painot ovat meidän, eivät minkään tulostinvalmistajan.
2. {{ui:Esikatsele kerroksia}} -painikkeen jälkeen varoitus nimeää onkalot, jotka aukeavat vain kalvoa kohti. Tällainen onkalo voi pitää imua, kun kerros irtoaa. Kallista kappaletta tai lisää reikä. Taskut, jotka ovat varoituksessa mainittua solukokoa kapeampia, eivät näy.
3. Kun **Tuet ja alusta** on päällä, valitse **Vahvista korkeat tuet**, jolloin ohuiden korkeiden pylväiden väliin lisätään poikkivahvikkeita.
4. Esikatselun alla oleva rivi kertoo suurimman kerroksen pinta-alan cm2-yksikössä. Voiman näytetään vain, jos syötät kohtaan **Mittaamasi irrotusjännitys** (kohdassa **Pohjakerrokset, nosto ja nopeudet**). Ilman omaa mitattua lukua näytetään pelkkä pinta-ala.

## Etsi valotusaika

1. Kytke päälle valotustestilisäosa kohdassa {{ui:Asetukset}} › {{ui:Lisäosat}}.
2. Paina {{ui:Aseta testikappale alustalle}}.
3. Paina {{ui:Tallenna valotusportaat}}. Saat yhden tiedoston jokaiselle valotukselle zip-tiedostossa.
4. Tulosta jokainen tiedosto samalla hartsilla ja säilytä se valotus, jolla ohuet pylväät ja avoimet reiät ovat terävimmät.

## Huomautukset

- Viipalointi tapahtuu taustalla, joten sivu pysyy käytettävänä suurella alustalla.
- Kappaleet, jotka eivät ole suljettuja kiintokappaleita, jätetään pois, ja kortti kertoo siitä.
- Jos tulostin ei hyväksy tiedostoa, muodon kortilla on vaihtoehtoja niille asioille, jotka muoto jättää avoimeksi. Muuta yhtä, tallenna uudelleen ja kerro meille, mikä toimi.
- Anycubic-versioita 517 ja 518 ei kirjoiteta.
