---
title: Ryhmät ja komponentit
summary: Estä kohteita tarttumasta toisiinsa, muokkaa yhtä kopiota ja muuta kaikkia, ja käytä Jäsennys- ja Komponentit-paneeleja.
keywords: ryhmä, komponentti, tee ryhmä, tee komponentti, hajota, tee yksilölliseksi, jäsennys, esiintymät, kopiot, lohko, sisäkkäinen, muokkaa ryhmää, aseta
from: 7cb925f3
---

Irralliset geometriat ModelCraftissa tarttuvat toisiinsa: toisiinsa koskettavat viivat jakavat toisensa, ja pinnat, jotka jakavat reunan, liikkuvat yhdessä. Tämä mahdollistaa piirtämisen pinnoille, mutta se tarkoittaa myös, että toista laatikkoa vasten piirretty laatikko sulautuu siihen. **Ryhmät** ja **komponentit** pitävät kohteet erillään.

- **Ryhmä** kokoaa geometriaa niin, että se toimii yhtenä kohteena. Mikään sen ulkopuolinen ei tartu siihen.
- **Komponentti** on ryhmä, jonka voi sijoittaa monta kertaa. Jokaisella kopiolla on sama sisältö: muokkaa yhtä, ja kaikki muuttuvat. Käytä komponentteja kaikelle toistuvalle: ikkunat, pilarit, pöydät, puut.

## Tee ryhmä tai komponentti

1. Valitse geometria. Pinnan kolmoisnapsautus valitsee koko yhteydessä olevan kohteen; ikkunavedolla valitaan kaikki laatikkoon osuva.
2. Paina {{key:Shift+G}} ryhmälle tai {{key:G}} komponentille. Voit myös napsauttaa työkalurivin ryhmästä {{ui:Organize}} löytyvää {{ui:Group}}- tai {{ui:Component}}-painiketta, tai valita kohdasta {{ui:Entity info}} komennon {{ui:Make group (Shift+G)}} tai {{ui:Make component (G)}}.

   Tilarivi kertoo ”Ryhmitelty nimellä Group#1.” tai ”Komponentti tehty: Component#1.”, uusi kohde on valittuna, ja se näkyy kohdassa {{ui:Outliner}}.

3. Nimeä kohde kirjoittamalla nimi kenttään {{ui:Name}} kohdassa {{ui:Entity info}} ja painamalla {{key:Enter}} tai napsauttamalla muualle.

Pinnan valinta tuo mukanaan sen reunat. Jos mitään ei ole valittu, tilarivi kertoo: ”Valitse ensin geometriaa (vedä ikkuna tai kolmoisnapsauta kaiken yhdistetyn valitsemiseksi).”

Ryhmiä voi ryhmitellä myös: valitse useita ryhmiä ja paina {{key:Shift+G}}. {{ui:Outliner}} näyttää sisäkkäisyyden.

:::note
Näppäinkirjaimet vastaavat SketchUpin oletuksia: {{key:G}} tekee komponentin, {{key:Shift+G}} ryhmän.
:::

## Muokkaa ryhmän tai komponentin sisällä

1. Kaksoisnapsauta sitä (näkymässä tai kohdassa {{ui:Outliner}}), tai valitse se ja napsauta kohdassa {{ui:Entity info}} painiketta {{ui:Edit}}.

   Muu malli himmenee, akselit siirtyvät ryhmän omiin akseleihin, ja {{ui:Outliner}} kertoo ”Muokkaus: Malli › Group#1”. Tilarivi kertoo ”Muokataan kohdetta Group#1. Esc tai kaksoisnapsautus ryhmän ulkopuolella sulkee sen.”

2. Piirrä, työnnä/vedä, siirrä ja poista tavalliseen tapaan. Kaikki tekemäsi pysyy ryhmän sisällä.
3. Sulje ryhmä painamalla {{key:Esc}} (kahdesti, jos jotain on valittuna), kaksoisnapsauttamalla tyhjää tilaa tai napsauttamalla kohdassa {{ui:Outliner}} painiketta {{ui:Close group}}.

Kun komponentti on auki, jokainen sen kopio muuttuu työn edetessä.

## Sijoita lisää komponentin kopioita

- Kopioi se {{ui:Move}}-työkalulla ja {{key:Ctrl}}-näppäimellä (katso [Siirtäminen ja kopiointi](topic:move-copy)). Jokainen kopio on uusi sijoitus samasta komponentista.
- Tai napsauta sen vieressä olevaa {{ui:Place}}-painiketta paneelissa {{ui:Components}} ja napsauta sitten kohtaa, johon se menee. Sen origo (alin kulma laatikon ympärillä, jonka valitsit komponenttia tehdessäsi) asettuu napsautuskohtaan. Tämän jälkeen työkalu palaa {{ui:Select}}-tilaan.

{{ui:Components}} näyttää, montako kopiota on sijoitettu ("4×"), ja {{ui:Outliner}} näyttää määrän nimen jälkeen.

## Järjestele kohdassa Outliner

Vedä rivi kohdassa {{ui:Outliner}} muuttaaksesi sen paikkaa. Mikään ei siirry näkymässä: ryhmä säilyttää paikkansa mallissa.

- **Ryhmään:** pudota rivi ryhmän rivin keskelle (rivin ympärille tulee katkoviiva). Se menee ryhmän sisään viimeisenä.
- **Eri järjestykseen:** pudota rivi rivin yläreunaan tai alareunaan (siihen tulee viiva). Se menee juuri ennen tai jälkeen kyseistä riviä, samaan ryhmään kuin tuo rivi, joten näin kohde voidaan myös siirtää ryhmään valittuun kohtaan.
- **Ylimpään tasoon:** pudota rivi otsikkoon {{ui:Outliner}}. Se menee viimeiseksi.

Jokainen pudotus on yksi vaihe: {{key:Mod+Z}} palauttaa sen. {{key:Esc}} vedon aikana ei pudota mitään. Ryhmä ei voi mennä itsensä sisään tai sen sisältämän ryhmän sisään. Vetäminen on pois käytöstä, kun {{ui:Find by name}} sisältää tekstiä.

:::touch
Pidä sormea rivillä hetki ja vedä sitten. Nopea pyyhkäisy vierittää luetteloa.
:::

## Tee yksi kopio erilaiseksi

Valitse kopio ja napsauta kohdassa {{ui:Entity info}} painiketta {{ui:Make unique}} (näkyy, kun komponentti on sijoitettu useammin kuin kerran). Kopiolle tulee oma määritelmä, nimetty alkuperäisen mukaan uudella numerolla. Muokkaa sitä muita koskematta.

## Muuta ryhmä komponentiksi

Valitse ryhmä ja napsauta kohdassa {{ui:Entity info}} painiketta {{ui:Make component}}. Siitä tulee uusi nimi, esimerkiksi Component#2, vaikka olisit nimennyt ryhmän; kirjoita nimi uudelleen kenttään {{ui:Name}}.

## Hajota

Valitse ryhmä tai komponentti ja napsauta {{ui:Explode}}-painiketta (työkalurivillä tai kohdassa {{ui:Entity info}}). Sen sisältö muuttuu irralliseksi geometriaksi samaan paikkaan, ja se tarttuu siihen, mihin koskettaa. Sen sisällä olevat ryhmät pysyvät ryhminä.

## Kiintokappale ja tilavuus

Kun valitset ryhmän tai komponentin, {{ui:Entity info}} näyttää **Kiintokappale: Kyllä**, jos sen pinnat sulkeutuvat ilman aukkoja (jokaisen reunan jakavat täsmälleen kaksi pintaa) eikä sen sisällä ole sisäkkäisiä ryhmiä. Silloin se näyttää myös **tilavuuden**. Laatikko, seinä jonka läpi on leikattu ikkuna, ja vedetty sylinteri ovat kiintokappaleita; laatikko, jonka yläpinta on poistettu, ei ole.

## Kun viimeinen kopio poistuu

Komponentin viimeisen kopion poistaminen poistaa sen myös paneelista {{ui:Components}}. {{key:Mod+Z}} tuo sen takaisin.

## Hyvä tietää

- Ryhmän kopiot, jotka on tehty siirtämällä, jakavat sisältönsä tässä versiossa, kuten komponenttikopiot: yhden muokkaaminen muuttaa muita. Tehdäksesi yhdestä itsenäisen, napsauta {{ui:Make component}} ja sitten {{ui:Make unique}}. Katso [Vianetsintä](topic:troubleshooting#editing-one-group-changed-another).
- Komponentit eivät leikkaa aukkoja seiniin eivätkä tartu pintoihin, eikä valmiiden komponenttien kirjastoa ole. Teet omasi tai tuot ne.
- Tuodut tiedostot tulevat ryhmänä. Collada-tiedostot säilyttävät omat ryhmänsä ja komponenttinsa sen sisällä.
