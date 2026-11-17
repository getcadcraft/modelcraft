---
title: Vælg objekter
summary: Klik, dobbeltklik og tredobbeltklik, træk en vindues- eller krydsboks, tilføj og fjern med modifikationstaster, og slet.
keywords: vælg, valg, vindue, kryds, tilføj til valg, fravælg, vælg alle, tredobbeltklik, dobbeltklik, slet, udslet
from: d56d1f89
---

{{ui:Vælg}} ({{key:Space}}) er det værktøj, ModelCraft starter med, og det du kommer tilbage til med {{key:Esc}}. Valgte ting bliver blå, og {{ui:Objektinfo}} til højre fortæller, hvad de er.

## Klik

| Gør dette | Vælger |
|---|---|
| Klik på en flade eller en kant | Den flade eller kant |
| Klik på en gruppe eller komponent | Hele gruppen eller komponenten |
| Dobbeltklik på en flade | Fladen og dens kanter |
| Dobbeltklik på en kant | Kanten og fladerne på hver side |
| Dobbeltklik på en gruppe eller komponent | Åbner den til redigering (se [Grupper og komponenter](topic:groups-components)) |
| Tredobbeltklik på en flade eller kant | Alt, der hænger sammen med den: hele objektet |
| Klik på et tomt område | Intet (rydder valget) |
| Dobbeltklik på et tomt område, mens en gruppe redigeres | Lukker gruppen |

Kanter er lettere at ramme end flader: når markøren er få pixels fra en kant, tager klikket kanten.

## Træk en boks

- **Fra venstre mod højre** tegner en fuldt optrukket boks: et **vindues**-valg. Kun ting, der helt ligger inde i den, bliver valgt.
- **Fra højre mod venstre** tegner en stiplet boks: et **kryds**-valg. Alt, boksen rører, bliver valgt, og en flade bliver valgt, når boksen ligger helt inde i den.

En gruppe eller komponent tæller som én ting: et vindue skal indeholde hele den, et kryds skal blot røre den.

## Tilføj og fjern

Hold en tast nede, mens du klikker eller trækker:

| Tast | Virkning |
|---|---|
| {{key:Shift}} | Skifter: tilføjer det, der ikke er valgt, og fjerner det, der er |
| {{key:Mod}} | Tilføjer |
| {{key:Shift}} og {{key:Mod}} sammen | Fjerner |

For at vælge alt i modellen (eller alt i den gruppe, du redigerer), tryk {{key:Mod+A}}.

## Ryd valget

Tryk {{key:Esc}} (med {{ui:Vælg}} som værktøj), eller klik på et tomt område.

## Slet det valgte

Tryk {{key:Delete}} eller {{key:Backspace}}. Flader, kanter, grupper og hjælpelinjer i valget fjernes i ét trin; {{key:Mod+Z}} får dem tilbage.

Sletning af en kant fjerner de flader, der har brug for den, medmindre kanten kun skilte to flader i samme plan: så sammenføjes de to flader til én. Sletning af en flade efterlader dens kanter. Se [Slet og ryd op](topic:erase).

## Vælg inde i en gruppe

Klik på en gruppe vælger hele gruppen. For at vælge en flade inde i den, dobbeltklik på gruppen for at åbne den, og klik derefter. Mens en gruppe er åben, når klik kun det, der er inde i den; alt andet er falmet. Tryk {{key:Esc}} uden noget valgt, eller dobbeltklik på et tomt område, for at lukke den.

{{ui:Oversigt}} til venstre vælger grupper og komponenter efter navn, hvilket hjælper, når de er skjult bag andre ting.
