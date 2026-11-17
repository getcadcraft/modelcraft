---
title: Pogledaj model na lokaciji sa Android telefonom (AR)
summary: Podigni Android telefon sa Chrome-om i vidi model u punoj veličini preko kamere, poravnat sa zgradom pomoću dvije tačke na kojima stojiš, uz X-ray lupu i brzu provjeru pri sljedećem dolasku. Za gledanje, ne za obilježavanje.
keywords: ar, proširena stvarnost, telefon, android, chrome, webxr, na lokaciji, lokacija, kamera, puna veličina, x-ray, poravnanje, poravnaj, ponovna provjera, arcore
from: 0f43b50b
---

{{ui:Pogled na lokaciji (AR, telefon)}} u meniju {{ui:Pogledi}} prikazuje model u njegovoj stvarnoj veličini preko kamere telefona. Radi na **Android telefonu sa Chrome-om**, na sigurnoj (https) stranici, gdje telefon podržava AR. Na iPhone-u ili iPad-u, računaru ili Android aplikaciji koja samo prikazuje web stranicu, stavka kaže zašto ne može da počne; tada koristi 3D prikaz, ili otvori ovu stranicu u Chrome-u na telefonu.

**Telefon je za gledanje.** Ne mjeri, ne obilježavaj i ne sijeci ništa prema onome što vidiš na ekranu: telefon se pomjera dok hodaš, a greška pokazivanja raste s udaljenošću od dvije tačke na koje si poravnao (nekoliko centimetara u blizini, više dalje). Ništa ovdje nije geodetske preciznosti.

## Poravnaj model

1. Otvori model na telefonu i odaberi {{ui:Pogled na lokaciji (AR, telefon)}}. Dozvoli pristup kameri.
2. Panel pri dnu navodi prvu tačku (ugao modela na tlu). Stani tu na lokaciji, usmjeri zeleni prsten na tlo i dodirni {{ui:Postavi tačku}}.
3. Idi do druge tačke, najmanje pola metra daleko (što su dalje, to bolje poklapanje), i uradi isto.
4. Model se pojavljuje u punoj veličini, okrenut i pomjeren da se uklopi u dva mjesta. Panel kaže koliko se dvije tačke slažu.

{{ui:Počni ponovo}} briše tačke. Poravnanje se čuva u datoteci modela, pa sljedeći put kad otvoriš model na lokaciji počinje poravnat.

## X-ray lupa

{{ui:X-ray lupa}} prikazuje cijeli model unutar kutije ispred telefona (otprilike metar i po široko i tri metra duboko), a svuda drugdje samo slabu sjenku njega, pa možeš vidjeti šta je iza zida, bez gubljenja pravog zida.

## Sljedeći dolazak

Stani na prvoj tački i dodirni {{ui:Provjeri ponovo}}, pa {{ui:Postavi tačku}}. Ako je odstupanje manje od 5 centimetara, poravnanje ostaje. Do pola metra odstupanja, model se pomjeri za razliku. Više od toga, panel traži da ponovo pokažeš dva mjesta.

## Izlaz

{{ui:Izađi iz AR-a}} završava sesiju. Slika kamere ostaje u pregledaču: ništa se ne šalje.
