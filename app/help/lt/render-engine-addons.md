---
title: Pridėkite atvaizdavimo variklį su priedu
summary: Ką priedas gali pridėti prie atvaizdavimo dialogo variklių sąrašo, leidimą, reikalingą paleisti programą, ir ką Studio tikrina bei klausia.
keywords: priedas, addon, variklis, atvaizdavimo variklis, kūrėjas, engine.run, leidimas, programa, scenarijus, pasirašytas, studio, api
from: cd7a39ba
---

Priedas ({{ui:Parametrai}} › {{ui:Priedai}}) gali pridėti variklį prie {{ui:Atvaizduoti paveikslėlį…}} variklių sąrašo. Pilnas tekstas priedų autoriams yra priedo specifikacijos 16 skyriuje; trumpai:

- Priedas registruoja variklį su id, kuris prasideda jo paties, pavadinimu, neprivalomais nustatymais ir **arba** programa, kurią paleisti, **arba** JavaScript funkcija, kuri nubraižo paveikslėlį.
- Variklis, kuris paleidžia programą, reikalauja leidimo **`engine.run`**, rodomo prieš diegiant ir {{ui:Parametrai}}. Jis veikia tik Studio; naršyklėje rodomas kaip failas, kurį reikia įrašyti.
- Priedas nurodo programą (paprastas failo pavadinimas, niekada apvalkalas), scenarijų, kuris yra **pasirašytame priede**, ir argumentus, sudarytus iš vietaženklių bei paprastų žodžių. Studio randa programą arba vieną kartą paprašo ją nurodyti.
- Pirmą kartą, kai priedas paleidžia programą, **Studio klausia savo dialoge**: kuris priedas, kuri programa ir kad scenarijus gali daryti bet ką, ką gali programa. Leiskite tik priedui, kuriuo pasitikite. Jūsų atsakymas įsimenamas tam priedui ir programai.
- Paketas (scena kaip USD ir nustatymų failas, su glTF failu, kai priedas to prašo) ir priedo scenarijus įdedami į naują laikiną aplanką, programa paleidžiama ten, o paveikslėlis grįžta pažymėtas priedo variklio pavadinimu.

:::note
Priedai gali pridėti atvaizdavimo variklius tik nuo priedų API 1.4 versijos. Veikiantis pavyzdys atviro kodo komandinės eilutės atvaizdavimo programai yra jos pačios saugykloje; jis dar nebuvo paleistas toje programoje.
:::
