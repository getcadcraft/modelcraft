---
title: Pošalji scenu u game engine
summary: Studio može zapisati scenu u projekt Unreal Enginea i održavati je usklađenom pri svakom slanju; vaše vlastite izmjene nalaze se u sloju koji CadCraft nikad ne piše. Dodatak koji je otvara još nije objavljen.
keywords: unreal, unreal engine, game engine, veza, pošalji, usd pozornica, projekt, uživo, cine kamera, red renderiranja filma
from: 9a765cc2
---

U programu CadCraft Studio popis Engine može sadržavati **vezu** na projekt Unreal Engine. Samo u jednom smjeru: iz CadCrafta u Unreal Engine.

## Slanje scene

1. Odaberite stavku Unreal na popisu Engine. Prvi put Studio traži da odaberete mapu vašeg projekta (onu s datotekom `.uproject`); zapamtit će je.
2. Kliknite {{ui:Pošalji}}. Studio zapisuje `CadCraft/<file name>/` unutar projekta: scenu kao USD datoteku, datoteku postavki, profile svjetla i dvije male datoteke slojeva.
3. Promijenite model, spremite i ponovno pošaljite. Zamjenjuju se samo scena i datoteka postavki.

## Vaše izmjene su sigurne

Pozornica koju Unreal Engine otvara je mali korijenski sloj napravljen jednom, s dva sloja ispod njega: **vašim** na vrhu (`<name>.user.usda`, prazan na početku, CadCraft ga nikad ne piše) i scenom CadCrafta ispod. Izmjene koje spremite u vlastiti sloj ostaju kad se scena ponovno pošalje. Svjetla i druge aktere koje postavite u razinu Unreal Engine nalaze se izvan pozornice i također nisu dirani.

## Bez Studija

U pregledniku ili na računalu na kojem Studio ne pronalazi Unreal Engine, odaberite **Mapa Unreal projekta (.zip)** na popisu Engine i kliknite {{ui:Renderiraj}}. Sprema istu mapu kao zip: raspakirajte ga u mapu `CadCraft` vašeg projekta. Pri prvom spremanju ostavite **Uključi datoteke pozornice** uključeno; za kasnija spremanja isključite ga, tako da zip sadrži samo scenu i datoteku postavki, a vaš vlastiti sloj nikad se ne zamjenjuje.

:::note
Dodatak za Unreal Engine koji otvara pozornicu, primjenjuje sunce, svjetiljke, kamere i ekspoziciju, prati svako slanje i renderira kameru **još nije objavljen** i nije pokrenut u Unreal Engineu. Dok to ne bude, Pošalji stavlja datoteke u projekt, a vlastiti USD alati Unreal Engine mogu ih otvoriti. Windows je prvi sustav; macOS slijedi.
:::
