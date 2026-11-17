---
title: Animoi mikä tahansa ominaisuus, muotoile käyrinä ja yhdistele leikkeitä
summary: Animoi-työtila avainnuttaa kohteen sijainnin, kierron ja koon, lampun kirkkauden, levittäytymisen ja värin, linssin sekä verkon muotoavaimet; luurangot taivuttavat verkkoa luilla ja maalatuilla painoilla; IK ja rajoitteet saavuttavat, katsovat, kopioivat, pysyvät rajoissa, roikkuvat tai seuraavat muita; jäykät kappaleet putoavat, pinoutuvat ja törmäävät ja paistetaan avaimiksi; ohjaimet asettavat arvon muista; aikajanan Käyrät-näkymä muotoilee jokaisen muutoksen Bézier-kahvoilla ja jaksoilla, ja sen Leikkeet-näkymä tallentaa animaatiot toimintoina, jotka asetetaan uudelleen ja sekoitetaan.
keywords: fysiikka, jäykkä kappale, jäykät kappaleet, simulaatio, simuloi, pudota, putoaminen, painovoima, törmätä, törmäys, pinota, pomppu, kitka, paista, paistettu, ik, käänteinen kinematiikka, rajoite, rajoitteet, katso kohti, look at, track to, tähtää, kopioi muunnokset, kopioi sijainti, kopioi kierto, rajoita kierto, rajat, lapsi, vanhempi, seuraa polkua, polku, napa, fabrik, ketju, luuranko, luurangot, luu, luut, iho, skinnaus, painot, painomaalaus, ryhmät, automaattiset painot, asento, asentotila, kaksoiskvaternio, lineaarinen sekoitus, muotoavaimet, muotoavain, morfi, morfit, muototavoitteet, ilmeet, ohjain, ohjaimet, lauseke, animoi, työtila, animaatio, avainkuva, avain, avaimet, ominaisuus, ominaisuudet, muunnos, sijainti, kierto, koko, lamppu, valo, kirkkaus, väri, linssi, näkökenttä, fov, käyräeditori, käyrät, käyrä, bezier, kahvat, tangentti, interpolointi, sykli, syklit, toisto, silmukka, edestakaisin, siirtymä, taulukko, valitse avaimet, laatikkovalinta, kopioi avaimet, liitä avaimet, venytä avaimet, skaalaa avaimet, leikkeet, toiminnot, nla, sekoitus, vaikutus, varastoi
from: 16d8e12f
---

[Aikajana](topic:animation) siirtää kameraa sekä koko ryhmiä ja komponentteja. **Animoi**-työtila avainnuttaa enemmän kuin tämän, ja aikajanalle tulee kaksi lisänäkymää, joilla avainnutut muutokset voi muotoilla ja käyttää uudelleen.

## Avaa se

Valitse {{ui:Animoi}} työkalurivin työtilaluettelosta. Aikajana aukeaa näkymän alle, työkalurivillä näkyvät Animoi-ryhmät ({{ui:Avaimet}}, {{ui:Toista}}, {{ui:Aikajana}}) ja oikealla oleva paneeli luettelee, mitä voi avainnuttaa toistokohdassa.

## Avainnuta ominaisuus

Paneeli luettelee toistokohdassa:

- **Valittu kohde**: sen {{ui:Aseta}}, {{ui:Kierto (°)}} ja {{ui:Koko}}, kukin kolmena lukuna. Kirjoita luku ja paina {{key:Enter}}: se avainnutetaan toistokohtaan ja kohde siirtyy sinne. Rivin vieressä oleva timantti avainnuttaa arvon sellaisena kuin se nyt on; täytetty timantti tarkoittaa, että toistokohdassa on jo avain.
- **Lamput**: kunkin lampun {{ui:Kirkkaus (lm)}}, {{ui:Levittäytyminen (°)}} (kohdevalot) ja {{ui:Väri}}.
- **Kamera**: {{ui:Linssin kulma (°)}}, zoomaukseen kameran liikkuessa.

{{ui:Avainnuta muunnos}} (tai {{key:I}}) avainnuttaa kaikkien valittujen ryhmien tai komponenttien sijainnin, kierron ja koon kerralla; {{ui:Avainnuta kamera}} (tai {{key:K}}) avainnuttaa kameran. Kun {{ui:Automaattiavain}} on päällä, ryhmä, jonka sijainti, kierto ja koko on avainnutettu näin, saa uuden avaimen aina kun siirrät sitä.

Kierrot ovat kolme kulmaa: X:n, sitten Y:n ja sitten Z:n ympäri. Yli 180° avainnutettu kierto jatkaa samaan suuntaan (190° pysyy 190°:na, ei −170°:na), joten pyörä voi pyöriä useita kertoja.

:::tip
Aikajanalla {{ui:Avainnuta valinta}} -avainnutettu ryhmä saa koko sijainnin avaimet. Sen rivin käyrä-painike muuttaa ne sijainnin, kierron ja koon käyriksi (sama sijainti jokaisessa avaimessa), jotta voit muotoilla ne kohdassa {{ui:Käyrät}}.
:::

## Muotoavaimet (morfit)

**Muotoavain** on saman [verkon](topic:meshes) toinen muoto: hymy kasvoilla, oven pullistuma, taittunut lehti. Sen liukusäädin sekoittaa verkon nykyisestä muodosta (0) kyseiseen muotoon (1); useat avaimet lasketaan yhteen.

1. Valitse verkko Animoi-työtilassa: paneeli näyttää sen {{ui:Muotoavaimet}}.
2. Napsauta {{ui:Lisää muotoavain}}. ModelCraft siirtyy [verkkotyötilaan](topic:mesh-edit), jossa uutta avainta muokataan: siirrä pisteitä, pursota, muotoile — muuta verkko halutuksi muodoksi.
3. Palaa {{ui:Animoi}}-työtilaan ja napsauta {{ui:Valmis}}. Verkko palautuu entiseen muotoonsa, ja avain säilyttää muutoksesi.

Vedä sitten avaimen liukusäädintä (tai kirjoita arvo), jotta se sekoittuu mukaan. Timantti avainnuttaa arvon toistokohtaan, joten avain voi kasvaa ja haalistua ajan myötä; kun sillä on raita, uusi arvo avainnutetaan toistokohtaan. Kynä muokkaa avaimen muotoa uudelleen (verkko näyttää sen kokonaan, kunnes napsautat {{ui:Valmis}}; {{ui:Peruuta}} jättää avaimen ennalleen), silmä kytkee avaimen pois päältä ja roskakori poistaa sen.

Avaimen muokkauksen aikana lisäämäsi kärkipiste kuuluu itse verkkoon: se pysyy siinä, minne sen asetit, kaikissa muodoissa.

:::note
Muotoavaimet siirtävät verkkoa ennen sen [muokkaimia](topic:modifiers): jakopinta-muokkain tasoittaa sekoitetun muodon. Renderöidyt kuvat ja videot näyttävät avaimet jokaisessa kuvassa.
:::

## Luuranko: luut, jotka taivuttavat verkkoa

**Luuranko** on joukko luita [verkon](topic:meshes) sisällä. Aseta luut asentoon, ja verkko seuraa, kukin piste sen verran kuin sen **painot** määräävät.

1. Valitse verkko Animoi-työtilassa ja napsauta paneelin {{ui:Lisää luuranko}} -painiketta (tai {{ui:Lisää luu}} {{ui:Luuranko}}-ryhmässä): ensimmäinen luu kulkee ylöspäin verkon keskeltä sen pohjasta.
2. Kun luu on valittu, {{ui:Lisää lapsiluu}} lisää seuraavan luun sen kärjestä. Aseta minkä tahansa luun {{ui:Pää}}, {{ui:Kärki}}, {{ui:Vieritys (°)}} ja mistä se {{ui:Roikkuu kohteesta}} paneelissa; toisesta roikkuva luu liikkuu sen mukana. Poista valinta kohdasta {{ui:Liikuttaa verkkoa}} luulta, joka vain ohjaa muita.
3. Napsauta {{ui:Automaattiset painot}}: kukin luu ottaa haltuunsa lähimmät pisteet, ja ote leviää sujuvasti verkon yli, joten kahden luun välissä olevat pisteet jakavat ne. {{ui:Vain lähimmät luut}} on nopeampi ja jyrkempi jako.

**Asettele** luita {{ui:Asento}}-tilassa ({{key:P}}): napsauta luuta valitaksesi sen, vedä kiertääksesi sitä näkymän akselin ympäri, {{key:Shift}}-vedä siirtääksesi. Tai kirjoita sen {{ui:Aseta}}, {{ui:Kierto (°)}} ja {{ui:Koko}} kohdassa {{ui:Asento}}; kierrot ovat luun omilla akseleilla, lepoasennosta lähtien. Timantit ja {{ui:Avainnuta koko asento}} avainnuttavat asennon toistokohtaan; kun luulla on avaimia, sen asettaminen avainnuttaa sen siihen. {{ui:Nollaa tämä luu}} ja {{ui:Nollaa asento}} palauttavat luut lepoon.

**Maalaa painot** ({{key:W}}) valitulle luulle: verkko näkyy levossa, ja kukin pinta on värjätty sen mukaan, kuinka paljon luu sitä pitää — punainen kaikki, sininen ei mitään. Maalaa lisätäksesi otetta ({{key:Mod}} poistaa sen, {{key:Shift}} tasoittaa); {{ui:Koko (px)}} ja {{ui:Voimakkuus}} asettavat siveltimen. Kun {{ui:Pidä kunkin pisteen painojen summa yhtenä}} on päällä, toiselle luulle annettu lisäpaino otetaan muilta. Jokainen veto on yksi askel mallin kumoamista.

{{ui:Iho}} valitsee, miten luiden välissä oleva piste liikkuu: {{ui:Lineaarinen (nopea)}} sekoittaa luiden liikkeet ja painaa hieman taittunutta niveltä; {{ui:Duaalikvaternio (säilyttää tilavuuden nivelissä)}} kiertää pistettä nivelen ympäri, joten kyynärpää tai polvi säilyttää paksuutensa (silloin luun {{ui:Koko}} ei venytä ihoa).

:::note
Ensin tulevat muotoavaimet, sitten luuranko ja sitten [muokkaimet](topic:modifiers). Näkymä, kuvat ja videot näyttävät kaikki asetetun verkon; verkon painot tallennetaan sen mukana, luut ja niiden asento animaation mukana.
:::

## IK ja rajoitteet

**Rajoite** siirtää luuta tai kohdetta avainten jälkeen sääntöä noudattaen. Valitse kohde (tai luuranko-luu) ja lisää rajoite kohdan {{ui:Rajoitteet: …}} alle; useat toimivat luetellussa järjestyksessä (nuolet muuttavat sitä), ja jokaisella on {{ui:Kuinka paljon}} (0–1, avainnutettavissa timantilla kuten mikä tahansa ominaisuus) ja päälle/pois-kytkin.

| Rajoite | Kenelle | Mitä se tekee |
|---|---|---|
| {{ui:Tavoita (IK)}} | Luut | Luu ja luut, joista se roikkuu ({{ui:Ketjun luut}}), taipuvat niin, että sen kärki ulottuu kohteeseen. Kahdella luulla ja {{ui:Napa (taive osoittaa sitä kohti)}}-asetuksella kyynärpää tai polvi osoittaa napaa kohti; pidemmät ketjut taipuvat sujuvasti. Ulottuvuuden ulkopuolella ketju osoittaa suoraan kohteeseen. |
| {{ui:Katso kohti}} | Molemmat | Kääntyy niin, että {{ui:Osoittava akseli}} osoittaa kohteeseen ja {{ui:Ylöspäin pidettävä akseli}} pysyy niin lähellä ylöspäin kuin mahdollista. |
| {{ui:Kopioi muunnokset}} | Molemmat | Ottaa kohteen sijainnin, kierron tai koon — ne, jotka on rastitettu. |
| {{ui:Rajat}} | Molemmat | Pitää oman sijainnin, kierron (asteina) tai koon {{ui:min}} ja {{ui:max}} välillä akselikohtaisesti; jätä pari tyhjäksi, jos akseli saa vapaasti liikkua. |
| {{ui:Lapsi kohteelle}} | Molemmat | Liikkuu kohteen mukana ikään kuin roikkuisi siitä, lähtien paikoista, joissa molemmat olivat, kun valitsit kohteen. |
| {{ui:Seuraa polkua}} | Kohteet | Istuu [käyräkohteella](topic:curves) kohdassa {{ui:Käyrää pitkin}} (0 sen alussa, 1 sen lopussa; avainnuta se, jotta se kulkee), ja {{ui:Käänny käyrää pitkin}} -asetuksella osoittaa käyrän suuntaan. |

Kohde on toinen kohde avoimessa ryhmässä, saman luurangon luu tai {{ui:Piste}}, jonka kirjoitat (kohteen piste on mallin koordinaateissa, luun pisteen verkon koordinaateissa). IK-jalalle aseta kohde sinne, minne jalan pitäisi mennä, ja avainnuta kohde, tai avainnuta {{ui:Kuinka paljon}}, jotta jalka siirtyy avainten ja IK:n välillä.

:::tip
Kohde, joka katsoo kohdetta, joka seuraa polkua, näkee sen polulla: ModelCraft laskee kohteet ensin, kohteiden järjestyksestä riippumatta.
:::

## Fysiikka: pudota, pinota ja törmätä

Anna kohteiden pudota ja törmätä toisiinsa, ja säilytä tulos avaimina.

1. Valitse ryhmä, komponentti tai verkko ja aseta sen {{ui:Jäykkä kappale}} kohdassa {{ui:Fysiikka}}: {{ui:Putoaa ja törmää}} (se liikkuu) tai {{ui:Pysyy paikallaan, on tiellä}} (pöytä, seinä, luiska). Anna putoavalle kappaleelle sen {{ui:Muoto}} — {{ui:Laatikko (sen rajat)}} tai {{ui:Pallo (rajojen ympäri)}} — sen {{ui:Massa (kg)}}, {{ui:Kitka}} ja {{ui:Kimmoisuus}} (0 tömähtää, 1 pomppaa takaisin yhtä korkealle).
2. Kohdassa {{ui:Koko malli}} aseta {{ui:Mistä (s)}} ja {{ui:Mihin (s)}}, {{ui:Painovoima (m/s², alas)}} ja se, onko {{ui:Maa, jolle laskeutua}} (ja sen korkeus).
3. Napsauta {{ui:Paista fysiikka}} (paneelissa tai {{ui:Fysiikka}}-ryhmässä). Jokainen putoava kohde saa sijainnin, kierron ja koon avaimen jokaiseen kuvaan kahden ajan välillä; toista se kuten mitä tahansa animaatiota.

Uudelleen paistaminen korvaa nämä avaimet; {{ui:Poista paistetut avaimet}} poistaa ne. Kohteet alkavat levosta, siinä missä niiden avaimet, käyrät ja rajoitteet asettavat ne kohdassa {{ui:Mistä (s)}} (ennen sitä avainnutettu liike ei jatku putoamiseen). Enemmän {{ui:Askelia per ruutu}} pitää korkeat pinot vakaampina; tilarivi kertoo, kun jokin liikkuu yhä lopussa.

:::note
Muodot ovat laatikoita ja palloja kunkin kohteen rajojen ympärillä; laatikko koskettaa kulmillaan, särmien keskikohdilla ja pintojen keskikohdilla, joten laatikot pinoutuvat ja kaatuvat odotetulla tavalla. Kangasta, nesteitä, kohteiden välisiä niveliä ja tarkkoja muotoja ei ole vielä toteutettu.
:::

## Ohjaimet

**Ohjain** asettaa muotoavaimen muista asioista käsin asettamisen sijaan: avaa avaimen ohjain (laskimen painike), kirjoita **lauseke** ja anna kullekin siinä olevalle nimelle, mitä se lukee ({{ui:Lukee}}): aika sekunteina, kuva, kohteen sijainti, kierto tai koko X:n, Y:n tai Z:n suuntaan, lampun kirkkaus tai toinen muotoavain. Esimerkiksi kun `v` lukee oven kiertoa Z:n ympäri, `clamp(v / 90, 0, 1)` avaa muodon oven avautuessa.

Lausekkeissa käytetään lukuja, nimiä, `+ - * / % ^` ja sulkuja sekä funktioita `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` ja vakioita `pi` ja `e`. Virhe osoitetaan eikä muuta mitään. Ohjatun avaimen liukusäädin näyttää ohjaimen arvon; ohjain voittaa avaimen raidan, kunnes poistat sen.

## Valitse ja muuta avaimia (Avaimet-näkymä)

{{ui:Avaimet}} näyttää rivin kutakin raitaa kohden: kameran, jokaisen liikkuvan ryhmän ja jokaisen ominaisuuden ("Lamppu 2 · Kirkkaus (lm)"; ominaisuusavaimet ovat pyöreitä).

- Napsauta avainta valitaksesi sen; {{key:Shift}}-napsautus tai {{key:Mod}}-napsautus lisää avaimia valintaan tai poistaa niitä siitä. {{key:Shift}}-veto rivien yli piirtää laatikon, joka lisää kaikki sen avaimet.
- Vedä valittua avainta siirtääksesi kaikki; {{key:Left}} / {{key:Right}} siirtävät niitä yhden kuvan ({{key:Shift}}: kymmenen).
- {{key:Mod+C}} kopioi valitut avaimet, {{key:Mod+V}} liittää ne toistokohdasta samoille raidoille (toinen ModelCraft-välilehti voi liittää ne myös).
- {{ui:Venymä}} levittää valitut avaimet toistokohdasta viereisen luvun verran (2 = kaksi kertaa kauemmas toisistaan; 0.5 vetää ne lähemmäs).
- Siirtymälista asettaa, miten jokainen valittu avain jatkuu eteenpäin.

## Muotoile käyriä (Käyrät-näkymä)

{{ui:Käyrät}} on kuvaaja kustakin luvusta ajan funktiona: aika vaakasuunnassa, arvo pystysuunnassa. Rastita vasemmalla olevassa luettelossa näytettävät käyrät (X, Y ja Z ovat punainen, vihreä ja sininen).

- Napsauta avainta (neliötä) valitaksesi sen, {{key:Shift}}-napsauta lisätäksesi tai vedä laatikko. Vedä valittua avainta muuttaaksesi sen aikaa ja arvoa; kun useita on valittu, veto siirtää niitä ajassa.
- Valitussa avaimessa näkyvät sen kaksi **kahvaa**. Vedä yhtä muotoillaksesi käyrää sillä puolella. {{ui:Kahvat}} kertoo, miten ne käyttäytyvät: {{ui:Automaattinen}} (sujuva käyrä sen ympärillä olevien avainten läpi), {{ui:Osoittaa seuraavaan avaimeen}}, {{ui:Kohdistettu}} (kaksi pysyvät suorassa linjassa, joten käyrässä ei ole kulmaa) tai {{ui:Vapaa}}.
- {{ui:Valituista avaimista}} asettaa, miten kukin valittu avain siirtyy seuraavaan: {{ui:Käyrä (kahvat)}}, {{ui:Tasoita}}, {{ui:Tasainen}}, {{ui:Hidas alku ja loppu}} tai {{ui:Pito}}.
- {{ui:Ennen}} ja {{ui:Jälkeen}} asettavat, mitä käyrä tekee avaintensa ulkopuolella: {{ui:Pito}} (pysyy ensimmäisessä tai viimeisessä arvossa), {{ui:Toisto}}, {{ui:Edestakaisin}} tai {{ui:Toista ja jatka eteenpäin}} (jokainen toisto alkaa siitä, mihin edellinen päättyi: pyörä pyörii edelleen, kävelijä kävelee edelleen).
- Rulla zoomaa ({{key:Mod}}: vain arvot; {{key:Shift}}: vain aika); vedä keskipainikkeella tai {{key:Alt}}-näppäimellä panoroidaksesi; {{ui:Näytä kaikki}} tai {{key:Home}} sovittaa kaikki näytetyt käyrät. Napsauta tyhjää kohtaa siirtääksesi toistokohdan sinne. {{key:Delete}} poistaa valitut avaimet.

Kahvat pidetään poissa toistensa ohi ajassa, joten käyrä ei koskaan kulje taaksepäin.

## Käytä animaatioita uudelleen (Leikkeet-näkymä)

**Leike** toistaa tallennetun animaation (**toiminnon**) aikajanalla. Leikkeet sekoitetaan järjestyksessä, alemmat rivit ylempien päälle; aikajanan omat raidat ovat jokaisen leikkeen päällä.

1. Avainnuta ryhmät ja lampit tavalliseen tapaan, napsauta sitten {{ui:Tee leike}} kohdassa {{ui:Leikkeet}} ja anna toiminnolle nimi. Raidoista tulee toiminto, ja leike toistaa sen siinä, missä ne olivat (kamera pysyy aikajanalla).
2. Käytä sitä uudelleen valitsemalla toiminto ja napsauttamalla {{ui:Lisää leike}}: uusi leike alkaa toistokohdasta.
3. Vedä leiketta rivillään siirtääksesi sitä; napsauta sitä asettaaksesi {{ui:Alku (s)}}, {{ui:Nopeus}} (2 = kaksi kertaa nopeammin), {{ui:Toistot}}, {{ui:Kuinka paljon}} (0–1), {{ui:Sekoitus}} ({{ui:Korvaa}} tai {{ui:Lisää päälle}} sitä edeltävien leikkeiden päälle), {{ui:Leikkeen ulkopuolella}} (ei mitään, pidä sen loppu tai pidä molemmat päät) ja {{ui:Mykistä}}. Nuolet muuttavat järjestystä; roskakori poistaa sen (toiminto, jota mikään leike ei enää käytä, lähtee mukana).

Leike, jonka {{ui:Kuinka paljon}} on alle täyden, sekoittuu sen alla olevasta: sitä edeltävästä leikkeestä tai lampusta tai kohteesta sellaisena kuin se on ilman animaatiota.

## Mikä toistuu missä

| Mitä | Näkymässä | Renderöidyssä videossa |
|---|---|---|
| Kameran avaimet, linssin kulma kameran avaimilla | Kyllä | Kyllä |
| Sijainti, kierto ja koko (avaimet, käyrät, leikkeet) | Kyllä | Kyllä |
| Lampun kirkkaus, levittäytyminen ja väri | Kyllä | Ei vielä toteutettu: video käyttää lampuja sellaisina kuin ne ovat alussa (katso [mitä ei ole vielä toteutettu](topic:not-built-yet)) |
| Linssin kulma ilman kameran avaimia | Kyllä | Ei vielä toteutettu: avainnuta myös kamera |
| Muotoavaimet ja ohjaimet | Kyllä | Kyllä |
| Luurangot (asetetut verkot) | Kyllä | Kyllä |
| IK ja rajoitteet | Kyllä | Kyllä |
| Paistettu fysiikka (avaimet) | Kyllä | Kyllä |

Kaikki tallennetaan `.modelcraft`-tiedostoon animaation muun osan mukana, ja aikajanan {{ui:Kumoa}} ja {{ui:Tee uudelleen}} kumoavat mitä tahansa siitä.
