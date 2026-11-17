---
title: Dodaj motor za renderovanje dodatkom
summary: Šta dodatak može dodati u listu Motor u dijalogu Renderuj, dozvolu koja mu je potrebna za pokretanje programa, i šta Studio provjerava i pita.
keywords: dodatak, addon, motor, motor za renderovanje, programer, engine.run, dozvola, program, skripta, potpisano, studio, api
from: cd7a39ba
---

Dodatak (Postavke › Dodaci) može dodati motor u listu Motor u {{ui:Renderuj sliku…}}. Potpun tekst za autore dodataka je odjeljak 16 specifikacije dodatka; ukratko:

- Dodatak registruje motor sa id-jem koji počinje njegovim vlastitim, nazivom, opcionalnim postavkama i **ili** programom koji se pokreće **ili** funkcijom u JavaScriptu koja crta sliku.
- Motor koji pokreće program treba dozvolu **`engine.run`**, prikazanu prije instalacije i u Postavkama. Radi samo u Studiju; u pregledniku se prikazuje kao datoteka za snimanje.
- Dodatak imenuje program (običan naziv datoteke, nikad shell), skriptu koja je **unutar potpisanog dodatka**, i argumente sastavljene od oznaka i običnih riječi. Studio nađe program ili te jednom zamoli da ga pokažeš.
- Prvi put kad dodatak pokrene program, **Studio te pita u svom vlastitom dijalogu**: koji dodatak, koji program, i da skripta može sve što program može. Dozvoli samo dodatak kojem vjeruješ. Tvoj odgovor se pamti za taj dodatak i program.
- Paket (scena kao USD i datoteka postavki, sa glTF datotekom kad dodatak to traži) i skripta dodatka idu u novu privremenu mapu, program se pokreće tamo, a slika se vraća označena nazivom motora dodatka.

:::note
Dodaci mogu dodavati motore za renderovanje samo iz API-ja dodatka 1.4. Radni primjer za renderer otvorenog koda za komandnu liniju je u njegovom vlastitom repozitoriju; još nije pokrenut u tom rendereru.
:::
