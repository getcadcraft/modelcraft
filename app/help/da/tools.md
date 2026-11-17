---
title: Værktøjsliste
summary: Hvert ModelCraft-værktøj med sin tast, hvad hvert klik gør, og hvad du kan skrive i værdifeltet, mens det arbejder.
keywords: værktøjer, værktøjslinje, kommandoer, liste, linje, rektangel, cirkel, polygon, forskyd, bue, kurve, spline, følg mig, sweep, 2-punkts bue, bue fra centrum, vælg, skub/træk, flyt, roter, skalér, viskelæder, målebånd, mål, kredsløb, panorér, zoom, placér komponent
from: e08a274f
---

Statuslinjens tip siger altid, hvad det aktuelle værktøj vil have næste. {{key:Esc}} annullerer det, et værktøj er midt i.

## Tegneværktøjer

| Værktøj | Tast | Klik | Skriv i værdifeltet |
|---|---|---|---|
| {{ui:Linje}} | {{key:L}} | Start, derefter hvert næste punkt. Stopper når en flade lukkes, eller ved {{key:Esc}} | En længde mod markøren; `[x,y,z]` et punkt; `<dx,dy,dz>` en forskydning ({{ui:Længde}}) |
| {{ui:Rektangel}} | {{key:R}} | Første hjørne (jord eller en flade), modsat hjørne | Bredde og dybde: `4m,3m` ({{ui:Mål}}) |
| {{ui:Cirkel}} | {{key:C}} | Centrum (jord eller en flade), et punkt på kanten | Før første klik: sider, `24s` eller `24` ({{ui:Sider}}). Efter: radius ({{ui:Radius}}) |
| {{ui:Polygon}} | {{key:N}} | Centrum, et hjørne | Samme som Cirkel; starter med 6 sider |
| {{ui:Bue}} | {{key:A}} | Start, slut, derefter buens udbuling | Længden af korden efter start ({{ui:Længde}}); udbulingen efter slut ({{ui:Udbuling}}); `12s` for segmenter |
| {{ui:Vinkelmåler}} | — | Centrum, 0°-punktet, derefter vinklen | Vinklen i grader ({{ui:Vinkel}}) |
| {{ui:Følg mig}} | — | Vælg en sti, og klik derefter på fladen (eller klik på fladen, og derefter på en kant på stien) | — |
| {{ui:Maling}} | {{key:B}} | En flade, gruppe eller komponent | — ({{key:Ctrl}} sammenhængende, {{key:Shift}} alt i den farve, {{key:Alt}} tag en farve) |
| {{ui:Forskyd}} | {{key:F}} | En flade (eller vælg først en flade eller kanter), derefter siden og afstanden | Afstanden ({{ui:Afstand}}); ind i fladen er indad |
| {{ui:Kurve}} | — | Punkter kurven går igennem; {{key:Enter}} eller et dobbeltklik afslutter | En længde langs markøren, `[x,y,z]` eller `<dx,dy,dz>` for det næste punkt |
| {{ui:Bue fra centrum}} | — | Centrum, start, derefter slut | Radius efter centrum; vinklen i grader efter start; `12s` for segmenter |

## Redigeringsværktøjer

| Værktøj | Tast | Klik | Skriv i værdifeltet |
|---|---|---|---|
| {{ui:Vælg}} | {{key:Space}} | Klik, dobbeltklik, tredobbeltklik, træk en boks. Se [Vælg ting](topic:select) | Med én måling eller kant valgt: en ny længde, som ændrer størrelsen på modellen |
| {{ui:Skub/træk}} | {{key:P}} | Fladen, derefter afstanden. Dobbeltklik på en flade for at gentage den sidste afstand | En afstand; negativ går den modsatte vej ({{ui:Afstand}}) |
| {{ui:Flyt}} | {{key:M}} | Fra et punkt, til et punkt. Hold {{key:Ctrl}} eller {{key:Alt}} nede for at kopiere | En afstand mod markøren, `<dx,dy,dz>` eller `[x,y,z]` ({{ui:Afstand}}). Efter en kopi: `3x` eller `/3` |
| {{ui:Roter}} | {{key:Q}} | Centrum (på en flade for at dreje i dens plan), startretning, slutretning | Vinklen i grader ({{ui:Vinkel}}) |
| {{ui:Skalér}} | {{key:S}} | Punktet der bliver, et referencepunkt, den nye størrelse | En faktor: `2`, `0.5` ({{ui:Skalér}}) |
| {{ui:Viskelæder}} | {{key:E}} | Klik eller træk hen over kanter, grupper, hjælpelinjer og mål | intet |
| {{ui:Målebånd}} | {{key:T}} | Fra en kant: en parallel hjælpelinje. Fra et punkt: måler og efterlader et hjælpepunkt | Forskydningen ({{ui:Forskyd}}) eller afstanden ({{ui:Længde}}) |
| {{ui:Mål}} | {{key:D}} | To hjørner (eller én kant), derefter hvor målelinjen går. Se [Mål og ændr størrelse](topic:dimensions) | Forskydningen ({{ui:Forskyd}}). Lige efter: en ny længde, som ændrer størrelsen på modellen |

{{ui:Flyt}}, {{ui:Roter}} og {{ui:Skalér}} virker på valget. Hvis intet er valgt, tager de det, du klikker først på (en flade medbringer dens kanter).

## Kameraværktøjer

| Værktøj | Tast | Træk for at |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Dreje rundt om den del af modellen under markøren ({{key:Shift}} panorerer) |
| {{ui:Panorér}} | {{key:H}} | Skubbe visningen |
| {{ui:Zoom}} | {{key:Z}} | Zoome: op er ind, ned er ud |
| {{ui:Udstrækning}} | {{key:Shift+Z}} | (en knap, ikke et værktøj) Tilpas hele modellen |

Du har sjældent brug for disse med en mus: midterste-træk kredser, højre-træk panorerer, og hjulet zoomer med ethvert værktøj. Se [Orbit, panorér og zoom](topic:orbit-pan-zoom).

## Organisér

| Knap | Tast | Gør |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | Gør valget til en komponent |
| {{ui:Gruppe}} | {{key:Shift+G}} | Gør valget til en gruppe |
| {{ui:Eksplodér}} | ingen | Gør de valgte grupper og komponenter tilbage til løs geometri |

## Placér komponent

Ikke på værktøjslinjen: klik på {{ui:Placér}} ved siden af en komponent i panelet {{ui:Komponenter}}. Klik én gang, hvor komponentens origo skal være; værktøjet vender derefter tilbage til {{ui:Vælg}}.
