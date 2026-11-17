---
title: Piirrä pintoja viivoilla, suorakulmioilla, ympyröillä ja kaarilla
summary: Tee tasaisia pintoja maahan tai muille pinnoille, jaa niitä viivoilla ja piirrä ympyröitä ja monikulmioita haluamallasi sivumäärällä.
keywords: piirrä, viiva, suorakulmio, ympyrä, monikulmio, siirtymä, sisennys, kehys, reunus, kaari, käyrä, spline, sileä, kaapeli, polku, pullistuma, säde, pinta, pohjapiirros, jako, sivut, segmentit, ääriviiva, kynä
from: b6d7b7dd
---

Kaikki ModelCraftissa alkaa tasaisena **pintana**: suljettuna särmillä rajattuna pintana. Voit piirtää pinnan suoraan {{ui:Suorakulmio}}-, {{ui:Ympyrä}}- tai {{ui:Monikulmio}}-työkalulla, tai rajata sen yksi särmä kerrallaan {{ui:Viiva}}-työkalulla. Pinnoista [Työnnä/vedä](topic:push-pull) tekee kiintokappaleita.

## Piirrä suorakulmio

1. Paina {{key:R}}.
2. Napsauta ensimmäistä kulmaa: maassa tai minkä tahansa mallin pinnan päällä.
3. Siirrä osoitinta. Suorakulmio pysyy maassa (tai pinnalla, jolta aloitit), ja arvoruutu ({{ui:Mitoitukset}}) näyttää leveyden ja syvyyden. Vihje sanoo "Neliö", kun sivut ovat yhtä pitkät.

   Piirtääksesi toiselle tasolle osoita sitä: pinta, joka kulkee ensimmäisen kulman kautta, asettaa suorakulmion sille pinnalle. Tartunta tason ulkopuolella olevaan pisteeseen (päätepiste, särmä tai sininen akseli) nostaa suorakulmion pystyyn molempien kulmien kautta. Tartu takaisin ensimmäisen tason pisteeseen, ja se asettuu taas vaakaan. Pitääksesi yhden tason, paina nuolinäppäintä: {{key:Up}} pitää suorakulmion vaakatasossa (sininen taso), {{key:Right}} punaisella tasolla ja {{key:Left}} vihreällä tasolla. Paina samaa näppäintä uudelleen vapauttaaksesi lukituksen.
4. Napsauta vastakkaista kulmaa tai kirjoita kaksi mittaa pilkulla erotettuina ja paina {{key:Enter}}: `4m,3m`, millimetrimallissa `4000,3000` tai jaloissa ja tuumissa `12',10'6"`.

   Pinta ilmestyy, ja sen ympärillä on neljä särmää.

Kirjoitetut mitat menevät siihen suuntaan, johon osoitit: jos osoitin on ensimmäisen kulman vasemmalla puolella kirjoittaessasi, suorakulmio kasvaa vasemmalle.

:::warning
Pilkku erottaa kaksi mittaa, joten sitä ei voi käyttää desimaalimerkkinä. Kirjoita `2.5m,3m`, älä koskaan `2,5m`.
:::

## Piirrä ympyrä tai monikulmio

1. Paina {{key:C}} ympyrälle tai {{key:N}} monikulmiolle.
2. Muuta sivujen määrää kirjoittamalla se ennen napsautusta: `12s` (tai pelkkä `12`) ja {{key:Enter}}. Ympyrässä on oletuksena 24 sivua ja monikulmiossa 6. Vihje näyttää nykyisen määrän, ja ModelCraft muistaa sen seuraavaa ympyrää varten, kunnes muutat sitä tai vaihdat työkalua.
3. Napsauta keskipistettä maassa tai pinnalla. Keskittääksesi pinnalle osoita pinnan keskikohtaa ("Pinnan keskipiste") tai yhden sen särmän keskikohtaa ("Keskikohta") osoittimella juuri pinnan sisällä: ympyrä piirtyy kyseiselle pinnalle, vaikka se olisi pitkän laatikon kapealla päädyllä.
4. Napsauta säteen määrittämiseksi tai kirjoita se ({{ui:Säde}} arvoruudussa) ja paina {{key:Enter}}.

Ympyrä on monikulmio, jossa on paljon sivuja. Kun vedät ympyrän ylös työnnä/vedä-työkalulla, sen sivut pehmennetään, jotta sylinteri näyttää yhtenäiseltä pinnalta.

## Piirrä kaari

1. Paina {{key:A}} ({{ui:Kaari}}).
2. Napsauta kohtaa, josta kaari alkaa, ja sitten kohtaa, johon se päättyy (tai kirjoita päiden välinen pituus).
3. Siirrä osoitinta, jolloin kaari pullistuu ulospäin, ja napsauta. Vihje sanoo "Puoliympyrä", kun pullistuma on puolet päiden välisestä etäisyydestä. Voit myös kirjoittaa, kuinka paljon kaaren keskikohta poikkeaa: `2` ja {{key:Enter}}.

Piirtääksesi kaaren sen sijaan pisteen ympärille käytä {{ui:Kaari keskipisteestä}}-työkalua: napsauta keskipistettä, sitten kohtaa, josta kaari alkaa (tai kirjoita säde), ja sitten kohtaa, johon se päättyy (tai kirjoita kulma asteina, esimerkiksi `90`). Kulma tartuttaa 15°:n askelin.

Pinnalta alkava kaari piirtyy sille pinnalle; muuten se on maassa, tai se seisoo pystyssä, jos sen päät ovat eri korkeuksilla. Kaaressa on 12 segmenttiä; kirjoita `24s` piirtäessäsi saadaksesi enemmän. Kaaret sulkevat pintoja samoin kuin viivat: suorakulmion kulman poikki kulkeva kaari jakaa sen.

## Piirrä sileä käyrä

{{ui:Käyrä}} piirtää sileän viivan, joka kulkee jokaisen napsauttamasi pisteen kautta: kaapelin, kaiteen polun tai puutarhan reunan. Se voi nousta maasta: pisteet tartuvat kulmiin, särmiin ja pintoihin kaikkialla, ja nuolinäppäimillä voi lukita punaisen, vihreän tai sinisen suunnan samoin kuin {{ui:Viiva}}-työkalulla.

1. Napsauta {{ui:Käyrä}}-painiketta ryhmässä {{ui:Piirrä}}.
2. Napsauta pisteitä, joiden kautta käyrä kulkee. Kirjoita `<0,0,1>` ja {{key:Enter}} pisteelle, joka on yhden verran edellisen pisteen yläpuolella, `[x,y,z]` tarkkaan paikkaan tai pituus pisteelle, joka on niin kaukana osoitinta kohti.
3. Paina {{key:Enter}} tai kaksoisnapsauta lopettaaksesi. Napsauta ensimmäistä pistettä uudelleen sulkeaksesi käyrän. {{key:Backspace}} poistaa viimeisen pisteen.

Käyrä valitaan yhtenä kappaleena. Muokataksesi sitä valitse se ja napsauta kohdassa {{ui:Kohteen tiedot}} kohtaa {{ui:Muokkaa pisteitä}}: pisteet näkyvät neliöinä. Napsauta yhtä ja napsauta sitten, mihin se siirtyy (tai kirjoita `<dx,dy,dz>`). {{key:Esc}} palauttaa pisteen ja lopettaa muokkauksen. Suljettu tasainen käyrä muodostaa pinnan; käyrä, joka rajaa pinnan, ei enää ole muokattavissa.

## Siirtymä: reunus pinnan sisällä tai ulkopuolella

{{ui:Siirtymä}} kopioi pinnan ääriviivan tietylle etäisyydelle sen sisä- tai ulkopuolelle kehystä, reunusta, kynnystä tai näytön lasia varten.

1. Paina {{key:F}} ja napsauta pintaa, tai valitse ensin pinta ja paina sitten {{key:F}}.
2. Siirrä osoitinta pinnan sisään sisäiselle ääriviivalle tai sen ulkopuolelle ulkoiselle. Uusi ääriviiva seuraa, ja vihje kertoo etäisyyden.
3. Napsauta tai kirjoita etäisyys ja paina {{key:Enter}}.

Pinta jakautuu kahtia: sisempi pinta ja sen ympärillä oleva kehys (tai uusi rengas ulkopuolella). Työnnä tai vedä kumpaa tahansa heti: näytölle piirrä laatikko, työnnä se paksuuteensa, siirrä etupinta 30 mm sisäänpäin ja työnnä sisäpintaa hieman sisään lasia varten. Pinnan reiät siirtyvät myös, ja kaari tai ympyrä pysyy yhtenä (pienempänä tai suurempana) käyränä.

- **Kaksoisnapsauta** pintaa {{ui:Siirtymä}}-työkalulla siirtääksesi sitä viimeksi käytetyllä etäisyydellä uudelleen.
- **Särmät:** valitse yhdessä tasossa oleva yhtenäinen särmäketju (esimerkiksi L-kirjaimen kaksi viivaa), paina {{key:F}}, siirry haluamallesi puolelle ja kirjoita etäisyys: piirtyy yhdensuuntainen kopio, jonka kulmat ovat viistetyt.
- Jos etäisyys on suurempi kuin pinta sallii, ModelCraft kertoo siitä eikä piirrä mitään.

## Kaaret, ympyrät ja monikulmiot ovat käyriä

Napsauta mitä tahansa kaaren, ympyrän tai monikulmion segmenttiä, ja koko käyrä valitaan. {{ui:Kohteen tiedot}} näyttää sitten sen säteen, segmentit, kulman (kaarilla) ja pituuden. Kirjoita sinne uusi säde muuttaaksesi kokoa keskipisteen ympäri; sen tasossa piirretyt pinnat seuraavat. Kun käyrän pinta on kerran työnnetty tai vedetty, sen säde pysyy ennallaan.

## Piirrä viivoilla

1. Paina {{key:L}}.
2. Napsauta kohtaa, josta viiva alkaa.
3. Napsauta kohtaa, johon se päättyy, tai kirjoita pituus ja paina {{key:Enter}}. Kirjoitettu pituus menee osoittimen näyttämään suuntaan.
4. Jatka napsauttamista. Jokainen napsautus aloittaa seuraavan viivan edellisen päästä.
5. Sulje ääriviiva napsauttamalla ensimmäistä pistettä uudelleen. Kun viivat sulkevat tasaisen silmukan, se täyttyy pinnalla ja työkalu lopettaa ketjutuksen. Paina {{key:Esc}} pysäyttääksesi milloin tahansa.

Viivat seuraavat punaista, vihreää ja sinistä suuntaa, kun tulet niiden lähelle; viiva muuttuu kyseiseksi väriksi ja vihje sanoo "Punaisella akselilla". Katso [Päättely ja tartuttaminen](topic:inference), miten suunta lukitaan ja miten pisteisiin tartutaan.

### Mihin viiva menee, kun se ei koske mihinkään

- Pinnalta alkava viiva pysyy kyseisen pinnan tasossa.
- Maasta tai tyhjästä tilasta alkava viiva pysyy alkupisteensä tasalla. Jos katsot mallia reunasta, se menee sen sijaan sinua vastapäätä olevaan pystytasoon.
- Piirtääksesi viivan tarkkaan paikkaan kirjoita piste: `[x,y,z]` pisteelle mallissa tai `<dx,dy,dz>` siirtymälle alkupisteestä. Katso [Kirjoita tarkat mitat](topic:value-box).

## Jaa pinta

Piirrä viiva pinnan poikki, yhdeltä särmältä toiselle (tai särmältä särmälle muiden viivojen kautta). Pinta jakautuu kahdeksi pinnaksi. Kumpikin säilyttää puolensa ja värinsä. Sama toimii suorakulmiolle tai ympyrälle, joka on piirretty pinnalle: muoto muodostaa oman pintansa suuremman sisään, ja suurempi pinta on nyt reikäinen.

Näin asettelet huoneet lattialaatalle, ikkunan seinään tai askelman portaisiin: piirrä ääriviiva pinnalle ja työnnä tai vedä sitten uutta pintaa.

## Pinnat, jotka osoittavat väärään suuntaan

Jokaisella pinnalla on etu- ja takapuoli. Takapuoli näkyy sinertävänharmaana. Maahan piirretyt pinnat osoittavat ylöspäin; toisella pinnalla piirretyt pinnat osoittavat samaan suuntaan kuin se.

Jos pinta näyttää takapuolensa siellä, missä odotat etupuolen, valitse se ja napsauta kohdassa {{ui:Kohteen tiedot}} kohtaa {{ui:Käännä pinta}}.

## Mitä näet piirtäessäsi

- Värillinen merkki siinä kohdassa, johon osoitin tartuttaa, ja sen nimi vihjeessä vasemmassa alareunassa.
- Viivan tai muodon esikatselu.
- Elävä koko arvoruudussa. Voit kirjoittaa sen päälle milloin tahansa.

## Jos muoto ei ole siellä, missä odotit

- Kosketusnäytöllä katso [Vianmääritys](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Jos viiva tartuttiin johonkin kaukana takana, kierrä näkymää hieman: pisteet, jotka ovat pinnan takana, eivät tartu, mutta sen reunalla olevat pisteet tartuvat.
- Paina {{key:Mod+Z}} kumotaksesi viimeisen muodon; yksi kumoaminen poistaa yhden viivan tai muodon.
