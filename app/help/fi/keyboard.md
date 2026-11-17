---
title: Näppäimet ja hiiritoiminnot
summary: Jokainen ModelCraftin pikanäppäin, hiiritoiminto, kosketuslevyn ele ja kosketusnäytön ele, ryhmiteltynä sen mukaan, mitä ne tekevät.
keywords: näppäimistö, pikanäppäimet, näppäimet, hiiri, kosketuslevy, kosketus, eleet, muistilista, ctrl, komento, nuolinäppäimet
from: e2348957
---

Nämä ovat työnnä/vedä-näppäimet, joista ModelCraft aloittaa. Muut näppäimet: katso [Modeler-näppäimet](topic:keyboard#modeler-keys) alla ja [ModelCraftin asetukset](topic:settings).

Pikanäppäimet toimivat, kun 3D-näkymä tai työkalurivin painike on kohdistettuna. Jos juuri kirjoitit paneelin kenttään tai muutit listaa kohdassa {{ui:Style}}, napsauta ensin 3D-näkymää, muuten näppäimet menevät siihen kenttään. Katso [Näppäimet, hiiri ja kosketuslevy](common:keys), miten näppäimet kirjoitetaan kullakin tietokoneella.

## Työkalut

| Näppäin | Työkalu |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | {{ui:Tape}} mittaus |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Työkalukirjaimet toimivat vain ilman muokkausnäppäimiä: {{key:Shift}} kirjaimen kanssa ei tee mitään, paitsi kahdessa alla mainitussa.

## Malli ja tiedosto

| Näppäin | Tekee |
|---|---|
| {{key:G}} | Tee komponentti valinnasta |
| {{key:Shift+G}} | Tee ryhmä valinnasta |
| {{key:Shift+Z}} | Zoomaa laajuuteen (koko malli) |
| {{key:Mod+Z}} | Kumoa |
| {{key:Mod+Y}} tai {{key:Mod+Shift+Z}} | Tee uudelleen |
| {{key:Mod+S}} | Tallenna (lataa `.modelcraft`-tiedoston) |
| {{key:Mod+O}} | Avaa malli |
| {{key:Mod+A}} | Valitse kaikki (avoimessa ryhmässä, jos sellainen on auki) |
| {{key:Mod+C}} | Kopioi valinta |
| {{key:Mod+X}} | Leikkaa valinta |
| {{key:Mod+V}} | Liitä: kopio seuraa osoitinta, napsauta kohtaan, johon se menee |
| {{key:Mod+Shift+V}} | Liitä samaan paikkaan (mistä se kopioitiin) |
| {{key:Mod+D}} | Monista: kopio liikkuu osoittimen mukana, napsauta laskeaksesi sen |
| {{key:Delete}} tai {{key:Backspace}} | Poista valinta |
| {{key:PageDown}} / {{key:PageUp}} | Seuraava / edellinen kohtaus |
| {{key:F1}} | Avaa tai sulje tämä ohje (myös {{ui:Help}} sovelluspalkissa; {{key:Esc}} ohjeen sisällä sulkee sen) |
| {{key:Ctrl+Shift+F}} | Näyttötila: koko näyttö, sitten palkit piilossa, sitten normaali (Macissa myös Control) |

## Esc

{{key:Esc}} siirtää yhden tason taaksepäin joka kerta, kun painat sitä:

1. Peruuttaa, mitä työkalu on tekemässä (piirrettävä viiva, työnnä/vedä, siirto). Kaikki palautuu.
2. Vaihtaa työkaluun {{ui:Select}}.
3. Tyhjentää valinnan.
4. Sulkee muokkaamasi ryhmän.

Se myös pysäyttää kohtausten toiston. Arvoruudussa {{key:Esc}} tyhjentää kirjoittamasi ja palaa näkymään.

## Työkalun toimiessa

| Näppäin | Tekee |
|---|---|
| Numero tai jokin merkeistä `. , - ' " [ < * /` | Aloittaa kirjoittamisen arvoruutuun |
| {{key:Enter}} | Ottaa käyttöön arvoruutuun kirjoitetun |
| {{key:Right}} | Lukitsee punaiseen akseliin (paina uudelleen avataksesi) |
| {{key:Left}} | Lukitsee vihreään akseliin |
| {{key:Up}} | Lukitsee siniseen akseliin |
| {{key:Down}} | Lukitsee yhdensuuntaisesti viimeksi osoittamasi reunan kanssa ennen ensimmäistä napsautusta |
| Pidä {{key:Shift}} painettuna | Pitää suunnan, johon olet tarttunut, niin kauan kuin pidät sitä painettuna |
| {{key:Ctrl}}, {{key:Mod}} tai {{key:Alt}} ({{ui:Move}}) | Vaihtaa siirron ja kopioinnin välillä |

Nuolinäppäinlukitukset toimivat työkaluissa {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} ja {{ui:Tape}} (kun mitataan pisteestä), ensimmäisen napsautuksen jälkeen. {{ui:Push/pull}} liikkuu aina pinnan suuntaan, eikä sillä ole lukituksia. Työkalussa {{ui:Rotate}} nuolinäppäimet näyttävät ensimmäisen napsautuksen jälkeen viestin ”Lukittu”, mutta eivät muuta kääntymistä.

## Muulloin nuolinäppäimet

Kun mikään työkalu ei ole kesken jonkin asian, nuolinäppäimet siirtävät kameraa:

| Näppäin | Tekee |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Kiertää |
| {{key:Shift}} ja nuoli | Panoroi |

## Hiiri

| Toiminto | Tekee |
|---|---|
| Napsautus | Käyttää nykyistä työkalua |
| Paina, vedä, vapauta | Sama kuin kaksi napsautusta (piirtotyökaluille); laatikkovalinta ({{ui:Select}}); pyyhkii matkan varrelta ({{ui:Eraser}}) |
| Kaksoisnapsautus | {{ui:Select}}: pinta reunoineen, reuna pintoineen, avaa ryhmän; tyhjä tila sulkee ryhmän. {{ui:Push/pull}}: toistaa viimeisen etäisyyden |
| Kolmoisnapsautus | {{ui:Select}}: kaikki yhteydessä oleva |
| {{key:Shift}} + napsautus | {{ui:Select}}: lisää valintaan tai poistaa siitä |
| {{key:Mod}} + napsautus | {{ui:Select}}: lisää valintaan |
| {{key:Shift}} + {{key:Mod}} + napsautus | {{ui:Select}}: poistaa valinnasta |
| Keskipainikkeen vetäminen | Kiertää millä tahansa työkalulla |
| {{key:Shift}} + keskipainikkeen vetäminen | Panoroi millä tahansa työkalulla |
| Oikean painikkeen vetäminen | Panoroi millä tahansa työkalulla |
| Rulla | Zoomaa kohti osoitinta |

Pikavalikkoa ei ole.

## Kosketuslevy

Mitä kahden sormen pyyhkäisy tekee, riippuu kohdasta {{ui:Settings}} › {{ui:ModelCraft}} › Vieritys:

| Ele | Kosketuslevy (tai päätelty) | Hiiren rulla |
|---|---|---|
| Kahden sormen pyyhkäisy | Kiertää | Zoomaa kohti osoitinta |
| {{key:Shift}} + kahden sormen pyyhkäisy | Panoroi | Zoomaa |
| Nipistys | Zoomaa kohti osoitinta | Zoomaa kohti osoitinta |
| Kahden sormen painallus ja vetäminen (toissijainen napsautus pidettynä) | Panoroi | Panoroi |

Katso [Kierrä, panoroi ja zoomaa](topic:orbit-pan-zoom#on-a-trackpad) ja [ModelCraftin asetukset](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler-näppäimet

Kun {{ui:Settings}} › {{ui:ModelCraft}} › Ohjaus on asetettu Modeler-tyyliin:

| Näppäin | Tekee |
|---|---|
| {{key:W}} tai {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (pursotus) |
| {{key:T}} | {{ui:Tape}} mittaus |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Siirrä valinta heti osoittimesta |
| {{key:R}} | Kierrä valinta sen keskikohdan ympäri (sininen akseli) |
| {{key:S}} | Skaalaa valinta sen keskikohdan ympäri |
| {{key:X}} / {{key:Y}} / {{key:Z}} siirron tai kierron aikana | Lukitsee punaisen / vihreän / sinisen akselin (uudelleen avaa lukituksen) |
| Napsautus tai {{key:Enter}} | Laske paikalleen |
| {{key:Esc}} tai oikea napsautus | Palauta paikalleen |
| {{key:Shift+D}} | Monista ja siirrä kopiota |
| {{key:X}} tai {{key:Delete}} | Poista valinta |
| {{key:A}} / {{key:Alt+A}} | Valitse kaikki / ei mitään |
| {{key:Tab}} | Avaa valittu ryhmä tai komponentti; uudelleen sulkee sen |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Tee ryhmä / tee komponentti |
| Numeronäppäin {{key:1}} / {{key:3}} / {{key:7}} | Edestä / oikealta / päältä ({{key:Mod}} takaa / vasemmalta / alhaalta) |
| Numeronäppäin {{key:5}} | Perspektiivi päälle tai pois |
| Numeronäppäin {{key:.}} | Zoomaa valintaan |
| {{key:Home}} tai {{key:Shift+C}} | Zoomaa laajuuteen |
| {{key:Shift+Tab}} | Tarttuminen päälle tai pois |
| Keskipainikkeen vetäminen / {{key:Shift}}-näppäimen kanssa / {{key:Mod}}-näppäimen kanssa | Kierrä / panoroi / zoomaa |
| {{key:Alt}} + vetäminen / {{key:Alt+Shift}} + vetäminen | Kierrä / panoroi (keskipainiketta ei tarvita) |

Kopiointi, liittäminen, kumoaminen, tallentaminen ja avaaminen säilyttävät yllä luetellut näppäimet. Kirjoitetut arvot, arvoruutu ja {{ui:Push/pull}} toimivat samoin molemmissa tyyleissä.

## Kosketusnäyttö

| Ele | Tekee |
|---|---|
| Napautus | Napsautus nykyisellä työkalulla |
| Kaksoisnapautus | Kaksoisnapsautus |
| Painaminen, vetäminen, nosto | Sama kuin hiirellä painaminen, vetäminen ja vapauttaminen |
| Kaksi sormea: nipistys | Zoomaa |
| Kaksi sormea: liikkuvat yhdessä | Panoroi ({{ui:Settings}} › {{ui:ModelCraft}} › Kosketusnäyttö voi tehdä siitä kierron) |
| Kolme sormea: liikkuvat yhdessä | Kierrä (panoroi, kun kaksi sormea kiertää) |
| Pidä yksi sormi paikallaan | Lopettaa työkalun kuten {{key:Enter}}; kun mitään ei tapahdu, vedä kiertääksesi |
| Toinen sormi yhden sormen toiminnon aikana | Peruuttaa tuon toiminnon |
| {{ui:Orbit}}-työkalu, vedä sitten yhdellä sormella | Kierrä |

Arvon kirjoittaminen kosketusnäytöllä: napauta alareunan arvoruutua, kirjoita ja paina näppäimistön {{key:Enter}}- (tai Go-) näppäintä.

## Siirtotyökalu

Siirto on {{ui:Move}}-työkalussa, näppäimellä {{key:M}}: valitse, mitä siirretään, napsauta lähtöpistettä ja sitten toista pistettä tai kirjoita etäisyys. Katso [Siirto, kopiointi ja matriisit](topic:move-copy).
