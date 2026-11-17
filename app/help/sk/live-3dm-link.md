---
title: Udržiavanie modelu .3dm živého
summary: Meňte model v programe, ktorý ho vytvoril, a sledujte zmenu tu, z Rhino 8 alebo definície Grasshopper, bez opätovného ukladania a importu.
keywords: rhino, grasshopper, živé prepojenie, živé pripojenie, 3dm, nurbs, parametrický, prepojenie, synchronizácia, skript, referenčný model, odoslanie
from: 331b0a7e
---

Modelujte tam, kde modelujete, a výsledok použite tu: na vykreslenie, osvetlenie alebo zostavenie scény okolo neho. Každá zmena v druhom programe aktualizuje jednu skupinu v ModelCraft.

:::note
Prepojenie potrebuje **CadCraft Studio** na tom istom počítači. Karta prehliadača nemôže vytvoriť spojenie. Nič neputuje cez internet: skript komunikuje so Studiom na adrese tohto počítača, pomocou tokenu.
:::

:::warning
Toto prepojenie bolo otestované so zapisovačom súborov skriptu a s náhradou za druhý program, zatiaľ nie priamo v Rhino ani Grasshopper. Ak tam niečo zlyhá, napíšte nám, čo hlásilo.
:::

## Nastavenie

1. V Studiu otvorte ModelCraft. V {{ui:Nastavenia}} › {{ui:ModelCraft}} › {{ui:Asistenti}} zaškrtnite **Povoliť AI asistentom a skriptom používať ModelCraft**, potom **Upraviť**.
2. V Studiu zvoľte {{ui:Pripojiť asistenta}}. Zobrazí sa adresa a token, ktoré vložíte nižšie.
3. Stiahnite skript: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Z Rhino

1. Spustite `cadcraft_link.py` v editore skriptov Rhino (Python 3 v Rhino 8).
2. Pri prvom spustení vložte adresu a token. Uložia sa do `.cadcraft-link.json` vo vašom domovskom priečinku, nikdy nie v modeli. Studio pri každom spustení vytvorí nový token, takže sa skript vtedy opýta znova.

Celý model sa prenesie ako jedna skupina pomenovaná podľa dokumentu, napríklad "chair (linked)". Potom sa každá zmena prenesie, keď chvíľu počkáte, a posielajú sa len zmenené objekty. Skript zastavíte jeho opätovným spustením.

## Z Grasshopper

Najprv raz spustite skript v Rhino, aby sa adresa a token uložili.

1. Pridajte komponent Script (Python 3) a vložte doň celý `cadcraft_link.py`.
2. Nastavte mu tieto vstupy: `G` (geometria, so zoznamovým prístupom), `N` (názov, voliteľný), `On` (logický prepínač) a `Target` (voliteľný: `model` alebo `part`, ak sú otvorené obe aplikácie).
3. Nastavte `On` na true.

Každé vyhodnotenie pošle `G` a nahradí to, čo komponent poslal naposledy, takže pohyb posúvačom aktualizuje skupinu tu. Jeho výstup `a` hovorí, čo sa stalo. Každý komponent má vlastnú skupinu.

## Čo môžete so skupinou robiť

- **Presúvajte ju, označte ju, stavajte okolo nej.** Miesto skupiny a jej značka zostanú pri každej aktualizácii, rovnako ako všetko vedľa nej.
- **Neupravujte vnútro.** Každá aktualizácia nahradí obsah skupiny. Tie objekty patria druhému programu.
- **Krok späť.** Aktualizácie v rozmedzí dvoch sekúnd zdieľajú jeden krok späť, takže {{key:Mod+Z}} vráti späť celý ťah. Ďalšia aktualizácia vráti model do súladu.
- **Uložiť.** Uložený súbor si prepojenie zachová. Po opätovnom otvorení spustite skript znova a rovnaká skupina sa aktualizuje.

## Čo sa prenesie

Siete, polyplochy, plochy a vytlačenia ako sieť, ktorú vidíte na obrazovke, SubD ako svoju sieť, krivky ako hrany, bloky ako samostatné objekty tam, kde stoja (nie ako komponenty), vrstvy ako značky, farby a jednotky. Pozrite si [Import modelu .3dm](topic:import-3dm-files), kde sa to tu zobrazí.

Vynechá sa, s počtom v druhom programe: body, text, kóty, svetlá a podobné.

**Iba jedným smerom.** Zmeny tu sa nevracajú do druhého programu.

## Ak niečo zlyhá

- "Žiadne okno ModelCraft ani PartCraft to nepovoľuje": vykonajte krok 1 nastavenia.
- "Studio odmietlo token": Studio sa reštartovalo. Skopírujte nový token a spustite skript znova. Pre Grasshopper ho najprv spustite v Rhino.
- "Nie je možné sa pripojiť k CadCraft Studio": Studio nebeží, alebo sa adresa zmenila.
