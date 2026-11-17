---
title: Tuet, seinämän paksuus, ontoksi tekeminen ja korjaus
summary: Katso, missä tulostus tarvitsee tukia ja suunnilleen kuinka paljon, löydä liian ohuet seinät, tee osa ontoksi määrättyyn seinämän paksuuteen tyhjennysreikien kanssa ja korjaa verkko listaamalla jokainen korjaus.
keywords: 3D-tulostus, tuet, tukien esikatselu, uloke, ulokekulma, puutuet, pylvästuet, seinämän paksuus, ohuet seinät, liian ohut, suutin, ontoksi tekeminen, ontto, kuoren tekeminen, tyhjennysreikä, hartsi, korjaus, verkon korjaus, ei-monistoinen, käännetyt pinnat, reiät, pienet kuoret, itseleikkaus, päällekkäisyys, yhdistäminen
from: 286bde26
---

Neljä työkalua mallin valmistelemiseen 3D-tulostinta varten. Avaa {{ui:Vie}} › {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}; valintaikkunan **Tulostustyökalut**-rivillä ovat {{ui:Tukien esikatselu}}, {{ui:Seinämän paksuus}}, {{ui:Ontoksi}} ja {{ui:Korjaus}}. Jokainen avautuu kortiksi näkymän päälle. {{ui:Sulje}} (rasti) sulkee kortin ja sen merkinnät. Kerrallaan näkyy yksi kortti.

Jokainen työkalu toimii tulostettaville osille: valinnalle tai, jos mitään ei ole valittu, kaikelle näkyvälle. {{ui:Ontoksi}} ja {{ui:Korjaus}} tarvitsevat yhden ryhmän, komponentin tai verkon valittuna, koska ne muuttavat sitä.

## Tukien esikatselu

Pinnat, jotka kallistuvat ulospäin enemmän kuin **ulokekulma** pystysuorasta, varjostetaan punaisiksi, ja yksinkertaiset tuet piirretään niistä (oranssina) alustalle tai mallin alla olevaan osaan.

- **Ulokekulma**: 45° on se, minkä useimmat tulostimet kestävät ilman tukea. Nosta sitä tulostimelle, joka siltaa hyvin.
- **Pylväät**: suora pylväs 3 mm:n välein jokaisen ulokkeen alla. Arvio laskee ne 15 %:n tukikuvioksi.
- **Puu**: lähellä olevat pisteet yhdistyvät yhdeksi rungoksi niiden keskikohdan alla; mikään haara ei kallistu yli 45°. Puut vievät yleensä vähemmän materiaalia ja koskettavat alustaa harvemmassa kohdassa.

Kortti kertoo, kuinka paljon pintaa tarvitsee tukea, kuinka monta tukipistettä on ja suunnilleen kuinka paljon materiaalia ne vievät. Tuet, jotka seisovat mallin päällä (eivätkä alustalla), lasketaan mukaan, koska ne jättävät jälkiä siihen. Kun tulostusalusta on valittu kohdasta {{ui:Asetukset}}, alusta piirretään mallin alle.

:::note
Tämä on esikatselu, ei viipalointiohjelma: viipalointiohjelmasi päättää todelliset tuet. Hyvin suuressa ulokkeessa tukipisteet levitetään laajemmalle, jotta esikatselu pysyy nopeana. Kortti kertoo siitä.
:::

## Seinämän paksuus

Jokainen pinta mitataan suoraan kiintokappaleen läpi toiselle puolelle. Seinät, jotka ovat **sallittua ohuinta seinää** ohuempia, ovat punaisia. Seinät, jotka ovat yhden ja puolen kertaa sen verran ohuita, ovat oransseja: ne tulostuvat, mutta voivat jäädä heikoiksi.

Ohuet alueet luetellaan ohuimmasta alkaen, ja niistä kerrotaan, kuinka ohut ja kuinka suuri kukin on. {{ui:Näytä}} kääntää kameran siihen.

Tulostin ei pysty tekemään seinää ohuemmaksi kuin noin kaksi suuttimen leveyttä: yleisellä 0.4 mm:n suuttimella se on 0.8 mm (alkuarvo). Hartsitulostimet pärjäävät vähemmällä; tarkista tulostimesi ohjeesta.

Hyvin suuressa mallissa vain osa pinnoista lähettää säteen, ja muut ottavat naapureidensa paksuuden. Kortti kertoo, kuinka monta mitattiin.

## Ontoksi

Ontoksi tekeminen säilyttää ulkopuolen ennallaan ja poistaa sisäpuolen, jolloin seinät jäävät niin paksuiksi kuin pyydät. Hartsitulosteet kuluttavat vähemmän hartsia ja vetävät vähemmän rakennusalustasta. Filamenttitulosteet käyttävät vähemmän muovia kuin täyttö.

1. Valitse ryhmä, komponentti tai verkko ja avaa {{ui:Ontoksi}}.
2. Aseta **seinä** (alkuarvo 2 mm) ja kuinka leveitä **tyhjennysreiät** ovat.
3. Hartsitulostusta varten napsauta {{ui:Aseta tyhjennysreikä}} ja napsauta sitten mallin ulkopintaa siihen kohtaan, johon reikä menee: matalalle, lähelle rakennusalustaa, jotta nestemäinen hartsi valuu ulos. Aseta niin monta kuin tarvitset. Jokainen näkyy sinisenä ympyränä ja on luettelossa, josta sen voi poistaa painikkeella {{ui:Poista}}.
4. {{ui:Esikatselu}} kertoo, kuinka paljon ontoksi tekeminen poistaa.
5. {{ui:Tee ontoksi}} tekee muutoksen yhdessä askeleessa, jonka {{key:Mod+Z}} kumoaa.

Tuloksena on yksi suljettu kiintokappale, jonka 3D-tulostustarkistus hyväksyy: ModelCraft tarkistaa sen ensin, eikä muuta mitään, jos se ei läpäisisi tarkistusta. Jos malli on ohuempi kuin kaksi seinää, se pysyy kiinteänä. Tulos on ryhmä, jonka tasaiset sivut ovat yksittäisiä pintoja, joten voit jatkaa mallintamista {{ui:Työnnä/vedä}}-työkalulla. Kaareva osa, joka on tehty ontoksi hienolla ruudukolla, saa yleensä liian monta pintaa siihen, ja siitä tulee sen sijaan verkko. Tilarivi kertoo, kumpi tapahtui.

:::tip
Useimmissa muodoissa sisäpuoli on ulkopuoli siirrettynä sisäänpäin täsmälleen seinän verran. Kun kulmat tai ohuet osat tekevät sen mahdottomaksi, ModelCraft seuraa ulkopuolta seinän etäisyydellä hienolla ruudukolla. Kortti kertoo sitten, kuinka lähellä se on (murto-osan millimetrin tarkkuudella).
:::

## Korjaus

{{ui:Korjaus}} tarkastelee valittua osaa samalla tavalla kuin tulostimen viipalointiohjelma, korjaa turvallisesti korjattavissa olevat asiat ja listaa jokaisen korjauksen:

| Se korjaa | Mitä se tarkoittaa |
|---|---|
| Kolmiot ilman pinta-alaa | jätetään pois |
| Kolmio piirretty kahdesti | yksi kappale säilytetään; pinta, joka on piirretty selkä selkää vasten itsensä kanssa (ilman paksuutta), poistetaan |
| Irralliset kappaleet alle 0.5 mm | poistetaan |
| Väärään suuntaan osoittavat kolmiot | käännetään naapuriensa mukaan |
| Reiät, tasaiset tai eivät | suljetaan uusilla kolmioilla viuhkana kunkin reiän keskeltä |
| Kappale väärinpäin | käännetään ulospäin (toisen kappaleen sisällä oleva ontelo jätetään ennalleen, koska se on tarkoitettu osoittamaan sisään) |

{{ui:Korjaa turvalliset}} tekee ne kaikki yhdessä askeleessa, jonka {{key:Mod+Z}} kumoaa, ja tilarivi listaa jokaisen korjauksen. Korjattu osa muuttuu ryhmäksi, jonka tasaiset sivut ovat yksittäisiä pintoja. Jos se ei vieläkään sulkeudu (jokin kohdasta **Jätetty käsiteltäväksi** jää jäljelle), tai jos siinä olisi liian monta pintaa ryhmäksi, siitä tulee verkko: sen pinnat pysyvät kolmioina, ja tasaiset sivut näyttävät yhä tasaisilta. Tilarivi kertoo, kumpi tapahtui. {{ui:Yhdistä päällekkäiset osat}} toimii samalla tavalla.

Mitä ei voi korjata turvallisesti, luetellaan kohdassa **Jätetty käsiteltäväksi**, ja se merkitään violetilla näkymässä. Näytä se painikkeella {{ui:Näytä}}:

- **Reunat, joissa kohtaa kolme tai useampi pinta**: päätä, mikä pinta kuuluu, ja poista muut.
- **Kappale, joka menee itsensä läpi**: siirrä tai piirrä se osa uudelleen. Katso [Leikkaa pinnat](topic:intersect).
- **Reiät, jotka ovat liian suuria tai liian sekavia suljettaviksi**: piirrä pinnat niiden poikki.
- **Erilliset, päällekkäiset kappaleet**: viipalointiohjelmat yhdistävät ne joka tapauksessa. {{ui:Yhdistä päällekkäiset osat}} tekee niistä yhden suljetun rungon. Se rakentaa uudelleen pinnat, joissa kappaleet kohtaavat, joten se on erillinen painike, jota ei koskaan tehdä puolestasi.

Työnnä/vedä-ryhmille voit myös korjata ongelmat yksi kerrallaan kohdassa {{ui:Kohteen tiedot}} › {{ui:Näytä ongelmat}} / {{ui:Korjaa}}. Se säilyttää piirtämäsi pinnat. Katso [Kiintokappaletyökalut](topic:solids).

Aiheeseen liittyvää: [Valmistele malli 3D-tulostukseen](topic:print-3d) · [Aloittelijan tyyli](topic:beginner) · [Ei vielä toteutettu](topic:not-built-yet#3d-printing)
