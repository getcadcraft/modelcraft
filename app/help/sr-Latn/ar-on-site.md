---
title: Pogledajte model na terenu Android telefonom (AR)
summary: Podignite Android telefon sa Chrome-om i pogledajte model u punoj veličini preko kamere, poravnat na zgradi pomoću dve tačke na kojima stojite, sa rendgen lupom i brzom ponovnom proverom pri sledećoj poseti. Za gledanje, a ne za iskolčavanje.
keywords: ar, proširena stvarnost, telefon, android, chrome, webxr, na terenu, teren, kamera, puna veličina, rendgen, poravnanje, poravnati, ponovna provera, arcore
from: 0f43b50b
---

{{ui:Pregled na terenu (AR, telefon)}} u meniju {{ui:Pogledi}} prikazuje model u stvarnoj veličini preko kamere telefona. Radi na **Android telefonu sa Chrome-om**, na bezbednoj (https) stranici, gde telefon podržava AR. Na iPhone-u ili iPad-u, računaru ili Android aplikaciji koja samo prikazuje veb stranicu, stavka kaže zašto ne može da počne; tada koristite 3D prikaz ili otvorite ovu stranicu u Chrome-u na telefonu.

**Telefon služi za gledanje.** Nemojte ništa meriti, iskolčavati niti seći prema onome što ekran prikazuje: telefon odstupa dok hodate, a greška pokazivanja raste sa rastojanjem od dve tačke po kojima ste poravnali (nekoliko centimetara blizu njih, više dalje). Ništa ovde nije geodetske tačnosti.

## Poravnavanje modela

1. Otvorite model na telefonu i izaberite {{ui:Pregled na terenu (AR, telefon)}}. Dozvolite kameru.
2. Panel pri dnu navodi prvu tačku (ugao modela na tlu). Stanite tu na terenu, usmerite zeleni prsten ka tlu i dodirnite {{ui:Postavi tačku}}.
3. Idite do druge tačke, bar pola metra udaljene (što su dalje, poravnanje je bolje), i uradite isto.
4. Model se pojavljuje u punoj veličini, okrenut i pomeren da se uklopi na dva mesta. Panel kaže koliko se dve tačke slažu.

{{ui:Počni ispočetka}} briše tačke. Poravnanje se čuva u datoteci modela, pa kada sledeći put otvorite model na terenu, počinje poravnat.

## Rendgen lupa

{{ui:Rendgen lupa}} prikazuje ceo model unutar kutije ispred telefona (oko metar i po široke i tri metra duboke), a na drugim mestima samo bledu senku, pa možete da gledate šta je iza zida bez gubljenja pravog zida.

## Sledeća poseta

Stanite na prvoj tački i dodirnite {{ui:Ponovo proveri}}, pa {{ui:Postavi tačku}}. Ako je odstupanje manje od 5 centimetara, poravnanje se čuva. Do pola metra odstupanja, model se pomera za razliku. Više od toga, panel traži da ponovo pokažete dva mesta.

## Izlazak

{{ui:Izađi iz AR-a}} završava sesiju. Slika kamere ostaje u pregledaču: ništa se ne otprema.
