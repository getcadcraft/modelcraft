---
title: Taster og museaksjoner
summary: Alle hurtigtaster, museaksjoner, styreplategester og berøringsgester i ModelCraft, gruppert etter hva de gjør.
keywords: tastatur, hurtigtaster, taster, mus, styreplate, berøring, gester, hurtigoversikt, ctrl, kommando, piltaster
from: e2348957
---

Dette er Trykk/trekk-tastene, de ModelCraft starter med. For den andre stilen, se [Modeler-taster](topic:keyboard#modeler-keys) nedenfor og [ModelCraft-innstillinger](topic:settings).

Snarveier fungerer når 3D-visningen eller en verktøylinjeknapp har fokus. Hvis du nettopp skrev i et panelfelt eller endret en liste i {{ui:Stil}}, klikk først i 3D-visningen, ellers går tastene til det feltet. Se [Taster, mus og styreplater](common:keys) for hvordan taster skrives på hver datamaskin.

## Verktøy

| Tast | Verktøy |
|---|---|
| {{key:Space}} | {{ui:Velg}} |
| {{key:L}} | {{ui:Linje}} |
| {{key:R}} | {{ui:Rektangel}} |
| {{key:C}} | {{ui:Sirkel}} |
| {{key:N}} | {{ui:Mangekant}} |
| {{key:A}} | {{ui:Bue}} |
| {{key:F}} | {{ui:Forskyv}} |
| {{key:B}} | {{ui:Mal}} |
| {{key:P}} | {{ui:Trykk/trekk}} |
| {{key:M}} | {{ui:Flytt}} |
| {{key:Q}} | {{ui:Roter}} |
| {{key:S}} | {{ui:Skaler}} |
| {{key:E}} | {{ui:Viskelær}} |
| {{key:T}} | {{ui:Målebånd}}-måling |
| {{key:D}} | {{ui:Mål}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Panorer}} |
| {{key:Z}} | {{ui:Zoom}} |

Verktøybokstaver fungerer bare uten endringstaster: {{key:Shift}} med en bokstav gjør ingenting, unntatt de to nedenfor.

## Modell og fil

| Tast | Gjør |
|---|---|
| {{key:G}} | Lag komponent av utvalget |
| {{key:Shift+G}} | Lag gruppe av utvalget |
| {{key:Shift+Z}} | Zoom utstrekning (hele modellen) |
| {{key:Mod+Z}} | Angre |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gjør om |
| {{key:Mod+S}} | Lagre (laster ned `.modelcraft`-filen) |
| {{key:Mod+O}} | Åpne en modell |
| {{key:Mod+A}} | Velg alt (i den åpne gruppen, hvis en er åpen) |
| {{key:Mod+C}} | Kopier utvalget |
| {{key:Mod+X}} | Klipp ut utvalget |
| {{key:Mod+V}} | Lim inn: kopien følger pekeren, klikk der den skal stå |
| {{key:Mod+Shift+V}} | Lim inn på samme sted (der den ble kopiert fra) |
| {{key:Mod+D}} | Dupliser: en kopi flytter seg med pekeren, klikk for å sette den ned |
| {{key:Delete}} eller {{key:Backspace}} | Slett utvalget |
| {{key:PageDown}} / {{key:PageUp}} | Neste / forrige scene |
| {{key:F1}} | Åpne eller lukk denne hjelpen (også {{ui:Hjelp}} i appbaren; {{key:Esc}} inne i hjelpen lukker den) |
| {{key:Ctrl+Shift+F}} | Skjermmodus: fullskjerm, deretter med menylinjer og verktøylinjer skjult, deretter normal (Control på Mac også) |

## Esc

{{key:Esc}} går ett nivå tilbake hver gang du trykker den:

1. Avbryter det verktøyet holder på med (en linje som tegnes, et trykk/trekk, en flytting). Alt går tilbake.
2. Bytter til {{ui:Velg}}.
3. Fjerner utvalget.
4. Lukker gruppen du redigerer.

Den stopper også at scener spilles av. I verdiboksen tømmer {{key:Esc}} det du skrev og går tilbake til visningen.

## Mens et verktøy arbeider

| Tast | Gjør |
|---|---|
| En siffer, eller en av `. , - ' " [ < * /` | Begynner å skrive i verdiboksen |
| {{key:Enter}} | Bruker det du skrev i verdiboksen |
| {{key:Right}} | Låser til den røde aksen (trykk igjen for å låse opp) |
| {{key:Left}} | Låser til den grønne aksen |
| {{key:Up}} | Låser til den blå aksen |
| {{key:Down}} | Låser parallelt med den siste kanten du holdt over før første klikk |
| Hold {{key:Shift}} | Holder retningen du er fanget til, mens den holdes |
| {{key:Ctrl}}, {{key:Mod}} eller {{key:Alt}} (Flytt) | Veksler mellom å flytte og kopiere |

Piltastlåsing fungerer i {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Sirkel}}, {{ui:Mangekant}}, {{ui:Flytt}}, {{ui:Skaler}} og {{ui:Målebånd}} (når du måler fra et punkt), etter første klikk. {{ui:Trykk/trekk}} beveger seg alltid langs flatens retning og har ingen låser. I {{ui:Roter}} viser piltastene en "Låst"-melding etter første klikk, men endrer ikke vinkelen.

## Piltaster til andre tider

Når ingen verktøy holder på med noe, flytter piltastene kameraet:

| Tast | Gjør |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbit |
| {{key:Shift}} med en piltast | Panorer |

## Mus

| Handling | Gjør |
|---|---|
| Klikk | Bruker det gjeldende verktøyet |
| Trykk, dra, slipp | Samme som to klikk (for tegneverktøy); et boksutvalg (for {{ui:Velg}}); sletter underveis (for {{ui:Viskelær}}) |
| Dobbeltklikk | {{ui:Velg}}: flate med sine kanter, kant med sine flater, åpner en gruppe; tomt område lukker gruppen. {{ui:Trykk/trekk}}: gjentar forrige avstand |
| Trippelklikk | {{ui:Velg}}: alt som henger sammen |
| {{key:Shift}} + klikk | {{ui:Velg}}: veksle inn og ut av utvalget |
| {{key:Mod}} + klikk | {{ui:Velg}}: legg til i utvalget |
| {{key:Shift}} + {{key:Mod}} + klikk | {{ui:Velg}}: fjern fra utvalget |
| Dra med midtknappen | Orbit, med alle verktøy |
| {{key:Shift}} + dra med midtknappen | Panorer, med alle verktøy |
| Dra med høyreknappen | Panorer, med alle verktøy |
| Hjul | Zoom mot pekeren |

Det finnes ingen høyreklikk-meny.

## Styreplate

Hva en tofingersveip gjør, avhenger av {{ui:Innstillinger}} › {{ui:ModelCraft}} › Rulling:

| Gest | Styreplate (eller beregnet) | Musehjul |
|---|---|---|
| Tofingersveip | Orbit | Zoom mot pekeren |
| {{key:Shift}} + tofingersveip | Panorer | Zoom |
| Klyp | Zoom mot pekeren | Zoom mot pekeren |
| Tofingertrykk og dra (sekundærklikk holdt) | Panorer | Panorer |

Se [Orbit, panorering og zoom](topic:orbit-pan-zoom#on-a-trackpad) og [ModelCraft-innstillinger](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler-taster

Med {{ui:Innstillinger}} › {{ui:ModelCraft}} › {{ui:Kontroller}} satt til Modeler-stil:

| Tast | Gjør |
|---|---|
| {{key:W}} eller {{key:Space}} | {{ui:Velg}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Linje}} / {{ui:Rektangel}} / {{ui:Sirkel}} / {{ui:Mangekant}} |
| {{key:E}} | {{ui:Trykk/trekk}} (ekstruder) |
| {{key:T}} | {{ui:Målebånd}}-måling |
| {{key:D}} | {{ui:Mål}} |
| {{key:G}} | Flytt utvalget med én gang, fra pekeren |
| {{key:R}} | Roter utvalget om midten (blå akse) |
| {{key:S}} | Skaler utvalget om midten |
| {{key:X}} / {{key:Y}} / {{key:Z}} mens du flytter eller roterer | Låser den røde / grønne / blå aksen (igjen for å låse opp) |
| Klikk eller {{key:Enter}} | Sett det ned |
| {{key:Esc}} eller høyreklikk | Sett det tilbake |
| {{key:Shift+D}} | Dupliser og flytt kopien |
| {{key:X}} eller {{key:Delete}} | Slett utvalget |
| {{key:A}} / {{key:Alt+A}} | Velg alt / velg ingenting |
| {{key:Tab}} | Åpne det valgte gruppen eller komponenten; igjen for å lukke den |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Lag gruppe / lag komponent |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Forside / høyre / topp-visning ({{key:Mod}} for bakside / venstre / bunn) |
| Numpad {{key:5}} | Perspektiv på eller av |
| Numpad {{key:.}} | Zoom til utvalget |
| {{key:Home}} eller {{key:Shift+C}} | Zoom utstrekning |
| {{key:Shift+Tab}} | Fangst på eller av |
| Dra med midtknappen / med {{key:Shift}} / med {{key:Mod}} | Orbit / panorer / zoom |
| {{key:Alt}} + dra / {{key:Alt+Shift}} + dra | Orbit / panorer (ingen midtknapp nødvendig) |

Kopier, lim inn, angre, lagre og åpne beholder tastene som er listet over. Skrevne verdier, verdiboksen og {{ui:Trykk/trekk}} fungerer likt i begge stiler.

## Berøringsskjerm

| Gest | Gjør |
|---|---|
| Trykk | Et klikk med det gjeldende verktøyet |
| Dobbeltrykk | Et dobbeltklikk |
| Trykk, dra, løft | Samme som trykk, dra, slipp med en mus |
| To fingre: klyp | Zoom |
| To fingre: beveg sammen | Panorer ({{ui:Innstillinger}} › {{ui:ModelCraft}} › {{ui:Berøringsskjerm}} kan gjøre det til Orbit) |
| Tre fingre: beveg sammen | Orbit (Panorer når to fingre gjør Orbit) |
| Hold én finger stille | Fullfører verktøyet, som Enter; når ingenting skjer, dra for å orbitere |
| En annen finger under en handling med én finger | Avbryter den handlingen |
| {{ui:Orbit}}-verktøyet, dra så med én finger | Orbit |

For å skrive en verdi på berøringsskjerm, trykk på verdiboksen nederst, skriv, og trykk tastaturets Enter-tast (eller Gå-tast).

## Hvor verktøyet Flytt ligger

{{ui:Flytt}}-verktøyet, tast {{key:M}}: velg hva du vil flytte, klikk et basispunkt, og deretter et andre punkt eller skriv inn en avstand. Se [Flytt, kopier og lag matriser](topic:move-copy).
