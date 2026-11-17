---
title: Pridanie render enginu pomocou doplnku
summary: Čo doplnok môže pridať do zoznamu Engine v dialógu Vykresliť, oprávnenie na spustenie programu a čo Studio kontroluje a pýta sa.
keywords: doplnok, addon, engine, render engine, vývojár, engine.run, oprávnenie, program, skript, podpísaný, studio, api
from: cd7a39ba
---

Doplnok (Nastavenia › Doplnky) môže pridať engine do zoznamu **Engine** v {{ui:Vykresliť obrázok…}}. Úplný text pre autorov doplnkov je oddiel 16 špecifikácie doplnkov; v skratke:

- Doplnok zaregistruje engine s identifikátorom, ktorý začína jeho vlastným, s názvom, voliteľnými nastaveniami a **buď** programom na spustenie, **alebo** funkciou v JavaScripte, ktorá nakreslí obrázok.
- Engine, ktorý spúšťa program, potrebuje oprávnenie **`engine.run`**, ktoré sa zobrazí pred inštaláciou a v Nastaveniach. Beží len v Studio; v prehliadači sa zobrazí ako súbor na uloženie.
- Doplnok uvedie program (len obyčajný názov súboru, nikdy shell), skript, ktorý je **vnútri podpísaného doplnku**, a argumenty zložené zo zástupných znakov a obyčajných slov. Studio program nájde alebo sa raz opýta, kde je.
- Keď doplnok prvýkrát spustí program, **Studio sa vás opýta vo svojom dialógu**: ktorý doplnok, ktorý program a že skript môže robiť čokoľvek, čo môže program. Povoľte to len doplnku, ktorému dôverujete. Vaša odpoveď sa zapamätá pre tento doplnok a program.
- Balík (scéna ako USD a súbor nastavení, so súborom glTF, ak si ho doplnok vyžiada) a skript doplnku sa uložia do novej dočasnej zložky, program sa v nej spustí a obrázok sa vráti označený názvom enginu doplnku.

:::note
Doplnky môžu pridávať render engine len od API doplnkov 1.4. Podrobný príklad pre open-source renderer z príkazového riadka je vo vlastnom repozitári; v tomto renderery ešte nebol spustený.
:::
