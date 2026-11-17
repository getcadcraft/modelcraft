---
title: Dodavanje engine-a za renderovanje dodatkom
summary: Šta dodatak može da doda na listu Engine u dijalogu za renderovanje, dozvola koja mu je potrebna za pokretanje programa, i šta Studio proverava i pita.
keywords: dodatak, addon, engine, engine za renderovanje, programer, engine.run, dozvola, program, skripta, potpisan, studio, api
from: cd7a39ba
---

Dodatak (Podešavanja › Dodaci) može da doda engine na listu Engine u {{ui:Renderuj sliku…}}. Kompletan tekst za autore dodataka je odeljak 16 specifikacije dodatka; ukratko:

- Dodatak registruje engine sa identifikatorom koji počinje njegovim, nazivom, opcionalnim podešavanjima i **ili** programom koji se pokreće **ili** funkcijom u JavaScript-u koja crta sliku.
- Engine koji pokreće program treba dozvolu **`engine.run`**, prikazanu pre instalacije i u Podešavanjima. Radi samo u Studio-u; u pregledaču se prikazuje kao datoteka za čuvanje.
- Dodatak navodi program (običan naziv datoteke, nikad ljusku), skriptu koja je **unutar potpisanog dodatka**, i argumente sastavljene od zamenskih oznaka i običnih reči. Studio pronalazi program ili vas jednom pita da ga pokažete.
- Prvi put kad dodatak pokrene program, **Studio vas pita u sopstvenom dijalogu**: koji dodatak, koji program, i da skripta može sve što program može. Dozvolite samo dodatku kome verujete. Vaš odgovor se pamti za taj dodatak i program.
- Paket (scena kao USD i datoteka podešavanja, sa glTF datotekom kad dodatak to traži) i skripta dodatka idu u novu privremenu fasciklu, program se pokreće tamo, a slika se vraća označena nazivom engine-a dodatka.

:::note
Dodaci mogu dodati engine-e za renderovanje samo iz API-ja dodataka 1.4. Radni primer za komandno-linijski renderer otvorenog koda je u sopstvenom repozitorijumu; u tom rendereru još nije pokrenut.
:::
