---
title: Päättely ja tartunta
summary: Mitä värilliset merkit tarkoittavat, mikä tartunta voittaa, ja miten suunta lukitaan nuolinäppäimillä tai Shift-näppäimellä.
keywords: päättely, tartunta, päätepiste, keskikohta, pinnan keskipiste, reuna, pinta, akseli, punainen akseli, vihreä akseli, sininen akseli, yhdensuuntainen, kohtisuora, lukitus, shift, kohteen tartunta
from: e78984e9
---

Kun piirto- tai muokkaustyökalu toimii, ModelCraft katsoo, mitä osoittimen alla on, ja tarttuu lähimpään hyödylliseen kohteeseen. Merkki näyttää, mitä se löysi, ja kärki vasemmassa alakulmassa nimeää sen.

## Merkit ja kärjet

| Kärki | Merkki | Tarttuu kohteeseen |
|---|---|---|
| Päätepiste | Vihreä ympyrä | Reunan pää |
| Keskikohta | Syaani ympyrä | Reunan keskikohta |
| Pinnan keskipiste | Sininen ympyrä | Osoittimen alla olevan pinnan keskikohta |
| Apupiste | Harmaa | Mittanauhan jättämä apupiste |
| Origo | Okra | Kohta, jossa punainen, vihreä ja sininen akseli kohtaavat |
| Punaisella akselilla / Vihreällä akselilla / Sinisellä akselilla | Viiva kyseisellä värillä | Viiva aloituspisteestäsi kyseiseen suuntaan |
| Reunan suuntainen / Reunaa vastaan kohtisuora | Magenta viiva | Viiva aloituspisteestä yhdensuuntaisena tai kohtisuorana muistettuun reunaan nähden (katso alla) |
| Lukittu | Magenta viiva | Suunta, jonka lukitsit nuolinäppäimellä tai {{key:Shift}}-näppäimellä |
| Reunalla | Punainen neliö | Mihin tahansa reunan kohtaan |
| Apuviivalla | Harmaa | Mihin tahansa apuviivan kohtaan |
| Pinnalla | Sininen timantti | Mihin tahansa pinnan kohtaan |
| Tasolla | ei merkkiä | Aloitustaso, kun osoitin on tyhjän tilan päällä |
| Maassa | ei merkkiä | Maahan (punainen-vihreä taso), kun muuta ei ole |

Kun aloituspisteestäsi lähtevä akselisuora risteää reunan tai apuviivan kanssa, ModelCraft tarttuu risteykseen ja kärki nimeää molemmat, esimerkiksi ”Punaisella akselilla, reunalla”.

## Mikä tartunta voittaa

1. **Pisteet** noin 12 pikselin säteellä: ensin päätepisteet, sitten apupisteet, keskikohdat, osoittimen alla olevan pinnan keskipiste ja origo.
2. **Suunnat** aloituspisteestä: punainen, vihreä ja sininen akseli sekä muistettuun reunaan nähden yhdensuuntainen tai kohtisuora.
3. **Reuna** tai **apuviiva**.
4. **Pinta.**
5. **Piirustustaso** tai maa.

Pinnan takana piilossa olevat kohteet eivät koskaan tartu. Kierrä, jotta näet haluamasi pisteen.

## Piirtäminen pinnalle pisteestä

Kun {{ui:Rectangle}}, {{ui:Circle}} tai {{ui:Polygon}} aloitetaan kulmasta, keskikohdasta, reunasta tai pinnan keskipisteestä, se piirtyy **osoittimen alla olevan pinnan tasoon** ja leikkaa sen pinnan. Reuna kuuluu kahteen pintaan, joten reunan puoli, jolla osoitin on, ratkaisee: piirtääksesi pitkän laatikon päätyyn, aloita yhden sen reunan keskikohdasta osoittimen ollessa juuri päätypinnan sisäpuolella.

## Yhdensuuntainen ja kohtisuora

ModelCraft muistaa **viimeisen reunan, jonka päältä osoitin kulki ennen ensimmäistä napsautusta**. Kulmasta tai reunasta aloittaminen lasketaan kyseisen reunan ylittämiseksi. Kun työkalu toimii, muut reunat, joiden päältä viet osoitinta, eivät korvaa sitä.

Piirtääksesi viivan olemassa olevan reunan suuntaisesti:

1. Paina {{key:L}} ja vie osoitin reunan päälle, jota haluat vastata.
2. Siirry aloituspisteeseen, ilman että ylität muita reunoja matkalla, jos voit, ja napsauta.
3. Siirry reunan suuntaisesti. Viiva muuttuu magentaksi, ja kärki sanoo ”Reunan suuntainen”. Kohtisuora toimii samalla tavalla piirtotason sisällä.

Jos väärä reuna muistettiin, paina {{key:Esc}}, vie osoitin oikean reunan päälle ja aloita uudelleen.

## Lukitse suunta

Työkalun ensimmäisen napsautuksen jälkeen voit pitää seuraavan pisteen yhdellä suoralla:

| Näppäin | Lukitsee |
|---|---|
| {{key:Right}} | Punaiseen akseliin |
| {{key:Left}} | Vihreään akseliin |
| {{key:Up}} | Siniseen akseliin (suoraan ylös) |
| {{key:Down}} | Viimeisimmän muistetun reunan suuntaan |

Paina samaa nuolta uudelleen avataksesi lukituksen. Tilarivi kertoo ”Lukittu punaiseen akseliin. Paina samaa nuolta avataksesi lukituksen.”

Lukittuna piste liukuu viivalle kohti sitä, mihin osoitin on, ja asettuu yhä kohdakkain osoitettujen pisteiden kanssa: vie osoitin toisen laatikon kulman päälle piirtääksesi viivan punaista suuntaa pitkin juuri niin pitkälle kuin tuo kulma on.

**{{key:Shift}}** lukitsee suunnan, johon olet juuri nyt tarttunut (akseli tai yhdensuuntainen), niin kauan kuin pidät sitä painettuna. Päästä irti avataksesi lukituksen.

Lukitukset toimivat työkaluissa {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} ja {{ui:Tape}}. Ennen ensimmäistä napsautusta nuolinäppäimet kiertävät sen sijaan näkymää.

## Ryhmän sisällä

Muokatessasi ryhmän tai komponentin sisällä akselit ovat ryhmän omat akselit (ne liikkuvat sen mukana ja kääntyvät sen mukana, jos sitä on kierretty). Tartunta löytää yhä pisteitä ja reunoja ryhmän ulkopuolelta, joten voit kohdistaa asiat muuhun malliin.
