---
title: Tarkastele mallia VR-kuulokkeilla
summary: Kävele mallissa täydessä koossa VR-kuulokkeilla: hyppää, käänny, mittaa, leikkaa auki, aseta havaintoja kuvilla, katso pöytämallina ja tapaa live-istunnon muut.
keywords: vr, virtuaalitodellisuus, kuuloke, webxr, xr, immersiivinen, quest, oculus, vive, index, pico, kävele läpi, kävelykierros, design review, tarkastelu, mittaa, leikkaus, leikkaa, havainto, havainnot, bcf, pöytämalli, mittakaavamalli, läsnäolo, avatarit, live, yhdessä
from: fa2f591a
---

{{ui:Tarkastele VR:ssä}} vie sinut mallin sisään VR-kuulokkeella täydessä koossa. Seisot siinä, missä näkymän kamera on, sen alapuolella olevalla lattialla, samaan suuntaan katsoen. Mitään ei ladata: kuuloke näyttää sen, minkä selain piirtää tällä tietokoneella (tai kuulokkeen omassa selaimessa).

## Mitä tarvitset

- Kuulokkeen, jota selain osaa ohjata (WebXR): itsenäisen kuulokkeen oma selain tai Chrome tai Edge tietokoneella, johon kuuloke on kytketty.
- ModelCraftin suojatulla sivulla (https), kuten tällä sivustolla.

Kun kuuloketta ei ole, {{ui:Tarkastele VR:ssä}} on harmaana ja kertoo syyn.

## Aloita

1. Aseta näkymä siihen, mistä haluat aloittaa: huoneeseen tai ulkona rakennusta katsoen.
2. Napsauta {{ui:Näkymät}} {{ui:Kamera}}-ryhmässä ja sitten {{ui:Tarkastele VR:ssä}}.
3. Pue kuuloke päähän.

Valikko on vasemman kätesi selässä. Osoita sitä oikealla ohjaimella ja vedä liipaisinta valitaksesi painikkeen. (Kun käytössä on vain yksi käsi, valikko leijuu siinä, mihin aloitit.)

## Miltä se näyttää

Kuulokkeessa malli näkyy [live-näkymän](topic:live-view) ilmeellä: antamasi pintojen ulkoasut ja materiaalit, taivas ja aurinko mallisi paikan ja päivämäärän mukaan varjoineen, lamput, sirotellut kasvit ja kivet sekä seinistä ja lattioista heijastuva valo (lasketaan tällä tietokoneella, kun katselet ympärillesi, ja seuraa sinua liikkuessasi). Kirkkaus ja näkymämuunnos (ACES tai AgX) ovat samat kuin [Renderöi kuva](topic:render)-toiminnossa. Se, kuinka paljon piirtää, riippuu siitä, mitä kuulokkeen selaimella on, kuten pöytäkoneella; ympäristön peittävyys, heijastukset ja hehku jäävät pöytäkoneelle.

## Liikkuminen

- **Hyppy:** kohdassa {{ui:Siirrä}} osoita lattiaa ja vedä liipaisinta; laskeudut siihen. Tai työnnä tikkua eteen tähdätäksesi ja päästä irti hypätäksesi. Voit laskeutua vain lattioille ja maahan (ylöspäin osoittaviin pintoihin), et koskaan seinälle.
- **Kääntyminen:** työnnä tikkua vasemmalle tai oikealle: käännyt 30° kerrallaan.
- **Kävely:** pelialueellasi kävele vain.

## Mittaa

Valitse {{ui:Mittaa}} ja vedä liipaisinta kahdessa pisteessä. Niiden välinen etäisyys näkyy mallin yksiköissä. Kulman lähellä oleva piste loksahtaa kulmaan.

## Leikkaa auki

Valitse {{ui:Leikkaus}} ja vedä liipaisinta pinnalla:

- seinällä (tai millä tahansa, joka ei ole lattia): kaikki sinun ja pinnan välillä leikataan pois, jolloin näet sisään. Tämä toimii parhaiten ulkoa tai huoneen poikki;
- lattialla, ylhäältä: pohjaleikkaus 1,2 m tuon lattian yläpuolella, jolloin seinien alaosa näkyy.

{{ui:Tyhjennä}} poistaa leikkauksen ja mittaukset. Jos leikkaustaso leikkaa mallin näkymässä, kun aloitat, kuuloke alkaa sen kanssa.

## Aseta havainto

Valitse {{ui:Havainto}} ja vedä liipaisinta kohtaan, jossa ongelma on. Numeroitu neula merkitsee sen, ja ModelCraft tallentaa havainnon kuvan kanssa siitä, mitä näit ja missä seisoit. Kun poistut VR:stä, havainnot ovat oikealla olevassa {{ui:Havainnot}}-luettelossa:

- silmäpainike näyttää havainnon sieltä, mistä se asetettiin;
- {{ui:Tallenna BCF-muodossa}} lataa ne kaikki BCF-tiedostona, jonka BIM-tarkistusohjelmat avaavat (kamera ja kuva mukaan lukien);
- ne tallennetaan myös `.modelcraft`-tiedostoon.

Kommentin lisääminen havaintoon tehdään VR:stä poistumisen jälkeen BCF-ohjelmassa: kirjoittaminen kuulokkeessa ei ole vielä toteutettu.

## Katso pöytämallina

{{ui:Pöytämalli}} pienentää mallin mahtumaan pöydälle edessäsi; kävele sen ympäri tai käännä sitä tikulla. {{ui:Koko koossa}} palauttaa sinut sinne, missä olit.

## Muiden kanssa, live

[Live-istunnossa](topic:work-live) jokainen VR:ssä näkee muut päänä ja kahtena kätenä omalla värillään, nimineen, ja pisteen, johon kukin osoittaa. Kenen tahansa tekemät muokkaukset saapuvat kuulokkeeseesi hetken kuluttua. Pöydän ääressä olevia ihmisiä ei vielä näytetä kuulokkeessa.

## Poistu

Valitse {{ui:Poistu VR:stä}} (tai ota kuuloke pois ja lopeta siinä). Näytön näkymä siirtyy sinne, missä pääsi oli.

:::note
Testattu vain kuulokeemulaattorilla, ei vielä oikealla kuulokkeella. Suuri malli voi saada kuulokkeen nykimään: piilota ensin se, mitä et tarvitse ([piilota ja eristä](topic:hide-isolate)).
:::
