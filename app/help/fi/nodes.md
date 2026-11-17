---
title: Solmut: rakenna malli johdottamalla
summary: Johdota luvut pisteiksi, pisteet käyriksi ja käyrät pinnoiksi. Muuta lukua, ja kaikki sen jälkeen rakentuu uudelleen. Jokainen solmu on myös rivi CraftScriptiä, ja kaavio tallennetaan tiedostoon.
keywords: solmut, solmueditori, visuaalinen ohjelmointi, parametrinen, kaavio, johdot, portit, vapaamuotoinen, freeform, nurbs, loft, pursota, kierrä, ympyrä, käyrä, pinta, sarja, alue, satunnainen, lista, skripti, craftscript, grasshopper
from: 9c8e254f
---

Solmueditori rakentaa geometriaa yhdistämällä laatikoita. Jokainen laatikko (solmu) tekee yhden pienen tehtävän: luo luvun, pisteen, ympyrän tai loftin. Yhdistät yhden tuloksen seuraavan sisäänmenoon, ja malli seuraa mukana, kun muutat lukua alussa.

Avaa se oikeasta paneelista: {{ui:Nodes}} › {{ui:Nodes…}}. Tiedosto, jossa on jo kaavio, avaa sen itsestään. Se on ikkuna 3D-näkymän päällä: vedä otsikkopalkista siirtääksesi sitä, vedä kulmasta muuttaaksesi kokoa.

## Johdotus

1. Valitse solmu vasemmalla olevasta luettelosta (kirjoita hakukenttään rajataksesi; <kbd>Enter</kbd> lisää ensimmäisen osuman). Se ilmestyy kankaan keskelle.
2. Vedä pyöreästä **lähtö**pisteestä oikealla puolella yhden solmun pyöreään **tulo**pisteeseen toisen solmun vasemmalla puolella. Piste muuttuu vihreäksi, kun se sopii, ja punaiseksi, kun ei sovi; vie osoitin pisteen päälle nähdäksesi syyn.
3. Tulo, johon ei ole kytketty mitään, näyttää ruudun arvolle, jonka kirjoitat. Kirjoita luku ja paina <kbd>Tab</kbd>: tulos rakentuu uudelleen.
4. Solmun otsikkopalkin pieni ympyrä on sen **silmä**. Solmu, jonka silmä on päällä, piirtyy 3D-näkymään: käyrät viivoina, pinnat varjostettuina ja pisteet pisteinä.

Vedä solmu sen otsikkopalkista. Vedä taustaa panoroidaksesi, käännä rullaa zoomataksesi. <kbd>Delete</kbd> poistaa valitun solmun. {{ui:Tidy}} järjestää solmut sarakkeisiin, {{ui:Fit}} tuo ne kaikki näkyviin, ja {{ui:Undo}} ja {{ui:Redo}} käyvät muokkauksesi läpi.

## Tyypit ja yksiköt

Porteilla on tyyppi: luku, kyllä/ei, piste, vektori, käyrä, pinta, verkko, kiintokappale tai ”geometria” mille tahansa näistä. Piste voi syöttää vektorisisäänmenoa ja takaisin. Luvuilla on yksikkö: **pituus** on millimetreinä ja **kulma** asteina. Pituus ei voi syöttää kulmaa, eikä pituutta kerrottuna pituudella (pinta-ala) hyväksytä, joten väärä johto pysäytetään jo, kun teet sen.

Neliön muotoinen piste on **lista**. Kun lista saapuu yksiarvoiseen sisäänmenoon, solmu ajetaan kerran jokaiselle kohteelle, ja sen tulos muuttuu listaksi. Lyhyempi lista toistaa viimeisen kohteensa. Esimerkiksi **Sarja**-korkeuksia **Siirrä**-solmuun tekee pinon kopioita.

## Kiintokappaleet ja Boolen-operaatiot solmuina

Ryhmä **Kiintokappaleet** tekee suljettuja kappaleita samoista tarkoista pinnoista kuin Pinnat-paneeli: **Laatikkokiintokappale**, **Sylinterikiintokappale** ja **Pallokiintokappale** (koot mm:nä), **Yhdiste**, **Vähennä** ja **Leikkaus** (toinen kiintokappale otetaan ensimmäisestä; toleranssi on se, kuinka kaukana kiintokappalemoottorin kolmiot saavat olla tarkoista pinnoista), **Pinnojen välinen pyöristys** (pinnat niiden numeron mukaan kiintokappaleessa, 1 on ensimmäinen; säde ja, jos yli 0, säde lopussa), **Kiintokappaleen tilavuus** (mm³) ja **Kiintokappale verkoksi** (nähdäksesi tai muuntaaksesi sen). Kiintokappaleella on oma porttityyppinsä: pistettä tai lukua ei voi johtaa kiintokappale-sisäänmenoon, ja piste pysyy punaisena. Boolen- ja pyöristyssolmut käyttävät ohjelman omaa kiintokappalemoottoria, joka ladataan, kun editori avataan ensimmäisen kerran.

## Virheet

Solmu, joka ei pysty tekemään tehtäväänsä, kertoo syyn nimensä alla punaisella (”Säteen on oltava suurempi kuin nolla.”), ja sitä seuraavat solmut odottavat. Sama viesti on Ongelmat-paneelin ongelma, joten löydät sen sieltä.

## Jokainen solmu on rivi skriptiä

Paina {{ui:Script}} nähdäksesi kaavion CraftScriptinä: yksi rivi solmua kohden, kuten `n3 = nd_circle(n2, n1, [0 0 1]);`. Muokkaa tekstiä ja paina {{ui:Make the graph from this script}} tuodaksesi sen takaisin kaavioksi. Samat `nd_`-funktiot toimivat PartCraftin CraftScriptissä, joten kaavio voidaan ajaa, silmukoida ja testata siellä. Satunnaisluvuilla on aina **siemen**, joten sama kaavio antaa saman tuloksen jokaisella tietokoneella.

## Tallennettu tiedoston mukana

Kaavio tallennetaan mallitiedostoon. Solmut tekevät omat käyränsä, pintansa ja verkkonsa: ne eivät muuta mallin pintoja ennen kuin pyydät.

## Muunna malliksi

Kytke silmä päälle solmusta, joka tekee pinnan tai verkon, ja paina sitten Solmut-ikkunassa {{ui:Bake to model}}. Jokainen näkyvä pinta tai verkko muuttuu mallin pintojen ryhmäksi metreinä, ja sitä voi muokata kuten mitä tahansa muuta. Se on yksi kumoamisvaihe. Kaavio jää paikoilleen, mutta kopio ei enää seuraa sitä: muuta lukua ja muunna uudelleen saadaksesi uuden kopion. Pisteitä ja käyriä ei muunneta, koska ne eivät ole kiintokappaleita, ja viesti kertoo, kuinka monta jätettiin pois.
