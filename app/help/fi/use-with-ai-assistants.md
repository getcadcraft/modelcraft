---
title: Käytä ModelCraftia tekoälyavustajan kanssa
summary: Anna oman tekoälyavustajasi tai skriptisi tarkastella mallia ja rakentaa yksinkertaisia kiintokappaleita: käyttöoikeudet, yhdistäminen CadCraft Studion kautta ja toimintaloki.
keywords: tekoäly, avustaja, agentti, mcp, model context protocol, skripti, automaatio, mallintaminen, laatikko, sylinteri, renderöinti, renderöintijono, käyttöoikeudet, katkaise yhteys, toiminta
from: 629cd0b7
---

## Mitä opit

Miten annat tekoälyavustajan (tai itse kirjoittamasi skriptin) työskennellä ModelCraftin kanssa ja päättää, mihin se saa koskea.

ModelCraftilla **ei ole omaa tekoälyä**, eikä se lähetä mitään minnekään. Tuot avustajan itse: mikä tahansa ohjelma, joka puhuu Model Context Protocol (MCP) -protokollaa. ModelCraft antaa sille vain työkaluja, ja sinä valitset, mitkä.

## Ota käyttöön

1. Avaa {{ui:Asetukset}} (sovelluspalkin hammasratas tai {{key:Mod+,}}) ja siirry välilehdelle {{ui:ModelCraft}}.
2. Kohdassa {{ui:Avustajat}} rastita **Anna tekoälyavustajien ja skriptien käyttää ModelCraftia**. Se on pois päältä, kunnes teet niin.
3. Valitse, mitä se saa tehdä: **Lue** on rastitettu alussa; rastita **Muokkaa**, **Tallenna** tai **Vie** vain silloin, kun tarvitset niitä.

Työkaluja, joihin et ole antanut käyttöoikeutta, ei tarjota avustajalle, ja jos se pyytää sellaista silti, ModelCraft hylkää pyynnön ja kirjaa sen toimintalokiin. Kytkimen kääntäminen pois päältä katkaisee kaikki yhteydet heti; {{ui:Palauta ModelCraft-asetukset}} kytkee sen myös pois päältä.

## Yhdistä avustaja

Avustajat yhdistyvät tietokoneellasi olevan **CadCraft Studion** kautta: Studio käynnistää pienen palvelimen, johon vain tämä tietokone pääsee, ja sitä suojaa tunnus, jonka Studio luo joka kerta käynnistyessään. Valitse Studiossa {{ui:Yhdistä avustaja}} ja kopioi osoite ja tunnus avustajaasi (Studio näyttää tarkat liitettävät asetukset). Älä koskaan jaa tunnusta.

:::note
Selainvälilehti ei voi avata yhteyttä avustajalle: selainsovelluksissa kytkimellä ei ole vaikutusta, ennen kuin käytät CadCraft Studiota tietokoneellasi.
:::

## Sinä pidät hallinnan

- **Jokainen muutos on yksi kumoamisvaihe**, ja se on nimetty avustajan nimellä (esimerkiksi "Avustaja: box"). {{key:Mod+Z}} kumoaa avustajan viimeisimmän muutoksen kokonaisuudessaan.
- **Tiedät, milloin avustaja on yhdistetty.** Sovelluspalkin painike nimeää avustajan sen ollessa yhdistettynä; napsauta sitä nähdäksesi, mihin se saa koskea, tai **Katkaise yhteys**.
- **Toiminta.** {{ui:Asetukset}} › {{ui:ModelCraft}} › {{ui:Avustajat}} › {{ui:Toiminta}} listaa jokaisen kutsun: milloin, mikä työkalu ja onnistuiko se vai hylättiinkö. {{ui:Tallenna loki}} tallentaa kopion.

## Mitä avustaja voi pyytää

| Työkalu | Käyttöoikeus | Mitä se tekee |
|---|---|---|
| `app_info`, `model_describe` | Lue | Mallin yksikkö, koko sekä jokainen ryhmä ja komponentti sijaintineen, tieto siitä, onko se suljettu kiintokappale, ja sen tilavuus |
| `view_screenshot` | Lue | Kuva 3D-näkymästä sellaisena kuin se näkyy |
| `box_add`, `cylinder_add` | Muokkaa | Laatikko tai sylinteri uutena ryhmänä paikkaan ja kokoon, jonka sinä tai avustaja antaa ("3m", "10'" tai luku mallin yksikössä) |
| `instance_move`, `instances_erase` | Muokkaa | Siirtää tai poistaa ryhmiä ja komponentteja |
| `faces_list`, `materials_list` | Lue | Ryhmän tai vapaan geometrian pinnat (jokaisen suunta, pinta-ala ja keskipiste); materiaalit ja värit, joilla se voi maalata |
| `push_pull` | Muokkaa | Työntää tai vetää pintaa, kuten {{ui:Työnnä/vedä}} tekee |
| `paint` | Muokkaa | Maalaa pintoja tai koko ryhmän värillä tai materiaalilla |
| `group_make` | Muokkaa | Tekee ryhmän tai komponentin vapaista pinnoista ja ryhmistä |
| `scene_add`, `scene_show` | Muokkaa | Tallentaa 3D-näkymän tallennettuna näkymänä; siirtyy tallennettuun näkymään |
| `mesh_add` | Muokkaa | Verkkokohde lähtökohdaksi (kuutio, pallo, sylinteri …), kuten Verkkotyötila sen lisää |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lue / Muokkaa | Verkon muokkainpino: peilaus, matriisi, alijako, pyöristys ja muut; mitään ei sovelleta lopullisesti |
| `usd_export` | Vie | Malli OpenUSD-muodossa (.usda, .usdc tai .usdz), kuten mallin tallennus USD-muotoon sen kirjoittaa ([USD](topic:usd)); Studiossa sallimaasi kansioon, muuten latauksena |
| `render_still` | Vie | Renderöity kuva 3D-näkymästä tai tallennetusta näkymästä, samalla tavalla kuin {{ui:Renderöi}}-valintaikkunan {{ui:Renderöi}}-painike sen tekee, renderöinnin asetuksillasi, ellei se pyydä muita (näkymän esiasetus: ulkotila, sisätila, leikkaus, yö tai automaattinen; nopea tai korkea laatu, koko, näytteet, taivas); PNG-kuva, jonka se voi tarkastella, tai PNG-, EXR- tai renderointitiedosto Studiossa sallimaasi kansioon ([Renderöi kuva](topic:render)) |
| `render_queue` | Vie | Lisää korkealaatuisia kuvia Renderöi-valintaikkunan jonoon (3D-näkymä tai tallennetut näkymät) ja käynnistää jonon; valmiit kuvat menevät sallimaasi kansioon tai jäävät Renderöi-valintaikkunan {{ui:Renderöintijono}}-kohtaan sinua varten. Vaatii WebGPU:n |
| `link_push` | Muokkaa | Päivittää toisesta ohjelmasta linkitetyn mallin (katso [Pidä .3dm-malli ajan tasalla](topic:live-3dm-link)) |
| `link_status` | Lue | Kertoo, onko linkitetty malli yhä saatavilla ja milloin se päivittyi viimeksi |
| `undo` | Muokkaa | Kumoaa oman toimintonsa |

Avustajan tekemät kiintokappaleet tulevat ryhminä, joten ne eivät koskaan sulaudu piirtämääsi. Mallia tallentavaa työkalua ei ole: tallentaminen jää sinulle, ja vieminen tai renderöinti vaatii, että **Vie** on rastitettu. Renderöinti ei muuta mallia mitään; tallennetun näkymän renderöinti siirtää näkymän siihen, kuten {{ui:Näkymät}} tekee.

## Jos jokin ei toimi

- **Avustaja ei näe ModelCraft-työkaluja:** tarkista, että kytkin on päällä tässä ikkunassa ja että ikkuna on auki Studiossa.
- **"needs the edit permission":** rastita **Muokkaa** kohdan {{ui:Avustajat}} alta ja pyydä sitten uudelleen.
- **"401"- tai "token"-virheet:** tunnus vaihtui (Studio käynnistettiin uudelleen tai {{ui:Uusi tunnus}}). Kopioi uusi tunnus avustajan asetuksiin.

## Katso myös

- [Reseptit tekoälyavustajille](common:assistants-recipes): valmiita esimerkkejä, joista kukin kertoo käyttämänsä työkalut.
