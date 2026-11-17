---
title: Tuo SKP-malli
summary: Tuo .skp-tiedosto sen ryhmineen, komponentteineen, väreineen, tekstuureineen, tunnisteineen ja pehmeine reunoineen. Näe, mitä tuli ja mitä ei, ja jatka mallintamista.
keywords: skp, tuonti, avaa skp, komponentit, ryhmät, tunnisteet, tasot, materiaalit, värit, tekstuurit, piilotettu, pehmeät reunat, 3d warehouse, siirto, vaihto
from: 325d3c81
---

ModelCraft lukee SketchUp-tiedostoja (`.skp`) omalla lukijallaan sivulla. Mitään ei lähetetä, ja se toimii offline aina, kun ModelCraft toimii. Versiosta 3 aina vuoteen 2026 asti olevat tiedostot on testattu.

## Tuo tiedosto

1. Napsauta {{ui:Import}}-painiketta ryhmässä {{ui:File}} (tai pudota `.skp`-tiedosto 3D-näkymään).
2. Valitse tiedosto.

   Tilarivi kertoo ”Luetaan house.skp…” sen lukiessa, ja sen jälkeen, mitä tuli, esimerkiksi ”Tuotu house.skp (SketchUp 25.0.575): 1240 pintaa, 6 komponenttia, ryhmässä.”

Malli tulee yhtenä ryhmänä, joka on nimetty tiedoston mukaan, valittuna, ja näkymä zoomaa siihen. Yksi {{key:Mod+Z}} vie kaiken pois, tunnisteet mukaan lukien.

:::tip
Hajota tuontiryhmä ({{ui:Entity info}} › {{ui:Explode}}), kun haluat sen sisällön irrallisena mallissasi eikä yhdessä ryhmässä.
:::

## Mitä tulee mukaan

- **Pinnat** reikineen ja **reunat**, jotka eivät ole osa pintaa.
- **Ryhmät** tulevat ryhminä ja **komponentit** komponentteina: jokainen komponentin kopio on yhden määritelmän sijoitus, joten yhden kopion muokkaaminen muuttaa ne kaikki, kuten SketchUp-ohjelmassakin. Nimet tulevat mukana.
- **Värit.** Pinnan oma materiaali antaa sille värin. Ryhmään tai komponenttiin maalattu materiaali tulee kyseisen sijoituksen maaliksi, joten sen sisällä pinnat, joilla ei ole omaa väriä, ottavat sen, kuten SketchUp-ohjelmassa. Komponentti, joka on maalattu punaiseksi yhdessä kohdassa ja siniseksi toisessa, pysyy yhtenä komponenttina.
- **Tekstuurit.** Tekstuurimateriaalilla maalattu pinta tulee tekstuurinsa kanssa, levitettynä pinnalle tiedoston mukaan, ja {{ui:Shaded}}-tyyli näyttää sen. Kuva säilyy ModelCraft-tiedostossa tallennettaessa, ja [renderöity kuva](topic:render) näyttää sen myös. Koko ryhmään tai komponenttiin maalattu tekstuurimateriaali antaa kyseiselle kopiolle vain materiaalin värin.
- **Tunnisteet.** SketchUp-tunnisteella oleva ryhmä tai komponentti saa saman nimisen ModelCraft-tunnisteen, joka näkyy kohdassa {{ui:Tags}}, ja se on näkyvissä tai piilossa kuten SketchUp-ohjelmassa. Jos mallissasi on jo tuon niminen tunniste, käytetään sitä.
- **Piilotetut kohteet tulevat piilotettuina:** pinnat, reunat, ryhmät ja komponentit sekä pinnat ja reunat piilotetulla tunnisteella. Näet sen, mitä SketchUp näytti, eikä mitään menetetä: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} näyttää ne. Katso [Piilota, eristä ja näytä](topic:hide-isolate).
- **Pehmeät ja sileät reunat** pysyvät pehmeinä, joten kaarevat pinnat näyttävät yhä sileiltä.
- **Koot** tulevat oikein missä tahansa yksikössä: SketchUp-tiedostot ovat sisäisesti tuumissa, ja ModelCraft muuntaa ne.

## Mitä ei tule mukaan

Tilarivi kertoo, mitä jäi pois, laskureineen.

- **Osa tekstuureista** säilyttää vain materiaalinsa värin: tekstuuri, joka puuttuu tiedostosta, kuva muodossa, jota selaimet eivät näytä (kuten Photoshop-tiedosto), tai tekstuuri ilman kokoa. Projisoidut tekstuurit tulevat mukaan likimääräisesti sijoitettuina.
- **Tunnisteet irrallisilla pinnoilla ja reunoilla.** ModelCraft tunnistaa vain ryhmät ja komponentit, joten pinta tai reuna, jolla on oma tunnisteensa, tulee ilman tunnistetta, ja tilarivi laskee ne. Tee tällaisista pinnoista ryhmä ({{key:Shift+G}}) ja tunnista ryhmä.
- **Kuvat**, jotka on sijoitettu malliin, teksti, mitoitukset, apuviivat, leikkaustasot, kohtaukset ja tyylit.

## Ongelmat

- ”Tämä ei ole SketchUp-tiedosto.” tai ”Tämä SketchUp-tiedosto on vioittunut: …”: tiedosto on katkaistu tai se on jotain muuta `.skp`-nimisenä. Tallenna se uudelleen SketchUp-ohjelmasta tai pyydä uusi kopio.
- Uudemman SketchUp-version tiedosto, jota ModelCraft ei tunne, hylätään, ja viesti kertoo löydetyn version.
- Malli, joka koostuu vain kuvista, tekstistä tai mitoituksista, kertoo, ettei sillä ole mitään näytettävää.

## Vie malli takaisin

ModelCraft ei voi tallentaa `.skp`-tiedostoja. Vie Collada-muodossa ({{ui:Export}} › `.dae`) ja tuo se SketchUp-ohjelmaan: ryhmät, komponentit ja värit siirtyvät mukana, ja tekstuurit siirtyvät materiaalinsa värinä. Katso [Vie mallisi](topic:export-model).
