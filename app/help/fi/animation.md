---
title: Animoi kamera ja kohteet sekä renderöi video
summary: Aseta kameralle sekä ryhmille ja komponenteille avaimet aikajanalle, toista ne näkymässä ja renderöi animaatio WebM-videoksi renderöijän taivaalla, auringolla ja materiaaleilla.
keywords: animaatio, animoi, aikajana, avainkuva, avaimet, kameran polku, lentää läpi, läpikulku, kävelykierros, kävele läpi, video, elokuva, filmi, webm, renderöi video, kuvat, kuvataajuus, fps, toistokohta, automaattiavain, pehmennys, tasoita, pito, näkymät, png-sarja, liike
from: d3a58249
---

[Aikajana](topic:animation) siirtää kameraa ja mitä tahansa ryhmää tai komponenttia ajan kuluessa. Asetat **avaimia** (missä jokin on tiettynä hetkenä); ModelCraft siirtää sitä sujuvasti avaimelta toiselle. Toista se näkymässä ja renderöi sitten video samalla taivaalla, auringolla, materiaaleilla ja lampuilla kuin [renderöidyssä kuvassa](topic:render).

## Avaa aikajana

Napsauta {{ui:Näkymät}}-kohtaa ryhmässä {{ui:Kamera}}, sitten {{ui:Animaation aikajana}}. Aikajana aukeaa näkymän alle: ohjaimet ylhäällä, sen jälkeen **Kamera**-rivi ja rivi jokaiselle liikkuvalle ryhmälle tai komponentille. Timantit ovat avaimia; punainen viiva on **toistokohta**, hetki joka näkyy näkymässä.

:::touch
Puhelimessa aikajana aukeaa myös näkymän alle. Sen ohjaimet ovat yhdellä rivillä: pyyhkäise sitä sivusuunnassa päästäksesi muihin; aikajanan sulkeva painike pysyy sen päässä.
:::

Vedä liukusäädintä (tai napsauta rivillä) siirtääksesi toistokohtaa. {{ui:Toista}} toistaa toistokohdasta ja muuttuu {{ui:Tauko}}-painikkeeksi toiston aikana; napsauta uudelleen pysäyttääksesi siihen kohtaan. {{key:Space}} tekee saman aikajanan ollessa auki (kun aikajana on kiinni, Space on yhä {{ui:Valitse}}). {{ui:Edellinen avain}} ja {{ui:Seuraava avain}} hyppäävät avainten välillä. Oma tyylisi voi antaa toistolle ja tauolle toisen näppäimen: {{ui:Asetukset}}, sitten valikot, näppäimet ja hiiri, komento *Toista tai keskeytä animaatio*.

## Siirrä kameraa

1. Siirrä toistokohta kohtaan, josta kuvaus alkaa (0 s), aseta näkymä ja napsauta {{ui:Avainnuta kamera}}.
2. Siirrä toistokohta myöhemmäksi (esimerkiksi 4 s), kierrä, panoroi tai kävele näkymässä seuraavaan asentoon ja napsauta uudelleen {{ui:Avainnuta kamera}}.
3. Lisää niin monta avainta kuin haluat ja sitten {{ui:Toista}}.

Kamera kulkee sujuvasti jokaisen avaimen läpi ja alkaa ja päättyy levossa.

:::tip
Onko [näkymiä](topic:scenes) jo valmiina? {{ui:Näkymistä}} tekee kameran polun niistä: se pysähtyy kussakin näkymässä ja siirtyy sitten seuraavaan. Jos aikajanalla ei ole lainkaan avaimia, {{ui:Renderöi video…}} tekee tämän itse, joten kaksi näkymää tai enemmän riittää kävelykierrosvideoon.
:::

## Siirrä ryhmää tai komponenttia

1. Valitse ryhmä tai komponentti (vain kokonaiset ryhmät ja komponentit liikkuvat; [tee ensin ryhmä](topic:groups-components)).
2. Napsauta {{ui:Avainnuta valinta}} kohdassa 0 s.
3. Siirrä toistokohta myöhemmäksi, [siirrä, kierrä tai skaalaa](topic:move-copy) ryhmä sinne, minne sen pitää mennä, ja napsauta uudelleen {{ui:Avainnuta valinta}}.

Se liukuu, kiertyy ja kasvaa avainten välillä. Kierrot kulkevat lyhyintä reittiä.

**Automaattiavain** säästää vaiheen 3 napsautuksen: kun {{ui:Automaattiavain}} on päällä, valittu ryhmä tai komponentti, jota siirrät, kierrät tai skaalaat, saa avaimen toistokohtaan itsestään (ja ensimmäisellä kerralla avaimen 0 s:ssa siihen, missä se oli).

:::note
Animoidun ryhmän siirtäminen ilman avainta kestää vain siihen asti, kun toistokohta liikkuu: seuraavalla kerralla kun toistat tai selaat, se palaa sinne, minne sen avaimet sen asettavat. Tilarivi kertoo tämän. Napsauta {{ui:Avainnuta valinta}}, jotta se säilyy.
:::

## Muuta avaimia

- **Valitse avain** napsauttamalla sen timanttia: toistokohta siirtyy siihen.
- **Siirrä avainta** vetämällä sen timanttia pitkin riviä tai näppäimillä {{key:Left}} ja {{key:Right}} (yksi kuva; {{key:Shift}}-näppäimellä kymmenen).
- **Poista** {{ui:Poista avain}} -painikkeella (valittu avain tai jokainen avain toistokohdassa) tai {{key:Delete}}-näppäimellä valitulta timantilta.
- **Miten se jatkuu** valitulle avaimelle: {{ui:Tasoita}} (sujuva käyrä sen ympärillä olevien avainten läpi), {{ui:Tasainen}} (suora viiva yhdellä nopeudella), {{ui:Hidas alku ja loppu}} (pysähtyy tähän avaimeen) tai {{ui:Pito}} (pysyy paikallaan seuraavaan avaimeen asti).
- **Pituus (s)** asettaa animaation keston; lopun jälkeen asetettu avain pidentää sitä. Lyhentääksesi sitä siirrä tai poista ensin uuden lopun ohittavat avaimet.
- Ryhmän rivin **×** lopettaa sen animoinnin.

Aikajanalla on oma {{ui:Kumoa}} ja {{ui:Tee uudelleen}}: mallin kumoaminen ({{key:Mod+Z}}) muuttaa mallia, ei avaimia. Animaatio tallennetaan `.modelcraft`-tiedostoon. Aikajanan sulkeminen palauttaa liikkuvat ryhmät niiden ensimmäiseen asentoon.

## Renderöi video

1. Napsauta aikajanalla {{ui:Renderöi video}} (tai {{ui:Vie}} › {{ui:Renderöi video…}}).
2. Valitse {{ui:Koko}}, {{ui:Kuvataajuus}}, {{ui:Kunkin kuvan laatu}} ja {{ui:Tiedosto}}.
3. Napsauta {{ui:Renderöi video}}. Kukin kuva näkyy valmistuessaan, ja jäljellä oleva aika näkyy.
4. Kun se on valmis, napsauta {{ui:Tallenna video}}.

{{ui:Pysäytä}} (tai {{key:Esc}}) lopettaa aikaisin; {{ui:Tallenna video}} säilyttää sitten jo tehdyt kuvat lyhyempänä videona.

Taivas, aurinko, materiaalit, lamput ja kirkkaus ovat ne, jotka on asetettu kohdassa {{ui:Renderöi kuva…}}: aseta ne ensin siellä ja tarkista yksi kuva. Jokainen kuva renderöidään tällä tietokoneella; mitään ei lähetetä.

| Asetus | Mitä se tekee |
|---|---|
| {{ui:Koko}} | 480p, 720p HD, 1080p Full HD tai näkymän oma muoto (enintään 1920 pikseliä leveä) |
| {{ui:Kuvataajuus}} | 24, 25, 30 tai 60 kuvaa sekunnissa. Kaksinkertainen kuvamäärä vie kaksinkertaisen ajan |
| {{ui:Kunkin kuvan laatu}} | {{ui:Pikainen}} (4 kierrosta), {{ui:Luonnos}} (16) tai {{ui:Hyvä}} (64): useammat kierrokset antavat sujuvammat varjot ja reunat |
| {{ui:Tiedosto}} | {{ui:WebM-video}}, {{ui:MP4-video (H.264)}} siinä, missä selain voi kirjoittaa sen, tai {{ui:PNG-kuvat, yksi per ruutu (ZIP)}} videoeditoreille (ja selaimille, joissa ei ole videokooderia) |

:::tip
10 sekunnin video 30 kuvalla sekunnissa on 301 kuvaa. Kokeile ensin {{ui:Pikainen}}-asetusta 480p:llä liikkeen tarkistamiseen, ja renderöi sitten {{ui:Luonnos}} tai {{ui:Hyvä}} suuremmalla koolla.
:::

WebM toistuu selaimissa ja VLC:ssä, ja videoeditorit muuntavat sen. {{ui:MP4-video (H.264)}} tarjotaan siinä, missä selain voi kirjoittaa sen. {{ui:Renderöi video}} käyttää nopeaa renderöijää; jos haluat polkujäljittää jokaisen kuvan, valitse saman ikkunan kohta {{ui:Lisää tämä animaatio jonoon}}: kuvat renderöidään [renderöintijonossa](topic:render#the-render-queue), joka vaatii WebGPU:n.

:::firefox safari
Videon renderöinti vaatii selaimen, joka koodaa videon itse (WebCodecs): uudet Chrome, Edge, Firefox ja Safari 17 tekevät niin. Ilman sitä valitse {{ui:PNG-kuvat, yksi per ruutu (ZIP)}}.
:::

## Hyvä tietää

- Vain kokonaiset ryhmät ja komponentit liikkuvat. Pinnat, särmät, auringon aika ja tyyli eivät vielä muutu ajan myötä.
- [Näkymät](topic:scenes) alla oleva {{ui:Vie animaatio}} tallentaa yhä näkymän sellaisena kuin se on ruudulla, reaaliajassa; {{ui:Renderöi video}} renderöi jokaisen kuvan taivaan, varjojen ja materiaalien kanssa.
