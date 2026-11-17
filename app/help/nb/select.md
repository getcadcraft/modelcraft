---
title: Velg objekter
summary: Klikk, dobbeltklikk og tredobbeltklikk, dra et vindu eller en kryssingsboks, legg til og fjern med modifikatortaster, og slett.
keywords: velg, utvalg, vindu, kryssing, legg til i utvalg, fjern fra utvalg, velg alle, tredobbeltklikk, dobbeltklikk, slett, fjern
from: d56d1f89
---

{{ui:Velg}} ({{key:Space}}) er verktøyet ModelCraft starter med, og det {{key:Esc}} fører deg tilbake til. Valgte ting blir blå, og {{ui:Elementinfo}} til høyre sier hva de er.

## Klikk

| Gjør dette | Velger |
|---|---|
| Klikk en flate eller en kant | Flaten eller kanten |
| Klikk en gruppe eller komponent | Hele gruppen eller komponenten |
| Dobbeltklikk en flate | Flaten og kantene |
| Dobbeltklikk en kant | Kanten og flatene på hver side |
| Dobbeltklikk en gruppe eller komponent | Åpner den for redigering (se [Grupper og komponenter](topic:groups-components)) |
| Tredobbeltklikk en flate eller kant | Alt som henger sammen med den: hele objektet |
| Klikk tomt rom | Ingenting (fjerner utvalget) |
| Dobbeltklikk tomt rom mens du redigerer en gruppe | Lukker gruppen |

Kanter er lettere å treffe enn flater: når pekeren er innenfor noen få piksler fra en kant, tar klikket kanten.

## Dra en boks

- **Venstre mot høyre** tegner en heldekkende boks: et **vindusutvalg**. Bare ting som ligger helt inne i den, blir valgt.
- **Høyre mot venstre** tegner en stiplet boks: et **kryssingsutvalg**. Alt boksen berører, blir valgt, og en flate blir valgt når boksen ligger helt inne i den.

En gruppe eller komponent regnes som ett objekt: et vindu må holde hele den, et kryssing må bare berøre den.

## Legg til og fjern

Hold en tast nede mens du klikker eller drar:

| Tast | Effekt |
|---|---|
| {{key:Shift}} | Veksler: legger til det som ikke er valgt, fjerner det som er valgt |
| {{key:Mod}} | Legger til |
| {{key:Shift}} og {{key:Mod}} sammen | Fjerner |

For å velge alt i modellen (eller alt i gruppen du redigerer), trykk {{key:Mod+A}}.

## Fjern utvalget

Trykk {{key:Esc}} (med {{ui:Velg}} som verktøy), eller klikk tomt rom.

## Slett det som er valgt

Trykk {{key:Delete}} eller {{key:Backspace}}. Flater, kanter, grupper og hjelpelinjer i utvalget fjernes i ett steg; {{key:Mod+Z}} henter dem tilbake.

Å slette en kant fjerner flatene som trenger den, med mindre kanten bare skilte to flater i samme plan: da blir de to flatene til én. Å slette en flate lar kantene bli. Se [Slett og rydd opp](topic:erase).

## Velg inni en gruppe

Klikk på en gruppe velger hele gruppen. For å velge en flate inni den, dobbeltklikk gruppen for å åpne den, og klikk deretter. Mens en gruppe er åpen, når klikk bare det som er inni den; alt annet er tonet ned. Trykk {{key:Esc}} uten noe valgt, eller dobbeltklikk tomt rom, for å lukke den.

{{ui:Oversikt}} til venstre velger grupper og komponenter etter navn, noe som hjelper når de er skjult bak andre ting.
