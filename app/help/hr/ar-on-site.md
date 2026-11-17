---
title: Pogledajte model na lokaciji s Android telefonom (AR)
summary: Podignite Android telefon s Chromeom i pogledajte model u punoj veličini preko kamere, poravnat s građevinom pomoću dviju točaka na kojima stojite, s rendgenskom lećom i brzom provjerom pri sljedećem dolasku. Za gledanje, ne za iskolčavanje.
keywords: ar, proširena stvarnost, telefon, android, chrome, webxr, na lokaciji, lokacija, kamera, puna veličina, rendgen, poravnaj, poravnanje, ponovna provjera, arcore
from: 0f43b50b
---

{{ui:Pregled na lokaciji (AR, telefon)}} u izborniku {{ui:Pogledi}} prikazuje model u stvarnoj veličini preko kamere telefona. Radi na **Android telefonu s Chromeom**, na sigurnoj (https) stranici, tamo gdje telefon podržava AR. Na iPhoneu ili iPadu, računalu ili Android aplikaciji koja samo prikazuje web stranicu, stavka kaže zašto se ne može pokrenuti; tamo koristite 3D pogled ili otvorite ovu stranicu u Chromeu na telefonu.

**Telefon služi za gledanje.** Ne mjerite, ne iskolčavajte i ništa ne rezite prema onome što vidite na zaslonu: telefon se pomiče dok hodate, a pogreška pokazivanja raste s udaljenošću od dviju točaka koje ste poravnali (nekoliko centimetara blizu njih, više dalje). Ništa ovdje nije geodetske točnosti.

## Poravnajte model

1. Otvorite model na telefonu i odaberite {{ui:Pregled na lokaciji (AR, telefon)}}. Dopustite kameru.
2. Panel pri dnu imenuje prvu točku (kut modela na tlu). Stanite tamo na lokaciji, usmjerite zeleni prsten na tlo i dodirnite {{ui:Postavi točku}}.
3. Idite do druge točke, najmanje pola metra daleko (što su dalje, to je bolje poklapanje), i učinite isto.
4. Model se pojavljuje u punoj veličini, zakrenut i pomaknut da odgovara dvama mjestima. Panel daje koliko se dvije točke slažu.

{{ui:Počni ispočetka}} briše točke. Poravnanje se čuva u datoteci modela, pa sljedeći put kad otvorite model na lokaciji počinje poravnat.

## Rendgenska leća

{{ui:Rendgen leća}} prikazuje cijeli model unutar kutije ispred telefona (otprilike metar i pol široko i tri metra duboko), a drugdje samo blijedu sjenu, pa možete vidjeti što je iza zida bez gubitka stvarnog zida.

## Sljedeći dolazak

Stanite na prvu točku i dodirnite {{ui:Provjeri ponovno}}, zatim {{ui:Postavi točku}}. Ako je odstupanje manje od 5 centimetara, poravnanje ostaje. Do pola metra odstupanja, model se pomiče za razliku. Više od toga, panel traži da ponovno pokažete na dva mjesta.

## Izlaz

{{ui:Napusti AR}} završava sesiju. Slika kamere ostaje u pregledniku: ništa se ne učitava.
