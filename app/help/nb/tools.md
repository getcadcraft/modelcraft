---
title: Verktøyliste
summary: Alle ModelCraft-verktøy med tasten, hva hvert klikk gjør, og hva som kan skrives i verdiboksen mens verktøyet arbeider.
keywords: verktøy, verktøylinje, kommandoer, liste, linje, rektangel, sirkel, mangekant, forskyv, bue, kurve, spline, følg meg, sveip, bue med to punkter, bue fra sentrum, velg, trykk/trekk, flytt, roter, skaler, viskelær, målebånd, mål, orbit, panorer, zoom, plasser komponent
from: e08a274f
---

Statuslinjens tips viser alltid hva det nåværende verktøyet vil ha neste. {{key:Esc}} avbryter det verktøyet holder på med.

## Tegneverktøy

| Verktøy | Tast | Klikk | Skriv i verdiboksen |
|---|---|---|---|
| {{ui:Linje}} | {{key:L}} | Start, deretter hvert neste punkt. Stopper når en flate lukkes, eller med {{key:Esc}} | En lengde mot pekeren; `[x,y,z]` et punkt; `<dx,dy,dz>` en forskyvning ({{ui:Lengde}}) |
| {{ui:Rektangel}} | {{key:R}} | Første hjørne (på bakken eller en flate), motsatt hjørne | Bredde og dybde: `4m,3m` ({{ui:Måltilsettinger}}) |
| {{ui:Sirkel}} | {{key:C}} | Senter (på bakken eller en flate), et punkt på kanten | Før første klikk: sider, `24s` eller `24` ({{ui:Sider}}). Etterpå: radiusen ({{ui:Radius}}) |
| {{ui:Mangekant}} | {{key:N}} | Senter, et hjørne | Samme som Sirkel; starter med 6 sider |
| {{ui:Bue}} | {{key:A}} | Start, slutt, deretter buingen | Lengden på korden etter start ({{ui:Lengde}}); buingen etter slutt ({{ui:Buing}}); `12s` for segmenter |
| {{ui:Vinkelmåler}} | — | Senter, 0°-punkt, deretter vinkelen | Vinkelen i grader ({{ui:Vinkel}}) |
| {{ui:Følg meg}} | — | Velg en bane, deretter klikk på flaten (eller klikk på flaten, deretter en kant på banen) | — |
| {{ui:Mal}} | {{key:B}} | En flate, gruppe eller komponent | — ({{key:Ctrl}} sammenhengende, {{key:Shift}} alt med den fargen, {{key:Alt}} plukk en farge) |
| {{ui:Forskyv}} | {{key:F}} | En flate (eller velg en flate eller kanter først), deretter siden og avstanden | Avstanden ({{ui:Avstand}}); inn i flaten er innover |
| {{ui:Kurve}} | — | Punktene kurven går gjennom; {{key:Enter}} eller dobbeltklikk fullfører | En lengde langs pekeren, `[x,y,z]` eller `<dx,dy,dz>` for neste punkt |
| {{ui:Bue fra sentrum}} | — | Senter, start, deretter slutt | Radiusen etter senteret; vinkelen i grader etter start; `12s` for segmenter |

## Redigeringsverktøy

| Verktøy | Tast | Klikk | Skriv i verdiboksen |
|---|---|---|---|
| {{ui:Velg}} | {{key:Space}} | Klikk, dobbeltklikk, trippelklikk, dra en boks. Se [Velg ting](topic:select) | Med én måltilsetting eller kant valgt: en ny lengde, som endrer størrelsen på modellen |
| {{ui:Trykk/trekk}} | {{key:P}} | Flaten, deretter avstanden. Dobbeltklikk en flate for å gjenta siste avstand | En avstand; negativ går motsatt vei ({{ui:Avstand}}) |
| {{ui:Flytt}} | {{key:M}} | Fra et punkt, til et punkt. Hold {{key:Ctrl}} eller {{key:Alt}} for å kopiere | En avstand mot pekeren, `<dx,dy,dz>` eller `[x,y,z]` ({{ui:Avstand}}). Etter en kopi: `3x` eller `/3` |
| {{ui:Roter}} | {{key:Q}} | Senter (på en flate for å vri i dens plan), startretning, sluttretning | Vinkelen i grader ({{ui:Vinkel}}) |
| {{ui:Skaler}} | {{key:S}} | Punktet som består, et referansepunkt, den nye størrelsen | En faktor: `2`, `0.5` ({{ui:Skaler}}) |
| {{ui:Viskelær}} | {{key:E}} | Klikk eller dra over kanter, grupper, hjelpelinjer og måltilsettinger | ingenting |
| {{ui:Målebånd}} | {{key:T}} | Fra en kant: en parallell hjelpelinje. Fra et punkt: måler og legger igjen et hjelpepunkt | Forskyvningen ({{ui:Forskyv}}) eller avstanden ({{ui:Lengde}}) |
| {{ui:Mål}} | {{key:D}} | To hjørner (eller én kant), deretter hvor målelinjen går. Se [Mål og endre størrelse](topic:dimensions) | Forskyvningen ({{ui:Forskyv}}). Rett etter: en ny lengde, som endrer størrelsen på modellen |

{{ui:Flytt}}, {{ui:Roter}} og {{ui:Skaler}} virker på utvalget. Hvis ingenting er valgt, tar de det som klikkes først (en flate tar med kantene sine).

## Kameraverktøy

| Verktøy | Tast | Dra for å |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Snu rundt delen av modellen under pekeren ({{key:Shift}} panorerer) |
| {{ui:Panorer}} | {{key:H}} | Skyve visningen |
| {{ui:Zoom}} | {{key:Z}} | Zoom: opp er inn, ned er ut |
| {{ui:Utstrekning}} | {{key:Shift+Z}} | (en knapp, ikke et verktøy) Tilpass hele modellen |

Med mus trenger man sjelden disse: midtdra roterer, høyredra panorerer, og hjulet zoomer med ethvert verktøy. Se [Roter, panorer og zoom](topic:orbit-pan-zoom).

## Organiser

| Knapp | Tast | Gjør |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | Gjør utvalget til en komponent |
| {{ui:Gruppe}} | {{key:Shift+G}} | Gjør utvalget til en gruppe |
| {{ui:Eksploder}} | ingen | Gjør de valgte gruppene og komponentene tilbake til løs geometri |

## Plasser komponent

Ikke på verktøylinjen: klikk {{ui:Plasser}} ved siden av en komponent i panelet {{ui:Komponenter}}. Klikk én gang der komponentens origo skal være; verktøyet går så tilbake til {{ui:Velg}}.
