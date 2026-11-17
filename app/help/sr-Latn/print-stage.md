---
title: Postavljanje stvari na podlogu za štampu i slanje štampaču
summary: Dodajte stavke iz biblioteke ili svoj model na podlogu štampača, rasporedite ih, pogledajte slojeve posle sečenja i pošaljite štampu preko USB-a ili mreže, ili sačuvajte G-kod, bez prethodnog izvoza STL datoteke.
keywords: faza štampe, 3D štampa, štampač, podloga, slanje 3D štampaču, slajser, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteka, rasporedi, uklopi sve, pregled slojeva, ispuna, oslonci, filament, pla, petg, dodatak, dodatak za 3D štampu
from: abcf5d7e
---

{{ui:Faza štampe}} raspoređuje stvari na podlozi vašeg štampača, seče ih na slojeve i šalje štampaču. Datoteku ne izvozite unapred. Pripada dodatku za 3D štampu, koji je podrazumevano uključen.

:::note
Sa ovim još nije ništa odštampano na pravom štampaču. Slajser je nov: pratite prve slojeve vaše prve štampe i pre slanja koristite pregled slojeva.
:::

## Šta ćete raditi

Stavite model na podlogu, proverite da staje, pogledajte isečene slojeve i pošaljite ga štampaču ili sačuvajte G-kod.

## Koraci

1. Kliknite {{ui:Faza štampe}} na traci sa alatima. Otvara se kartica preko prikaza, a isprekidana kontura prikazuje vašu podlogu.
2. Pod **Dodaj iz biblioteke** ukucajte naziv u polje za pretragu, pritisnite {{ui:Pretraga}} i pritisnite {{ui:Dodaj}} na rezultatu. Stavka dolazi na podlogu u punoj veličini ili smanjena da stane. Sve što ste već nacrtali ili uvezli i što vidite u prikazu takođe je na podlozi.
3. Pod **Na podlozi** proverite veličinu svake stavke. Stavka obeležena sa **Van podloge** treba da se pomeri. Pomerajte, rotirajte i skalirajte stvari u prikazu uobičajenim alatima.
4. Pritisnite {{ui:Poređaj na podlozi}} da raširite stavke, ili {{ui:Smesti sve na podlogu}} da ih smanjite dok ne stanu.
5. Pod **Vaš štampač** izaberite veličinu **Podloga** ili jedan od profila štampača.
6. Pod **Podešavanja štampe** izaberite **Materijal**, **Kvalitet** i **Ispuna %**, i označite **Dodaj oslonce ispod previsa** ako oblik to traži.
7. Pritisnite {{ui:Pregled slojeva}} i pomerajte klizač **Sloj** da pogledate isečene slojeve. Ako kasnije promenite fazu ili podešavanja, ponovo pritisnite {{ui:Pregled slojeva}}.
8. Pod **Veza** izaberite {{ui:USB kabl}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ili {{ui:PrusaLink}}. Za USB pritisnite {{ui:Poveži se}}. Za mrežni štampač upišite njegovu **Adresu** (i **API ključ** ako ga traži), pa pritisnite {{ui:Proveri vezu}}.
9. Pritisnite {{ui:Pošalji 3D štampaču}}. Kartica pita da li je podloga čista i da li je ubačen pravi materijal, i prikazuje vreme, materijal i temperature. Potvrdite za slanje.

Dobijate poruku da štampač počinje. {{ui:Zaustavi štampu}} gasi grejače, ventilator i motore. Ako želite samo datoteku, pritisnite {{ui:Umesto toga sačuvaj G-kod}}.

## Napomene

- USB traži Chrome ili Edge na računaru, i stranica mora ostati otvorena dok štampa ne završi. Zatvaranjem se tok prekida.
- Mrežni štampač mora dozvoliti ovaj sajt (u Moonraker-u ga dodajte u `cors_domains`; u OctoPrint-u uključite CORS i kopirajte API ključ). Pregledač može tražiti dozvolu da pristupi uređajima na vašoj mreži.
- Ništa se ne povezuje niti šalje bez vašeg klika.
- Spisak slajsera je pod **Slajser**. {{ui:CadCraft osnovni (uključen, najbrži)}} je ugrađen. Kiri:Moto, PrusaSlicer, OrcaSlicer i Bambu Lab P2S su zasebni dodaci koje uključujete sa kartice ili pod {{ui:Podešavanja}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste vašu sopstvenu kopiju i rade iz CadCraft Studio-a na računaru.
- Delovi koji nisu zatvorena čvrsta tela ostavljaju se van, a kartica kaže koliki je deo oblika to.
- Za štampače na smolu pogledajte [Sečenje za štampač na smolu](topic:resin-printing). Da prvo proverite ili popravite model, pogledajte [Oslonci, debljina zida, izdubljivanje i popravka](topic:print-tools).
