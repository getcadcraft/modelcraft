---
title: Maalaa väreillä ja materiaaleilla
summary: Anna pinnoille, ryhmille ja komponenteille yksivärinen väri tai materiaali, kuten tiili, julkisivuverhous, kattomateriaali tai puu, ja säilytä ne viedessä.
keywords: maalaa, väri, materiaali, materiaalit, tekstuuri, tekstuurit, tiili, julkisivuverhous, kattomateriaali, katto, puu, kivi, laatoitus, betoni, rappaus, ruoho, sora, lasi, metalli, maalipurkki, täyttö, näyte, pipetti, oletus, glb, obj, mtl, collada
from: b1500523
---

Värit auttavat erottamaan mallin osia toisistaan, ja **materiaalit** (tiili, julkisivuverhous, kattomateriaali, puu, kivi, laatoitus, betoni, rappaus, ruoho, lasi, metalli) saavat mallin näyttämään siltä, mistä se on rakennettu. Molemmat maalataan samalla tavalla.

## Valitse väri

{{ui:Värit}}-osio oikealla näyttää rivin yksivärisiä värejä, {{ui:Oletus}}-näytteen (viivalla yliviivattu: ei väriä) ja {{ui:+}}-näytteen mille tahansa muulle värille. Napsauta sitä, jotta siitä tulee nykyinen väri. Maalaustyökalu aloittaa sillä.

## Maalaa

1. Paina {{key:B}} ({{ui:Maalaa}}) tai napsauta väriä, kun mitään ei ole valittuna. (Kun jokin on valittuna, väriä napsauttamalla maalataan valinta heti.)
2. Maalaa pinta napsauttamalla sitä.
3. Maalaa ryhmä tai komponentti napsauttamalla sitä, jolloin tämä kopio maalautuu: sen pinnat, joilla ei ole omaa väriä, saavat tämän värin. Sen sisällä maalaamasi pinnat säilyttävät värinsä.

Maalataksesi useita kohteita kerralla valitse ne ensin ja napsauta sitten väriä, tai napsauta mitä tahansa niistä {{ui:Maalaa}}-työkalulla. Se on yksi kumoamisvaihe.

| Pidä pohjassa | Ja napsauta pintaa | Mitä maalataan |
|---|---|---|
| — | | Tuo pinta |
| {{key:Ctrl}} | | Jokainen siihen yhdistetty pinta, jolla on sama väri |
| {{key:Shift}} | | Jokainen tämän värinen pinta ryhmässä, jota työstät |
| {{key:Alt}} | | Ei mitään: poimit sen värin |

Palauttaaksesi pinnan ilman väriä valitse {{ui:Oletus}} ja napsauta sitä.

## Maalaa materiaalilla

{{ui:Materiaalit}}-osio {{ui:Värit}}-osion alla luettelee materiaalikirjaston lajeittain: tiili ja tiilielementit, julkisivuverhous, kattomateriaalit, puu, kivi, laatoitus, betoni, rappaus, maa, lasi ja metalli. Vie hiiri näytteen päälle nähdäksesi sen nimen. Napsauta materiaalia ja maalaa sillä täsmälleen kuten värillä: {{key:B}}, napsauta pintoja, ryhmiä tai komponentteja; tai valitse ensin ja napsauta materiaalia.

- **Varjostetussa** tyylissä pinnat näyttävät materiaalin tekstuurin. Piilotettu viiva, rautalanka ja röntgen näyttävät sen värin.
- Tekstuurit kulkevat **vaakasuoraan jokaista pintaa pitkin** ja **ylös sitä pitkin**: tiilirivit pysyvät vaakasuorina jokaisella seinällä, kattomateriaalit valuvat katon kaltevuutta alas, lankut lattialla seuraavat punaista akselia. Ne ovat todellisessa koossaan (tiili on noin 215 mm pitkä), joten ne näyttävät oikeilta mistä tahansa etäisyydeltä.
- [Renderoidussa kuvassa](topic:render) materiaalit säilyttävät tekstuurinsa, karheutensa ja lasin ja metallin kiillon.
- {{key:Alt}}-napsautus {{ui:Maalaa}}-työkalulla poimii myös pinnan materiaalin.

Tekstuurit piirtää ModelCraft itse, joten ne toimivat offline-tilassa ja ovat vapaasti käytettävissä mihin tahansa (CC0).

## Komponentit ja värit

Värin, joka on maalattu komponentin **sisällä** olevalle pinnalle, näkyy jokaisessa kopiossa, koska kopiot jakavat yhden määritelmän. Värin, joka on maalattu **kopioon** komponentin ulkopuolelta (komponentin ollessa suljettuna), kuuluu vain tälle kopiolle, joten kahdella saman komponentin kopiolla voi olla eri värit. {{ui:Kohteen tiedot}} näyttää valitun pinnan, ryhmän tai komponentin värin.

## Värit tiedostoissa

- ModelCraft-tiedosto säilyttää kaikki värit ja materiaalit.
- Muut muodot saavat **materiaalin värin** (sen ulkonäön kaukaa) tekstuurin sijaan: glTF, Collada, OBJ, DWG ja DXF sekä 3D-tulostuksen tarkistus. glTF:ssä, Collada:ssa ja OBJ:ssa materiaali säilyttää nimensä, kuten `Material_brick-red`.
- **glTF (.glb)** ja **Collada (.dae)**: jokainen väri muuttuu materiaaliksi. Komponentti, joka näkyy eri väreillä, kirjoitetaan kerran jokaista väriä kohden. glTF kirjoittaa tuodut kuvat myös tekstuureina.
- **OBJ**: vienti lataa kaksi tiedostoa, `.obj`-tiedoston ja värit sisältävän `.mtl`-materiaalitiedoston. Pidä ne samassa kansiossa. Tuotujen tekstuurien kanssa `.obj`, `.mtl` ja kuvat tulevat yhtenä `.zip`-tiedostona.
- **DWG** säilyttää täsmälleen samat värit; **DXF** käyttää 255 vakio-CAD-värin lähintä.
- **STL** ja **PLY** kantavat värit: STL VisCAM- / SolidView-käytännön mukaan (ohjelmat, jotka eivät lue sitä, jättävät sen huomiotta), PLY värinä jokaisessa pisteessä. Katso [Tiedostomuodot tarkemmin](topic:formats).

:::tip
Mallintaaksesi näytön, maalaa kehys hiilenharmaaksi ja lasi siniseksi sen jälkeen, kun olet ensin tehnyt etupinnalle [siirtymän](topic:draw-faces).
:::
