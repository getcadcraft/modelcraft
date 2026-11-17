---
title: Viske ut og rydde opp
summary: Viske ut kanter, grupper og hjelpelinjer med viskelæret eller Delete-tasten, reparer delte flater, og rett flater som vender feil vei.
keywords: viske ut, viskelær, slett, fjern, reparer, slå sammen flater, rydd opp, løse linjer, snu flate, baksideflate, angre
from: 80b92a81
---

## Viske ut med viskelæret

1. Trykk {{key:E}} for {{ui:Viskelær}}.
2. Klikk en kant, en gruppe eller komponent, eller en hjelpelinje. Den viskes ut.
3. For å viske ut flere, trykk og dra over dem. Alt du passerer blir uthevet, og alt går når du slipper.

Viskelæret velger ikke flater: en flate forsvinner når du viske ut kantene den trenger. Flater er det viskelæret ser gjennom for å finne kanter.

## Hva som skjer med flatene

- **En kant mellom to flater i samme plan** (en linje du tegnet over et gulv, for eksempel) forsvinner, og de to flatene **slår seg sammen** til én.
- **En kant som en flate trenger for å være lukket** (kanten på en boks) tar flaten med seg. Viske ut én øverste kant på en boks, så går toppen og én side, og du står igjen med en åpen boks.
- **Løse ender** (punkter som ingen kant bruker lenger) ryddes bort.

Viske ut den siste kopien av en komponent fjerner også komponenten fra {{ui:Komponenter}}-panelet.

## Viske ut med Delete-tasten

1. Velg det du vil fjerne med {{ui:Velg}}.
2. Trykk {{key:Delete}} eller {{key:Backspace}}.

Dette fjerner også flater. En flate slettet på denne måten etterlater kantene sine, så du kan slette toppen av en boks og beholde omrisset, og så tegne noe annet der.

## Rydd opp i løse linjer på en flat flate

Hvis en vegg eller et gulv viser linjer du ikke vil ha (rester fra tegning), viske dem ut med {{ui:Viskelær}}. Linjer som ligger i flaten, slår seg sammen og forsvinner; flaten består.

## En flate som vender feil vei

En flate sett bakfra er blågrå. Hvis en flate viser blågrå på utsiden av modellen din:

1. Velg flaten.
2. Klikk {{ui:Snu flaten}} i {{ui:Elementinfo}}.

Flateretningen betyr mest når du eksporterer: gjengivelsesprogrammer, spillmotorer og 3D-skrivere kan skjule eller feiltolke flater som peker innover.

## Angre en feil

{{key:Mod+Z}} angrer ett trinn om gangen, {{key:Mod+Y}} (eller {{key:Mod+Shift+Z}}) gjør om. Et drag med viskelæret er ett trinn, uansett hvor mange ting det tok. Statuslinjen sier hva som ble angret: «Angret: viske ut.»
