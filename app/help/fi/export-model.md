---
title: Vie malli muihin ohjelmiin
summary: Valitse oikea vienti renderöintiin, verkkoon, 3D-tulostukseen, BIM:iin ja BimCraftiin, ja tarkista, mitä kukin säilyttää.
keywords: tulosta, 3mf, pdf, paperi, kuva, png, kuvake, kuvakaappaus, renderöi, tallenna näkymä, vie, jaa, renderöinti, gltf, glb, collada, dae, obj, stl, 3D-tulostus, ifc, bim, bimcraft, lähetä, muut ohjelmat
from: 9e13e80d
---

Vienti tekee kopion mallista toisessa tiedostomuodossa. Säilytä myös `.modelcraft`-tiedostosi: se on ainoa tiedosto, joka säilyttää kaiken, ja ainoa, jonka ModelCraft avaa suoraan.

## Vie

1. Tallenna ensin ({{key:Mod+S}}), jotta työtiedostosi on turvassa.
2. Napsauta {{ui:Vie}}-painiketta ryhmässä {{ui:Tiedosto}}.
3. Valitse muoto. Selain lataa tiedoston, ja sen nimi on sama kuin mallin.

Koko malli viedään. Jos haluat viedä yhden osan, tallenna, poista loput, vie ja kumoa tai avaa tiedosto uudelleen.

## Mikä muoto

| Haluat | Valitse | Huomautukset |
|---|---|---|
| Avata se toisessa 3D-mallinnusohjelmassa | {{ui:Collada (.dae)}} | Säilyttää ryhmät, sisäkkäiset ryhmät, komponentit (jaettuina, ei kopioituina), nimet ja värit. Z ylös, metrit. |
| Renderöidä se tai käyttää visualisointiohjelmassa | {{ui:OBJ (.obj)}} tai {{ui:glTF binary (.glb)}} | OBJ on laajimmin luettu; se kirjoittaa jokaisen ryhmän sijoittelun erillisenä kohteena, mutta siinä ei ole värejä eikä jaettuja komponentteja. glTF säilyttää komponentit ja värit. |
| Julkaista verkkoon, pelimoottoriin tai AR:ään | {{ui:glTF binary (.glb)}} | Yksi tiedosto, jossa on kaikki. |
| Tulostaa 3D-tulostimella | {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}} | Tarkistaa, että malli on suljettu ja pinnat osoittavat oikeaan suuntaan, ja kirjoittaa sen sitten STL- tai 3MF-muodossa millimetreinä. Katso [Valmistele malli 3D-tulostukseen](topic:print-3d). {{ui:STL tulostusta varten (.stl, millimetreinä)}} kirjoittaa koko mallin ilman tarkistusta. |
| Avata se BimCraftissa tai muussa BIM-ohjelmassa | {{ui:IFC BimCraftille (.ifc)}} | Jokainen ylimmän tason ryhmä tai komponentti muuttuu yhdeksi rakennusosaksi. |

Tilarivi vahvistaa jokaisen viennin, esimerkiksi "Viety House.stl (millimetreinä)." tai "Viety House.dae (Collada 1.4.1, Z ylös, metrit; komponentit pysyvät jaettuina)."

## Ennen vientiä

- **Ryhmittele kohteet.** Collada, glTF ja IFC säilyttävät ryhmät ja komponentit erillisinä kohteina. Irrallinen geometria menee ulos yhtenä möhkäleenä; IFC:ssä se muuttuu yhdeksi rakennusosaksi nimeltä "Loose geometry".
- **Nimeä ne.** Ryhmien ja komponenttien nimet menevät Collada- ja IFC-tiedostoihin, joten seinä nimeltä "North wall" saapuu nimellä "North wall".
- **Tarkista pinnan suunta.** Ulkopuolelta sinertävänharmaana näkyvät pinnat osoittavat sisäänpäin viennissä. Korjaa ne kohdalla {{ui:Käännä pinta}} (katso [Poista ja siivoa](topic:erase#a-face-facing-the-wrong-way)).
- **Tulostusta varten** tee osista suljettuja kiintokappaleita: valitse jokainen ryhmä ja tarkista, että {{ui:Kohteen tiedot}} sanoo "Kiintokappale: Kyllä". Skaalaa sitten malli tulostuskokoon tai skaalaa se tulostinohjelmistossa.

## Lähetä malli BimCraftiin

1. Tee jokaisesta rakennusosasta ryhmä tai komponentti ja nimeä se.
2. Valitse {{ui:Vie}} ja sitten {{ui:IFC BimCraftille (.ifc)}}.
3. Avaa ladattu `.ifc`-tiedosto BimCraftissa.

Alustavaa massoittelua varten käytä sen sijaan {{ui:Vie}} › {{ui:Massoittelu BimCraftiin…}}: jokainen ryhmä menee massoitteluvaihtoehtona, jossa on kerrokset, kerrosalat ja tilavuus. Katso [Lähetä massoittelu BimCraftiin](topic:massing-to-bimcraft).

Tavallisessa IFC-viennissä kahden sovelluksen välillä ei ole suoraa yhteyttä. IFC:ssä on yksi kerros, ja jokainen kohde on yleinen rakennusosan välityskohde ilman tyyppiä tai ominaisuuksia: se sisältää vain muodon ja nimen. Suljetut ryhmät muuttuvat kiinteiksi muodoiksi; avoimet muuttuvat pinnoiksi.

## Viivat ilman pintoja

Särmät, jotka eivät kuulu mihinkään pintaan (apuviivan kaltaiset viivat, tuotu asemapiirros), menevät OBJ- ja Collada-tiedostoihin viivoina. glTF:ssä ja STL:ssä niille ei ole paikkaa, joten ne jätetään pois. Apuviivoja ja näkymiä ei viedä mihinkään muotoon.

## Tallenna näkymä kuvana

{{ui:Vie}} › {{ui:Kuva näkymästä (.png)}} tallentaa täsmälleen sen, mitä 3D-näkymä näyttää, ruudulla olevassa koossa. {{ui:Kuva kaksinkertaisessa koossa (.png)}} tallentaa sen kaksi kertaa leveämpänä ja kaksi kertaa korkeampana (tulostukseen tai terävään diaan), ja mitoitukset ja merkit piirretään uudelleen tässä koossa eikä venytetä.

Päivänvaloa muistuttavaa kuvaa (taivas, aurinko, pehmeät varjot, lasi) varten käytä sen sijaan {{ui:Vie}} › {{ui:Renderöi kuva…}}: katso [Renderöi kuva](topic:render).

Puhdasta kuvaa varten ota ensin käyttöön [esitysnäkymä](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): akselit, apuviivat, leikkausviivat ja valinta jätetään pois. Aseta kamera, tyyli ja varjot haluamallasi tavalla tai siirry [näkymään](topic:scenes); tallentaaksesi näkymistäsi liikkuvan elokuvan käytä kohdan {{ui:Näkymät}}-paneelin {{ui:Vie animaatio}}-toimintoa.

## Tulosta näkymä tai tallenna se PDF:nä

- {{ui:Vie}} › {{ui:PDF näkymästä (.pdf)}} tallentaa yhden sivun PDF:n: näkymä kaksinkertaisena ruudun kokoon nähden, mitoituksineen, A4-sivulla (Letter, kun malli on jaloissa ja tuumissa), vaakasuunnassa, ja sen alla on viiva, jossa on tiedostonimi, päivämäärä ja yksikkö.
- {{ui:Vie}} › {{ui:Tulosta näkymä…}} asettaa saman sivun selaimesi tulostusikkunaan. Valitse tulostin tai "Tallenna PDF-tiedostona".

Sivu näyttää näkymän sellaisena kuin se on: perspektiivinäkymässä ei ole mittakaavaa. Mittakaavassa olevaa piirustusta varten kytke {{ui:Perspektiivi}} pois päältä ja katso {{ui:Ylä}}- tai {{ui:Etu}}-näkymästä, ja lisää [mitoitukset](topic:dimensions) tärkeimmille mitoille. [Esitysnäkymä](topic:styles-shadows#presentation-view) jättää akselit, apuviivat ja valinnan pois; mitoitukset jäävät näkyviin.
