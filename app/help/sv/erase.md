---
title: Radera och städa upp
summary: Radera kanter, grupper och hjälplinjer med radergummit eller tangenten Delete, läk delade ytor och rätta ytor som vetter åt fel håll.
keywords: radera, radergummi, delete, ta bort, läk, slå ihop ytor, städa upp, lösa linjer, vänd yta, baksida, ångra
from: 80b92a81
---

## Radera med radergummit

1. Tryck på {{key:E}} för {{ui:Radergummi}}.
2. Klicka på en kant, en grupp eller komponent, eller en hjälplinje. Den raderas.
3. För att radera flera, tryck och dra över dem. Allt du passerar markeras, och allt tas bort när du släpper.

Radergummit väljer inte ytor: en yta försvinner när du raderar de kanter den behöver. Ytor är det radergummit söker igenom för att hitta kanter.

## Vad som händer med ytorna

- **En kant mellan två ytor i samma plan** (till exempel en linje du ritat över ett golv) försvinner, och de två ytorna **läks** till en.
- **En kant som en yta behöver för att vara sluten** (kanten på en låda) tar med sig den ytan. Radera en övre kant på en låda, så försvinner både locket och en sida, och kvar blir en öppen låda.
- **Lösa ändar** (punkter som ingen kant längre använder) städas bort.

Att radera sista kopian av en komponent tar också bort komponenten från panelen {{ui:Komponenter}}.

## Radera med tangenten Delete

1. Markera det du vill ta bort med {{ui:Markera}}.
2. Tryck på {{key:Delete}} eller {{key:Backspace}}.

Detta tar bort ytor också. En yta som tas bort på det här sättet lämnar sina kanter kvar, så du kan ta bort locket på en låda och behålla dess kontur, och sedan rita något annat där.

## Städa upp lösa linjer på en plan yta

Om en vägg eller ett golv visar linjer du inte vill ha (rester från ritandet), radera dem med {{ui:Radergummi}}. Linjer som ligger i ytan läks bort; ytan står kvar.

## En yta som vetter åt fel håll

En yta sedd bakifrån är blågrå. Om en yta visar blågrått på utsidan av din modell:

1. Markera ytan.
2. Klicka på {{ui:Vänd ytan}} i {{ui:Entitetsinfo}}.

Ytans riktning spelar störst roll vid export: renderare, spelmotorer och 3D-skrivare kan dölja eller feltolka ytor som pekar inåt.

## Ångra ett misstag

{{key:Mod+Z}} ångrar ett steg i taget, {{key:Mod+Y}} (eller {{key:Mod+Shift+Z}}) gör om. Ett drag med radergummit är ett steg, oavsett hur många saker det tog. Statusfältet visar vad som ångrades: "Ångrade radering."
