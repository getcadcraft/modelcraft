---
title: Veistä verkko
summary: Muotoile verkko kuin savea siveltimillä — piirrä, savi, tasoita, tartu, pullista, laskos, nipistä, tasaa — suojaa osia peitteellä, peilaa X-akselin yli ja lisää yksityiskohtia siellä, missä veistät.
keywords: veistäminen, veistää, sivellin, siveltimet, savi, piirrä, tasoita, tartu, pullista, laskos, nipistä, tasaa, peite, symmetria, peilaus, yksityiskohta, dynaaminen topologia, kynä, paine, piirtotabletti, kosketuskynä
from: 5477801a
---

Veistotyötila muotoilee verkkoa siveltimillä, kuten savea: vedä pinnan yli, ja se nousee, vajoaa, tasoittuu tai seuraa osoitinta pyöreällä siveltimellä. Vaikutus on vahvin keskellä ja häviää reunalle.

## Aloitus

Valitse verkko ja valitse {{ui:Veistä}} Työtila-luettelosta. Ryhmä tai komponentti muuttuu ensin verkoksi, kuten verkkotyötilassa. Siveltimet toimivat verkon kärkipisteissä, joten enemmän kärkipisteitä sisältävä verkko antaa hienompia muotoja. Jaa se ensin (verkkotyötilan {{ui:Jaa}}, tai Jakopinta-muokkain, jonka {{ui:Käytä}}), tai kytke {{ui:Yksityiskohta}} päälle.

## Siveltimet

| Sivellin | Näppäin | Mitä se tekee |
| --- | --- | --- |
| {{ui:Piirrä}} | {{key:D}} | Nostaa siveltimen alla olevaa pintaa |
| {{ui:Savi}} | {{key:C}} | Rakentaa tasaisia kerroksia, täyttäen ensin painaumat |
| {{ui:Tasoita}} | {{key:S}} | Tasoittaa kyhmyt; pidä {{key:Shift}} painettuna tasoittaaksesi millä tahansa siveltimellä |
| {{ui:Tartu}} | {{key:G}} | Vetää pintaa mukanaan osoittimen kanssa |
| {{ui:Pullista}} | {{key:I}} | Turvottaa pinnan ulos sen omaan suuntaan |
| {{ui:Laskos}} | {{key:Shift+C}} | Leikkaa terävän uran |
| {{ui:Nipistä}} | {{key:P}} | Vetää pintaa kohti siveltimen keskustaa |
| {{ui:Tasaa}} | {{key:T}} | Painaa pintaa kohti sen keskimääräistä tasoa |
| {{ui:Peite}} | {{key:M}} | Maalaa peitteen, joka suojaa pintaa muilta siveltimiltä |

Pidä {{key:Ctrl}} painettuna vetäessäsi, jos haluat toimia toisin päin (laskea nousun sijaan, tehdä harjanteen uran sijaan tai poistaa peitteen). Vaihtoehtoisesti kytke {{ui:Poista}} päälle.

## Koko ja voimakkuus

Siveltimen koko on pikseleinä näytöllä, joten se tuntuu samalta, kuinka kauas zoomaat. {{key:[}} ja {{key:]}} pienentävät ja suurentavat sitä, {{key:Shift+[}} ja {{key:Shift+]}} muuttavat sen voimakkuutta. Paneeli näyttää molemmat.

Kynällä tablettia käytettäessä kovempi painallus tekee siveltimestä suuremman ja voimakkaamman. Paneeli kytkee kumpikin pois.

## Peilaus, peite ja yksityiskohta

- {{ui:Peilaa X}} ({{key:X}}) veistää molemmat puolet punaisen akselin poikki kerralla, kasvoille ja hahmoille.
- Peite näkyy tummempana veistäessäsi. {{ui:Tyhjennä peite}} ({{key:Alt+M}}) poistaa sen. {{ui:Käännä peite}} ({{key:Ctrl+I}}) peittää vapaana olleet ja vapauttaa peitetyt. Peite säilyy verkon kanssa.
- {{ui:Yksityiskohta}} lisää kolmioita veistäessäsi: paneelissa asetettua kokoa (näytön pikseleinä) pidemmät särmät jaetaan siveltimen alla. Se tarvitsee kolmioista koostuvan verkon ja pyytää tekemään sellaisen ensin.

Jokainen veto on yksi kumoamisvaihe.

:::note
Yksityiskohta vain lisää kolmioita, se ei poista pieniksi tulleita. Remesh (verkkotyötila) tasoittaa koko verkon uudelleen.
:::

Katso myös [Muokkaa verkkoa](topic:mesh-edit), [Verkot](topic:meshes) ja [Muokkaimet verkossa](topic:modifiers).
