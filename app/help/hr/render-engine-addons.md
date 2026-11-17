---
title: Dodavanje motora za renderiranje dodatkom
summary: Što dodatak može dodati na popis Motor u dijalogu Renderiraj, dopuštenje potrebno za pokretanje programa, te što Studio provjerava i pita.
keywords: dodatak, addon, motor, motor za renderiranje, programer, engine.run, dopuštenje, program, skripta, potpisano, studio, api
from: cd7a39ba
---

Dodatak (Postavke › Dodaci) može dodati motor na popis Motor od {{ui:Renderiraj sliku…}}. Potpuni tekst za autore dodataka je odjeljak 16 specifikacije dodatka; ukratko:

- Dodatak registrira motor s identifikatorom koji počinje njegovim vlastitim, nazivom, izbornim postavkama i **ili** programom za pokretanje **ili** funkcijom u JavaScriptu koja crta sliku.
- Motor koji pokreće program treba dopuštenje **`engine.run`**, prikazano prije instalacije i u Postavkama. Radi samo u Studiju; u pregledniku se prikazuje kao datoteka za spremanje.
- Dodatak imenuje program (običan naziv datoteke, nikad ljuska), skriptu koja je **unutar potpisanog dodatka** i argumente sastavljene od oznaka mjesta i običnih riječi. Studio pronalazi program ili vas jednom traži da ga pokažete.
- Kad dodatak prvi put pokrene program, **Studio vas pita u vlastitom dijalogu**: koji dodatak, koji program i da skripta može sve što program može. Dopustite to samo dodatku kojem vjerujete. Vaš odgovor pamti se za taj dodatak i program.
- Paket (scena kao USD i datoteka postavki, uz glTF datoteku kad je dodatak traži) i skripta dodatka idu u novu privremenu mapu, program se pokreće tamo, a slika se vraća označena nazivom motora dodatka.

:::note
Dodaci mogu dodati motore za renderiranje samo od API-ja dodatka 1.4. Primjer rada za naredbeni renderer otvorenog koda nalazi se u njegovu vlastitom repozitoriju; u tom rendereru još nije pokrenut.
:::
