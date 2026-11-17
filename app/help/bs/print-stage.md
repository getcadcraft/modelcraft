---
title: Postavi stvari na podlogu za štampu i pošalji ih štampaču
summary: Dodaj stavke iz biblioteke ili svoj model na podlogu štampača, poredaj ih, pogledaj isječene slojeve i pošalji štampu preko USB-a ili mreže, ili sačuvaj G-code, bez prethodnog izvoza STL datoteke.
keywords: faza štampe, 3d štampa, štampač, podloga, pošalji 3d štampaču, slajser, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteka, poredaj, uklopi sve, pregled slojeva, ispuna, podrške, filament, pla, petg, dodatak, dodatak za 3d štampu
from: abcf5d7e
---

{{ui:Faza štampe}} raspoređuje stvari na podlogu tvog štampača, isječe ih i šalje štampaču. Ne izvoziš prvo datoteku. Pripada dodatku za 3D štampu, koji je uključen po zadanom.

:::note
Ovim još nije ništa odštampano na pravom štampaču. Slajser je nov: prati prve slojeve tvoje prve štampe i koristi pregled slojeva prije slanja.
:::

## Šta ćeš raditi

Stavi model na podlogu, provjeri da stane, pogledaj isječene slojeve i pošalji ga štampaču ili sačuvaj G-code.

## Koraci

1. Klikni {{ui:Faza štampe}} na alatnoj traci. Kartica se otvara iznad prikaza, a isprekidani obris prikazuje tvoju podlogu.
2. Pod **Dodaj iz biblioteke** upiši naziv u polje za pretragu, pritisni {{ui:Traži}} i pritisni {{ui:Dodaj}} na rezultatu. Stavka ide na podlogu u punoj veličini, ili smanjena da stane. Sve što si već nacrtao ili uvezao i što vidiš u prikazu je također na podlozi.
3. Pod **Na podlozi** provjeri veličinu svake stavke. Stavka označena sa **Van podloge** treba da se pomjeri. Pomjeri, rotiraj i skaliraj stvari u prikazu uobičajenim alatima.
4. Pritisni {{ui:Poredaj na podlozi}} da raširiš stavke, ili {{ui:Uklopi sve na podlogu}} da ih smanjiš dok ne stanu.
5. Pod **Tvoj štampač** izaberi veličinu **Podloge** ili jedan od profila štampača.
6. Pod **Postavke štampe** izaberi **Materijal**, **Kvalitet** i **Ispuna %**, i označi **Dodaj podršku ispod navisa** ako oblik to traži.
7. Pritisni {{ui:Pregled slojeva}} i pomjeri klizač **Sloj** da pogledaš isječene slojeve. Ako kasnije promijeniš fazu ili postavke, ponovo pritisni {{ui:Pregled slojeva}}.
8. Pod **Veza** izaberi {{ui:USB kabl}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ili {{ui:PrusaLink}}. Za USB pritisni {{ui:Poveži se}}. Za štampač na mreži upiši njegovu **Adresu** (i **API ključ** ako traži), zatim pritisni {{ui:Testiraj vezu}}.
9. Pritisni {{ui:Pošalji 3D štampaču}}. Kartica pita da li je podloga čista i da li je učitan pravi materijal, i prikazuje vrijeme, materijal i temperature. Potvrdi za slanje.

Dobiješ poruku da se štampač pokreće. {{ui:Zaustavi štampu}} gasi grijače, ventilator i motore. Ako želiš samo datoteku, pritisni {{ui:Sačuvaj G-code umjesto toga}}.

## Napomene

- USB traži Chrome ili Edge na računaru, i stranica mora ostati otvorena dok štampa ne završi. Zatvaranje zaustavlja tok.
- Štampač na mreži mora dozvoliti ovu stranicu (u Moonrakeru dodaj je u `cors_domains`; u OctoPrintu uključi CORS i kopiraj API ključ). Tvoj pretraživač može tražiti pristup uređajima na tvojoj mreži.
- Ništa se ne povezuje niti šalje bez tvog klika.
- Spisak slajsera je pod **Slajser**. {{ui:CadCraft osnovni (uključen, najbrži)}} je ugrađen. Kiri:Moto, PrusaSlicer, OrcaSlicer i Bambu Lab P2S su zasebni dodaci koje uključuješ sa kartice ili pod {{ui:Postavke}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste tvoju vlastitu kopiju i rade iz CadCraft Studija na računaru.
- Dijelovi koji nisu zatvorena tijela se izostavljaju, a kartica ti kaže koliki dio oblika je to.
- Za štampače sa smolom vidi [Isijecanje za štampač sa smolom](topic:resin-printing). Da prvo provjeriš ili popraviš model, vidi [Podrške, debljina zida, šupljenje i popravka](topic:print-tools).
