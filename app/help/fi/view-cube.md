---
title: Näkymäkuutio
summary: Napsauta kuution pintaa, reunaa tai kulmaa näkymän kulmassa katsoaksesi sieltä, vedä sitä kiertääksesi, käännä kompassirengasta, siirry kohtisuoran näkymän ympäri ja palaa kotiin.
keywords: näkymäkuutio, viewcube, kuutio, kompassi, pohjoinen, kotinäkymä, vakionäkymät, ylä, etu, oikea, iso, kulma, reuna, kiertää, kierrä näkymää, akselikuvake, kulmaosoitin, navigointi
from: e1ec1347
---

Näkymäkuutio on 3D-näkymän oikeassa yläkulmassa. Se kääntyy näkymän mukana, joten se näyttää aina, mihin suuntaan katsot: {{ui:Ylä}} on ylhäällä, {{ui:Etu}} osoittaa etelään (katsot pohjoiseen, vihreää akselia pitkin, kun katsot sitä), {{ui:Oikea}} osoittaa itään (punainen akseli). Se pysyy läpinäkyvänä, kunnes osoitat sitä.

## Katso sivulta, reunalta tai kulmasta

1. Osoita kuutiota. Osoittimen alla oleva osa syttyy: pinnan keskikohta, reuna (se syttyy molemmilla sen jakamilla pinnoilla) tai kulma (kaikilla kolmella pinnalla).
2. Napsauta sitä. Näkymä kääntyy katsomaan sieltä ja säilyttää saman keskikohdan ja zoomin.

Napsautettavia paikkoja on 26: 6 pintaa ({{ui:Ylä}}, {{ui:Ala}}, {{ui:Etu}}, {{ui:Taka}}, {{ui:Vasen}}, {{ui:Oikea}}), 12 reunaa ja 8 kulmaa. Kulma antaa klassisen kolmenkolmasosan näkymän; reuna näyttää kahden pinnan puolivälissä olevan näkymän.

Napsauttaminen {{ui:Etu}} on sama kuin {{ui:Näkymät}}, {{ui:Etu}} työkalurivillä ilman sovittamista zoomiin. {{ui:Näkymät}} zoomaa edelleen koko malliin.

## Kiertäminen vetämällä kuutiota

Vedä kuutiota kääntääksesi näkymää, samoin kuin kiertäisit näkymää itsessään. Vetoa ei koskaan tulkita napsautukseksi, joten voit tarttua kuutioon mistä kohtaa tahansa.

## Kompassirengas

Kuution alla oleva rengas sisältää merkit N, E, S ja W.

- **Vedä rengasta** kääntääksesi mallia pystyakselin ympäri, kuin se seisoisi pyörivällä alustalla. Rengas seuraa osoitinta.
- **Napsauta kirjainta** katsoaksesi siltä puolelta säilyttäen, kuinka jyrkästi katsot alas. Suoraan ylhäältä katsottaessa napsauttamasi kirjain menee näytön alareunaan.

## Suoraan edestä katsottavat näkymät: nuolet

Kun katsot pintaa suoraan, kuution ympärille ilmestyy pieniä nuolia:

- Neljä **kolmiota** tuovat sillä puolella olevan pinnan eteen: kuution yläpuolella oleva kolmio näyttää pinnan, joka oli ylhäällä, ja niin edelleen.
- Yläoikealla olevat kaksi **kaarinuolta** kääntävät kuvaa neljännespyörähdyksen myötä- tai vastapäivään muuttamatta, mitä pintaa katsot. Käytä niitä, kun haluat kääntää pohjakuvan niin, että pitkä seinä kulkee poikki näytön.

## Koti

Kuution vasemman yläkulman talopainike palaa kolmenkolmasosan {{ui:Iso}}-näkymään ja sovittaa koko mallin näkyviin. {{key:Home}} tekee saman, kun kuutiolla on näppäimistöfokus.

## Näppäimistöllä

{{key:Tab}} kuutioon, sitten:

| Näppäin | Tekee |
|---|---|
| {{key:left}} / {{key:right}} | valitsee sivun, reunan tai kulman kuution ympäriltä kahdeksasosan kääntöinä (ruudunlukijat kertovat, mikä valittiin) |
| {{key:up}} / {{key:down}} | valitsee korkeamman tai matalamman, ylös asti {{ui:Ylä}}-pintaan tai alas {{ui:Ala}}-pintaan |
| {{key:Enter}} tai {{key:Space}} | katsoo valitusta suunnasta |
| {{key:Shift+left}} / {{key:Shift+right}} | kääntää näkymää neljänneskierroksen pystyakselin ympäri |
| {{key:Home}} | kotinäkymä |
| {{key:Esc}} | poistuu kuutiosta |

Kuutiolla painetut näppäimet pysyvät kuutiossa: ne eivät käynnistä ModelCraftin työkaluja.

## Akselikuvake tai ei mitään

Avaa {{ui:Asetukset}} ({{key:Mod+,}}), välilehti {{ui:ModelCraft}}, ja aseta **Kulmaosoitin** arvoon {{ui:Näkymäkuutio}} (alkuasetus), {{ui:Akselikuvake}} (pieni X-, Y- ja Z-merkki vasemmassa alakulmassa: X punainen, Y vihreä, Z sininen) tai {{ui:Ei mitään}}. Tämä selain muistaa valinnan. Katso [ModelCraftin asetukset](topic:settings#corner-indicator).

:::note
ModelCraftissa ei ole kallistusta: suorasta alas- ja ylänäkymästä poikkeavissa näkymissä näytön ylös on aina mallin ylös. Kuutio ja kaarinuolet voivat kääntää pohjakuvaa, mutta ne eivät kallista sivunäkymää kyljelleen.
:::
