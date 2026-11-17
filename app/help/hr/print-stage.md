---
title: Postavljanje na podlogu za ispis i slanje pisaču
summary: Dodajte stavke knjižnice ili vlastiti model na podlogu vašeg pisača, poredajte ih, pogledajte slojeve nakon rezanja i pošaljite ispis preko USB-a ili mreže, ili spremite G-code, bez prethodnog izvoza STL-a.
keywords: faza ispisa, 3d ispis, pisač, podloga, slanje 3d pisaču, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, knjižnica, raspored, uklopi sve, pregled slojeva, ispuna, potpore, filament, pla, petg, dodatak, dodatak za 3d ispis
from: abcf5d7e
---

{{ui:Faza ispisa}} slaže stavke na podlogu vašeg pisača, reže ih na slojeve i šalje pisaču. Datoteku ne izvozite prvo. Pripada dodatku 3D ispis, koji je uključen prema zadanim postavkama.

:::note
Ovime još nije ništa ispisano na stvarnom pisaču. Slicer je nov: pratite prve slojeve svog prvog ispisa i koristite pregled slojeva prije slanja.
:::

## Što ćete raditi

Postavite model na podlogu, provjerite stane li, pogledajte slojeve nakon rezanja i pošaljite ga pisaču ili spremite G-code.

## Koraci

1. Kliknite {{ui:Faza ispisa}} na alatnoj traci. Otvara se kartica preko prikaza, a isprekidani obris prikazuje vašu podlogu.
2. Pod **Dodaj iz knjižnice** upišite naziv u polje za pretragu, pritisnite {{ui:Traži}} i pritisnite {{ui:Dodaj}} na rezultatu. Stavka dolazi na podlogu u punoj veličini ili umanjena da stane. Sve što ste već nacrtali ili uvezli i što vidite u prikazu također je na podlozi.
3. Pod **Na podlozi** provjerite veličinu svake stavke. Stavka označena **Izvan podloge** treba se pomaknuti. Stvari pomičite, zakrećite i skalirajte u prikazu uobičajenim alatima.
4. Pritisnite {{ui:Rasporedi na podlogu}} da raširite stavke ili {{ui:Prilagodi sve na podlogu}} da ih umanjite dok ne stanu.
5. Pod **Vaš pisač** odaberite veličinu **Podloge** ili jedan od profila pisača.
6. Pod **Postavke ispisa** odaberite **Materijal**, **Kvalitetu** i **Ispunu %**, te označite **Dodaj potpore ispod previsa** ako oblik to treba.
7. Pritisnite {{ui:Pregled slojeva}} i pomaknite klizač **Sloj** da pogledate slojeve nakon rezanja. Ako poslije promijenite fazu ili postavke, ponovno pritisnite {{ui:Pregled slojeva}}.
8. Pod **Veza** odaberite {{ui:USB kabel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ili {{ui:PrusaLink}}. Za USB pritisnite {{ui:Spoji}}. Za mrežni pisač upišite njegovu **Adresu** (i **API ključ** ako ga traži), zatim pritisnite {{ui:Provjeri vezu}}.
9. Pritisnite {{ui:Pošalji na 3D pisač}}. Kartica pita je li podloga čista i je li učitan ispravan materijal te prikazuje vrijeme, materijal i temperature. Potvrdite za slanje.

Dobit ćete poruku da se pisač pokreće. {{ui:Zaustavi ispis}} isključuje grijače, ventilator i motore. Ako želite samo datoteku, pritisnite {{ui:Umjesto toga spremi G-code}}.

## Napomene

- USB treba Chrome ili Edge na računalu, a stranica mora ostati otvorena dok ispis ne završi. Zatvaranje prekida tok.
- Mrežni pisač mora dopustiti ovu stranicu (u Moonrakeru je dodajte u `cors_domains`; u OctoPrintu uključite CORS i kopirajte API ključ). Preglednik može tražiti dopuštenje za pristup uređajima na vašoj mreži.
- Ništa se ne spaja niti šalje bez vašeg klika.
- Popis slicera nalazi se pod **Slicer**. {{ui:CadCraft basic (uključeno, najbrže)}} je ugrađen. Kiri:Moto, PrusaSlicer, OrcaSlicer i Bambu Lab P2S su zasebni dodaci koje uključujete s kartice ili pod {{ui:Postavke}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste vašu vlastitu kopiju i rade iz CadCraft Studija na računalu.
- Dijelovi koji nisu zatvorena tijela izostavljaju se, a kartica vam kaže koliki dio oblika je to.
- Za pisače na smolu vidi [Rezanje za pisač na smolu](topic:resin-printing). Za provjeru ili popravak modela prvo vidi [Potpore, debljina stijenke, izdubljivanje i popravak](topic:print-tools).
