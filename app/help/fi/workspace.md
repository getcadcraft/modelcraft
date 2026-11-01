---
title: ModelCraftin näyttö
summary: Kierros työkaluriviin, kummankin puolen paneeleihin, 3D-näkymään ja tilariviin niiden näytöllä näkyvillä nimillä.
keywords: näyttö, asettelu, työkalurivi, paneelit, jäsennys, kohteen tiedot, tyyli, näkymät, tilarivi, arvoruutu, yksiköt, käyttöliittymä, kierros
from: 4a9a4516
---

Ylhäältä alas: sovelluspalkki, työkalurivi, kolme saraketta (vasemmat paneelit, 3D-näkymä, oikeat paneelit) ja tilarivi.

## Sovelluspalkki

Aivan ylhäällä oleva kapea palkki kuuluu jokaiseen CadCraft-sovellukseen. Siinä on sovelluksen nimi ja versio, {{ui:Tietoja: ModelCraft}}, näyttötilapainike sekä {{ui:Paperi}} / {{ui:Malli}} -kytkin.

- {{ui:Paperi}} on vaalea teema ja {{ui:Malli}} tumma. 3D-näkymä vaihtaa värinsä vastaavasti; mallisi ei muutu.
- Näyttötilapainike (aluksi siinä lukee {{ui:Koko näyttö}}) ja {{key:Ctrl+Shift+F}} käyvät läpi kolme tilaa: normaali, koko näyttö ja koko näyttö palkit piilotettuina. Kun palkit ovat piilossa, osoita näytön yläreunaa (tai napauta sitä) tuodaksesi ne takaisin. {{key:Esc}} poistuu koko näytöstä.

:::note
{{key:Ctrl+Shift+F}} käyttää Control-näppäintä kaikilla tietokoneilla, myös Macilla. iPhonessa, jossa selaimissa ei ole koko näyttöä, painike vain piilottaa ja näyttää palkit.
:::

## Työkalurivi

Työkalurivi on jaettu nimettyihin ryhmiin. Pidä osoitinta painikkeen päällä nähdäksesi sen nimen ja näppäimen.

Vasemmassa reunassa {{ui:Työtila}}-luettelo vaihtaa sen, mihin työkalurivi ja oikea paneeli on tarkoitettu: {{ui:Malli}} (työnnä/vedä-mallinnus, alla oleva kierros), {{ui:Verkko}} ([verkon muokkaus](topic:mesh-edit)), {{ui:Käyrä}} ([käyräkohteet](topic:curves)), {{ui:UV}} ([UV:iden asettelu](topic:uv)), {{ui:Veistä}} ([veistäminen](topic:sculpt)), {{ui:Varjostus}} ([solmuilla tehdyt materiaalit](topic:shading)), {{ui:Animoi}} ([animointi](topic:animate)) ja {{ui:Renderöi}} ([renderöinti näkymässä](topic:render#render-in-the-view)).

| Ryhmä | Painikkeet |
|---|---|
| Tiedosto | {{ui:Uusi}}, {{ui:Avaa}}, {{ui:Tallenna}}, {{ui:Tuo}}, {{ui:Vie}} (muotovalikko) |
| Piirrä | {{ui:Viiva}} ({{key:L}}), {{ui:Suorakulmio}} ({{key:R}}), {{ui:Ympyrä}} ({{key:C}}), {{ui:Monikulmio}} ({{key:N}}) |
| Muokkaa | {{ui:Valitse}} ({{key:Space}}), {{ui:Työnnä/vedä}} ({{key:P}}), {{ui:Siirrä}} ({{key:M}}), {{ui:Kierrä}} ({{key:Q}}), {{ui:Skaalaa}} ({{key:S}}), {{ui:Pyyhekumi}} ({{key:E}}), {{ui:Mittanauha}} ({{key:T}}) |
| Järjestä | {{ui:Komponentti}} ({{key:G}}), {{ui:Ryhmä}} ({{key:Shift+G}}), {{ui:Hajota}} |
| Muokkaus | {{ui:Kumoa}} ({{key:Mod+Z}}), {{ui:Tee uudelleen}} ({{key:Mod+Y}}), {{ui:Kopioi}} ({{key:Mod+C}}), {{ui:Liitä}} ({{key:Mod+V}}), {{ui:Lisää}} (valikko: leikkaa, kopioi, liitä, liitä samaan paikkaan {{key:Mod+Shift+V}}, monista {{key:Mod+D}}, poista, valitse kaikki, poista valinta ja näppäintyyli) |
| Kamera | {{ui:Kiertokatselu}} ({{key:O}}), {{ui:Panoroi}} ({{key:H}}), {{ui:Zoomaa}} ({{key:Z}}), {{ui:Laajuus}} ({{key:Shift+Z}}), {{ui:Näkymät}} (valikko) |

Näytetyt näppäimet ovat työnnä/vedä-näppäimet; kun [ModelCraftin asetuksissa](topic:settings) on valittu Mallintaja-tyyli, työkaluvihjeet näyttävät ne näppäimet. Käyttämäsi työkalu näkyy painettuna. Kapealla näytöllä työkalurivi vierii sivusuunnassa.

{{ui:Näkymät}}-valikossa ovat {{ui:Iso}}, {{ui:Ylä}}, {{ui:Etu}}, {{ui:Oikea}}, {{ui:Taka}}, {{ui:Vasen}} ja {{ui:Ala}}, kukin sovitettuna malliin, sekä {{ui:Perspektiivi}}, joka vaihtaa perspektiivin ja yhdensuuntaisprojektion välillä.

## 3D-näkymä

Näytön keskiosa. Punaiset, vihreät ja siniset viivat ovat akselit: punainen ja vihreä ovat maassa, sininen osoittaa ylös ja **pohjoinen on vihreä akseli**. Niiden leikkauskohta on origo.

- Aloittaessasi kortti nimeltä ”Aloita mallinnus” luettelee ensimmäiset näppäimet. Se katoaa, kun valitset piirtotyökalun tai napsautat näkymää.
- Kun työkalu työskentelee, näkymä näyttää **päättelymerkkejä**: pieniä värillisiä muotoja kohdissa, joihin osoitin tarttuu (vihreä ympyrä päätepisteessä, syaani keskikohdassa, punainen neliö särmällä, sininen vinoneliö pinnalla). Katso [Päättely ja tartunta](topic:inference).
- Valitut kohteet muuttuvat sinisiksi. Takaa katsottu pinta on sinertävänharmaa.
- Kun avaat ryhmän muokattavaksi, kaikki sen ulkopuolella himmenee ja akselit siirtyvät ryhmän omiin akseleihin.
- Kun mallissa on näkymiä, näkymän yläreunaan ilmestyy rivi näkymävälilehtiä.
- Pudota tiedosto mihin tahansa näkymässä avataksesi tai tuodaksesi sen.

## Vasemmat paneelit

**{{ui:Jäsennys}}** luettelee mallin ryhmät ja komponentit sisäkkäin siten kuin ne ovat mallissa sisäkkäin. Useammin kuin kerran käytetty komponentti näyttää, kuinka monta kertaa, esimerkiksi ”Window (4)”.

- Napsauta nimeä valitaksesi sen. Kaksoisnapsauta avataksesi sen muokattavaksi.
- **Hae nimellä** (näkyy, kun ryhmiä on kaksi tai useampi) pitää vain rivit, joiden nimi täsmää, sekä ryhmät, joissa ne ovat. {{key:Esc}} tyhjentää sen.
- Rivin päässä oleva **silmä** piilottaa tai näyttää kyseisen ryhmän tai komponentin (kuten {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Piilota}}). Tunnistekuvake tarkoittaa, että sen [tunniste](topic:tags) piilottaa sen.
- **Nimeä paikallaan:** napsauta riviä, paina {{key:F2}}, kirjoita ja paina {{key:Enter}} ({{key:Esc}} säilyttää vanhan nimen).
- **Vedä rivi** toisen ryhmän rivin keskelle siirtääksesi sen kyseisen ryhmän sisään, rivin ylä- tai alareunaan asettaaksesi sen juuri kyseisen rivin eteen tai jälkeen, tai {{ui:Jäsennys}}-otsikon päälle siirtääksesi sen ylimmälle tasolle. Se pysyy mallissa paikallaan ja säilyttää värinsä, tunnisteensa ja nimensä. Ryhmää ei voi siirtää itsensä sisään. Jokainen siirto on yksi kumoamisvaihe. Katso [Järjestä uudelleen jäsennyksessä](topic:groups-components#rearrange-in-the-outliner).
- Kun muokkaat ryhmän sisällä, rivillä lukee ”Muokataan: Malli › …” ja näkyviin tulee {{ui:Sulje ryhmä}} -painike. Se sulkee kaikki avoimet tasot kerralla.

**{{ui:Komponentit}}** luettelee jokaisen komponenttimäärityksen sekä sen, kuinka monta kopiota on asetettu (”3×”), ja {{ui:Aseta}}-painikkeen, joka lisää toisen kopion napsauttamaasi kohtaan.

## Oikeat paneelit

**{{ui:Kohteen tiedot}}** kuvaa valittua. Sen otsikko muuttuu kertomaan, mikä se on:

| Otsikko | Näyttää | Painikkeet |
|---|---|---|
| Malli (mitään ei valittu) | Pinnat, särmät, ryhmät, komponentit ja kuinka monta on asetettu, apuviivat, kokonaiskoko | {{ui:Poista kaikki apuviivat}} (kun apuviivoja on) |
| Pinta | Pinta-ala, reikien määrä | {{ui:Käännä pinta}} |
| Särmä | Pituus | ei mitään |
| Ryhmä tai komponentti | Nimi (kirjoita nimeäksesi uudelleen), kuinka monta kertaa se on asetettu, onko se suljettu kiintokappale, sen tilavuus, sen koko | {{ui:Muokkaa}}, {{ui:Hajota}}, {{ui:Tee yksilölliseksi}} (komponentti, joka on asetettu useammin kuin kerran), {{ui:Tee komponentti}} (ryhmä) |
| Apuviivapiste tai apuviiva | ei mitään | {{ui:Poista}} |
| Useita kohteita | Kuinka monta pintaa, särmää, ryhmää ja apuviivaa, pintojen yhteispinta-ala | {{ui:Tee komponentti (G)}}, {{ui:Tee ryhmä (Shift+G)}} |

**{{ui:Tyyli}}** asettaa, miten malli piirretään: {{ui:Pinnat}} ({{ui:Varjostettu}}, {{ui:Piilotetut viivat}}, {{ui:Rautalanka}}, {{ui:Röntgen}}), {{ui:Näytä särmät}} ja {{ui:Auringon varjot}} auringon päivämäärällä, kellonajalla ja paikalla. Katso [Tyylit ja auringon varjot](topic:styles-shadows).

**{{ui:Näkymät}}** tallentaa näkymiä: {{ui:Lisää näkymä}}, näkymien luettelo sekä {{ui:Edellinen}}, {{ui:Toista}} ja {{ui:Seuraava}}. Katso [Näkymien tallennus](topic:scenes).

## Tilarivi

Alareunassa vasemmalta oikealle:

1. **Vihje**: mitä työkalu haluaa seuraavaksi tai mihin osoitin tarttuu (”Päätepiste”, ”Punaisella akselilla”).
2. **Viestit**: mitä juuri tapahtui (”Työnnä/vedä kumottu.”, ”Tuotu site.dxf: 1697 särmää maahan, ryhmässä.”) tai miksi jokin ei onnistunut.
3. **Arvoruutu**: sen nimi muuttuu työkalun mukaan ({{ui:Pituus}}, {{ui:Mitat}}, {{ui:Säde}}, {{ui:Sivut}}, {{ui:Etäisyys}}, {{ui:Kulma}}, {{ui:Skaalaa}}, {{ui:Siirtymä}}). Se näyttää reaaliaikaisen koon työskennellessäsi ja ottaa vastaan kirjoittamasi. Katso [Tarkkojen kokojen kirjoittaminen arvoruutuun](topic:value-box).
4. **Näppäintyyli**: {{ui:Näppäimet: Työnnä/vedä}} tai {{ui:Näppäimet: Mallintaja}} vaihtaa pikanäppäimet ja hiiren painikkeet kerralla (sama kuin [ModelCraftin asetuksissa](topic:settings)).
5. **{{ui:Tartunta}} ja {{ui:Törmäys}}**: tartunta pisteisiin, särmiin ja akseleihin sekä kiintokappaleet, jotka pysähtyvät koskettaessaan. Yliviivattu = pois päältä. Napsauta vaihtaaksesi. Katso [ModelCraftin asetukset](topic:settings).
6. **Yksikkövalitsin**: yksikkö, jossa pituudet näytetään. Katso [Aloitus](topic:getting-started#check-the-units-first).

## Kapealla näytöllä

Alle noin 760 pikselin leveydellä (puhelin tai kapea ikkuna) 3D-näkymä saa näytön. Työkalurivi on yksi sivusuunnassa vierivä rivi, ja paneelit avautuvat arkkeina näytön alareunan palkista.
