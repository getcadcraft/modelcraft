---
title: Käyräkohteet
summary: Piirrä Bézier-, NURBS- ja suoraviivaisia käyriä, anna niille paksuus, leveys tai kapenema, täytä tasaiset, aseta teksti käyräksi ja muuta ne verkoiksi.
keywords: käyrä, käyrät, bezier, nurbs, spline, splinet, polku, putki, kaapeli, köysi, viiste, pursota, kapeneminen, kallistus, säde, täyttö, profiili, teksti, kirjaimet, logo, käyrä verkoksi
from: 602bf077
---

**Käyräkohde** on käyrä, joka muodostaa muodon: putki sen mukaan (viiste), nauha (pursotus), kapeneva torvi (kapeneminen) tai — kun se on tasainen ja suljettu — täytetty levy tai kirjaimet. Muoto seuraa käyrää: kun siirrät pistettä, putki liikkuu sen mukana. Kun muoto on kohdallaan, muuta se verkoksi.

## Lisää käyrä

Valitse {{ui:Käyrä}} työtilaluettelosta ja paina {{ui:Lisää}}:

| Laji | Mitä se on |
| --- | --- |
| Bézier-käyrä, Bézier-ympyrä | Kulkee pisteidensä läpi; jokaisella pisteellä on kaksi kahvaa, jotka asettavat käyrän suunnan |
| NURBS-käyrä, NURBS-ympyrä, Polku | Sujuva, piirtyy kohti pisteitään (alkaa ja päättyy päätepisteisiinsä); jokaisella pisteellä on paino |
| Teksti | Teksti tasaisina, täytettyinä kirjainmuotoina |

Uusi käyrä saa ohuen putken, jotta se näkyy ja on valittavissa; aseta sen viistesyvyys 0:ksi paljasta käyrää varten.

Voit myös aloittaa jostakin piirretystä: valitse kaari, ympyrä, monikulmio tai piirretty käyrä Mallityötilassa ja paina {{ui:Tee käyräkohde}} kohdassa {{ui:Kohteen tiedot}}. Piirretyt viivat säilyvät.

## Muokkaa pisteitä

Kaksoisnapsauta käyräkohdetta (tai valitse se ja valitse {{ui:Käyrä}}) muokataksesi sitä.

- Napsauta pistettä tai kahvaa (Shift lisää tai poistaa); vedä sitä siirtääksesi. Vedä tyhjään tilaan valitaksesi laatikolla.
- {{ui:Jatka}} ({{key:E}}, tai {{key:Ctrl}}+napsautus) lisää pisteen valitun pään jälkeen, osoittimen kohdalle.
- {{ui:Jaa}} ({{key:W}}) asettaa pisteen jokaiseen valittujen naapurien väliin; Bézier säilyttää muotonsa.
- {{ui:Siirrä}}, {{ui:Kierrä}}, {{ui:Skaalaa}} siirtävät valittuja pisteitä osoittimella (mallintajan näppäimet {{key:G}} {{key:R}} {{key:S}}, työnnä/vedä-näppäimet {{key:M}} {{key:Q}} {{key:S}}); napsauta säilyttääksesi, {{key:Esc}} peruuttaaksesi.
- {{ui:Sulje}} ({{key:C}}) sulkee avoimen splinen tai avaa suljetun; {{ui:Käännä suunta}} ({{key:Shift+R}}) kulkee sen toiseen suuntaan.
- Bézier-kahvat: {{ui:Tasoita}} ({{key:V}}) asettaa ne sujuvaa käyrää varten, {{ui:Kulma}} ({{key:Shift+V}}) osoittaa ne naapureihin, {{ui:Vapaa}} ({{key:Alt+V}}) jättää ne sinne, mihin asetit. Kahvan vetäminen tekee siitä vapaan.
- {{ui:Bézier}}, {{ui:NURBS}} ja {{ui:Poly}} muuttavat valittujen splinejen tyypin ja säilyttävät pisteet.

Jokainen muutos on yksi kumoamisaskel.

## Muoto

Asetukset ovat paneelissa (ja Mallintyötilan {{ui:Kohteen tiedot}} -kohdassa):

- **Muoto:** 3D-käyrät kulkevat mihin suuntaan tahansa; tasainen käyrä pysyy omassa tasossaan ja sen voi täyttää.
- **Täytä suljetut splinet** (tasainen): ääriviivoista tulee levy; toisen sisällä oleva ääriviiva on reikä, joten kirjaimet säilyttävät reikänsä.
- **Pursotus:** puolet nauhan leveydestä (avoimet tai 3D-käyrät), tai puolet levyn paksuudesta (täytetty).
- **Viistesyvyys** ja **pyöreys:** pyöreä putki käyrän mukaan (pursotuksella: pyöristetty nauha); täytetyssä muodossa pyöristetty reuna.
- **Sulje päät:** kannet avoimessa putkessa.
- **Kapeneminen pitkin käyrää:** skaalaa tasaisesti kunkin splinen pituudelta, esimerkiksi `1, 0.2` torvelle, `0, 1, 0` orrelle.
- **Sujuvuus** ja NURBS-käyrille **aste**: kuinka hienosti se piirretään ja kuinka sujuvaksi (2 suora … 6 sujuvin).
- Kun pisteitä on valittu: **säde** (putken paksuus siinä, kerrottuna viisteellä), **kallistus** (kääntää nauhaa käyrän ympäri) ja NURBS-käyrille **paino**.

Muokkaimet toimivat käyräkohteen päällä kuten verkossa: {{ui:Matriisi}} sen mukaan, Peilaus, Jakopinta. Katso [Verkon muokkaimet](topic:modifiers).

## Muuta verkoksi

{{ui:Verkoksi}} (Käyrätyötilassa tai kohteen tiedoissa, {{ui:Käyrä verkoksi}}) tekee käyräkohteesta sen verkon, jonka se näyttää nyt; sen muokkaimet pysyvät päällä. Muokkaa sitten Verkkotyötilassa. Kumoa palauttaa sen takaisin.

Katso myös [Verkot](topic:meshes) ja [Muokkaa verkkoa](topic:mesh-edit).
