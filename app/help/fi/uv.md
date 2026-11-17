---
title: Asettele verkon UV-koordinaatit
summary: Merkitse saumat, avaa tasoksi, projisoi ja pakkaa verkon tekstuurikoordinaatit UV-työtilassa ja tarkista ne ruutukuviolla ja venymävärein.
keywords: uv, uv-koordinaatit, avaa tasoksi, tasoksi avaaminen, sauma, saumat, tekstuuri, tekstuurikoordinaatit, atlas, pakkaa, pakkaaminen, saareke, saarekkeet, ruutukuvio, venymä, vääristymä, laatikkoprojektio, sylinteriprojektio, pallo-projektio, konforminen, kulmapohjainen, lscm, abf
from: 00028f20
---

Tekstuuri on tasainen kuva; verkko ei ole tasainen. Sen **UV-koordinaatit** kertovat, missä kohdassa kuvaa kunkin pinnan jokainen kulma on. UV-työtila tekee ne: avaat verkon leikkaamalla sen pitkin **saumoja**, asetat palat tasaisiksi (**avaa tasoksi**) ja sovitat ne neliöön (**pakkaa**).

## Avaa se

Valitse verkko ja valitse {{ui:UV}} Työtila-luettelosta. Ryhmä tai komponentti muuttuu ensin verkoksi, kuten Verkkotyötilassa. 3D-näkymä siirtyy vasempaan puoliskoon; oikealla oleva **UV-editori** näyttää verkon pinnat asetettuina tekstuurineliöön. Valitseminen toimii kuten Verkkotyötilassa, ja se, minkä valitset toisessa näkymässä, on valittuna myös toisessa.

## Merkitse saumat

Saumat ovat kohtia, joista verkon saa avata; ne näkyvät punaisina molemmissa näkymissä.

- Valitse särmät ({{ui:Särmä}} tai {{key:2}}) ja paina {{ui:Merkitse sauma}} ({{key:Ctrl+E}}). {{ui:Tyhjennä sauma}} ({{key:Ctrl+Shift+E}}) poistaa ne.
- {{ui:Saumat teräviin}} merkitsee jokaisen terävän särmän ja jokaisen särmän, jossa pinnat kohtaavat yli 60° kulmassa: laatikko jakautuu kuuteen sivuunsa.
- {{ui:Saumat UV:ista}} merkitsee saumat kohtiin, joissa UV-koordinaatit jo katkeavat, esimerkiksi projisoinnin jälkeen.

Suljettu kappale tarvitsee saumoja, jotta se voi olla tasainen: pallo tarvitsee vähintään yhden leikkauksen, putki leikkauksen pituussuunnassa.

## Avaa tasoksi

Valitse asetettavat pinnat (tai ei mitään koko verkolle) ja paina {{ui:Avaa tasoksi}} ({{key:U}}). Jokainen saumojen välinen pala asetetaan tasaiseksi niin, että sen kulmat säilyvät mahdollisimman oikeina (kulmapohjainen tasoitus), minkä jälkeen palat pakataan neliöön. {{ui:Konforminen}} avaa sen sijaan pienimmän neliösumman konformisilla kuvauksilla: nopeampi, mutta hieman vähemmän tarkka voimakkaasti kaarevilla paloilla. Muoto, joka voidaan tehdä tasaisesta levystä, kuten kerran leikatun sylinterin sivu, avautuu ilman venymää lainkaan.

## Projisoi

Yksinkertaisille muodoille projisointi riittää usein:

| Projisointi | Mitä se tekee |
| --- | --- |
| {{ui:Laatikko}} | Jokainen pinta laatikon sivulle, jota se eniten osoittaa |
| {{ui:Sylinteri}} | Sinisen akselin ympäri: poikki on kulma ympäri, ylös on korkeus |
| {{ui:Pallo}} | Keskipisteestä: poikki on kulma ympäri, ylös on leveyspiiri |
| {{ui:Näkymästä}} | Sellaisina kuin pinnat näkyvät nyt 3D-näkymässä |

Sylinterin tai pallon liitoskohdan yli menevä pinta pidetään yhtenä palana, joten sen UV-koordinaatit voivat ulottua hieman neliön oikean reunan ohi; tekstuurit toistuvat siinä.

## Järjestele

- {{ui:Pakkaa}} sovittaa palat (saarekkeet) neliöön yhdellä texel-koolla; kukin käännetään niin, että se vie vähiten tilaa. Paneeli asettaa niiden väliin jäävän tilan.
- {{ui:Käännä 90°}} ja {{ui:Peilaa}} kääntävät tai peilaavat valittujen pintojen UV-koordinaatit.
- UV-editorissa vedä valittua pintaa siirtääksesi valinnan UV-koordinaatteja, tai osoita editoria ja paina {{key:R}} tai {{key:S}} ja liikuta sitten hiirtä, jolloin ne kääntyvät tai skaalautuvat (napsautus säilyttää muutoksen, {{key:Esc}} peruuttaa). {{key:G}} siirtää ilman vetämistä. Kaksoisnapsauta pintaa (tai {{key:L}}) valitaksesi koko saarekkeen. Rulla zoomaa; vedä keskimmäisellä tai oikealla painikkeella panoroidaksesi; {{key:F}} sovittaa neliön uudelleen.

Jokainen muutos on yksi kumoamisvaihe.

## Tarkista ne

- {{ui:Ruutukuvio}} näyttää nimetyn ruutukuvion verkossa sen UV-koordinaateissa: tasaiset, neliömäiset ruudut tarkoittavat, että tekstuuri asettuu tasaisesti; nimikkeet näyttävät, mihin suuntaan se kulkee.
- {{ui:Venymä}} värittää jokaisen pinnan sen mukaan, kuinka paljon UV-koordinaatit venyttävät sitä: sininen ei lainkaan, vihreän kautta punainen paljon. Paneeli valitsee, mitataanko **taipuneita kulmia** vai **muuttunutta kokoa**, ja näyttää keskiarvon.

Katso myös [Muokkaa verkkoa](topic:mesh-edit), [Verkot](topic:meshes) ja [Verkon muokkaimet](topic:modifiers).
