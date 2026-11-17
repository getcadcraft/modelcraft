---
title: Taster og musehandlinger
summary: Alle tastaturgenveje, museshandlinger, trackpad-bevægelser og touch-bevægelser i ModelCraft, grupperet efter hvad de gør.
keywords: tastatur, genveje, taster, hurtigtaster, mus, trackpad, touch, bevægelser, huskeliste, ctrl, kommando, piletaster
from: e2348957
---

Det er skub/træk-tasterne, ModelCraft starter med. For den anden stil, se [Modeler-taster](topic:keyboard#modeler-keys) nedenfor og [ModelCraft-indstillinger](topic:settings).

Genveje virker, når 3D-visningen eller en værktøjslinjeknap har fokus. Hvis du lige har skrevet i et panelfelt eller ændret en liste i {{ui:Stil}}, klik i 3D-visningen først, ellers går dine taster til feltet. Se [Taster, mus og trackpads](common:keys) for, hvordan taster skrives på hver computer.

## Værktøjer

| Tast | Værktøj |
|---|---|
| {{key:Space}} | {{ui:Vælg}} |
| {{key:L}} | {{ui:Linje}} |
| {{key:R}} | {{ui:Rektangel}} |
| {{key:C}} | {{ui:Cirkel}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Bue}} |
| {{key:F}} | {{ui:Forskyd}} |
| {{key:B}} | {{ui:Maling}} |
| {{key:P}} | {{ui:Skub/træk}} |
| {{key:M}} | {{ui:Flyt}} |
| {{key:Q}} | {{ui:Roter}} |
| {{key:S}} | {{ui:Skalér}} |
| {{key:E}} | {{ui:Viskelæder}} |
| {{key:T}} | {{ui:Målebånd}} (måling) |
| {{key:D}} | {{ui:Mål}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Panorér}} |
| {{key:Z}} | {{ui:Zoom}} |

Værktøjsbogstaver virker kun uden modifikatortaster: {{key:Shift}} med et bogstav gør ingenting, undtagen de to nedenfor.

## Model og fil

| Tast | Gør |
|---|---|
| {{key:G}} | Lav komponent af valget |
| {{key:Shift+G}} | Lav gruppe af valget |
| {{key:Shift+Z}} | Zoom til udstrækning (hele modellen) |
| {{key:Mod+Z}} | Fortryd |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gentag |
| {{key:Mod+S}} | Gem (henter `.modelcraft`-filen) |
| {{key:Mod+O}} | Åbn en model |
| {{key:Mod+A}} | Vælg alt (i den åbne gruppe, hvis en er åben) |
| {{key:Mod+C}} | Kopiér valget |
| {{key:Mod+X}} | Klip valget |
| {{key:Mod+V}} | Sæt ind: kopien følger markøren, klik hvor den skal stå |
| {{key:Mod+Shift+V}} | Sæt ind på samme sted (hvor den blev kopieret fra) |
| {{key:Mod+D}} | Duplikér: en kopi flytter sig med markøren, klik for at sætte den ned |
| {{key:Delete}} eller {{key:Backspace}} | Slet valget |
| {{key:PageDown}} / {{key:PageUp}} | Næste / forrige scene |
| {{key:F1}} | Åbn eller luk denne hjælp (også {{ui:Hjælp}} i appens bjælke; {{key:Esc}} i hjælpen lukker den) |
| {{key:Ctrl+Shift+F}} | Skærmtilstand: fuld skærm, derefter skjulte bjælker, derefter normal (Control på en Mac også) |

## Esc

{{key:Esc}} går ét trin tilbage, hver gang du trykker:

1. Annullerer det, værktøjet er midt i (en linje, der tegnes, et skub/træk, en flytning). Alt går tilbage.
2. Skifter til {{ui:Vælg}}.
3. Fjerner valget.
4. Lukker gruppen, du redigerer.

Det stopper også scener i at spille. I værdifeltet rydder {{key:Esc}} det, du har skrevet, og vender tilbage til visningen.

## Mens et værktøj arbejder

| Tast | Gør |
|---|---|
| Et ciffer, eller et af `. , - ' " [ < * /` | Begynder at skrive i værdifeltet |
| {{key:Enter}} | Anvender det, du skrev i værdifeltet |
| {{key:Right}} | Låser til den røde akse (tryk igen for at låse op) |
| {{key:Left}} | Låser til den grønne akse |
| {{key:Up}} | Låser til den blå akse |
| {{key:Down}} | Låser parallelt med den sidste kant, du svævede over før første klik |
| Hold {{key:Shift}} | Holder den retning, du er fanget til, mens den holdes nede |
| {{key:Ctrl}}, {{key:Mod}} eller {{key:Alt}} ({{ui:Flyt}}) | Skifter mellem at flytte og kopiere |

Piletastlåse virker i {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Cirkel}}, {{ui:Polygon}}, {{ui:Flyt}}, {{ui:Skalér}} og {{ui:Målebånd}} (når du måler fra et punkt), efter første klik. {{ui:Skub/træk}} bevæger sig altid i fladens retning og har ingen låse. I {{ui:Roter}} viser piletasterne en »Låst«-besked efter første klik, men ændrer ikke drejningen.

## Piletaster til andre tider

Når intet værktøj er midt i noget, flytter piletasterne kameraet:

| Tast | Gør |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | {{ui:Orbit}} |
| {{key:Shift}} med en piletast | {{ui:Panorér}} |

## Mus

| Handling | Gør |
|---|---|
| Klik | Bruger det aktuelle værktøj |
| Tryk, træk, slip | Samme som to klik (for tegneværktøjer); et boksvalg (for {{ui:Vælg}}); sletter undervejs (for {{ui:Viskelæder}}) |
| Dobbeltklik | {{ui:Vælg}}: flade med sine kanter, kant med sine flader, åbner en gruppe; tomt rum lukker gruppen. {{ui:Skub/træk}}: gentager sidste afstand |
| Tripelklik | {{ui:Vælg}}: alt, der hænger sammen |
| {{key:Shift}} + klik | {{ui:Vælg}}: skifter valg ind og ud |
| {{key:Mod}} + klik | {{ui:Vælg}}: tilføjer til valget |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Vælg}}: fjerner fra valget |
| Træk med midterknap | {{ui:Orbit}}, med alle værktøjer |
| {{key:Shift}} + træk med midterknap | {{ui:Panorér}}, med alle værktøjer |
| Træk med højreknap | {{ui:Panorér}}, med alle værktøjer |
| Hjul | Zoom mod markøren |

Der er ingen højreklikmenu.

## Trackpad

Det, en to-fingers-stryg gør, afhænger af {{ui:Indstillinger}} › {{ui:ModelCraft}} › Rulning:

| Bevægelse | Trackpad (eller afledt) | Museshjul |
|---|---|---|
| To-fingers-stryg | {{ui:Orbit}} | Zoom mod markøren |
| {{key:Shift}} + to-fingers-stryg | {{ui:Panorér}} | Zoom |
| Knib | Zoom mod markøren | Zoom mod markøren |
| To fingre: tryk og træk (sekundærklik holdt) | {{ui:Panorér}} | {{ui:Panorér}} |

Se [Orbit, panorering og zoom](topic:orbit-pan-zoom#on-a-trackpad) og [ModelCraft-indstillinger](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler-taster

Med {{ui:Indstillinger}} › {{ui:ModelCraft}} › Betjening sat til Modeler-stil:

| Tast | Gør |
|---|---|
| {{key:W}} eller {{key:Space}} | {{ui:Vælg}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Linje}} / {{ui:Rektangel}} / {{ui:Cirkel}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Skub/træk}} (ekstruder) |
| {{key:T}} | {{ui:Målebånd}} (måling) |
| {{key:D}} | {{ui:Mål}} |
| {{key:G}} | Flyt valget med det samme, fra markøren |
| {{key:R}} | Roter valget om dets midte (blå akse) |
| {{key:S}} | Skalér valget om dets midte |
| {{key:X}} / {{key:Y}} / {{key:Z}} under flytning eller rotation | Låser den røde / grønne / blå akse (igen for at låse op) |
| Klik eller {{key:Enter}} | Sæt det ned |
| {{key:Esc}} eller højreklik | Læg det tilbage |
| {{key:Shift+D}} | Duplikér og flyt kopien |
| {{key:X}} eller {{key:Delete}} | Slet valget |
| {{key:A}} / {{key:Alt+A}} | Vælg alt / vælg intet |
| {{key:Tab}} | Åbn den valgte gruppe eller komponent; igen for at lukke den |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Lav gruppe / lav komponent |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Forfra / højre / oppefra ({{key:Mod}} for bagfra / venstre / bund) |
| Numpad {{key:5}} | Perspektiv til eller fra |
| Numpad {{key:.}} | Zoom til valget |
| {{key:Home}} eller {{key:Shift+C}} | Zoom til udstrækning |
| {{key:Shift+Tab}} | Fangning til eller fra |
| Træk med midterknap / med {{key:Shift}} / med {{key:Mod}} | {{ui:Orbit}} / {{ui:Panorér}} / zoom |
| {{key:Alt}} + træk / {{key:Alt+Shift}} + træk | {{ui:Orbit}} / {{ui:Panorér}} (uden midterknap) |

Kopiér, sæt ind, fortryd, gem og åbn beholder de taster, der står ovenfor. Indtastede værdier, værdifeltet og {{ui:Skub/træk}} virker ens i begge stile.

## Touchskærm

| Bevægelse | Gør |
|---|---|
| Tap | Et klik med det aktuelle værktøj |
| Dobbelttap | Et dobbeltklik |
| Tryk, træk, løft | Samme som tryk, træk, slip med en mus |
| To fingre: knib | Zoom |
| To fingre: bevæg dem sammen | {{ui:Panorér}} (Indstillinger › ModelCraft › Touchskærm kan gøre det til {{ui:Orbit}}) |
| Tre fingre: bevæg dem sammen | {{ui:Orbit}} ({{ui:Panorér}}, når to fingre drejer) |
| Hold én finger stille | Afslutter værktøjet, som {{key:Enter}}; når intet foregår, træk derefter for at dreje visningen |
| En anden finger under en handling med én finger | Annullerer den handling |
| {{ui:Orbit}}-værktøjet, træk derefter med én finger | {{ui:Orbit}} |

For at skrive en værdi på en touchskærm, tryk på værdifeltet nederst, skriv, og tryk på tastaturets Enter- (eller Go-) tast.

## Hvor Flyt findes

{{ui:Flyt}} findes i værktøjet {{ui:Flyt}}, tast {{key:M}}: vælg hvad der skal flyttes, klik et basispunkt, og klik derefter på et andet punkt eller skriv en afstand. Se [Flyt, kopiér og lav arrays](topic:move-copy).
