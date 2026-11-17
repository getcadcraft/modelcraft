---
title: Pošalji scenu u engine za igre
summary: Studio može upisati scenu u Unreal Engine projekt i održavati je u skladu pri svakom slanju; tvoje vlastite izmjene žive u sloju koji CadCraft nikad ne piše. Dodatak koji je otvara još nije objavljen.
keywords: unreal, unreal engine, engine za igre, veza, slanje, usd scena, projekt, uživo, cine kamera, red renderovanja filma
from: 9a765cc2
---

U CadCraft Studiju lista motora može sadržavati **vezu** ka Unreal Engine projektu. Samo u jednom smjeru: iz CadCraft-a ka Unrealu.

## Pošalji scenu

1. Odaberi stavku Unreal na listi motora. Prvi put Studio traži da odabereš folder svog projekta (onaj s datotekom `.uproject`); on ga pamti.
2. Klikni {{ui:Pošalji}}. Studio upisuje `CadCraft/<file name>/` unutar projekta: scenu kao USD datoteku, datoteku postavki, profile svjetla i dvije male datoteke slojeva.
3. Promijeni model, spasi i ponovo pošalji. Zamjenjuju se samo scena i datoteka postavki.

## Tvoje vlastite izmjene su sigurne

Pozornica (stage) koju Unreal otvara je mali korijenski sloj napravljen jednom, s dva sloja ispod: **tvoj** na vrhu (`<name>.user.usda`, prazan na početku, CadCraft ga nikad ne prepisuje) i CadCraftova scena ispod. Izmjene koje spasiš u svom sloju ostaju i kad se scena ponovo pošalje. Svjetla i druge aktere koje postaviš u Unreal nivo su van pozornice i također se ne diraju.

## Bez Studija

U pregledaču ili na računaru na kojem Studio ne pronalazi Unreal, odaberi **Folder Unreal projekta (.zip)** na listi motora i klikni {{ui:Renderuj}}. Sprema isti folder kao zip: raspakuj ga u folder `CadCraft` svog projekta. Ostavi **Uključi datoteke pozornice** uključeno prvi put; isključi za kasnija spašavanja, tako da zip sadrži samo scenu i datoteku postavki, a tvoj sloj se nikad ne zamjenjuje.

:::note
Unreal dodatak koji otvara pozornicu, primjenjuje sunce, svjetiljke, kamere i ekspoziciju, prati svako slanje i renderuje kameru **još nije objavljen** i nije pokrenut u Unrealu. Dok to ne bude, {{ui:Pošalji}} stavlja datoteke u projekt, a Unrealovi vlastiti USD alati ih mogu otvoriti. Windows je prvi sistem; macOS slijedi.
:::
