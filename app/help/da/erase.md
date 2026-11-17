---
title: Slet og ryd op
summary: Slet kanter, grupper og hjælpelinjer med viskelæderet eller Delete-tasten, sammenlæg delte flader, og ret flader, der vender den forkerte vej.
keywords: slet, viskelæder, delete, fjern, reparér, sammenlæg flader, ryd op, løse linjer, vend fladen om, bagside, fortryd
from: 80b92a81
---

## Slet med viskelæderet

1. Tryk på {{key:E}} for {{ui:Viskelæder}}.
2. Klik på en kant, en gruppe eller komponent, eller en hjælpelinje. Den slettes.
3. For at slette flere, tryk og træk hen over dem. Alt, du passerer over, markeres, og det hele går, når du slipper.

Viskelæderet vælger ikke flader: en flade går, når du sletter de kanter, den har brug for. Flader er det, viskelæderet kigger igennem for at finde kanter.

## Hvad sker der med fladerne

- **En kant mellem to flader i samme plan** (en linje, du har tegnet hen over et gulv, fx) forsvinder, og de to flader smelter sammen til én.
- **En kant, som en flade skal bruge for at forblive lukket** (kanten på en kasse) tager den flade med sig. Slet én øverste kant på en kasse, og top og én side går og efterlader en åben kasse.
- **Løse ender** (punkter, som ingen kant bruger længere) bliver ryddet op.

Sletning af den sidste kopi af en komponent fjerner også komponenten fra panelet {{ui:Komponenter}}.

## Slet med Delete-tasten

1. Vælg det, du vil fjerne, med {{ui:Vælg}}.
2. Tryk på {{key:Delete}} eller {{key:Backspace}}.

Dette fjerner også flader. En flade slettet på denne måde efterlader sine kanter, så du kan slette toppen af en kasse og beholde dens omrids og tegne noget andet dér.

## Ryd op i løse linjer på en flad flade

Hvis en væg eller et gulv viser linjer, du ikke vil have (rester fra tegning), så slet dem med {{ui:Viskelæder}}. Linjer, der ligger i fladen, smelter væk; fladen forbliver.

## En flade, der vender den forkerte vej

En flade set bagfra er blågrå. Hvis en flade viser blågrå på ydersiden af din model:

1. Vælg fladen.
2. Klik på {{ui:Vend fladen om}} i {{ui:Objektinfo}}.

Fladens retning betyder mest, når du eksporterer: renderere, spilmotorer og 3D-printere kan skjule eller misforstå flader, der peger indad.

## Fortryd en fejl

{{key:Mod+Z}} fortryder ét trin ad gangen, {{key:Mod+Y}} (eller {{key:Mod+Shift+Z}}) gentager. Et træk med viskelæderet er ét trin, uanset hvor mange ting det tog. Statuslinjen angiver, hvad der blev fortrudt: »Fortrudt: slet.«
