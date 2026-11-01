---
title: ModelCraftin aloitusopas
summary: Mihin ModelCraft on tarkoitettu, miten se avataan ja ensimmäinen laatikkosi suorakulmiosta tallennettuun malliin.
keywords: aloitus, ensimmäinen malli, alku, opas, johdanto, laatikko, massoittelu, 3d, työnnä vedä, pikaopas, ohjattu, opastus, aloittelija, 3D:n uusi käyttäjä
from: d47ad719
---

ModelCraft on 3D-mallinnusohjelma varhaiseen suunnitteluun: massoittelututkimuksiin, huoneasetteluihin, nopeisiin rakennusmuotoihin ja niiden heittämiin varjoihin. Piirrät litteitä muotoja, vedät ne ylös kiintokappaleiksi ja jatkat työtä piirtämällä niiden pinnoille. Se toimii verkkoselaimessasi, ja mallisi pysyvät tietokoneellasi.

Jos olet käyttänyt SketchUpia, suurin osa osaamisestasi siirtyy: samat työkalukirjaimet, työnnä/vedä, arvoruutu tarkkoja kokoja varten, ryhmät ja komponentit. [Muista mallintajista tulevalle](topic:coming-from) luettelee, mikä on erilaista.

## ModelCraftin avaaminen

1. Avaa ModelCraft Chromen, Edgen, Firefoxin tai Safarin tuoreessa versiossa. Katso [Selaimet ja tietokoneet](common:browsers).
2. Odota, että 3D-näkymä tulee näkyviin: vaalea (tai tumma) alue keskellä ja kortti, jonka otsikko on ”Aloita mallinnus”.

Näytöllä on työkalurivi ylhäällä, {{ui:Jäsennys}} ja {{ui:Komponentit}} vasemmalla, 3D-näkymä keskellä, {{ui:Kohteen tiedot}}, {{ui:Tyyli}} ja {{ui:Näkymät}} oikealla sekä tilarivi alhaalla arvoruutuineen ja yksikköineen. [ModelCraftin näyttö](topic:workspace) selittää jokaisen osan.

:::note
ModelCraft tarvitsee WebGL:n, selaimesi 3D-piirto-ominaisuuden. Jos näytön keskusta pysyy tyhjänä eivätkä työkalut tee mitään, katso [Vianetsintä](topic:troubleshooting#the-3d-view-is-blank).
:::

## Tarkista ensin yksiköt

Katso oikeaa alakulmaa. Yksikkövalitsin näyttää, missä pituudet mitataan.

- Uusi malli alkaa **jaloissa ja tuumissa**, kun selaimesi on asetettu Yhdysvaltoihin (myös Liberia ja Myanmar), ja **millimetreissä** kaikkialla muualla.
- Voit muuttaa sen valitsemalla toisen yksikön valitsimesta: {{ui:ft ja in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} tai {{ui:mm}}. Itse malli ei muuta kokoaan; vain se, miten pituudet näytetään ja miten pelkät luvut luetaan.

Ilman yksikköä kirjoittamasi luku käyttää mallin yksikköä. Jalka-tuumamallissa pelkkä luku on **tuumia**, joten `120` tarkoittaa 10 jalkaa.

## Anna ModelCraftin opastaa ensimmäinen mallisi

Onko 3D uutta? Napsauta {{ui:Aloita mallinnus}} -kortilla {{ui:Ohjattu ensimmäinen malli}} (se on myös kohdassa {{ui:Näkymät}}). Pieni kortti käy läpi neljä vaihetta litteästä suorakulmiosta 3D-tulostimelle valmiiseen malliin:

1. Piirrä suorakulmio maahan.
2. Vedä se ylös laatikoksi.
3. Tee laatikosta yksi kohde (ryhmä).
4. Tarkista se 3D-tulostusta varten ja lataa sitten 3MF- tai STL-tiedosto.

Kortti seuraa mallia, ei painikkeita: se siirtyy eteenpäin, kun vaihe on tehty, miten tahansa teit sen, ja palaa vaiheen taaksepäin, kun kumoat. {{ui:Valitse työkalu}} valitsee työkalun puolestasi. Sulje se milloin tahansa merkillä {{ui:×}}.

## Piirrä ensimmäinen laatikkosi

1. Paina {{key:R}} saadaksesi {{ui:Suorakulmio}}-työkalun tai napsauta {{ui:Suorakulmio}} työkalurivin {{ui:Piirrä}}-ryhmässä.
2. Napsauta kerran maata näkymän keskivaiheilla. Se on ensimmäinen kulma.
3. Siirrä osoitin pois. Suorakulmio seuraa sitä, ja alhaalla oleva arvoruutu (nimeltään {{ui:Mitat}}) näyttää sen koon.
4. Kirjoita koko ja paina {{key:Enter}}: esimerkiksi `4m,3m` tai `16',12'` jaloissa ja tuumissa. Sinun ei tarvitse napsauttaa arvoruutua ensin; luvun kirjoittaminen lähettää sen sinne.

   Saat litteän suorakulmion maahan. Se on **pinta**: pinta, jonka ympärillä on särmät.

5. Paina {{key:P}} saadaksesi {{ui:Työnnä/vedä}}.
6. Napsauta suorakulmiota, siirrä osoitinta ylös ja napsauta uudelleen. Tai napsauta suorakulmiota ja kirjoita korkeus, kuten `3m` tai `10'`, ja paina {{key:Enter}}.

   Suorakulmiosta tulee laatikko, jossa on yläpinta, alapinta ja neljä sivua.

7. Paina {{key:Space}} palataksesi {{ui:Valitse}}-työkaluun ja napsauta sitten laatikon yläpintaa. Oikealla oleva {{ui:Kohteen tiedot}} näyttää sen pinta-alan.

:::tip
Voit myös vetää kahden napsautuksen sijaan: paina ensimmäisessä kulmassa, vedä ja päästä irti toisessa. Molemmat tavat toimivat kaikilla piirtotyökaluilla.
:::

## Katsele ympärillesi

- **Kierrä:** vedä hiiren keskimmäisellä painikkeella (rullalla) tai paina {{key:O}} ja vedä vasemmalla painikkeella.
- **Panoroi:** vedä oikealla painikkeella tai keskimmäisellä painikkeella {{key:Shift}} pohjassa.
- **Zoomaa:** pyöritä rullaa. Se zoomaa osoittimen alla olevaa kohtaa kohti.
- **Näe kaikki:** paina {{key:Shift+Z}} tai napsauta {{ui:Laajuus}}.

Ohjauslevyllä tai kosketusnäytöllä eleet ovat erilaisia. Katso [Kiertokatselu, panorointi ja zoomaus](topic:orbit-pan-zoom).

## Kumoa

Paina {{key:Mod+Z}} kumotaksesi ja {{key:Mod+Y}} tehdäksesi uudelleen tai käytä työkalurivin painikkeita {{ui:Kumoa}} ja {{ui:Tee uudelleen}}. ModelCraft muistaa viimeiset 200 vaihetta, kun malli on auki. Historiaa ei tallenneta tiedostoon.

## Tallenna mallisi

1. Napsauta {{ui:Tallenna}} {{ui:Tiedosto}}-ryhmässä tai paina {{key:Mod+S}}.
2. Selain lataa mallisi mukaan nimetyn tiedoston, kuten `Untitled.modelcraft`. Tilarivi kertoo, minne se meni: ”Tallennettu: Untitled.modelcraft lataukset-kansioon.”

**Tallennus on lataus.** Jokainen tallennus tekee uuden kopion latauskansioosi; se ei korvaa avaamaasi tiedostoa. Pitääksesi projektikansion siistinä siirrä tai nimeä tiedosto siellä itse. [Avaaminen, tallennus, tuonti ja vienti](topic:files) selittää miksi ja mitä muuta voit tehdä.

:::warning
ModelCraft ei tallenna itsestään. Jos suljet välilehden tallentamattomien muutosten kanssa, selain kysyy ensin (”Poistutaanko sivustolta?”). Valitse jäädä ja tallenna sitten.
:::

## Hae apua

Paina {{key:F1}} tai napsauta {{ui:Ohje}} sovelluspalkissa avataksesi tämän ohjeen mallin viereen. Se toimii ilman yhteyttä. Paina {{key:F1}} uudelleen tai {{key:Esc}} ohjeen sisällä sulkeaksesi sen. Katso [Tämän ohjeen käyttö](common:help).

## Mihin seuraavaksi

- [Pintojen piirtäminen viivoilla, suorakulmioilla ja ympyröillä](topic:draw-faces)
- [Pintojen työntäminen ja vetäminen kiintokappaleiksi](topic:push-pull)
- [Tarkkojen kokojen kirjoittaminen arvoruutuun](topic:value-box)
- [Kaikki näppäimet ja hiiritoiminnot](topic:keyboard)
