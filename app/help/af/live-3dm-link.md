---
title: Hou 'n .3dm-model lewend
summary: Verander 'n model in die program wat dit gemaak het en sien dit hier verander, vanaf Rhino 8 of 'n Grasshopper-definisie, sonder om weer te stoor en in te voer.
keywords: rhino, grasshopper, lewe skakel, lewende verbinding, 3dm, nurbs, parametries, skakel, sinkroniseer, skrip, verwysingsmodel, stuur
from: 331b0a7e
---

Hou aan om te modelleer waar jy modelleer, en gebruik die resultaat hier: om dit weer te gee, te belig, of 'n toneel om dit op te stel. Elke verandering in die ander program werk een groep in ModelCraft by.

:::note
Die skakel benodig **CadCraft Studio** op dieselfde rekenaar. 'n Blaaierblad kan nie die verbinding neem nie. Niks gaan oor die internet nie: die skrip praat met Studio by hierdie rekenaar se eie adres, met 'n token.
:::

:::warning
Hierdie skakel is getoets met die skrip se lêerskrywer en 'n plaasvervanger vir die ander program, nog nie binne Rhino of Grasshopper self nie. As iets daar misluk, vertel ons wat dit gesê het.
:::

## Stel dit op

1. Maak ModelCraft oop in Studio. Merk in {{ui:Instellings}} › {{ui:ModelCraft}} › {{ui:Assistente}} **Laat KI-assistente en skrifte ModelCraft gebruik**, en klik dan **Redigeer**.
2. Kies in Studio {{ui:Koppel 'n assistent}}. Dit wys die adres en die token wat jy hieronder sal plak.
3. Laai die skrip af: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Vanaf Rhino

1. Voer `cadcraft_link.py` uit in Rhino se skripredigeerder (Python 3 in Rhino 8).
2. Die eerste keer, plak die adres en die token. Hulle word in `.cadcraft-link.json` in jou tuisgids gehou, nooit in die model nie. Studio maak elke keer as dit begin 'n nuwe token, so die skrip vra dan weer.

Die hele model kom oor as een groep wat na die dokument genoem is, byvoorbeeld "chair (linked)". Daarna kom elke verandering oor wanneer jy 'n oomblik stilhou, en slegs die voorwerpe wat verander het, word gestuur. Voer die skrip weer uit om te stop.

## Vanaf Grasshopper

Voer die skrip eers een keer in Rhino uit, sodat die adres en token gestoor word.

1. Voeg 'n Skripkomponent (Python 3) by en plak die hele `cadcraft_link.py` daarin.
2. Gee dit hierdie insette: `G` (die geometrie, met lysttoegang), `N` ('n naam, opsioneel), `On` ('n boolese skakelaar) en `Target` (opsioneel: `model` of `part`, as albei programme oop is).
3. Stel `On` op waar.

Elke berekening stuur `G` oor en vervang wat die komponent die vorige keer gestuur het, so sleep van 'n skuifbalk werk die groep hier by. Die uitset `a` sê wat gebeur het. Elke komponent het sy eie groep.

## Wat jy met die groep kan doen

- **Skuif dit, merk dit, bou rondom dit.** Waar jy die groep en sy merker plaas, bly deur elke opdatering, en so ook alles langs dit.
- **Moenie binne-in dit wysig nie.** Elke opdatering vervang wat binne die groep is. Die ander program besit daardie voorwerpe.
- **Ontdoen.** Opdaterings binne twee sekondes van mekaar deel een ontdoen-stap, so {{key:Mod+Z}} neem 'n hele sleep terug. Die volgende opdatering bring die model terug om te pas.
- **Stoor.** Die gestoorde lêer hou die skakel. Voer die skrip weer uit nadat jy dit oopmaak, en dieselfde groep werk by.

## Wat oorkom

Maasse, polioppervlaktes, oppervlaktes en ekstrusies as die maas wat jy op die skerm sien, SubD as sy maas, krommes as rande, blokke as aparte voorwerpe waar hulle staan (nie as komponente nie), lae as merkers, kleure en eenhede. Sien [Voer 'n .3dm-model in](topic:import-3dm-files) vir hoe dit hier verskyn.

Uitgelaat, met 'n telling in die ander program: punte, teks, afmetings, ligte en dergelyke.

**Net een rigting.** Veranderinge hier gaan nie terug na die ander program nie.

## As iets verkeerd gaan

- **"Geen ModelCraft- of PartCraft-venster laat dit toe nie":** doen stap 1 van die opstelling.
- **"Studio het die token geweier":** Studio is herbegin. Kopieer die nuwe token en voer die skrip weer uit. Vir Grasshopper, voer dit eers in Rhino uit.
- **"Kan nie CadCraft Studio bereik nie":** Studio loop nie, of die adres het verander nie.
