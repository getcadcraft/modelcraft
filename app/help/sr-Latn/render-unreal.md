---
title: Pošalji scenu u igrački pogon
summary: Studio može da upiše scenu u Unreal Engine projekat i da je drži usklađenom pri svakom slanju; vaše sopstvene izmene žive u sloju koji CadCraft nikada ne upisuje. Dodatak koji je otvara još nije objavljen.
keywords: unreal, unreal engine, igrački pogon, veza, pošalji, usd scena, projekat, uživo, cine kamera, red za renderovanje filma
from: 9a765cc2
---

U programu CadCraft Studio lista Motor može da sadrži **vezu** ka Unreal Engine projektu. Samo jedan smer: iz CadCraft-a u Unreal.

## Pošalji scenu

1. Izaberite Unreal stavku u listi Motor. Prvi put Studio traži da izaberete fasciklu vašeg projekta (onu sa datotekom `.uproject`); zapamtiće je.
2. Kliknite {{ui:Pošalji}}. Studio upisuje `CadCraft/<naziv datoteke>/` u projekat: scenu kao USD datoteku, datoteku podešavanja, profile svetiljki i dve male datoteke slojeva.
3. Promenite model, sačuvajte i pošaljite ponovo. Menjaju se samo scena i datoteka podešavanja.

## Vaše sopstvene izmene su bezbedne

USD scenu koju Unreal otvara čini mali korenski sloj napravljen jednom, sa dva sloja ispod njega: **vaš** na vrhu (`<naziv>.user.usda`, prazan na početku, CadCraft ga nikada ne prepisuje) i scena CadCraft-a ispod. Izmene koje sačuvate u svom sloju ostaju kada se scena ponovo pošalje. Svetla i drugi akteri koje postavite u Unreal nivou su van scene i takođe se ne diraju.

## Bez Studia

U pregledaču, ili na računaru na kom Studio ne pronalazi Unreal, izaberite **Fascikla Unreal projekta (.zip)** u listi Motor i kliknite {{ui:Renderuj}}. Ona čuva istu fasciklu kao zip: raspakujte je u fasciklu `CadCraft` vašeg projekta. Prvi put ostavite uključeno **Uključi datoteke scene**; za kasnija čuvanja isključite je, tako da zip sadrži samo scenu i datoteku podešavanja, a vaš sloj se nikada ne menja.

:::note
Unreal dodatak koji otvara USD scenu, primenjuje sunce, svetiljke, kamere i ekspoziciju, prati svako slanje i renderuje kameru **još nije objavljen** i nije pokrenut u Unreal-u. Dok ne bude, Pošalji stavlja datoteke u projekat, a sopstveni USD alati Unreal-a mogu da ih otvore. Prvi sistem je Windows; macOS sledi.
:::
