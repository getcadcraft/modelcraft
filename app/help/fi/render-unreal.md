---
title: Lähetä kohtaus pelimoottoriin
summary: Studio voi kirjoittaa kohtauksen Unreal Engine -projektiin ja pitää sen ajan tasalla jokaisella lähetyksellä. Omat muokkauksesi ovat kerroksessa, johon CadCraft ei koskaan kirjoita. Unreal-laajennus, joka avaa sen, ei ole vielä julkaistu.
keywords: unreal, unreal engine, pelimoottori, linkki, lähetä, USD-lava, projekti, live, cine-kamera, elokuvan renderöintijono
from: 9a765cc2
---

CadCraft Studiossa Moottoriluettelossa voi olla **linkki** Unreal Engine -projektiin. Vain yhteen suuntaan: CadCraftista Unrealiin.

## Lähetä kohtaus

1. Valitse Moottoriluettelosta Unreal-kohta. Ensimmäisellä kerralla Studio pyytää valitsemaan projektisi kansion (se, jossa on `.uproject`-tiedosto). Studio muistaa kansion.
2. Napsauta {{ui:Lähetä}}. Studio kirjoittaa projektin sisään kansion `CadCraft/<tiedoston nimi>/`: kohtauksen USD-tiedostona, asetustiedoston, valoprofiilit ja kaksi pientä kerrostiedostoa.
3. Muuta mallia, tallenna ja lähetä uudelleen. Vain kohtaus ja asetustiedosto korvataan.

## Omat muokkauksesi ovat turvassa

Unrealin avaama lava on pieni juurikerros, jonka alla on kaksi kerrosta: **omasi** päällimmäisenä (`<name>.user.usda`, aluksi tyhjä, CadCraft ei koskaan kirjoita sitä uudelleen) ja CadCraftin kohtaus sen alla. Omaan kerrokseesi tallentamasi muokkaukset säilyvät, kun kohtaus lähetetään uudelleen. Unreal-tason valot ja muut toimijat, jotka sijoitat, ovat lavan ulkopuolella, eikä niihinkään kosketa.

## Ilman Studiota

Selaimessa tai tietokoneella, jossa Studio ei löydä Unrealia, valitse Moottoriluettelosta **Unreal-projektikansio (.zip)** ja napsauta {{ui:Renderöi}}. Se tallentaa saman kansion zip-tiedostona: pura se projektisi `CadCraft`-kansioon. Jätä **Sisällytä lavan tiedostot** päälle ensimmäisellä kerralla. Poista se käytöstä myöhemmissä tallennuksissa, jolloin zip-tiedosto sisältää vain kohtauksen ja asetustiedoston, eikä omaa kerrostasi korvata koskaan.

:::note
Unreal-laajennusta, joka avaa lavan, käyttää aurinkoa, lamppuja, kameroita ja valotusta, seuraa jokaista lähetystä ja renderöi kameran, **ei ole vielä julkaistu**, eikä sitä ole ajettu Unrealissa. Siihen asti Lähetä vie tiedostot projektiin, ja Unrealin omat USD-työkalut voivat avata ne. Windows on ensimmäinen käyttöjärjestelmä; macOS tulee perässä.
:::
