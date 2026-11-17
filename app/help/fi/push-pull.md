---
title: Työnnä ja vedä pinnat kiintokappaleiksi
summary: Muuta pinta laatikoksi, tee rakennuksesta korkeampi tai matalampi, lisää erkkeri tai syvennys ja toista etäisyys kaksoisnapsautuksella.
keywords: työnnä vedä, pursota, korkeus, kiintokappale, laatikko, massa, korkeampi, matalampi, syvennys, ulkonema, toisto, kaksoisnapsautus, tilavuus, taso, pinnalla, tasainen, sama korkeus
from: dc093c91
---

{{ui:Työnnä/vedä}} ({{key:P}}) siirtää pintaa sen omaan suuntaan: ylös ja alas lattialle, sisään ja ulos seinälle. Mitä tapahtuu, riippuu pinnasta.

## Tee kiintokappale pinnasta

1. Piirrä pinta, esimerkiksi suorakulmio maahan ([Piirrä pintoja](topic:draw-faces)).
2. Paina {{key:P}}.
3. Vie osoitin pinnan päälle. Se korostuu.
4. Napsauta pintaa ja liikuta osoitinta. Pinta nousee (tai vajoaa), ja sen reunoista kasvavat sivut. Arvoruutu ({{ui:Etäisyys}}) ja kärki näyttävät etäisyyden.
5. Napsauta lopettaaksesi, tai kirjoita etäisyys ja paina {{key:Enter}}: `3m`, `10'`, `2700` millimetrimallissa.

   Sinulla on nyt suljettu kiintokappale. Valitse se kokonaan ja ryhmitä se (katso [Ryhmät ja komponentit](topic:groups-components)). Silloin {{ui:Kohteen tiedot}} näyttää ”Kiintokappale: Kyllä” ja sen tilavuuden.

Yksittäisen pinnan voi viedä kumpaan suuntaan: vedä se ylös massaksi maanpinnan yläpuolelle, tai työnnä alas kuopaksi tai perustukseksi.

:::tip
Sen sijaan että napsauttaisit kahdesti, paina pinnan päällä, vedä ja vapauta. Kosketusnäytöllä se on luonnollisin tapa: paina, vedä, nosta.
:::

## Vedä jonkin muun korkeuteen

Vetäessäsi vie osoitin mallin toisen osan kulman, keskikohdan, reunan tai ohjeen päälle. Pinta tarttuu siihen korkeuteen, ja merkki näyttää pisteen. Käytä tätä, kun haluat tehdä kaksi palikkaa samankorkuisiksi, tai pysähtyä ohjeviivaan, jonka asetit [mittanauhalla](topic:guides-measure).

Voit myös viedä osoittimen pinnan päälle, joka on yhdensuuntainen työntämäsi pinnan kanssa, kuten toisen palikan yläpinnan tai pylvään päällä olevan laatikon yläpinnan. Kärki sanoo ”Pinnalla”, ja työntämäsi pinta päättyy tasan sen kanssa. Esimerkiksi putken sisäpintaa voi työntää alas, kunnes se on tasan putken alla olevan laatikon kanssa.

Pinta, joka on kulmassa työntämääsi pintaan nähden, ei aseta tasoa. Etäisyys seuraa osoitinta. Sama pätee pintaan, joka on työntämäsi pinnan takana.

Kun työnnetty pinta päättyy taas tasan ympäröivien pintojen kanssa, sen sivut poistuvat. Nollakorkeisia sivuja ei jää jäljelle, ja piirtämäsi ääriviiva pysyy pinnalla, joten voit työntää sitä myöhemmin uudelleen. Jotta siitä tulee taas yksi pinta, poista ääriviivan reunat {{ui:Pyyhekumi}}-työkalulla: kaksi pintaa yhdistyvät.

## Tee laatikko korkeammaksi tai matalammaksi

Työnnä/vedä laatikon yläpintaa. Koska sivut kulkevat jo suoraan ylös siitä, yläpinta vain siirtyy: laatikko muuttuu korkeammaksi tai matalammaksi, eikä uusia reunoja synny.

- Kun työnnät yläpinnan kokonaan alas pohjaan asti, laatikko poistuu. ModelCraft pysähtyy nollakorkeuteen. Se ei koskaan käännä laatikkoa sisälleen.
- Sama pätee jokaiseen pintaan, jonka naapurit kulkevat sen suuntaan, kuten seinän päätyyn.

## Lisää erkkeri tai syvennys

1. Piirrä suorakulmio laatikon sivulle (aloita se pinnalta; se pysyy pinnan tasossa).
2. Paina {{key:P}} ja vedä uusi suorakulmio **ulos**. Se lisää materiaalia: erkkerin, savupiipun tai katoksen.
3. Tai työnnä se **sisään**. Se leikkaa syvennyksen: kuistin, lokeron tai sisäänvedetyn sisäänkäynnin.

Kun uuden osan sivut asettuvat linjaan jo olemassa olevien pintojen kanssa, ne yhdistyvät yhdeksi pinnaksi, joten tasaiseen seinään ei jää hajanaisia viivoja.

## Työnnä läpi

Pinta, jota työnnetään kiintokappaleeseen, pysähtyy ensimmäiseen takanaan olevaan pintaan. Kun se saavuttaa sen, se leikkaa aukon läpi. Näin teet ikkunat ja ovet paksuun seinään. Katso [Leikkaa aukko seinän läpi](topic:openings).

## Kirjoita etäisyys

Napsautettuasi pintaa kirjoita etäisyys ja paina {{key:Enter}}.

- Kirjoitettu etäisyys menee siihen suuntaan, johon liikuit. Jos et ole vielä liikuttanut, se menee pinnan etuosaa kohti (kiintokappaleesta ulos, maasta ylös).
- Kirjoita negatiivinen luku, kuten `-500`, mennäksesi toiseen suuntaan.
- Jos muutat mielesi ennen napsautusta, paina {{key:Esc}}. Pinta palaa.

## Toista viimeinen etäisyys

Yhden työnnön tai vedon jälkeen kaksoisnapsauta toista pintaa, kun {{ui:Työnnä/vedä}} on yhä valittuna. Pinta siirtyy saman etäisyyden verran. Tämä on nopea tapa antaa useille seinille tai lattioille sama paksuus tai korkeus.

ModelCraft muistaa etäisyyden, kunnes vaihdat toiseen työkaluun.

## Hyvä tietää

- Työnnä/vedä toimii yhdelle pinnalle kerrallaan. Jos napsautat jotakin, joka ei ole pinta, tilarivi sanoo ”Työnnä/vedä toimii pinnalla. Valitse pinta.”
- Jos haluat työntää tai vetää pintaa ryhmän tai komponentin sisällä, avaa se ensin (kaksoisnapsauta sitä).
- Kun **Törmäys** on päällä, työntö tai veto, joka osuu toiseen kiintokappaleeseen, pysähtyy siihen kohtaan. Kärki kertoo, mihin se osui (kohteen nimi tai ”irtonainen geometria tässä ryhmässä”), ja korostaa pinnat, joihin se osui. Kuoppa, jonka työnnät omaan kiintokappaleeseensa (esimerkiksi siirretyn pinnan, joka työnnetään takaisin alas), kuuluu siihen kiintokappaleeseen, eikä sen seinät koskaan pysäytä sitä.
- Kaksi kiintokappaletta, jotka työnnetään toistensa sisään, eivät leikkaa tai yhdistä toisiaan: niiden pinnat vain kulkevat läpi. Katso [Ei vielä toteutettu](topic:not-built-yet).
